import os
import asyncpg
from decimal import Decimal, ROUND_HALF_UP
from datetime import datetime, timedelta, timezone
from urllib.parse import urlparse
import ipaddress
import json
import secrets
import uuid

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
            invite_channel_link TEXT,
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


    # Дополнительные таблицы v3.1. Они не заменяют существующие users/payment_orders/
    # user_product_access, а хранят новые состояния рядом с текущим ядром.
    await pool.execute("""
        CREATE TABLE IF NOT EXISTS club_system_state (
            user_id BIGINT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
            role VARCHAR(32) NOT NULL DEFAULT 'user',
            partner_status BOOLEAN NOT NULL DEFAULT FALSE,
            blocked_at TIMESTAMPTZ,
            CHECK (role IN ('user', 'moderator', 'team', 'admin'))
        );

        CREATE TABLE IF NOT EXISTS trial_history (
            id BIGSERIAL PRIMARY KEY,
            user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            access_id BIGINT UNIQUE REFERENCES user_product_access(id) ON DELETE SET NULL,
            started_at TIMESTAMPTZ NOT NULL,
            ended_at TIMESTAMPTZ NOT NULL
        );

        CREATE TABLE IF NOT EXISTS access_sources (
            access_id BIGINT PRIMARY KEY REFERENCES user_product_access(id) ON DELETE CASCADE,
            source_type VARCHAR(64) NOT NULL,
            source_reference VARCHAR(255),
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );

        CREATE TABLE IF NOT EXISTS user_profiles (
            user_id BIGINT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
            occupation TEXT,
            interests TEXT,
            ai_level TEXT,
            goals TEXT,
            current_project TEXT,
            visibility_json JSONB NOT NULL DEFAULT '{}'::jsonb,
            updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );

        CREATE TABLE IF NOT EXISTS acquisition_touchpoints (
            id BIGSERIAL PRIMARY KEY,
            user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            source VARCHAR(128),
            campaign VARCHAR(128),
            payload_json JSONB NOT NULL DEFAULT '{}'::jsonb,
            referrer_link_token VARCHAR(255),
            occurred_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );

        CREATE TABLE IF NOT EXISTS club_plan_versions (
            id BIGSERIAL PRIMARY KEY,
            tariff_id BIGINT NOT NULL REFERENCES product_tariffs(id) ON DELETE RESTRICT,
            version INTEGER NOT NULL,
            subscription_term INTEGER NOT NULL,
            period_days INTEGER NOT NULL,
            price NUMERIC(12, 2) NOT NULL,
            currency VARCHAR(8) NOT NULL DEFAULT 'RUB',
            available_for_checkout BOOLEAN NOT NULL DEFAULT TRUE,
            effective_from TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            UNIQUE (tariff_id, version),
            CHECK (subscription_term IN (1, 3, 6)),
            CHECK (period_days = subscription_term * 30),
            CHECK (price >= 0)
        );

        CREATE TABLE IF NOT EXISTS subscription_consents (
            id BIGSERIAL PRIMARY KEY,
            user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            plan_version_id BIGINT NOT NULL REFERENCES club_plan_versions(id) ON DELETE RESTRICT,
            terms_version VARCHAR(64) NOT NULL DEFAULT 'v3.1',
            recurring_requested BOOLEAN NOT NULL DEFAULT FALSE,
            accepted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            revoked_at TIMESTAMPTZ,
            source VARCHAR(64) NOT NULL DEFAULT 'club_bot'
        );

        CREATE TABLE IF NOT EXISTS club_subscriptions (
            id BIGSERIAL PRIMARY KEY,
            user_id BIGINT NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
            subscription_type VARCHAR(32) NOT NULL DEFAULT 'manual',
            status VARCHAR(32) NOT NULL DEFAULT 'none',
            plan_version_id BIGINT REFERENCES club_plan_versions(id) ON DELETE RESTRICT,
            renewal_plan_version_id BIGINT REFERENCES club_plan_versions(id) ON DELETE RESTRICT,
            pending_plan_version_id BIGINT REFERENCES club_plan_versions(id) ON DELETE RESTRICT,
            subscription_term INTEGER,
            period_days INTEGER,
            paid_until TIMESTAMPTZ,
            next_charge_at TIMESTAMPTZ,
            schedule_version INTEGER NOT NULL DEFAULT 1,
            cancel_at_period_end BOOLEAN NOT NULL DEFAULT FALSE,
            consent_id BIGINT REFERENCES subscription_consents(id) ON DELETE SET NULL,
            updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            CHECK (subscription_type IN ('recurring', 'manual', 'lifetime', 'none')),
            CHECK (status IN ('none', 'trialing', 'active', 'grace', 'cancel_at_period_end', 'expired')),
            CHECK (subscription_term IS NULL OR subscription_term IN (1, 3, 6))
        );

        CREATE TABLE IF NOT EXISTS club_payment_meta (
            order_id BIGINT PRIMARY KEY REFERENCES payment_orders(id) ON DELETE CASCADE,
            billing_cycle_id UUID NOT NULL UNIQUE,
            plan_version_id BIGINT NOT NULL REFERENCES club_plan_versions(id) ON DELETE RESTRICT,
            term_snapshot INTEGER NOT NULL,
            period_days_snapshot INTEGER NOT NULL,
            gross_price NUMERIC(12, 2) NOT NULL,
            internal_amount NUMERIC(12, 2) NOT NULL,
            external_amount NUMERIC(12, 2) NOT NULL,
            period_start TIMESTAMPTZ NOT NULL,
            period_end TIMESTAMPTZ NOT NULL,
            consent_id BIGINT REFERENCES subscription_consents(id) ON DELETE SET NULL,
            success_applied BOOLEAN NOT NULL DEFAULT FALSE,
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            CHECK (term_snapshot IN (1, 3, 6)),
            CHECK (period_days_snapshot = term_snapshot * 30),
            CHECK (gross_price = internal_amount + external_amount),
            CHECK (internal_amount >= 0 AND external_amount >= 0)
        );

        CREATE TABLE IF NOT EXISTS payment_attempts (
            id BIGSERIAL PRIMARY KEY,
            payment_id BIGINT NOT NULL REFERENCES payment_orders(id) ON DELETE CASCADE,
            attempt_no INTEGER NOT NULL,
            idempotency_key VARCHAR(255) NOT NULL UNIQUE,
            attempted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            provider_code VARCHAR(128),
            status VARCHAR(32) NOT NULL,
            UNIQUE (payment_id, attempt_no)
        );

        CREATE TABLE IF NOT EXISTS balance_reservations (
            id BIGSERIAL PRIMARY KEY,
            order_id BIGINT NOT NULL UNIQUE REFERENCES payment_orders(id) ON DELETE CASCADE,
            user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            amount NUMERIC(12, 2) NOT NULL,
            status VARCHAR(32) NOT NULL DEFAULT 'reserved',
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            closed_at TIMESTAMPTZ,
            CHECK (amount >= 0),
            CHECK (status IN ('reserved', 'committed', 'released'))
        );

        CREATE TABLE IF NOT EXISTS ledger_entries (
            id BIGSERIAL PRIMARY KEY,
            user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            account_type VARCHAR(32) NOT NULL,
            entry_type VARCHAR(64) NOT NULL,
            amount NUMERIC(12, 2) NOT NULL,
            bucket VARCHAR(32) NOT NULL DEFAULT 'available',
            reference_type VARCHAR(64),
            reference_id VARCHAR(255),
            reason TEXT,
            created_by BIGINT,
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            CHECK (account_type IN ('internal', 'withdrawable', 'withholding')),
            CHECK (amount >= 0)
        );

        CREATE TABLE IF NOT EXISTS referral_rates (
            id BIGSERIAL PRIMARY KEY,
            user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            rate NUMERIC(7, 6) NOT NULL,
            effective_from TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            effective_to TIMESTAMPTZ,
            CHECK (rate >= 0 AND rate <= 1)
        );

        CREATE TABLE IF NOT EXISTS partners (
            user_id BIGINT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
            status BOOLEAN NOT NULL DEFAULT TRUE,
            withdrawable_available NUMERIC(12, 2) NOT NULL DEFAULT 0,
            withdrawable_reserved NUMERIC(12, 2) NOT NULL DEFAULT 0,
            updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            CHECK (withdrawable_available >= 0),
            CHECK (withdrawable_reserved >= 0)
        );

        CREATE TABLE IF NOT EXISTS referral_accruals (
            id BIGSERIAL PRIMARY KEY,
            payment_order_id BIGINT NOT NULL UNIQUE REFERENCES payment_orders(id) ON DELETE CASCADE,
            referrer_user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            referred_user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            rate_snapshot NUMERIC(7, 6) NOT NULL,
            external_amount NUMERIC(12, 2) NOT NULL,
            reward_amount NUMERIC(12, 2) NOT NULL,
            account_type VARCHAR(32) NOT NULL,
            reversed_amount NUMERIC(12, 2) NOT NULL DEFAULT 0,
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            CHECK (account_type IN ('internal', 'withdrawable')),
            CHECK (external_amount >= 0 AND reward_amount >= 0 AND reversed_amount >= 0)
        );

        CREATE TABLE IF NOT EXISTS withholdings (
            id BIGSERIAL PRIMARY KEY,
            user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            account_type VARCHAR(32) NOT NULL,
            amount_remaining NUMERIC(12, 2) NOT NULL,
            source_refund_id BIGINT,
            status VARCHAR(32) NOT NULL DEFAULT 'open',
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            closed_at TIMESTAMPTZ,
            CHECK (account_type IN ('internal', 'withdrawable')),
            CHECK (amount_remaining >= 0),
            CHECK (status IN ('open', 'closed'))
        );

        CREATE TABLE IF NOT EXISTS refunds (
            id BIGSERIAL PRIMARY KEY,
            payment_id BIGINT NOT NULL REFERENCES payment_orders(id) ON DELETE CASCADE,
            provider_refund_id VARCHAR(255) UNIQUE,
            external_amount NUMERIC(12, 2) NOT NULL,
            status VARCHAR(32) NOT NULL DEFAULT 'succeeded',
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            CHECK (external_amount >= 0)
        );

        CREATE TABLE IF NOT EXISTS withdrawals (
            id BIGSERIAL PRIMARY KEY,
            user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            amount NUMERIC(12, 2) NOT NULL,
            status VARCHAR(32) NOT NULL DEFAULT 'pending',
            details_json JSONB NOT NULL DEFAULT '{}'::jsonb,
            requested_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            processed_at TIMESTAMPTZ,
            processed_by BIGINT,
            CHECK (amount >= 0),
            CHECK (status IN ('pending', 'paid', 'rejected', 'cancelled'))
        );

        CREATE TABLE IF NOT EXISTS buddy_pair_state (
            pair_id BIGINT PRIMARY KEY REFERENCES buddy_pairs(id) ON DELETE CASCADE,
            cycle_start TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            cycle_end TIMESTAMPTZ NOT NULL DEFAULT (NOW() + INTERVAL '30 days'),
            status VARCHAR(32) NOT NULL DEFAULT 'paired',
            CHECK (status IN ('paired', 'paused'))
        );

        CREATE TABLE IF NOT EXISTS buddy_decisions (
            id BIGSERIAL PRIMARY KEY,
            pair_id BIGINT NOT NULL REFERENCES buddy_pairs(id) ON DELETE CASCADE,
            user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            cycle_end TIMESTAMPTZ NOT NULL,
            decision VARCHAR(16) NOT NULL,
            decided_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            UNIQUE (pair_id, user_id, cycle_end),
            CHECK (decision IN ('keep', 'new', 'pause'))
        );

        CREATE TABLE IF NOT EXISTS buddy_history (
            id BIGSERIAL PRIMARY KEY,
            original_pair_id BIGINT NOT NULL,
            first_user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            second_user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            cycle_start TIMESTAMPTZ,
            cycle_end TIMESTAMPTZ,
            archived_reason VARCHAR(64),
            archived_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );

        CREATE TABLE IF NOT EXISTS buddy_nonresponse_reports (
            id BIGSERIAL PRIMARY KEY,
            pair_id BIGINT NOT NULL REFERENCES buddy_pairs(id) ON DELETE CASCADE,
            reporter_user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            reported_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            processed_at TIMESTAMPTZ,
            UNIQUE (pair_id, reporter_user_id)
        );

        CREATE TABLE IF NOT EXISTS challenges (
            id BIGSERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            starts_at TIMESTAMPTZ NOT NULL,
            deadline TIMESTAMPTZ NOT NULL,
            status VARCHAR(32) NOT NULL DEFAULT 'draft',
            participation_mode VARCHAR(16) NOT NULL DEFAULT 'solo',
            submission_format VARCHAR(32) NOT NULL DEFAULT 'text',
            ai_review_enabled BOOLEAN NOT NULL DEFAULT FALSE,
            participant_limit INTEGER,
            reminder_policy JSONB NOT NULL DEFAULT '{}'::jsonb,
            reward_id BIGINT,
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            CHECK (status IN ('draft', 'scheduled', 'active', 'finished', 'archived')),
            CHECK (participation_mode IN ('solo', 'team', 'both')),
            CHECK (submission_format IN ('url', 'text', 'file', 'mixed'))
        );

        CREATE TABLE IF NOT EXISTS challenge_entries (
            id BIGSERIAL PRIMARY KEY,
            challenge_id BIGINT NOT NULL REFERENCES challenges(id) ON DELETE CASCADE,
            mode VARCHAR(16) NOT NULL,
            status VARCHAR(32) NOT NULL DEFAULT 'active',
            joined_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            CHECK (mode IN ('solo', 'team'))
        );

        CREATE TABLE IF NOT EXISTS challenge_entry_members (
            entry_id BIGINT NOT NULL REFERENCES challenge_entries(id) ON DELETE CASCADE,
            user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            PRIMARY KEY (entry_id, user_id)
        );

        CREATE TABLE IF NOT EXISTS submissions (
            id BIGSERIAL PRIMARY KEY,
            challenge_id BIGINT NOT NULL REFERENCES challenges(id) ON DELETE CASCADE,
            entry_id BIGINT NOT NULL REFERENCES challenge_entries(id) ON DELETE CASCADE,
            submission_type VARCHAR(32) NOT NULL,
            payload TEXT NOT NULL,
            status VARCHAR(32) NOT NULL DEFAULT 'submitted',
            ai_review_json JSONB,
            submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );

        CREATE TABLE IF NOT EXISTS rewards (
            id BIGSERIAL PRIMARY KEY,
            reward_type VARCHAR(64) NOT NULL,
            title VARCHAR(255) NOT NULL,
            payload_json JSONB NOT NULL DEFAULT '{}'::jsonb,
            active BOOLEAN NOT NULL DEFAULT TRUE,
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );

        CREATE TABLE IF NOT EXISTS user_rewards (
            id BIGSERIAL PRIMARY KEY,
            reward_id BIGINT NOT NULL REFERENCES rewards(id) ON DELETE RESTRICT,
            user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            status VARCHAR(32) NOT NULL DEFAULT 'assigned',
            assigned_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            fulfilled_at TIMESTAMPTZ,
            reference VARCHAR(255),
            CHECK (status IN ('assigned', 'waiting_for_fulfillment', 'fulfilled', 'cancelled'))
        );

        CREATE TABLE IF NOT EXISTS events (
            id BIGSERIAL PRIMARY KEY,
            user_id BIGINT REFERENCES users(id) ON DELETE SET NULL,
            event_name VARCHAR(128) NOT NULL,
            payload_json JSONB NOT NULL DEFAULT '{}'::jsonb,
            occurred_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );

        CREATE TABLE IF NOT EXISTS payment_success_notifications (
            order_id BIGINT PRIMARY KEY REFERENCES payment_orders(id) ON DELETE CASCADE,
            user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            status VARCHAR(16) NOT NULL DEFAULT 'pending',
            claimed_at TIMESTAMPTZ,
            sent_at TIMESTAMPTZ,
            next_attempt_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            attempts INTEGER NOT NULL DEFAULT 0,
            last_error TEXT,
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            CHECK (status IN ('pending', 'processing', 'sent'))
        );

        CREATE TABLE IF NOT EXISTS audit_log (
            id BIGSERIAL PRIMARY KEY,
            actor_id BIGINT,
            action VARCHAR(128) NOT NULL,
            entity_type VARCHAR(64) NOT NULL,
            entity_id VARCHAR(255),
            before_json JSONB NOT NULL DEFAULT '{}'::jsonb,
            after_json JSONB NOT NULL DEFAULT '{}'::jsonb,
            reason TEXT,
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );

        CREATE TABLE IF NOT EXISTS processed_access_expirations (
            access_id BIGINT PRIMARY KEY REFERENCES user_product_access(id) ON DELETE CASCADE,
            processed_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );

        CREATE TABLE IF NOT EXISTS reactivation_marks (
            access_id BIGINT NOT NULL REFERENCES user_product_access(id) ON DELETE CASCADE,
            offset_days INTEGER NOT NULL,
            sent_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            PRIMARY KEY (access_id, offset_days)
        );

        CREATE INDEX IF NOT EXISTS idx_events_name_time ON events(event_name, occurred_at);
        CREATE INDEX IF NOT EXISTS idx_access_user_product_dates ON user_product_access(user_id, product_id, starts_at, expires_at);
        CREATE INDEX IF NOT EXISTS idx_challenges_status_dates ON challenges(status, starts_at, deadline);
    """)

    await pool.execute("""
        INSERT INTO club_system_state (user_id)
        SELECT id FROM users
        ON CONFLICT (user_id) DO NOTHING
    """)

    await pool.execute("""
        INSERT INTO club_plan_versions (tariff_id, version, subscription_term, period_days, price)
        SELECT id, 1, access_months, access_months * 30, price
        FROM product_tariffs
        WHERE slug IN ('secondary_1_month', 'secondary_3_month', 'secondary_6_month')
          AND access_months IN (1, 3, 6)
        ON CONFLICT (tariff_id, version) DO NOTHING
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
            JOIN user_product_access ON users.id = user_product_access.user_id
            WHERE user_product_access.product_id = 2
              AND user_product_access.access_type = 'bonus'
              AND user_product_access.expires_at IS NOT NULL
              AND user_product_access.expires_at::date = CURRENT_DATE + $1::int
              AND users.telegram_user_id IS NOT NULL
        """, days)
        return [dict(user) for user in users]
    users = await pool.fetch("""
        SELECT DISTINCT ON (users.id)
            users.telegram_user_id,
            user_product_access.expires_at,
            COALESCE(product_tariffs.name, 'участие в клубе') AS tariff_name,
            COALESCE(club_payment_meta.term_snapshot, product_tariffs.access_months, 1) AS subscription_term,
            COALESCE(club_payment_meta.period_days_snapshot, product_tariffs.access_months * 30, 30) AS period_days,
            COALESCE(club_payment_meta.gross_price, product_tariffs.price, 1990.00) AS gross_price,
            users.balance
        FROM users
        JOIN user_product_access ON users.id = user_product_access.user_id
        LEFT JOIN payment_orders ON payment_orders.id = user_product_access.order_id
        LEFT JOIN product_tariffs ON product_tariffs.id = payment_orders.tariff_id
        LEFT JOIN club_payment_meta ON club_payment_meta.order_id = payment_orders.id
        WHERE user_product_access.product_id = 2
          AND user_product_access.access_type IS DISTINCT FROM 'bonus'
          AND user_product_access.expires_at IS NOT NULL
          AND user_product_access.expires_at::date = CURRENT_DATE + $1::int
          AND users.telegram_user_id IS NOT NULL
        ORDER BY users.id, user_product_access.expires_at DESC
    """, days)
    result = []
    for row in users:
        item = dict(row)
        price = Decimal(item["gross_price"] or 0)
        balance = Decimal(item["balance"] or 0)
        internal = min(balance, price)
        external = price - internal
        item["text"] = (
            f"До окончания участия осталось {days} дн.\n\n"
            f"Текущий пакет: {item['subscription_term']} мес. / {item['period_days']} дней.\n"
            f"Цена пакета: {price:.2f} ₽.\n"
            f"Внутренний баланс: {balance:.2f} ₽.\n"
            f"При продлении сейчас из баланса будет использовано до {internal:.2f} ₽, "
            f"внешняя сумма — до {external:.2f} ₽.\n\n"
            "Можно выбрать срок 1, 3 или 6 месяцев."
        )
        result.append(item)
    return result

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
            new_task_file_id = await connection.fetchval("""
                SELECT file_id
                FROM tasks
                WHERE status = 0
            """)
            await connection.execute("""DELETE FROM task_answers""")
            await connection.execute("""
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
    async with pool.acquire() as connection:
        async with connection.transaction():
            result = await connection.fetchrow("""
                UPDATE users AS invited
                SET referal_id = referrer.id
                FROM users AS referrer
                WHERE invited.telegram_user_id = $2
                  AND referrer.referal_token = $1
                  AND invited.referal_id IS NULL
                  AND invited.id <> referrer.id
                RETURNING invited.id AS invited_id, referrer.id AS referrer_id
            """, token, telegram_user_id)
            if result is None:
                return False
            await _log_event_conn(connection, result["invited_id"], "referral_attributed", {"referrer_id": result["referrer_id"]})
            return True

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
        SELECT DISTINCT ON (users.id)
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
        LEFT JOIN club_system_state ON club_system_state.user_id = users.id
        JOIN products ON products.id = user_product_access.product_id
        WHERE user_product_access.product_id = 2
          AND club_system_state.blocked_at IS NULL
          AND user_product_access.starts_at <= NOW()
          AND (user_product_access.expires_at IS NULL OR user_product_access.expires_at > NOW())
        ORDER BY users.id, user_product_access.expires_at DESC NULLS FIRST
        LIMIT $1 OFFSET $2
    """, limit, offset)
    return [dict(user) for user in users]

