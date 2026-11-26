import { existsSync } from "node:fs";
import { join } from "node:path";
import { load, overlay, L10N_LANGS } from "../l10n/load.js";
// 站点结构的唯一来源：左侧导航、首页路线图、上一步 / 下一步、How-to 目录、搜索都从这里读。
// ready: false 的页面还没写，导航里显示「编写中」，不给链接。
// 中文在根路径，英文在 /en/ 下（同样的 slug）。英文文字放在各条目的 en: {} 里，用 t(x, key, lang) 取。
// 另外 8 种语言的文字在 src/l10n/<语言>/nav.json，加载时叠到各条目的 <语言>: {} 上（见文件末尾）。

const BASE = (import.meta.env?.BASE_URL || "/").replace(/\/$/, "");
/**
 * 网站的语言。zh、en 是全站。另外 8 种语言 full: true 才是全站（导航、搜索、链接都指向 /<语言>/…）；
 * 没有 full 的只有首页和新手入门三课，别的页面链到英文版，构建后 scripts/l10n-dist.mjs 把它们已有的其他页面删掉。
 * 预览一种还没打开的语言：L10N_FULL=ja npm run build（逗号分隔几种），不用改这里。
 */
export const LANGS = [
  { code: "en", name: "English", html: "en", full: true },
  { code: "zh", name: "中文", html: "zh-CN", full: true },
  { code: "ja", name: "日本語", html: "ja", full: true },
  { code: "ko", name: "한국어", html: "ko", full: true },
  { code: "es", name: "Español", html: "es", full: true },
  { code: "pt", name: "Português", html: "pt-BR", full: true },
  { code: "fr", name: "Français", html: "fr", full: true },
  { code: "de", name: "Deutsch", html: "de", full: true },
  { code: "ru", name: "Русский", html: "ru", full: true },
  { code: "ar", name: "العربية", html: "ar", dir: "rtl", full: true },
];
const PREVIEW = (globalThis.process?.env?.L10N_FULL || "").split(",").map((x) => x.trim()).filter(Boolean);
const FULL = new Set([...LANGS.filter((l) => l.full).map((l) => l.code), ...PREVIEW]);
export const langInfo = (lang) => LANGS.find((l) => l.code === lang) ?? LANGS[0];
const PREFIXED = LANGS.filter((l) => l.code !== "zh").map((l) => l.code);
const PREFIX_RE = new RegExp(`^/(${PREFIXED.join("|")})(?=/|$)`);
/** 当前页面的语言：看路径前缀（/en/、/ja/……），没有前缀是中文 */
export const langOf = (pathname = "") => pathname.slice(BASE.length).match(PREFIX_RE)?.[1] ?? "zh";
/** 去掉子路径和语言前缀以后的站内路径：/ja/guide/1-groups/ → /guide/1-groups/ */
export const stripLang = (pathname = "") => (pathname.slice(BASE.length) || "/").replace(PREFIX_RE, "") || "/";
/** 这种语言是不是全站（zh、en 是；另外 8 种看 LANGS 里的 full 和 L10N_FULL） */
export const isFull = (lang) => FULL.has(lang);
/** 只在全站语言里存在的页面（完整教程、How-to、Wiki、常见问题）：非全站语言链到英文版 */
export const fullLang = (lang) => (isFull(lang) ? lang : "en");
/** 站内链接：部署在子路径时自动加前缀；非中文加 /<语言> */
export const link = (path, lang = "zh") => `${BASE}${lang === "zh" ? "" : "/" + lang}${path}`;
/**
 * 这种语言有没有这一页（path 不带语言前缀，如 /guide/1-groups/）。中文、英文全都有；首页和新手入门每种语言都有；
 * 全站语言里，完整教程和 How-to 要 src/pages/<语言>/ 下有那篇 MDX（还没翻的那篇链到英文版），其余页面由数据生成，都有。
 */
