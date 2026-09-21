import asyncio
import os
from datetime import datetime
from pathlib import Path
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from aiogram import Bot
from api_client import (
    check_access_user,
    get_current_task,
    get_club_members,
    delete_expired_accesses,
    get_scheduled_messages,
    delete_row,
    find_users_with_expiring_access,
    send_email_message,
    process_buddy_cycles,
    get_reactivation_users,
    release_stale_club_payments,
    get_pending_payment_success_notifications,
    mark_payment_success_notification_sent,
    fail_payment_success_notification,
    release_stuck_payment_success_notifications,
    save_payment_success_invite_link,
)
from keyboards import courses_prices
from aiogram.types import FSInputFile
from aiogram.exceptions import TelegramAPIError, TelegramRetryAfter

scheduler = AsyncIOScheduler(timezone="Europe/Moscow")
TASK_PATH = Path("/opt/proginsky_ecosystem/proginsky_storage/task")
FILES_PATH = Path("/opt/proginsky_ecosystem/proginsky_storage")
CHAT_ID = int(os.getenv("CLUB_CHANNEL_ID"))

def _payment_money(value) -> str:
    try:
        number = float(value or 0)
        return f"{number:,.2f}".replace(",", " ").replace(".00", "")
    except (TypeError, ValueError):
        return str(value or 0)

def _payment_date(value) -> str:
    if not value:
        return "—"
    try:
        parsed = datetime.fromisoformat(str(value).replace("Z", "+00:00"))
        return parsed.strftime("%d.%m.%Y")
    except (TypeError, ValueError):
        return str(value)

async def send_payment_success_notifications(bot: Bot):
    notifications = await get_pending_payment_success_notifications(20)
    for notification in notifications:
        order_id = notification.get("order_id")
        telegram_user_id = notification.get("telegram_user_id")
        if not order_id or not telegram_user_id:
            if order_id:
                await fail_payment_success_notification(order_id, "telegram_user_id is missing")
            continue
        invite_link = notification.get("invite_channel_link")
        if not invite_link:
            try:
                invite = await bot.create_chat_invite_link(
                    chat_id=CHAT_ID,
                    name=f"payment_{order_id}",
                    member_limit=1,
                )
            except TelegramAPIError as error:
                await fail_payment_success_notification(order_id, str(error))
                continue
            result = await save_payment_success_invite_link(order_id, invite.invite_link)
            if not result or not result.get("invite_link"):
                await fail_payment_success_notification(order_id, "invite_link save failed")
                continue
            invite_link = result["invite_link"]
            if invite_link != invite.invite_link:
                try:
                    await bot.revoke_chat_invite_link(
                        chat_id=CHAT_ID,
                        invite_link=invite.invite_link,
                    )
                except TelegramAPIError:
                    pass
        tariff_name = notification.get("tariff_name") or "участие в клубе"
        period_days = notification.get("period_days")
        paid_until = _payment_date(notification.get("paid_until"))
        gross_price = _payment_money(notification.get("gross_price"))
        internal_amount = _payment_money(notification.get("internal_amount"))
        external_amount = _payment_money(notification.get("external_amount"))
        lines = [
            "✅ Оплата прошла успешно!",
            "",
            f"Тариф: {tariff_name}.",
        ]
        if period_days:
            lines.append(f"Доступ продлён на {period_days} дней — до {paid_until}.")
        else:
            lines.append(f"Доступ продлён до {paid_until}.")
        lines.extend([
            f"Стоимость пакета: {gross_price} ₽.",
            f"Использовано с внутреннего баланса: {internal_amount} ₽.",
            f"Оплачено через Robokassa: {external_amount} ₽.",
            "",
            "Одноразовая ссылка для входа в клуб:",
            invite_link,
        ])
        try:
            await bot.send_message(
                chat_id=telegram_user_id,
                text="\n".join(lines),
            )
        except TelegramAPIError as error:
            await fail_payment_success_notification(order_id, str(error))
            print(
                f"Не удалось отправить payment_success: order_id={order_id}, "
                f"telegram_user_id={telegram_user_id}, error={error}",
                flush=True,
            )
            continue
        marked = False
        for attempt in range(3):
            marked = await mark_payment_success_notification_sent(order_id)
            if marked:
                break
            await asyncio.sleep(1)
        print(
            f"payment_success отправлен: order_id={order_id}, "
            f"telegram_user_id={telegram_user_id}, marked={marked}",
            flush=True,
        )
        if not marked:
            print(
                f"КРИТИЧНО: Telegram принял payment_success order_id={order_id}, "
                "но API не подтвердил sent. Повторная выдача заблокирована processing-lease на 15 минут.",
                flush=True,
            )

