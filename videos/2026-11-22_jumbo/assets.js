// ===== 22 · Jumbo, el elefante de Barnum — recursos (cartel de circo victoriano: rojo carmesí, crema, latón, verde botella) =====
CAP.acc='#f0b43c';
const BRASS='#f0b43c',RED='#d9363e',GRN='#1f6b5a',INK='rgba(20,8,10,.92)',CRM='#f5e6c4',ELE='#8a909e',ELE2='#5d6372',NIGHT='#0b1f24';
const TX=(s,x,y,sz,col,t,t0,o={})=>mtext(s,x,y,sz,col,t,t0,Object.assign({stroke:INK,sw:Math.max(3.5,sz*.2)},o));
function glowStroke(col,lw,blur=10){ctx.strokeStyle=col;ctx.lineWidth=lw;ctx.shadowColor=col;ctx.shadowBlur=blur;ctx.lineJoin='round';ctx.lineCap='round'}
// ---------- elefante de perfil mirando a la derecha. (0,0)=suelo bajo el vientre. o: flip, ph (paso), tr (trompa 0..1 sube), thin (0..1 flaco), t, col, dark, rim, al, down (cabeza baja), ear ----------
function ele(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);if(o.al!==undefined)ctx.globalAlpha*=o.al;
  const c=o.col||ELE,d=o.dark||ELE2,a=Math.sin(o.ph||0)*9,th=o.thin||0,by=35-th*9,dn=(o.down||0)*12,tl=Math.sin((o.t||0)*3)*4,k=o.tr||0,ef=Math.sin((o.t||0)*2.2)*.08+(o.ear||0);
  line(-32,-42,-34-a,-6,d,15);line(22,-42,24+a,-6,d,15);ctx.fillStyle=d;ctx.beginPath();ctx.ellipse(-34-a,-3,9,4,0,0,TAU);ctx.fill();ctx.beginPath();ctx.ellipse(24+a,-3,9,4,0,0,TAU);ctx.fill();
  line(-50,-72,-57+tl,-38,d,3.4);circ(-57+tl,-36,3.4,d);
  ctx.fillStyle=c;ctx.beginPath();ctx.ellipse(-2,-66,52,by,0,0,TAU);ctx.fill();
  line(-18,-42,-20+a,-6,c,16);line(36,-42,38-a,-6,c,16);ctx.fillStyle=c;ctx.beginPath();ctx.ellipse(-20+a,-3,9,4,0,0,TAU);ctx.fill();ctx.beginPath();ctx.ellipse(38-a,-3,9,4,0,0,TAU);ctx.fill();
  if(th>.3){ctx.strokeStyle='rgba(30,34,46,.55)';ctx.lineWidth=1.6;for(let i=0;i<5;i++){ctx.beginPath();ctx.arc(-10+i*9-th*0,-66,28-i*2,.35,1.35);ctx.stroke()}}
  ctx.save();ctx.translate(58,-80+dn);
  circ(0,0,24,c);
  // trompa: polígono que se afina
  const P=[],Q=[],n=12,ex=22+8*k+Math.sin((o.t||0)*2)*2*(1-k),ey=44-86*k+dn*-.4,cx=34,cy=18-20*k;
  for(let i=0;i<=n;i++){const q=i/n,bx=(1-q)*(1-q)*10+2*q*(1-q)*cx+q*q*ex,by2=(1-q)*(1-q)*(8)+2*q*(1-q)*cy+q*q*ey,w=(12-7*q)/2,dx=-(cy-8)*(1-q)*0-0,nx=Math.sin(Math.atan2(ey-8,ex-10))*w,ny=-Math.cos(Math.atan2(ey-8,ex-10))*w;P.push([bx+nx,by2+ny]);Q.push([bx-nx,by2-ny])}
  poly(P.concat(Q.reverse()),c);
  if(th>0){}
  ctx.save();ctx.translate(-14,-2);ctx.rotate(ef);ctx.fillStyle=d;ctx.beginPath();ctx.ellipse(0,0,17,26,.15,0,TAU);ctx.fill();ctx.restore();
  ctx.strokeStyle='#f6efdc';ctx.lineWidth=4.2;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(14,6);ctx.quadraticCurveTo(38,10,40,-10);ctx.stroke();
  circ(12,-8,2.3,'#10121a');
  ctx.restore();
  if(o.rim){ctx.strokeStyle=o.rim;ctx.lineWidth=1.8;ctx.globalAlpha*=.85;ctx.beginPath();ctx.ellipse(-2,-66,50,by-2,0,-2.9,-1.1);ctx.stroke();ctx.beginPath();ctx.arc(58,-80+dn,22,-2.6,-1.0);ctx.stroke()}
  ctx.restore()}
