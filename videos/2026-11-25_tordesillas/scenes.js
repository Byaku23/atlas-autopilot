// ===== Tordesillas: la raya que repartió el mundo — escenas =====
const BRASIL=[[-46.5,-1.2],[-44.3,-2.3],[-41.5,-2.9],[-38.5,-3.7],[-35.3,-5.2],[-34.85,-7.5],[-35.2,-9.5],[-37.0,-11.5],[-38.5,-13],[-39.0,-16],[-39.7,-18.5],[-40.3,-20.3],[-41.5,-22.5],[-43.2,-23.1],[-44.6,-23.5],[-46.3,-24.0],[-46.5,-24.0]];
const G_ES=[[-6.0,37.0],[-12,34],[-30,30],[-50,26],[-66,21.5],[-72,19.6]];
const G_PT=[[-9.2,38.7],[-12,32],[-17,24],[-18,17],[-16,11],[-10,5.5],[-2,4.6]];

function calendario(x,y,s,k,dia,mes,anio){tr(x,y,k,0,()=>{ctx.save();ctx.scale(s,s);rr(-70,-78,140,156,12);ctx.fillStyle=CRM;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=4;ctx.stroke();
  rr(-70,-78,140,36,12);ctx.fillStyle=ESP;ctx.fill();ctx.stroke();txt(mes,0,-60,20,'#fff',{st:INK,sw:3,wt:'900'});txt(dia,0,-4,64,'#3a2a14',{wt:'900'});txt(anio,0,52,26,'#7a1f16',{wt:'900'});ctx.restore()})}
function flagE(x,y,s){ctx.save();ctx.translate(x,y);ctx.scale(s,s);rr(0,-18,26,18,2);ctx.fillStyle=ESP;ctx.fill();ctx.fillStyle=GOLD;ctx.fillRect(0,-13,26,8);ctx.strokeStyle=INK;ctx.lineWidth=2;rr(0,-18,26,18,2);ctx.stroke();ctx.beginPath();ctx.moveTo(0,-18);ctx.lineTo(0,10);ctx.stroke();ctx.restore()}

// S0 GANCHO: dos reyes dibujan una raya en el océano
function s0(t,u){
  const c=mapaCam(t,[[0,-40,14,3.0],[8.37,-38,12,3.4]]);
  base(c);
  const k1=nb(E.h_rep,E.h_rep+.6,t);mitades(c,k1);
  if(t<E.h_raya+1){ctx.save();ctx.globalAlpha=.55+.25*Math.sin(t*6);meridiano(c,LON_T,1,GOLD,2,{dash:[7,6],t});ctx.restore()}
  meridiano(c,LON_T,nb(E.h_raya-.1,E.h_raya+.9,t),GOLD,3.6,{glow:true,t});
  if(t>E.h_raya&&t<E.h_raya+.4)shock(...P_(c,[LON_T,10]),t,E.h_raya,'rgba(255,209,102,.9)',60,4,.6);
  if(t>E.h_rep+.2){const [lx,ly]=P_(c,[-82,26]);TG('ESPAÑA',cx_(lx,40,320),ly,14,ESP,'#fff',t,E.h_rep+.2);const [px,py]=P_(c,[-12,31]);TG('PORTUGAL',cx_(px,40,320),py,14,POR,INK,t,E.h_rep+.5)}
  if(t>E.h_dos-.1){const a=eb(nb(E.h_dos-.1,E.h_dos+.4,t))*(1-nb(E.h_mundo+.2,E.h_mundo+.6,t));if(a>0){tr(70,236,a,0,()=>rey(0,0,.95,ESP,GOLD,t,0));tr(290,236,a,0,()=>rey(0,0,.95,POR,GOLD,t,2))}}
  TG('1494',180,88,24,GOLD,INK,t,-.6,{out:E.h_dos-.28});
  TX('TORDESILLAS',180,142,36,'#fff',t,-.5,{w:340,out:E.h_dos-.28});
  TX('DOS REYES',180,96,34,'#fff',t,E.h_dos-.1,{w:340,out:E.h_raya-.28});
  TX('UNA RAYA',180,96,36,GOLD,t,E.h_raya-.1,{w:340,out:E.h_rep-.28});
  TX('EN EL OCÉANO',180,146,28,'#fff',t,E.h_oceano-.1,{w:340,out:E.h_rep-.28});
  TX('SE REPARTIERON',180,96,30,'#fff',t,E.h_rep-.1,{w:340,out:E.h_quien-.28});
  TX('EL MUNDO',180,146,42,GOLD,t,E.h_mundo-.1,{w:340,out:E.h_quien-.28});
  TX('¿QUIÉN LES DIO',180,96,28,'#fff',t,E.h_quien-.05,{w:340});
  TX('ESE DERECHO?',180,146,42,ESP,t,E.h_derecho-.2,{w:340});
  if(t>E.h_derecho)shock(180,320,t,E.h_derecho,'rgba(255,90,78,.9)',120,5,.9);
}

