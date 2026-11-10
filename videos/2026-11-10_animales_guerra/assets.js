// ===== 03 · Animales que fueron a la guerra — recursos (cartel de guerra vintage, de noche) =====
CAP.acc='#e3a33a';
const SL0='#151d27',SL1='#2b3744',CR='#f1e4c6',RD='#d6402f',OC='#e3a33a',OL='#6b7a3a',INK='#0d0f12',BRZ='#b8793a',GAS='#8fb83c',STEEL='#2f4a63',PAPER='#e4d3ac';
const TX=(s,x,y,sz,col,t,t0,o={})=>mtext(s,x,y,sz,col,t,t0,Object.assign({stroke:INK,sw:Math.max(4,sz*.2)},o));
const STAMP=(s,x,y,sz,t,t0,o={})=>tag(s,x,y,sz,RD,CR,t,t0,Object.assign({stroke:INK,wt:'900'},o));
// ---------- utilidades de siluetas ----------
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
function halftone(a=.05,col=CR){ctx.save();ctx.fillStyle=col;ctx.globalAlpha=a;for(let i=0;i<19;i++)for(let j=0;j<33;j++){const x=i*20+(j%2)*10,y=j*20;ctx.beginPath();ctx.arc(x,y,1.5+.9*Math.sin(i*.5+j*.3),0,TAU);ctx.fill()}ctx.restore()}
function nightSky(t,c1=SL1){bg(SL0,c1);stars(t,60,5,.7)}
function sunburst(x,y,t,n,len,col,a,spin=.05){ctx.save();ctx.globalAlpha*=a;ctx.fillStyle=col;for(let i=0;i<n;i++){const an=i/n*TAU+t*spin,w=TAU/n*.5;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+Math.cos(an)*len,y+Math.sin(an)*len);ctx.lineTo(x+Math.cos(an+w)*len,y+Math.sin(an+w)*len);ctx.closePath();ctx.fill()}ctx.restore()}
// explosión plana de cartel: estrella ocre con núcleo rojo y crema (u = progreso 0..1)
function boomShape(x,y,r,u,seed=1){if(u<0||u>1)return;const s=eo(u*1.6)*(1+.1*Math.sin(u*9)),a=1-ei((u-.55)/.45);withA(a,()=>{
  poly(SH.star(x,y,r*s*.62,r*s,9+seed%3,54),OC,INK,3);poly(SH.star(x,y,r*s*.34,r*s*.58,8,48),RD,null);poly(SH.star(x,y,r*s*.14,r*s*.3,7,42),CR,null)})}
// ---------- animales (miran a la derecha, el origen es el suelo bajo el centro) ----------
// oso de pie. o: ph (paso), shell (0/1), flip, fill, rim, hold (agacha el torso)
function bear(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);
  const fill=o.fill||INK,rim=o.rim===undefined?CR:o.rim,ph=o.ph||0,sw=Math.sin(ph)*16,bob=o.ph?-Math.abs(Math.cos(ph))*3:0;ctx.translate(0,bob);
  const P=[limb(-13,-50,-14+sw,-5,26,21),limb(13,-50,15-sw,-5,26,21),el(-14+sw+7,-4,15,6.5),el(15-sw+7,-4,15,6.5),
    el(0,-86,39,42,.06),el(15,-137,22,21),el(35,-130,14,9.5,.15),el(4,-155,7.5,7.5),el(27,-157,7.5,7.5)];
  if(o.arms!==false)P.push(limb(-10,-110,-18,-80,19,17));
  inkParts(P,fill,rim);
  if(rim&&fill===INK){ctx.fillStyle=CR;ctx.beginPath();ctx.arc(24,-140,2.4,0,TAU);ctx.fill()} // ojo
  ctx.fillStyle=fill===INK?'#2b2f36':'rgba(0,0,0,.25)';ctx.beginPath();ctx.ellipse(39,-133,5.5,3.6,.1,0,TAU);ctx.fill();
  if(o.shell!==false&&(o.shell===undefined||o.shell>0)){const sc=(o.shell===undefined?1:o.shell)*1.35;ctx.save();ctx.translate(-22,-128);ctx.rotate(-2.35);ctx.scale(sc,sc);shell(0,0,1,o.glow||0);ctx.restore();
    inkParts([limb(12,-106,-8,-114,19,16)],fill,rim)}
  ctx.restore()}
