// ===== Haití: la deuda de 1825 — escenas =====
const HC=[-72.6,19.0];
const hai=(c,a=.5,lw=1.6)=>mapaPaises(c,['Haiti'],{fill:rgba(USA,a),borde:'#fff',lw});
const otros=(c)=>mapaPaises(c,['Dominican Rep.','Cuba','Jamaica','Puerto Rico','Bahamas'],{borde:'rgba(255,255,255,.55)',lw:.8});

// S0 gancho: Haití ganó su libertad ... la factura
function s0(t,u){
  const c=mapaCam(t,[[0,-72.6,19,30],[3.87,-72.6,19,38]]);
  base(c);otros(c);hai(c,.5);
  if(t>E.h_lib){const k=eb(nb(E.h_lib,E.h_lib+.4,t));ctx.save();ctx.globalAlpha=k;rays(180,320,t,16,60,rgba(AMB,.18),1,.3,2);ctx.restore()}
  pin(c,HC[0]+.2,HC[1]-.3,AMB,t,E.h_hai+.2,5);
  TG('HAITÍ',180,250,16,USA,'#fff',t,E.h_hai+.1);
  if(t>E.h_fra){const k=eb(nb(E.h_fra,E.h_fra+.4,t));ctx.save();ctx.globalAlpha=k;tr(48,420,k,0,()=>persona(0,0,.5,FRA,t,0));TG('FRANCIA',60,470,13,FRA,'#fff',t,E.h_fra);ctx.restore()}
  if(t>E.h_fact){factura(252,372,.78,eb(nb(E.h_fact,E.h_fact+.35,t)),'$$$');shock(252,372,t,E.h_fact,'rgba(255,200,61,.9)',90,5,.8)}
  TX('HAITÍ GANÓ',180,96,34,'#fff',t,-.6,{w:340,out:E.h_fra-.2});
  TX('SU LIBERTAD',180,146,40,AMB,t,E.h_lib-.2,{w:340,out:E.h_fra-.2});
  TX('¡Y LUEGO FRANCIA',180,96,30,'#fff',t,E.h_fra-.1,{w:340});
  TX('LE MANDÓ LA FACTURA!',180,146,30,AMB,t,E.h_fact-.5,{w:340});
}

// S1 1804: primer país nacido de una rebelión de esclavos; casi nadie lo reconoce
function s1(t,u){
  const c=mapaCam(t,[[3.87,-72.6,19,38],[13.13,-72.6,19,26]]);
  base(c);otros(c);hai(c,.55);
  if(t>E.a_cuatro)calendario(290,215,.5,eb(nb(E.a_cuatro-.1,E.a_cuatro+.4,t)),'1','ENERO','1804');
  if(t>E.a_esc){const k=eb(nb(E.a_esc,E.a_esc+.4,t));const br=nb(E.a_fund-.1,E.a_fund+.6,t);ctx.save();ctx.globalAlpha=k*(1-nb(E.a_reb+.8,E.a_reb+1.3,t));cadena(78,330,1.2,-.1,br);ctx.restore();
    if(br>.1){burst(78,330,t,E.a_fund,[AMB,'#fff',USA],14,60,.8,2.5)}}
  if(t>E.a_prim){const [x,y]=pin(c,HC[0]+.1,HC[1]-.2,AMB,t,E.a_prim,6);}
  if(t>E.a_reb)shock(180,320,t,E.a_reb,'rgba(255,77,109,.9)',110,5,.9);
  if(t>E.a_casi){const s=eb(nb(E.a_casi,E.a_casi+.35,t));[[48,430],[312,430],[180,470]].forEach((p,i)=>{ctx.save();ctx.globalAlpha=s;candado(p[0],p[1],1.0,eb(nb(E.a_casi+.1*i,E.a_casi+.5+.1*i,t)));ctx.restore()})}
  if(t>E.a_nadie)sello('SIN RECONOCER',180,400,19,USA,t,E.a_nadie);
  TG('1804',180,86,26,AMB,INK,t,E.a_mil-.1,{out:E.a_esc-.3});
  TX('LOS ESCLAVIZADOS',180,96,30,'#fff',t,E.a_esc-.1,{w:340,out:E.a_prim-.3});
  TX('FUNDAN UN PAÍS',180,146,32,AMB,t,E.a_fund-.1,{w:340,out:E.a_prim-.3});
  TX('EL PRIMERO NACIDO',180,96,28,'#fff',t,E.a_prim-.1,{w:340,out:E.a_pero-.3});
  TX('DE UNA REBELIÓN',180,140,28,USA,t,E.a_reb-.4,{w:340,out:E.a_pero-.3});
  TX('DE ESCLAVOS',180,184,38,AMB,t,E.a_esc2-.1,{w:340,out:E.a_pero-.3});
  TX('PERO CASI NADIE',180,96,32,'#fff',t,E.a_pero-.1,{w:340});
  TX('LO RECONOCE',180,146,42,USA,t,E.a_rec-.3,{w:340});
}

