// Wiki 条目：每条同样的结构，一句话（one）、打个比方（like）、在 Keyboard Maestro 里（here，两段）、可选的清单表（list）、常见误区（myths）、相关（see）。
// 文字里可以用 **粗体**、==荧光笔==（每条最多一处）、++粗墨线++（只给照做会出错的坑）、`代码`、[外链](https://…) 和 [站内链接](/路径/)（lib/md.js 里简单转换）。
// 写法照 docs/MAINTAINING.md 的「怎么写」：像懂行的朋友讲给你听。like 是读者认得出的一个画面；here 写成连着的话；myths 先引读者心里的那句话，再直接回答。
// 内容依据见「资料来源」：Keyboard Maestro 官方 Wiki（wiki.keyboardmaestro.com，只有英文，中英文页链同一篇）。界面上的名字照 App 的英文写，加粗。step: 对应的主线步骤；howto: 对应的 How-to。
// 论坛（forum.keyboardmaestro.com）上的经验只写成「论坛上有用户分享」并附原帖，不当作功能或步骤的出处。
// nav.js 的 GLOSSARY 用 wiki: 指向这里的 slug；加了条目，记得把对应术语指过去。

export const WIKI_GROUPS = ["基本概念", "让宏开始跑", "让宏看情况办事", "剪贴板", "整理和排错", "再往深走"];

