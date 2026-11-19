// ===== Primera vuelta al mundo — escenas =====
const SAN=[-6.3,36.8],MAC=[124,10.3],TID=[127.4,0.8];
const sl=(s,x,y,sz,col,t,ts,o={})=>slam(s,x,y,sz,col,t,ts,Object.assign({st:INK,sw:Math.max(6,sz*.18),sh:'rgba(255,138,61,.55)'},o));
const P_=(c,p)=>mapaPunto(c,p[0],p[1]);

// S0 GANCHO: cinco barcos, solo uno lo logró
function s0(t,u){
  const c=mapaCam(t,[[0,-26,22,1.7],[5.0,-18,20,2.0],[6,-18,20,2.0]]);
  base(c);
  PF(c,['Spain','Portugal'],GOLD,.28,{b:'#fff',lw:1});
  const xs=[62,121,180,239,298],ys=[392,404,380,404,392];
  for(let i=0;i<5;i++){
    const tin=-.5+i*.1,k=i===2?1:1;const pop=t<tin?(t<0?1:0):eb(nb(tin,tin+.35,t));
    // los otros cuatro se hunden en "solo uno"
    const sink=i===2?0:eo(nb(E.h_uno-.05+i*.06,E.h_uno+.7+i*.06,t));
    const mv=i===2?eio(nb(E.h_uno+.1,E.h_uno+.9,t)):0;
    const x=xs[i]+(i===2?0:Math.sin(t*30+i)*3*Math.exp(-(t-E.h_uno)*6)*(t>E.h_uno?1:0)),y=ys[i]+sink*55-mv*0;
    if(t<0&&i>=0&&false)continue;
    nao(x,y,2.6*Math.max(.01,i===2?pop*(1+.28*mv):pop),i===2?GOLD:MG,false,t,1-sink);
    if(sink>.2&&sink<.98)cruz(x,y-8,9,RED,eb(nb(0,.3,sink)));
  }
  if(t>E.h_logro){const g=spring(t-E.h_logro,11,6);glow(180,380,70*g,'rgba(255,209,102,.6)',1);shock(180,382,t,E.h_logro,'rgba(255,209,102,.95)',90,4,.8);burst(180,382,t,E.h_logro,[GOLD,'#fff'],26,150,.9,3)}
  TX('5 BARCOS',180,96,46,'#fff',t,-.6,{w:340});
  TX('A DAR LA VUELTA AL MUNDO',180,146,21,GOLD,t,-.4,{w:340});
  if(t>E.h_uno-.1)sl('SOLO 1 LO LOGRÓ',180,230,34,GOLD,t,E.h_uno,{sh:'rgba(255,209,102,.5)'});
  const fo=1-nb(E.h_mapa+.1,E.h_mapa+.35,t);
  TG('MIRA EL MAPA',180,478,15,GOLD,INK,t,E.h_mapa-.05);
  // pin de Sanlúcar (punto de la inmersión)
  if(t>E.h_mapa+.05)pin(c,SAN[0],SAN[1],MG,t,E.h_mapa+.05,5);
}

// S1 20 SEP 1519: zarpa de Sanlúcar
function s1(t,u){
  const c=mapaCam(t,[[5.3,SAN[0],SAN[1],22],[8.0,SAN[0],SAN[1],14],[13.9,SAN[0]-1,SAN[1]-3,12.5]]);
  base(c);
  const e=eo(nb(E.a_esp-.1,E.a_esp+.8,t));PF(c,['Spain'],GOLD,.38*e,{b:'#fff',lw:1.6});
  const h=ruta(c,R_ATL,.075*eo(nb(E.a_zarpa,E.a_zarpa+2.6,t)),MG,3.4);
  if(h)flota(h,5,1.5,MG,t);else if(t>E.a_flota)for(let i=0;i<5;i++){const [x,y]=P_(c,SAN);nao(x-i*7,y-12-(i%2)*4,1.5,MG,true,t+i)}
  pin(c,SAN[0],SAN[1],MG,t,5.3,5);
  TG('20 SEP 1519',180,96,19,GOLD,INK,t,E.a_20-.05,{out:13.3});
  TX('LA FLOTA DE',180,142,26,'#fff',t,E.a_flota-.1,{w:330,out:E.a_zarpa-.45});
  TX('MAGALLANES',180,184,36,MG,t,E.a_magal-.1,{w:340,out:E.a_zarpa-.45});
  TX('ZARPA',180,142,44,'#fff',t,E.a_zarpa-.1,{w:340});
  const [sx,sy]=P_(c,SAN);TG('SANLÚCAR DE BARRAMEDA',cx_(sx,100,260),Math.max(sy+34,240),12,'rgba(6,18,28,.88)','#fff',t,E.a_sanl-.05);
  const [ex,ey]=P_(c,[-4,40]);TG('ESPAÑA',cx_(ex),Math.max(ey,120)+12,16,GOLD,INK,t,E.a_esp-.05);
}