// S2 1825: la flota, Carlos X, 150 millones de francos
function s2(t,u){
  const c=mapaCam(t,[[13.13,-40,34,3.4],[17.0,-42,34,3.6],[20.6,-72,19.8,22],[27.73,-72.4,19.2,26]]);
  base(c);otros(c);hai(c,.45);
  const k=eio(nb(E.b_llega-.2,E.b_can+.4,t));
  if(t>E.b_llega-.3){const h=ruta(c,G_FH,k,FRA,3.2,{dash:k<1?[8,5]:null,t});
    for(let i=0;i<5;i++){const kk=cl(k-.04*i);if(kk>0){const L=_cum(G_FH),d=kk*L[L.length-1];let j=1;while(j<G_FH.length-1&&L[j]<d)j++;const f=cl((d-L[j-1])/(L[j]-L[j-1]));const [x,y]=mapaPunto(c,lerp(G_FH[j-1][0],G_FH[j][0],f),lerp(G_FH[j-1][1],G_FH[j][1],f));barco(x,y-4+i*3,.5,FRA,t+i,1)}}}
  if(t>E.b_21)pin(c,BREST[0],BREST[1],FRA,t,E.b_21,4);
  if(t>E.b_1825-.2)calendario(292,212,.5,eb(nb(E.b_1825-.2,E.b_1825+.3,t))*(1-nb(E.b_llega+1,E.b_llega+1.4,t)),'17','ABRIL','1825');
  if(t>E.b_500){const a=eb(nb(E.b_500,E.b_500+.35,t));ctx.save();ctx.globalAlpha=a*(1-nb(E.b_rey-.2,E.b_rey,t));txt('~500 CAÑONES',180,430,28,'#fff',{wt:'900',st:INK,sw:7,sh:'rgba(255,77,109,.6)',al:'center'});ctx.restore()}
  if(t>E.b_can)shock(180,320,t,E.b_can,'rgba(255,77,109,.9)',110,5,.9);
  if(t>E.b_rey){const a=eb(nb(E.b_rey,E.b_rey+.4,t));tr(78,300,a,0,()=>rey(0,0,.95,t,1));TG('CARLOS X',78,364,13,FRA,'#fff',t,E.b_car)}
  if(t>E.b_trato){const a=eb(nb(E.b_trato,E.b_trato+.35,t));tr(272,300,a,0,()=>{rr(-60,-50,120,100,8);ctx.fillStyle=CRM;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=3.4;ctx.stroke();for(let i=0;i<4;i++)line(-42,-30+i*14,42-i*6,-30+i*14,'#8a7a66',3);ctx.beginPath();ctx.arc(34,34,10,0,7);ctx.fillStyle=USA;ctx.fill();ctx.stroke()})}
  if(t>E.b_150){const v=countV(0,150000000,t,E.b_150,1.2),a=eb(nb(E.b_150,E.b_150+.3,t));ctx.save();ctx.globalAlpha=a;txt(fmtN(v),180,470,40,'#fff',{wt:'900',st:INK,sw:7,sh:'rgba(255,200,61,.6)',al:'center'});txt('FRANCOS',180,500,18,AMB,{wt:'900',st:INK,sw:4,al:'center'});ctx.restore()}
  if(t>E.b_fr)shock(180,470,t,E.b_fr,'rgba(255,200,61,.9)',90,5,.8);
  TX('21 AÑOS DESPUÉS',180,96,30,'#fff',t,E.b_21-.1,{w:340,out:E.b_llega-.3});
  TG('1825',180,146,26,AMB,INK,t,E.b_1825-.1,{out:E.b_llega-.3});
  TX('LLEGA UNA FLOTA',180,96,30,'#fff',t,E.b_llega-.1,{w:340,out:E.b_rey-.3});
  TX('FRANCESA',180,146,40,FRA,t,E.b_flota-.2,{w:340,out:E.b_rey-.3});
  TX('EL REY OFRECE',180,96,28,'#fff',t,E.b_rey-.1,{w:340,out:E.b_rec-.3});
  TX('UN TRATO',180,146,40,AMB,t,E.b_trato-.2,{w:340,out:E.b_rec-.3});
  TX('RECONOCER LA',180,96,28,'#fff',t,E.b_rec-.1,{w:340,out:E.b_150-.3});
  TX('INDEPENDENCIA',180,146,34,USA,t,E.b_ind-.2,{w:340,out:E.b_150-.3});
  TX('A CAMBIO DE',180,96,28,'#fff',t,E.b_150-.3,{w:340});
}

