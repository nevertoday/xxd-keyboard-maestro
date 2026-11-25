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
};
