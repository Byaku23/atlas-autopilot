// ===== Termópilas — escenas =====
// S0 GANCHO: el "300" se parte con la grieta
function s0(t,u){const c=camAt(u,[[0,180,330,1.18],[5.8,180,320,1.0]]);
  world(c,()=>{bg(SEA,SEA1);stars(t,60,2,.5);waves(470,t,'#0a3342',4);waves(500,t,'#07222e',5);glow(180,300,210,rgba(GOLD,.18));
    for(let i=0;i<9;i++){const q=eb((t-E.s0_300-.06*i)/.4);if(q>0)hop(52+i*32,498+Math.sin(i)*3,.95*q,'#0a0605',{sh:'#a77a2c',rim:GOLD,crest:CRIM,a:.95})}
    const cr=t<E.s0_no?0:eo((t-E.s0_no)/.5),sh=wob(t-E.s0_300,12,5)*5;
    const draw300=(dx)=>slam('300',180+dx,290+sh,128,GOLD,t,-.5,{st:'#3a1a05',sw:9,sh:'rgba(255,170,40,.7)',shb:26});
    if(cr<=0)draw300(0);else{const k=cr*20;ctx.save();ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(196,0);ctx.lineTo(166,200);ctx.lineTo(204,300);ctx.lineTo(160,420);ctx.lineTo(0,420);ctx.closePath();ctx.clip();ctx.translate(-k,k*.3);draw300(0);ctx.restore();
      ctx.save();ctx.beginPath();ctx.moveTo(196,0);ctx.lineTo(360,0);ctx.lineTo(360,420);ctx.lineTo(160,420);ctx.lineTo(204,300);ctx.lineTo(166,200);ctx.closePath();ctx.clip();ctx.translate(k,k*.5);draw300(0);ctx.restore();
      ctx.save();ctx.strokeStyle='rgba(255,255,255,'+(.9*(1-cr*.4))+')';ctx.lineWidth=2.4;ctx.beginPath();ctx.moveTo(196,200);ctx.lineTo(166,200+0);ctx.lineTo(204,300);ctx.lineTo(160,420);ctx.stroke();ctx.restore();
      if(t>E.s0_paso){const q=eb((t-E.s0_paso)/.4);txt('?',180,262,150*q,CRIM,{wt:'900',f:DISP,st:'#2a0805',sw:8})}}});
  shock(180,300,t,E.s0_no,'rgba(255,255,255,.9)',120,3,.5);
  TX('EL MITO DE LOS',180,76,24,'#fff',t,-.6,{out:E.s0_no});TX('ESPARTANOS',180,114,36,GOLD,t,-.55,{out:E.s0_no});
  TAG('¿MITO O REALIDAD?',180,372,17,CRIM,'#fff',t,E.s0_no-.02)}
// S1 480 a.C.: la marea persa cruza el cuadro
function s1(t,u){const z=lerp(1.3,.78,eio(u/6.5))*(t>E.s1_gig?1-.1*eo((t-E.s1_gig)/.6):1);
  world({x:180,y:350,z,r:0},()=>{bg('#16293a','#c05a30');glow(180,420,300,'rgba(255,170,80,.25)');
    hills2(430,'#1a1210');ctx.fillStyle='#120c0a';ctx.fillRect(-600,430,1600,500);
    horde(t,180,480,700,200,330,3,'#150605',46,.9);horde(t,180,420,700,120,120,9,'#2a0f0a',34,.7);
    for(let i=0;i<14;i++){const x=((i*70+t*40)%900)-300;line(x,440,x,380,'#3a1410',1.4);poly([[x,384],[x+30,392],[x,400]],CRIM)}
    });const cq=eb((t-E.s1_jer)/.45);if(cq>0){glow(180,250,90,rgba(GOLD,.4));crown(180,262,3.2*cq,GOLD)}
  slam('480 a.C.',180,124,58,SAND,t,E.s1_480,{st:'#1a0a04',sw:8,sh:'rgba(255,200,100,.6)',shb:18});
  TAG('JERJES · REY DE PERSIA',180,176,13,GOLD,'#1a0e02',t,E.s1_jer-.05);TX('UN EJÉRCITO GIGANTE',180,500,26,'#fff',t,E.s1_gig-.1)}