export const hasPage = (lang, path) => {
  if (lang === "zh" || lang === "en") return true;
  if (path === "/" || path.startsWith("/start/")) return true;
  if (!isFull(lang) || /^\/404\/?$/.test(path)) return false;
  const m = path.match(/^\/(guide|howto)\/([^/]+)\/$/);
  return m ? existsSync(join(process.cwd(), "src/pages", lang, m[1], `${m[2]}.mdx`)) : true;
};
/** 链到一页：这种语言有这一页就用它，没有就用英文版 */
export const pageLang = (path, lang) => (hasPage(lang, path) ? lang : "en");
export const href = (path, lang = "zh") => link(path, pageLang(path, lang));
/** 同一页在另一种语言里的地址：那种语言没有这一页，就去它的首页 */
export const langHref = (pathname, target) => {
  const rel = stripLang(pathname);
  if (/\/404\/?$/.test(rel)) return link("/", target);
  return hasPage(target, rel) ? link(rel, target) : link("/", target);
};
/** 取某个对象在当前语言下的字段：先找 x[lang][key]，再找 x.en[key]（非中文的兜底），最后是中文 */
export const t = (x, key, lang) => {
  if (lang === "zh") return x[key];
  return x[lang]?.[key] ?? x.en?.[key] ?? x[key];
};

/** 这个教程站自己的仓库（反馈、源码） */
export const REPO = "https://github.com/nevertoday/xxd-keyboard-maestro";
/** Keyboard Maestro 官方 Wiki（手册、动作、触发器、令牌、函数都在这里）：功能和用法以这里和 Keyboard Maestro 本身为准。官方只有英文 */
export const DOCS = "https://wiki.keyboardmaestro.com/";
/** 官网（下载、购买）和官方论坛 */
export const SITE = "https://www.keyboardmaestro.com/";
export const FORUM = "https://forum.keyboardmaestro.com/";

// 新手入门：给第一次用 Keyboard Maestro、也没写过任何自动化的人。三课，一条路走到底；做完这三课，你会自己做宏了。
export const LESSONS = [
  { n: 1, slug: "1-first-macro", title: "装好它，按一个键打开常用的 App", minutes: "15 分钟", sum: "下载、给权限、让引擎一直开着，然后做出你的第一个宏：一个热键，打开你每天都要开的那个 App", en: { title: "Install it and open your favorite app with one key", minutes: "15 minutes", sum: "Download it, grant the permissions, keep the Engine running, then build your first macro: one hot key that opens the app you use every day" } },
  { n: 2, slug: "2-type-less", title: "打几个字，出来一整段", minutes: "10 分钟", sum: "每天重复打的地址、自我介绍、回复，交给一个输入字符串触发器：打出几个字母，整段文字自己出现", en: { title: "Type a few letters, get a whole paragraph", minutes: "10 minutes", sum: "The address, intro or reply you type every day goes into a typed string trigger: type a few letters and the whole text appears" } },
  { n: 3, slug: "3-one-key-routine", title: "一个键，做完一串事", minutes: "15 分钟", sum: "把每天开工要点的那几下排成一个宏：打开几个 App、打开一个网页、把窗口摆好；再学会让它停下、不灵时去哪看", en: { title: "One key, a whole routine", minutes: "15 minutes", sum: "Turn the clicks you make every morning into one macro: open a few apps and a web page, put the windows in place, then learn to stop it and where to look when it misfires" } },
];
export const lessonHref = (s, lang = "zh") => link(`/start/${s.slug}/`, lang);

