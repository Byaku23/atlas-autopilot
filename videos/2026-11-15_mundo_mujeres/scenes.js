// ===== Mundo solo de mujeres (mañana) — escenas 2.5D =====
function stage(t,c,o={}){bg(o.b0||'#0b0716',o.b1||'#2a1250');bokeh(t,14,o.bk||'#b07cff',3,.25);
  capas(c,[{k:.25,fn:()=>skyline(1,340,-300,700,70,170,o.s0||'#1a1033',null,t,o.w||'#9a7bff')},{k:.55,fn:()=>skyline(7,356,-300,800,60,150,o.s1||'#251449',o.rim||null,t,o.w2||'#ffb3e6')}]);
  world(c,()=>{floor3d(356,o.f0||'#2d1456','#120826',o.g||'rgba(255,95,176,.55)',t)})}
function baby(x,y,s,t,cry){tr(x,y,s,Math.sin(t*9)*.05*cry,()=>{glow(0,0,60,'rgba(255,170,210,.35)');circ(-30,2,6,SKIN);circ(30,2,6,SKIN);circ(0,0,30,SKIN,'#fff',1.4);ctx.fillStyle='#3a1d45';ctx.beginPath();ctx.arc(0,-27,6,Math.PI,TAU);ctx.fill();
  ctx.strokeStyle='#1a0f1f';ctx.lineWidth=2.2;ctx.beginPath();ctx.arc(-11,-3,5,.15*Math.PI,.85*Math.PI);ctx.moveTo(16,-3);ctx.arc(11,-3,5,.15*Math.PI,.85*Math.PI);ctx.stroke();
  ctx.fillStyle='#7a1d3a';ctx.beginPath();ctx.ellipse(0,13,7,cry?7:3.5,0,0,TAU);ctx.fill();circ(-18,7,4.5,'rgba(255,92,122,.5)');circ(18,7,4.5,'rgba(255,92,122,.5)');
  if(cry)for(let k=0;k<2;k++){const q=(t*1.6+k*.5)%1;ctx.fillStyle=CY;ctx.globalAlpha=1-q;ctx.beginPath();ctx.ellipse((k?1:-1)*(12+q*10),3+q*26,2.6,4,0,0,TAU);ctx.fill();ctx.globalAlpha=1}})}
function roll(x,y,s,sw){tr(x,y,s,sw,()=>{ctx.fillStyle='#f4f0ff';ctx.beginPath();ctx.arc(0,0,26,0,TAU);ctx.fill();ctx.strokeStyle='#cfc6ea';ctx.lineWidth=2;ctx.stroke();circ(0,0,10,'#7a5a3a');circ(0,0,5,'#3b2a1c');
  ctx.fillStyle='#fff';ctx.beginPath();ctx.moveTo(20,10);ctx.lineTo(40,10);for(let k=0;k<5;k++)ctx.lineTo(40-k*4,58+(k%2)*4);ctx.lineTo(20,56);ctx.closePath();ctx.fill();ctx.strokeStyle='#cfc6ea';ctx.stroke()})}
function heartI(x,y,s,col){poly(SH.heart(x,y,s,28),col,'rgba(255,255,255,.7)',1)}
function warn(x,y,s,t){tr(x,y,s*(1+.05*Math.sin(t*8)),0,()=>{ctx.save();ctx.shadowColor=YEL;ctx.shadowBlur=18;poly([[0,-40],[40,28],[-40,28]],'#ffd23c','#fff',3);ctx.restore();txt('!',0,6,40,INK,{wt:'900'})})}
function bubble(x,y,s,col,txt_,t0,t){const q=pp(t,t0,.3);if(q<=0)return;tr(x,y,s*q,0,()=>{rr(-34,-18,68,32,14);ctx.fillStyle=rgba(col,.9);ctx.fill();ctx.beginPath();ctx.moveTo(-8,13);ctx.lineTo(-14,25);ctx.lineTo(4,13);ctx.fill();txt(txt_,0,-1,12,'#fff',{wt:'900',st:INK,sw:3})})}

