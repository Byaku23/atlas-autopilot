// ===== Los gansos que salvaron Roma — escenas =====
const TXL=(s,x,y,sz,col,t,t0,o={})=>mtext(s,x,y,sz,col,t,t0,Object.assign({stroke:'#f6ecd0',sw:Math.max(4,sz*.18)},o));
const caida=(x0,y0,t,t0,vx=-70)=>{const d=Math.max(0,t-t0);return [x0+vx*d,y0+d*40+d*d*380,-d*5]};
// S0 GANCHO: Roma arde de noche y aparecen los gansos
function s0(t,u){const c=camAt(u,[[0,180,375,1.0],[6.8,180,345,1.22]]);
  world(c,()=>{bg('#1a0a24','#8a3220');stars(t,40,2,.5);moon(290,130,20,t);city(t,{fire:1});embers(t,26,'#ffb060',3,30,1.6);
    for(let i=0;i<4;i++){const x=((t*20+i*150)%620)-130;gaul(x,GY+2,.8,{ph:t*7+i,sword:i%2,col:'#10081c',rim:TORCH})}
    if(t>E.h_gansos-.03){const q=Math.max(0,spring((t-E.h_gansos)/.6,12,6));glow(235,440,130,'rgba(255,255,255,.4)',q);
      goose(235,GY+4,2.0*q,{neck:eo(cl((t-E.h_gansos)/.5)),fl:.5+.5*Math.sin(t*14),rim:TORCH});shock(235,430,t,E.h_gansos,'rgba(255,255,255,.8)',120,3,.7)}});
  TX('ROMA CASI',180,84,34,'#fff',t,-.6);
  TX('DESAPARECE',180,128,44,GOLD,t,-.45,{sh:'rgba(255,120,40,.8)'});
  slam('390 a. C.',180,205,46,'#fff',t,E.h_390,{stroke:INK,sw:8,sh:'rgba(255,120,40,.8)'});
  TG('LA SALVARON UNOS GANSOS',180,262,15,GOLD,NAVY,t,E.h_gansos-.1)}
// S1 SAQUEO: los galos entran, los romanos huyen al Capitolio
function s1(t,u){const c=camAt(u,[[0,150,385,1.0],[3.2,160,385,1.0],[5.4,420,335,1.18],[6.75,420,332,1.2]]);
  world(c,()=>{bg('#2a1030','#b04a22');stars(t,30,5,.4);city(t,{fire:1});embers(t,20,'#ffb060',6,30,1.5);
    capitol(420,300,t,{});
    for(let i=0;i<5;i++){const x=-70+(t-T[1])*46+i*46;gaul(Math.min(x,300+i*12),GY+2,.85,{ph:t*8+i,sword:1,col:'#10081c',rim:TORCH});torch(Math.min(x,300+i*12)+14,GY-62,.55,t+i)}
    for(let i=0;i<5;i++){const q=(t-E.s1_rom-i*.18)/2.0;if(q>0){const x=lerp(110,400,eo(q));legion(x,GY+2,.62,{ph:t*12+i,spear:false,shield:false,col:'#24182a',al:1-cl((q-.8)/.2)})}}});
  TX('LOS GALOS DE BRENO',180,96,26,'#fff',t,E.s1_galos-.05,{out:E.s1_rom-.1,w:300});
  TG('ROMA SAQUEADA',180,142,15,RED,'#fff',t,E.s1_sac-.1,{out:E.s1_rom-.1});
  TX('LOS ROMANOS HUYEN',180,96,26,'#fff',t,E.s1_rom-.05,{out:E.s1_cap-.15,w:300});
  TX('COLINA DEL',180,92,28,'#fff',t,E.s1_cap-.1);TX('CAPITOLIO',180,136,44,GOLD,t,E.s1_cap-.02,{sh:'rgba(255,170,60,.7)'})}
