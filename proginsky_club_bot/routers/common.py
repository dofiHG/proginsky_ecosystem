from aiogram import Router, F
from aiogram.filters import CommandStart, CommandObject
from aiogram.types import Message, FSInputFile, CallbackQuery
from datetime import datetime, timedelta, timezone
from keyboards import (
    add_trail_period,
    courses_prices,
    payment_button,
    club_menu,
    limited_mode_menu,
    to_menu,
    confirm_payment,
    find_buddy_menu,
    buddy_active_menu,
    subscription_menu,
    challenges_menu,
    challenge_menu,
    profile_menu,
    rejected_payment
)
from api_client import (
    get_data_for_menu,
    try_to_add_token,
    check_referal_id,
    give_trail_access,
    check_access_user,
    buddy_request,
    pass_the_task_request,
    check_task_answer,
    chesk_buddy_existing,
    get_current_task,
    check_buddy_queue,
    get_referal_token,
    get_club_state,
    get_club_plans,
    get_checkout_preview,
    create_club_checkout,
    get_buddy_data,
    send_buddy_decision,
    report_buddy_nonresponse,
    get_challenges,
    join_challenge,
    submit_challenge,
    cancel_recurring,
    create_partner_withdrawal,
    cancel_last_payment
)
from edit_bot_text import edit_message
from aiogram.fsm.state import State, StatesGroup
from aiogram.fsm.context import FSMContext
from pathlib import Path
from datetime import datetime
import os

router = Router()

CLUB_CHAT_ID = os.getenv("CLUB_CHANNEL_ID")

class UsersState(StatesGroup):
    waiting_task_answer = State()
    waiting_referal_token = State()
    waiting_challenge_submission = State()
    waiting_withdrawal = State()
    waiting_challenge_teammate = State()

def _money(value) -> str:
    try:
        number = float(value or 0)
        return f"{number:,.2f}".replace(",", " ").replace(".00", "")
    except (TypeError, ValueError):
        return str(value or 0)

def _date(value) -> str:
    if not value:
        return "—"
    try:
        parsed = datetime.fromisoformat(str(value).replace("Z", "+00:00"))
        return parsed.strftime("%d.%m.%Y")
    except (TypeError, ValueError):
        return str(value)

async def get_club_menu(telegram_user_id: int):
    return club_menu()

async def _show_start_content(message: Message, telegram_user_id: int):
    current_task = await get_current_task(1)
    if not current_task:
        await message.answer("Добро пожаловать в ИИ-клуб «Прогинский»!", reply_markup=club_menu())
        return
    task_path = Path("/opt/proginsky_ecosystem/proginsky_storage/task")
    files = [file for file in task_path.iterdir() if file.is_file()] if task_path.exists() else []
    if files:
        document = FSInputFile(files[0])
        await message.answer_document(
            document=document,
            caption="Задание на этот месяц\n\n" + (current_task["text"] or ""),
            reply_markup=club_menu(),
        )
        return
    await message.answer("Задание на этот месяц\n\n" + (current_task["text"] or ""), reply_markup=club_menu())

@router.message(CommandStart())
async def start_handler(message: Message, command: CommandObject) -> None:
    telegram_user_id = message.from_user.id
    state = await get_club_state(telegram_user_id)
    if not state:
        await message.answer("Сначала перейдите в клуб через основного бота или обратитесь в поддержку.")
        return
    if not state["has_access"]:
        if not state["trial_used"]:
            has_referral = await check_referal_id(telegram_user_id)
            referral_text = (
                "\n\n✅ Реферальный код уже привязан."
                if has_referral
                else "\n\nЕсли вас пригласил участник клуба, сначала можете ввести его реферальный код."
            )
            await message.answer(
                "Добро пожаловать в ИИ-клуб «Прогинский» 👋\n\n"
                "Вы можете бесплатно пользоваться клубом 30 дней и посмотреть, насколько он вам подходит.\n\n"
                "Карту привязывать не нужно.\n\n"
                "Бесплатный период начнётся только после нажатия кнопки ниже."
                + referral_text,
                reply_markup=add_trail_period(bool(has_referral)),
            )
            return
        has_referral = await check_referal_id(telegram_user_id)
        await message.answer(
            "Сейчас доступ к клубу неактивен. Ваш профиль, внутренний баланс и реферальная история сохранены.\n\n"
            "Чтобы вернуться, выберите участие на 1, 3 или 6 месяцев.",
            reply_markup=limited_mode_menu(bool(has_referral)),
        )
        return
    await _show_start_content(message, telegram_user_id)