export const STEPS = [
  { n: 0, slug: "0-what", title: "Keyboard Maestro 是什么", minutes: "读 5 分钟", ready: true, sum: "Mac 上的自动化工具：编辑器里写宏，后台的引擎替你跑；每个宏就是「什么时候」加「做什么」", en: { title: "What Keyboard Maestro is", minutes: "5-minute read", sum: "Automation for the Mac: you write macros in the editor and the Engine runs them in the background. Every macro is a when plus a what" } },
  { n: 1, slug: "1-groups", title: "宏组：宏在哪里生效", minutes: "10 分钟", ready: true, sum: "宏组像文件夹，又管着开关：只在某个 App 里生效、按一下才生效、显示成面板", en: { title: "Macro groups: where macros work", minutes: "10 minutes", sum: "A macro group is a folder that also decides when its macros are live: only in certain apps, only after you activate it, or shown as a palette" } },
  { n: 2, slug: "2-triggers", title: "触发器：什么时候开始", minutes: "15 分钟", ready: true, sum: "热键、打出的字、时间、打开某个 App、连上某个 Wi-Fi、文件夹里来了新文件……选一个最自然的时机", en: { title: "Triggers: when a macro starts", minutes: "15 minutes", sum: "A hot key, a typed string, a time of day, an app launching, a Wi-Fi network, a new file in a folder: pick the moment that feels natural" } },
  { n: 3, slug: "3-actions", title: "动作：它替你做什么", minutes: "15 分钟", ready: true, sum: "打字、按键、选菜单、开 App、摆窗口、点鼠标、动文件：先认识最常用的十几个动作，其余的遇到再搜", en: { title: "Actions: what a macro does", minutes: "15 minutes", sum: "Typing, keystrokes, menus, apps, windows, clicks and files: meet the dozen actions you'll use most and search for the rest when you need them" } },
  { n: 4, slug: "4-variables", title: "变量、条件和循环：让宏看情况办事", minutes: "20 分钟", ready: true, sum: "记住一段文字，问你一句话，看情况走不同的路，等某件事发生再往下：宏从此不只是一串固定的按键", en: { title: "Variables, conditions and loops: macros that adapt", minutes: "20 minutes", sum: "Remember some text, ask you a question, take a different path depending on what's on screen, wait for something to happen: a macro stops being a fixed string of keystrokes" } },
  { n: 5, slug: "5-clipboard", title: "剪贴板：复制过的都还在", minutes: "10 分钟", ready: true, sum: "剪贴板历史让你贴回前几次复制的东西；命名剪贴板替你长期保管几段常用内容；粘贴前还能先改一改", en: { title: "The clipboard: everything you copied is still there", minutes: "10 minutes", sum: "Clipboard history lets you paste what you copied earlier, named clipboards keep a few things for good, and filters change text before you paste" } },
  { n: 6, slug: "6-debug", title: "宏不灵的时候", minutes: "15 分钟", ready: true, sum: "先看权限和引擎，再看宏组有没有生效；还不行，用调试器一步一步走，或者翻引擎日志", en: { title: "When a macro doesn't work", minutes: "15 minutes", sum: "Check permissions and the Engine first, then whether the group is active. Still stuck? Step through with the debugger or read the Engine log" } },
  { n: 7, slug: "7-advanced", title: "再往深走：脚本、子程序、同步和分享", minutes: "读 10 分钟", ready: true, sum: "接上 Shell、AppleScript 和 JavaScript，把常用的几步做成子程序，在两台 Mac 之间同步，把宏分享给别人", en: { title: "Going further: scripts, subroutines, syncing and sharing", minutes: "10-minute read", sum: "Hook in shell scripts, AppleScript and JavaScript, turn repeated steps into subroutines, sync between two Macs, and share macros with others" } },
];
export const stepHref = (s, lang = "zh") => href(`/guide/${s.slug}/`, lang);

