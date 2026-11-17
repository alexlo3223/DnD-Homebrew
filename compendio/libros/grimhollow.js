/* Grim Hollow: The Players Guide (Ghostfire Gaming) — resúmenes propios */
libro('grim','Grim Hollow: Players Guide','etharis');

/* ——— Subclases ——— */
subclase('barbaro','grim',{n:'Senda del Fracturado',e:'Tu furia libera otra personalidad que vive dentro de ti.',r:[
  [3,'Rostro de la furia','Al entrar en furia tu cuerpo cambia hasta ser irreconocible; quien no te conozca no te asocia con tu forma normal.'],
  [3,'Máscara de civilidad','Competencia en una habilidad mental a elegir (Arcanos, Historia, Investigación, Medicina, Naturaleza…).'],
  [6,'Cerebro y músculo','Fuera de la furia, resistencia a daño psíquico; en furia, resistencia a todo salvo psíquico.'],
  [10,'Astuto y brutal','Fuera de la furia puedes Destrabarte o Ayudar como acción adicional; en furia, tus golpes empujan o derriban.'],
  [14,'La otra mitad','Reacción al caer a 0 PG: quedas a 1 PG y tu otra personalidad toma el control con beneficios extra.']]});
subclase('barbaro','grim',{n:'Senda del Espíritu Primigenio',e:'Un espíritu animal te acompaña y lucha a tu lado.',r:[
  [3,'Compañero primigenio','Un espíritu de bestia (guardián o atacante, de tierra, mar o cielo) que escala con tu nivel y actúa en tu turno.'],
  [3,'Furia compartida','Mientras estás en furia, tu compañero resiste el daño contundente, cortante y perforante.'],
  [6,'Pariente de las bestias','Lanzas amistad con animales y hablar con animales con CON, una vez por descanso.'],
  [10,'Trance del cambiapieles','Proyectas tu mente en tu compañero o en una bestia amiga y ves y actúas a través de ella.'],
  [14,'Forma de lo salvaje','Acción adicional: tu compañero cambia de forma al instante y recupera PG.']]});

subclase('bardo','grim',{n:'Colegio de los Aventureros',e:'Un poco de todo: imitas los trucos de las demás clases.',r:[
  [3,'Aventurero talentoso','Aprendes un talento de aventurero (un pequeño rasgo inspirado en otra clase); ganas más con el nivel.'],
  [3,'Organizador del grupo','Quien tenga tu Inspiración bárdica puede Ayudar como acción adicional.'],
  [6,'Polifacético','Competencia en una habilidad, una herramienta y un idioma.'],
  [14,'Talento improvisado','Tras un descanso largo cambias un talento de aventurero por otro.']]});
subclase('bardo','grim',{n:'Colegio de los Réquiems',e:'Cantos fúnebres que tiran de los hilos de la vida y la muerte.',r:[
  [3,'Melodía escalofriante','Dos trucos de nigromancia de cualquier lista, como conjuros de bardo.'],
  [3,'Pulsar las cuerdas del corazón','Gastas Inspiración bárdica para añadir daño necrótico a un ataque o curar a un aliado.'],
  [6,'Agitar los huesos','Aprendes animar a los muertos y controlas un no muerto extra.'],
  [14,'Danza de los muertos','Tus conjuros de nigromancia de un solo objetivo pueden afectar a un segundo.']]});

subclase('clerigo','grim',{n:'Dominio Sobrenatural',e:'Sirves a fuerzas que la mente mortal no comprende.',r:[
  [1,'Inspiración impredecible','Un truco cualquiera de cualquier lista, como conjuro de clérigo.'],
  [1,'Contagio sobrenatural','Tus conjuros pueden imponer un efecto extraño aleatorio (d8) a una criatura.'],
  [2,'Canalizar divinidad: Profecía de perdición','Visiones aterradoras para las criaturas cercanas: daño psíquico y efectos de locura.'],
  [6,'Calma de otro mundo','Resistencia psíquica y ventaja contra hechizado y asustado.'],
  [8,'Lanzamiento potente','Sumas SAB al daño de tus trucos de clérigo.'],
  [17,'Cantar la canción del fin del mundo','Una vez al día, un efecto devastador de locura en área.']]});
