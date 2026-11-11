// ===== 01 · ¿Por qué y desde cuándo tenemos perros? — recursos =====
CAP.acc='#ffb547';
const N0='#050a14',N1='#15233b',FIRE='#ff8a2a',SNOW='#e6eef8',AMB='#ffb547',SIL='#070a10',ICE='#bfe3ff',WARM='#ff6b5a';
// silueta lobo y perro con LOS MISMOS puntos en el mismo orden => morph perfecto
const WOLF=[[55,-38],[50,-33],[40,-31],[34,-26],[33,-14],[30,-10],[31,0],[25,0],[24,-12],[14,-14],[0,-15],[-16,-14],[-20,-11],[-18,0],[-25,0],[-28,-10],[-33,-18],[-36,-24],[-50,-10],[-46,-22],[-36,-30],[-30,-32],[-5,-33],[18,-36],[26,-42],[29,-48],[31,-58],[36,-50],[42,-46],[52,-41]];
const DOG =[[50,-36],[47,-30],[40,-28],[34,-24],[34,-14],[30,-11],[32,0],[25,0],[24,-11],[14,-14],[0,-15],[-14,-14],[-18,-11],[-16,0],[-24,0],[-27,-9],[-31,-17],[-33,-27],[-37,-53],[-45,-41],[-36,-31],[-30,-31],[-5,-31],[18,-33],[26,-41],[27,-46],[29,-55],[35,-49],[40,-46],[48,-40]];
function beastPts(m,ph=0,wag=0,t=0){const P=morph(WOLF,DOG,cl(m));const s=Math.sin(ph)*5,c=Math.sin(ph+Math.PI)*5;
  P[6][0]+=s;P[7][0]+=s;P[13][0]+=c;P[14][0]+=c;
  if(wag){const bx=(P[17][0]+P[20][0])/2,by=(P[17][1]+P[20][1])/2,a=wag*Math.sin(t*16);[18,19].forEach(i=>{const dx=P[i][0]-bx,dy=P[i][1]-by;P[i]=[bx+dx*Math.cos(a)-dy*Math.sin(a),by+dx*Math.sin(a)+dy*Math.cos(a)]})}
  return P}
// o: {ph, wag, t, col, rim, eye, flip, al, head(bajar cabeza)}
function beast(x,y,s,m,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);if(o.rot)ctx.rotate(o.rot);
  let P=beastPts(m,o.ph||0,o.wag||0,o.t||0);
  if(o.head){const hd=o.head;P=P.map((p,i)=>(i<=4||i>=24)?[p[0]+hd*2,p[1]+hd*10]:p)}
  ctx.beginPath();P.forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));ctx.closePath();ctx.fillStyle=o.col||SIL;ctx.fill();
  if(o.rim){ctx.save();ctx.clip();ctx.strokeStyle=o.rim;ctx.lineWidth=3/s+1;ctx.globalAlpha=.85;ctx.stroke();ctx.restore()}
  if(o.eye){const ex_=lerp(41,40,m)+(o.head||0)*2,ey=lerp(-42,-40,m)+(o.head||0)*10;glow(ex_,ey,7,o.eye,.9);circ(ex_,ey,1.6,'#fff')}
  ctx.restore()}
// humano agachado (de perfil, mira a la derecha). o.arm: ángulo del brazo; o.col; o.rim
function human(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);const c=o.col||SIL;ctx.fillStyle=c;
  poly([[-16,0],[6,0],[10,-6],[4,-16],[-4,-20],[-14,-22],[-20,-12]],c);           // piernas dobladas
  poly([[-16,-20],[6,-22],[10,-48],[2,-58],[-10,-56],[-18,-44]],c);             // torso con piel
  for(let k=0;k<6;k++){poly([[-18+k*5,-22],[-15+k*5,-15],[-12+k*5,-22]],c)}     // flecos de piel
  circ(4,-66,8.5,c);poly([[-4,-70],[0,-78],[8,-76],[12,-68],[6,-72]],c);            // cabeza + pelo
  const a=o.arm===undefined?.5:o.arm;ctx.strokeStyle=c;ctx.lineWidth=5.5;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(4,-50);const ex_=4+Math.cos(a)*14,ey=-50+Math.sin(a)*14;ctx.lineTo(ex_,ey);ctx.lineTo(ex_+Math.cos(a+(o.bend||-.3))*14,ey+Math.sin(a+(o.bend||-.3))*14);ctx.stroke();
  if(o.rim){ctx.strokeStyle=o.rim;ctx.lineWidth=1.2;ctx.globalAlpha=.7;ctx.beginPath();ctx.arc(4,-66,8.5,-1.2,1.2);ctx.stroke()}
  ctx.restore()}
