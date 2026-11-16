// ===== El caballo de Calígula — recursos =====
CAP.acc='#ffd27a';
const PUR='#2a1240',PUR2='#5b1f7a',PUR3='#8a3aa8',GOLD='#ffd27a',CRIM='#b3262e',IVO='#f1e6c6',MARB='#d9d0bd',MARB2='#9d93a8',INK='rgba(20,8,36,.82)',LEAF='#6fae52',GREEN='#2f8f4a';
const TX=(s,x,y,sz,col,t,t0,o={})=>mtext(s,x,y,sz,col,t,t0,Object.assign({stroke:INK,sw:Math.max(4,sz*.2)},o));
const TG=(s,x,y,sz,b,f,t,t0,o={})=>tag(s,x,y,sz,b,f,t,t0,o);
const FL=520;   // suelo general
// caballo de perfil mirando a la derecha. (0,0)=pezuñas. o: flip, ph (patas), head(0..1 baja la cabeza), t, col, mane, rim, wreath, collar, cloak, al
function horse(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);if(o.al!==undefined)ctx.globalAlpha*=o.al;
  const c=o.col||'#f4efe6',d=o.dark||'#bdb3a2',m=o.mane||'#5a3a1e',a=Math.sin(o.ph||0)*7,hd=(o.head||0)*1.1,sw=Math.sin((o.t||0)*3)*4;
  poly([[-30,-62],[-54,-48+sw],[-60,-22+sw],[-48,-32],[-32,-48]],m);
  line(-22,-44,-24-a,-3,d,8);line(16,-44,18+a,-3,d,8);circ(-24-a,-2,3.6,'#3a2a20');circ(18+a,-2,3.6,'#3a2a20');
  ctx.fillStyle=c;ctx.beginPath();ctx.ellipse(-2,-54,38,22,0,0,TAU);ctx.fill();
  line(-16,-44,-18+a,-3,c,8.5);line(24,-44,26-a,-3,c,8.5);circ(-18+a,-2,3.6,'#3a2a20');circ(26-a,-2,3.6,'#3a2a20');
  if(o.cloak){poly([[-30,-70],[20,-72],[24,-46],[-34,-44]],o.cloak);line(-30,-70,20,-72,GOLD,2.4);line(-34,-44,24,-46,GOLD,1.6)}
  ctx.save();ctx.translate(26,-62);ctx.rotate(hd*.85);ctx.translate(-26,62);
  poly([[14,-64],[32,-62],[50,-96],[37,-101]],c);
  poly([[12,-64],[28,-106],[38,-103],[24,-60]],m);
  poly([[37,-101],[51,-103],[70,-82],[64,-75],[49,-86]],c);
  poly([[40,-101],[42,-111],[46,-102]],c);circ(53,-93,1.9,'#141420');circ(66,-80,1.3,'#7a6a5a');
  if(o.collar){line(20,-64,40,-90,GOLD,1.8);for(let k=0;k<5;k++){const gx=22+k*4.6,gy=-66-k*5.6;circ(gx,gy,2.9,['#e0314b','#37c8e6','#ffd27a'][k%3])}}
  if(o.wreath){for(let k=0;k<8;k++){const an=-2.6+k*.32,lx=44+Math.cos(an)*8,ly=-103+Math.sin(an)*5;ctx.save();ctx.translate(lx,ly);ctx.rotate(an+1.4);ctx.fillStyle=k%2?LEAF:'#8bc86a';ctx.beginPath();ctx.ellipse(0,0,4.2,1.9,0,0,TAU);ctx.fill();ctx.restore()}}
  ctx.restore();
  if(o.rim){ctx.strokeStyle=o.rim;ctx.lineWidth=1.5;ctx.globalAlpha*=.75;ctx.beginPath();ctx.ellipse(-2,-54,36,19,0,-2.9,-1.4);ctx.stroke()}
  ctx.restore()}