subclase('clerigo','grim',{n:'Dominio de la Inquisición',e:'Cazadores de magia corrupta y de quienes la usan.',r:[
  [1,'Competencias adicionales','Armas marciales y armadura pesada.'],
  [1,'Golpe del cazabrujas','+1d8 de fuerza al impactar; si el objetivo se concentra, desventaja para mantenerla.'],
  [2,'Canalizar divinidad: Escudo contra conjuros','Acción adicional: ventaja en salvaciones contra conjuros y resistencia a su daño.'],
  [6,'Reprender al invocador','Reacción cuando alguien lanza un conjuro cerca: salvación de CON o sufre daño y puede perder el conjuro.'],
  [8,'Golpe divino','Daño radiante extra una vez por turno con armas.'],
  [17,'Salvaguarda celestial','El Escudo contra conjuros protege a varios aliados a la vez.']]});

subclase('druida','grim',{n:'Círculo de la Sangre',e:'Ritos antiguos de sacrificio bajo la luna roja.',r:[
  [2,'Don de sangre','Reacción al morir una criatura cercana: recuperas PG o un espacio con su último aliento vital.'],
  [2,'Conjuros de círculo','Conjuros de sangre en los niveles 3, 5, 7 y 9.'],
  [6,'Rito de la luna de sangre','Gastas Forma salvaje para potenciar la sangre de aliados o debilitar la de enemigos.'],
  [10,'Sed de sangre','Los afectados por tu rito pueden sacrificar PG para golpear más fuerte.'],
  [14,'Crear elemental de sangre','Desangras un cadáver para alzar un elemental de sangre a tus órdenes.']]});
subclase('druida','grim',{n:'Círculo de la Mutación',e:'La naturaleza debe mejorarse para sobrevivir a lo antinatural.',r:[
  [2,'Mutar forma','Forma salvaje como acción adicional; ganas puntos de mutación para mejorar tus formas.'],
  [2,'Formas del círculo','Formas de bestia más peligrosas que las de un druida normal.'],
  [6,'Antinatural e inquietante','Competencia (o pericia) en Intimidación.'],
  [10,'Evolución sin fin','Más puntos de mutación (SAB) al entrar en Forma salvaje.'],
  [14,'Aura de superdepredador','Las bestias cercanas deben salvar o quedar asustadas.']]});

subclase('guerrero','grim',{n:'Guerrero Baluarte',e:'Un escudo humano que atrae los golpes para proteger al grupo.',r:[
  [3,'Provocación protectora','Al atacar, obligas al objetivo a centrarse en ti (desventaja contra otros).'],
  [3,'Aguantar la tormenta','Acción adicional: ganas PG temporales al final de cada turno durante un minuto.'],
  [7,'Escudo viviente','Acción: varios aliados cercanos ganan PG temporales.'],
  [10,'Defensa agresiva','Con PG temporales, tus impactos hacen daño extra.'],
  [15,'Tomar aliento mejorado','Tomar aliento también te da PG temporales.'],
  [18,'Detener el asalto','Reacción: tus PG temporales absorben el daño de un aliado adyacente.']]});
subclase('guerrero','grim',{n:'Crisol Viviente',e:'Fuerza alquímica: bebes compuestos tóxicos que te potencian.',r:[
  [3,'Creador de compuestos','Aprendes compuestos alquímicos (adrenalina, piel de hierro…) que consumes por descanso.'],
  [3,'Estudiante de alquimia','Competencia doble con útiles de alquimista.'],
  [7,'Creación rápida','Una vez por descanso largo, creas y tomas un compuesto como acción adicional.'],
  [10,'Caldero viviente','Puedes consumir más compuestos sin peligro (3 + CON).'],
  [15,'Transmutar toxinas','Acción adicional: terminas un envenenamiento y ganas PG temporales.'],
  [18,'Catalizador viviente','Cambias un compuesto conocido tras cada descanso largo.']]});

