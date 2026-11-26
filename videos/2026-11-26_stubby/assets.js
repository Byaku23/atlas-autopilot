// ===== 26 · Sargento Stubby — recursos (Primera Guerra Mundial: caqui/barro/oliva, polvo y gas verde-amarillo; acento latón/rojo amapola) =====
CAP.acc='#f0c040';
const BRASS='#f0c040',RED='#d1322e',GAS='#c4d24a',INK='rgba(20,18,10,.92)',CRM='#f1ead6',OLV='#3d4a2a',KHK='#a89a6a',MUD='#4a3a26',DUST='#d9c9a0',SMK='#5d5a48';
const TX=(s,x,y,sz,col,t,t0,o={})=>mtext(s,x,y,sz,col,t,t0,Object.assign({stroke:INK,sw:Math.max(3.5,sz*.2)},o));
function glowStroke(col,lw,blur=10){ctx.strokeStyle=col;ctx.lineWidth=lw;ctx.shadowColor=col;ctx.shadowBlur=blur;ctx.lineJoin='round';ctx.lineCap='round'}
function rect0(x,y,w,h,c){ctx.fillStyle=c;ctx.fillRect(x,y,w,h)}
function heart(x,y,s,col='#e0484e',a=1){ctx.save();ctx.globalAlpha*=a;ctx.translate(x,y);ctx.scale(s,s);ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(0,5);ctx.bezierCurveTo(-12,-4,-6,-12,0,-5);ctx.bezierCurveTo(6,-12,12,-4,0,5);ctx.fill();ctx.restore()}
function starfield(t,n,seed,a=1){stars(t,n,seed,a)}
// ---------- Stubby: perro atigrado de cola corta, de perfil mirando a la derecha. (0,0)=suelo. o: ph, sit, flip, al, t, wag, col, dark, rim, vest (manta con medallas), salute, wound (vendaje), chev ----------
function terrier(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);if(o.al!==undefined)ctx.globalAlpha*=o.al;
  const c=o.col||'#b5834f',d=o.dark||'#5a3a22',a=Math.sin(o.ph||0)*6,sit=o.sit||0,bob=o.ph?-Math.abs(Math.cos(o.ph))*1.2:0;ctx.translate(0,bob);
  const wg=Math.sin((o.t||0)*14)*(o.wag||0)*3;line(sit?-24:-27,sit?-12:-30,sit?-30:-34,sit?-18+wg:-37+wg,c,6.5);
  if(!sit){line(-16,-12,-18-a,-2,d,6);line(14,-12,16+a,-2,d,6)}
  ctx.fillStyle=c;ctx.beginPath();
  if(sit){ctx.ellipse(-4,-24,19,26,-.5,0,TAU);ctx.fill();ctx.beginPath();ctx.ellipse(-12,-11,16,11,0,0,TAU);ctx.fill();line(14,-30,17,-2,c,7);line(6,-28,8,-2,d,6)}
  else{ctx.ellipse(0,-25,31,13,0,0,TAU);ctx.fill();ctx.beginPath();ctx.moveTo(-29,-20);ctx.lineTo(29,-20);ctx.lineTo(24,-8);ctx.lineTo(-24,-8);ctx.closePath();ctx.fill();line(-9,-12,-11+a,-2,c,6.5);line(22,-12,24-a,-2,c,6.5)}
  // rayas de tigre
  ctx.save();ctx.beginPath();if(sit)ctx.ellipse(-4,-24,19,26,-.5,0,TAU);else ctx.ellipse(0,-25,31,13,0,0,TAU);ctx.clip();
  for(let i=-3;i<=3;i++)line(i*8-2,-46,i*8+5,-8,'rgba(70,42,22,.5)',2.4);ctx.restore();
  if(o.rim){ctx.strokeStyle=o.rim;ctx.lineWidth=1.6;ctx.globalAlpha*=.85;ctx.beginPath();if(sit)ctx.ellipse(-4,-24,18,25,-.5,-2.6,-1.0);else ctx.ellipse(0,-26,30,12,0,-2.9,-1.3);ctx.stroke();ctx.globalAlpha/=.85}
  if(o.vest){ctx.save();if(sit)ctx.translate(-12,8);else ctx.translate(-2,0);rr(-15,-40,30,16,3);ctx.fillStyle='#3d5a2e';ctx.fill();ctx.strokeStyle=BRASS;ctx.lineWidth=1.6;ctx.stroke();
    [['#d1322e',-10],['#f0c040',-3],['#4a7ac8',4],['#f0c040',11]].forEach(([k,mx])=>{circ(mx,-30,3.2,k,'#8a6a14',.8);rect0(mx-1,-37,2,5,k)});ctx.restore()}
  if(o.wound){ctx.save();ctx.translate(sit?-2:8,sit?-26:-28);rect0(-9,-3,18,5,'#f1ead6');ctx.rotate(.5);rect0(-9,-3,18,5,'#f1ead6');circ(2,0,1.8,'#d1322e');ctx.restore()}
  ctx.save();ctx.translate(sit?22:28,sit?-52:-36);
  circ(0,0,11,c);ctx.fillStyle=d;ctx.beginPath();ctx.moveTo(-5,-7);ctx.lineTo(-9,-25);ctx.lineTo(3,-11);ctx.fill();ctx.beginPath();ctx.moveTo(2,-9);ctx.lineTo(7,-26);ctx.lineTo(11,-7);ctx.fill();
  ctx.fillStyle=c;ctx.beginPath();ctx.ellipse(13,3,10,6.5,.12,0,TAU);ctx.fill();ctx.fillStyle='#d6b98a';ctx.beginPath();ctx.ellipse(3,-4,8,4,.2,0,TAU);ctx.fill();
  circ(21,0,3.2,'#0a0c10');circ(6,-2,2,'#fff');circ(6.5,-2,1.1,'#0a0c10');
  if(o.salute){line(-4,12,10,-12,c,6.5);circ(11,-13,3.6,c)}
  ctx.restore();ctx.restore()}
