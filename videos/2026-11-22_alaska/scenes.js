// ===== ¿Por qué Rusia vendió Alaska? — escenas =====
const sl=(s,x,y,sz,col,t,ts,o={})=>slam(s,x,y,sz,col,t,ts,Object.assign({st:INK,sw:Math.max(6,sz*.18),sh:'rgba(255,159,28,.5)'},o));
const P_=(c,p)=>mapaPunto(c,p[0],p[1]);
const veil=(a,col='4,10,28')=>{ctx.save();ctx.fillStyle='rgba('+col+','+a+')';ctx.fillRect(0,0,360,640);ctx.restore()};
const OTROS=MAPA_ESTADOS.map(e=>e.n).filter(n=>n!=='Alaska');
const fmtM=(v)=>Math.round(v).toLocaleString('es').replace(/,/g,'.');
function mundo(c,o={}){
  const a=o.a===undefined?1:o.a;
  PF(c,['RusiaW'],RU,.3*a*(o.rua===undefined?1:o.rua),{b:'#fff',lw:1.3,ba:.9});
  PF(c,['Canada'],CAN,.26*a*(o.caa===undefined?1:o.caa),{b:'#fff',lw:1.3,ba:.9});
  SF(c,OTROS,US,.16*a,{b:'#fff',lw:1,ba:.6});
  SF(c,['Alaska'],o.ak||RU,(o.aka===undefined?.42:o.aka)*a,{b:'#fff',lw:1.8,ba:1});
}
function billete(x,y,s,k){tr(x,y,k,0,()=>{ctx.save();ctx.scale(s,s);rr(-92,-46,184,92,8);ctx.fillStyle='#2f7d4f';ctx.fill();ctx.strokeStyle='#d9f2dd';ctx.lineWidth=3;ctx.stroke();rr(-80,-34,160,68,5);ctx.strokeStyle='rgba(217,242,221,.6)';ctx.lineWidth=1.6;ctx.stroke();circ(0,0,24,'rgba(217,242,221,.25)','#d9f2dd',2);txt('$',0,2,32,'#e8f7ea',{st:INK,sw:3,wt:'900'});ctx.restore()})}
function gema(x,y,s,col,t,ph=0){const k=1+.12*Math.sin(t*6+ph);ctx.save();ctx.translate(x,y);ctx.scale(s*k,s*k);ctx.beginPath();ctx.moveTo(0,-8);ctx.lineTo(5,0);ctx.lineTo(0,9);ctx.lineTo(-5,0);ctx.closePath();ctx.fillStyle=col;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=1.3/s;ctx.stroke();ctx.beginPath();ctx.moveTo(0,-8);ctx.lineTo(0,9);ctx.moveTo(-5,0);ctx.lineTo(5,0);ctx.strokeStyle='rgba(255,255,255,.7)';ctx.lineWidth=.8/s;ctx.stroke();ctx.restore()}
function persona(x,y,s,col,t,ph=0){const b=Math.sin(t*3+ph)*1.5;ctx.save();ctx.translate(x,y+b);ctx.scale(s,s);ctx.lineJoin='round';
  ctx.beginPath();ctx.moveTo(-28,64);ctx.quadraticCurveTo(-30,8,0,6);ctx.quadraticCurveTo(30,8,28,64);ctx.closePath();ctx.fillStyle=col;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=3;ctx.stroke();
  circ(0,-14,17,mixc(col,'#000000',.22),INK,3);ctx.restore()}
function papel(x,y,s,rot,col){ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.scale(s,s);rr(-26,-32,52,64,4);ctx.fillStyle=CRM;ctx.fill();ctx.strokeStyle=col;ctx.lineWidth=3;ctx.stroke();ctx.strokeStyle='rgba(58,42,20,.5)';ctx.lineWidth=2;for(let i=0;i<4;i++){ctx.beginPath();ctx.moveTo(-17,-18+i*10);ctx.lineTo(17-(i%2)*8,-18+i*10);ctx.stroke()}txt('$',0,22,14,'#2f7d4f',{wt:'900'});ctx.restore()}

