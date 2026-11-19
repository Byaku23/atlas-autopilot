// ===== Pocho y Chito — escenas =====
const bounce=(t,t0,k=8,d=5)=>t>t0?wob(t-t0,k,d):0;
const SICK='#7d8a5c';
// S0 GANCHO: disparo en el ojo; 22 años después un pueblo lo llora
function s0(t,u){const c=camAt(u,[[0,120,445,1.5],[1.0,120,455,1.5],[2.8,120,455,1.5],[4.4,180,382,1.0]]),hurt=Math.max(.45,cl((t-E.h_ojo+.1)/.2)),dim=cl((t-E.h_morir)/.8),pq=cl((t-E.h_pueblo)/1.4);
  world(c,()=>{jnight(t);water(440,t,.9);shore(480,'#4a3a22');
    croc(40,486+dim*4,1.7,{t,hurt,fill:mixc(CROC,SICK,dim),mouth:dim*.18,sway:1-dim*.8});
    shock(110,427,t,E.h_ojo,'rgba(224,69,58,.95)',90,5,.7);burst(110,427,t,E.h_ojo,[RD,'#fff'],18,130,.7,2.6);
    crowd(215,350,486,12,t,pq,5);
    if(t>E.h_lloro-.2){const q=cl((t-E.h_lloro+.2)/.5);withA(q,()=>{for(let i=0;i<6;i++)candle(222+i*24,500+(i%2)*6,1,t)})}
    const dr=t-E.h_lloro;if(dr>0){for(let i=0;i<3;i++){const k=(dr*.8+i*.3)%1;withA(1-k,()=>circ(120,430+k*40,2.2,'#bfe8ff'))}}});
  withA(cl((t+.5)/.4),()=>{if(t<E.h_22-.1){TX('LE DISPARARON',180,80,30,'#fff',t,-.6,{w:340})}});
  TX('EN EL OJO',180,124,40,RD,t,-.3,{out:E.h_22-.1,sh:'rgba(224,69,58,.7)',w:340});
  withA(cl((t-E.h_22+.1)/.3),()=>{txt(fmtN(countV(0,22,t,E.h_22,.8),0),180,150,96,GLD,{wt:'900',st:INK,sw:12,sh:'rgba(255,179,71,.7)'});});
  TX('AÑOS DESPUÉS',180,208,28,'#fff',t,E.h_22+.15,{w:340,out:E.h_lloro+1.6});
  TX('UN PUEBLO ENTERO',180,264,24,LIM,t,E.h_pueblo-.1,{w:340});TX('LLORÓ SU MUERTE',180,300,24,'#fff',t,E.h_lloro-.1,{w:340})}
