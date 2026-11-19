// ===== ¿Cómo perdió Bolivia su mar? — escenas =====
const sl=(s,x,y,sz,col,t,ts,o={})=>slam(s,x,y,sz,col,t,ts,Object.assign({st:INK,sw:Math.max(6,sz*.18),sh:'rgba(255,159,28,.5)'},o));
const P_=(c,p)=>mapaPunto(c,p[0],p[1]);
const veil=(a)=>{ctx.save();ctx.fillStyle='rgba(4,10,28,'+a+')';ctx.fillRect(0,0,360,640);ctx.restore()};
// color del litoral según el tiempo: dorado/naranja hasta la ocupación, azul después
const litCol=(t)=>mixc(LIT,CL,eo(nb(E.c_ocupa,E.c_ocupa+.9,t)));
function paises(c,t,o={}){ // Bolivia / Perú / Chile con color
  const a=o.a===undefined?1:o.a;
  PF(c,['Bolivia'],BO,.38*a*(o.bo===undefined?1:o.bo),{b:'#fff',lw:1.5,ba:.9});
  PF(c,['Chile'],CL,.3*a*(o.cl===undefined?1:o.cl),{b:'#fff',lw:1.2,ba:.7});
  PF(c,['Peru'],PE,.3*a*(o.pe===undefined?0:o.pe),{b:'#fff',lw:1.2,ba:.7});
  PF(c,['Argentina','Brazil','Paraguay','Colombia','Ecuador','Uruguay'],null,0,{ba:.35,lw:.8});
}
function litoral(c,t,col,a=.8,lw=2){const pul=.85+.15*Math.sin(t*7);PF(c,['Litoral'],col,a*pul,{b:'#fff',lw,ba:1})}

// S0 GANCHO: Bolivia nació con mar, hoy sin costa
function s0(t,u){
  const z=nb(0,5.3,t);
  const c=mapaCam(t,[[0,-63,-20,5.2],[5.3,-66,-19,6.8]]);
  base(c);
  const bp=t<E.h_bol?(t<0?1:eo(nb(-.2,.4,t))):1;
  paises(c,t,{bo:bp,pe:0});
  // litoral: brilla desde "mar" y se apaga en "hoy"
  const on=nb(-.3,.3,t),off=nb(E.h_costa-.1,E.h_costa+.5,t);
  if(on>0)litoral(c,t,mixc(LIT,CL,eo(off)),.85*on,2+2*(1-off));
  if(t>E.h_mar&&t<E.h_hoy){const [x,y]=P_(c,LITC);shock(x,y,t,E.h_mar,'rgba(255,159,28,.95)',60,4,.8)}
  if(t>E.h_costa){const [x,y]=P_(c,LITC);shock(x,y,t,E.h_costa,'rgba(255,77,94,.95)',70,5,.8);burst(x,y,t,E.h_costa,[RED,'#fff',CL],20,110,.8,2.6)}
  TX('BOLIVIA NACIÓ',180,92,36,'#fff',t,-.6,{w:340,out:E.h_hoy-.6});
  TX('CON MAR',180,140,52,GOLD,t,-.4,{w:340,out:E.h_hoy-.6});
  if(t>E.h_hoy-.1){TX('HOY NO TIENE',180,96,30,'#fff',t,E.h_hoy-.1,{w:340});}
  if(t>E.h_costa-.1)sl('NI UN METRO DE COSTA',180,150,22,RED,t,E.h_costa,{sh:'rgba(255,77,94,.6)'});
  TG('¿QUÉ PASÓ?',180,442,20,GOLD,INK,t,E.h_paso-.05,{out:E.h_mapa+.7});
  if(t>E.h_mapa-.05)TG('MIRA EL MAPA',180,478,15,'#fff',INK,t,E.h_mapa-.05);
  const [px,py]=P_(c,LITC);if(t>E.h_mapa+.05)pin(c,LITC[0],LITC[1],LIT,t,E.h_mapa+.05,5);
}

