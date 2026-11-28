// ===== 28 · Sargento Reckless — escenas =====
const T0=T;
const PA=(t,a,b)=>win(t,a,b);
const pulse=(t,ts)=>{const u=t-ts;return u<0||u>.22?0:Math.sin(u/.22*Math.PI)};
// ---------- fondo: Corea al atardecer entre humo y bengalas ----------
function corea(t,gl,fl){bg('#17120e',mixc('#6a3320','#c0592a',gl||0));stars(t,16,5,.3);
  ridge(310,'#2a2a1c',3,46);ridge(362,'#1e2216',8,30);
  for(let i=0;i<3;i++){const ph=(t*.12+i*.33)%1,fx=50+i*130+Math.sin(t*.8+i)*10,fy=40+ph*230;glow(fx,fy,58,'rgba(255,215,150,'+((1-ph)*.55*(fl||0))+')',1);circ(fx,fy,2.2,'rgba(255,245,220,'+(1-ph)*(fl||0)+')')}
  rect0(0,478,360,200,MUD);rect0(0,478,360,2,'rgba(255,200,120,.3)');
  for(let r=0;r<4;r++){rect0(0,490+r*16,360,2,'rgba(150,180,110,'+(.12+.04*r)+')')}
  for(let i=0;i<12;i++)rect0(((i*57+r0(i))%360),486+(i%4)*16,16+(i%3)*6,2,'rgba(255,220,160,.12)')}
