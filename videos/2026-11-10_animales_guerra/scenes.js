// ===== 03 · Animales que fueron a la guerra — escenas =====
// ---------- S0 GANCHO: oso con proyectil -> la cámara se aleja y el oso se vuelve una tarjeta; caen 3 más en cadena ----------
const GRID={oso:[180,320],ele:[562,320],pal:[180,791],per:[562,791]};
const CAM0={x:369,y:587,z:.45};
function bigBoom(x,y,t){const p=1+.035*Math.sin(t*9);sunburst(x,y,t,20,560,OC,.26,.05);
  poly(wobble(SH.star(x,y,270*p,172*p,12,96),t,4,3),OC,INK,5);poly(wobble(SH.star(x,y,184*p,112*p,10,80),t,3,4,2),RD,null);
  glow(x,y,170,'rgba(255,238,190,.9)',.75);poly(SH.star(x,y,86*p,52*p,9,54),CR,null)}
function dropY(u){return u<0?-9999:u<.28?-640*Math.pow(1-u/.28,2):-12*Math.abs(wob(u-.28,22,9))}
function s0(t,u){
  const q=ez((t-E.h_uni)/.4),tl=[E.h_uni+.2,E.h_uni+.48,E.h_uni+.76].map(x=>x+.28);
  const c={x:lerp(180,CAM0.x,q),y:lerp(320,CAM0.y,q),z:Math.exp(lerp(0,Math.log(CAM0.z),q))};
  if(t<E.h_uni){c.z*=lerp(1.02,1.1,win(t,0,E.h_uni))}
  const gl=t<E.h_mun?0:Math.exp(-(t-E.h_mun)*1.6)*(.65+.35*Math.sin((t-E.h_mun)*14))+.15;
  world(c,()=>{bg('#1a1f29','#3b2a26');
    bigBoom(176,330,t);dust(t,36,CR,3,14,1.6,.5);
    const bump=wob(t-E.h_mun,16,6)*3;
    bear(150,478+bump*.3,1.85,{glow:gl});
    shock(109,262,t,E.h_mun,'rgba(255,220,140,.9)',120,4,.6);sparks(109,262,t,E.h_mun,18,'#ffd27a',140,.6,200);
    if(q>0){ // la escena del oso se vuelve tarjeta
      ctx.save();ctx.globalAlpha=Math.min(1,q*1.5);ctx.fillStyle=rgba(SL0,.9);
      ctx.fillRect(-3000,-3000,3000,7000);ctx.fillRect(360,-3000,3000,7000);ctx.fillRect(0,-3000,360,3098);ctx.fillRect(0,542,360,3000);
      rr(0,98,360,444,16);ctx.strokeStyle=PAPER;ctx.lineWidth=24;ctx.stroke();rr(-12,86,384,468,24);ctx.strokeStyle=INK;ctx.lineWidth=3;ctx.stroke();
      rr(14,494,332,38,8);ctx.fillStyle=lit0(t)>.5?RD:RD;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=3;ctx.stroke();txt('OSO',180,514,25,CR,{wt:'900'});ctx.restore()}
    // tarjetas que caen en cadena
    [['ele',0],['pal',1],['per',2]].forEach(([k,i])=>{const ts=E.h_uni+.4+i*.24,uu=t-ts;if(uu<0)return;const [cx,cy]=GRID[k];
      const kind={ele:'elefante',pal:'paloma',per:'perro'}[k],w=wob(t-E.h_camb,20,5)*(i%2?-1:1);
      posterCard(kind,cx,cy+dropY(uu)+(t>E.h_camb?w*7:0),360,444,1,t,{rot:(t>E.h_camb?w*.07:0)+(uu>.28?wob(uu-.28,20,7)*.05*(i%2?1:-1):0),sc:1+(uu>.28?.05*wob(uu-.28,22,8):0)});
      if(uu>.26){shock(cx,cy+222,t,ts+.28,CR,260,6,.5);sparks(cx,cy+222,t,ts+.28,16,'#e8d6aa',230,.55,320,i)}});
  });
  withA(q,()=>{ctx.fillStyle=SL0;ctx.fillRect(348,0,12,640);ctx.fillRect(0,0,12,640)});
  // textos (pantalla)
  TX('UN OSO',180,78,54,CR,t,-.6,{out:E.h_uni-.15,hl:[],sh:'rgba(214,64,47,.6)'});
  TX('EN LA GUERRA',180,128,36,OC,t,-.5,{out:E.h_uni-.15});
  STAMP('1939–1945',272,222,17,t,E.h_mund,{out:E.h_uni-.1});
  TX('NO FUE EL ÚNICO',180,62,25,CR,t,E.h_uni+.12,{w:330});
}
function lit0(){return 1}
// ---------- S1 ANÍBAL: elefantes cruzan los Alpes, la cámara sigue al primero ----------
const GY=395,V1=225;
const LX=tt_=>{const d=tt_-E.a_cruz;return d<0?120:120+Math.min(880,d<.6?V1*d*d/1.2:V1*(d-.3))};
const ELX=(tt_,i)=>LX(tt_)-i*58;
const ALP=[[390,200,190],[480,210,235],[570,200,170],[660,220,255],[750,200,205],[840,190,165]];
function landPts(){const P=[];for(let x=-400;x<=1700;x+=40)P.push([x,372+Math.sin(x*.021)*6+Math.sin(x*.057)*3]);P.push([1700,900],[-400,900]);return P}
const LAND=landPts();
function s1(t,u){
  const f=follow(p=>[LX(p),350],t,.3),k=eo(win(t,E.a_cruz,E.a_cruz+.7)),zo=eio(win(t,E.a_poc+.4,E.a_solo+.6));
  let c={x:lerp(lerp(160,f[0]+55,k),905,zo),y:lerp(350,320,zo),z:lerp(lerp(1.28,1.15,k),.82,zo),r:0};
  if(t<E.a_cruz)c.z=1.28+.05*win(t,E.tr1,E.a_cruz);
  const nLead=t<E.a_roma?1:1,nE=countV(0,37,t,E.a_30,.75);
  nightSky(t);
  ctx.save();ctx.globalAlpha=.9;[[.2,130,'#1c2733'],[.35,95,'#223040']].forEach(([par,amp,col],j)=>{ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(0,640);for(let x=0;x<=360;x+=10){const xx=x+c.x*par*.5;ctx.lineTo(x,330-amp*.4-Math.abs(Math.sin(xx*.012+j*2))*amp*.6)}ctx.lineTo(360,640);ctx.fill()});ctx.restore();
  world(c,()=>{
    // mar con líneas y tierra
    for(let k2=0;k2<18;k2++){const x=((k2*131+t*6)%1900)-300;line(x,352+(k2%3)*5,x+40,352+(k2%3)*5,'rgba(241,228,198,.14)',2)}
    ctx.beginPath();LAND.forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));ctx.closePath();ctx.fillStyle=OL;ctx.fill();ctx.strokeStyle=CR;ctx.lineWidth=3;ctx.lineJoin='round';ctx.stroke();
    ctx.fillStyle='rgba(0,0,0,.2)';ctx.fillRect(-400,420,2200,600);
    for(let k2=0;k2<44;k2++){const x=k2*47-300,y=410+R(k2)*70;ctx.strokeStyle='rgba(241,228,198,.16)';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(x,y);ctx.quadraticCurveTo(x+16,y-8,x+34,y);ctx.stroke()}
    for(let k2=0;k2<30;k2++){const x=k2*71-250,y=450+R(k2*3)*60,h=10+R(k2)*10;poly([[x-9,y],[x,y-h],[x+9,y]],'#55642f','rgba(13,15,18,.5)',1.4)}
    // cordillera
    ALP.forEach((a,i)=>{const q=eb(((t-E.a_alp)-i*.08)/.55);peak(a[0],372,a[1],a[2],t<E.a_alp?0:q,'#5a6a3a')});
    ALP.slice(1,5).forEach((a,i)=>{const q=eb(((t-E.a_alp)-.15-i*.09)/.55);peak(a[0]-60,372,150,a[2]*.62,t<E.a_alp?0:q,'#46532e')});
    // ruta
    ctx.save();ctx.setLineDash([10,9]);ctx.lineDashOffset=-t*20;const lx=LX(t);line(100,384,Math.max(100,lx),384,RD,5);ctx.setLineDash([]);ctx.restore();
    // elefantes (el primero es el líder)
    for(let i=7;i>=0;i--){const tf=lerp(E.a_solo+.05,E.a_uno-.18,(7-i)/6),fa=i===0?1:1-win(t,tf,tf+.25);if(fa<=0)continue;const x=ELX(t,i);const sink=i===0?0:eo(win(t,tf,tf+.25))*14;
      withA(fa,()=>{elephant(x,GY+sink+(i%2)*2,.95,{ph:x*.1+i*1.7,rim:CR});
        if(t>=tf&&i>0)sparks(x,GY,t,tf,6,'#ffffff',60,.4,120,i)})}
    // líder que queda
    if(t>E.a_uno){const g=eo((t-E.a_uno)/.35);glow(LX(t)+8,GY-50,110*g,rgba(OC,.6));shock(LX(t),GY-40,t,E.a_uno,OC,150,5,.6)}
    // Roma
    pin(1085,384,t,E.a_roma,RD,1.5);
  });
  [['HISPANIA',130,452,E.tr1+.2,'rgba(13,15,18,.7)',CR],['LOS ALPES',640,452,E.a_alp+.3,'rgba(13,15,18,.7)',CR],['ITALIA',1120,452,E.a_alp+.4,'rgba(13,15,18,.7)',CR],['ROMA',1085,306,E.a_roma+.15,RD,CR]].forEach(([s_,wx,wy,t0,bgc,fg])=>{const p=toScreen(c,wx,wy);if(p[0]<50||p[0]>310||p[1]<60||p[1]>515)return;
    withA(s_==='ROMA'?1-win(t,E.a_poc+.5,E.a_poc+.9):1,()=>tag(s_,p[0],p[1],s_==='ROMA'?14:13,bgc,fg,t,t0,{stroke:s_==='ROMA'?INK:'rgba(241,228,198,.5)'}))});
  // ventisca
  if(t>E.a_poc){const a=win(t,E.a_poc,E.a_poc+.8);withA(a*.5,()=>{ctx.fillStyle='rgba(220,230,240,.28)';ctx.fillRect(0,0,360,640)});
    ctx.save();ctx.fillStyle='#fff';for(let i=0;i<110;i++){const sp=140+R(i)*160,x=(360+R(i*3)*420-((t-E.a_poc)*sp+i*17))%420,y=((R(i*7)*700+(t-E.a_poc)*(60+R(i*5)*90))%660)-10;ctx.globalAlpha=a*(.4+.6*R(i+4));ctx.beginPath();ctx.arc(x<0?x+420:x,y,1+R(i*9)*1.8,0,TAU);ctx.fill()}ctx.restore();
    withA(a*.6,()=>streaks(t,24,'rgba(255,255,255,.7)',0,900,70,.5,3))}
  // contador
  const cnt=t<E.a_solo?nE:lerp(37,1,eio(win(t,E.a_solo,E.a_uno)));
  if(t>=E.a_30-.05){withA(1,()=>{const sc=t>E.a_uno?1+.2*Math.exp(-(t-E.a_uno)*8):1;ctx.save();ctx.fillStyle='rgba(13,15,18,.62)';rr(100,96,160,100,16);ctx.fill();ctx.strokeStyle=rgba(CR,.5);ctx.lineWidth=2;ctx.stroke();ctx.restore();
    ctx.save();ctx.beginPath();rr(100,96,160,100,16);ctx.clip();const q=eo((t-E.a_30)/.3);txt(fmtN(Math.round(cnt)),180,140+(1-q)*60,78,t>E.a_uno?OC:CR,{st:INK,sw:7,sc});ctx.restore()});
    tag('ELEFANTES',180,212,13,RD,CR,t,E.a_30+.2,{stroke:INK})}
  STAMP('218 a. C.',180,78,20,t,E.a_doc,{out:12.9});
  withA(1-win(t,12.9,13.15),()=>TX('ANÍBAL',180,132,54,CR,t,E.a_ani-.05,{sh:'rgba(227,163,58,.5)'}));
}
// ---------- S2 CHER AMI: la paloma vuela sobre las trincheras (cámara en seguimiento), herida, y llega ----------
const PDOOR=t_=>t_<E.c_pal?0:eb((t_-E.c_pal)/.3)*1.52;
function PX(t_){if(t_<E.c_pal+.28)return 50;if(t_<E.c_vol)return lerp(50,135,eo(win(t_,E.c_pal+.28,E.c_pal+.95)));
  const q=win(t_,E.c_vol,E.c_arr-.12);return 135+(1565-135)*lerp(q,ez(q),.45)}
