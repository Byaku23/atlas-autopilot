// ===== ¿Por qué Panamá se separó de Colombia? — escenas =====
const sl=(s,x,y,sz,col,t,ts,o={})=>slam(s,x,y,sz,col,t,ts,Object.assign({st:INK,sw:Math.max(6,sz*.18),sh:'rgba(255,77,141,.5)'},o));
const P_=(c,p)=>mapaPunto(c,p[0],p[1]);
const veil=(a,col='4,10,28')=>{ctx.save();ctx.fillStyle='rgba('+col+','+a+')';ctx.fillRect(0,0,360,640);ctx.restore()};
const fmtM=(v)=>Math.round(v).toLocaleString('es').replace(/,/g,'.');
const VEC=['Costa Rica','Nicaragua','Honduras','Venezuela','Ecuador','Peru','Brazil','Guyana'];
function mundo(c,o={}){
  const a=o.a===undefined?1:o.a;
  PF(c,['Colombia'],o.cc||COL,.3*a,{b:'#fff',lw:1.2,ba:.85});
  PF(c,['Panama'],o.pc||COL,(o.pa===undefined?.3:o.pa)*a,{b:o.pb||'#fff',lw:o.plw||1.2,ba:.95});
  PF(c,VEC,'#ffffff',.05*a,{b:'#fff',lw:.9,ba:.45});
  SF(c,null,US,(o.usa===undefined?.16:o.usa)*a,{b:'#fff',lw:.9,ba:.5});
}
function billete(x,y,s,k){tr(x,y,k,0,()=>{ctx.save();ctx.scale(s,s);rr(-92,-46,184,92,8);ctx.fillStyle='#2f7d4f';ctx.fill();ctx.strokeStyle='#d9f2dd';ctx.lineWidth=3;ctx.stroke();rr(-80,-34,160,68,5);ctx.strokeStyle='rgba(217,242,221,.6)';ctx.lineWidth=1.6;ctx.stroke();circ(0,0,24,'rgba(217,242,221,.25)','#d9f2dd',2);txt('$',0,2,32,'#e8f7ea',{st:INK,sw:3,wt:'900'});ctx.restore()})}
function gema(x,y,s,col,t,ph=0){const k=1+.12*Math.sin(t*6+ph);ctx.save();ctx.translate(x,y);ctx.scale(s*k,s*k);ctx.beginPath();ctx.moveTo(0,-8);ctx.lineTo(5,0);ctx.lineTo(0,9);ctx.lineTo(-5,0);ctx.closePath();ctx.fillStyle=col;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=1.3/s;ctx.stroke();ctx.beginPath();ctx.moveTo(0,-8);ctx.lineTo(0,9);ctx.moveTo(-5,0);ctx.lineTo(5,0);ctx.strokeStyle='rgba(255,255,255,.7)';ctx.lineWidth=.8/s;ctx.stroke();ctx.restore()}
function persona(x,y,s,col,t,ph=0){const b=Math.sin(t*3+ph)*1.5;ctx.save();ctx.translate(x,y+b);ctx.scale(s,s);ctx.lineJoin='round';
  ctx.beginPath();ctx.moveTo(-28,64);ctx.quadraticCurveTo(-30,8,0,6);ctx.quadraticCurveTo(30,8,28,64);ctx.closePath();ctx.fillStyle=col;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=3;ctx.stroke();
  circ(0,-14,17,mixc(col,'#000000',.22),INK,3);ctx.restore()}
function papel(x,y,s,rot,col){ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.scale(s,s);rr(-26,-32,52,64,4);ctx.fillStyle=CRM;ctx.fill();ctx.strokeStyle=col;ctx.lineWidth=3;ctx.stroke();ctx.strokeStyle='rgba(58,42,20,.5)';ctx.lineWidth=2;for(let i=0;i<4;i++){ctx.beginPath();ctx.moveTo(-17,-18+i*10);ctx.lineTo(17-(i%2)*8,-18+i*10);ctx.stroke()}txt('$',0,22,14,'#2f7d4f',{wt:'900'});ctx.restore()}

