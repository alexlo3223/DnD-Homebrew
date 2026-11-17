/* Sword Coast Adventurer's Guide — resúmenes propios */
libro('scag','Guía del Aventurero de la Costa de la Espada','faerun');

/* ——— Subclases ——— */
subclase('barbaro','scag',{n:'Senda del Batallador',e:'Enanos con armadura de pinchos que se lanzan contra el enemigo (solo enanos).',r:[
  [3,'Armadura de batallador','En furia con armadura de pinchos: ataque de pinchos como acción adicional y daño al agarrar.'],
  [6,'Abandono temerario','Ganas PG temporales al usar Ataque temerario en furia.'],
  [10,'Carga del batallador','En furia, Correr como acción adicional.'],
  [14,'Represalia de pinchos','Quien te golpea cuerpo a cuerpo se pincha y recibe 3 de daño.']]});
subclase('clerigo','scag',{n:'Dominio Arcano',e:'La magia como regalo divino de Mystra y Azuth.',r:[
  [1,'Iniciado arcano','Competencia en Arcanos y dos trucos de mago.'],
  [2,'Canalizar divinidad: Abjuración arcana','Expulsas o destierras celestiales, elementales, hadas e infernales.'],
  [6,'Rompehechizos','Al curar a un aliado, terminas un conjuro que le afecta.'],
  [8,'Lanzamiento potente','Sumas SAB al daño de tus trucos.'],
  [17,'Maestría arcana','Cuatro conjuros de mago de nivel 6 a 9 como conjuros de dominio.']]});
subclase('guerrero','scag',{n:'Caballero del Dragón Púrpura (Abanderado)',e:'Líder que inspira y coordina a sus aliados.',r:[
  [3,'Grito de guerra','Al Tomar aliento, también curas a tres aliados.'],
  [7,'Envoltura real','Competencia en Persuasión (o pericia).'],
  [10,'Oleada inspiradora','Al usar Oleada de acción, un aliado puede atacar con su reacción.'],
  [15,'Baluarte','Al usar Indomable, compartes la repetición con un aliado.']]});
subclase('monje','scag',{n:'Camino de la Larga Muerte',e:'Estudian la muerte para dominarla.',r:[
  [3,'Toque de la muerte','Al matar a alguien cercano ganas PG temporales.'],
  [6,'Hora de la cosecha','Acción: asustas a quienes te rodean.'],
  [11,'Dominio de la muerte','Al caer a 0 PG, 1 ki para quedarte a 1 PG.'],
  [17,'Toque de la larga muerte','Gastas hasta 10 ki para 2d10 necrótico por punto.']]});
subclase('monje','scag',{n:'Camino del Alma Solar',e:'Ki convertido en rayos de luz.',r:[
  [3,'Rayo de sol radiante','Ataques de luz a distancia con DES; ráfaga de rayos con ki.'],
  [6,'Golpe del arco abrasador','2 ki: manos ardientes tras atacar.'],
  [11,'Explosión solar','Esfera de luz que estalla: daño radiante en área.'],
  [17,'Escudo solar','Luz brillante; quien te golpea recibe daño radiante.']]});
subclase('paladin','scag',{n:'Juramento de la Corona',e:'Lealtad a la ley, la civilización y el soberano.',r:[
  [3,'Canalizar divinidad','Desafío del campeón (enemigos no pueden alejarse) y Recuperar el ánimo (cura a varios).'],
  [7,'Lealtad divina','Reacción: recibes el daño destinado a un aliado adyacente.'],
  [15,'Espíritu inquebrantable','Ventaja contra paralizado y aturdido.'],
  [20,'Campeón exaltado','Resistencia al daño físico y ventajas en salvaciones para ti y tus aliados.']]});
subclase('picaro','scag',{n:'Mente Maestra',e:'Manipulador y estratega (también en Xanathar).',r:[
  [3,'Maestro de la intriga','Disfraces, falsificación, un juego y dos idiomas; imitas acentos.'],
  [3,'Maestro de tácticas','Ayudar como acción adicional y a 30 pies.'],
  [9,'Manipulador perspicaz','Observando un minuto, comparas sus características con las tuyas.'],
  [13,'Desvío','Reacción: rediriges a otro un ataque que iba hacia ti.'],
  [17,'Alma del engaño','Tu mente no se puede leer y ganas en las mentiras mágicas.']]});
subclase('picaro','scag',{n:'Espadachín',e:'Duelista elegante y temerario (también en Xanathar).',r:[
  [3,'Juego de pies elegante','Quien atacas no puede darte ataques de oportunidad.'],
  [3,'Audacia descarada','Sumas CAR a la iniciativa; ataque furtivo en duelo uno contra uno.'],
  [9,'Panache','Persuasión enfrentada: hechizas a un aliado o provocas a un enemigo.'],
  [13,'Maniobra elegante','Ventaja en Acrobacias o Atletismo como acción adicional.'],
  [17,'Maestro duelista','Repites un ataque fallado con ventaja.']]});
subclase('hechicero','scag',{n:'Hechicería de la Tormenta',e:'Tu magia viene del aire y el rayo.',r:[
  [1,'Magia del viento','Hablas primordial.'],
  [1,'Furia tempestuosa','Tras lanzar un conjuro, vuelas 10 pies sin provocar ataques.'],
  [6,'Corazón de la tormenta','Resistencia a rayo y trueno; tus conjuros de ese tipo dañan alrededor.'],
  [6,'Guía de la tormenta','Controlas lluvia y viento cercanos.'],
  [14,'Furia de la tormenta','Reacción: quien te golpea recibe daño de rayo y es empujado.'],
  [18,'Alma del viento','Inmune a rayo y trueno; vuelas a 60 pies y compartes vuelo.']]});