@router.callback_query(F.data == "get_trail_period")
async def get_trail_period(callback: CallbackQuery):
    invite = await callback.bot.create_chat_invite_link(chat_id = CLUB_CHAT_ID, name=f"trial_{callback.from_user.id}", member_limit=1)
    result = await give_trail_access(callback.from_user.id, invite.invite_link)
    if result is False:
        invite = await callback.bot.revoke_chat_invite_link(chat_id=CLUB_CHAT_ID, invite_link=invite.invite_link,)
        has_referral = await check_referal_id(callback.from_user.id)
        await edit_message(
            callback.message,
            "Бесплатный период уже использован. Вы можете вернуться в клуб по платному плану.",
            reply_markup=limited_mode_menu(bool(has_referral)),
        )
        return
    await edit_message(
        callback.message,
        "У вас 30 дней бесплатного доступа. Карту привязывать не нужно. "
        f"Сначала посмотрите, насколько клуб полезен вам, а ближе к концу периода мы предложим решить, хотите ли вы остаться.\n\nНажмите ссылку ниже, чтобы вступить в закрытый клуб.\n{invite.invite_link}",
        reply_markup=club_menu(),
    )

@router.callback_query(F.data == "club_profile")
async def club_profile(callback: CallbackQuery):
    user = await get_data_for_menu(callback.from_user.id)
    if not user:
        await callback.answer("Пользователь не найден")
        return
    text = "👤 Мой профиль\n\n"
    if user.get("name"):
        text += f"Имя: {user['name']}\n"
    if user.get("telegram_username"):
        text += f"Telegram: @{user['telegram_username']}\n"
    access_type = user.get("access_type")
    if access_type == "bonus":
        text += "Статус доступа: Бесплатный период\n"
    elif access_type == "purchase":
        text += "Статус доступа: Активное участие\n"
    elif access_type == "manual":
        text += "Статус доступа: Дополнительный доступ\n"
    else:
        text += "Статус доступа: Неактивен\n"
    if access_type in {"bonus", "manual", "purchase"}:
        text += f"Одноразовая ссылка для входа в клуб (неактивна после первого входа): {user.get("invite_channel_link")}\n"
    if user.get("subscription_term"):
        text += f"Текущий срок: {user['subscription_term']} мес. / {user.get('period_days')} дней\n"
    if user.get("expires_at"):
        text += f"Доступ до: {_date(user['expires_at'])}\n"
    if user.get("next_charge_at"):
        text += f"Следующая дата продления: {_date(user['next_charge_at'])}\n"
    text += f"\nВнутренний баланс: {_money(user.get('balance'))} ₽\n"
    if user.get("partner_status"):
        text += f"Партнёрский баланс: {_money(user.get('withdrawable_available'))} ₽\n"
        if float(user.get("withdrawable_reserved") or 0) > 0:
            text += f"В резерве на вывод: {_money(user.get('withdrawable_reserved'))} ₽\n"
    if float(user.get("pending_withholding") or 0) > 0:
        text += f"Удержание из будущих реферальных начислений: {_money(user.get('pending_withholding'))} ₽\n"
    text += f"\nПриглашено друзей: {user.get('referrals_count', 0)}\n"
    await edit_message(callback.message, text, profile_menu(bool(user.get("partner_status"))))