// S1 España y Portugal compiten
function s1(t,u){
  const c=mapaCam(t,[[8.37,-38,13,3.2],[16.73,-38,21,3.5]]);
  base(c);
  const kE=eio(nb(E.a_colon,E.a_am+1.3,t)),hE=ruta(c,G_ES,kE,ESP,4,{dash:kE<1?[8,5]:null,t});
  if(hE){barco(hE[0],hE[1]-4,1.0,ESP,t,-1);if(t>E.a_band)flagE(hE[0]-4,hE[1]-34,.9)}
  const kP=eio(nb(E.a_port,E.a_afr+.9,t)),hP=ruta(c,G_PT,kP,POR,4,{dash:kP<1?[8,5]:null,t});
  if(hP)barco(hP[0],hP[1]-4,1.0,POR,t,1);
  if(t>E.a_am){const [x,y]=pin(c,-72,19.6,GOLD,t,E.a_am,6);TG('AMÉRICA',cx_(x,40,320),y+22,13,GOLD,INK,t,E.a_am)}
  if(t>E.a_esp-.1){const [x,y]=P_(c,[-6,37]);TG('ESPAÑA',cx_(x+34,40,320),y-30,13,ESP,'#fff',t,E.a_esp-.1)}
  if(t>E.a_port-.1){const [x,y]=P_(c,[-9.2,38.7]);TG('PORTUGAL',cx_(x-34,40,320),y+4,13,POR,INK,t,E.a_port)}
  if(t>E.a_afr){const [x,y]=P_(c,[-16,15]);TG('COSTA DE ÁFRICA',cx_(x+34,70,300),y,12,POR,INK,t,E.a_afr)}
  TG('1492',180,88,24,GOLD,INK,t,E.a_colon-.15,{out:E.a_band-.4});
  TX('COLÓN',180,138,36,'#fff',t,E.a_colon-.1,{w:340,out:E.a_band-.4});
  TX('CON LA BANDERA',180,96,24,'#fff',t,E.a_band-.3,{w:340,out:E.a_port-.2});
  TX('DE ESPAÑA',180,138,38,ESP,t,E.a_esp-.2,{w:340,out:E.a_port-.2});
  TX('Y PORTUGAL',180,96,30,POR,t,E.a_port-.1,{w:340,out:E.a_afr+.6});
  TX('YA DOMINABA ÁFRICA',180,138,22,'#fff',t,E.a_afr-.7,{w:340,out:E.a_afr+.6});
  TG('NO QUERÍA QUEDARSE FUERA',180,96,15,POR,INK,t,E.a_afr+.7);
  if(t>E.a_fuera){const [x,y]=P_(c,[-34,24]);shock(x,y,t,E.a_fuera,'rgba(255,209,102,.9)',80,5,.8)}
}

