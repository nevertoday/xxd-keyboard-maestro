# Brazilian Portuguese (pt) glossary

Companion term list for translating this site into **Brazilian Portuguese (`pt-BR`)**. Keep all Keyboard Maestro interface labels (menus, buttons, triggers, actions, preference names) in **bold English** exactly as shown in the app — they are never translated, only glossed in parentheses on first mention per page.

## 1. Site terms

| English term | Chinese key | Brazilian Portuguese | Note |
| --- | --- | --- | --- |
| macro | 宏 | macro | Feminine (*a macro*, *uma macro*, *as macros*). Never translate. |
| macro group | 宏组 | grupo de macros | Masculine (*um grupo de macros*). Keep UI labels like **Macro Groups** in English. |
| trigger | 触发器 | gatilho | Masculine (*um gatilho*, *os gatilhos*). Plain everyday word; avoid *disparador* or leaving *trigger* untranslated in prose. Keep UI labels like **New Trigger** in English. |
| action | 动作 | ação | Feminine (*uma ação*, *as ações*). Keep UI labels like **New Action** in English. |
| editor | 编辑器 | editor | Masculine (*o editor*, *o editor do Keyboard Maestro*). The main window where you create and edit macros, distinct from the background Engine. |
| Engine | 引擎 | Engine | Masculine (*o Engine*). Keep capitalized in English to match **Keyboard Maestro Engine** and menu items like **Launch Engine at Login**; never translate as *motor*. On first mention, briefly clarify it as the part that runs in the background (*a parte que roda em segundo plano*). |
| hot key | 热键 | tecla de atalho | Feminine (*uma tecla de atalho*). Specific to the key combination that fires a macro (e.g., `⌃⌥⌘T`). Keep **Hot Key Trigger** in English, glossed on first mention as *(gatilho de tecla de atalho)*. |
| typed string trigger | 输入字符串触发器 | gatilho de texto digitado | Masculine (*um gatilho de texto digitado*). Beginner-friendly wording; avoid *string*. Keep **Typed String Trigger** in English, glossed on first mention as *(gatilho de texto digitado)*. |
| palette | 面板 | paleta | Feminine (*uma paleta*, *a paleta*). On first mention, explain as a floating panel of buttons (*um painel flutuante de botões*). |
| status menu | 状态菜单 | menu de status | Masculine (*o menu de status*). Keyboard Maestro's icon in the macOS menu bar (*barra de menus*). Use *status*, not *estado*. |
| variable | 变量 | variável | Feminine (*uma variável*, *as variáveis*). |
| token | 令牌 | token | Masculine (*um token*, *os tokens*). Keep in English to match `%LongDate%` and **Insert Token**; on first mention, explain as a dynamic placeholder (*marcador dinâmico que é substituído na hora*). |
| calculation | 计算 | cálculo | Masculine (*um cálculo*, *os cálculos*). Plain word for numeric formulas/expressions in number fields. |
| condition | 条件 | condição | Feminine (*uma condição*, *as condições*). |
| clipboard history | 剪贴板历史 | histórico da área de transferência | Masculine (*o histórico da área de transferência*). Matches Apple's `pt-BR` term for clipboard (*área de transferência*). Keep **Clipboard History Switcher** in English. |
| named clipboard | 命名剪贴板 | área de transferência nomeada | Feminine (*uma área de transferência nomeada*, plural *áreas de transferência nomeadas*). Keep **Named Clipboard** in English. |
| found image | 找图 | imagem encontrada | Feminine (*imagem encontrada*). In casual prose describing the technique, *busca por imagem* or *encontrar uma imagem na tela* is also natural. Keep UI labels like **Click at Found Image** in English. |
| Accessibility permission | 辅助功能权限 | permissão de Acessibilidade | Feminine (*a permissão de Acessibilidade*). Capitalize *Acessibilidade* to match the macOS setting. |
| smart group | 智能组 | grupo inteligente | Masculine (*um grupo inteligente*, *grupos inteligentes*). Mirrors Apple's `pt-BR` convention (*Pasta Inteligente*). Keep **Smart Group** in English. |
| subroutine | 子程序 | sub-rotina | Feminine (*uma sub-rotina*, *sub-rotinas*). Always hyphenated per the Brazilian orthographic rules. |
| Macro Library | 宏库 | Biblioteca de Macros | Feminine (*a Biblioteca de Macros*). Capitalized when referring to the built-in collection; keep the menu/window path **Window ▸ Macro Library** in English. |
| plug-in action | 插件动作 | ação de plug-in | Feminine (*uma ação de plug-in*, plural *ações de plug-in*). Use hyphenated *plug-in* per Apple `pt-BR` convention. |
| debugger | 调试器 | depurador | Masculine (*o depurador*). Keep **Macro Debugger** in English, glossed on first mention as *(depurador de macros)*. |
| Engine log | 引擎日志 | log do Engine | Masculine (*o log do Engine*). Consistent with `Engine` and the file `Engine.log`; for beginners, clarify *log* on first mention as *registro de atividade* if context doesn't already explain it. |

