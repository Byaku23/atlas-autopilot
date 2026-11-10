// ===== 02 · ¿Por qué nos gustan tanto los gatos? — escenas =====
const CPAL=[['#ff4fa3','#5a1a9a'],['#3ef2e6','#2a3a9a'],['#ffe14f','#d4478a'],['#8a4dff','#ff4fa3'],['#7dff6a','#1a6a8a']];
const CEYE=[GRN,YEL,'#ff4fa3',CY,'#ffb347'];
function feedCard(cx,cy,w,h,i,t,hero){const pr=hero?['#a21b6a','#3b1456']:CPAL[((i%5)+5)%5];ctx.save();rr(cx-w/2,cy-h/2,w,h,16);ctx.clip();
  const g=ctx.createLinearGradient(0,cy-h/2,0,cy+h/2);g.addColorStop(0,pr[0]);g.addColorStop(1,pr[1]);ctx.fillStyle=g;ctx.fillRect(cx-w/2,cy-h/2,w,h);
  for(let k=0;k<9;k++){circ(cx-w/2+R(k+i*7)*w,cy-h/2+R(k*3+i)*h*.8,1+R(k)*2,'rgba(255,255,255,.35)')}
  if(!hero){glow(cx,cy-12,60,'rgba(255,255,255,.25)');catHead(cx,cy-12,.95,{rim:'#fff',eye:CEYE[((i%5)+5)%5],blink:(Math.sin(t*2+i)>.97?1:0)})}
  if(!(hero&&t<E.int)){ctx.fillStyle='rgba(10,3,24,.6)';ctx.fillRect(cx-w/2,cy+h/2-38,w,38);
  circ(cx-w/2+22,cy+h/2-19,10,CPAL[((i+2)%5+5)%5][0],'#fff',1.4);ctx.fillStyle='rgba(255,255,255,.7)';rr(cx-w/2+38,cy+h/2-26,48,6,3);ctx.fill();ctx.fillStyle='rgba(255,255,255,.35)';rr(cx-w/2+38,cy+h/2-16,32,5,2.5);ctx.fill();
  const base=hero?1284000:(8000+Math.abs(i)*53000%97000),rate=hero?5200:(300+R(i+3)*900);
  heart(cx+w/2-62,cy+h/2-19,7,PINK,{glow:false,lw:.8});txt(fmtN(Math.floor(base+rate*Math.max(0,t))),cx+w/2-52,cy+h/2-18,11,'#fff',{a:'left',wt:'800'})}
  ctx.restore()}
function fscr(t){if(t<2.72)return 0;if(t<3.15)return -640*eio((t-2.72)/.43);return -640*(1-eo((t-3.15)/.4))+wob(t-3.55,18,6)*8}
function notifPill(x,y,t,ts,n){if(t<ts)return;const u=t-ts;if(u>1.3)return;const s=eb(u/.3)*(1-win(t,ts+1.0,ts+1.3));tr(x,y-u*26,s,0,()=>{ctx.fillStyle='rgba(18,8,36,.92)';rr(-30,-12,60,24,12);ctx.fill();ctx.strokeStyle=PINK;ctx.lineWidth=1.4;ctx.stroke();heart(-16,-1,6,PINK,{glow:false,lw:.6});txt(n,-6,0,11,'#fff',{a:'left',wt:'800'})})}
function s0(t,u){
  const c=camAt(t,[[0,180,296,3.2],[E.int,180,296,3.5,0,'lin'],[E.int+.6,180,300,1.0,0,'eio'],[3.3,180,300,1.0,0,'lin'],[3.64,180,300,1.25,0,'eo']]);
  bg('#0a0418','#1c0a30');
  world(c,()=>{
    for(let i=0;i<16;i++){const x=R(i)*600-120,y=(R(i*3)*900-t*(14+R(i)*20))%900;heart(x,((y%900)+900)%900-150,5+R(i*5)*6,i%2?PINK:CY,{glow:false,lw:.6})}
    glow(180,300,240,rgba(PINK,.3));
    ctx.beginPath();rr(68,90,224,420,32);fillRim('#07020f',PINK,3,18);
    ctx.save();rr(78,104,204,392,18);ctx.clip();ctx.fillStyle='#16082a';ctx.fillRect(78,104,204,392);
    const sc=fscr(t);for(let i=-2;i<=6;i++){const cy=300+i*222+sc;if(cy<-100||cy>700)continue;feedCard(180,cy,184,214,i,t,i===0)}
    ctx.restore();rr(158,108,44,8,4);ctx.fillStyle='#07020f';ctx.fill();
    // gato héroe (encima de su tarjeta)
    const bl=(()=>{let b=0;const q=(t-1.5)/.45;if(q>0&&q<1)b=Math.sin(q*Math.PI);const q2=(t-E.pert)/.35;if(q2>0&&q2<1)b=Math.max(b,Math.sin(q2*Math.PI));return b})();
    const sq=win(t,1.9,2.4)*(1-win(t,E.int+.2,E.int+.5));
    const hy=300+sc*0+(t>E.pert?wob(t-E.pert,22,7)*5:0);
    if(Math.abs(sc)<420)catHead(180,hy+sc,1.15*(1+.025*wob(t-E.nec,16,6)),{rim:PINK,eye:GRN,blink:bl,squint:sq*.5,halo:true,rot:wob(t-E.nec,14,5)*.1,look:Math.sin(t*1.3)*.5});
    // corona
    const cu=t-E.pert;if(cu>-.42){let cy_,cr;if(cu<0){const q=(cu+.42)/.42;cy_=lerp(90,254,ei(q));cr=-.6*(1-q)}else{cy_=254-Math.abs(wob(cu,15,5))*34;cr=wob(cu,20,6)*.4}crown(180,cy_,1.5,cr)}
    if(cu>0){burst(180,254,t,E.pert,[YEL,'#fff',PINK,CY],26,150,.8,3);shock(180,254,t,E.pert,YEL,110,4,.6)}
    [2.82,2.92,3.02,3.12].forEach((ts,k)=>{notifPill([32,330,28,334][k],[250,300,380,430][k],t,ts,['2,1K','8,9K','12K','45K'][k])})});
  shock(180,320,t,E.nec,PINK,220,5,.7);
  TX('UN GATO',180,40,26,'#fff',t,-.6,{out:E.int-.08});TX('NO TE NECESITA',180,76,31,'#fff',t,-.5,{out:E.int-.08,hl:[2],hc:YEL,sh:'rgba(255,79,163,.8)'});
  TX('EL INTERNET ENTERO',180,26,21,'#fff',t,E.int+.1,{});TX('LE PERTENECE',180,56,28,YEL,t,E.pert-.2,{sh:'rgba(255,225,79,.7)'})}
// ---------- S1: hace 10.000 años ----------
const GX=170;
function catJ(t){const q=(t-E.gatos)/.9;if(q<0)return {x:-120,y:470,q};
  if(q<1){return {x:lerp(-40,330,q),y:470-96*Math.sin(Math.PI*q),q,air:true,rot:lerp(-.5,.5,q)}}
  return {x:330+(q-1)*330,y:470,q,air:false}}
const MX1=[188,202,222,240];
function mouseS(k,t){const tp=E.rat+.09*k,q=(t-tp)/.42;if(q<0)return null;
  if(q<1)return {x:lerp(150+k*4,MX1[k],q),y:470-34*Math.sin(Math.PI*q),ph:0,s:.9+.5*q};
  const tg=E.gatos,sp=[80,92,70,100][k];const x=MX1[k]+(t>E.det?sp*(Math.min(t,tg)-E.det)+(t>tg?240*(t-tg):0):0);
  return {x,y:470+(k%2)*4,ph:t>E.det?t*40+k:0,s:1.4}}
