// COMMAND 10: my_keys | Type: Regular Command

var keys = User.getProperty("keys", []);
var text = "🔑 *Mʏ Pʀᴇᴍɪᴜᴍ Kᴇʏs*\n\n";
if (keys.length == 0) { text += "Yᴏᴜ ʜᴀᴠᴇ ɴᴏ ᴋᴇʏs ʏᴇᴛ."; }
else {
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
    text += "*" + (i + 1) + ".* `" + k + "`\n📁 Fɪʟᴇ: *" + Bot.getProperty("key_file_" + k, "Premium File") + "*\n📌 Sᴛᴀᴛᴜs: *" + Bot.getProperty("key_status_" + k, "Pending") + "*\n\n";
  }
}
Bot.sendMessage(text);