@router.callback_query(F.data == "partner_withdrawal")
async def partner_withdrawal_start(callback: CallbackQuery, state: FSMContext):
    await state.set_state(UsersState.waiting_withdrawal)
    await edit_message(callback.message, "Введите сумму вывода и реквизиты через символ |. Минимум 1000 ₽.\nНапример: 1500 | СБП +7...", to_menu())

@router.message(UsersState.waiting_withdrawal)
async def partner_withdrawal_receive(message: Message, state: FSMContext):
    try:
        amount_text, details_text = [part.strip() for part in message.text.split("|", 1)]
        amount = float(amount_text.replace(",", "."))
    except (ValueError, AttributeError):
        await message.answer("Формат: 1500 | реквизиты")
        return
    result = await create_partner_withdrawal(message.from_user.id, amount, {"details": details_text})
    if not result.get("ok"):
        errors = {"minimum_1000": "Минимальная сумма — 1000 ₽", "insufficient_balance": "Недостаточно доступного партнёрского баланса", "not_partner": "Partner-режим не активен"}
        await message.answer(errors.get(result.get("error"), "Не удалось создать заявку"))
        return
    await state.clear()
    await message.answer(f"Заявка #{result['withdrawal_id']} создана. Сумма зарезервирована до решения администратора.", reply_markup=club_menu())

@router.callback_query(F.data == "club_buddy")
async def club_buddy(callback: CallbackQuery):
    buddy = await get_buddy_data(callback.from_user.id)
    if buddy["status"] == "none":
        text = (
            "🤝 Buddy\n\nСейчас у вас нет Buddy.\n\n"
            "Найдите участника клуба, с которым можно познакомиться, обсудить работу с ИИ и попробовать что-то новое вместе."
        )
        await edit_message(callback.message, text, find_buddy_menu())
        return
    if buddy["status"] == "queue":
        await edit_message(
            callback.message,
            "🤝 Buddy\n\nВы уже находитесь в очереди на поиск Buddy.\n\nКак только пара будет найдена, мы отправим вам сообщение.",
            to_menu(),
        )
        return
    text = "🤝 Ваш Buddy\n\n"
    if buddy.get("buddy_name"):
        text += f"Имя: {buddy['buddy_name']}\n"
    if buddy.get("buddy_username"):
        text += f"Telegram: @{buddy['buddy_username']}\n"
    if buddy.get("cycle_end"):
        text += f"Текущий цикл до: {_date(buddy['cycle_end'])}\n"
    text += (
        "\nПопробуйте начать общение с этих вопросов:\n\n"
        "• Чем вы занимаетесь?\n"
        "• Как сейчас используете ИИ?\n"
        "• Что хотите попробовать или изучить в этом месяце?"
    )
    await edit_message(callback.message, text, buddy_active_menu())

@router.callback_query(F.data == "find_club_buddy")
async def find_club_buddy(callback: CallbackQuery) -> None:
    result = await buddy_request(callback.from_user.id)
    if result:
        await edit_message(callback.message, "✅ Вы в очереди, ожидайте своего Buddy!", reply_markup=club_menu())
        return
    await callback.answer("Не удалось добавить в очередь. Возможно, вы уже в очереди или у вас нет активного доступа.", show_alert=True)

@router.callback_query(F.data.startswith("buddy_decision_"))
async def buddy_decision(callback: CallbackQuery):
    decision = callback.data.replace("buddy_decision_", "")
    result = await send_buddy_decision(callback.from_user.id, decision)
    if not result:
        await callback.answer("Не удалось сохранить выбор", show_alert=True)
        return
    labels = {"keep": "Остаться вместе", "new": "Новый Buddy", "pause": "Пауза"}
    await callback.answer("Выбор сохранён")
    await edit_message(callback.message, f"Ваш выбор на следующий цикл: {labels.get(decision, decision)}.", to_menu())

