import aiohttp
from datetime import datetime

API_URL = "http://api:8888"

async def get_users(limit: int, offset: int, users_type: str):
    timeout = aiohttp.ClientTimeout(10)
    endpoints = {"all_users": "get_all_users_by_page", "club_members": "get_club_members_by_page",}
    endpoint = endpoints.get(users_type)
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.get(f"{API_URL}/{endpoint}", params={"limit": limit, "offset": offset}) as response:
                if response.status != 200:
                    return []
                return await response.json()
    except aiohttp.ClientError:
            return []

async def create_task(text: str, file_id: str, file_type: str):
    timeout = aiohttp.ClientTimeout(10)
    payload = {"text": text, "file_id": file_id, "file_type": file_type}
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.post(f"{API_URL}/create_task", json=payload) as response:
                return response.status
    except aiohttp.ClientError:
        return 404

async def get_current_task(status: int):
    timeout = aiohttp.ClientTimeout(10)
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.get(f"{API_URL}/get_current_task", params={"status": status}) as response:
                if response.status != 200:
                    return None
                return await response.json()
    except aiohttp.ClientError:
        return False

async def update_current_task(text: str, file_id: str, file_type: str, task_id: int):
    timeout = aiohttp.ClientTimeout(10)
    payload = {"text": text, "file_id": file_id, "file_type": file_type, "id": task_id}
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.post(f"{API_URL}/update_task", json=payload) as response:
                return response.status
    except aiohttp.ClientError:
        return 404

async def switch_month_task():
    timeout = aiohttp.ClientTimeout(10)
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.post(f"{API_URL}/switch_month_task") as response:
                if response.status != 200:
                    return False
                return await response.json()
    except aiohttp.ClientError:
        return False

async def add_new_message(message_text: str | None, auditory_type: str, send_time: datetime, document_id: str | None = None, document_type: str | None = None):
    timeout = aiohttp.ClientTimeout(10)
    payload = {"auditory_type": auditory_type, "send_time": send_time.isoformat()}
    if message_text:
        payload["message_text"] = message_text
    if document_id:
        payload["document_id"] = document_id
        payload["document_type"] = document_type
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.post(f"{API_URL}/create_new_message", json=payload) as response:
                if response.status != 200:
                    return False
                return await response.json()
    except aiohttp.ClientError:
        return False

async def get_scheduled_messages(scheduled_message_id: int | None = None) -> list[dict]:
    timeout = aiohttp.ClientTimeout(total=5)
    payload = {}
    if scheduled_message_id is not None:
        payload["scheduled_message_id"] = scheduled_message_id
    try:
        async with aiohttp.ClientSession(timeout=timeout, ) as session:
            async with session.get(f"{API_URL}/get_scheduled_messages", params=payload) as responce:
                responce.raise_for_status()
                data = await responce.json()
                return data
    except aiohttp.ClientError:
        return []

async def update_scheduled_message(message_id: int, message_text: str | None = None, send_time: datetime | None = None, document_id: str | None = None, document_type: str | None = None):
    timeout = aiohttp.ClientTimeout(total=10)
    payload = {"message_id": message_id}
    if document_id:
        payload["document_id"] = document_id
        payload["document_type"] = document_type
    if message_text is not None:
        payload["message_text"] = message_text
    if send_time is not None:
        payload["send_time"] = send_time.isoformat()
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.post(f"{API_URL}/update_scheduled_message", json=payload) as response:
                return response.status == 200
    except aiohttp.ClientError:
        return False
async def get_admin_user_card(telegram_user_id: int):
    timeout = aiohttp.ClientTimeout(total=10)
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.get(f"{API_URL}/admin_user_card", params={"telegram_user_id": telegram_user_id}) as response:
                if response.status != 200:
                    return None
                return await response.json()
    except aiohttp.ClientError:
        return None

