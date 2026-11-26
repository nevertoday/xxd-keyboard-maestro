# Spanish (es) Glossary

Standard Spanish (`es`) terminology and style guide for the Keyboard Maestro beginner site. Keyboard Maestro's own interface labels (menus, actions, triggers, buttons, and preferences) always stay in exact **bold English**—they are not translated here, though the terms below are used in running prose and in first-mention parenthetical glosses.

## 1. Site terms

| English term | Chinese key | Spanish term | Note |
| :--- | :--- | :--- | :--- |
| macro | 宏 | macro | Feminine (*la macro*, *una macro*, *las macros*, per RAE for *macroinstrucción*). Keep feminine consistently. |
| macro group | 宏组 | grupo de macros | Masculine (*el grupo de macros*). Keep KM UI names like **Global Macro Group** in bold English. |
| trigger | 触发器 | activador | Masculine (*el activador*). Pairs naturally with *activar* / *activarse*. Avoid bureaucratic *desencadenador*. |
| action | 动作 | acción | Feminine (*la acción*, *las acciones*). Matches Apple's Shortcuts terminology. Keep KM UI action names in bold English. |
| editor | 编辑器 | editor | Masculine (*el editor*, lowercase in prose; *el editor de Keyboard Maestro* when contrasting with the Engine). |
| Engine | 引擎 | Engine | Masculine (*el Engine*). Never translate `Keyboard Maestro Engine`; use `el Engine` as the short form so it matches the macOS process name, glossing briefly on first mention as *el motor en segundo plano* if helpful. |
| hot key | 热键 | atajo de teclado | Masculine (*el atajo de teclado*; short form *atajo*). Use *combinación de teclas* when emphasizing the keys pressed or contrasting with a macOS/app shortcut in the same sentence. Never translate literally as *tecla caliente*. |
| typed string trigger | 输入字符串触发器 | activador por texto escrito | Plain, non-programmer phrasing. Use as the first-mention gloss for **Typed String Trigger**. |
| palette | 面板 | paleta | Feminine (*la paleta*; *paleta flotante* on first mention if helpful). Matches Apple Spanish UI terminology. |
| status menu | 状态菜单 | menú de estado | Masculine (*el menú de estado*). Refers to Keyboard Maestro's icon in the menu bar. |
| variable | 变量 | variable | Feminine (*la variable*, *las variables*). |
| token | 令牌 | token | Masculine (*el token*, plural *los tokens*, roman without accent). Aligns with KM's **Insert Token** menu; explain in prose as *un marcador que se sustituye al ejecutar la macro*. |
| calculation | 计算 | cálculo | Masculine (*el cálculo*, *los cálculos*). |
| condition | 条件 | condición | Feminine (*la condición*, *las condiciones*). Pairs naturally with *cumplirse* (*si se cumple la condición*). |
| clipboard history | 剪贴板历史 | historial del portapapeles | Masculine (*el historial del portapapeles*). *Portapapeles* is always masculine singular. |
| named clipboard | 命名剪贴板 | portapapeles con nombre | Masculine (*un portapapeles con nombre*). Avoid clunky *portapapeles nombrado*. |
| found image | 找图 | búsqueda de imagen | Feminine (*la búsqueda de imagen*) for the feature/technique in prose; use *imagen encontrada* when referring to the matched result itself or glossing KM's **Found Image** label. |
| Accessibility permission | 辅助功能权限 | permiso de Accesibilidad | Masculine (*el permiso de Accesibilidad*). Capitalize *Accesibilidad* to match the macOS setting name. |
| smart group | 智能组 | grupo inteligente | Masculine (*el grupo inteligente*). Matches Apple's Spanish convention (*carpeta inteligente*, *álbum inteligente*). |
| subroutine | 子程序 | subrutina | Feminine (*la subrutina*). |
| Macro Library | 宏库 | biblioteca de macros | Feminine (*la biblioteca de macros*). Never use the false friend *librería*. Keep **Macro Library** in bold English when naming the KM menu/window, glossed on first mention as *(biblioteca de macros)*. |
| plug-in action | 插件动作 | acción de plugin | Feminine (*una acción de plugin*; *el plugin* / *los plugins*, no hyphen). Familiar to everyday Mac users and clearly distinct from macOS extensions. |
| debugger | 调试器 | depurador | Masculine (*el depurador*). Keep **Macro Debugger** in bold English when naming KM's tool. |
| Engine log | 引擎日志 | registro del Engine | Masculine (*el registro del Engine*). Avoid raw *log* in prose; keep the file name `` `Engine.log` `` in inline code as is. |