// S1 1989: pescador halla al cocodrilo; el disparo del ganadero
function s1(t,u){const c=camAt(u,[[0,180,372,1.0],[7,180,374,1.04],[11,150,382,1.05],[13,180,372,1.0]]),hurt=cl((t-E.s1_mor)/.4),flash=at(t,'s1_disp')?1:0,sick=cl((t-E.s1_mor)/.6);
  const bx=lerp(430,290,eo(cl((t-E.s1_pesc)/2.2)));
  world(c,()=>{sunset(t);palm(24,470,1.3,t);palm(340,468,1.5,t);water(446,t,1);shore(512);
    croc(106,516,1.5,{t,hurt:hurt*.9,fill:mixc(CROC,SICK,sick),mouth:.1,sway:.5});
    if(t>E.s1_pesc-.2){boat(bx,468,.62,t,{flip:true});man(bx-6,452,.5,{rim:'#fff',armL:.4});wake(bx+30,470,t,50)}
    if(t>E.s1_croc-.2){const q=cl((t-E.s1_croc+.2)/.4);withA(q,()=>{ctx.strokeStyle=GLD;ctx.lineWidth=2.4;ctx.setLineDash([6,5]);ctx.beginPath();ctx.arc(150,484,70+Math.sin(t*5)*3,0,TAU);ctx.stroke();ctx.setLineDash([])})}
    if(t>E.s1_gan-.2){const q=cl((t-E.s1_gan+.2)/.5);withA(q,()=>{cow(40,462,.55,t);cow(76,470,.5,t);man(318,464,.8,{rim:AMB,fill:'#1a2a1e',flip:true,armL:1.4})})}
    if(t>E.s1_disp){const e=t-E.s1_disp;withA(cl(1-e/.3),()=>glow(300,438,50,'rgba(255,230,160,.9)'));shock(300,436,t,E.s1_disp,'rgba(255,230,160,.9)',70,3,.5);
      const q=cl((t-E.s1_disp)/.9);ctx.strokeStyle='rgba(255,230,160,'+(.8*(1-q))+')';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(300,438);ctx.lineTo(lerp(300,150,q),lerp(438,486,q));ctx.stroke();
      shock(150,482,t,E.s1_disp+.8,'rgba(224,69,58,.95)',60,4,.6)}});
  const yr=Math.round(countV(1900,1989,t,E.s1_89-.1,1.1));
  withA(cl((t-E.s1_89+.2)/.3),()=>{if(t<E.s1_cr-.1)txt(String(t>E.s1_89-.1?yr:1900),180,150,72,GLD,{wt:'900',st:INK,sw:10,sh:'rgba(255,179,71,.7)'})});
  TX('UN PESCADOR',180,84,26,'#fff',t,E.s1_pesc-.05,{out:E.s1_cr-.1,w:340});
  TG('COSTA RICA',180,100,20,LIM,INK,t,E.s1_cr-.1,{out:E.s1_croc-.1});
  TX('UN COCODRILO',180,84,28,'#fff',t,E.s1_croc-.05,{out:E.s1_gan-.1,w:340});TX('MORIBUNDO',180,128,40,RD,t,E.s1_mor-.05,{out:E.s1_gan-.1,w:340,sh:'rgba(224,69,58,.6)'});
  TX('UN GANADERO',180,84,26,'#fff',t,E.s1_gan-.05,{out:E.s1_disp+.1,w:340});
  slam('LE DISPARÓ',180,210,50,RD,t,E.s1_disp,{stroke:INK,sw:9,sh:'rgba(224,69,58,.7)'});
  TG('PROBABLEMENTE',180,100,18,AMB,INK,t,E.s1_prob-.15,{out:E.s1_vacas-.2});TX('POR ATACAR SUS VACAS',180,84,22,'#fff',t,E.s1_vacas-.6,{w:340})}
