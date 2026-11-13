// ===== Zama — escenas =====
// S0 GANCHO: elefante enorme + contador 80, el "perdió" lo tacha
function s0(t,u){bg('#1b1410','#3a2a1c');glow(180,330,170,'rgba(242,184,75,.22)',1);
  const cnt=80;
  const sh=wob(t-E.a_perd,9,5)*(t>E.a_perd?1:0);
  // fila de elefantes pequeños al fondo (el ejército)
  for(let r=0;r<2;r++)for(let i=0;i<6;i++){const x=40+i*56+(r%2)*20,y=170+r*34;withA(.45*cl((t-.2-i*.05-r*.12)*3),()=>elephant(x,y,.55,{ph:t*5+i,fill:'#0c0907',rim:'#6a5a44'}))}
  const e=eb(cl((t+.6)/.9));
  elephant(150+ (1-e)*-160,395,2.35,{ph:t*4,fill:'#0c0907',rim:GOLD});
  if(t>E.a_perd){const q=eb((t-E.a_perd)/.35);tr(180,300,q,-.12+sh*.02,()=>{ctx.strokeStyle=ROME;ctx.lineWidth=14;ctx.lineCap='round';line(-120,-110,120,110,ROME,14);line(120,-110,-120,110,ROME,14)})}
  TX('LLEGÓ CON',180,86,24,'#fff',t,-.6);
  TX(cnt+'',130,150,70,GOLD,t,-.6,{sh:'rgba(242,184,75,.7)'});
  TX('ELEFANTES',248,152,24,'#fff',t,E.a_elef-.05);
  slam('Y PERDIÓ',180,468,40,ROME,t,E.a_perd,{stroke:INK,sw:8,sh:'rgba(214,64,47,.7)'});
  if(t>E.a_como-.4){const q=eb((t-E.a_como+.4)/.4);tr(180,290,q,0,()=>{ctx.fillStyle=SAND;rr(-120,-90,240,180,20);ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=3;ctx.stroke();txt('?',0,8,120,INK,{wt:'900',f:DISP})})}
  shock(180,300,t,E.a_perd,'rgba(214,64,47,.8)',40,4,.7)}

// S1 MAPA DE LA CAMPAÑA: Italia → África
const ARR_SC=bez([236,340],[240,365],[248,380],[252,394],8);
const ARR_HA=bez([282,300],[330,330],[330,420],[262,440],14);
function s1(t,u){bg(SEA,SEA2);
  for(let i=0;i<6;i++){ctx.strokeStyle='rgba(255,255,255,.06)';ctx.lineWidth=1;ctx.beginPath();for(let x=0;x<=360;x+=12)ctx.lineTo(x,120+i*90+Math.sin(x*.05+t*1.5+i)*4);ctx.stroke()}
  landPoly(LAND_IT,SAND);landPoly(LAND_SI,SAND);landPoly(LAND_AF,SAND2);
  // Roma
  circ(200,150,6,ROME,INK,2);shock(200,150,t,E.b_terr,'rgba(214,64,47,.85)',10,3,.9);shock(200,150,t,E.b_terr+.35,'rgba(214,64,47,.7)',10,2.5,.9);
  if(t>E.b_terr-.1)TG('ROMA',200,125,11,ROME,'#fff',t,E.b_terr-.1);
  // Aníbal en el sur de Italia
  if(t>E.b_ani-.1){const q=spring(t-E.b_ani,12,6);tr(280,298,.5*q,0,()=>{circ(0,0,20,CART,INK,3);elephant(0,16,.55,{fill:'#0c0907',rim:CR,ph:0})})}
  // Cartago
  circ(262,396,7,CART,INK,2);if(t>E.b_cart-.15){shock(262,396,t,E.b_cart,'rgba(138,92,208,.9)',10,3,.9);TG('CARTAGO',262,420,11,CART,'#fff',t,E.b_cart-.1)}
  // flechas
  pathArrow(ARR_SC,(t-E.b_afr)/.9,ROME,4);
  pathArrow(ARR_HA,(t-E.b_volv)/1.1,CART,4,[7,5]);
  // Zama (para el dive)
  if(t>E.b_cart+.4){const q=eb((t-E.b_cart-.4)/.4);tr(200,455,q,0,()=>{line(-9,-9,9,9,GOLD,5);line(9,-9,-9,9,GOLD,5)});shock(200,455,t,E.b_cart+.45,'rgba(242,184,75,.9)',8,3,.8)}
  slam('202 a.C.',180,92,50,'#fff',t,E.b_200,{stroke:INK,sw:9,sh:'rgba(242,184,75,.8)'});
  TG('ANÍBAL AMENAZA ROMA',180,170,12,CART,'#fff',t,E.b_ani+.0,{out:E.b_esc-.1,a:'center'});
  TG('ESCIPIÓN ATACA ÁFRICA',180,262,12,ROME,'#fff',t,E.b_esc-.05);
  TG('ANÍBAL VUELVE A DEFENDER',180,540-30,12,CART,'#fff',t,E.b_volv-.05,{out:T[2]-.6})}