@router.callback_query(F.data == "buddy_nonresponse")
async def buddy_nonresponse(callback: CallbackQuery):
    result = await report_buddy_nonresponse(callback.from_user.id)
    if result:
        await callback.answer("Отметили. Если ситуация не изменится, через 48 часов вы сможете попасть в новую пару.", show_alert=True)
    else:
        await callback.answer("Активная пара не найдена", show_alert=True)

@router.callback_query(F.data == "show_referal_token")
async def show_referal_token(callback: CallbackQuery):
    token = await get_referal_token(callback.from_user.id)
    if not token:
        await callback.answer("Не удалось получить ключ", show_alert=True)
        return
    bot_username = os.getenv("FUNNEL_BOT_USERNAME", "").strip().lstrip("@")
    bonus_text = (
        "\n\nЗа успешную оплату приглашённого участника вам начисляется 10% "
        "от суммы, фактически оплаченной через Robokassa, на внутренний баланс. "
        "Этот баланс автоматически уменьшает сумму вашей следующей оплаты."
    )
    if bot_username:
        referral = f"https://t.me/{bot_username}?start=ref_{token}"
        text = f"Ваша персональная ссылка приглашения:\n\n{referral}\n\nОтправьте её другу.{bonus_text}"
    else:
        text = (
            f"Ваш персональный реферальный код:\n\n{token}\n\n"
            "Друг может ввести его в клубном боте до начала бесплатного периода/первой оплаты."
            f"{bonus_text}"
        )
    await callback.answer()
    await edit_message(callback.message, text, reply_markup=to_menu())

@router.callback_query(F.data == "enter_referal_token")
async def enter_referal_token(callback: CallbackQuery, state: FSMContext):
    club_state = await get_club_state(callback.from_user.id)
    if not club_state:
        await callback.answer("Пользователь не найден", show_alert=True)
        return
    if await check_referal_id(callback.from_user.id):
        await callback.answer("Реферальный код уже привязан", show_alert=True)
        return
    await callback.answer()
    await edit_message(
        callback.message,
        "Введите реферальный код одним сообщением.\n\n"
        "Можно отправить сам код, значение вида ref_КОД или целую ссылку приглашения.",
        reply_markup=to_menu(),
    )
    await state.set_state(UsersState.waiting_referal_token)

@router.message(UsersState.waiting_referal_token)
async def referal_token_used(message: Message, state: FSMContext):
    if not message.text:
        await message.answer("Отправьте реферальный код текстом.")
        return
    token = message.text.strip()
    if "start=ref_" in token:
        token = token.split("start=ref_", 1)[1].split("&", 1)[0].strip()
    elif token.startswith("ref_"):
        token = token[4:].strip()
    if not token:
        await message.answer("Некорректный реферальный код. Попробуйте ещё раз.")
        return
    is_valid_token = await try_to_add_token(token, message.from_user.id)
    if is_valid_token:
        await state.clear()
        club_state = await get_club_state(message.from_user.id)
        if club_state and club_state.get("has_access"):
            markup = club_menu()
        elif club_state and not club_state.get("trial_used"):
            markup = add_trail_period(has_referral=True)
        else:
            markup = limited_mode_menu(has_referral=True)
        await message.answer(
            "✅ Реферальный код успешно привязан.\n\n"
            "После вашей успешной оплаты пригласивший вас участник получит 10% "
            "от суммы внешней оплаты на внутренний баланс.",
            reply_markup=markup,
        )
        return
    await message.answer(
        "Не удалось активировать код. Проверьте код и попробуйте ещё раз. "
        "Код нельзя привязать самому себе или заменить, если пригласивший уже закреплён."
    )

