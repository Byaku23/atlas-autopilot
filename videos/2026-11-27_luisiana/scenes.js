// ===== Luisiana: ¿por qué Napoleón la vendió? — escenas =====
const terr=(c,t,t0,a=.42,lw=2.6)=>{const k=eo(nb(t0,t0+.8,t));if(k>0)gpoly(c,LUI,AMB,a*k,{lw,b:'#fff',ba:k})};
const faint=(c,a=.3)=>mapaEstados(c,{alpha:0,bordeA:a,lw:.8});

// S0 GANCHO: territorio más grande que Francia+España+Alemania, 15 millones
function s0(t,u){
  const c=mapaCam(t,[[0,-98,38,5.6],[8.33,-98,37,7.2]]);
  base(c);faint(c,.28);
  const pul=t>E.h_jun&&t<E.h_jun+.9?1+.04*Math.sin((t-E.h_jun)*18):1;
  terr(c,t,-.4,.45*pul,3);
  if(t>E.h_terr+.2){const [x,y]=P_(c,[-101,41.5]);TG('LUISIANA',cx_(x,60,300),y,15,AMB,INK,t,E.h_terr+.2)}
  const ch=[['FRANCIA',70,E.h_fr,FRA,'#fff'],['ESPAÑA',180,E.h_es,USA,'#fff'],['ALEMANIA',290,E.h_al,'#f3d34a',INK]];
  ch.forEach(q=>TG(q[0],q[1],152,14,q[3],q[4],t,q[2]-.05,{out:E.h_porq-.3}));
  if(t>E.h_jun&&t<E.h_porq-.3){const a=eb(nb(E.h_jun,E.h_jun+.4,t));ctx.save();ctx.globalAlpha=a;line(30,172,330,172,rgba(AMB,.95),3);ctx.restore();ctx.save();ctx.globalAlpha=a;txt('< LUISIANA',180,192,16,AMB,{wt:'900',st:INK,sw:4,al:'center'});ctx.restore()}
  TX('NAPOLEÓN VENDIÓ',180,96,32,'#fff',t,-.6,{w:340,out:E.h_terr+.2});
  TX('MÁS GRANDE QUE',180,96,32,'#fff',t,E.h_terr+.3,{w:340,out:E.h_15-.3});
  if(t>E.h_15){const v=countV(0,15000000,t,E.h_15,.9),a=eb(nb(E.h_15,E.h_15+.3,t));ctx.save();ctx.globalAlpha=a;txt('$'+fmtN(v),180,452,42,'#fff',{wt:'900',st:INK,sw:7,sh:'rgba(255,159,28,.6)',al:'center'});ctx.restore()}
  if(t>E.h_dol)shock(180,452,t,E.h_dol,'rgba(255,159,28,.9)',90,5,.7);
  TX('¿POR QUÉ REGALÓ',180,96,30,'#fff',t,E.h_porq-.1,{w:340});
  TX('UN IMPERIO?',180,146,44,AMB,t,E.h_imp-.2,{w:340});
  if(t>E.h_imp)shock(180,320,t,E.h_imp,'rgba(255,159,28,.9)',120,5,.9);
}

