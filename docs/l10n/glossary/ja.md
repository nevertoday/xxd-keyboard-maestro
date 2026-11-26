# Japanese (ja) Glossary

Keyboard Maestro's own interface is English only. Never translate its action, trigger, menu, button, pane, or preference names—keep them exact in **bold English**, and add a short Japanese gloss in full-width parentheses on first mention per page, e.g. **Insert Text by Pasting**（テキストを貼り付けて挿入）.

## 1. Site terms

| English term | Chinese key | Japanese term | Note |
| --- | --- | --- | --- |
| macro | 宏 | マクロ | Keep `<Term k="宏" />` unchanged. Standard katakana term. |
| macro group | 宏组 | マクログループ | Keep UI group names like **Global Macro Group** in English with a first-mention gloss, e.g. **Global Macro Group**（すべてのアプリで有効なグループ）. |
| trigger | 触发器 | トリガー | Always include trailing `ー` (`トリガー`, not `トリガ`). UI labels (**New Trigger**, **Hot Key Trigger**) stay English. |
| action | 动作 | アクション | UI labels (**New Action**, **All Actions**, and individual action names) stay English. |
| editor | 编辑器 | エディタ | Omit trailing `ー` (`エディタ`) to match Apple Japanese (`スクリプトエディタ`). Refers to the Keyboard Maestro window, distinct from the Engine. |
| Engine | 引擎 | エンジン | Use `エンジン` for the concept; keep the full program name **Keyboard Maestro Engine** in English. |
| hot key | 热键 | ホットキー | Use for Keyboard Maestro's own key combinations; distinguish from `ショートカット` (macOS/app shortcuts). |
| typed string trigger | 输入字符串触发器 | 入力文字列トリガー | Concept name and `<Term k="输入字符串触发器" />` gloss. Keep the UI label **Typed String Trigger** in English. |
| palette | 面板 | パレット | Floating button panel. Do not translate as `パネル`. |
| status menu | 状态菜单 | ステータスメニュー | The menu opened from Keyboard Maestro's icon in the menu bar (`メニューバー`). |
| variable | 变量 | 変数 | Standard term. |
| token | 令牌 | トークン | Keep token literals like `%LongDate%` untouched inside inline code. |
| calculation | 计算 | 計算式 | Prefer `計算式` for the formula/expression feature in numeric fields (`計算` only when speaking generally). |
| condition | 条件 | 条件 | Standard term. |
| clipboard history | 剪贴板历史 | クリップボード履歴 | Standard concise phrasing. |
| named clipboard | 命名剪贴板 | 名前付きクリップボード | Prefer over `ネームドクリップボード`. |
| found image | 找图 | 画像検索 | Concept name (`画面から画像を探す` in plain prose). Keep UI labels containing `Found Image` in English. |
| Accessibility permission | 辅助功能权限 | アクセシビリティ権限 | In running prose, `「アクセシビリティ」の権限` is also natural; always match Apple's exact setting name `アクセシビリティ`. |
| smart group | 智能组 | スマートグループ | Matches Apple's `スマートフォルダ` convention. |
| subroutine | 子程序 | サブルーチン | Standard term. |
| Macro Library | 宏库 | マクロライブラリ | Use for the concept; keep the UI menu/window name **Macro Library** in English with `（マクロライブラリ）` on first mention. |
| plug-in action | 插件动作 | プラグインアクション | Standard katakana compound. |
| debugger | 调试器 | デバッガ | Omit trailing `ー` (`デバッガ`) to stay consistent with `エディタ` and `フォルダ`. Keep UI label **Macro Debugger** in English. |
| Engine log | 引擎日志 | エンジンログ | Keep the file name `Engine.log` untouched in inline code. |

## 2. macOS names

| English | Japanese (macOS) | Note |
| --- | --- | --- |
| System Settings | システム設定 | macOS 13 Ventura and later; on older macOS, **システム環境設定** (System Preferences). |
| Privacy & Security | プライバシーとセキュリティ | On macOS 12 and earlier, **セキュリティとプライバシー** ▸ **プライバシー**. |
| Accessibility | アクセシビリティ | Full path: **システム設定** ▸ **プライバシーとセキュリティ** ▸ **アクセシビリティ**. |
| Input Monitoring | 入力監視 | Under **プライバシーとセキュリティ**. |
| Screen & System Audio Recording | 画面収録とシステムオーディオ録音 | macOS 14 Sonoma and later; previously **画面収録**. |
| Automation | オートメーション | Under **プライバシーとセキュリティ**. |
| Login Items | ログイン項目 | Shown as **ログイン項目と機能拡張** on macOS 15 Sequoia and later. |
| the menu bar | メニューバー | Plain noun in prose (no bold needed). |
| the Dock | Dock | Keep in Latin letters as Apple Japanese does; never `ドック`. |
| Finder | Finder | Keep in Latin letters; never `ファインダー`. |
| Notes | メモ | Apple's localized app name (`「メモ」` or `メモ`). |
| Calendar | カレンダー | Apple's localized app name. |
| Safari | Safari | Keep in Latin letters. |
| TextEdit | テキストエディット | Apple's localized app name. |
| Downloads folder | 「ダウンロード」フォルダ | Folder name is `ダウンロード`; omit trailing `ー` on `フォルダ`. |
| Applications folder | 「アプリケーション」フォルダ | Folder name is `アプリケーション`; omit trailing `ー` on `フォルダ`. |