function PY(t_){if(t_<E.c_pal+.28)return 396;if(t_<E.c_vol)return 400-26*Math.sin(Math.PI*win(t_,E.c_pal+.28,E.c_pal+.95))-(t_>E.c_pal+.95?Math.abs(Math.sin((t_-E.c_pal-.95)*4))*2*(t_>E.c_cher?1:0):0);
  const fl=win(t_,E.c_vol,E.c_arr-.12);let y=lerp(400,255,eo(win(t_,E.c_vol,E.c_vol+1.0)))+Math.sin(t_*3)*9*Math.min(1,fl*6);
  if(t_>E.c_disp)y+=34*Math.exp(-(t_-E.c_disp)*2.8);y=lerp(y,350,ez(win(t_,29.35,E.c_arr-.12)));return y}
const FINALC={x:1590,y:335,z:2.0};
function s2(t,u){
  const px=PX(t),py=PY(t),fly=t>E.c_vol&&t<E.c_arr-.1,landed=t>=E.c_arr-.12;
  const f=follow(p=>[PX(p),PY(p)],t,.28);
  let c;const k=eo(win(t,E.c_vol,E.c_vol+.6)),tight=ez(win(t,28.25,28.65))*(1-ez(win(t,29.55,29.9))),lan=ez(win(t,29.65,30.2));
  const pre={x:lerp(100,150,win(t,E.tr2,E.c_vol)),y:358,z:lerp(1.75,1.55,win(t,E.tr2,E.c_vol))};
  const fz=1.33+.5*Math.exp(-Math.max(0,t-E.c_disp)*2.6)*(t>E.c_disp?1:0);const fc={x:f[0]+105/fz,y:f[1]+70/fz,z:fz};
  c={x:lerp(pre.x,fc.x,k),y:lerp(pre.y,fc.y,k),z:lerp(pre.z,fc.z,k)};
  c={x:lerp(c.x,px+25,tight),y:lerp(c.y,py+10,tight),z:lerp(c.z,2.35,tight)};
  c={x:lerp(c.x,FINALC.x,lan),y:lerp(c.y,FINALC.y,lan),z:lerp(c.z,FINALC.z,lan),r:0};
  nightSky(t,'#3a2f33');
  // colinas lejanas y destellos de artillería
  ctx.save();[['#1c2430',.2,420,40],['#232c37',.35,450,30]].forEach(([col,par,base,amp],j)=>{ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(0,640);for(let x=0;x<=360;x+=10){const xx=x+c.x*par;ctx.lineTo(x,base-amp*(Math.sin(xx*.013+j)+.5*Math.sin(xx*.031+1)))}ctx.lineTo(360,640);ctx.fill()});ctx.restore();
  for(let i=0;i<5;i++){const per=1.7+i*.37,ph=(t+i*.9)%per,a=Math.max(0,1-ph*5);if(a>0){glow((i*97+c.x*.2)%360,400+(i%2)*14,60,'rgba(227,163,58,'+(a*.5)+')')}}
  world(c,()=>{
    // suelo + trinchera en zigzag
    ctx.fillStyle='#1a2119';ctx.fillRect(-300,420,2200,700);
    ctx.beginPath();ctx.moveTo(-300,420);for(let x=-300;x<=1900;x+=70)ctx.lineTo(x,420);ctx.lineTo(1900,430);for(let x=1900;x>=-300;x-=70){ctx.lineTo(x,470+((x/70)%2?16:-2)+0);}ctx.closePath();ctx.fillStyle='#0b0e0b';
    ctx.beginPath();ctx.moveTo(-300,440);for(let x=-300;x<=1900;x+=70){ctx.lineTo(x,(Math.round((x+300)/70)%2)?476:446)}ctx.lineTo(1900,700);ctx.lineTo(-300,700);ctx.closePath();ctx.fillStyle='#0c100d';ctx.fill();ctx.strokeStyle=rgba(CR,.55);ctx.lineWidth=2.4;ctx.lineJoin='round';ctx.beginPath();ctx.moveTo(-300,440);for(let x=-300;x<=1900;x+=70)ctx.lineTo(x,(Math.round((x+300)/70)%2)?476:446);ctx.stroke();
    for(let x=-280;x<1900;x+=26){ctx.fillStyle='#7a6a45';rr(x,414+((x/26)%2?0:2),24,10,4);ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=1.4;ctx.stroke()}
    // alambrada
    for(let x=200;x<1500;x+=90){line(x,420,x,384,'#3a3328',3);line(x-1,384,x+1,384,CR,2)}
    ctx.strokeStyle='rgba(241,228,198,.6)';ctx.lineWidth=1.2;ctx.beginPath();for(let x=200;x<1470;x+=9){const y=394+((x/9)%2?-6:5);x===200?ctx.moveTo(x,y):ctx.lineTo(x,y)}ctx.stroke();
    // destellos al ras
    for(let i=0;i<9;i++){const per=1.3+(i%4)*.3,ph=(t+i*.37)%per,a=Math.max(0,1-ph*4);if(a>0)glow(300+i*170,405,70,'rgba(227,163,58,'+(a*.45)+')')}
    cage(20,420,PDOOR(t));dovecote(1610,368,1,landed?1:0);
    // paloma
    const post=t>E.c_disp,tilt=post?wob(t-E.c_disp,10,3.2)*.5:(fly?Math.sin(t*3)*.06:0);
    const standing=!fly&&(t<E.c_vol||landed);
    const ph_=landed?wob(t-(E.c_arr-.12),20,7)*.22:0;
    if(t>E.c_pec-.05&&t<E.c_pec+.1){}
    pigeon(px,py+(landed?ph_*6:0),1,{fl:t*(standing?4:22),flap:standing?0:1,stand:standing,tilt:tilt+(landed?ph_*.2:0),hurt:t>E.c_pata-.1&&!landed,legA:landed?.5:undefined,chest:t>=E.c_pec?eb((t-E.c_pec)/.3):0,cap:t>=E.c_vol-.3,t});
    if(t>=E.c_vol-.3&&t<E.c_vol+.2){}
    // anillo en la pata
    if(t>=E.c_pata&&t<E.c_pata+1.8){const q=eb((t-E.c_pata)/.3),a=1-ei((t-E.c_pata-1.3)/.5);withA(a,()=>{const lx=px+(landed?9:7),ly=py+(landed?19:16);ctx.save();ctx.strokeStyle=RD;ctx.lineWidth=2.4;ctx.beginPath();ctx.arc(lx,ly,14*q,0,TAU);ctx.stroke();ctx.restore();shock(lx,ly,t,E.c_pata,RD,36,3,.5)})}
    // disparo: destello y plumas
    if(t>=E.c_disp){const bx=px+10,by=py;shock(bx,by,t,E.c_disp,'#fff',110,6,.5);burst(bx,by,t,E.c_disp,[CR,'#d6c398','#fff'],26,190,.9,3.5);
      if(t<E.c_disp+.25)glow(bx,by,130*(1-(t-E.c_disp)/.25),'rgba(255,240,190,.9)')}
    if(t>=E.c_arr){burst(px-5,py+20,t,E.c_arr,[CR,OC],14,110,.6,2.6);sparks(px,py+22,t,E.c_arr,12,'#ffd27a',90,.5,200)}
  });
  // textos y HUD
  STAMP('1918',180,78,20,t,E.c_18,{out:E.c_vol-.3});
  withA(1-win(t,E.c_disp-.45,E.c_disp-.2),()=>TX('CHER AMI',180,102,52,CR,t,E.c_cher-.05,{sh:'rgba(227,163,58,.5)'}));
  const hud=1-win(t,E.c_disp-.3,E.c_disp-.05);
  if(hud>0){withA(hud,()=>{
    if(t>=E.c_40-.05){ctx.save();ctx.fillStyle='rgba(13,15,18,.62)';rr(14,150,150,80,14);ctx.fill();ctx.strokeStyle=rgba(CR,.5);ctx.lineWidth=2;ctx.stroke();ctx.beginPath();rr(14,150,150,80,14);ctx.clip();
      const q=eo((t-E.c_40)/.3);txt(Math.round(countV(0,40,t,E.c_40,.7))+'',66,188+(1-q)*60,60,CR,{st:INK,sw:6});txt('KM',128,202+(1-q)*60,26,OC,{st:INK,sw:5});ctx.restore()}
    if(t>=E.c_25-.05){const q=eb((t-E.c_25)/.35),sp=1+.0;ctx.save();ctx.fillStyle='rgba(13,15,18,.62)';rr(196,150,150,80,14);ctx.fill();ctx.strokeStyle=rgba(CR,.5);ctx.lineWidth=2;ctx.stroke();ctx.restore();
      clockIcon(238,190,.8*q,win(t,E.c_25,E.c_disp-.5));ctx.save();ctx.beginPath();rr(196,150,150,80,14);ctx.clip();const q2=eo((t-E.c_25-.1)/.3);txt('25',298,180+(1-q2)*60,38,CR,{st:INK,sw:5});txt('MIN',298,206+(1-q2)*60,17,OC,{st:INK,sw:4});ctx.restore()}
  })}
  if(t>=E.c_disp)slam('¡BANG!',180,215,64,OC,t,E.c_disp,{st:INK,sw:9,al:1-win(t,E.c_disp+.35,E.c_disp+.65)});
  STAMP('DISPARO EN EL PECHO',180,100,14,t,E.c_pec,{out:E.c_pata-.1});
  STAMP('PATA CASI ARRANCADA',180,100,14,t,E.c_pata,{out:E.c_arr+.2});
}
// ---------- S3 EL MENSAJE: el papel se desenrolla, se vuelve flecha, 194 soldados, medalla ----------
const SOLD=Array.from({length:24},(_,i)=>{const row=Math.floor(i/8),col=i%8;return {x:74+col*30+(row%2)*14,y:456+row*22,ts:E.m_cien+R(i*3.7)*1.35,d:0}});
SOLD.forEach(s=>{s.d=Math.hypot(s.x-180,s.y-470)});
function scribble(x0,y0,w,seed,col){ctx.strokeStyle=col;ctx.lineWidth=2;ctx.lineCap='round';ctx.beginPath();for(let x=0;x<=w;x+=3){const y=y0+Math.sin(x*.5+seed)*2.2+Math.sin(x*1.3+seed*2)*1.2;x===0?ctx.moveTo(x0+x,y):ctx.lineTo(x0+x,y)}ctx.stroke()}
function s3(t,u){nightSky(t,'#33313a');halftone(.04);
  // colinas del valle
  const vy=lerp(300,0,0);
  const vq=eo(win(t,E.m_res+.1,E.m_res+.7));
  withA(vq,()=>{ctx.save();ctx.translate(0,(1-vq)*160);
    ctx.fillStyle='#1d2a22';ctx.beginPath();ctx.moveTo(-10,640);ctx.lineTo(-10,310);ctx.lineTo(60,330);ctx.lineTo(120,400);ctx.lineTo(150,436);ctx.lineTo(210,436);ctx.lineTo(240,400);ctx.lineTo(300,330);ctx.lineTo(370,310);ctx.lineTo(370,640);ctx.fill();
    ctx.strokeStyle=CR;ctx.lineWidth=3;ctx.lineJoin='round';ctx.beginPath();ctx.moveTo(-10,310);ctx.lineTo(60,330);ctx.lineTo(120,400);ctx.lineTo(150,436);ctx.lineTo(210,436);ctx.lineTo(240,400);ctx.lineTo(300,330);ctx.lineTo(370,310);ctx.stroke();
    ctx.fillStyle='#2a3b2c';ctx.beginPath();ctx.moveTo(-10,640);ctx.lineTo(-10,420);ctx.lineTo(100,436);ctx.lineTo(260,436);ctx.lineTo(370,420);ctx.lineTo(370,640);ctx.fill();ctx.restore()});
  // papel que se desenrolla (31.8) y se vuelve flecha (34.5)
  const unr=eo(win(t,E.m_men,E.m_men+.7)),mor=eio(win(t,E.m_res,E.m_res+.55)),pop_=t<E.tr3+.35?eb((t-E.tr3+.2)/.5):1;
  if(t<E.m_cien+1.2||true){
    const H=210*unr,cy=235,W=234;
    if(mor<1&&t<E.m_fra-.2){
      withA(1-win(mor,.55,.8),()=>{ctx.save();ctx.translate(180,cy);const sc=lerp(1,.55,mor);ctx.scale(sc,sc);ctx.translate(-180,-cy);
        // rollo inicial
        if(unr<1){ctx.fillStyle=BRZ;ctx.strokeStyle=INK;ctx.lineWidth=3;rr(70,cy-12*(pop_),220*pop_,24*pop_,12);ctx.fill();ctx.stroke()}
        if(unr>0){ctx.save();ctx.beginPath();ctx.rect(60,cy-H/2,W+20,H);ctx.clip();rr(65,cy-105,W,210,6);ctx.fillStyle=PAPER;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=3;ctx.stroke();
          for(let i=0;i<8;i++)scribble(82,cy-82+i*22,(i%3===2?110:170)-R(i)*20,i*1.7,'rgba(13,15,18,.78)');
          ctx.fillStyle=rgba(RD,.8);ctx.beginPath();ctx.arc(256,cy+78,13,0,TAU);ctx.fill();ctx.strokeStyle=CR;ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(250,cy+78);ctx.lineTo(262,cy+78);ctx.moveTo(256,cy+72);ctx.lineTo(256,cy+84);ctx.stroke();ctx.restore();
          [cy-H/2,cy+H/2].forEach(y=>{ctx.fillStyle=BRZ;ctx.strokeStyle=INK;ctx.lineWidth=3;rr(60,y-9,W+20,18,9);ctx.fill();ctx.stroke()})}
        ctx.restore()});
      if(mor>0){const A=SH.rrect(65,cy-105,W,210,8,80),B=SH.poly([[160,194],[200,194],[200,244],[234,244],[180,298],[126,244],[160,244]],80);
        const p=morph(A,B,mor);poly(p,mixc(PAPER,RD,mor),INK,3)}
    } else if(t>=E.m_fra-.2){} else {
      const bob=Math.sin(t*5)*4*(t>E.m_res+.7?1:0),atrapado=win(t,E.m_res+.7,E.m_res+1);
      tr(0,bob,1,0,()=>{poly(SH.poly([[160,194],[200,194],[200,244],[234,244],[180,298],[126,244],[160,244]],80),RD,INK,3);glow(180,245,60,rgba(RD,.3))})}
  }
  if(t>=E.m_res&&t<E.m_fra-.2&&mor>=1){}
  // contador
  const cA=t<E.m_hit-.05?1:1-win(t,E.m_hit-.05,E.m_hit+.1);
  if(t>=E.m_cien-.05&&cA>0){withA(cA,()=>{ctx.save();ctx.fillStyle='rgba(13,15,18,.62)';rr(104,86,152,78,14);ctx.fill();ctx.strokeStyle=rgba(CR,.5);ctx.lineWidth=2;ctx.stroke();ctx.beginPath();rr(104,86,152,78,14);ctx.clip();
    const q=eo((t-E.m_cien)/.3);txt(Math.round(countV(0,194,t,E.m_cien,1.25))+'',180,125+(1-q)*60,60,CR,{st:INK,sw:6});ctx.restore();tag('SOLDADOS',180,176,12,RD,CR,t,E.m_cien+.3,{stroke:INK})})}
  // soldados en el valle
  const hit=E.m_hit;
  SOLD.forEach((s,i)=>{const q=t-s.ts;if(q<0)return;const sp=eb(q/.25);const dj=t-(hit+s.d/330);let jy=0;if(dj>0&&dj<.4)jy=-22*Math.sin(dj/.4*Math.PI);
    soldier(s.x,s.y+jy,.62*sp,{arms:jy<0?'up':'down',mask:false})});
  // humo que los rodea
  if(t>=E.m_atr-.05){const q=win(t,E.m_atr,E.m_atr+.45),op=ez(win(t,E.m_atr+.85,E.m_atr+1.35));for(let i=0;i<16;i++){const a=i/16*TAU+t*.4,rx=118*(1+op*.9),ry=52*(1+op*.5);const x=180+Math.cos(a)*rx,y=474+Math.sin(a)*ry-12;glow(x,y,(34+8*Math.sin(t*2+i))*q,'rgba(150,150,160,'+(.6*(1-op))+')')}}
  // medalla
  if(t>=E.m_fra){const fall=ei(win(t,E.m_fra,E.m_hit)),rise=eb(win(t,E.m_cruz,E.m_cruz+.5));let y=lerp(-90,445,fall),sc=lerp(.5,.8,fall);const sw=Math.sin((t-E.m_fra)*7)*.35*(1-fall);
    if(t>=E.m_hit){y=lerp(445,300,rise);sc=lerp(.8,1.8,rise)}
    if(t>=E.m_cruz){sunburst(180,300,t,16,420,OC,.3*eo((t-E.m_cruz)/.4),.12)}
    const bounce=t>=E.m_hit&&t<E.m_cruz?Math.abs(wob(t-E.m_hit,20,8))*-14:0;
    medal(180,y+bounce,sc,t>=E.m_hit?0:sw);
    if(t>=E.m_hit){shock(180,452,t,E.m_hit,CR,160,6,.55);sparks(180,452,t,E.m_hit,22,'#e8b66d',200,.6,300);smoke(180,458,t,E.m_hit,28,'150,140,120',1.2)}}
  // textos
  STAMP('SEGÚN LA HISTORIA',180,78,15,t,E.m_his,{out:E.m_res+.2});
  TX('CRUZ DE',180,108,40,CR,t,E.m_cruz-.05,{sh:'rgba(227,163,58,.6)'});TX('GUERRA',180,150,48,OC,t,E.m_cruz+.05);
}
// ---------- S4 STUBBY: trinchera de noche, el perro huele el gas, despierta a los soldados, atrapa al espía, sargento ----------
const SLP=[85,170,255,330],DLANE=502,SLANE=474,DS=1.45;
const DX=t_=>{if(t_<E.p_per-.2)return -70;if(t_<E.p_atr)return lerp(-70,100,eo(win(t_,E.p_per-.2,E.p_per+.75)));
  if(t_<E.p_esp)return lerp(100,110,ei(win(t_,E.p_atr+.2,E.p_esp)));if(t_<E.p_esp+.6)return 110;return lerp(110,180,ez(win(t_,E.p_esp+.6,E.p_esp+1.35)))};
