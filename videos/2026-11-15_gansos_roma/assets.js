// ===== Los gansos que salvaron Roma — recursos =====
CAP.acc='#ffd27a';
const NAVY='#0a1230',NAVY2='#1c2b5e',MOON='#e9f1ff',RED='#d9402f',BRZ='#c9964a',GOLD='#ffd27a',TORCH='#ff9a3c',STONE='#4d5373',STONE2='#343a58',CREAM='#f6f0e0',INK='rgba(8,10,28,.80)';
const TX=(s,x,y,sz,col,t,t0,o={})=>mtext(s,x,y,sz,col,t,t0,Object.assign({stroke:INK,sw:Math.max(4,sz*.2)},o));
const TG=(s,x,y,sz,b,f,t,t0,o={})=>tag(s,x,y,sz,b,f,t,t0,o);
const GY=505;                       // suelo general
const PATH=[[40,500],[95,435],[133,368],[172,322],[208,303]];   // ladera de la roca
function pathAt(p){p=cl(p,0,1)*4;const i=Math.min(3,Math.floor(p)),f=p-i;return [lerp(PATH[i][0],PATH[i+1][0],f),lerp(PATH[i][1],PATH[i+1][1],f)]}
// ---------- elementos sueltos ----------
function flame(x,y,s,t){ctx.save();ctx.translate(x,y);ctx.scale(s,s);const w=Math.sin(t*12)*2;poly([[-7,0],[-4,-14+w],[0,-26+w*1.5],[4,-14-w],[7,0]],'#ff7a2a');poly([[-4,0],[0,-16+w],[4,0]],'#ffd070');ctx.restore()}
function torch(x,y,s,t,a=1){ctx.save();ctx.translate(x,y);ctx.scale(s,s);glow(0,-34,48+4*Math.sin(t*10),'rgba(255,150,50,.65)',a);line(0,0,0,-26,'#5a3a1c',4);flame(0,-24,1,t);ctx.restore()}
function moon(x,y,r,t){glow(x,y,r*3.4,'rgba(190,210,255,.45)');circ(x,y,r,MOON);ctx.globalAlpha=.14;circ(x-r*.3,y-r*.2,r*.22,'#7d8cb8');circ(x+r*.35,y+r*.3,r*.16,'#7d8cb8');circ(x+r*.1,y-r*.5,r*.12,'#7d8cb8');ctx.globalAlpha=1}
// ganso de perfil mirando a la derecha. (0,0)=pies. o: flip, ph, neck(0..1), beak(0..1), fl(0..1), rim, sleep, al
function goose(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);if(o.al!==undefined)ctx.globalAlpha*=o.al;
  const ph=o.ph||0,sl=o.sleep||0,ne=o.neck||0,bk=o.beak||0,fl=o.fl||0,c='#f7f7f2',sh='#cdd2de',a=Math.sin(ph)*5;
  line(-3,-14,-3+a,0,'#ff9a30',3.2);line(5,-14,5-a,0,'#ff9a30',3.2);line(-3+a,0,3+a,0,'#ff9a30',3);line(5-a,0,11-a,0,'#ff9a30',3);
  poly([[-20,-30],[-35,-37],[-22,-21]],c);
  ctx.fillStyle=c;ctx.beginPath();ctx.ellipse(0,-27,24,15,-.08,0,TAU);ctx.fill();
  ctx.save();ctx.translate(-4,-33);ctx.rotate(-fl*1.2);ctx.fillStyle=sh;ctx.beginPath();ctx.ellipse(-6,-fl*6,17+fl*9,8,-.2,0,TAU);ctx.fill();ctx.restore();
  const hx=sl?10:24+ne*2,hy=sl?-30:-50-ne*21;
  ctx.strokeStyle=c;ctx.lineWidth=7;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(15,-32);ctx.quadraticCurveTo(sl?22:26-ne*6,sl?-40:-38-ne*10,hx,hy);ctx.stroke();
  circ(hx,hy,7,c);const ob=bk*.5;
  poly([[hx+5,hy-1],[hx+17,hy-1.5-ob*6],[hx+5,hy+2-ob*2]],'#ff9a30');poly([[hx+5,hy+2],[hx+15,hy+3+ob*7],[hx+5,hy+4]],'#f07a18');
  if(sl)line(hx-1,hy-2,hx+3,hy-2,'#141420',1.6);else circ(hx+1,hy-2,1.6,'#141420');
  if(o.rim){ctx.strokeStyle=o.rim;ctx.lineWidth=1.4;ctx.globalAlpha*=.7;ctx.beginPath();ctx.ellipse(0,-27,24,15,-.08,-2.7,-1.0);ctx.stroke()}
  ctx.restore()}
