// ===== Zama — recursos (mapa de campaña sobre pergamino oscuro; Roma rojo, Cartago púrpura) =====
CAP.acc='#f2b84b';
const SAND='#e2cf9c',SAND2='#cdb27a',INK='#1b1410',BR1='#1b1410',BR2='#3a2a1c',ROME='#d6402f',CART='#8a5cd0',GOLD='#f2b84b',SEA='#2c5d6b',SEA2='#1d4350',CR='#f4ead2';
const TX=(s,x,y,sz,col,t,t0,o={})=>mtext(s,x,y,sz,col,t,t0,Object.assign({stroke:INK,sw:Math.max(4,sz*.2)},o));
const TG=(s,x,y,sz,b,f,t,t0,o={})=>tag(s,x,y,sz,b,f,t,t0,Object.assign({stroke:INK},o));
// paths: funciones que construyen un path. Se dibuja primero el borde (rim) de todas y luego el relleno => silueta unida con contorno de luz
function inkParts(paths,fill,rim,lw=2.4){ctx.save();ctx.lineJoin='round';ctx.lineCap='round';const ps=paths.flat(Infinity);
  if(rim){ctx.strokeStyle=rim;ctx.lineWidth=lw*2;ps.forEach(f=>{f();ctx.stroke()})}
  ctx.fillStyle=fill;ps.forEach(f=>{f();ctx.fill()});ctx.restore()}
const el=(cx,cy,rx,ry,rot=0)=>()=>{ctx.beginPath();ctx.ellipse(cx,cy,rx,ry,rot,0,TAU)};
const pf=pts=>()=>{ctx.beginPath();pts.forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));ctx.closePath()};
const limb=(x0,y0,x1,y1,w0,w1)=>{if(w1===undefined)w1=w0;const dx=x1-x0,dy=y1-y0,l=Math.hypot(dx,dy)||1,nx=-dy/l,ny=dx/l;
  return [pf([[x0+nx*w0/2,y0+ny*w0/2],[x1+nx*w1/2,y1+ny*w1/2],[x1-nx*w1/2,y1-ny*w1/2],[x0-nx*w0/2,y0-ny*w0/2]]),()=>{ctx.beginPath();ctx.arc(x1,y1,w1/2,0,TAU)},()=>{ctx.beginPath();ctx.arc(x0,y0,w0/2,0,TAU)}]};
// cinta con grosor variable a lo largo de una polilínea (trompa, cola...)
const rib=(pts,w0,w1)=>{const L=[],Rr=[];pts.forEach((p,i)=>{const a=pts[Math.max(0,i-1)],b=pts[Math.min(pts.length-1,i+1)];const dx=b[0]-a[0],dy=b[1]-a[1],l=Math.hypot(dx,dy)||1,nx=-dy/l,ny=dx/l,w=lerp(w0,w1,i/(pts.length-1))/2;L.push([p[0]+nx*w,p[1]+ny*w]);Rr.push([p[0]-nx*w,p[1]-ny*w])});return pf(L.concat(Rr.reverse()))};
const bez=(p0,p1,p2,p3,n=10)=>Array.from({length:n+1},(_,i)=>{const f=i/n,g=1-f;return [g*g*g*p0[0]+3*g*g*f*p1[0]+3*g*f*f*p2[0]+f*f*f*p3[0],g*g*g*p0[1]+3*g*g*f*p1[1]+3*g*f*f*p2[1]+f*f*f*p3[1]]});
// elefante. o: ph (paso), fill, rim, flip, tusk
function elephant(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);
  const fill=o.fill||INK,rim=o.rim===undefined?CR:o.rim,ph=o.ph||0,bob=o.ph?-Math.abs(Math.sin(ph))*1.6:0;ctx.translate(0,bob);
  const lg=(hx,k)=>limb(hx,-32,hx+Math.sin(ph+k)*10,-3,12,11);
  const trunk=bez([46,-52],[62,-48],[64,-22],[54,-8],9);
  inkParts([lg(-24,0),lg(-9,Math.PI),lg(14,Math.PI*.5),lg(28,Math.PI*1.5),el(0,-45,36,26),el(36,-54,17,17),rib(trunk,13,6),limb(-34,-52,-42,-24+Math.sin(ph*2)*3,4,3),el(26,-48,11,17,.2)],fill,rim,2.2);
  ctx.fillStyle='rgba(241,228,198,.22)';ctx.beginPath();ctx.ellipse(26,-48,8,13,.2,0,TAU);ctx.fill();
  ctx.fillStyle=CR;ctx.beginPath();ctx.arc(42,-58,2,0,TAU);ctx.fill();
  if(o.tusk!==false){ctx.fillStyle=CR;ctx.strokeStyle=INK;ctx.lineWidth=1.2;ctx.beginPath();ctx.moveTo(48,-47);ctx.quadraticCurveTo(66,-44,69,-30);ctx.quadraticCurveTo(62,-40,47,-41);ctx.closePath();ctx.fill();ctx.stroke()}
  ctx.restore()}