// S2 el papa traza la primera línea
function s2(t,u){
  const c=mapaCam(t,[[16.73,-30,18,3.4],[26.4,-27,16,4.6]]);
  base(c);
  const kb=nb(E.b_linea,E.b_linea+1,t);
  mitad(c,-182,LON_B,ESP,.22*nb(E.b_linea+.7,E.b_linea+1.4,t));
  meridiano(c,LON_B,kb,PAPA,3.6,{glow:true,t});
  if(t>E.b_cien-.1){const [x,y]=pin(c,CVERDE[0],CVERDE[1],GOLD,t,E.b_cien-.1,5.5);
    const kr=eio(nb(E.b_cien,E.b_leguas+.8,t)),h=ruta(c,[CVERDE,[LON_B,CVERDE[1]]],kr,GOLD,4);
    if(h){ctx.save();ctx.translate(h[0],h[1]);ctx.rotate(h[2]);ctx.beginPath();ctx.moveTo(9,0);ctx.lineTo(-5,-8);ctx.lineTo(-5,8);ctx.closePath();ctx.fillStyle=GOLD;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=2;ctx.stroke();ctx.restore()}
    if(t>E.b_leguas){const [mx,my]=P_(c,[(CVERDE[0]+LON_B)/2,CVERDE[1]]);TG('100 LEGUAS',cx_(mx,50,310),my-24,14,GOLD,INK,t,E.b_leguas)}
    if(t>E.b_cabo){TG('CABO VERDE',cx_(x,50,310),y+22,13,'#fff',INK,t,E.b_cabo);shock(x,y,t,E.b_cabo,'rgba(255,209,102,.9)',70,4,.7)}}
  if(t>E.b_papa-.1){const a=eb(nb(E.b_papa-.1,E.b_papa+.4,t));tr(58,246,a,0,()=>papa(0,0,.95,t))}
  if(t>E.b_trazo&&t<E.b_linea+.6){const [x,y]=P_(c,[LON_B,60]);const a=nb(E.b_trazo,E.b_trazo+.5,t);ctx.save();ctx.globalAlpha=a;line(70,250,cx_(x,100,300),160,rgba(PAPA,.7),2);ctx.restore()}
  TX('EL PAPA',180,96,34,'#fff',t,E.b_papa-.1,{w:340,out:E.b_espn-.28});
  TX('ALEJANDRO VI',180,146,34,PAPA,t,E.b_alej-.1,{w:340,out:E.b_espn-.28});
  TG('ERA ESPAÑOL',180,96,22,ESP,'#fff',t,E.b_espn-.05,{out:E.b_trazo-.28});
  TX('PRIMERA LÍNEA',180,96,32,'#fff',t,E.b_trazo-.1,{w:340,out:E.b_cien-.32});
  TG('1493',180,150,26,GOLD,INK,t,E.b_1493-.1,{out:E.b_cien-.32});
  if(t>E.b_1493)shock(180,150,t,E.b_1493,'rgba(255,209,102,.8)',60,4,.6);
  TX('100 LEGUAS',180,96,44,GOLD,t,E.b_cien-.1,{w:340});
  TX('AL OESTE DE CABO VERDE',180,148,19,'#fff',t,E.b_leguas+.4,{w:340});
}

