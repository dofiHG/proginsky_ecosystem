from aiogram import Router, F
from aiogram.filters import Command, CommandStart, CommandObject
from aiogram.types import Message, FSInputFile, CallbackQuery
from keyboards import add_trail_period, courses_prices, payment_button, club_menu, to_menu, confirm_payment
from api_client import get_data_for_menu, try_to_add_token, check_referal_id, give_trail_access, create_payment, check_access_user, buddy_request, pass_the_task_request, check_task_answer, chesk_buddy_existing, get_current_task, check_buddy_queue, get_referal_token
from edit_bot_text import edit_message
from aiogram.fsm.state import State, StatesGroup
from aiogram.fsm.context import FSMContext
from pathlib import Path
from datetime import datetime

router = Router()

class UsersState(StatesGroup):
    waiting_task_answer = State()
    waiting_referal_token = State()

async def get_club_menu(telegram_user_id: int):
    has_passed_task = await check_task_answer(telegram_user_id)
    has_buddy = await chesk_buddy_existing(telegram_user_id)
    is_in_queue = await check_buddy_queue(telegram_user_id)
    has_referal_id = await check_referal_id(telegram_user_id)
    return club_menu(has_buddy, has_passed_task, is_in_queue, has_referal_id)

@router.message(CommandStart())
async def start_handler(message: Message, command: CommandObject) -> None:
    telegram_user_id = message.from_user.id
    has_access = await check_access_user(telegram_user_id)
    if not has_access:
        await message.answer("Добро пожаловать в ИИ-клуб «Прогинский» 👋\n\nВы можете бесплатно пользоваться клубом 30 дней и посмотреть, насколько он вам подходит.\n\nКарту привязывать не нужно.\n\nБесплатный период начнётся только после нажатия кнопки ниже.", reply_markup=add_trail_period())
        return
    current_task = await get_current_task(1)
    if not current_task:
        await message.answer("Задание на этот месяц пока не опубликовано", reply_markup=club_menu())
        return
    TASK_PATH = Path("/opt/proginsky_ecosystem/proginsky_storage/task")
    files = [file for file in TASK_PATH.iterdir() if file.is_file()]
    if files:
        document = FSInputFile(files[0])
        await message.answer_document(document=document, caption="Задание на этот месяц\n\n" + current_task["text"], reply_markup=club_menu())
        return
    await message.answer("Задание на этот месяц\n\n" + current_task["text"], reply_markup=club_menu())

@router.callback_query(F.data == "get_trail_period")
async def get_trail_period(callback: CallbackQuery):
    result = await give_trail_access(callback.from_user.id)
    if result == False:
        await edit_message(callback.message, "Вы уже использовали пробный период. Если нет - обратитесь в поддержку", reply_markup=to_menu())
        return
    await edit_message(callback.message, "У вас 30 дней бесплатного доступа. Карту привязывать не нужно. Сначала посмотрите, насколько клуб полезен вам, а ближе к концу периода мы предложим решить, хотите ли вы остаться.", reply_markup=club_menu())

@router.callback_query(F.data == "club_profile")
async def club_profile(callback: CallbackQuery):
    user = await get_data_for_menu(callback.from_user.id)
    if not user:
        await callback.answer("Пользователь не найден")
        return
    text = "👤 Мой профиль\n\n"
    if user["name"]:
        text += f"Имя: {user['name']}\n"
    if user["telegram_username"]:
        text += f"Telegram: @{user['telegram_username']}\n"
    if user["access_type"] == "bonus":
        text += "Статус доступа: Бесплатный период\n"
    elif user["access_type"] == "purchase":
        text += "Статус доступа: Активная подписка\n"
    elif user["access_type"] == "manual":
        text += "Статус доступа: Дополнительный доступ\n"
    else:
        text += "Статус доступа: Неактивен\n"
    if user["expires_at"]:
        expires_at = datetime.fromisoformat(user["expires_at"].replace("Z", "+00:00"))
        text += f"Доступ до: {expires_at.strftime('%d.%m.%Y')}\n"
    text += f"\nВнутренний баланс: {user['balance']} ₽\n"
    text += f"\nПриглашено друзей: {user['referrals_count']}\n"
    if user["referal_token"]:
        text += f"\nВаш реферальный код:\n{user['referal_token']}"
    await edit_message(callback.message, text, to_menu())

@router.callback_query(F.data == "club_buddy")
async def club_buddy(callback: CallbackQuery):
    buddy = await get_buddy_data(callback.from_user.id)
    if buddy["status"] == "none":
        text = "👥 Buddy\n\n"
        text += "Сейчас у вас нет Buddy.\n\n"
        text += "Найдите участника клуба, с которым можно познакомиться, обсудить работу с ИИ и попробовать что-то новое вместе."
        await edit_message(callback.message, text, find_buddy_menu())
        return
    if buddy["status"] == "queue":
        text = "👥 Buddy\n\n"
        text += "Вы уже находитесь в очереди на поиск Buddy.\n\n"
        text += "Как только пара будет найдена, мы отправим вам сообщение."
        await edit_message(callback.message, text, to_menu())
        return
    if buddy["status"] == "paired":
        text = "👥 Ваш Buddy\n\n"
        if buddy["buddy_name"]:
            text += f"Имя: {buddy['buddy_name']}\n"
        if buddy["buddy_username"]:
            text += f"Telegram: @{buddy['buddy_username']}\n"
        text += "\nПопробуйте начать общение с этих вопросов:\n\n"
        text += "• Чем вы занимаетесь?\n"
        text += "• Как сейчас используете ИИ?\n"
        text += "• Что хотите попробовать или изучить в этом месяце?"
        await edit_message(callback.message, text, to_menu())