function nodo(x,y,col,t,t0,fecha,cap,fd){if(t<t0)return;const k=spring(t-t0,11,6.4);circ(x,y,9*k,col,'#fff',2.5);shock(x,y,t,t0,'rgba(255,209,102,.8)',46,3,.6);
  if(t>fd){const e=eb(nb(fd,fd+.3,t));txt(fecha,x,y-24,17*e+1,GOLD,{st:INK,sw:4,wt:'900'})}
  if(t>t0+.05){ctx.save();ctx.globalAlpha=cl((t-t0)*5);txt(cap,x,y+28,13,'#fff',{st:INK,sw:3,wt:'900'});ctx.restore()}}

// S0 GANCHO: un país nació en 1903 con un barco de guerra frente a su costa
function s0(t,u){
  const c=mapaCam(t,[[0,-76.5,7,22],[6.0,-78.5,8.6,24],[8.94,-79.5,9.0,40,eio]]);
  base(c);
  const pp=.3+.22*Math.sin(t*4)*nb(E.h_pan-.1,E.h_pan+.4,t);
  mundo(c,{pa:t>E.h_pan?pp*1.6:.3,pc:t>E.h_pan?PAN:COL});
  const [lx,ly]=P_(c,[-73.5,3.5]);if(t>E.h_col-.1)TG('COLOMBIA',cx_(lx,40,320),ly,14,COL,INK,t,E.h_col-.1);
  const [px,py]=P_(c,[-80.6,8.4]);if(t>E.h_pan)TG('PANAMÁ',cx_(px,40,320),py+8,13,PAN,'#fff',t,E.h_pan);
  if(t>E.h_barco-.5){const k=eio(nb(E.h_barco-.5,E.h_barco+2.2,t));const [bx,by]=P_(c,[lerp(-77.0,-79.8,k),lerp(11.5,10.5,k)]);
    ctx.save();ctx.globalAlpha=.5;line(bx,by+7,bx+26,by+7,'#fff',2);ctx.restore();barco(bx,by,1.05,US,t,-1);
    if(t>E.h_barco)shock(bx,by,t,E.h_barco,'rgba(77,163,255,.9)',60,4,.8)}
  TG('1903',180,92,22,GOLD,INK,t,-.6,{out:E.h_barco-.3});
  TX('UN PAÍS NACIÓ',180,138,34,'#fff',t,-.5,{w:340,out:E.h_barco-.3});
  if(t>E.h_barco-.2)TX('CON UN BARCO',180,98,26,'#fff',t,E.h_barco-.2,{w:340,out:E.h_porque-.15});
  if(t>E.h_barco+.4)TX('DE GUERRA',180,146,40,US,t,E.h_barco+.4,{w:340,out:E.h_porque-.15});
  if(t>E.h_porque-.05)TX('¿POR QUÉ PANAMÁ',180,98,28,'#fff',t,E.h_porque-.05,{w:340});
  if(t>E.h_col-.2)TX('DEJÓ COLOMBIA?',180,146,40,COL,t,E.h_col-.2,{w:340});
  if(t>E.h_col)shock(lx,ly,t,E.h_col,'rgba(255,159,28,.9)',90,5,.9);
}