function hills2(y,col){ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(-700,900);for(let x=-700;x<=1100;x+=14)ctx.lineTo(x,y-14*Math.sin(x*.011)-8*Math.sin(x*.03));ctx.lineTo(1100,900);ctx.closePath();ctx.fill()}
// S2 HERÓDOTO vs HOY: la barra se encoge
function s2(t,u){bg('#07161e','#10303d');dust(t,30,'#7fd4ff',5,8,1.2,.3);
  const g=eo((t-E.s2_dos+.2)/.9),sh=cl((t-E.s2_hoy)/.7),hh=lerp(330*g,52,eio(sh));
  // eje
  line(60,520,300,520,'rgba(255,255,255,.3)',2);
  // barra
  tr(180,520,1,0,()=>{const w=96;ctx.save();ctx.shadowColor=CRIM;ctx.shadowBlur=18;ctx.fillStyle=sh<.5?CRIM:GOLD;rr(-w/2,-hh,w,hh,8);ctx.fill();ctx.restore();
    if(sh<.2&&g>.9){txt('2.000.000+',0,-hh-14,24,'#fff',{wt:'900',f:DISP,st:'#200',sw:4})}
    if(sh>.6){const a=cl((sh-.6)*3);withA(a,()=>{txt('80.000 – 300.000',0,-hh-34,17,'#fff',{wt:'900',f:DISP,st:'#1a0a02',sw:4});
      line(-70,-hh-14,70,-hh-14,GOLD,2);line(-70,-hh-20,-70,-hh-8,GOLD,2);line(70,-hh-20,70,-hh-8,GOLD,2)})}});
  if(t>E.s2_hoy){withA(cl((t-E.s2_hoy)*2)*.55,()=>{ctx.save();ctx.setLineDash([6,6]);ctx.strokeStyle=CRIM;ctx.lineWidth=2.5;rr(132,190,96,330,8);ctx.stroke();ctx.restore();txt('2.000.000+',180,176,20,CRIM,{wt:'900',f:DISP});xmark(180,355,40,CRIM)});const q=eb((t-E.s2_hoy)/.4);shock(180,520-52,t,E.s2_hoy+.4,GOLD,30,3,.6);if(q>0)tr(180,300,q,0,()=>{ctx.fillStyle='rgba(15,20,28,.9)';rr(-62,-22,124,44,22);ctx.fill();ctx.strokeStyle=GOLD;ctx.lineWidth=1.5;ctx.stroke();txt('HISTORIADORES HOY',0,2,11,GOLD,{wt:'900',f:DISP})})}
  // Heródoto: pergamino
  if(t>E.s2_her-.1&&t<E.s2_hoy+.2){const q=eb((t-E.s2_her)/.45);tr(70,200,q,-.15,()=>{ctx.fillStyle=SAND;rr(-34,-40,68,80,6);ctx.fill();ctx.fillStyle='#8a6a3a';for(let i=0;i<6;i++)ctx.fillRect(-24,-30+i*11,48*(i%3?.7:1),3);circ(-34,-40,7,'#c9a864');circ(34,40,7,'#c9a864')});TAG('HERÓDOTO',70,262,12,SAND,'#2a1a08',t,E.s2_her+.15,{out:E.s2_hoy})}
  TX('¿CUÁNTOS PERSAS',180,76,26,'#fff',t,E.s2_her-.2,{out:E.s2_hoy+.2});TX('ERAN EN REALIDAD?',180,112,26,GOLD,t,E.s2_her,{out:E.s2_hoy+.2});
  TX('MUCHOS MENOS',180,76,32,'#fff',t,E.s2_menos-.1);}
