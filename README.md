# D&D Homebrew — El Códice de Clases

Colección de 43 clases homebrew de D&D 5e, en español. Cada clase es un HTML autónomo con su propia ficha y rastreador de recursos.

- `compendio/` — el compendio de las 43 clases: índice con buscador y filtros (`index.html`), datos (`datos.js`) y lector (`lector.js`).
- `compendio/ficha.html` — «Personajes»: lista de personajes, asistente de 7 pasos para crearlos (raza, clase, características, habilidades, conjuros, detalles y resumen) y hoja completa para consultarlos y editarlos. Las fichas se guardan en el navegador y se pueden exportar/importar en JSON.
- `compendio/oficial.js` — razas, clases y conjuros del Manual del Jugador (2014): solo mecánicas y resúmenes propios, sin texto del libro.
- `compendio/libros/` — un archivo por libro (Manual 2024, Xanathar, Tasha, Volo, Costa de la Espada, Eberron, Spelljammer, Tal'Dorei, Grim Hollow y Obojima) que añade subclases, razas, la clase artífice, objetos mágicos y ambientaciones. Mismo criterio: resúmenes propios. `libros/base.js` explica cómo añadir más.
- El inicio del compendio es un **lobby**: accesos a cada apartado y una «mesa» donde arrastrar (o fijar con ＋) clases, razas, objetos y ambientaciones desde el menú lateral, que lista todo el contenido. La mesa se guarda en el navegador.
- El compendio tiene cuatro pestañas: Clases, Razas (agrupadas por libro), Objetos (una tabla por libro) y Ambientaciones (con las opciones de personaje de cada mundo).
- `clases/` — un HTML por clase (la «ficha original» que enlaza el compendio).
- `contexto/` — documentos de contexto (decisiones de diseño, fusiones, bajas y novedades) para retomar el trabajo.

Los HTML se abren directamente en el navegador; con GitHub Pages el compendio está en `/compendio/`.
