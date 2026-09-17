from aiogram.types import Message, InlineKeyboardMarkup, FSInputFile

async def edit_message(message: Message, text: str, reply_markup: InlineKeyboardMarkup | None = None, file = None) -> Message:
    if file:
        await message.delete()
        return await message.answer_document(document=FSInputFile(file), caption=text, reply_markup=reply_markup)
    return await message.edit_text(text=text, reply_markup=reply_markup)