// S2 ASEDIO: siete meses, hambre y los gansos sagrados de Juno
function s2(t,u){const c=camAt(u,[[0,180,360,1.0],[12,180,355,1.12]]);
  const toc=t>E.s2_nadie?eo(cl((t-E.s2_nadie)/.9)):0,back=t>E.s2_toc?eo(cl((t-E.s2_toc)/.4)):0;
  world(c,()=>{nightHill(t);moon(300,120,18,t);ctx.fillStyle=STONE2;ctx.fillRect(-200,GY,900,300);vgrad(GY,GY+14,'#6a70a0',STONE2,-200,900);
    for(let i=0;i<5;i++)glow(-60+i*100,GY+90,26,'rgba(255,130,50,.35)');
    temple(62,GY,1.45,t,{light:.8});torch(150,GY,.9,t);
    legion(100+toc*72-back*28,GY,1.15,{sleep:t<E.s2_gan?.35:.1,arm:-1.35+toc*1.1-back*1.0,flip:false,rim:TORCH,shield:t>E.s2_gan});
    if(t>E.s2_boc-.4&&t<E.s2_gan-.2){bowl(165,GY,1.3,t);glow(163,GY-14,22+4*Math.sin(t*6),'rgba(255,220,120,.5)',t>E.s2_boc?1:0)}
    if(t>E.s2_gan-.05){const q=Math.max(0,spring((t-E.s2_gan)/.55,12,6));
      if(t>E.s2_sag-.1){const k=eo(cl((t-E.s2_sag)/.6));glow(255,GY-40,120,'rgba(255,215,120,.5)',k);rays(255,GY-40,t,12,150,GOLD,.16*k,.12,.12)}
      for(let i=0;i<3;i++)goose(215+i*38,GY,1.25*q,{flip:true,ph:t*3+i*2,neck:.15+.1*Math.sin(t*2+i),fl:t>E.s2_toc?.5+.5*Math.sin(t*16+i):0,beak:t>E.s2_toc?.8:0,rim:GOLD});}
    if(t>E.s2_toc){const k=eo(cl((t-E.s2_toc)/.3));ctx.save();ctx.globalAlpha=k;circ(205,GY-92,17,null,'#ff5a4d',5);line(193,GY-80,217,GY-104,'#ff5a4d',5);ctx.restore()}
    shock(250,GY-50,t,E.s2_toc,'rgba(255,230,160,.8)',100,3,.6)});
  const lit=i=>t>E.s2_siete+i*.1;
  if(t>E.s2_siete-.1&&t<E.s2_boc-.15){for(let i=0;i<7;i++){const x=54+i*42,on=lit(i);withA(cl((t-E.s2_siete+.1)*5),()=>{circ(x,250,12,on?MOON:'rgba(255,255,255,.08)',on?null:'rgba(255,255,255,.4)',2);if(on)glow(x,250,26,'rgba(190,210,255,.5)',1)})}}
  slam('7',90,180,64,GOLD,t,E.s2_siete,{stroke:INK,sw:9,sh:'rgba(255,170,60,.8)',al:t<E.s2_boc-.2?1:0});
  if(t<E.s2_boc-.2)TX('MESES DE ASEDIO',224,176,22,'#fff',t,E.s2_meses-.15,{w:200,out:E.s2_boc-.2});
  TG('CON HAMBRE',180,300,16,RED,'#fff',t,E.s2_ham-.1,{out:E.s2_boc-.2});
  TX('CADA BOCADO',180,96,34,'#fff',t,E.s2_boc-.1,{out:E.s2_gan-.15});TX('CONTABA',180,140,42,GOLD,t,E.s2_cont-.05,{out:E.s2_gan-.15});
  TX('UNOS GANSOS',180,92,32,'#fff',t,E.s2_gan-.1,{out:E.s2_sag-.1});TX('SAGRADOS',180,96,42,GOLD,t,E.s2_sag-.05,{out:E.s2_nadie-.1,sh:'rgba(255,200,80,.8)'});
  TG('PARA LA DIOSA JUNO',180,142,15,CREAM,NAVY,t,E.s2_juno-.3,{out:E.s2_nadie-.1});
  TX('NADIE SE ATREVIÓ',180,96,28,'#fff',t,E.s2_nadie-.1,{out:E.s2_toc-.05});TX('A TOCARLOS',180,100,38,RED,t,E.s2_toc-.05,{sh:'rgba(255,60,40,.6)'})}