// proyectil de artillería (centrado, apunta a +x)
function shell(x,y,s,gl=0){tr(x,y,s,0,()=>{if(gl>0)glow(0,0,60,rgba('#ffd27a',.75*gl));
  ctx.beginPath();ctx.moveTo(-33,-9);ctx.lineTo(10,-9);ctx.quadraticCurveTo(30,-8,38,0);ctx.quadraticCurveTo(30,8,10,9);ctx.lineTo(-33,9);ctx.closePath();
  ctx.fillStyle='#e6b455';ctx.fill();ctx.lineWidth=2.4;ctx.strokeStyle=INK;ctx.lineJoin='round';ctx.stroke();
  ctx.fillStyle=RD;ctx.fillRect(-4,-9,7,18);ctx.fillRect(-28,-9,5,18);ctx.fillStyle='rgba(255,255,255,.5)';ctx.fillRect(-30,-6,60,2.4);
  if(gl>0){ctx.globalAlpha=gl*.6;ctx.fillStyle='#fff';ctx.fillRect(-30,-8,64,5);ctx.globalAlpha=1}})}
// osezno (cría). o: sq (aplastar), flip
function cub(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1)*(1+.08*(o.sq||0)),s*(1-.12*(o.sq||0)));
  const fill=o.fill||INK,rim=o.rim===undefined?CR:o.rim,w=o.w||0;
  inkParts([limb(-12,-14,-14,-3,13,12),limb(10,-14,12+w*4,-3,13,12),el(-3,-22,21,16,.05),el(14,-40,17,16),el(28,-35,9,6.5,.1),el(5,-54,6,6),el(22,-55,6,6),limb(6,-22,16,-8+w*6,10,9)],fill,rim,2);
  ctx.fillStyle=CR;ctx.beginPath();ctx.arc(20,-42,2.6,0,TAU);ctx.fill();ctx.fillStyle=INK;ctx.beginPath();ctx.arc(20.6,-42,1.3,0,TAU);ctx.fill();
  ctx.fillStyle='#3a3f48';ctx.beginPath();ctx.ellipse(33,-37,3.6,2.6,0,0,TAU);ctx.fill();ctx.restore()}
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
// paloma. o: fl (fase de aleteo), flap (amplitud), tilt, flip, fill, rim, stand
function pigeon(x,y,s,o={}){ctx.save();ctx.translate(x,y);if(o.tilt)ctx.rotate(o.tilt);ctx.scale(s*(o.flip?-1:1),s);
  const fill=o.fill||CR,rim=o.rim===undefined?INK:o.rim,fl=o.fl||0,am=o.stand?0.12:(o.flap===undefined?1:o.flap);
  const wa=o.stand?1.2+Math.sin(fl)*.05:.3+Math.sin(fl)*.95*am; // ángulo del ala (plegada si está posada)
  // pata (colgando si está herida)
  const legA=o.legA!==undefined?o.legA:(o.hurt?.5+Math.sin((o.t||0)*6)*.15:0);
  ctx.strokeStyle='#d8574a';ctx.lineWidth=2.4;ctx.lineCap='round';
  if(!o.noLegs){ctx.beginPath();ctx.moveTo(2,8);ctx.lineTo(3+Math.sin(legA)*13,8+Math.cos(legA)*(o.stand?12:11));ctx.stroke();
    ctx.beginPath();ctx.moveTo(-5,8);ctx.lineTo(-5,o.stand?20:15);ctx.stroke();
    if(o.cap)capsule(3+Math.sin(legA)*13,8+Math.cos(legA)*(o.stand?12:11),.9,0)}
  // ala trasera (lejos)
  const wing=(a,col)=>{ctx.save();ctx.translate(-3,-4);ctx.rotate(-a);ctx.beginPath();ctx.moveTo(0,0);ctx.quadraticCurveTo(-8,-26,-32,-30);ctx.quadraticCurveTo(-30,-12,-18,2);ctx.closePath();ctx.fillStyle=col;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=1.6;ctx.lineJoin='round';ctx.stroke();ctx.restore()};
  inkParts([pf([[-18,-2],[-42,-9],[-40,6],[-18,5]]),el(0,0,23,12.5,-.05),el(19,-9,8,8),pf([[24,-12],[34,-8],[24,-5]])],fill,rim,1.6);
  ctx.fillStyle='#e8a33a';ctx.beginPath();ctx.moveTo(24,-12);ctx.lineTo(33,-8);ctx.lineTo(24,-6);ctx.closePath();ctx.fill();
  ctx.fillStyle=INK;ctx.beginPath();ctx.arc(21,-11,1.7,0,TAU);ctx.fill();
  wing(wa,'#d6c398');
  if(o.chest){const c=o.chest;glow(10,3,18*c,rgba(RD,.7));ctx.fillStyle=RD;ctx.beginPath();ctx.arc(10,3,4.4*c,0,TAU);ctx.fill();ctx.fillStyle='rgba(120,10,10,.9)';ctx.beginPath();ctx.arc(10,3,2*c,0,TAU);ctx.fill()}
  ctx.restore()}
