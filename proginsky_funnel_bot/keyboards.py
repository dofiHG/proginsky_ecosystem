from aiogram.types import InlineKeyboardButton, InlineKeyboardMarkup

def download_guide() -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(inline_keyboard=[[InlineKeyboardButton(text="📋 Скачать гайд", callback_data="download_guide")],])

def go_to_club_bot() -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(inline_keyboard=[[InlineKeyboardButton(text="Попробовать бесплатно", url="https://t.me/ai_proginsky_bot")]])