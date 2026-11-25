// Textos de la interfaz y de la página de inicio en español (es).
// Los marcadores {nombre} los sustituye fmt(); deben conservarse exactamente igual.
// En español se ofrecen la página de inicio y las tres lecciones para principiantes;
// la guía completa, las guías prácticas, la wiki y las preguntas frecuentes enlazan a la versión en inglés.
export default {
  ui: {
    brand: "Keyboard Maestro para principiantes",
    desc: "Una guía no oficial de Keyboard Maestro: deja en manos de las macros lo que repites cada día en tu Mac al escribir, hacer clic y abrir apps. Desde instalarlo y crear tu primera macro hasta las variables, el portapapeles y la depuración, explicado en palabras sencillas.",
    skip: "Saltar al contenido",
    menu: "Abrir menú",
    search: "Buscar en la guía",
    searchPh: "Buscar lecciones, pasos, guías prácticas, términos…",
    searchEmpty: "No se encontró nada. Prueba con otra palabra",
    look: "Apariencia",
    lang: "Idioma",
    repo: "Esta guía en GitHub",
    repoMore: "Más: la wiki oficial y el sitio web de Keyboard Maestro",
    repoDefault: "Predeterminado",
    // Tres enlaces: [nombre, breve descripción], en orden fijo (esta guía, wiki oficial, sitio oficial)
    repos: [
      ["Esta guía", "Código fuente de esta guía; reporta aquí cualquier problema"],
      ["Wiki de Keyboard Maestro", "La fuente de referencia sobre sus características y cómo funciona"],
      ["Sitio web de Keyboard Maestro", "Descarga y compra"],
    ],
    navLabel: "Navegación del sitio",
    start: "Empezar",
    home: "Inicio",
    lessons: "Ruta para principiantes: tres lecciones",
    more: "Más (en inglés)",
    main: "Guía completa: 8 pasos",
    howto: "Guías prácticas: cómo se hace",
    wiki: "Wiki: qué es cada cosa",
    faq: "Preguntas frecuentes",
    toc: "En esta página",
    tocLabel: "En esta página",
    hintMain: "Guía completa (inglés)",
    hintLesson: "Ruta para principiantes",
    hintFaq: "Preguntas frecuentes (inglés)",
    hintOther: "Inglés",
    section: "Sección",
    // Texto del enlace {docs} en el pie de página (wiki oficial); {docs} y {github} se sustituyen por enlaces
    docsLink: "wiki oficial",
    foot: "Guía no oficial de Keyboard Maestro, sin relación con Stairways Software. Keyboard Maestro es una marca comercial de Stairways Software Pty Ltd. Para consultar sus características y cómo funciona, la {docs} es la fuente de referencia. El código fuente y los comentarios sobre esta guía están en {github}.",
    // Panel «Apariencia» de la barra superior
    appearance: {
      group: "Apariencia", theme: "Tema", light: "Claro", dark: "Oscuro", system: "Sistema",
      corners: "Esquinas redondeadas", cornersDesc: "Si lo desactivas, todas las esquinas quedan rectas",
      accent: "Color de énfasis", accentDesc: "Se usa para botones, selección y foco",
    },
  },

  // Textos de la página de inicio
  home: {
    h1: "Deja en manos de Keyboard Maestro lo que repites cada día en tu Mac",
    // lead: primera parte, frase resaltada y cierre
    lead: ["Keyboard Maestro es una app de automatización para Mac creada por Stairways Software. Tú le dices cuándo y qué hacer: pulsa esta tecla y abre esa app, escribe estas pocas letras y cámbialas por un párrafo entero. En cuanto se lo dices, hace el trabajo en segundo plano, siempre igual. Este sitio es para quienes nunca han automatizado nada, y también para quienes ya lo usan y quieren ir más allá. ", "Esta es una guía no oficial", ", sin relación con Stairways Software. Para consultar sus características y cómo funciona, la wiki oficial es la fuente de referencia."],
    cta: ["¿Es tu primera vez? Empieza por la lección 1", "¿Ya lo usas? Guías prácticas (en inglés)"],
    ctaNote: "En la lección 1 configuras una tecla que abre una app, en la lección 2 conviertes unas pocas letras en un párrafo entero y en la lección 3 haces que una sola tecla ejecute tu rutina de inicio del día. No hace falta escribir código.",
    painH: "¿Te suena familiar?",
    PAIN: [
      "Al responder a tus padres, clientes o colegas, escribes «Recibido, gracias, te respondo antes del viernes» letra por letra varias veces al día.",
      "Cada mañana abres Mail, Calendario y la misma página web, y luego arrastras cada ventana a su lugar antes de poder empezar.",
      "Hay un comando de menú que usas todos los días y no tiene atajo de teclado, así que cada vez tienes que ir a buscarlo con el ratón.",
      "Cada vez que envías una solicitud de empleo o un presupuesto, tienes que copiar la misma presentación y los mismos datos de contacto del envío anterior.",
      "Copias algo importante, luego copias otra cosa y lo primero desaparece para siempre.",
      "Todas las noches a la misma hora tienes que abrir la misma hoja de cálculo para anotar la presión arterial de tus padres, y en los días ocupados se te olvida.",
    ],
    lessonsH: "Para empezar solo necesitas tres lecciones",
    lessonsP: "Léelas en orden. Cada una lleva diez o quince minutos y vas construyendo sobre la marcha. Después de estas tres ya podrás crear tus propias macros, y todo lo demás del sitio está ahí para consultarlo cuando lo necesites.",
    lessonsLabel: "Ruta para principiantes: 3 lecciones",
    tracksH: "Cuando ya tengas soltura",
    tracksP: "Después de crear unas cuantas macros, querrás que haga más cosas. La guía completa se divide en 8 pasos, organizados más o menos en tres rutas. Empieza por la que necesites ahora mismo.",
    // La guía completa por ahora solo está en inglés y en chino
    devNote: "Por ahora, la guía completa está en inglés (y en chino). Las tres lecciones para principiantes están en español.",
    // TRACKS: cada elemento es [título, descripción], con orden e iconos fijos
    TRACKS: [
      ["Cómo se ejecuta una macro", "Los grupos de macros deciden dónde funciona una macro, los activadores deciden cuándo empieza y las acciones indican qué hace. Entiende estas tres piezas y podrás crear la mayoría de las macros por tu cuenta."],
      ["Macros que se adaptan", "Recordar un texto, hacerte una pregunta, tomar un camino distinto según lo que esté pasando o esperar a que ocurra algo antes de seguir. Y recuperar cualquier cosa que hayas copiado."],
      ["Cuando algo falla, y cómo ir más allá", "Cuando una macro no funciona, revisa primero los permisos y el Engine, y luego ejecútala paso a paso para ver dónde se atasca. Más adelante podrás conectar scripts, usar las mismas macros en dos Mac y compartir macros con otras personas."],
    ],
    tracksLabel: "Pasos correspondientes en la guía completa",
    // Enlace a cada paso de la guía completa: {n} es el número y {title} el título (en inglés)
    stepLink: "Paso {n}: {title}",
    pending: "En preparación",
    fitH: "¿Es para ti?", yesH: "Sí, si", noH: "Todavía no, si",
    YES: [
      "Hay algo que haces en tu Mac varias veces al día y te gustaría que lo hiciera solo",
      "No escribes código. Las tres lecciones para principiantes no necesitan ni una sola línea",
      "No te importa dedicar unos minutos a darle permisos del sistema como Accesibilidad, ya que pulsa teclas, elige menús y mueve ventanas por ti",
      "Quieres probarlo antes de decidirte. Es un programa de pago, pero el sitio oficial ofrece una versión de prueba completamente funcional",
    ],
    NO: [
      "No usas Mac. Es solo para Mac y necesita macOS 10.13 o posterior",
      "No quieres dar permisos del sistema a ninguna app. Sin ellos, muchas macros no pueden ejecutarse",
      "Es una tarea puntual. Hacerlo una vez a mano es más rápido",
    ],
  },

  // Título, duración y resumen de las tres lecciones para principiantes (en orden fijo)
  lessons: [
    { title: "Instálalo y abre tu app favorita con una tecla", minutes: "15 minutos", sum: "Descárgalo, dale los permisos, mantén el Engine en marcha y crea tu primera macro: un atajo de teclado que abre la app que usas todos los días" },
    { title: "Escribe unas pocas letras y obtén un párrafo entero", minutes: "10 minutos", sum: "La dirección, la presentación o la respuesta que escribes cada día pasa a un activador por texto escrito: escribes unas pocas letras y aparece el texto completo" },
    { title: "Una tecla, toda una rutina", minutes: "15 minutos", sum: "Convierte los clics que haces cada mañana en una sola macro: abre varias apps y una página web, coloca las ventanas en su lugar y luego aprende a detenerla y dónde mirar cuando algo falla" },
  ],

  // Estructura de cada página de lección
  lesson: {
    eyebrow: "Ruta para principiantes · lección {n} de {total}",
    prog: "Progreso: lección {n} de {total}",
    nav: "Lección anterior y siguiente",
    prev: "Anterior",
    next: "Siguiente",
    title: "Lección {n}: {title}",
    tldr: "En una línea",
  },

  // Componentes usados en el contenido
  comp: {
    callout: { ok: "Deberías ver", warn: "Ten en cuenta", no: "No hagas esto", tip: "Consejo" },
    copyTitle: "Copia esto",
    copy: "Copiar",
    cmdDone: "Comando copiado",
    cmdLabel: "Copiar comando: {c}",
    reply: "Ejemplo: más o menos lo que muestra Keyboard Maestro",
    // Línea final de cada página: {lead} {enlace gh}{faq[0]}{enlace faq[1]}{faq[2]}
    feedback: {
      lead: "¿Algo en esta página no quedó claro o no funcionó como se describe?",
      gh: "Coméntalo en GitHub",
      faq: [". O revisa primero las ", "preguntas frecuentes", "."],
    },
    // Tarjeta de «Preguntas y comentarios» al final de la página de inicio y de preguntas frecuentes
    contact: {
      h: "Preguntas y comentarios",
      p: "¿Te atascaste en algún paso, encontraste algo poco claro o creaste una macro que vale la pena compartir? Tráelo a GitHub. Las preguntas que más se repiten se incorporan a la guía. Puedes escribir en español sin problema.",
      faq: ["Antes de preguntar, revisa las ", "preguntas frecuentes", ": muchas respuestas ya están ahí."],
      btn: "Preguntar o comentar en GitHub",
      x: "El autor está en X",
      privacy: "Antes de enviar capturas de pantalla o macros exportadas, quita los datos de tu licencia, tus contraseñas y cualquier texto personal guardado en variables o en el portapapeles.",
    },
  },
  figs: { ui: { label: "Diagrama", replay: "Ver de nuevo" } },
};
