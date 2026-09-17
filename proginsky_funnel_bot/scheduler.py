import asyncio
from pathlib import Path
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from aiogram import Bot
from aiogram.types import FSInputFile
from api_client import get_scheduled_messages, get_all_users, delete_row, send_email_message

scheduler = AsyncIOScheduler(timezone="Europe/Moscow")
FILES_PATH = Path("/opt/proginsky_ecosystem/proginsky_storage")

async def send_scheduled_message(bot: Bot):
    try:
        queue_personal = await get_scheduled_messages("user")
        queue_all = await get_scheduled_messages("all_users")
        for message in queue_personal:
            try: 
                await bot.send_message(chat_id=message["telegram_user_id"], text=message["text"],)
                await send_email_message(message["telegram_user_id"], text=message["text"],)
                await delete_row("scheduled_messages", message["id"])
            except: continue
        if not queue_all: return
        all_users = await get_all_users()
        for message in queue_all:
            document_path = None
            if message["document_id"]:
                document_path = next((FILES_PATH / "scheduled_files").glob(f'{message["document_id"]}.*'), None)
                if not document_path: continue
            for user in all_users:
                try: 
                    if document_path and message["document_type"] == "photo":
                        await bot.send_photo(user["telegram_user_id"], photo=FSInputFile(document_path), caption=message["text"])
                        await send_email_message(user["telegram_user_id"], message["text"], message["document_id"])
                    elif document_path and message["document_type"] == "document":
                        await bot.send_document(user["telegram_user_id"], document=FSInputFile(document_path), caption=message["text"])
                        await send_email_message(user["telegram_user_id"], message["text"], message["document_id"])
                    else:
                        await bot.send_message(user["telegram_user_id"], text=message["text"])
                        await send_email_message(user["telegram_user_id"], message["text"])
                except: continue
            await delete_row("scheduled_messages", message["id"])
            if document_path:
                document_path.unlink()
    except asyncio.CancelledError:
        raise
    except Exception as error:
        print("Ошибка отправки запланированных сообщений:",error,)

def start_scheduler(bot: Bot):
    scheduler.add_job(send_scheduled_message, "interval", minutes=1, args=[bot], id="send_scheduled_message", replace_existing=True, max_instances=1, coalesce=True,)
    scheduler.start()