// ===== ¿Por qué ronronean los gatos? El llanto escondido — escenas (ámbar sobre azul noche) =====
const pp=(t,ts,d=.35)=>t<ts?0:eb(cl((t-ts)/d));
// onda del ronroneo: seno lento y grueso con brillo
function purrWave(x0,x1,y,amp,t,col,rev=1,sp=3,lw=3.2){const L=(x1-x0)*rev;for(let k=2;k>=0;k--){ctx.save();ctx.beginPath();for(let x=0;x<=L;x+=3){const yy=y+Math.sin((x+k*4)*.045-t*sp)*amp*(1-k*.2);x?ctx.lineTo(x0+x,yy):ctx.moveTo(x0+x,yy)}
  ctx.strokeStyle=k===0?'#fff':col;ctx.globalAlpha=k===0?.9:.4;ctx.lineWidth=k===0?lw*.5:lw*(1+k*.5);ctx.shadowColor=col;ctx.shadowBlur=k===0?10:6;ctx.lineJoin='round';ctx.stroke();ctx.restore()}}
// llanto escondido: garabato agudo (alta frecuencia) encima de la onda; gate(x) devuelve 0..1
function cryWave(x0,x1,y,amp,t,col,gate,baseAmp=0){ctx.save();ctx.beginPath();let on=false;for(let x=0;x<=x1-x0;x+=2){const g=gate(x);if(g<=.01){on=false;continue}
  const yy=y+Math.sin(x*.045*1-t*3)*baseAmp+Math.sin(x*.9-t*40)*amp*g;on?ctx.lineTo(x0+x,yy):ctx.moveTo(x0+x,yy);on=true}
  ctx.strokeStyle=col;ctx.lineWidth=2;ctx.shadowColor=col;ctx.shadowBlur=12;ctx.lineJoin='round';ctx.stroke();ctx.restore()}
function pIcon(x,y,s,col,rim){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.fillStyle=col;ctx.beginPath();ctx.arc(0,-7,5.5,0,TAU);ctx.fill();ctx.beginPath();ctx.moveTo(-9,9);ctx.quadraticCurveTo(-9,-1,0,-1);ctx.quadraticCurveTo(9,-1,9,9);ctx.closePath();ctx.fill();if(rim){ctx.strokeStyle=rim;ctx.lineWidth=1.2;ctx.stroke()}ctx.restore()}
function meter(x,y,w,v,col,lbl,t,ts){const a=win(t,ts,ts+.25);withA(a,()=>{txt(lbl,x,y-12,11,'#fff',{a:'left',wt:'800'});rr(x,y-4,w,12,6);ctx.fillStyle='rgba(255,255,255,.15)';ctx.fill();if(v>.01){rr(x,y-4,Math.max(12,w*v),12,6);ctx.save();ctx.shadowColor=col;ctx.shadowBlur=10;ctx.fillStyle=col;ctx.fill();ctx.restore()}})}
function sweat(x,y,t){const q=(t*1.4)%1;ctx.save();ctx.globalAlpha=1-q;ctx.fillStyle=CY;ctx.beginPath();ctx.moveTo(x,y-7+q*26);ctx.quadraticCurveTo(x+5,y+1+q*26,x,y+5+q*26);ctx.quadraticCurveTo(x-5,y+1+q*26,x,y-7+q*26);ctx.fill();ctx.restore()}

// ---------- S0: gancho ----------
function s0(t,u){
  const c=camAt(t,[[0,180,296,1.45],[E.llanto-.3,180,296,1.45,0,'lin'],[E.llanto+.2,180,330,1.0,0,'eio'],[E.ron-.3,180,330,1.0,0,'lin'],[E.ron,180,300,1.25,0,'eo']]);
  bg('#06101a','#143a56');
  world(c,()=>{
    dust(t,26,PINK,4,7,1.5,.35);glow(180,270,210,rgba(PINK,.3));
    const bl=Math.max(0,Math.sin((t-2.0)*Math.PI/.4))*(t>2&&t<2.4?1:0);
    catHead(180,262,1.55*(1+.03*wob(t-E.eng,16,6)),{rim:PINK,eye:GRN,halo:true,blink:bl,look:Math.sin(t*1.2)*.5,rot:wob(t-E.eng,14,5)*.08});
    // onda del ronroneo bajo el gato
    purrWave(30,330,420,15,t,PINK,win(t,.5,1.3),3.2);
    // llanto escondido dentro del ronroneo
    const q=pp(t,E.llanto,.4);
    if(q>0){cryWave(120,240,420,11,t,ROSE,x=>win(x,0,10)*win(120-x,-120,-110)*q,15);
      tr(180,350,q,0,()=>{circ(0,0,30,rgba(ROSE,.25));babyFace(0,0,.42,{cry:1,t,rim:'#ffe2cc'})});shock(180,350,t,E.llanto,ROSE,60,3,.5)}});
  shock(180,300,t,E.eng,PINK,200,5,.7);
  TX('TU GATO',180,40,28,'#fff',t,-.6,{out:E.llanto-.1});TX('TE ENGAÑA',180,78,42,YEL,t,-.5,{out:E.llanto-.1,sh:'rgba(255,240,106,.7)'});
  TX('UN LLANTO ESCONDIDO',180,478,22,ROSE,t,E.llanto-.1,{sh:'rgba(255,92,122,.7)'})}