// cápsula del mensaje (colgando de la pata): (x,y) = extremo superior
function capsule(x,y,s,rot=0){tr(x,y,s,rot,()=>{rr(-4,0,8,19,3.5);ctx.fillStyle='#e6b455';ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=1.4;ctx.stroke();ctx.fillStyle=RD;ctx.fillRect(-4,5,8,3);ctx.fillStyle='rgba(255,255,255,.55)';ctx.fillRect(-2.4,2,1.6,14)})}
// perro robusto tipo Stubby. o: ph (carrera), head (rad, levantar hocico), jaw (0..1), sit, flip, coat, tail, bite
function dog(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);
  const fill=o.fill||'#e5cd9a',rim=o.rim===undefined?INK:o.rim,ph=o.ph||0,sw=Math.sin(ph)*11,sit=o.sit||0;
  if(sit>0){ctx.translate(0,0);}
  const hd=o.head||0,jaw=o.jaw||0;
  const legs=sit>0?[limb(18,-18,19,-1,9,8),limb(8,-18,9,-1,9,8),el(-18,-9,13,11)]:[limb(20,-22,20+sw,-2,9,8),limb(9,-22,9-sw,-2,9,8),limb(-16,-22,-16-sw,-2,9,8),limb(-24,-22,-24+sw,-2,9,8)];
  const body=sit>0?[el(-4,-26,26,18,-.5)]:[el(0,-31,29,15.5)];
  const tail=limb(-27,-36,-35,-46+Math.sin((o.t||0)*20)*(o.tail||0)*5,6,4);
  inkParts([...legs,...body,tail],fill,rim,1.8);
  // cabeza (gira en el cuello)
  ctx.save();ctx.translate(22,-38);ctx.rotate(-hd);
  inkParts([el(8,-5,15,14),el(21,-1,11,8),pf([[0,-14],[-8,-2],[2,-4]]),pf([[10,-17],[3,-26],[16,-17]])],fill,rim,1.8);
  if(jaw>0){ctx.save();ctx.translate(16,3);ctx.rotate(jaw*.5);inkParts([el(5,3,10,4)],fill,rim,1.4);ctx.restore();ctx.fillStyle='#8a2a22';ctx.beginPath();ctx.ellipse(24,3,7,3+jaw*3,0,0,TAU);ctx.fill()}
  ctx.fillStyle=INK;ctx.beginPath();ctx.arc(29,-5,3,0,TAU);ctx.fill();ctx.beginPath();ctx.arc(12,-8,2,0,TAU);ctx.fill();
  ctx.restore();
  if(o.coat){ctx.save();ctx.beginPath();ctx.moveTo(-16,-46);ctx.lineTo(14,-46);ctx.lineTo(12,-26);ctx.lineTo(-16,-24);ctx.closePath();ctx.fillStyle=RD;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=1.4;ctx.stroke();
    ctx.fillStyle=OC;[-8,0,8].forEach(k=>{ctx.beginPath();ctx.arc(k,-36,2.2,0,TAU);ctx.fill()});ctx.restore()}
  ctx.restore()}