// S1 lejos de Bogotá, selva; Francia fracasa; EE. UU. quiere terminarlo
function s1(t,u){
  const c=mapaCam(t,[[8.94,-79.5,9.0,40],[10.0,-76.8,6.8,30,eio],[12.4,-79.7,9.15,34,eio],[14.3,-79.72,9.17,95,eio],[19.25,-79.72,9.17,98]]);
  base(c);
  mundo(c,{pc:COL,pa:.34});
  // Bogotá y distancia
  const [bx,by]=pin(c,BOGOTA[0],BOGOTA[1],COL,t,E.a_bogota-.1,5);
  if(t>E.a_bogota-.1&&t<E.a_fr-.3){TG('BOGOTÁ',cx_(bx,36,324),by+22,13,COL,INK,t,E.a_bogota);
    const hb=ruta(c,[PCITY,[-77.5,7.2],BOGOTA],clamp01((t-E.a_bogota+.1)/.9),GOLD,3.6,{dash:[6,5],t});if(hb)circ(hb[0],hb[1],4,GOLD,'#fff',1.4)}
  // selva (Darién)
  if(t>E.a_selva-.2&&t<E.a_fr-.2){const k=eo(nb(E.a_selva-.2,E.a_selva+.5,t));poly(c,[[-78.3,8.6],[-77.2,8.5],[-76.6,7.4],[-77.0,6.4],[-78.1,7.0]],JUN,.52*k,{b:'#bdf5d6',lw:2.2,dash:[5,4]});
    const [jx,jy]=P_(c,[-77.5,7.4]);TG('SELVA',cx_(jx,34,326),jy,13,JUN,INK,t,E.a_selva);if(t>E.a_selva)dust(t,30,'#7ef0b0',5,12,1.8,.7*k)}
  // canal francés
  const CAN_=[COLON,[-79.78,9.2],[-79.65,9.08],PCITY];
  const fk=eio(nb(E.a_canal-.3,E.a_20-.2,t));
  if(t>E.a_fr-.1&&t<E.a_quiso+.2){const hh=ruta(c,CAN_,fk,FR,6.5,{dash:fk<1?[8,5]:null,t});if(hh&&fk<1)circ(hh[0],hh[1],4.5,FR,'#fff',1.6)}
  if(t>E.a_fr-.1){const [fx,fy]=P_(c,[-80.4,9.9]);TG('FRANCIA',cx_(fx,36,324),fy,14,FR,'#fff',t,E.a_fr-.1,{out:E.a_20-.3})}
  // muertos
  if(t>E.a_20-.2&&t<E.a_eeuu-.25){const dk=nb(E.a_20-.2,E.a_20+.9,t);const v=countV(0,20000,t,E.a_20-.1,1.1);
    txt('~'+fmtM(v),180,160,42,RED,{st:INK,sw:6,sc:eb(nb(E.a_20-.2,E.a_20+.2,t))});
    for(let i=0;i<14;i++){const q=eo(cl(dk*1.5-i*.04));if(q<=0)continue;const [x,y]=P_(c,[-79.9+i*.026,9.34-i*.03]);cruz(x,y-(1-q)*16,3.4*q,RED,1)}}
  if(t>E.a_muertos){const [x,y]=P_(c,[-79.7,9.15]);cruz(x,y,12,RED,spring(t-E.a_muertos,11,6));shock(x,y,t,E.a_muertos,'rgba(255,77,94,.95)',100,5,.9)}
  // EE. UU. termina el canal
  if(t>E.a_eeuu-.1&&t<E.a_quiso-.1){const [ux,uy]=P_(c,[-82.5,10.4]);TG('EE. UU.',cx_(ux,34,326),uy,14,US,'#fff',t,E.a_eeuu-.1);barco(ux+28,uy+30,.7,US,t,-1)}
  if(t>E.a_quiso){const k=eio(nb(E.a_quiso,E.a_quiso+.9,t));ruta(c,CAN_,k,US,6.5,{});shock(...P_(c,PCITY),t,E.a_quiso,'rgba(77,163,255,.95)',90,5,.9)}
  TG('PANAMÁ, LEJOS',180,96,18,PAN,'#fff',t,E.a_bogota-.9,{out:E.a_fr-.3});
  TX('DE BOGOTÁ',180,142,34,'#fff',t,E.a_bogota-.8,{w:340,out:E.a_fr-.3});
  if(t>E.a_fr-.2){TX('FRANCIA FRACASÓ',180,98,26,'#fff',t,E.a_fr-.2,{w:340,out:E.a_20-.25});TX('CAVANDO UN CANAL',180,146,28,FR,t,E.a_canal-.3,{w:340,out:E.a_20-.25})}
  if(t>E.a_20-.2)TX('MUERTOS',180,206,30,'#fff',t,E.a_muertos-.3,{w:340,out:E.a_eeuu-.2});
  if(t>E.a_eeuu-.2){TX('ESTADOS UNIDOS',180,98,26,US,t,E.a_eeuu-.2,{w:340});TX('QUISO TERMINARLO',180,146,28,'#fff',t,E.a_quiso-.3,{w:340})}
}
const clamp01=v=>Math.max(0,Math.min(1,v));

