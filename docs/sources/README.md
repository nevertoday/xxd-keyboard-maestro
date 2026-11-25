# 资料来源笔记

规矩在 `docs/MAINTAINING.md` 的「资料来源」：事实只出自 Keyboard Maestro 官方 Wiki；按钮名对照 App 自带的英文字符串；论坛帖子只当作标明出处的经验。这里记读资料时的要点、本站哪页用到，和官方页面自己的毛病。

## 文件

- `official.json`（提交）：每个官方页面的指纹，键是页面地址里 `wiki.keyboardmaestro.com/` 后面那段（`manual/Quick_Start`、`action/Pause_Until`），值是标题、网址、sha、字数；只是跳转的页面记下跳到哪（`redirect`）。`node scripts/sync-docs.mjs` 更新它，`--check` 只比对。
- `raw/`（只在本地，不提交）：
  - `official/<命名空间>/<页名>.txt`：DokuWiki 原始标记，第一行是这一页的网址。命名空间：`manual`（用户手册）、`action`（动作）、`trigger`（触发器）、`condition`（条件）、`token`（令牌）、`function`（函数）、`collection`（集合），根目录的概念页在 `_root/`。
  - `official/_index.md`：按命名空间列出全部页面的标题和网址。
- 读标记时：`Keyboard~~Maestro` 就是 Keyboard Maestro（`~~` 是不断行的空格），`BUTTON{{{OK}}}` 是界面上写着 OK 的按钮，`[[页名|文字]]` 是站内链接，`[[页名#锚点|文字]]` 链到某一节。

## 版本

- 2026-11-24 抓取：555 页正文、253 个跳转页。官网和本机都是 Keyboard Maestro **11.1.1**。
- Keyboard Maestro 11 要 macOS 10.13 或更新（`manual/Administrative_Details`）。
- 界面只有英文（App 里只有 `en.lproj`），所以按钮名一律照英文写；`tools/km-labels.json` 是从 App 的 `Localizable.strings` 和官方页面标题整理出来的按钮名清单。

## 写的时候要记得的几条

- 编辑器和引擎是两个程序：编辑器（Keyboard Maestro）只在改宏时开，引擎（Keyboard Maestro Engine）在后台执行宏，应该一直开着；官方建议在偏好设置里打开 **Launch Engine at Login**（`manual/Quick_Start`）。
- 没有「保存」按钮：改了宏，几秒以后自动存好（`manual/Quick_Start`）。
- 不在 Mac App Store 上架，因为它没法沙盒化（`manual/How_do_I`）。下载只从官网。
- 一份许可证给一个人用，最多装 5 台 Mac（`manual/Purchase`）。价格只在 0-what 和常见问题里提一次，写明是官方购买页的说法和查的日期。
- 买了 30 天内觉得不好用可以退款（`manual/Administrative_Details`）。有全功能的试用版（`manual/Purchase`）。
- 宏组管宏在哪里、什么时候生效；一个宏只有在它的宏组生效时才可能被触发（`manual/Quick_Start`、`manual/Macro_Groups`、`_root/Macro_Activation`）。

## 和本站的对应

写的人读完资料，把实际用到的页面补进这张表。

