// ===== 01 · Perros — escenas =====
// S0 GANCHO: fogata, humano lanza carne, la cámara sigue la carne hasta el lobo
const meatPos=tt_=>{const q=cl((tt_-E.h_dar-.05)/.8);return [lerp(118,226,q),lerp(374,433,q)-Math.sin(q*Math.PI)*110]};
const W0X=tt_=>tt_<E.h_lobo?302:lerp(302,284,eo((tt_-E.h_lobo)/.35));
const wEye=tt_=>[W0X(tt_)-41*1.05,442-42*1.05+(tt_>E.h_lobo+.3?.35*eo((tt_-E.h_lobo-.3)/.3)*10*1.05:0)];
function s0(t,u){const tD=E.h_dar,tL=E.h_lobo;let c;
  if(t<tD)c=camAt(u,[[0,198,382,1.5],[tD,190,375,1.25]]);
  else{const f=follow(meatPos,t,.22),k=eo((t-tD)/.35);c={x:lerp(190,f[0],k),y:lerp(375,f[1],k),z:lerp(1.25,1.5,eo((t-tD)/.9)),r:0};
    if(t>tL-.1){const q=eio((t-tL+.1)/.5),ey=wEye(t);c={x:lerp(c.x,ey[0],q),y:lerp(c.y,ey[1],q),z:lerp(c.z,2.3,q),r:0}}}
  const lit=t<tL?0:eo((t-tL)/.45),wx=W0X(t);
  world(c,()=>{sky(t);hills(455,'#0b1322',22,.009,1);hills(470,'#0f1a2c',12,.021,3);
    ctx.fillStyle='#15223a';ctx.fillRect(-500,440,1600,500);vgrad(440,520,'#1c2c48','#0d1626',-500,1600);
    fireLight(142,430,190,t);if(lit>0)glow(260,420,90,'rgba(255,140,50,'+(.3*lit)+')');
    fire(142,438,.8,t);sparksUp(142,400,t);
    const arm=t<tD-.25?.35:t<tD?lerp(.35,-2.4,eo((t-tD+.25)/.25)):lerp(-2.4,-.2,eo((t-tD)/.22));
    human(100,440,1,{arm,rim:'#ff9a4a'});
    beast(wx,442,1.05,0,{flip:true,col:mixc('#04060a','#140d08',lit),rim:lit>0?rgba('#ff9a4a',.9*lit):null,eye:'rgba(255,215,110,.95)',ph:(t>tL&&t<tL+.7)?(t-tL)*15:0,head:t>tL+.55?.35*eo((t-tL-.55)/.35):0});
    if(t>tD+.05){const q=meatPos(t);meat(q[0],q[1],1,t<tL-.05?(t-tD)*10:7.5)}
    if(t>tL-.02)sparks(226,432,t,tL,14,'#ffd27a',110,.6,200);
    snowfall(t,50,4,.5,18)});
  shock(180,330,t,tL,'rgba(255,200,120,.8)',150,3,.6);
  mtext('HACE 15.000 AÑOS',180,96,31,'#fff',t,-.6,{stroke:'rgba(0,0,0,.55)',sw:6,out:2.05,hl:[1],hc:AMB});
  mtext('EL ERROR MÁS',180,82,25,'#fff',t,E.h_err-.06,{stroke:'rgba(0,0,0,.55)',sw:5,out:E.h_dar+.15});
  mtext('INTELIGENTE',180,118,40,AMB,t,E.h_int-.04,{stroke:'rgba(40,15,0,.7)',sw:6,out:E.h_dar+.2,sh:'rgba(255,160,50,.7)'})}
