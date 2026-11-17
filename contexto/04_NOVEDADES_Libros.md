# Contenido de los libros oficiales y de terceros — 17 nov 2026

Se pasó al compendio y a la ficha el contenido jugable de los PDF de la carpeta raíz (los PDF no se suben: `.gitignore`).

- **Dónde está:** `compendio/libros/*.js`, cargados después de `oficial.js` en `index.html` y `ficha.html`. `base.js` define `libro()`, `subclase()`, `raza()`, `objeto()` y `ambientacion()`.
- **Criterio:** igual que `oficial.js`: solo mecánicas resumidas con palabras propias, nunca texto copiado de los libros.
- **Clases:** se añadió el **Artífice** (versión de Forge of the Artificer) con sus 5 especialidades; lanza como medio lanzador desde el nivel 1 (tipo `artifice`) y su lista marca con `a` los conjuros del Manual que la tienen.
- **Subclases:** se añaden a las 12 clases del Manual con su fuente (`src`), un lema (`e`) y rasgos `[nivel, nombre, resumen]`. Si el nivel de la subclase difiere del de la clase se indica con `nivel`.
- **Manual 2024:** no se duplicaron las clases; cada clase oficial tiene una sección «Cambios en el Manual 2024» (`v24`) y se añadieron solo las subclases y especies nuevas (Árbol del Mundo, Danza, Mar; aasimar, goliat y orco 2024).
- **Razas:** agrupadas por libro en la pestaña Razas y en el paso de raza de la ficha. Las de reglas modernas (sin mejoras fijas) usan `elegir:{n:3,val:1}`.
- **Objetos:** pestaña Objetos, una tabla por libro. **Ambientaciones:** Faerûn (Costa de la Espada), Eberron, Espacio Salvaje, Tal'Dorei, Etharis (Grim Hollow) y Obojima; cada una lista al final las opciones de personaje de sus libros.
- **Pendiente si se quiere:** trasfondos y dotes (no hay sitio en el proyecto todavía), conjuros nuevos de los suplementos, transformaciones de Grim Hollow y pociones de Obojima en detalle.
