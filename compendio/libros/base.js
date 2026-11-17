/* Contenido de los libros (suplementos y ambientaciones). Se carga después de oficial.js y antes de manual.js.
   Igual que oficial.js: solo mecánicas y resúmenes propios en español, sin reproducir texto de los libros.
   Cada libro va en su propio archivo de esta carpeta y usa estas funciones:
     libro(id, nombre, amb)            registra la fuente (amb = id de su ambientación o null)
     subclase(claseId, src, op)        añade una subclase {n, nivel?, e?, r:[[nv,'Rasgo','resumen']]}
     raza(src, r)                      añade una raza con el formato de RAZAS (más lore)
     objeto(src, [n, tipo, rareza, sintonía(bool|texto), resumen])
     ambientacion({id, n, src, lema, secciones:[[título, texto | [párrafos]]]}) */
const LIBROS={};
const OBJETOS=[];
const AMBIENTACIONES=[];
function libro(id,n,amb){LIBROS[id]={id,n,amb:amb||null};}
function subclase(claseId,src,op){
  const c=CLASES_OFICIALES.find(x=>x.id===claseId);
  if(!c)throw new Error('Clase desconocida: '+claseId);
  c.sub.op.push({...op,src});
}
function raza(src,r){RAZAS.push({...r,id:src+'-'+r.id,src});}
function objeto(src,[n,tipo,rar,sint,d]){OBJETOS.push({n,tipo,rar,sint,d,src});}
function ambientacion(a){AMBIENTACIONES.push(a);}
libro('phb14','Manual del Jugador (2014)');
