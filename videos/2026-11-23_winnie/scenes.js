// ===== 23 · Winnie, la osa real — escenas =====
const T0=T;
function rect0(x,y,w,h,c){ctx.fillStyle=c;ctx.fillRect(x,y,w,h)}
function pine(x,y,s,c='#2f5d3a'){ctx.fillStyle=c;for(let i=0;i<3;i++){ctx.beginPath();ctx.moveTo(x-26*s+i*3,y-i*34*s);ctx.lineTo(x,y-(i*34+52)*s);ctx.lineTo(x+26*s-i*3,y-i*34*s);ctx.fill()}rect0(x-3*s,y,6*s,10*s,'#3a2418')}
function heart(x,y,s,col='#e0484e',a=1){ctx.save();ctx.globalAlpha*=a;ctx.translate(x,y);ctx.scale(s,s);ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(0,5);ctx.bezierCurveTo(-12,-4,-6,-12,0,-5);ctx.bezierCurveTo(6,-12,12,-4,0,5);ctx.fill();ctx.restore()}
function hills(t,c1,c2,sp=8){for(let k=0;k<2;k++){ctx.fillStyle=k?c1:c2;ctx.beginPath();ctx.moveTo(-20,480);for(let x=-20;x<=380;x+=20){ctx.lineTo(x,430-k*30-Math.sin((x+t*sp*(k+1))*.018+k)*26)}ctx.lineTo(380,480);ctx.fill()}}
// ---------- S0 · gancho: la osa ----------
function s0(t,u){
  const gy=490;
  bg('#f6dca0','#c9833a');rays(180,300,t,14,480,'rgba(255,240,190,.3)',1,.08,3);
  pine(40,gy,1.4);pine(320,gy,1.6,'#25492f');pine(285,gy,1.1);
  rect0(0,gy,360,200,'#4a2e1a');rect0(0,gy,360,3,'rgba(255,230,160,.8)');
  const bx=lerp(-60,170,eo(win(t,-1.0,.9)));
  ctx.fillStyle='rgba(0,0,0,.3)';ctx.beginPath();ctx.ellipse(bx,gy+4,80,9,0,0,TAU);ctx.fill();
  bear(bx,gy+4,2.4,{ph:t*5*(1-win(t,.1,1.0)),rim:'#ffd98a',t,down:wob(t-E.osa,8,3)*0});
  TX('WINNIE PU EXISTIÓ',180,66,27,'#fff',t,-.6,{out:E.verdad-.1,w:340,hl:[0,1],hc:BRASS});
  if(t>E.verdad){slam('DE VERDAD',180,134,50,BRASS,t,E.verdad,{st:INK,sw:9});shock(180,134,t,E.verdad,BRASS,150,5,.6)}
  if(t>E.osa)stampBox('UNA OSA REAL',180,226,30,RED,t,E.osa,-.1);
  if(t>E.guerra-.05)TX('EN PLENA GUERRA',180,300,26,'#fff',t,E.guerra-.05,{hl:[2],hc:RED});
}
// ---------- S1 · tren, agosto 1914 ----------
function s1(t,u){
  bg('#7ab0c4','#e9d9a6');
  ctx.fillStyle='rgba(255,255,255,.55)';for(let i=0;i<4;i++){ctx.beginPath();ctx.ellipse(((i*130-t*14)%460+460)%460-50,110+i*16,46,12,0,0,TAU);ctx.fill()}
  hills(t,'#5f8f5a','#3d6b48');
  const gy=420;railBed(gy+2);
  for(let i=0;i<12;i++){const x=((i*70-t*140)%840+840)%840-60;pine(x,gy-8,.9+R(i)*.4,'#2b5238')}
  rect0(0,gy-4,360,4,'#3a2418');
  const lx=170+Math.sin(t*3)*1.5;
  loco(lx+90,gy,.95,{flip:true,t});
  rr(-30,gy-62,150,52,4);ctx.fillStyle='#8a2a22';ctx.fill();rect0(-30,gy-20,150,6,'#3a1a14');
  for(let i=0;i<3;i++){rect0(-16+i*46,gy-52,28,22,'#1a1a22')}
  const hx=lerp(480,-30,0);
  if(t>E.harry-.3)person(46,gy-60,1.1,{robe:'#3a5a8a',hair:'#3a2418',arm:Math.sin(t*3)*.3,t});
  for(let i=0;i<5;i++){const q=((t*1.2+i*.2)%1);circ(lx-30-q*60,gy-100-q*50,6+q*14,'rgba(240,240,250,'+(.55*(1-q))+')')}
  TX('AGOSTO DE',180,66,26,'#fff',t,T0[1]+.0,{out:E.n1914-.1,hl:[0],hc:BRASS});
  if(t>E.n1914)slam('1914',180,134,64,BRASS,t,E.n1914,{st:INK,sw:9});
  TX('VETERINARIO CANADIENSE',180,210,20,'#fff',t,E.vet-.15,{w:340,hl:[0],hc:BRASS});
  tag('HARRY COLEBOURN',180,470,22,RED,'#fff',t,E.harry-.05);
}
// ---------- S2 · estación de White River, $20 ----------
function s2(t,u){
  const gy=470;
  bg('#cfe0e6','#e8eef0');
  for(let i=0;i<6;i++)pine(30+i*66,gy-6,1.2+R(i+3)*.5,'#3c6b52');
  rect0(0,gy,360,200,'#e8eef2');rect0(0,gy,360,3,'#9ab');rect0(0,gy+14,360,6,'#6a4a30');
  // cartel
  line(312,gy-90,312,gy,'#4a2e1a',5);rr(262,gy-130,100,40,4);ctx.fillStyle=CRM;ctx.fill();ctx.strokeStyle='#4a2e1a';ctx.lineWidth=3;ctx.stroke();txt('WHITE RIVER',312,gy-110,14,'#4a2e1a',{wt:'900'});
  const hx=lerp(-40,110,eo(win(t,T0[2]-.2,E.estacion+.5)));
  person(hx,gy+6,1.7,{robe:'#3a5a8a',hair:'#3a2418',arm:t>E.pago?-.9:0,ph:t<E.estacion+.5?t*8:0,t});
  const cz=lerp(480,225,eo(win(t,E.cazador-.5,E.cazador+.3)));
  if(t>E.cazador-.5)person(cz,gy+6,1.7,{robe:'#6a3a22',hair:'#2a1a10',hat:true,flip:true,arm:t>E.pago?-.6:0,t});
  const bs=1+.5*0;bear(lerp(480,200,eo(win(t,E.osezna-.5,E.osezna+.2))),gy+4,.85,{col:'#2a1d18',rim:'#ffd98a',t,ph:0});
  if(t>E.pago){const q=eio(win(t,E.pago,E.veinte));coin(lerp(120,225,q),gy-80-Math.sin(q*Math.PI)*40,11,t*8)}
  if(t>E.veinte){slam('$20',180,136,76,BRASS,t,E.veinte,{st:INK,sw:10});shock(180,140,t,E.veinte,BRASS,170,5,.6)}
  TX('ESTACIÓN DE WHITE RIVER',180,66,22,'#2a1a10',t,T0[2]+.0,{out:E.osezna-.4,w:344,hl:[2,3],hc:RED,stroke:'rgba(255,255,255,.9)'});
  TX('UNA OSEZNA HUÉRFANA',180,66,24,'#2a1a10',t,E.osezna-.1,{out:E.pago-.1,w:344,hl:[2],hc:RED,stroke:'rgba(255,255,255,.9)'});
  tag('ONTARIO · CANADÁ',180,490+0,18,GRN,'#fff',t,E.white);
}
// ---------- S3 · el nombre ----------
function s3(t,u){
  bg('#f6ead0','#e6c68a');rays(180,260,t,12,420,'rgba(242,177,52,.18)',1,.1,3);
  // skyline Winnipeg
  const gy=430;rect0(0,gy,360,200,'#5a3c24');
  [[20,50,70],[78,40,100],[124,56,60],[190,44,120],[238,52,80],[296,50,95]].forEach(([x,w,h],i)=>{const y=gy-h*win(t,T0[3]+i*.05,T0[3]+.6);rect0(x,gy-h*win(t,T0[3]+i*.05,T0[3]+.6),w,h,i%2?'#8a5a3a':'#a8703f');for(let k=0;k<3;k++)rect0(x+8,y+12+k*22,w-16,8,'rgba(255,230,160,.6)')});
  bear(lerp(-60,250,eo(win(t,T0[3],E.winnipeg))),gy+4,.9,{ph:t*6*(1-win(t,E.winnipeg-.3,E.winnipeg)),rim:'#ffd98a',t});
  TX('LA LLAMÓ',180,66,26,'#4a2e1a',t,T0[3]+.0,{out:E.winnipeg+.2,hl:[1],hc:RED,stroke:'rgba(255,255,255,.9)'});
  if(t>E.winnipeg){slam('WINNIPEG',180,150,50,BRASS,t,E.winnipeg,{st:INK,sw:8});}
  if(t>E.winnipeg+.2)tag('COMO SU CIUDAD',180,215,20,GRN,'#fff',t,E.ciudad-.1);
  if(t>E.winnie2-.05){withA(1,()=>{stampBox('WINNIE',180,310,52,RED,t,E.winnie2,-.08)});for(let i=0;i<5;i++)heart(120+i*30,270-((t-E.winnie2)*50%90)*(i%2?.7:1),1.1+.3*(i%3),'#e0484e',cl(1-(t-E.winnie2)/1.8))}
  if(t>E.abrev)TX('PARA ABREVIAR',180,375,22,'#4a2e1a',t,E.abrev-.15,{hl:[1],hc:RED,stroke:'rgba(255,255,255,.9)'});
}
// ---------- S4 · tienda de campaña: mansa, duerme bajo la cama ----------
function s4(t,u){
  bg('#233a28','#12201a');starfield(t,26,5,.6);
  const gy=470;rect0(0,gy,360,200,'#2a1c12');
  // tienda
  poly([[-10,gy],[180,150],[370,gy]],'#c9b284');poly([[110,gy],[180,300],[250,gy]],'#1a120c');
  glow(80,gy-140,70,'rgba(255,200,100,.35)');
  // cama de campaña
  const cx=190;rect0(cx-86,gy-50,172,10,'#8a6a3a');line(cx-80,gy-40,cx-84,gy,'#4a3a22',5);line(cx+80,gy-40,cx+84,gy,'#4a3a22',5);rect0(cx-86,gy-60,172,12,'#6a8a52');
  const sl=win(t,E.dormia-.2,E.dormia+.6);
  bear(lerp(-50,cx-10,eo(win(t,T0[4]-.2,E.mansa+.5))),gy+2,1.0,{ph:t<E.mansa+.5?t*6:0,rim:'#ffd98a',t,down:sl});
  if(sl>.5)for(let i=0;i<3;i++){const q=((t*.6+i*.33)%1);txt('z',cx+60+q*20,gy-80-q*50,14+i*4,'#fff',{wt:'900',a:1-q})}
  if(t>E.soldados){for(let i=0;i<3;i++){const px=60+i*54;person(px,gy+8,1.2,{robe:['#5a6a3a','#4a5a7a','#6a5a3a'][i],hair:'#3a2418',arm:-1.2+Math.sin(t*6+i)*.5,t})}}
  if(t>E.adoraron){for(let i=0;i<6;i++){const q=((t-E.adoraron)*.8+i*.17)%1;heart(60+i*38,gy-130-q*120,1.4,'#ff6a70',1-q)}}
  TX('ERA TAN MANSA',180,66,26,'#fff',t,T0[4]+.0,{out:E.dormia-.45,hl:[2],hc:BRASS});
  TX('DORMÍA BAJO SU CAMA',180,66,22,'#fff',t,E.dormia-.1,{out:E.soldados-.45,w:344,hl:[0],hc:BRASS});
  TX('LOS SOLDADOS LA ADORARON',180,66,20,'#fff',t,E.soldados-.1,{w:344,hl:[3],hc:BRASS});
}
// ---------- S5 · mascota y cruce del Atlántico ----------
function s5(t,u){
  bg('#6fa4c0','#c8e0e8');
  const hy=360;sunO(260,170,34,t,.9);
  for(let k=0;k<5;k++){ctx.fillStyle='rgba(30,70,100,'+(.35+k*.12)+')';ctx.beginPath();ctx.moveTo(-10,hy+k*36);for(let x=-10;x<=370;x+=20)ctx.lineTo(x,hy+k*36+Math.sin((x+t*(30+k*10))*.04+k)*5);ctx.lineTo(370,640);ctx.lineTo(-10,640);ctx.fill()}
  const sx=lerp(-130,180,eo(win(t,T0[5]-.1,E.cruzo+.4)))+Math.sin(t*1.6)*3,sy=hy+8+Math.sin(t*1.6)*3;
  // barco
  poly([[sx-80,sy],[sx+80,sy],[sx+62,sy+26],[sx-62,sy+26]],'#2a2a34');rect0(sx-80,sy-3,160,4,'#c0392b');
  rect0(sx-30,sy-36,70,36,'#e8e2d0');for(let i=0;i<4;i++)rect0(sx-24+i*16,sy-28,9,10,'#2a2a34');rect0(sx+16,sy-64,16,28,'#2a2a34');rect0(sx+16,sy-52,16,5,'#c0392b');
  for(let i=0;i<3;i++){const q=((t*.8+i*.33)%1);circ(sx+24-q*20,sy-70-q*50,6+q*14,'rgba(230,230,240,'+(.6*(1-q))+')')}
  // osa en proa
  bear(sx-52,sy+2,.55,{col:'#2a1d18',rim:'#ffd98a',t});
  if(t>E.mascota)tag('MASCOTA DE LA BRIGADA',180,470,17,GRN,'#fff',t,E.mascota-.05);
  TX('MASCOTA DE LA BRIGADA',180,66,22,'#1a2a30',t,T0[5]+.0,{out:E.cruzo-.45,w:344,hl:[0],hc:RED,stroke:'rgba(255,255,255,.9)'});
  TX('CRUZÓ EL ATLÁNTICO',180,66,26,'#1a2a30',t,E.cruzo-.1,{hl:[1],hc:RED,stroke:'rgba(255,255,255,.9)'});
  if(t>E.atlantico-.1){tag('OCTUBRE 1914',180,130,22,RED,'#fff',t,E.atlantico-.05)}
  circ(180,300,0.1,'rgba(0,0,0,0)');
}
// ---------- S6 · el ejército va a Francia; la osa se queda; zoológico de Londres ----------
function s6(t,u){
  const gy=470;
  bg('#4a5a6a','#a8b4a8');
  const zm=win(t,E.dic-.3,E.dic+.2);
  // marcha
  if(zm<1){ctx.save();ctx.globalAlpha=1-zm;
    rect0(0,gy,360,200,'#3a3a2a');rect0(0,gy,360,3,'rgba(255,255,255,.3)');
    for(let i=0;i<5;i++){const px=lerp(-10,330,eo(win(t,E.ejercito-.3,E.frente)))+i*34-60;person(px,gy+6,1.3,{robe:'#5a6a3a',hair:'#2a2a2a',ph:t*8+i,t})}
    ctx.restore();
    if(t>E.francia-.2){withA(1-zm,()=>{line(260,gy,260,gy-120,'#2a2a2a',4);poly([[262,gy-120],[330,gy-104],[262,gy-88]],'#2b4a8a');txt('FRANCIA',300,gy-150,20,'#fff',{wt:'900',st:INK,sw:5})})}
    if(t>E.osa6-.3)bear(60,gy+4,1.0,{col:'#2a1d18',rim:'#ffd98a',t,al:(1-zm)});
    if(t>E.frente)withA(1-zm,()=>{stampBox('SIN OSAS',230,220,28,RED,t,E.frente,-.1)});
  }
  // zoo
  if(zm>0){ctx.save();ctx.globalAlpha=zm;
    bg('#cfd8b8','#8aa070');rect0(0,gy,360,200,'#6a5a3a');rect0(0,gy,360,3,'rgba(255,255,255,.4)');
    for(let i=0;i<9;i++){const bx=18+i*40;rect0(bx-3.5,gy-210,7,210,'#1a1a1a');rect0(bx-3.5,gy-210,2,210,'rgba(255,255,255,.35)')}rect0(0,gy-210,360,8,'#1a1a1a');rect0(0,gy-110,360,6,'#1a1a1a');
    bear(lerp(300,190,eo(win(t,E.dejo,E.zoo))),gy+2,1.1,{ph:t<E.zoo?t*5:0,rim:'#ffd98a',t});
    ctx.restore()}
  TX('EL EJÉRCITO IBA A FRANCIA',180,66,21,'#fff',t,T0[6]+.0,{out:E.dic-.5,w:344,hl:[3],hc:BRASS});
  if(t>E.dic-.15){TX('DICIEMBRE DE 1914',180,66,24,'#fff',t,E.dic-.15,{out:E.dejo-.45,hl:[2],hc:BRASS})}
  if(t>E.dejo-.1){TX('LA DEJÓ EN EL ZOO',180,66,24,'#fff',t,E.dejo-.1,{hl:[3],hc:BRASS})}
  tag('ZOOLÓGICO DE LONDRES',180,470,19,RED,'#fff',t,E.zoo-.1);
}
// ---------- S7 · famosa; niños; 1919 ----------
function s7(t,u){
  const gy=470;
  bg('#ffe4a8','#e0a85a');rays(180,300,t,12,420,'rgba(255,255,255,.25)',1,.1,3);rect0(0,gy,360,200,'#5a8a4a');rect0(0,gy,360,3,'#3a6a32');
  bear(180,gy+4,1.8,{rim:'#fff0c0',t,ph:0,down:Math.sin(t*2)*.2});
  for(let i=0;i<4;i++){const px=lerp(i<2?-40:400,i<2?40+i*50:240+(i-2)*54,eo(win(t,E.ninos-.4+i*.1,E.ninos+.5)));person(px,gy+8,1.2,{robe:['#c0392b','#2f6aa8','#e0a020','#7a3a8a'][i],hair:'#4a2e1a',flip:i>=2,arm:t>E.comer?-1.0:0,t})}
  if(t>E.comer-.2){for(let i=0;i<5;i++){const q=((t-E.comer+.2)*.9+i*.2)%1;circ(130+i*26,gy-120-q*70,5,'#f2b134');circ(130+i*26,gy-120-q*70,2,'#fff2c0')}}
  TX('SE HIZO FAMOSA',180,66,28,'#3a2410',t,T0[7]+.0,{out:E.ninos-.1,hl:[2],hc:RED,stroke:'rgba(255,255,255,.9)'});
  TX('LOS NIÑOS LE DABAN DE COMER',180,66,20,'#3a2410',t,E.ninos-.1,{out:E.n1919-.4,w:344,hl:[1],hc:RED,stroke:'rgba(255,255,255,.9)'});
  if(t>E.n1919-.3){TX('EN',180,66,22,'#3a2410',t,E.n1919-.3,{out:E.siempre,stroke:'rgba(255,255,255,.9)'});}
  if(t>E.n1919)slam('1919',180,130,62,RED,t,E.n1919,{st:INK,sw:9});
  if(t>E.siempre-.2)TX('PARA SIEMPRE',180,215,26,'#3a2410',t,E.siempre-.2,{hl:[1],hc:RED,stroke:'rgba(255,255,255,.9)'});
  tag('DONADA AL ZOO',180,470,19,GRN,'#fff',t,E.siempre);
}
// ---------- S8 · Christopher Robin y el osito; libro 1926 ----------
function s8(t,u){
  bg('#f6e8cc','#e8c88a');
  rect0(0,470,360,200,'#c9a46a');rect0(0,470,360,3,'rgba(80,50,20,.5)');
  const k=eio(win(t,E.quiso,E.osito+.4));
  const gy=476;
  person(110,gy,2.0,{robe:'#3a5a8a',hair:'#d8b070',arm:t>E.osito-.3?-.6:0,t});
  const ty=lerp(gy-200,gy-115,k);
  teddy(lerp(140,168,k),ty,1.6,{rot:Math.sin(t*3)*.08});
  // bocadillo
  if(t>E.chris-.1){const a=win(t,E.chris-.1,E.chris+.3);withA(a,()=>{tag('CHRISTOPHER ROBIN',180,100,18,GRN,'#fff',t,E.chris-.05)})}
  if(t>E.milne){tag('SU PADRE: A. A. MILNE',180,140,15,RED,'#fff',t,E.milne-.1)}
  if(t>E.osito+.4){for(let i=0;i<4;i++){const q=((t-E.osito)*.9+i*.25)%1;heart(130+i*28,gy-240-q*60,1.3,'#e0484e',1-q)}}
  // libro
  if(t>E.n1926-.4){const q=eb(win(t,E.n1926-.4,E.n1926+.3));tr(272,360,q*1.0,-.1,()=>{rr(-50,-62,100,124,6);ctx.fillStyle='#2f5d3a';ctx.fill();ctx.strokeStyle=BRASS;ctx.lineWidth=3;ctx.stroke();rect0(-44,-56,6,112,'#1f3f28');txt('WINNIE',2,-26,17,CRM,{wt:'900',f:SERIF});txt('PU',2,-4,22,BRASS,{wt:'900',f:SERIF});teddy(0,34,.9,{col:'#c98a4a'})})}
  if(t>E.n1926)slam('1926',180,230,56,RED,t,E.n1926,{st:INK,sw:9});
  TX('EL HIJO DEL ESCRITOR',180,66,22,'#3a2410',t,E.chris-.35,{out:E.quiso-.5,w:344,stroke:'rgba(255,255,255,.9)'});
  TX('LA QUISO TANTO',180,66,24,'#3a2410',t,E.quiso-.15,{out:E.n1926-.4,hl:[2],hc:RED,stroke:'rgba(255,255,255,.9)'});
  TX('SU PADRE PUBLICÓ',180,66,24,'#3a2410',t,E.n1926-.4,{hl:[2],hc:RED,stroke:'rgba(255,255,255,.9)'});
}
// ---------- S9 · hasta 1934 ----------
function s9(t,u){
  bg('#2a2018','#0e0a08');starfield(t,40,4,.5);
  const gy=450,bx=lerp(-60,170,eo(win(t,T0[9]-.1,T0[9]+1.2)));
  bear(bx,gy+4,1.9,{rim:'#ffd98a',t,ph:t<T0[9]+1.2?t*4:0,al:1-.35*win(t,E.n1934,E.n1934+1.4)});
  // línea de años
  const yy=140,q=win(t,E.londres9-.2,E.n1934);
  line(40,yy,320,yy,'rgba(255,255,255,.3)',3);line(40,yy,40+280*q,yy,BRASS,4);txt('1914',40,yy+24,16,'#fff',{wt:'900'});
  if(t>E.n1934-.3)txt('1934',320,yy+24,16,BRASS,{wt:'900'});circ(40+280*q,yy,6,'#fff');
  TX('LA OSA REAL',180,66,28,'#fff',t,T0[9]+.0,{out:E.londres9-.45,hl:[2],hc:BRASS});
  TX('VIVIÓ EN LONDRES',180,66,26,'#fff',t,E.londres9-.1,{out:E.n1934-.1,hl:[2],hc:BRASS});
  if(t>E.n1934)slam('1934',180,300,70,BRASS,t,E.n1934,{st:INK,sw:10});
}
// ---------- S10 · debate ----------
function s10(t,u){
  const a=win(t,T0[10]+.1,T0[10]+.7);
  bg('#f2b134','#c9833a');rays(180,300,t,14,480,'rgba(255,240,190,.28)',1,.1,3);
  TX('¿HARRY HIZO BIEN',180,66,26,'#fff',t,T0[10]+.0,{hl:[2],hc:RED});
  TX('AL DEJARLA EN EL ZOO?',180,100,26,'#fff',t,E.bien-.2,{hl:[3],hc:RED});
  // dos lados
  const lw=eb(win(t,E.bien,E.bien+.5)),rw=eb(win(t,E.casa-.3,E.casa+.3));
  tr(95,330,lw,0,()=>{rr(-70,-80,140,160,12);ctx.fillStyle='rgba(30,16,8,.8)';ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=3;ctx.stroke();for(let i=0;i<5;i++)rect0(-56+i*26,-70,5,100,'#cfcfcf');bear(0,64,.7,{rim:'#ffd98a',t});txt('ZOO',0,-100,26,'#fff',{wt:'900',st:INK,sw:6})});
  tr(265,330,rw,0,()=>{rr(-70,-80,140,160,12);ctx.fillStyle='rgba(30,16,8,.8)';ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=3;ctx.stroke();poly([[-48,-8],[0,-56],[48,-8]],'#c0392b');rect0(-38,-8,76,62,'#e8d5a8');rect0(-8,16,16,38,'#6a4a28');txt('CASA',0,-100,26,'#fff',{wt:'900',st:INK,sw:6})});
  if(t>E.casa)txt('VS',180,330,30,'#fff',{wt:'900',st:INK,sw:7,sc:1+.1*wob(t-E.casa,12,4)});
  if(t>E.coment-.1){const k=eb(win(t,E.coment-.1,E.coment+.35));tr(180,455,k,0,()=>{rr(-130,-22,260,44,22);ctx.fillStyle='#fff';ctx.fill();txt('COMENTA TU RESPUESTA',0,0,18,'#c0392b',{wt:'900'})})}
  if(t>E.sig-.1)tag('SÍGUEME PARA MÁS',180,502,18,GRN,'#fff',t,E.sig-.05);
}
boot([s0,s1,s2,s3,s4,s5,s6,s7,s8,s9,s10],TRS,{cap:{acc:BRASS}});
