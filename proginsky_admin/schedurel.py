from pathlib import Path
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from api_client import switch_month_task, get_current_task
from aiogram import Bot

scheduler = AsyncIOScheduler(timezone="Europe/Moscow")

DATA_PATH = Path("/opt/proginsky_ecosystem/proginsky_storage")
ANSWERS_PATH = DATA_PATH / "answers"
TASK_PATH = DATA_PATH / "task"
TEMP_PATH = DATA_PATH / "task_temp"

async def task_month_worker(bot: Bot):
    task = await get_current_task(0)
    if not task:
        return
    new_file_id = task["file_id"]
    temp_file = None
    file_name = None
    if new_file_id:
        telegram_file = await bot.get_file(new_file_id)
        if not telegram_file.file_path: return
        file_name = Path(telegram_file.file_path).name
        TEMP_PATH.mkdir(parents=True, exist_ok=True)
        temp_file = TEMP_PATH / file_name
        await bot.download(new_file_id, destination=temp_file)
    new_file_id = await switch_month_task()
    if new_file_id is False: return
    await clear_files()
    if temp_file: temp_file.replace(TASK_PATH / file_name)

async def clear_files():
    files = [file for file in ANSWERS_PATH.iterdir() if file.is_file()]
    for file in files:
        file.unlink()
    files = [file for file in TASK_PATH.iterdir() if file.is_file()]
    for file in files:
        file.unlink()

def start_scheduler(bot: Bot):
    scheduler.add_job(task_month_worker, "cron", day="last", hour=23, minute=59, args=[bot], id="task_month_worker", replace_existing=True)
    scheduler.start()