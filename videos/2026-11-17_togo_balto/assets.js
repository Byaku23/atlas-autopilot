// ===== Togo vs Balto — recursos (noche polar: azul profundo, aurora verde, naranja Togo / azul Balto) =====
CAP.acc='#ffb347';
const BG0='#071226',BG1='#1b4a6a',AUR='#5cf0c4',ICE='#cfeaff',SNOW='#e6f3fb',SNOW2='#9ec3da',TOGO='#9a6a44',BALTO='#20242d',ORG='#ff9a3c',BLU='#4aa8ff',GLD='#f2c14e',BRZ='#a8743a',BRZ2='#e8b66d',RD='#e0453a',CR='#f4ecd8',OC='#f2c14e',INK='#0a1020',DEEP='#0b2b45';
const TX=(s,x,y,sz,col,t,t0,o={})=>mtext(s,x,y,sz,col,t,t0,Object.assign({stroke:INK,sw:Math.max(4,sz*.2)},o));
const TG=(s,x,y,sz,b,f,t,t0,o={})=>tag(s,x,y,sz,b,f,t,t0,o);
const FL=500,OL='#f2c14e',PAPER='#e4d3ac';
function inkParts(paths,fill,rim,lw=2.4){ctx.save();ctx.lineJoin='round';ctx.lineCap='round';const ps=paths.flat(Infinity);
  if(rim){ctx.strokeStyle=rim;ctx.lineWidth=lw*2;ps.forEach(f=>{f();ctx.stroke()})}
  ctx.fillStyle=fill;ps.forEach(f=>{f();ctx.fill()});ctx.restore()}
const el=(cx,cy,rx,ry,rot=0)=>()=>{ctx.beginPath();ctx.ellipse(cx,cy,rx,ry,rot,0,TAU)};
const pf=pts=>()=>{ctx.beginPath();pts.forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));ctx.closePath()};
const limb=(x0,y0,x1,y1,w0,w1)=>{if(w1===undefined)w1=w0;const dx=x1-x0,dy=y1-y0,l=Math.hypot(dx,dy)||1,nx=-dy/l,ny=dx/l;
  return [pf([[x0+nx*w0/2,y0+ny*w0/2],[x1+nx*w1/2,y1+ny*w1/2],[x1-nx*w1/2,y1-ny*w1/2],[x0-nx*w0/2,y0-ny*w0/2]]),()=>{ctx.beginPath();ctx.arc(x1,y1,w1/2,0,TAU)},()=>{ctx.beginPath();ctx.arc(x0,y0,w0/2,0,TAU)}]};
// cinta con grosor variable a lo largo de una polilínea (trompa, cola...)
const rib=(pts,w0,w1)=>{const L=[],Rr=[];pts.forEach((p,i)=>{const a=pts[Math.max(0,i-1)],b=pts[Math.min(pts.length-1,i+1)];const dx=b[0]-a[0],dy=b[1]-a[1],l=Math.hypot(dx,dy)||1,nx=-dy/l,ny=dx/l,w=lerp(w0,w1,i/(pts.length-1))/2;L.push([p[0]+nx*w,p[1]+ny*w]);Rr.push([p[0]-nx*w,p[1]-ny*w])});return pf(L.concat(Rr.reverse()))};
const bez=(p0,p1,p2,p3,n=10)=>Array.from({length:n+1},(_,i)=>{const f=i/n,g=1-f;return [g*g*g*p0[0]+3*g*g*f*p1[0]+3*g*f*f*p2[0]+f*f*f*p3[0],g*g*g*p0[1]+3*g*g*f*p1[1]+3*g*f*f*p2[1]+f*f*f*p3[1]]});
function dog(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);
  const fill=o.fill||'#e5cd9a',rim=o.rim===undefined?INK:o.rim,ph=o.ph||0,sw=Math.sin(ph)*11,sit=o.sit||0;
  if(sit>0){ctx.translate(0,0);}
  const hd=o.head||0,jaw=o.jaw||0;
  const legs=sit>0?[limb(18,-18,19,-1,9,8),limb(8,-18,9,-1,9,8),el(-18,-9,13,11)]:[limb(20,-22,20+sw,-2,9,8),limb(9,-22,9-sw,-2,9,8),limb(-16,-22,-16-sw,-2,9,8),limb(-24,-22,-24+sw,-2,9,8)];
  const body=sit>0?[el(-4,-26,26,18,-.5)]:[el(0,-31,29,15.5)];
  const tail=limb(-27,-36,-35,-46+Math.sin((o.t||0)*20)*(o.tail||0)*5,6,4);
  inkParts([...legs,...body,tail],fill,rim,1.8);
  // cabeza (gira en el cuello)
  ctx.save();ctx.translate(22,-38);ctx.rotate(-hd);
  inkParts([el(8,-5,15,14),el(21,-1,11,8),pf([[0,-14],[-8,-2],[2,-4]]),pf([[10,-17],[3,-26],[16,-17]])],fill,rim,1.8);
  if(jaw>0){ctx.save();ctx.translate(16,3);ctx.rotate(jaw*.5);inkParts([el(5,3,10,4)],fill,rim,1.4);ctx.restore();ctx.fillStyle='#8a2a22';ctx.beginPath();ctx.ellipse(24,3,7,3+jaw*3,0,0,TAU);ctx.fill()}
  ctx.fillStyle=INK;ctx.beginPath();ctx.arc(29,-5,3,0,TAU);ctx.fill();ctx.beginPath();ctx.arc(12,-8,2,0,TAU);ctx.fill();
  ctx.restore();
  if(o.coat){ctx.save();ctx.beginPath();ctx.moveTo(-16,-46);ctx.lineTo(14,-46);ctx.lineTo(12,-26);ctx.lineTo(-16,-24);ctx.closePath();ctx.fillStyle=RD;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=1.4;ctx.stroke();
    ctx.fillStyle=OC;[-8,0,8].forEach(k=>{ctx.beginPath();ctx.arc(k,-36,2.2,0,TAU);ctx.fill()});ctx.restore()}
  ctx.restore()}
