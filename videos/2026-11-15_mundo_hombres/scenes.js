// ===== Mundo solo de hombres (tarde) — escenas 2.5D (azul acero + naranja) =====
const BL={b0:'#050c1c',b1:'#10305a',s0:'#0e1f3d',s1:'#143059',w:'#6fb8ff',w2:'#ffd9a0',bk:'#4aa3ff',f0:'#12305a',g:'rgba(74,163,255,.6)'};
function stage(t,c,o={}){o=Object.assign({},BL,o);bg(o.b0,o.b1);bokeh(t,14,o.bk,3,.25);
  capas(c,[{k:.25,fn:()=>skyline(1,340,-300,700,70,170,o.s0,null,t,o.w)},{k:.55,fn:()=>skyline(7,356,-300,800,60,150,o.s1,o.rim||null,t,o.w2)}]);
  world(c,()=>{floor3d(356,o.f0,'#07101f',o.g,t)})}
function baby(x,y,s,t,cry,a=1){withA(a,()=>tr(x,y,s,Math.sin(t*9)*.05*cry,()=>{glow(0,0,60,'rgba(255,170,210,.35)');circ(-30,2,6,SKIN);circ(30,2,6,SKIN);circ(0,0,30,SKIN,'#fff',1.4);ctx.fillStyle='#3a1d45';ctx.beginPath();ctx.arc(0,-27,6,Math.PI,TAU);ctx.fill();
  ctx.strokeStyle='#1a0f1f';ctx.lineWidth=2.2;ctx.beginPath();ctx.arc(-11,-3,5,.15*Math.PI,.85*Math.PI);ctx.moveTo(16,-3);ctx.arc(11,-3,5,.15*Math.PI,.85*Math.PI);ctx.stroke();
  ctx.fillStyle='#7a1d3a';ctx.beginPath();ctx.ellipse(0,13,7,cry?7:3.5,0,0,TAU);ctx.fill();circ(-18,7,4.5,'rgba(255,92,122,.5)');circ(18,7,4.5,'rgba(255,92,122,.5)');
  if(cry)for(let k=0;k<2;k++){const q=(t*1.6+k*.5)%1;ctx.fillStyle=CY;ctx.globalAlpha*=1-q;ctx.beginPath();ctx.ellipse((k?1:-1)*(12+q*10),3+q*26,2.6,4,0,0,TAU);ctx.fill()}}))}
function bubble(x,y,s,col,txt_,t0,t,sz=12){const q=pp(t,t0,.3);if(q<=0)return;tr(x,y,s*q,0,()=>{rr(-38,-18,76,32,14);ctx.fillStyle=rgba(col,.92);ctx.fill();ctx.beginPath();ctx.moveTo(-8,13);ctx.lineTo(-14,25);ctx.lineTo(4,13);ctx.fill();txt(txt_,0,-1,sz,'#fff',{wt:'900',st:INK,sw:3})})}
function pict(x,y,n,k,t,ts,hat,col=MAS,s=1.2,gap=30){for(let i=0;i<n;i++){const q=pp(t,ts+i*.05,.3);if(q<=0)continue;const on=i<k&&t>ts+.5;fig(x+i*gap,y,s*q,{sex:i<k?'m':'f',col:i<k?(on?col:'#7a7a9a'):FEM,face:'o',hat:hat?'hard':null})}}
function cat(x,y,s,col='#222'){tr(x,y,s,0,()=>{poly([[-14,-8],[-12,-26],[-3,-12]],col,'#fff',1);poly([[14,-8],[12,-26],[3,-12]],col,'#fff',1);circ(0,0,15,col,'#fff',1.2);circ(-5,-2,2.4,GRN);circ(5,-2,2.4,GRN);poly([[-2,3],[2,3],[0,6]],'#ff9aa8');line(-14,4,-24,2,'#fff',1);line(14,4,24,2,'#fff',1)})}
function noSign(x,y,s,col,t){tr(x,y,s,0,()=>{ctx.save();ctx.strokeStyle=col;ctx.lineWidth=7;ctx.shadowColor=col;ctx.shadowBlur=14;ctx.beginPath();ctx.arc(0,0,38,0,TAU);ctx.moveTo(-27,-27);ctx.lineTo(27,27);ctx.stroke();ctx.restore()})}

