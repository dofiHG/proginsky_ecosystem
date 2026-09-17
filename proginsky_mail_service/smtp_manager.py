import os
import mimetypes
import aiosmtplib
from pathlib import Path
from email.message import EmailMessage

SMTP_SERVER = os.getenv("SMTP_SERVER")
SMTP_SECURE = os.getenv("SMTP_SECURE")
SMTP_USER = os.getenv("SMTP_USER")
SMTP_PASS = os.getenv("SMTP_PASS")
SMTP_HOST, SMTP_PORT = SMTP_SERVER.rsplit(":", 1)
SMTP_PORT = int(SMTP_PORT)
FILES_PATH = Path("/opt/proginsky_ecosystem/proginsky_storage")

async def send_email(email: str, text: str | None = None, file_id: str | None = None):
    message = EmailMessage()
    message["From"] = SMTP_USER
    message["To"] = email
    message["Subject"] = '"Прогинский" школа программирования и ИИ для детей и взрослых'
    message.set_content(text or "")
    if file_id:
        file_path = next(FILES_PATH.rglob(f"{file_id}.*"), None)
        if file_path:
            mime_type, _ = mimetypes.guess_type(file_path)
            if mime_type:
                maintype, subtype = mime_type.split("/", 1)
            else:
                maintype = "application"
                subtype = "octet-stream"
            with open(file_path, "rb") as file:
                message.add_attachment(file.read(), maintype=maintype, subtype=subtype, filename=file_path.name)
    await aiosmtplib.send(message, hostname=SMTP_HOST, port=SMTP_PORT, username=SMTP_USER, password=SMTP_PASS, use_tls=SMTP_SECURE == "SSL")
    return True
