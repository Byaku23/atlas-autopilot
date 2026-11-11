// ===== Los generales que olvidamos — escenas =====
// ---------- S0: gancho ----------
function s0(t,u){
  bg('#06101a','#1d4559');
  rays(180,300,t,16,460,rgba(OR,.08),1,.04,.1);
  stars(t,40,3,.5);
  // sombreros del gancho
  const phase1=t<E.esp-.15;
  if(t<E.esp+.4){
    const out=ei((t-(E.esp-.15))/.5);
    const hx=lerp(180,98,eio(win(t,E.ale-.1,E.ale+.35)));
    const sc=lerp(1.55,1.0,eio(win(t,E.ale-.1,E.ale+.35)));
    withA(1-out,()=>{
      tr(0,-out*140,1,0,()=>{
        glow(hx,262,150,rgba(OR,.25));
        bigHat(hx,262+wob(t-E.nap,16,6)*6,sc*(1+.05*wob(t-E.nap,16,6)),INK,OR,'bic');
        if(t>E.ale-.05){const q=eb((t-E.ale)/.45);bigHat(262,258,q*1.0,INK,OR,'crest');}
        shock(hx,262,t,E.nap,OR,150,5,.7);shock(262,258,t,E.ale,OR,130,5,.6);
      });
    });
    TAG('NAPOLEÓN',98,352,17,OR,INK,t,E.nap,{out:E.esp-.2});
    TAG('ALEJANDRO MAGNO',262,352,15,PG,INK,t,E.ale,{out:E.esp-.2});
  }
  // mapa mini: España y América
  if(t>E.esp-.1){
    const q=eb((t-E.esp)/.5);
    const ho=1-win(t,E.gen-.35,E.gen+.1);
    withA(ho,()=>{
      tr(0,0,1,0,()=>{
        // océano
        ctx.save();ctx.globalAlpha*=.5*q;waves(300,t,'rgba(63,184,175,.25)',3,0,360,.05,0);ctx.restore();
        // Iberia (izq) y América (der)
        const ib=[[40,268],[88,254],[118,270],[112,306],[70,322],[44,300]];
        const am=[[240,170],[320,190],[340,260],[310,330],[290,420],[250,470],[232,380],[246,300],[226,230]];
        tr(0,0,q,0,()=>{poly(ib,'#c9a45c',OR,2.5);poly(am,'#c9a45c',OR,2.5)});
        // barco cruzando
        const px=lerp(100,250,eio(win(t,E.esp+.2,E.ame+.4)));
        ship(px,310-Math.sin((px-100)/150*Math.PI)*18,.6,{t,flag:RJ});
        // línea punteada
        ctx.save();ctx.setLineDash([5,6]);ctx.strokeStyle=rgba(PG,.5);ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(112,296);ctx.quadraticCurveTo(180,270,238,290);ctx.stroke();ctx.restore();
        shock(80,288,t,E.esp,OR,70,4,.6);shock(285,300,t,E.ame,OR,80,4,.6);
      });
    });
    if(t<E.gen)TAG('ESPAÑA',80,400,19,OR,INK,t,E.esp,{});
    if(t<E.gen)TAG('AMÉRICA',280,440,19,OR,INK,t,E.ame,{});
  }
  // cinco siluetas olvidadas
  if(t>E.gen-.1){
    const ho=1-win(t,E.cin-.4,E.cin-.1);
    withA(ho,()=>{
      for(let k=0;k<5;k++){
        const t0=E.gen+k*.2;const q=eb((t-t0)/.4);if(q<=0)continue;
        const x=36+k*72,y=380;
        const hats=['helm','tri','tri','cap','bic'];
        tr(x,y,q,0,()=>{
          glow(0,-40,40,rgba(OR,.18));
          fig(0,0,.95,{col:'#0a1822',rim:rgba(OR,.55),hat:hats[k],ph:0,arm:.2,rifle:k===0});
          qmark(0,-112,.75,t,k);
        });
      }
    });
    TX('LOS QUE CASI NADIE RECUERDA',180,160,22,PG,t,E.gen+.2,{w:300,out:E.ust-.3});
  }
  if(t>E.ust-.05){
    const q=eb((t-E.ust)/.4);const ho=1-win(t,E.cin-.4,E.cin-.1);
    withA(ho,()=>{
      tr(180,250,q,0,()=>{
        rr(-120,-56,240,100,22);ctx.fillStyle='#0e2a3a';ctx.fill();ctx.strokeStyle=OR;ctx.lineWidth=3;ctx.stroke();
        poly([[-20,44],[-4,44],[-26,66]],'#0e2a3a',OR,3);
        for(let i=0;i<3;i++)circ(-30+i*30,-6+Math.sin(t*6+i)*3*win(t,E.com,E.com+2),7,OR);
      });
      if(t>E.com)TAG('COMENTARIOS',180,330,20,OR,INK,t,E.com,{out:E.cin-.3});
    });
    TX('USTEDES LOS PIDIERON',180,160,24,PG,t,E.ust,{w:300,out:E.cin-.4});
  }
  // tarjeta "5"
  if(t>E.cin-.05){
    const q=eb((t-E.cin)/.35);
    tr(180,280,q,0,()=>{
      glow(0,0,130,rgba(OR,.45));
      rr(-50,-58,100,116,18);ctx.fillStyle=OR;ctx.fill();
      txt('5',0,-6,92,INK,{});
      txt('GENERALES',0,38,12,INK,{});
    });
    shock(180,280,t,E.cin,OR,150,6,.6);burst(180,280,t,E.cin,[OR,'#fff',RJ],26,170,.8,3);
  }
  // título inicial (cuadro 0)
  TX('LOS GENERALES',180,60,32,'#fff',t,-.6,{out:E.esp-.2,sh:'rgba(242,184,75,.7)'});
  TX('QUE OLVIDAMOS',180,102,36,OR,t,-.5,{out:E.esp-.2,sh:'rgba(224,82,60,.6)'});
  if(t>E.esp+.3&&t<E.gen)TX('ESPAÑA Y AMÉRICA',180,70,26,'#fff',t,E.esp+.3,{out:E.gen-.4});
}
// ---------- S1: Gran Capitán / Ceriñola ----------
function s1(t,u){
  bg('#1a1f33','#d98a4a');
  glow(250,330,200,rgba('#ffd9a0',.45));
  // colinas
  ctx.fillStyle='#35294a';ctx.beginPath();ctx.moveTo(-10,400);for(let x=-10;x<=370;x+=10)ctx.lineTo(x,380-24*Math.sin(x*.015+1)-10*Math.sin(x*.04));ctx.lineTo(370,640);ctx.lineTo(-10,640);ctx.fill();
  ctx.fillStyle='#2a203a';ctx.fillRect(-10,430,380,220);
  line(-10,432,370,432,rgba(OR,.4),2);
  // caballería carga
  const hx=[0,1,2].map(k=>lerp(-30-k*70,40+k*62,eio(cl((t-E.tr1)/(E.arc-E.tr1-.1)))));
  const spd=14*(1-win(t,E.arc,E.arc+.4));
  for(let k=0;k<3;k++){
    const fall=win(t,E.arc+.12+k*.09,E.arc+.7+k*.09);
    horse(hx[k]+fall*26,446+k*10,.95,{ph:t*spd+k,fall,col:INK,rim:RJ});
  }
  // arcabuceros
  for(let k=0;k<4;k++){
    const x=240+k*30;const rec=Math.max(0,1-(t-(E.arc+k*.06))/.25);
    if(t>E.tr1+.4+k*.1)fig(x,452+k*3,.95,{flip:true,rifle:true,hat:'helm',ph:0,col:INK,rim:OR,arm:.4+rec*.3});
    if(t>E.arc&&t<E.arc+.3){glow(x-24,418+k*3,28,rgba('#fff3b0',.9*(1-(t-E.arc-k*.06)*3)))}
    smoke(x-24,418+k*3,t,E.arc+k*.06,22,'220,220,220',1.4);
  }
  shock(180,430,t,E.arc,OR,200,6,.7);burst(220,420,t,E.arc,['#fff3b0',OR,RJ],28,180,.8,3);
  // textos
  TX('EL GRAN CAPITÁN',180,60,32,'#fff',t,E.tr1+.1,{w:320,sh:'rgba(242,184,75,.6)'});
  TAG('CERIÑOLA',100,122,20,OR,INK,t,E.cer,{});
  TAG('1503',250,122,20,PG,INK,t,E.tres,{});
  if(t>E.fue)TAG('ARMAS DE FUEGO',180,176,18,RJ,'#fff',t,E.fue,{});
  TAG('ARCABUCES',275,340,15,OR,INK,t,E.arc,{});
  TAG('CABALLERÍA',92,340,15,RJ,'#fff',t,E.cab,{});
}
// ---------- S2: Bazán ----------
function s2(t,u){
  bg('#050b18','#143556');
  stars(t,50,7,.7);
  glow(290,120,120,rgba('#fff3d0',.35));circ(290,120,26,'#fff3d0');circ(298,114,24,'#0a1c30');
  // barcos
  const sail=(k,base)=>{const x=lerp(-60,420,((t*.045+k*.19+base)%1));return x};
  waves(380,t,'#0a2540',5,-40,400,.045,0);
  for(let k=0;k<5;k++){const x=lerp(-40,380,(t-E.tr2)/8+k*.19);const xx=((x+40)%460)-40;ship(xx,372+Math.sin(t*1.6+k)*3+k%2*14,.78+k%2*.1,{t,k,flag:RJ,col:'#04101c',rim:OR})}
  waves(396,t,'#0d2f50',6,-40,400,.05,1.7);
  waves(430,t,'#08203a',7,-40,400,.04,3.1);
  // fogonazos en Lepanto y Azores
  [E.lep,E.azo].forEach(ts=>{burst(250,330,t,ts,['#fff3b0',OR,RJ],24,150,.7,3);shock(250,340,t,ts,OR,160,5,.6);if(t>ts&&t<ts+.2)glow(250,340,70,rgba('#fff3b0',.8))});
  // títulos
  TX('ÁLVARO DE BAZÁN',180,56,31,'#fff',t,E.tr2+.1,{w:320,sh:'rgba(242,184,75,.6)'});
  TAG('LEPANTO',100,112,20,OR,INK,t,E.lep,{});
  TAG('AZORES',260,112,20,PG,INK,t,E.azo,{});
  // pergamino con la cita
  if(t>E.cerv-.05){
    const q=eb((t-E.cerv)/.5);const jl=win(t,E.jam,E.jam+.3);
    tr(180,265,1,0,()=>{
      ctx.save();ctx.scale(1,Math.max(.01,q));
      glow(0,0,170,rgba(PG,.3));
      rr(-150,-62,300,124,10);ctx.fillStyle=PG;ctx.fill();ctx.strokeStyle='#8a6a2c';ctx.lineWidth=3;ctx.stroke();
      rr(-158,-70,316,14,7);ctx.fillStyle='#b38a3a';ctx.fill();rr(-158,56,316,14,7);ctx.fill();
      ctx.restore();
    });
    mtext('CERVANTES LO LLAMÓ',180,222,14,'#5a3a14',t,E.cerv+.25,{w:280,wt:'800'});
    mtext('"JAMÁS VENCIDO CAPITÁN"',180,272,27,'#2a1608',t,E.jam-.05,{w:280,hl:[0,1,2],hc:'#b4281c'});
    if(jl>0){line(60,316,60+jl*240,316,RJ,3)}
    shock(180,265,t,E.jam,OR,180,6,.7);
  }
}
// ---------- S3: Blas de Lezo / Cartagena ----------
function s3(t,u){
  const q=eio(win(t,E.car-.3,E.car+.3));          // héroe -> medallón
  const bay=win(t,E.car-.25,E.car+.2);
  bg('#0b1a22','#24475a');
  rays(180,260,t,12,420,rgba(OR,.06),1,.03,.1);
  // héroe
  const hs=lerp(3.2,.8,q),hx=lerp(180,50,q),hy=lerp(430,160,q);
  const sway=wob(t-E.lez,12,5)*.03;
  tr(hx,hy,1,sway*(1-q),()=>{
    glow(0,-hs*40,hs*70,rgba(OR,.28));
    fig(0,0,hs,{col:'#07131b',rim:OR,hat:'tri',peg:true,patch:true,stiff:true,arm:.15,ph:0});
  });
  if(q>0.05){withA(q,()=>{circ(50,128,36,null,OR,2.5)})}
  // marcas de las heridas
  const mark=(ts,px,py,lx,ly,txtv,tx,ty,col)=>{
    if(t<ts)return;const o=1-win(t,E.car-.45,E.car-.15);
    withA(o,()=>{
      const k=win(t,ts,ts+.3);
      line(px,py,lerp(px,lx,k),lerp(py,ly,k),rgba(col,.9),2.4);
      shock(px,py,t,ts,col,46,4,.6);circ(px,py,5+Math.sin(t*8)*1.5,col);
    });
    TAG(txtv,tx,ty,17,col,col===OR?INK:'#fff',t,ts+.12,{out:E.car-.45});
  };
  mark(E.pie,165,388,120,448,'SIN UNA PIERNA',104,452,RJ);
  mark(E.ojo,196,188,268,150,'SIN UN OJO',270,130,OR);
  mark(E.bra,142,305,86,300,'BRAZO INÚTIL',86,284,RJ);
  // bahía
  if(bay>0){
    withA(bay,()=>{
      ctx.save();rect_fill();ctx.restore();
    });
  }
  function rect_fill(){
    // cielo y mar
    const g=ctx.createLinearGradient(0,0,0,640);g.addColorStop(0,'#0b1a22');g.addColorStop(.5,'#2a5876');g.addColorStop(1,'#0a2a40');ctx.fillStyle=g;ctx.fillRect(0,0,360,640);
    // fuerte
    const fy=300;
    ctx.fillStyle='#0a141c';ctx.fillRect(10,fy,120,110);
    for(let i=0;i<5;i++)ctx.fillRect(10+i*26,fy-14,16,16);
    ctx.strokeStyle=OR;ctx.lineWidth=2;ctx.strokeRect(10,fy,120,110);
    // asta y bandera
    const flagH=lerp(52,0,eo(win(t,E.gan+.2,E.gan+1.0)));
    line(96,fy-6,96,236,PG,2.5);
    poly([[96,236+flagH],[134,244+flagH],[96,254+flagH]],RJ,PG,1.2);
    // cañón + disparo
    ctx.fillStyle='#0a141c';rr(112,fy+40,34,12,5);ctx.fill();circ(118,fy+58,8,'#0a141c',OR,1.5);
    // mar
    waves(400,t,'#0a2740',4,-40,400,.05,0);
    // 200 barcos
    const n=36;glow(250,170,220,rgba('#ffd9a0',.28));
    for(let i=0;i<n;i++){
      const t0=E.dos+i*.025,qq=eb((t-t0)/.3);if(qq<=0)continue;
      const col=i%9,row=Math.floor(i/9);
      const flee=Math.max(0,t-E.gan-.1-(i%6)*.04);
      const x=160+col*21+row*7+flee*flee*220,y=346+row*30+Math.sin(t*1.8+i)*2;
      tr(x,y,qq,0,()=>ship(0,0,.3,{t,k:i,col:'#04101c',rim:'#c9d6dd',sail:'#e8eef2',flag:null}));
    }
    waves(432,t,'#0a2a45',5,-40,400,.05,2);
    burst(122,fy+46,t,E.gan,['#fff3b0',OR,RJ],24,160,.8,3);shock(122,fy+46,t,E.gan,OR,140,5,.6);
  }
  TX('BLAS DE LEZO',180,56,31,'#fff',t,E.tr3+.1,{w:320,out:E.car-.45,sh:'rgba(242,184,75,.6)'});
  TX('CARTAGENA DE INDIAS',180,56,25,'#fff',t,E.car-.1,{w:320,sh:'rgba(242,184,75,.6)'});
  if(t>E.dos-.1){
    const v=countV(0,200,t,E.dos,.9);
    txt('≈'+fmtN(Math.round(v)),250,160,50,PG,{st:INK,sw:6,sc:1+.06*wob(t-E.dos,14,5)});
    TAG('BARCOS BRITÁNICOS',250,196,14,RJ,'#fff',t,E.dos+.1,{});
  }
  if(t>E.gan)slam('¡GANÓ!',230,290,50,OR,t,E.gan,{st:INK,sw:7,sh:'rgba(242,184,75,.8)'});
}
// ---------- S4: San Martín / Andes ----------
function ridge(x){return 420-210*Math.exp(-Math.pow((x-215)/95,2))-80*Math.exp(-Math.pow((x-60)/55,2))+8*Math.sin(x*.07)}
function lead(tt){const x=lerp(-40,380,cl((tt-44.55)/(50.9-44.55)));return [x,ridge(x)-12]}
function s4(t,u){
  const f=follow(lead,t,.3);const k=eio(win(t,E.mar+.8,E.and-.2));
  const c={x:lerp(180,f[0]+40,k),y:lerp(330,f[1]-60,k),z:lerp(1,1.45,k),r:0};
  bg('#122c44','#e8c58a');
  world(c,()=>{
    glow(300,200,220,rgba('#ffe3a8',.55));
    // fondo
    mount(60,430,230,220,'#2c4560','#d7e6ee');
    mount(330,430,260,250,'#2c4560','#d7e6ee');
    mount(215,430,300,300,'#1d3248','#ffffff');
    // primer plano (cresta)
    ctx.beginPath();ctx.moveTo(-200,700);for(let x=-200;x<=560;x+=8)ctx.lineTo(x,ridge(x)+0);ctx.lineTo(560,700);ctx.closePath();ctx.fillStyle='#0a1520';ctx.fill();
    ctx.strokeStyle=rgba('#d7e6ee',.6);ctx.lineWidth=2.2;ctx.beginPath();for(let x=-200;x<=560;x+=8){x===-200?ctx.moveTo(x,ridge(x)):ctx.lineTo(x,ridge(x))}ctx.stroke();
    // ejército
    for(let i=0;i<16;i++){
      const [lx]=lead(t);const x=lx-i*15;if(x<-60||x>420)continue;
      const mule=i%4===3;
      fig(x,ridge(x)+2,.42,{col:'#05101a',rim:OR,hat:i%5===0?'bic':'cap',ph:t*9+i,rifle:i%3===0,arm:.3});
    }
    // bandera guía
    const [lx2,ly2]=lead(t);
    line(lx2+2,ly2+8,lx2+2,ly2-40,PG,1.8);poly([[lx2+2,ly2-40],[lx2+22,ly2-34+Math.sin(t*6)*2],[lx2+2,ly2-26]],RJ,PG,.8);
    shock(215,150,t,E.and,'#fff',120,5,.8);
  });
  TX('SAN MARTÍN',180,56,34,'#fff',t,E.tr4+.1,{sh:'rgba(5,16,26,.7)'});
  TAG('LOS ANDES',100,112,19,OR,INK,t,E.and,{});
  if(t>E.cin2-.05){
    const v=countV(0,5000,t,E.cin2,1.0);
    txt('+'+fmtN(Math.round(v)),250,168,44,PG,{st:INK,sw:6,sc:1+.06*wob(t-E.cin2,14,5)});
    TAG('HOMBRES',250,204,16,OR,INK,t,E.cin2+.2,{});
  }
  if(t>E.chi-.05){
    slam('CHILE',180,300,56,OR,t,E.chi,{st:INK,sw:7,sh:'rgba(242,184,75,.8)'});
    burst(180,300,t,E.chi,[OR,'#fff',RJ],30,200,.9,3);
  }
}
// ---------- S5: Bolívar / seis países ----------
function s5(t,u){
  bg('#06141e','#12374a');
  // cuadrícula
  ctx.strokeStyle=rgba(PG,.07);ctx.lineWidth=1;for(let i=0;i<12;i++){line(0,60+i*50,360,60+i*50,rgba(PG,.07),1);line(i*32,0,i*32,640,rgba(PG,.07),1)}
  stars(t,30,9,.3);
  // mapa
  tr(30,-12,.85,0,()=>{
    poly(SA,'#10293a',rgba(PG,.35),2);
    const ev=[['PANAMÁ',E.pan],['COLOMBIA',E.col],['VENEZUELA',E.ven],['ECUADOR',E.ecu],['PERÚ',E.per],['BOLIVIA',E.bov]];
    // orden de aparición según la voz
    const order=[['VENEZUELA',E.ven],['COLOMBIA',E.col],['ECUADOR',E.ecu],['PERÚ',E.per],['BOLIVIA',E.bov],['PANAMÁ',E.pan]];
    order.forEach(([n,ts],i)=>{
      const P=PAIS[n];const q=spring(t-ts,18,6);if(t<ts)return;
      let cx=0,cy=0;P.p.forEach(p=>{cx+=p[0];cy+=p[1]});cx/=P.p.length;cy/=P.p.length;
      tr(cx,cy,1+.12*Math.max(0,wob(t-ts,16,6)),0,()=>{tr(-cx,-cy,1,0,()=>{poly(P.p,rgba(P.c,.9),'#fff',2)})});
      shock(cx,cy,t,ts,P.c,70,4,.6);
      txt(n,P.l[0],P.l[1]+(n==='PANAMÁ'?-8:0),n==='PANAMÁ'?10:12,'#fff',{st:INK,sw:3.5,al:cl((t-ts)*5)});
      medal(cx,cy+(n==='PANAMÁ'?22:-18),10,i+1,ts+.05,t,{});
    });
  });
  // guerrero con la mano arriba (silueta)
  const hf=win(t,E.bol,E.bol+.5);
  if(hf>0)tr(0,0,1,0,()=>{fig(46,468,1.15*eb(hf),{col:'#05101a',rim:OR,hat:'bic',arm:Math.PI*.82,ph:0});});
  TX('SIMÓN BOLÍVAR',180,56,32,'#fff',t,E.tr5+.1,{w:320,sh:'rgba(242,184,75,.6)'});
  TX('AYUDÓ A LIBERAR',180,100,19,PG,t,E.bol+.5,{});
  // insignia 6 PAÍSES
  if(t>E.seis-.05){
    const q=eb((t-E.seis)/.4);
    tr(180,496,q,0,()=>{rr(-90,-18,180,36,18);ctx.fillStyle=OR;ctx.fill();txt('6 PAÍSES ACTUALES',0,1,15,INK,{})});
    if(t<E.seis+.7)shock(180,496,t,E.seis,OR,100,5,.6);
  }
}
// ---------- S6: cierre / debate ----------
const NOMS=['GRAN CAPITÁN','BAZÁN','LEZO','SAN MARTÍN','BOLÍVAR'];
function s6(t,u){
  bg('#06101a','#1d4559');
  rays(180,320,t,16,460,rgba(OR,.06),1,.03,.1);
  stars(t,30,5,.4);
  const dbt=win(t,E.cual-.1,E.cual+.4);
  const m=1-win(t,E.cual-.2,E.cual+.25);   // medallones previos al debate
  TX('CINCO GENERALES',180,60,30,'#fff',t,E.tr6+.1,{w:320,out:E.ni-.3});
  // medallones
  for(let k=0;k<5;k++){
    const hats=['helm','tri','tri','cap','bic'];
    const t0=E.cing+k*.12;const qq=eb((t-t0)/.4);if(qq<=0)continue;
    const x=36+k*72;
    const y=lerp(168,Math.min(440,400),0)*1;
    tr(x,lerp(190,424,eio(dbt)),qq,0,()=>{
      circ(0,0,30,'#0e2a3a',OR,2.6);
      withA(1,()=>{ctx.save();ctx.beginPath();ctx.arc(0,0,28,0,TAU);ctx.clip();fig(0,24,.62,{col:'#05101a',rim:OR,hat:hats[k],ph:0,arm:.2});ctx.restore()});
    });
    if(dbt>0)txt(NOMS[k],x,lerp(190,424,eio(dbt))+42,9.5,PG,{st:INK,sw:3,al:dbt});
  }
  // "Ni un Napoleón"
  if(t>E.ni-.05){
    const o=1-win(t,E.lib-2.2,E.lib-1.9);
    withA(o,()=>{
      const q=eb((t-E.ni)/.35);
      tr(180,330,q,0,()=>{bigHat(0,0,.95,'#05101a',OR,'bic')});
      const x=win(t,E.nap2,E.nap2+.3);
      if(x>0){tr(180,330,1,0,()=>{line(-70,-60,-70+140*x,50,RJ,9);line(70,-60,70-140*x,50,RJ,9)});shock(180,330,t,E.nap2,RJ,140,6,.6)}
    });
    TX('NI UN NAPOLEÓN',180,98,30,PG,t,E.ni,{w:320,out:E.lib-2.2});
  }
  // libros
  if(t>E.lib-2.1){
    const o=1-win(t,E.cual-.3,E.cual);
    withA(o,()=>{
      const q=eb((t-(E.lib-2.0))/.4);
      tr(180,320,q,0,()=>{
        rr(-70,-50,140,100,8);ctx.fillStyle='#0e2a3a';ctx.fill();ctx.strokeStyle=OR;ctx.lineWidth=3;ctx.stroke();
        line(0,-50,0,50,OR,2.4);
        for(let i=0;i<4;i++){line(-58,-30+i*18,-12,-30+i*18,rgba(PG,.35),3);line(12,-30+i*18,58,-30+i*18,rgba(PG,.35),3)}
        // generales ausentes: huecos
        const g=win(t,E.lib,E.lib+.6);withA(g,()=>{line(-70,-50,70,50,RJ,5);line(70,-50,-70,50,RJ,5)});
      });
    });
    TX('CASI NINGUNO SALE EN LOS LIBROS',180,98,22,PG,t,E.lib-2.0,{w:300,out:E.cual-.3});
  }
  // debate
  if(t>E.cual-.1){
    TX('¿CUÁL FUE',180,66,32,'#fff',t,E.cual,{});
    TX('EL MEJOR?',180,106,38,OR,t,E.cual+.12,{sh:'rgba(242,184,75,.7)'});
    for(let k=0;k<5;k++){
      const x=36+k*72;const h0=win(t,E.mej-.2,E.mej+.5)*(70+60*(.5+.5*Math.sin(t*1.6+k*1.7)));
      const hh=Math.max(0,h0*dbt);
      const cols=[OR,TL,RJ,'#9a7bff','#7ddc6a'];
      ctx.save();bar(x-18,380-hh,36,hh,cols[k],8);ctx.restore();
    }
  }
  if(t>E.coment-.05){
    const q=eb((t-E.coment)/.4);
    tr(180,498,q*(1+.03*Math.sin(t*8)),0,()=>{glow(0,0,100,rgba(OR,.35));rr(-96,-22,192,44,22);ctx.fillStyle=OR;ctx.fill();txt('COMENTA TU RESPUESTA',0,1,14.5,INK,{})});
    if(t<E.coment+.6)shock(180,498,t,E.coment,OR,120,5,.5);
  }
  if(t>E.sig-.05)TAG('SÍGUEME PARA MÁS',180,140,16,PG,INK,t,E.sig,{});
}
boot([s0,s1,s2,s3,s4,s5,s6],TRS,{cap:{acc:OR}});
