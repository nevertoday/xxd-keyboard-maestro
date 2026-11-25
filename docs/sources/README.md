# 资料来源笔记

规矩在 `docs/MAINTAINING.md` 的「资料来源」：事实只出自 Keyboard Maestro 官方 Wiki；按钮名对照 App 自带的英文字符串；论坛帖子只当作标明出处的经验。这里记读资料时的要点、本站哪页用到，和官方页面自己的毛病。

## 文件

- `official.json`（提交）：每个官方页面的指纹，键是页面地址里 `wiki.keyboardmaestro.com/` 后面那段（`manual/Quick_Start`、`action/Pause_Until`），值是标题、网址、sha、字数；只是跳转的页面记下跳到哪（`redirect`）。`node scripts/sync-docs.mjs` 更新它，`--check` 只比对。
- `raw/`（只在本地，不提交）：
  - `official/<命名空间>/<页名>.txt`：DokuWiki 原始标记，第一行是这一页的网址。命名空间：`manual`（用户手册）、`action`（动作）、`trigger`（触发器）、`condition`（条件）、`token`（令牌）、`function`（函数）、`collection`（集合）、`assistance`（权限、安全输入这类问题的求助页，`manual/Troubleshooting` 链过去），根目录的概念页在 `_root/`。
  - `official/_index.md`：按命名空间列出全部页面的标题和网址。
- 读标记时：`Keyboard~~Maestro` 就是 Keyboard Maestro（`~~` 是不断行的空格），`BUTTON{{{OK}}}` 是界面上写着 OK 的按钮，`[[页名|文字]]` 是站内链接，`[[页名#锚点|文字]]` 链到某一节。

## 版本

- 2026-11-25 抓取：571 页正文、254 个跳转页（比 11-24 多了 `assistance` 命名空间的 16 页正文和 1 个跳转页）。官网和本机都是 Keyboard Maestro **11.1.1**。
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

本站每一页链了哪些官方页面，由 `node scripts/source-map.mjs --write` 从页面里的 wiki.keyboardmaestro.com 链接数出来，写在下面两行标记之间（中英文两页合在一起，不算 #锚点；两页链的不一样，它会提醒）。改了页面的链接，或者 `sync-docs` 报了改动的页面，重跑一遍，再按这张表找本站要改的地方。

