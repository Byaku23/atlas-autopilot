// ===== 22 · Napoleón no era bajito — recursos (póster imperial: azul marino, rojo, oro, crema) =====
CAP.acc='#6ec1ff';
const NAVY='#0f1f4a',NAVY2='#08102a',RED='#d12f3a',GOLD='#e8c15a',CRM='#f2ead3',STEEL='#7d93b8',SKY='#6ec1ff',INK='rgba(8,12,30,.92)',SKIN='#e0b48a';
const TX=(s,x,y,sz,col,t,t0,o={})=>mtext(s,x,y,sz,col,t,t0,Object.assign({stroke:INK,sw:Math.max(3.5,sz*.2)},o));
function glowStroke(col,lw,blur=10){ctx.strokeStyle=col;ctx.lineWidth=lw;ctx.shadowColor=col;ctx.shadowBlur=blur;ctx.lineJoin='round';ctx.lineCap='round'}
// ---------- hombre de silueta sin rostro (pies en 0, ~80 de alto). o: coat, hat('bic'|'shako'|'none'), hs (alto relativo), hatS, ph, flip, al, arm, t, rim, skin ----------
function man(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s*(o.hs||1));if(o.al!==undefined)ctx.globalAlpha*=o.al;
  const coat=o.coat||NAVY,sw=Math.sin(o.ph||0)*5,hat=o.hat===undefined?'bic':o.hat;
  line(-4,-26,-4+sw,-1,'#0b0b14',5);line(4,-26,4-sw,-1,'#0b0b14',5);
  poly([[-11,-24],[11,-24],[9,-56],[-9,-56]],coat);
  if(o.belts!==false){line(-8,-54,8,-28,CRM,2.2);line(8,-54,-8,-28,CRM,2.2)}
  if(o.arm!==undefined){ctx.save();ctx.translate(8,-52);ctx.rotate(o.arm);line(0,0,0,17,coat,4.6);circ(0,17,2.4,o.skin||SKIN);ctx.restore()}else{poly([[2,-50],[10,-44],[4,-38]],coat)}
  circ(0,-64,8,o.skin||SKIN);
  if(hat==='bic'){const k=o.hatS||1;ctx.save();ctx.translate(0,-70);ctx.scale(k,k);poly([[-19,3],[-12,-7],[0,-12],[12,-7],[19,3],[10,-1],[0,-4],[-10,-1]],'#0b0b14');ctx.strokeStyle=GOLD;ctx.lineWidth=1.2;ctx.beginPath();ctx.moveTo(-18,2);ctx.lineTo(-10,-1);ctx.lineTo(0,-4);ctx.lineTo(10,-1);ctx.lineTo(18,2);ctx.stroke();circ(8,-3,2,RED);ctx.restore()}
  if(hat==='shako'){ctx.fillStyle='#0b0b14';ctx.fillRect(-7,-82,14,15);ctx.fillStyle=GOLD;ctx.fillRect(-7,-69,14,2);circ(0,-84,2.6,RED)}
  
  ctx.restore()}
function heartP(x,y,r,col,a=1){ctx.save();ctx.globalAlpha*=a;ctx.translate(x,y);ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(0,r*.9);ctx.bezierCurveTo(-r*1.6,-r*.2,-r*.7,-r*1.3,0,-r*.5);ctx.bezierCurveTo(r*.7,-r*1.3,r*1.6,-r*.2,0,r*.9);ctx.fill();ctx.restore()}
// ---------- regla horizontal. x,y esquina izq, w largo (px), col, ticks ----------
function ruler(x,y,w,h,col,n=10){ctx.save();ctx.shadowColor='rgba(0,0,0,.5)';ctx.shadowBlur=10;ctx.fillStyle=col;rr(x,y,w,h,5);ctx.fill();ctx.restore();ctx.fillStyle='rgba(8,12,30,.7)';
  for(let i=1;i<n;i++){const tx=x+w*i/n;ctx.fillRect(tx-.7,y,1.4,i%5?h*.35:h*.55)}}
// ---------- libro ----------
function book(x,y,s,t,o={}){tr(x,y,s,o.rot||0,()=>{glow(0,0,110,'rgba(232,193,90,.3)');ctx.save();ctx.shadowColor='rgba(0,0,0,.5)';ctx.shadowBlur=14;rr(-48,-62,96,124,6);ctx.fillStyle=o.col||'#7a1620';ctx.fill();ctx.restore();
  ctx.strokeStyle=GOLD;ctx.lineWidth=2.4;rr(-42,-56,84,112,4);ctx.stroke();ctx.fillStyle=GOLD;ctx.fillRect(-48,-62,8,124);
  txt('CÓDIGO',4,-22,15,GOLD,{wt:'900',st:INK,sw:3});txt('CIVIL',4,-4,15,GOLD,{wt:'900',st:INK,sw:3});txt('1804',4,26,17,CRM,{wt:'900',st:INK,sw:3})})}