// S3 Portugal protesta, Tordesillas, la raya se mueve
function s3(t,u){
  const c=mapaCam(t,[[27.32,-27,16,4.6],[29.4,-27,16,4.6],[31.6,-5,41,6.0,eio],[33.6,-5,41,6.0],[35.4,-35,12,3.2,eio],[39.04,-35,12,3.2]]);
  base(c);
  const km=eio(nb(E.c_movio+.2,E.c_370+.9,t)),lon=lerp(LON_B,LON_T,km);
  if(km<=0)meridiano(c,LON_B,1,PAPA,3.6,{glow:true,t});
  else{ctx.save();ctx.globalAlpha=.4;meridiano(c,LON_B,1,PAPA,2,{dash:[6,6],t});ctx.restore();meridiano(c,lon,1,mixc(PAPA,GOLD,km),3.8,{glow:true,t})}
  if(km>=1){mitad(c,-182,LON_T,ESP,.27*nb(E.c_370+.9,E.c_370+1.4,t));mitad(c,LON_T,172.5,POR,.25*nb(E.c_370+.9,E.c_370+1.4,t))}
  if(t>E.c_tord-.1){const [x,y]=pin(c,TORD[0],TORD[1],GOLD,t,E.c_tord-.1,6);TG('TORDESILLAS',cx_(x,50,310),y+22,12,GOLD,INK,t,E.c_tord)}
  if(t>E.c_verde-.6){const [x,y]=pin(c,CVERDE[0],CVERDE[1],'#fff',t,E.c_verde-.6,4.5);if(t>E.c_verde)shock(x,y,t,E.c_verde,'rgba(255,255,255,.9)',60,3,.6)}
  const ap=eb(nb(E.c_prot-.1,E.c_prot+.35,t))*(1-nb(E.c_siete+.15,E.c_siete+.5,t));
  if(ap>0){tr(70,262,ap,0,()=>rey(0,0,.95,POR,GOLD,t,2));tr(206,196,ap,0,()=>bocadillo(0,0,176,58,'rgba(20,110,84,.96)',1,-60));
    tr(206,196,ap,0,()=>{txt('¡NO ESTOY',0,-8,16,'#fff',{st:INK,sw:3,wt:'900'});txt('DE ACUERDO!',0,12,16,'#fff',{st:INK,sw:3,wt:'900'})})}
  const ac=eb(nb(E.c_siete-.1,E.c_siete+.4,t))*(1-nb(E.c_tord-.4,E.c_tord-.05,t));
  if(ac>0){calendario(180,330,1.15,ac,'7','JUNIO',t>E.c_1494-.1?'1494':'');if(t>E.c_1494-.1&&t<E.c_1494+.3)shock(180,330,t,E.c_1494-.1,'rgba(255,90,78,.9)',90,4,.5)}
  TX('PORTUGAL',180,96,38,POR,t,E.c_prot-.15,{w:340,out:E.c_siete-.28});
  TX('PROTESTÓ',180,146,40,'#fff',t,E.c_prot-.1,{w:340,out:E.c_siete-.28});
  TX('TORDESILLAS',180,96,34,'#fff',t,E.c_tord-.15,{w:340,out:E.c_movio-.28});
  TX('LA RAYA',180,96,30,'#fff',t,E.c_raya-.1,{w:340,out:E.c_370-.05});
  TX('SE MOVIÓ',180,146,44,GOLD,t,E.c_movio-.1,{w:340,out:E.c_370-.05});
  if(t>E.c_370-.1){const v=countV(100,370,t,E.c_370,.9),e=eb(nb(E.c_370-.1,E.c_370+.3,t));tr(180,108,e,0,()=>txt(fmtN(v,0),0,0,60,GOLD,{st:INK,sw:7,wt:'900'}))}
  TX('LEGUAS AL OESTE',180,160,18,'#fff',t,E.c_leguas-.1,{w:340});
  TX('DE CABO VERDE',180,184,22,GOLD,t,E.c_verde-.4,{w:340});
}