// ---------- piezas del campo de batalla (vista cenital) ----------
// bloque de infantería: rectángulo con borde y filas de escudos. o: al, shake
function unit(x,y,w,h,col,o={}){ctx.save();ctx.translate(x+(o.dx||0),y+(o.dy||0));if(o.rot)ctx.rotate(o.rot);if(o.al!==undefined)ctx.globalAlpha*=o.al;
  ctx.fillStyle=INK;rr(-w/2-1.5,-h/2-1.5,w+3,h+3,3);ctx.fill();ctx.fillStyle=col;rr(-w/2,-h/2,w,h,2.5);ctx.fill();
  ctx.fillStyle='rgba(0,0,0,.28)';for(let i=0;i<Math.floor(w/7);i++)for(let j=0;j<Math.max(1,Math.floor(h/7));j++){ctx.beginPath();ctx.arc(-w/2+4+i*7,-h/2+4+j*7,1.7,0,TAU);ctx.fill()}
  if(o.edge){ctx.strokeStyle=o.edge;ctx.lineWidth=1.6;rr(-w/2,-h/2,w,h,2.5);ctx.stroke()}ctx.restore()}
// fragmentos de un bloque que se rompe (p 0..1)
function shatter(x,y,w,h,col,p,seed=1){if(p<=0||p>=1)return;ctx.save();for(let k=0;k<6;k++){const a=R(seed+k*3)*TAU,d=(10+R(seed+k)*26)*eo(p);ctx.globalAlpha=1-p;ctx.fillStyle=col;ctx.save();ctx.translate(x+(R(seed+k*5)-.5)*w+Math.cos(a)*d,y+(R(seed+k*7)-.5)*h+Math.sin(a)*d);ctx.rotate(a+p*3);ctx.fillRect(-4,-3,8,6);ctx.restore()}ctx.restore()}
// elefante en vista cenital. ang=0 mira hacia abajo (+y)
function topEl(x,y,s,ang,o={}){ctx.save();ctx.translate(x,y);ctx.rotate(ang);ctx.scale(s,s);ctx.globalAlpha*=(o.al===undefined?1:o.al);const c=o.col||'#5b6070';
  ctx.fillStyle=INK;ctx.beginPath();ctx.ellipse(0,0,13,16,0,0,TAU);ctx.fill();ctx.beginPath();ctx.ellipse(-11,6,5,9,.3,0,TAU);ctx.ellipse(11,6,5,9,-.3,0,TAU);ctx.fill();
  ctx.fillStyle=c;ctx.beginPath();ctx.ellipse(0,-1,11.5,14.5,0,0,TAU);ctx.fill();
  ctx.fillStyle=c;ctx.beginPath();ctx.ellipse(-10.5,7,3.8,7.5,.3,0,TAU);ctx.ellipse(10.5,7,3.8,7.5,-.3,0,TAU);ctx.fill();
  ctx.fillStyle=INK;ctx.beginPath();ctx.arc(0,15,7.5,0,TAU);ctx.fill();ctx.fillStyle=c;ctx.beginPath();ctx.arc(0,15,6.2,0,TAU);ctx.fill();
  ctx.strokeStyle=c;ctx.lineWidth=4;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(0,19);ctx.quadraticCurveTo(3,27+(o.tr||0),-1,31);ctx.stroke();
  ctx.strokeStyle=CR;ctx.lineWidth=1.8;ctx.beginPath();ctx.moveTo(-5,19);ctx.lineTo(-7,25);ctx.moveTo(5,19);ctx.lineTo(7,25);ctx.stroke();
  ctx.fillStyle=o.team||CART;rr(-7,-10,14,10,3);ctx.fill();ctx.restore()}
// jinete/caballería: pequeña flecha-bloque. ang=0 mira hacia arriba
function cav(x,y,s,ang,col,o={}){ctx.save();ctx.translate(x,y);ctx.rotate(ang);ctx.scale(s,s);ctx.globalAlpha*=(o.al===undefined?1:o.al);
  poly([[0,-9],[6,6],[0,3],[-6,6]],col,INK,1.4);ctx.restore()}
