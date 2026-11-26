<div align="center">

# Keyboard Maestro für Einsteiger

[中文](./README.md) · [English](./README.en.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Español](./README.es.md) · [Português](./README.pt.md) · [Français](./README.fr.md) · **Deutsch** · [Русский](./README.ru.md) · [العربية](./README.ar.md)

### Hol das Beste aus Keyboard Maestro heraus: Überlass die immer gleichen Handgriffe einer einzigen Taste

Keyboard Maestro ist ein Automatisierungstool für den Mac: Du schreibst Makros im Editor, und die Engine führt sie im Hintergrund aus.<br>Diese Anleitung orientiert sich am offiziellen Keyboard Maestro Wiki und macht daraus drei kurze Lektionen, damit du auch dann problemlos mitkommst, wenn du noch nie etwas automatisiert hast.

**[Mit Lektion 1 starten →](https://keyboardmaestro.xiaoxiaodong.ai/de/start/1-first-macro/)**　·　**[Du nutzt es schon? Zur ausführlichen Anleitung →](https://keyboardmaestro.xiaoxiaodong.ai/de/guide/0-what/)**

<sub>Inoffiziell · kostenlos · Open Source · die gesamte Website in 10 Sprachen</sub>

</div>

<p align="center">
  <img src="assets/en/hero.svg" width="100%" alt="Demo: Vier Tasten, ⌃⌥⌘T, werden gedrückt und ein Makro namens „Start my day“ startet. Auf der Makro-Karte leuchtet zuerst die Zeile „Hot Key“ auf, danach nacheinander die drei Aktionen: „Activate a Specific Application“ öffnet Kalender, „Open a URL“ öffnet eine Webseite und „Manipulate a Window“ schiebt das Browserfenster auf die rechte Bildschirmhälfte, während auf einem kleinen Bildschirm daneben die Fenster von Kalender und Browser erscheinen. Links leuchten die drei Einsteiger-Lektionen auf: Installieren und deine Lieblings-App mit einer Taste öffnen; ein paar Buchstaben tippen, einen ganzen Absatz bekommen; eine Taste, eine ganze Routine">
</p>

## Kommt dir das bekannt vor?

Morgens klappst du deinen Mac auf, klickst auf Kalender, öffnest die Webseite, auf die du jeden Tag schaust, und ziehst anschließend jedes Fenster an seinen gewohnten Platz. Über den Tag verteilt tippst du mehrmals dieselbe Adresse und dieselbe Antwort ein. Jedes Mal sind es nur ein paar Sekunden, aber eben jeden einzelnen Tag.

Mit Keyboard Maestro übernehmen Makros all das. Ein Makro legt zwei Dinge fest: wann es startet (seine Auslöser) und was es dann tun soll (seine Aktionen). Von da an drückst du nur noch eine Taste oder tippst ein paar Buchstaben ein, und es erledigt die Schritte für dich. Makros liegen in Makrogruppen – das sind eine Art Ordner, die gleichzeitig bestimmen, in welchen Apps und wann die darin enthaltenen Makros aktiv sind.

<p align="center">
  <img src="assets/en/readme/macro.svg" width="100%" alt="Die drei Spalten im Editor von Keyboard Maestro. „Macro Groups“, wo Makros liegen und wirken: „Global Macro Group“ ist ausgewählt, darunter stehen Mail und Safari. „Macros“, jeweils eine kleine Aufgabe: „Start my day“ ist ausgewählt. Rechts daneben das Makro selbst: Unter „Triggered by any of the following“ stehen „Hot Key ⌃⌥⌘T“ und „Time of Day 9:00“ – jeder davon startet das Makro; unter „Will execute the following actions“ stehen „Activate a Specific Application“, „Open a URL“ und „Manipulate a Window“, die von oben nach unten nacheinander ausgeführt werden. Darunter der Hinweis: Ein Makro wird nur ausgelöst, wenn es aktiviert ist und auch seine Makrogruppe aktiviert und aktiv ist.">
</p>

## Zwei Programme: eines zum Schreiben, eines zum Ausführen

Nach der Installation hast du zwei Programme auf dem Mac. **Keyboard Maestro** ist der Editor: Du öffnest ihn, wenn du Makros schreiben oder ändern willst. Ein paar Sekunden nach jeder Änderung speichert er alles von selbst (es gibt keinen „Save“-Befehl), und sobald du fertig bist, kannst du ihn einfach beenden. Die **Keyboard Maestro Engine** läuft dagegen dauerhaft im Hintergrund: Sie achtet auf deine Tastenkürzel, hat die Uhrzeit im Blick, merkt sich, welche Apps gerade laufen, führt deinen Zwischenablage-Verlauf – und ist der Teil, der deine Makros tatsächlich ausführt. Wenn die Engine nicht läuft, passiert gar nichts. Deshalb lautet die offizielle Empfehlung, in den Einstellungen **Launch Engine at Login** (Engine bei der Anmeldung starten) einzuschalten.

<p align="center">
  <img src="assets/en/readme/editor-engine.svg" width="100%" alt="Links der Editor, Keyboard Maestro: Hier schreibst und änderst du Makros; er speichert wenige Sekunden nach jeder Änderung automatisch, ganz ohne „Save“-Befehl; danach kannst du ihn beenden. Rechts die Engine, Keyboard Maestro Engine: Läuft ohne eigenes Fenster im Hintergrund; achtet auf Tastenkürzel, Uhrzeit und laufende Apps; das ist der Teil, der deine Makros tatsächlich ausführt. Deine Makros wandern vom Editor zur Engine; selbst wenn der Editor beendet ist, startet das Drücken von ⌃⌥⌘T das Makro trotzdem. Darunter der Hinweis: Damit die Engine immer läuft, schalte in den Einstellungen „Launch Engine at Login“ ein.">
</p>

## Drei Lektionen – immer eins nach dem anderen

Du musst nicht programmieren können und auch nicht erst hundert Aktionen auswendig lernen. Jede Lektion kümmert sich um genau eine Sache, und am Ende hast du jedes Mal ein weiteres funktionierendes Makro.

<p align="center">
  <img src="assets/en/readme/lessons.svg" width="100%" alt="Die drei Einsteiger-Lektionen. Lektion 1, 15 Minuten: Installieren und deine Lieblings-App mit einer Taste öffnen – danach hast du ein Tastenkürzel, das deine wichtigste App im Alltag öffnet. Lektion 2, 10 Minuten: Ein paar Buchstaben tippen, einen ganzen Absatz bekommen – danach verwandeln sich ein paar Buchstaben in einen kompletten Absatz. Lektion 3, 15 Minuten: Eine Taste, eine ganze Routine – danach erledigt ein Tastendruck deine Morgenroutine: Apps, eine Webseite und alle Fenster an ihrem Platz.">
</p>

1. **[Installieren und deine Lieblings-App mit einer Taste öffnen](https://keyboardmaestro.xiaoxiaodong.ai/de/start/1-first-macro/)** (15 Minuten): Lade Keyboard Maestro herunter, erteile die nötigen Berechtigungen, lass die Engine im Hintergrund laufen und baue dann dein erstes Makro – ein Tastenkürzel, das die App öffnet, die du jeden Tag brauchst.
2. **[Ein paar Buchstaben tippen, einen ganzen Absatz bekommen](https://keyboardmaestro.xiaoxiaodong.ai/de/start/2-type-less/)** (10 Minuten): Die Adresse, Vorstellung oder Antwort, die du jeden Tag tippst, kommt in einen Texteingabe-Auslöser: Du tippst ein paar Buchstaben, und der ganze Text erscheint von selbst.
3. **[Eine Taste, eine ganze Routine](https://keyboardmaestro.xiaoxiaodong.ai/de/start/3-one-key-routine/)** (15 Minuten): Mach aus den Klicks, die du jeden Morgen erledigst, ein einziges Makro – ein paar Apps und eine Webseite öffnen, die Fenster an ihren Platz schieben – und lerne anschließend, wie du es wieder stoppst und wo du nachschaust, wenn mal etwas schiefgeht.

## Die ausführliche Anleitung

Du bist mit den Lektionen durch und möchtest Makros, die sich anpassen, eine Zwischenablage mit Gedächtnis und einen Weg, herauszufinden, warum etwas nicht ausgelöst wurde? Dann geh diese Schritte der Reihe nach durch:

| Schritt | Thema | Kurz gesagt |
| --- | --- | --- |
| 0 | [Was Keyboard Maestro ist](https://keyboardmaestro.xiaoxiaodong.ai/de/guide/0-what/) | Automatisierung für den Mac: Du schreibst Makros im Editor, und die Engine führt sie im Hintergrund aus. Jedes Makro besteht aus einem Wann und einem Was |
| 1 | [Makrogruppen: wo Makros funktionieren](https://keyboardmaestro.xiaoxiaodong.ai/de/guide/1-groups/) | Eine Makrogruppe ist ein Ordner, der gleichzeitig festlegt, wann seine Makros aktiv sind: nur in bestimmten Apps, erst nachdem du sie aktivierst oder als schwebende Palette mit Buttons |
| 2 | [Auslöser: wann ein Makro startet](https://keyboardmaestro.xiaoxiaodong.ai/de/guide/2-triggers/) | Ein Tastenkürzel, eine getippte Zeichenfolge, eine Uhrzeit, der Start einer App, ein WLAN oder eine neue Datei in einem Ordner: Such dir den Moment aus, der sich am natürlichsten anfühlt |
| 3 | [Aktionen: was ein Makro tut](https://keyboardmaestro.xiaoxiaodong.ai/de/guide/3-actions/) | Tippen, Tastenanschläge, Menüs, Apps, Fenster, Klicks und Dateien: Lerne das Dutzend Aktionen kennen, das du am häufigsten brauchst, und such dir den Rest heraus, wenn du ihn brauchst |
| 4 | [Variablen, Bedingungen und Schleifen: Makros, die sich anpassen](https://keyboardmaestro.xiaoxiaodong.ai/de/guide/4-variables/) | Sich Text merken, dir eine Frage stellen, je nach Bildschirminhalt einen anderen Weg einschlagen, auf ein Ereignis warten: So ist ein Makro keine starre Abfolge von Tastendrücken mehr |
| 5 | [Die Zwischenablage: Alles, was du kopiert hast, ist noch da](https://keyboardmaestro.xiaoxiaodong.ai/de/guide/5-clipboard/) | Über den Zwischenablage-Verlauf fügst du früher Kopiertes wieder ein, benannte Zwischenablagen heben wichtige Dinge dauerhaft auf und Filter passen Text noch vor dem Einfügen an |
| 6 | [Wenn ein Makro nicht funktioniert](https://keyboardmaestro.xiaoxiaodong.ai/de/guide/6-debug/) | Prüfe zuerst Berechtigungen und die Engine und dann, ob die Makrogruppe aktiv ist. Immer noch ratlos? Geh das Makro mit dem Debugger Schritt für Schritt durch oder lies das Engine-Protokoll |
| 7 | [Einen Schritt weiter: Skripte, Unterprogramme, Synchronisieren und Teilen](https://keyboardmaestro.xiaoxiaodong.ai/de/guide/7-advanced/) | Shell-Skripte, AppleScript und JavaScript einbinden, wiederkehrende Schritte in Unterprogramme auslagern, zwischen zwei Macs synchronisieren und Makros mit anderen teilen |

## How-to: Konkrete Aufgaben

- **Tippen und Text**: [Oft getippte Texte zu Kürzeln machen](https://keyboardmaestro.xiaoxiaodong.ai/de/howto/text-snippets/) · [Das heutige Datum mit einer Taste einfügen](https://keyboardmaestro.xiaoxiaodong.ai/de/howto/insert-date/) · [Ohne Formatierung einfügen](https://keyboardmaestro.xiaoxiaodong.ai/de/howto/paste-plain/) · [Dasselbe Formular mit einer Taste ausfüllen](https://keyboardmaestro.xiaoxiaodong.ai/de/howto/fill-form/)
- **Apps und Fenster**: [Mit einer Taste zu einer App springen](https://keyboardmaestro.xiaoxiaodong.ai/de/howto/app-hotkeys/) · [Deine Fenster dorthin schieben, wo du sie haben willst](https://keyboardmaestro.xiaoxiaodong.ai/de/howto/window-layout/) · [Einem Menübefehl ein Tastenkürzel geben, das er nicht hat](https://keyboardmaestro.xiaoxiaodong.ai/de/howto/menu-shortcut/)
- **Dateien**: [Mehrere Dateien auf einmal umbenennen](https://keyboardmaestro.xiaoxiaodong.ai/de/howto/rename-files/) · [Dateien sofort einsortieren, sobald sie in einem Ordner landen](https://keyboardmaestro.xiaoxiaodong.ai/de/howto/watch-folder/)
- **Bildschirm und Maus**: [Einen Button auf dem Bildschirm finden und anklicken](https://keyboardmaestro.xiaoxiaodong.ai/de/howto/click-image/) · [Text vom Bildschirm auslesen](https://keyboardmaestro.xiaoxiaodong.ai/de/howto/ocr-text/)
- **Nach Zeitplan**: [Jeden Tag zur gleichen Zeit etwas ausführen](https://keyboardmaestro.xiaoxiaodong.ai/de/howto/daily-schedule/) · [Etwas ausführen, wenn du dich mit einem WLAN verbindest oder ein Gerät anschließt](https://keyboardmaestro.xiaoxiaodong.ai/de/howto/wifi-usb/)
- **Vorher nachfragen**: [Zuerst eine Frage stellen, bevor es an die Arbeit geht](https://keyboardmaestro.xiaoxiaodong.ai/de/howto/ask-input/) · [Eine Reihe von Buttons erstellen, die Makros ausführen](https://keyboardmaestro.xiaoxiaodong.ai/de/howto/palette/)
- **Aufbewahren und teilen**: [Dieselben Makros auf zwei Macs nutzen](https://keyboardmaestro.xiaoxiaodong.ai/de/howto/sync-macs/) · [Makros exportieren, importieren und teilen](https://keyboardmaestro.xiaoxiaodong.ai/de/howto/share-macros/) · [Wenn ein Makro nicht mehr aufhört](https://keyboardmaestro.xiaoxiaodong.ai/de/howto/stop-macro/)

Hängst du an einem Begriff oder bist dir bei etwas unsicher? Dann schlag es im **[Wiki](https://keyboardmaestro.xiaoxiaodong.ai/de/wiki/)** und in den **[FAQ](https://keyboardmaestro.xiaoxiaodong.ai/de/faq/)** nach.

## Woher diese Inhalte stammen

Jede Funktion, jede Option und jeder Menüpfad ist mit dem [offiziellen Keyboard Maestro Wiki](https://wiki.keyboardmaestro.com/) abgeglichen, das direkt auf der jeweiligen Seite verlinkt ist. Button-Namen stehen genau so da, wie die App sie anzeigt. Geprüft wurde die Anleitung mit Keyboard Maestro 11.1.1 (24.11.2026), wofür macOS 10.13 oder neuer nötig ist. Erfahrungsberichte aus dem Forum werden nur als das zitiert, was jemand ausprobiert hat – jeweils mit Link.

Diese Anleitung enthält keine Lizenzschlüssel, Cracks oder Download-Mirrors; lade Keyboard Maestro direkt von [der offiziellen Website](https://www.keyboardmaestro.com/) herunter. Sie fordert dich niemals auf, macOS-Sicherheitseinstellungen abzuschalten, und Berechtigungen werden genau so vergeben, wie es das offizielle Wiki beschreibt.

Diese inoffizielle Anleitung steht in keiner Verbindung zu Stairways Software und spricht nicht in deren Namen. Keyboard Maestro ist eine Marke von Stairways Software Pty Ltd. Funktionen ändern sich mit der Zeit – deshalb bleiben das offizielle Wiki und die App selbst die Referenz.

## Lokal ausführen

```bash
npm install
npm run dev        # http://localhost:4446
npm run build      # Ausgabe in dist/
npm run check      # nach einem Build: Sprachen, die gesamte Website, UI-Bezeichnungen
```

Die Bilder im README und die Vorschaubilder zum Teilen werden per Skript erzeugt: `python3 tools/build_hero.py`, `python3 tools/build_readme_svgs.py` und `npm run og`. Mehr dazu steht im Abschnitt 「README 插画和分享大图」 in [docs/MAINTAINING.md](docs/MAINTAINING.md) (auf Chinesisch) – dort findest du auch die Schreibregeln, Quellen sowie die Skripte, die das offizielle Wiki abgleichen und Button-Namen prüfen. Das Grundgerüst der Website stammt aus [Saily for Beginners](https://github.com/nevertoday/xxd-saily) und [Grok Bot for Beginners](https://github.com/nevertoday/xxd-grokbot), und die Oberfläche nutzt das 小小东 UI Kit.

Code und Texte stehen unter der MIT-Lizenz, siehe [LICENSE](LICENSE). `public/xxd/` ist die Build-Ausgabe des 小小东 UI Kit und fällt nicht unter die MIT-Lizenz; siehe `public/xxd/LICENSE`.
