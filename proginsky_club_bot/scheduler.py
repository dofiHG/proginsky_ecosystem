import asyncio
import os
from pathlib import Path
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from aiogram import Bot
from api_client import check_access_user, get_current_task, get_club_members, delete_expired_accesses, get_scheduled_messages, delete_row, find_users_with_expiring_access, send_email_message
from keyboards import courses_prices
from aiogram.types import FSInputFile
from aiogram.exceptions import TelegramAPIError, TelegramRetryAfter

scheduler = AsyncIOScheduler(timezone="Europe/Moscow")
TASK_PATH = Path("/opt/proginsky_ecosystem/proginsky_storage/task")
FILES_PATH = Path("/opt/proginsky_ecosystem/proginsky_storage")
CHAT_ID = os.getenv("CLUB_CHANNEL_ID")

async def send_email_messages(telegram_user_id: int, text: str | None = None, file_id: str | None = None):
    try:
        await send_email_message(telegram_user_id, text, file_id)
    except:
        pass

async def send_current_month_task(bot: Bot):
    task = await get_current_task(1)
    if not task: return
    text = "Новое задание на месяц!\n\n" + task["text"]
    file_id = task["file_id"]
    users = await get_club_members()
    if not users: return
    file = None
    if file_id:
        file = next(TASK_PATH.glob(f"{file_id}.*"), None)
        if not file: return
    sent_users = set()
    for user in users:
        telegram_user_id = user["telegram_user_id"]
        if not telegram_user_id: continue
        if telegram_user_id in sent_users: continue
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
                    await send_email_messages(telegram_user_id, text, file_id)
                else:
                    await bot.send_message(telegram_user_id, text)
                    await send_email_messages(telegram_user_id, text)
            except TelegramAPIError:
                continue
        except TelegramAPIError:
            continue

async def send_scheduled_message(bot: Bot):
    message = await get_scheduled_messages("club_members")
    if not message: return
    message = message[0]
    document_path = None
    if message["document_id"]:
        document_path = next((FILES_PATH / "scheduled_files").glob(f'{message["document_id"]}.*'), None)
        if not document_path: return
    users = await get_club_members()
    if not users: return
    sent_users = set()
    for user in users:
        try:
            if user["telegram_user_id"] not in sent_users:
                if document_path and message["document_type"] == "photo":
                    await bot.send_photo(user["telegram_user_id"], photo=FSInputFile(document_path), caption=message["text"])
                    await send_email_messages(user["telegram_user_id"], message["text"], message["document_id"])
                elif document_path and message["document_type"] == "document":
                    await bot.send_document(user["telegram_user_id"], document=FSInputFile(document_path), caption=message["text"])
                    await send_email_messages(user["telegram_user_id"], message["text"], message["document_id"])
                else:
                    await bot.send_message(user["telegram_user_id"], text=message["text"])
                    await send_email_messages(user["telegram_user_id"], message["text"])
                sent_users.add(user["telegram_user_id"])
        except:
            continue
    await delete_row("scheduled_messages", message["id"])
    if document_path:
        document_path.unlink()

async def notify_users_with_expiring_access(bot: Bot):
    remain_3_days_users = await find_users_with_expiring_access(3)
    remain_1_day_users = await find_users_with_expiring_access(1)
    for user in remain_3_days_users:
        try:
            await bot.send_message(user["telegram_user_id"], user["text"], reply_markup=courses_prices())
        except TelegramAPIError:
            continue
        await send_email_messages(user["telegram_user_id"], user["text"])
    for user in remain_1_day_users:
        try:
            await bot.send_message(user["telegram_user_id"], user["text"], reply_markup=courses_prices())
        except TelegramAPIError:
            continue
        await send_email_messages(user["telegram_user_id"], user["text"])

async def notify_users_with_expiring_trail_access(bot: Bot):
    remain_5_days_users = await find_users_with_expiring_access(5, True)
    remain_2_days_users = await find_users_with_expiring_access(2, True)
    text_5 = ("Бесплатный доступ закончится через 5 дней.\n\nЕсли хотите остаться в клубе, выберите срок участия: 1, 3 или 6 месяцев.")
    text_2 = ("До конца бесплатного периода осталось 2 дня.\n\nВы можете оформить участие в клубе на 1, 3 или 6 месяцев.")
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

async def notify_users_after_expiring(bot: Bot):
    users = await delete_expired_accesses(False)
    text = "У вас закончился доступ к клубу, обновите подписку!"
    for telegram_user_id in users:
        has_access = await check_access_user(telegram_user_id)
        if has_access:
            continue
        try:
            await bot.ban_chat_member(chat_id=CHAT_ID, user_id=telegram_user_id)
            await bot.unban_chat_member(CHAT_ID, user_id=telegram_user_id)
        except TelegramAPIError:
            pass
        try:
            await bot.send_message(telegram_user_id, text)
        except TelegramAPIError:
            pass
        await send_email_messages(telegram_user_id, text)

async def notify_users_after_expiring_trail(bot: Bot):
    users = await delete_expired_accesses(True)
    text = ("Бесплатный период завершён.\n\nЕсли хотите продолжить участие в клубе, выберите срок: 1, 3 или 6 месяцев.")
    for telegram_user_id in users:
        has_access = await check_access_user(telegram_user_id)
        if has_access:
            continue
        try:
            await bot.send_message(telegram_user_id, text, reply_markup=courses_prices())
        except TelegramAPIError:
            pass
        try:
            await bot.ban_chat_member(chat_id=CHAT_ID,user_id=telegram_user_id)
            await bot.unban_chat_member(chat_id=CHAT_ID, user_id=telegram_user_id)
        except TelegramAPIError:
            pass
        await send_email_messages(telegram_user_id, text)

def start_scheduler(bot: Bot):
    scheduler.add_job(send_current_month_task, "cron", hour=10, minute=0, args=[bot], id="send_new_task", replace_existing=True)
    scheduler.add_job(send_scheduled_message, "interval", minutes=1, args=[bot], id="send_scheduled_message", replace_existing=True, max_instances=1, coalesce=True)
    scheduler.add_job(notify_users_after_expiring, "interval", hours=1, args=[bot], id="notify_users_after_expiring", replace_existing=True, max_instances=1, coalesce=True)
    scheduler.add_job(notify_users_after_expiring_trail, "interval", hours=1, args=[bot], id="notify_users_after_expiring_trail", replace_existing=True, max_instances=1, coalesce=True)
    scheduler.add_job(notify_users_with_expiring_access, "cron", hour=10, minute=0, args=[bot], id="notify_users_with_expiring_access", replace_existing=True, max_instances=1, coalesce=True)
    scheduler.add_job(notify_users_with_expiring_trail_access, "cron", hour=10, minute=0, args=[bot], id="notify_users_with_expiring_trail_access", replace_existing=True, max_instances=1, coalesce=True)
    scheduler.start()