# German (de) glossary

Follow these terms and conventions across every German page (`src/l10n/de/*.json`, lessons, guide and how-to pages, and `README.de.md`). Keep all Keyboard Maestro interface labels (actions, triggers, menus, buttons, preferences) verbatim in bold English; add a brief German gloss in parentheses on first appearance per page, then use the bold English label alone.

## 1. Site terms

| English term | Chinese key | German term | Note |
| --- | --- | --- | --- |
| macro | 宏 | das Makro (Pl. die Makros) | Standard German term. Keep KM UI labels such as **New Macro** in bold English. |
| macro group | 宏组 | die Makrogruppe (Pl. die Makrogruppen) | Closed compound. Keep **Macro Group** in bold English when naming the UI element. |
| trigger | 触发器 | der Auslöser (Pl. die Auslöser) | Plain German for beginners; prefer over *Trigger* in prose. Keep KM UI labels like **Hot Key Trigger** in bold English. |
| action | 动作 | die Aktion (Pl. die Aktionen) | Matches Apple's German automation wording. Keep specific KM action names like **Insert Text by Pasting** in bold English. |
| editor | 编辑器 | der Editor (Pl. die Editoren) | The Keyboard Maestro window where you build and edit macros, contrasted with *die Engine*. |
| Engine | 引擎 | die Engine | Always feminine (*die Engine*); never translate as *Motor*. Keep the product name **Keyboard Maestro Engine** unchanged. |
| hot key | 热键 | das Tastenkürzel (Pl. die Tastenkürzel) | Friendly everyday term for beginners (avoid gamer-sounding *Hotkey* in prose). Use *die Tastenkombination* when stressing the physical keys pressed (e.g., `⌃⌥⌘T`). Keep **Hot Key Trigger** in bold English. |
| typed string trigger | 输入字符串触发器 | der Texteingabe-Auslöser (Pl. die Texteingabe-Auslöser) | Plain alternative to literal *Zeichenketten-Trigger*. Keep KM's **Typed String Trigger** in bold English (first gloss: `(Texteingabe-Auslöser)`). |
| palette | 面板 | die Palette (Pl. die Paletten) | Explain on first mention as a floating bar/box of macro buttons (*schwebende Palette*). Keep KM labels like **Conflict Palette** in bold English. |
| status menu | 状态菜单 | das Statusmenü (Pl. die Statusmenüs) | Closed compound, neuter. Refers to KM's icon in *die Menüleiste*. Keep **Status Menu Trigger** in bold English. |
| variable | 变量 | die Variable (Pl. die Variablen) | Standard German term. Keep KM labels such as **Set Variable to Text** in bold English. |
| token | 令牌 | das Token (Pl. die Tokens) | Neuter in computing per Duden; never *Marke* or *Münze*. Explain on first mention as *Platzhalter*. Keep token syntax like `%LongDate%` unchanged in inline code. |
| calculation | 计算 | die Berechnung (Pl. die Berechnungen) | Refers to numeric formulas/functions in KM number fields. Keep UI labels like **Set Variable to Calculation** in bold English. |
| condition | 条件 | die Bedingung (Pl. die Bedingungen) | Standard German term. Keep KM control labels like **If Then Else** in bold English. |
| clipboard history | 剪贴板历史 | der Zwischenablage-Verlauf | Clear everyday compound. Keep KM's **Clipboard History Switcher** in bold English. |
| named clipboard | 命名剪贴板 | die benannte Zwischenablage (Pl. die benannten Zwischenablagen) | Standard phrasing. Keep KM's **Named Clipboard** / **Named Clipboard Switcher** in bold English. |
| found image | 找图 | die Bildsuche / das gefundene Bild | Use *die Bildsuche* for the feature and *das gefundene Bild* for the matched spot on screen. Avoid *Bilderkennung* (implies AI). Keep KM's **Found Image** in bold English. |
| Accessibility permission | 辅助功能权限 | die Berechtigung für Bedienungshilfen (auch: die Bedienungshilfen-Berechtigung) | Matches Apple's German macOS setting **Bedienungshilfen**. Prefer *die Berechtigung für Bedienungshilfen* in running sentences. |
| smart group | 智能组 | die intelligente Gruppe (Pl. die intelligenten Gruppen) | Matches Apple's macOS convention (*Intelligenter Ordner*). Keep KM's **Smart Group** in bold English. |
| subroutine | 子程序 | das Unterprogramm (Pl. die Unterprogramme) | Much clearer for non-programmers than *Subroutine*. Keep KM's **Subroutine** / **Execute a Subroutine** in bold English. |
| Macro Library | 宏库 | die Makro-Bibliothek | Hyphenated for quick scanning. Keep KM's menu/window name **Macro Library** in bold English. |
| plug-in action | 插件动作 | die Plug-in-Aktion (Pl. die Plug-in-Aktionen) | Duden spelling (*Plug-in*). Keep KM UI labels in bold English. |
| debugger | 调试器 | der Debugger (Pl. die Debugger) | Standard German computing term; clarify on first mention as *Schritt-für-Schritt-Fehlersuche*. Keep KM's **Macro Debugger** in bold English. |
| Engine log | 引擎日志 | das Engine-Protokoll | Friendlier to beginners than *Engine-Log* and aligns with macOS *Protokoll*. Keep the filename `Engine.log` unchanged in inline code. |

