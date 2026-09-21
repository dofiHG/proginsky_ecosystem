import asyncio
import json
import os
from aiogram import Bot
from redis.asyncio import Redis

async def buddy_pairs_listener(bot: Bot):
    redis = Redis.from_url(os.getenv("REDIS_URL"), decode_responses=True,)
    pubsub = redis.pubsub()
    await pubsub.subscribe("buddy_pairs")
    print("Redis Buddy listener запущен", flush=True)
    try:
        async for message in pubsub.listen():
            if message["type"] != "message":
                continue
            try:
                notifications = json.loads(message["data"])
                for notification in notifications:
                    telegram_user_id = notification["telegram_user_id"]
                    buddy_username = notification["buddy_username"]
                    if buddy_username:
                        text = f"Для вас сформирована Бадди-пара 👥\n\nВаш Бадди: @{buddy_username}"
                    else:
                        text = "Для вас сформирована Бадди-пара 👥\n\nК сожалению, у вашего Бадди нет username, он может скоро Вам написать"
                    try:
                        await bot.send_message(chat_id=telegram_user_id, text=text,)
                    except Exception as error:
                        print(f"Не удалось отправить сообщение пользователю {telegram_user_id}: {error}", flush=True)
            except Exception as error:
                print(f"Ошибка обработки buddy_pairs: {error}", flush=True)
    except asyncio.CancelledError:
        raise
    finally:
        await pubsub.unsubscribe("buddy_pairs")
        await pubsub.aclose()
        await redis.aclose()

