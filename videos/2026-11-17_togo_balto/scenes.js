// ===== El caballo de Calígula — escenas =====
const bounce=(t,t0,k=8,d=5)=>t>t0?wob(t-t0,k,d):0;
// S0 GANCHO: el caballo con corona de cónsul; la corona sale volando al decir "cierto"
function s0(t,u){const c=camAt(u,[[0,180,330,1.0],[5.4,180,318,1.1]]),fl=t>E.h_cierto?t-E.h_cierto:0;
  world(c,()=>{bg('#1a0a30','#7a2a8a');rays(180,380,t,16,620,GOLD,.1,.08,.12);stars(t,40,2,.6);dust(t,26,'#ffd27a',3,12,1.4,.5);glow(190,400,210,'rgba(255,210,120,.35)');
    ctx.fillStyle='#1b0d2c';ctx.fillRect(-300,FL,1000,400);ctx.fillStyle='rgba(255,210,120,.2)';ctx.fillRect(-300,FL,1000,3);
    horse(170,FL+Math.sin(t*3)*2,2.1,{t,cloak:CRIM,collar:true,wreath:!fl,rim:GOLD});
    if(fl)wreath(262+fl*34,304-fl*210+fl*fl*430,26,fl*10);
    shock(262,304,t,E.h_cierto,'rgba(255,255,255,.9)',120,4,.6);if(fl)burst(262,304,t,E.h_cierto,['#fff',GOLD,LEAF],20,160,.7,3)});
  TX('¿UN CABALLO',180,86,36,'#fff',t,-.6);TX('CÓNSUL?',180,134,54,GOLD,t,-.45,{sh:'rgba(255,120,200,.7)'});
  TG('ESO CUENTAN DE CALÍGULA',180,186,14,PUR3,'#fff',t,E.h_cal-.1,{out:E.h_nada-.05});
  TG('CASI NADA ES CIERTO',180,186,15,CRIM,'#fff',t,E.h_nada-.1);
  slam('MITO',180,250,60,'#fff',t,E.h_cierto,{stroke:CRIM,sw:10,sh:'rgba(255,60,60,.7)'})}
// S1 CALÍGULA: 37-41 d. C., asesinado a los 28
function s1(t,u){const c=camAt(u,[[0,180,320,1.0],[6.3,180,310,1.05]]),k=Math.max(0,spring((t-E.s1_cal+.1)/.6,12,6)),st=t>E.s1_ase?t-E.s1_ase:0;
  const L=eo(cl((t-E.s1_37)/(E.s1_41-E.s1_37+.35))),p37=eo(cl((t-E.s1_37)/.35)),p41=eo(cl((t-E.s1_41)/.35));
  world(c,()=>{night(t);glow(180,300,230,'rgba(150,70,200,.38)');
    if(st<.18)wreath(180,172,52*k,Math.sin(t*2)*.1);
    else{const d=st-.18;wreath(180+d*40,172+d*d*520,52,d*6,1-cl(d/.7))}
    if(t>E.s1_mur-.3){const q=cl((t-(E.s1_mur-.3))/(E.s1_ase-E.s1_mur+.3));const sx=lerp(340,205,eo(q)),sy=lerp(60,150,eo(q));if(st<.5)sword(sx,sy,1.1,-2.36)}
    if(st>0&&st<.4){shock(190,160,t,E.s1_ase,'rgba(255,60,60,.9)',90,4,.5);burst(190,160,t,E.s1_ase,['#ff4a3a','#fff'],18,150,.5,2.6)}
    line(60,420,60+240*L,420,GOLD,4);circ(60,420,9*p37,GOLD);circ(300,420,9*p41,CRIM);
    withA(p37,()=>txt('37',60,386,30,'#fff',{wt:'900',st:INK,sw:6}));withA(p37,()=>txt('d. C.',60,452,13,GOLD));
    withA(p41,()=>txt('41',300,386,30,'#fff',{wt:'900',st:INK,sw:6}));withA(p41,()=>txt('d. C.',300,452,13,GOLD));
    if(t>E.s1_28-.05){const q=Math.max(0,spring((t-E.s1_28)/.4,14,6));withA(cl(q),()=>{txt(fmtN(countV(0,28,t,E.s1_28,.6),0),180,300,86*q,'#fff',{wt:'900',st:CRIM,sw:10,sh:'rgba(255,60,60,.7)'})})}});
  TX('EMPERADOR DE ROMA',180,92,28,'#fff',t,E.s1_emp-.05,{out:E.s1_mur-.1,w:340});
  TX('MURIÓ ASESINADO',180,92,28,'#ff7a6a',t,E.s1_mur-.05,{w:340,sh:'rgba(255,255,255,.3)'});
  TG('A LOS',180,236,15,GOLD,PUR,t,E.s1_28-.2);TG('AÑOS',180,372,18,CRIM,'#fff',t,E.s1_28+.2)}
