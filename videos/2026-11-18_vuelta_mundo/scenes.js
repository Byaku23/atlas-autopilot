// ===== La Guerra Fría en mapa — escenas =====
const BL=[13.4,52.5];                       // Berlín
const bp=c=>mapaPunto(c,BL[0],BL[1]);
const CA=[[0,-25,47,4.2]];                  // vista Atlántico (EE. UU. – Europa)
const CEU=[16,50,11];
const sl=(s,x,y,sz,col,t,ts,o={})=>slam(s,x,y,sz,col,t,ts,Object.assign({st:INK,sw:Math.max(6,sz*.18),sh:'rgba(255,61,61,.55)'},o));

// S0 GANCHO: Berlín partida por un muro → "mira el mapa" (aleja a Europa)
function s0(t,u){
  const c=mapaCam(t,[[0,13.4,52.5,30],[5.2,13.4,52.5,30],[6.5,CEU[0],CEU[1],CEU[2]]]);
  base(c);
  const sp=eo(nb(E.s_dos,E.s_dos+.8,t));
  PF(c,['Germany'],NEU,.18*(1-sp),{b:'rgba(255,255,255,.9)',lw:1.4});ger(c,.38*sp,.38*sp);
  const [x,y]=bp(c),R_=Math.max(14,c.s*2.1);
  const sh=at(t,'s_dos')?Math.sin(t*60)*2*Math.exp(-(t-E.s_dos)*9):0;
  ciudad(x+sh,y,R_,t,{sp,gap:eo(nb(E.s_dos+.15,E.s_dos+.9,t))*7,wall:eo(nb(E.s_dos-.05,E.s_dos+.45,t))});
  shock(x,y,t,E.s_dos,'rgba(255,255,255,.9)',R_*1.6,4,.7);
  TX('UN MURO PARTIÓ',180,92,32,'#fff',t,-.6,{w:330});
  TX('UNA CIUDAD EN DOS',180,134,32,GOLD,t,-.45,{w:340});
  if(t>1.0)TG('BERLÍN',x,Math.max(y-R_-26,150),Math.max(11,R_*.3),'rgba(7,16,31,.85)','#fff',t,1.0,{out:5.2});
  sl('GUERRA FRÍA',180,430,44,'#fff',t,E.s_gf);
  TG('MIRA EL MAPA',180,478,15,GOLD,INK,t,E.s_mapa-.05);
}

// S1 12 MAR 1947: Estados Unidos promete ayuda; el comunismo del este
function s1(t,u){
  const c=mapaCam(t,[[6.5,-26,45,3.4],[15,-33,45,3.5,eio]]);
  base(c);ger(c,.0,0);
  const a=eo(nb(E.a_eeuu,E.a_eeuu+.9,t));
  PF(c,['United States of America'],W_,.5*a,{b:'#fff',lw:1.6});
  const P=(lo,la)=>mapaPunto(c,lo,la);
  const ar=[[P(-76,40),P(-45,46),P(-8,46.5)],[P(-76,38),P(-45,37),P(14,40)],[P(-76,41),P(-45,52),P(-6,52)]];
  ar.forEach((p,i)=>flecha(p,nb(E.a_prom+i*.18,E.a_res+.4+i*.1,t),W_,4));
  const r=eo(nb(E.a_res,E.a_res+.7,t));PF(c,['France','Italy','United Kingdom','Spain','Greece','Turkey'],'#9cc4ff',.3*r,{ba:.9});
  const k=eo(nb(E.a_com-.05,E.a_com+.8,t));PF(c,USSR.concat(PACT),EA,.42*k,{b:'#ff9a9a',lw:1.1});
  if(t>E.a_com)shock(P(30,52)[0],P(30,52)[1],t,E.a_com,'rgba(255,61,61,.95)',90,4,.8);
  TG('12 MAR 1947',180,96,19,GOLD,INK,t,E.a_doce-.05,{out:14.5});
  TX('EE. UU. PROMETE AYUDA',180,142,24,'#fff',t,E.a_prom-.05,{w:330,out:E.a_com-.1});
  const q=P(-100,40);TG('EE. UU.',P(-95,40)[0],P(-95,40)[1],15,W_,'#fff',t,E.a_eeuu-.05);
  TG('COMUNISMO',P(60,60)[0],P(60,60)[1]+4,15,EA,'#fff',t,E.a_com-.05);
  if(t>E.a_com+.3)TX('¿HASTA DÓNDE LLEGARÁ?',180,478,17,GOLD,t,E.a_com+.5,{w:330});
}

