// English Wiki entries: same slugs and structure as wiki.js. Only the text fields; slug/see/step/howto come from wiki.js.
// Same voice as the Chinese (docs/MAINTAINING.md): a friend who knows the app, explaining it plainly. `like` is a picture the reader recognizes,
// `here` is connected sentences, and each myth quotes what the reader might think, then answers it. At most one ==highlight== per entry.
// Site links point at /en/…; official links point at wiki.keyboardmaestro.com. UI labels in bold, exactly as the app shows them.
export const WIKI_GROUPS_EN = {
  "基本概念": "Basics",
  "让宏开始跑": "Ways to start a macro",
  "让宏看情况办事": "Macros that adapt",
  "剪贴板": "The clipboard",
  "整理和排错": "Organizing and troubleshooting",
  "再往深走": "Going further",
};

export const WIKI_EN = {
  // ---------- Basics ----------
  "macro": {
    title: "Macro",
    one: "A macro is one small job you hand to Keyboard Maestro: its triggers say when to start, and a list of actions says what to do.",
    like: "Think of the note you leave for someone at home before you go out: \"When the parcel comes (when), sign for it, check it isn't damaged and put it on my desk (what).\" You write it once and they follow it step by step without you explaining again. A macro is that note, except your Mac reads it, and it'll happily follow it a hundred times a day.",
    here: [
      "Officially, a macro lives in a [macro group](/en/wiki/macro-group/) and is made of a set of [triggers](/en/wiki/trigger/) and a list of [actions](/en/wiki/action/). The triggers decide when it runs; the actions decide what it does. To make one, click the **+** button under the Macros list, or click **⊕**, which walks you through a name, a macro group and a common trigger and action, all of which you can change later. A new macro works right away: you don't need to stop editing or quit the editor. See [Quick Start](https://wiki.keyboardmaestro.com/manual/Quick_Start) and [Macros](https://wiki.keyboardmaestro.com/manual/Macros).",
      "Building it isn't quite enough, though. For a macro to fire, three things have to be true: the macro is enabled, its macro group is enabled, and the group is active right now. If the group only works in Mail and you're in Safari, the macro waits. The **✓** button under the macros and groups lists is the switch. The official wiki has a whole page on this: [Macro Activation](https://wiki.keyboardmaestro.com/Macro_Activation).",
    ],
    myths: [
      "\"I need to remember to save my macro.\" There's no save step in Keyboard Maestro at all. Whatever you change is saved a few seconds later on its own ([Quick Start](https://wiki.keyboardmaestro.com/manual/Quick_Start)).",
      "\"A macro can only have one hot key.\" A macro can have several triggers, and any one of them starts it. It works the other way too: several macros can share a hot key, and when you press it Keyboard Maestro pops up a small palette asking which one you meant ([How do I](https://wiki.keyboardmaestro.com/manual/How_do_I)).",
    ],
  },
  "editor-engine": {
    title: "Editor and Engine",
    one: "Keyboard Maestro is really two programs. The editor is the window where you write and change macros; the Engine (Keyboard Maestro Engine) runs in the background and actually performs them. You can quit the editor, but the Engine should always be running.",
    like: "Picture a restaurant's dining room and its kitchen. You order and change the menu in the dining room, then you can leave; the kitchen is always staffed and starts cooking as soon as an order arrives. Closing the dining room doesn't stop the kitchen, but if nobody's in the kitchen, the best menu in the world won't get cooked.",
    here: [
      "The Keyboard Maestro you open from your Applications folder is the editor. You use it to create and change macros and set preferences, and the official wiki says you only need it while you're making changes, then you quit it. Launching the editor also launches **Keyboard Maestro Engine**. The Engine has no window and works in the background: it responds to your hot keys, watches the time, tracks applications, keeps your clipboard history, shows palettes and, of course, runs your macros. It keeps going after you quit the editor, until you log out. See [Quick Start](https://wiki.keyboardmaestro.com/manual/Quick_Start).",
      "Because the Engine needs to be there all the time, the official advice is to turn on **Launch Engine at Login** in the **General** preferences, so the Engine starts by itself every time you log in. To quit or launch the Engine by hand, use the editor's **File** menu, for example **File ▸ Quit Engine**. See [How do I](https://wiki.keyboardmaestro.com/manual/How_do_I).",
    ],
    myths: [
      "\"If I close the Keyboard Maestro window, my macros stop working.\" They don't. ==The Engine runs your macros, so with the editor closed they keep working as long as the Engine is running.== The flip side: with the Engine off, nothing fires. If none of your macros respond after a restart, check whether the Engine started, and turn on **Launch Engine at Login** so you never have to think about it again ([Troubleshooting](https://wiki.keyboardmaestro.com/Troubleshooting#Macros_Not_Firing_After_You_Login)).",
      "\"Giving Keyboard Maestro permission is enough.\" The Engine is what presses keys and types for you, so the Keyboard Maestro Engine entry in the permission lists needs to be on too. See [Permissions](/en/wiki/permissions/).",
    ],
  },
  "macro-group": {
    title: "Macro group",
    one: "A macro group is a folder of macros that also decides when they're active: in every app, only in a few apps, or only after you switch the group on.",
    like: "Think of the rules in different rooms at school. You can bang a drum in the music room but not in the library; the same thing counts in one room and not in another. A macro group draws that line for a set of macros. A group of reply snippets that only works in Mail simply doesn't exist outside Mail, so pressing the same keys elsewhere won't set anything off.",
    here: [
      "Officially, macro groups are like folders, and each group controls when the macros inside it are active. The most common way to split them is by app. By default a group is available in all applications; switch it to **Available in these applications:** and its macros only work in the apps you list, or to **Available except in these applications:** to keep them out of, say, your games. You can narrow it further by window title. To make a group, click **+** under the Groups list. Keyboard Maestro comes with a Global Macro Group, and you can't delete, rename or disable it. See [Macro Groups](https://wiki.keyboardmaestro.com/manual/Macro_Groups).",
      "A group can also wait for you to switch it on. Set it to **Activated for one action when:** and give the group a hot key, say ⌃⌘L (Control, Command and L). Press it and the group's macros come alive; now a single letter does the job, M for Mail, S for Safari, and after any key the group goes quiet again. That lets the macros inside use plain single letters without getting in the way of normal typing. A group can also show up as a floating [palette](/en/wiki/palette/) or in the menu bar.",
    ],
    myths: [
      "\"A macro group is just a folder for tidying up.\" It's a switch too. If a group is disabled, or not active right now, none of its macros can fire, even ones that are enabled themselves ([Macro Groups](https://wiki.keyboardmaestro.com/manual/Macro_Groups)).",
      "\"To make a few macros in the Global Macro Group work only in one app, I'll have to change the Global Macro Group.\" Leave it alone. The official way is to make a new group, set it to be available only in that app, and drag those macros into it ([Macro Groups](https://wiki.keyboardmaestro.com/manual/Macro_Groups)).",
    ],
  },
  "trigger": {
    title: "Trigger",
    one: "A trigger is what starts a macro: pressing a hot key, typing a string, a time of day, an app launching, plugging in a USB device…",
    like: "It's a doorbell. When a visitor rings, you go to the door; when nobody does, you carry on with your day. A macro can have several doorbells, one at the front and one at the back, and whichever rings, you answer.",
    here: [
      "The official wiki puts it simply: a macro runs when any of its triggers fires. The most common is a [hot key](/en/wiki/hot-key/). Almost as common is a [typed string](/en/wiki/typed-string/), which runs the macro when you type something like an abbreviation. You can also put a macro in a [palette](/en/wiki/palette/) or the [status menu](/en/wiki/status-menu/) and click it. Beyond those, logging in, sleeping and waking, going idle, a time of day, an app launching or quitting, a disk being mounted, a monitor or USB device being connected, or joining a wireless network can all be triggers. See [Quick Start](https://wiki.keyboardmaestro.com/manual/Quick_Start) and [Macro Triggers](https://wiki.keyboardmaestro.com/manual/Macro_Triggers).",
      "You add a trigger with the green **+** button near the top of the macro. Hold ⌥ (Option) while choosing from the new trigger menu and you get the official help for that trigger instead. The full list is on the official [Triggers](https://wiki.keyboardmaestro.com/Triggers) page; there's no need to read it all, just look things up when you need them.",
    ],
    myths: [
      "\"Once a macro has a trigger, it responds everywhere.\" Its macro group gets a say. The official wiki is clear: a trigger only runs the macro if the macro is enabled and its group is enabled and active right now ([Quick Start](https://wiki.keyboardmaestro.com/manual/Quick_Start)).",
      "\"With two triggers, both things have to happen before it runs.\" No, any one trigger is enough. If you want something done only when two things are both true, check for that inside the macro with a [condition](/en/wiki/condition/).",
    ],
  },
  "action": {
    title: "Action",
    one: "An action is one step a macro takes: typing some text, pressing a key, choosing a menu item, opening an app, moving a window… A macro lines up a few actions and works through them in order.",
    like: "Like the steps in a recipe: chop the onion, heat the pan, crack the egg, flip it. Do them in order. Crack the egg before the pan is hot and breakfast is ruined, which is why recipes say \"wait until the oil is hot\". Macros have their own way of waiting too.",
    here: [
      "When a macro fires, Keyboard Maestro performs its actions in order. Some need nothing from you, like **Restart Computer**; others need details, like **Select or Show a Menu Item**, which has to know the app and the menu. Add an action with the **+** button under the macro, or search for it by name with **Edit ▸ Insert Action by Name**. The ⚙ menu at the top right of each action has its help, plus its timeout and what to do if it fails. See [Macro Actions](https://wiki.keyboardmaestro.com/manual/Macro_Actions).",
      "The boxes you fill in come in two kinds: text fields take [tokens](/en/wiki/token/) and numeric fields take [calculations](/en/wiki/calculation/), and while you edit, a small T or C in the corner tells you which is which. One thing the official wiki keeps coming back to: for some actions, Keyboard Maestro can't tell when they've really finished, so it moves straight on, and the next step can arrive before the app is ready. That's when you add a **Pause**, or a **Pause Until** that waits for a condition before carrying on. See [Troubleshooting](https://wiki.keyboardmaestro.com/Troubleshooting#Timing_Between_Actions).",
    ],
    myths: [
      "\"It worked when I clicked **Try** in the editor, so the macro's fine.\" Not necessarily. The official wiki points out that trying an action runs it on its own, without the steps before it, so an action meant for a particular app or window will probably not work when tried from the editor. Put an **Activate a Specific Application** action above it for the moment, select both, and try them together.",
      "\"Clicking the mouse is the most direct, so I'll click everything.\" The official advice is to avoid it when you can. Mouse clicks break easily when the system or an app changes a little, and they need the screen to look exactly as expected. If choosing a menu item or pressing a button can do the job, use that rather than clicking at coordinates ([How do I](https://wiki.keyboardmaestro.com/manual/How_do_I)).",
    ],
  },

  // ---------- Ways to start a macro ----------
  "hot-key": {
    title: "Hot key",
    one: "A hot key fires a macro when you press a key combination, like ⌃⌥⌘T. The system swallows that keypress, so it never reaches the app in front.",
    like: "It's a light switch: each switch on the wall runs one lamp, and one press turns it on. Good switches sit where you can find them with your eyes closed. Hot keys work the same way, and a pattern you can remember beats a pile of unrelated combinations.",
    here: [
      "A hot key can be a letter, number, symbol or function key, usually with one or more modifiers: ⌃ (Control), ⌥ (Option), ⇧ (Shift) and ⌘ (Command). The number pad counts as different keys from the numbers on the main keyboard. Besides firing when pressed, a hot key can fire when released, when long pressed, repeatedly while held down, or when tapped twice or three times. A modifier on its own can't be a hot key, and Fn isn't a modifier. See [Hot Key Trigger](https://wiki.keyboardmaestro.com/trigger/Hot_Key).",
      "Whichever you choose, the key gets swallowed and can't do its usual job. So the official advice is to be consistent, for example Control plus a letter to insert text and Control-Option plus a letter to open an app, and to stay clear of common command keys and the system's own shortcuts. If several macros end up with the same hot key, that's fine: pressing it brings up the Conflict Palette, and you pick one with a number or its first letter. See [Hot Key Trigger](https://wiki.keyboardmaestro.com/trigger/Hot_Key#Complexity) and [How do I](https://wiki.keyboardmaestro.com/manual/How_do_I).",
    ],
    myths: [
      "\"I can make ⌘C a hot key and still copy.\" You can't. Hot keys override the shortcuts in an app's menus, and a swallowed ⌘C won't copy anything. Also, if another app registers the same hot key, both things happen when you press it, so ==pick an unusual combination, like ⌃⌥⌘ plus a letter==.",
      "\"Can I have a two-step hot key, like ⌥F and then R?\" The official wiki says it isn't directly supported, because there's no reliable way to tell whether you're about to press a second key. Instead, have one hot key activate a macro group for one action, and give the macros in that group single letters. See [Macro group](/en/wiki/macro-group/).",
    ],
  },
  "typed-string": {
    title: "Typed string trigger",
    one: "This trigger fires a macro when you type a string. The classic use is an abbreviation: type =addr=, and Keyboard Maestro deletes those characters and puts your whole address in their place.",
    like: "It's like a code word you agree on with a coworker. Say \"the usual\" in the team chat and they know to send over that weekly report. The code word has to be something you'd never say by accident, or ordinary chat would set it off.",
    here: [
      "What you type goes to the current app as normal first, so this trigger usually simulates a few presses of the delete key to remove the string before running the macro. The official advice is to give your strings a consistent prefix and/or suffix. For your email address, don't use `em`, which would also fire when you type \"them\"; use something like `=em=` that you'll never type by accident. This site's examples all use the same style, with an equals sign at each end: `=addr=`, `=sig=`. See [Typed String Trigger](https://wiki.keyboardmaestro.com/trigger/Typed_String).",
      "If you fix a typo with the delete key, it still counts. To type the string without firing the macro, type Shift-Space in the middle and delete it. Clicking the mouse, switching apps or pausing for more than a few seconds all make it start counting again. You can also have it ignore case, or only match at the start of a word.",
    ],
    myths: [
      "\"Typed strings are handy for opening apps and web pages too.\" The official wiki advises against it. The trigger works by deleting what you typed, and if you're not somewhere you can type, say in the Finder, your letters select a file and the simulated delete can move that file to the Trash. So ++only use it where you're already typing text++, and give open-an-app jobs, which you might want from anywhere, to a [hot key](/en/wiki/hot-key/), the [status menu](/en/wiki/status-menu/) or a [palette](/en/wiki/palette/) ([FAQ](https://wiki.keyboardmaestro.com/Frequently_Asked_Questions)).",
      "\"My abbreviations work in password fields too.\" They don't. The system won't let Keyboard Maestro see what you type in a password field, so typed strings won't fire in most of them. They also don't work well in Keyboard Maestro's own pop-up windows or in the editor itself; use a different trigger there.",
    ],
  },
  "palette": {
    title: "Palette",
    one: "A palette is a small floating panel of buttons on screen, one per macro: click a button and its macro runs. It's the right home for macros you don't use often and whose hot keys you'd forget.",
    like: "Like the notes stuck on the fridge door: \"groceries\", \"pay the power bill\", \"call Mom\". You see them every time you look up, so you don't have to remember them. A palette puts your macros in front of you the same way, and you click the one you want.",
    here: [
      "The official wiki lists four kinds. The Global Macro Palette shows every active macro that has the **Global Macro Palette** trigger, and appears whenever at least one such macro is active. Any macro group can be shown as its own palette, for example only while a certain app is in front. The other two are the **Applications Palette**, which lists your running apps, and the **Conflict Palette**, which pops up when a hot key matches more than one macro so you can choose. See [Palettes](https://wiki.keyboardmaestro.com/manual/Palettes).",
      "How a macro group's palette appears is set in the group: shown when you press the group's hot key and gone after one macro, shown and hidden by pressing the hot key, or shown from the start until you press the hot key. To order the buttons, start each macro's name with two characters and a closing parenthesis, like `01)`; the prefix is removed when the name is shown. You can also change the style, opacity, number of columns and whether icons appear.",
    ],
    myths: [
      "\"I closed the Global Macro Palette and now it's gone for good.\" Once closed, it stays away until the Engine is relaunched or you show it again with an action like **Toggle Global Macro Palette** ([Troubleshooting](https://wiki.keyboardmaestro.com/Troubleshooting#The_Global_Floating_Palette_has_disappeared)).",
      "\"Macros on a palette can always be fired by their hot keys.\" That depends on the group. With the palette options, the macros are active only while the palette is showing, so once it's hidden their hot keys don't work either. If you want both, choose one of the options that begin with Always activated ([Macro Groups](https://wiki.keyboardmaestro.com/manual/Macro_Groups)).",
    ],
  },
  "status-menu": {
    title: "Status menu",
    one: "The status menu is Keyboard Maestro's icon on the right side of the menu bar. Open it to run the macros you've put there, and to see and cancel the ones that are running.",
    like: "It's the fuse box. You don't touch it on a normal day, but when something won't switch off, you know where to reach. When a macro gets stuck or won't stop, the menu bar icon is the first place to go.",
    here: [
      "Give a macro the **Status Menu** trigger and it appears in this menu, ready to run with a click. As with palettes, only macros that are active right now are listed, so a macro that only works in one app shows up only while that app is in front. The official wiki says the status menu suits macros you rarely use and whose hot keys you'd forget, or jobs that feel like menu commands anyway, like processing files or arranging windows. There's also a Paste submenu with your 30 most recent text clippings; hold ⇧ (Shift) to paste as plain text. See [Status Menu Trigger](https://wiki.keyboardmaestro.com/trigger/Status_Menu) and [Status Menu](https://wiki.keyboardmaestro.com/Status_Menu).",
      "When a macro won't stop, this icon is your friend. Choose a running macro from the **Cancel** submenu to cancel it, which also shows you what's running at the moment. Hold ⌃⌥⇧ (Control, Option, Shift) and click the icon to cancel every running macro at once. **Start Debugging**, which opens the [debugger](/en/wiki/debugger/), is here too. See [How do I](https://wiki.keyboardmaestro.com/manual/How_do_I).",
    ],
    myths: [
      "\"Every macro listed in the status menu is running in the background.\" No. The official wiki makes a point of this: the macros listed there are available to run right now, not running.",
      "\"My macro vanished from the status menu. Did it get deleted?\" First check whether it's just not active right now. If its group only works in one app, switch to that app and it comes back.",
    ],
  },

  // ---------- Macros that adapt ----------
  "variable": {
    title: "Variable",
    one: "A variable is a piece of text with a name, stored so later actions can use it by that name. It holds plain text only.",
    like: "Like labelled spice jars in a kitchen: \"salt\", \"sugar\". You don't need to remember which shelf they're on; you read the label. A variable is a labelled jar too, but it only holds plain text. Pictures and styled text go somewhere else.",
    here: [
      "You don't declare variables. The first action that gives one a value creates it. The most direct are **Set Variable to Text** and **Set Variable to Calculation**, and **Prompt for User Input**, which asks you a question and stores the answer in a variable, is a favorite. Names start with a letter and can contain letters, numbers, spaces and underscores, and case doesn't matter. To use one, write `%Variable%Name%` in a text field, or just the name in a numeric field. See [Variables](https://wiki.keyboardmaestro.com/manual/Variables).",
      "There are a few kinds, and the start of the name tells you which. Ordinary variables are global: they're stored on your Mac, survive a restart, and other macros can read them. Names starting with local work only inside that one macro, and names starting with instance only for that one run. Names that start or end with PW or password are password variables, kept in memory and never written to disk. The official advice is to prefer local and instance, because the same macro can be running more than once at the same time, and separate variables keep the runs from tripping over each other. You can see, change and delete global variables in the **Variables** preferences.",
    ],
    myths: [
      "\"When the macro finishes, its variables clear themselves.\" Global variables don't. They stay until you set them to empty. When you're done with one, especially one holding a password or a lot of text, the official advice is to set it to the empty string.",
      "\"I can store a picture in a variable.\" Variables hold plain text only. Pictures and styled text go in a [named clipboard](/en/wiki/named-clipboard/).",
    ],
  },
  "token": {
    title: "Token",
    one: "A token is a placeholder in text, wrapped in percent signs, like %LongDate%. When the macro reaches that step, it's replaced with what's true at that moment: today's date, the name of the app in front, the text on the clipboard.",
    like: "Like the \"Dear [Name]\" in a letter template. You write the template once and swap in the real name when you send it. Tokens are the brackets Keyboard Maestro understands, except that what goes in them isn't known until the macro runs.",
    here: [
      "Almost every text field in an action understands tokens, for example in **Insert Text by Typing**, **Display Text** and **Set Variable to Text**. A token without a parameter looks like `%TokenName%`, and one with a parameter like `%TokenName%Parameter%`; `%Variable%Name%` gets the value of a variable. You don't have to memorize them. Put the cursor in a text field and choose from the **Edit ▸ Insert Token** menu, or press ⌃⌘T (Control, Command and T) to search by name. Fields that take tokens show a small T in the top right corner while you edit. See [Tokens](https://wiki.keyboardmaestro.com/manual/Tokens) and the full [token list](https://wiki.keyboardmaestro.com/Tokens).",
      "A few you'll use a lot: `%LongDate%` is today's date, `%SystemClipboard%` is the text on the clipboard (called `%CurrentClipboard%` before v8), and `%CurrentApplication%` is the name of the app in front. The official example uses `%FrontBrowserTitle%` and `%FrontBrowserURL%` together to build a link with the current web page's title and address.",
    ],
    myths: [
      "\"In a numeric field I'll write `%Variable%Count%` too.\" No need. Numeric fields take calculations, where you write variable names and functions as they are; tokens are for text fields. If you do need to mix them, use `%Calculate%1+2%` to do arithmetic in a text field, and the `CALCULATE` function to use a token in a numeric one ([FAQ](https://wiki.keyboardmaestro.com/Frequently_Asked_Questions)).",
      "\"I just want to type the characters %LongDate%, but it keeps turning into a date.\" The text field's ⚙ menu can switch token processing off, and the characters stay as they are ([Tokens](https://wiki.keyboardmaestro.com/manual/Tokens)).",
    ],
  },
  "calculation": {
    title: "Calculation",
    one: "In almost any box that wants a number, you can type a formula instead, functions included, like \"half the width of the front window\". The result is worked out when the macro reaches that step.",
    like: "It's like telling a shop assistant \"two cases of water, 24 bottles a case\" instead of working out 48 yourself. You give Keyboard Maestro the method and it does the sum the moment it's needed, so if you switch screens or move the window, the answer follows.",
    here: [
      "The official wiki says calculations work in almost every numeric field: a pause, for example, can be `60*Minutes`, where Minutes is a variable. Numeric fields start small with little up and down arrows and widen as soon as you type anything that isn't a number, and while you edit one, a small C shows in the field, which is how you know it takes a calculation. Formulas support brackets, precedence and hexadecimal, plus a long list of built-in [functions](https://wiki.keyboardmaestro.com/Functions): `SCREEN()` for a screen's position and size, `WINDOW()` for a window's, `NOW()` for the current time. Pick one from the **Edit ▸ Insert Function** menu; hold ⌥ (Option) while choosing to open its help. See [Calculations](https://wiki.keyboardmaestro.com/manual/Calculations) and [Text Fields](https://wiki.keyboardmaestro.com/Text_Fields).",
      "Commas have a special job in calculations: a list of numbers separated by commas works as an array. That's how a window's position and size (left, top, width, height) are stored, and `Frame[3]` takes the third number, the width. Comparisons give 0 or 1, so a calculation can also serve as a [condition](/en/wiki/condition/).",
    ],
    myths: [
      "\"I'll use a decimal comma, and a comma for thousands so it's easier to read.\" You can't. The official wiki says that whatever your language, decimals always use a full stop, thousands get no separator, and commas only separate the items of an array.",
      "\"Function names can be in any case.\" Operators and functions must be uppercase, like `MOD` and `SCREEN()`, so they don't get mixed up with your variable names. For the same reason, a variable name shouldn't contain an operator with spaces around it: `A MOD B` isn't a valid variable name ([Variables](https://wiki.keyboardmaestro.com/manual/Variables)).",
    ],
  },
  "condition": {
    title: "Condition",
    one: "A condition is something a macro checks: whether an app is running, whether an image is on screen, whether a variable has a certain value, which modifier keys are held down. After checking, the macro can take a different path depending on the answer.",
    like: "Like glancing out of the window before you leave: if it's raining you take an umbrella, if not you don't. The condition is the glance, and **If Then Else** is the umbrella decision.",
    here: [
      "Conditions don't do anything on their own. They always sit inside a flow control action, such as **If Then Else**, **Pause Until**, **Until** or **While**. Each of these starts by asking how to combine its conditions: any of them true, all of them true, none of them true, or not all of them true. Then you add the specific conditions underneath. See [Conditions](https://wiki.keyboardmaestro.com/manual/Conditions).",
      "There's a lot you can check: apps, windows, menu items, keys and modifiers, the clipboard, variables, text, calculations, files and paths, mounted disks, USB devices, wireless networks, whether an [image is found](/en/wiki/found-image/) on screen, text read by OCR, the color of a pixel, and the result of a script. The full list is on the official [Conditions](https://wiki.keyboardmaestro.com/Conditions) page.",
    ],
    myths: [
      "\"If I don't add any conditions, it'll just count as true.\" The opposite. The official wiki stresses that ++with no conditions at all, the action runs nothing++: neither side of **If Then Else** runs. The one exception is **Until**, which runs its actions once.",
      "\"To wait for a window, I'll add a **Pause** of a few seconds.\" The fixes the official wiki suggests include a fixed **Pause** and **Pause Until**, which waits for a condition to become true. When you can describe what you're waiting for as a condition, the second one saves you guessing how many seconds is enough ([Troubleshooting](https://wiki.keyboardmaestro.com/Troubleshooting#Timing_Between_Actions)).",
    ],
  },
  "found-image": {
    title: "Found image",
    one: "Found image means Keyboard Maestro searching the screen for a spot that matches a picture you give it. Once found, a macro can click it, move the mouse there, or use it as a condition to check whether it's showing.",
    like: "Like finding your child in a class photo. You know what they look like, so one glance and you can point. But if two kids are dressed exactly alike, you can't tell which to point at. Keyboard Maestro has the same problem, so by default it wants the match to be unique on screen.",
    here: [
      "Several things use a found image: **Move or Click Mouse** can click on it, **Find Image on Screen** records where it is, and the **Found Image** condition checks whether it's there. You can paste a screenshot into the action as the image to find, or take it from the clipboard, a named clipboard or a file. You also set a fuzziness: because of transparency and anti-aliasing, hardly anything on screen matches pixel for pixel, and the official wiki suggests starting around 20%. From v11, the action's ⚙ menu has an option to wait until the image appears. See [Found Image](https://wiki.keyboardmaestro.com/Found_Image).",
      "The official stance is to use a higher-level action when you can, like **Press a Button** for pressing a button. A found image needs the screen to look exactly right, and the hardest things to find are small grey icons and small text. Limiting the search to less than a quarter of the screen makes it more accurate.",
    ],
    myths: [
      "\"The image is right there when I test, but it finds the wrong spot.\" Move or hide the editor first: the image inside the action is on screen too, and it may be finding itself. Then tick **Display**, which highlights every match on screen, so you can see what's happening as you adjust the fuzz ([Found Image](https://wiki.keyboardmaestro.com/Found_Image#Testing)).",
      "\"With two identical buttons on screen, it'll click the first.\" Not by default. If the image isn't unique, the action fails, so it never clicks the wrong place. To click one of them, change the option to the best match, or the topmost, leftmost, bottommost or rightmost one.",
    ],
  },

  // ---------- The clipboard ----------
  "clipboard-history": {
    title: "Clipboard history",
    one: "The system clipboard only remembers the last thing you copied. Keyboard Maestro keeps the rest, up to 200 items by default, so you can pick an earlier one and paste it again.",
    like: "Like the pile of receipt stubs under a shop counter. When a customer says \"can you check that last sale again?\", you don't redo the sum; you flip back through the stubs. Copying something new doesn't throw the old one away; it just goes one layer down.",
    here: [
      "Every time you copy in any app, Keyboard Maestro Engine keeps a copy. To paste an older one, open the Clipboard History Switcher with its default hot key, ⌃⇧⌘V (Control, Shift, Command and V). That macro lives in the **Switcher Group** macro group that comes with Keyboard Maestro, and you can change its hot key. In the switcher, double-click an item or select it and press Return to paste it; hold ⇧ (Shift) to paste as plain text, or ⌥ (Option) to just put it on the clipboard without pasting. ⌘ plus a number pastes that entry directly. See [Clipboard History Switcher](https://wiki.keyboardmaestro.com/manual/Clipboard_History_Switcher).",
      "The switcher can also search, show only images or favorites, and merge several entries to paste together. You can change how many items it keeps too, but that's a hidden setting: it isn't in the preferences window, and you change it with a one-line Terminal command that the official [Preferences](https://wiki.keyboardmaestro.com/manual/Preferences#Clipboard) page gives. If there's an app whose copies you'd rather not keep, exclude it in the **Excluded** preferences. The official [Clipboards](https://wiki.keyboardmaestro.com/Clipboards) page covers all of Keyboard Maestro's clipboards in one place.",
    ],
    myths: [
      "\"My clipboard history survives a restart.\" Only if you've set it to. The official wiki says the history comes back after the Engine quits and relaunches only if **Save Clipboard History Between Launches** is on in the **General** preferences; otherwise it starts fresh every time the Engine quits.",
      "\"Passwords I've copied stay in the history forever.\" Entries Keyboard Maestro thinks look like passwords are hidden, deleted once they drop to tenth place, and never saved to disk; Option-click one to reveal it. You can turn this detection off in the **General** preferences too.",
    ],
  },
  "named-clipboard": {
    title: "Named clipboard",
    one: "A named clipboard is something kept for good under a name: text, styled text or a picture. Your next copy won't overwrite it, and it's still there after a restart.",
    like: "Like labelled folders in a desk drawer: \"company logo\", \"signature\", \"standard replies\". Whatever's on the desktop (the system clipboard) gets swapped out all the time, but the drawer doesn't. When you need something, you take it out and put it on the desk.",
    here: [
      "The official wiki is careful to say a named clipboard isn't a real clipboard. It's more like a place to keep things: a copy of the system clipboard (or another named clipboard) that stays until you change or delete it. It can hold what a variable can't, like a styled signature or a picture. To make one, click **+** in the **Clipboards** preferences, type the name in the one-line field at the top right and paste the content into the big box at the lower right. See [Clipboards](https://wiki.keyboardmaestro.com/Clipboards).",
      "In a macro you use actions like **Copy to Named Clipboard** and **Paste from Named Clipboard**. By hand, open the Named Clipboard Switcher, pick a clipboard, and cut or copy your current selection into it, or paste it out; hold ⇧ (Shift) to paste as plain text. See [Named Clipboard Switcher](https://wiki.keyboardmaestro.com/manual/Named_Clipboard_Switcher).",
    ],
    myths: [
      "\"Default Clipboard is the system clipboard.\" It isn't. It's just a named clipboard Keyboard Maestro creates for you; the \"Default\" only means it came by default, and it works like any other named clipboard.",
      "\"Using named clipboards means the system clipboard is left alone.\" It isn't. The official wiki warns that any action moving things into or out of the user interface goes through the system clipboard, so **Copy to Named Clipboard**, **Paste from Named Clipboard** and **Insert Text by Pasting** all replace what was on the system clipboard.",
    ],
  },

  // ---------- Organizing and troubleshooting ----------
  "permissions": {
    title: "Permissions",
    one: "To press keys, type, choose menus and look at the screen for you, Keyboard Maestro needs your okay in macOS, one permission at a time. The one that matters most is Accessibility: without it, hot keys and abbreviations don't work.",
    like: "Like asking a neighbor to keep an eye on your place. The front door key lets them water the plants; if you want them to collect your mail too, they need the mailbox key as well. macOS cuts a separate key for each kind of job, and Keyboard Maestro needs the key for each job it does.",
    here: [
      "The official wiki says around 80% of the support emails they get are about Apple's security permissions. Keyboard Maestro's preferences have a **Security** pane that gathers the important permissions in one place, shows whether each is on, and can ask the system for them; getting everything there enabled clears up a lot of problems on its own. Accessibility is in **System Settings ▸ Privacy & Security ▸ Accessibility** (on macOS 12 and earlier, System Preferences). The fixes the official FAQ describes all point at the Keyboard Maestro Engine entry in that list. See [Troubleshooting](https://wiki.keyboardmaestro.com/manual/Troubleshooting) and [Preferences](https://wiki.keyboardmaestro.com/manual/Preferences).",
      "The official wiki is also frank that Apple's permission system has been buggy since Mojave: checkboxes that don't show up, can't be ticked, or show as ticked without granting anything. Their fixes are to restart the Mac, quit and relaunch Keyboard Maestro or the Engine, and make sure Keyboard Maestro was moved into the Applications folder with the Finder. That last one matters: if you don't move it with the Finder after downloading, macOS's App Translocation runs it from a random location, so **Launch Engine at Login** stops working and updating to a new version fails, because the app can't replace itself ([Troubleshooting](https://wiki.keyboardmaestro.com/Troubleshooting#App_Translocation_Security)).",
    ],
    list: [
      ["**Accessibility**", "Seeing the hot keys and abbreviations you type, and typing, choosing menus and moving windows for you. Many of Keyboard Maestro's actions need it ([Troubleshooting](https://wiki.keyboardmaestro.com/Troubleshooting#Accessibility))"],
      ["**Screen & System Audio Recording** (Screen Recording on older macOS)", "Looking at what's on screen; for example, it's requested when you use the **Pixel** condition. The official wiki notes that Sequoia and Tahoe ask again from time to time ([What's New](https://wiki.keyboardmaestro.com/manual/Whats_New), [FAQ](https://wiki.keyboardmaestro.com/Frequently_Asked_Questions))"],
      ["**Automation**", "Controlling other apps through AppleScript, like reading the title and address of the current page in Safari or Chrome. Both Keyboard Maestro and Keyboard Maestro Engine need it ([Web Browser Tokens](https://wiki.keyboardmaestro.com/token/WebBrowserTokens))"],
      ["Calendars", "Letting the **Create Calendar Event** action add events. From Sonoma you also need to give full calendar access, or you'll only see one calendar ([Create Calendar Event](https://wiki.keyboardmaestro.com/action/Create_Calendar_Event))"],
      ["Location Services", "From Sonoma, reading which wireless network you're on needs this, and the **Wireless Network** trigger and condition depend on it. Run the **Get Location** action once so the system asks ([Wireless Network](https://wiki.keyboardmaestro.com/trigger/Wireless_Network), [FAQ](https://wiki.keyboardmaestro.com/Frequently_Asked_Questions))"],
      ["Contacts", "Only your own card, to pre-fill the Getting Started email sign-up and for the `%AddressBook%` tokens; the official wiki says it doesn't read the rest of your contacts directly ([FAQ](https://wiki.keyboardmaestro.com/Frequently_Asked_Questions))"],
    ],
    listTitle: "Which permission does what", listHead: ["The entry in System Settings", "What it lets Keyboard Maestro do"],
    myths: [
      "\"The permission is ticked, but my macros still don't work.\" The official wiki says this is one of macOS's bugs: it shows as ticked but isn't really granted. Turn the Keyboard Maestro Engine entry off and on again, or restart once. If that doesn't help, open **Help ▸ Interactive Help** in the editor. As long as the system isn't lying to it, it can spot some permission problems for you.",
      "\"To save hassle, I'll just switch off the Mac's security protections.\" ++Don't.++ Every permission Keyboard Maestro needs can be granted on its own in System Settings. This site only shows that way, and never teaches turning off protections like SIP or Gatekeeper.",
    ],
  },
  "smart-group": {
    title: "Smart group",
    one: "A smart group is a saved search. It doesn't hold any macros itself; it lists the ones that match, such as those changed in the last day or those with a particular hot key.",
    like: "Like the Unread folder in your email. The messages are still in your inbox; the folder just picks out the ones that match and shows them to you. Read one and it quietly leaves the folder.",
    here: [
      "To make a smart group, click the **⊕** button under the Groups column, and double-click a smart group to edit it. A smart group is a set of searches, and any macro that matches any one of them is listed. The [Search Strings](https://wiki.keyboardmaestro.com/manual/Search_Strings) page shows how to write them: `mod:1d` means modified in the last day, `use:1w` used in the last week, and `h:` any macro with a hot key. See [Smart Groups](https://wiki.keyboardmaestro.com/manual/Smart_Groups).",
      "Keyboard Maestro comes with an **All Macros** smart group that lists every macro you have. To find the one you just changed, select it and use **View ▸ Sort Macros by ▸ Date Modified** to bring the most recently changed to the top ([How do I](https://wiki.keyboardmaestro.com/manual/How_do_I)).",
    ],
    myths: [
      "\"Dragging a macro into a smart group moves it.\" A smart group is only a search. The macro stays in its own macro group, and that group still decides when it's active.",
      "\"The more searches I add, the fewer macros it shows.\" The opposite: a macro only has to match any one of the searches, so adding another can only make the list longer.",
    ],
  },
  "debugger": {
    title: "Debugger and Engine log",
    one: "The debugger lets a macro run one step at a time and pause whenever you like, so you can see exactly where it goes wrong. The Engine log is the Engine's running record: when a macro fails, what it reported is written there.",
    like: "Like watching a match replay frame by frame: at full speed you can't see who fouled, but slow it down and pause, and it's obvious. The log is more like a dashcam, which you play back afterwards to see what actually happened at that moment.",
    here: [
      "To open the debugger, choose **Start Debugging** from the [status menu](/en/wiki/status-menu/). The official steps: make sure **Pause New Macros** is ticked, trigger your macro, and it appears in the debugger window, paused at the start. Click the button with the down arrow to step into the first action, and click again for each step after that. The window can also continue the macro, pause it, step over the current action or cancel it, and the button at the top right shows the ten variables this macro changed most recently. Close the debugger window and any paused macros carry on as normal. See [Macro Debugger](https://wiki.keyboardmaestro.com/manual/Macro_Debugger).",
      "The Engine log is a file called Engine.log, which you can find with **Help ▸ Open Logs Folder** in the editor. When a macro misbehaves, the official advice is to first make sure the Engine is allowed to show notifications, or it may be reporting errors you never see; then look in the log for errors. An entry there also tells you the macro really did trigger. To record more, add a **Log** action to your macro to write a line to that file. See [Troubleshooting](https://wiki.keyboardmaestro.com/Troubleshooting).",
    ],
    myths: [
      "\"If I edit a macro while it's running, it switches to the new version.\" It doesn't. As soon as a macro starts, the Engine takes a copy of it, so what you change now doesn't affect the run in progress.",
      "\"It works step by step in the debugger but fails when I run it normally, so it must be a Keyboard Maestro bug.\" The official wiki says this is most likely timing: stepping through gives the screen time to settle, and at full speed an action gets ahead of it. Try adding a **Pause** before the step that fails ([Macro Debugger](https://wiki.keyboardmaestro.com/manual/Macro_Debugger)).",
    ],
  },

  // ---------- Going further ----------
  "subroutine": {
    title: "Subroutine",
    one: "A subroutine is a macro other macros can call. Steps that several macros all need are written once and kept here, and you call them wherever you need them, passing values in and getting a result back.",
    like: "Like the one person in the office who books the meeting rooms. Anyone who needs a meeting goes to them with the time and the number of people, and gets a room number back. When the booking rules change, you only have to tell one person.",
    here: [
      "Since v10, Keyboard Maestro has a dedicated **Subroutine** trigger. Add it to a macro and name the parameters it takes, the variables they go into, and whether it returns a result. Other macros call it with the **Execute a Subroutine** action and fill in the parameter values; inside the subroutine, a **Return Result** action hands back the result, which lands in the variable the caller chose. See [Subroutines](https://wiki.keyboardmaestro.com/Subroutines), [Execute a Subroutine](https://wiki.keyboardmaestro.com/action/Execute_a_Subroutine) and [Return Result](https://wiki.keyboardmaestro.com/action/Return_Result).",
      "If you don't need parameters or a result, **Execute a Macro** can simply run another macro. That's also how it was done before v10: one parameter passed in through the `%TriggerValue%` token and results carried back in variables. The official example is a subroutine that saves a web page as a PDF, which several macros can call.",
    ],
    myths: [
      "\"Parameters are matched by name, so I can reorder them whenever I like.\" The official wiki says parameters are passed by position internally. If you later add or remove parameters in the **Subroutine** trigger, or change what one means, every **Execute a Subroutine** action that calls it has to be updated too. The trigger's **Callers** menu takes you straight to them.",
      "\"Any macro can be called with **Execute a Subroutine**.\" Only macros with a **Subroutine** trigger. For any other macro, use **Execute a Macro**.",
    ],
  },
  "macro-library": {
    title: "Macro Library",
    one: "The Macro Library is a set of ready-made macros that comes with Keyboard Maestro, each with a short description. Import the ones you like and use them as they are or adapt them.",
    like: "Like a cookbook. You don't have to invent a dish from scratch: find a recipe that's close, follow it, then adjust the salt to your taste.",
    here: [
      "Open it with **Window ▸ Macro Library**, look through what's there, click one for details, and insert the ones you want into your own macros, then change the hot keys and so on. All the default macros that come with Keyboard Maestro are in the library too, so if you delete one by mistake, you can always reinstall it from here. See [Macro Library](https://wiki.keyboardmaestro.com/manual/Macro_Library).",
      "You can also export a set of macros as a macro library file (`.kmlibrary`) to give to someone, or import theirs into your library. For sharing, though, the official wiki says it's generally better to export them as macros or use the **Share** button at the top of the editor window. The official wiki also has a page of [example macros](https://wiki.keyboardmaestro.com/Macro_Library).",
    ],
    myths: [
      "\"Macros I download can go straight in and run.\" ++Look at what one does before you run it.++ The official wiki warns that a macro can do practically anything on your Mac, including a lot of damage, so don't run one until you've checked where it came from and, better still, what each step does. **File ▸ Import ▸ Import Macros Safely** imports macros disabled by default, which gives you that time to check ([Macros](https://wiki.keyboardmaestro.com/manual/Macros)).",
      "\"If I import the wrong library entry, I'll delete it from the Macro Library.\" You can't, for now. The official wiki says the only way is to quit Keyboard Maestro and the Engine, then remove the files from the Keyboard Maestro Libraries folder.",
    ],
  },
  "plug-in-action": {
    title: "Plug-in action",
    one: "A plug-in action is an action you write yourself, or download from someone else, and install into Keyboard Maestro. Once installed, you use it just like a built-in one.",
    like: "Like fitting a new bit to a drill: the bit is bought separately, but once it's in, it's the same drill doing the turning. Behind every plug-in action is a script, and once it's installed you just fill in its boxes in your macro.",
    here: [
      "For plug-in actions written by others, the official wiki points to two places: the third-party actions page on the Keyboard Maestro website and the plug-ins section of the official forum. To install one, drop the downloaded `.zip` straight onto the Keyboard Maestro icon in the Dock. ++Don't unzip it first.++ It goes into `~/Library/Application Support/Keyboard Maestro/Keyboard Maestro Actions/` by itself. You may need to quit the Engine with **File ▸ Quit Engine** and then quit and reopen the editor before the new action shows up. See [Plug In Actions](https://wiki.keyboardmaestro.com/manual/Plug_In_Actions).",
      "You add it to a macro like any other action: choose the **Third Party Plug Ins** category in the action list, or search for its name with **Edit ▸ Insert Action by Name**. You can write your own as well: a folder holding a plist that describes the form, a script (AppleScript, JXA or shell script) and an optional icon, zipped up.",
    ],
    myths: [
      "\"To update a plug-in, I just drop the new zip on again.\" The official steps are to first delete or move the old plug-in's folder out of the Keyboard Maestro Actions folder, and then drop the new zip.",
      "\"Plug-in actions are all checked by Stairways.\" The official wiki never says so. If anything, its disclaimer is blunt: macros can be dangerous, especially third-party ones, and you're responsible for whatever a macro does no matter where it came from, even the official website, wiki or forum ([Administrative Details](https://wiki.keyboardmaestro.com/manual/Administrative_Details)). A plug-in runs a script someone else wrote too, so check where it came from and what it does first.",
    ],
  },
};
