# Translation brief: 8 more languages

The site is Chinese (root) and English (`/en/`) in full. Eight more languages (Japanese, Korean, Spanish, Brazilian Portuguese, French, German, Russian, Arabic) are live with the home page, the three beginner lessons and their own README; deeper pages (full guide, how-to, wiki, FAQ) link to the English version until a language is switched on. Every page and every piece of site text can now be translated: the data files under `src/l10n/<lang>/` and the guide and how-to pages under `src/pages/<lang>/` (see "What to translate" below). A language goes live as a full site once all of it is in and checked.

Translation is done by Gemini (`agy -p … --model gemini-4-neon-xhigh`), one file per call, from the English originals. Claude reviews each language and Gemini applies the findings. This file is the brief Gemini receives with every file; `docs/l10n/glossary/<lang>.md` is the per-language term list it receives with it.

## Who reads it
Mac users who have never automated anything, reading in their own language. The site reads like a friend who knows Keyboard Maestro explaining it: one core idea per page, a small everyday scene first, then the steps, in connected sentences. The translation must read that way in the target language, written as a native technical writer would write a friendly tutorial, never word for word.

## Voice
- Address the reader as the language's friendly tutorials do: ja です／ます調; ko 해요체; es tú; pt (Brazil) você; fr vous; de du; ru вы; ar Modern Standard Arabic, addressing the reader directly.
- Short and long sentences mixed, connected with the language's natural "because / so / but / for example". Plain everyday words. No officialese, no marketing words.
- Faithful: same facts, steps, numbers, warnings and emphasis. Add nothing, drop nothing.

## Never change (copy exactly)
- **Keyboard Maestro's interface is English only.** Every action, trigger, menu, button and preference name stays in English exactly as written, in bold: `**Insert Text by Pasting**`, `**Hot Key Trigger**`, `**Launch Engine at Login**`, `**File ▸ New Macro**`. The first time a label appears on a page, add a short gloss in your language in parentheses after it, the way the Chinese pages do (`**Insert Text by Pasting**（粘贴插入文字）`). After that, the bold English alone.
- macOS settings: use the name macOS shows in your language (System Settings ▸ Privacy & Security ▸ Accessibility as Apple localizes it, e.g. ja システム設定 ▸ プライバシーとセキュリティ ▸ アクセシビリティ). If unsure, keep the English in bold and explain.
- Keys and symbols (⌃ ⌥ ⇧ ⌘, ⌃⌥⌘N), typed strings (`=reply=`, `=addr=`), tokens (`%LongDate%`), code, inline code, file names, URLs of other sites, product names (Keyboard Maestro, Keyboard Maestro Engine, macOS, Finder, Safari, Notes, Calendar…).
  - Apple app names: use the name the Mac shows in your language when it differs (ja メモ for Notes, カレンダー for Calendar; de Notizen, Kalender), since that's what the reader sees.
- MDX/JSX structure: every component tag, attribute name and the values of `id`, `k` (Term keys are Chinese words: keep them exactly), `type`, `layout`, `lesson`, `step`, `slug`, `c`, `cmds`. `import` lines untouched. Frontmatter keys stay; translate only the values of `title`, `tldr`, `description`, `minutes`.
- In `src/l10n/<lang>/*.json`: every key, array length and `{placeholder}` stays exactly; translate only the string values. Keys that are Chinese words (wiki `groups`, nav `glossary`) are keys: keep them.