function fire(x,y,s,t,seed=1,al=1){ctx.save();ctx.translate(x,y);ctx.scale(s,s);
  ctx.fillStyle='#2a160c';ctx.save();ctx.rotate(.3);ctx.fillRect(-22,-4,44,7);ctx.restore();ctx.save();ctx.rotate(-.3);ctx.fillRect(-22,-4,44,7);ctx.restore();
  ctx.globalCompositeOperation='lighter';ctx.globalAlpha=al;
  [[22,'rgba(255,60,10,.55)'],[16,'rgba(255,130,20,.7)'],[9,'rgba(255,215,100,.9)']].forEach(([w,c],k)=>{ctx.fillStyle=c;for(let i=0;i<3;i++){const ph=t*(7+i*2)+seed*3+i*2,h=(44+14*Math.sin(ph))*(1-k*.22)*(.8+.4*R(i+seed)),sw=Math.sin(ph*.8)*5;ctx.beginPath();ctx.moveTo(-w*.5+(i-1)*7,0);ctx.quadraticCurveTo(-w*.6+sw+(i-1)*7,-h*.5,sw+(i-1)*5,-h);ctx.quadraticCurveTo(w*.6+sw+(i-1)*7,-h*.5,w*.5+(i-1)*7,0);ctx.closePath();ctx.fill()}});
  ctx.restore();embers(t,0,'#fff')}
function fireLight(x,y,r,t,a=1){glow(x,y,r*(1+.04*Math.sin(t*13)+.03*Math.sin(t*7.3)),'rgba(255,140,50,.42)',a);glow(x,y,r*.45,'rgba(255,190,90,.35)',a)}
function sparksUp(x,y,t,n=14,seed=1){ctx.save();for(let i=0;i<n;i++){const ph=(t*(.5+R(i+seed)*.6)+R(i*3+seed))%1;const px=x+(R(i*5+seed)-.5)*30+Math.sin(t*3+i)*6*ph,py=y-ph*120;ctx.globalAlpha=(1-ph)*.9;ctx.fillStyle=i%3?'#ffb04a':'#fff1b0';ctx.fillRect(px,py,1.6,1.6)}ctx.restore()}
function sky(t,k=1){bg(N0,N1);stars(t,90,3,.9*k);
  ctx.save();ctx.globalCompositeOperation='lighter';for(let j=0;j<3;j++){ctx.beginPath();for(let x=-80;x<=440;x+=10){const y=110+j*26+Math.sin(x*.012+t*.25+j)*28+Math.sin(x*.031-t*.4)*10;x===-80?ctx.moveTo(x,y):ctx.lineTo(x,y)}
    ctx.strokeStyle=j===1?'rgba(90,255,190,'+(.09*k)+')':'rgba(120,180,255,'+(.07*k)+')';ctx.lineWidth=26-j*6;ctx.stroke()}ctx.restore()}
