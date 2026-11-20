// ===== ¿Cómo perdió México la mitad de su territorio? — escenas =====
const sl=(s,x,y,sz,col,t,ts,o={})=>slam(s,x,y,sz,col,t,ts,Object.assign({st:INK,sw:Math.max(6,sz*.18),sh:'rgba(255,159,28,.5)'},o));
const P_=(c,p)=>mapaPunto(c,p[0],p[1]);
const veil=(a)=>{ctx.save();ctx.fillStyle='rgba(4,10,28,'+a+')';ctx.fillRect(0,0,360,640);ctx.restore()};
const MXN=['Mexico'],USN=['United States of America','United States'];
// México en verde (siempre) y EE. UU. por estados
function mundo(c,o={}){
  const a=o.a===undefined?1:o.a;
  PF(c,MXN,MX,.36*a*(o.mx===undefined?1:o.mx),{b:'#fff',lw:1.5,ba:.9});
  PF(c,['Canada','Cuba','Guatemala','Belize'],null,0,{ba:.35,lw:.8});
  SF(c,null,(e)=>CES_S.includes(e.n)?o.ces:(e.n==='Texas'?o.tx:US),(o.us===undefined?.2:o.us)*a,{b:'#fff',lw:1.1,ba:.7});
}

// S0 GANCHO: México + territorio cedido -> el cedido cambia de color
function s0(t,u){
  const c=mapaCam(t,[[0,-104,31,9.4],[5.4,-105,32,11]]);
  base(c);
  const k=eo(nb(E.h_perdio,E.h_perdio+.9,t));
  const ces=mixc(MX,CES,k);
  mundo(c,{ces,tx:US});
  // las cinco regiones cedidas con más cuerpo
  SF(c,CES_S,ces,.28+.2*k,{b:mixc('#ffffff',CES,k),lw:1.6,ba:1});
  if(t>E.h_perdio){const [x,y]=P_(c,[-112,36]);shock(x,y,t,E.h_perdio,'rgba(255,159,28,.95)',110,5,.9);burst(x,y,t,E.h_perdio,[CES,'#fff',RED],26,150,.9,3)}
  TG('1848',180,90,24,GOLD,INK,t,E.h_1848-.05,{out:E.h_pas+.8});
  TX('MÉXICO',180,138,42,MX,t,E.h_mex-.1,{w:340,out:E.h_perdio-.1});
  if(t>E.h_perdio-.05)TX('MÉXICO PERDIÓ',180,138,32,'#fff',t,E.h_perdio-.05,{w:340});
  if(t>E.h_mitad-.05)sl('MÁS DE LA MITAD',180,200,34,RED,t,E.h_mitad,{sh:'rgba(255,77,94,.6)'});
  TG('¿CÓMO PASÓ?',180,442,20,GOLD,INK,t,E.h_pas-.05);
}

// S1 1845: Texas y la frontera (Nueces o Bravo)
function s1(t,u){
  const c=mapaCam(t,[[5.3,-105,32,11],[8.5,-99.5,29.3,22],[16.7,-99.5,29.3,22.6]]);
  base(c);
  const tk=eo(nb(E.a_tx-.1,E.a_tx+.7,t));
  mundo(c,{ces:CES,tx:mixc(US,TXC,tk),us:.2});
  SF(c,['Texas'],TXC,.34*tk,{b:'#fff',lw:1.8,ba:1});
  if(t>E.a_tx){const [x,y]=P_(c,[-99.3,31.2]);shock(x,y,t,E.a_tx,'rgba(197,139,255,.95)',90,5,.9);burst(x,y,t,E.a_tx,[TXC,'#fff',US],24,130,.9,3)}
  const pn=eio(nb(E.a_nueces-.1,E.a_nueces+1.0,t)),pb=eio(nb(E.a_bravo-.1,E.a_bravo+.9,t));
  const hn=ruta(c,sm(NUECES),pn,GOLD,3.6,{dash:[7,5],t}),hb=ruta(c,sm(BRAVO),pb,'#7ef0b0',3.6,{dash:[7,5],t});
  if(hn)circ(hn[0],hn[1],4,GOLD,'#fff',1.5);if(hb)circ(hb[0],hb[1],4,'#7ef0b0','#fff',1.5);
  if(t>E.a_nueces)TG('RÍO NUECES',cx_(268,50,320),338,13,'rgba(6,16,36,.9)',GOLD,t,E.a_nueces+.4);
  if(t>E.a_bravo)TG('RÍO BRAVO',cx_(96,50,320),352,13,'rgba(6,16,36,.9)','#7ef0b0',t,E.a_bravo+.4);
  TG('1845',180,96,22,GOLD,INK,t,E.a_1845-.05,{out:E.a_tx+.9});
  TX('EE. UU. ANEXA',180,100,28,'#fff',t,E.a_tx-.4,{w:340,out:E.a_front-.2});
  if(t>E.a_tx-.05)TX('TEXAS',180,146,48,TXC,t,E.a_tx-.05,{w:340,out:E.a_front-.2});
  if(t>E.a_front-.1){TX('¿DÓNDE ESTÁ',180,98,26,'#fff',t,E.a_front-.35,{w:340});TX('LA FRONTERA?',180,142,36,RED,t,E.a_front-.1,{w:340})}
}

