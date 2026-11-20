// ===== 20 · Laika — escenas =====
const T0=T;
function starsW(n,seed,y0,y1,t,a=1){ctx.save();for(let i=0;i<n;i++){const x=R(i*1.7+seed)*520-80,y=lerp(y0,y1,R(i*2.3+seed)),s=R(i+seed*5);ctx.globalAlpha=a*(.35+.65*s)*(.6+.4*Math.sin(t*(1+s*3)+i));ctx.fillStyle='#fff';ctx.fillRect(x,y,s<.88?1.2:2.2,s<.88?1.2:2.2)}ctx.restore()}
function dashCircle(cx,cy,r,col,lw,t,a0=0,a1=TAU){ctx.save();ctx.strokeStyle=col;ctx.lineWidth=lw;ctx.setLineDash([6,8]);ctx.lineDashOffset=-t*12;ctx.beginPath();ctx.arc(cx,cy,r,a0,a1);ctx.stroke();ctx.restore()}
// ---------- S0 · gancho: perra callejera ----------
function s0(t,u){
  const gy=430,up=eio(win(t,E.esp,E.esp+.9)),
    c=camAt(t,[[0,200,372,3.0],[1.5,200,372,3.0,0,'lin'],[2.7,180,330,1.0,0,'eio'],[E.esp,180,330,1.0,0,'lin'],[E.esp+.9,180,236,1.0,0,'eio']]);
  bg(N0,'#14224a');
  world(c,()=>{
    vgrad(-500,gy,'#03040c','#1a2e66',-700,1100);starsW(140,4,-420,420,t);
    glow(300,330,190,'rgba(255,184,74,.14)');
    skyline(gy,'#0a1024',true,t);
    ctx.fillStyle='#10192e';ctx.fillRect(-300,gy,1000,400);ctx.fillStyle='rgba(159,232,255,.15)';ctx.fillRect(-300,gy,1000,3);
    // farola
    ctx.fillStyle='#202a40';ctx.fillRect(298,gy-150,5,150);rr(290,gy-158,30,9,4);ctx.fill();ctx.save();ctx.globalAlpha=.16+.03*Math.sin(t*30);ctx.fillStyle='#ffd88a';ctx.beginPath();ctx.moveTo(296,gy-150);ctx.lineTo(322,gy-150);ctx.lineTo(380,gy);ctx.lineTo(240,gy);ctx.closePath();ctx.fill();ctx.restore();glow(305,gy-150,46,'rgba(255,216,138,.55)');
    // paso de un satélite
    if(t>E.esp){const q=(t-E.esp)/1.6;if(q<1){const sx=lerp(-30,390,q),sy=lerp(150,-30,q)-30*Math.sin(q*Math.PI);ctx.save();ctx.strokeStyle='rgba(159,232,255,.5)';ctx.lineWidth=1.6;ctx.beginPath();ctx.moveTo(sx-70*(1-q*.3),sy+36);ctx.lineTo(sx,sy);ctx.stroke();ctx.restore();sputnik(sx,sy,.5,q*3)}}
    const hd=-.5*up+.04*Math.sin(t*2);
    dogSide(150,gy,1.6,{ph:0,run:0,head:hd,t,tail:.8+.5*wob(t-E.laika0,10,4)});
    ctx.fillStyle='rgba(255,255,255,.14)';ctx.beginPath();ctx.ellipse(160,gy+3,60,6,0,0,TAU);ctx.fill();
  });
  dust(t,50,'rgba(255,255,255,.75)',3,26,1.5,.8);
  shock(180,300,t,E.laika0,AMB,180,5,.6);
  TX('UNA PERRA CALLEJERA',180,64,25,'#fff',t,-.6,{out:E.kilos-.12,w:320,hl:[2],hc:AMB});
  tag('SEIS KILOS',180,112,17,AMB,'#1a1208',t,E.kilos,{out:E.esp-.2});
  TX('AL ESPACIO',180,64,34,'#fff',t,E.esp+.1,{out:E.bill-.15,sh:'rgba(255,184,74,.7)'});
  if(t>E.bill&&t<E.laika0-.1){const q=eb((t-E.bill)/.4),sh=t>E.vuel?wob(t-E.vuel,24,7)*6:0;tr(180+sh,196,q*1.0,-.06,()=>{rr(-110,-44,220,88,12);ctx.fillStyle=CRM;ctx.fill();ctx.save();ctx.setLineDash([5,5]);ctx.strokeStyle='#8a7a5a';ctx.lineWidth=1.6;ctx.beginPath();ctx.moveTo(52,-44);ctx.lineTo(52,44);ctx.stroke();ctx.restore();txt('BILLETE',-30,-20,13,'#7a6a4a',{wt:'800'});txt('SOLO IDA  →',-30,12,27,'#2a1a14',{wt:'900'});txt('№ 1',82,0,20,RED,{wt:'900'});
      if(t>E.vuel){const k=eo((t-E.vuel)/.2);ctx.strokeStyle=RED;ctx.lineWidth=9;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-96,-34);ctx.lineTo(-96+192*k,-34+68*k);ctx.moveTo(96,-34);ctx.lineTo(96-192*k,-34+68*k);ctx.stroke()}})}
  if(t>E.laika0)slam('LAIKA',180,297,66,AMB,t,E.laika0,{st:'rgba(4,6,15,.9)',sw:8});
}
// ---------- S1 · un satélite en semanas ----------
function s1(t,u){
  bg(N0,N1);stars(t,110,6,.9);
  glow(180,260,200,'rgba(255,59,74,.16)');
  // páginas del calendario que se arrancan
  const pg=[1,2,3,4];
  pg.forEach((n,i)=>{const ts=E.sem+(3-i)*.28,q=(t-ts)/.5;if(t<T0[1]+.1||q>1)return;const out=q>0?q:0;calPage(180+eo(out)*(i%2?320:-320),250+ei(out)*140,170,190,String(n),'SEMANA',out*(i%2?.9:-.9),1-out*.5)});
  // sputnik 2 aparece
  if(t>E.sat){const q=eb((t-E.sat)/.6);dashCircle(180,250,112*q,'rgba(159,232,255,.55)',1.6,t);sputnik2(180,262,1.55*q,Math.sin(t*1.4)*.12+.05*wob(t-E.sat,14,5));shock(180,250,t,E.sat,AMB,150,4,.6);burst(180,250,t,E.sat,[AMB,'#fff',ICE],18,120,.7,3)}
  if(t>E.rev){burst(180,250,t,E.rev,[RED,AMB,'#fff'],40,200,1.0,3);shock(180,250,t,E.rev,RED,170,5,.7)}
  TX('SOLO UNAS SEMANAS',180,78,27,'#fff',t,T0[1]+.1,{out:E.sat-.1,w:320,hl:[1],hc:AMB});
  TX('UN SEGUNDO SATÉLITE',180,70,26,'#fff',t,E.sat+.1,{out:E.aniv-.1,w:320});
  tag('40.º ANIVERSARIO',180,440,20,RED,'#fff',t,E.aniv-.05);
  TX('DE LA REVOLUCIÓN',180,490,22,AMB,t,E.aniv+.4,{});
}
// ---------- S2 · sin regreso / perras de la calle ----------
const DOGC=['#c79a6a','#e8e2d6','#8a6a50','#d8b07a'];
function s2(t,u){
  const A=1-win(t,E.elig-.25,E.elig+.1);
  bg('#06122c','#0c2a5a');
  if(A>0){ctx.save();ctx.globalAlpha=A;ctx.strokeStyle='rgba(120,180,255,.2)';ctx.lineWidth=1;for(let x=0;x<=360;x+=24){ctx.beginPath();ctx.moveTo(x,60);ctx.lineTo(x,540);ctx.stroke()}for(let y=60;y<=540;y+=24){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(360,y);ctx.stroke()}
    // plano: cápsula arriba y Tierra abajo
    const q=win(t,E.hubo,E.hubo+.7);sputnik2(180,150,1.1*q,0,{glow:false});earth(180,470,70*q,t*.2);
    ctx.save();ctx.strokeStyle=ICE;ctx.lineWidth=3;ctx.setLineDash([8,7]);ctx.lineDashOffset=-t*20;const k=win(t,E.hubo+.5,E.reg-.2);ctx.beginPath();ctx.moveTo(210,190);const N=30;for(let i=1;i<=N*k;i++){const f=i/N,x=lerp(210,250,Math.sin(f*Math.PI)*1)+Math.sin(f*3)*0,y=lerp(190,400,f);ctx.lineTo(x+60*Math.sin(f*Math.PI),y)}ctx.stroke();ctx.restore();
    if(t>E.reg){const r=eo((t-E.reg)/.2);ctx.strokeStyle=RED;ctx.lineWidth=11;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(220,250);ctx.lineTo(220+100*r,250+100*r);ctx.moveTo(320,250);ctx.lineTo(320-100*r,250+100*r);ctx.stroke();shock(270,300,t,E.reg,RED,130,5,.6)}
    ctx.restore()}
  if(A<1){ctx.save();ctx.globalAlpha=1-A;
    vgrad(0,430,'#03040c','#14224a');starsW(60,9,0,400,t);skyline(430,'#0a1024',true,t);ctx.fillStyle='#10192e';ctx.fillRect(0,430,360,300);
    ctx.fillStyle='#202a40';ctx.fillRect(318,280,5,150);rr(300,272,34,9,4);ctx.fill();
    const lp=win(t,E.resc,E.resc+.4);ctx.save();ctx.globalAlpha=.25*lp;ctx.fillStyle='#ffd88a';ctx.beginPath();ctx.moveTo(316,282);ctx.lineTo(340,282);ctx.lineTo(380,430);ctx.lineTo(20,430);ctx.closePath();ctx.fill();ctx.restore();glow(320,278,50,'rgba(255,216,138,.6)');
    for(let k=0;k<4;k++){const ts=E.elig+k*.28,q=(t-ts)/1.0;if(q<0)continue;const x=lerp(-60,50+k*82,eo(Math.min(1,q))),done=q>=1;dogSide(x,430,.9,{col:DOGC[k],ph:done?0:t*14,run:done?0:.9,t,tail:done?1:0,rim:ICE});
      if(t>E.resc+k*.18){const s=eb((t-E.resc-k*.18)/.4);tr(x+8,372-8*Math.sin(t*3+k),s,0,()=>{poly(SH.star(0,0,11,5,5,10),AMB,'#fff',1)})}}
    if(t>E.peq){const q=eb((t-E.peq)/.5);cabin(180,305,86*q,58*q,{})}
    ctx.restore()}
  TX('SIN FORMA DE',180,70,24,'#fff',t,T0[2]+.1,{out:E.elig-.2,w:320});TX('VOLVER',180,106,34,RED,t,T0[2]+.4,{out:E.elig-.2,sh:'rgba(255,59,74,.7)'});
  TX('ELIGIERON PERRAS',180,66,27,'#fff',t,E.elig+.05,{out:E.peq-.15,w:330,hl:[1],hc:AMB});
  TX('ESPACIOS PEQUEÑOS',180,66,27,'#fff',t,E.peq+.1,{out:E.resc-.1,w:330,hl:[1],hc:ICE});
  tag('RESCATADAS DE LA CALLE',180,500,17,AMB,'#1a1208',t,E.resc+.2);
}
// ---------- S3 · entrenamiento ----------
function s3(t,u){
  bg('#050a18','#0e1c3e');
  ctx.save();ctx.strokeStyle='rgba(120,180,255,.1)';ctx.lineWidth=1;for(let x=0;x<=360;x+=30){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,640);ctx.stroke()}ctx.restore();
  const sq=eio(win(t,E.cab,E.peq3+.4)),w=lerp(270,142,sq),h=lerp(150,92,sq),cx=180,cy=290;
  const press=t>E.peq3?Math.abs(wob(t-E.peq3,16,5))*5:0;
  cabin(cx,cy,w-press,h,{});
  dogSide(cx-16,cy+h/2-10,lerp(1.0,.82,sq),{ph:0,run:0,t,tail:.6,head:.05*Math.sin(t*3)});
  if(t>E.cab&&t<E.peq3+1.2){[-1,1].forEach(sx=>{const px=cx+sx*(w/2+26+8*Math.sin(t*8));tr(px,cy,1,sx>0?Math.PI:0,()=>{poly([[-14,-10],[6,-10],[6,-18],[22,0],[6,18],[6,10],[-14,10]],AMB,'#fff',1.2)})})}
  if(t>E.peq3)shock(cx,cy,t,E.peq3,AMB,120,4,.5);
  // gelatina
  if(t>E.gel-.4){const q=eb((t-E.gel+.4)/.5);tr(276,436,q,.6,()=>{rr(-12,-52,24,64,8);ctx.fillStyle='#d9dfea';ctx.fill();ctx.fillStyle=RED;ctx.fillRect(-12,-18,24,10);rr(-5,12,10,10,2);ctx.fillStyle='#8896b0';ctx.fill()});
    const j=win(t,E.gel,E.gel+.9);tr(222,478,1,0,()=>{ctx.beginPath();ctx.moveTo(-34,-14);ctx.lineTo(34,-14);ctx.quadraticCurveTo(30,12,0,12);ctx.quadraticCurveTo(-30,12,-34,-14);ctx.closePath();fillRim('#d9dfea',ICE,1.6,6);
      ctx.fillStyle=AMB;ctx.beginPath();ctx.ellipse(0,-14,30*j,(8+4*Math.sin(t*9)*.3)*j+1,0,0,TAU);ctx.fill();ctx.fillStyle='rgba(255,255,255,.5)';ctx.beginPath();ctx.ellipse(-9,-16,7*j,2.4*j,0,0,TAU);ctx.fill()});
    if(t>E.gel&&t<E.gel+.9){ctx.strokeStyle=AMB;ctx.lineWidth=6;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(248,444);ctx.quadraticCurveTo(236,456,224,452+22*win(t,E.gel,E.gel+.5));ctx.stroke()}}
  TX('ENTRENAMIENTO',180,66,31,'#fff',t,E.ent,{out:E.peq3+.8,sh:'rgba(159,232,255,.6)'});
  TX('CABINAS CADA VEZ',180,110,22,AMB,t,E.cab+.1,{out:E.peq3+.8,w:330});TX('MÁS PEQUEÑAS',180,140,26,'#fff',t,E.peq3,{out:E.peq3+1.3});
  TX('COMIDA EN GELATINA',180,170,22,'#fff',t,E.gel+.15,{w:340,hl:[2],hc:AMB});
}
// ---------- S4 · despegue y órbita ----------
function launchY(t){const uu=Math.max(0,t-(E.nov+1.0));return 520-(uu>0?(30*uu*uu+950*uu*uu*uu*.9):0)}
function s4(t,u){
  const orb=t>=E.sput-.12;
  if(!orb){
    const ry=launchY(t),shk=t>E.nov+.2?(Math.random()*0,Math.sin(t*90)*1.6*Math.min(1,(t-E.nov)/1.5)):0;
    const cyy=Math.min(330,ry-120),c={x:180+shk,y:cyy,z:1,r:0};bg(N0,N1);
    world(c,()=>{vgrad(-2400,520,'#02030a','#24427f',-700,1200);starsW(220,11,-2400,500,t);
      ctx.fillStyle='#10192e';ctx.fillRect(-300,520,1000,500);ctx.fillStyle='rgba(159,232,255,.15)';ctx.fillRect(-300,520,1000,3);
      for(let k=-4;k<=4;k++){ctx.fillStyle='#1a2644';ctx.fillRect(180+k*34-3,520,6,60)}
      ctx.fillStyle='#202a40';ctx.fillRect(112,430,12,90);ctx.fillRect(236,430,12,90);
      if(t>E.nov+.5)smoke(180,520,t,E.nov+.5,50,'210,220,235',3.0);
      rocket(180,ry,1.25,t,t>E.nov+.8?1:0);
      if(t>E.nov+.8)sparks(180,ry+10,t,E.nov+.8,18,AMB,160,.8,300)});
    if(t>E.nov+.8&&t<E.desp+.2)shock(180,520-20,t,E.nov+.8,AMB,160,4,.6);
    tag('3 NOV 1957',180,64,26,AMB,'#1a1208',t,E.tres-.05);
    TX('SPUTNIK 2',180,110,34,'#fff',t,E.nov+.2,{sh:'rgba(255,184,74,.7)',out:E.desp+.3});
    if(t>E.desp)slam('¡DESPEGUE!',180,300,46,AMB,t,E.desp,{st:'rgba(4,6,15,.9)',sw:7});
  }else{
    bg(N0,'#0a1440');starsW(160,13,-40,640,t);
    const ec=[180,640],er=330,ang=-Math.PI/2-.45+(t-E.sput)*.065,R0=er+44,sx=ec[0]+Math.cos(ang)*R0,sy=ec[1]+Math.sin(ang)*R0;
    earth(ec[0],ec[1],er,t*.05);
    if(t>E.orb-.3)dashCircle(ec[0],ec[1],R0,'rgba(159,232,255,.6)',1.6,t,-Math.PI*.95,-Math.PI*.05);
    sputnik2(sx,sy,.8,ang+Math.PI/2);
    if(t>E.prim){const q=eb((t-E.prim)/.4),k=t>E.her?eb((t-E.her)/.6):0,bx=lerp(sx+6,180,k),by=lerp(sy-52,260,k);glow(bx,by,60*(1+k),rgba(AMB,.4));laikaFace(bx,by,lerp(.38,1.05,k)*q,{glow:false,t,blink:Math.sin(t*1.3)>.97?1:0});ctx.save();glowStroke(AMB,3,10);ctx.beginPath();ctx.arc(bx,by,lerp(.38,1.05,k)*q*66,0,TAU);ctx.stroke();ctx.restore()}
    const fl=1-win(t,E.sput-.12,E.sput+.35);if(fl>0){ctx.fillStyle='rgba(255,255,255,'+fl+')';ctx.fillRect(0,0,360,640)}
    TX('PRIMER SER VIVO',180,66,29,'#fff',t,E.prim,{out:E.her-.15,w:330,hl:[1],hc:AMB});TX('EN ORBITAR LA TIERRA',180,104,22,ICE,t,E.orb-.05,{out:E.her-.15,w:330});
    if(t>E.her){rays(180,260,t,16,300,'rgba(255,184,74,.35)',1,.4,10);burst(180,200,t,E.her,[AMB,'#fff',RED],40,220,1.2,3);shock(180,260,t,E.her,AMB,200,5,.7);slam('HEROÍNA',180,120,56,AMB,t,E.her,{st:'rgba(4,6,15,.9)',sw:8})}
  }
}
// ---------- S5 · la versión oficial ----------
function s5(t,u){
  bg('#14090f','#2a0f1c');glow(180,250,240,'rgba(255,59,74,.18)');
  const q=eb((t-E.ofi+.3)/.6),sh=t>E.ment?wob(t-E.ment,22,7)*5:0;
  tr(180+sh,262,1,-.03+.02*sh/5,()=>{ctx.save();ctx.translate(0,(1-q)*520);ctx.shadowColor='rgba(0,0,0,.6)';ctx.shadowBlur=24;rr(-130,-130,260,260,8);ctx.fillStyle=CRM;ctx.fill();ctx.restore();
    ctx.save();ctx.translate(0,(1-q)*520);ctx.fillStyle='#d8caa4';ctx.fillRect(-130,-130,260,34);ctx.restore()});
  if(t>E.ofi-.3){ctx.save();ctx.translate(sh,0);
    TX('COMUNICADO OFICIAL',180,162,19,'#3a2418',t,E.ofi+.05,{stroke:null,sw:0,wt:'900'});
    TX('• VIVIÓ UNA SEMANA',180,222,18,'#2a1a14',t,E.sem5-.2,{stroke:null,sw:0,w:260});
    TX('• SE DURMIÓ SIN DOLOR',180,268,18,'#2a1a14',t,E.dolor-.2,{stroke:null,sw:0,w:260});
    ctx.restore()}
  stampBox('MENTIRA',180,340,48,RED,t,E.ment,-.14);
  if(t>E.ment)burst(180,340,t,E.ment,[RED,'#fff',AMB],30,200,.8,3);
}
// ---------- S6 · la verdad (2002) ----------
function s6(t,u){
  const heat=eio(win(t,E.sob,E.muri)),v=heat;
  bg('#050a18',mixc('#0e1c3e','#3a0f14',heat));
  const yr=Math.round(countV(1957,2002,t,T0[6]+.1,.85));
  if(t<E.asus)txt(String(yr),180,74,60,t>E.dos2?AMB:'#fff',{wt:'900',st:'rgba(4,6,15,.9)',sw:8,sc:1+.14*Math.exp(-Math.max(0,t-E.dos2)*8)*(t>E.dos2?1:0)});
  if(t<E.asus)tag('LA VERDAD',180,128,18,RED,'#fff',t,E.ver-.1);
  if(t>E.dos2+.5){
    const shk=heat>0.5?Math.sin(t*60)*1.4*heat:0;
    cabin(150+shk,300,210,118,{heat});
    const asus=win(t,E.asus,E.asus+.25);
    if(asus<1)dogSide(124+shk,336,.98,{ph:0,run:0,t,tail:.2,head:.05*Math.sin(t*4)});
    for(let k=0;k<4;k++){if(heat>0.1){const q=(t*.8+k/4)%1;ctx.save();ctx.globalAlpha=heat*(1-q)*.8;ctx.strokeStyle='#ff9a4a';ctx.lineWidth=2.4;ctx.beginPath();for(let j=0;j<=10;j++){const px=70+k*50+Math.sin(j*1.1+t*8)*5,py=236-q*50-j*4;j?ctx.lineTo(px,py):ctx.moveTo(px,py)}ctx.stroke();ctx.restore()}}
    thermo(290,392,170,v,t);txt('CALOR',290,414,13,mixc(ICE,RED,v),{wt:'800'});
    // monitor cardíaco
    ctx.save();rr(36,448,288,56,10);ctx.fillStyle='rgba(4,6,15,.7)';ctx.fill();ctx.restore();
    ctx.save();ctx.beginPath();ctx.rect(40,450,280,52);ctx.clip();ctx.strokeStyle=t>E.muri?RED:'#5aff9a';ctx.lineWidth=2.4;ctx.shadowColor=ctx.strokeStyle;ctx.shadowBlur=8;ctx.beginPath();
    for(let x=0;x<=280;x+=2){const tt=t*2.2+x/70,ph=tt%1,beat=t<E.muri?(ph<.08?-Math.sin(ph/.08*Math.PI)*8:(ph>.14&&ph<.22?Math.sin((ph-.14)/.08*Math.PI)*22:0)):0;const fade=t>E.muri?0:1;const y=476-beat*fade-(t>E.muri?0:0);x?ctx.lineTo(40+x,y):ctx.moveTo(40+x,y)}ctx.stroke();ctx.restore();
    if(t>E.muri)slam('FIN',70,436,16,RED,t,E.muri,{});
    if(t>E.horas){const q=eb((t-E.horas)/.4);tr(60,180,q,0,()=>{circ(0,0,24,'#0b1226',AMB,2.4);const a=(t-E.horas)*5;line(0,0,Math.sin(a)*16,-Math.cos(a)*16,'#fff',2.4);line(0,0,Math.sin(a*.12)*10,-Math.cos(a*.12)*10,AMB,3);circ(0,0,2.6,AMB)});tag('POCAS HORAS',180,500,19,AMB,'#1a1208',t,E.horas,{out:E.asus-.05})}
    if(asus>0){ctx.save();ctx.globalAlpha=asus*.82;ctx.fillStyle='#04060f';ctx.fillRect(0,0,360,640);ctx.restore();laikaFace(180,300,1.7*eb((t-E.asus)/.5),{fear:1,t,glow:true,halo:RED,blink:0})}
  }
  if(t>E.sob-.05&&t<E.asus)TX('SE SOBRECALENTÓ',180,168,24,'#fff',t,E.sob-.05,{out:E.asus-.1,w:330,hl:[1],hc:RED});
  if(t>E.asus)TX('ASUSTADA',180,88,36,RED,t,E.asus+.05,{sh:'rgba(255,59,74,.8)'});
}
// ---------- S7 · el satélite se quema ----------
function s7(t,u){
  bg(N0,'#0a1440');starsW(160,17,-40,640,t);
  const ec=[180,660],er=300,R0=er+36,ang=-Math.PI/2-.4+(t-T0[7])*.045,qd=win(t,E.quem,E.quem+1.5);
  const R1=lerp(R0,er-4,ei(qd)),sx=ec[0]+Math.cos(ang)*R1,sy=ec[1]+Math.sin(ang)*R1;
  earth(ec[0],ec[1],er,t*.05);
  if(t<E.quem)dashCircle(ec[0],ec[1],R0,'rgba(159,232,255,.45)',1.4,t,-Math.PI*.98,-Math.PI*.02);
  if(sy<ec[1]-er*0.99+30||qd<1){const fire=eo(win(t,E.quem,E.quem+.4));if(fire>0&&qd<1){glow(sx,sy,30+60*fire,'rgba(255,140,40,.8)');sparks(sx,sy,t,E.quem,26,AMB,120,.9,200)}
    if(qd<1)sputnik2(sx,sy,.8,ang+Math.PI/2,{glow:false})}
  if(qd>=1){const bt=E.quem+1.5;glow(sx,sy,130*Math.exp(-(t-bt)*2),'rgba(255,170,60,.8)');shock(sx,sy,t,bt,AMB,110,5,.7);burst(sx,sy,t,bt,[AMB,RED,'#fff'],40,200,.9,3)}
  // línea de meses
  const m=['NOV','DIC','ENE','FEB','MAR','ABR'];
  if(t>E.cinco-.6){for(let i=0;i<6;i++){const k=win(t,E.cinco-.4+i*.14,E.cinco-.2+i*.14),x=48+i*52;ctx.save();ctx.globalAlpha=k;circ(x,490,7*k+1,i===5?RED:AMB,'#fff',1.4);txt(m[i],x,512,11,'#fff',{wt:'800'});ctx.restore();if(i)line(48+(i-1)*52+8,490,x-8,490,'rgba(255,255,255,.5)',2)}}
  TX('SU SATÉLITE SIGUIÓ GIRANDO',180,66,22,'#fff',t,T0[7]+.1,{out:E.cinco+.7,w:300});
  tag('5 MESES',180,126,26,AMB,'#1a1208',t,E.cinco-.05,{out:E.quem+.5});
  if(t>E.quem)TX('SE QUEMÓ',180,70,38,RED,t,E.quem+.05,{sh:'rgba(255,59,74,.8)',out:E.abril-.15});
  tag('14 ABR 1958',180,70,26,AMB,'#1a1208',t,E.abril-.05);
}
// ---------- S8 · casi tres años ----------
function s8(t,u){
  const mon=t>E.dm-.3;
  bg(mon?'#05060f':'#050a18',mon?'#1a1f44':'#0e1c3e');
  if(!mon){stars(t,80,3,.8);
    const n=Math.min(3,countV(0,3,t,E.tres8-.2,.8));txt(fmtN(Math.max(0,n),0),180,190,100,AMB,{wt:'900',st:'rgba(4,6,15,.9)',sw:10,sc:1+.1*wob(t-E.tres8,14,5)});
    tag('AÑOS',180,262,26,RED,'#fff',t,E.anos-.05);
    const l=win(t,E.tres8+.2,E.vol);ctx.save();ctx.strokeStyle='rgba(255,255,255,.55)';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(50,400);ctx.lineTo(lerp(50,310,l),400);ctx.stroke();ctx.restore();
    circ(50,400,8,AMB,'#fff',1.6);txt('1957',50,428,14,'#fff',{wt:'800'});laikaFace(50,360,.3,{glow:false});
    if(l>.98){circ(310,400,8,ICE,'#fff',1.6);txt('1960',310,428,14,'#fff',{wt:'800'})}
    if(t>E.vol-.5){const q=win(t,E.vol-.5,E.vol+1.1);chute(310,lerp(250,360,eo(q)),1.1,t);if(t>E.vol)tag('VUELVEN VIVOS',180,480,22,ICE,'#04101a',t,E.vol)}
  }else{
    stars(t,90,2,.7);skyline(430,'#0a1024',true,t);ctx.fillStyle='#10192e';ctx.fillRect(0,430,360,260);dust(t,50,'rgba(255,255,255,.7)',5,24,1.4,.7);
    const m=eo(win(t,E.mon-.2,E.mon+.9));monument(180,lerp(700,500,m),1.9,t,m);
    rays(180,380,t,12,260,'rgba(255,184,74,.18)',m,.2,10);
    const yy=Math.round(countV(2000,2008,t,E.dm-.2,.6));txt(String(yy),180,86,64,AMB,{wt:'900',st:'rgba(4,6,15,.9)',sw:9,sc:1+.1*wob(t-E.dm,14,5)});
    tag('MONUMENTO EN MOSCÚ',180,140,19,AMB,'#1a1208',t,E.mon-.1);
  }
}
// ---------- S9 · cierre: ¿heroína o víctima? ----------
function s9(t,u){
  bg(N0,N1);
  ctx.save();ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(196,0);ctx.lineTo(164,640);ctx.lineTo(0,640);ctx.closePath();ctx.clip();const gl=ctx.createLinearGradient(0,0,0,640);gl.addColorStop(0,'#6a4a10');gl.addColorStop(1,'#2a1a08');ctx.fillStyle=gl;ctx.fillRect(0,0,360,640);
  for(let i=0;i<20;i++)circ(R(i)*200,(R(i*3)*700+t*18)%700,2+R(i)*3,'rgba(255,184,74,.2)');ctx.restore();
  ctx.save();ctx.beginPath();ctx.moveTo(196,0);ctx.lineTo(360,0);ctx.lineTo(360,640);ctx.lineTo(164,640);ctx.closePath();ctx.clip();const gr=ctx.createLinearGradient(0,0,0,640);gr.addColorStop(0,'#4a0f1c');gr.addColorStop(1,'#1c0810');ctx.fillStyle=gr;ctx.fillRect(0,0,360,640);
  for(let i=0;i<20;i++)circ(200+R(i)*160,(R(i*3)*700-t*20+700)%700,2+R(i)*3,'rgba(255,59,74,.2)');ctx.restore();
  ctx.save();glowStroke('#fff',3,14);ctx.beginPath();ctx.moveTo(196,0);ctx.lineTo(164,640);ctx.stroke();ctx.restore();
  const hq=eb((t-E.her9)/.4),vq=eb((t-E.vic)/.4);
  if(t>E.her9-.05){glow(92,214,110,rgba(AMB,.4));laikaFace(92,214,.95*hq,{glow:false,halo:AMB,blink:Math.sin(t*1.3)>.97?1:0});ctx.save();glowStroke(AMB,3,10);ctx.beginPath();ctx.arc(92,214,66*.95*hq,0,TAU);ctx.stroke();ctx.restore()}
  if(t>E.vic-.05){glow(268,214,110,rgba(RED,.35));laikaFace(268,214,.95*vq,{fear:.9,t,glow:false})}
  const bars=eo(win(t,E.her9+.2,E.her9+.8)),hL=104+9*Math.sin(t*2.6),hR=104-9*Math.sin(t*2.6),base=410;
  [[62,hL,AMB,'#8a5a10'],[258,hR,RED,'#6a1020']].forEach(([x,h,c1,c2],i)=>{const hh=h*bars;ctx.save();ctx.fillStyle='rgba(4,6,15,.6)';rr(x-6,base-170,56,170,12);ctx.fill();ctx.restore();
    const g=ctx.createLinearGradient(0,base-hh,0,base);g.addColorStop(0,c1);g.addColorStop(1,c2);ctx.save();glowStroke(c1,2,10);rr(x-6,base-hh,56,hh,12);ctx.stroke();ctx.restore();ctx.fillStyle=g;rr(x-6,base-hh,56,hh,12);ctx.fill();
    const pc=Math.round(50+(i?-1:1)*(hL-hR)/2*.3);txt(pc+'%',x+22,base-hh-14,17,'#fff',{st:N0,sw:4,al:bars})});
  const vs=eb((t-E.her9-.4)/.4);tr(180,300,vs*(1+.06*Math.sin(t*5)),0,()=>{circ(0,0,24,'#0c1226','#fff',2.4);txt('VS',0,1,19,AMB,{st:N0,sw:3})});
  tag('HEROÍNA',92,360,15,AMB,'#1a1208',t,E.her9-.04);tag('VÍCTIMA',268,360,15,RED,'#fff',t,E.vic-.04);
  if(t>E.coment){const q=eb((t-E.coment)/.4);tr(180,474,q*(1+.03*Math.sin(t*8)),0,()=>{glow(0,0,110,'rgba(255,184,74,.35)');ctx.save();glowStroke(AMB,2.6,14);rr(-100,-26,200,52,26);ctx.stroke();ctx.restore();ctx.fillStyle=AMB;rr(-100,-26,200,52,26);ctx.fill();txt('COMENTA',0,1,24,'#1a1208',{wt:'900'})});if(t<E.coment+.5)shock(180,474,t,E.coment,AMB,120,4,.5)}
  TX('¿HEROÍNA O VÍCTIMA?',180,56,27,'#fff',t,T0[9]+.2,{hl:[0,2],hc:AMB,sh:'rgba(255,184,74,.6)',w:340});
  TX('DE LA CARRERA ESPACIAL',180,92,17,'rgba(255,255,255,.85)',t,E.ent9+1.1,{out:E.coment-.1,w:330});
  if(t>E.sig-.1)tag('SÍGUEME PARA MÁS',180,520,19,RED,'#fff',t,E.sig);
}
boot([s0,s1,s2,s3,s4,s5,s6,s7,s8,s9],TRS,{cap:{acc:AMB}});