function s0(t,u){
  const c=camAt(t,[[0,180,330,1.0],[E.desap-.3,180,330,1.0,0,'lin'],[E.desap+.4,180,350,1.25,0,'eio'],[E.muj,180,350,1.25,0,'lin'],[E.muj+.5,180,350,1.3,0,'eo']]);
  stage(t,c,{});
  world(c,()=>{
    const xs=[28,76,124,172,220,268,316],sx=['m','f','m','f','m','f','m'];let wi=0;
    glow(180,250,170,rgba(FEM,.25*win(t,E.muj-.2,E.muj+.4)));
    for(let i=0;i<7;i++){const f=sx[i]==='f';let x=xs[i],a=1;
      if(f){const k=wi++;x=lerp(xs[i],[70,180,290][k],eio(win(t,E.desap+.15,E.desap+1.0)))}else{a=1-win(t,E.desap,E.desap+.35);if(a<=0)continue}
      const w=f?win(t,E.desap+.15,E.desap+1.0)<1:true;
      fig(x,478,1.75,{sex:f?'f':'m',walk:w&&t<E.muj+3,ph:t*7+i*1.2,a,face:f?(t<E.muj?'o':'smile'):'smile',blink:(t*1.3+i)%3<.1});
      if(!f&&t>E.desap-.05)burst(x,430,t,E.desap,[MAS,'#fff'],14,100,.7,3,i)}
    const q=pp(t,E.muj,.5);if(q>0){rays(180,250,t,16,220,FEM,.18*q,.2);tr(180,262,3.2*q,0,()=>{venus(0,0,1,FEM,4)})}
    shock(180,262,t,E.muj,FEM,200,5,.8);shock(180,350,t,E.desap,MAS,170,5,.6)});
  TX('¿Y SI DESAPARECIERAN',180,40,24,'#fff',t,-.6,{out:E.muj-.15});TX('TODOS LOS HOMBRES?',180,78,28,YEL,t,-.5,{out:E.muj-.15,sh:'rgba(255,240,106,.7)'});
  TX('UN MUNDO SOLO',180,40,22,'#fff',t,E.muj-.05,{});TX('DE MUJERES',180,80,44,FEM,t,E.muj+.05,{sh:'rgba(255,95,176,.8)'});
  if(t>E.tard-.1){const q=pp(t,E.tard,.4);tr(180,505,q,0,()=>{rr(-135,-17,270,34,17);ctx.fillStyle=MAS;ctx.fill();txt('ESTA TARDE: EL CONTRARIO',0,1,15,'#fff',{wt:'900',st:INK,sw:3})})}}