function s0(t,u){
  const c=camAt(t,[[0,180,330,1.0],[E.contra-.3,180,330,1.0,0,'lin'],[E.contra+.4,180,350,1.25,0,'eio'],[E.hom2,180,350,1.25,0,'lin'],[E.hom2+.5,180,350,1.3,0,'eo']]);
  const flip=eio(win(t,E.contra-.1,E.contra+.5));
  if(flip<1)stage(t,c,{b0:'#0b0716',b1:'#2a1250',s0:'#1a1033',s1:'#251449',w:'#9a7bff',w2:'#ffb3e6',bk:'#b07cff',f0:'#2d1456',g:'rgba(255,95,176,.55)'});
  if(flip>0)withA(flip,()=>stage(t,c,{}));
  world(c,()=>{
    if(flip<1)withA(1-flip,()=>{[70,180,290].forEach((x,i)=>fig(x,478,1.75,{sex:'f',walk:true,ph:t*7+i,face:'smile'}));venus(180,262,3,FEM,4)});
    const xs=[28,76,124,172,220,268,316];
    glow(180,250,170,rgba(MAS,.28*flip));
    xs.forEach((x,i)=>{const q=eio(win(t,E.contra+.1+i*.04,E.contra+.6+i*.04));if(q<=0)return;fig(lerp(x<180?-80:440,x,q),478,1.75,{sex:'m',walk:q<1||t<E.hom2+3,ph:t*7+i*1.2,face:t<E.hom2?'smile':'mad',a:1,blink:(t*1.3+i)%3<.1})});
    const q=pp(t,E.hom2,.5);if(q>0){rays(180,250,t,16,220,MAS,.18*q,.2);tr(180,262,3.2*q,0,()=>{mars(0,0,1,MAS,4)})}
    shock(180,262,t,E.hom2,MAS,200,5,.8);shock(180,350,t,E.contra,MAS,170,5,.6)});
  TX('ESTA MAÑANA:',180,40,20,'#fff',t,-.6,{out:E.contra-.2});TX('UN MUNDO SIN HOMBRES',180,76,23,FEM,t,-.5,{out:E.contra-.2,sh:'rgba(255,95,176,.8)'});
  TX('AHORA, EL CONTRARIO',180,38,22,'#fff',t,E.contra-.05,{out:E.hom2-.1});TX('SOLO HOMBRES',180,80,38,MAS,t,E.hom2-.05,{sh:'rgba(74,163,255,.8)'});
  if(t>E.num-.1){const q=pp(t,E.num,.4);tr(180,505,q,0,()=>{rr(-125,-17,250,34,17);ctx.fillStyle=YEL;ctx.fill();txt('Y TAMBIÉN TIENE NÚMEROS',0,1,15,INK,{wt:'900'})})}}

