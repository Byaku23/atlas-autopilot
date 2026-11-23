// ===== Los hipopótamos de Escobar — recursos. Mapa NASA + Natural Earth. Verde agua = río, rosa-gris = hipopótamo, rojo = peligro, ámbar = fechas =====
const TM=tema({acc:'#7df0c4',ink:'rgba(3,18,20,.92)',sw:4,bg0:'#03161a',bg1:'#0d3b3a'});
const TX=TM.TX,TG=TM.TAG;
const COL='#ffb347',HIP='#c79fb4',HIPD='#8f6a86',RIO='#2ec4b6',MUD='#8a6a3b',GOLD='#ffd166',INK='#06141a',RED='#ff4d5e',CRM='#f3e9d2',ICE='#bfe9ff',JUN='#2ec47a',US='#4da3ff',PAN='#ff4d8d',FR='#b794f6';
const TEX=mapaCargar('../../catalogo/mapa/blue_marble.jpg',[-182.76,172.6,90,-62.97]);
const nb=(a,b,t)=>cl((t-a)/(b-a));
function PF(c,names,col,a,o={}){ctx.save();ctx.lineJoin='round';const step=c.s>40?1:2;
  for(const p of MAPA_PAISES){if(names&&!names.includes(p.n))continue;const cc=typeof col==='function'?col(p):col;_mapaPath(c,p.g,step);
    if(a>0&&cc){ctx.globalAlpha=a;ctx.fillStyle=cc;ctx.fill()}
    ctx.globalAlpha=o.ba===undefined?.8:o.ba;ctx.strokeStyle=o.b||'rgba(255,255,255,.8)';ctx.lineWidth=o.lw||1;ctx.stroke()}
  ctx.restore()}
function base(c,o={}){mapaTextura(TEX,c,{dim:o.dim===undefined?.34:o.dim,sat:.9});{const g=ctx.createLinearGradient(0,0,0,260);g.addColorStop(0,'rgba(4,16,18,.7)');g.addColorStop(1,'rgba(4,16,18,0)');ctx.fillStyle=g;ctx.fillRect(0,0,360,260)}PF(c,null,null,0,{ba:o.bb===undefined?.3:o.bb,lw:.8});SF(c,null,null,0,{ba:o.bb===undefined?.25:o.bb,lw:.7})}
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

// ---- piezas nuevas ----
const COLON=[-79.9,9.36],PCITY=[-79.52,8.98],BOGOTA=[-74.07,4.71],WASH=[-77.04,38.9];
function barco(x,y,s,col,t,dir=1){const b=Math.sin(t*2.4)*1.6;ctx.save();ctx.translate(x,y+b);ctx.scale(s*dir,s);ctx.lineJoin='round';
  ctx.beginPath();ctx.moveTo(-34,-4);ctx.lineTo(34,-4);ctx.lineTo(26,10);ctx.lineTo(-28,10);ctx.closePath();ctx.fillStyle=col;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=3;ctx.stroke();
  rr(-14,-16,26,12,3);ctx.fillStyle=mixc(col,'#ffffff',.25);ctx.fill();ctx.stroke();rr(-6,-26,6,10,2);ctx.fillStyle='#34414f';ctx.fill();ctx.stroke();rr(4,-24,6,8,2);ctx.fill();ctx.stroke();
  ctx.beginPath();ctx.moveTo(14,-9);ctx.lineTo(34,-12);ctx.lineWidth=3.4;ctx.strokeStyle=INK;ctx.stroke();ctx.restore()}
function tren(x,y,s,col,t,dir=1){ctx.save();ctx.translate(x,y);ctx.scale(s*dir,s);ctx.lineJoin='round';
  rr(-26,-16,36,22,3);ctx.fillStyle=col;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=3;ctx.stroke();rr(6,-28,18,34,3);ctx.fillStyle=mixc(col,'#ffffff',.2);ctx.fill();ctx.stroke();rr(-22,-28,8,12,2);ctx.fillStyle='#34414f';ctx.fill();ctx.stroke();
  for(const wx of [-16,-2,16]){circ(wx,8,6,'#222c38',INK,2.4);ctx.save();ctx.translate(wx,8);ctx.rotate(t*8);line(-4,0,4,0,'#8fa3b8',1.5);ctx.restore()}ctx.restore()}
function grupo(c,lon,lat,n,col,t,ph=0,sp=1.6){for(let i=0;i<n;i++){const [x,y]=P_(c,[lon+(i%4-1.5)*.06*sp,lat-(Math.floor(i/4))*.05*sp]);ctx.save();ctx.translate(x,y);persona(0,0,.34,col,t,i+ph);ctx.restore()}}