// S1 1825: más de 400 km de costa
function s1(t,u){
  const c=mapaCam(t,[[5.3,-66,-19,6.8],[8.8,-67.8,-20.4,16],[13.1,-67.8,-20.4,16.5]]);
  base(c);
  const e=eo(nb(E.a_nace-.1,E.a_nace+.7,t));
  paises(c,t,{bo:e,pe:0,cl:.5});
  litoral(c,t,LIT,.85*e,2.2);
  // regla de costa 400 km
  const rk=eio(nb(E.a_400-.1,E.a_400+1.3,t));
  if(rk>0){const A=P_(c,[-70.35,-21.45]),B=P_(c,[-70.35,-24.0]),x=A[0]-16;ctx.save();ctx.strokeStyle=INK;ctx.lineWidth=7;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(x,A[1]);ctx.lineTo(x,lerp(A[1],B[1],rk));ctx.stroke();ctx.strokeStyle='#fff';ctx.lineWidth=3.2;ctx.stroke();ctx.restore();
    circ(x,A[1],4,'#fff',INK,1.5);if(rk>.98)circ(x,B[1],4,'#fff',INK,1.5)}
  const kx=cx_(P_(c,[-70.4,-22.7])[0]-62,56,300),ky=P_(c,[-70.4,-22.7])[1];
  if(t>E.a_400-.1){const v=countV(0,400,t,E.a_400,1.2);txt('+'+Math.round(v)+' km',kx,ky-4,28,'#fff',{st:INK,sw:5,sc:eb(nb(E.a_400-.1,E.a_400+.35,t))})}
  const [pcx,pcy]=P_(c,[-73.5,-23.2]);TG('OCÉANO PACÍFICO',cx_(pcx,70,290),pcy,12,'rgba(6,16,36,.88)','#9fd3ff',t,E.a_pac-.05);
  TG('1825',180,96,22,GOLD,INK,t,E.a_1825-.05,{out:E.a_400-.5});
  TX('NACE BOLIVIA',180,142,32,'#fff',t,E.a_nace-.1,{w:340,out:E.a_400-.5});
  TX('MÁS DE 400 KM',180,100,28,'#fff',t,E.a_400-.15,{w:340});TX('DE COSTA',180,140,36,LIT,t,E.a_km-.05,{w:340});
}

// S2 salitre
function s2(t,u){
  const c=mapaCam(t,[[12.9,-67.8,-20.4,16.5],[14.6,-69.6,-22.7,28],[17.2,-69.6,-22.7,30]]);
  base(c,{dim:.28});
  PF(c,['Chile'],CL,.12,{b:'#fff',lw:1,ba:.5});
  litoral(c,t,LIT,.55,2.4);
  // cristales dentro del litoral
  const a=nb(E.b_sal-.1,E.b_sal+.9,t),oro=eo(nb(E.b_oro-.1,E.b_oro+.5,t));
  for(let i=0;i<26;i++){const lon=-70.1+R(i*3+1)*.75,lat=-23.3+R(i*3+2)*1.7,[x,y]=P_(c,[lon,lat]);if(y<150||y>500)continue;
    const k=eb(nb(E.b_sal-.1+i*.03,E.b_sal+.4+i*.03,t));if(k<=0)continue;
    cristal(x,y,1.5*k,mixc('#dff3ff',GOLD,oro),t,i)}
  if(t>E.b_sal){const [x,y]=P_(c,LITC);burst(x,y,t,E.b_sal,['#dff3ff','#fff'],24,120,.9,2.6)}
  if(t>E.b_oro){const [x,y]=P_(c,LITC);shock(x,y,t,E.b_oro,'rgba(255,209,102,.95)',90,5,.9);burst(x,y,t,E.b_oro,[GOLD,'#fff'],30,160,1,3);glow(x,y,70*spring(t-E.b_oro,11,6),'rgba(255,209,102,.45)',1)}
  TG('LITORAL BOLIVIANO',180,446,13,'rgba(6,16,36,.9)',LIT,t,13.6,{out:E.b_oro+.6});
  TX('EN ESA COSTA',180,96,26,'#fff',t,13.05,{w:330,out:E.b_sal-.1});
  TX('HABÍA',180,140,28,'#fff',t,13.55,{w:330,out:E.b_sal-.1});
  sl('SALITRE',180,120,50,'#dff3ff',t,E.b_sal,{sh:'rgba(159,211,255,.6)'});
  TX('UN MINERAL QUE',180,180,24,'#fff',t,E.b_min-.1,{w:340,out:E.b_oro-.15});
  if(t>E.b_oro-.05)TX('VALÍA ORO',180,184,40,GOLD,t,E.b_oro-.05,{w:340});
}

