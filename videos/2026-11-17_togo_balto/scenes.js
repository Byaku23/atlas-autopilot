// ===== Togo vs Balto — escenas =====
const bounce=(t,t0,k=8,d=5)=>t>t0?wob(t-t0,k,d):0;
// S0 GANCHO: Togo corre 420 km; otro perro se lleva la estatua
function s0(t,u){const c=camAt(u,[[0,180,320,1.0],[6,180,318,1.08]]),a=t>E.h_otro,es=t>E.h_est;
  const bx=a?lerp(430,270,eo(cl((t-E.h_otro)/.9))):430;
  world(c,()=>{polar(t);hills(430,'#1c4560',22,.012,t*.2);hills(470,'#2d6a86',16,.016,t*.35+2);snowGround(FL,t,260);snowfall(t,60,2,.8,30);
    glow(110,420,150,'rgba(255,170,80,.25)');
    dog(100,FL+Math.sin(t*14)*-1.5,1.9,{ph:t*14,fill:TOGO,rim:ICE,head:.08,jaw:.4,tail:.5,t});
    if(a&&!es)dog(bx,FL,1.6,{ph:t*9*(bx>272?1:0),fill:BALTO,rim:ICE,head:.1,t,flip:false});
    if(es){statue(262,FL,.85,cl((t-E.h_est)/.7),{col:BRZ,glow:GLD,plate:1});shock(262,FL-80,t,E.h_est,'rgba(255,220,140,.9)',120,4,.6);burst(262,FL-110,t,E.h_est,[GLD,'#fff'],22,170,.8,3)}
    if(t>E.h_420){shock(105,FL-60,t,E.h_420,'rgba(255,170,80,.9)',110,4,.6)}});
  const n=countV(0,420,t,E.h_420-.1,1.5);
  withA(cl((t+.5)/.5),()=>txt(fmtN(n,0),180,168,86,'#fff',{wt:'900',st:INK,sw:12,sh:'rgba(255,154,60,.8)'}));
  TX('UN PERRO CORRIÓ',180,82,24,'#fff',t,-.6,{w:340});TX('KILÓMETROS',180,222,30,ORG,t,E.h_420+.1);
  TG('PARA SALVAR UNA CIUDAD',180,260,14,BLU,'#fff',t,E.h_ciudad-.1,{out:E.h_otro-.15});
  TX('Y OTRO PERRO',180,260,26,'#fff',t,E.h_otro-.05,{out:E.h_est-.1,w:340});
  slam('LA ESTATUA',180,278,50,GLD,t,E.h_est,{stroke:INK,sw:9,sh:'rgba(255,200,60,.7)'})}
// S1 NOME 1925
function s1(t,u){const c=camAt(u,[[0,150,320,1.0],[9.4,150,320,1.05],[15,60,330,1.0],[16.5,20,330,1.0]]),dif=cl((t-E.s1_dif)/.5);
  world(c,()=>{polar(t,1);hills(440,'#18405c',20,.01,1);snowGround(FL,t);
    for(let i=0;i<5;i++)house(60+i*84,FL,1.25+.1*(i%2),cl(.45+.55*Math.sin(t*1.5+i)*dif+(1-dif)*.5),t);
    if(dif>0){for(let i=0;i<5;i++){const y=350-i%2*10;withA(dif*(.6+.4*Math.sin(t*5+i)),()=>{glow(60+i*84,y,28,'rgba(255,60,60,.5)');ctx.fillStyle=RD;ctx.fillRect(60+i*84-9,y-3,18,6);ctx.fillRect(60+i*84-3,y-9,6,18)})}}
    snowfall(t,80,4,.85,34);
    if(t>E.s1_med){const q=cl((t-E.s1_med)/1);vial(-70,360+Math.sin(t*2)*6,1.4,t);ctx.save();ctx.setLineDash([6,8]);ctx.strokeStyle='rgba(207,234,255,'+(.5*q)+')';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(-60,380);ctx.lineTo(30,420);ctx.stroke();ctx.restore()}
    if(t>E.s1_trin-.5){const q=cl((t-(E.s1_trin-.5))/1.6);team(lerp(-160,200,eo(q)),FL,1.5,t,3,{lead:TOGO})}});
  const yr=Math.round(countV(1900,1925,t,E.s1_1925-.1,.5));
  TX('ENERO DE',180,86,24,'#fff',t,E.s1_ene-.05,{out:E.s1_nome-.1});withA(cl((t-E.s1_ene)/.3),()=>{if(t<E.s1_nome-.1)txt(String(t>E.s1_1925-.1?yr:1900),180,136,64,GLD,{wt:'900',st:INK,sw:9})});
  TG('NOME, ALASKA',180,100,18,BLU,'#fff',t,E.s1_nome-.1,{out:E.s1_dif+1.2});
  TX('DIFTERIA',180,150,44,'#ff6a5a',t,E.s1_dif-.05,{out:E.s1_med-.1,sh:'rgba(255,60,60,.6)'});
  TX('LA MEDICINA',180,92,26,'#fff',t,E.s1_med-.05,{out:E.s1_trin-.55});TX('LEJÍSIMOS',180,140,42,AUR,t,E.s1_lej-.05,{out:E.s1_trin-.55});
  TX('SOLO QUEDA',180,92,26,'#fff',t,E.s1_trin-.6);slam('EL TRINEO',180,150,50,ICE,t,E.s1_trin-.05,{stroke:INK,sw:9,sh:'rgba(120,200,255,.7)'})}