function s1(t,u){
  const cj=catJ(t);const f=follow(tt=>{const q=catJ(tt);return [q.x,q.y]},t,.25);
  let c;if(t<E.gatos-.05)c=camAt(t,[[T[1]-.6,190,350,1.0],[E.guar,170,350,1.1],[E.rat-.3,190,350,1.2],[E.gatos-.05,200,350,1.1]]);
  else{const k=eo((t-E.gatos+.05)/.3);c={x:lerp(200,Math.max(200,f[0]+50),k),y:350,z:1.1,r:0}}
  bg('#1b0a30','#1b0a30');
  world(c,()=>{vgrad(-300,470,'#2b0f4f','#ff7aa8',-700,1800);
    const sy=370+Math.sin((t-4.4)*.3)*0+ (t-4.4)*3;glow(300,sy,170,'rgba(255,200,120,.5)');ctx.save();const g=ctx.createLinearGradient(0,sy-60,0,sy+60);g.addColorStop(0,'#fff0a0');g.addColorStop(1,'#ff6aa0');ctx.fillStyle=g;ctx.beginPath();ctx.arc(300,sy,58,0,TAU);ctx.fill();ctx.restore();
    for(let i=0;i<4;i++){const bx=(t*20*(1+i*.2)+i*140)%700-100;tr(bx,190+i*28+Math.sin(t*3+i)*4,1,0,()=>{ctx.strokeStyle='rgba(20,5,40,.7)';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(-8,0);ctx.quadraticCurveTo(-4,-5*Math.sin(t*9+i),0,0);ctx.quadraticCurveTo(4,-5*Math.sin(t*9+i),8,0);ctx.stroke()})}
    ctx.fillStyle='#2a0f46';ctx.beginPath();ctx.moveTo(-700,470);for(let x=-700;x<=1100;x+=20)ctx.lineTo(x,430-22*Math.sin(x*.012)-10*Math.sin(x*.03));ctx.lineTo(1100,470);ctx.fill();
    vgrad(470,900,'#3a1550','#1b0a30',-700,1800);
    wheatRow(468,t,'#ff9a3c',14,-120,700,9,1);
    barn(270,470,1.25);
    // farmers
    const FA=[[78,6.6,'#3ef2e6'],[44,6.75,'#ff4fa3']];
    FA.forEach((fa,k)=>{if(t<fa[1])return;const q=cl((t-fa[1])/(E.guar-fa[1]+.1)),fx=lerp(-60,fa[0],eo(q)),walking=q<1,bob=walking?Math.abs(Math.sin(t*10))*3:0;
      const pour=win(t,E.grano-.15,E.grano+.25),tilt=lerp(.5,1.5,pour)+(t>E.grano+.3&&t<E.rat?Math.sin(t*12)*.05:0);
      const pop=k===0?eb((t-E.agri)/.4):1;
      person(fx,470-bob,1.2,{shirt:fa[2],arm:-.5,bend:-.5,hair:'#3b1d5a'});
      if(t<E.rat+.1||true){const empty=win(t,E.grano+.5,E.rat);withA(1-empty*.0,()=>sack(fx-4+pour*30,470-bob-100+pour*14,1.05,tilt,1))}});
    // grano que cae
    for(let i=0;i<26;i++){const tk=E.grano+i*.05,q=(t-tk)/.42;if(q<0||q>1)continue;const k=i%2,sx=(k?44:78)+30,sy=470-96;const px=lerp(sx,150+(R(i)-.5)*16,q),py=lerp(sy,466-lerp(0,28,eo(win(t,E.grano+.2,E.grano+1.5))),q*q);circ(px,py,2,i%3?'#ffd34a':'#fff4a8')}
    const ph=lerp(0,30,eo(win(t,E.grano+.2,E.grano+1.6)))*(1),ps=1+.2*wob(t-(E.rat-.1),26,8);
    if(ph>.5){tr(150,470,1,0,()=>{ctx.scale(1,ps);ctx.beginPath();ctx.moveTo(-38,0);ctx.quadraticCurveTo(-14,-ph*.9,0,-ph);ctx.quadraticCurveTo(14,-ph*.9,38,0);ctx.closePath();fillRim('#e0a830','#ffe14f',2,10)})}
    if(t>E.rat-.35&&t<E.rat-.1){const q=(t-E.rat+.35)/.25;circ(150,lerp(330,452,ei(q)),9,'#ffd34a','#fff',1.4)}
    if(t>E.rat-.1)shock(150,458,t,E.rat-.1,YEL,50,3,.4);
    // ratones
    for(let k=0;k<4;k++){const m=mouseS(k,t);if(m)mouse(m.x,m.y,m.s,{ph:m.ph})}
    if(t>E.det)for(let k=0;k<4;k++){const m=mouseS(k,t);if(m&&t<E.gatos+.3)smoke(m.x-14,m.y-4,t,E.det+k*.05,10,'255,255,255',.7)}
    // gato montés
    if(cj.q>=0&&cj.q<1.7){const air=!!cj.air;catSide(cj.x,cj.y,1.2,{ph:air?0:t*22,fa:air?-1.15:null,ba:air?1.0:null,rot:air?cj.rot:0,rim:CY,eye:YEL,stripes:true,tail:.9,t,open:air?1:0});
      if(air)streaks(t,6,'rgba(62,242,230,.5)',0,700,60,.5)}
    wheatRow(520,t,'#ffb347',30,-120,700,10,2);wheatRow(560,t,'#ff9a3c',44,-120,700,12,4);
    dust(t,24,'#ffd27a',5,10,1.5,.4)});
  const cs=toScreen(c,cj.x,cj.y-90*1.2);
  tag('GATO MONTÉS',cs[0],Math.max(130,cs[1]),11,CY,'#06141a',t,E.mont-.05,{out:T[2]-.46});
  TX('HACE UNOS',180,60,22,'#fff',t,E.tr1+.02,{out:6.05});
  TX('≈ '+fmtN(Math.round(countV(0,10000,t,E.diez,.7)))+' AÑOS',180,98,36,YEL,t,E.diez-.04,{out:6.05,sh:'rgba(255,225,79,.7)'});
  TX('LOS PRIMEROS',180,62,22,'#fff',t,6.14,{out:8.05});TX('AGRICULTORES',180,98,32,CY,t,E.agri-.04,{out:8.05});
  TX('GUARDARON GRANO',180,84,28,'#fff',t,E.grano-.05,{out:9.5,hl:[1],hc:YEL});
  TX('Y APARECIERON',180,62,22,'#fff',t,8.84,{out:10.4});TX('LOS RATONES',180,100,36,PINK,t,E.rat-.05,{out:10.4,sh:'rgba(255,79,163,.7)'});
  TX('Y DETRÁS DE ELLOS…',180,84,24,'#fff',t,E.det-.05,{out:E.gatos-.45});
  TX('LOS GATOS',180,66,26,'#fff',t,E.gatos-.05,{out:T[2]-.5});TX('MONTESES',180,102,38,CY,t,E.mont-.06,{out:T[2]-.5,sh:'rgba(62,242,230,.7)'})}
// ---------- S2: se domesticaron solos ----------
const PXc=[180,520,860,1200],PY0=160,PH_=330,GY2=440;
function catS2(t){ // estado del gato en la aldea
  const L=(a,b,t0,t1,f=eio)=>lerp(a,b,f((t-t0)/(t1-t0)));
  if(t<14.0)return {x:430,pose:'walk',ph:0,fl:true};
  if(t<14.8)return {x:L(430,180,14.0,14.8,x=>x),pose:'walk',ph:t*13,fl:true,fl2:true};
  if(t<16.1)return {x:180,pose:'sit',fl:false};
  if(t<16.95)return {x:L(180,500,16.1,16.95,x=>x),pose:'walk',ph:t*17,run:1};
  if(t<E.caz){const q=(t-16.95)/(E.caz-16.95);return {x:lerp(500,562,q),y:GY2-40*Math.sin(Math.PI*q),pose:'walk',air:true,rot:lerp(-.3,.35,q)}}
  if(t<17.85)return {x:562,pose:'walk',ph:0,head:.55};
  if(t<18.7)return {x:L(562,830,17.85,18.7),pose:'walk',ph:t*14};
  if(t<19.85)return {x:830,pose:'sit',fed:true};
  if(t<20.4)return {x:L(830,1160,19.85,20.4),pose:'walk',ph:t*14};
  if(t<20.6)return {x:1160,pose:'sit'};
  return {x:L(1160,1262,20.6,20.95,x=>x),pose:'walk',ph:t*10,al:1-win(t,20.78,20.95)}}
function mouseS2(t){if(t<16.0)return null;
  if(t<17.0)return {x:lerp(360,560,(t-16.0)/1),y:GY2,ph:t*40,s:1.5};
  if(t<17.85)return {x:t<E.caz?560:562+34*1.5-30,y:GY2,ph:0,s:1.5,sq:t>=E.caz?.5:1,hold:t>=E.caz};
  if(t<19.6){const q=(t-17.85)/1.75;return {x:lerp(595,1130,eio(q)),y:GY2,ph:t*45,s:1.5}}
  if(t<19.8)return {x:1130,y:GY2,ph:0,s:1.5*(1-win(t,19.6,19.8))};return null}
function camX2(t){const c=catS2(t).x;const f=follow(tt=>[catS2(tt).x,0],t,.3)[0];const k=eo((t-16.0)/.35);let x=lerp(180,f+30,k);if(t<16.0)x=180;return lerp(x,1200,eo((t-20.05)/.55))}
function panelBG(i,t){const x=PXc[i],cols=[['#2a0f46','#14082a',PINK],['#0f2c4a','#14082a',CY],['#4a1a3a','#1c0a24',YEL],['#3a1a5a','#14082a',PINK]][i];
  const g=ctx.createLinearGradient(0,PY0,0,PY0+PH_);g.addColorStop(0,cols[0]);g.addColorStop(1,cols[1]);rr(x-150,PY0,300,PH_,26);ctx.fillStyle=g;ctx.fill();
  ctx.save();rr(x-150,PY0,300,PH_,26);ctx.clip();
  ctx.fillStyle='rgba(0,0,0,.35)';ctx.fillRect(x-150,GY2,300,100);line(x-150,GY2,x+150,GY2,rgba(cols[2],.5),2);
  if(i===0){for(let k=0;k<10;k++)circ(x-140+R(k)*280,PY0+10+R(k*3)*130,1.2+R(k)*1.4,'rgba(255,255,255,.6)');circ(x+90,PY0+60,26,'#fff3c8');circ(x+101,PY0+54,24,cols[0])}
  if(i===1){for(let k=0;k<6;k++){tr(x-130+k*52,GY2,1,0,()=>{ctx.strokeStyle='rgba(62,242,230,.5)';ctx.lineWidth=2;for(let b=-1;b<=1;b++){ctx.beginPath();ctx.moveTo(b*4,0);ctx.quadraticCurveTo(b*5+Math.sin(t*2+k)*3,-14,b*8,-26);ctx.stroke()}})}
    for(let k=0;k<3;k++)poly([[x-150+k*110,GY2],[x-110+k*110,GY2-70],[x-60+k*110,GY2]],'#0a1c34')}
  if(i===2){ctx.fillStyle='rgba(255,225,79,.12)';rr(x-130,PY0+40,80,70,8);ctx.fill();ctx.strokeStyle=rgba(YEL,.5);ctx.lineWidth=2;ctx.stroke();line(x-90,PY0+40,x-90,PY0+110,rgba(YEL,.5),2);line(x-130,PY0+75,x-50,PY0+75,rgba(YEL,.5),2);
    ctx.fillStyle='#5a2a4a';ctx.fillRect(x+30,GY2-20,110,20);ctx.fillRect(x+36,GY2,8,40);ctx.fillRect(x+126,GY2,8,40)}
  if(i===3){ctx.fillStyle='#2a1244';ctx.fillRect(x-150,PY0,300,GY2-PY0);for(let k=0;k<6;k++)line(x-150,PY0+20+k*48,x+150,PY0+20+k*48,'rgba(255,255,255,.06)',2);
    ctx.fillStyle='#14082a';ctx.fillRect(x+90-30,GY2-120,0,0)}
  ctx.restore();ctx.save();nglow(cols[2],2.4,14);rr(x-150,PY0,300,PH_,26);ctx.stroke();ctx.restore()}
