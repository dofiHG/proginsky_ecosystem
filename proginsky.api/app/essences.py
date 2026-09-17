from pydantic import BaseModel, EmailStr, Field
from datetime import datetime

class User(BaseModel):
    name: str
    email: str | None = None
    phone: str

class TelegramChainUser(BaseModel):
    token: str | None = None
    telegram_user_id: int
    telegram_username: str | None = None

class CreatePaymentRequest(BaseModel):
    telegram_user_id: int
    tariff_slug: str

class WebCheckoutRequest(BaseModel):
    course: str | None = None
    course_slug: str | None = None
    tariff: str | None = None
    tariff_slug: str | None = None
    first_name: str
    last_name: str = ""
    email: EmailStr
    phone: str
    promo_code: str | None = None
    source: str | None = None

class CreateUdateTask(BaseModel):
    text: str | None = None
    file_id: str | None = None
    file_type: str | None = None
    id: int | None = None

class TaskAnswer(BaseModel):
    telegram_user_id: int
    file_id: str

class NewMessage(BaseModel):
    message_text: str | None = None
    auditory_type: str
    send_time: datetime
    document_id: str | None = None
    document_type: str | None = None

class EditedMessage(BaseModel):
    message_id: int
    message_text: str | None = None
    send_time: datetime | None = None
    document_id: str | None = None
    document_type: str | None = None

class RowToDelete(BaseModel):
    table_name: str
    row_id: int

class MoodleCoursePurchase(BaseModel):
    email: str
    course_slug: str
    tariff_slug: str
    payment_id: str