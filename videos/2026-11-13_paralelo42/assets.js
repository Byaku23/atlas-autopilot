// ===== Paralelo 42 — recursos (mapa "plano azul" nocturno; línea dorada = paralelo 42) =====
CAP.acc='#ffd23f';
const NAV1='#0b1626',NAV2='#183452',LAND='#2d5a85',LANDE='#a9d2f5',GOLD='#ffd23f',RED='#e5483a',BLUE='#4aa8ff',CREAM='#f4ead2',INK='#08111d',MXC='#3f8f6b',ORG='#ff8a3d';
const TX=(s,x,y,sz,col,t,t0,o={})=>mtext(s,x,y,sz,col,t,t0,Object.assign({stroke:INK,sw:Math.max(4,sz*.2)},o));
const TG=(s,x,y,sz,b,f,t,t0,o={})=>tag(s,x,y,sz,b,f,t,t0,Object.assign({stroke:INK},o));
const PJ=(lo,la)=>[(lo+125)*5.6+12,(50-la)*9+190];
const PL=a=>a.map(p=>PJ(p[0],p[1]));
const US=PL([[-124.7,48.4],[-124.1,46.2],[-124.3,43.0],[-124.5,42.0],[-124.2,40.4],[-122.5,37.8],[-121.9,36.6],[-120.6,34.5],[-118.5,34.0],[-117.1,32.5],[-114.7,32.7],[-111.0,31.3],[-108.2,31.3],[-108.2,31.8],[-106.5,31.8],[-104.5,29.6],[-103.2,29.0],[-101.4,29.8],[-99.5,27.5],[-97.4,25.9],[-97.4,27.8],[-94.7,29.4],[-93.8,29.7],[-91.3,29.3],[-89.4,29.0],[-89.6,30.2],[-88.0,30.3],[-85.4,29.7],[-84.0,30.1],[-82.8,28.0],[-81.8,26.1],[-80.4,25.2],[-80.0,26.8],[-81.3,30.4],[-81.0,31.9],[-79.0,33.6],[-75.5,35.2],[-76.0,37.0],[-75.1,38.4],[-74.0,39.7],[-74.0,40.6],[-72.0,41.0],[-70.0,41.7],[-70.7,43.0],[-67.0,44.8],[-67.8,47.1],[-69.2,47.4],[-71.5,45.0],[-74.7,45.0],[-76.3,44.2],[-79.0,43.3],[-83.1,42.3],[-82.5,45.3],[-84.5,46.5],[-88.0,48.0],[-89.5,48.0],[-95.2,49.0],[-123.0,49.0],[-122.8,48.1]]);
const MEX=PL([[-117.1,32.5],[-114.7,32.7],[-111.0,31.3],[-108.2,31.3],[-108.2,31.8],[-106.5,31.8],[-104.5,29.6],[-103.2,29.0],[-101.4,29.8],[-99.5,27.5],[-97.4,25.9],[-97.8,22.0],[-96.0,19.0],[-94.5,18.2],[-91.0,18.8],[-90.5,21.0],[-87.5,21.5],[-88.0,18.0],[-92.0,15.0],[-96.5,15.7],[-101.0,17.3],[-105.5,20.2],[-105.3,22.5],[-109.4,25.5],[-112.5,29.5],[-114.8,31.8]]);
const FLO=PL([[-87.5,31.0],[-85.0,31.0],[-82.0,30.6],[-81.3,30.4],[-80.0,26.8],[-80.4,25.2],[-81.8,26.1],[-82.8,28.0],[-84.0,30.1],[-85.4,29.7],[-87.5,30.3]]);
const ORE=PL([[-124.5,42.0],[-124.0,46.2],[-122.8,45.6],[-121.0,45.6],[-119.0,46.0],[-117.0,46.0],[-116.9,44.0],[-117.0,43.8],[-117.0,42.0]]);
const OREGC=PL([[-124.5,42.0],[-111.0,42.0],[-111.0,49.0],[-123.0,49.0],[-122.8,48.1],[-124.7,48.4],[-124.1,46.2],[-124.3,43.0]]);
const RIV=[PL([[-93.8,29.7],[-94.0,32.0]]),PL([[-94.0,32.0],[-94.1,33.5],[-97.0,33.9],[-100.0,34.4]]),PL([[-100.0,34.4],[-100.0,37.6],[-103.0,38.0],[-106.3,39.2]]),PL([[-106.3,39.2],[-106.3,42.0]]),PL([[-106.3,42.0],[-124.3,42.0]])];
const P42=PL([[-106.3,42.0],[-124.3,42.0]]);
const DC=PJ(-77.0,38.9),FL=PJ(-82.0,28.5),COAST=PJ(-124.5,42.0);
function sea(t){bg(NAV1,NAV2);ctx.strokeStyle='rgba(169,210,245,.07)';ctx.lineWidth=1;
  for(let la=24;la<=50;la+=2){const y=PJ(0,la)[1];ctx.beginPath();ctx.moveTo(-300,y);ctx.lineTo(700,y);ctx.stroke()}
  for(let lo=-130;lo<=-60;lo+=4){const x=PJ(lo,0)[0];ctx.beginPath();ctx.moveTo(x,60);ctx.lineTo(x,600);ctx.stroke()}}
