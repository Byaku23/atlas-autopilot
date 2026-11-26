// ===== 27 · Pirámides: ¿esclavos? — recursos (arena, turquesa, lapislázuli y oro) =====
CAP.acc='#ffcf4a';
const GOLD='#ffcf4a',RED='#d1322e',SAND='#e8c27a',SAND2='#c8964e',LAPIS='#1f3f8a',TURQ='#2fb5a8',INK='rgba(24,16,6,.92)',CRM='#f6ecd0',CLAY='#a8643a',NILE='#2a6f8a';
const TX=(s,x,y,sz,col,t,t0,o={})=>mtext(s,x,y,sz,col,t,t0,Object.assign({stroke:INK,sw:Math.max(3.5,sz*.2)},o));
function glowStroke(col,lw,blur=10){ctx.strokeStyle=col;ctx.lineWidth=lw;ctx.shadowColor=col;ctx.shadowBlur=blur;ctx.lineJoin='round';ctx.lineCap='round'}
function rect0(x,y,w,h,c){ctx.fillStyle=c;ctx.fillRect(x,y,w,h)}
function person(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);if(o.al!==undefined)ctx.globalAlpha*=o.al;
  const robe=o.robe||'#7a7a4a',skin=o.skin||'#e0b48a',sw=Math.sin(o.ph||0)*5;
  line(-4,-24,-4+sw,-1,o.hair||'#2a2418',4.6);line(4,-24,4-sw,-1,o.hair||'#2a2418',4.6);
  poly([[-10,-22],[10,-22],[8,-54],[-8,-54]],robe);rect0(-9,-38,18,3,'rgba(30,24,10,.6)');
  ctx.save();ctx.translate(7,-50);ctx.rotate(o.arm||0);line(0,0,0,17,skin,4.2);if(o.hold==='map'){rr(-6,12,14,10,1);ctx.fillStyle=CRM;ctx.fill()}ctx.restore();
  circ(0,-63,8.2,skin);
  if(o.hat==='helm'||!o.hat){ctx.fillStyle='#5a6340';ctx.beginPath();ctx.arc(0,-65,9.6,Math.PI,TAU);ctx.fill();rect0(-12,-66,24,2.6,'#4a5233')}
  if(o.hat==='peak'){ctx.fillStyle='#4a5a2a';ctx.beginPath();ctx.arc(0,-66,9.4,Math.PI,TAU);ctx.fill();ctx.fillRect(-10,-67,22,3);ctx.fillStyle=BRASS;ctx.fillRect(-9,-69,18,1.6);ctx.fillRect(-2,-74,4,4)}
  if(o.hat==='top'){ctx.fillStyle='#0a0a10';ctx.fillRect(-11,-70,22,3.4);ctx.fillRect(-7,-88,14,19);ctx.fillStyle=RED;ctx.fillRect(-7,-74,14,3)}
  if(o.hat==='fed'){ctx.fillStyle='#14120e';ctx.fillRect(-13,-69,26,3);ctx.beginPath();ctx.moveTo(-8,-69);ctx.lineTo(-6,-80);ctx.lineTo(6,-80);ctx.lineTo(8,-69);ctx.fill()}
  ctx.restore()}
function sunO(x,y,r,t,a=1){ctx.save();ctx.globalAlpha=a;glow(x,y,r*2.6,'rgba(255,190,90,.45)');rays(x,y,t,14,r*3,'rgba(255,220,130,.22)',1,.15,8);
  const g=ctx.createRadialGradient(x,y,r*.1,x,y,r);g.addColorStop(0,'#fff6c8');g.addColorStop(.6,'#ffd27a');g.addColorStop(1,'#ff9a3a');ctx.fillStyle=g;ctx.beginPath();ctx.arc(x,y,r,0,TAU);ctx.fill();ctx.restore()}
function waves(t,y,col='#1a2a38',n=3){for(let i=0;i<n;i++){ctx.fillStyle=i?col:'#223648';ctx.beginPath();ctx.moveTo(-10,y+40);for(let x=-10;x<=370;x+=12)ctx.lineTo(x,y+i*14+Math.sin(x*.05+t*(1.6+i*.4)+i)*6);ctx.lineTo(370,y+90);ctx.fill()}}
function stampBox(s,x,y,sz,col,t,ts,rot=-.14){if(t<ts)return;const u=t-ts,sc=1+1.6*Math.exp(-u*11),a=cl(u*14);ctx.save();ctx.globalAlpha=a;ctx.translate(x,y);ctx.rotate(rot);ctx.scale(sc,sc);
  const w=tw(s,sz)+26;ctx.save();glowStroke(col,5,12);rr(-w/2,-sz*.7,w,sz*1.4,8);ctx.stroke();ctx.restore();ctx.fillStyle='rgba(20,16,8,.65)';rr(-w/2,-sz*.7,w,sz*1.4,8);ctx.fill();txt(s,0,2,sz,col,{st:'rgba(20,16,8,.8)',sw:5,wt:'900'});ctx.restore()}
