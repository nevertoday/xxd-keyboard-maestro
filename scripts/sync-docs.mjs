// Keyboard Maestro 官方 Wiki 同步。官方 Wiki（wiki.keyboardmaestro.com）是 DokuWiki，每页都能导出原始 wiki 标记（/_export/raw/<页>）。
// 按命名空间（manual 手册、action 动作、trigger 触发器、condition 条件、token 令牌、function 函数、collection 集合，加上根目录的页面）
// 列出全部页面，每页存成 docs/sources/raw/official/<命名空间>/<页名>.txt，写一份目录 official/_index.md；
// 再和 docs/sources/official.json 里上次的指纹比对，列出新增、删除、改动的页面，最后更新 official.json。
//
//   node scripts/sync-docs.mjs          抓取并比对
//   node scripts/sync-docs.mjs --check  只比对，不写文件（有变化时退出码 1）
//
// 改动的页面要对照 docs/sources/README.md 里的「和本站的对应」表，改掉本站相应的地方。
// 只是跳转的页面（~~REDIRECT>…~~）记下跳到哪，不存正文。
import { writeFileSync, readFileSync, mkdirSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const RAW = join(ROOT, "docs/sources/raw/official");
const INDEX = join(ROOT, "docs/sources/official.json");
const HOST = "https://wiki.keyboardmaestro.com";
const NAMESPACES = ["", "manual", "action", "trigger", "condition", "token", "function", "collection"];
const CHECK = process.argv.includes("--check");
const UA = { "user-agent": "xxd-keyboard-maestro-docs-sync" };

const get = async (url) => {
  for (let i = 0; ; i++) {
    const res = await fetch(url, { headers: UA });
    if (res.ok) return res.text();
    if (res.status === 404) return null;
    if (i === 3) throw new Error(`${res.status} ${url}`);
    await new Promise((r) => setTimeout(r, 2000 * (i + 1)));
  }
};

/** 命名空间的页面清单：DokuWiki 的「网站地图」（?do=index&idx=<ns>）里，链接是 /<ns>/<页> 或根目录的 /<页> */
const listPages = async (ns) => {
  const html = await get(`${HOST}/start?do=index${ns ? `&idx=${ns}` : ""}`);
  const re = ns ? new RegExp(`href="/${ns}/([^"?#/]+)"`, "g") : /href="\/([A-Z][^"?#/:]*)"/g;
  const skip = new Set(["DokuWiki", "Search", "Home_Page", "start", "playground"]);
  return [...new Set([...html.matchAll(re)].map((m) => m[1]))].filter((p) => !skip.has(p)).sort();
};

const pool = async (items, n, fn) => {
  const out = new Array(items.length);
  let next = 0;
  await Promise.all(Array.from({ length: n }, async () => {
    while (next < items.length) { const i = next++; out[i] = await fn(items[i]); }
  }));
  return out;
};

const pages = [];
for (const ns of NAMESPACES) for (const p of await listPages(ns)) pages.push(ns ? `${ns}/${p}` : p);
console.log(`页面 ${pages.length} 个，开始抓取…`);

const fresh = {};
const bodies = {};
await pool(pages, 4, async (id) => {
  const text = await get(`${HOST}/_export/raw/${id}`);
  if (text == null || !text.trim()) return;
  const redirect = text.match(/^~~REDIRECT>([^~]+)~~/)?.[1];
  const title = text.match(/^={2,6}\s*(.+?)\s*={2,6}\s*$/m)?.[1] ?? id.split("/").pop().replace(/_/g, " ");
  fresh[id] = redirect
    ? { redirect, url: `${HOST}/${id}` }
    : { title, url: `${HOST}/${id}`, sha: createHash("sha1").update(text).digest("hex").slice(0, 12), bytes: text.length };
  if (!redirect) bodies[id] = text;
});

const old = existsSync(INDEX) ? JSON.parse(readFileSync(INDEX, "utf8")) : {};
const added = Object.keys(fresh).filter((k) => !old[k]);
const removed = Object.keys(old).filter((k) => !fresh[k]);
const changed = Object.keys(fresh).filter((k) => old[k] && old[k].sha !== fresh[k].sha);
const show = (label, list) => list.length && console.log(`${label} ${list.length}：\n  ${list.slice(0, 60).join("\n  ")}${list.length > 60 ? "\n  …" : ""}`);
show("新增", added);
show("删除", removed);
show("改动", changed);
const real = Object.values(fresh).filter((v) => !v.redirect).length;
console.log(`共 ${Object.keys(fresh).length} 页（正文 ${real}，跳转 ${Object.keys(fresh).length - real}）。`);

if (CHECK) process.exit(added.length || removed.length || changed.length ? 1 : 0);

for (const [id, text] of Object.entries(bodies)) {
  const file = join(RAW, `${id.includes("/") ? id : `_root/${id}`}.txt`);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, `<!-- ${HOST}/${id} -->\n${text}`);
}
const sorted = Object.fromEntries(Object.keys(fresh).sort().map((k) => [k, fresh[k]]));
const lines = ["# Keyboard Maestro 官方 Wiki 目录", "", `抓取于 ${new Date().toISOString().slice(0, 10)}，共 ${real} 页正文。`, ""];
for (const ns of NAMESPACES) {
  lines.push(`## ${ns || "(根目录)"}`, "");
  for (const [id, v] of Object.entries(sorted)) {
    if ((id.includes("/") ? id.split("/")[0] : "") !== ns || v.redirect) continue;
    lines.push(`- [${v.title}](${v.url}) \`${id}\``);
  }
  lines.push("");
}
mkdirSync(RAW, { recursive: true });
writeFileSync(join(RAW, "_index.md"), lines.join("\n"));
writeFileSync(INDEX, JSON.stringify(sorted, null, 1) + "\n");
console.log("已写入 docs/sources/official.json 和 raw/official/。");
