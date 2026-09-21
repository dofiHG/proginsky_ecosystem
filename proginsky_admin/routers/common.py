from aiogram import Router, F, BaseMiddleware
from aiogram.filters import Command, CommandStart, CommandObject
from aiogram.types import Message, FSInputFile, CallbackQuery
from keyboards import (
    admin_menu, all_users_pages, task_menu, message_menu, show_messages_menu, edit_message_menu,
    user_card_menu, confirm_admin_action, withdrawals_list_menu, withdrawal_menu, challenges_admin_menu,
)
from api_client import (
    get_users, create_task, get_current_task, update_current_task, add_new_message, get_scheduled_messages,
    update_scheduled_message, get_admin_user_card, grant_access, adjust_balance, set_partner_status,
    set_referral_rate, get_pending_withdrawals, process_withdrawal, create_challenge, grant_reward, set_user_blocked,
)
from edit_bot_text import edit_message
from aiogram.fsm.state import State, StatesGroup
from aiogram.fsm.context import FSMContext
import os
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
from datetime import datetime
from zoneinfo import ZoneInfo

router = Router()
admins = {int(admin_id) for admin_id in os.getenv("ADMIN_IDS", "").split(",") if admin_id.strip()}
TIME_ZONE = ZoneInfo("Europe/Moscow")
FILES_PATH = Path("/opt/proginsky_ecosystem/proginsky_storage")

class AdminUsersState(StatesGroup):
    browsing_users = State()
    waiting_new_task = State()
    waiting_edit_task = State()
    waiting_message_text = State()
    waiting_message_time = State()
    waiting_edit_message_text = State()
    waiting_edit_message_time = State()
    waiting_user_card_id = State()
    waiting_access_days = State()
    waiting_balance_change = State()
    waiting_referral_rate = State()
    waiting_action_reason = State()
    waiting_create_challenge = State()
    waiting_reward = State()

class AdminOnlyMiddleware(BaseMiddleware):
    async def __call__(self, handler, event, data):
        user = data.get("event_from_user")
        if user is None or user.id not in admins:
            return None
        return await handler(event, data)

router.message.middleware(AdminOnlyMiddleware())
router.callback_query.middleware(AdminOnlyMiddleware())

@router.message(CommandStart())
async def start_handler(message: Message, command: CommandObject) -> None:
    if message.from_user.id not in admins:
        return
    await message.answer("Админ-панель", reply_markup=admin_menu())

@router.callback_query(F.data == "get_all_users_by_page")
async def get_all_users_by_page(callback: CallbackQuery, state: FSMContext):
    await state.set_state(AdminUsersState.browsing_users)
    await state.update_data(users_type="all_users")
    await show_users(callback, state, page=0)

@router.callback_query(F.data == "get_club_members")
async def get_club_members(callback: CallbackQuery, state: FSMContext):
    await state.set_state(AdminUsersState.browsing_users)
    await state.update_data(users_type="club_members")
    await show_users(callback, state, page=0)

async def show_users(callback: CallbackQuery, state: FSMContext, page: int = 0):
    limit = 10
    offset = limit * page
    data = await state.get_data()
    users_type = data.get("users_type")
    current_page_users = await get_users(limit, offset, users_type)
    if current_page_users == []:
        await edit_message(callback.message, "Пользователей нет!", reply_markup=admin_menu())
        return
    total_count = current_page_users[0]["total_count"]
    pages_count = (total_count + limit - 1) // limit
    text = f"Страница {page + 1}/{pages_count}\n\n"
    for user in current_page_users:
        text += f"Имя: {user['name']}\n"
        text += f"Email: {user['email']}\n"
        text += f"Telegram ID: {user['telegram_user_id']}\n"
        text += f"Username: @{user['telegram_username']}\n"
        text += f"Телефон: {user['phone_number']}\n"
        if (users_type == "all_users"):
            text += f"Дата регистрации: {user['created_at']}\n\n"
        else:
            text += f"Тариф: {user['product_name']}\n"
            text += f"Старт подписки: {user['starts_at']}\n"
            text += f"Конец подписки: {user['expires_at']}\n\n"
    await edit_message(callback.message, text, reply_markup=all_users_pages(page, pages_count),)

