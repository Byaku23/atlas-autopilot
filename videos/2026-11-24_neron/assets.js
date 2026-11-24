// ===== 24 · Nerón y el incendio de Roma — recursos (noche morada, fuego, oro y mármol) =====
CAP.acc='#ffb347';
const GOLD='#f2b134',FLAME='#ff6a1a',RED='#c0272d',PURP='#5b2a86',MARB='#efe6d2',INK='rgba(16,8,20,.92)',NIGHT='#140a1e',GRN='#2e9e4a';
const TX=(s,x,y,sz,col,t,t0,o={})=>mtext(s,x,y,sz,col,t,t0,Object.assign({stroke:INK,sw:Math.max(3.5,sz*.2)},o));
function glowStroke(col,lw,blur=10){ctx.strokeStyle=col;ctx.lineWidth=lw;ctx.shadowColor=col;ctx.shadowBlur=blur;ctx.lineJoin='round';ctx.lineCap='round'}
function rect0(x,y,w,h,c){ctx.fillStyle=c;ctx.fillRect(x,y,w,h)}
function starfield(t,n,seed,a=1){stars(t,n,seed,a)}
// ---------- persona sencilla (pies en y=0) ----------
function person(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);if(o.al!==undefined)ctx.globalAlpha*=o.al;
  const robe=o.robe||'#c9a46a',skin=o.skin||'#e0b48a',sw=Math.sin(o.ph||0)*5;
  line(-4,-24,-4+sw,-1,o.hair||'#3a2418',4.6);line(4,-24,4-sw,-1,o.hair||'#3a2418',4.6);
  poly([[-10,-22],[10,-22],[8,-54],[-8,-54]],robe);
  ctx.save();ctx.translate(7,-50);ctx.rotate(o.arm||0);line(0,0,0,17,skin,4.2);ctx.restore();
  circ(0,-63,8.2,skin);ctx.fillStyle=o.hair||'#3a2418';ctx.beginPath();ctx.arc(0,-65,8.6,Math.PI*1.02,TAU*1.0);ctx.fill();
  ctx.restore()}
// emperador: toga morada, corona de laurel y franja dorada
function nero(x,y,s,o={}){person(x,y,s,Object.assign({robe:'#7a2f9e',hair:'#6b4a22'},o));
  ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);if(o.al!==undefined)ctx.globalAlpha*=o.al;
  ctx.strokeStyle=GOLD;ctx.lineWidth=2.4;ctx.beginPath();ctx.arc(0,-65,9.6,Math.PI*1.0,TAU*1.0);ctx.stroke();
  for(let i=0;i<4;i++)circ(-8+i*5.3,-68-Math.sin(i/3*Math.PI)*3,1.7,GOLD);
  ctx.strokeStyle=GOLD;ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(-7,-53);ctx.lineTo(4,-24);ctx.stroke();ctx.restore()}
// ---------- violín (centro x,y) ----------
function violin(x,y,s,rot=0){tr(x,y,s,rot,()=>{
  rect0(-2.4,-44,4.8,30,'#2a1408');circ(0,-46,3.6,'#2a1408');
  ctx.fillStyle='#a8521c';ctx.beginPath();ctx.ellipse(0,9,13,11,0,0,TAU);ctx.fill();ctx.beginPath();ctx.ellipse(0,-7,10,9,0,0,TAU);ctx.fill();
  ctx.fillStyle='#7a3a12';ctx.beginPath();ctx.ellipse(0,9,8,6.5,0,0,TAU);ctx.fill();
  line(-5,3,-5,12,'#2a1408',1.2);line(5,3,5,12,'#2a1408',1.2);
  line(-.8,-44,-.8,14,'#e8dcc0',.8);line(.8,-44,.8,14,'#e8dcc0',.8);
  line(-30,-10,26,22,'#d8c08a',1.8)})}
// ---------- lira ----------
function lyre(x,y,s,rot=0){tr(x,y,s,rot,()=>{
  ctx.strokeStyle='#c98a2a';ctx.lineWidth=4;ctx.lineCap='round';
  ctx.beginPath();ctx.moveTo(-17,16);ctx.bezierCurveTo(-30,-6,-26,-26,-15,-34);ctx.stroke();
  ctx.beginPath();ctx.moveTo(17,16);ctx.bezierCurveTo(30,-6,26,-26,15,-34);ctx.stroke();
  line(-17,-33,17,-33,'#c98a2a',4);
  for(let i=0;i<5;i++)line(-10+i*5,-32,-8+i*4,14,GOLD,1.2);
  ctx.fillStyle='#8a4a1a';ctx.beginPath();ctx.ellipse(0,18,21,9,0,0,TAU);ctx.fill();ctx.strokeStyle='#c98a2a';ctx.lineWidth=2;ctx.stroke()})}