// S3 EL PASO ESTRECHO: 300 de 7.000
function s3(t,u){const sq=eo((t-E.s3_paso+.4)/.7),cam=camAt(u,[[0,180,330,1.0],[6,180,330,1.12]]);
  world(cam,()=>{sky2(t,.15);const m=lerp(140,60,sq);
    mount([[-300,640],[-300,200],[40,180],[80-m*.0,300],[180-80+m*0,330],[180-m,450],[180-m,640]],ROCK,ROCK1);
    mount([[660,640],[660,330],[300,300],[180+m,420],[180+m,640]],'#0a3d4d','#7fd4ff');waves(440,t,'rgba(40,150,190,.5)',3,180+m,700);
    ctx.fillStyle='#2a1e16';ctx.fillRect(180-m,440,2*m,300);
    // 7000: cuadrícula 14x10 = 140 (cada punto = 50 hombres); 6 doradas = 300
    const n=140;for(let i=0;i<n;i++){const [x,y]=gridPos(i,14,9,180,375,n);const ts=E.s3_7+.02*i;const q=cl((t-ts)/.3);if(q<=0)continue;const gold=i%23===5&&i<140;const hi=t>E.s3_gua+.05&&gold;circ(x,y-(1-q)*20,hi?4.6:3.2,gold&&t>E.s3_gua?GOLD:'#cfd8dd');if(hi)glow(x,y,14,rgba(GOLD,.6))}
    const hq=eb((t-E.s3_leo)/.4);if(hq>0)hop(180,508,1.55*hq,'#0a0605',{sh:'#a77a2c',rim:GOLD,crest:GOLD,a:1}),glow(180,470,90,rgba(GOLD,.18))});
  TX('EL PASO ESTRECHO',180,76,28,'#fff',t,E.s3_paso-.1,{out:E.s3_leo-.2});TAG('REY LEÓNIDAS',180,130,18,GOLD,'#1a0e02',t,E.s3_leo-.05,{out:E.s3_no});
  if(t>E.s3_no){slam('300',92,170,50,'#fff',t,E.s3_300,{st:'#200',sw:6});xmark(92,156,36,CRIM,eo((t-E.s3_300-.1)/.3))}
  if(t>E.s3_7)slam('7.000',246,172,54,GOLD,t,E.s3_7,{st:'#2a1503',sw:7,sh:'rgba(255,170,40,.7)',shb:20});
  if(t>E.s3_gua)TAG('GUARDIA REAL = 300',180,260,13,GOLD,'#1a0e02',t,E.s3_gua)}
// S4 700 TESPIOS: los que nadie recuerda
function s4(t,u){bg('#07161e','#0f2f3c');dust(t,24,'#9fe9ef',3,6,1.1,.25);
  const fade_=t<E.s4_nadie?0:eo((t-E.s4_nadie)/.7);
  for(let i=0;i<700;i++){const [x,y]=gridPos(i,35,7,180,290,700);const q=cl((t-(E.s4_700+i/700*1.2))/.25);if(q<=0)continue;circ(x,y-(1-q)*16,2.1,mixc(CYAN,'#3c4650',fade_),null,0)}
  // ciudad pequeña
  const hq=eb((t-E.s4_tes+.1)/.5);if(hq>0){[[-34,0],[0,-5],[34,0]].forEach((p,i)=>hut(180+p[0],432+p[1],1.5*hq,i===1?'#d8c9a8':'#b9a98a'))}
  slam('700',180,160,84,CYAN,t,E.s4_700,{st:'#022a30',sw:8,sh:'rgba(80,230,240,.7)',shb:22});
  TX('SOLDADOS DE',180,86,22,'#fff',t,E.s4_ent-.1);TAG('TESPIAS · CIUDAD PEQUEÑA',180,462,13,CYAN,'#04242a',t,E.s4_tes-.05,{out:E.s4_nadie-.4});
  if(fade_>0){withA(fade_,()=>{glow(180,330,150,'rgba(0,0,0,.35)');txt('?',180,330,190,'rgba(255,255,255,.14)',{wt:'900',f:DISP})});TX('CASI NADIE',180,462,28,'#fff',t,E.s4_nadie-.1);TX('LOS RECUERDA',180,498,28,GOLD,t,E.s4_nadie+.15)}}
