// ===== 20 · Laika, la perra que viajó al espacio — recursos (póster retro espacial: azul noche + rojo + ámbar) =====
CAP.acc='#ffb84a';
const RED='#ff3b4a',AMB='#ffb84a',ICE='#9fe8ff',N0='#04060f',N1='#0f1b3d',N2='#1f3a7a',CRM='#f1e6c8',FUR='#c79a6a',STL='#aab6cc';
const TX=(s,x,y,sz,col,t,t0,o={})=>mtext(s,x,y,sz,col,t,t0,Object.assign({stroke:'rgba(4,6,15,.9)',sw:Math.max(3.5,sz*.2)},o));
function glowStroke(col,lw,blur=10){ctx.strokeStyle=col;ctx.lineWidth=lw;ctx.shadowColor=col;ctx.shadowBlur=blur;ctx.lineJoin='round';ctx.lineCap='round'}
function fillRim(col,rim,lw=2,blur=8){ctx.save();if(rim){glowStroke(rim,lw,blur);ctx.stroke()}ctx.restore();ctx.fillStyle=col;ctx.fill()}
function strokeRim(col,rim,w){ctx.save();if(rim){glowStroke(rim,w+3,8);ctx.stroke()}ctx.restore();ctx.strokeStyle=col;ctx.lineWidth=w;ctx.lineCap='round';ctx.stroke()}
// ---------- perra de lado (mira a la derecha, pies en y=0) ----------
// o: ph (fase patas), head (giro cabeza, negativo = mira arriba), tail, col, rim, flip, run (0..1 amplitud)
function dogSide(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);
  const col=o.col||FUR,rim=o.rim===undefined?ICE:o.rim,ph=o.ph||0,run=o.run===undefined?.7:o.run,hd=o.head||0,t=o.t||0;
  const leg=(hx,a)=>{ctx.beginPath();ctx.moveTo(hx,-20);ctx.lineTo(hx+Math.sin(a)*9,-10);ctx.lineTo(hx+Math.sin(a)*14,0);strokeRim(col,rim,5)};
  leg(-17,Math.sin(ph+Math.PI)*run);leg(20,Math.sin(ph)*run);
  ctx.beginPath();ctx.moveTo(-26,-32);ctx.bezierCurveTo(-40,-40,-42,-56,-36+6*Math.sin(t*9)*(o.tail===undefined?1:o.tail),-60);strokeRim(col,rim,4.2);
  ctx.beginPath();ctx.ellipse(0,-28,29,13.5,0,0,TAU);fillRim(col,rim,2,8);
  ctx.beginPath();ctx.ellipse(8,-24,15,8,0,0,TAU);ctx.fillStyle='rgba(255,240,220,.35)';ctx.fill();
  leg(-11,Math.sin(ph)*run);leg(26,Math.sin(ph+Math.PI)*run);
  ctx.save();ctx.translate(30,-38);ctx.rotate(hd);
  ctx.beginPath();ctx.moveTo(-6,-8);ctx.lineTo(-12,-24);ctx.lineTo(2,-13);ctx.closePath();fillRim('#7a5638',rim,1.6,6);
  ctx.beginPath();ctx.ellipse(0,0,12.5,11,0,0,TAU);fillRim(col,rim,2,8);
  ctx.beginPath();ctx.ellipse(12,4,10,6.4,.1,0,TAU);ctx.fillStyle='#e8d2b4';ctx.fill();circ(20,2.5,2.6,'#120a0a');
  circ(4,-3,2.4,'#120a0a');circ(4.8,-3.8,.8,'#fff');ctx.restore();
  ctx.restore()}
