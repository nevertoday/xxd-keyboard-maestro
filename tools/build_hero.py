#!/usr/bin/env python3
"""README 头图：一段循环播放的 SVG 动画，演一遍「按一个键，宏替你做完一串事」。

    python3 tools/build_hero.py

输出 assets/hero.svg（中文）和 assets/en/hero.svg（英文）。左边是标题和新手入门三课，右边是一个宏：
按下 ⌃⌥⌘T 四个键 → 宏卡片的 Hot Key 那一行亮起 → 三个动作一行行亮起（Activate a Specific Application、
Open a URL、Manipulate a Window），同时右下角的小屏幕上日历窗口出现、浏览器窗口打开再挪到右半边 → 宏名旁打勾。
三课跟着三个动作依次亮起，播完淡出重来。

图里的界面字是 Keyboard Maestro 自带的英文（按钮名对照 tools/km-labels.json），中文版只翻译说明文字和宏名。
不用 Keyboard Maestro 或 Stairways Software 的图标；左上角是本站自己的键帽标志（和 public/favicon.svg 同一个形状）。
每个元素自己的属性写的是播完的样子，动画只管「之前」：不播动画的地方（静态渲染、系统设了「减少动效」）看到的就是最后一帧。
配色、字体、键帽和动画的小工具也给 build_readme_svgs.py 用。课名从 src/data/nav.js 读；文字改 TEXT，时间改 T。
"""
import json
import os
import subprocess
from html import escape

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# 配色：画布接近白，一圈淡边；卡片纯白；线和次要文字用 UI Kit 的 --line、--muted；浅色块去掉灰调
PAPER, CARD, LINE, LINE2 = "#FAFAF8", "#FFFFFF", "#E9E7E4", "#D6D3CE"
INK, MUTED, FAINT = "#111111", "#6D6B67", "#9A968D"
SKY, MARK, SAGE, OK = "#E4EEFB", "#FCE6C4", "#E2F1DC", "#4F8A55"
SANS = "-apple-system,BlinkMacSystemFont,'Helvetica Neue','PingFang SC','Hiragino Sans GB','Noto Sans CJK SC','Microsoft YaHei',sans-serif"
MONO = "ui-monospace,'SF Mono',Menlo,Consolas,monospace"
REDUCE = "@media (prefers-reduced-motion:reduce){*{animation:none!important}}"
SHADOW = '<filter id="sh" x="-10%" y="-10%" width="120%" height="140%"><feDropShadow dx="0" dy="10" stdDeviation="14" flood-color="#111111" flood-opacity=".07"/></filter>'

W, H, DUR, FADE_OUT = 1200, 660, 12.0, 10.8

TEXT = {
    "zh": {
        "brand": "Keyboard Maestro 新手教程",
        "h1": ["如何爽用", "Keyboard Maestro"],
        "tag": "重复的点击和打字，交给一个键",
        "src": "对照 Keyboard Maestro 官方 Wiki · 非官方中文教程",
        "macro": "每天开工", "app": "日历", "demo": "示意",
    },
    "en": {
        "brand": "Keyboard Maestro for beginners",
        "h1": ["Get the most out of", "Keyboard Maestro"],
        "tag": "Hand the clicks and typing you repeat to one key",
        "src": "Checked against the official Keyboard Maestro wiki · unofficial guide",
        "macro": "Start my day", "app": "Calendar", "demo": "Illustration",
    },
}
URL = "https://wiki.keyboardmaestro.com/"

# 秒：四个键依次按下、一起松开；触发器亮；三个动作各自亮起（三课跟着亮）；两个窗口；浏览器挪到右半边；宏名旁打勾
T = {"keys": (.4, .6, .8, 1.1), "release": 1.8, "trigger": 1.5,
     "acts": (2.6, 4.2, 5.8), "win_a": 2.9, "win_b": 4.5, "move": (6.1, 6.9), "done": 7.4}


def nav():
    """src/data/nav.js 的 LESSONS、STEPS、HOWTO（用 node 读，和网站用的是同一份）。"""
    code = "import { LESSONS, STEPS, HOWTO } from './src/data/nav.js'; console.log(JSON.stringify({ LESSONS, STEPS, HOWTO }))"
    out = subprocess.run(["node", "--input-type=module", "-e", code], cwd=ROOT, check=True, capture_output=True, text=True)
    return json.loads(out.stdout)


def tr(item, key, lang):
    """nav.js 条目在这种语言下的字段（英文在 en: {} 里）。"""
    return item[key] if lang == "zh" else item["en"][key]


