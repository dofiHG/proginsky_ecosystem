from aiogram import Router, F, Bot
from aiogram.filters import Command, CommandStart, CommandObject
from aiogram.types import Message, FSInputFile, CallbackQuery, ChatJoinRequest
from api_client import chain_client, register_telegram_user, check_user_channel_access
from keyboards import go_to_club_bot, download_guide
import os
import secrets

router = Router()
CHAT_ID = int(os.getenv("CLUB_CHANNEL_ID"))

@router.message(CommandStart())
async def start_handler(message: Message, command: CommandObject) -> None:
    token = command.args
    if token is None:
        responce = await register_telegram_user(message.from_user.id, message.from_user.username)
    else:
        responce = await chain_client(token, message.from_user.username, message.from_user.id)
    if responce in (200, 201):
        await message.answer("Перейдите в ИИ-клуб «Прогинский» 👇\n\nЕсли вы ещё не использовали бесплатный период, там можно активировать 30 дней без привязки карты.",reply_markup=go_to_club_bot())
        return
    if responce == 409:
        await message.answer("✅ Вы уже зарегистрированы!\nПерейдите в клуб — там можно активировать бесплатный период или продолжить участие.",reply_markup=go_to_club_bot())
        return
    if responce == 404:await message.answer("Неудачная регистрация, проверьте письмо на Email!")

@router.callback_query(F.data == "download_guide")
async def download_guide_handler(callback: CallbackQuery,) -> None:
    document = FSInputFile("files/guide.pdf")
    await callback.message.answer_document(document=document, caption="📘 Ваш гайд",)

@router.chat_join_request()
async def join_request_handler(request: ChatJoinRequest, bot: Bot,):
    if request.chat.id != CHAT_ID:
        return
    if request.invite_link is None:
        await bot.decline_chat_join_request(chat_id=request.chat.id, user_id=request.from_user.id,)
        return
    expected_name = f"user_{request.from_user.id}"
    if request.invite_link.name != expected_name:
        await bot.decline_chat_join_request(chat_id=request.chat.id, user_id=request.from_user.id,)
        return
    if not await check_user_channel_access(request.from_user.id):
        await bot.decline_chat_join_request(chat_id=request.chat.id, user_id=request.from_user.id,)
        return
    await bot.approve_chat_join_request(chat_id=request.chat.id, user_id=request.from_user.id,)
    await bot.revoke_chat_invite_link(chat_id=request.chat.id, invite_link=request.invite_link.invite_link,)