// S2 1846: tropas, choque, guerra
function s2(t,u){
  const c=mapaCam(t,[[16.6,-99.5,29.3,22.6],[19.4,-98.4,27.6,36,eio],[26.7,-98.4,27.6,37]]);
  base(c);
  mundo(c,{ces:CES,tx:TXC,us:.2});
  const zk=eo(nb(E.b_zona-.1,E.b_zona+.6,t)),pul=.7+.3*Math.sin(t*6);
  poly(c,ZDISP,RED,.34*zk*pul,{b:RED,lw:2.2,dash:[6,4],ba:zk});
  ruta(c,sm(NUECES),1,GOLD,3,{a:.9});ruta(c,sm(BRAVO),1,'#7ef0b0',3,{a:.9});
  // tropas azules entran desde el norte
  const tk=nb(E.b_tropas-.1,E.b_tropas+1.5,t);
  for(let i=0;i<12;i++){const k=eio(cl(tk*1.3-i*.03));if(k<=0)continue;const [x0,y0]=P_(c,[-99.3+R(i)*1.6,30.4]),[x1,y1]=P_(c,[-98.9+R(i+9)*1.2,27.9+R(i+4)*.6]);circ(lerp(x0,x1,k)+Math.sin(t*5+i)*1.2,lerp(y0,y1,k),4.6,US,'#fff',1.3)}
  // tropas mexicanas desde el sur
  const mk=nb(E.b_choque-.7,E.b_choque,t);
  for(let i=0;i<10;i++){const k=eio(cl(mk*1.2-i*.02));if(k<=0)continue;const [x0,y0]=P_(c,[-98.0+R(i+2)*1.4,25.6]),[x1,y1]=P_(c,[-98.5+R(i+7)*1.2,27.6+R(i+3)*.5]);circ(lerp(x0,x1,k),lerp(y0,y1,k),4.6,MX,'#fff',1.3)}
  if(t>E.b_choque){const [x,y]=P_(c,[-98.5,27.7]);shock(x,y,t,E.b_choque,'rgba(255,77,94,.95)',90,5,.9);burst(x,y,t,E.b_choque,[RED,'#ffd166','#fff'],30,160,.9,3.2);glow(x,y,60*spring(t-E.b_choque,11,6),'rgba(255,100,70,.4)',1)}
  TG('1846',180,96,22,GOLD,INK,t,E.b_1846-.05,{out:E.b_zona+1.2});
  TX('EL PRESIDENTE POLK',180,138,26,'#fff',t,E.b_polk-.1,{w:340,out:E.b_tropas-.3});
  if(t>E.b_tropas-.1)TX('MANDA TROPAS',180,138,34,US,t,E.b_tropas-.1,{w:340,out:E.b_choque-.2});
  if(t>E.b_zona-.1)TG('ZONA DISPUTADA',180,440,17,RED,'#fff',t,E.b_zona-.05);
  if(t>E.b_choque-.1&&t<E.b_cong-.25)sl('CHOQUE ARMADO',180,138,34,RED,t,E.b_choque,{sh:'rgba(255,77,94,.6)'});
  if(t>E.b_cong-.1)TX('EL CONGRESO DE EE. UU.',180,100,22,'#fff',t,E.b_cong-.1,{w:340,out:E.b_guerra-.2});
  if(t>E.b_guerra-.1)sl('DECLARA LA GUERRA',180,100,34,RED,t,E.b_guerra,{sh:'rgba(255,77,94,.6)'});
}