// ---------- S1: ¿feliz? ----------
function s1(t,u){
  bg('#08141f','#143349');
  const hap=win(t,E.feliz-.1,E.feliz+.2)*(1-win(t,E.pero,E.pero+.2)),fear=win(t,E.miedo-.1,E.miedo+.15)*(1-win(t,E.duele-.05,E.duele+.1)),pain=win(t,E.duele-.05,E.duele+.1);
  const col=hap>.5?PINK:(fear>.5?CY:(pain>.5?ROSE:PINK));
  dust(t,26,col,8,6,1.4,.3);glow(180,300,200,rgba(col,.3));
  const jx=fear*Math.sin(t*55)*1.6+pain*wob(t-E.duele,22,6)*4;
  catHead(180+jx,300,1.5,{rim:col,eye:fear>.5?CY:GRN,halo:true,squint:hap*.55+pain*.85,eyeS:1+fear*.4,look:Math.sin(t*1.1)*.4*(1-fear),blink:Math.max(0,Math.sin((t-7)*Math.PI/.35))*(t>7&&t<7.35?1:0)});
  if(hap>.1){floatHearts(180,260,t,E.feliz,10,80,1.6,ROSE,10,1.2);if(t<E.pero)floatHearts(180,260,t,E.feliz+.9,6,70,1.3,ROSE,9,1.1)}
  if(fear>.1){sweat(250,250,t);sweat(110,262,t+.4)}
  if(pain>.1){burst(180,290,t,E.duele,[ROSE,YEL,'#fff'],18,120,.7,3);ctx.save();tr(205,252,1,.5,()=>{rr(-20,-8,40,16,5);ctx.fillStyle='#f0c9a0';ctx.fill();ctx.strokeStyle='#b88a60';ctx.lineWidth=1.2;ctx.stroke();ctx.fillStyle='#d9a878';ctx.fillRect(-6,-8,12,16)});ctx.restore()}
  shock(180,300,t,E.miedo,CY,160,4,.5);shock(180,300,t,E.duele,ROSE,170,5,.6);
  TX('TODOS CREEMOS',180,44,20,'#fff',t,E.tr1-.1,{out:E.feliz+1.3});TX('SOY FELIZ',180,84,42,YEL,t,E.feliz-.2,{out:E.pero-.1,sh:'rgba(255,240,106,.7)'});
  TX('PERO TAMBIÉN',180,44,20,'#fff',t,E.pero-.05,{out:E.duele-.1});TX('TIENEN MIEDO',180,84,38,CY,t,E.miedo-.15,{out:E.duele-.1,sh:'rgba(90,209,255,.7)'});
  TX('O LES DUELE',180,70,42,ROSE,t,E.duele-.12,{sh:'rgba(255,92,122,.8)'})}

