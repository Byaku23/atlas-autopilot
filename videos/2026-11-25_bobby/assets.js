// ===== 25 · Greyfriars Bobby — recursos (noche escocesa azul marino, niebla, luz de farol ámbar; acento ámbar/rojo) =====
CAP.acc='#ffc857';
const AMB='#ffc857',RED='#e63946',TEAL='#4fd1c5',INK='rgba(10,14,22,.92)',CRM='#f1ead6',NAVY='#0f1724',SLATE='#2b3a55',FOGC='#9fb2cc';
const TX=(s,x,y,sz,col,t,t0,o={})=>mtext(s,x,y,sz,col,t,t0,Object.assign({stroke:INK,sw:Math.max(3.5,sz*.2)},o));
function glowStroke(col,lw,blur=10){ctx.strokeStyle=col;ctx.lineWidth=lw;ctx.shadowColor=col;ctx.shadowBlur=blur;ctx.lineJoin='round';ctx.lineCap='round'}
function rect0(x,y,w,h,c){ctx.fillStyle=c;ctx.fillRect(x,y,w,h)}
function heart(x,y,s,col='#e0484e',a=1){ctx.save();ctx.globalAlpha*=a;ctx.translate(x,y);ctx.scale(s,s);ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(0,5);ctx.bezierCurveTo(-12,-4,-6,-12,0,-5);ctx.bezierCurveTo(6,-12,12,-4,0,5);ctx.fill();ctx.restore()}
function starfield(t,n,seed,a=1){stars(t,n,seed,a)}
// ---------- terrier de pelo largo, de perfil mirando a la derecha. (0,0)=suelo. o: ph (paso), sit (0/1), flip, al, t, wag, col, dark, rim, coll ----------
function terrier(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);if(o.al!==undefined)ctx.globalAlpha*=o.al;
  const c=o.col||'#6b7388',d=o.dark||'#3a3f4d',a=Math.sin(o.ph||0)*6,sit=o.sit||0,bob=o.ph?-Math.abs(Math.cos(o.ph))*1.2:0;ctx.translate(0,bob);
  ctx.strokeStyle=d;ctx.lineWidth=5;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-26,sit?-8:-26);ctx.quadraticCurveTo(-38,sit?-14:-34,-36,(sit?-24:-46)+Math.sin((o.t||0)*9)*(o.wag||0)*4);ctx.stroke();
  if(!sit){line(-16,-12,-18-a,-2,d,6);line(14,-12,16+a,-2,d,6)}
  ctx.fillStyle=c;ctx.beginPath();
  if(sit){ctx.ellipse(-4,-24,19,26,-.5,0,TAU);ctx.fill();ctx.beginPath();ctx.ellipse(-12,-11,16,11,0,0,TAU);ctx.fill();line(14,-30,17,-2,c,7);line(6,-28,8,-2,d,6)}
  else{ctx.ellipse(0,-25,31,13,0,0,TAU);ctx.fill();ctx.beginPath();ctx.moveTo(-29,-20);ctx.lineTo(29,-20);ctx.lineTo(24,-8);ctx.lineTo(-24,-8);ctx.closePath();ctx.fill();line(-9,-12,-11+a,-2,c,6.5);line(22,-12,24-a,-2,c,6.5)}
  if(o.rim){ctx.strokeStyle=o.rim;ctx.lineWidth=1.6;ctx.globalAlpha*=.85;ctx.beginPath();if(sit)ctx.ellipse(-4,-24,18,25,-.5,-2.6,-1.0);else ctx.ellipse(0,-26,30,12,0,-2.9,-1.3);ctx.stroke();ctx.globalAlpha/=.85}
  ctx.save();ctx.translate(sit?22:28,sit?-52:-36);
  circ(0,0,11,c);ctx.fillStyle=d;ctx.beginPath();ctx.moveTo(-5,-7);ctx.lineTo(-9,-25);ctx.lineTo(3,-11);ctx.fill();ctx.beginPath();ctx.moveTo(2,-9);ctx.lineTo(7,-26);ctx.lineTo(11,-7);ctx.fill();
  ctx.fillStyle=c;ctx.beginPath();ctx.ellipse(13,3,10,6.5,.12,0,TAU);ctx.fill();ctx.fillStyle='#8a92a6';ctx.beginPath();ctx.ellipse(3,-4,8,4,.2,0,TAU);ctx.fill();
  circ(21,0,3.2,'#0a0c10');circ(6,-2,2,'#fff');circ(6.5,-2,1.1,'#0a0c10');
  if(o.coll){rect0(-6,8,13,4,'#c0392b');circ(1,13,3,AMB)}
  ctx.restore();ctx.restore()}
