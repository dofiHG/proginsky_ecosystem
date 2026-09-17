import asyncpg
import asyncio
import secrets
import os
import json
from redis.asyncio import Redis
from contextlib import asynccontextmanager, suppress
from fastapi.responses import PlainTextResponse, HTMLResponse
from fastapi import FastAPI, HTTPException, Request, Response
from app.moodle_manager import ensure_moodle_access
from additional_pages.robokassa import render_payment_page
from app.db_manager import (
    connect_database,
    disconnect_database,
    save_lead_from_site,
    add_telegram_to_registration,
    get_scheduled_messages,
    delete_scheduled_message,
    save_lead_from_telegram,
    create_payment_order,
    confirm_payment_order,
    if_paid_access,
    create_queue_record,
    create_buddy_pairs,
    get_all_users,
    get_club_members,
    create_month_task,
    get_current_task,
    update_current_task,
    pass_the_task,
    check_existing_answer,
    find_in_pairs,
    switch_month_task,
    delete_expired_access,
    create_new_message,
    delete_row,
    update_scheduled_message,
    check_buddy_queue,
    find_users_with_expiring_access,
    moodle_create_course_purchase,
    get_user_by_token,
    find_user_by_email_or_phone,
    get_or_create_checkout_user,
    create_payment_order_by_user_id,
    get_payment_order_details,
    save_moodle_user,
    check_user_channel_access,
    get_referal_token,
    give_club_trail_access,
    try_to_add_token_db,
    check_referal_existing,
    get_data_for_menu_db,
)

from app.essences import User, TelegramChainUser, CreatePaymentRequest, CreateUdateTask, TaskAnswer, NewMessage, RowToDelete, EditedMessage, MoodleCoursePurchase, WebCheckoutRequest
from robokassa.robokassa import build_payment_url, check_result_signature

redis: Redis | None = None

async def buddy_pairs_worker() -> None:
    while True:
        try:
            pairs = await create_buddy_pairs()
            if pairs:
                print(f"Отправляем в Redis: {pairs}", flush=True)
                await redis.publish("buddy_pairs", json.dumps(pairs),)
        except asyncio.CancelledError:
            raise
        except Exception as error:
            print(f"Ошибка создания buddy-пар: {error}")
        await asyncio.sleep(6)

@asynccontextmanager
async def lifespan(app: FastAPI):
    global redis
    redis = Redis.from_url(os.getenv("REDIS_URL"), decode_responses=True,)
    await connect_database()
    buddy_task = asyncio.create_task(buddy_pairs_worker())
    try:
        yield
    finally:
        buddy_task.cancel()
        with suppress(asyncio.CancelledError):
            await buddy_task
        await redis.aclose()
        await disconnect_database()

app = FastAPI(lifespan=lifespan)

@app.post("/register_lead_site")
async def register_lead_site(user: User):
    try:
        existing_user = await find_user_by_email_or_phone(user.email, user.phone)
        if existing_user and existing_user["telegram_user_id"]:
            return {"id": existing_user["id"], "telegram_linked": True}
        token = await generate_register_token()
        saved_user = await save_lead_from_site(user.name, user.email, user.phone,token)
        return {"id": saved_user["id"], "token": saved_user["token"], "telegram_linked": False}
    except ValueError as error:
        raise HTTPException(status_code=409, detail=str(error))
    except asyncpg.UniqueViolationError:
        raise HTTPException(status_code=409, detail="Email или телефон принадлежат другому пользователю")

@app.post("/chain_telegram_by_token")
async def chain_telegram_by_token(data: TelegramChainUser):
    result = await add_telegram_to_registration(data.token, data.telegram_user_id, data.telegram_username)
    return Response(status_code=result)

async def generate_register_token():
    return secrets.token_hex(16)

@app.get("/get_scheduled_messages")
async def get_scheduled_messages_from_db(auditory_type: str | None = None, scheduled_message_id: int | None = None) -> list[dict]:
    messages = await get_scheduled_messages(auditory_type, scheduled_message_id)
    return messages

@app.post("/give_club_trail_access")
async def access_reauest(telegram_user_id: int):
    return await give_club_trail_access(telegram_user_id)

