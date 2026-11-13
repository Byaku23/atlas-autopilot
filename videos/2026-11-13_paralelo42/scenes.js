// ===== Paralelo 42 — escenas =====
const sk=(c,x,y)=>toScreen(c,x,y);
// S0 GANCHO: la línea dorada se traza sobre el mapa y España la sella
function s0(t,u){sea(t);glow(180,300,190,'rgba(74,168,255,.14)',1);
  land(MEX,'rgba(63,143,107,.28)','rgba(63,143,107,.6)',1.2);usMap();
  const p=eo(cl((t+.35)/2.6)),a=P42[0],b=P42[1],x=lerp(a[0],b[0],p);
  ctx.save();ctx.lineCap='round';line(a[0],a[1],x,a[1],'rgba(255,210,63,.28)',11);line(a[0],a[1],x,a[1],GOLD,3.4);ctx.restore();
  if(p<.995){quill(x,a[1],.85,-.35+Math.sin(t*22)*.05);sparks(x,a[1],t,t-.01,3,GOLD,40,.3,0)}
  else shock(b[0],b[1],t,E.s_trazo,'rgba(255,210,63,.9)',22,3,.7);
  TX('ESTA RAYA',180,92,42,'#fff',t,-.6,{sh:'rgba(255,210,63,.6)'});
  TX('LA FIRMÓ ESPAÑA',180,140,30,GOLD,t,E.s_firm-.1,{w:330});
  seal(176,368,38,RED,['ESPAÑA','1819'],t,E.s_esp);
  shock(176,368,t,E.s_esp,'rgba(229,72,58,.9)',60,4,.8);
  if(t>E.s_pos-.1){const q=eb((t-E.s_pos+.1)/.4);tr(180,478,q,0,()=>{ctx.fillStyle=CREAM;rr(-120,-26,240,52,26);ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=3;ctx.stroke();txt('¿CÓMO ES POSIBLE?',0,2,20,INK,{wt:'900',f:DISP})})}}

// S1 FRONTERA CALIFORNIA/OREGÓN → fecha → viaja a Washington
function s1(t,u){
  const k=n=>E[n]-T[1];
  const c=camAt(u,[[0,64,262,3.0],[k('f_par')-.4,64,262,3.0],[k('f_nac')-.3,120,262,2.0],[k('f_22')+1.2,200,275,1.6],[k('f_was')-.9,258,292,1.4],[11.2,232,300,1.1]]);
  world(c,()=>{sea(t);land(MEX,'rgba(63,143,107,.28)','rgba(63,143,107,.6)',1.2);usMap();
    const a=P42[0],b=P42[1];ctx.save();ctx.lineCap='round';line(a[0],a[1],b[0],b[1],'rgba(255,210,63,.28)',9);line(a[0],a[1],b[0],b[1],GOLD,3);ctx.restore();
    circ(COAST[0],COAST[1],3.4,CREAM,INK,1.2);shock(COAST[0]+4,COAST[1],t,E.f_front,'rgba(255,210,63,.9)',14,2,.8);
    if(t>E.f_was-.05){circ(DC[0],DC[1],3.2,RED,CREAM,1.2);shock(DC[0],DC[1],t,E.f_was,'rgba(229,72,58,.95)',24,2.5,.9);shock(DC[0],DC[1],t,E.f_was+.3,'rgba(229,72,58,.8)',24,2,.9)}});
  const o=sk(c,56,226),cc=sk(c,56,300);
  if(u<5.2){TX('OREGÓN',o[0],o[1],26,'#fff',t,E.f_ore-.05,{out:E.f_par+1.3});TX('CALIFORNIA',cc[0],cc[1],22,'#fff',t,E.f_cal-.05,{out:E.f_par+1.3})}
  TG('FRONTERA',180,96,16,GOLD,INK,t,E.f_front-.05,{out:E.f_par-.2});
  TG('PARALELO 42° NORTE',180,96,16,GOLD,INK,t,E.f_par-.05,{out:E.f_nac});
  slam('22 FEB 1819',180,128,48,'#fff',t,E.f_22,{stroke:INK,sw:9,sh:'rgba(255,210,63,.8)'});
  if(t>E.f_was-.05){const d=sk(c,DC[0],DC[1]);TG('WASHINGTON, D. C.',Math.min(d[0],236),d[1]-34,12,RED,'#fff',t,E.f_was-.05)}}