// S1 el plan de 1802: Haití y Luisiana como granero
function s1(t,u){
  const c=mapaCam(t,[[8.33,-35,38,3.4],[16.1,-73,22,9],[19.0,-96,35,6.6],[23.25,-96,35,7.0]]);
  base(c);
  mapaPaises(c,['Haiti','Dominican Rep.','Cuba','Jamaica','Puerto Rico'],{fill:'rgba(255,255,255,.0)',borde:'rgba(255,255,255,.7)',lw:.9});
  if(t>E.a_hai-.3)mapaPaises(c,['Haiti'],{fill:rgba(FRA,.55*nb(E.a_hai-.3,E.a_hai+.4,t)),borde:'#fff',lw:1.6});
  if(t>E.a_nap){const [x,y]=P_(c,PARIS);if(x>20&&x<340){pin(c,PARIS[0],PARIS[1],FRA,t,E.a_nap,6);TG('FRANCIA',cx_(x,50,310),y-20,13,FRA,'#fff',t,E.a_nap)}}
  if(t>E.a_am){const [x,y]=pin(c,-72.4,19.9,AMB,t,E.a_am,5)}
  const kk=eio(nb(E.a_rec,E.a_azu+1.2,t)),h=ruta(c,G_FH,kk,FRA,3.6,{dash:kk<1?[8,5]:null,t});
  if(h)barco(h[0],h[1]-4,.9,FRA,t,-1);
  if(t>E.a_sto){const [x,y]=P_(c,[-72.5,18.9]);TG('SANTO DOMINGO (HAITÍ)',cx_(x,80,280),y+34,12,FRA,'#fff',t,E.a_sto);for(let i=0;i<5;i++){const a=E.a_azu+.2*i;if(t>a){const k=eb(nb(a,a+.3,t));ctx.save();ctx.translate(x-30+i*15,y-24-Math.sin(t*2+i)*2);ctx.scale(k,k);rr(-5,-5,10,10,2);ctx.fillStyle='#fff';ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=1.6;ctx.stroke();ctx.restore()}}}
  terr(c,t,E.a_lui-.1,.4);
  if(t>E.a_lui){const [x,y]=P_(c,[-101,41.5]);TG('LUISIANA',cx_(x,60,300),y,15,AMB,INK,t,E.a_lui);}
  const rr_=ruta(c,MISI,nb(E.a_mis-.2,E.a_mis+1.1,t),RIO,3.4);
  if(t>E.a_gran){const [x,y]=P_(c,[-99,36.5]);for(let i=0;i<7;i++){const a=E.a_gran+.12*i,k=eb(nb(a,a+.3,t));ctx.save();ctx.translate(x-40+i*13,y+Math.sin(t*3+i)*1.5);ctx.scale(k,k);ctx.beginPath();ctx.moveTo(0,10);ctx.lineTo(0,-10);ctx.strokeStyle=INK;ctx.lineWidth=5;ctx.stroke();ctx.strokeStyle='#ffd36b';ctx.lineWidth=2.6;ctx.stroke();for(let j=0;j<3;j++){circ(-3,-4-j*4,2.4,'#ffd36b',INK,1);circ(3,-6-j*4,2.4,'#ffd36b',INK,1)}ctx.restore()}}
  TG('1802',180,86,26,AMB,INK,t,E.a_mil-.1,{out:E.a_nap-.3});
  TX('NAPOLEÓN SUEÑA',180,96,32,'#fff',t,E.a_nap-.1,{w:340,out:E.a_plan-.35});
  TX('CON REVIVIR SU IMPERIO',180,146,24,FRA,t,E.a_rev-.2,{w:340,out:E.a_plan-.35});
  TX('EL PLAN:',180,96,30,'#fff',t,E.a_plan-.1,{w:340,out:E.a_usar-.4});
  TX('RECUPERAR LA COLONIA',180,140,22,'#fff',t,E.a_rec-.1,{w:340,out:E.a_usar-.4});
  TX('DEL AZÚCAR',180,178,32,FRA,t,E.a_azu-.1,{w:340,out:E.a_usar-.4});
  TX('USAR LUISIANA',180,96,32,'#fff',t,E.a_usar-.1,{w:340});
  TX('COMO SU GRANERO',180,146,32,AMB,t,E.a_gran-.3,{w:340});
  if(t>E.a_gran)shock(...P_(c,[-99,38]),t,E.a_gran,'rgba(255,159,28,.9)',90,5,.8);
}

