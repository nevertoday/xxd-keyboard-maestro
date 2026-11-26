// 核对页面里写的 Keyboard Maestro 界面名字（动作、触发器、条件、菜单、按钮、偏好设置……）。Keyboard Maestro 只有英文界面，名字一律照 App 写、加粗。
//
//   node scripts/check-ui-labels.mjs              查 src/pages/**/*.mdx、src/data/ 的 wiki、faq 和另外 8 种语言的翻译数据 src/l10n/<语言>/*.json（npm run check 里跑）
//   node scripts/check-ui-labels.mjs <文件>…      只查这几个文件（路径里有 /en/ 或文件名是 *.en.js 的按英文页查）
//
// 只读 tools/km-labels.json（scripts/km-labels.mjs 从 App 和官方 Wiki 整理的名字），不用装 App。
//
// 哪些加粗算界面名字（只看 **…**，代码块、`代码` 和 {/* 注释 */} 里的不看）：
//   - 英文页：以 ASCII 大写字母开头、不超过 8 个词、不以 . ! ? 结尾的加粗。**Insert Text by Pasting**、**Launch Engine at Login**
//   - 中文页（以后的其他语言页也一样）：整段是英文的加粗，**Insert Text by Pasting**（粘贴插入文字）。中文的加粗不查
//   - 菜单路径（带 ▸、➤、→ 或 >）拆开逐段查：**File ▸ New Macro**；中文页里中文的那几段不查（**系统设置 ▸ 隐私与安全性 ▸ 辅助功能**）
//   小写开头的加粗（**not**）不算。英文页要强调一个大写开头的词，用 <strong>，或者换个写法；<strong> 不查。
// 怎么算认识：去掉末尾的 …、...、:、. 和多余空格，弯引号当直引号，然后
//   1. 和 km-labels.json 的 labels 里某一条一字不差（大小写也算），或者
//   2. 套得上 formats 里某一条，%@ 换成任意一小段字：Named Clipboard “%@” 认得 **Named Clipboard “Address”**，或者
//   3. 在下面的 ALLOW 里。
// 不认识的逐条报 文件:行。只是大小写不同的，顺带给出 App 里的写法。
// 写手不要自己往 ALLOW 里加：App 里确实有、这里不认识的名字，写进报告，由维护的人核对后再加，并写明出处。
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname, relative, basename } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const KM = JSON.parse(readFileSync(join(ROOT, "tools/km-labels.json"), "utf8"));

// 核对过、但 km-labels.json 里没有的界面名字：[名字, 出处]
const ALLOW = [
  // macOS 的系统设置（在 macOS 27.2 的「系统设置」里查过）：给 Keyboard Maestro 开权限时要点的地方
  ["System Settings", "macOS 13 起的系统设置"],
  ["System Preferences", "macOS 12 和更早的系统设置的名字，Keyboard Maestro 11 支持到 macOS 10.13"],
  ["Privacy & Security", "System Settings 里的一栏"],
  ["Accessibility", "Privacy & Security 里的一项"],
  ["Input Monitoring", "Privacy & Security 里的一项"],
  ["Full Disk Access", "Privacy & Security 里的一项"],
  ["Screen & System Audio Recording", "Privacy & Security 里的一项（macOS 15 起的名字）"],
  ["Automation", "Privacy & Security 里的一项"],
  ["Location Services", "Privacy & Security 里的一项（定位服务）；macOS 14 起，引擎要它才读得到连着哪个 Wi-Fi（trigger/Wireless_Network）"],
  ["Login Items & Extensions", "System Settings ▸ General 里的一项"],
  // 新手三课的其他语言版本：macOS 系统设置在那种语言里的名字（Apple 自己的译名，docs/l10n/glossary/<语言>.md 里有对照）
  ["Systemeinstellungen", "de：System Settings"],
  ["Datenschutz & Sicherheit", "de：Privacy & Security"],
  ["Bedienungshilfen", "de：Accessibility"],
  ["Ajustes del Sistema", "es：System Settings"],
  ["Preferencias del Sistema", "es：System Preferences"],
  ["Privacidad y seguridad", "es：Privacy & Security"],
  ["Accesibilidad", "es：Accessibility"],
  ["Ajustes do Sistema", "pt-BR：System Settings"],
  ["Preferências do Sistema", "pt-BR：System Preferences"],
  ["Privacidade e Segurança", "pt-BR：Privacy & Security"],
  ["Acessibilidade", "pt-BR：Accessibility"],
  ["Sicherheit & Datenschutz", "de：macOS 12 和更早的 Security & Privacy 面板"],
  ["Datenschutz", "de：Security & Privacy 面板里的 Privacy 标签"],
  ["Bildschirm- & Systemaudioaufnahme", "de：Screen & System Audio Recording"],
  ["Automatisation", "fr：Automation"],
  // Keyboard Maestro 菜单里由 macOS 生成的几项（App 的文件里没有这几个字）
  ["Settings", "macOS 13 起，App 菜单里的 Preferences… 显示成 Settings…（Wiki 和 App 文件里还叫 Preferences）"],
  ["Quit Keyboard Maestro", "App 菜单的退出项，macOS 按 App 名生成；官方 Wiki 的菜单路径写作 Keyboard Maestro ➤ Quit Keyboard Maestro"],
];

