from aiogram.types import Message, InlineKeyboardMarkup, FSInputFile

async def edit_message(message: Message, text: str, reply_markup: InlineKeyboardMarkup | None = None, file = None, photo = None) -> Message:
    if file:
        await message.delete()
        return await message.answer_document(document=FSInputFile(file), caption=text, reply_markup=reply_markup)
    if photo:
        await message.delete()
        return await message.answer_photo(photo=FSInputFile(photo), caption=text, reply_markup=reply_markup)
    if not message.text:
        await message.delete()
        return await message.answer(text=text, reply_markup=reply_markup)
    return await message.edit_text(text=text, reply_markup=reply_markup)