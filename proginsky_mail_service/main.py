from fastapi import FastAPI
from essences import MailMessage
from db_manager import get_user_email
from smtp_manager import send_email
from contextlib import asynccontextmanager
from db_manager import connect_db, close_db, get_user_email

@asynccontextmanager
async def lifespan(app: FastAPI):
    await connect_db()
    yield
    await close_db()

app = FastAPI(lifespan=lifespan)

@app.post("/send_email")
async def send_email_api(data: MailMessage):
    email = await get_user_email(data.telegram_user_id)
    if not email:
        return False
    return await send_email(email=email, text=data.text, file_id=data.file_id)