function s1(t,u){
  const c=camAt(t,[[E.tr1,180,330,1.0],[E.esp,196,330,1.1,0,'eio'],[E.pap-.3,180,340,1.0,0,'eio']]);
  stage(t,c,{});
  // fase 1: bebé y generaciones
  const p1=1-win(t,E.hip-.2,E.hip+.1);
  withA(p1,()=>{const bq=1-eio(win(t,E.gen-.1,E.gen+.5));baby(180,lerp(170,360,eio(win(t,E.gen-.1,E.gen+.5))),2.0*lerp(1,.0001,0)*lerp(1,.5,1-bq),t,t<E.gen?1:0);
    if(t>E.gen-.1){for(let i=0;i<5;i++){const q=pp(t,E.gen+.1+i*.12,.3);if(q<=0)continue;const x=44+i*68;tr(x,430,q,0,()=>{if(i===0){glow(0,0,34,rgba(FEM,.6));circ(0,0,20,FEM);venus(0,-2,.7,'#fff',2.4)}else{ctx.setLineDash([4,4]);circ(0,0,20,null,'rgba(255,255,255,.4)',2);ctx.setLineDash([]);line(-9,-9,9,9,RED,3);line(9,-9,-9,9,RED,3)}});if(i>0&&i<4)line(x+22,430,x+46,430,'rgba(255,255,255,.35)',2)}
      txt('GENERACIÓN 1',44,468,11,'#fff',{wt:'800',st:INK,sw:3});txt('NUEVAS: 0',260,468,13,RED,{wt:'900',st:INK,sw:3})}
    TX('PRIMER PROBLEMA',180,44,20,'#fff',t,E.tr1+.2,{out:E.hip-.2});TX('LOS BEBÉS',180,86,42,YEL,t,E.beb-.15,{out:E.hip-.2,sh:'rgba(255,240,106,.7)'})});
  // fase 2: banco
  const p2=win(t,E.hip-.1,E.hip+.2)*(1-win(t,E.pap-.4,E.pap-.15));
  withA(p2,()=>{tr(180,300,1,0,()=>{const tk=Math.sin(t*3)*0;glow(0,0,130,rgba(CY,.28));box3d(-50,60,100,150,40,'#27406a',{rim:CY});ctx.fillStyle='rgba(255,255,255,.12)';ctx.fillRect(-42,-80,84,6);
    for(let k=0;k<4;k++){ctx.fillStyle=rgba(CY,.5+.3*Math.sin(t*4+k));ctx.fillRect(-36,-60+k*30,72,12)}txt('-196 °C',0,-96,13,CY,{wt:'900',st:INK,sw:3});
    for(let k=0;k<6;k++){const q=(t*.4+k/6)%1;ctx.globalAlpha=(1-q)*.6;circ(-40+k*16,-100-q*40,3+q*3,'#fff');ctx.globalAlpha=1}});
    const v=1-.85*eio(win(t,E.esp+.2,E.agu+1.9));hbar(70,455,220,12,v,mixc(RED,CY,v),'BANCO DE ESPERMA',t,E.esp-.1,12);
    TX('HIPÓTESIS',180,44,22,CY,t,E.hip-.1,{sh:'rgba(90,209,255,.7)'});TX('AGUANTARÍAN UN TIEMPO',180,82,22,'#fff',t,E.agu-.2,{})});
  // fase 3: papel del baño
  const p3=win(t,E.pap-.35,E.pap-.1);
  if(p3>0)withA(p3,()=>{const sw=Math.sin((t-E.pap)*5)*.25*Math.exp(-(t-E.pap)*.6);glow(180,300,120,rgba(YEL,.2));roll(180,290,2.2,sw);
    if(t<E.bano){tr(90,430,pp(t,E.pap,.3),0,()=>{txt('↑ ARRIBA',0,0,18,FEM,{wt:'900',st:INK,sw:4})});tr(270,430,pp(t,E.pap+.2,.3),0,()=>{txt('ABAJO ↓',0,0,18,MAS,{wt:'900',st:INK,sw:4})});TX('¿CÓMO SE CUELGA?',180,44,18,'#fff',t,E.pap-.3,{out:E.bano-.1});TX('EL PAPEL DEL BAÑO',180,80,32,YEL,t,E.pap-.15,{out:E.bano-.1,sh:'rgba(255,240,106,.7)'})}
    else{const q=pp(t,E.bano,.4);tr(180,440,q,0,()=>{circ(0,0,38,GRN);ctx.strokeStyle='#06220f';ctx.lineWidth=7;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-17,0);ctx.lineTo(-5,13);ctx.lineTo(18,-13);ctx.stroke()});TX('0 DISCUSIONES',180,60,38,GRN,t,E.bano,{sh:'rgba(125,255,154,.7)'});burst(180,440,t,E.bano,[GRN,YEL,FEM],26,150,.9,3)}})}

function s2(t,u){
  const c=camAt(t,[[E.tr2,180,330,1.0],[E.nueve,170,330,1.12,0,'eio'],[E.nov-.2,190,320,1.0,0,'eio'],[E.carc,180,330,1.1,0,'eio']]);
  stage(t,c,{b1:'#1c1040',g:'rgba(90,209,255,.5)'});
  const pA=1-win(t,E.nov-.3,E.nov-.05);
  withA(pA,()=>{rr(20,140,320,126,14);ctx.fillStyle='rgba(255,255,255,.07)';ctx.fill();for(let k=1;k<5;k++)line(26,140+k*25,334,140+k*25,'rgba(255,255,255,.12)',1);
    TX('SEGÚN LA ONU',180,44,20,'#fff',t,E.tr2+.15,{out:E.nov-.3});TX('9 DE CADA 10',180,84,42,YEL,t,E.nueve-.2,{out:E.nov-.3,sh:'rgba(255,240,106,.7)'});
    for(let i=0;i<10;i++){const q=pp(t,E.nueve+.1+i*.05,.3);if(q<=0)continue;const m=i<9&&t>E.nueve+.5;fig(46+i*30,262,1.2*q,{sex:m?'m':(i<9?'m':'f'),col:i<9?(t>E.nueve+.5?MAS:'#7a7a9a'):FEM,face:'mad'})}
    TX('SOSPECHOSOS DE HOMICIDIO',180,300,17,'#fff',t,E.homic-.1,{});if(t>E.hom2)TX('SON HOMBRES',180,336,30,MAS,t,E.hom2-.05,{sh:'rgba(74,163,255,.8)'})});
  const pB=win(t,E.nov-.15,E.nov+.15)*(1-win(t,E.carc-.15,E.carc+.1));
  withA(pB,()=>{const n=Math.round(countV(0,93,t,E.nov,1.2));bigNum(n+'%',180,118,64,MAS);TX('DE LOS PRESOS EN EE. UU.',180,170,17,'#fff',t,E.presos-.8,{});
    for(let i=0;i<100;i++){const r=Math.floor(i/10),cI=i%10,idx=i,x=84+cI*21.5,y=205+r*21.5,q=pp(t,E.nov+.05+idx*.009,.2);if(q<=0)continue;const on=idx<93;circ(x,y,5*q,on?MAS:FEM);if(on&&idx%7===0)glow(x,y,10,rgba(MAS,.4))}});
  const pC=win(t,E.carc-.1,E.carc+.25);
  if(pC>0)withA(pC,()=>{tr(180,300,1,0,()=>{rr(-140,-100,280,200,18);ctx.fillStyle='#0c0820';ctx.fill();ctx.save();ctx.shadowColor=VIO;ctx.shadowBlur=14;ctx.strokeStyle=VIO;ctx.lineWidth=3;ctx.stroke();ctx.restore();
    glow(0,0,110,rgba(VIO,.2));const a=1-win(t,E.vac-.1,E.vac+.4);if(a>0){fig(0,80,1.5,{sex:'m',a,face:'sad'});burst(0,30,t,E.vac,[MAS,'#fff'],18,90,.7,3)}
    for(let k=-6;k<=6;k++)line(k*20,-100,k*20,100,'rgba(190,170,255,.9)',4);line(-140,-90,140,-90,VIO,4);line(-140,90,140,90,VIO,4)});
    TX('CÁRCELES',180,40,22,'#fff',t,E.carc-.15,{});TX('CASI VACÍAS',180,80,40,GRN,t,E.vac-.2,{sh:'rgba(125,255,154,.7)'})})}