@router.callback_query(F.data == "club_subscription")
async def club_subscription(callback: CallbackQuery):
    state = await get_club_state(callback.from_user.id)
    if not state:
        await callback.answer("Пользователь не найден", show_alert=True)
        return
    text = "💳 Подписка\n\n"
    if state.get("subscription_term"):
        text += f"Текущий пакет: {state['subscription_term']} мес. / {state.get('period_days')} дней\n"
    text += f"Статус: {state.get('subscription_status', 'none')}\n"
    if state.get("paid_until"):
        text += f"Оплаченный период до: {_date(state['paid_until'])}\n"
    if state.get("next_charge_at"):
        text += f"Следующее автопродление: {_date(state['next_charge_at'])}\n"
    else:
        text += "Автопродление: не подключено\n"
    text += f"Внутренний баланс: {_money(state.get('balance'))} ₽\n\n"
    text += "Можно выбрать любой из сроков 1 / 3 / 6 месяцев. Уже оплаченный доступ не сокращается: новый пакет добавится после него."
    await edit_message(callback.message, text, subscription_menu(bool(state.get("next_charge_at"))))

@router.callback_query(F.data == "cancel_recurring")
async def cancel_subscription_recurring(callback: CallbackQuery):
    result = await cancel_recurring(callback.from_user.id)
    if not result:
        await callback.answer("Активное автопродление не найдено", show_alert=True)
        return
    await edit_message(callback.message, "Автопродление отменено. Уже оплаченный доступ сохраняется до конца периода.", to_menu())

@router.callback_query(F.data == "extend_access")
async def extend_access(callback: CallbackQuery):
    plans = await get_club_plans()
    text = "Выберите срок участия:\n\n"
    for plan in plans:
        text += f"{plan['subscription_term']} мес. — {_money(plan['price'])} ₽ / {plan['period_days']} дней"
        if float(plan.get("saving") or 0) > 0:
            text += f"\nЭкономия {_money(plan['saving'])} ₽ ({str(plan['saving_percent']).replace('.', ',')}%)"
        text += "\n\n"
    await edit_message(callback.message, text.strip(), reply_markup=courses_prices())

@router.callback_query(F.data.startswith("buy_club_"))
async def buy_club(callback: CallbackQuery):
    await callback.answer()
    month_count = callback.data.split("_")[-1]
    if month_count not in {"1", "3", "6"}:
        await callback.message.answer("Тариф не найден")
        return
    tariff_slug = f"secondary_{month_count}_month"
    preview = await get_checkout_preview(callback.from_user.id, tariff_slug)
    if not preview:
        await callback.message.answer("Не удалось рассчитать оплату")
        return
    if preview.get("error") == "lifetime_access":
        await callback.answer("У вас уже бессрочный доступ", show_alert=True)
        return
    text = (
        f"Вы выбрали участие на {preview['subscription_term']} мес.\n\n"
        f"Срок доступа: {preview['period_days']} дней\n"
        f"Цена пакета: {_money(preview['gross_price'])} ₽\n"
        f"Доступный внутренний баланс: {_money(preview['available_internal_balance'])} ₽\n"
        f"Будет использовано с баланса: {_money(preview['internal_amount'])} ₽\n"
        f"Итог к оплате: {_money(preview['external_amount'])} ₽\n"
        f"Новый период: {_date(preview['period_start'])} — {_date(preview['period_end'])}\n\n"
        "Оплата производится за весь пакет одним циклом. Выбор тарифа сам по себе деньги не списывает."
    )
    await edit_message(callback.message, text, confirm_payment(month_count, preview["external_amount"]))

@router.callback_query(F.data.startswith("pay_club_"))
async def pay_club(callback: CallbackQuery):
    await callback.answer()
    month_count = callback.data.split("_")[-1]
    if month_count not in {"1", "3", "6"}:
        await callback.message.answer("Тариф не найден")
        return
    payment = await create_club_checkout(callback.from_user.id, f"secondary_{month_count}_month")
    if payment is None:
        await callback.message.answer("Не удалось создать оплату. Возможно, уже есть незавершёная оплата. Внутренний баланс вернётся после отмены оплаты по кнопке или в течение 30 минут.", reply_markup=rejected_payment())
        return
    if payment.get("paid_with_balance"):
        await edit_message(
            callback.message,
            f"Оплата выполнена с внутреннего баланса. Пакет на {payment['period_days']} дней добавлен до {_date(payment['period_end'])}.",
            reply_markup=club_menu(),
        )
        return
    await edit_message(
        callback.message,
        f"Итоговая внешняя сумма: {_money(payment['external_amount'])} ₽.\n\nПерейдите к оплате:",
        reply_markup=payment_button(payment["payment_url"]),
    )

