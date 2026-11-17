/* Obojima: Tales from the Tall Grass y Tales from Yatamon (1985 Games) — resúmenes propios */
libro('oboT','Obojima: Tales from the Tall Grass','obojima');
libro('oboY','Obojima: Tales from Yatamon','obojima');

/* ——— Subclases (Tall Grass) ——— */
subclase('barbaro','oboT',{n:'Senda del Cerveceador de Barriga',e:'Preparas pociones directamente en tu estómago.',r:[
  [3,'Brebaje de barriga','Al entrar en furia eliges un efecto de combate (cuerpo de goma), utilidad (digerir lo que sea) o capricho (efectos raros).'],
  [3,'Efectos secundarios','Rasgos menores por todos los ingredientes mágicos que has tragado.'],
  [6,'Preparado rápido','Eliges una poción común que puedes producir en tu barriga.'],
  [10,'Efectos persistentes','El brebaje te da beneficios incluso fuera de la furia.'],
  [14,'Preparado rápido poderoso','Una poción común y otra poco común más.']]});
subclase('bardo','oboT',{n:'Colegio de las Máscaras',e:'Actores que se pierden en el papel gracias a máscaras mágicas.',r:[
  [3,'Herramientas de la función','Imbuyes máscaras de teatro con poderes (demonio, zorro…) que te pones durante la actuación.'],
  [3,'Imitador','Acción: copias el aspecto de una persona que hayas visto.'],
  [6,'Función de muchas máscaras','Un minuto de actuación hechiza a un público.'],
  [14,'Don del teatro','Das una de tus máscaras a un aliado con todos sus efectos.']]});
subclase('druida','oboT',{n:'Círculo del Pétalo',e:'Danzas de flores y espíritus de pétalos.',r:[
  [2,'Danza de pétalos','Gastas Forma salvaje para envolverte en pétalos que protegen y dañan.'],
  [6,'Mímica de bestia de pétalos','Acción: invocas un espíritu bestial hecho de pétalos que lucha contigo.'],
  [10,'Espíritu de Obojima','Tu vínculo con los espíritus te da resistencias y ayuda.'],
  [14,'Vientos de renovación','Una ráfaga de pétalos cura y levanta a los aliados caídos.']]});
subclase('guerrero','oboT',{n:'Fusionado con un Espíritu',e:'Albergas a un espíritu moribundo y canalizas su energía.',r:[
  [3,'Canalizar esencia','Reserva de cuatro d6 para añadir energía espiritual a tus ataques.'],
  [3,'Canalizar objetos','Cargas objetos corrientes de energía con efectos útiles (bolsa globo, etc.).'],
  [7,'Batería espiritual','Truco sacudida, que además puede activar máquinas.'],
  [10,'Armadura improvisada','Endureces la ropa que llevas para mejorar tu CA.'],
  [15,'Batería de reserva','Un subidón extra de energía al quedarte sin dados.'],
  [18,'Maestro de la chatarra','Otra opción de canalización y efectos más fuertes.']]});
subclase('monje','oboT',{n:'Pastor del Dragón Oveja',e:'Discípulos de un espíritu del viento que protege a su rebaño.',r:[
  [3,'Pastorear','Acción adicional: acercas a tus aliados o los apartas del peligro.'],
  [6,'Disparo de viento','Ráfaga de aire comprimido a distancia, como la pistola de viento del dragón oveja.'],
  [6,'Maniobra de intercepción','Reacción: desvías un ataque dirigido a un aliado cercano.'],
  [11,'Al cielo','Planeas sobre el viento como un dragón oveja.'],
  [17,'Guía del rebaño','Avisas a tus aliados en combate: mejoran su defensa y movimiento.']]});
subclase('paladin','oboT',{n:'Juramento del Río',e:'Fluir y adaptarse como el agua de los grandes espíritus del río.',r:[
  [3,'Conjuros de juramento','Bendición, encontrar corcel, respirar bajo el agua, caminar sobre el agua, controlar el agua, libertad de movimiento…'],
  [3,'Canalizar divinidad','Rápidos (empujas como una corriente) y otra opción de agua.'],
  [7,'Aura del río','Tu aura ralentiza a los enemigos como si vadearan agua.'],
  [15,'Espíritu protector','Reacción: reduces a la mitad el daño de una salvación de DES.'],
  [20,'Forma del río','Acción adicional: te rodea la figura de un espíritu del río.']]});