function land(pts,fill,edge,lw=1.8){ctx.save();ctx.lineJoin='round';poly(pts,fill,edge,lw);ctx.restore()}
function usMap(fill,edge){glow(180,300,170,'rgba(74,168,255,.16)',1);land(US,fill||LAND,edge||LANDE)}
// pluma (quill) apuntando hacia abajo-izquierda; la punta está en (0,0)
function quill(x,y,s,rot,col){ctx.save();ctx.translate(x,y);ctx.rotate(rot||0);ctx.scale(s,s);
  poly([[0,0],[5,-14],[24,-52],[34,-60],[30,-38],[14,-12]],col||CREAM,INK,1.6);line(2,-3,30,-56,INK,1.4);ctx.restore()}
function person(x,y,s,col,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);
  ctx.fillStyle=INK;rr(-27,-3,54,56,18);ctx.fill();circ(0,-22,19,INK);
  ctx.fillStyle=col;rr(-24,0,48,52,16);ctx.fill();circ(0,-22,16,col);
  ctx.fillStyle='rgba(255,255,255,.18)';ctx.beginPath();ctx.arc(-5,-27,8,Math.PI,Math.PI*1.7);ctx.fill();
  ctx.fillStyle=CREAM;poly([[-6,0],[0,14],[6,0]],CREAM,INK,1);ctx.restore()}
function soldier(x,y,s,col,al){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.globalAlpha*=(al===undefined?1:al);
  ctx.fillStyle=INK;rr(-7,-4,14,18,5);ctx.fill();circ(0,-9,6.5,INK);ctx.fillStyle=col;rr(-5.5,-2.5,11,15,4);ctx.fill();circ(0,-9,5,col);
  ctx.fillStyle=CREAM;ctx.fillRect(7,-12,1.8,24);poly([[9,-12],[17,-9],[9,-6]],col,INK,1);ctx.restore()}
function mount(y0,amp,seed,col,dx,w=520){ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(-80,700);for(let x=-80;x<=w;x+=14){ctx.lineTo(x,y0-amp*(.55+.45*Math.sin((x+dx)*.021+seed)*Math.sin((x+dx)*.0071+seed*2.3)));}ctx.lineTo(w,700);ctx.fill()}
function surveyor(x,y,s,ph,col){ctx.save();ctx.translate(x,y);ctx.scale(s,s);const b=Math.abs(Math.sin(ph))*2;ctx.translate(0,-b);
  ctx.fillStyle=INK;rr(-9,-16,18,34,8);ctx.fill();circ(0,-24,9,INK);ctx.fillStyle=col;rr(-7,-14,14,30,7);ctx.fill();circ(0,-24,7,col);
  ctx.fillStyle=INK;ctx.fillRect(-13,-30,26,3);rr(-8,-37,16,9,3);ctx.fill();
  ctx.strokeStyle=INK;ctx.lineWidth=5;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-3,18);ctx.lineTo(-3+Math.sin(ph)*7,32);ctx.moveTo(3,18);ctx.lineTo(3-Math.sin(ph)*7,32);ctx.stroke();ctx.restore()}
function sextant(x,y,s,rot){ctx.save();ctx.translate(x,y);ctx.rotate(rot||0);ctx.scale(s,s);
  ctx.fillStyle=GOLD;ctx.strokeStyle=INK;ctx.lineWidth=2.4;ctx.beginPath();ctx.moveTo(0,0);ctx.arc(0,0,40,-Math.PI*.82,-Math.PI*.18);ctx.closePath();ctx.fill();ctx.stroke();
  ctx.strokeStyle=INK;ctx.lineWidth=1.4;for(let i=0;i<9;i++){const a=-Math.PI*.78+i*.14;ctx.beginPath();ctx.moveTo(Math.cos(a)*34,Math.sin(a)*34);ctx.lineTo(Math.cos(a)*39,Math.sin(a)*39);ctx.stroke()}
  line(0,0,18,-36,RED,2.4);circ(0,0,3,INK);ctx.restore()}
function seal(x,y,r,col,txtS,t,ts){if(t<ts)return;const u=t-ts,k=1+1.3*Math.exp(-u*11);ctx.save();ctx.translate(x,y);ctx.rotate(-.18);ctx.scale(k,k);ctx.globalAlpha*=cl(u*12);
  circ(0,0,r,col,INK,3);circ(0,0,r-5,null,CREAM,1.6);txt(txtS[0],0,-4,r*.34,CREAM,{wt:'900',f:DISP});txt(txtS[1],0,r*.34,r*.3,CREAM,{wt:'900',f:DISP});ctx.restore()}
function pathArrow(pts,p,col,lw=3.5,dash){p=cl(p);if(p<=0)return;const n=Math.max(1,Math.floor((pts.length-1)*p)),sub=pts.slice(0,n+1);
  const f=(pts.length-1)*p-n;if(n<pts.length-1&&f>0){const a=pts[n],b=pts[n+1];sub.push([lerp(a[0],b[0],f),lerp(a[1],b[1],f)])}
  ctx.save();ctx.strokeStyle=INK;ctx.lineWidth=lw+2.4;ctx.lineCap='round';ctx.lineJoin='round';if(dash)ctx.setLineDash(dash);ctx.beginPath();sub.forEach((q,i)=>i?ctx.lineTo(q[0],q[1]):ctx.moveTo(q[0],q[1]));ctx.stroke();
  ctx.strokeStyle=col;ctx.lineWidth=lw;ctx.stroke();ctx.setLineDash([]);
  const e=sub[sub.length-1],b=sub[Math.max(0,sub.length-3)],a=Math.atan2(e[1]-b[1],e[0]-b[0]);
  if(p>.02){ctx.translate(e[0],e[1]);ctx.rotate(a);poly([[7,0],[-5,-6],[-5,6]],col,INK,1.6)}ctx.restore()}