// S3 NOCHE: los galos escalan la roca; ni centinela ni perros se enteran
function s3(t,u){const c=camAt(u,[[0,120,405,1.1],[3.6,125,395,1.12],[6.3,150,372,1.2],[9,225,325,1.38],[11.2,238,302,1.5]]);
  const P=[cl((t-E.s3_roca)/8)*.85,cl((t-E.s3_sub)/6.6)*.88,cl((t-E.s3_sub-.5)/6.6)*.8,cl((t-E.s3_sub-1.0)/6.6)*.7];
  world(c,()=>{nightHill(t);moon(300,100,34,t);cliff();
    temple(330,300,.9,t,{light:.5});torch(262,300,.75,t);
    for(let i=0;i<3;i++)goose(374+i*30,300,1.0,{sleep:1,flip:true});
    legion(222,300,1.0,{flip:true,sleep:1,arm:-1.57,rim:TORCH});dogSleep(272,300,1.1,t);
    for(let i=3;i>=0;i--){const p=pathAt(P[i]);gaul(p[0],p[1],.85,{climb:true,ph:t*4+i*1.7,rot:-.18,col:'#10142e',rim:MOON})}});
  TX('UNA NOCHE DE LUNA',180,92,26,'#fff',t,E.s3_noche-.05,{out:E.s3_roca-.1,w:300});
  TG('JUNTO AL TEMPLO DE CARMENTIS',180,142,12,CREAM,NAVY,t,E.s3_carm-.1,{out:E.s3_sub-.15});
  TX('SUBIERON EN SILENCIO',180,92,24,'#fff',t,E.s3_sub-.05,{out:E.s3_cent-.1,w:340});
  TX('NI LOS CENTINELAS',180,92,26,'#fff',t,E.s3_cent-.05,{out:E.s3_perros-.1,w:300});
  TX('NI LOS PERROS',180,92,34,GOLD,t,E.s3_perros-.05,{w:300})}
// S4 ALARMA: los gansos graznan
function s4(t,u){const hp=t>E.s4_graz-.1?Math.max(0,Math.sin((t-E.s4_graz)*13)):0,ne=eio(cl((t-E.s4_gan)/.5));
  bg('#0b1030','#3a1850');stars(t,50,3,.8);moon(60,110,24,t);
  if(t>E.s4_si){const a=.06+.07*Math.sin(t*14);rays(180,300,t,16,520,'#ff5a4d',a,.2,.12)}
  for(let i=0;i<2;i++){const x=i?300:55,k=eo(cl((t-E.s4_gan-.2-i*.1)/.4));goose(x,540,1.5,{neck:k,flip:i==0?false:true,beak:hp,fl:t>E.s4_bat?.5+.5*Math.sin(t*16+i):0,rim:MOON})}
  goose(165,545,3.3,{neck:ne,beak:hp,fl:t>E.s4_bat-.1?.5+.5*Math.sin(t*16):0,rim:MOON});
  if(t>E.s4_graz-.1)for(let k=0;k<8;k++)shock(262,262,t,E.s4_graz+k*.48,'rgba(255,255,255,.85)',110,3,.7);
  TX('PERO',180,88,26,'#fff',t,E.s4_pero-.05,{out:E.s4_graz-.2});TX('LOS GANSOS SÍ',180,132,36,GOLD,t,E.s4_gan-.05,{out:E.s4_graz-.2,sh:'rgba(255,200,80,.8)'});
  slam('¡HONK!',180,150,60,'#fff',t,E.s4_graz-.05,{stroke:RED,sw:10,sh:'rgba(255,60,40,.8)'});
  TG('GRAZNAN Y BATEN LAS ALAS',180,206,13,RED,'#fff',t,E.s4_bat-.1)}
