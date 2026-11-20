// ===== México y su mitad perdida — recursos. Mapa satélite NASA + Natural Earth. Verde = México, azul = EE. UU., naranja = territorio cedido, morado = Texas =====
const TM=tema({acc:'#ffd166',ink:'rgba(4,10,28,.92)',sw:4,bg0:'#050b1c',bg1:'#0f1d3d'});
const TX=TM.TX,TG=TM.TAG;
const MX='#2ecc71',US='#4da3ff',CES='#ff9f1c',TXC='#c58bff',GOLD='#ffd166',INK='#06101f',RED='#ff4d5e',CRM='#f3e9d2';
const CES_S=['California','Nevada','Utah','Arizona','New Mexico'];
const TEX=mapaCargar('../../catalogo/mapa/blue_marble.jpg',[-182.76,172.6,90,-62.97]);
const nb=(a,b,t)=>cl((t-a)/(b-a));
function PF(c,names,col,a,o={}){ctx.save();ctx.lineJoin='round';const step=c.s>40?1:2;
  for(const p of MAPA_PAISES){if(names&&!names.includes(p.n))continue;const cc=typeof col==='function'?col(p):col;_mapaPath(c,p.g,step);
    if(a>0&&cc){ctx.globalAlpha=a;ctx.fillStyle=cc;ctx.fill()}
    ctx.globalAlpha=o.ba===undefined?.8:o.ba;ctx.strokeStyle=o.b||'rgba(255,255,255,.8)';ctx.lineWidth=o.lw||1;ctx.stroke()}
  ctx.restore()}
function base(c,o={}){mapaTextura(TEX,c,{dim:o.dim===undefined?.34:o.dim,sat:.9});PF(c,null,null,0,{ba:o.bb===undefined?.3:o.bb,lw:.8});SF(c,null,null,0,{ba:o.bb===undefined?.25:o.bb,lw:.7})}
// spline Catmull-Rom en coordenadas geográficas
function sm(P,n=8){const o=[];for(let i=0;i<P.length-1;i++){const p0=P[Math.max(0,i-1)],p1=P[i],p2=P[i+1],p3=P[Math.min(P.length-1,i+2)];
  for(let k=0;k<n;k++){const t=k/n,t2=t*t,t3=t2*t;o.push([0,1].map(j=>.5*(2*p1[j]+(-p0[j]+p2[j])*t+(2*p0[j]-5*p1[j]+4*p2[j]-p3[j])*t2+(-p0[j]+3*p1[j]-3*p2[j]+p3[j])*t3)))}}
  o.push(P[P.length-1]);return o}
const _L=new WeakMap();
function _cum(G){let L=_L.get(G);if(!L){L=[0];for(let i=1;i<G.length;i++)L.push(L[i-1]+Math.hypot((G[i][0]-G[i-1][0])*MAPA_K,G[i][1]-G[i-1][1]));_L.set(G,L)}return L}
// ruta con progreso p (0..1): devuelve [x,y,ang] de la punta
function ruta(c,G,p,col,lw=3.2,o={}){p=cl(p);if(p<=0)return null;const L=_cum(G),d=p*L[L.length-1];
  const pts=[mapaPunto(c,G[0][0],G[0][1])];let i=1;
  while(i<G.length&&L[i]<=d){pts.push(mapaPunto(c,G[i][0],G[i][1]));i++}
  let head=pts[pts.length-1];if(i<G.length){const f=(d-L[i-1])/(L[i]-L[i-1]);head=mapaPunto(c,lerp(G[i-1][0],G[i][0],f),lerp(G[i-1][1],G[i][1],f));pts.push(head)}
  const b=pts[Math.max(0,pts.length-4)],ang=Math.atan2(head[1]-b[1],head[0]-b[0]);
  ctx.save();ctx.lineCap='round';ctx.lineJoin='round';ctx.beginPath();pts.forEach((q,j)=>j?ctx.lineTo(q[0],q[1]):ctx.moveTo(q[0],q[1]));
  ctx.strokeStyle=INK;ctx.lineWidth=lw+2.6;ctx.globalAlpha=o.a===undefined?1:o.a;ctx.stroke();
  ctx.strokeStyle=col;ctx.lineWidth=lw;if(o.dash){ctx.setLineDash(o.dash);ctx.lineDashOffset=-(o.t||0)*10}ctx.stroke();ctx.restore();
  return [head[0],head[1],ang]}