// S2 el ejército, los rebeldes y la fiebre amarilla
function s2(t,u){
  const c=mapaCam(t,[[23.25,-62,22,8],[25.2,-72.5,19.4,19],[37.33,-72.8,19.3,22]]);
  base(c);
  mapaPaises(c,['Haiti'],{fill:rgba(FRA,.35),borde:'#fff',lw:1.6});mapaPaises(c,['Dominican Rep.','Cuba','Jamaica','Puerto Rico'],{borde:'rgba(255,255,255,.6)',lw:.8});
  for(let i=0;i<6;i++){const a=E.b_ejer+.18*i,k=eio(nb(a,a+2.4,t));if(t>a){const lo=lerp(-64+i*.3,-73.2,k),la=lerp(22.4+i*.35,20.2-(i%3)*.15,k);const [x,y]=P_(c,[lo,la]);barco(x,y,.55,FRA,t+i,-1)}}
  if(t>E.b_reb){const [x,y]=pin(c,-72.3,18.6,USA,t,E.b_reb,6);TG('REBELDES',cx_(x,50,310),y+24,13,USA,'#fff',t,E.b_reb)}
  if(t>E.b_fie)for(let i=0;i<9;i++){const k=eb(nb(E.b_fie+.06*i,E.b_fie+.4+.06*i,t));const [x,y]=P_(c,[-72.7,19.0]);mosq(x+Math.sin(t*2.1+i*1.7)*52+(i-4)*8,y+Math.cos(t*1.7+i*2.3)*38-10,1.5*k,t,i)}
  // 20 soldados que van cayendo: 100 al día
  const n=20;for(let i=0;i<n;i++){const x=34+i*15.8,a=E.b_ejer+.9+i*.04,k=eb(nb(a,a+.3,t));const fall=t>E.b_cien?nb(E.b_cien+.12*(n-1-i)*.42,E.b_cien+.12*(n-1-i)*.42+.5,t):0;
    if(t>a){ctx.save();ctx.globalAlpha=1-fall*.85;persona(x,448+fall*30,.22*k,fall>.05?'#7d8394':FRA,t,i);ctx.restore()}}
  if(t>E.b_cien){TG('-100 POR DÍA',180,408,16,USA,'#fff',t,E.b_cien-.1)}
  if(t>E.b_gen){const a=eb(nb(E.b_gen,E.b_gen+.4,t))*(1-nb(E.b_muere-.3,E.b_muere,t));tr(60,250,a,0,()=>napo(0,0,.8,t,1))}
  if(t>E.b_muere){const k=eb(nb(E.b_muere,E.b_muere+.45,t));lapida(60,266,1.0*k);shock(60,260,t,E.b_muere,'rgba(232,240,74,.9)',70,4,.7)}
  TX('UN GRAN EJÉRCITO',180,96,28,'#fff',t,E.b_ejer-.1,{w:340,out:E.b_pero-.3});
  TX('A LA ISLA',180,146,40,FRA,t,E.b_isla-.2,{w:340,out:E.b_pero-.3});
  TX('DOS ENEMIGOS',180,96,34,'#fff',t,E.b_pero-.1,{w:340,out:E.b_mue-.3});
  TX('LOS REBELDES',180,142,24,USA,t,E.b_reb-.2,{w:340,out:E.b_mue-.3});
  TX('LA FIEBRE AMARILLA',180,182,26,YEL,t,E.b_fie-.1,{w:340,out:E.b_mue-.3});
  TX('MÁS DE 100 HOMBRES',180,96,26,'#fff',t,E.b_mue-.1,{w:340,out:E.b_gen-.3});
  TX('AL DÍA',180,146,44,YEL,t,E.b_dia-.2,{w:340,out:E.b_gen-.3});
  TG('GENERAL LECLERC',200,92,18,FRA,'#fff',t,E.b_gen-.1,{out:E.b_muere-.3});
  TX('CUÑADO DE NAPOLEÓN',200,142,19,'#fff',t,E.b_cun-.1,{w:300,out:E.b_muere-.3});
  TX('MUERE DE',200,96,26,'#fff',t,E.b_muere-.1,{w:300});
  TX('FIEBRE AMARILLA',200,146,34,YEL,t,E.b_fie2-.1,{w:300});
}

