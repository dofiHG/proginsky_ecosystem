from aiogram import Router, F
from aiogram.filters import Command, CommandStart, CommandObject
from aiogram.types import Message, FSInputFile, CallbackQuery
from keyboards import admin_menu, all_users_pages, task_menu, message_menu, show_messages_menu, edit_message_menu
from api_client import get_users, create_task, get_current_task, update_current_task, add_new_message, get_scheduled_messages, update_scheduled_message
from edit_bot_text import edit_message
from aiogram.fsm.state import State, StatesGroup
from aiogram.fsm.context import FSMContext
import os
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
from datetime import datetime
from zoneinfo import ZoneInfo

router = Router()
admins = {int(admin_id) for admin_id in os.getenv("ADMIN_IDS", "").split(",") if admin_id.strip()}
TIME_ZONE = ZoneInfo("Europe/Moscow")
FILES_PATH = Path("/opt/proginsky_ecosystem/proginsky_storage")

class AdminUsersState(StatesGroup):
    browsing_users = State()
    waiting_new_task = State()
    waiting_edit_task = State()
    waiting_message_text = State()
    waiting_message_time = State()
    waiting_edit_message_text = State()
    waiting_edit_message_time = State()

@router.message(CommandStart())
async def start_handler(message: Message, command: CommandObject) -> None:
    if message.from_user.id not in admins:
        return
    await message.answer("Админ-панель", reply_markup=admin_menu())

@router.callback_query(F.data == "get_all_users_by_page")
async def get_all_users_by_page(callback: CallbackQuery, state: FSMContext):
    await state.set_state(AdminUsersState.browsing_users)
    await state.update_data(users_type="all_users")
    await show_users(callback, state, page=0)

@router.callback_query(F.data == "get_club_members")
async def get_club_members(callback: CallbackQuery, state: FSMContext):
    await state.set_state(AdminUsersState.browsing_users)
    await state.update_data(users_type="club_members")
    await show_users(callback, state, page=0)

async def show_users(callback: CallbackQuery, state: FSMContext, page: int = 0):
    limit = 10
    offset = limit * page
    data = await state.get_data()
    users_type = data.get("users_type")
    current_page_users = await get_users(limit, offset, users_type)
    if current_page_users == []:
        await edit_message(callback.message, "Пользователей нет!", reply_markup=admin_menu())
        return
    total_count = current_page_users[0]["total_count"]
    pages_count = (total_count + limit - 1) // limit
    text = f"Страница {page + 1}/{pages_count}\n\n"
    for user in current_page_users:
        text += f"Имя: {user['name']}\n"
        text += f"Email: {user['email']}\n"
        text += f"Telegram ID: {user['telegram_user_id']}\n"
        text += f"Username: @{user['telegram_username']}\n"
        text += f"Телефон: {user['phone_number']}\n"
        if (users_type == "all_users"):
            text += f"Дата регистрации: {user['created_at']}\n\n"
        else:
            text += f"Тариф: {user['product_name']}\n"
            text += f"Старт подписки: {user['starts_at']}\n"
            text += f"Конец подписки: {user['expires_at']}\n\n"
    await edit_message(callback.message, text, reply_markup=all_users_pages(page, pages_count),)

@router.callback_query(AdminUsersState.browsing_users, F.data.startswith("users_page_"))
async def users_page(callback: CallbackQuery, state: FSMContext):
    page = int(callback.data.replace("users_page_", ""))
    await show_users(callback, state, page)

@router.callback_query(F.data == "admin_menu")
async def back_to_admin_menu(callback: CallbackQuery):
    await edit_message(callback.message, "Админ-панель", reply_markup=admin_menu())

@router.callback_query(F.data == "month_task")
async def month_task(callback: CallbackQuery):
    await edit_message(callback.message, "Выберите действие", reply_markup=task_menu())

@router.callback_query(F.data == "create_new_task")
async def create_new_task(callback: CallbackQuery, state: FSMContext):
    await state.set_state(AdminUsersState.waiting_new_task)
    await edit_message(callback.message, "Отправьте текст задания и прикрепите файл")

@router.callback_query(F.data == "edit_current_task")
async def edit_current_task(callback: CallbackQuery, state: FSMContext):
    await state.set_state(AdminUsersState.waiting_edit_task)
    current_task = await get_current_task(0)
    TASK_PATH = Path("/opt/proginsky_ecosystem/proginsky_storage/task")
    files = [file for file in TASK_PATH.iterdir() if file.is_file()]
    file = files[0] if files else None
    await edit_message(callback.message, "Отправьте новое задание и файл\nТекущее задание:\n\n" + current_task["text"], reply_markup=admin_menu(), file=file)