## Keep consistent across the whole site
- **Enabled vs active are two different words.** A macro or group is *enabled* when its tick is on; it is *active* when it can fire right now (its group's availability conditions are met). Guide step 1 is built on this difference. Pick one word for each (the term list has them) and never use the "enabled" word for "active / activated", in pages, wiki, nav tips or figures.
- **Link text = the target page's title** in your language (`src/l10n/<lang>/nav.json`: lessons, steps, howto). Don't paraphrase it.
- **One gloss per Keyboard Maestro label** on every page (e.g. **Insert Text by Typing**, **Activate a Specific Application**, **Cancel**): reuse the wording from the term list or from earlier pages.
- **A trigger fires; a group is active.** Use one verb for a trigger firing a macro (es disparar, fr se déclencher, de auslösen, pt disparar, ru срабатывать, ar ينطلق) and keep the verb for *activate* only for a group becoming active.
- **The `## Stuck?` heading** (on every guide and how-to page) is the same words on every page, as your language's lessons and term list have it.
- Keys keep the names Apple prints for your language (es Opción, Mayúsculas, Comando, Retorno; de Wahltaste, Umschalttaste, Befehlstaste, Zeilenschalter; fr Option, Maj, Commande, Retour) beside the symbol; use them the same way on every page.
- **No em dashes (—).** The English uses none; join clauses with a comma, colon, parentheses or a new sentence as your language does naturally.
- Option values inside an action or condition are interface labels too (a condition's **is** / **contains**, a palette's **until application switch**, a dialog's **live dangerously**): keep them English like any other label, with a gloss the first time.
- Keyboard Maestro's own Settings window has one name throughout. The debugger's **Step Over** runs the current action and pauses after it; it does not skip it.

## Do translate
- All prose, headings, list items, table cells, `title="…"`, `q="…"`, Checkpoint `items`, `text="…"` on Term, Callout titles, Reply bodies (titled in your language's word for "Illustration"), figure captions.
- Text the reader copies into their own macro (the body of a snippet, a reply): translate it so a reader of your language would naturally write it, keeping tokens and typed strings as they are.
- Every `<Term k="…" />` gets a `text="…"` attribute with your language's term from the term list (the English pages don't need it, yours do: without it the page shows the English term mid-sentence). `npm run check` fails on a missing one.
- Internal links: `/en/…` becomes `/<lang>/…` in every data file and in every guide and how-to page. In the three lessons, links to other lessons and home use `/<lang>/…`; links from a lesson to any other page stay `/en/…` until the language is switched on (the check lists them then). External links stay identical.

## What to translate
Every file has an English template of the same name. Translate the template into the same path under your language, keeping its shape. Templates are generated (`node scripts/l10n.mjs export`); never edit `src/l10n/en/`.

| Your file | English template | What it holds |
| --- | --- | --- |
| `src/l10n/<lang>/ui.json` | `src/l10n/en/ui.json` | All fixed site text. `site`: top bar, sidebar, footer (`{docs}` and `{github}` become links), search box, appearance panel. `home`: the home page (`lead` is [before, highlighted part, after]; `TRACKS` is three [title, text] pairs; `stepLink` has `{n}` and `{title}`). `lesson`, `guide`, `howto`: page frames (`{n}`, `{total}`, `{last}`, `{group}`). `howtoIndex`, `faq`, `notFound`, `wikiIndex`, `wikiEntry`: those pages (arrays are text around a link or a ⌘K key, in order). `callout`, `checkpoint`, `copy`, `cmd`, `reply`, `tabs`, `shot`, `annot`, `feedback`, `contact`: components (`reply.title` starts with your word for "Illustration" and a colon). `partial`: the few lines shown while your language has only the home page and lessons, all saying the page is in English. |
| `src/l10n/<lang>/nav.json` | `src/l10n/en/nav.json` | `lessons` and `steps` by slug (`title`, `minutes`, `sum`); `howtoGroups` by group id; `howto` titles by slug; `glossary` by Chinese term key (`label`: your term, matching the term list; `tip`: the one-line hover explanation). |
| `src/l10n/<lang>/wiki.json` | `src/l10n/en/wiki.json` | `groups`: group names keyed by the Chinese name. `entries` by slug: `title`, `one`, `like`, `here` (array of paragraphs), `myths`, and for some entries `list` ([name, explanation] rows), `listTitle`, `listHead`. Inline markup as in English: `**bold**`, `==one highlight==`, `++underline++`, `` `code` ``, `[text](https://…)`, `[text](/<lang>/…)`. |
| `src/l10n/<lang>/faq.json` | `src/l10n/en/faq.json` | By group id: `title` and `items`, each a [question, answer] pair. Same inline markup. Anchors are `group id-number`, so keep the order. |
| `src/l10n/<lang>/figs.json` | `src/l10n/en/figs.json` | `ui` (diagram label, replay button), then the text of each diagram by id. Short labels; keep keys, symbols and arrays. |
| `src/pages/<lang>/guide/*.mdx`, `src/pages/<lang>/howto/*.mdx` | `src/pages/en/guide/`, `src/pages/en/howto/` | The 8 full-guide steps and 18 how-tos. Same file names, same frontmatter keys (translate `tldr`, `description`, `need`, `time`, `for`; keep `layout`, `step`, `slug`). |

Your home page, wiki, FAQ, how-to index and 404 page already exist as empty shells that read these files.

## MDX safety
- No bare `<`, `{` or `}` in prose; placeholders go inside inline code as in the English.
- Keep quotes in attribute values valid: if a translated value needs a double quote, use your language's typographic quotes.
- Keep the single `<mark>` on the sentence that corresponds to the English one, `<u>` likewise; `**bold**` on the corresponding words. Never end a bold span with punctuation directly followed by text (`**…とき**。目的`, not `**…とき。**目的`).

## README.<lang>.md
Translate `README.en.md` in the same voice. Use the English images (`assets/en/hero.svg`, `assets/en/readme/*.svg`) exactly as README.en.md does. The language bar lists all 10 languages with yours in bold. Site links go to `https://keyboardmaestro.xiaoxiaodong.ai/<lang>/` for the home page and lessons, `/en/` for everything else. Headings become your language's own words, so their anchors change: rewrite in-README `#anchor` links to match your headings.

## Output
Return only the translated file, complete, from the first line to the last. No preamble, no commentary, no code fence around the whole file.

## Checks (maintainer)
`node scripts/l10n.mjs check <lang>` (keys, array lengths, placeholders, links, inline code, untranslated English or Chinese; for pages: frontmatter, imports, headings, component order and ids, Term `text`, compile, `<mark>`), `node scripts/l10n.mjs status`, `L10N_FULL=<lang> npm run build` to preview the language as a full site, then `npm run check`. Arabic is right-to-left: the layout handles direction; keep code, keys and English labels as they are, and run `node scripts/rtl-isolate.mjs` after Arabic changes.