// S3 1879: Guerra del Pacífico
function s3(t,u){
  const c=mapaCam(t,[[17.0,-69.6,-22.7,30],[19.4,-68,-20,8.2,eio],[27.5,-68,-20,8.2]]);
  base(c);
  const pc=eo(nb(E.c_chile-.1,E.c_chile+.6,t)),pb=eo(nb(E.c_bol-.1,E.c_bol+.5,t)),pp=eo(nb(E.c_peru-.1,E.c_peru+.5,t));
  PF(c,['Chile'],CL,.38*pc,{b:'#fff',lw:1.3,ba:.8});
  PF(c,['Bolivia'],BO,.4,{b:'#fff',lw:1.5,ba:.9});
  PF(c,['Peru'],PE,.38*pp,{b:'#fff',lw:1.3,ba:.8});
  litoral(c,t,litCol(t),.85,2.2);
  // flecha chilena que invade el litoral
  const fa=eio(nb(E.c_ocupa-.2,E.c_ocupa+.9,t));
  flecha(c,[-70.6,-31],[-70.3,-22.9],fa,RED,4.4);
  if(t>E.c_ocupa){const [x,y]=P_(c,LITC);shock(x,y,t,E.c_ocupa,'rgba(77,163,255,.95)',90,5,.9);burst(x,y,t,E.c_ocupa,[CL,'#fff',RED],28,150,.9,3)}
  const [chx,chy]=P_(c,[-71.2,-34]);if(t>E.c_chile)TG('CHILE',cx_(chx,40,320),Math.min(chy,468),15,CL,'#fff',t,E.c_chile-.05);
  const [bx,by]=P_(c,[-64.5,-16.5]);if(t>E.c_bol)TG('BOLIVIA',cx_(bx),by,15,BO,INK,t,E.c_bol-.05);
  const [px,py]=P_(c,[-75,-10]);if(t>E.c_peru)TG('PERÚ',cx_(px,40,320),py,15,PE,INK,t,E.c_peru-.05);
  TG('1879',180,96,22,GOLD,INK,t,E.c_1879-.05,{out:E.c_guerra+2.8});
  if(t>E.c_guerra-.1)TX('GUERRA DEL PACÍFICO',180,142,28,'#fff',t,E.c_guerra-.1,{w:340,out:E.c_ocupa-.3});
  if(t>E.c_ocupa-.1)TX('CHILE OCUPA',180,100,32,CL,t,E.c_ocupa-.1,{w:340});
  if(t>E.c_ocupa)TX('LA COSTA BOLIVIANA',180,142,26,'#fff',t,E.c_ocupa+.15,{w:340});
  if(t>E.c_nunca-.1)sl('NUNCA SE VA',180,206,34,RED,t,E.c_nunca,{sh:'rgba(255,77,94,.6)'});
}

// S4 1884: tregua
function bandera(x,y,s,t,a=1){ctx.save();ctx.globalAlpha*=a;ctx.translate(x,y);ctx.scale(s,s);ctx.strokeStyle=INK;ctx.lineWidth=5;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(0,28);ctx.lineTo(0,-30);ctx.stroke();ctx.strokeStyle='#cfd8ea';ctx.lineWidth=2.4;ctx.stroke();
  ctx.beginPath();ctx.moveTo(2,-30);for(let i=0;i<=12;i++){ctx.lineTo(2+i*4,-30+Math.sin(t*6+i*.7)*3*(i/12)+0)}for(let i=12;i>=0;i--){ctx.lineTo(2+i*4,-6+Math.sin(t*6+i*.7)*3*(i/12))}ctx.closePath();ctx.fillStyle='#fff';ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=2;ctx.stroke();ctx.restore()}