const DYJ=t_=>{const q=win(t_,E.p_esp-.28,E.p_esp+.05);return t_>E.p_esp+.05?0:-30*Math.sin(q*Math.PI)};
const SPX=t_=>{const t0=E.p_esp-.76;if(t_<E.p_esp)return -40+338*(t_-t0);if(t_<E.p_esp+.6)return -40+338*.76;return -40+338*.76+380*Math.pow(t_-E.p_esp-.6,1.4)*1.6};
function noseAt(dx,hd,s){const a=29,b=-5;return [dx+s*(22+a*Math.cos(hd)+b*Math.sin(hd)),DLANE+s*(-38-a*Math.sin(hd)+b*Math.cos(hd))]}
function s4(t,u){const c={x:180,y:lerp(350,356,eo(win(t,E.tr4,E.tr4+1.2))),z:lerp(1.08,1,eo(win(t,E.tr4,E.tr4+1.2)))};
  const dxv=DX(t),moving=Math.abs(DX(t+.03)-DX(t-.03))>.25;
  nightSky(t,'#2c3744');
  ctx.save();ctx.globalAlpha=.07;ctx.fillStyle=CR;{const a=-.5+.6*Math.sin(t*.5);ctx.beginPath();ctx.moveTo(40,420);ctx.lineTo(40+Math.sin(a)*600-70,420-Math.cos(a)*600);ctx.lineTo(40+Math.sin(a)*600+70,420-Math.cos(a)*600);ctx.closePath();ctx.fill()}ctx.restore();
  glow(292,172,70,'rgba(241,228,198,.25)');circ(292,172,17,CR,null);circ(286,168,4,'rgba(13,15,18,.12)');circ(299,177,3,'rgba(13,15,18,.12)');
  world(c,()=>{
    // colinas y alambrada lejanas
    ctx.fillStyle='#1c2430';ctx.beginPath();ctx.moveTo(-20,640);for(let x=-20;x<=380;x+=10)ctx.lineTo(x,318-18*(Math.sin(x*.02)+.5*Math.sin(x*.05+1)));ctx.lineTo(380,640);ctx.fill();
    for(let x=10;x<360;x+=60){line(x,330,x,308,'#2a2f33',2)}ctx.strokeStyle='rgba(241,228,198,.4)';ctx.lineWidth=1;ctx.beginPath();for(let x=10;x<350;x+=8)ctx.lineTo(x,314+((x/8)%2?-4:3));ctx.stroke();
    for(let i=0;i<3;i++){const per=2.1+i*.5,ph=(t+i*.8)%per,a=Math.max(0,1-ph*5);if(a>0)glow(60+i*120,330,50,'rgba(227,163,58,'+(a*.45)+')')}
    // muro de la trinchera y suelo
    ctx.fillStyle='#161c17';ctx.fillRect(-20,340,400,110);for(let y=352;y<440;y+=16)line(-20,y,380,y,'rgba(0,0,0,.35)',2);for(let x=0;x<360;x+=30)line(x,340,x,450,'rgba(0,0,0,.2)',2);
    for(let x=-10;x<370;x+=28){ctx.fillStyle='#7a6a45';rr(x,330+((x/28)%2?0:2),26,14,5);ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=1.4;ctx.stroke()}
    vgrad(448,700,'#2b3126','#12150f',-20,400);for(let x=-10;x<380;x+=24)line(x,452,x-10,640,'rgba(0,0,0,.28)',2);line(-20,448,380,448,CR,2.4);
    // soldados dormidos / despiertos
    SLP.forEach((x,i)=>{const tw=E.p_sold+i*.2,wk=eo(win(t,tw,tw+.4)),jump=wob(t-tw,16,6)*5*(t>tw?1:0);
      const mk=t>tw+.55;soldier(x,452-Math.max(0,jump),1.05,{rot:-1.47*(1-wk),lieY:-9*(1-wk),mask:mk,arms:'down'});
      if(t<tw)zzz(x-62,420,t,i);
      if(t>=tw&&t<tw+.5){shock(x,410,t,tw,CR,36,3,.4);tag('!',Math.min(x,322),356,15,RD,CR,t,tw,{out:tw+.4,stroke:INK})}
      if(t>=tw+.55)withA(1,()=>{shock(x+6,384,t,tw+.55,GAS,30,2.5,.4)})});
    // gas
    const ga=ez(win(t,E.p_gas,E.p_gas+.6))*(1-ez(win(t,48.7,49.6)));
    if(ga>0){[[430,80,0,1],[385,64,90,.8],[478,70,-70,.9],[410,56,170,.7]].forEach(([y,r,ox,sp],j)=>{const gx=470+ox-(t-E.p_gas)*42*sp;gasCloud(gx,y,t+j,r,ga)})}
    // olfato
    if(t>=E.p_olia&&t<E.p_gas+1.6){const hd=.5*eo(win(t,E.p_olia,E.p_olia+.25))*(1-ez(win(t,E.p_atr-.3,E.p_atr)));const n=noseAt(dxv,hd,DS);
      withA(ez(win(t,E.p_olia,E.p_olia+.2))*(1-win(t,E.p_gas+1.2,E.p_gas+1.6)),()=>{ctx.save();ctx.setLineDash([7,6]);ctx.lineDashOffset=t*34;ctx.strokeStyle=GAS;ctx.lineWidth=3;ctx.lineCap='round';
        for(let k=0;k<3;k++){ctx.beginPath();for(let x=0;x<=60;x+=4){const y=Math.sin(x*.18+t*9+k)*5;x?ctx.lineTo(n[0]+10+x,n[1]-8+k*9+y-x*.1):ctx.moveTo(n[0]+10,n[1]-8+k*9+y)}ctx.stroke()}ctx.restore()})}
    // espía
    if(t>E.p_esp-.78&&SPX(t)<430){const sx=SPX(t),bit=t>=E.p_esp&&t<E.p_esp+.6,lean=bit?-.22+wob(t-E.p_esp,14,4)*.12:0.0;
      spy(sx,SLANE,1.3,{ph:bit?0:t*17,lean,tail:bit?.7+.3*Math.sin(t*30):.3})}
    // perro
    const bark=t>=E.p_desp&&t<E.p_lad+.9&&Math.sin((t-E.p_desp)*16)>-.2;
    let hd=0;if(t>=E.p_olia&&t<E.p_atr-.3)hd=.5*eo(win(t,E.p_olia,E.p_olia+.25))*(1-ez(win(t,E.p_desp-.2,E.p_desp)));if(t>=E.p_atr&&t<E.p_esp+.6)hd=-.1;
    const dy=DYJ(t),biting=t>=E.p_esp&&t<E.p_esp+.6;
    dog(dxv,DLANE+dy,DS,{coat:true,ph:moving?t*20:0,head:hd,jaw:(bark?.8:0)+(biting?.25:0),tail:1,t,sit:0});
    if(biting){tr(dxv+DS*51,DLANE-DS*40,1.2,0,()=>{poly([[0,0],[16,-6],[22,6],[8,10]],'#39434f',CR,1)})}
    if(t>=E.p_esp&&t<E.p_esp+.3){burst(dxv+DS*51,DLANE-DS*40,t,E.p_esp,[CR,'#39434f'],10,70,.4,2.2)}
    // ondas de ladrido
    if(t>=E.p_desp){const m=[dxv+DS*51,DLANE-DS*40];[0,.24,.48].forEach(d=>waves(m[0],m[1],t,E.p_desp+d,OC,2,.1,170,0,.45,4));
      if(t>=E.p_lad)[0,.22].forEach(d=>waves(m[0],m[1],t,E.p_lad+d,CR,3,.1,200,0,.5,5))}
    // ¡gas!
    tag('¡GAS!',dxv+30,DLANE-102,15,RD,CR,t,E.p_nadie,{out:E.p_desp-.1,stroke:INK});
  });
  slam('¡GUAU!',215,395,40,OC,t,E.p_lad,{st:INK,sw:7,al:1-win(t,E.p_lad+.5,E.p_lad+.8)});
  tag('¡ESPÍA!',250,402,15,RD,CR,t,E.p_esp,{out:E.p_esp+.9,stroke:INK});
  // galones del sargento
  if(t>=E.p_sar){const q=t-E.p_sar,sc=1+2.2*Math.exp(-q*15);withA(cl(q*14),()=>{chevrons(180,262,1.4*sc,0)});if(q>.02)shock(180,262,t,E.p_sar+.05,CR,150,5,.5);sparks(180,300,t,E.p_sar+.05,22,'#f1e4c6',200,.6,250);
    STAMP('SARGENTO',180,372,18,t,E.p_sar+.12)}
  STAMP('1918',180,78,20,t,E.p_mis,{out:E.p_olia+.4});
  withA(1-win(t,E.p_atr+.3,E.p_atr+.6),()=>TX('STUBBY',180,132,56,OC,t,E.p_stu-.05,{sh:'rgba(214,64,47,.6)'}));
}
// ---------- S5 WOJTEK: el oso regresa; soldados polacos; mapa de Irán; se encoge a cachorro ----------
function irMap(cx,cy,t,ts){const q=eb((t-ts)/.45);if(t<ts)return;tr(cx,cy,q,.05*(1-q),()=>{ctx.shadowColor='rgba(0,0,0,.5)';ctx.shadowBlur=14;rr(-78,-78,156,156,10);ctx.fillStyle=PAPER;ctx.fill();ctx.shadowBlur=0;
  ctx.save();rr(-72,-72,144,144,6);ctx.clip();ctx.fillStyle=STEEL;ctx.fillRect(-80,-80,160,160);
  poly([[-80,-80],[-10,-80],[-18,-44],[-5,-12],[14,12],[24,40],[2,80],[-80,80]],'#cdbb8f',null);
  poly([[-10,-80],[80,-80],[80,38],[58,30],[42,48],[24,40],[14,12],[-5,-12],[-18,-44]],OL,CR,2);
  for(let k=0;k<10;k++)circ(-60+k*14,70-(k%3)*8,1.4,'rgba(255,255,255,.15)');ctx.restore();
  ctx.strokeStyle=INK;ctx.lineWidth=3;rr(-72,-72,144,144,6);ctx.stroke()});
  if(t>ts+.3){pin(cx+30*q,cy-8*q,t,ts+.3,RD,1.1)}}
