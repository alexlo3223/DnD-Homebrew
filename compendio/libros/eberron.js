/* Eberron: Rising from the Last War y Eberron: Forge of the Artificer — resúmenes propios */
libro('erlw','Eberron: Rising from the Last War','khorvaire');
libro('forge','Eberron: Forge of the Artificer','khorvaire');

/* ——— Clase: Artífice (versión de Forge of the Artificer) ——— */
CLASES_OFICIALES.push({id:'artifice',n:'Artífice',d:'d8',sal:['CON','INT'],arm:'Ligeras, medias y escudos',armas:'Sencillas',
  herr:'Herramientas de manitas, de ladrón y un tipo de herramientas de artesano',src:'forge',
  hab:{n:2,de:['Arcanos','Historia','Investigación','Medicina','Naturaleza','Percepción','Juego de manos']},
  extras:{'Planos conocidos':T([2,4],[6,5],[10,6],[14,7],[18,8]),'Objetos mágicos':T([2,2],[6,3],[10,4],[14,5],[18,6])},
  magia:{car:'INT',tipo:'artifice',lista:'a',trucos:T([1,2],[10,3],[14,4]),preparados:'mitad'},
  lore:'Inventores que entienden la magia como una técnica: la canalizan a través de herramientas e inventos. En Eberron sostienen la industria mágica de las Cinco Naciones.',
  como:'Preparas conjuros de artífice con INT y los lanzas a través de herramientas. Desde el nivel 2 aprendes planos para replicar objetos mágicos, y tu especialidad define tu forma de inventar.',
  rasgos:[[1,'Lanzamiento de conjuros','Medio lanzador desde el nivel 1 (INT); usas herramientas como foco.'],
    [1,'Magia de manitas','Con herramientas de manitas creas objetos sencillos útiles (cuerda, antorcha, ganzúas…) unas veces por descanso largo.'],
    [2,'Replicar objeto mágico','Aprendes planos y fabricas objetos mágicos (bolsa de contención, arma +1, varita…) tras un descanso largo.'],
    [3,'Especialidad de artífice','Alquimista, armero, artillero, herrero de batalla o cartógrafo.'],[4,...MEJORA],
    [6,'Manitas de objetos mágicos','Recargas, drenas o transmutas los objetos que creas.'],
    [7,'Destello de genialidad','Reacción: sumas tu INT a una prueba o salvación propia o de un aliado.'],[8,...MEJORA],
    [10,'Adepto de objetos mágicos','Te sintonizas con más objetos y fabricas más rápido.'],
    [11,'Objeto almacén de conjuros','Guardas un conjuro de nivel 1-3 en un objeto para que cualquiera lo use varias veces.'],[12,...MEJORA],
    [14,'Artificio avanzado','Más sintonización y planos de mayor rareza.'],[16,...MEJORA],
    [18,'Maestro de objetos mágicos','Hasta seis objetos sintonizados.'],[19,'Don épico','Una dote de don épico.'],
    [20,'Alma del artificio','+1 a salvaciones por objeto sintonizado; al caer a 0 PG puedes sacrificar una sintonía para quedar a 1 PG.']],
  sub:{nivel:3,titulo:'Especialidad de artífice',op:[
    {n:'Alquimista',src:'forge',e:'Pociones y elixires experimentales.',r:[[3,'Herramientas del oficio','Útiles de alquimista.'],[3,'Conjuros de alquimista','Heroísmo, rayo de enfermedad, flecha ácida, esfera llameante, palabra curativa en masa…'],
      [3,'Elixir experimental','Elixires gratuitos tras cada descanso largo (curación, rapidez, resistencia, vuelo…).'],[5,'Sabio alquímico','Sumas INT a la curación y al daño de ácido, fuego, necrótico o veneno.'],
      [9,'Reactivos reparadores','Tus elixires dan PG temporales y lanzas restablecimiento menor gratis.'],[15,'Maestría química','Resistencias, inmunidad al veneno y conjuros potentes gratis.']]},
    {n:'Armero',src:'forge',e:'Tu armadura es tu invento.',r:[[3,'Herramientas del oficio','Armadura pesada y herramientas de herrero.'],[3,'Conjuros de armero','Proyectil mágico, onda atronadora, reflejos, romper, patrón hipnótico…'],
      [3,'Armadura arcana','Tu armadura es foco, cubre todo el cuerpo y sustituye miembros.'],[3,'Modelo de armadura','Acorazado (crece y agarra), guardián (atrae enemigos) o infiltrado (sigilo y rayos).'],
      [5,'Ataque adicional','Atacas dos veces.'],[9,'Armero mejorado','Tu armadura gana mejoras y espacios de plano.'],[15,'Armadura perfeccionada','El modelo elegido gana su mejor poder.']]},
    {n:'Artillero',src:'forge',e:'Explosivos y un cañón sobrenatural.',r:[[3,'Herramientas del oficio','Herramientas de tallador.'],[3,'Conjuros de artillero','Escudo, onda atronadora, rayo abrasador, bola de fuego, muro de fuego…'],
      [3,'Cañón sobrenatural','Creas un cañón que lanza llamas, fuerza o protección.'],[5,'Arma de fuego arcana','Varita o bastón que añade 1d8 al daño de tus conjuros.'],
      [9,'Cañón explosivo','El cañón hace más daño y puedes detonarlo.'],[15,'Posición fortificada','Dos cañones a la vez y cobertura para tus aliados.']]},
    {n:'Herrero de Batalla',src:'forge',e:'Soldado y mecánico con su defensor de acero.',r:[[3,'Herramientas del oficio','Herramientas de herrero.'],[3,'Conjuros de herrero','Heroísmo, escudo, castigo marcado, aura de vitalidad, muro de fuerza…'],
      [3,'Listo para la batalla','Armas marciales y ataques con INT usando armas mágicas.'],[3,'Defensor de acero','Un constructo que lucha a tu lado y protege a tus aliados.'],
      [5,'Ataque adicional','Atacas dos veces.'],[9,'Sacudida arcana','Tus golpes o los del defensor dañan o curan 2d6.'],[15,'Defensor mejorado','Sacudida de 4d6 y defensor más resistente.']]},
    {n:'Cartógrafo',src:'forge',e:'Mapas mágicos que guían a tu grupo en batalla.',r:[[3,'Herramientas del oficio','Herramientas de cartógrafo.'],[3,'Conjuros de cartógrafo','Fuego feérico, guía, localizar objeto, clarividencia, puerta dimensional…'],
      [3,'Atlas del aventurero','Mapas mágicos que reparten entre tus aliados: se ven y se ayudan a distancia.'],[3,'Magia cartográfica','Marcas objetivos con fuego feérico de forma gratuita.'],
      [5,'Precisión guiada','Una vez por turno sumas INT al daño contra objetivos marcados o con tus conjuros.'],[9,'Movimiento ingenioso','Teletransportas a aliados entre los mapas.'],[15,'Atlas superior','Tu atlas mejora: más aliados y efectos.']]}]}});

