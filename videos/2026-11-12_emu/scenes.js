// ===== Gran Guerra del Emú — escenas (2.5D: capas con paralaje) =====
const EM=(x,y,s,t,i,o={})=>emu(x,y,s,Object.assign({ph:t*9+i*1.7,rim:EMUR},o));
// S0 GANCHO: la cámara avanza; el ejército frente a la bandada de emús
function s0(t,u){const c=camAt(u,[[0,175,360,1.0],[8.6,225,350,1.2]]);
  paisaje(c,t,.35);
  capas(c,[{k:.82,fn:()=>{const adv=ez(cl((t-E.a_emus+.3)/3.5));for(let r=0;r<2;r++)for(let i=0;i<8;i++)EM(lerp(250+i*24+r*12,110+i*24+r*12,adv)+(r?8:0),GY+2+r*4,.62,t,i+r*3,{run:adv<1&&adv>0?1:.15,sil:'#2a1c18'})}}]);
  world(c,()=>{for(let i=0;i<4;i++)soldier(30+i*30,GY+14+(i%2)*6,1.1,{aim:cl((t-E.a_ejer)/.8),ph:0,rim:'rgba(255,190,110,.8)'});lewis(190,GY+16,1.2,{});shock(60,GY-80,t,E.a_ejer,'rgba(255,200,120,.6)',20,3,.8)});
  trigoFrente(c,t,.35,5,14);
  TX('AUSTRALIA, 1932',180,84,30,'#fff',t,-.6);
  TG('EL EJÉRCITO',100,138,13,'#3a4a2a','#fff',t,E.a_ejer-.05,{out:E.a_20});
  TX(fmtN(Math.round(countV(0,20000,t,E.a_20,1.1))),128,140,52,'#ffcf5a',t,E.a_20-.05,{sh:'rgba(255,150,60,.7)'});
  TX('EMÚS',276,146,28,'#fff',t,E.a_emus-.05);
  if(t>E.a_gano-.3){const q=eb((t-E.a_gano+.3)/.4);tr(180,285,q,0,()=>{ctx.fillStyle='#1c2a3a';rr(-70,-55,140,110,16);ctx.fill();ctx.strokeStyle='#ffcf5a';ctx.lineWidth=3;ctx.stroke();txt('¿QUIÉN',0,-14,26,'#fff',{wt:'900'});txt('GANÓ?',0,20,32,'#ffcf5a',{wt:'900'})})}}

// S1 EL PROBLEMA: granjeros veteranos, crisis, los emús arrasan el trigo
function s1(t,u){const cut=cl((t-E.b_arras)/1.6),k=cl((t-E.b_arras)/6);
  const c=t<E.b_llegaron-.4?camAt(u,[[0,150,355,1.05],[10,120,350,1.1]]):camAt(u,[[0,150,355,1.05],[9.8,120,350,1.1],[11.4,230,352,1.15]]);
  paisaje(c,t,.4+k*.3,{cut});
  capas(c,[{k:.78,fn:()=>{if(t>E.b_llegaron-.4)for(let i=0;i<9;i++){const q=ez(cl((t-E.b_llegaron+.4-i*.15)/2.2));EM(lerp(620,260-i*34,q),GY+4,.55,t,i,{run:q>0&&q<1?1:.2,sil:'#2a1c18'})}}}]);
  world(c,()=>{ // casa de granja y granjeros
    ctx.fillStyle=INK;rr(18,GY-58,72,58,2);ctx.fill();poly([[10,GY-56],[54,GY-90],[98,GY-56]],INK);ctx.fillStyle='#f0d9a8';rr(21,GY-55,66,55,2);ctx.fill();poly([[14,GY-57],[54,GY-86],[94,GY-57]],'#8a3a28');rr(34,GY-34,14,34,1);ctx.fillStyle='#4a2a1a';ctx.fill();rr(58,GY-42,16,14,1);ctx.fillStyle='#ffe9a0';ctx.fill();
    for(let i=0;i<3;i++)soldier(128+i*26,GY+10+(i%2)*5,1.05,{col:'#2a1c18',ph:0,flip:false,aim:0,rim:'rgba(255,190,110,.6)'});
    if(t>E.b_vet)for(let i=0;i<3;i++){const q=eb((t-E.b_vet-.1*i)/.4);tr(128+i*26,GY-118,q,0,()=>{circ(0,0,5,'#ffd24a',INK,1.5);poly([[-3,4],[0,14],[3,4]],RED,INK,1)})}
    if(t>E.b_crisis&&t<E.b_llegaron-.2){const q=cl((t-E.b_crisis)/1.0);ctx.save();ctx.globalAlpha=q;ctx.strokeStyle=RED;ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(220,GY-150);ctx.lineTo(250,GY-120);ctx.lineTo(268,GY-132);ctx.lineTo(300,GY-84);ctx.stroke();poly([[300,GY-84],[290,GY-92],[304,GY-98]],RED);ctx.restore()}
  });
  trigoFrente(c,t,.5,9,12);
  TX('OESTE DE AUSTRALIA',180,90,24,'#fff',t,E.b_oeste-.05,{out:E.b_vet-.1,w:300});
  TG('VETERANOS DE LA 1ª GUERRA',180,90,13,'#3a4a2a','#fff',t,E.b_vet-.1,{out:E.b_crisis-.1});
  TG('CRISIS ECONÓMICA',180,90,13,RED,'#fff',t,E.b_crisis-.1,{out:E.b_ruina-.1});
  slam('AL BORDE DE LA RUINA',180,100,24,'#ffcf5a',t,E.b_ruina,{stroke:INK,sw:6,al:t<E.b_llegaron-.3?1:0});
  TX('LLEGAN LOS EMÚS',180,90,26,'#fff',t,E.b_llegaron-.05,{out:E.b_arras-.15});
  TG('BUSCAN AGUA Y COMIDA',180,134,13,'#3a6a8a','#fff',t,E.b_agua-.05,{out:E.b_arras-.15});
  slam('ARRASAN EL TRIGO',180,96,26,RED,t,E.b_arras,{stroke:INK,sw:7})}