// S3 ¿para quién? dueños de plantaciones; préstamo de bancos franceses; deuda para pagar deuda
function s3(t,u){
  const c=mapaCam(t,[[27.73,-72.4,19.2,26],[33.0,-60,28,5],[40.54,-40,35,3.6]]);
  base(c,{dim:.4});otros(c);hai(c,.4);
  if(t>E.c_due){const a=eb(nb(E.c_due,E.c_due+.4,t))*(1-nb(E.c_hai-.3,E.c_hai,t));ctx.save();ctx.globalAlpha=a;[[70,330],[130,350],[190,330]].forEach((p,i)=>persona(p[0],p[1],.5,'#e8d9a8',t,i));
    ctx.restore();for(let i=0;i<4;i++){const kk=eb(nb(E.c_plan+.12*i,E.c_plan+.4+.12*i,t))*(1-nb(E.c_hai-.3,E.c_hai,t));ctx.save();ctx.globalAlpha=kk;ctx.translate(250+(i%2)*40,320+Math.floor(i/2)*40);ctx.beginPath();ctx.moveTo(-14,10);ctx.lineTo(0,-6);ctx.lineTo(14,10);ctx.closePath();ctx.fillStyle='#6fe08a';ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=2.4;ctx.stroke();ctx.restore()}}
  if(t>E.c_perd&&t<E.c_prest-.1)sello('PROPIEDAD PERDIDA',180,420,17,AMB,t,E.c_perd,-.08);
  if(t>E.c_prest){banco(90,330,1.1,eb(nb(E.c_prest,E.c_prest+.4,t)));TG('BANCOS FRANCESES',cx_(90,70,290),392,12,FRA,'#fff',t,E.c_ban)}
  if(t>E.c_ban){const k=eio(nb(E.c_ban,E.c_ban+1.2,t));for(let i=0;i<4;i++){const kk=cl(k*1.4-.15*i);if(kk>0)moneda(lerp(110,260,kk),330-Math.sin(kk*Math.PI)*40,1.1,t,i)}}
  if(t>E.c_ban+.6){const a=eb(nb(E.c_ban+.6,E.c_ban+1,t));tr(276,340,a,0,()=>persona(0,0,.7,USA,t,2));TG('HAITÍ',276,388,12,USA,'#fff',t,E.c_ban+.6)}
  if(t>E.c_deuda){pila(150,470,3,1.6,t);const a=eb(nb(E.c_deuda,E.c_deuda+.3,t));ctx.save();ctx.globalAlpha=a;txt('DEUDA',150,498,16,USA,{wt:'900',st:INK,sw:4,al:'center'});ctx.restore()}
  if(t>E.c_otra){pila(230,470,3,1.6,t);const a=eb(nb(E.c_otra,E.c_otra+.3,t));ctx.save();ctx.globalAlpha=a;txt('+ DEUDA',230,498,16,USA,{wt:'900',st:INK,sw:4,al:'center'});ctx.restore()}
  if(t>E.c_deuda2)shock(190,460,t,E.c_deuda2,'rgba(255,77,109,.9)',100,5,.9);
  TX('¿PARA QUIÉN?',180,96,40,AMB,t,E.c_para-.1,{w:340,out:E.c_due-.3});
  TX('LOS ANTIGUOS DUEÑOS',180,96,26,'#fff',t,E.c_due-.1,{w:340,out:E.c_hai-.3});
  TX('DE LAS PLANTACIONES',180,140,26,'#e8d9a8',t,E.c_plan-.2,{w:340,out:E.c_hai-.3});
  TX('HAITÍ NO TENÍA',180,96,30,'#fff',t,E.c_hai-.1,{w:340,out:E.c_prest-.3});
  TX('ESE DINERO',180,146,40,USA,t,E.c_din-.2,{w:340,out:E.c_prest-.3});
  TX('PIDIÓ UN PRÉSTAMO',180,96,28,'#fff',t,E.c_prest-.1,{w:340,out:E.c_deuda-.3});
  TX('A BANCOS FRANCESES',180,140,24,FRA,t,E.c_ban-.2,{w:340,out:E.c_deuda-.3});
  TX('UNA DEUDA PARA',180,96,30,'#fff',t,E.c_deuda-.1,{w:340});
  TX('PAGAR OTRA DEUDA',180,146,32,USA,t,E.c_otra-.2,{w:340});
}