// S2 INCITATO: lujo — establo de mármol, pesebre de marfil, collar, casa con sirvientes
function s2(t,u){const c=camAt(u,[[0,180,320,1.0],[9.6,180,320,1.05],[11.2,380,320,1.0]]);
  const sh=cl((t-E.s2_mar)/.9),mg=t>E.s2_pes?Math.max(0,spring((t-E.s2_pes)/.5,12,6)):0,col=t>E.s2_col;
  world(c,()=>{bg('#2b1a40','#0f0719');ctx.fillStyle='#cfc6b4';ctx.fillRect(-200,FL,1000,260);ctx.strokeStyle='rgba(90,70,110,.35)';ctx.lineWidth=1.4;for(let i=-4;i<20;i++){ctx.beginPath();ctx.moveTo(i*60,FL);ctx.lineTo(i*60-40,FL+120);ctx.stroke()}
    if(t>E.s2_est-.2){const a=cl((t-E.s2_est+.2)/.5);withA(a,()=>{pillar(18,FL,300,30,t,{shine:t>E.s2_mar?sh:undefined});pillar(310,FL,300,30,t,{shine:t>E.s2_mar?sh:undefined});ctx.fillStyle=MARB2;ctx.fillRect(0,FL-318,330,18);ctx.fillStyle=MARB;ctx.fillRect(0,FL-336,330,18)})}
    glow(160,FL-80,150,'rgba(255,210,150,.25)');
    horse(128,FL+Math.sin(t*2)*1.5,1.6,{t,ph:0,collar:col,cloak:t>E.s2_pes?PUR2:null,head:mg?.15+.1*Math.sin(t*3):0});
    if(mg)manger(270,FL,1.0,t,mg);
    if(col){shock(150,FL-120,t,E.s2_col,'rgba(255,230,150,.9)',50,3,.5);if(t<E.s2_col+.7)sparks(150,FL-122,t,E.s2_col,12,GOLD,60,.6,0)}
    if(t>E.s2_cas-.5){const k=cl((t-E.s2_cas+.5)/.6);withA(k,()=>{villa(500,FL,1.5,t,{light:1});for(let i=0;i<3;i++)servant(420+i*34,FL,1.1,t,i)})}});
  TX('SU CABALLO:',180,88,24,'#fff',t,E.s2_cab-.05,{out:E.s2_est-.4});TX('INCITATO',180,132,44,GOLD,t,E.s2_inc-.05,{out:E.s2_est-.4,sh:'rgba(255,200,80,.8)'});
  TG('SEGÚN SUETONIO',180,176,14,PUR3,'#fff',t,E.s2_sue-.1,{out:E.s2_est-.4});
  TX('ESTABLO DE',180,92,28,'#fff',t,E.s2_est-.05,{out:E.s2_pes-.12});TX('MÁRMOL',180,136,44,MARB,t,E.s2_mar-.05,{out:E.s2_pes-.12});
  TX('PESEBRE DE',180,92,28,'#fff',t,E.s2_pes-.05,{out:E.s2_col-.12});TX('MARFIL',180,136,44,IVO,t,E.s2_mfl-.05,{out:E.s2_col-.12});
  TX('COLLAR DE',180,92,28,'#fff',t,E.s2_col-.05,{out:E.s2_cas-.12});TX('PIEDRAS PRECIOSAS',180,136,28,'#7fe0f5',t,E.s2_pie-.05,{out:E.s2_cas-.12,w:340});
  TX('¡Y UNA CASA',180,92,34,'#fff',t,E.s2_cas-.1);TX('CON SIRVIENTES!',180,136,36,GOLD,t,E.s2_sir-.15,{w:340})}
