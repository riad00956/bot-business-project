# 🤖 Premium TBB Bot — Bot Business Project

  **Referral-to-Earn Telegram Bot** | Force Join | Key System | Agent Panel | Admin Dashboard

  ---

  ## 📁 Root Files (Bot Business Import Format)

  ```
  ├── flows.json      ← 🔑 মূল ফাইল — সব screen/flow এখানে
  ├── config.json     ← ⚙️ Bot settings (admin ID, channels etc.)
  ├── messages.json   ← 💬 Bot messages
  └── README.md       ← এই ফাইল
  ```

  ---

  ## 🔄 Bot Business-এ Import করার নিয়ম

  ### Step 1: Deploy Key যোগ করুন
  1. এই GitHub repo → **Settings** → **Deploy keys** → **Add deploy key**
  2. Bot Business → **Tools** → **Git sync** → SSH Key copy করুন
  3. Paste করুন + **Allow write access** চেক করুন → Save

  ### Step 2: Import করুন
  1. Bot Business → **Tools** → **Git sync**
  2. **Git repository** তে দিন:
  ```
  git@github.com:riad00956/bot-business-project.git
  ```
  3. **Import from git** চাপুন ✅

  ---

  ## ⚙️ প্রথমে config.json পরিবর্তন করুন

  | Field | বর্তমান মান | পরিবর্তন করুন |
  |-------|------------|--------------|
  | `admin_id` | 8373846582 | আপনার Telegram ID |
  | `agent_id` | 8373846582 | Agent-এর ID |
  | `agent_username` | @agent_username | @আপনার_agent |
  | `support_username` | @support_username | @আপনার_support |
  | `withdraw_channel` | @withdraw_channel | @channel_name |
  | `activity_channel` | @activity_channel | @channel_name |
  | `force_channels` | ["@nxt_coder"] | ["@আপনার_চ্যানেল"] |
  | `file_name` | Neon Hub WebApp... | আপনার ফাইলের নাম |

  ---

  ## 🌟 Bot Features

  | Feature | Description |
  |---------|-------------|
  | ✅ Force Join | চ্যানেল join না করলে bot ব্যবহার করা যাবে না |
  | ✅ Referral System | Referral link share করে points earn করুন |
  | ✅ Withdraw System | 5 referral-এ premium file পাবেন |
  | ✅ Key System | Unique key generate হবে প্রতিটি withdrawal-এ |
  | ✅ Agent Panel | Agent approve/cancel করবে delivery |
  | ✅ Admin Dashboard | Complete control panel |
  | ✅ Activity Posts | Auto channel posts for new joins/withdrawals |
  | ✅ Leaderboard | Top referrers ranking |
  | ✅ Broadcast | সব user-কে message পাঠান |

  ---

  **GitHub:** [riad00956/bot-business-project](https://github.com/riad00956/bot-business-project)
  