function s4(t,u){
  const c=mapaCam(t,[[27.3,-68,-20,8.2],[30,-69.2,-21.6,12],[33.7,-69.2,-21.6,12.5]]);
  base(c);
  paises(c,t,{pe:.6});
  litoral(c,t,CL,.85,2.2);
  // soldados/puntos azules marchando sobre el litoral
  const sg=nb(E.d_sigue-.1,E.d_sigue+.7,t);
  for(let i=0;i<14;i++){const [x,y]=P_(c,[-70.25+R(i*2)*.5-.1,-22.2-R(i*2+1)*1.6]);const k=eb(nb(E.d_sigue-.1+i*.03,E.d_sigue+.4+i*.03,t));if(k>0)circ(x,y+Math.sin(t*6+i)*1.2,3.2*k,CL,'#fff',1.2)}
  const [bx,by]=[262,200];const bk=eb(nb(E.d_tregua-.15,E.d_tregua+.45,t));if(bk>0)bandera(bx,by,1.6*bk,t);
  TG('1884',180,96,22,GOLD,INK,t,E.d_1884-.05,{out:E.d_sigue-.3});
  TX('FIRMAN UNA',130,142,26,'#fff',t,E.d_tregua-.15,{w:230,out:E.d_sigue-.3});
  TX('TREGUA',130,186,40,'#fff',t,E.d_tregua,{w:230,out:E.d_sigue-.3});
  TX('PERO CHILE SIGUE',180,100,28,'#fff',t,E.d_sigue-.1,{w:340});
  TX('GOBERNANDO',180,142,38,CL,t,E.d_sigue+.25,{w:340});
  TG('EL LITORAL',180,446,16,CL,'#fff',t,E.d_lit-.05);
}

// S5 1904: tratado
function pergamino(t,k){ctx.save();ctx.translate(180,300);ctx.scale(k,k);rr(-118,-150,236,300,10);ctx.fillStyle=CRM;ctx.fill();ctx.strokeStyle='#8a6a3a';ctx.lineWidth=4;ctx.stroke();
  txt('TRATADO DE PAZ',0,-118,19,'#3a2a14',{wt:'900',f:DISP});txt('Y AMISTAD',0,-94,19,'#3a2a14',{wt:'900',f:DISP});
  ctx.strokeStyle='rgba(58,42,20,.45)';ctx.lineWidth=2.4;for(let i=0;i<7;i++){ctx.beginPath();ctx.moveTo(-86,-62+i*18);ctx.lineTo(86-(i%3)*18,-62+i*18);ctx.stroke()}
  ctx.restore()}
function firma(x,y,p,col){p=cl(p);if(p<=0)return;ctx.save();ctx.strokeStyle=col;ctx.lineWidth=2.4;ctx.lineCap='round';ctx.beginPath();const n=Math.floor(40*p);for(let i=0;i<=n;i++){const q=i/40,px=x+q*60,py=y+Math.sin(q*14)*7*(1-q*.4)-q*6;i?ctx.lineTo(px,py):ctx.moveTo(px,py)}ctx.stroke();ctx.restore()}
function s5(t,u){
  const c=mapaCam(t,[[33.5,-69.2,-21.6,12.5],[41.7,-69.2,-21.6,12.5]]);
  base(c,{dim:.5});paises(c,t,{pe:.4});litoral(c,t,CL,.7,2);
  veil(.5);
  const k=spring(t-E.e_trat+.1,10,6.4);
  if(t>E.e_trat-.1)pergamino(t,Math.max(.01,k));
  const sg=nb(E.e_recon,E.e_recon+1.3,t);
  firma(104,376,sg*2,'#1c2f6b');firma(164,414,cl(sg*2-1),'#7a1f1f');
  if(t>E.e_chile-.1){const a=eb(nb(E.e_chile-.1,E.e_chile+.35,t));tr(180,236,a,0,()=>{rr(-58,-17,116,34,8);ctx.fillStyle=CL;ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=2.6;ctx.stroke();txt('CHILE',0,1,19,'#fff',{st:INK,sw:4})})}
  if(t>E.e_siempre-.05){const sh=Math.sin(t*60)*3*Math.exp(-(t-E.e_siempre)*9);ctx.save();ctx.translate(180+sh,330);ctx.rotate(-.18);const a=spring(t-E.e_siempre,11,6);ctx.scale(a*1.1,a*1.1);rr(-104,-26,208,52,6);ctx.fillStyle='rgba(255,77,94,.15)';ctx.fill();ctx.strokeStyle=RED;ctx.lineWidth=5;ctx.stroke();txt('PARA SIEMPRE',0,2,30,RED,{st:INK,sw:3,wt:'900'});ctx.restore();shock(180,330,t,E.e_siempre,'rgba(255,77,94,.9)',100,5,.8)}
  TG('1904',180,96,22,GOLD,INK,t,E.e_1904-.05,{out:E.e_recon+1.2});
  if(t>E.e_recon-.1)TX('BOLIVIA RECONOCE',180,100,26,'#fff',t,E.e_recon-.1,{w:340,out:E.e_chile-.3});
  if(t>E.e_chile-.1)TX('ESE TERRITORIO',180,100,26,'#fff',t,E.e_chile-.5,{w:340});
}