// ---------- campo de batalla ----------
const BX=i=>180+(i-1.5)*58, BXO=i=>180+(i-1.5)*88;
const LANES=[92,180,268];
const ELS=[{ln:0,y0:238,x0:92},{ln:1,y0:238,x0:180},{ln:2,y0:238,x0:268,turn:1},{ln:0,y0:205,x0:92,turn:-1},{ln:1,y0:205,x0:180},{ln:2,y0:205,x0:268}];
function elPos(e,t){ // devuelve [x,y,ang]
  const a0=E.z_lanz,aS=E.z_asus;
  if(t<aS){const p=eio(cl((t-a0)/(aS-a0)));const y=lerp(e.y0,330+ (e.y0>220?0:-32),p);return [e.x0,y,0]}
  const yS=330+(e.y0>220?0:-32);
  if(e.turn){const fx=e.turn>0?330:30,fy=200; if(t<E.z_otras)return [e.x0+Math.sin(t*30)*1.2,yS+Math.sin(t*20)*1.6,Math.sin(t*14)*.12];
    const p=eio(cl((t-E.z_otras)/(E.z_arro-E.z_otras)));const x=lerp(e.x0,fx,p),y=lerp(yS,fy,p);const ang=Math.atan2(fy-yS,fx-e.x0)*(p>0?1:0)-Math.PI/2+Math.PI; return [x,y,ang-Math.PI/2*0+Math.PI/2*0]}
  const d=ei(cl((t-(E.z_huec-1.6))/3.3));return [e.x0+Math.sin(t*26)*(1-d)*2,lerp(yS,740,d),Math.sin(t*18)*.1*(1-d)]}
