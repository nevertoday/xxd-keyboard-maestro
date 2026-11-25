#!/usr/bin/env python3
"""README 里的三张配图（SVG，轻动画，和头图 hero.svg 同一套笔法：颜色、字体、键帽和动画小工具都从 build_hero 拿）。

    python3 tools/build_readme_svgs.py

输出 assets/readme/<名字>.svg（中文）和 assets/en/readme/<名字>.svg（英文）：
  editor-engine  编辑器和引擎是两个程序：编辑器写宏、改完就关；引擎在后台一直开着，听热键、执行宏
                 （依据官方 Wiki manual/Quick_Start）
  macro          编辑器的三栏：宏组 → 宏 → 这个宏的触发器和动作；任何一个触发器都能让它开始，动作从上往下一个个做
                 （依据 manual/Quick_Start；按钮名照 App 的英文）
  lessons        新手入门三课：每课多长、学完你手里多了什么。课名和时间从 src/data/nav.js 的 LESSONS 读
元素自己的属性写的是播完的样子，所以不播动画的地方（静态渲染、系统设了「减少动效」）看到的就是最后一帧。文字改 TEXT。
"""
import os
import re

from build_hero import (CARD, FAINT, INK, LINE, LINE2, MARK, MONO, MUTED, OK, PAPER, ROOT, SKY,
                        anim, frame, light, nav, pct, show, tick, tr, txt as t, width)

TEXT = {
    "zh": {
        "ee": {
            "editor": ("Keyboard Maestro", "编辑器"),
            "editor_rows": ["写宏、改宏的地方", "改完几秒就自动存好，没有保存按钮", "改完就可以关掉"],
            "engine": ("Keyboard Maestro Engine", "引擎"),
            "engine_rows": ["在后台一直开着，没有窗口", "听热键、看时间、盯着 App、记剪贴板历史", "真正替你执行宏的是它"],
            "flow": "你写的宏", "quit": "已关掉", "runs": "宏照样跑",
            "note": "引擎要一直开着：在 Keyboard Maestro 的偏好设置里打开 Launch Engine at Login，登录 Mac 时它就自己开好。",
        },
        "macro": {
            "cols": ["宏组：宏放在哪、在哪里生效", "宏：一件小差事", "触发器管什么时候开始，动作管做什么"],
            "macros": ["每天开工", "插入今天的日期", "粘贴时去掉格式"],
            "groups": ["Global Macro Group", "Mail", "Safari"],
            "any": "任何一个都能让它开始", "order": "从上往下，一个个做",
            "app": "日历", "time": "9:00",
            "note": "宏和它所在的宏组都要打开、宏组正在生效，宏才会被触发。",
        },
        "lessons": {"num": "第 {n} 课", "get_label": "学完你有：",
                    "get": ["一个热键，打开你每天都开的 App", "打几个字母，整段文字自己出现", "一个键做完开工那几下：开 App、开网页、摆窗口"]},
    },
    "en": {
        "ee": {
            "editor": ("Keyboard Maestro", "the editor"),
            "editor_rows": ["Where you write and change macros", "Saves itself seconds after each change; no Save", "Quit it when you're done"],
            "engine": ("Keyboard Maestro Engine", "the Engine"),
            "engine_rows": ["Runs in the background, no window", "Hears hot keys, watches the time, tracks apps", "The part that actually runs your macros"],
            "flow": "your macros", "quit": "Quit", "runs": "Macros still run",
            "note": "Keep the Engine running: turn on Launch Engine at Login in Keyboard Maestro's preferences, and it starts when you log in.",
        },
        "macro": {
            "cols": ["Macro groups: where macros live and work", "A macro: one small job", "Triggers say when it starts, actions say what it does"],
            "macros": ["Start my day", "Insert today's date", "Paste without formatting"],
            "groups": ["Global Macro Group", "Mail", "Safari"],
            "any": "Any one of them starts it", "order": "Top to bottom, one at a time",
            "app": "Calendar", "time": "9:00",
            "note": "A macro fires only when it's enabled and its macro group is enabled and active.",
        },
        "lessons": {"num": "Lesson {n}", "get_label": "After this lesson:",
                    "get": ["One hot key that opens the app you use every day", "A few letters that turn into a whole paragraph", "One key for your morning routine: apps, a web page, windows in place"]},
    },
}


def wrap(s, size, maxw):
    """按宽度折行：英文在空格处断，中文在字间断，优先断在逗号、冒号后面。"""
    rows, cur = [], []
    for tok in re.findall(r"[^\s⺀-￿]+\s*|\s+|.[，、。；：）]?", s):
        if cur and width("".join(cur) + tok.rstrip(), size) > maxw:
            cut = max((i + 1 for i, c in enumerate(cur) if c.rstrip().endswith(tuple("，、：;:"))), default=len(cur))
            rows.append("".join(cur[:cut]).rstrip())
            cur = cur[cut:]
        cur.append(tok)
    return rows + ["".join(cur).rstrip()]


