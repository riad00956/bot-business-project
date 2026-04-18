// COMMAND 6: main_menu | Type: Regular Command | Reply Keyboard: ON

var ref_target = Bot.getProperty("ref_target", 5);
var ref = Bot.getProperty("balance_" + user.telegramid, 0);
var keys = User.getProperty("keys", []);
var title = Bot.getProperty("welcome_title", "🏡 Wᴇʟᴄᴏᴍᴇ ᴛᴏ ᴛʜᴇ Mᴀɪɴ Mᴇɴᴜ");
var subtitle = Bot.getProperty("welcome_subtitle", "Yᴏᴜ ᴄᴀɴ ɴᴏᴡ ᴜsᴇ ᴛʜɪs ᴘʀᴇᴍɪᴜᴍ ʙᴏᴛ.");
var file_name = Bot.getProperty("file_name", "Premium Source Code");
var total_users = Bot.getProperty("total_users", 0);
var total_keys = Bot.getProperty("total_keys", 0);
var progress = "";
for (var i = 1; i <= ref_target; i++) { progress += i <= ref ? "▰" : "▱"; }
var keyboard = "👤 Mʏ Aᴄᴄᴏᴜɴᴛ, 👥 Rᴇғᴇʀ & Eᴀʀɴ\n🎁 Wɪᴛʜᴅʀᴀᴡ, 🔑 Mʏ Kᴇʏs\n🏆 Lᴇᴀᴅᴇʀʙᴏᴀʀᴅ, 📜 Rᴜʟᴇs\n💬 Sᴜᴘᴘᴏʀᴛ, ℹ️ Hᴏᴡ Iᴛ Wᴏʀᴋs";
if (user.telegramid == Bot.getProperty("admin_id")) { keyboard += "\n👑 Aᴅᴍɪɴ Pᴀɴᴇʟ"; }
Bot.sendKeyboard(keyboard, title + "\n\nHᴇʟʟᴏ, *" + (user.first_name || "Premium User") + "*\n" + subtitle + "\n\n━━━━━━━━━━━━━━━━\n💎 *Pʀᴇᴍɪᴜᴍ Dᴀsʜʙᴏᴀʀᴅ*\n━━━━━━━━━━━━━━━━\n👥 Rᴇғᴇʀʀᴀʟs: *" + ref + "/" + ref_target + "*\n📊 Pʀᴏɢʀᴇss: `" + progress + "`\n🔑 Yᴏᴜʀ Kᴇʏs: *" + keys.length + "*\n🌐 Tᴏᴛᴀʟ Usᴇʀs: *" + total_users + "*\n📦 Tᴏᴛᴀʟ Cʟᴀɪᴍs: *" + total_keys + "*\n📁 Fɪʟᴇ: *" + file_name + "*\n💼 Sᴛᴀᴛᴜs: *Aᴄᴛɪᴠᴇ*\n━━━━━━━━━━━━━━━━\nUꜱᴇ ᴛʜᴇ ʀᴇᴘʟʏ ᴋᴇʏʙᴏᴀʀᴅ ʙᴇʟᴏᴡ.");
