// ===== ¿Por qué los perros mueven la cola? — escenas =====
const ST='rgba(0,0,0,.55)';
const mt=(s,x,y,sz,col,t,t0,o={})=>mtext(s,x,y,sz,col,t,t0,Object.assign({stroke:ST,sw:Math.max(4,sz*.16)},o));
const arrowT=(x,y,d,col,k)=>withA(k,()=>tr(x,y,1+.08*Math.sin(performance_now_t*10),0,()=>poly([[0,-15],[0,15],[d*24,0]],col)));
let performance_now_t=0;

// S0 GANCHO: perro de espaldas, la cola es un medidor que se mueve a ambos lados
function s0(t,u){performance_now_t=t;
  const c=camAt(u,[[0,180,320,1],[3.9,180,320,1],[5.7,180,370,1.2]]);
  const bias=t<5.3?0:.85*Math.sin((t-5.3)*3.2),gA=eo((t-3.9)/.5);
  world(c,()=>{lab(t);glow(180,390,200,'rgba(92,225,198,.2)');
    dogBack(180,484,2.0,{t,bias,amp:t<5.3?.55:.2,gauge:gA});
    for(let i=0;i<6;i++){const q=(t-E.h_feliz-i*.07)/1.3;if(q>0&&q<1)heart(180+(i-2.5)*38,330-q*120,.9+.3*R(i),i%2?CORAL:SUN,1-q)}});
  shock(180,330,t,E.h_feliz,'rgba(255,209,102,.8)',150,3,.6);
  mt('TU PERRO NO SIEMPRE',180,66,25,'#fff',t,-.6,{out:3.3});
  mt('ESTÁ FELIZ',180,112,46,SUN,t,-.5,{out:3.3,sh:'rgba(255,209,102,.6)'});
  mt('¿DE QUÉ LADO?',180,92,40,SUN,t,E.h_mir-.1,{sh:'rgba(255,209,102,.6)'});
  if(t>E.h_lado){const k=eo((t-E.h_lado)/.3);
    arrowT(30,300,-1,CORAL,k);arrowT(330,300,1,MINT,k);
    mt('IZQUIERDA',62,490,17,CORAL,t,E.h_lado,{});mt('DERECHA',298,490,17,MINT,t,E.h_lado,{})}}

// S1 LABORATORIO: Italia 2007, cámara que graba
function s1(t,u){lab(t);
  const x0=44,y0=190,x1=316,y1=490,L=26,vf=eo((u+.3)/.5);
  withA(vf,()=>{ctx.strokeStyle=MINT;ctx.lineWidth=3;
    [[x0,y0,1,1],[x1,y0,-1,1],[x0,y1,1,-1],[x1,y1,-1,-1]].forEach(([x,y,a,b])=>{ctx.beginPath();ctx.moveTo(x+a*L,y);ctx.lineTo(x,y);ctx.lineTo(x,y+b*L);ctx.stroke()});
    const sy=y0+((t*80)%(y1-y0));ctx.globalAlpha*=.25;line(x0,sy,x1,sy,MINT,2)});
  dogBack(180,462,1.7,{t,amp:.45,bias:.08,al:vf});
  if(t>E.s1_grabo){if(Math.floor(t*2.2)%2===0)circ(66,212,6,'#ff3b3b');txt('REC',78,213,14,'#ff7b7b',{a:'left'})}
  [[92,250,0],[180,238,1],[268,252,2]].forEach(([x,y,k])=>{const q=eb((t-E.s1_dist-k*.13)/.4);if(q<=0)return;const b=Math.sin(t*3+k)*3;
    tr(x,y+b,q,0,()=>{circ(0,0,27,'rgba(255,255,255,.1)','rgba(92,225,198,.7)',1.6);
      if(k===0)ballIcon(0,0,1,t*2);else if(k===1)bowl(0,14,.5);else person(0,16,.5)})});
  mt('2007',180,84,58,SUN,t,E.s1_siete-.15,{sh:'rgba(255,209,102,.6)'});
  mt('ITALIA',180,136,32,'#fff',t,E.s1_ita-.1);
  if(t>=E.s1_grabo){const a=Math.exp(-(t-E.s1_grabo)*9);withA(a*.9,()=>{ctx.fillStyle='#fff';ctx.fillRect(0,0,360,640)});shock(180,340,t,E.s1_grabo,'rgba(92,225,198,.9)',170,4,.6)}}