## 2. macOS names (Apple Brazilian Portuguese)

Always use Apple's official Brazilian Portuguese (`pt-BR`) names below — never European Portuguese (`pt-PT`) equivalents like *Definições*, *ecrã*, *Aplicações*, or *Descargas*.

| English macOS name | Brazilian Portuguese (`pt-BR`) | Note |
| --- | --- | --- |
| System Settings | Ajustes do Sistema | Apple `pt-BR` on macOS 13 Ventura+; never *Definições do Sistema* (`pt-PT`). (On macOS 12 and earlier it was *Preferências do Sistema*.) |
| Privacy & Security | Privacidade e Segurança | Keep Title Case as shown in macOS `pt-BR`. |
| Accessibility | Acessibilidade | Full path: **Ajustes do Sistema ▸ Privacidade e Segurança ▸ Acessibilidade**. |
| Input Monitoring | Monitoração de Entrada | Official Apple `pt-BR` spelling is *Monitoração* (not *Monitoramento* or `pt-PT` *Monitorização*). |
| Screen & System Audio Recording | Gravação do Áudio do Sistema e da Tela | Official Apple `pt-BR` on macOS 14 Sonoma+ (note the reversed order vs. English). On macOS 13 and earlier it was *Gravação de Tela*. |
| Automation | Automação | Never `pt-PT` *Automatização*. |
| Login Items | Itens de Início | Apple `pt-BR` on macOS 13–14; on macOS 15 Sequoia the sidebar item is **Itens de Início de Sessão e Extensões** (mention if helpful). |
| the menu bar | a barra de menus | Lowercase in running prose, matching Apple's `pt-BR` Mac User Guide. |
| the Dock | o Dock | Keep capitalized; masculine (*no Dock*, *o Dock*). |
| Finder | Finder | Unchanged; masculine (*o Finder*, *no Finder*). |
| Notes | Notas | Localized app name in `pt-BR` (*o app Notas* / *Notas*). |
| Calendar | Calendário | Localized app name in `pt-BR` (*o Calendário*). |
| Safari | Safari | Unchanged; masculine (*o Safari*). |
| TextEdit | Editor de Texto | Localized app name in `pt-BR` (*o Editor de Texto*); do not leave as *TextEdit*. |
| Downloads folder | pasta Downloads | Apple `pt-BR` keeps `Downloads` in English; never `pt-PT` *Descargas*. |
| Applications folder | pasta Aplicativos | Apple `pt-BR` localizes the folder as *Aplicativos*; never `pt-PT` *Aplicações*. |

## 3. Frequent words and site phrases