// ---------- esqueleto de elefante (contorno hueso). k = progreso de dibujo 0..1 ----------
function eleSkel(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);const col=o.col||'#f3ead2',k=o.k===undefined?1:o.k;ctx.globalAlpha*=(o.al===undefined?1:o.al);
  ctx.save();glowStroke(col,3.2,o.glow===undefined?8:o.glow);
  const seg=(f,a,b)=>cl((k-a)/(b-a))>=f;
  ctx.beginPath();ctx.moveTo(-48,-76);ctx.quadraticCurveTo(0,-104,50,-92);ctx.stroke();            // columna
  for(let i=0;i<7;i++){const q=cl(k*2-i*.1);if(q<=0)continue;const bx=-30+i*10;ctx.beginPath();ctx.moveTo(bx,-92+Math.abs(i-3)*1.8);ctx.quadraticCurveTo(bx+6,-66,bx+2,-44+q*16*0-6+q*8);ctx.stroke()}  // costillas
  ctx.beginPath();ctx.moveTo(-46,-76);ctx.lineTo(-52,-46);ctx.stroke();ctx.beginPath();ctx.ellipse(-44,-62,10,14,0,0,TAU);ctx.stroke();                        // pelvis y cola
  [[-34,-62,-36,-6],[-20,-62,-20,-6],[24,-62,26,-6],[38,-62,40,-6]].forEach(([x0,y0,x1,y1],i)=>{const q=cl(k*2.2-.3-i*.1);ctx.beginPath();ctx.moveTo(x0,y0);ctx.lineTo(lerp(x0,x1,q),lerp(y0,y1,q));ctx.stroke()});   // patas
  ctx.beginPath();ctx.ellipse(66,-88,20,24,.2,0,TAU);ctx.stroke();ctx.beginPath();ctx.arc(70,-92,4,0,TAU);ctx.stroke();                            // cráneo
  ctx.beginPath();ctx.moveTo(78,-76);ctx.quadraticCurveTo(104,-70,106,-92);ctx.stroke();                                                          // colmillo
  ctx.restore();ctx.restore()}
// ---------- locomotora de perfil mirando a la izquierda. (0,0)=riel, frente en x=-92. o: flip, t, lux (0..1 faro) ----------
function loco(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);const t=o.t||0;
  poly([[-100,0],[-80,-16],[-80,0]],'#2a2a32');
  rr(-82,-52,110,34,10);ctx.fillStyle='#17181f';ctx.fill();rr(-82,-52,110,5,4);ctx.fillStyle='#d9363e';ctx.fill();
  ctx.fillStyle='#17181f';ctx.beginPath();ctx.moveTo(-66,-52);ctx.lineTo(-70,-74);ctx.lineTo(-44,-74);ctx.lineTo(-48,-52);ctx.closePath();ctx.fill();
  rr(26,-78,44,64,4);ctx.fillStyle='#22232c';ctx.fill();rr(32,-70,30,22,3);ctx.fillStyle='#0a0c12';ctx.fill();
  ctx.fillStyle='#d9363e';ctx.fillRect(22,-82,52,6);
  circ(-86,-36,6,'#fff6c8');if(o.lux)glow(-86,-36,60*o.lux,'rgba(255,246,200,.9)');
  [-58,-26,6,44].forEach((wx,i)=>{const r=i==3?14:11;circ(wx,-r,r,'#2a2a32','#d9363e',2);const a=-(o.t||0)*(o.flip?-1:1)*8+i;for(let j=0;j<4;j++){line(wx,-r,wx+Math.cos(a+j*1.57)*r*.9,-r+Math.sin(a+j*1.57)*r*.9,'#8a8f9e',1.6)}});
  line(-58,-14,44,-14,'#8a8f9e',2.4);
  ctx.restore()}
function railBed(y,w=1000){ctx.fillStyle='#1b1f26';ctx.fillRect(-300,y,w,10);ctx.fillStyle='#8a8f9e';ctx.fillRect(-300,y,w,2);for(let i=-6;i<24;i++){ctx.fillStyle='#3a2a20';ctx.fillRect(i*30,y+3,16,7)}}
// ---------- bombillas de carpa (guirnalda) ----------
function bulbs(y,t,n=14,amp=6){for(let i=0;i<n;i++){const x=8+i*(344/(n-1)),yy=y+Math.sin(i*.9)*amp,on=Math.sin(t*5+i*1.3)>-.2;glow(x,yy,on?13:5,on?'rgba(255,214,120,.75)':'rgba(255,214,120,.2)');circ(x,yy,3.2,on?'#fff3c4':'#8a6a2a')}}
// ---------- persona sencilla (pies en y=0). o: robe, hair, hat, gun, beard, arm, ph, flip, t, al ----------
function person(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);if(o.al!==undefined)ctx.globalAlpha*=o.al;
  const robe=o.robe||'#c9a46a',skin=o.skin||'#e0b48a',sw=Math.sin(o.ph||0)*5;
  line(-4,-24,-4+sw,-1,o.hair||'#3a2418',4.6);line(4,-24,4-sw,-1,o.hair||'#3a2418',4.6);
  poly([[-10,-22],[10,-22],[8,-54],[-8,-54]],robe);
  ctx.save();ctx.translate(7,-50);ctx.rotate(o.arm||0);line(0,0,0,17,skin,4.2);if(o.gun)line(-4,15,26,4,'#1a1014',3);ctx.restore();
  circ(0,-63,8.2,skin);ctx.fillStyle=o.hair||'#3a2418';ctx.beginPath();ctx.arc(0,-65,8.6,Math.PI*1.02,TAU*1.0);ctx.fill();
  if(o.beard){ctx.fillStyle=o.hair||'#3a2418';ctx.beginPath();ctx.moveTo(-6,-60);ctx.quadraticCurveTo(0,-48,6,-60);ctx.closePath();ctx.fill()}
  if(o.hat){ctx.fillStyle='#0a0a10';ctx.fillRect(-11,-70,22,3.4);ctx.fillRect(-7,-86,14,17);ctx.fillStyle=RED;ctx.fillRect(-7,-73,14,3)}
  ctx.restore()}
