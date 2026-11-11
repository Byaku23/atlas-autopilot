// ===== Hachikō — recursos =====
CAP.acc='#ffd27a';
const CREAM='#f4ead2',VERM='#ff5a4d',GOLD='#ffd27a',INK='rgba(20,8,30,.75)',PLUM='#2a1240',SUNO='#ff8a55',NAVY='#0a1030',NAVY2='#1d2d5c',BRZ='#a9783a';
const TX=(s,x,y,sz,col,t,t0,o={})=>mtext(s,x,y,sz,col,t,t0,Object.assign({stroke:INK,sw:Math.max(4,sz*.2)},o));
const TG=(s,x,y,sz,b,f,t,t0,o={})=>tag(s,x,y,sz,b,f,t,t0,o);
// akita sentado mirando a la derecha. (0,0)=suelo. o: col, rim, tail(ángulo cola), head(inclinación), flip, al, eye
function akita(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);if(o.al!==undefined)ctx.globalAlpha*=o.al;
  const c=o.col||CREAM,d=o.shade||'#cdb892',tl=o.tail||0;
  // cola enroscada
  ctx.save();ctx.translate(-27,-30);ctx.rotate(tl);ctx.strokeStyle=c;ctx.lineWidth=9;ctx.lineCap='round';ctx.beginPath();ctx.arc(-4,-2,10,Math.PI*.2,Math.PI*1.75);ctx.stroke();ctx.restore();
  // cuerpo y anca
  ctx.fillStyle=c;ctx.beginPath();ctx.ellipse(-6,-24,24,28,-.12,0,TAU);ctx.fill();ctx.beginPath();ctx.ellipse(-14,-11,19,12,0,0,TAU);ctx.fill();
  // patas delanteras
  ctx.fillStyle=c;rr(7,-36,10,36,5);ctx.fill();ctx.fillStyle=d;rr(7,-36,2.4,36,1.2);ctx.fill();
  // cuello y cabeza
  ctx.save();ctx.translate(14,-52);ctx.rotate(o.head||0);
  ctx.fillStyle=c;poly([[-12,12],[-8,-6],[8,-8],[10,14]],c);circ(2,-12,14,c);
  ctx.beginPath();ctx.ellipse(15,-9,10,6.5,.1,0,TAU);ctx.fill();
  poly([[-8,-20],[-5,-38],[6,-24]],c);poly([[4,-24],[12,-38],[15,-20]],c);poly([[-6,-23],[-4,-33],[3,-25]],d);
  circ(25,-10,2.6,'#1c1220');circ(8,-13,1.9,o.eye||'#1c1220');
  ctx.restore();
  if(o.rim){ctx.strokeStyle=o.rim;ctx.lineWidth=1.4;ctx.globalAlpha*=.7;ctx.beginPath();ctx.ellipse(-6,-24,24,28,-.12,-2.4,-.9);ctx.stroke()}
  ctx.restore()}
// akita echado (cabeza sobre las patas)
function akitaLie(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s,s);const c=o.col||CREAM,d='#cdb892';
  ctx.fillStyle=c;ctx.beginPath();ctx.ellipse(-8,-14,38,15,0,0,TAU);ctx.fill();ctx.beginPath();ctx.ellipse(-36,-10,16,10,0,0,TAU);ctx.fill();
  ctx.strokeStyle=c;ctx.lineWidth=7;ctx.lineCap='round';ctx.beginPath();ctx.arc(-50,-16,9,Math.PI*.3,Math.PI*1.7);ctx.stroke();
  rr(10,-8,34,9,4.5);ctx.fill();circ(40,-14,12,c);ctx.beginPath();ctx.ellipse(50,-10,9,6,.1,0,TAU);ctx.fill();
  poly([[30,-22],[34,-36],[41,-24]],c);poly([[40,-24],[48,-34],[48,-20]],d);
  ctx.strokeStyle='#1c1220';ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(36,-15);ctx.lineTo(42,-14);ctx.stroke();circ(58,-10,2.4,'#1c1220');ctx.restore()}
