// ===== Los generales que olvidamos — recursos (azul petróleo + oro + rojo, estilo mapa/pergamino) =====
const OR='#f2b84b',RJ='#e0523c',PG='#f3e3b8',INK='#05101a',TL='#3fb8af',NV0='#0a1a24',NV1='#1b3f52',SND='#c9a45c';
const TH=tema({acc:OR,ink:'rgba(5,16,26,.88)',sw:3.5,bg0:NV0,bg1:NV1});
const TX=TH.TX,TAG=TH.TAG;
// figura genérica sin cara. o: col, rim, hat('bic'|'helm'|'tri'|'crest'|'cap'|'none'), ph (paso), flip, arm (ángulo brazo), rifle, fall (0..1), peg, patch, stiff
function fig(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);
  const col=o.col||INK,rim=o.rim===undefined?OR:o.rim,ph=o.ph||0,sw=Math.sin(ph)*8;
  if(o.fall){ctx.translate(0,-o.fall*6);ctx.rotate(o.fall*1.45)}
  ctx.lineCap='round';
  const leg=(x0,x1,peg)=>{ctx.strokeStyle=rim;ctx.lineWidth=peg?4.4:9.4;ctx.beginPath();ctx.moveTo(x0,-34);ctx.lineTo(x1,-2);ctx.stroke();ctx.strokeStyle=peg?'#7a5230':col;ctx.lineWidth=peg?2.6:7;ctx.beginPath();ctx.moveTo(x0,-34);ctx.lineTo(x1,-2);ctx.stroke()};
  leg(-4,-5+sw,o.peg);leg(5,6-sw,false);
  ctx.beginPath();ctx.moveTo(-10,-66);ctx.lineTo(10,-66);ctx.lineTo(13,-32);ctx.lineTo(-13,-32);ctx.closePath();ctx.fillStyle=col;ctx.fill();ctx.strokeStyle=rim;ctx.lineWidth=1.8;ctx.stroke();
  const a=o.arm===undefined?.4:o.arm;
  ctx.strokeStyle=rim;ctx.lineWidth=9;ctx.beginPath();ctx.moveTo(8,-62);ctx.lineTo(8+Math.sin(a)*24,-62+Math.cos(a)*24);ctx.stroke();ctx.strokeStyle=col;ctx.lineWidth=6.4;ctx.beginPath();ctx.moveTo(8,-62);ctx.lineTo(8+Math.sin(a)*24,-62+Math.cos(a)*24);ctx.stroke();
  if(o.stiff){ctx.strokeStyle=rim;ctx.lineWidth=9;ctx.beginPath();ctx.moveTo(-8,-62);ctx.lineTo(-12,-36);ctx.stroke();ctx.strokeStyle=col;ctx.lineWidth=6.4;ctx.beginPath();ctx.moveTo(-8,-62);ctx.lineTo(-12,-36);ctx.stroke()}
  else{ctx.strokeStyle=rim;ctx.lineWidth=9;ctx.beginPath();ctx.moveTo(-8,-62);ctx.lineTo(-10-sw*.4,-38);ctx.stroke();ctx.strokeStyle=col;ctx.lineWidth=6.4;ctx.beginPath();ctx.moveTo(-8,-62);ctx.lineTo(-10-sw*.4,-38);ctx.stroke()}
  if(o.rifle){line(-14,-34,20,-66,'#7a5230',3.2);line(-14,-34,20,-66,rim,1)}
  circ(0,-73,8.2,col,rim,1.8);
  if(o.patch){line(-1,-77,10,-70,rim,2.2);circ(5,-73,2.6,'#000')}
  const h=o.hat||'none';
  if(h==='bic'){poly([[-17,-80],[-4,-92],[4,-92],[17,-80],[10,-79],[0,-84],[-10,-79]],col,rim,1.6)}
  else if(h==='tri'){poly([[-15,-79],[-6,-90],[6,-90],[15,-79],[0,-84]],col,rim,1.6);circ(0,-86,1.8,rim)}
  else if(h==='helm'){ctx.beginPath();ctx.arc(0,-75,10,Math.PI,TAU);ctx.closePath();ctx.fillStyle=col;ctx.fill();ctx.strokeStyle=rim;ctx.lineWidth=1.8;ctx.stroke()}
  else if(h==='crest'){ctx.beginPath();ctx.arc(0,-75,10,Math.PI,TAU);ctx.closePath();ctx.fillStyle=col;ctx.fill();ctx.strokeStyle=rim;ctx.lineWidth=1.8;ctx.stroke();poly([[-3,-85],[4,-98],[12,-96],[10,-84]],RJ,rim,1.4)}
  else if(h==='cap'){poly([[-9,-79],[0,-86],[9,-79],[13,-78],[-9,-78]],col,rim,1.6)}
  ctx.restore()}