// ---------- cara de Laika (frontal) ----------
// o: fear (0..1), glow (halo), blink, look
function laikaFace(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s,s);const f=o.fear||0,bl=o.blink||0,lk=o.look||0;
  if(o.glow!==false)glow(0,0,90,rgba(o.halo||ICE,.28));
  ctx.beginPath();ctx.moveTo(-34,-30);ctx.lineTo(-44,-70);ctx.lineTo(-14,-46);ctx.quadraticCurveTo(0,-50,14,-46);ctx.lineTo(44,-70);ctx.lineTo(34,-30);
  ctx.bezierCurveTo(54,-8,48,30,26,44);ctx.quadraticCurveTo(0,58,-26,44);ctx.bezierCurveTo(-48,30,-54,-8,-34,-30);ctx.closePath();fillRim(FUR,ICE,2.2,10);
  poly([[-36,-56],[-35,-36],[-22,-44]],'#7a5638');poly([[36,-56],[35,-36],[22,-44]],'#7a5638');
  ctx.beginPath();ctx.moveTo(0,-34);ctx.bezierCurveTo(-14,-30,-22,8,-24,30);ctx.quadraticCurveTo(0,52,24,30);ctx.bezierCurveTo(22,8,14,-30,0,-34);ctx.fillStyle='#f2e4cc';ctx.fill();
  [-1,1].forEach(sx=>{const ex=sx*19+lk*2,ey=-8,r=8+f*3.4;
    if(bl>.9){line(ex-8,ey,ex+8,ey,'#120a0a',2.4);return}
    circ(ex,ey,r,'#fff','#120a0a',1.6);circ(ex+lk*2,ey,r*.58*(1-f*.3),'#2a1608');circ(ex+lk*2-2,ey-2.4,2,'#fff');
    const bw=f*7;line(ex-9*sx+sx*2,ey-r-3-bw*.2,ex+9*sx*-1+sx*0,ey-r-6-bw,'#7a5638',2.6)});
  ctx.fillStyle='#120a0a';ctx.beginPath();ctx.ellipse(0,18,7,5,0,0,TAU);ctx.fill();
  ctx.strokeStyle='#120a0a';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(0,22);ctx.lineTo(0,28);
  if(f>.3){ctx.moveTo(-8,34);ctx.quadraticCurveTo(0,28,8,34)}else{ctx.moveTo(-9,28);ctx.quadraticCurveTo(0,36,9,28)}ctx.stroke();
  if(f>.2){ctx.fillStyle='#8fd6ff';for(let k=0;k<3;k++){const q=((o.t||0)*1.4+k/3)%1;ctx.globalAlpha=(1-q)*Math.min(1,f*2);ctx.beginPath();ctx.ellipse(-44+k*4,-14+q*34,3,5,0,0,TAU);ctx.fill();ctx.beginPath();ctx.ellipse(44-k*4,-10+q*34,3,5,0,0,TAU);ctx.fill();ctx.globalAlpha=1}}
  ctx.strokeStyle=RED;ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(-40,38);ctx.quadraticCurveTo(0,64,40,38);ctx.stroke();
  ctx.restore()}
// ---------- Sputnik 1 (esfera con antenas) ----------
function sputnik(x,y,s,rot=0,o={}){tr(x,y,s,rot,()=>{if(o.glow!==false)glow(0,0,50,'rgba(159,232,255,.35)');
  [[-1,-.5],[-1,.5],[1,-.5],[1,.5]].forEach(a=>{ctx.strokeStyle=STL;ctx.lineWidth=1.6;ctx.beginPath();ctx.moveTo(-4*a[0]*0,0);ctx.lineTo(a[0]*64,a[1]*38);ctx.stroke()});
  const g=ctx.createRadialGradient(-6,-6,2,0,0,18);g.addColorStop(0,'#fff');g.addColorStop(.5,STL);g.addColorStop(1,'#4a5a78');ctx.fillStyle=g;ctx.beginPath();ctx.arc(0,0,17,0,TAU);ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=1.2;ctx.stroke()})}
// ---------- Sputnik 2 (cono + esfera + cabina) ----------
function sputnik2(x,y,s,rot=0,o={}){tr(x,y,s,rot,()=>{if(o.glow!==false)glow(0,0,60,'rgba(255,184,74,.3)');
  ctx.beginPath();ctx.moveTo(-8,-46);ctx.lineTo(8,-46);ctx.lineTo(18,30);ctx.lineTo(-18,30);ctx.closePath();fillRim('#d9dfea',ICE,1.6,8);
  ctx.fillStyle='#8896b0';ctx.fillRect(-14,0,28,5);ctx.fillRect(-16,16,32,5);
  circ(0,-12,6.5,'#0b1226',AMB,1.6);ctx.strokeStyle=STL;ctx.lineWidth=1.8;ctx.beginPath();ctx.moveTo(0,-46);ctx.lineTo(0,-70);ctx.stroke();
  [-1,1].forEach(sx=>{ctx.beginPath();ctx.moveTo(sx*8,-40);ctx.lineTo(sx*40,-58);ctx.stroke()});
  circ(0,-50,3,RED)})}
