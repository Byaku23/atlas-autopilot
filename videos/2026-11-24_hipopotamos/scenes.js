// ===== Los hipopótamos de Escobar — escenas =====
const sl=(s,x,y,sz,col,t,ts,o={})=>slam(s,x,y,sz,col,t,ts,Object.assign({st:INK,sw:Math.max(6,sz*.18),sh:'rgba(0,0,0,.5)'},o));
const P_=(c,p)=>mapaPunto(c,p[0],p[1]);
const veil=(a,col='3,18,20')=>{ctx.save();ctx.fillStyle='rgba('+col+','+a+')';ctx.fillRect(0,0,360,640);ctx.restore()};
const VEC=['Costa Rica','Nicaragua','Honduras','Venezuela','Ecuador','Peru','Brazil','Guyana','Panama'];
function mundo(c,a=1,ca=.28){PF(c,['Colombia'],COL,ca*a,{b:'#fff',lw:1.3,ba:.9});PF(c,VEC,'#ffffff',.05*a,{b:'#fff',lw:.9,ba:.4})}
function pond(t,y0=330){bg('#0b3a38','#06201f');for(let i=0;i<5;i++){ctx.save();ctx.globalAlpha=.07;circ(60+i*70,y0+60+i*24,50,'#7df0c4');ctx.restore()}}
function iconos(c,pts,t,t0,n,s=.38){for(let i=0;i<n;i++){const k=eb(nb(t0+i*.12,t0+i*.12+.4,t));if(k<=0)continue;const [x,y]=P_(c,pts[i]);hipo(x,y,s*k,HIP,t,{ph:i})}}

// S0 GANCHO: un hipopótamo gigante emerge; salen cuatro
function s0(t,u){
  bg('#052b2e','#0a5a52');
  ctx.save();ctx.globalAlpha=.25;glow(180,300,180,'#7df0c4',.5);ctx.restore();
  const k=eo(nb(-.2,1.1,t)),big=2.0+.06*Math.sin(t*2);
  hipo(120,400+(1-k)*80,big,HIP,t,{sink:.5*(1-k)+.38,mouth:t>E.h_hip?.7*Math.abs(Math.sin((t-E.h_hip)*3)):0});
  agua(418,t,'rgba(10,80,76,.82)',3,300);agua(432,t+1,'rgba(5,50,50,.9)',2.2,300);
  TG('COLOMBIA',180,92,22,COL,INK,t,-.6,{out:E.h_sac-.2});
  TX('VA A',180,130,30,'#fff',t,E.h_col+.1,{w:340,out:E.h_sac+2.6});
  if(t>E.h_sac-.05&&t<E.h_cuatro-.3){sl('SACRIFICAR',180,196,44,RED,t,E.h_sac,{sh:'rgba(255,77,94,.6)'})}
  if(t>E.h_hip-.05)TX('HIPOPÓTAMOS',180,250,34,'#fff',t,E.h_hip-.05,{w:340,out:E.h_cuatro-.3});
  if(t>E.h_cuatro-.3){TX('TODO EMPEZÓ CON',180,98,22,'#fff',t,E.h_cuatro-.3,{w:340});
    for(let i=0;i<4;i++){const q=eb(nb(E.h_cuatro+i*.1,E.h_cuatro+i*.1+.35,t));if(q>0)hipo(50+i*86,478-Math.abs(Math.sin(t*3+i))*3,.62*q,HIP,t,{ph:i,dir:i%2?-1:1})}
    sl('4',180,200,80,GOLD,t,E.h_cuatro,{sh:'rgba(255,209,102,.7)'});shock(180,196,t,E.h_cuatro,'rgba(255,209,102,.9)',90,5,.8)}
}