// soldado genérico (sin cara, casco redondo). o: ph, rot (tumbado), lieY, mask, arms ('down'|'up'|'carry'), crate, flip, fill, rim, rifle
function soldier(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);
  const fill=o.fill||INK,rim=o.rim===undefined?CR:o.rim,ph=o.ph||0,sw=Math.sin(ph)*7;
  if(o.rot){ctx.translate(0,(o.lieY||0));ctx.rotate(o.rot)}
  const arm=o.arms||'down';
  const A=arm==='up'?[limb(-7,-62,-16,-86,7,6),limb(7,-62,16,-86,7,6)]:arm==='carry'?[limb(-6,-62,10,-60,7,7),limb(6,-62,14,-52,7,7)]:[limb(-8,-62,-9-sw*.5,-40,7,6),limb(8,-62,9+sw*.5,-42,7,6)];
  const P=[limb(-4,-34,-5+sw,-3,8,8),limb(5,-34,6-sw,-3,8,8),el(-5+sw+3,-2,7,3.5),el(6-sw+3,-2,7,3.5),pf([[-10,-66],[10,-66],[12,-34],[-12,-34]]),el(0,-72,8,8.5),...A];
  inkParts(P,fill,rim,1.8);
  // casco
  ctx.beginPath();ctx.arc(0,-74,10.5,Math.PI,TAU);ctx.lineTo(13,-74);ctx.lineTo(-13,-74);ctx.closePath();ctx.fillStyle=OL;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=1.4;ctx.stroke();
  if(o.mask){ctx.fillStyle='#4b5a30';ctx.strokeStyle=CR;ctx.lineWidth=1.2;ctx.beginPath();ctx.ellipse(6,-70,6,5,0,0,TAU);ctx.fill();ctx.stroke();ctx.strokeStyle='#4b5a30';ctx.lineWidth=2.4;ctx.beginPath();ctx.moveTo(8,-65);ctx.quadraticCurveTo(14,-56,6,-52);ctx.stroke()}
  if(o.rifle){line(-12,-30,16,-70,INK,3);line(-12,-30,16,-70,CR,1)}
  if(arm==='carry'&&o.crate!==false){crate(8,-66,.5)}
  ctx.restore()}