function s5(t,u){bg(SL0,'#3a2c2a');sunburst(180,330,t,20,520,OC,.1,.04);halftone(.05);glow(180,440,200,'rgba(227,163,58,.18)');
  const sp=t<E.w_oso?0:Math.min(1.12,eb((t-E.w_oso)/.5)),shr=win(t,E.w_cach,E.w_cach+.12),mv=eio(win(t,E.w_iran,E.w_iran+.6));
  const bx=lerp(180,115,mv),bs=lerp(1.25,.82,mv);
  // soldados polacos
  const so1=t<E.w_sol?0:eb((t-E.w_sol)/.4),so2=t<E.w_sol+.12?0:eb((t-E.w_sol-.12)/.4);
  const s1x=lerp(lerp(52,100,ez(win(t,E.w_ado,E.w_ado+.7))),lerp(70,48,0),0);
  const s1xx=lerp(s1x,34,mv);
  if(so1>0)soldier(s1xx,470,1.05*so1*lerp(1,.86,mv),{arms:t>E.w_ado+.7&&t<E.w_cach?'up':'down',ph:t>E.w_ado&&t<E.w_ado+.7?t*14:0,rifle:t<E.w_ado});
  if(so2>0)soldier(lerp(310,430,mv),470,1.05*so2,{flip:true,rifle:true});
  // oso adulto
  if(sp>0&&shr<1){const k=1-eo(shr);const tl=wob(t-E.w_oso,14,5)*.04;bear(bx,470,bs*sp*(1-.62*(1-k)*(shr>0?1:0)),{flip:false});
    }
  // cachorro
  if(t>=E.w_cach+.1){const q=t-E.w_cach-.1,sq=Math.abs(wob(q,10,2.2));const hop=Math.abs(Math.sin(q*7))*14*Math.exp(-q*.6);
    smoke(bx+10,430,t,E.w_cach+.1,22,'241,228,198',.9);
    glow(bx+10,440,120,'rgba(255,190,100,'+(.35*eo(q/.4))+')');
    cub(bx+6,470-hop,1.55*eb(q/.35),{sq:sq*.5,w:Math.sin(q*9)*.5});
    // soldado agachado le ofrece comida
    soldier(bx+78,470,.9,{arms:'carry',crate:false,rot:-.12});
    for(let i=0;i<5;i++){const a=((q*.8+i/5)%1);withA(Math.sin(a*Math.PI),()=>{ctx.save();ctx.translate(bx+10+(R(i)-.5)*70,425-a*60);ctx.scale(1+.3*R(i+3),1+.3*R(i+3));ctx.fillStyle=RD;ctx.beginPath();ctx.moveTo(0,3);ctx.bezierCurveTo(-8,-4,-4,-10,0,-5);ctx.bezierCurveTo(4,-10,8,-4,0,3);ctx.fill();ctx.restore()})}}
  irMap(266,300,t,E.w_iran);
  TX('WOJTEK',180,122,62,CR,t,E.w_voi-.05,{sh:'rgba(214,64,47,.55)'});
  STAMP('2.º CUERPO POLACO',180,176,14,t,E.w_pol);
  STAMP('IRÁN',266,396,16,t,E.w_iran+.3);STAMP('1942',266,426,16,t,E.w_iran+.45,{});
}
// ---------- S6 MONTECASSINO: monte con monasterio, el oso carga munición, cañón, emblema ----------
const MTN=[[-20,640],[-20,480],[60,410],[120,350],[160,300],[190,268],[225,300],[275,360],[335,420],[380,470],[380,640]];
function mtnY(x){for(let i=0;i<MTN.length-1;i++){const a=MTN[i],b=MTN[i+1];if(x>=a[0]&&x<=b[0])return lerp(a[1],b[1],(x-a[0])/(b[0]-a[0]))}return 480}
const BX6=t_=>{if(t_<E.mc_carg+.35)return 118;if(t_<E.mc_mun)return lerp(118,258,eio(win(t_,E.mc_carg+.35,E.mc_mun)));if(t_<E.mc_fire+.1)return 258;
  if(t_<E.mc_mas)return lerp(258,118,eio(win(t_,E.mc_fire+.1,E.mc_mas)));if(t_<E.mc_mas+.3)return 118;if(t_<E.mc_comp)return lerp(118,258,eio(win(t_,E.mc_mas+.3,E.mc_comp)));return 258};