@router.callback_query(F.data == "club_challenges")
async def club_challenges(callback: CallbackQuery):
    challenges = await get_challenges(callback.from_user.id)
    if not challenges:
        await edit_message(callback.message, "🏆 Сейчас активных челленджей нет.", to_menu())
        return
    await edit_message(callback.message, "🏆 Активные челленджи\n\nВыберите челлендж:", challenges_menu(challenges))

@router.callback_query(F.data == "cancel_payment")
async def cancel_payment(callback: CallbackQuery):
    await cancel_last_payment(callback.from_user.id)
    await edit_message(callback.message, "Оплата отменена!", reply_markup=to_menu())

@router.callback_query(F.data.startswith("challenge_open_"))
async def challenge_open(callback: CallbackQuery):
    challenge_id = int(callback.data.split("_")[-1])
    challenges = await get_challenges(callback.from_user.id)
    challenge = next((item for item in challenges if item["id"] == challenge_id), None)
    if not challenge:
        await callback.answer("Челлендж не найден", show_alert=True)
        return
    text = (
        f"🏆 {challenge['title']}\n\n{challenge['description']}\n\n"
        f"Дедлайн: {_date(challenge['deadline'])}\n"
        f"Формат участия: {challenge['participation_mode']}\n"
        f"Формат результата: {challenge['submission_format']}"
    )
    await edit_message(
        callback.message,
        text,
        challenge_menu(challenge_id, challenge.get("joined", False), challenge["submission_format"], challenge["participation_mode"]),
    )

@router.callback_query(F.data.startswith("challenge_join_solo_"))
async def challenge_join_solo_handler(callback: CallbackQuery):
    challenge_id = int(callback.data.split("_")[-1])
    result = await join_challenge(callback.from_user.id, challenge_id, "solo")
    if not result:
        await callback.answer("Не удалось присоединиться", show_alert=True)
        return
    await callback.answer("Вы участвуете")
    await edit_message(callback.message, "Участие solo зафиксировано. Напоминания относятся только к тем, кто явно присоединился.", to_menu())

@router.callback_query(F.data.startswith("challenge_join_team_"))
async def challenge_join_team_handler(callback: CallbackQuery, state: FSMContext):
    challenge_id = int(callback.data.split("_")[-1])
    await state.update_data(challenge_id=challenge_id)
    await state.set_state(UsersState.waiting_challenge_teammate)
    await edit_message(callback.message, "Введите Telegram ID второго участника команды. Состав команды будет зафиксирован и не зависит от Buddy.", to_menu())

@router.message(UsersState.waiting_challenge_teammate)
async def challenge_team_teammate_received(message: Message, state: FSMContext):
    try:
        teammate_id = int(message.text.strip())
    except (TypeError, ValueError):
        await message.answer("Нужен числовой Telegram ID второго участника.")
        return
    data = await state.get_data()
    result = await join_challenge(message.from_user.id, data["challenge_id"], "team", teammate_id)
    if not result:
        await message.answer("Не удалось создать команду. Проверьте ID, активный доступ второго участника и его участие в этом челлендже.")
        return
    await state.clear()
    await message.answer("Команда зафиксирована. Последующая Buddy-ротация её не изменит.", reply_markup=club_menu())