// S2 Chito lo rescata: lancha y a casa
function s2(t,u){const c=camAt(u,[[0,180,372,1.0],[4,200,374,1.06],[9,200,372,1.0]]);
  const carry=eio(cl((t-E.s2_amigos)/(E.s2_lancha-E.s2_amigos+.6))),dep=ei(cl((t-E.s2_casa)/1.2));
  const bxx=250+dep*260,cx=lerp(106,bxx-48,carry),cy=lerp(516,470,carry),sc=lerp(1.5,.8,carry);
  const hx=t>E.s2_gil-.2?lerp(430,248,eo(cl((t-E.s2_gil+.2)/2.0))):430,vh=lerp(340,420,cl((t-E.s2_nadie)/1));
  world(c,()=>{sunset(t);withA(.28,()=>{ctx.fillStyle='#020b14';ctx.fillRect(-100,-100,600,900)});palm(24,470,1.3,t);water(446,t,1);shore(512);
    if(t>E.s2_nadie-.1){withA(cl((t-E.s2_nadie+.1)/.4),()=>{[0,1].forEach(i=>man(vh+i*26,500+i*4,.95,{fill:'#2a2e33',rim:'#8fa0aa',armL:.5,armR:-.5,flip:true}))});
      if(t>E.s2_acerc)withA(cl((t-E.s2_acerc)/.4),()=>{txt('?',vh-10,420,34,'#fff',{wt:'900',st:INK,sw:6})})}
    if(t>E.s2_ayuda-.2){const q=eo(cl((t-E.s2_ayuda+.2)/.8));withA(q,()=>{[0,1].forEach(i=>man(lerp(380,150+i*70,q),512,1.0,{fill:'#12281c',rim:AMB,armL:2.4,armR:2.4,ph:t*8*(1-q)}))})}
    croc(cx,cy,sc,{t,fill:mixc(CROC,SICK,.6),band:0,hurt:.7,mouth:.05,sway:.4});
    if(t>E.s2_gil-.2)man(hx,512,1.15,{ph:t*9*(hx>252?1:0),flip:hx>252,armL:carry>0?2.4:.15,armR:carry>0?2.4:-.15});
    if(t>E.s2_chito)glow(248,440,110,'rgba(255,179,71,'+(.28*cl((t-E.s2_chito)/.4))+')');
    if(t>E.s2_lancha-.2){boat(bxx,468,.9,t,{});wake(bxx-70,472,t,110)}
    shock(250,470,t,E.s2_lancha,'rgba(255,255,255,.8)',80,4,.6)});
  TX('CASI NADIE',180,84,30,'#fff',t,E.s2_casi-.05,{out:E.s2_gil-.1,w:340});TX('SE ACERCARÍA',180,128,34,RD,t,E.s2_acerc-.05,{out:E.s2_gil-.1,w:340});
  TG('GILBERTO',180,100,22,AMB,INK,t,E.s2_gil-.1,{out:E.s2_chito-.1});
  withA(1-cl((t-E.s2_ayuda+.25)/.2),()=>{slam('CHITO',180,170,66,AMB,t,E.s2_chito,{stroke:INK,sw:11,sh:'rgba(255,179,71,.8)'});slam('SÍ',180,236,54,LIM,t,E.s2_si,{stroke:INK,sw:9,sh:'rgba(182,243,90,.7)'})});
  TX('CON AYUDA',180,84,26,'#fff',t,E.s2_ayuda-.05,{out:E.s2_lancha-.1,w:340});TX('DE UNOS AMIGOS',180,128,28,AMB,t,E.s2_amigos-.05,{out:E.s2_lancha-.1,w:340});
  TX('A SU LANCHA',180,84,30,'#fff',t,E.s2_lancha-.05,{out:E.s2_casa-.1,w:340});TX('Y A CASA',180,84,36,LIM,t,E.s2_casa-.05,{w:340,sh:'rgba(182,243,90,.6)'})}