function ridge(y,col,seed=1,amp=24){ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(-10,y+120);for(let x=-10;x<=370;x+=20)ctx.lineTo(x,y-R(seed+(x/20|0))*amp);ctx.lineTo(370,y+120);ctx.fill()}
// ---------- pirámide (base centrada en x,y; w ancho, h alto). o: bloques visibles, glow ----------
function pyramid(x,y,w,h,o={}){ctx.save();ctx.translate(x,y);const l=o.lit||'#e9c07a',d=o.dark||'#b77f42';
  poly([[-w/2,0],[0,-h],[0,0]],l);poly([[0,-h],[w/2,0],[0,0]],d);
  if(o.rows){const n=o.rows;for(let i=1;i<n;i++){const k=i/n,ww=w*(1-k)/2;line(-ww,-h*k,ww,-h*k,'rgba(90,50,20,.28)',1.1)}}
  if(o.rim){ctx.strokeStyle=o.rim;ctx.lineWidth=1.4;ctx.beginPath();ctx.moveTo(-w/2,0);ctx.lineTo(0,-h);ctx.lineTo(w/2,0);ctx.stroke()}
  ctx.restore()}
function dunes(y,col,seed=1,amp=14,off=0){ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(-10,y+200);for(let x=-10;x<=370;x+=10)ctx.lineTo(x,y-Math.sin(x*.021+seed+off)*amp-Math.sin(x*.047+seed*2)*amp*.4);ctx.lineTo(370,y+200);ctx.fill()}
// ---------- papiro / pergamino con texto de jeroglíficos de adorno ----------
function scroll(x,y,w,h,t=0,rot=0,col='#ecdcae'){tr(x,y,1,rot,()=>{rr(-w/2,-h/2,w,h,5);ctx.fillStyle=col;ctx.fill();ctx.strokeStyle='#8a6a34';ctx.lineWidth=2;ctx.stroke();
  rect0(-w/2-6,-h/2-3,w+12,7,'#c9a45a');rect0(-w/2-6,h/2-4,w+12,7,'#c9a45a');
  for(let i=0;i<6;i++){const yy=-h/2+16+i*(h-34)/5;for(let j=0;j<7;j++){const gx=-w/2+14+j*(w-28)/6;ctx.fillStyle='rgba(70,40,15,.55)';if((i+j)%3==0)ctx.fillRect(gx,yy,6,9);else if((i+j)%3==1){ctx.beginPath();ctx.arc(gx+3,yy+4,3.6,0,TAU);ctx.fill()}else{ctx.fillRect(gx,yy+3,8,3)}}}})}
// ---------- columna griega ----------
function column(x,y,h,col='#efe6cc'){rect0(x-9,y-h,18,h,col);rect0(x-13,y-h-6,26,6,col);rect0(x-12,y-6,24,6,col);for(let i=-1;i<=1;i++)line(x+i*4,y-h+3,x+i*4,y-8,'rgba(120,100,60,.3)',1.2)}
// ---------- horno de pan ----------
function oven(x,y,s,t=0){tr(x,y,s,0,()=>{ctx.fillStyle=CLAY;ctx.beginPath();ctx.moveTo(-30,0);ctx.quadraticCurveTo(-30,-52,0,-52);ctx.quadraticCurveTo(30,-52,30,0);ctx.fill();
  ctx.fillStyle='#2a1208';ctx.beginPath();ctx.moveTo(-14,0);ctx.quadraticCurveTo(-14,-26,0,-26);ctx.quadraticCurveTo(14,-26,14,0);ctx.fill();
  glow(0,-10,22,'rgba(255,150,40,.6)');const f=1+.18*Math.sin(t*12);ctx.fillStyle='#ffb030';ctx.beginPath();ctx.moveTo(-8,0);ctx.quadraticCurveTo(-4,-14*f,0,-20*f);ctx.quadraticCurveTo(4,-14*f,8,0);ctx.fill();
  for(let i=0;i<3;i++){const w=((t*.6)+i*.33)%1;circ(Math.sin(t*2+i)*6,-56-w*40,5+w*5,'rgba(220,200,170,'+(.4*(1-w))+')')}})}