// espía de abrigo y sombrero (sin cara). o: ph, lean, tail (estiramiento del faldón), flip
function spy(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);if(o.lean)ctx.rotate(o.lean);
  const ph=o.ph||0,sw=Math.sin(ph)*10,tl=o.tail||0;
  inkParts([limb(-3,-34,-5+sw*1.4,-3,8,7),limb(4,-34,6-sw*1.4,-3,8,7),el(-5+sw*1.4+3,-2,7,3.5),el(6-sw*1.4+3,-2,7,3.5),
    pf([[-10,-66],[10,-66],[16,-18],[-16-tl*0,-18]]),el(0,-73,7.5,8),limb(8,-60,18,-52+sw*.4,6,6),limb(-8,-60,-14,-46,6,6)],'#222a33',CR,1.8);
  // abrigo + faldón
  ctx.beginPath();ctx.moveTo(-10,-60);ctx.lineTo(10,-60);ctx.lineTo(17,-14);ctx.lineTo(-17-tl*16,-12+tl*0);ctx.closePath();ctx.fillStyle='#39434f';ctx.fill();ctx.strokeStyle=CR;ctx.lineWidth=1.2;ctx.stroke();
  line(0,-60,0,-16,'rgba(0,0,0,.4)',1.4);
  // sombrero
  ctx.fillStyle=INK;ctx.strokeStyle=CR;ctx.lineWidth=1.2;ctx.beginPath();ctx.ellipse(0,-80,15,3.4,0,0,TAU);ctx.fill();ctx.stroke();ctx.beginPath();ctx.moveTo(-8,-80);ctx.lineTo(-7,-92);ctx.lineTo(7,-92);ctx.lineTo(8,-80);ctx.closePath();ctx.fill();ctx.stroke();
  ctx.fillStyle=RD;ctx.fillRect(-7.5,-84,15,3);ctx.restore()}
function crate(x,y,s,rot=0){tr(x,y,s,rot,()=>{ctx.fillStyle='#8a6a34';ctx.strokeStyle=INK;ctx.lineWidth=2.6;ctx.beginPath();ctx.rect(-16,-12,32,24);ctx.fill();ctx.stroke();
  ctx.strokeStyle='#c9a15a';ctx.lineWidth=2;line(-16,-12,16,12,'#c9a15a',2);line(16,-12,-16,12,'#c9a15a',2);ctx.fillStyle='#c9a15a';ctx.fillRect(-16,-4,32,2.4);ctx.fillStyle=RD;ctx.fillRect(-4,-12,8,5)})}
// cañón. o: rec (retroceso 0..1)
function cannon(x,y,s,o={}){tr(x,y,s,0,()=>{const rc=(o.rec||0)*-12;ctx.save();ctx.translate(rc,0);
  inkParts([pf([[-6,-44],[56,-52],[58,-40],[-6,-34]]),el(56,-46,6,8),pf([[-22,-30],[-8,-52],[8,-36],[6,-18],[-22,-18]])],'#27303b',CR,1.8);
  ctx.fillStyle='#39434f';ctx.fillRect(-4,-50,44,7);ctx.restore();
  circ(-4,-18,19,'#27303b',CR,2.4);circ(-4,-18,12,null,'#4a5666',3);for(let k=0;k<6;k++){const a=k/6*TAU+(o.rot||0);line(-4,-18,-4+Math.cos(a)*17,-18+Math.sin(a)*17,'#4a5666',2)}circ(-4,-18,3.4,CR);
  inkParts([limb(10,-22,44,-2,7,6)],'#27303b',CR,1.6)})}
function truck(x,y,s,o={}){tr(x,y,s,0,()=>{inkParts([pf([[-60,-30],[-60,-62],[18,-62],[18,-30]]),pf([[18,-30],[18,-52],[34,-52],[48,-36],[48,-20],[-60,-20],[-60,-30]])],'#27303b',CR,2);
  ctx.fillStyle='#8aa0b3';ctx.beginPath();ctx.moveTo(23,-48);ctx.lineTo(32,-48);ctx.lineTo(41,-37);ctx.lineTo(23,-37);ctx.closePath();ctx.fill();
  ctx.fillStyle='#4b5a30';ctx.fillRect(-56,-58,70,26);ctx.fillStyle='rgba(255,255,255,.12)';for(let k=0;k<5;k++)ctx.fillRect(-52+k*13,-58,3,26);
  [-36,28].forEach(wx=>{circ(wx,-14,14,INK,CR,2.2);circ(wx,-14,6,'#4a5666')})})}