// S1 LÍNEA DE TIEMPO: el pulso sale del perro y enciende cada hito (cadena)
const S1M=[[330,'s1_agr','AGRICULTURA',wheat],[560,'s1_ciu','CIUDADES',city],[790,'s1_esc','ESCRITURA',tablet]];
function s1px(tt_){const K=[[E.s1_dom+.35,80],[E.s1_agr,330],[E.s1_ciu,560],[E.s1_esc,790]];if(tt_<=K[0][0])return 80;for(let i=0;i<K.length-1;i++)if(tt_<K[i+1][0])return lerp(K[i][1],K[i+1][1],eio((tt_-K[i][0])/(K[i+1][0]-K[i][0])));return 790}
function s1(t,u){let c;const fx=follow(tt_=>[s1px(tt_),320],t,.3)[0];
  if(t<E.s1_dom+.3)c=camAt(u,[[0,96,330,1.55],[E.s1_dom-E.tr1,104,325,1.3]]);
  else{const k=eo((t-E.s1_dom-.3)/.5);c={x:lerp(104,fx+30,k),y:lerp(325,315,k),z:lerp(1.3,1.05,k),r:0}}
  if(t>E.s1_ciu+.2){const q=eo((t-E.s1_ciu-.2)/.5);c={x:lerp(c.x,s1px(t)+30,q),y:315,z:lerp(c.z,1.05,q),r:0}}
  world(c,()=>{sky(t,.7);const px=s1px(t);
    ctx.setLineDash([4,6]);line(80,320,880,320,'rgba(255,255,255,.25)',2);ctx.setLineDash([]);
    ctx.save();ctx.shadowColor=AMB;ctx.shadowBlur=12;line(80,320,px,320,AMB,4);ctx.restore();
    if(t>E.s1_dom+.35&&px<789){glow(px,320,18,'rgba(255,200,110,.7)');circ(px,320,4,'#fff')}
    // medallón del perro
    const ms=t<E.s1_perro?eb((t-E.tr1+.2)/.5):1+.06*wob(t-E.s1_perro,10,5);
    tr(80,320,ms,0,()=>{glow(0,0,70,'rgba(255,170,60,.35)');circ(0,0,36,'#1b1408',AMB,3);beast(2,22,.52,1,{col:AMB})});
    tag('PERRO',80,378,12,AMB,'#1a0e02',t,E.s1_perro);tag('≈15.000 AÑOS',80,404,9,'rgba(255,255,255,.12)','#fff',t,E.s1_perro+.25);
    if(t>E.s1_dom){const q=t-E.s1_dom;tr(118,286,1+1.6*Math.exp(-q*11),-.18,()=>{withA(cl(q*12),()=>{circ(0,0,17,WARM,'#fff',2);txt('#1',0,1,16,'#fff')})})}
    S1M.forEach(([x,k,lbl,ic],i)=>{const ts=E[k];if(t<ts-.02)return;const q=t-ts,s=eb(q/.4),bump=wob(q,16,6)*6;
      shock(x,320,t,ts,AMB,40,3,.5);circ(x,320,7,'#fff');
      tr(x,250-bump,s,0,()=>{ctx.fillStyle='rgba(20,28,48,.92)';rr(-46,-48,92,96,16);ctx.fill();ctx.strokeStyle=rgba('#ffffff',.25);ctx.lineWidth=1.5;ctx.stroke();ic(0,-8,1.1,'#e9eef8')});
      tag(lbl,x,316+22,11,'#e9eef8','#0c1222',t,ts+.12);
      tag('ANTES',x,198-bump,9,WARM,'#fff',t,ts+.2)})});
  mtext('EL PRIMER ANIMAL',180,92,27,'#fff',t,E.s1_prim-.05,{stroke:'rgba(0,0,0,.5)',sw:5,out:E.s1_agr-.9});
  mtext('DOMESTICADO',180,128,36,AMB,t,E.s1_dom-.05,{stroke:'rgba(40,15,0,.7)',sw:6,out:E.s1_agr-.85});
}
// S2 ADN -> MAPA -> 14.000/16.000 AÑOS -> EDAD DE HIELO
function s2(t,u){const tM=E.s2_ing-.75,tN=E.s2_14-.35,tI=E.s2_edad-.55;bg('#03111c','#0b2538');dust(t,40,'#7fd4ff',4,8,1.2,.4);
  // A: hueso escaneado y la hélice que sale de él
  const aA=1-win(t,tM-.2,tM+.35);if(aA>0)withA(aA,()=>{const gw=eo((t-E.s2_adn+.25)/.6);
    tr(92,170,1.6,-.5,()=>bone(0,0,2.2,0,'#e9e2cf'));const sy=150+Math.sin(t*5)*30;line(40,sy,150,sy,'rgba(127,212,255,.9)',2);glow(95,sy,40,'rgba(127,212,255,.35)');
    if(gw>0){ctx.save();ctx.beginPath();ctx.rect(0,0,360,lerp(150,660,gw));ctx.clip();helix(210+Math.sin(t)*6,90,700,t,52);ctx.restore()}
    mtext('ADN ANTIGUO',180,96,34,'#7fd4ff',t,E.s2_adn-.05,{stroke:'rgba(0,10,20,.7)',sw:6,out:tM});
    tag('RESTOS DE PERROS',230,140,10,'rgba(127,212,255,.18)','#cfefff',t,E.s2_adn+.4,{out:tM})});
  // B: mapa
  const aB=win(t,tM,tM+.4)*(1-win(t,tN,tN+.4));if(aB>0){const s=lerp(.6,1,eb((t-tM)/.55));tr(180,300,s,0,()=>{withA(aB,()=>{ctx.translate(-180,-110);drawMap(0,0,1);
      pin(72,62,t,E.s2_ing,AMB,'INGLATERRA');pin(285,158,t,E.s2_tur,AMB,'TURQUÍA');
      if(t>E.s2_tur+.3){ctx.setLineDash([3,5]);ctx.lineDashOffset=-t*20;line(72,50,285,146,rgba(AMB,.6*win(t,E.s2_tur+.3,E.s2_tur+.8)),1.5);ctx.setLineDash([])}})});
    if(t>E.s2_hum-.1){const q=eb((t-E.s2_hum+.1)/.45);tr(180,430,q,0,()=>{withA(aB,()=>{ctx.fillStyle='rgba(10,20,34,.9)';rr(-80,-30,160,60,30);ctx.fill();ctx.strokeStyle=AMB;ctx.lineWidth=1.5;ctx.stroke();human(-34,22,.5,{col:'#e9eef8',arm:.2});txt('+',0,-2,22,AMB);beast(44,18,.42,1,{col:'#e9eef8',flip:true})})})}}
  // C: contador de años
  const aC=win(t,tN,tN+.3)*(1-win(t,tI+.25,tI+.6));if(aC>0)withA(aC,()=>{
    txt('ENTRE',180,170,18,'#7fd4ff',{al:cl((t-tN)*4)});slam('14.000',180,235,62,'#fff',t,E.s2_14,{sh:'rgba(127,212,255,.8)',shb:20});
    slam('Y 16.000',180,310,46,AMB,t,E.s2_16,{sh:'rgba(255,170,60,.7)',shb:16});txt('AÑOS',180,372,26,'#cfefff',{al:cl((t-E.s2_14-.2)*4)});
    const hg=(t-tN)*.8;tr(310,120,1,Math.sin(hg)*.1,()=>{ctx.strokeStyle='#7fd4ff';ctx.lineWidth=2;poly([[-12,-18],[12,-18],[0,0],[12,18],[-12,18],[0,0]],null,'#7fd4ff',2)})});
  // D: edad de hielo
  if(t>tI){const q=eo((t-tI)/.55);snowfall(t,90,7,q*.9,40);bg2Ice(q);frost(t,q);slam('EDAD DE HIELO',180,300,40,'#eaf6ff',t,E.s2_edad,{st:'#2a6a9a',sw:7,sh:'rgba(190,230,255,.9)',shb:22})}}