function leash(x,y,t,cut){ // correa colgando de un gancho
  ctx.save();ctx.translate(x,y);ctx.strokeStyle='#ff4fa3';ctx.lineWidth=5;ctx.lineCap='round';
  const sw=Math.sin(t*3)*.03+(cut?wob(t-E.dom,12,3)*.25:0);ctx.rotate(sw);
  ctx.beginPath();ctx.moveTo(0,-70);ctx.lineTo(0,cut?-10:20);ctx.stroke();ctx.fillStyle='#ffe14f';circ(0,-72,5,'#ffe14f');
  if(!cut){ctx.beginPath();ctx.ellipse(0,52,22,32,0,0,TAU);ctx.stroke();rr(-7,14,14,12,3);ctx.fillStyle=YEL;ctx.fill()}ctx.restore();
  if(cut){const q=t-E.dom;tr(x+Math.sin(q*3)*12,y+q*q*260+10,1,q*3,()=>{ctx.strokeStyle='#ff4fa3';ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(0,-20);ctx.lineTo(0,20);ctx.stroke();ctx.beginPath();ctx.ellipse(0,52,22,32,0,0,TAU);ctx.stroke()})}}
function medal(x,y,s,rot,al=1){withA(al,()=>tr(x,y,s,rot,()=>{ctx.fillStyle=PINK;poly([[-8,-26],[8,-26],[4,-4],[-4,-4]],PINK);glow(0,0,26,'rgba(255,225,79,.6)');circ(0,0,13,GLD,'#fff3b0',2);poly(SH.star(0,0,3.5,9,5,10),'#fff3b0');}))}
function s2(t,u){
  const c={x:camX2(t),y:325,z:t<16?1.15:1.2,r:0};const cs=catS2(t),ms=mouseS2(t);
  bg('#0b0418','#190a2e');
  world(c,()=>{for(let i=0;i<60;i++)circ(-100+R(i)*1600,100+R(i*3)*500,1+R(i)*1.5,'rgba(255,255,255,.14)');
    for(let i=0;i<4;i++)panelBG(i,t);
    // P0: correa + sello
    if(t<15){leash(180,205,t,t>E.dom);
      if(t>E.nadie){const q=t-E.nadie;tr(180,315,1+1.2*Math.exp(-q*12),-.14,()=>{withA(cl(q*14),()=>{ctx.save();nglow(PINK,5,10);rr(-92,-34,184,68,10);ctx.stroke();ctx.restore();ctx.fillStyle='rgba(255,79,163,.18)';rr(-92,-34,184,68,10);ctx.fill();txt('NADIE',0,3,54,PINK,{st:INK,sw:6,sh:'rgba(255,79,163,.9)'})})});shock(180,315,t,E.nadie,PINK,150,5,.6)}
      if(t>E.dom){const k=eo((t-E.dom)/.22);line(110,230,110+140*k,230+130*k,'#fff',6);line(250,230,250-140*k,230+130*k,'#fff',6);shock(180,300,t,E.dom,'#fff',100,4,.4)}}
    // medalla
    if(t>E.solos-.5&&t<16.6){const q=cl((t-E.solos-.12)/.4);let mx,my,mr;if(t<E.solos+.12){mx=290;my=330+Math.sin(t*5)*6;mr=t*3}else{mx=lerp(290,200,eo(q));my=lerp(330,376,q)-Math.sin(q*Math.PI)*50;mr=lerp(t*3,0,q)}
      medal(mx,my,1.3,mr,win(t,E.solos-.5,E.solos-.2))}
    if(t>=16.5){/* se queda colgada del cuello */}
    // gato
    if(cs.x<1300&&!(t<14&&false)){const mov=cs.pose==='walk';const pawUp=(t>E.solos+.02&&t<E.solos+.3)?-1.3:null;
      const cy=cs.y===undefined?GY2:cs.y;
      withA(cs.al===undefined?1:cs.al,()=>{catSide(cs.x,cy,1.45,{pose:cs.pose,flip:cs.fl,ph:cs.ph||0,fa:cs.air?-1.2:(pawUp!==null?pawUp:null),ba:cs.air?.9:null,rot:cs.rot||0,head:cs.head||0,sq:(t>E.solos+.4&&t<16.1)||cs.fed?.8:0,tail:cs.fed?.9:.4,t,open:cs.air?1:0,eye:GRN});
      if(t>=E.solos+.5&&cs.x<1000&&t<20.6&&(t<16.1||t>16.1)){medal(cs.x+(cs.pose==='sit'?20:34)*1.45*(cs.fl?-1:1)-(cs.pose==='sit'?0:0),cy-(cs.pose==='sit'?58:50)*1.45*.65,.7+.08*wob(t-E.solos-.5,14,5),0)}})}
    if(cs.fl2===undefined&&false){}
    // ratón
    if(ms){const sq=ms.sq||1;tr(ms.x,ms.y,1,0,()=>{ctx.scale(1,sq);mouse(0,0,ms.s,{ph:ms.ph})});if(ms.hold){burst(ms.x,ms.y-20,t,E.caz,[YEL,'#fff',PINK],14,70,.5,2);for(let k=0;k<3;k++){const a=t*8+k*2.1;circ(ms.x+Math.cos(a)*16,ms.y-34+Math.sin(a)*5,2.4,YEL)}}}
    // panel 2: cuenco y croquetas
    {const bx=905;const fill=eo(win(t,E.com2,E.com2+.6));
      for(let i=0;i<22;i++){const tk=E.com2-.05+i*.03,q=(t-tk)/.36;if(q<0||q>1)continue;circ(bx+(R(i)-.5)*30,lerp(250,GY2-14,q*q),3,i%2?'#e58a4a':'#c96a30')}
      if(t>E.com2-.4)bowl(bx,GY2+6,1.5*eb((t-E.com2+.4)/.35),fill,t);
      if(t>E.fac){floatHearts(840,GY2-120,t,E.fac,9,70,1.4,PINK,9,.8);if(t<E.fac+.9)shock(bx,GY2-20,t,E.fac,YEL,70,3,.5)}
      for(let k=0;k<3;k++)if(t>E.fac+.2)heart(840+Math.sin(t*2+k*2)*30,GY2-130-((t*30+k*40)%60),7,PINK,{glow:false,lw:.8})}
    // panel 3: puerta y agricultor
    {const dx=1262,open=eo(win(t,E.dej,E.dej+.4));
      ctx.beginPath();rr(dx-34,GY2-112,68,112,6);ctx.fillStyle='#0b0418';ctx.fill();if(open>0){glow(dx,GY2-50,70*open,'rgba(255,225,79,.5)');ctx.fillStyle='rgba(255,225,79,'+(.35*open)+')';ctx.fillRect(dx-34,GY2-112,68,112)}
      ctx.save();ctx.translate(dx-34,0);ctx.scale(lerp(1,.16,open),1);ctx.beginPath();rr(0,GY2-112,68,112,6);ctx.fillStyle='#8a4dff';ctx.fill();ctx.strokeStyle=PINK;ctx.lineWidth=2.5;ctx.stroke();circ(56,GY2-52,4,YEL);ctx.restore();
      const fq=eb((t-E.nos2)/.4);if(t>E.nos2){const shr=win(t,E.dej,E.dej+.2)*(1-win(t,E.dej+.6,E.dej+.9));person(1130,GY2+2,1.25*Math.min(1,fq),{shirt:'#ffe14f',arm:lerp(.5,-1.7,win(t,E.dej-.2,E.dej+.2)),bend:lerp(.5,-.4,win(t,E.dej,E.dej+.2)),shrug:shr,smile:t>E.dej,hair:'#3b1d5a'})}
      // marca del suelo donde se hunde la cámara
      const mk=.6+.4*Math.sin(t*5);line(1180,GY2+16,1220,GY2+30,YEL,5);line(1220,GY2+16,1180,GY2+30,YEL,5);glow(1200,GY2+23,34,rgba(YEL,.35*mk));
      line(1150,GY2-4,1146,GY2+40,'#cfc8e8',3);poly([[1140,GY2+40],[1156,GY2+38],[1152,GY2+52],[1142,GY2+52]],'#cfc8e8')}
    });
  TX('NADIE LOS',180,64,24,'#fff',t,E.tr2+.1,{out:14.8});TX('DOMESTICÓ',180,100,36,PINK,t,E.dom-.06,{out:14.8,sh:'rgba(255,79,163,.7)'});
  TX('SE DOMESTICARON',180,64,24,'#fff',t,14.85,{out:16.05});TX('SOLOS',180,104,44,CY,t,E.solos-.06,{out:16.05,sh:'rgba(62,242,230,.8)'});
  TX('SE ACERCABAN',180,64,24,'#fff',t,E.acer-.1,{out:17.1});TX('A CAZAR',180,100,38,PINK,t,E.caz-.1,{out:17.9,sh:'rgba(255,79,163,.7)'});
  TX('SE QUEDABAN POR',180,64,22,'#fff',t,E.qued-.06,{out:19.4});TX('LA COMIDA FÁCIL',180,100,32,YEL,t,E.com2-.1,{out:19.45,hl:[2],hc:'#fff'});
  TX('Y NOSOTROS',180,64,24,'#fff',t,19.9,{});TX('LOS DEJAMOS',180,100,38,CY,t,E.dej-.06,{sh:'rgba(62,242,230,.7)'})}