@router.callback_query(AdminUsersState.browsing_users, F.data.startswith("users_page_"))
async def users_page(callback: CallbackQuery, state: FSMContext):
    page = int(callback.data.replace("users_page_", ""))
    await show_users(callback, state, page)

@router.callback_query(F.data == "admin_menu")
async def back_to_admin_menu(callback: CallbackQuery):
    await edit_message(callback.message, "Админ-панель", reply_markup=admin_menu())

@router.callback_query(F.data == "month_task")
async def month_task(callback: CallbackQuery):
    await edit_message(callback.message, "Выберите действие", reply_markup=task_menu())

@router.callback_query(F.data == "create_new_task")
async def create_new_task(callback: CallbackQuery, state: FSMContext):
    await state.set_state(AdminUsersState.waiting_new_task)
    await edit_message(callback.message, "Отправьте текст задания и прикрепите файл")

@router.callback_query(F.data == "edit_current_task")
async def edit_current_task(callback: CallbackQuery, state: FSMContext):
    await state.set_state(AdminUsersState.waiting_edit_task)
    current_task = await get_current_task(0)
    TASK_PATH = Path("/opt/proginsky_ecosystem/proginsky_storage/task")
    files = [file for file in TASK_PATH.iterdir() if file.is_file()]
    file = files[0] if files else None
    await edit_message(callback.message, "Отправьте новое задание и файл\nТекущее задание:\n\n" + current_task["text"], reply_markup=admin_menu(), file=file)

@router.message(AdminUsersState.waiting_new_task)
async def receive_new_task(message: Message, state: FSMContext):
    if message.from_user.id not in admins:
        return
    if not message.document:
        await message.answer("Прикрепите файл к заданию")
        return
    text = ""
    if message.text or message.caption:
        text = message.caption or message.text
    file_id = message.document.file_id
    file_type = "document"
    await create_task(text=text, file_id=file_id, file_type=file_type)
    await state.clear()
    await message.answer("Успешно!", reply_markup=task_menu())

@router.message(AdminUsersState.waiting_edit_task)
async def edit_task(message: Message, state: FSMContext):
    file_id = None
    file_type = None
    text = ""
    if message.from_user.id not in admins:
        return
    if message.text or message.caption:
        text = message.caption or message.text
    if message.document:
        file_id = message.document.file_id
        file_type = "document"
    current_task = await get_current_task(0)
    await update_current_task(text, file_id, file_type, current_task["id"])
    await message.answer("Успешно!", reply_markup=task_menu())
    await state.clear()

@router.callback_query(F.data == "task_download")
async def task_download(callback: CallbackQuery):
    DATA_PATH = Path("/opt/proginsky_ecosystem/proginsky_storage/answers")
    ZIP_PATH = Path("/opt/proginsky_ecosystem/proginsky_storage/task_answers.zip")
    files = [file for file in DATA_PATH.iterdir() if file.is_file()]
    with ZipFile(ZIP_PATH, "w", ZIP_DEFLATED) as zip_file:
        for file in files:
            zip_file.write(file, arcname=file.name)
    document = FSInputFile(ZIP_PATH, filename="task_answers.zip")
    await callback.message.answer_document(document=document, caption=f"Ответы на задания: {len(files)} файлов")
    ZIP_PATH.unlink(missing_ok=True)

@router.callback_query(F.data == "messages_menu")
async def open_message_menu(callback: CallbackQuery):
    await edit_message(callback.message, "Выберите действие", reply_markup=message_menu())

@router.callback_query(F.data == "message_to_all")
async def message_to_all(callback: CallbackQuery, state: FSMContext):
    await state.clear()
    await edit_message(callback.message, "Введите сообщение для всех, здесь можно прикрепить фото/документ")
    await state.set_state(AdminUsersState.waiting_message_text)
    await state.update_data(auditory_type="all_users")