// S0 GANCHO: Rusia vende un territorio enorme por menos de 2 centavos el acre
function s0(t,u){
  const c=mapaCam(t,[[0,-158,58,9.5],[5.05,-156,58.5,11]]);
  base(c);
  mundo(c,{ak:RU,aka:.46+.12*Math.sin(t*4)});
  const [lx,ly]=P_(c,[-179,67.2]);TG('RUSIA',cx_(lx,34,326),ly,13,'rgba(6,16,36,.9)',RU,t,-.2);
  const [ax,ay]=P_(c,[-152,65.5]);TG('ALASKA',cx_(ax,34,326),ay,13,RU,'#fff',t,-.05);
  TG('1867',180,92,22,GOLD,INK,t,-.6,{out:E.h_menos-.2});
  TX('RUSIA VENDIÓ',180,138,34,'#fff',t,-.5,{w:340,out:E.h_menos-.2});
  if(t>E.h_menos-.1)TX('POR MENOS DE',180,100,26,'#fff',t,E.h_menos-.1,{w:340,out:E.h_hizo-.2});
  if(t>E.h_centavos&&t<E.h_hizo-.15){sl('2 ¢',180,170,64,GOLD,t,E.h_centavos,{sh:'rgba(255,209,102,.6)'});TX('POR ACRE',180,222,26,'#fff',t,E.h_centavos+.3,{w:340,out:E.h_hizo-.2});burst(180,170,t,E.h_centavos,[GOLD,'#fff'],26,150,.9,3);shock(180,170,t,E.h_centavos,'rgba(255,209,102,.9)',100,5,.9)}
  if(t>E.h_hizo-.05)sl('¿POR QUÉ?',180,170,48,RED,t,E.h_hizo,{sh:'rgba(255,77,94,.6)'});
}

// S1 Alaska era difícil de mantener: <400 colonos, pieles
function s1(t,u){
  const c=mapaCam(t,[[5.05,-156,58.5,11],[9.0,-148,60,13],[10.4,-136,57.3,32,eio],[14.25,-136,57.3,33]]);
  base(c);
  mundo(c,{ak:RU,aka:.4});
  // colonos
  const dk=nb(E.a_400-.2,E.a_400+.9,t);
  for(let i=0;i<24;i++){const k=eo(cl(dk*1.4-i*.02));if(k<=0)continue;const [x,y]=P_(c,[-135.6+(R(i)-.5)*3.2,57.4+(R(i+9)-.5)*1.5]);circ(x,y-(1-k)*18,3.4*k,RU,'#fff',1.1)}
  if(t>E.a_dificil)pin(c,-135.6,57.4,GOLD,t,E.a_dificil-.2,5);
  TG('ALASKA, DIFÍCIL',180,96,17,RU,'#fff',t,E.a_prim-.05,{out:E.a_400-.3});
  TX('DE MANTENER',180,140,34,'#fff',t,E.a_dificil-.2,{w:340,out:E.a_400-.3});
  if(t>E.a_400-.3)TX('COLONOS RUSOS',180,100,26,'#fff',t,E.a_400-.3,{w:340});
  if(t>E.a_400-.15){const v=countV(0,400,t,E.a_400-.15,1.1);txt('MÁX. '+Math.round(v),180,160,40,GOLD,{st:INK,sw:6,sc:eb(nb(E.a_400-.2,E.a_400+.2,t))})}
  if(t>E.a_400)shock(180,320,t,E.a_400,'rgba(255,77,94,.9)',90,4,.8);
  // gráfico de pieles que se hunde
  if(t>E.a_pieles-.25){const k=eo(nb(E.a_pieles-.25,E.a_pieles+.3,t));ctx.save();ctx.globalAlpha=k;rr(36,372,288,112,12);ctx.fillStyle='rgba(6,16,36,.88)';ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=2;ctx.stroke();
    txt('COMERCIO DE PIELES',180,392,15,CRM,{st:INK,sw:3,wt:'900'});
    const dp=eio(nb(E.a_pieles,E.a_hundio+.5,t));ctx.beginPath();const pts=[[58,418],[100,424],[142,414],[184,426],[226,436],[268,466],[304,474]];
    const n=Math.max(1,Math.floor(dp*(pts.length-1)));ctx.lineCap='round';ctx.lineJoin='round';ctx.moveTo(pts[0][0],pts[0][1]);for(let i=1;i<=n;i++)ctx.lineTo(pts[i][0],pts[i][1]);ctx.strokeStyle=RED;ctx.lineWidth=4.5;ctx.stroke();ctx.restore();
    if(t>E.a_hundio){cruz(304,474,10,RED,spring(t-E.a_hundio,11,6));shock(304,474,t,E.a_hundio,'rgba(255,77,94,.9)',70,4,.8)}}
}

