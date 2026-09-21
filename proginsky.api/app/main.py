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
    confirm_payment_order_result,
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
    get_buddy_data_db,
    get_club_state_db,
    get_club_plans_db,
    get_club_checkout_preview_db,
    create_club_checkout_db,
    cancel_club_recurring_db,
    change_future_plan_db,
    buddy_decision_db,
    report_buddy_nonresponse_db,
    process_buddy_cycles_db,
    get_active_challenges_db,
    join_challenge_db,
    submit_challenge_db,
    create_challenge_db,
    record_acquisition_touchpoint,
    grant_complimentary_access_db,
    adjust_internal_balance_db,
    set_partner_status_db,
    set_referral_rate_db,
    create_withdrawal_db,
    process_withdrawal_db,
    register_refund_db,
    get_admin_user_card_db,
    find_users_for_reactivation_db,
    get_pending_withdrawals_db,
    grant_reward_db,
    set_user_blocked_db,
    release_stale_club_payments_db,
    release_failed_club_payment,
    queue_payment_success_notification_db,
    get_pending_payment_success_notifications_db,
    mark_payment_success_notification_sent_db,
    fail_payment_success_notification_db,
    release_stuck_payment_success_notifications_db,
    cancel_last_payment_db,
    save_payment_success_invite_link_db,
)

from app.essences import (
    User, TelegramChainUser, CreatePaymentRequest, CreateUdateTask, TaskAnswer, NewMessage,
    RowToDelete, EditedMessage, MoodleCoursePurchase, WebCheckoutRequest, ClubCheckoutRequest,
    FuturePlanRequest, BuddyDecisionRequest, ChallengeJoinRequest, ChallengeSubmissionRequest,
    AcquisitionTouchpointRequest, ComplimentaryAccessRequest, BalanceAdjustmentRequest,
    PartnerStatusRequest, ReferralRateRequest, WithdrawalRequest, WithdrawalProcessRequest,
    RefundRequest, CreateChallengeRequest, RewardGrantRequest, UserBlockRequest,
)
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
async def access_request(telegram_user_id: int, invite_link: str):
    return await give_club_trail_access(telegram_user_id, invite_link)

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
    payment_result = await confirm_payment_order_result(inv_id, out_sum)
    if not payment_result["confirmed"]:
        raise HTTPException(status_code=404, detail="Заказ не найден или сумма не совпадает",)
    order = await get_payment_order_details(inv_id)
    if order is None:
        raise HTTPException(status_code=404, detail="Заказ не найден после подтверждения",)
    if order["product_slug"] == "main_course":
        moodle_user = await ensure_moodle_access(order)
        await save_moodle_user(order["user_id"], moodle_user["id"], moodle_user.get("username"))
    return f"OK{inv_id}"

@app.get("/club_payment_notifications/pending")
async def get_pending_club_payment_notifications(limit: int = 20):
    return await get_pending_payment_success_notifications_db(limit)

@app.post("/club_payment_notifications/{order_id}/invite")
async def save_club_payment_invite(order_id: int, request: Request):
    payload = await request.json()
    invite_link = payload.get("invite_link")
    if not invite_link:
        raise HTTPException(status_code=400, detail="invite_link is required")
    saved_link = await save_payment_success_invite_link_db(order_id, invite_link)
    if saved_link is None:
        raise HTTPException(status_code=409, detail="Не удалось сохранить invite-ссылку")
    return {
        "ok": True,
        "invite_link": saved_link,
    }

@app.post("/club_payment_notifications/{order_id}/sent")
async def mark_club_payment_notification_sent(order_id: int):
    marked = await mark_payment_success_notification_sent_db(order_id)
    if not marked:
        raise HTTPException(status_code=404, detail="Уведомление не найдено")
    return {"ok": True}

@app.post("/club_payment_notifications/{order_id}/failed")
async def fail_club_payment_notification(order_id: int, request: Request):
    payload = await request.json()
    failed = await fail_payment_success_notification_db(order_id, payload.get("error"))
    if not failed:
        raise HTTPException(status_code=404, detail="Уведомление не найдено")
    return {"ok": True}

@app.post("/club_payment_notifications/release_stuck")
async def release_stuck_club_payment_notifications():
    return {"released": await release_stuck_payment_success_notifications_db()}

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

@app.get("/get_buddy_data")
async def get_buddy_data(telegram_user_id: int):
    return await get_buddy_data_db(telegram_user_id)

@app.get("/club_state")
async def club_state(telegram_user_id: int):
    result = await get_club_state_db(telegram_user_id)
    if result is None:
        raise HTTPException(status_code=404, detail="Пользователь не найден")
    return result

@app.get("/club_plans")
async def club_plans():
    return await get_club_plans_db()

@app.get("/club_checkout_preview")
async def club_checkout_preview(telegram_user_id: int, tariff_slug: str):
    result = await get_club_checkout_preview_db(telegram_user_id, tariff_slug)
    if result is None:
        raise HTTPException(status_code=404, detail="Пользователь или тариф не найден")
    return result

@app.post("/club_checkout_create", status_code=201)
async def club_checkout_create(data: ClubCheckoutRequest):
    checkout = await create_club_checkout_db(data.telegram_user_id, data.tariff_slug, data.recurring_requested)
    if checkout is None:
        raise HTTPException(status_code=404, detail="Пользователь или тариф не найден")
    if checkout.get("error"):
        raise HTTPException(status_code=409, detail=checkout["error"])
    if checkout["external_amount"] == 0:
        checkout["payment_url"] = None
        return checkout
    amount = f"{checkout['external_amount']:.2f}"
    checkout["payment_url"] = build_payment_url(
        checkout["order_id"],
        amount,
        f"ИИ-клуб Прогинский: {checkout['tariff_name']}",
    )
    return checkout