subclase('explorador','oboT',{n:'Explorador Corrompido',e:'La Corrupción te consume y a la vez te da poder.',r:[
  [3,'1.ª manifestación','Al recibir daño ganas marcadores de maldición que gastas en efectos.'],
  [3,'2.ª manifestación','Puedes sustituir una prueba de FUE o DES por 10 + tu nivel.'],
  [7,'3.ª manifestación','Gastas marcadores para sumar daño o reducir el daño recibido.'],
  [11,'4.ª manifestación','Eliges una dolencia (vista gris, pulmones, entumecimiento) con un efecto útil.'],
  [15,'5.ª manifestación','Acción adicional: desatas la Corrupción y transformas tus capacidades.']]});
subclase('picaro','oboT',{n:'Pícaro de Cera',e:'Brigada de mensajeros que domina la magia de las velas.',r:[
  [3,'Conjurar llama','Luces danzantes (velas flotantes) y producir llama.'],
  [3,'Encantamientos de cera','Puntos de mecha para efectos de vela: luz que florece, cera que atrapa…'],
  [9,'Ciclo de combustión','Tus armas arden con fuego blanco al pillar a un enemigo desprevenido.'],
  [13,'Encantamientos avanzados','Tus encantamientos se vuelven más potentes.'],
  [17,'Llama espiritual','Una vela rosa especial con un poder decisivo.']]});
subclase('hechicero','oboT',{n:'Linaje Oni',e:'La esencia del Primer Oni está encerrada en tu sangre.',r:[
  [1,'Prisión arcana','Cuantos menos puntos de hechicería te quedan, más rasgos oni se manifiestan (ojos, cuernos, piel, lengua, pelo).'],
  [6,'Manipulación de ogro','Manifiestas un rasgo oni a voluntad.'],
  [14,'Poder hirviente','Tus rasgos oni se vuelven más fuertes.'],
  [18,'Transformación','Adoptas por completo la forma de tu antepasado demonio.']]});
subclase('brujo','oboT',{n:'La Linterna',e:'Un espíritu poderoso vive en tu farol.',r:[
  [1,'Aura iluminadora','Tu linterna emite una luz que protege a los aliados y molesta a los enemigos.'],
  [1,'Luz reveladora','Luz granate que revela lo oculto e invisible.'],
  [6,'Herramienta peligrosa','El aura sigue aunque sueltes la linterna; puedes lanzarla.'],
  [6,'Iluminación oracular','Conectas tu mente a una fuente de luz lejana y ves a través de ella.'],
  [10,'Iluminación brillante','Destello que ciega y daña.'],
  [14,'Más brillante aún','Activas el aura a voluntad.']]});
subclase('mago','oboT',{n:'Mago del Origami',e:'Figuras de papel que cobran vida con tu magia.',r:[
  [2,'Arte arcano','Creas construcciones de origami (pájaro, rana, grulla…) que te dan beneficios.'],
  [2,'Familiar de origami','Encontrar familiar siempre preparado, con forma de papel.'],
  [6,'Liberar el vínculo','Acción adicional: envías una figura a otra criatura.'],
  [6,'Senda de papel','Tus figuras entregan conjuros de toque.'],
  [10,'Sirviente de origami','Sirviente invisible siempre preparado.'],
  [14,'Recarga arcana','Al destruirse tus figuras recuperas magia.']]});

/* ——— Subclases (Yatamon) ——— */
subclase('guerrero','oboY',{n:'Duelista Neko',nivel:3,e:'Esgrima felina: esperas el momento perfecto.',r:[
  [3,'Susurrador de gatos','Hablas con felinos y tienes ventaja para influir en ellos.'],
  [3,'Naturaleza felina','Agilidad gatuna: caídas suaves, trepar y equilibrio.'],
  [3,'Picardía desproporcionada','Usas el peso del rival en su contra al empujar.'],
  [7,'Maniobras evasivas','Mejoras para esquivar cuando te rodean.'],
  [10,'Reflejos vigilantes','No puedes ser sorprendido; ventajas tras la iniciativa.'],
  [15,'Tenacidad cauta','Dos usos más de Tomar aliento, con beneficios extra.'],
  [18,'Ráfaga de zarpazos','Un ataque cuerpo a cuerpo extra una vez por turno.']]});
subclase('picaro','oboY',{n:'Pícaro de la Fortuna',nivel:3,e:'Lo tuyo no es el sigilo: es la suerte.',r:[
  [3,'Más allá de la casualidad','Dados de fortuna para que las cosas salgan a tu favor.'],
  [3,'Vaso medio lleno','Recuperas un dado de fortuna cuando alguien cercano saca un 20.'],
  [9,'Golpe de suerte','Gastas un dado para hacer una prueba de suerte en lugar del ataque.'],
  [13,'Don de la fortuna','Tras un descanso largo, guardas dos d20 para sustituir tiradas.'],
  [17,'Por los pelos','Guardas tres d20 con Don de la fortuna.']]});
