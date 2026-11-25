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

## 官方页面自己的毛病

写的人发现了就记在这里（页面、哪句、和别处怎么对不上、本站怎么写）。