function pin(c,lon,lat,col,t,t0,r=5){if(t<t0)return[0,0];const [x,y]=mapaPunto(c,lon,lat),k=eb(nb(t0,t0+.4,t)),f=((t-t0)*.9)%1;
  ctx.save();ctx.globalAlpha=(1-f)*.8;ctx.strokeStyle=col;ctx.lineWidth=2;ctx.beginPath();ctx.arc(x,y,r*k+f*r*3.2,0,7);ctx.stroke();ctx.restore();circ(x,y,r*k,col,'#fff',1.8);return [x,y]}
const cx_=(x,a=14,b=346)=>Math.max(a,Math.min(b,x));
// cruz roja de muerte / error
function cruz(x,y,s,col,k=1){tr(x,y,k,0,()=>{ctx.lineCap='round';ctx.strokeStyle=INK;ctx.lineWidth=s*.5+3;ctx.beginPath();ctx.moveTo(-s,-s);ctx.lineTo(s,s);ctx.moveTo(s,-s);ctx.lineTo(-s,s);ctx.stroke();ctx.strokeStyle=col;ctx.lineWidth=s*.5;ctx.stroke()})}

// coordenadas (lon,lat) — ríos y zonas aproximados (esquemáticos)
const BRAVO=[[-106.5,31.78],[-105.0,30.6],[-104.4,29.55],[-103.1,29.0],[-102.4,29.78],[-101.55,29.8],[-100.9,29.35],[-100.5,28.7],[-99.5,27.5],[-98.8,26.4],[-97.15,25.95]];
const NUECES=[[-100.0,29.9],[-99.8,29.2],[-99.2,28.4],[-98.3,28.0],[-97.45,27.85]];
const ZDISP=NUECES.concat([[-97.15,25.95],[-98.8,26.4],[-99.5,27.5],[-100.5,28.7],[-100.9,29.35]]);
const GAD=[[-114.8,32.5],[-111.07,31.33],[-108.2,31.33],[-108.2,31.78],[-106.5,31.78],[-106.5,32.0],[-109.0,32.4],[-111.0,32.6],[-114.8,32.8]];
const CDMX=[-99.13,19.43];
function SF(c,names,col,a,o={}){ctx.save();ctx.lineJoin='round';const step=c.s>40?1:2;
  for(const e of MAPA_ESTADOS){if(names&&!names.includes(e.n))continue;const cc=typeof col==='function'?col(e):col;_mapaPath(c,e.g,step);
    if(a>0&&cc){ctx.globalAlpha=a;ctx.fillStyle=cc;ctx.fill()}
    ctx.globalAlpha=o.ba===undefined?.8:o.ba;ctx.strokeStyle=o.b||'rgba(255,255,255,.8)';ctx.lineWidth=o.lw||1;ctx.stroke()}
  ctx.restore()}
function poly(c,P,col,a,o={}){ctx.save();ctx.beginPath();P.forEach((q,i)=>{const [x,y]=mapaPunto(c,q[0],q[1]);i?ctx.lineTo(x,y):ctx.moveTo(x,y)});ctx.closePath();
  if(a>0){ctx.globalAlpha=a;ctx.fillStyle=col;ctx.fill()}ctx.globalAlpha=o.ba===undefined?.9:o.ba;ctx.strokeStyle=o.b||col;ctx.lineWidth=o.lw||2;if(o.dash)ctx.setLineDash(o.dash);ctx.stroke();ctx.restore()}
