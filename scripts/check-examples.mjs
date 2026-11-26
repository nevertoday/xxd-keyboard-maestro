// 查例子（docs/EXAMPLES.md）：
//   1. 不该出现的例子词：Mac 自带 App 和官方 Wiki 提到的以外的品牌（聊天、支付、购物、办公软件），
//      只有某个国家才有的东西（证件、节日、考试、邮编、币种）。网站正文、数据、界面文字和 README 都查，网址不查。
//   2. 套话：同一句话出现在 3 个以上页面里（中文页和它在各种语言里的同名页算一页），就是照模板复制的，读者翻几页就看出来了。
//      要读者照抄的 Copy 里更严：同一句出现在 2 个页面就算。
//
//   node scripts/check-examples.mjs
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { LANGS } from "../src/data/nav.js";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const LANG_PREFIX = new RegExp(`^(${LANGS.filter((l) => l.code !== "zh").map((l) => l.code).join("|")})/`);

// [说明, 正则]。官方 Wiki 自己提到的（Chrome、Firefox、BBEdit、Dropbox、Photoshop、Microsoft Word、Excel……）不在这里。
const BANNED = [
  ["聊天软件", /微信|WeChat|\bQQ\b|钉钉|DingTalk|飞书|WhatsApp|Telegram|\bSlack\b|Messenger/i],
  ["支付和购物", /支付宝|Alipay|PayPal|Venmo|淘宝|Taobao|京东|拼多多|美团|Yelp/i],
  ["别的办公和效率软件", /\bNotion\b|\bOutlook\b|\bGmail\b|\bAlfred\b|\bRaycast\b|抖音|TikTok|小红书/i],
  ["证件号", /身份证|社保|医保卡|户口|护照号|social security|\bSSN\b|驾照号/i],
  ["节日", /春节|过年|中秋|端午|国庆|元宵|感恩节|圣诞|Thanksgiving|Christmas|Easter|Diwali|Ramadan|斋月|Hanukkah/i],
  ["考试", /高考|中考|考研|\bSAT\b|\bGRE\b|\bGCSE\b/],
  ["地址格式", /邮编|邮政编码|\bZIP code\b|\bpostcode\b|\bpost code\b/i],
  ["币种", /人民币|\bRMB\b|[¥￥€£]\s?\d|(?<!US)\$\d|\d\s*(元|块钱|美元|欧元|英镑|日元)/],
];

const walk = (dir) => readdirSync(dir).flatMap((f) => {
  const p = join(dir, f);
  return statSync(p).isDirectory() ? walk(p) : /\.(mdx|astro|js|md|json)$/.test(f) ? [p] : [];
});
// 读者看得到的文字在这几处；src/components、src/lib 是代码（正则里的 $1 之类），不查
const files = [
  ...["pages", "data", "views", "l10n"].flatMap((d) => walk(join(ROOT, "src", d))),
  ...readdirSync(ROOT).filter((f) => /^README(\.[a-z]{2})?\.md$/.test(f)).map((f) => join(ROOT, f)),
];

const problems = [];
for (const file of files) {
  readFileSync(file, "utf8").split("\n").forEach((line, i) => {
    const text = line.replace(/https?:\/\/[^\s)"'`]+/g, "");
    for (const [name, re] of BANNED) {
      const m = text.match(re);
      if (m) problems.push(`${relative(ROOT, file)}:${i + 1}  ${name}：「${m[0]}」`);
    }
  });
}

// 套话。一页 = 中文页和它在各种语言里的同名页（路径去掉 /en/、/ja/……）：没翻的命令、按钮名在几种语言里一样，不算套话
const pageOf = (file) => relative(join(ROOT, "src/pages"), file).replace(LANG_PREFIX, "");
const CJK = /[　-鿿]/;
const split = (text) => text
  .split(/(?<=[。！？])|(?<=[.!?])\s+/)
  .map((x) => x.replace(/<\w+ \w+="|">\s*$/g, "").replace(/\s+/g, " ").trim())
  .filter((x) => x.length >= (CJK.test(x) ? 12 : 30));

const copies = new Map();
const prose = new Map();
const add = (map, x, page) => map.set(x, new Set([...(map.get(x) ?? []), page]));
for (const file of walk(join(ROOT, "src/pages")).filter((f) => f.endsWith(".mdx"))) {
  const page = pageOf(file);
  const text = readFileSync(file, "utf8");
  const codes = [...text.matchAll(/<Copy\b[^>]*?\bcode=(?:"([^"]*)"|\{`([\s\S]*?)`\}|\{"((?:[^"\\]|\\.)*)"\})/g)]
    .map((m) => (m[1] ?? m[2] ?? m[3]).replace(/\\n/g, "\n"));
  for (const x of new Set(codes.flatMap((c) => c.split("\n")).flatMap(split))) add(copies, x, page);
  const body = text
    .replace(/^---\n[\s\S]*?\n---\n/, "")
    .replace(/```[\s\S]*?```/g, "")
    .replace(/<Copy\b[\s\S]*?\/>/g, "")
    // 小标题（## Stuck? 这类）按规定每页都一样，不算套话
    .split("\n").filter((l) => !/^\s*(import|export)\s/.test(l) && !/^#{1,6}\s/.test(l)).join("\n");
  for (const x of new Set(body.split(/\n\s*\n/).flatMap(split))) add(prose, x, page);
}
for (const [x, where] of copies) {
  if (where.size > 1) problems.push(`套话：${where.size} 个页面的 Copy 里都有「${x}」（${[...where].join("、")}）`);
}
const MAX_PAGES = 3;
for (const [x, where] of prose) {
  if (where.size > MAX_PAGES) problems.push(`套话：${where.size} 个页面的正文里都有「${x}」（${[...where].join("、")}）`);
}

if (problems.length) {
  console.log(`例子问题 ${problems.length} 处（换成 docs/EXAMPLES.md 里还没用过的场景，换个说法）：\n${problems.join("\n")}`);
  process.exit(1);
}
console.log(`✓ 例子：${files.length} 个文件里没有品牌和只属于某个国家的例子，没有 3 个以上页面共用的句子`);