def width(s, size):
    """估一行字有多宽（苹方 / San Francisco 的大致字宽），只用来排版和折行，最后以截图为准。"""
    w = 0
    for ch in s:
        w += (1.0 if ord(ch) > 0x2e7f or ch in "⌃⌥⌘⇧" else .28 if ch == " " else .28 if ch in "iljf.,:·'" else .36 if ch in "rt" else
              .84 if ch in "MW" else .64 if ch.isupper() or ch.isdigit() else .54)
    return w * size


def txt(x, y, s, size, fill=INK, weight=400, anchor="start", font=SANS, cls=""):
    c = f' class="{cls}"' if cls else ""
    return f'<text{c} x="{x}" y="{y}" font-family="{font}" font-size="{size}" font-weight="{weight}" fill="{fill}" text-anchor="{anchor}">{escape(s)}</text>'


def pct(t, dur):
    return f"{t / dur * 100:.2f}%"


def anim(name, frames, dur, origin=None):
    o = f";transform-origin:{origin}" if origin else ""
    return f"@keyframes {name}{{{frames}}}.{name}{{animation:{name} {dur}s infinite;transform-box:fill-box{o}}}"


def show(name, t, dur=DUR, end=FADE_OUT, rise=0):
    """t 秒淡入（rise 像素从下往上），end 秒淡出。"""
    up = f";transform:translateY({rise}px)" if rise else ""
    still = ";transform:none" if rise else ""
    return anim(name, f"0%,{pct(t, dur)}{{opacity:0{up}}}{pct(t + .4, dur)},{pct(end, dur)}{{opacity:1{still}}}{pct(end + .5, dur)},100%{{opacity:0{still}}}", dur)


def light(name, t, prop, off, on, dur=DUR, end=FADE_OUT):
    """t 秒从 off 变成 on，end 秒变回去（元素自己的属性写 on）。"""
    return anim(name, f"0%,{pct(t, dur)}{{{prop}:{off}}}{pct(t + .3, dur)},{pct(end, dur)}{{{prop}:{on}}}{pct(end + .5, dur)},100%{{{prop}:{off}}}", dur)


def mark(x, y, s, bg=INK, fg=CARD):
    """本站的键帽标志（public/favicon.svg）：墨色方块，一圈细框是键面，键面上一个播放三角。s 是边长。"""
    return (f'<g transform="translate({x} {y}) scale({s / 20:g})"><rect width="20" height="20" fill="{bg}"/>'
            f'<path fill="{fg}" fill-rule="evenodd" d="M3 3H17V15H3ZM4.5 4.5V13.5H15.5V4.5Z"/><path fill="{fg}" d="M8.5 6.5V11.5L12.5 9Z"/></g>')


def keycap(x, y, s, label, cls="", size=None, cap_cls=""):
    """一个键帽：底下一条键座，上面白色的键面。(x, y) 是键面左上角，s 是边长。"""
    c, cc = (f' class="{cls}"' if cls else ""), (f' class="{cap_cls}"' if cap_cls else "")
    return (f'<rect x="{x}" y="{y + 5}" width="{s}" height="{s}" rx="{s * .18:.1f}" fill="{LINE2}"/>'
            f'<g{c}><rect{cc} x="{x}" y="{y}" width="{s}" height="{s}" rx="{s * .18:.1f}" fill="{CARD}" stroke="{INK}" stroke-width="1.5"/>'
            + txt(x + s / 2, y + s * .64, label, size or s * .42, INK, 500, "middle") + "</g>")


def tick(cx, cy, r, fill=OK, cls=""):
    c = f' class="{cls}"' if cls else ""
    return (f'<g{c}><circle cx="{cx}" cy="{cy}" r="{r}" fill="{fill}"/>'
            f'<path d="M{cx - r * .45:.1f} {cy:.1f} l{r * .32:.1f} {r * .32:.1f} l{r * .6:.1f} -{r * .62:.1f}" stroke="{CARD}" stroke-width="{r * .22:.1f}" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>')


def frame(w, h, css, body, label):
    """外框：接近白的画布、一圈淡边、圆角，和 pstack、ghostty-tint 的 README 插画一样。"""
    return (f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}" role="img" aria-label="{escape(label)}">'
            f'<style>{css}{REDUCE}</style><defs>{SHADOW}</defs>'
            f'<rect x=".5" y=".5" width="{w - 1}" height="{h - 1}" rx="22" fill="{PAPER}" stroke="{LINE}"/>{body}</svg>\n')


