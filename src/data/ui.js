// 界面文字：外壳、首页、各页面框架和组件里的固定文字，按语言一份。
// zh、en 写在这里（英文是另外 8 种语言的模板，`node scripts/l10n.mjs export` 把它写成 src/l10n/en/ui.json）；
// 另外 8 种语言在 src/l10n/<语言>/ui.json，结构和 en 一样，缺的键显示英文。
// {名字} 是占位，由 fmt() 换成值，翻译时原样保留。链接、网址、命令不放这里。
// 改了中文，同一次提交里把英文也改了，再跑一次 export。
import { isFull } from "./nav.js";
import { load, overlay, L10N_LANGS } from "../l10n/load.js";

const zh = {
  site: {
    brand: "Keyboard Maestro 新手教程", desc: "Keyboard Maestro 的非官方学习站：把你在 Mac 上每天重复的打字、点击和开 App 交给宏。从装好它、做出第一个宏，到变量、剪贴板和调试，说人话。",
    skip: "跳到正文", menu: "打开目录", search: "搜索教程", searchPh: "搜课程、步骤、How-to、名词、问题……", searchEmpty: "没找到，换个词试试", look: "外观", lang: "语言",
    repo: "本教程的 GitHub 仓库", repoMore: "更多：Keyboard Maestro 官方 Wiki 和官网", repoDefault: "默认",
    repos: [["本教程", "教程的源码，有问题在这里提"], ["Keyboard Maestro 官方 Wiki", "功能和用法以这里为准"], ["Keyboard Maestro 官网", "下载和购买"]],
    navLabel: "网站目录", start: "开始", home: "首页", lessons: "新手入门：三课", main: "完整教程：想用得更深的人看", pending: "编写中", ref: "查资料", howto: "How-to：具体怎么做",
    wiki: "Wiki：这是什么", faq: "常见问题", toc: "本页", tocLabel: "本页目录", hintMain: "完整教程", hintLesson: "新手入门", hintFaq: "常见问题", section: "小节",
    docsLink: "官方 Wiki",
    foot: "本站是 Keyboard Maestro 的非官方学习站，和 Stairways Software 没有关系。Keyboard Maestro 是 Stairways Software Pty Ltd 的商标。功能和用法以 {docs} 为准。教程源码和问题反馈在 {github}。",
    appearance: { cornersDesc: "关掉就是直角" },
  },
  home: {
    h1: "把你在 Mac 上天天重复的那几下，交给 Keyboard Maestro",
    lead: ["Keyboard Maestro 是 Stairways Software 做的 Mac 自动化工具。你告诉它「什么时候」和「做什么」：按下某个键，就打开某个 App；打出几个字母，就换成一整段话。说好了，它就在后台替你做，每次都一样。这个网站讲给从没做过自动化的人，也讲给已经在用、想用得更深的人。", "这是非官方学习站", "，和 Stairways Software 没有关系；功能和用法以官方 Wiki 为准。"],
    cta: "新手从第 1 课开始", ctaHowto: "已经在用了？看 How-to",
    ctaNote: "第 1 课做一个按键打开 App 的宏，第 2 课打几个字出一整段话，第 3 课一个键做完开工那一串事。不用写代码。",
    painH: "你是不是也这样",
    PAIN: [
      "给家长、客人或同事回消息，「收到，谢谢，我这周五前答复你」这句话，一天要一个字一个字打好几遍。",
      "每天开工，先点开邮件、日历和同一个网页，再把窗口一个个拖回老地方，然后才开始干活。",
      "有个菜单命令天天要用，偏偏没有快捷键，每次都得拿鼠标一层层去找。",
      "投简历、发报价，每次都从上一封里复制同一段自我介绍、同一份联系方式。",
      "复制了一段要紧的字，转头又复制了别的，前面那段就找不回来了。",
      "每天晚上同一个时间，要打开同一个表格记下爸妈今天的血压，忙起来就忘了。",
    ],
    lessonsH: "新手只要三课",
    lessonsP: "按顺序看，一课十几分钟，跟着做就行。学完这三课，你就会自己做宏了；网站上别的内容，遇到了再查。",
    lessonsLabel: "新手入门：共 3 课",
    tracksH: "用熟以后看这里",
    tracksP: "做过几个宏以后，你会想让它做更多的事。完整教程按顺序分成 8 步，大致是三条路，挑你眼下用得上的那条看。",
    TRACKS: [
      ["宏是怎么转起来的", "宏组管宏在哪里生效，触发器管什么时候开始，动作管做什么。把这三样弄懂，大多数宏你都能自己搭出来。"],
      ["让宏看情况办事", "记住一段字，先问你一句，看情况走不同的路，等某件事发生再往下；复制过的东西也都找得回来。"],
      ["不灵的时候，和再往深走", "宏不灵时先查权限和引擎，再一步一步看它卡在哪；用顺了，接上脚本，两台 Mac 用同一套宏，把宏分享给别人。"],
    ],
    tracksLabel: "完整教程里对应的步骤",
    stepLink: "第 {n} 步：{title}",
    pending: "编写中",
    fitH: "适不适合你", yesH: "适合", noH: "先不用",
    YES: [
      "你在 Mac 上有一件事每天要做好几遍，想把它交出去",
      "你不会写代码：新手三课一行代码也不用写",
      "你愿意花几分钟给它开辅助功能这类系统权限，它要替你按键、选菜单、挪窗口",
      "你想先试再决定：它是付费软件，官网有全功能的试用版",
    ],
    NO: [
      "你用的不是 Mac：它只有 Mac 版，要 macOS 10.13 或更新",
      "你不想给任何 App 开系统权限：没有这些权限，很多宏都跑不起来",
      "这件事只做一次：手动做一遍更快",
    ],
  },
  lesson: { eyebrow: "新手入门 · 第 {n} 课，共 {total} 课", prog: "进度：第 {n} 课，共 {total} 课", nav: "上一课和下一课", prev: "上一课", next: "下一课", title: "第 {n} 课：{title}", tldr: "一句话" },
  guide: { head: "第 {n} 步：{title}", eyebrow: "完整教程 · 第 {n} 步，共 {last} 步", prog: "进度：第 {n} 步，共 {last} 步", need: "要准备：", nav: "上一步和下一步", prev: "上一步", next: "下一步", pending: "下一步（编写中）", tldr: "一句话" },
  howto: { tldr: "一句话", for: "适用：", step: "完整教程第 {n} 步：", related: "同类文章", more: "「{group}」的其他文章" },
  howtoIndex: { h: "How-to：具体怎么做", p: "一篇只讲一件事。找到和你遇到的情况一样的那篇，照着做就行。" },
  faq: { h: "常见问题", p: ["第一次用 Keyboard Maestro 时最常冒出来的问题。没找到你的？到 ", " 提一个，或者按 ", " 搜索全站。"] },
  notFound: { h: "找不到这个页面", p: ["链接可能写错了，或者页面换了地址。可以按 ", " 搜索，或者从这里重新开始："], home: "首页", step0: "新手入门：第 1 课", howto: "How-to", faq: "常见问题" },
  wikiIndex: { h: "Wiki：这是什么", p1: "教程里出现的每个词，用大白话讲清楚。每篇第一句就是答案，想多了解再往下看。", p2: "不想看完整文章的话：教程正文里带虚线的词，鼠标停在上面就能看到一句话解释，点一下进到这里。" },
  wikiEntry: { like: "打个比方", here: "在 Keyboard Maestro 里", list: "清单", head: ["名字", "说人话"], myths: "常见误区", try: "动手操作：", step: "完整教程第 {n} 步：", see: "相关条目：", sep: "、" },
  callout: { ok: "你应该看到", warn: "注意", no: "别这样做", tip: "小提示" },
  checkpoint: { title: "做到这里，检查一下", done: "都勾上了，可以去下一步。" },
  copy: { title: "复制下面这段", copy: "复制" },
  cmd: { done: "已复制命令", label: "复制命令：{c}" },
  reply: { title: "示意：Keyboard Maestro 里大概是这样" },
  tabs: { label: "选择" },
  shot: { stamp: "截图于 {date}，界面以实际为准。" },
  annot: { stamp: "截图于 {date}，页面以实际为准。" },
  feedback: { lead: "这一页有没看懂、或者照做不成的地方？", gh: "到 GitHub 提出来", faq: ["，也可以先翻翻", "常见问题", "。"] },
  contact: {
    h: "提问和讨论",
    p: "卡在哪一步、哪里没写清楚，或者想分享你做的好用的宏，都欢迎到 GitHub 上提出来。问得多的，我会补进教程。",
    faq: ["问之前可以先看看", "常见问题", "，很多答案已经在那里了。"],
    btn: "到 GitHub 提问或讨论",
    x: "作者在 X 上",
    privacy: "发截图或导出的宏之前，先把许可证信息、密码和变量、剪贴板里存着的个人文字去掉。",
  },
};