// ---------- S3: Chipre y la tumba ----------
const BLK=SH.rrect(150,242,240,780,16,80);
function s3(t,u){
  const T3=E.tr3,c=camAt(t,[[T3,180,320,1.0],[21.7,180,320,1.0],[22.35,272,262,3.0,0,'eio'],[22.95,272,340,2.2,0,'eio'],[23.75,272,772,1.35,0,'eio'],[28.0,272,776,1.5,0,'lin']]);
  const m=eio(win(t,22.35,23.05)),seaA=1-win(t,22.4,23.0);
  bg(mixc('#1c0f66','#150826',win(t,22.3,23.0)),mixc('#0a3a82','#0b0418',win(t,22.3,23.0)));
  world(c,()=>{
    withA(seaA,()=>{for(let k=0;k<10;k++){ctx.strokeStyle='rgba(62,242,230,.14)';ctx.lineWidth=1.6;ctx.beginPath();for(let x=-40;x<=400;x+=8)ctx.lineTo(x,150+k*45+Math.sin(x*.05+t*1.4+k)*4);ctx.stroke()}});
    mapLand(seaA);
    // isla -> bloque de tierra
    const P=morph(ISL,BLK,m);const sc=mixc('#3a1a63','#4a2060',m);ctx.beginPath();P.forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));ctx.closePath();
    ctx.save();nglow(mixc('#3ef2e6','#8a4dff',m),2.6,12);ctx.stroke();ctx.restore();
    const gg=ctx.createLinearGradient(0,242,0,1000);gg.addColorStop(0,mixc('#5a2a8a','#5a2a70',m));gg.addColorStop(1,mixc('#5a2a8a','#1e0c34',m));ctx.fillStyle=gg;ctx.fill();
    if(m>.3){withA(win(m,.3,1),()=>{ctx.save();ctx.beginPath();P.forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));ctx.closePath();ctx.clip();
      const ST=[[330,'#6a3590'],[420,'#5a2a7c'],[520,'#4c2268'],[620,'#3e1a54'],[700,'#321446']];ST.forEach(([y,col],i)=>{ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(140,y);for(let x=140;x<=400;x+=10)ctx.lineTo(x,y+5*Math.sin(x*.04+i));ctx.lineTo(400,1020);ctx.lineTo(140,1020);ctx.fill()});
      for(let i=0;i<70;i++){circ(155+R(i)*230,260+R(i*3)*740,1.2+R(i*5)*3,'rgba(255,255,255,.1)')}
      [[170,300,6],[360,350,5],[200,460,7],[350,560,6],[180,640,5]].forEach(([x,y,r])=>{ctx.fillStyle='rgba(20,5,40,.4)';ctx.beginPath();ctx.ellipse(x,y,r*1.6,r,0,0,TAU);ctx.fill()});
      ctx.restore();
      [[400,'1'],[500,'2'],[600,'3'],[700,'4']].forEach(([y,n])=>{line(152,y,168,y,'rgba(255,255,255,.5)',1.5);txt('−'+n+' m',172,y,9,'rgba(255,255,255,.55)',{a:'left',wt:'800'})})})}
    // pasto neón en la superficie
    if(m>.2)withA(win(m,.2,.7)*(1-win(m,.9,1)*.0),()=>{ctx.strokeStyle=CY;ctx.lineWidth=2;ctx.shadowColor=CY;ctx.shadowBlur=8;ctx.beginPath();ctx.moveTo(150,244);ctx.lineTo(390,244);ctx.stroke();ctx.shadowBlur=0;for(let x=158;x<390;x+=12){ctx.beginPath();ctx.moveTo(x,244);ctx.lineTo(x+Math.sin(t*2+x)*2,234);ctx.stroke()}});
    withA(1-win(m,0,.3),()=>pinDrop(268,276,t,E.chip,PINK));
    // tumba
    const tb=eo(win(t,E.tumba-.1,E.tumba+.5));
    if(tb>0){ctx.save();ctx.translate(270,790);ctx.scale(tb,tb);ctx.translate(-270,-790);ctx.beginPath();rr(165,715,215,150,22);ctx.fillStyle='#10051c';ctx.fill();ctx.save();ctx.setLineDash([6,5]);nglow(YEL,2,10);ctx.stroke();ctx.restore();glow(272,790,130,'rgba(255,200,90,.18)');ctx.restore()}
    for(let i=0;i<14;i++){const q=(t*14*(.5+R(i))+R(i*3)*300)%300;if(t>E.tumba)circ(180+R(i*7)*200,715+q*.5,1.2,'rgba(255,230,180,.5)')}
    const hv=eo(win(t,E.tumba+.5,E.tumba+1.4)),cv_=eo(win(t,E.tumba+1.2,E.tumba+1.9));
    if(hv>0)humSkel(262,764,1.05,hv);if(cv_>0)catSkel(296,816,1.15,cv_);
    if(t>E.junt-.1){const k=eb((t-E.junt)/.4),pu=1+.1*Math.sin((t-E.junt)*10);glow(278,790,60*k,'rgba(255,79,163,.45)');heart(279,790,17*k*pu,PINK);for(let q=0;q<3;q++){const a=(t-E.junt)*2+q*2.1;ctx.setLineDash([3,4]);ctx.lineDashOffset=-t*20;ctx.strokeStyle=rgba(PINK,.7*k);ctx.lineWidth=1.6;ctx.beginPath();ctx.arc(278,790,44+q*4,a,a+1.4);ctx.stroke();ctx.setLineDash([])}
      floatHearts(278,780,t,E.junt+.05,8,60,1.1,PINK,6,.9)}});
  const sp=toScreen(c,215,758),sc2=toScreen(c,320,800);
  tag('UNA PERSONA',sp[0],sp[1]-52,10,CY,'#06141a',t,E.pers-.04,{out:E.junt-.1});tag('UN GATO',sc2[0],sc2[1]+50,10,PINK,'#fff',t,E.gato3-.04,{out:E.junt-.1});
  TX('EN CHIPRE',180,66,34,'#fff',t,E.tr3+.15,{out:22.15,hl:[1],hc:PINK});
  TX('ENCONTRARON',180,66,24,'#fff',t,E.enc-.05,{out:23.1});
  TX('UNA TUMBA',180,66,34,YEL,t,E.tumba-.2,{out:24.5,sh:'rgba(255,225,79,.6)'});
  TX('DE HACE ≈ '+fmtN(Math.round(countV(0,9500,t,E.quin-.6,1.0)))+' AÑOS',180,100,22,'#fff',t,24.2,{out:26.0,hl:[3,4],hc:CY});
  TX('UNA PERSONA',180,66,26,'#fff',t,26.2,{out:27.1});
  TX('ENTERRADOS',180,66,26,'#fff',t,E.ent-.05,{out:28.4});TX('JUNTOS',180,100,44,PINK,t,E.junt-.06,{sh:'rgba(255,79,163,.8)'})}
// ---------- S4: Egipto ----------
const GLK=[0,1,2,0,3,4,0,1,2,0,3,5,0,1];
function s4(t,u){
  const c=camAt(t,[[E.tr4,90,372,1.5],[31.3,280,372,1.5,0,'lin'],[32.1,180,320,1.0,0,'eio'],[E.bast-.2,175,300,1.2,0,'eio'],[E.bast+.5,170,241,1.5,0,'eio']]);
  bg('#2b0f4f','#2b0f4f');
  world(c,()=>{vgrad(-300,440,'#2b0f4f','#ff8a5a',-700,1800);
    glow(250,350,210,'rgba(255,200,100,.5)');ctx.save();const g=ctx.createLinearGradient(0,290,0,410);g.addColorStop(0,'#fff0a0');g.addColorStop(1,'#ff6aa0');ctx.fillStyle=g;ctx.beginPath();ctx.arc(250,350,62,0,TAU);ctx.fill();ctx.restore();
    const sg=win(t,E.sag-.1,E.sag+.8);if(sg>0)rays(250,350,t,18,520,'#ffe14f',.2*sg*(1-win(t,E.dios+.5,E.bast)*.6),.12,.1);
    poly([[40,440],[150,296],[262,440]],'#2a0f46','#ffe14f',2);poly([[220,440],[300,350],[400,440]],'#341456','#ffe14f',2);poly([[150,296],[150,440],[262,440]],'rgba(0,0,0,.25)');
    ctx.fillStyle='#3a1550';ctx.beginPath();ctx.moveTo(-700,440);for(let x=-700;x<=1100;x+=20)ctx.lineTo(x,436-8*Math.sin(x*.02)-5*Math.sin(x*.07));ctx.lineTo(1100,520);ctx.lineTo(-700,520);ctx.fill();
    vgrad(440,900,'#ffb347','#c4631f',-700,1800);for(let k=0;k<5;k++){ctx.strokeStyle='rgba(120,50,10,.25)';ctx.lineWidth=2;ctx.beginPath();for(let x=-100;x<=460;x+=10)ctx.lineTo(x,470+k*26+Math.sin(x*.03+k)*5);ctx.stroke()}
    // friso con jeroglíficos
    const fy=336,fh=82;const wd=ctx.createLinearGradient(0,fy,0,fy+fh);wd.addColorStop(0,'#e8a45a');wd.addColorStop(1,'#a8582a');ctx.fillStyle=wd;ctx.fillRect(-120,fy,620,fh);line(-120,fy,500,fy,'#ffe9a8',3);line(-120,fy+fh,500,fy+fh,'#5a2a12',3);
    const dwn=win(t,E.dios-.2,E.dios+.4);
    const px=lerp(-60,430,win(t,E.sag,E.sag+.95));
    for(let i=0;i<12;i++){const gx=-50+i*44,k=GLK[i];const lit=t>E.sag&&px>gx;const pop=(k===0&&t>E.tr4+1.5)?1+.18*wob(t-(E.tr4+1.5+i*.09),14,5)*(t<E.sag?1:.3):1;
      if(lit)glow(gx,fy+41,34,'rgba(255,230,120,.55)');glyph(k,gx,fy+42,1.05*pop,lit?'#fffbe0':'#5a2a12')}
    // estatua de Bastet
    const q=win(t,E.dios-.05,E.dios+.6),dy=(1-eo(q))*340;
    if(q>0){ctx.save();ctx.beginPath();ctx.rect(-100,0,560,503);ctx.clip();const eyeP=1+.6*Math.max(0,1-(t-E.bast)*2.5)*(t>E.bast?1:0);bastet(156,188+dy,1.0,t,{eye:eyeP});ctx.restore();
      rr(98,496,126,16,5);ctx.fillStyle=GLD;ctx.fill();ctx.strokeStyle='#fff3b0';ctx.lineWidth=1.6;ctx.stroke();
      if(t<E.dios+.9)burst(156,500,t,E.dios,['#ffe9a8','#ffb347','#fff'],22,120,.9,3);dust(t,16,'#ffe9a8',5,10,1.4,.5)}
    if(t>E.bast)shock(170,186,t,E.bast,GLD,170,5,.7);
    });
  TX('EN EL ANTIGUO',180,64,24,'#fff',t,E.tr4+.1,{out:29.65});TX('EGIPTO',180,100,44,YEL,t,E.egi-.06,{out:31.0,sh:'rgba(255,225,79,.8)'});
  TX('LOS GATOS ERAN',180,64,24,'#fff',t,E.gatos4,{out:32.05});
  TX('SAGRADOS',180,100,44,GLD,t,E.sag-.06,{out:32.1,sh:'rgba(255,200,60,.9)'});
  TX('UNA DIOSA',180,64,26,'#fff',t,E.dios-.1,{out:33.0});slam('BASTET',180,102,56,GLD,t,E.bast,{st:INK,sw:8,sh:'rgba(255,200,60,.9)'})}