// S5 TRES DÍAS: el sol corre y la ola persa se estrella contra el muro
function s5(t,u){const tl=E.s5_dias,td=cl((t-tl)/1.9),day=Math.floor(td*3),p3=(td*3)%1;
  const k=t<tl?0:Math.abs(Math.sin(td*Math.PI*3))*.6;sky2(t,k*.7);
  const sp=(t>=tl&&td<1)?sunArc(180,320,170,p3):null;
  
  waves(500,t,'#082a37',3);ctx.fillStyle='#2a1e16';ctx.fillRect(0,500,360,200);
  // muro de escudos
  const wq=eb((t-E.s5_ven+.1)/.5);for(let i=0;i<6;i++)hop(262+i*14,520+Math.sin(i)*2,1.15*Math.min(1,wq+.0001),'#0a0605',{sh:i%2?'#a77a2c':'#8c2a1a',rim:GOLD,crest:GOLD});
  // olas persas
  for(let k2=0;k2<5;k2++){const t0=E.s5_per-.2+k2*.55;if(t<t0)continue;const q=(t-t0);for(let i=0;i<14;i++){const fx=i%7,fy=Math.floor(i/7);let x=lerp(-20,236,cl(q/.9))-fx*12-fy*6,y=514-fy*3;const hit=q>.9;if(hit){x=236-fx*12-fy*6+(q-.9)*(10+R(i)*30)*-1;y=514+(q-.9)*(q-.9)*180*(.5+R(i+3))+(i%3?0:-18*Math.sin((q-.9)*6))}
      withA(cl(1-(q-1.3)*2),()=>pers(x,y,1.25,'#d4533a',Math.sin(t*14+i)*1.4))}}
  if(t>E.s5_cai){shock(250,500,t,E.s5_cai,'rgba(255,200,120,.8)',50,3,.5)}
  slam('3 DÍAS',180,130,66,SAND,t,E.s5_dias,{st:'#1a0a04',sw:8,sh:'rgba(255,200,100,.6)',shb:18});
  if(t>tl&&t<E.s5_ven-.1)TAG('DÍA '+Math.min(3,day+1),180,176,14,GOLD,'#1a0e02',t,tl+.05);
  TX('EL PASO LES DIO VENTAJA',180,300,19,'#fff',t,E.s5_ven-.1,{out:E.s5_per+1.2,w:300})}
// S6 EFIALTES: el sendero secreto
const PATH=[[330,430],[285,340],[230,280],[175,236],[115,262],[72,340],[58,430],[96,490]];
function pathAt(p){const n=PATH.length-1,x=cl(p)*n,i=Math.min(n-1,Math.floor(x)),f=x-i;return [lerp(PATH[i][0],PATH[i+1][0],f),lerp(PATH[i][1],PATH[i+1][1],f)]}
function s6(t,u){sky2(t,.05);ctx.fillStyle='#2a1e16';ctx.fillRect(0,480,360,200);
  mount([[-20,500],[40,360],[110,262],[176,206],[250,270],[330,380],[380,500]],ROCK,ROCK1);mount([[60,500],[120,400],[176,330],[240,400],[300,500]],'#3a2c24');
  const pp=cl((t-E.s6_sen)/(E.s6_rod-E.s6_sen-.1));
  if(pp>0){ctx.save();ctx.setLineDash([6,6]);ctx.lineDashOffset=-t*18;ctx.strokeStyle=GOLD;ctx.lineWidth=3;ctx.shadowColor=GOLD;ctx.shadowBlur=10;ctx.beginPath();const st=34;for(let i=0;i<=st;i++){const q=i/st*pp,p=pathAt(q);i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1])}ctx.stroke();ctx.restore()}
  // griegos de frente al este
  for(let i=0;i<5;i++)hop(150+i*14,505,.95,'#0a0605',{sh:'#a77a2c',rim:GOLD,crest:GOLD});
  // persas por el frente (derecha) frenados
  for(let i=0;i<8;i++)pers(318+(i%4)*9,500-Math.floor(i/4)*4,.9,'#2a0f0a',Math.sin(t*6+i));
  // pastor
  const sq=eb((t-E.s6_pas+.05)/.5);if(sq>0)tr(54,520,1.6*sq,0,()=>{poly([[-6,-30],[6,-30],[8,-10],[-8,-10]],'#0a0605');circ(0,-38,6,'#0a0605');poly([[-8,-40],[0,-48],[8,-40]],'#0a0605');ctx.fillStyle='#0a0605';ctx.fillRect(-5,-10,4,10);ctx.fillRect(1,-10,4,10);line(10,-60,10,0,'#6a4a2a',2.2);line(6,-30,24,-40,'#0a0605',4.5)});
  // persas por el sendero
  if(t>E.s6_rod-.6){const q=cl((t-E.s6_rod+.6)/1.8);for(let i=0;i<10;i++){const p=pathAt(cl(q-i*.04));if(q-i*.04>0)pers(p[0],p[1],.9,CRIM,Math.sin(t*10+i)*1.5)}}
  if(t>E.s6_rod+.9){shock(96,490,t,E.s6_rod+.9,'rgba(255,90,60,.9)',60,3,.6)}
  TX('UN PASTOR LLAMADO',180,76,22,'#fff',t,E.s6_pas-.1,{out:E.s6_sen-.1});TAG('EFIALTES · TRAICIÓN',180,116,17,CRIM,'#fff',t,E.s6_efi-.05,{out:E.s6_sen+.8});
  TX('UN SENDERO SECRETO',180,96,26,GOLD,t,E.s6_sen-.05);TX('RODEARLOS',180,136,34,CRIM,t,E.s6_rod-.2,{sh:'rgba(255,80,50,.7)'})}