// S4 un lado, el otro, nadie sabía medir
function s4(t,u){
  const c=mapaCam(t,[[39.04,-35,12,3.2],[47.95,-33,6,3.4]]);
  base(c);
  mitad(c,LON_T,172.5,POR,.26*nb(E.d_lado,E.d_port+.3,t));mitad(c,-182,LON_T,ESP,.27*nb(E.d_otro,E.d_esp+.3,t));
  const w=nb(E.d_nadie,E.d_nadie+.8,t)*1.6;
  if(t>E.d_aprox-.2){const a=nb(E.d_aprox-.2,E.d_aprox+.4,t);ctx.save();mitad(c,LON_T-4.5,LON_T+4.5,'#ffffff',.2*a*(.7+.3*Math.sin(t*5)),{lw:1.6,b:'#ffffff',dash:[5,5],ba:.8*a});ctx.restore()}
  meridiano(c,LON_T,1,GOLD,3.4,{glow:true,wob:w,t});
  if(t>E.d_port-.1){const [x,y]=P_(c,[-18,24]);TG('PORTUGAL',cx_(x,40,320),y,14,POR,INK,t,E.d_port-.1);tr(cx_(x,40,320),y-52,eb(nb(E.d_port-.1,E.d_port+.4,t)),0,()=>rey(0,0,.7,POR,GOLD,t,2))}
  if(t>E.d_esp-.1){const [x,y]=P_(c,[-76,24]);TG('ESPAÑA',cx_(x,40,320),y,14,ESP,'#fff',t,E.d_esp-.1);tr(cx_(x,40,320),y-52,eb(nb(E.d_esp-.1,E.d_esp+.4,t)),0,()=>rey(0,0,.7,ESP,GOLD,t,0))}
  if(t>E.d_nadie-.1){const e=eb(nb(E.d_nadie-.1,E.d_nadie+.4,t));const [bx,by]=P_(c,[-34,-12]);tr(bx,by,e,0,()=>barco(0,0,1.1,'#fff',t,1));
    const b=Math.sin(t*3)*3;tr(bx,by-52+b,e,0,()=>{bocadillo(0,0,44,40,'rgba(16,40,70,.95)',1,0);txt('?',0,3,26,GOLD,{st:INK,sw:4,wt:'900'})})}
  TX('UN LADO',180,96,34,'#fff',t,E.d_lado-.1,{w:340,out:E.d_otro-.28});
  TX('PORTUGAL',180,146,42,POR,t,E.d_port-.1,{w:340,out:E.d_otro-.28});
  TX('EL OTRO',180,96,34,'#fff',t,E.d_otro-.1,{w:340,out:E.d_nadie-.28});
  TX('ESPAÑA',180,146,42,ESP,t,E.d_esp-.1,{w:340,out:E.d_nadie-.28});
  TX('NADIE SABÍA',180,96,32,'#fff',t,E.d_nadie-.1,{w:340,out:E.d_aprox-.6});
  TX('MEDIR LA LONGITUD',180,146,28,GOLD,t,E.d_medir-.1,{w:340,out:E.d_aprox-.6});
  TX('RAYA SOLO',180,96,32,'#fff',t,E.d_aprox-.2,{w:340});
  TX('APROXIMADA',180,146,42,GOLD,t,E.d_aprox-.1,{w:340});
}

// S5 Brasil queda del lado portugués
function s5(t,u){
  const c=mapaCam(t,[[47.93,-33,6,3.4],[50.2,-45,-11,5.2,eio],[55.27,-45,-12,5.4]]);
  base(c);
  mitades(c,.8);
  meridiano(c,LON_T,1,GOLD,3.6,{glow:true,t});
  const k=eo(nb(E.e_pedazo,E.e_pedazo+.7,t)),pl=1+.25*Math.sin(t*5)*nb(E.e_quedo,E.e_quedo+.5,t);
  gpoly(c,BRASIL,POR,.6*k*(pl>1?1:.9),{lw:2.6,b:'#d8fff0',ba:.95*k});
  if(t>E.e_quedo-.1){const [x,y]=P_(c,[-40.5,-11]);TG('LADO PORTUGUÉS',cx_(x+30,70,300),y,12,POR,INK,t,E.e_quedo-.1);if(t>E.e_quedo)shock(x,y,t,E.e_quedo,'rgba(39,211,162,.9)',80,4,.7)}
  if(t>E.e_port2-.1){const [x,y]=P_(c,[-47,-14]);const a=eb(nb(E.e_port2-.1,E.e_port2+.4,t));tr(cx_(x-40,60,300),y-70,a,0,()=>{bocadillo(0,0,110,46,'rgba(20,110,84,.96)',1,24);txt('¡OLÁ!',0,6,22,'#fff',{st:INK,sw:4,wt:'900'})})}
  TX('JUSTO AHÍ',180,96,36,'#fff',t,E.e_justo-.1,{w:340,out:E.e_pedazo-.28});
  TX('UN PEDAZO DE',180,96,24,'#fff',t,E.e_pedazo-.1,{w:340,out:E.e_eso-.28});
  TX('SUDAMÉRICA',180,140,40,GOLD,t,E.e_sud-.1,{w:340,out:E.e_eso-.28});
  TX('POR ESO EN',180,96,26,'#fff',t,E.e_eso-.1,{w:340});
  TX('BRASIL',180,140,50,POR,t,E.e_brasil-.1,{w:340});
  TX('SE HABLA PORTUGUÉS',180,196,24,'#fff',t,E.e_habla-.1,{w:340,hl:[2],hc:POR});
}