// S2 FLORIDA: tropas, mesa de negociación, firma
const TROOP=[[246,360],[262,368],[236,372],[252,382],[268,390],[248,400]];
function s2(t,u){sea(t);
  const c=camAt(u,[[0,238,352,2.2],[4.9,238,352,2.2],[5.7,240,304,2.0]]);
  const flip=eio(cl((t-E.p_flo)/.35));
  world(c,()=>{usMap();land(MEX,'rgba(63,143,107,.28)','rgba(63,143,107,.6)',1.2);
    land(FLO,mixc(RED,BLUE,flip),LANDE,1.4);
    TROOP.forEach((q,i)=>{const s=cl((t-E.p_tro-i*.12)/.5);if(s>0)soldier(q[0],lerp(q[1]-50,q[1],eb(s)),.62,BLUE,cl(s*3))});
    shock(252,382,t,E.p_neg,'rgba(74,168,255,.9)',40,2.5,.8);shock(252,382,t,E.p_neg+.3,'rgba(74,168,255,.7)',40,2,.8);
    if(t>E.p_flo-.05){shock(252,385,t,E.p_flo,'rgba(74,168,255,.95)',50,3,.9);sparks(252,385,t,E.p_flo,16,GOLD,50,.7,60)}});
  const f=sk(c,252,382);
  TG('ESPAÑA',f[0]-70,f[1]+8,12,RED,'#fff',t,T[2]+.3,{out:E.p_flo-.05});
  if(t>E.p_flo+.1){TG('EE. UU.',f[0]-66,f[1]+8,12,BLUE,'#fff',t,E.p_flo+.1)}
  TX('TROPAS EN FLORIDA',180,100,26,'#fff',t,E.p_tro-.25,{out:E.p_ada-.35,w:320});
  // mesa de negociación
  const pq=eb(cl((t-E.p_ada+.3)/.5));
  if(pq>.01)tr(180,185,pq,0,()=>{
    ctx.fillStyle=INK;rr(-170,-117,340,234,20);ctx.fill();ctx.fillStyle=NAV2;rr(-166,-113,332,226,18);ctx.fill();
    glow(0,-10,150,'rgba(255,210,63,.13)',1);
    const lean=wob(t-E.p_oni,8,4)*5;
    person(-100,10+Math.sin(t*3)*1,1.3,BLUE);person(100-lean,10,1.3,RED,{flip:true});
    ctx.fillStyle='#5a3d26';rr(-140,77,280,16,5);ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=2;ctx.stroke();
    TG('ADAMS · EE. UU.',-96,-92,11,BLUE,'#fff',t,E.p_ada,{});
    TG('ONÍS · ESPAÑA',96,-92,11,RED,'#fff',t,E.p_oni,{});
    // documento
    const dp=eio(cl((t-E.p_ada-.2)/(E.p_oni-E.p_ada)));const dx=lerp(-60,0,dp);
    tr(dx,48-wob(t-E.p_ced,10,5)*0,1,0,()=>{ctx.fillStyle=CREAM;rr(-38,-26,76,52,6);ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=2;ctx.stroke();ctx.strokeStyle='rgba(8,17,29,.45)';ctx.lineWidth=1.6;for(let i=0;i<3;i++){ctx.beginPath();ctx.moveTo(-28,-14+i*9);ctx.lineTo(28-i*8,-14+i*9);ctx.stroke()}
      const sg=cl((t-E.p_ced)/.45);if(sg>0){ctx.strokeStyle=RED;ctx.lineWidth=2.4;ctx.beginPath();for(let i=0;i<=24*sg;i++){const x=-28+i*2.3;ctx.lineTo(x,14+Math.sin(i*.9)*3.4)}ctx.stroke()}});
    if(t>E.p_ced-.05&&t<E.p_ced+.55)quill(-30+cl((t-E.p_ced)/.45)*52,62,.7,-.2,CREAM);
    if(t>E.p_ced)sparks(0,40,t,E.p_ced+.35,14,GOLD,50,.6,50);
  });
  if(t>E.p_flo+.1){const q=eb((t-E.p_flo-.1)/.4);tr(180,338,q,0,()=>{ctx.fillStyle=CREAM;rr(-110,-22,220,44,22);ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=3;ctx.stroke();txt('ESPAÑA CEDIÓ FLORIDA',0,2,15,INK,{wt:'900',f:DISP})})}}