function r0(i){return (R(i+31)*40)|0}
const clothN=(x,y,s,n)=>tr(x,y,s,0,()=>{rr(-15,-11,30,22,3);ctx.fillStyle='#fff';ctx.fill();txt(n,0,1,16,'#14100a',{wt:'900'})});
// ---------- S0 · gancho ----------
function s0(t,u){
  corea(t,.35,.6);dust(t,22,'rgba(255,200,140,',4,10,1.6,.3);
  reck(180,505,2.1,{ph:t*8,t,head:.04*Math.sin(t*4),rim:'#ffd9a0'});
  if(t<E.sargento0)clothN(174,388,1.2,'7');
  TX('UNA YEGUA DE CARRERAS',180,66,22,'#fff',t,-.6,{out:E.sargento0-.1,w:344,hl:[1],hc:ORG});
  if(t>E.sargento0-.05){const q=eb(PA(t,E.sargento0-.05,E.sargento0+.4));chev(180,185,1.6*q,3);shock(180,185,t,E.sargento0,GOLD,140,5,.6);burst(180,185,t,E.sargento0,[GOLD,'#fff',ORG],18,150,.8,3);
    TX('SARGENTO',180,66,34,'#fff',t,E.sargento0-.05,{hl:[0],hc:GOLD,out:E.marines0-.1})}
  if(t>E.marines0-.05)TX('DE LOS MARINES',180,66,28,'#fff',t,E.marines0-.05,{w:344,hl:[2],hc:GOLD});
  if(t>E.chiste-.05)stampBox('¡NO FUE UN CHISTE!',180,255,24,ORG,t,E.chiste,-.08);
}
// ---------- S1 · Corea 1952: el joven, la hermana y la venta ----------
function s1(t,u){
  corea(t,.15,.2);
  reck(105,505,1.7,{t,head:.03*Math.sin(t*2),rim:'#ffd9a0'});clothN(103,413,1.1,'7');
  const off=t>E.teniente-.1,pj=eb(PA(t,E.joven-.2,E.joven+.3));
  if(pj>0){person(255,505,1.9,{flip:true,robe:off?'#55683a':'#7a6a4a',hair:'#14100a',al:pj,arm:t>E.vendio&&t<E.doscientos+1?-1.1:0});
    if(off)tr(255,385,1.9,0,()=>{ctx.fillStyle='#4a5a2a';ctx.beginPath();ctx.arc(0,-2,9.2,Math.PI,TAU);ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=1.4;ctx.stroke()})}
  if(t>E.hermana-.1){const q=eb(PA(t,E.hermana-.1,E.hermana+.35));person(318,520,1.45*q,{flip:true,robe:'#a06a7a',hair:'#14100a'})}
  if(t>E.pierna-.1&&t<E.vendio-.2){const q=eb(PA(t,E.pierna-.1,E.pierna+.4));leg(180,285,1.6,q)}
  if(t>E.mina-.05&&t<E.vendio-.2){shock(180,330,t,E.mina,RED,120,5,.6);burst(180,330,t,E.mina,[ORG,GOLD,RED],22,150,.9,3);glow(180,330,60*(1-PA(t,E.mina,E.mina+.5)*.5),'rgba(255,150,60,.7)',1)}
  TX('COREA · 1952',180,66,28,'#fff',t,T0[1]-.05,{out:E.joven-.1,hl:[2],hc:ORG});
  if(t>E.joven-.05&&t<E.pierna-.1)TX('UN JOVEN NECESITABA DINERO',180,66,20,'#fff',t,E.joven-.05,{w:344,hl:[3],hc:GOLD});
  if(t>E.pierna-.05&&t<E.mina-.1)TX('UNA PIERNA PARA SU HERMANA',180,66,20,'#fff',t,E.pierna-.05,{w:344,hl:[1,4],hc:GOLD});
  if(t>E.mina-.05&&t<E.vendio-.1)TX('PERDIÓ LA SUYA EN UNA MINA',180,66,20,'#fff',t,E.mina-.05,{w:344,hl:[4,5],hc:RED});
  if(t>E.vendio-.05&&t<E.doscientos-.1)TX('VENDIÓ SU YEGUA',180,66,26,'#fff',t,E.vendio-.05,{w:344,hl:[1],hc:GOLD});
  if(t>E.doscientos-.05){slam('$250',180,190,64,GOLD,t,E.doscientos,{st:INK,sw:10});shock(180,190,t,E.doscientos,GOLD,150,5,.6);burst(180,190,t,E.doscientos,[GOLD,'#fff'],18,140,.8,3)}
  if(t>E.teniente-.05)tag('A UN TENIENTE DE EE. UU.',180,470,19,RED,'#fff',t,E.teniente-.05);
}
// ---------- S2 · el nombre: Reckless, "temeraria", los fusiles temerarios ----------
function s2(t,u){
  corea(t,.25,.4);
  reck(180,505,1.9,{t,head:.03*Math.sin(t*2),rim:'#ffd9a0'});
  if(t>E.fusiles-.1){const q=eb(PA(t,E.fusiles-.1,E.fusiles+.4)),f=PA(t,E.retroceso,E.retroceso+.55);rifle(180,260,1.5*q,f>0&&f<1?f:0);
    if(t>E.retroceso&&t<E.retroceso+.4)glow(60,285,90*(1-PA(t,E.retroceso,E.retroceso+.4)),'rgba(255,170,70,.7)',1)}
  if(t>E.reck-.05&&t<E.fusiles-.15)tag('RECKLESS',180,66,30,ORG,'#14100a',t,E.reck-.05);
  if(t>E.temeraria-.05&&t<E.fusiles-.15)TX('"TEMERARIA"',180,106,26,'#fff',t,E.temeraria-.05,{hl:[0],hc:GOLD});
  if(t>E.fusiles-.05&&t<E.temerarios-.1)TX('FUSILES SIN RETROCESO',180,66,22,'#fff',t,E.fusiles-.05,{w:344,hl:[1,2],hc:ORG});
  if(t>E.temerarios-.05){stampBox('"TEMERARIOS"',180,140,28,GOLD,t,E.temerarios,-.08);burst(180,140,t,E.temerarios,[GOLD,'#fff',ORG],20,150,.8,3);shock(180,140,t,E.temerarios,GOLD,160,5,.6)}
}
// ---------- S3 · el campamento de cascos ----------
function s3(t,u){
  const ex=[E.explosiones,E.explosiones+.3,E.explosiones+.6];
  corea(t,.1+.3*Math.max(...ex.map(e=>pulse(t,e))),.5);
  poly([[0,640],[0,520],[360,380],[360,640]],'#3a4426');line(0,520,360,380,'rgba(255,220,160,.25)',2);
  const cl=PA(t,E.colinas-.2,T0[4]-.1),hx=lerp(105,270,eio(cl)),hy=520-140*(hx/360)+4;
  ctx.save();ctx.translate(hx,hy);ctx.rotate(-.37);reck(0,0,1.6,{ph:cl*30,t,head:.03*Math.sin(t*2),pack:PA(t,E.municion-.1,E.municion+.4),rim:'#ffd9a0'});ctx.restore();
  [[250,330],[300,380],[200,300]].forEach(([x,y],i)=>{const ts=ex[i];if(t>ts&&t<ts+1){shock(x,y,t,ts,ORG,80,4,.5);burst(x,y,t,ts,[ORG,GOLD,'#fff'],18,140,.8,3);glow(x,y,70*(1-(t-ts)),'rgba(255,170,70,.6)',1)}});
  TX('CAMPAMENTO DE CASCOS',180,66,23,'#fff',t,T0[3]-.05,{out:E.asustarse-.1,w:344,hl:[2],hc:ORG});
  if(t>E.asustarse-.05&&t<E.colinas-.1)TX('NO SE ASUSTA CON EXPLOSIONES',180,66,19,'#fff',t,E.asustarse-.05,{w:344,hl:[2,3],hc:GOLD});
  if(t>E.colinas-.05)TX('SUBE COLINAS CON CARGA',180,66,21,'#fff',t,E.colinas-.05,{w:344,hl:[1,2],hc:GOLD});
  if(t>E.municion-.1){const q=eb(PA(t,E.municion-.1,E.municion+.35));crate(185,385,1.4,q)}
}
// ---------- S4 · Outpost Vegas: 51 viajes ----------
function pathP(p){ // p 0..1: base plana -> ladera 45°
  if(p<.35){const q=p/.35;return [lerp(40,150,q),492]}
  const q=(p-.35)/.65,x=lerp(150,330,q);return [x,492-(x-150)*.75]}