// ---------- lápida (base en y). o: cross ----------
function tomb(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s,s);
  ctx.fillStyle=o.col||'#7d8798';ctx.beginPath();ctx.moveTo(-22,0);ctx.lineTo(-22,-52);ctx.arc(0,-52,22,Math.PI,TAU);ctx.lineTo(22,0);ctx.closePath();ctx.fill();
  ctx.strokeStyle='rgba(255,255,255,.35)';ctx.lineWidth=1.6;ctx.beginPath();ctx.moveTo(-21,-6);ctx.lineTo(-21,-52);ctx.arc(0,-52,21,Math.PI,Math.PI*1.5);ctx.stroke();
  if(o.cross!==0){rect0(-2.2,-64,4.4,26,'rgba(20,26,40,.55)');rect0(-9,-56,18,4.4,'rgba(20,26,40,.55)')}
  ctx.fillStyle='rgba(60,90,60,.5)';ctx.beginPath();ctx.ellipse(-12,-3,10,4,0,0,TAU);ctx.fill();ctx.restore()}
function mound(x,y,w,h,col='#1c2a22'){ctx.fillStyle=col;ctx.beginPath();ctx.ellipse(x,y,w/2,h,0,Math.PI,TAU);ctx.fill()}
// ---------- niebla en bandas ----------
function fog(t,y,col='rgba(160,180,210,',a=.25,k=1){for(let i=0;i<3;i++){ctx.fillStyle=col+(a*(1-i*.25))+')';ctx.beginPath();ctx.moveTo(-20,y+60);for(let x=-20;x<=380;x+=20)ctx.lineTo(x,y+i*18+Math.sin((x+t*(8+i*5)*k)*.03+i*2)*10);ctx.lineTo(380,y+80);ctx.fill()}}
function moon(x,y,r,t=0){glow(x,y,r*3,'rgba(190,210,255,.28)');circ(x,y,r,'#eaf0ff');circ(x-r*.3,y-r*.2,r*.22,'rgba(150,165,200,.45)');circ(x+r*.35,y+r*.3,r*.15,'rgba(150,165,200,.4)')}
// ---------- farol de gas ----------
function lamp(x,y,s,t=0,a=1){ctx.save();ctx.translate(x,y);ctx.scale(s,s);rect0(-3,-120,6,120,'#14181f');rect0(-9,-6,18,6,'#14181f');
  glow(0,-134,70,'rgba(255,200,100,'+(.42*a)+')');ctx.fillStyle='#14181f';ctx.beginPath();ctx.moveTo(-12,-124);ctx.lineTo(12,-124);ctx.lineTo(8,-150);ctx.lineTo(-8,-150);ctx.closePath();ctx.fill();
  rect0(-8,-142,16,16,'rgba(255,214,130,'+(.85+.1*Math.sin(t*9))+')');ctx.restore()}
// ---------- persona sencilla (pies en y=0). o: robe, hair, hat, arm, ph, flip, t, al, lant, chain ----------
function person(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);if(o.al!==undefined)ctx.globalAlpha*=o.al;
  const robe=o.robe||'#c9a46a',skin=o.skin||'#e0b48a',sw=Math.sin(o.ph||0)*5;
  line(-4,-24,-4+sw,-1,o.hair||'#2a1a10',4.6);line(4,-24,4-sw,-1,o.hair||'#2a1a10',4.6);
  poly([[-10,-22],[10,-22],[8,-54],[-8,-54]],robe);
  ctx.save();ctx.translate(7,-50);ctx.rotate(o.arm||0);line(0,0,0,17,skin,4.2);if(o.lant){line(0,17,0,24,'#222',1.4);rr(-4,22,8,11,2);ctx.fillStyle='rgba(255,210,120,.95)';ctx.fill();glow(0,28,22,'rgba(255,200,100,.5)')}if(o.broom){line(-6,22,10,-14,'#6a4a28',2.4);ctx.fillStyle='#c9a46a';ctx.beginPath();ctx.moveTo(-8,22);ctx.lineTo(-16,38);ctx.lineTo(0,38);ctx.closePath();ctx.fill()}ctx.restore();
  circ(0,-63,8.2,skin);ctx.fillStyle=o.hair||'#2a1a10';ctx.beginPath();ctx.arc(0,-65,8.6,Math.PI*1.02,TAU*1.0);ctx.fill();
  if(o.hat==='top'){ctx.fillStyle='#0a0a10';ctx.fillRect(-11,-70,22,3.4);ctx.fillRect(-7,-88,14,19);ctx.fillStyle=RED;ctx.fillRect(-7,-74,14,3)}
  if(o.hat==='cap'){ctx.fillStyle='#1a2540';ctx.beginPath();ctx.arc(0,-66,9.4,Math.PI,TAU);ctx.fill();ctx.fillRect(-10,-67,22,3);ctx.fillStyle=AMB;ctx.fillRect(-2,-74,4,4)}
  if(o.chain){ctx.strokeStyle=AMB;ctx.lineWidth=1.6;ctx.beginPath();ctx.arc(0,-46,6,0,Math.PI);ctx.stroke()}
  ctx.restore()}