@router.callback_query(F.data == "message_to_club")
async def message_to_club(callback: CallbackQuery, state: FSMContext):
    await state.clear()
    await edit_message(callback.message, "Введите сообщение для членов клуба, здесь можно прикрепить фото/документ")
    await state.set_state(AdminUsersState.waiting_message_text)
    await state.update_data(auditory_type="club_members")

@router.message(AdminUsersState.waiting_message_text)
async def save_message(message: Message, state: FSMContext):
    text = message.text or message.caption
    document_id = None
    document_type = None
    extension = None
    if message.document:
        document_id = message.document.file_id
        extension = Path(message.document.file_name).suffix if message.document.file_name else ""
        document_type = "document"
    elif message.photo:
        document_id = message.photo[-1].file_id
        extension = ".jpg"
        document_type = "photo"
    await state.update_data(message_text=text, document_id=document_id, extension=extension, document_type=document_type)
    await message.answer("Теперь введите время в формате число.месяц.год часы:минуты")
    await state.set_state(AdminUsersState.waiting_message_time)

@router.message(AdminUsersState.waiting_message_time)
async def set_message_time(message: Message, state: FSMContext):
    try:
        send_time = datetime.strptime(message.text.strip(), "%d.%m.%Y %H:%M")
        send_time = send_time.replace(tzinfo=TIME_ZONE)
        data = await state.get_data()
        document_id = data.get("document_id")
        document_type = data.get("document_type")
        if data.get("document_id"):
            document_path = FILES_PATH / "scheduled_files" / f'{document_id}{data["extension"]}'
            await message.bot.download(data["document_id"], destination=document_path)
        result = await add_new_message(data["message_text"], data["auditory_type"], send_time, data["document_id"], document_type)
        if not result:
            raise Exception("Не удалось сохранить сообщение")
        await message.answer("Успешно!", reply_markup=admin_menu())
        await state.clear()
    except:
        await message.answer("Произошла ошибка!", reply_markup=admin_menu())
        await state.clear()

@router.callback_query(F.data == "show_scheduled_messages")
async def show_scheduled_messages(callback: CallbackQuery):
    messages = await get_scheduled_messages()
    if not messages:
        await edit_message(callback.message, "Запланированных сообщений нет", reply_markup=message_menu())
        return
    await edit_message(callback.message, "Выберите сообщение", reply_markup=show_messages_menu(messages))

@router.callback_query(F.data.startswith("scheduled_message:"))
async def show_specific_message(callback: CallbackQuery, state: FSMContext):
    await state.clear()
    messages = await get_scheduled_messages(scheduled_message_id=int(callback.data.split(":")[1]))
    if not messages:
        await edit_message(callback.message, "Сообщение не найдено", reply_markup=message_menu())
        return
    message = messages[0]
    await state.update_data(scheduled_message_id=message["id"], document_id=message.get("document_id"))
    text = f'id: {message["id"]}\n\n{message["text"] or ""}\n\nВремя отправки: {message["send_time"]}\nАудитория: {message["auditory_type"]}'
    if message.get("document_id"):
        document_path = next((FILES_PATH / "scheduled_files").glob(f'{message["document_id"]}.*'), None)
        if document_path is None:
            await edit_message(callback.message, f"{text}\n\nФайл не найден", reply_markup=edit_message_menu())
            return
        if message["document_type"] == "photo":
            await edit_message(callback.message, text=text, photo=document_path, reply_markup=edit_message_menu())
        elif message["document_type"] == "document":
            await edit_message(callback.message, text=text, file=document_path, reply_markup=edit_message_menu())
        return
    await edit_message(callback.message, text, reply_markup=edit_message_menu())

@router.callback_query(F.data == "edit_scheduled_message_text")
async def edit_scheduled_message_text(callback: CallbackQuery, state: FSMContext):
    await edit_message(callback.message, "Введите новый текст сообщения, здесь можно прикрепить фото/документ")
    await state.set_state(AdminUsersState.waiting_edit_message_text)

