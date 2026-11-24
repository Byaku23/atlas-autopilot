// ===== 24 · Nerón y el incendio de Roma — escenas =====
const T0=T;
// ---------- S0 · gancho: Nerón y el violín ----------
function s0(t,u){
  const gy=520;
  bg('#1a0a2a','#ff5a1a');glow(180,430,270,'rgba(255,110,30,.5)');starfield(t,16,4,.35);
  smokeCol(70,440,t,70,.55);smokeCol(300,440,t+1.3,80,.55);
  skyline(t,gy,1,3);embersF(t,32,5,0,360,520,.9);
  rect0(206,336,76,200,'#241a2e');rect0(200,330,88,8,'#33253c');
  nero(244,332,1.5,{arm:Math.sin(t*6)*.4-.9,t});
  const du=t-E.existia;
  if(du<0){violin(224,284,1.3,-.8+Math.sin(t*6)*.08)}
  else{const a=cl(1-du*1.4);if(a>0)withA(a,()=>violin(224+du*60,284+du*du*520,1.3,-.8+du*7))}
  if(t>E.existia-.1){const q=eb(win(t,E.existia-.1,E.existia+.25));ctx.save();ctx.globalAlpha*=cl(1-du*1.2);glowStroke(RED,6,10);ctx.beginPath();ctx.moveTo(224-24*q,284-24*q);ctx.lineTo(224+24*q,284+24*q);ctx.moveTo(224+24*q,284-24*q);ctx.lineTo(224-24*q,284+24*q);ctx.stroke();ctx.restore()}
  TX('NERÓN TOCABA EL VIOLÍN',180,66,23,'#fff',t,-.6,{w:344,out:E.pero-.1,hl:[0,3],hc:GOLD});
  TX('MIENTRAS ROMA ARDÍA',180,102,22,'#fff',t,E.mientras-.1,{out:E.pero-.1,hl:[2],hc:FLAME});
  TX('PERO EL VIOLÍN...',180,66,26,'#fff',t,E.pero-.05,{out:E.existia+.4,hl:[2],hc:GOLD});
  if(t>E.existia){stampBox('NI EXISTÍA',180,150,42,RED,t,E.existia,-.1);shock(180,150,t,E.existia,RED,150,5,.6)}
}
// ---------- S1 · julio del año 64, Circo Máximo ----------
function s1(t,u){
  const gy=440;
  bg('#10081e','#3a1a2e');starfield(t,20,8,.4);
  rect0(0,330,360,110,'#4a3a42');rect0(0,322,360,10,'#5a4a52');
  for(let i=0;i<9;i++){ctx.fillStyle='#1e1424';ctx.beginPath();ctx.moveTo(10+i*40,gy);ctx.lineTo(10+i*40,392);ctx.arc(30+i*40,392,20,Math.PI,0);ctx.lineTo(50+i*40,gy);ctx.fill()}
  rect0(0,gy,360,210,'#1a1020');
  const sp=win(t,E.incendio,E.dias);glow(180,400,150+200*sp,'rgba(255,110,30,'+(.15+.45*sp)+')');
  for(let k=0;k<8;k++){const x=22+k*44,b=win(t,E.incendio+k*.42,E.incendio+k*.42+.7);
    poly([[x-20,gy-26],[x,gy-44],[x+20,gy-26]],'#6a3e1c');rect0(x-17,gy-26,34,26,'#8a5a2a');rect0(x-7,gy-18,14,18,'#3a2210');
    if(b>0)fire(x,gy-24,.8*b,t+k,.5+b*.9)}
  embersF(t,24,11,0,360,gy,sp);
  TX('EN JULIO DEL AÑO',180,66,24,'#fff',t,T0[1]+.0,{out:E.n64-.1,hl:[2],hc:GOLD});
  if(t>E.n64-.05){slam('64',180,134,70,GOLD,t,E.n64,{st:INK,sw:10});shock(180,134,t,E.n64,GOLD,140,5,.6)}
  if(t>E.incendio)stampBox('INCENDIO',180,230,30,FLAME,t,E.incendio,-.08);
  TX('TIENDAS DE MADERA',180,290,20,'#fff',t,E.madera-.35,{out:E.ardio-.1,hl:[2],hc:FLAME});
  TX('ARDIÓ DURANTE DÍAS',180,290,22,'#fff',t,E.ardio-.05,{w:344,hl:[2],hc:FLAME});
  tag('CIRCO MÁXIMO',180,470,22,RED,'#fff',t,E.circo-.05);
}
// ---------- S2 · mapa de 14 barrios ----------
function s2(t,u){
  bg('#160e22','#2a1a2e');
  const dead=[3,4,10],safe=[1,6,9,12];
  for(let i=0;i<14;i++){const c=i%7,r=i/7|0,x=19+c*46,y=170+r*58,ap=eb(win(t,E.catorce-.05+i*.05,E.catorce+.3+i*.05));if(ap<=0)continue;
    const di=dead.indexOf(i),si=safe.indexOf(i);
    let col='#d9c9a0',ol='rgba(255,255,255,.4)';
    if(di>=0&&t>E.tres+di*.12){col='#1a1214';ol=RED}
    else if(si>=0&&t>E.cuatro2+si*.1){col='#2e9e4a';ol='#9affb0'}
    else if(di<0&&si<0&&t>E.desaparecieron+.4){col='#d9712a';ol='#ffb060'}
    ctx.save();ctx.translate(x+21,y+25);ctx.scale(ap,ap);
    if(si>=0&&t>E.cuatro2+si*.1)glow(0,0,44,'rgba(120,255,160,.35)');
    rr(-21,-25,42,50,6);ctx.fillStyle=col;ctx.fill();ctx.strokeStyle=ol;ctx.lineWidth=2;ctx.stroke();
    if(di>=0&&t>E.tres+di*.12)fire(0,16,.45,t+i,.9);
    else txt(String(i+1),0,0,16,col=='#d9c9a0'?'#3a2a1a':'#fff',{wt:'900'});
    ctx.restore()}
  TX('14 BARRIOS DE ROMA',180,66,24,'#fff',t,T0[2]+.05,{w:344,hl:[0],hc:GOLD});
  tag('3 DESAPARECIERON',180,330,22,RED,'#fff',t,E.tres-.05);
  tag('SOLO 4 SE SALVARON',180,390,22,GRN,'#fff',t,E.cuatro2-.1);
}
// ---------- S3 · Nerón en Antium ----------
function s3(t,u){
  bg('#2a1840','#e0905a');
  glow(18,340,170,'rgba(255,100,30,.6)');smokeCol(24,352,t,36,.45);
  for(let i=0;i<4;i++)rect0(i*14-6,336-R(i)*18,12,22+R(i)*18,'#1e1424');
  for(let k=0;k<5;k++){ctx.fillStyle='rgba(24,30,80,'+(.5+k*.1)+')';ctx.beginPath();ctx.moveTo(-10,360+k*34);for(let x=-10;x<=370;x+=20)ctx.lineTo(x,360+k*34+Math.sin((x+t*(26+k*8))*.04+k)*4);ctx.lineTo(370,640);ctx.lineTo(-10,640);ctx.fill()}
  glow(40,380,80,'rgba(255,120,40,.35)');
  poly([[170,640],[170,360],[360,340],[360,640]],'#3a2a30');rect0(170,356,190,10,'#cdbd9d');
  temple(285,356,1.15);
  nero(228,356,1.4,{flip:true,arm:.6,t});
  for(let i=0;i<9;i++){const q=((t*.5+i*.11)%1);if(q<.8)circ(205-q*170,300+Math.sin(q*9)*6,2.2,'rgba(255,200,120,'+(.8-q)+')')}
  TX('¿Y NERÓN?',180,66,30,'#fff',t,T0[3]-.05,{out:E.estaba-.1,hl:[1],hc:GOLD});
  TX('ESTABA EN ANTIUM',180,66,24,'#fff',t,E.estaba-.05,{w:344,out:E.lejos-.1,hl:[2],hc:GOLD});
  TX('LEJOS DE LA CIUDAD',180,66,24,'#fff',t,E.lejos-.1,{w:344,hl:[0],hc:FLAME});
  tag('ANTIUM',180,470,22,PURP,'#fff',t,E.antium-.05);
}
// ---------- S4 · vuelve cuando las llamas llegan al palacio ----------
function s4(t,u){
  const gy=470;
  bg('#120820','#ff5a1a');glow(300,430,260,'rgba(255,100,30,.5)');
  rect0(0,gy,360,200,'#1c1024');
  domus(110,gy,1.0,t,1);
  const fr=lerp(400,215,eo(win(t,E.llamas-.3,E.palacio+.3)));
  for(let x=fr;x<420;x+=34)fire(x,gy,1.3,t+x,1.2);
  embersF(t,20,2,150,360,gy,.9);
  nero(lerp(-40,150,eo(win(t,T0[4]-.2,E.palacio))),gy+8,1.7,{ph:t*8*(1-win(t,E.palacio-.2,E.palacio+.2)),arm:-.5,t});
  TX('VOLVIÓ',180,66,34,'#fff',t,T0[4]-.05,{out:E.llamas-.1,hl:[0],hc:GOLD});
  TX('LAS LLAMAS SE ACERCABAN',180,66,20,'#fff',t,E.llamas-.05,{w:344,out:E.palacio-.22,hl:[1],hc:FLAME});
  if(t>E.palacio-.05)TX('¡A SU PALACIO!',180,66,28,'#fff',t,E.palacio-.05,{hl:[2],hc:GOLD});
}
// ---------- S5 · Campo de Marte, refugios y trigo ----------
function s5(t,u){
  const gy=490;
  bg('#3a2656','#f2a35e');sunO(75,190,24,t,.8);rect0(0,440,360,210,'#3a5a3a');rect0(0,440,360,3,'rgba(255,255,255,.3)');
  [24,336,60,300,100].forEach((x,i)=>{const q=eb(win(t,E.jardines+.05*i,E.jardines+.4+.05*i));if(t>E.jardines-.1&&q>0)tree(x,440+(i>1?12:0),1.2*q)});
  const gate=win(t,E.abrio,E.abrio+.6);
  [[110,-1],[250,1]].forEach(([x,d])=>{column(x,440,120,16);});
  rect0(94,306,172,12,MARB);
  ctx.save();ctx.translate(110,440);ctx.scale(1-gate,1);rect0(0,-114,70,114,'#7a4a22');ctx.restore();
  ctx.save();ctx.translate(250,440);ctx.scale(1-gate,1);rect0(-70,-114,70,114,'#7a4a22');ctx.restore();
  for(let i=0;i<6;i++){const q=eb(win(t,E.refugios+i*.12,E.refugios+.35+i*.12));if(q>0)tent(40+i*56,455,1.5*q,['#c9a46a','#b8845a','#d9b47a'][i%3])}
  for(let i=0;i<7;i++){const side=i%2?1:-1,tx=70+i*37,px=lerp(side>0?400:-40,tx,eo(win(t,E.casa-.2+i*.1,E.casa+1.0+i*.1)));if(t>E.casa-.3)person(px,gy,1.15,{robe:['#c9a46a','#9a7a5a','#8a9a6a','#a85a4a'][i%4],ph:t*7+i,flip:side>0})}
  if(t>E.bajo-.05){const q=eb(win(t,E.bajo-.05,E.bajo+.35));ctx.save();ctx.translate(290,200+(1-q)*-30);ctx.scale(q,q);rr(-34,-22,68,44,8);ctx.fillStyle='rgba(20,8,10,.7)';ctx.fill();ctx.strokeStyle=RED;ctx.lineWidth=3;ctx.stroke();txt('PRECIO',0,-8,13,'#fff',{wt:'900'});txt('▼',0,10,18,RED,{wt:'900',sc:1+.2*Math.sin(t*10)});ctx.restore()}
  if(t>E.trigo-.05){const q=eb(win(t,E.trigo-.05,E.trigo+.3));sack(180,330,2.0*q,Math.sin(t*3)*.05)}
  TX('ABRIÓ EL CAMPO DE MARTE',180,66,22,'#fff',t,T0[5]+.0,{w:344,out:E.jardines-.1,hl:[2,4],hc:GOLD});
  TX('Y SUS JARDINES',180,66,26,'#fff',t,E.jardines-.05,{out:E.levanto-.1,hl:[2],hc:'#9affb0'});
  TX('LEVANTÓ REFUGIOS',180,66,26,'#fff',t,E.levanto-.05,{out:E.bajo-.1,hl:[1],hc:GOLD});
  TX('BAJÓ EL PRECIO DEL TRIGO',180,66,22,'#fff',t,E.bajo-.05,{w:344,hl:[2,4],hc:GOLD});
}
// ---------- S6 · el rumor de Tácito ----------
function s6(t,u){
  const gy=440;
  bg('#1e1232','#4a2a5a');starfield(t,16,2,.4);
  if(t>E.tacito-.4){const q=eb(win(t,E.tacito-.4,E.tacito+.2));ctx.save();ctx.translate(180,150);ctx.scale(q,q);parch(0,0,300,100);txt('TÁCITO',0,-20,28,'#5a3a1a',{wt:'900'});txt('ANALES · LIBRO XV',0,16,15,'#7a5a3a',{wt:'700'});ctx.restore()}
  rect0(0,gy,360,210,'#1a1020');
  [[50,'#9a7a5a'],[100,'#8a9a6a'],[150,'#a85a4a']].forEach(([x,c],i)=>{if(t>E.rumor-.3){const q=eb(win(t,E.rumor-.3+i*.12,E.rumor+.1+i*.12));person(x,gy,1.1*q,{robe:c,flip:i==2?false:false,ph:0});if(q>.8)bubble(x+18,gy-102-i*10,44,26,'...',  '#fff','#222',1)}});
  rect0(200,gy-12,150,12,'#5a3a22');
  if(t>E.cantaba-.1){const q=eb(win(t,E.cantaba-.1,E.cantaba+.4));withA(.5*q,()=>nero(275,gy-12,1.3,{arm:Math.sin(t*5)*.4-.9,t}));
    for(let i=0;i<3;i++){const w=((t-E.cantaba)*.7+i*.33)%1;txt('♪',240+i*28,gy-120-w*60,22,'rgba(255,220,140,'+(1-w)+')',{wt:'900'})}txt('?',275,gy-130,34,'#fff',{wt:'900',a:.8})}
  if(t>E.troya-.1){const q=eb(win(t,E.troya-.1,E.troya+.4));ctx.save();ctx.translate(95,300);ctx.scale(q,q);circ(-4,70,5,'#fff');circ(8,52,8,'#fff');rr(-58,-52,116,96,28);ctx.fillStyle='#fff';ctx.fill();
    ctx.fillStyle='#2a2230';ctx.fillRect(-22,-4,16,44);ctx.fillRect(2,6,18,34);ctx.fillRect(-36,22,70,18);fire(-14,22,.4,t,.7);fire(12,24,.36,t+2,.6);txt('TROYA',0,-36,15,'#c0272d',{wt:'900'});ctx.restore()}
  if(t>E.rumor)stampBox('SOLO UN RUMOR',180,226,26,GOLD,t,E.rumor,-.07);
  const ar=win(t,E.ardia2-.3,E.ardia2+.6);for(let x=-10;x<380&&ar>0;x+=40)fire(x,gy+6,1.1*ar,t+x,.9*ar);
  TX('SEGÚN TÁCITO',180,66,26,'#fff',t,T0[6]+.0,{out:E.cantaba-.1,hl:[1],hc:GOLD});
  TX('CANTABA SOBRE TROYA',180,66,22,'#fff',t,E.cantaba-.05,{w:344,out:E.ardia2-.1,hl:[2],hc:FLAME});
  tag('MIENTRAS ARDÍA',180,470,22,FLAME,'#fff',t,E.ardia2-.05);
}
// ---------- S7 · lira, nunca violín ----------
function s7(t,u){
  bg('#f1e6c8','#d8b56a');rays(180,300,t,12,420,'rgba(255,255,255,.28)',1,.1,3);
  TX('SI TOCÓ ALGO...',180,66,26,'#2a1a10',t,T0[7]+.0,{out:E.lira-.1,hl:[2],hc:RED,stroke:'rgba(255,255,255,.9)'});
  TX('SERÍA UNA LIRA',180,66,30,'#2a1a10',t,E.lira-.05,{out:E.nunca-.1,hl:[2],hc:'#b06a10',stroke:'rgba(255,255,255,.9)'});
  TX('NUNCA UN VIOLÍN',180,66,30,'#2a1a10',t,E.nunca-.05,{hl:[2],hc:RED,stroke:'rgba(255,255,255,.9)'});
  if(t>E.lira-.1){const q=spring(t-E.lira,10,5);lyre(150,310,3.2*cl(q,0,1.2),Math.sin(t*2)*.04);if(t<E.lira+.5)sparkle0(150,300,t,E.lira)}
  if(t>E.nunca-.1){const q=eo(win(t,E.nunca-.1,E.nunca+.4)),fall=Math.max(0,t-E.violin2);
    withA(cl(1-fall*1.5),()=>{violin(lerp(430,286,q),400+fall*fall*500,1.7,.5+fall*6);});
    if(t>E.nunca+.3&&fall==0){ctx.save();glowStroke(RED,7,10);const p=eb(win(t,E.nunca+.3,E.nunca+.6));ctx.beginPath();ctx.moveTo(286-26*p,400-26*p);ctx.lineTo(286+26*p,400+26*p);ctx.moveTo(286+26*p,400-26*p);ctx.lineTo(286-26*p,400+26*p);ctx.stroke();ctx.restore()}}
  if(t>E.violin2)stampBox('NO EXISTÍA',180,470,28,RED,t,E.violin2,-.06);
}
function sparkle0(x,y,t,ts){const u=t-ts;burst(x,y,t,ts,['#ffd166','#fff','#ffb347'],14,110,.6,3)}
// ---------- S8 · el rumor crece, Casa Dorada ----------
function s8(t,u){
  const gy=470;
  bg('#1a1010','#4a2a18');rect0(0,gy,360,200,'#201410');
  for(let i=0;i<7;i++){ctx.save();ctx.globalAlpha=.55+.25*Math.sin(t*3+i);line(10+i*52,gy+8+(i%2)*14,40+i*52,gy+12+(i%2)*14,'#ff7a2a',2);ctx.restore()}
  embersF(t,26,7,0,360,gy,.8);
  [[70,190,'?'],[270,180,'¿?'],[180,250,'?'],[60,330,'¿?'],[300,300,'?']].forEach(([x,y,s],i)=>{const q=eb(win(t,E.rumor8-.1+i*.18,E.rumor8+.3+i*.18));if(q>0&&t<E.construyo)tr(x,y+Math.sin(t*3+i)*4,q,0,()=>bubble(0,0,64,40,s,'#fff','#222',i%2?-1:1))});
  const q=eb(win(t,E.construyo,E.dorada+.3));if(q>0)domus(180,gy,1.5*q,t,q);
  TX('EL RUMOR NO SE DETUVO',180,66,22,'#fff',t,E.rumor8-.1,{w:344,out:E.construyo-.6,hl:[1,4],hc:FLAME});
  TX('NERÓN CONSTRUYÓ',180,66,26,'#fff',t,E.construyo-.3,{out:E.dorada+.2,hl:[0],hc:GOLD});
  if(t>E.dorada){slam('CASA DORADA',180,130,40,GOLD,t,E.dorada,{st:INK,sw:9});shock(180,130,t,E.dorada,GOLD,140,5,.6)}
  tag('SOBRE LAS TIERRAS ARRASADAS',180,520,16,'#7a2a14','#fff',t,E.arrasadas-.3);
}
// ---------- S9 · culpa a los cristianos ----------
function s9(t,u){
  const gy=470;
  bg('#2a0e18','#0a0410');glow(90,300,200,'rgba(192,39,45,.25)');
  rect0(0,gy,360,200,'#1a0c14');
  nero(70,gy+4,1.8,{arm:-1.45,t});
  const pq=win(t,E.cristianos-.3,E.cristianos+.4),dim=win(t,E.ejecutados-.1,E.ejecutados+.6);
  for(let i=0;i<4;i++){const x=215+i*34;if(pq>0)person(x,gy+4,1.25*pq,{robe:'#e8e0d0',al:1-dim*.65,flip:true,hair:'#4a3a28'})}
  if(t>E.culpo){const q=win(t,E.culpo,E.cristianos);ctx.save();ctx.setLineDash([7,6]);glowStroke('#ff6b6b',3,8);ctx.lineDashOffset=-t*40;ctx.beginPath();ctx.moveTo(118,gy-128);ctx.lineTo(lerp(118,215,q),gy-128+q*-8);ctx.stroke();ctx.restore()}
  if(dim>0){ctx.fillStyle='rgba(10,0,6,'+(.45*dim)+')';ctx.fillRect(0,0,360,640)}
  TX('CULPÓ A LOS CRISTIANOS',180,66,22,'#fff',t,E.culpo-.05,{w:344,out:E.torturados-.45,hl:[3],hc:'#ff6b6b'});
  tag('CRISTIANOS',270,330,17,RED,'#fff',t,E.cristianos-.05);
  TX('TORTURADOS Y EJECUTADOS',180,66,22,'#fff',t,E.torturados-.05,{w:344,hl:[0,2],hc:'#ff6b6b'});
}
// ---------- S10 · debate ----------
function s10(t,u){
  bg('#2a1240','#14081e');rays(180,300,t,14,480,'rgba(242,177,52,.06)',1,.1,3);
  TX('¿NERÓN FUE EL CULPABLE,',180,66,22,'#fff',t,T0[10]+.0,{w:344,hl:[3],hc:FLAME});
  TX('O EL CHIVO EXPIATORIO?',180,100,22,'#fff',t,E.chivo-.5,{w:344,hl:[2,3],hc:GOLD});
  const lw=eb(win(t,E.culpable,E.culpable+.5)),rw=eb(win(t,E.roma-.4,E.roma+.3));
  tr(95,330,lw,0,()=>{rr(-70,-80,140,160,12);ctx.fillStyle='rgba(18,10,24,.85)';ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=3;ctx.stroke();fire(0,50,1.1,t,1);nero(0,52,.9,{});txt('CULPABLE',0,-100,22,'#fff',{wt:'900',st:INK,sw:6})});
  tr(265,330,rw,0,()=>{rr(-70,-80,140,160,12);ctx.fillStyle='rgba(18,10,24,.85)';ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=3;ctx.stroke();goat(0,40,1.5);txt('CHIVO',0,-100,22,'#fff',{wt:'900',st:INK,sw:6});txt('EXPIATORIO',0,-76,16,GOLD,{wt:'900',st:INK,sw:5})});
  if(t>E.roma)txt('VS',180,330,30,'#fff',{wt:'900',st:INK,sw:7,sc:1+.1*wob(t-E.roma,12,4)});
  if(t>E.coment-.1){const k=eb(win(t,E.coment-.1,E.coment+.35));tr(180,455,k,0,()=>{rr(-130,-22,260,44,22);ctx.fillStyle='#fff';ctx.fill();txt('COMENTA TU RESPUESTA',0,0,18,'#c0272d',{wt:'900'})})}
  if(t>E.sig-.1)tag('SÍGUEME PARA MÁS',180,502,18,RED,'#fff',t,E.sig-.05);
}
boot([s0,s1,s2,s3,s4,s5,s6,s7,s8,s9,s10],TRS,{cap:{acc:'#ffb347'}});