function ecg(x0,x1,y,t,col,amp,calm){ctx.save();ctx.strokeStyle=col;ctx.lineWidth=2.6;ctx.shadowColor=col;ctx.shadowBlur=10;ctx.beginPath();for(let x=x0;x<=x1;x+=2){const ph=((x-t*90)%90+90)%90,b=ph<6?-amp*1.4:ph<12?amp*2.4:ph<18?-amp*.7:0,j=calm?0:Math.sin(x*.9+t*30)*amp*.5;x===x0?ctx.moveTo(x,y+b+j):ctx.lineTo(x,y+b+j)}ctx.stroke();ctx.restore()}
function s1(t,u){
  const c=camAt(t,[[E.tr1,180,330,1.0],[E.nueve,170,330,1.12,0,'eio'],[E.ocho-.2,190,320,1.0,0,'eio'],[E.nadie,180,330,1.1,0,'eio']]);
  stage(t,c,{});
  const p1=1-win(t,E.nadie-.3,E.nadie-.05);
  withA(p1,()=>{rr(20,150,320,130,14);ctx.fillStyle='rgba(255,255,255,.07)';ctx.fill();
    if(t<E.ocho-.2){TX('SOSPECHOSOS DE HOMICIDIO',180,44,17,'#fff',t,E.tr1+.15,{out:E.ocho-.2});TX('9 DE CADA 10',180,84,42,YEL,t,E.nueve-.2,{out:E.ocho-.2,sh:'rgba(255,240,106,.7)'});pict(46,274,10,9,t,E.nueve+.1,false);if(t>E.hom3-.1)TX('SON HOMBRES',180,320,30,MAS,t,E.hom3-.1,{sh:'rgba(74,163,255,.8)'})}
    else{TX('VÍCTIMAS',180,44,22,'#fff',t,E.ocho-.2,{});TX('8 DE CADA 10',180,84,42,RED,t,E.ocho-.15,{sh:'rgba(255,77,106,.7)'});
      for(let i=0;i<10;i++){const q=pp(t,E.ocho+.1+i*.05,.3);if(q<=0)continue;fig(46+i*30,274,1.2*q,{sex:i<8?'m':'f',col:i<8?'#9aa8c8':FEM,face:i<8?'sad':'smile'});if(i<8&&t>E.ocho+.5)line(46+i*30-6,274-70,46+i*30+6,274-58,RED,2)}
      if(t>E.vict+.5)TX('TAMBIÉN HOMBRES',180,320,28,RED,t,E.vict+.4,{sh:'rgba(255,77,106,.7)'})}});
  const p2=win(t,E.nadie-.2,E.nadie+.15);
  withA(p2,()=>{TX('NADIE PUEDE',180,44,22,'#fff',t,E.nadie-.15,{});TX('ASEGURAR QUÉ PASARÍA',180,80,26,YEL,t,E.nadie,{sh:'rgba(255,240,106,.6)'});
    for(let k=0;k<5;k++){const x=50+k*65,y=220+Math.sin(t*2+k)*10;txt('?',x,y,40+k%2*14,rgba('#ffffff',.5),{wt:'900',st:INK,sw:3})}
    rr(30,330,300,120,16);ctx.fillStyle='rgba(8,16,40,.85)';ctx.fill();ctx.strokeStyle=t>E.tranq-.2?RED:GRN;ctx.lineWidth=2;ctx.stroke();
    ecg(40,320,392,t,t>E.tranq-.2?RED:GRN,14,t<E.datos);if(t>E.tranq-.2){TX('NO TRANQUILIZAN',180,470,26,RED,t,E.tranq-.2,{sh:'rgba(255,77,106,.7)'});shock(180,390,t,E.tranq,RED,150,4,.6)}else TX('LOS DATOS...',180,470,22,'#fff',t,E.datos-.2,{})})}

function s2(t,u){
  const c=camAt(t,[[E.tr2,170,340,1.0],[E.set,190,340,1.1,0,'eio'],[E.toc,180,340,1.0,0,'eio'],[E.bebes-.2,200,340,1.2,0,'eio'],[E.tamp,190,340,1.05,0,'eio']]);
  stage(t,c,{});
  const p1=1-win(t,E.tamp-.2,E.tamp+.1);
  withA(p1,()=>{world(c,()=>{glow(150,400,160,rgba(MAS,.2));box3d(30,470,170,100,60,'#1e3a66',{rim:MAS,win:true,wc:'#cfe6ff',t,seed:4});poly([[20,370],[115,300],[240,370]],'#2c5a99','#fff',1.6);
      const chaos=win(t,E.toc,E.toc+.6);
      [0,1,2].forEach(i=>{const x=90+i*66+Math.sin(t*1.5+i*2)*(10+chaos*24);fig(x,500,1.55,{sex:'m',walk:true,ph:t*(6+chaos*5)+i,carry:i===1&&t>E.toc?'box':null,la:chaos*2.6+(i===2?1.5:0),face:chaos>.3?'o':'smile',flip:Math.cos(t*1.5+i*2)<0})});
      if(t>E.bebes-.2){baby(262,470,.7*pp(t,E.bebes-.1,.4),t,1);for(let k=0;k<5;k++){const q=((t-E.bebes)*.8+k/5)%1;withA(1-q,()=>txt('?',250+Math.sin(k*3)*30,420-q*60,18,YEL,{wt:'900',st:INK,sw:3}))}}
      if(t>E.toc)for(let k=0;k<6;k++){const q=((t-E.toc)*1.3+k*.37)%1;withA(.9,()=>{ctx.fillStyle=['#fff','#9ad','#fc8'][k%3];ctx.fillRect(60+k*34,330+q*150,10,10)})}});
    TX('SEGUNDO PROBLEMA',180,40,19,'#fff',t,E.tr2+.1,{out:E.set-.2});TX('LA CASA',180,80,40,YEL,t,E.casa-.15,{out:E.set-.2,sh:'rgba(255,240,106,.7)'});
    const q=win(t,E.set-.2,E.set+.3);withA(q*(1-win(t,E.toc-.1,E.toc+.2)),()=>{const v=eio(win(t,E.set,E.set+.9))*.76;ring(180,140,50,v,FEM,11);bigNum(Math.round(countV(0,76,t,E.set,.9))+'%',180,146,34,'#fff');TX('DE LAS HORAS DE CUIDADOS',180,214,15,'#fff',t,E.cuid-.3,{});if(t>E.cobrar-.1){TX('SIN COBRAR',180,246,30,GRN,t,E.cobrar-.1,{sh:'rgba(125,255,154,.7)'})}});
    TX('TOCARÍA APRENDER',180,60,20,'#fff',t,E.toc-.1,{out:E.tamp-.3});TX('DE GOLPE',180,98,36,ORA,t,E.toc+.2,{out:E.tamp-.3,sh:'rgba(255,154,60,.7)'});if(t>E.bebes)TX('A CUIDAR BEBÉS',180,150,22,'#fff',t,E.bebes-.2,{out:E.tamp-.3})});
  const p2=win(t,E.tamp-.1,E.tamp+.3);
  withA(p2,()=>{TX('TAMPOCO HABRÍA',180,44,26,RED,t,E.tamp-.1,{sh:'rgba(255,77,106,.7)'});baby(180,150,1.6,t,0,1-eio(win(t,E.tamp+.1,E.tamp+.9)));
    if(t>E.tamp+.5)burst(180,150,t,E.tamp+.5,[CY,'#fff'],18,100,.8,3);
    tr(180,300,pp(t,E.gener-.3,.4),0,()=>{rr(-140,-70,280,140,16);ctx.fillStyle='#0d1b33';ctx.fill();ctx.strokeStyle=MAS;ctx.lineWidth=2;ctx.stroke();for(let i=0;i<5;i++){const x=-112+i*56;if(i===0){circ(x,-8,18,MAS);mars(x,-10,.6,'#fff',2.4)}else{ctx.setLineDash([4,4]);circ(x,-8,18,null,'rgba(255,255,255,.4)',2);ctx.setLineDash([]);line(x-8,-16,x+8,0,RED,3);line(x+8,-16,x-8,0,RED,3)}}
      txt('SIN MUJERES: 0 GENERACIONES',0,40,13,'#fff',{wt:'900',st:INK,sw:3})})})}

