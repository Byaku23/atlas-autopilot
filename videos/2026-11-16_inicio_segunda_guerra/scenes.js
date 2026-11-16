// ===== Inicio 2ª Guerra Mundial — escenas =====
const nb=(a,b,t)=>cl((t-a)/(b-a));
// S0 GANCHO: una flecha de acero entra en Polonia ("una") y llega otra desde el este ("dos")
function s0(t,u){
  const c=camAt(u,[[0,190,230,1.1],[5.9,190,230,1.25]]);
  const a1=[PJ(12.5,52.4),PJ(15.5,52.4),PJ(20.2,52.0)],a2=[PJ(36,51.5),PJ(29,51.5),PJ(23.5,51.5)];
  world(c,()=>{europa(t,{});
    pathArrow(a1,eo(cl((t+.9)/1.3)),'#aab3c6',5);
    if(t>E.s_dos-.05)pathArrow(a2,eo(cl((t-E.s_dos+.05)/.9)),SOV,5);
    shock(a1[2][0],a1[2][1],t,.9,'rgba(170,179,198,.9)',24,3,.7);
    if(t>E.s_dos+.8)shock(a2[2][0],a2[2][1],t,E.s_dos+.8,'rgba(192,57,43,.95)',26,3,.8)});
  TX('NO FUE UNA',180,92,34,'#fff',t,-.6,{w:330});TX('INVASIÓN',180,134,48,ACC,t,-.45,{sh:'rgba(255,122,60,.6)'});
  if(t>E.s_inv-.05){const q=sk(c,PJ(16.8,52.4)[0],PJ(16.8,52.4)[1]);badge(q[0],q[1]-26,1,'1',GER,t,E.s_inv)}
  if(t>E.s_dos-.05){const q=sk(c,PJ(28,51.5)[0],PJ(28,51.5)[1]);badge(q[0],q[1]-26,1.15,'2',SOV,t,E.s_dos);shock(q[0],q[1]-26,t,E.s_dos,'rgba(255,122,60,.9)',44,3,.7)}
  TG('MIRA EL MAPA',180,478,15,GOLD,INK,t,E.s_mapa-.05)}

// S1 MARZO 1938: Alemania se traga Austria
function s1(t,u){
  const k=n=>E[n]-T[1];
  const c=camAt(u,[[0,125,300,2.6],[k('a_aus')+.4,150,295,1.7],[7.5,150,300,1.3]]);
  const p=eio(nb(E.a_que-.1,E.a_que+.9,t));
  world(c,()=>{europa(t,{aut:mixc(AUT,GER,p)});
    pathArrow([PJ(12.5,48.9),PJ(14.0,48.2),PJ(15.8,47.6)],nb(E.a_ale+.1,E.a_aus+.4,t),'#aab3c6',5);
    if(t>E.a_que)shock(VIE[0],VIE[1],t,E.a_que,'rgba(170,179,198,.95)',30,3,.9)});
  TG('MARZO',180,96,18,GOLD,INK,t,E.a_mar-.05,{out:E.a_ocho-.1});
  slam('1938',180,132,64,'#fff',t,E.a_ocho,{stroke:INK,sw:10,sh:'rgba(255,122,60,.8)'});
  const q=sk(c,AUTP[3][0]+8,AUTP[3][1]+30);
  TG('AUSTRIA',q[0],q[1]+30,14,AUT,'#fff',t,E.a_aus-.05,{out:E.a_que+.3});
  if(t>E.a_que+.3)TG('AUSTRIA = ALEMANIA',180,480,13,GER,'#fff',t,E.a_que+.3,{w:330})}