// S2 la ruta soñada: islas de las especias, siempre hacia el oeste
function s2(t,u){
  const c=mapaCam(t,[[13.4,-5,10,1.3],[19.0,-5,10,1.3]]);
  base(c);
  const [mx,my]=pin(c,TID[0],TID[1],GOLD,t,E.b_esp-.1,6);
  if(t>E.b_esp){burst(mx,my,t,E.b_esp,[GOLD,'#fff'],22,110,.8,3);shock(mx,my,t,E.b_esp,'rgba(255,209,102,.9)',60,3,.7)}
  const pw=eio(nb(E.b_oeste-1.1,E.b_oeste+.9,t));
  ruta(c,R_OESTE,pw,MG,3.2,{dash:[7,5],t});
  ruta(c,R_OESTE2,pw,MG,3.2,{dash:[7,5],t});
  pin(c,SAN[0],SAN[1],MG,t,13.4,5);
  if(t>E.b_oeste-.2){const k=eb(nb(E.b_oeste-.1,E.b_oeste+.4,t));tr(100,330,k,0,()=>{poly([[-26,0],[-4,-16],[-4,-7],[24,-7],[24,7],[-4,7],[-4,16]],MG,INK,3)})}
  TX('BUSCAN',180,96,24,'#fff',t,E.b_buscan-.1,{w:330,out:E.b_esp+.3});
  TX('UNA RUTA',180,134,34,'#fff',t,E.b_buscan+.15,{w:340,out:E.b_esp+.3});
  TX('ISLAS DE LAS',180,100,26,'#fff',t,E.b_esp-.1,{w:330});TX('ESPECIAS',180,142,40,GOLD,t,E.b_esp-.05,{w:340});
  TG('MOLUCAS',cx_(mx,40,320),my+26,13,'rgba(6,18,28,.88)',GOLD,t,E.b_esp+.2);
  sl('HACIA EL OESTE',180,430,32,MG,t,E.b_oeste,{sh:'rgba(255,138,61,.6)'});
}

// S3 cruzan el Atlántico y bajan por la costa de América del Sur
function s3(t,u){
  const c=mapaCam(t,[[18.5,-28,2,3.0],[22.8,-48,-28,3.5,eio]]);
  base(c);
  const p=eio(nb(19.1,22.65,t));
  const h=ruta(c,R_ATL,p,MG,3.4);
  pin(c,SAN[0],SAN[1],MG,t,18.5,4);
  flota(h,5,1.45,MG,t);
  const a=P_(c,[-28,14]);TG('OCÉANO ATLÁNTICO',cx_(a[0],80,280),a[1],13,'rgba(6,18,28,.88)','#fff',t,E.c_atl-.05,{out:E.c_sur-.2});
  const b=P_(c,[-62,-10]);TG('AMÉRICA DEL SUR',cx_(b[0],70,290),b[1],14,GOLD,INK,t,E.c_sur-.15);
  TX('CRUZAN EL',180,100,26,'#fff',t,E.c_cruzan-.1,{w:330,out:E.c_bajan-.5});TX('ATLÁNTICO',180,142,38,MG,t,E.c_atl-.15,{w:340,out:E.c_bajan-.5});
  TX('BAJAN POR LA COSTA',180,110,26,'#fff',t,E.c_bajan,{w:340});
}

