// ===== Haití: la deuda de 1825 — recursos. Azul = Francia, rojo = Haití, oro = dinero =====
const TM=tema({acc:'#ffc83d',ink:'rgba(14,6,10,.92)',sw:4,bg0:'#14070c',bg1:'#2a0f1a'});
const TX=(s,x,y,sz,col,t,t0,oo={})=>TM.TX(s,x,y,sz,col,t,t0,Object.assign({od:.22},oo)),TG=TM.TAG;
const FRA='#5b8cff',USA='#ff4d6d',AMB='#ffc83d',RIO='#5ee0ff',GRN='#6fe08a',INK='#12060b',CRM='#f3e9d2',YEL='#e8f04a';
const TEX=mapaCargar('../../catalogo/mapa/blue_marble.jpg',[-182.76,172.6,90,-62.97]);
const nb=(a,b,t)=>cl((t-a)/(b-a));
const cx_=(x,a=14,b=346)=>Math.max(a,Math.min(b,x));
const P_=(c,p)=>mapaPunto(c,p[0],p[1]);
const veil=(a,col='4,10,28')=>{ctx.save();ctx.fillStyle='rgba('+col+','+a+')';ctx.fillRect(0,0,360,640);ctx.restore()};
const sl=(s,x,y,sz,col,t,ts,o={})=>slam(s,x,y,sz,col,t,ts,Object.assign({st:INK,sw:Math.max(6,sz*.18),sh:'rgba(255,159,28,.5)'},o));
function base(c,o={}){mapaTextura(TEX,c,{dim:o.dim===undefined?.3:o.dim,sat:.95});
  const g=ctx.createLinearGradient(0,0,0,240);g.addColorStop(0,'rgba(4,14,26,.78)');g.addColorStop(1,'rgba(4,14,26,0)');ctx.fillStyle=g;ctx.fillRect(0,0,360,240);
  const g2=ctx.createLinearGradient(0,470,0,640);g2.addColorStop(0,'rgba(4,14,26,0)');g2.addColorStop(1,'rgba(4,14,26,.6)');ctx.fillStyle=g2;ctx.fillRect(0,470,360,170)}
function gpoly(c,P,col,a,o={}){ctx.save();ctx.beginPath();P.forEach((q,i)=>{const [x,y]=mapaPunto(c,q[0],q[1]);i?ctx.lineTo(x,y):ctx.moveTo(x,y)});ctx.closePath();
  if(a>0){ctx.globalAlpha=a;ctx.fillStyle=col;ctx.fill()}if(o.lw){ctx.globalAlpha=o.ba===undefined?.9:o.ba;ctx.strokeStyle=o.b||col;ctx.lineWidth=o.lw;if(o.dash)ctx.setLineDash(o.dash);ctx.stroke()}ctx.restore()}
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
function barco(x,y,s,col,t,dir=1){const b=Math.sin(t*2.4)*1.6;ctx.save();ctx.translate(x,y+b);ctx.scale(s*dir,s);ctx.lineJoin='round';
  ctx.beginPath();ctx.moveTo(-30,0);ctx.lineTo(30,0);ctx.lineTo(22,12);ctx.lineTo(-24,12);ctx.closePath();ctx.fillStyle='#6b4423';ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=3;ctx.stroke();
  ctx.beginPath();ctx.moveTo(-1,-1);ctx.lineTo(-1,-34);ctx.strokeStyle=INK;ctx.lineWidth=3.4;ctx.stroke();
  ctx.beginPath();ctx.moveTo(1,-32);ctx.quadraticCurveTo(24,-18,18,-4);ctx.lineTo(1,-4);ctx.closePath();ctx.fillStyle=col;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=2.6;ctx.stroke();
  ctx.beginPath();ctx.moveTo(-3,-30);ctx.quadraticCurveTo(-18,-18,-14,-5);ctx.lineTo(-3,-5);ctx.closePath();ctx.fillStyle=mixc(col,'#ffffff',.3);ctx.fill();ctx.stroke();ctx.restore()}
