// Deutsche Übersetzung der Benutzeroberfläche und der Startseite (src/i18n/de.js).
// Platzhalter wie {n} oder {docs} werden von fmt() ersetzt und bleiben unverändert.
export default {
  ui: {
    brand: "Keyboard Maestro für Einsteiger",
    desc: "Eine inoffizielle Anleitung zu Keyboard Maestro: Überlass das Tippen, Klicken und App-Öffnen, das du jeden Tag auf deinem Mac wiederholst, einfach Makros. Von der Installation und deinem ersten Makro bis zu Variablen, der Zwischenablage und der Fehlersuche – verständlich erklärt.",
    skip: "Zum Inhalt springen",
    menu: "Menü öffnen",
    search: "Anleitung durchsuchen",
    searchPh: "Lektionen, Schritte, How-tos, Begriffe suchen …",
    searchEmpty: "Nichts gefunden. Probier ein anderes Wort",
    look: "Erscheinungsbild",
    lang: "Sprache",
    repo: "Diese Anleitung auf GitHub",
    repoMore: "Mehr: das offizielle Keyboard Maestro Wiki und die Website",
    repoDefault: "Standard",
    // Drei Links: [Name, kurze Beschreibung] in fester Reihenfolge (Anleitung, Wiki, Website)
    repos: [
      ["Diese Anleitung", "Quellcode dieser Anleitung; hier kannst du Probleme melden"],
      ["Keyboard Maestro Wiki", "Die maßgebliche Quelle dafür, was jede Funktion kann und wie sie arbeitet"],
      ["Website von Keyboard Maestro", "Download und Kauf"],
    ],
    navLabel: "Seitennavigation",
    start: "Start",
    home: "Startseite",
    lessons: "Einstieg: drei Lektionen",
    more: "Mehr (auf Englisch)",
    main: "Ausführliche Anleitung: 8 Schritte",
    howto: "How-to: Wie geht das genau?",
    wiki: "Wiki: Was ist das?",
    faq: "FAQ",
    toc: "Auf dieser Seite",
    tocLabel: "Auf dieser Seite",
    hintMain: "Ausführliche Anleitung (Englisch)",
    hintLesson: "Einstieg",
    hintFaq: "FAQ (Englisch)",
    hintOther: "Englisch",
    section: "Abschnitt",
    // Linktext für {docs} in der Fußzeile; {docs} und {github} werden durch Links ersetzt
    docsLink: "offizielle Wiki",
    foot: "Eine inoffizielle Anleitung zu Keyboard Maestro, nicht mit Stairways Software verbunden. Keyboard Maestro ist eine Marke von Stairways Software Pty Ltd. Maßgeblich dafür, was die Funktionen können und wie sie arbeiten, ist das {docs}. Quellcode und Feedback zu dieser Anleitung findest du auf {github}.",
    // Erscheinungsbild-Menü in der oberen Leiste
    appearance: {
      group: "Erscheinungsbild", theme: "Farbschema", light: "Hell", dark: "Dunkel", system: "System",
      corners: "Abgerundete Ecken", cornersDesc: "Ausgeschaltet bleiben alle Ecken eckig",
      accent: "Akzentfarbe", accentDesc: "Für Buttons, Auswahl und Fokus",
    },
  },

  // Texte der Startseite
  home: {
    h1: "Überlass alles, was du jeden Tag auf deinem Mac wiederholst, Keyboard Maestro",
    // lead: erster Teil, hervorgehobener Satz, letzter Teil
    lead: ["Keyboard Maestro ist eine Automatisierungs-App für den Mac von Stairways Software. Du legst fest, wann was passieren soll: eine Taste drücken und eine bestimmte App öffnen, ein paar Buchstaben tippen und sie durch einen ganzen Absatz ersetzen. Hast du es einmal eingerichtet, erledigt Keyboard Maestro die Aufgabe im Hintergrund – jedes Mal genau gleich. Diese Seite ist für alle, die noch nie etwas automatisiert haben, und auch für alle, die Keyboard Maestro schon nutzen und mehr damit machen möchten. ", "Dies ist eine inoffizielle Anleitung", ", nicht mit Stairways Software verbunden. Maßgeblich dafür, was die Funktionen können und wie sie arbeiten, ist das offizielle Wiki."],
    cta: ["Neu hier? Starte mit Lektion 1", "Nutzt du es schon? Zu den How-tos (Englisch)"],
    ctaNote: "In Lektion 1 richtest du eine Taste ein, die eine App öffnet, in Lektion 2 wird aus ein paar Buchstaben ein ganzer Absatz, und in Lektion 3 erledigt eine Taste deine komplette Routine zum Start in den Tag. Ganz ohne Code.",
    painH: "Kommt dir das bekannt vor?",
    PAIN: [
      "Wenn du deinen Eltern, Kunden oder Kollegen antwortest, tippst du mehrmals am Tag Buchstabe für Buchstabe „Alles klar, danke, ich melde mich bis Freitag“ ein.",
      "Jeden Morgen öffnest du Mail, Kalender und dieselbe Webseite und ziehst dann erst jedes Fenster wieder an seinen Platz, bevor du loslegen kannst.",
      "Du nutzt jeden Tag einen Menübefehl, der kein Tastenkürzel hat, und suchst ihn deshalb jedes Mal wieder mit der Maus.",
      "Für jede Bewerbung und jedes Angebot kopierst du wieder dieselbe Einleitung und dieselben Kontaktdaten aus dem letzten Dokument heraus.",
      "Du kopierst etwas Wichtiges, kopierst dann noch etwas anderes – und das Erste ist für immer weg.",
      "Jeden Abend zur gleichen Zeit solltest du eigentlich dieselbe Tabelle öffnen und den Blutdruck deiner Eltern eintragen, aber an vollen Tagen vergisst du es.",
    ],
    lessonsH: "Für den Einstieg reichen drei Lektionen",
    lessonsP: "Lies sie der Reihe nach. Jede dauert zehn bis fünfzehn Minuten, und du baust direkt mit. Nach diesen drei Lektionen kannst du deine eigenen Makros erstellen – alles andere auf der Seite kannst du einfach nachschlagen, wenn du es brauchst.",
    lessonsLabel: "Einstieg: 3 Lektionen",
    tracksH: "Wenn du dich sicher fühlst",
    tracksP: "Nach ein paar Makros willst du, dass Keyboard Maestro noch mehr übernimmt. Die ausführliche Anleitung führt in 8 Schritten grob durch drei Bereiche. Fang einfach mit dem an, den du gerade brauchst.",
    devNote: "Die ausführliche Anleitung gibt es vorerst auf Englisch (und Chinesisch). Die drei Einsteiger-Lektionen sind auf Deutsch.",
    // TRACKS: jeweils [Titel, Beschreibung] in fester Reihenfolge
    TRACKS: [
      ["Wie ein Makro abläuft", "Makrogruppen bestimmen, wo ein Makro gilt, Auslöser bestimmen, wann es startet, und Aktionen legen fest, was es tut. Wenn du diese drei Bausteine verstehst, kannst du die meisten Makros selbst bauen."],
      ["Makros, die sich anpassen", "Einen Text merken, dir eine Frage stellen, je nach Situation einen anderen Weg einschlagen oder auf etwas warten, bevor es weitergeht. Und alles zurückholen, was du kopiert hast."],
      ["Wenn etwas hakt – und wie es weitergeht", "Wenn ein Makro nicht klappt, prüfe zuerst die Berechtigungen und die Engine und gehe es dann Schritt für Schritt durch, um zu sehen, wo es hängen bleibt. Später kannst du Skripte einbinden, dieselben Makros auf zwei Macs nutzen und Makros mit anderen teilen."],
    ],
    tracksLabel: "Passende Schritte in der ausführlichen Anleitung",
    // Link zu einem Schritt der ausführlichen Anleitung: {n} = Schrittnummer, {title} = englischer Titel
    stepLink: "Schritt {n}: {title}",
    pending: "In Arbeit",
    fitH: "Ist das etwas für dich?", yesH: "Ja, wenn …", noH: "Noch nicht, wenn …",
    YES: [
      "du etwas mehrmals am Tag auf deinem Mac machst und es gern abgeben möchtest",
      "du keinen Code schreibst. Für die drei Einsteiger-Lektionen brauchst du keine einzige Zeile",
      "du bereit bist, dir ein paar Minuten Zeit zu nehmen und Systemberechtigungen wie Bedienungshilfen zu erteilen, weil Keyboard Maestro für dich Tasten drückt, Menüs auswählt und Fenster verschiebt",
      "du es erst ausprobieren möchtest, bevor du dich entscheidest. Keyboard Maestro ist kostenpflichtige Software, aber auf der offiziellen Website gibt es eine voll funktionsfähige Testversion",
    ],
    NO: [
      "du keinen Mac nutzt. Keyboard Maestro läuft nur auf dem Mac und braucht macOS 10.13 oder neuer",
      "du keiner App Systemberechtigungen geben möchtest. Ohne sie können viele Makros nicht laufen",
      "es eine einmalige Aufgabe ist. Einmal von Hand erledigen geht schneller",
    ],
  },

  // Titel, Dauer und Kurzbeschreibung der drei Einsteiger-Lektionen in fester Reihenfolge
  lessons: [
    { title: "Installieren und deine Lieblings-App mit einer Taste öffnen", minutes: "15 Minuten", sum: "Herunterladen, Berechtigungen erteilen, die Engine laufen lassen und dann dein erstes Makro bauen: ein Tastenkürzel, das die App öffnet, die du jeden Tag nutzt" },
    { title: "Ein paar Buchstaben tippen, einen ganzen Absatz bekommen", minutes: "10 Minuten", sum: "Die Adresse, Einleitung oder Antwort, die du jeden Tag tippst, kommt in einen Texteingabe-Auslöser: Du tippst ein paar Buchstaben ein und schon erscheint der ganze Text" },
    { title: "Eine Taste, eine ganze Routine", minutes: "15 Minuten", sum: "Mach aus deinen morgendlichen Klicks ein einziges Makro: ein paar Apps und eine Webseite öffnen, die Fenster an ihren Platz schieben – und dann lernst du, wie du es stoppst und wo du nachschaust, wenn etwas nicht klappt" },
  ],

  // Seitenrahmen einer Lektion
  lesson: {
    eyebrow: "Einstieg · Lektion {n} von {total}",
    prog: "Fortschritt: Lektion {n} von {total}",
    nav: "Vorherige und nächste Lektion",
    prev: "Vorherige",
    next: "Nächste",
    title: "Lektion {n}: {title}",
    tldr: "In einem Satz",
  },

  // Komponenten im Seiteninhalt
  comp: {
    callout: { ok: "Das solltest du sehen", warn: "Aufgepasst", no: "Nicht machen", tip: "Tipp" },
    copyTitle: "Zum Kopieren",
    copy: "Kopieren",
    cmdDone: "Befehl kopiert",
    cmdLabel: "Befehl kopieren: {c}",
    reply: "Beispielansicht: So ungefähr zeigt es Keyboard Maestro an",
    // Abschlusszeile jeder Seite: {lead} {gh-Link}{faq[0]}{faq[1]-Link}{faq[2]}
    feedback: {
      lead: "Ist etwas auf dieser Seite unklar, oder hat es nicht wie beschrieben geklappt?",
      gh: "Melde es auf GitHub",
      faq: [". Oder schau zuerst in die ", "FAQ", "."],
    },
    // Kontakt- und Diskussionskarte am Ende der Startseite und der FAQ
    contact: {
      h: "Fragen und Austausch",
      p: "Hängst du bei einem Schritt fest, ist etwas unklar oder hast du ein Makro gebaut, das sich zu teilen lohnt? Melde dich damit auf GitHub. Die häufigsten Fragen fließen direkt in die Anleitung ein. Du kannst gern auf Deutsch schreiben.",
      faq: ["Bevor du fragst, schau in die ", "FAQ", ": Viele Antworten stehen dort schon."],
      btn: "Auf GitHub fragen oder diskutieren",
      x: "Der Autor ist auf X",
      privacy: "Bevor du Screenshots oder exportierte Makros schickst, entferne bitte deine Lizenzdaten, Passwörter sowie alle persönlichen Texte aus Variablen oder Zwischenablagen.",
    },
  },
  figs: { ui: { label: "Schaubild", replay: "Nochmal ansehen" } },
};