// emblema circular: oso con proyectil (crema sobre rojo) — r en unidades de mundo
function emblem(x,y,r,rot=0){tr(x,y,r/70,rot,()=>{circ(0,0,70,RD,INK,4);circ(0,0,64,null,CR,3);circ(0,0,50,null,'rgba(241,228,198,.5)',1.4);
  ctx.save();ctx.beginPath();ctx.arc(0,0,60,0,TAU);ctx.clip();bear(-8,52,.72,{fill:CR,rim:INK,shell:1});ctx.restore();
  for(let k=0;k<12;k++){const a=k/12*TAU;circ(Math.cos(a)*57,Math.sin(a)*57,1.8,CR)}})}
// carta/tarjeta-cartel: (cx,cy) centro en el mundo, w x h. kind: elefante|paloma|perro|oso. lit 0..1
function posterCard(kind,cx,cy,w,h,lit,t,o={}){const pan={elefante:OC,paloma:STEEL,perro:OL,oso:RD}[kind];const lab={elefante:'ELEFANTE',paloma:'PALOMA',perro:'PERRO',oso:'OSO'}[kind];
  ctx.save();ctx.translate(cx,cy);if(o.rot)ctx.rotate(o.rot);if(o.sc)ctx.scale(o.sc,o.sc);
  ctx.shadowColor='rgba(0,0,0,.55)';ctx.shadowBlur=18;rr(-w/2,-h/2,w,h,w*.05);ctx.fillStyle=PAPER;ctx.fill();ctx.shadowBlur=0;
  const m=w*.055,ph_=h*.14;ctx.save();rr(-w/2+m,-h/2+m,w-2*m,h-2*m-ph_,w*.03);ctx.clip();
  ctx.fillStyle=mixc(mixc(pan,'#000000',.55),pan,.35+.65*lit);ctx.fillRect(-w/2,-h/2,w,h);
  sunburst(0,h*.05,t,14,w*1.2,rgba('#ffffff',1),.08+.12*lit,.06);
  const gy=h*.28,sc=w/360;ctx.translate(0,gy);
  if(kind==='elefante')elephant(0,0,2.35*sc,{fill:INK,rim:CR,ph:lit*t*7});
  else if(kind==='paloma')pigeon(0,-30*sc,3.0*sc,{fill:CR,rim:INK,fl:t*(6+lit*10),flap:.5+lit*.5,noLegs:true});
  else if(kind==='perro')dog(-4,0,3.0*sc,{coat:true,ph:lit*t*10});
  else bear(-14*sc,0,1.5*sc,{fill:INK,rim:CR,shell:1});
  ctx.restore();
  ctx.save();rr(-w/2+m,-h/2+m,w-2*m,h-2*m-ph_,w*.03);ctx.strokeStyle=INK;ctx.lineWidth=w*.014;ctx.stroke();ctx.restore();
  // rótulo
  const ly=h/2-m-ph_/2-1;rr(-w/2+m,ly-ph_/2,w-2*m,ph_,w*.02);ctx.fillStyle=lit>.5?RD:'#8a4a40';ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=w*.012;ctx.stroke();
  txt(lab,0,ly+1,ph_*.62,CR,{wt:'900'});
  if(lit>0){ctx.strokeStyle=rgba(OC,lit);ctx.lineWidth=w*.03;rr(-w/2,-h/2,w,h,w*.05);ctx.stroke()}
  ctx.restore()}