function hills(y,col,amp=18,f=.012,ph=0,x0=-400,x1=1500){ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(x0,900);for(let x=x0;x<=x1;x+=12)ctx.lineTo(x,y-amp*Math.sin(x*f+ph)-amp*.5*Math.sin(x*f*2.3+ph*2));ctx.lineTo(x1,900);ctx.closePath();ctx.fill()}
function snowfall(t,n=70,seed=2,a=.8,spd=24){ctx.save();ctx.fillStyle='#fff';for(let i=0;i<n;i++){const x=(R(i+seed)*420+Math.sin(t*.6+i)*16)%420-30,y=(R(i*3+seed)*700+t*spd*(.5+R(i*5)))%700-30;ctx.globalAlpha=a*(.3+.6*R(i*7));ctx.beginPath();ctx.arc(x,y,.6+R(i)*1.4,0,TAU);ctx.fill()}ctx.restore()}
function bone(x,y,s,r,col='#e9e2cf'){tr(x,y,s,r,()=>{ctx.fillStyle=col;ctx.fillRect(-10,-2,20,4);[[-10,-2.5],[-10,2.5],[10,-2.5],[10,2.5]].forEach(p=>circ(p[0],p[1],3,col))})}
function meat(x,y,s,r){tr(x,y,s,r,()=>{ctx.fillStyle='#b2402e';ctx.beginPath();ctx.ellipse(0,0,10,7,0,0,TAU);ctx.fill();ctx.fillStyle='#e07a5f';ctx.beginPath();ctx.ellipse(-2,-1,6,4,0,0,TAU);ctx.fill();bone(10,0,.6,0)})}
// signo de interrogación (contorno grueso) y cabeza de lobo -> morph
function thick(C,w){const L=[],Rr=[];for(let i=0;i<C.length;i++){const a=C[Math.max(0,i-1)],b=C[Math.min(C.length-1,i+1)];const dx=b[0]-a[0],dy=b[1]-a[1],d=Math.hypot(dx,dy)||1,nx=-dy/d,ny=dx/d;L.push([C[i][0]+nx*w,C[i][1]+ny*w]);Rr.push([C[i][0]-nx*w,C[i][1]-ny*w])}return L.concat(Rr.reverse())}
const QC=(()=>{const c=[];for(let i=0;i<=26;i++){const a=Math.PI*1.05-i/26*Math.PI*1.45;c.push([Math.cos(a)*44,-40+Math.sin(a)*-44])}const l=c[c.length-1];for(let i=1;i<=8;i++)c.push([lerp(l[0],0,i/8),lerp(l[1],30,i/8)]);return c})();
const QPTS=SH.poly(thick(QC,13),90);
const WHEAD=SH.poly([[0,-30],[14,-34],[30,-72],[40,-30],[52,-10],[62,10],[50,20],[56,34],[36,40],[22,62],[10,80],[0,84],[-10,80],[-22,62],[-36,40],[-56,34],[-50,20],[-62,10],[-52,-10],[-40,-30],[-30,-72],[-14,-34]],90);
const QCIRC=SH.circle(0,10,62,90);
// iconos de la línea de tiempo
function wheat(x,y,s,c){tr(x,y,s,0,()=>{ctx.strokeStyle=c;ctx.lineWidth=2;line(0,20,0,-22,c,2);for(let k=0;k<5;k++){[-1,1].forEach(d=>{ctx.fillStyle=c;ctx.beginPath();ctx.ellipse(d*5,-18+k*7,3,6,d*.5,0,TAU);ctx.fill()})}})}
function city(x,y,s,c){tr(x,y,s,0,()=>{ctx.fillStyle=c;[[-22,-10,10,30],[-10,-26,12,46],[4,-18,10,38],[16,-30,10,50]].forEach(b=>ctx.fillRect(b[0],b[1],b[2],b[3]));ctx.fillStyle=N0;for(let i=0;i<10;i++)ctx.fillRect(-20+(i%4)*10,-20+Math.floor(i/4)*10+((i%4)==1?-10:0),3,4)})}
function tablet(x,y,s,c){tr(x,y,s,0,()=>{ctx.fillStyle=c;rr(-18,-24,36,48,6);ctx.fill();ctx.strokeStyle=N0;ctx.lineWidth=1.6;for(let r=0;r<5;r++)for(let k=0;k<4;k++){const xx=-12+k*8,yy=-16+r*8;ctx.beginPath();ctx.moveTo(xx,yy);ctx.lineTo(xx+4,yy+2);ctx.lineTo(xx,yy+4);ctx.stroke()}})}
// doble hélice de ADN
function helix(cx,y0,y1,t,amp=46,col1='#ffb547',col2='#7fd4ff'){const n=Math.floor((y1-y0)/9);for(let i=0;i<n;i++){const y=y0+i*9,a=y*.045+t*2.2,x1=cx+Math.sin(a)*amp,x2=cx+Math.sin(a+Math.PI)*amp,z1=Math.cos(a),z2=-z1;
  if(i%2===0){ctx.strokeStyle='rgba(255,255,255,'+(.18+.18*Math.abs(z1))+')';ctx.lineWidth=1.6;ctx.beginPath();ctx.moveTo(x1,y);ctx.lineTo(x2,y);ctx.stroke()}
  circ(x1,y,2.6+1.4*z1,rgba(col1,.55+.45*(z1+1)/2));circ(x2,y,2.6+1.4*z2,rgba(col2,.55+.45*(z2+1)/2))}}