// ---------- S5: el truco está en tu cerebro ----------
function s5(t,u){const bt=t-E.tr5,beat=Math.pow(Math.max(0,Math.sin(bt*6.6)),8),lit=win(t,E.cer,E.cer+.3);
  bg('#0a0418','#1c0a38');dust(t,40,'#8a4dff',3,6,1.6,.5);
  glow(180,310,260,rgba(PINK,.16+.2*lit));
  for(let k=0;k<4;k++){const q=((t-E.tr5)*.9+k/4)%1;ctx.strokeStyle=rgba(k%2?CY:PINK,.35*(1-q));ctx.lineWidth=2;ctx.beginPath();ctx.arc(180,310,60+q*230,0,TAU);ctx.stroke()}
  for(let i=0;i<18;i++){const a=i/18*TAU+t*.2,r=130+R(i)*60;const x=180+Math.cos(a)*r,y=310+Math.sin(a)*r*.8;circ(x,y,2+R(i*3)*2.4,rgba(i%2?CY:PINK,.6));if(lit>0)line(x,y,180+Math.cos(a)*60,310+Math.sin(a)*48,rgba(i%2?CY:PINK,.5*lit),1.4)}
  const bs=1.7*(1+.045*beat+(t>E.cer?.06*Math.max(0,1-(t-E.cer)*3):0));
  brain(180,310,bs,t,.12*(1-lit)+lit*(.85+.15*Math.sin(t*8)),{rim:lit>0?PINK:'#b06aff'});
  if(t>E.truco){const q=t-E.truco;if(q<.7){for(let k=0;k<8;k++){const a=k/8*TAU+q*2,r=40+q*150;ctx.save();ctx.globalAlpha=1-q/.7;poly(SH.star(180+Math.cos(a)*r,310+Math.sin(a)*r*.8,2,7,4,16),YEL);ctx.restore()}shock(180,310,t,E.truco,YEL,130,3,.5)}}
  if(t>E.cer){shock(180,310,t,E.cer,PINK,260,6,.7);shock(180,310,t,E.cer+.08,CY,200,4,.6);for(let k=0;k<5;k++){const a=k/5*TAU+.4;if(t-E.cer<.4)bolt(180+Math.cos(a)*70,310+Math.sin(a)*55,180+Math.cos(a)*190,310+Math.sin(a)*160,k+3,k%2?CY:PINK,30)}burst(180,310,t,E.cer,[PINK,CY,YEL,'#fff'],30,200,.9,3)}
  TX('PERO EL VERDADERO',180,70,23,'#fff',t,E.tr5+.05,{out:E.truco-.1});TX('TRUCO',180,76,50,YEL,t,E.truco-.06,{out:E.cer-.9,sh:'rgba(255,225,79,.8)'});
  TX('ESTÁ EN TU',180,424,25,'#fff',t,E.truco+.5,{});slam('CEREBRO',180,470,40,PINK,t,E.cer,{st:INK,sw:8,sh:'rgba(255,79,163,.9)'})}
// ---------- S6: rasgos de bebé ----------
const CF={x:92,y:250},BF={x:268,y:250};
function ringS(kind,t,t0,jf,arcY,col,sc){const dr=eo(win(t,t0,t0+.5));if(dr<=0)return;const mm=win(t,t0,t0+.6);
  const dy0=[0,-5,-30][kind],dy1=[0,6,-38][kind];const x=lerp(CF.x,BF.x,jf),y=lerp(CF.y+dy0,BF.y+dy1,jf)+arcY;
  const P=kind===0?wobble(SH.circle(0,0,66,72),t,7*(1-mm),3,1):kind===1?SH.ellipse(0,0,42,20,72):SH.rrect(-36,-8,72,16,8,72);
  const n=Math.max(2,Math.floor(P.length*dr));ctx.save();ctx.translate(x,y);ctx.scale(sc,sc);ctx.beginPath();for(let i=0;i<=n;i++){const p=P[i%P.length];i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1])}
  ctx.shadowColor=col;ctx.shadowBlur=14;ctx.strokeStyle=col;ctx.lineWidth=3.2;ctx.lineJoin='round';ctx.stroke();ctx.shadowBlur=0;ctx.strokeStyle='#fff';ctx.lineWidth=1;ctx.stroke();
  if(dr>=1){const bx=kind===0?46:kind===1?38:30,by=kind===0?-48:kind===1?-18:-18;const q=eb((t-t0-.5)/.3);ctx.translate(bx,by);ctx.scale(q,q);circ(0,0,9,col,'#fff',1.4);ctx.strokeStyle=INK;ctx.lineWidth=2.2;ctx.beginPath();ctx.moveTo(-4,0);ctx.lineTo(-1,3.5);ctx.lineTo(5,-3.5);ctx.stroke()}
  ctx.restore()}
function hand(x,y,s,rot){tr(x,y,s,rot,()=>{ctx.fillStyle=SKIN;rr(-19,-12,38,28,12);ctx.fill();[-13.5,-4.5,4.5,13.5].forEach((fx,i)=>{rr(fx-4.2,-34+(i===0||i===3?6:0),8.4,26,4);ctx.fill()});rr(-27,0,13,20,6);ctx.fill();ctx.fillStyle=CY;rr(-18,12,36,14,4);ctx.fill()})}
function s6(t,u){
  const c=camAt(t,[[E.tr6,130,262,1.3],[38.6,92,258,1.3,0,'eo'],[39.05,92,262,1.7,0,'eio'],[40.3,92,248,1.5,0,'eio'],[41.35,180,320,1.0,0,'eio'],[48,180,320,1.0]]);
  bg('#14082a','#2a0f3d');dust(t,40,'#ff4fa3',6,8,1.6,.5);
  const tj=[E.beb+.18,E.beb+.32,E.beb+.46],jf=k=>eio(win(t,tj[k],tj[k]+.5)),arc=k=>-80*Math.sin(Math.PI*jf(k)),land=k=>tj[k]+.5;
  const wsc=k=>1+.16*wob(t-land(k),16,6);
  world(c,()=>{
    glow(92,250,120,rgba(PINK,.22));if(t>E.beb)glow(268,250,120,rgba(CY,.22));
    const eg=1+.45*spring(t-E.gra,14,6)*(1-win(t,tj[1],tj[1]+.3)*1);
    catHead(CF.x,CF.y,1.15,{rim:PINK,eye:GRN,eyeS:t>E.gra?eg:1,squint:t>E.cui?.8:0,blink:(Math.sin(t*1.7)>.985?1:0),halo:true,look:0});
    if(t>E.beb){const bs=eb((t-E.beb)/.4),bump=.07*Math.max(wob(t-land(0),18,7),wob(t-land(2),18,7),0);const gw=1+.35*spring(t-land(1),14,6);babyFace(BF.x,BF.y,1.0*bs*(1+bump),{grow:gw,rim:'#ffe2cc'});if(t<E.beb+.5)burst(BF.x,BF.y,t,E.beb,[YEL,CY,PINK,'#fff'],20,110,.7,2.6)}
    ringS(0,t,E.red-.12,jf(0),arc(0),CY,wsc(0));ringS(1,t,E.gra-.12,jf(1),arc(1),YEL,wsc(1));ringS(2,t,E.amp-.12,jf(2),arc(2),PINK,wsc(2));
    if(t>E.cui){const q=win(t,E.cui,E.cui+.3),sw=Math.sin((t-E.cui)*9)*16;hand(lerp(260,92+sw,eo(q)),lerp(120,168,eo(q))+Math.abs(Math.sin((t-E.cui)*9))*4,1.3,Math.PI*.88+Math.sin((t-E.cui)*9)*.15);floatHearts(92,200,t,E.cui+.2,6,50,1.2,PINK,7,.7);floatHearts(92,200,t,E.cui+.5,6,50,1.2,YEL,7,.7)}
    if(t>E.full){floatHearts(CF.x,CF.y-40,t,E.full,10,100,1.3,PINK,9,1.1);floatHearts(BF.x,BF.y-40,t,E.full,10,100,1.3,YEL,9,1.1)}});
  if(t>E.lee-.1){const f=eio(win(t,E.tern,E.tern+.78)),full=t>E.full;
    tag('TERNURA',180,436,12,PINK,'#fff',t,E.lee-.05);const bw=260,bx=50,by=456;
    ctx.save();ctx.fillStyle='rgba(10,3,24,.85)';rr(bx,by,bw,30,15);ctx.fill();ctx.strokeStyle=full?'#fff':rgba(PINK,.8);ctx.lineWidth=2;ctx.stroke();ctx.restore();
    ctx.save();rr(bx,by,bw,30,15);ctx.clip();const g=ctx.createLinearGradient(bx,0,bx+bw,0);g.addColorStop(0,CY);g.addColorStop(.5,PINK);g.addColorStop(1,YEL);ctx.fillStyle=g;ctx.fillRect(bx,by,bw*f,30);if(full){ctx.fillStyle='rgba(255,255,255,'+(.3*Math.max(0,1-(t-E.full)*3))+')';ctx.fillRect(bx,by,bw,30)}ctx.restore();
    txt(Math.round(f*100)+'%',180,by+16,15,'#fff',{st:'rgba(10,3,24,.7)',sw:3});
    if(full){const k=t-E.full;shock(180,by+15,t,E.full,PINK,140,5,.6);heart(40,by+15,10*(1+.15*Math.sin(k*10)),PINK,{glow:false});heart(320,by+15,10*(1+.15*Math.sin(k*10+1)),YEL,{glow:false});floatHearts(180,by,t,E.full,14,130,1.4,PINK,10,1.4)}}
  TX('TIENEN LA CARA',180,62,22,'#fff',t,E.tr6+.05,{out:38.55});TX('REDONDA',180,98,38,CY,t,E.red-.06,{out:38.62,sh:'rgba(62,242,230,.7)'});
  TX('LOS OJOS',180,62,22,'#fff',t,38.66,{out:39.7});TX('GRANDES',180,98,38,YEL,t,E.gra-.06,{out:39.75,sh:'rgba(255,225,79,.7)'});
  TX('Y LA FRENTE',180,62,22,'#fff',t,39.95,{out:41.0});TX('AMPLIA',180,98,38,PINK,t,E.amp-.06,{out:41.1,sh:'rgba(255,79,163,.7)'});
  TX('JUSTO LOS RASGOS DE UN',180,62,20,'#fff',t,41.25,{out:43.05});TX('BEBÉ',180,100,44,YEL,t,E.beb-.06,{out:43.1,sh:'rgba(255,225,79,.8)'});
  TX('NUESTRO CEREBRO LO LEE',180,62,20,'#fff',t,43.2,{out:45.35});slam('TERNURA',180,104,48,PINK,t,E.tern,{st:INK,sw:7,sh:'rgba(255,79,163,.9)',al:1-win(t,45.4,45.6)});
  TX('NOS DAN GANAS DE',180,62,22,'#fff',t,45.5,{});TX('CUIDARLOS',180,98,38,CY,t,E.cui-.06,{sh:'rgba(62,242,230,.7)'})}