function s2(t,u){bg('#c4a56a','#8d7242');
  const c=camAt(u,[[0,180,262,1.0],[9,180,275,1.05],[16,180,285,1.06]]);
  const open=eio(cl((t-E.z_pas)/.8));
  world(c,()=>{
    ctx.strokeStyle='rgba(60,40,20,.12)';ctx.lineWidth=1;for(let i=0;i<14;i++){ctx.beginPath();ctx.moveTo(-100,i*60);ctx.lineTo(500,i*60+20);ctx.stroke()}
    dust(t,26,'rgba(255,240,200,.5)',7,6,1.4,.4);
    // ejército de Cartago
    for(let r=0;r<3;r++)for(let i=0;i<6;i++)unit(50+i*52,112+r*20,44,15,CART,{edge:r===2?GOLD:null});
    unit(30,200,40,22,CART);unit(330,200,40,22,CART);
    // legiones romanas: 4 columnas de 3 bloques; se abren en pasillos
    for(let i=0;i<4;i++)for(let j=0;j<3;j++)unit(lerp(BX(i),BXO(i),open),400+j*36,50,28,ROME);
    // pasillos resaltados
    if(t>E.z_pas-.1){const a=.35*cl((t-E.z_pas)/.4)*(t<E.z_huec+2?1:.4);LANES.forEach(x=>{ctx.fillStyle='rgba(242,184,75,'+a+')';ctx.fillRect(x-17,372,34,150)})}
    // elefantes
    ELS.forEach((e,i)=>{const p=elPos(e,t),jump=t>E.z_asus&&t<E.z_asus+.4?wob(t-E.z_asus,16,6)*3:0;if(t>E.z_lanz-.9)topEl(p[0],p[1]+jump,1,p[2],{tr:Math.sin(t*8+i)*3,al:cl((t-E.z_lanz+.9)*2.5)})});
    // trompetas romanas
    for(let k=0;k<3;k++)shock(180,520,t,E.z_trom+k*.28,'rgba(242,184,75,.8)',14,3,1.0);
    if(t>E.z_trom-.05&&t<E.z_asus+.8){const q=eb((t-E.z_trom)/.3);tr(180,505,q,0,()=>{poly([[-14,-3],[14,-9],[14,9],[-14,3]],GOLD,INK,2);circ(-14,0,4,GOLD,INK,2)})}
    // choque con caballería cartaginesa
    [30,330].forEach((x,k)=>{const q=cl((t-E.z_arro-.1)/1.2);if(t>E.z_arro)shatter(x,200,40,22,CART,q,k*9+3)});
    sparks(30,200,t,E.z_arro+.05,14,GOLD,60,.7,80);sparks(330,200,t,E.z_arro+.05,14,GOLD,60,.7,80);
    shock(30,200,t,E.z_arro,'rgba(214,64,47,.9)',8,3,.7);shock(330,200,t,E.z_arro,'rgba(214,64,47,.9)',8,3,.7);
  });
  TG('CARTAGO',60,122,10,CART,'#fff',t,E.z_zama+.2,{out:E.z_lanz});
  TG('ROMA',60,418,10,ROME,'#fff',t,E.z_zama+.4,{out:E.z_lanz});
  TX('ZAMA',180,92,50,'#fff',t,E.z_zama-.05,{out:E.z_lanz-.15,sh:'rgba(242,184,75,.7)'});
  TG('¡ELEFANTES AL ATAQUE!',180,92,13,CART,'#fff',t,E.z_lanz-.05,{out:E.z_pas-.15});
  TG('ESCIPIÓN ABRE PASILLOS',180,92,13,GOLD,INK,t,E.z_pas-.05,{out:E.z_trom-.15});
  TG('TROMPETAS ROMANAS',180,92,13,GOLD,INK,t,E.z_trom-.05,{out:E.z_huec-.15});
  TG('PASAN DE LARGO',180,92,13,ROME,'#fff',t,E.z_huec-.05,{out:E.z_otras-.15});
  TG('OTROS DAN MEDIA VUELTA',180,92,13,CART,'#fff',t,E.z_otras-.05)}

// S3 MASINISA Y LAS LEGIONES
function s3(t,u){bg('#c4a56a','#8d7242');
  const c=camAt(u,[[0,180,268,1.0],[5,235,268,1.08],[8,180,262,1.04]]);
  const chg=eio(cl((t-E.m_ahu)/1.1)),flee=ei(cl((t-E.m_ahu-.8)/1.2));
  const adv=eio(cl((t-E.m_leg)/(E.m_lin-E.m_leg+.5)));
  const b1=cl((t-E.m_romp-.1)/.9),b2=cl((t-E.m_lin-.1)/.9);
  world(c,()=>{
    dust(t,26,'rgba(255,240,200,.5)',9,6,1.4,.4);
    // líneas cartaginesas
    for(let i=0;i<6;i++){if(b1<1)unit(50+i*52,236,44,15,CART,{al:b1>0?0:1});shatter(50+i*52,236,44,15,CART,b1,i*7+1);
      if(b2<1)unit(50+i*52,206,44,15,CART,{al:b2>0?0:1});shatter(50+i*52,206,44,15,CART,b2,i*7+40);
      unit(50+i*52,150,44,15,CART,{edge:GOLD})}
    // caballería cartaginesa (derecha) huye
    unit(lerp(322,430,flee),lerp(250,60,flee),40,22,CART,{rot:flee*.5});
    // Masinisa y su caballería numidia (dorada) carga desde abajo a la derecha
    const mx=338,my=lerp(440,262,chg)-flee*10;
    for(let k=0;k<5;k++)cav(mx-18+(k%2)*14,my+k*7,2,0,GOLD);
    if(t>E.m_mas)ctx.save(),ctx.globalAlpha=.6*cl(1-chg*1.5),line(338,430,338,300,GOLD,2),ctx.restore();
    // legiones romanas avanzan
    for(let i=0;i<6;i++)unit(50+i*52,lerp(360,226,adv),44,22,ROME);
    for(let i=0;i<6;i++)unit(50+i*52,lerp(388,254,adv),44,22,ROME);
    // caballería romana (izquierda) espera
    for(let k=0;k<4;k++)cav(24,330+k*12,1.2,0,ROME);
    shock(330,262,t,E.m_ahu+.75,'rgba(242,184,75,.9)',8,3,.7);sparks(330,262,t,E.m_ahu+.75,16,GOLD,70,.7,80);
    shock(180,226,t,E.m_romp+.1,'rgba(214,64,47,.9)',10,3.5,.7);shock(180,200,t,E.m_lin+.1,'rgba(214,64,47,.9)',10,3.5,.7);
  });
  TX('MASINISA',180,92,38,GOLD,t,E.m_mas-.05,{out:E.m_ahu-.2,sh:'rgba(242,184,75,.7)'});
  TG('CABALLERÍA NUMIDIA · ALIADA DE ROMA',180,138,11,GOLD,INK,t,E.m_num-.05,{out:E.m_ahu-.2});
  TG('¡LOS JINETES HUYEN!',180,92,14,CART,'#fff',t,E.m_ahu+.55,{out:E.m_leg-.1});
  TX('LAS LEGIONES AVANZAN',180,92,22,'#fff',t,E.m_leg-.05,{out:E.m_romp-.35});
  TG('1ª LÍNEA ROTA',180,92,15,ROME,'#fff',t,E.m_romp,{out:E.m_lin-.2});
  slam('2ª LÍNEA ROTA',180,92,28,ROME,t,E.m_lin,{stroke:INK,sw:6})}

