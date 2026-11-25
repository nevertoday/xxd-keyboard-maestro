// 从右往左的语言（现在只有阿拉伯语）里，⌃⌥⌘N 这样的快捷键、**Settings…** 这样的英文按钮名会被双向文本算法排反：
// ⌃⌥⌘N 显示成 N⌘⌥⌃，Settings… 显示成 …Settings。这个脚本给它们套上 Unicode 的「从左往右隔离」（U+2066 … U+2069），
// 网页和 GitHub 上都按原样从左往右显示，看不见这两个字符。
// 代码（`…`、``` 代码块）和复制块（code="…"、c="…"）不动，免得读者复制到隐形字符。跑多少遍结果都一样。
//
//   node scripts/rtl-isolate.mjs          改写阿拉伯语的首页文字、三课和 README
//   node scripts/rtl-isolate.mjs --check  只查，有没套上的就列出来（check-i18n 会调它）
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const RTL = ["ar"];
const LRI = "⁦", PDI = "⁩";
const CHECK = process.argv.includes("--check");

const files = RTL.flatMap((l) => {
  const dir = join(ROOT, "src/pages", l, "start");
  return [join(ROOT, "src/i18n", `${l}.js`), join(ROOT, `README.${l}.md`), ...(existsSync(dir) ? readdirSync(dir).map((f) => join(dir, f)) : [])];
}).filter(existsSync);

// 不动的片段：代码块、行内代码、复制块和命令的属性值、链接地址、HTML 注释和 MDX 注释、已经套好的
const PROTECT = /```[\s\S]*?```|`[^`\n]*`|\b(?:code|c|cmds|href|src|id|k)=(?:"[^"]*"|\{`[\s\S]*?`\})|\]\([^)\s]*\)|<!--[\s\S]*?-->|\{\/\*[\s\S]*?\*\/\}|⁦[^⁩]*⁩/g;
// 要套的：一串修饰键加上可选的按键名；加粗里以拉丁字母开头的整段英文
const COMBO = /[⌃⌥⇧⌘]+(?:[A-Za-z0-9]+)?/g;
const BOLD_LATIN = /\*\*([A-Za-z][^*\n]*?)\*\*/g;

const fix = (text) => {
  let out = "", last = 0;
  const wrap = (s) => s.replace(BOLD_LATIN, (m, inner) => `**${LRI}${inner}${PDI}**`).replace(COMBO, (m) => `${LRI}${m}${PDI}`);
  for (const m of text.matchAll(PROTECT)) {
    out += wrap(text.slice(last, m.index)) + m[0];
    last = m.index + m[0].length;
  }
  return out + wrap(text.slice(last));
};

let bad = 0;
for (const f of files) {
  const before = readFileSync(f, "utf8");
  const after = fix(before);
  if (after === before) continue;
  if (CHECK) { bad++; console.log(`✗ ${relative(ROOT, f)}：有快捷键或英文按钮名没套从左往右隔离，跑 node scripts/rtl-isolate.mjs`); }
  else { writeFileSync(f, after); console.log(`✓ 改写 ${relative(ROOT, f)}`); }
}
if (CHECK && bad) process.exit(1);
if (CHECK) console.log(`✓ 从右往左的语言：快捷键和英文按钮名都套好了（${files.length} 个文件）`);
