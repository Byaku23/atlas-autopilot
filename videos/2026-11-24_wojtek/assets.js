// ===== 24 · Voytek, el oso soldado — recursos (verde militar, arena, cielo de humo; acento rojo polaco) =====
CAP.acc='#ff6b6b';
const BRASS='#f0c040',RED='#e63946',GRN='#3d4a2a',INK='rgba(18,16,12,.92)',CRM='#f1ead6',NIGHT='#141c22',BRN='#4a2e1a',OLV='#5a6a3a';
const TX=(s,x,y,sz,col,t,t0,o={})=>mtext(s,x,y,sz,col,t,t0,Object.assign({stroke:INK,sw:Math.max(3.5,sz*.2)},o));
function glowStroke(col,lw,blur=10){ctx.strokeStyle=col;ctx.lineWidth=lw;ctx.shadowColor=col;ctx.shadowBlur=blur;ctx.lineJoin='round';ctx.lineCap='round'}
// ---------- osa negra de perfil mirando a la derecha. (0,0)=suelo. o: flip, ph (paso), t, col, rim, al, cub (cría), sit (sentada/pide), down, dark ----------
function bear(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);if(o.al!==undefined)ctx.globalAlpha*=o.al;
  const c=o.col||'#2a1d18',d=o.dark||'#1a110d',a=Math.sin(o.ph||0)*7,bob=o.ph?-Math.abs(Math.cos(o.ph))*1.5:0,dn=(o.down||0)*8;ctx.translate(0,bob);
  line(-18,-22,-20-a,-3,d,10);line(14,-22,16+a,-3,d,10);
  ctx.fillStyle=c;ctx.beginPath();ctx.ellipse(-2,-30,32,21,0,0,TAU);ctx.fill();
  line(-10,-22,-12+a,-3,c,11);line(22,-22,24-a,-3,c,11);
  ctx.save();ctx.translate(32,-38+dn);
  circ(-3,-14,6,d);circ(5,-15,5.5,c);
  circ(0,0,15,c);
  ctx.fillStyle='#9a7a5a';ctx.beginPath();ctx.ellipse(13,5,10,7.5,.15,0,TAU);ctx.fill();circ(21,3,3.4,'#0c0806');
  circ(6,-4,2.2,'#fff');circ(6.6,-4,1.2,'#0c0806');if(o.helm){ctx.fillStyle='#5a6a3a';ctx.beginPath();ctx.arc(0,-3,15.5,Math.PI,TAU);ctx.fill();ctx.fillRect(-16,-4.5,32,3.2);ctx.fillStyle='#e63946';ctx.fillRect(-2,-14,4,4)}
  ctx.restore();
  if(o.rim){ctx.strokeStyle=o.rim;ctx.lineWidth=1.6;ctx.globalAlpha*=.85;ctx.beginPath();ctx.ellipse(-2,-30,30,19,0,-2.9,-1.2);ctx.stroke()}
  ctx.restore()}
// ---------- osito de peluche (centro en x,y) ----------
function teddy(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.rotate(o.rot||0);const c=o.col||'#c98a4a',d='#9a6430';
  circ(-9,10,5,c);circ(9,10,5,c);circ(-12,-2,4.4,c);circ(12,-2,4.4,c);
  ctx.fillStyle=c;ctx.beginPath();ctx.ellipse(0,4,11,13,0,0,TAU);ctx.fill();circ(0,5,6.5,'#e6b678');
  circ(-6,-15,4.4,c);circ(6,-15,4.4,c);circ(0,-10,9.5,c);circ(0,-7,4.2,'#e6b678');circ(0,-8.4,1.5,'#2a1608');circ(-3.4,-12,1.2,'#2a1608');circ(3.4,-12,1.2,'#2a1608');ctx.restore()}