subclase('monje','grim',{n:'Camino de la Corona de Plomo',e:'Psiónica práctica para defender a los mortales de lo exterior.',r:[
  [3,'Mano sutil','Alcance de 10 pies con golpes telequinéticos.'],
  [3,'Destreza psiónica','Mano de mago y algunos conjuros psíquicos con ki.'],
  [6,'Golpe nada sutil','Al impactar, salvación de FUE o empujas y derribas.'],
  [11,'Aplastamiento psíquico','Cada golpe acumula puntos de presión que puedes detonar en daño psíquico.'],
  [17,'Maestría psiónica','5 ki: un poderoso efecto telequinético de control.']]});
subclase('monje','grim',{n:'Camino del Orgullo',e:'Monjes egocéntricos que pegan más fuerte cuanto peor están.',r:[
  [3,'Cuentos exagerados','Competencia en Engaño, Interpretación o Persuasión.'],
  [3,'Ego herido','Al gastar ki ganas PG temporales.'],
  [3,'Atacante asertivo','Con la mitad de PG o menos, tu dado de artes marciales sube un paso.'],
  [6,'Represalia irracional','Si alguien te daña, tu siguiente golpe contra él hace daño extra.'],
  [6,'Esfuerzo redoblado','Con la mitad de PG o menos, tiras un dado extra de daño.'],
  [11,'Siempre orgulloso','A 0 PG no quedas inconsciente mientras haces salvaciones de muerte.'],
  [17,'Egocéntrico','Siempre cuentas como si estuvieras a la mitad de PG o menos.']]});

subclase('paladin','grim',{n:'Juramento de la Pestilencia',e:'La enfermedad como purga: solo los fuertes sobreviven.',r:[
  [3,'Conjuros de juramento','Perdición, infligir heridas, flecha ácida, nube apestosa, plaga, enjambre de insectos…'],
  [3,'Canalizar divinidad','Fiebre debilitante (tu toque enferma) y Plaga purificadora.'],
  [7,'Aura de enfermedad desatada','Las criaturas hostiles de tu aura restan a sus pruebas y salvaciones.'],
  [15,'Resistencia repugnante','Al caer a 0 PG, gastas dados de golpe para seguir en pie.'],
  [20,'Portador de la plaga','Avatar de la peste: resistencias, aura más grande y enfermedades potentes.']]});
subclase('paladin','grim',{n:'Juramento del Celo',e:'Zelotes consumidos por el odio a una herejía concreta.',r:[
  [3,'Canalizar divinidad','Marca del hereje (ventaja y daño contra él) y Ver la verdad.'],
  [7,'Aura de claridad','Tú y tus aliados cercanos no podéis quedar cegados y veis a través de ilusiones.'],
  [15,'Forzar la confesión','Zona de la verdad sin gastar espacio y con desventaja en la salvación.'],
  [20,'Revelación apocalíptica','Durante un minuto revelas la verdadera naturaleza de tus enemigos y los castigas.']]});

subclase('explorador','grim',{n:'Segador Verde',e:'Asesinos que cosechan venenos de plantas y bestias.',r:[
  [3,'Magia del segador','Detectar veneno y enfermedad, inmovilizar persona, imponer maldición, invisibilidad mayor, nube aniquiladora.'],
  [3,'Ataque envenenado','Acción adicional: untas veneno en un arma o munición para daño extra.'],
  [3,'Oficio tóxico','Competencia doble con el útil de envenenador.'],
  [7,'Control del veneno','Resistencia al veneno y ventaja contra envenenado.'],
  [11,'Vejaciones variadas','Tu veneno puede cambiar de tipo de daño y añadir efectos.'],
  [15,'Tolerancia al dolor','Reacción tras recibir daño: lo reduces.']]});
subclase('explorador','grim',{n:'Señor de las Alimañas',e:'Hordas de ratas portadoras de enfermedades a tus órdenes.',r:[
  [3,'Magia del señor de las alimañas','Conjuros adicionales de plaga y bestias.'],
  [3,'Pariente de las alimañas','Hablas con roedores e invocas un enjambre de alimañas que lucha contigo.'],
  [3,'Golpes sépticos','Acción adicional: la suciedad en las heridas causa daño de veneno.'],
  [7,'Mugre y fortaleza','Inmune a las enfermedades.'],
  [11,'Contagio','Tu daño séptico se extiende a criaturas cercanas.'],
  [15,'Fuerza del enjambre','Tu enjambre te protege reduciendo el daño que recibes.']]});