// S4 1838: rebaja a 90 millones, pero pagó 112 millones = 560 millones de dólares de hoy
function s4(t,u){
  const c=mapaCam(t,[[40.54,-40,35,3.6],[53.48,-72.4,19.2,10]]);
  base(c,{dim:.5});otros(c);hai(c,.3);veil(.3);
  const bar=(x,h,col,a,lab,val)=>{const k=eb(a);if(k<=0)return;ctx.save();rr(x-34,470-h*k,68,h*k,6);ctx.fillStyle=col;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=3.4;ctx.stroke();ctx.restore();txt(lab,x,492,14,'#fff',{wt:'900',al:'center',st:INK,sw:4})};
  bar(70,150,FRA,nb(E.d_ocho-.2,E.d_ocho+.4,t),'150 M');
  if(t>E.d_reb){const k=eio(nb(E.d_reb,E.d_reb+.7,t));const h=lerp(150,90,k);ctx.save();rr(36,470-150,68,150-h,6);ctx.fillStyle=rgba(USA,.35);ctx.fill();ctx.setLineDash([5,4]);ctx.strokeStyle=USA;ctx.lineWidth=2;ctx.stroke();ctx.restore();
}
  if(t>E.d_90)txt('1838: 90 M',70,508,13,AMB,{wt:'900',al:'center',st:INK,sw:4});
  if(t>E.d_112){bar(180,190,USA,nb(E.d_112,E.d_112+.6,t),'PAGÓ 112 M');const v=countV(0,112,t,E.d_112,.9);txt(fmtN(Math.round(v)),180,470-190*eb(nb(E.d_112,E.d_112+.6,t))-12,22,'#fff',{wt:'900',al:'center',st:INK,sw:5})}
  if(t>E.d_560){const v=countV(0,560,t,E.d_560,1.0),a=eb(nb(E.d_560,E.d_560+.3,t));ctx.save();ctx.globalAlpha=a;txt('≈ $'+fmtN(Math.round(v))+' M',282,330,34,'#fff',{wt:'900',st:INK,sw:7,sh:'rgba(255,200,61,.6)',al:'center'});txt('de hoy',282,360,16,AMB,{wt:'900',al:'center',st:INK,sw:4});ctx.restore()}
  if(t>E.d_dol)shock(282,330,t,E.d_dol,'rgba(255,200,61,.9)',90,5,.8);
  if(t>E.d_dec&&t<E.d_112)for(let i=0;i<8;i++){const a=E.d_dec+.1*i;if(t>a)moneda(150+i*22,270+Math.sin(t*4+i)*4,.9*eb(nb(a,a+.3,t)),t,i)}
  TX('1838: FRANCIA LA',180,96,28,'#fff',t,E.d_ocho-.1,{w:340,out:E.d_pero-.3});
  TX('REBAJA A 90 MILLONES',180,146,28,AMB,t,E.d_reb-.2,{w:340,out:E.d_pero-.3});
  TX('PERO SIGUIÓ PAGANDO',180,96,26,'#fff',t,E.d_pero-.1,{w:340,out:E.d_112-.3});
  TX('DURANTE DÉCADAS',180,140,34,USA,t,E.d_dec-.2,{w:340,out:E.d_112-.3});
  TX('112 MILLONES DE FRANCOS',180,96,24,'#fff',t,E.d_112-.1,{w:340});
  TX('= UNOS 560 MILLONES',180,134,26,AMB,t,E.d_560-.1,{w:340});
  TX('DE DÓLARES DE HOY',180,170,22,'#fff',t,E.d_dol-.2,{w:340});
}