function s3(t,u){
  const c=camAt(t,[[E.tr3,180,330,1.0],[E.athos,180,340,1.08,0,'eio'],[E.monjes,190,330,1.15,0,'eio'],[E.hembra,170,330,1.05,0,'eio'],[E.fuera,180,330,1.0,0,'eio']]);
  stage(t,c,{b0:'#071a1f',b1:'#103a4a',f0:'#0f3a52',g:'rgba(90,209,255,.55)'});
  // península
  world(c,()=>{const g=ctx.createLinearGradient(0,330,0,520);g.addColorStop(0,'#2f5d4a');g.addColorStop(1,'#16352b');ctx.fillStyle=g;ctx.beginPath();ctx.moveTo(60,520);ctx.quadraticCurveTo(70,380,150,360);ctx.quadraticCurveTo(250,350,300,300);ctx.quadraticCurveTo(318,350,300,420);ctx.quadraticCurveTo(280,500,260,520);ctx.closePath();ctx.fill();ctx.strokeStyle='#8be0b4';ctx.lineWidth=1.5;ctx.stroke();
    const n=Math.round(clamp01(win(t,E.veinte-.1,E.veinte+1.2))*20);for(let i=0;i<n;i++){const x=100+(i%10)*18+(i>9?9:0),y=430+Math.floor(i/10)*34-(i%3)*8;box3d(x,y,9,16,6,'#d9c7a0',{});poly([[x-1,y-16],[x+4.5,y-24],[x+10,y-16]],'#b5533a')}
    if(t>E.entran-.2){const q=pp(t,E.entran-.1,.4);tr(160,330,q,0,()=>{noSign(0,0,1,RED,t);venus(0,-6,.9,'#fff',3)})}
    const mq=win(t,E.monjes-.1,E.monjes+.4);if(mq>0)for(let i=0;i<8;i++){fig(100+i*26,495+(i%2)*8,1.05*mq,{sex:'m',col:'#6b4a2e',hair:'#6b4a2e',skin:SKIN,walk:true,ph:t*2+i,face:'smile'})}
    if(t>E.hembra-.2){const q=pp(t,E.hembra,.4);tr(240,458,q,0,()=>{ctx.fillStyle='#f4f0ff';rr(-18,-12,36,22,9);ctx.fill();circ(-18,-6,8,'#f4f0ff');ctx.fillStyle='#222';circ(-21,-8,1.6,'#222');ctx.fillStyle='#fff';ctx.fillRect(-14,10,4,10);ctx.fillRect(10,10,4,10);venus(0,-34,.5,FEM,2.4);noSign(0,-4,.6,RED,t)});const q2=pp(t,E.gatos-.05,.4);tr(190,470,q2,0,()=>{cat(0,0,1.5);ctx.strokeStyle=GRN;ctx.lineWidth=5;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-10,-34);ctx.lineTo(-2,-26);ctx.lineTo(14,-44);ctx.stroke()})}
    if(t>E.fuera-.2)for(let k=0;k<7;k++){const q=cl(((t-E.fuera+.2)*.8+k*.12));const x=lerp(k%2?-60:430,180+(k-3)*14,eo(q)),y=lerp(440,420,q);if(q<1&&q>0)fig(x,y,.9,{sex:'m',col:'#6b4a2e',walk:true,ph:t*5+k,flip:k%2===0})}});
  TX('EL MONTE ATHOS · GRECIA',180,40,19,'#fff',t,E.athos-.4,{out:E.mil46-.55});TX('DESDE EL AÑO',180,40,18,'#fff',t,E.mil46-.5,{out:E.entran-.15});
  if(t>E.mil46-.5&&t<E.entran-.15)bigNum(String(Math.round(countV(1000,1046,t,E.mil46-.4,.45))),180,92,46,YEL);
  TX('NO ENTRAN MUJERES',180,80,30,RED,t,E.entran-.1,{out:E.monjes-.3,sh:'rgba(255,77,106,.7)'});
  TX('~1.500 MONJES',180,44,24,'#fff',t,E.monjes-.1,{out:E.hembra-.3});TX('20 MONASTERIOS',180,80,34,YEL,t,E.veinte-.1,{out:E.hembra-.3,sh:'rgba(255,240,106,.7)'});
  TX('ANIMALES HEMBRA: NO',180,44,22,RED,t,E.hembra-.2,{out:E.gatos-.2});TX('MENOS LOS GATOS',180,80,34,GRN,t,E.gatos-.15,{out:E.fuera-.3,sh:'rgba(125,255,154,.7)'});
  TX('SIGUEN POR LOS QUE',180,44,19,'#fff',t,E.fuera-.25,{});TX('LLEGAN DE FUERA',180,80,32,CY,t,E.fuera-.15,{sh:'rgba(90,209,255,.7)'})}