// S3 avance: norte, mar, Ciudad de México
function s3(t,u){
  const c=mapaCam(t,[[26.6,-98.8,28,25.6],[29.0,-100,24,11,eio],[35.1,-100,24,11.6]]);
  base(c);
  mundo(c,{ces:CES,tx:TXC,us:.2,mx:1});
  const pa=eio(nb(E.c_norte-.1,E.c_norte+1.3,t)),pm=eio(nb(E.c_mar-.1,E.c_toma-.1,t));
  const RA=sm([[-97.3,26.0],[-98.8,26.2],[-100.3,25.7]]),RB=sm([[-93.0,23.5],[-95.0,20.5],[-96.13,19.2],[-97.3,19.0],[-98.3,19.2],CDMX]);
  const ha=ruta(c,RA,pa,US,4.2),hb=ruta(c,RB,pm,US,4.2,{dash:[8,5],t});
  if(ha)circ(ha[0],ha[1],5,US,'#fff',1.6);if(hb)circ(hb[0],hb[1],5,US,'#fff',1.6);
  if(t>E.c_norte)TG('POR EL NORTE',cx_(206,60,300),262,13,'rgba(6,16,36,.9)',US,t,E.c_norte+.1);
  if(t>E.c_mar)TG('POR EL MAR',cx_(266,50,310),352,13,'rgba(6,16,36,.9)',US,t,E.c_mar+.1);
  if(t>E.c_toma){const [x,y]=P_(c,CDMX);pin(c,CDMX[0],CDMX[1],RED,t,E.c_toma,6);shock(x,y,t,E.c_toma,'rgba(255,77,94,.95)',100,5,.9);burst(x,y,t,E.c_toma,[US,'#fff',RED],28,150,.9,3);
    TG('CIUDAD DE MÉXICO',cx_(x+4,70,290),y+24,13,RED,'#fff',t,E.c_cdmx-.05)}
  TX('EL EJÉRCITO DE EE. UU.',180,96,22,'#fff',t,E.c_ejer-.1,{w:340,out:E.c_sep-.3});
  TX('AVANZA',180,142,38,US,t,E.c_ejer+.35,{w:340,out:E.c_sep-.3});
  TG('SEPTIEMBRE 1847',180,96,22,GOLD,INK,t,E.c_sep-.05);
  if(t>E.c_toma-.1){TX('TOMA LA CIUDAD',180,146,28,'#fff',t,E.c_toma-.1,{w:340});}
}

// S4 tratado
function pergamino(t,k){ctx.save();ctx.translate(180,320);ctx.scale(k,k);rr(-118,-150,236,300,10);ctx.fillStyle=CRM;ctx.fill();ctx.strokeStyle='#8a6a3a';ctx.lineWidth=4;ctx.stroke();
  txt('TRATADO DE',0,-118,19,'#3a2a14',{wt:'900',f:DISP});txt('GUADALUPE HIDALGO',0,-92,17,'#3a2a14',{wt:'900',f:DISP});
  ctx.strokeStyle='rgba(58,42,20,.45)';ctx.lineWidth=2.4;for(let i=0;i<7;i++){ctx.beginPath();ctx.moveTo(-86,-58+i*18);ctx.lineTo(86-(i%3)*18,-58+i*18);ctx.stroke()}
  ctx.restore()}
function firma(x,y,p,col){p=cl(p);if(p<=0)return;ctx.save();ctx.strokeStyle=col;ctx.lineWidth=2.4;ctx.lineCap='round';ctx.beginPath();const n=Math.floor(40*p);for(let i=0;i<=n;i++){const q=i/40,px=x+q*60,py=y+Math.sin(q*14)*7*(1-q*.4)-q*6;i?ctx.lineTo(px,py):ctx.moveTo(px,py)}ctx.stroke();ctx.restore()}
function s4(t,u){
  const c=mapaCam(t,[[35.0,-99.1,21,22],[44.7,-99.1,20,36]]);
  base(c,{dim:.38});mundo(c,{ces:CES,tx:TXC,us:.15,mx:.8});
  veil(.3);
  if(t>E.d_gh-.2){pin(c,-99.12,19.49,GOLD,t,E.d_gh-.1,6)}
  const k=spring(t-E.d_trat+.1,10,6.4);
  if(t>E.d_trat-.1)pergamino(t,Math.max(.01,k));
  const sg=nb(E.d_2-.6,E.d_2+1.4,t);
  firma(104,392,sg*2,'#4da3ff');firma(150,430,cl(sg*2-1),'#2ecc71');
  if(t>E.d_2-.05){const sh=Math.sin(t*60)*3*Math.exp(-(t-E.d_2)*9);ctx.save();ctx.translate(232+sh,340);ctx.rotate(-.2);const a=spring(t-E.d_2,11,6);ctx.scale(a,a);rr(-62,-22,124,44,6);ctx.fillStyle='rgba(255,77,94,.15)';ctx.fill();ctx.strokeStyle=RED;ctx.lineWidth=4;ctx.stroke();txt('2 FEB 1848',0,2,20,RED,{st:INK,sw:3,wt:'900'});ctx.restore();shock(232,340,t,E.d_2,'rgba(255,77,94,.9)',80,4,.7)}
  TX('UN DIPLOMÁTICO',180,96,22,'#fff',t,E.d_trist-.4,{w:340,out:E.d_paz-.2});
  if(t>E.d_trist-.1)TX('NICHOLAS TRIST',180,138,32,US,t,E.d_trist-.1,{w:340,out:E.d_paz-.2});
  if(t>E.d_paz-.1)TX('NEGOCIA LA PAZ',180,100,34,'#fff',t,E.d_paz-.1,{w:340,out:E.d_trat-.1});
  if(t>E.d_trat-.1){TX('EL TRATADO SE FIRMA',180,96,24,'#fff',t,E.d_trat-.1,{w:340,out:E.d_2-.35});}
  if(t>E.d_2-.1){TX('EL 2 DE FEBRERO',180,96,26,'#fff',t,E.d_2-.1,{w:340});TX('DE 1848',180,138,36,RED,t,E.d_2+.3,{w:340})}
  if(t>E.d_gh-.1)TG('GUADALUPE HIDALGO',180,470,15,GOLD,INK,t,E.d_gh-.05);
}

