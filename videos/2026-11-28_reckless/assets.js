// ===== 27 · Hans el Listo (Clever Hans) — recursos (Berlín 1904: noche de gas azul petróleo, ámbar y crema; acento oro/turquesa) =====
CAP.acc='#ffcf5a';
const GOLD='#ffcf5a',RED='#e0524a',TEAL='#4fc3c8',GRN='#7bd06a',INK='rgba(12,18,28,.92)',CRM='#f4ecd8',NAVY='#17283a',AMB='#d8964a',COB='#3a2c26';
const TX=(s,x,y,sz,col,t,t0,o={})=>mtext(s,x,y,sz,col,t,t0,Object.assign({stroke:INK,sw:Math.max(3.5,sz*.2)},o));
function glowStroke(col,lw,blur=10){ctx.strokeStyle=col;ctx.lineWidth=lw;ctx.shadowColor=col;ctx.shadowBlur=blur;ctx.lineJoin='round';ctx.lineCap='round'}
function rect0(x,y,w,h,c){ctx.fillStyle=c;ctx.fillRect(x,y,w,h)}
function ridge(y,col,seed=1,amp=24){ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(-10,y+120);for(let x=-10;x<=370;x+=20)ctx.lineTo(x,y-R(seed+(x/20|0))*amp);ctx.lineTo(370,y+120);ctx.fill()}
function stampBox(s,x,y,sz,col,t,ts,rot=-.14){if(t<ts)return;const u=t-ts,sc=1+1.6*Math.exp(-u*11),a=cl(u*14);ctx.save();ctx.globalAlpha=a;ctx.translate(x,y);ctx.rotate(rot);ctx.scale(sc,sc);
  const w=tw(s,sz)+26;ctx.save();glowStroke(col,5,12);rr(-w/2,-sz*.7,w,sz*1.4,8);ctx.stroke();ctx.restore();ctx.fillStyle='rgba(20,16,8,.65)';rr(-w/2,-sz*.7,w,sz*1.4,8);ctx.fill();txt(s,0,2,sz,col,{st:'rgba(20,16,8,.8)',sw:5,wt:'900'});ctx.restore()}
function horse(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);if(o.al!==undefined)ctx.globalAlpha*=o.al;
  const c=o.col||HRS,d=o.dark||HRS2,m=o.mane||'#05030a',a=Math.sin(o.ph||0)*7,hd=(o.head||0)*1.1,sw=Math.sin((o.t||0)*3)*4;
  poly([[-30,-62],[-54,-48+sw],[-60,-22+sw],[-48,-32],[-32,-48]],m);
  line(-22,-44,-24-a,-3,d,8);line(16,-44,18+a,-3,d,8);circ(-24-a,-2,3.6,'#3a2a20');circ(18+a,-2,3.6,'#3a2a20');
  ctx.fillStyle=c;ctx.beginPath();ctx.ellipse(-2,-54,38,22,0,0,TAU);ctx.fill();
  line(-16,-44,-18+a,-3,c,8.5);line(24,-44,26-a,-3,c,8.5);circ(-18+a,-2,3.6,'#3a2a20');circ(26-a,-2,3.6,'#3a2a20');
  ctx.save();ctx.translate(26,-62);ctx.rotate(hd*.85);ctx.translate(-26,62);
  poly([[14,-64],[32,-62],[50,-96],[37,-101]],c);
  poly([[12,-64],[28,-106],[38,-103],[24,-60]],m);
  poly([[37,-101],[51,-103],[70,-82],[64,-75],[49,-86]],c);
  poly([[40,-101],[42,-111],[46,-102]],c);poly([[46,-103],[52,-102],[62,-84],[58,-84]],'#f3e7c9');circ(53,-93,2.2,'#f3e7c9');circ(53.4,-93,1.1,'#141420');
  ctx.restore();
  if(o.rim){ctx.strokeStyle=o.rim;ctx.lineWidth=1.6;ctx.globalAlpha*=.85;ctx.beginPath();ctx.ellipse(-2,-54,36,19,0,-2.9,-1.2);ctx.stroke()}
  ctx.restore()}