// ---------- S2: 25 veces por segundo + laringe ----------
function s2(t,u){
  bg('#08141f','#143349');dust(t,22,CY,2,6,1.3,.3);
  const mv=eio(win(t,E.prod-.1,E.prod+.5)),sy=lerp(250,150,mv),ss=lerp(1,.62,mv);
  tr(180,sy,ss,0,()=>{
    purrWave(-150,150,0,34,t,PINK,win(t,E.tr2-.4,E.tr2+.5),3.2,3.4);
    // 25 marcas por segundo: una barra que recorre 25 marcas en 1 s
    const k=Math.floor((t%1)*25),a=win(t,E.veinte-.2,E.veinte+.2);
    withA(a,()=>{for(let i=0;i<25;i++){const x=-144+i*12,on=i<=k;rr(x-2,64,4,on?24:14,2);ctx.fillStyle=on?YEL:'rgba(255,255,255,.25)';ctx.fill()}
      const n=Math.min(25,Math.round(countV(0,25,t,E.veinte,.9)));txt(String(n),0,128,62,YEL,{st:INK,sw:6,wt:'900'});txt('VECES POR SEGUNDO',0,172,15,'#fff',{wt:'800',st:INK,sw:4})})});
  // tarjeta de la laringe (morph a la siguiente escena)
  const cq=pp(t,E.prod,.4);
  if(cq>0)tr(180,380,cq,0,()=>{rr(-140,-95,280,190,20);ctx.fillStyle='#2b1a0a';ctx.fill();ctx.strokeStyle=PINK;ctx.lineWidth=2.4;ctx.shadowColor=PINK;ctx.shadowBlur=12;ctx.stroke();ctx.shadowBlur=0;
    // tubo de la garganta
    rr(-118,-26,236,52,26);ctx.fillStyle='#5a2f12';ctx.fill();ctx.strokeStyle='#ffd9a8';ctx.lineWidth=1.6;ctx.stroke();
    const gap=2+(.5+.5*Math.sin(t*42))*(t>E.lar?9:3);
    [-1,1].forEach(sg=>{ctx.beginPath();ctx.moveTo(-14,sg*26);ctx.quadraticCurveTo(0,sg*(gap+2),16,sg*(gap));ctx.lineTo(16,sg*28);ctx.closePath();ctx.fillStyle=ROSE;ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=1.2;ctx.stroke()});
    for(let i=0;i<4;i++){const x=-100+((t*60+i*60)%220);withA(.7,()=>{ctx.strokeStyle='rgba(255,255,255,.6)';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(x-5,-6);ctx.lineTo(x,0);ctx.lineTo(x-5,6);ctx.stroke()})}
    waveArcs(122,0,t,E.lar,PINK,3,.1,30,0,.8,2.4);txt('LARINGE',-80,-66,16,PINK,{wt:'900',st:INK,sw:4})});
  TX('UN SONIDO',180,44,20,'#fff',t,E.tr2-.4,{out:E.veinte-.1});TX('GRAVÍSIMO',180,84,42,CY,t,E.grav-.2,{out:E.veinte-.1,sh:'rgba(90,209,255,.7)'});
  TX('LO PRODUCE LA LARINGE',180,500,17,'#fff',t,E.prod-.1,{out:E.vel-.2});TX('ABRE Y CIERRA A TODA VELOCIDAD',180,500,15,YEL,t,E.vel-.5,{})}

// ---------- S3: gatitos ----------
function s3(t,u){
  bg('#2b1a0a','#4a2a10');dust(t,30,'#ffd9a8',6,5,1.5,.35);glow(180,330,230,'rgba(255,170,80,.28)');
  const kq=eio(win(t,E.maman-.2,E.maman+.5));
  catHead(130,300,1.5,{rim:PINK,eye:GRN,squint:.5,col:'#150b04',halo:true,rot:Math.sin(t*3)*.02});
  catHead(lerp(262,214,kq),lerp(384,372,kq),.82,{rim:'#ffd9a8',eye:GRN,squint:.6,col:'#150b04'});
  waveArcs(130,300,t,E.tr3+.3,PINK,3,.15,100,0,.35,2.2);waveArcs(130,300,t,E.tr3+1.4,PINK,3,.15,100,0,.35,2.2);waveArcs(250,385,t,E.gatitos+.1,'#ffd9a8',3,.12,50,-Math.PI/2,1,2);
  floatHearts(215,340,t,E.maman,9,70,1.8,ROSE,9,1.1);
  TX('LOS GATITOS',180,44,22,'#fff',t,E.tr3+.05,{out:E.maman-.3});TX('YA RONRONEAN',180,84,38,YEL,t,E.gatitos-.1,{out:E.maman-.3,sh:'rgba(255,240,106,.7)'});
  TX('DESDE QUE MAMAN',180,64,34,PINK,t,E.maman-.2,{sh:'rgba(255,162,62,.7)'})}