// ---------- llamas ----------
function fire(x,y,s,t,k=1){ctx.save();ctx.translate(x,y);ctx.scale(s,s);for(let i=0;i<9;i++){const fx=(i-4)*11+Math.sin(t*9+i)*3,h=(46+R(i*3)*30)*k*(.8+.2*Math.sin(t*12+i*2)),w=10+R(i)*6;
  [['#ff4a1a',1],['#ff9a2a',.66],['#ffe27a',.36]].forEach(([c,m])=>{ctx.fillStyle=c;ctx.beginPath();ctx.moveTo(fx-w*m,0);ctx.quadraticCurveTo(fx-w*m*.9,-h*m*.6,fx+Math.sin(t*7+i)*4,-h*m);ctx.quadraticCurveTo(fx+w*m*.9,-h*m*.6,fx+w*m,0);ctx.closePath();ctx.fill()})}ctx.restore()}
function embersF(t,n,seed,x0=0,x1=360,y0=520,a=1){for(let i=0;i<n;i++){const sp=.25+R(seed+i)*.35,q=((t*sp+R(seed+i*7))%1),x=lerp(x0,x1,R(seed+i*3))+Math.sin(t*2+i)*10,y=y0-q*(y0-40);
  circ(x,y,1+R(seed+i*5)*1.6,'rgba(255,'+(140+R(i)*80|0)+',60,'+(a*(1-q))+')')}}
function smokeCol(x,y,t,w=60,a=.5){for(let i=0;i<7;i++){const q=((t*.25+i/7)%1);circ(x+Math.sin(q*5+i)*12,y-q*220,w*.25+q*w*.7,'rgba(40,28,46,'+(a*(1-q))+')')}}
// ---------- edificios romanos ----------
function insula(x,y,w,h,t,burn=0,col='#2e2236'){rect0(x,y-h,w,h,col);
  const cols=Math.max(1,Math.floor(w/14)),rows=Math.max(1,Math.floor(h/22));
  for(let r=0;r<rows;r++)for(let c=0;c<cols;c++){const on=burn>0&&R(x+r*13+c*7)<burn*1.2;ctx.fillStyle=on?'rgba(255,'+(150+R(c+r)*70|0)+',60,'+(.7+.3*Math.sin(t*9+r*c))+')':'rgba(255,230,160,.12)';ctx.fillRect(x+5+c*14,y-h+8+r*22,7,10)}
  if(burn>0)fire(x+w/2,y-h+6,w/90,t,burn)}
function skyline(t,y,burn=1,seed=0){for(let i=0;i<10;i++){const w=34+R(seed+i)*20,h=60+R(seed+i*3)*90;insula(i*38-12,y,w,h,t,burn*(.4+R(seed+i*5)*.7),i%2?'#2a1e32':'#33253c')}}
function column(x,y,h,w=12,c=MARB){rect0(x-w/2,y-h,w,h,c);rect0(x-w/2-3,y-h-6,w+6,7,c);rect0(x-w/2-3,y-4,w+6,5,c);for(let i=0;i<3;i++)line(x-w/2+3+i*w/3,y-h,x-w/2+3+i*w/3,y-4,'rgba(0,0,0,.12)',1)}
function temple(x,y,s,c=MARB){ctx.save();ctx.translate(x,y);ctx.scale(s,s);for(let i=0;i<4;i++)column(-33+i*22,0,50,10,c);poly([[-46,-60],[0,-86],[46,-60]],c);rect0(-46,-62,92,6,c);rect0(-48,0,96,6,c);ctx.restore()}
function domus(x,y,s,t=0,gl=1){ctx.save();ctx.translate(x,y);ctx.scale(s,s);glow(0,-40,150,'rgba(255,200,80,'+(.35*gl)+')');
  const g=ctx.createLinearGradient(0,-70,0,0);g.addColorStop(0,'#ffe27a');g.addColorStop(1,'#c98a2a');ctx.fillStyle=g;ctx.fillRect(-110,-70,220,70);
  poly([[-120,-70],[0,-118],[120,-70]],'#f2b134');
  for(let i=0;i<7;i++){ctx.fillStyle='#5a3a10';ctx.beginPath();ctx.moveTo(-90+i*30,0);ctx.lineTo(-90+i*30,-26);ctx.arc(-80+i*30,-26,10,Math.PI,0);ctx.lineTo(-70+i*30,0);ctx.fill()}
  for(let i=0;i<8;i++)rect0(-104+i*30,-70,5,70,'rgba(255,248,210,.7)');
  circ(0,-92,7,'#fff6c8');ctx.restore()}
function tent(x,y,s,col='#c9a46a'){ctx.save();ctx.translate(x,y);ctx.scale(s,s);poly([[-24,0],[0,-34],[24,0]],col);poly([[-6,0],[0,-16],[6,0]],'#2a1a10');line(0,-34,0,-42,'#6a4a28',2);ctx.restore()}
function sack(x,y,s,rot=0){tr(x,y,s,rot,()=>{ctx.fillStyle='#e8d6a0';ctx.beginPath();ctx.moveTo(-18,18);ctx.quadraticCurveTo(-24,-8,-8,-22);ctx.lineTo(8,-22);ctx.quadraticCurveTo(24,-8,18,18);ctx.closePath();ctx.fill();ctx.strokeStyle='#a8844a';ctx.lineWidth=2;ctx.stroke();line(-9,-20,9,-20,'#8a5a2a',3);
  for(let i=0;i<3;i++){line(0,12,-6+i*6,-6,'#b8860b',1.6);circ(-6+i*6,-8,2,'#d9a520')}})}