| English | Brazilian Portuguese | Note |
| --- | --- | --- |
| hot key | tecla de atalho | Preferred term for a KM macro trigger combo (`⌃⌥⌘T`). In casual follow-up, *atalho* is fine when there is no confusion with system/app shortcuts. |
| shortcut | atalho | General macOS or app shortcut (e.g., `⌘C`). Use *atalho de teclado* when needed to distinguish from non-keyboard shortcuts. |
| typed string | texto digitado | Plain beginner wording; use *sequência digitada* only when stressing a short code like `=addr=`. Avoid *string*. |
| abbreviation / snippet | abreviação / trecho de texto | Use *abreviação* for the short trigger typed by the user (e.g., `=addr=`) and *trecho de texto* (or *trecho pronto*) for the expanded text that gets inserted. Avoid untranslated *snippet*. |
| paste | colar | Everyday verb (*copiar e colar*). Gloss **Insert Text by Pasting** on first mention as *(inserir texto colando)*. |
| illustration (box title) | Ilustração | Title for `Reply` / illustrative boxes (e.g., *Ilustração: mais ou menos o que o Keyboard Maestro mostra*). |
| lesson | lição | Feminine (*lição 1*, *as três lições*). Prefer *lição* over *aula* so it reads like a friendly written guide rather than a formal class. |
| step | passo | Masculine (*passo*, *os 8 passos do guia completo*). Use *passo* consistently for both lesson steps and the 8 parts of the full guide. |
| full guide | guia completo | Masculine (*o guia completo*). Links to `/en/guide/…`; note *(em inglês)* where the source marks language availability. |
| how-to | guia prático | Masculine (*guia prático*, plural *guias práticos*). Contrasts cleanly with *guia completo* and pluralizes naturally in search/nav labels. |
| wiki | wiki | Feminine (*a wiki oficial*, *a wiki do site*). Keep untranslated. |
| FAQ | FAQ | Masculine (*o FAQ*, *consulte o FAQ*). Widely recognized in `pt-BR`; no need to expand unless the English does. |
| "If something's off" (troubleshooting heading) | Se algo não der certo | Use this exact heading across all lessons and inline cross-references (e.g., *a seção “Se algo não der certo” da lição 1*). Friendly and non-alarmist. |
| "look it up when you need it" | consulte quando precisar | Matches the *você* voice; use *para consultar quando precisar* when phrased as a subordinate clause or subtitle. |

## 4. Register and tone rules

1. **Address the reader as *você*, strictly in Brazilian Portuguese.** Use third-person singular verb forms and possessives (*você clica*, *seu Mac*, *suas macros*). Avoid *tu*, formal *o senhor*, and European Portuguese vocabulary or progressive forms (*ecrã*, *ficheiro*, *rato*, *definições*, *a fazer* — use *tela*, *arquivo*, *mouse*, *ajustes*, *fazendo*).
2. **Write instructions as friendly, direct *você* imperatives.** Prefer *Abra*, *Clique em*, *Digite*, *Escolha*, and *Teste* over impersonal infinitives (*Abrir*, *Clicar*) or stiff passives. Connect sentences with everyday transitions (*porque*, *então*, *mas*, *por exemplo*, *se não funcionar*) and vary short and longer sentences so the page sounds like a knowledgeable friend talking you through it.
3. **Keep Keyboard Maestro UI labels in bold English and gloss them once per page.** Never translate KM menu items, triggers, actions, buttons, or preferences. On the first appearance on a page, add a brief lowercase Portuguese gloss in standard ASCII parentheses with a normal space before `(` — e.g., `**Insert Text by Pasting** (inserir texto colando)` — and never use full-width parentheses. After that, write the bold English label alone.
4. **Follow Brazilian Portuguese punctuation, casing, and MDX-safe quoting.** Use sentence case for headings and list titles (capitalizing only proper nouns, Apple's localized setting/app names like **Ajustes do Sistema**, and English KM UI labels). Inside MDX attribute strings that need quotes, use typographic double quotes (`“…”`). Put spaces around `▸` in menu paths (`**File ▸ New Macro**`, **Ajustes do Sistema ▸ Privacidade e Segurança ▸ Acessibilidade**), put no space before `:`, `;`, `?`, or `!`, and never leave punctuation inside a bold closing marker immediately before text (`**quando isso acontece**, a macro…`, not `**quando isso acontece,**a macro…`).
5. **Keep key symbols, inline code, and English loanwords clean and consistent.** Write key combinations without internal spaces (`⌃⌥⌘N`, `⌘V`) and with normal spaces separating them from Portuguese words (*aperte ⌃⌥⌘N*, *use ⌘C e ⌘V*). Keep typed strings (`=reply=`), tokens (`%LongDate%`), and file names in inline code. Give recurring English words a consistent Portuguese article and gender throughout (*o Engine*, *o Dock*, *o Finder*, *a macro*, *um token*, *o log*), without inventing awkward Portuguese spellings.

## Enabled vs active (two different words, everywhere)
| English | Use | Meaning |
|---|---|---|
| enabled (macro or group) | habilitado | its tick is on |
| active (macro or group) | ativo | it can fire right now: the group's availability conditions are met |

Never write the *enabled* word for *active / activated*. Guide step 1 builds its trap on this difference.