| 本站 | 主要的官方页面 |
| --- | --- |
| 第 1 课 装好它 | `manual/Quick_Start`、`manual/How_do_I`、`manual/Troubleshooting`、`manual/Assistance`、`manual/Preferences`、`trigger/Hot_Key`、`action/Activate_a_Specific_Application` |
| 第 2 课 打几个字 | `trigger/Typed_String`、`action/Insert_Text_by_Pasting`、`action/Insert_Text_by_Typing`、`_root/Text_Fields`、`_root/Tokens` |
| 第 3 课 一个键做完一串事 | `action/Open_a_URL`、`action/Activate_a_Specific_Application`、`action/Manipulate_a_Window`、`action/Pause`、`action/Pause_Until`、`_root/Status_Menu`、`manual/Troubleshooting` |
| 0 是什么 | `manual/Quick_Start`、`manual/Overview`、`manual/Features`、`_root/Fundamental_Concepts`、`manual/Purchase`、`manual/Administrative_Details` |
| 1 宏组 | `manual/Macro_Groups`、`_root/Macro_Activation`、`action/Activate_Macro_Group`、`manual/Palettes`、`manual/Smart_Groups` |
| 2 触发器 | `manual/Macro_Triggers`、`trigger/*` |
| 3 动作 | `manual/Macro_Actions`、`action/*` |
| 4 变量、条件和循环 | `manual/Variables`、`manual/Conditions`、`action/If_Then_Else`、`action/Pause_Until`、`action/Prompt_for_User_Input`、`action/For_Each`、`action/Repeat`、`action/While`、`manual/Calculations`、`manual/Tokens`、`_root/Tokens`、`_root/Functions` |
| 5 剪贴板 | `_root/Clipboards`、`manual/Clipboard_History_Switcher`、`manual/Named_Clipboard_Switcher`、`manual/Filters`、`action/Filter` |
| 6 宏不灵的时候 | `manual/Troubleshooting`、`manual/Macro_Debugger`、`action/Log`、`_root/Troubleshooting`、`_root/Status_Menu` |
| 7 再往深走 | `manual/Scripting`、`_root/Shell_Scripting`、`_root/AppleScript`、`_root/JavaScript_for_Automation`、`_root/Subroutines`、`manual/Macro_Syncing`、`manual/Macro_Library`、`manual/Plug_In_Actions`、`trigger/Web_Server`、`trigger/Remote` |
| Wiki 基本概念（宏、编辑器和引擎、宏组、触发器、动作） | `manual/Quick_Start`、`manual/Macros`、`_root/Macro_Activation`、`manual/Macro_Groups`、`manual/Macro_Triggers`、`_root/Triggers`、`manual/Macro_Actions`、`manual/How_do_I`、`_root/Troubleshooting` |
| Wiki 让宏开始跑（热键、输入字符串触发器、面板、状态菜单） | `trigger/Hot_Key`、`trigger/Typed_String`、`manual/Palettes`、`trigger/Status_Menu`、`_root/Status_Menu`、`manual/How_do_I`、`_root/Frequently_Asked_Questions`、`_root/Troubleshooting` |
| Wiki 让宏看情况办事（变量、令牌、计算、条件、找图） | `manual/Variables`、`manual/Tokens`、`_root/Tokens`、`token/SystemClipboard`、`token/CurrentApplication`、`manual/Calculations`、`_root/Text_Fields`、`_root/Functions`、`manual/Conditions`、`_root/Conditions`、`_root/Found_Image`、`action/Find_Image_on_Screen`、`_root/Frequently_Asked_Questions` |
| Wiki 剪贴板（剪贴板历史、命名剪贴板） | `_root/Clipboards`、`manual/Clipboard_History_Switcher`、`manual/Named_Clipboard_Switcher`、`manual/Preferences` |
| Wiki 整理和排错（权限、智能组、调试器和引擎日志） | `manual/Troubleshooting`、`_root/Troubleshooting`、`manual/Preferences`、`manual/Whats_New`、`_root/Frequently_Asked_Questions`、`token/WebBrowserTokens`、`action/Create_Calendar_Event`、`trigger/Wireless_Network`、`manual/Smart_Groups`、`manual/Search_Strings`、`manual/Macro_Debugger`、`manual/Menus`、`action/Log` |
| Wiki 再往深走（子程序、宏库、插件动作） | `_root/Subroutines`、`trigger/Subroutine`、`action/Execute_a_Subroutine`、`manual/Macro_Library`、`_root/Macro_Library`、`manual/Macros`、`manual/Plug_In_Actions`、`manual/Administrative_Details` |
| 常见问题 | `manual/Preferences`、`manual/Administrative_Details`、`manual/How_do_I`、`_root/Frequently_Asked_Questions`、`_root/Shortcut_Actions`、`action/Execute_Shortcut`、`manual/Purchase`、`manual/Troubleshooting`、`_root/Troubleshooting`、`trigger/Typed_String`、`manual/Macro_Syncing` |

## 官方页面自己的毛病

写的人发现了就记在这里（页面、哪句、和别处怎么对不上、本站怎么写）。

- `_root/Frequently_Asked_Questions`「How can I transfer my macros to a new Mac?」写的是 `~/Library/Preferences/com.stairways,keyboardmaestro.*`（中间是逗号），`manual/How_do_I` 讲同一件事写 `com.stairways.keyboardmaestro.*`。本站写句点。
- `_root/Frequently_Asked_Questions` 的 Sequoia、Tahoe 两段说 Apple Text Recognition「currently supports English-only」，可 `manual/Whats_New` 记着它已经支持多种欧洲语言、粤语、中文和自动识别。本站的 Wiki 和常见问题没写 OCR 支持哪些语言；写 OCR 那篇时以 `manual/Whats_New` 和 `action/OCR_Screen` 为准，别照 FAQ。
- 同样那两段把录屏权限叫「Screen Monitoring permissions」，`manual/Troubleshooting` 叫 Screen Recording，macOS 15 起系统设置里叫 Screen & System Audio Recording。本站照 macOS 现在的名字写，括号里注旧名。
- `manual/Macro_Actions` 把 Edit ➤ Insert Action by Name 写了两遍，第二处链的是 `Menus#Insert_Action`，应该是 Edit ➤ Insert Action。同页说插件动作在 Third Party Plug Ins 这一类，`manual/Plug_In_Actions` 却写成 Third Party Plugins（文件夹和菜单都是）。App 的字符串是 **Third Party Plug Ins**，本站照它写。
- `manual/Macro_Groups` 写宏组选项是「Available in the following applications」「Available except in the following applications」，App 上的字是 **Available in these applications:** 和 **Available except in these applications:**。本站照 App。
- `_root/Clipboards` 把保存剪贴板历史的偏好设置叫 Save Clipboard History to Disk，`manual/Preferences` 写「save the clipboard history between logins」，App 的字符串里是 Save Clipboard History Between Launches。三处对不上，本站不写这个选项的名字，只说 **General** 里保存剪贴板历史的那一项。
- `_root/Frequently_Asked_Questions`「What is the difference between text token fields and calculation fields?」用 `%CurrentClipboard%` 举例，`token/SystemClipboard` 说 v8 起它改叫 `%SystemClipboard%`。本站写新名字，括号里注旧名。
- `token/LongDate` 的 Localization 一句「Prior to Mojave, and after Keyboard Maestro 9.0, dates should be in your chosen language」自己就说不通，下一句又说 9.0 绕过了 Mojave 的改动。本站不写 `%LongDate%` 出来是哪种语言。
- `_root/Troubleshooting`「Not Being Able To Enter a Hot Key」还在说 Access for Assistive Devices 和 Mavericks 的 Security & Privacy 面板，`manual/Troubleshooting` 也写「unlock the System Preferences」，都是旧 macOS 的叫法。本站写 **系统设置 ▸ 隐私与安全性 ▸ 辅助功能**，并说 macOS 12 和更早叫系统偏好设置。