// ---------- locomotora de perfil mirando a la izquierda. (0,0)=riel, frente en x=-92. o: flip, t, lux (0..1 faro) ----------
function loco(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);const t=o.t||0;
  poly([[-100,0],[-80,-16],[-80,0]],'#2a2a32');
  rr(-82,-52,110,34,10);ctx.fillStyle='#17181f';ctx.fill();rr(-82,-52,110,5,4);ctx.fillStyle='#d9363e';ctx.fill();
  ctx.fillStyle='#17181f';ctx.beginPath();ctx.moveTo(-66,-52);ctx.lineTo(-70,-74);ctx.lineTo(-44,-74);ctx.lineTo(-48,-52);ctx.closePath();ctx.fill();
  rr(26,-78,44,64,4);ctx.fillStyle='#22232c';ctx.fill();rr(32,-70,30,22,3);ctx.fillStyle='#0a0c12';ctx.fill();
  ctx.fillStyle='#d9363e';ctx.fillRect(22,-82,52,6);
  circ(-86,-36,6,'#fff6c8');if(o.lux)glow(-86,-36,60*o.lux,'rgba(255,246,200,.9)');
  [-58,-26,6,44].forEach((wx,i)=>{const r=i==3?14:11;circ(wx,-r,r,'#2a2a32','#d9363e',2);const a=-(o.t||0)*(o.flip?-1:1)*8+i;for(let j=0;j<4;j++){line(wx,-r,wx+Math.cos(a+j*1.57)*r*.9,-r+Math.sin(a+j*1.57)*r*.9,'#8a8f9e',1.6)}});
  line(-58,-14,44,-14,'#8a8f9e',2.4);
  ctx.restore()}
function railBed(y,w=1000){ctx.fillStyle='#1b1f26';ctx.fillRect(-300,y,w,10);ctx.fillStyle='#8a8f9e';ctx.fillRect(-300,y,w,2);for(let i=-6;i<24;i++){ctx.fillStyle='#3a2a20';ctx.fillRect(i*30,y+3,16,7)}}
// ---------- bombillas de carpa (guirnalda) ----------
function bulbs(y,t,n=14,amp=6){for(let i=0;i<n;i++){const x=8+i*(344/(n-1)),yy=y+Math.sin(i*.9)*amp,on=Math.sin(t*5+i*1.3)>-.2;glow(x,yy,on?13:5,on?'rgba(255,214,120,.75)':'rgba(255,214,120,.2)');circ(x,yy,3.2,on?'#fff3c4':'#8a6a2a')}}
// ---------- persona sencilla (pies en y=0). o: robe, hair, hat, gun, beard, arm, ph, flip, t, al ----------
function person(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);if(o.al!==undefined)ctx.globalAlpha*=o.al;
  const robe=o.robe||'#c9a46a',skin=o.skin||'#e0b48a',sw=Math.sin(o.ph||0)*5;
  line(-4,-24,-4+sw,-1,o.hair||'#3a2418',4.6);line(4,-24,4-sw,-1,o.hair||'#3a2418',4.6);
  poly([[-10,-22],[10,-22],[8,-54],[-8,-54]],robe);
  ctx.save();ctx.translate(7,-50);ctx.rotate(o.arm||0);line(0,0,0,17,skin,4.2);if(o.gun)line(-4,15,26,4,'#1a1014',3);ctx.restore();
  circ(0,-63,8.2,skin);ctx.fillStyle=o.hair||'#3a2418';ctx.beginPath();ctx.arc(0,-65,8.6,Math.PI*1.02,TAU*1.0);ctx.fill();
  if(o.beard){ctx.fillStyle=o.hair||'#3a2418';ctx.beginPath();ctx.moveTo(-6,-60);ctx.quadraticCurveTo(0,-48,6,-60);ctx.closePath();ctx.fill()}
  if(o.hat){ctx.fillStyle='#0a0a10';ctx.fillRect(-11,-70,22,3.4);ctx.fillRect(-7,-86,14,17);ctx.fillStyle=RED;ctx.fillRect(-7,-73,14,3)}
  ctx.restore()}