// S4 un barco naufraga, otro da media vuelta
function s4(t,u){
  const c=mapaCam(t,[[22.2,-60,-40,5.2],[24.9,-60,-42,5.2],[26.0,-40,-8,2.9,eio],[27.5,-40,-8,2.9]]);
  base(c);
  const fin=R_ATL[R_ATL.length-1];
  ruta(c,R_ATL,1,MG,3.2);
  const [x,y]=P_(c,fin);
  const nau=eo(nb(E.d_nau-.1,E.d_nau+.9,t)),turn=nb(E.d_media-.1,E.d_media+.4,t);
  const k=(t>E.d_media+.3)?3:(t>E.d_nau?4:5);
  if(t<E.d_media+.3)for(let i=0;i<k;i++)nao(x-6+i*6,y-6-(i%2)*5,1.6*Math.max(.3,c.s/5.2*.5+.5),MG,false,t+i);
  else for(let i=0;i<3;i++)nao(x-6+i*6,y-6-(i%2)*5,1.6*(c.s/5.2*.5+.5)**1,MG,false,t+i);
  // naufragio
  if(t>E.d_nau-.1){const sx=x+22,sy=y+nau*24;nao(sx,sy,2.2,'#999',false,t,1-nau*.8);
    if(nau>.05)for(let i=0;i<6;i++){const q=((t-E.d_nau)*1.4+i*.2)%1;circ(sx-8+i*3.2,sy-q*28,2.2*(1-q),'rgba(200,235,255,'+(.8*(1-q))+')')}
    if(t>E.d_nau)burst(sx,y,t,E.d_nau,['#9fd3ff','#fff'],18,90,.8,2.6);cruz(sx,y-26,9,RED,eb(nb(E.d_nau+.15,E.d_nau+.5,t)))}
  // regreso
  const rp=eio(nb(E.d_media+.3,E.d_regresa+1.0,t));
  const h=ruta(c,R_VUELTA,rp,RED,3,{dash:[6,5],t});
  if(h)nao(h[0],h[1]-5,1.7,'#ff9aa5',true,t);
  const sa=pin(c,SAN[0],SAN[1],MG,t,25.9,4);
  TX('ALLÍ',180,100,26,'#fff',t,E.d_alli-.1,{w:330,out:E.d_media-.1});
  TX('UN BARCO NAUFRAGA',180,142,28,RED,t,E.d_nau-.15,{w:340,out:E.d_media-.1});
  TX('OTRO DA MEDIA',180,100,26,'#fff',t,E.d_media-.1,{w:330});TX('VUELTA',180,142,40,GOLD,t,E.d_media+.05,{w:340});
  if(t>E.d_regresa-.1)TG('REGRESA A ESPAÑA',cx_(sa[0],90,270),Math.max(sa[1]+34,200),13,RED,'#fff',t,E.d_regresa-.1);
}

// S5 el estrecho de Magallanes y el Pacífico
function s5(t,u){
  const c=mapaCam(t,[[26.8,-68.5,-52.2,16],[30.3,-72.5,-53,16],[31.7,-90,-44,6,eio],[34.0,-118,-33,3.2,eio]]);
  base(c);
  const pe=eio(nb(27.4,30.6,t)),pp=eio(nb(E.e_oce+.1,33.75,t));
  const h1=ruta(c,R_EST,pe,MG,3.4),h2=ruta(c,R_PAC1,pp,MG,3.4,{});
  const h=pp>0?h2:h1;flota(h,3,c.s>10?1.6:1.4,MG,t);
  PF(c,['Chile','Argentina'],GOLD,.0,{ba:.5});
  const s=P_(c,[-71,-54.3]);if(t>E.e_estr)TG('ESTRECHO DE MAGALLANES',cx_(s[0],90,270),Math.min(s[1]+28,440),12,'rgba(6,18,28,.9)','#fff',t,E.e_estr-.05,{out:E.e_oce+.1});
  const pc=P_(c,[-125,-14]);
  if(t>E.e_pac){burst(pc[0],pc[1],t,E.e_pac,[EL,'#fff','#9ff5e8'],26,130,.9,3);shock(pc[0],pc[1],t,E.e_pac,'rgba(46,230,201,.9)',80,4,.8)}
  TX('PASAN POR UN',180,100,24,'#fff',t,E.e_pasan-.1,{w:330,out:E.e_mag-.1});TX('ESTRECHO',180,142,40,MG,t,E.e_estr-.15,{w:340,out:E.e_mag-.1});
  TX('QUE LLEVA SU',180,100,24,'#fff',t,E.e_mag-.1,{w:330,out:E.e_oce-.1});TX('NOMBRE',180,142,40,GOLD,t,E.e_mag+.1,{w:340,out:E.e_oce-.1});
  TX('UN OCÉANO NUEVO',180,100,26,'#fff',t,E.e_oce-.1,{w:340,out:E.e_pac-.1});
  if(t>E.e_pac-.05)sl('PACÍFICO',180,190,46,EL,t,E.e_pac,{sh:'rgba(46,230,201,.6)'});
}