// soldado romano de perfil mirando a la derecha. o: flip, ph, arm(ángulo lanza), shield, spear, sleep(0..1 se desploma), hero(capa+cresta), col, rim, al
function legion(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);if(o.al!==undefined)ctx.globalAlpha*=o.al;
  const ph=o.ph||0,a=Math.sin(ph)*8,col=o.col||'#2a1a28',sl=o.sleep||0;
  line(0,-30,a,-2,col,6);line(0,-30,-a,-2,col,6);
  ctx.save();ctx.translate(0,-30);ctx.rotate(sl*.28);ctx.translate(0,30);
  if(o.hero)poly([[-8,-70],[-28,-38],[-12,-34],[-6,-52]],'#a82820');
  poly([[-9,-30],[9,-30],[10,-72],[-10,-72]],RED);poly([[-9,-30],[9,-30],[9,-37],[-9,-37]],'#7a2018');
  ctx.save();ctx.translate(0,-80);ctx.rotate(sl*.55);circ(0,0,8,'#d8a880');
  ctx.fillStyle=BRZ;ctx.beginPath();ctx.arc(0,-1,9,Math.PI,0);ctx.fill();rr(-9,-2,18,3,1.5);ctx.fill();
  poly([[-4,-9],[4,-9],[3,-17],[-3,-17]],o.hero?'#ff3b2a':'#c33');ctx.restore();
  if(o.shield!==false){ctx.fillStyle=RED;rr(6,-76,15,36,5);ctx.fill();ctx.strokeStyle=BRZ;ctx.lineWidth=1.6;rr(6,-76,15,36,5);ctx.stroke();circ(13.5,-58,3.2,BRZ)}
  if(o.spear!==false){ctx.save();ctx.translate(2,-62);ctx.rotate(o.arm===undefined?-.5:o.arm);line(-8,0,36,0,'#6a4a2a',2.4);poly([[36,-2.6],[45,0],[36,2.6]],'#dfe5f0');ctx.restore()}
  ctx.restore();
  if(o.rim){ctx.strokeStyle=o.rim;ctx.lineWidth=1.2;ctx.globalAlpha*=.7;ctx.beginPath();ctx.moveTo(10,-72);ctx.lineTo(9,-34);ctx.stroke()}
  ctx.restore()}
// guerrero galo (silueta oscura, pelo largo, bigote). o: flip, ph, climb, rot, sword, torch, col, rim, al
function gaul(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);ctx.rotate(o.rot||0);if(o.al!==undefined)ctx.globalAlpha*=o.al;
  const ph=o.ph||0,a=Math.sin(ph)*8,c=o.col||'#181d3a',hair='#9a5a22';
  if(o.climb){const b=Math.sin(ph)*10;line(-2,-32,-8,-12+b*.5,c,6);line(2,-32,8,-12-b*.5,c,6);poly([[-9,-30],[9,-30],[8,-68],[-8,-68]],c);line(0,-64,-10,-88+b,c,5);line(0,-64,12,-88-b,c,5)}
  else{line(0,-30,a,-2,c,6);line(0,-30,-a,-2,c,6);poly([[-9,-30],[9,-30],[10,-70],[-10,-70]],c);
    line(4,-60,18,-72,c,5);if(o.sword)line(18,-72,24,-106,'#aeb7cc',2.4);
    ctx.fillStyle='#6a4a2a';ctx.beginPath();ctx.ellipse(-6,-52,8,16,0,0,TAU);ctx.fill();ctx.strokeStyle=BRZ;ctx.lineWidth=1.2;ctx.stroke()}
  circ(0,-78,8,'#c98c68');poly([[-8,-82],[-15,-58],[-5,-68]],hair);poly([[-8,-84],[8,-84],[7,-91],[-7,-91]],hair);line(3,-76,12,-74,hair,2.4);
  if(o.rim){ctx.strokeStyle=o.rim;ctx.lineWidth=1.2;ctx.globalAlpha*=.7;ctx.beginPath();ctx.moveTo(9,-70);ctx.lineTo(8,-34);ctx.stroke()}
  ctx.restore()}