subclase('picaro','grim',{n:'Salteador de Caminos',e:'Bandidos a caballo que aterrorizan los caminos.',r:[
  [3,'Gatillo fácil','Al tirar iniciativa, reacción para moverte, esconderte o atacar.'],
  [3,'Montura fiel','Lanzas encontrar corcel; la montura sigue siendo una bestia.'],
  [3,'Arrollar','Ataque furtivo sin ventaja si vas montado y te has movido.'],
  [9,'Señor de los caballos','Cuidas tu montura: gana PG temporales y mejoras.'],
  [13,'Agallas','Competencia en salvaciones de CON.'],
  [17,'Desesperado','Al caer a 0 PG, reacción para actuar una última vez.']]});
subclase('picaro','grim',{n:'Portador de Desgracias',e:'Mal de ojo: marcas a tus enemigos con la mala suerte.',r:[
  [3,'Mal de ojo','Acción adicional: maldices a una criatura y puedes infligirle desgracias.'],
  [3,'Desgraciador','Aprendes desgracias que gastan puntos de gafe (tropiezos, confusión…).'],
  [9,'Robar suerte','Reacción: cuando alguien tira con ventaja cerca, le robas la suerte.'],
  [13,'Lanzamaldiciones','3 puntos de gafe: lanzas imponer maldición.'],
  [17,'Rey de la mala suerte','Tus desgracias son más baratas y potentes.']]});

subclase('hechicero','grim',{n:'Encantado',e:'Un espíritu te acompaña desde que naciste.',r:[
  [1,'Conjuros del encantado','Conjuros adicionales de espíritus y muerte.'],
  [1,'Compañero fantasmal','Encontrar familiar con forma de espectro; no cuenta como conjuro conocido.'],
  [1,'Sexto sentido','Bonificador a la iniciativa igual a tu CAR.'],
  [6,'Fuerza de espíritu','Tu fantasma mejora y puede actuar como canal de tus conjuros.'],
  [6,'Palidez mortal','Resistencia necrótica; puedes cambiar el daño de tus conjuros a necrótico.'],
  [14,'Posesión fantasmal','Tu fantasma intenta poseer a una criatura.'],
  [18,'Convertirse en la muerte','Al caer a 0 PG, adoptas forma espectral.']]});
subclase('hechicero','grim',{n:'Linaje Maldito',e:'Un antepasado no pagó su deuda con un ser de otro mundo.',r:[
  [1,'Amuleto de mala suerte','Transfieres un fragmento de tu maldición a otra criatura.'],
  [1,'Lazos de sangre','Detectar el bien y el mal a voluntad limitada.'],
  [1,'Maldición heredada','Sufres una maldición elegida que también te da poder.'],
  [6,'Compartir la carga','Aprendes imponer maldición, como conjuro de hechicero.'],
  [14,'Rostro aterrador','Acción adicional: adoptas el aspecto de quien maldijo a tu familia.'],
  [18,'Llamada vengativa','Invocas y controlas a un siervo de tus maldecidores.']]});

subclase('brujo','grim',{n:'El Primer Vampiro',e:'Pacto con un vampiro antiguo y poderoso.',r:[
  [1,'Lista ampliada','Conjuros de oscuridad, sangre y dominación.'],
  [1,'Depredador nocturno','Visión en la oscuridad mejorada.'],
  [1,'Drenar vida','Al atacar o lanzar un conjuro, drenas PG a un objetivo y te curas.'],
  [6,'Criatura de la noche','Te transformas en murciélago o lobo.'],
  [10,'Apetito sobrenatural','Al matar con Drenar vida, consumes su esencia para recuperar PG o un espacio.'],
  [14,'Noche eterna','No envejeces y resistes el daño necrótico.']]});
