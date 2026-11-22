// ===== ¿Por qué Rusia vendió Alaska? — recursos. Mapa satélite NASA + Natural Earth. Rojo = Rusia, azul = EE. UU., verde azulado = Canadá/Gran Bretaña, dorado = dinero/oro =====
const TM=tema({acc:'#ffd166',ink:'rgba(4,10,28,.92)',sw:4,bg0:'#050b1c',bg1:'#0f1d3d'});
const TX=TM.TX,TG=TM.TAG;
const RU='#ff4d5e',US='#4da3ff',CAN='#2ec4b6',GOLD='#ffd166',INK='#06101f',RED='#ff4d5e',CRM='#f3e9d2',ICE='#bfe9ff';
const TEX=mapaCargar('../../catalogo/mapa/blue_marble.jpg',[-182.76,172.6,90,-62.97]);
const nb=(a,b,t)=>cl((t-a)/(b-a));
function PF(c,names,col,a,o={}){ctx.save();ctx.lineJoin='round';const step=c.s>40?1:2;
  for(const p of MAPA_PAISES){if(names&&!names.includes(p.n))continue;const cc=typeof col==='function'?col(p):col;_mapaPath(c,p.g,step);
    if(a>0&&cc){ctx.globalAlpha=a;ctx.fillStyle=cc;ctx.fill()}
    ctx.globalAlpha=o.ba===undefined?.8:o.ba;ctx.strokeStyle=o.b||'rgba(255,255,255,.8)';ctx.lineWidth=o.lw||1;ctx.stroke()}
  ctx.restore()}
function base(c,o={}){mapaTextura(TEX,c,{dim:o.dim===undefined?.34:o.dim,sat:.9});{const g=ctx.createLinearGradient(0,0,0,260);g.addColorStop(0,'rgba(4,10,28,.7)');g.addColorStop(1,'rgba(4,10,28,0)');ctx.fillStyle=g;ctx.fillRect(0,0,360,260)}PF(c,null,null,0,{ba:o.bb===undefined?.3:o.bb,lw:.8});SF(c,null,null,0,{ba:o.bb===undefined?.25:o.bb,lw:.7})}
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

const BORDE=[[-141,60.0],[-141,64],[-141,69.6]];
const ALK=[-152,64];
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
// bocadillo con cola hacia abajo
function bocadillo(x,y,w,h,col,a=1,tail=0){ctx.save();ctx.globalAlpha*=a;rr(x-w/2,y-h/2,w,h,16);ctx.fillStyle=col;ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=2.6;ctx.stroke();
  ctx.beginPath();ctx.moveTo(x-10+tail,y+h/2-1);ctx.lineTo(x+tail,y+h/2+16);ctx.lineTo(x+10+tail,y+h/2-1);ctx.fillStyle=col;ctx.fill();ctx.restore()}