function bg2Ice(q){ctx.fillStyle='rgba(170,215,245,'+(.35*q)+')';ctx.fillRect(0,0,360,640)}
// S3 ¿CÓMO PASÓ? — el signo de interrogación se transforma en la cabeza del lobo
function s3(t,u){bg('#0a0f1d','#1b1530');snowfall(t,40,5,.35,14);
  const m=eio((t-E.s3_no+.15)/(E.s3_nues-E.s3_no+.35)),c=camAt(u,[[0,180,300,1],[E.s3_nues-E.tr3,180,300,1.05],[E.tr4-E.tr3,180,300,1.25]]);
  world(c,()=>{const sc=1.7;let P=(m<.5?morph(QPTS,QCIRC,eio(m*2)):morph(QCIRC,WHEAD,eio(m*2-1))).map(p=>[180+p[0]*sc,300+p[1]*sc]);if(m<1)P=wobble(P,t,3*(1-m),3,2);
    glow(180,300,170,rgba(m<.5?AMB:'#7fb0ff',.25));const col=mixc(AMB,'#0d111c',m);poly(P,col,rgba(m<.5?'#fff3d0':ICE,.7),2.4);
    withA(1-win(t,E.s3_no,E.s3_no+.35),()=>circ(180,300+52*sc,13*sc*(1+.05*Math.sin(t*6)),AMB));
    if(m>.75){const a=win(m,.75,1);withA(a,()=>{ctx.fillStyle='#1a1e2a';ctx.beginPath();ctx.ellipse(180,300+74*sc,9*sc,6*sc,0,0,TAU);ctx.fill();line(180-22*sc,300-34*sc,180-27*sc,300-58*sc,rgba(ICE,.5),2);line(180+22*sc,300-34*sc,180+27*sc,300-58*sc,rgba(ICE,.5),2)});glow(180-17*sc,300,22,rgba('#ffd27a',a));glow(180+17*sc,300,22,rgba('#ffd27a',a));circ(180-17*sc,300,4,rgba('#fff3c0',a));circ(180+17*sc,300,4,rgba('#fff3c0',a))}});
  mtext('¿Y CÓMO PASÓ?',180,96,34,'#fff',t,E.s3_q-.25,{stroke:'rgba(0,0,0,.5)',sw:5,out:E.s3_nadie-.05});
  mtext('NADIE LO SABE',180,96,32,'#fff',t,E.s3_nadie-.03,{stroke:'rgba(0,0,0,.5)',sw:5,out:E.s3_teo-.45});
  tag('LA TEORÍA MÁS ACEPTADA',180,96,13,AMB,'#1a0e02',t,E.s3_teo-.05,{out:E.s3_no+.1});
  mtext('NO FUE DECISIÓN',180,470,27,'#fff',t,E.s3_no-.03,{stroke:'rgba(0,0,0,.6)',sw:5});
  mtext('NUESTRA',180,506,34,ICE,t,E.s3_nues-.05,{stroke:'rgba(0,0,0,.6)',sw:5,sh:'rgba(140,200,255,.8)'});
  if(t>E.s3_nues+.15){const q=eo((t-E.s3_nues-.15)/.25);line(110,506,110+140*q,506,WARM,4)}}