// ---------- S7: el maullido ----------
function bubble(x,y,w,h,tx,ty,col,fillc,al=1){withA(al,()=>{ctx.save();ctx.beginPath();rr(x-w/2,y-h/2,w,h,h*.45);nglow(col,2.4,10);ctx.stroke();ctx.restore();ctx.beginPath();ctx.moveTo(x-9,y+h/2-3);ctx.lineTo(x+9,y+h/2-3);ctx.lineTo(tx,ty);ctx.closePath();ctx.save();nglow(col,2.4,8);ctx.stroke();ctx.restore();ctx.fillStyle=fillc;ctx.fill();rr(x-w/2,y-h/2,w,h,h*.45);ctx.fill();ctx.fillRect(x-8,y+h/2-6,16,5)})}
function dots(x,y,t,col){for(let k=0;k<3;k++)circ(x-12+k*12,y-3*Math.max(0,Math.sin(t*6-k*.9))+0,3.2,col)}
function s7(t,u){const c=camAt(t,[[E.tr7,180,336,1.0],[E.hab,180,340,1.1,0,'eio'],[52.4,180,340,1.12]]);
  bg('#14082a','#2a0f3d');dust(t,30,'#3ef2e6',8,6,1.4,.4);
  const bExit=t>E.des,bq=win(t,E.des,E.des+.75);
  world(c,()=>{vgrad(450,900,'#1c0a30','#0b0418',-300,1000);line(-200,450,700,450,rgba(PINK,.4),2);glow(180,360,200,'rgba(138,77,255,.18)');
    const aOpen=t>E.nosot&&t<E.nosot+.4?1:0,aHead=t>E.nosot-.05?-.18:(t>E.mau&&t<E.mau+.5?.12:0);
    catSide(90,450,1.5,{pose:'sit',rim:PINK,eye:GRN,tail:.8,t,head:aHead,open:aOpen,sq:t>E.nosot+.3?.4:0});
    if(!bExit)catSide(270,450,1.5,{pose:'sit',flip:true,rim:CY,eye:YEL,tail:.6,t,head:t>E.mau&&t<E.mau+.5?-.15:0});
    else{const bx=270+eo(bq)*230;catSide(bx,450,1.5,{pose:'walk',flip:false,rim:CY,eye:YEL,ph:t*15,t,tail:.6})}
    const ma=t>E.mau;const showB=!bExit;
    if(ma&&t<E.casi){const q=eb((t-E.mau)/.3);const sq=1+.12*wob(t-E.mau,16,6);tr(108,262,q*sq,0,()=>{bubble(0,0,84,50,-4,56,PINK,'#1c0a30');txt('MIAU',0,1,22,CY,{st:INK,sw:3,sh:'rgba(62,242,230,.8)'})});waveArcs(120,350,t,E.mau,CY,3,.1,60,0,.7)}
    if(t>=E.casi&&t<E.des){const a=eb((t-E.casi)/.3);tr(108,262,a,0,()=>{bubble(0,0,84,50,-4,56,PINK,'#1c0a30');dots(0,0,t,'rgba(255,255,255,.7)')});
      if(showB)tr(252,262,a,0,()=>{bubble(0,0,84,50,4,56,CY,'#1c0a30');dots(0,0,t+1,'rgba(255,255,255,.7)')});
      if(t>E.casi+.3){const k=eb((t-E.casi-.3)/.3);[[108,250],[252,250]].forEach(p=>{tr(p[0],p[1]-44,k,0,()=>{circ(0,0,10,PINK,'#fff',1.6);line(-4,-4,4,4,'#fff',2.4);line(4,-4,-4,4,'#fff',2.4)})})}}
    if(t>E.ell&&t<E.des){const k=win(t,E.ell,E.ell+.3);withA(k,()=>{ctx.setLineDash([5,5]);ctx.lineDashOffset=-t*30;ctx.strokeStyle=YEL;ctx.lineWidth=2.4;ctx.beginPath();ctx.moveTo(130,400);ctx.lineTo(230,400);ctx.stroke();ctx.setLineDash([]);poly([[130,394],[120,400],[130,406]],YEL);poly([[230,394],[240,400],[230,406]],YEL)})}
    if(t>E.des+.25){const hq=win(t,E.des+.25,E.des+1.0),hx=lerp(470,272,eo(hq)),walking=hq<1;
      const hit=t>E.nosot+.35?wob(t-E.nosot-.35,16,6):0;
      person(hx,452-(walking?Math.abs(Math.sin(t*10))*3:0),1.3,{flip:true,shirt:YEL,arm:.7,hair:'#3b1d5a',bow:hit*.25,smile:t>E.nosot+.4});
      if(t>E.nosot+.35){floatHearts(272,330,t,E.nosot+.35,8,70,1.2,PINK,8,.8);shock(272,350,t,E.nosot+.35,PINK,60,3,.5)}}
    if(t>E.nosot){const q=eo((t-E.nosot)/.32),bx=lerp(125,200,q),by=lerp(330,262,q),sc=eb((t-E.nosot)/.3);
      waveArcs(122,345,t,E.nosot,PINK,4,.1,110,0,.5,3.4);waveArcs(122,345,t,E.nosot,CY,3,.13,90,0,.4,2.4);
      tr(bx+20,by,sc,0,()=>{ctx.save();ctx.beginPath();rr(-52,-27,104,54,24);nglow(YEL,3,12);ctx.stroke();ctx.restore();ctx.fillStyle='#1c0a30';rr(-52,-27,104,54,24);ctx.fill();poly([[-34,22],[-24,22],[-44,44]],'#1c0a30',YEL,2.4);ctx.fillRect(-36,18,14,6)})}});
  if(t>E.nosot){const q=eo((t-E.nosot)/.32),bx=lerp(125,200,q),by=lerp(330,262,q),p=toScreen(c,bx+20,by);ctx.save();ctx.beginPath();rr(p[0]-52*c.z,p[1]-27*c.z,104*c.z,54*c.z,24*c.z);ctx.clip();mtext('MIAU',p[0],p[1]+1,30*c.z,PINK,t,E.nosot+.02,{d:.25,stroke:INK,sw:4,sh:'rgba(255,79,163,.8)'});ctx.restore()}
  TX('Y EL MAULLIDO',180,62,24,'#fff',t,E.tr7+.1,{out:48.1});
  TX('CASI NO LO USAN',180,64,24,'#fff',t,E.casi-.06,{out:50.0});TX('ENTRE ELLOS',180,100,36,PINK,t,E.ell-.8,{out:50.0,sh:'rgba(255,79,163,.6)'});
  TX('LO DESARROLLARON',180,64,24,'#fff',t,E.des-.06,{out:E.nosot-.05});TX('PARA HABLAR CON',180,98,24,CY,t,E.hab-.06,{out:E.nosot-.05});TX('NOSOTROS',180,100,44,YEL,t,E.nosot-.06,{sh:'rgba(255,225,79,.8)'})}
// ---------- S8: el ronroneo ----------
const M0=[112,362],EAR=[262,326],WL=Math.hypot(EAR[0]-M0[0],EAR[1]-M0[1]),WD=[(EAR[0]-M0[0])/WL,(EAR[1]-M0[1])/WL],WN=[-WD[1],WD[0]];
function waveY(x,t,m){const env=Math.min(1,x/22)*Math.min(1,(WL-x)/16+.2);
  const purr=Math.sin(x*.2-t*16)*7*(.75+.25*Math.sin(t*3))*env;
  const ph=x*.46-t*30,sw=(ph/TAU-Math.floor(ph/TAU+.5))*2,cry=(sw*.8+Math.sin(ph*.5)*.2)*23*env*(1+.2*Math.sin(t*9));
  return lerp(purr,cry,m)}