// S5 1947: la deuda se cierra 140 años después
function s5(t,u){
  const c=mapaCam(t,[[53.48,-72.5,19,10],[60.9,-72.5,19,13]]);
  base(c);otros(c);hai(c,.4);
  if(t>E.e_1947-.1){const k=eb(nb(E.e_1947-.1,E.e_1947+.4,t));ctx.save();ctx.globalAlpha=k;txt('1947',180,320,76,'#fff',{wt:'900',st:INK,sw:10,sh:'rgba(255,200,61,.7)',al:'center'});ctx.restore();shock(180,320,t,E.e_1947,'rgba(255,200,61,.9)',130,5,.9)}
  if(t>E.e_cerro){const k=nb(E.e_cerro,E.e_cerro+.5,t);ctx.save();ctx.globalAlpha=k*.95;rr(120,396,120,34,8);ctx.fillStyle=INK;ctx.fill();ctx.restore();ctx.save();ctx.globalAlpha=k;txt('DEUDA CERRADA',180,420,18,GRN,{wt:'900',al:'center'});ctx.restore()}
  if(t>E.e_140){const v=countV(1804,1947,t,E.e_140-.3,1.0),a=eb(nb(E.e_140-.3,E.e_140+.2,t));ctx.save();ctx.globalAlpha=a;txt('+140 AÑOS',180,480,34,AMB,{wt:'900',st:INK,sw:7,al:'center'});ctx.restore()}
  TX('LA DEUDA NO SE CERRÓ',180,96,24,'#fff',t,E.e_deuda-.1,{w:340,out:E.e_mas-.3});
  TX('HASTA 1947',180,146,42,AMB,t,E.e_1947-.3,{w:340,out:E.e_mas-.3});
  TX('MÁS DE 140 AÑOS',180,96,32,'#fff',t,E.e_mas-.1,{w:340});
  TX('DESPUÉS DE SU LIBERTAD',180,146,26,USA,t,E.e_ind-.3,{w:340});
}