// corona de laurel. (x,y)=centro, r radio, rot
function wreath(x,y,r,rot,a=1){ctx.save();ctx.translate(x,y);ctx.rotate(rot||0);ctx.globalAlpha*=a;
  for(let k=0;k<14;k++){const an=.55+k*.36,lx=Math.cos(an)*r,ly=Math.sin(an)*r*.8;ctx.save();ctx.translate(lx,ly);ctx.rotate(an+1.57);ctx.fillStyle=k%2?LEAF:'#9fd67a';ctx.beginPath();ctx.ellipse(0,0,r*.2,r*.085,0,0,TAU);ctx.fill();ctx.restore()}
  circ(0,r*.8+2,r*.07,GOLD);ctx.restore()}
function senator(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s,s);const sink=o.sink||0;ctx.translate(0,sink*20);
  poly([[-13,0],[13,0],[10,-48],[-10,-48]],o.col||IVO);poly([[-13,0],[-3,0],[-3,-46],[-10,-44]],'#d6c9a2');poly([[-10,-40],[12,-30],[11,-24],[-10,-34]],PUR2);
  circ(0,-58,8.5,'#d9a784');ctx.fillStyle='#6a4a2a';ctx.beginPath();ctx.arc(0,-60,8.5,Math.PI,TAU);ctx.fill();
  if(o.q){txt('?',0,-80-4*Math.sin(o.q*6),16,GOLD,{st:INK,sw:4})}ctx.restore()}
function hooded(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);
  poly([[-18,0],[18,0],[12,-44],[0,-70],[-12,-44]],o.col||'#1b0d2c');poly([[-5,-54],[6,-54],[5,-46],[-4,-46]],'#0a0412');
  if(o.eyes){circ(-1.5,-50,1.4,'#ff4a3a');circ(3,-50,1.4,'#ff4a3a')}
  if(o.rim){ctx.strokeStyle=o.rim;ctx.lineWidth=1.3;ctx.globalAlpha*=.7;ctx.beginPath();ctx.moveTo(0,-70);ctx.lineTo(12,-44);ctx.lineTo(18,0);ctx.stroke()}ctx.restore()}
function crowdFig(x,y,s,t,i,col){ctx.save();ctx.translate(x,y);ctx.scale(s,s);const b=Math.sin(t*9+i*1.7)*2;
  poly([[-9,0],[9,0],[7,-34],[-7,-34]],col);circ(0,-42,7,col);line(6,-30,13,-46+b,col,4.5);line(-6,-30,-13,-46-b,col,4.5);circ(14,-48+b,3.4,col);circ(-14,-48-b,3.4,col);ctx.restore()}
function pillar(x,y,h,w,t,o={}){ctx.fillStyle=MARB;ctx.fillRect(x-w/2,y-h,w,h);ctx.fillStyle='rgba(255,255,255,.35)';ctx.fillRect(x-w/2,y-h,w*.22,h);ctx.fillStyle='rgba(60,40,90,.28)';ctx.fillRect(x+w*.22,y-h,w*.28,h);
  ctx.fillStyle=MARB2;ctx.fillRect(x-w*.7,y-h-8,w*1.4,8);ctx.fillRect(x-w*.65,y-6,w*1.3,6);
  if(o.shine!==undefined){const k=o.shine;if(k>0&&k<1){ctx.save();ctx.globalAlpha=.55*Math.sin(k*Math.PI);ctx.fillStyle='#fff';ctx.fillRect(x-w/2,y-h+h*k-14,w,14);ctx.restore()}}}
function villa(x,y,s,t,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s,s);glow(0,-60,130,'rgba(255,200,120,.35)',o.light===undefined?.8:o.light);
  ctx.fillStyle=IVO;ctx.fillRect(-70,-80,140,80);poly([[-80,-80],[0,-124],[80,-80]],'#b3552e');poly([[-80,-80],[0,-124],[0,-118],[-70,-80]],'#d0703f');
  ctx.fillStyle='#4a2a5a';rr(-14,-52,28,52,12);ctx.fill();ctx.fillStyle='#ffd27a';ctx.fillRect(-52,-62,16,20);ctx.fillRect(36,-62,16,20);
  for(let k=-2;k<=2;k++){if(k)ctx.fillStyle=MARB,ctx.fillRect(k*28-3,-80,6,80)}ctx.restore()}
function servant(x,y,s,t,i){ctx.save();ctx.translate(x,y);ctx.scale(s,s);const b=Math.sin(t*4+i)*3;
  poly([[-8,0],[8,0],[6,-34],[-6,-34]],i%2?'#c9b88a':'#8fb0a0');circ(0,-41,6.5,'#cf9a78');line(5,-30,15,-40+b,i%2?'#c9b88a':'#8fb0a0',4);
  poly([[15,-40+b],[28,-52+b],[30,-38+b]],'#ffd27a');ctx.restore()}
