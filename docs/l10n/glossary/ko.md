# Korean (ko) Localization Glossary

Keep Keyboard Maestro's own interface labels (menus, actions, triggers, buttons, preferences, window titles) in English, in **bold**, exactly as they appear in the app. On the first mention of an interface label on a page, add a short Korean gloss in standard parentheses with no leading space—e.g. `**Insert Text by Pasting**(붙여넣기로 텍스트 삽입)`—then use the bold English label alone afterward.

## 1. Site terms

| English term | Chinese key | Korean term | Note |
| --- | --- | --- | --- |
| macro | 宏 | 매크로 | Standard Korean automation term. Keep UI labels like `**New Macro**` in English. |
| macro group | 宏组 | 매크로 그룹 | Avoid `매크로 폴더`; a group also controls which apps and when its macros are active. |
| trigger | 触发器 | 트리거 | Standard term in Korean macOS automation guides. Clarify naturally as "실행 계기" in beginner prose if helpful, while keeping the term `트리거`. |
| action | 动作 | 동작 | Matches Apple's Korean macOS/Shortcuts term. Avoid `액션`. |
| editor | 编辑器 | 편집기 | Refers to the Keyboard Maestro editing window (contrasted with `엔진`). Prefer `편집기` over `에디터`. |
| Engine | 引擎 | 엔진 | Shorthand for `Keyboard Maestro Engine` (keep the full product name in English). |
| hot key | 热键 | 단축키 | Use `단축키` in general prose and UI glosses (`**Hot Key Trigger**(단축키 트리거)`) so beginners understand immediately; use `매크로 단축키` or `핫키` only when directly contrasting it with a macOS/app shortcut in the same sentence. |
| typed string trigger | 输入字符串触发器 | 문자열 입력 트리거 | Matches `**Typed String Trigger**`; keep trigger strings like `=addr=` in inline code unchanged. |
| palette | 面板 | 팔레트 | Standard Korean term for a floating button palette (avoid `패널`). Gloss `**Conflict Palette**` as `(충돌 팔레트)`. |
| status menu | 状态菜单 | 상태 메뉴 | Keyboard Maestro's icon/menu in the macOS `메뉴 막대`. |
| variable | 变量 | 변수 | Standard Korean term. |
| token | 令牌 | 토큰 | Standard Korean term (never `표식` or `징표`). Keep token syntax like `%LongDate%` untouched in inline code. |
| calculation | 计算 | 계산식 | Natural noun for formulas/expressions typed in numeric fields; use `계산` only when referring to the act of calculating. |
| condition | 条件 | 조건 | Standard Korean term. |
| clipboard history | 剪贴板历史 | 클립보드 기록 | Plain everyday Korean (prefer over `클립보드 히스토리`). Gloss `**Clipboard History Switcher**` as `(클립보드 기록 전환기)`. |
| named clipboard | 命名剪贴板 | 이름 지정 클립보드 | Clear, idiomatic technical Korean (avoid stiff `명명된 클립보드` or `네임드 클립보드`). |
| found image | 找图 | 이미지 찾기 | Use `이미지 찾기` for the feature/concept; `찾은 이미지` is natural when referring to the matched spot on screen. Keep `**Found Image**` in English for UI labels. |
| Accessibility permission | 辅助功能权限 | 손쉬운 사용 권한 | Must match Apple's official Korean macOS name `손쉬운 사용` (never `접근성 권한`). |
| smart group | 智能组 | 스마트 그룹 | Matches Apple's Korean macOS convention (`스마트 폴더`, `스마트 그룹`). |
| subroutine | 子程序 | 서브루틴 | Standard Korean term (avoid unfamiliar translations like `하위 프로그램`). |
| Macro Library | 宏库 | 매크로 라이브러리 | Keep UI references to `**Macro Library**` in English, glossed `(매크로 라이브러리)` on first mention. |
| plug-in action | 插件动作 | 플러그인 동작 | Consistent with `동작` (action). |
| debugger | 调试器 | 디버거 | Standard Korean term. Keep `**Macro Debugger**` in English for the UI window/menu. |
| Engine log | 引擎日志 | 엔진 로그 | Consistent with `엔진`. Keep the file name `Engine.log` in English inline code. |

## 2. macOS names

Use Apple's official Korean macOS localization so readers match what they see on screen. Do not transliterate names that Apple keeps in English.

| English macOS name | Korean macOS name | Note |
| --- | --- | --- |
| System Settings | 시스템 설정 | macOS Ventura 13 and later (formerly `시스템 환경설정`). |
| Privacy & Security | 개인정보 보호 및 보안 | Exact Apple spacing (`개인정보 보호`, not `개인 정보 보호`). |
| Accessibility | 손쉬운 사용 | Official macOS label; never write `접근성`. |
| Input Monitoring | 입력 모니터링 | Under `시스템 설정 ▸ 개인정보 보호 및 보안 ▸ 입력 모니터링`. |
| Screen & System Audio Recording | 화면 및 시스템 오디오 녹음 | macOS Sonoma 14+ official label (earlier macOS versions showed `화면 기록`). |
| Automation | 자동화 | Under `시스템 설정 ▸ 개인정보 보호 및 보안 ▸ 자동화`. |
| Login Items | 로그인 항목 | In macOS Sequoia 15, the section is labeled `일반 ▸ 로그인 항목 및 확장 프로그램`. |
| the menu bar | 메뉴 막대 | Top bar on macOS. |
| the Dock | Dock | Apple keeps `Dock` in English in Korean macOS; do not write `독`. |
| Finder | Finder | Apple keeps `Finder` in English in Korean macOS; do not write `파인더`. |
| Notes | 메모 | Apple's localized app name in Korean macOS. |
| Calendar | 캘린더 | Apple's localized app name in Korean macOS. |
| Safari | Safari | Apple keeps `Safari` in English in Korean macOS; do not write `사파리`. |
| TextEdit | 텍스트 편집기 | Apple's localized app name in Korean macOS. |
| Downloads folder | 다운로드 폴더 | Folder name shown in Finder is `다운로드` (`~/Downloads`). |
| Applications folder | 응용 프로그램 폴더 | Folder name shown in Finder is `응용 프로그램` (`/Applications`). |

