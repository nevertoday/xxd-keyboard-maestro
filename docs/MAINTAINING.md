# 维护说明

把 Keyboard Maestro（Stairways Software 做的 Mac 自动化工具）讲给从没做过自动化的人，也给用熟了想用得更深的人，说人话。

五块内容：新手入门（三课）、完整教程（按顺序 0–7 步）、How-to（具体怎么做）、Wiki（这是什么）、常见问题。首页是 `src/views/Home.astro`：你是不是也这样 → 新手三课 → 用熟以后的几条路 → 适不适合 → 提问和讨论。

**本站是非官方学习站**，和 Stairways Software 没有关系，Keyboard Maestro 是 Stairways Software Pty Ltd 的商标。页脚、常见问题和 README 都要写明这一点，并链到官方 Wiki。不用官方的图标和配色，不写成官方的口吻，不替官方说话。

- 站点骨架沿用 xxd-saily（Saily 新手教程站，`../xxd-saily`），那边又来自 xxd-grokbot：同样的外壳、组件、搜索和写作规矩。Grok Bot 站读 App 按钮名的做法这里也有，换成了读 Keyboard Maestro 自带的英文字符串（见下面「界面名字」）。
- 界面用 xxd-ui-kit（`public/xxd/` 里自带一份，不走 CDN）。
- 中英双语：中文在根路径，英文在 `/en/` 下，slug 相同，顶栏按钮切到对应页。改了一篇中文，**同一次提交里把英文版也改了**：
  - 正文：`src/pages/en/start/`、`src/pages/en/guide/`、`src/pages/en/howto/`（MDX，路径多一层 `../`；站内链接加 `/en`；`<Term k="中文键" />` 照原样，英文名在 `nav.js` 的 `GLOSSARY[k].en`）。
  - 数据：`nav.js` 各条目的 `en: {}`；`wiki.en.js`、`faq.en.js`（按 slug 叠加，结构和条数要和中文一致）；`figs.js` 各图的 `en`；界面文字在 `src/data/ui.js` 的 zh / en 两份。
  - 改完数据或界面文字，跑 `node scripts/l10n.mjs export`，更新给另外 8 种语言翻译用的英文模板（见下一条）。
  - 强调：每页最多一处 `<mark>`（这页最要紧的一句），`<u>` 只给照做会失败的坑；英文页放在对应的那句上。
