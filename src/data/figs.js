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
};
