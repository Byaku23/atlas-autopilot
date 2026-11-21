// ===== 22 · Napoleón no era bajito — escenas =====
const T0=T;
const NP={coat:NAVY,rim:SKY};
const GRN=['#5a6f94','#6a7fa6','#4f648a','#617aa0','#566c92','#6d82a8','#5d7399'];
// ---------- S0 · gancho: ¿bajito? MENTIRA ----------
function s0(t,u){
  bg('#0b1638','#6a1a2e');const gy=470;
  ctx.fillStyle='#0a0f26';ctx.fillRect(0,gy,360,200);ctx.fillStyle='rgba(255,255,255,.12)';ctx.fillRect(0,gy,360,3);
  stars(t,50,3,.5);glow(180,300,220,'rgba(209,47,58,.22)');
  const g=1-eio(win(t,E.mentira-.1,E.mentira+.5));
  man(250,gy,2.7,{hs:1.35,coat:'#3a4a6e',hat:'shako',al:g,ph:0});
  const q=eb(cl((t+.1)/.5)),bt=eio(win(t,E.mentira,E.mentira+.7));
  man(lerp(120,180,bt),gy,lerp(2.1,2.9,bt)*q,Object.assign({ph:0,arm:-.6},NP,{hat:'bic'}));
  TX('NAPOLEÓN ERA BAJITO',180,66,26,'#fff',t,-.6,{out:E.mentira-.12,w:330,hl:[2],hc:SKY});
  tag('¿BAJITO?',180,190,22,STEEL,'#fff',t,E.bajito-.05,{out:E.mentira-.1});
  stampBox('MENTIRA',180,230,46,RED,t,E.mentira,-.12);
  if(t>E.mentira){burst(180,230,t,E.mentira,[RED,'#fff',GOLD],34,210,.8,3);shock(180,230,t,E.mentira,GOLD,170,5,.6)}
}
// ---------- S1 · pulgada francesa vs inglesa ----------
function s1(t,u){
  bg('#122a5c','#0b1638');
  const a1=eo(win(t,E.pies-.1,E.pies+.5));
  if(a1>0){txt('5',92,150,92*a1,GOLD,{wt:'900',st:INK,sw:9});txt('PIES',92,196,22,'#fff',{wt:'900',st:INK,sw:5});}
  if(t>E.dos-.1){const q=eb((t-E.dos)/.4);txt('2',262,150,92*q,GOLD,{wt:'900',st:INK,sw:9});txt('PULGADAS',262,196,20,'#fff',{wt:'900',st:INK,sw:5});txt('+',180,146,44*q,'#fff',{wt:'900',st:INK,sw:6})}
  const bw=eo(win(t,E.franc-.15,E.franc+.55))*271,gx=44;
  if(bw>1){ruler(gx,262,bw,34,CRM);if(bw>260){ctx.fillStyle=RED;ctx.fillRect(gx+bw-8,262,8,34);ctx.fillStyle='#fff';ctx.fillRect(gx+bw-16,262,8,34);ctx.fillStyle=NAVY;ctx.fillRect(gx+bw-24,262,8,34)}
    tag('PULGADA FRANCESA',180,244,15,NAVY,'#fff',t,E.franc-.05);}
  if(t>E.franc+.6)txt('2,71 cm',gx+135,318,22,GOLD,{wt:'900',st:INK,sw:5});
  if(t>E.larga-.1){const q=eb((t-E.larga)/.4);tr(300,350,q,0,()=>{ctx.save();glowStroke(GOLD,3,10);ctx.beginPath();ctx.moveTo(0,28);ctx.lineTo(0,-8);ctx.lineTo(-8,2);ctx.moveTo(0,-8);ctx.lineTo(8,2);ctx.stroke();ctx.restore()});
    tag('MÁS LARGA',284,386,15,RED,'#fff',t,E.larga-.05)}
  const iw=eo(win(t,E.ingl-.1,E.ingl+.5))*254;
  if(iw>1){ruler(gx,420,iw,34,STEEL);tag('PULGADA INGLESA',180,402,15,'#2a3a5a','#fff',t,E.ingl-.05);if(iw>240)txt('2,54 cm',gx+127,476,22,SKY,{wt:'900',st:INK,sw:5})}
  if(t>E.ingl+.1){const f=.5+.5*Math.sin(t*8);ctx.save();ctx.globalAlpha=.6+.4*f;ctx.strokeStyle=GOLD;ctx.lineWidth=2;ctx.setLineDash([4,4]);ctx.beginPath();ctx.moveTo(gx+254,300);ctx.lineTo(gx+254,452);ctx.stroke();ctx.restore()}
  TX('MEDIDAS FRANCESAS',180,64,22,'#fff',t,E.pies-.5,{w:340,hl:[1],hc:SKY,out:E.franc-.2});
  tag('MEDIDAS DISTINTAS',180,470,22,RED,'#fff',t,E.ingl+.7);
}
// ---------- S2 · conversión: 1,68 m ----------
function s2(t,u){
  bg('#16306a','#0b1638');const gy=480;
  ctx.fillStyle='#0a1230';ctx.fillRect(0,gy,360,200);ctx.fillStyle='rgba(255,255,255,.14)';ctx.fillRect(0,gy,360,3);
  const k=eo(win(t,E.conv,E.ocho)),ns=3.1;
  man(110,gy,ns*eb(cl((t-T0[2])/.5)),Object.assign({ph:0,arm:-.5},NP,{hat:'bic'}));
  const H=80*ns*k*1.0;
  line(200,gy,200,gy-H-8,GOLD,3);for(let i=0;i<=8;i++){const yy=gy-(H+8)*i/8;if(yy<gy-H-9)continue;line(192,yy,208,yy,GOLD,2)}
  ctx.save();ctx.globalAlpha=.5;ctx.setLineDash([6,5]);ctx.strokeStyle=SKY;ctx.lineWidth=1.8;ctx.beginPath();ctx.moveTo(40,gy-H-8);ctx.lineTo(210,gy-H-8);ctx.stroke();ctx.restore();
  const v=countV(0,1.68,t,E.conv,E.ocho-E.conv);
  txt(fmtN(Math.max(0,v),2).replace('.',','),280,200,60,GOLD,{wt:'900',st:INK,sw:8,sc:1+.14*wob(t-E.ocho,14,5)});txt('METROS',280,236,20,'#fff',{wt:'900',st:INK,sw:5});
  if(t>E.ocho){burst(280,200,t,E.ocho,[GOLD,'#fff',SKY],32,190,.9,3);shock(280,200,t,E.ocho,GOLD,120,4,.5)}
  TX('CONVERTIDO A METROS',180,64,22,'#fff',t,E.conv-.1,{w:340,hl:[2],hc:SKY});
  tag('CASI 1,68 m',180,530-20,20,GOLD,'#2a1608',t,E.ocho-.05);
}
// ---------- S3 · el francés medio ----------
function s3(t,u){
  bg('#0f2250','#0a1230');const gy=470,sc=2.2;
  ctx.fillStyle='#070c20';ctx.fillRect(0,gy,360,200);ctx.fillStyle='rgba(255,255,255,.12)';ctx.fillRect(0,gy,360,3);
  const H=[1.58,1.62,1.65,1.6,1.66,1.63];
  const ppm=80*sc/1.68; // px por metro
  H.forEach((h,i)=>{const a=eo(win(t,E.medio-.1+i*.09,E.medio+.4+i*.09));if(a<=0)return;man(30+i*44,gy,sc*a,{hs:h/1.68,coat:GRN[i],hat:'none',belts:false,ph:0})});
  const y58=gy-1.58*ppm-8,y68=gy-1.68*ppm-8;
  if(t>E.cin58-.1){const q=eo(win(t,E.cin58-.1,E.cin58+.4));ctx.save();ctx.globalAlpha=q;ctx.strokeStyle=SKY;ctx.lineWidth=2;ctx.setLineDash([7,5]);ctx.beginPath();ctx.moveTo(8,y58);ctx.lineTo(352,y58);ctx.stroke();ctx.restore();tag('1,58 m',316,y58+16,14,SKY,'#04202a',t,E.cin58-.05)}
  if(t>E.sese-.1){const q=eo(win(t,E.sese-.1,E.sese+.4));ctx.save();ctx.globalAlpha=q;ctx.strokeStyle=GOLD;ctx.lineWidth=2;ctx.setLineDash([7,5]);ctx.beginPath();ctx.moveTo(8,y68);ctx.lineTo(352,y68);ctx.stroke();ctx.restore();tag('1,68 m',316,y68-14,14,GOLD,'#2a1608',t,E.sese-.05)}
  if(t>E.normal-.2){const q=eb((t-E.normal+.1)/.45);man(312,gy,sc*q,Object.assign({ph:0,arm:-.5},NP,{hat:'bic'}));glow(312,gy-80,70,'rgba(232,193,90,.28)')}
  if(t>E.normal)tag('NAPOLEÓN: NORMAL',180,132,20,RED,'#fff',t,E.normal-.05,{out:E.alto-.15});
  if(t>E.alto-.05){const q=eb((t-E.alto)/.4);tr(312,y68-38,q,0,()=>{ctx.save();glowStroke(GOLD,3.4,12);ctx.beginPath();ctx.moveTo(0,16);ctx.lineTo(0,-16);ctx.lineTo(-9,-6);ctx.moveTo(0,-16);ctx.lineTo(9,-6);ctx.stroke();ctx.restore()});tag('O MÁS ALTO',180,132,22,GOLD,'#2a1608',t,E.alto-.05);burst(312,y68-30,t,E.alto,[GOLD,'#fff'],24,150,.8,3)}
  TX('EL FRANCÉS MEDIO',180,60,24,'#fff',t,E.medio-.15,{w:340,hl:[2],hc:SKY,out:E.normal-.2});
}
// ---------- S4 · ¿quién lo hizo pequeño? ----------
function s4(t,u){
  bg('#1a1438','#3a1030');
  const q=eb(cl((t-E.quien+.1)/.5));
  txt('?',92,230,130*q,GOLD,{wt:'900',st:INK,sw:10,sc:1+.05*Math.sin(t*5)});
  const sh=1-.55*eio(win(t,E.peq-.1,E.peq+.5));
  man(92,420,3.0*sh,Object.assign({ph:0,arm:-.5},NP,{hat:'bic'}));
  if(t>E.carica-.3){const k=eo(win(t,E.carica-.3,E.carica+.4));ctx.save();ctx.translate(lerp(520,230,k),300);ctx.rotate(-.05);parch(0,0,190,240,1);
    ctx.strokeStyle='#3a2418';ctx.lineWidth=2.4;ctx.lineCap='round';const d=win(t,E.carica+.2,E.gill-.2);
    ctx.beginPath();ctx.moveTo(-40,60);for(let i=0;i<=40*d;i++){const a=i/40;ctx.lineTo(-40+a*80,60-Math.sin(a*TAU*1.5)*8-a*10)}ctx.stroke();
    if(d>.2){ctx.beginPath();ctx.arc(-6,-10,22*Math.min(1,d*2.5),0,TAU);ctx.stroke()}
    if(d>.6){ctx.fillStyle='#3a2418';ctx.beginPath();ctx.moveTo(-26,-24);ctx.lineTo(-6,-52);ctx.lineTo(14,-24);ctx.closePath();ctx.fill()}
    ctx.restore()}
  TX('¿QUIÉN LO HIZO PEQUEÑO?',180,62,22,'#fff',t,E.quien-.15,{w:340,hl:[3],hc:GOLD,out:E.carica-.1});
  TX('UN CARICATURISTA',180,62,24,'#fff',t,E.carica-.15,{w:340,hl:[1],hc:GOLD,out:E.gill+.4});
  if(t>E.gill-.05)slam('JAMES GILLRAY',180,500,36,GOLD,t,E.gill,{st:INK,sw:7});
}
// ---------- S5 · Little Boney y la prensa que lo copia ----------
function s5(t,u){
  bg('#f2ead3','#d8c9a2');
  ctx.fillStyle='rgba(120,90,40,.08)';for(let i=0;i<30;i++)ctx.fillRect(R(i)*360,R(i*3)*640,60,1.4);
  const sm=eio(win(t,E.prensa-.1,E.prensa+.6));
  // viñeta grande
  const px=lerp(180,92,sm),py=lerp(270,110,sm),ps=lerp(1,.42,sm);
  tr(px,py,ps,0,()=>{rr(-150,-170,300,340,8);ctx.fillStyle='#e8d6a8';ctx.fill();ctx.strokeStyle='#3a2418';ctx.lineWidth=4;ctx.stroke();
    const fur=win(t,E.furi-.1,E.furi+.6),sk=fur>0&&fur<1?Math.sin(t*60)*2:0;
    const shr=1-.45*eio(win(t,E.dimi-.1,E.dimi+.5));
    man(sk,140,2.8*shr,{coat:'#3a2418',hat:'bic',hatS:1.65,belts:false,skin:fur>0?'#e0414a':SKIN,arm:t>E.furi?-1.6:undefined,ph:t*14*fur});
    if(fur>0){for(let i=0;i<4;i++){const a=i*1.6+t*3;ctx.save();ctx.globalAlpha=Math.min(1,fur*2)*.9;ctx.strokeStyle=RED;ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(Math.cos(a)*40,-60+Math.sin(a)*16);ctx.lineTo(Math.cos(a)*58,-60+Math.sin(a)*24);ctx.stroke();ctx.restore()}}
    ctx.save();ctx.fillStyle='#3a2418';ctx.font='900 18px '+SERIF;ctx.textAlign='center';ctx.fillText('LITTLE BONEY',0,-142);ctx.restore()});
  // copias
  const cols=[[268,110],[92,260],[268,260],[92,410],[268,410]];
  cols.forEach((c,i)=>{const ts=E.prensa+.15+i*.16;if(t<ts)return;const q=eb((t-ts)/.35);tr(c[0],c[1],.42*q,0,()=>{rr(-150,-170,300,340,8);ctx.fillStyle='#e8d6a8';ctx.fill();ctx.strokeStyle='#3a2418';ctx.lineWidth=4;ctx.stroke();man(0,140,2.8,{coat:'#3a2418',hat:'bic',hatS:1.65,belts:false,skin:RED,arm:-1.6})})});
  if(t>E.copio&&t<E.anos+.6){const n=Math.min(99,Math.floor(countV(0,99,t,E.copio,E.anos-E.copio)));txt('×'+n,180,508,46,RED,{wt:'900',st:CRM,sw:6})}
  TX('LITTLE BONEY',180,60,28,'#3a2418',t,E.little-.1,{w:340,stroke:CRM,hl:[],out:E.prensa-.15});
  if(t>E.hacia-.05&&t<E.little-.1)TX('HACIA 1803',180,60,28,'#3a2418',t,E.hacia-.1,{w:340,stroke:CRM,out:E.little-.15});
}
// ---------- S6 · el pequeño cabo: cariño ----------
function s6(t,u){
  bg('#16306a','#07102a');const gy=470;
  ctx.fillStyle='#050a1c';ctx.fillRect(0,gy,360,200);ctx.fillStyle='rgba(255,255,255,.12)';ctx.fillRect(0,gy,360,3);
  glow(180,330,200,'rgba(110,193,255,.18)');
  const nq=eb(cl((t-T0[6]-.2)/.5));
  [-1,1].forEach((d,j)=>[0,1].forEach(i=>{const ts=T0[6]+.3+i*.12+j*.06;const a=eo(win(t,ts,ts+.5));if(a<=0)return;const x=180+d*(78+i*58),xx=lerp(180+d*320,x,a),rise=t>E.carino?-Math.abs(Math.sin((t-E.carino)*8+i))*8:0;
    man(xx,gy+rise,1.7,{coat:'#2a4a8a',hat:'shako',flip:d>0,ph:t*10*(1-a),arm:t>E.carino?-2.4:undefined})}));
  man(180,gy,2.5*nq,Object.assign({ph:0},NP,{hat:'bic'}));
  if(t>E.carino-.05){for(let i=0;i<7;i++){const k=((t-E.carino)*.7+i*.17)%1,hx=60+R(i)*240,hy=360-k*210;heartP(hx,hy,7+R(i+4)*6,RED,Math.min(1,(1-k)*1.6))}burst(180,330,t,E.carino,[RED,'#fff',GOLD],26,160,.8,3)}
  TX('EL PEQUEÑO CABO',180,66,28,'#fff',t,E.apodo-.15,{w:340,hl:[1],hc:SKY,out:E.burla-.2});
  if(t>E.burla-.1){tag('NO ERA BURLA',180,66,24,RED,'#fff',t,E.burla-.05,{out:E.carino-.1})}
  if(t>E.carino-.05)tag('ERA CARIÑO',180,66,26,GOLD,'#2a1608',t,E.carino-.05);
}
// ---------- S7 · lo que lo hizo enorme (y oscuro) ----------
function s7(t,u){
  bg('#0b1638','#1a0a1a');const gy=470;
  ctx.fillStyle='#050812';ctx.fillRect(0,gy,360,200);
  const g=eo(win(t,E.enorme-.2,E.enorme+.9)),dk=eo(win(t,E.oscuro-.1,E.oscuro+.8));
  ctx.save();ctx.globalAlpha=.55*g;man(205,gy+60,lerp(1,8.4,g),{coat:mixc('#101a3a','#2a0a12',dk),hat:'bic',belts:false,skin:mixc('#101a3a','#2a0a12',dk),ph:0,rim:dk>.2?RED:undefined});ctx.restore();
  glow(180,300,240,'rgba(209,47,58,'+(.18*dk)+')');
  man(86,gy,2.6,Object.assign({ph:0,arm:-.5},NP,{hat:'bic'}));
  ctx.save();ctx.globalAlpha=.5;ctx.transform(1,0,-1.4*g,-.25,0,0);ctx.translate(86,0);ctx.restore();
  if(t>E.enorme-.1)shock(180,280,t,E.enorme,SKY,200,4,.7);
  TX('PERO SI ALGO LO HIZO',180,60,20,'#fff',t,E.algo-.15,{w:340,out:E.enorme+.3});
  if(t>E.enorme-.1)slam('ENORME',180,130,48,GOLD,t,E.enorme,{st:INK,sw:8});
  if(t>E.oscuro-.1){tag('Y OSCURO',180,200,24,RED,'#fff',t,E.oscuro-.05)}
  tag('NO FUE SU ALTURA',180,470,22,NAVY,'#fff',t,E.altura-.05,{stroke:SKY});
}
// ---------- S8 · el Código Civil ----------
function s8(t,u){
  bg('#14306a','#0a1536');
  const dq=eb(cl((t-E.firmo+.3)/.6)),bk=t>E.firmo-.4?dq:0;
  if(t>E.cuatro-.1)slam('1804',180,80,50,GOLD,t,E.cuatro,{st:INK,sw:8,});
  if(bk>0)book(180,270+(1-bk)*-260,1.2,t,{rot:(1-bk)*.4});
  if(t>E.firmo)shock(180,270,t,E.firmo,GOLD,150,4,.5);
  if(t>E.igual-.2){const a=eo(win(t,E.igual-.2,E.igual+.3));ctx.save();ctx.globalAlpha=a;const inc=Math.sin(t*3)*.03*(1-eio(win(t,E.igual,E.igual+.5)))+ (1-eio(win(t,E.igual-.1,E.igual+.5)))*.4;balance(250,140,.8,inc);ctx.restore();tag('IGUALDAD ANTE LA LEY',180,380,16,GOLD,'#2a1608',t,E.igual-.05,{out:E.feud-.4})}
  if(t>E.feud-.3){const k=eo(win(t,E.feud-.1,E.feud+1.0));castle(70,420,.9,k,t);if(t>E.feud&&t<E.feud+.3)shock(70,400,t,E.feud,RED,80,4,.4);tag('FIN DEL FEUDALISMO',180,440,16,RED,'#fff',t,E.feud-.05,{out:E.todav})}
  if(t>E.europa-.15){const q=eb((t-E.europa)/.5);ctx.save();ctx.globalAlpha=Math.min(1,q);const r=40+30*Math.sin(t*3);ctx.strokeStyle=SKY;ctx.lineWidth=2.4;ctx.beginPath();ctx.arc(110,420,26*q+4*Math.sin(t*4),0,TAU);ctx.stroke();circ(110,420,8,SKY);ctx.restore();tag('EUROPA',110,462,16,NAVY,'#fff',t,E.europa-.05,{stroke:SKY})}
  if(t>E.latina-.15){const q=eb((t-E.latina)/.5);ctx.save();ctx.globalAlpha=Math.min(1,q);ctx.strokeStyle=GOLD;ctx.lineWidth=2.4;ctx.beginPath();ctx.arc(250,420,26*q+4*Math.sin(t*4+1),0,TAU);ctx.stroke();circ(250,420,8,GOLD);ctx.restore();tag('AMÉRICA LATINA',250,462,15,GOLD,'#2a1608',t,E.latina-.05);for(let i=0;i<10;i++){const k=((t-E.latina)*.8+i/10)%1;ctx.save();ctx.globalAlpha=(1-k)*.5;line(180,300,lerp(180,250,k),lerp(300,420,k),GOLD,2);ctx.restore()}}
  TX('EL CÓDIGO CIVIL',180,150,24,'#fff',t,E.firmo-.2,{w:340,hl:[1],hc:GOLD,out:E.igual-.1});
}
// ---------- S9 · el lado oscuro ----------
function s9(t,u){
  bg('#12060a','#3a0f1a');
  glow(180,300,260,'rgba(209,47,58,.2)');
  if(t>E.dos2-.1)slam('1802',180,86,56,RED,t,E.dos2,{st:INK,sw:9});
  if(t>E.esclav-.4){const k=eo(win(t,E.esclav-.4,E.esclav+.7)),sk=t>E.esclav&&t<E.esclav+.4?Math.sin(t*70)*3:0;chain(14+sk,250,332,k,t);chain(14-sk,290,332,k*.9,t);
    if(t>E.esclav){burst(180,270,t,E.esclav,[RED,'#aaa'],30,200,.8,3);shock(180,270,t,E.esclav,RED,170,5,.6)}
    tag('ESCLAVITUD RESTABLECIDA',180,210,20,RED,'#fff',t,E.esclav-.05)}
  if(t>E.colon-.1)tag('EN COLONIAS FRANCESAS',180,330,17,'#2a0a12','#fff',t,E.colon-.05,{stroke:RED});
  if(t>E.exigia-.4){const k=eb(cl((t-E.exigia+.4)/.5));book(180,430+(1-k)*200,.8*k,t,{col:'#4a1018'});}
  if(t>E.esposa-.05){stampBox('OBEDIENCIA A LA ESPOSA',180,520-80,20,RED,t,E.esposa,-.1)}
  TX('PERO EN',180,62,20,'#fff',t,T0[9]+.1,{w:340,out:E.dos2-.1});
  if(t>E.exigia-.1&&t<E.esposa)TX('Y SU CÓDIGO EXIGÍA…',180,150,20,'#fff',t,E.exigia-.15,{w:340,out:E.esposa});
}
// ---------- S10 · cierre: ¿genio o tirano? ----------
function s10(t,u){
  bg('#0f2250','#1a0a1a');const gy=500;
  ctx.fillStyle='#060a1a';ctx.fillRect(0,gy,360,200);
  glow(180,330,200,'rgba(110,193,255,.15)');
  man(180,490,1.55,Object.assign({ph:0,arm:-.5},NP,{hat:'bic'}));
  TX('¿GENIO O TIRANO?',180,58,26,'#fff',t,T0[10]+.1,{w:340,hl:[1,3],hc:GOLD});
  if(t>E.genio-.2){const q=eb((t-E.genio+.2)/.45);tr(78,205,q,0,()=>{glow(0,0,90,'rgba(232,193,90,.3)');rr(-62,-62,124,130,14);ctx.fillStyle='rgba(15,31,74,.9)';ctx.fill();ctx.strokeStyle=GOLD;ctx.lineWidth=3;ctx.stroke();starP(0,-18,1,GOLD);txt('GENIO',0,40,24,GOLD,{wt:'900',st:INK,sw:5})})}
  if(t>E.tirano-.2){const q=eb((t-E.tirano+.2)/.45);tr(282,205,q,0,()=>{glow(0,0,90,'rgba(209,47,58,.3)');rr(-62,-62,124,130,14);ctx.fillStyle='rgba(40,8,20,.9)';ctx.fill();ctx.strokeStyle=RED;ctx.lineWidth=3;ctx.stroke();crownP(0,-14,1,RED);txt('TIRANO',0,40,24,RED,{wt:'900',st:INK,sw:5})})}
  if(t>E.tirano){const vs=eb((t-E.tirano-.1)/.4);tr(180,205,vs*(1+.06*Math.sin(t*5)),0,()=>{circ(0,0,22,'#0b1638','#fff',2.4);txt('VS',0,1,18,GOLD,{st:INK,sw:3})})}
  if(t>E.coment){const q=eb((t-E.coment)/.4);tr(180,316,q*(1+.03*Math.sin(t*8)),0,()=>{glow(0,0,110,'rgba(110,193,255,.35)');ctx.save();glowStroke(SKY,2.6,14);rr(-100,-26,200,52,26);ctx.stroke();ctx.restore();ctx.fillStyle=SKY;rr(-100,-26,200,52,26);ctx.fill();txt('COMENTA',0,1,24,'#04202a',{wt:'900'})})}
  if(t>E.sig-.1)tag('SÍGUEME PARA MÁS',180,520,19,RED,'#fff',t,E.sig);
}
boot([s0,s1,s2,s3,s4,s5,s6,s7,s8,s9,s10],TRS,{cap:{acc:SKY}});