// S6 27 ABR 1521: Magallanes muere en Mactán (Filipinas)
function s6(t,u){
  const c=mapaCam(t,[[33.6,150,10,3.4],[36.4,126,10.5,9],[37.6,MAC[0],MAC[1],22],[42.6,MAC[0],MAC[1],24]]);
  base(c);
  PF(c,['Philippines'],GOLD,.3*eo(nb(E.f_fil-.1,E.f_fil+.7,t)),{b:'#fff',lw:1.4});
  const h=ruta(c,R_PAC2,eio(nb(34.2,36.7,t)),MG,3.4);
  const dead=t>E.f_muere;
  if(h&&!dead)flota(h,3,c.s>8?2:1.6,MG,t);
  const [mx,my]=P_(c,MAC);
  if(t>E.f_fil-.1)pin(c,MAC[0],MAC[1],RED,t,E.f_fil-.1,5);
  // 50 contra 1000
  const a50=eo(nb(E.f_50-.05,E.f_50+.5,t)),a1k=eo(nb(E.f_mil-.05,E.f_mil+.8,t));
  if(a50>0){for(let i=0;i<50;i++){const gx=(i%10)*6.5,gy=Math.floor(i/10)*6.5;circ(60+gx,330+gy*1.0+Math.sin(t*5+i)*.6,2.3*a50,MG,INK,.8)}
    TG('≈ 50',90,372,15,MG,INK,t,E.f_50-.05)}
  if(a1k>0){const n=Math.floor(1000*a1k);for(let i=0;i<n;i++){const gx=(i%40)*3.6,gy=Math.floor(i/40)*3.6;circ(195+gx,330+gy,1.4,RED)}
    TG('≈ 1000',262,438,15,RED,'#fff',t,E.f_mil-.05)}
  if(dead){const sh=Math.sin(t*60)*3*Math.exp(-(t-E.f_muere)*8);cruz(mx+sh,my-30,16,RED,spring(t-E.f_muere,11,6));shock(mx,my,t,E.f_muere,'rgba(255,77,94,.95)',90,5,.8);burst(mx,my,t,E.f_muere,[RED,'#fff',MG],26,150,.9,3)}
  TG('27 ABR 1521',180,96,19,GOLD,INK,t,E.f_27-.05,{out:42.0});
  TX('EN FILIPINAS',180,142,32,'#fff',t,E.f_fil-.1,{w:340,out:E.f_muere-.1});
  if(dead)sl('MUERE MAGALLANES',180,180,30,RED,t,E.f_muere,{sh:'rgba(255,77,94,.6)'});
  TG('MACTÁN',cx_(mx,40,320),my+26,12,'rgba(6,18,28,.9)','#fff',t,E.f_fil+.2);
}