/* Lista de conjuros del artífice: añade la letra «a» a los conjuros del Manual que la tienen */
LISTAS.a='Artífice';
['Acid Splash','Dancing Lights','Fire Bolt','Guidance','Light','Mage Hand','Mending','Message','Poison Spray','Prestidigitation','Ray of Frost','Resistance','Shocking Grasp','Spare the Dying',
 'Alarm','Cure Wounds','Detect Magic','Disguise Self','Expeditious Retreat','Faerie Fire','False Life','Feather Fall','Grease','Identify','Jump','Longstrider','Purify Food and Drink','Sanctuary',
 'Aid','Alter Self','Arcane Lock','Blur','Continual Flame','Darkvision','Enhance Ability','Enlarge/Reduce','Heat Metal','Invisibility','Lesser Restoration','Levitate','Magic Mouth','Magic Weapon','Protection from Poison','Rope Trick','See Invisibility','Spider Climb','Web',
 'Blink','Create Food and Water','Dispel Magic','Fly','Glyph of Warding','Haste','Protection from Energy','Revivify','Water Breathing','Water Walk',
 "Arcane Eye","Fabricate","Freedom of Movement","Leomund's Secret Chest","Mordenkainen's Faithful Hound","Mordenkainen's Private Sanctum","Otiluke's Resilient Sphere",'Stone Shape','Stoneskin',
 'Animate Objects',"Bigby's Hand",'Creation','Greater Restoration','Wall of Stone']
 .forEach(en=>{const s=CONJUROS.find(x=>x.en.toLowerCase()===en.toLowerCase());if(s&&!s.listas.includes('a'))s.listas+='a';});

/* ——— Razas ——— */
raza('erlw',{id:'cambiante',n:'Cambiante',tam:'Mediano',vel:30,mej:{CAR:2},elegir:{n:1,val:1,excepto:['CAR']},idiomas:'Común y dos a elegir',habElegir:2,
  lore:'Gente de rostro mutable que puede adoptar el aspecto de cualquiera. Unos viajan sin hogar fijo; otros esconden su naturaleza entre la multitud.',
  rasgos:[['Cambiaformas','Acción: cambias tu aspecto y tu voz a voluntad (no el tamaño ni las ropas).'],['Instintos de cambiante','Competencia en dos entre Engaño, Perspicacia, Intimidación y Persuasión.']]});
