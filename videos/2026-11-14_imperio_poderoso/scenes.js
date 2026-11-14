// ===== Imperio más poderoso — escenas =====
const sk=(c,x,y)=>toScreen(c,x,y);
const UKC=WP(-2,53);
// S0 GANCHO: el mapa; el imperio británico (¼ del planeta) se enciende
function s0(t,u){sea();const c=camAt(u,[[0,40,-50,.36],[5,40,-60,.44]]);
  world(c,()=>{worldMap();BRP.forEach((p,i)=>{const a=eb(cl((t-E.h_cuarta-i*.09)/.35));if(a>0)hl(p,BR,Math.min(a,1)*.92)});
    if(t>E.h_cuarta){shock(WP(78,22)[0],WP(78,22)[1],t,E.h_cuarta,'rgba(255,107,74,.9)',90,4,.9);shock(UKC[0],UKC[1],t,E.h_cuarta+.1,'rgba(255,107,74,.8)',90,3,.9)}});
  TX('EL IMPERIO MÁS GRANDE',180,96,24,'#fff',t,-.6,{w:345});TX('DE LA HISTORIA',180,136,38,ACC,t,-.35,{sh:'rgba(255,224,102,.6)'});
  TG('CASI UNA CUARTA PARTE DEL PLANETA',180,470,13,BR,'#fff',t,E.h_cuarta-.05,{w:340});
  if(t>E.h_plan){const q=eb((t-E.h_plan)/.3);tr(180,420,q,0,()=>{ctx.fillStyle=INK;rr(-44,-30,88,60,14);ctx.fill();txt('¼',0,3,42,BR,{wt:'900',f:DISP})})}}

// S1 GRANDE ≠ PODEROSO
function s1(t,u){sea();stars(t,26,4,.35);
  const a=eb(cl((t-E.g_gran+.15)/.4)),b=eb(cl((t-E.g_pod+.15)/.4));
  tr(180,175,a,0,()=>{circ(0,0,58+Math.sin(t*3)*3,BR,INK,5);txt('GRANDE',0,2,26,'#fff',{wt:'900',f:DISP,st:INK,sw:6})});
  if(t>E.g_mismo-.05){const q=eb((t-E.g_mismo+.05)/.3);tr(180,300,q,-.1,()=>{txt('≠',0,0,92,ACC,{wt:'900',f:DISP,st:INK,sw:10})});shock(180,300,t,E.g_mismo,'rgba(255,224,102,.9)',70,3,.7)}
  tr(180,420,b*(1+.04*Math.sin(t*5)),0,()=>{ctx.fillStyle=INK;rr(-92,-46,184,92,22);ctx.fill();ctx.fillStyle=RO;rr(-88,-42,176,84,19);ctx.fill();bolt1(-62,0,.9,ACC);txt('PODEROSO',22,2,21,'#fff',{wt:'900',f:DISP,st:INK,sw:5})});
  TX('¿CUÁL FUE EL MÁS PODEROSO?',180,92,24,ACC,t,E.g_cual-.1,{w:330});
  if(t>E.g_cual+.05){const q=eb((t-E.g_cual-.05)/.35);tr(180,500,q,0,()=>{ctx.fillStyle=INK;rr(-114,-49,228,98,24);ctx.fill();ctx.fillStyle=BR;rr(-110,-45,220,90,20);ctx.fill();txt('¿CUÁL?',0,3,48,'#fff',{wt:'900',f:DISP,st:INK,sw:7})})}}

