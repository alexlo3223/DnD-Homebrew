/* Lector: convierte el texto de cada clase en una lectura por partes.
   Trabaja sobre el HTML ya extraído (datos.js). Si una heurística no reconoce
   un patrón, la sección se queda tal cual. */
window.Lector=(function(){
  const ROL_ICONO={Marcial:'⚔️',Lanzador:'✨',Semilanzador:'🔮',Invocador:'👁️',Astucia:'🎲',Apoyo:'🤝'};
  const TIPOS=[
    [/\bSin acción\b/i,'Sin acción','○'],
    [/\bAcción adicional\b/i,'Acción adicional','➕'],
    [/\bReacción\b/i,'Reacción','↩️'],
    [/\bAcción\b/i,'Acción','⚡'],
    [/\bPasiva\b/i,'Pasiva','◎']
  ];
  const ETIQUETAS=/^(Salvaciones|Armas|Armaduras|Herramientas|Habilidades|Competencias)\s*:?\s*(.+)$/i;

  const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const decodificar=s=>{const t=document.createElement('textarea');t.innerHTML=s;return t.value;};
  const textoDe=el=>el.textContent.replace(/\s+/g,' ').trim();
  const esH=n=>!!n&&/^H[34]$/.test(n.tagName);

  /* Ficha rápida: líneas "Salvaciones …", "Armas …" de cualquier sección, más el recurso propio */
  function fichaRapida(c){
    const campos=[];
    const vistos=new Set();
    c.secciones.forEach(s=>{
      const tmp=document.createElement('div');
      tmp.innerHTML=s.html.replace(/<br\s*\/?>/gi,'\n').replace(/<\/(p|div|li|tr)>/gi,'\n');
      tmp.textContent.split('\n').map(l=>l.replace(/\s+/g,' ').trim()).filter(Boolean).forEach(l=>{
        const m=l.match(ETIQUETAS);
        if(!m)return;
        const clave=m[1][0].toUpperCase()+m[1].slice(1).toLowerCase();
        const valor=m[2].trim();
        if(vistos.has(clave)||valor.length>160)return;
        vistos.add(clave);
        campos.push([clave,valor]);
      });
    });
    if(c.rec)campos.push(['Recurso',decodificar(c.rec)]);
    if(!campos.length)return '';
    return `<section class="ficha-rapida" aria-label="Ficha rápida">
      <p class="fr-titulo">Ficha rápida</p>
      <dl>${campos.map(([k,v])=>`<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>
    </section>`;
  }

  /* Rasgos como tarjetas desplegables, con nivel y tipo de acción */
  function crearRasgo(titulo,nivel){
    let tipo=null;
    let t=titulo;
    for(const [re,nombre,icono] of TIPOS){
      if(re.test(t)){tipo={nombre,icono};t=t.replace(re,'').replace(/\s+$/,'');break;}
    }
    const det=document.createElement('details');
    det.className='rasgo';
    det.open=true;
    det.innerHTML=`<summary>
        ${nivel?`<span class="rasgo-nv">Nv ${nivel}</span>`:''}
        <span class="rasgo-tit">${esc(t)}</span>
        ${tipo?`<span class="rasgo-tipo">${tipo.icono} ${esc(tipo.nombre)}</span>`:''}
      </summary><div class="rasgo-cuerpo"></div>`;
    return det;
  }

  function agruparRasgos(cuerpo){
    const nodos=[...cuerpo.children];
    if(!nodos.some(esH))return;
    const intro=[];
    const grupos=[];
    let grupo=null;
    nodos.forEach((n,i)=>{
      if(esH(n)){
        if(grupo&&grupo.pendiente){grupo.items.push(n);grupo.pendiente=false;}
        else{grupo={items:[n],pendiente:false};grupos.push(grupo);}
        return;
      }
      if(n.classList.contains('bloque')&&esH(nodos[i+1])){
        grupo={items:[n],pendiente:true};grupos.push(grupo);return;
      }
      if(grupo)grupo.items.push(n);else intro.push(n);
    });
    cuerpo.innerHTML='';
    intro.forEach(n=>cuerpo.appendChild(n));
    grupos.forEach(g=>{
      const h=g.items.find(esH);
      if(!h)return;
      const bloques=g.items.filter(n=>n.classList.contains('bloque'));
      let nivel=null;
      for(const b of bloques){
        const m=b.textContent.match(/(?:Nivel|nv)\s*(\d{1,2})/i);
        if(m){nivel=m[1];break;}
      }
      const det=crearRasgo(textoDe(h),nivel);
      const dentro=det.querySelector('.rasgo-cuerpo');
      g.items.forEach(n=>{
        if(n===h)return;
        if(nivel&&bloques.includes(n)&&/(?:Nivel|nv)\s*\d/i.test(n.textContent))return;
        dentro.appendChild(n);
      });
      cuerpo.appendChild(det);
    });
  }

  /* Datos de clase sueltos en bloques ("Dado de golpe", "d8", "Salvaciones", …) → lista rótulo/valor */
  const ROTULO=/^(Dado de golpe|Puntos de golpe(?: (?:a |al |por )?nivel(?: 1| superior| adicional)?)?|PG(?: (?:a |al |por )?nivel(?: 1| superior)?)?|CA|VEL|ATQ|Nº|Caract(?:erística|\.)\s+(?:principal|clave)|Característica de conjuración|Conjuración|Aptitud(?: de lanzamiento| primaria)?|Habilidad(?:es)? primarias?|Stat principal|(?:Tiradas de )?(?:salvación|sal\.)|Salvaciones|Armaduras?|Armas|Herramientas|Habilidades(?: \([^)]*\))?|Competencias(?: clave)?|Subclase|Arquetipo|Recurso|Rol en grupo|Tipo|Equipo inicial|Nivel \d+)(?=\s|:|$)\s*:?\s*/i;
  const esBloque=n=>n.classList.contains('bloque');
  const esRotulo=t=>t.length<40&&t.replace(ROTULO,'')==='';
  /* Un bloque con rótulo y valor juntos: "<b>Rótulo:</b> valor", "Rótulo <b>valor</b>" o "Rótulo valor" */
  function parDe(b){
    const t=textoDe(b);
    if(t.length>200)return null;
    const neg=b.querySelector('b,strong');
    if(neg){
      const n=textoDe(neg);
      if(t.startsWith(n)&&n.length<40&&t.length>n.length)return [n.replace(/:$/,''),t.slice(n.length).trim()];
      if(t.endsWith(n)&&t.length>n.length)return [t.slice(0,-n.length).trim().replace(/:$/,''),n];
    }
    const m=t.match(ROTULO);
    if(m&&t.length>m[0].length)return [m[0].trim().replace(/:$/,''),t.slice(m[0].length)];
    return null;
  }
  const lista=pares=>`<dl class="ficha-datos">${pares.map(([k,v])=>`<div><dt>${esc(k)}</dt><dd>${esc(v.replace(/^[—:–-]\s*/,''))}</dd></div>`).join('')}</dl>`;
  function sustituir(nodos,html){nodos[0].insertAdjacentHTML('beforebegin',html);nodos.forEach(n=>n.remove());}
  function convertirTanda(run){
    /* 1. Tramos de 3+ bloques "rótulo valor"; lo que no encaja (p. ej. el nombre de un shikigami) los separa */
    let hecho=false,tramo=[];
    const cerrar=()=>{if(tramo.length>=3){sustituir(tramo.map(x=>x.b),lista(tramo.map(x=>x.par)));hecho=true;}tramo=[];};
    run.forEach(b=>{const par=parDe(b);if(par)tramo.push({b,par});else cerrar();});
    cerrar();
    if(hecho)return;
    /* 2. Rótulo y valor en bloques alternos, desde el primer rótulo */
    const s=run.findIndex(b=>esRotulo(textoDe(b)));
    if(s>=0){
      const pares=[];let k=s;
      for(;k+1<run.length&&esRotulo(textoDe(run[k]));k+=2)pares.push([textoDe(run[k]),textoDe(run[k+1])]);
      if(pares.length>=2){sustituir(run.slice(s,k),lista(pares));return;}
    }
    /* 3. "Nombre — descripción" → lista */
    if(run.length>=3&&run.every(b=>/^[^—.]{2,40} — /.test(textoDe(b))))
      sustituir(run,`<ul>${run.map(b=>{const t=textoDe(b),k=t.indexOf(' — ');return `<li><strong>${esc(t.slice(0,k))}</strong> — ${esc(t.slice(k+3))}</li>`;}).join('')}</ul>`);
    /* 4. Objetos de equipo inicial, uno por bloque → lista */
    else if(equipo&&run.length>=2)
      sustituir(run,`<ul>${run.map(b=>`<li>${(b.firstElementChild||b).innerHTML}</li>`).join('')}</ul>`);
  }
  let equipo=false;
  function fichaDatos(cuerpo){
    equipo=!!cuerpo.closest('.sec-equipo');
    const hijos=[...cuerpo.children];
    for(let i=0;i<hijos.length;){
      if(!esBloque(hijos[i])){i++;continue;}
      let j=i;while(j<hijos.length&&esBloque(hijos[j]))j++;
      convertirTanda(hijos.slice(i,j));
      i=j;
    }
    /* Bloques sueltos que hacen de título: "Nivel 3 — Rito de Expulsión", o un nombre corto seguido de su descripción */
    [...cuerpo.children].filter(esBloque).forEach(b=>{
      const t=textoDe(b),sig=b.nextElementSibling;
      if(/^Nivel \d+\s*[—–-]\s*\S/.test(t))b.outerHTML=`<h4>${esc(t)}</h4>`;
      else if(t.length<45&&!/[.:]$/.test(t)&&sig&&esBloque(sig)&&textoDe(sig).length>100){
        b.outerHTML=`<h3>${esc(t)}</h3>`;
        sig.outerHTML=`<p>${esc(textoDe(sig))}</p>`;
      }
    });
  }

  /* Frase de resumen para la cabecera plegable */
  function resumenDe(cuerpo){
    const p=[...cuerpo.querySelectorAll('p')].map(textoDe).find(t=>t.length>30);
    if(!p)return '';
    const f=p.match(/^.{20,170}?[.!?](?=\s|$)/);
    return f?f[0]:p.slice(0,150)+'…';
  }

  /* Aplica todo a la vista ya renderizada de una clase */
  function enriquecer(c,contenedor){
    contenedor.querySelectorAll('details.seccion').forEach(det=>{
      const cuerpo=det.querySelector('.cuerpo');
      const tipo=det.className.match(/sec-(\w+)/)[1];
      const res=det.querySelector('.resumen');
      if(res)res.textContent=resumenDe(cuerpo);
      fichaDatos(cuerpo);
      if(tipo==='rasgos'||tipo==='subclases')agruparRasgos(cuerpo);
    });
    /* Si la clase ya trae su ficha (dado de golpe, salvaciones…), no se repite: solo se le añade el recurso */
    const propia=[...contenedor.querySelectorAll('.ficha-datos')].find(dl=>/dado de golpe/i.test(dl.textContent));
    if(propia){
      if(c.rec&&![...propia.querySelectorAll('dt')].some(dt=>/^recurso/i.test(dt.textContent)))propia.insertAdjacentHTML('beforeend',`<div><dt>Recurso</dt><dd>${esc(decodificar(c.rec))}</dd></div>`);
      return;
    }
    const ficha=fichaRapida(c);
    const barra=contenedor.querySelector('.herr');
    if(ficha&&barra)barra.insertAdjacentHTML('afterend',ficha);
    else if(ficha)contenedor.insertAdjacentHTML('afterbegin',ficha);
  }

  return {enriquecer,ROL_ICONO};
})();
