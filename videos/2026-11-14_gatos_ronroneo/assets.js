// ===== ¿Por qué ronronean los gatos? El llanto escondido — recursos (ámbar sobre azul noche) =====
CAP.acc='#ffb347';
const PINK='#ffa23e',CY='#5ad1ff',YEL='#fff06a',INK='#06101a',P0='#07131f',P1='#102a3d',VIO='#6f8cff',GRN='#8cf56a',GLD='#ffc83d',SKIN='#ffcfae',ROSE='#ff5c7a';
const TX=(s,x,y,sz,col,t,t0,o={})=>mtext(s,x,y,sz,col,t,t0,Object.assign({stroke:'rgba(10,3,24,.85)',sw:Math.max(3.5,sz*.2)},o));
function nglow(col,lw,blur=12){ctx.strokeStyle=col;ctx.lineWidth=lw;ctx.shadowColor=col;ctx.shadowBlur=blur;ctx.lineJoin='round';ctx.lineCap='round'}
// rellena y dibuja el borde de neón (el path ya está construido)
function fillRim(col,rim,lw=2,blur=10){ctx.save();if(rim){nglow(rim,lw,blur);ctx.stroke()}ctx.restore();ctx.fillStyle=col;ctx.fill()}
function heart(x,y,s,col,o={}){ctx.save();if(o.glow!==false)glow(x,y,s*1.5,rgba(col,.45));poly(SH.heart(x,y,s,36),col,o.st||'rgba(255,255,255,.7)',o.lw||1.4);ctx.restore()}
function crown(x,y,s,rot=0){tr(x,y,s,rot,()=>{poly([[-20,0],[-23,-23],[-11,-11],[0,-28],[11,-11],[23,-23],[20,0]],GLD,'#fff3b0',1.6);ctx.fillStyle='#e0a010';ctx.fillRect(-20,-4,40,4);circ(0,-9,3,PINK);circ(-12,-6,2.2,CY);circ(12,-6,2.2,CY);glow(0,-12,26,'rgba(255,220,90,.45)')})}
// ---------- cara de gato (frontal) ----------
function catHead(x,y,s,o={}){ctx.save();ctx.translate(x,y);if(o.rot)ctx.rotate(o.rot);ctx.scale(s,s);
  const col=o.col||INK,rim=o.rim===undefined?PINK:o.rim,eye=o.eye||GRN,bl=o.blink||0,lk=o.look||0,sq=o.squint||0;
  if(o.halo)glow(0,0,78,rgba(rim||PINK,.4));
  ctx.beginPath();ctx.moveTo(-34,-24);ctx.lineTo(-40,-64);ctx.lineTo(-12,-40);ctx.quadraticCurveTo(0,-43,12,-40);ctx.lineTo(40,-64);ctx.lineTo(34,-24);
  ctx.bezierCurveTo(52,-8,50,30,26,40);ctx.quadraticCurveTo(0,50,-26,40);ctx.bezierCurveTo(-50,30,-52,-8,-34,-24);ctx.closePath();fillRim(col,rim,2.4/1,12);
  poly([[-33,-52],[-33,-35],[-19,-42]],rgba(rim||PINK,.55));poly([[33,-52],[33,-35],[19,-42]],rgba(rim||PINK,.55));
  [-1,1].forEach(sx=>{const ex=sx*17+lk*3,ey=-4;glow(ex,ey,24,rgba(eye,.55));
    if(bl>.9){line(ex-9,ey,ex+9,ey,eye,2.4);return}
    ctx.fillStyle=eye;ctx.beginPath();ctx.ellipse(ex,ey,10.5*(o.eyeS||1),Math.max(.8,9.5*(o.eyeS||1)*(1-bl)*(1-sq*.55)),0,0,TAU);ctx.fill();
    ctx.fillStyle='#07140a';ctx.beginPath();ctx.ellipse(ex+lk*2,ey,2.8,Math.max(.6,8.5*(1-bl)*(1-sq*.55)),0,0,TAU);ctx.fill();
    if(bl<.5)circ(ex-3.5,ey-3.5,2,'#fff')});
  poly([[-4.5,12],[4.5,12],[0,18]],PINK);ctx.strokeStyle='rgba(255,255,255,.75)';ctx.lineWidth=1.3;ctx.beginPath();ctx.moveTo(0,18);ctx.lineTo(0,21);ctx.quadraticCurveTo(-4,27,-9,24);ctx.moveTo(0,21);ctx.quadraticCurveTo(4,27,9,24);ctx.stroke();
  [[26,16,58,9],[26,20,60,20],[26,24,56,31]].forEach(w=>{line(w[0],w[1],w[2],w[3],'rgba(255,255,255,.55)',1.1);line(-w[0],w[1],-w[2],w[3],'rgba(255,255,255,.55)',1.1)});
  ctx.restore()}