// S4 EL CAMPAMENTO: tranquilos se acercan, miedosos huyen, mansos se quedan y tienen cachorros
function w1x(tt_){return tt_<E.s4_rest?lerp(560,212,eio((tt_-E.tr4+.3)/(E.s4_rest-E.tr4+.3))):212}
function w2x(tt_){return tt_<E.s4_huian?650:650+eo((tt_-E.s4_huian)/1.1)*520}
function s4(t,u){let c;const f1=follow(tt_=>[w1x(tt_),395],t,.35);
  if(t<E.s4_rest+.2)c={x:f1[0]-20,y:385,z:1.45,r:0};
  else c=camAt(t,[[E.s4_rest+.2,192,385,1.45],[E.s4_rest+.6,205,395,1.7],[E.s4_mied-.25,205,395,1.7],[E.s4_mied+.15,640,390,1.5,0,'eo'],[E.s4_huian+.7,720,390,1.3],[E.s4_mans-.1,215,390,1.25,0,'eo'],[E.s4_cach-.2,190,395,1.35],[E.s4_cach+.4,250,405,1.65,0,'eo'],[E.tr5,250,405,1.75]]);
  world(c,()=>{sky(t);hills(455,'#0b1322',22,.009,1);hills(470,'#0f1a2c',12,.021,3);ctx.fillStyle='#15223a';ctx.fillRect(-500,440,2200,500);vgrad(440,520,'#1c2c48','#0d1626',-500,2200);
    fireLight(110,430,200,t);fire(110,438,.8,t);sparksUp(110,400,t);
    const arm=t<E.s4_mejor-.3?.6:t<E.s4_mejor?lerp(.6,-2.3,eo((t-E.s4_mejor+.3)/.3)):lerp(-2.3,-.1,eo((t-E.s4_mejor)/.25));human(60,440,1,{arm,rim:'#ff9a4a'});
    // montón de restos
    [[178,438,.9,.3],[192,434,.8,-.6],[200,440,.7,1.2],[186,442,.6,2.1]].forEach((b,i)=>{let dx=0,dy=0;if(t>E.s4_rest&&i===1){const q=t-E.s4_rest;dx=q*60;dy=-Math.sin(Math.min(q,.5)/.5*Math.PI)*24;if(q>.5){dx=30;dy=0}}bone(b[0]+dx,b[1]+dy,b[2],b[3]+(t>E.s4_rest&&i===1?(t-E.s4_rest)*8:0))});
    if(t>E.s4_mejor){const q=cl((t-E.s4_mejor)/.6);meat(lerp(92,205,q),lerp(380,428,q)-Math.sin(q*Math.PI)*70,.9,q*8)}
    // lobos del fondo
    [[760,.9],[840,.8],[700,.75]].forEach(([x,s],i)=>beast(x,446,s,0,{flip:true,col:'#04060a',eye:'rgba(255,215,110,.7)'}));
    const x1=w1x(t),walking=t<E.s4_rest;const near=cl((420-x1)/200);
    beast(x1+50,442,1,cl((t-E.s4_mans)/3)*.15,{flip:true,col:'#05070c',rim:rgba('#ff9a4a',.8*near),eye:'rgba(255,215,110,.95)',ph:walking?t*13:0,head:t>E.s4_rest-.1&&t<E.s4_mans-.3?.45:0,wag:t>E.s4_mejor?.25:0,t});
    const x2=w2x(t),run=t>E.s4_huian;beast(x2,444,1,0,{flip:!run,col:'#06080e',eye:'rgba(255,120,90,.95)',ph:run?t*20:0});
    if(run)smoke(x2-20,436,t,E.s4_huian+.05,22,'120,130,160',1.2);
    // cachorros en cadena: cada uno empuja al anterior
    for(let k=0;k<3;k++){const ts=E.s4_cach-.65+k*.16;if(t<ts)continue;const q=t-ts,pop=eb(q/.35);let x=232+k*26;for(let j=k+1;j<3;j++){const tj=E.s4_cach-.65+j*.16;if(t>tj)x+=wob(t-tj,16,7)*-5}
      beast(x,442-(1-pop)*10,.42*pop,.35,{flip:true,col:'#05070c',rim:'rgba(255,154,74,.8)',eye:'rgba(255,215,110,.9)',wag:.3,t:t+k})}
    snowfall(t,40,4,.45,16)});
  const p1=toScreen(c,w1x(t),380),p2=toScreen(c,w2x(t),382);
  tag('TRANQUILO',p1[0],p1[1]-58*c.z*.55,11,'#7fb0ff','#08101c',t,E.s4_tranq-.05,{out:E.s4_mied-.2});
  tag('MIEDOSO',p2[0],p2[1]-58*c.z*.55,11,WARM,'#1c0806',t,E.s4_mied-.05,{out:E.s4_huian+.6});
  slam('¡HUÍAN!',180,140,34,'#fff',t,E.s4_huian,{st:'#000',sw:6,al:1-win(t,E.s4_huian+.7,E.s4_huian+1)});
  tag('MANSO',p1[0],p1[1]-58*c.z*.55,11,AMB,'#1a0e02',t,E.s4_mans-.05,{out:E.s4_cach-.2});
  tag('COMÍA MEJOR',180,108,13,AMB,'#1a0e02',t,E.s4_mejor-.05,{out:E.s4_cach-.75});
  mtext('+ CACHORROS',180,110,32,'#fff',t,E.s4_cach-.02,{stroke:'rgba(0,0,0,.6)',sw:5,hl:[0],hc:AMB})}
// S5 GENERACIÓN TRAS GENERACIÓN: la cámara recorre la fila y el lobo se vuelve perro
function s5(t,u){const q=eio((t-E.tr5+.1)/(E.s5_perro-E.tr5+.1)),cx=lerp(100,1000,q),c={x:cx,y:378,z:1.5,r:0};
  const day=q;bg(mixc('#0a1426','#ffb07a',day*.85),mixc('#1d2c48','#ffe2b0',day*.9));stars(t,60,9,1-day);
  const sunY=lerp(700,420,day);glow(180,sunY,220,'rgba(255,200,120,'+(.5*day)+')');
  world(c,()=>{hills(452,mixc('#0d1626','#c57a4a',day*.7),16,.01,2,-200,1300);ctx.fillStyle=mixc('#15223a','#e9b88a',day*.6);ctx.fillRect(-200,440,1500,300);
    for(let k=0;k<7;k++){const x=100+k*150,m=k/6,fin=k===6&&t>E.s5_perro;const jy=fin?-Math.abs(Math.sin((t-E.s5_perro)*7))*18*Math.exp(-(t-E.s5_perro)*1.5):0;
      beast(x,442+jy,1.05,m,{col:mixc('#1c2840','#c9772e',m*(.35+.65*day)),rim:rgba('#ffd09a',.6),eye:m<.5?'rgba(255,215,110,.9)':null,ph:fin?0:t*10+k,wag:m>.5?.25*m:0,t:t+k});
      txt(['LOBO','','','','','','PERRO'][k],x,476,12,'rgba(255,255,255,.75)',{wt:'800'})}});
  // barra lobo -> perro
  ctx.fillStyle='rgba(0,0,0,.35)';rr(60,150,240,10,5);ctx.fill();const g=ctx.createLinearGradient(60,0,300,0);g.addColorStop(0,'#7fb0ff');g.addColorStop(1,AMB);ctx.fillStyle=g;rr(60,150,240*q,10,5);ctx.fill();circ(60+240*q,155,8,'#fff');
  txt('LOBO',60,176,11,'#cfe0ff',{a:'left',wt:'800'});txt('PERRO',300,176,11,AMB,{a:'right',wt:'800'});
  mtext('GENERACIÓN TRAS GENERACIÓN',180,110,22,'#fff',t,E.s5_gen-.05,{stroke:'rgba(0,0,0,.55)',sw:5,w:300,out:E.s5_perro-.3});
  if(t>E.s5_perro){const k=t-E.s5_perro;ctx.save();ctx.strokeStyle='#fff';ctx.lineWidth=2.5;rr(110,265,140,130,22);ctx.globalAlpha=cl(k*6);ctx.stroke();ctx.restore();slam('¡PERRO!',180,110,40,AMB,t,E.s5_perro,{st:'#2a1200',sw:6})}}
