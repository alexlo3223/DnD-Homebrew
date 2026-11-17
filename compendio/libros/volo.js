/* Volo's Guide to Monsters — razas jugables (resúmenes propios) */
libro('volo','Guía de Volo de los Monstruos');

const DV=['Visión en la oscuridad','60 pies.'];
raza('volo',{id:'aasimar',n:'Aasimar',tam:'Mediano',vel:30,mej:{CAR:2},idiomas:'Común y celestial',
  lore:'Mortales con una chispa celestial y un guía angélico que les habla en sueños.',
  rasgos:[DV,['Resistencia celestial','Resistencia a daño necrótico y radiante.'],['Manos sanadoras','Acción: curas tantos PG como tu nivel, una vez por descanso largo.'],['Portador de la luz','Truco luz (CAR).']],
  sub:[{id:'protector',n:'Aasimar protector',mej:{SAB:1},rasgos:[['Alma radiante','Desde nivel 3: alas de luz, vuelo y daño radiante extra durante un minuto.']]},
       {id:'azote',n:'Aasimar azote',mej:{CON:1},rasgos:[['Consumo radiante','Desde nivel 3: irradias luz que daña a todos a tu alrededor (y a ti).']]},
       {id:'caido',n:'Aasimar caído',mej:{FUE:1},rasgos:[['Mortaja necrótica','Desde nivel 3: alas espectrales que asustan y daño necrótico extra.']]}]});
raza('volo',{id:'firbolg',n:'Firbolg',tam:'Mediano',vel:30,mej:{SAB:2,FUE:1},idiomas:'Común, élfico y gigante',
  lore:'Gigantes amables de los bosques que protegen la naturaleza en silencio.',
  rasgos:[['Magia firbolg','Detectar magia y disfrazarse una vez por descanso corto.'],['Paso oculto','Acción adicional: te vuelves invisible hasta tu siguiente turno.'],
    ['Complexión poderosa','Cuentas como un tamaño mayor para cargar.'],['Habla de bestias y hojas','Te comunicas con bestias y plantas de forma sencilla.']]});
raza('volo',{id:'goliat',n:'Goliat',tam:'Mediano',vel:30,mej:{FUE:2,CON:1},idiomas:'Común y gigante',hab:['Atletismo'],
  lore:'Montañeses competitivos que miden su valía con hazañas.',
  rasgos:[['Atleta natural','Competencia en Atletismo.'],['Resistencia de piedra','Reacción: reduces el daño 1d12 + CON, una vez por descanso corto.'],
    ['Complexión poderosa','Cuentas como un tamaño mayor para cargar.'],['Nacido en la montaña','Aclimatado al frío y a la altitud.']]});
raza('volo',{id:'kenku',n:'Kenku',tam:'Mediano',vel:30,mej:{DES:2,SAB:1},idiomas:'Común y aurano (solo con mímica)',habElegir:2,
  lore:'Pájaros sin alas malditos a no poder crear: solo imitan lo que oyen.',
  rasgos:[['Falsificación experta','Ventaja para copiar escritos y objetos.'],['Entrenamiento kenku','Dos habilidades entre Acrobacias, Engaño, Sigilo y Juego de manos.'],['Mímica','Imitas cualquier sonido o voz que hayas oído.']]});
raza('volo',{id:'hombrelagarto',n:'Hombre lagarto',tam:'Mediano',vel:30,mej:{CON:2,SAB:1},idiomas:'Común y dracónico',habElegir:2,
  lore:'Reptiles pragmáticos de los pantanos con una mente fría y extraña.',
  rasgos:[['Mordisco','Arma natural 1d6.'],['Artesano astuto','Fabricas armas y escudos con restos de bestias.'],['Aguantar la respiración','15 minutos.'],
    ['Armadura natural','Sin armadura, CA 13 + DES.'],['Mandíbulas hambrientas','Acción adicional: mordisco que te da PG temporales, una vez por descanso corto.'],['Saber del cazador','Dos habilidades de naturaleza y supervivencia.']]});