## 3. Frequent site words and phrases

| English | Korean | Note |
| --- | --- | --- |
| hot key | 단축키 | Same everyday word as `shortcut`; use `매크로 단축키` or `핫키` only when contrasting directly with a macOS/app shortcut in the same sentence. |
| shortcut | 단축키 | Keyboard shortcuts like `⌘C`. Never write `단축어` (that is Apple's Shortcuts app). |
| typed string | 입력 문자열 | In flowing sentences, `입력한 문자열` or `특정 문자열` is also natural. |
| abbreviation/snippet | 약어 / 상용구 | `약어` for the short trigger code (`=addr=`); `상용구` (or `자주 쓰는 문구`) for the expanded text snippet. Avoid `스니펫` for beginners. |
| paste | 붙여넣기 | Matches Apple's Korean Edit menu (`붙여넣기`); verb form `붙여넣다` / `붙여넣어요`. |
| illustration (title of illustrative boxes) | 예시 | Means an illustrative example (e.g., a sample reply), never `삽화` or `일러스트`. |
| lesson | 레슨 | Friendly and consistent both standalone (`이 레슨에서는`) and numbered (`레슨 1`, `입문 레슨`). |
| step | 단계 | Used for tutorial steps (`1단계`, `다음 단계`) and macro action steps. |
| full guide | 전체 가이드 | Links to the English full guide (`/en/...`). |
| how-to | 활용법 | Task-based practical guides; avoids repeating `가이드` beside `전체 가이드`. |
| wiki | 위키 | Site section name (`위키`); keep `Keyboard Maestro Wiki` in English when naming the external official site. |
| FAQ | FAQ | Standard and compact for labels/nav; `자주 묻는 질문` works naturally in fuller prose or subtitles. |
| If something's off (troubleshooting heading) | 뭔가 잘 안 될 때 | Calm and reassuring; avoid stiff headings like `문제 해결` or `오류 발생 시 조치`. |
| look it up when you need it | 필요할 때 찾아보세요 | Use `필요할 때 찾아보세요` (or `필요할 때 찾아보면 돼요`) in prose, and `필요할 때 찾아보기` for short labels/headings. |

## 4. Register, tone, and formatting rules

1. **Address form and voice (해요체):** Write in warm, plain **해요체** (`~해요`, `~하세요`, `~이에요/예요`, `~돼요`) like a friend who knows Mac well—never stiff **하십시오체** (`~하십시오`, `~됩니다`) or casual **반말**. Omit the pronoun "you" whenever natural instead of translating it as `당신`, and link sentences smoothly with everyday connectors (`그래서`, `하지만`, `예를 들어`, `~하면`).
2. **Phrasing instructions:** Keep action steps concise and approachable (`~을 클릭하세요`, `~를 눌러 보세요`, `~를 선택해요`), sticking to one clear step per clause. Keep all Keyboard Maestro UI labels verbatim in bold English with a first-mention Korean gloss in parentheses (`**Launch Engine at Login**(로그인 시 엔진 실행)`), and use official Korean macOS paths directly (`시스템 설정 ▸ 개인정보 보호 및 보안 ▸ 손쉬운 사용`).
3. **Particles (`조사`) after English labels, code, and symbols:** Attach Korean particles directly after the closing bold marker, inline code, or parentheses with **no space**, matching the spoken Korean pronunciation of the preceding word (`**Hot Key Trigger**(단축키 트리거)를`, `**Insert Text by Pasting**을`, `` `=reply=`를 ``, `⌘C를`, `⌃⌥⌘N을`, `Finder에서`, `Dock에`). Never put Korean particles inside the bold English label (`**Macro Library**를`, not `**Macro Library를**`).
4. **Spacing and punctuation with English, parentheses, and `⌃ ⌥ ⇧ ⌘`:** Put one space between Korean words and English words or key combinations when no particle attaches (`macOS 설정`, `⌃⌥⌘N 키`, `Keyboard Maestro에서`), and keep modifier key combos tight with no spaces (`⌃⌥⌘N`, `⌘C`). Use standard half-width parentheses `(...)` attached directly after the English label (`**File ▸ New Macro**(파일 ▸ 새 매크로)`), and use typographic quotes `“...”` / `‘...’` whenever quotes appear inside prose or JSX/MDX attributes.
5. **Natural Korean phrasing and MDX safety:** Reorder clauses into idiomatic Korean (conditions and reasons before the main verb) rather than following English word order, and translate example macro bodies (replies, snippets) into natural everyday Korean while preserving tokens (`%LongDate%`) and typed strings (`=reply=`). Keep `<mark>`, `<u>`, and `**bold**` on the matching meaning, and never end a bold span with punctuation directly followed by text (`**…할 때**입니다` or `**…할 때**. 다음으로`, never `**…할 때.**다음으로`).

## Enabled vs active (two different words, everywhere)
| English | Use | Meaning |
|---|---|---|
| enabled (macro or group) | 사용(켬) | its tick is on |
| active (macro or group) | 활성 | it can fire right now: the group's availability conditions are met |

Never write the *enabled* word for *active / activated*. Guide step 1 builds its trap on this difference.
