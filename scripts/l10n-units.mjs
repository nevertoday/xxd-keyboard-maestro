// 另外 8 种语言的翻译单元：英文模板从哪里来、要翻哪些页面（scripts/l10n.mjs 和 l10n-check.mjs 共用）。
import { readdirSync } from "node:fs";
import { UI } from "../src/data/ui.js";
import { navTemplate, LESSONS, STEPS, HOWTO, GLOSSARY } from "../src/data/nav.js";
import { wikiTemplate } from "../src/data/wiki.i18n.js";
import { faqTemplate } from "../src/data/faq.i18n.js";
import { figsTemplate } from "../src/data/figs.i18n.js";
import { WIKI, WIKI_GROUPS } from "../src/data/wiki.js";
import { FAQ } from "../src/data/faq.js";
import { FIGS, FIG_UI } from "../src/data/figs.js";

/** 数据单元：名字 → 英文模板（从源数据现算，不读 src/l10n/en/） */
export const UNITS = { ui: () => UI.en, nav: navTemplate, wiki: wikiTemplate, faq: faqTemplate, figs: figsTemplate };
/** 全部数据单元的英文模板：{ "ui": …, "nav": … } */
export const templates = () => Object.fromEntries(Object.entries(UNITS).map(([k, f]) => [k, f()]));
/** 要翻的页面（相对 src/pages/en/）：新手入门、完整教程、How-to 的每篇 MDX */
export const PAGE_DIRS = ["start", "guide", "howto"];
export const pageUnits = () => PAGE_DIRS.flatMap((d) => readdirSync(`src/pages/en/${d}`).filter((f) => f.endsWith(".mdx")).sort().map((f) => `${d}/${f}`));

// 页面外壳：和 src/pages/en/ 下的一样，只多一个「还不是全站就不生成」（动态路由）；静态的几页由 l10n-dist.mjs 在构建后删掉
export const SHELLS = {
  "wiki/index.astro": () => `---\nimport V from "../../../views/WikiIndex.astro";\n---\n<V />\n`,
  "wiki/[slug].astro": (l) => `---\nimport V from "../../../views/WikiEntry.astro";\nimport { WIKI } from "../../../data/wiki.js";\nimport { isFull } from "../../../data/nav.js";\n// 这种语言还不是全站（src/data/nav.js 的 LANGS）就不生成\nexport function getStaticPaths() { return isFull("${l}") ? WIKI.map((w) => ({ params: { slug: w.slug } })) : []; }\n---\n<V slug={Astro.params.slug} />\n`,
  "faq/index.astro": () => `---\nimport V from "../../../views/FaqPage.astro";\n---\n<V />\n`,
  "howto/index.astro": () => `---\nimport V from "../../../views/HowtoIndex.astro";\n---\n<V />\n`,
  "404.astro": () => `---\nimport V from "../../views/NotFound.astro";\n---\n<V />\n`,
};

// 中文版按同样的结构排好（和模板同样的键），检查时当参照：英文和中文一样的地方（界面名字、命令、产品名），是本来就不用翻的
const text3 = (s) => ({ title: s.title, minutes: s.minutes, sum: s.sum });
export const zhTemplates = () => ({
  ui: UI.zh,
  nav: {
    lessons: Object.fromEntries(LESSONS.map((s) => [s.slug, text3(s)])), steps: Object.fromEntries(STEPS.map((s) => [s.slug, text3(s)])),
    howtoGroups: Object.fromEntries(HOWTO.map((g) => [g.id, g.group])), howto: Object.fromEntries(HOWTO.flatMap((g) => g.items.map((i) => [i.slug, i.title]))),
    glossary: Object.fromEntries(Object.entries(GLOSSARY).map(([k, g]) => [k, { label: k, tip: g.tip }])),
  },
  wiki: { groups: Object.fromEntries(WIKI_GROUPS.map((g) => [g, g])), entries: Object.fromEntries(WIKI.map(({ slug, group, see, step, howto, ...t }) => [slug, t])) },
  faq: Object.fromEntries(FAQ.map((g) => [g.id, { title: g.title, items: g.items }])),
  figs: { ui: FIG_UI.zh, ...Object.fromEntries(Object.entries(FIGS).map(([id, f]) => [id, f.zh])) },
});