// S7 RETIRADA Y ÚLTIMA BATALLA
function s7(t,u){sky2(t,.3);ctx.fillStyle='#2a1e16';ctx.fillRect(0,470,360,200);
  const tr0=E.s7_ret,n=100;
  for(let i=0;i<n;i++){const [x,y]=gridPos(i,20,9,180,330,n);const go=cl((t-tr0-.012*i)/2.2);const xx=x-go*go*420,al=1-cl((go-.7)*3);if(al>0)circ(xx,y+Math.sin(t*9+i)*go*3,3,'#cfd8dd',null,0)}
  // los que se quedan: espartanos (dorado) y tespios (cian)
  const kq=eb((t-E.s7_esp)/.35);const sx=t>E.s7_mur?Math.sin(t*20)*1.3*Math.exp(-(t-E.s7_mur)*1.4):0;
  hop(150+sx,470,1.5,'#0a0605',{sh:'#a77a2c',rim:GOLD,crest:GOLD});hop(190+sx,470,1.3,'#0a0605',{sh:'#2a7f86',rim:CYAN,crest:CYAN});hop(126,474,1.1,'#0a0605',{sh:'#a77a2c',rim:GOLD,crest:GOLD});hop(214,474,1.05,'#0a0605',{sh:'#2a7f86',rim:CYAN,crest:CYAN,flip:true});
  if(t>E.s7_esp)TAG('ESPARTANOS',130,420,11,GOLD,'#1a0e02',t,E.s7_esp,{out:E.s7_cla});if(t>E.s7_tes)TAG('TESPIOS',220,420,11,CYAN,'#04242a',t,E.s7_tes,{out:E.s7_cla});
  // persas cierran el cerco
  const cq=eio((t-E.s7_mur+.5)/1.6);if(cq>0){for(let i=0;i<22;i++){const a=i/22*TAU,r=lerp(330,70,cq)*(.9+.2*R(i)),x=180+Math.cos(a)*r*1.2,y=440+Math.sin(a)*r*.35;pers(x,y,.9,CRIM,Math.sin(t*9+i))}}
  if(t>E.s7_mur){shock(180,440,t,E.s7_mur,'rgba(255,200,120,.9)',110,3,.6);glow(180,440,120*(.6+.4*Math.sin(t*8)),'rgba(255,120,60,.18)')}
  TX('LEÓNIDAS MANDÓ',180,76,22,'#fff',t,E.s7_ord-.1,{out:E.s7_todos+.8});TX('RETIRARSE',180,116,36,GOLD,t,E.s7_ret-.1,{out:E.s7_todos+.8});
  TX('SE QUEDÓ CON',180,86,22,'#fff',t,E.s7_esp-.7,{out:E.s7_mur-.3});TX('MURIERON LUCHANDO',180,96,28,'#fff',t,E.s7_mur-.1,{out:E.s7_cla-.1});
  if(t>E.s7_cla-.1){bg('#090302','#2a0e08');const q=eb((t-E.s7_cla)/.5);withA(cl((t-E.s7_cla+.1)*6),()=>{glow(180,330,180,'rgba(255,60,30,.18)');helmetOnStake(180,250,2.2*q)});TX('JERJES MANDÓ CLAVAR',180,90,21,'#fff',t,E.s7_cla-.1);if(t>E.s7_pos)slam('SU CABEZA',180,140,34,CRIM,t,E.s7_pos,{st:'#200',sw:6})}}