// S1 1981: Hacienda Nápoles, un macho y tres hembras
function s1(t,u){
  const c=mapaCam(t,[[5.4,-74.2,4.6,19],[8.6,-74.5,5.5,36,eio],[12.0,NAP[0]+.02,NAP[1]-.02,95,eio]]);
  base(c);mundo(c,1,.22);
  const [px,py]=pin(c,NAP[0],NAP[1],RED,t,E.a_nap-1.0,5);
  TG('1981',180,92,24,GOLD,INK,t,E.a_1981-.5,{out:E.a_zoo-.2});
  TX('PABLO ESCOBAR',180,138,32,'#fff',t,E.a_esc-.1,{w:340,out:E.a_zoo-.2});
  if(t>E.a_macho-.1){TX('1 MACHO + 3 HEMBRAS',180,196,26,HIP,t,E.a_macho-.1,{w:340,out:E.a_zoo-.2})}
  if(t>E.a_zoo-.1){TX('SU ZOOLÓGICO PRIVADO',180,98,24,'#fff',t,E.a_zoo-.1,{w:340})}
  if(t>E.a_nap-.1){TG('HACIENDA NÁPOLES',cx_(px,70,290),py+34,15,RED,'#fff',t,E.a_nap-.1);shock(px,py,t,E.a_nap,'rgba(255,77,94,.9)',70,4,.8)}
  // los cuatro llegan a un estanque
  if(t>E.a_macho-.2){ctx.save();ctx.globalAlpha=.9*cl((t-E.a_macho+.2)*3);ctx.beginPath();ctx.ellipse(180,484,150,44,0,0,7);ctx.fillStyle='#0f6e6a';ctx.fill();ctx.strokeStyle='#bdf5ef';ctx.lineWidth=2;ctx.stroke();ctx.restore();
    const ev=[E.a_macho,E.a_tres,E.a_tres+.18,E.a_tres+.36],cols=['#6fb3ff',HIP,HIP,HIP];
    for(let i=0;i<4;i++){const q=eb(nb(ev[i],ev[i]+.4,t));if(q>0){hipo(54+i*84,490-(1-q)*30,.5*q,cols[i],t,{ph:i,dir:i%2?-1:1});if(i==0)TG('MACHO',72,452,11,'#6fb3ff',INK,t,ev[0]+.1)}}
    if(t>E.a_tres+.3)TG('3 HEMBRAS',226,452,11,HIP,INK,t,E.a_tres+.3)}
}

// S2 1993: muere; los hipopótamos se quedan (difícil moverlos)
function s2(t,u){
  pond(t);
  ctx.save();ctx.globalAlpha=.9;ctx.beginPath();ctx.ellipse(180,400,170,70,0,0,7);ctx.fillStyle='#0f6e6a';ctx.fill();ctx.strokeStyle='#bdf5ef';ctx.lineWidth=2;ctx.stroke();ctx.restore();
  for(let i=0;i<4;i++)hipo(56+i*82,400+Math.sin(i*2)*8,.55,i==0?'#6fb3ff':HIP,t,{ph:i,dir:i%2?-1:1,sink:.18});
  TG('1993',180,92,26,GOLD,INK,t,E.b_murio-.3,{out:E.b_quedaron-.2});
  TX('MUERE ESCOBAR',180,140,34,'#fff',t,E.b_murio-.15,{w:340,out:E.b_quedaron-.25});
  if(t>E.b_murio){ctx.save();ctx.globalAlpha=.35*(1-nb(E.b_quedaron-.2,E.b_quedaron,t));veil(.5);ctx.restore()}
  if(t>E.b_quedaron-.1)TX('LOS HIPOPÓTAMOS',180,98,26,'#fff',t,E.b_quedaron-.1,{w:340});
  if(t>E.b_quedaron+.2)TX('SE QUEDAN',180,146,38,HIP,t,E.b_quedaron+.2,{w:340});
  // camión que no puede
  if(t>E.b_dificil-1.7){const k=eio(nb(E.b_dificil-1.7,E.b_dificil-.7,t));const cx=lerp(-60,70,k);camion(cx,262,.9,t);
    if(t>E.b_dificil-.3){cruz(cx+10,262,16,RED,spring(t-E.b_dificil+.3,11,6));}
    TG('MOVERLOS: MUY DIFÍCIL',180,214,16,RED,'#fff',t,E.b_dificil-.5)}
}

// S3 escape al río Magdalena
function s3(t,u){
  const c=mapaCam(t,[[21.1,-74.4,6.3,55],[26.7,-74.2,6.5,62]]);
  base(c);mundo(c,1,.18);
  const k=eio(nb(E.c_escap-.2,E.c_mult+.4,t));
  ruta(c,MAG,1,'rgba(46,196,182,.55)',6,{});
  const hh=ruta(c,MAG,k,RIO,6,{});
  pin(c,NAP[0],NAP[1],RED,t,21.2,5);
  if(t>E.c_mag-.2){const [mx,my]=P_(c,[-74.3,6.62]);TG('RÍO MAGDALENA',cx_(mx+95,70,290),my-6,13,RIO,INK,t,E.c_mag-.2)}
  const ns=Math.floor(k*MAG.length*1.7);for(let i=0;i<ns&&i<12;i++){const f=i/12,pt=MAG[Math.min(MAG.length-1,Math.floor(f*MAG.length))];const [x,y]=P_(c,[pt[0]+(i%2?.05:-.05),pt[1]+(i%3-1)*.03]);const q=eb(cl((k*1.7-i/MAG.length*1)*3));if(q>0)hipo(x,y,.28*q,HIP,t,{ph:i,dir:i%2?-1:1})}
  if(t>E.c_sin-.1&&t<E.c_seca-.25){TX('SIN DEPREDADORES',180,98,26,'#fff',t,E.c_sin-.1,{w:340,out:E.c_seca-.3})}
  if(t>E.c_seca-.2){TX('NI TEMPORADA SECA',180,98,24,'#fff',t,E.c_seca-.2,{w:340,out:E.c_escap-.2})}
  if(t>E.c_escap-.1){TX('ESCAPAN AL RÍO',180,98,28,'#fff',t,E.c_escap-.1,{w:340,out:E.c_mult-.2});}
  if(t>E.c_mult-.1)sl('¡SE MULTIPLICAN!',180,110,30,RIO,t,E.c_mult,{sh:'rgba(46,196,182,.6)'});
}

