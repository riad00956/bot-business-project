# 🤖 Premium TBB Bot — Bot Business Project

  **Premium Telegram Bot** with Referral System, Key Management, Agent Panel & Admin Dashboard.

  ---

  ## 📁 ফাইল স্ট্রাকচার

  ```
  ├── commands/
  │   ├── 01_config.js           → Config কমান্ড
  │   ├── 02_start.js            → /start কমান্ড
  │   ├── 03_check_join.js       → Channel check
  │   ├── 04_check_join_step.js  → Join step
  │   ├── 05_check_join_result.js→ Join result
  │   ├── 06_main_menu.js        → Main Menu
  │   ├── 07_my_account.js       → My Account
  │   ├── 08_refer.js            → Refer & Earn
  │   ├── 09_withdraw.js         → Withdraw
  │   ├── 10_my_keys.js          → My Keys
  │   ├── 11_agent_confirm.js    → Agent Confirm
  │   ├── 12_agent_cancel.js     → Agent Cancel
  │   ├── 13_leaderboard.js      → Leaderboard
  │   ├── 14_support.js          → Support
  │   ├── 15_rules.js            → Rules
  │   ├── 16_how_it_works.js     → How It Works
  │   ├── 17_admin.js            → /admin command
  │   ├── 18_admin_panel.js      → Admin Panel
  │   ├── 19_force_join_panel.js → Force Join
  │   ├── 20_settings.js         → Bot Settings
  │   ├── 21_customize_ui.js     → Customize UI
  │   ├── 22_activity_panel.js   → Activity Panel
  │   ├── 23_agent_panel.js      → Agent Panel
  │   ├── 24_stats.js            → Bot Stats
  │   └── 25_wildcard.js         → * (Default handler)
  ├── INSTALLATION_GUIDE.txt     → সম্পূর্ণ গাইড
  └── README.md                  → এই ফাইল
  ```

  ---

  ## ⚙️ প্রথমে যা পরিবর্তন করতে হবে

  `commands/01_config.js` ও `commands/02_start.js` ফাইলে:

  | Variable | Description |
  |----------|-------------|
  | `admin_id` | আপনার Telegram নিউমেরিক ID |
  | `agent_id` | Agent-এর Telegram ID |
  | `agent_username` | @agent_username |
  | `support_username` | @support_username |
  | `withdraw_channel` | @channel_name |
  | `activity_channel` | @channel_name |
  | `force_channels` | ["@channel1"] |
  | `ref_target` | কতটা রেফারেলে ফাইল পাবে |
  | `file_name` | আপনার ফাইলের নাম |

  ---

  ## 📲 Bot Business-এ Setup করার নিয়ম

  1. Bot Business অ্যাপ খুলুন
  2. নতুন বট তৈরি করুন → Token দিন
  3. **Commands** → **Add Command**
  4. প্রতিটি `commands/` ফাইল আলাদা কমান্ড হিসেবে যোগ করুন
  5. `config` কমান্ড প্রথমে রান করুন
  6. `/start` দিয়ে টেস্ট করুন

  ### কমান্ড টাইপ:
  - `/start`, `/admin` → **Slash Command**
  - বাকি সব → **Regular Command**
  - `*` → **Default/Wildcard Command** (সবার শেষে যোগ করুন)

  ---

  ## 🌟 Features

  - ✅ Force Channel Join System
  - ✅ Referral Tracking & Balance
  - ✅ Key Generation & Management
  - ✅ Agent Delivery System
  - ✅ Admin Full Control Panel
  - ✅ Activity Auto-Posts to Channel
  - ✅ Leaderboard System
  - ✅ Customizable UI (Title, Brand, etc.)
  - ✅ Broadcast System
  - ✅ Stats Dashboard

  ---

  **GitHub:** [riad00956/bot-business-project](https://github.com/riad00956/bot-business-project)
  