// S2 1856: Rusia pierde la Guerra de Crimea
function s2(t,u){
  const c=mapaCam(t,[[14.25,16,50,7.8],[23.0,22,50,8.6]]);
  base(c,{dim:.38});
  PF(c,['Russia'],RU,.34,{b:'#fff',lw:1.3,ba:.9});
  PF(c,['United Kingdom','France','Turkey'],CAN,.34,{b:'#fff',lw:1.3,ba:.9});
  const CR=[34.0,45.3],LO=[-0.1,51.5],PA=[2.3,48.9],IS=[29.0,41.0];
  const pk=eb(nb(E.b_crimea-.1,E.b_crimea+.5,t));
  const [cx0,cy0]=P_(c,CR);
  if(t>E.b_crimea-.1){pin(c,CR[0],CR[1],RED,t,E.b_crimea-.1,6)}
  const [rx,ry]=P_(c,[40,57]);TG('RUSIA',cx_(rx,34,326),ry,13,'rgba(6,16,36,.9)',RU,t,E.b_crimea-.3);
  const L=(s,p,dy,ts)=>{if(t>ts-.1){const [x,y]=P_(c,p);TG(s,cx_(x,62,316),y+dy,11,'rgba(6,16,36,.9)',CAN,t,ts-.1)}};
  L('GRAN BRETAÑA',LO,-18,E.b_gb);L('FRANCIA',PA,20,E.b_fr);L('TURQUÍA',IS,24,E.b_tu);
  flecha(c,LO,CR,eio(nb(E.b_gb-.1,E.b_gb+1.1,t)),CAN,3.6);flecha(c,PA,CR,eio(nb(E.b_fr-.1,E.b_fr+.9,t)),CAN,3.6);flecha(c,IS,CR,eio(nb(E.b_tu-.1,E.b_tu+.8,t)),CAN,3.6);
  if(t>E.b_perdio){cruz(cx0,cy0,10,RED,spring(t-E.b_perdio,11,6));shock(cx0,cy0,t,E.b_perdio,'rgba(255,77,94,.95)',100,5,.9);burst(cx0,cy0,t,E.b_perdio,[RED,'#ffd166','#fff'],26,150,.9,3)}
  TG('GUERRA DE CRIMEA',180,96,18,GOLD,INK,t,E.b_crimea-.05);
  TX('DESPUÉS LLEGÓ',180,142,28,'#fff',t,14.3,{w:340,out:E.b_perdio-.2});
  if(t>E.b_perdio-.05&&t<E.b_1856-.15)sl('RUSIA PIERDE',180,160,42,RED,t,E.b_perdio,{sh:'rgba(255,77,94,.6)'});
  if(t>E.b_1856-.05)sl('1856',180,160,60,GOLD,t,E.b_1856,{sh:'rgba(255,209,102,.6)'});
}

