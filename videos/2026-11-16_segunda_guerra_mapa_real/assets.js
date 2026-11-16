// ===== 2ª Guerra Mundial (mapa real) — recursos =====
CAP.acc='#ff7a3c';
const INK='#120c07',CREAM='#f6ecd2',GER='#9aa3b8',GERE='#e3e8f4',AUT='#f0952c',CZE='#b184e8',POL='#35c47a',SOV='#e0483a',ALLY='#4a90e8',ACC='#ff7a3c',GOLD='#ffd23f';
const TX=(s,x,y,sz,col,t,t0,o={})=>mtext(s,x,y,sz,col,t,t0,Object.assign({stroke:INK,sw:Math.max(4,sz*.2)},o));
const TG=(s,x,y,sz,b,f,t,t0,o={})=>tag(s,x,y,sz,b,f,t,t0,Object.assign({stroke:INK},o));
const nb=(a,b,t)=>cl((t-a)/(b-a));
const TEX=mapaCargar('blue_marble.jpg',[-182.76,172.6,90,-62.97]);
const FOTO={};['1','2','3','4','5','6'].forEach(k=>{FOTO[k]=cargarFoto('fotos/'+k+'.jpg')});
function pathArrow(pts,p,col,lw=3.5,dash){p=cl(p);if(p<=0)return;const n=Math.max(1,Math.floor((pts.length-1)*p)),sub=pts.slice(0,n+1);
  const f=(pts.length-1)*p-n;if(n<pts.length-1&&f>0){const a=pts[n],b=pts[n+1];sub.push([lerp(a[0],b[0],f),lerp(a[1],b[1],f)])}
  ctx.save();ctx.strokeStyle=INK;ctx.lineWidth=lw+2.4;ctx.lineCap='round';ctx.lineJoin='round';if(dash)ctx.setLineDash(dash);ctx.beginPath();sub.forEach((q,i)=>i?ctx.lineTo(q[0],q[1]):ctx.moveTo(q[0],q[1]));ctx.stroke();
  ctx.strokeStyle=col;ctx.lineWidth=lw;ctx.stroke();ctx.setLineDash([]);
  const e=sub[sub.length-1],b=sub[Math.max(0,sub.length-3)],a=Math.atan2(e[1]-b[1],e[0]-b[0]);
  if(p>.02){ctx.translate(e[0],e[1]);ctx.rotate(a);poly([[8,0],[-6,-7],[-6,7]],col,INK,1.6)}ctx.restore()}
function badge(x,y,s,n,col,t,ts){if(t<ts)return;const q=eb(cl((t-ts)/.35));tr(x,y,q*s,0,()=>{circ(0,0,15,col,INK,3);txt(n,0,1,20,'#fff',{wt:'900',f:DISP})})}
function doc(x,y,s,col){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.fillStyle=CREAM;rr(-38,-26,76,52,6);ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=2;ctx.stroke();
  ctx.strokeStyle='rgba(18,12,7,.45)';ctx.lineWidth=1.6;for(let i=0;i<3;i++){ctx.beginPath();ctx.moveTo(-28,-14+i*9);ctx.lineTo(28-i*8,-14+i*9);ctx.stroke()}
  ctx.strokeStyle=col;ctx.lineWidth=2.4;ctx.beginPath();ctx.moveTo(-26,16);ctx.bezierCurveTo(-14,8,-8,22,2,13);ctx.stroke();ctx.restore()}
