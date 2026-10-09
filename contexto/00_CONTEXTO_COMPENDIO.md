# Compendio de clases homebrew D&D 5e — Contexto para nuevos hilos

Última actualización: 9 de octubre de 2026.

> **Aviso:** la versión vigente de la colección es lo que haya en `clases/` (cualquier clase que no esté ahí ya no existe). Este documento describe la base original de 36 clases y sus decisiones. Para las clases nuevas, las fusiones y la poda, lee `01_NOVEDADES_Cosmere_Eberron.md` y los demás documentos de `contexto/`. Donde difieran, mandan los números. **Bajas del 9 oct 2026:** El Aiel, La Soñadora, El Forjado de Guerra y El Rostro Prestado se eliminaron a petición de Alex.

## 1. Cómo se trabaja

- **Formato:** cada clase es un HTML autónomo, en español, con tema oscuro, pestañas (Clase, Rasgos, Lista propia, Subclases y Ficha de juego) y un rastreador de recursos interactivo.
- **Entrega:** cada vez que se crea o actualiza una clase, se entregan **todos** los HTML de la colección como archivos, no solo una lista de nombres.
- **Flujo habitual:** primero preguntas y después construir. Si Alex dice «hazlo» o «te dejo hacer», se avanza tomando la opción razonable y se explica.
- **Arreglos:** se prefieren cambios quirúrgicos a reescrituras completas.

### Reglas de diseño (siempre)

- Nada de penalizaciones pasivas que castiguen. Un coste que el jugador elige pagar sí vale.
- Recursos que premian el juego activo, que se ganan haciendo cosas y no solo descansando.
- Diseños ligeros, sin capas de sistemas.
- Las clases nuevas tienen que ser **distintas a las oficiales de 5e** (p. ej. el Oficiante ya no juega como un Paladín).
- La subclase va al nivel 3, o al nivel 1 cuando es parte central del concepto.
- En las fichas solo se marca de forma visible el tipo de coste (Acción, Acción adicional, Reacción), no la habilidad entera.
- Los ganchos mecánicos deben distinguir a cada clase de las demás.
- Si una clase se solapa mucho con otra del mismo grupo, se fusiona como subclase o se elimina.

### Ambientaciones

- Grupos reales: **Jujutsu Kaisen**, **Castlevania**, **La Rueda del Tiempo**, y desde la ampliación **Cosmere** y **Eberron**.
- Las demás clases son ideas sueltas de fuentes distintas y no comparten ambientación. En el Códice se llaman «Folios sueltos».
- Dos clases parecidas están bien si pertenecen a ambientaciones distintas. Solo cuenta como redundancia un solapamiento dentro del mismo grupo.

## 2. El Códice (índice publicado)

- **Enlace:** https://claude.ai/artifact/YUoz6P5TF2w9Tyt9ENicgJ
- Es una página publicada con las clases organizadas en «volúmenes» por ambientación; se sincronizó el 9 oct 2026 (43 clases).
- **Vistas:** Estantería (fichas por volumen) y Mapa (tabla de magia frente a dado de golpe).
- **Atril:** cada clase se lee en un panel lateral sin salir del índice.
- **Buscador** y filtro por rol: Marcial, Semilanzador, Lanzador, Invocador, Astucia o Apoyo.
- **Archivos:** las clases se publican dentro del Códice como `clases/<Archivo>.html`. Cada copia lleva un botón fijo «← Códice», que se oculta cuando la clase se abre dentro del atril.
- **Para añadir una clase:** se mete su entrada en el array `C` de `index.html` con estos campos: volumen, archivo, nivel de magia 0–3, nombre, inspiración, rol, dado, recurso y gancho. Después se publica la copia con el botón en `clases/` y se actualizan los recuentos de los lomos y del texto.

## 3. Lista de la base original (con los cambios de la poda)

### Vol. I — Jujutsu Kaisen

Tema visual: papel washi, tinta y sello hanko rojo con kanji fijo en la esquina, con fuentes Shippori Mincho y Zen Kaku Gothic.

