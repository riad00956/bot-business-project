// COMMAND 24: stats | Type: Regular Command

if (user.telegramid != Bot.getProperty("admin_id")) { return; }
var pending = Bot.getProperty("pending_keys", []);
var channels = Bot.getProperty("force_channels", []);
var agents = Bot.getProperty("agents", []);
Bot.sendMessage("📊 *Bᴏᴛ Sᴛᴀᴛɪsᴛɪᴄs*\n\n👥 Tᴏᴛᴀʟ Usᴇʀs: *" + Bot.getProperty("total_users", 0) + "*\n🎁 Tᴏᴛᴀʟ Wɪᴛʜᴅʀᴀᴡ: *" + Bot.getProperty("total_withdraw", 0) + "*\n🔑 Kᴇʏs Gᴇɴᴇʀᴀᴛᴇᴅ: *" + Bot.getProperty("total_keys", 0) + "*\n📦 Pᴇɴᴅɪɴɢ: *" + pending.length + "*\n📢 Fᴏʀᴄᴇ Cʜᴀɴɴᴇʟs: *" + channels.length + "*\n👨‍💻 Aɢᴇɴᴛs: *" + agents.length + "*");
