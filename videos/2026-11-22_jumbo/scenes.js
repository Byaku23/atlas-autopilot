// ===== 22 · Jumbo — escenas =====
const T0=T;
const PAL={col:ELE,dark:ELE2,rim:BRASS};
function rect0(x,y,w,h,c){ctx.fillStyle=c;ctx.fillRect(x,y,w,h)}
// ---------- S0 · gancho: elefante de cartel + diccionario + JUMBO ----------
function s0(t,u){
  const gy=500,c=camAt(t,[[0,185,340,1.12],[3.4,180,330,1.0,0,'eio']]);
  bg('#7a1420','#25040c');
  world(c,()=>{
    vgrad(-500,gy,'#8a1a26','#2a050c',-700,1100);rays(180,280,t,12,460,'rgba(255,214,120,.07)',1,.12,3);
    rect0(-300,gy,1000,500,'#3a0a12');rect0(-300,gy,1000,3,'rgba(255,214,120,.55)');
    const ex=lerp(-70,200,eo(win(t,-1.1,.8)));
    ctx.fillStyle='rgba(0,0,0,.4)';ctx.beginPath();ctx.ellipse(ex+10,gy+4,100,9,0,0,TAU);ctx.fill();
    ele(ex,gy,1.75,Object.assign({ph:t*5*(1-win(t,.5,.9)),t,tr:eo(win(t,E.famoso-.3,E.famoso+.35))*(1-win(t,E.dicc,E.dicc+.4)*.5)},PAL));
  });
  bulbs(22,t,14);
  TX('UN ELEFANTE TAN FAMOSO',180,70,24,'#fff',t,-.6,{out:E.dicc-.15,w:330,hl:[3],hc:BRASS});
  TX('SU NOMBRE ACABÓ EN EL DICCIONARIO',180,70,19,'#fff',t,E.dicc-.35,{out:E.jumbo-.55,w:340,hl:[4],hc:BRASS});
  const a=win(t,E.dicc,E.dicc+.35)*(1-win(t,E.jumbo-.2,E.jumbo-.05));
  if(a>0)withA(a,()=>{parch(180,190,230,96);txt('jumbo',180,168,34,'#3a1a10',{wt:'900',f:SERIF});txt('adj. muy grande',180,206,16,'#6a3a20',{f:SERIF})});
  if(t>E.jumbo){slam('JUMBO',180,150,68,BRASS,t,E.jumbo,{st:INK,sw:9});shock(180,150,t,E.jumbo,BRASS,170,5,.6)}
}
// ---------- S1 · Sudán, 1860: cazadores y la cría ----------
function s1(t,u){
  const gy=440,pan=eio(win(t,E.llev-.2,E.cria));
  bg('#ff9a4a','#7a2040');
  world({x:180+pan*70,y:320,z:1+.08*pan,r:0},()=>{
    vgrad(-500,gy,'#ffb25a','#7a2040',-700,1100);sunO(250,330,50,t,.95);
    ctx.fillStyle='#4a1530';ctx.beginPath();ctx.ellipse(40,gy,140,40,0,Math.PI,TAU);ctx.fill();ctx.beginPath();ctx.ellipse(330,gy,170,28,0,Math.PI,TAU);ctx.fill();
    rect0(-300,gy,1000,500,'#2a0f1f');
    line(70,gy,70,gy-70,'#1a0a14',7);ctx.fillStyle='#1a0a14';ctx.beginPath();ctx.ellipse(70,gy-76,56,12,0,0,TAU);ctx.fill();
    const walk=t*3.2*(1-win(t,E.caz,E.caz+.6)),SIL={col:'#2a1020',dark:'#1a0a14',rim:'#ffb25a'};
    const ma=1-win(t,E.madre,E.madre+.9);
    if(ma>0)ele(110,gy+14,1.7,Object.assign({ph:walk,t,al:ma},SIL));
    const cx=215+eio(win(t,E.llev,E.cria+.4))*150;
    ele(cx,gy+12,.62,Object.assign({ph:t>E.llev?t*7:walk,t,tr:t>E.cria?.5:0},SIL));
    const hx=t<E.llev?lerp(480,330,eo(win(t,E.caz-.3,E.caz+.5))):cx+92;
    if(t>E.caz-.3){person(hx,gy+10,1.5,{robe:'#1a0a14',hair:'#1a0a14',gun:true,flip:true,arm:-.3,ph:t>E.llev?t*8:0});person(hx+42,gy+10,1.4,{robe:'#1a0a14',hair:'#1a0a14',flip:true,ph:t>E.llev?t*8+1:0})}
    if(t>E.llev)line(cx+26,gy-26,hx-6,gy-38,'#c9a46a',2.2);
    if(t>E.mataron&&t<E.mataron+.4)glow(hx-26,gy-50,90*(1-(t-E.mataron)/.4),'rgba(255,240,200,.9)');
  });
  dust(t,30,'rgba(255,200,140,.6)',5,22,1.4,.6);
  TX('NACIÓ EN SUDÁN',180,64,26,'#fff',t,T0[1]+.0,{out:E.caz-.3,hl:[2],hc:BRASS});
  TX('CAZADORES',180,64,30,'#fff',t,E.caz-.15,{out:E.llev-.35,hl:[0],hc:RED});
  TX('SE LO LLEVARON',180,64,28,'#fff',t,E.llev-.15,{out:E.cria-.15,hl:[2],hc:RED});
  if(t>E.cria)slam('UNA CRÍA',180,130,50,BRASS,t,E.cria,{st:INK,sw:8});
  tag('SUDÁN · 1860',180,470,22,RED,'#fff',t,E.sudan-.05);
}
// ---------- S2 · Londres 1865: flaco y enfermo → seis toneladas ----------
function s2(t,u){
  const gy=470,q=eb(win(t,E.seis-.15,E.seis+.55));
  bg('#1c3a44','#0e1a22');rect0(0,gy,360,200,'#25353f');rect0(0,gy,360,3,'rgba(255,255,255,.2)');
  glow(180,300,220,'rgba(240,180,60,.10)');
  const s=lerp(1.45,2.0,q),x=lerp(150,170,q);
  ele(x,gy+8,s,{col:mixc('#7c8492','#a0a6b4',q),dark:ELE2,thin:1-q,down:1-q,t,ph:0,rim:q>.2?BRASS:null});
  const by=eb(win(t,E.zoo-.15,E.zoo+.5));
  ctx.save();for(let i=0;i<9;i++){const bx=16+i*41;rect0(bx-3.5,-640+by*640,7,gy+12,'#0e141a');rect0(bx-3.5,-640+by*640,2,gy+12,'rgba(240,180,60,.5)')}rect0(0,-640+by*640+60,360,8,'#0e141a');ctx.restore();
  TX('LONDRES, 1865',180,70,28,'#fff',t,T0[2]+.0,{out:E.seis-.3,hl:[1],hc:BRASS});
  TX('FLACO Y ENFERMO',180,112,24,'#fff',t,E.flaco-.1,{out:E.seis-.3,hl:[0,2],hc:RED});
  if(t>E.seis-.1){const n=Math.min(6,countV(0,6,t,E.seis-.1,.55));txt(fmtN(Math.max(0,n),0),180,112,86,BRASS,{wt:'900',st:INK,sw:9,sc:1+.14*wob(t-E.seis,14,5)});tag('TONELADAS',180,170,22,RED,'#fff',t,E.tonel-.1);shock(180,300,t,E.seis,BRASS,150,4,.5)}
  tag('ZOOLÓGICO DE LONDRES',180,520,18,'#0e141a',CRM,t,E.londres-.1);
}
// ---------- S3 · nervioso: colmillos contra la pared, miedo ----------
function s3(t,u){
  const gy=490,act=win(t,E.desgast,E.desgast+.3),sh=act*Math.sin(t*17)*2.6;
  bg('#2a0a12','#4a1020');
  const al=t>E.miedo?(.5+.5*Math.sin((t-E.miedo)*9))*.22:0;
  rect0(0,gy,360,200,'#2a1218');
  rect0(306,120,80,gy-110,'#6a3a2a');for(let i=0;i<14;i++){rect0(306,128+i*26,80,2,'rgba(0,0,0,.3)');rect0(306+(i%2?20:0)+30,128+i*26,2,26,'rgba(0,0,0,.25)')}
  ele(150+sh,gy+8,1.55,Object.assign({t,ph:0,ear:act*.25*Math.sin(t*13),down:.2},PAL));
  if(t>E.desgast){for(let i=0;i<9;i++)burst(304,352,t,E.desgast+i*.28,['#ffe9b8','#fff'],8,60,.6,2)}
  if(t>E.miedo){const k=eo(win(t,E.miedo-.1,E.miedo+.5)),px=lerp(70,30,k);person(px,gy+8,1.4,{robe:CRM,hair:'#3a2418',arm:-2.2,ph:0});txt('!',px+6,gy-120,34,BRASS,{wt:'900',st:INK,sw:6,sc:1+.2*wob(t-E.miedo,14,5)})}
  if(al>0){ctx.fillStyle='rgba(217,54,62,'+al+')';ctx.fillRect(0,0,360,640)}
  TX('SE VOLVIÓ NERVIOSO',180,64,24,'#fff',t,E.volvio-.2,{out:E.desgast-.1,w:340,hl:[2],hc:RED});
  TX('DESGASTABA SUS COLMILLOS',180,64,21,'#fff',t,E.desgast-.1,{out:E.miedo-.4,w:344,hl:[2],hc:BRASS});
  TX('EL ZOO TUVO MIEDO',180,64,26,'#fff',t,E.miedo-.4,{hl:[2],hc:RED});
  stampBox('PELIGRO',180,300,40,RED,t,E.dano,-.12);
  if(t>E.dano)burst(180,300,t,E.dano,[RED,'#fff',BRASS],26,190,.8,3);
}
// ---------- S4 · vendido a Barnum, Londres estalla ----------
function s4(t,u){
  const q=win(t,E.estallo-.05,E.estallo+.4);
  bg(mixc('#f3e7c9','#7a1420',q),mixc('#e2cfa0','#3a0812',q));
  const yo=eio(win(t,E.estallo-.1,E.estallo+.45))*520;
  if(yo<500)tr(0,yo,1,0,()=>{
    parch(180,300,250,210);for(let i=0;i<7;i++)rect0(62,222+i*20,i%3==2?120:236,3,'rgba(90,50,20,.45)');
    ctx.save();ctx.strokeStyle='#6a3a20';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(90,372);ctx.bezierCurveTo(110,340,130,400,150,368);ctx.bezierCurveTo(170,340,185,395,210,366);ctx.stroke();ctx.restore();
    stampBox('VENDIDO',180,290,38,RED,t,E.vend,-.14);
    if(t>E.diez-.1&&t<E.estallo+.2){const n=countV(0,10000,t,E.diez-.1,.8);txt('$'+fmtN(Math.max(0,n),0),180,150,56,RED,{wt:'900',st:'#fff',sw:8,sc:1+.1*wob(t-E.diez,14,5)});tag('DÓLARES',180,196,18,INK,CRM,t,E.dolares-.1)}
  });
  if(t>E.vend)burst(180,290,t,E.vend,[RED,BRASS,'#fff'],24,180,.8,3);
  TX('VENDIDO A BARNUM',180,64,28,INK,t,T0[4]+.0,{out:E.estallo-.15,stroke:'#fff',sw:6,hl:[2],hc:RED});
  if(q>0){
    for(let i=0;i<28;i++){const ts=E.londres4+.1+i*.085;if(t<ts)continue;const k=eo(cl((t-ts)/.55)),sx=R(i)*360,ex=24+R(i+9)*312,ey=510-R(i+5)*50;envel(lerp(sx,ex,k),lerp(-30,ey,k),1.15,(R(i+3)-.5)*1.6*k+(1-k)*3)}
    sign(62,345,1.2,'NO',t,E.protestas);sign(180,322,1.25,'NO',t,E.protestas+.12);sign(298,348,1.2,'NO',t,E.protestas+.24);
    TX('LONDRES ESTALLÓ',180,64,28,'#fff',t,E.londres-.1,{out:E.miles-.1,hl:[1],hc:BRASS});
    TX('MILES DE CARTAS',180,64,28,'#fff',t,E.miles-.1,{out:E.reina-.3,hl:[2],hc:BRASS});
  }
  if(t>E.reina-.1){const k=eb(cl((t-E.reina)/.45));circ(180,300,70*k,'rgba(40,6,14,.9)',BRASS,3);
    tr(180,300,2.4*k+.02*Math.sin(t*6),0,()=>{glow(0,0,60,'rgba(240,180,60,.5)');poly([[-24,12],[-26,-14],[-12,-2],[0,-22],[12,-2],[26,-14],[24,12]],BRASS,'#8a5a1a',2);rect0(-24,12,48,8,'#d98a1a');circ(0,2,3,RED);circ(-13,4,2.2,'#fff');circ(13,4,2.2,'#fff')});
    TX('HASTA LA REINA VICTORIA',180,64,22,'#fff',t,E.reina-.1,{w:340,hl:[2,3],hc:BRASS})}
  if(t>E.quejo)shock(180,300,t,E.quejo,RED,130,4,.5);
}
// ---------- S5 · Nueva York: en tres semanas recuperó lo pagado ----------
function s5(t,u){
  const gy=440;bg('#0e2a2a','#1a1a3a');starfield(t,40,7,.8);
  for(let i=0;i<10;i++){const h=60+R(i*3)*100,x=i*40-10;rect0(x,gy-h,36,h,'#0a1620');for(let j=0;j<h/14;j++)if(R(i*9+j)>.55)rect0(x+6+(j%2)*14,gy-h+6+j*12,5,6,'rgba(255,214,120,.65)')}
  rect0(0,gy,360,200,'#13222a');
  ctx.fillStyle=RED;ctx.beginPath();ctx.moveTo(180,180);ctx.lineTo(300,gy);ctx.lineTo(60,gy);ctx.closePath();ctx.fill();
  for(let i=0;i<4;i++){ctx.fillStyle=CRM;ctx.beginPath();ctx.moveTo(180,180);ctx.lineTo(60+i*60,gy);ctx.lineTo(90+i*60,gy);ctx.closePath();ctx.fill()}
  circ(180,176,5,BRASS);line(180,176,180,150,'#8a5a1a',2);poly([[180,150],[196,156],[180,162]],BRASS);
  bulbs(200,t,12,10);
  person(52,gy+14,1.6,{robe:'#1a1a2a',hat:true,hair:'#1a1014',arm:t>E.recup?-1.9:0,beard:true});
  const N=44;for(let i=0;i<N;i++){const ts=E.recup+i*.085;if(t<ts)continue;const cx=130+R(i)*170,ry=gy+8-(i%9)*3.2-Math.floor(i/9)*0,k=(t-ts)/.5,y=k<1?lerp(-20,ry,k*k):ry;coin(cx,y,7,k<1?k*14:0)}
  TX('EN NUEVA YORK',180,64,28,'#fff',t,T0[5]+.0,{out:E.recup-.1,hl:[1,2],hc:BRASS});
  TX('RECUPERÓ LO QUE PAGÓ',180,64,22,'#fff',t,E.recup-.1,{w:344,hl:[0],hc:BRASS});
  if(t>E.tres-.1){const n=Math.min(3,countV(0,3,t,E.tres-.1,.4));txt(fmtN(Math.max(0,n),0),180,130,80,BRASS,{wt:'900',st:INK,sw:9,sc:1+.14*wob(t-E.tres,14,5)})}
  tag('SOLO 3 SEMANAS',180,480,22,RED,'#fff',t,E.sem-.2);
}
// ---------- S6 · gira por América en tren ----------
function s6(t,u){
  const gy=450,sp=170,sh=Math.sin(t*30)*.8;
  bg('#2a3a6a','#e08a4a');
  ctx.fillStyle='rgba(30,20,50,.55)';for(let i=-1;i<4;i++){const x=((i*200-t*30)%800+800)%800-200;ctx.beginPath();ctx.ellipse(x,gy,150,70,0,Math.PI,TAU);ctx.fill()}
  ctx.fillStyle='rgba(20,12,36,.85)';for(let i=-1;i<5;i++){const x=((i*140-t*70)%700+700)%700-140;ctx.beginPath();ctx.ellipse(x,gy,100,36,0,Math.PI,TAU);ctx.fill()}
  rect0(0,gy,360,200,'#1a1020');
  for(let i=0;i<5;i++){const x=((i*120-t*sp)%600+600)%600-60;line(x,gy-100,x,gy+4,'#0a0610',4);line(x-14,gy-92,x+14,gy-92,'#0a0610',3)}
  railBed(gy+2);
  const lx=lerp(-200,150,eo(win(t,T0[6]-.2,T0[6]+1.2)))+(t>T0[6]+1.2?(t-T0[6]-1.2)*14:0);
  tr(lx,sh,1,0,()=>{
    loco(0,gy,1.1,{flip:true,t,lux:0});
    [-1,-2].forEach(k=>{const wx=k*136;rr(wx-62,gy-70,124,58,4);ctx.fillStyle=RED;ctx.fill();ctx.strokeStyle='#7a1420';ctx.lineWidth=2;ctx.stroke();rect0(wx-62,gy-26,124,3,BRASS);txt(k==-1?'JUMBO':'BARNUM',wx,gy-46,22,BRASS,{wt:'900',st:INK,sw:4});[-40,-4,32].forEach(a=>circ(wx+a+8,gy-6,8,'#17181f','#8a8f9e',1.5));line(wx+62,gy-18,wx+74,gy-18,'#8a8f9e',3)});
    for(let i=0;i<10;i++){const ts=T0[6]+i*.22,k=(t-ts)%2.2/2.2;if(t<ts)continue;const kk=((t-ts)%2.2)/2.2;ctx.globalAlpha=.55*(1-kk);circ(65-kk*-90*0-kk*160,gy-100-kk*70,10+kk*22,'#e6e6f0');ctx.globalAlpha=1}
  });
  streaks(t,10,'rgba(255,255,255,.18)',-1,380,90,.5);
  TX('RECORRIÓ AMÉRICA',180,64,28,'#fff',t,E.recorrio-.15,{hl:[1],hc:BRASS});
  TX('EN TREN',180,100,30,'#fff',t,E.tren6-.2,{hl:[1],hc:BRASS});
}
// ---------- S7 · 15 de septiembre de 1885 ----------
function s7(t,u){
  const gy=470,ft=t-E.atro;
  bg(NIGHT,'#14304a');starfield(t,50,3,.9);
  glow(280,130,100,'rgba(220,235,255,.25)');circ(280,130,28,'#f6efdc');circ(270,122,5,'rgba(0,0,0,.08)');
  rect0(0,gy,360,200,'#0c1620');
  for(let i=0;i<3;i++){const x=60+i*130;line(x,gy-90,x,gy,'#05080c',4);glow(x,gy-92,24,'rgba(255,214,120,.5)');circ(x,gy-92,4,'#ffe9b8')}
  railBed(gy+2);
  rr(280,gy-62,140,58,4);ctx.fillStyle='#7a1420';ctx.fill();rect0(280,gy-24,140,3,BRASS);
  const ex=lerp(20,175,eio(win(t,T0[7]+.2,E.atro-.05)));
  if(t<E.atro)ele(ex,gy+2,1.2,{ph:t*3.6,t,down:.6,col:'#9aa0ae',dark:'#6a7080',rim:'#cfe0ff'});
  const lx=t<E.atro?lerp(-300,ex-110,ei(win(t,E.carga-.55,E.atro))):lerp(ex-110,500,win(t,E.atro,E.atro+1.1));
  const lux=win(t,E.carga-.6,E.atro);
  if(t>E.carga-.6){loco(lx,gy+2,1.2,{flip:true,t,lux:t<E.atro?lux:1-win(t,E.atro,E.atro+1.2)});if(t<E.atro)glow(lx+110,gy-40,40+lux*130,'rgba(255,246,200,.5)')}
  if(t>E.atro){for(let i=0;i<8;i++){const kk=Math.min(1,ft/3.2);ctx.globalAlpha=.45*(1-kk);circ(lx-60+i*14+ft*14,gy-130-ft*30-i*5,14+i*3,'#cfd6e6');ctx.globalAlpha=1}}
  if(t>E.atro){ctx.fillStyle='rgba(255,255,255,'+Math.max(0,Math.exp(-ft*4.5)*.95)+')';ctx.fillRect(0,0,360,640)}
  TX('15 DE SEPTIEMBRE DE 1885',180,64,21,'#fff',t,E.quince-.15,{out:E.canada-.25,w:344,hl:[3],hc:BRASS});
  TX('CANADÁ',180,64,30,'#fff',t,E.canada-.15,{out:E.carga-.3,hl:[0],hc:RED});
  TX('UN TREN DE CARGA',180,64,26,'#fff',t,E.carga-.3,{out:E.atro+.15,hl:[2],hc:RED});
  if(t>E.tenia-.1){const n=Math.min(24,countV(0,24,t,E.tenia-.1,.7));txt(fmtN(Math.max(0,n),0),180,230,112,BRASS,{wt:'900',st:INK,sw:10,sc:1+.1*wob(t-E.tenia,12,5)});tag('AÑOS',180,310,26,RED,'#fff',t,E.anos24-.1)}
}
// ---------- S8 · la versión de Barnum: ¿inventada? ----------
function s8(t,u){
  bg('#1d4a40','#0e2a2a');starfield(t,30,9,.5);
  const dim=1-.35*win(t,E.inv,E.inv+.4),cy=290;
  parch(180,cy,310,236,dim);
  ctx.save();ctx.globalAlpha=dim;
  rect0(30,cy+62,300,5,'#3a2a20');for(let i=0;i<10;i++)rect0(36+i*30,cy+66,10,5,'#6a4a28');
  const push=eo(win(t,E.salv,E.salv+.7)),jx=lerp(105,150,push),cx=lerp(235,300,push);
  ele(jx,cy+64,.9,{col:'#8a909e',dark:ELE2,t,ph:t>E.salv?t*6:0,tr:push>.1?.7:0});
  ele(cx,cy+66,.46,{col:'#a9aebb',dark:'#6a7080',t,flip:true,ph:0});
  if(t>E.conto)txt('!',cx+4,cy-38,34,RED,{wt:'900',st:INK,sw:5,sc:1+.1*Math.sin(t*10)});
  ctx.restore();
  TX('BARNUM CONTÓ QUE',180,64,26,'#fff',t,T0[8]+.0,{out:E.murio+.1,hl:[0],hc:BRASS});
  TX('MURIÓ SALVANDO A UNA CRÍA',180,64,21,'#fff',t,E.murio-.05,{out:E.versi-.1,w:344,hl:[2],hc:BRASS});
  TX('ESA VERSIÓN',180,64,28,'#fff',t,E.versi-.1,{out:E.pudo-.1,hl:[1],hc:BRASS});
  stampBox('¿INVENTADA?',180,cy,36,RED,t,E.inv,-.12);
  if(t>E.inv)burst(180,cy,t,E.inv,[RED,'#fff'],26,190,.8,3);
}
// ---------- S9 · piel y esqueleto ----------
function s9(t,u){
  const gy=440,lx=lerp(180,88,eio(win(t,E.esq-.2,E.esq+.6))),burn=win(t,E.quemo,E.quemo+1.0);
  bg('#1a1420','#3a2a40');rect0(0,gy,360,220,'#120d18');rect0(0,gy,360,3,'rgba(240,180,60,.5)');
  [[88,'#ffe9b8'],[252,'#ffe9b8']].forEach(([x,c],i)=>{const a=i==0?win(t,T0[9],T0[9]+.5):win(t,E.esq,E.esq+.8);ctx.fillStyle='rgba(255,240,200,'+(.11*a)+')';ctx.beginPath();ctx.moveTo(x-12,0);ctx.lineTo(x+12,0);ctx.lineTo(x+86,gy);ctx.lineTo(x-86,gy);ctx.closePath();ctx.fill()});
  rect0(lx-70,gy,140,14,'#2a1e34');rect0(182,gy,140,14,'#2a1e34');
  const sc=lerp(1.35,1.02,eio(win(t,E.esq-.2,E.esq+.6)));
  ele(lx,gy,sc,{col:mixc('#b08a5a','#2a1a14',burn),dark:mixc('#8a6a40','#1a100c',burn),t,ph:0,al:1-burn*.3});
  if(t>E.quemo)fire(lx,gy,1.25*sc,t,Math.sin(Math.min(1,(t-E.quemo)/1.0)*1.57)*(1-win(t,E.n75+.6,E.n75+1.8)*.7));
  if(t>E.esq)eleSkel(252,gy,1.02,{k:win(t,E.esq,E.esq+1.4),al:win(t,E.esq,E.esq+.4)});
  if(t>E.museo-.1){const k=eb(cl((t-E.museo)/.4));ctx.save();ctx.strokeStyle=BRASS;ctx.lineWidth=3;ctx.globalAlpha=k;rr(172,gy-136,156,150,8);ctx.stroke();ctx.restore()}
  TX('SE QUEDÓ CON SU PIEL',180,64,22,'#fff',t,T0[9]+.0,{out:E.esq+.3,w:344,hl:[3],hc:BRASS});
  TX('ESQUELETO: MUSEO DE NUEVA YORK',180,64,18,'#fff',t,E.museo-.45,{out:E.quemo-.2,w:350,hl:[0],hc:BRASS});
  TX('LA PIEL SE QUEMÓ',180,64,26,'#fff',t,E.quemo-.2,{hl:[3],hc:RED});
  tag('PIEL',88,470,18,RED,'#fff',t,T0[9]+.6);tag('ESQUELETO',252,470,18,BRASS,'#2a1608',t,E.esq);
  if(t>E.n75)slam('1975',180,160,64,RED,t,E.n75,{st:INK,sw:9});
}
// ---------- S10 · jumbo = gigante ----------
function s10(t,u){
  bg('#d9363e','#7a1420');rays(180,330,t,12,420,'rgba(255,220,150,.08)',1,.1,3);bulbs(22,t,14);
  TX('HOY DECIMOS',180,70,28,'#fff',t,T0[10]+.0,{out:E.gigante-.05,hl:[1],hc:BRASS});
  if(t>E.jumbo10)slam('JUMBO',180,150,64,BRASS,t,E.jumbo10,{st:INK,sw:9});
  TX('PARA TODO LO GIGANTE',180,230,22,'#fff',t,E.gigante-.25,{w:344,hl:[3],hc:BRASS});
  if(t>E.huevos-.1){const k=eb(cl((t-E.huevos)/.45));tr(100,360,k,0,()=>{rr(-56,10,112,34,6);ctx.fillStyle='#8a5a2a';ctx.fill();[-34,0,34].forEach((ex,i)=>{ctx.fillStyle=CRM;ctx.beginPath();ctx.ellipse(ex,-4+Math.sin(t*5+i)*2,19,25,0,0,TAU);ctx.fill();ctx.strokeStyle='#b07a1a';ctx.lineWidth=2;ctx.stroke()});tag('HUEVOS JUMBO',0,86,16,'#3a1a10',CRM,t,E.huevos+.1)})}
  if(t>E.jet-.1){const k=eo(cl((t-E.jet)/.6)),x=lerp(430,262,k);tr(x,350+Math.sin(t*3)*3,1,-.12,()=>{rr(-58,-9,116,18,9);ctx.fillStyle=CRM;ctx.fill();poly([[-52,-6],[-70,-34],[-56,-34],[-34,-6]],CRM);poly([[-10,-6],[-36,40],[-20,40],[22,-6]],'#d8c8a0');poly([[58,-3],[78,4],[58,9]],CRM);for(let i=0;i<8;i++)circ(-40+i*12,-1,2,'#7a1420');tag('JET JUMBO',0,66,16,'#3a1a10',CRM,t,E.jet+.2)});streaks(t,6,'rgba(255,255,255,.35)',1,300,70,.7)}
}
// ---------- S11 · ¿explotado o inmortal? ----------
function s11(t,u){
  bg('#101f2a','#1a0c18');starfield(t,40,11,.7);
  TX('¿BARNUM LO EXPLOTÓ',180,56,26,'#fff',t,T0[11]+.05,{w:344,hl:[2],hc:RED});
  TX('O LO HIZO INMORTAL?',180,92,26,'#fff',t,E.inmortal-.55,{w:344,hl:[3],hc:BRASS});
  if(t>E.explot-.1){const k=eb(cl((t-E.explot)/.45));tr(92,290,k,0,()=>{rr(-70,-96,140,192,14);ctx.fillStyle='#3a0a14';ctx.fill();ctx.save();glowStroke(RED,3,12);rr(-70,-96,140,192,14);ctx.stroke();ctx.restore();for(let i=0;i<6;i++)rect0(-56+i*22,-90,5,180,'#0e141a');ele(-4,52,.62,{col:'#7c8492',dark:ELE2,thin:.5,down:.6,t});for(let i=0;i<6;i++)rect0(-56+i*22,-90,5,180,'rgba(14,20,26,.0)')});
    if(t>E.explot)tag('LO EXPLOTÓ',92,420,17,RED,'#fff',t,E.explot+.15)}
  if(t>E.inmortal-.1){const k=eb(cl((t-E.inmortal)/.45));tr(268,290,k,0,()=>{rr(-70,-96,140,192,14);ctx.fillStyle='#0f3a32';ctx.fill();ctx.save();glowStroke(BRASS,3,12);rr(-70,-96,140,192,14);ctx.stroke();ctx.restore();glow(0,-10,70,'rgba(240,180,60,.3)');rect0(-44,56,88,16,'#8a6a2a');ele(-6,56,.62,{col:BRASS,dark:'#c9922a',t,rim:'#fff'});for(let i=0;i<3;i++)txt('★',-40+i*40,-74,16,BRASS,{})});
    if(t>E.inmortal)tag('LO HIZO INMORTAL',268,420,15,BRASS,'#2a1608',t,E.inmortal+.15)}
  if(t>E.inmortal+.1){const vs=eb((t-E.inmortal-.1)/.4);tr(180,290,vs*(1+.06*Math.sin(t*5)),0,()=>{circ(0,0,22,'#1c0c1c','#fff',2.4);txt('VS',0,1,18,BRASS,{st:INK,sw:3})})}
  if(t>E.coment){const q=eb((t-E.coment)/.4);tr(180,474,q*(1+.03*Math.sin(t*8)),0,()=>{glow(0,0,110,'rgba(240,180,60,.35)');ctx.save();glowStroke(BRASS,2.6,14);rr(-100,-26,200,52,26);ctx.stroke();ctx.restore();ctx.fillStyle=BRASS;rr(-100,-26,200,52,26);ctx.fill();txt('COMENTA',0,1,24,'#2a1608',{wt:'900'})});if(t<E.coment+.5)shock(180,474,t,E.coment,BRASS,120,4,.5)}
  if(t>E.sig-.1)tag('SÍGUEME PARA MÁS',180,530,19,RED,'#fff',t,E.sig);
}
boot([s0,s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11],TRS,{cap:{acc:BRASS}});