subclase('brujo','grim',{n:'El Parásito',e:'Tu patrón es un parásito cósmico que te usa como huésped.',r:[
  [1,'Sifón de conjuros','Reacción: cuando alguien cerca lanza un conjuro, absorbes su energía.'],
  [1,'Espécimen físico','Tras un descanso largo, mejoras temporalmente un atributo físico.'],
  [6,'Centinela simbiótico','No puedes ser sorprendido y tienes ventaja en iniciativa.'],
  [10,'Peón engendrado','Aprendes dominar persona.'],
  [14,'Regeneración larvaria','Al morir, una larva brota de tu cadáver y te regenera.']]});

subclase('mago','grim',{n:'Médico de la Peste',e:'Magia destilada en brebajes que curan o envenenan.',r:[
  [2,'Elaboración de pociones','Competencia en Medicina y útiles de alquimista; conviertes conjuros en brebajes.'],
  [2,'Buena medicina','Gastas un espacio para crear un brebaje curativo.'],
  [6,'Mala medicina','Gastas un espacio para crear un brebaje dañino arrojadizo.'],
  [10,'Respíralo','Resistencia al veneno y ventaja contra enfermedades.'],
  [14,'Maestro medicinal','Tus brebajes curan o dañan 2d8 más.']]});
subclase('mago','grim',{n:'Escuela de Sangromancia',e:'Magia de sangre: pagas con tu vida para potenciar conjuros.',r:[
  [2,'Sabio de la sangromancia','Una reserva de d12 que gastas (con PG) para potenciar conjuros.'],
  [6,'Vigor sanguíneo','Tu máximo de PG aumenta.'],
  [10,'Sangre por sangre','Al dañar con un conjuro, puedes recuperar PG.'],
  [14,'Sangre plena','Tras un descanso corto recuperas dados de tu reserva.']]});

/* ——— Razas ——— */
raza('grim',{id:'wechselkind',n:'Wechselkind',tam:'Pequeño',vel:25,mej:{CON:2,CAR:1},idiomas:'Silvano y uno a elegir',hab:['Acrobacias'],
  lore:'Muñecos de madera, arcilla y cerámica que las hadas dejan en lugar de un niño robado. Su mente crece, pero su cuerpo es para siempre el de un niño.',
  rasgos:[['Forma artificial','Ventaja contra envenenado, resistencia al veneno e inmunidad a enfermedades; no comes, bebes, duermes ni respiras.'],
    ['Glamour feérico','Disfrazarse una vez por descanso largo, solo con el aspecto del niño que sustituías (CAR).'],
    ['Agilidad infantil','Atraviesas el espacio de criaturas más grandes; competencia en Acrobacias.']]});
raza('grim',{id:'laneshi',n:'Laneshi',tam:'Mediano',vel:30,mej:{FUE:1,SAB:1},idiomas:'Laneshi y uno a elegir',
  lore:'Un pueblo submarino antiguo, rígido y de castas, que habla con los espíritus y no teme a la muerte.',
  rasgos:[['Nadador','Velocidad nadando 30 pies.'],['Visión en la oscuridad','60 pies.'],['Anfibio','Respiras aire y agua.'],
    ['Susurrador de bestias','Hablar con animales una vez por descanso largo.']],
  sub:[{id:'guerrero',n:'Laneshi guerrero',mej:{FUE:1},comp:'Lanza, tridente, jabalina y armadura ligera.',rasgos:[['Tácticas de escaramuza','Al impactar puedes Destrabarte como acción adicional.'],['Armas laneshi','Lanza, tridente, jabalina, armadura ligera y Trato con animales.']]},
       {id:'mistico',n:'Laneshi místico',mej:{SAB:1},rasgos:[['Dualidad de espíritu','El alma de tu gemelo muerto vive en ti: resistencia psíquica y ventaja en salvaciones mentales contra magia.'],['Magia laneshi','Un truco de nigromancia (otro a nivel 5), con SAB.']]}]});