// S3 EE. UU. entra en pánico: Nueva Orleans y el Misisipi; Monroe viaja a París
function s3(t,u){
  const c=mapaCam(t,[[37.33,-90,31.5,10],[46.0,-90,32,10.5],[47.4,-45,38,3.0]]);
  base(c);
  mapaEstados(c,{alpha:.3,col:COLUSA,bordeA:.45,lw:.8,f:e=>EAST.includes(e.p)?1:0});
  terr(c,t,37.3,.28,2);
  const rr_=ruta(c,MISI,nb(E.c_ctrl-.2,E.c_rio+.4,t),RIO,3.6);
  if(t>E.c_mien){const [x,y]=P_(c,[-86,26.3]);const k=eio(nb(E.c_mien,E.c_pan+.6,t));const [x2,y2]=P_(c,NOLA);barco(lerp(x,x2+14,k),lerp(y,y2+30,k),.7,FRA,t,-1)}
  if(t>E.c_no){const [x,y]=pin(c,NOLA[0],NOLA[1],AMB,t,E.c_no,6);TG('NUEVA ORLEANS',cx_(x-52,60,300),y-14,12,AMB,INK,t,E.c_no)}
  if(t>E.c_salida){const [x,y]=P_(c,[-89.4,29.0]);candado(x+22,y+12,1,eb(nb(E.c_salida,E.c_salida+.4,t)))}
  if(t>E.c_pan){const a=.5+.5*Math.sin((t-E.c_pan)*14);ctx.save();ctx.globalAlpha=(.14+.08*a)*(1-nb(E.c_jef-.2,E.c_jef,t));ctx.fillStyle=USA;ctx.fillRect(0,0,360,640);ctx.restore()}
  if(t>E.c_jef){const a=eb(nb(E.c_jef,E.c_jef+.4,t))*(1-nb(E.c_manda-.3,E.c_manda,t));tr(300,250,a,0,()=>jeff(0,0,.85,t,2));if(a>.5)TG('JEFFERSON',300,306,12,USA,'#fff',t,E.c_jef)}
  const h=ruta(c,G_MP,nb(E.c_manda,E.c_par+.2,t),USA,3.4,{dash:[8,5],t});
  if(h)barco(h[0],h[1]-4,.8,USA,t,1);
  if(t>E.c_par){const [x,y]=pin(c,PARIS[0],PARIS[1],FRA,t,E.c_par,5);TG('PARÍS',cx_(x,40,320),y-22,13,FRA,'#fff',t,E.c_par)}
  if(t>E.c_mon){const a=eb(nb(E.c_mon,E.c_mon+.3,t));if(h){tr(cx_(h[0],30,330),h[1]-48,a,0,()=>TG('MONROE',0,0,12,USA,'#fff',t,E.c_mon))}}
  if(t>E.c_diez){const k=eb(nb(E.c_diez,E.c_diez+.35,t));ctx.save();ctx.globalAlpha=k;txt('HASTA $10.000.000',180,450,24,'#fff',{wt:'900',st:INK,sw:6,al:'center'});ctx.restore()}
  TG('MIENTRAS TANTO',180,86,16,'#fff',INK,t,E.c_mien-.1,{out:E.c_eeuu-.3});
  TX('ESTADOS UNIDOS',180,96,34,'#fff',t,E.c_eeuu-.1,{w:340,out:E.c_jef-.3});
  TX('ENTRA EN PÁNICO',180,146,36,YEL,t,E.c_pan-.2,{w:340,out:E.c_jef-.3});
  TX('JEFFERSON SABE:',180,96,28,'#fff',t,E.c_jef-.1,{w:340,out:E.c_ctrl-.3});
  TX('QUIEN CONTROLA',180,96,28,'#fff',t,E.c_ctrl-.3,{w:340,out:E.c_manda-.3});
  TX('NUEVA ORLEANS',180,142,32,AMB,t,E.c_no-.2,{w:340,out:E.c_salida-.8});
  TX('CONTROLA LA SALIDA',180,142,26,'#fff',t,E.c_salida-.78,{w:340,out:E.c_manda-.3});
  TX('DEL RÍO',180,184,38,RIO,t,E.c_rio-.15,{w:340,out:E.c_manda-.3});
  TX('MANDA A MONROE',180,96,30,'#fff',t,E.c_manda-.1,{w:340,out:E.c_diez-.35});
  TX('A PARÍS',180,146,40,FRA,t,E.c_par-.15,{w:340,out:E.c_diez-.35});
  TX('HASTA 10 MILLONES',180,96,26,'#fff',t,E.c_diez-.2,{w:340});
  TX('SOLO PARA COMPRAR',180,138,26,'#fff',t,E.c_solo-.1,{w:340});
  TX('NUEVA ORLEANS',180,182,36,AMB,t,E.c_no2-.2,{w:340});
}