// ---------- moneda y sobre ----------
function coin(x,y,r,rot=0){ctx.save();ctx.translate(x,y);ctx.scale(Math.abs(Math.cos(rot))*.8+.2,1);circ(0,0,r,BRASS,'#b07a1a',1.6);circ(0,0,r*.62,'rgba(255,255,255,0)','#b07a1a',1.2);ctx.restore()}
function envel(x,y,s,rot,col=CRM){tr(x,y,s,rot,()=>{rr(-16,-11,32,22,3);ctx.fillStyle=col;ctx.fill();ctx.strokeStyle='#a8844a';ctx.lineWidth=1.4;ctx.stroke();ctx.beginPath();ctx.moveTo(-16,-11);ctx.lineTo(0,2);ctx.lineTo(16,-11);ctx.stroke();circ(0,3,2.2,RED)})}
// ---------- cartel de protesta ----------
function sign(x,y,s,txtS,t,ts){const q=eb(cl((t-ts)/.35));if(q<=0)return;tr(x,y-(1-q)*-40,s*q,Math.sin(t*5+x)*.06,()=>{line(0,0,0,70,'#6a4a28',4);rr(-26,-34,52,38,4);ctx.fillStyle=CRM;ctx.fill();ctx.strokeStyle=RED;ctx.lineWidth=3;ctx.stroke();txt(txtS,0,-14,22,RED,{wt:'900'})})}
// ---------- sello / pergamino ----------
function stampBox(s,x,y,sz,col,t,ts,rot=-.14){if(t<ts)return;const u=t-ts,sc=1+1.6*Math.exp(-u*11),a=cl(u*14);ctx.save();ctx.globalAlpha=a;ctx.translate(x,y);ctx.rotate(rot);ctx.scale(sc,sc);
  const w=tw(s,sz)+26;ctx.save();glowStroke(col,5,12);rr(-w/2,-sz*.7,w,sz*1.4,8);ctx.stroke();ctx.restore();ctx.fillStyle='rgba(20,8,10,.6)';rr(-w/2,-sz*.7,w,sz*1.4,8);ctx.fill();txt(s,0,2,sz,col,{st:'rgba(20,8,10,.8)',sw:5,wt:'900'});ctx.restore()}
function parch(x,y,w,h,a=1){ctx.save();ctx.globalAlpha=a;ctx.shadowColor='rgba(0,0,0,.5)';ctx.shadowBlur=18;rr(x-w/2,y-h/2,w,h,10);ctx.fillStyle=CRM;ctx.fill();ctx.restore();
  ctx.save();ctx.globalAlpha=a;ctx.strokeStyle='rgba(138,90,42,.5)';ctx.lineWidth=2;rr(x-w/2+6,y-h/2+6,w-12,h-12,7);ctx.stroke();ctx.restore()}
// ---------- llamas ----------
function fire(x,y,s,t,k=1){ctx.save();ctx.translate(x,y);ctx.scale(s,s);for(let i=0;i<9;i++){const fx=(i-4)*11+Math.sin(t*9+i)*3,h=(46+R(i*3)*30)*k*(.8+.2*Math.sin(t*12+i*2)),w=10+R(i)*6;
  [['#ff4a1a',1],['#ff9a2a',.66],['#ffe27a',.36]].forEach(([c,m])=>{ctx.fillStyle=c;ctx.beginPath();ctx.moveTo(fx-w*m,0);ctx.quadraticCurveTo(fx-w*m*.9,-h*m*.6,fx+Math.sin(t*7+i)*4,-h*m);ctx.quadraticCurveTo(fx+w*m*.9,-h*m*.6,fx+w*m,0);ctx.closePath();ctx.fill()})}ctx.restore()}
function starfield(t,n,seed,a=1){stars(t,n,seed,a)}
function sunO(x,y,r,t,a=1){ctx.save();ctx.globalAlpha=a;glow(x,y,r*2.6,'rgba(255,190,90,.45)');rays(x,y,t,14,r*3,'rgba(255,220,130,.22)',1,.15,8);
  const g=ctx.createRadialGradient(x,y,r*.1,x,y,r);g.addColorStop(0,'#fff6c8');g.addColorStop(.6,'#ffd27a');g.addColorStop(1,'#ff9a3a');ctx.fillStyle=g;ctx.beginPath();ctx.arc(x,y,r,0,TAU);ctx.fill();ctx.restore()}