// ---------- gato de lado (mira a la derecha) ----------
// o: pose 'walk'|'sit', ph (fase de patas), fa/ba (ángulos fijos de patas delanteras/traseras), tail (ondeo), eye, rim, col, stripes, flip, head (cabeceo), sq (entrecerrar), open
function catSide(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);if(o.rot)ctx.rotate(o.rot);
  const col=o.col||INK,rim=o.rim===undefined?PINK:o.rim,eye=o.eye||GRN,ph=o.ph||0,tl=o.tail===undefined?.5:o.tail,t=o.t||0,rw=o.rw||2.2;
  const stroke_=(w)=>{if(rim){ctx.save();nglow(rim,w+rw*2,10);ctx.stroke();ctx.restore()}ctx.strokeStyle=col;ctx.lineWidth=w;ctx.lineCap='round';ctx.stroke()};
  const eyeAt=(ex,ey)=>{const sq=o.sq||0;glow(ex,ey,12,rgba(eye,.6));ctx.fillStyle=eye;ctx.beginPath();ctx.ellipse(ex,ey,3.6,Math.max(.6,3.8*(1-sq*.8)),0,0,TAU);ctx.fill();ctx.fillStyle='#07140a';ctx.beginPath();ctx.ellipse(ex+.4,ey,1.1,Math.max(.5,3.5*(1-sq*.8)),0,0,TAU);ctx.fill()};
  if((o.pose||'walk')==='walk'){
    const fa=o.fa===undefined?null:o.fa,ba=o.ba===undefined?null:o.ba;
    const leg=(hx,hy,a)=>{ctx.beginPath();ctx.moveTo(hx,hy);const k=a<0?Math.sin(a)*21:Math.sin(a)*21;ctx.lineTo(hx+k,hy+Math.cos(a)*(21+(a>0?-3*Math.sin(a):0)));stroke_(5.5)};
    leg(-18,-24,ba===null?Math.sin(ph+Math.PI)*.75:ba);leg(22,-24,fa===null?Math.sin(ph)*.75:fa);
    ctx.beginPath();ctx.moveTo(-28,-36);ctx.bezierCurveTo(-46,-36-6*Math.sin(t*5),-52,-56,-44+8*Math.sin(t*4+tl*3)*tl,-74);stroke_(4.6);
    ctx.beginPath();ctx.ellipse(0,-34,30,14.5,0,0,TAU);fillRim(col,rim,rw,10);
    if(o.stripes){ctx.save();ctx.beginPath();ctx.ellipse(0,-34,30,14.5,0,0,TAU);ctx.clip();for(let k=-3;k<=3;k++){line(k*8-4,-52,k*8+3,-16,rgba(rim||PINK,.75),2.2)}ctx.restore()}
    leg(-12,-24,ba===null?Math.sin(ph)*.75:-ba*.8);leg(14,-24,fa===null?Math.sin(ph+Math.PI)*.75:-fa*.8);
    const hd=o.head||0;ctx.save();ctx.translate(33,-42);ctx.rotate(hd);
    ctx.beginPath();ctx.moveTo(-9,-8);ctx.lineTo(-9,-23);ctx.lineTo(0,-12);ctx.lineTo(7,-24);ctx.lineTo(10,-8);ctx.closePath();fillRim(col,rim,rw*.8,8);
    ctx.beginPath();ctx.ellipse(0,0,13,11.5,0,0,TAU);fillRim(col,rim,rw,10);
    ctx.beginPath();ctx.ellipse(11,3,6.5,5,0,0,TAU);ctx.fillStyle=col;ctx.fill();circ(16,1,1.8,PINK);eyeAt(6,-3);
    if(o.open){ctx.fillStyle='#ff3a7a';ctx.beginPath();ctx.ellipse(13,7,4,3*o.open,0,0,TAU);ctx.fill()}
    ctx.restore()}
  else{ // sentado
    ctx.beginPath();ctx.moveTo(-18,-4);ctx.bezierCurveTo(-42,6,-14,10,18,-1);ctx.bezierCurveTo(30,-4+Math.sin(t*4+tl*4)*5*tl,34,-14,26,-22);stroke_(4.6);
    ctx.beginPath();ctx.ellipse(-4,-14,20,14,0,0,TAU);fillRim(col,rim,rw,10);
    ctx.beginPath();ctx.ellipse(7,-36,13,24,.12,0,TAU);fillRim(col,rim,rw,10);
    ctx.beginPath();ctx.moveTo(13,-24);ctx.lineTo(13,0);stroke_(5.5);
    if(o.stripes){ctx.save();ctx.beginPath();ctx.ellipse(-4,-14,20,14,0,0,TAU);ctx.clip();for(let k=-3;k<=3;k++)line(k*7-3,-30,k*7+3,2,rgba(rim||PINK,.7),2);ctx.restore()}
    const hd=o.head||0;ctx.save();ctx.translate(10,-66);ctx.rotate(hd);
    ctx.beginPath();ctx.moveTo(-10,-8);ctx.lineTo(-10,-24);ctx.lineTo(0,-13);ctx.lineTo(8,-25);ctx.lineTo(11,-8);ctx.closePath();fillRim(col,rim,rw*.8,8);
    ctx.beginPath();ctx.ellipse(0,0,14,12.5,0,0,TAU);fillRim(col,rim,rw,10);
    ctx.beginPath();ctx.ellipse(12,3,6.5,5,0,0,TAU);ctx.fillStyle=col;ctx.fill();circ(17,1,1.8,PINK);eyeAt(6,-3);
    if(o.open){ctx.fillStyle='#ff3a7a';ctx.beginPath();ctx.ellipse(14,8,4.2,3.4*o.open,0,0,TAU);ctx.fill()}
    ctx.restore()}
  ctx.restore()}
