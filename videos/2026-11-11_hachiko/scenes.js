// ===== Hachikō — escenas =====
const SY=t=>t; 
// S0 GANCHO: estación al atardecer, el perro espera; la cámara se acerca al reloj
function s0(t,u){const c=camAt(u,[[0,180,380,1.05],[4.5,180,335,1.32]]);
  world(c,()=>{dusk(.55);sun(300,300,34,'#ffb070');skyline(430,'#2a1850',3,-300,700);skyline(448,'#1c1038',8,-300,700);ground(520);
    station(180,520,t,{hand:.08+u*.004});lamp(285,400,1,t);lamp(75,400,1,t);
    for(let i=0;i<4;i++){const x=((t*26+i*190)%760)-200;crowd(x,540+(i%2)*10,.85,'#0e0a1a',t*7+i)}
    akita(112,556,1.3,{rim:'#ffb070',tail:Math.sin(t*3)*.05});
    shock(180,455,t,E.h_volver,'rgba(255,200,120,.8)',90,3,.7)});
  TX('UN PERRO ESPERÓ',180,92,27,'#fff',t,-.6);
  TX('CASI 10 AÑOS',180,140,42,GOLD,t,E.h_casi-.05,{sh:'rgba(255,170,60,.7)'});
  TG('NUNCA IBA A VOLVER',180,196,15,VERM,'#fff',t,E.h_nunca-.05)}
// S1 PRESENTACIÓN: Hachikō y el profesor Ueno llegan a su lado
const PX=tt=>lerp(520,262,eo((tt-E.s1_prof+.2)/1.3));
function s1(t,u){const arr=E.s1_prof+1.1,c=camAt(u,[[0,150,420,1.0],[5,170,420,1.1]]);
  world(c,()=>{dusk(.42);sun(285,420,52,'#ff8a5a');skyline(500,'#3a2058',5,-300,800);ground(560,'#2a1640','#160c2a');
    const wag=t>arr?Math.sin(t*15)*.3:Math.sin(t*2)*.06*(1+3*wob(t-E.s1_nom,8,4));
    akita(130,560,1.7,{rim:'#ffd9a0',tail:wag,head:t>arr?-.12:0});
    if(t>E.s1_prof-.3){const x=PX(t),walking=t<arr;prof(x,560,1.5,{ph:t*9,flip:true,col:'#1a1228',rim:'#ffd9a0'})}
    if(t>arr){heart(200,470-((t-arr)*30)%40,1,VERM,1-((t-arr)*30%40)/40)}
    dust(t,24,'#ffd9a0',4,8,1.2,.5)});
  TX('HACHIKŌ',180,96,42,GOLD,t,E.s1_nom-.05,{sh:'rgba(255,170,60,.7)'});
  TG('RAZA AKITA',180,140,14,CREAM,'#2a1240',t,E.s1_akita);
  TG('NACE EN JAPÓN',180,178,13,CREAM,'#2a1240',t,E.s1_nac-.05,{out:E.s1_1923-.1});
  slam('1923',180,200,56,'#fff',t,E.s1_1923,{stroke:'#2a1240',sw:9,sh:'rgba(255,170,60,.8)'});
  TG('PROF. HIDESABURŌ UENO',180,290,12,CREAM,'#2a1240',t,E.s1_ueno-.05);
  TG('TOKIO',180,316,12,GOLD,'#2a1240',t,E.s1_tokio)}