// S3 AVENA CON ORO
function s3(t,u){const eat=t>E.s3_av?.9+.1*Math.sin(t*6):.8;
  world(camAt(u,[[0,180,320,1.0],[3.4,200,330,1.1]]),()=>{night(t);glow(227,420,200,'rgba(255,210,120,.3)',t>E.s3_oro?1:.4);ctx.fillStyle='#1b0d2c';ctx.fillRect(-100,FL,700,300);
    horse(112,FL,1.8,{t,head:eat,collar:true,cloak:PUR2,rim:GOLD});
    ctx.fillStyle=MARB;ctx.fillRect(193,480,76,FL-480);ctx.fillStyle=MARB2;ctx.fillRect(187,476,88,6);
    oatBowl(231,480,1.5,t,{gold:t>E.s3_hoj});
    if(t>E.s3_hoj){for(let i=0;i<46;i++){const ts=E.s3_hoj+R(i)*1.0,d=t-ts;if(d>0){const y=-10+d*210,x=157+R(i*3)*150+Math.sin(d*5+i)*6;if(y<478){ctx.save();ctx.translate(x,y);ctx.rotate(d*6+i);ctx.fillStyle=i%3?'#ffd24a':'#fff3b0';ctx.fillRect(-3,-1.6,6,3.2);ctx.restore()}}}}
    if(t>E.s3_oro){shock(231,466,t,E.s3_oro,'rgba(255,220,120,.9)',100,3,.6);burst(231,462,t,E.s3_oro,['#ffd24a','#fff'],26,170,.8,2.8)}});
  TG('DIÓN CASIO AÑADE',180,92,16,GOLD,PUR,t,E.s3_dion-.1,{out:E.s3_av-.1});
  TX('AVENA',180,92,44,'#fff',t,E.s3_av-.05,{out:E.s3_hoj-.35});TX('MEZCLADA CON',180,136,26,'#fff',t,E.s3_av+.35,{out:E.s3_hoj-.35,w:340});
  TX('HOJUELAS',180,92,38,'#fff',t,E.s3_hoj-.05);TX('DE ORO',180,140,52,GOLD,t,E.s3_oro-.05,{sh:'rgba(255,200,60,.8)'})}
// S4 PLANEABA nombrarlo cónsul (burbuja de pensamiento)
function s4(t,u){const pul=bounce(t,E.s4_cons,12,5),d=cl((t-E.s4_cons)/.45),wy=lerp(205,257,ei(d));
  world(camAt(u,[[0,180,320,1.0],[6.7,180,305,1.08]]),()=>{bg('#2a1240','#6a2a80');rays(180,280,t,14,560,GOLD,.07,.06,.12);stars(t,30,5,.5);
    ctx.fillStyle='#1b0d2c';ctx.fillRect(-100,FL,700,200);
    wreath(70,436,26,0);ctx.fillStyle=MARB;ctx.fillRect(40,450,60,20);txt('CALÍGULA',70,486,11,GOLD,{wt:'900'});
    circ(112,420,6+pul*2,'rgba(255,255,255,.85)');circ(132,394,9,'rgba(255,255,255,.85)');circ(152,366,12,'rgba(255,255,255,.85)');
    ctx.save();ctx.translate(180,285);ctx.scale(1+pul*.04,1+pul*.04);const cl_=()=>{ctx.beginPath();for(let i=0;i<14;i++){const a=i/14*TAU,r=1+.06*Math.sin(i*2.3);ctx.moveTo(Math.cos(a)*138*r+26,Math.sin(a)*105*r);ctx.arc(Math.cos(a)*138*r,Math.sin(a)*105*r,26,0,TAU)}ctx.moveTo(0,0);ctx.ellipse(0,0,138,105,0,0,TAU)};
    ctx.lineWidth=7;ctx.strokeStyle='rgba(255,255,255,.9)';cl_();ctx.stroke();ctx.fillStyle='#3d1a5c';cl_();ctx.fill();ctx.restore();
    horse(150,370,1.15,{t,collar:true,cloak:CRIM,wreath:t>E.s4_cons+.35,al:t>E.s4_plan-.1?1:0});
    if(t>E.s4_cons-.2&&t<E.s4_cons+.4)wreath(236,wy,17,d*3);
    if(t>E.s4_cons+.3){shock(236,274,t,E.s4_cons+.35,'rgba(255,230,120,.9)',80,3,.5)}});
  TX('LO MÁS FAMOSO',180,92,30,'#fff',t,E.s4_fam-.1,{out:E.s4_plan-.1});
  TX('PLANEABA',180,92,44,GOLD,t,E.s4_plan-.05,{out:E.s4_cons-.1,sh:'rgba(255,200,80,.7)'});TG('NOMBRARLO...',180,142,16,CRIM,'#fff',t,E.s4_nom-.1,{out:E.s4_cons-.1});
  slam('¡CÓNSUL!',180,128,56,'#fff',t,E.s4_cons,{stroke:PUR2,sw:10,sh:'rgba(255,200,80,.8)'});
  TG('UNO DE LOS CARGOS MÁS IMPORTANTES',180,188,12,GOLD,PUR,t,E.s4_carg-.1)}