@app.post("/register_telegram_user")
async def register_telegram_user(data: TelegramChainUser):
    result = await save_lead_from_telegram(data.telegram_user_id, data.telegram_username)
    return Response(status_code=result)

@app.post("/payments_robokassa_create", status_code=201)
async def create_robokassa_payment(data: CreatePaymentRequest) -> dict:
    order = await create_payment_order(data.telegram_user_id, data.tariff_slug,)
    if order is None:
        raise HTTPException(status_code=404, detail="Пользователь или тариф не найден",)
    amount = f"{order['amount']:.2f}"
    payment_url = build_payment_url(order["id"], amount, f"Оплата тарифа {order['tariff_name']}",)
    return {"order_id": order["id"], "amount": amount, "payment_url": payment_url,}

@app.api_route("/payments_robokassa_result", methods=["GET", "POST"], response_class=PlainTextResponse,)
@app.api_route("/api/payments/robokassa/result", methods=["GET", "POST"], response_class=PlainTextResponse,)
async def payments_robokassa_result(request: Request) -> str:
    if request.method == "POST":
        data = dict(await request.form())
    else:
        data = dict(request.query_params)
    out_sum = str(data.get("OutSum") or "")
    inv_id_raw = data.get("InvId")
    signature = str(data.get("SignatureValue") or "")
    if not out_sum or inv_id_raw is None or not signature:
        raise HTTPException(status_code=400, detail="Недостаточно параметров Robokassa",)
    try:
        inv_id = int(inv_id_raw)
    except (TypeError, ValueError):
        raise HTTPException(status_code=400, detail="Некорректный InvId",)
    if not check_result_signature(out_sum, inv_id, signature):
        raise HTTPException(status_code=403, detail="Неверная подпись",)
    payment_confirmed = await confirm_payment_order(inv_id, out_sum,)
    if not payment_confirmed:
        raise HTTPException(status_code=404, detail="Заказ не найден или сумма не совпадает",)
    order = await get_payment_order_details(inv_id)
    if order is None:
        raise HTTPException(status_code=404, detail="Заказ не найден после подтверждения",)
    if order["product_slug"] == "main_course":
        moodle_user = await ensure_moodle_access(order)
        await save_moodle_user( order["user_id"], moodle_user["id"], moodle_user.get("username"),)
    return f"OK{inv_id}"

@app.get("/check_access_club_user")
async def check_access_club_user(telegram_user_id: int) -> bool:
    has_access = await if_paid_access(telegram_user_id)
    return has_access

@app.post("/add_club_user_to_queue")
async def add_club_user_to_queue(telegram_user_id: int) -> bool:
    response = await create_queue_record(telegram_user_id)
    return response

@app.get("/get_all_users_by_page")
async def get_all_users_by_page(limit: int | None = None, offset: int = 0):
    return await get_all_users(limit, offset)

@app.get("/get_club_members_by_page")
async def get_club_members_by_page(limit: int | None = None, offset: int | None = None):
    return await get_club_members(limit, offset)

@app.post("/create_task")
async def create_task(data: CreateUdateTask):
    return await create_month_task(data.text, data.file_id, data.file_type)

@app.get("/get_current_task")
async def get_task(status: int):
    return await get_current_task(status)

@app.post("/update_task")
async def update_task(data: CreateUdateTask):
    return await update_current_task(data.text, data.file_id, data.file_type, data.id)

@app.post("/pass_the_task")
async def pass_task(data: TaskAnswer):
    return await pass_the_task(data.telegram_user_id, data.file_id)

@app.get("/check_task_answer")
async def check_task_answer(telegram_user_id: int):
    response = await check_existing_answer(telegram_user_id)
    return response is not None

@app.get("/check_buddy_existing")
async def check_buddy_existing(telegram_user_id: int):
    response = await find_in_pairs(telegram_user_id)
    return response is not None

@app.post("/switch_month_task")
async def switch_month_task_in_db():
    response = await switch_month_task()
    return response

@app.delete("/expired_access")
async def remove_expired_accesses(trail: bool = False):
    return await delete_expired_access(trail)

@app.post("/create_new_message")
async def create_new_message_in_db(data: NewMessage):
    response = await create_new_message(data.message_text, data.auditory_type, data.send_time, data.document_id, data.document_type)
    return response