// How-to 每组的 id 只用来对上另外 8 种语言的翻译（src/l10n/<语言>/nav.json 的 howtoGroups）
export const HOWTO = [
  { id: "text", group: "打字和文字", en: { group: "Typing and text" }, items: [
    { slug: "text-snippets", title: "把常打的话做成缩写", en: { title: "Turn the things you type often into abbreviations" } },
    { slug: "insert-date", title: "一键插入今天的日期", en: { title: "Insert today's date with one key" } },
    { slug: "paste-plain", title: "粘贴时去掉格式", en: { title: "Paste without the formatting" } },
    { slug: "fill-form", title: "重复的表格一键填好", en: { title: "Fill in the same form with one key" } },
  ]},
  { id: "apps", group: "App 和窗口", en: { group: "Apps and windows" }, items: [
    { slug: "app-hotkeys", title: "一个键切到某个 App", en: { title: "Jump to an app with one key" } },
    { slug: "window-layout", title: "把窗口摆到固定的位置", en: { title: "Put your windows where you want them" } },
    { slug: "menu-shortcut", title: "给没有快捷键的菜单配一个", en: { title: "Give a menu command a shortcut it doesn't have" } },
  ]},
  { id: "files", group: "文件", en: { group: "Files" }, items: [
    { slug: "rename-files", title: "批量给文件改名", en: { title: "Rename a batch of files" } },
    { slug: "watch-folder", title: "文件一进文件夹就自动归档", en: { title: "File things away as soon as they land in a folder" } },
  ]},
  { id: "screen", group: "屏幕和鼠标", en: { group: "Screen and mouse" }, items: [
    { slug: "click-image", title: "找到屏幕上的按钮，点它", en: { title: "Find a button on screen and click it" } },
    { slug: "ocr-text", title: "把屏幕上的字认出来", en: { title: "Read the text off your screen" } },
  ]},
  { id: "schedule", group: "到点就做", en: { group: "On schedule" }, items: [
    { slug: "daily-schedule", title: "每天到点自动跑", en: { title: "Run something at the same time every day" } },
    { slug: "wifi-usb", title: "连上某个 Wi-Fi、插上某个设备时自动做事", en: { title: "Do something when you join a Wi-Fi network or plug in a device" } },
  ]},
  { id: "ask", group: "和你商量", en: { group: "Asking you first" }, items: [
    { slug: "ask-input", title: "先问你一句，再动手", en: { title: "Ask a question before doing the work" } },
    { slug: "palette", title: "做一排点一下就跑的按钮", en: { title: "Make a row of buttons that run macros" } },
  ]},
  { id: "keep", group: "保管和分享", en: { group: "Keeping and sharing" }, items: [
    { slug: "sync-macs", title: "两台 Mac 用同一套宏", en: { title: "Use the same macros on two Macs" } },
    { slug: "share-macros", title: "导出、导入和分享宏", en: { title: "Export, import and share macros" } },
    { slug: "stop-macro", title: "宏停不下来怎么办", en: { title: "When a macro won't stop" } },
  ]},
];
export const howtoHref = (slug, lang = "zh") => href(`/howto/${slug}/`, lang);

export const wikiHref = (slug, lang = "zh") => href(`/wiki/${slug}/`, lang);