// S5 NO LO HIZO: solo lo planeaba
function s5(t,u){const m=eo(cl((t-E.s5_dion2+.1)/.5)),a1=1-m,body=t<E.s5_dicen?'LO HIZO':'LO PLANEABA',showB=t>E.s5_dion+.15;
  const x1=lerp(-90,92,eo(cl((t-E.s5_sue+.1)/.5))),x2=lerp(450,lerp(268,180,m),eo(cl((t-E.s5_dion+.1)/.5)));
  night(t);glow(180,320,240,'rgba(160,80,200,.3)');
  withA(a1,()=>papel(x1,300,150,200,'SUETONIO',showB?body:'',{bs:15}));
  withA(1,()=>papel(x2,300+m*0,150,200,'DIÓN CASIO',showB?body:'',{s:1+m*.35,bs:15}));
  if(t>E.s5_hic&&t<E.s5_dicen){const k=eo(cl((t-E.s5_hic)/.25));[[92,a1],[268,1]].forEach(([x,a])=>{withA(a*k,()=>{line(x-55,262,x+55,338,CRIM,10);line(x+55,262,x-55,338,CRIM,10)})})}
  if(t>E.s5_plan&&t<E.s5_dion2+.1){const k=Math.max(0,spring((t-E.s5_plan)/.35,14,6));[92,268].forEach(x=>tr(x,380,k,0,()=>{ctx.strokeStyle=GREEN;ctx.lineWidth=9;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-18,0);ctx.lineTo(-5,13);ctx.lineTo(20,-16);ctx.stroke()}))}
  if(t>E.s5_nunca-.05){shock(180,300,t,E.s5_nunca,'rgba(255,60,60,.8)',150,5,.6)}
  TX('PERO OJO',180,92,40,GOLD,t,T[5]+.02,{out:E.s5_sue-.1,sh:'rgba(255,200,80,.7)'});
  TX('NINGUNO DICE',180,88,30,'#fff',t,E.s5_sue-.1,{out:E.s5_dicen-.1});TX('QUE LO HIZO',180,132,34,CRIM,t,E.s5_hic-.1,{out:E.s5_dicen-.1});
  TX('SOLO DICEN',180,88,28,'#fff',t,E.s5_dicen-.05,{out:E.s5_dion2-.1});TX('QUE LO PLANEABA',180,132,30,GOLD,t,E.s5_plan-.15,{out:E.s5_dion2-.1,w:340});
  TX('DIÓN DEJA CLARO',180,92,30,'#fff',t,E.s5_dion2-.05,{out:E.s5_nunca-.1,w:340});
  slam('NUNCA OCURRIÓ',180,468,32,'#fff',t,E.s5_nunca,{stroke:CRIM,sw:10,sh:'rgba(255,60,60,.7)'})}