// S6 NOSOTROS TAMBIÉN GANAMOS: ladrido -> ondas -> caza -> calor (todo encadenado)
const wavX=tt_=>140+(tt_-E.s6_pel)*340;
function dogRunX(tt_){if(tt_<E.s6_caz)return 470;if(tt_<E.s6_cal)return lerp(470,868,eio((tt_-E.s6_caz)/(E.s6_cal-E.s6_caz)));return 868}
function s6(t,u){let c;
  if(t<E.s6_pel)c=camAt(u,[[0,180,360,1.2],[E.s6_pel-E.tr6,180,370,1.25]]);
  else if(t<E.s6_caz){const k=eo((t-E.s6_pel-.25)/.4);c={x:lerp(180,Math.min(560,wavX(t-.2)),k),y:375,z:1.2,r:0}}
  else{const f=follow(tt_=>[dogRunX(tt_),380],t,.3);c={x:Math.max(560,f[0]),y:380,z:1.2,r:0};if(t>E.s6_cal-.2){const q=eio((t-E.s6_cal+.2)/.8);c={x:lerp(c.x,915,q),y:lerp(380,395,q),z:lerp(1.2,1.55,q),r:0}}}
  world(c,()=>{sky(t,.9);hills(452,'#0b1322',18,.011,2,-300,1400);ctx.fillStyle='#15223a';ctx.fillRect(-300,440,1600,400);
    // A peligro
    for(let k=0;k<5;k++)circ(270+k*16,430-(k%2)*10,18,'#0a1220');
    const flee=t>wavX.length&&t>E.s6_pel+.45;const bx=flee?280+eo((t-E.s6_pel-.45)/.8)*160:280;
    withA(flee?1-win(t,E.s6_pel+.8,E.s6_pel+1.3):1,()=>{glow(bx-14,415,14,'rgba(255,60,40,.6)');circ(bx-18,415,2.4,'#ff6a50');circ(bx-8,415,2.4,'#ff6a50')});
    const bark=t>E.s6_pel&&t<E.s6_pel+.9;beast(120,442,1,1,{col:'#05070c',rim:'rgba(255,170,90,.6)',head:bark?-.35:0,wag:.1,t});
    if(t>E.s6_pel){for(let k=0;k<4;k++){const tk=E.s6_pel+k*.12,x=140+(t-tk)*340;if(t<tk||x>620)continue;ctx.strokeStyle=rgba(AMB,cl(1-(x-140)/480));ctx.lineWidth=3;ctx.beginPath();ctx.arc(140,400,x-140,-.5,.5);ctx.stroke()}
      slam('!',90,330,40,AMB,t,E.s6_pel,{st:'#000',sw:5,al:1-win(t,E.s6_pel+.8,E.s6_pel+1)})}
    // B caza
    const dx_=t<E.s6_caz?600:600+cl((t-E.s6_caz)/1.4)*330,jumpY=t<E.s6_caz?0:-Math.abs(Math.sin((t-E.s6_caz)*9))*14;
    tr(dx_,440+jumpY,1,0,()=>{ctx.fillStyle='#1a1410';ctx.beginPath();ctx.ellipse(0,-26,24,11,0,0,TAU);ctx.fill();line(18,-30,30,-52,'#1a1410',5);circ(32,-54,6,'#1a1410');line(30,-60,24,-74,'#1a1410',2);line(34,-60,40,-74,'#1a1410',2);
      [[-16,0],[-10,0],[12,0],[18,0]].forEach((l,i)=>line(l[0],-20,l[0]+Math.sin(t*20+i)*(t>E.s6_caz?6:0),0,'#1a1410',3))});
    beast(dogRunX(t),442,1,1,{col:'#05070c',rim:'rgba(255,170,90,.6)',ph:t>E.s6_caz&&t<E.s6_cal?t*20:0,head:t>E.s6_cal+.2?.6:0,wag:t>E.s6_cal?.2:0,t});
    if(t>E.s6_caz+.15){const q=cl((t-E.s6_caz-.15)/.7);tr(lerp(480,640,q),lerp(400,420,q)-Math.sin(q*Math.PI)*50,1,.2+q*.4,()=>line(-20,0,20,0,'#c9b08a',2.4))}
    // C calor
    fireLight(930,430,170,t);fire(930,438,.65,t);human(972,444,.9,{flip:true,arm:2.4,col:'#05070c',rim:'#ff9a4a'});
    if(t>E.s6_hel-.2){snowfall(t,80,8,.8*win(t,E.s6_hel-.2,E.s6_hel+.3),30)}});
  tag('AVISABAN DEL PELIGRO',180,150,13,AMB,'#1a0e02',t,E.s6_pel-.05,{out:E.s6_caz-.15});
  tag('AYUDABAN A CAZAR',180,150,13,AMB,'#1a0e02',t,E.s6_caz-.05,{out:E.s6_cal-.15});
  tag('DABAN CALOR',180,150,13,WARM,'#fff',t,E.s6_cal-.05);
  mtext('NOSOTROS TAMBIÉN',180,92,26,'#fff',t,E.s6_gan-.45,{stroke:'rgba(0,0,0,.55)',sw:5});mtext('GANAMOS',180,122,30,AMB,t,E.s6_gan-.05,{stroke:'rgba(40,15,0,.7)',sw:5});
  if(t>E.s6_hel){const q=eo((t-E.s6_hel)/.4);tr(300,260,q,0,()=>{rr(-7,-34,14,52,7);ctx.fillStyle='rgba(255,255,255,.85)';ctx.fill();circ(0,22,11,'#7fd4ff');rr(-3,-10,6,30,3);ctx.fillStyle='#7fd4ff';ctx.fill();txt('−20°',0,48,12,'#cfefff',{wt:'800'})})}}
