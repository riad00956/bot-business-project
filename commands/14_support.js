// COMMAND 14: support | Type: Regular Command

var support = Bot.getProperty("support_username", "@support_username");
Bot.sendInlineKeyboard([[{ title: "💬 Cᴏɴᴛᴀᴄᴛ Sᴜᴘᴘᴏʀᴛ", url: "https://t.me/" + support.replace("@", "") }]], "💬 *Pʀᴇᴍɪᴜᴍ Sᴜᴘᴘᴏʀᴛ*\n\nNᴇᴇᴅ ʜᴇʟᴘ? Cᴏɴᴛᴀᴄᴛ ᴏᴜʀ sᴜᴘᴘᴏʀᴛ ᴀɢᴇɴᴛ.\n\n👤 Sᴜᴘᴘᴏʀᴛ: " + support);
