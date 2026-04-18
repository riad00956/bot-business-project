// COMMAND 9: withdraw | Type: Regular Command | Inline Keyboard: ON

var ref_target = Bot.getProperty("ref_target", 5);
var ref = Bot.getProperty("balance_" + user.telegramid, 0);
var file_name = Bot.getProperty("file_name", "Premium Source Code");
if (ref < ref_target) {
  Bot.sendMessage("🔒 *Wɪᴛʜᴅʀᴀᴡ Lᴏᴄᴋᴇᴅ*\n\nYᴏᴜ ɴᴇᴇᴅ *" + (ref_target - ref) + "* ᴍᴏʀᴇ ʀᴇғᴇʀʀᴀʟs.\n👥 Yᴏᴜʀ Rᴇғᴇʀʀᴀʟs: *" + ref + "/" + ref_target + "*\n📁 Fɪʟᴇ: *" + file_name + "*");
  return;
}
function makePart() { return Math.random().toString(36).substring(2, 6).toUpperCase(); }
var key = "TBB-" + makePart() + "-" + makePart() + "-" + makePart();
var keys = User.getProperty("keys", []);
keys.push(key);
User.setProperty("keys", keys, "json");
Bot.setProperty("key_owner_" + key, user.telegramid, "integer");
Bot.setProperty("key_status_" + key, "Pending", "string");
Bot.setProperty("key_file_" + key, file_name, "string");
Bot.setProperty("balance_" + user.telegramid, ref - ref_target, "integer");
Bot.setProperty("total_keys", Bot.getProperty("total_keys", 0) + 1, "integer");
Bot.setProperty("total_withdraw", Bot.getProperty("total_withdraw", 0) + 1, "integer");
var pending = Bot.getProperty("pending_keys", []);
pending.push(key);
Bot.setProperty("pending_keys", pending, "json");
var agent_id = Bot.getProperty("agent_id");
var agent_username = Bot.getProperty("agent_username", "@agent_username");
var username = user.username ? "@" + user.username : "Not Set";
Bot.sendMessage("✅ *Wɪᴛʜᴅʀᴀᴡ Sᴜʙᴍɪᴛᴛᴇᴅ*\n\n📁 Fɪʟᴇ: *" + file_name + "*\n🔑 Yᴏᴜʀ Kᴇʏ:\n`" + key + "`\n\n👨‍💻 Aɢᴇɴᴛ: " + agent_username + "\n\nSᴇɴᴅ ᴛʜɪs ᴋᴇʏ ᴛᴏ ᴛʜᴇ ᴀɢᴇɴᴛ ᴛᴏ ʀᴇᴄᴇɪᴠᴇ ʏᴏᴜʀ ғɪʟᴇ.");
var withdraw_channel = Bot.getProperty("withdraw_channel", "");
if (withdraw_channel != "") {
  Bot.sendMessageToChatWithId(withdraw_channel, "📦 *Nᴇᴡ Wɪᴛʜᴅʀᴀᴡ Rᴇǫᴜᴇsᴛ*\n\n👤 Usᴇʀ: " + username + "\n🆔 ID: `" + user.telegramid + "`\n📁 Fɪʟᴇ: *" + file_name + "*\n🔑 Kᴇʏ: `******`\n\nSᴛᴀᴛᴜs: *Pᴇɴᴅɪɴɢ*");
}
if (Bot.getProperty("auto_activity_posts", true)) {
  var activity_channel = Bot.getProperty("activity_channel", "");
  if (activity_channel != "") {
    Bot.sendMessageToChatWithId(activity_channel, "✅ *Nᴇᴡ Fɪʟᴇ Sᴜᴄᴄᴇssғᴜʟʟʏ Cʟᴀɪᴍᴇᴅ!*\n\n👤 Usᴇʀ ID: `" + user.telegramid + "`\n📁 Fɪʟᴇ Nᴀᴍᴇ: *" + file_name + "*\n💰 Pᴀɪᴅ Aᴍᴏᴜɴᴛ: *" + ref_target + ".0 🅱🅶*");
  }
}
Bot.sendInlineKeyboardToChatWithId(agent_id, [[{ title: "✅ Cᴏɴғɪʀᴍ", command: "agent_confirm " + key }, { title: "❌ Cᴀɴᴄᴇʟ", command: "agent_cancel " + key }]], "👨‍💻 *Aɢᴇɴᴛ Pᴀɴᴇʟ*\n\nNᴇᴡ ᴅᴇʟɪᴠᴇʀʏ ʀᴇǫᴜᴇsᴛ.\n\n👤 Usᴇʀ: " + username + "\n🆔 ID: `" + user.telegramid + "`\n📁 Fɪʟᴇ: *" + file_name + "*\n\n🔑 Kᴇʏ:\n`" + key + "`\n\nCᴏɴғɪʀᴍ ᴅᴇʟɪᴠᴇʀʏ?");