Other Apple names that appear in the lessons follow Apple's Japanese UI too: Mail → `メール`, Trash → `ゴミ箱`, Desktop → `デスクトップ`.

## 3. Recurring words and phrases

| English | Japanese | Note |
| --- | --- | --- |
| hot key | ホットキー | A key combination assigned to a Keyboard Maestro macro (e.g. ⌃⌥⌘N). |
| shortcut | ショートカット | A built-in keyboard shortcut in macOS or another app. |
| typed string | 入力文字列 | Use `入力文字列` for the feature; `決まった文字` / `短い文字列` is fine in conversational prose. |
| abbreviation/snippet | 短縮入力／定型文 | `短縮入力` for the short trigger text (`=reply=`); `定型文` for the expanded text block (clearer for beginners than `スニペット`). |
| paste | 貼り付け／貼り付ける | Prefer `貼り付け` / `貼り付ける` in friendly prose (gloss **Insert Text by Pasting** as `テキストを貼り付けて挿入`); `ペースト` is fine when referring directly to ⌘V or macOS menus. |
| illustration (title of illustrative boxes) | イメージ | Use for `Reply` box headers, e.g. `イメージ：Keyboard Maestro の画面のだいたいの様子`. Never translate as `イラスト`. |
| lesson | レッスン | Write `レッスン1`, `レッスン2`, `レッスン3`, `3つのレッスン`; `入門コース` for "Beginner track". |
| step | ステップ | Use for the 8 full-guide steps (`ステップ0`〜`ステップ7`, `全8ステップ`, `ステップ{n}：{title}`). Use `手順` for individual steps inside a walkthrough. |
| full guide | 完全ガイド | E.g. `完全ガイド：全8ステップ` (links to `/en/guide/...`, labeled `（英語）` where noted). |
| how-to | ハウツー | E.g. `ハウツー：具体的なやり方` (`ハウツー集` / `ハウツー` in prose). |
| wiki | Wiki | Keep in Latin letters for both the site's `Wiki` section and the `公式 Wiki`; never `ウィキ`. |
| FAQ | FAQ／よくある質問 | Use `FAQ` in compact navigation/links (`FAQ（英語）`), and `よくある質問（FAQ）` or `FAQ` naturally in prose. |
| If something's off | うまくいかないときは | Standard troubleshooting `##` heading at the end of each lesson. Avoid stiff `トラブルシューティング`. |
| look it up when you need it | 必要なときに調べる | Reassuring phrasing in context, e.g. `あとは必要なときに調べるだけで大丈夫です` / `必要なときに調べれば十分です`. |

## 4. Register, tone, and formatting rules

1. **Friendly です／ます調, never stiff or salesy**: Write like a helpful friend explaining Mac tools to a beginner. Use natural `です／ます調`, avoid `である調`, corporate keigo (`いたします`, `ご確認ください`, `〜することが可能でございます`), and awkward `あなた` (omit the subject when clear).
2. **Brisk instructions and connected prose**: In numbered step lists, prefer clean `〜します` (`〜を選びます`, `〜をクリックします`, `〜と入力します`) so consecutive steps stay light; save `〜してください`, `〜ましょう`, and `〜しないでください` for emphasis, invitations, or warnings. Connect ideas naturally with `ので`, `ため`, `ただ`, `たとえば`, `つまり` instead of choppy sentence-by-sentence calques.
3. **English UI labels with first-mention glosses**: Leave every Keyboard Maestro UI label in exact **bold English**. On its first appearance on a page, follow it immediately with a concise Japanese gloss in full-width parentheses — `**Hot Key Trigger**（ホットキートリガー）` — and use the bold English alone on later mentions. Use Apple's localized Japanese for macOS settings and Apple apps.
4. **Japanese punctuation and MDX safety**: Use standard Japanese punctuation (`。`, `、`, `「」`, `（）`, `：`, `・`) and keep `▸` with surrounding spaces for menu paths (`**Help ▸ Interactive Help**`). Never end a bold span with punctuation directly followed by Japanese text (`**〜したとき**。次の手順`, not `**〜したとき。**次の手順`). Inside JSX attribute values (`title="…"`, `q="…"`), use `「」` instead of straight double quotes.
5. **Spacing around English words, inline code, numbers, and ⌘ symbols**: Put a single half-width space between Japanese text and Latin words, bold English labels, inline code, or key symbols (`Keyboard Maestro を起動します`, `⌃⌥⌘N を押します`, `` `=reply=` と入力します ``, `**Keyboard Maestro ▸ Settings…** を開きます`, `**Activate:** メニュー`) — this also prevents CommonMark from misparsing bold spans ending in `…` or `:`. Do **not** add spaces next to Japanese punctuation (`「Safari」`, `**Insert Text by Pasting**（テキストを貼り付けて挿入）`), inside key combinations (`⌃⌥⌘N`, `⌘V`, `⌃⌥⇧`), or between digits and Japanese counters (`15分`, `1秒`, `3つ`, `レッスン1`, `ステップ6`).

## Enabled vs active (two different words, everywhere)
| English | Use | Meaning |
|---|---|---|
| enabled (macro or group) | 有効（オン） | its tick is on |
| active (macro or group) | アクティブ | it can fire right now: the group's availability conditions are met |

Never write the *enabled* word for *active / activated*. Guide step 1 builds its trap on this difference.