const en = {
  site: {
    brand: "Keyboard Maestro for beginners", desc: "An unofficial guide to Keyboard Maestro: hand the typing, clicking and app-opening you repeat on your Mac every day to macros. From installing it and building your first macro to variables, the clipboard and debugging, in plain words.",
    skip: "Skip to content", menu: "Open menu", search: "Search the guide", searchPh: "Search lessons, steps, how-tos, terms, questions…", searchEmpty: "Nothing found. Try another word", look: "Appearance", lang: "Language",
    repo: "This guide on GitHub", repoMore: "More: the official Keyboard Maestro wiki and website", repoDefault: "Default",
    // 三个链接：[名字, 一句说明]，顺序固定（本教程、官方 Wiki、官网）；地址和路径在 Site.astro，不翻
    repos: [["This guide", "Source for this guide; file issues here"], ["Keyboard Maestro Wiki", "The source of truth for features and how they work"], ["Keyboard Maestro website", "Download and purchase"]],
    navLabel: "Site navigation", start: "Start", home: "Home", lessons: "Beginner track: three lessons", main: "Full guide: to go further", pending: "In progress", ref: "Reference", howto: "How-to: how exactly",
    wiki: "Wiki: what is it", faq: "FAQ", toc: "On this page", tocLabel: "On this page", hintMain: "Full guide", hintLesson: "Beginner track", hintFaq: "FAQ", section: "Section",
    // 页脚里 {docs} 那个链接上的字（官方 Wiki）；{docs} 和 {github} 会换成链接
    docsLink: "official wiki",
    foot: "An unofficial guide to Keyboard Maestro, not affiliated with Stairways Software. Keyboard Maestro is a trademark of Stairways Software Pty Ltd. For features and how they work, the {docs} is the source of truth. Source and feedback for this guide are on {github}.",
    // 顶栏「外观」面板（UI Kit 的外观设置组）；中文、英文用 UI Kit 自带的文字，只换 cornersDesc
    appearance: {
      group: "Appearance", theme: "Theme", light: "Light", dark: "Dark", system: "System",
      corners: "Rounded corners", cornersDesc: "Off keeps every corner square",
      accent: "Accent", accentDesc: "Used for buttons, selection and focus",
    },
  },
  home: {
    h1: "Hand the things you repeat on your Mac every day to Keyboard Maestro",
    // lead：前半句、荧光笔那一句、后半句
    lead: ["Keyboard Maestro is a Mac automation app from Stairways Software. You tell it when and what: press this key and open that app, type these few letters and swap in a whole paragraph. Once you've told it, it does the job in the background, the same way every time. This site is for people who have never automated anything, and for people who already use it and want to go further. ", "This is an unofficial guide", ", not affiliated with Stairways Software. For features and how they work, the official wiki is the source of truth."],
    // cta：第 1 课的按钮；ctaHowto：How-to 的按钮
    cta: "New? Start with lesson 1", ctaHowto: "Already using it? The how-tos",
    ctaNote: "Lesson 1 builds a key that opens an app, lesson 2 turns a few letters into a whole paragraph, and lesson 3 makes one key run your start-of-day routine. No code needed.",
    painH: "Sound familiar?",
    PAIN: [
      "Answering parents, customers or colleagues, you type \"Got it, thanks, I'll get back to you by Friday\" letter by letter several times a day.",
      "Every morning you open Mail, Calendar and the same web page, then drag each window back where it belongs before you can start.",
      "There's a menu command you use every day that has no shortcut, so every time you go hunting for it with the mouse.",
      "Every job application or quote means copying the same intro and the same contact details out of the last one.",
      "You copy something important, then copy something else, and the first thing is gone for good.",
      "Every evening at the same time you're meant to open the same spreadsheet and log your parents' blood pressure, and on busy days you forget.",
    ],
    lessonsH: "Beginners need just three lessons",
    lessonsP: "Read them in order. Each takes ten or fifteen minutes and you build as you go. After these three you can make your own macros, and everything else on the site is there to look up when you need it.",
    lessonsLabel: "Beginner track: 3 lessons",
    tracksH: "Once you're comfortable",
    tracksP: "After a few macros you'll want it to do more. The full guide runs in 8 steps, roughly along three tracks. Start with whichever one you need right now.",
    // TRACKS：每个是 [标题, 说明]，图标、顺序和对应的教程步骤固定（views/Home.astro）
    TRACKS: [
      ["How a macro runs", "Macro groups decide where a macro works, triggers decide when it starts, and actions say what it does. Understand those three and you can build most macros yourself."],
      ["Macros that adapt", "Remember some text, ask you a question, take a different path depending on what's happening, wait for something before carrying on. And get back anything you've copied."],
      ["When it misfires, and going further", "When a macro doesn't work, check permissions and the Engine first, then step through to see where it gets stuck. Later, hook in scripts, use the same macros on two Macs, and share macros with others."],
    ],
    tracksLabel: "Matching steps in the full guide",
    // 每条路下面链到完整教程的一步：{n} 是第几步，{title} 是那一步的标题
    stepLink: "Step {n}: {title}",
    pending: "In progress",
    fitH: "Is it for you?", yesH: "Yes, if", noH: "Not yet, if",
    YES: [
      "There's something you do on your Mac several times a day and you'd like to hand it off",
      "You don't write code. The three beginner lessons don't need a single line",
      "You're willing to spend a few minutes granting it system permissions like Accessibility, since it presses keys, chooses menus and moves windows for you",
      "You want to try before you decide. It's paid software, and the official site has a fully working trial",
    ],
    NO: [
      "You're not on a Mac. It's Mac only and needs macOS 10.13 or later",
      "You don't want to give any app system permissions. Without them, many macros can't run",
      "It's a one-off job. Doing it once by hand is quicker",
    ],
  },
  // 新手入门一课的页面框架
  lesson: { eyebrow: "Beginner track · lesson {n} of {total}", prog: "Progress: lesson {n} of {total}", nav: "Previous and next lesson", prev: "Previous", next: "Next", title: "Lesson {n}: {title}", tldr: "In one line" },
  // 完整教程一步的页面框架
  guide: { head: "Step {n}: {title}", eyebrow: "Full guide · step {n} of {last}", prog: "Progress: step {n} of {last}", need: "You need: ", nav: "Previous and next step", prev: "Previous", next: "Next", pending: "Next (in progress)", tldr: "In one line" },
  // How-to 一篇的页面框架
  howto: { tldr: "In one line", for: "For: ", step: "Full guide step {n}: ", related: "Related articles", more: "More in “{group}”" },
  howtoIndex: { h: "How-to: how exactly", p: "One task per article: find the one that matches your situation and follow it." },
  // p：链接「GitHub」前、⌘K 前、⌘K 后
  faq: { h: "FAQ", p: ["The questions that come up most when people first use Keyboard Maestro. Didn't find yours? Open one on ", ", or press ", " to search the whole site."] },
  // p：⌘K 前、⌘K 后
  notFound: { h: "Page not found", p: ["The link may be wrong, or the page has moved. Press ", " to search, or start again from here:"], home: "Home", step0: "Beginner track: lesson 1", howto: "How-to", faq: "FAQ" },
  wikiIndex: { h: "Wiki: what is it", p1: "Every term in the guide, explained in plain words. Each one starts with a single sentence; read on only if you want more.", p2: "Don't want the full article? Hover over any word with a dotted underline in the guide for a one-line explanation; click it to come here." },
  wikiEntry: { like: "An analogy", here: "In Keyboard Maestro", list: "List", head: ["Name", "In plain words"], myths: "Common misconceptions", try: "Try it: ", step: "Full guide step {n}: ", see: "Related: ", sep: ", " },
  // 正文里用到的组件
  callout: { ok: "You should see", warn: "Heads up", no: "Don't do this", tip: "Tip" },
  checkpoint: { title: "Before moving on, check", done: "All ticked — on to the next step." },
  copy: { title: "Copy this", copy: "Copy" },
  cmd: { done: "Command copied", label: "Copy command: {c}" },
  // 示意的标题：开头那个词（Illustration）scripts/check-site.mjs 用来认出示意，翻译时冒号前放这种语言的同义词
  reply: { title: "Illustration: roughly what Keyboard Maestro shows" },
  tabs: { label: "Choose" },
  shot: { stamp: "Screenshot {date}; the interface may have changed since." },
  annot: { stamp: "Screenshot {date}; the page may have changed since." },
  // 每页末尾一行：{lead} {gh 链接}{faq[0]}{faq[1] 链接}{faq[2]}
  feedback: { lead: "Something on this page unclear, or didn't work as written?", gh: "Bring it up on GitHub", faq: [". Or check the ", "FAQ", " first."] },
  // 首页、常见问题末尾的「提问和讨论」卡片
  contact: {
    h: "Questions and discussion",
    p: "Stuck on a step, found something unclear, or built a macro worth sharing? Bring it to GitHub. The questions that come up most get worked into the guide. Writing in your own language is fine.",
    faq: ["Before asking, check the ", "FAQ", ": many answers are already there."],
    btn: "Ask or discuss on GitHub",
    x: "The author is on X",
    privacy: "Before sending screenshots or exported macros, remove your license details, passwords, and any personal text stored in variables or clipboards.",
  },
  // 这种语言还不是全站时（只有首页和新手入门，其他页面链到英文版）替换上面对应的几句
  partial: {
    more: "More (in English)",
    main: "Full guide: 8 steps",
    hintMain: "Full guide (English)",
    hintFaq: "FAQ (English)",
    ctaHowto: "Already using it? The how-tos (English)",
    devNote: "The full guide is in English (and Chinese) for now. The three beginner lessons are in your language.",
  },
};

export const UI = { zh, en };

const cache = {};
/** 某种语言的界面文字：zh、en 直接用；另外 8 种按 en 的结构叠上 src/l10n/<语言>/ui.json，还不是全站的换上 partial 那几句 */
export function ui(lang) {
  if (UI[lang]) return UI[lang];
  if (!L10N_LANGS.includes(lang)) return UI.en;
  if (cache[lang]) return cache[lang];
  const u = overlay(UI.en, load(lang, "ui"));
  if (!isFull(lang)) {
    const p = u.partial;
    u.site = { ...u.site, main: p.main, hintMain: p.hintMain, hintFaq: p.hintFaq, more: p.more };
    u.home = { ...u.home, ctaHowto: p.ctaHowto };
  }
  return (cache[lang] = u);
}