// S4 2009: 28; Pepe; protestas; juez
function s4(t,u){
  pond(t);
  TG('2009',180,92,26,GOLD,INK,t,E.d_2009-.4,{out:E.d_pepe-.3});
  const v=Math.round(countV(0,28,t,E.d_28-.5,.9));
  if(t>E.d_2009-.2&&t<E.d_pepe-.2){TX('YA ERAN ~'+v,180,138,34,'#fff',t,E.d_2009-.2,{w:340});
    for(let i=0;i<28;i++){if(i>v)break;const x=34+(i%7)*48,y=240+Math.floor(i/7)*52;const q=eb(nb(0,.3,t-(E.d_28-.5+i*.03)));hipo(x,y,.3*q,HIP,t,{ph:i,dir:i%2?-1:1})}}
  if(t>E.d_pepe-.3){const q=nb(E.d_pepe-.3,E.d_pepe+.3,t);
    TX('PEPE, UN MACHO AGRESIVO',180,98,22,'#fff',t,E.d_pepe-.3,{w:340,out:E.d_prot-.3});
    if(t<E.d_prot-.2){hipo(180,350,1.5,HIPD,t,{sink:.1});mira(180,330,34,RED,eb(q));shock(180,330,t,E.d_pepe+.3,'rgba(255,77,94,.9)',80,5,.8)}}
  if(t>E.d_prot-.1&&t<E.d_juez-.2){TX('PROTESTAS',180,98,36,'#fff',t,E.d_prot-.1,{w:340,out:E.d_juez-.25});
    for(let i=0;i<5;i++){const q=eb(nb(E.d_prot+i*.12,E.d_prot+.5+i*.12,t));if(q>0){const x=44+i*68,y=380-Math.abs(Math.sin(t*5+i))*5;line(x,y,x,y+70,'#c9a26a',3);ctx.save();ctx.translate(x,y);ctx.scale(q,q);rr(-26,-34,52,34,3);ctx.fillStyle=CRM;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=2.4;ctx.stroke();txt(['NO','SALVEN','♥','JUSTICIA','NO'][i],0,-16,9,RED,{wt:'900'});ctx.restore()}}}
  if(t>E.d_juez-.1){TX('UN JUEZ',180,98,28,'#fff',t,E.d_juez-.1,{w:340});
    const k=spring(t-E.d_juez+.1,11,6);tr(180,300,k*1.1,0,()=>{rr(-60,-40,120,80,8);ctx.fillStyle=CRM;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=3;ctx.stroke();txt('⚖',0,-8,34,INK);txt('PROHIBIDO',0,24,15,RED,{wt:'900'})});
    if(t>E.d_prohi-.05){sl('PROHIBIDO DISPARARLES',180,420,20,RED,t,E.d_prohi,{sh:'rgba(255,77,94,.6)'});}}
}

