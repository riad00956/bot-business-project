// COMMAND 23: agent_panel | Type: Regular Command

var agents = Bot.getProperty("agents", []);
var is_agent = agents.indexOf(user.telegramid) >= 0 || user.telegramid == Bot.getProperty("agent_id") || user.telegramid == Bot.getProperty("admin_id");
if (!is_agent) { Bot.sendMessage("❌ Aᴄᴄᴇss Dᴇɴɪᴇᴅ"); return; }
var pending = Bot.getProperty("pending_keys", []);
var text = "👨‍💻 *Aɢᴇɴᴛ Pᴇɴᴅɪɴɢ Pᴀɴᴇʟ*\n\n";
if (pending.length == 0) { text += "Nᴏ ᴘᴇɴᴅɪɴɢ ᴅᴇʟɪᴠᴇʀʏ ʀᴇǫᴜᴇsᴛs."; }
else {
  for (var i = 0; i < pending.length; i++) {
    var k = pending[i];
    text += (i + 1) + ". `" + k + "`\n👤 Usᴇʀ ID: `" + Bot.getProperty("key_owner_" + k, "Unknown") + "`\n📌 Sᴛᴀᴛᴜs: *" + Bot.getProperty("key_status_" + k, "Pending") + "*\n\n";
  }
}
Bot.sendMessage(text);