// ---------- S4: el estudio ----------
const GX=i=>60+(i%5)*60,GY=i=>i<5?208:282;
function s4(t,u){
  bg('#071420','#12304a');dust(t,22,CY,5,5,1.3,.3);
  rr(24,150,312,190,18);ctx.fillStyle='#0c2236';ctx.fill();ctx.strokeStyle=rgba(CY,.7);ctx.lineWidth=2;ctx.stroke();
  for(let i=0;i<10;i++){const q=pp(t,E.diez+i*.06,.3);if(q<=0)continue;const relaj=i<5&&t>E.rela,pide=i>=5&&t>E.pid;
    tr(GX(i),GY(i),q,0,()=>{catHead(0,0,.5,{rim:relaj?CY:(pide?PINK:'#fff'),eye:relaj?CY:GRN,squint:relaj?.85:0,eyeS:pide?1.25:1,halo:relaj||pide})});
    if(relaj&&t<E.pid+.4)txt('z',GX(i)+22,GY(i)-26-((t*20+i*7)%14),12,CY,{wt:'900',a:.8});
    if(pide)txt('!',GX(i)+22,GY(i)-24+Math.sin(t*14+i)*2,15,YEL,{wt:'900'})}
  shock(180,245,t,E.diez,CY,150,3,.5);
  TX('EN 2009',180,44,22,'#fff',t,E.tr4+.05,{out:E.karen-.1});TX('UN ESTUDIO',180,84,36,YEL,t,E.dos9-.2,{out:E.karen-.1});
  TX('LA CIENTÍFICA',180,36,18,'#fff',t,E.karen-.1,{});TX('KAREN McCOMB',180,70,34,YEL,t,E.karen-.05,{sh:'rgba(255,240,106,.7)'});
  tag('UNIVERSIDAD DE SUSSEX',180,118,17,'rgba(90,209,255,.9)',INK,t,E.suss-.2,{});
  TX('RELAJADOS',180,368,24,CY,t,E.rela-.05,{sh:'rgba(90,209,255,.7)'});TX('PIDIENDO COMIDA',180,408,24,PINK,t,E.pid-.05,{sh:'rgba(255,162,62,.7)'});
  TX('10 GATOS · 2 FORMAS',180,470,18,'#fff',t,E.diez+.2,{})}

// ---------- S5: cincuenta personas ----------
const GOLD=new Set([2,5,8,13,14,17,22,26,29,31,35,38,41,44,46,48,3,19,33,12]);
function s5(t,u){
  bg('#0c2236','#0f2f4a');dust(t,20,CY,9,5,1.3,.25);
  for(let i=0;i<50;i++){const x=40.5+(i%10)*31,y=130+Math.floor(i/10)*36,q=pp(t,E.cinc+(i%10+Math.floor(i/10))*.03,.3);if(q<=0)continue;
    const g=GOLD.has(i)&&t>E.nunca,b=g?.5+.5*Math.sin((t-E.nunca)*8-i):0;
    if(g)glow(x,y,16,rgba(YEL,.5*b+.2));pIcon(x,y,q,g?YEL:'#9fd6ff',g?'#fff':null)}
  const uv=eo(win(t,E.urg,E.urg+.5)),av=1-.8*eo(win(t,E.agr,E.agr+.6));
  meter(50,352,260,uv,mixc(PINK,ROSE,uv),'URGENCIA',t,E.urg-.2);meter(50,396,260,t>E.agr?av:1,mixc(CY,'#4a6a88',1-av),'AGRADABLE',t,E.agr-.2);
  if(t>E.urg)shock(180,352,t,E.urg,ROSE,120,3,.5);
  if(t>E.nunca-.1){const q=pp(t,E.nunca,.4);tr(180,462,q,0,()=>{catHead(-64,0,.42,{rim:'#fff',eye:GRN});ctx.strokeStyle=ROSE;ctx.lineWidth=4;ctx.beginPath();ctx.arc(-64,0,30,0,TAU);ctx.moveTo(-86,-22);ctx.lineTo(-42,22);ctx.stroke();txt('SIN GATO,',18,-8,16,'#fff',{a:'left',wt:'900',st:INK,sw:4});txt('IGUAL LO NOTARON',18,12,13,YEL,{a:'left',wt:'900',st:INK,sw:4})})}
  TX('LAS PUSO A ESCUCHAR',180,44,20,'#fff',t,E.tr5-.1,{out:E.cinc-.2});TX('50 PERSONAS',180,50,40,YEL,t,E.cinc-.2,{sh:'rgba(255,240,106,.7)'});
  TX('PEDIR COMIDA = MÁS URGENTE',180,94,17,'#fff',t,E.urg-.4,{})}