// S4 Napoleón ofrece TODA Luisiana: 15 millones, 30 de abril de 1803, 4 centavos el acre
function s4(t,u){
  const c=mapaCam(t,[[52.2,-10,46,5],[60.0,-10,46,5],[61.0,-100,38.5,6.6,eo]]);
  base(c);
  if(t<E.d_toda+.8){if(t>E.d_ing-.2){const [x,y]=P_(c,PARIS),[x2,y2]=P_(c,LONDRES);pin(c,PARIS[0],PARIS[1],FRA,t,E.d_y,6);pin(c,LONDRES[0],LONDRES[1],USA,t,E.d_ing-.1,6);TG('INGLATERRA',cx_(x2-6,60,300),y2-26,12,USA,'#fff',t,E.d_ing-.1);TG('FRANCIA',cx_(x,60,300),y+24,12,FRA,'#fff',t,E.d_y+.3)}}
  const out=1-nb(E.d_toda+.3,E.d_toda+.8,t);
  if(out>0){ctx.save();ctx.globalAlpha=out;tr(78,372,eb(nb(E.d_y,E.d_y+.4,t)),0,()=>napo(0,0,1.3,t,0));
    if(t>E.d_dez){for(let i=0;i<8;i++){const dead=i>=2;const a=eb(nb(E.d_dez+.05*i,E.d_dez+.35+.05*i,t));ctx.save();ctx.globalAlpha*=dead?(1-nb(E.d_dez+.5+.1*i,E.d_dez+1+.1*i,t)*.8):1;persona(40+i*40,470,.25*a,dead?'#7d8394':FRA,t,i);ctx.restore()}}
    ctx.restore()}
  if(t>E.d_amen){const a=.5+.5*Math.sin((t-E.d_amen)*16);ctx.save();ctx.globalAlpha=(.12+.08*a)*(1-nb(E.d_ines-.3,E.d_ines,t));ctx.fillStyle=USA;ctx.fillRect(0,0,360,640);ctx.restore()}
  faint(c,.3*nb(E.d_toda,E.d_toda+.8,t));
  terr(c,t,E.d_toda,.45,3);
  if(t>E.d_lui){const [x,y]=P_(c,[-101,41.5]);TG('LUISIANA',cx_(x,60,300),y,16,AMB,INK,t,E.d_lui);shock(x,y,t,E.d_lui,'rgba(255,159,28,.9)',110,5,.9)}
  if(t>E.d_15){const v=countV(0,15000000,t,E.d_15,.9),a=eb(nb(E.d_15,E.d_15+.3,t));ctx.save();ctx.globalAlpha=a;txt('$'+fmtN(v),180,452,42,'#fff',{wt:'900',st:INK,sw:7,sh:'rgba(255,159,28,.6)',al:'center'});ctx.restore()}
  if(t>E.d_30)calendario(292,232,.58,eb(nb(E.d_30,E.d_30+.4,t)),'30','ABRIL','1803');
  if(t>E.d_4){for(let i=0;i<4;i++){const a=E.d_4+.12*i;if(t>a){const k=eb(nb(a,a+.3,t));moneda(40+i*22,232-Math.abs(Math.sin(t*5+i))*6,1.1*k,t,i)}}
    TG('POR ACRE',72,268,13,AMB,INK,t,E.d_acre-.3)}
  TX('SU EJÉRCITO DIEZMADO',180,96,26,'#fff',t,E.d_y+.9,{w:340,out:E.d_ing-.5});
  TX('GUERRA CON',180,96,28,'#fff',t,E.d_ing-.5,{w:340,out:E.d_ines-.35});
  TX('INGLATERRA',180,146,40,USA,t,E.d_ing-.2,{w:340,out:E.d_ines-.35});
  TX('ALGO INESPERADO',180,120,34,YEL,t,E.d_ines-.2,{w:340,out:E.d_ofr-.2});
  TX('QUINCE MILLONES',180,96,28,'#fff',t,E.d_15-.1,{w:340,out:E.d_30-.3});
  TX('DE DÓLARES',180,146,38,AMB,t,E.d_dol-.1,{w:340,out:E.d_30-.3});
  TX('30 DE ABRIL',180,96,30,'#fff',t,E.d_30-.1,{w:340,out:E.d_unos-.3});
  TX('DE 1803',180,146,42,FRA,t,E.d_1803-.2,{w:340,out:E.d_unos-.3});
  TX('LES OFRECE',180,96,30,'#fff',t,E.d_ofr-.1,{w:340,out:E.d_15-.3});
  TX('TODA LUISIANA',180,146,38,AMB,t,E.d_toda-.1,{w:340,out:E.d_15-.3});
  TX('UNOS 4 CENTAVOS',180,96,28,'#fff',t,E.d_unos-.1,{w:340});
  TX('EL ACRE',180,146,42,AMB,t,E.d_acre-.2,{w:340});
  TG('30 DE ABRIL DE 1803',180,500,14,FRA,'#fff',t,E.d_30-.1);
}