function persona(x,y,s,col,t,ph=0){const b=Math.sin(t*3+ph)*1.5;ctx.save();ctx.translate(x,y+b);ctx.scale(s,s);ctx.lineJoin='round';
  ctx.beginPath();ctx.moveTo(-28,64);ctx.quadraticCurveTo(-30,8,0,6);ctx.quadraticCurveTo(30,8,28,64);ctx.closePath();ctx.fillStyle=col;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=3;ctx.stroke();
  circ(0,-14,17,mixc(col,'#000000',.22),INK,3);ctx.restore()}
// Napoleón (silueta genérica con bicornio) y Jefferson (silueta con pelo blanco)
function napo(x,y,s,t,ph=0){persona(x,y,s,FRA,t,ph);const b=Math.sin(t*3+ph)*1.5;ctx.save();ctx.translate(x,y+b-30*s);ctx.scale(s,s);ctx.lineJoin='round';
  ctx.beginPath();ctx.moveTo(-26,6);ctx.lineTo(-12,-14);ctx.lineTo(0,-8);ctx.lineTo(12,-14);ctx.lineTo(26,6);ctx.lineTo(0,2);ctx.closePath();ctx.fillStyle='#0b1022';ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=1.6;ctx.stroke();ctx.restore()}
function jeff(x,y,s,t,ph=0){persona(x,y,s,USA,t,ph);const b=Math.sin(t*3+ph)*1.5;ctx.save();ctx.translate(x,y+b-14*s);ctx.scale(s,s);circ(0,-5,19,'#f2efe6',INK,2.4);circ(0,0,15,mixc(USA,'#000000',.22),null,0);ctx.restore()}
function moneda(x,y,s,t,ph=0){const k=Math.abs(Math.cos(t*4+ph));ctx.save();ctx.translate(x,y);ctx.scale(Math.max(.15,k)*s,s);circ(0,0,9,AMB,INK,2);circ(0,0,5.2,'rgba(255,255,255,.35)',null,0);ctx.restore()}
function mosq(x,y,s,t,ph=0){ctx.save();ctx.translate(x,y);ctx.scale(s,s);const w=Math.sin(t*38+ph)*.5;
  ctx.fillStyle='rgba(255,255,255,.75)';ctx.strokeStyle=INK;ctx.lineWidth=1.2;ctx.beginPath();ctx.ellipse(-3,-5,7,2.6,-.6+w,0,7);ctx.fill();ctx.stroke();ctx.beginPath();ctx.ellipse(3,-5,7,2.6,.6-w,0,7);ctx.fill();ctx.stroke();
  ctx.beginPath();ctx.ellipse(0,0,2.6,6.6,0,0,7);ctx.fillStyle=YEL;ctx.fill();ctx.stroke();ctx.beginPath();ctx.moveTo(0,6);ctx.lineTo(0,11);ctx.stroke();ctx.restore()}
function lapida(x,y,s){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.beginPath();ctx.moveTo(-22,34);ctx.lineTo(-22,-8);ctx.arc(0,-8,22,Math.PI,0);ctx.lineTo(22,34);ctx.closePath();ctx.fillStyle='#c9ccd6';ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=3.4;ctx.stroke();
  ctx.beginPath();ctx.moveTo(0,-16);ctx.lineTo(0,14);ctx.moveTo(-9,-6);ctx.lineTo(9,-6);ctx.strokeStyle='#5a5f70';ctx.lineWidth=4;ctx.stroke();ctx.restore()}
function calendario(x,y,s,k,dia,mes,anio){tr(x,y,k,0,()=>{ctx.save();ctx.scale(s,s);rr(-70,-78,140,156,12);ctx.fillStyle=CRM;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=4;ctx.stroke();
  rr(-70,-78,140,36,12);ctx.fillStyle=FRA;ctx.fill();ctx.stroke();txt(mes,0,-60,20,'#fff',{st:INK,sw:3,wt:'900'});txt(dia,0,-4,64,'#3a2a14',{wt:'900'});txt(anio,0,52,26,'#1f3a8a',{wt:'900'});ctx.restore()})}
