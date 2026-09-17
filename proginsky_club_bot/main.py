import asyncio
import os
from contextlib import suppress
from aiogram import Bot, Dispatcher
from redis_worker import buddy_pairs_listener
from routers.common import router
from scheduler import start_scheduler

async def main() -> None:
    token = os.getenv("CLUB_BOT_TOKEN")
    if not token:
        raise RuntimeError("Не задан CLUB_BOT_TOKEN")
    bot = Bot(token=token)
    dispatcher = Dispatcher()
    dispatcher.include_router(router)
    buddy_task = asyncio.create_task(buddy_pairs_listener(bot))
    try:
        start_scheduler(bot)
        await dispatcher.start_polling(bot)
    finally:
        buddy_task.cancel()
        with suppress(asyncio.CancelledError):
            await buddy_task

if __name__ == "__main__":
    asyncio.run(main())