<!-- source-map:start -->
| 本站 | 链到的官方页面 |
| --- | --- |
| 第 1 课 装好它，按一个键打开常用的 App | `_root/Frequently_Asked_Questions`、`_root/Troubleshooting`、`manual/How_do_I`、`manual/Purchase`、`manual/Quick_Start`、`manual/Troubleshooting`、`trigger/Hot_Key` |
| 第 2 课 打几个字，出来一整段 | `_root/Frequently_Asked_Questions`、`_root/Troubleshooting`、`action/Insert_Text_by_Pasting`、`action/Insert_Text_by_Typing`、`token/LongDate`、`trigger/Typed_String` |
| 第 3 课 一个键，做完一串事 | `_root/Troubleshooting`、`action/Activate_a_Specific_Application`、`action/Open_a_URL`、`manual/How_do_I`、`manual/Macro_Actions`、`manual/Preferences`、`manual/Quick_Start` |
| 0 Keyboard Maestro 是什么 | `_root/Fundamental_Concepts`、`manual/Administrative_Details`、`manual/How_do_I`、`manual/Overview`、`manual/Purchase`、`manual/Quick_Start` |
| 1 宏组：宏在哪里生效 | `_root/Conflict_Palette`、`_root/Macro_Activation`、`manual/Macro_Groups`、`manual/Palettes`、`manual/Search_Strings`、`manual/Smart_Groups`、`trigger/Application` |
| 2 触发器：什么时候开始 | `_root/Triggers`、`_root/Troubleshooting`、`manual/Macro_Triggers`、`trigger/Application`、`trigger/Folder`、`trigger/Hot_Key`、`trigger/Periodic`、`trigger/Time_of_Day`、`trigger/Typed_String`、`trigger/Wireless_Network` |
| 3 动作：它替你做什么 | `_root/Actions`、`_root/Fundamental_Concepts`、`action/Activate_a_Specific_Application`、`action/File_Actions`、`action/Insert_Text_by_Pasting`、`action/Insert_Text_by_Typing`、`action/Manipulate_a_Window`、`action/Press_a_Button`、`action/Type_a_Keystroke`、`manual/How_do_I`、`manual/Macro_Actions` |
| 4 变量、条件和循环：让宏看情况办事 | `_root/Conditions`、`action/For_Each`、`action/Pause_Until`、`action/Prompt_for_User_Input`、`action/Repeat`、`action/Switch_or_Case`、`action/While`、`manual/Calculations`、`manual/Conditions`、`manual/Tokens`、`manual/Variables`、`token/PromptButton` |
| 5 剪贴板：复制过的都还在 | `_root/Clipboards`、`_root/Status_Menu`、`_root/Troubleshooting`、`action/Copy_to_Named_Clipboard`、`action/Filter`、`action/Paste_by_Name`、`manual/Clipboard_History_Switcher`、`manual/Filters`、`manual/Named_Clipboard_Switcher`、`manual/Preferences`、`trigger/Clipboard_Filter` |
| 6 宏不灵的时候 | `_root/Conflict_Palette`、`_root/Macro_Activation`、`_root/Troubleshooting`、`action/Log`、`manual/How_do_I`、`manual/Macro_Debugger`、`manual/Troubleshooting`、`trigger/Hot_Key` |
| 7 再往深走：脚本、子程序、同步和分享 | `_root/Subroutines`、`action/Execute_a_JavaScript_For_Automation`、`action/Execute_a_Shell_Script`、`action/Execute_a_Subroutine`、`action/Execute_an_AppleScript`、`manual/Macro_Library`、`manual/Macro_Syncing`、`manual/Plug_In_Actions`、`manual/Scripting`、`trigger/Remote`、`trigger/Web_Server` |
| How-to 把常打的话做成缩写 | `_root/Troubleshooting`、`action/Insert_Text`、`trigger/Typed_String` |
| How-to 一键插入今天的日期 | `_root/Dates_and_Times`、`_root/Text_Fields`、`action/Insert_Text`、`token/ICUDateTime` |
| How-to 粘贴时去掉格式 | `_root/Troubleshooting`、`action/Type_a_Keystroke`、`manual/Filters` |
| How-to 重复的表格一键填好 | `_root/Troubleshooting`、`action/Insert_Text_by_Typing` |
| How-to 一个键切到某个 App | `_root/Troubleshooting`、`action/Activate_a_Specific_Application`、`manual/Macro_Groups`、`trigger/Hot_Key` |
| How-to 把窗口摆到固定的位置 | `_root/Troubleshooting`、`action/Manipulate_a_Window`、`function/SCREEN` |
| How-to 给没有快捷键的菜单配一个 | `_root/Troubleshooting`、`action/Select_or_Show_a_Menu_Item`、`action/Type_a_Keystroke`、`manual/Macro_Groups` |
| How-to 批量给文件改名 | `action/File_Actions`、`action/For_Each`、`action/Prompt_for_User_Input`、`action/Split_Path`、`collection/Finders_Selection` |
| How-to 文件一进文件夹就自动归档 | `condition/Text`、`trigger/Folder` |
| How-to 找到屏幕上的按钮，点它 | `_root/Found_Image`、`_root/Frequently_Asked_Questions`、`action/Find_Image_on_Screen`、`action/Move_or_Click_Mouse`、`condition/Found_Image`、`manual/How_do_I`、`manual/Preferences`、`manual/Troubleshooting` |
| How-to 把屏幕上的字认出来 | `_root/Frequently_Asked_Questions`、`action/OCR_Image`、`condition/OCR`、`manual/Whats_New` |
| How-to 每天到点自动跑 | `action/Notification`、`manual/Troubleshooting`、`trigger/Cron`、`trigger/Periodic`、`trigger/Time_of_Day`、`trigger/Wake` |
| How-to 连上某个 Wi-Fi、插上某个设备时自动做事 | `action/Mute_Audio_Device`、`condition/USB_Device`、`condition/Wireless_Network`、`trigger/Mounted_Volume`、`trigger/USB_Device`、`trigger/Wireless_Network` |
| How-to 先问你一句，再动手 | `action/Prompt_With_List`、`action/Prompt_for_User_Input`、`manual/Variables` |
| How-to 做一排点一下就跑的按钮 | `action/Conceal_Macro_Palettes`、`action/Show_Palette_of_Macros`、`manual/Macro_Groups`、`manual/Palettes`、`trigger/Global_Macro_Palette` |
| How-to 两台 Mac 用同一套宏 | `manual/How_do_I`、`manual/Macro_Syncing` |
| How-to 导出、导入和分享宏 | `manual/Macro_Library`、`manual/Macros`、`manual/Menus`、`manual/Palettes` |
| How-to 宏停不下来怎么办 | `_root/Frequently_Asked_Questions`、`_root/Troubleshooting`、`manual/How_do_I`、`manual/Macro_Debugger`、`manual/Menus` |
| Wiki 宏 | `_root/Macro_Activation`、`manual/How_do_I`、`manual/Macros`、`manual/Quick_Start` |
| Wiki 编辑器和引擎 | `_root/Troubleshooting`、`manual/How_do_I`、`manual/Quick_Start` |
| Wiki 宏组 | `manual/Macro_Groups` |
| Wiki 触发器 | `_root/Triggers`、`manual/Macro_Triggers`、`manual/Quick_Start` |
| Wiki 动作 | `_root/Troubleshooting`、`manual/How_do_I`、`manual/Macro_Actions` |
| Wiki 热键 | `manual/How_do_I`、`trigger/Hot_Key` |
| Wiki 输入字符串触发器 | `_root/Frequently_Asked_Questions`、`trigger/Typed_String` |
| Wiki 面板 | `_root/Troubleshooting`、`manual/Macro_Groups`、`manual/Palettes` |
| Wiki 状态菜单 | `_root/Status_Menu`、`manual/How_do_I`、`trigger/Status_Menu` |
| Wiki 变量 | `manual/Variables` |
| Wiki 令牌 | `_root/Frequently_Asked_Questions`、`_root/Tokens`、`manual/Tokens` |
| Wiki 计算 | `_root/Functions`、`_root/Text_Fields`、`manual/Calculations`、`manual/Variables` |
| Wiki 条件 | `_root/Conditions`、`_root/Troubleshooting`、`manual/Conditions` |
| Wiki 找图 | `_root/Found_Image` |
| Wiki 剪贴板历史 | `_root/Clipboards`、`manual/Clipboard_History_Switcher`、`manual/Preferences` |
| Wiki 命名剪贴板 | `_root/Clipboards`、`manual/Named_Clipboard_Switcher` |
| Wiki 权限 | `_root/Frequently_Asked_Questions`、`_root/Troubleshooting`、`action/Create_Calendar_Event`、`manual/Preferences`、`manual/Troubleshooting`、`manual/Whats_New`、`token/WebBrowserTokens`、`trigger/Wireless_Network` |
| Wiki 智能组 | `manual/How_do_I`、`manual/Search_Strings`、`manual/Smart_Groups` |
| Wiki 调试器和引擎日志 | `_root/Troubleshooting`、`manual/Macro_Debugger` |
| Wiki 子程序 | `_root/Subroutines`、`action/Execute_a_Subroutine`、`action/Return_Result` |
| Wiki 宏库 | `_root/Macro_Library`、`manual/Macro_Library`、`manual/Macros` |
| Wiki 插件动作 | `manual/Administrative_Details`、`manual/Plug_In_Actions` |
| 常见问题 | `_root/Frequently_Asked_Questions`、`_root/Shortcut_Actions`、`_root/Troubleshooting`、`manual/Administrative_Details`、`manual/How_do_I`、`manual/Macro_Syncing`、`manual/Menus`、`manual/Preferences`、`manual/Purchase`、`manual/Support`、`trigger/Typed_String` |
<!-- source-map:end -->