raza('erlw',{id:'kalashtar',n:'Kalashtar',tam:'Mediano',vel:30,mej:{SAB:2,CAR:1},idiomas:'Común, quori y uno a elegir',
  lore:'Humanos unidos a espíritus quori renegados del plano de los sueños. Serenos y empáticos, son perseguidos por los Inspirados de Riedra.',
  rasgos:[['Mente dual','Ventaja en salvaciones de SAB.'],['Disciplina mental','Resistencia al daño psíquico.'],['Vínculo mental','Telepatía con criaturas cercanas que entiendan un idioma.'],['Separado de los sueños','No sueñas: la magia de sueños no te afecta y descansas sin dormir.']]});
raza('erlw',{id:'cambiaformas',n:'Cambiaformas (shifter)',tam:'Mediano',vel:30,mej:{},idiomas:'Común',
  lore:'Descendientes de licántropos que pueden despertar a la bestia interior durante un momento.',
  rasgos:[['Visión en la oscuridad','60 pies.'],['Cambio','Acción adicional: durante un minuto ganas PG temporales y un beneficio según tu linaje. Una vez por descanso corto.']],
  sub:[{id:'piel',n:'Piel de bestia',mej:{CON:2,FUE:1},hab:['Atletismo'],rasgos:[['Cambio','+1 a la CA mientras dura.']]},
       {id:'colmillo',n:'Colmillo largo',mej:{FUE:2,DES:1},hab:['Intimidación'],rasgos:[['Cambio','Mordisco como acción adicional (1d6).']]},
       {id:'zancada',n:'Zancada veloz',mej:{DES:2,CAR:1},hab:['Acrobacias'],rasgos:[['Cambio','+10 pies de velocidad y reacción para moverte.']]},
       {id:'rastro',n:'Rastreador salvaje',mej:{SAB:2,DES:1},hab:['Supervivencia'],rasgos:[['Cambio','Ventaja en pruebas de SAB.']]}]});
raza('erlw',{id:'forjado',n:'Forjado (warforged)',tam:'Mediano',vel:30,mej:{CON:2},elegir:{n:1,val:1,excepto:['CON']},idiomas:'Común y uno a elegir',habElegir:1,
  lore:'Soldados vivientes creados por la Casa Cannith para la Última Guerra. Libres tras el Tratado de Thronehold, buscan su lugar en la paz.',
  rasgos:[['Resiliencia forjada','Ventaja contra veneno, resistencia al veneno e inmunidad a enfermedades; no comes, bebes ni respiras.'],
    ['Descanso del centinela','Pasas 6 horas inactivo pero consciente en lugar de dormir.'],['Protección integrada','+1 a la CA; la armadura se integra en tu cuerpo.'],
    ['Diseño especializado','Una habilidad y una herramienta a elegir.']]});
raza('forge',{id:'khoravar',n:'Khoravar',tam:'Mediano o Pequeño',vel:30,mej:{},elegir:{n:3,val:1},idiomas:'Común y élfico',
  lore:'Descendientes de humanos y elfos con identidad propia, «hijos de Khorvaire». Muchos se ven como un puente entre culturas.',
  rasgos:[['Visión en la oscuridad','60 pies.'],['Ascendencia feérica','Ventaja contra quedar hechizado.'],
    ['Don feérico','Conoces el truco amistad; tras cada descanso largo puedes cambiarlo por otro de clérigo, druida o mago.'],
    ['Resistencia al letargo','Una vez cada 1d4 descansos largos, superas una salvación fallida contra quedar inconsciente.'],
    ['Versatilidad','Competencia en una habilidad o herramienta que puedes cambiar tras un descanso largo.']]});