// mapa estilizado: Gran Bretaña y Anatolia (Turquía) dentro de Europa
const EU=[[20,40],[60,30],[110,40],[150,32],[200,40],[250,30],[300,42],[330,60],[320,120],[300,150],[262,160],[240,150],[220,170],[200,160],[180,180],[150,170],[120,180],[95,160],[70,170],[50,140],[40,100]];
const GB=[[62,46],[72,30],[80,40],[76,58],[86,74],[84,90],[68,96],[60,86],[64,70],[56,60]];
const TR_=[[236,150],[262,142],[300,146],[330,150],[334,166],[300,176],[262,178],[240,172]];
function drawMap(ox,oy,s,a=1){withA(a,()=>tr(ox,oy,s,0,()=>{poly(EU,'#1d2c48','#35507e',1.2);poly(GB,'#2e4672','#5b86c8',1.4);poly(TR_,'#2e4672','#5b86c8',1.4)}))}
function pin(x,y,t,ts,col,lbl){if(t<ts)return;const u=t-ts,d=(1-eb(u/.45))*-60;ctx.save();ctx.translate(x,y+d);glow(0,-14,22,rgba(col,.6));ctx.fillStyle=col;ctx.beginPath();ctx.arc(0,-16,8,Math.PI,0);ctx.lineTo(0,0);ctx.closePath();ctx.fill();circ(0,-16,3,'#fff');ctx.restore();shock(x,y,t,ts+.4,col,26,2,.6);if(lbl)tag(lbl,x,y+14,10,col,'#081018',t,ts+.25)}
// escarcha que invade los bordes
function frost(t,p){if(p<=0)return;ctx.save();for(let i=0;i<46;i++){const side=i%4,f=R(i*3.7);let x,y;if(side===0){x=f*360;y=0}else if(side===1){x=360;y=f*640}else if(side===2){x=f*360;y=640}else{x=0;y=f*640}
  const len=(40+R(i)*120)*p,ang=Math.atan2(320-y,180-x)+(R(i*5)-.5)*1.2;ctx.strokeStyle='rgba(220,240,255,'+(.55*p)+')';ctx.lineWidth=1.3;ctx.beginPath();ctx.moveTo(x,y);const ex_=x+Math.cos(ang)*len,ey=y+Math.sin(ang)*len;ctx.lineTo(ex_,ey);ctx.stroke();
  for(let k=1;k<4;k++){const bx=lerp(x,ex_,k/4),by=lerp(y,ey,k/4),bl=len*.25;[-.7,.7].forEach(d=>{ctx.beginPath();ctx.moveTo(bx,by);ctx.lineTo(bx+Math.cos(ang+d)*bl,by+Math.sin(ang+d)*bl);ctx.stroke()})}}
  const g=ctx.createRadialGradient(180,320,120,180,320,420);g.addColorStop(0,'rgba(200,230,255,0)');g.addColorStop(1,'rgba(200,230,255,'+(.55*p)+')');ctx.fillStyle=g;ctx.fillRect(0,0,360,640);ctx.restore()}