// profesor de perfil caminando a la derecha (siluetas oscuras con sombrero)
function prof(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);const c=o.col||'#161224',ph=o.ph||0,a=Math.sin(ph)*9;
  ctx.strokeStyle=c;ctx.lineWidth=6;ctx.lineCap='round';line(0,-34,a,-2,c,6);line(0,-34,-a,-2,c,6);
  poly([[-10,-36],[10,-36],[12,-84],[-2,-92],[-12,-84]],c);   // abrigo
  circ(0,-100,9,c);rr(-11,-111,22,5,2.5);ctx.fillStyle=c;ctx.fill();rr(-7,-120,14,11,3);ctx.fill(); // sombrero
  if(o.arm!==undefined){line(2,-82,12+Math.cos(o.arm)*14,-82+Math.sin(o.arm)*14,c,5)}
  if(o.rim){ctx.strokeStyle=o.rim;ctx.lineWidth=1.2;ctx.globalAlpha=.7;ctx.beginPath();ctx.moveTo(12,-84);ctx.lineTo(10,-36);ctx.stroke()}
  ctx.restore()}
function crowd(x,y,s,col,ph){prof(x,y,s,{col,ph})}
// estación (fachada con reloj). (cx,0)=centro, suelo en y=gy
function station(cx,gy,t,o={}){const L=o.light===undefined?1:o.light;
  ctx.fillStyle=o.wall||'#3a2552';ctx.fillRect(cx-120,gy-170,240,170);
  poly([[cx-138,gy-170],[cx,gy-262],[cx+138,gy-170]],o.roof||'#24143a');
  ctx.fillStyle='#1a0e2c';ctx.fillRect(cx-124,gy-176,248,8);
  // puerta (arco) con luz
  ctx.fillStyle=mixc('#1a0e2c','#ffcf7a',L*.85);rr(cx-26,gy-100,52,100,22);ctx.fill();
  glow(cx,gy-60,90,rgba('#ffcf7a',.45*L));
  // ventanas
  [-92,-64,64,92].forEach(dx=>{ctx.fillStyle=mixc('#1a0e2c','#ffd98a',L*.8);rr(cx+dx-11,gy-130,22,42,5);ctx.fill()});
  // reloj
  circ(cx,gy-212,22,'#f4ead2','#1a0e2c',3);const ha=(o.hand||0)*TAU;line(cx,gy-212,cx+Math.sin(ha)*13,gy-212-Math.cos(ha)*13,'#1a0e2c',2.4);line(cx,gy-212,cx+Math.sin(ha*12)*17,gy-212-Math.cos(ha*12)*17,'#1a0e2c',1.6);
  TX('SHIBUYA',cx,gy-148,13,'#f4ead2',99,-1,{sw:0,stroke:null,wt:'900'})}
function lamp(x,y,s,t,col='#ffcf7a',a=1){ctx.fillStyle='#1a0e2c';ctx.fillRect(x-1.5,y,3,90*s);rr(x-7,y-6,14,12,4);ctx.fill();glow(x,y,70*s,rgba(col,.5*a));circ(x,y,4,col)}
function ground(gy,c0='#1b1030',c1='#0d0820'){vgrad(gy,gy+400,c0,c1,-600,1800);ctx.fillStyle='rgba(255,255,255,.05)';ctx.fillRect(-600,gy,1800,2)}
function dusk(k){ // k 0 = mañana, .5 = tarde, 1 = noche
  const a=[['#7fb4e8','#ffe2b8'],['#3a2a68','#ff8a55'],['#0a1030','#2a1a50']];const i=k<.5?0:1,q=k<.5?k*2:(k-.5)*2;bg(mixc(a[i][0],a[i+1][0],q),mixc(a[i][1],a[i+1][1],q))}