// S2 EL GOBIERNO ENVÍA TROPAS: carta, camión, Lewis, cartuchos
function s2(t,u){const tx=lerp(-100,150,eo(cl((t-E.c_gob+.3)/2.6)));
  const c=camAt(u,[[0,150,350,1.0],[2.6,130,350,1.0],[6,170,350,1.1],[10,190,345,1.12]]);
  paisaje(c,t,.55);
  capas(c,[{k:.7,fn:()=>{ // edificio del gobierno al fondo
    ctx.fillStyle=INK;rr(30,GY-84,150,84,2);ctx.fill();ctx.fillStyle='#e8d8b0';rr(34,GY-80,142,80,2);ctx.fill();poly([[26,GY-82],[105,GY-116],[184,GY-82]],'#c8b890',INK,2);for(let i=0;i<6;i++){ctx.fillStyle='#fff6d8';rr(44+i*22,GY-74,8,70,2);ctx.fill()}
    circ(105,GY-96,6,GOLDW,INK,1.5)}}]);
  world(c,()=>{ // carta que vuela hacia el gobierno
    const q=cl((t-E.c_pid)/1.7);if(q<1){const x=lerp(260,110,eio(q)),y=GY-30-Math.sin(q*Math.PI)*70;tr(x,y,1,Math.sin(t*6)*.3,()=>{ctx.fillStyle=CR;rr(-14,-9,28,18,2);ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=1.6;ctx.stroke();ctx.beginPath();ctx.moveTo(-14,-9);ctx.lineTo(0,2);ctx.lineTo(14,-9);ctx.stroke()})}
    if(t>E.c_gob-.3)truck(tx,GY+18,1.5,{ph:t*5,gun:false});
    if(t>E.c_dos){const q2=eb((t-E.c_dos)/.4);tr(tx-28,GY-46,q2,0,()=>lewis(0,0,1.0,{}));tr(tx-62,GY-46,q2,0,()=>lewis(0,0,1.0,{}))}
    if(t>E.c_cart-.3){const q3=eb((t-E.c_cart+.3)/.4);for(let i=0;i<4;i++)tr(tx+20+i*14,GY-18-i*0,q3,0,()=>{ctx.fillStyle='#7a5a2a';rr(-7,-12,14,12,2);ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=1.4;ctx.stroke()})}
    for(let i=0;i<3&&t>E.c_gob;i++)soldier(tx-4-i*0,GY-4,0,{});
  });
  trigoFrente(c,t,.55,12,10);
  TG('PIDEN AYUDA AL GOBIERNO',180,90,13,'#3a6a8a','#fff',t,E.c_pid-.1,{out:E.c_gob-.1});
  TX('EL GOBIERNO ENVÍA',180,90,22,'#fff',t,E.c_gob-.05,{out:E.c_lewis-.2});
  TX('2 AMETRALLADORAS LEWIS',180,90,19,'#ffcf5a',t,E.c_dos-.05,{out:E.c_diez-.2,w:320});
  TX(fmtN(Math.round(countV(0,10000,t,E.c_diez,1.0)))+' CARTUCHOS',180,90,26,'#ffcf5a',t,E.c_diez-.05,{out:E.c_mayor-.2,w:330});
  slam('MAYOR MEREDITH',180,100,30,'#fff',t,E.c_mere,{stroke:INK,sw:7,sh:'rgba(255,150,60,.7)'})}