def lines(x, y, rows, size, fill, lh, weight=400):
    return "".join(t(x, y + i * lh, s, size, fill, weight) for i, s in enumerate(rows))


def bullet_rows(x, y, rows, maxw, lh=30):
    """一列圆点短句，长的自动折行。返回 (svg, 最后一行的 y)。"""
    out = []
    for s in rows:
        parts = wrap(s, 17, maxw)
        out.append(f'<circle cx="{x + 4}" cy="{y - 6}" r="3" fill="{INK}"/>' + lines(x + 18, y, parts, 17, INK, 24))
        y += 24 * (len(parts) - 1) + lh
    return "".join(out), y


def editor_engine(lang):
    T = TEXT[lang]["ee"]
    W, H, D, END = 1200, 386, 9.0, 8.2
    css, out = [], []
    cw, ch, y0 = 470, 236, 40
    xs = (40, W - 40 - cw)

    # 左：编辑器（一个带标题栏的窗口），播到一半关掉、变淡
    x = xs[0]
    out.append(f'<g class="ed"><rect x="{x}" y="{y0}" width="{cw}" height="{ch}" rx="12" fill="{CARD}" stroke="{LINE}" filter="url(#sh)"/>')
    out += [f'<circle cx="{x + 22 + i * 16}" cy="{y0 + 22}" r="5" fill="{c}"/>' for i, c in enumerate(("#FF5F57", "#FEBC2E", "#28C840"))]
    out.append(f'<path d="M{x} {y0 + 44} H{x + cw}" stroke="{LINE}"/>')
    out.append(t(x + 28, y0 + 84, T["editor"][0], 22, INK, 700) + t(x + 30 + width(T["editor"][0], 22) + 12, y0 + 84, T["editor"][1], 17, MUTED, 500))
    body, _ = bullet_rows(x + 30, y0 + 128, T["editor_rows"], cw - 80)
    out.append(body + "</g>")
    out.append(f'<g class="quit"><rect x="{x + cw - 28 - width(T["quit"], 15) - 24:.0f}" y="{y0 + 10}" width="{width(T["quit"], 15) + 24:.0f}" height="26" rx="13" fill="{PAPER}" stroke="{LINE2}"/>'
               + t(x + cw - 28 - (width(T["quit"], 15) + 24) / 2, y0 + 28, T["quit"], 15, MUTED, 600, "middle") + "</g>")
    css.append(light("ed", 4.2, "opacity", 1, .45, D, END) + show("quit", 4.2, D, END))

    # 中间：宏从编辑器流到引擎
    ax0, ax1, ay = xs[0] + cw + 14, xs[1] - 14, y0 + ch / 2
    out.append(f'<path d="M{ax0} {ay} H{ax1 - 6}" stroke="{LINE2}" stroke-width="1.5" stroke-dasharray="3 5"/>'
               f'<path d="M{ax1 - 10} {ay - 6} l8 6 l-8 6" fill="none" stroke="{INK}" stroke-width="1.5"/>')
    out.append(t((ax0 + ax1) / 2, ay - 16, T["flow"], 14, MUTED, 500, "middle"))
    for i in range(3):
        n = f"dot{i}"
        out.append(f'<rect class="{n}" x="{ax1 - 18}" y="{ay - 5}" width="10" height="10" rx="2" fill="{INK}"/>')
        t0 = 1.0 + i * .5
        css.append(anim(n, f"0%,{pct(t0, D)}{{opacity:0;transform:translateX({ax0 - ax1 + 10}px)}}{pct(t0 + .1, D)}{{opacity:1}}"
                           f"{pct(t0 + 1.1, D)}{{opacity:1;transform:none}}{pct(t0 + 1.3, D)},100%{{opacity:0;transform:none}}", D))

    # 右：引擎（没有窗口，只有一个在跑的圆点），编辑器关掉以后，热键照样把宏跑起来
    x = xs[1]
    out.append(f'<rect x="{x}" y="{y0}" width="{cw}" height="{ch}" rx="12" fill="{CARD}" stroke="{LINE}" filter="url(#sh)"/>')
    out.append(f'<circle cx="{x + 28}" cy="{y0 + 22}" r="5" fill="{OK}"/><circle class="beat" cx="{x + 28}" cy="{y0 + 22}" r="5" fill="none" stroke="{OK}" stroke-width="1.5"/>')
    css.append(f"@keyframes beat{{0%{{transform:scale(1);opacity:.9}}60%,100%{{transform:scale(2.6);opacity:0}}}}.beat{{animation:beat 1.5s infinite;transform-box:fill-box;transform-origin:50% 50%}}")
    out.append(f'<path d="M{x} {y0 + 44} H{x + cw}" stroke="{LINE}"/>')
    out.append(t(x + 28, y0 + 84, T["engine"][0], 22, INK, 700) + t(x + 30 + width(T["engine"][0], 22) + 12, y0 + 84, T["engine"][1], 17, MUTED, 500))
    body, _ = bullet_rows(x + 30, y0 + 128, T["engine_rows"], cw - 80)
    out.append(body)
    # 右上角从左往右：热键、勾、「宏照样跑」
    rx = x + cw - 28 - (70 + 34 + width(T["runs"], 15))
    out.append(f'<g class="runs"><rect x="{rx:.0f}" y="{y0 + 10}" width="70" height="26" rx="5" fill="{PAPER}" stroke="{LINE2}"/>'
               + t(rx + 35, y0 + 28, "⌃⌥⌘T", 15, INK, 500, "middle")
               + tick(rx + 92, y0 + 23, 10) + t(rx + 108, y0 + 28, T["runs"], 15, OK, 600) + "</g>")
    css.append(show("runs", 5.0, D, END))

    out.append(f'<rect x="40" y="{y0 + ch + 28}" width="{W - 80}" height="54" rx="10" fill="{MARK}"/>')
    out.append(t(64, y0 + ch + 61, T["note"], 17, INK, 500))
    label = (f'{T["editor"][0]} ({T["editor"][1]}): {"; ".join(T["editor_rows"])}. {T["engine"][0]} ({T["engine"][1]}): '
             f'{"; ".join(T["engine_rows"])}. {T["note"]}')
    return frame(W, H, "".join(css), "".join(out), label)