async def release_stuck_payment_notifications():
    released = await release_stuck_payment_success_notifications()
    if released:
        print(f"Освобождено зависших payment_success уведомлений: {released}", flush=True)

async def send_email_messages(telegram_user_id: int, text: str | None = None, file_id: str | None = None):
    try:
        await send_email_message(telegram_user_id, text, file_id)
    except Exception:
        pass

async def send_current_month_task(bot: Bot):
    task = await get_current_task(1)
    if not task:
        return
    text = "Новое задание на месяц!\n\n" + (task["text"] or "")
    file_id = task["file_id"]
    users = await get_club_members()
    if not users:
        return
    file = None
    if file_id:
        file = next(TASK_PATH.glob(f"{file_id}.*"), None)
        if not file:
            return
    sent_users = set()
    for user in users:
        telegram_user_id = user["telegram_user_id"]
        if not telegram_user_id or telegram_user_id in sent_users:
            continue
        sent_users.add(telegram_user_id)
        try:
            if file:
                await bot.send_document(telegram_user_id, document=FSInputFile(file), caption=text)
                await send_email_messages(telegram_user_id, text, file_id)
            else:
                await bot.send_message(telegram_user_id, text)
                await send_email_messages(telegram_user_id, text)
        except TelegramRetryAfter as error:
            await asyncio.sleep(error.retry_after)
            try:
                if file:
                    await bot.send_document(telegram_user_id, document=FSInputFile(file), caption=text)
                else:
                    await bot.send_message(telegram_user_id, text)
            except TelegramAPIError:
                continue
        except TelegramAPIError:
            continue

async def send_scheduled_message(bot: Bot):
    message = await get_scheduled_messages("club_members")
    if not message:
        return
    message = message[0]
    document_path = None
    if message["document_id"]:
        document_path = next((FILES_PATH / "scheduled_files").glob(f'{message["document_id"]}.*'), None)
        if not document_path:
            return
    users = await get_club_members()
    if not users:
        return
    sent_users = set()
    for user in users:
        telegram_user_id = user["telegram_user_id"]
        if not telegram_user_id or telegram_user_id in sent_users:
            continue
        try:
            if document_path and message["document_type"] == "photo":
                await bot.send_photo(telegram_user_id, photo=FSInputFile(document_path), caption=message["text"])
                await send_email_messages(telegram_user_id, message["text"], message["document_id"])
            elif document_path and message["document_type"] == "document":
                await bot.send_document(telegram_user_id, document=FSInputFile(document_path), caption=message["text"])
                await send_email_messages(telegram_user_id, message["text"], message["document_id"])
            else:
                await bot.send_message(telegram_user_id, text=message["text"])
                await send_email_messages(telegram_user_id, message["text"])
            sent_users.add(telegram_user_id)
        except TelegramAPIError:
            continue
    await delete_row("scheduled_messages", message["id"])
    if document_path:
        document_path.unlink(missing_ok=True)

async def notify_users_with_expiring_access(bot: Bot):
    for days in (5, 2):
        users = await find_users_with_expiring_access(days)
        for user in users:
            try:
                await bot.send_message(user["telegram_user_id"], user["text"], reply_markup=courses_prices())
            except TelegramAPIError:
                continue
            await send_email_messages(user["telegram_user_id"], user["text"])

async def notify_users_with_expiring_trail_access(bot: Bot):
    remain_5_days_users = await find_users_with_expiring_access(5, True)
    remain_2_days_users = await find_users_with_expiring_access(2, True)
    text_5 = (
        "Бесплатный доступ закончится через 5 дней.\n\n"
        "1 месяц — 1 990 ₽ / 30 дней.\n"
        "3 месяца — 4 990 ₽ / 90 дней, экономия 980 ₽ (16,42%).\n"
        "6 месяцев — 8 990 ₽ / 180 дней, экономия 2 950 ₽ (24,71%)."
    )
    text_2 = "До конца бесплатного периода осталось 2 дня.\n\nВыберите продолжение на 1, 3 или 6 месяцев."
    for user in remain_5_days_users:
        try:
            await bot.send_message(user["telegram_user_id"], text_5, reply_markup=courses_prices())
        except TelegramAPIError:
            continue
        await send_email_messages(user["telegram_user_id"], text_5)
    for user in remain_2_days_users:
        try:
            await bot.send_message(user["telegram_user_id"], text_2, reply_markup=courses_prices())
        except TelegramAPIError:
            continue
        await send_email_messages(user["telegram_user_id"], text_2)