// S3 LA "BATALLA": los emús se dispersan en todas direcciones (profundidad)
const GRP=[{x:300,dz:0,vx:70,vz:-30},{x:330,dz:20,vx:-40,vz:80},{x:280,dz:-10,vx:120,vz:-45},{x:320,dz:10,vx:-75,vz:30},{x:340,dz:30,vx:20,vz:95},{x:290,dz:5,vx:90,vz:60}];
function s3(t,u){const c=camAt(u,[[0,160,350,1.05],[6,180,350,1.0],[10.3,180,320,1.0]]);
  paisaje(c,t,.6);
  const sp=cl((t-E.d_grupos)/3.2);
  const flock=(layer)=>{for(let i=0;i<14;i++){const g=GRP[i%6],e=eo(sp),bx=g.x+(i%3)*18,x=bx+g.vx*e*(1+i%2*.3),dz=g.dz+g.vz*e+(i%4)*3;if((dz>12)!==layer)continue;const s=.72+(dz+40)*.007;EM(x+Math.sin(t*3+i)*2*(1-e),GY+dz,s,t,i,{run:sp>0?1:.25,flip:g.vx<0&&sp>.3})}};
  capas(c,[{k:.8,fn:()=>flock(false)}]);
  world(c,()=>{for(let i=0;i<3;i++)soldier(30+i*34,GY+12+(i%2)*5,1.2,{aim:1,rim:'rgba(255,190,110,.8)'});lewis(150,GY+16,1.25,{});lewis(120,GY+22,1.15,{});
    if(t>E.d_disp){for(let k=0;k<14;k++){const tt=E.d_disp+k*.18;if(t>=tt&&t<tt+.1){ctx.fillStyle='rgba(255,230,140,'+(1-(t-tt)/.1)+')';ctx.beginPath();ctx.moveTo(188,GY-30);ctx.lineTo(232,GY-37);ctx.lineTo(188,GY-24);ctx.fill();const ty=GY-18+(k%5)*7;line(190,GY-28,330,ty,'rgba(255,220,120,.7)',1.4);for(let j=0;j<4;j++)smoke(330+R(k+j)*30,ty+8,t,tt+.02,6,'200,170,120',.7)}}}
    flock(true)});
  trigoFrente(c,t,.6,15,12);
  TX('NO ERAN UN BLANCO FÁCIL',180,90,22,'#fff',t,E.d_blanco-.05,{out:E.d_grupos-.15,w:320});
  TG('GRUPOS PEQUEÑOS',180,90,14,'#3a6a8a','#fff',t,E.d_grupos-.1,{out:E.d_dir-.1});
  TX('EN TODAS DIRECCIONES',180,90,22,'#ffcf5a',t,E.d_dir-.05,{out:E.d_disp-.15,w:320});
  TG('LOS SOLDADOS DISPARAN…',180,90,13,KHA,'#fff',t,E.d_disp-.1,{out:E.d_esc-.1});
  slam('¡ESCAPAN!',180,96,34,'#ffcf5a',t,E.d_esc,{stroke:INK,sw:7});
  // emú protagonista que corre hacia la cámara al final (para el dive)
  if(t>E.d_esc){const q=eio(cl((t-E.d_esc)/(T[4]-E.d_esc-.15)));EM(lerp(300,200,q),lerp(GY-10,GY+24,q),lerp(.8,2.1,q),t,3)}}