- **另外 8 种语言（日、韩、西、葡、法、德、俄、阿）**：现在只打开了首页和新手入门三课，其余页面链到英文版。全站要的东西都已经能翻：界面文字、导航、Wiki、常见问题、图示、完整教程和 How-to。翻好一种，打开它（`full: true`），它就是全站。
  - 语言清单在 `nav.js` 的 `LANGS`。`full: true` 是全站语言：导航、搜索、上一步 / 下一步、Wiki 和术语链接都指向 `/<语言>/…`。没有 `full` 的，构建后 `scripts/l10n-dist.mjs` 把 `dist/<语言>/` 里首页和新手入门以外的页面删掉，所以翻好的页面可以先提交，线上不变。
  - 想先看看一种语言打开后的样子，不用改 `LANGS`：`L10N_FULL=ja npm run build`（几种用逗号隔开）。
  - 一种语言的全部翻译，都和英文的同一个文件一一对应：
    - 数据：`src/l10n/<语言>/` 下和 `src/l10n/en/` 同名的 JSON，结构一样。`ui.json` 界面文字（顶栏、侧栏、首页、各页面框架和组件里固定的字），`nav.json` 三课、八步、How-to 的组名和标题、术语的名字和一句话解释，`wiki.json` Wiki 条目（分组名以中文分组名为键，条目按 slug），`faq.json` 常见问题（按组 id），`figs.json` 图里的字。
    - 页面：`src/pages/<语言>/start/`、`guide/`、`howto/` 下和 `src/pages/en/` 同名的 MDX，frontmatter 的键一样（`layout` 多一层 `../`，和英文版一样）。
    - Wiki、常见问题、How-to 目录、404 这几页没有文字，外壳已经给 8 种语言都生成好了（`node scripts/l10n.mjs pages`）。
  - `src/l10n/en/` 是交给翻译的英文模板，不手改：它由 `node scripts/l10n.mjs export` 从中文 / 英文的源数据（`ui.js`、`nav.js`、`wiki.en.js`、`faq.en.js`、`figs.js`）生成。英文改了，export 一下，`git diff src/l10n/en` 就是要重新翻的地方。
  - 翻译要守的规矩见 `docs/TRANSLATE.md`：`{名字}` 占位原样留着；站内链接 `/en/…` 改成 `/<语言>/…`，外链不动；Keyboard Maestro 的界面名字照英文写、加粗；每个 `<Term>` 都写 `text="…"`；MDX 正文里不能有裸的 `<`、`{`、`}`。
  - 缺什么都能构建：缺的文件、缺的键显示英文，还没翻的完整教程和 How-to 链到英文版。
  - `ui.json` 里的 `partial` 是还没打开全站时用的几句（「更多（英文）」「How-to（英文）」这类）；打开以后用的是 `site`、`home` 里对应的那几句（`site.main`、`site.hintMain`、`site.hintFaq`、`home.ctaHowto`），打开之前要翻好。
  - `node scripts/l10n.mjs status` 看每种语言翻了多少；`node scripts/l10n.mjs check ja` 查一种（不写就查 8 种，`npm run check` 里跑的就是它），出错的地方写成「文件:行」或「文件 键路径」。它查：
    - 数据：键、数组长度、占位和英文一样；英文有字的地方不能空；链接对得上；命令、令牌、文件名这类行内代码没丢。
    - 页面：frontmatter、import、标题层级、组件的顺序和 id（`Copy`、`Checkpoint`、`Fig`、`Tabs`，`Callout` 的类型，`Term` 的键）和英文一样；每个 `Term` 写了 `text`；命令原样；能编译；`<mark>` 不比英文多。
    - 没翻干净：和英文一字不差的句子和段落（中文版也没翻的，比如界面名字，不算）；非中日语言里出现汉字，日语里出现中文源文件里的整串汉字。
    - 链接里的锚点（`#…`）要先 `npm run build`（这种语言打开或用 `L10N_FULL`），它才能对着页面查。
    - 英文模板忘了 export，它也会说。
  - 还没打开的语言，缺的文件、页面、键只计数，不算错（首页和新手入门用到的除外）；`full: true` 以后缺了就算错。打开之前先让 check 全过，再 `npm run build` 看一眼，新手入门里原来指向 `/en/` 的链接也要改成 `/<语言>/…`（check 会列出来）。
  - Keyboard Maestro 只有英文界面，所以每种语言的页面里，按钮名都照英文写、加粗，第一次出现时括号里给那种语言的意思，和中文页一样。`check-ui-labels` 也查 `src/l10n/<语言>/*.json`。
  - 改了中文 / 英文的新手入门或首页，同一次提交里把这些语言也改了。
  - 阿拉伯语从右往左：样式里的左右用逻辑属性，代码、命令和英文按钮名保持从左往右。`node scripts/rtl-isolate.mjs` 改写的是 `src/l10n/ar/*.json`、`src/pages/ar/` 下的三类 MDX 和 `README.ar.md`。
- README 有中文 `README.md` 和英文 `README.en.md`，配图在 `assets/` 和 `assets/en/`（见下面「README 插画和分享大图」）。改了 `nav.js` 的课名、步骤或 How-to，两份 README 里的清单一起改。以后加语言，照 Grok Bot 站的做法每种语言一份 `README.<语言>.md`，语言栏里加上它，`tools/build_hero.py` 和 `tools/build_readme_svgs.py` 的 `TEXT` 各加一份。

