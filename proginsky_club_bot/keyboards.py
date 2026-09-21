from aiogram.types import InlineKeyboardButton, InlineKeyboardMarkup

def courses_prices() -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(
        inline_keyboard=[
            [InlineKeyboardButton(text="1 месяц — 1 990 ₽", callback_data="buy_club_1")],
            [InlineKeyboardButton(text="3 месяца — 4 990 ₽", callback_data="buy_club_3")],
            [InlineKeyboardButton(text="6 месяцев — 8 990 ₽", callback_data="buy_club_6")],
        ]
    )

def to_menu() -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(inline_keyboard=[[InlineKeyboardButton(text="В меню", callback_data="to_menu")]])

def confirm_payment(month_count: str, external_amount: str | int | float) -> InlineKeyboardMarkup:
    amount = str(external_amount).replace(".00", "")
    button_text = f"Оплатить {amount} ₽" if float(external_amount) > 0 else "Оплатить с баланса"
    return InlineKeyboardMarkup(
        inline_keyboard=[
            [InlineKeyboardButton(text=button_text, callback_data=f"pay_club_{month_count}")],
            [InlineKeyboardButton(text="Изменить срок", callback_data="extend_access")],
            [InlineKeyboardButton(text="Назад", callback_data="club_subscription")],
        ]
    )

def club_menu() -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(
        inline_keyboard=[
            [InlineKeyboardButton(text="👤 Мой профиль", callback_data="club_profile")],
            [InlineKeyboardButton(text="🤝 Buddy", callback_data="club_buddy")],
            [InlineKeyboardButton(text="🏆 Челленджи", callback_data="club_challenges")],
            [InlineKeyboardButton(text="🎁 Пригласить друга", callback_data="show_referal_token")],
            [InlineKeyboardButton(text="💳 Подписка", callback_data="club_subscription")],
            [InlineKeyboardButton(text="❓ Помощь", callback_data="club_help")],
        ]
    )

def limited_mode_menu(has_referral: bool = False) -> InlineKeyboardMarkup:
    rows = [
        [InlineKeyboardButton(text="💳 Вернуться в клуб", callback_data="extend_access")],
        [InlineKeyboardButton(text="👤 Мой профиль", callback_data="club_profile")],
    ]
    if not has_referral:
        rows.append([InlineKeyboardButton(text="🎁 Ввести реферальный код", callback_data="enter_referal_token")])
    rows.extend([
        [InlineKeyboardButton(text="🎁 Пригласить друга", callback_data="show_referal_token")],
        [InlineKeyboardButton(text="❓ Помощь", callback_data="club_help")],
    ])
    return InlineKeyboardMarkup(inline_keyboard=rows)

def profile_menu(partner_status: bool = False) -> InlineKeyboardMarkup:
    rows = []
    if partner_status:
        rows.append([InlineKeyboardButton(text="Запросить вывод", callback_data="partner_withdrawal")])
    rows.append([InlineKeyboardButton(text="В меню", callback_data="to_menu")])
    return InlineKeyboardMarkup(inline_keyboard=rows)

def payment_button(payment_url: str) -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(
        inline_keyboard=[
            [InlineKeyboardButton(text="Перейти к оплате", url=payment_url)],
            [InlineKeyboardButton(text="В меню", callback_data="to_menu")],
        ]
    )

def add_trail_period(has_referral: bool = False) -> InlineKeyboardMarkup:
    rows = [
        [InlineKeyboardButton(text="Получить бесплатный месяц", callback_data="get_trail_period")],
    ]
    if not has_referral:
        rows.append([InlineKeyboardButton(text="🎁 Ввести реферальный код", callback_data="enter_referal_token")])
    return InlineKeyboardMarkup(inline_keyboard=rows)

def find_buddy_menu() -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(
        inline_keyboard=[
            [InlineKeyboardButton(text="Найти Buddy", callback_data="find_club_buddy")],
            [InlineKeyboardButton(text="В меню", callback_data="to_menu")],
        ]
    )

def buddy_active_menu() -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(
        inline_keyboard=[
            [InlineKeyboardButton(text="Остаться вместе", callback_data="buddy_decision_keep")],
            [InlineKeyboardButton(text="Новый Buddy", callback_data="buddy_decision_new")],
            [InlineKeyboardButton(text="Пауза", callback_data="buddy_decision_pause")],
            [InlineKeyboardButton(text="Buddy не отвечает", callback_data="buddy_nonresponse")],
            [InlineKeyboardButton(text="В меню", callback_data="to_menu")],
        ]
    )

def subscription_menu(has_recurring: bool = False) -> InlineKeyboardMarkup:
    rows = [
        [InlineKeyboardButton(text="Выбрать срок / продлить", callback_data="extend_access")],
    ]
    if has_recurring:
        rows.append([InlineKeyboardButton(text="Отменить автопродление", callback_data="cancel_recurring")])
    rows.append([InlineKeyboardButton(text="В меню", callback_data="to_menu")])
    return InlineKeyboardMarkup(inline_keyboard=rows)

def challenges_menu(challenges: list[dict]) -> InlineKeyboardMarkup:
    rows = []
    for challenge in challenges:
        suffix = " ✅" if challenge.get("joined") else ""
        rows.append([
            InlineKeyboardButton(
                text=f"{challenge['title']}{suffix}",
                callback_data=f"challenge_open_{challenge['id']}",
            )
        ])
    rows.append([InlineKeyboardButton(text="В меню", callback_data="to_menu")])
    return InlineKeyboardMarkup(inline_keyboard=rows)

def challenge_menu(challenge_id: int, joined: bool, submission_format: str, participation_mode: str = "solo") -> InlineKeyboardMarkup:
    rows = []
    if not joined:
        if participation_mode in {"solo", "both"}:
            rows.append([InlineKeyboardButton(text="Участвовать solo", callback_data=f"challenge_join_solo_{challenge_id}")])
        if participation_mode in {"team", "both"}:
            rows.append([InlineKeyboardButton(text="Участвовать командой", callback_data=f"challenge_join_team_{challenge_id}")])
    else:
        rows.append([InlineKeyboardButton(text="Сдать результат", callback_data=f"challenge_submit_{challenge_id}_{submission_format}")])
    rows.append([InlineKeyboardButton(text="К челленджам", callback_data="club_challenges")])
    return InlineKeyboardMarkup(inline_keyboard=rows)

def rejected_payment() -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(
        inline_keyboard=[
            [InlineKeyboardButton(text="Отменить оплату", callback_data="cancel_payment")],
            [InlineKeyboardButton(text="В меню", callback_data="to_menu")]
        ]
    )