function s6(t,u){
  const bx=BX6(t),dirv=BX6(t+.03)-BX6(t-.03),flip=dirv<-.05||t<E.mc_carg+.3||(t>=E.mc_mas&&t<E.mc_mas+.3);
  const f=follow(p=>[BX6(p),400],t,.3),zo=eio(win(t,65.4,66.0));
  const c={x:lerp(Math.max(150,Math.min(300,f[0]+50)),180,zo),y:lerp(385,330,zo),z:lerp(1.32,1.0,zo)};
  const fgy=(1-eo(win(t,E.mc_carg-.3,E.mc_carg+.1)))*640;
  const ox=-(c.x-180)*.06*(fgy<10?1:0);
  bg(SL0,'#3a2c2e');stars(t,40,9,.5);glow(180,520,260,'rgba(214,64,47,.3)');
  ctx.save();ctx.translate(ox,0);
  // montaña + monasterio
  ctx.beginPath();MTN.forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));ctx.closePath();ctx.fillStyle='#10161c';ctx.fill();ctx.strokeStyle=CR;ctx.lineWidth=2.4;ctx.lineJoin='round';ctx.beginPath();MTN.slice(1,-1).forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));ctx.stroke();
  [[60,410,120,350,90,480],[120,350,160,300,150,420],[225,300,275,360,250,440],[275,360,335,420,310,500]].forEach(a=>poly([[a[0],a[1]],[a[2],a[3]],[a[4],a[5]]],'#1a2330',null));
  const mon=()=>{ctx.beginPath();ctx.rect(150,226,86,44);ctx.rect(196,192,22,40);ctx.moveTo(190,226);ctx.lineTo(207,206);ctx.lineTo(224,226);ctx.rect(158,214,14,14);ctx.rect(214,214,14,14)};
  ctx.save();mon();ctx.lineWidth=3;ctx.strokeStyle=CR;ctx.stroke();ctx.fillStyle='#0a0d11';ctx.fill();ctx.restore();
  ctx.fillStyle=rgba(OC,.5+.3*Math.sin(t*7));[[160,236],[176,236],[192,238],[210,238],[226,236]].forEach(([x,y])=>{ctx.beginPath();ctx.moveTo(x,y+14);ctx.lineTo(x,y+4);ctx.arc(x+5,y+4,5,Math.PI,0);ctx.lineTo(x+10,y+14);ctx.fill()});
  line(207,192,207,178,CR,2.4);line(201,184,213,184,CR,2.4);
  // explosiones en la ladera
  const nb=Math.floor((t-E.tr6)/.4);for(let k=Math.max(0,nb-3);k<=nb;k++){const ts=E.tr6+.1+k*.4;if(ts>E.mc_fire+.2&&ts<E.mc_fire+1.2)continue;const x=70+R(k*3.3)*230,y=mtnY(x)+14+R(k*5)*40;boomShape(x,y,34+R(k)*30,(t-ts)/.5,k);smoke(x,y-8,t,ts+.1,26,'70,70,80',2.2)}
  if(t>=E.mc_fire+.4){const ts=E.mc_fire+.4;boomShape(200,380,85,(t-ts)/.7,3);shock(200,380,t,ts,OC,160,5,.7);smoke(190,340,t,ts+.1,50,'80,70,70',3)}
  ctx.restore();
  withA(.5*win(t,E.mc_carg-.2,E.mc_carg+.3),()=>{ctx.fillStyle='#0d0f12';ctx.fillRect(0,0,360,640)});
  // primer plano
  if(fgy<639){world(c,()=>{ctx.save();ctx.translate(fgy*1.2,0);
    ctx.fillStyle='#1d241b';ctx.fillRect(-300,470,1000,500);line(-300,470,700,470,CR,2.6);for(let x=-290;x<700;x+=30)line(x,470,x-12,640,'rgba(0,0,0,.25)',2);
    for(let x=230;x<470;x+=28){ctx.fillStyle='#7a6a45';rr(x,452+((x/28)%2?0:2),26,14,5);ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=1.4;ctx.stroke()}
    tr(40,470,1,0,()=>{ctx.scale(-1,1);truck(0,0,1)});crate(78,432,1);crate(98,432,1);crate(88,412,1);
    cannon(352,470,1.15,{rec:t<E.mc_fire?0:Math.abs(wob(t-E.mc_fire,14,5))*1.0,rot:0});
    // la caja que baja del camión / se lleva / se suelta
    const lift=eo(win(t,E.mc_carg,E.mc_carg+.35));
    const carrying1=t>=E.mc_carg&&t<E.mc_mun,drop1=t>=E.mc_mun,carrying2=t>=E.mc_mas&&t<E.mc_comp;
    // oso
    const bob=t>=E.mc_carg+.35&&t<E.mc_mun?1:0;
    bear(bx,470,1.0,{flip,ph:(Math.abs(dirv)>.05)?t*9:0,shell:0});
    if(t>=E.mc_carg&&t<E.mc_mun){const cx_=lerp(88,bx+(flip?-8:10),lift),cy_=lerp(430,296,lift);crate(cx_,cy_,1.3,wob(t-E.mc_carg,12,4)*.05)}
    if(drop1){const q=win(t,E.mc_mun,E.mc_mun+.16),cy_=lerp(296,455,ei(q));const cxx=lerp(bx+10,292,q);const op=t>E.mc_mun+.12;
      if(t<E.mc_mun+.5)crate(cxx,cy_+Math.abs(wob(t-E.mc_mun-.16,16,7))*-8*(t>E.mc_mun+.16?1:0),1.3,0);else crate(292,455,1.3,0)}
    if(t>=E.mc_mun){shock(292,468,t,E.mc_mun+.1,CR,90,4,.5);sparks(292,468,t,E.mc_mun+.1,12,'#c9a15a',130,.5,260)}
    // proyectil: de la caja al cañón
    if(t>=E.mc_mun+.2&&t<E.mc_fire){const q=eio(win(t,E.mc_mun+.25,E.mc_fire-.1));shell(lerp(292,356,q),lerp(444,423,q)-Math.sin(q*Math.PI)*26,.9,0)}
    if(t>=E.mc_fire&&t<E.mc_fire+.5){const q=(t-E.mc_fire)/.5;shell(421+q*q*900,417-q*60,.9,0);withA(1-q,()=>{streaks(t,0,CR,0,0,0,0)});line(421+q*q*900-70,417-q*60+4,421+q*q*900,417-q*60,'rgba(255,230,160,.6)',4)}
    // cargador y ayudantes
    const rec=t>=E.mc_fire?wob(t-E.mc_fire,16,5)*6:0;
    soldier(318+rec,470,1,{arms:t>=E.mc_mun&&t<E.mc_fire?'carry':'down',crate:false,rot:t>=E.mc_fire?-.1*Math.exp(-(t-E.mc_fire)*4):0});
    if(t>=E.mc_mas){[[46,1],[92,2]].forEach(([off,i])=>{const sx=Math.min(bx-off,258-off+0),car=t<E.mc_comp,jt=t-E.mc_comp,jy=jt>0.05&&jt<1.4?-Math.abs(Math.sin(jt*9))*16*Math.exp(-jt*.8):0;
      soldier(sx,470+jy,.95,{arms:car?'carry':'up',ph:(Math.abs(dirv)>.05&&car)?t*9+i:0,crate:car})})}
    if(t>=E.mc_comp){[[60,0],[40,1],[200,2]].forEach(([x,i])=>{const q=eb((t-E.mc_comp-.1-i*.1)/.3),jt=t-E.mc_comp-.2-i*.1,jy=jt>0?-Math.abs(Math.sin(jt*9))*16*Math.exp(-jt*.8):0;if(t>E.mc_comp+.1+i*.1)soldier(x+(i===2?-30:0)+i*10,470+jy,.95*q,{arms:'up',flip:i===1})})}
    // fogonazo del cañón
    if(t>=E.mc_fire&&t<E.mc_fire+.5){boomShape(430,415,52,(t-E.mc_fire)/.3,2);glow(425,415,110*(1-(t-E.mc_fire)/.5),'rgba(255,230,160,.8)')}
    smoke(425,410,t,E.mc_fire+.05,26,'150,150,150',2);
    ctx.restore()})}
  // emblema
  withA(.82*win(t,E.mc_emb-.05,E.mc_emb+.3),()=>{ctx.fillStyle='#0d0f12';ctx.fillRect(0,0,360,640)});
  if(t>=E.mc_emb){const q=t-E.mc_emb,sc=1+1.3*Math.exp(-q*20);glow(180,300,160,rgba(OC,.4*Math.exp(-q*3)+.1));emblem(180,300,85*sc);shock(180,300,t,E.mc_emb,CR,190,6,.6);sparks(180,300,t,E.mc_emb,26,'#e3a33a',230,.7,260)}
  withA(1-win(t,E.mc_carg-.2,E.mc_carg+.1),()=>TX('MONTECASSINO',180,100,35,CR,t,E.mc_mon-.05,{sh:'rgba(214,64,47,.6)'}));
  STAMP('1944',180,150,20,t,E.mc_44,{out:E.mc_carg+.5});
}
// ---------- S7 CTA: ¿quién fue el más valiente? ----------
const CTAK=[['elefante',99,213,'q_ele'],['paloma',261,213,'q_pal'],['perro',99,373,'q_per'],['oso',261,373,'q_oso']];
function s7(t,u){bg(SL0,SL1);sunburst(180,300,t,22,560,RD,.14,.05);halftone(.05);dust(t,30,OC,6,10,1.6,.5);
  CTAK.forEach(([kind,x,y,ev],i)=>{const te=E.tr7+.15+i*.1,en=t<te?0:eb((t-te)/.4);if(en<=0)return;const tn=E[ev],lit0=t<tn?0:(t<tn+1.0?1:.5),pop=t<tn?0:1+.14*Math.exp(-(t-tn)*7)*Math.cos((t-tn)*16)+(t<tn+.3?.04:0);
    const wig=t<tn?0:wob(t-tn,16,6)*.05;
    posterCard(kind,x,y-(t>tn&&t<tn+.5?Math.abs(Math.sin((t-tn)*7))*10*Math.exp(-(t-tn)*3):0),156,150,lit0,t,{rot:wig,sc:en*pop});
    if(t>=tn)shock(x,y,t,tn,OC,90,4,.5)});
  TX('¿EL MÁS VALIENTE?',180,84,36,CR,t,E.tr7+.05,{w:300,sh:'rgba(214,64,47,.6)'});
  if(t>=E.q_com){const q=eb((t-E.q_com)/.45),tap=1+.05*Math.sin((t-E.q_com)*6);tr(180,474,q*tap,0,()=>{ctx.shadowColor='rgba(0,0,0,.5)';ctx.shadowBlur=14;rr(-98,-22,196,44,22);ctx.fillStyle=RD;ctx.fill();ctx.shadowBlur=0;ctx.strokeStyle=INK;ctx.lineWidth=3;ctx.stroke();
    txt('COMENTA',10,1,22,CR,{st:INK,sw:3});ctx.fillStyle=CR;rr(-80,-10,26,19,5);ctx.fill();poly([[-74,8],[-70,15],[-65,8]],CR)});
    shock(180,474,t,E.q_com,OC,120,4,.5)}
tag('SÍGUEME',180,513,16,OC,INK,t,E.q_sig,{stroke:INK});
}
boot([s0,s1,s2,s3,s4,s5,s6,s7],TRS,{cap:{acc:OC}});