function s3(t,u){
  const c=camAt(t,[[E.tr3,180,330,1.0],[E.mitad,180,330,1.12,0,'eio'],[E.pareja,180,330,1.0,0,'eio']]);
  stage(t,c,{b0:'#12061a',b1:'#2f1038',g:'rgba(255,77,106,.4)',bk:RED});
  const p1=1-win(t,E.mitad-.3,E.mitad-.05);
  withA(p1,()=>{TX('PERO OJO',180,44,36,YEL,t,E.tr3+.05,{out:E.mitad-.3,sh:'rgba(255,240,106,.7)'});if(t<E.delit)warn(180,200,2.0*pp(t,E.ojo,.4),t);
    if(t>E.delit-.1){const q=pp(t,E.delit,.4),sw=Math.sin(t*3)*.05;tr(180,230,2*q,sw,()=>{line(0,-40,0,40,'#fff',3);line(-50,-34,50,-34,'#fff',3);line(-50,-34,-40,0,'#ccc',1.5);line(-50,-34,-60,0,'#ccc',1.5);line(50,-34,40,0,'#ccc',1.5);line(50,-34,60,0,'#ccc',1.5);ctx.fillStyle='#bbb';ctx.fillRect(-64,0,28,4);ctx.fillRect(36,0,28,4);venus(-50,-14,.5,FEM,3);mars(50,-14,.5,MAS,3);box3d(-14,44,28,8,8,'#bbb')});TX('TAMBIÉN COMETEN DELITOS',180,380,19,'#fff',t,E.delit-.15,{})}});
  const p2=win(t,E.mitad-.2,E.mitad+.1);
  withA(p2,()=>{const v=eio(win(t,E.mitad,E.mitad+1.0))*.55;ring(180,280,78,v,RED,12);bigNum('+50%',180,284,42,'#fff');TX('MUJERES ASESINADAS',180,44,22,'#fff',t,E.mitad-.2,{out:E.ases+1});TX('MÁS DE LA MITAD',180,84,34,RED,t,E.mitad-.1,{sh:'rgba(255,77,106,.7)'});
    if(t>E.pareja-.3){const q=pp(t,E.pareja-.2,.4);tr(180,440,q,0,()=>{box3d(-34,28,68,40,22,'#4a2a6a',{rim:VIO});poly([[-40,-12],[-6,-42],[34,-12]],'#6a3a8a','#fff',1.5);heartI(0,6,10,RED);TX('PAREJA O FAMILIA',0,66,17,'#fff',t,E.pareja-.1,{})})}})}