// S7 Elcano: Índico, África y regreso a Sanlúcar
function s7(t,u){
  const c=mapaCam(t,[[42.2,127,6,10],[44.3,110,-6,3.3,eio],[47.2,50,0,2.4,eio],[48.9,-6,24,4.1,eio],[52.5,-6,24,4.1]]);
  base(c);
  const pr=eio(nb(43.9,48.75,t));
  ruta(c,R_PAC1,0,EL,0);
  const h=ruta(c,R_EL,pr,EL,3.6);
  if(h){nao(h[0],h[1]-6,2.1,GOLD,Math.cos(h[2])<0,t)}else{const q=P_(c,MAC);nao(q[0],q[1]-8,2.3,GOLD,false,t)}
  pin(c,MAC[0],MAC[1],RED,t,42.0,4);
  
  const ind=P_(c,[85,-22]);TG('OCÉANO ÍNDICO',cx_(ind[0],80,280),ind[1],13,'rgba(6,18,28,.88)','#fff',t,E.g_ind-.05,{out:E.g_llega});
  const af=P_(c,[22,2]);TG('ÁFRICA',cx_(af[0],50,300),af[1],15,GOLD,INK,t,E.g_afr-.05,{out:E.g_llega});
  const sa=pin(c,SAN[0],SAN[1],MG,t,E.g_llega,5);
  if(t>E.g_sanl){shock(sa[0],sa[1],t,E.g_sanl,'rgba(255,209,102,.95)',90,5,.9);burst(sa[0],sa[1],t,E.g_sanl,[GOLD,'#fff',EL],34,160,.9,3.2);glow(sa[0],sa[1],60,'rgba(255,209,102,.5)',1)}
  TX('JUAN SEBASTIÁN',180,96,22,'#fff',t,E.g_juan-.1,{w:340,out:E.g_mando-.4});TX('ELCANO',180,138,42,EL,t,E.g_elcano-.15,{w:340,out:E.g_mando-.4});
  TX('TOMA EL MANDO',180,100,28,'#fff',t,E.g_mando-.1,{w:340,out:E.g_ind-.1});
  TG('LA VICTORIA',180,142,20,GOLD,INK,t,E.g_vict-.05,{out:E.g_llega-.2});
  TX('RODEA ÁFRICA',180,100,32,'#fff',t,E.g_afr-.12,{w:340,out:E.g_llega-.1});
  TG('6 SEP 1522',180,96,19,GOLD,INK,t,E.g_6-.05,{out:51.7});
  if(t>E.g_llega-.1)TX('LLEGA A SANLÚCAR',180,142,28,'#fff',t,E.g_llega-.1,{w:340,out:51.7});
}

// S8 más de doscientos hombres → solo dieciocho
function s8(t,u){
  TM.bg();
  stars(t,40,11,.35);
  const cols=14,rows=15;
  const keep=[];for(let i=0;i<18;i++)keep.push(Math.floor((i*37+11)%(cols*rows)));
  const kset=new Set(keep);
  for(let i=0;i<cols*rows;i++){
    const gx=i%cols,gy=Math.floor(i/cols),x=40+gx*21.5,y=200+gy*14.5;
    const ap=eb(nb(E.h2_200-.15+(i%29)*.012,E.h2_200+.35+(i%29)*.012,t));
    const dies=kset.has(i)?0:eo(nb(E.h2_18-.1+R(i)*.7,E.h2_18+.4+R(i)*.7,t));
    const keepk=kset.has(i)?eb(nb(E.h2_18,E.h2_18+.5,t)):0;
    const r=3.4*ap*(1-dies)*(1+.7*keepk);
    if(r>.1)circ(x,y,r,kset.has(i)&&t>E.h2_18?GOLD:mixc('#7fb4d9','#ff8a3d',dies),INK,.9)
    if(dies>.05&&dies<.9)circ(x,y-dies*18,1.6*(1-dies),'rgba(255,77,94,'+(1-dies)+')');
  }
  if(t>E.h2_18){shock(180,310,t,E.h2_18,'rgba(255,209,102,.9)',160,5,.9);glow(180,310,150,'rgba(255,209,102,.25)',1)}
  TX('MÁS DE 200',180,100,38,'#fff',t,E.h2_200-.15,{w:340,out:E.h2_18-.2});TX('HOMBRES',180,142,30,MG,t,E.h2_200,{w:340,out:E.h2_18-.2});
  if(t>E.h2_18-.1){sl('SOLO 18',180,110,56,GOLD,t,E.h2_18,{sh:'rgba(255,209,102,.6)'});TX('VUELVEN',180,172,34,'#fff',t,E.h2_vuel-.1,{w:340})}
}