def window(x, y, w, h, kind):
    """小屏幕上的一个窗口：标题栏三个圆点，日历是格子，浏览器是地址栏加几行字。"""
    out = [f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="5" fill="{CARD}" stroke="{INK}" stroke-width="1.2"/>',
           f'<path d="M{x} {y + 13} H{x + w}" stroke="{LINE2}"/>']
    out += [f'<circle cx="{x + 8 + i * 7}" cy="{y + 6.5}" r="2.2" fill="{c}"/>' for i, c in enumerate(("#FF5F57", "#FEBC2E", "#28C840"))]
    if kind == "cal":
        cw, ch = (w - 16) / 4, (h - 34) / 3
        out.append(f'<rect x="{x + 8}" y="{y + 19}" width="{w * .4:.0f}" height="5" rx="2" fill="{INK}"/>')
        for r in range(3):
            for c in range(4):
                hot = (r, c) == (1, 2)
                out.append(f'<rect x="{x + 8 + c * cw + 1:.1f}" y="{y + 29 + r * ch + 1:.1f}" width="{cw - 2:.1f}" height="{ch - 2:.1f}" rx="2" '
                           f'fill="{MARK if hot else CARD}" stroke="{LINE2}" stroke-width=".8"/>')
    else:
        out.append(f'<rect x="{x + 8}" y="{y + 19}" width="{w - 16}" height="9" rx="4.5" fill="{PAPER}" stroke="{LINE2}" stroke-width=".8"/>')
        out.append(f'<rect x="{x + 10}" y="{y + 38}" width="{w * .45:.0f}" height="6" rx="2" fill="{INK}"/>')
        out += [f'<rect x="{x + 10}" y="{y + 52 + i * 10}" width="{(w - 20) * f:.0f}" height="4" rx="2" fill="{LINE2}"/>' for i, f in enumerate((1, .92, 1, .7, .85))]
    return "".join(out)


