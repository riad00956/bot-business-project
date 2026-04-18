// COMMAND 25: * (Wildcard/Default Handler)
// Type: Default/Fallback Command
// ⚠️ এই কমান্ড সবার শেষে যোগ করুন!
// Bot Business-এ "*" দিয়ে সব unhandled message handle হয়

var msg = message.toLowerCase().trim();

// Reply keyboard button routing
if (msg == "👤 mʏ aᴄᴄᴏᴜɴᴛ") { Bot.runCommand("my_account"); return; }
if (msg == "👥 ʀᴇғᴇʀ & eᴀʀɴ") { Bot.runCommand("refer"); return; }
if (msg == "🎁 wɪᴛʜᴅʀᴀᴡ") { Bot.runCommand("withdraw"); return; }
if (msg == "🔑 mʏ kᴇʏs") { Bot.runCommand("my_keys"); return; }
if (msg == "🏆 lᴇᴀᴅᴇʀʙᴏᴀʀᴅ") { Bot.runCommand("leaderboard"); return; }
if (msg == "📜 ʀᴜʟᴇs") { Bot.runCommand("rules"); return; }
if (msg == "💬 sᴜᴘᴘᴏʀᴛ") { Bot.runCommand("support"); return; }
if (msg == "ℹ️ hᴏᴡ ɪᴛ wᴏʀᴋs") { Bot.runCommand("how_it_works"); return; }
if (msg == "👑 aᴅᴍɪɴ pᴀɴᴇʟ") { Bot.runCommand("admin_panel"); return; }

// Admin panel routing
if (msg == "📢 bʀᴏᴀᴅᴄᴀsᴛ") { Bot.runCommand("broadcast_panel"); return; }
if (msg == "📢 ғᴏʀᴄᴇ ᴊᴏɪɴ") { Bot.runCommand("force_join_panel"); return; }
if (msg == "📡 aᴄᴛɪᴠɪᴛʏ pᴏsᴛs") { Bot.runCommand("activity_panel"); return; }
if (msg == "⚙️ bᴏᴛ sᴇᴛᴛɪɴɢs") { Bot.runCommand("settings"); return; }
if (msg == "🎨 cᴜsᴛᴏᴍɪᴢᴇ uɪ") { Bot.runCommand("customize_ui"); return; }
if (msg == "📊 sᴛᴀᴛs") { Bot.runCommand("stats"); return; }
if (msg == "👨‍💻 aɢᴇɴᴛ pᴀɴᴇʟ") { Bot.runCommand("agent_panel"); return; }
if (msg == "🏡 hᴏᴍᴇ") { Bot.runCommand("main_menu"); return; }

// Default fallback
Bot.sendMessage("❓ আমি এই মেসেজটি বুঝতে পারিনি।\n/start দিয়ে আবার শুরু করুন।");