function medal(x,y,s,rot=0){tr(x,y,s,rot,()=>{ctx.fillStyle=RD;ctx.strokeStyle=INK;ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(-14,-70);ctx.lineTo(0,-34);ctx.lineTo(14,-70);ctx.closePath();ctx.fill();ctx.stroke();
  ctx.fillStyle=OL;ctx.beginPath();ctx.moveTo(-5,-70);ctx.lineTo(0,-34);ctx.lineTo(5,-70);ctx.closePath();ctx.fill();
  glow(0,0,44,rgba(OC,.35));
  ctx.beginPath();[[0,-34],[9,-9],[34,0],[9,9],[0,34],[-9,9],[-34,0],[-9,-9]].forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));ctx.closePath();
  ctx.fillStyle=BRZ;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=2.6;ctx.lineJoin='round';ctx.stroke();
  ctx.strokeStyle='#e8b66d';ctx.lineWidth=1.4;ctx.beginPath();[[0,-26],[6,-6],[26,0],[6,6],[0,26],[-6,6],[-26,0],[-6,-6]].forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));ctx.closePath();ctx.stroke();
  circ(0,0,7,'#e8b66d',INK,1.6);circ(0,0,3,BRZ)})}
function waves(x,y,t,ts,col,n=3,gap=.14,R0=70,dir=0,spread=.8,lw=3){for(let k=0;k<n;k++){const u=(t-ts-k*gap)/.6;if(u<0||u>1)continue;ctx.save();ctx.globalAlpha=1-u;ctx.strokeStyle=col;ctx.lineWidth=lw*(1-u*.5);ctx.lineCap='round';ctx.beginPath();ctx.arc(x,y,R0*eo(u)+8,dir-spread,dir+spread);ctx.stroke();ctx.restore()}}
function hills(y,col,amp=18,f=.012,ph=0,x0=-400,x1=1500){ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(x0,900);for(let x=x0;x<=x1;x+=12)ctx.lineTo(x,y-amp*Math.sin(x*f+ph)-amp*.5*Math.sin(x*f*2.3+ph*2));ctx.lineTo(x1,900);ctx.closePath();ctx.fill()}
function snowfall(t,n=70,seed=2,a=.8,spd=24){ctx.save();ctx.fillStyle='#fff';for(let i=0;i<n;i++){const x=(R(i+seed)*420+Math.sin(t*.6+i)*16)%420-30,y=(R(i*3+seed)*700+t*spd*(.5+R(i*5)))%700-30;ctx.globalAlpha=a*(.3+.6*R(i*7));ctx.beginPath();ctx.arc(x,y,.6+R(i)*1.4,0,TAU);ctx.fill()}ctx.restore()}
// ---------- piezas nuevas ----------
function polar(t,k=1){bg(BG0,BG1);stars(t,50,3,.6);ctx.save();for(let i=0;i<3;i++){const y=90+i*26;ctx.globalAlpha=.16*k;ctx.fillStyle=AUR;ctx.beginPath();ctx.moveTo(-60,y+60);for(let x=-60;x<=430;x+=18)ctx.lineTo(x,y+14*Math.sin(x*.02+t*.5+i*1.7));ctx.lineTo(430,y+90);ctx.lineTo(-60,y+90);ctx.closePath();ctx.fill()}ctx.restore()}
function snowGround(y,t,sp=0){ctx.fillStyle=SNOW;ctx.fillRect(-400,y,1400,500);ctx.fillStyle='rgba(120,170,200,.35)';ctx.fillRect(-400,y,1400,3);
  if(sp){ctx.save();ctx.strokeStyle='rgba(120,170,200,.55)';ctx.lineWidth=2;for(let i=0;i<16;i++){const x=((i*53-t*sp)%520+520)%520-80,yy=y+14+(i*37%90);ctx.beginPath();ctx.moveTo(x,yy);ctx.lineTo(x+22+R(i)*30,yy);ctx.stroke()}ctx.restore()}}