def macro(lang):
    T = TEXT[lang]["macro"]
    W, H, D, END = 1200, 492, 10.0, 9.2
    css, out = [], []
    y0, top, bottom = 40, 104, 404
    cols = [(40, 250), (306, 250), (572, 588)]

    # 每一栏上面一句白话说明，下面是编辑器里对应的那一栏
    heads = ["Macro Groups", "Macros", T["macros"][0]]
    for i, ((x, w), cap) in enumerate(zip(cols, T["cols"])):
        out.append(f'<g class="c{i}">' + lines(x + 2, y0 + 14, wrap(cap, 16, w - 4)[:2], 16, MUTED, 22, 500))
        out.append(f'<rect x="{x}" y="{top}" width="{w}" height="{bottom - top}" rx="12" fill="{CARD}" stroke="{LINE}" filter="url(#sh)"/>')
        out.append(t(x + 18, top + 30, heads[i], 15, INK, 700) + f'<path d="M{x} {top + 46} H{x + w}" stroke="{LINE}"/>')
        if i < 2:
            names = T["groups"] if i == 0 else T["macros"]
            for j, name in enumerate(names):
                y = top + 58 + j * 42
                if j == 0:
                    out.append(f'<rect x="{x + 8}" y="{y}" width="{w - 16}" height="34" rx="7" fill="{SKY}"/>')
                out.append(t(x + 20, y + 22, name, 15, INK if j == 0 else MUTED, 600 if j == 0 else 400))
        out.append("</g>")
        css.append(show(f"c{i}", .2 + i * .6, D, END, rise=6))
    for x in (cols[0][0] + cols[0][1], cols[1][0] + cols[1][1]):
        out.append(f'<path d="M{x + 12} {top + 75} l8 0 m-4 -4 l4 4 l-4 4" fill="none" stroke="{INK}" stroke-width="1.5"/>')

    # 第三栏：触发器（任何一个）和动作（按顺序）
    x, w = cols[2]
    rx, rw = x + 16, w - 32
    out.append(t(rx + 2, top + 72, "Triggered by any of the following:", 13, MUTED) + t(x + w - 18, top + 72, T["any"], 13, INK, 600, "end"))
    trig = [("Hot Key", "⌃⌥⌘T"), ("Time of Day", T["time"])]
    for j, (name, val) in enumerate(trig):
        y = top + 84 + j * 40
        n = f"t{j}"
        out.append(f'<rect class="{n}" x="{rx}" y="{y}" width="{rw}" height="34" rx="7" fill="{SKY if j == 0 else CARD}" stroke="{LINE}"/>')
        out.append(t(rx + 16, y + 22, name, 14, INK, 700))
        cx = rx + 24 + width(name, 14) + 8
        out.append(f'<rect x="{cx:.0f}" y="{y + 6}" width="{width(val, 13) + 20:.0f}" height="22" rx="5" fill="{PAPER}" stroke="{LINE2}"/>' + t(cx + 10, y + 22, val, 13, INK, 500))
        if j == 0:
            css.append(light(n, 2.4, "fill", CARD, SKY, D, END))
    ay = top + 186
    out.append(t(rx + 2, ay, "Will execute the following actions:", 13, MUTED) + t(x + w - 18, ay, T["order"], 13, INK, 600, "end"))
    acts = [("Activate a Specific Application", T["app"]), ("Open a URL", "https://wiki.keyboardmaestro.com/"), ("Manipulate a Window", "Move and Resize Front Window")]
    for j, (name, detail) in enumerate(acts):
        y = ay + 12 + j * 30
        n = f"a{j}"
        out.append(f'<rect class="{n}" x="{rx}" y="{y}" width="{rw}" height="26" rx="6" fill="{SKY}" stroke="{LINE}"/>')
        out.append(t(rx + 12, y + 18, str(j + 1), 12, FAINT, 700, font=MONO))
        out.append(t(rx + 32, y + 18, name, 14, INK, 700) + t(x + w - 30, y + 18, detail, 12, MUTED, 400, "end"))
        css.append(light(n, 3.2 + j * .8, "fill", CARD, SKY, D, END))

    out.append(f'<rect x="40" y="{bottom + 28}" width="{W - 80}" height="44" rx="10" fill="{MARK}"/>')
    out.append(t(64, bottom + 56, T["note"], 16, INK, 500))
    label = (f'{T["cols"][0]}: {", ".join(T["groups"])}. {T["cols"][1]}: {", ".join(T["macros"])}. {T["cols"][2]}. '
             f'Triggered by any of the following: Hot Key ⌃⌥⌘T, Time of Day {T["time"]}. Will execute the following actions: '
             + ", ".join(a for a, _ in acts) + f'. {T["note"]}')
    return frame(W, H, "".join(css), "".join(out), label)


