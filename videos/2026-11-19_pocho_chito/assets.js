// ===== Pocho y Chito — recursos (selva al atardecer: verdes profundos, ámbar, turquesa del río, lima para el subtítulo) =====
CAP.acc='#b6f35a';
const JG0='#041a12',JG1='#14543a',AMB='#ffb347',LIM='#b6f35a',CROC='#6c9a3c',CROC2='#3f6a28',BELLY='#d9d58c',RIV='#0e4d5c',RIV2='#2aa7a0',RD='#e0453a',CR='#f4ecd8',INK='#06140d',WOOD='#7b5230',GLD='#f2c14e',PINK='#ff7a8a',SKY0='#1b2b4a',SKY1='#f2884a';
const TX=(s,x,y,sz,col,t,t0,o={})=>mtext(s,x,y,sz,col,t,t0,Object.assign({stroke:INK,sw:Math.max(4,sz*.2)},o));
const TG=(s,x,y,sz,b,f,t,t0,o={})=>tag(s,x,y,sz,b,f,t,t0,o);
const FL=500;
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
function hills(y,col,amp=18,f=.012,ph=0,x0=-400,x1=1500){ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(x0,900);for(let x=x0;x<=x1;x+=12)ctx.lineTo(x,y-amp*Math.sin(x*f+ph)-amp*.5*Math.sin(x*f*2.3+ph*2));ctx.lineTo(x1,900);ctx.closePath();ctx.fill()}
function palm(x,y,s,t,col='#0a2a1c'){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.strokeStyle=col;ctx.lineCap='round';ctx.lineWidth=7;ctx.beginPath();ctx.moveTo(0,0);ctx.quadraticCurveTo(10,-60,4,-120);ctx.stroke();
  ctx.fillStyle=col;for(let i=0;i<7;i++){const a=-Math.PI/2+(i-3)*.5+Math.sin(t*.9+i+x)*.05,L=62;ctx.save();ctx.translate(4,-120);ctx.rotate(a+Math.PI/2);ctx.beginPath();ctx.moveTo(0,0);ctx.quadraticCurveTo(L*.5,-L*.45,L,L*.35);ctx.quadraticCurveTo(L*.5,-L*.1,0,0);ctx.fill();ctx.restore()}ctx.restore()}
function sunset(t){bg(SKY0,SKY1);glow(180,430,230,'rgba(255,190,90,.55)');circ(180,430,46,'#ffd88a');hills(450,'#0f3b2a',14,.014,1);hills(480,'#0a2a1c',12,.02,3)}
function jnight(t){bg('#02100b','#0e4a39');stars(t,40,4,.55);circ(290,96,22,'#e9f5d8');glow(290,96,70,'rgba(210,240,200,.22)');hills(450,'#06251a',14,.013,2);hills(485,'#04180f',12,.02,5);embers(t,26,'#d8ff7a',3,10,1.4,[0,200,360,300])}
function water(y,t,a=1,c0=RIV2,c1=RIV){ctx.save();ctx.globalAlpha=a;const g=ctx.createLinearGradient(0,y,0,y+260);g.addColorStop(0,c0);g.addColorStop(1,c1);ctx.fillStyle=g;ctx.fillRect(-400,y,1400,600);
  ctx.strokeStyle='rgba(255,255,255,.3)';ctx.lineWidth=1.6;for(let i=0;i<14;i++){const yy=y+8+i*14,x0=((i*83-t*(10+i))%460+460)%460-60;ctx.beginPath();ctx.moveTo(x0,yy);ctx.quadraticCurveTo(x0+16,yy-3,x0+32,yy);ctx.stroke()}ctx.restore()}