// S6 ESCRIBIERON MUCHO DESPUÉS, todos lo odiaban, Británica admite
function s6(t,u){const A=t<E.s6_todos-.15,B=t>=E.s6_todos-.15&&t<E.s6_enc-.15,C=t>=E.s6_enc-.15;
  if(A){night(t);const L=eo(cl((t-E.s6_esc)/(E.s6_mucho-E.s6_esc+1.2))),p=eo(cl((t-T[6])/.4));
    withA(p,()=>{circ(50,310,10,CRIM);txt('AÑO 41',50,276,18,'#fff',{wt:'900',st:INK,sw:5});txt('muerte',50,344,13,GOLD)});
    line(50,310,50+250*L,310,GOLD,4);poly([[50+250*L,310-9],[50+250*L+16,310],[50+250*L,310+9]],GOLD);
    if(t>E.s6_esc-.1){const k=Math.max(0,spring((t-E.s6_esc-.6)/.5,12,6));papel(318,310,60,92,'',null,{s:k});tr(318,254,k,0,()=>{line(0,0,-14,-30,'#fff',3);poly([[-14,-30],[-4,-34],[-12,-40]],GOLD)})}
    TX('ESCRIBIERON',180,92,34,'#fff',t,E.s6_esc-.05,{out:E.s6_todos-.2});TG('MUCHO DESPUÉS',180,200,18,GOLD,PUR,t,E.s6_mucho-.1,{out:E.s6_todos-.2});TG('DE SU MUERTE',180,236,14,CRIM,'#fff',t,E.s6_mue-.1,{out:E.s6_todos-.2})}
  if(B){bg('#2a0a1a','#7a1a2a');glow(180,480,260,'rgba(255,60,40,.35)');rays(180,520,t,14,520,'#ff5a4d',.08,.1,.1);
    for(let i=0;i<8;i++)crowdFig(30+i*43+(i%2)*6,FL+10,1.45,t,i,'#12040c');
    for(let i=0;i<8;i++)glow(30+i*43+(i%2)*6+14,FL-80,26,'rgba(255,150,60,.5)',t>E.s6_odi?1:.3);
    TX('CASI TODOS',180,92,36,'#fff',t,E.s6_todos-.05,{out:E.s6_enc-.2});TX('ODIABAN',180,138,50,'#ff6a5a',t,E.s6_odi-.05,{out:E.s6_enc-.2,sh:'rgba(0,0,0,.5)'});TG('SU RECUERDO',180,186,16,CRIM,'#fff',t,E.s6_rec-.1,{out:E.s6_enc-.2})}
  if(C){night(t);const k=Math.max(0,spring((t-E.s6_enc+.2)/.6,12,6));glow(180,310,200,'rgba(255,210,120,.28)');
    tr(180,300,k,0,()=>{ctx.fillStyle=PUR2;rr(-62,-84,124,168,8);ctx.fill();ctx.fillStyle='#3a1250';rr(-62,-84,16,168,5);ctx.fill();ctx.strokeStyle=GOLD;ctx.lineWidth=2;rr(-50,-72,104,144,5);ctx.stroke();txt('ENCICLO-',4,-30,16,GOLD,{wt:'900'});txt('PEDIA',4,-8,16,GOLD,{wt:'900'});txt('BRITÁNICA',4,22,13,IVO,{wt:'900'})});
    if(t>E.s6_adm){const sp=t>E.s6_imp?0:1;for(let i=0;i<6;i++){const an=t*(sp?2.4:0)+i*TAU/6,x=180+Math.cos(an)*132,y=300+Math.sin(an)*72,vv=i%2==0;tag_pill(x,y,vv?'VERDAD':'RUMOR',vv?GREEN:CRIM)}}
    TG('LA ENCICLOPEDIA',180,92,15,GOLD,PUR,t,E.s6_enc-.1,{out:E.s6_sep-.1});TX('SEPARAR LA VERDAD',180,136,26,'#fff',t,E.s6_sep-.05,{w:340,out:E.s6_imp-.1});
    slam('CASI IMPOSIBLE',180,150,34,'#fff',t,E.s6_imp,{stroke:CRIM,sw:9,sh:'rgba(255,60,60,.7)'})}}