function clamp01(v){return Math.max(0,Math.min(1,v))}

function s4(t,u){
  const c=camAt(t,[[E.tr4,180,330,1.0],[E.fuerza,180,330,1.1,0,'eio'],[E.atl-.2,120,340,1.05,0,'eio'],[E.corren-.2,130,340,1.05,0,'lin'],[E.rapido+.3,350,340,1.05,0,'eio']]);
  stage(t,c,{});
  const p1=1-win(t,E.atl-.4,E.atl-.1);
  withA(p1,()=>{TX('AUN ASÍ,',180,40,20,'#fff',t,E.tr4+.1,{out:E.atl-.4});TX('NO TODO SERÍA UN DESASTRE',180,78,22,GRN,t,E.tr4+.25,{out:E.atl-.4,sh:'rgba(125,255,154,.7)'});
    const fl=.5+.5*Math.sin(t*3.2);arm(180,290,1.5,MAS,fl,t);hbar(60,380,240,12,1,MAS,'ELLOS',t,E.fuerza-.1,13);hbar(60,424,240,12,.6,FEM,'ELLAS',t,E.fuerza+.1,13);TX('FUERZA EN LA PARTE SUPERIOR',180,480,15,'#fff',t,E.fuerza-.2,{})});
  const p2=win(t,E.atl-.3,E.atl);
  withA(p2,()=>{world(c,()=>{ctx.fillStyle='#8a2f2f';ctx.beginPath();ctx.moveTo(-300,410);ctx.lineTo(700,410);ctx.lineTo(820,540);ctx.lineTo(-420,540);ctx.fill();for(let k=0;k<12;k++){line(-200+k*80,410,-300+k*110,540,'rgba(255,255,255,.5)',2)}line(-300,470,700,470,'rgba(255,255,255,.35)',1.5);
      const r=eio(win(t,E.corren-.3,E.rapido+.5)),xm=lerp(20,450,r),xf=lerp(20,450*.89,r),b=t*14;
      line(500,400,500,540,'#fff',3);ctx.fillStyle='#fff';for(let k=0;k<6;k++)ctx.fillRect(492+(k%2)*8,404+k*22,8,11);
      fig(xf,478,1.6,{sex:'f',walk:true,ph:b,la:Math.sin(b)*1.1,ra:-Math.sin(b)*1.1,face:'mad'});fig(xm,440,1.5,{sex:'m',walk:true,ph:b,la:Math.sin(b)*1.1,ra:-Math.sin(b)*1.1,face:'mad'});
      if(t>E.rapido-.2){const gx=xf+30;line(gx,500,xm+30,500,YEL,3);ctx.fillStyle=YEL;ctx.fillRect(gx-2,494,4,12);ctx.fillRect(xm+28,494,4,12)}
      dust(t,10,'#ffd9a0',2,30,2,.4)});
    TX('ATLETISMO DE ÉLITE',180,40,20,'#fff',t,E.atl-.2,{});TX('ELLOS CORREN MÁS',180,76,25,MAS,t,E.corren-.15,{sh:'rgba(74,163,255,.8)'});
    if(t>E.diez2-.1){bigNum('10–12 %',180,140,42,YEL);TX('MÁS RÁPIDO',180,186,24,'#fff',t,E.rapido-.15,{})}})}