// S2 JUN 1948: bloqueo de Berlín
function s2(t,u){
  const c=mapaCam(t,[[15.0,12.2,52.4,19],[21.1,13.0,52.5,31,eio]]);
  base(c);ger(c,.42,.42);
  const [x,y]=bp(c),P=(lo,la)=>mapaPunto(c,lo,la);
  // disco de Berlín Occidental
  const rr=Math.max(9,c.s*.42);
  glow(x,y,rr*2.4,'rgba(47,123,255,.5)',1);circ(x,y,rr,W_,'#fff',2.2);
  // carreteras desde el oeste
  const roads=[[P(9.4,52.0),P(11.2,52.2),[x-rr,y-3]],[P(9.4,52.7),P(11.2,52.55),[x-rr,y]],[P(9.6,51.4),P(11.5,52.0),[x-rr*.8,y+rr*.6]]];
  const cut=eo(nb(E.b_blo,E.b_blo+.7,t));
  roads.forEach((r,i)=>{ctx.save();ctx.strokeStyle=INK;ctx.lineWidth=5;ctx.lineCap='round';ctx.beginPath();r.forEach((q,j)=>j?ctx.lineTo(q[0],q[1]):ctx.moveTo(q[0],q[1]));ctx.stroke();
    ctx.strokeStyle=GOLD;ctx.lineWidth=2.6;ctx.setLineDash([7,5]);ctx.lineDashOffset=-t*12*(1-cut);ctx.stroke();ctx.restore();
    // barrera roja
    const m=r[1];if(cut>0){tr(m[0],m[1],cut*(1+.15*Math.sin(t*10)),0,()=>{circ(0,0,10,EA,'#fff',2.4);ctx.strokeStyle='#fff';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(-5,-5);ctx.lineTo(5,5);ctx.moveTo(5,-5);ctx.lineTo(-5,5);ctx.stroke()})}});
  const ax=eo(nb(E.b_urss,E.b_urss+.8,t));
  [[P(17,53.6),P(14.2,52.9)],[P(17,51.3),P(14.2,52.1)],[P(15,52.5),P(13.9,52.5)]].forEach((p,i)=>flecha(p,ax*(i<2?1:.9),EA,3.4));
  TG('JUN 1948',180,96,19,GOLD,INK,t,E.b_jun-.05,{out:20.6});
  TX('BLOQUEO',180,142,36,EA,t,E.b_blo-.1,{out:20.6});
  TG('BERLÍN OCCIDENTAL',x,Math.min(y+rr+34,500),13,'rgba(7,16,31,.88)','#fff',t,E.b_occ-.05);
  TG('UNIÓN SOVIÉTICA',Math.min(P(18,53.3)[0],268),Math.max(160,P(18,53.3)[1]-28),12,EA,'#fff',t,E.b_urss-.05);
  if(at(t,'b_blo'))burst(x,y,t,E.b_blo,['#ff3d3d','#fff'],22,120,.7,3);
}