function dogSleep(x,y,s,t,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);const c='#7a5a3a';
  ctx.fillStyle=c;ctx.beginPath();ctx.ellipse(0,-9,22,9,0,0,TAU);ctx.fill();ctx.beginPath();ctx.ellipse(20,-6,10,7,.2,0,TAU);ctx.fill();
  poly([[14,-12],[18,-22],[23,-12]],'#5a3f26');line(-20,-8,-32,-4,c,4);circ(26,-6,1.4,'#141420');ctx.restore();
  const k=(t*.8)%1;txt('z',x+24*s+10,y-24*s-k*22,10+k*6,'#cfe0ff',{a:1-k});txt('Z',x+24*s+22,y-30*s-((k+.5)%1)*22,12,'#cfe0ff',{a:1-((k+.5)%1)})}
function bowl(x,y,s,t){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.fillStyle='#8a5a38';ctx.beginPath();ctx.ellipse(0,-8,24,8,0,0,TAU);ctx.fill();ctx.beginPath();ctx.moveTo(-24,-8);ctx.quadraticCurveTo(0,10,24,-8);ctx.fill();circ(-3,-11,2.4,'#e8c77a');ctx.restore()}
// ---------- decorado ----------
function city(t,o={}){const f=o.fire===undefined?1:o.fire;glow(180,GY-30,300,'rgba(255,110,40,.4)',f);
  for(let i=0;i<12;i++){const x=-90+i*48+R(i)*10,w=30+R(i*2)*26,h=90+R(i*5)*150;ctx.fillStyle=i%2?'#241238':'#1a0e2c';ctx.fillRect(x,GY-h,w,h);
    ctx.fillStyle='rgba(255,170,70,.35)';for(let k=0;k<3;k++)ctx.fillRect(x+5+k*(w/3.2),GY-h+14,4,8);
    if(f>0&&R(i*7)>.15){const fx=x+w/2,fy=GY-h;glow(fx,fy,52+10*Math.sin(t*9+i),'rgba(255,130,40,.65)',f);flame(fx,fy+4,.9+R(i)*.6,t+i);glow(fx+8,fy-50-(t*20+i*30)%60,26,'rgba(60,40,60,.5)',f)}}
  ctx.fillStyle='#0d0820';ctx.fillRect(-300,GY,1100,300)}
function temple(x,y,s,t,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s,s);const L=o.light===undefined?.6:o.light,c=o.col||'#8a8fb0',d='#5a5f80';
  glow(0,-50,110,'rgba(255,190,110,.35)',L);
  ctx.fillStyle=d;ctx.fillRect(-62,-8,124,8);ctx.fillRect(-56,-14,112,6);
  for(let i=0;i<5;i++){const cx=-48+i*24;ctx.fillStyle=c;ctx.fillRect(cx-4,-66,8,52);ctx.fillStyle='rgba(255,255,255,.18)';ctx.fillRect(cx-4,-66,2.5,52)}
  ctx.fillStyle=d;ctx.fillRect(-60,-74,120,9);poly([[-64,-74],[0,-110],[64,-74]],c);poly([[-40,-78],[0,-100],[40,-78]],'#6a6f92');
  circ(0,-86,4.5,'#ffd27a');ctx.restore()}
// colina del Capitolio con empalizada y antorchas. (x,y)=centro de la cima
function capitol(x,y,t,o={}){ctx.save();ctx.translate(x,y);
  poly([[-230,300],[-150,90],[-90,14],[-62,0],[62,0],[90,14],[150,90],[230,300]],'#232846');
  poly([[-230,300],[-150,90],[-120,60],[-170,300]],'#2d3358');
  ctx.strokeStyle='rgba(120,130,175,.35)';ctx.lineWidth=1.4;for(let k=0;k<4;k++){ctx.beginPath();ctx.moveTo(-120+k*10,60+k*50);ctx.lineTo(120-k*10,60+k*50);ctx.stroke()}
  for(let px=-60;px<=60;px+=8)poly([[px-3,0],[px,-16],[px+3,0]],'#6a4a2c');
  temple(0,0,.42,t,{light:o.light===undefined?.9:o.light});
  torch(-72,2,.8,t,o.glow===undefined?1:o.glow);torch(72,2,.8,t+1,o.glow===undefined?1:o.glow);ctx.restore()}
// roca con la ladera (cima plana en y=300 para x>=215)
function cliff(){poly([[-500,640],[-500,500],[40,500],[95,435],[133,368],[172,322],[215,300],[900,300],[900,640]],STONE2);
  poly([[40,500],[95,435],[133,368],[172,322],[215,300],[230,330],[170,420],[110,520]],STONE);
  ctx.strokeStyle='rgba(10,12,34,.45)';ctx.lineWidth=1.6;for(let k=0;k<6;k++){ctx.beginPath();ctx.moveTo(60+k*20,520+k*8);ctx.lineTo(120+k*26,430+k*18);ctx.stroke()}
  ctx.fillStyle='rgba(255,255,255,.07)';ctx.fillRect(215,300,700,3)}
