import aiohttp
import json

API_URL = "http://api:8888"
MAIL_API_URL = "http://mail-service:8890"

async def create_payment(telegram_user_id: int, tariff_slug: str) -> dict | None:
    payload = {"telegram_user_id": telegram_user_id, "tariff_slug": tariff_slug}
    timeout = aiohttp.ClientTimeout(total=10)
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.post(f"{API_URL}/payments_robokassa_create", json=payload) as response:
                response.raise_for_status()
                return await response.json()
    except aiohttp.ClientError:
        return None

async def check_access_user(telegram_user_id: int) -> bool:
    timeout = aiohttp.ClientTimeout(total=10)
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.get(f"{API_URL}/check_access_club_user", params={"telegram_user_id": telegram_user_id}) as response:
                if response.status != 200:
                    return False
                return await response.json()
    except aiohttp.ClientError:
        return False

async def buddy_request(telegram_user_id: int) -> bool:
    timeout = aiohttp.ClientTimeout(total=5)
    payload = {"telegram_user_id": telegram_user_id}
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.post(f"{API_URL}/add_club_user_to_queue", params=payload) as response:
                if response.status != 200:
                    return False
                return await response.json()
    except aiohttp.ClientError:
        return False

async def pass_the_task_request(telegram_user_id: int, file_id: str):
    timeout = aiohttp.ClientTimeout(10)
    payload = {"telegram_user_id": telegram_user_id, "file_id": file_id}
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.post(f"{API_URL}/pass_the_task", json=payload) as response:
                if response.status != 200:
                    return False
                return response.status
    except aiohttp.ClientError:
        return False

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

async def check_task_answer(telegram_user_id: int):
    timeout = aiohttp.ClientTimeout(10)
    payload = {"telegram_user_id": telegram_user_id}
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.get(f"{API_URL}/check_task_answer", params=payload) as response:
                if response.status != 200:
                    return False
                return await response.json()
    except aiohttp.ClientError:
        return False

async def chesk_buddy_existing(telegram_user_id: int):
    timeout = aiohttp.ClientTimeout(10)
    payload = {"telegram_user_id": telegram_user_id}
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.get(f"{API_URL}/check_buddy_existing", params=payload) as response:
                if response.status != 200:
                    return False
                return await response.json()
    except aiohttp.ClientError:
        return False

async def get_scheduled_messages(auditory_type: str) -> list[dict]:
    timeout = aiohttp.ClientTimeout(total=5)
    payload = {"auditory_type": auditory_type}
    try:
        async with aiohttp.ClientSession(timeout=timeout, ) as session:
            async with session.get(f"{API_URL}/get_scheduled_messages", params=payload) as responce:
                responce.raise_for_status()
                data = await responce.json()
                return data
    except aiohttp.ClientError:
        return []

async def get_club_members():
    timeout = aiohttp.ClientTimeout(10)
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.get(f"{API_URL}/get_club_members_by_page") as response:
                if response.status != 200:
                    return False
                return await response.json()
    except aiohttp.ClientError:
        return False

async def delete_expired_accesses(trail: bool = False):
    timeout = aiohttp.ClientTimeout(10)
    payload={"trail": trail}
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.delete(f"{API_URL}/expired_access", params=payload) as response:
                if response.status != 200:
                    return []
                return await response.json()
    except aiohttp.ClientError:
        return []

async def delete_row(table_name: str, row_id: int):
    timeout = aiohttp.ClientTimeout(total=10)
    payload = {"table_name": table_name, "row_id": row_id}
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session: 
            async with session.post(f"{API_URL}/delete_row", json=payload) as responce:
                return await responce.json()
    except aiohttp.ClientError:
        return 404

async def check_buddy_queue(telegram_user_id: int):
    timeout = aiohttp.ClientTimeout(total=10)
    payload = {"telegram_user_id": telegram_user_id}
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session: 
            async with session.get(f"{API_URL}/check_buddy_queue", params=payload) as responce:
                return await responce.json()
    except aiohttp.ClientError:
        return False

async def find_users_with_expiring_access(days: int, trail: bool = False):
    timeout = aiohttp.ClientTimeout(total=10)
    payload = {"days": days, "trail": trail}
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.get(f"{API_URL}/find_users_with_expiring_access", params=payload) as response:
                if response.status != 200:
                    return []
                return await response.json()
    except aiohttp.ClientError:
        return []

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

async def get_referal_token(telegram_user_id: int):
    timeout = aiohttp.ClientTimeout(total=10)
    payload = {"telegram_user_id": telegram_user_id}
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.get(f"{API_URL}/get_referal_token", params=payload) as response:
                if response.status != 200:
                    return False
                return await response.json()
    except aiohttp.ClientError:
        return False 

async def give_trail_access(telegram_user_id: int):
    timeout = aiohttp.ClientTimeout(total=10)
    payload = {"telegram_user_id": telegram_user_id}
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.post(f"{API_URL}/give_club_trail_access", params=payload) as response:
                if response.status != 200:
                    return False
                return await response.json()
    except aiohttp.ClientError:
        return False

async def try_to_add_token(token: str, telegram_user_id: int):
    timeout = aiohttp.ClientTimeout(total=10)
    payload = {"token": token, "telegram_user_id": telegram_user_id}
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.post(f"{API_URL}/try_to_add_token", params=payload) as response:
                if response.status != 200:
                    return False
                return await response.json()
    except aiohttp.ClientError:
        return False

async def check_referal_id(telegram_user_id: int):
    timeout = aiohttp.ClientTimeout(total=10)
    payload = {"telegram_user_id": telegram_user_id}
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.get(f"{API_URL}/check_referal_id", params=payload) as response:
                if response.status != 200:
                    return False
                return await response.json()
    except aiohttp.ClientError:
        return False

async def get_data_for_menu(telegram_user_id: int):
    timeout = aiohttp.ClientTimeout(total=10)
    payload = {"telegram_user_id": telegram_user_id}
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.get(f"{API_URL}/get_data_for_menu", params=payload) as response:
                if response.status != 200:
                    return False
                return await response.json()
    except aiohttp.ClientError:
        return False