// S2 RUTINA: caminan a la estación (mañana) y él espera al volver (tarde)
const WX=tt=>lerp(80,540,eio(cl((tt-T[2]-.1)/(E.s2_shib-T[2]-.2))));
function s2(t,u){const arrived=t>E.s2_shib,k=cl((t-E.s2_tarde+.3)/1.3);
  const f=follow(tt=>[WX(tt)+70,420],t,.25),c=arrived?{x:lerp(f[0],612,eo((t-E.s2_shib)/.6)),y:420,z:lerp(1.1,1.3,eo((t-E.s2_shib)/.8)),r:0}:{x:f[0],y:420,z:1.1,r:0};
  world(c,()=>{dusk(k*.55);sun(lerp(200,720,k),lerp(300,330,k),30,k>.4?'#ffb070':'#fff3c0');skyline(500,mixc('#7a98c8','#3a2058',k),3,-300,1100);ground(560,mixc('#6a6a88','#2a1640',k),mixc('#40405e','#160c2a',k));
    station(660,560,t,{light:.3+k*.7,hand:.1+.4*k});
    for(let x=-100;x<1000;x+=170)lamp(x,430,1,t,'#ffcf7a',.4+k*.6);
    const wx=WX(t);
    if(!arrived||t<E.s2_shib+.5){const a=arrived?1-cl((t-E.s2_shib-.2)/.3):1;withA(a,()=>prof(wx+34,560,1.5,{ph:t*9,col:'#1a1228',rim:'#ffd9a0'}))}
    if(!arrived)akita(wx-4,560,1.3,{tail:Math.sin(t*14)*.3,rim:'#ffd9a0'});
    else{const w=t>E.s2_esp?Math.sin(t*16)*.4:0;akita(580,560,1.3,{tail:w,rim:'#ffd9a0'})}
    if(t>E.s2_esp){const q=eo((t-E.s2_esp)/.5);withA(q,()=>prof(lerp(666,610,q),560,1.5,{ph:t*9,flip:true,col:'#1a1228',rim:'#ffd9a0'}));heart(590,470-((t-E.s2_esp)*28)%40,1,VERM,1-(((t-E.s2_esp)*28)%40)/40)}
    if(k<.5)petals(t,16,'#ffc4d8',3,20,.7)});
  TX('CADA MAÑANA',180,96,32,'#fff',t,E.s2_man-.05,{out:E.s2_tarde-.15});
  TG('HASTA SHIBUYA',180,138,14,GOLD,'#2a1240',t,E.s2_shib-.1,{out:E.s2_tarde-.1});
  TX('Y CADA TARDE',180,96,32,GOLD,t,E.s2_tarde-.05,{sh:'rgba(255,170,60,.7)'});
  TG('VOLVÍA A ESPERARLO',180,140,14,VERM,'#fff',t,E.s2_esp-.15)}
// S3 EL TREN LLEGA Y ÉL NO BAJA
const TRX=tt=>lerp(-260,105,eo(cl((tt-27.75)/1.25)));
function s3(t,u){const dead=t>E.s3_mur,tr_=TRX(t);const L=t>E.s3_bajo?cl(1-(t-E.s3_bajo)/.5)*.9+.1:1;
  const c=camAt(u,[[0,180,360,1.0],[8,185,360,1.15]]);
  world(c,()=>{bg('#1a1238','#3c2058');ctx.fillStyle='#2a1a48';for(let x=-40;x<500;x+=90)ctx.fillRect(x,100,16,420);
    vgrad(500,900,'#251836','#0e0a1c',-300,1000);ctx.fillStyle='#4a3a60';ctx.fillRect(-300,505,1000,6);ctx.fillStyle='#14102a';ctx.fillRect(-300,540,1000,10);
    lamp(60,330,1,t,'#ffcf7a',L);lamp(300,330,1,t,'#ffcf7a',L);
    if(t>27.75)train(tr_,548);
    if(t>E.s3_tren+.9&&t<E.s3_bajo+1){const q=t-E.s3_tren-.9;for(let i=0;i<5;i++){const x=lerp(105-20,-120,cl((q-i*.18)/1.4));if(q>i*.18&&x>-130)crowd(x,544,.95,'#0c0818',t*8+i)}}
    akita(296,548,1.45,{flip:true,rim:'#ffcf7a',tail:Math.sin(t*3)*.05,head:t>E.s3_bajo?.18:0,al:1});
    if(dead){ctx.fillStyle='rgba(8,6,30,'+(0.35*cl((t-E.s3_mur)/.6))+')';ctx.fillRect(-300,0,1000,700)}
    if(t>E.s3_bajo){ctx.fillStyle='rgba(6,4,16,'+(.5*cl((t-E.s3_bajo)/.6))+')';ctx.fillRect(-300,0,1000,700)}});
  if(t>E.s3_mayo-.1){const q=eb((t-E.s3_mayo+.05)/.5),out=t>E.s3_esa?eo((t-E.s3_esa)/.4):0;tr(0,0,1,0,()=>{const y=lerp(-170,70,q)-out*200;calCard(100,y,160,120,'MAYO','1925','',t,dead?'#2a1a48':VERM);
    if(dead){const k=eo((t-E.s3_mur)/.4);ctx.fillStyle='#0a0618';ctx.beginPath();ctx.moveTo(100,y+4);ctx.lineTo(100+46*k,y+4);ctx.lineTo(100,y+50*k);ctx.fill()}})}
  TX('ESA TARDE',180,230,28,'#fff',t,E.s3_esa-.05,{out:E.s3_tren+.1});
  TX('LLEGÓ EL TREN',180,266,30,GOLD,t,E.s3_tren-.05,{out:E.s3_el-.5});
  TX('Y ÉL',180,230,26,'#fff',t,E.s3_el-.08);slam('NO BAJÓ',180,282,50,VERM,t,E.s3_bajo,{stroke:INK,sw:7})}