function manger(x,y,s,t,k=1){ctx.save();ctx.translate(x,y);ctx.scale(s*k,s*k);
  poly([[-44,-24],[44,-24],[36,0],[-36,0]],IVO);poly([[-44,-24],[44,-24],[44,-20],[-44,-20]],'#fffaf0');poly([[-44,-24],[-36,0],[-30,0],[-38,-24]],'#d9cba4');
  ctx.fillStyle='#d9b24a';for(let i=0;i<9;i++){const hx=-34+i*8.5;ctx.fillRect(hx,-30-R(i)*6,2,10)}
  ctx.fillStyle='#b3262e';ctx.fillRect(-4,-14,8,6);ctx.restore()}
function oatBowl(x,y,s,t,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.fillStyle='#c9a45a';ctx.beginPath();ctx.moveTo(-26,-14);ctx.quadraticCurveTo(0,16,26,-14);ctx.fill();ctx.fillStyle='#e8d29a';ctx.beginPath();ctx.ellipse(0,-14,26,8,0,0,TAU);ctx.fill();
  for(let i=0;i<14;i++){const gx=-20+R(i)*40,gy=-17+R(i*2)*5;ctx.fillStyle=o.gold&&i%2?'#ffd24a':'#bba46a';ctx.fillRect(gx,gy,3.5,1.6)}ctx.restore()}
function spiral(x,y,r,t,col,w=2.4){ctx.save();ctx.translate(x,y);ctx.rotate(t*5);ctx.strokeStyle=col;ctx.lineWidth=w;ctx.beginPath();for(let a=0;a<18;a+=.3){const rr_=a/18*r;ctx.lineTo(Math.cos(a)*rr_,Math.sin(a)*rr_)}ctx.stroke();ctx.restore()}
function jester(x,y,s,t){ctx.save();ctx.translate(x,y);ctx.scale(s,s);const w=Math.sin(t*6)*.08;
  ctx.save();ctx.rotate(w);poly([[-30,0],[-44,-44],[-18,-18]],CRIM);poly([[-18,-18],[0,-56],[18,-18]],'#2a8aa8');poly([[18,-18],[44,-44],[30,0]],CRIM);poly([[-30,0],[30,0],[18,-18],[-18,-18]],'#ffd27a');
  circ(-44,-46,5,GOLD);circ(0,-58,5,GOLD);circ(44,-46,5,GOLD);ctx.restore();ctx.restore()}
function papel(x,y,w,h,title,body,o={}){ctx.save();ctx.translate(x,y);ctx.scale(o.s||1,o.s||1);ctx.fillStyle='#e9d8a8';rr(-w/2,-h/2,w,h,8);ctx.fill();ctx.fillStyle='#d6c08a';ctx.beginPath();ctx.ellipse(0,-h/2,w/2,7,0,0,TAU);ctx.fill();ctx.beginPath();ctx.ellipse(0,h/2,w/2,7,0,0,TAU);ctx.fill();
  txt(title,0,-h/2+22,15,'#5a2a10',{wt:'900'});ctx.strokeStyle='rgba(70,45,20,.45)';ctx.lineWidth=2.2;for(let i=0;i<3;i++){ctx.beginPath();ctx.moveTo(-w/2+16,-h/2+40+i*9);ctx.lineTo(w/2-16-R(i+3)*20,-h/2+40+i*9);ctx.stroke()}
  if(body)txt(body,0,h/2-24,o.bs||17,o.bc||'#2a1240',{wt:'900'});ctx.restore()}
function night(t){bg('#1b0b30','#4a1d66');stars(t,45,3,.55)}
function sword(x,y,s,rot){ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.scale(s,s);poly([[-4,0],[4,0],[2,-46],[-2,-46],[0,-52]],'#dfe5f0');rr(-11,0,22,4,2);ctx.fillStyle='#c9964a';ctx.fill();rr(-2.5,4,5,14,2);ctx.fillStyle='#5a3a1c';ctx.fill();ctx.restore()}
