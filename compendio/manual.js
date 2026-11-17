/* Añade al compendio las clases y las razas del Manual del Jugador (datos de oficial.js).
   Se convierten al mismo formato que las clases homebrew (datos.js) y se muestran en sus propios grupos. */
(function(){
  const escH=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const primera=s=>((String(s).match(/^.+?[.!?](?=\s|$)/)||[String(s)])[0]).trim();
  const p=t=>`<p>${escH(t)}</p>`;
  const fuente=id=>(LIBROS[id||'phb14']||{n:id}).n;
  const NOMBRE={FUE:'Fuerza',DES:'Destreza',CON:'Constitución',INT:'Inteligencia',SAB:'Sabiduría',CAR:'Carisma'};
  const ROL={barbaro:'Marcial',bardo:'Apoyo',clerigo:'Lanzador',druida:'Lanzador',guerrero:'Marcial',monje:'Marcial',
    paladin:'Semilanzador',explorador:'Semilanzador',picaro:'Astucia',hechicero:'Lanzador',brujo:'Lanzador',mago:'Lanzador',artifice:'Semilanzador'};
  /* 0 sin magia · 2 semilanzador · 3 lanzador (igual que datos.js) */
  const MAGIA={barbaro:0,bardo:3,clerigo:3,druida:3,guerrero:0,monje:0,paladin:2,explorador:2,picaro:0,hechicero:3,brujo:3,mago:3,artifice:2};

  /* Progresión: extras de la clase y, si lanza conjuros, trucos, conocidos y espacios por nivel */
  function progresion(c){
    const cols=[],filas=[];
    const ex=Object.entries(c.extras||{});
    ex.forEach(([k])=>cols.push(k));
    const m=c.magia;
    if(m){cols.push('Trucos');if(m.conocidos)cols.push('Conocidos');cols.push('Espacios');}
    if(!cols.length)return '';
    for(let nv=1;nv<=20;nv++){
      const celdas=ex.map(([,v])=>{const x=v[nv-1];return x===undefined||x===0||x==='0'?'—':x;});
      if(m){
        celdas.push(m.trucos[nv-1]||'—');
        if(m.conocidos)celdas.push(m.conocidos[nv-1]);
        let esp;
        if(m.tipo==='pacto'){const n=nv>=17?4:nv>=11?3:nv>=2?2:1,niv=Math.min(5,Math.ceil(nv/2));esp=`${n} × nivel ${niv}`;}
        else{
          const k=m.tipo==='completo'?nv:m.tipo==='medio'?(nv<2?0:Math.ceil(nv/2)):m.tipo==='artifice'?Math.ceil(nv/2):(nv<3?0:Math.ceil(nv/3));
          esp=k?ESPACIOS_COMPLETO[k-1].join(' · '):'—';
        }
        celdas.push(esp);
      }
      filas.push(`<tr><td>${nv}</td>${celdas.map(x=>`<td>${escH(x)}</td>`).join('')}</tr>`);
    }
    return `<table><thead><tr><th>Nivel</th>${cols.map(x=>`<th>${escH(x)}</th>`).join('')}</tr></thead><tbody>${filas.join('')}</tbody></table>`;
  }

  function claseEntrada(c){
    const sub=c.sub;
    const hab=c.hab?`Habilidades: elige ${c.hab.n}${c.hab.de==='todas'?' de cualquiera':' entre estas: '+c.hab.de.join(', ')}.`:'';
    const comp=[`Dado de golpe: ${c.d}.`,`Salvaciones: ${c.sal.map(k=>NOMBRE[k]).join(' y ')}.`,`Armaduras: ${c.arm}.`,`Armas: ${c.armas}.`,c.herr&&c.herr!=='—'?`Herramientas: ${c.herr}.`:'',hab].filter(Boolean);
    const secciones=[
      {t:'Trasfondo y funcionamiento',tipo:'texto',html:p(c.lore)+p(c.como)},
      {t:'Competencias',tipo:'texto',html:comp.map(l=>{const k=l.indexOf(':');return `<p><strong>${escH(l.slice(0,k))}:</strong>${escH(l.slice(k+1))}</p>`;}).join('')},
      {t:'Progresión',tipo:'tabla',html:progresion(c)},
      {t:'Rasgos de clase',tipo:'rasgos',html:c.rasgos.map(([nv,n,t])=>`<h3>${escH(n)}</h3><div class="bloque"><div>Nivel ${nv}</div></div>${p(t)}`).join('')},
      {t:sub.titulo,tipo:'subclases',html:sub.op.map(o=>`<h3>${escH(o.n)}</h3><p><em>Desde el nivel ${o.nivel||sub.nivel} · ${escH(fuente(o.src))}</em></p>`+(o.e?p(o.e):'')
        +o.r.map(([nv,nm,t])=>t?`<p><strong>Nivel ${nv} · ${escH(nm)}:</strong> ${escH(t)}</p>`:`<p>Nivel ${nv}: ${escH(nm)}</p>`).join('')).join('')},
      ...(c.v24?[{t:'Cambios en el Manual 2024',tipo:'texto',html:p(c.v24)}]:[])
    ].filter(s=>s.html);
    return {f:'o:'+c.id,n:c.n,e:primera(c.lore),r:ROL[c.id],d:c.d,m:MAGIA[c.id]||0,v:'manual',oficial:true,
      g:primera(c.como),rec:null,secciones};
  }

  function razaEntrada(r){
    const mej=Object.entries(r.mej||{}).map(([k,v])=>`${v>0?'+':''}${v} ${NOMBRE[k]}`);
    const info=[`Tamaño ${r.tam}.`,`Velocidad ${r.vel} pies.`,`Idiomas: ${r.idiomas}.`,mej.length?`Mejoras de característica: ${mej.join(', ')}.`:'',
      r.elegir?`Además, elige ${r.elegir.n} característica(s) para +${r.elegir.val}.`:'',r.comp?`Competencias: ${r.comp}`:'',r.hab?`Habilidad: ${r.hab.join(', ')}.`:''].filter(Boolean);
    const secciones=[
      {t:'Trasfondo',tipo:'texto',html:p(r.lore)},
      {t:'Mejoras y datos',tipo:'texto',html:info.map(p).join('')},
      {t:'Rasgos de raza',tipo:'rasgos',html:r.rasgos.map(([n,t])=>`<h3>${escH(n)}</h3><div class="bloque"><div>Raza</div></div>${p(t)}`).join('')},
      ...(r.sub&&r.sub.length?[{t:'Subrazas',tipo:'subclases',html:r.sub.map(s=>`<h3>${escH(s.n)}</h3>`+(s.mej&&Object.keys(s.mej).length?`<p><em>Mejoras: ${escH(Object.entries(s.mej).map(([k,v])=>'+'+v+' '+NOMBRE[k]).join(', '))}</em></p>`:'')+(s.rasgos||[]).map(([n,t])=>`<p><strong>${escH(n)}:</strong> ${escH(t)}</p>`).join('')).join('')}]:[])
    ];
    const src=r.src||'phb14';
    return {f:'r:'+r.id,n:r.n,e:`Tamaño ${r.tam} · velocidad ${r.vel} pies`,r:'Raza',d:r.tam,m:0,v:'fam-'+FAMILIAS_RAZA.findIndex(x=>x[0]===r.fam),raza:true,tam:r.tam,
      meta:`${fuente(src)} · tamaño ${r.tam}`,
      g:primera(r.lore),rec:null,secciones};
  }

  /* Objetos: una entrada por libro con su tabla */
  function objetosEntrada(src){
    const os=OBJETOS.filter(o=>o.src===src);
    const sint=s=>s===true?'Sí':s?'Sí ('+s+')':'No';
    const tabla=`<table><thead><tr><th>Objeto</th><th>Tipo</th><th>Rareza</th><th>Sintonización</th><th>Qué hace</th></tr></thead><tbody>${
      os.map(o=>`<tr><td>${escH(o.n)}</td><td>${escH(o.tipo)}</td><td>${escH(o.rar)}</td><td>${escH(sint(o.sint))}</td><td>${escH(o.d)}</td></tr>`).join('')}</tbody></table>`;
    return {f:'x:'+src,n:fuente(src),e:`${os.length} objetos mágicos`,r:'Objetos',d:'—',m:0,v:'objetos',obj:true,meta:`${os.length} objetos`,
      g:os.slice(0,4).map(o=>o.n).join(', ')+(os.length>4?'…':''),rec:null,secciones:[{t:'Objetos mágicos',tipo:'tabla',html:tabla}]};
  }

  /* Ambientaciones: sus secciones y, al final, todo lo jugable que viene de sus libros */
  function ambEntrada(a){
    const libros=Object.values(LIBROS).filter(l=>l.amb===a.id).map(l=>l.id);
    const de=x=>libros.includes(x.src);
    const razas=RAZAS.filter(de).map(r=>r.n);
    const subs=CLASES_OFICIALES.flatMap(c=>c.sub.op.filter(de).map(o=>`${o.n} (${c.n})`));
    const clases=CLASES_OFICIALES.filter(de).map(c=>c.n);
    const objs=OBJETOS.filter(de).length;
    const opciones=[clases.length?'Clases: '+clases.join(', ')+'.':'',razas.length?'Razas: '+razas.join(', ')+'.':'',subs.length?'Subclases: '+subs.join(', ')+'.':'',
      objs?`Objetos mágicos: ${objs} (en la pestaña Objetos).`:''].filter(Boolean);
    /* texto → párrafo; [texto…] → lista; [[título, texto]…] → subapartados */
    const cuerpo=x=>!Array.isArray(x)?p(x)
      :Array.isArray(x[0])?x.map(([t,d])=>`<h3>${escH(t)}</h3>`+(Array.isArray(d)?d.map(p).join(''):p(d))).join('')
      :`<ul>${x.map(i=>`<li>${escH(i)}</li>`).join('')}</ul>`;
    const secciones=[...a.secciones.map(([t,x])=>({t,tipo:'texto',html:cuerpo(x)})),
      ...(opciones.length?[{t:'Opciones de personaje',tipo:'texto',html:opciones.map(p).join('')}]:[]),
      {t:'Fuentes',tipo:'texto',html:p(libros.map(fuente).join(' · '))}];
    return {f:'a:'+a.id,n:a.n,e:a.lema,r:'Ambientación',d:'—',m:0,v:'ambientaciones',amb:true,meta:libros.map(fuente).join(' · '),
      g:primera(a.resumen||a.lema),rec:null,secciones};
  }

  /* Grupos: en cada pestaña (p) sus volúmenes */
  VOL.unshift({id:'ambientaciones',p:'ambientaciones',cls:'',nombre:'Ambientaciones',lema:'Los mundos de los libros: historia, regiones, facciones, religión y aventuras.'});
  VOL.unshift({id:'objetos',p:'objetos',cls:'',nombre:'Objetos mágicos',lema:'Los objetos de cada libro, con su rareza, si piden sintonización y qué hacen.'});
  FAMILIAS_RAZA.map(([nombre,lema],i)=>({id:'fam-'+i,p:'razas',cls:'',nombre,lema})).reverse().forEach(v=>VOL.unshift(v));
  VOL.unshift({id:'manual',cls:'',nombre:'Clases oficiales',lema:'Las clases del Manual del Jugador y el artífice de Eberron, con sus rasgos por nivel y todas las subclases de los libros.'});
  const clasesM=CLASES_OFICIALES.map(claseEntrada);
  const razasM=RAZAS.map(razaEntrada);
  const objM=[...new Set(OBJETOS.map(o=>o.src))].map(objetosEntrada);
  const ambM=AMBIENTACIONES.map(ambEntrada);
  CLASES.unshift(...razasM,...clasesM,...objM,...ambM);
})();