subclase('brujo','oboY',{n:'Patrón del Aquelarre',nivel:3,e:'Tu patrón es tu aquelarre de brujas.',r:[
  [3,'Conjuros del aquelarre','Conjuros siempre preparados del aquelarre.'],
  [3,'Saber colectivo','Recurres al conocimiento arcano de tus hermanas.'],
  [6,'Vínculo del aquelarre','Acción adicional: unes a una criatura contigo.'],
  [10,'Protecciones a distancia','Reacción al recibir 10 o más de daño: defensas del aquelarre.'],
  [14,'Voz de muchos','Tu peso en el aquelarre te da aliados y favores.']]});

/* ——— Razas ——— */
raza('oboT',{id:'dara',n:'Dara',tam:'Mediano o Pequeño',vel:30,mej:{},elegir:{n:3,val:1},idiomas:'Común y uno a elegir',habElegir:3,
  lore:'Un pueblo misterioso surgido de los bosques hace menos de 300 años. Absorben saberes de glifos mágicos y pasan su alma a un nuevo dara al morir.',
  rasgos:[['Habilidades despiertas','Competencia en tres habilidades.'],
    ['Crear talismán','Una vez por descanso largo, talismán de papel: sol (Destrabarse o Correr), tierra (quedar a 1 PG) o luna (daño radiante igual a tu nivel).'],
    ['Revelación sagrada','Entiendes los glifos antiguos de la isla.']],
  sub:[{id:'azul',n:'Dara azul (Mediano)',rasgos:[['Talismán del saber','+1d6 a una prueba de característica.']]},
       {id:'rojo',n:'Dara rojo (Pequeño, 25 pies)',rasgos:[['Talismán de poder','+1d6 a una salvación.']]}]});
raza('oboT',{id:'elfo',n:'Elfo de Obojima',tam:'Mediano',vel:30,mej:{},elegir:{n:3,val:1},idiomas:'Común',
  lore:'Elfos unidos al Reino de los Espíritus; nacen con una marca Oaka que refleja una virtud.',
  rasgos:[['Visión en la oscuridad','60 pies.'],['Vista etérea','Acción: ves espíritus del Reino Espiritual durante una hora (competencia por descanso largo).']],
  sub:[['Valor','resistencia; heroísmo a nivel 3'],['Furia','llama sagrada; romper a nivel 3'],['Armonía','orientación divina'],['Naturaleza','luces danzantes'],['Pureza','piedad con los moribundos'],['Abnegación','amistad resistente']]
    .map(([n,t])=>({id:n.toLowerCase(),n:'Marca Oaka: '+n,rasgos:[['Marca Oaka',`Truco y conjuro innatos (CAR): ${t}.`]]}))});
raza('oboT',{id:'nakudama',n:'Nakudama',tam:'Mediano',vel:25,mej:{},elegir:{n:3,val:1},idiomas:'Común y naku naku',
  lore:'Gente rana amante de los placeres sencillos: un dulce, una fuente termal, un fuego compartido. Fueron la gran civilización antigua de la isla.',
  rasgos:[['Nadador','Velocidad nadando 30 pies.'],['Anfibio','Respiras aire y agua.'],['Salto sin carrerilla','Salto largo de 20 pies y alto de 15.'],
    ['Lengua prensil','Acción adicional: atraes un objeto ligero a 15 pies (prueba enfrentada si lo lleva alguien).'],
    ['Lengua de anclaje','Acción adicional: te impulsas hacia una superficie o criatura más grande a 15 pies.']]});

