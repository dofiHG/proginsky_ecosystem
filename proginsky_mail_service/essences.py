from pydantic import BaseModel

class MailMessage(BaseModel):
    telegram_user_id: int
    text: str | None = None
    file_id: str | None = None