// S2 tratado con Colombia; el Senado colombiano lo rechaza (agosto)
function s2(t,u){
  const c=mapaCam(t,[[19.25,-77,22,9],[27.7,-77,22,10]]);
  base(c);mundo(c,{pa:.3,usa:.22});
  const [wx,wy]=pin(c,WASH[0],WASH[1],US,t,19.4,5);TG('WASHINGTON',cx_(wx,50,310),wy-22,12,US,'#fff',t,19.5);
  const [bx,by]=pin(c,BOGOTA[0],BOGOTA[1],COL,t,19.9,5);TG('BOGOTÁ',cx_(bx+8,36,324),by+22,12,COL,INK,t,20.0);
  const pk=eio(nb(E.b_trat-.2,E.b_sen-.1,t));
  if(pk>0&&t<E.b_rech){const hp=ruta(c,[WASH,[-76,20],[-74.8,10],BOGOTA],pk,GOLD,3.4,{dash:[6,5],t});if(hp)ctx.save(),ctx.translate(hp[0],hp[1]),papel(0,-6,.5,Math.sin(t*4)*.2,'#8a6a3a'),ctx.restore()}
  if(t>E.b_sen-.1){shock(bx,by,t,E.b_sen,'rgba(255,159,28,.9)',90,5,.9)}
  if(t>E.b_rech){const k=spring(t-E.b_rech,11,6);cruz(bx,by-26,16,RED,k);shock(bx,by,t,E.b_rech,'rgba(255,77,94,.95)',120,6,1);burst(bx,by,t,E.b_rech,[RED,'#fff',COL],26,150,.9,3)}
  // poco dinero / mucho control
  if(t>E.b_poco-.2){const k=spring(t-E.b_poco+.2,11,6.4);ctx.save();ctx.translate(70,470);ctx.scale(k,k);billete(0,0,.5,1);ctx.restore();TG('POCO DINERO',70,520,12,'rgba(6,16,18,.92)',GOLD,t,E.b_poco-.1)}
  if(t>E.b_ced-.2){const k=spring(t-E.b_ced+.2,11,6.4);ctx.save();ctx.translate(250,470);ctx.scale(k,k);
    rr(-30,-8,60,40,6);ctx.fillStyle=COL;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=3;ctx.stroke();ctx.beginPath();ctx.arc(0,-8,16,Math.PI,0);ctx.lineWidth=7;ctx.strokeStyle='#e8eef5';ctx.stroke();circ(0,12,5,INK,null,0);ctx.restore();
    TG('MUCHO CONTROL',250,520,12,'rgba(6,16,18,.92)',COL,t,E.b_ced-.1)}
  TG('1903',180,96,20,GOLD,INK,t,E.b_trat-.55,{out:E.b_sen-.3});
  TX('UN TRATADO',180,142,32,'#fff',t,E.b_trat-.4,{w:340,out:E.b_sen-.3});
  if(t>E.b_sen-.2)TX('EL SENADO COLOMBIANO',180,98,24,'#fff',t,E.b_sen-.2,{w:340});
  if(t>E.b_rech-.1)TX('LO RECHAZÓ',180,148,44,RED,t,E.b_rech-.1,{w:340});
  if(t>E.b_ago-.1)TG('AGOSTO 1903',180,206,17,GOLD,INK,t,E.b_ago-.1);
}