// S2 DERECHA: se acerca a su dueño -> la cola va a la derecha
function s2(t,u){lab(t);
  const wk=eio((t-16.4)/1.8),sc=lerp(1.9,1.6,wk),y=lerp(505,482,wk);
  const bias=eio((t-15.8)/1.2),gA=eo((t-15.6)/.4);
  glow(180,250,120,'rgba(255,209,102,.18)');
  const po=eb((t-E.s2_dueno+.05)/.45);if(po>0){tr(180,264,po,0,()=>person(0,0,1.05,'#cfe9f2'));
    if(t>E.s2_dueno)heart(180,176-Math.sin(t*4)*4,1.2,CORAL,eo((t-E.s2_dueno)/.3));burst(180,230,t,E.s2_dueno,[SUN,CORAL],14,90,.7,3)}
  dogBack(180,y,sc,{t,bias:clamp01(bias),amp:.35,gauge:gA,gcol:MINT});
  mt('SU DUEÑO',180,90,44,'#fff',t,E.s2_cuando+.05,{out:15.5});
  mt('O ALGO QUE QUIERE',180,68,24,'#fff',t,15.62,{out:E.s2_mov+1.2});
  mt('ACERCARSE',180,112,42,MINT,t,E.s2_acerc-.1,{out:E.s2_mov+1.2,sh:'rgba(92,225,198,.6)'});
  slam('DERECHA',180,100,52,MINT,t,E.s2_der,{st:ST,sw:7,sh:'rgba(92,225,198,.8)'});
  if(t>E.s2_der){arrowT(318,360,1,MINT,eo((t-E.s2_der)/.2));shock(240,400,t,E.s2_der,'rgba(92,225,198,.8)',120,3,.5)}}
const clamp01=x=>Math.max(0,Math.min(1,x));

// S3 IZQUIERDA: perro grande y desconocido -> la cola va a la izquierda
function s3(t,u){lab(t,.8);
  const en=eo((t-E.s3_grande+.35)/.6),bx=lerp(440,262,en),sh=t>E.s3_grande+.4?Math.sin(t*30)*.8:0;
  glow(bx-20,230,150,'rgba(255,90,60,.18)',en);
  beast(bx+sh,300,2.3,1,{flip:true,col:SIL,rim:rgba(CORAL,.8),eye:'rgba(255,90,60,.95)'});
  const bias=-eo((t-E.s3_desc)/.8),cow=eo((t-E.s3_desc)/.6),sc=lerp(1.5,1.38,cow);
  dogBack(180,508,sc,{t,bias,amp:.3,gauge:eo((t-E.s3_desc+.3)/.4),gcol:CORAL,look:-cow*.6});
  mt('ANTE UN PERRO',180,62,25,'#fff',t,E.s3_grande-.5,{out:E.s3_izq-.15});
  mt('GRANDE Y DESCONOCIDO',180,98,26,CORAL,t,E.s3_grande-.2,{out:E.s3_izq-.15});
  if(t>E.s3_izq-.05){pill(40,92,280,52,CORAL,'IZQUIERDA · MIEDO',INK,25,eb((t-E.s3_izq)/.35));shock(180,118,t,E.s3_izq,'rgba(255,122,89,.9)',160,3,.5)}}