// S4 LA TERCERA LÍNEA Y LA CABALLERÍA POR LA ESPALDA
const RPATH=bez([22,330],[-30,250],[-30,40],[60,40],10).concat(bez([60,40],[110,44],[150,40],[180,52],6).slice(1));
function pathAt(pts,p){const f=cl(p)*(pts.length-1),i=Math.min(pts.length-2,Math.floor(f)),q=f-i;return [lerp(pts[i][0],pts[i+1][0],q),lerp(pts[i][1],pts[i+1][1],q),Math.atan2(pts[i+1][0]-pts[i][0],-(pts[i+1][1]-pts[i][1]))]}
function s4(t,u){bg('#c4a56a','#8d7242');
  const pr=cl((t-E.v_volv)/(E.v_esp-E.v_volv+.1));
  const f=follow(tt=>{const p=pathAt(RPATH,cl((tt-E.v_volv)/(E.v_esp-E.v_volv+.1)));return [t<E.v_volv?180:p[0]+60,t<E.v_volv?260:p[1]+120]},t,.3);
  const c=t<E.v_volv-.3?camAt(u,[[0,180,260,1.0],[3,180,200,1.1]]):{x:lerp(180,f[0],eo((t-E.v_volv+.3)/.6)),y:lerp(200,f[1],eo((t-E.v_volv+.3)/.6)),z:lerp(1.1,1.35,eo((t-E.v_volv+.3)/.8)),r:0};
  const hit=cl((t-E.v_esp)/1.0);
  world(c,()=>{
    dust(t,26,'rgba(255,240,200,.5)',11,6,1.4,.4);
    for(let i=0;i<6;i++){unit(50+i*52,100,44,18,CART,{edge:GOLD,al:hit>0?0:1});shatter(50+i*52,100,44,18,CART,hit,i*5+2)}
    // restos de las líneas rotas
    for(let i=0;i<6;i++){ctx.save();ctx.globalAlpha=.25;ctx.fillStyle=CART;ctx.fillRect(50+i*52-18,238,36,5);ctx.fillRect(50+i*52-18,208,36,5);ctx.restore()}
    for(let i=0;i<6;i++)unit(50+i*52,200,44,22,ROME);
    // ruta de la caballería romana
    ctx.save();ctx.globalAlpha=.55*cl((t-E.v_cab)/.4);pathArrow(RPATH,1,ROME,3,[5,6]);ctx.restore();
    const n=5;for(let k=0;k<n;k++){const p=pathAt(RPATH,pr-k*.012);if(t>E.v_cab-.2)cav(p[0]+(k%2)*5,p[1],1.5,p[2],ROME)}
    shock(180,100,t,E.v_esp,'rgba(214,64,47,.9)',10,4,.8);sparks(180,100,t,E.v_esp,26,GOLD,90,.8,90);
  });
  TX('SUS MEJORES VETERANOS',180,92,22,GOLD,t,E.v_guar-.05,{out:E.v_terc-.1,w:320});
  TG('3ª LÍNEA · ÚLTIMA RESERVA',180,140,12,CART,'#fff',t,E.v_terc-.1,{out:E.v_cab-.1});
  TG('LA CABALLERÍA ROMANA DA LA VUELTA',180,92,12,ROME,'#fff',t,E.v_cab-.05,{out:E.v_esp-.15});
  slam('POR LA ESPALDA',180,92,34,ROME,t,E.v_esp,{stroke:INK,sw:7,sh:'rgba(214,64,47,.7)'})}

