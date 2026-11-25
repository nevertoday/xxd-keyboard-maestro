// 查站里所有指向 Keyboard Maestro 官方的链接（官方 Wiki wiki.keyboardmaestro.com、官网 keyboardmaestro.com）：页面打得开，#锚点在线上页面里真的有。
// 锚点对着线上网页查，不从本地副本的标题猜。这个 Wiki 的锚点是小标题原样、空格换成下划线，大小写不变：
// 「=== See Also ===」是 #See_Also（2026-11-25 在 trigger/Typed_String、manual/Menus 上看过）。只是大小写不对的，会提示线上的写法。
// Wiki 里不存在的页面回 404（「This topic does not exist yet」）。链到跳转页的（docs/sources/official.json 里记着 redirect）提醒改链到目标页，不算失败。
// 打不开、锚点不在，才算失败（退出码 1）。
//
//   node scripts/check-doc-links.mjs        要联网；每个网址只抓一次
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const walk = (dir) => readdirSync(dir).flatMap((f) => {
  const p = join(dir, f);
  return statSync(p).isDirectory() ? walk(p) : /\.(mdx|js|astro)$/.test(f) ? [p] : [];
});
const readmes = readdirSync(ROOT).filter((f) => /^README(\.[\w-]+)?\.md$/.test(f)).map((f) => join(ROOT, f));
const files = [...walk(join(ROOT, "src")), ...readmes];
const official = JSON.parse(readFileSync(join(ROOT, "docs/sources/official.json"), "utf8"));
const WIKI = "https://wiki.keyboardmaestro.com/";

const links = new Map();
for (const file of files) {
  const text = readFileSync(file, "utf8");
  for (const m of text.matchAll(/https:\/\/(?:wiki\.|www\.)?keyboardmaestro\.com[^\s)"'`<>\]]*/g)) {
    const url = m[0].replace(/[.,;:，。、）]+$/, "");
    if (!links.has(url)) links.set(url, new Set());
    links.get(url).add(relative(ROOT, file));
  }
}

const pages = new Map();
const fetchPage = (url) => {
  if (!pages.has(url)) pages.set(url, fetch(url, { headers: { "user-agent": "xxd-keyboard-maestro-link-check" }, redirect: "follow" })
    .then(async (r) => ({ ok: r.ok, status: r.status, html: r.ok ? await r.text() : "" }))
    .catch((e) => ({ ok: false, status: e.message, html: "" })));
  return pages.get(url);
};

const bad = [];
const warn = [];
for (const [url, where] of links) {
  const [page, hash] = url.split("#");
  const from = [...where].slice(0, 2).join(", ");
  const id = page.startsWith(WIKI) ? decodeURIComponent(page.slice(WIKI.length)).replace(/\/$/, "") : null;
  // 跳转的目标没写命名空间（Press_a_Button），就在跳转页自己的命名空间里
  const to = id && official[id]?.redirect?.trim();
  if (to) warn.push(`${url}：是跳转页，改链到 ${WIKI}${to.includes(":") ? to.replace(/^:/, "").replace(/:/g, "/") : id.replace(/[^/]*$/, "") + to} ← ${from}`);
  const res = await fetchPage(page);
  if (!res.ok) { bad.push(`${url}：打不开（${res.status}） ← ${from}`); continue; }
  if (!hash) continue;
  const want = decodeURIComponent(hash);
  if (res.html.includes(`id="${want}"`)) continue;
  const near = [...res.html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]).find((x) => x.toLowerCase() === want.toLowerCase());
  bad.push(`${url}：线上页面没有 #${want}${near ? `（线上是 #${near}）` : ""} ← ${from}`);
}
console.log(bad.length ? `✗ ${bad.length} 个问题\n  ${bad.join("\n  ")}` : `✓ ${links.size} 个官方链接都打得开，锚点都在`);
if (warn.length) console.log(`⚠ ${warn.length} 个链到了跳转页：\n  ${warn.join("\n  ")}`);
process.exitCode = bad.length ? 1 : 0;
