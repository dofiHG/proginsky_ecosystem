import aiohttp

API_URL = "http://api:8888"
MAIL_API_URL = "http://mail-service:8890"

async def chain_client(token: str, telegram_username: str, telegram_user_id: int) -> int:
    payload = {"token": token, "telegram_username": telegram_username, "telegram_user_id": telegram_user_id}
    timeout = aiohttp.ClientTimeout(total=10)
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session: 
            async with session.post(f"{API_URL}/chain_telegram_by_token", json=payload) as responce:
                return responce.status
    except aiohttp.ClientError:
        return 404

async def get_scheduled_messages(auditory_type: str) -> list[dict]:
    timeout = aiohttp.ClientTimeout(total=10)
    payload = {"auditory_type": auditory_type}
    try:
        async with aiohttp.ClientSession(timeout=timeout, ) as session:
            async with session.get(f"{API_URL}/get_scheduled_messages", params=payload) as responce:
                responce.raise_for_status()
                data = await responce.json()
                return data
    except aiohttp.ClientError:
        return []

async def register_telegram_user(telegram_user_id: int, telegram_username: str) -> int:
    payload = {"telegram_username": telegram_username, "telegram_user_id": telegram_user_id}
    timeout = aiohttp.ClientTimeout(total=10)
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session: 
            async with session.post(f"{API_URL}/register_telegram_user", json=payload) as responce:
                return responce.status
    except aiohttp.ClientError:
        return 404

async def get_all_users():
    timeout = aiohttp.ClientTimeout(total=10)
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session: 
            async with session.get(f"{API_URL}/get_all_users_by_page") as responce:
                return await responce.json()
    except aiohttp.ClientError:
        return 404

async def delete_row(table_name: str, row_id: int):
    timeout = aiohttp.ClientTimeout(total=10)
    payload = {"table_name": table_name, "row_id": row_id}
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session: 
            async with session.post(f"{API_URL}/delete_row", json=payload) as responce:
                return await responce.json()
    except aiohttp.ClientError:
        return 404

async def send_email_message(telegram_user_id: int, text: str | None = None, file_id: str | None = None):
    timeout = aiohttp.ClientTimeout(total=10)
    payload = {"telegram_user_id": telegram_user_id}
    if file_id:
        payload["file_id"] = file_id
    if text:
        payload["text"] = text
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.post(f"{MAIL_API_URL}/send_email", json=payload) as response:
                if response.status != 200:
                    return False
                return True
    except aiohttp.ClientError:
        return False

async def check_user_channel_access(telegram_user_id: int):
    timeout = aiohttp.ClientTimeout(total=10)
    payload = {"telegram_user_id": telegram_user_id}
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.post(f"{API_URL}/check_user_channel_access", params=payload) as response:
                if response.status != 200:
                    return False
                return await response.json()
    except aiohttp.ClientError:
        return False