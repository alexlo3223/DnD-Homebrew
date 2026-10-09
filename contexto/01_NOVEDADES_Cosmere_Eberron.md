# Novedades y poda (7 oct 2026) — complementa 00_CONTEXTO_COMPENDIO.md

La colección pasó de 36 a 47 clases con 11 nuevas, y después, tras un análisis de redundancias, se podó a **41 clases**. Este documento lista las 11 nuevas **y** los cambios de la poda. Si algo contradice a 00_CONTEXTO_COMPENDIO.md en recuentos, manda este.

**Bajas del 9 oct 2026 (pedidas por Alex):** se eliminaron El Aiel, La Soñadora, El Forjado de Guerra y El Rostro Prestado. Ya no existen; no recrearlas ni referirse a ellas.

El Códice (índice publicado) se sincronizó el 9 oct 2026 con estas bajas.

## Poda 47 → 41 (aprobada por Alex)
- **El Renard** → fusionado en **El Cazavampiros Belmont** como Tradición «Caza Ligera» (usa Sellos en vez de espacios de conjuro; Cruz Voltereta). El_Renard.html eliminado.
- **El Feruquimista** → fusionado en **El Alomante** como Don «Feruquimista» (Metalmentes con un contador propio de Cargas, separado de la Reserva). El_Feruquimista.html eliminado.
- **El Estratega** → ahora es la Motivación «Metis» de **El Héroe** (usa Areté). El_Estratega.html eliminado.
- **El Señor de Sangre** → ahora es la 4.ª Forma «Corte del Señor» de **El Dhampiro** (usa Sangre; Vasallos de Sangre, Sala y Fuego del Castillo). El_Senor_de_Sangre.html eliminado.
- **El Intercambiador** → eliminado (solapaba con la subclase Mejor Amigo del Recipiente).
- **Filo Arcano** → eliminado (lo cubre el Herrero de Guerra).
- **El Oficiante** → se queda, pero **rehecho** para que no sea un Paladín moderno: sin espacios de conjuro de semilanzador, sin Aura ni Golpe de Fe. Ahora es un «funcionario de lo sobrenatural»:
  - **Expediente** (investigar para obtener Tipo, Nombre y Debilidad de la criatura; límite = bonificador de competencia; sus bonos solo se aplican con Expediente abierto).
  - **Ritos** con utilería (tiza, sal, agua bendita, campana, linterna UV) que cuestan Devoción, en lugar de conjuros.
  - **Responso** (nv 6): los aliados refuerzan los Ritos con su reacción.
  - **Vigilia / Fervor**: la Devoción se repone sola si no gastas (Vigilia); el Fervor se enciende voluntariamente (nv 2) y cuesta 1 Devoción por turno.
  - Mantiene las 3 Órdenes (Cadena Ardiente, Umbral, Vela Muda) y el tono urbano moderno. Sigue distinto del Exorcista de las Cenizas (Locke, Ignición y Clavos).

## Jujutsu Kaisen (ahora 7 en total con la base)
- **El Juez** (Higuruma) — El_Juez.html. d8. Pruebas, Cargos y Penas. Tribunales: Fiscal, Defensor, Verdugo.
- (El Intercambiador, ya eliminado.)

## Castlevania (+2 nuevas que se mantienen)
- **La Guadaña** (Muerte) — La_Guadana.html. Almas. Facetas: Segador, Hoz Danzante, Cobrador.
- **El Licántropo** — El_Licantropo.html. Sangre de la Bestia. Linajes: Lobo Solitario, Alfa de la Manada, Luna Roja.

## Cosmere (NUEVO, 2 clases)
Tema visual: estrellas, ceniza, lluvia e hilos.
- **El Alomante** (Nacidos de la Bruma) — El_Alomante.html. Reserva de Metal. Dones: Lanzamonedas, Brazo de Peltre, Voz de la Bruma y **Feruquimista** (Cargas).
- **El Corredor del Viento** (Radiantes) — El_Corredor_del_Viento.html. Luz de Tormenta e Ideales. Escuadras: Caballero de Honor, Guardián de Puente, Señor del Cielo.
- Pendiente: Alex pidió «unas del cosmere»; se puede añadir otra (Elantrio, Forjador de Almas, Sacadiano…).

## Eberron (1 clase vigente)
Tema visual: líneas doradas y marca del dragón.
- **El Portador de la Marca** — El_Portador_de_la_Marca.html. d8. Pulsos de la Marca, que se ganan al servir a otros. Marcas: Tormenta (Lyrandar), Centinela (Deneith), Curación (Jorasco), elegidas a nivel 1.
- (El Forjado de Guerra y El Rostro Prestado fueron eliminados el 9 oct 2026.)

## Verificación
Las 11 nuevas pasaron `node --check` y una prueba de humo con Chromium antes de la poda. Las 5 clases modificadas en la poda (Oficiante, Dhampiro, Héroe, Cazavampiros, Alomante) pasaron `node --check`; no se han revisado visualmente con las fuentes reales.
