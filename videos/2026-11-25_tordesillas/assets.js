// ===== Tordesillas: la raya que repartió el mundo — recursos. Mapa NASA. Rojo = España (oeste), verde = Portugal (este), dorado = línea/fechas, morado = papa =====
const TM=tema({acc:'#ffd166',ink:'rgba(3,12,24,.92)',sw:4,bg0:'#06121f',bg1:'#0f2a44'});
const TX=(s,x,y,sz,col,t,t0,oo={})=>TM.TX(s,x,y,sz,col,t,t0,Object.assign({od:.22},oo)),TG=TM.TAG;
const ESP='#ff5a4e',POR='#27d3a2',GOLD='#ffd166',PAPA='#c9a7ff',INK='#06101f',CRM='#f3e9d2',ICE='#bfe9ff',SEA='#06182c';
const TEX=mapaCargar('../../catalogo/mapa/blue_marble.jpg',[-182.76,172.6,90,-62.97]);
const nb=(a,b,t)=>cl((t-a)/(b-a));
const cx_=(x,a=14,b=346)=>Math.max(a,Math.min(b,x));
const P_=(c,p)=>mapaPunto(c,p[0],p[1]);
const veil=(a,col='4,10,28')=>{ctx.save();ctx.fillStyle='rgba('+col+','+a+')';ctx.fillRect(0,0,360,640);ctx.restore()};
const sl=(s,x,y,sz,col,t,ts,o={})=>slam(s,x,y,sz,col,t,ts,Object.assign({st:INK,sw:Math.max(6,sz*.18),sh:'rgba(255,209,102,.5)'},o));
function base(c,o={}){mapaTextura(TEX,c,{dim:o.dim===undefined?.3:o.dim,sat:.95});
  const g=ctx.createLinearGradient(0,0,0,240);g.addColorStop(0,'rgba(4,14,26,.75)');g.addColorStop(1,'rgba(4,14,26,0)');ctx.fillStyle=g;ctx.fillRect(0,0,360,240)}
// polígono geográfico relleno/borde
function gpoly(c,P,col,a,o={}){ctx.save();ctx.beginPath();P.forEach((q,i)=>{const [x,y]=mapaPunto(c,q[0],q[1]);i?ctx.lineTo(x,y):ctx.moveTo(x,y)});ctx.closePath();
  if(a>0){ctx.globalAlpha=a;ctx.fillStyle=col;ctx.fill()}if(o.lw){ctx.globalAlpha=o.ba===undefined?.9:o.ba;ctx.strokeStyle=o.b||col;ctx.lineWidth=o.lw;if(o.dash)ctx.setLineDash(o.dash);ctx.stroke()}ctx.restore()}
// mitad del mundo a la izquierda/derecha de un meridiano (lon0) hasta lon1
const mitad=(c,l0,l1,col,a,o)=>gpoly(c,[[l0,85],[l1,85],[l1,-62],[l0,-62]],col,a,o);
// meridiano: p = progreso de arriba a abajo; o.wob = ondulación; o.dash
function meridiano(c,lon,p,col,lw=3,o={}){p=cl(p);if(p<=0)return;const a=mapaPunto(c,lon,82),b=mapaPunto(c,lon,-62),y1=lerp(a[1],b[1],p);
  const pts=[];for(let y=a[1];y<y1;y+=6)pts.push([a[0]+(o.wob?Math.sin(y*.045+(o.t||0)*3)*o.wob+Math.sin(y*.11+(o.t||0)*5)*o.wob*.5:0),y]);pts.push([a[0],y1]);
  const dr=(st,w,dash)=>{ctx.beginPath();pts.forEach((q,i)=>i?ctx.lineTo(q[0],q[1]):ctx.moveTo(q[0],q[1]));ctx.strokeStyle=st;ctx.lineWidth=w;ctx.setLineDash(dash||[]);ctx.stroke()};
  ctx.save();ctx.lineCap='round';ctx.lineJoin='round';if(o.glow)dr(rgba(col,.28),lw*4.5);dr(INK,lw+2.8);dr(col,lw,o.dash);ctx.restore();return [a[0],y1]}