## 2. macOS interface names

Use Apple's official Spanish (`es`) macOS labels consistently. Where Apple's Latin American localization (`es-419`) uses a different label, it is noted for reference so translators stay aware without mixing standards across pages. Use `▸` with spaces on both sides in menu paths (e.g. `Ajustes del Sistema ▸ Privacidad y seguridad ▸ Accesibilidad`).

| English | Spanish (macOS) | Note |
| :--- | :--- | :--- |
| System Settings | Ajustes del Sistema | Apple `es` primary label. (`es-419` shows *Configuración del Sistema*.) |
| Privacy & Security | Privacidad y seguridad | Lowercase *seguridad*. Identical across all Spanish locales. |
| Accessibility | Accesibilidad | Identical across all Spanish locales. |
| Input Monitoring | Monitorización de entrada | Apple `es` primary label. (`es-419` shows *Monitoreo de entrada*.) |
| Screen & System Audio Recording | Grabación de pantalla y del audio del sistema | Apple `es` primary label. (`es-419` shows *Grabación de audio del sistema y pantalla*.) |
| Automation | Automatización | Identical across all Spanish locales. |
| Login Items | Ítems de inicio | Apple `es` primary label (*Ítems de inicio y extensiones* on macOS Sequoia; `es-419` shows *Elementos de inicio* / *Elementos de inicio y extensiones*). |
| the menu bar | la barra de menús | Plural *menús* with accent. |
| the Dock | el Dock | Masculine, capitalized *Dock*. |
| Finder | Finder | Keep in English; use *el Finder* or bare *Finder* as natural in the sentence. |
| Notes | Notas | Apple's localized app name in Spanish. |
| Calendar | Calendario | Apple's localized app name in Spanish. |
| Safari | Safari | Unchanged. |
| TextEdit | TextEdit | Unchanged. |
| Downloads folder | la carpeta Descargas | Folder name: `Descargas`. |
| Applications folder | la carpeta Aplicaciones | Folder name: `Aplicaciones`. |

## 3. Frequent words and headings

| English | Spanish | Note |
| :--- | :--- | :--- |
| hot key | atajo de teclado | Short form *atajo*; use *combinación de teclas* when emphasizing the keys or contrasting with an app/macOS shortcut in the same sentence. |
| shortcut | atajo / atajo de teclado | Qualify as *atajo de macOS*, *atajo del sistema*, or *atajo de la app* when distinguishing from a macro's hot key. Avoid clunky *función rápida de teclado*. |
| typed string | texto escrito | Use *secuencia de texto* (or *la secuencia `=addr=`*) when referring to the exact characters typed. |
| abbreviation/snippet | abreviatura / fragmento de texto | Use *abreviatura* for the short trigger code (`=addr=`) and *fragmento de texto* (or *plantilla corta*) for the expanded text; avoid raw English *snippet*. |
| paste | pegar | Verb *pegar*; noun *pegado* when needed (*insertar pegando*, *pegar texto*). |
| illustration (the title of illustrative boxes) | Ejemplo | In Spanish, *ilustración* means a drawing or picture; always title illustrative and Reply boxes `Ejemplo`. |
| lesson | lección | Feminine (*la lección*; *Lección 1* in headings). |
| step | paso | Masculine (*el paso*; *Paso 1* in headings, *paso a paso* in prose). |
| full guide | guía completa | Sentence-case *Guía completa* in headings/navigation. Links to `/en/…`. |
| how-to | guía práctica / guías prácticas | Use plural *Guías prácticas* for the section/navigation label and *una guía práctica* in prose. Links to `/en/…`. |
| wiki | wiki | Feminine (*la wiki*); capitalize *Wiki* in navigation/headings. Links to `/en/…`. |
| FAQ | preguntas frecuentes | Prefer *Preguntas frecuentes* over *FAQ* in headings, navigation, and prose for beginner friendliness. Links to `/en/…`. |
| troubleshooting heading "If something's off" | Si algo no va bien | Warm, reassuring, and low-stress. Avoid stiff manual headings like *Solución de problemas*. |
| "look it up when you need it" | consúltalo cuando lo necesites | Adjust pronoun gender/number to match the referent (*consúltala* for *la guía*, *consúltalos* for plural topics). |