const norm = (s) => s.replace(/[\u2066\u2069]/g, "").replace(/[’‘]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, " ").trim().replace(/(…|\.\.\.|[.:])+$/, "").trim();
const known = new Set([...KM.labels, ...ALLOW.map(([l]) => l)].map(norm));
const byLower = new Map([...known].map((l) => [l.toLowerCase(), l]));
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const formats = KM.formats.map((f) => new RegExp(`^${esc(norm(f)).replace(/%(\d+\\\$)?(@|l{0,2}[dui])/g, (m, pos, kind) => (kind === "@" ? "(.{1,40}?)" : "(\\d+)"))}$`));
const isKnown = (label) => known.has(label) || formats.some((re) => re.test(label));

// src/l10n/en/ 是从 wiki.en.js、faq.en.js 这些源数据生成的英文模板，源数据已经查过，不重复查
function l10nFiles() {
  const dir = join(ROOT, "src/l10n");
  return readdirSync(dir).filter((l) => l !== "en" && statSync(join(dir, l)).isDirectory()).flatMap((l) => readdirSync(join(dir, l)).filter((f) => f.endsWith(".json")).map((f) => join(dir, l, f)));
}
const walk = (dir) => readdirSync(dir).flatMap((f) => {
  const p = join(dir, f);
  return statSync(p).isDirectory() ? walk(p) : p.endsWith(".mdx") ? [p] : [];
});
const args = process.argv.slice(2);
const files = args.length
  ? args.map((f) => join(process.cwd(), f))
  : [...walk(join(ROOT, "src/pages")), ...["wiki.js", "wiki.en.js", "faq.js", "faq.en.js"].map((f) => join(ROOT, "src/data", f)), ...l10nFiles()];
const isEnglish = (file) => /[\\/]en[\\/]/.test(relative(ROOT, file)) || /\.en\.js$/.test(basename(file));

// 代码和注释换成同样长度的空白（换行留着），行号不变
const blank = (m) => m.replace(/[^\n]/g, " ");
const strip = (text) => text.replace(/```[\s\S]*?```/g, blank).replace(/\{\/\*[\s\S]*?\*\/\}/g, blank).replace(/`[^`\n]*`/g, blank);
const MENU = /\s*(?:▸|➤|→|\s>\s)\s*/;
const ENGLISH = /^[A-Z][A-Za-z0-9 &'’“”"(),./+%…:!?-]*$/;

const bad = [];
let checked = 0;
for (const file of files) {
  const en = isEnglish(file);
  const latin = /[\\/](es|pt|fr|de)[\\/]/.test(relative(ROOT, file));
  const text = strip(readFileSync(file, "utf8"));
  for (const m of text.matchAll(/\*\*([^*\n]+?)\*\*/g)) {
    const bold = m[1].replace(/[\u2066\u2069]/g, "").trim();
    const menu = MENU.test(bold);
    const parts = menu ? bold.split(MENU) : [bold];
    for (const part of parts) {
      if (!/^[A-Z]/.test(part)) continue;
      if (!en && !ENGLISH.test(part)) continue;
      // 西、葡、法、德也用拉丁字母：本语言的加粗句子（以 . ! ? 结尾、超过 8 个词、或带逗号的）不是界面名字
      if (!menu && (en || latin) && (/[.!?]$/.test(part) || part.split(" ").length > 8 || (latin && /, /.test(part)))) continue;
      checked++;
      const label = norm(part);
      if (isKnown(label)) continue;
      const line = text.slice(0, m.index).split("\n").length;
      const hint = byLower.get(label.toLowerCase());
      bad.push(`${relative(process.cwd(), file)}:${line}  **${part}**${hint ? `（App 里写作 ${hint}）` : ""}`);
    }
  }
}

if (bad.length) {
  console.log(`✗ ${bad.length} 个界面名字在 Keyboard Maestro ${KM.version} 的界面和官方 Wiki 里都找不到（照 App 屏幕上的字改；确实是 App 里的名字，写进报告，别自己加 ALLOW）：\n  ${bad.join("\n  ")}`);
  process.exitCode = 1;
} else {
  console.log(`✓ 界面名字：${checked} 处加粗的英文名字都对得上 Keyboard Maestro ${KM.version} 的界面或官方 Wiki（${files.length} 个文件）`);
}