// ---------- cohete R-7 ----------
function rocket(x,y,s,t,fl=1){tr(x,y,s,0,()=>{
  if(fl>0){const L=60+30*fl+8*Math.sin(t*50);ctx.save();ctx.globalAlpha=fl;const g=ctx.createLinearGradient(0,0,0,L);g.addColorStop(0,'#fff');g.addColorStop(.35,'#ffd56a');g.addColorStop(1,'rgba(255,80,20,0)');ctx.fillStyle=g;ctx.beginPath();ctx.moveTo(-9,0);ctx.quadraticCurveTo(0,L*1.1,9,0);ctx.closePath();ctx.fill();glow(0,12,50,'rgba(255,170,60,.6)');ctx.restore()}
  [-1,1].forEach(sx=>{ctx.beginPath();ctx.moveTo(sx*10,-70);ctx.lineTo(sx*21,-8);ctx.lineTo(sx*21,4);ctx.lineTo(sx*10,4);ctx.closePath();fillRim('#c8d0de',ICE,1.2,5)});
  ctx.beginPath();ctx.moveTo(0,-128);ctx.quadraticCurveTo(10,-96,9,-60);ctx.lineTo(9,6);ctx.lineTo(-9,6);ctx.lineTo(-9,-60);ctx.quadraticCurveTo(-10,-96,0,-128);ctx.closePath();fillRim('#eef1f7',ICE,1.6,8);
  ctx.fillStyle=RED;ctx.fillRect(-9,-40,18,8);circ(0,-92,4,'#0b1226',AMB,1.4)})}
// ---------- Tierra ----------
function earth(x,y,r,rot=0){ctx.save();glow(x,y,r*1.3,'rgba(100,170,255,.35)');
  const g=ctx.createRadialGradient(x-r*.3,y-r*.3,r*.1,x,y,r);g.addColorStop(0,'#5ab0ff');g.addColorStop(.7,'#1f58b0');g.addColorStop(1,'#0c2a6a');ctx.fillStyle=g;ctx.beginPath();ctx.arc(x,y,r,0,TAU);ctx.fill();
  ctx.save();ctx.beginPath();ctx.arc(x,y,r,0,TAU);ctx.clip();ctx.fillStyle='#3d9a5e';
  [[-.35,-.1,.34,.18],[.25,-.35,.3,.2],[.3,.3,.28,.16],[-.55,.45,.2,.12],[.7,-.05,.2,.14]].forEach(([a,b,w,h],i)=>{const px=((a+rot/6.28*2+3)%2-1)*1.15;ctx.beginPath();ctx.ellipse(x+px*r,y+b*r,w*r,h*r,.3*i,0,TAU);ctx.fill()});
  ctx.fillStyle='rgba(255,255,255,.35)';[[-.2,-.5,.4,.05],[.3,.1,.35,.05],[-.4,.3,.3,.04]].forEach(([a,b,w,h],i)=>{const px=((a+rot/6.28*3+3)%2-1)*1.2;ctx.beginPath();ctx.ellipse(x+px*r,y+b*r,w*r,h*r,0,0,TAU);ctx.fill()});
  ctx.restore();ctx.strokeStyle='rgba(160,210,255,.6)';ctx.lineWidth=2;ctx.beginPath();ctx.arc(x,y,r,0,TAU);ctx.stroke();ctx.restore()}
// ---------- cabina metálica ----------
function cabin(x,y,w,h,o={}){ctx.save();ctx.translate(x,y);const heat=o.heat||0;
  if(heat>0)glow(0,0,w*.9,rgba(RED,.5*heat));
  rr(-w/2,-h/2,w,h,16);ctx.fillStyle=mixc('#6c7a96','#c8402a',heat*.8);ctx.fill();ctx.save();glowStroke(heat>0?mixc(ICE,'#ff7a3a',heat):ICE,2.4,10);ctx.stroke();ctx.restore();
  rr(-w/2+8,-h/2+8,w-16,h-16,10);ctx.fillStyle=mixc('#0b1226','#3a1010',heat);ctx.fill();
  for(let k=0;k<6;k++){circ(-w/2+5,-h/2+10+k*(h-20)/5,1.6,'#e8edf7');circ(w/2-5,-h/2+10+k*(h-20)/5,1.6,'#e8edf7')}
  ctx.restore()}
// ---------- termómetro ----------
function thermo(x,y,h,v,t){ctx.save();ctx.translate(x,y);rr(-9,-h,18,h,9);ctx.fillStyle='rgba(255,255,255,.12)';ctx.fill();ctx.save();glowStroke(mixc(ICE,RED,v),2.2,8);rr(-9,-h,18,h,9);ctx.stroke();ctx.restore();
  const fh=(h-8)*v;rr(-5,-4-fh,10,fh+4,5);ctx.fillStyle=mixc('#ffd56a',RED,v);ctx.fill();circ(0,6,13,mixc('#ffd56a',RED,v),'#fff',1.6);
  for(let k=0;k<6;k++)line(9,-12-k*(h-24)/5,17,-12-k*(h-24)/5,'rgba(255,255,255,.7)',1.4);
  ctx.restore()}
