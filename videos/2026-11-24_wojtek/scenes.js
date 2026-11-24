// ===== 24 · Voytek, el oso soldado — escenas =====
const T0=T;
const SK=(c)=>({stroke:'rgba(255,255,255,.9)'});
function boom(x,y,t,ts,sz=1){const u=t-ts;if(u<0||u>.8)return;glow(x,y,70*sz*(1-u),'rgba(255,170,60,'+(.8*(1-u))+')');burst(x,y,t,ts,['#ffd166','#ff8a3a','#fff'],14,120*sz,.7,3)}
// ---------- S0 · gancho ----------
function s0(t,u){
  const gy=500;
  bg('#2a3646','#d98a4a');
  abbey(70,gy-70,1.1,'#1d1d24');ridge(t,'#2a2a30','#34343a',470,4);
  boom(40+((t*2)%1)*0,330,t,.9,1.3);boom(300,350,t,3.3,1);boom(250,380,t,5.2,1.2);
  rect0(0,gy,360,200,'#2c2a22');rect0(0,gy,360,3,'rgba(255,200,120,.7)');
  const bx=lerp(-60,170,eo(win(t,-1.0,1.2)));
  ctx.fillStyle='rgba(0,0,0,.35)';ctx.beginPath();ctx.ellipse(bx,gy+4,46,8,0,0,TAU);ctx.fill();
  bearUp(bx,gy+4,2.3,{ph:t*5*(1-win(t,.3,1.4)),crate:1,rim:'#ffd98a',flip:false});
  TX('UN OSO DE',180,66,26,'#fff',t,-.6,{out:E.kilos-.1,hl:[2],hc:BRASS});
  if(t>E.kilos){slam('250 KILOS',180,134,52,BRASS,t,E.kilos,{st:INK,sw:9});shock(180,134,t,E.kilos,BRASS,150,5,.6)}
  if(t>E.fuego)stampBox('BAJO EL FUEGO',180,226,28,RED,t,E.fuego,-.1);
  if(t>E.soldado-.05)TX('SOLDADO POLACO',180,300,26,'#fff',t,E.soldado-.05,{hl:[1],hc:RED});
  if(t>E.polaco)flagPL(290,380,52,t);
}
// ---------- S1 · Irán 1942 ----------
function s1(t,u){
  const gy=470;
  bg('#f0c987','#c4793a');sunO(260,150,38,t,.95);
  for(let k=0;k<3;k++){ctx.fillStyle=['#d79a55','#c0813f','#a96a30'][k];ctx.beginPath();ctx.moveTo(-10,gy-k*28);for(let x=-10;x<=370;x+=20)ctx.lineTo(x,gy-60-k*34+Math.sin((x+t*10*(k+1))*.018+k)*16);ctx.lineTo(370,640);ctx.lineTo(-10,640);ctx.fill()}
  rect0(0,gy,360,200,'#a96a30');
  for(let i=0;i<5;i++){const px=((i*80-t*34)%460+460)%460-50;soldier(px,gy+8,1.2,{ph:t*7+i,t})}
  TX('TODO EMPEZÓ EN',180,66,24,'#2a1a10',t,T0[1]+.0,{out:E.n1942-.1,hl:[2],hc:RED,stroke:'rgba(255,255,255,.9)'});
  if(t>E.n1942-.05)slam('1942',180,134,70,RED,t,E.n1942,{st:INK,sw:10});
  tag('IRÁN',180,470,22,RED,'#fff',t,E.iran-.05);
}
// ---------- S2 · soldados polacos adoptan el osezno ----------
function s2(t,u){
  const gy=470;
  bg('#3a4a5a','#e0a060');rect0(0,gy,360,200,'#4a3e2a');
  poly([[200,gy],[300,gy-110],[390,gy]],'#6a7a42');poly([[-30,gy],[40,gy-80],[110,gy]],'#56653a');
  const hx=lerp(-50,100,eo(win(t,T0[2]-.1,E.polacos+.4)));
  soldier(hx,gy+8,2.0,{ph:t<E.polacos+.4?t*8:0,arm:t>E.leche?-1.1:0,t});
  const cx=lerp(450,215,eo(win(t,E.adoptaron-.4,E.adoptaron+.3)));
  if(t>E.adoptaron-.4)bear(cx,gy+4,.62,{rim:'#ffd98a',t,col:BCOL,dark:BDRK,flip:true});
  if(t>E.leche-.1){const q=eb(win(t,E.leche-.1,E.leche+.3));bottle(lerp(150,185,q),gy-70,1.5*q,-1.2);for(let i=0;i<5;i++){const w=((t-E.leche)*1.2+i*.2)%1;circ(190+i*2,gy-85+w*40,2.4,'rgba(255,255,255,'+(1-w)+')')}}
  if(t>E.vodka)stampBox('¡DE VODKA!',180,230,30,RED,t,E.vodka,-.1);
  TX('SOLDADOS POLACOS',180,66,24,'#fff',t,T0[2]+.1,{out:E.palestina-.1,hl:[1],hc:RED});
  if(t>E.palestina-.05)TX('CAMINO DE PALESTINA',180,66,22,'#fff',t,E.palestina-.05,{out:E.adoptaron-.1,w:344,hl:[2],hc:RED});
  if(t>E.adoptaron-.05)TX('ADOPTARON UN OSEZNO',180,66,24,'#fff',t,E.adoptaron-.05,{out:E.leche-.45,w:340,hl:[2],hc:RED});
  if(t>E.leche-.05)TX('LECHE CONDENSADA',180,66,24,'#fff',t,E.leche-.05,{hl:[0],hc:RED});
}
// ---------- S3 · el nombre ----------
function s3(t,u){
  const gy=450;
  bg('#f1ead6','#d7c690');rays(180,260,t,12,420,'rgba(230,57,70,.14)',1,.1,3);
  rect0(0,gy,360,200,'#6a7a42');rect0(0,gy,360,3,'#3d4a2a');
  bear(lerp(-70,185,eo(win(t,T0[3],E.voytek))),gy+4,1.25,{ph:t*5*(1-win(t,E.voytek-.4,E.voytek)),rim:'#fff0c0',t,col:BCOL,dark:BDRK,helm:1});
  TX('LO LLAMARON',180,66,26,'#2a1a10',t,T0[3]+.0,{out:E.voytek+.2,hl:[1],hc:RED,stroke:'rgba(255,255,255,.9)'});
  if(t>E.voytek){slam('VOYTEK',180,150,56,RED,t,E.voytek,{st:INK,sw:9});shock(180,150,t,E.voytek,RED,150,5,.6)}
  if(t>E.guerrero-.1)tag('GUERRERO ALEGRE',180,230,22,GRN,'#fff',t,E.guerrero-.05);
  if(t>E.alegre)for(let i=0;i<6;i++){const q=((t-E.alegre)*.9+i*.17)%1;heart(110+i*28,360-q*110,1.4,'#e0484e',1-q)}
}
// ---------- S4 · enorme, cerveza y cigarrillos ----------
function s4(t,u){
  const gy=480;
  bg('#25301f','#12180e');starfield(t,22,9,.5);rect0(0,gy,360,200,'#2a2216');
  poly([[-10,gy],[180,170],[370,gy]],'#7a7448');poly([[120,gy],[180,300],[240,gy]],'#16130c');glow(180,gy-60,90,'rgba(255,190,90,.25)');
  const gr=eb(win(t,E.enorme-.1,E.enorme+.5)),sl=win(t,E.dormia,E.dormia+.8);
  bear(180,gy+4,lerp(.9,2.0,gr),{rim:'#ffd98a',t,col:BCOL,dark:BDRK,down:sl*0});
  if(t>E.soldados4){for(let i=0;i<2;i++)soldier(i?300:56,gy+8,1.2,{arm:-1.1+Math.sin(t*5+i)*.4,t,flip:i==1})}
  if(t>E.cerveza-.1){const q=eb(win(t,E.cerveza-.1,E.cerveza+.3));mug(92,gy-110,1.5*q,t)}
  if(t>E.cigarrillos-.1){const k=eio(win(t,E.secomia-.3,E.secomia+.3)),q=eb(win(t,E.cigarrillos-.1,E.cigarrillos+.3));if(k<1)cig(lerp(270,225,k),lerp(gy-120,gy-105,k),1.7*q*(1-k),-.4);for(let i=0;i<3;i++){const w=((t*.8+i*.33)%1);if(t<E.secomia)circ(270+w*8,gy-130-w*40,4+w*8,'rgba(220,220,220,'+(.5*(1-w))+')')}}
  if(t>E.secomia)txt('¡ÑAM!',230,gy-170,28,'#fff',{wt:'900',st:INK,sw:6,sc:1+.2*wob(t-E.secomia,12,4)});
  if(t>E.fumarlos-.1)tag('SE LOS COMÍA',180,300,24,RED,'#fff',t,E.fumarlos-.05);
  TX('CRECIÓ ENORME',180,66,28,'#fff',t,T0[4]+.0,{out:E.comia-.1,hl:[1],hc:BRASS});
  TX('COMÍA CON LOS SOLDADOS',180,66,21,'#fff',t,E.comia-.05,{out:E.cerveza-.2,w:344,hl:[0],hc:BRASS});
  TX('CERVEZA Y CIGARRILLOS',180,66,22,'#fff',t,E.cerveza-.2,{w:344,hl:[0,2],hc:BRASS});
}
// ---------- S5 · barco a Italia 1944, permiso ----------
function s5(t,u){
  bg('#4a6a80','#b8d0d8');
  const hy=360;sunO(270,170,30,t,.85);
  for(let k=0;k<5;k++){ctx.fillStyle='rgba(20,50,80,'+(.35+k*.12)+')';ctx.beginPath();ctx.moveTo(-10,hy+k*36);for(let x=-10;x<=370;x+=20)ctx.lineTo(x,hy+k*36+Math.sin((x+t*(30+k*10))*.04+k)*5);ctx.lineTo(370,640);ctx.lineTo(-10,640);ctx.fill()}
  const sx=lerp(-130,180,eo(win(t,T0[5]-.1,E.italia+.4)))+Math.sin(t*1.6)*3,sy=hy+8+Math.sin(t*1.6)*3;
  poly([[sx-80,sy],[sx+80,sy],[sx+62,sy+26],[sx-62,sy+26]],'#2a2a34');rect0(sx-80,sy-3,160,4,'#c0392b');
  rect0(sx-30,sy-36,70,36,'#cfd4c0');for(let i=0;i<4;i++)rect0(sx-24+i*16,sy-28,9,10,'#2a2a34');rect0(sx+16,sy-64,16,28,'#2a2a34');
  for(let i=0;i<3;i++){const q=((t*.8+i*.33)%1);circ(sx+24-q*20,sy-70-q*50,6+q*14,'rgba(230,230,240,'+(.6*(1-q))+')')}
  bearUp(sx-52,sy+2,.5,{rim:'#ffd98a',t});
  TX('EN',180,66,24,'#14202a',t,T0[5]+.0,{out:E.n1944,stroke:'rgba(255,255,255,.9)'});
  if(t>E.n1944-.05)slam('1944',180,120,64,RED,t,E.n1944,{st:INK,sw:9});
  if(t>E.italia-.1)tag('RUMBO A ITALIA',180,210,22,GRN,'#fff',t,E.italia-.05);
  if(t>E.permiso-.05){const q=eb(win(t,E.permiso-.05,E.permiso+.3));tr(285,430,q,.15,()=>{rr(-44,-30,88,60,4);ctx.fillStyle=CRM;ctx.fill();ctx.strokeStyle='#a8844a';ctx.lineWidth=2;ctx.stroke();for(let i=0;i<4;i++)rect0(-34,-20+i*9,50,3,'#8a7a5a')})}
  if(t>E.especial-.05)TX('PERMISO ESPECIAL',180,300,26,'#14202a',t,E.especial-.3,{w:340,hl:[1],hc:RED,stroke:'rgba(255,255,255,.9)'});
  if(t>E.consiguio)stampBox('¡APROBADO!',180,380,32,'#2e9e4a',t,E.consiguio,-.1);
}
// ---------- S6 · Montecasino ----------
function s6(t,u){
  const gy=500;
  bg('#1c2230','#6a3a2a');starfield(t,18,3,.4);
  abbey(285,gy-120,1.4,'#14141a');ridge(t,'#1c1c24','#242430',440,3);
  [[1,1.5],[2.4,1.2],[3.6,1.1],[5.0,1.3],[6.4,1.0],[7.6,1.4],[9.2,1.2],[10.6,1.0],[12.0,1.3]].forEach(([d,z],i)=>boom(40+((i*97)%280),300+(i%3)*40,t,E.mayo+d,z));
  rect0(0,gy,360,200,'#2a251a');rect0(0,gy,360,3,'rgba(255,160,80,.6)');
  // camión y cañón
  rect0(-10,gy-52,80,34,'#4a5a2c');rect0(56,gy-66,26,48,'#3a4a22');circ(14,gy-14,9,'#14141a');circ(60,gy-14,9,'#14141a');
  poly([[250,gy-20],[330,gy-44],[336,gy-36],[256,gy-12]],'#3a3a40');circ(270,gy-10,12,'#14141a');circ(270,gy-10,5,'#6a6a70');
  const cyc=(t-E.llevo)%3.2,go=E.llevo<=t&&t<E.cabo+.5;
  let bx=70,fl=false,cr=0;
  if(!go){bx=lerp(-50,100,eo(win(t,T0[6]-.1,E.llevo)))}else{const k=cyc/3.2;if(k<.5){bx=lerp(100,250,eio(k*2));cr=1}else{bx=lerp(250,100,eio(k*2-1));fl=true}}
  if(t<E.llevo){bx=lerp(-50,100,eo(win(t,T0[6]-.1,E.llevo)))}
  bearUp(bx,gy+4,1.5,{ph:t*9,crate:cr,flip:fl,rim:'#ffb070'});
  if(t>E.insignia-.1){const q=eb(win(t,E.insignia-.1,E.insignia+.35));withA(1,()=>badge(110,250,1.15*q,t))}
  TX('MAYO DE 1944',180,66,26,'#fff',t,T0[6]+.0,{out:E.montecasino-.1,hl:[0],hc:RED});
  if(t>E.montecasino-.05)slam('MONTECASINO',180,120,36,BRASS,t,E.montecasino,{st:INK,sw:8});
  if(t>E.llevo-.05)TX('CARGÓ LOS PROYECTILES',180,170,20,'#fff',t,E.llevo-.05,{out:E.fuego6-.3,w:340,hl:[1],hc:RED});
  if(t>E.fuego6)stampBox('BAJO FUEGO',180,170,28,RED,t,E.fuego6,-.08);
  if(t>E.insignia-.05)TX('SU INSIGNIA',110,322,16,'#fff',t,E.insignia-.05,{w:140,hl:[1],hc:RED,out:E.leyenda-.2});
  if(t>E.leyenda-.1)TX('SEGÚN LA LEYENDA',180,66,24,'#fff',t,E.leyenda-.1,{hl:[2],hc:BRASS});
  if(t>E.cabo){stampBox('CABO',180,290,48,BRASS,t,E.cabo,-.1);chev(180,345,1.3,BRASS)}
  tag('ASCENDIDO A CABO',180,470,18,RED,'#fff',t,E.leyenda-.05);
}
// ---------- S7 · fin de la guerra, Escocia, zoo de Edimburgo ----------
function s7(t,u){
  const gy=470,zm=win(t,E.zoo-.3,E.zoo+.2);
  bg('#8aa4b8','#d6dcd2');
  if(zm<1){ctx.save();ctx.globalAlpha=1-zm;
    castle(230,gy-20,1.0);rect0(0,gy-20,360,200,'#4a5a3a');rect0(0,gy-20,360,3,'#2f3d24');
    for(let i=0;i<4;i++){const px=lerp(-40,300,eo(win(t,E.guerra7-.4,E.escocia)))+i*30-90;soldier(px,gy+8,1.2,{ph:t*8+i,t})}
    ctx.restore();
    if(t>E.escocia-.1)withA(1-zm,()=>tag('ESCOCIA',180,470,22,RED,'#fff',t,E.escocia-.05));
    if(t>E.n1947-.1)withA(1-zm,()=>slam('1947',180,150,64,RED,t,E.n1947,{st:INK,sw:9}));
  }
  if(zm>0){ctx.save();ctx.globalAlpha=zm;
    bg('#cdd8c0','#8aa070');rect0(0,gy,360,200,'#6a5a3a');rect0(0,gy,360,3,'rgba(255,255,255,.4)');
    for(let i=0;i<9;i++){const bx=18+i*40;rect0(bx-3.5,gy-210,7,210,'#1a1a1a')}rect0(0,gy-210,360,8,'#1a1a1a');rect0(0,gy-110,360,6,'#1a1a1a');
    bear(lerp(300,190,eo(win(t,E.zoo,E.edimburgo))),gy+2,1.1,{ph:t<E.edimburgo?t*5:0,rim:'#ffd98a',t,col:BCOL,dark:BDRK,helm:0});
    ctx.restore();TX('ZOOLÓGICO DE EDIMBURGO',180,66,22,'#1a1a1a',t,E.zoo-.1,{w:344,hl:[2],hc:RED,stroke:'rgba(255,255,255,.9)'});}
  TX('AL TERMINAR LA GUERRA',180,66,22,'#14202a',t,T0[7]+.0,{out:E.escocia-.3,w:344,hl:[2],hc:RED,stroke:'rgba(255,255,255,.9)'});
  if(t>E.escocia-.25&&t<E.zoo-.4)TX('EL EJÉRCITO SE FUE A ESCOCIA',180,66,19,'#14202a',t,E.escocia-.25,{out:E.zoo-.45,w:344,hl:[4],hc:RED,stroke:'rgba(255,255,255,.9)'});
}
// ---------- S8 · 16 años ----------
function s8(t,u){
  bg('#202a30','#0c1014');starfield(t,30,6,.45);
  const gy=470;rect0(0,gy,360,200,'#1c1a14');for(let i=0;i<9;i++)rect0(18+i*40-3.5,gy-200,7,200,'rgba(255,255,255,.16)');
  bear(180,gy+2,1.5,{rim:'#9ab',t,col:BCOL,dark:BDRK,al:.85,ph:0,down:.6});
  const yy=140,q=win(t,E.dieciseis-.2,E.n1963);
  line(40,yy,320,yy,'rgba(255,255,255,.3)',3);line(40,yy,40+280*q,yy,BRASS,4);txt('1947',40,yy+24,16,'#fff',{wt:'900'});if(t>E.n1963-.3)txt('1963',320,yy+24,16,BRASS,{wt:'900'});circ(40+280*q,yy,6,'#fff');
  TX('VIVIÓ ALLÍ',180,66,28,'#fff',t,T0[8]+.0,{out:E.dieciseis-.1,hl:[1],hc:BRASS});
  if(t>E.dieciseis-.05)slam('16 AÑOS',180,300,62,BRASS,t,E.dieciseis,{st:INK,sw:10});
}
// ---------- S9 · el polaco ----------
function s9(t,u){
  const gy=470;
  bg('#e8d9a8','#c89a58');rays(180,300,t,12,420,'rgba(255,255,255,.22)',1,.1,3);
  rect0(0,gy,360,200,'#6a5a3a');for(let i=0;i<9;i++)rect0(18+i*40-3.5,gy-200,7,200,'rgba(20,20,20,.55)');
  const hap=win(t,E.polaco9,E.alegraba+.3);
  bear(230,gy+2,1.5,{rim:'#fff0c0',t,col:BCOL,dark:BDRK,down:-hap*.3,ph:0});
  const sx=lerp(-60,60,eo(win(t,T0[9]+.1,E.oia)));soldier(sx,gy+8,1.7,{ph:t<E.oia?t*7:0,t});
  if(t>E.polaco9-.1){const q=eb(win(t,E.polaco9-.1,E.polaco9+.3));tr(90,gy-190,q,-.05,()=>{rr(-56,-22,112,44,22);ctx.fillStyle='#fff';ctx.fill();poly([[-20,20],[-30,36],[-4,20]],'#fff');txt('CZEŚĆ',0,0,22,RED,{wt:'900'})})}
  if(t>E.alegraba-.05)for(let i=0;i<6;i++){const q=((t-E.alegraba)*.9+i*.17)%1;heart(160+i*24,gy-160-q*110,1.5,'#e0484e',1-q)}
  TX('DICEN QUE',180,66,26,'#2a1a10',t,T0[9]+.0,{out:E.polaco9-.1,hl:[0],hc:RED,stroke:'rgba(255,255,255,.9)'});
  if(t>E.polaco9-.05)TX('AL OÍR POLACO...',180,66,24,'#2a1a10',t,E.polaco9-.05,{out:E.alegraba-.4,hl:[2],hc:RED,stroke:'rgba(255,255,255,.9)'});
  if(t>E.alegraba-.05)TX('¡SE ALEGRABA!',180,66,30,'#2a1a10',t,E.alegraba-.05,{hl:[1],hc:RED,stroke:'rgba(255,255,255,.9)'});
}
// ---------- S10 · debate ----------
function s10(t,u){
  bg('#3d4a2a','#1c2414');rays(180,300,t,14,480,'rgba(240,192,64,.14)',1,.1,3);
  TX('¿VOYTEK FUE UN',180,66,26,'#fff',t,T0[10]+.0,{hl:[2],hc:BRASS});
  TX('SOLDADO DE VERDAD?',180,100,26,'#fff',t,E.verdad-.5,{hl:[0],hc:BRASS});
  const lw=eb(win(t,E.verdad,E.verdad+.5)),rw=eb(win(t,E.mascota-.3,E.mascota+.3));
  tr(95,330,lw,0,()=>{rr(-70,-80,140,160,12);ctx.fillStyle='rgba(18,16,12,.8)';ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=3;ctx.stroke();bearUp(0,66,1.1,{crate:1,rim:'#ffd98a'});txt('SOLDADO',0,-100,22,'#fff',{wt:'900',st:INK,sw:6})});
  tr(265,330,rw,0,()=>{rr(-70,-80,140,160,12);ctx.fillStyle='rgba(18,16,12,.8)';ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=3;ctx.stroke();bear(-10,60,.95,{rim:'#ffd98a',col:BCOL,dark:BDRK});heart(38,-32,3,'#e0484e');txt('MASCOTA',0,-100,22,'#fff',{wt:'900',st:INK,sw:6})});
  if(t>E.mascota)txt('VS',180,330,30,'#fff',{wt:'900',st:INK,sw:7,sc:1+.1*wob(t-E.mascota,12,4)});
  if(t>E.coment-.1){const k=eb(win(t,E.coment-.1,E.coment+.35));tr(180,455,k,0,()=>{rr(-130,-22,260,44,22);ctx.fillStyle='#fff';ctx.fill();txt('COMENTA TU RESPUESTA',0,0,18,'#c0392b',{wt:'900'})})}
  if(t>E.sig-.1)tag('SÍGUEME PARA MÁS',180,502,18,RED,'#fff',t,E.sig-.05);
}
boot([s0,s1,s2,s3,s4,s5,s6,s7,s8,s9,s10],TRS,{cap:{acc:'#ff6b6b'}});