// ---------- NUEVO v24 ----------
const BCOL='#6b4a2e',BDRK='#3e2a18';
// soldado con casco (pies en y)
function soldier(x,y,s,o={}){person(x,y,s,Object.assign({robe:'#6a7a42',hair:'#2a2a1a'},o));ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);ctx.fillStyle='#4a5a2c';ctx.beginPath();ctx.arc(0,-65,9.6,Math.PI,TAU);ctx.fill();ctx.fillRect(-11,-66,22,3);ctx.restore()}
// oso de pie cargando (pies en (x,y)); o: ph (paso), crate (0/1), shell (0/1), al, flip
function bearUp(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);if(o.al!==undefined)ctx.globalAlpha*=o.al;
  const a=Math.sin(o.ph||0)*6,bob=o.ph?-Math.abs(Math.cos(o.ph))*1.5:0;ctx.translate(0,bob);
  line(-6,-24,-8-a,-2,BDRK,9);line(8,-24,10+a,-2,BDRK,9);
  ctx.fillStyle=BCOL;ctx.beginPath();ctx.ellipse(0,-40,19,28,0,0,TAU);ctx.fill();
  if(o.rim){ctx.strokeStyle=o.rim;ctx.lineWidth=1.6;ctx.beginPath();ctx.ellipse(0,-40,18,27,0,-2.6,-1.0);ctx.stroke()}
  circ(-5,-76,5,BDRK);circ(9,-77,5,BDRK);circ(2,-68,14,BCOL);
  ctx.fillStyle='#9a7a5a';ctx.beginPath();ctx.ellipse(12,-64,8,6,.1,0,TAU);ctx.fill();circ(18,-65,2.8,'#0c0806');circ(7,-71,2,'#fff');circ(7.5,-71,1,'#0c0806');
  ctx.fillStyle='#4a5a2c';ctx.beginPath();ctx.arc(2,-70,14.5,Math.PI,TAU);ctx.fill();ctx.fillRect(-13,-71,28,3);
  if(o.crate){line(8,-52,24,-44,BCOL,8);crate(30,-44,1,0)}
  if(o.shell){line(8,-52,22,-46,BCOL,8);shell(24,-52,1.1,-.3)}
  ctx.restore()}