## 4. Register and tone

1. **Address the reader as `tú` in neutral pan-Hispanic Spanish.** Always use informal singular `tú` (*abre*, *elige*, *tu Mac*)—never *usted*, *vos*, or *vosotros*. Avoid regionalisms so the site feels natural across Spain and Latin America: write *tu Mac* (neither *ordenador* nor *computadora*), *archivo* (not *fichero*), *haz clic* (not *pincha*), and stick consistently to *pulsa* for pressing keys rather than mixing *pulsa*, *presiona*, and *oprime*.
2. **Phrase instructions like a friendly peer, not a manual.** Use direct `tú` imperatives for actionable steps (*Abre*, *Haz clic en*, *Arrastra*, *Pulsa*) and connect ideas smoothly with everyday Spanish linkers (*porque*, *así que*, *pero*, *por ejemplo*). Mix short and medium sentences and avoid stiff officialese (*proceda a*, *a continuación deberá*, *seleccione la opción deseada*).
3. **Keep Keyboard Maestro UI labels in bold English with clean Spanish glosses.** Copy every Keyboard Maestro menu, trigger, action, button, and preference verbatim in bold (`**Insert Text by Pasting**`, `**Launch Engine at Login**`). On its first occurrence on a page, add a short lowercase Spanish gloss in standard ASCII parentheses preceded by a normal space—e.g. `**Insert Text by Pasting** (insertar texto pegando)`—never full-width CJK parentheses `（）`. After that first gloss, use the bold English label alone.
4. **Follow Spanish punctuation and clean spacing with English words and `⌘` symbols.** Always use opening `¿` and `¡`, sentence-case headings (capitalize only the first word and proper nouns), and Spanish angular quotes `«…»` for quoted words or inside MDX/JSX double-quoted attributes (`title="…"`, `q="…"`). Leave normal single spaces around English labels, inline code, and key shortcuts (`pulsa ⌃⌥⌘N para…`), keep modifier chords tight with no internal spaces (`⌃⌥⌘N`, not `⌃ ⌥ ⌘ N`), put spaces around `▸` in menu paths (`**File ▸ New Macro**`), and never close a bold span with punctuation directly followed by text (`**…cuando termines**. Así`, not `**…cuando termines.**Así`).
5. **Keep grammar natural with English terms and localize example macro content.** Pair untranslated product and UI names smoothly with consistent Spanish articles and gender (*la macro*, *el Engine*, *el Dock*, *el Finder*, *en Keyboard Maestro*). Translate any text the reader copies into their own macro (such as sample replies or expanded text snippets) into natural everyday Spanish a native speaker would actually send, while leaving typed strings (`=reply=`, `=addr=`) and tokens (`%LongDate%`) completely untouched.

## Enabled vs active (two different words, everywhere)
| English | Use | Meaning |
|---|---|---|
| enabled (macro or group) | habilitado | its tick is on |
| active (macro or group) | activo | it can fire right now: the group's availability conditions are met |

Never write the *enabled* word for *active / activated*. Guide step 1 builds its trap on this difference.