function s5(t,u){
  const c=camAt(t,[[E.tr5,180,330,1.0],[E.nueve2,180,330,1.0,0,'lin'],[E.mud-.2,210,330,1.1,0,'eio'],[E.exito,200,320,1.2,0,'eio']]);
  stage(t,c,{});
  const p1=1-win(t,E.mud-.4,E.mud-.1);
  withA(p1,()=>{TX('MUERTES EN EL TRABAJO · EE. UU.',180,40,15,'#fff',t,E.ademas+.2,{out:E.mud-.4});TX('9 DE CADA 10',180,78,38,MAS,t,E.nueve2-.2,{out:E.mud-.4,sh:'rgba(74,163,255,.8)'});
    for(let i=0;i<10;i++){const q=pp(t,E.nueve2+.1+i*.05,.3);if(q<=0)continue;fig(46+i*30,230,1.0*q,{sex:i<9?'m':'f',hat:'hard',col:i<9?MAS:FEM,face:'o'})}
    [[70,E.obras,'OBRAS'],[180,E.minas,'MINAS'],[290,E.tej,'TEJADOS']].forEach((a,k)=>{const q=pp(t,a[1]-.1,.35);if(q<=0)return;tr(a[0],370,q,0,()=>{glow(0,0,48,rgba(ORA,.3));
      if(k===0){box3d(-24,28,36,50,16,'#6a7a9a');line(-6,-30,34,-30,GLD,4);line(30,-30,30,-4,'#fff',1.4);ctx.fillStyle=GLD;ctx.fillRect(26,-4,8,8)}
      if(k===1){ctx.fillStyle='#5a6a8a';ctx.beginPath();ctx.moveTo(-26,-6);ctx.lineTo(26,-6);ctx.lineTo(18,22);ctx.lineTo(-18,22);ctx.fill();circ(-12,26,5,'#222');circ(12,26,5,'#222');[[-8,-12],[4,-14],[12,-10]].forEach(p=>circ(p[0],p[1],5,'#9ad'))}
      if(k===2){poly([[-34,18],[0,-24],[34,18]],'#8a4a3a','#fff',1.4);for(let r=0;r<3;r++)line(-26+r*7,10-r*10,26-r*7,10-r*10,'rgba(0,0,0,.3)',2)}
      txt(a[2],0,50,13,'#fff',{wt:'900',st:INK,sw:3})})});
    if(t>E.ellos-.2)TX('ESE TRABAJO YA LO HACEN ELLOS',180,470,16,'#fff',t,E.ellos-.2,{out:E.mud-.4})});
  const p2=win(t,E.mud-.3,E.mud);
  withA(p2,()=>{world(c,()=>{
      const tx=lerp(-60,200,eo(win(t,E.mud-.2,E.mud+.7)));box3d(tx-60,500,150,70,60,'#e6edf7',{rim:'#fff'});box3d(tx+96,500,50,48,56,MAS,{rim:'#fff'});circ(tx-30,502,12,'#111','#999',3);circ(tx+110,502,12,'#111','#999',3);txt('MUDANZAS',tx+15,462,13,INK,{wt:'900'});
      const k=eio(win(t,E.mud+.4,E.exito));[0,1,2,3].forEach(i=>fig(tx-80+i*30-k*0+(i%2)*8,520,1.25,{sex:'m',walk:true,ph:t*6+i,carry:i%2?'box':null,la:i%2?undefined:1.3,face:'smile',flip:true}));
      const py=lerp(500,330,eo(win(t,E.exito-.6,E.exito+.3)));tr(tx+175,py,1.2,Math.sin(t*3)*.03,()=>{box3d(-32,10,64,20,22,'#15101f',{rim:'#fff'});for(let k=0;k<7;k++){ctx.fillStyle='#fff';ctx.fillRect(-29+k*8.4,-11,5,9)}});line(tx+175,150,tx+175,py-24,'#ddd',2)});
    TX('LAS MUDANZAS',180,44,22,'#fff',t,E.mud-.2,{out:E.exito-.2});TX('SERÍAN UN ÉXITO',180,84,34,ORA,t,E.mud+.15,{out:E.exito-.2,sh:'rgba(255,154,60,.7)'});
    if(t>E.exito-.1){const q=pp(t,E.exito,.4);tr(180,130,q,-.06,()=>{rr(-120,-26,240,52,10);ctx.fillStyle=GRN;ctx.fill();txt('PIANO SUBIDO ✔',0,2,26,INK,{wt:'900'})});burst(180,130,t,E.exito,[GRN,YEL,'#fff'],26,150,.9,3)}})}