function mouse(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);const ph=o.ph||0,c=o.col||'#d9d2f0';
  ctx.strokeStyle=c;ctx.lineWidth=1.6;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-10,-5);ctx.quadraticCurveTo(-20,-2+Math.sin(ph)*3,-24,-9+Math.sin(ph*.7)*3);ctx.stroke();
  [[-4,Math.sin(ph)],[5,Math.sin(ph+3)]].forEach(f=>line(f[0],-3,f[0]+f[1]*3,0,c,2));
  ctx.save();nglow(CY,3,6);ctx.beginPath();ctx.ellipse(0,-6,11,6.5,0,0,TAU);ctx.stroke();ctx.restore();
  ctx.fillStyle=c;ctx.beginPath();ctx.ellipse(0,-6,11,6.5,0,0,TAU);ctx.fill();poly([[8,-10],[17,-5],[8,-1]],c);circ(17,-5,1.2,'#ff4fa3');circ(10,-8,1.1,'#222');circ(5,-12,3.4,'#ffb6d5');
  ctx.restore()}
// ---------- bebé (cara plana) ----------
function babyFace(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s,s);const gr=o.grow||1;
  circ(0,0,58,SKIN,o.rim||'#ffe2cc',2.4);ctx.strokeStyle='#8a4a2a';ctx.lineWidth=2.4;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-8,-58);ctx.quadraticCurveTo(-14,-72,0,-72);ctx.quadraticCurveTo(10,-72,6,-64);ctx.stroke();
  circ(-58,6,9,'#ffb894');circ(58,6,9,'#ffb894');
  [-1,1].forEach(sx=>{const ex=sx*21,ey=6;ctx.fillStyle='#2a1230';ctx.beginPath();ctx.ellipse(ex,ey,8*gr,10.5*gr,0,0,TAU);ctx.fill();circ(ex-2.5,ey-3.5,3*gr,'#fff');circ(ex+2.5,ey+3,1.4*gr,'#fff');circ(sx*33,22,9,'rgba(255,90,140,.45)')});
  circ(0,22,2.4,'#e58a6a');ctx.strokeStyle='#b0463a';ctx.lineWidth=2.2;ctx.beginPath();if(o.cry){ctx.fillStyle='#7a1a2a';ctx.beginPath();ctx.ellipse(0,38,11,8+3*Math.sin((o.t||0)*14),0,0,TAU);ctx.fill();[-1,1].forEach(sx=>{ctx.fillStyle='#7fd4ff';for(let k=0;k<3;k++){const q=((o.t||0)*1.6+k/3)%1;ctx.globalAlpha=1-q;ctx.beginPath();ctx.ellipse(sx*(24+q*14),16+q*40,3,5,0,0,TAU);ctx.fill()}ctx.globalAlpha=1})}else{ctx.arc(0,30,8,.25,Math.PI-.25);ctx.stroke()}
  ctx.restore()}
