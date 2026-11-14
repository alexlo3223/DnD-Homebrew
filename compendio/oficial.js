/* Datos oficiales (Player's Handbook 5e, 2014) para el creador de fichas.
   Solo mecánicas y resúmenes propios en español: no reproduce texto del libro.
   Para ampliar: añade objetos a RAZAS, CLASES_OFICIALES o líneas a CONJUROS_TXT. */

/* T([1,2],[4,3]) → array de 20 niveles: 2 desde el nivel 1, 3 desde el 4… */
const T=(...p)=>Array.from({length:20},(_,i)=>{let v=0;for(const [n,x] of p)if(i+1>=n)v=x;return v;});
const MEJORA=['Mejora de característica','+2 a una característica o +1 a dos (o una dote, si se usan).'];

const RAZAS=[
  {id:'enano',n:'Enano',tam:'Mediano',vel:25,mej:{CON:2},idiomas:'Común y enano',
   comp:'Hacha de batalla, hacha de mano, martillo ligero y martillo de guerra; una herramienta de artesano (herrero, cervecero o albañil).',
   rasgos:[['Visión en la oscuridad','Ves en la penumbra a 60 pies como si fuera luz brillante, y en la oscuridad como en penumbra (sin colores).'],
     ['Resistencia enana','Ventaja en salvaciones contra veneno y resistencia al daño de veneno.'],
     ['Afinidad con la piedra','Doble de competencia en Historia sobre el origen de trabajos en piedra.'],
     ['Velocidad','La armadura pesada no reduce tu velocidad.']],
   sub:[{id:'colinas',n:'Enano de las colinas',mej:{SAB:1},pgNivel:1,rasgos:[['Dureza enana','+1 PG máximo por nivel.']]},
        {id:'montanas',n:'Enano de las montañas',mej:{FUE:2},comp:'Armaduras ligeras y medias.',rasgos:[['Entrenamiento con armaduras','Competencia con armaduras ligeras y medias.']]}]},
  {id:'elfo',n:'Elfo',tam:'Mediano',vel:30,mej:{DES:2},idiomas:'Común y élfico',hab:['Percepción'],
   rasgos:[['Visión en la oscuridad','60 pies.'],['Sentidos agudos','Competencia en Percepción.'],
     ['Linaje feérico','Ventaja contra ser hechizado; la magia no puede dormirte.'],['Trance','Meditas 4 horas en lugar de dormir 8.']],
   sub:[{id:'alto',n:'Alto elfo',mej:{INT:1},comp:'Espada larga, espada corta, arco corto y arco largo.',
         rasgos:[['Entrenamiento con armas élficas','Espada larga, espada corta, arco corto y arco largo.'],['Truco','Un truco de mago (INT).'],['Idioma adicional','Un idioma más.']]},
        {id:'bosques',n:'Elfo de los bosques',mej:{SAB:1},vel:35,comp:'Espada larga, espada corta, arco corto y arco largo.',
         rasgos:[['Entrenamiento con armas élficas','Espada larga, espada corta, arco corto y arco largo.'],['Pies ligeros','Velocidad 35 pies.'],['Máscara de la naturaleza','Puedes esconderte con solo estar ligeramente oculto por fenómenos naturales.']]},
        {id:'drow',n:'Elfo oscuro (drow)',mej:{CAR:1},comp:'Estoque, espada corta y ballesta de mano.',
         rasgos:[['Visión en la oscuridad superior','120 pies.'],['Sensibilidad a la luz solar','Desventaja en ataques y Percepción a la vista bajo luz solar directa.'],
           ['Magia drow','Luces danzantes; a nivel 3 fuego feérico y a nivel 5 oscuridad, una vez por descanso largo (CAR).'],['Entrenamiento con armas drow','Estoque, espada corta y ballesta de mano.']]}]},
  {id:'mediano',n:'Mediano',tam:'Pequeño',vel:25,mej:{DES:2},idiomas:'Común y mediano',
   rasgos:[['Afortunado','Si sacas un 1 natural en ataque, prueba o salvación, repites la tirada.'],['Valiente','Ventaja contra ser asustado.'],['Agilidad de mediano','Puedes atravesar el espacio de criaturas más grandes que tú.']],
   sub:[{id:'piesligeros',n:'Mediano piesligeros',mej:{CAR:1},rasgos:[['Sigiloso por naturaleza','Puedes esconderte tras una criatura al menos un tamaño mayor.']]},
        {id:'fornido',n:'Mediano fornido',mej:{CON:1},rasgos:[['Resistencia de los fornidos','Ventaja contra veneno y resistencia al daño de veneno.']]}]},
  {id:'humano',n:'Humano',tam:'Mediano',vel:30,mej:{},idiomas:'Común y uno a elegir',rasgos:[],
   sub:[{id:'estandar',n:'Humano',mej:{FUE:1,DES:1,CON:1,INT:1,SAB:1,CAR:1},rasgos:[['Versátil','+1 a todas las características.']]},
        {id:'variante',n:'Humano (variante)',mej:{},elegir:{n:2,val:1},habElegir:1,rasgos:[['Versátil','+1 a dos características a elegir.'],['Habilidad','Competencia en una habilidad.'],['Dote','Una dote a tu elección.']]}]},
  {id:'draconido',n:'Dracónido',tam:'Mediano',vel:30,mej:{FUE:2,CAR:1},idiomas:'Común y dracónico',
   rasgos:[['Arma de aliento','Acción: daño de tu linaje (2d6; 3d6 a nivel 6, 4d6 a 11, 5d6 a 16). CD 8 + CON + competencia. Una vez por descanso corto.'],
     ['Resistencia al daño','Resistencia al tipo de daño de tu linaje.']],
   sub:[['Azul','relámpago','línea de 5×30 pies','DES'],['Blanco','frío','cono de 15 pies','CON'],['Bronce','relámpago','línea de 5×30 pies','DES'],
        ['Cobre','ácido','línea de 5×30 pies','DES'],['Negro','ácido','línea de 5×30 pies','DES'],['Oro','fuego','cono de 15 pies','DES'],
        ['Oropel','fuego','línea de 5×30 pies','DES'],['Plata','frío','cono de 15 pies','CON'],['Rojo','fuego','cono de 15 pies','DES'],['Verde','veneno','cono de 15 pies','CON']]
     .map(([c,d,a,s])=>({id:c.toLowerCase(),n:`Linaje ${c.toLowerCase()}`,mej:{},rasgos:[['Linaje dracónico',`Dragón ${c.toLowerCase()}: daño de ${d}, ${a}, salvación de ${s}.`]]}))},
  {id:'gnomo',n:'Gnomo',tam:'Pequeño',vel:25,mej:{INT:2},idiomas:'Común y gnomo',
   rasgos:[['Visión en la oscuridad','60 pies.'],['Astucia gnoma','Ventaja en salvaciones de INT, SAB y CAR contra magia.']],
   sub:[{id:'bosques',n:'Gnomo de los bosques',mej:{DES:1},rasgos:[['Ilusionista nato','Conoces el truco ilusión menor (INT).'],['Hablar con bestias pequeñas','Te comunicas de forma simple con bestias Pequeñas o menores.']]},
        {id:'rocas',n:'Gnomo de las rocas',mej:{CON:1},comp:'Herramientas de manitas.',rasgos:[['Saber del artífice','Doble de competencia en Historia sobre objetos mágicos, alquímicos o tecnológicos.'],['Manitas','Construyes pequeños mecanismos de relojería.']]}]},
  {id:'semielfo',n:'Semielfo',tam:'Mediano',vel:30,mej:{CAR:2},elegir:{n:2,val:1,excepto:['CAR']},habElegir:2,idiomas:'Común, élfico y uno a elegir',
   rasgos:[['Visión en la oscuridad','60 pies.'],['Linaje feérico','Ventaja contra ser hechizado; la magia no puede dormirte.'],['Versatilidad con habilidades','Competencia en dos habilidades a elegir.']]},
  {id:'semiorco',n:'Semiorco',tam:'Mediano',vel:30,mej:{FUE:2,CON:1},idiomas:'Común y orco',hab:['Intimidación'],
   rasgos:[['Visión en la oscuridad','60 pies.'],['Amenazador','Competencia en Intimidación.'],
     ['Aguante incansable','Al caer a 0 PG sin morir, quedas a 1 PG. Una vez por descanso largo.'],['Ataques salvajes','En un crítico cuerpo a cuerpo, tira un dado de daño del arma más.']]},
  {id:'tiflin',n:'Tiflin',tam:'Mediano',vel:30,mej:{CAR:2,INT:1},idiomas:'Común e infernal',
   rasgos:[['Visión en la oscuridad','60 pies.'],['Resistencia infernal','Resistencia al daño de fuego.'],
     ['Legado infernal','Taumaturgia; a nivel 3 reprensión infernal (2.º nivel) y a nivel 5 oscuridad, una vez por descanso largo (CAR).']]}
];