function shore(y,col='#6a5130'){ctx.fillStyle=col;ctx.fillRect(-400,y,1400,500);ctx.fillStyle='rgba(255,230,160,.18)';ctx.fillRect(-400,y,1400,3)}
function croc(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);
  const t=o.t||0,fill=o.fill||CROC,belly=o.belly||BELLY,rim=o.rim===undefined?INK:o.rim,m=o.mouth||0,sw=Math.sin(t*2.2)*(o.sway===undefined?1:o.sway);
  const tail=bez([-40,-16],[-80,-12+sw*6],[-120,-22+sw*10],[-165,-12+sw*16],10);
  inkParts([rib(tail,26,3),limb(14,-10,22,0,11,9),limb(-32,-10,-38,0,11,9),el(-8,-17,52,16)],fill,rim,2);
  ctx.fillStyle=belly;ctx.beginPath();ctx.ellipse(-8,-8,46,7,0,0,TAU);ctx.fill();
  ctx.fillStyle=mixc(fill,'#000000',.3);for(let i=0;i<9;i++){const bx=-48+i*10;ctx.beginPath();ctx.moveTo(bx,-31);ctx.lineTo(bx+4,-38);ctx.lineTo(bx+8,-31);ctx.closePath();ctx.fill()}
  if(m>.02){const a=m*.5,tx=34+58*Math.cos(a),ty=-6+58*Math.sin(a);ctx.fillStyle='#7a1f26';ctx.beginPath();ctx.moveTo(34,-9);ctx.lineTo(90,-14);ctx.lineTo(tx,ty);ctx.closePath();ctx.fill()}
  ctx.save();ctx.translate(34,-6);ctx.rotate(m*.5);inkParts([pf([[0,-3],[34,-3],[56,-2],[58,4],[34,6],[0,8]])],mixc(fill,belly,.45),rim,2);ctx.restore();
  inkParts([pf([[26,-30],[52,-29],[88,-21],[92,-14],[60,-12],[30,-8]]),el(40,-30,8,7)],fill,rim,2);
  if(m>.15){ctx.fillStyle='#fff';for(let i=0;i<6;i++){const tx=48+i*7,y0=-8-(tx-30)*.09;ctx.beginPath();ctx.moveTo(tx,y0);ctx.lineTo(tx+4,y0-.4);ctx.lineTo(tx+2,y0+4+3*m);ctx.closePath();ctx.fill()}}
  ctx.fillStyle='#e8d34a';ctx.beginPath();ctx.arc(41,-31,4.4,0,TAU);ctx.fill();ctx.fillStyle=INK;ctx.fillRect(40.3,-35,1.8,7.6);
  if(o.hurt>0){ctx.save();ctx.globalAlpha=o.hurt;ctx.fillStyle='rgba(224,69,58,.55)';ctx.beginPath();ctx.arc(41,-31,7,0,TAU);ctx.fill();ctx.strokeStyle=RD;ctx.lineWidth=2;ctx.beginPath();ctx.arc(41,-31,9+Math.sin(t*6)*1.6,0,TAU);ctx.stroke();ctx.restore()}
  if(o.band>0){ctx.save();ctx.globalAlpha=o.band;ctx.translate(41,-31);ctx.rotate(-.3);ctx.fillStyle='#f4f0e6';ctx.strokeStyle=INK;ctx.lineWidth=1.4;ctx.fillRect(-9,-6,18,12);ctx.strokeRect(-9,-6,18,12);ctx.fillStyle=RD;ctx.fillRect(-1.2,-4,2.4,8);ctx.fillRect(-4,-1.2,8,2.4);ctx.restore()}
  ctx.fillStyle=INK;ctx.beginPath();ctx.arc(87,-19,1.5,0,TAU);ctx.fill();ctx.restore()}
function man(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);const f=o.fill||'#12281c',r=o.rim===undefined?AMB:o.rim,sw=Math.sin(o.ph||0)*8,al=o.armL===undefined?.15:o.armL,ar=o.armR===undefined?-.15:o.armR,lie=o.lie||0;
  if(lie)ctx.rotate(-Math.PI/2*lie);
  inkParts([limb(-4,-4,-5-sw,-30,9,8),limb(5,-4,6+sw,-30,9,8),limb(0,-30,0,-58,17,14),limb(0,-54,Math.sin(al)*24,-54+Math.cos(al)*24,6,5),limb(0,-54,Math.sin(ar)*24,-54+Math.cos(ar)*24,6,5),el(0,-67,9,9.5)],f,r,1.6);
  ctx.fillStyle=o.hat||'#d9b36a';ctx.strokeStyle=INK;ctx.lineWidth=1.4;ctx.beginPath();ctx.ellipse(0,-74,17,4.2,0,0,TAU);ctx.fill();ctx.stroke();ctx.beginPath();ctx.ellipse(0,-78,9,6.5,0,Math.PI,TAU);ctx.fill();ctx.stroke();ctx.restore()}
function boat(x,y,s,t,o={}){ctx.save();ctx.translate(x,y+Math.sin(t*3)*1.5);ctx.scale(s*(o.flip?-1:1),s);ctx.rotate(Math.sin(t*2.1)*.02+(o.tilt||0));
  inkParts([pf([[-70,-22],[78,-22],[60,2],[-54,2]])],'#c9d6d2',INK,2);ctx.fillStyle='#e0453a';ctx.fillRect(-66,-14,126,5);
  inkParts([pf([[-72,-26],[-84,-40],[-70,-40],[-62,-22]]),el(-86,-14,9,12)],'#2a3a34',INK,1.6);ctx.restore()}
