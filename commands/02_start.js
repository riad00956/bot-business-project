// COMMAND 2: /start | Type: Slash Command | Parse mode: Markdown

var admin_id = 8373846582;
var agent_id = 8373846582;
var agent_username = "@agent_username";
var support_username = "@support_username";
var withdraw_channel = "@withdraw_channel";
var activity_channel = "@activity_channel";
var file_name = "Neon Hub WebApp Source Code.";
var ref_target = 5;
var force_channels = ["@nxt_coder"];

if (!Bot.getProperty("admin_setup")) {
  Bot.setProperty("admin_id", admin_id, "integer");
  Bot.setProperty("agent_id", agent_id, "integer");
  Bot.setProperty("agent_username", agent_username, "string");
  Bot.setProperty("support_username", support_username, "string");
  Bot.setProperty("withdraw_channel", withdraw_channel, "string");
  Bot.setProperty("activity_channel", activity_channel, "string");
  Bot.setProperty("file_name", file_name, "string");
  Bot.setProperty("ref_target", ref_target, "integer");
  Bot.setProperty("force_channels", force_channels, "json");
  Bot.setProperty("auto_activity_posts", true, "boolean");
  Bot.setProperty("welcome_title", "🏡 Wᴇʟᴄᴏᴍᴇ ᴛᴏ ᴛʜᴇ Mᴀɪɴ Mᴇɴᴜ", "string");
  Bot.setProperty("welcome_subtitle", "Yᴏᴜ ᴄᴀɴ ɴᴏᴡ ᴜsᴇ ᴛʜɪs ᴘʀᴇᴍɪᴜᴍ ʙᴏᴛ.", "string");
  Bot.setProperty("bot_brand", "Premium Script Bot", "string");
  Bot.setProperty("reward_text", "5 Rᴇғᴇʀʀᴀʟs = 1 Pʀᴇᴍɪᴜᴍ Fɪʟᴇ", "string");
  Bot.setProperty("total_users", 0, "integer");
  Bot.setProperty("total_keys", 0, "integer");
  Bot.setProperty("total_withdraw", 0, "integer");
  Bot.setProperty("all_users", [], "json");
  Bot.setProperty("pending_keys", [], "json");
  Bot.setProperty("agents", [agent_id], "json");
  Bot.setProperty("admin_setup", true, "boolean");
}

var uid = user.telegramid;
var users = Bot.getProperty("all_users", []);
var joined_before = User.getProperty("joined_before");
var ref_id = message.split(" ")[1];
var user_number = Bot.getProperty("total_users", 0) + 1;
var name = user.first_name || "Premium User";
var username = user.username ? "@" + user.username : "Not Set";
var referred_by_text = "Direct Join";

if (!joined_before) {
  users.push(uid);
  Bot.setProperty("all_users", users, "json");
  Bot.setProperty("total_users", user_number, "integer");
  User.setProperty("joined_before", true, "boolean");
  User.setProperty("keys", [], "json");
  Bot.setProperty("balance_" + uid, 0, "integer");

  if (ref_id && ref_id != uid) {
    var rb = Bot.getProperty("balance_" + ref_id, 0);
    Bot.setProperty("balance_" + ref_id, rb + 1, "integer");
    User.setProperty("referred_by", ref_id, "string");
    referred_by_text = "ID: " + ref_id;
    Bot.sendMessageToChatWithId(ref_id, "🎉 *Nᴇᴡ Rᴇғᴇʀʀᴀʟ Rᴇᴄᴇɪᴠᴇᴅ!*\n\nYᴏᴜ ɪɴᴠɪᴛᴇᴅ ᴀ ɴᴇᴡ ᴜsᴇʀ.\n📊 Yᴏᴜʀ Rᴇғᴇʀʀᴀʟs: *" + (rb + 1) + "*");
  }

  if (Bot.getProperty("auto_activity_posts", true)) {
    var activity_channel = Bot.getProperty("activity_channel", "");
    if (activity_channel != "") {
      Bot.sendMessageToChatWithId(activity_channel, "🔔 *Nᴇᴡ Usᴇʀ Jᴏɪɴᴇᴅ!*\n\n🆔 ID: `" + uid + "`\n👤 Nᴀᴍᴇ: *" + name + "*\n📡 Rᴇғᴇʀʀᴇᴅ Bʏ: *" + referred_by_text + "*\n🔗 Usᴇʀɴᴀᴍᴇ: " + username + "\n📊 Usᴇʀ Nᴜᴍʙᴇʀ: *" + user_number + "*");
    }
  }
}

Bot.runCommand("check_join");
