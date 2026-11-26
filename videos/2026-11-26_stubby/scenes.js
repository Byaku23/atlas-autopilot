// ===== 26 · Sargento Stubby — escenas =====
const T0=T;
const PA=(t,a,b)=>win(t,a,b); // alias corto
// ---------- S0 · gancho: el perro salta a sargento ----------
function s0(t,u){
  const gy=520;
  bg('#3d4328','#e0b878');sunO(262,235,26,t,.55);
  ridge(400,'#4a4a30',3,40);ridge(440,'#3a3a24',9,26);
  sandbags(-10,370,gy-6,2);rect0(0,gy,360,200,MUD);rect0(0,gy,360,2,'rgba(255,230,170,.4)');
  dust(t,26,'rgba(255,230,170,',4,12,2,.3);
  const sq=1+.04*Math.sin(t*2.4);
  terrier(180,gy+6,2.3,{sit:1,rim:'#ffe6b0',t,wag:.5,salute:t>E.sarg-.2?1:0,vest:t>E.sarg+.6?1:0});
  TX('UN PERRO CALLEJERO',180,66,25,'#fff',t,-.6,{out:E.sarg-.1,w:340,hl:[2],hc:BRASS});
  if(t>E.sarg-.05&&t<E.heroe-.1){slam('SARGENTO',180,100,52,BRASS,t,E.sarg,{st:INK,sw:10});shock(180,100,t,E.sarg,BRASS,150,5,.6)}
  const cq=eb(PA(t,E.sarg+.15,E.sarg+.65));if(cq>0&&t<E.heroe-.1)chevrons(180,175,1.2*cq,BRASS);
  if(t>E.eeuu-.05&&t<E.heroe-.1)tag('DEL EJÉRCITO DE EE. UU.',180,300,18,RED,'#fff',t,E.eeuu-.05);
  if(t>E.heroe-.05){TX('¿HÉROE DE GUERRA',180,80,26,'#fff',t,E.heroe-.05,{hl:[1,2],hc:BRASS,w:340})}
  if(t>E.leyenda-.05){slam('¿LEYENDA?',180,150,54,RED,t,E.leyenda,{st:INK,sw:10});shock(180,150,t,E.leyenda,RED,160,5,.6)}
}
// ---------- S1 · Yale 1917: el cachorro, Conroy y el saludo ----------
function s1(t,u){
  const gy=480;
  bg('#8ea0a8','#eadcae');
  // estadio al fondo y tiendas
  ctx.fillStyle='#9a9a86';ctx.beginPath();ctx.moveTo(-20,gy-20);ctx.quadraticCurveTo(180,gy-170,380,gy-20);ctx.lineTo(380,gy);ctx.lineTo(-20,gy);ctx.fill();
  for(let i=0;i<6;i++)line(10+i*58,gy-30-Math.sin(i*.52)*40,10+i*58,gy,'rgba(60,60,50,.3)',2);
  rect0(0,gy,360,200,'#667a3e');rect0(0,gy,360,3,'rgba(255,255,255,.3)');
  tent(46,gy+4,1.2);tent(316,gy+4,1.1,'#7e7e50');tent(110,gy-6,.7,'#8a8a5a');
  // Conroy
  const sa=t>E.pata-.1?-2.4:(t>E.conroy-.1&&t<E.stubby1?-.9:0);
  person(250,gy+10,1.8,{flip:true,arm:sa,hat:'helm'});
  // cachorro
  const run=PA(t,E.cachorro-.35,E.conroy-.6),dx=lerp(-60,160,eo(run)),moving=run>0&&run<1;
  if(t>E.cachorro-.4)terrier(dx,gy+8,1.5,{ph:moving?t*12:0,sit:moving?0:1,rim:'#fff7d8',t,wag:1,salute:t>E.pata-.1?1:0});
  if(t>E.stubby1)for(let i=0;i<4;i++){const w=((t-E.stubby1)*1.1+i*.22)%1;heart(130+i*16,330-w*60,1.3,'#e0484e',1-w)}
  // cola corta (resaltar)
  if(t>E.corta-.1&&t<E.soldados+1.0){const q=eb(PA(t,E.corta-.1,E.corta+.3));ctx.save();glowStroke(BRASS,3,10);ctx.beginPath();ctx.arc(dx-44,gy-54,18*q,0,TAU);ctx.stroke();ctx.restore();tag('COLA CORTA',74,gy-120,17,RED,'#fff',t,E.corta-.05)}
  // cartel prohibido y corneta
  if(t>E.prohib-.1&&t<E.pata-.3){const q=eb(PA(t,E.prohib-.1,E.prohib+.35));noDog(70,280,1.1*q,t);shock(70,280,t,E.prohib,RED,70,4,.5)}
  if(t>E.corneta-.1&&t<E.pata-.1){const q=eb(PA(t,E.corneta-.1,E.corneta+.3));bugle(290,310,1.3*q,-.3+Math.sin(t*14)*.05);for(let i=0;i<3;i++){const w=((t-E.corneta)*1.4+i*.33)%1;txt('♪',250-w*60,300-w*70+i*8,18,BRASS,{wt:'900',st:INK,sw:4,a:1-w})}}
  if(t>E.pata-.1)burst(200,gy-140,t,E.pata,[BRASS,'#fff'],12,100,.7,3);
  // textos
  TX('TODO EMPEZÓ EN',180,66,25,'#fff',t,T0[1]+.0,{out:E.n1917-.1,hl:[2],hc:BRASS});
  if(t>E.n1917-.05&&t<E.campo-.1){slam('1917',180,66,56,BRASS,t,E.n1917,{st:INK,sw:10});shock(180,66,t,E.n1917,BRASS,150,5,.6)}
  if(t>E.campo-.05&&t<E.yale-.1)TX('UN CAMPO DE ENTRENAMIENTO',180,66,20,'#fff',t,E.campo-.05,{w:344,hl:[2],hc:BRASS});
  if(t>E.yale-.05&&t<E.cachorro-.1)tag('UNIVERSIDAD DE YALE',180,66,22,RED,'#fff',t,E.yale-.05);
  if(t>E.cachorro-.05&&t<E.conroy-.1)TX('UN CACHORRO',180,66,26,'#fff',t,E.cachorro-.05,{hl:[1],hc:BRASS});
  if(t>E.conroy-.1&&t<E.stubby1-.1)TX('EL SOLDADO CONROY',180,66,24,'#fff',t,E.conroy-.1,{w:344,hl:[2],hc:BRASS});
  if(t>E.stubby1-.05&&t<E.prohib-.3){slam('STUBBY',180,66,58,BRASS,t,E.stubby1,{st:INK,sw:10});shock(180,66,t,E.stubby1,BRASS,150,5,.6)}
  if(t>E.prohib-.3&&t<E.corneta-.1)TX('PERROS PROHIBIDOS',180,66,24,'#fff',t,E.prohib-.3,{w:344,hl:[1],hc:RED});
  if(t>E.corneta-.1&&t<E.pata-.1)TX('APRENDIÓ LOS TOQUES DE CORNETA',180,66,19,'#fff',t,E.corneta-.1,{w:344,hl:[3,4],hc:BRASS});
  if(t>E.pata-.05)tag('SALUDÓ CON LA PATA',180,470,22,RED,'#fff',t,E.pata-.05);
}
// ---------- S2 · el barco, el carbón y el saludo al oficial ----------
function s2(t,u){
  const at=t<E.tierra;
  if(at){
    bg('#1e2f44','#8aa2b2');
    const sx=lerp(-150,180,eo(PA(t,T0[2],E.zarpo+.8)))+(t>E.zarpo+.8?(t-E.zarpo-.8)*5:0);
    ship(sx,430,1.05,t);waves(t,432,'#1a2a38',3);
    if(t>E.escondio-.1){const q=eb(PA(t,E.escondio-.1,E.escondio+.35));tr(180,300,q,0,()=>{rr(-150,-110,300,220,14);ctx.fillStyle='#1a1410';ctx.fill();ctx.strokeStyle=BRASS;ctx.lineWidth=3;ctx.stroke();
      for(let i=0;i<22;i++)circ(-130+R(i)*260,50+R(i+30)*52-Math.abs(((i%7)-3))*4,9+R(i+5)*7,'#0c0a08');
      const pk=PA(t,E.escondio+.3,E.carbon);terrier(-20,52,1.2,{sit:1,col:'#b5834f',rim:'#ffe6b0',t,wag:.4});
            person(86,66,1.1,{flip:true,hat:'helm',arm:-.6});txt('shh',70,-30,18,'#fff',{wt:'900',st:INK,sw:4,a:.8+.2*Math.sin(t*6)})})}
    TX('LA DIVISIÓN ZARPÓ',180,66,23,'#fff',t,T0[2]+.0,{out:E.escondio-.1,w:344,hl:[2],hc:BRASS});
    if(t>E.escondio-.05&&t<E.carbon-.1)TX('CONROY LO ESCONDIÓ',180,66,22,'#fff',t,E.escondio-.05,{w:344,hl:[0],hc:BRASS});
    if(t>E.carbon-.05)tag('EN EL CARBÓN',180,470,24,RED,'#fff',t,E.carbon-.05);
  }else{
    const gy=490;
    bg('#7e8a72','#e0d4a8');ridge(430,'#5a6a48',5,30);
    rect0(0,gy,360,200,'#6a6446');rect0(0,gy,360,3,'rgba(255,255,255,.3)');
    ship(60,gy-8,.5,t);
    const fl=Math.exp(-(t-E.tierra)*5);if(fl>.02)withA(fl,()=>rect0(0,0,360,640,'#fff'));
    const ox=lerp(430,270,eo(PA(t,E.oficial-.5,E.oficial+.3)));
    person(ox,gy+10,1.9,{flip:true,hat:'peak',robe:'#5a6a38',arm:t>E.saludo-.1?-2.4:0,ph:t<E.oficial+.3?t*8:0});
    person(40,gy+10,1.7,{hat:'helm'});
    const sal=t>E.stubby2?1:0;
    terrier(150,gy+8,2.0,{sit:1,rim:'#fff7d8',t,wag:.5,salute:sal});
    if(t>E.oficial+.4&&t<E.stubby2)txt('!',ox-34,gy-170,50,RED,{wt:'900',st:INK,sw:8,sc:1+.12*wob(t-E.oficial-.4,10,4)});
    if(t>E.oficial-.05&&t<E.stubby2-.1)TX('UN OFICIAL LO DESCUBRIÓ',180,66,20,'#fff',t,E.oficial-.05,{w:344,hl:[1],hc:RED});
    if(t>E.stubby2-.05&&t<E.quedarse-.1)TX('STUBBY LE HIZO EL SALUDO',180,66,20,'#fff',t,E.stubby2-.05,{w:344,hl:[0],hc:BRASS});
    if(t>E.saludo)stampBox('¡SALUDO!',180,250,32,BRASS,t,E.saludo,-.08);
    if(t>E.quedarse){stampBox('SE QUEDA',180,320,30,'#8bd04a',t,E.quedarse,.06);burst(170,gy-160,t,E.quedarse,[BRASS,'#fff','#8bd04a'],18,120,.8,3)}
  }
}
// ---------- S3 · el gas: olfato y alarma en la trinchera ----------
function s3(t,u){
  const ty=420;
  const dawn=PA(t,E.madrugada,E.madrugada+1.4);
  bg(mixc('#10140c','#3a2a30',dawn),mixc('#3a3a22','#b87a58',dawn));
  starfield(t,22,6,.5*(1-dawn));moon(70,150,22,t);glow(250,120,100,'rgba(255,230,160,'+(.12+.08*Math.sin(t*3))+')');
  ridge(300,'#1e2216',6,34);
  // alambre de espino y parapeto
  for(let i=0;i<9;i++){line(20+i*40,300,20+i*40,330,'#0a0a08',2);ctx.strokeStyle='#0a0a08';ctx.lineWidth=1;ctx.beginPath();for(let k=0;k<12;k++)ctx.lineTo(20+i*40+k*3.4,318+(k%2)*5);ctx.stroke()}
  sandbags(-10,370,345,2,'#8a7a50');
  rect0(0,345,360,300,'#2a2014');rect0(0,ty+64,360,200,'#1c1610');
  for(let i=0;i<9;i++)rect0(i*42-6,ty+62,34,5,'#6a4a28');
  rect0(0,345,360,3,'rgba(0,0,0,.4)');
  // soldados dormidos / despertando
  for(let i=0;i<4;i++){const sx=36+i*86,wk=PA(t,E.ladrando+.25+i*.28,E.ladrando+.8+i*.28),rot=lerp(-1.5,0,eo(wk));
    tr(sx+(rot<-.05?40:0),ty+60,1.25,rot,()=>person(0,0,1,{hat:'helm',robe:'#6a6a40'}));
    if(t>E.dormidos&&t<E.ladrando+.3)txt('z',sx+18,ty-8-((t*20+i*7)%14),16,'#cfe0ff',{wt:'900',st:INK,sw:3,a:.8})}
  // nube de gas
  const gk=PA(t,E.gas-.1,E.gas+1.1),gs=t>E.madrugada?1:0;
  if(gk>0)gasCloud(t,t<E.madrugada?ty-30:ty-10,1,.4*gk*(t>E.madrugada?1.5:1),lerp(420,150,eo(gk)*(t>E.madrugada?.4:1)),460);
  // Stubby
  const run=PA(t,E.corrio-.1,E.alarma-.3);
  let dx=150,ph=0,sit=1,fl=false;
  if(t>=E.corrio-.1){dx=lerp(90,290,eio(run));sit=run<1?0:1;ph=run<1?t*14:0;fl=false}
  terrier(dx,ty+68,1.45,{sit,ph,rim:'#ffe6b0',t,wag:.4,al:t>E.intox&&t<E.olia?(.7+.3*Math.sin(t*20)):1,col:(t>E.intox&&t<E.olia-.3)?'#9aa860':undefined});
  // olfato
  if(t>E.olia&&t<E.madrugada)for(let i=0;i<4;i++){const w=((t-E.olia)*1.2+i*.25)%1;txt('~',dx+58+w*34,ty+8-w*8,22,'#e8f0a0',{wt:'900',a:1-w})}
  if(t>E.rastro-.1&&t<E.madrugada-.2){const q=PA(t,E.rastro-.1,E.rastro+.3);ctx.save();ctx.globalAlpha=q;gasCloud(t,ty-6,.18,.9,250,330);ctx.restore();glowStroke(BRASS,2.4,8);ctx.beginPath();ctx.arc(290,ty-8,26*eb(q),0,TAU);ctx.stroke()}
  // sonidos
  if(t>E.ladrando&&t<E.alarma){for(let i=0;i<3;i++){const w=((t-E.ladrando)*2+i*.33)%1;shock(dx+50,ty+22,t,t-w,'rgba(255,255,255,.8)',28,2.4,.5)}txt('¡GUAU!',dx+10,ty-30,20,'#fff',{wt:'900',st:INK,sw:5,sc:1+.1*wob(t*2,6,2)})}
  if(t>E.alarma){const q=Math.exp(-(t-E.alarma)*3);withA(.35*q,()=>rect0(0,0,360,640,RED));shock(180,300,t,E.alarma,RED,200,6,.7);stampBox('¡GAS!',180,230,52,RED,t,E.alarma,-.08)}
  TX('EN LAS TRINCHERAS',180,66,24,'#fff',t,T0[3]+.0,{out:E.gas-.1,w:344,hl:[1],hc:BRASS});
  if(t>E.gas-.05&&t<E.intox-.1){slam('GAS',180,90,60,GAS,t,E.gas,{st:INK,sw:10});shock(180,90,t,E.gas,GAS,150,5,.6)}
  if(t>E.intox-.05&&t<E.olia-.1)TX('LO INTOXICÓ',180,66,26,'#fff',t,E.intox-.05,{hl:[1],hc:GAS});
  if(t>E.olia-.05&&t<E.madrugada-.2)TX('OLÍA EL MÁS MÍNIMO RASTRO',180,66,19,'#fff',t,E.olia-.05,{w:344,hl:[3,4],hc:GAS});
  if(t>E.madrugada-.05&&t<E.corrio-.2)TX('UNA MADRUGADA...',180,66,24,'#fff',t,E.madrugada-.05,{hl:[1],hc:BRASS,out:E.corrio-.3});
  if(t>E.corrio-.1&&t<E.alarma-.1)TX('CORRIÓ LADRANDO',180,66,26,'#fff',t,E.corrio-.1,{hl:[1],hc:BRASS});
  if(t>E.alarma+.3)tag('DIO LA ALARMA',180,470,24,RED,'#fff',t,E.alarma+.3);
}
// ---------- S4 · heridos en tierra de nadie y la metralla ----------
function s4(t,u){
  const gy=470;
  bg('#1c1a26','#6a4a40');
  const fl=.5+.5*Math.sin(t*3);glow(260,120,120,'rgba(255,230,160,'+(.25+.15*fl)+')');
  ridge(330,'#14121a',8,40);
  rect0(0,gy,360,200,'#2a2018');rect0(0,gy,360,2,'rgba(255,200,150,.3)');
  for(let i=0;i<7;i++){line(30+i*50,gy-4,30+i*50,gy-30,'#0a0808',2);line(30+i*50-16,gy-24,30+i*50+16,gy-20,'#0a0808',1.2)}
  // herido y Stubby
  tr(200,gy+8,1.35,1.5,()=>person(0,0,1,{hat:'helm',robe:'#8a8a52'}));
  const arr=eo(PA(t,E.heridos-.7,E.heridos+.3)),dx=lerp(-60,110,arr);
  const hit=t>E.metralla;
  const shake=hit?wob(t-E.metralla,14,4)*5:0;
  terrier(dx+shake,gy+8,1.65,{ph:arr<1?t*12:0,sit:arr<1?0:1,flip:false,rim:'#ffd9a0',t,wag:.4,wound:t>E.pecho?1:0});
  if(t>E.heridos+.3&&t<E.metralla){for(let i=0;i<3;i++){const w=((t-E.heridos)*1.8+i*.33)%1;txt('¡GUAU!',dx+10,gy-130-w*20,16,'#fff',{wt:'900',st:INK,sw:4,a:1-w})}}
  if(t>E.metralla){burst(150,gy-20,t,E.metralla,['#ffd166','#ff8a3a','#fff'],26,190,.8,3);shock(150,gy-20,t,E.metralla,'#fff',150,5,.5);smoke(150,gy-20,t,E.metralla,28,'200,190,170',1.8);const q=Math.exp(-(t-E.metralla)*4);withA(.3*q,()=>rect0(0,0,360,640,'#fff'))}
  TX('TAMBIÉN BUSCABA HERIDOS',180,66,20,'#fff',t,T0[4]+.0,{out:E.nadie-.35,w:344,hl:[2],hc:BRASS});
  if(t>E.nadie-.05&&t<E.n1918-.1)tag('TIERRA DE NADIE',180,66,24,RED,'#fff',t,E.nadie-.05);
  if(t>E.n1918-.05&&t<E.metralla-.1){slam('1918',180,66,56,BRASS,t,E.n1918,{st:INK,sw:10});shock(180,66,t,E.n1918,BRASS,150,5,.6)}
  if(t>E.metralla-.05&&t<E.pecho-.1)TX('LA METRALLA LE HIRIÓ',180,66,22,'#fff',t,E.metralla-.05,{w:344,hl:[1],hc:RED});
  if(t>E.pecho-.05)TX('EL PECHO Y UNA PATA',180,66,24,'#fff',t,E.pecho-.05,{w:344,hl:[1,4],hc:RED});
  if(t>E.pecho+.1)tag('HERIDO EN COMBATE',180,470,22,RED,'#fff',t,E.pecho+.1);
}
// ---------- S5 · la leyenda del espía alemán ----------
function s5(t,u){
  const gy=480;
  bg('#22241a','#7a6a44');
  ridge(380,'#1a1c12',4,30);sandbags(-10,370,gy-4,2,'#8a7a50');
  rect0(0,gy,360,200,'#2a2418');rect0(0,gy,360,2,'rgba(255,220,160,.3)');
  // el espía: silueta con sombrero, camina y cae
  const wx=lerp(420,215,eo(PA(t,E.cuenta+.2,E.mordio-.15)));
  const fall=eb(PA(t,E.mordio+.1,E.mordio+.55)),fa=1;
  const sx=wx+fall*40;
  tr(sx,gy+8,1.9,fall*1.4,()=>person(0,0,1,{flip:true,hat:'fed',robe:'#55555e',hair:'#14120e',skin:'#b09880',hold:'map',arm:.4,ph:t<E.mordio-.15?t*8:0}));
  // Stubby salta y muerde
  const jp=eo(PA(t,E.mordio-.35,E.mordio+.1)),dx=lerp(60,sx-62,jp)+Math.min(0,(t-E.mordio-.1))*0;
  terrier(t<E.mordio-.35?60:dx,gy+8-(Math.sin(jp*Math.PI)*34)*(jp<1?1:0),1.55,{ph:jp<1&&t>E.mordio-.35?t*14:0,sit:t<E.mordio-.35?1:0,rim:'#ffd9a0',t,wag:.5});
  if(t>E.mordio){shock(sx-30,gy-20,t,E.mordio,'#fff',90,4,.5);burst(sx-30,gy-20,t,E.mordio,['#fff',BRASS],12,110,.6,2.5);txt('¡GRRR!',sx-70,gy-90,22,'#fff',{wt:'900',st:INK,sw:5,sc:1+.1*wob(t-E.mordio,10,4)})}
  // mapa que vuela y se agranda cuando "dibujaba"
  if(t>E.mordio&&t<E.dibujaba-.1){const q=PA(t,E.mordio,E.mordio+.8);mapPaper(lerp(sx,300,eo(q)),lerp(gy-120,210,eo(q))-Math.sin(q*Math.PI)*60,1.0,t,t*2)}
  if(t>E.dibujaba-.1){const q=eb(PA(t,E.dibujaba-.1,E.dibujaba+.45));mapPaper(250,230,1.9*q,t)}
  TX('«CUENTA LA HISTORIA»',180,66,23,'#fff',t,T0[5]+.0,{out:E.mordio-.1,w:344,hl:[1,2],hc:BRASS});
  if(t>E.mordio-.05&&t<E.espia-.1)TX('MORDIÓ AL ESPÍA',180,66,26,'#fff',t,E.mordio-.05,{w:344,hl:[2],hc:RED});
  if(t>E.espia-.05&&t<E.dibujaba-.1)tag('ESPÍA ALEMÁN',180,66,26,RED,'#fff',t,E.espia-.05);
  if(t>E.dibujaba-.05&&t<E.poreso-.2)TX('DIBUJABA LAS TRINCHERAS',180,66,20,'#fff',t,E.dibujaba-.05,{w:344,hl:[1,2],hc:BRASS});
  if(t>E.poreso-.1&&t<E.ascend-.1)TX('POR ESO...',180,66,28,'#fff',t,E.poreso-.1,{hl:[1],hc:BRASS});
  if(t>E.ascend-.05){const q=eb(PA(t,E.ascend-.05,E.ascend+.45));chevrons(110,330,1.5*q,BRASS);shock(110,340,t,E.ascend,BRASS,140,5,.6)}
  if(t>E.sargento2-.05&&t<E.sargento2+1.2){stampBox('SARGENTO',180,170,44,BRASS,t,E.sargento2,-.08)}
  if(t>E.sargento2-.05)tag('ASCENDIDO A SARGENTO',180,470,22,RED,'#fff',t,E.sargento2-.05);
}
// ---------- S6 · 17 batallas, la manta y la medalla de Pershing ----------
function s6(t,u){
  const gy=500;
  bg('#4a5a38','#f0d890');rays(180,300,t,16,520,'rgba(255,240,180,.16)',1,.1,3);
  rect0(0,gy,360,200,'#3a3a24');rect0(0,gy,360,3,'rgba(255,240,180,.4)');
  const cnt=Math.round(17*eo(PA(t,E.diecisiete,E.diecisiete+1.0)));
  // 17 estrellas de batalla
  for(let i=0;i<17;i++){const q=eb(PA(t,E.diecisiete+i*.055,E.diecisiete+i*.055+.3));if(q>0&&t<E.manta-.2)tr(30+(i%9)*37,190+((i/9)|0)*40,q,0,()=>{circ(0,0,13,'#5a2a22',BRASS,2);txt('✹',0,1,14,BRASS,{wt:'900'})})}
  if(t>E.diecisiete-.05&&t<E.mujeres-.1){txt(String(cnt),180,130,72,BRASS,{wt:'900',st:INK,sw:10,sc:1+.08*wob(t-E.diecisiete,10,4)})}
  // mujeres de Château-Thierry
  const wq=eo(PA(t,E.mujeres-.4,E.mujeres+.4));
  if(t>E.mujeres-.4){[[40,'#7a3b6a'],[92,'#3a5a7a']].forEach(([wx,c],i)=>{person(lerp(-60,wx,wq),gy+10,1.7,{hat:'none',robe:c,hair:'#4a2a1a'})})}
  // manta grande
  if(t>E.manta-.1){const q=eb(PA(t,E.manta-.1,E.manta+.4));blanketBig(180,260,1.6*q,t);if(t>E.manta&&t<E.manta+.7)shock(180,260,t,E.manta,BRASS,150,5,.6)}
  terrier(220,gy+8,1.8,{sit:1,rim:'#fff7d8',t,wag:.5,vest:t>E.medallas?1:0});
  if(t>E.medallas){burst(180,230,t,E.medallas,[BRASS,'#fff','#d1322e'],26,160,.9,3);for(let i=0;i<5;i++){const w=((t-E.medallas)*1.2+i*.2)%1;txt('✦',90+i*46,320-w*50,16,'#fff',{a:1-w})}}
  // Pershing y la otra medalla
  const px=lerp(420,310,eo(PA(t,E.pershing-.5,E.pershing+.3)));
  if(t>E.pershing-.5)person(px,gy+10,1.9,{flip:true,hat:'peak',robe:'#5a6a38',arm:t>E.otra-.5?-1.3:0,ph:t<E.pershing+.3?t*8:0});
  if(t>E.otra-.5){const q=PA(t,E.otra-.5,E.otra+.5);medal(lerp(300,220,eo(q)),lerp(380,330,eo(q))-Math.sin(q*Math.PI)*40,1.3,t*3)}
  if(t>E.otra)shock(220,340,t,E.otra,BRASS,110,5,.5);
  TX('PASÓ POR',180,66,24,'#fff',t,T0[6]+.0,{out:E.diecisiete+.2});
  if(t>E.diecisiete+.4&&t<E.mujeres-.1)TX('BATALLAS',180,66,28,'#fff',t,E.diecisiete+.4,{hl:[0],hc:BRASS});
  if(t>E.mujeres-.05&&t<E.chateau-.1)TX('LAS MUJERES DE',180,66,22,'#fff',t,E.mujeres-.05,{hl:[2],hc:BRASS});
  if(t>E.chateau-.05&&t<E.manta-.1)tag('CHÂTEAU-THIERRY',180,66,24,RED,'#fff',t,E.chateau-.05);
  if(t>E.manta-.1&&t<E.pershing-.2)TX('UNA MANTA PARA SUS MEDALLAS',180,66,19,'#fff',t,E.manta-.1,{w:344,hl:[2,5],hc:BRASS});
  if(t>E.pershing-.2&&t<E.otra-.2)TX('EL GENERAL PERSHING',180,66,22,'#fff',t,E.pershing-.2,{w:344,hl:[2],hc:BRASS});
  if(t>E.otra-.2)tag('LE DIO OTRA MEDALLA',180,470,22,BRASS,'#14100a',t,E.otra-.2);
}
// ---------- S7 · tres presidentes, 1926 y el Smithsonian ----------
function s7(t,u){
  const gy=490;
  const dusk=PA(t,E.murio-.2,E.murio+1.0),mus=PA(t,E.smith-.3,E.smith+.4);
  bg(mixc('#7a8a9a','#2a2234',dusk),mixc('#d8d0b0','#c87a50',dusk));
  if(dusk>0)sunO(110,340,28,t,.45*dusk);
  rect0(0,gy,360,200,mixc('#6a7a50','#1e1a2a',dusk));rect0(0,gy,360,3,'rgba(255,255,255,.3)');
  // presidentes
  const names=['WILSON','HARDING','COOLIDGE'],ts=[E.tres,E.tres+.25,E.tres+.5];
  if(t<E.murio+.2)names.forEach((nm,i)=>{const q=eb(PA(t,ts[i],ts[i]+.35)),fa=1-PA(t,E.murio-.1,E.murio+.4);if(q>0&&fa>0)withA(fa,()=>{person(36+i*58,gy+10,1.7*q,{hat:'top',robe:'#2a2a3a',arm:i==1?-.5:0});tag(nm,36+i*58,gy+34+(i%2)*16,11,'#3a3a4a','#fff',t,ts[i]+.15,{r:6})})});
  // Stubby viejo, sentado, con manta
  const sa=1-mus;
  if(sa>0)withA(sa,()=>terrier(lerp(240,180,dusk),gy+8,1.8,{sit:1,vest:1,rim:'#ffe6b0',t,wag:t<E.murio?.5:0}));
  if(t>E.murio&&t<E.smith-.3){for(let i=0;i<8;i++){const w=((t-E.murio)*.5+i*.12)%1;glow(180+Math.sin(i*2+t)*40,gy-90-w*180,10,'rgba(255,230,170,'+(.5*(1-w))+')')}}
  // museo
  if(mus>0){withA(mus,()=>{museum(180,gy,1.4);vitrine(180,300,1.1*eb(mus),t)})}
  TX('CONOCIÓ A',180,66,24,'#fff',t,T0[7]+.0,{out:E.presid+.9,hl:[1],hc:BRASS});
  if(t>E.tres-.1&&t<E.murio-.1)TX('TRES PRESIDENTES',180,100,26,'#fff',t,E.tres-.1,{w:344,hl:[0],hc:BRASS});
  if(t>E.murio-.05&&t<E.n1926-.1)TX('MURIÓ EN',180,66,26,'#fff',t,E.murio-.05,{hl:[1],hc:BRASS});
  if(t>E.n1926-.05&&t<E.smith-.2){slam('1926',180,66,60,BRASS,t,E.n1926,{st:INK,sw:10});shock(180,66,t,E.n1926,BRASS,150,5,.6);TX('16 DE MARZO',180,130,18,'#fff',t,E.n1926+.4)}
  if(t>E.smith-.1){tag('MUSEO SMITHSONIAN',180,66,22,RED,'#fff',t,E.smith-.05);if(t<E.smith+.6)shock(180,300,t,E.smith,BRASS,170,5,.6)}
}
// ---------- S8 · la duda y el debate ----------
function s8(t,u){
  const dd=PA(t,E.heroe2-.6,E.heroe2-.2);
  bg('#14100a','#3a3020');rays(180,320,t,14,520,'rgba(240,192,64,.035)',1,.1,3);starfield(t,20,2,.4);
  // bloque de duda
  if(t<E.heroe2-.3){
    if(t>E.ojo-.05){const sc=1+.1*wob(t-E.ojo,10,4);txt('PERO OJO',180,130,48,BRASS,{wt:'900',st:INK,sw:9,sc});if(t<E.ojo+.6)shock(180,130,t,E.ojo,BRASS,150,5,.6)}
    if(t>E.detalles-.05&&t<E.companeros-.1)TX('MUCHOS DETALLES',180,210,26,'#fff',t,E.detalles-.05,{w:344,hl:[1],hc:RED});
    if(t>E.companeros-.05){TX('SALEN SOLO DE SUS COMPAÑEROS',180,210,17,'#fff',t,E.companeros-.05,{w:344,hl:[2,5],hc:RED});
      [[60,.9],[300,-.9]].forEach(([px,fl],i)=>{const q=eb(PA(t,E.companeros,E.companeros+.4));person(px,470,1.7*q,{flip:i==1,hat:'helm'});tr(px+(i?-40:40),330,q,0,()=>{rr(-28,-18,56,32,10);ctx.fillStyle='#fff';ctx.fill();txt('…',0,-2,24,'#14100a',{wt:'900'})})})}
    if(t>E.obit-.1){const q=eb(PA(t,E.obit-.1,E.obit+.4));newspaper(180,350,1.2*q,t);if(t<E.obit+.7)shock(180,350,t,E.obit,BRASS,130,5,.6)}
    if(t>E.obit-.05)TX('Y DE UN OBITUARIO',180,66,22,'#fff',t,E.obit-.05,{w:344,hl:[3],hc:BRASS});
  }else{
    TX('¿HÉROE DE GUERRA,',180,66,25,'#fff',t,E.heroe2-.4,{w:344,hl:[1,2],hc:BRASS});
    TX('O LEYENDA?',180,98,25,'#fff',t,E.leyenda2-.5,{w:344,hl:[1],hc:RED});
    const lw=eb(PA(t,E.heroe2,E.heroe2+.5)),rw=eb(PA(t,E.leyenda2-.3,E.leyenda2+.3));
    tr(95,330,lw,0,()=>{rr(-70,-80,140,160,12);ctx.fillStyle='rgba(8,8,4,.82)';ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=3;ctx.stroke();terrier(-10,60,1.1,{sit:1,vest:1,rim:'#fff7d8',t,wag:.6});txt('HÉROE',0,-100,22,BRASS,{wt:'900',st:INK,sw:6})});
    tr(265,330,rw,0,()=>{rr(-70,-80,140,160,12);ctx.fillStyle='rgba(8,8,4,.82)';ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=3;ctx.stroke();terrier(-10,60,1.1,{sit:1,col:'#9aa0b0',dark:'#6a7080',rim:'#c8d6f0',t,al:.65});txt('?',20,-24,54,RED,{wt:'900',st:INK,sw:7,sc:1+.1*wob(t,6,2)});txt('LEYENDA',0,-100,22,RED,{wt:'900',st:INK,sw:6})});
    if(t>E.leyenda2)txt('VS',180,330,30,'#fff',{wt:'900',st:INK,sw:7,sc:1+.1*wob(t-E.leyenda2,12,4)});
    if(t>E.coment-.1){const k=eb(PA(t,E.coment-.1,E.coment+.35));tr(180,455,k,0,()=>{rr(-130,-22,260,44,22);ctx.fillStyle='#fff';ctx.fill();txt('COMENTA TU RESPUESTA',0,0,18,'#a0281e',{wt:'900'})})}
    if(t>E.sig-.1)tag('SÍGUEME PARA MÁS',180,502,18,RED,'#fff',t,E.sig-.05);
  }
}
boot([s0,s1,s2,s3,s4,s5,s6,s7,s8],TRS,{cap:{acc:'#f0c040'}});