@router.message(AdminUsersState.waiting_new_task)
async def receive_new_task(message: Message, state: FSMContext):
    if message.from_user.id not in admins:
        return
    if not message.document:
        await message.answer("Прикрепите файл к заданию")
        return
    text = ""
    if message.text or message.caption:
        text = message.caption or message.text
    file_id = message.document.file_id
    file_type = "document"
    await create_task(text=text, file_id=file_id, file_type=file_type)
    await state.clear()
    await message.answer("Успешно!", reply_markup=task_menu())

@router.message(AdminUsersState.waiting_edit_task)
async def edit_task(message: Message, state: FSMContext):
    file_id = None
    file_type = None
    text = ""
    if message.from_user.id not in admins:
        return
    if message.text or message.caption:
        text = message.caption or message.text
    if message.document:
        file_id = message.document.file_id
        file_type = "document"
    current_task = await get_current_task(0)
    await update_current_task(text, file_id, file_type, current_task["id"])
    await message.answer("Успешно!", reply_markup=task_menu())
    await state.clear()

@router.callback_query(F.data == "task_download")
async def task_download(callback: CallbackQuery):
    DATA_PATH = Path("/opt/proginsky_ecosystem/proginsky_storage/answers")
    ZIP_PATH = Path("/opt/proginsky_ecosystem/proginsky_storage/task_answers.zip")
    files = [file for file in DATA_PATH.iterdir() if file.is_file()]
    with ZipFile(ZIP_PATH, "w", ZIP_DEFLATED) as zip_file:
        for file in files:
            zip_file.write(file, arcname=file.name)
    document = FSInputFile(ZIP_PATH, filename="task_answers.zip")
    await callback.message.answer_document(document=document, caption=f"Ответы на задания: {len(files)} файлов")
    ZIP_PATH.unlink(missing_ok=True)

@router.callback_query(F.data == "messages_menu")
async def open_message_menu(callback: CallbackQuery):
    await edit_message(callback.message, "Выберите действие", reply_markup=message_menu())

@router.callback_query(F.data == "message_to_all")
async def message_to_all(callback: CallbackQuery, state: FSMContext):
    await state.clear()
    await edit_message(callback.message, "Введите сообщение для всех, здесь можно прикрепить фото/документ")
    await state.set_state(AdminUsersState.waiting_message_text)
    await state.update_data(auditory_type="all_users")

@router.callback_query(F.data == "message_to_club")
async def message_to_club(callback: CallbackQuery, state: FSMContext):
    await state.clear()
    await edit_message(callback.message, "Введите сообщение для членов клуба, здесь можно прикрепить фото/документ")
    await state.set_state(AdminUsersState.waiting_message_text)
    await state.update_data(auditory_type="club_members")

@router.message(AdminUsersState.waiting_message_text)
async def save_message(message: Message, state: FSMContext):
    text = message.text or message.caption
    document_id = None
    document_type = None
    extension = None
    if message.document:
        document_id = message.document.file_id
        extension = Path(message.document.file_name).suffix if message.document.file_name else ""
        document_type = "document"
    elif message.photo:
        document_id = message.photo[-1].file_id
        extension = ".jpg"
        document_type = "photo"
    await state.update_data(message_text=text, document_id=document_id, extension=extension, document_type=document_type)
    await message.answer("Теперь введите время в формате число.месяц.год часы:минуты")
    await state.set_state(AdminUsersState.waiting_message_time)

@router.message(AdminUsersState.waiting_message_time)
async def set_message_time(message: Message, state: FSMContext):
    try:
        send_time = datetime.strptime(message.text.strip(), "%d.%m.%Y %H:%M")
        send_time = send_time.replace(tzinfo=TIME_ZONE)
        data = await state.get_data()
        document_id = data.get("document_id")
        document_type = data.get("document_type")
        if data.get("document_id"):
            document_path = FILES_PATH / "scheduled_files" / f'{document_id}{data["extension"]}'
            await message.bot.download(data["document_id"], destination=document_path)
        result = await add_new_message(data["message_text"], data["auditory_type"], send_time, data["document_id"], document_type)
        if not result:
            raise Exception("Не удалось сохранить сообщение")
        await message.answer("Успешно!", reply_markup=admin_menu())
        await state.clear()
    except:
        await message.answer("Произошла ошибка!", reply_markup=admin_menu())
        await state.clear()

