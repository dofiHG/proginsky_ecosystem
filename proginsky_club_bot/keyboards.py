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

def confirm_payment(month_count: str, price: int) -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(
        inline_keyboard=[
            [InlineKeyboardButton(text=f"Оплатить {price} ₽", callback_data=f"pay_club_{month_count}")],
            [InlineKeyboardButton(text=f"Изменить тариф", callback_data="extend_access")]
        ]
    )

def club_menu() -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(
        inline_keyboard=[
            [InlineKeyboardButton(text="👤 Мой профиль", callback_data="club_profile")],
            [InlineKeyboardButton(text="🤝 Buddy", callback_data="club_buddy")],
            [InlineKeyboardButton(text="🏆 Челленджи", callback_data="club_challenges")],
            [InlineKeyboardButton(text="👥 Пригласить друга", callback_data="show_referal_token")],
            [InlineKeyboardButton(text="💳 Подписка", callback_data="club_subscription")],
            [InlineKeyboardButton(text="❓ Помощь", callback_data="club_help")]
        ]
    )

def payment_button(payment_url: str) -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(inline_keyboard=[[InlineKeyboardButton(text="Перейти к оплате", url=payment_url)],])

def add_trail_period() -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(inline_keyboard=[[InlineKeyboardButton(text="Получить бесплатный месяц", callback_data="get_trail_period")]])