@router.message(AdminUsersState.waiting_edit_message_text)
async def save_scheduled_message_text(message: Message, state: FSMContext):
    data = await state.get_data()
    text = message.text or message.caption
    old_document_id = data.get("document_id")
    document_id = None
    document_type = None
    extension = None
    try:
        if message.document:
            document_id = message.document.file_id
            extension = Path(message.document.file_name).suffix if message.document.file_name else ""
            document_type = "document"
        elif message.photo:
            document_id = message.photo[-1].file_id
            extension = ".jpg"
            document_type = "photo"
        if document_id:
            document_path = FILES_PATH / "scheduled_files" / f"{document_id}{extension}"
            await message.bot.download(document_id, destination=document_path)
        result = await update_scheduled_message(data["scheduled_message_id"], message_text=text, document_id=document_id, document_type=document_type)
        if not result:
            raise Exception("Не удалось изменить сообщение")
        if document_id and old_document_id and document_id != old_document_id:
            old_files = (FILES_PATH / "scheduled_files").glob(f"{old_document_id}.*")
            for old_file in old_files:
                old_file.unlink()
        await state.clear()
        await message.answer("Сообщение изменено", reply_markup=message_menu())
    except:
        await message.answer("Произошла ошибка!", reply_markup=message_menu())

@router.callback_query(F.data == "edit_scheduled_message_time")
async def edit_scheduled_message_time(callback: CallbackQuery, state: FSMContext):
    await edit_message(callback.message, "Введите новое время в формате число.месяц.год часы:минуты")
    await state.set_state(AdminUsersState.waiting_edit_message_time)

@router.message(AdminUsersState.waiting_edit_message_time)
async def save_scheduled_message_time(message: Message, state: FSMContext):
    try:
        send_time = datetime.strptime(message.text.strip(), "%d.%m.%Y %H:%M")
        send_time = send_time.replace(tzinfo=TIME_ZONE)
        data = await state.get_data()
        await update_scheduled_message(data["scheduled_message_id"], send_time=send_time)
        await state.clear()
        await message.answer("Время отправки изменено", reply_markup=message_menu())
    except:
        await message.answer("Неверный формат времени")

def _fmt_money(value) -> str:
    try:
        return f"{float(value or 0):,.2f}".replace(",", " ").replace(".00", "")
    except (TypeError, ValueError):
        return str(value or 0)


def _format_user_card(card: dict) -> str:
    user = card["user"]
    text = "Карточка пользователя\n\n"
    text += f"Telegram ID: {user.get('telegram_user_id')}\n"
    text += f"Username: @{user.get('telegram_username') or '—'}\n"
    text += f"Имя: {user.get('name') or '—'}\n"
    text += f"Email: {user.get('email') or '—'}\n"
    text += f"trial_used: {user.get('expired_trail')}\n"
    text += f"blocked: {bool(user.get('blocked_at'))}\n"
    text += f"Internal balance: {_fmt_money(user.get('balance'))} ₽\n"
    text += f"Subscription: {user.get('subscription_status')} / {user.get('subscription_type')}\n"
    if user.get("subscription_term"):
        text += f"План: {user.get('subscription_term')} мес. / {user.get('period_days')} дней\n"
    text += f"paid_until: {user.get('paid_until') or '—'}\n"
    text += f"next_charge_at: {user.get('next_charge_at') or '—'}\n"
    text += f"Partner: {user.get('partner_status')}\n"
    if user.get("partner_status"):
        text += f"Withdrawable: {_fmt_money(user.get('withdrawable_available'))} ₽\n"
        text += f"Withdrawable reserved: {_fmt_money(user.get('withdrawable_reserved'))} ₽\n"
    text += f"Pending withholding: {_fmt_money(user.get('pending_withholding'))} ₽\n"
    text += f"Referrals: {user.get('referrals_count', 0)}\n"
    text += f"Buddy: {card.get('buddy', {}).get('status', 'none')}\n"
    accesses = card.get("accesses", [])
    if accesses:
        text += "\nПоследние доступы:\n"
        for access in accesses[:5]:
            text += f"#{access['id']} {access['access_type']} · {access['starts_at']} → {access['expires_at'] or 'lifetime'}\n"
    payments = card.get("payments", [])
    if payments:
        text += "\nПоследние платежи:\n"
        for payment in payments[:5]:
            text += f"#{payment['id']} {payment['status']} · {payment.get('tariff_name')} · external {_fmt_money(payment.get('external_amount', payment.get('amount')))} ₽\n"
    return text


