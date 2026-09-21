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
    payload={"trail": str(trail).lower()}
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

async def give_trail_access(telegram_user_id: int, invite_link: str):
    timeout = aiohttp.ClientTimeout(total=10)
    payload = {"telegram_user_id": telegram_user_id, "invite_link": invite_link}
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
async def get_club_state(telegram_user_id: int):
    timeout = aiohttp.ClientTimeout(total=10)
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.get(f"{API_URL}/club_state", params={"telegram_user_id": telegram_user_id}) as response:
                if response.status != 200:
                    return None
                return await response.json()
    except aiohttp.ClientError:
        return None

async def get_club_plans():
    timeout = aiohttp.ClientTimeout(total=10)
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.get(f"{API_URL}/club_plans") as response:
                if response.status != 200:
                    return []
                return await response.json()
    except aiohttp.ClientError:
        return []

async def get_checkout_preview(telegram_user_id: int, tariff_slug: str):
    timeout = aiohttp.ClientTimeout(total=10)
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.get(
                f"{API_URL}/club_checkout_preview",
                params={"telegram_user_id": telegram_user_id, "tariff_slug": tariff_slug},
            ) as response:
                if response.status != 200:
                    return None
                return await response.json()
    except aiohttp.ClientError:
        return None

async def create_club_checkout(telegram_user_id: int, tariff_slug: str, recurring_requested: bool = False):
    timeout = aiohttp.ClientTimeout(total=10)
    payload = {
        "telegram_user_id": telegram_user_id,
        "tariff_slug": tariff_slug,
        "recurring_requested": recurring_requested,
    }
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.post(f"{API_URL}/club_checkout_create", json=payload) as response:
                if response.status not in (200, 201):
                    return None
                return await response.json()
    except aiohttp.ClientError:
        return None

async def get_buddy_data(telegram_user_id: int):
    timeout = aiohttp.ClientTimeout(total=10)
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.get(f"{API_URL}/get_buddy_data", params={"telegram_user_id": telegram_user_id}) as response:
                if response.status != 200:
                    return {"status": "none"}
                return await response.json()
    except aiohttp.ClientError:
        return {"status": "none"}

async def send_buddy_decision(telegram_user_id: int, decision: str):
    timeout = aiohttp.ClientTimeout(total=10)
    payload = {"telegram_user_id": telegram_user_id, "decision": decision}
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.post(f"{API_URL}/buddy_decision", json=payload) as response:
                return response.status == 200 and await response.json()
    except aiohttp.ClientError:
        return False

async def report_buddy_nonresponse(telegram_user_id: int):
    timeout = aiohttp.ClientTimeout(total=10)
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.post(f"{API_URL}/buddy_nonresponse", params={"telegram_user_id": telegram_user_id}) as response:
                return response.status == 200 and await response.json()
    except aiohttp.ClientError:
        return False

async def process_buddy_cycles():
    timeout = aiohttp.ClientTimeout(total=20)
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.post(f"{API_URL}/process_buddy_cycles") as response:
                if response.status != 200:
                    return []
                return await response.json()
    except aiohttp.ClientError:
        return []

async def get_challenges(telegram_user_id: int):
    timeout = aiohttp.ClientTimeout(total=10)
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.get(f"{API_URL}/challenges", params={"telegram_user_id": telegram_user_id}) as response:
                if response.status != 200:
                    return []
                return await response.json()
    except aiohttp.ClientError:
        return []

async def join_challenge(telegram_user_id: int, challenge_id: int, mode: str = "solo", teammate_telegram_user_id: int | None = None):
    timeout = aiohttp.ClientTimeout(total=10)
    payload = {"telegram_user_id": telegram_user_id, "challenge_id": challenge_id, "mode": mode, "teammate_telegram_user_id": teammate_telegram_user_id}
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.post(f"{API_URL}/challenge_join", json=payload) as response:
                if response.status != 200:
                    return None
                return await response.json()
    except aiohttp.ClientError:
        return None

async def submit_challenge(telegram_user_id: int, challenge_id: int, submission_type: str, payload_value: str):
    timeout = aiohttp.ClientTimeout(total=15)
    payload = {
        "telegram_user_id": telegram_user_id,
        "challenge_id": challenge_id,
        "submission_type": submission_type,
        "payload": payload_value,
    }
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.post(f"{API_URL}/challenge_submit", json=payload) as response:
                if response.status != 200:
                    try:
                        error = await response.json()
                        return {"ok": False, "error": error.get("detail")}
                    except Exception:
                        return {"ok": False, "error": "submission_failed"}
                return await response.json()
    except aiohttp.ClientError:
        return {"ok": False, "error": "api_unavailable"}