function tag_pill(x,y,s,col){ctx.save();ctx.translate(x,y);ctx.fillStyle=col;rr(-34,-11,68,22,11);ctx.fill();txt(s,0,1,12,'#fff',{wt:'900'});ctx.restore()}
// S7 BROMA CRUEL para burlarse del Senado
function s7(t,u){const sink=eo(cl((t-E.s7_ust)/.45)),q=t>E.s7_val-.1&&t<E.s7_ust+.1,big=1+.12*sink,lau=Math.max(0,Math.sin((t-E.s7_brom)*14))*(t>E.s7_brom&&t<E.s7_brom+1.4?1:0);
  world(camAt(u,[[0,180,320,1.0],[10,180,330,1.12]]),()=>{bg('#1f0d36','#5a2078');rays(180,300,t,12,500,GOLD,.06,.05,.1);
    ctx.fillStyle='#2a1440';ctx.fillRect(-100,FL-6,700,200);ctx.fillStyle=MARB2;ctx.fillRect(40,FL-6,280,10);
    for(let i=0;i<6;i++)senator(67+i*45,282,.9*(1-.3*sink),{col:'#d8cba4',sink,q:q?t+i:0});
    for(let i=0;i<7;i++)senator(45+i*45,336,1.05*(1-.3*sink),{sink,q:q?t+i*.7:0});
    glow(180,420,170,'rgba(255,210,120,.3)',.5+.5*sink);
    horse(160,FL-4-lau*8,1.25*big,{t,cloak:CRIM,collar:true,wreath:true,rim:GOLD});
    if(t>E.s7_ust)shock(180,420,t,E.s7_ust,'rgba(255,230,120,.9)',140,4,.6)});
  TX('¿QUÉ PASÓ',180,88,34,'#fff',t,E.s7_ent-.05,{out:E.s7_alg-.1});TX('DE VERDAD?',180,132,44,GOLD,t,E.s7_pas-.1,{out:E.s7_alg-.1});
  TG('ALGUNOS HISTORIADORES CREEN',180,92,14,GOLD,PUR,t,E.s7_alg-.1,{out:E.s7_cruel+.2});TX('UNA BROMA CRUEL',180,136,34,'#fff',t,E.s7_brom-.1,{out:E.s7_sen-.75,w:340});
  TX('PARA BURLARSE',180,92,30,'#fff',t,E.s7_sen-.7,{out:E.s7_cab-.4,w:340});TX('DEL SENADO',180,136,44,GOLD,t,E.s7_sen-.1,{out:E.s7_cab-.4,sh:'rgba(255,200,80,.7)'});
  TX('SI UN CABALLO',180,92,30,'#fff',t,E.s7_cab-.35,{out:E.s7_val-.1,w:340});TX('PUEDE GOBERNAR...',180,136,30,'#fff',t,E.s7_gob-.1,{out:E.s7_val-.1,w:340});
  TX('¿QUÉ VALEN',180,92,38,'#fff',t,E.s7_val-.05);TX('USTEDES?',180,138,52,CRIM,t,E.s7_ust-.1,{sh:'rgba(255,255,255,.4)'})}
// S8 RUMOR inventado por sus enemigos (chisme que pasa de boca en boca)
function s8(t,u){const px=[60,180,300],p=cl((t-T[8]-.15)/2.4)*2,i=Math.min(1,Math.floor(p)),f=p-i,bx=lerp(px[i],px[i+1],eio(f)),by=360-Math.sin(f*Math.PI)*46,fin=t>E.s8_ene;
  bg('#12081f','#3a1550');stars(t,40,9,.5);glow(180,470,220,'rgba(255,60,60,.25)',fin?1:0);
  ctx.fillStyle='#0b0414';ctx.fillRect(0,FL-40,360,200);
  px.forEach((x,k)=>hooded(x,FL-30,1.5,{flip:k==2,eyes:fin||(k<=i+(f>.9?1:0)&&t>T[8]+.5),rim:'#b070ff'}));
  const bs=t>E.s8_inv?1+.18*Math.sin((t-E.s8_inv)*10)*Math.exp(-(t-E.s8_inv)*3):1;
  tr(bx,by,bs,0,()=>{ctx.fillStyle='#fff';rr(-34,-28,68,50,14);ctx.fill();poly([[-8,20],[0,34],[6,20]],'#fff');horseIcon()});
  if(t>E.s8_inv){const k=Math.max(0,spring((t-E.s8_inv)/.35,14,6));tr(bx,by-4,k*1.3,-.3,()=>{ctx.strokeStyle=CRIM;ctx.lineWidth=4;rr(-36,-12,72,24,6);ctx.stroke();txt('FALSO',0,1,16,CRIM,{wt:'900'})})}
  TX('OTROS CREEN',180,90,34,'#fff',t,E.s8_otros-.05,{out:E.s8_ene-.15});
  slam('RUMOR',180,190,58,'#fff',t,E.s8_rumor,{stroke:CRIM,sw:10,sh:'rgba(255,60,60,.7)'});
  TG('INVENTADO',180,244,16,GOLD,PUR,t,E.s8_inv-.1);
  TX('POR SUS ENEMIGOS',180,92,30,'#ff8a7a',t,E.s8_ene-.1,{w:340})}
