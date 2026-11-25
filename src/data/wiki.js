// Wiki 条目：每条同样的结构，一句话（one）、打个比方（like）、在 Keyboard Maestro 里（here，两段）、可选的清单表（list）、常见误区（myths）、相关（see）。
// 文字里可以用 **粗体**、==荧光笔==（每条最多一处）、++粗墨线++（只给照做会出错的坑）、`代码`、[外链](https://…) 和 [站内链接](/路径/)（lib/md.js 里简单转换）。
// 写法照 docs/MAINTAINING.md 的「怎么写」：像懂行的朋友讲给你听。like 是读者认得出的一个画面；here 写成连着的话；myths 先引读者心里的那句话，再直接回答。
// 内容依据见「资料来源」：Keyboard Maestro 官方 Wiki（wiki.keyboardmaestro.com，只有英文，中英文页链同一篇）。界面上的名字照 App 的英文写，加粗。step: 对应的主线步骤；howto: 对应的 How-to。
// 论坛（forum.keyboardmaestro.com）上的经验只写成「论坛上有用户分享」并附原帖，不当作功能或步骤的出处。
// 骨架阶段还没有条目。nav.js 的 GLOSSARY 已经用 wiki: 写好了每个术语要指向的 slug，写条目时照那些 slug 建。
//
// 一条的样子：
//   { slug: "macro", title: "宏", group: "基本概念", one: "…", like: "…", here: ["…", "…"], myths: ["「…」…"], see: ["trigger"], step: 0, howto: "app-hotkeys" }

export const WIKI_GROUPS = [];

export const WIKI = [];