// S3 Canadá al lado, Rusia necesita dinero y prefiere vender a EE. UU.
function s3(t,u){
  const c=mapaCam(t,[[23.0,-143,60,9.5],[34.9,-146,60,10.6]]);
  base(c);
  const pc=.7+.3*Math.sin(t*5);
  mundo(c,{ak:RU,aka:.44,caa:t>E.c_canada?pc*1.25:1});
  const [kx,ky]=P_(c,[-128,60.5]);if(t>E.c_canada-.1)TG('CANADÁ',cx_(kx,30,330),ky,14,CAN,INK,t,E.c_canada-.1);
  if(t>E.c_canada){const [x,y]=P_(c,[-128,62]);shock(x,y,t,E.c_canada,'rgba(46,196,182,.95)',110,5,.9)}
  const bk=nb(E.c_lado-.1,E.c_lado+1.2,t);const hb=ruta(c,BORDE,eio(bk),GOLD,4.2,{dash:[7,5],t});if(hb)circ(hb[0],hb[1],5,GOLD,'#fff',1.6);
  // billete
  const bo=eio(nb(E.c_vender-.4,E.c_vender,t));
  if(t>E.c_dinero-.1&&bo<1){ctx.save();ctx.globalAlpha=1-bo;billete(180,300-bo*40,1.3,spring(t-E.c_dinero+.1,11,6.4)*(1-bo*.3));if(t>E.c_dinero){shock(180,300,t,E.c_dinero,'rgba(255,209,102,.9)',110,5,.9);burst(180,300,t,E.c_dinero,[GOLD,'#fff','#7ef0b0'],26,150,.9,3)}ctx.restore()}
  // flecha hacia EE. UU.
  flecha(c,[-152,62],[-124.2,47.4],eio(nb(E.c_vender-.1,E.c_eeuu+.9,t)),US,5);
  const [ux,uy]=P_(c,[-125,46]);
  if(t>E.c_eeuu-.1)TG('EE. UU.',cx_(ux-10,34,326),uy+14,14,US,'#fff',t,E.c_eeuu-.1);
  if(t>E.c_eeuu){shock(ux+8,uy-6,t,E.c_eeuu,'rgba(77,163,255,.95)',90,5,.9)}
  TG('LA ENEMIGA',180,96,20,CAN,INK,t,E.c_enemiga-.05,{out:E.c_lado-.3});
  TX('JUSTO AL LADO',180,142,32,'#fff',t,E.c_lado-.2,{w:340,out:E.c_dinero-.2});
  if(t>E.c_dinero-.2){TX('RUSIA NECESITA',180,98,24,'#fff',t,E.c_dinero-.2,{w:340,out:E.c_vender-.2});TX('DINERO',180,146,46,GOLD,t,E.c_dinero,{w:340,out:E.c_vender-.2})}
  if(t>E.c_vender-.2){TX('PREFIERE VENDER A',180,98,24,'#fff',t,E.c_vender-.2,{w:340});}
  if(t>E.c_eeuu-.1)TX('EE. UU.',180,144,44,US,t,E.c_eeuu-.1,{w:340});
  if(t>E.c_brit-.1)TG('TAMBIÉN RIVAL DE LOS BRITÁNICOS',180,476,13,'rgba(6,16,36,.92)',CAN,t,E.c_brit-.1);
}