@app.post("/club_cancel_recurring")
async def club_cancel_recurring(telegram_user_id: int):
    return await cancel_club_recurring_db(telegram_user_id)

@app.post("/club_change_future_plan")
async def club_change_future_plan(data: FuturePlanRequest):
    return await change_future_plan_db(data.telegram_user_id, data.tariff_slug)

@app.post("/buddy_decision")
async def buddy_decision(data: BuddyDecisionRequest):
    return await buddy_decision_db(data.telegram_user_id, data.decision)

@app.post("/buddy_nonresponse")
async def buddy_nonresponse(telegram_user_id: int):
    return await report_buddy_nonresponse_db(telegram_user_id)

@app.post("/process_buddy_cycles")
async def process_buddy_cycles():
    return await process_buddy_cycles_db()

@app.get("/challenges")
async def challenges(telegram_user_id: int | None = None):
    return await get_active_challenges_db(telegram_user_id)

@app.post("/challenge_join")
async def challenge_join(data: ChallengeJoinRequest):
    result = await join_challenge_db(data.telegram_user_id, data.challenge_id, data.mode, data.teammate_telegram_user_id)
    if not result:
        raise HTTPException(status_code=409, detail="Не удалось присоединиться к челленджу")
    return {"entry_id": result}

@app.post("/challenge_submit")
async def challenge_submit(data: ChallengeSubmissionRequest):
    result = await submit_challenge_db(data.telegram_user_id, data.challenge_id, data.submission_type, data.payload)
    if not result.get("ok"):
        raise HTTPException(status_code=400, detail=result.get("error", "submission_failed"))
    return result

@app.post("/acquisition_touchpoint")
async def acquisition_touchpoint(data: AcquisitionTouchpointRequest):
    return await record_acquisition_touchpoint(
        data.telegram_user_id,
        data.source,
        data.campaign,
        data.payload,
        data.referrer_link_token,
    )

@app.get("/reactivation_users")
async def reactivation_users(days: int):
    return await find_users_for_reactivation_db(days)

@app.get("/admin_user_card")
async def admin_user_card(telegram_user_id: int):
    result = await get_admin_user_card_db(telegram_user_id)
    if result is None:
        raise HTTPException(status_code=404, detail="Пользователь не найден")
    return result

@app.post("/admin_grant_access")
async def admin_grant_access(data: ComplimentaryAccessRequest):
    return await grant_complimentary_access_db(data.telegram_user_id, data.days, data.lifetime, data.actor_id, data.reason)

@app.post("/admin_adjust_balance")
async def admin_adjust_balance(data: BalanceAdjustmentRequest):
    return await adjust_internal_balance_db(data.telegram_user_id, data.amount, data.actor_id, data.reason)

@app.post("/admin_set_partner")
async def admin_set_partner(data: PartnerStatusRequest):
    return await set_partner_status_db(data.telegram_user_id, data.enabled, data.actor_id, data.reason)

@app.post("/admin_set_referral_rate")
async def admin_set_referral_rate(data: ReferralRateRequest):
    return await set_referral_rate_db(data.telegram_user_id, data.rate_percent, data.actor_id, data.reason)

@app.post("/partner_withdrawal")
async def partner_withdrawal(data: WithdrawalRequest):
    return await create_withdrawal_db(data.telegram_user_id, data.amount, data.details)

@app.post("/admin_process_withdrawal")
async def admin_process_withdrawal(data: WithdrawalProcessRequest):
    return await process_withdrawal_db(data.withdrawal_id, data.status, data.actor_id)

@app.get("/admin_pending_withdrawals")
async def admin_pending_withdrawals():
    return await get_pending_withdrawals_db()

@app.post("/admin_register_refund")
async def admin_register_refund(data: RefundRequest):
    return await register_refund_db(data.order_id, data.external_amount, data.provider_refund_id, data.actor_id)

@app.post("/admin_create_challenge")
async def admin_create_challenge(data: CreateChallengeRequest):
    return await create_challenge_db(
        data.title, data.description, data.starts_at, data.deadline,
        data.participation_mode, data.submission_format, data.ai_review_enabled,
    )

@app.post("/admin_grant_reward")
async def admin_grant_reward(data: RewardGrantRequest):
    return await grant_reward_db(data.telegram_user_id, data.reward_type, data.value, data.title, data.actor_id)

@app.post("/admin_set_blocked")
async def admin_set_blocked(data: UserBlockRequest):
    return await set_user_blocked_db(data.telegram_user_id, data.blocked, data.actor_id, data.reason)

@app.post("/release_stale_club_payments")
async def release_stale_club_payments(hours: int = 24):
    return await release_stale_club_payments_db(hours)

@app.post("/cancel_last_payment")
async def cancel_last_payment(telegram_user_id: int):
    return await cancel_last_payment_db(telegram_user_id)





















@app.get("/api/payments/robokassa/success", response_class=HTMLResponse)
async def robokassa_success():
    return render_payment_page(
        "Оплата прошла успешно",
        "Платёж получен, доступ уже активирован. Можно продолжать обучение.",
        "Перейти к обучению",
        "https://study.proginsky.ru/login/index.php",
    )

@app.get("/api/payments/robokassa/fail", response_class=HTMLResponse)
async def robokassa_fail(request: Request):
    inv_id = request.query_params.get("InvId")
    if inv_id and inv_id.isdigit():
        await release_failed_club_payment(int(inv_id))
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