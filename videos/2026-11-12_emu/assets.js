// ===== Gran Guerra del Emú — recursos (2.5D: capas con paralaje sobre el campo de trigo australiano) =====
CAP.acc='#ff9a3d';
const INK='#140e12',GOLDW='#e8b64a',GOLDD='#b9852a',EARTH='#a8512f',EARTH2='#6e2f22',SKY0='#2b2a4a',SKY1='#ff9a5a',CR='#f6e7c8',EMUC='#5a4030',EMUR='#ffb066',RED='#d6402f',KHA='#6b6a3a';
const TX=(s,x,y,sz,col,t,t0,o={})=>mtext(s,x,y,sz,col,t,t0,Object.assign({stroke:INK,sw:Math.max(4,sz*.2)},o));
const TG=(s,x,y,sz,b,f,t,t0,o={})=>tag(s,x,y,sz,b,f,t,t0,Object.assign({stroke:INK},o));
const GY=470; // suelo (mundo)
// ---- emú de perfil mirando a la derecha. (0,0)=pies. o: ph (fase de carrera), flip, al, col, rim, sil
function emu(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);if(o.al!==undefined)ctx.globalAlpha*=o.al;
  const c=o.sil||o.col||EMUC,ph=o.ph||0,run=o.run===undefined?1:o.run,bob=-Math.abs(Math.sin(ph))*3*run;ctx.translate(0,bob);
  const leg=(hx,k)=>{const a=Math.sin(ph+k)*.7*run,b2=Math.sin(ph+k-.9)*.8*run;ctx.strokeStyle=INK;ctx.lineWidth=3.4;ctx.lineCap='round';ctx.lineJoin='round';
    const kx=hx+Math.sin(a)*13,ky=-24+Math.cos(a)*13,fx=kx-Math.sin(b2)*12,fy=Math.min(0,ky+Math.cos(b2)*12+bob*-1);ctx.beginPath();ctx.moveTo(hx,-27);ctx.lineTo(kx,ky);ctx.lineTo(fx,Math.min(0-bob,fy));ctx.stroke();ctx.lineWidth=1.8;ctx.strokeStyle=o.rim||c;ctx.stroke()};
  leg(-3,0);leg(4,Math.PI);
  // cuerpo (plumas desordenadas)
  ctx.fillStyle=INK;ctx.beginPath();ctx.ellipse(0,-36,22,16,-.1,0,TAU);ctx.fill();ctx.fillStyle=c;ctx.beginPath();ctx.ellipse(0,-36,20,14.5,-.1,0,TAU);ctx.fill();
  if(!o.sil){ctx.strokeStyle='rgba(20,10,5,.35)';ctx.lineWidth=1;for(let i=0;i<7;i++){ctx.beginPath();ctx.moveTo(-14+i*5,-44);ctx.quadraticCurveTo(-12+i*5,-36,-15+i*5,-28);ctx.stroke()}}
  // cola de plumas
  ctx.fillStyle=c;ctx.beginPath();ctx.ellipse(-21,-34,9,7,.3,0,TAU);ctx.fill();
  // cuello y cabeza
  const nk=o.neck===undefined?0:o.neck;ctx.strokeStyle=INK;ctx.lineWidth=7.5;ctx.beginPath();ctx.moveTo(12,-42);ctx.quadraticCurveTo(18,-56-nk*6,19+nk*8,-70+nk*14);ctx.stroke();ctx.strokeStyle=c;ctx.lineWidth=5;ctx.stroke();
  const hx=19+nk*8,hy=-70+nk*14;ctx.fillStyle=INK;ctx.beginPath();ctx.ellipse(hx+2,hy,7.5,5.5,.15,0,TAU);ctx.fill();ctx.fillStyle=o.sil?c:'#7a5a44';ctx.beginPath();ctx.ellipse(hx+2,hy,6,4.2,.15,0,TAU);ctx.fill();
  ctx.fillStyle=INK;ctx.beginPath();ctx.moveTo(hx+7,hy-1.5);ctx.lineTo(hx+15,hy+1);ctx.lineTo(hx+7,hy+2.5);ctx.fill();
  if(!o.sil){ctx.fillStyle='#ffd27a';ctx.beginPath();ctx.arc(hx+3,hy-1.5,1.5,0,TAU);ctx.fill();ctx.fillStyle=INK;ctx.beginPath();ctx.arc(hx+3.3,hy-1.5,.7,0,TAU);ctx.fill()}
  ctx.restore()}