async def cancel_recurring(telegram_user_id: int):
    timeout = aiohttp.ClientTimeout(total=10)
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.post(f"{API_URL}/club_cancel_recurring", params={"telegram_user_id": telegram_user_id}) as response:
                return response.status == 200 and await response.json()
    except aiohttp.ClientError:
        return False

async def get_reactivation_users(days: int):
    timeout = aiohttp.ClientTimeout(total=10)
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.get(f"{API_URL}/reactivation_users", params={"days": days}) as response:
                if response.status != 200:
                    return []
                return await response.json()
    except aiohttp.ClientError:
        return []

async def create_partner_withdrawal(telegram_user_id: int, amount: float, details: dict):
    timeout = aiohttp.ClientTimeout(total=10)
    payload = {"telegram_user_id": telegram_user_id, "amount": amount, "details": details}
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.post(f"{API_URL}/partner_withdrawal", json=payload) as response:
                if response.status != 200:
                    return {"ok": False, "error": "request_failed"}
                return await response.json()
    except aiohttp.ClientError:
        return {"ok": False, "error": "api_unavailable"}

async def release_stale_club_payments(hours: int = 24):
    timeout = aiohttp.ClientTimeout(total=20)
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.post(f"{API_URL}/release_stale_club_payments", params={"hours": hours}) as response:
                if response.status != 200:
                    return []
                return await response.json()
    except aiohttp.ClientError:
        return []

async def get_pending_payment_success_notifications(limit: int = 20) -> list[dict]:
    timeout = aiohttp.ClientTimeout(total=10)
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.get(f"{API_URL}/club_payment_notifications/pending", params={"limit": limit},) as response:
                if response.status != 200:
                    return []
                return await response.json()
    except aiohttp.ClientError as error:
        print(f"Не удалось получить payment-success уведомления: {error}", flush=True)
        return []

async def mark_payment_success_notification_sent(order_id: int) -> bool:
    timeout = aiohttp.ClientTimeout(total=10)
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.post(f"{API_URL}/club_payment_notifications/{order_id}/sent") as response:
                if response.status != 200:
                    body = await response.text()
                    print(f"Не удалось отметить payment-success {order_id} отправленным: " f"HTTP {response.status}, body={body}", flush=True,)
                    return False
                return True
    except aiohttp.ClientError as error:
        print(f"Не удалось отметить payment-success {order_id} отправленным: {error}", flush=True)
        return False

async def fail_payment_success_notification(order_id: int, error: str) -> bool:
    timeout = aiohttp.ClientTimeout(total=10)
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.post(f"{API_URL}/club_payment_notifications/{order_id}/failed", json={"error": str(error)},) as response:
                return response.status == 200
    except aiohttp.ClientError as request_error:
        print(f"Не удалось вернуть payment-success {order_id} в pending: {request_error}", flush=True,)
        return False

async def release_stuck_payment_success_notifications() -> int:
    timeout = aiohttp.ClientTimeout(total=10)
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.post(f"{API_URL}/club_payment_notifications/release_stuck") as response:
                if response.status != 200:
                    return 0
                payload = await response.json()
                return int(payload.get("released") or 0)
    except (aiohttp.ClientError, ValueError, TypeError):
        return 0

async def cancel_last_payment(telegram_user_id: int):
    timeout = aiohttp.ClientTimeout(total=10)
    payload = {"telegram_user_id": telegram_user_id}
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.post(f"{API_URL}/cancel_last_payment", params=payload) as response:
                if response.status != 200:
                    return False
                return await response.json()
    except (aiohttp.ClientError, ValueError, TypeError):
        return False

async def save_payment_success_invite_link(order_id: int, invite_link: str):
    timeout = aiohttp.ClientTimeout(total=10)
    payload = {"invite_link": invite_link}
    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.post(
                f"{API_URL}/club_payment_notifications/{order_id}/invite",
                json=payload,
            ) as response:
                if response.status != 200:
                    return None
                return await response.json()
    except aiohttp.ClientError:
        return None