// 正文里虚线标出的术语：悬停看一句话解释（Term 组件）。wiki: 对应的 Wiki 条目（src/data/wiki.js 的 slug）。
// 依据 Keyboard Maestro 官方 Wiki（wiki.keyboardmaestro.com），出处跟着各自的 Wiki 条目走。tip 一句话说清楚，像朋友顺口解释。
// Keyboard Maestro 只有英文界面，label 是英文写法；中文 tip 里第一次提到界面上的名字，照英文写。
export const GLOSSARY = {
  宏: { tip: "Keyboard Maestro 里的一件小差事：几个触发器管什么时候开始，一串动作管做什么。", wiki: "macro", en: { label: "macro", tip: "One small job in Keyboard Maestro: triggers decide when it starts and a list of actions says what it does." } },
  宏组: { tip: "装宏的文件夹，还管着里面的宏在哪些 App 里、什么时候生效。", wiki: "macro-group", en: { label: "macro group", tip: "A folder of macros that also decides in which apps, and when, its macros are active." } },
  触发器: { tip: "让宏开始跑的那件事：按下一个热键、打出一串字、到了某个时间、打开某个 App……", wiki: "trigger", en: { label: "trigger", tip: "What starts a macro: pressing a hot key, typing a string, a time of day, an app launching…" } },
  动作: { tip: "宏一步一步做的事，比如打一段字、选一个菜单、打开一个文件。", wiki: "action", en: { label: "action", tip: "One step a macro takes, like typing some text, choosing a menu item or opening a file." } },
  编辑器: { tip: "你打开来写宏、改宏的那个 Keyboard Maestro 窗口。改完可以关掉，宏照样能用。", wiki: "editor-engine", en: { label: "editor", tip: "The Keyboard Maestro window where you write and change macros. You can quit it when you're done and your macros keep working." } },
  引擎: { tip: "Keyboard Maestro Engine，在后台一直开着、真正替你执行宏的那一半。它没开，宏就都不灵。", wiki: "editor-engine", en: { label: "Engine", tip: "Keyboard Maestro Engine, the half that runs in the background and actually performs your macros. If it isn't running, nothing fires." } },
  热键: { tip: "按下一组键就触发宏，比如 ⌃⌥⌘T。挑一组别的 App 没用过的组合。", wiki: "hot-key", en: { label: "hot key", tip: "A key combination that fires a macro, like ⌃⌥⌘T. Pick one no other app already uses." } },
  输入字符串触发器: { tip: "在能打字的地方打出一串字（比如 =addr=）就触发宏，宏开始跑之前通常先把这串字删掉。", wiki: "typed-string", en: { label: "typed string trigger", tip: "Fires when you type a string, like =addr=, where you're typing text, and usually deletes what you typed before the macro runs." } },
  面板: { tip: "屏幕上浮着的一排按钮，一个按钮对应一个宏，点一下就跑。", wiki: "palette", en: { label: "palette", tip: "A floating panel of buttons on screen, one per macro, that runs the macro when clicked." } },
  状态菜单: { tip: "菜单栏上 Keyboard Maestro 的图标。点开能运行宏，也能取消正在跑的宏。", wiki: "status-menu", en: { label: "status menu", tip: "Keyboard Maestro's icon in the menu bar. Open it to run macros or cancel the ones that are running." } },
  变量: { tip: "给一段文字起个名字存起来，后面的动作按名字拿来用。", wiki: "variable", en: { label: "variable", tip: "A named piece of text a macro stores so later actions can use it by name." } },
  令牌: { tip: "写在文字里的占位符，比如 %LongDate%，运行时换成真正的内容：今天的日期、当前的 App、剪贴板里的字。", wiki: "token", en: { label: "token", tip: "A placeholder in text, like %LongDate%, that's replaced when the macro runs: today's date, the front app, the clipboard." } },
  计算: { tip: "大多数要填数字的地方可以直接写算式，还能用函数，比如屏幕宽度的一半。", wiki: "calculation", en: { label: "calculation", tip: "In almost any box that wants a number you can type a formula, functions included, like half the screen width." } },
  条件: { tip: "宏用来判断的东西：某个 App 开着没有、屏幕上有没有某张图、变量是不是某个值。", wiki: "condition", en: { label: "condition", tip: "Something a macro checks: whether an app is running, whether an image is on screen, whether a variable has a value." } },
  剪贴板历史: { tip: "Keyboard Maestro 记下你复制过的东西，过后还能挑一条再贴出来。", wiki: "clipboard-history", en: { label: "clipboard history", tip: "Keyboard Maestro remembers what you've copied, so you can pick an earlier item and paste it again." } },
  命名剪贴板: { tip: "起了名字、单独存着的剪贴板，不会被下一次复制冲掉。", wiki: "named-clipboard", en: { label: "named clipboard", tip: "A separate clipboard with a name, which your next copy won't overwrite." } },
  找图: { tip: "在屏幕上找一块和你给的图一样的地方，找到了就能点它，或者等它出现。", wiki: "found-image", en: { label: "found image", tip: "Finding a spot on screen that matches an image you give it, so a macro can click it or wait for it." } },
  辅助功能权限: { tip: "macOS「隐私与安全性」里的一项。Keyboard Maestro 要在这里打开，才看得到你按的热键，也才能替你打字、选菜单、摆窗口。", wiki: "permissions", en: { label: "Accessibility permission", tip: "A setting in macOS Privacy & Security. Keyboard Maestro needs it to see your hot keys, and to type, choose menus and move windows for you." } },
  智能组: { tip: "存起来的一次搜索，自动列出符合条件的宏，比如最近改过的。", wiki: "smart-group", en: { label: "smart group", tip: "A saved search that lists every macro matching it, such as the ones you changed recently." } },
  子程序: { tip: "可以被别的宏调用、能带参数的宏。常用的几步做成子程序，用到的地方调它就行。", wiki: "subroutine", en: { label: "subroutine", tip: "A macro other macros can call, with parameters. Put steps you repeat in one and call it wherever you need them." } },
  宏库: { tip: "Keyboard Maestro 自带的一批现成的宏，挑一个导入，照着改。", wiki: "macro-library", en: { label: "Macro Library", tip: "A set of ready-made macros that comes with Keyboard Maestro. Import one and adapt it." } },
  插件动作: { tip: "你自己写、或者从别人那里下载来装进 Keyboard Maestro 的动作，装上以后和自带的动作一样用。", wiki: "plug-in-action", en: { label: "plug-in action", tip: "An action you write yourself or download from someone else, install into Keyboard Maestro, and use like a built-in one." } },
  调试器: { tip: "让宏一步一步走、随时暂停的工具，用来看宏卡在了哪一步。", wiki: "debugger", en: { label: "debugger", tip: "A tool that runs a macro one step at a time, so you can see where it goes wrong." } },
  引擎日志: { tip: "引擎记的流水账。宏出错时，去这里看它报了什么错。", wiki: "debugger", en: { label: "Engine log", tip: "The Engine's running record. When a macro fails, look here for the errors it reported." } },
};