// S3 cuidados: 70 kg, no quería comer, pescado y pollo, herida, dormía a su lado, Pocho
function s3(t,u){const c=camAt(u,[[0,180,372,1.0],[6,170,374,1.05],[11,180,372,1.0]]),sleep=cl((t-E.s3_dormia)/1.0),heal=cl((t-E.s3_her)/1.2),flinch=bounce(t,E.s3_comer,10,6);
  world(c,()=>{jnight(t);palm(330,470,1.4,t);shore(500,'#4a3a22');
    withA(.0,()=>{});
    rr(262,476,70,30,5);ctx.fillStyle='#8b5a2b';ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=2.4;ctx.stroke();
    croc(60,500+flinch*1.5,1.55,{t,fill:mixc(CROC,SICK,.55-heal*.2),hurt:.8*(1-heal),band:heal,mouth:t>E.s3_comer?.04:.1,sway:.3});
    if(t>E.s3_comer-.1){const q=cl((t-E.s3_comer+.1)/.7),fx=lerp(300,236,q),fy=lerp(440,470,q)-Math.sin(q*Math.PI)*40;withA(1-cl((t-E.s3_comer-.9)/.4),()=>{fish(fx,fy,1.3,-.4);if(q>.9){ctx.strokeStyle=RD;ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(fx-16,fy-16);ctx.lineTo(fx+16,fy+16);ctx.moveTo(fx+16,fy-16);ctx.lineTo(fx-16,fy+16);ctx.stroke()}})}
    if(t>E.s3_pesc-.1){for(let i=0;i<3;i++){const q=cl((t-E.s3_pesc-i*.12)/.5),x=lerp(120+i*34,290,q),y=lerp(60,470,eo(q))-Math.sin(q*Math.PI)*60;if(q<1)fish(x,y,1.1,q*3)}
      const n=Math.min(3,Math.floor((t-E.s3_pesc)/.12));for(let i=0;i<n;i++)fish(276+i*14,478-i*3,.75,.4-i*.5)}
    if(t>E.s3_pollo-.1){for(let i=0;i<3;i++){const q=cl((t-E.s3_pollo-i*.12)/.5),x=lerp(150+i*30,300,q),y=lerp(60,470,eo(q))-Math.sin(q*Math.PI)*60;if(q<1)drum(x,y,1.1,q*3)}
      const n=Math.min(3,Math.floor((t-E.s3_pollo)/.12));for(let i=0;i<n;i++)drum(300+i*12,474-i*2,.7,.5)}
    if(t>E.s3_her-.2&&t<E.s3_dormia){const q=cl((t-E.s3_her)/.5),sw=Math.sin((t-E.s3_her)*9)*8;withA(q,()=>{tr(120+sw,418,1,-.3,()=>{rr(-12,-8,24,16,4);ctx.fillStyle='#f4f0e6';ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=1.6;ctx.stroke()})});sparks(118,424,t,E.s3_her+.4,14,'#fff',90,.6,0)}
    if(t>E.s3_comer-.6&&sleep<1)withA(1-sleep,()=>man(326,500,1.0,{flip:true,armL:t>E.s3_pesc?2.4:1.6,armR:.3,ph:0}));
    if(sleep>0){withA(sleep*.45,()=>{ctx.fillStyle='#02081a';ctx.fillRect(-100,-100,600,900)});withA(sleep,()=>{man(208,506,1.0,{lie:1,rim:AMB});for(let i=0;i<3;i++){const k=(t*.5+i*.33)%1;withA(1-k,()=>txt('Z',224+i*12,420-k*40,14+i*4,'#fff',{wt:'900',st:INK,sw:3}))}})}
    if(t>E.s3_pocho){shock(120,440,t,E.s3_pocho,'rgba(182,243,90,.9)',130,5,.7);burst(120,440,t,E.s3_pocho,[LIM,'#fff',AMB],22,150,.8,3)}});
  TX('PESABA APENAS',180,84,26,'#fff',t,E.s3_pes-.05,{out:E.s3_comer-.1,w:340});
  withA(cl((t-E.s3_70+.1)/.3),()=>{if(t<E.s3_comer-.1){txt(fmtN(countV(0,70,t,E.s3_70,.5),0)+' KG',180,160,70,RD,{wt:'900',st:INK,sw:10,sh:'rgba(224,69,58,.6)'})}});
  TX('NO QUERÍA COMER',180,84,28,RD,t,E.s3_comer-.15,{out:E.s3_chito-.1,w:340});
  TX('CHITO LE DABA',180,84,24,'#fff',t,E.s3_chito-.05,{out:E.s3_her-.1,w:340});TX('PESCADO Y POLLO',180,126,32,AMB,t,E.s3_pesc-.05,{out:E.s3_her-.1,w:340});TG('CADA SEMANA',180,170,15,LIM,INK,t,E.s3_sem-.15,{out:E.s3_her-.1});
  TX('LE LIMPIABA',180,84,26,'#fff',t,E.s3_her-.2,{out:E.s3_dormia-.1,w:340});TX('LA HERIDA',180,126,36,AMB,t,E.s3_her-.05,{out:E.s3_dormia-.1,w:340});
  TX('HASTA DORMÍA',180,84,26,'#fff',t,E.s3_dormia-.05,{out:E.s3_pocho-.95,w:340});TX('A SU LADO',180,126,34,LIM,t,E.s3_lado-.1,{out:E.s3_pocho-.95,w:340});
  TX('LO LLAMÓ',180,84,26,'#fff',t,E.s3_pocho-.5,{w:340});slam('POCHO',180,180,76,LIM,t,E.s3_pocho,{stroke:INK,sw:12,sh:'rgba(182,243,90,.8)'})}