function person(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);if(o.al!==undefined)ctx.globalAlpha*=o.al;
  const robe=o.robe||'#c9a46a',skin='#e0b48a',sw=Math.sin(o.ph||0)*5;
  if(o.cape)poly([[-8,-52],[8,-52],[17+Math.sin((o.t||0)*5)*3,-6],[-17,-6]],o.cape);
  line(-4,-24,-4+sw,-1,'#3a2418',4.6);line(4,-24,4-sw,-1,'#3a2418',4.6);
  poly([[-10,-22],[10,-22],[8,-54],[-8,-54]],robe);poly([[-10,-22],[10,-22],[10,-26],[-10,-26]],'rgba(0,0,0,.25)');
  ctx.save();ctx.translate(7,-50);ctx.rotate(o.arm||0);line(0,0,0,17,skin,4.2);ctx.restore();
  circ(0,-63,8.2,skin);ctx.fillStyle=o.hair||'#3a2418';ctx.beginPath();ctx.arc(0,-65,8.6,Math.PI*1.02,TAU*1.0);ctx.fill();
  if(o.beard){ctx.fillStyle=o.hair||'#3a2418';ctx.beginPath();ctx.moveTo(-6,-60);ctx.quadraticCurveTo(0,-48,6,-60);ctx.closePath();ctx.fill()}
  if(o.crown){poly([[-7,-70],[-6,-78],[-3,-72],[0,-80],[3,-72],[6,-78],[7,-70]],GOLD)}
  if(o.q){txt('?',2,-84-3*Math.sin(o.q*6+(o.t||0)*4),16,GOLD,{st:INK,sw:4})}
  ctx.restore()}
// caballo de Hans (castaño) con anteojeras opcionales; o: head, ph, t, bl(0..1 anteojera puesta)
function hans(x,y,s,o={}){horse(x,y,s,Object.assign({col:'#8a4b28',dark:'#5a2e18',mane:'#2a140a',rim:'#ffd9a0'},o));
  if(o.bl>0){const q=o.bl,hd=(o.head||0)*1.1;ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);ctx.translate(26,-62);ctx.rotate(hd*.85);ctx.translate(-26,62);
    ctx.globalAlpha*=q;rr(40,-112,26,26,5);ctx.fillStyle='#161012';ctx.fill();ctx.strokeStyle=GOLD;ctx.lineWidth=2;ctx.stroke();ctx.restore()}}
// periódico genérico (sin marcas)
function paper(x,y,s,t=0,rot=-.05){tr(x,y,s,rot,()=>{rr(-70,-90,140,180,4);ctx.fillStyle='#e8dfc4';ctx.fill();ctx.strokeStyle='#6a5a3a';ctx.lineWidth=2;ctx.stroke();rect0(-60,-78,120,5,'#2a2418');txt('DIARIO · NUEVA YORK · 1904',0,-62,9,'#2a2418',{wt:'900'});line(-60,-52,60,-52,'#2a2418',1.6);txt('EL CABALLO',0,-30,17,'#2a2418',{wt:'900'});txt('QUE CALCULA',0,-10,17,'#2a2418',{wt:'900'});rect0(-60,2,44,40,'#b8a878');for(let i=0;i<9;i++)line(-8,4+i*5,60,4+i*5,'#8a7a5a',2);for(let i=0;i<6;i++)line(-60,50+i*6,60-(i%3)*12,50+i*6,'#8a7a5a',2)})}
// tarjeta de calendario
function calCard(x,y,top,big,col,q=1){tr(x,y,q,0,()=>{rr(-48,-40,96,80,8);ctx.fillStyle=CRM;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=3;ctx.stroke();rr(-48,-40,96,22,8);ctx.fillStyle=col;ctx.fill();txt(top,0,-29,13,'#fff',{wt:'900'});txt(big,0,12,40,'#14202e',{wt:'900'})})}
// ojos grandes que miran a (lx,ly)
function eyes(x,y,s,lx,ly){tr(x,y,s,0,()=>{[-22,22].forEach(ex=>{ctx.fillStyle='#fff';ctx.beginPath();ctx.ellipse(ex,0,17,22,0,0,TAU);ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=3;ctx.stroke();const a=Math.atan2(ly,lx);circ(ex+Math.cos(a)*7,Math.sin(a)*9,8,'#14202e')})})}
// cara grande de quien pregunta, gesto = inclinación de cabeza
function face(x,y,s,nod,hat){tr(x,y,s,nod*.35,()=>{circ(0,0,34,'#e0b48a');ctx.fillStyle='#3a2418';ctx.beginPath();ctx.arc(0,-6,35,Math.PI*1.04,TAU*.98);ctx.fill();if(hat){rect0(-40,-30,80,8,'#1a1a22');rr(-26,-62,52,36,6);ctx.fillStyle='#1a1a22';ctx.fill()}circ(-12,2,3.4,'#14202e');circ(12,2,3.4,'#14202e');ctx.strokeStyle='#8a4a3a';ctx.lineWidth=2.6;ctx.beginPath();ctx.moveTo(-8,16);ctx.quadraticCurveTo(0,20,8,16);ctx.stroke();ctx.fillStyle='#3a2418';ctx.beginPath();ctx.moveTo(-14,12);ctx.quadraticCurveTo(0,6,14,12);ctx.quadraticCurveTo(0,16,-14,12);ctx.fill()})}
