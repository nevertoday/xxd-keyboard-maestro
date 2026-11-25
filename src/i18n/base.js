// 英文底稿：以后加的非全站语言，全部文字都照这个结构写（src/i18n/<语言>.js），缺的键显示这里的英文。
// {名字} 是占位，由 fmt() 换成值，翻译时原样保留。
// 这些语言只有首页和新手入门三课；完整教程、How-to、Wiki、常见问题链到英文版，所以导航里写明「英文」。
// 首页文字和 views/Home.astro 的 EN 一样；EN 写好以后，把 home 照着更新。
export default {
  ui: {
    brand: "Keyboard Maestro for beginners",
    desc: "An unofficial guide to Keyboard Maestro: hand the typing, clicking and app-opening you repeat on your Mac every day to macros. From installing it and building your first macro to variables, the clipboard and debugging, in plain words.",
    skip: "Skip to content",
    menu: "Open menu",
    search: "Search the guide",
    searchPh: "Search lessons, steps, how-tos, terms…",
    searchEmpty: "Nothing found. Try another word",
    look: "Appearance",
    lang: "Language",
    repo: "This guide on GitHub",
    repoMore: "More: the official Keyboard Maestro wiki and website",
    repoDefault: "Default",
    // 三个链接：[名字, 一句说明]，顺序固定（本教程、官方 Wiki、官网）
    repos: [
      ["This guide", "Source for this guide; file issues here"],
      ["Keyboard Maestro Wiki", "The source of truth for features and how they work"],
      ["Keyboard Maestro website", "Download and purchase"],
    ],
    navLabel: "Site navigation",
    start: "Start",
    home: "Home",
    lessons: "Beginner track: three lessons",
    more: "More (in English)",
    main: "Full guide: 8 steps",
    howto: "How-to: how exactly",
    wiki: "Wiki: what is it",
    faq: "FAQ",
    toc: "On this page",
    tocLabel: "On this page",
    hintMain: "Full guide (English)",
    hintLesson: "Beginner track",
    hintFaq: "FAQ (English)",
    hintOther: "English",
    section: "Section",
    // 页脚里 {docs} 那个链接上的字（官方 Wiki）；{docs} 和 {github} 会换成链接
    docsLink: "official wiki",
    foot: "An unofficial guide to Keyboard Maestro, not affiliated with Stairways Software. Keyboard Maestro is a trademark of Stairways Software Pty Ltd. For features and how they work, the {docs} is the source of truth. Source and feedback for this guide are on {github}.",
    // 顶栏「外观」面板（UI Kit 的外观设置组）
    appearance: {
      group: "Appearance", theme: "Theme", light: "Light", dark: "Dark", system: "System",
      corners: "Rounded corners", cornersDesc: "Off keeps every corner square",
      accent: "Accent", accentDesc: "Used for buttons, selection and focus",
    },
  },

  // 首页文字，和 views/Home.astro 的 EN 一样（改了 EN 就照着改这里）
  home: {
    h1: "Hand the things you repeat on your Mac every day to Keyboard Maestro",
    // lead：前半句、荧光笔那一句、后半句
    lead: ["Keyboard Maestro is a Mac automation app from Stairways Software. You tell it when and what: press this key and open that app, type these few letters and swap in a whole paragraph. Once you've told it, it does the job in the background, the same way every time. This site is for people who have never automated anything, and for people who already use it and want to go further. ", "This is an unofficial guide", ", not affiliated with Stairways Software. For features and how they work, the official wiki is the source of truth."],
    cta: ["New? Start with lesson 1", "Already using it? The how-tos (English)"],
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
    // 完整教程目前只有英文和中文
    devNote: "The full guide is in English (and Chinese) for now. The three beginner lessons are in your language.",
    // TRACKS：每个是 [标题, 说明]，图标、顺序和对应的教程步骤固定（在 views/Home.astro 的 EN.TRACKS）
    TRACKS: [
      ["How a macro runs", "Macro groups decide where a macro works, triggers decide when it starts, and actions say what it does. Understand those three and you can build most macros yourself."],
      ["Macros that adapt", "Remember some text, ask you a question, take a different path depending on what's happening, wait for something before carrying on. And get back anything you've copied."],
      ["When it misfires, and going further", "When a macro doesn't work, check permissions and the Engine first, then step through to see where it gets stuck. Later, hook in scripts, use the same macros on two Macs, and share macros with others."],
    ],
    tracksLabel: "Matching steps in the full guide",
    // 每条路下面链到完整教程的一步：{n} 是第几步，{title} 是那一步的标题（英文）
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

  // 新手入门三课在导航、首页里的标题、时间、简介（顺序固定，和 nav.js 的 LESSONS 一样：1 第一个宏、2 打几个字出一整段、3 一个键做完一串事）
  lessons: [
    { title: "Install it and open your favorite app with one key", minutes: "15 minutes", sum: "Download it, grant the permissions, keep the Engine running, then build your first macro: one hot key that opens the app you use every day" },
    { title: "Type a few letters, get a whole paragraph", minutes: "10 minutes", sum: "The address, intro or reply you type every day goes into a typed string trigger: type a few letters and the whole text appears" },
    { title: "One key, a whole routine", minutes: "15 minutes", sum: "Turn the clicks you make every morning into one macro: open a few apps and a web page, put the windows in place, then learn to stop it and where to look when it misfires" },
  ],

  // 一课的页面框架
  lesson: {
    eyebrow: "Beginner track · lesson {n} of {total}",
    prog: "Progress: lesson {n} of {total}",
    nav: "Previous and next lesson",
    prev: "Previous",
    next: "Next",
    title: "Lesson {n}: {title}",
    tldr: "In one line",
  },

  // 正文里用到的组件
  comp: {
    callout: { ok: "You should see", warn: "Heads up", no: "Don't do this", tip: "Tip" },
    copyTitle: "Copy this",
    copy: "Copy",
    cmdDone: "Command copied",
    cmdLabel: "Copy command: {c}",
    reply: "Illustration: roughly what Keyboard Maestro shows",
    // 每页末尾一行：{lead} {gh 链接}{faq[0]}{faq[1] 链接}{faq[2]}
    feedback: {
      lead: "Something on this page unclear, or didn't work as written?",
      gh: "Bring it up on GitHub",
      faq: [". Or check the ", "FAQ", " first."],
    },
    // 首页、常见问题末尾的「提问和讨论」卡片
    contact: {
      h: "Questions and discussion",
      p: "Stuck on a step, found something unclear, or built a macro worth sharing? Bring it to GitHub. The questions that come up most get worked into the guide. Writing in your own language is fine.",
      faq: ["Before asking, check the ", "FAQ", ": many answers are already there."],
      btn: "Ask or discuss on GitHub",
      x: "The author is on X",
      privacy: "Before sending screenshots or exported macros, remove your license details, passwords, and any personal text stored in variables or clipboards.",
    },
  },
};
