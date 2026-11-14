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

  /* Línea de progresión 1–20 a partir de la tabla de niveles */
  function progresion(cuerpo){
    const tabla=cuerpo.querySelector('table');
    if(!tabla)return;
    const filas=[...tabla.querySelectorAll('tr')];
    if(filas.length<6)return;
    const cab=[...filas[0].children].map(c=>textoDe(c).toLowerCase());
    const colNv=cab.findIndex(t=>/^nv|^nivel/.test(t));
    if(colNv<0)return;
    const colRas=cab.findIndex(t=>/caracter|rasgo|habilidad/.test(t));
    const colTxt=colRas>=0?colRas:cab.length-1;
    const niveles=[];
    filas.slice(1).forEach(tr=>{
      const celdas=[...tr.children];
      const nv=parseInt(textoDe(celdas[colNv]||{textContent:''}),10);
      if(!nv)return;
      const txt=textoDe(celdas[colTxt]||{textContent:''});
      niveles.push({nv,txt,hit:txt!==''&&txt!=='—'&&txt!=='-'});
    });
    if(niveles.length<5)return;
    const html=`<div class="prog-wrap" aria-label="Progresión por nivel">
      <ol class="prog">${niveles.map(x=>`<li class="${x.hit?'hit':''}" title="${esc(x.txt)}">${x.nv}</li>`).join('')}</ol>
      <ul class="prog-hitos">${niveles.filter(x=>x.hit).map(x=>`<li><b>Nv ${x.nv}</b> ${esc(x.txt)}</li>`).join('')}</ul>
    </div>`;
    tabla.closest('.tabla-wrap').insertAdjacentHTML('beforebegin',html);
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
    const ficha=fichaRapida(c);
    const barra=contenedor.querySelector('.herr');
    if(ficha&&barra)barra.insertAdjacentHTML('afterend',ficha);
    else if(ficha)contenedor.insertAdjacentHTML('afterbegin',ficha);
    contenedor.querySelectorAll('details.seccion').forEach(det=>{
      const cuerpo=det.querySelector('.cuerpo');
      const tipo=det.className.match(/sec-(\w+)/)[1];
      const res=det.querySelector('.resumen');
      if(res)res.textContent=resumenDe(cuerpo);
      if(tipo==='tabla')progresion(cuerpo);
      if(tipo==='rasgos'||tipo==='subclases')agruparRasgos(cuerpo);
    });
  }

  return {enriquecer,ROL_ICONO};
})();