@router.callback_query(F.data == "admin_user_card")
async def admin_user_card_start(callback: CallbackQuery, state: FSMContext):
    await state.clear()
    await state.set_state(AdminUsersState.waiting_user_card_id)
    await edit_message(callback.message, "Введите Telegram ID пользователя", reply_markup=admin_menu())


@router.message(AdminUsersState.waiting_user_card_id)
async def admin_user_card_receive(message: Message, state: FSMContext):
    try:
        telegram_user_id = int(message.text.strip())
    except (TypeError, ValueError):
        await message.answer("Нужен числовой Telegram ID")
        return
    card = await get_admin_user_card(telegram_user_id)
    if not card:
        await message.answer("Пользователь не найден", reply_markup=admin_menu())
        await state.clear()
        return
    await state.update_data(selected_telegram_user_id=telegram_user_id, selected_partner_status=card["user"].get("partner_status", False), selected_blocked=bool(card["user"].get("blocked_at")))
    await message.answer(_format_user_card(card), reply_markup=user_card_menu(card["user"].get("partner_status", False), bool(card["user"].get("blocked_at"))))


@router.callback_query(F.data == "admin_access_days")
async def admin_access_days(callback: CallbackQuery, state: FSMContext):
    data = await state.get_data()
    if not data.get("selected_telegram_user_id"):
        await callback.answer("Сначала откройте карточку пользователя", show_alert=True)
        return
    await state.set_state(AdminUsersState.waiting_access_days)
    await edit_message(callback.message, "Введите количество дней и причину через пробел. Например:\n30 компенсация за мероприятие")


@router.message(AdminUsersState.waiting_access_days)
async def admin_access_days_receive(message: Message, state: FSMContext):
    try:
        days_text, reason = message.text.strip().split(" ", 1)
        days = int(days_text)
        if days <= 0:
            raise ValueError
    except (ValueError, AttributeError):
        await message.answer("Формат: 30 причина")
        return
    data = await state.get_data()
    await state.update_data(pending_action="grant_days", pending_days=days, pending_reason=reason)
    await message.answer(
        f"Проверка:\nПользователь: {data['selected_telegram_user_id']}\nВыдать: {days} дней\nПричина: {reason}",
        reply_markup=confirm_admin_action(),
    )


@router.callback_query(F.data == "admin_access_lifetime")
async def admin_access_lifetime(callback: CallbackQuery, state: FSMContext):
    data = await state.get_data()
    if not data.get("selected_telegram_user_id"):
        await callback.answer("Сначала откройте карточку", show_alert=True)
        return
    await state.update_data(pending_action="grant_lifetime")
    await state.set_state(AdminUsersState.waiting_action_reason)
    await edit_message(callback.message, "Введите причину выдачи lifetime. После этого будет отдельное подтверждение.")


@router.callback_query(F.data == "admin_balance")
async def admin_balance_start(callback: CallbackQuery, state: FSMContext):
    data = await state.get_data()
    if not data.get("selected_telegram_user_id"):
        await callback.answer("Сначала откройте карточку", show_alert=True)
        return
    await state.set_state(AdminUsersState.waiting_balance_change)
    await edit_message(callback.message, "Введите изменение баланса и причину. Например:\n+500 подарок\n-200 корректировка")