// S3 LA LÍNEA DEL TRATADO: ríos → paralelo 42 → Pacífico; España renuncia a Oregón
function s3(t,u){sea(t);
  const k=n=>E[n]-T[3];
  const c=camAt(u,[[0,200,320,1.15],[k('l_dib')+1.5,200,320,1.15],[k('l_sab')-.4,150,345,1.9],[k('l_ark')-.3,140,300,1.7],[k('l_par')-.3,115,262,2.0],[k('l_rec')-.2,100,262,2.0],[k('l_pac')-.3,60,262,2.4],[k('l_ren')-.2,100,225,1.6],[k('l_ore')+.3,170,260,1.2]]);
  world(c,()=>{usMap();land(MEX,'rgba(63,143,107,.28)','rgba(63,143,107,.6)',1.2);
    ctx.save();ctx.setLineDash([5,5]);ctx.lineWidth=1.4;ctx.strokeStyle='rgba(255,255,255,'+(.45*cl((t-E.l_dib)/.4)*(1-cl((t-E.l_sab)/.5)))+')';RIV.forEach(r=>{ctx.beginPath();r.forEach((q,i)=>i?ctx.lineTo(q[0],q[1]):ctx.moveTo(q[0],q[1]));ctx.stroke()});ctx.restore();
    pathArrow(RIV[0],(t-E.l_sab+.05)/.55,BLUE,3);
    pathArrow(RIV[1],(t-E.l_roj+.05)/.5,BLUE,3);
    pathArrow(RIV[2],(t-E.l_ark+.05)/1.2,BLUE,3);
    pathArrow(RIV[3],(t-E.l_par+.35)/.7,GOLD,3.4);
    pathArrow(RIV[4],(t-E.l_rec+.2)/1.9,GOLD,4.2);
    if(t>E.l_ren-.1){const a=cl((t-E.l_ren)/.4);ctx.save();ctx.globalAlpha=.4*a;land(OREGC,RED,RED,2);ctx.restore();shock(70,200,t,E.l_ren,'rgba(229,72,58,.9)',60,3,.8)}
    shock(RIV[4][1][0],RIV[4][1][1],t,E.l_pac,'rgba(255,210,63,.95)',24,3,.8)});
  const L=(txtS,wx,wy,t0,col,out)=>{const q=sk(c,wx,wy);TG(txtS,q[0],q[1],12,col,'#fff',t,t0,{out:out})};
  TX('LA LÍNEA DEL TRATADO',180,96,26,'#fff',t,E.l_dib-.15,{out:E.l_sab-.3,w:320});
  L('RÍO SABINE',PJ(-94,31)[0]+4,PJ(-94,31)[1],E.l_sab-.05,BLUE,E.l_ark+1);
  L('RÍO ROJO',PJ(-97,33.9)[0],PJ(-97,33.9)[1]+12,E.l_roj-.05,BLUE,E.l_ark+1);
  L('RÍO ARKANSAS',PJ(-103,38)[0],PJ(-103,38)[1]-14,E.l_ark-.05,BLUE,E.l_par+.6);
  TG('PARALELO 42° N',180,96,15,GOLD,INK,t,E.l_par-.05,{out:E.l_rec-.2});
  TG('RECTA HASTA EL PACÍFICO',180,96,14,GOLD,INK,t,E.l_rec-.1,{out:E.l_ren-.2});
  // tarjeta (origen del morph)
  if(t>E.l_ore-.05){const q=eb((t-E.l_ore+.05)/.35);tr(180,290,q,0,()=>{ctx.fillStyle=CREAM;rr(-120,-60,240,120,16);ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=3.5;ctx.stroke();txt('ESPAÑA RENUNCIA',0,-14,22,RED,{wt:'900',f:DISP});txt('A OREGÓN',0,22,34,INK,{wt:'900',f:DISP})})}}