// 另外 8 种语言：src/l10n/<语言>/nav.json 的文字叠到各条目的 <语言>: {} 上（缺的键用英文），t(x, key, lang) 就能取到。
// 结构见 src/l10n/en/nav.json（scripts/l10n.mjs export 从上面的 en: {} 生成）。
for (const code of L10N_LANGS) {
  const n = load(code, "nav");
  if (!n) continue;
  for (const s of LESSONS) s[code] = overlay(s.en, n.lessons?.[s.slug]);
  for (const s of STEPS) s[code] = overlay(s.en, n.steps?.[s.slug]);
  HOWTO.forEach((g) => {
    g[code] = overlay(g.en, { group: n.howtoGroups?.[g.id] });
    for (const it of g.items) it[code] = overlay(it.en, { title: n.howto?.[it.slug] });
  });
  for (const [k, g] of Object.entries(GLOSSARY)) g[code] = overlay(g.en, n.glossary?.[k]);
}
/** How-to 拉平成一列；grp 是所在的组（组名用 t(h.grp, "group", lang) 取） */
export const HOWTO_FLAT = HOWTO.flatMap((g) => g.items.map((i) => ({ ...i, group: g.group, groupEn: g.en.group, grp: g })));
/** 翻译模板（src/l10n/en/nav.json）：新手三课、完整教程每一步、How-to 的组名和标题、术语的名字和一句话解释 */
export const navTemplate = () => ({
  lessons: Object.fromEntries(LESSONS.map((s) => [s.slug, s.en])),
  steps: Object.fromEntries(STEPS.map((s) => [s.slug, s.en])),
  howtoGroups: Object.fromEntries(HOWTO.map((g) => [g.id, g.en.group])),
  howto: Object.fromEntries(HOWTO_FLAT.map((h) => [h.slug, h.en.title])),
  glossary: Object.fromEntries(Object.entries(GLOSSARY).map(([k, g]) => [k, g.en])),
});
/** 术语在某种语言里的名字和一句话解释（中文的名字就是键） */
export const termOf = (k, lang) => {
  const g = GLOSSARY[k];
  return lang === "zh" ? { label: k, tip: g.tip } : { label: t(g, "label", lang), tip: t(g, "tip", lang) };
};