// S6 ferrocarril y libre tránsito
function s6(t,u){
  const c=mapaCam(t,[[41.6,-68.8,-18.4,20],[44.3,-69,-20.4,14.5,eio],[46.95,-69,-20.4,14.5]]);
  base(c);
  PF(c,['Chile'],CL,.28,{b:'#fff',lw:1.2,ba:.7});PF(c,['Bolivia'],BO,.34,{b:'#fff',lw:1.5,ba:.9});litoral(c,t,CL,.55,1.6);
  const R1=[LAPAZ,[-69.3,-17.3],ARICA],R2=[LAPAZ,[-69.5,-20.5],[-70.0,-22.3],ANTO];
  const p1=eio(nb(E.f_ferro-.1,E.f_ferro+1.7,t)),p2=eio(nb(E.f_libre-.1,E.f_libre+1.4,t));
  const h1=ruta(c,R1,p1,'#fff',3.4,{dash:[7,5],t}),h2=ruta(c,R2,p2,GOLD,3.4,{dash:[7,5],t});
  if(h1)tren(h1[0],h1[1]-8,1.2,true,t);
  pin(c,LAPAZ[0],LAPAZ[1],BO,t,41.7,5);pin(c,ARICA[0],ARICA[1],CL,t,E.f_arica-.1,5);pin(c,ANTO[0],ANTO[1],CL,t,E.f_puertos-.1,5);
  const l=P_(c,LAPAZ);TG('LA PAZ',cx_(l[0]+34,40,320),l[1]-14,12,'rgba(6,16,36,.9)',GOLD,t,41.9);
  const a=P_(c,ARICA);if(t>E.f_arica-.1)TG('ARICA',cx_(a[0]-34,36,320),a[1],12,CL,'#fff',t,E.f_arica-.1);
  const n=P_(c,ANTO);if(t>E.f_puertos-.1)TG('ANTOFAGASTA',cx_(n[0]-26,52,320),n[1]+4,12,CL,'#fff',t,E.f_puertos-.1);
  TX('A CAMBIO RECIBE',180,96,24,'#fff',t,E.f_cambio-.1,{w:330,out:E.f_libre-.3});
  TX('UN FERROCARRIL',180,138,34,'#fff',t,E.f_ferro-.1,{w:340,out:E.f_libre-.3});
  TX('LIBRE TRÁNSITO',180,100,32,GOLD,t,E.f_libre-.1,{w:340});TX('POR PUERTOS CHILENOS',180,140,22,'#fff',t,E.f_puertos-.1,{w:340});
}