// S3 Roosevelt apoya a los rebeldes; 3 de noviembre: independencia
function s3(t,u){
  const c=mapaCam(t,[[27.7,-79.6,9.2,50],[34.0,-79.4,9.0,56],[35.86,-79.4,9.0,58]]);
  base(c);
  const k=eo(nb(E.c_indep-.1,E.c_indep+.9,t));
  mundo(c,{pc:mixc(COL,PAN,k),pa:.34+.18*k,pb:mixc('#ffffff',PAN,k),plw:1.2+2.2*k});
  const [px,py]=P_(c,PCITY);
  // rebeldes
  if(t>E.c_reb-.2){const q=eb(nb(E.c_reb-.2,E.c_reb+.4,t));ctx.save();ctx.globalAlpha=q;grupo(c,-79.9,9.05,8,PAN,t,0);ctx.restore();TG('REBELDES',cx_(px-40,40,320),py+36,12,PAN,'#fff',t,E.c_reb-.1)}
  // Roosevelt apoya
  if(t>E.c_roos-.2){const a=eb(nb(E.c_roos-.2,E.c_roos+.4,t));tr(48,420,a,0,()=>{persona(0,0,.9,US,t,1)});TG('ROOSEVELT · EE. UU.',cx_(100,70,290),470,12,US,'#fff',t,E.c_roos)}
  if(t>E.c_apoyo-.1){const hf=eio(nb(E.c_apoyo-.1,E.c_apoyo+1.0,t));const A=[78,408],B=[px-46,py+6];
    const x=lerp(A[0],B[0],hf),y=lerp(A[1],B[1],hf);ctx.save();ctx.lineCap='round';ctx.strokeStyle=INK;ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(A[0],A[1]);ctx.lineTo(x,y);ctx.stroke();ctx.strokeStyle=US;ctx.lineWidth=5;ctx.stroke();ctx.restore()}
  if(t>E.c_tres-.1){const e=eb(nb(E.c_tres-.1,E.c_tres+.4,t));tag('3 NOV 1903',180,250,24*e+2,GOLD,INK,t,E.c_tres-.1)}
  if(t>E.c_indep){shock(px,py,t,E.c_indep,'rgba(255,77,141,.95)',140,6,1);burst(px,py,t,E.c_indep,[PAN,'#fff',GOLD,US],40,190,1.1,3.4);for(let i=0;i<18;i++){const q=cl((t-E.c_indep)*.9-i*.02);if(q>0&&q<1)gema(px+(R(i)-.5)*220,py-q*160+(R(i+3)-.5)*40,1.3,[PAN,GOLD,US][i%3],t,i)}}
  if(t>E.c_ent-.1&&t<E.c_roos-.3)TX('ENTONCES...',180,120,34,'#fff',t,E.c_ent-.1,{w:340});
  if(t>E.c_roos-.2){TX('ROOSEVELT APOYÓ',180,98,24,'#fff',t,E.c_roos-.2,{w:340,out:E.c_tres-.3});TX('A LOS REBELDES',180,146,32,PAN,t,E.c_reb-.2,{w:340,out:E.c_tres-.3})}
  if(t>E.c_tres-.2){TX('DECLARAN LA',180,98,22,'#fff',t,E.c_tres-.2,{w:340});TX('INDEPENDENCIA',180,146,34,PAN,t,E.c_indep-.5,{w:340})}
}