// S2 MÚNICH: los Sudetes
function s2(t,u){
  const k=n=>E[n]-T[2];
  const c=camAt(u,[[0,130,285,1.9],[k('m_ent')-.3,125,285,1.9],[k('m_sud')+.4,135,278,1.6]]);
  const p=eio(nb(E.m_ent+.1,E.m_sud+.6,t));
  world(c,()=>{europa(t,{aut:GER,cze:CZE,sud:t>E.m_ent?mixc(AUT,GER,p):AUT});
    land(SUDP,'rgba(0,0,0,0)',AUT,2.6);
    const mp=eb(nb(E.m_mun-.05,E.m_mun+.3,t));circ(MUN[0],MUN[1],4*mp+1,ACC,CREAM,1.5);if(t>E.m_mun)shock(MUN[0],MUN[1],t,E.m_mun,'rgba(255,122,60,.95)',24,2.5,.9);
    pathArrow([MUN,PJ(12.5,49.5),PJ(14.0,50.0)],nb(E.m_ent,E.m_sud,t),'#aab3c6',4.2)});
  const m=sk(c,MUN[0],MUN[1]);
  slam('SEP 1938',180,110,50,'#fff',t,E.m_sep,{stroke:INK,sw:9,sh:'rgba(255,122,60,.8)'});
  TG('MÚNICH',Math.min(m[0]+44,300),m[1]+34,13,ACC,INK,t,E.m_mun-.05);
  // fichas aliadas que entregan
  const r1=eb(nb(E.m_rei-.05,E.m_rei+.35,t)),r2=eb(nb(E.m_fra-.05,E.m_fra+.35,t)),ex=eio(nb(E.m_ent-.1,E.m_ent+.5,t));
  tr(lerp(66,m[0]-78,ex),lerp(190,m[1]-8,ex),r1,0,()=>{ctx.fillStyle=INK;rr(-52,-16,104,32,10);ctx.fill();ctx.fillStyle=ALLY;rr(-49,-13,98,26,8);ctx.fill();txt('R. UNIDO',0,1,15,'#fff',{wt:'900',f:DISP})});
  tr(lerp(66,m[0]-78,ex),lerp(232,m[1]+24,ex),r2,0,()=>{ctx.fillStyle=INK;rr(-52,-16,104,32,10);ctx.fill();ctx.fillStyle=ALLY;rr(-49,-13,98,26,8);ctx.fill();txt('FRANCIA',0,1,15,'#fff',{wt:'900',f:DISP})});
  if(t>E.m_sud-.05){const s=sk(c,PJ(13.6,50.3)[0],PJ(13.6,50.3)[1]);TG('LOS SUDETES',Math.max(s[0],110),s[1]-50,14,GER,'#fff',t,E.m_sud-.05,{out:E.m_che-.1})}
  // tarjeta para el morph
  if(t>E.m_che-.05){const q=eb(nb(E.m_che-.05,E.m_che+.3,t));tr(180,300,q,0,()=>{ctx.fillStyle=INK;rr(-124,-64,248,128,18);ctx.fill();ctx.fillStyle=CZE;rr(-120,-60,240,120,16);ctx.fill();txt('CHECOSLOVAQUIA',0,-14,21,'#fff',{wt:'900',f:DISP});txt('PIERDE LOS SUDETES',0,22,15,CREAM,{wt:'900',f:DISP})})}}

// S3 MARZO 1939: Checoslovaquia desaparece
function s3(t,u){
  const c=camAt(u,[[0,150,270,1.7],[5.4,150,275,1.5]]);
  const p=eio(nb(E.c_res,E.c_res+.8,t)),g=eio(nb(E.c_des,E.c_des+1.0,t));
  world(c,()=>{europa(t,{aut:GER,cze:t>E.c_des?mixc(mixc(CZE,GER,1),NEU,g):mixc(CZE,GER,p),sud:GER});
    if(t>E.c_des){ctx.save();ctx.setLineDash([5,4]);ctx.globalAlpha=g;land(CZP,'rgba(0,0,0,0)',CREAM,1.6);ctx.restore()}
    [[PJ(13,51.8),PJ(14.2,50.7)],[PJ(11.6,49.8),PJ(13.4,49.9)],[PJ(15.5,50.6),PJ(17.6,50.1)],[PJ(17.5,49.0),PJ(19,48.6)]].forEach((a,i)=>pathArrow(a,nb(E.c_res+i*.08-.1,E.c_res+i*.08+.55,t),'#aab3c6',3.4));
    if(t>E.c_des)shock(PRA[0]+20,PRA[1]+10,t,E.c_des,'rgba(246,236,210,.8)',46,3,1.0)});
  TG('MARZO',180,96,18,GOLD,INK,t,E.c_mar-.05,{out:E.c_nue-.1});
  slam('1939',180,132,64,'#fff',t,E.c_nue,{stroke:INK,sw:10,sh:'rgba(255,122,60,.8)'});
  const q=sk(c,PRA[0]+30,PRA[1]+4);
  TG('CHECOSLOVAQUIA',180,466,14,CZE,'#fff',t,E.c_che-.05,{out:E.c_des+1.2});
  if(t>E.c_des+.2){const s=eb(nb(E.c_des+.2,E.c_des+.55,t));tr(180,370,s,-.08,()=>{ctx.fillStyle=INK;rr(-132,-24,264,48,8);ctx.fill();txt('BORRADA DEL MAPA',0,2,21,ACC,{wt:'900',f:DISP})})}}