subclase('brujo','scag',{n:'El Inmortal',e:'Pacto con un ser que ha burlado a la muerte.',r:[
  [1,'Entre los muertos','Truco piedad con los moribundos; los no muertos dudan en atacarte.'],
  [6,'Desafiar la muerte','Al estabilizar o salvarte de la muerte, recuperas PG.'],
  [10,'Naturaleza inmortal','No necesitas respirar, comer ni dormir; envejeces muy despacio.'],
  [14,'Vida indestructible','Acción adicional: recuperas PG y vuelves a unir miembros cortados.']]});
subclase('mago','scag',{n:'Danza de la Espada',e:'Arte élfico que funde esgrima y magia (también en Tasha).',r:[
  [2,'Entrenamiento en guerra y canto','Armadura ligera, un arma a una mano e Interpretación.'],
  [2,'Canción de la espada','Acción adicional: +INT a la CA, velocidad, ventaja en Acrobacias y en concentración.'],
  [6,'Ataque adicional','Puedes sustituir un ataque por un truco.'],
  [10,'Canción de defensa','Reacción: gastas espacios para reducir el daño.'],
  [14,'Canción de victoria','+INT al daño cuerpo a cuerpo mientras cantas.']]});

/* ——— Razas ——— */
raza('scag',{id:'duergar',n:'Enano gris (duergar)',tam:'Mediano',vel:25,mej:{CON:2,FUE:1},idiomas:'Común, enano e infracomún',
  lore:'Enanos esclavizados por los azotamentes que escaparon con poderes psiónicos y un corazón duro.',
  rasgos:[['Visión en la oscuridad superior','120 pies.'],['Resistencia enana','Ventaja y resistencia contra veneno.'],['Resiliencia duergar','Ventaja contra ilusiones, hechizado y paralizado.'],
    ['Magia duergar','A nivel 3 agrandar (solo a ti); a nivel 5 invisibilidad (solo a ti).'],['Sensibilidad a la luz solar','Desventaja bajo luz solar directa.']]});
raza('scag',{id:'svirfneblin',n:'Gnomo de las profundidades',tam:'Pequeño',vel:25,mej:{INT:2,DES:1},idiomas:'Común, gnomo e infracomún',
  lore:'Gnomos de la Infraoscuridad, cautos y discretos, que conocen la piedra mejor que nadie.',
  rasgos:[['Visión en la oscuridad superior','120 pies.'],['Astucia gnoma','Ventaja en salvaciones mentales contra magia.'],['Camuflaje de piedra','Ventaja en Sigilo para esconderte en terreno rocoso.']]});
raza('scag',{id:'medianofantasmal',n:'Mediano fantasmal',tam:'Pequeño',vel:25,mej:{DES:2,SAB:1},idiomas:'Común',
  lore:'Medianos tribales y reservados de los bosques, con un don telepático.',
  rasgos:[['Afortunado','Repites los 1 naturales.'],['Valiente','Ventaja contra asustado.'],['Agilidad de mediano','Atraviesas el espacio de criaturas mayores.'],['Telepatía silenciosa','Hablas mentalmente a 30 pies.']]});
raza('scag',{id:'semielfovar',n:'Semielfo (variantes)',tam:'Mediano',vel:30,mej:{CAR:2},elegir:{n:2,val:1,excepto:['CAR']},idiomas:'Común, élfico y uno a elegir',
  lore:'Semielfos que heredan rasgos concretos de su progenitor élfico en lugar de la versatilidad en habilidades.',
  rasgos:[['Visión en la oscuridad','60 pies.'],['Linaje feérico','Ventaja contra hechizado; la magia no te duerme.']],
  sub:[{id:'alto',n:'Ascendencia de alto elfo',rasgos:[['Truco de mago','Un truco de mago (INT).']]},{id:'bosque',n:'Ascendencia de elfo de los bosques',rasgos:[['Pies ligeros o máscara','Velocidad 35 pies o esconderte entre la naturaleza.']]},
       {id:'drow',n:'Ascendencia drow',rasgos:[['Magia drow','Luces danzantes; fuego feérico y oscuridad.']]},{id:'acuatico',n:'Ascendencia de elfo marino',rasgos:[['Nadador','Velocidad nadando 30 pies.']]}]});
raza('scag',{id:'tiflinvar',n:'Tiflin (variantes)',tam:'Mediano',vel:30,mej:{CAR:2,INT:1},idiomas:'Común e infernal',
  lore:'Tiflins cuya herencia se manifiesta de otra forma: alas, otro linaje mágico o distinta aptitud.',
  rasgos:[['Visión en la oscuridad','60 pies.'],['Resistencia infernal','Resistencia al fuego.']],
  sub:[{id:'diabolico',n:'Variante: magia diabólica',rasgos:[['Magia','Taumaturgia, reprensión infernal y oscuridad (o la magia que elijas de la variante).']]},
       {id:'alado',n:'Variante: alado',rasgos:[['Alas','Velocidad volando 30 pies en lugar de la magia infernal.']]},
       {id:'diestro',n:'Variante: diestro',mej:{DES:2},rasgos:[['Aptitud','+2 DES en lugar de +2 CAR.']]}]});
/* Su ambientación está en libros/mundos/. */
