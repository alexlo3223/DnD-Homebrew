/* Añade al compendio las clases y las razas del Manual del Jugador (datos de oficial.js).
   Se convierten al mismo formato que las clases homebrew (datos.js) y se muestran en sus propios grupos. */
(function(){
  const escH=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const primera=s=>((String(s).match(/^.+?[.!?](?=\s|$)/)||[String(s)])[0]).trim();
  const p=t=>`<p>${escH(t)}</p>`;
  const NOMBRE={FUE:'Fuerza',DES:'Destreza',CON:'Constitución',INT:'Inteligencia',SAB:'Sabiduría',CAR:'Carisma'};
  const ROL={barbaro:'Marcial',bardo:'Apoyo',clerigo:'Lanzador',druida:'Lanzador',guerrero:'Marcial',monje:'Marcial',
    paladin:'Semilanzador',explorador:'Semilanzador',picaro:'Astucia',hechicero:'Lanzador',brujo:'Lanzador',mago:'Lanzador'};
  /* 0 sin magia · 2 semilanzador · 3 lanzador (igual que datos.js) */
  const MAGIA={barbaro:0,bardo:3,clerigo:3,druida:3,guerrero:0,monje:0,paladin:2,explorador:2,picaro:0,hechicero:3,brujo:3,mago:3};

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
          const k=m.tipo==='completo'?nv:m.tipo==='medio'?(nv<2?0:Math.ceil(nv/2)):(nv<3?0:Math.ceil(nv/3));
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
      {t:sub.titulo,tipo:'subclases',html:sub.op.map(o=>`<h3>${escH(o.n)}</h3><p><em>Desde el nivel ${sub.nivel}</em></p>`+o.r.map(([nv,nm])=>`<p>Nivel ${nv}: ${escH(nm)}</p>`).join('')).join('')}
    ].filter(s=>s.html);
    return {f:'o:'+c.id,n:c.n,e:primera(c.lore),r:ROL[c.id],d:c.d,m:MAGIA[c.id]||0,v:'manual',oficial:true,
      g:primera(c.como),rec:null,secciones};
  }

  function razaEntrada(r){
    const mej=Object.entries(r.mej||{}).map(([k,v])=>`+${v} ${NOMBRE[k]}`);
    const info=[`Tamaño ${r.tam}.`,`Velocidad ${r.vel} pies.`,`Idiomas: ${r.idiomas}.`,mej.length?`Mejoras de característica: ${mej.join(', ')}.`:'',
      r.elegir?`Además, elige ${r.elegir.n} característica(s) para +${r.elegir.val}.`:'',r.comp?`Competencias: ${r.comp}`:'',r.hab?`Habilidad: ${r.hab.join(', ')}.`:''].filter(Boolean);
    const secciones=[
      {t:'Trasfondo',tipo:'texto',html:p(r.lore)},
      {t:'Mejoras y datos',tipo:'texto',html:info.map(p).join('')},
      {t:'Rasgos de raza',tipo:'rasgos',html:r.rasgos.map(([n,t])=>`<h3>${escH(n)}</h3><div class="bloque"><div>Raza</div></div>${p(t)}`).join('')},
      ...(r.sub&&r.sub.length?[{t:'Subrazas',tipo:'subclases',html:r.sub.map(s=>`<h3>${escH(s.n)}</h3>`+(s.mej&&Object.keys(s.mej).length?`<p><em>Mejoras: ${escH(Object.entries(s.mej).map(([k,v])=>'+'+v+' '+NOMBRE[k]).join(', '))}</em></p>`:'')+(s.rasgos||[]).map(([n,t])=>`<p><strong>${escH(n)}:</strong> ${escH(t)}</p>`).join('')).join('')}]:[])
    ];
    return {f:'r:'+r.id,n:r.n,e:`Tamaño ${r.tam} · velocidad ${r.vel} pies`,r:'Raza',d:r.tam,m:0,v:'razas',raza:true,tam:r.tam,
      g:primera(r.lore),rec:null,secciones};
  }

  /* Grupos nuevos: primero las clases del Manual, luego las razas */
  VOL.unshift({id:'razas',cls:'',nombre:'Razas del Manual',lema:'Nueve pueblos del Manual del Jugador: lo que son, lo que les da su sangre y lo que aprenden desde niños.'});
  VOL.unshift({id:'manual',cls:'',nombre:'Manual del Jugador',lema:'Las doce clases del Manual del Jugador, con su trasfondo, sus rasgos por nivel y sus subclases.'});
  const clasesM=CLASES_OFICIALES.map(claseEntrada);
  const razasM=RAZAS.map(razaEntrada);
  CLASES.unshift(...razasM,...clasesM);
})();