// S9 cierre: ¿Magallanes o Elcano?
function s9(t,u){
  const c=mapaCam(t,[[55.0,-5,5,1.2],[69.8,-5,5,1.2]]);
  base(c,{dim:.5});
  const pm1=nb(55.6,56.9,t),pm2=nb(56.8,57.3,t);
  ruta(c,R_ATL,eio(nb(55.55,56.2,t)),MG,3);
  ruta(c,R_EST,eio(nb(56.15,56.35,t)),MG,3);
  ruta(c,R_PAC1,eio(nb(56.3,56.7,t)),MG,3);
  ruta(c,R_PAC2,eio(nb(56.7,57.25,t)),MG,3);
  const mac=P_(c,MAC);
  if(t>E.z_murio){cruz(mac[0]-6,mac[1]-2,6,RED,spring(t-E.z_murio,11,6));shock(mac[0],mac[1],t,E.z_murio,'rgba(255,77,94,.9)',50,3,.7)}
  const pe=eio(nb(E.z_elc,E.z_termino+.9,t));
  const h=ruta(c,R_EL,pe,EL,3.6);
  if(h&&pe<1)nao(h[0],h[1]-6,1.7,GOLD,Math.cos(h[2])<0,t);
  if(pe>=1){const sa=P_(c,SAN);burst(sa[0],sa[1],t,E.z_elc+.9+(E.z_termino-E.z_elc),[GOLD,EL,'#fff'],18,100,.8,2.6)}
  pin(c,SAN[0],SAN[1],MG,t,55.5,4);
  TX('ABRIÓ EL CAMINO',180,100,30,MG,t,E.z_abrio-.1,{w:340,out:E.z_quien-.2});
  TX('PERO MURIÓ',180,142,26,'#fff',t,E.z_murio-.1,{w:340,out:E.z_quien-.2});TX('SIN TERMINARLO',180,178,26,RED,t,E.z_term-.1,{w:340,out:E.z_quien-.2});
  TX('ELCANO LO TERMINÓ',180,240,30,EL,t,E.z_elc-.1,{w:340,out:E.z_quien-.2});
  const q=eo(nb(E.z_quien-.1,E.z_quien+.5,t));
  if(q>0){ctx.save();ctx.fillStyle='rgba(4,12,20,'+(.7*q)+')';ctx.fillRect(0,0,360,640);ctx.restore()}
  TX('¿QUIÉN MERECE',180,120,38,'#fff',t,E.z_quien-.1,{w:340});TX('EL TÍTULO?',180,166,40,GOLD,t,E.z_merece-.05,{w:340});
  TX('DE PRIMERO EN DAR LA VUELTA AL MUNDO',180,222,15,'#cfe6f5',t,E.z_prim-.1,{w:300});
  if(t>E.z_prim+.4){const a=spring(t-E.z_prim-.4,11,6),b2=spring(t-E.z_prim-.7,11,6);
    tr(92,340,a,0,()=>{rr(-76,-26,152,52,12);ctx.fillStyle=MG;ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=2.4;ctx.stroke();txt('MAGALLANES',0,1,19,'#fff',{st:INK,sw:4})});
    tr(268,340,b2,0,()=>{rr(-76,-26,152,52,12);ctx.fillStyle=EL;ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=2.4;ctx.stroke();txt('ELCANO',0,1,22,'#fff',{st:INK,sw:4})});
    txt('VS',180,340,17,GOLD,{st:INK,sw:4,sc:eb(nb(E.z_prim+1.0,E.z_prim+1.4,t))})}
  TG('COMENTA TU RESPUESTA',180,440,16,GOLD,INK,t,E.z_com-.05);
}

boot([s0,s1,s2,s3,s4,s5,s6,s7,s8,s9],TRS,{cap:{acc:'#ffd166'}});