// S4 ESTACIONES: el mismo sitio, año tras año
const SEA=[['#f7c6d9','#fff0e0','PRIMAVERA','#ffc4d8'],['#3ea0e8','#d8f4ff','VERANO','#fff3c0'],['#c4582a','#ffd08a','OTOÑO','#e0701e'],['#25365e','#9fb4d8','INVIERNO','#ffffff']];
const SKT=[E.s4_poc-.1,E.s4_dia-.1,E.s4_sig2-.1,E.s4_casi-.1];
function seasonAt(t){let i=-1;SKT.forEach((x,k)=>{if(t>=x)i=k});return i}
function s4(t,u){const i=seasonAt(t),p=i<0?-1:i,prev=p>0?p-1:-1,q=p>=0?eo((t-SKT[p])/.35):1;
  const col=(k,j)=>k<0?(j?'#3a2058':'#1a1238'):SEA[k][j];
  const c=camAt(u,[[0,200,430,1.15],[11,200,430,1.3]]);
  world(c,()=>{bg(mixc(col(prev,0),col(p,0),q),mixc(col(prev,1),col(p,1),q));
    if(p===1)rays(300,260,t,12,700,'#fff',.15,.05,.1);
    skyline(500,mixc('#ffffff','#000000',.35),4,-300,800);ctx.globalAlpha=.55;skyline(500,p===3?'#3a4a70':p===2?'#7a3a20':'#6a5a88',4,-300,800);ctx.globalAlpha=1;
    ground(560,p===3?'#dfe8f6':p===2?'#a05a2a':'#5a7a48',p===3?'#9fb4d8':p===2?'#6a3a20':'#3a5a30');
    station(40,560,t,{light:.6,wall:'#4a3470'});lamp(300,440,1,t,'#ffcf7a',.5);
    akita(210,560,1.7,{flip:true,rim:'#fff',tail:Math.sin(t*3)*.05,head:.05*Math.sin(t*1.5)});
    if(p===0)petals(t,34,'#ffb4cc',3,22);if(p===2)petals(t,40,'#e0701e',5,30);if(p===3)snowf(t,90,2,.9)});
  TX('SIGUIÓ ESPERANDO',180,96,28,'#fff',t,E.s4_sig-.05,{out:E.s4_poc-.05});
  SEA.forEach((s,k)=>{TG(s[2],180,96,16,GOLD,'#2a1240',t,SKT[k]+.05,{out:(SKT[k+1]||E.s4_nueve)-.1})});
  if(t>E.s4_nueve-.1){const q=eb((t-E.s4_nueve+.05)/.5),v=Math.round(countV(0,9,t,E.s4_nueve,.7));
    tr(180,275,q,0,()=>{calCard(-90,-75,180,150,'ESPERANDO',v+(v===1?' AÑO':' AÑOS'),t>E.s4_meses?'+ 9 MESES':'',t,'#7a3ad8')})}}
