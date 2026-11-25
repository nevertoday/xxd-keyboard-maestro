<div align="center">

# Keyboard Maestro para principiantes

[中文](./README.md) · [English](./README.en.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · **Español** · [Português](./README.pt.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Русский](./README.ru.md) · [العربية](./README.ar.md)

### Sácale el máximo provecho a Keyboard Maestro: deja lo repetitivo a una sola tecla

Keyboard Maestro es automatización para Mac: escribes macros en el editor y el Engine (el motor en segundo plano) se encarga de ejecutarlas.<br>Esta guía sigue la wiki oficial de Keyboard Maestro y la convierte en tres lecciones breves, para que puedas seguirla aunque nunca hayas automatizado nada.

**[Empezar por la lección 1 →](https://keyboardmaestro.xiaoxiaodong.ai/es/start/1-first-macro/)**　·　**[¿Ya lo usas? Guía completa (en inglés) →](https://keyboardmaestro.xiaoxiaodong.ai/en/guide/0-what/)**

<sub>No oficial · gratis · código abierto · 10 idiomas (el sitio completo en chino e inglés; la página de inicio y las tres lecciones en 8 más)</sub>

</div>

<p align="center">
  <img src="assets/en/hero.svg" width="100%" alt="Demostración: se pulsan cuatro teclas, ⌃⌥⌘T, y se ejecuta una macro llamada «Start my day». En la tarjeta de la macro se ilumina primero la fila de Hot Key y después, una por una, las tres acciones: Activate a Specific Application abre Calendario, Open a URL abre una página web y Manipulate a Window mueve la ventana del navegador a la mitad derecha de la pantalla, mientras en una pantalla pequeña al lado aparecen las ventanas de Calendario y del navegador. A la izquierda se iluminan las tres lecciones para principiantes: instálalo y abre tu app favorita con una tecla; escribe unas pocas letras y obtén un párrafo entero; una tecla, toda una rutina">
</p>

## ¿Te suena familiar?

Abres tu Mac por la mañana, haces clic en Calendario, abres la página web que revisas todos los días y luego arrastras cada ventana al lugar que te gusta. A lo largo del día escribes varias veces la misma dirección y la misma respuesta. Cada vez son solo unos segundos, pero pasa todos los días.

Keyboard Maestro deja todo eso en manos de las macros. Una macro indica dos cosas: cuándo empezar (sus activadores) y qué hacer una vez que empieza (sus acciones). A partir de ahí solo pulsas una tecla o escribes unas pocas letras, y Keyboard Maestro sigue los pasos por ti. Las macros viven dentro de grupos de macros, que funcionan como carpetas, pero además deciden en qué apps y en qué momento están activas esas macros.

<p align="center">
  <img src="assets/en/readme/macro.svg" width="100%" alt="Las tres columnas del editor de Keyboard Maestro. Macro Groups, donde viven y actúan las macros: está seleccionado Global Macro Group, con Mail y Safari debajo. Macros, cada una dedicada a una pequeña tarea: está seleccionada «Start my day». Después, la propia macro: bajo Triggered by any of the following aparecen Hot Key ⌃⌥⌘T y Time of Day 9:00, y cualquiera de los dos la pone en marcha; bajo Will execute the following actions aparecen Activate a Specific Application, Open a URL y Manipulate a Window, que se ejecutan de arriba abajo, una tras otra. Abajo: una macro solo se activa cuando está habilitada y su grupo de macros también está habilitado y activo.">
</p>

## Dos programas: uno para escribir y otro para ejecutar

Al instalarlo obtienes dos programas. **Keyboard Maestro** es el editor: lo abres cuando quieres escribir o modificar macros, guarda los cambios automáticamente a los pocos segundos (no hay botón de guardar) y puedes cerrarlo cuando termines. **Keyboard Maestro Engine** funciona todo el tiempo en segundo plano: escucha tus atajos de teclado, vigila la hora, detecta qué apps están abiertas, guarda tu historial del portapapeles y es quien realmente ejecuta tus macros. Si el Engine no está en marcha, no se activa nada, así que la recomendación oficial es activar **Launch Engine at Login** (iniciar el Engine al iniciar sesión) en las preferencias.

<p align="center">
  <img src="assets/en/readme/editor-engine.svg" width="100%" alt="A la izquierda, el editor, Keyboard Maestro: donde escribes y modificas macros; guarda automáticamente segundos después de cada cambio, sin botón de guardar; puedes cerrarlo cuando termines. A la derecha, el Engine, Keyboard Maestro Engine: funciona en segundo plano sin ventana; escucha atajos de teclado, vigila la hora y detecta apps; es quien realmente ejecuta tus macros. Tus macros pasan del editor al Engine; incluso después de cerrar el editor, pulsar ⌃⌥⌘T sigue ejecutando la macro. Abajo: mantén el Engine en marcha activando Launch Engine at Login en las preferencias.">
</p>

## Tres lecciones, una cosa a la vez

No hace falta saber programar ni aprenderte cien acciones de golpe. Cada lección se centra en una sola cosa y al terminarla te llevas una macro más funcionando.

<p align="center">
  <img src="assets/en/readme/lessons.svg" width="100%" alt="Las tres lecciones para principiantes. Lección 1, 15 minutos: instálalo y abre tu app favorita con una tecla; al terminar tendrás un atajo de teclado que abre la app que usas todos los días. Lección 2, 10 minutos: escribe unas pocas letras y obtén un párrafo entero; al terminar unas pocas letras se convertirán en un párrafo completo. Lección 3, 15 minutos: una tecla, toda una rutina; al terminar una sola tecla ejecutará tu rutina de la mañana: apps, una página web y las ventanas en su sitio.">
</p>

1. **[Instálalo y abre tu app favorita con una tecla](https://keyboardmaestro.xiaoxiaodong.ai/es/start/1-first-macro/)** (15 minutos): Descárgalo, concede los permisos, mantén el Engine en marcha y crea tu primera macro: un atajo de teclado que abre la app que usas todos los días.
2. **[Escribe unas pocas letras y obtén un párrafo entero](https://keyboardmaestro.xiaoxiaodong.ai/es/start/2-type-less/)** (10 minutos): Guarda en un activador por texto escrito la dirección, la presentación o la respuesta que escribes a diario: escribes unas pocas letras y aparece el texto completo.
3. **[Una tecla, toda una rutina](https://keyboardmaestro.xiaoxiaodong.ai/es/start/3-one-key-routine/)** (15 minutos): Convierte los clics que haces cada mañana en una sola macro: abre varias apps y una página web, coloca las ventanas en su sitio y aprende cómo detenerla y dónde mirar si falla.

## Guía completa

¿Ya terminaste las lecciones y quieres macros que se adapten, un portapapeles con memoria y una forma de averiguar por qué algo no se activó? Sigue estos temas en orden (en inglés):

| Paso | Tema | En una frase |
| --- | --- | --- |
| 0 | [Qué es Keyboard Maestro](https://keyboardmaestro.xiaoxiaodong.ai/en/guide/0-what/) | Automatización para Mac: escribes macros en el editor y el Engine las ejecuta en segundo plano. Cada macro combina un cuándo y un qué |
| 1 | [Grupos de macros: dónde funcionan tus macros](https://keyboardmaestro.xiaoxiaodong.ai/en/guide/1-groups/) | Un grupo de macros es una carpeta que además decide cuándo están activas sus macros: solo en ciertas apps, solo después de activarlo o mostradas en una paleta flotante |
| 2 | [Activadores: cuándo empieza una macro](https://keyboardmaestro.xiaoxiaodong.ai/en/guide/2-triggers/) | Un atajo de teclado, un texto escrito, una hora del día, al abrir una app, al conectarte a una red Wi-Fi o al llegar un archivo nuevo a una carpeta: elige el momento que te resulte más natural |
| 3 | [Acciones: qué hace una macro](https://keyboardmaestro.xiaoxiaodong.ai/en/guide/3-actions/) | Escribir texto, pulsar teclas, menús, apps, ventanas, clics y archivos: conoce la docena de acciones que más vas a usar y busca el resto cuando las necesites |
| 4 | [Variables, condiciones y bucles: macros que se adaptan](https://keyboardmaestro.xiaoxiaodong.ai/en/guide/4-variables/) | Recordar un texto, hacerte una pregunta, tomar un camino distinto según lo que haya en pantalla o esperar a que ocurra algo: la macro deja de ser una secuencia fija de teclas |
| 5 | [El portapapeles: todo lo que copiaste sigue ahí](https://keyboardmaestro.xiaoxiaodong.ai/en/guide/5-clipboard/) | El historial del portapapeles te permite pegar lo que copiaste antes, los portapapeles con nombre guardan varias cosas para siempre y los filtros modifican el texto antes de pegarlo |
| 6 | [Cuando una macro no funciona](https://keyboardmaestro.xiaoxiaodong.ai/en/guide/6-debug/) | Revisa primero los permisos y el Engine, y luego si el grupo está activo. ¿Sigue sin funcionar? Avanza paso a paso con el depurador o consulta el registro del Engine |
| 7 | [Para ir más allá: scripts, subrutinas, sincronización y cómo compartir](https://keyboardmaestro.xiaoxiaodong.ai/en/guide/7-advanced/) | Conecta scripts de shell, AppleScript y JavaScript, convierte pasos repetidos en subrutinas, sincroniza entre dos Mac y comparte macros con otras personas |

## Guías prácticas: tareas concretas

- **Escritura y texto**: [Convierte en abreviaturas lo que escribes a menudo](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/text-snippets/) · [Inserta la fecha de hoy con una tecla](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/insert-date/) · [Pega sin formato](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/paste-plain/) · [Completa el mismo formulario con una tecla](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/fill-form/)
- **Apps y ventanas**: [Salta a una app con una tecla](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/app-hotkeys/) · [Coloca tus ventanas donde quieras](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/window-layout/) · [Ponle a un comando de menú el atajo que no tiene](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/menu-shortcut/)
- **Archivos**: [Renombra varios archivos de una vez](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/rename-files/) · [Archiva cosas en cuanto llegan a una carpeta](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/watch-folder/)
- **Pantalla y ratón**: [Encuentra un botón en pantalla y haz clic en él](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/click-image/) · [Lee el texto de tu pantalla](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/ocr-text/)
- **A su hora**: [Ejecuta algo a la misma hora todos los días](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/daily-schedule/) · [Haz algo al conectarte a una red Wi-Fi o conectar un dispositivo](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/wifi-usb/)
- **Preguntándote antes**: [Haz que te pregunte antes de hacer la tarea](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/ask-input/) · [Crea una fila de botones que ejecutan macros](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/palette/)
- **Guardar y compartir**: [Usa las mismas macros en dos Mac](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/sync-macs/) · [Exporta, importa y comparte macros](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/share-macros/) · [Cuando una macro no se detiene](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/stop-macro/)

¿No entiendes un término o tienes dudas sobre algo? Consúltalo en la **[Wiki](https://keyboardmaestro.xiaoxiaodong.ai/en/wiki/)** y en las **[Preguntas frecuentes](https://keyboardmaestro.xiaoxiaodong.ai/en/faq/)** (en inglés).

## De dónde sale esta guía

Cada función, opción y ruta de menú está verificada con la [wiki oficial de Keyboard Maestro](https://wiki.keyboardmaestro.com/), enlazada en la página. Los nombres de los botones se escriben exactamente como los muestra la app. La guía se revisó con Keyboard Maestro 11.1.1 (2026-11-24), que necesita macOS 10.13 o posterior. Las experiencias del foro se citan solo como algo que probó otra persona, con su enlace.

Esta guía no incluye claves de licencia, cracks ni espejos de descarga; descarga Keyboard Maestro desde [su sitio web oficial](https://www.keyboardmaestro.com/). Nunca te pide que desactives los ajustes de seguridad de macOS, y los permisos se conceden tal como describe la wiki oficial.

Esta es una guía no oficial, sin relación con Stairways Software, y no habla en su nombre. Keyboard Maestro es una marca comercial de Stairways Software Pty Ltd. Las funciones cambian, así que la referencia son siempre la wiki oficial y la propia app.

## Ejecutarlo en local

```bash
npm install
npm run dev        # http://localhost:4446
npm run build      # salida en dist/
npm run check      # tras compilar: idiomas, sitio completo y nombres de interfaz
```

Las imágenes del README y las de vista previa para compartir se generan con `python3 tools/build_hero.py`, `python3 tools/build_readme_svgs.py` y `npm run og`; consulta «README 插画和分享大图» en [docs/MAINTAINING.md](docs/MAINTAINING.md) (en chino), donde también se explican las reglas de redacción, las fuentes y los scripts que sincronizan la wiki oficial y verifican los nombres de los botones. La estructura del sitio parte de [Saily para principiantes](https://github.com/nevertoday/xxd-saily) y [Grok Bot para principiantes](https://github.com/nevertoday/xxd-grokbot), y la interfaz usa 小小东 UI Kit.

El código y el texto están bajo licencia MIT; consulta [LICENSE](LICENSE). `public/xxd/` es la salida de compilación de 小小东 UI Kit y no está cubierta por la licencia MIT; consulta `public/xxd/LICENSE`.
