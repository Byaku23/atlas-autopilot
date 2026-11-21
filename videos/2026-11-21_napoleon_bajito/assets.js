// ===== 21 · Bucéfalo, el caballo de Alejandro Magno — recursos (póster dorado de Macedonia: ocre, vino, turquesa) =====
CAP.acc='#ffd27a';
const GOLD='#ffd27a',RED='#e0414a',TEAL='#37c8d4',INK='rgba(26,12,18,.92)',CRM='#f3e7c9',SAND='#c89a5a',SAND2='#8a5a2a',HRS='#17111c',HRS2='#0e0a12';
const TX=(s,x,y,sz,col,t,t0,o={})=>mtext(s,x,y,sz,col,t,t0,Object.assign({stroke:INK,sw:Math.max(3.5,sz*.2)},o));
function glowStroke(col,lw,blur=10){ctx.strokeStyle=col;ctx.lineWidth=lw;ctx.shadowColor=col;ctx.shadowBlur=blur;ctx.lineJoin='round';ctx.lineCap='round'}
// ---------- caballo de perfil mirando a la derecha. (0,0)=pezuñas. o: flip, ph, head(0..1 baja), t, col, dark, mane, rim, al ----------
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
// sombra plana del caballo (sol a la izquierda: cae hacia la derecha). al=opacidad, len=largo
function horseShadow(x,y,s,len,al,o={}){ctx.save();ctx.translate(x,y);ctx.transform(1,0,-len,-.32,0,0);ctx.scale(s*(o.flip?-1:1),s);ctx.globalAlpha=al;
  ctx.fillStyle='#000';ctx.beginPath();ctx.ellipse(-2,-54,38,22,0,0,TAU);ctx.fill();[-22,-16,16,24].forEach(lx=>{ctx.fillRect(lx-3,-46,6,44)});
  poly([[14,-64],[32,-62],[50,-96],[37,-101]],'#000');poly([[37,-101],[51,-103],[70,-82],[64,-75],[49,-86]],'#000');ctx.restore()}
// ---------- persona sencilla (pies en y=0). o: robe, hair, cape, crown, beard, arm (neg = levanta), ph, flip, q, t ----------
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
// ---------- moneda / talento y bolsa ----------
function coin(x,y,r,rot=0){ctx.save();ctx.translate(x,y);ctx.scale(Math.abs(Math.cos(rot))*.8+.2,1);circ(0,0,r,GOLD,'#b07a1a',1.6);circ(0,0,r*.66,'rgba(255,255,255,.0)','#b07a1a',1.2);ctx.restore()}
function purse(x,y,s,lbl){tr(x,y,s,0,()=>{glow(0,0,70,'rgba(255,210,122,.35)');ctx.beginPath();ctx.moveTo(-30,-10);ctx.quadraticCurveTo(-46,40,0,44);ctx.quadraticCurveTo(46,40,30,-10);ctx.closePath();ctx.fillStyle='#8a5a2a';ctx.fill();ctx.strokeStyle=GOLD;ctx.lineWidth=2.2;ctx.stroke();
  ctx.beginPath();ctx.moveTo(-18,-12);ctx.quadraticCurveTo(0,-30,18,-12);ctx.lineTo(24,-24);ctx.lineTo(-24,-24);ctx.closePath();ctx.fillStyle='#a8742f';ctx.fill();line(-20,-14,20,-14,GOLD,3);
  if(lbl)txt(lbl,0,18,26,GOLD,{wt:'900',st:INK,sw:5})})}
// ---------- sol con rayos ----------
function sunO(x,y,r,t,a=1){ctx.save();ctx.globalAlpha=a;glow(x,y,r*2.6,'rgba(255,190,90,.45)');rays(x,y,t,14,r*3,'rgba(255,220,130,.22)',1,.15,8);
  const g=ctx.createRadialGradient(x,y,r*.1,x,y,r);g.addColorStop(0,'#fff6c8');g.addColorStop(.6,'#ffd27a');g.addColorStop(1,'#ff9a3a');ctx.fillStyle=g;ctx.beginPath();ctx.arc(x,y,r,0,TAU);ctx.fill();ctx.restore()}