## 官方页面自己的毛病

写的人发现了就记在这里（页面、哪句、和别处怎么对不上、本站怎么写）。

- `_root/Frequently_Asked_Questions`「How can I transfer my macros to a new Mac?」写的是 `~/Library/Preferences/com.stairways,keyboardmaestro.*`（中间是逗号），`manual/How_do_I` 讲同一件事写 `com.stairways.keyboardmaestro.*`。本站写句点。
- `_root/Frequently_Asked_Questions` 的 Sequoia、Tahoe 两段说 Apple Text Recognition「currently supports English-only」，可 `manual/Whats_New` 的「Changed in 11.1」写着它加了多种欧洲语言、粤语、中文和自动识别，FAQ 这句是旧的。本站照 `manual/Whats_New` 写：Apple Text Recognition 认得中文。
- 同样那两段把录屏权限叫「Screen Monitoring permissions」，`manual/Troubleshooting` 叫 Screen Recording，macOS 15 起系统设置里叫 Screen & System Audio Recording。本站照 macOS 现在的名字写，括号里注旧名。
- `manual/Macro_Actions` 把 Edit ➤ Insert Action by Name 写了两遍，第二处链的是 `Menus#Insert_Action`，应该是 Edit ➤ Insert Action。同页说插件动作在 Third Party Plug Ins 这一类，`manual/Plug_In_Actions` 却写成 Third Party Plugins（文件夹和菜单都是）。App 的字符串是 **Third Party Plug Ins**，本站照它写。
- 按名字插入动作的那一项，`manual/Menus` 写成「Edit ➤ Insert Action 菜单里的 By Name」，`manual/Editor_Window` 写 Insert Action By Name，App 的字是 **Insert Action by Name**。本站照 App 写。
- `manual/Macro_Groups` 写宏组选项是「Available in the following applications」「Available except in the following applications」，App 上的字是 **Available in these applications:** 和 **Available except in these applications:**。本站照 App。
- `_root/Clipboards` 把保存剪贴板历史的偏好设置叫 Save Clipboard History to Disk，`manual/Preferences` 写「save the clipboard history between logins」，App 的字符串里是 Save Clipboard History Between Launches。三处对不上。本站照 App 写 **Save Clipboard History Between Launches**。
- `_root/Frequently_Asked_Questions`「What is the difference between text token fields and calculation fields?」用 `%CurrentClipboard%` 举例，`token/SystemClipboard` 说 v8 起它改叫 `%SystemClipboard%`。本站写新名字，括号里注旧名。
- `token/LongDate` 的 Localization 一句「Prior to Mojave, and after Keyboard Maestro 9.0, dates should be in your chosen language」自己就说不通，下一句又说 9.0 绕过了 Mojave 的改动。本站不写 `%LongDate%` 出来是哪种语言。
- `_root/Troubleshooting`「Not Being Able To Enter a Hot Key」还在说 Access for Assistive Devices 和 Mavericks 的 Security & Privacy 面板，`manual/Troubleshooting` 也写「unlock the System Preferences」，都是旧 macOS 的叫法。本站写 **系统设置 ▸ 隐私与安全性 ▸ 辅助功能**，并说 macOS 12 和更早叫系统偏好设置。
- `_root/Subroutines` 说子程序用「Return from Subroutine」动作返回值，`action/Return_from_Subroutine` 却跳转到 `action/Return_Result`，App 里这个动作叫 **Return Result**。本站写 **Return Result**，链 `action/Return_Result`。
- 取消所有正在跑的宏，几页给的键不一样：`_root/Troubleshooting` 是按住 ⌃⌥⇧ 点状态菜单图标，`manual/How_do_I` 是 ⌃⌥⇧、⌘ 可按可不按，`manual/Menus` 和 `_root/Frequently_Asked_Questions` 是四个键全按。本站照 `manual/How_do_I` 写：按住 ⌃⌥⇧（⌘ 可以一起按），点状态菜单图标。
- `token/Tab` 说 `%Tab%` 是 0x08，Tab 字符其实是 0x09（0x08 是退格）。本站不写这个编码。
- `trigger/Cron` 的例子表把 `0 9,12,18 * * *` 讲成「9am, noon, and 3pm」，18 点是下午 6 点。同页正文说「+」加在日期（day of month）那一栏，可紧接着的例子和表里的 `+Fri`、`+Mon`、`+Sat` 都加在星期（day of week）那一栏。How-to「每天到点自动跑」照官方的例子写（日期栏 `-1-7`、星期栏 `+Fri`），没用那一行时间表。