// S4 1821 → México → la raya sigue → más antiguo de Oregón
function s4(t,u){sea(t);
  const mp=eb(cl((t-E.m_mex)/.5));
  world({x:180,y:300,z:1.0,r:0},()=>{usMap();
    ctx.save();ctx.globalAlpha=.28+.72*mp;land(MEX,mixc('#2d5a85',MXC,mp),mixc(LANDE,'#9be7bf',mp),1.6);ctx.restore();
    const gl=.5+.5*Math.sin((t-E.m_raya)*7),on=t>E.m_raya?1:0;
    ctx.save();ctx.lineCap='round';line(P42[0][0],P42[0][1],P42[1][0],P42[1][1],'rgba(255,210,63,'+(.25+.3*gl*on)+')',9+7*on);line(P42[0][0],P42[0][1],P42[1][0],P42[1][1],GOLD,3.4+1.4*on*gl);ctx.restore();
    if(t>E.m_ant){const a=cl((t-E.m_ant)/.4);ctx.save();ctx.globalAlpha=.7*a;land(ORE,GOLD,CREAM,2);ctx.restore();shock(36,240,t,E.m_ant,'rgba(255,210,63,.95)',44,3,.8)}
    if(t>E.m_mex-.05){shock(150,400,t,E.m_mex,'rgba(63,143,107,.95)',80,3,.9);sparks(150,410,t,E.m_ind,30,'#9be7bf',110,.9,80);}});
  TX('ENTRA EN VIGOR',180,92,28,'#fff',t,T[4]+.1,{out:E.m_1821-.25,w:320});
  slam('1821',180,112,66,GOLD,t,E.m_1821,{stroke:INK,sw:10,sh:'rgba(255,210,63,.8)'});
  if(t>E.m_mex-.05)TG('MÉXICO SE INDEPENDIZA',180,470,13,MXC,'#fff',t,E.m_mex-.05,{out:E.m_raya-.2});
  TX('LA RAYA SIGUIÓ AHÍ',180,168,22,'#fff',t,E.m_raya-.1,{out:E.m_ant-.9,w:320});
  TG('LÍMITE TERRESTRE MÁS ANTIGUO DE OREGÓN',180,470,13,GOLD,INK,t,E.m_ant-1.4,{w:330});
  if(t>E.m_ant+1.2){const q=eb((t-E.m_ant-1.2)/.35);tr(180,300,q,0,()=>{ctx.fillStyle=GOLD;rr(-120,-60,240,120,16);ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=3.5;ctx.stroke();txt('ANTES DE SER',0,-14,22,INK,{wt:'900',f:DISP});txt('ESTADO',0,24,38,RED,{wt:'900',f:DISP})})}}

