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

export const FIGS = {};

// How-to「宏停不下来怎么办」：从轻到重的几种停法
FIGS["stop-macro-ladder"] = {
  type: "ladder",
  base: { icons: ["Menu", "CircleStop", "Power", "Wrench"] },
  zh: {
    cap: "停宏的几种办法，从轻到重：上面的先试，最下面的留到实在没办法时。",
    high: "先试",
    low: "实在不行",
    rungs: [
      { t: "Status Menu ▸ Cancel", d: "挑一个正在跑的宏停掉" },
      { t: "按住 ⌃⌥⇧ 点图标", d: "所有正在跑的宏一起停" },
      { t: "Quit Keyboard Maestro Engine", d: "引擎退出，宏都不跑了" },
      { t: "按住 ⌘⌃⌥⇧ 打开编辑器", d: "引擎不启动，好去改那个宏" },
    ],
  },
  en: {
    cap: "Ways to stop a macro, lightest first: try the top ones, and save the bottom one for when nothing else works.",
    high: "Try first",
    low: "Last resort",
    rungs: [
      { t: "Status Menu ▸ Cancel", d: "Stop one running macro" },
      { t: "Hold ⌃⌥⇧, click the icon", d: "Stop every running macro" },
      { t: "Quit Keyboard Maestro Engine", d: "The Engine quits, nothing runs" },
      { t: "Hold ⌘⌃⌥⇧, open the editor", d: "No Engine, so you can fix the macro" },
    ],
  },
};