async def grant_access(telegram_user_id: int, days: int | None, lifetime: bool, actor_id: int, reason: str):
    payload = {
        "telegram_user_id": telegram_user_id,
        "days": days,
        "lifetime": lifetime,
        "actor_id": actor_id,
        "reason": reason,
    }
    timeout = aiohttp.ClientTimeout(total=10)
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.post(f"{API_URL}/admin_grant_access", json=payload) as response:
                return response.status == 200 and await response.json()
    except aiohttp.ClientError:
        return False

async def adjust_balance(telegram_user_id: int, amount: float, actor_id: int, reason: str):
    payload = {
        "telegram_user_id": telegram_user_id,
        "amount": amount,
        "actor_id": actor_id,
        "reason": reason,
    }
    timeout = aiohttp.ClientTimeout(total=10)
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.post(f"{API_URL}/admin_adjust_balance", json=payload) as response:
                if response.status != 200:
                    return False
                return await response.json()
    except aiohttp.ClientError:
        return False

async def set_partner_status(telegram_user_id: int, enabled: bool, actor_id: int, reason: str):
    payload = {
        "telegram_user_id": telegram_user_id,
        "enabled": enabled,
        "actor_id": actor_id,
        "reason": reason,
    }
    timeout = aiohttp.ClientTimeout(total=10)
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.post(f"{API_URL}/admin_set_partner", json=payload) as response:
                return response.status == 200 and await response.json()
    except aiohttp.ClientError:
        return False

async def set_referral_rate(telegram_user_id: int, rate_percent: float, actor_id: int, reason: str):
    payload = {
        "telegram_user_id": telegram_user_id,
        "rate_percent": rate_percent,
        "actor_id": actor_id,
        "reason": reason,
    }
    timeout = aiohttp.ClientTimeout(total=10)
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.post(f"{API_URL}/admin_set_referral_rate", json=payload) as response:
                return response.status == 200 and await response.json()
    except aiohttp.ClientError:
        return False

async def get_pending_withdrawals():
    timeout = aiohttp.ClientTimeout(total=10)
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.get(f"{API_URL}/admin_pending_withdrawals") as response:
                if response.status != 200:
                    return []
                return await response.json()
    except aiohttp.ClientError:
        return []

async def process_withdrawal(withdrawal_id: int, status: str, actor_id: int):
    payload = {"withdrawal_id": withdrawal_id, "status": status, "actor_id": actor_id}
    timeout = aiohttp.ClientTimeout(total=10)
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.post(f"{API_URL}/admin_process_withdrawal", json=payload) as response:
                return response.status == 200 and await response.json()
    except aiohttp.ClientError:
        return False

async def create_challenge(title: str, description: str, starts_at: datetime, deadline: datetime, participation_mode: str = "solo", submission_format: str = "text"):
    payload = {
        "title": title,
        "description": description,
        "starts_at": starts_at.isoformat(),
        "deadline": deadline.isoformat(),
        "participation_mode": participation_mode,
        "submission_format": submission_format,
        "ai_review_enabled": False,
    }
    timeout = aiohttp.ClientTimeout(total=10)
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.post(f"{API_URL}/admin_create_challenge", json=payload) as response:
                if response.status != 200:
                    return None
                return await response.json()
    except aiohttp.ClientError:
        return None

async def grant_reward(telegram_user_id: int, reward_type: str, value: str, title: str, actor_id: int):
    payload = {
        "telegram_user_id": telegram_user_id,
        "reward_type": reward_type,
        "value": value,
        "title": title,
        "actor_id": actor_id,
    }
    timeout = aiohttp.ClientTimeout(total=10)
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.post(f"{API_URL}/admin_grant_reward", json=payload) as response:
                if response.status != 200:
                    return None
                return await response.json()
    except aiohttp.ClientError:
        return None

async def set_user_blocked(telegram_user_id: int, blocked: bool, actor_id: int, reason: str):
    payload = {"telegram_user_id": telegram_user_id, "blocked": blocked, "actor_id": actor_id, "reason": reason}
    timeout = aiohttp.ClientTimeout(total=10)
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.post(f"{API_URL}/admin_set_blocked", json=payload) as response:
                return response.status == 200 and await response.json()
    except aiohttp.ClientError:
        return False
