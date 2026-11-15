// ===== Mundo solo mujeres / solo hombres — recursos 2.5D compartidos (violeta noche + rosa vs azul) =====
CAP.acc='#6fb8ff';
const FEM='#ff5fb0',MAS='#4aa3ff',YEL='#fff06a',INK='#0b0716',CY='#5ad1ff',GRN='#7dff9a',ORA='#ff9a3c',RED='#ff4d6a',GLD='#ffc83d',VIO='#b07cff',SKIN='#ffd2b0';
const TX=(s,x,y,sz,col,t,t0,o={})=>mtext(s,x,y,sz,col,t,t0,Object.assign({stroke:'rgba(8,3,20,.9)',sw:Math.max(3.5,sz*.2)},o));
const pp=(t,ts,d=.35)=>t<ts?0:eb(cl((t-ts)/d));
const shade=(c,k)=>k>=0?mixc(c,'#ffffff',k):mixc(c,'#000000',-k);
// ---- suelo en perspectiva con rejilla de neón que avanza ----
function floor3d(hy,col0,col1,gcol,t,sp=30,vx=180){const yb=hy+900;const g=ctx.createLinearGradient(0,hy,0,yb);g.addColorStop(0,col0);g.addColorStop(.35,col1);g.addColorStop(1,col1);ctx.fillStyle=g;ctx.fillRect(-1200,hy,2800,900);
  ctx.save();ctx.strokeStyle=gcol;ctx.lineWidth=1.2;ctx.globalAlpha=.55;
  for(let i=-24;i<=24;i++){ctx.beginPath();ctx.moveTo(vx+i*6,hy);ctx.lineTo(vx+i*120,yb);ctx.stroke()}
  const ph=(t*sp/60)%1;for(let k=0;k<14;k++){const q=(k+ph)/14,y=hy+Math.pow(q,2.2)*820;ctx.globalAlpha=.15+.5*q;ctx.lineWidth=.6+q*1.6;ctx.beginPath();ctx.moveTo(-1200,y);ctx.lineTo(1600,y);ctx.stroke()}
  ctx.restore()}
// ---- caja extruida (2.5D): x,y = esquina inferior izquierda del frente ----
function box3d(x,y,w,h,d,col,o={}){const dx=d*.62,dy=d*.46;
  ctx.fillStyle=shade(col,-.38);ctx.beginPath();ctx.moveTo(x+w,y);ctx.lineTo(x+w,y-h);ctx.lineTo(x+w+dx,y-h-dy);ctx.lineTo(x+w+dx,y-dy);ctx.closePath();ctx.fill();
  ctx.fillStyle=shade(col,.22);ctx.beginPath();ctx.moveTo(x,y-h);ctx.lineTo(x+w,y-h);ctx.lineTo(x+w+dx,y-h-dy);ctx.lineTo(x+dx,y-h-dy);ctx.closePath();ctx.fill();
  ctx.fillStyle=col;ctx.fillRect(x,y-h,w,h);
  if(o.rim){ctx.strokeStyle=o.rim;ctx.lineWidth=1.4;ctx.shadowColor=o.rim;ctx.shadowBlur=8;ctx.strokeRect(x,y-h,w,h);ctx.shadowBlur=0}
  if(o.win){const wc=o.wc||'#ffe9a8',nx=Math.max(1,Math.floor(w/9)),ny=Math.max(1,Math.floor(h/12));for(let i=0;i<nx;i++)for(let j=0;j<ny;j++){const on=R(i*7+j*3+(o.seed||0))>.45;ctx.fillStyle=on?wc:'rgba(255,255,255,.07)';ctx.globalAlpha=on?.55+.3*Math.sin((o.t||0)*2+i+j):1;ctx.fillRect(x+4+i*9,y-h+5+j*12,4.5,6.5)}ctx.globalAlpha=1}}
