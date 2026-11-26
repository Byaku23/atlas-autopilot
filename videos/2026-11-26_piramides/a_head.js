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