// S3 4 ABR 1949: nace la OTAN
function s3(t,u){
  const c=mapaCam(t,[[21,-33,45,3.5],[27,-28,46,3.9,eio]]);
  base(c);ger(c,.0,0);
  const P=(lo,la)=>mapaPunto(c,lo,la);
  NATO.forEach((n,i)=>{const a=eo(nb(E.n_nace+i*.07,E.n_nace+i*.07+.6,t));PF(c,[n],W_,.52*a,{b:'#fff',lw:1.3})});
  PF(c,USSR.concat(PACT),EA,.3,{b:'#ff9a9a',lw:1});
  if(t>E.n_otan){const [px,py]=P(-30,47);shock(px,py,t,E.n_otan,'rgba(47,123,255,.95)',150,5,.9);burst(px,py,t,E.n_otan,['#2f7bff','#fff','#9cc4ff'],26,150,.8,3)}
  TG('4 ABR 1949',180,96,19,GOLD,INK,t,E.n_4-.05,{out:26.6});
  sl('OTAN',180,178,60,'#fff',t,E.n_otan,{sh:'rgba(47,123,255,.8)'});
  TG('BLOQUE DEL OESTE',180,478,16,W_,'#fff',t,E.n_oes-.05);
  // estrella
  if(t>E.n_otan){tr(180,255,eb(nb(E.n_otan,E.n_otan+.5,t)),t*.3,()=>{ctx.beginPath();SH.star(0,0,22,9,4,8).forEach((q,i)=>i?ctx.lineTo(q[0],q[1]):ctx.moveTo(q[0],q[1]));ctx.closePath();ctx.fillStyle='#fff';ctx.globalAlpha=.9;ctx.fill();ctx.strokeStyle=W_;ctx.lineWidth=3;ctx.stroke()})}
}

// S4 14 MAY 1955: el este responde, Pacto de Varsovia
function s4(t,u){
  const c=mapaCam(t,[[27,-5,48,5.0],[33,28,52,5.7,eio]]);
  base(c);
  const P=(lo,la)=>mapaPunto(c,lo,la);
  PF(c,NATO,W_,.5,{b:'#fff',lw:1.2});ger(c,.5,.0);
  const r0=eo(nb(E.w_resp-.2,E.w_resp+.7,t));PF(c,USSR,EA,.45*Math.max(.7,r0),{b:'#ff9a9a',lw:1.1});
  ger(c,.5,.55*r0);
  PACT.forEach((n,i)=>{const a=eo(nb(E.w_pacto+i*.09,E.w_pacto+i*.09+.55,t));PF(c,[n],EA,.55*a,{b:'#fff',lw:1.4})});
  if(t>E.w_pacto){const [px,py]=P(25,52);shock(px,py,t,E.w_pacto,'rgba(255,61,61,.95)',130,5,.9);burst(px,py,t,E.w_pacto,['#ff3d3d','#fff','#ffb0b0'],26,150,.8,3)}
  TG('14 MAY 1955',180,96,19,GOLD,INK,t,E.w_14-.05,{out:32.4});
  TX('EL ESTE RESPONDE',180,142,26,EA,t,E.w_resp-.1,{w:330,out:E.w_pacto-.1});
  TX('PACTO DE',180,160,34,'#fff',t,E.w_pacto-.05,{w:330});TX('VARSOVIA',180,200,40,EA,t,E.w_var-.15,{w:330,stroke:INK});
}

// S5 13 AGO 1961: Berlín se parte con un muro
function s5(t,u){
  const c=mapaCam(t,[[32.9,16,50,11],[34.0,BL[0],BL[1],26,eio],[37.8,BL[0],BL[1],30]]);
  base(c);ger(c,.42,.42);
  const [x,y]=bp(c),R_=Math.max(16,c.s*2.1);
  const sp=eo(nb(E.m_parte-.1,E.m_parte+.6,t)),w=eo(nb(E.m_parte+.15,E.m_muro+.35,t));
  const sh=at(t,'m_muro')?Math.sin(t*55)*2.4*Math.exp(-(t-E.m_muro)*8):0;
  ciudad(x+sh,y,R_,t,{sp,gap:sp*8,wall:w});
  if(t>E.m_muro)shock(x,y,t,E.m_muro,'rgba(255,255,255,.9)',R_*1.8,5,.8);
  TG('13 AGO 1961',180,96,19,GOLD,INK,t,E.m_13-.05,{out:37.5});
  TX('BERLÍN SE PARTE',180,142,30,'#fff',t,E.m_ber-.1,{w:330,out:37.6});
  TG('OESTE',x-R_*.55,y-R_-18,13,W_,'#fff',t,E.m_parte+.2);TG('ESTE',x+R_*.55,y-R_-18,13,EA,'#fff',t,E.m_parte+.3);
  sl('MURO',180,478,44,'#fff',t,E.m_muro);
}