| Clase | Archivo | Notas |
|---|---|---|
| Técnica de las Diez Sombras (Megumi) | Diez_Sombras.html | Invocador de shikigami. Sello 十影. |
| El Hematúrgo (Choso) | Hematurgo.html | Manipulación de sangre, d10, CON. |
| Portador de la Restricción Celestial (Toji/Maki) | Restriccion_Celestial.html | Sin magia, d12, invisible a la adivinación. |
| El Hechicero Jujutsu | El_Hechicero_Jujutsu.html | La técnica innata es la subclase y se elige a nivel 1: Ilimitado (Gojo), Santuario (Sukuna) o Ratio 7:3 (Nanami). La Energía Maldita sube al arriesgar y vuelve a la «calma» fuera de combate. Expansión de Dominio a nivel 9. |
| El Recipiente (Yuji) | El_Recipiente.html | La Racha baja el umbral del Destello Negro. Golpes Malditos pagados con Racha. El Inquilino es un trato con favor narrativo. Subclases: Huésped del Rey, Mejor Amigo (Todo) y Destello Vivo. |
| El Habla Maldita (Inumaki) | El_Habla_Maldita.html | Vocabulario de 14 palabras pagadas con Voz. Subclases: Sello de la Serpiente, Megáfono y Guardián Callado. |

(El Intercambiador fue eliminado: solapaba con Mejor Amigo.)

### Vol. II — Castlevania

Tema visual: luna, rosetón de vidriera, murciélagos dorados y título en fraktur, con fuentes UnifrakturCook, IM Fell English SC, Cinzel y Crimson Text.

| Clase | Archivo | Notas |
|---|---|---|
| El Cazavampiros (linaje Belmont) | El_Cazavampiros_Belmont.html | Semilanzador con espacios de Paladín y tradiciones Belnades. Gancho: Caza del Mandoble. **Ahora incluye la Tradición «Caza Ligera»** (antes El Renard): Sellos en vez de espacios, Cruz Voltereta. |
| El Dhampiro (Alucard) | El_Dhampiro.html | Naturaleza Humana con luz y Vampírica en sombra, Dones pagados con Sangre. Formas: Lobo, Murciélago, Niebla y **Corte del Señor** (antes El Señor de Sangre: Vasallos de Sangre). |
| El Hablante (Sypha) | El_Hablante.html | Fuego, hielo y rayo se combinan pagando Aliento; Tormenta de los Tres a nivel 11. Caminos: Narradora, Hechicera de Batalla y Linaje Belnades. |
| El Forjador de Diablos (Héctor/Isaac) | El_Forjador_de_Diablos.html | Piezas de enemigos caídos para montar Diablos Inocentes. Linajes: Batalla, Hada y Mago. |
| La Portadora de Glifos (Shanoa) | La_Portadora_de_Glifos.html | Absorbe glifos con su reacción; tres huecos. Uniones pagadas con Corazones. Órdenes: Ecclesia, Tirador de Agartha y Sombra de Dominus. |

(El Renard y El Señor de Sangre ya no existen como clases independientes.)

### Vol. III — La Rueda del Tiempo (5)

Tema visual común: emblema de la Rueda girando dentro de la Gran Serpiente, con el símbolo de cada clase en el centro, frase en Antigua Lengua, trama de hilos del Entramado e icono de rueda. Fuentes Cinzel y EB Garamond.

| Clase | Archivo | Notas |
|---|---|---|
| El Tejedor de la Llama (Saidin, guerrero) | El_Tejedor_de_la_Llama.html | **Terminada; no tocar su contenido.** Solo se le cambió el diseño. Es la clase de Kyren al'Thorian. |
| El Tejedor del Poder (Aes Sedai común) | El_Tejedor_del_Poder.html | Lanzador completo. Siete Ajahs como subclases. |
| El Guardián (Warder común) | El_Guardian.html | Marcial d12 con Latidos y Formas. |
| El Recordado (Mat Cauthon) | El_Recordado.html | Ecos y Suerte del Ta'veren. Subclases: Atado al Cuerno y El General. |
| El Caminante de los Sueños (Perrin Aybara) | El_Caminante_de_los_Suenos.html | Hermano Lobo, d10. El nombre se mantiene porque Kael Thorn lo usa en la campaña. Sendas del Hacha y del Martillo. |