// ---------- soldado sin cara (pies en y=0). o: robe, hair, hat ('helm'|'cap'|'peak'|'top'|'fed'), arm, ph, flip, al, hold ----------
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
function moon(x,y,r,t=0){glow(x,y,r*3,'rgba(255,240,200,.25)');circ(x,y,r,'#f0e8c8');circ(x-r*.3,y-r*.2,r*.22,'rgba(160,150,110,.45)')}
function sunO(x,y,r,t,a=1){ctx.save();ctx.globalAlpha=a;glow(x,y,r*2.6,'rgba(255,190,90,.45)');rays(x,y,t,14,r*3,'rgba(255,220,130,.22)',1,.15,8);
  const g=ctx.createRadialGradient(x,y,r*.1,x,y,r);g.addColorStop(0,'#fff6c8');g.addColorStop(.6,'#ffd27a');g.addColorStop(1,'#ff9a3a');ctx.fillStyle=g;ctx.beginPath();ctx.arc(x,y,r,0,TAU);ctx.fill();ctx.restore()}
function fog(t,y,col='rgba(160,180,210,',a=.25,k=1){for(let i=0;i<3;i++){ctx.fillStyle=col+(a*(1-i*.25))+')';ctx.beginPath();ctx.moveTo(-20,y+60);for(let x=-20;x<=380;x+=20)ctx.lineTo(x,y+i*18+Math.sin((x+t*(8+i*5)*k)*.03+i*2)*10);ctx.lineTo(380,y+80);ctx.fill()}}
// ---------- tienda de campaña ----------
function tent(x,y,s,col='#8a8a5a'){ctx.save();ctx.translate(x,y);ctx.scale(s,s);poly([[-46,0],[0,-52],[46,0]],col);poly([[-12,0],[0,-30],[12,0]],'#2a2a18');line(-46,0,46,0,'rgba(0,0,0,.35)',2);line(0,-52,0,-62,'#4a3a26',2);ctx.restore()}
// ---------- cartel «prohibido perros» ----------
function noDog(x,y,s,t=0){tr(x,y,s,Math.sin(t*4)*.03,()=>{circ(0,0,34,'#f1ead6',RED,6);terrier(0,14,.5,{sit:1,col:'#5a3a22',dark:'#2a1a0e'});line(-24,-24,24,24,RED,6)})}
// ---------- corneta ----------
function bugle(x,y,s,rot=0){tr(x,y,s,rot,()=>{ctx.strokeStyle='#c99a2a';ctx.lineWidth=5;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-26,6);ctx.quadraticCurveTo(-10,-14,6,-2);ctx.quadraticCurveTo(14,6,8,12);ctx.stroke();poly([[10,-6],[36,-22],[36,20],[10,8]],'#e6b83a','#8a6a14',2);circ(-27,6,4,'#8a6a14')})}
// ---------- barco de vapor ----------
function ship(x,y,s,t=0){ctx.save();ctx.translate(x,y+Math.sin(t*1.6)*2);ctx.scale(s,s);ctx.rotate(Math.sin(t*1.2)*.025);
  poly([[-120,0],[120,0],[96,34],[-100,34]],'#2a2a2e');rect0(-110,-8,224,8,'#6a2a22');rect0(-70,-34,110,26,'#c9c2a8');for(let i=0;i<7;i++)circ(-60+i*15,-22,3.4,'#2a3a4a');rect0(-30,-58,52,24,'#a8a28a');rect0(-16,-90,20,34,'#1c1c1e');rect0(-16,-82,20,5,RED);rect0(40,-70,6,36,'#3a3a3e');
  for(let i=0;i<4;i++)circ(-10+Math.sin(t*2+i)*4,-96-i*16-((t*18)%16),7+i*2,'rgba(60,60,60,'+(.55-i*.12)+')');ctx.restore()}