// S2 RELEVO: 20 conductores, 150 perros, suero de mano en mano
function s2(t,u){const c=camAt(u,[[0,180,320,1.0],[12,180,315,1.06]]);const N=20;
  const q=cl((t-E.s2_20)/1.8),vq=cl((t-E.s2_suero)/(E.s2_1085-E.s2_suero-.2)),pos=(i)=>[24+i*(312/(N-1)),300+Math.sin(i*.9)*34];
  world(c,()=>{polar(t);hills(430,'#18405c',20,.01,3);snowGround(FL,t);snowfall(t,70,7,.8,36);
    for(let i=0;i<N;i++){if(i/N>q)continue;const p=pos(i),k=spring((t-E.s2_20-i*.09)/.35,12,6);
      if(i<N-1){const p2=pos(i+1);line(p[0],p[1],p2[0],p2[1],'rgba(207,234,255,.35)',2)}
      circ(p[0],p[1],6*k,i%2?ORG:ICE,INK,1.6)}
    if(t>E.s2_suero-.2){const f=vq*(N-1),i=Math.min(N-2,Math.floor(f)),r=f-i,p=pos(i),p2=pos(i+1);vial(lerp(p[0],p2[0],r),lerp(p[1],p2[1],r)-18,.8,t)}
    if(t>E.s2_52){const fq=cl((t-E.s2_52)/.8);withA(fq*.9,()=>{ctx.fillStyle='rgba(120,200,255,.18)';ctx.fillRect(-100,-100,600,900)});}});
  if(t>E.s2_52-.1)frost(t,cl((t-E.s2_52)/1.2));
  TX('20 CONDUCTORES',180,84,30,'#fff',t,E.s2_20-.05,{out:E.s2_150-.1,w:340});
  TX('150 PERROS',180,84,40,ORG,t,E.s2_150-.05,{out:E.s2_suero-.1,w:340,sh:'rgba(255,154,60,.6)'});
  TX('EL SUERO PASA',180,84,26,'#fff',t,E.s2_suero-.05,{out:E.s2_1085-.1});TX('DE MANO EN MANO',180,126,30,AUR,t,E.s2_mano-.1,{out:E.s2_1085-.1,w:340});
  withA(cl((t-E.s2_1085+.1)/.3),()=>{txt(fmtN(countV(0,1085,t,E.s2_1085,1.4),0),180,96,64,'#fff',{wt:'900',st:INK,sw:10,sh:'rgba(92,240,196,.7)'});txt('KILÓMETROS',180,142,22,AUR,{wt:'900',st:INK,sw:5})});
  TG('EN 5 DÍAS Y MEDIO',180,196,15,BLU,'#fff',t,E.s2_dias-.15,{out:E.s2_52-.1});
  withA(cl((t-E.s2_52+.1)/.3),()=>{txt('-'+fmtN(countV(0,52,t,E.s2_52,.9),0)+'°',180,196,72,'#aee0ff',{wt:'900',st:INK,sw:10,sh:'rgba(120,200,255,.8)'})});
  TG('BAJO CERO',180,250,16,BLU,'#fff',t,E.s2_cero-.35)}