raza('erlw',{id:'dragonmarcado',n:'Dragonmarcado',tam:'Según la raza base',vel:30,mej:{},idiomas:'Común y uno a elegir',
  lore:'Miembros de las casas dragonmarcadas, cuyos herederos nacen con una marca mágica en la piel que les da poderes ligados al oficio de su casa.',
  rasgos:[['Marca de dragón','Sustituye la subraza o los rasgos de tu raza base: ganas un bono a la tirada y conjuros de la marca que se añaden a tu lista.']],
  sub:[['Detección','Medani · semielfo',{SAB:2,INT:1},'Ves magia y venenos; dado de intuición en Investigación y Perspicacia.'],
       ['Hallazgo','Tharashk · semiorco o humano',{SAB:2,CON:1},'Cazador de pistas; dado de intuición en Percepción y Supervivencia; marca del cazador.'],
       ['Manejo','Vadalis · humano',{SAB:2,DES:1},'Amansador de bestias; trato con animales; conjuros de bestias.'],
       ['Sanación','Jorasco · mediano',{DES:2,SAB:1},'Toque sanador; dado de intuición en Medicina.'],
       ['Hospitalidad','Ghallanda · mediano',{DES:2,CAR:1},'Anfitrión perfecto; prestidigitación y conjuros de hogar.'],
       ['Fabricación','Cannith · humano',{INT:2,DES:1},'Artesano; truco de reparación; mejoras a armas y armaduras.'],
       ['Paso','Orien · humano',{DES:2,CON:1},'Viajes rápidos; paso brumoso y teletransportes cortos.'],
       ['Escritura','Sivis · gnomo',{INT:2,CAR:1},'Mensajes y lenguas; mensaje y comprensión idiomática.'],
       ['Centinela','Deneith · humano',{CON:2,SAB:1},'Guardaespaldas; escudo y reacciones de protección.'],
       ['Sombra','Phiarlan / Thuranni · elfo',{DES:2,CAR:1},'Espías y artistas; ilusión menor e invisibilidad.'],
       ['Tormenta','Lyrandar · semielfo',{CAR:2,DES:1},'Dominio del viento; ráfaga y control del clima.'],
       ['Guarda','Kundarak · enano',{CON:2,INT:1},'Cerraduras y custodias; alarma, cerradura arcana.']]
    .map(([m,casa,mej,t])=>({id:m.toLowerCase(),n:`Marca de ${m} (${casa})`,mej,rasgos:[['Marca de '+m,t]]}))});

/* ——— Objetos ——— */
[['Brazo de propulsión arcana','Objeto maravilloso','Muy raro','alguien sin mano o brazo','Prótesis que sirve de arma y se lanza y vuelve.'],
 ['Hoja de brazo','Arma (cuerpo a cuerpo a una mano)','Común','un forjado','Arma integrada en el brazo del forjado; no pueden desarmarte.'],
 ['Corona de contemplador de Belashyrra','Objeto maravilloso','Legendario',true,'Simbionte daelkyr: ojos que ven lo invisible y lanzan rayos.'],
 ['Piedra purificadora','Objeto maravilloso','Común',false,'Limpia a quien la toca de suciedad y mugre.'],
 ['Docente','Objeto maravilloso','Raro','un forjado','Una esfera con una inteligencia que aconseja y sabe idiomas.'],
 ['Látigo tentáculo de Dyrrn','Arma (látigo)','Muy raro',true,'Simbionte daelkyr con daño psíquico extra.'],
 ['Gusano del oído','Objeto maravilloso','Poco común',true,'Simbionte que te permite entender idiomas.'],
 ['Farol siempre brillante','Objeto maravilloso','Común',false,'Luz perpetua con un fragmento de piedra de dragón eberron.'],
 ['Gafas del hallazgo','Objeto maravilloso','Poco común','Marca del Hallazgo','Mejoran tu marca de Tharashk para rastrear.'],
 ['Tejido de glamour','Objeto maravilloso','Común o poco común',false,'Ropa con ilusiones animadas.'],
 ['Amuleto llave','Objeto maravilloso','Común','Marca de Guarda','Cierra y abre con magia.'],
 ['Limo de Kyrzin','Objeto maravilloso','Muy raro',true,'Simbionte que te vuelve amorfo y resistente al ácido.'],
 ['Armadura viviente','Armadura (cualquiera)','Muy raro',true,'Armadura simbionte que se cura y bebe vida.'],
 ['Guantes vivientes','Objeto maravilloso','Poco común',true,'Simbiontes que mejoran tus herramientas.'],
 ['Orbe de escudo','Objeto maravilloso','Común',true,'Foco planar que reduce un tipo de daño.'],
 ['Miembro protésico','Objeto maravilloso','Común','alguien sin un miembro','Sustituye un miembro perdido.'],
 ['Pluma del escriba','Objeto maravilloso','Común','Marca de Escritura','Escribe en cualquier superficie con tinta que solo ve quien eliges.'],
 ['Tejido cambiante','Objeto maravilloso','Común',false,'Ropa que cambia de diseño a voluntad.'],
 ['Piedra parlante','Objeto maravilloso','Muy raro',false,'Red de comunicación de la Casa Sivis a larga distancia.'],
 ['Fragmento de conjuro','Objeto maravilloso','Común',false,'Libro de cristal de dragón que guarda escritos o conjuros.'],
 ['Pulmones ventiladores','Objeto maravilloso','Raro',true,'Simbionte que te deja respirar en cualquier medio y soplar ráfagas.'],
 ['Funda de varita','Objeto maravilloso','Común','un forjado','Varita integrada en tu brazo.'],
 ['Rueda de viento y agua','Objeto maravilloso','Poco común',false,'Timón que da control de un barco o aeronave elemental a quien no tiene la marca.']
].forEach(o=>objeto('erlw',o));
/* Su ambientación está en libros/mundos/. */
