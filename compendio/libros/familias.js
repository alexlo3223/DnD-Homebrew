/* Agrupa las razas de todos los libros por tipo (elfos con todas sus variantes, enanos…).
   Se carga después de los libros: cada raza recibe r.fam; las que no aparecen van a «Otros pueblos». */
const FAMILIAS_RAZA=[
  ['Humanos','Los pueblos más numerosos y variados, y quienes llevan en la piel una marca o un espíritu.',['humano','erlw-dragonmarcado','erlw-kalashtar']],
  ['Elfos','Todas las variantes élficas: de los bosques, de las estrellas o de los espíritus.',['elfo','oboT-elfo','sj-elfoastral']],
  ['Semielfos','Hijos de humanos y elfos, con o sin identidad propia.',['semielfo','scag-semielfovar','forge-khoravar']],
  ['Enanos','Pueblos de piedra y forja, de la superficie o de la Infraoscuridad.',['enano','scag-duergar']],
  ['Medianos','Gente pequeña, afortunada y valiente.',['mediano','scag-medianofantasmal']],
  ['Gnomos','Inventores curiosos, de las rocas, de las profundidades o de engranajes.',['gnomo','scag-svirfneblin','sj-autognomo']],
  ['Dracónidos','Descendientes de los dragones.',['draconido']],
  ['Orcos y semiorcos','Fuerza y aguante legendarios.',['semiorco','volo-orco','phb24-orco']],
  ['Tiflins','Herencia infernal en todas sus formas.',['tiflin','scag-tiflinvar']],
  ['Aasimar y caídos','Almas tocadas por los planos superiores, o despojadas de ellos.',['volo-aasimar','phb24-aasimar','grim-downcast']],
  ['Gigantes y sus parientes','Goliats, firbolgs y ogros con sangre de gigante.',['volo-goliat','phb24-goliat','volo-firbolg','grim-ogresh']],
  ['Goblinoides','Goblins, hobgoblins y osgos.',['volo-goblin','volo-hobgoblin','volo-osgo']],
  ['Pueblos bestiales','Gente con rasgos de animal: felinos, aves, simios, hipopótamos, ranas y licántropos.',['volo-tabaxi','volo-kenku','sj-hadozee','sj-giff','oboT-nakudama','erlw-cambiaformas']],
  ['Reptilianos','Escamas y sangre fría.',['volo-hombrelagarto','volo-kobold','volo-yuanti']],
  ['Pueblos del mar','Guardianes de las profundidades.',['volo-triton','grim-laneshi']],
  ['Constructos','Cuerpos fabricados con mente propia.',['erlw-forjado','grim-wechselkind']],
  ['Cambiantes y espíritus','Rostros mutables y seres a medio camino de otro plano.',['erlw-cambiante','grim-desencarnado','grim-sonador','oboT-dara']],
  ['Otros pueblos','Seres que no encajan en ningún grupo, y el linaje personalizado.',[]]
];
RAZAS.forEach(r=>{
  const f=FAMILIAS_RAZA.find(([,,ids])=>ids.includes(r.id));
  r.fam=f?f[0]:'Otros pueblos';
});
