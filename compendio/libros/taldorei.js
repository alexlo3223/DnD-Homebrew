/* Tal'Dorei Campaign Setting Reborn (Critical Role / Darrington Press) — resúmenes propios */
libro('tdr',"Tal'Dorei Campaign Setting Reborn",'taldorei');

/* ——— Subclases ——— */
subclase('barbaro','tdr',{n:'Senda del Juggernaut',e:'Objeto inamovible y fuerza imparable a la vez.',r:[
  [3,'Golpes atronadores','En furia, tus golpes cuerpo a cuerpo empujan 5 pies (más con el nivel).'],
  [3,'Espíritu de la montaña','En furia no pueden derribarte ni moverte contra tu voluntad.'],
  [6,'Fuerza demoledora','+1d8 contra constructos y doble daño a objetos y estructuras.'],
  [6,'Postura resuelta','Al empezar el turno: ventaja en ataques contra ti a cambio de que los tuyos no tengan desventaja… o al revés, a tu elección.'],
  [10,'Golpe huracanado','Tus empujones lanzan al enemigo por el aire hacia los ataques de tus aliados.'],
  [14,'Imparable','En furia tu velocidad no se reduce y no puedes quedar asustado, paralizado ni aturdido.']]});
subclase('bardo','tdr',{n:'Colegio de la Tragedia',e:'Encuentras belleza en el fracaso y la ruina.',r:[
  [3,'Poesía en la miseria','Cuando alguien cercano saca un 1, recuperas Inspiración bárdica.'],
  [3,'Destino aciago','Al obligar a una salvación, gastas Inspiración para restar el dado y añadir daño psíquico.'],
  [6,'Relato de la soberbia','Reacción: cuando un enemigo saca un crítico, sus ataques contra él tienen penalización.'],
  [6,'Desgracia inminente','Te das +10 a una tirada, pero tu siguiente tirada sufre −10.'],
  [14,'Nimbo del pathos','Tocas a un aliado y lo llenas de poder trágico antes de caer.']]});
subclase('clerigo','tdr',{n:'Dominio de la Sangre',e:'Hemocracia divina: la sangre como fuente de poder.',r:[
  [1,'Competencias adicionales','Armas marciales.'],
  [1,'Foco de sangrado','Tus conjuros dañinos desangran: daño extra.'],
  [2,'Canalizar divinidad: Vínculo carmesí','Unes tu mente a una criatura y sabes dónde está; puedes ver a través de ella.'],
  [6,'Canalizar divinidad: Marioneta de sangre','Controlas brevemente las acciones de una criatura.'],
  [6,'Recuerdo sanguíneo','Sacrificas vitalidad para recuperar espacios de conjuro.'],
  [8,'Golpe divino','Daño necrótico extra con armas.'],
  [17,'Aura de corrupción vascular','Aura necrótica que daña y anula la curación.']]});
subclase('clerigo','tdr',{n:'Dominio de la Luna',e:'Sirves a Sehanine y a las dos lunas de Exandria.',r:[
  [1,'Claridad de Catha','Reacción: ventaja a un aliado en salvaciones contra efectos mentales.'],
  [2,'Canalizar divinidad: Bendición de la luna llena','Das a tus aliados sentidos y velocidad bestiales.'],
  [6,'Canalizar divinidad: Mente de dos lunas','Mantienes concentración en dos conjuros a la vez.'],
  [8,'Trucos potenciados','Sumas SAB al daño de tus trucos.'],
  [17,'Eclipse de mal agüero','Haces brillar Ruidus: penumbra que perjudica a los enemigos.']]});
subclase('druida','tdr',{n:'Círculo de los Marchitos',e:'Druidas que manejan la corrupción para purgar lo que no debe crecer.',r:[
  [2,'Profanar el suelo','Acción adicional: corrompes el terreno; los enemigos en él sufren daño necrótico.'],
  [2,'Forma marchita','Tu forma salvaje muestra la plaga: +2 a la CA y visión en la oscuridad.'],
  [6,'Llamada de las semillas sombrías','Invocas niños feroces del bosque desde tu energía vital.'],
  [10,'Conjuración inmunda','Tus criaturas invocadas explotan en toxinas al morir.'],
  [14,'Encarnación de la corrupción','Resistencias y efectos de la plaga a tu alrededor.']]});