// ---- ciudad en capas (paralaje): devuelve nada, se llama dentro de capas() ----
function skyline(seed,y,x0,x1,hmin,hmax,col,rim,t,wc){let x=x0,i=0;while(x<x1){const w=18+R(i+seed)*30,h=hmin+R(i*2+seed)*(hmax-hmin),d=10+R(i*3+seed)*10;box3d(x,y,w,h,d,col,{win:true,wc,seed:i+seed,t,rim});x+=w+d*.6+2+R(i+seed*3)*6;i++}}
// ---- símbolos ♀ ♂ ----
function venus(x,y,s,col,lw=3){tr(x,y,s,0,()=>{ctx.save();ctx.strokeStyle=col;ctx.lineWidth=lw;ctx.shadowColor=col;ctx.shadowBlur=12;ctx.lineCap='round';ctx.beginPath();ctx.arc(0,-8,13,0,TAU);ctx.moveTo(0,5);ctx.lineTo(0,30);ctx.moveTo(-9,19);ctx.lineTo(9,19);ctx.stroke();ctx.restore()})}
function mars(x,y,s,col,lw=3){tr(x,y,s,0,()=>{ctx.save();ctx.strokeStyle=col;ctx.lineWidth=lw;ctx.shadowColor=col;ctx.shadowBlur=12;ctx.lineCap='round';ctx.beginPath();ctx.arc(-4,6,13,0,TAU);ctx.moveTo(5,-3);ctx.lineTo(19,-17);ctx.moveTo(8,-17);ctx.lineTo(19,-17);ctx.lineTo(19,-6);ctx.stroke();ctx.restore()})}
// ---- figura humana estilizada (pies en y). o: sex 'f'|'m', col, ph (fase de paso), la/ra (ángulo de brazos, 0 abajo, +adelante), flip, hat, hair, blink, face ('smile'|'o'|'sad'|'mad'), carry, a (alpha) ----
function fig(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);if(o.a!==undefined)ctx.globalAlpha*=o.a;
  const f=o.sex==='f',col=o.col||(f?FEM:MAS),sk=o.skin||SKIN,hr=o.hair||(f?'#3a1d45':'#23161a'),ph=o.ph||0,bob=o.walk?-Math.abs(Math.sin(ph))*2.2:0;
  ctx.fillStyle='rgba(0,0,0,.35)';ctx.beginPath();ctx.ellipse(0,1,13,3.2,0,0,TAU);ctx.fill();
  ctx.translate(0,bob);
  const dk=shade(col,-.45);
  // piernas
  const hy=f?-20:-25;[-1,1].forEach(sg=>{const sw=o.walk?Math.sin(ph+(sg>0?0:Math.PI))*8:0;ctx.strokeStyle=sg>0?dk:shade(dk,-.2);ctx.lineWidth=5.2;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(sg*3.2,hy);ctx.lineTo(sg*3.2+sw,0);ctx.stroke()});
  // brazo trasero
  const arm=(sg,ang)=>{const sx=sg*7.5,sy=-43,L=18,ex=sx+Math.sin(ang)*L*(sg>0?1:1),ey=sy+Math.cos(ang)*L;ctx.strokeStyle=sg>0?col:dk;ctx.lineWidth=4.4;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(sx,sy);ctx.lineTo(ex,ey);ctx.stroke();circ(ex,ey,2.6,sk);return[ex,ey]};
  const wl=o.walk?Math.sin(ph)*.6:0;
  const la=o.la===undefined?wl:o.la,ra=o.ra===undefined?-wl:o.ra;
  arm(-1,la);
  // torso
  if(f){ctx.beginPath();ctx.moveTo(-6.5,-46);ctx.lineTo(6.5,-46);ctx.lineTo(12,-19);ctx.lineTo(-12,-19);ctx.closePath();ctx.fillStyle=col;ctx.fill();ctx.fillStyle=shade(col,.25);ctx.beginPath();ctx.moveTo(-6.5,-46);ctx.lineTo(-1,-46);ctx.lineTo(-4,-19);ctx.lineTo(-12,-19);ctx.closePath();ctx.fill()}
  else{rr(-8,-47,16,25,4);ctx.fillStyle=col;ctx.fill();ctx.fillStyle=shade(col,.22);rr(-8,-47,6,25,3);ctx.fill();ctx.fillStyle=shade(col,-.3);ctx.fillRect(-8,-24,16,2.6)}
  // cabeza
  if(f){ctx.fillStyle=hr;ctx.beginPath();ctx.ellipse(0,-55,9.6,10.5,0,0,TAU);ctx.fill();ctx.beginPath();ctx.moveTo(-9,-55);ctx.quadraticCurveTo(-12,-40,-7,-36);ctx.lineTo(0,-40);ctx.lineTo(7,-36);ctx.quadraticCurveTo(12,-40,9,-55);ctx.fill()}
  circ(0,-53.5,7.4,sk);
  if(f){ctx.fillStyle=hr;ctx.beginPath();ctx.moveTo(-8,-54);ctx.quadraticCurveTo(-4,-64,6,-60);ctx.quadraticCurveTo(9,-58,8,-53);ctx.quadraticCurveTo(2,-58,-8,-54);ctx.fill()}
  else{ctx.fillStyle=hr;ctx.beginPath();ctx.arc(0,-55.5,8,Math.PI*1.04,Math.PI*1.96);ctx.fill()}
  if(o.hat==='hard'){ctx.fillStyle=GLD;ctx.beginPath();ctx.arc(0,-57,8.8,Math.PI,TAU);ctx.fill();ctx.fillRect(-10.5,-57.5,21,2.6)}
  const bl=o.blink?1:0,fc=o.face||'smile';ctx.fillStyle='#1a0f1f';
  if(bl){ctx.fillRect(-4.2,-53.6,2.8,1);ctx.fillRect(1.6,-53.6,2.8,1)}else{circ(-2.8,-53.6,1.15,'#1a0f1f');circ(2.8,-53.6,1.15,'#1a0f1f')}
  ctx.strokeStyle='#1a0f1f';ctx.lineWidth=1.1;ctx.beginPath();
  if(fc==='smile'){ctx.arc(0,-51.5,2.6,.15,Math.PI-.15)}else if(fc==='o'){ctx.moveTo(1.2,-50);ctx.arc(0,-50,1.4,0,TAU)}else if(fc==='sad'){ctx.arc(0,-48.6,2.4,Math.PI+.2,TAU-.2)}else if(fc==='mad'){ctx.moveTo(-3.6,-56);ctx.lineTo(-1,-55);ctx.moveTo(3.6,-56);ctx.lineTo(1,-55);ctx.moveTo(-2,-49.6);ctx.lineTo(2,-49.6)}
  ctx.stroke();
  const h=arm(1,ra);
  if(o.carry==='box'){box3d(h[0]-2,h[1]+9,15,12,6,'#c98a4b')}
  ctx.restore()}