function earIcon(x,y,s,col,k=1){tr(x,y,s*k,0,()=>{ctx.save();nglow(col,3,10);ctx.beginPath();ctx.moveTo(-8,18);ctx.bezierCurveTo(-22,6,-20,-22,0,-24);ctx.bezierCurveTo(20,-24,22,-4,8,6);ctx.bezierCurveTo(2,12,6,18,-2,22);ctx.stroke();ctx.beginPath();ctx.moveTo(-6,-2);ctx.bezierCurveTo(-8,-14,6,-16,6,-8);ctx.bezierCurveTo(6,-2,0,0,0,6);ctx.stroke();ctx.restore()})}
function s8(t,u){const c=camAt(t,[[E.tr8,180,330,1.0],[E.llan-.3,180,330,1.0],[E.ign,200,335,1.2,0,'eio'],[60.6,200,335,1.25]]);
  bg('#14082a','#2a0f3d');dust(t,30,'#ff4fa3',9,6,1.4,.4);
  const m=eio(win(t,E.llan,E.llan+.55)),rev=eo(win(t,E.ron,E.ron+.6)),Lr=WL*rev;
  const flinch=t>E.ign?wob(t-E.ign,20,7):0;
  world(c,()=>{vgrad(460,900,'#1c0a30','#0b0418',-300,1000);line(-200,460,700,460,rgba(PINK,.4),2);glow(180,330,220,'rgba(138,77,255,.2)');
    const jit=t>E.ron&&t<E.ign?Math.sin(t*70)*.7:0;
    catSide(75+jit,462,1.5,{pose:'sit',rim:PINK,eye:GRN,tail:.9,t,sq:.7,head:t>E.com8&&t<E.mez?.2:0,open:t>E.llan&&t<E.ign?.6:0});
    // bol
    if(t>E.com8-.2){const bq=eb((t-E.com8+.2)/.35);const fill=eo(win(t,E.ign+.1,E.ign+.35));bowl(168,466,1.3*bq,fill,t);if(t>E.com8&&t<E.ign&&fill<.1){tr(168,410,1,0,()=>{txt('?',0,0,24,YEL,{st:INK,sw:4,al:.9})})}}
    // humano + oído
    person(305,462,1.3,{flip:true,shirt:CY,arm:t>E.ign?-.2:.8,hair:'#3b1d5a',bow:-flinch*.15,smile:t>E.ign+.3});
    withA(win(t,E.ron,E.ron+.3),()=>earIcon(EAR[0]+6,EAR[1]+4,1.15,t>E.ign?PINK:CY,1+.25*flinch));
    // onda
    if(rev>0){const col=mixc(CY,PINK,m);for(let k=2;k>=0;k--){ctx.save();ctx.beginPath();for(let x=0;x<=Lr;x+=3){const y=waveY(x+k*5,t,m)*(1-k*.25),px=M0[0]+WD[0]*x+WN[0]*y,py=M0[1]+WD[1]*x+WN[1]*y;x?ctx.lineTo(px,py):ctx.moveTo(px,py)}
      ctx.strokeStyle=k===0?'#fff':col;ctx.globalAlpha=k===0?.9:.4;ctx.lineWidth=k===0?1.6:3.4;ctx.shadowColor=col;ctx.shadowBlur=k===0?10:6;ctx.lineJoin='round';ctx.stroke();ctx.restore()}
      if(t>E.puede&&t<E.ign+.05){const q=cl((t-E.puede)/(E.ign-E.puede)),x=WL*q,y=waveY(x,t,m);glow(M0[0]+WD[0]*x+WN[0]*y,M0[1]+WD[1]*x+WN[1]*y,22,'rgba(255,255,255,.9)')}}
    // bebé llorando
    if(t>E.beb8){const q=eb((t-E.beb8)/.4);tr(190,246,q,0,()=>{circ(0,0,34,rgba(PINK,.25));babyFace(0,0,.5,{cry:1,t,rim:'#ffe2cc'})});waveArcs(190,246,t,E.beb8,PINK,3,.12,40,-Math.PI/2,1.2,2.4)}
    if(t>E.ign){shock(EAR[0],EAR[1],t,E.ign,PINK,70,4,.5);
      const q=win(t,E.ign,E.ign+.16),bx=lerp(340,170,eo(q)),by=lerp(250,368,eo(q)),rot=lerp(0,2.2,eo(q));
      ctx.strokeStyle=CY;ctx.lineWidth=9;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(300,360);ctx.lineTo(bx+16,by+8);ctx.stroke();
      sack(bx,by+10,1.0,rot);
      for(let i=0;i<14;i++){const tk=E.ign+.12+i*.012,qq=(t-tk)/.16;if(qq<0||qq>1)continue;circ(168+(R(i)-.5)*22,lerp(by+18,440,qq*qq),3,i%2?'#e58a4a':'#c96a30')}
      floatHearts(75,360,t,E.ign+.3,6,70,1.2,PINK,8,.8)}});
  TX('HASTA EL',180,62,20,'#fff',t,E.tr8-.15,{out:53.6});TX('RONRONEO',180,98,40,CY,t,E.ron-.06,{out:53.65,sh:'rgba(62,242,230,.7)'});
  TX('TIENE TRUCO',180,80,38,YEL,t,E.truco8-.06,{out:54.25,sh:'rgba(255,225,79,.7)'});
  TX('CUANDO QUIEREN',180,62,22,'#fff',t,54.75,{out:56.05});TX('COMIDA',180,98,42,PINK,t,E.com8-.06,{out:56.05,sh:'rgba(255,79,163,.7)'});
  TX('LO MEZCLAN CON UN',180,62,20,'#fff',t,E.mez-.06,{out:57.55});TX('SONIDO PARECIDO',180,96,28,'#fff',t,56.8,{out:57.55});
  TX('AL LLANTO',180,62,24,'#fff',t,E.llan-.2,{out:58.6});TX('DE UN BEBÉ',180,100,40,PINK,t,E.llan-.06,{out:58.8,sh:'rgba(255,79,163,.8)'});
  TX('CASI NADIE PUEDE',180,62,22,'#fff',t,58.9,{});TX('IGNORARLO',180,98,40,YEL,t,E.ign-.1,{sh:'rgba(255,225,79,.8)'})}
// ---------- S9: nos conquistaron ----------
function throne(x,y,s){tr(x,y,s,0,()=>{
  ctx.beginPath();ctx.moveTo(-36,0);ctx.lineTo(-36,-130);ctx.quadraticCurveTo(-36,-168,0,-168);ctx.quadraticCurveTo(36,-168,36,-130);ctx.lineTo(36,0);ctx.closePath();const g=ctx.createLinearGradient(0,-168,0,0);g.addColorStop(0,'#ff4fa3');g.addColorStop(1,'#8a1d6a');ctx.save();nglow(GLD,3,10);ctx.stroke();ctx.restore();ctx.fillStyle=g;ctx.fill();
  ctx.fillStyle='rgba(255,255,255,.08)';rr(-24,-150,48,110,18);ctx.fill();circ(0,-140,8,GLD,'#fff3b0',1.4);
  rr(-48,-72,16,72,6);ctx.fillStyle='#b0306f';ctx.fill();ctx.strokeStyle=GLD;ctx.lineWidth=2;ctx.stroke();rr(32,-72,16,72,6);ctx.fill();ctx.stroke();
  rr(-38,-60,76,16,7);ctx.fillStyle='#ff4fa3';ctx.fill();ctx.strokeStyle='#fff3b0';ctx.lineWidth=2;ctx.stroke();rr(-42,-8,84,10,4);ctx.fillStyle=GLD;ctx.fill()})}
function flag(x,y,s,t,k){tr(x,y,s,0,()=>{ctx.strokeStyle='#e8e0ff';ctx.lineWidth=4;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(0,-140);ctx.stroke();circ(0,-142,5,GLD);
  ctx.save();ctx.translate(0,-134);ctx.scale(k,1);ctx.beginPath();ctx.moveTo(0,0);for(let i=0;i<=10;i++)ctx.lineTo(i*7,Math.sin(i*.7-t*8)*3.5*(i/10));for(let i=10;i>=0;i--)ctx.lineTo(i*7,52+Math.sin(i*.7-t*8)*3.5*(i/10));ctx.closePath();const g=ctx.createLinearGradient(0,0,70,0);g.addColorStop(0,CY);g.addColorStop(1,'#3a6bd6');ctx.fillStyle=g;ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=1.6;ctx.stroke();pawPrint(36,26,.9,'#fff',.2);ctx.restore()})}