// ---------- S6: el secreto ----------
function s6(t,u){
  bg('#07101a','#17284a');dust(t,28,ROSE,3,6,1.4,.3);
  const rev=win(t,E.tr6+.2,E.tr6+1.0);
  glow(180,330,200,rgba(PINK,.2));
  purrWave(10,350,330,42,t,PINK,rev,2.2,3.8);
  const cq=pp(t,E.agudo-.5,.4),mq=pp(t,E.agudo-.6,.3);
  if(mq>0){const mx=180+Math.sin(t*1.5)*10;ctx.save();ctx.strokeStyle=YEL;ctx.lineWidth=2.4;ctx.shadowColor=YEL;ctx.shadowBlur=10;ctx.beginPath();ctx.arc(mx,330,52*mq,0,TAU);ctx.stroke();ctx.restore()}
  if(cq>0)cryWave(110,250,330,13,t,ROSE,x=>win(x,0,12)*win(140-x,0,12)*cq,42);
  if(t>E.llan2-.45){const q=pp(t,E.llan2-.05,.4),fl=win(t,E.llan2-.45,E.llan2),bx=lerp(190,180,fl),by=lerp(330,200,eo(fl));
    if(t<E.llan2)circ(bx,by,6,ROSE);else{tr(180,200,q*.95,0,()=>{circ(0,0,62,rgba(ROSE,.25));babyFace(0,0,.9,{cry:1,t,rim:'#ffe2cc'})});waveArcs(180,200,t,E.llan2,ROSE,3,.12,66,-Math.PI/2,1.3,2.6)}}
  shock(180,330,t,E.agudo,ROSE,120,3,.6);
  TX('EL SECRETO',180,60,46,YEL,t,E.sec-.15,{out:E.agudo-.5,sh:'rgba(255,240,106,.7)'});
  TX('UN MAULLIDO AGUDO',180,458,26,ROSE,t,E.agudo-.1,{sh:'rgba(255,92,122,.7)'});TX('ESCONDIDO EN EL RONRONEO',180,490,16,'#fff',t,E.agudo+.1,{})}

// ---------- S7: se lo quitaron ----------
const WX0=122,WX1=268,WYB=336;
function s7(t,u){
  const c=camAt(t,[[E.tr7,180,330,1.0],[E.quit-.2,180,330,1.0,0,'lin'],[E.quit,180,334,1.25,0,'eo'],[E.menos+.4,180,334,1.25],[E.exag-.2,180,340,1.0,0,'eio'],[E.func-.1,190,362,1.1,0,'eio']]);
  bg('#08141f','#143349');
  const bar=lerp(WX0,WX1,eio(win(t,E.quit,E.quit+.55))),gone=t>E.quit&&t<E.exag,amp=t<E.exag?9:9+22*eo(win(t,E.exag,E.exag+.6));
  world(c,()=>{glow(180,340,230,rgba(PINK,.15));
    catHead(70,320,.85,{rim:PINK,eye:GRN,squint:t>E.func?.7:0,halo:true,look:.8});
    person(305,470,1.3,{flip:true,shirt:CY,arm:.8,smile:t>E.func+.3});
    purrWave(WX0,WX1,WYB,13,t,PINK,1,3,3);
    cryWave(WX0,WX1,WYB,amp,t,ROSE,x=>{const X=WX0+x,w=win(X,WX0,WX0+10)*win(WX1-X,0,10);if(!gone)return w;return X>bar?w:0},13);
    if(t>E.quit&&t<E.quit+.7){const a=1-win(t,E.quit+.5,E.quit+.7);withA(a,()=>{line(bar,WYB-44,bar,WYB+44,'#fff',3);glow(bar,WYB,30,'rgba(255,255,255,.6)')})}
    // bol y comida
    const fillv=eo(win(t,E.func+.15,E.func+.5));bowl(200,474,1.2*pp(t,E.func-.3,.3),fillv,t);
    if(t>E.func){const q=win(t,E.func,E.func+.16),bx=lerp(285,200,eo(q)),by=lerp(400,410,eo(q));ctx.strokeStyle=CY;ctx.lineWidth=9;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(300,410);ctx.lineTo(bx+14,by+6);ctx.stroke();sack(bx,by+8,.9,lerp(0,2.1,eo(q)));
      for(let i=0;i<12;i++){const tk=E.func+.1+i*.012,qq=(t-tk)/.16;if(qq<0||qq>1)continue;circ(200+(R(i)-.5)*20,lerp(by+16,462,qq*qq),2.6,i%2?'#e58a4a':'#c96a30')}
      floatHearts(75,300,t,E.func+.3,7,70,1.3,ROSE,8,.9)}});
  // medidor de urgencia (HUD)
  const mv=t<E.menos?1:(t<E.exag?1-.78*eo(win(t,E.menos,E.menos+.5)):.22+.78*eo(win(t,E.exag,E.exag+.8)));
  meter(80,142,200,mv,mixc(CY,ROSE,mv),'URGENCIA',t,E.tr7);
  TX('CUANDO QUITARON',180,44,18,'#fff',t,E.quit-.5,{out:E.menos-.1});TX('ESE LLANTO',180,76,38,ROSE,t,E.quit-.2,{out:E.menos-.1,sh:'rgba(255,92,122,.7)'});
  TX('MUCHO MENOS URGENTE',180,190,22,YEL,t,E.menos+.05,{out:E.exag-.7,sh:'rgba(255,240,106,.6)'});
  TX('LOS GATOS APRENDEN',180,186,18,'#fff',t,E.exag-.5,{out:E.func-.3});TX('A EXAGERARLO',180,218,28,ROSE,t,E.exag-.1,{out:E.func-.3,sh:'rgba(255,92,122,.7)'});
  TX('PORQUE FUNCIONA',180,196,30,PINK,t,E.func-.1,{sh:'rgba(255,162,62,.7)'})}