// multitud: n figuras en fila/capas
function crowd(x0,y0,n,gap,s,sex,t,o={}){for(let i=0;i<n;i++){const jx=(R(i*2.1+(o.seed||0))-.5)*6,ph=t*(o.sp||6)+i*1.3;fig(x0+i*gap+jx,y0+(R(i+(o.seed||0))-.5)*(o.dy||0),s,{sex:o.sexs?o.sexs[i%o.sexs.length]:sex,col:o.cols?o.cols[i%o.cols.length]:undefined,walk:o.walk!==false,ph,flip:o.flip,face:o.face,hair:o.hairs?o.hairs[i%o.hairs.length]:undefined,la:o.la,ra:o.ra,hat:o.hat})}}
// pictograma: n monigotes pequeños en fila, k primeros iluminados
function picto(x,y,n,k,col,off,t,ts,gap=26,s=1.1){for(let i=0;i<n;i++){const q=pp(t,ts+i*.05,.28);if(q<=0)continue;const on=i<k&&t>ts+.45;tr(x+i*gap,y,q,0,()=>{if(on)glow(0,-14,24,rgba(col,.6));ctx.fillStyle=on?col:off;ctx.beginPath();ctx.arc(0,-24*s,5.2*s,0,TAU);ctx.fill();rr(-6*s,-18*s,12*s,17*s,4*s);ctx.fill();ctx.fillRect(-4*s,-3,3*s,5*s);ctx.fillRect(1*s,-3,3*s,5*s)})}}
// anillo de porcentaje
function ring(x,y,r,v,col,lw=9){ctx.save();ctx.lineCap='round';ctx.strokeStyle='rgba(255,255,255,.14)';ctx.lineWidth=lw;ctx.beginPath();ctx.arc(x,y,r,0,TAU);ctx.stroke();ctx.strokeStyle=col;ctx.shadowColor=col;ctx.shadowBlur=14;ctx.beginPath();ctx.arc(x,y,r,-Math.PI/2,-Math.PI/2+TAU*v);ctx.stroke();ctx.restore()}
function bigNum(s,x,y,sz,col,o={}){txt(s,x,y,sz,col,Object.assign({wt:'900',st:INK,sw:Math.max(5,sz*.12)},o))}
// barra horizontal comparativa
function hbar(x,y,w,h,v,col,lbl,t,ts,sz=11){const a=win(t,ts,ts+.25);withA(a,()=>{rr(x,y,w,h,h/2);ctx.fillStyle='rgba(255,255,255,.13)';ctx.fill();const q=eo(win(t,ts,ts+.7));if(v*q>.01){rr(x,y,Math.max(h,w*v*q),h,h/2);ctx.save();ctx.shadowColor=col;ctx.shadowBlur=10;ctx.fillStyle=col;ctx.fill();ctx.restore()}if(lbl)txt(lbl,x,y-5,sz,'#fff',{a:'left',wt:'800',st:INK,sw:3})})}
// monitor/pantalla flotante en 2.5D
function panel(x,y,w,h,col,fn,t,ts){const q=pp(t,ts,.45);if(q<=0)return;tr(x,y,q,(1-q)*.12,()=>{ctx.save();ctx.shadowColor=col;ctx.shadowBlur=16;rr(-w/2,-h/2,w,h,14);ctx.fillStyle='rgba(14,8,32,.88)';ctx.fill();ctx.strokeStyle=col;ctx.lineWidth=2.2;ctx.stroke();ctx.restore();fn(w,h)})}
// estrellas/lucecitas del fondo
function bokeh(t,n,col,seed=1,a=.35){ctx.save();for(let i=0;i<n;i++){const x=R(i*1.9+seed)*380-10,y=R(i*2.7+seed)*650,r=3+R(i+seed)*10;ctx.globalAlpha=a*(.35+.65*Math.abs(Math.sin(t*(.4+R(i)*.8)+i)));ctx.fillStyle=col;ctx.beginPath();ctx.arc((x+t*(3+R(i)*5))%380,y,r,0,TAU);ctx.fill()}ctx.restore()}