// S6 Zaragoza 1529: la segunda línea y 350.000 ducados
function s6(t,u){
  const c=mapaCam(t,[[55.27,-45,-12,5.4],[56.0,-45,-12,5.4],[57.6,60,5,2.4,eio],[59.5,125,-2,3.0,eio],[68.85,128,-3,3.2]]);
  base(c);
  const va=1-nb(E.f_prob,E.f_prob+.8,t);
  if(va>0){ctx.save();ctx.globalAlpha=va;mitades(c,.8);meridiano(c,LON_T,1,GOLD,3.6,{glow:true,t});ctx.restore()}
  const mk=nb(E.f_prob-.1,E.f_prob+.5,t);
  if(t>E.f_prob-.1){const [x,y]=pin(c,MOLU[0],MOLU[1],GOLD,t,E.f_prob-.1,6);TG('MOLUCAS',cx_(x,50,310),y+22,13,GOLD,INK,t,E.f_prob)}
  const kz=nb(E.f_zar+.6,E.f_linea+.4,t);
  if(kz>0){mitad(c,LON_Z,172.5,ESP,.26*kz);mitad(c,40,LON_Z,POR,.22*kz);meridiano(c,LON_Z,kz,GOLD,3.8,{glow:true,t})}
  if(t>E.f_linea+.5){const [x,y]=P_(c,[LON_Z,-30]);TG('PACÍFICO · ESPAÑA',cx_(x+60,70,300),y,12,ESP,'#fff',t,E.f_linea+.5)}
  // dinero
  if(t>E.f_pago-.1){const a=eb(nb(E.f_pago-.1,E.f_pago+.4,t));tr(52,330,a,0,()=>rey(0,0,.85,POR,GOLD,t,2));tr(308,330,a,0,()=>rey(0,0,.85,ESP,GOLD,t,0));
    if(t>E.f_350-.3&&t<E.f_islas){for(let i=0;i<7;i++){const f=((t-E.f_350+.3)*.9+i/7)%1;const x=lerp(80,280,f),y=330-Math.sin(f*Math.PI)*50;moneda(x,y,1,t,i)}}}
  if(t>E.f_islas-.1){const [x,y]=P_(c,MOLU);for(let i=0;i<8;i++){const a=eb(nb(E.f_islas+i*.05,E.f_islas+.5+i*.05,t));clavo(x+(i%4-1.5)*12,y-18-Math.floor(i/4)*14,1.7*a,t,i)}}
  if(t>E.f_esp-.1){const [x,y]=P_(c,MOLU);TG('ISLAS DE LAS ESPECIAS',cx_(x,80,280),y+44,12,'#ffb347',INK,t,E.f_esp-.1);shock(x,y,t,E.f_esp,'rgba(255,179,71,.9)',70,4,.7)}
  TX('AL OTRO LADO',180,96,30,'#fff',t,E.tr6+.08,{w:340,out:E.f_prob-.28});
  TX('DEL MUNDO',180,146,40,GOLD,t,E.f_lado-.15,{w:340,out:E.f_prob-.28});
  TX('EL PROBLEMA',180,96,32,'#fff',t,E.f_prob-.1,{w:340,out:E.f_1529-.2});
  TX('VOLVIÓ',180,146,46,ESP,t,E.f_volvio-.1,{w:340,out:E.f_1529-.2});
  if(t>E.f_1529-.1&&t<E.f_linea-.2)sl('1529',180,104,52,GOLD,t,E.f_1529-.1);
  TG('TRATADO DE ZARAGOZA',180,152,14,'#fff',INK,t,E.f_zar-.1,{out:E.f_linea-.32});
  TX('SEGUNDA LÍNEA',180,96,32,GOLD,t,E.f_linea-.15,{w:340,out:E.f_pago-.28});
  TX('PORTUGAL PAGÓ',180,96,30,POR,t,E.f_pago-.1,{w:340,out:E.f_islas-.28});
  if(t>E.f_350-.1&&t<E.f_islas-.1){const v=countV(0,350000,t,E.f_350,.8),e=eb(nb(E.f_350-.1,E.f_350+.3,t));tr(180,152,e,0,()=>txt(fmtN(v,0),0,0,42,GOLD,{st:INK,sw:6,wt:'900'}))}
  TG('DUCADOS',180,198,18,GOLD,INK,t,E.f_ducados-.1,{out:E.f_islas-.28});
  TX('POR LAS ISLAS DE',180,96,22,'#fff',t,E.f_islas-.1,{w:340});
  TX('LAS ESPECIAS',180,140,42,'#ffb347',t,E.f_esp-.15,{w:340});
}