// S7 EXCAVACIÓN EN TURQUÍA
const brush=tt_=>{const q=eio((tt_-E.s7_yac)/(E.s7_ent-E.s7_yac-.1));return [lerp(180,150,q),lerp(160,880,q)]};
function s7(t,u){let c;
  if(t<E.s7_yac)c={x:180,y:230,z:1,r:0};
  else if(t<E.s7_pers-.3){const f=follow(brush,t,.4);c={x:lerp(180,f[0]+20,eo((t-E.s7_yac)/.4)),y:lerp(230,f[1]+20,eo((t-E.s7_yac)/.4)),z:t>E.s7_ent?lerp(1,1.35,eo((t-E.s7_ent)/.6)):1,r:0}}
  else c=camAt(t,[[E.s7_pers-.3,170,900,1.35],[E.s7_pers+.3,250,895,1.05,0,'eo'],[E.s7_fam,250,880,1.1],[E.tr8,250,880,1.25]]);
  world(c,()=>{vgrad(-300,150,'#f6b77a','#ffd9a8',-300,1000);glow(300,60,140,'rgba(255,240,200,.8)');
    ctx.fillStyle='#8a5a34';ctx.beginPath();ctx.moveTo(-300,150);for(let x=-300;x<=700;x+=20)ctx.lineTo(x,150+6*Math.sin(x*.02));ctx.lineTo(700,1400);ctx.lineTo(-300,1400);ctx.fill();
    const L=['#7a4e2c','#6a4226','#5b3820','#4c2e1a','#3e2514','#311c10'];for(let i=0;i<6;i++){ctx.fillStyle=L[i];ctx.beginPath();const y=230+i*130;ctx.moveTo(-300,y);for(let x=-300;x<=700;x+=20)ctx.lineTo(x,y+8*Math.sin(x*.015+i));ctx.lineTo(700,1400);ctx.lineTo(-300,1400);ctx.fill()}
    for(let i=0;i<60;i++){circ(R(i)*700-200,200+R(i*3)*1100,1+R(i*5)*3,'rgba(0,0,0,.18)')}
    [['−5.000 AÑOS',420],['−10.000 AÑOS',650],['−15.000 AÑOS',880]].forEach(([s,y])=>{line(30,y,60,y,'rgba(255,230,190,.6)',1.5);txt(s,64,y,10,'rgba(255,230,190,.8)',{a:'left',wt:'800'})});
    // superficie: tienda y pin
    poly([[230,150],[270,100],[310,150]],'#e9d6a8','#8a6a3a',1.5);
    pin(180,150,t,E.s7_tur,WARM,'TURQUÍA');
    // pozo excavado
    ctx.fillStyle='rgba(20,10,4,.35)';ctx.fillRect(100,150,140*cl((t-E.s7_yac)/.5),lerp(0,800,eio((t-E.s7_yac)/(E.s7_ent-E.s7_yac))));
    const rv=eo((t-E.s7_ent+.4)/1.4);dogSkel(150,890,1.1,rv);
    if(t>E.s7_ent-.4&&t<E.s7_pers){const b=brush(t);tr(b[0]+Math.sin(t*20)*8,b[1]-18,1,.4,()=>{ctx.fillStyle='#c8873a';rr(-3,-26,6,22,2);ctx.fill();ctx.fillStyle='#f0e0b0';rr(-6,-6,12,10,2);ctx.fill()});dust(t,10,'rgba(230,200,150,.8)',3,20,1.2,.5)}
    else if(t<E.s7_ent-.4){const b=brush(t);tr(b[0],b[1]-18,1,.4,()=>{ctx.fillStyle='#c8873a';rr(-3,-26,6,22,2);ctx.fill();ctx.fillStyle='#f0e0b0';rr(-6,-6,12,10,2);ctx.fill()})}
    if(t>E.s7_pes){const q=eb((t-E.s7_pes)/.4);tr(212,918,q,0,()=>{glow(0,0,26,'rgba(255,210,120,.6)');fishBone(0,0,1.3)})}
    humSkel(340,905,1.05,eo((t-E.s7_pers+.2)/.8));
    if(t>E.s7_herr){const q=eb((t-E.s7_herr)/.35);tr(250,800,q,0,()=>{line(-30,-20,-10,20,'#d9d2c0',4);poly([[-34,-24],[-20,-30],[-24,-14]],'#9aa2ad');line(10,-24,30,20,'#d9d2c0',3);poly([[6,-30],[14,-22],[8,-20]],'#9aa2ad')});
      if(t>E.s7_herr+.25){const k=eo((t-E.s7_herr-.25)/.25);ctx.save();ctx.strokeStyle=WARM;ctx.lineWidth=6;ctx.lineCap='round';line(215,765,215+70*k,765+70*k,WARM,6);line(285,765,285-70*k,765+70*k,WARM,6);ctx.restore()}}
    if(t>E.s7_fam){const k=t-E.s7_fam,big=ei((t-(E.tr8-.55))/.55),s=(20+10*eb(k/.4))*(1+.1*Math.sin(k*9))+big*500;glow(250,860,s*2.2,'rgba(255,107,90,.55)');poly(SH.heart(250,860,s),WARM,'#ffd0c8',2)}});
  mtext('UN YACIMIENTO',180,90,26,'#fff',t,E.s7_yac-.1,{stroke:'rgba(60,20,0,.6)',sw:5,out:E.s7_ent-.1});
  tag('ENTERRADOS CON CUIDADO',180,110,13,'#efe6cf','#2a1608',t,E.s7_ent+.1,{out:E.s7_pes-.1});
  tag('ALIMENTADOS CON PESCADO',180,110,13,'#f6d38a','#2a1608',t,E.s7_pes,{out:E.s7_pers-.1});
  tag('IGUAL QUE LAS PERSONAS',180,110,13,'#fff','#2a1608',t,E.s7_pers-.05,{out:E.s7_herr-.1});
  mtext('NO ERAN HERRAMIENTAS',180,110,24,'#fff',t,E.s7_herr-.05,{stroke:'rgba(0,0,0,.6)',sw:5,out:E.s7_fam-.1});
  mtext('ERAN FAMILIA',180,110,34,'#ffd0c8',t,E.s7_fam-.05,{stroke:'rgba(80,10,0,.7)',sw:6,sh:'rgba(255,107,90,.8)'})}
