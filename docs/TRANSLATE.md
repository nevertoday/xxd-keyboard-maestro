# Translation brief: 8 more languages

The site is Chinese (root) and English (`/en/`) in full. Eight more languages (Japanese, Korean, Spanish, Brazilian Portuguese, French, German, Russian, Arabic) get the home page, the three beginner lessons and their own README, the same way the sister sites grokbot.xiaoxiaodong.ai and saily.xiaoxiaodong.ai did. Deeper pages (full guide, how-to, wiki, FAQ) link to the English version.

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
- In `src/i18n/<lang>.js`: every key, array length, `{placeholder}` and `[text](key)` link key stays exactly; translate only the string values.

## Do translate
- All prose, headings, list items, table cells, `title="…"`, `q="…"`, Checkpoint `items`, `text="…"` on Term, Callout titles, Reply bodies (titled in your language's word for "Illustration"), figure captions.
- Text the reader copies into their own macro (the body of a snippet, a reply): translate it so a reader of your language would naturally write it, keeping tokens and typed strings as they are.
- Every `<Term k="…" />` gets a `text="…"` attribute with your language's term from the term list (the English pages don't need it, yours do: without it the page shows the English term mid-sentence). `npm run check` fails on a missing one.
- Internal links: lessons and home link to `/<lang>/…`; every other site page links to `/en/…`. External links stay identical.

## MDX safety
- No bare `<`, `{` or `}` in prose; placeholders go inside inline code as in the English.
- Keep quotes in attribute values valid: if a translated value needs a double quote, use your language's typographic quotes.
- Keep the single `<mark>` on the sentence that corresponds to the English one, `<u>` likewise; `**bold**` on the corresponding words. Never end a bold span with punctuation directly followed by text (`**…とき**。目的`, not `**…とき。**目的`).

## README.<lang>.md
Translate `README.en.md` in the same voice. Use the English images (`assets/en/hero.svg`, `assets/en/readme/*.svg`) exactly as README.en.md does. The language bar lists all 10 languages with yours in bold. Site links go to `https://keyboardmaestro.xiaoxiaodong.ai/<lang>/` for the home page and lessons, `/en/` for everything else. Headings become your language's own words, so their anchors change: rewrite in-README `#anchor` links to match your headings.

## Output
Return only the translated file, complete, from the first line to the last. No preamble, no commentary, no code fence around the whole file.

## Checks (maintainer)
`npm run build`, `node scripts/check-i18n.mjs <lang>` (keys, placeholders, compile, copy ids, links, `<mark>`), `npm run check`. Arabic is right-to-left: the layout handles direction; keep code, keys and English labels as they are.
