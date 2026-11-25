// ===== 25 · Greyfriars Bobby — escenas =====
const T0=T;
// ---------- S0 · gancho: el perro sobre la tumba, y un segundo perro fantasma ----------
function s0(t,u){
  const gy=500;
  bg('#070c1a','#27375a');starfield(t,40,5,.8);moon(285,140,26,t);
  castle(90,gy-30,.9,'#0a0f1c');
  railing(gy-2,'#05080f',0,360);fog(t,gy-70,'rgba(150,170,205,',.22);
  rect0(0,gy,360,200,'#0c1612');rect0(0,gy,360,2,'rgba(150,180,220,.35)');
  tomb(110,gy+2,1.55,{col:'#7d8798'});mound(190,gy+3,130,16,'#16231c');
  const br=Math.sin(t*2.2)*.6;
  terrier(190,gy+2,1.7,{sit:1,rim:'#c8d6f0',t,wag:.4,col:'#6b7388'});
  const gh=win(t,E.solo,E.solo+.5);
  if(gh>0)withA(.5*gh*(1-.15*Math.sin(t*5)),()=>terrier(lerp(330,285,eo(gh)),gy+2,1.5,{sit:1,flip:true,col:'#9fb2e0',dark:'#6a7ab0',rim:'#fff'}));
  if(t>E.perro5)txt('?',285,gy-185,72,AMB,{wt:'900',st:INK,sw:9,sc:1+.1*wob(t-E.perro5,10,4)});
  TX('UN PERRO PASÓ',180,66,26,'#fff',t,-.6,{out:E.catorce-.1,hl:[2],hc:AMB});
  if(t>E.catorce&&t<E.solo-1.0){slam('14 AÑOS',180,140,62,AMB,t,E.catorce,{st:INK,sw:10});shock(180,140,t,E.catorce,AMB,150,5,.6)}
  if(t>E.tumba0-.05&&t<E.solo-1.0)tag('SOBRE UNA TUMBA',180,235,22,RED,'#fff',t,E.tumba0-.05);
  if(t>E.solo-.95)TX('¿Y SI NO FUE UN SOLO PERRO?',180,120,24,'#fff',t,E.solo-.95,{w:330,hl:[4,5],hc:AMB});
}
// ---------- S1 · Edimburgo 1858: muere Gray, Bobby no se va ----------
function s1(t,u){
  const gy=480;
  bg('#2b2438','#e8a05a');sunO(250,300,30,t,.55);
  castle(250,gy-12,1.15,'#1a1626');
  ctx.fillStyle='#17121f';ctx.beginPath();ctx.moveTo(-10,gy);ctx.lineTo(-10,gy-60);for(let x=-10;x<=370;x+=24)ctx.lineTo(x,gy-60-((x/24|0)%3)*14-8);ctx.lineTo(370,gy);ctx.fill();
  rect0(0,gy,360,200,'#1c1722');for(let i=0;i<12;i++)rect0(i*32-((t*3)%32),gy+4+((i*7)%3)*3,24,2,'rgba(255,255,255,.07)');
  lamp(46,gy,1.2,t);
  // John Gray (vigilante): camina, se detiene, cae
  const px=lerp(-40,130,eo(win(t,T0[1],E.muere-.3))),fall=eb(win(t,E.muere,E.muere+.5)),fa=1-win(t,E.muere+.5,E.muere+1.4);
  if(fa>0)tr(px,gy+6,1.8,1.45*fall,()=>person(0,0,1,{robe:'#27324a',hat:'cap',lant:1,ph:t<E.muere-.3?t*7:0,al:fa}));
  if(t>E.entierran-.2){const q=eo(win(t,E.entierran-.2,E.entierran+.5));mound(235,gy+4,120,12*q,'#2a2f26');tomb(235,gy+4+(1-q)*90,1.3,{col:'#8a93a4'})}
  if(t>E.bobby1-.6){const bx=lerp(-60,168,eo(win(t,E.bobby1-.6,E.nosevaa-.2))),mv=t<E.nosevaa-.2;
    terrier(bx,gy+6,1.45,{ph:mv?t*10:0,sit:mv?0:1,rim:'#ffd9a0',t,wag:mv?0:.3})}
  TX('EDIMBURGO',180,66,30,'#fff',t,T0[1]+.0,{out:E.n1858-.15,hl:[0],hc:AMB});
  if(t>E.n1858&&t<E.muere-.1){slam('1858',180,66,56,AMB,t,E.n1858,{st:INK,sw:9})}
  if(t>E.muere-.05&&t<E.greyfriars-.1)TX('MUERE JOHN GRAY',180,66,24,'#fff',t,E.muere-.05,{w:340,hl:[1,2],hc:AMB});
  if(t>E.greyfriars-.05&&t<E.bobby1-.2)TX('CEMENTERIO DE GREYFRIARS',180,66,20,'#fff',t,E.greyfriars-.05,{w:344,hl:[2],hc:AMB});
  if(t>E.bobby1-.2)TX('SU PERRO, BOBBY',180,66,26,'#fff',t,E.bobby1-.2,{hl:[2],hc:AMB});
  if(t>E.nosevaa-.05){tag('NO SE VA',180,470,24,RED,'#fff',t,E.nosevaa-.05);shock(168,gy-30,t,E.nosevaa,AMB,90,3,.5)}
}
// ---------- S2 · el guarda, el refugio y el cañón de la una ----------
function s2(t,u){
  const gy=490;
  bg('#5c6f8c','#dcd3c2');
  for(let i=0;i<6;i++)tomb(20+i*66,gy-30+(i%2)*10,.8+(i%3)*.1,{col:'#566074'});
  fog(t,gy-50,'rgba(220,225,235,',.3);
  rect0(0,gy,360,200,'#34463f');rect0(0,gy,360,2,'rgba(255,255,255,.3)');
  tomb(70,gy+2,1.5,{col:'#8a93a4'});mound(130,gy+3,110,14,'#27382f');
  shelter(250,gy+2,1.5,eb(win(t,E.refugio-.1,E.refugio+.4)));
  // el perro: junto a la tumba → al refugio; corre a comer a la una y vuelve
  let dx=150,fl=false,ph=0,sit=1;
  const mv1=win(t,E.refugio+.3,E.leyenda2-.3),run=win(t,E.canon+.35,E.comer+.9),back=win(t,E.volvia-.2,E.volvia+1.1);
  dx=lerp(150,250,eio(mv1));
  if(t>E.canon+.35&&t<E.volvia-.2){dx=lerp(250,325,eio(run));fl=false;ph=t*11;sit=0}
  if(t>=E.volvia-.2){dx=lerp(325,255,eio(back));fl=true;ph=back<1?t*11:0;sit=back<1?0:1}
  if(mv1>0&&mv1<1){ph=t*9;sit=0}
  terrier(dx,gy+6,1.45,{ph,sit,flip:fl,rim:'#fff',t,wag:.3,coll:0});
  if(t>E.comer-.1)bowl(lerp(330,330,1),gy+4,1.4);
  // el guarda con escoba
  const gx=lerp(400,215,eo(win(t,E.guarda-.5,E.guarda+.4)))+lerp(0,160,ei(win(t,E.refugio-.3,E.refugio+.5)));
  const sw=t>E.guarda&&t<E.refugio-.2?Math.sin((t-E.guarda)*7)*.45:0;
  if(gx<390)person(gx,gy+8,1.7,{robe:'#5a6a3a',hat:'cap',flip:true,broom:1,arm:-.5+sw,ph:t<E.guarda+.4?t*8:0});
  if(t>E.guarda&&t<E.refugio-.2){const k=((t-E.guarda)*1.6)%1;if(Math.floor((t-E.guarda)*1.6)<4)txt('¡FUERA!',gx-40,gy-170-k*10,18,'#fff',{wt:'900',st:INK,sw:5,a:1-k*.6})}
  if(t>E.leyenda2+.2){clock1(300,150,32);}
  if(t>E.canon){cannon(60,gy-250,1.1);const u2=t-E.canon;glow(100,gy-275,90*Math.exp(-u2*3),'rgba(255,230,160,.9)');burst(100,gy-275,t,E.canon,['#ffd166','#ff8a3a','#fff'],14,140,.7,3);shock(100,gy-275,t,E.canon,'#fff',110,4,.5);smoke(100,gy-275,t,E.canon,22,'220,220,230',1.6)}
  TX('EL GUARDA LO ECHABA',180,66,23,'#14202a',t,T0[2]+.05,{out:E.refugio-.6,w:344,hl:[1],hc:RED,stroke:'rgba(255,255,255,.9)'});
  if(t>E.refugio-.2)TX('LE HIZO UN REFUGIO',180,66,23,'#14202a',t,E.refugio-.2,{out:E.leyenda2-.6,w:344,hl:[3],hc:RED,stroke:'rgba(255,255,255,.9)'});
  if(t>E.leyenda2-.2)TX('SEGÚN LA LEYENDA',180,66,24,'#14202a',t,E.leyenda2-.2,{out:E.canon-.1,hl:[2],hc:RED,stroke:'rgba(255,255,255,.9)'});
  if(t>E.canon)stampBox('¡LAS 13:00!',200,300,30,RED,t,E.canon,-.08);
}
// ---------- S3 · 1867: ley de licencias, el alcalde paga ----------
function s3(t,u){
  bg('#efe5ca','#c9b88f');rays(180,330,t,14,520,'rgba(255,255,255,.22)',1,.08,3);
  const gy=490;rect0(0,gy,360,200,'#7a6a48');rect0(0,gy,360,3,'#4a3e28');
  TX('EN',180,66,26,'#2a1a10',t,T0[3]+.0,{out:E.n1867-.1,stroke:'rgba(255,255,255,.9)'});
  if(t>E.n1867-.05){slam('1867',180,135,70,RED,t,E.n1867,{st:INK,sw:10});shock(180,135,t,E.n1867,RED,150,5,.6)}
  if(t>E.ley-.05&&t<E.licencia-.1)TX('UNA NUEVA LEY',180,215,24,'#2a1a10',t,E.ley-.05,{hl:[2],hc:RED,stroke:'rgba(255,255,255,.9)'});
  const lq=eb(win(t,E.licencia-.1,E.licencia+.35)),lf=1-win(t,E.collar-.1,E.collar+.25);
  if(lq>0&&lf>0)withA(lf,()=>licence(205,330,1.35*lq,t));
  // alcalde con sombrero de copa y cadena
  const ax=lerp(-60,62,eo(win(t,E.alcalde-.6,E.alcalde+.3)));
  if(t>E.alcalde-.6)person(ax,gy+8,1.9,{robe:'#3a2a50',hat:'top',chain:1,arm:t>E.pago-.1?-1.0:0,ph:t<E.alcalde+.3?t*8:0});
  if(t>E.alcalde-.05&&t<E.collar)TX('EL ALCALDE PAGA',180,66,24,'#2a1a10',t,E.alcalde-.05,{hl:[1],hc:RED,stroke:'rgba(255,255,255,.9)'});
  if(t>E.pago){const q=win(t,E.pago,E.pago+.55);if(q<1)coin(lerp(95,205,eio(q)),lerp(380,330,q)-Math.sin(q*Math.PI)*60,9,t*14);else stampBox('¡PAGADA!',205,400,24,'#2e9e4a',t,E.pago+.55,-.1)}
  terrier(300,gy+6,1.3,{sit:1,rim:'#fff',t,wag:.5,coll:t>E.collar?1:0});
  if(t>E.collar-.1){const q=eb(win(t,E.collar-.1,E.collar+.35));collarTag(180,330,1.3*q,t);for(let i=0;i<5;i++){const w=((t-E.collar)*1.1+i*.2)%1;heart(120+i*30,250-w*70,1.3,'#e0484e',1-w)}}
}
// ---------- S4 · murió 1872 · baronesa · fuente ----------
function s4(t,u){
  const gy=480;
  bg('#1e1a36','#e08a5a');sunO(90,300,34,t,.8);
  ctx.fillStyle='#120f20';ctx.beginPath();ctx.moveTo(-10,gy);for(let x=-10;x<=370;x+=30)ctx.lineTo(x,gy-100-((x/30|0)%4)*22);ctx.lineTo(370,gy);ctx.fill();
  for(let i=0;i<10;i++)if(R(i+4)>.4)rect0(12+i*36,gy-90-(i%3)*18,6,8,'rgba(255,210,120,'+(.5+.3*Math.sin(t*3+i))+')');
  rect0(0,gy,360,200,'#251f33');rect0(0,gy,360,3,'rgba(255,200,140,.4)');
  lamp(36,gy,1.3,t);lamp(326,gy,1.3,t);
  // el perro se desvanece y sube una luz
  const dg=1-win(t,E.murio,E.murio+1.3);
  if(dg>0)terrier(110,gy+6,1.6,{sit:1,al:dg,rim:'#ffd9a0',t});
  if(t>E.murio){const q=win(t,E.murio,E.murio+1.6);sparks(110,gy-80-q*80,t,E.murio,8,'#ffe9b0',40,1.4,-20);glow(110,gy-90-q*120,40*(1-q),'rgba(255,230,170,.5)')}
  const fq=eb(win(t,E.fuente-.1,E.fuente+.45));
  if(fq>0)fountain(120,gy+4,2.1*fq,t,1);
  if(t>E.estatua)glow(120,gy-150,70*(1-.3*Math.sin(t*6)),'rgba(255,230,170,'+(.35*win(t,E.estatua,E.estatua+.4))+')');
  const lx=lerp(420,270,eo(win(t,E.baronesa-.5,E.baronesa+.4)));
  if(t>E.baronesa-.5)lady(lx,gy+8,1.8,{flip:true});
  TX('CUANDO MURIÓ',180,66,26,'#fff',t,T0[4]+.0,{out:E.n1872-.1,hl:[1],hc:AMB});
  if(t>E.n1872-.05)slam('1872',180,66,56,AMB,t,E.n1872,{st:INK,sw:9});
  if(t>E.baronesa-.05&&t<E.estatua-.1)TX('UNA BARONESA PAGÓ',180,150,22,'#fff',t,E.baronesa-.05,{w:344,hl:[1],hc:AMB,out:E.fuente-.3});
  if(t>E.fuente-.3&&t<E.calle-.1)TX('UNA FUENTE CON SU ESTATUA',180,150,19,'#fff',t,E.fuente-.3,{w:344,hl:[1,4],hc:AMB});
  if(t>E.calle-.05)tag('SIGUE EN LA CALLE',180,470,20,RED,'#fff',t,E.calle-.05);
}
// ---------- S5 · el giro: dos Bobbys ----------
function s5(t,u){
  const gy=480;
  bg('#0e0818','#2a1240');
  for(let y=0;y<640;y+=6)rect0(0,y,360,1,'rgba(79,209,197,.05)');
  const gl=Math.floor(t*9)%7==0?1:0;
  rect0(0,gy,360,200,'#150d22');rect0(0,gy,360,2,'rgba(79,209,197,.5)');
  TX('PERO HAY UN GIRO',180,66,26,'#fff',t,T0[5]+.0,{out:E.bondeson-.4,hl:[3],hc:TEAL});
  if(t>E.giro&&t<E.bondeson-.15)shock(180,66,t,E.giro,TEAL,160,4,.6);
  if(t>E.bondeson-.1&&t<E.dos2-.1)TX('EL HISTORIADOR',180,66,22,'#fff',t,E.bondeson-.05,{w:344,hl:[1],hc:TEAL});
  if(t>E.bondeson-.1&&t<E.dos2-.1)tag('JAN BONDESON',180,115,24,TEAL,'#0e0818',t,E.bondeson-.05);
  if(t>E.dos2-.1){TX('HUBO DOS',180,66,26,'#fff',t,E.dos2-.1,{out:E.bobbys-.1,hl:[2],hc:TEAL});if(t>E.bobbys-.05)slam('DOS BOBBYS',180,120,44,TEAL,t,E.bobbys,{st:INK,sw:8})}
  // dos perros
  const dq=eb(win(t,E.dos2,E.dos2+.5));
  const d1a=1-win(t,E.murio5+.1,E.murio5+.9),mv=eio(win(t,E.otro,E.lugar+.1));
  if(dq>0){
    if(d1a>0){withA(d1a,()=>{terrier(105,gy+6,1.6*dq,{sit:1,col:'#b39a62',dark:'#7a6a40',rim:'#ffe9b0',t});tr(105,gy-170,Math.max(.01,dq),0,()=>{circ(0,0,15,TEAL,INK,3);txt('1',0,1,20,'#0e0818',{wt:'900'})})})}
    const d2x=lerp(255,105,mv);
    terrier(d2x,gy+6,1.6*dq,{sit:1,flip:mv<1,col:'#4a4f5c',dark:'#2a2e38',rim:'#c8e0ff',t});
    tr(d2x,gy-170,Math.max(.01,dq),0,()=>{circ(0,0,15,AMB,INK,3);txt('2',0,1,20,'#0e0818',{wt:'900'})});
  }
  if(t>E.murio5){const q=eb(win(t,E.murio5,E.murio5+.3));tr(105,gy-80,q,.2,()=>{txt('✝',0,0,60,'#fff',{wt:'900',st:INK,sw:6,a:.9})})}
  if(t>E.murio5-.05&&t<E.otro-.1)TX('EL PRIMERO MURIÓ',180,215,20,'#fff',t,E.murio5-.05,{w:344,hl:[2],hc:TEAL,out:E.n1867b+1.2});
  if(t>E.n1867b-.05&&t<E.otro-.1)slam('≈ 1867',130,270,36,AMB,t,E.n1867b,{st:INK,sw:8});
  if(t>E.otro-.05)tag('OTRO PERRO OCUPÓ SU LUGAR',180,470,16,AMB,'#0e0818',t,E.otro-.05);
}
// ---------- S6 · multitud y ganancia ----------
function s6(t,u){
  const gy=490;
  bg('#3a1f10','#f0a24a');rays(180,360,t,16,520,'rgba(255,230,160,.18)',1,.1,3);
  rect0(0,gy,360,200,'#24150c');rect0(0,gy,360,3,'rgba(255,220,150,.5)');
  // la tumba y el perrito pequeño, rodeados de visitantes
  tomb(90,gy+2,.9,{col:'#8a93a4'});terrier(150,gy+4,.95,{sit:1,rim:'#ffe0a0',t,wag:.5,coll:1});
  const g=eo(win(t,E.historia,E.visitantes+.8));
  crowd(-10,50,gy+4,5,t,3,'#0c0806',g);crowd(190,300,gy+4,Math.round(2+6*g),t,9,'#0c0806',g);
  // cafetería: toldo y rótulo (sin marca)
  const cq=eb(win(t,E.alguien-.2,E.alguien+.35));
  if(cq>0)tr(300,gy,cq,0,()=>{rect0(-44,-110,88,110,'#5a2e18');rect0(-50,-124,100,18,RED);for(let i=0;i<5;i++)rect0(-50+i*20,-124,10,18,'#f1ead6');rect0(-18,-70,36,70,'#2a1608');rect0(-36,-98,72,20,'#f1ead6');txt('CAFÉ',0,-88,15,'#5a2e18',{wt:'900'})});
  if(t>E.visitantes){for(let i=0;i<7;i++){const q=((t-E.visitantes)*.9+i*.15)%1;coin(lerp(150,300,q),gy-80-Math.sin(q*Math.PI)*80+i*3,6,t*10+i)}}
  if(t>E.ganando){burst(300,gy-130,t,E.ganando,[AMB,'#fff','#ffd166'],26,150,.9,3);shock(300,gy-130,t,E.ganando,AMB,130,5,.6)}
  TX('LA HISTORIA ATRAJO',180,66,22,'#fff',t,T0[6]+.0,{out:E.visitantes+.3,w:344,hl:[2],hc:AMB});
  if(t>E.visitantes-.1)TX('MÁS Y MÁS VISITANTES',180,66,22,'#fff',t,E.visitantes-.1,{w:344,hl:[2],hc:AMB,out:E.alguien-.1});
  if(t>E.alguien-.05&&t<E.ganando-.1)txt('¿QUIÉN?',180,200,40,'#fff',{wt:'900',st:INK,sw:8,sc:1+.1*wob(t-E.alguien,10,4)});
  if(t>E.ganando-.1)stampBox('¡SALIÓ GANANDO!',180,200,26,AMB,t,E.ganando-.1,-.08);
}
// ---------- S7 · debate ----------
function s7(t,u){
  bg('#0f1724','#1b2a46');rays(180,320,t,14,500,'rgba(255,200,87,.12)',1,.1,3);starfield(t,22,2,.5);
  TX('¿LEALTAD DE VERDAD,',180,66,23,'#fff',t,T0[7]+.0,{w:344,hl:[1],hc:AMB});
  TX('O TRUCO PUBLICITARIO?',180,98,23,'#fff',t,E.truco-.5,{w:344,hl:[1,2],hc:RED});
  const lw=eb(win(t,E.lealtad,E.lealtad+.5)),rw=eb(win(t,E.truco-.3,E.truco+.3));
  tr(95,330,lw,0,()=>{rr(-70,-80,140,160,12);ctx.fillStyle='rgba(8,12,22,.82)';ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=3;ctx.stroke();terrier(-4,56,1.1,{sit:1,rim:'#c8d6f0',t,wag:.6,coll:1});heart(34,-34,3,'#e0484e');txt('LEALTAD',0,-100,22,'#fff',{wt:'900',st:INK,sw:6})});
  tr(265,330,rw,0,()=>{rr(-70,-80,140,160,12);ctx.fillStyle='rgba(8,12,22,.82)';ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=3;ctx.stroke();terrier(-4,56,1.1,{sit:1,col:'#4a4f5c',dark:'#2a2e38',rim:'#c8d6f0',t});coin(34,-30,16,t*6);coin(16,-44,10,t*6+1);txt('TRUCO',0,-100,22,RED,{wt:'900',st:INK,sw:6})});
  if(t>E.truco)txt('VS',180,330,30,'#fff',{wt:'900',st:INK,sw:7,sc:1+.1*wob(t-E.truco,12,4)});
  if(t>E.coment-.1){const k=eb(win(t,E.coment-.1,E.coment+.35));tr(180,455,k,0,()=>{rr(-130,-22,260,44,22);ctx.fillStyle='#fff';ctx.fill();txt('COMENTA TU RESPUESTA',0,0,18,'#c0392b',{wt:'900'})})}
  if(t>E.sig-.1)tag('SÍGUEME PARA MÁS',180,502,18,RED,'#fff',t,E.sig-.05);
}
boot([s0,s1,s2,s3,s4,s5,s6,s7],TRS,{cap:{acc:'#ffc857'}});