## 2. macOS names (Apple German localization)

| English macOS name | German macOS name | Note |
| --- | --- | --- |
| System Settings | Systemeinstellungen | Always plural (*die Systemeinstellungen*, *in den Systemeinstellungen*). |
| Privacy & Security | Datenschutz & Sicherheit | Path: `Systemeinstellungen ▸ Datenschutz & Sicherheit`. |
| Accessibility | Bedienungshilfen | Path: `Systemeinstellungen ▸ Datenschutz & Sicherheit ▸ Bedienungshilfen`. |
| Input Monitoring | Eingabeüberwachung | Path: `Systemeinstellungen ▸ Datenschutz & Sicherheit ▸ Eingabeüberwachung`. |
| Screen & System Audio Recording | Bildschirm- & Systemaudioaufnahme | Keep Apple's exact suspended hyphen (`Bildschirm- & Systemaudioaufnahme`). |
| Automation | Automation | Path: `Systemeinstellungen ▸ Datenschutz & Sicherheit ▸ Automation`. |
| Login Items | Anmeldeobjekte | Under `Systemeinstellungen ▸ Allgemein`; on macOS 15 (Sequoia) and later labeled **Anmeldeobjekte & Erweiterungen**. |
| the menu bar | die Menüleiste | Top bar on the Mac screen (*oben in der Menüleiste*). |
| the Dock | das Dock | Neuter (*im Dock*, *aus dem Dock*). |
| Finder | Finder | Masculine (*der Finder*, *im Finder*). |
| Notes | Notizen | Apple's German app name. |
| Calendar | Kalender | Apple's German app name. |
| Safari | Safari | Unchanged. |
| TextEdit | TextEdit | Unchanged. |
| Downloads folder | Ordner „Downloads“ | Also *Downloads-Ordner*; displayed as **Downloads** in Finder. |
| Applications folder | Ordner „Programme“ | Also *Programme-Ordner*; displayed as **Programme** in Finder (disk path remains `/Applications`). |

## 3. Frequent site words and phrases

