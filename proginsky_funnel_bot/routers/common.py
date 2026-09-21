from aiogram import Router, F, Bot
from aiogram.filters import CommandStart, CommandObject
from aiogram.types import Message, FSInputFile, CallbackQuery, ChatJoinRequest
from api_client import (
    chain_client,
    register_telegram_user,
    check_user_channel_access,
    try_to_add_referral_token,
    record_acquisition,
)
from keyboards import go_to_club_bot
import os

router = Router()
CHAT_ID = int(os.getenv("CLUB_CHANNEL_ID")) if os.getenv("CLUB_CHANNEL_ID") else None
CLUB_RESOURCE_IDS = {int(value.strip()) for value in os.getenv("CLUB_RESOURCE_IDS", "").split(",") if value.strip()}
if CHAT_ID is not None:
    CLUB_RESOURCE_IDS.add(CHAT_ID)


@router.message(CommandStart())
async def start_handler(message: Message, command: CommandObject) -> None:
    token = command.args
    telegram_user_id = message.from_user.id
    telegram_username = message.from_user.username

    if token and token.startswith("ref_"):
        referral_token = token[4:]
        response = await register_telegram_user(telegram_user_id, telegram_username)
        if response in (200, 201, 409):
            await try_to_add_referral_token(referral_token, telegram_user_id)
            await record_acquisition(telegram_user_id, source="referral", referrer_link_token=referral_token)
            await message.answer(
                "Перейдите в ИИ-клуб «Прогинский» 👇\n\n"
                "Если вы ещё не использовали бесплатный период, там можно активировать 30 дней без привязки карты.",
                reply_markup=go_to_club_bot(),
            )
            return
        await message.answer("Не удалось зарегистрировать пользователя. Попробуйте открыть бота ещё раз.")
        return

    if token is None:
        response = await register_telegram_user(telegram_user_id, telegram_username)
        if response in (200, 201, 409):
            await record_acquisition(telegram_user_id, source="telegram")
    else:
        # Старый registration token с сайта сохраняется без изменения.
        response = await chain_client(token, telegram_username, telegram_user_id)
        if response in (200, 201, 409):
            await record_acquisition(telegram_user_id, source="site")

    if response in (200, 201):
        await message.answer(
            "Перейдите в ИИ-клуб «Прогинский» 👇\n\n"
            "Если вы ещё не использовали бесплатный период, там можно активировать 30 дней без привязки карты.",
            reply_markup=go_to_club_bot(),
        )
        return
    if response == 409:
        await message.answer(
            "✅ Вы уже зарегистрированы!\nПерейдите в клуб — там можно активировать бесплатный период или продолжить участие.",
            reply_markup=go_to_club_bot(),
        )
        return
    if response == 404:
        await message.answer("Неудачная регистрация, проверьте письмо на Email!")


@router.callback_query(F.data == "download_guide")
async def download_guide_handler(callback: CallbackQuery) -> None:
    document = FSInputFile("files/guide.pdf")
    await callback.message.answer_document(document=document, caption="📘 Ваш гайд")


@router.chat_join_request()
async def join_request_handler(request: ChatJoinRequest, bot: Bot):
    if request.chat.id not in CLUB_RESOURCE_IDS:
        return
    if request.invite_link is None:
        await bot.decline_chat_join_request(chat_id=request.chat.id, user_id=request.from_user.id)
        return
    expected_name = f"user_{request.from_user.id}"
    if request.invite_link.name != expected_name:
        await bot.decline_chat_join_request(chat_id=request.chat.id, user_id=request.from_user.id)
        return
    if not await check_user_channel_access(request.from_user.id):
        await bot.decline_chat_join_request(chat_id=request.chat.id, user_id=request.from_user.id)
        return
    await bot.approve_chat_join_request(chat_id=request.chat.id, user_id=request.from_user.id)
    await bot.revoke_chat_invite_link(chat_id=request.chat.id, invite_link=request.invite_link.invite_link)