// S4 Seward acepta la oferta de Stoeckl
function s4(t,u){
  const c=mapaCam(t,[[35.0,-84,40,12],[41.9,-79,39.2,15]]);
  base(c,{dim:.42});mundo(c,{a:.5});
  PF(c,['Canada'],null,0,{ba:.4,lw:.8});
  veil(.28);
  const [wx,wy]=pin(c,-77.04,38.9,GOLD,t,35.0,5);
  if(t>35.2)TG('WASHINGTON, D. C.',cx_(wx,70,290),wy+22,12,'rgba(6,16,36,.92)',GOLD,t,35.3);
  const ap=eio(nb(E.d_acepto-.1,E.d_oferta+.1,t));
  const xs=lerp(60,125,ap),xr=lerp(300,235,ap);
  const ea=eb(nb(E.d_seward-.2,E.d_seward+.4,t)),er=eb(nb(E.d_oferta-.9,E.d_oferta-.3,t));
  if(t>E.d_seward-.2){tr(xs,410,ea,0,()=>{persona(0,0,1.25,US,t)})}
  if(t>E.d_oferta-.9){tr(xr,410,er,0,()=>{persona(0,0,1.25,RU,t,2)})}
  if(t>E.d_oferta-.1){const pk=eio(nb(E.d_oferta-.2,E.d_oferta+.5,t));papel(lerp(260,180,pk),lerp(340,330,pk)-Math.sin(pk*3.14)*18,1.1,lerp(.3,0,pk),'#8a6a3a');
    if(t>E.d_oferta){shock(180,330,t,E.d_oferta,'rgba(255,209,102,.9)',90,4,.8);burst(180,330,t,E.d_oferta,[GOLD,'#fff'],22,140,.8,3)}}
  TX('EL SECRETARIO DE ESTADO',180,100,24,'#fff',t,E.d_sec-.1,{w:340,out:E.d_seward-.2});
  if(t>E.d_seward-.2)TX('WILLIAM SEWARD',180,100,32,US,t,E.d_seward-.2,{w:340});
  if(t>E.d_acepto-.1)TX('ACEPTA LA OFERTA',180,148,26,'#fff',t,E.d_acepto-.1,{w:340});
  if(t>E.d_acepto+.9)TX('DEL DIPLOMÁTICO RUSO',180,190,20,'#fff',t,E.d_acepto+.9,{w:340,out:E.d_stoeckl-.2});
  if(t>E.d_stoeckl-.2)TX('EDUARD DE STOECKL',180,190,27,RU,t,E.d_stoeckl-.2,{w:340});
  if(t>E.d_seward)TG('SEWARD · EE. UU.',xs,480,12,US,'#fff',t,E.d_seward+.05);
  if(t>E.d_oferta-.5)TG('STOECKL · RUSIA',xr,480,12,RU,'#fff',t,E.d_oferta-.4);
}

// S5 tratado, Senado, traspaso; Alaska cambia de color
function nodo(x,y,col,t,t0,fecha,cap,fd){if(t<t0)return;const k=spring(t-t0,11,6.4);circ(x,y,9*k,col,'#fff',2.5);shock(x,y,t,t0,'rgba(255,209,102,.8)',46,3,.6);
  if(t>fd){const e=eb(nb(fd,fd+.3,t));txt(fecha,x,y-24,17*e+1,GOLD,{st:INK,sw:4,wt:'900'})}
  if(t>t0+.05){ctx.save();ctx.globalAlpha=cl((t-t0)*5);txt(cap,x,y+28,13,'#fff',{st:INK,sw:3,wt:'900'});ctx.restore()}}
function s5(t,u){
  const c=mapaCam(t,[[41.93,-150,58,9.2],[54.3,-152,58.5,10]]);
  base(c);
  const k=eo(nb(E.e_usa-.1,E.e_usa+1.0,t));
  mundo(c,{ak:mixc(RU,US,k),aka:.46+.16*k});
  if(t>E.e_usa){const [x,y]=P_(c,[-152,64]);shock(x,y,t,E.e_usa,'rgba(77,163,255,.95)',130,6,1);burst(x,y,t,E.e_usa,[US,'#fff',GOLD],30,170,1,3.2)}
  // línea de tiempo
  const ty=438;const lk=eio(nb(E.e_trat,E.e_18+.2,t));
  if(t>E.e_trat-.2){ctx.save();rr(14,ty-56,332,104,12);ctx.fillStyle='rgba(6,16,36,.82)';ctx.globalAlpha=eo(nb(E.e_trat-.2,E.e_trat+.3,t));ctx.fill();ctx.restore();
    ctx.save();ctx.lineCap='round';ctx.strokeStyle='rgba(255,255,255,.5)';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(56,ty);ctx.lineTo(304,ty);ctx.stroke();ctx.strokeStyle=GOLD;ctx.lineWidth=3.6;ctx.beginPath();ctx.moveTo(56,ty);ctx.lineTo(lerp(56,304,lk),ty);ctx.stroke();ctx.restore()}
  nodo(62,ty,GOLD,t,E.e_30-.1,'30 MAR','TRATADO',E.e_30);
  nodo(180,ty,GOLD,t,E.e_sen-.1,'9 ABR','SENADO',E.e_9);
  nodo(298,ty,US,t,E.e_18-.1,'18 OCT','TRASPASO',E.e_18);
  if(t>E.e_30-.05){TG('1867',180,96,20,GOLD,INK,t,E.e_1867-.55,{out:E.e_usa-.25})}
  TX('EL TRATADO SE FIRMA',180,142,26,'#fff',t,E.e_trat-.1,{w:340,out:E.e_sen-.3});
  if(t>E.e_sen-.2)TX('EL SENADO LO APRUEBA',180,142,26,'#fff',t,E.e_sen-.2,{w:340,out:E.e_18-.3});
  if(t>E.e_18-.2)TX('EL TRASPASO OFICIAL',180,142,26,'#fff',t,E.e_18-.2,{w:340,out:E.e_usa-.25});
  if(t>E.e_usa-.05)TG('ALASKA ES ESTADOUNIDENSE',180,96,15,US,'#fff',t,E.e_usa-.05);
}