// S7 Bolivia reclama y va a La Haya
function s7(t,u){
  const fly=eio(nb(49.35,51.6,t));
  const c={lon:lerp(-67,HAYA[0],fly),lat:lerp(-20,HAYA[1],fly),s:Math.exp(lerp(Math.log(8),Math.log(16),fly))};
  base(c);
  if(fly<.7){paises(c,t,{pe:.4});litoral(c,t,CL,.6,1.6)}
  // línea de vuelo
  if(fly>0&&fly<1){const a=P_(c,[-67,-20]),b=P_(c,HAYA);ctx.save();ctx.setLineDash([6,6]);ctx.lineDashOffset=-t*20;ctx.strokeStyle='rgba(255,255,255,.7)';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(a[0],a[1]);ctx.lineTo(lerp(a[0],b[0],fly),lerp(a[1],b[1],fly));ctx.stroke();ctx.restore()}
  const [hx,hy]=P_(c,HAYA);
  if(t>E.g_haya-.2){pin(c,HAYA[0],HAYA[1],GOLD,t,E.g_haya-.1,6);const k=spring(t-E.g_haya,11,6);tribunal(hx,hy-48,1.1*k,'#7f8fb3');shock(hx,hy,t,E.g_haya,'rgba(255,209,102,.95)',70,4,.8);TG('LA HAYA',cx_(hx),hy+24,15,GOLD,INK,t,E.g_haya-.05)}
  // gritos de reclamo desde Bolivia
  if(t>E.g_recl-.8&&t<E.g_2013){const [x,y]=P_(c,[-65,-17]);for(let i=0;i<3;i++){const q=((t-E.g_recl+.8)*1.3+i*.33)%1;ctx.save();ctx.globalAlpha=(1-q)*.8;ctx.strokeStyle=GOLD;ctx.lineWidth=3;ctx.beginPath();ctx.arc(x,y,10+q*54,0,7);ctx.stroke();ctx.restore()}}
  TX('PERO BOLIVIA',180,96,26,'#fff',t,E.g_pero-.1,{w:340,out:E.g_2013-.25});TX('NUNCA DEJÓ DE RECLAMAR',180,138,21,GOLD,t,E.g_pero+.3,{w:340,out:E.g_2013-.25});
  TG('2013',180,96,24,GOLD,INK,t,E.g_2013-.05);
  TX('LLEVA EL CASO A',180,142,26,'#fff',t,E.g_2013+.2,{w:340});
}

// S8 2018: la Corte
function s8(t,u){
  const c={lon:HAYA[0],lat:HAYA[1]-.6,s:16};
  base(c,{dim:.62});
  const [hx,hy]=[180,290];
  const kT=spring(t-E.h_2018+.05,9,6.4);
  tribunal(hx,hy,2.1*Math.max(.01,kT),'#7f8fb3');
  // martillo golpea en "no"
  const mk=nb(E.h_no-.35,E.h_no,t),mr=nb(E.h_no,E.h_no+.3,t);
  if(t>E.h_corte-.1)martillo(270,330,1.5,mk>=1?1-mr:mk);
  if(t>E.h_no){shock(270,376,t,E.h_no,'rgba(255,77,94,.9)',70,4,.7);burst(270,376,t,E.h_no,[RED,'#fff'],18,120,.7,2.6)}
  TG('2018',180,96,24,GOLD,INK,t,E.h_2018-.05,{out:E.h_corte-.3});
  TX('LA CORTE',180,100,26,'#fff',t,E.h_corte-.1,{w:340,out:E.h_corte+1.3});TX('INTERNACIONAL',180,142,32,GOLD,t,E.h_corte+.1,{w:340,out:E.h_corte+1.3});
  TX('DECIDE QUE CHILE',180,100,24,'#fff',t,E.h_corte+1.35,{w:340,out:E.h_no-.15});
  if(t>E.h_no-.05)sl('NO TENÍA LA',180,100,32,RED,t,E.h_no,{sh:'rgba(255,77,94,.6)'});
  if(t>E.h_oblig-.1)sl('OBLIGACIÓN',180,150,40,RED,t,E.h_oblig,{sh:'rgba(255,77,94,.6)'});
  if(t>E.h_mar-.1){TX('DE NEGOCIAR UNA SALIDA',180,400,20,'#fff',t,E.h_mar-.55,{w:340});TX('SOBERANA AL MAR',180,436,28,'#9fd3ff',t,E.h_mar-.1,{w:340})}
}