// S5 EL TOPÓGRAFO (1868) y el giro: la frontera real serpentea
function s5(t,u){
  const wp=eio(cl((t-(E.g_hoy-.25))/.45));
  if(wp<1){bg('#0a1020','#203656');stars(t,40,5,.5);
    const sx=lerp(40,420,cl((t-E.g_giro)/(E.g_hoy-E.g_giro)));
    const c={x:sx+60,y:320,z:1.0,r:0};const cx=clamp=>0;
    world(c,()=>{mount(330,170,1.1,'#27446f',sx*.5,1400);mount(410,150,2.3,'#183056',sx*.8,1400);
      ctx.fillStyle='#091526';ctx.fillRect(-100,500,1600,300);
      for(let m=0;m<8;m++){const mx=100+m*60;if(sx>mx){const q=eb(cl((sx-mx)/20));tr(mx,498,q,0,()=>{line(0,0,0,-16,CREAM,2.4);circ(0,-18,3.2,GOLD,INK,1)})}}
      if(t>E.g_mal-.05){for(let b=0;b<22;b++){const bx=60+b*34;ctx.fillStyle='#0f2a22';ctx.beginPath();ctx.arc(bx,504,8+R(b)*6,Math.PI,TAU);ctx.fill()}}
      surveyor(sx,462,2.4,t*9,'#c9b88a');
      if(t>E.g_sext-.1){const q=eb((t-E.g_sext+.1)/.35);sextant(sx+58,392,1.5*q,-.2+Math.sin(t*3)*.08)}});
    dust(t,t>E.g_nieve?90:20,'rgba(255,255,255,.85)',3,t>E.g_nieve?60:14,1.7,.8);
    TX('Y HAY UN GIRO',180,92,30,GOLD,t,T[5]+.02,{out:E.g_ocho-.25,w:320});
    slam('1868',180,112,64,'#fff',t,E.g_ocho,{stroke:INK,sw:10,sh:'rgba(255,210,63,.8)'});
    TG('TOPÓGRAFO',180,190,13,GOLD,INK,t,E.g_top-.05,{out:E.g_sext-.1});
    TG('SEXTANTE',180,190,13,GOLD,INK,t,E.g_sext-.05,{out:E.g_nieve-.1});
    TG('NIEVE',110,190,13,BLUE,'#fff',t,E.g_nieve-.05);
    TG('MALEZA',250,190,13,MXC,'#fff',t,E.g_mal-.05);
  }
  if(wp>0){ctx.save();ctx.beginPath();ctx.rect(0,0,360*wp,640);ctx.clip();
    sea(t);
    const am=26*eo(cl((t-E.g_serp)/1.3));
    ctx.save();ctx.setLineDash([9,6]);ctx.lineCap='round';line(14,300,346,300,'rgba(255,210,63,.95)',3);ctx.restore();
    ctx.save();ctx.lineCap='round';ctx.lineJoin='round';ctx.strokeStyle=INK;ctx.lineWidth=8;ctx.beginPath();for(let x=14;x<=346;x+=4){const y=300+am*Math.sin(x*.045+t*1.2)*Math.sin(x*.012+1);x===14?ctx.moveTo(x,y):ctx.lineTo(x,y)}ctx.stroke();
    ctx.strokeStyle='#fff';ctx.lineWidth=4;ctx.stroke();ctx.restore();
    TX('HOY, CON TECNOLOGÍA',180,92,22,'#fff',t,E.g_hoy-.15,{out:E.g_serp-.35,w:330});TX('MODERNA',180,124,26,GOLD,t,E.g_tec,{out:E.g_serp-.35});
    TX('LA FRONTERA REAL',180,92,26,'#fff',t,E.g_serp-.2,{w:330});TX('SERPENTEA',180,130,38,GOLD,t,E.g_serp+.05,{sh:'rgba(255,210,63,.6)'});
    if(t>E.g_norte-.05){const q=eb((t-E.g_norte+.05)/.3);tr(235,235,q,0,()=>{poly([[0,-22],[14,0],[5,0],[5,20],[-5,20],[-5,0],[-14,0]],BLUE,INK,2)});TG('NORTE',235,205,11,BLUE,'#fff',t,E.g_norte)}
    if(t>E.g_sur-.05){const q=eb((t-E.g_sur+.05)/.3);tr(125,365,q,0,()=>{poly([[0,22],[14,0],[5,0],[5,-20],[-5,-20],[-5,0],[-14,0]],RED,INK,2)});TG('SUR',125,398,11,RED,'#fff',t,E.g_sur)}
    TG('PARALELO VERDADERO',100,452,12,GOLD,INK,t,E.g_verd-.05);TG('FRONTERA REAL',262,452,12,CREAM,INK,t,E.g_verd+.15);
    ctx.restore()}}

