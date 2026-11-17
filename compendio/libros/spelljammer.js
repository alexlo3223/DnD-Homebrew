/* Spelljammer: Adventures in Space (Astral Adventurer's Guide, Boo's Astral Menagerie, Light of Xaryxis) — resúmenes propios */
libro('sj','Spelljammer: Adventures in Space','espacio');

/* ——— Razas (sin mejoras fijas: +2/+1 o +1/+1/+1 a elegir) ——— */
const SJ={mej:{},elegir:{n:3,val:1},idiomas:'Común y uno a elegir'};
raza('sj',{...SJ,id:'elfoastral',n:'Elfo astral',tam:'Mediano',vel:30,hab:['Percepción'],
  lore:'Elfos que dejaron el mundo material hace siglos para vivir en el Mar Astral, tocados por la luz de los dioses.',
  rasgos:[['Fuego astral','Un truco a elegir entre luces danzantes, luz y llama sagrada.'],['Visión en la oscuridad','60 pies.'],['Linaje feérico','Ventaja contra quedar hechizado.'],
    ['Sentidos agudos','Competencia en Percepción.'],['Paso de luz estelar','Acción adicional: te teletransportas 30 pies (competencia por descanso largo).'],
    ['Trance astral','Meditas 4 horas y ganas una competencia de habilidad y otra de arma o herramienta hasta el siguiente.']]});
raza('sj',{...SJ,id:'autognomo',n:'Autognomo',tam:'Pequeño',vel:30,
  lore:'Gnomos mecánicos construidos por gnomos de verdad, a veces abandonados y con ganas de encontrar su propósito.',
  rasgos:[['Constructo','Tu tipo de criatura es constructo.'],['Coraza blindada','Sin armadura, CA 13 + DES.'],['Hecho para triunfar','+1d4 a un ataque, prueba o salvación (competencia por descanso largo).'],
    ['Máquina reparable','Reparar y conjuros de curación te afectan; descansas inactivo.'],['Naturaleza mecánica','Resistencia al veneno, ventaja contra paralizado y envenenado; no comes, bebes ni respiras.'],
    ['Diseño especializado','Competencia en dos herramientas.']]});
raza('sj',{...SJ,id:'giff',n:'Giff',tam:'Mediano',vel:30,
  lore:'Mercenarios con aspecto de hipopótamo, disciplinados y enamorados de la pólvora.',
  rasgos:[['Nadador','Velocidad nadando igual a la de andar.'],['Chispa astral','Una vez por turno sumas daño de fuerza igual a tu competencia (competencia por descanso largo).'],
    ['Maestría con armas de fuego','Competencia con armas de fuego, ignoras la propiedad de recarga y la desventaja a largo alcance.'],
    ['Complexión de hipopótamo','Ventaja en pruebas y salvaciones de FUE; cuentas como un tamaño mayor para cargar.']]});
raza('sj',{...SJ,id:'hadozee',n:'Hadozee',tam:'Mediano o Pequeño',vel:30,
  lore:'Marineros simiescos con membranas para planear, muy queridos en las tripulaciones.',
  rasgos:[['Trepador','Velocidad trepando igual a la de andar.'],['Pies hábiles','Acción adicional para Usar un objeto.'],['Planear','Al caer, te desplazas 5 pies en horizontal por cada pie que desciendes.'],
    ['Esquiva hadozee','Reacción: reduces el daño 1d6 + competencia (competencia por descanso largo).']]});
raza('sj',{...SJ,id:'plasmoide',n:'Plasmoide',tam:'Mediano o Pequeño',vel:30,
  lore:'Seres amorfos de gelatina que cambian de forma y se cuelan por cualquier rendija.',
  rasgos:[['Limo','Tu tipo de criatura es limo.'],['Amorfo','Te cuelas por huecos de una pulgada y tienes ventaja para escapar de agarres.'],['Visión en la oscuridad','60 pies.'],
    ['Aguantar la respiración','Una hora.'],['Resistencia natural','Resistencia a ácido y veneno, ventaja contra envenenado.'],
    ['Moldear el cuerpo','Pseudópodos para manipular objetos y cambiar de aspecto.']]});
raza('sj',{...SJ,id:'thrikreen',n:'Thri-kreen',tam:'Mediano o Pequeño',vel:30,idiomas:'Común y telepatía',
  lore:'Insectoides de cuatro brazos que no duermen y hablan con la mente.',
  rasgos:[['Monstruosidad','Tu tipo de criatura es monstruosidad.'],['Caparazón','Sin armadura, CA 13 + DES.'],['Caparazón camaleónico','Cambias de color: ventaja en Sigilo para esconderte.'],
    ['Visión en la oscuridad','60 pies.'],['Brazos secundarios','Dos brazos menores para objetos ligeros y armas ligeras.'],['Sin sueño','Descansas sin dormir, consciente.'],
    ['Telepatía thri-kreen','Hablas mentalmente a 120 pies.']]});

/* ——— Objetos ——— */
[['Traje de pez','Objeto maravilloso','Muy raro',false,'Te deja respirar y moverte en el vacío y bajo el agua.'],
 ['Yelmo de spelljammer','Objeto maravilloso','Raro','un lanzador','Silla que convierte la magia del piloto en propulsión de una nave.'],
 ['Planetario del espacio salvaje','Objeto maravilloso','Poco común',false,'Maqueta animada de un sistema que muestra dónde está cada cuerpo celeste.']
].forEach(o=>objeto('sj',o));
/* Su ambientación está en libros/mundos/. */