// esqueletos (excavación)
function dogSkel(x,y,s,rv,c='#efe6cf'){tr(x,y,s,0,()=>{ctx.strokeStyle=c;ctx.fillStyle=c;ctx.lineCap='round';const n=18;
  const P=i=>{const a=Math.PI*1.1+i/n*Math.PI*1.25;return [Math.cos(a)*30,Math.sin(a)*20]};
  for(let i=0;i<n;i++){if(i/n>rv)break;const p=P(i),q=P(Math.min(n-1,i+1));line(p[0],p[1],q[0],q[1],c,3.2);circ(p[0],p[1],2.4,c);
    if(i>3&&i<12){ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(p[0],p[1]);ctx.quadraticCurveTo(p[0]*.82+5,p[1]*.82,p[0]*.52,p[1]*.5);ctx.stroke()}}
  if(rv>.15){const p=P(0);tr(p[0]-6,p[1]-2,1,.5,()=>{ctx.beginPath();ctx.ellipse(-6,0,13,7,0,0,TAU);ctx.fill();line(-18,4,0,6,c,2.4);circ(-4,-2,2.2,'#3a2a1c')})}
  if(rv>.6){line(-6,4,-14,16,c,2.2);line(-14,16,-6,22,c,2);line(4,6,-2,18,c,2.2);line(-2,18,8,22,c,2);const e=P(n-1);line(e[0],e[1],e[0]-4,e[1]+14,c,2.2);line(e[0]-4,e[1]+14,e[0]-14,e[1]+16,c,2)}
  if(rv>.85){const e=P(n-1);for(let k=0;k<5;k++)circ(e[0]+3+k*4,e[1]+2+k*3,1.6-k*.2,c)}})}
function humSkel(x,y,s,rv,c='#efe6cf'){tr(x,y,s,0,()=>{withA(cl(rv*2),()=>{circ(-58,0,9,c);circ(-61,-2,2,'#3a2a1c');circ(-55,-2,2,'#3a2a1c');ctx.lineWidth=2.4;line(-48,0,8,0,c,2.4);for(let k=0;k<6;k++){ctx.lineWidth=1.6;ctx.strokeStyle=c;ctx.beginPath();ctx.ellipse(-36+k*5,0,2,8,0,0,TAU);ctx.stroke()}
  line(8,0,40,-6,c,2.4);line(8,0,40,7,c,2.4);line(40,-6,62,-4,c,2.2);line(40,7,62,6,c,2.2);line(-40,0,-18,-14,c,2);line(-40,0,-18,14,c,2)})})}
