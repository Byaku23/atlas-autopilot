// ===== 27 · Hans el Listo — escenas =====
const T0=T;
const PA=(t,a,b)=>win(t,a,b);
const TAPS=Array.from({length:11},(_,i)=>0); // se calculan con E en tap()
const tapT=i=>E.golpeaba+i*.27;                 // 11 golpes de la pezuña (escena 1)
// pulso 0..1 de un golpe de cabeza en el instante ts
const pulse=(t,ts)=>{const u=t-ts;return u<0||u>.22?0:Math.sin(u/.22*Math.PI)};
// ---------- fondos ----------
function berlin(t,warm){bg('#1b2a3a',mixc('#b9803f','#d8964a',warm||0));stars(t,26,5,.55);
  ridge(300,'#14202e',3,50);ridge(350,'#101a26',8,34);
  for(let i=0;i<16;i++){const wx=14+i*22+R(i)*6,wy=250+R(i+9)*80;if(R(i+3)>.35)rect0(wx,wy,5,7,'rgba(255,210,120,'+(.55+.3*Math.sin(t*2+i))+')')}
  for(let i=0;i<3;i++){const lx=40+i*140;line(lx,330,lx,420,'#0a1018',3);glow(lx,326,38,'rgba(255,200,110,.55)',1)}
  rect0(0,480,360,200,COB);rect0(0,480,360,2,'rgba(255,220,160,.35)');
  for(let r=0;r<4;r++)for(let c=0;c<12;c++)rect0(c*32+(r%2)*16-8,490+r*14,26,9,'rgba(0,0,0,'+(.18+.08*((r+c)%2))+')')}
