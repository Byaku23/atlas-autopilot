// ===== 21 · Bucéfalo — escenas =====
const T0=T;
const HC={col:HRS,dark:HRS2,rim:GOLD};
// ---------- S0 · gancho: caballo encabritado, niño ----------
function s0(t,u){
  const gy=430,rear=(.55+.06*Math.sin(t*4))*(1-eio(win(t,E.logro-.35,E.logro+.35)));
  const c=camAt(t,[[0,190,350,1.45],[1.4,190,350,1.45,0,'lin'],[2.7,180,320,1.0,0,'eio']]);
  bg('#1a0c2e','#ff9a4a');
  world(c,()=>{
    vgrad(-500,gy,'#1a0c2e','#ff8a3d',-700,1100);starsW0(t);
    sunO(270,330,46,t,.9);wallFar(gy,'#6a2a3a');sandFloor(gy);
    tr(150,gy,1.9,-1.0*rear,()=>horse(0,0,1,Object.assign({ph:t*9*(1-cl(rear*2)),t,head:-.15},HC)));
    if(t>E.nino-.3){const q=eo(win(t,E.nino-.3,E.logro-.3)),px=lerp(-40,70,q);person(px,gy+6,1.35,{robe:'#e8d8b0',cape:RED,hair:'#c9962a',ph:t*10*(1-win(t,E.logro-.4,E.logro-.2)),arm:t>E.logro?-2.4:0,t});}
  });
  dust(t,40,'rgba(255,220,160,.7)',3,26,1.5,.8);
  shock(180,300,t,E.logro,GOLD,180,5,.6);
  TX('NADIE PODÍA MONTARLO',180,64,25,'#fff',t,-.6,{out:E.nino-.12,w:320,hl:[0],hc:GOLD});
  TX('UN NIÑO DE 12 AÑOS',180,64,26,'#fff',t,E.nino,{out:E.logro-.1,w:320,hl:[3],hc:GOLD});
  if(t>E.logro)slam('LO LOGRÓ',180,170,54,GOLD,t,E.logro,{st:INK,sw:8});
}
function starsW0(t){ctx.save();for(let i=0;i<60;i++){const x=R(i*1.7)*520-80,y=-420+R(i*2.3)*520,s=R(i+3);ctx.globalAlpha=(.3+.7*s)*(.6+.4*Math.sin(t*(1+s*3)+i));ctx.fillStyle='#fff';ctx.fillRect(x,y,1.6,1.6)}ctx.restore()}
// ---------- S1 · se llamaba Bucéfalo, trece talentos ----------
function s1(t,u){
  const gy=430;bg('#ffcf8a','#e8863d');
  vgrad(0,gy,'#ffcf8a','#e8863d');wallFar(gy,'#9a5a3a');sandFloor(gy);
  const hx=lerp(430,250,eo(win(t,T0[1],T0[1]+.6)));
  horse(hx,gy,1.5,Object.assign({ph:t*5*(1-win(t,T0[1]+.5,T0[1]+.7)),t,head:.1+.05*Math.sin(t*2)},HC));
  const tp=eo(win(t,E.trat-.2,E.trat+.6)),tx=lerp(-50,70,tp),ar=t>E.ofre?-1.6-.2*Math.sin((t-E.ofre)*5):0;
  person(tx,gy+4,1.6,{robe:'#5a8a6a',hair:'#3a2418',beard:true,arm:ar,ph:t*9*(1-tp),t});
  slam('BUCÉFALO',180,116,44,GOLD,t,E.bucef,{st:INK,sw:7});
  if(t>E.trece-.1){const n=Math.min(13,countV(0,13,t,E.trece-.1,.7));txt(fmtN(Math.max(0,n),0),112,236,76,GOLD,{wt:'900',st:INK,sw:9,sc:1+.12*wob(t-E.trece,14,5)});
    tag('TALENTOS',112,276,20,RED,'#fff',t,E.tal-.05)}
  if(t>E.trece-.1&&t<E.fort+.9){const q=t-E.trece;for(let i=0;i<13;i++){const ts=E.trece+i*.05;if(t<ts)continue;const k=t-ts,cx=lerp(60,170,R(i)),cy=Math.min(330,-20+k*k*260+k*40);coin(cx,cy,7,k*8)}}
  if(t>E.fort){burst(112,236,t,E.fort,[GOLD,'#fff'],30,170,.9,3);shock(112,236,t,E.fort,GOLD,120,4,.5);tag('UNA FORTUNA',180,470,22,GOLD,'#2a1608',t,E.fort-.05)}
  TX('LO OFRECIERON A FILIPO',180,52,20,'#fff',t,E.ofre-.3,{w:330,out:E.trece-.2});
}
// ---------- S2 · se encabritaba, nadie se acercaba, rechazado ----------
function s2(t,u){
  const gy=430;bg('#ffcf8a','#e8863d');vgrad(0,gy,'#ffcf8a','#e8863d');wallFar(gy,'#9a5a3a');sandFloor(gy);
  const rear=t>E.encab-.1?(.8+.12*Math.sin(t*6))*eo(win(t,E.encab-.1,E.encab+.35)):.1;
  const sk=t>E.encab&&t<E.encab+.5?Math.sin(t*70)*2:0;
  tr(205+sk,gy,2.0,-.62*rear,()=>horse(0,0,1,Object.assign({ph:t*12*(1-rear),t,head:-.2},HC)));
  // cortesanos: se acercan y huyen
  [0,1,2].forEach(i=>{const run=win(t,E.nadie-.05+i*.12,E.corte+.6),x0=40+i*34,x=x0-eo(run)*150-(i%2)*10,ap=win(t,T0[2]+.2+i*.2,T0[2]+1.0),xx=lerp(-40,x0,eo(ap));
    if(run>0.98)return;const px=run>0?x:xx;person(px,gy+8+i*5,1.25,{robe:['#5a8a6a','#c9a46a','#6a7ab0'][i],hair:'#3a2418',ph:t*14*(run>0?1:0),arm:run>0?-2.2:0,q:t>E.nadie&&run<.3?1:0,t,flip:run>0})});
  person(320,gy+6,1.5,{robe:'#3a6ad0',hair:'#6a4a20',beard:true,crown:true,cape:'#8a1a3a',arm:t>E.rech?-2.0:0,t});
  TX('SE ENCABRITABA',180,64,29,'#fff',t,E.encab-.1,{out:E.nadie-.15,sh:'rgba(224,65,74,.6)'});
  TX('NADIE DE LA CORTE',180,60,24,'#fff',t,E.nadie-.12,{out:E.rech-.25,w:330,hl:[0],hc:GOLD});
  stampBox('RECHAZADO',180,330,40,RED,t,E.rech,-.14);
  if(t>E.rech)burst(180,330,t,E.rech,[RED,'#fff',GOLD],30,200,.8,3);
}
// ---------- S3 · la apuesta ----------
function s3(t,u){
  bg('#134a5c','#2e8c8a');
  const gy=450;ctx.fillStyle='#1f5a58';ctx.fillRect(0,gy,360,200);ctx.fillStyle='rgba(255,255,255,.18)';ctx.fillRect(0,gy,360,3);
  glow(180,300,200,'rgba(255,210,122,.15)');
  person(78,gy+14,2.3,{robe:'#e8d8b0',cape:RED,hair:'#c9962a',arm:t>E.domo-.1?-1.9-.15*Math.sin((t-E.domo)*6):0,t});
  horse(272,gy+10,1.2,Object.assign({ph:0,t,head:-.1,flip:true},HC));
  TX('«YO LO DOMO MEJOR»',180,64,25,'#fff',t,E.yo-.1,{out:E.apost-.15,w:340,hl:[3],hc:GOLD});
  if(t>E.apost){const q=eb((t-E.apost)/.5),dy=(1-q)*-300;purse(180,298+dy,1.7,'13');if(t>E.apost&&t<E.apost+.3)burst(180,298,t,E.apost,[GOLD,'#fff'],26,180,.8,3);shock(180,298,t,E.apost,GOLD,130,4,.5)}
  TX('PAGARÍA EL CABALLO',180,60,24,'#fff',t,E.apost+.1,{out:E.frac+.5,w:340,hl:[1],hc:GOLD});
  TX('ENTERO',180,94,34,GOLD,t,E.entero-.1,{out:E.frac+.5});
  if(t>E.frac)tag('SI FRACASABA',180,490,22,RED,'#fff',t,E.frac-.05);
}
// ---------- S4 · lo que todos pasaron por alto: su sombra ----------
function s4(t,u){
  bg('#2a1a3a','#c06a3a');vgrad(0,440,'#2a1a3a','#c06a3a');
  ctx.fillStyle='#8a5a2a';ctx.fillRect(0,440,360,220);ctx.fillStyle='rgba(255,230,170,.3)';ctx.fillRect(0,440,360,3);
  sunO(24,330,30,t,.95);
  const shake=t>E.miedo?Math.sin(t*38)*1.8*Math.min(1,(t-E.miedo)/.4):0;
  if(t>E.bucef4-.1){glow(150,360,150,'rgba(255,230,160,.3)')}
  const sh=eo(win(t,E.sombra-.1,E.sombra+.8));
  if(sh>0)horseShadow(160,444,1.7,.9,.55*sh);
  horse(150+shake,440,1.7,Object.assign({ph:0,t,head:t>E.miedo?-.15:.1,flip:false},HC));
  // niño observa
  person(52,452,1.5,{robe:'#e8d8b0',cape:RED,hair:'#c9962a',t});
  if(t>E.vio&&t<E.bucef4){const q=win(t,E.vio,E.vio+.4);ctx.save();ctx.globalAlpha=.5*q*(1-win(t,E.bucef4-.3,E.bucef4));ctx.strokeStyle=GOLD;ctx.lineWidth=2;ctx.setLineDash([5,5]);ctx.lineDashOffset=-t*30;ctx.beginPath();ctx.moveTo(56,388);ctx.lineTo(150,340);ctx.stroke();ctx.restore()}
  // cortesanos que no ven
  if(t>E.todos-.2)[0,1,2].forEach(i=>{const a=eo(win(t,E.todos-.2+i*.15,E.todos+.4+i*.15));person(250+i*34,458+i*4,1.1,{robe:['#5a8a6a','#c9a46a','#6a7ab0'][i],hair:'#3a2418',q:a,al:a,flip:true,t})});
  if(t>E.miedo)for(let k=0;k<3;k++){const q=((t-E.miedo)*1.3+k/3)%1;ctx.save();ctx.globalAlpha=(1-q)*.9;ctx.fillStyle='#bfe6ff';ctx.beginPath();ctx.ellipse(222+k*8,340+q*34,2.6,4.4,0,0,TAU);ctx.fill();ctx.restore()}
  TX('LO QUE TODOS IGNORARON',180,62,22,'#fff',t,E.vio-.15,{out:E.bucef4-.1,w:340,hl:[2],hc:GOLD});
  TX('MIEDO A SU SOMBRA',180,62,26,'#fff',t,E.miedo-.2,{out:E.sombra+.9,w:340,hl:[3],hc:GOLD});
  if(t>E.sombra)tag('SU PROPIA SOMBRA',180,500,20,RED,'#fff',t,E.sombra-.05);
}
// ---------- S5 · gira al sol, calma, salta ----------
function s5(t,u){
  bg('#ff9a4a','#ffd27a');vgrad(0,440,'#ff8a3d','#ffd27a');
  const s=eo(win(t,E.sol-.2,E.sol+.9));sunO(36,330-30*s,34+22*s,t,1);
  ctx.fillStyle='#b8823f';ctx.fillRect(0,440,360,220);ctx.fillStyle='rgba(255,235,180,.4)';ctx.fillRect(0,440,360,3);
  const facing=t>E.giro-.05,calm=eo(win(t,E.calma,E.calma+.6)),flipH=facing;
  const wb=t>E.giro&&t<E.giro+.5?Math.sin((t-E.giro)*30)*2.4:0;
  const shadowA=.55*(1-eo(win(t,E.sol-.2,E.sol+.6)));
  horseShadow(210,444,1.6,.9,shadowA,{flip:false});
  horse(210+wb,440,1.6,Object.assign({ph:0,t,head:.1+.5*calm-.3*(1-calm)*(facing&&!calm?1:0),flip:flipH},HC));
  // niño: toma cabeza, luego salta
  const jp=win(t,E.salto-.05,E.lomo),jx=lerp(52,213,jp),jy=452-Math.sin(jp*Math.PI)*120-(jp>=1?(74*1.6-6):0)*1+(jp<1?0:0);
  if(jp<1){person(jx,jp>0?452-Math.sin(jp*Math.PI)*120-jp*100:452,1.5,{robe:'#e8d8b0',cape:RED,hair:'#c9962a',arm:t>E.hablo?-1.6:0,t})}
  else{ctx.save();ctx.translate(213,0);person(0,440-(74*1.6)+22*1.6,1.5,{robe:'#e8d8b0',cape:RED,hair:'#c9962a',arm:-2.4,t});ctx.restore();burst(213,350,t,E.lomo,[GOLD,'#fff',RED],36,220,1.0,3);shock(213,350,t,E.lomo,GOLD,150,5,.7)}
  TX('LO GIRÓ HACIA EL SOL',180,62,24,'#fff',t,E.giro-.1,{out:E.calma-.15,w:340,hl:[3],hc:GOLD});
  TX('LE HABLÓ CON CALMA',180,62,26,'#fff',t,E.calma-.2,{out:E.salto-.1,w:340,hl:[3],hc:GOLD});
  if(t>E.salto-.1)tag('SALTÓ A SU LOMO',180,480,20,GOLD,'#2a1608',t,E.salto-.05);
}
// ---------- S6 · Filipo y Plutarco ----------
function s6(t,u){
  bg('#3a1626','#7a2a3a');glow(180,260,240,'rgba(255,210,122,.12)');
  const q=eb(win(t,T0[6],T0[6]+.5));
  person(280,500,2.1,{robe:'#3a6ad0',hair:'#6a4a20',beard:true,crown:true,cape:'#8a1a3a',arm:-2.0+.15*Math.sin(t*3),t});
  const pc=eb(win(t,E.plut-.3,E.plut+.4));
  if(pc>0){tr(130,252,pc,0,()=>{parch(0,0,230,250)});
    ctx.save();ctx.globalAlpha=pc;tag('SEGÚN PLUTARCO',130,150,15,RED,'#fff',t,E.plut-.05);ctx.restore()}
  TX('ORGULLOSO',180,60,32,GOLD,t,E.orgul-.1,{out:E.plut-.2,sh:'rgba(255,184,74,.6)'});
  if(t>E.reino-.3){const ink='#2a1608';TX('«BUSCA UN REINO',130,196,17,ink,t,E.reino-.1,{stroke:null,sw:0,w:210,wt:'900'});TX('DIGNO DE TI»',130,222,17,ink,t,E.digno-.1,{stroke:null,sw:0,w:210,wt:'900'})}
  if(t>E.maced-.2){const g=eo(win(t,E.peq-.2,E.peq+.9)),mq=eb(win(t,E.maced-.2,E.maced+.3));
    ctx.save();ctx.globalAlpha=.9*g;ctx.strokeStyle='#8a5a2a';ctx.lineWidth=2;ctx.setLineDash([6,5]);ctx.lineDashOffset=-t*12;ctx.beginPath();ctx.arc(130,314,18+62*g,0,TAU);ctx.stroke();ctx.restore();
    circ(130,314,18*mq,GOLD,'#8a5a2a',2);txt('MACEDONIA',130,314-30*g-4,12,'#2a1608',{wt:'900',al:mq});if(g>.6)txt('EL MUNDO',130,314+46*g,13,'#8a1a3a',{wt:'900',al:g})}
  if(t>E.peq-.05)tag('DEMASIADO PEQUEÑA',180,500,19,RED,'#fff',t,E.peq-.05);
}
// ---------- S7 · a la guerra, de Grecia a Asia ----------
function s7(t,u){
  bg('#2a1a10','#5a3a20');
  parch(180,300,330,330);
  ctx.save();ctx.fillStyle='rgba(138,90,42,.25)';[[70,360,50,34],[110,310,40,28],[200,250,60,34],[270,230,70,44],[300,320,40,30]].forEach(([x,y,w,h],i)=>{ctx.beginPath();ctx.ellipse(x,y,w,h,.3*i,0,TAU);ctx.fill()});ctx.restore();
  const k=eio(win(t,E.grecia,E.asia+.2));
  const P=[[56,396],[110,340],[170,330],[220,270],[290,215]];
  ctx.save();ctx.strokeStyle=RED;ctx.lineWidth=3;ctx.setLineDash([8,6]);ctx.lineDashOffset=-t*20;ctx.beginPath();ctx.moveTo(P[0][0],P[0][1]);
  const N=40;let lx=P[0][0],ly=P[0][1];for(let i=1;i<=N*k;i++){const f=i/N*4,s=Math.min(3,Math.floor(f)),r=f-s,x=lerp(P[s][0],P[s+1][0],r),y=lerp(P[s][1],P[s+1][1],r);ctx.lineTo(x,y);lx=x;ly=y}ctx.stroke();ctx.restore();
  circ(56,396,7,GOLD,'#2a1608',2);txt('GRECIA',56,420,13,'#2a1608',{wt:'900'});
  if(k>.98){circ(290,215,7,TEAL,'#2a1608',2);txt('ASIA',290,240,13,'#2a1608',{wt:'900'});burst(290,215,t,E.asia,[GOLD,TEAL,'#fff'],24,150,.8,3)}
  horse(lx,ly+10,.55,Object.assign({ph:t*12*(k<1?1:0),t},HC));
  TX('LO LLEVÓ A LA GUERRA',180,62,24,'#fff',t,E.llevo-.1,{w:340,hl:[3],hc:GOLD});
  tag('AÑOS DE GUERRA',180,104,19,RED,'#fff',t,E.anos7-.1);
}
// ---------- S8 · muere junto al río Hidaspes ----------
function s8(t,u){
  bg('#150a24','#8a3a3a');stars(t,60,4,.7);
  ctx.fillStyle='#3a1a2a';ctx.fillRect(0,470,360,200);
  // río
  ctx.save();const rv=eo(win(t,E.rio-.2,E.rio+.6));ctx.globalAlpha=rv;ctx.fillStyle='#2a5a8a';ctx.beginPath();ctx.moveTo(0,470);for(let x=0;x<=360;x+=10)ctx.lineTo(x,470+Math.sin(x*.05+t*2)*3);ctx.lineTo(360,560);ctx.lineTo(0,560);ctx.closePath();ctx.fill();
  ctx.strokeStyle='rgba(180,220,255,.5)';ctx.lineWidth=1.5;for(let i=0;i<5;i++){ctx.beginPath();for(let x=0;x<=360;x+=12)ctx.lineTo(x,486+i*13+Math.sin(x*.06+t*2+i)*2);ctx.stroke()}ctx.restore();
  glow(120,330,140,'rgba(255,184,100,.2)');
  horse(110,466,1.6,Object.assign({ph:0,t,head:.35+.25*eo(win(t,E.murio,E.murio+1.2))},HC));
  tag('RÍO HIDASPES',180,100,20,TEAL,'#04202a',t,E.hidas-.05);
  if(t>E.n326-.1){const n=Math.round(countV(0,326,t,E.n326-.1,.8));txt(String(n),150,200,78,GOLD,{wt:'900',st:INK,sw:9,sc:1+.1*wob(t-E.n326,14,5)});txt('a. C.',282,214,30,'#fff',{wt:'900',st:INK,sw:6})}
  if(t>E.trein-.05)tag('≈ 30 AÑOS',180,500,24,GOLD,'#2a1608',t,E.trein-.05);
  TX('MURIÓ',180,60,38,RED,t,E.murio-.1,{out:E.hidas-.15,sh:'rgba(224,65,74,.7)'});
}
// ---------- S9 · las fuentes no se ponen de acuerdo ----------
function s9(t,u){
  bg('#1c0c1c','#4a1a2a');
  TX('NO SE PONEN DE ACUERDO',180,52,22,'#fff',t,T0[9]+.1,{w:340,hl:[1,2],hc:GOLD});
  const a=eb(win(t,E.arriano-.3,E.arriano+.3)),b=eb(win(t,E.otros-.3,E.otros+.3));
  if(a>0){tr(95,270,a,0,()=>{rr(-80,-150,160,300,14);ctx.fillStyle='rgba(255,210,122,.12)';ctx.fill();glowStroke(GOLD,2.4,10);rr(-80,-150,160,300,14);ctx.stroke();ctx.shadowBlur=0;
    horse(-6,70,1.15,Object.assign({ph:0,t,head:.9},HC));
    for(let i=0;i<3;i++){const q=((t*.6+i/3)%1);ctx.save();ctx.globalAlpha=1-q;txt('z',28+i*10,-16-q*40,18+i*5,'#fff',{wt:'900',st:INK,sw:4});ctx.restore()}})}
  if(b>0){tr(265,270,b,0,()=>{rr(-80,-150,160,300,14);ctx.fillStyle='rgba(224,65,74,.12)';ctx.fill();glowStroke(RED,2.4,10);rr(-80,-150,160,300,14);ctx.stroke();ctx.shadowBlur=0;
    horse(-6,70,1.15,Object.assign({ph:0,t,head:.2},HC));
    line(26,-20,52,20,'#d8d8e8',3);poly([[52,20],[44,12],[56,10]],'#d8d8e8');for(let i=0;i<3;i++){const q=((t*.8+i/3)%1);circ(50-i*3,26+q*30,2.4,RED)}})}
  if(t>E.arriano)tag('ARRIANO',95,150,15,GOLD,'#2a1608',t,E.arriano-.05);
  if(t>E.otros)tag('OTROS AUTORES',265,150,15,RED,'#fff',t,E.otros-.05);
  if(t>E.canse-.1)tag('CANSANCIO Y VEJEZ',95,470,13,GOLD,'#2a1608',t,E.canse-.1);
  if(t>E.heridas-.1)tag('HERIDAS DE BATALLA',265,470,13,RED,'#fff',t,E.heridas-.1);
  if(a>.5&&b>.5){const v=eb((t-E.otros-.2)/.4);tr(180,300,v,0,()=>{circ(0,0,20,'#1c0c1c','#fff',2.2);txt('VS',0,1,16,GOLD,{st:INK,sw:3})})}
}
// ---------- S10 · lloró y fundó Bucéfala ----------
function s10(t,u){
  bg('#2a1030','#ff9a4a');vgrad(0,470,'#2a1030','#ff8a3d');sunO(270,300,40,t,.8);
  ctx.fillStyle='#b8823f';ctx.fillRect(0,470,360,200);ctx.fillStyle='rgba(255,235,180,.35)';ctx.fillRect(0,470,360,3);
  // lágrima que cae y se convierte en ciudad
  const td=win(t,E.lloro,E.fundo);if(td>0&&td<1){const ty=lerp(110,466,td*td);ctx.save();glow(180,ty,26,'rgba(160,220,255,.7)');ctx.fillStyle='#bfe6ff';ctx.beginPath();ctx.moveTo(180,ty-12);ctx.quadraticCurveTo(190,ty+4,180,ty+10);ctx.quadraticCurveTo(170,ty+4,180,ty-12);ctx.fill();ctx.restore()}
  const ck=win(t,E.fundo,E.fundo+1.3);if(ck>0){city(180,472,1.5,ck,t);shock(180,470,t,E.fundo,GOLD,140,4,.6);dust(t,30,'rgba(255,220,160,.7)',3,22,1.4,.7)}
  TX('LLORÓ SU PÉRDIDA',180,62,26,'#fff',t,T0[10]+.1,{out:E.fundo-.1,w:340,hl:[0],hc:GOLD});
  TX('FUNDÓ UNA CIUDAD',180,62,26,'#fff',t,E.fundo-.05,{out:E.bucefala-.15,w:340,hl:[2],hc:GOLD});
  if(t>E.bucefala)slam('BUCÉFALA',180,110,50,GOLD,t,E.bucefala,{st:INK,sw:8});
  if(t>E.pak-.05)tag('HOY: PAKISTÁN',180,500,22,TEAL,'#04202a',t,E.pak-.05);
}
// ---------- S11 · cierre: ¿un caballo merece una ciudad? ----------
function s11(t,u){
  bg('#2a1030','#4a1a2a');
  ctx.save();ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(196,0);ctx.lineTo(164,640);ctx.lineTo(0,640);ctx.closePath();ctx.clip();const gl=ctx.createLinearGradient(0,0,0,640);gl.addColorStop(0,'#6a4a10');gl.addColorStop(1,'#2a1a08');ctx.fillStyle=gl;ctx.fillRect(0,0,360,640);
  for(let i=0;i<20;i++)circ(R(i)*200,(R(i*3)*700+t*18)%700,2+R(i)*3,'rgba(255,210,122,.2)');ctx.restore();
  ctx.save();ctx.beginPath();ctx.moveTo(196,0);ctx.lineTo(360,0);ctx.lineTo(360,640);ctx.lineTo(164,640);ctx.closePath();ctx.clip();const gr=ctx.createLinearGradient(0,0,0,640);gr.addColorStop(0,'#0e4a56');gr.addColorStop(1,'#08202a');ctx.fillStyle=gr;ctx.fillRect(0,0,360,640);
  for(let i=0;i<20;i++)circ(200+R(i)*160,(R(i*3)*700-t*20+700)%700,2+R(i)*3,'rgba(55,200,212,.2)');ctx.restore();
  ctx.save();glowStroke('#fff',3,14);ctx.beginPath();ctx.moveTo(196,0);ctx.lineTo(164,640);ctx.stroke();ctx.restore();
  const hq=eb((t-E.nombre)/.4);
  if(t>E.merece-.05){const q=eb((t-E.merece)/.4);glow(84,300,100,'rgba(255,210,122,.35)');horse(100,330,1.25*q,Object.assign({ph:0,t,head:.1},HC))}
  if(t>E.ciudad11-.05){const q=win(t,E.ciudad11-.05,E.ciudad11+1.0);city(266,330,.78,q,t)}
  tag('SÍ',84,372,18,GOLD,'#2a1608',t,E.nombre-.1);tag('NO',270,372,18,TEAL,'#04202a',t,E.nombre-.1);
  if(t>E.nombre-.1){const vs=eb((t-E.nombre-.1)/.4);tr(180,300,vs*(1+.06*Math.sin(t*5)),0,()=>{circ(0,0,24,'#1c0c1c','#fff',2.4);txt('VS',0,1,19,GOLD,{st:INK,sw:3})})}
  if(t>E.coment){const q=eb((t-E.coment)/.4);tr(180,474,q*(1+.03*Math.sin(t*8)),0,()=>{glow(0,0,110,'rgba(255,210,122,.35)');ctx.save();glowStroke(GOLD,2.6,14);rr(-100,-26,200,52,26);ctx.stroke();ctx.restore();ctx.fillStyle=GOLD;rr(-100,-26,200,52,26);ctx.fill();txt('COMENTA',0,1,24,'#2a1608',{wt:'900'})});if(t<E.coment+.5)shock(180,474,t,E.coment,GOLD,120,4,.5)}
  TX('¿UN CABALLO MERECE',180,56,26,'#fff',t,T0[11]+.15,{hl:[1],hc:GOLD,w:340});
  TX('UNA CIUDAD CON SU NOMBRE?',180,92,18,'#fff',t,E.ciudad11-.15,{w:352,hl:[0],hc:GOLD});
  if(t>E.sig-.1)tag('SÍGUEME PARA MÁS',180,520,19,RED,'#fff',t,E.sig);
}
boot([s0,s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11],TRS,{cap:{acc:GOLD}});