function waves(t,y,col='#1a2a38',n=3){for(let i=0;i<n;i++){ctx.fillStyle=i?col:'#223648';ctx.beginPath();ctx.moveTo(-10,y+40);for(let x=-10;x<=370;x+=12)ctx.lineTo(x,y+i*14+Math.sin(x*.05+t*(1.6+i*.4)+i)*6);ctx.lineTo(370,y+90);ctx.fill()}}
// ---------- nube de gas ----------
function gasCloud(t,y,k=1,a=.5,x0=-40,x1=400){for(let i=0;i<14;i++){const x=lerp(x0,x1,i/13)+Math.sin(t*1.3+i)*14,yy=y+Math.sin(t*1.1+i*1.7)*12-(i%3)*10,r=(34+R(i+3)*26)*k;ctx.fillStyle='rgba(196,210,74,'+(a*(.55+.35*R(i+9)))+')';ctx.beginPath();ctx.arc(x,yy,r,0,TAU);ctx.fill()}}
// ---------- sacos de arena ----------
function sandbags(x0,x1,y,rows=2,col='#a8956a'){for(let r=0;r<rows;r++)for(let x=x0+(r%2)*14;x<x1;x+=28){ctx.fillStyle=r%2?col:'#9a8758';ctx.beginPath();ctx.ellipse(x+14,y-r*13-6,15,7.5,0,0,TAU);ctx.fill();ctx.strokeStyle='rgba(40,30,10,.5)';ctx.lineWidth=1.2;ctx.stroke()}}
// ---------- mapa de trincheras ----------
function mapPaper(x,y,s,t=0,rot=0){tr(x,y,s,rot,()=>{rr(-50,-36,100,72,3);ctx.fillStyle=CRM;ctx.fill();ctx.strokeStyle='#8a6a3a';ctx.lineWidth=2;ctx.stroke();ctx.strokeStyle='#7a2a22';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(-40,-14);for(let i=0;i<7;i++)ctx.lineTo(-40+i*13,-14+(i%2?10:-4));ctx.stroke();ctx.beginPath();ctx.moveTo(-40,14);for(let i=0;i<7;i++)ctx.lineTo(-40+i*13,14+(i%2?-8:6));ctx.stroke();txt('✕',24,-10,14,RED,{wt:'900'})})}
// ---------- medalla ----------
function medal(x,y,s,rot=0,col='#f0c040'){tr(x,y,s,rot,()=>{poly([[-8,-26],[8,-26],[4,-6],[-4,-6]],RED);rect0(-3,-26,6,20,'#f1ead6');circ(0,4,13,col,'#8a6a14',2);circ(0,4,8,'rgba(255,255,255,0)','#8a6a14',1.4);txt('★',0,5,12,'#8a6a14',{wt:'900'})})}
// ---------- galones de sargento ----------
function chevrons(x,y,s,col=BRASS,a=1){ctx.save();ctx.globalAlpha*=a;ctx.translate(x,y);ctx.scale(s,s);ctx.strokeStyle=col;ctx.lineWidth=7;ctx.lineJoin='miter';for(let i=0;i<3;i++){ctx.beginPath();ctx.moveTo(-26,i*14+10);ctx.lineTo(0,i*14-6);ctx.lineTo(26,i*14+10);ctx.stroke()}ctx.restore()}
// ---------- manta con medallas (grande) ----------
function blanketBig(x,y,s,t=0){tr(x,y,s,Math.sin(t*2)*.03,()=>{rr(-62,-44,124,88,8);ctx.fillStyle='#3d5a2e';ctx.fill();ctx.strokeStyle=BRASS;ctx.lineWidth=3;ctx.stroke();
  [['#d1322e',-40,-8],['#f0c040',-14,-8],['#4a7ac8',12,-8],['#f0c040',38,-8],['#e8e0c8',-27,20],['#d1322e',0,20],['#f0c040',27,20]].forEach(([k,mx,my],i)=>{rect0(mx-2,my-24,4,16,k);circ(mx,my,9,k,'#8a6a14',1.4);txt('★',mx,my+1,9,'#6a4a0a',{wt:'900'})});
  [[-62,-44],[62,-44],[-62,44],[62,44]].forEach(([fx,fy])=>{rect0(fx-5,fy-5,10,10,'#1a2a58')})})}