function musher(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);const f=o.fill||'#14202e',r=o.rim===undefined?ICE:o.rim,lean=o.lean||0;
  inkParts([limb(-4,-4,-6-lean*4,-30,9,8),limb(4,-4,6-lean*4,-30,9,8),limb(-lean*4,-30,-lean*10,-58,16,13),el(-lean*12,-66,9,9),limb(-lean*10,-52,10-lean*8,-40,5,4)],f,r,1.6);
  ctx.fillStyle='#f4ecd8';ctx.beginPath();ctx.arc(-lean*12-1,-66,10.5,Math.PI*.55,Math.PI*1.95,false);ctx.lineWidth=4;ctx.strokeStyle='#cdbfa0';ctx.stroke();ctx.restore()}
// trineo con musher; (x,y)=suelo bajo el trineo. o: lean
function sled(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);
  ctx.strokeStyle=INK;ctx.lineWidth=5.4;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-34,-4);ctx.lineTo(30,-4);ctx.quadraticCurveTo(44,-4,44,-16);ctx.stroke();ctx.strokeStyle='#caa468';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(-34,-4);ctx.lineTo(30,-4);ctx.quadraticCurveTo(44,-4,44,-16);ctx.stroke();
  ctx.fillStyle='#7b5230';ctx.strokeStyle=INK;ctx.lineWidth=1.6;ctx.beginPath();ctx.moveTo(-30,-10);ctx.lineTo(36,-10);ctx.lineTo(30,-28);ctx.lineTo(-26,-28);ctx.closePath();ctx.fill();ctx.stroke();
  ctx.restore();musher(x-(o.flip?-1:1)*s*-24,y-10*s,s*.9,{lean:o.lean||.4,flip:o.flip,rim:ICE})}
// equipo: n perros en fila hacia la derecha, trineo detrás. (x,y)=suelo del perro líder. o: ph, lead (relleno del líder), fill
function team(x,y,s,t,n,o={}){const ph=t*(o.spd||14);
  for(let i=n-1;i>=0;i--){const dx=x-i*34*s;const lead=i===0;
    if(i<n-1||true){ctx.save();ctx.strokeStyle='rgba(20,30,40,.7)';ctx.lineWidth=1.6;ctx.beginPath();ctx.moveTo(dx,y-22*s);ctx.lineTo(dx-34*s,y-22*s);ctx.stroke();ctx.restore()}
    dog(dx,y+Math.abs(Math.sin(ph+i))*-1.2*s,s*.82,{ph:ph+i*.9,fill:lead?(o.lead||TOGO):(o.fill||'#59606c'),rim:ICE,head:lead?.05:0,tail:.4,t});}
  if(o.sled!==false)sled(x-n*34*s-30*s,y,s*.95,{lean:.5})}
function house(x,y,s,lit=1,t=0){tr(x,y,s,0,()=>{ctx.fillStyle='#3a2a22';ctx.strokeStyle=INK;ctx.lineWidth=2;ctx.fillRect(-30,-44,60,44);ctx.strokeRect(-30,-44,60,44);ctx.fillStyle='#e9f3fb';ctx.beginPath();ctx.moveTo(-36,-44);ctx.lineTo(0,-72);ctx.lineTo(36,-44);ctx.closePath();ctx.fill();ctx.stroke();
  glow(-12,-28,34,'rgba(255,190,90,'+(.5*lit)+')');ctx.fillStyle=mixc('#1d2a3a','#ffc15a',lit);ctx.fillRect(-20,-36,16,14);ctx.fillRect(6,-36,16,14);ctx.fillStyle='rgba(60,40,20,.6)';ctx.fillRect(-1,-36,2,14)})}