// S6 CIERRE: cedió Florida, renunció a Oregón, un trazo de pluma → debate
function s6(t,u){sea(t);glow(180,300,200,'rgba(74,168,255,.12)',1);
  const fi=eb(cl((t-E.c_esp)/.45)),oi=eb(cl((t-E.c_esp-.15)/.45));
  const fo=1-cl((t-E.c_neg+.3)/.4);
  withA(fo,()=>{
    const fs=1-cl((t-E.c_ced-.25)/.5)*0,op=t>E.c_ced?cl(1-(t-E.c_ced-1.5)/1):1;
    tr(95,205,fi*2.0,0,()=>{ctx.save();ctx.translate(-252,-383);land(FLO,RED,CREAM,1.4);ctx.restore()});
    tr(265,205,oi*2.2,0,()=>{ctx.save();ctx.translate(-36,-244);land(ORE,RED,CREAM,1.4);ctx.restore()});
    TG('FLORIDA',95,290,13,RED,'#fff',t,E.c_esp+.1);TG('OREGÓN',265,290,13,RED,'#fff',t,E.c_esp+.25);
    if(t>E.c_ced){const q=eb((t-E.c_ced)/.3);tr(95,200,q,-.2,()=>{ctx.fillStyle='rgba(8,17,29,.85)';rr(-52,-13,104,26,6);ctx.fill();txt('CEDIÓ',0,1,18,GOLD,{wt:'900',f:DISP})});shock(95,200,t,E.c_ced,'rgba(255,210,63,.9)',50,3,.8)}
    if(t>E.c_ren){const q=eb((t-E.c_ren)/.3);tr(265,200,q,.2,()=>{ctx.fillStyle='rgba(8,17,29,.85)';rr(-62,-13,124,26,6);ctx.fill();txt('RENUNCIÓ',0,1,18,GOLD,{wt:'900',f:DISP})});shock(265,200,t,E.c_ren,'rgba(255,210,63,.9)',50,3,.8)}
    // trazo de pluma
    const sg=cl((t-E.c_pluma)/.9);
    if(sg>0){ctx.save();ctx.lineCap='round';ctx.lineJoin='round';const pts=[];for(let i=0;i<=60*sg;i++){const x=40+i*4.6,y=380+Math.sin(i*.34)*20*Math.sin(i*.05+.4)-i*.2;pts.push([x,y])}
      ctx.strokeStyle='rgba(255,210,63,.3)';ctx.lineWidth=10;ctx.beginPath();pts.forEach((q,i)=>i?ctx.lineTo(q[0],q[1]):ctx.moveTo(q[0],q[1]));ctx.stroke();
      ctx.strokeStyle=CREAM;ctx.lineWidth=3.2;ctx.stroke();ctx.restore();
      const e=pts[pts.length-1];if(sg<1)quill(e[0],e[1],.9,-.25)}
    if(t>E.c_pluma)sparks(300,360,t,E.c_pluma+.8,16,GOLD,60,.7,40)});
  TX('CON UN TRAZO DE PLUMA',180,92,24,'#fff',t,E.c_pluma-.5,{w:330,out:E.c_neg-.35});
  TX('¿QUÉ FUE?',180,92,40,GOLD,t,E.c_neg-.3,{sh:'rgba(255,210,63,.6)'});
  const b1=eb(cl((t-E.c_neg+.1)/.45)),b2=eb(cl((t-E.c_rend+.1)/.45));
  tr(94,260,b1,0,()=>{ctx.fillStyle=INK;rr(-79,-52,158,104,20);ctx.fill();ctx.fillStyle=BLUE;rr(-75,-48,150,96,18);ctx.fill();txt('BUEN',0,-14,28,'#fff',{wt:'900',f:DISP});txt('NEGOCIO',0,22,28,'#fff',{wt:'900',f:DISP})});
  tr(266,260,b2,0,()=>{ctx.fillStyle=INK;rr(-79,-52,158,104,20);ctx.fill();ctx.fillStyle=RED;rr(-75,-48,150,96,18);ctx.fill();txt('RENDICIÓN',0,-14,22,'#fff',{wt:'900',f:DISP});txt('DISFRAZADA',0,22,22,'#fff',{wt:'900',f:DISP})});
  if(t>E.c_rend){const va=.5+.3*Math.sin(t*1.7);ctx.fillStyle=BLUE;rr(30,350,150*va*1.15,16,8);ctx.fill();ctx.fillStyle=RED;rr(330-150*(1-va)*1.15,350,150*(1-va)*1.15,16,8);ctx.fill()}
  if(t>E.c_com){const q=eb((t-E.c_com)/.45);tr(180,440,q,0,()=>{ctx.fillStyle='#fff';rr(-100,-26,200,52,26);ctx.fill();txt('COMENTA',10,1,22,INK);ctx.fillStyle=RED;rr(-90,-14,28,22,6);ctx.fill();poly([[-84,8],[-80,16],[-74,8]],RED)})}}
boot([s0,s1,s2,s3,s4,s5,s6],TRS,{cap:{acc:GOLD}});