function s4(t,u){
  const c=camAt(t,[[E.tr4,170,340,1.0],[E.set,190,340,1.1,0,'eio'],[E.cobrar+.5,180,340,1.0,0,'eio']]);
  stage(t,c,{});
  world(c,()=>{glow(150,400,160,rgba(FEM,.2));box3d(40,470,170,100,60,'#3a2058',{rim:FEM,win:true,wc:'#ffd9ec',t,seed:4});poly([[30,370],[125,300],[250,370],[210,370]].slice(0,3).concat([[250+0,370]]),'#6a2a62','#fff',1.6);
    const wk=[0,1,2].map(i=>({x:100+i*72+Math.sin(t*1.2+i*2)*24,ph:t*6+i}));wk.forEach((w,i)=>fig(w.x,500,1.55,{sex:'f',walk:true,ph:w.ph,carry:i===1?'box':null,ra:i===1?1.1:undefined,flip:Math.cos(t*1.2+i*2)<0,face:'smile'}));
    if(t>E.cuid-.1)for(let k=0;k<6;k++){const q=((t-E.cuid)*.7+k/6)%1;withA(1-q,()=>heartI(70+k*40,300-q*60,9,FEM))}});
  TX('EN CASA',180,40,22,'#fff',t,E.tr4+.1,{out:E.set-.2});TX('NADA CAMBIARÍA',180,80,36,YEL,t,E.nada-.15,{out:E.set-.2,sh:'rgba(255,240,106,.7)'});
  const q=win(t,E.set-.2,E.set+.3);withA(q,()=>{const v=eio(win(t,E.set,E.set+.9))*.76;ring(180,140,50,v,FEM,11);bigNum(Math.round(countV(0,76,t,E.set,.9))+'%',180,146,34,'#fff')});
  TX('DE LAS HORAS DE CUIDADOS',180,214,16,'#fff',t,E.cuid-.3,{});if(t>E.cobrar-.1){TX('SIN COBRAR',180,246,30,GRN,t,E.cobrar-.1,{sh:'rgba(125,255,154,.7)'});shock(180,140,t,E.cobrar,GRN,120,4,.6)}}

function s5(t,u){
  const c=camAt(t,[[E.tr5,180,330,1.0],[E.trece,180,336,1.1,0,'eio'],[E.science,180,330,1.0,0,'eio'],[E.escu,180,330,1.12,0,'eio']]);
  stage(t,c,{b1:'#1d1048'});
  const p1=1-win(t,E.science-.4,E.science-.1);
  withA(p1,()=>{TX('ESTUDIARÍAN MÁS',180,44,28,YEL,t,E.tr5+.1,{out:E.science-.4,sh:'rgba(255,240,106,.7)'});
    const hF=eo(win(t,E.estu+.4,E.trece+.7))*181,hM=eo(win(t,E.estu+.6,E.trece+1.0))*160;
    box3d(80,450,70,hF,34,FEM,{rim:'#fff'});box3d(210,450,70,hM,34,MAS,{rim:'#fff'});venus(115,490,.6,FEM,3);mars(245,490,.6,MAS,3);
    bigNum(Math.round(countV(0,113,t,E.estu+.4,1.5))+'',115,450-hF-18,34,'#fff');bigNum(Math.round(countV(0,100,t,E.estu+.6,1.5))+'',245,450-hM-18,34,'#fff');
    TX('MUJERES UNIVERSITARIAS',180,100,15,'#fff',t,E.trece-.4,{});TX('POR CADA 100 HOMBRES',180,122,15,'#fff',t,E.cien-.2,{})});
  const q=win(t,E.science-.3,E.science+.1);
  if(q>0)withA(q,()=>{panel(180,300,300,170,CY,(w,h)=>{txt('SCIENCE · 2010',0,-66,16,CY,{wt:'900'});
      ctx.strokeStyle='rgba(255,255,255,.4)';ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(-120,60);ctx.lineTo(-120,-44);ctx.moveTo(-120,60);ctx.lineTo(125,60);ctx.stroke();
      const pr=eo(win(t,E.rel-.1,E.rel+1.8));ctx.save();ctx.strokeStyle=FEM;ctx.lineWidth=3.5;ctx.shadowColor=FEM;ctx.shadowBlur=10;ctx.beginPath();for(let i=0;i<=40;i++){const x=-110+i*5.5,y=50-i*1.9-Math.sin(i*.5)*5;if(i/40>pr)break;i?ctx.lineTo(x,y):ctx.moveTo(x,y)}ctx.stroke();ctx.restore();
      txt('% DE MUJERES →',0,78,11,'#fff',{wt:'800'});txt('RESOLVER PROBLEMAS ↑',-30,-48,11,YEL,{wt:'800',a:'center'})},t,E.science-.2);
    TX('INTELIGENCIA',180,44,18,'#fff',t,E.science-.1,{out:E.escu-.1});TX('DE GRUPO',180,80,34,CY,t,E.science,{out:E.escu-.1,sh:'rgba(90,209,255,.7)'})});
  if(t>E.escu-.2){bubble(70,150,1.6,FEM,'ESCUCHAN',E.escu-.1,t);bubble(290,170,1.6,MAS,'CALLAN',E.escu+.5,t);bubble(70,450,1.6,MAS,'AHORA YO',E.turnos-.4,t);bubble(290,450,1.6,FEM,'TURNOS',E.turnos,t)}}

