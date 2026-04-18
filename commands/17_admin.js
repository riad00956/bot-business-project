// COMMAND 17: /admin | Type: Slash Command

if (user.telegramid != Bot.getProperty("admin_id")) { Bot.sendMessage("❌ Aᴄᴄᴇss Dᴇɴɪᴇᴅ"); return; }
Bot.runCommand("admin_panel");
