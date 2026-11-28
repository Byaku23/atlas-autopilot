// ===== 28 · Sargento Reckless — recursos (Corea 1953: crepúsculo de humo, naranja de bengalas, verde oliva; acento naranja/ámbar) =====
CAP.acc='#ff9a3c';
const GOLD='#ffcf5a',ORG='#ff9a3c',RED='#e0524a',GRN='#9bcf5a',OLV='#4a5a2a',INK='rgba(14,12,8,.92)',CRM='#f4ecd8',STEEL='#aab4bc',MUD='#2c3320';
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
function reck(x,y,s,o={}){horse(x,y,s,Object.assign({col:'#b5612f',dark:'#7a3a1a',mane:'#2a140a',rim:'#ffd9a0'},o));
  if(o.pack){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);const q=o.pack;ctx.globalAlpha*=cl(q);[[-18,-80],[6,-80]].forEach(([bx,by],i)=>{ctx.fillStyle='#4a5a2a';rr(bx,by-12*q,22,14,2);ctx.fill();ctx.strokeStyle='#1e260f';ctx.lineWidth=1.6;ctx.stroke();ctx.fillStyle='#d8c070';ctx.fillRect(bx+4,by-12*q+5,14,2)});ctx.restore()}
  if(o.vest){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);ctx.globalAlpha*=cl(o.vest);ctx.fillStyle='#55683a';ctx.beginPath();ctx.ellipse(-2,-58,30,14,0,Math.PI,TAU);ctx.fill();ctx.strokeStyle='#1e260f';ctx.lineWidth=2;ctx.stroke();ctx.restore()}}
function chev(x,y,s,n,col=GOLD,rocker=0){tr(x,y,s,0,()=>{for(let i=0;i<n;i++){const yy=-i*17;ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(-46,yy+6);ctx.lineTo(0,yy-14);ctx.lineTo(46,yy+6);ctx.lineTo(46,yy+20);ctx.lineTo(0,yy);ctx.lineTo(-46,yy+20);ctx.closePath();ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=3;ctx.stroke()}
  for(let i=0;i<rocker;i++){const yy=24+i*14;ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(-46,yy+6);ctx.quadraticCurveTo(0,yy+22,46,yy+6);ctx.lineTo(46,yy+16);ctx.quadraticCurveTo(0,yy+32,-46,yy+16);ctx.closePath();ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=3;ctx.stroke()}})}
function leg(x,y,s,q=1){tr(x,y,s*q,0,()=>{rr(-12,-62,26,34,10);ctx.fillStyle='#c9a06a';ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=3;ctx.stroke();line(1,-28,1,34,STEEL,7);circ(1,-6,6,'#78848c',INK,2);rr(-12,32,38,12,5);ctx.fillStyle='#2a1a10';ctx.fill();ctx.strokeStyle=INK;ctx.stroke()})}
function rifle(x,y,s,fire=0){tr(x,y,s,-.12,()=>{rr(-64,-9,100,18,6);ctx.fillStyle='#4a5a2a';ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=3;ctx.stroke();poly([[-64,-9],[-92,-22],[-92,22],[-64,9]],'#5a6a34',INK,3);rr(-20,9,16,26,3);ctx.fillStyle='#2a2f18';ctx.fill();ctx.strokeStyle=INK;ctx.stroke();rr(36,-5,10,10,2);ctx.fillStyle='#2a2f18';ctx.fill();
  if(fire>0){const f=fire;ctx.globalAlpha=1-f*.7;poly([[-92,0],[-92-70*f,-24*f],[-92-110*f,0],[-92-70*f,24*f]],ORG);poly([[-92,0],[-92-44*f,-12*f],[-92-70*f,0],[-92-44*f,12*f]],GOLD)}})}
function crate(x,y,s,q=1){tr(x,y,s*q,0,()=>{rr(-34,-24,68,48,4);ctx.fillStyle='#55683a';ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=3;ctx.stroke();ctx.fillStyle='#1e260f';ctx.fillRect(-34,-4,68,4);txt('MUNICIÓN',0,12,10,'#f0e0a0',{wt:'900'});line(-34,-24,34,24,'rgba(0,0,0,.18)',2)})}
function medal(x,y,s,q=1){tr(x,y,s*q,0,()=>{poly([[-22,-80],[22,-80],[16,-22],[-16,-22]],'#6a2a5a',INK,3);poly([[-8,-80],[8,-80],[6,-22],[-6,-22]],'#e8d8a0');circ(0,6,38,GOLD,INK,4);circ(0,6,29,'#f0c040','#b8860b',3);for(let i=0;i<5;i++){const a=-Math.PI/2+i*TAU/5;ctx.fillStyle='#b8860b';ctx.beginPath();ctx.arc(Math.cos(a)*14,6+Math.sin(a)*14,3,0,TAU);ctx.fill()}txt('★',0,8,28,'#8a5a0a',{wt:'900'})})}