@router.callback_query(F.data.startswith("challenge_submit_"))
async def challenge_submit_start(callback: CallbackQuery, state: FSMContext):
    parts = callback.data.split("_", 3)
    challenge_id = int(parts[2])
    submission_format = parts[3] if len(parts) > 3 else "text"
    await state.update_data(challenge_id=challenge_id, submission_format=submission_format)
    await state.set_state(UsersState.waiting_challenge_submission)
    if submission_format == "url":
        prompt = "Отправьте HTTP/HTTPS ссылку на результат."
    elif submission_format == "file":
        prompt = "Прикрепите файл результата."
    else:
        prompt = "Отправьте результат текстом, ссылкой или файлом."
    await edit_message(callback.message, prompt, to_menu())

@router.message(UsersState.waiting_challenge_submission)
async def challenge_submission_received(message: Message, state: FSMContext):
    data = await state.get_data()
    requested_format = data.get("submission_format", "text")
    if message.document:
        submission_type = "file"
        payload = message.document.file_id
    elif message.text:
        payload = message.text.strip()
        submission_type = "url" if payload.startswith(("http://", "https://")) else "text"
    else:
        await message.answer("Отправьте текст, ссылку или документ.")
        return
    if requested_format not in {"mixed", submission_type} and requested_format != "text":
        await message.answer(f"Для этого челленджа нужен формат: {requested_format}.")
        return
    result = await submit_challenge(message.from_user.id, data["challenge_id"], submission_type, payload)
    if not result.get("ok"):
        if result.get("error") == "unsafe_url":
            await message.answer("Ссылка отклонена: разрешены только безопасные HTTP/HTTPS адреса.")
        else:
            await message.answer("Не удалось сохранить результат.")
        return
    await state.clear()
    await message.answer("Результат принят ✅", reply_markup=club_menu())

@router.callback_query(F.data == "club_help")
async def club_help(callback: CallbackQuery):
    await edit_message(
        callback.message,
        "❓ Помощь\n\nПо вопросам доступа, оплаты, Buddy или челленджей напишите команде клуба. "
        "Если платёж прошёл, но доступ не появился, укажите Telegram ID и номер платежа.",
        to_menu(),
    )

@router.callback_query(F.data.in_({"ready_to_pass_task", "change_task_answer"}))
async def ready_to_pass_task(callback: CallbackQuery, state: FSMContext):
    await state.set_state(UsersState.waiting_task_answer)
    await edit_message(
        callback.message,
        "Отправьте файл ответа на задание, когда будете готовы\nЕсли захотите сделать это позже — воспользуйтесь меню",
        reply_markup=to_menu(),
    )

@router.message(UsersState.waiting_task_answer)
async def pass_the_task(message: Message, state: FSMContext):
    document = message.document
    if not document:
        await message.answer("Прикрепите файл к сообщению")
        return
    await pass_the_task_request(message.from_user.id, document.file_id)
    projects_path = Path("/opt/proginsky_ecosystem/proginsky_storage/answers")
    projects_path.mkdir(parents=True, exist_ok=True)
    files = [file for file in projects_path.glob(f"{message.from_user.id}.*") if file.is_file()]
    for file in files:
        file.unlink()
    filename = f"{message.from_user.id}{Path(document.file_name or '').suffix}"
    await message.bot.download(document, projects_path / filename)
    await message.answer("Задание сдано! Чтобы изменить ответ, используйте главное меню", reply_markup=to_menu())
    await state.clear()

@router.callback_query(F.data == "to_menu")
async def back_to_menu(callback: CallbackQuery, state: FSMContext):
    await state.clear()
    club_state = await get_club_state(callback.from_user.id)
    if club_state and club_state.get("has_access"):
        markup = club_menu()
    elif club_state and not club_state.get("trial_used"):
        has_referral = await check_referal_id(callback.from_user.id)
        markup = add_trail_period(bool(has_referral))
    else:
        has_referral = await check_referal_id(callback.from_user.id)
        markup = limited_mode_menu(bool(has_referral))
    await edit_message(callback.message, "Добро пожаловать!", reply_markup=markup)
