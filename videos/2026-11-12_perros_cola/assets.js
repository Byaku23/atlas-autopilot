// ===== Perros: ¿por qué mueven la cola? — recursos =====
CAP.acc='#5ce1c6';
const B0='#06161d',B1='#123a49',MINT='#5ce1c6',CORAL='#ff7a59',SUN='#ffd166',FUR='#e8a352',FUR2='#b86f2e',INK='#04101a',SIL='#05090d';
const WOLF=[[55,-38],[50,-33],[40,-31],[34,-26],[33,-14],[30,-10],[31,0],[25,0],[24,-12],[14,-14],[0,-15],[-16,-14],[-20,-11],[-18,0],[-25,0],[-28,-10],[-33,-18],[-36,-24],[-50,-10],[-46,-22],[-36,-30],[-30,-32],[-5,-33],[18,-36],[26,-42],[29,-48],[31,-58],[36,-50],[42,-46],[52,-41]];
const DOG =[[50,-36],[47,-30],[40,-28],[34,-24],[34,-14],[30,-11],[32,0],[25,0],[24,-11],[14,-14],[0,-15],[-14,-14],[-18,-11],[-16,0],[-24,0],[-27,-9],[-31,-17],[-33,-27],[-37,-53],[-45,-41],[-36,-31],[-30,-31],[-5,-31],[18,-33],[26,-41],[27,-46],[29,-55],[35,-49],[40,-46],[48,-40]];
function beastPts(m,ph=0,wag=0,t=0){const P=morph(WOLF,DOG,cl(m));const s=Math.sin(ph)*5,c=Math.sin(ph+Math.PI)*5;
  P[6][0]+=s;P[7][0]+=s;P[13][0]+=c;P[14][0]+=c;
  if(wag){const bx=(P[17][0]+P[20][0])/2,by=(P[17][1]+P[20][1])/2,a=wag*Math.sin(t*16);[18,19].forEach(i=>{const dx=P[i][0]-bx,dy=P[i][1]-by;P[i]=[bx+dx*Math.cos(a)-dy*Math.sin(a),by+dx*Math.sin(a)+dy*Math.cos(a)]})}
  return P}
// o: {ph, wag, t, col, rim, eye, flip, al, head(bajar cabeza)}
function beast(x,y,s,m,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);if(o.rot)ctx.rotate(o.rot);
  let P=beastPts(m,o.ph||0,o.wag||0,o.t||0);
  if(o.head){const hd=o.head;P=P.map((p,i)=>(i<=4||i>=24)?[p[0]+hd*2,p[1]+hd*10]:p)}
  ctx.beginPath();P.forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));ctx.closePath();ctx.fillStyle=o.col||SIL;ctx.fill();
  if(o.rim){ctx.save();ctx.clip();ctx.strokeStyle=o.rim;ctx.lineWidth=3/s+1;ctx.globalAlpha=.85;ctx.stroke();ctx.restore()}
  if(o.eye){const ex_=lerp(41,40,m)+(o.head||0)*2,ey=lerp(-42,-40,m)+(o.head||0)*10;glow(ex_,ey,7,o.eye,.9);circ(ex_,ey,1.6,'#fff')}
  ctx.restore()}
// humano agachado (de perfil, mira a la derecha). o.arm: ángulo del brazo; o.col; o.rim
// fondo de laboratorio: degradado + cuadrícula tenue + polvo
function lab(t,k=1){bg(B0,B1);ctx.save();ctx.strokeStyle='rgba(92,225,198,'+(.06*k)+')';ctx.lineWidth=1;
  for(let x=0;x<=360;x+=30){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,640);ctx.stroke()}
  for(let y=0;y<=640;y+=30){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(360,y);ctx.stroke()}ctx.restore();
  dust(t,34,'#9fe9da',5,8,1.3,.3*k)}
