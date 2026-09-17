from aiogram.types import InlineKeyboardButton, InlineKeyboardMarkup

def admin_menu() -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(
            inline_keyboard=[
                [InlineKeyboardButton(text="Пользователи", callback_data="get_all_users_by_page")],
                [InlineKeyboardButton(text="Клиенты", callback_data="get_club_members")],
                [InlineKeyboardButton(text="Задание за месяц", callback_data="month_task")],
                [InlineKeyboardButton(text="Скачать ответы на задание", callback_data="task_download")],
                [InlineKeyboardButton(text="Сообщения", callback_data="messages_menu")],
            ]
        )

def message_menu() -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(
        inline_keyboard=[
            [InlineKeyboardButton(text="Сообщение всем", callback_data="message_to_all")],
            [InlineKeyboardButton(text="Сообщение клубу", callback_data="message_to_club")],
            [InlineKeyboardButton(text="Запланированные сообщения", callback_data="show_scheduled_messages")],
            [InlineKeyboardButton(text="В меню", callback_data="admin_menu")],
        ]
    )

def show_messages_menu(messages: dict) -> InlineKeyboardMarkup:
    inline_keyboard=[]
    for message in messages:
        inline_keyboard.append([InlineKeyboardButton(text=message["text"], callback_data=f"scheduled_message:{message['id']}")])
    return InlineKeyboardMarkup(inline_keyboard=inline_keyboard)

def edit_message_menu() -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(
        inline_keyboard=[
            [InlineKeyboardButton(text="Редактировать текст", callback_data="edit_scheduled_message_text")],
            [InlineKeyboardButton(text="Редактировать время", callback_data="edit_scheduled_message_time")],
            [InlineKeyboardButton(text="Удалить", callback_data="delete_message")],
            [InlineKeyboardButton(text="В меню", callback_data="messages_menu")],
        ]
    )

def task_menu() -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(
        inline_keyboard=[
            [InlineKeyboardButton(text="Создать новое задание", callback_data="create_new_task")],
            [InlineKeyboardButton(text="Редактировать задание на месяц", callback_data="edit_current_task")],
            [InlineKeyboardButton(text="В меню", callback_data="admin_menu")],
        ]
    )

def all_users_pages(page: int, pages_count: int) -> InlineKeyboardMarkup:
    keyboard = []
    buttons = []
    if page > 0:
        buttons.append(
            InlineKeyboardButton(text="⬅️", callback_data=f"users_page_{page - 1}"))
    if page < pages_count - 1:
        buttons.append(InlineKeyboardButton(text="➡️", callback_data=f"users_page_{page + 1}"))
    if buttons:
        keyboard.append(buttons)
    keyboard.append([
        InlineKeyboardButton(text="В меню", callback_data="admin_menu")])
    return InlineKeyboardMarkup(inline_keyboard=keyboard)