// S6 2025: Macron y la comisión de historiadores
function s6(t,u){
  const c=mapaCam(t,[[60.9,-30,40,3.2],[67.33,-20,42,3.8]]);
  base(c,{dim:.45});faint(c,.18);veil(.25);
  if(t>E.f_2025-.1)calendario(86,300,.7,eb(nb(E.f_2025-.1,E.f_2025+.4,t)),'17','ABRIL','2025');
  if(t>E.f_mac){const a=eb(nb(E.f_mac,E.f_mac+.4,t));tr(270,320,a,0,()=>persona(0,0,1.1,FRA,t,1));TG('FRANCIA',270,396,13,FRA,'#fff',t,E.f_mac)}
  if(t>E.f_inj)sello('INJUSTA',180,450,24,USA,t,E.f_inj,-.1);
  if(t>E.f_com){for(let i=0;i<4;i++){const a=E.f_com+.14*i;if(t>a){const k=eb(nb(a,a+.35,t));tr(100+i*54,250,k,0,()=>{rr(-18,-24,36,48,4);ctx.fillStyle=CRM;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=2.6;ctx.stroke();for(let j=0;j<3;j++)line(-11,-12+j*10,11,-12+j*10,'#8a7a66',2.4)})}}}
  if(t>E.f_hist2)shock(180,250,t,E.f_hist2,'rgba(255,200,61,.9)',100,5,.8);
  TX('MACRON HABLA DE',180,96,28,'#fff',t,E.f_mac-.1,{w:340,out:E.f_com-.3});
  TX('UNA FUERZA INJUSTA',180,146,30,USA,t,E.f_inj-.2,{w:340,out:E.f_com-.3});
  TX('Y CREA UNA COMISIÓN',180,96,26,'#fff',t,E.f_com-.1,{w:340});
  TX('DE HISTORIADORES',180,146,32,AMB,t,E.f_hist2-.2,{w:340});
}

// S7 debate: ¿extorsión o precio de la paz?
function s7(t,u){
  const c=mapaCam(t,[[67.33,-72.6,19,10],[DUR,-72.6,19,11]]);
  base(c,{dim:.5});otros(c);hai(c,.3);veil(.35);
  const k1=eb(nb(E.g_ext,E.g_ext+.45,t)),k2=eb(nb(E.g_paz,E.g_paz+.45,t));
  const pr=t>E.g_paz?1+.03*Math.sin((t-E.g_paz)*8):1;
  if(k1>0)tr(96,300,k1,0,()=>{rr(-72,-100,144,200,16);ctx.fillStyle=rgba(USA,.94);ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=3;ctx.stroke();txt('EXTORSIÓN',0,-58,21,'#fff',{wt:'900',al:'center'});barco(0,-4,.8,FRA,t,1);txt('flota de guerra',0,52,14,'#fff',{wt:'900',al:'center'});txt('o no hay trato',0,76,13,'#ffd0d8',{wt:'900',al:'center'})});
  if(k2>0)tr(264,300,k2*pr,0,()=>{rr(-72,-100,144,200,16);ctx.fillStyle=rgba(AMB,.94);ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=3;ctx.stroke();txt('PRECIO',0,-66,22,INK,{wt:'900',al:'center'});txt('DE LA PAZ',0,-42,22,INK,{wt:'900',al:'center'});moneda(0,6,2.2,t,0);txt('libertad',0,52,15,INK,{wt:'900',al:'center'});txt('reconocida',0,76,13,'#5a3d00',{wt:'900',al:'center'})});
  if(t>E.g_o){const a=nb(E.g_o,E.g_o+.2,t);ctx.save();ctx.globalAlpha=a;txt('O',180,300,26,'#fff',{wt:'900',st:INK,sw:6,al:'center'});ctx.restore()}
  TX('¿FUE UNA',180,96,30,'#fff',t,E.g_ent-.1,{w:340});
  TX('EXTORSIÓN...',180,140,34,USA,t,E.g_ext-.2,{w:340});
  TX('...O EL PRECIO DE LA PAZ?',180,184,24,AMB,t,E.g_paz-.3,{w:340});
  if(t>E.g_resp-.1)sl('¿TÚ QUÉ PIENSAS?',180,456,28,AMB,t,E.g_resp,{sh:'rgba(255,200,61,.6)'});
  TG('COMENTA TU RESPUESTA',180,500,16,AMB,INK,t,E.g_com-.05);
  TG('SÍGUEME PARA MÁS',180,534,14,'#fff',INK,t,E.g_sig-.05);
}

boot([s0,s1,s2,s3,s4,s5,s6,s7],TRS,{cap:{acc:'#ffc83d'}});