function sun(x,y,r,col='#ffe9b0'){glow(x,y,r*3.2,rgba(col,.4));circ(x,y,r,col)}
function skyline(gy,col,seed=1,x0=-200,x1=800){ctx.fillStyle=col;for(let x=x0,i=0;x<x1;i++){const w=22+R(i+seed)*30,h=40+R(i*3+seed)*90;ctx.fillRect(x,gy-h,w,h+2);x+=w+2}}
function petals(t,n,col,seed=1,spd=26,a=.9){ctx.save();for(let i=0;i<n;i++){const x=(R(i+seed)*420+Math.sin(t*.8+i)*24+t*10)%420-30,y=(R(i*3+seed)*700+t*spd*(.5+R(i*5)))%700-30;ctx.globalAlpha=a*(.4+.5*R(i*7));ctx.fillStyle=col;ctx.save();ctx.translate(x,y);ctx.rotate(t*1.5+i);ctx.beginPath();ctx.ellipse(0,0,3.2,1.8,0,0,TAU);ctx.fill();ctx.restore()}ctx.restore()}
function snowf(t,n=80,seed=2,a=.85,spd=26){ctx.save();ctx.fillStyle='#fff';for(let i=0;i<n;i++){const x=(R(i+seed)*420+Math.sin(t*.6+i)*16)%420-30,y=(R(i*3+seed)*700+t*spd*(.5+R(i*5)))%700-30;ctx.globalAlpha=a*(.3+.6*R(i*7));ctx.beginPath();ctx.arc(x,y,.7+R(i)*1.6,0,TAU);ctx.fill()}ctx.restore()}
function heart(x,y,s,col,a=1){withA(a,()=>tr(x,y,s,0,()=>{ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(0,6);ctx.bezierCurveTo(-14,-6,-8,-18,0,-9);ctx.bezierCurveTo(8,-18,14,-6,0,6);ctx.fill()}))}
function calCard(x,y,w,h,top,big,sub,t,col=VERM){ctx.save();ctx.translate(x,y);ctx.shadowColor='rgba(0,0,0,.5)';ctx.shadowBlur=14;ctx.fillStyle='#f6f0e0';rr(0,0,w,h,16);ctx.fill();ctx.shadowBlur=0;ctx.fillStyle=col;ctx.save();rr(0,0,w,h*.28,16);ctx.clip();ctx.fillRect(0,0,w,h*.28);ctx.restore();
  txt(top,w/2,h*.15,h*.15,'#fff',{wt:'900',f:DISP});txt(big,w/2,h*.6,big.length>3?h*.25:h*.34,'#2a1240',{wt:'900',f:DISP});if(sub)txt(sub,w/2,h*.88,h*.1,'#6a5a7a',{wt:'800',f:DISP});ctx.restore()}
function train(x,gy,col='#d8d2e6'){ctx.fillStyle=col;rr(x-170,gy-84,340,80,12);ctx.fill();ctx.fillStyle='#2a1240';ctx.fillRect(x-170,gy-34,340,6);ctx.fillStyle=VERM;ctx.fillRect(x-170,gy-46,340,5);
  for(let i=0;i<5;i++){ctx.fillStyle='#ffe3a0';rr(x-150+i*62,gy-74,40,26,5);ctx.fill()}[-85,85].forEach(dx=>{ctx.fillStyle='#8a82a0';rr(x+dx-14,gy-72,28,64,4);ctx.fill()});
  circ(x-110,gy-2,9,'#111');circ(x+110,gy-2,9,'#111')}
function statueDog(x,y,s,o={}){tr(x,y,s,0,()=>{ctx.fillStyle=o.pl||'#5a5266';rr(-44,-28,88,28,3);ctx.fill();ctx.fillStyle='#463e52';rr(-52,-8,104,8,2);ctx.fill();if(!o.nodog)akita(0,-28,1.1,{col:o.col||BRZ,shade:o.sh||'#7a5524',eye:'#2a1a08'})})}
function news(x,y,s,r,t,o={}){tr(x,y,s,r,()=>{ctx.shadowColor='rgba(0,0,0,.5)';ctx.shadowBlur=16;ctx.fillStyle='#efe6cc';rr(-110,-150,220,300,6);ctx.fill();ctx.shadowBlur=0;
  txt('TOKYO ASAHI',0,-128,19,'#241a2c',{wt:'900',f:SERIF});ctx.fillStyle='#241a2c';ctx.fillRect(-98,-110,196,2);ctx.fillRect(-98,-106,196,1);
  txt('1932',-60,-86,16,VERM,{wt:'900',f:DISP});
  ctx.fillStyle='#d9ceb0';rr(-98,-70,100,86,3);ctx.fill();akita(-48,6,.78,{col:'#fff7e6',shade:'#bfae88'});
  for(let i=0;i<6;i++){ctx.fillStyle='#6a5e70';ctx.fillRect(10,-68+i*10,88,3)}
  for(let i=0;i<9;i++){ctx.fillStyle='#8a7f8f';ctx.fillRect(-98,30+i*10,196,3)}ctx.fillStyle=VERM;ctx.fillRect(-98,22,70,4)})}