/* Espacios de conjuro del lanzador completo por nivel de lanzador (1-20) */
const ESPACIOS_COMPLETO=[[2],[3],[4,2],[4,3],[4,3,2],[4,3,3],[4,3,3,1],[4,3,3,2],[4,3,3,3,1],[4,3,3,3,2],[4,3,3,3,2,1],[4,3,3,3,2,1],
  [4,3,3,3,2,1,1],[4,3,3,3,2,1,1],[4,3,3,3,2,1,1,1],[4,3,3,3,2,1,1,1],[4,3,3,3,2,1,1,1,1],[4,3,3,3,3,1,1,1,1],[4,3,3,3,3,2,1,1,1],[4,3,3,3,3,2,2,1,1]];

const CONOC_TERCIO=[0,0,3,4,4,4,5,6,6,7,8,8,9,10,10,11,11,11,12,13];

const CLASES_OFICIALES=[
  {id:'barbaro',n:'Bárbaro',d:'d12',sal:['FUE','CON'],arm:'Ligeras, medias y escudos',armas:'Sencillas y marciales',herr:'—',
   hab:{n:2,de:['Trato con animales','Atletismo','Intimidación','Naturaleza','Percepción','Supervivencia']},
   extras:{'Furias':T([1,2],[3,3],[6,4],[12,5],[17,6],[20,'∞']),'Daño de furia':T([1,'+2'],[9,'+3'],[16,'+4'])},
   rasgos:[[1,'Furia','Acción adicional: ventaja en pruebas y salvaciones de FUE, daño extra cuerpo a cuerpo con FUE y resistencia a contundente, cortante y perforante.'],
     [1,'Defensa sin armadura','Sin armadura, CA = 10 + DES + CON.'],[2,'Ataque temerario','Ventaja en ataques de FUE cuerpo a cuerpo este turno; los ataques contra ti también tienen ventaja.'],
     [2,'Sentido del peligro','Ventaja en salvaciones de DES contra efectos que puedes ver.'],[4,...MEJORA],[5,'Ataque adicional','Atacas dos veces con la acción de Atacar.'],
     [5,'Movimiento rápido','+10 pies de velocidad sin armadura pesada.'],[7,'Instinto salvaje','Ventaja en iniciativa; puedes actuar sorprendido si entras en furia.'],[8,...MEJORA],
     [9,'Crítico brutal','Un dado de daño extra en críticos cuerpo a cuerpo (2 a nivel 13, 3 a nivel 17).'],[11,'Furia implacable','En furia, al caer a 0 PG haz una salvación de CON (CD 10, +5 por uso) para quedar a 1 PG.'],
     [12,...MEJORA],[15,'Furia persistente','La furia solo termina antes de tiempo si caes inconsciente o decides acabarla.'],[16,...MEJORA],
     [18,'Poder indomable','Si una prueba de FUE es menor que tu FUE, usa la puntuación.'],[19,...MEJORA],[20,'Campeón primigenio','+4 FUE y +4 CON (máximo 24).']],
   sub:{nivel:3,titulo:'Senda primaria',op:[
     {n:'Senda del Berserker',r:[[3,'Frenesí'],[6,'Furia sin mente'],[10,'Presencia intimidante'],[14,'Represalia']]},
     {n:'Senda del Guerrero Totémico',r:[[3,'Buscador de espíritus'],[3,'Espíritu totémico'],[6,'Aspecto de la bestia'],[10,'Caminante espiritual'],[14,'Vínculo totémico']]}]}},

  {id:'bardo',n:'Bardo',d:'d8',sal:['DES','CAR'],arm:'Ligeras',armas:'Sencillas, ballesta de mano, espada larga, estoque y espada corta',herr:'Tres instrumentos musicales',
   hab:{n:3,de:'todas'},extras:{'Inspiración bárdica':T([1,'d6'],[5,'d8'],[10,'d10'],[15,'d12'])},
   magia:{car:'CAR',tipo:'completo',lista:'b',trucos:T([1,2],[4,3],[10,4]),conocidos:[4,5,6,7,8,9,10,11,12,14,15,15,16,18,19,19,20,22,22,22]},
   rasgos:[[1,'Lanzamiento de conjuros','Conjuros de bardo con CAR; usas un instrumento como canalizador.'],[1,'Inspiración bárdica','Acción adicional: un aliado gana un dado para sumar a una tirada. Usos = mod. de CAR por descanso largo.'],
     [2,'Aprendiz de mucho','Suma la mitad de tu competencia a las pruebas en las que no eres competente.'],[2,'Canción de descanso','Los aliados que gasten dados de golpe en un descanso corto recuperan 1d6 PG extra (sube con el nivel).'],
     [3,'Pericia','Doble de competencia en dos habilidades (dos más a nivel 10).'],[4,...MEJORA],[5,'Fuente de inspiración','Recuperas la Inspiración bárdica también en descansos cortos.'],
     [6,'Contraencanto','Acción: tú y los aliados cercanos tenéis ventaja contra ser asustados o hechizados.'],[8,...MEJORA],
     [10,'Secretos mágicos','Aprendes dos conjuros de cualquier lista (dos más a los niveles 14 y 18).'],[12,...MEJORA],[16,...MEJORA],[19,...MEJORA],
     [20,'Inspiración superior','Si empiezas un combate sin usos de Inspiración, recuperas uno.']],
   sub:{nivel:3,titulo:'Colegio bárdico',op:[
     {n:'Colegio del Conocimiento',r:[[3,'Competencias adicionales'],[3,'Palabras cortantes'],[6,'Secretos mágicos adicionales'],[14,'Habilidad sin par']]},
     {n:'Colegio del Valor',r:[[3,'Competencias adicionales'],[3,'Inspiración de combate'],[6,'Ataque adicional'],[14,'Magia de batalla']]}]}},

  {id:'clerigo',n:'Clérigo',d:'d8',sal:['SAB','CAR'],arm:'Ligeras, medias y escudos',armas:'Sencillas',herr:'—',
   hab:{n:2,de:['Historia','Perspicacia','Medicina','Persuasión','Religión']},
   magia:{car:'SAB',tipo:'completo',lista:'c',trucos:T([1,3],[4,4],[10,5]),preparados:'nivel'},
   rasgos:[[1,'Lanzamiento de conjuros','Preparas conjuros de clérigo con SAB; usas un símbolo sagrado.'],[2,'Canalizar divinidad','Expulsar muertos vivientes y el efecto de tu dominio. 1 uso por descanso (2 a nivel 6, 3 a nivel 18).'],
     [4,...MEJORA],[5,'Destruir muertos vivientes','Los muertos vivientes expulsados de VD bajo quedan destruidos (VD ½; sube a 1, 2, 3 y 4 en los niveles 8, 11, 14 y 17).'],
     [8,...MEJORA],[10,'Intervención divina','Pide ayuda a tu dios: éxito si sacas en d100 tu nivel o menos.'],[12,...MEJORA],[16,...MEJORA],[19,...MEJORA],
     [20,'Intervención divina mejorada','La intervención divina funciona automáticamente.']],
   sub:{nivel:1,titulo:'Dominio divino',op:[
     {n:'Dominio del Conocimiento',r:[[1,'Bendiciones del conocimiento'],[2,'Canalizar divinidad: conocimiento de las eras'],[6,'Canalizar divinidad: leer pensamientos'],[8,'Lanzamiento de conjuros potente'],[17,'Visiones del pasado']]},
     {n:'Dominio de la Vida',r:[[1,'Competencia adicional (armadura pesada)'],[1,'Discípulo de la vida'],[2,'Canalizar divinidad: preservar la vida'],[6,'Sanador bendito'],[8,'Golpe divino'],[17,'Curación suprema']]},
     {n:'Dominio de la Luz',r:[[1,'Truco adicional (luz)'],[1,'Fulgor protector'],[2,'Canalizar divinidad: resplandor del alba'],[6,'Fulgor mejorado'],[8,'Lanzamiento de conjuros potente'],[17,'Corona de luz']]},
     {n:'Dominio de la Naturaleza',r:[[1,'Acólito de la naturaleza'],[1,'Competencia adicional (armadura pesada)'],[2,'Canalizar divinidad: hechizar animales y plantas'],[6,'Amortiguar elementos'],[8,'Golpe divino'],[17,'Señor de la naturaleza']]},
     {n:'Dominio de la Tempestad',r:[[1,'Competencias adicionales'],[1,'Ira de la tormenta'],[2,'Canalizar divinidad: ira destructiva'],[6,'Golpe del rayo'],[8,'Golpe divino'],[17,'Nacido de la tormenta']]},
     {n:'Dominio del Engaño',r:[[1,'Bendición del embaucador'],[2,'Canalizar divinidad: invocar duplicado'],[6,'Canalizar divinidad: manto de sombras'],[8,'Golpe divino'],[17,'Duplicado mejorado']]},
     {n:'Dominio de la Guerra',r:[[1,'Competencias adicionales'],[1,'Sacerdote de guerra'],[2,'Canalizar divinidad: golpe guiado'],[6,'Canalizar divinidad: bendición del dios de la guerra'],[8,'Golpe divino'],[17,'Avatar de la batalla']]}]}},

  {id:'druida',n:'Druida',d:'d8',sal:['INT','SAB'],arm:'Ligeras, medias y escudos (no metálicos)',armas:'Garrote, daga, dardo, jabalina, maza, bastón, cimitarra, hoz, honda y lanza',herr:'Útiles de herborista',
   hab:{n:2,de:['Arcanos','Trato con animales','Perspicacia','Medicina','Naturaleza','Percepción','Religión','Supervivencia']},
   magia:{car:'SAB',tipo:'completo',lista:'d',trucos:T([1,2],[4,3],[10,4]),preparados:'nivel'},
   rasgos:[[1,'Druídico','Conoces el idioma secreto de los druidas.'],[1,'Lanzamiento de conjuros','Preparas conjuros de druida con SAB; usas un canalizador druídico.'],
     [2,'Forma salvaje','Te transformas en una bestia que hayas visto (VD ¼ sin volar ni nadar; VD ½ a nivel 4; VD 1 a nivel 8). Dos usos por descanso corto.'],
     [4,...MEJORA],[8,...MEJORA],[12,...MEJORA],[16,...MEJORA],[18,'Cuerpo intemporal','Envejeces diez veces más despacio.'],[18,'Conjuros bestiales','Lanzas conjuros en forma salvaje.'],
     [19,...MEJORA],[20,'Archidruida','Forma salvaje ilimitada; ignoras componentes verbales, somáticos y materiales sin coste.']],
   sub:{nivel:2,titulo:'Círculo druídico',op:[
     {n:'Círculo de la Tierra',r:[[2,'Truco adicional'],[2,'Recuperación natural'],[3,'Conjuros de círculo'],[6,'Zancada por la tierra'],[10,'Protección de la naturaleza'],[14,'Santuario de la naturaleza']]},
     {n:'Círculo de la Luna',r:[[2,'Forma salvaje de combate'],[2,'Formas del círculo'],[6,'Ataque primigenio'],[10,'Forma salvaje elemental'],[14,'Mil formas']]}]}},

  {id:'guerrero',n:'Guerrero',d:'d10',sal:['FUE','CON'],arm:'Todas y escudos',armas:'Sencillas y marciales',herr:'—',
   hab:{n:2,de:['Acrobacias','Trato con animales','Atletismo','Historia','Perspicacia','Intimidación','Percepción','Supervivencia']},
   rasgos:[[1,'Estilo de combate','Elige un estilo: arquería, defensa, duelo, gran arma, protección o combate con dos armas.'],[1,'Tomar aliento','Acción adicional: recuperas 1d10 + nivel PG. Una vez por descanso corto.'],
     [2,'Acción súbita','Una acción extra en tu turno. Una vez por descanso corto (dos usos a nivel 17).'],[4,...MEJORA],[5,'Ataque adicional','Atacas dos veces (tres a nivel 11, cuatro a nivel 20).'],
     [6,...MEJORA],[8,...MEJORA],[9,'Indomable','Repite una salvación fallida. Una vez por descanso largo (dos a nivel 13, tres a nivel 17).'],
     [12,...MEJORA],[14,...MEJORA],[16,...MEJORA],[19,...MEJORA]],
   sub:{nivel:3,titulo:'Arquetipo marcial',op:[
     {n:'Campeón',r:[[3,'Crítico mejorado'],[7,'Atleta extraordinario'],[10,'Estilo de combate adicional'],[15,'Crítico superior'],[18,'Superviviente']]},
     {n:'Maestro de batalla',r:[[3,'Superioridad en combate'],[3,'Estudiante de la guerra'],[7,'Conoce a tu enemigo'],[10,'Superioridad en combate mejorada'],[15,'Implacable'],[18,'Superioridad en combate mejorada']]},
     {n:'Caballero arcano',r:[[3,'Lanzamiento de conjuros'],[3,'Vínculo con arma'],[7,'Magia de guerra'],[10,'Golpe sobrenatural'],[15,'Carga arcana'],[18,'Magia de guerra mejorada']],
      magia:{car:'INT',tipo:'tercio',lista:'m',trucos:T([3,2],[10,3]),conocidos:CONOC_TERCIO}}]}},

  {id:'monje',n:'Monje',d:'d8',sal:['FUE','DES'],arm:'Ninguna',armas:'Sencillas y espada corta',herr:'Un tipo de herramienta de artesano o un instrumento',
   hab:{n:2,de:['Acrobacias','Atletismo','Historia','Perspicacia','Religión','Sigilo']},
   extras:{'Artes marciales':T([1,'d4'],[5,'d6'],[11,'d8'],[17,'d10']),'Ki':T([2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10],[11,11],[12,12],[13,13],[14,14],[15,15],[16,16],[17,17],[18,18],[19,19],[20,20]),'Movimiento sin armadura':T([2,'+10 pies'],[6,'+15 pies'],[10,'+20 pies'],[14,'+25 pies'],[18,'+30 pies'])},
   rasgos:[[1,'Defensa sin armadura','Sin armadura ni escudo, CA = 10 + DES + SAB.'],[1,'Artes marciales','Usas DES con golpes desarmados y armas de monje, su dado de artes marciales y un golpe desarmado como acción adicional.'],
     [2,'Ki','Puntos de ki = nivel: ráfaga de golpes, defensa paciente y paso del viento. Se recuperan en descanso corto.'],[2,'Movimiento sin armadura','Velocidad extra sin armadura ni escudo.'],
     [3,'Desviar proyectiles','Reacción: reduces el daño de un ataque a distancia y quizá lo devuelves.'],[4,...MEJORA],[4,'Caída lenta','Reacción: reduces el daño por caída en 5 × nivel.'],
     [5,'Ataque adicional','Atacas dos veces con la acción de Atacar.'],[5,'Golpe aturdidor','1 ki al impactar: salvación de CON o queda aturdido hasta tu siguiente turno.'],
     [6,'Golpes potenciados por ki','Tus golpes desarmados cuentan como mágicos.'],[7,'Evasión','Sin daño si superas una salvación de DES de mitad de daño; mitad si fallas.'],
     [7,'Mente tranquila','Acción: terminas un efecto de hechizado o asustado sobre ti.'],[8,...MEJORA],[9,'Movimiento sin armadura mejorado','Corres por paredes verticales y sobre líquidos.'],
     [10,'Pureza corporal','Inmune a enfermedades y veneno.'],[12,...MEJORA],[13,'Lengua del sol y la luna','Entiendes todos los idiomas hablados y te entienden.'],
     [14,'Alma de diamante','Competencia en todas las salvaciones; 1 ki para repetir una fallida.'],[15,'Cuerpo intemporal','No sufres los achaques de la edad ni necesitas comer ni beber.'],
     [16,...MEJORA],[18,'Cuerpo vacío','4 ki: invisible y con resistencia a casi todo durante 1 minuto; 8 ki: proyección astral.'],[19,...MEJORA],
     [20,'Perfección','Si empiezas un combate sin ki, recuperas 4.']],
   sub:{nivel:3,titulo:'Tradición monástica',op:[
     {n:'Camino de la Mano Abierta',r:[[3,'Técnica de la mano abierta'],[6,'Plenitud corporal'],[11,'Tranquilidad'],[17,'Palma temblorosa']]},
     {n:'Camino de la Sombra',r:[[3,'Artes de la sombra'],[6,'Paso sombrío'],[11,'Manto de sombras'],[17,'Oportunista']]},
     {n:'Camino de los Cuatro Elementos',r:[[3,'Discípulo de los elementos'],[6,'Disciplina elemental adicional'],[11,'Disciplina elemental adicional'],[17,'Disciplina elemental adicional']]}]}},

  {id:'paladin',n:'Paladín',d:'d10',sal:['SAB','CAR'],arm:'Todas y escudos',armas:'Sencillas y marciales',herr:'—',
   hab:{n:2,de:['Atletismo','Perspicacia','Intimidación','Medicina','Persuasión','Religión']},
   magia:{car:'CAR',tipo:'medio',lista:'p',trucos:T(),preparados:'mitad'},
   rasgos:[[1,'Sentido divino','Detectas celestiales, infernales y muertos vivientes cercanos. Usos = 1 + mod. de CAR por descanso largo.'],
     [1,'Imposición de manos','Reserva de curación = 5 × nivel PG por descanso largo; 5 puntos curan una enfermedad o veneno.'],
     [2,'Estilo de combate','Defensa, duelo, gran arma o protección.'],[2,'Lanzamiento de conjuros','Preparas conjuros de paladín con CAR.'],
     [2,'Castigo divino','Al impactar cuerpo a cuerpo, gasta un espacio: +2d8 radiante (+1d8 por nivel de espacio; +1d8 contra muertos vivientes e infernales).'],
     [3,'Salud divina','Inmune a las enfermedades.'],[4,...MEJORA],[5,'Ataque adicional','Atacas dos veces con la acción de Atacar.'],
     [6,'Aura de protección','Tú y los aliados a 10 pies sumáis tu mod. de CAR a las salvaciones.'],[8,...MEJORA],[10,'Aura de valor','Tú y los aliados a 10 pies no podéis ser asustados.'],
     [11,'Castigo divino mejorado','+1d8 radiante en cada impacto cuerpo a cuerpo.'],[12,...MEJORA],[14,'Toque purificador','Acción: terminas un conjuro sobre ti o un aliado. Usos = mod. de CAR por descanso largo.'],
     [16,...MEJORA],[18,'Mejoras de aura','Tus auras alcanzan 30 pies.'],[19,...MEJORA]],
   sub:{nivel:3,titulo:'Juramento sagrado',op:[
     {n:'Juramento de Devoción',r:[[3,'Canalizar divinidad'],[7,'Aura de devoción'],[15,'Pureza de espíritu'],[20,'Nimbo sagrado']]},
     {n:'Juramento de los Antiguos',r:[[3,'Canalizar divinidad'],[7,'Aura de protección contra conjuros'],[15,'Centinela imperecedero'],[20,'Campeón de los antiguos']]},
     {n:'Juramento de Venganza',r:[[3,'Canalizar divinidad'],[7,'Vengador implacable'],[15,'Alma de venganza'],[20,'Ángel vengador']]}]}},

  {id:'explorador',n:'Explorador',d:'d10',sal:['FUE','DES'],arm:'Ligeras, medias y escudos',armas:'Sencillas y marciales',herr:'—',
   hab:{n:3,de:['Trato con animales','Atletismo','Perspicacia','Investigación','Naturaleza','Percepción','Sigilo','Supervivencia']},
   magia:{car:'SAB',tipo:'medio',lista:'e',trucos:T(),conocidos:[0,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11]},
   rasgos:[[1,'Enemigo predilecto','Ventaja para rastrear y recordar información sobre un tipo de enemigo (otro más a los niveles 6 y 14).'],
     [1,'Explorador nato','Terreno predilecto: viajas y rastreas mejor en él (más terrenos a los niveles 6 y 10).'],[2,'Estilo de combate','Arquería, defensa, duelo o combate con dos armas.'],
     [2,'Lanzamiento de conjuros','Conjuros de explorador con SAB.'],[3,'Consciencia primigenia','Gasta un espacio para detectar ciertos tipos de criatura cercanos.'],[4,...MEJORA],
     [5,'Ataque adicional','Atacas dos veces con la acción de Atacar.'],[8,...MEJORA],[8,'Zancada por la tierra','El terreno difícil no mágico no te frena; ventaja contra plantas mágicas.'],
     [10,'Ocultarse a plena vista','Te camuflas: +10 a Sigilo mientras no te muevas.'],[12,...MEJORA],[14,'Desvanecerse','Esconderte es acción adicional; no te pueden rastrear sin magia.'],
     [16,...MEJORA],[18,'Sentidos salvajes','Percibes criaturas invisibles a 30 pies.'],[19,...MEJORA],[20,'Asesino de enemigos','Una vez por turno, suma tu mod. de SAB al ataque o al daño contra tu enemigo predilecto.']],
   sub:{nivel:3,titulo:'Arquetipo de explorador',op:[
     {n:'Cazador',r:[[3,'Presa del cazador'],[7,'Tácticas defensivas'],[11,'Ataque múltiple'],[15,'Defensa superior del cazador']]},
     {n:'Señor de las bestias',r:[[3,'Compañero del explorador'],[7,'Entrenamiento excepcional'],[11,'Furia bestial'],[15,'Compartir conjuros']]}]}},

  {id:'picaro',n:'Pícaro',d:'d8',sal:['DES','INT'],arm:'Ligeras',armas:'Sencillas, ballesta de mano, espada larga, estoque y espada corta',herr:'Herramientas de ladrón',
   hab:{n:4,de:['Acrobacias','Atletismo','Engaño','Perspicacia','Intimidación','Investigación','Percepción','Interpretación','Persuasión','Juego de manos','Sigilo']},
   extras:{'Ataque furtivo':Array.from({length:20},(_,i)=>`${Math.ceil((i+1)/2)}d6`)},
   rasgos:[[1,'Pericia','Doble de competencia en dos habilidades o herramientas de ladrón (dos más a nivel 6).'],
     [1,'Ataque furtivo','Una vez por turno, daño extra con ventaja o con un aliado junto al objetivo (arma sutil o a distancia).'],[1,'Jerga de ladrones','Idioma secreto de los ladrones.'],
     [2,'Acción astuta','Acción adicional: Correr, Destrabarse o Esconderse.'],[4,...MEJORA],[5,'Esquiva asombrosa','Reacción: mitad de daño de un ataque que veas.'],
     [7,'Evasión','Sin daño si superas una salvación de DES de mitad de daño; mitad si fallas.'],[8,...MEJORA],[10,...MEJORA],
     [11,'Talento fiable','En pruebas de habilidades en las que eres competente, un 9 o menos en el d20 cuenta como 10.'],[12,...MEJORA],
     [14,'Sentido ciego','Percibes criaturas escondidas o invisibles a 10 pies si puedes oír.'],[15,'Mente escurridiza','Competencia en salvaciones de SAB.'],
     [16,...MEJORA],[18,'Elusivo','Ningún ataque tiene ventaja contra ti si no estás incapacitado.'],[19,...MEJORA],
     [20,'Golpe de suerte','Convierte un fallo en impacto, o una prueba en un 20. Una vez por descanso corto.']],
   sub:{nivel:3,titulo:'Arquetipo de pícaro',op:[
     {n:'Ladrón',r:[[3,'Manos rápidas'],[3,'Trabajo de segundo piso'],[9,'Sigilo supremo'],[13,'Usar objeto mágico'],[17,'Reflejos de ladrón']]},
     {n:'Asesino',r:[[3,'Competencias adicionales'],[3,'Asesinar'],[9,'Experto en infiltración'],[13,'Impostor'],[17,'Golpe mortal']]},
     {n:'Embaucador arcano',r:[[3,'Lanzamiento de conjuros'],[3,'Prestidigitación con mano de mago'],[9,'Emboscada mágica'],[13,'Embaucador versátil'],[17,'Ladrón de conjuros']],
      magia:{car:'INT',tipo:'tercio',lista:'m',trucos:T([3,3],[10,4]),conocidos:CONOC_TERCIO}}]}},

  {id:'hechicero',n:'Hechicero',d:'d6',sal:['CON','CAR'],arm:'Ninguna',armas:'Daga, dardo, honda, bastón y ballesta ligera',herr:'—',
   hab:{n:2,de:['Arcanos','Engaño','Perspicacia','Intimidación','Persuasión','Religión']},
   extras:{'Puntos de hechicería':T([2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10],[11,11],[12,12],[13,13],[14,14],[15,15],[16,16],[17,17],[18,18],[19,19],[20,20])},
   magia:{car:'CAR',tipo:'completo',lista:'h',trucos:T([1,4],[4,5],[10,6]),conocidos:[2,3,4,5,6,7,8,9,10,11,12,12,13,13,14,14,15,15,15,15]},
   rasgos:[[1,'Lanzamiento de conjuros','Conjuros de hechicero con CAR.'],[2,'Fuente de magia','Puntos de hechicería = nivel; conviértelos en espacios de conjuro y al revés.'],
     [3,'Metamagia','Dos opciones para alterar tus conjuros con puntos de hechicería (una más a los niveles 10 y 17).'],[4,...MEJORA],[8,...MEJORA],[12,...MEJORA],[16,...MEJORA],[19,...MEJORA],
     [20,'Restauración hechicera','Recuperas 4 puntos de hechicería en cada descanso corto.']],
   sub:{nivel:1,titulo:'Origen hechicero',op:[
     {n:'Linaje dracónico',r:[[1,'Antepasado dragón'],[1,'Resistencia dracónica'],[6,'Afinidad elemental'],[14,'Alas de dragón'],[18,'Presencia dracónica']]},
     {n:'Magia salvaje',r:[[1,'Oleada de magia salvaje'],[1,'Mareas de caos'],[6,'Doblegar la suerte'],[14,'Caos controlado'],[18,'Bombardeo de conjuros']]}]}},

  {id:'brujo',n:'Brujo',d:'d8',sal:['SAB','CAR'],arm:'Ligeras',armas:'Sencillas',herr:'—',
   hab:{n:2,de:['Arcanos','Engaño','Historia','Intimidación','Investigación','Naturaleza','Religión']},
   extras:{'Invocaciones':T([2,2],[5,3],[7,4],[9,5],[12,6],[15,7],[18,8])},
   magia:{car:'CAR',tipo:'pacto',lista:'k',trucos:T([1,2],[4,3],[10,4]),conocidos:[2,3,4,5,6,7,8,9,10,10,11,11,12,12,13,13,14,14,15,15]},
   rasgos:[[1,'Patrón sobrenatural','Tu pacto con un ser de otro plano.'],[1,'Magia del pacto','Pocos espacios, todos del máximo nivel, que se recuperan en descanso corto (CAR).'],
     [2,'Invocaciones sobrenaturales','Fragmentos de saber prohibido que te otorgan poderes.'],[3,'Don del pacto','Pacto de la cadena, del filo o del tomo.'],[4,...MEJORA],[8,...MEJORA],
     [11,'Arcanum místico','Un conjuro de nivel 6 una vez por descanso largo (nivel 7 a nivel 13, 8 a nivel 15 y 9 a nivel 17).'],[12,...MEJORA],[16,...MEJORA],[19,...MEJORA],
     [20,'Maestro sobrenatural','Un minuto rogando a tu patrón: recuperas todos los espacios de pacto. Una vez por descanso largo.']],
   sub:{nivel:1,titulo:'Patrón sobrenatural',op:[
     {n:'El Archihada',r:[[1,'Presencia feérica'],[6,'Escape brumoso'],[10,'Defensas seductoras'],[14,'Delirio oscuro']]},
     {n:'El Infernal',r:[[1,'Bendición del oscuro'],[6,'Suerte del oscuro'],[10,'Resistencia infernal'],[14,'Lanzar al infierno']]},
     {n:'El Primigenio',r:[[1,'Mente despierta'],[6,'Escudo entrópico'],[10,'Escudo de pensamientos'],[14,'Crear siervo']]}]}},

  {id:'mago',n:'Mago',d:'d6',sal:['INT','SAB'],arm:'Ninguna',armas:'Daga, dardo, honda, bastón y ballesta ligera',herr:'—',
   hab:{n:2,de:['Arcanos','Historia','Perspicacia','Investigación','Medicina','Religión']},
   magia:{car:'INT',tipo:'completo',lista:'m',trucos:T([1,3],[4,4],[10,5]),preparados:'nivel'},
   rasgos:[[1,'Lanzamiento de conjuros','Libro de conjuros; preparas conjuros de mago con INT.'],[1,'Recuperación arcana','En un descanso corto recuperas espacios por un total de la mitad de tu nivel (máx. nivel 5). Una vez al día.'],
     [4,...MEJORA],[8,...MEJORA],[12,...MEJORA],[16,...MEJORA],[18,'Dominio de conjuros','Un conjuro de nivel 1 y uno de nivel 2 sin gastar espacio.'],[19,...MEJORA],
     [20,'Conjuros predilectos','Dos conjuros de nivel 3 una vez cada uno sin gastar espacio, por descanso corto.']],
   sub:{nivel:2,titulo:'Tradición arcana',op:[
     ['Abjuración',['Sabio de la abjuración','Custodia arcana'],'Custodia proyectada','Abjuración mejorada','Resistencia a conjuros'],
     ['Adivinación',['Sabio de la adivinación','Portento'],'Adivino experto','El tercer ojo','Portento mayor'],
     ['Conjuración',['Sabio de la conjuración','Conjuración menor'],'Transposición benigna','Conjuración concentrada','Invocaciones duraderas'],
     ['Encantamiento',['Sabio del encantamiento','Mirada hipnótica'],'Encanto instintivo','Dividir encantamiento','Alterar recuerdos'],
     ['Evocación',['Sabio de la evocación','Esculpir conjuros'],'Truco potente','Evocación potenciada','Sobrecanalizar'],
     ['Ilusión',['Sabio de la ilusión','Ilusión menor mejorada'],'Ilusiones maleables','Yo ilusorio','Realidad ilusoria'],
     ['Nigromancia',['Sabio de la nigromancia','Cosecha macabra'],'Siervos no muertos','Acostumbrado a la no muerte','Dominar no muertos'],
     ['Transmutación',['Sabio de la transmutación','Alquimia menor'],'Piedra del transmutador','Cambiaformas','Maestro transmutador']]
     .map(([e,dos,a6,a10,a14])=>({n:`Escuela de ${e}`,r:[...dos.map(x=>[2,x]),[6,a6],[10,a10],[14,a14]]}))}}
];