// S5 hoy: 250, 2000 km², 1000 en 2035
function s5(t,u){
  const c=mapaCam(t,[[38.4,-74.6,6.5,70],[42.5,-74.4,6.8,52,eio],[48.6,-74.4,6.8,52]]);
  base(c);mundo(c,1,.18);
  const A=[[-74.95,5.85],[-74.55,5.75],[-74.15,6.3],[-74.0,7.05],[-73.7,7.2],[-73.75,7.5],[-74.3,7.0],[-74.55,6.5],[-74.95,6.2]];
  const pa=cl((t-E.e_km+.2)*2);poly(c,A,RIO,.35*pa*(.8+.2*Math.sin(t*5)),{b:'#bdf5ef',lw:2.2,dash:[6,4]});
  ruta(c,MAG,1,'rgba(46,196,182,.6)',4,{});
  const v=Math.round(countV(0,250,t,E.e_250-.5,1.0));
  TG('HOY',180,92,24,GOLD,INK,t,E.e_hoy-.2,{out:E.e_km});
  if(t>E.e_hoy)txt('~'+v,180,170,64,'#fff',{st:INK,sw:8,wt:'900'});
  if(t>E.e_250)TX('HIPOPÓTAMOS',180,218,26,HIP,t,E.e_250-.1,{w:340});
  if(t>E.e_km-.1){TG('2.000 km²',cx_(P_(c,[-74.3,6.5])[0],40,320),P_(c,[-74.3,6.5])[1],16,RIO,INK,t,E.e_km-.1)}
  if(t>E.e_sin-.2){ctx.save();ctx.globalAlpha=eo(nb(E.e_sin-.2,E.e_sin+.3,t))*.82;rr(20,300,320,200,14);ctx.fillStyle='#04181c';ctx.fill();ctx.strokeStyle='#7df0c4';ctx.lineWidth=2;ctx.stroke();ctx.restore();
    TX('SIN CONTROL',180,322,22,'#fff',t,E.e_sin-.1,{w:300});
    const k1=eo(nb(E.e_sin+.1,E.e_sin+.9,t)),k2=eo(nb(E.e_mil,E.e_mil+.9,t));
    const bh1=40*k1,bh2=105*k2;rr(80,480-bh1,70,bh1,5);ctx.fillStyle=HIP;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=2.4;ctx.stroke();
    rr(210,480-bh2,70,Math.max(bh2,1),5);ctx.fillStyle=RED;ctx.fill();ctx.stroke();
    txt('HOY',115,492,12,'#fff',{wt:'900'});if(k2>0)txt('2035',245,492,12,'#fff',{wt:'900'});
    if(k1>.5)txt('250',115,470-bh1,16,'#fff',{st:INK,sw:3,wt:'900'});if(k2>.6)txt('1.000',245,470-bh2,26,GOLD,{st:INK,sw:4,wt:'900'});}
}

// S6 2022: invasora; agua sucia; manatí; heridos; 23 niños
function s6(t,u){
  bg('#0b4a49','#06242a');
  const dirt=nb(E.f_agua-.2,E.f_agua+1.2,t);
  agua(300,t,'rgba('+Math.round(lerp(20,120,dirt))+','+Math.round(lerp(140,92,dirt))+','+Math.round(lerp(130,50,dirt))+',.55)',2.6,400);
  agua(318,t+1,'rgba('+Math.round(lerp(10,90,dirt))+','+Math.round(lerp(90,70,dirt))+','+Math.round(lerp(90,40,dirt))+',.7)',2.2,400);
  TG('2022',180,92,24,GOLD,INK,t,E.f_2022-.4,{out:E.f_agua-.4});
  if(t>E.f_inv-.2&&t<E.f_agua-.4){sl('ESPECIE INVASORA',180,150,30,RED,t,E.f_inv-.1,{sh:'rgba(255,77,94,.6)'});}
  if(t>E.f_2022-.1&&t<E.f_inv-.2)TX('DECLARADOS',180,138,34,'#fff',t,E.f_2022-.1,{w:340});
  hipo(180,300,1.5,HIP,t,{sink:.45,dir:1});
  if(t>E.f_agua-.15&&t<E.f_her-.2){TX('ENSUCIAN EL AGUA',180,98,26,'#fff',t,E.f_agua-.15,{w:340,out:E.f_mana-.2});
    for(let i=0;i<10;i++){const a=nb(E.f_agua,E.f_agua+1.3,t);const x=40+i*30,y=330+((t*14+i*37)%60);ctx.save();ctx.globalAlpha=.35*a;circ(x,y,5+(i%3)*2,'#6b4a1e');ctx.restore()}}
  if(t>E.f_mana-.15&&t<E.f_her-.2){const k=eio(nb(E.f_mana-.1,E.f_mana+1.8,t));TX('DESPLAZAN AL MANATÍ',180,98,24,'#fff',t,E.f_mana-.15,{w:340});manati(lerp(240,-50,k),430+Math.sin(t*3)*4,1.1,t,-1);TG('MANATÍ',cx_(lerp(240,-50,k),40,320),470,12,'#8aa0b4',INK,t,E.f_mana)}
  if(t>E.f_her-.1&&t<E.f_23-.25){TX('YA HAY HERIDOS',180,98,30,RED,t,E.f_her-.1,{w:340,out:E.f_23-.3});const q=spring(t-E.f_her,11,6);cruz(180,430,26*q,RED,1)}
  if(t>E.f_23-.2){TX('23 NIÑOS A LA ESCUELA',180,98,24,'#fff',t,E.f_23-.2,{w:340});
    const n=Math.min(23,Math.round(countV(0,23,t,E.f_23-.1,1.0)));bote(150,400,1.6,t,n);hipo(300,390,.9,HIP,t,{sink:.5,dir:-1});
    if(t>E.f_esc-.3)mira(300,370,22,RED,eb(nb(E.f_esc-.3,E.f_esc+.1,t)));
    if(t>E.f_23)txt(String(n),180,185,44,GOLD,{st:INK,sw:6,wt:'900'})}
}