| English | German | Note |
| --- | --- | --- |
| hot key | das Tastenkürzel | Matches Section 1; use *die Tastenkombination* when referring to the key combination itself. |
| shortcut | das Tastenkürzel | Everyday term for app/macOS shortcuts. Use *der Kurzbefehl* or *das App-Tastenkürzel* only when contrasting it with a macro hot key in the same sentence (and avoid confusion with Apple's *Kurzbefehle* app). |
| typed string | die getippte Zeichenfolge / das Textkürzel | Use *das Textkürzel* for short triggers like `=addr=`; *die getippte Zeichenfolge* when explaining how the trigger works. |
| abbreviation/snippet | das Kürzel / der Textbaustein | *Kürzel* = short code you type; *Textbaustein* = reusable text block that gets inserted. |
| paste | einfügen | Natural everyday verb (*Text einfügen*). Use Apple's menu wording *Einsetzen* only when quoting the macOS **Bearbeiten** menu. |
| illustration (box title) | die Beispielansicht | Do **not** translate literally as *Illustration* (means a drawing in German). Full `comp.reply` line: *Beispielansicht: So ungefähr zeigt es Keyboard Maestro an*. |
| lesson | die Lektion (Pl. die Lektionen) | Used for the three beginner lessons (*Lektion 1*, *Lektion 2*, *Lektion 3*). |
| step | der Schritt (Pl. die Schritte) | Used both for instructions in a lesson and for the 8 chapters of the full guide (*Schritt 1*, *Schritt 2*…). |
| full guide | die ausführliche Anleitung | Warm and consistent across navigation (*Ausführliche Anleitung: 8 Schritte*), hints, and prose; avoid stiff *Leitfaden*. |
| how-to | das How-to (Pl. die How-tos) | Duden spelling; matches the English section it links to (*How-to: Wie geht das genau?*). Clarify as *Praxis-Anleitung* in prose if helpful. |
| wiki | das Wiki | Neuter (*im offiziellen Wiki*). Keep **Keyboard Maestro Wiki** as a proper noun. |
| FAQ | die FAQ | Plural in German (*in den FAQ*, no plural `-s`). Keep **FAQ** in nav and links so it matches the English destination. |
| If something's off | Wenn etwas nicht klappt | Reassuring, everyday troubleshooting heading. Avoid bureaucratic *Fehlerbehebung* or *Problembehandlung*. |
| look it up when you need it | nachschlagen, wenn du es brauchst | Natural conversational phrasing (short form: *bei Bedarf nachschlagen*). |

## 4. Register, tone, and formatting rules

1. **Address form (*du*, lowercase)**: Always address the reader with informal *du* (*du, dir, dich, dein*), written lowercase in running text per standard German orthography. Never slip into formal *Sie* or impersonal manualese (*es empfiehlt sich*, *man wähle*).
2. **Friendly, direct instructions**: Write steps in crisp, everyday imperatives or present-tense *du* sentences (*Klicke auf **+***, *Öffne die Systemeinstellungen*, *Jetzt tippst du `=addr=` ein*). Mix short and longer sentences linked with natural connectors (*weil, deshalb, aber, zum Beispiel*), and avoid stiff verbs like *betätigen* or *navigieren zu*.
3. **English UI labels and German grammar**: Leave every Keyboard Maestro interface label verbatim in bold English, adding a concise German gloss in parentheses the first time it appears on a page (e.g., `**Insert Text by Pasting** (Text durch Einfügen)`). Hyphenate German compounds containing English terms (*Engine-Protokoll*, *Plug-in-Aktion*), keep articles consistent (*die Engine*, *das Makro*, *das Token*), and never let punctuation inside a bold span touch following text (`**…klickst**. Danach`, not `**…klickst.**Danach`).
4. **German punctuation and menu paths**: Use German typographic quotes (`„…“`, nested `‚…‘`) in prose and inside JSX attributes whenever quotes are needed. Use spaced en-dashes (` – `) for asides instead of unspaced em-dashes (`—`), and keep the `▸` path separator with a space on each side (`Systemeinstellungen ▸ Datenschutz & Sicherheit ▸ Bedienungshilfen`, `**File ▸ New Macro**`).
5. **Spacing with `⌘` symbols and inline code**: Keep modifier combinations tight with no internal spaces (`⌃⌥⌘N`, `⌘C`, `⌘V`), adding spaces only when listing individual keys (`⌃ ⌥ ⇧ ⌘`) as in the English source. Always put normal spaces around key chords, inline code (`` `=addr=` ``, `` `%LongDate%` ``), and bold English labels, and never attach German inflectional endings directly to code or UI labels (write *das Token `%LongDate%`*, *drücke `⌃⌥⌘N`*).

## Enabled vs active (two different words, everywhere)
| English | Use | Meaning |
|---|---|---|
| enabled (macro or group) | aktiviert (Häkchen gesetzt) | its tick is on |
| active (macro or group) | aktiv | it can fire right now: the group's availability conditions are met |

Never write the *enabled* word for *active / activated*. Guide step 1 builds its trap on this difference.