@router.message(AdminUsersState.waiting_balance_change)
async def admin_balance_receive(message: Message, state: FSMContext):
    try:
        amount_text, reason = message.text.strip().split(" ", 1)
        amount = float(amount_text.replace(",", "."))
        if amount == 0:
            raise ValueError
    except (ValueError, AttributeError):
        await message.answer("Формат: +500 причина или -200 причина")
        return
    data = await state.get_data()
    await state.update_data(pending_action="adjust_balance", pending_amount=amount, pending_reason=reason)
    await message.answer(
        f"Проверка:\nПользователь: {data['selected_telegram_user_id']}\nИзменение internal balance: {amount:+.2f} ₽\nПричина: {reason}",
        reply_markup=confirm_admin_action(),
    )


@router.callback_query(F.data == "admin_referral_rate")
async def admin_referral_rate_start(callback: CallbackQuery, state: FSMContext):
    data = await state.get_data()
    if not data.get("selected_telegram_user_id"):
        await callback.answer("Сначала откройте карточку", show_alert=True)
        return
    await state.set_state(AdminUsersState.waiting_referral_rate)
    await edit_message(callback.message, "Введите процент и причину. Например:\n7.5 индивидуальная ставка")


@router.message(AdminUsersState.waiting_referral_rate)
async def admin_referral_rate_receive(message: Message, state: FSMContext):
    try:
        rate_text, reason = message.text.strip().split(" ", 1)
        rate = float(rate_text.replace(",", "."))
        if rate < 0 or rate > 100:
            raise ValueError
    except (ValueError, AttributeError):
        await message.answer("Формат: 7.5 причина")
        return
    data = await state.get_data()
    await state.update_data(pending_action="set_referral_rate", pending_rate=rate, pending_reason=reason)
    await message.answer(
        f"Проверка:\nПользователь: {data['selected_telegram_user_id']}\nНовая referral rate: {rate}%\nПричина: {reason}",
        reply_markup=confirm_admin_action(),
    )


@router.callback_query(F.data == "admin_toggle_partner")
async def admin_toggle_partner(callback: CallbackQuery, state: FSMContext):
    data = await state.get_data()
    if not data.get("selected_telegram_user_id"):
        await callback.answer("Сначала откройте карточку", show_alert=True)
        return
    enabled = not bool(data.get("selected_partner_status"))
    await state.update_data(pending_action="set_partner", pending_partner_status=enabled)
    await state.set_state(AdminUsersState.waiting_action_reason)
    await edit_message(callback.message, f"Введите причину {'включения' if enabled else 'отключения'} Partner. После этого будет подтверждение.")


@router.callback_query(F.data == "admin_toggle_block")
async def admin_toggle_block(callback: CallbackQuery, state: FSMContext):
    data = await state.get_data()
    if not data.get("selected_telegram_user_id"):
        await callback.answer("Сначала откройте карточку", show_alert=True)
        return
    blocked = not bool(data.get("selected_blocked"))
    await state.update_data(pending_action="set_blocked", pending_blocked=blocked)
    await state.set_state(AdminUsersState.waiting_action_reason)
    await edit_message(callback.message, f"Введите причину {'блокировки' if blocked else 'разблокировки'}. После этого будет подтверждение.")


@router.message(AdminUsersState.waiting_action_reason)
async def admin_action_reason_receive(message: Message, state: FSMContext):
    reason = (message.text or "").strip()
    if not reason:
        await message.answer("Причина обязательна")
        return
    data = await state.get_data()
    action = data.get("pending_action")
    await state.update_data(pending_reason=reason)
    if action == "grant_lifetime":
        preview = f"Выдать lifetime пользователю {data['selected_telegram_user_id']}\nПричина: {reason}\nScheduled billing будет остановлен."
    elif action == "set_partner":
        preview = f"Partner={data.get('pending_partner_status')} для {data['selected_telegram_user_id']}\nПричина: {reason}"
    elif action == "set_blocked":
        preview = f"blocked={data.get('pending_blocked')} для {data['selected_telegram_user_id']}\nПричина: {reason}"
    else:
        preview = f"Подтвердить действие {action}?\nПричина: {reason}"
    await message.answer(preview, reply_markup=confirm_admin_action())