// S4 el ferrocarril deja varadas a las tropas colombianas; llega el Nashville
function s4(t,u){
  const c=mapaCam(t,[[35.86,-79.7,9.2,70],[40.0,-79.8,9.5,72],[42.93,-79.8,9.5,72]]);
  base(c);mundo(c,{pc:PAN,pa:.4,usa:.1});
  const [cx0,cy0]=P_(c,COLON),[px,py]=P_(c,PCITY);
  // vía férrea
  ctx.save();ctx.setLineDash([4,3]);ctx.strokeStyle='#e8eef5';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(cx0,cy0);ctx.lineTo(px,py);ctx.stroke();ctx.restore();
  pin(c,COLON[0],COLON[1],GOLD,t,E.d_colon-.2,5);if(t>E.d_colon-.2)TG('COLÓN',cx_(cx0-30,34,326),cy0-34,13,GOLD,INK,t,E.d_colon-.1);
  // tren que se va hacia Panamá
  const tk=eio(nb(E.d_fc,E.d_var+1.0,t));const trx=lerp(cx0+4,px+70,tk),try_=lerp(cy0,py+40,tk)-8;
  if(t>E.d_fc-.2){const a=eb(nb(E.d_fc-.2,E.d_fc+.3,t));ctx.save();ctx.globalAlpha=a;tren(trx,try_,.8,US,t,1);ctx.restore()}
  // tropas varadas
  if(t>E.d_var-.1){const q=eb(nb(E.d_var-.1,E.d_var+.4,t));ctx.save();ctx.globalAlpha=q;grupo(c,-79.93,9.42,10,COL,t,3,1.2);ctx.restore();
    if(t>E.d_trop)TG('TROPAS COLOMBIANAS',cx_(cx0-20,66,294),cy0+46,12,COL,INK,t,E.d_trop-.1)}
  // Nashville
  if(t>E.d_nash-.5){const k=eio(nb(E.d_nash-.5,E.d_nash+1.4,t));const [bx,by]=P_(c,[lerp(-78.6,-79.8,k),lerp(10.9,9.95,k)]);ctx.save();ctx.globalAlpha=.45;line(bx,by+8,bx+34,by+8,'#fff',2);ctx.restore();barco(bx,by,1.25,US,t,-1);if(t>E.d_nash){shock(bx,by,t,E.d_nash,'rgba(77,163,255,.95)',90,5,.9);}
    if(t>E.d_nash)TG('USS NASHVILLE',cx_(bx+10,50,310),by-34,13,US,'#fff',t,E.d_nash)}
  TX('EL FERROCARRIL',180,98,26,'#fff',t,E.d_fc-.2,{w:340,out:E.d_trop-.2});
  if(t>E.d_var-.2)TX('LAS DEJÓ VARADAS',180,146,30,RED,t,E.d_var-.2,{w:340,out:E.d_trop-.2});
  if(t>E.d_nash-.5){TX('Y LLEGÓ EL',180,98,24,'#fff',t,E.d_nash-.5,{w:340});TX('NASHVILLE',180,146,44,US,t,E.d_nash-.1,{w:340})}
}