function fishBone(x,y,s,c='#f6d38a'){tr(x,y,s,0,()=>{line(-14,0,12,0,c,1.6);for(let k=0;k<5;k++){line(-8+k*4,0,-11+k*4,-5,c,1.2);line(-8+k*4,0,-11+k*4,5,c,1.2)}poly([[12,0],[18,-5],[18,5]],c);circ(-16,0,3,c)})}
// mano señalando (estilo plano)
function handPoint(x,y,s,c='#f2b48a'){tr(x,y,s,0,()=>{ctx.fillStyle='#3a6ea5';rr(-70,-12,30,26,6);ctx.fill();ctx.fillStyle=c;rr(-44,-14,34,30,10);ctx.fill();rr(-14,-12,46,9,4.5);ctx.fill();rr(-16,0,14,8,4);ctx.fill();rr(-18,8,14,8,4);ctx.fill();ctx.fillStyle='rgba(0,0,0,.1)';rr(24,-11,6,7,3);ctx.fill()})}
function cartoonDog(x,y,s,o={}){ // perro moderno sentado, cabeza que gira (o.look -1..1) y cola
  tr(x,y,s,0,()=>{const c='#e8a352',d='#b86f2e',hl=o.look||0,t=o.t||0;
    ctx.save();ctx.translate(-30,-18);ctx.rotate(-.6+Math.sin(t*14)*(o.wag||0));ctx.fillStyle=c;rr(-4,-30,8,32,4);ctx.fill();ctx.restore();
    ctx.fillStyle=c;ctx.beginPath();ctx.ellipse(-8,-30,30,34,0,0,TAU);ctx.fill();ctx.fillStyle='#f7e3c4';ctx.beginPath();ctx.ellipse(4,-24,14,22,0,0,TAU);ctx.fill();
    ctx.fillStyle=c;rr(-2,-12,10,14,4);ctx.fill();rr(12,-12,10,14,4);ctx.fill();
    ctx.save();ctx.translate(6+hl*6,-70);ctx.rotate(hl*.25);ctx.fillStyle=d;ctx.beginPath();ctx.ellipse(-18,-6,8,18,.4,0,TAU);ctx.fill();ctx.beginPath();ctx.ellipse(18,-6,8,18,-.4,0,TAU);ctx.fill();
      ctx.fillStyle=c;ctx.beginPath();ctx.arc(0,0,22,0,TAU);ctx.fill();ctx.fillStyle='#f7e3c4';ctx.beginPath();ctx.ellipse(hl*8,10,12,9,0,0,TAU);ctx.fill();
      circ(hl*9,5,4.2,'#2a1a10');circ(-8+hl*7,-4,3.2,'#1a1008');circ(8+hl*7,-4,3.2,'#1a1008');circ(-7+hl*7,-5,1,'#fff');circ(9+hl*7,-5,1,'#fff');ctx.restore()})}
function chimp(x,y,s,o={}){tr(x,y,s,0,()=>{const c='#3b2a22',f='#c9a487';ctx.fillStyle=c;ctx.beginPath();ctx.ellipse(0,-30,28,32,0,0,TAU);ctx.fill();circ(-26,-62,9,c);circ(26,-62,9,c);circ(-26,-62,5,f);circ(26,-62,5,f);
  circ(0,-66,24,c);ctx.fillStyle=f;ctx.beginPath();ctx.ellipse(0,-60,18,17,0,0,TAU);ctx.fill();const lx=o.look||0;circ(-7+lx*3,-66,2.6,'#1a1008');circ(7+lx*3,-66,2.6,'#1a1008');ctx.strokeStyle='#5a3a2a';ctx.lineWidth=1.5;ctx.beginPath();ctx.arc(0,-50,6,.2,Math.PI-.2);ctx.stroke()})}
function dogTag(x,y,s,r,t,o={}){tr(x,y,s,r,()=>{ctx.strokeStyle='#9a8a6a';ctx.lineWidth=3;ctx.beginPath();ctx.arc(0,-62,9,0,TAU);ctx.stroke();
  const g=ctx.createLinearGradient(-60,-50,60,60);g.addColorStop(0,'#fff1b8');g.addColorStop(.5,'#e3b14a');g.addColorStop(1,'#a8741e');ctx.fillStyle=g;
  // hueso
  ctx.beginPath();ctx.moveTo(-52,-26);ctx.lineTo(52,-26);ctx.arc(62,-34,14,Math.PI*.6,Math.PI*.2,true);ctx.arc(66,0,14,-Math.PI*.6,Math.PI*.6);ctx.arc(62,34,14,-Math.PI*.2,-Math.PI*.6,true);ctx.lineTo(-52,26);ctx.arc(-62,34,14,Math.PI*1.6,Math.PI*1.2,true);ctx.arc(-66,0,14,Math.PI*.4,Math.PI*1.6);ctx.arc(-62,-34,14,Math.PI*.8,Math.PI*.4,true);ctx.closePath();ctx.fill();
  ctx.strokeStyle='rgba(120,80,20,.6)';ctx.lineWidth=2;ctx.stroke();circ(0,-48,5,'#7a5a2a');line(0,-48,0,-53,'#9a8a6a',3)})}