// S5 duplicó su tamaño; Jefferson dudó por la Constitución y lo hizo igual
function s5(t,u){
  const c=mapaCam(t,[[68.45,-98,38,6.2],[77.97,-98,38,6.8]]);
  base(c);
  mapaEstados(c,{alpha:.4*nb(E.e_eeuu,E.e_eeuu+.5,t),col:COLUSA,bordeA:.5,lw:.8,f:e=>EAST.includes(e.p)?1:0});
  terr(c,t,-1,.45,3);
  if(t>E.e_dup){const k=eb(nb(E.e_dup,E.e_dup+.4,t))*(1-nb(E.e_jef-.4,E.e_jef-.1,t));if(k>0){ctx.save();ctx.globalAlpha=k;txt('×2',180,215,64,'#fff',{wt:'900',st:INK,sw:9,sh:'rgba(255,159,28,.7)',al:'center'});ctx.restore()}shock(180,215,t,E.e_dup,'rgba(255,159,28,.9)',100,5,.8)}
  if(t>E.e_firma-.2){const p=nb(E.e_firma-.2,E.e_firma+.9,t);ctx.save();ctx.globalAlpha=1-nb(E.e_jef-.2,E.e_jef,t);ctx.lineCap='round';ctx.lineJoin='round';ctx.beginPath();
    const n=Math.floor(60*p);for(let i=0;i<=n;i++){const x=110+i*2.1,y=466+Math.sin(i*.55)*9*Math.sin(i*.08+.4)+Math.sin(i*.17)*5;i?ctx.lineTo(x,y):ctx.moveTo(x,y)}
    ctx.strokeStyle=INK;ctx.lineWidth=6;ctx.stroke();ctx.strokeStyle='#fff';ctx.lineWidth=3;ctx.stroke();ctx.restore()}
  if(t>E.e_jef){const a=eb(nb(E.e_jef,E.e_jef+.4,t));tr(48,262,a,0,()=>jeff(0,0,.8,t,2))}
  if(t>E.e_cons-.2&&t<E.e_hizo-.1){const k=eb(nb(E.e_cons-.2,E.e_cons+.3,t))*(1-nb(E.e_hizo-.3,E.e_hizo-.1,t));tr(204,200,k,0,()=>{rr(-98,-34,196,68,8);ctx.fillStyle=CRM;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=3.4;ctx.stroke();txt('CONSTITUCIÓN',0,-14,18,'#3a2a14',{wt:'900',al:'center'});txt('¿COMPRAR TERRITORIOS?',0,12,13,'#6b3a1e',{wt:'900',al:'center'})})}
  if(t<E.e_hizo-.1)sello('NO DECÍA',204,252,17,USA,t,E.e_nodec);
  if(t>E.e_igual-.1){const p=nb(E.e_igual-.1,E.e_igual+.4,t);ctx.save();ctx.lineCap='round';ctx.lineJoin='round';ctx.beginPath();ctx.moveTo(150,236);const q=Math.min(1,p*2);ctx.lineTo(lerp(150,172,q),lerp(236,262,q));if(p>.5){const r=(p-.5)*2;ctx.lineTo(lerp(172,222,r),lerp(262,206,r))}ctx.strokeStyle=INK;ctx.lineWidth=14;ctx.stroke();ctx.strokeStyle=GRN;ctx.lineWidth=8;ctx.stroke();ctx.restore()}
  if(t>E.e_hizo){const w=nb(E.e_hizo,E.e_hizo+.2,t);ctx.save();ctx.globalAlpha=w;ctx.fillStyle='rgba(111,224,138,.0)';ctx.restore()}
  TX('ESTADOS UNIDOS',180,96,32,'#fff',t,E.e_eeuu-.1,{w:340,out:E.e_firma-.4});
  TX('DUPLICÓ SU TAMAÑO',180,146,30,AMB,t,E.e_dup-.2,{w:340,out:E.e_firma-.4});
  TX('CON UNA SOLA FIRMA',180,96,30,'#fff',t,E.e_firma-.55,{w:340,out:E.e_jef-.3});
  TX('JEFFERSON DUDÓ',180,96,30,'#fff',t,E.e_jef-.1,{w:340,out:E.e_hizo-.3});
  TX('LO HIZO',180,96,30,'#fff',t,E.e_hizo-.1,{w:340});
  TX('IGUAL',180,146,44,GRN,t,E.e_igual-.2,{w:340});
}