const ESCUELAS={A:'Abjuración',C:'Conjuración',D:'Adivinación',E:'Encantamiento',V:'Evocación',I:'Ilusión',N:'Nigromancia',T:'Transmutación'};
const LISTAS={b:'Bardo',c:'Clérigo',d:'Druida',p:'Paladín',e:'Explorador',h:'Hechicero',k:'Brujo',m:'Mago'};

/* nombre | name | nivel | escuela | listas | r = ritual, c = concentración */
const CONJUROS_TXT=`
Salpicadura de ácido|Acid Splash|0|C|hm|
Protección contra armas|Blade Ward|0|A|bhkm|
Toque gélido|Chill Touch|0|N|hkm|
Luces danzantes|Dancing Lights|0|V|bhm|c
Saber druídico|Druidcraft|0|T|d|
Descarga sobrenatural|Eldritch Blast|0|V|k|
Descarga de fuego|Fire Bolt|0|V|hm|
Amigos|Friends|0|E|bhkm|c
Orientación divina|Guidance|0|D|cd|c
Luz|Light|0|V|bchm|
Mano de mago|Mage Hand|0|C|bhkm|
Reparar|Mending|0|T|bcdhm|
Mensaje|Message|0|T|bhm|
Ilusión menor|Minor Illusion|0|I|bhkm|
Rociada venenosa|Poison Spray|0|C|dhkm|
Prestidigitación|Prestidigitation|0|T|bhkm|
Producir llama|Produce Flame|0|C|d|
Rayo de escarcha|Ray of Frost|0|V|hm|
Resistencia|Resistance|0|A|cd|c
Llama sagrada|Sacred Flame|0|V|c|
Shillelagh|Shillelagh|0|T|d|
Agarre electrizante|Shocking Grasp|0|V|hm|
Piedad con los moribundos|Spare the Dying|0|N|c|
Taumaturgia|Thaumaturgy|0|T|c|
Látigo de espinas|Thorn Whip|0|T|d|
Golpe certero|True Strike|0|D|bhkm|c
Burla cruel|Vicious Mockery|0|E|b|
Alarma|Alarm|1|A|em|r
Amistad con los animales|Animal Friendship|1|E|bde|
Armadura de Agathys|Armor of Agathys|1|A|k|
Brazos de Hadar|Arms of Hadar|1|C|k|
Perdición|Bane|1|E|bc|c
Bendición|Bless|1|E|cp|c
Manos ardientes|Burning Hands|1|V|hm|
Hechizar persona|Charm Person|1|E|bdhkm|
Orbe cromático|Chromatic Orb|1|V|hm|
Rociada de color|Color Spray|1|I|hm|
Orden imperiosa|Command|1|E|cp|
Duelo obligado|Compelled Duel|1|E|p|c
Comprensión idiomática|Comprehend Languages|1|D|bhkm|r
Crear o destruir agua|Create or Destroy Water|1|T|cd|
Curar heridas|Cure Wounds|1|V|bcdpe|
Detectar el bien y el mal|Detect Evil and Good|1|D|cp|c
Detectar magia|Detect Magic|1|D|bcdpehm|rc
Detectar venenos y enfermedades|Detect Poison and Disease|1|D|cdpe|rc
Disfrazarse|Disguise Self|1|I|bhm|
Susurros discordantes|Dissonant Whispers|1|E|b|
Favor divino|Divine Favor|1|V|p|c
Golpe apresador|Ensnaring Strike|1|C|e|c
Enmarañar|Entangle|1|C|d|c
Retirada expeditiva|Expeditious Retreat|1|T|hkm|c
Fuego feérico|Faerie Fire|1|V|bd|c
Falsa vida|False Life|1|N|hm|
Caída de pluma|Feather Fall|1|T|bhm|
Encontrar familiar|Find Familiar|1|C|m|r
Nube de niebla|Fog Cloud|1|C|dehm|c
Bayas nutritivas|Goodberry|1|T|de|
Grasa|Grease|1|C|m|
Saeta guía|Guiding Bolt|1|V|c|
Lluvia de espinas|Hail of Thorns|1|C|e|c
Palabra de curación|Healing Word|1|V|bcd|
Reprensión infernal|Hellish Rebuke|1|V|k|
Heroísmo|Heroism|1|E|bp|c
Maleficio|Hex|1|E|k|c
Marca del cazador|Hunter's Mark|1|D|e|c
Identificar|Identify|1|D|bm|r
Escritura ilusoria|Illusory Script|1|I|bkm|r
Infligir heridas|Inflict Wounds|1|N|c|
Saltar|Jump|1|T|dehm|
Zancada prodigiosa|Longstrider|1|T|bdem|
Armadura de mago|Mage Armor|1|A|hm|
Proyectil mágico|Magic Missile|1|V|hm|
Protección contra el bien y el mal|Protection from Evil and Good|1|A|cpkm|c
Purificar comida y bebida|Purify Food and Drink|1|T|cdp|r
Rayo nauseabundo|Ray of Sickness|1|N|hm|
Santuario|Sanctuary|1|A|c|
Castigo abrasador|Searing Smite|1|V|p|c
Escudo|Shield|1|A|hm|
Escudo de la fe|Shield of Faith|1|A|cp|c
Imagen silenciosa|Silent Image|1|I|bhm|c
Dormir|Sleep|1|E|bhm|
Hablar con los animales|Speak with Animals|1|D|bde|r
Risa horrible de Tasha|Tasha's Hideous Laughter|1|E|bm|c
Disco flotante de Tenser|Tenser's Floating Disk|1|C|m|r
Castigo atronador|Thunderous Smite|1|V|p|c
Onda atronadora|Thunderwave|1|V|bdhm|
Sirviente invisible|Unseen Servant|1|C|bkm|r
Descarga de bruja|Witch Bolt|1|V|hkm|c
Castigo iracundo|Wrathful Smite|1|V|p|c
Ayuda|Aid|2|A|cp|
Alterar el propio aspecto|Alter Self|2|T|hm|c
Mensajero animal|Animal Messenger|2|E|bde|r
Cerradura arcana|Arcane Lock|2|A|m|
Augurio|Augury|2|D|c|r
Piel robliza|Barkskin|2|T|de|c
Sentido bestial|Beast Sense|2|D|de|rc
Ceguera/sordera|Blindness/Deafness|2|N|bchm|
Desenfoque|Blur|2|I|hm|c
Castigo marcador|Branding Smite|2|V|p|c
Calmar emociones|Calm Emotions|2|E|bc|c
Nube de dagas|Cloud of Daggers|2|C|bhkm|c
Llama permanente|Continual Flame|2|V|cm|
Cordón de flechas|Cordon of Arrows|2|T|e|
Corona de locura|Crown of Madness|2|E|bhkm|c
Oscuridad|Darkness|2|V|hkm|c
Visión en la oscuridad|Darkvision|2|T|dehm|
Detectar pensamientos|Detect Thoughts|2|D|bhm|c
Potenciar característica|Enhance Ability|2|T|bcdh|c
Agrandar/reducir|Enlarge/Reduce|2|T|hm|c
Embelesar|Enthrall|2|E|bk|
Encontrar montura|Find Steed|2|C|p|
Encontrar trampas|Find Traps|2|D|cde|
Hoja de fuego|Flame Blade|2|V|d|c
Esfera llameante|Flaming Sphere|2|C|dm|c
Descanso apacible|Gentle Repose|2|N|cm|r
Ráfaga de viento|Gust of Wind|2|V|dhm|c
Calentar metal|Heat Metal|2|T|bd|c
Inmovilizar persona|Hold Person|2|E|bcdhkm|c
Invisibilidad|Invisibility|2|I|bhkm|c
Apertura|Knock|2|T|bhm|
Restablecimiento menor|Lesser Restoration|2|A|bcdpe|
Levitar|Levitate|2|T|hm|c
Localizar animales o plantas|Locate Animals or Plants|2|D|bde|r
Localizar objeto|Locate Object|2|D|bcdpem|c
Boca mágica|Magic Mouth|2|I|bm|r
Arma mágica|Magic Weapon|2|T|pm|c
Flecha ácida de Melf|Melf's Acid Arrow|2|V|m|
Imagen múltiple|Mirror Image|2|I|hkm|
Paso brumoso|Misty Step|2|C|hkm|
Rayo de luna|Moonbeam|2|V|d|c
Aura mágica de Nystul|Nystul's Magic Aura|2|I|m|
Pasar sin dejar rastro|Pass without Trace|2|A|de|c
Fuerza fantasmal|Phantasmal Force|2|I|bhm|c
Plegaria de curación|Prayer of Healing|2|V|c|
Protección contra veneno|Protection from Poison|2|A|cdpe|
Rayo debilitador|Ray of Enfeeblement|2|N|km|c
Truco de la cuerda|Rope Trick|2|T|m|
Rayo abrasador|Scorching Ray|2|V|hm|
Ver invisibilidad|See Invisibility|2|D|bhm|
Romper|Shatter|2|V|bhkm|
Silencio|Silence|2|I|bce|rc
Trepar cual arácnido|Spider Climb|2|T|hkm|c
Crecimiento de espinas|Spike Growth|2|T|de|c
Arma espiritual|Spiritual Weapon|2|V|c|
Sugestión|Suggestion|2|E|bhkm|c
Vínculo protector|Warding Bond|2|A|c|
Telaraña|Web|2|C|hm|c
Zona de verdad|Zone of Truth|2|E|bcp|
Animar a los muertos|Animate Dead|3|N|cm|
Aura de vitalidad|Aura of Vitality|3|V|p|c
Faro de esperanza|Beacon of Hope|3|A|c|c
Imponer maldición|Bestow Curse|3|N|bcm|c
Castigo cegador|Blinding Smite|3|V|p|c
Intermitencia|Blink|3|T|hm|
Invocar relámpagos|Call Lightning|3|C|d|c
Clarividencia|Clairvoyance|3|D|bchm|c
Conjurar animales|Conjure Animals|3|C|de|c
Conjurar andanada|Conjure Barrage|3|C|e|
Contraconjuro|Counterspell|3|A|hkm|
Crear comida y agua|Create Food and Water|3|C|cp|
Manto del cruzado|Crusader's Mantle|3|V|p|c
Luz del día|Daylight|3|V|cdpeh|
Disipar magia|Dispel Magic|3|A|bcdphkm|
Arma elemental|Elemental Weapon|3|T|p|c
Miedo|Fear|3|I|bhkm|c
Fingir muerte|Feign Death|3|N|bcdm|r
Bola de fuego|Fireball|3|V|hm|
Volar|Fly|3|T|hkm|c
Forma gaseosa|Gaseous Form|3|T|hkm|c
Glifo custodio|Glyph of Warding|3|A|bcm|
Acelerar|Haste|3|T|hm|c
Hambre de Hadar|Hunger of Hadar|3|C|k|c
Patrón hipnótico|Hypnotic Pattern|3|I|bhkm|c
Diminuta cabaña de Leomund|Leomund's Tiny Hut|3|V|bm|r
Flecha relampagueante|Lightning Arrow|3|T|e|
Relámpago|Lightning Bolt|3|V|hm|
Círculo mágico|Magic Circle|3|A|cpkm|
Imagen mayor|Major Image|3|I|bhkm|c
Palabra de curación en masa|Mass Healing Word|3|V|c|
Fundirse con la piedra|Meld into Stone|3|T|cd|r
Indetectable|Nondetection|3|A|bem|
Corcel fantasmal|Phantom Steed|3|I|m|r
Crecimiento vegetal|Plant Growth|3|T|bde|
Protección contra energía|Protection from Energy|3|A|cdehm|c
Levantar maldición|Remove Curse|3|A|cpkm|
Revivificar|Revivify|3|N|cp|
Enviar mensaje|Sending|3|V|bcm|
Tormenta de aguanieve|Sleet Storm|3|C|dhm|c
Ralentizar|Slow|3|T|hm|c
Hablar con los muertos|Speak with Dead|3|N|bc|
Hablar con las plantas|Speak with Plants|3|T|bde|
Espíritus guardianes|Spirit Guardians|3|C|c|c
Nube apestosa|Stinking Cloud|3|C|bhm|c
Don de lenguas|Tongues|3|D|bckhm|
Toque vampírico|Vampiric Touch|3|N|km|c
Respirar bajo el agua|Water Breathing|3|T|dehm|r
Caminar sobre el agua|Water Walk|3|T|cdeh|r
Muro de viento|Wind Wall|3|V|de|c
Ojo arcano|Arcane Eye|4|D|m|c
Aura de vida|Aura of Life|4|A|p|c
Aura de pureza|Aura of Purity|4|A|p|c
Destierro|Banishment|4|A|cphkm|c
Plaga|Blight|4|N|dhkm|
Compulsión|Compulsion|4|E|b|c
Confusión|Confusion|4|E|bdhm|c
Conjurar elementales menores|Conjure Minor Elementals|4|C|dm|c
Conjurar seres de los bosques|Conjure Woodland Beings|4|C|de|c
Controlar agua|Control Water|4|T|cdm|c
Custodia contra la muerte|Death Ward|4|A|cp|
Puerta dimensional|Dimension Door|4|C|bhkm|
Adivinación|Divination|4|D|c|r
Dominar bestia|Dominate Beast|4|E|dh|c
Tentáculos negros de Evard|Evard's Black Tentacles|4|C|m|c
Fabricar|Fabricate|4|T|m|
Escudo de fuego|Fire Shield|4|V|m|
Libertad de movimiento|Freedom of Movement|4|A|bcde|
Insecto gigante|Giant Insect|4|T|d|c
Enredadera apresadora|Grasping Vine|4|C|de|c
Invisibilidad mayor|Greater Invisibility|4|I|bhm|c
Guardián de la fe|Guardian of Faith|4|C|c|
Terreno alucinatorio|Hallucinatory Terrain|4|I|bdkm|
Tormenta de hielo|Ice Storm|4|V|dhm|
Cofre secreto de Leomund|Leomund's Secret Chest|4|C|m|
Localizar criatura|Locate Creature|4|D|bcdpem|c
Perro fiel de Mordenkainen|Mordenkainen's Faithful Hound|4|C|m|
Santuario privado de Mordenkainen|Mordenkainen's Private Sanctum|4|A|m|
Esfera elástica de Otiluke|Otiluke's Resilient Sphere|4|V|m|c
Asesino fantasmal|Phantasmal Killer|4|I|m|c
Polimorfar|Polymorph|4|T|bdhm|c
Castigo abrumador|Staggering Smite|4|V|p|c
Moldear la piedra|Stone Shape|4|T|cdm|
Piel pétrea|Stoneskin|4|A|dehm|c
Muro de fuego|Wall of Fire|4|V|dhm|c
Animar objetos|Animate Objects|5|T|bhm|c
Caparazón antivida|Antilife Shell|5|A|d|c
Despertar|Awaken|5|T|bd|
Castigo desterrador|Banishing Smite|5|A|p|c
Mano de Bigby|Bigby's Hand|5|V|m|c
Círculo de poder|Circle of Power|5|A|p|c
Nube aniquiladora|Cloudkill|5|C|hm|c
Comunión|Commune|5|D|c|r
Comunión con la naturaleza|Commune with Nature|5|D|de|r
Cono de frío|Cone of Cold|5|V|hm|
Conjurar elemental|Conjure Elemental|5|C|dm|c
Conjurar descarga|Conjure Volley|5|C|e|
Contactar con otro plano|Contact Other Plane|5|D|km|r
Contagio|Contagion|5|N|cd|
Creación|Creation|5|I|hm|
Onda destructiva|Destructive Wave|5|V|p|
Disipar el bien y el mal|Dispel Evil and Good|5|A|cp|c
Dominar persona|Dominate Person|5|E|bhm|c
Sueño|Dream|5|I|bkm|
Columna de llamas|Flame Strike|5|V|c|
Geas|Geas|5|E|bcdpm|
Restablecimiento mayor|Greater Restoration|5|A|bcd|
Santificar|Hallow|5|V|c|
Inmovilizar monstruo|Hold Monster|5|E|bhkm|c
Plaga de insectos|Insect Plague|5|C|cdh|c
Saber legendario|Legend Lore|5|D|bcm|
Curar heridas en masa|Mass Cure Wounds|5|V|bcd|
Engañar|Mislead|5|I|bm|c
Modificar recuerdo|Modify Memory|5|E|bm|c
Pasamuros|Passwall|5|T|m|
Atadura planar|Planar Binding|5|A|bcdm|
Revivir a los muertos|Raise Dead|5|N|bcp|
Vínculo telepático de Rary|Rary's Telepathic Bond|5|D|m|r
Reencarnar|Reincarnate|5|T|d|
Escudriñamiento|Scrying|5|D|bcdkm|c
Apariencia|Seeming|5|I|bhm|
Carcaj veloz|Swift Quiver|5|T|e|c
Telequinesis|Telekinesis|5|T|hm|c
Círculo de teletransporte|Teleportation Circle|5|C|bhm|
Zancada arbórea|Tree Stride|5|C|de|c
Muro de fuerza|Wall of Force|5|V|m|c
Muro de piedra|Wall of Stone|5|V|dhm|c
Puerta arcana|Arcane Gate|6|C|hkm|c
Barrera de cuchillas|Blade Barrier|6|V|c|c
Relámpago en cadena|Chain Lightning|6|V|hm|
Círculo de muerte|Circle of Death|6|N|hkm|
Conjurar feérico|Conjure Fey|6|C|dk|c
Contingencia|Contingency|6|V|m|
Crear muerto viviente|Create Undead|6|N|ckm|
Desintegrar|Disintegrate|6|T|hm|
Convocación instantánea de Drawmij|Drawmij's Instant Summons|6|C|m|r
Mirada penetrante|Eyebite|6|N|bhkm|c
Encontrar el camino|Find the Path|6|D|bcd|c
De la carne a la piedra|Flesh to Stone|6|T|km|c
Prohibición|Forbiddance|6|A|c|r
Globo de invulnerabilidad|Globe of Invulnerability|6|A|hm|c
Guardas y custodias|Guards and Wards|6|A|bm|
Dañar|Harm|6|N|c|
Curar|Heal|6|V|cd|
Banquete de héroes|Heroes' Feast|6|C|cd|
Recipiente mágico|Magic Jar|6|N|m|
Sugestión en masa|Mass Suggestion|6|E|bhkm|
Mover la tierra|Move Earth|6|T|dhm|c
Esfera congelante de Otiluke|Otiluke's Freezing Sphere|6|V|m|
Danza irresistible de Otto|Otto's Irresistible Dance|6|E|bm|c
Aliado de otro plano|Planar Ally|6|C|c|
Ilusión programada|Programmed Illusion|6|I|bm|
Rayo de sol|Sunbeam|6|V|dhm|c
Transporte vegetal|Transport via Plants|6|C|d|
Visión verdadera|True Seeing|6|D|bchkm|
Muro de hielo|Wall of Ice|6|V|m|c
Muro de espinas|Wall of Thorns|6|C|d|c
Caminar con el viento|Wind Walk|6|T|d|
Palabra de regreso|Word of Recall|6|C|c|
Conjurar celestial|Conjure Celestial|7|C|c|c
Bola de fuego de explosión retardada|Delayed Blast Fireball|7|V|hm|c
Palabra divina|Divine Word|7|V|c|
Forma etérea|Etherealness|7|T|bchkm|
Dedo de la muerte|Finger of Death|7|N|hkm|
Tormenta de fuego|Fire Storm|7|V|cdh|
Jaula de fuerza|Forcecage|7|V|bkm|
Espejismo arcano|Mirage Arcane|7|I|bdm|
Mansión magnífica de Mordenkainen|Mordenkainen's Magnificent Mansion|7|C|bm|
Espada de Mordenkainen|Mordenkainen's Sword|7|V|bm|c
Desplazamiento entre planos|Plane Shift|7|C|cdhkm|
Rociada prismática|Prismatic Spray|7|V|hm|
Proyectar imagen|Project Image|7|I|bm|c
Regenerar|Regenerate|7|T|bcd|
Resurrección|Resurrection|7|N|bc|
Invertir la gravedad|Reverse Gravity|7|T|dhm|c
Secuestrar|Sequester|7|T|m|
Simulacro|Simulacrum|7|I|m|
Símbolo|Symbol|7|A|bcm|
Teletransporte|Teleport|7|C|bhm|
Formas animales|Animal Shapes|8|T|d|c
Campo antimagia|Antimagic Field|8|A|cm|c
Antipatía/simpatía|Antipathy/Sympathy|8|E|dm|
Clonar|Clone|8|N|m|
Controlar el clima|Control Weather|8|T|cdm|c
Semiplano|Demiplane|8|C|km|
Dominar monstruo|Dominate Monster|8|E|bhkm|c
Terremoto|Earthquake|8|V|cdh|c
Debilitar mente|Feeblemind|8|E|bdkm|
Labia|Glibness|8|T|bk|
Aura sagrada|Holy Aura|8|A|c|c
Nube incendiaria|Incendiary Cloud|8|C|hm|c
Laberinto|Maze|8|C|m|c
Mente en blanco|Mind Blank|8|A|bm|
Palabra de poder: aturdir|Power Word Stun|8|E|bhkm|
Resplandor solar|Sunburst|8|V|dhm|
Telepatía|Telepathy|8|V|m|
Atrapar el alma|Trap the Soul|8|N|m|
Tsunami|Tsunami|8|C|d|c
Proyección astral|Astral Projection|9|N|ckm|
Presciencia|Foresight|9|D|bdkm|
Portal|Gate|9|C|chm|c
Aprisionamiento|Imprisonment|9|A|km|
Curación en masa|Mass Heal|9|V|c|
Lluvia de meteoritos|Meteor Swarm|9|V|hm|
Palabra de poder: curar|Power Word Heal|9|V|b|
Palabra de poder: matar|Power Word Kill|9|E|bhkm|
Muro prismático|Prismatic Wall|9|A|m|
Cambiar de forma|Shapechange|9|T|dm|c
Detener el tiempo|Time Stop|9|T|hm|
Polimorfar verdadero|True Polymorph|9|T|bkm|c
Resurrección verdadera|True Resurrection|9|N|cd|
Tormenta de venganza|Storm of Vengeance|9|C|d|c
Extraño|Weird|9|I|m|c
Deseo|Wish|9|C|hm|`;