function lady(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);
  poly([[-20,0],[20,0],[9,-50],[-9,-50]],'#7a3b6a');rect0(-8,-50,16,4,'#e8c8dc');
  circ(0,-60,8,'#e8c9a8');ctx.fillStyle='#5a3a2a';ctx.beginPath();ctx.arc(0,-62,8.6,Math.PI,TAU);ctx.fill();circ(-4,-70,5,'#2a1a40');
  ctx.save();ctx.translate(9,-46);line(0,0,6,-10,'#e8c9a8',3.4);line(6,-10,6,-34,'#3a2a1a',2);ctx.fillStyle='#2a1a40';ctx.beginPath();ctx.moveTo(-14,-34);ctx.quadraticCurveTo(6,-60,26,-34);ctx.closePath();ctx.fill();ctx.restore();ctx.restore()}
// ---------- fuente con estatua de perrito ----------
function fountain(x,y,s,t=0,k=1){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.globalAlpha*=k;
  rr(-34,-14,68,14,3);ctx.fillStyle='#8a8f99';ctx.fill();rr(-24,-70,48,56,3);ctx.fillStyle='#a0a6b2';ctx.fill();rect0(-30,-78,60,10,'#8a8f99');
  ctx.strokeStyle='rgba(255,255,255,.3)';ctx.lineWidth=1.4;ctx.strokeRect(-20,-62,40,40);
  rr(-8,-48,16,14,3);ctx.fillStyle='#4a505c';ctx.fill();
  for(let i=0;i<5;i++){const q=((t*1.4+i*.2)%1);circ(0,-38+q*24,1.8,'rgba(170,215,255,'+(.8*(1-q))+')')}
  terrier(0,-78,.62,{sit:1,col:'#3b3f48',dark:'#262a32',rim:'#c8d0e0'});ctx.restore()}
// ---------- reloj que marca la una ----------
function clock1(x,y,r,t=0){circ(x,y,r,CRM,'#14181f',3);for(let i=0;i<12;i++){const a=i/12*TAU-Math.PI/2;line(x+Math.cos(a)*r*.82,y+Math.sin(a)*r*.82,x+Math.cos(a)*r*.94,y+Math.sin(a)*r*.94,'#14181f',2)}
  const hr=-Math.PI/2+TAU/12,mn=-Math.PI/2;line(x,y,x+Math.cos(hr)*r*.5,y+Math.sin(hr)*r*.5,'#14181f',4);line(x,y,x+Math.cos(mn)*r*.78,y+Math.sin(mn)*r*.78,'#14181f',2.6);circ(x,y,3,RED)}
// ---------- cañón de la una ----------
function cannon(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s,s);poly([[-30,0],[10,-18],[44,-30],[48,-22],[16,-4],[-24,8]],'#2a2e38');circ(-6,6,13,'#14181f','#4a505c',2);circ(-6,6,4,'#6a707c');ctx.restore()}
// ---------- cuenco ----------
function bowl(x,y,s){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.fillStyle='#c0392b';ctx.beginPath();ctx.moveTo(-12,-8);ctx.lineTo(12,-8);ctx.lineTo(8,4);ctx.lineTo(-8,4);ctx.closePath();ctx.fill();ctx.fillStyle='#8a5a2a';ctx.beginPath();ctx.ellipse(0,-9,9,3.4,0,0,TAU);ctx.fill();ctx.restore()}
// ---------- refugio: dos lápidas planas con sacos encima ----------
function shelter(x,y,s,k=1){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.globalAlpha*=k;rect0(-46,-20,10,20,'#6a7080');rect0(36,-20,10,20,'#6a7080');rect0(-52,-30,104,12,'#8a90a0');
  ctx.fillStyle='#9a7a4a';ctx.beginPath();ctx.moveTo(-40,-18);ctx.lineTo(40,-18);ctx.lineTo(34,0);ctx.lineTo(-34,0);ctx.closePath();ctx.fill();ctx.strokeStyle='#6a4e2a';ctx.lineWidth=1.4;for(let i=-3;i<=3;i++){ctx.beginPath();ctx.moveTo(i*11,-18);ctx.lineTo(i*11-2,0);ctx.stroke()}ctx.restore()}