// jaula: o.door ángulo de la puerta (0 cerrada)
function cage(x,y,door){tr(x,y,1,0,()=>{ctx.fillStyle='rgba(0,0,0,.35)';ctx.fillRect(-4,-4,84,6);
  ctx.strokeStyle=CR;ctx.lineWidth=2.2;ctx.lineCap='round';
  ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(0,-72);ctx.lineTo(80,-72);ctx.lineTo(80,0);ctx.stroke();
  for(let k=1;k<5;k++)line(k*16,0,k*16,-72,'rgba(241,228,198,.55)',1.6);
  ctx.beginPath();ctx.moveTo(-6,-72);ctx.lineTo(86,-72);ctx.stroke();ctx.fillStyle=BRZ;ctx.fillRect(-8,-78,96,6);ctx.strokeStyle=INK;ctx.lineWidth=1.4;ctx.strokeRect(-8,-78,96,6);
  circ(40,-86,5,null,CR,2);
  // puerta: panel que cae hacia la derecha como rampa (bisagra abajo a la derecha)
  ctx.save();ctx.translate(80,0);ctx.rotate(door);ctx.fillStyle=OC;ctx.strokeStyle=INK;ctx.lineWidth=1.6;ctx.beginPath();ctx.rect(-6,-72,6,72);ctx.fill();ctx.stroke();for(let k=1;k<5;k++)line(-6,-k*14.4,0,-k*14.4,INK,1.2);ctx.restore()})}
// palomar
function dovecote(x,y,s,sh){tr(x,y,s,0,()=>{rr(-5,-4,10,80,2);ctx.fillStyle='#5a4326';ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=1.6;ctx.stroke();
  ctx.fillStyle=BRZ;ctx.strokeStyle=INK;ctx.lineWidth=2.4;ctx.beginPath();ctx.rect(-45,-56,90,60);ctx.fill();ctx.stroke();
  poly([[-54,-56],[0,-92],[54,-56]],RD,INK,2.6);ctx.fillStyle=INK;ctx.beginPath();ctx.arc(8,-28,9,0,TAU);ctx.fill();ctx.strokeStyle=CR;ctx.lineWidth=1.4;ctx.stroke();
  ctx.fillStyle='#6a4f2c';ctx.fillRect(-62,2,52,6);ctx.strokeStyle=INK;ctx.lineWidth=1.4;ctx.strokeRect(-62,2,52,6);
  for(let k=0;k<4;k++)line(-40+k*22,-54,-40+k*22,2,'rgba(0,0,0,.25)',1.4);
  if(sh)glow(0,-28,70,rgba(OC,.25*sh))})}
// nubes de gas
function gasCloud(x,y,t,r,a=1){for(let k=0;k<7;k++){const ox=Math.sin(t*.8+k*2.1)*r*.5+(k-3)*r*.32,oy=Math.cos(t*.6+k*1.7)*r*.22-Math.abs(k-3)*r*.05;glow(x+ox,y+oy,r*(.7+.25*Math.sin(k+t)),'rgba(143,184,60,'+(.5*a)+')',1)}}
// cordillera (picos nevados) ; q = 0..1 por pico, devuelve nada
function peak(x,y,w,h,q,col,snow=true){if(q<=0)return;const hh=h*q;ctx.beginPath();ctx.moveTo(x-w/2,y);ctx.lineTo(x,y-hh);ctx.lineTo(x+w/2,y);ctx.closePath();ctx.fillStyle=col;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=2.4;ctx.lineJoin='round';ctx.stroke();
  ctx.beginPath();ctx.moveTo(x,y-hh);ctx.lineTo(x-w/2*.34,y-hh*.66);ctx.lineTo(x-w/2*.12,y-hh*.72);ctx.lineTo(x+w/2*.04,y-hh*.6);ctx.lineTo(x+w/2*.2,y-hh*.7);ctx.lineTo(x+w/2*.34,y-hh*.66);ctx.closePath();if(snow){ctx.fillStyle=CR;ctx.fill()}
  ctx.beginPath();ctx.moveTo(x,y-hh);ctx.lineTo(x+w/2,y);ctx.lineTo(x+w*.12,y);ctx.closePath();ctx.fillStyle='rgba(0,0,0,.22)';ctx.fill()}