// S4 23 AGO 1939: pacto y protocolo secreto
function s4(t,u){
  const k=n=>E[n]-T[4];
  const c=camAt(u,[[0,186,236,1.35],[k('p_pac')+.5,176,234,1.3]]);
  const hp=eb(nb(E.p_pac-.2,E.p_pac+.4,t)),split=eio(nb(E.p_rep,E.p_rep+.9,t)),tint=nb(E.p_dos-.3,E.p_dos+.4,t);
  const LN=PL([[22.7,54.3],[22.0,52.8],[21.4,51.4],[22.8,50.2],[23.0,49.2]]);
  world(c,()=>{europa(t,{aut:GER,cze:GER,sud:GER});
    const gx=PJ(20.5,52)[0];ctx.save();ctx.globalAlpha=.55*tint;ctx.beginPath();ctx.rect(-50,-50,gx+0,900);ctx.restore();
    // reparto de Polonia
    if(tint>0){ctx.save();ctx.beginPath();LN.forEach((q,i)=>i?ctx.lineTo(q[0],q[1]):ctx.moveTo(q[0],q[1]));ctx.lineTo(LN[4][0]-300,LN[4][1]);ctx.lineTo(LN[0][0]-300,LN[0][1]);ctx.closePath();ctx.clip();ctx.globalAlpha=.65*tint;land(POLP,GER,GER);ctx.restore();
      ctx.save();ctx.beginPath();LN.forEach((q,i)=>i?ctx.lineTo(q[0],q[1]):ctx.moveTo(q[0],q[1]));ctx.lineTo(LN[4][0]+300,LN[4][1]);ctx.lineTo(LN[0][0]+300,LN[0][1]);ctx.closePath();ctx.clip();ctx.globalAlpha=.65*tint;land(POLP,SOV,SOV);ctx.restore()}
    if(split>0){ctx.save();ctx.lineCap='round';ctx.setLineDash([6,5]);ctx.beginPath();LN.forEach((q,i)=>{const f=Math.min(1,Math.max(0,split*(LN.length-1)-(i-1)));const px=i?lerp(LN[i-1][0],q[0],f):q[0],py=i?lerp(LN[i-1][1],q[1],f):q[1];i?ctx.lineTo(px,py):ctx.moveTo(px,py)});ctx.strokeStyle=INK;ctx.lineWidth=5.5;ctx.stroke();ctx.strokeStyle=GOLD;ctx.lineWidth=3;ctx.stroke();ctx.restore()}
    pathArrow([PJ(12,52.4),PJ(15,52.4),PJ(19.2,52.3)],nb(E.p_ale+.1,E.p_ale+.8,t),'#aab3c6',4);
    pathArrow([PJ(37,52.2),PJ(31,52.2),PJ(23.8,52.3)],nb(E.p_sov,E.p_sov+.8,t),SOV,4)});
  slam('23 AGO 1939',180,110,46,'#fff',t,E.p_23,{stroke:INK,sw:9,sh:'rgba(255,122,60,.8)'});
  TG('ALEMANIA',70,196,13,GER,'#fff',t,E.p_ale-.05,{out:E.p_pac});TG('URSS',292,196,13,SOV,'#fff',t,E.p_sov-.05,{out:E.p_pac});
  // documento del pacto
  if(t>E.p_pac-.2){const d=eb(nb(E.p_pac-.2,E.p_pac+.3,t));ctx.save();ctx.globalAlpha=1-nb(E.p_rep-.2,E.p_rep+.2,t);doc(180,176,d*1.6,INK);ctx.restore()}
  TG('PACTO',180,236,16,CREAM,INK,t,E.p_pac-.05,{out:E.p_pro-.1});
  TG('PROTOCOLO SECRETO',180,236,16,ACC,INK,t,E.p_pro-.05,{out:E.p_rep-.3});
  TX('SE REPARTEN',180,166,26,'#fff',t,E.p_rep-.05,{out:E.p_pol+.6});
  // tarjeta para el morph
  if(t>E.p_pol-.05){const q=eb(nb(E.p_pol-.05,E.p_pol+.3,t));tr(180,300,q,0,()=>{ctx.fillStyle=INK;rr(-124,-54,248,108,18);ctx.fill();ctx.fillStyle=CREAM;rr(-120,-50,240,100,16);ctx.fill();txt('POLONIA',0,-12,34,INK,{wt:'900',f:DISP});txt('REPARTIDA ENTRE DOS',0,24,15,SOV,{wt:'900',f:DISP})})}}