function s6(t,u){
  const c=camAt(t,[[E.tr6,180,330,1.0],[E.science,180,330,1.0,0,'lin'],[E.ellas,180,340,1.15,0,'eio'],[E.vez,180,340,1.25,0,'eo']]);
  stage(t,c,{});
  world(c,()=>{box3d(40,480,260,26,130,'#6b4a2e',{rim:'#ffd9a0'});[[70,'m'],[130,'m'],[190,'m'],[250,'m'],[100,'m'],[220,'m']].forEach((a,i)=>fig(a[0]+(i>3?10:0),i>3?452:520,1.35,{sex:'m',face:t>E.ellas?(Math.sin(t*14+i*2)>0?'o':'mad'):'smile',la:t>E.vez-1?Math.sin(t*8+i)*1.2+1.6:undefined,flip:i%2===0}))});
  TX('PERO OJO CON',180,40,20,'#fff',t,E.tr6+.15,{out:E.science-.2});TX('LAS REUNIONES',180,78,38,YEL,t,E.reun-.15,{out:E.science-.2,sh:'rgba(255,240,106,.7)'});
  const q=win(t,E.science-.2,E.science+.2)*(1-win(t,E.ellas-.35,E.ellas-.1));
  if(q>0)withA(q,()=>panel(180,230,300,150,CY,(w,h)=>{txt('SCIENCE · 2010',0,-56,15,CY,{wt:'900'});ctx.strokeStyle='rgba(255,255,255,.4)';ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(-120,50);ctx.lineTo(-120,-40);ctx.moveTo(-120,50);ctx.lineTo(125,50);ctx.stroke();
      const pr=eo(win(t,E.mejores-.5,E.mejores+1.4));ctx.save();ctx.strokeStyle=FEM;ctx.lineWidth=3.5;ctx.shadowColor=FEM;ctx.shadowBlur=10;ctx.beginPath();for(let i=0;i<=40;i++){const x=-110+i*5.5,y=40-i*1.7-Math.sin(i*.5)*5;if(i/40>pr)break;i?ctx.lineTo(x,y):ctx.moveTo(x,y)}ctx.stroke();ctx.restore();txt('MÁS MUJERES → MEJOR RESULTADO',0,68,10,'#fff',{wt:'800'})},t,E.science-.15));
  TX('SIN ELLAS...',180,44,26,RED,t,E.ellas-.1,{out:E.vez-.55,sh:'rgba(255,77,106,.7)'});
  if(t>E.ellas){const L=[[70,150,'¡YO!'],[290,160,'¡NO!'],[120,215,'¡OYE!'],[250,230,'¡PERO!'],[60,300,'¡YO DIJE!'],[300,310,'¡CALLA!'],[180,190,'¡ESCUCHA!'],[190,270,'¡¿QUÉ?!']];L.forEach((a,i)=>bubble(a[0]+Math.sin(t*3+i)*4,a[1]+Math.cos(t*2+i)*3,1.5,[MAS,ORA,RED,'#7a5cff'][i%4],a[2],E.ellas+.3+i*.25,t,13))}
  if(t>E.vez-.3)TX('TODOS A LA VEZ',180,44,30,YEL,t,E.vez-.4,{sh:'rgba(255,240,106,.7)'})}

