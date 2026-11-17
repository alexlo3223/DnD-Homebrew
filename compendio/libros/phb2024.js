/* Manual del Jugador 2024 (5.5e) — lo que añade respecto al de 2014. Resúmenes propios. */
libro('phb24','Manual del Jugador (2024)');

/* ——— Subclases nuevas (las demás de 2024 son versiones de las de 2014, Xanathar o Tasha) ——— */
subclase('barbaro','phb24',{n:'Senda del Árbol del Mundo',e:'Tu furia se nutre de la fuerza vital del árbol cósmico que une los planos.',r:[
  [3,'Vitalidad del árbol','Al entrar en furia ganas PG temporales y repartes más cada turno entre aliados cercanos.'],
  [6,'Ramas del árbol','Reacción: teletransportas a un enemigo cercano junto a ti y reduces su velocidad a 0.'],
  [10,'Raíces batientes','+10 pies de alcance con armas pesadas o versátiles; empujas o derribas al impactar.'],
  [14,'Viajar por el árbol','En furia te teletransportas 60 pies (o 150 con aliados) una vez por furia.']]});
subclase('bardo','phb24',{n:'Colegio de la Danza',e:'Las palabras de la creación no caben en una canción: se bailan.',r:[
  [3,'Juego de pies deslumbrante','Sin armadura ni escudo: CA 10 + DES + CAR, golpes sin armas con DES y el dado de Inspiración, y un ataque al gastar Inspiración.'],
  [6,'Juego de pies conjunto','Al tirar iniciativa gastas Inspiración: tú y tus aliados sumáis el dado.'],
  [6,'Movimiento inspirador','Reacción: tú y un aliado os movéis sin provocar ataques.'],
  [14,'Evasión dirigida','Evasión para ti y para aliados cercanos.']]});
subclase('druida','phb24',{n:'Círculo del Mar',nivel:3,e:'La furia de las mareas y las tormentas.',r:[
  [3,'Conjuros del círculo del mar','Rayo de escarcha, niebla, nube de cuchillas, rayo relámpago, controlar el agua…'],
  [3,'Ira de los mares','Gastas Forma salvaje: aura de espuma que daña con frío y empuja.'],
  [6,'Afinidad acuática','El aura crece; nadas y respiras bajo el agua.'],
  [10,'Nacido de la tempestad','Vuelas en el aura y resistes frío, rayo y trueno.'],
  [14,'Obsequio oceánico','Puedes poner el aura en un aliado o en ambos.']]});

/* ——— Especies nuevas (en 2024 las mejoras de característica vienen del trasfondo) ——— */
const P24={mej:{},elegir:{n:3,val:1},idiomas:'Común y dos a elegir (según trasfondo)'};
raza('phb24',{...P24,id:'aasimar',n:'Aasimar (2024)',tam:'Mediano o Pequeño',vel:30,
  lore:'Mortales con un alma tocada por los Planos Superiores, capaces de revelar su naturaleza celestial.',
  rasgos:[['Resistencia celestial','Resistencia a daño necrótico y radiante.'],['Visión en la oscuridad','60 pies.'],['Manos sanadoras','Acción: curas tantos d4 como tu competencia, una vez por descanso largo.'],
    ['Portador de la luz','Truco luz (CAR).'],['Revelación celestial','Desde nivel 3: alas celestiales, mortaja necrótica o resplandor interior durante un minuto; daño extra.']]});