@router.callback_query(F.data == "show_referal_token")
async def show_referal_token(callback: CallbackQuery):
    token = await get_referal_token(callback.from_user.id)
    if not token:
        await callback.answer("Не удалось получить ключ", show_alert=True)
        return
    await callback.answer()
    await edit_message(callback.message, f"Ваш персональный ключ приглашения:\n\n{token}\n\nОтправьте его другу, чтобы получать бонусы!", reply_markup=to_menu())

@router.callback_query(F.data == "enter_referal_token")
async def enter_referal_token(callback: CallbackQuery, state: FSMContext):
    await callback.answer()
    await edit_message(callback.message, "Введите пригласительный токен одним сообщением", reply_markup=to_menu())
    await state.set_state(UsersState.waiting_referal_token)

@router.message(UsersState.waiting_referal_token)
async def referal_token_used(message: Message, state: FSMContext):
    if not message.text:
        await message.answer("Некорректный токен!")
        return
    token = message.text.strip()
    is_valid_token = await try_to_add_token(token, message.from_user.id)
    if is_valid_token:
        await message.answer("Пригласительный код успешно активирован!", reply_markup=club_menu())
        await state.clear()
        return
    await message.answer("Не удалось активировать код. Возможно вы активировали другой код ранее или код устарел")

@router.callback_query(F.data.startswith("buy_club_"))
async def buy_club(callback: CallbackQuery):
    await callback.answer()
    await callback.message.edit_reply_markup(reply_markup=None)
    month_count = callback.data.split("_")[-1]
    if month_count not in {"1", "3", "6"}:
        await callback.message.answer("Тариф не найден")
        return
    PRICES = {"1": 1990, "3": 4990, "6": 8990}
    price = PRICES[month_count]
    await callback.message.answer(f"Вы выбрали участие на {month_count} мес.\n\nСрок доступа: {int(month_count)*30} дней\nСтоимость: {price} ₽\n\nОплата производится одним платежом.", reply_markup=confirm_payment(month_count, price))

@router.callback_query(F.data.startswith("pay_club_"))
async def pay_club(callback: CallbackQuery):
    await callback.answer()
    month_count = callback.data.split("_")[-1]
    if month_count not in {"1", "3", "6"}:
        await callback.message.answer("Тариф не найден")
        return
    payment = await create_payment(callback.from_user.id, f"secondary_{month_count}_month")
    if payment is None:
        await callback.message.answer("Не удалось создать оплату. Попробуйте ещё раз.", reply_markup=courses_prices())
        return
    await edit_message(callback.message, "Перейдите к оплате:", reply_markup=payment_button(payment["payment_url"]))

@router.callback_query(F.data == "find_club_buddy")
async def find_club_buddy(callback: CallbackQuery) -> None:
    result = await buddy_request(callback.from_user.id)
    if result:
        await edit_message(callback.message, "✅ Вы в очереди, ожидайте своего Бадди!", reply_markup=club_menu())
        return
    await callback.answer("Что-то пошло не так, возможно, вы уже в очереди!", show_alert=True)

@router.callback_query(F.data.in_({"ready_to_pass_task", "change_task_answer"}))
async def ready_to_pass_task(callback: CallbackQuery, state: FSMContext):
    await state.set_state(UsersState.waiting_task_answer)
    await edit_message(callback.message, "Отправьте файл ответа на задание, когда будете готовы\nЕсли захотите сдалать это позже - воспользуйтесь меню", reply_markup=to_menu())

@router.message(UsersState.waiting_task_answer)
async def pass_the_task(message: Message, state: FSMContext):
    document = message.document
    if not document:
        await message.answer("Прикрепите файл к сообщению")
        return
    await pass_the_task_request(message.from_user.id, document.file_id)
    projects_path = Path("/opt/proginsky_ecosystem/proginsky_storage/answers")
    files = [file for file in projects_path.glob(f"{message.from_user.id}.*") if file.is_file()]
    for file in files:
        file.unlink()
    filename = f"{message.from_user.id}{Path(document.file_name).suffix}"
    await message.bot.download(document, projects_path / filename)
    await message.answer("Задание сдано! Чтобы изменить ответ на задание, используйте главное меню", reply_markup=to_menu())
    await state.clear()

@router.callback_query(F.data == "to_menu")
async def back_to_menu(callback: CallbackQuery, state: FSMContext):
    await state.clear()
    await edit_message(callback.message, "Добро пожаловать!", reply_markup=club_menu())

@router.callback_query(F.data == "extend_access")
async def extend_access(callback: CallbackQuery):
    await edit_message(callback.message, "Выберите тариф", reply_markup=courses_prices())