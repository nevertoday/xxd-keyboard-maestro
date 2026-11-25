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
};
