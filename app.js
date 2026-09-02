/* La Actualidad — Spanish A-Level current-affairs comprehension
   Engine shared with L'Actu; only this block differs.
*/
(function(){
"use strict";
/*CFG-START*/
const CFG={
  key:"es",
  lang:"es-ES",
  ls:"actu-es-v1",
  file:"actualidad-",
  accents:["á","é","í","ó","ú","ñ","ü","¡","¿"],
  /* the vocabulary trainer, for the "revise the words first" links */
  lex:"https://artmemry.github.io/A-Level-Spanish-Edexcel-Vocabulary-training/",
  lexName:"El Léxico"
};
/*CFG-END*/
/*T-START*/
const T={
  padLabel:"Tildes y signos españoles",
  homeTitle:"La actualidad en español",
  homeLede:"Cada número recoge las noticias del mes que de verdad tocan los cuatro temas del examen. El texto está escrito para este sitio — no está copiado del periódico — y siempre se da el enlace al artículo original. Escribe tu nombre, haz las actividades y descarga tus respuestas para tu profesor.",
  nameLabel:"Tu nombre",
  namePh:"Nombre + inicial, p. ej. Rosa M.",
  issueLabel:"Número",
  themeLabel:"Tema",
  allThemes:"Todos",
  noItem:t=>"Este mes no hay nada para el tema "+t+" — la actualidad no ha dado nada que merezca la pena.",
  emptyIssue:"Este número está vacío.",
  words:n=>n+" palabras",
  minutes:n=>"≈ "+n+" min",
  read:"Leer y responder",
  doneTag:(s,m)=>s+"/"+m,
  back:"← Volver a los artículos",
  sourceLine:"Según",
  sourceRead:"leer el artículo original ↗",
  adapted:"Texto redactado para este sitio a partir de los hechos publicados. No es el artículo original.",
  glossaryShow:"Mostrar el glosario",
  glossaryHide:"Ocultar el glosario",
  lexLink:l=>"Repasa primero: "+l,
  tasksTitle:"Comprensión",
  stretchTitle:"Para ir más lejos",
  stretchNote:"Sin corrección automática: compara tu respuesta con el modelo y guarda la tuya en el archivo que entregas.",
  showModel:"Ver una respuesta modelo",
  hideModel:"Ocultar el modelo",
  vf:["Verdadero","Falso","No se menciona"],
  vfLong:{V:"Verdadero",F:"Falso",N:"No se menciona"},
  check:"Comprobar",
  correct:"Correcto.",
  wrong:"No.",
  answerWas:a=>"Respuesta: "+a,
  selfOk:"Mi versión también vale",
  selfDone:"Aceptada ✓",
  keysNote:"Hacían falta estas ideas: ",
  matchHint:"Haz clic en una palabra de la izquierda y luego en su traducción.",
  bankLabel:"Palabras propuestas",
  scoreLabel:"Puntuación",
  finish:"Terminar y descargar",
  finishNote:"El archivo lleva tus respuestas, tu puntuación y tu nombre. Envíaselo a tu profesor o súbelo a Teams.",
  needName:"Escribe tu nombre arriba, en la página de inicio, antes de descargar.",
  downloaded:"Archivo descargado.",
  fileHead:"LA ACTUALIDAD — trabajo entregado",
  fileName:"Nombre",
  fileDate:"Fecha",
  fileItem:"Artículo",
  fileTheme:"Tema",
  fileScore:"Puntuación",
  fileQ:"Pregunta",
  fileA:"Tu respuesta",
  fileOk:"bien",
  fileNo:"mal",
  fileClaim:"(el alumno considera que su respuesta también vale)",
  fileStretch:"Para ir más lejos",
  fileNothing:"(nada escrito)",
  answersTitle:"Solucionario",
  answersLede:"Solo para el profesor — esta página no está enlazada desde el sitio.",
  none:"—"
};
/*T-END*/
/* ───────── data ───────── */
const ISSUES=(typeof window!=="undefined"&&window.ISSUES)?window.ISSUES:[];
const THEMES=(typeof window!=="undefined"&&window.THEMES)?window.THEMES:{};
const THEME_ORDER=Object.keys(THEMES);
const ITEM={}; ISSUES.forEach(is=>is.items.forEach(it=>{it._issue=is; ITEM[it.id]=it;}));

/* ───────── state ───────── */
let S=load();
function load(){
  let s=null;
  try{const r=localStorage.getItem(CFG.ls); if(r)s=JSON.parse(r);}catch(e){}
  if(!s)s={name:"",work:{},v:1};
  s.work=s.work||{};
  return s;
}
function save(){ try{localStorage.setItem(CFG.ls,JSON.stringify(S));}catch(e){} }
function work(id){ return S.work[id]||(S.work[id]={a:{},score:0,max:0,stretch:"",t:0}); }

/* ───────── utils ───────── */
const $=s=>document.querySelector(s);
function el(tag,attrs,...kids){
  const n=document.createElement(tag);
  if(attrs)for(const k in attrs){
    if(k==="class")n.className=attrs[k];
    else if(k==="html")n.innerHTML=attrs[k];
    else if(k.startsWith("on"))n.addEventListener(k.slice(2),attrs[k]);
    else if(attrs[k]!=null)n.setAttribute(k,attrs[k]);
  }
  kids.flat().forEach(c=>{ if(c==null)return; n.append(c.nodeType?c:document.createTextNode(c)); });
  return n;
}
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function stripAcc(s){return s.normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/œ/g,"oe").replace(/æ/g,"ae")}
/* Marking is deliberately forgiving about accents and punctuation: this is a
   comprehension exercise, and a missing accent is not a misunderstanding. */
function norm(s){
  return stripAcc(String(s||"").toLowerCase().replace(/[’']/g,"'"))
    .replace(/[.,;:!?¡¿"«»()]/g," ").replace(/\s+/g," ").trim();
}
function stem(w){ return w.replace(/(es|s|e)$/,"").replace(/(ait|ent|ons|ez|er|ir|ar|ado|ido|é|e)$/,""); }
function eqLoose(a,b){
  a=norm(a); b=norm(b);
  if(a===b) return true;
  const A=a.split(" "), B=b.split(" ");
  if(A.length!==B.length) return false;
  return A.every((w,i)=>w===B[i]||stem(w)===stem(B[i]));
}
/* A short written answer is marked on the ideas it contains, not on its wording:
   the question asks the student to say something, not to guess a form of words. */
function keyScore(ans, keys){
  const t=" "+norm(ans)+" ";
  let hit=0;
  keys.forEach(k=>{
    const alts=String(k).split("|").map(norm);
    if(alts.some(x=>x && (t.indexOf(" "+x+" ")>=0 || t.indexOf(x)>=0))) hit++;
  });
  return keys.length?hit/keys.length:0;
}
function esc(s){return String(s).replace(/[&<>]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]))}
function today(){ const d=new Date(); return d.toLocaleDateString(CFG.lang); }

/* ───────── accent pad ───────── */
let padTarget=null;
const pad=(function(){
  const p=el("div",{class:"accent-pad hidden",role:"toolbar","aria-label":T.padLabel});
  CFG.accents.forEach(ch=>{
    const b=el("button",{type:"button",tabindex:"-1"},ch);
    b.addEventListener("mousedown",ev=>ev.preventDefault());
    b.addEventListener("click",()=>{
      if(!padTarget)return;
      const st=padTarget.selectionStart??padTarget.value.length, en=padTarget.selectionEnd??padTarget.value.length;
      padTarget.setRangeText(ch,st,en,"end");
      padTarget.dispatchEvent(new Event("input",{bubbles:true}));
      padTarget.focus();
    });
    p.append(b);
  });
  document.body.append(p);
  return p;
})();
function showPad(i){ padTarget=i; pad.classList.remove("hidden"); document.body.classList.add("pad-on"); }
function hidePad(){ padTarget=null; pad.classList.add("hidden"); document.body.classList.remove("pad-on"); }
/* the pad follows whichever box the student is typing in */
document.addEventListener("focusin",ev=>{
  const t=ev.target;
  if(t && (t.tagName==="INPUT"&&t.type==="text" || t.tagName==="TEXTAREA") && t.closest("#view-activite")) showPad(t);
});

/* ───────── router ───────── */
const VIEWS=["accueil","activite"];
function go(v){
  VIEWS.forEach(x=>$("#view-"+x).classList.toggle("hidden",x!==v));
  const tab=$("#tab-accueil"); if(tab) tab.setAttribute("aria-selected",v==="accueil"?"true":"false");
  window.scrollTo(0,0);
  if(v!=="activite") hidePad();
}

/* ═════════ home ═════════ */
let curIssue=ISSUES.length?ISSUES[0].id:null, curTheme="all";
function renderHome(){
  const v=$("#view-accueil"); v.innerHTML=""; hidePad();
  v.append(
    el("h2",null,T.homeTitle),
    el("p",{class:"lede"},T.homeLede),
    el("div",{class:"card"},
      el("label",{for:"student-name",style:"font-weight:600;font-size:.9rem"},T.nameLabel),
      el("input",{id:"student-name",class:"typed",style:"margin-top:8px",value:S.name||"",placeholder:T.namePh,
        oninput:e=>{S.name=e.target.value.trim();save()}})));
  if(!ISSUES.length){ v.append(el("p",{class:"lede"},T.emptyIssue)); return; }
  /* issue picker */
  v.append(el("div",{class:"section-label"},T.issueLabel));
  const ip=el("div",{class:"pill-select"});
  ISSUES.forEach(is=>ip.append(el("button",{class:is.id===curIssue?"on":"",
    onclick:()=>{curIssue=is.id;renderHome()}},is.label)));
  v.append(ip);
  /* theme filter */
  v.append(el("div",{class:"section-label"},T.themeLabel));
  const tp=el("div",{class:"pill-select"});
  tp.append(el("button",{class:curTheme==="all"?"on":"",onclick:()=>{curTheme="all";renderHome()}},T.allThemes));
  THEME_ORDER.forEach(code=>tp.append(el("button",{class:curTheme===code?"on":"",title:THEMES[code].name,
    onclick:()=>{curTheme=code;renderHome()}},code)));
  v.append(tp);
  /* the Edexcel sub-themes, so a student filtering by T1 sees what T1 covers */
  if(curTheme!=="all"&&THEMES[curTheme]){
    const th=THEMES[curTheme];
    v.append(el("p",{class:"lede",style:"margin:10px 0 0;font-size:.92rem"},
      el("b",null,th.name), th.subs&&th.subs.length? " — "+th.subs.join(" · "):""));
  }
  const issue=ISSUES.filter(x=>x.id===curIssue)[0]||ISSUES[0];
  if(issue.note) v.append(el("p",{class:"lede",style:"margin-top:14px"},issue.note));
  const items=issue.items.filter(it=>curTheme==="all"||it.theme===curTheme);
  const grid=el("div",{class:"grid cols-2",style:"margin-top:14px"});
  items.forEach(it=>grid.append(itemCard(it)));
  v.append(grid);
  /* an honest note about the themes with nothing this month */
  const missing=THEME_ORDER.filter(c=>!issue.items.some(it=>it.theme===c));
  if(curTheme==="all"&&missing.length)
    v.append(el("p",{class:"lede",style:"margin-top:16px;font-size:.9rem"},
      missing.map(c=>T.noItem(c)).join(" ")));
}
function itemCard(it){
  const w=work(it.id);
  const done=w.max>0;
  return el("div",{class:"card"},
    el("div",{class:"entry-meta"},it.theme+" · "+THEMES[it.theme].short+" · "+it._issue.label),
    el("h3",{style:"margin:6px 0 4px"},it.title),
    el("p",{style:"margin:0 0 10px;color:var(--ink-soft);font-size:.94rem"},it.standfirst),
    el("div",{class:"session-count"},T.words(it.words)+" · "+T.minutes(it.minutes)
      +(done?" · "+T.scoreLabel+" "+T.doneTag(w.score,w.max):"")),
    el("div",{class:"btn-row"},
      el("button",{class:"btn primary",onclick:()=>openItem(it.id)},T.read)));
}

/* ═════════ one article ═════════ */
let cur=null;
function openItem(id){
  cur=ITEM[id]; if(!cur)return;
  const w=work(id); w.a={}; w.score=0; w.max=0;         // a fresh attempt each time
  renderItem();
  go("activite");
  history.replaceState(null,"","?a="+encodeURIComponent(id));
}
function renderItem(){
  const it=cur, v=$("#view-activite"); v.innerHTML="";
  const w=work(it.id);
  v.append(el("div",{class:"session-bar"},
    el("button",{class:"btn small ghost",onclick:()=>{go("accueil");renderHome();history.replaceState(null,"",location.pathname)}},T.back),
    el("span",{class:"session-count"},it.theme+" · "+THEMES[it.theme].short),
    el("span",{class:"score-pill",id:"score-pill"},T.scoreLabel+" 0/0")));
  /* source strip */
  v.append(el("div",{class:"card",style:"border-left:4px solid var(--rouge)"},
    el("h2",null,it.title),
    el("p",{style:"margin:6px 0 0;color:var(--ink-soft)"},it.standfirst),
    el("p",{class:"session-count",style:"margin-top:10px"},
      T.sourceLine+" "+it.source.name+" ("+it.source.date+") — ",
      el("a",{href:it.source.url,target:"_blank",rel:"noopener"},T.sourceRead)),
    el("p",{class:"session-count",style:"margin-top:4px;font-style:italic"},T.adapted),
    it.lex&&it.lex.length? el("p",{style:"margin-top:10px;font-size:.9rem"},
      T.lexLink(""),
      it.lex.map((l,i)=>[i?" · ":"",el("a",{href:CFG.lex+"?l="+encodeURIComponent(l.code),target:"_blank",rel:"noopener"},l.label)])
    ):null));
  /* the text */
  const txt=el("div",{class:"card",style:"margin-top:14px"});
  it.text.forEach((p,i)=>txt.append(el("p",{class:"art-para"},el("span",{class:"para-n"},String(i+1)),p)));
  v.append(txt);
  /* glossary */
  if(it.glossary&&it.glossary.length){
    const box=el("div",{class:"card hidden",style:"margin-top:10px"},
      el("table",{class:"stats"},el("tbody",null,
        it.glossary.map(g=>el("tr",null,el("td",null,el("b",null,g[0])),el("td",null,g[1]))))));
    const b=el("button",{class:"btn small ghost",style:"margin-top:10px",onclick:()=>{
      const hid=box.classList.toggle("hidden"); b.textContent=hid?T.glossaryShow:T.glossaryHide;
    }},T.glossaryShow);
    v.append(b,box);
  }
  /* tasks */
  v.append(el("div",{class:"section-label"},T.tasksTitle));
  it.tasks.forEach((task,i)=>v.append(renderTask(task,i,it)));
  /* stretch */
  if(it.stretch){
    v.append(el("div",{class:"section-label"},T.stretchTitle));
    const ta=el("textarea",{class:"typed",rows:"5",style:"width:100%",
      oninput:e=>{work(it.id).stretch=e.target.value;save()}});
    ta.value=w.stretch||"";
    const model=el("div",{class:"feedback info hidden"},it.stretch.model);
    const mb=el("button",{class:"btn small ghost",onclick:()=>{
      const hid=model.classList.toggle("hidden"); mb.textContent=hid?T.showModel:T.hideModel;
    }},T.showModel);
    v.append(el("div",{class:"card"},
      el("p",{style:"margin:0 0 8px;font-weight:600"},it.stretch.q),
      el("p",{class:"session-count",style:"margin:0 0 10px"},T.stretchNote),
      ta, el("div",{class:"btn-row"},mb), model));
  }
  /* finish */
  v.append(el("div",{class:"card",style:"margin-top:16px"},
    el("p",{style:"margin:0 0 8px"},T.finishNote),
    el("div",{class:"btn-row"},
      el("button",{class:"btn primary",onclick:()=>downloadWork(it)},T.finish))));
  paintScore();
}
function paintScore(){
  const w=work(cur.id), p=$("#score-pill");
  if(p) p.textContent=T.scoreLabel+" "+w.score+"/"+w.max;
}
function award(taskKey,got,max,detail){
  const w=work(cur.id);
  if(w.a[taskKey])return;                    // one attempt per question
  w.a[taskKey]={got,max,...detail};
  w.score+=got; w.max+=max; w.t=Date.now();
  save(); paintScore();
}

/* ── task renderers ── */
function taskShell(n,q,extra){
  return el("div",{class:"card",style:"margin-top:12px"},
    el("div",{class:"entry-meta"},String(n)),
    el("p",{style:"margin:4px 0 10px;font-weight:600"},q),
    extra);
}
function renderTask(task,i,it){
  const key="q"+i;
  if(task.t==="vf")     return tVF(task,i,key);
  if(task.t==="qcm")    return tQCM(task,i,key);
  if(task.t==="lacune") return tGap(task,i,key);
  if(task.t==="lexique")return tMatch(task,i,key);
  if(task.t==="court")  return tShort(task,i,key);
  return el("div");
}
function tVF(task,i,key){
  const opts=el("div",{class:"opts"});
  const fb=el("div",{class:"feedback hidden"});
  const codes=["V","F","N"];
  const btns=codes.map((c,j)=>{
    const b=el("button",{class:"opt",onclick:()=>{
      const ok=c===task.a;
      btns.forEach(x=>x.disabled=true);
      b.classList.add(ok?"good":"bad");
      if(!ok) btns[codes.indexOf(task.a)].classList.add("good");
      fb.className="feedback "+(ok?"good":"bad");
      fb.textContent=(ok?T.correct:T.wrong)+(task.why?" "+task.why:"");
      fb.classList.remove("hidden");
      award(key,ok?1:0,1,{q:task.q,given:T.vfLong[c],right:T.vfLong[task.a]});
    }},el("span",{class:"k"},String.fromCharCode(97+j)),T.vf[j]);
    return b;
  });
  btns.forEach(b=>opts.append(b));
  return taskShell(i+1,task.q,el("div",null,opts,fb));
}
function tQCM(task,i,key){
  const opts=el("div",{class:"opts"});
  const fb=el("div",{class:"feedback hidden"});
  const btns=task.opts.map((o,j)=>el("button",{class:"opt",onclick:()=>{
    const ok=j===task.a;
    btns.forEach(x=>x.disabled=true);
    btns[j].classList.add(ok?"good":"bad");
    if(!ok) btns[task.a].classList.add("good");
    fb.className="feedback "+(ok?"good":"bad");
    fb.textContent=(ok?T.correct:T.wrong+" "+T.answerWas(task.opts[task.a]))+(task.why?" "+task.why:"");
    fb.classList.remove("hidden");
    award(key,ok?1:0,1,{q:task.q,given:o,right:task.opts[task.a]});
  }},el("span",{class:"k"},String.fromCharCode(97+j)),o));
  btns.forEach(b=>opts.append(b));
  return taskShell(i+1,task.q,el("div",null,opts,fb));
}
function tGap(task,i,key){
  const inp=el("input",{class:"typed",type:"text",autocapitalize:"off",autocomplete:"off",spellcheck:"false",style:"max-width:260px;display:inline-block;margin:0 6px"});
  const fb=el("div",{class:"feedback hidden"});
  const line=el("p",{class:"ctx",style:"margin:0"},task.before||"",inp,task.after||"");
  const btn=el("button",{class:"btn small primary"},T.check);
  function check(){
    const ok=task.a.some(a=>eqLoose(a,inp.value));
    inp.disabled=true; btn.disabled=true;
    fb.className="feedback "+(ok?"good":"bad");
    fb.textContent=(ok?T.correct:T.wrong+" "+T.answerWas(task.a[0]));
    fb.classList.remove("hidden");
    award(key,ok?1:0,1,{q:(task.before||"")+" ___ "+(task.after||""),given:inp.value,right:task.a[0]});
  }
  btn.addEventListener("click",check);
  inp.addEventListener("keydown",e=>{if(e.key==="Enter")check()});
  const bank=task.bank&&task.bank.length? el("p",{class:"session-count",style:"margin:10px 0 0"},
    T.bankLabel+" : "+shuffle(task.bank).join(" · ")):null;
  return taskShell(i+1,task.q||"",el("div",null,line,el("div",{class:"btn-row"},btn),bank,fb));
}
function tMatch(task,i,key){
  const pairs=task.pairs, L=shuffle(pairs.map((p,j)=>({t:p[0],j}))), R=shuffle(pairs.map((p,j)=>({t:p[1],j})));
  let sel=null, done=0, got=0;
  const fb=el("div",{class:"feedback hidden"});
  const colL=el("div",{class:"opts"}), colR=el("div",{class:"opts"});
  const bl={}, br={};
  L.forEach(x=>{ const b=el("button",{class:"opt",onclick:()=>{
      if(b.classList.contains("paired"))return;
      Object.values(bl).forEach(y=>y.classList.remove("sel"));
      b.classList.add("sel"); sel=x;
    }},x.t); bl[x.j]=b; colL.append(b); });
  R.forEach(y=>{ const b=el("button",{class:"opt",onclick:()=>{
      if(!sel||b.classList.contains("paired"))return;
      const ok=sel.j===y.j;
      if(ok){ bl[sel.j].classList.remove("sel"); bl[sel.j].classList.add("paired"); b.classList.add("paired"); got++; }
      else { b.classList.add("bad"); setTimeout(()=>b.classList.remove("bad"),600);
             bl[sel.j].classList.remove("sel"); bl[sel.j].classList.add("dim"); }
      sel=null; done++;
      if(got===pairs.length){
        fb.className="feedback good"; fb.textContent=T.correct; fb.classList.remove("hidden");
        award(key,got,pairs.length,{q:T.tasksTitle,given:got+"/"+pairs.length,right:pairs.map(p=>p[0]+" = "+p[1]).join("; ")});
      }
    }},y.t); br[y.j]=b; colR.append(b); });
  return taskShell(i+1,(task.q||T.matchHint),
    el("div",null,el("div",{class:"match-cols"},colL,colR),fb));
}
function tShort(task,i,key){
  const ta=el("textarea",{class:"typed",rows:"3",style:"width:100%"});
  const fb=el("div",{class:"feedback hidden"});
  const btn=el("button",{class:"btn small primary"},T.check);
  btn.addEventListener("click",()=>{
    const r=keyScore(ta.value,task.keys||[]);
    const ok=r>=0.6;
    ta.disabled=true; btn.disabled=true;
    fb.className="feedback "+(ok?"good":"bad");
    fb.append(ok?T.correct:T.wrong,
      el("span",{class:"note"},T.answerWas(task.a[0])),
      task.keys&&task.keys.length? el("span",{class:"note"},T.keysNote+task.keys.map(k=>String(k).split("|")[0]).join(" · ")):null);
    fb.classList.remove("hidden");
    award(key,ok?1:0,1,{q:task.q,given:ta.value,right:task.a[0]});
    if(!ok){
      /* the same escape hatch as the vocabulary trainer: a comprehension answer
         can be right in words no keyword list anticipated, and the teacher is
         better placed to judge than the marker is. */
      const sg=el("button",{class:"btn small ghost",style:"margin-top:10px",onclick:()=>{
        const w=work(cur.id);
        if(w.a[key]&&!w.a[key].claim){ w.a[key].claim=1; w.score++; save(); paintScore(); }
        sg.disabled=true; sg.textContent=T.selfDone; fb.className="feedback good";
      }},T.selfOk);
      fb.append(sg);
    }
  });
  return taskShell(i+1,task.q,el("div",null,ta,el("div",{class:"btn-row"},btn),fb));
}

/* ═════════ download ═════════ */
function downloadWork(it){
  if(!S.name){ alert(T.needName); return; }
  const w=work(it.id);
  const L=[];
  L.push(T.fileHead);
  L.push("".padEnd(T.fileHead.length,"="));
  L.push(T.fileName+" : "+S.name);
  L.push(T.fileDate+" : "+today());
  L.push(T.fileItem+" : "+it.title+"  ("+it._issue.label+")");
  L.push(T.fileTheme+" : "+it.theme+" — "+THEMES[it.theme].name);
  L.push(T.fileScore+" : "+w.score+"/"+w.max);
  L.push("");
  it.tasks.forEach((task,i)=>{
    const a=w.a["q"+i]; if(!a)return;
    L.push((i+1)+". "+T.fileQ+" : "+(a.q||""));
    L.push("   "+T.fileA+" : "+(a.given||T.fileNothing));
    L.push("   → "+(a.got>=a.max?T.fileOk:T.fileNo)+(a.claim?" "+T.fileClaim:"")
           +(a.got>=a.max?"":"  —  "+T.answerWas(a.right)));
    L.push("");
  });
  if(it.stretch){
    L.push(T.fileStretch);
    L.push("".padEnd(T.fileStretch.length,"-"));
    L.push(it.stretch.q);
    L.push(w.stretch||T.fileNothing);
    L.push("");
  }
  L.push(T.sourceLine+" "+it.source.name+" — "+it.source.url);
  const blob=new Blob([L.join("\n")],{type:"text/plain;charset=utf-8"});
  const safe=stripAcc(S.name+"-"+it.id).replace(/[^A-Za-z0-9\-_]+/g,"-").replace(/^-+|-+$/g,"");
  const a=el("a",{href:URL.createObjectURL(blob),download:CFG.file+safe+".txt"});
  document.body.append(a); a.click(); a.remove();
}

/* ═════════ answer key (teachers) ═════════ */
function renderKey(){
  const v=$("#view-accueil"); v.innerHTML=""; go("accueil");
  v.append(el("h2",null,T.answersTitle),el("p",{class:"lede"},T.answersLede));
  ISSUES.forEach(is=>{
    v.append(el("div",{class:"section-label"},is.label));
    is.items.forEach(it=>{
      const rows=[];
      it.tasks.forEach((task,i)=>{
        let right="";
        if(task.t==="vf") right=T.vfLong[task.a];
        else if(task.t==="qcm") right=task.opts[task.a];
        else if(task.t==="lacune") right=task.a.join(" / ");
        else if(task.t==="court") right=task.a[0];
        else if(task.t==="lexique") right=task.pairs.map(p=>p[0]+" = "+p[1]).join(" · ");
        rows.push(el("tr",null,el("td",{class:"num"},String(i+1)),
          el("td",null,task.q||(task.before||"")+" ___ "+(task.after||"")),
          el("td",null,el("b",null,right))));
      });
      v.append(el("div",{class:"card",style:"margin-top:12px"},
        el("div",{class:"entry-meta"},it.theme+" · "+THEMES[it.theme].short),
        el("h3",null,it.title),
        el("table",{class:"stats"},el("tbody",null,rows)),
        it.stretch? el("p",{style:"margin-top:10px"},el("b",null,it.stretch.q),el("br"),it.stretch.model):null));
    });
  });
}

/* ═════════ deep links ═════════
   ?a=<item id> opens one article, ?m=<issue id> opens a month, ?prof=1 the key. */
function deepLink(){
  const q=location.search||"";
  if(/[?&]prof=1/.test(q)){ renderKey(); return true; }
  let m=/[?&]a=([^&]+)/.exec(q);
  if(m){ const id=decodeURIComponent(m[1]); if(ITEM[id]){ openItem(id); return true; } }
  m=/[?&]m=([^&]+)/.exec(q);
  if(m){ const id=decodeURIComponent(m[1]); if(ISSUES.some(x=>x.id===id)) curIssue=id; }
  return false;
}
const tabHome=$("#tab-accueil");
if(tabHome) tabHome.addEventListener("click",()=>{go("accueil");renderHome()});
if(!deepLink()){ renderHome(); go("accueil"); }
})();