// ---- hipopótamo (vista lateral, mira a la derecha; dir=-1 a la izquierda). o.sink 0..1 = fracción hundida bajo la línea del agua (y). o.mouth 0..1 ----
function hipo(x,y,s,col,t,o={}){const dir=o.dir||1,sink=o.sink||0,mo=o.mouth||0,b=Math.sin(t*2.2+(o.ph||0))*1.2;ctx.save();ctx.translate(x,y+b);ctx.scale(s*dir,s);ctx.lineJoin='round';
  if(sink>0){ctx.beginPath();ctx.rect(-120,-120,240,120+34*(1-sink)-10);ctx.clip()}
  const dk=mixc(col,'#000000',.28);
  for(const lx of [-30,-12,14,32]){rr(lx-6,10,13,16,4);ctx.fillStyle=lx<0?dk:col;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=2.6;ctx.stroke()}
  ctx.beginPath();ctx.ellipse(-4,0,46,25,0,0,7);ctx.fillStyle=col;ctx.fill();ctx.stroke();
  ctx.beginPath();ctx.ellipse(-18,6,22,12,0,0,7);ctx.fillStyle=mixc(col,'#ffffff',.1);ctx.fill();
  // mandíbula inferior
  ctx.save();ctx.translate(40,8);ctx.rotate(mo*.55);rr(-6,0,48,15,7);ctx.fillStyle=dk;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=2.6;ctx.stroke();if(mo>.1){ctx.fillStyle='#fff';ctx.fillRect(26,-4,5,6);ctx.fillRect(12,-3,4,5)}ctx.restore();
  // cabeza ancha con hocico
  ctx.beginPath();ctx.moveTo(22,-22);ctx.quadraticCurveTo(50,-30,76,-18);ctx.quadraticCurveTo(90,-8,84,6);ctx.quadraticCurveTo(70,14,40,12);ctx.quadraticCurveTo(20,6,22,-22);ctx.closePath();ctx.fillStyle=col;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=2.8;ctx.stroke();
  ctx.beginPath();ctx.ellipse(76,-4,13,12,0,0,7);ctx.fillStyle=mixc(col,'#ffffff',.14);ctx.fill();ctx.stroke();
  circ(78,-10,2.6,INK);circ(86,-6,2.4,INK);
  circ(46,-24,7,col,INK,2.4);circ(47,-25,4.6,'#fff',INK,1.6);circ(48.4,-25,2.4,INK);
  ctx.beginPath();ctx.ellipse(32,-28,6.5,4.5,-.5,0,7);ctx.fillStyle=dk;ctx.fill();ctx.stroke();
  ctx.restore()}
// ola horizontal que tapa lo de abajo; col con alpha
function agua(y,t,col,amp=2.2,h=700){ctx.save();ctx.beginPath();ctx.moveTo(-20,y);for(let x=-20;x<=380;x+=10)ctx.lineTo(x,y+Math.sin(x*.05+t*2.4)*amp);ctx.lineTo(380,y+h);ctx.lineTo(-20,y+h);ctx.closePath();ctx.fillStyle=col;ctx.fill();ctx.strokeStyle='rgba(255,255,255,.45)';ctx.lineWidth=1.4;ctx.stroke();ctx.restore()}
function manati(x,y,s,t,dir=1){const w=Math.sin(t*4)*3;ctx.save();ctx.translate(x,y+w*.3);ctx.scale(s*dir,s);ctx.lineJoin='round';
  ctx.beginPath();ctx.ellipse(0,0,34,15,0,0,7);ctx.fillStyle='#8aa0b4';ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=2.6;ctx.stroke();
  ctx.beginPath();ctx.moveTo(-30,0);ctx.quadraticCurveTo(-52,w-10,-48,w+10);ctx.quadraticCurveTo(-36,w+6,-30,6);ctx.closePath();ctx.fill();ctx.stroke();
  ctx.beginPath();ctx.ellipse(8,9,9,4,.5,0,7);ctx.fill();ctx.stroke();circ(26,-3,2.2,INK);ctx.restore()}
function bote(x,y,s,t,n=0){const b=Math.sin(t*2.2)*1.5;ctx.save();ctx.translate(x,y+b);ctx.scale(s,s);ctx.lineJoin='round';
  ctx.beginPath();ctx.moveTo(-48,0);ctx.lineTo(48,0);ctx.lineTo(36,16);ctx.lineTo(-36,16);ctx.closePath();ctx.fillStyle='#d88a3a';ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=3;ctx.stroke();
  for(let i=0;i<n;i++){const px=-38+(i%8)*10.5,py=-(Math.floor(i/8))*11;circ(px,py-6,4.2,'#ffd9a8',INK,1.4);rr(px-3.4,py-1,6.8,6,2);ctx.fillStyle=['#4da3ff','#ff4d8d','#ffd166','#7df0c4'][i%4];ctx.fill()}ctx.restore()}
function camion(x,y,s,t,dir=1){ctx.save();ctx.translate(x,y);ctx.scale(s*dir,s);ctx.lineJoin='round';rr(-40,-26,56,34,3);ctx.fillStyle='#c9ced6';ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=3;ctx.stroke();rr(16,-16,26,24,4);ctx.fillStyle='#e0762f';ctx.fill();ctx.stroke();rr(26,-12,12,9,2);ctx.fillStyle='#bfe9ff';ctx.fill();ctx.stroke();
  for(const wx of [-26,-8,28]){circ(wx,10,7,'#222c38',INK,2.4)}ctx.restore()}
function mira(x,y,r,col,k=1){ctx.save();ctx.translate(x,y);ctx.scale(k,k);ctx.strokeStyle=INK;ctx.lineWidth=5;ctx.beginPath();ctx.arc(0,0,r,0,7);ctx.moveTo(-r*1.4,0);ctx.lineTo(r*1.4,0);ctx.moveTo(0,-r*1.4);ctx.lineTo(0,r*1.4);ctx.stroke();ctx.strokeStyle=col;ctx.lineWidth=2.6;ctx.stroke();ctx.restore()}
const NAP=[-74.72,5.9],PNARE=[-74.58,6.19],PBERRIO=[-74.41,6.49],BARRA=[-73.85,7.07];
const MAG=[NAP,[-74.66,6.04],PNARE,[-74.48,6.34],PBERRIO,[-74.22,6.75],[-74.0,6.95],BARRA];
