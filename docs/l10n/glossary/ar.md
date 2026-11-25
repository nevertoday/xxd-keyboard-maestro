# Arabic (ar) Glossary

Standard term list and style rules for translating this Keyboard Maestro guide into Arabic (Modern Standard Arabic / الفصحى المعاصرة المبسّطة).

Keyboard Maestro's own interface is English only. Never translate Keyboard Maestro action, trigger, condition, menu, button, or preference labels: keep them verbatim in bold English (`**Insert Text by Pasting**`, `**File ▸ New Macro**`) and add a brief Arabic gloss in parentheses on first appearance per page (`**Insert Text by Pasting** (إدراج النص باللصق)`).

## 1. Site terms

| English term | Chinese key | Arabic term | Note |
| --- | --- | --- | --- |
| macro | 宏 | ماكرو | Definite: `الماكرو`; plural: `وحدات ماكرو` / `وحدات الماكرو` (avoid colloquial `ماكروهات`). |
| macro group | 宏组 | مجموعة ماكرو | Definite: `مجموعة الماكرو`; plural: `مجموعات ماكرو` / `مجموعات الماكرو`. |
| trigger | 触发器 | مشغّل | Definite: `المشغّل`; plural: `مشغّلات`. Pairs naturally with the verb `يشغّل الماكرو` (fires/runs a macro). |
| action | 动作 | إجراء | Definite: `الإجراء`; plural: `إجراءات`. Matches Apple's Arabic Shortcuts terminology. |
| editor | 编辑器 | المحرّر | Indefinite: `محرّر`. Refers to the Keyboard Maestro editor window, contrasted with `المحرك` (Engine). |
| Engine | 引擎 | المحرك | Refers to Keyboard Maestro Engine in prose; keep the full product name `Keyboard Maestro Engine` in English. |
| hot key | 热键 | مفتاح اختصار | Definite: `مفتاح الاختصار`; plural: `مفاتيح اختصار`. A key combo that fires a macro (e.g. `⌃⌥⌘T`). |
| typed string trigger | 输入字符串触发器 | مشغّل النص المكتوب | Plural: `مشغّلات النص المكتوب`. Avoid programmer jargon like `سلسلة نصية`. Keep UI label **Typed String Trigger** in English. |
| palette | 面板 | لوحة أزرار | Plural: `لوحات أزرار`. Short form `اللوحة` is fine once introduced in the same paragraph; never bare `لوحة` alone when it could suggest keyboard. |
| status menu | 状态菜单 | قائمة الحالة | Keyboard Maestro's icon and menu in the macOS menu bar (`شريط القوائم`). |
| variable | 变量 | متغيّر | Definite: `المتغيّر`; plural: `متغيّرات`. |
| token | 令牌 | رمز بديل | Definite: `الرمز البديل`; plural: `رموز بديلة`. Keep actual tokens like `%LongDate%` verbatim in inline code; avoid `توكن` and do not confuse with `متغيّر`. |
| calculation | 计算 | عملية حسابية | Definite: `العملية الحسابية`; plural: `عمليات حسابية`. Avoid bare `حساب`, which reads as "account". |
| condition | 条件 | شرط | Definite: `الشرط`; plural: `شروط`. |
| clipboard history | 剪贴板历史 | سجل الحافظة | Use `الحافظة` consistently for "clipboard". |
| named clipboard | 命名剪贴板 | حافظة مُسمّاة | Definite: `الحافظة المُسمّاة`; plural: `حافظات مُسمّاة`. |
| found image | 找图 | البحث عن صورة | For the feature/concept; when referring to the matched target on screen, use `الصورة المطابِقة`. Keep UI label **Found Image** in English. |
| Accessibility permission | 辅助功能权限 | إذن تسهيلات الاستخدام | Standardize on `إذن` (plural `أذونات`) for macOS permissions, using Apple's official term `تسهيلات الاستخدام`. |
| smart group | 智能组 | مجموعة ذكية | Definite: `المجموعة الذكية`; plural: `مجموعات ذكية`. Matches Apple's `مجلد ذكي` pattern. |
| subroutine | 子程序 | برنامج فرعي | Plural: `برامج فرعية`. Distinct from `إجراء` (action) and `روتين` (daily routine); explain in plain words as a reusable macro called by other macros. |
| Macro Library | 宏库 | مكتبة الماكرو | Use in prose and as the gloss for **Window ▸ Macro Library**. |
| plug-in action | 插件动作 | إجراء ملحق | Plural: `إجراءات ملحقة`. Matches Apple's macOS term `ملحق` (extension/plug-in) and avoids the ambiguity of `إجراء إضافي`. |
| debugger | 调试器 | مصحّح الأخطاء | Keep Keyboard Maestro's UI window name (**Macro Debugger**) in bold English. |
| Engine log | 引擎日志 | سجل المحرك | Keep the filename `Engine.log` verbatim in inline code. |

