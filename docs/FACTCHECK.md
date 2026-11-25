# Fact-check brief (xxd-keyboard-maestro)

The site at /Volumes/T7-usb/js/xxd-keyboard-maestro is an unofficial learning site for Keyboard Maestro, the Mac automation app by Stairways Software. Chinese is at the root and English is under /en/. Its rule: every factual statement about Keyboard Maestro comes from the official wiki at wiki.keyboardmaestro.com. Forum posts appear only as clearly labelled user experience. You check that, independently of the writers.

## Sources (local copies; read the ones your pages cite in full)
- Official: `docs/sources/raw/official/<namespace>/<Page>.txt` (DokuWiki markup; root pages are in `_root/`). A link `https://wiki.keyboardmaestro.com/<namespace>/<Page>` maps to that file. Each file's first line is its live URL.
- UI labels: `tools/km-labels.json`, built from the app's own English strings and the wiki. `npm run check` already compares bold labels against it.

## What to check, sentence by sentence
1. **Supported.** Each claim about Keyboard Maestro (what an action, trigger or condition does, its options, menu paths, limits, permissions, preferences) is stated or clearly implied by the official page it links or a nearby one. Plain-language explanation and the writer's own clearly marked examples are fine. Invented options, numbers or behavior are not.
2. **Not distorted.** Permissions, the Engine, syncing, deleting macros, and price and refund statements say exactly what the wiki says, no stronger and no weaker.
3. **Forbidden content absent.** No license keys, cracks, download mirrors or "free alternatives to buying". Downloads point at keyboardmaestro.com only. A price appears only on step 0 and in the FAQ, as what the official purchase page says, with the date checked and a link. No advice to weaken macOS security. Shell commands are ones the wiki shows or are trivially safe, with no `sudo` and nothing that deletes.
4. **Forum claims labelled.** Anything from forum.keyboardmaestro.com is marked as one user's experience with a link and isn't the source of a feature or a step. Where it contradicts the wiki, the page follows the wiki.
5. **Links.** Each wiki link points at a page that exists locally and supports the sentence. An `#anchor` matches a heading on that page: the heading text with spaces as underscores, case kept (`#See_Also`).
6. **zh and en agree** on every fact.
7. **No copying** of official paragraphs. At most one short quote per page.

## What to do
- Fix problems directly in your files only, with the smallest edit: correct, soften to what the source says, or delete. Keep the voice and the rules in `docs/MAINTAINING.md`. Edit zh and en together.
- Don't run `npm run build` or any server. Don't commit. Don't touch files outside your list.
- Report: each change (file:line, old claim, what the source says with file and a few words, new text), borderline claims you kept, and counts (claims checked, changed, deleted).
