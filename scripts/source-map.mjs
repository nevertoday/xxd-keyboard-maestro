// 「和本站的对应」表：本站每一页（新手三课、主线 0–7 步、每篇 How-to、每个 Wiki 条目、常见问题）链了官方 Wiki 的哪些页面。
// 从页面里的 wiki.keyboardmaestro.com 链接直接数出来（中文页和 /en/ 页合在一起，去掉 #锚点），根目录的页面写成 _root/<页名>。
// 中英文两页链的官方页面不一样，在 stderr 提醒一句。
//
//   node scripts/source-map.mjs          打印这张表
//   node scripts/source-map.mjs --write  写进 docs/sources/README.md 两行 <!-- source-map --> 标记之间
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { LESSONS, STEPS, HOWTO_FLAT } from "../src/data/nav.js";
import { WIKI } from "../src/data/wiki.js";
import { WIKI_EN } from "../src/data/wiki.en.js";
import { FAQ } from "../src/data/faq.js";
import { FAQ_EN } from "../src/data/faq.en.js";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const README = join(ROOT, "docs/sources/README.md");
const START = "<!-- source-map:start -->";
const END = "<!-- source-map:end -->";

const official = (text) => {
  const ids = [...text.matchAll(/wiki\.keyboardmaestro\.com\/([^)\s"'#?<>`]+)/g)].map((m) => m[1].replace(/\/$/, ""));
  return new Set(ids.filter(Boolean).map((id) => (id.includes("/") ? id : `_root/${id}`)));
};
const page = (path) => readFileSync(join(ROOT, "src/pages", path), "utf8");

const rows = [
  ...LESSONS.map((l) => [`第 ${l.n} 课 ${l.title}`, `start/${l.slug}.mdx`]),
  ...STEPS.map((s) => [`${s.n} ${s.title}`, `guide/${s.slug}.mdx`]),
  ...HOWTO_FLAT.map((h) => [`How-to ${h.title}`, `howto/${h.slug}.mdx`]),
].map(([name, path]) => [name, official(page(path)), official(page(`en/${path}`))]);
for (const w of WIKI) rows.push([`Wiki ${w.title}`, official(JSON.stringify(w)), official(JSON.stringify(WIKI_EN[w.slug] ?? {}))]);
rows.push(["常见问题", official(JSON.stringify(FAQ)), official(JSON.stringify(FAQ_EN))]);

const lines = ["| 本站 | 链到的官方页面 |", "| --- | --- |"];
for (const [name, zh, en] of rows) {
  const only = (a, b) => [...a].filter((x) => !b.has(x));
  const diff = [...only(zh, en).map((x) => `只在中文：${x}`), ...only(en, zh).map((x) => `只在英文：${x}`)];
  if (diff.length) console.error(`${name}：${diff.join("，")}`);
  const all = [...new Set([...zh, ...en])].sort();
  lines.push(`| ${name} | ${all.map((x) => `\`${x}\``).join("、") || "（没有）"} |`);
}
const table = lines.join("\n");

if (process.argv.includes("--write")) {
  const md = readFileSync(README, "utf8");
  const a = md.indexOf(START), b = md.indexOf(END);
  if (a < 0 || b < a) throw new Error(`docs/sources/README.md 里没找到 ${START} … ${END}`);
  writeFileSync(README, `${md.slice(0, a + START.length)}\n${table}\n${md.slice(b)}`);
  console.log(`已写入 docs/sources/README.md（${rows.length} 行）。`);
} else console.log(table);