@router.callback_query(F.data == "admin_cancel_action")
async def admin_cancel_action(callback: CallbackQuery, state: FSMContext):
    data = await state.get_data()
    selected = data.get("selected_telegram_user_id")
    partner = data.get("selected_partner_status", False)
    blocked = data.get("selected_blocked", False)
    await state.set_state(None)
    await state.update_data(selected_telegram_user_id=selected, selected_partner_status=partner, selected_blocked=blocked)
    await edit_message(callback.message, "Действие отменено", reply_markup=user_card_menu(partner, blocked))


@router.callback_query(F.data == "admin_confirm_action")
async def admin_confirm_action_handler(callback: CallbackQuery, state: FSMContext):
    data = await state.get_data()
    telegram_user_id = data.get("selected_telegram_user_id")
    action = data.get("pending_action")
    reason = data.get("pending_reason", "")
    if not telegram_user_id or not action:
        await callback.answer("Нет действия для подтверждения", show_alert=True)
        return
    if action == "grant_days":
        result = await grant_access(telegram_user_id, data["pending_days"], False, callback.from_user.id, reason)
    elif action == "grant_lifetime":
        result = await grant_access(telegram_user_id, None, True, callback.from_user.id, reason)
    elif action == "adjust_balance":
        result = await adjust_balance(telegram_user_id, data["pending_amount"], callback.from_user.id, reason)
    elif action == "set_referral_rate":
        result = await set_referral_rate(telegram_user_id, data["pending_rate"], callback.from_user.id, reason)
    elif action == "set_partner":
        result = await set_partner_status(telegram_user_id, data["pending_partner_status"], callback.from_user.id, reason)
    elif action == "set_blocked":
        result = await set_user_blocked(telegram_user_id, data["pending_blocked"], callback.from_user.id, reason)
    elif action == "grant_reward":
        result = await grant_reward(telegram_user_id, data["pending_reward_type"], data["pending_reward_value"], data["pending_reward_title"], callback.from_user.id)
        result = bool(result and result.get("ok"))
    else:
        result = False
    if not result:
        await callback.answer("Операция не выполнена", show_alert=True)
        return
    card = await get_admin_user_card(telegram_user_id)
    partner_status = card["user"].get("partner_status", False) if card else False
    blocked = bool(card["user"].get("blocked_at")) if card else False
    await state.clear()
    await state.update_data(selected_telegram_user_id=telegram_user_id, selected_partner_status=partner_status, selected_blocked=blocked)
    await edit_message(callback.message, "Операция выполнена и записана в audit log.", reply_markup=user_card_menu(partner_status, blocked))


@router.callback_query(F.data == "admin_withdrawals")
async def admin_withdrawals(callback: CallbackQuery, state: FSMContext):
    withdrawals = await get_pending_withdrawals()
    await state.update_data(pending_withdrawals=withdrawals)
    if not withdrawals:
        await edit_message(callback.message, "Pending заявок на вывод нет", reply_markup=admin_menu())
        return
    await edit_message(callback.message, "Pending заявки на вывод:", reply_markup=withdrawals_list_menu(withdrawals))


@router.callback_query(F.data.startswith("withdrawal_open_"))
async def withdrawal_open(callback: CallbackQuery, state: FSMContext):
    withdrawal_id = int(callback.data.rsplit("_", 1)[1])
    withdrawals = await get_pending_withdrawals()
    item = next((row for row in withdrawals if row["id"] == withdrawal_id), None)
    if not item:
        await callback.answer("Заявка уже обработана или не найдена", show_alert=True)
        return
    text = (
        f"Withdrawal #{item['id']}\n"
        f"Пользователь: {item.get('name') or '—'} / @{item.get('telegram_username') or '—'}\n"
        f"Telegram ID: {item.get('telegram_user_id')}\n"
        f"Сумма: {_fmt_money(item['amount'])} ₽\n"
        f"Создана: {item['requested_at']}\n"
        f"Реквизиты: {item.get('details_json')}"
    )
    await edit_message(callback.message, text, reply_markup=withdrawal_menu(withdrawal_id))