// S8 HOY: señalar con el dedo, el chimpancé no entiende, emociones, la mirada
const dogEye=[180+(6+6)*1.3+15*1.3,500-70*1.3-4*1.3];
function s8(t,u){const tE=E.s8_emo-.2,c=camAt(t,[[E.tr8,180,330,1],[E.s8_dedo,190,340,1],[E.s8_dedo+.5,230,370,1.05],[E.s8_chimp-.1,230,370,1.05],[E.s8_chimp+.3,420,360,1,0,'eo'],[E.s8_bien+.4,420,360,1],[tE,190,360,1.05,0,'eo'],[E.s8_emo+.2,200,405,2.4,0,'eo'],[E.s8_mir-.1,205,405,2.5],[E.tr9,dogEye[0],dogEye[1],9,0,'ei']]);
  bg('#fff1dc','#f5c58c');
  world(c,()=>{ctx.fillStyle='#eab07a';ctx.fillRect(-200,500,1000,300);line(-200,500,800,500,'#d99a62',3);
    for(let i=0;i<8;i++)circ(-100+i*110,180+(i%2)*40,30,'rgba(255,255,255,.25)');
    const look=t<E.s8_dedo+.35?-.2:eo((t-E.s8_dedo-.35)/.35);const hb=t>E.s8_dedo+.5?wob(t-E.s8_dedo-.5,14,5)*4:0;
    // pelota
    const bb=t>E.s8_dedo+.45?Math.abs(wob(t-E.s8_dedo-.45,12,4))*-14:0;circ(320,480+bb,18,'#3f8efc');ctx.strokeStyle='#fff';ctx.lineWidth=2;ctx.beginPath();ctx.arc(320,480+bb,18,-.6,.6);ctx.stroke();
    cartoonDog(180,500,1.3,{look,wag:t>E.s8_dedo+.6?.3:.1,t});
    const hx_=t<E.s8_sen?-120:lerp(-120,40,eb((t-E.s8_sen)/.45));handPoint(hx_,330,1.2);
    if(t>E.s8_dedo&&t<tE){const q=eo((t-E.s8_dedo)/.45),x0=hx_+38,y0=325;ctx.globalAlpha=1-win(t,tE-.3,tE);ctx.setLineDash([4,6]);ctx.lineDashOffset=-t*30;line(x0,y0,lerp(x0,312,q),lerp(y0,466,q),'#e35d3a',3);ctx.setLineDash([]);ctx.globalAlpha=1}
    chimp(470,500,1.2,{look:-1});
    if(t>E.s8_chimp+.3){withA(1-win(t,tE-.2,tE),()=>{slam('?',500,360,46,'#e35d3a',t,E.s8_chimp+.3,{st:'#fff',sw:5})})}
    if(t>E.s8_bien){withA(1-win(t,tE-.2,tE),()=>{const k=eo((t-E.s8_bien)/.3);line(430,300,430+60*k,300+60*k,'#d33',7);line(490,300,490-60*k,300+60*k,'#d33',7)})}
    // emociones alrededor de la cabeza
    if(t>E.s8_emo-.1){const hc=[195.6,409];['#ffd84a','#7fb0ff','#ff8a8a'].forEach((col,i)=>{const a=t*1.8+i*TAU/3,r=34,q=eb((t-E.s8_emo+.1-i*.1)/.4);tr(hc[0]+Math.cos(a)*r,hc[1]-6+Math.sin(a)*r*.6,.32*q,0,()=>{circ(0,0,16,col,'#3a2a1a',2);circ(-5,-3,2,'#3a2a1a');circ(5,-3,2,'#3a2a1a');ctx.strokeStyle='#3a2a1a';ctx.lineWidth=2;ctx.beginPath();if(i===1)ctx.arc(0,9,6,Math.PI+.4,-.4);else ctx.arc(0,3,6,.4,Math.PI-.4);ctx.stroke()})})}
    // reflejo en el ojo (fogata)
    if(t>E.s8_mir-.3){const a=win(t,E.s8_mir-.3,E.s8_mir+.3);withA(a,()=>{ctx.save();ctx.beginPath();ctx.arc(dogEye[0],dogEye[1],3.6,0,TAU);ctx.clip();ctx.fillStyle='#1a0c04';ctx.fillRect(dogEye[0]-4,dogEye[1]-4,8,8);glow(dogEye[0],dogEye[1]+.8,3,'rgba(255,150,60,.9)');ctx.restore()})}});
  tag('HOY',60,80,20,'#e35d3a','#fff',t,E.s8_hoy-.05,{a:'left'});
  mtext('ENTIENDE',180,128,28,'#3a2a1a',t,E.s8_sen-.1,{out:E.s8_chimp-.1});mtext('CUANDO SEÑALAS',180,160,22,'#e35d3a',t,E.s8_sen+.1,{out:E.s8_chimp-.1});
  mtext('NI LOS CHIMPANCÉS',180,128,26,'#3a2a1a',t,E.s8_chimp-.05,{out:tE});
  mtext('LEE TUS EMOCIONES',180,110,26,'#3a2a1a',t,E.s8_emo-.05,{out:E.s8_mir+.2})}
