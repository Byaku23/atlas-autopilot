// ===== Primera vuelta al mundo (Magallanes–Elcano) — recursos. Mapa satélite NASA + Natural Earth. Naranja = Magallanes, turquesa = Elcano =====
const TM=tema({acc:'#ffd166',ink:'rgba(4,12,20,.92)',sw:4,bg0:'#04101a',bg1:'#0b2233'});
const TX=TM.TX,TG=TM.TAG;
const MG='#ff8a3d',EL='#2ee6c9',GOLD='#ffd166',INK='#06121c',RED='#ff4d5e',CRM='#f3e9d2';
const TEX=mapaCargar('../../catalogo/mapa/blue_marble.jpg',[-182.76,172.6,90,-62.97]);
const nb=(a,b,t)=>cl((t-a)/(b-a));
function PF(c,names,col,a,o={}){ctx.save();ctx.lineJoin='round';const step=c.s>40?1:2;
  for(const p of MAPA_PAISES){if(names&&!names.includes(p.n))continue;const cc=typeof col==='function'?col(p):col;_mapaPath(c,p.g,step);
    if(a>0&&cc){ctx.globalAlpha=a;ctx.fillStyle=cc;ctx.fill()}
    ctx.globalAlpha=o.ba===undefined?.8:o.ba;ctx.strokeStyle=o.b||'rgba(255,255,255,.8)';ctx.lineWidth=o.lw||1;ctx.stroke()}
  ctx.restore()}
function base(c,o={}){mapaTextura(TEX,c,{dim:o.dim===undefined?.34:o.dim,sat:.9});PF(c,null,null,0,{ba:o.bb===undefined?.3:o.bb,lw:.8})}
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
// nao (barco) esquemático; flip = mira a la izquierda
function nao(x,y,sz,col,flip,t,a=1){ctx.save();ctx.globalAlpha*=a;ctx.translate(x,y+Math.sin(t*4+x)*sz*.5);ctx.scale(flip?-sz:sz,sz);ctx.lineJoin='round';
  ctx.beginPath();ctx.moveTo(-10,0);ctx.lineTo(11,-1);ctx.lineTo(7,6);ctx.lineTo(-7,6);ctx.closePath();ctx.fillStyle='#6b4326';ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=1.3/sz*1.2;ctx.stroke();
  ctx.strokeStyle=INK;ctx.lineWidth=1.6/sz*1.2;ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(0,-17);ctx.stroke();
  for(const [x0,y0,w,h] of [[-7.5,-15,15,9],[-6.5,-6,13,6]]){ctx.beginPath();ctx.moveTo(x0,y0);ctx.quadraticCurveTo(x0+w/2,y0-2,x0+w,y0);ctx.lineTo(x0+w-1,y0+h);ctx.quadraticCurveTo(x0+w/2,y0+h+2,x0+1,y0+h);ctx.closePath();ctx.fillStyle=CRM;ctx.fill();ctx.stroke();
    ctx.fillStyle=col;ctx.fillRect(x0+w/2-1.3,y0+1,2.6,h-1)}
  ctx.restore()}
// flota de n naos en cola detrás de la punta
function flota(h,n,sz,col,t,a=1){if(!h)return;const fl=Math.cos(h[2])<0;for(let i=n-1;i>=0;i--){const dx=-Math.cos(h[2])*i*sz*5+Math.sin(h[2])*((i%2)?1:-1)*i*sz*2,dy=-Math.sin(h[2])*i*sz*5-Math.cos(h[2])*((i%2)?1:-1)*i*sz*2;nao(h[0]+dx,h[1]+dy-sz*5,sz,col,fl,t+i,a)}}
function pin(c,lon,lat,col,t,t0,r=5){if(t<t0)return[0,0];const [x,y]=mapaPunto(c,lon,lat),k=eb(nb(t0,t0+.4,t)),f=((t-t0)*.9)%1;
  ctx.save();ctx.globalAlpha=(1-f)*.8;ctx.strokeStyle=col;ctx.lineWidth=2;ctx.beginPath();ctx.arc(x,y,r*k+f*r*3.2,0,7);ctx.stroke();ctx.restore();circ(x,y,r*k,col,'#fff',1.8);return [x,y]}
const cx_=(x,a=14,b=346)=>Math.max(a,Math.min(b,x));
// cruz roja de muerte / error
function cruz(x,y,s,col,k=1){tr(x,y,k,0,()=>{ctx.lineCap='round';ctx.strokeStyle=INK;ctx.lineWidth=s*.5+3;ctx.beginPath();ctx.moveTo(-s,-s);ctx.lineTo(s,s);ctx.moveTo(s,-s);ctx.lineTo(-s,s);ctx.stroke();ctx.strokeStyle=col;ctx.lineWidth=s*.5;ctx.stroke()})}
// rutas (lon,lat)
const R_ATL=sm([[-6.3,36.8],[-16.3,28.3],[-30,12],[-36,-8],[-43.2,-22.9],[-56,-35],[-67.7,-49.3]]);
const R_EST=sm([[-67.7,-49.3],[-68.3,-52.5],[-71,-53.7],[-73,-53.2],[-75,-52.4]],10);
const R_PAC1=sm([[-75,-52.4],[-95,-38],[-130,-22],[-170,-8],[-182,-4]]);
const R_PAC2=sm([[172.6,6],[160,8.5],[145,13.4],[124,10.3]]);
const R_EL=sm([[124,10.3],[127.4,0.8],[124.5,-9.5],[110,-18],[95,-27],[77.5,-37.8],[60,-37.5],[40,-36],[18.5,-35.5],[10,-30],[3,-18],[-5,-5],[-15,6],[-23.5,16.9],[-20,28],[-12,34],[-6.3,36.8]]);
const R_VUELTA=sm([[-67.7,-49.3],[-60,-44],[-50,-30],[-40,-10],[-25,15],[-6.3,36.8]]);
const R_OESTE=sm([[-6.3,36.8],[-40,30],[-120,20],[-182,10]]);
const R_OESTE2=sm([[172.6,6],[150,4],[127.4,0.8]]);