// ---------- S8: debate ----------
function s8(t,u){
  bg('#102a3d','#08141f');dust(t,26,PINK,7,6,1.4,.3);
  const lq=1+.07*wob(t-E.quiere,16,6)+(t>E.quiere&&t<E.comida?.04:0),rq=1+.07*wob(t-E.comida,16,6);
  const vb=Math.sin(t*2.4)*.07;
  catHead(180,186,.74,{rim:PINK,eye:GRN,halo:true,look:t<E.comida?-.9:.9,blink:Math.max(0,Math.sin((t-67)*Math.PI/.35))*(t>67&&t<67.35?1:0)});
  tr(99,350,lq,0,()=>{rr(-75,-100,150,200,22);ctx.fillStyle='rgba(255,92,122,.15)';ctx.fill();ctx.strokeStyle=ROSE;ctx.lineWidth=2.4;ctx.shadowColor=ROSE;ctx.shadowBlur=12;ctx.stroke();ctx.shadowBlur=0;
    heart(0,-30,32,ROSE,{});txt('ME QUIERE',0,36,17,'#fff',{wt:'900',st:INK,sw:4});rr(-50,64,100,10,5);ctx.fillStyle='rgba(255,255,255,.15)';ctx.fill();rr(-50,64,100*(.5+vb),10,5);ctx.fillStyle=ROSE;ctx.fill()});
  tr(261,350,rq,0,()=>{rr(-75,-100,150,200,22);ctx.fillStyle='rgba(255,162,62,.15)';ctx.fill();ctx.strokeStyle=PINK;ctx.lineWidth=2.4;ctx.shadowColor=PINK;ctx.shadowBlur=12;ctx.stroke();ctx.shadowBlur=0;
    bowl(0,-14,1.3,1,t);txt('SU COMIDA',0,36,17,'#fff',{wt:'900',st:INK,sw:4});rr(-50,64,100,10,5);ctx.fillStyle='rgba(255,255,255,.15)';ctx.fill();rr(-50,64,100*(.5-vb),10,5);ctx.fillStyle=PINK;ctx.fill()});
  TX('¿POR QUÉ RONRONEA',180,40,20,'#fff',t,E.tr8+.05,{out:E.sig2-.1});TX('TU GATO?',180,76,36,YEL,t,E.tr8+.2,{out:E.sig2-.1,sh:'rgba(255,240,106,.7)'});
  if(t>E.coment-.1){const q=pp(t,E.coment-.05,.35),tap=wob(t-E.coment-.3,20,6);tr(180,486,q*(1+.05*tap),0,()=>{rr(-80,-16,160,32,16);ctx.fillStyle=YEL;ctx.fill();txt('COMENTA 👇'.replace(' 👇',''),0,1,17,INK,{wt:'900'})});shock(180,486,t,E.coment+.3,YEL,110,3,.5)}
  TX('SÍGUEME PARA MÁS',180,60,30,PINK,t,E.sig2-.1,{sh:'rgba(255,162,62,.7)'})}
boot([s0,s1,s2,s3,s4,s5,s6,s7,s8],TRS,{cap:{acc:PINK}});