// S4 se curó, nunca se fue, nadar y la cabeza en la boca (el final deja la boca en el punto de la zambullida)
function s4(t,u){const heal=eo(cl((t-E.s4_pocho)/(E.s4_curo-E.s4_pocho+1.0))),open=eio(cl((t-E.s4_meter+.2)/1.0)),lean=eio(cl((t-E.s4_meter+.3)/1.0)),hx=lerp(420,244,eo(cl((t-E.s4_nadar)/2.0)));
  const yr=Math.round(countV(1989,2000,t,E.s4_anos-.1,1.4));
  world({x:180,y:320,z:1,r:0},()=>{bg(SKY0,SKY1);glow(180,320,200,'rgba(255,190,90,.5)');hills(318,'#0f3b2a',12,.014,1);palm(20,330,1.2,t);palm(334,330,1.4,t);
    croc(14.4,350+Math.sin(t*1.6)*1.2,1.8,{t,fill:mixc(SICK,CROC,heal),band:1-heal,hurt:0,mouth:open*.95,sway:.8});
    sparks(120,320,t,E.s4_pocho+.3,18,LIM,110,.9,60);
    if(t>E.s4_nunca-.1){const q=cl((t-E.s4_nunca+.1)/.5);withA(q*.9*(1-cl((t-E.s4_anos+.2)/.4)),()=>{ctx.strokeStyle=LIM;ctx.lineWidth=3;ctx.setLineDash([7,6]);ctx.beginPath();ctx.moveTo(200,300);ctx.lineTo(330,300);ctx.stroke();ctx.setLineDash([]);poly([[326,290],[346,300],[326,310]],LIM,INK,2)})}
    if(t>E.s4_nadar-.4){const walk=hx>248,rot=-.6*lean,fy=440+Math.sin(t*4)*(walk?2:0.6);tr(hx,fy,1,rot,()=>man(0,0,1.8,{fill:'#2f6a49',flip:true,ph:t*7*(walk?1:0),armL:lean>.3?2.6:.3,armR:lean>.3?2.2:-.3}))}
    withA(.5,()=>{const g=ctx.createLinearGradient(0,336,0,640);g.addColorStop(0,RIV2);g.addColorStop(1,RIV);ctx.fillStyle=g;ctx.fillRect(-100,336,560,400)});
    ctx.save();ctx.strokeStyle='rgba(255,255,255,.35)';ctx.lineWidth=1.6;for(let i=0;i<10;i++){const yy=344+i*12,x0=((i*83-t*(10+i))%460+460)%460-60;ctx.beginPath();ctx.moveTo(x0,yy);ctx.quadraticCurveTo(x0+16,yy-3,x0+32,yy);ctx.stroke()}ctx.restore();
    if(t>E.s4_boca){shock(176,357,t,E.s4_boca,'rgba(255,255,255,.9)',90,4,.6);sparks(176,357,t,E.s4_boca,14,'#fff',100,.6,30)}});
  TX('POCHO SE CURÓ',180,84,28,LIM,t,E.s4_pocho-.05,{out:E.s4_nunca-.15,w:340,sh:'rgba(182,243,90,.5)'});
  withA(1-cl((t-E.s4_anos+.25)/.2),()=>slam('NUNCA SE FUE',180,150,40,'#fff',t,E.s4_fue,{stroke:INK,sw:9,sh:'rgba(255,179,71,.7)'}));TX('PERO...',180,84,24,'#fff',t,E.s4_nunca-.05,{out:E.s4_anos-.15,w:340});
  withA(cl((t-E.s4_anos+.2)/.3),()=>{if(t<E.s4_nadar+1.2)txt(String(t>E.s4_anos-.1?yr:1989),180,138,54,GLD,{wt:'900',st:INK,sw:9,a:'center'})});
  TX('CON LOS AÑOS',180,84,24,'#fff',t,E.s4_anos-.05,{out:E.s4_nadar+1.2,w:340});TX('CHITO NADABA CON ÉL',180,190,24,AMB,t,E.s4_nadar-.05,{out:E.s4_imp-.1,w:340});
  withA(1-cl((t-E.s4_meter+.45)/.2),()=>slam('IMPOSIBLE',180,232,50,RD,t,E.s4_imp,{stroke:INK,sw:9,sh:'rgba(224,69,58,.7)'}));
  TX('METIÓ LA CABEZA',180,84,26,'#fff',t,E.s4_meter-.1,{out:E.s4_boca+.3,w:340});TX('EN SU BOCA',180,128,34,LIM,t,E.s4_boca-.35,{w:340})}