function pin(x,y,t,ts,col,sz=1){if(t<ts)return;const u=t-ts,d=(1-eb(u/.4))*-60;ctx.save();ctx.translate(x,y+d);ctx.scale(sz,sz);glow(0,-18,30,rgba(col,.55));ctx.beginPath();ctx.moveTo(0,0);ctx.bezierCurveTo(-16,-14,-14,-34,0,-34);ctx.bezierCurveTo(14,-34,16,-14,0,0);ctx.fillStyle=col;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=2.4;ctx.stroke();circ(0,-22,5,CR,INK,1.6);ctx.restore();shock(x,y,t,ts+.35,col,40,3,.6)}
function medal(x,y,s,rot=0){tr(x,y,s,rot,()=>{ctx.fillStyle=RD;ctx.strokeStyle=INK;ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(-14,-70);ctx.lineTo(0,-34);ctx.lineTo(14,-70);ctx.closePath();ctx.fill();ctx.stroke();
  ctx.fillStyle=OL;ctx.beginPath();ctx.moveTo(-5,-70);ctx.lineTo(0,-34);ctx.lineTo(5,-70);ctx.closePath();ctx.fill();
  glow(0,0,44,rgba(OC,.35));
  ctx.beginPath();[[0,-34],[9,-9],[34,0],[9,9],[0,34],[-9,9],[-34,0],[-9,-9]].forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));ctx.closePath();
  ctx.fillStyle=BRZ;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=2.6;ctx.lineJoin='round';ctx.stroke();
  ctx.strokeStyle='#e8b66d';ctx.lineWidth=1.4;ctx.beginPath();[[0,-26],[6,-6],[26,0],[6,6],[0,26],[-6,6],[-26,0],[-6,-6]].forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));ctx.closePath();ctx.stroke();
  circ(0,0,7,'#e8b66d',INK,1.6);circ(0,0,3,BRZ)})}
function chevrons(x,y,s,rot=0){tr(x,y,s,rot,()=>{[0,24,48].forEach(k=>{ctx.beginPath();ctx.moveTo(-42,-20+k);ctx.lineTo(0,-46+k);ctx.lineTo(42,-20+k);ctx.lineTo(42,-4+k);ctx.lineTo(0,-30+k);ctx.lineTo(-42,-4+k);ctx.closePath();ctx.fillStyle=CR;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=3;ctx.lineJoin='round';ctx.stroke()})})}
// reloj: ang (0..1 vueltas)
function clockIcon(x,y,s,q){tr(x,y,s,0,()=>{circ(0,0,34,PAPER,INK,4);for(let k=0;k<12;k++){const a=k/12*TAU;line(Math.sin(a)*28,-Math.cos(a)*28,Math.sin(a)*32,-Math.cos(a)*32,INK,2)}
  const a=q*TAU*2;line(0,0,Math.sin(a)*26,-Math.cos(a)*26,RD,3);line(0,0,Math.sin(a/12)*17,-Math.cos(a/12)*17,INK,4);circ(0,0,3.4,INK)})}
// aro de olor / sonido
function waves(x,y,t,ts,col,n=3,gap=.14,R0=70,dir=0,spread=.8,lw=3){for(let k=0;k<n;k++){const u=(t-ts-k*gap)/.6;if(u<0||u>1)continue;ctx.save();ctx.globalAlpha=1-u;ctx.strokeStyle=col;ctx.lineWidth=lw*(1-u*.5);ctx.lineCap='round';ctx.beginPath();ctx.arc(x,y,R0*eo(u)+8,dir-spread,dir+spread);ctx.stroke();ctx.restore()}}
function zzz(x,y,t,k=0){for(let i=0;i<3;i++){const q=((t*.5+i/3+k*.3)%1);withA(Math.sin(q*Math.PI),()=>txt('Z',x+q*14+i*3,y-q*26-i*6,8+i*2.4,CR,{wt:'900',st:INK,sw:2.4}))}}
function artFlash(t,x,y,r,col='rgba(227,163,58,'){const f=Math.max(0,Math.sin(t*1.9+R(Math.floor(t*.9))*9));glow(x,y,r*(.6+f),col+(.18+.3*f)+')')}