// S6 las tierras ya tenían dueños
function s6(t,u){
  const c=mapaCam(t,[[77.97,-98,39,7.2],[84.18,-99,40,8.4]]);
  base(c);faint(c,.2);terr(c,t,-1,.3,2.6);
  const PU=[['MANDAN',-101,47.2],['LAKOTA',-101.5,44.2],['PAWNEE',-98.5,41.1],['KANSA',-96.5,38.9],['OSAGE',-94,37.3],['CADDO',-93.6,32.6],['QUAPAW',-91.3,34.6]];
  PU.forEach((q,i)=>{const a=E.f_dec+.18*i;if(t>a){const [x,y]=pin(c,q[1],q[2],CRM,t,a,3.4);TG(q[0],cx_(x,38,322),y-15,11,CRM,INK,t,a)}});
  if(t>E.f_nadie){const k=eb(nb(E.f_nadie,E.f_nadie+.4,t))*(1+.06*Math.sin((t-E.f_nadie)*7));ctx.save();ctx.globalAlpha=nb(E.f_nadie,E.f_nadie+.2,t);txt('?',180,452,72*k,'#fff',{wt:'900',st:INK,sw:9,sh:'rgba(255,159,28,.7)',al:'center'});ctx.restore()}
  TX('PERO ESAS TIERRAS',180,96,28,'#fff',t,E.f_pero-.1,{w:340,out:E.f_dec-.3});
  TX('YA TENÍAN DUEÑOS',180,146,34,AMB,t,E.f_dueños-.2,{w:340,out:E.f_dec-.3});
  TX('DECENAS DE PUEBLOS',180,96,28,'#fff',t,E.f_dec-.1,{w:340,out:E.f_nadie-.3});
  TX('INDÍGENAS',180,146,44,CRM,t,E.f_ind-.2,{w:340,out:E.f_nadie-.3});
  TX('NADIE LES',180,96,32,'#fff',t,E.f_nadie-.1,{w:340});
  TX('PREGUNTÓ',180,146,44,AMB,t,E.f_preg-.2,{w:340});
}

// S7 debate: ¿ganga o error?
function s7(t,u){
  const c=mapaCam(t,[[84.18,-98,38,7.2],[DUR,-98,38,7.6]]);
  base(c,{dim:.5});terr(c,t,-1,.25,2);veil(.35);
  const k1=eb(nb(E.g_mejor,E.g_mejor+.45,t)),k2=eb(nb(E.g_mayor,E.g_mayor+.45,t));
  const pr=t>E.g_error?1+.03*Math.sin((t-E.g_error)*8):1;
  if(k1>0)tr(96,300,k1,0,()=>{rr(-72,-100,144,200,16);ctx.fillStyle=rgba(AMB,.92);ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=3;ctx.stroke();txt('GANGA',0,-58,28,INK,{wt:'900',al:'center'});for(let i=0;i<3;i++)moneda(-26+i*26,-8,1.5,t,i);txt('4¢ el acre',0,52,18,INK,{wt:'900',al:'center'});txt('×2 el país',0,78,15,INK,{wt:'900',al:'center'})});
  if(k2>0)tr(264,300,k2*pr,0,()=>{rr(-72,-100,144,200,16);ctx.fillStyle=rgba(FRA,.94);ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=3;ctx.stroke();txt('ERROR',0,-58,28,'#fff',{wt:'900',al:'center'});napo(0,14,.85,t,0);txt('de Napoleón',0,52,17,'#fff',{wt:'900',al:'center'});txt('regaló un imperio',0,78,13,'#dbe6ff',{wt:'900',al:'center'})});
  if(t>E.g_o){const a=nb(E.g_o,E.g_o+.2,t);ctx.save();ctx.globalAlpha=a;txt('O',180,300,26,'#fff',{wt:'900',st:INK,sw:6,al:'center'});ctx.restore()}
  TX('¿LA MEJOR GANGA',180,96,30,AMB,t,E.g_mejor-.2,{w:340});
  TX('O EL MAYOR ERROR?',180,146,30,'#9fb9ff',t,E.g_mayor-.25,{w:340});
  if(t>E.g_resp-.1)sl('¿TÚ QUÉ PIENSAS?',180,456,28,AMB,t,E.g_resp,{sh:'rgba(255,159,28,.6)'});
  TG('COMENTA TU RESPUESTA',180,500,16,AMB,INK,t,E.g_com-.05);
  TG('SÍGUEME PARA MÁS',180,534,14,'#fff',INK,t,E.g_sig-.05);
}

boot([s0,s1,s2,s3,s4,s5,s6,s7],TRS,{cap:{acc:'#5ee0c8'}});