// S6 precio y tamaño
function s6(t,u){
  const c=mapaCam(t,[[54.4,-152,58.5,10],[61.0,-152,61,12.2]]);
  base(c);
  const pul=.62+.18*Math.sin(t*5);
  mundo(c,{ak:US,aka:t>E.f_km-1.3?pul:.5});
  const bo=eio(nb(58.0,58.5,t));
  if(t>E.f_siete-.1&&bo<1){ctx.save();ctx.globalAlpha=1-bo;billete(180,330,1.45,spring(t-E.f_siete+.1,11,6.4)*(1-bo*.3));
    if(t>E.f_dol){shock(180,330,t,E.f_dol,'rgba(255,209,102,.9)',110,5,.9);burst(180,330,t,E.f_dol,[GOLD,'#fff','#7ef0b0'],28,150,.9,3)}ctx.restore()}
  TX('EE. UU. PAGÓ',180,98,26,'#fff',t,E.f_siete-.1,{w:340,out:58.0});
  if(t>E.f_siete-.05&&t<58.1){const v=countV(0,7200000,t,E.f_siete,2.2);txt('$'+fmtM(v),180,160,40,GOLD,{st:INK,sw:6,sc:eb(nb(E.f_siete-.05,E.f_siete+.3,t))})}
  if(t>E.f_dol-.1&&t<58.1)TX('DÓLARES',180,206,28,'#fff',t,E.f_dol-.1,{w:340});
  if(t>58.05){TX('POR MÁS DE',180,98,26,'#fff',t,58.05,{w:340});const v=countV(0,1.5,t,58.6,.9);txt('+'+v.toFixed(1).replace('.',',')+' MILLONES',180,160,36,GOLD,{st:INK,sw:6,sc:eb(nb(58.6,58.9,t))});
    if(t>E.f_km-.05)TX('DE KM²',180,206,30,'#fff',t,E.f_km-.05,{w:340})}
  if(t>E.f_km){const [x,y]=P_(c,[-152,64]);shock(x,y,t,E.f_km,'rgba(77,163,255,.95)',150,6,1)}
}

