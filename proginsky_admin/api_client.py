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