// S5 fama: 2000, televisión, domingos, media tonelada, 20 años, nunca le hizo daño
function s5(t,u){const c=camAt(u,[[0,180,320,1.0],[8,180,318,1.03],[8.4,180,320,1.0],[14,180,318,1.04]]),B=t>E.s5_pocho-.25,gq=cl((t-E.s5_gente)/(E.s5_partes-E.s5_gente+1.2)),tvq=eb(cl((t-E.s5_tv+.1)/.5)),tvo=cl((t-(E.s5_cada-.35))/.3);
  const cs=B?lerp(1.3,1.85,spring((t-E.s5_pocho+.25)/.6,10,6)):1.3,cx=B?14:50;
  world(c,()=>{sunset(t);glow(180,360,220,'rgba(255,190,90,.25)');hills(350,'#0a2a1c',10,.02,4);
    crowd(-10,370,350,26,t,gq,3,'#071a11',AMB);
    palm(20,350,1.0,t);palm(340,350,1.1,t);
    croc(cx,440,cs,{t,fill:CROC,band:0,hurt:0,mouth:.1+.08*Math.sin(t*2),sway:1});
    if(!B)man(250,446,1.3,{fill:'#2f6a49',ph:t*3,armL:2.5,armR:.2,flip:true});
    withA(.5,()=>{const g=ctx.createLinearGradient(0,380,0,640);g.addColorStop(0,RIV2);g.addColorStop(1,RIV);ctx.fillStyle=g;ctx.fillRect(-100,380,560,400)});
    if(B&&t>E.s5_dano-.1){const q=cl((t-E.s5_dano+.1)/.4);heart(160,320,3.2*eb(q),PINK,t*5)}
    if(t>E.s5_tv-.1&&tvo<1){withA(1-tvo,()=>tvset(180,330-tvo*40,1.5*tvq*(1-tvo*.3),()=>{croc(-52,26,.62,{t,fill:CROC,mouth:.2});if(t>E.s5_grabo&&Math.floor(t*2)%2===0){ctx.fillStyle=RD;ctx.beginPath();ctx.arc(-46,-30,5,0,TAU);ctx.fill();ctx.font='700 9px sans-serif';ctx.fillStyle='#fff';ctx.fillText('REC',-37,-27)}}))}
    if(t>E.s5_fam)burst(180,300,t,E.s5_fam,[GLD,'#fff',AMB],26,170,.9,3)});
  TX('EN EL AÑO',180,84,26,'#fff',t,E.s5_ano-.05,{out:E.s5_tv-.1,w:340});
  withA(cl((t-E.s5_2000+.1)/.3),()=>{if(t<E.s5_tv-.1)txt(fmtN(countV(1990,2000,t,E.s5_2000-.1,.5),0).replace('.',''),180,160,84,GLD,{wt:'900',st:INK,sw:11,sh:'rgba(255,179,71,.7)'})});
  TX('LA TELEVISIÓN',180,84,28,'#fff',t,E.s5_tv-.05,{out:E.s5_cada-.2,w:340});withA(1-cl((t-E.s5_cada+.4)/.2),()=>slam('FAMOSOS',180,222,54,AMB,t,E.s5_fam,{stroke:INK,sw:10,sh:'rgba(255,179,71,.8)'}));
  TX('CADA',180,84,24,'#fff',t,E.s5_cada-.05,{out:E.s5_gente-.1,w:340});TX('DOMINGO',180,128,42,AMB,t,E.s5_dom-.05,{out:E.s5_gente-.1,w:340,sh:'rgba(255,179,71,.6)'});
  TX('GENTE DE',180,84,22,'#fff',t,E.s5_gente-.05,{out:E.s5_pocho-.3,w:340});TX('TODAS PARTES',180,126,32,LIM,t,E.s5_partes-.1,{out:E.s5_pocho-.3,w:340});
  TX('CASI MEDIA TONELADA',180,84,24,'#fff',t,E.s5_media-.1,{out:E.s5_20-.1,w:340});
  withA(cl((t-E.s5_ton+.1)/.3),()=>{if(t<E.s5_20-.1)txt(fmtN(countV(0,450,t,E.s5_media,1.0),0)+' KG',180,160,66,LIM,{wt:'900',st:INK,sw:10,sh:'rgba(182,243,90,.6)'})});
  TX('MÁS DE 20 AÑOS',180,84,28,'#fff',t,E.s5_20-.1,{out:E.s5_nunca-.15,w:340});TX('NUNCA LE HIZO DAÑO',180,84,24,'#fff',t,E.s5_nunca-.1,{w:340});TX('A CHITO',180,128,30,PINK,t,E.s5_dano-.3,{w:340})}