// S5 FAMA Y ESTATUA
function s5(t,u){const B=T[5]+7.2;const A=t<B;let c;
  if(A){bg('#ecd09a','#c2905a');rays(180,250,t,16,600,'#fff',.2,.06,.12);
    if(t<E.s5_per+.3){withA(1-cl((t-E.s5_per)/.3),()=>{akita(180,500,1.5,{flip:true,rim:'#fff',shade:'#a89870',tail:Math.sin(t*3)*.05});TG('SEGUÍA ALLÍ, EN LA ESTACIÓN',180,250,12,'#2a1240','#fff',t,T[5]+.3,{out:E.s5_dos-.1})})}
    slam('1932',180,120,66,'#2a1240',t,E.s5_dos,{stroke:CREAM,sw:7});
    if(t>E.s5_per-.1){const q=spring(t-E.s5_per+.1,9,6);news(180,340,q*1.0,-.06+.06*q,t)}
    if(t>E.s5_jap-.05){const q=t-E.s5_jap;for(let i=0;i<14;i++){const ph=(q*.6+R(i)*.9)%1,x=60+R(i*3)*240,y=520-ph*480;if(q>R(i)*.8)heart(x+Math.sin(ph*9+i)*14,y,1.2+R(i)*.8,i%3?VERM:'#ff8aa8',1-ph)}shock(180,340,t,E.s5_jap,VERM,160,4,.7)}
    TX('UN PERIÓDICO',180,480,24,'#2a1240',t,E.s5_per-.05,{stroke:CREAM,sw:5,out:E.s5_jap-.1});
    TX('TODO JAPÓN',180,470,34,VERM,t,E.s5_jap-.05,{stroke:CREAM,sw:6});
    const w=eo(cl((t-B+.4)/.4));if(w>0){ctx.fillStyle='rgba(30,20,60,'+w+')';ctx.fillRect(0,0,360,640)}}
  else{const q=eo((t-B)/.5);bg(mixc('#1a1238','#3a2a68',q),mixc('#2a1a50','#ff9a60',q));sun(260,300,36,'#ffd9a0');skyline(470,'#2a1850',2);ground(520,'#2a1640','#160c2a');
    const rise=eo(cl((t-E.s5_est)/.9));
    statueDog(180,540,1.7,{nodog:t<E.s5_est});
    if(t<E.s5_est+.8){const lift=eo(cl((t-E.s5_est)/.7));ctx.save();ctx.translate(180,540-lift*260);ctx.globalAlpha=1-lift;const g=ctx.createLinearGradient(-70,0,70,0);g.addColorStop(0,'#a83030');g.addColorStop(.5,'#e85a5a');g.addColorStop(1,'#a83030');ctx.fillStyle=g;ctx.beginPath();ctx.moveTo(-72,-4);ctx.bezierCurveTo(-76,-110,-60,-190,0,-196);ctx.bezierCurveTo(60,-190,76,-110,72,-4);ctx.closePath();ctx.fill();ctx.strokeStyle='rgba(90,10,20,.35)';ctx.lineWidth=2;for(let i=-3;i<=3;i++){ctx.beginPath();ctx.moveTo(i*20,-190+Math.abs(i)*6);ctx.quadraticCurveTo(i*26,-100,i*24,-6);ctx.stroke()}ctx.fillStyle=GOLD;ctx.fillRect(-73,-12,146,8);ctx.restore()}
    if(t>E.s5_est+.1)sparks(180,430,t,E.s5_est+.1,24,GOLD,150,.9);
    if(t>E.s5_estuvo-.1){const a=eo((t-E.s5_estuvo+.1)/.4);akita(268,540,1.3,{al:a,flip:true,rim:GOLD,tail:Math.sin(t*15)*.35});heart(262,420-((t-E.s5_estuvo)*30)%40,1,VERM,1-(((t-E.s5_estuvo)*30)%40)/40)}
    if(t>E.s5_inau){burst(180,300,t,E.s5_inau,[GOLD,VERM,'#fff'],40,200,1.2,3)}
    slam('1934',180,110,70,GOLD,t,E.s5_cuatro,{stroke:INK,sw:8,sh:'rgba(255,170,60,.8)'});
    TG('ESTATUA EN LA ESTACIÓN',180,170,14,CREAM,'#2a1240',t,E.s5_est-.05)}}
// S6 SU ÚLTIMA NOCHE
function s6(t,u){bg('#05081a','#14204a');stars(t,60,4,.7);snowf(t,70,3,.9,20);
  skyline(500,'#0c1230',6);ground(540,'#1c2a50','#0a1030');lamp(255,300,1.6,t,'#ffcf7a',1);
  glow(190,500,150,rgba('#ffcf7a',.18));
  akitaLie(150,552,2.3,{});
  const breath=Math.sin(t*2)*.01;
  TX('MURIÓ',180,100,40,'#fff',t,E.s6_mur-.05,{stroke:'rgba(0,0,10,.8)',sw:7});
  TG('8 DE MARZO DE 1935',180,150,14,CREAM,'#14204a',t,E.s6_ocho-.05);
  TG('EN UNA CALLE DE SHIBUYA',180,184,12,GOLD,'#14204a',t,E.s6_calle-.1);
  if(t>E.s6_once-.1){const q=eb((t-E.s6_once+.1)/.45);tr(180,300,q,0,()=>{calCard(-70,-50,140,100,'EDAD','11','AÑOS',t,'#7a6a9a')})}}
