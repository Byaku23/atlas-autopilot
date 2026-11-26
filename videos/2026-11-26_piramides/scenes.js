// ===== 27 · Pirámides: ¿esclavos? — escenas =====
const T0=T;
const PA=(t,a,b)=>win(t,a,b);
const W=(x,y,s,o)=>person(x,y,s,Object.assign({hat:'none'},o));
// ---------- S0 · gancho ----------
function s0(t,u){
  bg('#2a1f5a','#f4a85c');stars(t,40,3,.5);sunO(250,330,34,t,.9);
  sunBeam(250,330,t,12,520,.05);
  dunes(470,'#7a4a3a',1,10);pyramid(95,470,130,92,{lit:'#c98a52',dark:'#8a5236'});pyramid(270,470,110,78,{lit:'#c98a52',dark:'#8a5236'});
  const z=1+.04*Math.min(t,5.4)/5.4;ctx.save();ctx.translate(180,470);ctx.scale(z,z);ctx.translate(-180,-470);
  pyramid(180,490,300,214,{rows:18,rim:'rgba(255,230,160,.7)'});ctx.restore();
  dunes(500,'#b9763e',4,8);dunes(540,'#8a5028',2,6);
  dust(t,22,'rgba(255,220,150,',5,10,2,.3);
  TX('LAS CONSTRUYERON',180,62,26,'#fff',t,-.6,{out:E.escl-.1,w:340,hl:[1],hc:GOLD});
  if(t>E.escl-.05&&t<E.falso-.1){slam('¿ESCLAVOS?',180,110,40,GOLD,t,E.escl,{st:INK,sw:10});shock(180,110,t,E.escl,GOLD,150,5,.6)}
  if(t>E.verdad-.1&&t<E.falso-.1)txt('¿verdad?',180,190,24,'#fff',{wt:'900',st:INK,sw:6,a:cl((t-E.verdad)*6)});
  if(t>=E.falso-.05){slam('FALSO',180,170,60,RED,t,E.falso,{st:INK,sw:12});shock(180,170,t,E.falso,RED,170,6,.7);
    withA(.95,()=>{stampBox('CASI SEGURO',180,255,22,RED,t,E.falso+.15,-.06)})}
}
// ---------- S1 · Heródoto y los cien mil ----------
function s1(t,u){
  const gy=500;bg('#1a2450','#6a76b0');stars(t,30,7,.5);moon(290,120,20,t);
  rect0(0,gy,360,200,'#3a3a60');rect0(0,gy,360,3,'rgba(255,255,255,.25)');
  column(30,gy,260);column(330,gy,260);rect0(10,gy-272,340,12,'#efe6cc');
  // Heródoto
  const hx=lerp(-60,92,eo(PA(t,T0[1],E.griego+.2)));
  W(hx,gy+10,2.0,{robe:'#efe6cc',hair:'#6a5a4a',ph:t<E.griego+.3?t*8:0,arm:t>E.cien-.2&&t<E.gran?-1.6:0});
  rect0(hx-16,gy-98,32,5,'#4a7a3a'); // corona de laurel
  // papiro con número
  const sq=eb(PA(t,E.cien-.3,E.cien+.3));
  if(sq>0&&t<E.dosmil+.6)scroll(236,300,170,200,t,.04,'#efdcae');
  if(t>E.cien-.1&&t<E.dosmil+.6){const v=countV(0,100000,t,E.cien,.9);txt(fmtN(v,0),236,280,27,'#7a2418',{wt:'900',a:1});txt('HOMBRES',236,314,16,'#7a2418',{wt:'900'})}
  if(t>E.veinte-.1&&t<E.dosmil+.6){const q=eb(PA(t,E.veinte-.1,E.veinte+.3));tr(236,368,q,0,()=>{txt('× 20 AÑOS',0,0,22,'#7a2418',{wt:'900'})})}
  // textos
  TX('UN GRIEGO',180,66,25,'#fff',t,T0[1]+.0,{out:E.herodoto-.1,w:344,hl:[1],hc:GOLD});
  if(t>E.herodoto-.05&&t<E.cien-.1)tag('HERÓDOTO',180,66,26,RED,'#fff',t,E.herodoto-.05);
  if(t>E.cien-.1&&t<E.visito-.1)TX('LA GRAN PIRÁMIDE',180,66,22,'#fff',t,E.gran-.05+0*1,{w:344,hl:[1,2],hc:GOLD});
  if(t>E.visito-.1&&t<E.dosmil-.1)TX('VISITÓ EGIPTO',180,66,24,'#fff',t,E.visito-.1,{w:344,hl:[1],hc:GOLD});
  if(t>E.dosmil-.05){slam('+2.000 AÑOS',180,66,40,GOLD,t,E.dosmil,{st:INK,sw:9});shock(180,66,t,E.dosmil,GOLD,150,5,.6)}
  if(t>E.dosmil+.35)tag('2.000 AÑOS DESPUÉS',180,470,20,RED,'#fff',t,E.dosmil+.35);
  if(t>E.repetia-.05){for(let i=0;i<3;i++){const w=((t-E.repetia)*.9+i*.33)%1;txt('…',hx+30+i*24,gy-150-w*60,28,'#fff',{wt:'900',st:INK,sw:5,a:1-w})}}
}
// ---------- S2 · la ciudad de los obreros ----------
function s2(t,u){
  const gy=500;bg('#78b8d8','#f6dca4');
  pyramid(250,gy-30,210,150,{rows:14,rim:'rgba(255,240,190,.6)'});
  dunes(gy-10,'#d6a45e',2,8);rect0(0,gy,360,200,'#c8964e');rect0(0,gy,360,3,'rgba(255,255,255,.35)');
  // barracones
  const hq=eb(PA(t,E.barrac-.1,E.barrac+.45));
  for(let i=0;i<4;i++){const q=eb(PA(t,E.barrac-.1+i*.08,E.barrac+.4+i*.08));if(q>0)hut(40+i*62,gy+6+(i%2)*4,1.0*q)}
  // hornos con pan
  const oq=eb(PA(t,E.panad-.1,E.panad+.4));
  if(oq>0){oven(250,gy+30,1.9*oq,t);if(t>E.panad)for(let i=0;i<3;i++){const w=((t-E.panad)*.8+i*.33)%1;bread(236+i*14,gy-80-w*60,1,w*.8)}}
  if(t>E.cocinas-.1){const q=eb(PA(t,E.cocinas-.1,E.cocinas+.4));tr(120,gy+36,q,0,()=>{ctx.fillStyle='#4a2a14';ctx.beginPath();ctx.ellipse(0,0,24,16,0,0,TAU);ctx.fill();ctx.fillStyle='#7a4a24';ctx.beginPath();ctx.ellipse(0,-6,24,8,0,0,TAU);ctx.fill();ctx.fillStyle='#e8a030';ctx.beginPath();ctx.ellipse(0,-6,19,5,0,0,TAU);ctx.fill();
    for(let i=0;i<3;i++){const w=((t*.7)+i*.33)%1;circ(Math.sin(t*3+i)*5,-12-w*34,4+w*4,'rgba(255,255,255,'+(.45*(1-w))+')')}})}
  // obreros caminando
  const wn=t>E.calcula-.2?9:3;for(let i=0;i<wn;i++){const wx=((t*18+i*47)%420)-30;W(wx,gy+60+((i*13)%30),.8+((i%3)*.08),{robe:['#efe6cc','#d9c28a','#c8a060'][i%3],ph:t*7+i,hair:'#2a1a0a'})}
  // textos
  TX('HOY SABEMOS MÁS',180,66,25,'#2a1006',t,T0[2]+.0,{out:E.ciudad-.1,w:344,hl:[2],hc:RED,stroke:'#fff3d0',sw:5});
  if(t>E.ciudad-.05&&t<E.panad-.1){slam('UNA CIUDAD',180,70,46,RED,t,E.ciudad,{st:CRM,sw:9});shock(180,70,t,E.ciudad,RED,150,5,.6)}
  if(t>E.ciudad+.5&&t<E.panad-.1)TX('ENTERA PARA LOS OBREROS',180,128,19,'#2a1006',t,E.ciudad+.5,{w:344,stroke:'#fff3d0',sw:4});
  if(t>E.panad-.05&&t<E.cocinas-.1)tag('PANADERÍAS',180,66,24,RED,'#fff',t,E.panad-.05);
  if(t>E.cocinas-.05&&t<E.barrac-.1)tag('COCINAS',180,66,24,RED,'#fff',t,E.cocinas-.05);
  if(t>E.barrac-.05&&t<E.calcula-.1)tag('BARRACONES',180,66,24,RED,'#fff',t,E.barrac-.05);
  if(t>E.calcula-.1){const v=t<E.treinta?countV(0,20000,t,E.calcula+.3,1.6):countV(20000,30000,t,E.treinta,.6);
    TX('SE CALCULA',180,66,20,'#2a1006',t,E.calcula-.1,{w:344,stroke:'#fff3d0',sw:4});
    tr(180,130,1,0,()=>{txt(fmtN(v,0),0,0,44,RED,{wt:'900',st:CRM,sw:9});txt('PERSONAS',0,34,18,'#2a1006',{wt:'900',st:CRM,sw:4})})}
  if(t>E.treinta)shock(180,130,t,E.treinta,GOLD,120,5,.5);
}
// ---------- S3 · comida y cementerio ----------
function s3(t,u){
  if(t<E.cement-.1){
    bg('#2a1208','#9a4a22');glow(180,300,300,'rgba(255,150,50,.25)');dust(t,18,'rgba(255,200,120,',6,8,2,.3);
    rect0(20,420,320,16,'#6a3a1a');rect0(30,436,10,80,'#4a2a10');rect0(320,436,10,80,'#4a2a10');
    const bq=PA(t,E.pan-.1,E.pan+.4),cq=PA(t,E.cerveza-.1,E.cerveza+.4),mq=PA(t,E.carne-.1,E.carne+.4);
    if(bq>0)for(let i=0;i<4;i++)bread(60+i*30,lerp(150,404,eo(cl(bq*1.2-i*.1))),1.5);
    if(cq>0)for(let i=0;i<2;i++)jar(180+i*44,lerp(150,396,eo(cl(cq*1.2-i*.15))),1.5);
    if(mq>0)meatLeg(290,lerp(150,402,eo(cl(mq*1.2))),1.7,-.3);
    if(t>E.pan)shock(90,410,t,E.pan,GOLD,50,3,.4);if(t>E.cerveza)shock(200,410,t,E.cerveza,GOLD,50,3,.4);if(t>E.carne)shock(290,410,t,E.carne,GOLD,50,3,.4);
    TX('COMÍAN',180,66,26,'#fff',t,T0[3]+.0,{out:E.pan-.05,hl:[0],hc:GOLD});
    if(t>E.pan-.05)tag('PAN',70,100,22,RED,'#fff',t,E.pan-.05);
    if(t>E.cerveza-.05)tag('CERVEZA',180,130,22,RED,'#fff',t,E.cerveza-.05);
    if(t>E.carne-.05)tag('CARNE',286,100,22,RED,'#fff',t,E.carne-.05);
    if(t>E.carne+.3)TX('CASI A DIARIO',180,200,24,'#fff',t,E.carne+.3,{w:344,hl:[1,2],hc:GOLD});
  }else{
    bg('#0e1030','#3a3a7a');stars(t,60,11,.9);
    const hq=PA(t,E.huesos-.1,E.huesos+.3),heal=PA(t,E.sanaron-.1,E.sanaron+.9);
    TX('SU CEMENTERIO',180,66,24,'#fff',t,E.cement-.05,{out:E.huesos-.1,hl:[1],hc:GOLD});
    const sh=t>E.huesos&&t<E.huesos+.4?(Math.random()-.5)*5*(1-(t-E.huesos)/.4):0;
    ctx.save();ctx.translate(sh,0);glow(180,300,200,'rgba(255,240,200,'+(.15+.2*heal)+')');bone(180,300,3,heal>.5?1:0,-.15);ctx.restore();
    if(t>E.huesos-.05&&t<E.sanaron-.1){slam('ROTOS',180,110,52,RED,t,E.huesos,{st:INK,sw:10});shock(180,300,t,E.huesos,RED,120,5,.6)}
    if(t>E.sanaron-.05){slam('SANARON',180,110,48,'#7ae08a',t,E.sanaron,{st:INK,sw:10});shock(180,300,t,E.sanaron,'#7ae08a',140,5,.6);burst(180,300,t,E.sanaron,['#7ae08a','#fff'],14,110,.8,3)}
    if(t>E.alguien-.05&&t<E.curaba)TX('¿QUIÉN LOS CURÓ?',180,470,22,'#fff',t,E.alguien-.05,{w:344,hl:[2],hc:GOLD});
    if(t>E.curaba-.05){tag('ALGUIEN LOS CURABA',180,470,20,RED,'#fff',t,E.curaba-.05);for(let i=0;i<4;i++){const w=((t-E.curaba)*.8+i*.25)%1;heart(130+i*34,390-w*70,1.3,'#e0484e',1-w)}}
  }
}
function heart(x,y,s,col='#e0484e',a=1){ctx.save();ctx.globalAlpha*=a;ctx.translate(x,y);ctx.scale(s,s);ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(0,5);ctx.bezierCurveTo(-12,-4,-6,-12,0,-5);ctx.bezierCurveTo(6,-12,12,-4,0,5);ctx.fill();ctx.restore()}
// ---------- S4 · firmas dentro de la pirámide ----------
function s4(t,u){
  bg('#120c06','#3a2a18');
  for(let r=0;r<10;r++)for(let c=0;c<6;c++){const x=c*66-(r%2)*33,y=40+r*56;ctx.fillStyle=(r+c)%2?'#5a4630':'#4e3c28';ctx.fillRect(x+1,y+1,64,54)}
  const fl=.85+.15*Math.sin(t*9)+.05*Math.sin(t*23);glow(60,90,220,'rgba(255,170,60,'+.28*fl+')');glow(300,90,220,'rgba(255,170,60,'+.28*fl+')');
  // marcas rojas de cuadrilla
  const marks=[[40,150],[290,170],[70,420],[300,400],[200,130],[130,440]];
  marks.forEach(([x,y],i)=>{const q=eb(PA(t,E.firmas+i*.14,E.firmas+.35+i*.14));if(q>0)tr(x,y,q,(i-3)*.08,()=>{ctx.strokeStyle='rgba(200,50,40,.85)';ctx.lineWidth=3;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-10,6);ctx.lineTo(0,-8);ctx.lineTo(10,6);ctx.moveTo(-6,2);ctx.lineTo(6,2);ctx.moveTo(14,-8);ctx.lineTo(14,8);ctx.stroke()})});
  TX('DENTRO DE LA PIRÁMIDE',180,62,22,'#fff',t,T0[4]+.0,{out:E.firmas-.05,w:344,hl:[2],hc:GOLD});
  if(t>E.firmas-.05&&t<E.amigos-.1)tag('FIRMAS PINTADAS',180,62,22,RED,'#fff',t,E.firmas-.05);
  if(t>E.amigos-.1){const q=eb(PA(t,E.amigos-.1,E.amigos+.45));cartouche(180,290,1.5*q,200,80,'AMIGOS DE KHUFU',t,1);shock(180,290,t,E.amigos,GOLD,150,5,.6)}
  if(t>E.esclavo2-.1)TX('¿UN ESCLAVO FIRMARÍA ASÍ?',180,400,24,'#fff',t,E.esclavo2-.1,{w:300,hl:[1],hc:RED});
  if(t>E.asi-.05){slam('?',300,230,60,RED,t,E.asi,{st:INK,sw:10});shock(300,230,t,E.asi,RED,100,5,.5)}
}
// ---------- S5 · papiro de Merer y barcos ----------
function s5(t,u){
  const gy=330;bg('#6ab8e0','#f6dca4');sunO(60,90,18,t,.8);
  // orilla este: cantera de Tura
  rect0(0,gy-40,110,60,'#d8b070');for(let i=0;i<5;i++)block(18+i*18,gy-52+(i%2)*-10,.8,0,'#efe2bf');
  // orilla oeste: pirámide
  pyramid(300,gy,150,106,{rows:10,rim:'rgba(255,240,190,.6)'});rect0(240,gy,120,30,'#d8b070');
  nile(t,gy,'#2a7ea0','#1c5870');
  // barco cruza
  const bx=lerp(-80,260,eio(PA(t,E.barcos-.5,E.caliza+1.8)));
  if(t>E.barcos-.5)barge(bx,gy+76,1.15,t,3);
  // papiro
  const pq=eb(PA(t,E.papiro-.1,E.papiro+.5));
  if(pq>0&&t<E.merer+1.9){tr(100,172,pq,-.06,()=>{scroll(0,0,150,104,t,0,'#ecdcae');txt('2013',0,-6,30,'#7a2418',{wt:'900'})})}
  TX('UN PAPIRO',180,62,24,'#2a1006',t,T0[5]+.0,{out:E.trece-.1,w:344,hl:[1],hc:RED,stroke:CRM,sw:5});
  if(t>E.trece-.05&&t<E.merer-.1){slam('2013',180,62,44,RED,t,E.trece,{st:CRM,sw:9});shock(180,62,t,E.trece,RED,120,5,.5)}
  if(t>E.merer-.05&&t<E.barcos-.1)tag('INSPECTOR MERER',180,62,22,RED,'#fff',t,E.merer-.05);
  if(t>E.barcos-.1&&t<E.caliza-.1)TX('BARCOS CARGADOS',180,62,23,'#2a1006',t,E.barcos-.1,{w:344,hl:[0],hc:RED,stroke:CRM,sw:5});
  if(t>E.caliza-.05&&t<E.espec-.1)tag('PIEDRA CALIZA',180,62,22,RED,'#fff',t,E.caliza-.05);
  if(t>E.espec-.05){slam('ESPECIALISTAS',180,200,38,'#fff',t,E.espec,{st:RED,sw:10});shock(180,200,t,E.espec,GOLD,140,5,.6);tag('ESPECIALISTAS',180,470,20,RED,'#fff',t,E.espec+.05)}
}
// ---------- S6 · pero ojo: reclutados por turnos ----------
function s6(t,u){
  const gy=480;bg('#3a1a14','#c0623a');
  dunes(gy-30,'#7a3a22',3,10);rect0(0,gy,360,200,'#6a3a1e');rect0(0,gy,360,3,'rgba(255,255,255,.2)');
  // trigo
  for(let i=0;i<24;i++){const x=i*15+4,h=26+R(i)*14;line(x,gy,x+Math.sin(t*2+i)*2,gy-h,'#e0b84a',2);circ(x+Math.sin(t*2+i)*2,gy-h,3,'#f0cc60')}
  // campesinos llegan en fila hacia la derecha
  const wq=PA(t,E.campesinos-.1,E.turnos+.6);
  for(let i=0;i<5;i++){const x=lerp(-40-i*50,170+i*36,eo(wq));W(x,gy+24+(i%2)*10,1.4,{robe:'#d9c28a',hair:'#2a1a0a',ph:wq<1?t*8+i:0,hold:''})}
  // contrato tachado
  const cq=eb(PA(t,E.contrato-.1,E.contrato+.4));
  if(cq>0&&t<E.campesinos-.2){tr(180,260,cq,-.05,()=>{scroll(0,0,160,120,t,0,'#efe0b0');txt('CONTRATO',0,-6,22,'#7a2418',{wt:'900'});const x=eb(PA(t,E.contrato+.35,E.contrato+.7));ctx.strokeStyle=RED;ctx.lineWidth=10;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-60,-50*x);ctx.lineTo(-60+120*x,-50+100*x);ctx.moveTo(60,-50);ctx.lineTo(60-120*x,-50+100*x);ctx.stroke()})}
  if(t>E.ojo-.05&&t<E.contrato-.1){slam('¡OJO!',180,70,46,GOLD,t,E.ojo,{st:INK,sw:10});TX('PERO',180,30,18,'#fff',t,T0[6]+.05,{out:E.contrato-.2})}
  if(t>E.contrato-.1&&t<E.campesinos-.1)TX('NO ERAN EMPLEADOS',180,62,22,'#fff',t,E.contrato-.1,{w:344,hl:[2],hc:RED});
  if(t>E.campesinos-.05&&t<E.reclutados-.1)tag('CAMPESINOS',180,62,24,RED,'#fff',t,E.campesinos-.05);
  if(t>E.reclutados-.05&&t<E.turnos-.1)tag('RECLUTADOS',180,62,24,RED,'#fff',t,E.reclutados-.05);
  if(t>E.turnos-.05){tag('POR TURNOS',180,62,24,GOLD,'#2a1006',t,E.turnos-.05);shock(180,62,t,E.turnos,GOLD,120,5,.5);
    for(let i=0;i<3;i++){const q=eb(PA(t,E.turnos+.05+i*.12,E.turnos+.45+i*.12));if(q>0)tr(80+i*100,200,q,0,()=>{rr(-36,-30,72,60,8);ctx.fillStyle=CRM;ctx.fill();ctx.strokeStyle=RED;ctx.lineWidth=3;ctx.stroke();txt('TURNO',0,-12,12,'#7a2418',{wt:'900'});txt(''+(i+1),0,10,26,RED,{wt:'900'})})}}
}
// ---------- S7 · los expertos no se ponen de acuerdo ----------
function s7(t,u){
  bg('#1a1430','#5a3a6a');stars(t,30,5,.5);
  rect0(0,500,360,200,'#2a1a2e');rect0(0,500,360,3,'rgba(255,255,255,.2)');
  // lado izquierdo: obligados
  const lq=eb(PA(t,E.unos-.1,E.unos+.4)),rq=eb(PA(t,E.otros-.1,E.otros+.4));
  tr(90,320,lq,0,()=>{rr(-80,-110,160,230,14);ctx.fillStyle='rgba(8,6,16,.7)';ctx.fill();ctx.strokeStyle=RED;ctx.lineWidth=3;ctx.stroke();
    W(-26,90,1.7,{robe:'#efe6cc',arm:-1.3,hair:'#2a1a0a'});W(34,92,1.5,{robe:'#c8a060',ph:t*6,hair:'#2a1a0a'});
    txt('¡A TRABAJAR!',0,-80,13,GOLD,{wt:'900',st:INK,sw:3})});
  tr(270,320,rq,0,()=>{rr(-80,-110,160,230,14);ctx.fillStyle='rgba(8,6,16,.7)';ctx.fill();ctx.strokeStyle=GOLD,ctx.lineWidth=3;ctx.stroke();
    W(-22,92,1.6,{robe:'#d9c28a',arm:-2.6,hair:'#2a1a0a'});W(32,92,1.6,{robe:'#efe6cc',arm:-2.6,hair:'#2a1a0a'});
    for(let i=0;i<4;i++){const w=((t*.8)+i*.25)%1;heart(-30+i*20,-20-w*50,1.2,GOLD,1-w)}
    txt('¡PRESENTE!',0,-80,13,GOLD,{wt:'900',st:INK,sw:3})});
  TX('UNOS EXPERTOS DICEN',180,62,20,'#fff',t,T0[7]+.0,{out:E.obligaban-.1,w:344,hl:[2],hc:GOLD});
  if(t>E.obligaban-.05&&t<E.otros-.1){slam('OBLIGADOS',90,470,20,RED,t,E.obligaban,{st:INK,sw:7});shock(90,470,t,E.obligaban,RED,90,4,.5)}
  if(t>E.otros-.1)TX('OTROS DICEN',180,62,20,'#fff',t,E.otros-.1,{w:344,hl:[1],hc:GOLD});
  if(t>E.obligaban+.2)txt('OBLIGADOS',90,470,20,RED,{wt:'900',st:INK,sw:7,a:t<E.otros?0:1});
  if(t>E.orgullosos-.05){slam('ORGULLOSOS',272,470,18,GOLD,t,E.orgullosos,{st:INK,sw:7});shock(270,470,t,E.orgullosos,GOLD,90,4,.5)}
  if(t>E.voluntarios-.05){tag('CASI VOLUNTARIOS',180,520,18,GOLD,'#2a1006',t,E.voluntarios-.05);burst(270,300,t,E.voluntarios,[GOLD,'#fff'],14,120,.8,3)}
}
// ---------- S8 · debate ----------
function s8(t,u){
  bg('#1f3f8a','#e8a85a');stars(t,30,13,.4);pyramid(180,420,320,200,{rows:16,rim:'rgba(255,240,190,.5)',lit:'#d9a45e',dark:'#a8683a'});rect0(0,420,360,300,'#7a4a28');
  TX('¿OBLIGADOS',180,66,28,'#fff',t,E.entonces-.1,{w:344,hl:[0],hc:RED});
  TX('U ORGULLOSOS?',180,100,28,'#fff',t,E.orgullosos2-.4,{w:344,hl:[1],hc:GOLD});
  const lw=eb(PA(t,E.obligados,E.obligados+.5)),rw=eb(PA(t,E.orgullosos2-.3,E.orgullosos2+.3));
  tr(95,300,lw,0,()=>{rr(-70,-70,140,140,12);ctx.fillStyle='rgba(8,6,16,.8)';ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=3;ctx.stroke();W(0,56,1.25,{robe:'#c8a060',arm:-1.2,hair:'#2a1a0a'});txt('OBLIGADOS',0,-48,17,RED,{wt:'900',st:INK,sw:5})});
  tr(265,300,rw,0,()=>{rr(-70,-70,140,140,12);ctx.fillStyle='rgba(8,6,16,.8)';ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=3;ctx.stroke();W(0,56,1.25,{robe:'#efe6cc',arm:-2.6,hair:'#2a1a0a'});txt('ORGULLOSOS',0,-48,15,GOLD,{wt:'900',st:INK,sw:5})});
  if(t>E.orgullosos2)txt('VS',180,300,30,'#fff',{wt:'900',st:INK,sw:7,sc:1+.1*wob(t-E.orgullosos2,12,4)});
  if(t>E.coment-.1){const k=eb(PA(t,E.coment-.1,E.coment+.35));tr(180,455,k,0,()=>{rr(-130,-22,260,44,22);ctx.fillStyle='#fff';ctx.fill();txt('COMENTA TU RESPUESTA',0,0,18,'#7a2418',{wt:'900'})})}
  if(t>E.sig-.1)tag('SÍGUEME PARA MÁS',180,502,18,RED,'#fff',t,E.sig-.05);
}
boot([s0,s1,s2,s3,s4,s5,s6,s7,s8],TRS,{cap:{acc:'#ffcf4a'}});