function horseIcon(){ctx.save();ctx.translate(-12,12);ctx.scale(.3,.3);horse(0,0,1,{t:0,wreath:true});ctx.restore()}
// S9 CIERRE: ¿loco o bromista?
function s9(t,u){bg('#1a0a30','#5a2078');stars(t,60,6,.8);rays(180,330,t,12,600,GOLD,.06,.08,.12);dust(t,24,'#ffd27a',6,10,1.3,.5);
  const bl=t>E.c_loco?wob(t-E.c_loco,12,5):0,bb=t>E.c_brom?wob(t-E.c_brom,12,5):0;
  glow(85,350,95,'rgba(255,80,80,.25)',t>E.c_loco?1:0);glow(275,350,95,'rgba(80,200,255,.22)',t>E.c_brom?1:0);
  tr(85,360+bl*-8,1.25+bl*.06,bl*.2,()=>{circ(0,0,38,'#d9a784');wreath(0,-30,34,0);circ(-13,-3,11,'#fff');circ(13,-3,11,'#fff');spiral(-13,-3,9,t,'#2a1240',2);spiral(13,-3,9,t+1,'#2a1240',2);ctx.strokeStyle='#7a2a2a';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(-14,20);for(let k=0;k<5;k++)ctx.lineTo(-14+k*7,20+(k%2?5:-1));ctx.stroke()});
  tr(275,360+bb*-8,1.25+bb*.06,bb*-.2,()=>{circ(0,0,38,'#d9a784');jester(0,-26,.8,t);circ(-12,-2,4,'#2a1240');circ(12,-2,4,'#2a1240');ctx.strokeStyle='#7a2a2a';ctx.lineWidth=3.5;ctx.beginPath();ctx.arc(0,6,17,.15,Math.PI-.15);ctx.stroke()});
  TX('LA PREGUNTA',180,78,30,'#fff',t,E.c_preg-.1,{out:E.c_cal-.12});TX('QUE DIVIDE',180,122,44,GOLD,t,E.c_preg+.15,{out:E.c_cal-.12,sh:'rgba(255,200,80,.7)'});
  TX('¿CALÍGULA ESTABA',180,76,26,'#fff',t,E.c_cal-.1,{w:340});
  TG('LOCO',85,246,17,CRIM,'#fff',t,E.c_loco-.1);TG('O BROMISTA',275,246,17,'#2a8aa8','#fff',t,E.c_brom-.1);
  slam('VS',180,420,40,'#fff',t,E.c_brom+.5,{stroke:CRIM,sw:9,sh:'rgba(255,170,60,.8)'});
  if(t>E.c_com){const q=eb((t-E.c_com)/.45);tr(180,160,q,0,()=>{ctx.fillStyle='#fff';rr(-100,-26,200,52,26);ctx.fill();txt('COMENTA',10,1,22,'#2a1240');ctx.fillStyle=CRIM;rr(-90,-14,28,22,6);ctx.fill();poly([[-84,8],[-80,16],[-74,8]],CRIM)});
    const tap=Math.abs(Math.sin((t-E.c_com)*5));tr(255,202+tap*6,1,-.5,()=>{ctx.fillStyle=IVO;rr(-14,-12,34,22,8);ctx.fill();rr(8,-8,26,8,4);ctx.fill()})}
  TG('SÍGUEME PARA MÁS',180,480,16,GOLD,PUR,t,E.c_sig-.1)}
boot([s0,s1,s2,s3,s4,s5,s6,s7,s8,s9],TRS,{cap:{acc:GOLD}});