def svg(lang):
    t = TEXT[lang]
    lessons = [tr(x, "title", lang) for x in nav()["LESSONS"]]
    css, out = [], []

    # 左栏：标志、标题（第二行铺一条荧光笔）、一句话、出处、三课
    out.append(mark(64, 46, 30))
    out.append(txt(108, 69, t["brand"], 22, INK, 600))
    out.append(txt(64, 176, t["h1"][0], 54, INK, 700))
    out.append(f'<rect x="60" y="226" width="{width(t["h1"][1], 54) + 6:.0f}" height="24" fill="{MARK}"/>')
    out.append(txt(64, 246, t["h1"][1], 54, INK, 700))
    out.append(txt(64, 304, t["tag"], 24, INK, 500))
    out.append(txt(64, 340, t["src"], 17, MUTED))
    for i, title in enumerate(lessons):
        y = 396 + i * 62
        out.append(f'<rect class="n{i}" x="64" y="{y}" width="34" height="34" rx="7" fill="{INK}"/>')
        out.append(txt(81, y + 23, str(i + 1), 17, CARD, 700, "middle", MONO))
        out.append(txt(114, y + 24, title, 20, INK, 600, cls=f"l{i}"))
        css.append(light(f"n{i}", T["acts"][i], "fill", LINE2, INK) + light(f"l{i}", T["acts"][i], "fill", FAINT, INK))

    # 右栏：宏卡片
    X0, CW, Y0 = 704, 440, 40
    RX, RW = X0 + 16, CW - 32
    out.append(f'<rect x="{X0}" y="{Y0}" width="{CW}" height="372" rx="12" fill="{CARD}" stroke="{LINE}" filter="url(#sh)"/>')
    out.append(txt(RX + 4, Y0 + 28, "Global Macro Group", 13, MUTED, 500))
    out.append(txt(RX + 4, Y0 + 54, t["macro"], 21, INK, 700))
    out.append(f'<rect x="{X0 + CW - 44}" y="{Y0 + 30}" width="22" height="22" rx="5" fill="none" stroke="{LINE2}" stroke-width="1.5"/>')
    out.append(tick(X0 + CW - 33, Y0 + 41, 11, OK, "done"))
    css.append(show("done", T["done"]))
    out.append(f'<path d="M{X0} {Y0 + 72} H{X0 + CW}" stroke="{LINE}"/>')

    def row(y, h, name, t_on, body):
        out.append(f'<rect class="{name}" x="{RX}" y="{y}" width="{RW}" height="{h}" rx="8" fill="{SKY}" stroke="{LINE}"/>')
        out.append(f'<rect class="{name}b" x="{RX}" y="{y + 10}" width="3" height="{h - 20}" rx="1.5" fill="{INK}"/>')
        out.append(body)
        css.append(light(name, t_on, "fill", CARD, SKY) + show(f"{name}b", t_on))

    out.append(txt(RX + 4, Y0 + 96, "Triggered by any of the following:", 13, MUTED))
    ty = Y0 + 108
    chip_x = RX + 20 + width("Hot Key", 15) + 12
    row(ty, 46, "trg", T["trigger"],
        txt(RX + 18, ty + 28, "Hot Key", 15, INK, 700)
        + f'<rect x="{chip_x:.0f}" y="{ty + 10}" width="70" height="26" rx="5" fill="{PAPER}" stroke="{LINE2}"/>'
        + txt(chip_x + 35, ty + 28, "⌃⌥⌘T", 15, INK, 500, "middle")
        + txt(chip_x + 82, ty + 28, "is pressed", 14, MUTED))

    out.append(txt(RX + 4, Y0 + 182, "Will execute the following actions:", 13, MUTED))
    acts = [("Activate a Specific Application", t["app"]), ("Open a URL", URL), ("Manipulate a Window", "Move and Resize Front Window")]
    for i, (name, detail) in enumerate(acts):
        y = Y0 + 194 + i * 56
        row(y, 50, f"a{i}", T["acts"][i], txt(RX + 18, y + 22, name, 15, INK, 700) + txt(RX + 18, y + 40, detail, 13, MUTED))

    # 右下：四个键（⌃ ⌥ ⌘ 先按住，再按 T），一条线连到 Hot Key 那一行
    KY, KS, KG = 484, 44, 9
    ks = [(X0 + i * (KS + KG), lab) for i, lab in enumerate(("⌃", "⌥", "⌘", "T"))]
    out.append(f'<path d="M{X0 + 2 * (KS + KG) - KG / 2:.0f} {KY - 12} V{Y0 + 384}" stroke="{LINE2}" stroke-width="1.5" stroke-dasharray="3 4"/>')
    out.append(f'<circle class="pulse" cx="{X0 + 2 * (KS + KG) - KG / 2:.0f}" cy="{Y0 + 384}" r="4" fill="{INK}"/>')
    t0 = T["keys"][3]
    css.append(anim("pulse", f"0%,{pct(t0, DUR)}{{opacity:0;transform:translateY({KY - 12 - Y0 - 384}px)}}{pct(t0 + .05, DUR)}{{opacity:1}}"
                             f"{pct(T['trigger'], DUR)}{{opacity:1;transform:none}}{pct(T['trigger'] + .2, DUR)},100%{{opacity:0;transform:none}}", DUR))
    for i, (x, lab) in enumerate(ks):
        out.append(keycap(x, KY, KS, lab, f"k{i}", 20 if lab != "T" else 19, f"kc{i}"))
        p0, p1, r1 = pct(T["keys"][i], DUR), pct(T["keys"][i] + .08, DUR), pct(T["release"], DUR)
        css.append(anim(f"k{i}", f"0%,{p0}{{transform:none}}{p1},{r1}{{transform:translateY(4px)}}{pct(T['release'] + .12, DUR)},100%{{transform:none}}", DUR))
        css.append(anim(f"kc{i}", f"0%,{p0}{{fill:{CARD}}}{p1},{r1}{{fill:{MARK}}}{pct(T['release'] + .12, DUR)},100%{{fill:{CARD}}}", DUR))

    # 右下：一块小屏幕。日历先出来；浏览器打开在中间，再挪到右半边
    DX, DY, DW, DH = 930, 440, 214, 146
    out.append(f'<path d="M{DX + DW / 2 - 18} {DY + DH} l-6 22 h48 l-6 -22" fill="{CARD}" stroke="{INK}" stroke-width="1.5" stroke-linejoin="round"/>')
    out.append(f'<rect x="{DX}" y="{DY}" width="{DW}" height="{DH}" rx="9" fill="{CARD}" stroke="{INK}" stroke-width="1.5"/>')
    out.append(f'<path d="M{DX} {DY + 14} H{DX + DW}" stroke="{LINE}"/>')
    out.append(f'<circle cx="{DX + 12}" cy="{DY + 7}" r="2.5" fill="{INK}"/>')
    out.append(f'<g class="wa">{window(DX + 8, DY + 22, 96, 116, "cal")}</g>')
    out.append(f'<g class="wb"><g class="mv">{window(DX + 110, DY + 22, 96, 116, "web")}</g></g>')
    css.append(show("wa", T["win_a"], rise=6) + show("wb", T["win_b"], rise=6))
    m0, m1 = T["move"]
    css.append(anim("mv", f"0%,{pct(m0, DUR)}{{transform:translate(-56px,0)}}{pct(m1, DUR)},100%{{transform:none}}", DUR))
    out.append(txt(W - 56, H - 30, t["demo"], 13, FAINT, 400, "end"))

    label = f'{" ".join(t["h1"])}: ⌃⌥⌘T → {" → ".join(a for a, _ in acts)} · ' + " · ".join(lessons)
    return frame(W, H, "".join(css), "".join(out), label)


if __name__ == "__main__":
    for lang, sub in [("zh", ""), ("en", "en")]:
        d = os.path.join(ROOT, "assets", sub)
        os.makedirs(d, exist_ok=True)
        with open(os.path.join(d, "hero.svg"), "w") as fh:
            fh.write(svg(lang))
        print(f"wrote assets/{sub + '/' if sub else ''}hero.svg")