def lessons(lang):
    T = TEXT[lang]["lessons"]
    W, H, D, END = 1200, 330, 8.0, 7.4
    css, out = [], []
    cw, gap, x0, y0, ch = 357, 24, 40, 40, 250
    out.append(f'<rect x="{x0}" y="{y0 + 146}" width="{cw * 3 + gap * 2}" height="2" fill="{LINE}"/>')
    out.append(f'<rect class="bar" x="{x0}" y="{y0 + 146}" width="{cw * 3 + gap * 2}" height="2" fill="{INK}"/>')
    css.append(anim("bar", f"0%{{transform:scaleX(0);opacity:1}}70%,{pct(END, D)}{{transform:scaleX(1);opacity:1}}100%{{transform:scaleX(1);opacity:0}}", D, "0 50%"))
    items = nav()["LESSONS"]
    for i, lesson in enumerate(items):
        title, mins = tr(lesson, "title", lang), tr(lesson, "minutes", lang)
        x, n = x0 + i * (cw + gap), f"l{i}"
        out.append(f'<g class="{n}"><rect x="{x}" y="{y0}" width="{cw}" height="{ch}" rx="12" fill="{CARD}" stroke="{INK if i == 2 else LINE}" filter="url(#sh)"/>')
        out.append(f'<rect x="{x + 22}" y="{y0 + 20}" width="28" height="28" rx="6" fill="{INK}"/>' + t(x + 36, y0 + 40, str(i + 1), 15, CARD, 700, "middle"))
        out.append(t(x + 60, y0 + 40, mins, 15, MUTED, 500))
        out.append(lines(x + 22, y0 + 84, wrap(title, 21, cw - 44), 21, INK, 29, 700))
        out.append(t(x + 22, y0 + 180, T["get_label"], 14, MUTED, 500))
        out.append(lines(x + 22, y0 + 208, wrap(T["get"][i], 17, cw - 44), 17, INK, 25, 600) + "</g>")
        css.append(show(n, .2 + i * 1.6, D, END, rise=6))
    label = " · ".join(f'{T["num"].format(n=i + 1)} {tr(it, "title", lang)} ({tr(it, "minutes", lang)}): {T["get"][i]}' for i, it in enumerate(items))
    return frame(W, H, "".join(css), "".join(out), label)


if __name__ == "__main__":
    for lang, sub in [("zh", "readme"), ("en", "en/readme")]:
        d = os.path.join(ROOT, "assets", sub)
        os.makedirs(d, exist_ok=True)
        for name, fn in [("editor-engine", editor_engine), ("macro", macro), ("lessons", lessons)]:
            with open(os.path.join(d, f"{name}.svg"), "w") as fh:
                fh.write(fn(lang))
        print("wrote", f"assets/{sub}/" + "{editor-engine,macro,lessons}.svg")