// S5 reconocimiento (6 nov), tratado del canal (18 nov), 10 millones, ingeniero francés
function s5(t,u){
  const c=mapaCam(t,[[42.93,-79.8,9.5,72],[44.5,-79.5,9.0,34,eio],[57.08,-79.5,9.0,36]]);
  base(c);mundo(c,{pc:PAN,pa:.42,usa:.14});
  const [px,py]=P_(c,PCITY);
  const ty=440,lk=eio(nb(E.e_tres,E.e_firmo+.2,t));
  if(t>E.e_tres-.2){ctx.save();rr(14,ty-56,332,104,12);ctx.fillStyle='rgba(6,16,18,.84)';ctx.globalAlpha=eo(nb(E.e_tres-.2,E.e_tres+.3,t));ctx.fill();ctx.restore();
    ctx.save();ctx.lineCap='round';ctx.strokeStyle='rgba(255,255,255,.5)';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(56,ty);ctx.lineTo(304,ty);ctx.stroke();ctx.strokeStyle=GOLD;ctx.lineWidth=3.6;ctx.beginPath();ctx.moveTo(56,ty);ctx.lineTo(lerp(56,304,lk),ty);ctx.stroke();ctx.restore()}
  nodo(62,ty,PAN,t,E.h_pais*0+42.95,'3 NOV','INDEPENDENCIA',42.95);
  nodo(180,ty,US,t,E.e_rec-.1,'6 NOV','EE. UU. RECONOCE',E.e_rec);
  nodo(298,ty,GOLD,t,E.e_firmo-.1,'18 NOV','TRATADO',E.e_firmo);
  if(t>E.e_rec){shock(px,py,t,E.e_rec,'rgba(77,163,255,.95)',110,6,1);burst(px,py,t,E.e_rec,[US,'#fff',PAN],26,150,.9,3)}
  // dinero
  if(t>E.e_diez-.2){const bo=eio(nb(E.e_neg-.5,E.e_neg,t));if(bo<1){ctx.save();ctx.globalAlpha=1-bo;billete(180,300-bo*30,1.2,spring(t-E.e_diez+.2,11,6.4));
    if(t>E.e_dol){shock(180,300,t,E.e_dol,'rgba(255,209,102,.9)',100,5,.9);burst(180,300,t,E.e_dol,[GOLD,'#fff','#7ef0b0'],26,150,.9,3)}ctx.restore()}}
  // ingeniero francés negocia por Panamá
  if(t>E.e_ing-.2){const a=eb(nb(E.e_ing-.2,E.e_ing+.4,t));tr(180,300,a,0,()=>{persona(0,0,1.5,FR,t,2)});TG('INGENIERO FRANCÉS',180,380,14,FR,'#fff',t,E.e_ing);
    if(t>E.e_fr)TG('NEGOCIA POR PANAMÁ',180,404,13,PAN,'#fff',t,E.e_fr)}
  TX('TRES DÍAS DESPUÉS',180,98,24,'#fff',t,E.e_tres-.1,{w:340,out:E.e_15-.3});
  if(t>E.e_rec-.2)TX('EE. UU. RECONOCE',180,146,28,US,t,E.e_rec-.2,{w:340,out:E.e_15-.3});
  if(t>E.e_15-.2){TX('QUINCE DÍAS MÁS TARDE',180,98,22,'#fff',t,E.e_15-.2,{w:340,out:E.e_diez-.25});TX('EL TRATADO DEL CANAL',180,146,26,GOLD,t,E.e_firmo-.2,{w:340,out:E.e_diez-.25})}
  if(t>E.e_diez-.2){TX('PANAMÁ RECIBE',180,98,24,'#fff',t,E.e_diez-.2,{w:340,out:E.e_neg-.3});const v=countV(0,10000000,t,E.e_diez,1.3);txt('$'+fmtM(v),180,160,40,GOLD,{st:INK,sw:6,sc:eb(nb(E.e_diez-.2,E.e_diez+.2,t))*(t<E.e_neg-.4?1:0)})}
  if(t>E.e_neg-.2)TX('LO NEGOCIABA',180,98,24,'#fff',t,E.e_neg-.2,{w:340});
}