// flecha de campaña dibujada progresivamente (p 0..1) sobre una polilínea (bez)
function pathArrow(pts,p,col,lw=3.5,dash){p=cl(p);if(p<=0)return;const n=Math.max(1,Math.floor((pts.length-1)*p)),sub=pts.slice(0,n+1);
  const f=(pts.length-1)*p-n;if(n<pts.length-1&&f>0){const a=pts[n],b=pts[n+1];sub.push([lerp(a[0],b[0],f),lerp(a[1],b[1],f)])}
  ctx.save();ctx.strokeStyle=INK;ctx.lineWidth=lw+2.4;ctx.lineCap='round';ctx.lineJoin='round';if(dash)ctx.setLineDash(dash);ctx.beginPath();sub.forEach((q,i)=>i?ctx.lineTo(q[0],q[1]):ctx.moveTo(q[0],q[1]));ctx.stroke();
  ctx.strokeStyle=col;ctx.lineWidth=lw;ctx.stroke();ctx.setLineDash([]);
  const e=sub[sub.length-1],b=sub[Math.max(0,sub.length-3)],a=Math.atan2(e[1]-b[1],e[0]-b[0]);
  if(p>.02){ctx.translate(e[0],e[1]);ctx.rotate(a);poly([[7,0],[-5,-6],[-5,6]],col,INK,1.6)}ctx.restore()}
// casco romano (galea) de perfil. o: col, crest
function helm(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);const c=o.col||ROME,m='#b9bcc4';
  ctx.fillStyle=INK;ctx.beginPath();ctx.arc(0,0,27,Math.PI,TAU);ctx.lineTo(27,12);ctx.lineTo(8,28);ctx.lineTo(-8,28);ctx.lineTo(-27,12);ctx.closePath();ctx.fill();
  ctx.fillStyle=m;ctx.beginPath();ctx.arc(0,0,24,Math.PI,TAU);ctx.lineTo(24,10);ctx.lineTo(6,25);ctx.lineTo(-6,25);ctx.lineTo(-24,10);ctx.closePath();ctx.fill();
  ctx.fillStyle='rgba(255,255,255,.28)';ctx.beginPath();ctx.arc(-6,-8,12,Math.PI,Math.PI*1.7);ctx.lineTo(-6,-8);ctx.fill();
  ctx.fillStyle=INK;rr(-9,2,18,5,2);ctx.fill();rr(-3,2,6,20,2);ctx.fill();
  ctx.fillStyle=c;for(let i=-3;i<=3;i++){ctx.save();ctx.translate(i*5,-24);ctx.rotate(i*.06);rr(-2.4,-18-Math.abs(i)*-1.2,4.8,18,2);ctx.fillStyle=c;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=1;ctx.stroke();ctx.restore()}
  ctx.restore()}
function ship(x,y,s,col,o={}){ctx.save();ctx.translate(x,y);ctx.rotate(o.tilt||0);ctx.scale(s,s);ctx.globalAlpha*=(o.al===undefined?1:o.al);
  ctx.fillStyle=INK;ctx.beginPath();ctx.moveTo(-26,-6);ctx.lineTo(26,-6);ctx.lineTo(17,8);ctx.lineTo(-17,8);ctx.closePath();ctx.fill();
  ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(-23,-5);ctx.lineTo(23,-5);ctx.lineTo(15,5);ctx.lineTo(-15,5);ctx.closePath();ctx.fill();
  ctx.fillStyle=INK;ctx.fillRect(-1.2,-30,2.4,25);poly([[2,-29],[20,-10],[2,-10]],CR,INK,1.4);ctx.restore()}
function coin(x,y,r,rot=0){ctx.save();ctx.translate(x,y);ctx.scale(Math.abs(Math.cos(rot))*.8+.2,1);circ(0,0,r,GOLD,INK,1.6);circ(0,0,r*.55,null,'#b8862a',1.2);ctx.restore()}
// tierra de la campaña (mapa)
const LAND_IT=[[150,70],[200,56],[228,108],[216,168],[252,232],[292,292],[281,312],[248,292],[212,240],[188,192],[160,138]];
const LAND_AF=[[-20,428],[50,420],[120,404],[190,398],[238,408],[262,396],[296,392],[340,378],[400,360],[400,700],[-20,700]];
const LAND_SI=[[222,336],[250,330],[262,346],[240,356],[222,350]];
function landPoly(pts,fill,edge){poly(pts,fill,edge||INK,2.2)}
function pergamino(){bg(BR2,BR1)}
// pequeño ícono de rollo de pergamino. p 0..1 desenrollado
function scroll(x,y,w,h,p){ctx.save();ctx.translate(x,y);const hh=h*eo(p);ctx.fillStyle=INK;rr(-w/2-2,-hh/2-2,w+4,hh+4,3);ctx.fill();ctx.fillStyle=SAND;rr(-w/2,-hh/2,w,hh,3);ctx.fill();
  ctx.fillStyle='#8a6a3a';rr(-w/2-5,-hh/2-4,w+10,8,4);ctx.fill();rr(-w/2-5,hh/2-4,w+10,8,4);ctx.fill();
  if(p>.6){ctx.strokeStyle='rgba(60,40,20,.55)';ctx.lineWidth=1.6;for(let i=0;i<4;i++){ctx.beginPath();ctx.moveTo(-w/2+8,-hh/2+12+i*(hh-24)/3);ctx.lineTo(w/2-8-(i%2)*14,-hh/2+12+i*(hh-24)/3);ctx.stroke()}}ctx.restore()}