// S4 DIFERENCIA MÍNIMA: casi invisible a simple vista; solo se ve en video
function s4(t,u){lab(t);
  const A=1-win(t,28.7,29.05),B=win(t,28.95,29.35);
  if(A>0){withA(A,()=>{dogBack(180,476,1.7,{t,bias:.12,amp:.18,gauge:.8,gcol:MINT});
    const e=eb((t-E.s4_imp+.3)/.4);if(e>0)tr(180,214,e,0,()=>{ctx.fillStyle='#e9f6f6';ctx.beginPath();ctx.ellipse(0,0,56,28,0,0,TAU);ctx.fill();circ(Math.sin(t*2)*6,0,15,INK);circ(Math.sin(t*2)*6-4,-4,4,'#fff');
      if(t>E.s4_imp){const k=eo((t-E.s4_imp)/.2);ctx.strokeStyle=CORAL;ctx.lineWidth=7;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-60,-34*k);ctx.lineTo(-60+120*k,34*k);ctx.stroke()}});
    mt('UNA DIFERENCIA',180,64,26,'#fff',t,E.s4_min-.9,{out:E.s4_imp-.15});mt('MÍNIMA',180,106,46,SUN,t,E.s4_min-.1,{out:E.s4_imp-.15,sh:'rgba(255,209,102,.6)'});
    mt('CASI IMPOSIBLE',180,64,36,CORAL,t,E.s4_imp-.1);mt('DE NOTAR A SIMPLE VISTA',180,104,20,'#fff',t,E.s4_simple-.5)})}
  if(B>0){withA(B,()=>{const xs=[48,114,180,246,312],bs=[.05,.22,.36,.2,.42],ph=cl((t-29.2)/1.9),px=lerp(24,336,ph);
    ctx.fillStyle='rgba(255,255,255,.06)';ctx.fillRect(0,246,360,108);
    for(let i=0;i<19;i++){ctx.fillStyle='rgba(255,255,255,.22)';ctx.fillRect(6+i*19,250,9,6);ctx.fillRect(6+i*19,344,9,6)}
    xs.forEach((x,i)=>{const hit=Math.abs(px-x)<34;ctx.fillStyle=hit?'rgba(92,225,198,.22)':'rgba(255,255,255,.07)';ctx.strokeStyle=hit?MINT:'rgba(255,255,255,.2)';ctx.lineWidth=hit?2.5:1;rr(x-29,260,58,80,8);ctx.fill();ctx.stroke();dogBack(x,332,.5,{bias:bs[i],amp:0,gauge:hit?1:0})});
    line(px,240,px,360,SUN,2.5);
    mt('SOLO SE VIO AL',180,70,26,'#fff',t,E.s4_solo-.05,{out:E.s4_anal-.05});
    mt('ANALIZAR',180,70,42,MINT,t,E.s4_anal-.1,{sh:'rgba(92,225,198,.6)'});mt('LOS VIDEOS',180,114,36,'#fff',t,E.s4_vid-.12);
    const lq=eb((t-E.s4_anal)/.4);if(lq>0)tr(180,300,lq,0,()=>{ctx.fillStyle='rgba(92,225,198,.12)';ctx.beginPath();ctx.arc(0,0,56,0,TAU);ctx.fill();ctx.strokeStyle=MINT;ctx.lineWidth=6;ctx.stroke();
      ctx.lineCap='round';ctx.lineWidth=11;line(40,40,84,84,MINT,11);ctx.strokeStyle='rgba(255,255,255,.5)';ctx.lineWidth=3;ctx.beginPath();ctx.arc(0,0,44,3.6,4.5);ctx.stroke()})})}}

// S5 LOBOS Y ZORROS vs PERROS: la cola apareció con la domesticación
function s5(t,u){lab(t);
  const da=cl((t-E.s5_per+.3)/.5),wg=eo((t-E.s5_si)/.5)*.85;
  beast(125,268,1.35,0,{col:'#aab9c1',rim:rgba(MINT,.55),wag:.05,t});
  beast(274,266,.95,.35,{col:'#cfd9de',rim:rgba(MINT,.5),wag:.05,t});
  if(da>0)withA(da,()=>{beast(190,484-(1-eo(da))*30,1.5,1,{col:FUR,rim:'rgba(255,230,160,.7)',wag:wg,t});if(wg>.3)for(let k=0;k<3;k++){ctx.strokeStyle='rgba(92,225,198,'+(.6-k*.15)+')';ctx.lineWidth=3;ctx.beginPath();ctx.arc(118,456,22+k*9+Math.sin(t*16)*3,Math.PI*1.1,Math.PI*1.65);ctx.stroke()}});
  mt('LOBOS Y ZORROS',180,80,38,'#fff',t,E.s5_lobos-.1,{out:E.s5_per-.3});mt('SALVAJES',180,120,28,CORAL,t,E.s5_zor,{out:E.s5_per-.3});
  mt('LOS PERROS',180,80,38,'#fff',t,E.s5_per-.1);mt('SÍ LA MUEVEN',180,120,30,MINT,t,E.s5_si-.1,{sh:'rgba(92,225,198,.6)'});
  mt('CASI NO LA MUEVEN',180,318,22,CORAL,t,E.s5_no-.1,{out:E.s5_cre-.1});
  mt('NACIÓ CON LA',180,336,24,'#fff',t,E.s5_cre,{out:E.s5_dom+.9});
  slam('DOMESTICACIÓN',180,372,36,SUN,t,E.s5_dom,{st:ST,sw:7,sh:'rgba(255,209,102,.8)'});
  if(t>E.s5_dom)shock(180,372,t,E.s5_dom,'rgba(255,209,102,.8)',170,3,.6)}