// S7 siete países dijeron no; primeros diez
function s7(t,u){
  bg('#0b3a38','#04161a');
  TX('SE INTENTÓ LLEVARLOS',180,98,22,'#fff',t,E.g_siete-1.0,{w:340,out:E.g_nov-.3});
  if(t>E.g_siete-.1){sl('7 PAÍSES',180,150,40,GOLD,t,E.g_siete,{sh:'rgba(255,209,102,.6)'})}
  for(let i=0;i<7;i++){if(t<E.g_siete+i*.1||t>E.g_nov-.2)continue;const x=44+(i%4)*90+(i>3?45:0),y=270+Math.floor(i/4)*98,q=eb(nb(E.g_siete+i*.1,E.g_siete+i*.1+.35,t));
    ctx.save();ctx.translate(x,y);ctx.scale(q,q);circ(0,0,30,'#0f4a4a','#bdf5ef',2.4);txt(['EC','PE','FI','IN','MX','RD','SA'][i],0,2,16,'#fff',{wt:'900'});if(t>E.g_nin+.1*i)cruz(0,0,22,RED,1);ctx.restore()}
  if(t>E.g_nin-.1&&t<E.g_nov-.2)sl('NINGUNO ACEPTÓ',180,470,26,RED,t,E.g_nin,{sh:'rgba(255,77,94,.6)'});
  if(t>E.g_nov-.15){veil(eo(nb(E.g_nov-.15,E.g_nov+.2,t))*.92,'3,10,14');
    TG('NOVIEMBRE 2026',180,92,18,GOLD,INK,t,E.g_nov-.15);
    TX('EL GOBIERNO ANUNCIÓ',180,138,24,'#fff',t,E.g_nov+.1,{w:340});
    TX('SACRIFICARÁ A LOS',180,184,26,'#fff',t,E.g_sac-.1,{w:340});
    for(let i=0;i<10;i++){const q=eb(nb(E.g_sac+i*.06,E.g_sac+.35+i*.06,t));if(q>0){const x=52+(i%5)*64,y=330+Math.floor(i/5)*84;hipo(x,y,.5*q,HIP,t,{ph:i,dir:i%2?-1:1})}}
    if(t>E.g_sac+.8){sl('PRIMEROS 10',180,260,44,RED,t,E.g_sac+.8,{sh:'rgba(255,77,94,.7)'});}}
}

// S8 debate
function s8(t,u){
  bg('#0b2a2e','#04161a');
  ctx.save();ctx.fillStyle='rgba(255,77,94,.16)';ctx.fillRect(0,0,180,640);ctx.fillStyle='rgba(125,240,196,.16)';ctx.fillRect(180,0,180,640);ctx.restore();
  line(180,0,180,640,'rgba(255,255,255,.35)',2);
  TX('¿HAY QUE',180,100,28,'#fff',t,E.i_hay-.1,{w:340});
  if(t>E.i_sac-.05)TG('SACRIFICARLOS',92,196,15,RED,'#fff',t,E.i_sac-.05);
  if(t>E.i_salv-.05)TG('SALVARLOS',270,196,15,'#7df0c4',INK,t,E.i_salv-.05);
  const sq=Math.sin(t*3);
  hipo(112,340,1.75,HIP,t,{mouth:t>E.i_com?.4*Math.abs(sq):0});
  if(t>E.i_salv)sl('¿TÚ QUÉ PIENSAS?',180,430,26,GOLD,t,E.i_salv+.6,{sh:'rgba(255,209,102,.6)'});
  TG('COMENTA TU RESPUESTA',180,478,16,GOLD,INK,t,E.i_com-.05);
}
boot([s0,s1,s2,s3,s4,s5,s6,s7,s8],TRS,{cap:{acc:'#7df0c4'}});