// ruta con progreso p: devuelve [x,y,ang]
const _L=new WeakMap();
function _cum(G){let L=_L.get(G);if(!L){L=[0];for(let i=1;i<G.length;i++)L.push(L[i-1]+Math.hypot((G[i][0]-G[i-1][0])*MAPA_K,G[i][1]-G[i-1][1]));_L.set(G,L)}return L}
function ruta(c,G,p,col,lw=3.2,o={}){p=cl(p);if(p<=0)return null;const L=_cum(G),d=p*L[L.length-1];
  const pts=[mapaPunto(c,G[0][0],G[0][1])];let i=1;
  while(i<G.length&&L[i]<=d){pts.push(mapaPunto(c,G[i][0],G[i][1]));i++}
  let head=pts[pts.length-1];if(i<G.length){const f=(d-L[i-1])/(L[i]-L[i-1]);head=mapaPunto(c,lerp(G[i-1][0],G[i][0],f),lerp(G[i-1][1],G[i][1],f));pts.push(head)}
  const b=pts[Math.max(0,pts.length-4)],ang=Math.atan2(head[1]-b[1],head[0]-b[0]);
  ctx.save();ctx.lineCap='round';ctx.lineJoin='round';ctx.beginPath();pts.forEach((q,j)=>j?ctx.lineTo(q[0],q[1]):ctx.moveTo(q[0],q[1]));
  ctx.strokeStyle=INK;ctx.lineWidth=lw+2.6;ctx.stroke();ctx.strokeStyle=col;ctx.lineWidth=lw;if(o.dash){ctx.setLineDash(o.dash);ctx.lineDashOffset=-(o.t||0)*10}ctx.stroke();ctx.restore();
  return [head[0],head[1],ang]}
function pin(c,lon,lat,col,t,t0,r=5){if(t<t0)return[0,0];const [x,y]=mapaPunto(c,lon,lat),k=eb(nb(t0,t0+.4,t)),f=((t-t0)*.9)%1;
  ctx.save();ctx.globalAlpha=(1-f)*.8;ctx.strokeStyle=col;ctx.lineWidth=2;ctx.beginPath();ctx.arc(x,y,r*k+f*r*3.2,0,7);ctx.stroke();ctx.restore();circ(x,y,r*k,col,'#fff',1.8);return [x,y]}
function bocadillo(x,y,w,h,col,a=1,tail=0){ctx.save();ctx.globalAlpha*=a;rr(x-w/2,y-h/2,w,h,16);ctx.fillStyle=col;ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=2.6;ctx.stroke();
  ctx.beginPath();ctx.moveTo(x-10+tail,y+h/2-1);ctx.lineTo(x+tail,y+h/2+16);ctx.lineTo(x+10+tail,y+h/2-1);ctx.fillStyle=col;ctx.fill();ctx.restore()}
function barco(x,y,s,col,t,dir=1){const b=Math.sin(t*2.4)*1.6;ctx.save();ctx.translate(x,y+b);ctx.scale(s*dir,s);ctx.lineJoin='round';
  ctx.beginPath();ctx.moveTo(-30,0);ctx.lineTo(30,0);ctx.lineTo(22,12);ctx.lineTo(-24,12);ctx.closePath();ctx.fillStyle='#6b4423';ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=3;ctx.stroke();
  ctx.beginPath();ctx.moveTo(-1,-1);ctx.lineTo(-1,-34);ctx.strokeStyle=INK;ctx.lineWidth=3.4;ctx.stroke();
  ctx.beginPath();ctx.moveTo(1,-32);ctx.quadraticCurveTo(24,-18,18,-4);ctx.lineTo(1,-4);ctx.closePath();ctx.fillStyle=col;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=2.6;ctx.stroke();
  ctx.beginPath();ctx.moveTo(-3,-30);ctx.quadraticCurveTo(-18,-18,-14,-5);ctx.lineTo(-3,-5);ctx.closePath();ctx.fillStyle=mixc(col,'#ffffff',.3);ctx.fill();ctx.stroke();ctx.restore()}