raza('grim',{id:'ogresh',n:'Ogresh',tam:'Mediano',vel:30,mej:{CAR:2,CON:1,SAB:1},idiomas:'Tres a elegir',
  lore:'Ogros solitarios y sabios que se mezclan con otros pueblos como consejeros y conversadores.',
  rasgos:[['Hace falta uno para conocer a otro','Ventaja contra ser hechizado.'],['Complexión poderosa','Cuentas como un tamaño mayor para cargar.'],
    ['Labia','Competencia en dos entre Persuasión, Perspicacia, Engaño e Interpretación.'],
    ['Oído amigo','Una vez por descanso corto, tras un minuto de charla, puedes hechizar a alguien y sacarle información sin que lo note.']]});
raza('grim',{id:'downcast',n:'Caído (Downcast)',tam:'Mediano',vel:30,mej:{SAB:2},idiomas:'Celestial y uno a elegir',hab:['Religión'],
  lore:'Ángeles despojados de su inmortalidad tras la muerte de los dioses. Conservan restos de su antigua divinidad.',
  rasgos:[['Saber divino','Competencia en Religión y el truco taumaturgia.'],['Sangromancia divina','Cuando un aliado cercano se cura, gastas un dado de golpe para sumarlo.'],
    ['Divinidad persistente','Resistencia al daño necrótico.']],
  sub:[{id:'aureliano',n:'Aureliano',mej:{CAR:1},rasgos:[['Mano de Aurelia','Curar heridas una vez por descanso largo.']]},
       {id:'ulmyrita',n:'Ulmyrita',mej:{INT:1},rasgos:[['Vista de Ulmyr','Detectar magia una vez por descanso largo.']]},
       {id:'maliganti',n:'Maliganti',mej:{FUE:1},rasgos:[['Furia de Maligant','Castigo abrasador una vez por descanso largo.']]},
       {id:'galtiano',n:'Galtiano',mej:{CON:1},rasgos:[['Baluarte de Galt','Escudo de fe una vez por descanso largo.']]}]});
raza('grim',{id:'sonador',n:'Soñador',tam:'Mediano',vel:30,mej:{INT:2,CON:1},idiomas:'Habla onírica, enano y uno a elegir',
  lore:'Herederos de un imperio olvidado bajo Stehlenwald, unidos al mundo de los sueños.',
  rasgos:[['Visión en la oscuridad','60 pies.'],['Caminar en sueños','Dormido, tocas los sueños de otros a una milla; tras dormir, sumas tu competencia a una habilidad o herramienta elegida.'],
    ['Incluso dormido','Dormido no sufres penalizaciones de Percepción (salvo la vista).'],['Siesta reparadora','Si duermes en un descanso corto, pierdes un nivel de agotamiento y recuperas un dado de golpe.']]});
raza('grim',{id:'desencarnado',n:'Desencarnado',tam:'Mediano',vel:30,mej:{INT:2,DES:1},idiomas:'Común y uno a elegir',hab:['Arcanos'],
  lore:'Supervivientes del accidente de la Puerta de Ulmyr, atrapados entre el plano material y el etéreo.',
  rasgos:[['Desvanecerse','Acción: pasas al plano etéreo un minuto. Una vez por descanso largo.'],
    ['Paria planar','Caída de pluma; desenfoque a nivel 3 y parpadeo a nivel 5, una vez al día (INT).'],['Origen arcano','Competencia en Arcanos.']]});