// flecha geográfica con progreso p
function flecha(c,A,B,p,col,lw=4){p=cl(p);if(p<=0)return;const a=mapaPunto(c,A[0],A[1]),b=mapaPunto(c,B[0],B[1]);const x=lerp(a[0],b[0],p),y=lerp(a[1],b[1],p),ang=Math.atan2(b[1]-a[1],b[0]-a[0]);
  ctx.save();ctx.lineCap='round';ctx.strokeStyle=INK;ctx.lineWidth=lw+3;ctx.beginPath();ctx.moveTo(a[0],a[1]);ctx.lineTo(x,y);ctx.stroke();ctx.strokeStyle=col;ctx.lineWidth=lw;ctx.stroke();
  ctx.translate(x,y);ctx.rotate(ang);ctx.beginPath();ctx.moveTo(10,0);ctx.lineTo(-6,-9);ctx.lineTo(-6,9);ctx.closePath();ctx.fillStyle=col;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=2;ctx.stroke();ctx.restore()}
// cristal de salitre (rombo brillante)
function cristal(x,y,s,col,t,ph=0){const k=1+.12*Math.sin(t*6+ph);ctx.save();ctx.translate(x,y);ctx.scale(s*k,s*k);ctx.beginPath();ctx.moveTo(0,-8);ctx.lineTo(5,0);ctx.lineTo(0,9);ctx.lineTo(-5,0);ctx.closePath();ctx.fillStyle=col;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=1.3/s;ctx.stroke();ctx.beginPath();ctx.moveTo(0,-8);ctx.lineTo(0,9);ctx.moveTo(-5,0);ctx.lineTo(5,0);ctx.strokeStyle='rgba(255,255,255,.7)';ctx.lineWidth=.8/s;ctx.stroke();ctx.restore()}
// tribunal (columnas + frontón)
function tribunal(x,y,s,col,a=1){ctx.save();ctx.globalAlpha*=a;ctx.translate(x,y);ctx.scale(s,s);ctx.lineJoin='round';
  ctx.beginPath();ctx.moveTo(-34,-14);ctx.lineTo(0,-34);ctx.lineTo(34,-14);ctx.closePath();ctx.fillStyle=col;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=2.4/s*s;ctx.stroke();
  for(let i=0;i<4;i++){rr(-28+i*16-3,-12,8,30,2);ctx.fillStyle=CRM;ctx.fill();ctx.stroke()}
  rr(-36,18,72,8,2);ctx.fillStyle=col;ctx.fill();ctx.stroke();ctx.restore()}
// martillo de juez; ang 0 = levantado, 1 = golpe
function martillo(x,y,s,k){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.rotate(-.9+k*.9);ctx.lineJoin='round';rr(-3,-4,6,40,2);ctx.fillStyle='#8a5a33';ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=2;ctx.stroke();rr(-16,-14,32,14,4);ctx.fillStyle='#b87a45';ctx.fill();ctx.stroke();ctx.restore()}
// bocadillo con cola hacia abajo
function bocadillo(x,y,w,h,col,a=1,tail=0){ctx.save();ctx.globalAlpha*=a;rr(x-w/2,y-h/2,w,h,16);ctx.fillStyle=col;ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=2.6;ctx.stroke();
  ctx.beginPath();ctx.moveTo(x-10+tail,y+h/2-1);ctx.lineTo(x+tail,y+h/2+16);ctx.lineTo(x+10+tail,y+h/2-1);ctx.fillStyle=col;ctx.fill();ctx.restore()}
// tren simple que mira a la derecha o izquierda
function tren(x,y,s,flip,t){ctx.save();ctx.translate(x,y);ctx.scale(flip?-s:s,s);ctx.lineJoin='round';
  for(let i=0;i<2;i++){rr(-24+i*22,-8,20,12,2);ctx.fillStyle=i?CL:'#e8eefc';ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=1.8/s*1.2;ctx.stroke()}
  rr(18,-12,12,16,2);ctx.fillStyle=RED;ctx.fill();ctx.stroke();for(const wx of [-16,-4,10,24])circ(wx,6,3,INK,'#fff',.8);
  for(let i=0;i<3;i++){const q=((t*1.6+i*.33)%1);circ(22-q*18,-16-q*14,2+q*3,'rgba(240,240,255,'+(.6*(1-q))+')')}ctx.restore()}