function arm(x,y,s,col,flex,t){tr(x,y,s,0,()=>{ctx.save();ctx.shadowColor=col;ctx.shadowBlur=14;ctx.lineCap='round';ctx.strokeStyle=col;ctx.lineWidth=22;ctx.beginPath();ctx.moveTo(-52,30);ctx.lineTo(-4,30);ctx.stroke();ctx.lineWidth=19;ctx.beginPath();ctx.moveTo(-4,30);ctx.lineTo(24,-34);ctx.stroke();circ(28,-46,13,col);circ(-22,12,10+flex*13,shade(col,.15));ctx.restore();ctx.strokeStyle='rgba(255,255,255,.55)';ctx.lineWidth=2;ctx.beginPath();ctx.arc(-22,12,8+flex*11,Math.PI*1.1,Math.PI*1.8);ctx.stroke()})}
function s6(t,u){
  const c=camAt(t,[[E.tr6,180,330,1.0],[E.cuar,180,330,1.12,0,'eio'],[E.nueve2-.3,180,330,1.0,0,'eio'],[E.piano-.6,150,330,1.1,0,'eio'],[E.quinto+.3,170,300,1.2,0,'eio']]);
  stage(t,c,{b0:'#0b0716',b1:'#20123e'});
  const p1=1-win(t,E.nueve2-.4,E.nueve2-.15);
  withA(p1,()=>{TX('NO TODO',180,40,20,'#fff',t,E.tr6+.1,{out:E.nueve2-.4});TX('SERÍA VENTAJA',180,80,36,ORA,t,E.vent-.2,{out:E.nueve2-.4,sh:'rgba(255,154,60,.7)'});
    const fl=.5+.5*Math.sin(t*3);arm(110,250,1.15,FEM,fl*.6,t);arm(250,250,1.15,MAS,fl,t);hbar(60,340,240,12,.6,FEM,'ELLAS',t,E.cuar-.1,13);hbar(60,384,240,12,1,MAS,'ELLOS',t,E.cuar+.1,13);
    if(t>E.cuar-.1){bigNum('-'+Math.round(countV(0,40,t,E.cuar,.8))+'%',180,452,50,ORA)}if(t>E.mus-.1)TX('MÚSCULO EN BRAZOS Y TORSO',180,500,14,'#fff',t,E.mus-.2,{})});
  const p2=win(t,E.nueve2-.3,E.nueve2)*(1-win(t,E.piano-.9,E.piano-.6));
  withA(p2,()=>{TX('MUERTES EN EL TRABAJO',180,40,19,'#fff',t,E.nueve2-.3,{out:E.piano-.9});TX('9 DE CADA 10',180,80,38,MAS,t,E.nueve2-.15,{out:E.piano-.9,sh:'rgba(74,163,255,.8)'});
    for(let i=0;i<10;i++){const q=pp(t,E.nueve2+.1+i*.05,.3);if(q<=0)continue;fig(46+i*30,230,.8*q,{sex:i<9?'m':'f',hat:'hard',col:i<9?MAS:FEM,face:'o'})}
    const ic=[[70,E.obras,'OBRAS'],[180,E.minas,'MINAS'],[290,E.tej,'TEJADOS']];ic.forEach((a,k)=>{const q=pp(t,a[1]-.1,.35);if(q<=0)return;tr(a[0],370,q,0,()=>{glow(0,0,48,rgba(ORA,.3));
      if(k===0){box3d(-24,28,36,50,16,'#6a5a7a');line(-6,-30,34,-30,GLD,4);line(30,-30,30,-4,'#fff',1.4);ctx.fillStyle=GLD;ctx.fillRect(26,-4,8,8)}
      if(k===1){ctx.fillStyle='#5a4a6a';ctx.beginPath();ctx.moveTo(-26,-6);ctx.lineTo(26,-6);ctx.lineTo(18,22);ctx.lineTo(-18,22);ctx.fill();circ(-12,26,5,'#222');circ(12,26,5,'#222');[[ -8,-12],[4,-14],[12,-10]].forEach(p=>circ(p[0],p[1],5,'#9ad'))}
      if(k===2){poly([[-34,18],[0,-24],[34,18]],'#8a4a3a','#fff',1.4);for(let r=0;r<3;r++)line(-26+r*7,10-r*10,26-r*7,10-r*10,'rgba(0,0,0,.3)',2)}
      txt(a[2],0,50,13,'#fff',{wt:'900',st:INK,sw:3})})})});
  const p3=win(t,E.piano-.9,E.piano-.6);
  if(p3>0)withA(p3,()=>{world(c,()=>{box3d(30,500,120,330,50,'#3a2a5a',{rim:VIO,win:true,t,seed:9,wc:'#ffd9ec'});line(150,150,300,150,'#bbb',5);line(150,150,150,500,'#999',4);
      const py=lerp(480,175,eio(win(t,E.piano+.1,E.quinto+.3))),sx=Math.sin((t-E.piano)*3)*6*(1-win(t,E.quinto,E.quinto+.6)),px=250+sx;line(250,150,px,py-26,'#ddd',2);
      tr(px,py,1,Math.sin((t-E.piano)*3)*.06,()=>{box3d(-32,10,64,20,22,'#15101f',{rim:'#fff'});for(let k=0;k<7;k++){ctx.fillStyle='#fff';ctx.fillRect(-29+k*8.4,-11,5,9)}});
      [190,240,290].forEach((x,i)=>fig(x,500,1.5,{sex:'f',la:2.9,ra:2.9,face:'o',blink:false}));
      txt('?',215,420,26,YEL,{wt:'900',st:INK,sw:4});txt('?',290,430,22,YEL,{wt:'900',st:INK,sw:4})});
    TX('Y A VER QUIÉN SUBE',180,40,19,'#fff',t,E.piano-.9,{});TX('EL PIANO AL QUINTO',180,80,28,YEL,t,E.piano-.8,{sh:'rgba(255,240,106,.7)'});shock(250,320,t,E.quinto+.25,YEL,100,4,.5)})}