function candado(x,y,s,k){ctx.save();ctx.translate(x,y);ctx.scale(s*k,s*k);ctx.beginPath();ctx.arc(0,-8,11,Math.PI,0);ctx.strokeStyle='#e8e8f0';ctx.lineWidth=5;ctx.stroke();rr(-15,-8,30,24,5);ctx.fillStyle=USA;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=3;ctx.stroke();circ(0,3,3.4,INK,null,0);ctx.restore()}
function sello(s,x,y,sz,col,t,t0,rot=-.15){if(t<t0)return;const k=nb(t0,t0+.25,t),sc=lerp(2.4,1,eo(k));ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.scale(sc,sc);ctx.globalAlpha=k;
  const w=tw(s,sz)+22;rr(-w/2,-sz*.8,w,sz*1.6,8);ctx.strokeStyle=col;ctx.lineWidth=4;ctx.stroke();txt(s,0,0,sz,col,{wt:'900',al:'center'});ctx.restore()}
// geografía (lon,lat)
const PARIS=[2.35,48.85],BREST=[-4.5,48.4],HAITI=[-72.35,18.9],PAP=[-72.34,18.54];
const G_FH=[[-4.5,48.4],[-22,41],[-42,31],[-60,23.5],[-70.5,19.6],[-72.35,18.7]];
const faint=(c,a=.3)=>mapaEstados(c,{alpha:0,bordeA:a,lw:.8});
const CAR=['Haiti','Dominican Rep.','Cuba','Jamaica','Puerto Rico','Bahamas'];
function factura(x,y,s,k,tot){tr(x,y,k,0,()=>{ctx.save();ctx.scale(s,s);ctx.beginPath();ctx.moveTo(-60,-84);ctx.lineTo(60,-84);ctx.lineTo(60,84);for(let i=0;i<6;i++){ctx.lineTo(60-i*24,84);ctx.lineTo(48-i*24,92)}ctx.lineTo(-60,84);ctx.closePath();ctx.fillStyle=CRM;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=4;ctx.stroke();
  txt('FACTURA',0,-60,20,INK,{wt:'900',al:'center'});for(let i=0;i<3;i++){line(-40,-32+i*18,40-i*10,-32+i*18,'#8a7a66',3)}line(-44,30,44,30,INK,3);txt(tot,0,58,22,USA,{wt:'900',al:'center'});ctx.restore()})}
function banco(x,y,s,k){tr(x,y,k,0,()=>{ctx.save();ctx.scale(s,s);ctx.beginPath();ctx.moveTo(-44,-34);ctx.lineTo(0,-62);ctx.lineTo(44,-34);ctx.closePath();ctx.fillStyle=FRA;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=3.4;ctx.stroke();
  for(let i=0;i<4;i++){rr(-38+i*21,-30,12,56,2);ctx.fillStyle=CRM;ctx.fill();ctx.stroke()}rr(-46,26,92,12,3);ctx.fillStyle=FRA;ctx.fill();ctx.stroke();ctx.restore()})}
function corona(x,y,s,t){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.beginPath();ctx.moveTo(-18,4);ctx.lineTo(-18,-12);ctx.lineTo(-9,-4);ctx.lineTo(0,-16);ctx.lineTo(9,-4);ctx.lineTo(18,-12);ctx.lineTo(18,4);ctx.closePath();ctx.fillStyle=AMB;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=2.4;ctx.stroke();ctx.restore()}
function rey(x,y,s,t,ph=0){persona(x,y,s,FRA,t,ph);const b=Math.sin(t*3+ph)*1.5;corona(x,y+b-36*s,s*1.2,t)}
function pila(x,y,n,s,t){for(let i=0;i<n;i++){ctx.save();ctx.translate(x,y-i*5*s);ctx.scale(s,s);ctx.beginPath();ctx.ellipse(0,0,13,5,0,0,7);ctx.fillStyle=AMB;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=2;ctx.stroke();ctx.restore()}}
function cadena(x,y,s,rot,k){ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.scale(s,s);for(let i=-2;i<=2;i++){const d=Math.abs(i)*k*10;ctx.save();ctx.translate(i*16+Math.sign(i)*d,Math.abs(i)*k*-8);ctx.rotate(i*k*.5);ctx.beginPath();ctx.ellipse(0,0,10,6,0,0,7);ctx.strokeStyle=INK;ctx.lineWidth=7;ctx.stroke();ctx.strokeStyle='#cfd3de';ctx.lineWidth=3.6;ctx.stroke();ctx.restore()}ctx.restore()}
