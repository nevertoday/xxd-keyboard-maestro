<div align="center">

# Keyboard Maestro pour débutants

[中文](./README.md) · [English](./README.en.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Español](./README.es.md) · [Português](./README.pt.md) · **Français** · [Deutsch](./README.de.md) · [Русский](./README.ru.md) · [العربية](./README.ar.md)

### Tirez le meilleur de Keyboard Maestro : confiez les tâches répétitives à une seule touche

Keyboard Maestro est un outil d’automatisation pour Mac : vous écrivez des macros dans l’éditeur, et le moteur les exécute en arrière-plan.<br>Ce guide s’appuie sur le wiki officiel de Keyboard Maestro et le découpe en trois courtes leçons, pour que vous puissiez suivre même si vous n’avez jamais rien automatisé.

**[Commencer par la leçon 1 →](https://keyboardmaestro.xiaoxiaodong.ai/fr/start/1-first-macro/)**　·　**[Déjà utilisateur ? Le guide complet (en anglais) →](https://keyboardmaestro.xiaoxiaodong.ai/en/guide/0-what/)**

<sub>Non officiel · gratuit · open source · 10 langues (complet en chinois et en anglais)</sub>

</div>

<p align="center">
  <img src="assets/en/hero.svg" width="100%" alt="Démo : on appuie sur quatre touches, ⌃⌥⌘T, et une macro nommée « Start my day » se lance. Sur la carte de la macro, la ligne Hot Key s’allume d’abord, puis les trois actions s’allument l’une après l’autre : Activate a Specific Application ouvre Calendrier, Open a URL ouvre une page web, Manipulate a Window déplace la fenêtre du navigateur sur la moitié droite de l’écran, tandis qu’un petit écran à côté montre les fenêtres de Calendrier et du navigateur apparaître. Les trois leçons pour débutants s’allument à gauche : l’installer et ouvrir votre app préférée d’une touche ; taper quelques lettres pour obtenir tout un paragraphe ; une touche, toute une routine">
</p>

## Ça vous parle ?

Le matin, vous ouvrez votre Mac, vous cliquez sur Calendrier, vous ouvrez la page web que vous consultez tous les jours, puis vous faites glisser chaque fenêtre à sa place. Dans la journée, vous tapez plusieurs fois la même adresse et la même réponse. À chaque fois, cela ne prend que quelques secondes, mais c’est tous les jours.

Keyboard Maestro confie tout cela à des macros. Une macro indique deux choses : quand démarrer (ses déclencheurs) et quoi faire une fois lancée (ses actions). À partir de là, vous appuyez sur une touche ou vous tapez quelques lettres, et elle exécute les étapes à votre place. Les macros sont rangées dans des groupes de macros, qui fonctionnent comme des dossiers tout en décidant dans quelles apps et à quel moment leurs macros sont actives.

<p align="center">
  <img src="assets/en/readme/macro.svg" width="100%" alt="Les trois colonnes de l’éditeur Keyboard Maestro. Macro Groups, où vivent et agissent les macros : Global Macro Group est sélectionné, avec Mail et Safari en dessous. Macros, une petite tâche chacune : « Start my day » est sélectionnée. Puis la macro elle-même : sous Triggered by any of the following figurent Hot Key ⌃⌥⌘T et Time of Day 9:00, et n’importe lequel des deux la déclenche ; sous Will execute the following actions figurent Activate a Specific Application, Open a URL et Manipulate a Window, exécutées de haut en bas, l’une après l’autre. En dessous : une macro ne se déclenche que si elle est activée et si son groupe de macros est activé et actif.">
</p>

## Deux programmes : un pour écrire, un pour exécuter

À l’installation, vous obtenez deux programmes. **Keyboard Maestro** est l’éditeur : vous l’ouvrez quand vous voulez écrire ou modifier des macros, il enregistre tout seul quelques secondes après chaque modification (il n’y a pas de commande Enregistrer), et vous pouvez le quitter quand vous avez terminé. **Keyboard Maestro Engine** tourne en permanence en arrière-plan : il guette vos raccourcis clavier, surveille l’heure, suit les apps ouvertes et conserve votre historique du presse-papiers ; c’est lui qui exécute réellement vos macros. Si le moteur ne tourne pas, rien ne se déclenche : le conseil officiel est donc d’activer **Launch Engine at Login** (lancer le moteur à l’ouverture de session) dans les préférences.

<p align="center">
  <img src="assets/en/readme/editor-engine.svg" width="100%" alt="À gauche, l’éditeur, Keyboard Maestro : l’endroit où vous écrivez et modifiez vos macros ; il enregistre tout seul quelques secondes après chaque modification, sans commande Enregistrer ; quittez-le quand vous avez fini. À droite, le moteur, Keyboard Maestro Engine : tourne en arrière-plan sans fenêtre ; écoute les raccourcis clavier, surveille l’heure, suit les apps ; c’est lui qui exécute vos macros. Vos macros passent de l’éditeur au moteur ; une fois l’éditeur quitté, appuyer sur ⌃⌥⌘T lance toujours la macro. En dessous : gardez le moteur actif en cochant Launch Engine at Login dans les préférences.">
</p>

## Trois leçons, une chose à la fois

Pas besoin de savoir coder, ni d’apprendre cent actions avant de commencer. Chaque leçon traite un seul sujet, et vous repartez avec une macro fonctionnelle de plus.

<p align="center">
  <img src="assets/en/readme/lessons.svg" width="100%" alt="Les trois leçons pour débutants. Leçon 1, 15 minutes : l’installer et ouvrir votre app préférée d’une touche, au bout de laquelle vous disposez d’un raccourci clavier qui ouvre l’app que vous utilisez chaque jour. Leçon 2, 10 minutes : taper quelques lettres pour obtenir tout un paragraphe, au bout de laquelle quelques lettres se transforment en un paragraphe entier. Leçon 3, 15 minutes : une touche, toute une routine, au bout de laquelle une seule touche lance votre routine du matin : apps, page web, fenêtres bien en place.">
</p>

1. **[L’installer et ouvrir votre app préférée d’une touche](https://keyboardmaestro.xiaoxiaodong.ai/fr/start/1-first-macro/)** (15 minutes) : téléchargez-le, accordez les autorisations, gardez le moteur actif, puis créez votre première macro — un raccourci clavier qui ouvre l’app que vous utilisez tous les jours.
2. **[Taper quelques lettres pour obtenir tout un paragraphe](https://keyboardmaestro.xiaoxiaodong.ai/fr/start/2-type-less/)** (10 minutes) : placez l’adresse, la présentation ou la réponse que vous tapez chaque jour dans un déclencheur par texte saisi ; tapez quelques lettres et tout le texte apparaît.
3. **[Une touche, toute une routine](https://keyboardmaestro.xiaoxiaodong.ai/fr/start/3-one-key-routine/)** (15 minutes) : transformez vos clics du matin en une seule macro — ouvrez quelques apps et une page web, mettez les fenêtres en place, puis apprenez à l’arrêter et à savoir où chercher si elle ne se déclenche pas comme prévu.

## Le guide complet

Vous avez terminé les leçons et vous voulez des macros qui s’adaptent, un presse-papiers qui se souvient de tout, et un moyen de comprendre pourquoi quelque chose ne s’est pas déclenché ? Parcourez ces chapitres dans l’ordre :

| Étape | Sujet | En une ligne |
| --- | --- | --- |
| 0 | [Qu’est-ce que Keyboard Maestro](https://keyboardmaestro.xiaoxiaodong.ai/en/guide/0-what/) | L’automatisation pour Mac : vous écrivez des macros dans l’éditeur et le moteur les exécute en arrière-plan. Chaque macro réunit un « quand » et un « quoi » |
| 1 | [Les groupes de macros : là où agissent vos macros](https://keyboardmaestro.xiaoxiaodong.ai/en/guide/1-groups/) | Un groupe de macros est un dossier qui décide aussi quand ses macros sont actives : uniquement dans certaines apps, uniquement après activation, ou sous forme de palette |
| 2 | [Les déclencheurs : quand une macro démarre](https://keyboardmaestro.xiaoxiaodong.ai/en/guide/2-triggers/) | Un raccourci clavier, un texte saisi, une heure précise, le lancement d’une app, un réseau Wi-Fi, un nouveau fichier dans un dossier : choisissez le moment qui vous semble naturel |
| 3 | [Les actions : ce que fait une macro](https://keyboardmaestro.xiaoxiaodong.ai/en/guide/3-actions/) | Saisie, frappes de touches, menus, apps, fenêtres, clics et fichiers : découvrez la douzaine d’actions que vous utiliserez le plus et cherchez les autres quand vous en aurez besoin |
| 4 | [Variables, conditions et boucles : des macros qui s’adaptent](https://keyboardmaestro.xiaoxiaodong.ai/en/guide/4-variables/) | Mémoriser un texte, vous poser une question, prendre un chemin différent selon ce qui s’affiche à l’écran, attendre qu’un événement se produise : une macro cesse d’être une suite figée de touches |
| 5 | [Le presse-papiers : tout ce que vous avez copié est toujours là](https://keyboardmaestro.xiaoxiaodong.ai/en/guide/5-clipboard/) | L’historique du presse-papiers vous permet de coller ce que vous avez copié plus tôt, les presse-papiers nommés gardent quelques éléments de façon permanente, et les filtres modifient le texte avant le collage |
| 6 | [Quand une macro ne fonctionne pas](https://keyboardmaestro.xiaoxiaodong.ai/en/guide/6-debug/) | Vérifiez d’abord les autorisations et le moteur, puis si le groupe est actif. Toujours bloqué ? Avancez pas à pas avec le débogueur ou lisez le journal du moteur |
| 7 | [Aller plus loin : scripts, sous-programmes, synchronisation et partage](https://keyboardmaestro.xiaoxiaodong.ai/en/guide/7-advanced/) | Branchez des scripts shell, AppleScript et JavaScript, transformez des étapes répétitives en sous-programmes, synchronisez deux Mac et partagez vos macros avec d’autres |

## Fiches pratiques : cas concrets

- **Saisie et texte** : [Transformer ce que vous tapez souvent en abréviations](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/text-snippets/) · [Insérer la date du jour d’une touche](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/insert-date/) · [Coller sans la mise en forme](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/paste-plain/) · [Remplir le même formulaire d’une touche](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/fill-form/)
- **Apps et fenêtres** : [Basculer vers une app d’une touche](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/app-hotkeys/) · [Placer vos fenêtres où vous voulez](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/window-layout/) · [Attribuer un raccourci à une commande de menu qui n’en a pas](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/menu-shortcut/)
- **Fichiers** : [Renommer un lot de fichiers](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/rename-files/) · [Classer des fichiers dès leur arrivée dans un dossier](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/watch-folder/)
- **Écran et souris** : [Repérer un bouton à l’écran et cliquer dessus](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/click-image/) · [Lire le texte affiché à l’écran](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/ocr-text/)
- **Planification** : [Lancer quelque chose à la même heure tous les jours](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/daily-schedule/) · [Déclencher quelque chose quand vous rejoignez un réseau Wi-Fi ou branchez un appareil](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/wifi-usb/)
- **Vous demander d’abord** : [Poser une question avant d’agir](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/ask-input/) · [Créer une rangée de boutons qui lancent des macros](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/palette/)
- **Conserver et partager** : [Utiliser les mêmes macros sur deux Mac](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/sync-macs/) · [Exporter, importer et partager des macros](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/share-macros/) · [Quand une macro refuse de s’arrêter](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/stop-macro/)

Un terme vous échappe ou vous avez un doute ? Consultez le **[Wiki](https://keyboardmaestro.xiaoxiaodong.ai/en/wiki/)** et la **[FAQ](https://keyboardmaestro.xiaoxiaodong.ai/en/faq/)**.

## D’où viennent ces informations

Chaque fonctionnalité, option et chemin de menu est vérifié d’après le [wiki officiel de Keyboard Maestro](https://wiki.keyboardmaestro.com/), avec un lien sur la page. Les noms de boutons sont écrits exactement tels qu’ils apparaissent dans l’application. Ce guide a été vérifié avec Keyboard Maestro 11.1.1 (2026-11-24), qui requiert macOS 10.13 ou version ultérieure. Les retours issus du forum sont uniquement cités comme ce que quelqu’un a essayé, accompagnés d’un lien.

Ce guide ne contient ni clés de licence, ni cracks, ni miroirs de téléchargement ; téléchargez Keyboard Maestro depuis [son site officiel](https://www.keyboardmaestro.com/). Il ne vous demande jamais de désactiver les réglages de sécurité de macOS, et les autorisations sont accordées de la manière décrite dans le wiki officiel.

Ce guide est non officiel, n’a aucun lien avec Stairways Software et ne parle pas en son nom. Keyboard Maestro est une marque de Stairways Software Pty Ltd. Les fonctionnalités évoluent : le wiki officiel et l’application elle-même font donc référence.

## Lancer le site en local

```bash
npm install
npm run dev        # http://localhost:4446
npm run build      # sortie dans dist/
npm run check      # après un build : langues, ensemble du site, libellés d’interface
```

Les illustrations du README et les images de partage sont générées : `python3 tools/build_hero.py`, `python3 tools/build_readme_svgs.py` et `npm run og` ; voir 「README 插画和分享大图」 dans [docs/MAINTAINING.md](docs/MAINTAINING.md) (en chinois), qui couvre aussi les règles de rédaction, les sources, ainsi que les scripts qui synchronisent le wiki officiel et vérifient les noms de boutons. La structure du site provient de [Saily for Beginners](https://github.com/nevertoday/xxd-saily) et [Grok Bot for Beginners](https://github.com/nevertoday/xxd-grokbot), et l’interface utilise le 小小东 UI Kit.

Le code et les textes sont sous licence MIT ; voir [LICENSE](LICENSE). `public/xxd/` est le résultat de la compilation du 小小东 UI Kit et n’est pas couvert par la licence MIT ; voir `public/xxd/LICENSE`.