// S5 1 SEP: invasión alemana; 3 SEP: declaran la guerra
function s5(t,u){
  const k=n=>E[n]-T[5];
  const c=camAt(u,[[0,176,236,1.5],[k('i_gue')-.3,170,238,1.4],[k('i_mun')-.2,175,235,1.15]]);
  const gp=nb(E.i_inv,E.i_inv+.9,t);
  world(c,()=>{europa(t,{aut:GER,cze:GER,sud:GER});
    [[PJ(12,54.2),PJ(16,53.8),PJ(19.5,53.3)],[PJ(12,52.4),PJ(16,52.1),PJ(20.5,51.9)],[PJ(15,50.6),PJ(18,50.2),PJ(20.2,50.4)],[PJ(15.5,54.4),PJ(19.5,54.5),PJ(21.5,53.9)]].forEach((a,i)=>pathArrow(a,nb(E.i_inv+i*.07-.05,E.i_inv+i*.07+.8,t),'#aab3c6',4));
    if(t>E.i_inv)shock(WAR[0],WAR[1],t,E.i_inv+.5,'rgba(170,179,198,.9)',46,3,.9);
    // Reino Unido y Francia
    const a1=nb(E.i_rei-.1,E.i_rei+.8,t),a2=nb(E.i_fra-.1,E.i_fra+.8,t);
    pathArrow([PJ(-1,53.5),PJ(3,53.6),PJ(7.2,53.1)],a1,ALLY,4.2);pathArrow([PJ(0,48),PJ(3.5,48.5),PJ(7.2,49.2)],a2,ALLY,4.2);
    if(t>E.i_mun)shock(PJ(15,51.5)[0],PJ(15,51.5)[1],t,E.i_mun,'rgba(255,122,60,.9)',70,4,1.2)});
  slam('1 SEP 1939',180,110,46,'#fff',t,E.i_1,{stroke:INK,sw:9,sh:'rgba(255,122,60,.8)'});
  TG('ALEMANIA INVADE POLONIA',180,160,13,GER,'#fff',t,E.i_inv-.05,{out:E.i_dia-.1,w:330});
  TG('DOS DÍAS DESPUÉS',180,160,15,GOLD,INK,t,E.i_dia-.05,{out:E.i_gue+.2});
  if(t>E.i_rei-.05)TG('REINO UNIDO',66,300,12,ALLY,'#fff',t,E.i_rei-.05);
  if(t>E.i_fra-.05)TG('FRANCIA',60,390,12,ALLY,'#fff',t,E.i_fra-.05);
  if(t>E.i_gue-.05){const q=eb(nb(E.i_gue-.05,E.i_gue+.3,t));tr(180,500,q,-.04,()=>{ctx.fillStyle=INK;rr(-130,-22,260,44,8);ctx.fill();txt('DECLARAN LA GUERRA',0,2,20,'#fff',{wt:'900',f:DISP})})}
  if(t>E.i_mun-.05){slam('GUERRA MUNDIAL',180,200,34,ACC,t,E.i_mun,{stroke:INK,sw:9,sh:'rgba(255,122,60,.8)'})}}

// S6 17 SEP: los soviéticos cruzan por el este
function s6(t,u){
  const k=n=>E[n]-T[6];
  const c=camAt(u,[[0,186,236,1.3],[k('r_apl')-.3,180,236,1.4],[k('r_eje')+.3,180,236,1.7]]);
  const sq=1-.07*eo(nb(E.r_apl,E.r_apl+.6,t)),wb=wob(t-E.r_apl,9,5)*3;
  world(c,()=>{europa(t,{aut:GER,cze:GER,sud:GER});
    ctx.save();ctx.translate(WAR[0],WAR[1]);ctx.scale(sq,1);ctx.translate(-WAR[0],-WAR[1]);ctx.globalAlpha=.55*nb(E.r_cru,E.r_cru+.5,t);land(POLP,SOV,SOV);ctx.restore();
    [[PJ(37,54),PJ(31,53.6),PJ(26.8,53.2)],[PJ(37,51.5),PJ(31,51.4),PJ(26.5,51.5)],[PJ(37,49),PJ(31,49.4),PJ(26.5,49.8)]].forEach((a,i)=>pathArrow(a,nb(E.r_cru+i*.08-.05,E.r_cru+i*.08+.8,t),SOV,4.4));
    [[PJ(12,52.4),PJ(15,52.3),PJ(19.6,52.2)],[PJ(12,54),PJ(15,53.7),PJ(18.8,53.5)]].forEach(a=>pathArrow(a,1,'#aab3c6',3.4));
    if(t>E.r_cru)shock(PJ(26.6,51.5)[0],PJ(26.6,51.5)[1],t,E.r_cru+.2,'rgba(192,57,43,.95)',34,3,.8);
    if(t>E.r_apl){shock(WAR[0],WAR[1],t,E.r_apl,'rgba(246,236,210,.9)',50,4,.9);sparks(WAR[0],WAR[1],t,E.r_apl,18,GOLD,70,.7,40)}});
  slam('17 SEP',180,110,50,'#fff',t,E.r_17,{stroke:INK,sw:9,sh:'rgba(255,122,60,.8)'});
  TG('LOS SOVIÉTICOS',180,165,14,SOV,'#fff',t,E.r_sov-.05,{out:E.r_cru-.1});
  TG('CRUZAN LA FRONTERA',180,165,14,SOV,'#fff',t,E.r_cru-.05,{out:E.r_pol-.1,w:330});
  TG('POR EL ESTE',300,330,12,SOV,'#fff',t,E.r_est-.05,{out:E.r_pol-.1});
  TG('POLONIA',180+wb,440,16,POL,'#fff',t,E.r_pol-.05);
  TG('ALEMANIA',64,440,12,GER,'#fff',t,E.r_pol,{});TG('URSS',300,440,12,SOV,'#fff',t,E.r_pol,{})}