// S2 IMPERIO BRITÁNICO: colonias en todos los continentes, unidas por barcos
const DST=[WP(-100,55),WP(78,20),WP(30,0),WP(-2,8),WP(134,-26)];
function s2(t,u){sea();const c=camAt(u,[[0,40,-45,.4],[11,20,-38,.5]]);
  world(c,()=>{worldMap();hl(UK,BR,Math.min(1,eb(cl((t-E.b_brit)/.3)))*.95,2);shock(UKC[0],UKC[1],t,E.b_brit,'rgba(255,107,74,.9)',50,3,.8);
    [CAN,IND,AFE,AFW,AUS].forEach((p,i)=>{const a=eb(cl((t-E.b_col-i*.2)/.4));if(a>0){hl(p,BR,Math.min(a,1)*.9);if(a<1)burst(DST[i][0],DST[i][1],t,E.b_col+i*.2,[BR,ACC],8,60,.6,2)}});
    if(t>E.b_uni-.05){ctx.save();ctx.setLineDash([5,5]);ctx.lineWidth=1.8;DST.forEach((d,i)=>{const k=eo(cl((t-E.b_uni-i*.1)/.6));ctx.strokeStyle='rgba(244,234,210,'+(.8*k)+')';ctx.beginPath();ctx.moveTo(UKC[0],UKC[1]);ctx.lineTo(lerp(UKC[0],d[0],k),lerp(UKC[1],d[1],k));ctx.stroke()});ctx.restore()}
    if(t>E.b_bar-.05)DST.forEach((d,i)=>{const f=((t-E.b_bar)*.32+i*.23)%1,x=lerp(UKC[0],d[0],f),y=lerp(UKC[1],d[1],f)+Math.sin(t*6+i)*1.4;ship(x,y,.85,Math.sin(t*4+i)*.08)})});
  TX('IMPERIO BRITÁNICO',180,92,27,'#fff',t,E.b_brit-.1,{out:E.b_20-.25,w:330});
  slam('1920',180,122,60,ACC,t,E.b_20,{stroke:INK,sw:10,sh:'rgba(255,224,102,.7)'});
  if(t>E.b_tre-.05){const q=eb((t-E.b_tre+.05)/.35),v=countV(0,35.5,t,E.b_tre,1.5);tr(180,452,q,0,()=>{ctx.fillStyle=INK;rr(-132,-34,264,68,16);ctx.fill();ctx.fillStyle=BR;rr(-128,-30,256,60,13);ctx.fill();txt(fmtN(v,1)+' M DE KM²',0,2,30,'#fff',{wt:'900',f:DISP,st:INK,sw:5})})}
  TG('COLONIAS EN TODOS LOS CONTINENTES',180,205,12,BR,'#fff',t,E.b_col-.05,{w:330,out:E.b_uni+.3});
  TG('UNIDAS SOLO POR BARCOS',180,205,13,CREAM,INK,t,E.b_uni+.05,{w:330})}

// S3 LA INDIA SE INDEPENDIZA (1947)
function s3(t,u){sea();const ic=WP(78,22);const c=camAt(u,[[0,ic[0]-40,ic[1]+10,1.5],[2.6,ic[0],ic[1],3.0]]);
  const brk=eio(cl((t-E.i_ind)/.7));
  world(c,()=>{worldMap();hl(IND,mixc(BR,LND,brk),.95,2.2);
    if(t>E.i_ind){const o=WP(78,22);shock(o[0],o[1],t,E.i_ind,'rgba(255,224,102,.95)',70,4,.9);sparks(o[0],o[1],t,E.i_ind,20,ACC,70,.8,40)}});
  slam('27 AÑOS',180,110,52,'#fff',t,E.i_27,{stroke:INK,sw:9,sh:'rgba(255,107,74,.8)'});
  TG('INDIA INDEPENDIENTE · 1947',180,470,14,ACC,INK,t,E.i_ind-.05,{w:340});
  TX('DESPUÉS DE 1920',180,160,20,CREAM,t,E.i_27+.15,{out:E.i_india-.2,w:330})}

// S4 IMPERIO MONGOL: un solo bloque continuo
function s4(t,u){sea();const c=camAt(u,[[0,150,-100,.8],[8,210,-120,1.0]]);
  const p=eo(cl((t-E.m_mon)/(E.m_seg-E.m_mon+.3)));
  world(c,()=>{worldMap();ctx.save();ctx.beginPath();ctx.rect(70,-400,(340)*p,800);ctx.clip();hl(MON,MO,.9,2);ctx.restore();
    if(t>E.m_cont-.05){const g=.5+.5*Math.sin((t-E.m_cont)*6);ctx.save();ctx.lineJoin='round';ctx.strokeStyle='rgba(46,230,168,'+(.35+.4*g)+')';ctx.lineWidth=7;ctx.beginPath();MON.forEach((q,i)=>i?ctx.lineTo(q[0],q[1]):ctx.moveTo(q[0],q[1]));ctx.closePath();ctx.stroke();ctx.restore()}});
  TX('IMPERIO MONGOL',180,92,29,'#fff',t,E.m_mon-.1,{w:330});
  if(t>E.m_20-.05){const q=eb((t-E.m_20+.05)/.35),v=countV(0,20,t,E.m_20,1.3);tr(180,452,q,0,()=>{ctx.fillStyle=INK;rr(-142,-34,284,68,16);ctx.fill();ctx.fillStyle=MO;rr(-138,-30,276,60,13);ctx.fill();txt('+'+fmtN(v,0)+' M DE KM²',0,2,29,INK,{wt:'900',f:DISP})})}
  TG('TIERRA SEGUIDA',180,130,15,MO,INK,t,E.m_seg-.1,{out:E.m_cont-.1});
  TG('MAYOR IMPERIO CONTINUO',180,130,15,ACC,INK,t,E.m_cont-.05,{w:330})}