// ---------- balanza (inc = inclinación) ----------
function balance(x,y,s,inc){tr(x,y,s,0,()=>{line(0,0,0,60,GOLD,5);line(-24,60,24,60,GOLD,6);ctx.save();ctx.rotate(inc);line(-60,0,60,0,GOLD,4);[-60,60].forEach(px=>{line(px,0,px-14,34,CRM,1.6);line(px,0,px+14,34,CRM,1.6);ctx.fillStyle=CRM;ctx.beginPath();ctx.ellipse(px,36,20,5,0,0,TAU);ctx.fill()});ctx.restore();circ(0,0,5,GOLD)})}
// ---------- castillo (k = 0 entero → 1 derrumbado) ----------
function castle(x,y,s,k,t){tr(x,y,s,0,()=>{ctx.save();ctx.globalAlpha=1-cl(k*1.3-.3);const dy=k*k*40;ctx.translate(Math.sin(t*50)*k*3,dy);
  ctx.fillStyle='#4a5878';ctx.fillRect(-46,-54,92,54);[-46,-30,-14,2,18,34].forEach(cx=>ctx.fillRect(cx,-62,10,10));ctx.fillRect(-60,-80,24,80);ctx.fillRect(36,-80,24,80);
  [-60,-48,36,48].forEach(cx=>ctx.fillRect(cx,-88,8,8));ctx.fillStyle='#1a2238';ctx.beginPath();ctx.moveTo(-10,0);ctx.lineTo(-10,-24);ctx.arc(0,-24,10,Math.PI,TAU);ctx.lineTo(10,0);ctx.fill();ctx.restore()})}
// ---------- cadena de eslabones (k 0..1 cuánto se dibuja) ----------
function chain(x,y,w,k,t,col='#9aa4b8'){const n=Math.floor(w/18*k);for(let i=0;i<n;i++){const cx=x+i*18+9;ctx.save();ctx.translate(cx,y);ctx.strokeStyle=col;ctx.lineWidth=4;ctx.beginPath();if(i%2)ctx.ellipse(0,0,4,9,0,0,TAU);else ctx.ellipse(0,0,10,6,0,0,TAU);ctx.stroke();ctx.restore()}}
function crownP(x,y,s,col=RED){tr(x,y,s,0,()=>{poly([[-26,18],[-30,-14],[-14,2],[0,-22],[14,2],[30,-14],[26,18]],col,GOLD,2.4);[[-30,-14],[0,-22],[30,-14]].forEach(([px,py])=>circ(px,py,3.6,GOLD))})}
function starP(x,y,s,col=GOLD){tr(x,y,s,0,()=>{poly(SH.star(0,0,28,12,5,10),col,'#fff',1.6)})}
function parch(x,y,w,h,a=1){ctx.save();ctx.globalAlpha=a;ctx.shadowColor='rgba(0,0,0,.5)';ctx.shadowBlur=18;rr(x-w/2,y-h/2,w,h,10);ctx.fillStyle=CRM;ctx.fill();ctx.restore();
  ctx.save();ctx.globalAlpha=a;ctx.strokeStyle='rgba(138,90,42,.5)';ctx.lineWidth=2;rr(x-w/2+6,y-h/2+6,w-12,h-12,7);ctx.stroke();ctx.restore()}
function stampBox(s,x,y,sz,col,t,ts,rot=-.14){if(t<ts)return;const u=t-ts,sc=1+1.6*Math.exp(-u*11),a=cl(u*14);ctx.save();ctx.globalAlpha=a;ctx.translate(x,y);ctx.rotate(rot);ctx.scale(sc,sc);
  const w=tw(s,sz)+26;ctx.save();glowStroke(col,5,12);rr(-w/2,-sz*.7,w,sz*1.4,8);ctx.stroke();ctx.restore();ctx.fillStyle='rgba(8,12,30,.6)';rr(-w/2,-sz*.7,w,sz*1.4,8);ctx.fill();txt(s,0,2,sz,col,{st:'rgba(8,12,30,.8)',sw:5,wt:'900'});ctx.restore()}