raza('volo',{id:'tabaxi',n:'Tabaxi',tam:'Mediano',vel:30,mej:{DES:2,CAR:1},idiomas:'Común y uno a elegir',hab:['Percepción','Sigilo'],
  lore:'Felinos curiosos que recorren el mundo buscando historias y objetos.',
  rasgos:[DV,['Agilidad felina','Duplicas tu velocidad un turno; se recupera si no te mueves un turno.'],['Garras de gato','Trepas a 20 pies; garras 1d4.'],['Talento felino','Competencia en Percepción y Sigilo.']]});
raza('volo',{id:'triton',n:'Tritón',tam:'Mediano',vel:30,mej:{FUE:1,CON:1,CAR:1},idiomas:'Común y primordial',
  lore:'Guardianes de las profundidades que suben a la superficie a vigilar amenazas.',
  rasgos:[['Anfibio','Respiras aire y agua; nadas a 30 pies.'],['Control del aire y del agua','Nube de niebla; ráfaga de viento a nivel 3; muro de agua a nivel 5.'],
    ['Emisario del mar','Te comunicas con bestias acuáticas.'],['Guardianes de las profundidades','Resistencia al frío.']]});
raza('volo',{id:'osgo',n:'Osgo',tam:'Mediano',vel:30,mej:{FUE:2,DES:1},idiomas:'Común y goblin',hab:['Sigilo'],
  lore:'Goblinoides grandes y peludos, sigilosos a pesar de su tamaño.',
  rasgos:[DV,['Extremidades largas','Alcance +5 pies en tu turno.'],['Complexión poderosa','Cuentas como un tamaño mayor.'],['Sigiloso','Competencia en Sigilo.'],['Ataque sorpresa','+2d6 contra quien esté sorprendido en el primer turno.']]});
raza('volo',{id:'goblin',n:'Goblin',tam:'Pequeño',vel:30,mej:{DES:2,CON:1},idiomas:'Común y goblin',
  lore:'Pequeños, rápidos y pícaros; sobreviven a base de astucia.',
  rasgos:[DV,['Furia de los pequeños','Daño extra igual a tu nivel contra criaturas más grandes, una vez por descanso corto.'],['Huida ágil','Destrabarte o Esconderte como acción adicional.']]});
raza('volo',{id:'hobgoblin',n:'Hobgoblin',tam:'Mediano',vel:30,mej:{CON:2,INT:1},idiomas:'Común y goblin',comp:'Armadura ligera y dos armas marciales.',
  lore:'Goblinoides disciplinados que viven por el honor militar.',
  rasgos:[DV,['Entrenamiento marcial','Armadura ligera y dos armas marciales.'],['Salvar las apariencias','Tras fallar, sumas hasta +5 según los aliados que te ven, una vez por descanso corto.']]});
raza('volo',{id:'kobold',n:'Kobold',tam:'Pequeño',vel:30,mej:{DES:2,FUE:-2},idiomas:'Común y dracónico',
  lore:'Pequeños reptiles devotos de los dragones, ingeniosos con las trampas.',
  rasgos:[DV,['Agacharse y suplicar','Acción: aliados con ventaja contra los enemigos cercanos.'],['Tácticas de manada','Ventaja si un aliado está junto al objetivo.'],['Sensibilidad a la luz solar','Desventaja bajo el sol.']]});
raza('volo',{id:'orco',n:'Orco',tam:'Mediano',vel:30,mej:{FUE:2,CON:1,INT:-2},idiomas:'Común y orco',habElegir:2,
  lore:'Guerreros feroces devotos de Gruumsh, fuertes y resistentes.',
  rasgos:[DV,['Agresivo','Acción adicional: te mueves hacia un enemigo.'],['Saber primario','Dos habilidades de exploración o intimidación.'],['Complexión poderosa','Cuentas como un tamaño mayor.']]});
raza('volo',{id:'yuanti',n:'Yuan-ti de sangre pura',tam:'Mediano',vel:30,mej:{CAR:2,INT:1},idiomas:'Común, abisal y dracónico',
  lore:'Los yuan-ti más parecidos a los humanos, espías de un imperio serpentino.',
  rasgos:[DV,['Magia innata','Rociada venenosa, amistad con animales (serpientes) a voluntad y sugestión a nivel 3.'],['Resistencia mágica','Ventaja en salvaciones contra conjuros.'],['Inmunidad al veneno','Inmune al veneno y a quedar envenenado.']]});