// ---------- personas (figura simple) ----------
// o: arm (ángulo brazo), arm2, bow (inclinación), shrug (0..1), flip, shirt, hair, smile, ear, hold
function person(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);const sh=o.shirt||CY,hr=o.hair||'#3b1d5a',bow=o.bow||0,shr=o.shrug||0;
  ctx.fillStyle='#22123a';rr(-11,-46,9,46,4);ctx.fill();rr(2,-46,9,46,4);ctx.fill();
  ctx.save();ctx.translate(0,-46);ctx.rotate(bow);
  ctx.beginPath();ctx.moveTo(-15,0);ctx.lineTo(-13,-46+(-shr*6));ctx.quadraticCurveTo(0,-54-shr*6,13,-46-shr*6);ctx.lineTo(15,0);ctx.closePath();fillRim(sh,'rgba(255,255,255,.6)',1.2,6);
  const a=o.arm===undefined?.9:o.arm;ctx.strokeStyle=sh;ctx.lineWidth=8;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(2,-42-shr*5);const ex_=2+Math.cos(a)*18,ey=-42-shr*5+Math.sin(a)*18;ctx.lineTo(ex_,ey);const b=o.bend===undefined?.5:o.bend;ctx.lineTo(ex_+Math.cos(a+b)*16,ey+Math.sin(a+b)*16);ctx.stroke();
  circ(ex_+Math.cos(a+b)*16,ey+Math.sin(a+b)*16,4.4,SKIN);
  ctx.translate(0,-52-shr*5);circ(0,0,14,SKIN,'rgba(255,255,255,.55)',1.2);
  ctx.fillStyle=hr;ctx.beginPath();ctx.arc(-1,-2,14.5,Math.PI*1.02,Math.PI*1.95);ctx.lineTo(-1,-3);ctx.closePath();ctx.fill();circ(-6,2,3.2,'#f0a888');
  circ(7,-1,1.7,'#2a1230');if(o.smile){ctx.strokeStyle='#b0463a';ctx.lineWidth=1.6;ctx.beginPath();ctx.arc(7,4,4.5,.2,Math.PI-.5);ctx.stroke()}
  ctx.restore();ctx.restore()}