async def _revoke_channel_access(bot: Bot, telegram_user_id: int):
    try:
        await bot.ban_chat_member(chat_id=CHAT_ID, user_id=telegram_user_id)
        await bot.unban_chat_member(chat_id=CHAT_ID, user_id=telegram_user_id)
    except TelegramAPIError as error:
        raise RuntimeError(f"Не удалось удалить пользователя {telegram_user_id}. Ошибка: {type(error).__name__}: {error}") from error

async def notify_users_after_expiring(bot: Bot):
    users = await delete_expired_accesses(False)
    text = "У вас закончился доступ к клубу. Профиль, баланс и история сохранены. Выберите срок, чтобы вернуться."
    for telegram_user_id in users:
        if await check_access_user(telegram_user_id):
            continue
        await _revoke_channel_access(bot, telegram_user_id)
        try:
            await bot.send_message(telegram_user_id, text, reply_markup=courses_prices())
        except TelegramAPIError:
            pass
        await send_email_messages(telegram_user_id, text)

async def notify_users_after_expiring_trail(bot: Bot):
    users = await delete_expired_accesses(True)
    text = "Бесплатный период завершён.\n\nЕсли хотите продолжить участие, выберите срок: 1, 3 или 6 месяцев."
    for telegram_user_id in users:
        if await check_access_user(telegram_user_id):
            continue
        await _revoke_channel_access(bot, telegram_user_id)
        try:
            await bot.send_message(telegram_user_id, text, reply_markup=courses_prices())
        except TelegramAPIError:
            pass
        await send_email_messages(telegram_user_id, text)

async def process_buddy_rotation_job(bot: Bot):
    await process_buddy_cycles()

async def release_stale_payment_reserves(bot: Bot):
    await release_stale_club_payments(24)

async def send_reactivation_messages(bot: Bot):
    texts = {
        7: "Прошла неделя после окончания доступа. Если хотите вернуться, ваш профиль и баланс сохранены.",
        30: "В клубе продолжаются новые активности. Ваш баланс и реферальная история сохранены — можно вернуться на 1, 3 или 6 месяцев.",
        90: "Если клуб снова актуален для вас, можно восстановить участие. Старый аккаунт и накопленный внутренний баланс не обнулились.",
    }
    for days in (7, 30, 90):
        users = await get_reactivation_users(days)
        for user in users:
            try:
                await bot.send_message(user["telegram_user_id"], texts[days], reply_markup=courses_prices())
            except TelegramAPIError:
                continue

def start_scheduler(bot: Bot):
    scheduler.add_job(send_current_month_task, "cron", hour=10, minute=0, args=[bot], id="send_new_task", replace_existing=True)
    scheduler.add_job(send_payment_success_notifications, "interval", seconds=5, args=[bot], id="payment_success_notifications", replace_existing=True, max_instances=1, coalesce=True)
    scheduler.add_job(release_stuck_payment_notifications, "interval", minutes=5, id="release_stuck_payment_notifications", replace_existing=True, max_instances=1, coalesce=True)
    scheduler.add_job(send_scheduled_message, "interval", minutes=1, args=[bot], id="send_scheduled_message", replace_existing=True, max_instances=1, coalesce=True)
    scheduler.add_job(notify_users_after_expiring, "interval", minutes=1, args=[bot], id="notify_users_after_expiring", replace_existing=True, max_instances=1, coalesce=True, next_run_time=datetime.now())
    scheduler.add_job(notify_users_after_expiring_trail, "interval", minutes=1, args=[bot], id="notify_users_after_expiring_trail", replace_existing=True, max_instances=1, coalesce=True, next_run_time=datetime.now())
    scheduler.add_job(notify_users_with_expiring_access, "cron", hour=10, minute=0, args=[bot], id="notify_users_with_expiring_access", replace_existing=True, max_instances=1, coalesce=True)
    scheduler.add_job(notify_users_with_expiring_trail_access, "cron", hour=10, minute=0, args=[bot], id="notify_users_with_expiring_trail_access", replace_existing=True, max_instances=1, coalesce=True)
    scheduler.add_job(process_buddy_rotation_job, "interval", hours=1, args=[bot], id="process_buddy_cycles", replace_existing=True, max_instances=1, coalesce=True)
    scheduler.add_job(release_stale_payment_reserves, "interval", hours=1, args=[bot], id="release_stale_payment_reserves", replace_existing=True, max_instances=1, coalesce=True)
    scheduler.add_job(send_reactivation_messages, "cron", hour=11, minute=0, args=[bot], id="reactivation_7_30_90", replace_existing=True, max_instances=1, coalesce=True)
    scheduler.start()
