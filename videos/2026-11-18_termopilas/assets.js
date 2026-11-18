// ===== Termópilas: ¿300 espartanos o 7000 griegos? — recursos =====
const SEA='#05222d',SEA1='#0d4252',SAND='#e8c98a',CRIM='#d2432f',GOLD='#f2b84b',CYAN='#4fd1d9',ROCK='#2b2420',ROCK1='#4a3a30',BONE='#f3ead2',GREY='#8a96a0';
const TM=tema({acc:GOLD,ink:'rgba(18,6,2,.85)',sw:4,bg0:SEA,bg1:SEA1});const TX=TM.TX,TAG=TM.TAG;
// hoplita de perfil (mira a la derecha; y = pies). o: sh (color escudo), flip, rim, crest, a (alfa)
function hop(x,y,s,col,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);if(o.a!==undefined)ctx.globalAlpha=o.a;
  const st=o.step||0;ctx.fillStyle=col;ctx.strokeStyle=col;
  ctx.fillRect(-5+st*2,-22,4.5,22);ctx.fillRect(1-st*2,-22,4.5,22);                  // piernas
  poly([[-8,-42],[8,-42],[9,-20],[-9,-20]],col);                                   // torso
  circ(0,-50,6.2,col);                                                              // cabeza
  poly([[-7,-52],[-6,-60],[6,-60],[7,-52],[7,-48],[-7,-48]],col);                   // casco
  poly([[-2,-60],[0,-70],[8,-68],[10,-62],[4,-60]],o.crest||CRIM);                  // cresta
  line(-10,-12,-5,-84,'#cfa56a',1.6);poly([[-5,-84],[-3.4,-84],[-4.3,-92]],'#e9e2cf'); // lanza
  ctx.fillStyle=o.sh||'#b5832e';ctx.beginPath();ctx.arc(9,-31,12,0,TAU);ctx.fill();    // escudo
  if(o.rim){ctx.strokeStyle=o.rim;ctx.lineWidth=1.6;ctx.beginPath();ctx.arc(9,-31,12,0,TAU);ctx.stroke();ctx.beginPath();ctx.arc(9,-31,6,0,TAU);ctx.stroke()}
  ctx.restore()}
// guerrero persa diminuto (mira a la derecha)
function pers(x,y,s,col,st=0){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.fillStyle=col;ctx.fillRect(-3+st,-12,2.6,12);ctx.fillRect(.6-st,-12,2.6,12);poly([[-5,-24],[5,-24],[5,-11],[-5,-11]],col);circ(0,-29,4,col);poly([[-4,-31],[0,-38],[4,-31]],col);line(6,-8,7,-40,col,1.2);ctx.restore()}
function horde(t,cx,cy,w,h,n,seed,col,spd=22,s=.7){for(let i=0;i<n;i++){const fx=R(i*3+seed),fy=R(i*7+seed+1);const x=((fx*w+t*spd*(.8+.4*R(i+seed)))%w)-w/2+cx,y=cy+(fy-.5)*h;pers(x,y,s*(.8+fy*.5),col,Math.sin(t*9+i)*1.4)}}
function sky2(t,k=0){const c0=mixc('#071b26','#26130f',k),c1=mixc('#134a5c','#7a3320',k);bg(c0,c1);stars(t,50,5,.5*(1-k))}
function waves(y,t,col,amp=4,x0=-100,x1=460,a=.9){ctx.save();ctx.globalAlpha=a;ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(x0,900);for(let x=x0;x<=x1;x+=10)ctx.lineTo(x,y+Math.sin(x*.05+t*2)*amp+Math.sin(x*.13-t*3)*amp*.5);ctx.lineTo(x1,900);ctx.closePath();ctx.fill();ctx.restore()}
function mount(pts,col,rim){poly(pts,col);if(rim){ctx.save();ctx.strokeStyle=rim;ctx.lineWidth=1.6;ctx.beginPath();pts.forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));ctx.stroke();ctx.restore()}}
// cuadrícula de puntos (soldados): índice i -> posición
function gridPos(i,cols,sp,cx,cy,n){const r=Math.floor(i/cols),c=i%cols,rows=Math.ceil(n/cols);return [cx+(c-(cols-1)/2)*sp,cy+(r-(rows-1)/2)*sp]}
function xmark(x,y,s,col,a=1){withA(a,()=>{line(x-s,y-s,x+s,y+s,col,5);line(x-s,y+s,x+s,y-s,col,5)})}
function sunArc(cx,cy,r,p,col='#ffd27a'){const a=Math.PI+p*Math.PI,x=cx+Math.cos(a)*r,y=cy+Math.sin(a)*r*.8;glow(x,y,46,rgba(col,.45));circ(x,y,13,col);return [x,y]}
function hourglass(x,y,s,p,col=SAND){tr(x,y,s,0,()=>{ctx.strokeStyle=BONE;ctx.lineWidth=4;line(-26,-46,26,-46,BONE,5);line(-26,46,26,46,BONE,5);
  poly([[-22,-44],[22,-44],[3,0],[22,44],[-22,44],[-3,0]],'rgba(255,255,255,.08)',BONE,2.4);
  withA(1,()=>{const top=1-p;poly([[-20*top-2,-42+34*(1-top)],[20*top+2,-42+34*(1-top)],[2,-4],[-2,-4]],col);const bot=p;poly([[-20*bot,44],[20*bot,44],[0,44-36*bot]],col);if(p<1)line(0,-2,0,44-36*bot,col,1.5)})})}
function ship(x,y,s,col,sail,o={}){ctx.save();ctx.translate(x,y);ctx.rotate(o.rot||0);ctx.scale(s*(o.flip?-1:1),s);if(o.a!==undefined)ctx.globalAlpha=o.a;
  poly([[-32,0],[32,0],[24,12],[-24,12]],col);line(0,0,0,-44,col,2.4);poly([[2,-42],[26,-8],[2,-8]],sail);poly([[-2,-36],[-20,-8],[-2,-8]],mixc(sail,'#000',.25));line(-32,0,-40,-8,col,3);ctx.restore()}
function helmetOnStake(x,y,s){tr(x,y,s,0,()=>{line(0,0,0,120,'#6a4a2a',5);poly([[-14,0],[14,0],[14,-14],[8,-26],[-8,-26],[-14,-14]],'#b5832e');poly([[-3,-26],[0,-44],[12,-40],[14,-30],[6,-26]],CRIM);line(-14,-4,14,-4,'#6a4a1a',2)})}
function hut(x,y,s,col){tr(x,y,s,0,()=>{ctx.fillStyle=col;ctx.fillRect(-14,-12,28,12);poly([[-17,-12],[0,-26],[17,-12]],mixc(col,'#000',.25));ctx.fillStyle='#10202a';ctx.fillRect(-3,-8,6,8)})}
function crown(x,y,s,col){tr(x,y,s,0,()=>{poly([[-16,0],[-16,-14],[-8,-6],[0,-18],[8,-6],[16,-14],[16,0]],col);circ(0,-20,2.5,'#fff')})}
function bubble2(x,y,w,h,col,s=1){tr(x,y,s,0,()=>{ctx.fillStyle=col;rr(-w/2,-h/2,w,h,h/2);ctx.fill()})}
function shield(x,y,s,col,rim,lbl){tr(x,y,s,0,()=>{circ(0,0,38,col,rim,4);circ(0,0,24,null,rim,2);if(lbl)txt(lbl,0,3,18,'#fff',{wt:'900',f:DISP})})}
