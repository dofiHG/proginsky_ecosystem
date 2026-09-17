import os
import asyncpg

DATABASE_URL = os.getenv("DATABASE_URL")
pool: asyncpg.Pool | None = None

async def connect_db():
    global pool
    asyncpg_url = DATABASE_URL.replace("postgresql+asyncpg://", "postgresql://", 1,)
    pool = await asyncpg.create_pool(asyncpg_url, min_size=1, max_size=10,)

async def close_db():
    if pool:
        await pool.close()

async def get_user_email(telegram_user_id: int) -> str | None:
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    return await pool.fetchval("""
        SELECT email
        FROM users
        WHERE telegram_user_id = $1
    """, telegram_user_id)