// S7 la locura / nevera de Seward; fiebre del oro del Klondike
function s7(t,u){
  const c=mapaCam(t,[[61.1,-152,61,12.2],[66.9,-146,62,13],[69.0,-139.4,64,27,eio],[71.45,-139.4,64,28]]);
  base(c);mundo(c,{ak:US,aka:.4});
  const nv=nb(E.g_nevera-.1,E.g_nevera+.8,t);veil(.22*nv,'120,190,255');
  if(t>E.g_nevera-.1)dust(t,60,'#e8f6ff',7,16,1.6,.7*nv);
  if(t>E.g_locura-.1&&t<E.g_1896-.2){TG('LA LOCURA DE SEWARD',180,96,16,RED,'#fff',t,E.g_locura-.1);if(t>E.g_locura)shock(180,200,t,E.g_locura,'rgba(255,77,94,.7)',70,3,.6)}
  if(t>E.g_nevera-.1&&t<E.g_1896-.2){TG('LA NEVERA DE SEWARD',180,140,16,'#6fc3ff',INK,t,E.g_nevera-.1);for(let i=0;i<10;i++){const q=eo(cl((t-E.g_nevera)*1.3-i*.05));if(q>0)gema(40+i*31,160+((i*53)%90)+q*60,1.5*q,ICE,t,i)}}
  if(t>E.g_1896-.1){TG('1896',180,96,22,GOLD,INK,t,E.g_1896-.1,{out:E.g_crit-.1});TX('FIEBRE DEL ORO',180,142,28,'#fff',t,E.g_klon-.7,{w:340,out:E.g_crit-.1})}
  if(t>E.g_klon-.1){const [x,y]=pin(c,-139.4,64.0,GOLD,t,E.g_klon-.1,6);TG('KLONDIKE',cx_(x,40,320),y+26,13,GOLD,INK,t,E.g_klon);shock(x,y,t,E.g_klon,'rgba(255,209,102,.95)',110,5,.9);burst(x,y,t,E.g_klon,[GOLD,'#fff','#ffb703'],34,170,1.1,3.4);
    for(let i=0;i<28;i++){const q=cl((t-E.g_klon)*.9-i*.015);if(q>0&&q<1)gema(20+R(i)*320,60+q*420,1.4,GOLD,t,i)}}
  if(t>E.g_crit-.1)TG('CONVENCIÓ A LOS CRÍTICOS',180,96,15,GOLD,INK,t,E.g_crit-.1);
}

// S8 cierre: las dos posturas + pregunta
function s8(t,u){
  const c=mapaCam(t,[[71.4,-139.4,64,28],[72.4,-152,58,10],[83.5,-152,58,11]]);
  base(c,{dim:.58});mundo(c,{ak:US,aka:.4,a:.9});
  veil(.3);
  if(t>E.h2_unos-.1){const a=eb(nb(E.h2_unos-.1,E.h2_unos+.4,t));tr(180,170,a,0,()=>{bocadillo(0,0,300,84,'rgba(24,60,120,.95)',1,-60);txt('PARA UNOS',0,-24,14,'#bcd9ff',{st:INK,sw:3});txt('“LA MEJOR GANGA',0,2,19,'#fff',{st:INK,sw:4});txt('DE LA HISTORIA”',0,26,19,'#fff',{st:INK,sw:4})})}
  if(t>E.h2_otros-.1){const a=eb(nb(E.h2_otros-.1,E.h2_otros+.4,t));tr(180,300,a,0,()=>{bocadillo(0,0,330,100,'rgba(120,30,40,.95)',1,60);txt('PARA OTROS',0,-32,14,'#ffc2c2',{st:INK,sw:3});txt('“RUSIA NO PODÍA DEFENDERLA',0,-6,17,'#fff',{st:INK,sw:4});txt('Y VENDIÓ ANTES',0,16,17,'#fff',{st:INK,sw:4});txt('DE PERDERLA”',0,38,17,'#fff',{st:INK,sw:4})})}
  if(t>E.h2_ganga)shock(180,170,t,E.h2_ganga,'rgba(77,163,255,.9)',80,4,.6);
  if(t>E.h2_vendio)shock(180,300,t,E.h2_vendio,'rgba(255,77,94,.9)',80,4,.6);
  if(t>E.h2_piensas-.1)sl('¿TÚ QUÉ PIENSAS?',180,408,30,GOLD,t,E.h2_piensas,{sh:'rgba(255,209,102,.6)'});
  TG('COMENTA TU RESPUESTA',180,468,16,GOLD,INK,t,E.h2_com-.05);
}

boot([s0,s1,s2,s3,s4,s5,s6,s7,s8],TRS,{cap:{acc:'#ffd166'}});