// sombrero grande de silueta (bicornio) para el gancho
function bigHat(x,y,s,col,rim,kind){tr(x,y,s,0,()=>{
  if(kind==='bic'){ctx.beginPath();ctx.moveTo(-74,8);ctx.quadraticCurveTo(0,-84,74,8);ctx.quadraticCurveTo(0,-26,-74,8);ctx.closePath();ctx.fillStyle=col;ctx.fill();ctx.strokeStyle=rim;ctx.lineWidth=3.5;ctx.stroke();circ(30,-8,8,RJ,rim,2.5);line(-66,4,66,4,rim,2)}
  else{ctx.beginPath();ctx.arc(0,0,48,Math.PI,TAU);ctx.lineTo(48,24);ctx.lineTo(-48,24);ctx.closePath();ctx.fillStyle=col;ctx.fill();ctx.strokeStyle=rim;ctx.lineWidth=3.5;ctx.stroke();poly([[-8,-46],[6,-84],[26,-80],[18,-44]],RJ,rim,2.5);line(-22,-6,22,-6,rim,2.5)}})}
function horse(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);
  const col=o.col||INK,rim=o.rim===undefined?RJ:o.rim,ph=o.ph||0;
  if(o.fall){ctx.translate(0,-o.fall*4);ctx.rotate(-o.fall*1.2)}
  ctx.lineCap='round';
  [[-22,0],[-14,1],[16,0],[24,1]].forEach(([lx,k],i)=>{const sw=Math.sin(ph+i*1.7)*10;ctx.strokeStyle=rim;ctx.lineWidth=5.4;ctx.beginPath();ctx.moveTo(lx,-30);ctx.lineTo(lx+sw,-3-Math.max(0,Math.sin(ph+i*1.7))*6);ctx.stroke();ctx.strokeStyle=col;ctx.lineWidth=3.4;ctx.beginPath();ctx.moveTo(lx,-30);ctx.lineTo(lx+sw,-3-Math.max(0,Math.sin(ph+i*1.7))*6);ctx.stroke()});
  ctx.beginPath();ctx.ellipse(0,-38,32,15,0,0,TAU);ctx.fillStyle=col;ctx.fill();ctx.strokeStyle=rim;ctx.lineWidth=1.8;ctx.stroke();
  poly([[22,-46],[34,-72],[48,-70],[44,-58],[34,-44]],col,rim,1.8);
  ctx.beginPath();ctx.ellipse(50,-66,12,6,.5,0,TAU);ctx.fillStyle=col;ctx.fill();ctx.strokeStyle=rim;ctx.lineWidth=1.6;ctx.stroke();
  poly([[40,-74],[43,-84],[47,-73]],col,rim,1.2);
  ctx.strokeStyle=rim;ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(-30,-42);ctx.quadraticCurveTo(-46,-36,-44,-20);ctx.stroke();
  if(o.rider!==false){fig(2,-44,.62,{col,rim,hat:'helm',arm:1.2,flip:false})}
  ctx.restore()}
