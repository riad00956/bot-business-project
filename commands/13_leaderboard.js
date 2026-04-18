// COMMAND 13: leaderboard | Type: Regular Command

var users = Bot.getProperty("all_users", []);
var text = "🏆 *Tᴏᴘ Rᴇғᴇʀʀᴀʟ Lᴇᴀᴅᴇʀʙᴏᴀʀᴅ*\n\n";
if (users.length == 0) { text += "Nᴏ ᴜsᴇʀs ғᴏᴜɴᴅ."; }
else {
  for (var i = 0; i < users.length && i < 10; i++) {
    var uid = users[i];
    text += (i + 1) + ". Usᴇʀ `" + uid + "` — *" + Bot.getProperty("balance_" + uid, 0) + "* ʀᴇғᴇʀʀᴀʟs\n";
  }
}
Bot.sendMessage(text);