// S5 EL PRECIO: muertos, flota, indemnización
function s5(t,u){bg('#1b1410','#3a2a1c');
  const n=Math.round(countV(0,20000,t,E.r_20,1.5));
  const gA=cl(1-(t-E.r_flota+.3)/.4); // fase A se va
  if(gA>0)withA(gA,()=>{
    for(let r=0;r<6;r++)for(let i=0;i<14;i++){const k=r*14+i,alive=1-cl((n/20000-k/84)*8);ctx.globalAlpha=gA*(.25+.75*alive)*cl((t-E.r_20+.2)*4);ctx.fillStyle=CART;ctx.fillRect(48+i*17,256+r*17,12,12);ctx.globalAlpha=1}
    TX(fmtN(n),180,168,66,'#fff',t,E.r_20-.1,{sh:'rgba(138,92,208,.8)'});
    TG('CARTAGINESES MUERTOS',180,212,14,CART,'#fff',t,E.r_mur-.3)});
  // flota
  if(t>E.r_flota-.4){const out=cl((t-E.r_cart-2.7)/.3);withA(1-out,()=>{
    for(let i=0;i<5;i++){const s=cl((t-E.r_flota-.2-i*.15)/1.0),x=48+i*66,y=250+Math.sin(t*2+i)*3+ei(s)*60;ship(x,y,1.5,CART,{tilt:s*.5*(i%2?1:-1),al:1-cl((s-.55)*2.2)});if(s>.3)sparks(x,y,t,E.r_flota+.1+i*.15,5,GOLD,30,.5,60)}
    ctx.fillStyle='rgba(44,93,107,.9)';ctx.beginPath();ctx.moveTo(0,330);for(let x=0;x<=360;x+=10)ctx.lineTo(x,318+Math.sin(x*.05+t*3)*5);ctx.lineTo(360,400);ctx.lineTo(0,400);ctx.fill();
    TX('CASI TODA SU FLOTA',180,150,24,'#fff',t,E.r_flota-.4,{w:300})})}
  // indemnización 50 años
  if(t>E.r_50-.2){const k=cl((t-E.r_50)/1.6);
    for(let i=0;i<8;i++){const ph=(t*.7+i/8)%1;coin(lerp(60,300,ph),230-Math.sin(ph*Math.PI)*60,7,t*8+i)}
    circ(50,262,22,CART,INK,3);circ(310,262,22,ROME,INK,3);
    TX(Math.round(countV(0,50,t,E.r_50,1.5))+' AÑOS',180,380,52,GOLD,t,E.r_50-.1,{sh:'rgba(242,184,75,.7)'});
    TG('DE PAGOS A ROMA',180,430,14,GOLD,INK,t,E.r_50+.5)}
  if(t>E.r_poder-.1){const q=eb((t-E.r_poder-.1)/.4);tr(180,480,q,-.05,()=>{ctx.fillStyle=ROME;rr(-100,-26,200,52,10);ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=3;ctx.stroke();txt('CARTAGO BAJO ROMA',0,2,17,'#fff',{wt:'900'})})}}