const CONJUROS=CONJUROS_TXT.trim().split('\n').map(l=>{
  const [n,en,niv,esc,listas,f]=l.split('|');
  return {n,en,niv:+niv,esc,listas,ritual:f.includes('r'),conc:f.includes('c')};
});

/* Textos de presentación (trasfondo y cómo funciona), escritos para este compendio */
const TEXTOS_OFICIALES={
  razas:{
    enano:'Pueblos de montaña y forja, con memoria larga y poca prisa. Son resistentes, tenaces y muy leales a su clan y a su oficio.',
    elfo:'Un pueblo antiguo de bosques y magia que vive siglos y recuerda más aún. Son ágiles, perceptivos y difíciles de dormir.',
    mediano:'Gente sencilla de campos y colinas que prefiere el hogar y la buena mesa. Son pequeños, afortunados y sorprendentemente valientes.',
    humano:'La raza más numerosa y variada, con ambiciones de todo tipo. Su ventaja es la versatilidad: pueden llegar a ser cualquier cosa.',
    draconido:'Descendientes de dragones que llevan en la sangre el aliento de su linaje. Son orgullosos, honorables y fuertes.',
    gnomo:'Inventores curiosos de mente rápida, interesados en cómo funciona todo. Son astutos y difíciles de engañar con magia.',
    semielfo:'Fruto de dos mundos, muchas veces sin sitio claro en ninguno. Son carismáticos, adaptables y buenos negociadores.',
    semiorco:'Nacidos de la unión de humanos y orcos, enfrentados a prejuicios de ambos lados. Son fuertes, resistentes y directos.',
    tiflin:'Descendientes de pactos infernales, con cuernos y cola que delatan su herencia. Su carisma y su magia heredada les abren y les cierran puertas.'
  },
  clases:{
    barbaro:{lore:'Guerreros salvajes que canalizan una furia ancestral en el combate. Viven según la fuerza del cuerpo y del instinto.',
      como:'Una vez por descanso largo o por combate según la tabla, entras en furia: ganas daño extra, resistencia a daño físico y ventaja en pruebas de fuerza. Si no atacas ni recibes golpes en un turno, la furia termina.'},
    bardo:{lore:'Artistas, cuentacuentos y espías cuya magia nace de la palabra y la música. Inspiran a sus aliados y saben de todo un poco.',
      como:'Lanzas conjuros con Carisma usando un instrumento como foco. Con la Inspiración bárdica das un dado a un aliado para que lo sume a una tirada; los usos son tu modificador de Carisma por descanso largo.'},
    clerigo:{lore:'Servidores de un dios o de una fuerza divina que curan, protegen y castigan a los enemigos de su fe. Su poder depende de la devoción y del dominio que elijan.',
      como:'Preparas conjuros cada día con Sabiduría. Canalizar divinidad te da efectos especiales por descanso, y el dominio que elijas añade conjuros y habilidades propias.'},
    druida:{lore:'Guardianes de la naturaleza que se unen a la magia del mundo vivo. Pueden transformarse en animales y hablar con la vida salvaje.',
      como:'Preparas conjuros con Sabiduría. Desde el nivel 2 adoptas formas de bestia algunas veces por descanso corto; el círculo que elijas define tu especialidad.'},
    guerrero:{lore:'Maestros de las armas y de la disciplina, capaces de dominar cualquier estilo de combate. Su fuerza es la técnica y la resistencia.',
      como:'Eliges un estilo de combate y ganas ataques extra en tu turno. Tomar aliento te cura una vez por descanso corto, y el arquetipo marcial define tu especialidad.'},
    monje:{lore:'Practicantes de disciplinas marciales que convierten el cuerpo y la energía interior en arma. Prescinden de armaduras y de armas complejas.',
      como:'Gastas puntos de ki para atacar más rápido, esquivar y moverte con más velocidad. Tus golpes sin armas crecen de dado con el nivel.'},
    paladin:{lore:'Guerreros juramentados que combinan el acero con la magia divina. Su juramento les da una causa y poderes concretos.',
      como:'Gastas espacios de conjuro para hacer daño extra al impactar y tienes una reserva de curación que se recupera en descanso largo. Tus auras protegen a los aliados cercanos.'},
    explorador:{lore:'Rastreadores y cazadores que viven en la naturaleza y conocen a sus enemigos. Se mueven con sigilo y llevan una magia ligada a la tierra.',
      como:'Lanzas conjuros de explorador con Sabiduría. Tus rasgos de enemigo predilecto y de terreno favorito te dan ventajas al rastrear, cazar y viajar.'},
    picaro:{lore:'Ladrones, espías y asesinos que vencen con astucia más que con fuerza. Su punto fuerte es atacar donde el enemigo no espera.',
      como:'Cuando tienes ventaja o un aliado junto al objetivo, tu ataque furtivo añade daño extra cada turno. Puedes correr, esconderte o desengañar con una acción adicional.'},
    hechicero:{lore:'Personas con magia innata, heredada de un linaje o de una fuerza del cosmos. Su poder nace de dentro, no del estudio.',
      como:'Lanzas conjuros con Carisma. Tienes puntos de hechicería que puedes convertir en espacios de conjuro, o gastar para alterar tus conjuros con la metamagia.'},
    brujo:{lore:'Personas que han hecho un pacto con un ser de otro plano a cambio de poder. El pacto les da magia, pero también una deuda.',
      como:'Tienes pocos espacios de conjuro, siempre de nivel alto, que se recuperan en descanso corto. Las invocaciones te dan poderes adicionales y el patrón define la naturaleza del pacto.'},
    mago:{lore:'Eruditos que dominan la magia a través del estudio y de sus libros de conjuros. Su poder es amplio, aunque frágil en el cuerpo.',
      como:'Preparas conjuros de tu libro con Inteligencia y recuperas algunos espacios tras un descanso corto. La tradición arcana que elijas define tu especialidad.'}
  }
};
RAZAS.forEach(r=>{r.lore=TEXTOS_OFICIALES.razas[r.id]||'';});
CLASES_OFICIALES.forEach(c=>{const t=TEXTOS_OFICIALES.clases[c.id]||{};c.lore=t.lore||'';c.como=t.como||'';});