// S6 ZORROS PLATEADOS: generación tras generación mueven más la cola
function s6(t,u){lab(t,.9);
  const big=eo((t-44.45)/.4)*(1-win(t,E.s6_crian-.15,E.s6_crian+.2)),row=win(t,E.s6_crian+.1,E.s6_crian+.3)*(1-win(t,E.s6_dom-.4,E.s6_dom-.05)),spl=win(t,E.s6_dom-.2,E.s6_dom+.25);
  if(big>0)withA(big,()=>{glow(190,320,150+40*Math.sin((t-E.s6_plat)*6)*(t>E.s6_plat&&t<E.s6_plat+.8?1:0),'rgba(220,240,255,.28)');beast(190,352,2.0,.35,{col:'#c9d6dc',rim:rgba(MINT,.7),wag:.05,t});
    if(t>E.s6_plat&&t<E.s6_plat+.8){const x=lerp(60,330,(t-E.s6_plat)/.8);withA(.5,()=>line(x,260,x-30,380,'#fff',8))}});
  if(row>0)withA(row,()=>{const am=[.03,.15,.3,.55,.9];for(let i=0;i<5;i++){const q=eb((t-E.s6_crian-.1-i*.45)/.4);if(q<=0)continue;
      tr(44+i*68,340,q,0,()=>{beast(0,0,.6,.35,{col:'#d4dee3',rim:rgba(MINT,.5),wag:am[i],t});if(i<4)txt('›',34,-20,26,MINT,{al:.8})})}});
  if(spl>0)withA(spl,()=>{beast(95,392+(1-spl)*20,1.35,.35,{col:'#8d9ca4',rim:rgba('#ffffff',.3),wag:.03,t});
    const wg=eo((t-E.s6_mov)/.5)*.9;beast(264,392+(1-spl)*20,1.35,.35,{col:'#e6eff3',rim:rgba(MINT,.8),wag:wg,t});
    if(wg>.3)for(let k=0;k<3;k++){ctx.strokeStyle='rgba(92,225,198,'+(.6-k*.15)+')';ctx.lineWidth=3;ctx.beginPath();ctx.arc(210,356,22+k*9+Math.sin(t*16)*3,Math.PI*1.1,Math.PI*1.65);ctx.stroke()}
    pill(30,452,130,34,'#6b7f89','SALVAJE','#fff',16,1);pill(205,452,130,34,MINT,'DOMESTICADO',INK,15,1)});
  mt('UNA PISTA MÁS',180,100,38,SUN,t,E.s6_pista-.1,{out:44.3,sh:'rgba(255,209,102,.6)'});
  mt('EXPERIMENTO',180,80,34,'#fff',t,E.s6_exp-.1,{out:E.s6_crian-.2});mt('ZORROS PLATEADOS',180,120,28,'#dbe8ee',t,E.s6_plat-.1,{out:E.s6_crian-.2});
  mt('GENERACIÓN TRAS',180,76,28,'#fff',t,E.s6_crian,{out:E.s6_dom-.3});mt('GENERACIÓN',180,116,44,SUN,t,E.s6_gen-.12,{out:E.s6_dom-.3,sh:'rgba(255,209,102,.6)'});
  mt('LOS DOMESTICADOS',180,80,30,MINT,t,E.s6_dom-.1);mt('MOVÍAN MÁS LA COLA',180,120,28,'#fff',t,E.s6_mov-.12)}