function hut(x,y,s,col){tr(x,y,s,0,()=>{box3d(-22,0,44,26,16,col);poly([[-30,-24],[0,-52],[30,-24],[32,-22],[-32,-22]].slice(0,3),'#a9693a','#ffd9a8',1.4)})}
function s7(t,u){
  const c=camAt(t,[[E.tr7,180,330,1.15],[E.umoja,180,340,1.05,0,'eio'],[E.mil,180,350,1.3,0,'eio']]);
  bg('#2a0f26','#ff9a4c');circ(180,150,70,'rgba(255,230,160,.9)');glow(180,150,210,rgba('#ffd27a',.5));
  capas(c,[{k:.3,fn:()=>colinas(300,'#5a2a3a',20,.012,1)},{k:.6,fn:()=>colinas(340,'#3f1d33',16,.02,2)}]);
  world(c,()=>{ctx.fillStyle='#4a2236';ctx.fillRect(-600,350,1800,1200);const g=ctx.createLinearGradient(0,350,0,520);g.addColorStop(0,'rgba(255,170,90,.35)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(-600,350,1800,200);
    ctx.strokeStyle='#d9a066';ctx.lineWidth=2.2;ctx.beginPath();for(let a=0;a<=TAU+.01;a+=.18){const x=180+Math.cos(a)*165,y=420+Math.sin(a)*52+((Math.round(a/.18)%2)?-8:0);a?ctx.lineTo(x,y):ctx.moveTo(x,y)}ctx.stroke();
    [[70,400,.9,'#b86a4a'],[290,404,.9,'#c27a52'],[130,385,.75,'#a85a3e'],[240,386,.75,'#b86a4a'],[180,375,.7,'#c27a52']].forEach(h=>hut(h[0],h[1],h[2],h[3]));
    for(let i=0;i<4;i++){const x=110+i*46+Math.sin(t*.9+i*1.7)*18;fig(x,448+i%2*10,1.25,{sex:'f',walk:true,ph:t*5+i*1.5,col:[FEM,ORA,'#ffd23c','#7ad1ff'][i],flip:Math.cos(t*.9+i*1.7)<0,face:'smile'});for(let k=0;k<4;k++)circ(x-4+k*2.6,448+i%2*10-37*1.25,1.3,['#ff4d6a','#ffd23c','#5ad1ff','#7dff9a'][k])}});
  TX('KENIA',180,40,22,'#fff',t,E.kenia-.1,{out:E.solo7-.1});TX('ALDEA DE UMOJA',180,80,34,YEL,t,E.umoja-.1,{sh:'rgba(255,240,106,.7)'});
  if(t>E.solo7-.1){TX('SOLO MUJERES',180,500,32,FEM,t,E.solo7-.1,{sh:'rgba(255,95,176,.8)'});}
  if(t>E.mil-.1){const q=pp(t,E.mil-.05,.4);tr(180,150,q,0,()=>{bigNum('DESDE '+Math.round(countV(1900,1990,t,E.mil,1.5)),0,6,32,'#fff')})}}

function s8(t,u){
  bg('#1d0f38','#0b0716');bokeh(t,16,FEM,5,.3);
  const lq=1+.07*wob(t-E.seguro,16,6),rq=1+.07*wob(t-E.func,16,6),vb=Math.sin(t*2.4)*.08;
  tr(99,310,lq,0,()=>{rr(-76,-104,152,208,22);ctx.fillStyle='rgba(125,255,154,.12)';ctx.fill();ctx.save();ctx.strokeStyle=GRN;ctx.lineWidth=2.4;ctx.shadowColor=GRN;ctx.shadowBlur=12;ctx.stroke();ctx.restore();
    poly([[0,-60],[34,-46],[34,0],[0,34],[-34,0],[-34,-46]],'rgba(125,255,154,.25)',GRN,3);ctx.strokeStyle=GRN;ctx.lineWidth=6;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-14,-14);ctx.lineTo(-3,-2);ctx.lineTo(16,-28);ctx.stroke();txt('MÁS',0,52,17,'#fff',{wt:'900',st:INK,sw:4});txt('SEGURO',0,74,17,'#fff',{wt:'900',st:INK,sw:4});rr(-52,86,104,9,4);ctx.fillStyle='rgba(255,255,255,.15)';ctx.fill();rr(-52,86,104*(.5+vb),9,4);ctx.fillStyle=GRN;ctx.fill()});
  tr(261,310,rq,0,()=>{rr(-76,-104,152,208,22);ctx.fillStyle='rgba(255,77,106,.12)';ctx.fill();ctx.save();ctx.strokeStyle=RED;ctx.lineWidth=2.4;ctx.shadowColor=RED;ctx.shadowBlur=12;ctx.stroke();ctx.restore();
    ctx.save();ctx.rotate(t*.8);ctx.fillStyle='rgba(255,77,106,.3)';ctx.strokeStyle=RED;ctx.lineWidth=3;ctx.beginPath();for(let i=0;i<16;i++){const a=i/16*TAU,r=i%2?26:36;ctx.lineTo(Math.cos(a)*r,Math.sin(a)*r)}ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();line(-14,-14,14,14,RED,6);line(14,-14,-14,14,RED,6);txt('NO',0,52,17,'#fff',{wt:'900',st:INK,sw:4});txt('FUNCIONARÍA',0,74,15,'#fff',{wt:'900',st:INK,sw:4});rr(-52,86,104,9,4);ctx.fillStyle='rgba(255,255,255,.15)';ctx.fill();rr(-52,86,104*(.5-vb),9,4);ctx.fillStyle=RED;ctx.fill()});
  TX('¿QUÉ OPINAS?',180,44,32,YEL,t,E.tr8+.1,{out:E.sig-.3,sh:'rgba(255,240,106,.7)'});
  if(t>E.coment-.1){const q=pp(t,E.coment-.05,.35);tr(180,452,q*(1+.05*wob(t-E.coment-.3,20,6)),0,()=>{rr(-100,-16,200,32,16);ctx.fillStyle=YEL;ctx.fill();txt('COMENTA TU RESPUESTA',0,1,14,INK,{wt:'900'})})}
  if(t>E.tard2-.1){const q=pp(t,E.tard2,.4);tr(180,500,q,0,()=>{rr(-150,-18,300,36,18);ctx.fillStyle=MAS;ctx.fill();mars(-128,0,.5,'#fff',2.4);txt('ESTA TARDE: SOLO HOMBRES',8,1,15,'#fff',{wt:'900',st:INK,sw:3})});shock(180,500,t,E.tard2,MAS,150,4,.5)}
  TX('SÍGUEME PARA MÁS',180,44,28,FEM,t,E.sig-.1,{sh:'rgba(255,95,176,.8)'})}
boot([s0,s1,s2,s3,s4,s5,s6,s7,s8],TRS,{cap:{acc:FEM}});