subclase('monje','tdr',{n:'Camino del Alma de Cobalto',e:'Buscadores del saber de la Biblioteca del Alma de Cobalto.',r:[
  [3,'Extraer aspectos','Al golpear, descubres vulnerabilidades, resistencias e inmunidades del enemigo.'],
  [6,'Arrancar la verdad','Un golpe en los nervios obliga a decir la verdad.'],
  [6,'Erudición mística','Idiomas y competencias de saber; ventajas en pruebas de conocimiento.'],
  [11,'Mente de mercurio','Gastas ki para hacer una reacción extra por ronda.'],
  [17,'Andanada debilitante','Un golpe que causa vulnerabilidad a un tipo de daño.']]});
subclase('paladin','tdr',{n:'Juramento del Mar Abierto',e:'Libertad, aventura y el poder del océano.',r:[
  [3,'Conjuros de juramento','Niebla, respirar bajo el agua, controlar el agua, libertad de movimiento, libertad de los vientos…'],
  [3,'Canalizar divinidad','Capa marina (niebla a tu alrededor) y Furia de las mareas (empujones al impactar).'],
  [7,'Aura de liberación','Tú y tus aliados no podéis ser agarrados ni apresados; ignoráis el terreno difícil por agua.'],
  [15,'Aguas tormentosas','Reacción: cuando alguien entra o sale de tu alcance, lo golpeas con la fuerza de una ola.'],
  [20,'Espadachín mítico','Encarnas a los grandes capitanes: ataques extra, velocidad y ventajas.']]});
subclase('hechicero','tdr',{n:'Niño de las Runas',e:'Tu magia se expresa como runas brillantes en la piel.',r:[
  [1,'Runas de esencia','Al gastar puntos de hechicería cargas runas en tu piel (que brillan).'],
  [1,'Magia rúnica','Conjuros adicionales ligados a las runas.'],
  [1,'Glifo de égida','Gastas runas cargadas para absorber daño.'],
  [6,'Aumento sigílico','Gastas runas para mejorar una prueba de FUE, DES o CON.'],
  [6,'Manifestar inscripciones','Revelas glifos y encantamientos ocultos.'],
  [14,'Torrente rúnico','Tu conjuro ignora resistencias.'],
  [18,'Ejemplar arcano','Te conviertes en un ser de energía rúnica pura.']]});
subclase('mago','tdr',{n:'Magia de Sangre',e:'Hemocracia: tu propia vida alimenta tus conjuros.',r:[
  [2,'Canalización de sangre','Usas tus PG como componentes materiales y foco.'],
  [2,'Estallido sanguíneo','Gastas dados de golpe para potenciar un conjuro.'],
  [6,'Vínculo de sufrimiento mutuo','Reacción: quien te golpea sufre el mismo daño.'],
  [10,'Glifo de hemorragia','Maldices a quien dañas: sufre daño extra.'],
  [14,'Más espeso que el agua','Te curas más con la magia y, concentrado, resistes el daño físico no mágico.']]});

