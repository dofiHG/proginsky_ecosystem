import os
import httpx

MOODLE_BASE_URL = os.environ["MOODLE_BASE_URL"].rstrip("/")
MOODLE_REST_TOKEN = os.environ["MOODLE_REST_TOKEN"]
MOODLE_COURSE_ID = int(os.getenv("MOODLE_COURSE_ID", "2"))
MOODLE_ROLE_ID = int(os.getenv("MOODLE_ROLE_ID", "5"))


async def moodle_call(function: str, data: dict | None = None):
    payload = {
        "wstoken": MOODLE_REST_TOKEN,
        "wsfunction": function,
        "moodlewsrestformat": "json",
    }

    if data:
        payload.update(data)

    async with httpx.AsyncClient(timeout=30.0) as client:
        response = await client.post(
            f"{MOODLE_BASE_URL}/webservice/rest/server.php",
            data=payload,
        )

    response.raise_for_status()
    result = response.json()

    if isinstance(result, dict) and result.get("exception"):
        raise RuntimeError(
            f"Moodle {function}: {result.get('message') or result.get('errorcode')}"
        )

    return result


async def check_moodle() -> dict:
    return await moodle_call("core_webservice_get_site_info")


async def ensure_moodle_access(user: dict) -> dict:
    email = str(user.get("email") or "").strip().lower()

    if not email:
        raise RuntimeError("У пользователя отсутствует email для Moodle")

    users = await moodle_call(
        "core_user_get_users_by_field",
        {
            "field": "email",
            "values[0]": email,
        },
    )

    created = False

    if users:
        moodle_user = users[0]
    else:
        name = str(user.get("name") or "").strip()
        parts = name.split(maxsplit=1)

        firstname = parts[0] if parts else "Пользователь"
        lastname = parts[1] if len(parts) > 1 else "Прогинский"
        username = f"proginsky_{int(user['user_id'])}"

        created_users = await moodle_call(
            "core_user_create_users",
            {
                "users[0][username]": username,
                "users[0][firstname]": firstname,
                "users[0][lastname]": lastname,
                "users[0][email]": email,
                "users[0][createpassword]": 1,
            },
        )

        if not created_users:
            raise RuntimeError("Moodle не вернул созданного пользователя")

        moodle_user = created_users[0]
        created = True

    moodle_user_id = int(moodle_user["id"])

    await moodle_call(
        "enrol_manual_enrol_users",
        {
            "enrolments[0][roleid]": MOODLE_ROLE_ID,
            "enrolments[0][userid]": moodle_user_id,
            "enrolments[0][courseid]": MOODLE_COURSE_ID,
        },
    )

    return {
        "id": moodle_user_id,
        "username": moodle_user.get("username"),
        "created": created,
    }