// S6 OCT 1962: misiles soviéticos en Cuba
function s6(t,u){
  const c=mapaCam(t,[[37.8,-82,25.5,12],[44.0,-80,25,15.5,eio]]);
  base(c);
  const P=(lo,la)=>mapaPunto(c,lo,la);
  PF(c,['United States of America','Mexico','Haiti','Dominican Rep.','Jamaica','Bahamas'],W_,.18,{b:'rgba(255,255,255,.6)',lw:1});
  const k=eo(nb(E.c_cuba-.1,E.c_cuba+.7,t));PF(c,['Cuba'],EA,.6*k,{b:'#fff',lw:1.8});
  const [cx,cy]=P(-79.6,21.9);
  if(t>E.c_mis-.05){anillos(cx,cy,t,E.c_mis,'#ff3d3d',3,10,190,lerp(1.1,2.1,nb(E.c_mundo,E.c_ali+.6,t)));
    const ms=eo(nb(E.c_mis,E.c_mis+.5,t));tr(cx,cy-18,ms,0,()=>{poly([[0,-18],[5,-6],[5,10],[-5,10],[-5,-6]],'#e9edf5',INK,2);poly([[-5,10],[-10,18],[-5,14]],EA,INK,1.4);poly([[5,10],[10,18],[5,14]],EA,INK,1.4);circ(0,-3,2,INK)})}
  if(t>E.c_ali-.3){ctx.save();const v=nb(E.c_ali-.3,E.c_ali+.6,t)*.5*(.6+.4*Math.sin(t*9));const g=ctx.createRadialGradient(180,320,120,180,320,420);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(120,0,10,'+v+')');ctx.fillStyle=g;ctx.fillRect(0,0,360,640);ctx.restore()}
  TG('OCT 1962',180,96,19,GOLD,INK,t,E.c_oct-.05,{out:43.6});
  TX('MISILES EN CUBA',180,142,32,'#fff',t,E.c_mis-.1,{w:330,out:43.6});
  TG('CUBA',cx-4,cy+40,15,EA,'#fff',t,E.c_cuba-.05);
  TG('EE. UU.',P(-90,32)[0],P(-90,32)[1],14,W_,'#fff',t,E.c_cuba+.1);
  if(t>E.c_mundo)TX('EL MUNDO CONTIENE EL ALIENTO',180,478,18,GOLD,t,E.c_mundo-.05,{w:330});
}

// S7 9 NOV 1989: el muro cae
function s7(t,u){
  const c=mapaCam(t,[[44.0,BL[0],BL[1],26],[47.0,BL[0],BL[1],32,eio]]);
  base(c);ger(c,.42,.42);
  const [x,y]=bp(c),R_=Math.max(16,c.s*2.1);
  const pe=eo(nb(44.8,E.f_muro,t)),fall=nb(E.f_cae,E.f_cae+.85,t);
  const tm=at(t,'f_cae')?0:1;const sh=(t>E.f_muro&&t<E.f_cae)?Math.sin(t*70)*1.6:0;
  ciudad(x+sh,y,R_,t,{sp:1,gap:8-fall*7,wall:1,fall,people:pe*(1-fall*.3)});
  if(t>E.f_cae){shock(x,y,t,E.f_cae,'rgba(255,255,255,.95)',R_*2,6,.9);burst(x,y+10,t,E.f_cae,['#d2c9b6','#fff','#ffd23f'],34,170,.9,3.4)}
  TG('9 NOV 1989',180,96,19,GOLD,INK,t,E.f_9-.05,{out:47.5});
  TX('LA GENTE EMPUJA',180,142,28,'#fff',t,45.2,{w:330,out:47.2});
  sl('EL MURO CAE',180,478,36,GOLD,t,E.f_cae,{sh:'rgba(255,210,63,.6)'});
}

// S8 DIC 1991: la Unión Soviética desaparece del mapa
function s8(t,u){
  const c=mapaCam(t,[[48.0,CEU[0],CEU[1],11],[49.4,62,56,3.9,eio],[52,62,56,4.3]]);
  base(c);ger(c,.0,0);
  const P=(lo,la)=>mapaPunto(c,lo,la);
  const d=eo(nb(E.u_des,E.u_des+.9,t));
  PF(c,USSR,p=>d>.02?mixc(EA,COLS[(USSR.indexOf(p.n)*5)%COLS.length],d):EA,.55,{b:'#fff',lw:1.2});
  PF(c,PACT.concat(NATO),null,0,{ba:.9});
  if(t>E.u_des){const [px,py]=P(60,58);shock(px,py,t,E.u_des,'rgba(255,255,255,.95)',150,6,.9);burst(px,py,t,E.u_des,COLS,36,170,.9,3.4)}
  TG('DIC 1991',180,96,19,GOLD,INK,t,E.u_dic-.05,{out:52.6});
  const q=P(75,60);TG('URSS',q[0]-25,q[1],20,EA,'#fff',t,E.u_urss-.05,{out:E.u_des+.3});
  if(t>E.u_des-.05){TX('DESAPARECE',180,478,34,'#fff',t,E.u_des-.1,{w:340})}
}

// S9 CIERRE: dos bloques, un muro y mucho miedo → ¿quién ganó?
function s9(t,u){
  const c=mapaCam(t,[[53.0,18,50,5.2],[62.9,18,50,6.0]]);
  base(c);
  PF(c,NATO,W_,.5,{b:'#fff',lw:1.2});PF(c,USSR.concat(PACT),EA,.5,{b:'#fff',lw:1.2});ger(c,.5,.5);
  const P=(lo,la)=>mapaPunto(c,lo,la);
  // muro/cortina en el medio
  const m=eo(nb(E.z_muro-.1,E.z_muro+.5,t));
  if(m>0){const [x0,y0]=P(10.8,60),[x1,y1]=P(10.8,40);ctx.save();ctx.strokeStyle=INK;ctx.lineWidth=7;ctx.beginPath();ctx.moveTo(x0,y0);ctx.lineTo(x0,lerp(y0,y1,m));ctx.stroke();ctx.strokeStyle=BRK;ctx.lineWidth=3.6;ctx.setLineDash([8,3]);ctx.stroke();ctx.restore()}
  TG('OESTE',P(0,52)[0],P(0,52)[1],16,W_,'#fff',t,E.z_dos-.05,{out:E.z_quien-.2});TG('ESTE',P(26,52)[0],P(26,52)[1],16,EA,'#fff',t,E.z_blo-.05,{out:E.z_quien-.2});
  TX('DOS BLOQUES',180,100,30,'#fff',t,E.z_dos-.1,{w:340,out:E.z_miedo-.1});
  TX('UN MURO',180,142,30,BRK,t,E.z_muro-.1,{w:340,out:E.z_miedo-.1});
  TX('MUCHO MIEDO',180,190,32,GOLD,t,E.z_miedo-.1,{w:340,out:E.z_quien-.2});
  const q=eo(nb(E.z_quien-.1,E.z_quien+.5,t));
  if(q>0){ctx.save();ctx.fillStyle='rgba(5,10,20,'+(.62*q)+')';ctx.fillRect(0,0,360,640);ctx.restore()}
  TX('¿QUIÉN GANÓ',180,200,40,'#fff',t,E.z_quien-.1,{w:340});TX('DE VERDAD?',180,250,40,GOLD,t,E.z_gano-.1,{w:340});
  if(t>E.z_gano+.4){const a=spring(t-E.z_gano-.4,11,6),b2=spring(t-E.z_gano-.7,11,6);
    tr(95,340,a,0,()=>{rr(-62,-24,124,48,12);ctx.fillStyle=W_;ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=2.4;ctx.stroke();txt('OESTE',0,1,22,'#fff',{st:INK,sw:4})});
    tr(265,340,b2,0,()=>{rr(-62,-24,124,48,12);ctx.fillStyle=EA;ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=2.4;ctx.stroke();txt('ESTE',0,1,22,'#fff',{st:INK,sw:4})});
    txt('VS',180,340,18,GOLD,{st:INK,sw:4,sc:eb(nb(E.z_gano+.9,E.z_gano+1.3,t))})}
  TG('COMENTA TU RESPUESTA',180,440,16,GOLD,INK,t,E.z_com-.05);
}

boot([s0,s1,s2,s3,s4,s5,s6,s7,s8,s9],TRS,{cap:{acc:'#ffd23f'}});
