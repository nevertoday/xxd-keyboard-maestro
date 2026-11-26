# French (`fr`) Glossary & Style Guide

Consistent French terminology and style rules for translating this Keyboard Maestro guide. Keyboard Maestro's own interface is English-only: every menu, button, trigger, action, and preference label stays verbatim in **bold English** (with a brief French gloss in parentheses on first appearance per page).

## 1. Site terms

| English term | Chinese key | French term | Note |
| --- | --- | --- | --- |
| macro | 宏 | macro | Feminine (*une macro*, *votre première macro*). |
| macro group | 宏组 | groupe de macros | Masculine (*un groupe de macros*). Keep UI names such as **Global Macro Group** in bold English, glossed on first mention. |
| trigger | 触发器 | déclencheur | Masculine (*un déclencheur*). Use *se déclencher* / *se lancer* for "fire". Keep UI labels like **New Trigger** in English. |
| action | 动作 | action | Feminine (*une action*). Keep UI labels like **New Action** and **All Actions** in English. |
| editor | 编辑器 | éditeur | Masculine (*l’éditeur*). Refers to the Keyboard Maestro app window where you build and edit macros. |
| Engine | 引擎 | moteur | Masculine (*le moteur*), lowercase in running prose. Keep the full background app name **Keyboard Maestro Engine** verbatim in English. |
| hot key | 热键 | raccourci clavier | Masculine (*un raccourci clavier*). May be shortened to *raccourci* on repeat mentions in the same paragraph. Never use *touche chaude*. Keep **Hot Key Trigger** in English. |
| typed string trigger | 输入字符串触发器 | déclencheur par texte saisi | Masculine (*un déclencheur par texte saisi*). Avoid programmer jargon like *chaîne de caractères* in beginner prose. Keep **Typed String Trigger** in English. |
| palette | 面板 | palette | Feminine (*une palette*). Standard French term for a floating panel of buttons. |
| status menu | 状态菜单 | menu d’état | Masculine (*le menu d’état*). Keyboard Maestro's icon in *la barre des menus*. Keep **Status Menu** in English when citing the UI label. |
| variable | 变量 | variable | Feminine (*une variable*). |
| token | 令牌 | jeton | Masculine (*un jeton*). Standard French for *token*; keep actual token syntax such as `%LongDate%` untouched in inline code. |
| calculation | 计算 | calcul | Masculine (*un calcul*). Refers to a formula or expression entered in a numeric field. |
| condition | 条件 | condition | Feminine (*une condition*). |
| clipboard history | 剪贴板历史 | historique du presse-papiers | Masculine (*l’historique du presse-papiers*). Always hyphenated with a final *-s* (*presse-papiers*, invariable). |
| named clipboard | 命名剪贴板 | presse-papiers nommé | Masculine (*un presse-papiers nommé*). Distinguish from the system clipboard (*le presse-papiers du système*). |
| found image | 找图 | recherche d’image | Feminine (*la recherche d’image*) for the feature/method; use *l’image trouvée* when referring to the matched spot on screen. Keep **Found Image** in English in UI labels. |
| Accessibility permission | 辅助功能权限 | autorisation d’accessibilité | Feminine (*l’autorisation d’accessibilité*). Capitalize **Accessibilité** when naming the macOS setting itself. |
| smart group | 智能组 | groupe intelligent | Masculine (*un groupe intelligent*). Matches Apple's French naming convention (*dossier intelligent*). Keep **Smart Group** in English for the UI label. |
| subroutine | 子程序 | sous-programme | Masculine (*un sous-programme*). Prefer over the anglicism *subroutine*. |
| Macro Library | 宏库 | bibliothèque de macros | Feminine (*la bibliothèque de macros*). Keep **Macro Library** in bold English when referring to the Keyboard Maestro menu or window. |
| plug-in action | 插件动作 | action plug-in | Feminine (*une action plug-in*, pl. *des actions plug-in*). Clarify on first mention if needed as an action installed via a third-party *module* (*plug-in*). |
| debugger | 调试器 | débogueur | Masculine (*le débogueur*). Keep **Macro Debugger** in bold English when citing the Keyboard Maestro window. |
| Engine log | 引擎日志 | journal du moteur | Masculine (*le journal du moteur*). Keep the filename `Engine.log` unchanged in inline code. |

## 2. macOS names in French

Apple's official French (`fr`) macOS localizations:

| English macOS name | French macOS name | Note |
| --- | --- | --- |
| System Settings | Réglages Système | Replaces *Préférences Système* since macOS Ventura. |
| Privacy & Security | Confidentialité et sécurité | Exact label in **Réglages Système**. |
| Accessibility | Accessibilité | Under **Confidentialité et sécurité**. |
| Input Monitoring | Surveillance de l’entrée | Under **Confidentialité et sécurité**. |
| Screen & System Audio Recording | Enregistrement de l’écran et des sons du système | Under **Confidentialité et sécurité** (older macOS versions show *Enregistrement de l’écran*). |
| Automation | Automatisation | Under **Confidentialité et sécurité**. |
| Login Items | Ouverture | Under **Général ▸ Ouverture** (labelled **Ouverture et extensions** on macOS Sequoia). |
| the menu bar | la barre des menus | Lowercase in running prose. |
| the Dock | le Dock | Masculine, capitalized *Dock*. |
| Finder | Finder | Masculine (*le Finder*). |
| Notes | Notes | Same name in French macOS. |
| Calendar | Calendrier | Localized Apple app name. |
| Safari | Safari | Same name in French macOS. |
| TextEdit | TextEdit | Same name in French macOS. |
| Downloads folder | dossier Téléchargements | Folder name shown in Finder is **Téléchargements**. |
| Applications folder | dossier Applications | Folder name shown in Finder is **Applications**. |

## 3. Frequent site words and phrases

| English | French | Note |
| --- | --- | --- |
| hot key | raccourci clavier | Consistent with section 1; *raccourci* is fine on repeat mentions in the same paragraph. |
| shortcut | raccourci | Use for a built-in app/menu shortcut (e.g. *une commande de menu sans raccourci*). |
| typed string | texte saisi | Matches *déclencheur par texte saisi*; *séquence tapée* or *quelques lettres* also works naturally in casual prose. |
| abbreviation / snippet | abréviation / extrait de texte | *abréviation* (f.) for the short code you type (`=addr=`); *extrait de texte* (m.) or *texte tout prêt* for the expanded block. Avoid *snippet*. |
| paste | coller | Noun: *collage* (m.). Gloss **Insert Text by Pasting** on first use as *(insérer du texte en le collant)*. |
| illustration | Illustration | Title of `<Reply>` preview boxes (e.g. *Illustration : à peu près ce qu’affiche Keyboard Maestro*). |
| lesson | leçon | Feminine (*leçon 1*, *trois leçons*). |
| step | étape | Feminine (*8 étapes*, *Étape 1 : …*, and individual steps within a lesson). |
| full guide | guide complet | Masculine (*le guide complet*). |
| how-to | fiche pratique (pl. fiches pratiques) | Feminine. Contrasts cleanly with *guide complet* in navigation (*Fiches pratiques : comment faire*). |
| wiki | Wiki | Masculine (*le Wiki* for the site section; lowercase *le wiki officiel* in running prose). |
| FAQ | FAQ | Feminine (*la FAQ*). Universally understood in French. |
| If something's off | Si quelque chose cloche | Friendly, non-alarmist troubleshooting heading matching the casual English tone. |
| look it up when you need it | consulter au besoin | Adapt naturally to sentence flow (e.g. *à consulter au besoin* or *vous pourrez le consulter quand vous en aurez besoin*). |

## 4. Register, tone, and formatting rules

1. **Polite, friendly *vous***: Always address the reader with *vous* (never *tu*), in the warm voice of a friend explaining Mac basics — no stiff officialese, no marketing hype. Mix short and medium sentences with natural connectors (*parce que*, *donc*, *mais*, *par exemple*) and everyday verbs (*taper*, *ouvrir*, *lancer*, *glisser*).
2. **Direct, active instructions**: Use the *vous* imperative for action steps (*Cliquez sur **New Trigger**, choisissez **Hot Key Trigger**, puis appuyez sur ⌃⌥⌘N*) and reserve infinitives for short checklist items, UI buttons, or compact headings (*Copier ce texte*, *Ouvrir le menu*).
3. **French punctuation and quotes**: Put a space before double punctuation marks (`:`, `;`, `?`, `!`, e.g. `Leçon 1 : …`, `Déjà utilisateur ?`) and use French guillemets with inner spaces (`« … »`) for quoted text. Inside MDX/JSX double-quoted attributes (`title="…"`, `q="…"`), use `« … »` so attribute quotes never break, and use the French typographic apostrophe (`’`) consistently in prose.
4. **English UI labels and first-mention glosses**: Keep every Keyboard Maestro UI label verbatim in bold English (`**Launch Engine at Login**`, `**File ▸ New Macro**`). Add a short French gloss in parentheses on its first occurrence per page — regular space before `(`, none inside, e.g. `**Insert Text by Pasting** (insérer du texte en le collant)` — then use the bold English label alone afterward. Keep trailing punctuation outside `**…**`.
5. **Shortcuts, code, and sentence case**: Keep modifier symbols together without spaces (`⌃⌥⌘N`), separated by a normal space from French prose (`appuyez sur ⌃⌥⌘N pour…`). Never add French plural `-s` to inline code, tokens (`%LongDate%`), or untranslated English labels, and write all French headings in sentence case (`## Si quelque chose cloche`, not Title Case).

## Enabled vs active (two different words, everywhere)
| English | Use | Meaning |
|---|---|---|
| enabled (macro or group) | activé (case cochée) | its tick is on |
| active (macro or group) | actif | it can fire right now: the group's availability conditions are met |

Never write the *enabled* word for *active / activated*. Guide step 1 builds its trap on this difference.
