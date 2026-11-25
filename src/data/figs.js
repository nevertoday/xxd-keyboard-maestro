// 正文里的图示（components/Fig.astro 画）。每张图一个 id，MDX 里写 <Fig id="…" />。
//   type：画法（compare 两条路对比、term 终端、folder 文件夹、anatomy 一句话拆成几块、stack 分层、
//         flow 几步流程、night 一夜、ladder 由强到弱、fan 几个模型挑刺、tree 一个带几个）
//   base：和语言无关的部分（图标、命令、哪一步要你开口……；term 的窗口标题写在 base.app）
//   zh / en：文字。以后加了别的语言，新手三课的图（LESSON_FIGS）要在 src/i18n/<语言>.js 的 figs 里补文字，结构和这里的 en 一样（check-i18n 会查）。
// 每种画法要哪些字段，看 Fig.astro 里对应的那一段。
// 写图里的字：短，一格一件事；不重复正文的整句，也不重复「卖点」（见 docs/MAINTAINING.md）。
export const FIG_UI = {
  zh: { label: "图示", replay: "再看一遍" },
  en: { label: "Diagram", replay: "Replay" },
};

// 新手三课用到的图（每种语言都要有）
export const LESSON_FIGS = [];

export const FIGS = {
  // 第 0 步：宏从写好到跑起来
  "0-what-chain": {
    type: "flow",
    base: { icons: ["Pencil", "Cog", "FolderOpen", "Zap", "ListOrdered"] },
    zh: {
      steps: [
        { t: "编辑器", d: "写好宏，可以关掉" },
        { t: "引擎", d: "在后台一直开着" },
        { t: "宏组", d: "这会儿生效吗" },
        { t: "触发器", d: "那一刻到了" },
        { t: "动作", d: "从上往下做完" },
      ],
      cap: "宏从写好到跑起来：引擎开着、宏组生效，触发器一响，动作依次做完",
    },
    en: {
      steps: [
        { t: "Editor", d: "write the macro, then quit" },
        { t: "Engine", d: "always running in the background" },
        { t: "Macro group", d: "is it active right now?" },
        { t: "Trigger", d: "the moment arrives" },
        { t: "Actions", d: "run top to bottom" },
      ],
      cap: "From written to running: the Engine is on, the group is active, the trigger fires, the actions run in order",
    },
  },
  // 第 1 步：方向键挪窗口，放进开关式的宏组
  "1-groups-toggle": {
    type: "compare",
    base: { a: { icons: ["Move", "TextCursorInput", "AppWindow"] }, b: { icons: ["Keyboard", "Move", "ToggleLeft"] } },
    zh: {
      a: { who: "方向键直接当热键", steps: ["方向键挪窗口", "打字时想移一下光标", "一按，窗口跑了"], end: "平时没法用方向键" },
      b: { who: "放进按一下才生效的宏组", steps: ["按 ⌃⌥⌘W 打开宏组", "方向键挪窗口", "再按 ⌃⌥⌘W 关掉"], end: "方向键回到原来的用处" },
      cap: "同样四个方向键，只在你打开宏组以后才归宏用",
    },
    en: {
      a: { who: "Arrow keys as plain hot keys", steps: ["Arrows move the window", "You want to move the cursor", "Press one, the window jumps"], end: "Arrows are useless the rest of the time" },
      b: { who: "In a group you switch on", steps: ["Press ⌃⌥⌘W to activate the group", "Arrows move the window", "Press ⌃⌥⌘W again to switch off"], end: "Arrows go back to normal" },
      cap: "The same four arrow keys belong to your macros only while the group is on",
    },
  },
  // 第 3 步：一个宏就是一串动作
  "3-actions-log": {
    type: "flow",
    base: { icons: ["AppWindow", "Menu", "Keyboard", "Bell"] },
    zh: {
      steps: [
        { t: "Activate a Specific Application", d: "切到文本编辑" },
        { t: "Select or Show a Menu Item", d: "选新建文稿的菜单" },
        { t: "Insert Text by Typing", d: "打出今天的日期" },
        { t: "Notification", d: "说一声做好了" },
      ],
      cap: "一个宏就是一串动作，从上往下一个接一个做",
    },
    en: {
      steps: [
        { t: "Activate a Specific Application", d: "switch to TextEdit" },
        { t: "Select or Show a Menu Item", d: "choose the New menu item" },
        { t: "Insert Text by Typing", d: "type today's date" },
        { t: "Notification", d: "say it's done" },
      ],
      cap: "A macro is a list of actions, done one after another from the top",
    },
  },
  // 第 4 步：变量能活多久、谁看得见
  "4-variables-scope": {
    type: "stack",
    base: { icons: ["Globe", "GitBranch", "Lock"], hi: 2 },
    zh: {
      layers: [
        { t: "Global", d: "名字没有特别的开头。所有宏都能读能改，存在 Mac 上，重启也还在" },
        { t: "Instance", d: "名字以 Instance 开头。这一次运行，连同它调用的子宏" },
        { t: "Local", d: "名字以 Local 开头。只有这一次运行的这个宏自己" },
      ],
      cap: "从上往下，看得见的范围越来越小，活得也越来越短。只在这一次用的，用 Local。",
    },
    en: {
      layers: [
        { t: "Global", d: "No special prefix. Every macro can read and change it, and it stays on your Mac through restarts" },
        { t: "Instance", d: "Starts with Instance. This one run, plus the sub-macros it calls" },
        { t: "Local", d: "Starts with Local. Only this macro, in this one run" },
      ],
      cap: "Going down, fewer macros can see it and it lives for less time. If you only need it for this run, use Local.",
    },
  },
  // 第 6 步：宏不灵时，从外往里查
  "6-debug-order": {
    type: "flow",
    base: { icons: ["ShieldCheck", "Power", "ToggleRight", "Keyboard", "Bug"] },
    zh: {
      steps: [
        { t: "权限", d: "偏好设置的 Security 一栏都开着" },
        { t: "引擎", d: "菜单栏上有它的图标" },
        { t: "宏组和宏", d: "都启用，宏组这会儿生效" },
        { t: "触发器", d: "热键没和别的宏撞车" },
        { t: "动作", d: "调试器一步步走，看 Engine.log" },
      ],
      cap: "前两层出问题，所有的宏一起不灵；越往后，越只跟这一个宏有关。",
    },
    en: {
      steps: [
        { t: "Permissions", d: "Everything on in the Security preferences" },
        { t: "Engine", d: "Its icon is in the menu bar" },
        { t: "Group and macro", d: "Both enabled, group active right now" },
        { t: "Trigger", d: "No other macro uses the same hot key" },
        { t: "Actions", d: "Step through in the debugger, read Engine.log" },
      ],
      cap: "Trouble in the first two breaks every macro at once. The further along, the more it's about this one macro alone.",
    },
  },
  // How-to「文件一进文件夹就自动归档」：文件夹触发器从等文件到挪走的四步
  "watch-folder-flow": {
    type: "flow",
    base: { icons: ["FolderDown", "Hourglass", "FileSearch", "FolderInput"] },
    zh: {
      steps: [
        { t: "新文件进来", d: "Folder 触发器：adds an item" },
        { t: "等它下载完", d: "ignore partial or changing files" },
        { t: "看是不是 PDF", d: "%TriggerValue% 以 .pdf 结尾" },
        { t: "挪进收件箱", d: "File Actions：Move" },
      ],
      cap: "每进来一个文件，这四步就走一遍；不是 PDF 的，走到第三步就停。",
    },
    en: {
      steps: [
        { t: "A file arrives", d: "Folder trigger: adds an item" },
        { t: "Wait for the download", d: "ignore partial or changing files" },
        { t: "Is it a PDF?", d: "%TriggerValue% ends with .pdf" },
        { t: "Move it", d: "File Actions: Move" },
      ],
      cap: "These four steps run once for every file that arrives. Anything that isn't a PDF stops at step three.",
    },
  },
  // How-to「宏停不下来怎么办」：几种停法，先试的在上，最后一招在下
  "stop-macro-ladder": {
    type: "ladder",
    base: { icons: ["CircleStop", "Menu", "Power", "Wrench"] },
    zh: {
      cap: "停宏的几种办法：最上面那一下先试，不灵再往下走，最下面的留到实在没办法时。",
      high: "先试",
      low: "实在不行",
      rungs: [
        { t: "按住 ⌃⌥⇧ 点图标", d: "所有正在跑的宏一起停" },
        { t: "Status Menu ▸ Cancel", d: "挑一个正在跑的宏停掉" },
        { t: "Quit Keyboard Maestro Engine", d: "引擎退出，宏都不跑了" },
        { t: "按住 ⌃⌥⇧⌘ 打开编辑器", d: "引擎不启动，好去改那个宏" },
      ],
    },
    en: {
      cap: "Ways to stop a macro: try the top one first, move down if it doesn't work, and save the bottom one for when nothing else does.",
      high: "Try first",
      low: "Last resort",
      rungs: [
        { t: "Hold ⌃⌥⇧, click the icon", d: "Stop every running macro" },
        { t: "Status Menu ▸ Cancel", d: "Stop one running macro" },
        { t: "Quit Keyboard Maestro Engine", d: "The Engine quits, nothing runs" },
        { t: "Hold ⌃⌥⇧⌘, open the editor", d: "No Engine, so you can fix the macro" },
      ],
    },
  },
};