@router.callback_query(F.data == "show_scheduled_messages")
async def show_scheduled_messages(callback: CallbackQuery):
    messages = await get_scheduled_messages()
    if not messages:
        await edit_message(callback.message, "Запланированных сообщений нет", reply_markup=message_menu())
        return
    await edit_message(callback.message, "Выберите сообщение", reply_markup=show_messages_menu(messages))

@router.callback_query(F.data.startswith("scheduled_message:"))
async def show_specific_message(callback: CallbackQuery, state: FSMContext):
    await state.clear()
    messages = await get_scheduled_messages(scheduled_message_id=int(callback.data.split(":")[1]))
    if not messages:
        await edit_message(callback.message, "Сообщение не найдено", reply_markup=message_menu())
        return
    message = messages[0]
    await state.update_data(scheduled_message_id=message["id"], document_id=message.get("document_id"))
    text = f'id: {message["id"]}\n\n{message["text"] or ""}\n\nВремя отправки: {message["send_time"]}\nАудитория: {message["auditory_type"]}'
    if message.get("document_id"):
        document_path = next((FILES_PATH / "scheduled_files").glob(f'{message["document_id"]}.*'), None)
        if document_path is None:
            await edit_message(callback.message, f"{text}\n\nФайл не найден", reply_markup=edit_message_menu())
            return
        if message["document_type"] == "photo":
            await edit_message(callback.message, text=text, photo=document_path, reply_markup=edit_message_menu())
        elif message["document_type"] == "document":
            await edit_message(callback.message, text=text, file=document_path, reply_markup=edit_message_menu())
        return
    await edit_message(callback.message, text, reply_markup=edit_message_menu())

@router.callback_query(F.data == "edit_scheduled_message_text")
async def edit_scheduled_message_text(callback: CallbackQuery, state: FSMContext):
    await edit_message(callback.message, "Введите новый текст сообщения, здесь можно прикрепить фото/документ")
    await state.set_state(AdminUsersState.waiting_edit_message_text)

@router.message(AdminUsersState.waiting_edit_message_text)
async def save_scheduled_message_text(message: Message, state: FSMContext):
    data = await state.get_data()
    text = message.text or message.caption
    old_document_id = data.get("document_id")
    document_id = None
    document_type = None
    extension = None
    try:
        if message.document:
            document_id = message.document.file_id
            extension = Path(message.document.file_name).suffix if message.document.file_name else ""
            document_type = "document"
        elif message.photo:
            document_id = message.photo[-1].file_id
            extension = ".jpg"
            document_type = "photo"
        if document_id:
            document_path = FILES_PATH / "scheduled_files" / f"{document_id}{extension}"
            await message.bot.download(document_id, destination=document_path)
        result = await update_scheduled_message(data["scheduled_message_id"], message_text=text, document_id=document_id, document_type=document_type)
        if not result:
            raise Exception("Не удалось изменить сообщение")
        if document_id and old_document_id and document_id != old_document_id:
            old_files = (FILES_PATH / "scheduled_files").glob(f"{old_document_id}.*")
            for old_file in old_files:
                old_file.unlink()
        await state.clear()
        await message.answer("Сообщение изменено", reply_markup=message_menu())
    except:
        await message.answer("Произошла ошибка!", reply_markup=message_menu())

@router.callback_query(F.data == "edit_scheduled_message_time")
async def edit_scheduled_message_time(callback: CallbackQuery, state: FSMContext):
    await edit_message(callback.message, "Введите новое время в формате число.месяц.год часы:минуты")
    await state.set_state(AdminUsersState.waiting_edit_message_time)

@router.message(AdminUsersState.waiting_edit_message_time)
async def save_scheduled_message_time(message: Message, state: FSMContext):
    try:
        send_time = datetime.strptime(message.text.strip(), "%d.%m.%Y %H:%M")
        send_time = send_time.replace(tzinfo=TIME_ZONE)
        data = await state.get_data()
        await update_scheduled_message(data["scheduled_message_id"], send_time=send_time)
        await state.clear()
        await message.answer("Время отправки изменено", reply_markup=message_menu())
    except:
        await message.answer("Неверный формат времени")