@router.callback_query(F.data.startswith("withdrawal_paid_") | F.data.startswith("withdrawal_rejected_"))
async def withdrawal_process(callback: CallbackQuery):
    parts = callback.data.split("_")
    status = parts[1]
    withdrawal_id = int(parts[2])
    result = await process_withdrawal(withdrawal_id, status, callback.from_user.id)
    if not result:
        await callback.answer("Не удалось обработать заявку", show_alert=True)
        return
    await edit_message(callback.message, f"Withdrawal #{withdrawal_id}: {status}", reply_markup=admin_menu())


@router.callback_query(F.data == "admin_challenges")
async def admin_challenges(callback: CallbackQuery):
    await edit_message(callback.message, "Челленджи", reply_markup=challenges_admin_menu())


@router.callback_query(F.data == "admin_create_challenge")
async def admin_create_challenge_start(callback: CallbackQuery, state: FSMContext):
    await state.set_state(AdminUsersState.waiting_create_challenge)
    await edit_message(
        callback.message,
        "Отправьте одной строкой:\n"
        "Название | старт ДД.ММ.ГГГГ ЧЧ:ММ | дедлайн ДД.ММ.ГГГГ ЧЧ:ММ | solo/team/both | text/url/file/mixed | описание",
    )


@router.message(AdminUsersState.waiting_create_challenge)
async def admin_create_challenge_receive(message: Message, state: FSMContext):
    try:
        title, starts_text, deadline_text, mode, submission_format, description = [part.strip() for part in message.text.split("|", 5)]
        starts_at = datetime.strptime(starts_text, "%d.%m.%Y %H:%M").replace(tzinfo=TIME_ZONE)
        deadline = datetime.strptime(deadline_text, "%d.%m.%Y %H:%M").replace(tzinfo=TIME_ZONE)
        if mode not in {"solo", "team", "both"} or submission_format not in {"text", "url", "file", "mixed"}:
            raise ValueError
        if deadline <= starts_at:
            raise ValueError
    except (ValueError, AttributeError):
        await message.answer("Неверный формат. Проверьте даты, mode и submission format.")
        return
    result = await create_challenge(title, description, starts_at, deadline, mode, submission_format)
    if not result:
        await message.answer("Не удалось создать челлендж", reply_markup=admin_menu())
        await state.clear()
        return
    await state.clear()
    await message.answer(f"Челлендж #{result['id']} создан: {result['title']}", reply_markup=admin_menu())


@router.callback_query(F.data == "admin_reward")
async def admin_reward_start(callback: CallbackQuery, state: FSMContext):
    data = await state.get_data()
    if not data.get("selected_telegram_user_id"):
        await callback.answer("Сначала откройте карточку", show_alert=True)
        return
    await state.set_state(AdminUsersState.waiting_reward)
    await edit_message(
        callback.message,
        "Введите Reward одной строкой:\n"
        "тип | значение | название\n\n"
        "Типы: internal_balance, withdrawable_balance, free_subscription_days, "
        "external_subscription, physical_gift, promo_code, custom_reward\n"
        "Пример: free_subscription_days | 30 | Победа в челлендже",
    )


@router.message(AdminUsersState.waiting_reward)
async def admin_reward_receive(message: Message, state: FSMContext):
    try:
        reward_type, value, title = [part.strip() for part in message.text.split("|", 2)]
        if not reward_type or not value or not title:
            raise ValueError
    except (ValueError, AttributeError):
        await message.answer("Формат: тип | значение | название")
        return
    data = await state.get_data()
    await state.update_data(
        pending_action="grant_reward",
        pending_reward_type=reward_type,
        pending_reward_value=value,
        pending_reward_title=title,
        pending_reason=title,
    )
    await message.answer(
        f"Проверка Reward:\nПользователь: {data['selected_telegram_user_id']}\n"
        f"Тип: {reward_type}\nЗначение: {value}\nНазвание: {title}",
        reply_markup=confirm_admin_action(),
    )