// perro visto de espaldas: la cola oscila alrededor de un sesgo (bias -1 izquierda … +1 derecha). (x,y)=suelo
// o: {t, bias, amp, spd, gauge(0..1), gcol, look, al, flip}
function tailAng(o){return (o.bias||0)*.85+(o.amp||0)*Math.sin((o.t||0)*(o.spd||15))}
function dogBack(x,y,s,o={}){const a=tailAng(o);ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);
  ctx.globalAlpha=o.al===undefined?1:o.al;
  if(o.gauge){const g=o.gauge,b=o.bias||0,r=66;ctx.save();ctx.translate(0,-26);ctx.lineCap='round';ctx.lineWidth=7;ctx.strokeStyle='rgba(255,255,255,'+(.13*g)+')';
    ctx.beginPath();ctx.arc(0,0,r,-Math.PI/2-1.4,-Math.PI/2+1.4);ctx.stroke();
    ctx.strokeStyle='rgba(255,255,255,'+(.4*g)+')';ctx.lineWidth=2;[-1.4,0,1.4].forEach(d=>{const aa=-Math.PI/2+d;ctx.beginPath();ctx.moveTo(Math.cos(aa)*(r-8),Math.sin(aa)*(r-8));ctx.lineTo(Math.cos(aa)*(r+8),Math.sin(aa)*(r+8));ctx.stroke()});
    if(Math.abs(b)>.02){const col=o.gcol||(b>0?MINT:CORAL);ctx.strokeStyle=rgba(col,g);ctx.lineWidth=9;ctx.shadowColor=col;ctx.shadowBlur=14;ctx.beginPath();ctx.arc(0,0,r,-Math.PI/2,-Math.PI/2+b*1.2,b<0);ctx.stroke()}
    ctx.restore()}
  ctx.fillStyle='rgba(0,0,0,.35)';ctx.beginPath();ctx.ellipse(0,2,40,7,0,0,TAU);ctx.fill();
  ctx.fillStyle=FUR2;[-17,17].forEach(d=>{rr(d-8,-22,16,24,7);ctx.fill()});
  ctx.fillStyle=FUR;ctx.beginPath();ctx.ellipse(0,-44,31,34,0,0,TAU);ctx.fill();
  ctx.fillStyle='rgba(255,255,255,.12)';ctx.beginPath();ctx.ellipse(-9,-58,10,18,.2,0,TAU);ctx.fill();
  const hx=(o.look||0)*7;ctx.fillStyle=FUR;ctx.beginPath();ctx.arc(hx,-88,22,0,TAU);ctx.fill();
  ctx.fillStyle=FUR2;[-1,1].forEach(d=>{ctx.beginPath();ctx.ellipse(hx+d*20,-90,8,17,d*-.35,0,TAU);ctx.fill()});
  const px=0,py=-26,L=48,tx=px+Math.sin(a)*L,ty=py-Math.cos(a)*L,cx_=px+Math.sin(a*.45)*L*.55,cy_=py-Math.cos(a*.45)*L*.62;
  ctx.lineCap='round';ctx.strokeStyle=FUR2;ctx.lineWidth=11;ctx.beginPath();ctx.moveTo(px,py);ctx.quadraticCurveTo(cx_,cy_,tx,ty);ctx.stroke();
  ctx.strokeStyle=FUR;ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(px,py);ctx.quadraticCurveTo(cx_,cy_,tx,ty);ctx.stroke();
  circ(tx,ty,4.5,'#f7e3c4');ctx.restore()}
// silueta de persona (cabeza y hombros). (x,y)=base
function person(x,y,s,col='#cfe9f2'){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.fillStyle=col;ctx.beginPath();ctx.arc(0,-52,14,0,TAU);ctx.fill();
  ctx.beginPath();ctx.ellipse(0,-12,30,32,0,Math.PI,0);ctx.lineTo(30,0);ctx.lineTo(-30,0);ctx.closePath();ctx.fill();ctx.restore()}
function heart(x,y,s,col=CORAL,al=1){withA(al,()=>tr(x,y,s,0,()=>poly(SH.heart(0,0,10,36),col)))}
function bowl(x,y,s){tr(x,y,s,0,()=>{ctx.fillStyle='#d8dde3';ctx.beginPath();ctx.ellipse(0,-14,34,9,0,0,TAU);ctx.fill();
  ctx.fillStyle='#8a5a2c';for(let i=0;i<14;i++){circ(-24+(i%7)*8+R(i)*3,-20-Math.floor(i/7)*5-R(i+4)*3,4,'#8a5a2c')}
  ctx.fillStyle='#9aa4ad';ctx.beginPath();ctx.moveTo(-34,-14);ctx.lineTo(-26,10);ctx.lineTo(26,10);ctx.lineTo(34,-14);ctx.closePath();ctx.fill()})}
function ballIcon(x,y,s,t){tr(x,y,s,t,()=>{circ(0,0,12,SUN);ctx.strokeStyle='rgba(120,70,0,.6)';ctx.lineWidth=2;ctx.beginPath();ctx.arc(0,0,12,0.6,2.5);ctx.stroke()})}
function pill(x,y,w,h,col,s,fg,sz,q=1){tr(x+w/2,y+h/2,q,0,()=>{ctx.fillStyle=col;rr(-w/2,-h/2,w,h,h/2);ctx.fill();txt(s,0,1,sz,fg,{wt:'900',f:DISP})})}
