// COMMAND 8: refer | Type: Regular Command | Inline Keyboard: ON

var bot_username = bot.name;
var ref_link = "https://t.me/" + bot_username + "?start=" + user.telegramid;
var ref_target = Bot.getProperty("ref_target", 5);
var ref = Bot.getProperty("balance_" + user.telegramid, 0);
var reward_text = Bot.getProperty("reward_text", ref_target + " Rᴇғᴇʀʀᴀʟs = 1 Pʀᴇᴍɪᴜᴍ Fɪʟᴇ");
var buttons = [[{ title: "📤 Sʜᴀʀᴇ Lɪɴᴋ", url: "https://t.me/share/url?url=" + encodeURIComponent(ref_link) + "&text=" + encodeURIComponent("Join this premium bot and unlock exclusive source files.") }]];
Bot.sendInlineKeyboard(buttons, "👥 *Iɴᴠɪᴛᴇ & Eᴀʀɴ*\n\nSʜᴀʀᴇ ʏᴏᴜʀ ᴘᴇʀsᴏɴᴀʟ ʟɪɴᴋ ᴀɴᴅ ᴜɴʟᴏᴄᴋ ᴘʀᴇᴍɪᴜᴍ ғɪʟᴇs.\n\n🔗 *Yᴏᴜʀ Lɪɴᴋ:*\n`" + ref_link + "`\n\n🎁 Rᴇᴡᴀʀᴅ: *" + reward_text + "*\n👥 Yᴏᴜʀ Rᴇғᴇʀʀᴀʟs: *" + ref + "/" + ref_target + "*");