/* ——— Objetos ——— */
[['Armadura iridiscente','Armadura (coraza)','Raro',false,'+1 a la CA; una vez al día, alas de libélula que te dejan volar un rato.'],
 ['Corona feérica','Objeto maravilloso','Muy raro',false,'Mariposas que, con tu reacción, desvían un ataque que iba a impactarte.'],
 ['Licor de seta','Poción','Poco común',false,'Un hada que lo bebe aguanta tres días más en la ciudad sin agotarse.'],
 ['Anillo del deseo oculto','Anillo','Poco común','un infernal','Descubres el deseo más oscuro de una criatura.'],
 ['Amuleto profano','Objeto maravilloso','Poco común','un infernal','Entras en suelo sagrado sin que se revele tu naturaleza.'],
 ['Gabardina de ceniza','Armadura (cuero)','Muy raro','un infernal','+1 a la CA; cargas para añadir daño de fuego al impactar.'],
 ['Ardor','Arma (hacha)','Artefacto','un infernal','Hacha humeante de un asalto infernal al cielo, con poderes de fuego.'],
 ['Máscara funeraria','Objeto maravilloso','Raro','un liche','Oculta tu naturaleza de no muerto y protege tu mente.'],
 ['Báculo del Rey Hechicero','Arma (bastón)','Legendario','un lanzador','Funciona como lanza +2 y almacena conjuros poderosos.'],
 ['Vara de la ruina','Vara','Raro','un liche','3 cargas: reacción para castigar a quien lanza conjuros cerca.'],
 ['Armadura de carne de zombi','Armadura (pieles)','Raro','un liche','CA 16 + DES, piel curtida de zombi.'],
 ['Segunda piel','Armadura (pieles)','Raro','un licántropo','En forma híbrida, tu CA pasa a 18.'],
 ['Niebla carmesí','Objeto maravilloso','Poco común',false,'Feromonas de presa: el objetivo atrae a los depredadores durante 24 horas.'],
 ['Vara del amo de la manada','Vara','Muy raro','un licántropo','Los aliados elegidos se vuelven tu manada y ganan beneficios.'],
 ['Colmillos de hierro','Objeto maravilloso','Raro','un licántropo','En forma híbrida, mordiscos mágicos más dañinos.'],
 ['Arco de los Cuatro','Arma (arco largo)','Muy raro','un primordial','Crea flechas de tierra, fuego, agua o aire con efectos distintos.'],
 ['Armadura de magnetita','Armadura (placas)','Raro','un primordial','Magnetismo que atrae armas y proyectiles enemigos.'],
 ['Anillo de radiación','Anillo','Poco común','un primordial','Tus ataques sin armas irradian daño elemental.'],
 ['Vara de estasis elemental','Vara','Raro','un primordial','Atrapa a un elemental derrotado en una de sus esferas.'],
 ['Heraldo del cielo','Objeto maravilloso','Muy raro',false,'Trompeta dorada: un canto de batalla que inspira a los aliados.'],
 ['Celo','Arma (martillo de guerra)','Artefacto','un serafín','Martillo luminoso de la defensa del cielo.'],
 ['Anillo de la verdad','Anillo','Poco común',true,'Emites siempre una zona de la verdad.'],
 ['Hábito humilde','Objeto maravilloso','Poco común','un serafín','Oculta tu naturaleza celestial si no llevas nada más.'],
 ['Látigo ectoplásmico','Arma (látigo)','Raro','un espectro','+1; invisible y capaz de golpear lo etéreo.'],
 ['Caja de la banshee','Objeto maravilloso','Poco común','un espectro','Al abrirla, lamentos que asustan a quien los oye.'],
 ['Varita del poltergeist','Varita','Muy raro','un espectro','7 cargas para conjuros de telequinesis y miedo.'],
 ['Espiral mortal','Anillo','Poco común','un espectro','Acción adicional: te vuelves completamente corpóreo.'],
 ['Gafas de sol','Objeto maravilloso','Poco común',false,'Anulan la desventaja por luz solar.'],
 ['Cápsula de sangre','Objeto maravilloso','Poco común',false,'Mantiene sangre fresca un año; alimento de un día para un vampiro.'],
 ['Bebeluz','Arma (espada larga)','Muy raro',true,'+2; absorbe la luz a su alrededor.'],
 ['Armadura de piel de ángel','Armadura (cuero)','Raro',false,'Inmune al daño físico no mágico.'],
 ['Vela del vigía','Objeto maravilloso','Poco común',false,'Se enciende con llama púrpura si se acerca un celestial, infernal, no muerto o hada.'],
 ['Espejo de la verdad','Objeto maravilloso','Muy raro',false,'Muestra la verdadera forma de lo que refleja, como visión verdadera.'],
 ['Aguja de coser','Objeto maravilloso','Raro',false,'Coser la boca de una criatura le impide hablar y lanzar conjuros verbales.'],
 ['Mutágeno del cazador','Poción','Raro',false,'Una hora de inmunidad a veneno, enfermedad y maldiciones como la licantropía.']
].forEach(o=>objeto('grim',o));
/* Su ambientación está en libros/mundos/. */