// S5 MANLIO: despierta, corre a la roca y derriba al primer galo (efecto dominó)
function s5(t,u){const c=camAt(u,[[0,300,262,1.35],[4.2,300,262,1.4],[6.3,262,268,1.4],[8,232,270,1.4],[10,228,285,1.3],[13,175,345,1.05]]);
  const wake=cl((t-E.s5_desp)/.4),run=eio(cl((t-E.s5_corr)/1.45)),mx=lerp(300,238,run),bash=t>E.s5_escudo?spring((t-E.s5_escudo)/.35,16,7):0;
  const G=[[.97,0],[.8,.22],[.63,.45],[.46,.7],[.3,2.0],[.14,2.45]];   // [posición en la roca, retraso de caída tras s5_escudo / s5_dardos]
  world(c,()=>{nightHill(t);moon(310,80,30,t);cliff();temple(345,300,.9,t,{light:.5});torch(282,300,.75,t);
    G.forEach((g,i)=>{const t0=i<4?E.s5_escudo+g[1]:E.s5_dardos+g[1]-1.8+(i-4)*.5,p=pathAt(g[0]+(i<4?.04*cl((t-E.s5_corr)/3.4):0)),f=caida(p[0],p[1],t,t0);
      if(t>t0){if(f[1]<760)gaul(f[0],f[1],.72,{climb:true,ph:t*4+i,rot:f[2],col:'#10142e',rim:MOON})}else gaul(p[0],p[1],.72,{climb:true,ph:t*4+i*1.7,rot:-.18,col:'#10142e',rim:MOON});
      if(t>t0&&t<t0+.12)burst(p[0]+6,p[1]-40,t,t0,['#fff','#ffd27a'],14,110,.5,2.4,i)});
    const flip=true,sl=1-wake;
    legion(mx+bash*8,300,1.05,{flip:true,hero:true,sleep:sl,ph:t*13*(run>0&&run<1?1:0),arm:-.5+bash*.2,rim:TORCH});
    if(t<E.s5_desp+.3){const k=(t*.8)%1;txt('z',mx-24,262-k*20,12,'#cfe0ff',{a:1-k});txt('Z',mx-14,254-((k+.5)%1)*20,14,'#cfe0ff',{a:1-((k+.5)%1)})}
    shock(mx-32,255,t,E.s5_escudo,'rgba(255,255,255,.9)',90,4,.5);
    if(t>E.s5_acud-.1)for(let i=0;i<3;i++){const q=eo(cl((t-E.s5_dem-i*.2)/.9)),x=lerp(420+i*22,262+i*26,q);legion(x,300,.95,{flip:true,ph:q<1?t*13:0,arm:t>E.s5_dardos+i*.08?.2:-.5,rim:TORCH,spear:!(t>E.s5_dardos+i*.08+.12)});
      const d=t-(E.s5_dardos+i*.08+.1);if(d>0&&d<.8){const sx=lerp(x,150,d/.8),sy=lerp(250,330,d/.8)-Math.sin(d/.8*Math.PI)*60;ctx.save();ctx.translate(sx,sy);ctx.rotate(Math.PI*.9+d*.8);line(-18,0,18,0,'#6a4a2a',2.4);poly([[18,-2.6],[26,0],[18,2.6]],'#dfe5f0');ctx.restore()}
      const e=t-(E.s5_pied+i*.12);if(e>0&&e<.7){const sx=lerp(x-10,170,e/.7),sy=lerp(250,350,e/.7)-Math.sin(e/.7*Math.PI)*70;circ(sx,sy,3.4,'#b9bfd6')}}});
  TX('MARCO MANLIO',180,92,30,GOLD,t,E.s5_marco-.05,{out:E.s5_desp-.1,sh:'rgba(255,170,60,.7)'});TG('ANTIGUO CÓNSUL',180,138,14,CREAM,NAVY,t,E.s5_cons-.1,{out:E.s5_desp-.1});
  TX('¡DESPIERTA!',180,96,38,'#fff',t,E.s5_desp-.05,{out:E.s5_corr-.1});
  TX('CORRE A LA ROCA',180,96,28,'#fff',t,E.s5_corr-.05,{out:E.s5_derr-.1,w:300});
  TX('DERRIBA AL PRIMER GALO',180,96,24,'#fff',t,E.s5_derr-.05,{out:E.s5_dem-.1,w:340});
  slam('¡ESCUDO!',180,150,44,RED,t,E.s5_escudo,{stroke:'#fff',sw:8,al:t<E.s5_dem-.2?1:0});
  TX('LOS DEMÁS ROMANOS',180,92,26,'#fff',t,E.s5_dem-.05,{out:E.s5_dardos-.1,w:300});
  TX('DARDOS Y PIEDRAS',180,96,30,GOLD,t,E.s5_dardos-.05,{w:300,sh:'rgba(255,170,60,.7)'})}
// S6 AMANECER: el centinela dormido
function s6(t,u){const c=camAt(u,[[0,205,345,1.0],[3,215,362,1.1],[5.2,215,380,1.2]]),k=eo(cl(u/5));
  world(c,()=>{bg(mixc('#26336e','#4a5a9e',k),mixc('#ff8a50','#ffd08a',k));glow(120,lerp(380,260,k),200,'rgba(255,200,120,.65)');circ(120,lerp(380,260,k),38,'#fff2c8');cliff();
    for(let i=0;i<3;i++)legion(300+i*34,300,1.0,{flip:true,col:'#2a1a28',rim:'#ffd9a0',arm:-.5});
    const f=caida(236,300,t,E.s6_arr,-46);
    if(t<E.s6_arr)legion(236,300,1.0,{flip:true,sleep:t>E.s6_durm?.9:.4,arm:-1.5,rim:'#ffd9a0'});
    else if(f[1]<820)legion(f[0],f[1],1.0,{flip:true,sleep:.9,rot:0,arm:-1,spear:false,shield:false});
    shock(240,296,t,E.s6_arr,'rgba(255,255,255,.7)',70,3,.5)});
  TX('AL AMANECER',180,96,34,GOLD,t,E.s6_amanecer-.05,{out:E.s6_arr-.15,sh:'rgba(255,170,60,.7)'});
  TG('EL CENTINELA QUE SE DURMIÓ',180,142,13,RED,'#fff',t,E.s6_cent-.05,{out:E.s6_arr-.15});
  TX('LO ARROJARON',180,92,30,'#fff',t,E.s6_arr-.1);TX('DESDE LA ROCA',180,136,34,RED,t,E.s6_roca-.1,{sh:'rgba(255,255,255,.4)'})}