// S5 MUERE EL GRAN KAN → guerra → cuatro reinos
function s5(t,u){sea();const c={x:210,y:-120,z:1.0,r:0};
  const k=eo(cl((t-E.d_4)/.9));
  world(c,()=>{worldMap();
    if(t<E.d_4-.02){hl(MON,MO,.9,2)}
    else KH.forEach(h=>{ctx.save();ctx.translate(h.d[0]*k*1.1,h.d[1]*k*1.1);hl(h.p,h.c,.92,2.2);ctx.restore()});
    if(t>E.d_gue&&t<E.d_4){const o=WP(75,45);bolt(o[0]-60,o[1]-30,o[0]+70,o[1]+20,Math.floor(t*14),ACC);bolt(o[0]+70,o[1]-30,o[0]-50,o[1]+30,Math.floor(t*14)+9,'#fff');shock(o[0],o[1],t,E.d_gue,'rgba(255,107,74,.9)',80,4,.8)}
    if(t>E.d_4)KH.forEach(h=>{const o=h.p[0];burst(o[0],o[1],t,E.d_4,[h.c,'#fff'],6,50,.5,2)})});
  const alive=cl(1-(t-E.d_mong-.7)/.7);
  if(t<E.d_gue){if(t>E.d_mur-.1)TG('GRAN KAN MONGKE',180,150,14,MO,INK,t,E.d_mong-.2,{out:E.d_mong+1.4,w:330});if(t>E.d_mur-.1)crown(180,215+Math.max(0,t-E.d_mong-.7)*30,2.4*eb(cl((t-E.d_mur+.1)/.4)),ACC,alive)}
  if(t>E.d_mong+.7&&t<E.d_mong+1.6)dust(t,24,'rgba(255,224,102,.8)',5,30,2,.8);
  TX('MUERE EL GRAN KAN',180,92,26,'#fff',t,E.d_mur-.1,{out:E.d_1259-.2,w:330});
  slam('1259',180,100,66,ACC,t,E.d_1259,{stroke:INK,sw:10,sh:'rgba(255,224,102,.7)'});
  if(t>E.d_gue-.05&&t<E.d_60+.3)TX('LA FAMILIA VA A LA GUERRA',180,170,22,BR,t,E.d_gue-.1,{out:E.d_60-.2,w:330});
  slam('1260',180,100,66,'#fff',t,E.d_60,{stroke:INK,sw:10,sh:'rgba(255,107,74,.8)',al:t<E.d_4+1.0?1:cl(1-(t-E.d_4-1.0)/.3)});
  if(t>E.d_4){KH.forEach((h,i)=>{const p=WP(0,0);const o=sk(c,h.p[Math.floor(h.p.length/2)][0]+h.d[0]*1.1,h.p[Math.floor(h.p.length/2)][1]+h.d[1]*1.1);TG(h.n,Math.min(310,Math.max(62,o[0])),o[1]+[24,22,-10,0][i],10,h.c,INK,t,E.d_4+.1+i*.1)});
    const q=eb((t-E.d_4-.2)/.35);tr(180,500,q,0,()=>{ctx.fillStyle=INK;rr(-104,-39,208,78,18);ctx.fill();ctx.fillStyle=RO;rr(-100,-35,200,70,16);ctx.fill();txt('4 REINOS',0,2,34,'#fff',{wt:'900',f:DISP,st:INK,sw:6})})}}