// ---- soldado de perfil (silueta con sombrero de ala ancha levantada). o: flip, aim (0..1 apuntando), ph, col
function soldier(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);const c=o.col||'#1a1620',ph=o.ph||0,a=Math.sin(ph)*8,aim=o.aim||0;
  ctx.strokeStyle=c;ctx.lineWidth=6;ctx.lineCap='round';line(0,-34,a,-2,c,6);line(0,-34,-a,-2,c,6);
  poly([[-9,-34],[9,-34],[11,-76],[0,-82],[-10,-76]],c);circ(1,-88,8,c);
  poly([[-12,-91],[14,-91],[18,-96],[12,-97],[8,-103],[-6,-103],[-8,-97],[-14,-96]],c);ctx.strokeStyle=o.rim||'rgba(255,170,90,.7)';ctx.lineWidth=1.2;ctx.beginPath();ctx.moveTo(-9,-76);ctx.lineTo(-10,-40);ctx.stroke();
  // brazo + fusil
  const ang=lerp(.9,-.05,aim);ctx.save();ctx.translate(4,-70);ctx.rotate(ang);line(0,0,16,0,c,5);poly([[8,-2],[40,-3],[40,1],[8,2]],c);ctx.restore();ctx.restore()}
// ametralladora Lewis sobre trípode (apunta a la derecha)
function lewis(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);const c=o.col||'#1a1620';
  line(0,-16,-12,0,c,3);line(0,-16,12,0,c,3);line(0,-16,0,0,c,3);poly([[-14,-26],[22,-28],[24,-23],[-14,-17]],c);rr(-6,-34,22,7,3);ctx.fillStyle=c;ctx.fill();circ(5,-34,7,c);
  poly([[22,-27],[40,-26],[40,-24],[22,-23]],c);ctx.restore()}
// camión militar antiguo (mira a la derecha). o: ph (ruedas), gun
function truck(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);const c=o.col||KHA,bob=Math.sin((o.ph||0)*2)*1.2;ctx.translate(0,bob);
  ctx.fillStyle=INK;rr(-52,-44,66,34,3);ctx.fill();rr(14,-36,36,26,4);ctx.fill();ctx.fillStyle=c;rr(-50,-42,62,30,2);ctx.fill();rr(16,-34,32,22,3);ctx.fill();
  ctx.fillStyle='rgba(170,210,255,.55)';rr(34,-31,12,10,2);ctx.fill();ctx.strokeStyle='rgba(0,0,0,.3)';ctx.lineWidth=1;for(let i=0;i<4;i++){ctx.beginPath();ctx.moveTo(-40+i*14,-42);ctx.lineTo(-40+i*14,-12);ctx.stroke()}
  [-34,30].forEach((wx,i)=>{circ(wx,-8,11,INK);circ(wx,-8,5.5,'#8a8a8a');for(let k=0;k<4;k++){const a=(o.ph||0)*3+k*TAU/4;line(wx,-8,wx+Math.cos(a)*9,-8+Math.sin(a)*9,INK,1.6)}});
  if(o.gun)lewis(-18,-42,.9,{flip:false});ctx.restore()}