// S7 ORO: el rescate, las pesas trucadas y la espada de Breno
function s7(t,u){const nb=Math.max(0,Math.min(6,Math.floor((t-E.s7_mil)/.15))),w=t>E.s7_pesas-.05,hit=t>E.s7_bal;
  let tilt=-.3*nb/6;if(w)tilt=lerp(tilt,-.06,eo(cl((t-E.s7_pesas)/.6)));if(hit)tilt=lerp(-.06,.34,eo(cl((t-E.s7_bal)/.25)))+.07*wob(t-E.s7_bal,14,5);
  bg('#1a1030','#43255a');stars(t,40,8,.6);glow(180,330,220,'rgba(255,200,100,.18)');
  ctx.fillStyle='#0d0820';ctx.fillRect(0,GY,360,200);
  if(t>E.s7_fue-.2&&t<E.s7_pesas+.4)for(let i=0;i<3;i++){const x=lerp(120,400,cl((t-E.s7_fue+.2-i*.3)/2.4));gaul(x,GY-4,.55,{ph:t*7+i,col:'#0a0818',flip:false,rim:TORCH,al:.9})}
  const pans=balance(180,GY-6,1.4,tilt,{l:()=>{for(let i=0;i<nb;i++)goldBar((i%3-1)*26,-((i/3|0)*12),1)},r:()=>{if(w){for(let i=0;i<3;i++)weight((i-1)*22,0,1,'#8a90a8')}}});
  if(t>E.s7_tiro&&!hit||hit&&t<E.s7_bal+.5){const q=cl((t-E.s7_tiro)/(E.s7_bal-E.s7_tiro)),px=pans[2],py=pans[3];const sx=lerp(340,px,eo(q)),sy=lerp(100,py-14,q*q)-Math.sin(q*Math.PI)*70;sword(sx,sy,1.2,lerp(-.7,Math.PI,q))}
  if(hit)burst(pans[2],pans[3]-10,t,E.s7_bal,['#fff','#ffd27a'],22,150,.6,2.6);
  TX('ROMA NO GANÓ DEL TODO',180,100,28,'#fff',t,E.s7_aun-.05,{out:E.s7_mil-.2,w:300});
  if(t>E.s7_mil-.1&&t<E.s7_pesas-.15)withA(cl((t-E.s7_mil+.1)*6),()=>{txt(fmtN(countV(0,1000,t,E.s7_mil,1.1),0),180,130,56,GOLD,{st:INK,sw:9,sh:'rgba(255,170,60,.8)'})});
  TG('LIBRAS DE ORO',180,170,16,GOLD,NAVY,t,E.s7_libras-.05,{out:E.s7_pesas-.15});TG('PARA QUE SE FUERAN',180,206,13,CREAM,NAVY,t,E.s7_fue-.7,{out:E.s7_pesas-.15});
  TX('PESAS',180,92,34,'#fff',t,E.s7_pesas-.05,{out:E.s7_ay-.15});TX('TRUCADAS',180,136,40,RED,t,E.s7_truc-.05,{out:E.s7_ay-.15});
  TX('¡AY DE LOS',180,100,38,'#fff',t,E.s7_ay-.05);slam('VENCIDOS',180,170,54,RED,t,E.s7_venc-.05,{stroke:'#fff',sw:9});TG('VAE VICTIS',180,214,13,GOLD,NAVY,t,E.s7_venc+.35)}