function ship(x,y,s,o={}){ctx.save();ctx.translate(x,y);ctx.scale(s*(o.flip?-1:1),s);
  const col=o.col||INK,rim=o.rim||OR,sail=o.sail||PG,b=Math.sin((o.t||0)*1.6+(o.k||0))*2;
  ctx.rotate(b*.01);
  poly([[-34,0],[34,0],[26,14],[-26,14]],col,rim,1.8);
  line(0,0,0,-58,rim,2.2);line(-16,0,-16,-40,rim,1.8);line(16,0,16,-36,rim,1.8);
  poly([[2,-54],[26,-36],[2,-8]],sail,rim,1.2);poly([[-2,-54],[-26,-36],[-2,-8]],sail,rim,1.2);
  poly([[18,-34],[34,-22],[18,-8]],sail,rim,1.1);
  if(o.flag){poly([[0,-58],[14,-54],[0,-50]],o.flag)}
  ctx.restore()}
function waves(y0,t,col,amp=4,x0=-40,x1=400,fr=.05,ph=0){ctx.beginPath();ctx.moveTo(x0,y0+300);for(let x=x0;x<=x1;x+=10)ctx.lineTo(x,y0+Math.sin(x*fr+t*1.4+ph)*amp);ctx.lineTo(x1,y0+300);ctx.closePath();ctx.fillStyle=col;ctx.fill()}
function mount(x,y,w,h,col,snow,t=0){poly([[x-w/2,y],[x-w*.12,y-h],[x+w*.05,y-h*.88],[x+w*.2,y-h*.95],[x+w/2,y]],col);if(snow){poly([[x-w*.12,y-h],[x-w*.2,y-h*.72],[x-w*.06,y-h*.78],[x+w*.05,y-h*.66],[x+w*.12,y-h*.76],[x+w*.2,y-h*.95],[x+w*.05,y-h*.88]],snow)}}
function medal(x,y,r,n,t0,t,o={}){const q=eb((t-t0)/.4);if(q<=0)return;tr(x,y,q,0,()=>{glow(0,0,r*1.6,rgba(OR,.35));circ(0,0,r,o.fill||'#0e2a3a',OR,3);circ(0,0,r-5,null,rgba(OR,.5),1.2);txt(String(n),0,2,r*1.05,OR,{st:INK,sw:4})})}
function bar(x,y,w,h,col,r=6){rr(x,y,w,h,r);ctx.fillStyle=col;ctx.fill()}
function qmark(x,y,s,t,k){tr(x,y+Math.sin(t*3+k)*3,s,0,()=>{txt('?',0,0,34,OR,{st:INK,sw:5})})}
// Sudamérica esquemática (coordenadas 0..360 x 120..560, se escala con tr)
const SA=[[100,172],[205,166],[292,166],[326,210],[316,280],[286,330],[268,396],[240,470],[210,560],[192,500],[172,430],[140,396],[100,350],[84,310],[84,268],[98,224]];
const PAIS={
 'PANAMÁ':{p:[[58,170],[100,160],[112,172],[88,184],[64,182]],c:'#e0523c',l:[40,150]},
 'COLOMBIA':{p:[[112,176],[205,172],[212,215],[180,262],[130,268],[104,232]],c:'#f2b84b',l:[150,222]},
 'VENEZUELA':{p:[[205,172],[275,170],[292,196],[262,222],[212,215]],c:'#3fb8af',l:[246,196]},
 'ECUADOR':{p:[[96,270],[134,268],[150,292],[112,312],[92,294]],c:'#9a7bff',l:[118,292]},
 'PERÚ':{p:[[92,300],[112,312],[150,292],[186,262],[232,300],[186,332],[176,360],[170,398],[120,370],[96,334]],c:'#e0523c',l:[160,336]},
 'BOLIVIA':{p:[[186,332],[232,300],[262,334],[256,396],[206,420],[170,398],[176,360]],c:'#7ddc6a',l:[216,364]}};