## 2. macOS names (Apple's localized Arabic UI)

Use Apple's official Arabic macOS labels below. For multi-step macOS paths in Arabic prose, separate levels with `◂` (matching RTL reading order), e.g. `إعدادات النظام ◂ الخصوصية والأمن ◂ تسهيلات الاستخدام`.

| English macOS name | Arabic macOS name | Note |
| --- | --- | --- |
| System Settings | إعدادات النظام | Official name on macOS 13+; older macOS used `تفضيلات النظام` (System Preferences). |
| Privacy & Security | الخصوصية والأمن | Exact label in `إعدادات النظام`. |
| Accessibility | تسهيلات الاستخدام | Under `الخصوصية والأمن`. |
| Input Monitoring | مراقبة الإدخال | Under `الخصوصية والأمن`. |
| Screen & System Audio Recording | تسجيل الشاشة وصوت النظام | Exact label on macOS 15+ (earlier versions showed `تسجيل الشاشة`). |
| Automation | التحكم التلقائي | Under `الخصوصية والأمن`. |
| Login Items | عناصر تسجيل الدخول | On macOS 15+ the pane is titled `عناصر الدخول والملحقات` (Login Items & Extensions). |
| the menu bar | شريط القوائم | Top bar of the Mac screen. |
| the Dock | شريط الأيقونات | Official Apple Arabic UI name; you may add `(Dock)` on first mention if helpful for clarity. |
| Finder | فايندر | Official display name on Arabic macOS. |
| Notes | الملاحظات | Official display name on Arabic macOS. |
| Calendar | التقويم | Official display name on Arabic macOS. |
| Safari | سفاري | Official display name on Arabic macOS. |
| TextEdit | TextEdit | Kept in English by Apple even on Arabic macOS; do not translate as `محرر النصوص` and do not bold it. |
| Downloads folder | مجلد التنزيلات | Folder name itself is `التنزيلات`. |
| Applications folder | مجلد التطبيقات | Folder name itself is `التطبيقات`. |

## 3. Frequent words and site headings

| English | Arabic | Note |
| --- | --- | --- |
| hot key | مفتاح اختصار | Plural: `مفاتيح اختصار`. Key combo that fires a macro. |
| shortcut | اختصار | Plural: `اختصارات`; use `اختصار لوحة مفاتيح` when disambiguating from Apple's Shortcuts app (`الاختصارات`). |
| typed string | نص مكتوب | Definite: `النص المكتوب`; in casual prose, `الأحرف التي تكتبها` also works when explaining the trigger characters. |
| abbreviation / snippet | اختصار نصي / مقتطف نصي | Use `اختصار نصي` for the short trigger like `=addr=`, and `مقتطف نصي` (or `نص جاهز`) for the reusable block of text. |
| paste | لصق / ألصق | Noun: `لصق` (`اللصق`); imperative verb: `ألصق`. |
| illustration (box title) | توضيح | For `Reply` boxes: `توضيح: تقريبًا ما يعرضه Keyboard Maestro`. |
| lesson | درس | Definite: `الدرس`; plural: `دروس`; numbered: `الدرس 1`، `الدرس 2`، `الدرس 3`. |
| step | خطوة | Definite: `الخطوة`; plural: `خطوات`; numbered: `الخطوة {n}`. |
| full guide | الدليل الكامل | Keeps `دليل` consistent with `هذا الدليل` ("this guide"). |
| how-to | شرح عملي | Plural: `شروحات عملية`; distinct from `الدليل الكامل`. |
| wiki | ويكي | Definite: `الويكي`; "official wiki" → `الويكي الرسمي`. |
| FAQ | الأسئلة الشائعة | Always translate; do not leave bare `FAQ` in Arabic prose. |
| If something's off | إذا لم يعمل شيء كما ينبغي | Calm, friendly troubleshooting heading; quote identically when cross-referencing from later lessons. |
| look it up when you need it | ارجع إليه وقت الحاجة | In subordinate clauses: `لترجع إليه وقت الحاجة` or `تعود إليه وقت الحاجة`. |