// ---------- varios ----------
function pawPrint(x,y,s,col,rot=0){tr(x,y,s,rot,()=>{ctx.fillStyle=col;ctx.beginPath();ctx.ellipse(0,6,13,10,0,0,TAU);ctx.fill();[[-14,-6,5,6.5,-.3],[-5,-14,5,7,-.1],[5,-14,5,7,.1],[14,-6,5,6.5,.3]].forEach(q=>{ctx.beginPath();ctx.ellipse(q[0],q[1],q[2],q[3],q[4],0,TAU);ctx.fill()})})}
function bowl(x,y,s,fill,t=0){tr(x,y,s,0,()=>{ctx.fillStyle='rgba(0,0,0,.35)';ctx.beginPath();ctx.ellipse(0,2,28,5,0,0,TAU);ctx.fill();
  if(fill>0){ctx.fillStyle='#e58a4a';for(let i=0;i<14;i++){const px=-18+(i%7)*6+(Math.floor(i/7)%2)*3,py=-14-fill*8*(1-Math.abs(px)/22)-Math.floor(i/7)*3;if(fill*14>i)circ(px,py+4,3.2,i%2?'#e58a4a':'#c96a30')}}
  ctx.beginPath();ctx.moveTo(-26,-14);ctx.lineTo(26,-14);ctx.quadraticCurveTo(24,6,0,6);ctx.quadraticCurveTo(-24,6,-26,-14);ctx.closePath();fillRim(PINK,'#ffd0e8',1.6,8);ctx.fillStyle='rgba(255,255,255,.25)';rr(-20,-12,6,12,3);ctx.fill();
  ctx.fillStyle=YEL;rr(-26,-17,52,5,2.5);ctx.fill()})}
function waveArcs(x,y,t,ts,col,n=3,gap=.12,R0=60,dir=0,spread=.9,lw=3){for(let k=0;k<n;k++){const u=(t-ts-k*gap)/.55;if(u<0||u>1)continue;ctx.save();ctx.globalAlpha=1-u;ctx.strokeStyle=col;ctx.lineWidth=lw*(1-u*.5);ctx.shadowColor=col;ctx.shadowBlur=8;ctx.beginPath();ctx.arc(x,y,R0*eo(u)+8,dir-spread,dir+spread);ctx.stroke();ctx.restore()}}
function floatHearts(x,y,t,ts,n=10,spd=90,life=1.2,col=PINK,sz=9,spread=1){const u=t-ts;if(u<0||u>life)return;for(let i=0;i<n;i++){const a=-Math.PI/2+(R(i*3+ts)-.5)*2.2*spread,v=spd*(.5+R(i+ts*2)*.8),d=u;heart(x+Math.cos(a)*v*d,y+Math.sin(a)*v*d-20*d,sz*(.6+R(i*5)*.7)*(1-u/life*.4),i%3===0?YEL:(i%3===1?col:'#fff'),{glow:false,lw:.8});}}
// ---------- cerebro ----------
const BRN=[[-70,5],[-72,-15],[-60,-38],[-38,-54],[-10,-60],[22,-58],[50,-46],[68,-24],[72,0],[64,20],[50,30],[38,34],[30,50],[16,54],[8,40],[-14,36],[-36,36],[-58,30],[-68,20]];
function brainPath(){const P=BRN,n=P.length;ctx.beginPath();ctx.moveTo((P[0][0]+P[n-1][0])/2,(P[0][1]+P[n-1][1])/2);for(let i=0;i<n;i++){const a=P[i],b=P[(i+1)%n];ctx.quadraticCurveTo(a[0],a[1],(a[0]+b[0])/2,(a[1]+b[1])/2)}ctx.closePath()}
function brain(x,y,s,t,lit,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s,s);const rim=o.rim||PINK;
  glow(0,0,120,rgba(rim,.18+.4*lit));brainPath();ctx.save();nglow(rim,3,14+16*lit);ctx.stroke();ctx.restore();ctx.fillStyle=mixc('#2a0f46','#6a1c78',lit*.8);ctx.fill();
  ctx.save();brainPath();ctx.clip();const folds=[[-40,-30],[-10,-42],[24,-34],[-52,-6],[-18,-12],[16,-8],[48,-14],[-34,18],[0,10],[34,16],[-10,32]];
  folds.forEach(([fx,fy],i)=>{ctx.beginPath();for(let k=0;k<=8;k++){const px=fx-22+k*5.5,py=fy+Math.sin(k*1.3+i*2)*5+Math.sin(k*.6+i)*3;k?ctx.lineTo(px,py):ctx.moveTo(px,py)}ctx.save();nglow(CY,1.8,6+8*lit);ctx.globalAlpha=.45+.55*lit;ctx.stroke();ctx.restore()});
  if(lit>0)for(let i=0;i<9;i++){const q=(t*1.4+R(i))%1,px=lerp(-60,60,R(i*3)),py=lerp(-45,35,R(i*7));ctx.globalAlpha=lit*(1-q);circ(px+q*14,py-q*8,1.6+q*3,YEL)}
  ctx.restore();ctx.restore()}