// S7 LA ESTATUA: fundida en la guerra, nueva en 1948
function s7(t,u){const g=cl((t-E.s7_gue)/.8);bg(mixc('#4a4658','#2a1a20',g),mixc('#8a8798','#7a3a28',g));
  if(g>0){glow(180,520,300,rgba('#ff6a30',.35*g));smoke(120,520,t,E.s7_gue,40,'60,50,60',3);smoke(250,520,t,E.s7_gue+.3,50,'70,60,70',3)}
  ground(540,'#3a3548','#1a1624');
  const m=cl((t-E.s7_fund)/1.1); // fundición
  if(t<E.s7_pus-.4){const hot=cl((t-E.s7_fund+.3)/.5);
    tr(180,540,1,0,()=>{ctx.save();ctx.translate(0,0);ctx.scale(1+m*.2,1-m*.92);glow(0,-60,150,rgba('#ff7a30',.7*hot));statueDog(0,0,2.1,{col:mixc(BRZ,'#ff8a30',hot),sh:mixc('#7a5524','#ff5a10',hot)});ctx.restore();
      if(m>0){ctx.fillStyle=rgba('#ff8a30',.9);ctx.beginPath();ctx.ellipse(0,2,60+m*80,5+m*8,0,0,TAU);ctx.fill()}});
    if(m>0&&m<1)sparks(180,500,t,E.s7_fund+.2,30,'#ffb050',140,1.4)}
  if(t>E.s7_pus-.3){const r=spring(t-E.s7_pus+.3,8,6);ctx.save();ctx.translate(180,540);ctx.scale(1,Math.max(.01,r));ctx.translate(-180,-540);glow(180,440,200,rgba(GOLD,.35));statueDog(180,540,2.1,{});ctx.restore();if(t>E.s7_48)sparks(180,430,t,E.s7_pus,30,GOLD,160,1.0)}
  TX('LA ESTATUA ORIGINAL',180,92,24,'#fff',t,E.s7_est-.05,{out:E.s7_fund+.9});
  TX('SE FUNDIÓ',180,134,36,VERM,t,E.s7_fund-.05,{out:E.s7_gue+1.0,sh:'rgba(255,90,40,.7)'});
  TG('DURANTE LA GUERRA',180,176,14,CREAM,'#3a2a30',t,E.s7_gue-.05,{out:E.s7_48-.2});
  slam('1948',180,110,76,GOLD,t,E.s7_48,{stroke:INK,sw:8,sh:'rgba(255,170,60,.8)'});
  TG('LA QUE SIGUE HOY EN SHIBUYA',180,170,13,CREAM,'#2a1240',t,E.s7_pus+.1)}
// S8 CTA: la pregunta que divide
function s8(t,u){bg('#1a1040','#5a3070');stars(t,70,5,.9);rays(180,330,t,12,600,'#ffd27a',.07,.08,.12);dust(t,30,'#ffd27a',6,10,1.3,.5);
  lamp(280,300,1.4,t,'#ffcf7a',1);
  akita(150,545,1.9,{rim:GOLD,tail:Math.sin(t*3)*.08,head:.08*Math.sin(t*1.5)});
  if(t>E.c_leal){for(let i=0;i<6;i++){const ph=((t-E.c_leal)*.5+R(i)*.8)%1;heart(60+R(i*3)*240,470-ph*300,1+R(i)*.7,VERM,.8*(1-ph))}}
  TX('¿ERA',180,92,26,'#fff',t,E.c_era-.05);
  TX('LEALTAD?',180,140,52,GOLD,t,E.c_leal-.05,{sh:'rgba(255,170,60,.8)'});
  TX('O NO SABÍA DEJAR DE ESPERAR',180,215,24,'#fff',t,E.c_dejar-.9,{w:290});
  if(t>E.c_com){const q=eb((t-E.c_com)/.45);tr(180,350,q,0,()=>{ctx.fillStyle='#fff';rr(-100,-26,200,52,26);ctx.fill();txt('COMENTA',10,1,22,'#2a1240');ctx.fillStyle=VERM;rr(-90,-14,28,22,6);ctx.fill();poly([[-84,8],[-80,16],[-74,8]],VERM)});
    const tap=Math.abs(Math.sin((t-E.c_com)*5));tr(255,385+tap*6,1,-.5,()=>{ctx.fillStyle=CREAM;rr(-14,-12,34,22,8);ctx.fill();rr(8,-8,26,8,4);ctx.fill()})}}
boot([s0,s1,s2,s3,s4,s5,s6,s7,s8],TRS,{cap:{acc:GOLD}});
