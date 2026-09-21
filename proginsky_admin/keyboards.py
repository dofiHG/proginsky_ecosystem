from aiogram.types import InlineKeyboardButton, InlineKeyboardMarkup


def admin_menu() -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(
        inline_keyboard=[
            [InlineKeyboardButton(text="Пользователи", callback_data="get_all_users_by_page")],
            [InlineKeyboardButton(text="Клиенты", callback_data="get_club_members")],
            [InlineKeyboardButton(text="Карточка пользователя", callback_data="admin_user_card")],
            [InlineKeyboardButton(text="Выводы партнёров", callback_data="admin_withdrawals")],
            [InlineKeyboardButton(text="Челленджи", callback_data="admin_challenges")],
            [InlineKeyboardButton(text="Задание за месяц", callback_data="month_task")],
            [InlineKeyboardButton(text="Скачать ответы на задание", callback_data="task_download")],
            [InlineKeyboardButton(text="Сообщения", callback_data="messages_menu")],
        ]
    )


def user_card_menu(partner_status: bool = False, blocked: bool = False) -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(
        inline_keyboard=[
            [InlineKeyboardButton(text="+ N дней доступа", callback_data="admin_access_days")],
            [InlineKeyboardButton(text="Выдать lifetime", callback_data="admin_access_lifetime")],
            [InlineKeyboardButton(text="Изменить internal balance", callback_data="admin_balance")],
            [InlineKeyboardButton(text="Реферальная ставка", callback_data="admin_referral_rate")],
            [InlineKeyboardButton(text="Выдать Reward", callback_data="admin_reward")],
            [InlineKeyboardButton(text="Отключить Partner" if partner_status else "Сделать Partner", callback_data="admin_toggle_partner")],
            [InlineKeyboardButton(text="Разблокировать" if blocked else "Заблокировать", callback_data="admin_toggle_block")],
            [InlineKeyboardButton(text="В меню", callback_data="admin_menu")],
        ]
    )


def confirm_admin_action() -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(
        inline_keyboard=[
            [InlineKeyboardButton(text="Подтвердить", callback_data="admin_confirm_action")],
            [InlineKeyboardButton(text="Отмена", callback_data="admin_cancel_action")],
        ]
    )


def withdrawal_menu(withdrawal_id: int) -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(
        inline_keyboard=[
            [InlineKeyboardButton(text="Отметить paid", callback_data=f"withdrawal_paid_{withdrawal_id}")],
            [InlineKeyboardButton(text="Отклонить", callback_data=f"withdrawal_rejected_{withdrawal_id}")],
            [InlineKeyboardButton(text="К списку", callback_data="admin_withdrawals")],
        ]
    )


def withdrawals_list_menu(withdrawals: list[dict]) -> InlineKeyboardMarkup:
    rows = []
    for item in withdrawals:
        label = f"#{item['id']} · {item['amount']} ₽ · {item.get('telegram_username') or item.get('telegram_user_id')}"
        rows.append([InlineKeyboardButton(text=label, callback_data=f"withdrawal_open_{item['id']}")])
    rows.append([InlineKeyboardButton(text="В меню", callback_data="admin_menu")])
    return InlineKeyboardMarkup(inline_keyboard=rows)


def challenges_admin_menu() -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(
        inline_keyboard=[
            [InlineKeyboardButton(text="Создать челлендж", callback_data="admin_create_challenge")],
            [InlineKeyboardButton(text="В меню", callback_data="admin_menu")],
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
    inline_keyboard = []
    for message in messages:
        inline_keyboard.append([InlineKeyboardButton(text=message["text"], callback_data=f"scheduled_message:{message['id']}")])
    inline_keyboard.append([InlineKeyboardButton(text="В меню", callback_data="messages_menu")])
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
        buttons.append(InlineKeyboardButton(text="⬅️", callback_data=f"users_page_{page - 1}"))
    if page < pages_count - 1:
        buttons.append(InlineKeyboardButton(text="➡️", callback_data=f"users_page_{page + 1}"))
    if buttons:
        keyboard.append(buttons)
    keyboard.append([InlineKeyboardButton(text="В меню", callback_data="admin_menu")])
    return InlineKeyboardMarkup(inline_keyboard=keyboard)