// ---------- licencia / collar ----------
function licence(x,y,s,t=0){tr(x,y,s,Math.sin(t*3)*.03,()=>{rr(-62,-44,124,88,6);ctx.fillStyle=CRM;ctx.fill();ctx.strokeStyle='#a8844a';ctx.lineWidth=2.4;ctx.stroke();txt('LICENCIA',0,-24,22,'#3a2a14',{wt:'900'});line(-46,-8,46,-8,'#a8844a',1.6);for(let i=0;i<3;i++)line(-46,6+i*11,24-i*8,6+i*11,'#bda47a',2);circ(34,26,12,RED,'#7a1a22',2);txt('✓',34,26,14,'#fff',{wt:'900'})})}
function collarTag(x,y,s,t=0){tr(x,y,s,0,()=>{glow(0,0,60,'rgba(255,200,90,.35)');rr(-52,-26,104,52,14);ctx.fillStyle='#d9a441';ctx.fill();ctx.strokeStyle='#8a5a14';ctx.lineWidth=3;ctx.stroke();txt('BOBBY',0,-8,18,'#4a2e08',{wt:'900'});txt('1867',0,12,16,'#4a2e08',{wt:'900'})})}
function coin(x,y,r,rot=0){ctx.save();ctx.translate(x,y);ctx.scale(Math.abs(Math.cos(rot))*.8+.2,1);circ(0,0,r,AMB,'#b07a1a',1.6);circ(0,0,r*.62,'rgba(255,255,255,0)','#b07a1a',1.2);ctx.restore()}
// ---------- sello ----------
function stampBox(s,x,y,sz,col,t,ts,rot=-.14){if(t<ts)return;const u=t-ts,sc=1+1.6*Math.exp(-u*11),a=cl(u*14);ctx.save();ctx.globalAlpha=a;ctx.translate(x,y);ctx.rotate(rot);ctx.scale(sc,sc);
  const w=tw(s,sz)+26;ctx.save();glowStroke(col,5,12);rr(-w/2,-sz*.7,w,sz*1.4,8);ctx.stroke();ctx.restore();ctx.fillStyle='rgba(10,12,20,.62)';rr(-w/2,-sz*.7,w,sz*1.4,8);ctx.fill();txt(s,0,2,sz,col,{st:'rgba(10,12,20,.8)',sw:5,wt:'900'});ctx.restore()}
// ---------- multitud de siluetas (base en y) ----------
function crowd(x0,x1,y,n,t,seed=3,col='#0c1018',k=1){for(let i=0;i<n;i++){const px=lerp(x0,x1,i/(n-1)),h=34+R(seed+i)*18,b=Math.sin(t*4+i)*1.5*k;const hh=h*k;ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(px-7,y);ctx.lineTo(px-6,y-hh*.6+b);ctx.lineTo(px+6,y-hh*.6+b);ctx.lineTo(px+7,y);ctx.fill();circ(px,y-hh*.75+b,5.6,col)}}
function castle(x,y,s,c='#1a1a22'){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.fillStyle=c;ctx.beginPath();ctx.moveTo(-140,0);ctx.lineTo(-110,-50);ctx.lineTo(-70,-60);ctx.lineTo(-40,-110);ctx.lineTo(120,-100);ctx.lineTo(150,0);ctx.closePath();ctx.fill();for(let i=0;i<8;i++)ctx.fillRect(-36+i*18,-122,10,14);ctx.fillRect(40,-160,26,60);ctx.beginPath();ctx.moveTo(40,-160);ctx.lineTo(53,-186);ctx.lineTo(66,-160);ctx.fill();ctx.restore()}
// verja del cementerio
function railing(y,col='#0c1018',x0=0,x1=360){rect0(x0,y-4,x1-x0,3,col);rect0(x0,y-36,x1-x0,3,col);for(let x=x0;x<=x1;x+=14){rect0(x,y-46,2.6,46,col);poly([[x-1.6,y-46],[x+1.3,y-56],[x+4.2,y-46]],col)}}
function sunO(x,y,r,t,a=1){ctx.save();ctx.globalAlpha=a;glow(x,y,r*2.6,'rgba(255,190,90,.45)');rays(x,y,t,14,r*3,'rgba(255,220,130,.22)',1,.15,8);
  const g=ctx.createRadialGradient(x,y,r*.1,x,y,r);g.addColorStop(0,'#fff6c8');g.addColorStop(.6,'#ffd27a');g.addColorStop(1,'#ff9a3a');ctx.fillStyle=g;ctx.beginPath();ctx.arc(x,y,r,0,TAU);ctx.fill();ctx.restore()}