// S5 cesión: 525.000 mi² / 1,36 millones km² / 55 %
function s5(t,u){
  const c=mapaCam(t,[[44.6,-105,26,11],[48,-110,33,13],[60.3,-110,33.4,13.6]]);
  base(c);
  const k=eo(nb(E.e_cede-.1,E.e_cede+.9,t));
  mundo(c,{ces:CES,tx:US,us:.2});
  SF(c,CES_S,CES,.5*k,{b:'#fff',lw:1.8,ba:1});
  if(t>E.e_cede){const [x,y]=P_(c,[-112,35]);shock(x,y,t,E.e_cede,'rgba(255,159,28,.95)',130,6,1);burst(x,y,t,E.e_cede,[CES,'#fff',GOLD],30,170,1,3.2)}
  const L=(s,lon,lat,ts,w=60)=>{if(t>ts-.05){const [x,y]=P_(c,[lon,lat]);TG(s,cx_(x,w/2,360-w/2),y,11,'rgba(6,16,36,.9)','#fff',t,ts-.05)}};
  L('CALIFORNIA',-120.3,36.8,E.e_cal,76);L('NEVADA',-116.8,39.6,E.e_nev,52);L('UTAH',-111.6,39.6,E.e_utah,40);L('ARIZONA',-112.4,33.6,E.e_ariz,58);L('NUEVO MÉXICO',-105.8,34.0,E.e_nm,84);
  TX('MÉXICO CEDE',180,96,30,'#fff',t,E.e_cede-.1,{w:340,out:E.e_hoy-.2});
  if(t>E.e_mil-.1&&t<E.e_hoy-.15){const v=countV(0,525000,t,E.e_mil,1.5);txt(Math.round(v).toLocaleString('es').replace(/,/g,'.')+' MILLAS²',180,150,28,'#fff',{st:INK,sw:5,sc:eb(nb(E.e_mil-.1,E.e_mil+.35,t))})}
  if(t>E.e_km-1.3&&t<E.e_hoy-.15){const v=countV(0,1360000,t,E.e_km-1.3,1.4);if(t<E.e_hoy-.1)txt(Math.round(v).toLocaleString('es').replace(/,/g,'.')+' KM²',180,200,30,GOLD,{st:INK,sw:5,sc:eb(nb(E.e_km-1.4,E.e_km-.9,t))})}
  if(t>E.e_hoy-.1)TX('HOY SON',180,96,28,'#fff',t,E.e_hoy-.1,{w:340});
  if(t>E.e_55-.05){sl('55 %',180,150,64,RED,t,E.e_55,{sh:'rgba(255,77,94,.6)'});TX('DEL PAÍS',180,205,26,'#fff',t,E.e_55+.25,{w:340})}
}