function board(x,y,s,txtA,q){tr(x,y,s*q,0,()=>{rr(-62,-48,124,96,6);ctx.fillStyle='#1d3a30';ctx.fill();ctx.strokeStyle='#8a6a3a';ctx.lineWidth=5;ctx.stroke();txt(txtA,0,2,34,'#f4ecd8',{wt:'900'})})}
// ---------- S0 · gancho: Berlín 1904, el caballo que suma ----------
function s0(t,u){
  berlin(t,0);dust(t,22,'rgba(255,220,150,',4,10,1.6,.3);
  const tp=pulse(t,E.sumar+.25)+pulse(t,E.sumar+.55)+pulse(t,E.sumar+.85)+pulse(t,E.restar+.3)+pulse(t,E.restar+.6);
  hans(135,500,2.0,{head:.35*tp+.04*Math.sin(t*2),t,rim:'#ffd9a0',ph:0});
  if(t>E.caballo-.2){const q=eb(PA(t,E.caballo-.2,E.caballo+.35));board(268,330,1,t<E.sumar?'?':(t<E.restar?'3+4':(t<E.fecha?'9−4':'')),q);
    if(t>E.sumar&&t<E.restar)txt('= 7',268,395,26,GOLD,{wt:'900',st:INK,sw:5,a:cl((t-E.sumar-.9)*3)});if(t>E.restar&&t<E.fecha)txt('= 5',268,395,26,GOLD,{wt:'900',st:INK,sw:5,a:cl((t-E.restar-.9)*3)})}
  if(t>E.fecha-.1){const q=eb(PA(t,E.fecha-.1,E.fecha+.35));calCard(268,300,'NOVIEMBRE','27',RED,q)}
  TX('BERLÍN',180,66,30,'#fff',t,-.6,{out:E.n1904-.1,hl:[0],hc:GOLD});
  if(t>E.n1904-.05&&t<E.caballo-.1){slam('1904',180,70,60,GOLD,t,E.n1904,{st:INK,sw:10});shock(180,70,t,E.n1904,GOLD,150,5,.6)}
  if(t>E.caballo-.05&&t<E.listo-.2)TX('UN CABALLO QUE CALCULA',180,66,22,'#fff',t,E.caballo-.05,{w:344,hl:[2],hc:GOLD});
  if(t>E.listo-.05){slam('HANS EL LISTO',180,86,40,GOLD,t,E.listo,{st:INK,sw:9});shock(180,86,t,E.listo,GOLD,160,5,.6);rays(180,86,t,14,230,'rgba(255,207,90,',.12,.2)}
}
// ---------- S1 · von Osten pregunta la fecha y Hans golpea 11 veces ----------
function s1(t,u){
  berlin(t,.15);
  const n=t<E.golpeaba?0:Math.min(11,Math.floor((t-E.golpeaba)/.27)+1);
  let tp=0;for(let i=0;i<11;i++)tp+=pulse(t,tapT(i));
  const sh=hit=>0;
  person(255,505,2.0,{flip:true,robe:'#5a4a3a',beard:1,hair:'#bbb',arm:t>E.golpeaba-.5&&t<E.once+1?-1.2:0});
  hans(105,505,1.9,{head:.35*tp,t,rim:'#ffd9a0'});
  if(t>E.ocho-.1){const q=eb(PA(t,E.ocho-.1,E.ocho+.35));calCard(95,190,'MARTES','8',TEAL,q)}
  if(t>E.viernes-.1){const q=eb(PA(t,E.viernes-.1,E.viernes+.35));calCard(265,190,'VIERNES',t<E.once?'?':'11',RED,q);
    if(t>E.martes&&t<E.viernes+.4)for(let i=0;i<5;i++){const w=PA(t,E.martes+i*.1,E.viernes+.2);txt('›',lerp(140,222,w),190,22,GOLD,{wt:'900',a:Math.sin(w*Math.PI)})}}
  if(t>E.golpeaba-.05){const ph=1;tr(180,272,1+.12*wob(t-(E.golpeaba+(n-1)*.27),14,5),0,()=>{txt(String(n),0,0,n>=10?80:84,GOLD,{wt:'900',st:INK,sw:11})});
    for(let i=0;i<11;i++)if(t>tapT(i)&&t<tapT(i)+.4)shock(105+70,505-4,t,tapT(i),'rgba(255,230,180,.8)',34,2.4,.4)}
  TX('SU DUEÑO',180,66,26,'#fff',t,T0[1]-.05,{out:E.wilhelm-.1,hl:[1],hc:GOLD});
  if(t>E.wilhelm-.05&&t<E.profesor-.1)tag('WILHELM VON OSTEN',180,66,21,RED,'#fff',t,E.wilhelm-.05);
  if(t>E.profesor-.05&&t<E.ocho-.4)TX('PROFESOR DE MATEMÁTICAS',180,66,20,'#fff',t,E.profesor-.05,{w:344,hl:[1],hc:GOLD});
  if(t>E.ocho-.35&&t<E.golpeaba-.1)TX('"¿QUÉ FECHA ES EL VIERNES?"',180,66,19,'#fff',t,E.ocho-.35,{w:344,hl:[2,3],hc:GOLD});
  if(t>E.golpeaba-.05&&t<E.correcto-.1)TX('GOLPEA CON LA PEZUÑA',180,66,22,'#fff',t,E.golpeaba-.05,{w:344,hl:[2],hc:GOLD});
  if(t>E.correcto-.05){tag('¡CORRECTO!',180,470,22,RED,'#fff',t,E.correcto-.05);burst(180,330,t,E.correcto,[GOLD,'#fff',GRN],18,130,.8,3)}
}
// ---------- S2 · el periódico y la comisión de trece expertos ----------
function s2(t,u){
  berlin(t,.1);
  const pq=PA(t,E.nyt-.5,E.nyt+.3),out=PA(t,E.comision-.35,E.comision+.25);
  if(out<1)paper(lerp(180,180,0)+out*-340,300,1.5*eb(pq),t,-.05+.1*out);
  if(t>E.nyt-.1&&out<.5)TX('THE NEW YORK TIMES · 1904',180,66,18,'#fff',t,E.nyt-.1,{w:344,hl:[1,2],hc:GOLD});
  if(t>E.entonces-.1&&out<.5)TX('LA NOTICIA DA LA VUELTA AL MUNDO',180,100,16,'#fff',t,E.entonces-.1,{w:344,hl:[3],hc:GOLD});
  // comisión: 13 figuras en dos filas
  const cols=['#6a4a3a','#3a4a5a','#5a3a4a','#4a5a3a','#6a5a3a','#3a3a5a','#5a4a2a'];
  for(let i=0;i<13;i++){const row=i<7?0:1,k=row?i-7:i,px=row?60+k*40:30+k*50,py=row?500:440;
    const q=eb(PA(t,E.comision+.1+i*.05,E.comision+.5+i*.05));if(q>0){const hi=(t>E.vet-.1&&t<E.circo-.2&&i==2)||(t>E.circo-.1&&t<E.caballeria-.2&&i==5)||(t>E.caballeria-.1&&t<E.zoo-.2&&i==9)||(t>E.zoo-.1&&i==12);
      person(px,py,1.25*q,{robe:cols[i%7],hair:i%3?'#3a2418':'#bbb',beard:i%4==0});if(hi){glow(px,py-50,34,'rgba(255,207,90,.7)',1)}}}
  if(t>E.comision+.1){TX('COMISIÓN',180,66,26,'#fff',t,E.comision-.05,{out:E.trece-.1,hl:[0],hc:GOLD})}
  if(t>E.trece-.05){slam('13 EXPERTOS',180,76,44,GOLD,t,E.trece,{st:INK,sw:9});shock(180,76,t,E.trece,GOLD,150,5,.6)}
  const lab=(s,a,b)=>{if(t>a-.05&&t<b)tag(s,180,340,19,RED,'#fff',t,a-.05)};
  lab('VETERINARIO',E.vet,E.circo-.1);lab('DIRECTOR DE CIRCO',E.circo,E.caballeria-.1);lab('OFICIAL DE CABALLERÍA',E.caballeria,E.zoo-.1);lab('DIRECTOR DEL ZOO DE BERLÍN',E.zoo,T0[3]);
}
// ---------- S3 · veredicto: sin trucos ----------
function s3(t,u){
  berlin(t,.3);rays(180,300,t,16,360,'rgba(255,207,90,',.1,.15);
  hans(180,500,2.2,{head:.04*Math.sin(t*2),t,rim:'#ffd9a0'});
  TX('CONCLUSIÓN',180,66,28,'#fff',t,T0[3]-.05,{out:E.sept-.1,hl:[0],hc:GOLD});
  if(t>E.sept-.05&&t<E.no-.1)TX('SEPTIEMBRE DE 1904',180,66,24,'#fff',t,E.sept-.05,{w:344,hl:[1,2],hc:GOLD});
  if(t>E.no-.05)TX('NO HABÍA',180,66,34,'#fff',t,E.no-.05,{hl:[1],hc:RED});
  if(t>E.trucos){stampBox('¡SIN TRUCOS!',180,185,44,GRN,t,E.trucos,-.08);burst(180,185,t,E.trucos,[GRN,'#fff',GOLD],20,150,.8,3);shock(180,185,t,E.trucos,GRN,170,5,.6)}
}
// ---------- S4 · Pfungst, anteojeras y porcentajes ----------
function s4(t,u){
  berlin(t,0);
  const bl=PA(t,E.anteo,E.anteo+.5);
  hans(110,505,1.55,{head:.03*Math.sin(t*2),t,bl,rim:'#ffd9a0'});
  person(250,505,1.9,{flip:true,robe:'#2f3f5a',hair:'#3a2418',arm:t>E.anteo?-.6:0});
  TX('UN JOVEN PSICÓLOGO',180,66,23,'#fff',t,T0[4]-.05,{out:E.oskar-.1,w:344,hl:[2],hc:GOLD});
  if(t>E.oskar-.05&&t<E.prueba-.1)tag('OSKAR PFUNGST',180,66,24,RED,'#fff',t,E.oskar-.05);
  if(t>E.prueba-.05&&t<E.anteo-.1)TX('UNA PRUEBA SENCILLA',180,66,24,'#fff',t,E.prueba-.05,{w:344,hl:[2],hc:GOLD});
  if(t>E.anteo-.05&&t<E.siveia-.2)tag('ANTEOJERAS',180,66,26,RED,'#fff',t,E.anteo-.05);
  if(t>E.anteo+.4&&t<E.siveia-.1){const q=eb(PA(t,E.anteo+.4,E.anteo+.9));tr(180,250,q,0,()=>{eyes(0,0,.9,0,0);line(-44,-30,44,30,RED,6)})}
  // barras
  if(t>E.siveia-.1){
    const b1=PA(t,E.ochenta-.1,E.ochenta+.9),b2=PA(t,E.seis-.1,E.seis+.5);
    if(t<E.sino-.1)TX('SI LO VEÍA',180,66,26,'#fff',t,E.siveia-.1,{hl:[2],hc:GRN});
    if(t>=E.sino-.1)TX('SI NO LO VEÍA',180,66,26,'#fff',t,E.sino-.1,{hl:[3],hc:RED});
    const base=318;rect0(40,base,280,3,'rgba(255,255,255,.5)');
    const h1=130*eo(b1);rect0(70,base-h1,70,h1,GRN);rect0(70,base-h1,70,4,'#fff');
    if(t>E.ochenta-.1)txt(Math.round(89*eo(b1))+'%',105,base-h1-24,34,GRN,{wt:'900',st:INK,sw:7});
    txt('LO VE',105,base+22,17,'#fff',{wt:'900',st:INK,sw:4});
    if(t>E.sino-.1){const h2=Math.max(3,9*eo(b2));rect0(220,base-h2,70,h2,RED);if(t>E.seis-.1)txt(Math.round(6*eo(b2))+'%',255,base-h2-24,34,RED,{wt:'900',st:INK,sw:7});txt('NO LO VE',255,base+22,17,'#fff',{wt:'900',st:INK,sw:4});if(t>E.seis)shock(255,base-10,t,E.seis,RED,70,4,.5)}
    if(t>E.ochenta)shock(105,base-130,t,E.ochenta+.8,GRN,90,4,.5);
  }
}
// ---------- S5 · Hans lee a las personas: el gesto mínimo ----------
function s5(t,u){
  berlin(t,.2);
  const nod=t>E.gesto?Math.sin(PA(t,E.gesto,E.gesto+.45)*Math.PI):0;
  let tp=0;const taps=[];for(let i=0;i<9;i++){const ts=E.llegar+.9+i*.42;taps.push(ts);tp+=pulse(t,ts)}
  const stopped=t>E.detenia-.3;
  hans(100,505,1.75,{head:.35*tp,t,rim:'#ffd9a0'});
  // cara de quien pregunta
  face(262,300,1.8,nod,true);
  if(t>E.gesto-.05&&t<E.detenia-.4){for(let i=0;i<3;i++){const w=((t-E.gesto)*2+i*.3)%1;ctx.save();ctx.globalAlpha=1-w;glowStroke(GOLD,3,8);ctx.beginPath();ctx.arc(262,300,60+w*34,.2,1.2);ctx.stroke();ctx.restore()}}
  // ojos de Hans siguiendo
  if(t>E.leia-.1){const q=eb(PA(t,E.leia-.1,E.leia+.4));eyes(100,260,.8*q,150,20)}
  if(t>E.nosabia-.1&&t<E.leia-.2){const q=eb(PA(t,E.nosabia-.1,E.nosabia+.35));board(180,300,1.3,'2+2',q);if(t>E.nosabia+.2){line(110,250,250,350,RED,8);line(250,250,110,350,RED,8)}}
  TX('HANS NO SABÍA MATEMÁTICAS',180,66,19,'#fff',t,T0[5]-.05,{out:E.leia-.1,w:344,hl:[3],hc:RED});
  if(t>E.leia-.05&&t<E.llegar-.1)TX('LEÍA A LAS PERSONAS',180,66,24,'#fff',t,E.leia-.05,{w:344,hl:[1,2,3],hc:GOLD});
  if(t>E.llegar-.05&&t<E.gesto-.1)TX('AL LLEGAR AL NÚMERO CORRECTO',180,66,19,'#fff',t,E.llegar-.05,{w:344,hl:[3,4],hc:GOLD});
  if(t>E.gesto-.05&&t<E.detenia-.1)TX('UN GESTO MÍNIMO',180,66,26,'#fff',t,E.gesto-.05,{w:344,hl:[1,2],hc:RED});
  if(t>E.detenia-.05){tag('HANS SE DETIENE',180,470,22,GOLD,'#1a1a22',t,E.detenia-.05)}
  taps.forEach((ts,i)=>{if(t>ts&&t<ts+.4)shock(100+66,500,t,ts,'rgba(255,230,180,.8)',30,2.4,.4)});
}
// ---------- S6 · nadie engañó; Von Osten no aceptó; efecto Clever Hans ----------
function s6(t,u){
  berlin(t,.1);
  hans(105,505,1.7,{head:.03*Math.sin(t*2),t,rim:'#ffd9a0'});
  person(255,505,1.9,{flip:true,robe:'#5a4a3a',beard:1,hair:'#bbb',arm:t>E.nunca?-.9+.3*Math.sin(t*10):0});
  TX('NADIE LO ENGAÑÓ',180,66,26,'#fff',t,T0[6]-.05,{out:E.nunca-.1,w:344,hl:[2],hc:GOLD});
  if(t>E.nadie+1.0&&t<E.nunca-.1)TX('A PROPÓSITO',180,100,22,'#fff',t,E.nadie+1.0,{hl:[0],hc:GOLD});
  if(t>E.nunca-.05&&t<E.efecto-.3){TX('VON OSTEN NUNCA ACEPTÓ',180,66,20,'#fff',t,E.nunca-.05,{w:344,hl:[3],hc:RED});
    const q=eb(PA(t,E.nunca+.1,E.nunca+.5));tr(262,330,q,0,()=>{rr(-44,-26,88,52,14);ctx.fillStyle='#fff';ctx.fill();ctx.beginPath();ctx.moveTo(-4,26);ctx.lineTo(-16,42);ctx.lineTo(10,26);ctx.fill();txt('NO',0,0,34,RED,{wt:'900'})})}
  if(t>E.efecto-.1){rays(180,200,t,14,300,'rgba(255,207,90,',.12,.2);
    slam('EL EFECTO',180,150,34,'#fff',t,E.efecto,{st:INK,sw:9});
    if(t>E.clever-.1){slam('CLEVER HANS',180,205,38,GOLD,t,E.clever,{st:INK,sw:10});shock(180,205,t,E.clever,GOLD,170,5,.6);burst(180,205,t,E.clever,[GOLD,'#fff',TEAL],20,140,.8,3)}}
}
// ---------- S7 · debate ----------
function s7(t,u){
  berlin(t,.2);
  if(t<E.coment-.2){
    TX('¿HANS FUE LISTO DE VERDAD,',180,66,22,'#fff',t,E.entonces-.1,{w:344,hl:[3,4],hc:GOLD});
    TX('O SOLO UN LECTOR DE PERSONAS?',180,98,21,'#fff',t,E.lector-1.0,{w:344,hl:[3,4],hc:TEAL});
    const lw=eb(PA(t,E.listo2-.3,E.listo2+.3)),rw=eb(PA(t,E.lector-.3,E.lector+.3));
    tr(95,320,lw,0,()=>{rr(-70,-90,140,180,12);ctx.fillStyle='rgba(8,14,22,.82)';ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=3;ctx.stroke();hans(-5,50,1.0,{t,rim:'#ffd9a0'});txt('LISTO',0,-68,24,GOLD,{wt:'900',st:INK,sw:6});txt('💡',0,-30,26,GOLD,{wt:'900'})});
    tr(265,320,rw,0,()=>{rr(-70,-90,140,180,12);ctx.fillStyle='rgba(8,14,22,.82)';ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=3;ctx.stroke();eyes(0,0,.75,0,0);txt('LECTOR',0,-68,22,TEAL,{wt:'900',st:INK,sw:6});txt('DE PERSONAS',0,58,14,TEAL,{wt:'900',st:INK,sw:4})});
    if(t>E.lector)txt('VS',180,320,30,'#fff',{wt:'900',st:INK,sw:7,sc:1+.1*wob(t-E.lector,12,4)});
  }else{
    TX('¿LISTO DE VERDAD,',180,66,25,'#fff',t,E.coment-.5,{w:344,hl:[1,2],hc:GOLD});TX('O LECTOR DE PERSONAS?',180,98,22,'#fff',t,E.coment-.4,{w:344,hl:[1,2],hc:TEAL});
    hans(180,525,1.25,{t,rim:'#ffd9a0',head:.03*Math.sin(t*2)});
    if(t>E.coment-.1){const k=eb(PA(t,E.coment-.1,E.coment+.35));tr(180,300,k,0,()=>{rr(-130,-22,260,44,22);ctx.fillStyle='#fff';ctx.fill();txt('COMENTA TU RESPUESTA',0,0,18,'#a0281e',{wt:'900'})})}
    if(t>E.sig-.1)tag('SÍGUEME PARA MÁS',180,502,18,RED,'#fff',t,E.sig-.05);
  }
}
boot([s0,s1,s2,s3,s4,s5,s6,s7],TRS,{cap:{acc:'#ffcf5a'}});