// S7 ¿POR QUÉ? Nadie lo sabe; teoría: elegimos a los que más la movían
function s7(t,u){lab(t);
  const q1=eb((t-E.s7_pas+.1)/.5),ph1=1-win(t,E.s7_teo-.3,E.s7_teo+.2);
  if(ph1>0)withA(ph1,()=>{glow(180,250,150,'rgba(255,209,102,.25)');tr(180,260,q1,Math.sin(t*3)*.04,()=>txt('?',0,0,250,SUN,{f:DISP,st:ST,sw:10,sh:'rgba(255,209,102,.7)'}));
    mt('NADIE LO SABE',180,430,40,'#fff',t,E.s7_nadie-.05);mt('CON CERTEZA',180,476,34,CORAL,t,E.s7_cert-.1)});
  const p2=win(t,E.s7_teo-.1,E.s7_teo+.3);
  if(p2>0)withA(p2,()=>{const xs=[44,112,180,248,316],am=[.1,.18,.28,.45,.85];
    const ts=[59.8,60.35,60.9,61.45,61.95],ix=[0,2,1,3,4];let k=-1;ts.forEach((tt_,i)=>{if(t>=tt_)k=i});
    const cur=k>=0?xs[ix[k]]:180,prv=k>0?xs[ix[k-1]]:cur,rx=lerp(prv,cur,eo((t-(k>=0?ts[k]:0))/.18));
    xs.forEach((x,i)=>{const chosen=t>E.s7_perr&&i===4;dogBack(x,442,.62,{t,amp:am[i],bias:0,spd:15+i,al:(t>E.s7_perr&&!chosen)?.35:1})});
    const pq=eb((t-E.s7_hum)/.4);if(pq>0)tr(180,306,pq,0,()=>person(0,0,1.0,'#cfe9f2'));
    if(k>=0){ctx.setLineDash([5,5]);line(180,310,rx,380,MINT,2);ctx.setLineDash([]);ctx.strokeStyle=MINT;ctx.lineWidth=3;ctx.shadowColor=MINT;ctx.shadowBlur=12;ctx.beginPath();ctx.arc(rx,414,34,0,TAU);ctx.stroke();ctx.shadowBlur=0}
    if(t>E.s7_mov){burst(316,400,t,E.s7_mov,[SUN,MINT],18,110,.8,3);glow(316,414,60,'rgba(255,209,102,.45)',eo((t-E.s7_mov)/.3))}
    mt('UNA TEORÍA',180,84,42,SUN,t,E.s7_teo-.1,{sh:'rgba(255,209,102,.6)'});mt('LOS HUMANOS FUIMOS ELIGIENDO',180,128,19,'#fff',t,E.s7_hum-.12);
    mt('SIN QUERER',180,490,30,SUN,t,E.s7_elig+.85,{out:E.s7_perr-.1});mt('A LOS QUE MÁS MOVÍAN LA COLA',180,490,17,MINT,t,E.s7_perr,{})})}

// S8 CIERRE: ¿a ti o a su plato?
function s8(t,u){lab(t);
  const bias=t<E.c_ti-.05?0:t<E.c_plato-.1?-eo((t-E.c_ti+.05)/.25):t<E.c_com?eo((t-E.c_plato+.1)/.25)*2-1:0;
  const cq=eb((t-E.c_asi-.9)/.45),bq=eb((t-E.c_asi-1.15)/.45),lp=bias<-.5?1.1:1,rp=bias>.5?1.1:1,lab_=1-win(t,E.c_sig-.15,E.c_sig+.1);
  if(cq>0)tr(85,225,cq*lp,0,()=>{ctx.fillStyle='rgba(92,225,198,.16)';ctx.strokeStyle=MINT;ctx.lineWidth=bias<-.5?4:2;rr(-65,-65,130,130,18);ctx.fill();ctx.stroke();person(0,34,.9,'#cfe9f2')});
  if(bq>0)tr(275,225,bq*rp,0,()=>{ctx.fillStyle='rgba(255,209,102,.16)';ctx.strokeStyle=SUN;ctx.lineWidth=bias>.5?4:2;rr(-65,-65,130,130,18);ctx.fill();ctx.stroke();bowl(0,34,1.0)});
  if(cq>0)withA(lab_,()=>{mt('TÚ',85,320,32,MINT,t,E.c_asi+1.0);mt('SU PLATO',275,320,26,SUN,t,E.c_asi+1.25)});
  dogBack(180,510,1.4,{t,bias,amp:t<E.c_ti-.05||t>E.c_com?.5:.3,gauge:.9,gcol:bias<0?CORAL:MINT,look:bias*.4});
  mt('DIME:',180,86,48,SUN,t,E.c_asi-.05,{out:E.c_com-.3,sh:'rgba(255,209,102,.6)'});
  mt('COMENTA',180,70,42,'#fff',t,E.c_com-.05);mt('TU RESPUESTA',180,116,30,MINT,t,E.c_com+.2,{sh:'rgba(92,225,198,.6)'});
  if(t>E.c_sig-.1){pill(55,300,250,36,CORAL,'SÍGUEME PARA MÁS','#fff',20,eb((t-E.c_sig+.1)/.4))}
  if(t>E.c_com)shock(180,116,t,E.c_com,'rgba(92,225,198,.8)',140,3,.5)}
boot([s0,s1,s2,s3,s4,s5,s6,s7,s8],TRS,{cap:{acc:MINT}});