// S9 REENCUENTRO EN LA FOGATA
function s9(t,u){const c=camAt(u,[[0,175,380,2.3],[E.s9_comp-E.tr9,178,385,1.6],[E.s9_nos-E.tr9,182,388,1.45],[E.tr10-E.tr9,182,388,1.75]]);
  world(c,()=>{sky(t);hills(455,'#0b1322',22,.009,1);ctx.fillStyle='#15223a';ctx.fillRect(-500,440,1600,500);vgrad(440,520,'#1c2c48','#0d1626',-500,1600);
    fireLight(180,432,200,t);fire(180,440,.75,t+.5);sparksUp(180,400,t,16,3);
    const reach=eo((t-E.s9_nos+.5)/.5);human(118,442,1,{arm:lerp(.9,-.35,reach),rim:'#ff9a4a'});
    beast(236,444,1,1,{flip:true,col:'#05070c',rim:'rgba(255,170,90,.9)',head:t>E.s9_nos-.3?.25*eo((t-E.s9_nos+.3)/.3):t>E.s9_el?-.15:0,wag:t>E.s9_el?.3:.08,t});
    if(t>E.s9_nos){burst(166,398,t,E.s9_nos,['#ffd27a','#fff','#ffb547'],26,120,.9,2.2);glow(166,398,40*eo((t-E.s9_nos)/.3),'rgba(255,210,120,.9)')}
    snowfall(t,40,4,.4,14)});
  mtext('ELEGIMOS',180,96,30,'#fff',t,E.s9_mil+.6,{stroke:'rgba(0,0,0,.6)',sw:5,out:E.s9_el-.15});mtext('UN COMPAÑERO',180,132,30,AMB,t,E.s9_comp-.05,{stroke:'rgba(40,15,0,.7)',sw:5,out:E.s9_el-.1});
  mtext('Y ÉL NOS ELIGIÓ',180,96,28,'#fff',t,E.s9_el-.05,{stroke:'rgba(0,0,0,.6)',sw:5});mtext('A NOSOTROS',180,132,34,AMB,t,E.s9_nos-.05,{stroke:'rgba(40,15,0,.7)',sw:6,sh:'rgba(255,170,60,.8)'})}
// S10 CTA: la placa del collar con el nombre
function s10(t,u){bg('#24120a','#5a2e10');rays(180,300,t,14,500,'#ffb547',.08,.1,.14);dust(t,40,'#ffd27a',6,10,1.4,.5);
  const sw=.35*Math.exp(-u*1.2)*Math.sin(u*5)+.03*Math.sin(t*2);
  tr(180,170,1,sw,()=>{line(0,-200,0,64,'#9a8a6a',3);dogTag(0,130,1.25,0,t);
    const names=['LUNA','MAX','ROCKY','KIRA','¿…?'];let nm='TU PERRO';if(t>E.c_perro){const k=Math.floor((t-E.c_perro)/.32);nm=k<names.length?names[k]:'¿…?'}
    txt(nm,0,134,nm.length>6?22:28,'#5a3a10',{wt:'900',f:DISP})});
  mtext('¿CÓMO SE LLAMA',180,88,28,'#fff',t,E.c_cual-.05,{stroke:'rgba(0,0,0,.5)',sw:5});mtext('TU PERRO?',180,124,36,AMB,t,E.c_cual+.2,{stroke:'rgba(40,15,0,.7)',sw:6});
  if(t>E.c_com){const q=eb((t-E.c_com)/.45);tr(180,470,q,0,()=>{ctx.fillStyle='#fff';rr(-96,-26,192,52,26);ctx.fill();txt('COMÉNTALO',8,1,22,'#5a2e10');ctx.fillStyle=WARM;rr(-86,-14,28,22,6);ctx.fill();poly([[-80,8],[-76,16],[-70,8]],WARM)});
    const tap=Math.abs(Math.sin((t-E.c_com)*5));tr(250,500+tap*6,1,-.5,()=>handPoint(0,0,.6))}}
boot([s0,s1,s2,s3,s4,s5,s6,s7,s8,s9,s10],TRS,{cap:{acc:AMB}});