// S3 TOGO: 12 años, líder de Seppala
function s3(t,u){const c=camAt(u,[[0,180,320,1.0],[6,180,310,1.1]]),k=Math.max(0,spring((t-E.s3_togo+.1)/.6,12,6));
  world(c,()=>{polar(t);rays(180,330,t,18,600,ICE,.07,.06,.12);glow(180,330,200,'rgba(255,154,60,.3)');snowGround(FL,t);snowfall(t,50,9,.7,22);
    circ(180,330,138,'rgba(11,43,69,.55)',ICE,4);
    dog(150,FL-10+bounce(t,E.s3_togo,10,6)*-6,3.5*k,{fill:TOGO,rim:ICE,head:.1,jaw:.2,t,tail:.6});
    if(t>E.s3_sepp-.2){const m=cl((t-E.s3_sepp+.2)/.5);withA(m,()=>musher(292,FL-8,1.9,{lean:.2,rim:ICE}))}});
  TX('UNO DE ESOS PERROS',180,82,22,'#fff',t,E.s3_uno-.05,{out:E.s3_togo-.1,w:340});
  slam('TOGO',180,142,70,ORG,t,E.s3_togo,{stroke:INK,sw:11,sh:'rgba(255,154,60,.8)'});
  withA(cl((t-E.s3_doce+.1)/.3),()=>{const q=Math.max(0,spring((t-E.s3_doce)/.4,14,6));txt(String(Math.round(countV(0,12,t,E.s3_doce,.5))),288,236,70*q,'#fff',{wt:'900',st:INK,sw:9});txt('AÑOS',288,276,18,GLD,{wt:'900',st:INK,sw:4})});
  TG('LÍDER DEL TRINEO',180,196,15,BLU,'#fff',t,E.s3_lider-.1,{out:E.s3_sepp});TG('CONDUCTOR LEONHARD SEPPALA',180,196,13,ORG,INK,t,E.s3_sepp-.15,{w:340})}
// S4 420 km + cruce del hielo de Norton Sound; el hielo se rompe
function s4(t,u){const x=lerp(-20,470,cl((t-E.s4_togo)/(E.s4_romp-E.s4_togo+.3))),br=cl((t-E.s4_romp+.1)/1.6),f=follow(()=>[x,FL-70],t,.25);
  const c={x:lerp(180,f[0]+60,.8),y:360,z:t>E.s4_hielo?1.2:1.05,r:0};
  world(c,()=>{polar(t);hills(420,'#18405c',24,.009,5);ctx.fillStyle=SNOW;ctx.fillRect(-300,FL-6,1600,6);iceSheet(-300,900,FL-6,t,br,x);
    team(x,FL-12,2.0,t,3,{lead:TOGO,sled:false});streaks(t,10,'rgba(207,234,255,.6)',Math.PI,300,40,.5);snowfall(t,70,11,.8,40);
    if(t>E.s4_romp){const e=t-E.s4_romp;shock(x-120,FL-4,t,E.s4_romp,'rgba(207,234,255,.9)',140,5,.7);burst(x-120,FL-10,t,E.s4_romp,['#fff',ICE],26,200,1.0,3);
      for(let i=0;i<4;i++){const cx=x-60-i*90;line(cx,FL-6,cx-30,FL+20,'#fff',3);line(cx-30,FL+20,cx-10,FL+42,'#fff',2)}}});
  TX('TOGO Y SEPPALA',180,84,26,'#fff',t,E.s4_togo-.05,{out:E.s4_420-.1,w:340});
  withA(cl((t-E.s4_420+.1)/.3),()=>{if(t<E.s4_cruz-.1){txt(fmtN(countV(0,420,t,E.s4_420,.9),0)+' KM',180,100,62,ORG,{wt:'900',st:INK,sw:9,sh:'rgba(255,154,60,.7)'})}});
  TG('MÁS QUE NADIE',180,152,16,ORG,INK,t,E.s4_nadie-.15,{out:E.s4_cruz-.1});
  TX('CRUZARON EL MAR HELADO',180,90,24,'#fff',t,E.s4_cruz-.05,{out:E.s4_horas-.1,w:340});TG('NORTON SOUND',180,152,17,BLU,'#fff',t,E.s4_nort-.1,{out:E.s4_horas-.1});
  TX('POCAS HORAS DESPUÉS',180,92,24,'#fff',t,E.s4_horas-.05,{out:E.s4_romp+.9,w:340});TX('EL HIELO',180,138,40,ICE,t,E.s4_hielo-.05,{out:E.s4_romp+.9});
  slam('SE ROMPIÓ',180,230,52,'#fff',t,E.s4_romp,{stroke:RD,sw:10,sh:'rgba(255,80,60,.7)'})}