async def create_queue_record(telegram_user_id: int):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    result = await pool.execute("""
        INSERT INTO buddy_queue (user_id)
        SELECT users.id
        FROM users
        LEFT JOIN club_system_state ON club_system_state.user_id = users.id
        WHERE users.telegram_user_id = $1
          AND club_system_state.blocked_at IS NULL
          AND EXISTS (
              SELECT 1 FROM user_product_access
              WHERE user_product_access.user_id = users.id
                AND user_product_access.product_id = 2
                AND user_product_access.starts_at <= NOW()
                AND (user_product_access.expires_at IS NULL OR user_product_access.expires_at > NOW())
          )
          AND NOT EXISTS (
              SELECT 1 FROM buddy_pairs
              WHERE buddy_pairs.first_user_id = users.id OR buddy_pairs.second_user_id = users.id
          )
        ON CONFLICT (user_id) DO NOTHING
    """, telegram_user_id)
    if result == "INSERT 0 1":
        await log_event_by_telegram_id(telegram_user_id, "buddy_queue_joined")
        return True
    return False

async def create_buddy_pairs():
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    async with pool.acquire() as connection:
        async with connection.transaction():
            users = await connection.fetch("""
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
                pair_id = await connection.fetchval("""
                    INSERT INTO buddy_pairs (first_user_id, second_user_id)
                    VALUES ($1, $2)
                    RETURNING id
                """, first_user_id, second_user_id)
                cycle_end = datetime.now(timezone.utc) + timedelta(days=30)
                await connection.execute("""
                    INSERT INTO buddy_pair_state (pair_id, cycle_start, cycle_end, status)
                    VALUES ($1, NOW(), $2, 'paired')
                """, pair_id, cycle_end)
                paired_user_ids.extend([first_user_id, second_user_id])
                notifications.extend([
                    {"telegram_user_id": users[index]["telegram_user_id"], "buddy_username": users[index + 1]["telegram_username"]},
                    {"telegram_user_id": users[index + 1]["telegram_user_id"], "buddy_username": users[index]["telegram_username"]},
                ])
                await _log_event_conn(connection, first_user_id, "buddy_matched", {"pair_id": pair_id, "cycle_end": cycle_end.isoformat()})
                await _log_event_conn(connection, second_user_id, "buddy_matched", {"pair_id": pair_id, "cycle_end": cycle_end.isoformat()})
            await connection.execute("DELETE FROM buddy_queue WHERE user_id = ANY($1::BIGINT[])", paired_user_ids)
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
                await connection.execute("""
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

async def give_club_trail_access(telegram_user_id: int, invite_link: str):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    async with pool.acquire() as connection:
        async with connection.transaction():
            user = await connection.fetchrow("SELECT id FROM users WHERE telegram_user_id = $1 FOR UPDATE", telegram_user_id)
            if user is None:
                return False
            trial_access = await connection.fetchval("""
                UPDATE users
                SET expired_trail = TRUE, invite_channel_link = $2
                WHERE id = $1 AND expired_trail = FALSE
                RETURNING id
            """, user["id"], invite_link)
            if trial_access is None:
                return False
            access = await connection.fetchrow("""
                INSERT INTO user_product_access (user_id, product_id, order_id, access_type, starts_at, expires_at)
                VALUES ($1, 2, NULL, 'bonus', NOW(), NOW() + INTERVAL '30 days')
                RETURNING id, starts_at, expires_at
            """, user["id"])
            await connection.execute("""
                INSERT INTO trial_history (user_id, access_id, started_at, ended_at)
                VALUES ($1, $2, $3, $4)
            """, user["id"], access["id"], access["starts_at"], access["expires_at"])
            await connection.execute("""
                INSERT INTO access_sources (access_id, source_type, source_reference)
                VALUES ($1, 'trial', 'club_bot')
                ON CONFLICT (access_id) DO NOTHING
            """, access["id"])
            await _log_event_conn(connection, user["id"], "trial_started", {"access_id": access["id"], "days": 30})
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
            buddy_user.telegram_username AS buddy_username,
            buddy_pair_state.cycle_start,
            buddy_pair_state.cycle_end,
            buddy_pair_state.status
        FROM users AS current_user
        JOIN buddy_pairs ON buddy_pairs.first_user_id = current_user.id OR buddy_pairs.second_user_id = current_user.id
        JOIN users AS buddy_user ON buddy_user.id = CASE
            WHEN buddy_pairs.first_user_id = current_user.id THEN buddy_pairs.second_user_id
            ELSE buddy_pairs.first_user_id
        END
        LEFT JOIN buddy_pair_state ON buddy_pair_state.pair_id = buddy_pairs.id
        WHERE current_user.telegram_user_id = $1
        LIMIT 1
    """, telegram_user_id)
    if buddy:
        return {
            "status": "paired",
            "pair_id": buddy["pair_id"],
            "buddy_name": buddy["buddy_name"],
            "buddy_telegram_user_id": buddy["buddy_telegram_user_id"],
            "buddy_username": buddy["buddy_username"],
            "cycle_start": buddy["cycle_start"],
            "cycle_end": buddy["cycle_end"],
        }
    is_in_queue = await pool.fetchval("""
        SELECT EXISTS (
            SELECT 1 FROM buddy_queue
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
            users.invite_channel_link,
            users.expired_trail AS trial_used,
            (SELECT COUNT(*) FROM users AS referred_users WHERE referred_users.referal_id = users.id) AS referrals_count,
            user_access.access_type,
            user_access.starts_at,
            user_access.expires_at,
            COALESCE(club_subscriptions.status, 'none') AS subscription_status,
            COALESCE(club_subscriptions.subscription_type, 'none') AS subscription_type,
            club_subscriptions.subscription_term,
            club_subscriptions.period_days,
            club_subscriptions.paid_until,
            club_subscriptions.next_charge_at,
            club_subscriptions.cancel_at_period_end,
            COALESCE(partners.status, FALSE) AS partner_status,
            COALESCE(partners.withdrawable_available, 0) AS withdrawable_available,
            COALESCE(partners.withdrawable_reserved, 0) AS withdrawable_reserved,
            COALESCE((SELECT SUM(amount_remaining) FROM withholdings WHERE user_id = users.id AND status = 'open'), 0) AS pending_withholding
        FROM users
        LEFT JOIN LATERAL (
            SELECT access_type, starts_at, expires_at
            FROM user_product_access
            WHERE user_product_access.user_id = users.id
              AND user_product_access.product_id = 2
              AND user_product_access.starts_at <= NOW()
              AND (user_product_access.expires_at IS NULL OR user_product_access.expires_at > NOW())
            ORDER BY user_product_access.expires_at DESC NULLS FIRST
            LIMIT 1
        ) AS user_access ON TRUE
        LEFT JOIN club_system_state ON club_system_state.user_id = users.id
        LEFT JOIN club_subscriptions ON club_subscriptions.user_id = users.id
        LEFT JOIN partners ON partners.user_id = users.id
        WHERE users.telegram_user_id = $1
    """, telegram_user_id)
    return dict(user) if user else None

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
            product_tariffs.slug AS tariff_slug,
            product_tariffs.name AS tariff_name,
            products.slug AS product_slug,
            club_payment_meta.term_snapshot AS subscription_term,
            club_payment_meta.period_days_snapshot AS period_days,
            club_payment_meta.gross_price,
            club_payment_meta.internal_amount,
            club_payment_meta.external_amount,
            club_subscriptions.paid_until
        FROM payment_orders
        JOIN users
            ON users.id = payment_orders.user_id
        JOIN product_tariffs
            ON product_tariffs.id = payment_orders.tariff_id
        JOIN products
            ON products.id = product_tariffs.product_id
        LEFT JOIN club_payment_meta
            ON club_payment_meta.order_id = payment_orders.id
        LEFT JOIN club_subscriptions
            ON club_subscriptions.user_id = payment_orders.user_id
        WHERE payment_orders.id = $1
    """, order_id)
    return dict(row) if row else None
 
async def save_moodle_user(user_id: int, moodle_user_id: int, moodle_username: str | None,) -> None:
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")

    # В старых production-БД таблица users могла быть создана до появления
    # moodle_user_id/moodle_username. CREATE TABLE IF NOT EXISTS существующую
    # таблицу не расширяет. Не меняем существующую схему БД автоматически:
    # если колонок нет, Moodle enrolment уже выполнен и просто не сохраняем
    # локальный Moodle id.
    has_moodle_columns = await pool.fetchval("""
        SELECT COUNT(*) = 2
        FROM information_schema.columns
        WHERE table_schema = current_schema()
          AND table_name = 'users'
          AND column_name IN ('moodle_user_id', 'moodle_username')
    """)
    if not has_moodle_columns:
        return

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

async def _confirm_legacy_payment_order(order_id: int, amount: str) -> bool:
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

async def confirm_payment_order(order_id: int, amount: str) -> bool:
    result = await confirm_payment_order_result(order_id, amount)
    return result["confirmed"]


async def confirm_payment_order_result(order_id: int, amount: str) -> dict:
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    has_club_meta = await pool.fetchval(
        "SELECT EXISTS (SELECT 1 FROM club_payment_meta WHERE order_id = $1)",
        order_id,
    )
    if has_club_meta:
        confirmed, newly_applied = await _confirm_club_payment_order_result(order_id, amount)
        return {
            "confirmed": confirmed,
            "club_payment": True,
            "newly_applied": newly_applied,
        }
    confirmed = await _confirm_legacy_payment_order(order_id, amount)
    return {
        "confirmed": confirmed,
        "club_payment": False,
        "newly_applied": confirmed,
    }

async def if_paid_access(telegram_user_id: int) -> bool:
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    row = await pool.fetchrow("""
        SELECT user_product_access.user_id
        FROM user_product_access
        JOIN users ON users.id = user_product_access.user_id
        LEFT JOIN club_system_state ON club_system_state.user_id = users.id
        WHERE users.telegram_user_id = $1
        AND club_system_state.blocked_at IS NULL
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
        LEFT JOIN club_system_state ON club_system_state.user_id = users.id
        WHERE users.telegram_user_id = $1 AND club_system_state.blocked_at IS NULL AND user_product_access.product_id = 2
        AND user_product_access.starts_at <= NOW()
        AND (user_product_access.expires_at IS NULL OR user_product_access.expires_at > NOW())
        LIMIT 1
    """, telegram_user_id)
    return user is not None

# ------------------------------
# v3.1 additions
# ------------------------------

def _money(value) -> Decimal:
    return Decimal(str(value or 0)).quantize(Decimal("0.01"), rounding=ROUND_HALF_UP)


def _json_payload(payload: dict | None) -> str:
    return json.dumps(payload or {}, ensure_ascii=False, default=str)


async def _log_event_conn(connection, user_id: int | None, event_name: str, payload: dict | None = None):
    await connection.execute(
        """
        INSERT INTO events (user_id, event_name, payload_json)
        VALUES ($1, $2, $3::jsonb)
        """,
        user_id,
        event_name,
        _json_payload(payload),
    )


async def log_event_by_telegram_id(telegram_user_id: int, event_name: str, payload: dict | None = None):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    user_id = await pool.fetchval("SELECT id FROM users WHERE telegram_user_id = $1", telegram_user_id)
    if user_id is None:
        return False
    await pool.execute(
        "INSERT INTO events (user_id, event_name, payload_json) VALUES ($1, $2, $3::jsonb)",
        user_id,
        event_name,
        _json_payload(payload),
    )
    return True


async def record_acquisition_touchpoint(
    telegram_user_id: int,
    source: str | None = None,
    campaign: str | None = None,
    payload: dict | None = None,
    referrer_link_token: str | None = None,
):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    user_id = await pool.fetchval("SELECT id FROM users WHERE telegram_user_id = $1", telegram_user_id)
    if user_id is None:
        return False
    await pool.execute(
        """
        INSERT INTO acquisition_touchpoints (user_id, source, campaign, payload_json, referrer_link_token)
        VALUES ($1, $2, $3, $4::jsonb, $5)
        """,
        user_id,
        source,
        campaign,
        _json_payload(payload),
        referrer_link_token,
    )
    await log_event_by_telegram_id(telegram_user_id, "funnel_bot_started", {"source": source, "campaign": campaign})
    return True


async def get_club_state_db(telegram_user_id: int):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    row = await pool.fetchrow(
        """
        SELECT
            users.id AS user_id,
            users.expired_trail AS trial_used,
            users.balance,
            club_system_state.blocked_at,
            (club_system_state.blocked_at IS NULL) AND EXISTS (
                SELECT 1 FROM user_product_access
                WHERE user_product_access.user_id = users.id
                  AND user_product_access.product_id = 2
                  AND user_product_access.starts_at <= NOW()
                  AND (user_product_access.expires_at IS NULL OR user_product_access.expires_at > NOW())
            ) AS has_access,
            COALESCE(club_subscriptions.status, 'none') AS subscription_status,
            COALESCE(club_subscriptions.subscription_type, 'none') AS subscription_type,
            club_subscriptions.subscription_term,
            club_subscriptions.period_days,
            club_subscriptions.paid_until,
            club_subscriptions.next_charge_at,
            club_subscriptions.cancel_at_period_end,
            club_subscriptions.pending_plan_version_id,
            COALESCE(partners.status, FALSE) AS partner_status,
            COALESCE(partners.withdrawable_available, 0) AS withdrawable_available,
            COALESCE(partners.withdrawable_reserved, 0) AS withdrawable_reserved,
            COALESCE((SELECT SUM(amount_remaining) FROM withholdings WHERE user_id = users.id AND status = 'open'), 0) AS pending_withholding
        FROM users
        LEFT JOIN club_system_state ON club_system_state.user_id = users.id
        LEFT JOIN club_subscriptions ON club_subscriptions.user_id = users.id
        LEFT JOIN partners ON partners.user_id = users.id
        WHERE users.telegram_user_id = $1
        """,
        telegram_user_id,
    )
    return dict(row) if row else None


async def get_club_plans_db():
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    rows = await pool.fetch(
        """
        SELECT DISTINCT ON (product_tariffs.id)
            product_tariffs.id AS tariff_id,
            product_tariffs.slug,
            product_tariffs.name,
            club_plan_versions.id AS plan_version_id,
            club_plan_versions.version,
            club_plan_versions.subscription_term,
            club_plan_versions.period_days,
            club_plan_versions.price,
            club_plan_versions.currency
        FROM product_tariffs
        JOIN club_plan_versions ON club_plan_versions.tariff_id = product_tariffs.id
        WHERE product_tariffs.slug IN ('secondary_1_month', 'secondary_3_month', 'secondary_6_month')
          AND product_tariffs.is_active = TRUE
          AND club_plan_versions.available_for_checkout = TRUE
        ORDER BY product_tariffs.id, club_plan_versions.version DESC
        """
    )
    base = None
    for row in rows:
        if row["subscription_term"] == 1:
            base = _money(row["price"])
            break
    base = base or Decimal("1990.00")
    result = []
    for row in sorted(rows, key=lambda item: item["subscription_term"]):
        item = dict(row)
        price = _money(item["price"])
        comparison = base * item["subscription_term"]
        saving = max(Decimal("0.00"), comparison - price)
        percent = (saving / comparison * Decimal("100")) if comparison else Decimal("0")
        item["saving"] = saving
        item["saving_percent"] = percent.quantize(Decimal("0.01"), rounding=ROUND_HALF_UP)
        item["average_30_days"] = (price / item["subscription_term"]).quantize(Decimal("0.01"), rounding=ROUND_HALF_UP)
        result.append(item)
    return result


async def get_club_checkout_preview_db(telegram_user_id: int, tariff_slug: str):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    user = await pool.fetchrow("SELECT id, balance FROM users WHERE telegram_user_id = $1", telegram_user_id)
    if user is None:
        return None
    lifetime = await pool.fetchval(
        """
        SELECT EXISTS (
            SELECT 1 FROM user_product_access
            LEFT JOIN access_sources ON access_sources.access_id = user_product_access.id
            WHERE user_product_access.user_id = $1
              AND user_product_access.product_id = 2
              AND user_product_access.expires_at IS NULL
              AND user_product_access.starts_at <= NOW()
              AND COALESCE(access_sources.source_type, '') = 'lifetime'
        )
        """,
        user["id"],
    )
    if lifetime:
        return {"error": "lifetime_access"}
    plan = await pool.fetchrow(
        """
        SELECT DISTINCT ON (product_tariffs.id)
            product_tariffs.id AS tariff_id,
            product_tariffs.slug,
            product_tariffs.name,
            club_plan_versions.id AS plan_version_id,
            club_plan_versions.version,
            club_plan_versions.subscription_term,
            club_plan_versions.period_days,
            club_plan_versions.price,
            club_plan_versions.currency
        FROM product_tariffs
        JOIN club_plan_versions ON club_plan_versions.tariff_id = product_tariffs.id
        WHERE product_tariffs.slug = $1
          AND product_tariffs.is_active = TRUE
          AND club_plan_versions.available_for_checkout = TRUE
        ORDER BY product_tariffs.id, club_plan_versions.version DESC
        """,
        tariff_slug,
    )
    if plan is None:
        return None
    latest_end = await pool.fetchval(
        """
        SELECT MAX(expires_at)
        FROM user_product_access
        WHERE user_id = $1
          AND product_id = 2
          AND expires_at IS NOT NULL
          AND expires_at > NOW()
        """,
        user["id"],
    )
    now = datetime.now(timezone.utc)
    period_start = max(now, latest_end) if latest_end else now
    period_end = period_start + timedelta(days=plan["period_days"])
    price = _money(plan["price"])
    balance = _money(user["balance"])
    internal = min(balance, price)
    external = price - internal
    return {
        "tariff_slug": plan["slug"],
        "tariff_name": plan["name"],
        "plan_version_id": plan["plan_version_id"],
        "version": plan["version"],
        "subscription_term": plan["subscription_term"],
        "period_days": plan["period_days"],
        "gross_price": price,
        "available_internal_balance": balance,
        "internal_amount": internal,
        "external_amount": external,
        "period_start": period_start,
        "period_end": period_end,
        "currency": plan["currency"],
        "recurring_provider_ready": False,
    }


async def create_club_checkout_db(telegram_user_id: int, tariff_slug: str, recurring_requested: bool = False):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    async with pool.acquire() as connection:
        async with connection.transaction():
            user = await connection.fetchrow(
                "SELECT id, balance FROM users WHERE telegram_user_id = $1 FOR UPDATE",
                telegram_user_id,
            )
            if user is None:
                return None
            existing_pending = await connection.fetchval(
                """
                SELECT payment_orders.id
                FROM payment_orders
                JOIN club_payment_meta ON club_payment_meta.order_id = payment_orders.id
                WHERE payment_orders.user_id = $1 AND payment_orders.status = 'pending'
                ORDER BY payment_orders.created_at DESC
                LIMIT 1
                """,
                user["id"],
            )
            if existing_pending:
                return {"error": "pending_payment_exists", "order_id": existing_pending}
            plan = await connection.fetchrow(
                """
                SELECT DISTINCT ON (product_tariffs.id)
                    product_tariffs.id AS tariff_id,
                    product_tariffs.slug,
                    product_tariffs.name,
                    club_plan_versions.id AS plan_version_id,
                    club_plan_versions.version,
                    club_plan_versions.subscription_term,
                    club_plan_versions.period_days,
                    club_plan_versions.price,
                    club_plan_versions.currency
                FROM product_tariffs
                JOIN club_plan_versions ON club_plan_versions.tariff_id = product_tariffs.id
                WHERE product_tariffs.slug = $1
                  AND product_tariffs.is_active = TRUE
                  AND club_plan_versions.available_for_checkout = TRUE
                ORDER BY product_tariffs.id, club_plan_versions.version DESC
                """,
                tariff_slug,
            )
            if plan is None:
                return None
            latest_end = await connection.fetchval(
                """
                SELECT MAX(expires_at)
                FROM user_product_access
                WHERE user_id = $1 AND product_id = 2
                  AND expires_at IS NOT NULL AND expires_at > NOW()
                """,
                user["id"],
            )
            now = datetime.now(timezone.utc)
            period_start = max(now, latest_end) if latest_end else now
            period_end = period_start + timedelta(days=plan["period_days"])
            gross_price = _money(plan["price"])
            available = _money(user["balance"])
            internal_amount = min(available, gross_price)
            external_amount = gross_price - internal_amount
            consent_id = None
            if recurring_requested:
                consent_id = await connection.fetchval(
                    """
                    INSERT INTO subscription_consents (user_id, plan_version_id, recurring_requested, source)
                    VALUES ($1, $2, TRUE, 'club_bot')
                    RETURNING id
                    """,
                    user["id"],
                    plan["plan_version_id"],
                )
            order_id = await connection.fetchval(
                """
                INSERT INTO payment_orders (user_id, tariff_id, amount, status)
                VALUES ($1, $2, $3, 'pending')
                RETURNING id
                """,
                user["id"],
                plan["tariff_id"],
                external_amount,
            )
            await connection.execute(
                """
                INSERT INTO club_payment_meta (
                    order_id, billing_cycle_id, plan_version_id, term_snapshot, period_days_snapshot,
                    gross_price, internal_amount, external_amount, period_start, period_end, consent_id
                ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
                """,
                order_id,
                uuid.uuid4(),
                plan["plan_version_id"],
                plan["subscription_term"],
                plan["period_days"],
                gross_price,
                internal_amount,
                external_amount,
                period_start,
                period_end,
                consent_id,
            )
            if internal_amount > 0:
                await connection.execute("UPDATE users SET balance = balance - $2 WHERE id = $1", user["id"], internal_amount)
                await connection.execute(
                    """
                    INSERT INTO balance_reservations (order_id, user_id, amount)
                    VALUES ($1, $2, $3)
                    """,
                    order_id,
                    user["id"],
                    internal_amount,
                )
                await connection.execute(
                    """
                    INSERT INTO ledger_entries (user_id, account_type, entry_type, amount, bucket, reference_type, reference_id)
                    VALUES ($1, 'internal', 'subscription_reserve', $2, 'reserved', 'payment', $3)
                    """,
                    user["id"],
                    internal_amount,
                    str(order_id),
                )
            await _log_event_conn(
                connection,
                user["id"],
                "checkout_started",
                {
                    "order_id": order_id,
                    "plan_version_id": plan["plan_version_id"],
                    "subscription_term": plan["subscription_term"],
                    "period_days": plan["period_days"],
                    "gross_price": str(gross_price),
                    "internal_amount": str(internal_amount),
                    "external_amount": str(external_amount),
                },
            )
    if external_amount == 0:
        await confirm_club_payment_order(order_id, "0.00")
    return {
        "order_id": order_id,
        "tariff_slug": plan["slug"],
        "tariff_name": plan["name"],
        "subscription_term": plan["subscription_term"],
        "period_days": plan["period_days"],
        "gross_price": gross_price,
        "internal_amount": internal_amount,
        "external_amount": external_amount,
        "period_start": period_start,
        "period_end": period_end,
        "paid_with_balance": external_amount == 0,
        "recurring_provider_ready": False,
    }


async def _apply_withholding_conn(connection, user_id: int, account_type: str, amount: Decimal, reference_id: str):
    remaining = _money(amount)
    rows = await connection.fetch(
        """
        SELECT id, amount_remaining
        FROM withholdings
        WHERE user_id = $1 AND account_type = $2 AND status = 'open' AND amount_remaining > 0
        ORDER BY id
        FOR UPDATE
        """,
        user_id,
        account_type,
    )
    for row in rows:
        if remaining <= 0:
            break
        offset = min(remaining, _money(row["amount_remaining"]))
        new_amount = _money(row["amount_remaining"]) - offset
        await connection.execute(
            "UPDATE withholdings SET amount_remaining = $2, status = CASE WHEN $2 = 0 THEN 'closed' ELSE 'open' END, closed_at = CASE WHEN $2 = 0 THEN NOW() ELSE NULL END WHERE id = $1",
            row["id"],
            new_amount,
        )
        await connection.execute(
            """
            INSERT INTO ledger_entries (user_id, account_type, entry_type, amount, bucket, reference_type, reference_id)
            VALUES ($1, 'withholding', 'withholding_offset', $2, 'available', 'referral', $3)
            """,
            user_id,
            offset,
            reference_id,
        )
        remaining -= offset
    return remaining


async def _accrue_referral_conn(connection, order_id: int, referred_user_id: int, external_amount: Decimal):
    if external_amount <= 0:
        return Decimal("0.00")
    referrer = await connection.fetchrow("SELECT referal_id FROM users WHERE id = $1", referred_user_id)
    if not referrer or not referrer["referal_id"]:
        return Decimal("0.00")
    referrer_id = referrer["referal_id"]
    existing = await connection.fetchval("SELECT id FROM referral_accruals WHERE payment_order_id = $1", order_id)
    if existing:
        return Decimal("0.00")
    # Клубная реферальная программа: стандартная ставка 10% от суммы,
    # реально оплаченной через Robokassa после применения внутреннего баланса.
    # Если администратор ранее явно задал индивидуальную ставку, она остаётся
    # приоритетной. Начисление в любом случае идёт на внутренний баланс.
    custom_rate = await connection.fetchval(
        """
        SELECT rate FROM referral_rates
        WHERE user_id = $1
          AND effective_from <= NOW()
          AND (effective_to IS NULL OR effective_to > NOW())
        ORDER BY effective_from DESC
        LIMIT 1
        """,
        referrer_id,
    )
    rate = Decimal(str(custom_rate)) if custom_rate is not None else Decimal("0.10")
    reward = (external_amount * rate).quantize(Decimal("0.01"), rounding=ROUND_HALF_UP)
    account_type = "internal"
    credit = await _apply_withholding_conn(connection, referrer_id, account_type, reward, str(order_id))
    if credit > 0:
        await connection.execute("UPDATE users SET balance = balance + $2 WHERE id = $1", referrer_id, credit)
        await connection.execute(
            """
            INSERT INTO ledger_entries (user_id, account_type, entry_type, amount, bucket, reference_type, reference_id)
            VALUES ($1, 'internal', 'referral_accrual', $2, 'available', 'payment', $3)
            """,
            referrer_id,
            credit,
            str(order_id),
        )
    await connection.execute(
        """
        INSERT INTO referral_accruals (
            payment_order_id, referrer_user_id, referred_user_id, rate_snapshot,
            external_amount, reward_amount, account_type
        ) VALUES ($1, $2, $3, $4, $5, $6, $7)
        """,
        order_id,
        referrer_id,
        referred_user_id,
        rate,
        external_amount,
        reward,
        account_type,
    )
    await _log_event_conn(connection, referrer_id, "referral_accrual", {"payment_id": order_id, "amount": str(reward)})
    return reward

async def _confirm_club_payment_order_result(order_id: int, amount: str) -> tuple[bool, bool]:
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    async with pool.acquire() as connection:
        async with connection.transaction():
            row = await connection.fetchrow(
                """
                SELECT
                    payment_orders.id,
                    payment_orders.user_id,
                    payment_orders.amount,
                    payment_orders.status,
                    club_payment_meta.billing_cycle_id,
                    club_payment_meta.plan_version_id,
                    club_payment_meta.term_snapshot,
                    club_payment_meta.period_days_snapshot,
                    club_payment_meta.gross_price,
                    club_payment_meta.internal_amount,
                    club_payment_meta.external_amount,
                    club_payment_meta.period_start,
                    club_payment_meta.period_end,
                    club_payment_meta.consent_id,
                    club_payment_meta.success_applied
                FROM payment_orders
                JOIN club_payment_meta ON club_payment_meta.order_id = payment_orders.id
                WHERE payment_orders.id = $1
                FOR UPDATE OF payment_orders, club_payment_meta
                """,
                order_id,
            )
            if row is None or _money(row["external_amount"]) != _money(amount):
                return False, False
            if row["status"] == "paid" and row["success_applied"]:
                return True, False
            await connection.execute(
                "UPDATE payment_orders SET status = 'paid', paid_at = COALESCE(paid_at, NOW()) WHERE id = $1",
                order_id,
            )
            reservation = await connection.fetchrow(
                "SELECT id, amount, status FROM balance_reservations WHERE order_id = $1 FOR UPDATE",
                order_id,
            )
            if reservation and reservation["status"] == "reserved":
                await connection.execute(
                    "UPDATE balance_reservations SET status = 'committed', closed_at = NOW() WHERE id = $1",
                    reservation["id"],
                )
                await connection.execute(
                    """
                    INSERT INTO ledger_entries (user_id, account_type, entry_type, amount, bucket, reference_type, reference_id)
                    VALUES ($1, 'internal', 'subscription_commit', $2, 'spent', 'payment', $3)
                    """,
                    row["user_id"],
                    reservation["amount"],
                    str(order_id),
                )
            active_access = await connection.fetchrow(
                """
                SELECT id, expires_at, access_type
                FROM user_product_access
                WHERE user_id = $1
                  AND product_id = 2
                  AND starts_at <= NOW()
                  AND expires_at IS NOT NULL
                  AND expires_at > NOW()
                ORDER BY expires_at DESC
                LIMIT 1
                FOR UPDATE
                """,
                row["user_id"],
            )
            if active_access is not None:
                access_id = active_access["id"]
                actual_period_end = await connection.fetchval(
                    """
                    UPDATE user_product_access
                    SET expires_at = expires_at + ($2::INTEGER * INTERVAL '1 day'),
                        access_type = 'purchase',
                        order_id = $3
                    WHERE id = $1
                    RETURNING expires_at
                    """,
                    access_id,
                    row["period_days_snapshot"],
                    order_id,
                )
            else:
                access_id = await connection.fetchval(
                    """
                    INSERT INTO user_product_access (
                        user_id, product_id, order_id, access_type, starts_at, expires_at, recurring_enabled
                    )
                    VALUES ($1, 2, $2, 'purchase', $3, $4, FALSE)
                    RETURNING id
                    """,
                    row["user_id"],
                    order_id,
                    row["period_start"],
                    row["period_end"],
                )
                actual_period_end = row["period_end"]
            await connection.execute(
                """
                INSERT INTO access_sources (access_id, source_type, source_reference)
                VALUES ($1, 'subscription', $2)
                ON CONFLICT (access_id) DO UPDATE SET
                    source_type = EXCLUDED.source_type,
                    source_reference = EXCLUDED.source_reference
                """,
                access_id,
                str(order_id),
            )
            # Robokassa recurring/token flow is intentionally not faked. Until a provider method is
            # stored, successful checkout remains manual and next_charge_at is not executable.
            await connection.execute(
                """
                INSERT INTO club_subscriptions (
                    user_id, subscription_type, status, plan_version_id, renewal_plan_version_id,
                    subscription_term, period_days, paid_until, next_charge_at,
                    cancel_at_period_end, consent_id, updated_at
                ) VALUES ($1, 'manual', 'active', $2, $2, $3, $4, $5, NULL, FALSE, $6, NOW())
                ON CONFLICT (user_id) DO UPDATE SET
                    subscription_type = 'manual',
                    status = 'active',
                    plan_version_id = EXCLUDED.plan_version_id,
                    renewal_plan_version_id = EXCLUDED.renewal_plan_version_id,
                    pending_plan_version_id = NULL,
                    subscription_term = EXCLUDED.subscription_term,
                    period_days = EXCLUDED.period_days,
                    paid_until = EXCLUDED.paid_until,
                    next_charge_at = NULL,
                    cancel_at_period_end = FALSE,
                    consent_id = EXCLUDED.consent_id,
                    schedule_version = club_subscriptions.schedule_version + 1,
                    updated_at = NOW()
                """,
                row["user_id"],
                row["plan_version_id"],
                row["term_snapshot"],
                row["period_days_snapshot"],
                actual_period_end,
                row["consent_id"],
            )
            await _accrue_referral_conn(
                connection,
                order_id,
                row["user_id"],
                _money(row["external_amount"]),
            )
            await connection.execute(
                "UPDATE club_payment_meta SET success_applied = TRUE WHERE order_id = $1",
                order_id,
            )
            await connection.execute(
                "UPDATE users SET invite_channel_link = NULL WHERE id = $1",
                row["user_id"],
            )
            await connection.execute(
                """
                INSERT INTO payment_success_notifications (order_id, user_id)
                VALUES ($1, $2)
                ON CONFLICT (order_id) DO NOTHING
                """,
                order_id,
                row["user_id"],
            )
            await _log_event_conn(
                connection,
                row["user_id"],
                "payment_succeeded",
                {
                    "payment_id": order_id,
                    "billing_cycle_id": str(row["billing_cycle_id"]),
                    "plan_version_id": row["plan_version_id"],
                    "subscription_term": row["term_snapshot"],
                    "period_days": row["period_days_snapshot"],
                    "gross_price": str(row["gross_price"]),
                    "internal_amount": str(row["internal_amount"]),
                    "external_amount": str(row["external_amount"]),
                    "access_id": access_id,
                    "access_expires_at": actual_period_end,
                },
            )
            return True, True

async def queue_payment_success_notification_db(order_id: int) -> bool:
    """Create one durable notification record for a successfully applied club payment."""
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")

    row = await pool.fetchrow(
        """
        INSERT INTO payment_success_notifications (order_id, user_id, status, next_attempt_at)
        SELECT payment_orders.id, payment_orders.user_id, 'pending', NOW()
        FROM payment_orders
        JOIN club_payment_meta
            ON club_payment_meta.order_id = payment_orders.id
        JOIN product_tariffs
            ON product_tariffs.id = payment_orders.tariff_id
        JOIN products
            ON products.id = product_tariffs.product_id
        WHERE payment_orders.id = $1
          AND payment_orders.status = 'paid'
          AND club_payment_meta.success_applied = TRUE
          AND products.slug = 'secondary_product'
        ON CONFLICT (order_id) DO NOTHING
        RETURNING order_id
        """,
        order_id,
    )

    if row is not None:
        return True

    return bool(await pool.fetchval(
        "SELECT EXISTS (SELECT 1 FROM payment_success_notifications WHERE order_id = $1)",
        order_id,
    ))

async def save_payment_success_invite_link_db(order_id: int, invite_link: str) -> str | None:
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    async with pool.acquire() as connection:
        async with connection.transaction():
            row = await connection.fetchrow(
                """
                SELECT
                    payment_orders.user_id,
                    payment_orders.status,
                    club_payment_meta.success_applied,
                    users.invite_channel_link
                FROM payment_orders
                JOIN club_payment_meta ON club_payment_meta.order_id = payment_orders.id
                JOIN users ON users.id = payment_orders.user_id
                JOIN payment_success_notifications ON payment_success_notifications.order_id = payment_orders.id
                WHERE payment_orders.id = $1
                  AND payment_success_notifications.status = 'processing'
                FOR UPDATE OF users, payment_success_notifications
                """,
                order_id,
            )
            if row is None:
                return None
            if row["status"] != "paid" or not row["success_applied"]:
                return None
            if row["invite_channel_link"]:
                return row["invite_channel_link"]
            await connection.execute(
                "UPDATE users SET invite_channel_link = $2 WHERE id = $1",
                row["user_id"],
                invite_link,
            )
            return invite_link

async def get_pending_payment_success_notifications_db(limit: int = 20) -> list[dict]:
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    safe_limit = max(1, min(int(limit), 100))
    async with pool.acquire() as connection:
        async with connection.transaction():
            claimed = await connection.fetch(
                """
                WITH candidates AS (
                    SELECT notification.order_id
                    FROM payment_success_notifications AS notification
                    WHERE notification.status = 'pending'
                      AND notification.next_attempt_at <= NOW()
                    ORDER BY notification.created_at, notification.order_id
                    FOR UPDATE SKIP LOCKED
                    LIMIT $1
                )
                UPDATE payment_success_notifications AS notification
                SET status = 'processing',
                    claimed_at = NOW(),
                    attempts = notification.attempts + 1,
                    updated_at = NOW()
                FROM candidates
                WHERE notification.order_id = candidates.order_id
                RETURNING notification.order_id
                """,
                safe_limit,
            )
            order_ids = [row["order_id"] for row in claimed]
            if not order_ids:
                return []
            rows = await connection.fetch(
                """
                SELECT
                    payment_orders.id AS order_id,
                    users.telegram_user_id,
                    users.invite_channel_link,
                    product_tariffs.name AS tariff_name,
                    club_payment_meta.term_snapshot AS subscription_term,
                    club_payment_meta.period_days_snapshot AS period_days,
                    club_payment_meta.gross_price,
                    club_payment_meta.internal_amount,
                    club_payment_meta.external_amount,
                    club_subscriptions.paid_until,
                    payment_orders.paid_at
                FROM payment_orders
                JOIN users
                    ON users.id = payment_orders.user_id
                JOIN product_tariffs
                    ON product_tariffs.id = payment_orders.tariff_id
                JOIN club_payment_meta
                    ON club_payment_meta.order_id = payment_orders.id
                LEFT JOIN club_subscriptions
                    ON club_subscriptions.user_id = payment_orders.user_id
                WHERE payment_orders.id = ANY($1::BIGINT[])
                  AND users.telegram_user_id IS NOT NULL
                ORDER BY payment_orders.id
                """,
                order_ids,
            )
            found_ids = {row["order_id"] for row in rows}
            missing_ids = [order_id for order_id in order_ids if order_id not in found_ids]
            if missing_ids:
                await connection.execute(
                    """
                    UPDATE payment_success_notifications
                    SET status = 'pending',
                        claimed_at = NULL,
                        next_attempt_at = NOW() + INTERVAL '5 minutes',
                        last_error = 'notification details not found',
                        updated_at = NOW()
                    WHERE order_id = ANY($1::BIGINT[])
                    """,
                    missing_ids,
                )
            return [dict(row) for row in rows]

async def mark_payment_success_notification_sent_db(order_id: int) -> bool:
    """Finish a claimed notification after Telegram accepted the message."""
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")

    row = await pool.fetchrow(
        """
        UPDATE payment_success_notifications
        SET status = 'sent',
            sent_at = COALESCE(sent_at, NOW()),
            claimed_at = NULL,
            last_error = NULL,
            updated_at = NOW()
        WHERE order_id = $1
          AND status IN ('processing', 'sent')
        RETURNING order_id
        """,
        order_id,
    )
    return row is not None


async def fail_payment_success_notification_db(order_id: int, error: str | None = None) -> bool:
    """Return a claimed notification to pending after a Telegram send failure."""
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")

    row = await pool.fetchrow(
        """
        UPDATE payment_success_notifications
        SET status = 'pending',
            claimed_at = NULL,
            next_attempt_at = NOW() + INTERVAL '1 minute',
            last_error = LEFT($2, 2000),
            updated_at = NOW()
        WHERE order_id = $1
          AND status = 'processing'
        RETURNING order_id
        """,
        order_id,
        str(error or "telegram send failed"),
    )
    return row is not None


async def release_stuck_payment_success_notifications_db() -> int:
    """Recover notifications left in processing by a crashed Club Bot."""
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")

    result = await pool.execute(
        """
        UPDATE payment_success_notifications
        SET status = 'pending',
            claimed_at = NULL,
            next_attempt_at = NOW(),
            last_error = COALESCE(last_error, 'processing lease expired'),
            updated_at = NOW()
        WHERE status = 'processing'
          AND claimed_at < NOW() - INTERVAL '15 minutes'
        """
    )
    try:
        return int(result.rsplit(' ', 1)[-1])
    except (ValueError, IndexError):
        return 0


async def confirm_club_payment_order(order_id: int, amount: str) -> bool:
    confirmed, _ = await _confirm_club_payment_order_result(order_id, amount)
    return confirmed


async def release_failed_club_payment(order_id: int):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    async with pool.acquire() as connection:
        async with connection.transaction():
            order = await connection.fetchrow("SELECT user_id, status FROM payment_orders WHERE id = $1 FOR UPDATE", order_id)
            if not order or order["status"] == "paid":
                return False
            reservation = await connection.fetchrow("SELECT id, amount, status FROM balance_reservations WHERE order_id = $1 FOR UPDATE", order_id)
            if reservation and reservation["status"] == "reserved":
                await connection.execute("UPDATE users SET balance = balance + $2 WHERE id = $1", order["user_id"], reservation["amount"])
                await connection.execute("UPDATE balance_reservations SET status = 'released', closed_at = NOW() WHERE id = $1", reservation["id"])
                await connection.execute(
                    """
                    INSERT INTO ledger_entries (user_id, account_type, entry_type, amount, bucket, reference_type, reference_id)
                    VALUES ($1, 'internal', 'subscription_release', $2, 'available', 'payment', $3)
                    """,
                    order["user_id"],
                    reservation["amount"],
                    str(order_id),
                )
            await connection.execute("UPDATE payment_orders SET status = 'failed' WHERE id = $1", order_id)
            await _log_event_conn(connection, order["user_id"], "payment_failed", {"payment_id": order_id})
            return True


async def cancel_club_recurring_db(telegram_user_id: int):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    async with pool.acquire() as connection:
        async with connection.transaction():
            user_id = await connection.fetchval("SELECT id FROM users WHERE telegram_user_id = $1", telegram_user_id)
            if user_id is None:
                return False
            row = await connection.fetchrow("SELECT * FROM club_subscriptions WHERE user_id = $1 FOR UPDATE", user_id)
            if row is None:
                return False
            await connection.execute(
                """
                UPDATE club_subscriptions
                SET cancel_at_period_end = TRUE,
                    next_charge_at = NULL,
                    status = CASE WHEN status = 'active' THEN 'cancel_at_period_end' ELSE status END,
                    schedule_version = schedule_version + 1,
                    updated_at = NOW()
                WHERE user_id = $1
                """,
                user_id,
            )
            if row["consent_id"]:
                await connection.execute("UPDATE subscription_consents SET revoked_at = NOW() WHERE id = $1 AND revoked_at IS NULL", row["consent_id"])
            await _log_event_conn(connection, user_id, "cancel_at_period_end", {})
            return True


async def change_future_plan_db(telegram_user_id: int, tariff_slug: str):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    plan = await pool.fetchrow(
        """
        SELECT club_plan_versions.id, club_plan_versions.subscription_term, club_plan_versions.period_days, club_plan_versions.price
        FROM product_tariffs
        JOIN club_plan_versions ON club_plan_versions.tariff_id = product_tariffs.id
        WHERE product_tariffs.slug = $1 AND club_plan_versions.available_for_checkout = TRUE
        ORDER BY club_plan_versions.version DESC LIMIT 1
        """,
        tariff_slug,
    )
    if plan is None:
        return False
    user_id = await pool.fetchval("SELECT id FROM users WHERE telegram_user_id = $1", telegram_user_id)
    if user_id is None:
        return False
    updated = await pool.fetchval(
        """
        UPDATE club_subscriptions
        SET pending_plan_version_id = $2, schedule_version = schedule_version + 1, updated_at = NOW()
        WHERE user_id = $1
        RETURNING id
        """,
        user_id,
        plan["id"],
    )
    if updated:
        await log_event_by_telegram_id(telegram_user_id, "renewal_plan_changed", {"plan_version_id": plan["id"]})
    return updated is not None


async def buddy_decision_db(telegram_user_id: int, decision: str):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    if decision not in {"keep", "new", "pause"}:
        return False
    async with pool.acquire() as connection:
        async with connection.transaction():
            row = await connection.fetchrow(
                """
                SELECT users.id AS user_id, buddy_pairs.id AS pair_id, buddy_pair_state.cycle_end
                FROM users
                JOIN buddy_pairs ON buddy_pairs.first_user_id = users.id OR buddy_pairs.second_user_id = users.id
                JOIN buddy_pair_state ON buddy_pair_state.pair_id = buddy_pairs.id
                WHERE users.telegram_user_id = $1
                FOR UPDATE OF buddy_pair_state
                """,
                telegram_user_id,
            )
            if row is None:
                return False
            await connection.execute(
                """
                INSERT INTO buddy_decisions (pair_id, user_id, cycle_end, decision)
                VALUES ($1, $2, $3, $4)
                ON CONFLICT (pair_id, user_id, cycle_end) DO UPDATE
                SET decision = EXCLUDED.decision, decided_at = NOW()
                """,
                row["pair_id"],
                row["user_id"],
                row["cycle_end"],
                decision,
            )
            await _log_event_conn(connection, row["user_id"], "buddy_decision", {"pair_id": row["pair_id"], "decision": decision})
            return True


async def report_buddy_nonresponse_db(telegram_user_id: int):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    row = await pool.fetchrow(
        """
        SELECT users.id AS user_id, buddy_pairs.id AS pair_id
        FROM users
        JOIN buddy_pairs ON buddy_pairs.first_user_id = users.id OR buddy_pairs.second_user_id = users.id
        WHERE users.telegram_user_id = $1
        """,
        telegram_user_id,
    )
    if row is None:
        return False
    await pool.execute(
        """
        INSERT INTO buddy_nonresponse_reports (pair_id, reporter_user_id)
        VALUES ($1, $2)
        ON CONFLICT (pair_id, reporter_user_id) DO UPDATE SET reported_at = NOW(), processed_at = NULL
        """,
        row["pair_id"],
        row["user_id"],
    )
    await log_event_by_telegram_id(telegram_user_id, "buddy_nonresponse", {"pair_id": row["pair_id"]})
    return True


async def _archive_buddy_pair_conn(connection, pair_id: int, reason: str, requeue_user_ids: list[int]):
    pair = await connection.fetchrow(
        """
        SELECT buddy_pairs.first_user_id, buddy_pairs.second_user_id,
               buddy_pair_state.cycle_start, buddy_pair_state.cycle_end
        FROM buddy_pairs
        LEFT JOIN buddy_pair_state ON buddy_pair_state.pair_id = buddy_pairs.id
        WHERE buddy_pairs.id = $1
        FOR UPDATE OF buddy_pairs
        """,
        pair_id,
    )
    if pair is None:
        return
    await connection.execute(
        """
        INSERT INTO buddy_history (original_pair_id, first_user_id, second_user_id, cycle_start, cycle_end, archived_reason)
        VALUES ($1, $2, $3, $4, $5, $6)
        """,
        pair_id,
        pair["first_user_id"],
        pair["second_user_id"],
        pair["cycle_start"],
        pair["cycle_end"],
        reason,
    )
    await connection.execute("DELETE FROM buddy_pairs WHERE id = $1", pair_id)
    for user_id in requeue_user_ids:
        await connection.execute("INSERT INTO buddy_queue (user_id) VALUES ($1) ON CONFLICT (user_id) DO NOTHING", user_id)


async def process_buddy_cycles_db():
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    notifications = []
    async with pool.acquire() as connection:
        async with connection.transaction():
            pairs = await connection.fetch(
                """
                SELECT buddy_pairs.id, buddy_pairs.first_user_id, buddy_pairs.second_user_id, buddy_pair_state.cycle_end
                FROM buddy_pairs
                JOIN buddy_pair_state ON buddy_pair_state.pair_id = buddy_pairs.id
                WHERE buddy_pair_state.cycle_end <= NOW()
                ORDER BY buddy_pairs.id
                FOR UPDATE OF buddy_pair_state
                """
            )
            for pair in pairs:
                decisions = await connection.fetch(
                    "SELECT user_id, decision FROM buddy_decisions WHERE pair_id = $1 AND cycle_end = $2",
                    pair["id"],
                    pair["cycle_end"],
                )
                mapping = {row["user_id"]: row["decision"] for row in decisions}
                first = mapping.get(pair["first_user_id"])
                second = mapping.get(pair["second_user_id"])
                if first == "keep" and second == "keep":
                    new_end = pair["cycle_end"] + timedelta(days=30)
                    await connection.execute(
                        "UPDATE buddy_pair_state SET cycle_start = cycle_end, cycle_end = $2 WHERE pair_id = $1",
                        pair["id"],
                        new_end,
                    )
                    notifications.append({"pair_id": pair["id"], "action": "kept"})
                    continue
                requeue = []
                for user_id, decision in ((pair["first_user_id"], first), (pair["second_user_id"], second)):
                    if decision != "pause":
                        requeue.append(user_id)
                await _archive_buddy_pair_conn(connection, pair["id"], "cycle_rotation", requeue)
                notifications.append({"pair_id": pair["id"], "action": "rotated"})
            reports = await connection.fetch(
                """
                SELECT buddy_nonresponse_reports.id, buddy_nonresponse_reports.pair_id,
                       buddy_nonresponse_reports.reporter_user_id,
                       buddy_pairs.first_user_id, buddy_pairs.second_user_id
                FROM buddy_nonresponse_reports
                JOIN buddy_pairs ON buddy_pairs.id = buddy_nonresponse_reports.pair_id
                WHERE buddy_nonresponse_reports.processed_at IS NULL
                  AND buddy_nonresponse_reports.reported_at <= NOW() - INTERVAL '48 hours'
                FOR UPDATE OF buddy_nonresponse_reports
                """
            )
            for report in reports:
                await _archive_buddy_pair_conn(connection, report["pair_id"], "nonresponse", [report["reporter_user_id"]])
                await connection.execute("UPDATE buddy_nonresponse_reports SET processed_at = NOW() WHERE id = $1", report["id"])
                notifications.append({"pair_id": report["pair_id"], "action": "nonresponse"})
    return notifications


def validate_submission_url(url: str) -> bool:
    try:
        parsed = urlparse(url.strip())
        if parsed.scheme not in {"http", "https"} or not parsed.hostname:
            return False
        host = parsed.hostname.lower()
        if host in {"localhost", "localhost.localdomain"} or host.endswith(".local"):
            return False
        try:
            address = ipaddress.ip_address(host)
            if address.is_private or address.is_loopback or address.is_link_local or address.is_reserved or address.is_multicast:
                return False
        except ValueError:
            pass
        return True
    except Exception:
        return False


async def get_active_challenges_db(telegram_user_id: int | None = None):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    user_id = None
    if telegram_user_id is not None:
        user_id = await pool.fetchval("SELECT id FROM users WHERE telegram_user_id = $1", telegram_user_id)
    rows = await pool.fetch(
        """
        SELECT
            challenges.id, challenges.title, challenges.description, challenges.starts_at, challenges.deadline,
            challenges.status, challenges.participation_mode, challenges.submission_format,
            challenges.ai_review_enabled, challenges.participant_limit,
            EXISTS (
                SELECT 1 FROM challenge_entries
                JOIN challenge_entry_members ON challenge_entry_members.entry_id = challenge_entries.id
                WHERE challenge_entries.challenge_id = challenges.id AND challenge_entry_members.user_id = $1
            ) AS joined
        FROM challenges
        WHERE challenges.status IN ('scheduled', 'active')
          AND challenges.deadline > NOW()
        ORDER BY challenges.starts_at, challenges.id
        """,
        user_id,
    )
    return [dict(row) for row in rows]


async def join_challenge_db(telegram_user_id: int, challenge_id: int, mode: str = "solo", teammate_telegram_user_id: int | None = None):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    if mode not in {"solo", "team"}:
        return False
    async with pool.acquire() as connection:
        async with connection.transaction():
            user_id = await connection.fetchval(
                """SELECT users.id FROM users LEFT JOIN club_system_state ON club_system_state.user_id = users.id
                   WHERE users.telegram_user_id = $1 AND club_system_state.blocked_at IS NULL""",
                telegram_user_id,
            )
            if user_id is None:
                return False
            challenge = await connection.fetchrow(
                "SELECT id, participation_mode, participant_limit FROM challenges WHERE id = $1 AND status IN ('scheduled','active') AND deadline > NOW()",
                challenge_id,
            )
            if challenge is None:
                return False
            if challenge["participation_mode"] not in {mode, "both"}:
                return False
            existing = await connection.fetchval(
                """
                SELECT challenge_entries.id FROM challenge_entries
                JOIN challenge_entry_members ON challenge_entry_members.entry_id = challenge_entries.id
                WHERE challenge_entries.challenge_id = $1 AND challenge_entry_members.user_id = $2
                LIMIT 1
                """,
                challenge_id,
                user_id,
            )
            if existing:
                return existing
            if challenge["participant_limit"]:
                current = await connection.fetchval(
                    """
                    SELECT COUNT(DISTINCT challenge_entry_members.user_id)
                    FROM challenge_entries
                    JOIN challenge_entry_members ON challenge_entry_members.entry_id = challenge_entries.id
                    WHERE challenge_entries.challenge_id = $1
                    """,
                    challenge_id,
                )
                if current >= challenge["participant_limit"]:
                    return False
            teammate_user_id = None
            if mode == "team":
                if teammate_telegram_user_id is None or teammate_telegram_user_id == telegram_user_id:
                    return False
                teammate_user_id = await connection.fetchval(
                    """
                    SELECT users.id
                    FROM users
                    LEFT JOIN club_system_state ON club_system_state.user_id = users.id
                    WHERE users.telegram_user_id = $1
                      AND club_system_state.blocked_at IS NULL
                      AND EXISTS (
                          SELECT 1 FROM user_product_access
                          WHERE user_product_access.user_id = users.id AND user_product_access.product_id = 2
                            AND user_product_access.starts_at <= NOW()
                            AND (user_product_access.expires_at IS NULL OR user_product_access.expires_at > NOW())
                      )
                    """,
                    teammate_telegram_user_id,
                )
                if teammate_user_id is None:
                    return False
                teammate_existing = await connection.fetchval(
                    """
                    SELECT 1 FROM challenge_entries
                    JOIN challenge_entry_members ON challenge_entry_members.entry_id = challenge_entries.id
                    WHERE challenge_entries.challenge_id = $1 AND challenge_entry_members.user_id = $2
                    LIMIT 1
                    """,
                    challenge_id, teammate_user_id,
                )
                if teammate_existing:
                    return False
            entry_id = await connection.fetchval(
                "INSERT INTO challenge_entries (challenge_id, mode) VALUES ($1, $2) RETURNING id",
                challenge_id,
                mode,
            )
            await connection.execute("INSERT INTO challenge_entry_members (entry_id, user_id) VALUES ($1, $2)", entry_id, user_id)
            if teammate_user_id is not None:
                await connection.execute("INSERT INTO challenge_entry_members (entry_id, user_id) VALUES ($1, $2)", entry_id, teammate_user_id)
                await _log_event_conn(connection, teammate_user_id, "challenge_joined", {"challenge_id": challenge_id, "entry_id": entry_id, "mode": mode})
            await _log_event_conn(connection, user_id, "challenge_joined", {"challenge_id": challenge_id, "entry_id": entry_id, "mode": mode})
            return entry_id


async def submit_challenge_db(telegram_user_id: int, challenge_id: int, submission_type: str, payload: str):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    if submission_type not in {"url", "text", "file"}:
        return {"ok": False, "error": "unsupported_submission_type"}
    if submission_type == "url" and not validate_submission_url(payload):
        return {"ok": False, "error": "unsafe_url"}
    async with pool.acquire() as connection:
        async with connection.transaction():
            user_id = await connection.fetchval("SELECT id FROM users WHERE telegram_user_id = $1", telegram_user_id)
            if user_id is None:
                return {"ok": False, "error": "user_not_found"}
            entry = await connection.fetchrow(
                """
                SELECT challenge_entries.id
                FROM challenge_entries
                JOIN challenge_entry_members ON challenge_entry_members.entry_id = challenge_entries.id
                JOIN challenges ON challenges.id = challenge_entries.challenge_id
                WHERE challenge_entries.challenge_id = $1
                  AND challenge_entry_members.user_id = $2
                  AND challenges.deadline >= NOW()
                LIMIT 1
                """,
                challenge_id,
                user_id,
            )
            if entry is None:
                return {"ok": False, "error": "not_joined"}
            submission_id = await connection.fetchval(
                """
                INSERT INTO submissions (challenge_id, entry_id, submission_type, payload)
                VALUES ($1, $2, $3, $4)
                RETURNING id
                """,
                challenge_id,
                entry["id"],
                submission_type,
                payload,
            )
            await _log_event_conn(connection, user_id, "challenge_submitted", {"challenge_id": challenge_id, "submission_id": submission_id})
            return {"ok": True, "submission_id": submission_id}


async def create_challenge_db(
    title: str,
    description: str,
    starts_at: datetime,
    deadline: datetime,
    participation_mode: str = "solo",
    submission_format: str = "text",
    ai_review_enabled: bool = False,
):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    status = "active" if starts_at <= datetime.now(timezone.utc) else "scheduled"
    row = await pool.fetchrow(
        """
        INSERT INTO challenges (title, description, starts_at, deadline, status, participation_mode, submission_format, ai_review_enabled)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING *
        """,
        title,
        description,
        starts_at,
        deadline,
        status,
        participation_mode,
        submission_format,
        ai_review_enabled,
    )
    return dict(row)


async def grant_complimentary_access_db(telegram_user_id: int, days: int | None, lifetime: bool, actor_id: int | None, reason: str):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    if not lifetime and (days is None or days <= 0):
        return False
    async with pool.acquire() as connection:
        async with connection.transaction():
            user = await connection.fetchrow("SELECT id FROM users WHERE telegram_user_id = $1 FOR UPDATE", telegram_user_id)
            if user is None:
                return False
            now = datetime.now(timezone.utc)
            latest_end = await connection.fetchval(
                "SELECT MAX(expires_at) FROM user_product_access WHERE user_id = $1 AND product_id = 2 AND expires_at > NOW()",
                user["id"],
            )
            start = max(now, latest_end) if latest_end and not lifetime else now
            end = None if lifetime else start + timedelta(days=days)
            access_id = await connection.fetchval(
                """
                INSERT INTO user_product_access (user_id, product_id, access_type, starts_at, expires_at, recurring_enabled)
                VALUES ($1, 2, 'manual', $2, $3, FALSE)
                RETURNING id
                """,
                user["id"],
                start,
                end,
            )
            source_type = "lifetime" if lifetime else "manual_complimentary"
            await connection.execute(
                "INSERT INTO access_sources (access_id, source_type, source_reference) VALUES ($1, $2, $3)",
                access_id,
                source_type,
                reason,
            )
            if lifetime:
                await connection.execute(
                    """
                    INSERT INTO club_subscriptions (user_id, subscription_type, status, paid_until, next_charge_at, cancel_at_period_end)
                    VALUES ($1, 'lifetime', 'active', NULL, NULL, TRUE)
                    ON CONFLICT (user_id) DO UPDATE SET subscription_type='lifetime', status='active', next_charge_at=NULL,
                        cancel_at_period_end=TRUE, schedule_version=club_subscriptions.schedule_version+1, updated_at=NOW()
                    """,
                    user["id"],
                )
            else:
                await connection.execute(
                    """
                    UPDATE club_subscriptions
                    SET next_charge_at = CASE WHEN next_charge_at IS NULL THEN NULL ELSE next_charge_at + ($2::int * INTERVAL '1 day') END,
                        schedule_version = schedule_version + 1,
                        updated_at = NOW()
                    WHERE user_id = $1 AND subscription_type = 'recurring'
                    """,
                    user["id"],
                    days,
                )
            await connection.execute(
                """
                INSERT INTO audit_log (actor_id, action, entity_type, entity_id, after_json, reason)
                VALUES ($1, $2, 'user_product_access', $3, $4::jsonb, $5)
                """,
                actor_id,
                "grant_lifetime" if lifetime else "grant_complimentary",
                str(access_id),
                _json_payload({"telegram_user_id": telegram_user_id, "days": days, "lifetime": lifetime, "starts_at": start, "expires_at": end}),
                reason,
            )
            await _log_event_conn(connection, user["id"], "entitlement_created", {"access_id": access_id, "source_type": source_type})
            return True


async def adjust_internal_balance_db(telegram_user_id: int, amount: Decimal, actor_id: int | None, reason: str):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    amount = _money(amount)
    if amount == 0 or not reason.strip():
        return False
    async with pool.acquire() as connection:
        async with connection.transaction():
            user = await connection.fetchrow("SELECT id, balance FROM users WHERE telegram_user_id = $1 FOR UPDATE", telegram_user_id)
            if user is None:
                return False
            before = _money(user["balance"])
            after = before + amount
            if after < 0:
                return False
            await connection.execute("UPDATE users SET balance = $2 WHERE id = $1", user["id"], after)
            await connection.execute(
                """
                INSERT INTO ledger_entries (user_id, account_type, entry_type, amount, bucket, reference_type, reference_id, reason, created_by)
                VALUES ($1, 'internal', $2, $3, 'available', 'admin', $4, $5, $6)
                """,
                user["id"],
                "manual_credit" if amount > 0 else "manual_debit",
                abs(amount),
                str(actor_id or "system"),
                reason,
                actor_id,
            )
            await connection.execute(
                """
                INSERT INTO audit_log (actor_id, action, entity_type, entity_id, before_json, after_json, reason)
                VALUES ($1, $2, 'users', $3, $4::jsonb, $5::jsonb, $6)
                """,
                actor_id,
                "manual_internal_credit" if amount > 0 else "manual_internal_debit",
                str(user["id"]),
                _json_payload({"balance": str(before)}),
                _json_payload({"balance": str(after)}),
                reason,
            )
            return {"before": before, "after": after}


async def set_partner_status_db(telegram_user_id: int, enabled: bool, actor_id: int | None, reason: str):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    user_id = await pool.fetchval("SELECT id FROM users WHERE telegram_user_id = $1", telegram_user_id)
    if user_id is None:
        return False
    await pool.execute(
        """
        INSERT INTO partners (user_id, status) VALUES ($1, $2)
        ON CONFLICT (user_id) DO UPDATE SET status = EXCLUDED.status, updated_at = NOW()
        """,
        user_id,
        enabled,
    )
    await pool.execute(
        """
        INSERT INTO club_system_state (user_id, partner_status)
        VALUES ($1, $2)
        ON CONFLICT (user_id) DO UPDATE SET partner_status = EXCLUDED.partner_status
        """,
        user_id,
        enabled,
    )
    await pool.execute(
        "INSERT INTO audit_log (actor_id, action, entity_type, entity_id, after_json, reason) VALUES ($1, 'set_partner_status', 'user', $2, $3::jsonb, $4)",
        actor_id,
        str(user_id),
        _json_payload({"partner_status": enabled}),
        reason,
    )
    return True


async def set_referral_rate_db(telegram_user_id: int, rate_percent: Decimal, actor_id: int | None, reason: str):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    user_id = await pool.fetchval("SELECT id FROM users WHERE telegram_user_id = $1", telegram_user_id)
    if user_id is None:
        return False
    rate = Decimal(str(rate_percent)) / Decimal("100")
    if rate < 0 or rate > 1:
        return False
    async with pool.acquire() as connection:
        async with connection.transaction():
            await connection.execute("UPDATE referral_rates SET effective_to = NOW() WHERE user_id = $1 AND effective_to IS NULL", user_id)
            await connection.execute("INSERT INTO referral_rates (user_id, rate) VALUES ($1, $2)", user_id, rate)
            await connection.execute(
                "INSERT INTO audit_log (actor_id, action, entity_type, entity_id, after_json, reason) VALUES ($1, 'set_referral_rate', 'user', $2, $3::jsonb, $4)",
                actor_id,
                str(user_id),
                _json_payload({"rate": str(rate)}),
                reason,
            )
    return True


async def create_withdrawal_db(telegram_user_id: int, amount: Decimal, details: dict):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    amount = _money(amount)
    if amount < Decimal("1000.00"):
        return {"ok": False, "error": "minimum_1000"}
    async with pool.acquire() as connection:
        async with connection.transaction():
            row = await connection.fetchrow(
                """
                SELECT users.id AS user_id, partners.withdrawable_available, partners.status
                FROM users JOIN partners ON partners.user_id = users.id
                WHERE users.telegram_user_id = $1
                FOR UPDATE OF partners
                """,
                telegram_user_id,
            )
            if row is None or not row["status"]:
                return {"ok": False, "error": "not_partner"}
            if _money(row["withdrawable_available"]) < amount:
                return {"ok": False, "error": "insufficient_balance"}
            withdrawal_id = await connection.fetchval(
                """
                INSERT INTO withdrawals (user_id, amount, details_json)
                VALUES ($1, $2, $3::jsonb)
                RETURNING id
                """,
                row["user_id"],
                amount,
                _json_payload(details),
            )
            await connection.execute(
                """
                UPDATE partners
                SET withdrawable_available = withdrawable_available - $2,
                    withdrawable_reserved = withdrawable_reserved + $2,
                    updated_at = NOW()
                WHERE user_id = $1
                """,
                row["user_id"],
                amount,
            )
            await connection.execute(
                "INSERT INTO ledger_entries (user_id, account_type, entry_type, amount, bucket, reference_type, reference_id) VALUES ($1, 'withdrawable', 'withdrawal_reserve', $2, 'reserved', 'withdrawal', $3)",
                row["user_id"],
                amount,
                str(withdrawal_id),
            )
            await _log_event_conn(connection, row["user_id"], "withdrawal_requested", {"withdrawal_id": withdrawal_id, "amount": str(amount)})
            return {"ok": True, "withdrawal_id": withdrawal_id}


async def process_withdrawal_db(withdrawal_id: int, status: str, actor_id: int | None):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    if status not in {"paid", "rejected"}:
        return False
    async with pool.acquire() as connection:
        async with connection.transaction():
            withdrawal = await connection.fetchrow("SELECT * FROM withdrawals WHERE id = $1 FOR UPDATE", withdrawal_id)
            if withdrawal is None or withdrawal["status"] != "pending":
                return False
            amount = _money(withdrawal["amount"])
            if status == "paid":
                await connection.execute(
                    "UPDATE partners SET withdrawable_reserved = withdrawable_reserved - $2, updated_at = NOW() WHERE user_id = $1",
                    withdrawal["user_id"],
                    amount,
                )
                entry_type = "withdrawal_paid"
            else:
                await connection.execute(
                    """
                    UPDATE partners
                    SET withdrawable_reserved = withdrawable_reserved - $2,
                        withdrawable_available = withdrawable_available + $2,
                        updated_at = NOW()
                    WHERE user_id = $1
                    """,
                    withdrawal["user_id"],
                    amount,
                )
                entry_type = "withdrawal_release"
            await connection.execute(
                "UPDATE withdrawals SET status = $2, processed_at = NOW(), processed_by = $3 WHERE id = $1",
                withdrawal_id,
                status,
                actor_id,
            )
            await connection.execute(
                "INSERT INTO ledger_entries (user_id, account_type, entry_type, amount, bucket, reference_type, reference_id, created_by) VALUES ($1, 'withdrawable', $2, $3, 'reserved', 'withdrawal', $4, $5)",
                withdrawal["user_id"],
                entry_type,
                amount,
                str(withdrawal_id),
                actor_id,
            )
            await _log_event_conn(connection, withdrawal["user_id"], "withdrawal_paid" if status == "paid" else "withdrawal_rejected", {"withdrawal_id": withdrawal_id})
            return True


async def register_refund_db(order_id: int, external_amount: Decimal, provider_refund_id: str | None, actor_id: int | None = None):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    external_amount = _money(external_amount)
    if external_amount <= 0:
        return False
    async with pool.acquire() as connection:
        async with connection.transaction():
            payment = await connection.fetchrow(
                """
                SELECT payment_orders.id, payment_orders.user_id, payment_orders.status,
                       club_payment_meta.external_amount
                FROM payment_orders
                JOIN club_payment_meta ON club_payment_meta.order_id = payment_orders.id
                WHERE payment_orders.id = $1
                FOR UPDATE OF payment_orders
                """,
                order_id,
            )
            if payment is None or payment["status"] not in {"paid", "refunded"}:
                return False
            total_external = _money(payment["external_amount"])
            already_refunded = _money(await connection.fetchval("SELECT COALESCE(SUM(external_amount), 0) FROM refunds WHERE payment_id = $1 AND status = 'succeeded'", order_id))
            if already_refunded + external_amount > total_external:
                return False
            refund_id = await connection.fetchval(
                "INSERT INTO refunds (payment_id, provider_refund_id, external_amount) VALUES ($1, $2, $3) RETURNING id",
                order_id,
                provider_refund_id,
                external_amount,
            )
            accrual = await connection.fetchrow("SELECT * FROM referral_accruals WHERE payment_order_id = $1 FOR UPDATE", order_id)
            if accrual and total_external > 0:
                cumulative_refund = already_refunded + external_amount
                target = (_money(accrual["reward_amount"]) * cumulative_refund / total_external).quantize(Decimal("0.01"), rounding=ROUND_HALF_UP)
                delta = max(Decimal("0.00"), target - _money(accrual["reversed_amount"]))
                if delta > 0:
                    referrer_id = accrual["referrer_user_id"]
                    available = Decimal("0.00")
                    if accrual["account_type"] == "withdrawable":
                        available = _money(await connection.fetchval("SELECT withdrawable_available FROM partners WHERE user_id = $1 FOR UPDATE", referrer_id))
                    else:
                        available = _money(await connection.fetchval("SELECT balance FROM users WHERE id = $1 FOR UPDATE", referrer_id))
                    direct = min(available, delta)
                    if direct > 0:
                        if accrual["account_type"] == "withdrawable":
                            await connection.execute("UPDATE partners SET withdrawable_available = withdrawable_available - $2 WHERE user_id = $1", referrer_id, direct)
                        else:
                            await connection.execute("UPDATE users SET balance = balance - $2 WHERE id = $1", referrer_id, direct)
                        await connection.execute(
                            "INSERT INTO ledger_entries (user_id, account_type, entry_type, amount, bucket, reference_type, reference_id) VALUES ($1, $2, 'referral_reversal', $3, 'available', 'refund', $4)",
                            referrer_id,
                            accrual["account_type"],
                            direct,
                            str(refund_id),
                        )
                    remaining = delta - direct
                    if remaining > 0:
                        await connection.execute(
                            "INSERT INTO withholdings (user_id, account_type, amount_remaining, source_refund_id) VALUES ($1, $2, $3, $4)",
                            referrer_id,
                            accrual["account_type"],
                            remaining,
                            refund_id,
                        )
                        await _log_event_conn(connection, referrer_id, "withholding_created", {"refund_id": refund_id, "amount": str(remaining)})
                    await connection.execute("UPDATE referral_accruals SET reversed_amount = reversed_amount + $2 WHERE id = $1", accrual["id"], delta)
                    await _log_event_conn(connection, referrer_id, "referral_reversal", {"refund_id": refund_id, "amount": str(delta)})
            if already_refunded + external_amount == total_external:
                await connection.execute("UPDATE payment_orders SET status = 'refunded', refunded_at = NOW() WHERE id = $1", order_id)
            await _log_event_conn(connection, payment["user_id"], "refund_succeeded", {"payment_id": order_id, "refund_id": refund_id, "external_amount": str(external_amount)})
            return True


async def get_admin_user_card_db(telegram_user_id: int):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    user = await pool.fetchrow(
        """
        SELECT users.*, club_system_state.blocked_at, COALESCE(partners.status, FALSE) AS partner_status,
               COALESCE(partners.withdrawable_available, 0) AS withdrawable_available,
               COALESCE(partners.withdrawable_reserved, 0) AS withdrawable_reserved,
               COALESCE(club_subscriptions.status, 'none') AS subscription_status,
               COALESCE(club_subscriptions.subscription_type, 'none') AS subscription_type,
               club_subscriptions.subscription_term, club_subscriptions.period_days,
               club_subscriptions.paid_until, club_subscriptions.next_charge_at,
               club_subscriptions.cancel_at_period_end,
               COALESCE((SELECT SUM(amount_remaining) FROM withholdings WHERE withholdings.user_id = users.id AND status='open'), 0) AS pending_withholding,
               COALESCE((SELECT COUNT(*) FROM users invited WHERE invited.referal_id = users.id), 0) AS referrals_count
        FROM users
        LEFT JOIN club_system_state ON club_system_state.user_id = users.id
        LEFT JOIN partners ON partners.user_id = users.id
        LEFT JOIN club_subscriptions ON club_subscriptions.user_id = users.id
        WHERE users.telegram_user_id = $1
        """,
        telegram_user_id,
    )
    if user is None:
        return None
    user_id = user["id"]
    accesses = await pool.fetch(
        "SELECT id, access_type, starts_at, expires_at, order_id FROM user_product_access WHERE user_id = $1 AND product_id = 2 ORDER BY starts_at DESC LIMIT 20",
        user_id,
    )
    payments = await pool.fetch(
        """
        SELECT payment_orders.id, payment_orders.amount, payment_orders.status, payment_orders.created_at, payment_orders.paid_at,
               product_tariffs.name AS tariff_name, club_payment_meta.gross_price, club_payment_meta.internal_amount,
               club_payment_meta.external_amount, club_payment_meta.period_start, club_payment_meta.period_end
        FROM payment_orders
        JOIN product_tariffs ON product_tariffs.id = payment_orders.tariff_id
        LEFT JOIN club_payment_meta ON club_payment_meta.order_id = payment_orders.id
        WHERE payment_orders.user_id = $1
        ORDER BY payment_orders.id DESC LIMIT 20
        """,
        user_id,
    )
    buddy = await get_buddy_data_db(telegram_user_id)
    return {"user": dict(user), "accesses": [dict(row) for row in accesses], "payments": [dict(row) for row in payments], "buddy": buddy}


async def find_users_for_reactivation_db(days: int):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    rows = await pool.fetch(
        """
        WITH latest AS (
            SELECT DISTINCT ON (user_id) id, user_id, expires_at
            FROM user_product_access
            WHERE product_id = 2 AND expires_at IS NOT NULL
            ORDER BY user_id, expires_at DESC
        )
        SELECT latest.id AS access_id, users.telegram_user_id, users.balance
        FROM latest
        JOIN users ON users.id = latest.user_id
        WHERE latest.expires_at::date = CURRENT_DATE - $1::int
          AND users.telegram_user_id IS NOT NULL
          AND NOT EXISTS (
              SELECT 1 FROM user_product_access active
              WHERE active.user_id = users.id AND active.product_id = 2
                AND active.starts_at <= NOW() AND (active.expires_at IS NULL OR active.expires_at > NOW())
          )
          AND NOT EXISTS (
              SELECT 1 FROM reactivation_marks
              WHERE reactivation_marks.access_id = latest.id AND reactivation_marks.offset_days = $1
          )
        """,
        days,
    )
    if rows:
        await pool.executemany(
            "INSERT INTO reactivation_marks (access_id, offset_days) VALUES ($1, $2) ON CONFLICT DO NOTHING",
            [(row["access_id"], days) for row in rows],
        )
    return [dict(row) for row in rows]

async def get_pending_withdrawals_db():
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    rows = await pool.fetch(
        """
        SELECT withdrawals.id, withdrawals.amount, withdrawals.requested_at, withdrawals.details_json,
               users.telegram_user_id, users.telegram_username, users.name
        FROM withdrawals
        JOIN users ON users.id = withdrawals.user_id
        WHERE withdrawals.status = 'pending'
        ORDER BY withdrawals.requested_at
        """
    )
    return [dict(row) for row in rows]

async def grant_reward_db(
    telegram_user_id: int,
    reward_type: str,
    value: str,
    title: str,
    actor_id: int | None = None,
):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    allowed = {
        "internal_balance",
        "withdrawable_balance",
        "free_subscription_days",
        "external_subscription",
        "physical_gift",
        "promo_code",
        "custom_reward",
    }
    if reward_type not in allowed:
        return {"ok": False, "error": "unsupported_reward"}
    async with pool.acquire() as connection:
        async with connection.transaction():
            user = await connection.fetchrow("SELECT id FROM users WHERE telegram_user_id = $1 FOR UPDATE", telegram_user_id)
            if user is None:
                return {"ok": False, "error": "user_not_found"}
            payload = {"value": value}
            reward_id = await connection.fetchval(
                "INSERT INTO rewards (reward_type, title, payload_json) VALUES ($1, $2, $3::jsonb) RETURNING id",
                reward_type,
                title,
                _json_payload(payload),
            )
            user_reward_id = await connection.fetchval(
                "INSERT INTO user_rewards (reward_id, user_id, status) VALUES ($1, $2, 'assigned') RETURNING id",
                reward_id,
                user["id"],
            )
            final_status = "fulfilled"
            if reward_type == "internal_balance":
                amount = _money(value)
                if amount <= 0:
                    return {"ok": False, "error": "invalid_amount"}
                await connection.execute("UPDATE users SET balance = balance + $2 WHERE id = $1", user["id"], amount)
                await connection.execute(
                    "INSERT INTO ledger_entries (user_id, account_type, entry_type, amount, bucket, reference_type, reference_id, created_by) VALUES ($1, 'internal', 'reward_accrual', $2, 'available', 'user_reward', $3, $4)",
                    user["id"], amount, str(user_reward_id), actor_id,
                )
            elif reward_type == "withdrawable_balance":
                amount = _money(value)
                partner = await connection.fetchrow("SELECT status FROM partners WHERE user_id = $1 FOR UPDATE", user["id"])
                if amount <= 0:
                    return {"ok": False, "error": "invalid_amount"}
                if not partner or not partner["status"]:
                    return {"ok": False, "error": "not_partner"}
                await connection.execute("UPDATE partners SET withdrawable_available = withdrawable_available + $2, updated_at = NOW() WHERE user_id = $1", user["id"], amount)
                await connection.execute(
                    "INSERT INTO ledger_entries (user_id, account_type, entry_type, amount, bucket, reference_type, reference_id, created_by) VALUES ($1, 'withdrawable', 'reward_accrual', $2, 'available', 'user_reward', $3, $4)",
                    user["id"], amount, str(user_reward_id), actor_id,
                )
            elif reward_type == "free_subscription_days":
                try:
                    days = int(value)
                except (TypeError, ValueError):
                    return {"ok": False, "error": "invalid_days"}
                if days <= 0:
                    return {"ok": False, "error": "invalid_days"}
                lifetime = await connection.fetchval(
                    """
                    SELECT EXISTS (
                        SELECT 1 FROM user_product_access
                        JOIN access_sources ON access_sources.access_id = user_product_access.id
                        WHERE user_product_access.user_id = $1 AND user_product_access.product_id = 2
                          AND user_product_access.expires_at IS NULL
                          AND access_sources.source_type = 'lifetime'
                    )
                    """, user["id"],
                )
                if lifetime:
                    return {"ok": False, "error": "lifetime_noop"}
                latest_end = await connection.fetchval(
                    "SELECT MAX(expires_at) FROM user_product_access WHERE user_id = $1 AND product_id = 2 AND expires_at IS NOT NULL AND expires_at > NOW()",
                    user["id"],
                )
                now = datetime.now(timezone.utc)
                start = max(now, latest_end) if latest_end else now
                end = start + timedelta(days=days)
                access_id = await connection.fetchval(
                    "INSERT INTO user_product_access (user_id, product_id, access_type, starts_at, expires_at, recurring_enabled) VALUES ($1, 2, 'manual', $2, $3, FALSE) RETURNING id",
                    user["id"], start, end,
                )
                await connection.execute(
                    "INSERT INTO access_sources (access_id, source_type, source_reference) VALUES ($1, 'reward_days', $2)",
                    access_id, str(user_reward_id),
                )
                await connection.execute(
                    """
                    UPDATE club_subscriptions
                    SET next_charge_at = CASE WHEN next_charge_at IS NULL THEN NULL ELSE next_charge_at + ($2::int * INTERVAL '1 day') END,
                        schedule_version = schedule_version + 1, updated_at = NOW()
                    WHERE user_id = $1 AND subscription_type = 'recurring'
                    """, user["id"], days,
                )
            else:
                final_status = "waiting_for_fulfillment"
            await connection.execute(
                "UPDATE user_rewards SET status = $2, fulfilled_at = CASE WHEN $2 = 'fulfilled' THEN NOW() ELSE NULL END WHERE id = $1",
                user_reward_id, final_status,
            )
            await _log_event_conn(connection, user["id"], "reward_assigned", {"user_reward_id": user_reward_id, "type": reward_type})
            if final_status == "fulfilled":
                await _log_event_conn(connection, user["id"], "reward_fulfilled", {"user_reward_id": user_reward_id, "type": reward_type})
            await connection.execute(
                "INSERT INTO audit_log (actor_id, action, entity_type, entity_id, after_json) VALUES ($1, 'grant_reward', 'user_reward', $2, $3::jsonb)",
                actor_id, str(user_reward_id), _json_payload({"telegram_user_id": telegram_user_id, "type": reward_type, "value": value, "status": final_status}),
            )
            return {"ok": True, "user_reward_id": user_reward_id, "status": final_status}

async def set_user_blocked_db(telegram_user_id: int, blocked: bool, actor_id: int | None, reason: str):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    user_id = await pool.fetchval("SELECT id FROM users WHERE telegram_user_id = $1", telegram_user_id)
    if user_id is None:
        return False
    await pool.execute(
        """
        INSERT INTO club_system_state (user_id, blocked_at)
        VALUES ($1, CASE WHEN $2 THEN NOW() ELSE NULL END)
        ON CONFLICT (user_id) DO UPDATE
        SET blocked_at = CASE WHEN $2 THEN NOW() ELSE NULL END
        """,
        user_id, blocked,
    )
    await pool.execute(
        "INSERT INTO audit_log (actor_id, action, entity_type, entity_id, after_json, reason) VALUES ($1, $2, 'user', $3, $4::jsonb, $5)",
        actor_id, "block_user" if blocked else "unblock_user", str(user_id), _json_payload({"blocked": blocked}), reason,
    )
    await log_event_by_telegram_id(telegram_user_id, "user_blocked" if blocked else "user_unblocked", {})
    return True


async def release_stale_club_payments_db(hours: int = 24):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    rows = await pool.fetch(
        """
        SELECT payment_orders.id
        FROM payment_orders
        JOIN club_payment_meta ON club_payment_meta.order_id = payment_orders.id
        WHERE payment_orders.status = 'pending'
          AND payment_orders.created_at <= NOW() - ($1::int * INTERVAL '1 hour')
        """, hours,
    )
    released = []
    for row in rows:
        if await release_failed_club_payment(row["id"]):
            released.append(row["id"])
    return released

async def cancel_last_payment_db(telegram_user_id: int):
    if pool is None:
        raise RuntimeError("Нет подключения к PostgreSQL")
    user = await pool.fetchval("""
        SELECT id FROM users WHERE telegram_user_id = $1
    """, telegram_user_id)
    await pool.execute(
        """
        UPDATE payment_orders 
        SET status = 'cancelled' 
        WHERE user_id = $1 AND status = 'pending'
        """, user)