// ---------- esqueletos (tumba) ----------
function humSkel(x,y,s,rv,t=0){tr(x,y,s,0,()=>{const c='#efe6ff';ctx.save();ctx.beginPath();ctx.rect(-80,-40,160*rv,80);ctx.clip();
  ctx.save();nglow(CY,3.6,10);ctx.beginPath();ctx.arc(-62,0,11,0,TAU);ctx.moveTo(-50,0);ctx.lineTo(60,0);ctx.stroke();ctx.restore();
  circ(-62,0,11,c);circ(-65,-2,2.6,'#2a1230');circ(-59,-2,2.6,'#2a1230');line(-67,6,-57,6,'#2a1230',1.4);
  ctx.strokeStyle=c;ctx.lineWidth=2.6;ctx.lineCap='round';line(-50,0,60,0,c,2.8);
  for(let k=0;k<6;k++){ctx.beginPath();ctx.ellipse(-38+k*6,0,2.2,10,0,0,TAU);ctx.lineWidth=1.8;ctx.stroke()}
  line(-34,0,-14,-12,c,2.4);line(-14,-12,6,-8,c,2.4);line(-34,0,-14,13,c,2.4);line(-14,13,6,9,c,2.4);
  ctx.beginPath();ctx.ellipse(18,0,5,10,0,0,TAU);ctx.stroke();line(34,0,50,-9,c,2.8);line(50,-9,72,-6,c,2.8);line(34,0,50,9,c,2.8);line(50,9,72,6,c,2.8);ctx.restore()})}
function catSkel(x,y,s,rv,t=0){tr(x,y,s,0,()=>{const c='#ffe9f4';ctx.save();ctx.beginPath();ctx.rect(-50,-40,100*rv,80);ctx.clip();
  ctx.save();nglow(PINK,3.2,10);ctx.beginPath();ctx.moveTo(-26,0);ctx.lineTo(38,0);ctx.stroke();ctx.restore();
  ctx.strokeStyle=c;ctx.lineWidth=2.2;ctx.lineCap='round';line(-26,0,38,0,c,2.4);for(let k=0;k<5;k++){ctx.beginPath();ctx.ellipse(-12+k*5,0,1.8,7,0,0,TAU);ctx.lineWidth=1.5;ctx.stroke()}
  circ(-34,0,8,c);poly([[-40,-6],[-42,-17],[-35,-9]],c);poly([[-30,-8],[-27,-17],[-25,-6]],c);circ(-37,-1,2,'#2a1230');circ(-31,-1,2,'#2a1230');
  line(-6,0,-4,10,c,2);line(26,0,28,10,c,2);ctx.beginPath();ctx.moveTo(38,0);ctx.bezierCurveTo(52,-2,56,-14,52,-22);ctx.lineWidth=2.4;ctx.stroke();ctx.restore()})}