function s7(t,u){
  bg('#08142a','#0b0716');bokeh(t,16,MAS,5,.3);
  const lq=1+.07*wob(t-E.sobre,16,6),rq=1+.07*wob(t-E.desastre,16,6),vb=Math.sin(t*2.4)*.08;
  tr(99,310,lq,0,()=>{rr(-76,-104,152,208,22);ctx.fillStyle='rgba(125,255,154,.12)';ctx.fill();ctx.save();ctx.strokeStyle=GRN;ctx.lineWidth=2.4;ctx.shadowColor=GRN;ctx.shadowBlur=12;ctx.stroke();ctx.restore();
    mars(0,-22,1.7,GRN,4);ctx.strokeStyle=GRN;ctx.lineWidth=6;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-14,12);ctx.lineTo(-3,24);ctx.lineTo(16,0);ctx.stroke();txt('SOBREVIVIRÍA',0,64,14,'#fff',{wt:'900',st:INK,sw:4});rr(-52,86,104,9,4);ctx.fillStyle='rgba(255,255,255,.15)';ctx.fill();rr(-52,86,104*(.5+vb),9,4);ctx.fillStyle=GRN;ctx.fill()});
  tr(261,310,rq,0,()=>{rr(-76,-104,152,208,22);ctx.fillStyle='rgba(255,77,106,.12)';ctx.fill();ctx.save();ctx.strokeStyle=RED;ctx.lineWidth=2.4;ctx.shadowColor=RED;ctx.shadowBlur=12;ctx.stroke();ctx.restore();
    arm(0,-18,.9,RED,.6+.4*Math.sin(t*3),t);line(-14,-42,14,-14,'rgba(255,255,255,.0)',1);txt('DESASTRE',0,48,16,'#fff',{wt:'900',st:INK,sw:4});txt('CON MÚSCULOS',0,68,13,'#fff',{wt:'900',st:INK,sw:4});rr(-52,86,104,9,4);ctx.fillStyle='rgba(255,255,255,.15)';ctx.fill();rr(-52,86,104*(.5-vb),9,4);ctx.fillStyle=RED;ctx.fill()});
  TX('¿SOBREVIVIRÍA?',180,44,32,YEL,t,E.tr7+.1,{out:E.cual-.2,sh:'rgba(255,240,106,.7)'});
  if(t>E.coment-.1){const q=pp(t,E.coment-.05,.35);tr(180,452,q*(1+.05*wob(t-E.coment-.3,20,6)),0,()=>{rr(-100,-16,200,32,16);ctx.fillStyle=YEL;ctx.fill();txt('COMENTA TU RESPUESTA',0,1,14,INK,{wt:'900'})})}
  if(t>E.cual-.1){const q=pp(t,E.cual,.4);tr(180,500,q,0,()=>{rr(-150,-18,300,36,18);ctx.fillStyle='#2a1250';ctx.fill();ctx.strokeStyle=FEM;ctx.lineWidth=2;ctx.stroke();venus(-122,0,.45,FEM,2.4);mars(122,0,.45,MAS,2.4);txt('¿QUÉ MUNDO ELEGIRÍAS?',0,1,14,'#fff',{wt:'900',st:INK,sw:3})});shock(180,500,t,E.cual,YEL,150,4,.5)}
  TX('SÍGUEME PARA MÁS',180,44,28,MAS,t,E.sig-.1,{sh:'rgba(74,163,255,.8)'})}
// brazo flexionado (compartido con el video de la mañana)
function arm(x,y,s,col,flex,t){tr(x,y,s,0,()=>{ctx.save();ctx.shadowColor=col;ctx.shadowBlur=14;ctx.lineCap='round';ctx.strokeStyle=col;ctx.lineWidth=22;ctx.beginPath();ctx.moveTo(-52,30);ctx.lineTo(-4,30);ctx.stroke();ctx.lineWidth=19;ctx.beginPath();ctx.moveTo(-4,30);ctx.lineTo(24,-34);ctx.stroke();circ(28,-46,13,col);circ(-22,12,10+flex*13,shade(col,.15));ctx.restore();ctx.strokeStyle='rgba(255,255,255,.55)';ctx.lineWidth=2;ctx.beginPath();ctx.arc(-22,12,8+flex*11,Math.PI*1.1,Math.PI*1.8);ctx.stroke()})}
boot([s0,s1,s2,s3,s4,s5,s6,s7],TRS,{cap:{acc:MAS}});