// ---------- sello ----------
function stampBox(s,x,y,sz,col,t,ts,rot=-.14){if(t<ts)return;const u=t-ts,sc=1+1.6*Math.exp(-u*11),a=cl(u*14);ctx.save();ctx.globalAlpha=a;ctx.translate(x,y);ctx.rotate(rot);ctx.scale(sc,sc);
  const w=tw(s,sz)+26;ctx.save();glowStroke(col,5,12);rr(-w/2,-sz*.7,w,sz*1.4,8);ctx.stroke();ctx.restore();ctx.fillStyle='rgba(4,6,15,.55)';rr(-w/2,-sz*.7,w,sz*1.4,8);ctx.fill();txt(s,0,2,sz,col,{st:'rgba(4,6,15,.8)',sw:4});ctx.restore()}
// ---------- skyline de Moscú (genérico, siluetas) ----------
function skyline(y,col,lit,t){ctx.fillStyle=col;const B=[[-20,60,48],[34,90,36],[74,50,40],[120,110,30],[154,70,46],[204,130,34],[244,64,40],[290,96,44],[340,56,40]];
  B.forEach(([x,h,w],i)=>{ctx.fillRect(x,y-h,w,h+40);if(i%3===1){ctx.beginPath();ctx.moveTo(x+w/2-9,y-h);ctx.quadraticCurveTo(x+w/2-12,y-h-16,x+w/2,y-h-26);ctx.quadraticCurveTo(x+w/2+12,y-h-16,x+w/2+9,y-h);ctx.fill()}
    if(lit)for(let k=0;k<6;k++){const wx=x+6+(k%2)*(w/2-3),wy=y-h+10+Math.floor(k/2)*18;if(wx<x+w-6&&wy<y-4&&R(i*7+k)>.35){ctx.fillStyle='rgba(255,200,100,.7)';ctx.fillRect(wx,wy,5,7);ctx.fillStyle=col}}})}
// ---------- calendario ----------
function calPage(x,y,w,h,lbl,sub,rot=0,a=1){ctx.save();ctx.globalAlpha=a;ctx.translate(x,y);ctx.rotate(rot);rr(-w/2,-h/2,w,h,10);ctx.fillStyle=CRM;ctx.fill();ctx.fillStyle=RED;ctx.beginPath();ctx.moveTo(-w/2,-h/2+10);ctx.arcTo(-w/2,-h/2,-w/2+10,-h/2,10);ctx.lineTo(w/2-10,-h/2);ctx.arcTo(w/2,-h/2,w/2,-h/2+10,10);ctx.lineTo(w/2,-h/2+30);ctx.lineTo(-w/2,-h/2+30);ctx.closePath();ctx.fill();
  txt(sub,0,-h/2+16,13,'#fff',{wt:'800'});txt(lbl,0,8,h*.42,'#2a1a14',{wt:'900'});ctx.restore()}
// ---------- estatua / monumento ----------
function monument(x,y,s,t,lit){tr(x,y,s,0,()=>{glow(0,-70,120,rgba(AMB,.35*lit));
  ctx.beginPath();ctx.moveTo(-34,0);ctx.lineTo(-26,-46);ctx.lineTo(26,-46);ctx.lineTo(34,0);ctx.closePath();fillRim('#3a4560',AMB,1.8,8);
  ctx.beginPath();ctx.moveTo(-14,-46);ctx.lineTo(-10,-74);ctx.lineTo(10,-74);ctx.lineTo(14,-46);ctx.closePath();fillRim('#56627e',AMB,1.4,6);
  dogSide(0,-74,1.0,{col:'#e0b258',rim:'#fff3b0',run:0,tail:0,head:-.15});
  rr(-22,-34,44,10,3);ctx.fillStyle=AMB;ctx.fill()})}
// ---------- paracaídas con cápsula ----------
function chute(x,y,s,t){tr(x,y,s,Math.sin(t*2)*.08,()=>{ctx.beginPath();ctx.moveTo(-34,0);ctx.quadraticCurveTo(-30,-44,0,-46);ctx.quadraticCurveTo(30,-44,34,0);ctx.quadraticCurveTo(17,-8,0,0);ctx.quadraticCurveTo(-17,-8,-34,0);ctx.closePath();fillRim(RED,'#ffd0d4',1.4,6);
  [-34,-17,0,17,34].forEach(px=>line(px,0,px*.2,34,'rgba(255,255,255,.7)',1));circ(0,42,10,'#d9dfea',ICE,1.6);circ(0,42,4,'#0b1226')})}
function starfield(t,n,seed,a=1){stars(t,n,seed,a)}