// ---------- Bastet (perfil, mira a la derecha; centro de la cabeza en 0,0) ----------
function bastet(x,y,s,t=0,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s,s);
  const g=ctx.createLinearGradient(0,-50,0,300);g.addColorStop(0,'#fff0a8');g.addColorStop(.35,'#ffc83d');g.addColorStop(1,'#a8661a');
  glow(0,60,200,'rgba(255,200,70,.28)');
  const gold=()=>{ctx.fillStyle=g;ctx.fill();ctx.strokeStyle='#fff3b0';ctx.lineWidth=1.6;ctx.stroke()};
  ctx.beginPath();ctx.moveTo(-22,34);ctx.quadraticCurveTo(-14,28,-8,18);ctx.lineTo(10,18);ctx.quadraticCurveTo(14,28,24,34);ctx.lineTo(18,92);ctx.quadraticCurveTo(24,150,26,210);ctx.lineTo(30,306);ctx.lineTo(-32,306);ctx.lineTo(-24,210);ctx.quadraticCurveTo(-22,140,-18,92);ctx.closePath();gold();
  ctx.beginPath();ctx.moveTo(-26,30);ctx.quadraticCurveTo(0,64,30,30);ctx.lineTo(24,44);ctx.quadraticCurveTo(0,80,-20,44);ctx.closePath();ctx.fillStyle=CY;ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=1.2;ctx.stroke();
  for(let k=0;k<5;k++)line(-16+k*8,44+Math.abs(k-2)*2,-16+k*8,60-Math.abs(k-2)*3,PINK,2);
  ctx.beginPath();ctx.moveTo(-4,-12);ctx.lineTo(-16,-52);ctx.lineTo(8,-18);ctx.closePath();gold();
  ctx.beginPath();ctx.moveTo(4,-14);ctx.lineTo(10,-50);ctx.lineTo(20,-8);ctx.closePath();gold();
  ctx.beginPath();ctx.moveTo(-18,-4);ctx.quadraticCurveTo(-14,-18,2,-16);ctx.quadraticCurveTo(18,-14,24,-6);ctx.lineTo(34,2);ctx.quadraticCurveTo(36,10,28,14);ctx.lineTo(16,20);ctx.quadraticCurveTo(-4,24,-12,16);ctx.quadraticCurveTo(-20,8,-18,-4);ctx.closePath();gold();
  const pulse=o.eye===undefined?1:o.eye;glow(14,-2,22*pulse+8,'rgba(62,242,230,.8)');ctx.fillStyle='#fff';ctx.beginPath();ctx.moveTo(6,-2);ctx.quadraticCurveTo(13,-9,22,-2);ctx.quadraticCurveTo(13,3,6,-2);ctx.fill();circ(14,-2.5,2.6,CY);circ(14,-2.5,1.1,'#0b0616');
  circ(33,4,2.2,PINK);
  ctx.strokeStyle='#8a4a10';ctx.lineWidth=2.4;ctx.beginPath();ctx.arc(46,120,10,0,TAU);ctx.moveTo(46,130);ctx.lineTo(46,176);ctx.moveTo(34,142);ctx.lineTo(58,142);ctx.stroke();ctx.strokeStyle='#ffe58a';ctx.lineWidth=1.2;ctx.stroke();
  line(18,100,40,120,'#ffd34a',6);
  ctx.restore()}
// ---------- glifos ----------
function glyph(k,x,y,s,col){tr(x,y,s,0,()=>{ctx.strokeStyle=col;ctx.fillStyle=col;ctx.lineWidth=2.6;ctx.lineCap='round';ctx.lineJoin='round';
  if(k===0){ctx.beginPath();ctx.ellipse(-2,-6,9,13,.1,0,TAU);ctx.stroke();circ(6,-23,5.5,col);poly([[3,-27],[3,-35],[7,-28]],col);poly([[7,-28],[11,-34],[11,-25]],col);ctx.beginPath();ctx.moveTo(-10,0);ctx.quadraticCurveTo(-26,8,-8,8);ctx.stroke();line(2,7,2,16,col,3)}
  else if(k===1){ctx.beginPath();ctx.moveTo(-16,0);ctx.quadraticCurveTo(0,-14,16,0);ctx.quadraticCurveTo(0,12,-16,0);ctx.stroke();circ(0,0,4,col);ctx.beginPath();ctx.moveTo(-3,6);ctx.quadraticCurveTo(-8,16,-4,22);ctx.stroke();line(10,6,16,14,col,2.6)}
  else if(k===2){ctx.beginPath();ctx.arc(0,-10,7,0,TAU);ctx.stroke();line(0,-3,0,18,col,2.6);line(-8,5,8,5,col,2.6)}
  else if(k===3){for(let q=0;q<3;q++){ctx.beginPath();ctx.moveTo(-14,-8+q*8);ctx.quadraticCurveTo(-7,-14+q*8,0,-8+q*8);ctx.quadraticCurveTo(7,-2+q*8,14,-8+q*8);ctx.stroke()}}
  else if(k===4){circ(0,0,10,null,col,2.6);circ(0,0,3.4,col)}
  else{poly([[-12,12],[0,-14],[12,12]],null,col,2.6);line(-6,4,6,4,col,2)}})}