// S4 EL CAMIÓN: persecución con paralaje fuerte; "tampoco funcionó"
function s4(t,u){const sp=Math.max(0,1-cl((t-E.e_tamp)/1.2)),X=t=>100+Math.max(0,t-T[4])*60*(t<E.e_tamp?1:Math.max(.0,1-(t-E.e_tamp)/.9));
  const f=follow(tt=>[X(tt)+80,350],t,.25),c={x:f[0],y:350,z:1.08,r:Math.sin(t*9)*.004*sp};
  paisaje(c,t,.65);
  capas(c,[{k:.8,fn:()=>{for(let i=0;i<7;i++)EM(X(t)+170+i*26+(t-T[4])*(t<E.e_tamp?46:40)*(1+i%3*.1),GY+2+(i%3)*5,.6,t,i,{sil:'#2a1c18'})}}]);
  world(c,()=>{truck(X(t),GY+22,1.55,{ph:t*8*sp,gun:true});
    if(t>E.e_incl+.2){for(let k=0;k<3;k++)smoke(X(t)-50-k*5,GY-10,t,E.e_incl+.2+k*.25,8,'230,200,160',1.6)}
    if(t>E.e_tamp){for(let k=0;k<5;k++)smoke(X(t)+10+k*8,GY-52,t,E.e_tamp+k*.12,12,'90,90,90',1.6)}
    for(let i=0;i<6;i++)EM(X(t)+120+i*30+(t-T[4])*(t<E.e_tamp?60:75)*(1+i%3*.08),GY+14+(i%3)*8,.95,t,i,{});});
  trigoFrente(c,t,.65,21,10);
  TX('INCLUSO MONTARON',180,86,24,'#fff',t,E.e_incl-.05,{out:E.e_cam-.1});
  TG('UNA AMETRALLADORA EN UN CAMIÓN',180,86,12,KHA,'#fff',t,E.e_cam-.1,{out:E.e_tamp-.1});
  if(t>E.e_tamp+.5){const q=eb((t-E.e_tamp-.5)/.35);tr(180,295,q,-.04,()=>{ctx.fillStyle='#ff7b3a';rr(-100,-55,200,110,16);ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=3;ctx.stroke();txt('FALLÓ',0,2,50,INK,{wt:'900'})})}}

// S5 UN MES DESPUÉS: los soldados se van, los emús siguen comiendo (primer plano)
function s5(t,u){const c=camAt(u,[[0,200,350,1.05],[5.7,170,345,1.12]]);
  paisaje(c,t,.8);
  world(c,()=>{const q=cl((t-E.f_ret)/3.5);for(let i=0;i<5;i++)soldier(lerp(200,-40,eio(q))+i*26,GY+14+(i%2)*6,1.1,{flip:true,ph:t*8+i,col:'#140e12',rim:'rgba(255,150,80,.7)'});
    EM(250,GY+10,1.2,t,1,{run:.1,neck:4,sil:'#241812'});EM(305,GY+4,1.0,t,2,{run:.1,neck:4,sil:'#241812'})});
  // emú comiendo en primer plano (k alto)
  capas(c,[{k:1.35,fn:()=>{const b=Math.sin(t*3)*.15;EM(215,GY+60,2.5,t,0,{run:0,neck:2.9+b*1.5,col:'#6a4a36',rim:EMUR})}}]);
  trigoFrente(c,t,.8,27,10);
  if(t>E.f_mes-.2){const q=eb((t-E.f_mes+.2)/.4);tr(180,150,q,0,()=>{ctx.fillStyle=CR;rr(-70,-34,140,68,8);ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=3;ctx.stroke();ctx.fillStyle=RED;rr(-70,-34,140,18,8);ctx.fill();txt('NOVIEMBRE – DICIEMBRE',0,-25,9.5,'#fff',{wt:'900'});txt('1 MES',0,8,32,INK,{wt:'900'})})}
  TG('RETIRAN A LOS SOLDADOS',180,226,13,KHA,'#fff',t,E.f_ret-.1,{out:E.f_sig-.1});
  TX('LOS EMÚS SIGUEN',180,226,24,'#fff',t,E.f_sig-.05,{out:E.f_trigo+.5});
  TG('COMIÉNDOSE EL TRIGO',180,262,13,'#c9852a','#fff',t,E.f_trigo-.05)}