// S6 $15 millones + La Mesilla
function billete(x,y,s,k,v){tr(x,y,k,0,()=>{ctx.save();ctx.scale(s,s);rr(-92,-46,184,92,8);ctx.fillStyle='#2f7d4f';ctx.fill();ctx.strokeStyle='#d9f2dd';ctx.lineWidth=3;ctx.stroke();rr(-80,-34,160,68,5);ctx.strokeStyle='rgba(217,242,221,.6)';ctx.lineWidth=1.6;ctx.stroke();circ(0,0,24,'rgba(217,242,221,.25)','#d9f2dd',2);txt('$',0,2,32,'#e8f7ea',{st:INK,sw:3,wt:'900'});ctx.restore()})}
function s6(t,u){
  const c=mapaCam(t,[[60.2,-108,33,10.4],[63.0,-108,33,10.4],[65.6,-110.4,32.3,34,eio],[69.7,-110.4,32.3,35]]);
  base(c);
  mundo(c,{ces:CES,tx:US,us:.2});
  SF(c,CES_S,CES,.38,{b:'#fff',lw:1.5,ba:.9});
  const gk=eo(nb(E.f_mesilla-.1,E.f_mesilla+.7,t)),gp=.75+.25*Math.sin(t*6);
  poly(c,GAD,GOLD,.5*gk*gp,{b:GOLD,lw:2.4,ba:gk});
  if(t>E.f_mesilla){const [x,y]=P_(c,[-110.8,32.1]);shock(x,y,t,E.f_mesilla,'rgba(255,209,102,.95)',90,5,.9);burst(x,y,t,E.f_mesilla,[GOLD,'#fff'],26,150,.9,3)}
  // billete de 15 millones
  const bo=eio(nb(E.f_1853-.35,E.f_1853+.2,t));
  if(t>E.f_pago-.1&&bo<1){ctx.save();ctx.globalAlpha=1-bo;billete(180,300-bo*40,1.35,spring(t-E.f_15+.1,11,6.4)*(1-bo*.3),15);
    if(t>E.f_15){shock(180,300,t,E.f_15,'rgba(255,209,102,.9)',110,5,.9);burst(180,300,t,E.f_15,[GOLD,'#fff','#7ef0b0'],26,150,.9,3)}ctx.restore()}
  TX('EE. UU. PAGÓ',180,96,26,'#fff',t,E.f_pago-.1,{w:340,out:E.f_1853-.35});
  if(t>E.f_15-.1){const v=countV(0,15,t,E.f_15,.9);if(t<E.f_1853-.3)txt('$'+Math.round(v)+' MILLONES',180,152,34,GOLD,{st:INK,sw:6,sc:eb(nb(E.f_15-.1,E.f_15+.3,t))})}
  TG('1853',180,96,22,GOLD,INK,t,E.f_1853-.05);
  if(t>E.f_mesilla-.1)TX('COMPRA LA MESILLA',180,142,28,'#fff',t,E.f_mesilla-.1,{w:340});
  if(t>E.f_diez-.1){const v=countV(0,10,t,E.f_diez,.7);txt('+$'+Math.round(v)+' MILLONES',180,196,32,GOLD,{st:INK,sw:6,sc:eb(nb(E.f_diez-.1,E.f_diez+.3,t))})}
}

// S7 cierre: las dos posturas + pregunta
function s7(t,u){
  const c=mapaCam(t,[[69.6,-106,33,9.4],[81.5,-106,33,10.2]]);
  base(c,{dim:.58});mundo(c,{ces:CES,tx:US,us:.16,a:.9});
  SF(c,CES_S,CES,.34,{b:'#fff',lw:1.3,ba:.8});
  veil(.3);
  if(t>E.g_unos-.1){const a=eb(nb(E.g_unos-.1,E.g_unos+.4,t));tr(180,170,a,0,()=>{bocadillo(0,0,300,84,'rgba(120,30,40,.95)',1,-60);txt('PARA UNOS',0,-24,14,'#ffc2c2',{st:INK,sw:3});txt('“GUERRA DE CONQUISTA”',0,8,20,'#fff',{st:INK,sw:4})})}
  if(t>E.g_otros-.1){const a=eb(nb(E.g_otros-.1,E.g_otros+.4,t));tr(180,290,a,0,()=>{bocadillo(0,0,300,92,'rgba(24,60,120,.95)',1,60);txt('PARA OTROS',0,-28,14,'#bcd9ff',{st:INK,sw:3});txt('“UN TRATADO TRAS',0,2,19,'#fff',{st:INK,sw:4});txt('PERDER LA GUERRA”',0,26,19,'#fff',{st:INK,sw:4})})}
  if(t>E.g_conq)shock(180,170,t,E.g_conq,'rgba(255,77,94,.9)',80,4,.6);
  if(t>E.g_perder)shock(180,290,t,E.g_perder,'rgba(77,163,255,.9)',80,4,.6);
  if(t>E.g_piensas-.1)sl('¿TÚ QUÉ PIENSAS?',180,392,30,GOLD,t,E.g_piensas,{sh:'rgba(255,209,102,.6)'});
  TG('COMENTA TU RESPUESTA',180,458,16,GOLD,INK,t,E.g_com-.05);
}

boot([s0,s1,s2,s3,s4,s5,s6,s7],TRS,{cap:{acc:'#ffd166'}});