/* ——— Objetos ——— */
[['Incensario de espíritus discutidores','Objeto maravilloso','Raro',false,'Una tetera abollada con espíritus que discuten dentro.'],
 ['Bumerán tocado por las nubes','Arma (bumerán)','Común',true,'Un torbellino lo devuelve y lo guía.'],
 ['Filo de moneda','Objeto maravilloso','Común',false,'Al lanzarla al aire se convierte en una daga.'],
 ['Colgante corrompido','Objeto maravilloso','Raro',false,'Encierra un poco de Corrupción; da poder y un extraño anhelo de mar.'],
 ['Tele de tubo y temporizador gallina','Objeto maravilloso','Poco común',false,'Al poner el temporizador, la tele muestra una visión borrosa.'],
 ['Cubo de cubos','Objeto maravilloso','Raro',false,'Rompecabezas de la Primera Era: cada cara resuelta da un efecto.'],
 ['Cometa ojo','Objeto maravilloso','Común',true,'Ves a través de una cometa con forma de pulpo, grulla o dragón.'],
 ['Collar de familiar','Objeto maravilloso','Poco común',true,'Una bestia amiga que lo lleva te permite controlarla con magia.'],
 ['Caldero de campaña','Objeto maravilloso','Poco común',false,'Para preparar pociones en el camino.'],
 ['Lanza del pescador','Arma (lanza)','Común',true,'Su asta se alarga de golpe para pescar o atacar.'],
 ['Escoba voladora','Objeto maravilloso','Poco común',false,'Vuela a 60 pies y vuelve a ti cuando la llamas.'],
 ['Keytar','Objeto maravilloso','Poco común',true,'Instrumento de la Primera Era: tocando un minuto abres cerraduras.'],
 ['Consola Gametoy','Objeto maravilloso','Muy raro',true,'Cada cartucho te da competencia en una habilidad.'],
 ['Esferas guardianas','Objeto maravilloso','Poco común',true,'Dispositivos nakudama que flotan y bloquean ataques.'],
 ['Globos saltarines','Objeto maravilloso','Común',true,'Se inflan con una palabra y frenan las caídas.'],
 ['Cámara Instaprint','Objeto maravilloso','Poco común',false,'Las fotos revelan la magia de lo fotografiado.'],
 ['Pluma de Jabbadoon','Objeto maravilloso','Poco común',false,'Mientras la sostienes eres ligero como una pluma.'],
 ['Tetera de hierro de Lafula','Objeto maravilloso','Muy raro',false,'El té preparado en ella maldice a quien lo bebe.'],
 ['Molinillo de Oiki','Objeto maravilloso','Raro',false,'Clavado en el suelo, hipnotiza a los enemigos que lo ven.'],
 ['Chaqueta solo socios','Objeto maravilloso','Poco común',false,'Disfraz ilusorio a elegir.'],
 ['Sombrero de pintor','Objeto maravilloso','Común',false,'Un sombrero que inspira cuadros con un toque de magia.'],
 ['Colgantes de pertenencia','Objeto maravilloso','Poco común',false,'Juegos de 4 a 8: cada portador sabe dónde están los demás.'],
 ['Tarjeta de sellos','Objeto maravilloso','Poco común',false,'Se perfora sola con cada visita a una casa de té y da premios.'],
 ['Urna de arcilla de Roake','Objeto maravilloso','Poco común',false,'Con un ritual atrapa a un espíritu que te ve u oye.'],
 ['Bici rojo rubí','Objeto maravilloso','Raro',false,'Velocidad 70 pies; tras recorrer 60 pies deja un rastro de fuego.'],
 ['Bufanda amortiguadora','Objeto maravilloso','Poco común',false,'Lanzada, envuelve y silencia a una criatura.'],
 ['Farol caminante','Objeto maravilloso','Común',false,'Da luz y camina sobre patitas.'],
 ['Monederos hermanos','Objeto maravilloso','Poco común',false,'Lo que metes en uno aparece en el otro.'],
 ['Latas de refresco','Objeto maravilloso','Poco común',false,'Refrescos extraños con efectos de poción al azar.'],
 ['Amuleto solar','Objeto maravilloso','Poco común',true,'Curas más cuando recibes curación mágica.'],
 ['Arco astillador','Arma (arco)','Poco común',true,'Divide la flecha para alcanzar a varios objetivos.'],
 ['Mano pegajosa','Objeto maravilloso','Común',false,'Juguete infantil: atraes objetos con el conjuro recuperar.'],
 ['Casetes requemados','Objeto maravilloso','Poco común','un lanzador','Guardan magia de la Primera Era que se va perdiendo.'],
 ['Talismán del fénix','Objeto maravilloso','Raro',false,'Cargas que anulan una salvación de muerte fallida.'],
 ['Wok de viaje','Arma (sartén)','Raro',false,'La comida cocinada en él cura.'],
 ['Paraguas escudo','Arma (paraguas)','Poco común',true,'Paraguas reforzado que sirve de escudo.'],
 ['Arma del sol y la luna','Arma (cualquiera)','Raro',true,'Con el amuleto solar, poderes combinados.'],
 ['Máscara yappa','Objeto maravilloso','Poco común',false,'Tu tipo de criatura pasa a ser espíritu y hablas con ellos.']
].forEach(o=>objeto('oboT',o));
[['Antorcha del cervecero','Objeto maravilloso','Común',true,'Calienta pociones y calderos al instante.'],
 ['Sonajero de demonios','Objeto maravilloso','Raro',true,'+1 a salvaciones contra demonios.'],
 ['Refresco maldito','Objeto maravilloso','Poco común',false,'Quien lo bebe queda maldito hasta que se rompa la maldición.'],
 ['Pase de prensa','Objeto maravilloso','Raro',false,'Pegado a una pared, abre un paso a través de ella.'],
 ['Nakurina bigotuda','Objeto maravilloso','Poco común',true,'Un amuleto gatuno de la ciudad.']
].forEach(o=>objeto('oboY',o));
/* Su ambientación está en libros/mundos/. */