// S8 TIEMPO GANADO -> SALAMINA -> PLATEA
function s8(t,u){const hp=cl((t-E.s8_pero)/(E.s8_vano-E.s8_pero+.1));
  bg('#06222d','#0f4a5d');
  const aH=1-win(t,E.s8_flota-.5,E.s8_flota-.1);
  if(aH>0)withA(aH,()=>{hourglass(180,300,2.1,eio(hp));glow(180,300,160,rgba(SAND,.15));if(t>E.s8_vano)shock(180,300,t,E.s8_vano,GOLD,100,3,.6)});
  if(t>E.s8_flota-.2){const g=eo((t-E.s8_flota+.2)/.5);waves(420,t,'#0a3a4a',4);waves(450,t,'#072a38',5);
    for(let i=0;i<4;i++){const x=70+i*72,yb=418+Math.sin(t*2+i)*3;ship(x,yb,1.1*g,'#0a0605','#e8d8b0')}
    for(let i=0;i<4;i++){const q=cl((t-E.s8_sal-i*.12)/1.2);ship(300-i*60-q*40,430+q*q*60-30*(1-q)*0,.9*g,'#0a0605',CRIM,{rot:q*1.3,a:1-q*.8,flip:true})}
    if(t>E.s8_sal)shock(180,440,t,E.s8_sal,'rgba(255,255,255,.8)',120,3,.6)}
  if(t>E.s8_sal-.2)TAG('SALAMINA · 480 a.C.',180,200,15,SAND,'#2a1a08',t,E.s8_sal-.1,{out:E.s8_ano-.1});
  if(t>E.s8_ano-.1){const q=eb((t-E.s8_ano)/.45);tr(180,200,q,0,()=>{ctx.fillStyle='rgba(10,20,28,.9)';rr(-96,-18,192,36,18);ctx.fill();txt('1 AÑO DESPUÉS · 479 a.C.',0,2,14,SAND,{wt:'900',f:DISP})});
    const sq=eb((t-E.s8_plat)/.5);shield(180,370,2.4*sq,'#a77a2c',GOLD,'PLATEA');if(t>E.s8_venc)shock(180,370,t,E.s8_venc,GOLD,140,4,.7)}
  if(t>E.s8_venc+.0){const q=cl((t-E.s8_jer)/.6);if(t>E.s8_jer){crown(300,150,2.2*(1-q*.0),'#555');const k=q*30;xmark(300,128,22*eo(q),CRIM,eo(q))}}
  TX('ESE TIEMPO GANADO',180,86,24,'#fff',t,E.s8_tiempo-.1,{out:E.s8_vano+.5});TX('NO FUE EN VANO',180,124,34,GOLD,t,E.s8_vano-.5,{out:E.s8_flota-.4});
  TX('LA FLOTA GRIEGA',180,76,24,'#fff',t,E.s8_flota-.1,{out:E.s8_sal-.1});
  if(t>E.s8_venc-.1)TX('GRECIA VENCIÓ',180,76,30,GOLD,t,E.s8_venc-.1)}
// S9 CTA: ¿300 espartanos o 700 tespios?
function s9(t,u){bg('#2a1208','#4a2410');rays(180,320,t,14,500,GOLD,.07,.1,.14);dust(t,36,'#ffd27a',6,10,1.4,.5);
  const cd=(x,col,fg,num,lbl,ts,sh)=>{const q=eb((t-ts)/.45);if(q<=0)return;const pulse=1+.06*wob(t-ts,10,5);tr(x,330,q*pulse,0,()=>{ctx.save();ctx.shadowColor=col;ctx.shadowBlur=20;ctx.fillStyle='rgba(12,16,24,.92)';rr(-74,-120,148,240,22);ctx.fill();ctx.restore();ctx.strokeStyle=col;ctx.lineWidth=3;rr(-74,-120,148,240,22);ctx.stroke();
    hop(0,102,1.4,'#0a0605',{sh:sh,rim:col,crest:col});txt(num,0,-70,50,col,{wt:'900',f:DISP,st:'#000',sw:5});txt(lbl,0,-30,17,'#fff',{wt:'900',f:DISP})})};
  cd(100,GOLD,'#fff','300','ESPARTANOS',E.c_300-.1,'#a77a2c');cd(260,CYAN,'#fff','700','TESPIOS',E.c_700-.1,'#2a7f86');
  if(t>E.c_nadie){const q=eb((t-E.c_nadie)/.4);txt('VS',180,330,34*q,'#fff',{wt:'900',f:DISP,st:'#200',sw:6})}
  TX('¿QUIÉN MERECE',180,76,28,'#fff',t,E.c_quien-.05);TX('MÁS FAMA?',180,116,38,GOLD,t,E.c_quien+.35);
  if(t>E.c_com){const q=eb((t-E.c_com)/.45);tr(180,520,q,0,()=>{ctx.fillStyle='#fff';rr(-104,-26,208,52,26);ctx.fill();txt('COMENTA TU RESPUESTA',0,1,14,'#5a2e10',{wt:'900',f:DISP})})}}
boot([s0,s1,s2,s3,s4,s5,s6,s7,s8,s9],TRS,{cap:{acc:GOLD}});