// S5 BALTO: 85 km
function s5(t,u){const c=camAt(u,[[0,180,320,1.0],[9,180,315,1.06]]),xb=lerp(-30,300,eo(cl((t-E.s5_balto+.4)/1.6)));
  world(c,()=>{polar(t);hills(440,'#18405c',20,.01,2);snowGround(FL,t,t>E.s5_balto-.5?200:0);snowfall(t,60,5,.8,30);
    glow(160,430,140,'rgba(74,168,255,.25)');
    if(t>E.s5_balto-.5){team(xb,FL+4,1.0,t,3,{lead:BALTO,fill:'#404755',spd:12})}
    if(t>E.s5_nome){const k=cl((t-E.s5_nome)/.5);withA(k,()=>{house(330,FL,1.6,1,t)});shock(330,FL-40,t,E.s5_nome,'rgba(255,200,100,.9)',90,4,.6)}});
  TX('PERO EL ÚLTIMO TRAMO',180,80,22,'#fff',t,E.s5_pero-.05,{out:E.s5_otro-.1,w:340});TX('LO HIZO OTRO PERRO',180,122,22,'#fff',t,E.s5_otro-.05,{out:E.s5_balto-.1,w:340});
  slam('BALTO',180,96,66,BLU,t,E.s5_balto,{stroke:INK,sw:11,sh:'rgba(74,168,255,.8)'});
  TG('CONDUCTOR GUNNAR KAASEN',180,160,13,BLU,'#fff',t,E.s5_kaa-.15);
  const q85=cl((t-E.s5_85)/1);const bq=eo(cl((t-E.s5_85)/.9));
  withA(cl((t-E.s5_85+.4)/.3),()=>{barH(30,260,300,30,ORG,.999*0.35,'TOGO',null);});
  withA(cl((t-E.s5_85+.3)/.3),()=>{barH(30,330,300,30,BLU,bq*85/420,'BALTO',fmtN(countV(0,85,t,E.s5_85,.9),0)+' KM',ICE);barH(30,260,300,30,'rgba(255,154,60,.45)',1,'TOGO','420 KM','#ffd9b0')})}