function tree(x,y,s,c='#3f8a4a'){ctx.save();ctx.translate(x,y);ctx.scale(s,s);rect0(-3,-20,6,20,'#4a2e18');circ(0,-34,16,c);circ(-10,-26,10,c);circ(10,-26,10,c);ctx.restore()}
function goat(x,y,s,flip=false){ctx.save();ctx.translate(x,y);ctx.scale(s*(flip?-1:1),s);
  line(-16,-8,-18,12,'#e8e0d0',4);line(-8,-8,-8,12,'#e8e0d0',4);line(10,-8,10,12,'#e8e0d0',4);line(18,-8,20,12,'#e8e0d0',4);
  ctx.fillStyle='#f4efe4';ctx.beginPath();ctx.ellipse(0,-12,26,13,0,0,TAU);ctx.fill();
  poly([[-26,-18],[-34,-26],[-24,-10]],'#f4efe4');
  ctx.save();ctx.translate(28,-24);circ(0,0,9,'#f4efe4');ctx.fillStyle='#e8e0d0';ctx.beginPath();ctx.ellipse(8,4,7,5,.2,0,TAU);ctx.fill();circ(3,-2,1.6,'#222');
  ctx.strokeStyle='#8a7a5a';ctx.lineWidth=2.6;ctx.beginPath();ctx.arc(-4,-8,8,Math.PI*1.1,Math.PI*1.9);ctx.stroke();poly([[4,9],[8,20],[11,8]],'#e8e0d0');ctx.restore();ctx.restore()}
function bubble(x,y,w,h,s,col='#fff',tc='#222',tail=1){tr(x,y,1,0,()=>{rr(-w/2,-h/2,w,h,h/2.4);ctx.fillStyle=col;ctx.fill();poly([[tail*w*.2,h/2-1],[tail*w*.2+tail*10,h/2+12],[tail*w*.2+tail*16,h/2-1]],col);txt(s,0,0,Math.min(h*.6,20),tc,{wt:'900'})})}
function stampBox(s,x,y,sz,col,t,ts,rot=-.14){if(t<ts)return;const u=t-ts,sc=1+1.6*Math.exp(-u*11),a=cl(u*14);ctx.save();ctx.globalAlpha=a;ctx.translate(x,y);ctx.rotate(rot);ctx.scale(sc,sc);
  const w=tw(s,sz)+26;ctx.save();glowStroke(col,5,12);rr(-w/2,-sz*.7,w,sz*1.4,8);ctx.stroke();ctx.restore();ctx.fillStyle='rgba(20,8,10,.6)';rr(-w/2,-sz*.7,w,sz*1.4,8);ctx.fill();txt(s,0,2,sz,col,{st:'rgba(20,8,10,.8)',sw:5,wt:'900'});ctx.restore()}
function parch(x,y,w,h,a=1){ctx.save();ctx.globalAlpha=a;ctx.shadowColor='rgba(0,0,0,.5)';ctx.shadowBlur=18;rr(x-w/2,y-h/2,w,h,10);ctx.fillStyle='#f1e6c8';ctx.fill();ctx.restore();
  ctx.save();ctx.globalAlpha=a;ctx.strokeStyle='rgba(138,90,42,.5)';ctx.lineWidth=2;rr(x-w/2+6,y-h/2+6,w-12,h-12,7);ctx.stroke();ctx.restore()}
function heart(x,y,s,col='#e0484e',a=1){ctx.save();ctx.globalAlpha*=a;ctx.translate(x,y);ctx.scale(s,s);ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(0,5);ctx.bezierCurveTo(-12,-4,-6,-12,0,-5);ctx.bezierCurveTo(6,-12,12,-4,0,5);ctx.fill();ctx.restore()}
function sunO(x,y,r,t,a=1){ctx.save();ctx.globalAlpha=a;glow(x,y,r*2.6,'rgba(255,190,90,.45)');rays(x,y,t,14,r*3,'rgba(255,220,130,.22)',1,.15,8);
  const g=ctx.createRadialGradient(x,y,r*.1,x,y,r);g.addColorStop(0,'#fff6c8');g.addColorStop(.6,'#ffd27a');g.addColorStop(1,'#ff9a3a');ctx.fillStyle=g;ctx.beginPath();ctx.arc(x,y,r,0,TAU);ctx.fill();ctx.restore()}
function boom(x,y,t,ts,sz=1){const u=t-ts;if(u<0||u>.8)return;glow(x,y,70*sz*(1-u),'rgba(255,170,60,'+(.8*(1-u))+')');burst(x,y,t,ts,['#ffd166','#ff8a3a','#fff'],14,120*sz,.7,3)}