function bread(x,y,s,rot=0){tr(x,y,s,rot,()=>{ctx.fillStyle='#d4934a';ctx.beginPath();ctx.ellipse(0,0,15,8,0,0,TAU);ctx.fill();ctx.strokeStyle='#8a5522';ctx.lineWidth=1.4;for(let i=-1;i<=1;i++){ctx.beginPath();ctx.moveTo(i*6-2,-5);ctx.lineTo(i*6+2,4);ctx.stroke()}})}
function jar(x,y,s,rot=0,col='#b5683a'){tr(x,y,s,rot,()=>{ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(-9,-22);ctx.quadraticCurveTo(-18,-4,-9,16);ctx.lineTo(9,16);ctx.quadraticCurveTo(18,-4,9,-22);ctx.closePath();ctx.fill();rect0(-10,-26,20,5,'#8a4a24');rect0(-8,-20,16,4,'#f0d890');ctx.fillStyle='rgba(255,255,255,.18)';ctx.fillRect(-6,-12,3,20)})}
function meatLeg(x,y,s,rot=0){tr(x,y,s,rot,()=>{ctx.fillStyle='#b8482e';ctx.beginPath();ctx.ellipse(0,0,16,10,.3,0,TAU);ctx.fill();line(12,5,26,12,'#f1ead6',5);circ(28,13,4,'#f1ead6');circ(-4,-3,4,'rgba(255,200,170,.35)')})}
// ---------- hueso con fractura y venda (heal=0 roto, 1 curado) ----------
function bone(x,y,s,heal=0,rot=0){tr(x,y,s,rot,()=>{const c='#f4ecd6';
  const a=()=>{line(-36,0,-6,0,c,9);circ(-40,-5,6,c);circ(-40,5,6,c)};a();
  if(heal<.5){line(6+heal*6,-1,36,3,c,9);circ(40,-5,6,c);circ(40,5,6,c);line(-6,-6,6,6,'rgba(140,40,30,.8)',2);}
  else{line(-6,0,36,0,c,9);circ(40,-5,6,c);circ(40,5,6,c);rect0(-14,-9,26,18,'#e8dcc0');for(let i=0;i<4;i++)line(-12+i*7,-9,-6+i*7,9,'rgba(120,90,50,.5)',1.5)}})}
// ---------- cartucho egipcio con texto ----------
function cartouche(x,y,s,w,h,label,t=0,glowA=1){tr(x,y,s,0,()=>{glow(0,0,w*.7,'rgba(255,207,74,'+.3*glowA+')');rr(-w/2,-h/2,w,h,h/2);ctx.fillStyle='#f3e2b4';ctx.fill();ctx.strokeStyle=RED;ctx.lineWidth=4;ctx.stroke();rr(-w/2+6,-h/2+6,w-12,h-12,h/2-6);ctx.strokeStyle='rgba(209,50,46,.5)';ctx.lineWidth=1.4;ctx.stroke();
  txt(label,0,1,Math.min(h*.36,17),'#7a2418',{wt:'900'})})}
// ---------- barco de papiro con bloques ----------
function barge(x,y,s,t=0,blocks=3){ctx.save();ctx.translate(x,y+Math.sin(t*1.8)*1.6);ctx.scale(s,s);ctx.rotate(Math.sin(t*1.3)*.02);
  poly([[-70,-6],[70,-6],[84,-22],[56,6],[-56,6],[-84,-22]],'#8a5a2a');rect0(-70,-8,140,3,'#c99a4a');
  for(let i=0;i<blocks;i++){const bx=-44+i*38;rect0(bx,-30,32,24,'#efe2bf');rect0(bx,-30,32,4,'#fff6dc');line(bx+16,-30,bx+16,-6,'rgba(120,90,50,.35)',1.4)}
  line(-6,-6,-6,-60,'#5a3a1a',3);poly([[-6,-58],[44,-50],[44,-18],[-6,-14]],'rgba(246,236,208,.95)');ctx.restore()}
function nile(t,y,a='#2a6f8a',b='#1c5870'){rect0(0,y,360,700,a);for(let i=0;i<5;i++){ctx.strokeStyle='rgba(255,255,255,.16)';ctx.lineWidth=1.6;ctx.beginPath();for(let x=-10;x<=370;x+=10)ctx.lineTo(x,y+14+i*24+Math.sin(x*.05+t*(1.2+i*.2)+i)*3);ctx.stroke()}}
// ---------- cabaña de adobe (barracón) ----------
function hut(x,y,s,col='#c89a62'){ctx.save();ctx.translate(x,y);ctx.scale(s,s);rect0(-34,-34,68,34,col);rect0(-38,-40,76,8,'#a07a46');rect0(-8,-22,16,22,'#3a2410');rect0(-30,-26,9,7,'#3a2410');ctx.restore()}
// ---------- bloque de piedra y cuerda ----------
function block(x,y,s,rot=0,col='#efe2bf'){tr(x,y,s,rot,()=>{rect0(-16,-12,32,24,col);rect0(-16,-12,32,5,'#fff6dc');rect0(-16,8,32,4,'rgba(120,90,50,.4)')})}
function sunBeam(x,y,t,n=10,len=420,a=.1){ctx.save();ctx.translate(x,y);for(let i=0;i<n;i++){ctx.rotate(TAU/n);ctx.fillStyle='rgba(255,220,120,'+a+')';ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(-10,len);ctx.lineTo(10,len);ctx.fill()}ctx.restore()}
function moon(x,y,r,t=0){glow(x,y,r*3,'rgba(255,240,200,.25)');circ(x,y,r,'#f0e8c8');circ(x-r*.3,y-r*.2,r*.22,'rgba(160,150,110,.45)')}