function s9(t,u){const c=camAt(t,[[E.tr9,180,330,1.0],[E.nos9,180,330,1.0],[E.conq,200,330,1.25,0,'eo'],[E.sab-.3,190,330,1.1,0,'eio'],[66.0,180,320,1.0,0,'eio']]);
  const rise=eo(win(t,E.nos9,E.nos9+.45));
  bg('#14082a','#341452');dust(t,30,'#ffe14f',10,6,1.6,.5);
  world(c,()=>{glow(250,330,230,rgba(PINK,.25*rise));if(t>E.conq-.4)rays(250,300,t,14,520,'#ffe14f',.12*Math.min(1,(t-E.conq+.4)*3),.15,.12);
    vgrad(462,900,'#2a0f46','#0b0418',-300,1000);line(-200,462,700,462,rgba(PINK,.5),2);
    // alfombra
    poly([[120,462],[330,462],[380,560],[60,560]],'#7a1d5a');
    // trono (oculto bajo el suelo hasta subir)
    ctx.save();ctx.beginPath();ctx.rect(-200,0,900,470);ctx.clip();throne(255,462+200*(1-rise),1.3);ctx.restore();
    // gato
    const seat=462-56*1.3*rise;const pos=seat;
    // correa
    if(t<E.nodom){const sway=Math.sin(t*4)*3;ctx.strokeStyle=PINK;ctx.lineWidth=3.2;ctx.beginPath();ctx.moveTo(100,370);ctx.quadraticCurveTo(170,410+sway,235,386);ctx.stroke()}
    else if(t<E.nodom+.9){const q=t-E.nodom;ctx.strokeStyle=PINK;ctx.lineWidth=3.2;ctx.beginPath();ctx.moveTo(100+q*-20,370+q*q*120);ctx.quadraticCurveTo(130,390+q*q*140,150-q*30,372+q*q*200);ctx.stroke();ctx.beginPath();ctx.moveTo(190+q*10,400+q*q*170);ctx.quadraticCurveTo(210,396+q*q*150,235,386+q*q*100);ctx.stroke();
      const k=eo(q/.2);line(150,330,150+80*k,330+80*k,'#fff',6);line(230,330,230-80*k,330+80*k,'#fff',6);shock(190,370,t,E.nodom,'#fff',110,4,.4)}
    catSide(255,pos,1.55,{pose:'sit',flip:true,rim:PINK,eye:GRN,tail:.8,t,sq:t>E.sab?.8:0,head:t<E.nodom?.1:0});
    // corona
    const cu=t-E.conq;if(cu>-.35){let cy_,cr;const hy=pos-98*1.55*.0-110;if(cu<0){const q=(cu+.35)/.35;cy_=lerp(-60,hy,ei(q));cr=-.5*(1-q)}else{cy_=hy-Math.abs(wob(cu,15,5))*26;cr=wob(cu,20,6)*.4}crown(247,cy_,1.35,cr)}
    if(cu>0){burst(247,pos-120,t,E.conq,[YEL,'#fff',PINK,CY],30,170,.9,3);shock(247,pos-120,t,E.conq,YEL,130,4,.6)}
    // bandera
    if(t>E.conq-.3){const q=win(t,E.conq-.3,E.conq);const by=lerp(-200,462,ei(q));flag(150,by,1,t,t>E.conq?Math.min(1,(t-E.conq)*5):1);if(t>E.conq){shock(150,462,t,E.conq,'#fff',90,5,.5);burst(150,462,t,E.conq,['#e8e0ff',CY],16,110,.5,2.4)}}
    // humano
    const bowT=win(t,E.nos9,E.nos9+.3),up=eo(win(t,E.sab-.1,E.sab+.2));
    const hx=t<E.nos9?100:lerp(100,70,bowT);
    person(hx,462,1.3,{shirt:CY,arm:t<E.nodom?.2:.9,bow:lerp(0,.95,bowT)*(1-up)*(1)+0,shrug:up*(1-win(t,E.sab+.8,E.sab+1.1)),smile:t>E.sab,hair:'#3b1d5a'});
    // corazones hacia el centro
    if(t>E.quer){const q=win(t,E.quer,E.quer+.18);[[78,360],[248,340]].forEach((p,i)=>{if(q<1)heart(lerp(p[0],180,eo(q)),lerp(p[1],285,eo(q)),9,i?YEL:PINK,{glow:false})})}
    if(t>E.quer){const k=eb((t-E.quer)/.3),pu=1+.04*Math.sin((t-E.quer)*14);glow(180,285,150*k,rgba(PINK,.5));heart(180,270,112*k*pu,PINK,{st:'#fff',lw:2.4});burst(180,285,t,E.quer,[YEL,'#fff',PINK],24,170,.8,3)}
    });
  TX('NO LOS',180,62,24,'#fff',t,E.tr9+.08,{out:61.9});TX('DOMESTICAMOS',180,98,34,'#fff',t,E.tr9+.15,{out:61.9});
  if(t>E.nodom){const k=eo((t-E.nodom)/.25);ctx.save();ctx.strokeStyle=PINK;ctx.lineWidth=5;ctx.shadowColor=PINK;ctx.shadowBlur=8;ctx.beginPath();ctx.moveTo(40,98);ctx.lineTo(40+280*k,98);ctx.stroke();ctx.restore()}
  TX('NOS',180,62,26,'#fff',t,E.nos9-.04,{out:63.3});slam('CONQUISTARON',180,102,38,YEL,t,E.conq,{st:INK,sw:7,sh:'rgba(255,225,79,.9)',al:1-win(t,63.2,63.4)});
  TX('Y LO MEJOR ES QUE',180,64,22,'#fff',t,63.42,{out:65.05});TX('LO SABEMOS',180,100,40,CY,t,E.sab-.06,{out:65.05,sh:'rgba(62,242,230,.7)'});
  TX('Y AUN ASÍ LOS',180,64,24,'#fff',t,65.12,{});TX('QUEREMOS',180,100,44,PINK,t,E.quer-.06,{sh:'rgba(255,79,163,.8)'})}
// ---------- S10: ¿perros o gatos? ----------
function dogHead(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s,s);const rim=o.rim||CY;
  [-1,1].forEach(sx=>{ctx.save();ctx.translate(sx*38,-18);ctx.rotate(sx*(.35+(o.ear||0)));ctx.beginPath();ctx.ellipse(0,18,14,32,0,0,TAU);fillRim('#0b0616',rim,2,10);ctx.restore()});
  ctx.beginPath();ctx.ellipse(0,0,44,40,0,0,TAU);fillRim('#0b0616',rim,2.4,12);
  ctx.beginPath();ctx.ellipse(0,18,24,18,0,0,TAU);ctx.fillStyle='#1c1038';ctx.fill();
  [-1,1].forEach(sx=>{glow(sx*17,-8,14,rgba(YEL,.5));circ(sx*17,-8,6,YEL);circ(sx*17,-8,2.4,INK);circ(sx*17-1.5,-9.5,1.4,'#fff')});
  ctx.fillStyle=rim;ctx.beginPath();ctx.ellipse(0,9,8,5.5,0,0,TAU);ctx.fill();ctx.strokeStyle='rgba(255,255,255,.7)';ctx.lineWidth=1.6;ctx.beginPath();ctx.moveTo(0,14);ctx.lineTo(0,20);ctx.quadraticCurveTo(-5,27,-11,22);ctx.moveTo(0,20);ctx.quadraticCurveTo(5,27,11,22);ctx.stroke();
  if(o.tongue){ctx.fillStyle='#ff4fa3';ctx.beginPath();ctx.ellipse(0,29,6,8,0,0,TAU);ctx.fill()}
  ctx.restore()}
function s10(t,u){bg('#0b0418','#1a0a2e');
  const bt=t-E.tr10;
  ctx.save();ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(196,0);ctx.lineTo(164,640);ctx.lineTo(0,640);ctx.closePath();ctx.clip();const gl=ctx.createLinearGradient(0,0,0,640);gl.addColorStop(0,'#0a3a6a');gl.addColorStop(1,'#10204a');ctx.fillStyle=gl;ctx.fillRect(0,0,360,640);
  for(let i=0;i<20;i++)circ(R(i)*200,(R(i*3)*700+t*18)%700,2+R(i)*3,'rgba(62,242,230,.18)');ctx.restore();
  ctx.save();ctx.beginPath();ctx.moveTo(196,0);ctx.lineTo(360,0);ctx.lineTo(360,640);ctx.lineTo(164,640);ctx.closePath();ctx.clip();const gr=ctx.createLinearGradient(0,0,0,640);gr.addColorStop(0,'#5a1a6a');gr.addColorStop(1,'#3a0f4a');ctx.fillStyle=gr;ctx.fillRect(0,0,360,640);
  for(let i=0;i<20;i++){heart(200+R(i)*160,(R(i*3)*700-t*20+700)%700,3+R(i)*4,'rgba(255,79,163,.35)',{glow:false,lw:0,st:null})}ctx.restore();
  ctx.save();nglow('#fff',3,14);ctx.beginPath();ctx.moveTo(196,0);ctx.lineTo(164,640);ctx.stroke();ctx.restore();
  const lp_=t>E.perros?1:0,lg=t>E.gatos10?1:0;
  // cabezas
  const dq=eb((t-E.perros)/.4),cq=eb((t-E.gatos10)/.4);
  if(t>E.perros-.05){glow(92,196,110,rgba(CY,.3*lp_));dogHead(92,196,1.15*dq,{tongue:(t>E.perros+.3)&&Math.sin(t*6)>0,ear:Math.sin(t*5)*.06})}
  if(t>E.gatos10-.05){glow(268,196,110,rgba(PINK,.3));catHead(268,200,1.0*cq,{rim:PINK,eye:GRN,blink:Math.sin(t*1.3)>.97?1:0,halo:false})}
  // barras de votación empatadas
  const bars=eo(win(t,E.eres+.2,E.eres+.8)),hL=104+9*Math.sin(t*2.6),hR=104-9*Math.sin(t*2.6);
  const base=410;
  [[62,hL,CY,'#3a6bd6'],[258,hR,PINK,'#8a4dff']].forEach(([x,h,c1,c2],i)=>{const hh=h*bars;ctx.save();ctx.fillStyle='rgba(10,3,24,.6)';rr(x-6,base-170,56,170,12);ctx.fill();ctx.restore();
    const g=ctx.createLinearGradient(0,base-hh,0,base);g.addColorStop(0,c1);g.addColorStop(1,c2);ctx.save();nglow(c1,2,10);rr(x-6,base-hh,56,hh,12);ctx.stroke();ctx.restore();ctx.fillStyle=g;rr(x-6,base-hh,56,hh,12);ctx.fill();
    const pc=Math.round(50+(i?-1:1)*(hL-hR)/2*.3);txt(pc+'%',x+22,base-hh-14,17,'#fff',{st:INK,sw:4,al:bars})});
  const vs=eb((t-E.eres-.4)/.4);tr(180,300,vs*(1+.06*Math.sin(t*5)),0,()=>{circ(0,0,24,'#1c0a30','#fff',2.4);glow(0,0,36,'rgba(255,225,79,.3)');txt('VS',0,1,19,YEL,{st:INK,sw:3})});
  tag('PERROS',92,360,13,CY,'#06141a',t,E.perros-.04);tag('GATOS',268,360,13,PINK,'#fff',t,E.gatos10-.04);
  // botón comentar
  if(t>E.coment){const q=eb((t-E.coment)/.4),tap=Math.abs(Math.sin((t-E.coment)*5));tr(180,474,q*(1+.03*Math.sin(t*8)),0,()=>{glow(0,0,110,'rgba(255,225,79,.35)');ctx.save();nglow(YEL,2.6,14);rr(-100,-26,200,52,26);ctx.stroke();ctx.restore();ctx.fillStyle=YEL;rr(-100,-26,200,52,26);ctx.fill();txt('COMENTA',12,1,23,INK);ctx.fillStyle=PINK;rr(-88,-13,26,20,6);ctx.fill();poly([[-82,7],[-78,15],[-72,7]],PINK)});
    tr(262,496+tap*8,q,-.5,()=>hand(0,0,.75,Math.PI*.15));if(t<E.coment+.5)shock(180,474,t,E.coment,YEL,120,4,.5)}
  TX('¿PERROS O GATOS?',180,60,30,'#fff',t,E.tr10-.5,{hl:[1],hc:YEL,sh:'rgba(255,79,163,.6)'});
  TX('¿ERES DE UNO',180,100,18,'rgba(255,255,255,.85)',t,E.eres+.3,{out:E.deb-.5});
  if(t>E.deb-.1)TX('QUE EMPIECE EL DEBATE',180,100,19,YEL,t,E.deb+.1,{})}
boot([s0,s1,s2,s3,s4,s5,s6,s7,s8,s9,s10],TRS,{cap:{acc:CY}});