function vial(x,y,s,t,col=AUR){glow(x,y,34*s,rgba(col,.45));tr(x,y,s,Math.sin(t*3)*.12,()=>{rr(-7,-16,14,32,5);ctx.fillStyle='rgba(220,255,245,.85)';ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=2;ctx.stroke();ctx.fillStyle=col;ctx.fillRect(-5,-2,10,16);ctx.fillStyle=RD;ctx.fillRect(-7,-20,14,6)})}
// estatua de bronce: perro sobre pedestal. q 0..1 (sube). o.col, o.glow, o.plate
function statue(x,y,s,q,o={}){if(q<=0)return;const rise=(1-eo(q))*70;ctx.save();ctx.globalAlpha*=cl(q*2);
  glow(x,y-70*s,120*s,rgba(o.glow||GLD,.28));ctx.translate(x,y+rise);ctx.scale(s,s);
  ctx.fillStyle='#8d97a3';ctx.strokeStyle=INK;ctx.lineWidth=3;ctx.fillRect(-52,-34,104,34);ctx.strokeRect(-52,-34,104,34);ctx.fillStyle='#b4bdc7';ctx.fillRect(-58,-42,116,10);ctx.strokeRect(-58,-42,116,10);
  if(o.plate){ctx.fillStyle=BRZ2;ctx.fillRect(-20,-26,40,12)}
  dog(0,-42,1.9,{fill:o.col||BRZ,rim:o.rim||BRZ2,head:.12,t:0});ctx.restore()}
// hielo: lámina x0..x1 en y; br 0..1 rotura (solo trozos a la derecha de bx)
function iceSheet(x0,x1,y,t,br=0,bx=180){ctx.fillStyle=DEEP;ctx.fillRect(x0,y,x1-x0,400);
  const n=Math.round((x1-x0)/70);for(let i=0;i<n;i++){const a=x0+i*70,w=70,mid=a+w/2;const f=cl((br-R(i+4)*.4)/.6)*(mid>bx-140?1:0);
    ctx.save();ctx.translate(mid,y+4);ctx.rotate((R(i)-.5)*.5*f);ctx.translate(0,f*(10+R(i*3)*28));ctx.fillStyle=mixc('#cfeaff','#86b9d6',f);ctx.strokeStyle='rgba(60,110,150,.8)';ctx.lineWidth=2;ctx.beginPath();ctx.rect(-w/2+1,-6,w-2,24);ctx.fill();ctx.stroke();ctx.restore()}
  ctx.save();ctx.strokeStyle='rgba(255,255,255,.45)';ctx.lineWidth=1.4;for(let i=0;i<10;i++){const x=x0+R(i*5)*(x1-x0);ctx.beginPath();ctx.moveTo(x,y+2);ctx.lineTo(x+24,y+10);ctx.stroke()}ctx.restore()}
function barH(x,y,w,h,col,q,label,val,vc){ctx.save();ctx.fillStyle='rgba(255,255,255,.1)';rr(x,y,w,h,8);ctx.fill();ctx.restore();if(q>0){ctx.fillStyle=col;rr(x,y,Math.max(h,w*q),h,8);ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=2.4;ctx.stroke()}
  txt(label,x,y-9,13,'#fff',{wt:'900',a:'left',st:INK,sw:4});if(val!=null)txt(val,x+w-8,y+h/2+1,h*.62,vc||'#fff',{wt:'900',a:'right',st:INK,sw:5})}
function frost(t,p){if(p<=0)return;ctx.save();for(let i=0;i<46;i++){const side=i%4,f=R(i*3.7);let x,y;if(side===0){x=f*360;y=0}else if(side===1){x=360;y=f*640}else if(side===2){x=f*360;y=640}else{x=0;y=f*640}
  const len=(40+R(i)*120)*p,ang=Math.atan2(320-y,180-x)+(R(i*5)-.5)*1.2;ctx.strokeStyle='rgba(220,240,255,'+(.55*p)+')';ctx.lineWidth=1.3;ctx.beginPath();ctx.moveTo(x,y);const ex_=x+Math.cos(ang)*len,ey=y+Math.sin(ang)*len;ctx.lineTo(ex_,ey);ctx.stroke();
  for(let k=1;k<4;k++){const bx=lerp(x,ex_,k/4),by=lerp(y,ey,k/4),bl=len*.25;[-.7,.7].forEach(d=>{ctx.beginPath();ctx.moveTo(bx,by);ctx.lineTo(bx+Math.cos(ang+d)*bl,by+Math.sin(ang+d)*bl);ctx.stroke()})}}
  const g=ctx.createRadialGradient(180,320,120,180,320,420);g.addColorStop(0,'rgba(200,230,255,0)');g.addColorStop(1,'rgba(200,230,255,'+(.55*p)+')');ctx.fillStyle=g;ctx.fillRect(0,0,360,640);ctx.restore()}