// S7 CIERRE: cada paso más grande → debate
function s7(t,u){sea(t);glow(180,300,200,'rgba(217,200,160,.10)',1);
  const fo=(1-.85*nb(E.f_ent-.1,E.f_ent+.35,t))*(1-nb(E.f_mun-.15,E.f_mun+.2,t));
  withA(fo,()=>{const st=[['AUSTRIA',E.f_cad,GER,40],['SUDETES',E.f_pas,AUT,78],['CHECOSL.',E.f_gra,CZE,120],['POLONIA',E.f_ant,POL,170]];
    st.forEach((s,i)=>{const q=eb(nb(s[1]-.05,s[1]+.4,t)),x=52+i*86,h=s[3]*q;
      ctx.fillStyle=INK;rr(x-36,470-h-3,72,h+6,8);ctx.fill();ctx.fillStyle=s[2];rr(x-33,470-h,66,h,6);ctx.fill();
      txt(s[0],x,470-h+14,10.5,'#fff',{wt:'900',f:DISP});if(q>.5)sparks(x,470-h,t,s[1]+.1,6,GOLD,40,.4,40)})});
  TX('CADA PASO FUE MÁS GRANDE',180,92,24,'#fff',t,E.f_cad-.3,{w:330,out:E.f_ent-.2});
  TX('¿SE PUDO PARAR?',180,92,32,ACC,t,E.f_ent-.1,{w:330,sh:'rgba(255,122,60,.6)'});
  const b1=eb(nb(E.f_mun-.1,E.f_mun+.35,t)),b2=eb(nb(E.f_tar-.1,E.f_tar+.35,t));
  tr(94,260,b1,0,()=>{ctx.fillStyle=INK;rr(-79,-52,158,104,20);ctx.fill();ctx.fillStyle=ALLY;rr(-75,-48,150,96,18);ctx.fill();txt('SE PUDO EN',0,-14,19,'#fff',{wt:'900',f:DISP});txt('MÚNICH',0,22,30,'#fff',{wt:'900',f:DISP})});
  tr(266,260,b2,0,()=>{ctx.fillStyle=INK;rr(-79,-52,158,104,20);ctx.fill();ctx.fillStyle=SOV;rr(-75,-48,150,96,18);ctx.fill();txt('YA ERA',0,-14,22,'#fff',{wt:'900',f:DISP});txt('TARDE',0,22,34,'#fff',{wt:'900',f:DISP})});
  if(t>E.f_tar){const va=.5+.3*Math.sin(t*1.7);ctx.fillStyle=ALLY;rr(30,350,150*va*1.15,16,8);ctx.fill();ctx.fillStyle=SOV;rr(330-150*(1-va)*1.15,350,150*(1-va)*1.15,16,8);ctx.fill()}
  if(t>E.f_com){const q=eb((t-E.f_com)/.45);tr(180,440,q,0,()=>{ctx.fillStyle='#fff';rr(-100,-26,200,52,26);ctx.fill();txt('COMENTA',10,1,22,INK);ctx.fillStyle=SOV;rr(-90,-14,28,22,6);ctx.fill();poly([[-84,8],[-80,16],[-74,8]],SOV)})}}
boot([s0,s1,s2,s3,s4,s5,s6,s7],TRS,{cap:{acc:ACC}});