// S6 ROMA: pequeña pero duradera
function s6(t,u){sea();const c=camAt(u,[[0,55,-120,1.7],[6.5,55,-120,1.7],[7.6,20,-110,.9],[13,60,-118,1.6]]);
  const R0=WP(12.5,41.9),p=eo(cl((t-E.r_roma)/1.0));
  world(c,()=>{worldMap();ctx.save();ctx.beginPath();ctx.arc(R0[0],R0[1],420*p,0,TAU);ctx.clip();hl(ROM,RO,.92,2.2);ctx.restore();
    if(t>E.r_roma){shock(R0[0],R0[1],t,E.r_roma,'rgba(181,123,255,.95)',120,4,1.0);circ(R0[0],R0[1],4,CREAM,INK,1.5)}
    if(t>E.r_casi){const m=eo(cl((t-E.r_casi)/.9));ctx.save();ctx.globalAlpha=.55*m;land(MON,MO,MO,1.5);ctx.restore()}});
  TX('ROMA',180,92,44,'#fff',t,E.r_roma-.1,{out:E.r_5+.9,w:330,sh:'rgba(181,123,255,.7)'});
  if(t>E.r_5-.05&&t<E.r_casi+.2){const q=eb((t-E.r_5+.05)/.35),v=countV(0,5,t,E.r_5,1.0);tr(180,445,q,0,()=>{ctx.fillStyle=INK;rr(-132,-32,264,64,16);ctx.fill();ctx.fillStyle=RO;rr(-128,-28,256,56,13);ctx.fill();txt(fmtN(v,1)+' M DE KM²',0,2,29,'#fff',{wt:'900',f:DISP,st:INK,sw:5})})}
  slam('117 d. C.',180,135,46,ACC,t,E.r_117,{stroke:INK,sw:9,sh:'rgba(255,224,102,.7)',al:t<E.r_casi+.1?1:cl(1-(t-E.r_casi-.1)/.25)});
  if(t>E.r_casi){const m=eb(cl((t-E.r_casi)/.4)),out=1-cl((t-E.r_mant+.2)/.35);withA(m*out,()=>{
    ctx.fillStyle=INK;rr(30,380,300,120,18);ctx.fill();const g=eo(cl((t-E.r_casi-.2)/.8));
    ctx.fillStyle=MO;rr(46,396,240*g,28,8);ctx.fill();ctx.fillStyle=RO;rr(46,442,50*g,28,8);ctx.fill();
    txt('MONGOL · 24 M',54,411,13,INK,{wt:'900',f:DISP,a:'left'});txt('ROMA · 5 M',46+50*g+8,457,13,'#fff',{wt:'900',f:DISP,a:'left'})});
    TX('CASI 5 VECES MENOS',180,170,24,CREAM,t,E.r_casi+.1,{out:E.r_mant-.3,w:330})}
  TG('SE MANTUVO EN OCCIDENTE',180,135,14,RO,'#fff',t,E.r_occ-.1,{w:330});
  if(t>E.r_500-.05){const q=eb((t-E.r_500+.05)/.35),v=countV(0,500,t,E.r_500,.8);tr(180,445,q,0,()=>{ctx.fillStyle=INK;rr(-132,-40,264,80,18);ctx.fill();ctx.fillStyle=RO;rr(-128,-36,256,72,15);ctx.fill();txt('~'+fmtN(v,0)+' AÑOS',0,3,36,'#fff',{wt:'900',f:DISP,st:INK,sw:6})})}}

// S7 CIERRE: ¿qué cuenta más? → debate
function s7(t,u){sea();stars(t,34,6,.4);
  const cards=[[E.c_ocu,'MÁS TIERRA',BR,'circ'],[E.c_blo,'UN SOLO BLOQUE',MO,'band'],[E.c_duro,'MÁS TIEMPO',RO,'clock']];
  TX('¿QUÉ ES SER PODEROSO?',180,92,27,ACC,t,T[7]+.3,{w:330});
  cards.forEach((cd,i)=>{const q=eb(cl((t-cd[0]+.1)/.45)),pre=eb(cl((t-(T[7]+.4+i*.15))/.4));if(pre<=0)return;const y=185+i*98;
    withA(.3+.7*cl(q),()=>tr(180,y,pre*(.93+.07*cl(q)),0,()=>{ctx.fillStyle=INK;rr(-148,-40,296,80,20);ctx.fill();ctx.fillStyle=cd[2];rr(-144,-36,288,72,17);ctx.fill();
      ctx.save();ctx.translate(-104,0);if(cd[3]==='circ'){circ(0,0,20,'#fff',INK,3)}else if(cd[3]==='band'){rr(-22,-11,44,22,6);ctx.fillStyle='#fff';ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=3;ctx.stroke()}else{circ(0,0,20,'#fff',INK,3);const a=t*3;line(0,0,0,-13,INK,3);line(0,0,Math.cos(a)*10,Math.sin(a)*10,INK,2.4)}ctx.restore();
      txt(cd[1],22,2,cd[1].length>11?19:23,cd[2]===MO?INK:'#fff',{wt:'900',f:DISP,st:cd[2]===MO?null:INK,sw:5})}));
    if(q>.6)shock(180,y,t,cd[0],'rgba(255,255,255,.7)',60,2.5,.6)});
  if(t>E.c_com){const q=eb((t-E.c_com)/.45);tr(180,490,q,0,()=>{ctx.fillStyle='#fff';rr(-100,-26,200,52,26);ctx.fill();txt('COMENTA',10,1,22,INK);ctx.fillStyle=BR;rr(-90,-14,28,22,6);ctx.fill();poly([[-84,8],[-80,16],[-74,8]],BR)})}}
boot([s0,s1,s2,s3,s4,s5,s6,s7],TRS,{cap:{acc:ACC}});
