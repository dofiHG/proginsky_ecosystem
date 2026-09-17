import os
import asyncpg
from decimal import Decimal
from datetime import datetime
import secrets

DATABASE_URL = os.environ["DATABASE_URL"]
pool: asyncpg.Pool | None = None

async def connect_database() -> None:
    global pool
    asyncpg_url = DATABASE_URL.replace("postgresql+asyncpg://", "postgresql://", 1,)
    pool = await asyncpg.create_pool(asyncpg_url, min_size=1, max_size=10,)

    await pool.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id BIGSERIAL PRIMARY KEY,
            name VARCHAR(100),
            email VARCHAR(255) UNIQUE,
            token VARCHAR(32) UNIQUE,
            telegram_user_id BIGINT UNIQUE,
            telegram_username VARCHAR(255),
            phone_number VARCHAR(255) UNIQUE,
            expired_trail BOOLEAN DEFAULT FALSE,
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            moodle_user_id BIGINT UNIQUE,
            moodle_username VARCHAR(255),
            balance NUMERIC(12, 2) NOT NULL DEFAULT 0,
            referal_token VARCHAR(255) UNIQUE,
            referal_id BIGINT DEFAULT NULL
        )
    """)

    await pool.execute("""
        CREATE TABLE IF NOT EXISTS messages (
            id BIGSERIAL PRIMARY KEY,
            text VARCHAR(511) NOT NULL
        )
    """)

    await pool.execute("""
        CREATE TABLE IF NOT EXISTS scheduled_messages (
            id BIGSERIAL PRIMARY KEY,
            user_id BIGINT NULL
                REFERENCES users(id)
                ON DELETE CASCADE,
            message_id BIGINT NULL
                REFERENCES messages(id)
                ON DELETE RESTRICT,
            send_time TIMESTAMPTZ NOT NULL,
            auditory_type VARCHAR(20) NOT NULL DEFAULT 'user',
            message_text TEXT NULL,
            document_id TEXT NULL,
            document_type VARCHAR(63) NULL,
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            CHECK ((auditory_type = 'user' AND user_id IS NOT NULL) OR (auditory_type <> 'user' AND user_id IS NULL)),
            CHECK ((message_id IS NOT NULL AND message_text IS NULL AND document_id IS NULL) OR (message_id IS NULL AND (message_text IS NOT NULL OR document_id IS NOT NULL))),
            UNIQUE (user_id, message_id)
        )
    """)

    await pool.execute("""
        CREATE INDEX IF NOT EXISTS idx_scheduled_messages_send_time
        ON scheduled_messages (send_time)
    """)

    await pool.execute("""
        INSERT INTO messages (id, text)
        VALUES
            (1, 'Через 10 минут'),
            (2, 'Через 2880 минут'),
            (3, 'Осталось 3 дня'),
            (4, 'Завтра исключат'),
            (5, 'Бадди вышел из клуба')
        ON CONFLICT (id) DO UPDATE
        SET text = EXCLUDED.text
    """)

    await pool.execute("""
        CREATE TABLE IF NOT EXISTS products (
            id BIGSERIAL PRIMARY KEY,
            slug VARCHAR(64) NOT NULL UNIQUE,
            name VARCHAR(255) NOT NULL,
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
    """)

    await pool.execute("""
        INSERT INTO products (
            slug,
            name
        )
        VALUES
            ('main_course', 'Основной курс'),
            ('secondary_product', 'Побочный продукт')
        ON CONFLICT (slug) DO UPDATE
        SET
            name = EXCLUDED.name
    """)

    await pool.execute("""
        CREATE TABLE IF NOT EXISTS product_tariffs (
            id BIGSERIAL PRIMARY KEY,
            product_id BIGINT NOT NULL REFERENCES products(id) ON DELETE RESTRICT,
            slug VARCHAR(64) NOT NULL UNIQUE,
            name VARCHAR(255) NOT NULL,
            price NUMERIC(12, 2) NOT NULL,
            access_months INTEGER,
            bonus_product_id BIGINT REFERENCES products(id) ON DELETE RESTRICT,
            bonus_months INTEGER NOT NULL DEFAULT 0,
            is_active BOOLEAN NOT NULL DEFAULT TRUE,
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            CHECK (price >= 0),
            CHECK (access_months IS NULL OR access_months > 0),
            CHECK (bonus_months >= 0),
            CHECK (
                (bonus_product_id IS NULL AND bonus_months = 0)
                OR
                (bonus_product_id IS NOT NULL AND bonus_months > 0)
            )
        )
    """)

    main_product_id = await pool.fetchval("SELECT id FROM products WHERE slug = 'main_course'")
    secondary_product_id = await pool.fetchval("SELECT id FROM products WHERE slug = 'secondary_product'")
    await pool.execute("""
        INSERT INTO product_tariffs (
            product_id, slug, name, price, access_months, bonus_product_id, bonus_months
        )
        VALUES
            ($1, 'main_start', 'Старт', 14900.00, NULL, $2, 2),
            ($1, 'main_together', 'Вместе', 34900.00, NULL, $2, 3),
            ($1, 'main_turnkey', 'Под ключ', 99900.00, NULL, $2, 6),
            ($2, 'secondary_1_month', '1 месяц', 1990.00, 1, NULL, 0),
            ($2, 'secondary_3_month', '3 месяца', 4990.00, 3, NULL, 0),
            ($2, 'secondary_6_month', '6 месяцев', 8990.00, 6, NULL, 0)
        ON CONFLICT (slug) DO UPDATE SET
            product_id = EXCLUDED.product_id,
            name = EXCLUDED.name,
            price = EXCLUDED.price,
            access_months = EXCLUDED.access_months,
            bonus_product_id = EXCLUDED.bonus_product_id,
            bonus_months = EXCLUDED.bonus_months,
            is_active = EXCLUDED.is_active,
            updated_at = NOW()
    """, main_product_id, secondary_product_id)

    await pool.execute("""
        CREATE TABLE IF NOT EXISTS payment_orders (
            id BIGSERIAL PRIMARY KEY,
            user_id BIGINT NOT NULL
                REFERENCES users(id)
                ON DELETE CASCADE,
            tariff_id BIGINT NOT NULL
                REFERENCES product_tariffs(id)
                ON DELETE RESTRICT,
            amount NUMERIC(12, 2) NOT NULL,
            status VARCHAR(32) NOT NULL DEFAULT 'pending',
            payment_provider VARCHAR(32) NOT NULL DEFAULT 'robokassa',
            provider_payment_id VARCHAR(255),

            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            paid_at TIMESTAMPTZ,
            refunded_at TIMESTAMPTZ,
            CHECK (status IN ( 'pending', 'paid', 'failed', 'cancelled', 'refunded'))
        )
    """)

    await pool.execute("""
        CREATE TABLE IF NOT EXISTS user_product_access (
            id BIGSERIAL PRIMARY KEY,
            user_id BIGINT NOT NULL
                REFERENCES users(id)
                ON DELETE CASCADE,
            product_id BIGINT NOT NULL
                REFERENCES products(id)
                ON DELETE RESTRICT,
            order_id BIGINT
                REFERENCES payment_orders(id)
                ON DELETE SET NULL,
            access_type VARCHAR(32) NOT NULL,
            starts_at TIMESTAMPTZ NOT NULL,
            expires_at TIMESTAMPTZ,
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            recurring_enabled BOOLEAN NOT NULL DEFAULT FALSE,
            recurring_failed_at TIMESTAMPTZ,
            CHECK (access_type IN ( 'purchase', 'bonus', 'manual')),
            CHECK (expires_at IS NULL OR expires_at > starts_at)
        )
    """)

    await pool.execute("""
        CREATE TABLE IF NOT EXISTS buddy_pairs (
            id BIGSERIAL PRIMARY KEY,
            first_user_id BIGINT NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
            second_user_id BIGINT NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
            CHECK (first_user_id <> second_user_id)
        );

        CREATE TABLE IF NOT EXISTS buddy_queue (
            id BIGSERIAL PRIMARY KEY,
            user_id BIGINT NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE
        );
    """)

    await pool.execute("""
        CREATE TABLE IF NOT EXISTS tasks (
            id BIGSERIAL PRIMARY KEY,
            text VARCHAR(500),
            file_id TEXT,
            file_type VARCHAR(50),
            status INTEGER DEFAULT 0 
        );
    """)

    await pool.execute("""
        CREATE TABLE IF NOT EXISTS task_answers (
            id BIGSERIAL PRIMARY KEY,
            user_id BIGINT REFERENCES users(id) ON DELETE CASCADE NOT NULL,
            pair_id BIGINT REFERENCES buddy_pairs(id) ON DELETE CASCADE,
            task_id BIGINT REFERENCES tasks(id) ON DELETE CASCADE,
            file_id TEXT,
            grade INT DEFAULT 0,
            created_at TIMESTAMP DEFAULT NOW()
        );
    """)

    await pool.execute("""
        CREATE OR REPLACE FUNCTION delete_row(table_name TEXT, row_id BIGINT)
        RETURNS VOID AS $$
        BEGIN
            EXECUTE format('DELETE FROM %I WHERE id = $1', table_name)
            USING row_id;
        END;
        $$ LANGUAGE plpgsql;
    """)

async def moodle_create_course_purchase(email: str, course_slug: str, tariff_slug: str, payment_id: str):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    user = await pool.fetchval("""
        SELECT
            users.id
        FROM users
    """)

async def find_users_with_expiring_access(days: int, trail: bool):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    if trail:
        users = await pool.fetch("""
            SELECT DISTINCT
                users.telegram_user_id,
                user_product_access.expires_at
            FROM users
            JOIN user_product_access
                ON users.id = user_product_access.user_id
            WHERE user_product_access.product_id = 2
            AND user_product_access.access_type = 'bonus'
            AND user_product_access.expires_at IS NOT NULL
            AND user_product_access.expires_at::date
                = CURRENT_DATE + $1::int
            AND users.telegram_user_id IS NOT NULL
        """, days)
    else:
        users = await pool.fetch("""
            SELECT DISTINCT
                users.telegram_user_id,
                products.name,
                user_product_access.product_id,
                user_product_access.expires_at,
                messages.text
            FROM users

            JOIN user_product_access
                ON users.id = user_product_access.user_id

            JOIN products
                ON user_product_access.product_id = products.id

            JOIN messages
                ON messages.id = CASE
                    WHEN $1::int = 1 THEN 4
                    WHEN $1::int = 3 THEN 3
                END

            WHERE user_product_access.product_id = 2
            AND user_product_access.access_type IS DISTINCT FROM 'bonus'
            AND user_product_access.expires_at IS NOT NULL
            AND user_product_access.expires_at::date
                = CURRENT_DATE + $1::int
            AND users.telegram_user_id IS NOT NULL

        """, days)
    return [dict(user) for user in users]

async def check_buddy_queue(telegram_user_id: int):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    result = await pool.fetchval("""
        SELECT EXISTS (
            SELECT 1
            FROM buddy_queue
            JOIN users ON buddy_queue.user_id = users.id
            WHERE users.telegram_user_id = $1
        )
    """, telegram_user_id)
    return result

async def create_new_message(message_text: str | None, auditory_type: str, send_time: datetime, document_id: str | None = None, document_type: str | None = None):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    await pool.execute("""
        INSERT INTO scheduled_messages (message_text, auditory_type, send_time, document_id, document_type)
        VALUES ($1, $2, $3, $4, $5)
    """, message_text, auditory_type, send_time, document_id, document_type)
    return 201

async def switch_month_task():
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    async with pool.acquire() as connection:
        async with connection.transaction():
            new_task_file_id = await pool.fetchval("""
                SELECT file_id
                FROM tasks
                WHERE status = 0
            """)
            await connection.execute("""DELETE FROM task_answers""")
            await pool.execute("""
                UPDATE tasks
                SET status = CASE
                    WHEN status = 0 THEN 1
                    WHEN status = 1 THEN 2
                END
                WHERE status IN (0, 1)
            """)
        return new_task_file_id

async def delete_expired_access(trail: bool = False):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    rows = await pool.fetch("""
        DELETE FROM user_product_access
        USING users
        WHERE user_product_access.user_id = users.id
          AND user_product_access.product_id = 2
          AND user_product_access.expires_at IS NOT NULL
          AND user_product_access.expires_at <= NOW()
          AND users.telegram_user_id IS NOT NULL
          AND (($1::bool = TRUE AND user_product_access.access_type = 'bonus') OR ($1::bool = FALSE AND user_product_access.access_type IS DISTINCT FROM 'bonus'))
        RETURNING users.telegram_user_id
    """, trail)
    return list(set(row["telegram_user_id"] for row in rows))

async def check_existing_answer(telegram_user_id: int):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    existing_answer_id = await pool.fetchval("""
        SELECT task_answers.id
        FROM task_answers
        JOIN users ON task_answers.user_id = users.id
        WHERE users.telegram_user_id = $1
    """,telegram_user_id)
    return existing_answer_id

async def find_in_pairs(telegram_user_id: int):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    pair = await pool.fetchval("""
        SELECT buddy_pairs.id
        FROM buddy_pairs
        JOIN users ON buddy_pairs.first_user_id = users.id OR buddy_pairs.second_user_id = users.id
        WHERE users.telegram_user_id = $1
    """, telegram_user_id)
    return pair

async def pass_the_task(telegram_user_id: int, file_id: str):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    user_id = await pool.fetchval("""
        SELECT id
        FROM users
        WHERE telegram_user_id = $1
    """, telegram_user_id)
    task_id = await pool.fetchval("""
        SELECT id
        FROM tasks
        WHERE status = 1
        LIMIT 1
    """)
    pair_id = await pool.fetchval("""
            SELECT id
            FROM buddy_pairs
            WHERE first_user_id = $1 OR second_user_id = $1
        """, user_id)
    existing_answer_id = await check_existing_answer(telegram_user_id)
    if existing_answer_id:
        await pool.execute("""
            UPDATE task_answers
            SET
                file_id = $1,
                grade = 0
            WHERE id = $2
            """,file_id,existing_answer_id)
    else:
        await pool.execute("""
            INSERT INTO task_answers (user_id, task_id, file_id, pair_id)
            VALUES ($1, $2, $3, $4)
            """,user_id, task_id, file_id, pair_id)
    return True

async def update_current_task(text: str, file_id: str, file_type: str, task_id: int):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    await pool.execute("""
        UPDATE tasks
        SET 
            text = $1,
            file_id = $2,
            file_type = $3
        WHERE status = 0 AND id = $4
    """, text, file_id, file_type, task_id)

async def get_current_task(status: int):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    task = await pool.fetchrow("""
        SELECT 
            id,
            text,
            file_id
        FROM tasks
        WHERE status = $1
        LIMIT 1
    """, status)
    return task

async def try_to_add_token_db(token: str, telegram_user_id: int):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    result = await pool.fetchval("""
        UPDATE users AS invited
        SET referal_id = referrer.id
        FROM users AS referrer
        WHERE invited.telegram_user_id = $2
          AND referrer.referal_token = $1
          AND invited.referal_id IS NULL
          AND invited.id <> referrer.id
        RETURNING invited.id
    """, token, telegram_user_id)
    return result is not None

async def check_referal_existing(telegram_user_id: int):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    return await pool.fetchval("""
        SELECT EXISTS (SELECT 1 FROM users WHERE telegram_user_id = $1 AND referal_id IS NOT NULL)
    """, telegram_user_id)

async def create_month_task(text: str, file_id: str, file_type: str):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    await pool.fetchrow("""
        INSERT INTO tasks (text, file_id, file_type)
        VALUES ($1, $2, $3)
    """, text, file_id, file_type)

async def get_all_users(limit: int | None = None, offset: int = 0):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    users = await pool.fetch("""
        SELECT 
            id,
            name, 
            email, 
            telegram_user_id, 
            telegram_username, 
            phone_number, 
            created_at,
            COUNT(*) OVER() AS total_count
        FROM users
        ORDER BY id
        LIMIT $1 OFFSET $2
    """, limit, offset)
    return [dict(user) for user in users]

async def get_club_members(limit: int | None = None, offset: int | None = None):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    users = await pool.fetch("""
        SELECT 
            user_product_access.id,
            user_product_access.user_id,
            user_product_access.product_id,
            user_product_access.starts_at,
            user_product_access.expires_at,
            users.name,
            users.email,
            users.telegram_user_id,
            users.telegram_username,
            users.phone_number,
            products.name AS product_name,
            COUNT(*) OVER() AS total_count
        FROM user_product_access
        JOIN users ON users.id = user_product_access.user_id
        JOIN products ON products.id = user_product_access.product_id
        ORDER BY user_product_access.user_id
        LIMIT $1 OFFSET $2
    """, limit, offset)
    return [dict(user) for user in users]

async def create_queue_record(telegram_user_id: int):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    result = await pool.execute("""
        INSERT INTO buddy_queue (user_id)
        SELECT id
        FROM users
        WHERE telegram_user_id = $1
        ON CONFLICT (user_id) DO NOTHING
    """, telegram_user_id)
    return result == "INSERT 0 1"

async def create_buddy_pairs():
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    async with pool.acquire() as connection:
        async with connection.transaction():
            users = await pool.fetch("""
                SELECT 
                    buddy_queue.user_id,
                    users.telegram_user_id,
                    users.telegram_username
                FROM buddy_queue
                JOIN users ON users.id = buddy_queue.user_id
                ORDER BY buddy_queue.id
                FOR UPDATE OF buddy_queue
            """)
            if len(users) < 2:
                return []
            paired_user_ids = []
            notifications = []
            for index in range(0, len(users) - 1, 2):
                first_user_id = users[index]["user_id"]
                second_user_id = users[index + 1]["user_id"]
                await pool.execute("""
                    INSERT INTO buddy_pairs (
                        first_user_id,
                        second_user_id
                    )
                    VALUES ($1, $2)
                """, first_user_id, second_user_id)
                paired_user_ids.extend([first_user_id, second_user_id,])
                notifications.extend([
                    {
                        "telegram_user_id": users[index]["telegram_user_id"],
                        "buddy_username": users[index + 1]["telegram_username"],
                    },
                    {
                        "telegram_user_id": users[index + 1]["telegram_user_id"],
                        "buddy_username": users[index]["telegram_username"],
                    },
                ])
            await pool.execute("""
                DELETE FROM buddy_queue
                WHERE user_id = ANY($1::BIGINT[])
            """, paired_user_ids)
            return notifications

async def disconnect_database() -> None:
    global pool
    if pool is not None:
        await pool.close()
        pool = None

async def find_user_by_email_or_phone(email: str | None = None, phone_number: str | None = None) -> dict | None:
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    email = email.strip().lower() if email else None
    phone_number = phone_number.strip() if phone_number else None
    rows = await pool.fetch("""
        SELECT id, name, email, phone_number, token, telegram_user_id, telegram_username
        FROM users
        WHERE ($1::TEXT IS NOT NULL AND email = $1) OR 
            ($2::TEXT IS NOT NULL AND phone_number = $2)
    """, email, phone_number)
    if len(rows) > 1:
        raise ValueError("Email и телефон принадлежат разным пользователям")
    return dict(rows[0]) if rows else None

async def get_user_by_token(token: str) -> dict | None:
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    row = await pool.fetchrow("""
        SELECT id, telegram_user_id
        FROM users
        WHERE token = $1
    """, token)
    return dict(row) if row else None

async def save_lead_from_site(name: str, email: str | None = None, phone_number: str = "", token: str = "") -> dict:
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    email = email.strip().lower() if email else None
    phone_number = phone_number.strip()
    user = await find_user_by_email_or_phone(email, phone_number)
    if user:
        row = await pool.fetchrow("""
            UPDATE users
            SET name = $2, email = COALESCE($3, email), phone_number = $4, token = $5
            WHERE id = $1
            RETURNING id, name, email, phone_number, token, telegram_user_id, telegram_username, created_at
        """, user["id"], name.strip(), email, phone_number, token)
    else:
        row = await pool.fetchrow("""
            INSERT INTO users (name, email, phone_number, token)
            VALUES ($1, $2, $3, $4)
            RETURNING id, name, email, phone_number, token, telegram_user_id, telegram_username, created_at
        """, name.strip(), email, phone_number, token)
    if row is None:
        raise RuntimeError("Не удалось сохранить пользователя")
    return dict(row)

async def add_telegram_to_registration(token: str, telegram_user_id: int, telegram_username: str | None) -> int:
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    referal_token = f"{telegram_user_id}{secrets.token_hex(8)}"
    async with pool.acquire() as connection:
        async with connection.transaction():
            existing_user = await connection.fetchval("""
                SELECT 1
                FROM users
                WHERE telegram_user_id = $1
            """, telegram_user_id)
            if existing_user is not None:
                await pool.execute("""
                DELETE FROM users
                    WHERE token = $1 AND telegram_user_id IS NULL
                """, token)
                return 409
            row = await connection.fetchrow("""
                UPDATE users
                SET
                    telegram_user_id = $2,
                    telegram_username = $3,
                    referal_token = $4
                WHERE token = $1
                RETURNING
                    id,
                    name,
                    email,
                    phone_number,
                    token,
                    telegram_user_id,
                    telegram_username,
                    created_at
            """, token, telegram_user_id, telegram_username, referal_token)
            if row is None:
                return 404
    return 201

async def give_club_trail_access(telegram_user_id: int):
    async with pool.acquire() as connection:
        async with connection.transaction():
            user = await connection.fetchrow("""
                SELECT id FROM users WHERE telegram_user_id = $1
            """, telegram_user_id)
            if user is None:
                return False
            trial_access = await connection.fetchval("""
                UPDATE users
                SET expired_trail = TRUE
                WHERE id = $1 AND expired_trail = FALSE
                RETURNING id
            """, user["id"])
            if trial_access is None:
                return False
            if trial_access is not None:
                await connection.execute("""
                    INSERT INTO user_product_access (user_id, product_id, order_id, access_type, starts_at, expires_at)
                    VALUES ($1, 2, NULL, 'bonus', NOW(), NOW() + INTERVAL '30 days')
                """, user["id"])
            return True

async def save_lead_from_telegram(telegram_user_id: int, telegram_username: str | None) -> int:
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    referal_token = f"{telegram_user_id}{secrets.token_hex(8)}"
    async with pool.acquire() as connection:
        async with connection.transaction():
            existing_user = await connection.fetchval("""
                SELECT id
                FROM users
                WHERE telegram_user_id = $1
            """, telegram_user_id)
            if existing_user is not None:
                return 409
            row = await connection.fetchrow("""
                INSERT INTO users (telegram_user_id, telegram_username, referal_token)
                VALUES ($1, $2, $3)
                RETURNING id, telegram_user_id, telegram_username, created_at
            """, telegram_user_id, telegram_username, referal_token)
            if row is None:
                raise RuntimeError("Не удалось сохранить пользователя")
    return 201

async def delete_row(table_name: str, row_id: int):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    await pool.execute("""
        SELECT delete_row($1, $2)
    """, table_name, row_id)

async def get_buddy_data_db(telegram_user_id: int):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    buddy = await pool.fetchrow("""
        SELECT
            buddy_pairs.id AS pair_id,
            buddy_user.name AS buddy_name,
            buddy_user.telegram_user_id AS buddy_telegram_user_id,
            buddy_user.telegram_username AS buddy_username
        FROM users AS current_user
        JOIN buddy_pairs
            ON buddy_pairs.first_user_id = current_user.id
            OR buddy_pairs.second_user_id = current_user.id
        JOIN users AS buddy_user
            ON buddy_user.id = CASE
                WHEN buddy_pairs.first_user_id = current_user.id
                    THEN buddy_pairs.second_user_id
                ELSE buddy_pairs.first_user_id
            END
        WHERE current_user.telegram_user_id = $1
        LIMIT 1
    """, telegram_user_id)
    if buddy:
        return {
            "status": "paired",
            "pair_id": buddy["pair_id"],
            "buddy_name": buddy["buddy_name"],
            "buddy_telegram_user_id": buddy["buddy_telegram_user_id"],
            "buddy_username": buddy["buddy_username"]
        }
    is_in_queue = await pool.fetchval("""
        SELECT EXISTS (
            SELECT 1
            FROM buddy_queue
            JOIN users ON users.id = buddy_queue.user_id
            WHERE users.telegram_user_id = $1
        )
    """, telegram_user_id)
    if is_in_queue:
        return {"status": "queue"}
    return {"status": "none"}

async def get_data_for_menu_db(telegram_user_id: int):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    user = await pool.fetchrow("""
        SELECT
            users.name,
            users.telegram_username,
            users.balance,
            users.referal_token,
            (
                SELECT COUNT(*)
                FROM users AS referred_users
                WHERE referred_users.referal_id = users.id
            ) AS referrals_count,
            user_access.access_type,
            user_access.starts_at,
            user_access.expires_at,
            user_access.recurring_enabled
        FROM users
        LEFT JOIN LATERAL (
            SELECT
                user_product_access.access_type,
                user_product_access.starts_at,
                user_product_access.expires_at,
                user_product_access.recurring_enabled
            FROM user_product_access
            WHERE user_product_access.user_id = users.id
                AND user_product_access.product_id = 2
                AND user_product_access.starts_at <= NOW()
                AND (
                    user_product_access.expires_at IS NULL
                    OR user_product_access.expires_at > NOW()
                )
            ORDER BY user_product_access.expires_at DESC NULLS FIRST
            LIMIT 1
        ) AS user_access ON TRUE
        WHERE users.telegram_user_id = $1
    """, telegram_user_id)
    return user

async def update_scheduled_message(message_id: int, message_text: str | None = None, send_time: datetime | None = None, document_id: str | None = None, document_type: str | None = None):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    await pool.execute("""
        UPDATE scheduled_messages 
        SET 
            message_text = COALESCE($2::TEXT, message_text),
            send_time = COALESCE($3::TIMESTAMPTZ, send_time),
            document_id = COALESCE($4::TEXT, document_id),
            document_type = COALESCE($5::VARCHAR(63), document_type)
        WHERE id = $1
    """, message_id, message_text, send_time, document_id, document_type)

async def get_scheduled_messages(auditory_type: str | None = None, scheduled_message_id: int | None = None) -> list[dict]:
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    if auditory_type is None:
        rows = await pool.fetch("""
            SELECT
                scheduled_messages.id,
                scheduled_messages.send_time,
                scheduled_messages.auditory_type,
                scheduled_messages.document_id,
                scheduled_messages.document_type,
                COALESCE(scheduled_messages.message_text, messages.text) AS text
            FROM scheduled_messages
            LEFT JOIN messages
                ON messages.id = scheduled_messages.message_id
            WHERE scheduled_messages.auditory_type <> 'user'
                AND ($1::BIGINT IS NULL OR scheduled_messages.id = $1)
            ORDER BY scheduled_messages.send_time
        """, scheduled_message_id)
        return [dict(row) for row in rows]
    rows = await pool.fetch(
        """
        SELECT
            scheduled_messages.id,
            scheduled_messages.user_id,
            scheduled_messages.message_id,
            scheduled_messages.send_time,
            scheduled_messages.auditory_type,
            scheduled_messages.message_text,
            scheduled_messages.document_id,
            scheduled_messages.document_type,
            users.telegram_user_id,
            COALESCE(scheduled_messages.message_text, messages.text) AS text
        FROM scheduled_messages
        LEFT JOIN users
            ON users.id = scheduled_messages.user_id
        LEFT JOIN messages
            ON messages.id = scheduled_messages.message_id
        WHERE scheduled_messages.send_time <= NOW()
            AND scheduled_messages.auditory_type = $1
            AND (scheduled_messages.auditory_type <> 'user' OR users.telegram_user_id IS NOT NULL)
        ORDER BY scheduled_messages.send_time
        """, auditory_type
    )
    return [dict(row) for row in rows]

async def delete_scheduled_message(scheduled_message_id: int) -> None:
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    await pool.execute(
        """
        DELETE FROM scheduled_messages
        WHERE id = $1
        """,
        scheduled_message_id,
    )

async def get_or_create_checkout_user(name: str, email: str, phone_number: str) -> dict:
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    email = email.strip().lower()
    phone_number = "".join(filter(str.isdigit, phone_number))
    if len(phone_number) == 11 and phone_number.startswith("8"):
        phone_number = "7" + phone_number[1:]
    rows = await pool.fetch("""
        SELECT id, name, email, phone_number, token, telegram_user_id, telegram_username
        FROM users
        WHERE LOWER(COALESCE(email, '')) = $1
        OR regexp_replace(COALESCE(phone_number, ''), '[^0-9]', '', 'g') = $2
    """, email, phone_number)
    if len(rows) > 1:
        raise ValueError("Email и телефон принадлежат разным пользователям")
    if rows:
        row = await pool.fetchrow("""
            UPDATE users
            SET
                name = CASE WHEN $2 <> '' THEN $2 ELSE name END,
                email = COALESCE(email, $3),
                phone_number = COALESCE(phone_number, $4)
            WHERE id = $1
            RETURNING id, name, email, phone_number, token, telegram_user_id, telegram_username
        """, rows[0]["id"], name.strip(), email, phone_number)
        return dict(row)
    row = await pool.fetchrow("""
        INSERT INTO users (name, email, phone_number)
        VALUES ($1, $2, $3)
        RETURNING id, name, email, phone_number, token, telegram_user_id, telegram_username
    """, name.strip(), email, phone_number)
    return dict(row)

async def create_payment_order_by_user_id(user_id: int, tariff_slug: str) -> dict | None:
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    row = await pool.fetchrow("""
        WITH selected_tariff AS (
            SELECT id, name, price
            FROM product_tariffs
            WHERE slug = $2 AND is_active = TRUE
        ),
        new_order AS (
            INSERT INTO payment_orders (user_id, tariff_id, amount)
            SELECT $1, selected_tariff.id, selected_tariff.price
            FROM selected_tariff
            RETURNING id, tariff_id, amount, status, created_at
        )
        SELECT
            new_order.id,
            new_order.amount,
            new_order.status,
            new_order.created_at,
            selected_tariff.name AS tariff_name
        FROM new_order
        JOIN selected_tariff ON selected_tariff.id = new_order.tariff_id
    """, user_id, tariff_slug)
    return dict(row) if row else None

async def get_payment_order_details(order_id: int) -> dict | None:
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    row = await pool.fetchrow("""
        SELECT
            payment_orders.id,
            payment_orders.user_id,
            payment_orders.amount,
            payment_orders.status,
            users.name,
            users.email,
            users.phone_number,
            users.telegram_user_id,
            users.moodle_user_id,
            users.moodle_username,
            product_tariffs.slug AS tariff_slug,
            product_tariffs.name AS tariff_name,
            products.slug AS product_slug
        FROM payment_orders
        JOIN users
            ON users.id = payment_orders.user_id
        JOIN product_tariffs
            ON product_tariffs.id = payment_orders.tariff_id
        JOIN products
            ON products.id = product_tariffs.product_id
        WHERE payment_orders.id = $1
    """, order_id)
    return dict(row) if row else None
 
async def save_moodle_user(user_id: int, moodle_user_id: int, moodle_username: str | None,) -> None:
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    await pool.execute("""
        UPDATE users
        SET
            moodle_user_id = $2,
            moodle_username = $3
        WHERE id = $1
    """, user_id, moodle_user_id, moodle_username)

async def create_payment_order(telegram_user_id: int, tariff_slug: str) -> dict | None:
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    row = await pool.fetchrow("""
        WITH selected_user AS (SELECT id FROM users WHERE telegram_user_id = $1),
        selected_tariff AS (SELECT id, name, price FROM product_tariffs WHERE slug = $2 AND is_active = TRUE),
        new_order AS (INSERT INTO payment_orders (user_id, tariff_id, amount)
            SELECT selected_user.id, selected_tariff.id, selected_tariff.price
            FROM selected_user, selected_tariff
            RETURNING id, tariff_id, amount, status, created_at)
        SELECT
            new_order.id,
            new_order.amount,
            new_order.status,
            new_order.created_at,
            selected_tariff.name AS tariff_name
        FROM new_order
        JOIN selected_tariff ON selected_tariff.id = new_order.tariff_id
    """, telegram_user_id, tariff_slug)
    return dict(row) if row else None

async def confirm_payment_order(order_id: int, amount: str) -> bool:
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    async with pool.acquire() as connection:
        async with connection.transaction():
            order = await connection.fetchrow("""
                SELECT
                    payment_orders.id,
                    payment_orders.user_id,
                    payment_orders.amount,
                    payment_orders.status,
                    product_tariffs.product_id,
                    product_tariffs.access_months,
                    product_tariffs.bonus_product_id,
                    product_tariffs.bonus_months
                FROM payment_orders
                JOIN product_tariffs ON product_tariffs.id = payment_orders.tariff_id
                WHERE payment_orders.id = $1
                FOR UPDATE
            """, order_id)
            if order is None or order["amount"] != Decimal(amount):
                return False
            if order["status"] == "paid":
                return True
            await connection.execute("""
                UPDATE payment_orders
                SET status = 'paid', paid_at = NOW()
                WHERE id = $1
            """, order_id)
            active_access = await connection.fetchrow("""
                SELECT id, expires_at
                FROM user_product_access
                WHERE user_id = $1
                  AND product_id = $2
                  AND starts_at <= NOW()
                  AND (expires_at IS NULL OR expires_at > NOW())
                ORDER BY expires_at DESC NULLS FIRST
                LIMIT 1
                FOR UPDATE
            """, order["user_id"], order["product_id"])
            if active_access is not None:
                if active_access["expires_at"] is not None and order["access_months"] is not None:
                    await connection.execute("""
                        UPDATE user_product_access
                        SET
                            expires_at = expires_at + ($2::INTEGER * INTERVAL '30 days'),
                            access_type = 'purchase',
                            order_id = $3
                        WHERE id = $1
                    """, active_access["id"], order["access_months"], order_id)
            else:
                await connection.execute("""
                    INSERT INTO user_product_access (
                        user_id, product_id, order_id, access_type, starts_at, expires_at
                    )
                    VALUES (
                        $1, $2, $3, 'purchase', NOW(),
                        CASE
                            WHEN $4::INTEGER IS NULL THEN NULL
                            ELSE NOW() + make_interval(months => $4::INTEGER)
                        END
                    )
                """, order["user_id"], order["product_id"], order_id, order["access_months"])
            if order["bonus_product_id"] is not None and order["bonus_months"] > 0:
                bonus_access = await connection.fetchrow("""
                    SELECT id, expires_at
                    FROM user_product_access
                    WHERE user_id = $1
                      AND product_id = $2
                      AND starts_at <= NOW()
                      AND (expires_at IS NULL OR expires_at > NOW())
                    ORDER BY expires_at DESC NULLS FIRST
                    LIMIT 1
                    FOR UPDATE
                """, order["user_id"], order["bonus_product_id"])
                if bonus_access is not None:
                    if bonus_access["expires_at"] is not None:
                        await connection.execute("""
                            UPDATE user_product_access
                            SET expires_at = expires_at + make_interval(months => $2::INTEGER)
                            WHERE id = $1
                        """, bonus_access["id"], order["bonus_months"])
                else:
                    await connection.execute("""
                        INSERT INTO user_product_access (
                            user_id, product_id, order_id, access_type, starts_at, expires_at
                        )
                        VALUES (
                            $1, $2, $3, 'bonus', NOW(),
                            NOW() + make_interval(months => $4::INTEGER)
                        )
                    """, order["user_id"], order["bonus_product_id"], order_id, order["bonus_months"])
        return True

async def if_paid_access(telegram_user_id: int) -> bool:
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    row = await pool.fetchrow("""
        SELECT user_product_access.user_id
        FROM user_product_access
        JOIN users ON users.id = user_product_access.user_id
        WHERE users.telegram_user_id = $1
        AND user_product_access.product_id = 2
        AND user_product_access.starts_at <= NOW()
        AND (user_product_access.expires_at IS NULL OR user_product_access.expires_at > NOW())
        LIMIT 1
    """, telegram_user_id)
    return row is not None

async def get_referal_token(telegram_user_id: int):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    token = await pool.fetchval("""
        SELECT referal_token 
        FROM users
        WHERE telegram_user_id = $1
    """, telegram_user_id)
    return token

async def check_user_channel_access(telegram_user_id: int):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    user = await pool.fetchval("""
        SELECT 1 
        FROM user_product_access
        JOIN users on user_product_access.user_id = users.id
        WHERE users.telegram_user_id = $1 AND user_product_access.product_id = 2
        AND user_product_access.starts_at <= NOW()
        AND (user_product_access.expires_at IS NULL OR user_product_access.expires_at > NOW())
        LIMIT 1
    """, telegram_user_id)
    return user is not None
