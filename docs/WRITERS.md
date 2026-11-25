# Shared brief for content writers (xxd-keyboard-maestro)

## The operator's goal
An independent, open-source, unofficial learning site at keyboardmaestro.xiaoxiaodong.ai about Keyboard Maestro, the Mac automation app by Stairways Software (version 11.1.1 as of 2026-11-24). It is for beginners who have never automated anything and for users who want to go deeper. v1 is Chinese (root) and English (`/en/`). The sister sites https://grokbot.xiaoxiaodong.ai and https://saily.xiaoxiaodong.ai (sources: `/Volumes/T7-usb/js/xxd-grokbot`, `/Volumes/T7-usb/js/xxd-saily`, read-only for you) are the model for tone, page shapes and voice: they read like a friend who knows the product explaining it, Kevin Kelly style (one core idea per page, a picture or small story first, connected sentences).

## Read before writing
1. `docs/MAINTAINING.md` in your worktree: the hard rules and the 「怎么写」 voice section. Follow them exactly.
2. `docs/sources/README.md`: which official pages feed which site page, and what never goes on the site.
3. The originals in `docs/sources/raw/official/` (DokuWiki markup, one file per page; `Keyboard~~Maestro` is just "Keyboard Maestro", `BUTTON{{{OK}}}` is a button labelled OK): `manual/` (the user manual), `action/`, `trigger/`, `condition/`, `token/`, `function/`, `collection/`, `_root/` (concept pages like Text_Fields, Tokens, Subroutines, Troubleshooting). `_index.md` lists every title and URL. Each file's first line is its live URL.
4. `src/data/nav.js`: the page list, titles, one-line summaries and the GLOSSARY (`<Term k="…" />` keys). Your page must deliver what its nav.js title and `sum` promise.
5. For page shape, 2 or 3 matching sister-site pages (`/Volumes/T7-usb/js/xxd-grokbot/src/pages/start/*.mdx`, `…/guide/1-goal.mdx`, `…/howto/morning-briefing.mdx`, `/Volumes/T7-usb/js/xxd-saily/src/data/wiki.js`) and the components they import.

## Facts and sources
- Every factual statement about Keyboard Maestro (what an action or trigger does, its options, menu paths, limits, permissions, preferences) comes from the official wiki copy in `docs/sources/raw/official/`. Write it in your own words; quote at most one sentence at a time; link the page (`https://wiki.keyboardmaestro.com/<namespace>/<Page>`, e.g. `https://wiki.keyboardmaestro.com/trigger/Typed_String`). Link anchors only if the heading exists in that page. On the live wiki a heading's id keeps its case with spaces as `_` (`#See_Also`); `node scripts/check-doc-links.mjs` checks each anchor against the live page and suggests the right spelling.
- Not in the wiki → don't write it. If you know something from experience but can't find it in the copy, leave it out or say "see the official wiki" with a link.
- Forum posts (forum.keyboardmaestro.com) only as clearly labelled user experience (「论坛上有用户分享……」/ "One user on the forum reports …") with a link, never as the source of a feature or a step. You don't need any.
- Price: only `0-what` and the FAQ may mention it, as "the official purchase page says US$36 (checked 2026-11-24)", linking `https://wiki.keyboardmaestro.com/manual/Purchase`. Never license keys, cracks, "free alternatives to buying", or download mirrors. Downloads point at `https://www.keyboardmaestro.com/` only.
- Never tell readers to weaken macOS security (turn off SIP, Gatekeeper, give permissions to unknown apps). Permissions are granted the way the official Troubleshooting / Assistance pages describe.
- The site is unofficial. Don't speak for Stairways Software.

## UI labels
- Keyboard Maestro's interface is English only. Write every action, trigger, condition, menu, button and preference name exactly as the app shows it, in bold: `**Insert Text by Pasting**`. The official wiki page title is the action's name. Menu paths use ▸: `**File ▸ New Macro**`.
- zh pages: the bold English label, then a Chinese gloss in full-width parentheses on its first use on that page: `**Insert Text by Pasting**（粘贴插入文字）`. After that, the bold English alone, or a plain Chinese word in running prose when you mean the idea, not the button.
- macOS settings: write for current macOS (System Settings): zh `**系统设置 ▸ 隐私与安全性 ▸ 辅助功能**`, en `**System Settings ▸ Privacy & Security ▸ Accessibility**`. Keyboard Maestro 11 runs on macOS 10.13 and later, so where it matters say older versions call it System Preferences.
- `npm run check` runs `scripts/check-ui-labels.mjs`, which compares bold labels against the app's own strings and the wiki's page titles (`tools/km-labels.json`). Fix any label it flags; if it flags a real label it doesn't know, say so in your report instead of editing the allowlist.
- Keys: write modifier symbols the way the app does (⌃ Control, ⌥ Option, ⇧ Shift, ⌘ Command). The first time a page uses them, name them in words once. Example hot keys should be combinations unlikely to clash with other apps, e.g. ⌃⌥⌘ plus a letter.

## Examples
- Examples fit many kinds of readers in any country: students, office workers, teachers, parents, people caring for their parents, freelancers, small shop owners, job seekers, writers. Pain first, then the fix. No country-specific things (no specific address formats, holidays, ID numbers, local apps), no brands beyond the Mac's own apps (Finder, Mail, Safari, Notes, Calendar, Preview, TextEdit, Terminal) and what the official wiki itself names.
- Typed-string examples follow the official advice in `trigger/Typed_String`: a consistent prefix and/or suffix you'd never type by accident (the wiki's own example is `=em=` rather than `em`, which would fire inside "them"). Pick one style for the whole site: `=addr=`, `=sig=`. Say why once.
- The wiki doesn't state how long the trial lasts; don't give a number.
- Text that the reader copies (a snippet body, a shell line) goes in `<Copy>` or a code block. Shell commands must be ones the official wiki shows or trivially safe ones (`date`, `pwd`); never `sudo`, never anything that deletes.
- Every example must be something the reader can actually build with the actions and triggers the wiki documents, in Keyboard Maestro 11. Don't invent options.

## Files
- Write only the files your brief lists, zh and /en/ twin together, same facts and structure. Don't edit `src/data/nav.js`, `src/data/figs.js`, or files another writer owns; list needed changes in your report (new glossary terms, a nav summary that no longer fits, a figure you want).
- The skeleton's pages contain one hidden comment (`{/* 待写：… */}` / `{/* TBD: … */}`): replace it with the page.

## Checks before you report
- `npm run build` and `npm run check` pass in your worktree.
- No bare `<`, `{`, `}` in MDX prose; one `<mark>` per page at most; `Reply` blocks titled 示意 / "Illustration".
- Commit on your branch in your worktree (`git add -A && git commit -m "<short message>"`). Don't push.
- Don't start a dev server. Don't serve anything; build and checks are enough. (If you ever start any process that listens on a port, kill it before you report and confirm with `lsof -i :<port>`.)

## Report
Files written; for each page its one core idea (zh/en); the official pages each relies on; any statement you couldn't source (and left out); forum posts you cited; requested glossary terms or nav changes; your commit hash.