```bash
npm install
npm run dev        # http://localhost:4446
npm run build      # 输出到 dist/
npm run check      # 构建以后跑：多语言、整站、界面名字、例子
```

## 现在的状态

v1 的内容写完了：新手入门三课、完整教程 0–7 步（8 步）、18 篇 How-to、22 个 Wiki 条目和常见问题，中英文各一份。2026-11-25 对照官方 Wiki 逐条核对过一遍。

- 另外 8 种语言（日、韩、西、葡、法、德、俄、阿）2026-11-25 上线：首页、新手三课和各自的 README。Gemini 4 Neon XHigh 照 `docs/TRANSLATE.md` 和 `docs/l10n/glossary/<语言>.md` 从英文翻，Claude 每两种语言一位审读，审读意见再交给 Gemini 改，改完逐条核对过。改了中文 / 英文的三课、首页或 README，这 8 种语言要跟着改（同样的流程）。
- 阿拉伯语里的快捷键（⌃⌥⌘N）和加粗的英文按钮名会被从右往左的排版排反，`node scripts/rtl-isolate.mjs` 给它们套上看不见的从左往右隔离符（代码和复制块不动）；`npm run check` 里有 `--check`，漏套了会报。
- `npm run release` 在部署前查 `src/pages`、`src/views`、`src/l10n` 里还有没有 `待写` 或 `TBD:`，有就停下并列出文件；`check-site` 查的是构建出来的页面，看不见 MDX 注释，所以这一道要留着。

## 怎么改

- **站点结构**只在 `src/data/nav.js` 改：新手入门三课（`LESSONS`）、主线 8 步（`STEPS`）、How-to 清单（`HOWTO`）、术语解释（`GLOSSARY`）、本站仓库（`REPO`）、官方 Wiki（`DOCS`）、官网（`SITE`）、官方论坛（`FORUM`）。
- **新手入门**每一课是 `src/pages/start/<n>-<slug>.mdx`，开头写 `layout: ../../layouts/Lesson.astro` 和 `lesson: n`。
- **主线教程**每一步是 `src/pages/guide/<n>-<slug>.mdx`，开头写 `layout: ../../layouts/Guide.astro` 和 `step: n`。
- **How-to** 是 `src/pages/howto/<slug>.mdx`（`layout: ../../layouts/HowTo.astro`，`slug` 要和 `HOWTO` 里一致，`step` 是相关的主线步骤，可以不写）。
- **Wiki** 和 **常见问题** 只改数据：`src/data/wiki.js`、`src/data/faq.js`。Wiki 条目可以带一张 `list` 表。`GLOSSARY` 的每个术语用 `wiki:` 指向一条 Wiki 条目；加了新条目，记得把对应术语指过去。
- 每个 Wiki 条目在 X 上分享时用自己的大图（条目名 + 一句话），是生成的：加了条目，或者改了条目名、一句话、分组，跑 `npm run og`，把 `public/og/` 和 `tools/og-manifest.json` 一起提交。
- **教程组件**（在 MDX 里 import）：`Callout`（`ok` / `warn` / `no` / `tip`）、`Term`（术语，`k` 对应 `GLOSSARY`）、`Checkpoint`（可打勾的检查点）、`Q`（「卡住了？」里的一条）、`Tabs`（按 macOS 版本或做法切换同一处内容）、`Copy`（带复制按钮的一段文字或命令）、`Cmd`（正文里一点就复制的命令）、`Reply`（示意 Keyboard Maestro 弹出来的提示、通知或报错）、`Shot`（配图）、`Annot`（带红色箭头和编号的截图，坐标就是图片像素，见组件开头的注释）、`Fig`（图示）。
- **搜索**（⌘K）自动收录新手入门每一课、主线每一步、每篇 How-to、每个 Wiki 条目和每条常见问题，正文按小节做全文搜索。
- **界面文字**（顶栏、侧栏、首页、页面框架和组件里固定的字）只改 `src/data/ui.js`：中文、英文各一份，另外 8 种语言照 `en` 的结构翻在 `src/l10n/<语言>/ui.json`。改完 `node scripts/l10n.mjs export`。
- How-to 新加一组，要给它一个 `id`（只用来对上另外 8 种语言的 `nav.json`）。
- **UI Kit 升级**：在 xxd-ui-kit 里 `pnpm xxd sync <本目录>`，不要手改 `public/xxd/`。改完界面跑 `pnpm xxd doctor <本目录>`。