// S6 canal abre en 1914; Panamá lo recibe el 31-dic-1999
function s6(t,u){
  const c=mapaCam(t,[[57.08,-79.5,9.0,36],[58.6,-79.72,9.17,95,eio],[66.1,-79.72,9.17,98]]);
  base(c);
  const CAN_=[COLON,[-79.78,9.2],[-79.65,9.08],PCITY];
  const rk=eio(nb(E.f_canal-.1,E.f_1914+.2,t)),ck=eo(nb(E.f_31,E.f_1999+.8,t));
  mundo(c,{pc:PAN,pa:.4+.2*ck,usa:.1});
  const hh=ruta(c,CAN_,rk,mixc(US,PAN,ck),6.5,{});
  if(t>E.f_1914-.5){const [x,y]=P_(c,[lerp(-79.9,-79.52,eio(nb(E.f_1914-.5,E.f_pan,t))),lerp(9.36,8.98,eio(nb(E.f_1914-.5,E.f_pan,t)))]);barco(x,y-8,.6,US,t,1)}
  if(t>E.f_1914){const [x,y]=P_(c,[-79.7,9.15]);shock(x,y,t,E.f_1914,'rgba(255,209,102,.95)',110,6,1);burst(x,y,t,E.f_1914,[GOLD,'#fff',US],30,170,1,3.2)}
  if(t>E.f_31){const [x,y]=P_(c,[-79.7,9.15]);shock(x,y,t,E.f_31,'rgba(255,77,141,.95)',110,5,.9)}
  if(t>E.f_1999){const [x,y]=P_(c,[-79.7,9.15]);shock(x,y,t,E.f_1999,'rgba(255,77,141,.95)',150,6,1);burst(x,y,t,E.f_1999,[PAN,'#fff',GOLD],40,200,1.2,3.4)}
  TX('EL CANAL ABRIÓ',180,98,26,'#fff',t,E.f_canal-.2,{w:340,out:E.f_pan-.25});
  if(t>E.f_1914-.1&&t<E.f_pan-.3)sl('1914',180,160,60,GOLD,t,E.f_1914,{sh:'rgba(255,209,102,.6)'});
  if(t>E.f_pan-.1)TX('PANAMÁ NO LO RECIBIÓ',180,98,22,'#fff',t,E.f_pan-.1,{w:340});
  if(t>E.f_31-.2)TG('31 DIC 1999',180,150,26,GOLD,INK,t,E.f_31-.2);
  if(t>E.f_1999-.1)sl('1999',180,206,56,PAN,t,E.f_1999,{sh:'rgba(255,77,141,.6)'});
}

// S7 cierre: las dos posturas y la pregunta
function s7(t,u){
  const c=mapaCam(t,[[66.1,-79.7,9.15,64],[67.5,-79.2,8.8,30,eio],[78.97,-78.5,8.6,26]]);
  base(c,{dim:.58});mundo(c,{pc:PAN,pa:.4,a:.9});
  veil(.3);
  if(t>E.g_unos-.1){const a=eb(nb(E.g_unos-.1,E.g_unos+.4,t));tr(180,170,a,0,()=>{bocadillo(0,0,310,84,'rgba(150,30,90,.95)',1,-60);txt('PARA UNOS',0,-24,14,'#ffd1e6',{st:INK,sw:3});txt('“UN PUEBLO QUE QUERÍA',0,2,18,'#fff',{st:INK,sw:4});txt('SU PROPIO PAÍS”',0,26,19,'#fff',{st:INK,sw:4})})}
  if(t>E.g_otros-.1){const a=eb(nb(E.g_otros-.1,E.g_otros+.4,t));tr(180,300,a,0,()=>{bocadillo(0,0,330,100,'rgba(24,60,120,.95)',1,60);txt('PARA OTROS',0,-32,14,'#bcd9ff',{st:INK,sw:3});txt('“UNA JUGADA DE EE. UU.',0,-6,17,'#fff',{st:INK,sw:4});txt('PARA QUEDARSE',0,16,17,'#fff',{st:INK,sw:4});txt('CON EL CANAL”',0,38,17,'#fff',{st:INK,sw:4})})}
  if(t>E.g_pueblo)shock(180,170,t,E.g_pueblo,'rgba(255,77,141,.9)',80,4,.6);
  if(t>E.g_jugada)shock(180,300,t,E.g_jugada,'rgba(77,163,255,.9)',80,4,.6);
  if(t>E.g_piensas-.1)sl('¿TÚ QUÉ PIENSAS?',180,408,30,GOLD,t,E.g_piensas,{sh:'rgba(255,209,102,.6)'});
  TG('COMENTA TU RESPUESTA',180,468,16,GOLD,INK,t,E.g_com-.05);
}

boot([s0,s1,s2,s3,s4,s5,s6,s7],TRS,{cap:{acc:'#ff9fc4'}});