(El Aiel y La Soñadora fueron eliminados el 9 oct 2026.)

### Vol. IV — Folios sueltos

Cada una tiene su propio tema visual.

| Clase | Archivo | Notas |
|---|---|---|
| Cadena Escarlata | Cadena_Escarlata.html | Inspirada en Kurapika. Puntos de Aura, cadenas de 15 pies. |
| El Conjurador | El_Conjurador.html | Pactos, Fichas y Contratos Mayores. Cláusula de exclusión. |
| El Exorcista de las Cenizas | El_Exorcista_de_las_Cenizas.html | Inspirado en Locke. Ignición y Clavos. |
| El Filo Errante | El_Filo_Errante.html | Combos ordenados. |
| El Héroe | El_Heroe.html | Épica griega. Areté, Hazañas y Catasterismo. **Ahora 4 Motivaciones, incluida Metis** (antes El Estratega: Ardid, «Soy Nadie»). |
| El Herrero de Guerra | Herrero_de_Guerra.html | Espadas flotantes, Temple y semilanzador. Absorbe el concepto de Filo Arcano. |
| El Navegante Estelar | El_Navegante_Estelar.html | Instinto, Golpe del Horizonte y Cabo de Amarre. |
| El Oficiante | El_Oficiante.html | **Rehecho (7 oct 2026).** Exorcista moderno-burocrático, no Paladín: Expediente (Tipo, Nombre, Debilidad), Ritos con utilería pagados con Devoción, Responso, Vigilia/Fervor. Órdenes: Cadena Ardiente, Umbral, Vela Muda. |
| El Pistolero | El_Pistolero.html | Seis Cilindros y El Último Cilindro. |
| El Portador de la Mancha | El_Portador_de_la_Mancha.html | Guarda Gris de Dragon Age. Puntos de Mancha y Derecho de Reclutamiento. |
| El Tahúr | El_Tahur.html | Puntos de Lectura y La Apuesta. |
| El Vinculado | El_Vinculado.html | Espíritu compartido y manifestaciones. |
| El Absorbente | Ladron_de_Almas.html | Roba técnicas. El archivo se llama Ladrón de Almas. |
| El Marcado | Marcado.html | Tocado por el Vacío, al estilo Dishonored. |
| El Portador del Sello | Portador_del_Sello.html | Espada con demonio y guardián. La Hoja Despierta. |

### Clases añadidas después de la base (ver 01_NOVEDADES)

El Juez (JJK); La Guadaña y El Licántropo (Castlevania); El Alomante (con Feruquimista) y El Corredor del Viento (Cosmere); El Portador de la Marca (Eberron).

## 4. Decisiones ya tomadas

- **Eliminadas por relleno** (Rueda): Buscador, Iluminador y Cañista.
- **Descartadas**: Juglar (Thom) y Seanchan como clase.
- **Poda del 7 oct 2026 (47 → 41):** Renard → Cazavampiros; Feruquimista → Alomante; Estratega → Héroe; Señor de Sangre → Dhampiro; Intercambiador y Filo Arcano eliminados; Oficiante rehecho.
- **Bajas del 9 oct 2026 (a petición de Alex):** El Aiel, La Soñadora, El Forjado de Guerra y El Rostro Prestado.
- **Mat y Perrin no son semilanzadores**, porque no canalizan.
- **El Hablante** se hizo con combinaciones elementales para que no fuera un Mago.

## 5. Pendiente o por vigilar

- Probar en mesa el equilibrio de la **Expansión de Dominio**, del **Destello Negro**, de la **Caza Ligera** y del **Expediente/Fervor** del Oficiante.
- Los roles y el nivel de magia que muestra el Códice los asignó Claude; Alex puede corregirlos.
- **Fuentes:** el entorno de Claude no carga Google Fonts; conviene comprobar el aspecto en un navegador real.
- **Huecos detectados:** pocos sanadores o apoyo puro, y ninguna clase cubre lanzador d10 ni d12.

## 6. Herramientas de Claude

Las clases generadas se hicieron con un generador en Python (contenido por clase, capa visual por ambientación, ficha configurable). Si ese entorno ya no existe, basta con editar los HTML de `clases/` directamente: todos son autónomos.