// S6 BALTO famoso; estatua en Central Park
function s6(t,u){const c=camAt(u,[[0,180,320,1.0],[7.2,180,310,1.1]]),sq=cl((t-E.s6_est)/.8);
  world(c,()=>{bg('#0b1c3a','#3a2a5a');stars(t,40,6,.5);
    ctx.fillStyle='#10182c';for(let i=0;i<9;i++){const w=34+R(i)*26,h=130+R(i*3)*170;ctx.fillRect(i*42-12,FL-h,w,h);ctx.fillStyle='rgba(255,210,120,.5)';for(let j=0;j<6;j++)if(R(i*9+j)>.55)ctx.fillRect(i*42-8,FL-h+14+j*24,6,8);ctx.fillStyle='#10182c'}
    snowGround(FL,t);for(let i=0;i<5;i++){const x=20+i*78;ctx.fillStyle='#16301f';ctx.beginPath();ctx.moveTo(x,FL-4);ctx.lineTo(x+24,FL-70-R(i)*20);ctx.lineTo(x+48,FL-4);ctx.closePath();ctx.fill()}
    snowfall(t,50,3,.7,22);
    if(t>E.s6_fam-.3){const k=cl((t-E.s6_fam+.3)/.5);withA(k*(1-sq),()=>{[0,1,2].forEach(i=>{tr(60+i*120,260+Math.sin(t*2+i)*6,1,(i-1)*.18,()=>{ctx.fillStyle=CR;ctx.strokeStyle=INK;ctx.lineWidth=2;ctx.fillRect(-34,-44,68,88);ctx.strokeRect(-34,-44,68,88);ctx.fillStyle=INK;ctx.fillRect(-26,-34,52,12);ctx.fillStyle='rgba(10,16,32,.35)';for(let j=0;j<5;j++)ctx.fillRect(-26,-14+j*11,52,5)})})})}
    if(sq>0){statue(180,FL,1.35,sq,{col:'#4a3a2a',rim:BLU,glow:BLU,plate:1});shock(180,FL-110,t,E.s6_est,'rgba(255,220,140,.9)',150,4,.6);burst(180,FL-150,t,E.s6_est,[GLD,'#fff'],26,180,.9,3)}});
  TX('BALTO',180,100,62,BLU,t,E.s6_balto-.05,{out:E.s6_fam-.1,sh:'rgba(74,168,255,.8)'});
  TX('FAMOSO EN TODO EL PAÍS',180,92,24,'#fff',t,E.s6_fam-.05,{out:E.s6_mismo-.1,w:340});TG('1925',180,150,22,GLD,INK,t,E.s6_mismo-.15);
  TX('ESTATUA EN',180,84,26,'#fff',t,E.s6_est-.1,{w:340});TX('CENTRAL PARK',180,126,38,GLD,t,E.s6_cp-.05,{w:340,sh:'rgba(255,200,60,.7)'});TG('NUEVA YORK',180,172,14,BLU,'#fff',t,E.s6_ny-.1)}
// S7 Togo espera: estatua 2001, Time 2011
function s7(t,u){const c=camAt(u,[[0,180,320,1.0],[10,180,312,1.08]]),sq=cl((t-E.s7_2001)/.8),md=cl((t-E.s7_2011-.3)/.7);
  world(c,()=>{bg('#0a1a2e','#1f4a5a');stars(t,40,7,.5);rays(180,330,t,16,600,GLD,.05*(t>E.s7_2001?1:0),.05,.12);snowGround(FL,t);snowfall(t,40,8,.6,20);
    // pedestal vacío mientras espera
    if(sq<=0){ctx.save();ctx.globalAlpha=.9;ctx.fillStyle='#6d7886';ctx.strokeStyle=INK;ctx.lineWidth=3;ctx.fillRect(58,FL-34,104,34);ctx.strokeRect(58,FL-34,104,34);ctx.fillStyle='#8b96a3';ctx.fillRect(52,FL-42,116,10);ctx.strokeRect(52,FL-42,116,10);ctx.restore();if(t>E.s7_togo)dog(270,FL,2.0,{fill:TOGO,rim:ICE,head:.5,t,flip:true,tail:.3,sit:1})}
    else{statue(180,FL,1.35,sq,{col:TOGO,rim:ORG,glow:ORG,plate:1});shock(180,FL-110,t,E.s7_2001,'rgba(255,154,60,.9)',140,4,.6);burst(180,FL-140,t,E.s7_2001,[ORG,'#fff'],24,180,.9,3)}
    if(md>0){const my=lerp(-80,170,eb(md));medal(180,my,1.7,Math.sin(t*3)*.08);glow(180,my,90,'rgba(242,193,78,.4)')}});
  TX('TOGO TUVO QUE ESPERAR',180,84,24,'#fff',t,E.s7_togo-.05,{out:E.s7_est-.1,w:340});
  TX('SU ESTATUA LLEGÓ',180,84,24,'#fff',t,E.s7_est-.05,{out:E.s7_2011-.1,w:340});
  withA(cl((t-E.s7_2001+.1)/.25),()=>{if(t<E.s7_2011-.1)txt(String(Math.round(lerp(1925,2001,eo(cl((t-E.s7_est)/1.8))))),180,150,72,ORG,{wt:'900',st:INK,sw:10,sh:'rgba(255,154,60,.7)'})});
  TG('REVISTA TIME · 2011',180,258,17,GLD,INK,t,E.s7_time-.1);
  TX('EL ANIMAL MÁS HEROICO',180,300,22,'#fff',t,E.s7_her-.1,{w:340,out:1e9});TX('DE LA HISTORIA',180,340,34,GLD,t,E.s7_hist-.1,{w:340,sh:'rgba(255,200,60,.7)'})}