## 资料来源

本站写的每一条事实，都要能在官方找到出处：

1. **Keyboard Maestro 官方 Wiki** [wiki.keyboardmaestro.com](https://wiki.keyboardmaestro.com/)（DokuWiki，只有英文）：用户手册（`manual/`）、每个动作（`action/`）、触发器（`trigger/`）、条件（`condition/`）、令牌（`token/`）、函数（`function/`）、集合（`collection/`）、求助页（`assistance/`，权限、安全输入这类问题，`manual/Troubleshooting` 链过去），加上根目录的概念页。功能、选项、菜单路径、限制、权限、偏好设置都以这里为准。中英文页都链同一篇。
2. **App 自带的英文字符串**：按钮、菜单、动作和偏好设置的名字照 App 屏幕上的字写。`tools/km-labels.json` 是从 App 里整理出来的清单（见下面「界面名字」）。
3. **官方论坛** [forum.keyboardmaestro.com](https://forum.keyboardmaestro.com/) 上的帖子：只当作「有人这样用过」的经验来用，写明是论坛上用户的经验，附原帖链接。它们从来不是功能或步骤的出处；帖子和官方说法不一样时，以官方为准，帖子的说法不写。

- 原文副本在 `docs/sources/raw/official/`：每页一个文件 `<命名空间>/<页名>.txt`（根目录的在 `_root/`），是 DokuWiki 原始标记，第一行是这一页的网址；目录在 `official/_index.md`。只留在本地，不提交（`.gitignore` 里排除了）。仓库是公开的，别人的文章不整篇转载。
- 读资料的笔记记在 `docs/sources/README.md`：要点、本站哪页用到、官方页面自己的毛病。
- 写进网站的内容一律用自己的话讲，引用原话一次不超过一句，并附官方那一页（或原帖）的链接。
- 资料里没写的行为、选项、数字，不写。拿不准就不写，或者写「以官方 Wiki 为准」并给链接。
- 会变的东西（新版本的动作、菜单位置、支持的 macOS 版本）以官方为准，变了就改 `data/` 或页面里对应的那一处。
- **不碰盗版。** 不放、不提许可证密钥（序列号）、注册机、破解版、「免费替代下载」或下载镜像，网友帖子里的也不搬。下载一律链官网 [keyboardmaestro.com](https://www.keyboardmaestro.com/)。
- **价格只说官方怎么说。** 只在第 0 步和常见问题里提一次，写成「官方购买页写的是……（某年某月某日查）」，并链到那一页；不写促销，不比价，不教省钱的门道。
- **不教削弱 macOS 的安全设置**（关掉 SIP、Gatekeeper，给来路不明的 App 开权限）。给 Keyboard Maestro 开权限，照官方 `manual/Troubleshooting`、`manual/Assistance` 说的做。

## 同步

官方 Wiki 会变。每隔一阵、或者 Keyboard Maestro 出了新版本以后：

```bash
node scripts/sync-docs.mjs          # 重新抓官方 Wiki，列出新增、删除、改动的页面，更新 docs/sources/official.json
node scripts/km-labels.mjs          # 升级了 App 或同步过 Wiki：重新整理界面名字，更新 tools/km-labels.json
npm run build && npm run check      # 多语言检查 + 整站检查（<mark>、站内链接和锚点、示意标题、占位字、分享大图）+ 界面名字 + 例子
node scripts/check-doc-links.mjs    # 联网查官方 Wiki 和官网的链接打得开、#锚点在线上页面里真的有
```

- `sync-docs` 用 DokuWiki 的「网站地图」列出每个命名空间的页面，再按页导出原始标记（`/_export/raw/<页>`），不用登录。只是跳转的页面记下跳到哪，不存正文。列出的改动页面，对照 `docs/sources/README.md` 的「和本站的对应」表，改掉本站用到的地方，再提交 `official.json`。只想看有没有变：加 `--check`（有变化时退出码 1）。
- `check-doc-links` 查 `src/` 和 README 里所有 wiki.keyboardmaestro.com、keyboardmaestro.com 的链接。Wiki 里不存在的页面回 404。锚点是小标题原样、空格换成下划线，**大小写不变**（`=== See Also ===` 是 `#See_Also`），小标题里的逗号去掉，只是大小写不对的它会给出线上的写法。链到跳转页的，它提醒改链到目标页。
- 当前核对到：官方 Wiki 2026-11-25（571 页正文、254 个跳转页），Keyboard Maestro 11.1.1。
- 本站每页链了哪些官方页面：`node scripts/source-map.mjs --write` 重新数一遍，写进 `docs/sources/README.md` 的「和本站的对应」。

## 界面名字

Keyboard Maestro 只有英文界面（App 里只有 `en.lproj`），所以按钮、菜单、动作、触发器、条件和偏好设置的名字一律照英文写、加粗。

- `scripts/km-labels.mjs` 从本机装的 App 里读名字，写进 `tools/km-labels.json`（提交）：编辑器和引擎的 `Localizable.strings`、编译过的界面文件（nib）里的字，加上官方 Wiki 的页名和标题、用户手册的小标题和标成按钮的字。带 `%@` 的那几条（`Named Clipboard “%@”`）另存成格式。要本机装着 App，也要有 `docs/sources/raw/`。
- `scripts/check-ui-labels.mjs`（`npm run check` 里跑，只读 `km-labels.json`）查页面和 Wiki、常见问题数据里的 `**加粗**`：
  - 英文页：以英文大写字母开头、不超过 8 个词、不以句号问号叹号结尾的加粗，当作界面名字查。
  - 中文页：整段是英文的加粗才查，中文的加粗不查。
  - 菜单路径（带 `▸`）拆开逐段查，中文页里中文的那几段不查。
  - 对得上 App 里的名字、套得上带 `%@` 的格式、或者在脚本开头的 `ALLOW` 里，就算认识；不认识的逐条报 `文件:行`，只是大小写不同的顺带给出 App 里的写法。
  - 英文页要强调一个大写开头的词，用 `<strong>`（不查），或者换个写法。
- `ALLOW` 是核对过、但 App 文件里没有的名字（macOS 系统设置里的几项、macOS 生成的 **Settings…** 和 **Quit Keyboard Maestro**），每条写明出处。写手觉得它报错了一个真名字，写进报告，由维护的人核对后再加。

## 写作规矩（硬规矩）

- **界面上的名字照 App 屏幕上的英文写，加粗。** 动作的名字就是官方 Wiki 那一页的标题，比如 **Insert Text by Pasting**。菜单路径用 ▸：**File ▸ New Macro**。
  - 中文页：加粗的英文，第一次出现时后面用全角括号给中文意思，比如 **Insert Text by Pasting**（粘贴插入文字）。之后只写加粗的英文；在正文里说的是这件事、不是那个按钮时，用平常的中文词。
  - 英文页：照 App 写，加粗。
  - macOS 的系统设置照当前的 macOS 写：中文页 **系统设置 ▸ 隐私与安全性 ▸ 辅助功能**，英文页 **System Settings ▸ Privacy & Security ▸ Accessibility**。Keyboard Maestro 11 支持到 macOS 10.13，要紧的地方说一句旧版本叫「系统偏好设置」（System Preferences）。
  - 修饰键照 App 的写法用符号（⌃ Control、⌥ Option、⇧ Shift、⌘ Command），一页里第一次用时把名字说一遍。举例的热键挑不容易和别的 App 撞上的组合，比如 ⌃⌥⌘ 加一个字母。
- 事实只写资料里有的（见上面「资料来源」）；引论坛的帖子，写「论坛上有用户分享」并附原帖链接，不替他补充、不评价他本人。
- 强调：每页最多一处 `<mark>`，放这页的核心那一句；`<u>` 只给照做会出错的坑。
- Keyboard Maestro 弹出来的提示、通知、报错，用 `Reply` 组件，标题写「示意」，不冒充真实截图。截图和示意里不出现许可证信息、真实的姓名、邮箱、地址和路径里的用户名，换成示例。
- 要读者照抄的文字（一段缩写展开后的话、一行 Shell 命令）放进 `Copy` 或代码块。Shell 命令只用官方 Wiki 里出现过的，或者明显安全的（`date`、`pwd`）；不写 `sudo`，不写会删东西的命令。
- 中文页和 `/en/` 下的英文页一起改，讲的事实和结构保持一致。
- 第一次出现的站内术语用 `Term` 包起来，悬停有一句解释。
- MDX 正文里不能出现裸的 `<`、`{`、`}`：占位符写在代码里，比如 `` `<你的名字>` ``。

## 怎么写：像一个懂行的朋友，坐在旁边讲给你听

2026-11-19 的读者反馈（来自姊妹站 Grok Bot 新手教程，这套写法从那边经 Saily 站沿用过来）：教程学起来累，很多话要「过一遍脑子」才懂，读着拗口。原因出在我们自己定的规矩上：一句不超过 30 个字、一句只讲一个意思、每一步都放一个「你应该看到」的框。句子被切成了电报，「因为」「所以」「其实」这些把意思连起来的词都被删了，读者只好自己去补。现在改成下面这套写法，参照凯文·凯利（Kevin Kelly）那种「抓住一个核心，用一个画面讲透」的写法，也合教育心理学里几条站得住的发现：对话的口吻比说明书的口吻更好学（Mayer 的个性化原则），故事比条目好记，意思连贯的长句比切碎的短句更省力。

1. **一页一个核心。** 开头几句就把它说出来，最好落在读者自己的处境上（「你是不是也……」）。这一句用 `<mark>` 标出来，全页只这一处。
2. **先讲画面，再讲方法。** 用电脑前真会遇到的事讲成小故事：每天第十次打同一个地址、早上开工先点开同样五个 App、一个菜单命令天天用却没有快捷键、复制了一段字转头就被下一次复制冲掉。道理放在故事后面，一两句就够。
3. **让句子连起来。** 该用「因为」「所以」「可是」「其实」「比如」「于是」就用。长句短句交替，不机械地拆句。写完念出声，哪里卡住就改哪里。
4. **像说话，不像说明书。** 用「你」，用平常的口语。避开公文腔和翻译腔：进行、基于、用于、对……进行、以……的方式、相关、该（当「这个」用）。也别喊口号、别装熟：正文里不写「超简单」「爽翻」「赋能」，具体说它做了什么、替你省了什么。
5. **段与段之间有过渡。** 读者应该一直知道「为什么现在讲这个」。
6. **格式克制。** 列表只放真正并列的几样东西；加粗留给界面名字和关键的几个字；Callout 一页一两个，只放真有用的提醒。「你应该看到」只用在界面会变化、读者需要确认自己没走错的地方，比如第一次打开引擎、给完权限、宏第一次跑起来。
7. **新词顺手解释。** 像朋友那样一句带过（「触发器，就是让宏开始跑的那件事，比如按下一个热键」），不要一段里堆好几个新词。
8. **收个尾。** 页末一两句：刚才学会了什么，下一步去哪。
9. **要读者照抄的话像平时说话。** 比如一段缩写展开后的回复，写成完整、自然的话，不用填空模板腔：「谢谢你的来信，我这周五前给你答复。」
10. **英文页同理。** Conversational, warm and plain. Contractions are fine. Vary sentence length. No corporate words (leverage, utilize, seamless, empower).

例子要照顾到各种读者，哪个国家的都行：学生、上班族、老师、家长、照顾父母的人、自由职业者、小店老板、找工作的人、写东西的人。先讲痛点，再讲办法。不写只有某个国家才有的东西（地址格式、节日、证件号、当地的 App），品牌只提 Mac 自带的 App（Finder、Mail、Safari、备忘录、日历、预览、文本编辑、终端）和官方 Wiki 自己提到的。每页已经用了哪种人、哪件事、哪个热键记在 `docs/EXAMPLES.md`，写新页先挑那里还没用过的；`npm run check` 里的 `scripts/check-examples.mjs` 拦品牌、只属于某个国家的例子和几页共用的套话。

每类页面的样子：

- **新手入门三课**（`src/pages/start/`，数据在 `nav.js` 的 `LESSONS`）：给第一次用 Keyboard Maestro、也没做过任何自动化的人。开头一个小场景，然后马上动手；只给一条路，别的做法放进页尾「不对怎么办」，按读者看到的现象写（「按了热键，什么也没发生」）；不出现没解释过的词（令牌、正则、子程序这类不进新手页）；说清楚三课之外的都是「遇到了再查」。
- **完整教程**（`guide/`）：一个核心想法，配一个日常的例子，再把要点的操作讲清楚，最后「卡住了？」。
- **How-to**：一件具体的事。开头一句说做完你会得到什么，然后按「什么时候会遇到、怎么做、做完怎么确认」讲下去，写成连贯的话，不是几个填空。
- **Wiki**：保留「一句话 → 打个比方 → 在 Keyboard Maestro 里 → 常见误区」的结构，每一块都用说话的口吻写。

## 正文里的图示（`<Fig id="…" />`）

一张图讲清一个关系，放在最需要的那一节：两条路的对比、几步的顺序、哪一层、由强到弱。不是每节都配；同一页最多两张。

- **数据和文字**在 `src/data/figs.js`：每张图一个 id，`type` 选画法（compare、term、folder、anatomy、stack、flow、night、ladder、fan、tree），`base` 放和语言无关的部分（图标、命令、哪一步要你动手），`zh` / `en` 放文字。现在一张都还没有；每种画法要哪些字段，看 `Fig.astro` 里对应的那段。
- **画法**在 `src/components/Fig.astro`，样式在 `public/site.css` 的「图示」一节。全部是 HTML + CSS：颜色、圆角用令牌，跟着亮暗、直角圆角、主色走；字能换行，正文栏窄了自动竖排（容器查询）；从右到左的语言里横向箭头会翻过来，竖排的箭头不翻。
- **动画**：进入视野后一步步亮起来，放两遍停在完整的样子，图下面出「再看一遍」。只动 opacity / transform；系统设了减少动效、或者没有脚本时直接显示完整的图。终端图的命令一个字一个字打出来，窗口标题写在 `base.app`。
- **图里的字**：一格一件事，短；`/命令` 会自动排成等宽、不在连字符处断开。不抄正文整句，也不喊卖点。界面上的名字照 App 的英文写（中文图也一样），说明文字才翻译。
- **新加一张**：先在 `figs.js` 写数据，再在中文页、`/en/` 页同一位置放 `<Fig id="…" />` 并 `import Fig`；`npm run build` 后亮色、暗色、手机宽度各看一眼。

## 反馈入口

每页末尾一行（`Feedback.astro`）：没看懂、照做不成，就到 GitHub 提（带好页面信息的 issue 模板：macOS 版本、Keyboard Maestro 版本、宏应该做什么、实际发生了什么、试过什么），或者先翻常见问题。首页和常见问题页末尾是「提问和讨论」卡片（`Contact.astro`）：GitHub 提问、讨论、分享好用的宏，作者的 X 只是一个安静的文字链接；下面一行提醒发截图或导出的宏之前，先去掉许可证信息、密码和个人文字。不放个人二维码，不催读者「整理好一起发」。

## 部署

线上：<https://keyboardmaestro.xiaoxiaodong.ai>　仓库：<https://github.com/nevertoday/xxd-keyboard-maestro>（都还没建，还没部署）。
Cloudflare Workers 静态资源，Worker 叫 `xxd-keyboard-maestro-site`，配置在 `wrangler.jsonc`（只走自定义域名，`workers_dev`、`preview_urls` 都关着）。更新：`npm run release`（构建、跑 `npm run check`、确认没有还空着的页和占位文字，都过了才 `wrangler deploy`；需要先 `npx wrangler login`）。

## README 插画和分享大图

生成器都在 `tools/`，图里的界面字照 Keyboard Maestro 的英文（中文版只翻译说明文字和宏名），课名从 `nav.js` 读：

- README 头图：`python3 tools/build_hero.py` 写出 `assets/hero.svg` 和 `assets/en/hero.svg`（一段循环的 SVG 动画）。看效果：把 SVG 内嵌进一个 HTML，用 `document.getAnimations()` 暂停在某一秒再截图（放在 `<img>` 里的动画，无头 Chrome 不会往前走）。
  画的是：按下 ⌃⌥⌘T → 宏卡片上 Hot Key 那一行亮 → Activate a Specific Application、Open a URL、Manipulate a Window 一行行亮，旁边小屏幕上日历窗口出现、浏览器窗口打开再挪到右半边；左边新手三课跟着亮。
- README 配图：`python3 tools/build_readme_svgs.py` 写出 `assets/readme/*.svg` 和 `assets/en/readme/*.svg`：`macro`（编辑器三栏：宏组 → 宏 → 触发器和动作）、`editor-engine`（编辑器写、引擎跑，编辑器关掉宏照样跑）、`lessons`（三课各学会什么）。依据都是官方 `manual/Quick_Start`。
- 分享大图：样子都在 `tools/og.html`（一张 HTML 海报：`?lang=zh` / `?lang=en` 是全站那张，`?kind=wiki&title=…&one=…&group=…` 是 Wiki 条目那张）。截哪些卡、填什么字在 `src/data/og.js`：全站两张 `public/og.png`（中文页）、`public/og-en.png`（其他语言），每个 Wiki 条目中英文各一张 `public/og/wiki/<slug>.png`、`public/og/en/wiki/<slug>.png`。`npm run og` 用 Chrome 截图，2 倍清晰度（2560×1280），每张的指纹（模板 + 文字）记在 `tools/og-manifest.json`，没变的不重截；`npm run check` 照指纹查过期。页面用哪张：`Site.astro` 的 `og` 属性（Wiki 条目页传自己的），不传就是全站那张；图不在 `public/` 里就不输出 `og:image`。改了模板，挑最长的条目名和一句话中英文各看一眼：字有没有互相压住、顶到边。GitHub 仓库的 Social preview 用英文全站那张：`npm run og` 顺带把它缩成 1280×640 存成 `assets/social.png`，要在仓库 Settings → General 手动上传。

本站标志（`Site.astro` 里的 `site-mark` 和 `public/favicon.svg`）是一个极简的键帽：墨色方块，里面一圈细框是键面，键面上一个播放三角，和小小东其他站同一套笔法。故意不像 Keyboard Maestro 官方的图标，本站是非官方的。

配色要干净通透：画布接近白（`#FAFAF8`，一圈 `#E9E7E4` 淡边），卡片纯白，线和次要文字用 UI Kit 的 `--line`、`--muted`，浅色块用去掉灰调的浅色。不要灰米色底和偏棕的阴影。不用 Keyboard Maestro 或 Stairways Software 的图标。