// S7 debate
function s7(t,u){
  const c=mapaCam(t,[[68.85,-30,12,3.0],[83.13,-30,12,3.2]]);
  base(c,{dim:.5});mitades(c,1);meridiano(c,LON_T,1,GOLD,3,{t});
  veil(.3);
  if(t>E.g_pueblos-.1){for(let i=0;i<7;i++){const a=eb(nb(E.g_pueblos-.1+i*.07,E.g_pueblos+.4+i*.07,t));const [x,y]=P_(c,[-70+(i%4)*4,3-Math.floor(i/4)*5]);tr(x,y+8,a,0,()=>persona(0,0,.42,'#d9a066',t,i))}
    if(t>E.g_existian-.3&&t<E.g_practico-.2){const e=eb(nb(E.g_existian-.3,E.g_existian+.2,t));const [x,y]=P_(c,[-70,14]);tr(x,y-26,e,0,()=>{bocadillo(0,0,38,34,'rgba(16,40,70,.95)',1,0);txt('?',0,3,22,GOLD,{st:INK,sw:3,wt:'900'})})}}
  TX('DOS REINOS REPARTIERON',180,96,24,'#fff',t,E.g_reinos-.1,{w:340,out:E.g_practico-.32});
  TX('TIERRAS DE PUEBLOS',180,134,27,GOLD,t,E.g_pueblos-.15,{w:340,out:E.g_practico-.32});
  TX('QUE NI SABÍAN QUE EXISTÍAN',180,180,19,'#fff',t,E.g_existian-.9,{w:340,out:E.g_practico-.32});
  if(t>E.g_practico-.1){const a=eb(nb(E.g_practico-.1,E.g_practico+.4,t));tr(180,160,a,0,()=>{bocadillo(0,0,322,84,'rgba(20,110,84,.96)',1,-60);txt('¿ACUERDO PRÁCTICO',0,-14,20,'#fff',{st:INK,sw:4,wt:'900'});txt('PARA EVITAR GUERRAS?',0,14,20,'#d8fff0',{st:INK,sw:4,wt:'900'})})}
  if(t>E.g_absurdo-.1){const a=eb(nb(E.g_absurdo-.1,E.g_absurdo+.4,t));tr(180,290,a,0,()=>{bocadillo(0,0,322,84,'rgba(150,30,40,.96)',1,60);txt('¿REPARTO ABSURDO',0,-14,20,'#fff',{st:INK,sw:4,wt:'900'});txt('DEL MUNDO?',0,14,20,'#ffd6d2',{st:INK,sw:4,wt:'900'})})}
  if(t>E.g_practico)shock(180,160,t,E.g_practico,'rgba(39,211,162,.9)',80,4,.6);
  if(t>E.g_absurdo)shock(180,290,t,E.g_absurdo,'rgba(255,90,78,.9)',80,4,.6);
  if(t>E.g_piensas-.1)sl('¿TÚ QUÉ PIENSAS?',180,420,30,GOLD,t,E.g_piensas,{sh:'rgba(255,209,102,.6)'});
  TG('COMENTA TU RESPUESTA',180,478,16,GOLD,INK,t,E.g_com-.05);
}

boot([s0,s1,s2,s3,s4,s5,s6,s7],TRS,{cap:{acc:'#ffd166'}});