// S9 las dos posturas
function s9(t,u){
  const c=mapaCam(t,[[60,-66,-20,6.4],[66,-66,-20,6.8]]);
  base(c,{dim:.5});
  const ch=nb(E.i_chile-.1,E.i_chile+.35,t),bl=nb(E.i_bol-.1,E.i_bol+.35,t);
  PF(c,['Chile'],CL,.3+.3*ch*(1-bl*.6),{b:'#fff',lw:1.4,ba:.8});PF(c,['Bolivia'],BO,.3+.35*bl,{b:'#fff',lw:1.6,ba:.9});PF(c,['Peru'],PE,.12,{b:'#fff',lw:1,ba:.5});litoral(c,t,CL,.6,1.6);
  if(t>E.i_chile-.1){const a=eb(nb(E.i_chile-.1,E.i_chile+.4,t));tr(180,160,a,0,()=>{bocadillo(0,0,290,76,'rgba(24,60,120,.95)',1,-60);txt('CHILE DICE',0,-20,14,'#bcd9ff',{st:INK,sw:3});txt('“EL TRATADO SE RESPETA”',0,10,20,'#fff',{st:INK,sw:4})})}
  if(t>E.i_bol-.1){const a=eb(nb(E.i_bol-.1,E.i_bol+.4,t));tr(180,290,a,0,()=>{bocadillo(0,0,290,76,'rgba(120,88,12,.95)',1,60);txt('BOLIVIA DICE',0,-20,14,'#ffe6a3',{st:INK,sw:3});txt('“EL MAR ES MI DERECHO”',0,10,20,'#fff',{st:INK,sw:4})})}
  if(t>E.i_resp)shock(180,160,t,E.i_resp,'rgba(77,163,255,.9)',80,4,.6);
  if(t>E.i_der)shock(180,290,t,E.i_der,'rgba(255,209,102,.9)',80,4,.6);
}

// S10 cierre: la pregunta
function s10(t,u){
  const c=mapaCam(t,[[65.9,-66,-20,6.8],[75.9,-66,-20,7.4]]);
  base(c,{dim:.62});paises(c,t,{a:.7,pe:0});litoral(c,t,CL,.6,1.5);
  veil(.45*eo(nb(E.j_ent,E.j_ent+.6,t)));
  TX('¿UN TRATADO DE',180,96,26,'#fff',t,E.j_ent-.05,{w:340});
  if(t>E.j_100-.2){const a=spring(t-E.j_100+.1,11,6);txt('+100',180,176,56*a,GOLD,{st:INK,sw:8,wt:'900',f:DISP});TX('AÑOS DEBERÍA',180,220,28,'#fff',t,E.j_100,{w:340})}
  TX('CERRAR EL TEMA',180,268,30,'#fff',t,E.j_100+.5,{w:340});
  if(t>E.j_sie-.1)sl('PARA SIEMPRE?',180,320,33,GOLD,t,E.j_sie,{sh:'rgba(255,209,102,.6)'});
  if(t>E.j_sie+.5){const a=spring(t-E.j_sie-.5,11,6),b2=spring(t-E.j_sie-.8,11,6);
    tr(100,392,a,0,()=>{rr(-60,-24,120,48,12);ctx.fillStyle=CL;ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=2.4;ctx.stroke();txt('SÍ',0,1,24,'#fff',{st:INK,sw:4})});
    tr(260,392,b2,0,()=>{rr(-60,-24,120,48,12);ctx.fillStyle=BO;ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=2.4;ctx.stroke();txt('NO',0,1,24,INK,{})});
    txt('VS',180,392,17,'#fff',{st:INK,sw:4,sc:eb(nb(E.j_sie+1.0,E.j_sie+1.4,t))})}
  TG('COMENTA TU RESPUESTA',180,462,16,GOLD,INK,t,E.j_com-.05);
}

boot([s0,s1,s2,s3,s4,s5,s6,s7,s8,s9,s10],TRS,{cap:{acc:'#ffd166'}});