// S6 LAS RECOMPENSAS: lluvia de monedas en capas (el método que sí funcionó)
function s6(t,u){bg('#15101c','#2c1d2a');const c=camAt(u,[[0,180,320,1.0],[11.4,180,340,1.1]]);
  glow(180,300,200,'rgba(255,170,70,.25)',1);
  capas(c,[{k:.12,fn:()=>colinas(470,'#241624',18,.01,1,-700,1500)},{k:.4,fn:()=>{trigo(-400,1000,500,50,t,'#4a2a1c',70,4,{lw:1})}}]);
  const rain=(k,n,sz,seed,al)=>capas(c,[{k,fn:()=>{ctx.save();ctx.globalAlpha=al;for(let i=0;i<n;i++){const sp=40+R(seed+i)*60,x=-150+R(seed+i*3)*660,y=((t*sp+R(seed+i*7)*900)%900)-150;coin(x,y,sz*(.7+R(seed+i)*.6),t*6+i)}ctx.restore()}}]);
  if(t>E.g_rec-.2){rain(.6,16,5,30,.7);rain(1.0,14,8,60,1);rain(1.6,8,14,90,.85)}
  {const n=Math.floor(46*cl((t-E.g_57)/1.4)*(t>E.g_57?1:0));for(let i=0;i<n;i++){const row=Math.floor(Math.sqrt(i*1.2)),col=i-row*row/1.2;coin(110+((i*37)%140)+R(i)*6,500-(i%7)*5-Math.floor(i/7)*9,9,0)}}
  TX('RECOMPENSAS',180,92,34,'#ffcf5a',t,E.g_rec-.05,{out:E.g_res-.15,sh:'rgba(255,150,60,.7)'});
  TG('PARA CAZADORES',180,134,14,'#3a6a8a','#fff',t,E.g_caz-.05,{out:E.g_res-.15});
  slam('SÍ FUNCIONÓ',180,96,34,'#7be08a',t,E.g_res,{stroke:INK,sw:7,al:t<E.g_seis-.2?1:0});
  TG('6 MESES · 1934',180,150,14,CR,INK,t,E.g_seis-.05);
  if(t>E.g_57-.2)TX(fmtN(Math.round(countV(0,57034,t,E.g_57,1.2))),180,300,66,'#fff',t,E.g_57-.2,{sh:'rgba(255,150,60,.8)'});
  if(t>E.g_57)TG('RECOMPENSAS COBRADAS',180,352,14,'#c9852a','#fff',t,E.g_57+.3)}

// S7 CIERRE: debate ejército vs emús
function s7(t,u){const c={x:180+Math.sin(u*.8)*8,y:330,z:1.03,r:0};paisaje(c,t,.85,{cerca:true});
  const a=eb(cl((t-E.h_dime-.1)/.5)),b=eb(cl((t-E.h_dime-.5)/.5));
  world(c,()=>{ctx.fillStyle='rgba(20,10,10,.35)';ctx.fillRect(-100,GY-200,560,500);
    tr(95,GY+14,a*1.9,0,()=>soldier(0,0,1,{aim:.4,rim:'rgba(255,190,110,.9)'}));
    tr(268,GY+14,b*1.9,0,()=>EM(0,0,1,t,2,{run:.2,neck:.5,rim:EMUR}));
    txt('VS',181,GY-76,36,'#ffcf5a',{wt:'900',st:INK,sw:7})});
  TX('¿QUIÉN GANÓ ESTA GUERRA?',180,90,24,'#fff',t,E.h_dime-.05,{w:300});
  TG('EL EJÉRCITO',95,200,14,KHA,'#fff',t,E.h_ejer-.05);TG('LOS EMÚS',268,200,14,'#8a5a3a','#fff',t,E.h_emus-.05);
  if(t>E.h_com){const q=eb((t-E.h_com)/.45);tr(180,492,q,0,()=>{ctx.fillStyle='#fff';rr(-100,-26,200,52,26);ctx.fill();txt('COMENTA',10,1,22,INK);ctx.fillStyle=RED;rr(-90,-14,28,22,6);ctx.fill();poly([[-84,8],[-80,16],[-74,8]],RED)})}}
boot([s0,s1,s2,s3,s4,s5,s6,s7],TRS,{cap:{acc:'#ff9a3d'}});