// S8 PREGUNTA: Togo (corrió más) vs Balto (cruzó la meta)
function s8(t,u){const c=camAt(u,[[0,180,320,1.0],[12,180,315,1.04]]),a=t>E.c_togo,b=t>E.c_balto,pa=a?.5+.5*Math.sin(t*5):0,pb=b?.5+.5*Math.sin(t*5+3):0;
  world(c,()=>{bg('#071226','#1f3a5a');stars(t,40,9,.6);
    ctx.fillStyle='rgba(255,154,60,'+(.12+.12*pa)+')';ctx.fillRect(-100,-100,280,900);ctx.fillStyle='rgba(74,168,255,'+(.12+.12*pb)+')';ctx.fillRect(180,-100,280,900);
    line(180,-50,180,700,'rgba(255,255,255,.35)',2);snowGround(FL,t);snowfall(t,40,12,.6,20);
    dog(72,FL,1.6,{fill:TOGO,rim:ICE,head:.1,ph:t*11,t,tail:.6});dog(238,FL,1.6,{fill:BALTO,rim:ICE,head:.1,ph:0,t,tail:.4});
    ctx.save();ctx.strokeStyle='#fff';ctx.lineWidth=4;for(let k=0;k<6;k++){ctx.fillStyle=k%2?'#fff':INK;ctx.fillRect(318,FL-110+k*18,10,18)}ctx.restore();
    if(a)glow(90,FL-60,110,'rgba(255,154,60,'+(.3*pa)+')');if(b)glow(260,FL-60,110,'rgba(74,168,255,'+(.3*pb)+')')});
  TX('LA PREGUNTA',180,70,26,'#fff',t,E.c_asi-.05,{out:E.c_quien-.1});TX('QUE DIVIDE',180,112,36,GLD,t,E.c_preg-.05,{out:E.c_quien-.1,sh:'rgba(255,200,60,.6)'});
  TX('¿QUIÉN FUE EL HÉROE?',180,82,22,'#fff',t,E.c_quien-.05,{w:340});
  withA(cl((t-E.c_togo+.1)/.3),()=>{});TG('TOGO',90,176,24,ORG,INK,t,E.c_togo-.15);TG('CORRIÓ MÁS',90,214,13,ORG,INK,t,E.c_mas-.2);
  TG('BALTO',270,176,24,BLU,'#fff',t,E.c_balto-.15);TG('CRUZÓ LA META',270,214,13,BLU,'#fff',t,E.c_meta-.2);
  withA(cl((t-E.c_balto)/.3),()=>slam('VS',180,262,40,'#fff',t,E.c_balto,{stroke:RD,sw:8,sh:'rgba(255,60,60,.7)'}));
  TG('COMENTA TU RESPUESTA',180,322,17,GLD,INK,t,E.c_com-.15,{w:340});withA(cl((t-E.c_com)/.3),()=>{const ay=348+Math.sin(t*6)*6;poly([[160,ay],[200,ay],[180,ay+26]],GLD,INK,3)});
  TG('SÍGUEME PARA MÁS',180,392,14,ORG,INK,t,E.c_sig-.15)}
boot([s0,s1,s2,s3,s4,s5,s6,s7,s8],TRS,{cap:{acc:'#ffb347'}});