function s4(t,u){
  corea(t,.55,1);
  poly([[150,492],[360,334.5],[360,640],[150,640]],'#3a4426');line(150,492,360,334.5,'rgba(255,220,160,.3)',2);
  // proyectiles
  for(let k=0;k<40;k++){const ts=E.chinos+k*.42;if(t>ts&&t<ts+1.1){const x=170+R(k+2)*180,y=300+R(k+9)*180;shock(x,y,t,ts,ORG,60,3,.4);burst(x,y,t,ts,[ORG,GOLD,'#fff'],10,110,.6,2.4);glow(x,y,50*(1-(t-ts)),'rgba(255,170,70,.5)',1)}}
  if(t>E.chinos-.1&&t<E.sube){for(let i=0;i<4;i++){const w=((t-E.chinos)*.6+i*.22)%1;ctx.save();ctx.globalAlpha=Math.min(1,w*5)*(1-w);ctx.fillStyle=RED;ctx.beginPath();ctx.moveTo(340-w*150+i*0,150+i*34+w*130);ctx.lineTo(340-w*150-18,150+i*34+w*130-9);ctx.lineTo(340-w*150-18,150+i*34+w*130+9);ctx.fill();ctx.restore()}}
  // yegua
  let hx,hy,flip=false,rot=0,pk=0,hurt=false;
  if(t<E.sube){hx=60;hy=490;}
  else{const cyc=((t-E.sube)/2.0)%1,p=1-Math.abs(1-2*cyc);flip=cyc>.5;[hx,hy]=pathP(p);rot=p>.35?-.6435*Math.min(1,(p-.35)/.1):0;pk=flip?0:1;hurt=flip&&t>E.heridos-.3}
  ctx.save();ctx.translate(hx,hy+4);ctx.rotate(rot);reck(0,0,1.15,{flip,ph:t*9,t,pack:pk,rim:'#ffd9a0'});
  if(hurt){ctx.save();ctx.translate(0,-76*1.15);ctx.rotate(flip?1.45:-1.45);person(0,0,.8,{robe:'#55683a',hair:'#14100a'});ctx.restore()}
  ctx.restore();
  // textos
  TX('MARZO DE 1953',180,66,28,'#fff',t,T0[4]-.05,{out:E.outpost-.1,hl:[2],hc:ORG});
  if(t>E.outpost-.05&&t<E.chinos-.1)tag('BATALLA DE OUTPOST VEGAS',180,66,17,RED,'#fff',t,E.outpost-.05);
  if(t>E.chinos-.05&&t<E.sube-.1)TX('LOS CHINOS ATACAN LA COLINA',180,66,19,'#fff',t,E.chinos-.05,{w:344,hl:[1,2],hc:RED});
  if(t>E.sube-.05&&t<E.cincuenta-.1)TX('RECKLESS SUBE SOLA',180,66,25,'#fff',t,E.sube-.05,{w:344,hl:[0,2],hc:ORG});
  if(t>E.cincuenta-.05&&t<E.kilos-.15){const n=Math.round(51*eo(PA(t,E.cincuenta,E.cincuenta+1.0)));txt(String(n),180,150,86,ORG,{wt:'900',st:INK,sw:12,sc:1+.08*wob(t-E.cincuenta-1.0,12,4)});
    TX('VIAJES EN UN SOLO DÍA',180,66,21,'#fff',t,E.cincuenta+.5,{w:344,hl:[0,3],hc:GOLD,out:E.kilos-.2})}
  if(t>E.arrozales-.05&&t<E.fuego-.1)tag('ARROZALES Y LADERA EMPINADA',180,470,17,OLV,'#fff',t,E.arrozales-.05);
  if(t>E.fuego-.05&&t<E.kilos-.1)tag('BAJO FUEGO',180,470,22,RED,'#fff',t,E.fuego-.05);
  if(t>E.kilos-.1&&t<E.bajar-.1){slam('+4.000 KG',180,150,50,GOLD,t,E.kilos,{st:INK,sw:10});shock(180,150,t,E.kilos,GOLD,150,5,.6)}
  if(t>E.bajar-.05&&t<E.heridos-.1)TX('AL BAJAR…',180,66,28,'#fff',t,E.bajar-.05,{hl:[1],hc:ORG});
  if(t>E.heridos-.05)tag('¡CARGABA HERIDOS!',180,66,22,RED,'#fff',t,E.heridos-.05);
}
// ---------- S5 · dos heridas y los chalecos ----------
function s5(t,u){
  corea(t,.35,.8);
  const vq=PA(t,E.chalecos+.5,E.chalecos+1.2);
  reck(125,505,1.8,{t,head:.03*Math.sin(t*2),rim:'#ffd9a0',vest:vq});
  if(t>E.heridas){[[118,408],[175,372]].forEach(([x,y],i)=>{const ts=E.heridas+i*.5;if(t>ts){circ(x,y,5,RED);glow(x,y,26,'rgba(255,90,60,.5)',1);if(t<ts+.6){shock(x,y,t,ts,RED,40,3,.5);burst(x,y,t,ts,[RED,ORG,'#fff'],12,100,.6,2.4)}}})}
  const mq=eb(PA(t,E.chalecos-.5,E.chalecos-.1));
  if(mq>0){person(250,505,1.9*mq,{flip:true,robe:'#55683a',hair:'#14100a',arm:-1.3});person(320,515,1.5*mq,{flip:true,robe:'#4a5a2a',hair:'#3a2418',arm:-1.3})}
  if(t>E.chalecos&&vq<1){const w=PA(t,E.chalecos,E.chalecos+.6);[0,1].forEach(i=>{const x=lerp(245+i*60,135,eio(w)),y=lerp(430+i*30,415,eio(w))-Math.sin(w*Math.PI)*50;if(w<1){ctx.fillStyle='#55683a';rr(x-12,y-10,24,20,4);ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=2;ctx.stroke()}})}
  TX('DOS HERIDAS DE METRALLA',180,66,21,'#fff',t,T0[5]-.05,{out:E.siguio-.1,w:344,hl:[1,3],hc:RED});
  if(t>E.siguio-.05&&t<E.chalecos-.1){slam('SIGUIÓ',180,170,52,GOLD,t,E.siguio,{st:INK,sw:10});shock(180,170,t,E.siguio,GOLD,150,5,.6)}
  if(t>E.chalecos-.05&&t<E.protegerla-.1)TX('SUS CHALECOS ANTIBALAS',180,66,21,'#fff',t,E.chalecos-.05,{w:344,hl:[1,2],hc:GRN});
  if(t>E.protegerla-.05)tag('PARA PROTEGERLA',180,470,20,RED,'#fff',t,E.protegerla-.05);
}
// ---------- S6 · ascensos y muerte con honores ----------
function s6(t,u){
  corea(t,.2,.2);
  if(t<E.honores)reck(180,525,1.4,{t,rim:'#ffd9a0',al:1-PA(t,E.murio,E.murio+.6),head:.03*Math.sin(t*2)});
  TX('LA ASCENDIERON',180,66,27,'#fff',t,T0[6]-.05,{out:E.sarg1-.1,hl:[1],hc:GOLD});
  if(t>E.sarg1-.05){const q=eb(PA(t,E.sarg1-.1,E.sarg1+.4)),q2=eb(PA(t,E.primero-.1,E.primero+.4));
    const ho=t>E.honores?1-PA(t,E.honores,E.honores+.5)*.4:1;
    withA(ho,()=>chev(180,t<E.murio?225:200,(t<E.primero?2.2*q:2.2+.15*wob(t-E.primero,12,4)),3,GOLD,t>E.primero-.1?2:0));
    if(t>E.sarg1-.05&&t<E.primero-.1)tag('SARGENTO',180,66,28,RED,'#fff',t,E.sarg1-.05);
    if(t>E.primero-.05&&t<E.murio-.2){tag('SARGENTO PRIMERO',180,66,22,RED,'#fff',t,E.primero-.05);shock(180,240,t,E.primero,GOLD,150,5,.6)}}
  if(t>E.murio-.1&&t<E.honores-.1){slam('1968',180,398,64,'#fff',t,E.murio,{st:INK,sw:10});TX('MURIÓ',180,66,28,'#fff',t,E.murio-.1,{hl:[0],hc:ORG})}
  if(t>E.honores-.1){[90,180,270].forEach((x,i)=>{const q=eb(PA(t,E.honores-.1+i*.08,E.honores+.4+i*.08));if(q>0)person(x,515,1.7*q,{robe:'#55683a',hair:'#14100a',arm:-2.5})});
    TX('HONORES MILITARES',180,66,24,'#fff',t,E.honores-.1,{w:344,hl:[0],hc:GOLD});glow(180,420,140,'rgba(255,207,90,.18)',1)}
}
// ---------- S7 · Medalla Dickin 2016 ----------
function s7(t,u){
  corea(t,.1,.1);
  TX('EN EL AÑO…',180,66,26,'#fff',t,T0[7]-.05,{out:E.dieciseis-.1});
  if(t>E.dieciseis-.05&&t<E.medalla-.15){slam('2016',180,190,78,GOLD,t,E.dieciseis,{st:INK,sw:12});shock(180,190,t,E.dieciseis,GOLD,160,5,.6);
    if(t>E.dieciseis+1.2)TX('A TÍTULO PÓSTUMO',180,66,22,'#fff',t,E.dieciseis+1.2,{w:344,hl:[2],hc:ORG})}
  if(t>E.medalla-.1){const q=spring(t-E.medalla+.1,14,5);rays(180,290,t,14,260,'rgba(255,207,90,',.14,.2);medal(180,300,2.0,Math.min(1.1,q));
    if(t>E.dickin-.1)tag('MEDALLA DICKIN',180,66,26,GOLD,'#14100a',t,E.dickin-.1);
    if(t>E.dickin)burst(180,300,t,E.dickin,[GOLD,'#fff'],20,150,.8,3)}
  if(t>E.premio-.05)TX('EL PREMIO DE GUERRA PARA ANIMALES',180,450,17,'#fff',t,E.premio-.05,{w:344,hl:[5],hc:GOLD});
}
// ---------- S8 · debate ----------
function s8(t,u){
  corea(t,.2,.3);
  reck(180,532,1.2,{t,rim:'#ffd9a0',head:.03*Math.sin(t*2)});
  if(t<E.coment-.2){
    TX('UNA PREGUNTA INCÓMODA',180,66,22,'#fff',t,T0[8]-.05,{out:E.heroina-.2,w:344,hl:[2],hc:ORG});
    if(t>E.heroina-.2){TX('¿HEROÍNA DE GUERRA,',180,66,23,'#fff',t,E.heroina-.15,{w:344,hl:[1],hc:GOLD});TX('O ANIMAL SIN ELEGIR?',180,98,22,'#fff',t,E.animal-.9,{w:344,hl:[1,2],hc:ORG})}
    const lw=eb(PA(t,E.heroina-.3,E.heroina+.3)),rw=eb(PA(t,E.animal-.3,E.animal+.3));
    tr(95,300,lw,0,()=>{rr(-70,-90,140,180,12);ctx.fillStyle='rgba(14,12,8,.82)';ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=3;ctx.stroke();reck(-5,52,1.0,{t,rim:'#ffd9a0'});txt('HEROÍNA',0,-68,22,GOLD,{wt:'900',st:INK,sw:6});txt('★',0,-30,30,GOLD,{wt:'900'})});
    tr(265,300,rw,0,()=>{rr(-70,-90,140,180,12);ctx.fillStyle='rgba(14,12,8,.82)';ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=3;ctx.stroke();txt('?',0,-4,80,ORG,{wt:'900',st:INK,sw:8});txt('SIN ELEGIR',0,-68,19,ORG,{wt:'900',st:INK,sw:6});txt('NADIE LE PREGUNTÓ',0,58,11,'#fff',{wt:'900',st:INK,sw:4})});
    if(t>E.animal)txt('VS',180,300,30,'#fff',{wt:'900',st:INK,sw:7,sc:1+.1*wob(t-E.animal,12,4)});
  }else{
    TX('¿HEROÍNA DE GUERRA,',180,66,24,'#fff',t,E.coment-.5,{w:344,hl:[1],hc:GOLD});TX('O ANIMAL SIN ELEGIR?',180,98,22,'#fff',t,E.coment-.4,{w:344,hl:[1,2],hc:ORG});
    if(t>E.coment-.1){const k=eb(PA(t,E.coment-.1,E.coment+.35));tr(180,290,k,0,()=>{rr(-130,-22,260,44,22);ctx.fillStyle='#fff';ctx.fill();txt('COMENTA TU RESPUESTA',0,0,18,'#a0281e',{wt:'900'})})}
    if(t>E.sig-.1)tag('SÍGUEME PARA MÁS',180,502,18,RED,'#fff',t,E.sig-.05);
  }
}
boot([s0,s1,s2,s3,s4,s5,s6,s7,s8],TRS,{cap:{acc:'#ff9a3c'}});