// campo de trigo: n espigas desde x0 a x1 sobre el suelo y. h altura, sway. col
function trigo(x0,x1,y,h,t,col,n,seed=1,o={}){ctx.save();ctx.strokeStyle=col;ctx.fillStyle=col;ctx.lineCap='round';const lw=o.lw||1.3;
  for(let i=0;i<n;i++){const x=lerp(x0,x1,(i+R(seed+i))/n),hh=h*(.75+R(seed+i*3)*.5)*(o.cut===undefined?1:1-o.cut*(R(seed+i*7)>.35?1:0)*.85),sw=Math.sin(t*1.6+x*.03+i)*5*(o.sw===undefined?1:o.sw);
    ctx.lineWidth=lw;ctx.beginPath();ctx.moveTo(x,y);ctx.quadraticCurveTo(x+sw*.4,y-hh*.55,x+sw,y-hh);ctx.stroke();
    ctx.save();ctx.translate(x+sw,y-hh);ctx.rotate(sw*.04);ctx.beginPath();ctx.ellipse(0,-hh*.09,lw*1.5,hh*.1,0,0,TAU);ctx.fill();ctx.restore()}ctx.restore()}
// paisaje: cielo, sol, colinas lejanas, mesetas, campos de trigo. c=cámara, p=0..1 (0 mediodía/1 atardecer).
function paisaje(c,t,p=.7,o={}){{const g=ctx.createLinearGradient(0,0,0,470);g.addColorStop(0,mixc('#2f78e0','#2a2a86',p));g.addColorStop(.7,mixc('#9ad0ff','#ff7a4a',p));g.addColorStop(1,mixc('#ffe6b0','#ffb060',p));ctx.fillStyle=g;ctx.fillRect(0,0,360,640)}
  const sx=250-(c.x-180)*.04,sy=250+p*30;glow(sx,sy,190,'rgba(255,170,80,.65)',1);circ(sx,sy,28,'#fff4c8');
  capas(c,[
   {k:.12,fn:()=>{colinas(430,mixc('#8a6aa8','#5a3a7a',p),24,.008,1,-700,1500)}},
   {k:.3,fn:()=>{colinas(462,mixc('#9a5a4a','#5a3040',p),16,.012,2,-700,1500);}},
   {k:.55,fn:()=>{ctx.fillStyle=mixc('#e8a83a','#a85a2a',p);ctx.fillRect(-700,GY-6,2200,400);trigo(-500,1200,GY-4,34,t,mixc('#ffd25a','#d98a3a',p),170,3,{lw:1.2})}},
   {k:.8,fn:()=>{ctx.fillStyle=mixc('#d8902e','#8a3a26',p);ctx.fillRect(-700,GY+2,2200,500);trigo(-500,1200,GY+8,52,t,mixc('#ffe070','#e8a040',p),130,8,{lw:1.6,cut:o.cut})}}
  ]);
  if(o.cerca!==false){const L=c; /* suelo del plano de acción */ ctx.save();ctx.translate(180,320);if(c.r)ctx.rotate(c.r);ctx.scale(c.z,c.z);ctx.translate(-c.x,-c.y);const g=ctx.createLinearGradient(0,GY,0,GY+200);g.addColorStop(0,mixc('#b8723a','#4a2420',p));g.addColorStop(1,mixc('#8a4a2a','#2a1418',p));ctx.fillStyle=g;ctx.fillRect(-700,GY,2200,400);ctx.restore()}}
// primer plano borroso: espigas altas que pasan rápido (k>1)
function trigoFrente(c,t,p=.7,seed=5,n=26,col){capas(c,[{k:1.7,fn:()=>{ctx.save();ctx.globalAlpha=.9;trigo(-300,900,GY+120,210,t,col||mixc('#3a2410','#1a0e0c',p*.5),n,seed,{lw:3.6});ctx.restore()}}])}
function coin(x,y,r,rot=0){ctx.save();ctx.translate(x,y);ctx.scale(Math.abs(Math.cos(rot))*.8+.2,1);circ(0,0,r,'#ffcf5a',INK,Math.max(1,r*.18));circ(0,0,r*.55,null,'#b8862a',Math.max(.8,r*.12));ctx.restore()}