// ---------- suelo de arena + muros lejanos ----------
function sandFloor(gy,col=SAND){ctx.fillStyle=col;ctx.fillRect(-300,gy,1000,500);ctx.fillStyle='rgba(255,235,180,.35)';ctx.fillRect(-300,gy,1000,3);
  for(let i=0;i<14;i++){ctx.fillStyle='rgba(120,70,20,.18)';ctx.beginPath();ctx.ellipse(R(i*3)*520-80,gy+14+R(i*7)*70,18+R(i)*30,3,0,0,TAU);ctx.fill()}}
function wallFar(gy,col){ctx.fillStyle=col;for(let i=-1;i<9;i++){const x=i*56,h=40+R(i*5)*26;ctx.fillRect(x,gy-h,50,h+4);ctx.fillRect(x+8,gy-h-8,8,8);ctx.fillRect(x+30,gy-h-8,8,8)}
  for(let i=0;i<4;i++){const x=20+i*92;ctx.fillRect(x,gy-100,10,100);ctx.fillRect(x-4,gy-104,18,6)}}
// ---------- pergamino ----------
function parch(x,y,w,h,a=1){ctx.save();ctx.globalAlpha=a;ctx.shadowColor='rgba(0,0,0,.5)';ctx.shadowBlur=18;rr(x-w/2,y-h/2,w,h,10);ctx.fillStyle=CRM;ctx.fill();ctx.restore();
  ctx.save();ctx.globalAlpha=a;ctx.strokeStyle='rgba(138,90,42,.5)';ctx.lineWidth=2;rr(x-w/2+6,y-h/2+6,w-12,h-12,7);ctx.stroke();ctx.restore()}
// ---------- sello ----------
function stampBox(s,x,y,sz,col,t,ts,rot=-.14){if(t<ts)return;const u=t-ts,sc=1+1.6*Math.exp(-u*11),a=cl(u*14);ctx.save();ctx.globalAlpha=a;ctx.translate(x,y);ctx.rotate(rot);ctx.scale(sc,sc);
  const w=tw(s,sz)+26;ctx.save();glowStroke(col,5,12);rr(-w/2,-sz*.7,w,sz*1.4,8);ctx.stroke();ctx.restore();ctx.fillStyle='rgba(26,12,18,.6)';rr(-w/2,-sz*.7,w,sz*1.4,8);ctx.fill();txt(s,0,2,sz,col,{st:'rgba(26,12,18,.8)',sw:5,wt:'900'});ctx.restore()}
// ---------- ciudad con puerta y emblema ----------
function city(x,y,s,k,t){tr(x,y,s,0,()=>{[[-100,70],[-70,100],[70,100],[100,70]].forEach(([bx,h],i)=>{const q=eo(cl(k*1.6-i*.12));ctx.fillStyle=i%2?'#c9a06a':'#d8b27a';ctx.fillRect(bx-17,-h*q,34,h*q);ctx.fillStyle='#8a5a2a';ctx.fillRect(bx-17,-h*q,34,5);if(q>.9){ctx.fillStyle='#3a2418';ctx.fillRect(bx-4,-h*q+22,8,12)}});
  const q=eo(cl(k*1.4-.2));ctx.fillStyle='#e0bc84';ctx.fillRect(-52,-130*q,104,130*q);ctx.fillStyle='#8a5a2a';ctx.fillRect(-56,-130*q-6,112,8);[-44,-14,16,36].forEach(cx=>{ctx.fillRect(cx,-130*q-16,12,12)});
  ctx.beginPath();ctx.moveTo(-26,0);ctx.lineTo(-26,-44*q);ctx.arc(0,-44*q,26,Math.PI,TAU);ctx.lineTo(26,0);ctx.closePath();ctx.fillStyle='#2a1020';ctx.fill();
  if(q>.8){circ(0,-100*q,17,'#3a1626',GOLD,2.4);horse(-1,-92*q,.2,{col:GOLD,dark:GOLD,mane:GOLD})}})}
function starfield(t,n,seed,a=1){stars(t,n,seed,a)}
