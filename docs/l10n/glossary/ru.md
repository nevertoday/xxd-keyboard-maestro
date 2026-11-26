# Russian (ru) Glossary and Style Guide

Keep all Keyboard Maestro interface labels (menus, triggers, actions, buttons, preferences, and built-in group names such as **Global Macro Group**, **Hot Key Trigger**, **Insert Text by Pasting**, **Launch Engine at Login**) in exact bold English. On the first mention of a UI label on a page, add a brief Russian gloss in parentheses, e.g. `**Insert Text by Pasting** (вставка текста из буфера)`.

## 1. Site terms

| English term | Chinese key | Russian term | Note |
| --- | --- | --- | --- |
| macro | 宏 | макрос | Pl. `макросы`, gen. pl. `макросов`. Standard Russian term; declines normally. |
| macro group | 宏组 | группа макросов | Pl. `группы макросов`. Avoid «макрогруппа». Keep **Global Macro Group** in English (first-time gloss: `(глобальная группа макросов)`). |
| trigger | 触发器 | триггер | Pl. `триггеры`. Standard automation term; explained in plain words on first use. |
| action | 动作 | действие | Pl. `действия`, gen. pl. `действий`. |
| editor | 编辑器 | редактор | Lowercase in prose (`редактор`, `редактор Keyboard Maestro`). Refers to the main app window where you edit macros. |
| Engine | 引擎 | движок | Lowercase in prose (`движок`, `у движка нет окна`). Keep the full program/process name **Keyboard Maestro Engine** in English. |
| hot key | 热键 | горячая клавиша | Pl. `горячие клавиши`. Use for the KM trigger concept; use `сочетание клавиш` when speaking broadly of a key chord or macOS shortcut. |
| typed string trigger | 输入字符串触发器 | триггер по вводу строки | Clear and idiomatic; pairs with **Typed String Trigger** `(триггер по вводу строки)`. |
| palette | 面板 | палитра | Pl. `палитры`. Floating panel of macro buttons (`в виде палитры`, `палитра макросов`). |
| status menu | 状态菜单 | меню состояния | The menu opened from Keyboard Maestro's icon in `строка меню`. |
| variable | 变量 | переменная | Pl. `переменные`. Declines as an adjective (`переменной`, `переменную`). |
| token | 令牌 | токен | Pl. `токены`. Always keep token syntax like `%LongDate%` verbatim inside inline code. |
| calculation | 计算 | вычисление | Pl. `вычисления`. Can be explained in context as a formula (`формула`) typed into a numeric box. |
| condition | 条件 | условие | Pl. `условия`. |
| clipboard history | 剪贴板历史 | история буфера обмена | `буфер обмена` = clipboard. |
| named clipboard | 命名剪贴板 | именованный буфер обмена | Pl. `именованные буферы обмена` (contrasts with the system clipboard, `системный буфер обмена`). |
| found image | 找图 | поиск по изображению | Use `поиск по изображению` for the feature/method, or `найденное изображение` when referring to the matched spot on screen. |
| Accessibility permission | 辅助功能权限 | разрешение «Универсальный доступ» | Directly mirrors Apple's Russian UI label (`Универсальный доступ`), avoiding clunky genitive chains. |
| smart group | 智能组 | смарт-группа | Pl. `смарт-группы`, hyphenated and lowercase (matches Apple's `смарт-папка`). |
| subroutine | 子程序 | подпрограмма | Pl. `подпрограммы`. |
| Macro Library | 宏库 | библиотека макросов | Lowercase in prose. Keep **Macro Library** in English when naming the KM menu/window, with first-time gloss `(библиотека макросов)`. |
| plug-in action | 插件动作 | действие-плагин | Pl. `действия-плагины`. |
| debugger | 调试器 | отладчик | Keep **Macro Debugger** in English if referring to the KM UI window, glossed as `(отладчик макросов)`. |
| Engine log | 引擎日志 | журнал движка | Prefer `журнал` over «лог» in friendly prose; keep actual filenames such as `Engine.log` unchanged. |

## 2. macOS names (Apple Russian localization)

| English macOS name | Russian macOS name | Note |
| --- | --- | --- |
| System Settings | Системные настройки | Older macOS (*System Preferences*) also used `Системные настройки` in Russian — when adapting notes about older macOS, point out the renamed pane (`Защита и безопасность ▸ Конфиденциальность`) rather than repeating `Системные настройки`. |
| Privacy & Security | Конфиденциальность и безопасность | On macOS Monterey and earlier: `Защита и безопасность`, tab `Конфиденциальность`. |
| Accessibility | Универсальный доступ | Path: **Системные настройки ▸ Конфиденциальность и безопасность ▸ Универсальный доступ**. |
| Input Monitoring | Мониторинг ввода | Exact Apple label in Privacy & Security. |
| Screen & System Audio Recording | Запись экрана и системного звука | Exact label on macOS Sonoma/Sequoia (earlier versions: `Запись экрана`). |
| Automation | Автоматизация | Exact Apple label in Privacy & Security. |
| Login Items | Объекты входа | In macOS Sequoia 15+, shown as `Объекты входа и расширения`. |
| the menu bar | строка меню | Lowercase (`в строке меню`, `значок в строке меню`). |
| the Dock | Dock | Kept in English, uninflected (`в Dock`, `панель Dock`). |
| Finder | Finder | Kept in English, uninflected (`в Finder`, `с помощью Finder`). |
| Notes | Заметки | Declines naturally (`открыть Заметки`, `окно Заметок`, or `приложение «Заметки»`). |
| Calendar | Календарь | Declines naturally (`открыть Календарь`, `в Календаре`). |
| Safari | Safari | Kept in English, uninflected. |
| TextEdit | TextEdit | Kept in English on Russian macOS, uninflected. |
| Downloads folder | папка «Загрузки» | Finder displays `/Downloads` as `Загрузки`. |
| Applications folder | папка «Программы» | Finder displays `/Applications` as `Программы` (not «Приложения»). |

## 3. Frequent site words and phrases

| English | Russian | Note |
| --- | --- | --- |
| hot key | горячая клавиша | Use for KM hot key triggers; `сочетание клавиш` is natural when referring to the chord itself. |
| shortcut | сочетание клавиш | Apple's standard Russian term for macOS and app shortcuts. Avoid «шорткат» and «быстрая клавиша». |
| typed string | вводимая строка / ввод строки | Use `ввод строки` in lists of triggers (`горячая клавиша, ввод строки, время суток`); `вводимая строка` or `строка` for the characters typed. |
| abbreviation/snippet | сокращение / фрагмент текста | `сокращение` for short trigger strings (`=addr=`); `фрагмент текста` or `готовый текст` for the inserted snippet. Avoid «сниппет». |
| paste | вставить / вставка | Standard verb/noun (`вставить`, impf. `вставлять`, noun `вставка`). |
| illustration (box title) | Иллюстрация | E.g. `Иллюстрация: примерно так это показывает Keyboard Maestro`. Avoid «Пример: примерно…». |
| lesson | урок | `Урок 1: …` in headings; lowercase `урок 1`, `три урока` in prose. |
| step | шаг | `Шаг {n}: {title}` for the 8 chapters of the full guide, and `шаги` for numbered steps in a task. |
| full guide | полное руководство | `Полное руководство: 8 шагов` in navigation; note `(на английском)` where links lead to `/en/`. |
| how-to | инструкции | `Инструкции: как именно` (nav), `Инструкции: конкретные задачи` (README), `инструкции` (prose). Avoid «руководства» (clashes with `полное руководство`) and «хау-ту». |
| wiki | вики | Feminine indeclinable (`официальная вики`, `в вики`); `Вики` in nav/links (`Вики: что это такое`). |
| FAQ | Частые вопросы | Plain everyday Russian for beginners (`Частые вопросы`, `Частые вопросы (на английском)`). Use `FAQ` only if an explicit English reference requires it. |
| "If something's off" | Если что-то пошло не так | Fixed troubleshooting `##` heading across all three lessons; match it in cross-references (`раздел «Если что-то пошло не так» в уроке 1`). |
| "look it up when you need it" | заглядывать, когда понадобится / посмотреть, когда понадобится | Keep it warm and conversational (e.g. `во всё остальное можно заглядывать, когда понадобится`). Avoid stiff officialese like «по мере необходимости». |

## 4. Register, tone, and formatting rules

1. **Address the reader as lowercase `вы`.** Use friendly, polite `вы` (`ваш`, `вам`, `вас`), never capitalized «Вы», which feels stiff and bureaucratic in Russian web tutorials. Keep the voice warm and conversational, like a knowledgeable friend explaining Mac automation over coffee.
2. **Write direct, plain-Russian instructions.** Use clear 2nd-person plural imperatives (`откройте`, `нажмите`, `выберите`, `перетащите`, `поставьте галочку`) and active verbs (`сработает`, `откроет`, `вставит`). Connect thoughts naturally with `потому что`, `поэтому`, `но`, `например`. Avoid bureaucratic nominalizations and clichés («осуществить запуск», «произвести настройку», «данный макрос», «является» — prefer «запустить», «настроить», «этот макрос», em dash).
3. **Keep English UI labels untouched and uninflected.** Leave every Keyboard Maestro UI label in exact bold English with a short lowercase Russian gloss in round parentheses on first mention on a page (`**Hot Key Trigger** (триггер по горячей клавише)`), then bold English alone. Never attach Russian case endings to English labels or names — put a Russian generic noun before them when needed (`действие **Pause**`, `в меню **Activate:**`, `в окне **Keyboard Maestro**`, `в Finder`).
4. **Follow Russian typography and MDX safety.** Use guillemets `«…»` for quotation marks in prose and inside JSX/MDX attributes (so `"` never breaks attributes), an em dash with spaces (` — `) rather than a hyphen, and `ё` consistently (`всё`, `ещё`, `введёте`, `найдёт`). Space menu arrows as ` ▸ ` (`**Системные настройки ▸ Конфиденциальность и безопасность ▸ Универсальный доступ**`). Never close a `**bold**` span with punctuation directly followed by text (`**…когда нужно**. Дальше`, not `**…когда нужно.**Дальше`).
5. **Space Cyrillic cleanly around Latin words, code, and key symbols.** Separate Russian words from Latin names, inline code, and shortcuts with normal spaces (`нажмите ⌃⌥⌘N`, `введите \`=reply=\``, `откройте Safari`). Keep key chords tight with no internal spaces (`⌃⌥⌘N`, `⌃⌥⌘M`, `⌘Q`, `⌘V`, `⌃⌥⇧`), and keep tokens (`%LongDate%`) and typed strings (`=reply=`) verbatim inside inline code.

## Enabled vs active (two different words, everywhere)
| English | Use | Meaning |
|---|---|---|
| enabled (macro or group) | включён | its tick is on |
| active (macro or group) | активен | it can fire right now: the group's availability conditions are met |

Never write the *enabled* word for *active / activated*. Guide step 1 builds its trap on this difference.