// ---------- museo (fachada con columnas) y vitrina ----------
function museum(x,y,s,col='#cfc7ae'){ctx.save();ctx.translate(x,y);ctx.scale(s,s);rect0(-120,-8,240,8,'#9a927a');rect0(-110,-16,220,8,'#b0a88e');for(let i=0;i<6;i++){rect0(-96+i*38,-110,14,94,col);rect0(-100+i*38,-116,22,6,'#e0d8c0')}poly([[-116,-116],[116,-116],[0,-158]],'#bfb79e');rect0(-116,-120,232,6,'#e0d8c0');ctx.restore()}
function vitrine(x,y,s,t=0){tr(x,y,s,0,()=>{glow(0,0,90,'rgba(255,235,170,.3)');rr(-56,-52,112,104,6);ctx.fillStyle='rgba(180,220,240,.18)';ctx.fill();ctx.strokeStyle='rgba(230,240,250,.8)';ctx.lineWidth=3;ctx.stroke();rect0(-62,52,124,12,'#5a3a22');terrier(0,44,1.0,{sit:1,vest:1,col:'#b5834f',rim:'#fff7d8',t});rect0(-40,-50,12,100,'rgba(255,255,255,'+(.08+.05*Math.sin(t*3))+')')})}
// ---------- periódico (obituario) ----------
function newspaper(x,y,s,t=0,rot=-.05){tr(x,y,s,rot,()=>{rr(-60,-76,120,152,4);ctx.fillStyle='#e8e0c8';ctx.fill();ctx.strokeStyle='#7a6a4a';ctx.lineWidth=2;ctx.stroke();rect0(-52,-66,104,4,'#2a2418');txt('OBITUARIO',0,-50,15,'#2a2418',{wt:'900'});line(-52,-38,52,-38,'#2a2418',1.6);rect0(-52,-30,40,34,'#b8a878');for(let i=0;i<8;i++)line(-6,-28+i*6,52,-28+i*6,'#8a7a5a',2.2);for(let i=0;i<7;i++)line(-52,10+i*8,52-(i%3)*10,10+i*8,'#8a7a5a',2.2)})}
// ---------- bandera (genérica en el fondo no se dibuja: sin marcas) ----------
function stampBox(s,x,y,sz,col,t,ts,rot=-.14){if(t<ts)return;const u=t-ts,sc=1+1.6*Math.exp(-u*11),a=cl(u*14);ctx.save();ctx.globalAlpha=a;ctx.translate(x,y);ctx.rotate(rot);ctx.scale(sc,sc);
  const w=tw(s,sz)+26;ctx.save();glowStroke(col,5,12);rr(-w/2,-sz*.7,w,sz*1.4,8);ctx.stroke();ctx.restore();ctx.fillStyle='rgba(20,16,8,.65)';rr(-w/2,-sz*.7,w,sz*1.4,8);ctx.fill();txt(s,0,2,sz,col,{st:'rgba(20,16,8,.8)',sw:5,wt:'900'});ctx.restore()}
function coin(x,y,r,rot=0){ctx.save();ctx.translate(x,y);ctx.scale(Math.abs(Math.cos(rot))*.8+.2,1);circ(0,0,r,BRASS,'#b07a1a',1.6);circ(0,0,r*.62,'rgba(255,255,255,0)','#b07a1a',1.2);ctx.restore()}
function crowd(x0,x1,y,n,t,seed=3,col='#14100a',k=1){for(let i=0;i<n;i++){const px=lerp(x0,x1,i/(n-1)),h=34+R(seed+i)*18,b=Math.sin(t*4+i)*1.5*k;const hh=h*k;ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(px-7,y);ctx.lineTo(px-6,y-hh*.6+b);ctx.lineTo(px+6,y-hh*.6+b);ctx.lineTo(px+7,y);ctx.fill();circ(px,y-hh*.75+b,5.6,col)}}
// ---------- colinas lejanas / cielo de guerra ----------
function ridge(y,col,seed=1,amp=24){ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(-10,y+120);for(let x=-10;x<=370;x+=20)ctx.lineTo(x,y-R(seed+(x/20|0))*amp);ctx.lineTo(370,y+120);ctx.fill()}