// S6 ESCIPIÓN AFRICANO + GENIO VS GENIO
function s6(t,u){bg('#1b1410','#3a2a1c');glow(180,250,160,'rgba(214,64,47,.28)',1);
  const sw=eio(cl((t-E.e_gen+.3)/.8));
  const hx=lerp(180,250,sw),hs=lerp(2.1,1.35,sw),hy=lerp(270,300,sw);
  glow(hx,hy,190,'rgba(242,184,75,.30)',1);
  // laurel
  withA(1-sw,()=>{for(let i=0;i<14;i++){const a=Math.PI*.75+i*.2,r=78;ctx.save();ctx.translate(180+Math.cos(a)*r,hy+Math.sin(a)*r*.2*0+40-Math.sin(a)*0+ -10);ctx.restore()}
    ctx.strokeStyle=GOLD;ctx.lineWidth=4;ctx.beginPath();ctx.arc(180,hy+4,76,Math.PI*.55,Math.PI*1.45);ctx.stroke();ctx.beginPath();ctx.arc(180,hy+4,76,-Math.PI*.45,Math.PI*.45);ctx.stroke();
    for(let i=0;i<7;i++){const a=Math.PI*.6+i*.12,x1=180-Math.cos(a-Math.PI*.1)*0;circ(180-Math.sin(i*.45+.2)*76-4,hy-60+i*20,6,GOLD,INK,1.4);circ(180+Math.sin(i*.45+.2)*76+4,hy-60+i*20,6,GOLD,INK,1.4)}});
  helm(hx,hy,hs*(1+.05*wob(t-E.e_esc,9,5)),{});
  if(sw>0){const fall=eb(cl((t-E.e_perd)/.5));tr(110,hy+8,1.0,fall*-.9,()=>{circ(0,0,38,CART,INK,3);elephant(0,28,.95,{fill:'#0c0907',rim:CR,ph:0})});
    TG('ANÍBAL',110,hy+62,13,CART,'#fff',t,E.e_gen,{});TG('ESCIPIÓN',250,hy+62,13,ROME,'#fff',t,E.e_gen+.1,{});
    if(t>E.e_est-.1){scroll(250,hy-80,60,lerp(10,70,1),cl((t-E.e_est+.1)/.5))}
    if(t>E.e_truc){sparks(250,hy-80,t,E.e_truc,18,GOLD,60,.8,40);shock(250,hy-80,t,E.e_truc,'rgba(242,184,75,.9)',10,3,.7)}}
  TX('ESCIPIÓN',180,92,40,'#fff',t,E.e_esc-.05,{out:E.e_nom-.15});
  TX('RECIBIÓ UN NOMBRE NUEVO',180,150,20,GOLD,t,E.e_nom-.1,{out:E.e_afri-.1,w:300});
  slam('AFRICANO',180,455,44,GOLD,t,E.e_afri,{stroke:INK,sw:9,sh:'rgba(242,184,75,.8)',al:t<E.e_gen-.2?1:0});
  if(t<E.e_gen-.2)shock(180,455,t,E.e_afri,'rgba(242,184,75,.9)',20,4,.8);
  TX('UN GENIO PERDIÓ',180,92,26,'#fff',t,E.e_gen-.05,{w:320});
  TG('CONTRA OTRO QUE ESTUDIÓ SUS TRUCOS',180,455,12,GOLD,INK,t,E.e_est-.1)}

// S7 CIERRE: debate
function s7(t,u){bg('#1b1410','#3a2a1c');
  ctx.fillStyle='rgba(138,92,208,.25)';ctx.fillRect(0,0,180,640);ctx.fillStyle='rgba(214,64,47,.25)';ctx.fillRect(180,0,180,640);
  const a=eb(cl((t-E.c_gen-.1)/.5)),b=eb(cl((t-E.c_gen-.4)/.5));
  tr(90,300,a,0,()=>{circ(0,0,62,CART,INK,3);elephant(0,48,1.4,{fill:'#0c0907',rim:CR,ph:0})});
  tr(270,300,b,0,()=>{circ(0,0,62,ROME,INK,3);helm(0,2,1.05,{col:GOLD})});
  const va=.5+.3*Math.sin(t*1.6),vb=1-va;
  if(t>E.c_ani){ctx.fillStyle=CART;rr(34,400,112*va*1.6,14,7);ctx.fill();ctx.fillStyle=ROME;rr(214,400,112*vb*1.6,14,7);ctx.fill()}
  TG('ANÍBAL',90,390-40,15,CART,'#fff',t,E.c_ani-.05);TG('ESCIPIÓN',270,390-40,15,ROME,'#fff',t,E.c_esc-.05);
  TX('¿QUIÉN FUE',180,92,30,'#fff',t,E.c_gen-.35);TX('MEJOR GENERAL?',180,138,36,GOLD,t,E.c_gen-.05,{sh:'rgba(242,184,75,.7)'});
  if(t>E.c_com){const q=eb((t-E.c_com)/.45);tr(180,460,q,0,()=>{ctx.fillStyle='#fff';rr(-100,-26,200,52,26);ctx.fill();txt('COMENTA',10,1,22,INK);ctx.fillStyle=ROME;rr(-90,-14,28,22,6);ctx.fill();poly([[-84,8],[-80,16],[-74,8]],ROME)})}}
boot([s0,s1,s2,s3,s4,s5,s6,s7],TRS,{cap:{acc:GOLD}});
