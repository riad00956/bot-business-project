// COMMAND 7: my_account | Type: Regular Command

var ref_target = Bot.getProperty("ref_target", 5);
var ref = Bot.getProperty("balance_" + user.telegramid, 0);
var keys = User.getProperty("keys", []);
var eligible = ref >= ref_target ? "Yᴇs ✅" : "Nᴏ ❌";
var username = user.username ? "@" + user.username : "Not Set";
var referred_by = User.getProperty("referred_by", "Direct Join");
var progress = "";
for (var i = 1; i <= ref_target; i++) { progress += i <= ref ? "▰" : "▱"; }
Bot.sendMessage("👤 *Pʀᴇᴍɪᴜᴍ Aᴄᴄᴏᴜɴᴛ*\n\n🆔 ID: `" + user.telegramid + "`\n👤 Nᴀᴍᴇ: *" + (user.first_name || "Premium User") + "*\n🔗 Usᴇʀɴᴀᴍᴇ: " + username + "\n📡 Rᴇғᴇʀʀᴇᴅ Bʏ: *" + referred_by + "*\n\n━━━━━━━━━━━━━━━━\n👥 Rᴇғᴇʀʀᴀʟs: *" + ref + "/" + ref_target + "*\n📊 Pʀᴏɢʀᴇss: `" + progress + "`\n🎁 Eʟɪɢɪʙʟᴇ: *" + eligible + "*\n🔑 Tᴏᴛᴀʟ Kᴇʏs: *" + keys.length + "*\n━━━━━━━━━━━━━━━━");