function wake(x,y,t,w=90){ctx.save();ctx.strokeStyle='rgba(255,255,255,.55)';ctx.lineWidth=2;for(let i=0;i<4;i++){const k=((t*1.4+i*.25)%1);ctx.globalAlpha=(1-k)*.8;ctx.beginPath();ctx.moveTo(x-k*w,y+2+k*8);ctx.lineTo(x-k*w-26,y+4+k*8);ctx.stroke()}ctx.restore()}
function fish(x,y,s,rot=0,col='#8fd0e8'){tr(x,y,s,rot,()=>{inkParts([el(0,0,16,7),pf([[-14,0],[-24,-8],[-24,8]])],col,INK,1.6);ctx.fillStyle=INK;ctx.beginPath();ctx.arc(9,-1.5,1.5,0,TAU);ctx.fill()})}
function drum(x,y,s,rot=0){tr(x,y,s,rot,()=>{inkParts([el(0,0,12,9),limb(10,0,24,0,4,4),el(26,-2.5,3.4,3.4),el(26,2.5,3.4,3.4)],'#d98a3a',INK,1.6)})}
function cow(x,y,s,t){ctx.save();ctx.translate(x,y);ctx.scale(s,s);inkParts([limb(-16,-14,-16,0,6,5),limb(14,-14,14,0,6,5),limb(-8,-14,-8,0,6,5),limb(8,-14,8,0,6,5),el(0,-22,22,11),el(26,-28,8,7),pf([[22,-34],[20,-40],[26,-35]])],'#f1ead8',INK,1.4);
  ctx.fillStyle='#3a2f28';ctx.beginPath();ctx.ellipse(-6,-24,7,5,0,0,TAU);ctx.fill();ctx.beginPath();ctx.ellipse(8,-20,5,4,0,0,TAU);ctx.fill();ctx.restore()}
function crowd(x0,x1,y,n,t,q,seed=1,col='#0a1a12',rim=AMB){for(let i=0;i<n;i++){if(i/n>q)continue;const x=lerp(x0,x1,(i+R(i+seed)*.6)/n),h=1+R(i*3+seed)*.4,by=y+(i%3)*9,b=Math.abs(Math.sin(t*3+i))*3*(R(i+4)>.5?1:0);
  ctx.fillStyle=col;ctx.strokeStyle=rim;ctx.lineWidth=1.2;ctx.beginPath();ctx.ellipse(x,by-b-14*h,5,5.4,0,0,TAU);ctx.fill();ctx.stroke();ctx.beginPath();ctx.ellipse(x,by-b,8,12*h,0,Math.PI,TAU);ctx.fill();ctx.stroke()}}
function tvset(x,y,s,fn){ctx.save();ctx.translate(x,y);ctx.scale(s,s);rr(-70,-52,140,104,12);ctx.fillStyle='#1b1f24';ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=3;ctx.stroke();ctx.save();rr(-60,-42,100,84,8);ctx.clip();ctx.fillStyle=RIV;ctx.fillRect(-60,-42,100,84);fn&&fn();ctx.restore();
  ctx.fillStyle='#444b53';ctx.beginPath();ctx.arc(54,-24,6,0,TAU);ctx.fill();ctx.beginPath();ctx.arc(54,-4,6,0,TAU);ctx.fill();ctx.restore()}
function candle(x,y,s,t){glow(x,y-14*s,26*s,'rgba(255,200,90,.45)');ctx.fillStyle='#f4ecd8';ctx.strokeStyle=INK;ctx.lineWidth=1.2;ctx.fillRect(x-3*s,y-12*s,6*s,12*s);ctx.strokeRect(x-3*s,y-12*s,6*s,12*s);ctx.fillStyle='#ffb347';ctx.beginPath();ctx.ellipse(x,y-16*s+Math.sin(t*9+x)*1.2,2.6*s,4.2*s,0,0,TAU);ctx.fill()}
function cart(x,y,s,t){ctx.save();ctx.translate(x,y);ctx.scale(s,s);inkParts([pf([[-46,-26],[46,-26],[42,-6],[-42,-6]])],'#6b4a2a',INK,2);[-28,28].forEach(w=>{circ(w,-2,11,'#2b1d12',INK,2);circ(w,-2,3,'#caa468')});ctx.restore()}
function heart(x,y,s,col=PINK,ph=0){const k=1+Math.sin(ph)*.06;tr(x,y,s*k,0,()=>{ctx.beginPath();ctx.moveTo(0,10);ctx.bezierCurveTo(-26,-8,-14,-28,0,-14);ctx.bezierCurveTo(14,-28,26,-8,0,10);ctx.fillStyle=col;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=2.4;ctx.stroke()})}
function barH(x,y,w,h,col,q,label,val,vc){ctx.save();ctx.fillStyle='rgba(255,255,255,.1)';rr(x,y,w,h,8);ctx.fill();ctx.restore();if(q>0){ctx.fillStyle=col;rr(x,y,Math.max(h,w*q),h,8);ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=2.4;ctx.stroke()}
  txt(label,x,y-9,13,'#fff',{wt:'900',a:'left',st:INK,sw:4});if(val!=null)txt(val,x+w-8,y+h/2+1,h*.62,vc||'#fff',{wt:'900',a:'right',st:INK,sw:5})}
