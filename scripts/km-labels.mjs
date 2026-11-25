// 整理 Keyboard Maestro 界面上的名字，写进 tools/km-labels.json（提交），scripts/check-ui-labels.mjs 拿它查页面里加粗的按钮名。
//
//   node scripts/km-labels.mjs          （npm run labels）要本机装着 Keyboard Maestro，也要有 sync-docs 抓下来的 docs/sources/raw/official/；
//                                        升级 App 或跑过 sync-docs 以后重跑，提交 tools/km-labels.json
//
// Keyboard Maestro 只有英文界面（App 里只有 en.lproj）。名字从四处来，App 的编辑器（Keyboard Maestro.app）和引擎（里面的 Keyboard Maestro Engine.app）都读：
//   1. en.lproj/Localizable.strings（UTF-16，用 plutil 转成 JSON）：动作、触发器、条件的名字，提示里的字。带 %@ 的是格式（Named Clipboard “%@”），另存在 formats。
//   2. en.lproj/*.nib（编译过的界面文件，NIBArchive 格式）里的字符串：主菜单、偏好设置、按钮和勾选框（New Macro、Record、Try、Launch Engine at Login……），
//      这些 Localizable.strings 里没有；带 %@ 的也进 formats（Simulate %@ deletes before executing）。nib 里还混着类名、方法名（NSPopUpButton、doAlready:），没有空格、像代码的那种不收。
//   3. 官方 Wiki 的页面（docs/sources/official.json，不含跳转页）：页名（action/Insert_Text_by_Pasting → Insert Text by Pasting）和标题，
//      也收去掉末尾 Action、Trigger、Condition、Token、Function、Collection 的写法。
//   4. 官方 Wiki 原文（docs/sources/raw/official/）：用户手册 manual/ 里每一页的小标题（manual/Menus 把每个菜单项都写成一个小标题，
//      manual/Windows、manual/Preferences 是窗口和偏好设置），和所有页面里标成按钮的字（BUTTON{{{Record}}} → Record）。
// 只读 App 里的文字，不执行 App 里的任何东西。同样的输入写出同样的文件（不记日期），重跑没有变化就没有 diff。
import { readFileSync, readdirSync, statSync, writeFileSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const APP = process.env.KM_APP ?? "/Applications/Keyboard Maestro.app";
const BUNDLES = [APP, join(APP, "Contents/MacOS/Keyboard Maestro Engine.app")];
const RAW = join(ROOT, "docs/sources/raw/official");
const OUT = join(ROOT, "tools/km-labels.json");
if (!existsSync(APP)) {
  console.error(`✗ 没找到 ${APP}（可以用 KM_APP 指定）。tools/km-labels.json 没动`);
  process.exit(1);
}
if (!existsSync(join(RAW, "manual"))) {
  console.error("✗ 没有 docs/sources/raw/official/，先跑 node scripts/sync-docs.mjs。tools/km-labels.json 没动");
  process.exit(1);
}

const plist = (file, key) => execFileSync("plutil", ["-extract", key, "raw", "-o", "-", file], { encoding: "utf8" }).trim();
const version = plist(join(APP, "Contents/Info.plist"), "CFBundleShortVersionString");
const build = plist(join(APP, "Contents/Info.plist"), "CFBundleVersion");

/** NIBArchive 里所有 NSString 的文字（键 NS.bytes 的 data 值）。格式：10 字节 "NIBArchive"、两个版本号、再是对象 / 键 / 值 / 类名四张表的数量和偏移 */
const nibStrings = (buf) => {
  if (buf.toString("latin1", 0, 10) !== "NIBArchive") return [];
  const [, , keyCount, keysAt, valueCount, valuesAt] = Array.from({ length: 6 }, (_, i) => buf.readUInt32LE(18 + i * 4));
  let p = 0;
  // 变长整数：每字节低 7 位，最高位是 1 的那个字节是最后一个
  const varint = () => { let v = 0, shift = 0; for (;;) { const b = buf[p++]; v |= (b & 0x7f) << shift; if (b & 0x80) return v; shift += 7; } };
  const keys = [];
  p = keysAt;
  for (let i = 0; i < keyCount; i++) { const n = varint(); keys.push(buf.toString("utf8", p, p + n)); p += n; }
  const SIZE = { 0: 1, 1: 2, 2: 4, 3: 8, 4: 0, 5: 0, 6: 4, 7: 8, 9: 0, 10: 4 };
  const out = [];
  p = valuesAt;
  for (let i = 0; i < valueCount; i++) {
    const key = keys[varint()], type = buf[p++];
    if (type === 8) { const n = varint(); if (key === "NS.bytes") out.push(buf.toString("utf8", p, p + n)); p += n; }
    else if (type in SIZE) p += SIZE[type];
    else throw new Error(`NIBArchive 里有不认识的值类型 ${type}`);
  }
  return out;
};
const nibFiles = (path) => (statSync(path).isDirectory() ? readdirSync(path).map((f) => join(path, f)).filter((f) => f.endsWith(".nib")) : [path]);

// 界面上的字：一行，有字母，不太长。没有空格又像代码的（小写或下划线开头、驼峰、NS 开头）不收
const LABEL_MAX = 60;
const looksLikeCode = (s) => !s.includes(" ") && (/^[a-z_.]/.test(s) || /[a-z][A-Z]/.test(s) || /^NS[A-Z]/.test(s));
const isLabel = (s) => s.length <= LABEL_MAX && !/[\n\r\t]/.test(s) && /[A-Za-z]/.test(s) && !s.includes("\uFFFD") && s.split(" ").length <= 8;
// 格式：带 %@ / %d 的那几条。除掉占位以后还要剩两个词以上，不然什么都能对上；剩得太少的格式整条不收（也不当名字收）
const PLACEHOLDER = /%(\d+\$)?(@|l{0,2}[dui])/g;
const hasPlaceholder = (s) => s.replace(PLACEHOLDER, "\0") !== s;
const isFormat = (s) => s.length <= 80 && !/[\n\r\t]/.test(s) && (s.replace(PLACEHOLDER, " ").match(/[A-Za-z]+/g) ?? []).length >= 2;

const labels = new Set(), formats = new Set();
const count = { strings: 0, nibs: 0, wiki: 0, raw: 0 };
for (const bundle of BUNDLES) {
  const lproj = join(bundle, "Contents/Resources/en.lproj");
  const strings = JSON.parse(execFileSync("plutil", ["-convert", "json", "-o", "-", join(lproj, "Localizable.strings")], { encoding: "utf8", maxBuffer: 1 << 26 }));
  for (const v of Object.values(strings)) {
    count.strings++;
    if (hasPlaceholder(v)) { if (isFormat(v)) formats.add(v.trim()); }
    else if (isLabel(v.trim())) labels.add(v.trim());
  }
  for (const f of readdirSync(lproj).filter((f) => f.endsWith(".nib"))) {
    for (const file of nibFiles(join(lproj, f))) {
      for (const s of nibStrings(readFileSync(file))) {
        count.nibs++;
        const v = s.trim();
        if (hasPlaceholder(v)) { if (isFormat(v)) formats.add(v); }
        else if (isLabel(v) && !looksLikeCode(v)) labels.add(v);
      }
    }
  }
}

const SUFFIX = / (Action|Trigger|Condition|Token|Function|Collection)s?$/;
const official = JSON.parse(readFileSync(join(ROOT, "docs/sources/official.json"), "utf8"));
for (const [id, page] of Object.entries(official)) {
  if (page.redirect) continue;
  for (const name of [id.split("/").pop().replace(/_/g, " "), page.title]) {
    if (!name || !isLabel(name)) continue;
    count.wiki++;
    labels.add(name);
    if (SUFFIX.test(name)) labels.add(name.replace(SUFFIX, ""));
  }
}

// DokuWiki 标记：~~ 是不断行的空格，**…** 是加粗，[[页|字]] 是链接
const wikiText = (s) => s.replace(/~~/g, " ").replace(/\*\*|\/\//g, "").replace(/\[\[[^|\]]*\|([^\]]*)\]\]/g, "$1").replace(/\[\[([^\]]*)\]\]/g, "$1").trim();
const addRaw = (s) => { const v = wikiText(s); if (isLabel(v) && !hasPlaceholder(v)) { count.raw++; labels.add(v); } };
const walk = (dir) => readdirSync(dir).flatMap((f) => (statSync(join(dir, f)).isDirectory() ? walk(join(dir, f)) : f.endsWith(".txt") ? [join(dir, f)] : []));
for (const file of walk(RAW)) {
  const text = readFileSync(file, "utf8");
  for (const m of text.matchAll(/BUTTON\{\{\{(.+?)\}\}\}/g)) addRaw(m[1]);
  if (file.startsWith(join(RAW, "manual") + "/")) for (const m of text.matchAll(/^={2,6}\s*(.+?)\s*={2,6}\s*$/gm)) addRaw(m[1]);
}

const sorted = (set) => [...set].sort((a, b) => a.localeCompare(b, "en"));
const out = {
  app: "Keyboard Maestro",
  version,
  build,
  note: "Written by scripts/km-labels.mjs from the app's en.lproj (Localizable.strings and nibs, editor and Engine), the wiki page names in docs/sources/official.json, and the manual's headings and BUTTON labels in docs/sources/raw/official. Rerun after updating the app or syncing the wiki.",
  labels: sorted(labels),
  formats: sorted(formats),
};
writeFileSync(OUT, JSON.stringify(out, null, 1) + "\n");
console.log(`✓ Keyboard Maestro ${version}（${build}）：${out.labels.length} 个名字、${out.formats.length} 个带 %@ 的格式（读了 strings ${count.strings} 条、nib 字符串 ${count.nibs} 条、Wiki 页名和标题 ${count.wiki} 个、手册小标题和按钮 ${count.raw} 个）→ tools/km-labels.json`);