// S8 LIVIO: el relato, lo dudoso y lo que pudo ser real
function s8(t,u){const q=spring((t-T[8]-.1)/.7,11,6);
  bg('#f3e6bf','#d6bf86');withA(.18,()=>{for(let i=0;i<12;i++)circ(30+R(i)*300,80+R(i*3)*480,30+R(i*5)*50,'#b89c5a')});
  const sy=lerp(900,300,eo(cl((t-T[8]-.1)/.7)));
  papiro(180,sy,200,270,t,{strike:t>E.s8_dud?[1,2,5]:null});
  if(t>E.s8_gan-.1){const k=Math.max(0,spring((t-E.s8_gan)/.5,12,6));glow(180,415,90,'rgba(255,215,120,.7)',k);goose(150,445,.95*k,{neck:.4,flip:false})}
  if(t>E.s8_real-.05){const k=eo(cl((t-E.s8_real)/.3));ctx.save();ctx.globalAlpha=k;ctx.strokeStyle='#2f8f4a';ctx.lineWidth=7;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(214,410);ctx.lineTo(228,424);ctx.lineTo(256,388);ctx.stroke();ctx.restore()}
  if(t>E.s8_dud){const k=Math.max(0,spring((t-E.s8_dud)/.35,16,7));tr(180,260,1.6*k,-.22,()=>{ctx.strokeStyle='#c8281c';ctx.lineWidth=5;rr(-70,-22,140,44,8);ctx.stroke();txt('DUDOSO',0,1,28,'#c8281c',{wt:'900'})})}
  TXL('ASÍ LO CUENTA',180,66,24,'#3a2010',t,E.s8_asi-.05);TXL('TITO LIVIO',180,108,40,'#7a3a10',t,E.s8_livio-.05,{sh:'rgba(255,255,255,.5)'});
  TG('SIGLOS DESPUÉS',180,470,14,'#3a2010','#f6ecd0',t,E.s8_sig-.05,{out:E.s8_dud-.1});
  TG('PARTE ES DUDOSA',180,470,14,'#c8281c','#fff',t,E.s8_parte-.05,{out:E.s8_gan-.1});
  TG('LO DE LOS GANSOS PUDO SER REAL',180,490,13,'#2f8f4a','#fff',t,E.s8_gan+.2)}
// S9 CIERRE: la pregunta que divide
function s9(t,u){bg('#120c34','#4a2a6a');stars(t,70,6,.9);rays(180,330,t,12,600,'#ffd27a',.07,.08,.12);dust(t,30,'#ffd27a',6,10,1.3,.5);
  const bg_=t>E.c_gan?wob(t-E.c_gan,12,5):0,bm=t>E.c_man?wob(t-E.c_man,12,5):0;
  glow(85,430,90,'rgba(255,255,255,.18)',t>E.c_gan?1:0);glow(282,430,90,'rgba(255,90,60,.2)',t>E.c_man?1:0);
  goose(80,500+bg_*-6,2.0,{neck:.5,fl:t>E.c_gan?.5+.5*Math.sin(t*10):0,beak:t>E.c_gan?Math.max(0,Math.sin(t*9)):0,rim:GOLD});
  legion(282,505+bm*-6,1.7,{flip:true,hero:true,arm:-.5,rim:GOLD,ph:0});
  TX('¿QUIÉN SALVÓ',180,78,28,'#fff',t,E.c_quien-.1);TX('ROMA DE VERDAD?',180,118,32,GOLD,t,E.c_quien+.15,{sh:'rgba(255,170,60,.8)'});
  TG('LOS GANSOS',85,322,13,CREAM,NAVY,t,E.c_gan-.1);TG('MANLIO',278,300,13,RED,'#fff',t,E.c_man-.1);
  slam('VS',180,420,40,'#fff',t,E.c_man+.35,{stroke:RED,sw:9,sh:'rgba(255,170,60,.8)'});
  if(t>E.c_com){const q=eb((t-E.c_com)/.45);tr(180,185,q,0,()=>{ctx.fillStyle='#fff';rr(-100,-26,200,52,26);ctx.fill();txt('COMENTA',10,1,22,'#2a1240');ctx.fillStyle=RED;rr(-90,-14,28,22,6);ctx.fill();poly([[-84,8],[-80,16],[-74,8]],RED)});
    const tap=Math.abs(Math.sin((t-E.c_com)*5));tr(255,222+tap*6,1,-.5,()=>{ctx.fillStyle=CREAM;rr(-14,-12,34,22,8);ctx.fill();rr(8,-8,26,8,4);ctx.fill()})}}
boot([s0,s1,s2,s3,s4,s5,s6,s7,s8,s9],TRS,{cap:{acc:GOLD}});