function persona(x,y,s,col,t,ph=0){const b=Math.sin(t*3+ph)*1.5;ctx.save();ctx.translate(x,y+b);ctx.scale(s,s);ctx.lineJoin='round';
  ctx.beginPath();ctx.moveTo(-28,64);ctx.quadraticCurveTo(-30,8,0,6);ctx.quadraticCurveTo(30,8,28,64);ctx.closePath();ctx.fillStyle=col;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=3;ctx.stroke();
  circ(0,-14,17,mixc(col,'#000000',.22),INK,3);ctx.restore()}
function corona(x,y,s,col){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.lineJoin='round';ctx.beginPath();ctx.moveTo(-18,10);ctx.lineTo(-20,-10);ctx.lineTo(-9,-1);ctx.lineTo(0,-14);ctx.lineTo(9,-1);ctx.lineTo(20,-10);ctx.lineTo(18,10);ctx.closePath();ctx.fillStyle=col;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=3;ctx.stroke();
  circ(0,-14,3,'#fff',INK,1.6);circ(-20,-10,2.6,'#fff',INK,1.4);circ(20,-10,2.6,'#fff',INK,1.4);ctx.restore()}
// rey: persona + corona
function rey(x,y,s,col,cc,t,ph=0){persona(x,y,s,col,t,ph);const b=Math.sin(t*3+ph)*1.5;corona(x,y+b-36*s,s*.8,cc)}
// papa: capa blanca + mitra
function papa(x,y,s,t){persona(x,y,s,'#f4f0ff',t,3);const b=Math.sin(t*3+3)*1.5;ctx.save();ctx.translate(x,y+b-44*s);ctx.scale(s,s);ctx.beginPath();ctx.moveTo(-15,10);ctx.lineTo(0,-30);ctx.lineTo(15,10);ctx.closePath();ctx.fillStyle=PAPA;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=3;ctx.stroke();
  ctx.beginPath();ctx.moveTo(0,-24);ctx.lineTo(0,4);ctx.moveTo(-6,-10);ctx.lineTo(6,-10);ctx.strokeStyle=GOLD;ctx.lineWidth=2.4;ctx.stroke();ctx.restore()}
function moneda(x,y,s,t,ph=0){const k=Math.abs(Math.cos(t*4+ph));ctx.save();ctx.translate(x,y);ctx.scale(Math.max(.15,k)*s,s);circ(0,0,9,GOLD,INK,2);circ(0,0,5.2,'rgba(255,255,255,.35)',null,0);ctx.restore()}
// clavo de especia (puntito marrón con cabeza)
function clavo(x,y,s,t,ph=0){ctx.save();ctx.translate(x,y+Math.sin(t*3+ph)*1.5);ctx.scale(s,s);ctx.rotate(.4*Math.sin(ph));ctx.beginPath();ctx.moveTo(-1.6,-4);ctx.lineTo(1.6,-4);ctx.lineTo(.5,10);ctx.lineTo(-.5,10);ctx.closePath();ctx.fillStyle='#b5651d';ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=1.2;ctx.stroke();circ(0,-5.5,3,'#d9822b',INK,1.2);ctx.restore()}
// coordenadas fijas
const LON_T=-46.5,LON_B=-30,LON_Z=145;      // Tordesillas, bula (aprox.), Zaragoza (aprox.)
const CVERDE=[-24.0,16.0],TORD=[-4.95,41.5],MOLU=[128.0,-3.0];

const mitades=(c,a,b=1)=>{mitad(c,-182,LON_T,ESP,.27*a*b);mitad(c,LON_T,172.5,POR,.25*a*b)};