export const WIKI = [
  // ---------- 基本概念 ----------
  {
    slug: "macro", title: "宏", group: "基本概念",
    one: "宏就是你交给 Keyboard Maestro 的一件小差事：触发器说好什么时候开始，一串动作说好具体做什么。",
    like: "像你出门前写给家里人的一张便条：「快递来了（什么时候），帮我签收，拆开看看有没有压坏，放到书桌上（做什么）。」写一次，他照着一件一件做，你不用每次再交代。宏就是这样一张便条，只是读它的是你的 Mac，而且它可以一天照做一百遍也不嫌烦。",
    here: [
      "官方的说法是，一个宏住在某个[宏组](/wiki/macro-group/)里，由一组[触发器](/wiki/trigger/)和一串[动作](/wiki/action/)组成：触发器决定它什么时候跑，动作决定它跑起来做什么。新建一个宏，点宏列表下面的 **+** 按钮；也可以点 **⊕**，它会带你起个名字、挑个宏组、选一个常用的触发器和动作，之后都还能改。建好的宏马上就能用，不用停下编辑，也不用退出编辑器。见官方的 [Quick Start](https://wiki.keyboardmaestro.com/manual/Quick_Start) 和 [Macros](https://wiki.keyboardmaestro.com/manual/Macros)。",
      "可是光建好还不够，一个宏要真的被触发，得三样都对：宏本身开着，它所在的宏组也开着，而且宏组此刻是生效的。比如这个宏组只在 Mail 里生效，你现在却在 Safari 里，那它就暂时不响应。宏列表和宏组列表下面的 **✓** 按钮就是开关。官方专门写了一页讲这件事，见 [Macro Activation](https://wiki.keyboardmaestro.com/Macro_Activation)。",
    ],
    myths: [
      "「改完宏得记得点保存。」Keyboard Maestro 里根本没有保存这一步，你改了什么，几秒以后它自己就存好了（[Quick Start](https://wiki.keyboardmaestro.com/manual/Quick_Start)）。",
      "「一个宏只能配一个热键。」一个宏可以有好几个触发器，任何一个响了它都会跑。反过来，几个宏也可以用同一个热键，按下去时 Keyboard Maestro 会弹出一个小面板问你要哪一个（[How do I](https://wiki.keyboardmaestro.com/manual/How_do_I)）。",
    ],
    see: ["trigger", "action", "macro-group"],
    step: 0, howto: "app-hotkeys",
  },
  {
    slug: "editor-engine", title: "编辑器和引擎", group: "基本概念",
    one: "Keyboard Maestro 其实是两个程序：编辑器是你写宏、改宏的那个窗口，引擎（Keyboard Maestro Engine）在后台真正替你执行宏。编辑器可以关，引擎得一直开着。",
    like: "像一家餐馆的前厅和后厨。你在前厅点菜、改菜单，点完就可以走；后厨一直有人守着，单子一来就开火。前厅关了门不影响后厨出菜，可后厨要是没人，菜单写得再好也没人做。",
    here: [
      "你在「应用程序」文件夹里打开的 Keyboard Maestro 就是编辑器，用来新建和修改宏、调偏好设置，官方说它只在你要改东西时才用，改完就退出，不需要一直开着。打开编辑器时，它会顺手把 **Keyboard Maestro Engine**（引擎）也启动起来。引擎没有窗口，只在后台干活：响应你的热键、盯着时间、跟着 App 的切换、记下剪贴板历史、显示面板，当然还有执行你的宏。你退出编辑器它照样跑，一直到你退出登录。见官方的 [Quick Start](https://wiki.keyboardmaestro.com/manual/Quick_Start)。",
      "正因为引擎要一直在，官方建议在偏好设置的 **General**（通用）里打开 **Launch Engine at Login**（登录时启动引擎），这样每次开机登录，引擎自己就起来了。要手动退出或启动引擎，用编辑器的 **File** 菜单，比如 **File ▸ Quit Engine**（退出引擎）。见官方的 [How do I](https://wiki.keyboardmaestro.com/manual/How_do_I)。",
    ],
    myths: [
      "「关掉 Keyboard Maestro 的窗口，宏就不灵了。」不会。==宏是引擎在跑，编辑器关了，只要引擎还开着，宏照样能用。==反过来，引擎没开，所有宏都不响应；要是重启以后宏都没反应，先看引擎有没有跟着启动，打开 **Launch Engine at Login** 就能一劳永逸（[Troubleshooting](https://wiki.keyboardmaestro.com/Troubleshooting#Macros_Not_Firing_After_You_Login)）。",
      "「给 Keyboard Maestro 开了权限就够了。」真正替你按键、打字的是引擎，所以系统设置的权限列表里，Keyboard Maestro Engine 那一项也要打开，见[权限](/wiki/permissions/)。",
    ],
    see: ["macro", "permissions", "status-menu"],
    step: 0,
  },
  {
    slug: "macro-group", title: "宏组", group: "基本概念",
    one: "宏组是装宏的文件夹，同时也管着里面的宏什么时候生效：在所有 App 里、只在某几个 App 里，或者要你先按一下才生效。",
    like: "像学校里各间教室的规矩。音乐教室里可以敲鼓，到了图书馆就不行；同一件事，换个地方就不算数。宏组就是给一批宏划好「在哪间教室里算数」，比如一组只在 Mail 里用的回信片段，出了 Mail 就当它们不存在，你在别处按同样的键也不会误触发。",
    here: [
      "官方说宏组像宏的文件夹，每个宏组都控制着它里面的宏什么时候生效。最常用的是按 App 来划：宏组默认在所有 App 里都可用；改成 **Available in these applications:**（只在这些 App 里可用），宏就只在你列出的 App 里生效；改成 **Available except in these applications:**（除了这些 App 都可用），就能让它在游戏这类 App 里别捣乱。还可以按窗口标题再细分。新建宏组点宏组列表下面的 **+**。Keyboard Maestro 自带一个全局宏组（Global Macro Group），它不能删、不能改名，也不能关。见 [Macro Groups](https://wiki.keyboardmaestro.com/manual/Macro_Groups)。",
      "宏组还能「按一下才生效」。比如设成 **Activated for one action when:**（按一下激活，只管一个动作），再给宏组配一个热键 ⌃⌘L（Control、Command 加 L）：按下它，组里的宏才生效，这时再按一个字母，M 打开 Mail、S 打开 Safari，按完任何一个键宏组就又失效了。这样组里的宏可以用很简单的单个字母，平时打字也不会撞上。宏组还可以显示成浮动的[面板](/wiki/palette/)，或者放进菜单栏。",
    ],
    myths: [
      "「宏组只是用来整理的文件夹。」它还是开关。一个宏组关了，或者此刻没生效，它里面的宏一个都触发不了，宏自己开着也没用（[Macro Groups](https://wiki.keyboardmaestro.com/manual/Macro_Groups)）。",
      "「想让全局宏组里的几个宏只在某个 App 里生效，就得去动全局宏组。」不用动它。官方的办法是新建一个宏组，设好只在那个 App 里可用，再把这几个宏拖进去（[Macro Groups](https://wiki.keyboardmaestro.com/manual/Macro_Groups)）。",
    ],
    see: ["macro", "palette", "smart-group"],
    step: 1,
  },
  {
    slug: "trigger", title: "触发器", group: "基本概念",
    one: "触发器就是让宏开始跑的那件事：按下一个热键、打出一串字、到了某个时间、打开某个 App、插上一个 USB 设备……",
    like: "像门铃。客人按了门铃，你才去开门；没人按，你该干嘛干嘛。一个宏可以装好几个门铃，前门一个、后门一个，哪个响了都去开门。",
    here: [
      "官方说，一个宏的任何一个触发器被触发，它就会执行。最常用的是[热键](/wiki/hot-key/)；也很常见的是[输入字符串](/wiki/typed-string/)，打出一串像缩写一样的字就跑；还可以把宏放进[面板](/wiki/palette/)或者[状态菜单](/wiki/status-menu/)，点一下就跑。除此之外，登录、睡眠和唤醒、闲置了一会儿、到了某个时间、某个 App 启动或退出、插上磁盘、接上显示器或 USB 设备、连上某个无线网络，都可以当触发器。见 [Quick Start](https://wiki.keyboardmaestro.com/manual/Quick_Start) 和 [Macro Triggers](https://wiki.keyboardmaestro.com/manual/Macro_Triggers)。",
      "加触发器的地方，是宏编辑区靠上那个绿色的 **+** 按钮。按住 ⌥（Option）再从新建触发器的菜单里选，会直接打开那个触发器的官方帮助。完整的清单在官方的 [Triggers](https://wiki.keyboardmaestro.com/Triggers) 页，用不着一次看完，遇到了再查就行。",
    ],
    myths: [
      "「设好触发器，宏在哪儿都会响应。」还要看宏组。官方写得很清楚：只有宏开着、宏组开着而且此刻生效，触发器才会让宏跑起来（[Quick Start](https://wiki.keyboardmaestro.com/manual/Quick_Start)）。",
      "「一个宏有两个触发器，得两件事都发生它才跑。」不用，任何一个触发器响了就跑。要「两件事都满足才做」，得在动作里用[条件](/wiki/condition/)来判断。",
    ],
    see: ["macro", "hot-key", "typed-string"],
    step: 2,
  },
  {
    slug: "action", title: "动作", group: "基本概念",
    one: "动作是宏一步一步做的事：打一段字、按一个键、选一个菜单、打开一个 App、摆一下窗口……一个宏把几个动作排成一串，按顺序做完。",
    like: "像菜谱上的步骤：切葱、热锅、下蛋、翻面，照着顺序一步一步来。要是锅还没热就下蛋，这道菜就砸了，所以菜谱里常有一句「等油热了再下锅」。宏里也有专门的「等一下」。",
    here: [
      "宏被触发以后，Keyboard Maestro 按顺序执行它的动作。有的动作什么都不用填，比如 **Restart Computer**（重启电脑）；有的要你说清楚，比如 **Select or Show a Menu Item**（选择或显示菜单项）得知道是哪个 App、哪个菜单。加动作点宏编辑区下面的 **+**，或者用 **Edit ▸ Insert Action by Name**（按名字插入动作）直接搜名字。每个动作右上角的 ⚙ 菜单里，有它的帮助、超时和出错时怎么办的设置。见 [Macro Actions](https://wiki.keyboardmaestro.com/manual/Macro_Actions)。",
      "动作里要填的格子分两种：文字格里可以放[令牌](/wiki/token/)，数字格里可以写[算式](/wiki/calculation/)，编辑时格子角上分别有个小小的 T 或 C。还有一点官方反复提：有些动作，Keyboard Maestro 没法知道它什么时候真正做完，就直接往下走了，于是下一步可能抢在 App 准备好之前。这时候加一个 **Pause**（暂停），或者用 **Pause Until**（暂停到……为止）等某个条件满足再往下，见 [Troubleshooting](https://wiki.keyboardmaestro.com/Troubleshooting#Timing_Between_Actions)。",
    ],
    myths: [
      "「在编辑器里点 **Try**（试一下）没问题，宏就没问题。」不一定。官方提醒，试一个动作时它是单独跑的，前面那些步骤都不做，所以要在某个 App 或窗口里起作用的动作，在编辑器里一试多半不灵。可以临时在它上面加一个 **Activate a Specific Application**（激活指定 App），两个一起选上再试。",
      "「点鼠标最直接，什么都用点的。」官方建议能不用就不用：鼠标点击很容易因为系统或 App 的一点变化就失效，还要求屏幕正好是预期的样子。能用选菜单、按按钮这类动作做到的，就别用坐标去点（[How do I](https://wiki.keyboardmaestro.com/manual/How_do_I)）。",
    ],
    see: ["macro", "token", "condition"],
    step: 3,
  },

  // ---------- 让宏开始跑 ----------
  {
    slug: "hot-key", title: "热键", group: "让宏开始跑",
    one: "热键就是按下一组键来触发宏，比如 ⌃⌥⌘T。按下去的那一下会被系统「吞掉」，不再传给前面的 App。",
    like: "像墙上的电灯开关，哪个开关管哪盏灯，按一下就亮。好的开关装在你闭着眼也摸得到的地方；热键也一样，挑一套自己记得住的规律，比记一堆零零散散的组合省心得多。",
    here: [
      "热键可以是字母、数字、符号或功能键，通常配上一个或几个修饰键：⌃（Control）、⌥（Option）、⇧（Shift）、⌘（Command）。小键盘上的数字和主键盘上的数字算不同的键。除了按下就触发，还可以设成松开时、长按、按住期间反复触发，或者连按两下、三下才触发。单独一个修饰键不能当热键，Fn 也不算修饰键。见 [Hot Key Trigger](https://wiki.keyboardmaestro.com/trigger/Hot_Key)。",
      "不管设成哪种，那个键都会被吞掉，没法再做它原来的事。所以官方建议热键要有规律，比如 Control 加字母表示插入一段文字，Control 加 Option 加字母表示打开 App，还要避开常用的命令键和系统自带的快捷键。几个宏用了同一个热键也不要紧，按下去会弹出冲突面板（Conflict Palette），按数字或者打首字母选一个就行。见 [Hot Key Trigger](https://wiki.keyboardmaestro.com/trigger/Hot_Key#Complexity) 和 [How do I](https://wiki.keyboardmaestro.com/manual/How_do_I)。",
    ],
    myths: [
      "「把 ⌘C 设成热键，复制照样能用。」不能。热键会盖过 App 菜单里的快捷键，被吞掉的 ⌘C 不会再去复制。另外，要是别的 App 也注册了同一个热键，按下去两边都会动，所以==挑一组少见的组合，比如 ⌃⌥⌘ 加一个字母==。",
      "「能设成先按 ⌥F、再按 R 的两段式热键吗？」官方说不直接支持，因为没法可靠地判断你是不是还要按第二个键。替代办法是让一个热键先激活一个只管一个动作的宏组，组里的宏再用单个字母，见[宏组](/wiki/macro-group/)。",
    ],
    see: ["trigger", "typed-string", "macro-group"],
    step: 2, howto: "app-hotkeys",
  },
  {
    slug: "typed-string", title: "输入字符串触发器", group: "让宏开始跑",
    one: "打出一串字就触发宏。最常见的用法是缩写：打出 =addr=，Keyboard Maestro 先把这几个字删掉，再换成你的整段地址。",
    like: "像你和同事约好的暗号。你在群里说一句「老规矩」，他就知道要把那份周报发过来。暗号得是平时不会随口说出来的话，不然闲聊时也会误触发。",
    here: [
      "你打的字会先照常进到当前的 App 里，所以这个触发器通常会先模拟几下删除键，把你打的那串字删掉，再执行宏里的动作。官方建议给缩写加一个固定的前缀或后缀：插入邮箱地址，别用 `em`，因为你打 them 的时候它也会触发，要用 `=em=` 这种不会无意中打出来的字。本站的例子统一用 `=addr=`、`=sig=` 这种两头带等号的写法。见 [Typed String Trigger](https://wiki.keyboardmaestro.com/trigger/Typed_String)。",
      "打错了用删除键改过来，它照样认得；想打出这串字又不想让它触发，就在中间按一下 ⇧（Shift）加空格，再删掉。点一下鼠标、切换 App、停下好几秒不打字，都会让它从头开始数。还可以设成不分大小写，或者只在一个词的开头才算数。",
    ],
    myths: [
      "「用输入字符串来打开 App、打开网页，也挺方便。」官方不建议。它的原理是先删掉你打的字，可你要是当时不在能打字的地方，比如在 Finder 里，你打的字母会去选中文件，模拟的删除键可能把那个文件扔进废纸篓。所以++只在你本来就在打字的地方用它++；打开 App 这类到处都可能用的事，交给[热键](/wiki/hot-key/)、[状态菜单](/wiki/status-menu/)或[面板](/wiki/palette/)（[FAQ](https://wiki.keyboardmaestro.com/Frequently_Asked_Questions)）。",
      "「在密码框里也能用缩写。」不能。系统不让 Keyboard Maestro 看到你在密码框里打的字，所以在大多数密码框里它不会触发。在 Keyboard Maestro 自己弹出的窗口里、在编辑器里，它也不好用，那些地方换别的触发器。",
    ],
    see: ["trigger", "hot-key", "token"],
    step: 2, howto: "text-snippets",
  },
  {
    slug: "palette", title: "面板", group: "让宏开始跑",
    one: "面板是浮在屏幕上的一小块按钮，一个按钮对应一个宏，点一下就跑。不常用、热键又记不住的宏，放在这里最合适。",
    like: "像冰箱门上贴的一排便签：「买菜」「交电费」「给妈妈打电话」，一抬眼就看到，不用记在脑子里。面板也是把宏摆在你眼前，点哪个跑哪个。",
    here: [
      "官方说有四种面板。一种是全局宏面板：给宏加上 **Global Macro Palette**（全局宏面板）触发器，它就出现在这块浮动面板上，只要有一个这样的宏正生效，面板就会出现。每个宏组也可以显示成自己的面板，比如只在某个 App 在最前面时才出来。另外两种是列出正在运行的 App 的 **Applications Palette**（应用程序面板），和热键撞车时弹出来让你挑的 **Conflict Palette**（冲突面板）。见 [Palettes](https://wiki.keyboardmaestro.com/manual/Palettes)。",
      "宏组面板怎么出现，在宏组设置里挑：按一下宏组的热键才显示，用完一个宏就收起；按一下显示、再按一下收起；或者一开始就显示着，等你按一下热键才收起。面板上的顺序，可以在宏的名字前面加两个字符和一个右括号来排，比如 `01)`，显示时这串前缀会被去掉。样式、透明度、列数、要不要显示图标，也都能调。",
    ],
    myths: [
      "「全局宏面板被我关掉了，再也找不回来了。」关掉以后，要等引擎重新启动，或者用 **Toggle Global Macro Palette**（显示或隐藏全局宏面板）这类动作，它才会再出来（[Troubleshooting](https://wiki.keyboardmaestro.com/Troubleshooting#The_Global_Floating_Palette_has_disappeared)）。",
      "「面板上的宏，随时都能用热键触发。」要看宏组怎么设。设成「显示面板」的那几种，宏只在面板显示的时候才生效，面板收起来，它们的热键也不灵；想两样都要，选开头写着 Always activated 的那几种（[Macro Groups](https://wiki.keyboardmaestro.com/manual/Macro_Groups)）。",
    ],
    see: ["macro-group", "status-menu", "trigger"],
    step: 1, howto: "palette",
  },
  {
    slug: "status-menu", title: "状态菜单", group: "让宏开始跑",
    one: "状态菜单是菜单栏右边 Keyboard Maestro 的那个图标。点开它，能运行放在里面的宏，也能看到、取消正在跑的宏。",
    like: "像电闸箱。平时你不会去碰它，可哪天哪个电器出了毛病、停不下来，你知道伸手去哪儿拉闸。宏卡住、停不下来的时候，先去菜单栏找这个图标。",
    here: [
      "给一个宏加上 **Status Menu**（状态菜单）触发器，它就会出现在这个菜单里，点一下就跑。和面板一样，这里只列出此刻生效的宏，所以一个只在某个 App 里生效的宏，只有那个 App 在前面时才出现。官方说它特别适合不常用、热键容易忘的宏，或者本来就像菜单命令的事，比如处理文件、摆窗口。菜单里还有一个 Paste 子菜单，列着最近 30 条复制过的文字，按住 ⇧（Shift）选是贴成纯文本。见 [Status Menu Trigger](https://wiki.keyboardmaestro.com/trigger/Status_Menu) 和 [Status Menu](https://wiki.keyboardmaestro.com/Status_Menu)。",
      "宏停不下来的时候，这个图标最管用：从 **Cancel**（取消）子菜单里选一个正在跑的宏，就能取消它，顺便也能看出现在有哪些宏在跑。按住 ⌃⌥⇧（Control、Option、Shift）再点这个图标，会一次取消所有正在跑的宏。打开[调试器](/wiki/debugger/)的 **Start Debugging**（开始调试）也在这里。见 [How do I](https://wiki.keyboardmaestro.com/manual/How_do_I)。",
    ],
    myths: [
      "「状态菜单里列出来的宏，都在后台跑着。」不是。官方专门解释过：列在这里的宏只是此刻可以被触发，并没有在运行。",
      "「宏从状态菜单里不见了，是不是被删了？」先看看它是不是此刻没生效。比如它的宏组只在某个 App 里可用，切到那个 App，它就回来了。",
    ],
    see: ["palette", "debugger", "macro-group"],
    step: 6, howto: "stop-macro",
  },

  // ---------- 让宏看情况办事 ----------
  {
    slug: "variable", title: "变量", group: "让宏看情况办事",
    one: "变量就是给一段文字起个名字存起来，后面的动作按名字把它拿出来用。它只装纯文字。",
    like: "像厨房里贴了标签的调料罐：「盐」「糖」，用的时候不用记它放在第几格，看标签拿就行。变量也是一个贴了名字的罐子，只是里面只能装纯文字，图片和带格式的字得放到别处。",
    here: [
      "变量不用事先声明，哪个动作第一次给它赋值，它就有了。最直接的是 **Set Variable to Text**（把变量设为文字）和 **Set Variable to Calculation**（把变量设为计算结果）；先问你一句、把你填的存进变量的 **Prompt for User Input**（提示用户输入）也很常用。名字要用字母开头，可以有字母、数字、空格和下划线，不分大小写。用的时候，文字格里写 `%Variable%名字%`，数字格里直接写名字。见 [Variables](https://wiki.keyboardmaestro.com/manual/Variables)。",
      "变量分几种，看名字的开头就知道：普通的是全局变量，存在你的 Mac 上，重启以后还在，别的宏也读得到；名字以 local 开头的只在这一个宏里有效，以 instance 开头的只在这一次运行里有效；名字以 PW 或 password 开头或结尾的是密码变量，只放在内存里，不写到硬盘上。官方建议多用 local 和 instance，因为同一个宏可能同时跑好几次，各用各的才不会互相串。全局变量可以在偏好设置的 **Variables**（变量）那一栏里看、改、删。",
    ],
    myths: [
      "「宏跑完了，变量就自己清空了。」全局变量不会，它会一直存着，直到你把它设成空的。用完的变量，尤其是存了密码或者一大段内容的，官方建议把它设成空字符串。",
      "「图片也能存进变量里。」变量只装纯文字。图片和带格式的文字，放进[命名剪贴板](/wiki/named-clipboard/)。",
    ],
    see: ["token", "calculation", "named-clipboard"],
    step: 4, howto: "ask-input",
  },
  {
    slug: "token", title: "令牌", group: "让宏看情况办事",
    one: "令牌是写在文字里的占位符，两头用 % 包着，比如 %LongDate%。宏跑到那一步时，它会被换成当时的真实内容：今天的日期、最前面的 App 叫什么、剪贴板里的字。",
    like: "像通知模板里的「亲爱的【姓名】」。模板写一次，发给谁的时候再把【姓名】换成真名。令牌就是 Keyboard Maestro 认得的那种【】，只不过换进去的东西，要到宏跑起来那一刻才知道。",
    here: [
      "几乎所有动作里的文字格都认令牌，比如 **Insert Text by Typing**（打字插入文字）、**Display Text**（显示文字）、**Set Variable to Text**（把变量设为文字）。不带参数的写成 `%令牌名%`，带参数的写成 `%令牌名%参数%`，比如 `%Variable%名字%` 就是拿出一个变量的值。名字不用背：光标放在文字格里，用 **Edit ▸ Insert Token**（插入令牌）菜单挑，或者按 ⌃⌘T（Control、Command 加 T）按名字搜。能放令牌的格子，编辑时右上角有个小小的 T。见 [Tokens](https://wiki.keyboardmaestro.com/manual/Tokens) 和完整的[令牌清单](https://wiki.keyboardmaestro.com/Tokens)。",
      "最常用的几个：`%LongDate%` 是今天的日期，`%SystemClipboard%` 是剪贴板里的文字（v8 以前叫 `%CurrentClipboard%`），`%CurrentApplication%` 是最前面那个 App 的名字。官方举的例子是用 `%FrontBrowserTitle%` 和 `%FrontBrowserURL%` 两个令牌，一下拼出当前网页的标题和网址。",
    ],
    myths: [
      "「数字格里也写 `%Variable%次数%`。」不用。数字格里写的是算式，变量名和函数都直接写，令牌是文字格里用的。真要混着用，文字格里算数用 `%Calculate%1+2%`，数字格里用令牌有 `CALCULATE` 函数（[FAQ](https://wiki.keyboardmaestro.com/Frequently_Asked_Questions)）。",
      "「我就想打出 %LongDate% 这几个字，它却变成了日期。」文字格的 ⚙ 菜单可以改成不处理令牌，这串字就会原样留着（[Tokens](https://wiki.keyboardmaestro.com/manual/Tokens)）。",
    ],
    see: ["variable", "calculation", "typed-string"],
    step: 4, howto: "insert-date",
  },
  {
    slug: "calculation", title: "计算", group: "让宏看情况办事",
    one: "大多数要填数字的格子里，可以直接写算式，还能用函数，比如「最前面那个窗口宽度的一半」。宏跑到那一步时才算出结果。",
    like: "像你跟店员说「两箱水，每箱 24 瓶」，不用自己先算成 48。你把算法告诉 Keyboard Maestro，它在要用的那一刻替你算：换了一块屏幕、窗口挪了位置，结果也跟着变。",
    here: [
      "官方说几乎所有数字格都支持计算，比如暂停的秒数可以写成 `60*Minutes`，Minutes 是一个变量。数字格一开始很小，旁边带着上下小箭头，你一打数字以外的东西它就会变宽，编辑的时候格子里会出现一个小小的 C，看到它就知道这一格能写算式。算式支持括号、优先级和十六进制，还有一大堆内置[函数](https://wiki.keyboardmaestro.com/Functions)：`SCREEN()` 拿屏幕的位置和大小，`WINDOW()` 拿窗口的，`NOW()` 拿当前时间。用 **Edit ▸ Insert Function**（插入函数）菜单挑，按住 ⌥（Option）选会打开那个函数的帮助。见 [Calculations](https://wiki.keyboardmaestro.com/manual/Calculations) 和 [Text Fields](https://wiki.keyboardmaestro.com/Text_Fields)。",
      "逗号在算式里有专门的用处：一串用逗号隔开的数字可以当成数组，窗口的位置和大小（左、上、宽、高）就是这么存的，`Frame[3]` 取第三个数，也就是宽。比较的结果是 0 或 1，所以算式也能拿来当[条件](/wiki/condition/)。",
    ],
    myths: [
      "「小数点用逗号，千位也加个逗号好看。」不行。官方说不管你用什么语言，小数一律用句点，千位不加分隔符，逗号只用来分隔数组。",
      "「函数名大小写随便写。」运算符和函数都得大写，比如 `MOD`、`SCREEN()`，这样才不会和你的变量名混在一起；也因为这个，变量名里别出现前后带空格的运算符，`A MOD B` 就不是一个合法的变量名（[Variables](https://wiki.keyboardmaestro.com/manual/Variables)）。",
    ],
    see: ["variable", "token", "condition"],
    step: 4, howto: "window-layout",
  },
  {
    slug: "condition", title: "条件", group: "让宏看情况办事",
    one: "条件是宏拿来做判断的东西：某个 App 开着没有、屏幕上有没有某张图、某个变量是不是某个值、现在按着哪个修饰键。判断完，宏就能看情况走不同的路。",
    like: "像出门前看一眼窗外：下雨就带伞，不下就不带。条件就是看的那一眼，**If Then Else**（如果……就……否则……）就是「带不带伞」的那个决定。",
    here: [
      "条件自己不做事，它总是放在流程控制的动作里用，比如 **If Then Else**、**Pause Until**（暂停到……为止）、**Until**（直到）、**While**（当……时）。这些动作开头都要你选怎么组合这组条件：任意一个成立、全部成立、一个都不成立，或者不全成立。下面再一条一条加具体的条件。见 [Conditions](https://wiki.keyboardmaestro.com/manual/Conditions)。",
      "能判断的东西很多：App、窗口、菜单项、按键和修饰键、剪贴板、变量、文字、算式、文件和路径、插着的磁盘、USB 设备、无线网络、屏幕上能不能[找到某张图](/wiki/found-image/)、OCR 认出来的字、某个像素的颜色，还有一段脚本的结果。完整的清单在官方的 [Conditions](https://wiki.keyboardmaestro.com/Conditions) 页。",
    ],
    myths: [
      "「一条条件都没加，就当它成立吧。」恰恰相反。官方特别强调，++一组条件一条都没有时，动作什么都不执行++，**If Then Else** 两边都不走；只有 **Until** 例外，会先执行一遍。",
      "「等某个窗口出来，加个固定几秒的 **Pause**（暂停）就好。」官方给的办法里，有固定时长的 **Pause**，也有 **Pause Until**，等一个条件满足了再往下走。要等的东西能用条件说清楚时，后者不用你去猜该等几秒（[Troubleshooting](https://wiki.keyboardmaestro.com/Troubleshooting#Timing_Between_Actions)）。",
    ],
    see: ["variable", "calculation", "found-image"],
    step: 4,
  },
  {
    slug: "found-image", title: "找图", group: "让宏看情况办事",
    one: "找图就是让 Keyboard Maestro 在屏幕上找一块和你给的图一样的地方。找到了可以点它、把鼠标挪过去，或者拿它当条件，看它在不在。",
    like: "像在班级合影里找你家孩子。你知道他长什么样，扫一遍就能指出来；可要是照片里有两个穿着一模一样的人，你就不知道该指哪个了。Keyboard Maestro 找图也是这样，所以它默认要求找到的那块在屏幕上是唯一的。",
    here: [
      "用得上找图的地方有好几个：**Move or Click Mouse**（移动或点击鼠标）可以对着找到的图点，**Find Image on Screen**（在屏幕上找图）把位置记下来，**Found Image**（找到图）条件判断它在不在。要找的图可以直接粘贴一张截图进去，也可以从剪贴板、命名剪贴板或文件里拿。还要设一个模糊度：因为透明和抗锯齿，屏幕上几乎没有完全一样的像素，官方说从 20% 左右开始试。v11 起，动作的 ⚙ 菜单里还有一项，能让它一直等到图出现再继续。见 [Found Image](https://wiki.keyboardmaestro.com/Found_Image)。",
      "官方的态度是：能用更高一层的动作，就别用找图，比如按按钮用 **Press a Button**（按下按钮）。找图要求屏幕正好是那个样子，最难找的是灰色的小图标和小字；把搜索范围缩到不到整个屏幕的四分之一，能找得更准。",
    ],
    myths: [
      "「测试的时候图明明就在，它却找错了地方。」先把编辑器挪开或者藏起来，因为动作里那张图本身也显示在屏幕上，可能被它自己找到。再勾上 **Display**（显示），找到的位置会在屏幕上亮出来，调模糊度时一看就明白（[Found Image](https://wiki.keyboardmaestro.com/Found_Image#Testing)）。",
      "「屏幕上有两个一样的按钮，它会点第一个。」默认不会。图在屏幕上不唯一时，动作直接失败，这样它才不会点错地方。要点其中一个，把选项改成最像的那个，或者最上、最左、最下、最右的那个。",
    ],
    see: ["condition", "action", "permissions"],
    step: 3, howto: "click-image",
  },

  // ---------- 剪贴板 ----------
  {
    slug: "clipboard-history", title: "剪贴板历史", group: "剪贴板",
    one: "系统的剪贴板只记得最后一次复制的东西。Keyboard Maestro 替你把复制过的都记下来，默认最多 200 条，过后还能挑一条再贴出来。",
    like: "像收银台下面那一叠小票存根。顾客说「刚才那笔再帮我看一下」，你不用重新算，翻出存根就行。复制了新东西，旧的不会消失，只是被压到了下面一层。",
    here: [
      "每次你在任何 App 里复制，Keyboard Maestro Engine 都会存一份。要把以前的贴出来，打开剪贴板历史切换器（Clipboard History Switcher），默认热键是 ⌃⇧⌘V（Control、Shift、Command 加 V）。这个宏放在 Keyboard Maestro 自带的 **Switcher Group**（切换器组）这个宏组里，热键可以改。在切换器里双击一条，或者选中按回车，就贴到当前位置；按住 ⇧（Shift）是贴成纯文本，按住 ⌥（Option）只放进剪贴板、不贴。⌘ 加数字直接贴第几条。见 [Clipboard History Switcher](https://wiki.keyboardmaestro.com/manual/Clipboard_History_Switcher)。",
      "切换器里还能搜索、只看图片或者收藏过的条目、把几条合成一条一起贴。要记多少条也能改，不过这是个隐藏设置，偏好设置窗口里找不到，得在终端里敲一行命令，官方的 [Preferences](https://wiki.keyboardmaestro.com/manual/Preferences#Clipboard) 页写了怎么改。某些 App 的复制你不想记，在偏好设置的 **Excluded**（排除）那一栏里把它排除掉。官方的 [Clipboards](https://wiki.keyboardmaestro.com/Clipboards) 页把 Keyboard Maestro 的几种剪贴板放在一起讲了。",
    ],
    myths: [
      "「重启以后，剪贴板历史都还在。」要看设置。官方说，只有在偏好设置的 **General**（通用）里打开了 **Save Clipboard History Between Launches**（重新启动后保留剪贴板历史），引擎退出再启动以后历史才会还原，不然每次退出引擎都会清空。",
      "「复制过的密码，也会一直留在历史里。」Keyboard Maestro 认为像密码的条目，会被遮住，排到第十条以后就删掉，也不会存到硬盘上；按住 ⌥（Option）点一下才显示。这个识别在偏好设置的 **General** 里也能关。",
    ],
    see: ["named-clipboard", "status-menu", "variable"],
    step: 5, howto: "paste-plain",
  },
  {
    slug: "named-clipboard", title: "命名剪贴板", group: "剪贴板",
    one: "命名剪贴板是起了名字、长期存着的一份内容，文字、带格式的字和图片都行。下一次复制冲不掉它，重启以后也还在。",
    like: "像抽屉里分好格的文件袋：「公司 Logo」「签名档」「常用回复」。桌面上（系统剪贴板）的东西随手就被换掉，抽屉里的不会；要用的时候，抽出来摆到桌面上就行。",
    here: [
      "官方特别说明，命名剪贴板不是真的剪贴板，更像一个存东西的地方：存一份系统剪贴板（或者别的命名剪贴板）的副本，一直留着，直到你改掉或删掉。它能存变量存不了的东西，比如带格式的签名档、图片。在偏好设置的 **Clipboards**（剪贴板）那一栏里点 **+** 新建，右上角那一行填名字，右下那一大块粘贴内容。见 [Clipboards](https://wiki.keyboardmaestro.com/Clipboards)。",
      "在宏里用它，有 **Copy to Named Clipboard**（复制到命名剪贴板）和 **Paste from Named Clipboard**（从命名剪贴板粘贴）这类动作。平时手动用，打开命名剪贴板切换器（Named Clipboard Switcher），选中一格，把当前选中的内容剪切或复制进去，或者把它贴出来，按住 ⇧（Shift）贴成纯文本。见 [Named Clipboard Switcher](https://wiki.keyboardmaestro.com/manual/Named_Clipboard_Switcher)。",
    ],
    myths: [
      "「Default Clipboard 就是系统的剪贴板。」不是。它只是 Keyboard Maestro 默认替你建好的一个命名剪贴板，名字里的 Default 只是「默认给的」意思，和其他命名剪贴板没有区别。",
      "「用了命名剪贴板，就不会动到系统剪贴板。」会动到。官方提醒，把东西放进界面、或者从界面拿出来的动作，都要经过系统剪贴板，**Copy to Named Clipboard**、**Paste from Named Clipboard**、**Insert Text by Pasting**（粘贴插入文字）都会改掉系统剪贴板里原来的东西。",
    ],
    see: ["clipboard-history", "variable"],
    step: 5,
  },

  // ---------- 整理和排错 ----------
  {
    slug: "permissions", title: "权限", group: "整理和排错",
    one: "Keyboard Maestro 要替你按键、打字、选菜单、看屏幕，macOS 就要你一项一项点头同意。最要紧的是辅助功能：它没开，热键和缩写都不灵。",
    like: "像请邻居帮你照看房子：给他大门钥匙，他能进屋浇花；想让他顺便取信，还得把信箱钥匙也给他。macOS 把每一样事都分成单独的一把钥匙，Keyboard Maestro 要做哪件事，就得拿到哪一把。",
    here: [
      "官方说，他们收到的支持邮件里大约八成和苹果的安全权限有关。Keyboard Maestro 的偏好设置里有一个 **Security**（安全）栏，把要紧的几项权限列在一起，告诉你开了没有，还能替你去向系统申请；把那里的都开好，很多问题自己就没了。辅助功能在 **系统设置 ▸ 隐私与安全性 ▸ 辅助功能**（macOS 12 和更早的版本叫「系统偏好设置」）。官方 FAQ 里讲的修法，对着的都是列表里 Keyboard Maestro Engine 那一项。见 [Troubleshooting](https://wiki.keyboardmaestro.com/manual/Troubleshooting) 和 [Preferences](https://wiki.keyboardmaestro.com/manual/Preferences)。",
      "官方也直说，苹果的权限系统从 Mojave 起一直有毛病：勾选框不出现、勾不上，或者显示勾上了其实没生效。他们给的办法是重启 Mac，退出再打开 Keyboard Maestro 或引擎，并确认 Keyboard Maestro 是用 Finder 拖进「应用程序」文件夹的。最后这一条很要紧：下载以后不用 Finder 挪一下，macOS 的 App Translocation 会让它从一个随机的位置启动，于是 **Launch Engine at Login**（登录时启动引擎）不灵了，升级新版本也会失败，因为它没法替换自己（[Troubleshooting](https://wiki.keyboardmaestro.com/Troubleshooting#App_Translocation_Security)）。",
    ],
    list: [
      ["**辅助功能**", "看到你按的热键和打的缩写，替你打字、选菜单、挪窗口。Keyboard Maestro 的很多动作都离不开它（[Troubleshooting](https://wiki.keyboardmaestro.com/Troubleshooting#Accessibility)）"],
      ["**录屏与系统录音**（旧版叫「屏幕录制」）", "看屏幕上的内容，比如用到 **Pixel**（像素）条件时会来要这项权限。官方提到 Sequoia 和 Tahoe 隔一阵会再问一次（[What's New](https://wiki.keyboardmaestro.com/manual/Whats_New)、[FAQ](https://wiki.keyboardmaestro.com/Frequently_Asked_Questions)）"],
      ["**自动化**", "用 AppleScript 控制别的 App，比如读出 Safari、Chrome 当前网页的标题和网址；Keyboard Maestro 和 Keyboard Maestro Engine 都要有（[Web Browser Tokens](https://wiki.keyboardmaestro.com/token/WebBrowserTokens)）"],
      ["日历", "让 **Create Calendar Event**（新建日历事件）动作往日历里加事件；Sonoma 起还要给完整的日历权限，不然只看得到一个日历（[Create Calendar Event](https://wiki.keyboardmaestro.com/action/Create_Calendar_Event)）"],
      ["定位服务", "Sonoma 起，读当前连着哪个无线网络要这项权限，**Wireless Network**（无线网络）触发器和条件都靠它；先跑一次 **Get Location**（获取位置）动作，系统才会来问（[Wireless Network](https://wiki.keyboardmaestro.com/trigger/Wireless_Network)、[FAQ](https://wiki.keyboardmaestro.com/Frequently_Asked_Questions)）"],
      ["通讯录", "只读你自己的那张名片，用来预填订阅入门邮件的信息，和 `%AddressBook%` 令牌；官方说它不直接读通讯录里的其他人（[FAQ](https://wiki.keyboardmaestro.com/Frequently_Asked_Questions)）"],
    ],
    listTitle: "哪一项权限管什么", listHead: ["系统设置里的那一项", "开了以后它能做什么"],
    myths: [
      "「权限明明勾上了，宏还是不灵。」官方说这正是 macOS 的毛病之一：显示勾上了，其实没生效。把 Keyboard Maestro Engine 那一项关掉再打开，或者重启一次；还不行，打开编辑器的 **Help ▸ Interactive Help**（交互式帮助），只要系统没骗它，它能替你查出一部分权限问题。",
      "「为了省事，干脆把系统的安全保护关掉。」++别这么做++。Keyboard Maestro 要的每一项权限，都能在系统设置里单独给；本站只教这种给法，不教关掉 SIP、Gatekeeper 这类保护。",
    ],
    see: ["editor-engine", "debugger", "typed-string"],
    step: 6,
  },
  {
    slug: "smart-group", title: "智能组", group: "整理和排错",
    one: "智能组是存起来的一次搜索：它自己不装宏，只把符合条件的宏列出来，比如一天之内改过的、用了某个热键的。",
    like: "像邮箱里的「未读邮件」。邮件还在原来的收件箱里，这个文件夹只是把符合条件的那些挑出来给你看；读完一封，它就自己从这里消失了。",
    here: [
      "新建智能组，点宏组那一栏下面的 **⊕** 按钮；双击一个智能组可以改它。一个智能组由几条搜索组成，宏对上其中任意一条就会列进来。搜索的写法见 [Search Strings](https://wiki.keyboardmaestro.com/manual/Search_Strings)：比如 `mod:1d` 是一天之内改过的宏，`use:1w` 是一周之内用过的，`h:` 是有热键的。见 [Smart Groups](https://wiki.keyboardmaestro.com/manual/Smart_Groups)。",
      "Keyboard Maestro 自带一个 **All Macros**（全部宏）智能组，列出你所有的宏。想找刚刚改过的那一个，选中它，再用 **View ▸ Sort Macros by ▸ Date Modified**（按修改日期排序）把最近改过的排到最上面（[How do I](https://wiki.keyboardmaestro.com/manual/How_do_I)）。",
    ],
    myths: [
      "「把宏拖进智能组，它就换了地方。」智能组只是一次搜索，宏还在它原来的宏组里，生不生效也还是那个宏组说了算。",
      "「搜索写得越多，列出来的越少。」正好相反：智能组里的几条搜索是「对上任意一条就算」，多加一条，列出来的只会更多。",
    ],
    see: ["macro-group", "macro"],
    step: 1,
  },
  {
    slug: "debugger", title: "调试器和引擎日志", group: "整理和排错",
    one: "调试器让宏一步一步地走、随时停下，你能看清它卡在了哪一步。引擎日志是引擎记的流水账，宏出错时报了什么，都写在这里。",
    like: "像看比赛录像时一帧一帧地放：正常速度下看不出谁犯了规，慢放、暂停，问题就出来了。日志则像行车记录仪，事后回放，看那一刻到底发生了什么。",
    here: [
      "打开调试器，用[状态菜单](/wiki/status-menu/)里的 **Start Debugging**（开始调试）。官方给的步骤是：勾上 **Pause New Macros**（新宏先暂停），触发你的宏，它会出现在调试窗口里，停在开头；点那个向下箭头的按钮走进第一步，再点一下走下一步。窗口里还能让它继续跑、暂停、把当前这一步连同里面套着的动作一口气走完、取消这个宏；右上角的按钮能显示这个宏最近改过的十个变量。关掉调试窗口，暂停着的宏会接着正常跑。见 [Macro Debugger](https://wiki.keyboardmaestro.com/manual/Macro_Debugger)。",
      "引擎日志是一个叫 Engine.log 的文件，用编辑器的 **Help ▸ Open Logs Folder**（打开日志文件夹）就能找到。官方建议，宏不灵时先确认引擎能发通知，不然它报了错你也看不见；再去日志里看有没有报错，日志里有记录，也说明这个宏确实被触发了。想多记点东西，在宏里加一个 **Log**（日志）动作，往这个文件里写一行。见 [Troubleshooting](https://wiki.keyboardmaestro.com/Troubleshooting)。",
    ],
    myths: [
      "「宏正跑着，我在编辑器里改一下，它马上就按新的来。」不会。宏一开始跑，引擎就拿了一份副本，你这时候改的，不影响正在跑的这一次。",
      "「在调试器里一步一步走都对，正常一跑就出错，肯定是 Keyboard Maestro 的毛病。」官方说这多半是时间的问题：一步一步走时，屏幕有时间稳定下来；正常跑时，动作抢在了前面。在出错的那一步前面加一个 **Pause**（暂停）试试（[Macro Debugger](https://wiki.keyboardmaestro.com/manual/Macro_Debugger)）。",
    ],
    see: ["status-menu", "permissions", "action"],
    step: 6, howto: "stop-macro",
  },

  // ---------- 再往深走 ----------
  {
    slug: "subroutine", title: "子程序", group: "再往深走",
    one: "子程序是一个可以被别的宏叫来用的宏：几个宏都要做的那几步，写一次放在这里，用到的地方调它，还能把参数传进去、把结果拿回来。",
    like: "像办公室里专门负责订会议室的那位同事。谁要开会都找他，告诉他时间和人数，他订好了回你一个房间号。订会议室的规矩变了，只用跟他一个人说。",
    here: [
      "从 v10 起，Keyboard Maestro 有专门的 **Subroutine**（子程序）触发器：给一个宏加上它，按名字写好要接收哪些参数、各存进哪个变量、要不要返回结果。别的宏用 **Execute a Subroutine**（执行子程序）动作来调它，填上参数的值；子程序里用 **Return Result**（返回结果）动作把结果交回去，它会存进调用的那一方指定的变量。见 [Subroutines](https://wiki.keyboardmaestro.com/Subroutines)、[Execute a Subroutine](https://wiki.keyboardmaestro.com/action/Execute_a_Subroutine) 和 [Return Result](https://wiki.keyboardmaestro.com/action/Return_Result)。",
      "不需要参数和结果的话，用 **Execute a Macro**（执行宏）直接调另一个宏也行，这也是 v10 以前的老办法：靠 `%TriggerValue%` 令牌传一个参数，用变量把结果带回来。官方举的例子，是一个把网页存成 PDF 的子程序，几个宏都能来调它。",
    ],
    myths: [
      "「参数是按名字对上的，以后随便改顺序也行。」官方说参数在内部是按顺序传的。以后在 **Subroutine** 触发器里加减参数、换参数的意思，所有调它的 **Execute a Subroutine** 动作都要跟着改；触发器里的 **Callers**（调用者）菜单能直接带你找到它们。",
      "「什么宏都能用 **Execute a Subroutine** 来调。」只有带 **Subroutine** 触发器的宏才行，别的宏用 **Execute a Macro**。",
    ],
    see: ["macro", "variable", "plug-in-action"],
    step: 7,
  },
  {
    slug: "macro-library", title: "宏库", group: "再往深走",
    one: "宏库是 Keyboard Maestro 自带的一批现成的宏，每个都有一句说明，挑中了导入进来，原样用或者照着改。",
    like: "像一本菜谱。你不用从头发明一道菜，翻到差不多的那页照着做，再按自己的口味加减点盐。",
    here: [
      "打开宏库用 **Window ▸ Macro Library**（宏库）菜单：翻一翻，点开看详细说明，把看中的插进你自己的宏里，再改改热键之类的。Keyboard Maestro 默认带的那些宏，宏库里也都有，所以不小心删掉一个，随时能从这里再装回来。见 [Macro Library](https://wiki.keyboardmaestro.com/manual/Macro_Library)。",
      "你也可以把一批宏导出成宏库文件（`.kmlibrary`）给别人，或者把别人的导入你的宏库。不过官方说，要分享宏，一般直接导出宏，或者用编辑器窗口顶上的 **Share**（分享）按钮更好。官方 Wiki 还有一页[示例宏](https://wiki.keyboardmaestro.com/Macro_Library)。",
    ],
    myths: [
      "「网上下载的宏，导进来直接跑就行。」++先看清它做什么再跑++。官方提醒，宏几乎能在你的 Mac 上做任何事，也可能造成很大的破坏，所以没核实来源、没看过它每一步之前，别执行。用 **File ▸ Import ▸ Import Macros Safely**（安全导入宏）导入时，宏默认是关着的，正好留出检查的时间（[Macros](https://wiki.keyboardmaestro.com/manual/Macros)）。",
      "「导入错了的宏库条目，在宏库里删掉就好。」现在删不掉。官方说只能先退出 Keyboard Maestro 和引擎，再去 Keyboard Maestro Libraries 文件夹里把对应的文件移走。",
    ],
    see: ["macro", "plug-in-action"],
    step: 7, howto: "share-macros",
  },
  {
    slug: "plug-in-action", title: "插件动作", group: "再往深走",
    one: "插件动作是你自己写、或者从别人那里下载来装进 Keyboard Maestro 的动作，装好以后和自带的动作一样用。",
    like: "像给电钻换一个新钻头：钻头是另外买的，装上以后，转的还是那把电钻。插件动作背后其实是一段脚本，装进来以后，你在宏里填填格子就能用它。",
    here: [
      "别人写的插件动作，官方指了两个下载的地方：Keyboard Maestro 网站上的第三方动作页，和官方论坛的插件版块。装的方法是把下载来的 `.zip` 直接拖到程序坞里的 Keyboard Maestro 图标上，++别先解压++，它会自己放进 `~/Library/Application Support/Keyboard Maestro/Keyboard Maestro Actions/` 里。装完可能要先用 **File ▸ Quit Engine**（退出引擎）退出引擎，再退出、重新打开编辑器，新动作才会出现。见 [Plug In Actions](https://wiki.keyboardmaestro.com/manual/Plug_In_Actions)。",
      "用的时候和普通动作一样插进宏里：在动作列表里选 **Third Party Plug Ins**（第三方插件）那一类，或者用 **Edit ▸ Insert Action by Name**（按名字插入动作）搜它的名字。自己写一个也可以：一个文件夹里放一份描述表单的 plist、一段脚本（AppleScript、JXA 或 Shell 脚本），再加一个可选的图标，压成 `.zip` 就行。",
    ],
    myths: [
      "「更新插件，再拖一次新的 zip 就好。」官方的步骤是先把旧的那个插件文件夹从 Keyboard Maestro Actions 文件夹里删掉或者挪走，再拖新的 zip。",
      "「插件动作都是官方审核过的。」官方没这么说过。他们的免责声明反倒写得很清楚：宏用错了会很危险，装第三方的宏尤其如此，不管它从哪里来，哪怕来自官方网站、Wiki 或论坛，跑了以后的后果都由你自己负责（[Administrative Details](https://wiki.keyboardmaestro.com/manual/Administrative_Details)）。插件跑的也是别人写的脚本，所以照样先确认来源，看清它做什么。",
    ],
    see: ["action", "macro-library", "subroutine"],
    step: 7,
  },
];