/* ——— Objetos ——— */
[['Botas de premura','Objeto maravilloso','Muy raro',true,'Al chocar los talones te lanzas acelerar como acción adicional.'],
 ['Botas del vigilante','Objeto maravilloso','Poco común',false,'Sientes el peligro: repites la iniciativa.'],
 ['Casaca del blasón','Objeto maravilloso','Raro',true,'Casaca noble del Concordato de Clovis con defensas mágicas.'],
 ['Daga de la negación','Arma (daga)','Raro',true,'Estilete que impide al herido recuperar PG o lanzar ciertos conjuros.'],
 ['Jubón de la muerte dramática','Objeto maravilloso','Común',false,'Al caer a 0 PG puedes soltar unas últimas palabras con estilo.'],
 ['Piedra eco','Objeto maravilloso','Poco común',false,'Guarda y reproduce sonidos.'],
 ["Graz'tchar, el Fin Decadente",'Arma (mandoble)','Legendario',true,'Espada plateada con rubíes de un demonio de la decadencia.'],
 ['Látigo ineludible','Arma (látigo)','Raro',true,'Atrapa y arrastra a los objetivos.'],
 ['Juez del mago','Arma (mandoble)','Raro',false,'Espada de verdugo de la Era del Arcanum, eficaz contra lanzadores.'],
 ['Espejo de transpondencia infinita','Objeto maravilloso','Muy raro',false,'Par de espejos que conectan imagen y sonido a cualquier distancia.'],
 ['Sueño del cuervo','Objeto maravilloso','Muy raro',false,'Colgante que atrapa a una criatura dentro de su cristal.'],
 ['Vara de forma mercurial','Objeto maravilloso','Poco común',false,'Se transforma en cualquier arma sencilla o marcial que nombres.'],
 ['Botas del jinete de tormentas','Objeto maravilloso','Raro',false,'Botas con poderes de rayo y viento.'],
 ['Danza del verano','Arma (cimitarra)','Raro',true,'+1; se dobla como un junco y añade movilidad.'],
 ['Tinkertop Boltblaster 1000','Arma (ballesta de mano)','Muy raro',true,'Artilugio gnomo con varios modos de disparo.'],
 ['Tabla de tierra','Objeto maravilloso','Raro',true,'Herramienta ashari: una losa que surca la tierra.'],
 ['Farol del amigo de las llamas','Objeto maravilloso','Raro',true,'Herramienta ashari con un pequeño espíritu de fuego.'],
 ['Arma oceánica','Arma (a distancia o arrojadiza)','Raro',true,'Herramienta ashari: funciona bajo el agua y vuelve a ti.'],
 ['Velaceleste','Objeto maravilloso','Raro',true,'Alas de murciélago de los ashari del aire para planear.'],
 ['Agonía','Arma (mangual)','Legendario (vestigio)','no bueno','Vestigio de la Divergencia: cadenas de tortura que crecen en poder.'],
 ['Armadura del alma valiente','Armadura (escamas)','Legendario (vestigio)',true,'Vestigio de jade y escamas de dragón negro.'],
 ['Ruina de la Cábala','Objeto maravilloso','Legendario (vestigio)',true,'Capa que absorbe y devuelve la magia.'],
 ['Diadema de visión espinosa','Objeto maravilloso','Legendario (vestigio)','no bueno','Diadema de ónix que da visión y dolor.'],
 ['Condenadora','Arma (ballesta)','Legendario (vestigio)',true,'Ballesta de la asesina Todora.'],
 ['Guarda del caminante de la muerte','Armadura (cuero tachonado)','Legendario (vestigio)',true,'Armadura negra con plumas que te mueve entre sombras.'],
 ['Fenthras','Arma (arco largo)','Legendario (vestigio)',true,'Arco vivo de madera feérica.'],
 ['Última defensa del honor','Armadura (escudo)','Legendario (vestigio)','no malvado','Escudo con el blasón del Dragón de Platino.'],
 ['Beso del Portador del Cambio','Objeto maravilloso','Legendario (vestigio)',true,'Esmeralda que vibra de posibilidad.'],
 ['Tallamitos','Arma (espada larga)','Legendario (vestigio)','un bardo','Espada del Duque Blanco de la Sonrisa Dorada.'],
 ['Placas del mártir del alba','Armadura (placas)','Legendario (vestigio)',true,'Armadura de latón y oro con rubíes.'],
 ['Pirómaza','Arma (maza a dos manos)','Legendario (vestigio)',true,'Martillo de hierro rojo con un ópalo de fuego.'],
 ['Aguja de la confluencia','Bastón','Legendario (vestigio)','un lanzador','Reliquia de los líderes ashari, poder de los elementos.'],
 ['Navaja estelar','Arma (espada larga)','Legendario (vestigio)',true,'Runas azules y poder del cielo.'],
 ['Nudilleras de piedra titán','Objeto maravilloso','Legendario (vestigio)',true,'Fuerza inmensa del corazón de un primordial de tierra.'],
 ['Susurro','Arma (daga)','Legendario (vestigio)',true,'Daga de metal de los Reinos Exteriores que teletransporta.'],
 ['Vendas de Dyamak','Objeto maravilloso','Legendario (vestigio)','un monje','Vendas manchadas de sangre: mejoran los golpes sin armas.']
].forEach(o=>objeto('tdr',o));
/* Su ambientación está en libros/mundos/. */