// ---------- mapa del Mediterráneo oriental (esquemático) ----------
const MTUR=[[-30,90],[390,90],[390,215],[340,224],[300,214],[258,226],[214,218],[170,230],[122,214],[80,200],[40,212],[-30,192]];
const MSYR=[[340,224],[390,214],[390,430],[346,420],[336,382],[322,332],[318,292],[324,252]];
const MAFR=[[-30,412],[60,398],[140,394],[212,406],[282,404],[336,384],[346,422],[390,432],[390,560],[-30,560]];
const ISL=SH.poly([[232,268],[245,257],[262,261],[278,253],[300,244],[320,238],[306,252],[292,263],[280,277],[262,285],[246,283]],80);
function mapLand(a=1){withA(a,()=>{[MTUR,MSYR,MAFR].forEach(P=>poly(P,'#5a2fa0','#c9a6ff',1.8));
  for(let i=0;i<24;i++){const x=R(i)*380-10,y=R(i*3)*40+100;circ(x,y,1.4,'rgba(255,255,255,.12)')}
  txt('TURQUÍA',110,150,13,'rgba(255,255,255,.4)',{wt:'800'});txt('EGIPTO',150,480,13,'rgba(255,255,255,.4)',{wt:'800'});txt('SIRIA',360,330,11,'rgba(255,255,255,.4)',{wt:'800'})})}
function pinDrop(x,y,t,ts,col,lbl,tg){if(t<ts)return;const u=t-ts,d=(1-eb(u/.45))*-70;ctx.save();ctx.translate(x,y+d);glow(0,-14,24,rgba(col,.7));ctx.fillStyle=col;ctx.beginPath();ctx.arc(0,-16,9,Math.PI,0);ctx.lineTo(0,2);ctx.closePath();ctx.fill();circ(0,-16,3.4,'#fff');ctx.restore();shock(x,y,t,ts+.4,col,34,2.4,.6)}
// ---------- sacos, trigo, granero ----------
function wheatRow(y,t,col,h=26,x0=-120,x1=620,sp=11,ph=0){ctx.strokeStyle=col;ctx.lineWidth=1.6;ctx.lineCap='round';for(let x=x0;x<x1;x+=sp){const sw=Math.sin(t*1.6+x*.05+ph)*3;ctx.beginPath();ctx.moveTo(x,y);ctx.quadraticCurveTo(x+sw*.4,y-h*.5,x+sw,y-h);ctx.stroke();ctx.fillStyle=col;ctx.beginPath();ctx.ellipse(x+sw,y-h-3,2,4.5,sw*.1,0,TAU);ctx.fill()}}
function barn(x,y,s){tr(x,y,s,0,()=>{ctx.beginPath();ctx.moveTo(-56,0);ctx.lineTo(-56,-62);ctx.lineTo(0,-104);ctx.lineTo(56,-62);ctx.lineTo(56,0);ctx.closePath();fillRim('#4a1f6e','#ff4fa3',2,8);
  ctx.beginPath();ctx.moveTo(-18,0);ctx.lineTo(-18,-34);ctx.quadraticCurveTo(0,-48,18,-34);ctx.lineTo(18,0);ctx.closePath();ctx.fillStyle='#120a24';ctx.fill();line(-18,-34,18,0,'#ff4fa3',1.8);line(18,-34,-18,0,'#ff4fa3',1.8);
  circ(0,-70,8,'#120a24','#ffe14f',2)})}
function sack(x,y,s,rot,fill=1){tr(x,y,s,rot,()=>{ctx.beginPath();ctx.moveTo(-12,0);ctx.quadraticCurveTo(-17,-14,-9,-28);ctx.lineTo(-5,-34);ctx.lineTo(5,-34);ctx.lineTo(9,-28);ctx.quadraticCurveTo(17,-14,12,0);ctx.closePath();fillRim('#e8c07a','#ffe14f',1.4,6);line(-6,-30,6,-30,'#7a4a1a',2.2);ctx.fillStyle='rgba(120,70,20,.35)';ctx.fillRect(-9,-16,18,3)})}