function crate(x,y,s,rot=0){tr(x,y,s,rot,()=>{rr(-16,-12,32,24,2);ctx.fillStyle='#9a6a38';ctx.fill();ctx.strokeStyle='#5a3a1a';ctx.lineWidth=2;ctx.stroke();line(-16,-4,16,-4,'#5a3a1a',1.4);line(-16,4,16,4,'#5a3a1a',1.4);rect0(-4,-8,8,3,'#e63946')})}
function shell(x,y,s,rot=0){tr(x,y,s,rot,()=>{rr(-6,-4,12,22,3);ctx.fillStyle='#b8a050';ctx.fill();ctx.beginPath();ctx.moveTo(-6,-4);ctx.quadraticCurveTo(0,-24,6,-4);ctx.closePath();ctx.fillStyle='#4a4a3a';ctx.fill();rect0(-6,14,12,3,'#6a5a20')})}
function flagPL(x,y,w,t=0){const h=w*.62;ctx.save();ctx.translate(x,y);for(let i=0;i<10;i++){const px=i*w/10,off=Math.sin(t*5+i*.6)*2;ctx.fillStyle='#fff';ctx.fillRect(px,off,w/10+1,h/2);ctx.fillStyle='#e63946';ctx.fillRect(px,off+h/2,w/10+1,h/2)}line(0,-4,0,h+36,'#2a2a2a',3);ctx.restore()}
function mug(x,y,s,t=0){ctx.save();ctx.translate(x,y);ctx.scale(s,s);rr(-11,-16,22,30,3);ctx.fillStyle='#e0a020';ctx.fill();ctx.strokeStyle='#fff6d0';ctx.lineWidth=1.6;ctx.stroke();ctx.strokeStyle='#e8e0c0';ctx.lineWidth=3.2;ctx.beginPath();ctx.arc(14,0,7,-1.3,1.3);ctx.stroke();for(let i=0;i<4;i++)circ(-8+i*5.4,-17+Math.sin(t*3+i)*.8,4.4,'#fff6e0');ctx.restore()}
function cig(x,y,s,rot=0){tr(x,y,s,rot,()=>{rect0(-16,-2.4,26,4.8,'#f4f0e4');rect0(4,-2.4,6,4.8,'#c9843a');rect0(-18,-2.4,4,4.8,'#ff5a2a')})}
function bottle(x,y,s,rot=0){tr(x,y,s,rot,()=>{rr(-8,-14,16,36,4);ctx.fillStyle='rgba(210,235,240,.9)';ctx.fill();rr(-8,0,16,22,4);ctx.fillStyle='rgba(250,250,250,.9)';ctx.fill();rect0(-3,-24,6,12,'rgba(210,235,240,.9)');circ(0,-26,3.6,'#e8c89a');rect0(-8,6,16,8,'#c0392b');txt('V',0,10,7,'#fff',{wt:'900'})})}
function badge(x,y,s,t=0){tr(x,y,s,Math.sin(t*2)*.04,()=>{circ(0,0,46,'#c0392b','#f1ead6',4);circ(0,0,38,'rgba(0,0,0,.15)');bearUp(-6,24,.62,{shell:1});})}
function chev(x,y,s,col='#f1ead6'){ctx.save();ctx.translate(x,y);ctx.scale(s,s);for(let i=0;i<2;i++){ctx.strokeStyle=col;ctx.lineWidth=6;ctx.lineJoin='miter';ctx.beginPath();ctx.moveTo(-26,i*14+8);ctx.lineTo(0,i*14-10);ctx.lineTo(26,i*14+8);ctx.stroke()}ctx.restore()}
function castle(x,y,s,c='#1a1a22'){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.fillStyle=c;ctx.beginPath();ctx.moveTo(-140,0);ctx.lineTo(-110,-50);ctx.lineTo(-70,-60);ctx.lineTo(-40,-110);ctx.lineTo(120,-100);ctx.lineTo(150,0);ctx.closePath();ctx.fill();for(let i=0;i<8;i++)ctx.fillRect(-36+i*18,-122,10,14);ctx.fillRect(40,-160,26,60);ctx.beginPath();ctx.moveTo(40,-160);ctx.lineTo(53,-186);ctx.lineTo(66,-160);ctx.fill();ctx.restore()}
function abbey(x,y,s,c='#2a2a30'){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.fillStyle=c;ctx.fillRect(-60,-40,120,40);ctx.fillRect(-48,-62,28,22);ctx.fillRect(18,-70,30,30);ctx.beginPath();ctx.moveTo(-60,-40);ctx.lineTo(-40,-52);ctx.lineTo(-20,-40);ctx.fill();ctx.fillStyle='#14141a';for(let i=0;i<5;i++)ctx.fillRect(-48+i*22,-26,8,16);ctx.restore()}
function rect0(x,y,w,h,c){ctx.fillStyle=c;ctx.fillRect(x,y,w,h)}
function heart(x,y,s,col='#e0484e',a=1){ctx.save();ctx.globalAlpha*=a;ctx.translate(x,y);ctx.scale(s,s);ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(0,5);ctx.bezierCurveTo(-12,-4,-6,-12,0,-5);ctx.bezierCurveTo(6,-12,12,-4,0,5);ctx.fill();ctx.restore()}
function ridge(t,c1,c2,y0=430,sp=6){for(let k=0;k<2;k++){ctx.fillStyle=k?c1:c2;ctx.beginPath();ctx.moveTo(-20,520);for(let x=-20;x<=380;x+=20)ctx.lineTo(x,y0-k*34-Math.sin((x+t*sp*(k+1))*.02+k*2)*24);ctx.lineTo(380,520);ctx.fill()}}