// S6 12 oct 2011: murió, funeral del pueblo, la frase de Chito
function s6(t,u){const dark=cl((t-E.s6_murio)/1.0),pq=cl((t-E.s6_todo)/2.0),mv=eio(cl((t-E.s6_todo)/6.5)),cxx=lerp(150,226,mv),cd=cl((t-E.s6_murio+.3)/.5);
  world({x:180,y:372,z:1,r:0},()=>{jnight(t);shore(500,'#2c2417');
    crowd(-10,370,470,22,t,pq,7,'#07140d','#d8ffb0');for(let i=0;i<8;i++)if(i/8<pq)candle(10+i*46+(i%2)*10,490,1.4,t);
    cart(cxx,508,1.9,t);croc(cxx-66,470,1.1,{t,fill:mixc(CROC,'#7c9a64',dark*.5),mouth:0,sway:0});
    withA(dark*.5,()=>{ctx.fillStyle='#02081a';ctx.fillRect(-100,-100,600,900)});
    glow(cxx-6,440,120,'rgba(190,255,200,'+(.3*dark)+')');
    if(t>E.s6_chito-.2){const q=cl((t-E.s6_chito+.2)/.5);withA(q,()=>{man(cxx+78,506,1.25,{rim:AMB,flip:true,armL:.4,armR:-.4,ph:0});candle(cxx+60,490,1.2,t)})}});
  const cq=eb(cl((t-E.s6_12+.1)/.5)),co=cl((t-E.s6_murio+.1)/.35);
  if(cq>0&&co<1)withA(1-co,()=>{tr(180,158,1,0,()=>{ctx.save();ctx.scale(cq,cq);rr(-70,-62,140,124,12);ctx.fillStyle='#f4ecd8';ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=3;ctx.stroke();ctx.fillStyle=RD;ctx.fillRect(-70,-62,140,30);rr(-70,-62,140,30,12);ctx.fill();ctx.fillRect(-70,-48,140,16);
    if(t>E.s6_oct-.05)txt('OCTUBRE',0,-47,17,'#fff',{wt:'900',a:'center'});if(t>E.s6_12)txt('12',0,12,62,INK,{wt:'900',a:'center'});if(t>E.s6_2011-.05)txt('2011',0,48,26,'#444',{wt:'900',a:'center'});ctx.restore()})});
  TX('POCHO MURIÓ',180,84,34,'#fff',t,E.s6_murio-.1,{out:E.s6_todo-.1,w:340});TG('DE FORMA NATURAL',180,132,17,LIM,INK,t,E.s6_nat-.15,{out:E.s6_todo-.1});
  TX('TODO EL PUEBLO',180,84,28,LIM,t,E.s6_todo-.05,{out:E.s6_chito-.1,w:340});TG('LE HIZO UN FUNERAL',180,130,16,AMB,INK,t,E.s6_fun-.15,{out:E.s6_chito-.1});
  TX('CHITO DIJO:',180,84,24,'#fff',t,E.s6_dijo-.4,{w:340});TX('«POCHO ES POCHO,',180,130,26,AMB,t,E.s6_pocho-.1,{w:340});slam('EL ÚNICO»',180,196,52,LIM,t,E.s6_unico,{stroke:INK,sw:10,sh:'rgba(182,243,90,.7)'})}