@app.post("/update_scheduled_message")
async def update_scheduled_message_db(data: EditedMessage):
    response = await update_scheduled_message(data.message_id, data.message_text, data.send_time, data.document_id, data.document_type)
    return response

@app.post("/delete_row")
async def delet_row_db(data: RowToDelete):
    try: await delete_row(data.table_name, data.row_id)
    except: return 404

@app.get("/check_buddy_queue")
async def check_buddy_queue_in_db(telegram_user_id: int):
    return await check_buddy_queue(telegram_user_id)

@app.get("/find_users_with_expiring_access")
async def find_users_with_expiring_access_db(days: int, trail: bool = False):
    return await find_users_with_expiring_access(days, trail)

@app.post("/moodle_course_purchase")
async def moodle_course_purchase_api(data: MoodleCoursePurchase):
    return await moodle_create_course_purchase(data.email, data.course_slug, data.tariff_slug, data.payment_id)

@app.post("/api/web/checkout")
async def web_checkout(data: WebCheckoutRequest):
    try:
        course_slug = (data.course_slug or data.course or "cursor_start").strip()
        tariff_slug = (data.tariff_slug or data.tariff or "start").strip().lower()
        if course_slug != "cursor_start":
            return {"ok": False, "error": "course_not_found"}
        if data.promo_code and data.promo_code.strip():
            return {"ok": False, "error": "Промокоды временно недоступны"}
        tariff_map = {
            "start": "main_start",
            "together": "main_together",
            "vip": "main_turnkey"
        }
        internal_tariff_slug = tariff_map.get(tariff_slug)
        if internal_tariff_slug is None:
            return {"ok": False, "error": "tariff_not_found"}
        name = f"{data.first_name.strip()} {data.last_name.strip()}".strip()
        user = await get_or_create_checkout_user(name, str(data.email), data.phone)
        order = await create_payment_order_by_user_id(user["id"], internal_tariff_slug)
        if order is None:
            return {"ok": False, "error": "payment_order_not_created"}
        amount = f"{order['amount']:.2f}"
        description = f"Основы работы с Cursor, тариф {order['tariff_name']}"
        payment_url = build_payment_url(order["id"], amount, description)
        return {"ok": True, "order_id": order["id"], "inv_id": order["id"], "amount": amount, "course_slug": course_slug, "tariff_slug": tariff_slug, "payment_url": payment_url}
    except ValueError as error:
        return {"ok": False, "error": str(error)}
    except asyncpg.UniqueViolationError:
        return {"ok": False, "error": "Email или телефон уже используется другим пользователем"}

@app.post("/check_user_channel_access")
async def request_check_user_channel_access(telegram_user_id: int):
    return await check_user_channel_access(telegram_user_id)

@app.get("/get_referal_token")
async def get_referal_token_db(telegram_user_id: int):
    return await get_referal_token(telegram_user_id)

@app.post("/try_to_add_token")
async def try_to_add_token(token: str, telegram_user_id: int):
    return await try_to_add_token_db(token, telegram_user_id)

@app.get("/check_referal_id")
async def check_referal_id(telegram_user_id: int):
    return await check_referal_existing(telegram_user_id)

@app.get("/get_data_for_menu")
async def get_data_for_menu(telegram_user_id: int):
    return await get_data_for_menu_db(telegram_user_id)




















@app.get("/api/payments/robokassa/success", response_class=HTMLResponse)
async def robokassa_success():
    return render_payment_page(
        "Оплата прошла успешно",
        "Платёж получен, доступ уже активирован. Можно продолжать обучение.",
        "Перейти к обучению",
        "https://study.proginsky.ru/login/index.php",
    )

@app.get("/api/payments/robokassa/fail", response_class=HTMLResponse)
async def robokassa_fail():
    return render_payment_page(
        "Оплата не завершена",
        "Платёж не был завершён. Вы можете вернуться назад и попробовать оплатить ещё раз.",
        "Вернуться к оплате",
        "https://study.proginsky.ru/course-web/?course=cursor_start&course_slug=cursor_start",
        success=False,
    )



















@app.get("/health")
async def health_check():
    return {"ok": 200}