raza('phb24',{...P24,id:'goliat',n:'Goliat (2024)',tam:'Mediano',vel:35,
  lore:'Descendientes lejanos de los gigantes, con un don de su linaje gigante.',
  rasgos:[['Forma grande','Desde nivel 5: creces a Grande durante 10 minutos, una vez por descanso largo.'],['Complexión poderosa','Ventaja para terminar un agarre y cuentas como un tamaño mayor.']],
  sub:[['Gigante de las nubes','Salto de las nubes: te teletransportas 30 pies.'],['Gigante de fuego','Quemadura de fuego: +1d10 de fuego al impactar.'],['Gigante de escarcha','Frío de la escarcha: +1d6 de frío y −10 de velocidad.'],
       ['Gigante de las colinas','Tumbo de las colinas: derribas al impactar.'],['Gigante de piedra','Resistencia de piedra: reacción para reducir el daño 1d12 + CON.'],['Gigante de las tormentas','Trueno de tormenta: reacción, 1d8 de trueno a quien te daña.']]
    .map(([n,t])=>({id:n.toLowerCase().replace(/\s+/g,''),n:'Ascendencia: '+n,rasgos:[[n,t+' Usos igual a tu competencia por descanso largo.']]}))});
raza('phb24',{...P24,id:'orco',n:'Orco (2024)',tam:'Mediano',vel:30,
  lore:'Pueblos de resistencia legendaria a los que su creador, Gruumsh, dio el don de seguir adelante.',
  rasgos:[['Descarga de adrenalina','Acción adicional: Correr y ganar PG temporales (competencia por descanso corto).'],['Visión en la oscuridad','120 pies.'],
    ['Aguante incansable','Al caer a 0 PG sin morir, quedas a 1 PG; una vez por descanso largo.']]});

/* ——— Cambios de cada clase en 2024 (se muestran en el compendio) ——— */
Object.entries({
  barbaro:'Maestría con armas (2). Furia que se mantiene con una acción adicional; Sentido salvaje y Conocimiento primario (nivel 3); Golpe brutal en lugar de Crítico brutal (nivel 9). Subclases: Berserker, Corazón Salvaje (antes Tótem), Árbol del Mundo y Fanático, todas al nivel 3.',
  bardo:'Inspiración bárdica desde el nivel 1 con dado que sube; Pericia más pronto; Palabras de creación a nivel 20. Subclases: Danza, Conocimiento, Glamour y Valor.',
  clerigo:'Orden divina a nivel 1 (protector o taumaturgo); Canalizar divinidad con Chispa divina y Expulsar no muertos; Golpes bendecidos. Subclases al nivel 3: Engaño, Guerra, Luz y Vida.',
  druida:'Orden primigenia a nivel 1 (mago o guardián); Forma salvaje más flexible y con PG temporales; Compañero salvaje. Subclases al nivel 3: Luna, Mar, Estrellas y Tierra.',
  guerrero:'Maestría con armas (3); Tomar aliento con más usos y movimiento táctico; Mente táctica. Subclases: Campeón, Maestro de batalla, Caballero arcano y Guerrero psiónico.',
  monje:'Dado de artes marciales desde d6; Puntos de concentración en lugar de ki; Golpes desviados y Ráfaga más potentes. Subclases: Mano abierta, Misericordia, Sombra y Elementos.',
  paladin:'Castigo divino como conjuro (una vez por turno gratis tras ciertos niveles); Maestría con armas; Corcel fiel. Subclases: Devoción, Gloria, Antiguos y Venganza.',
  explorador:'Marca del cazador como rasgo central con usos gratuitos; Maestría con armas; Explorador hábil. Subclases: Señor de las bestias, Viajero feérico, Acechador en la penumbra y Cazador.',
  picaro:'Golpe astuto: cambias dados de ataque furtivo por efectos; Maestría con armas. Subclases: Embaucador arcano, Asesino, Cuchillo del alma y Ladrón.',
  hechicero:'Hechicería innata (acción adicional para potenciar conjuros); más metamagia. Subclases: Aberrante, Mecánica, Dracónica y Magia salvaje, todas al nivel 3.',
  brujo:'Invocaciones desde nivel 1 (los pactos pasan a ser invocaciones); Astucia mágica. Subclases al nivel 3: Archihada, Celestial, Infernal y Primigenio.',
  mago:'Saber erudito y Memorizar conjuro; listas por escuela. Subclases al nivel 3: Abjurador, Adivino, Evocador e Ilusionista.'
}).forEach(([id,t])=>{const c=CLASES_OFICIALES.find(x=>x.id===id);if(c)c.v24=t;});
