import asyncio
import os
from aiogram import Bot, Dispatcher
from routers.common import router
from pathlib import Path
from schedurel import start_scheduler

async def main() -> None:
    token = os.getenv("ADMIN_BOT_TOKEN")
    if not token:
        raise RuntimeError("Не задан ADMIN_BOT_TOKEN")
    bot = Bot(token=token)
    dispatcher = Dispatcher()
    dispatcher.include_router(router)
    start_scheduler(bot)
    await dispatcher.start_polling(bot)

if __name__ == "__main__":
    asyncio.run(main())