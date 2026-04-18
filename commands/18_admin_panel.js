// COMMAND 18: admin_panel | Type: Regular Command | Reply Keyboard: ON

if (user.telegramid != Bot.getProperty("admin_id")) { Bot.sendMessage("❌ Aᴄᴄᴇss Dᴇɴɪᴇᴅ"); return; }
var keyboard = "📢 Bʀᴏᴀᴅᴄᴀsᴛ, 📢 Fᴏʀᴄᴇ Jᴏɪɴ\n➕ Aᴅᴅ Aɢᴇɴᴛ, ➖ Rᴇᴍᴏᴠᴇ Aɢᴇɴᴛ\n📡 Aᴄᴛɪᴠɪᴛʏ Pᴏsᴛs, ⚙️ Bᴏᴛ Sᴇᴛᴛɪɴɢs\n🎨 Cᴜsᴛᴏᴍɪᴢᴇ UI, 📊 Sᴛᴀᴛs\n👨‍💻 Aɢᴇɴᴛ Pᴀɴᴇʟ, 🏡 Hᴏᴍᴇ";
var pending = Bot.getProperty("pending_keys", []);
Bot.sendKeyboard(keyboard, "👑 *Aᴅᴍɪɴ Cᴏɴᴛʀᴏʟ Dᴀsʜʙᴏᴀʀᴅ*\n\n━━━━━━━━━━━━━━━━\n👥 Tᴏᴛᴀʟ Usᴇʀs: *" + Bot.getProperty("total_users", 0) + "*\n🎁 Tᴏᴛᴀʟ Wɪᴛʜᴅʀᴀᴡ: *" + Bot.getProperty("total_withdraw", 0) + "*\n🔑 Kᴇʏs Gᴇɴᴇʀᴀᴛᴇᴅ: *" + Bot.getProperty("total_keys", 0) + "*\n📦 Pᴇɴᴅɪɴɢ: *" + pending.length + "*\n📡 Aᴄᴛɪᴠɪᴛʏ Pᴏsᴛs: *" + (Bot.getProperty("auto_activity_posts", true) ? "ON ✅" : "OFF ❌") + "*\n━━━━━━━━━━━━━━━━\nCᴜsᴛᴏᴍɪᴢᴇ ᴛʜᴇ ʙᴏᴛ A-ᴛᴏ-Z ғʀᴏᴍ ʜᴇʀᴇ.");