// balanza. (x,y)=base; tilt (rad, + = baja la derecha); l/r dibujan el contenido de cada plato
function balance(x,y,s,tilt,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s,s);
  poly([[-26,0],[26,0],[8,-12],[-8,-12]],'#6a5030');line(0,-12,0,-112,'#8a6a3c',7);circ(0,-114,7,BRZ);
  const bx=Math.cos(tilt)*92,by=Math.sin(tilt)*92;ctx.save();ctx.translate(0,-114);line(-bx,-by,bx,by,BRZ,6);ctx.restore();
  const pans=[[-bx,-114-by],[bx,-114+by]];
  pans.forEach((p,i)=>{const px=p[0],py=p[1]+58;ctx.strokeStyle='#b89a5a';ctx.lineWidth=1.3;ctx.beginPath();ctx.moveTo(px,p[1]);ctx.lineTo(px-30,py);ctx.moveTo(px,p[1]);ctx.lineTo(px+30,py);ctx.stroke();
    ctx.fillStyle=BRZ;ctx.beginPath();ctx.ellipse(px,py,34,8,0,0,TAU);ctx.fill();ctx.fillStyle='#8a6a3c';ctx.beginPath();ctx.ellipse(px,py+3,34,6,0,0,Math.PI);ctx.fill();
    const f=i?o.r:o.l;if(f){ctx.save();ctx.translate(px,py-4);f();ctx.restore()}});
  ctx.restore();return [x+pans[0][0]*s,y+(pans[0][1]+58)*s,x+pans[1][0]*s,y+(pans[1][1]+58)*s]}
function goldBar(x,y,s){ctx.save();ctx.translate(x,y);ctx.scale(s,s);poly([[-14,0],[14,0],[11,-9],[-11,-9]],'#ffc83a');poly([[-11,-9],[11,-9],[9,-12],[-9,-12]],'#fff0a0');ctx.restore()}
function weight(x,y,s,col){ctx.save();ctx.translate(x,y);ctx.scale(s,s);poly([[-12,0],[12,0],[8,-18],[-8,-18]],col||'#6a7088');ctx.strokeStyle=col||'#6a7088';ctx.lineWidth=2.4;ctx.beginPath();ctx.arc(0,-22,5,0,TAU);ctx.stroke();ctx.restore()}
function sword(x,y,s,rot){ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.scale(s,s);poly([[-4,0],[4,0],[2,-46],[-2,-46],[0,-52]],'#c9d2e6');rr(-11,0,22,4,2);ctx.fillStyle=BRZ;ctx.fill();rr(-2.5,4,5,14,2);ctx.fillStyle='#5a3a1c';ctx.fill();circ(0,20,3.4,BRZ);ctx.restore()}
function papiro(x,y,w,h,t,o={}){ctx.save();ctx.translate(x,y);ctx.fillStyle='#e9d8a8';rr(-w/2,-h/2,w,h,6);ctx.fill();ctx.fillStyle='#d6c08a';ctx.beginPath();ctx.ellipse(0,-h/2,w/2,8,0,0,TAU);ctx.fill();ctx.beginPath();ctx.ellipse(0,h/2,w/2,8,0,0,TAU);ctx.fill();
  ctx.fillStyle='#b89c5a';ctx.beginPath();ctx.ellipse(0,-h/2,w/2-6,5,0,0,TAU);ctx.fill();ctx.beginPath();ctx.ellipse(0,h/2,w/2-6,5,0,0,TAU);ctx.fill();
  for(let i=0;i<8;i++){const yy=-h/2+22+i*(h-44)/7,ww=(w-34)*(.62+.38*R(i*3));ctx.strokeStyle='rgba(70,45,20,.55)';ctx.lineWidth=2.4;ctx.beginPath();for(let k=0;k<ww;k+=6){ctx.moveTo(-w/2+17+k,yy);ctx.lineTo(-w/2+21+k,yy+(R(i*40+k)>.5?-2:2))}ctx.stroke();
    if(o.strike&&o.strike.includes(i)){ctx.strokeStyle='rgba(200,40,30,.85)';ctx.lineWidth=2.4;ctx.beginPath();ctx.moveTo(-w/2+14,yy+1);ctx.lineTo(-w/2+17+ww,yy+1);ctx.stroke()}}
  ctx.restore()}
function nightHill(t){bg('#070c24','#1c2b5e');stars(t,60,4,.9)}