// S7 pregunta: amistad vs costumbre
function s7(t,u){const c=camAt(u,[[0,180,320,1.0],[8,180,316,1.04]]),a=t>E.c_amistad,b=t>E.c_acost,pa=a?.5+.5*Math.sin(t*5):0,pb=b?.5+.5*Math.sin(t*5+3):0;
  world(c,()=>{bg('#03120c','#0e4a39');stars(t,40,9,.6);
    ctx.fillStyle='rgba(182,243,90,'+(.1+.12*pa)+')';ctx.fillRect(-100,-100,280,900);ctx.fillStyle='rgba(255,179,71,'+(.1+.12*pb)+')';ctx.fillRect(180,-100,280,900);
    line(180,-50,180,700,'rgba(255,255,255,.35)',2);shore(500,'#2c2417');
    if(a){heart(90,340,3.4*eb(cl((t-E.c_amistad)/.4)),PINK,t*5);glow(90,340,90,'rgba(255,122,138,'+(.3*pa)+')')}
    if(b){fish(250,340,3.0*eb(cl((t-E.c_acost)/.4)),-.3);drum(300,390,1.8*eb(cl((t-E.c_comida)/.4)),.3);glow(270,350,90,'rgba(255,179,71,'+(.3*pb)+')')}});
  TX('¿AMISTAD DE VERDAD?',180,64,22,'#fff',t,E.c_fue-.05,{w:340});
  TG('AMISTAD',90,176,24,LIM,INK,t,E.c_amistad-.15);TG('DE VERDAD',90,214,13,LIM,INK,t,E.c_verdad-.2);
  TG('COSTUMBRE',270,176,24,AMB,INK,t,E.c_acost-.15);TG('A SU COMIDA',270,214,13,AMB,INK,t,E.c_comida-.2);
  TX('¿O SOLO UN COCODRILO?',180,112,18,'#fff',t,E.c_solo-.05,{w:340,out:E.c_com-.2});
  withA(cl((t-E.c_acost)/.3),()=>slam('VS',180,262,40,'#fff',t,E.c_acost,{stroke:RD,sw:8,sh:'rgba(255,60,60,.7)'}));
  TG('COMENTA TU RESPUESTA',180,430,17,GLD,INK,t,E.c_com-.15,{w:340});withA(cl((t-E.c_com)/.3),()=>{const ay=458+Math.sin(t*6)*6;poly([[160,ay],[200,ay],[180,ay+26]],GLD,INK,3)});
  TG('SÍGUEME PARA MÁS',180,520,14,AMB,INK,t,E.c_sig-.15)}
boot([s0,s1,s2,s3,s4,s5,s6,s7],TRS,{cap:{acc:'#b6f35a'}});