## 4. Register, tone, and formatting rules

1. **Modern Standard Arabic in a friendly direct voice:** Write in plain, approachable Modern Standard Arabic (الفصحى المعاصرة المبسّطة), addressing the reader directly in the singular second person (`أنت` / `-ك`: `افتح`, `جهازك`, `ستلاحظ`). Sound like a knowledgeable friend walking a beginner through their Mac—avoid bureaucratic phrasing (`يُرجى التفضّل بـ`, `يتعيّن على المستخدم`), marketing hype, and regional dialects.
2. **Direct instructions and natural connectors:** Phrase action steps with crisp imperatives (`افتح`, `اختر`, `اضغط`, `اسحب`, `ألصق`) and prefer active verbs over heavy verbal-noun constructions (`يمكنك تشغيله` rather than `يتم القيام بعملية تشغيله`). Mix short and longer sentences linked with natural Arabic connectors (`لأن`, `لذلك`, `لكن`, `مثلًا`, `بعد ذلك`).
3. **English UI labels vs. product names:** Keep Keyboard Maestro UI labels verbatim in bold English (`**Insert Text by Pasting**`, `**Launch Engine at Login**`, `**File ▸ New Macro**`), with a brief Arabic gloss in parentheses on first appearance per page (`**Hot Key Trigger** (مشغّل مفتاح الاختصار)`). Never bold ordinary English app or product names (`Keyboard Maestro`, `macOS`, `TextEdit`) in prose, as bold English spans are checked against Keyboard Maestro's UI label list.
4. **Arabic punctuation, quotes, and menu arrows:** Use Arabic comma (`،`) and Arabic question mark (`؟`) in Arabic prose, along with standard periods (`.`), colons (`:`), and guillemets (`«…»`) for quoted phrases or in-attribute quotes (never breaking JSX double quotes). Keep `▸` verbatim inside English Keyboard Maestro menu paths (`**File ▸ New Macro**`), use `◂` for localized Arabic macOS paths (`إعدادات النظام ◂ الخصوصية والأمن ◂ تسهيلات الاستخدام`), avoid bare `<`, `{`, `}` in prose, and never end a bold span with punctuation directly followed by text.
5. **Spacing and directionality with English, code, keys, and `⌘` symbols:** Always leave a regular space before and after English words, bold UI labels, inline code (`` `=addr=` ``, `` `%LongDate%` ``), and key combos (`⌃⌥⌘N`). Never attach Arabic proclitics (`و`, `بـ`, `لـ`, `الـ`) directly onto `**…**` or `` `…` `` (which breaks Markdown emphasis and readability)—insert a natural Arabic head noun instead (e.g. `وخيار **Launch Engine at Login**`, `بكتابة ` + `` `=reply=` ``, `في نافذة **Macro Debugger**`). Use Western Arabic numerals (`0–9`), keep `⌃ ⌥ ⇧ ⌘` symbols untouched, and let the page's RTL layout handle bidirectional flow without manual Unicode control characters.