// ---------- moneda y sobre ----------
function coin(x,y,r,rot=0){ctx.save();ctx.translate(x,y);ctx.scale(Math.abs(Math.cos(rot))*.8+.2,1);circ(0,0,r,BRASS,'#b07a1a',1.6);circ(0,0,r*.62,'rgba(255,255,255,0)','#b07a1a',1.2);ctx.restore()}
function envel(x,y,s,rot,col=CRM){tr(x,y,s,rot,()=>{rr(-16,-11,32,22,3);ctx.fillStyle=col;ctx.fill();ctx.strokeStyle='#a8844a';ctx.lineWidth=1.4;ctx.stroke();ctx.beginPath();ctx.moveTo(-16,-11);ctx.lineTo(0,2);ctx.lineTo(16,-11);ctx.stroke();circ(0,3,2.2,RED)})}
// ---------- cartel de protesta ----------
function sign(x,y,s,txtS,t,ts){const q=eb(cl((t-ts)/.35));if(q<=0)return;tr(x,y-(1-q)*-40,s*q,Math.sin(t*5+x)*.06,()=>{line(0,0,0,70,'#6a4a28',4);rr(-26,-34,52,38,4);ctx.fillStyle=CRM;ctx.fill();ctx.strokeStyle=RED;ctx.lineWidth=3;ctx.stroke();txt(txtS,0,-14,22,RED,{wt:'900'})})}
// ---------- sello / pergamino ----------
function stampBox(s,x,y,sz,col,t,ts,rot=-.14){if(t<ts)return;const u=t-ts,sc=1+1.6*Math.exp(-u*11),a=cl(u*14);ctx.save();ctx.globalAlpha=a;ctx.translate(x,y);ctx.rotate(rot);ctx.scale(sc,sc);
  const w=tw(s,sz)+26;ctx.save();glowStroke(col,5,12);rr(-w/2,-sz*.7,w,sz*1.4,8);ctx.stroke();ctx.restore();ctx.fillStyle='rgba(20,8,10,.6)';rr(-w/2,-sz*.7,w,sz*1.4,8);ctx.fill();txt(s,0,2,sz,col,{st:'rgba(20,8,10,.8)',sw:5,wt:'900'});ctx.restore()}
function parch(x,y,w,h,a=1){ctx.save();ctx.globalAlpha=a;ctx.shadowColor='rgba(0,0,0,.5)';ctx.shadowBlur=18;rr(x-w/2,y-h/2,w,h,10);ctx.fillStyle=CRM;ctx.fill();ctx.restore();
  ctx.save();ctx.globalAlpha=a;ctx.strokeStyle='rgba(138,90,42,.5)';ctx.lineWidth=2;rr(x-w/2+6,y-h/2+6,w-12,h-12,7);ctx.stroke();ctx.restore()}
// ---------- llamas ----------
function fire(x,y,s,t,k=1){ctx.save();ctx.translate(x,y);ctx.scale(s,s);for(let i=0;i<9;i++){const fx=(i-4)*11+Math.sin(t*9+i)*3,h=(46+R(i*3)*30)*k*(.8+.2*Math.sin(t*12+i*2)),w=10+R(i)*6;
  [['#ff4a1a',1],['#ff9a2a',.66],['#ffe27a',.36]].forEach(([c,m])=>{ctx.fillStyle=c;ctx.beginPath();ctx.moveTo(fx-w*m,0);ctx.quadraticCurveTo(fx-w*m*.9,-h*m*.6,fx+Math.sin(t*7+i)*4,-h*m);ctx.quadraticCurveTo(fx+w*m*.9,-h*m*.6,fx+w*m,0);ctx.closePath();ctx.fill()})}ctx.restore()}
function starfield(t,n,seed,a=1){stars(t,n,seed,a)}
function sunO(x,y,r,t,a=1){ctx.save();ctx.globalAlpha=a;glow(x,y,r*2.6,'rgba(255,190,90,.45)');rays(x,y,t,14,r*3,'rgba(255,220,130,.22)',1,.15,8);
  const g=ctx.createRadialGradient(x,y,r*.1,x,y,r);g.addColorStop(0,'#fff6c8');g.addColorStop(.6,'#ffd27a');g.addColorStop(1,'#ff9a3a');ctx.fillStyle=g;ctx.beginPath();ctx.arc(x,y,r,0,TAU);ctx.fill();ctx.restore()}
