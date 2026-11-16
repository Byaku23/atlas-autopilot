// ===== Inicio 2ª Guerra Mundial — recursos (mapa antiguo: arena sobre marrón oscuro; Alemania acero, URSS rojo) =====
CAP.acc='#ff7a3c';
const SEA1='#1b140e',SEA2='#2f2319',NEU='#d9c8a0',NEUE='#6b5836',NEU2='#c8b48a',INK='#120c07',CREAM='#f6ecd2',GER='#4d535f',GERE='#d3d9e6',AUT='#e08a2c',CZE='#9b6fd0',POL='#2f9d62',SOV='#c0392b',ALLY='#3b82d6',ACC='#ff7a3c',GOLD='#ffd23f';
const TX=(s,x,y,sz,col,t,t0,o={})=>mtext(s,x,y,sz,col,t,t0,Object.assign({stroke:INK,sw:Math.max(4,sz*.2)},o));
const TG=(s,x,y,sz,b,f,t,t0,o={})=>tag(s,x,y,sz,b,f,t,t0,Object.assign({stroke:INK},o));
const PJ=(lo,la)=>[(lo-4)*10.5+8,(58.5-la)*19+110];
const PL=a=>a.map(p=>PJ(p[0],p[1]));
const sk=(c,x,y)=>toScreen(c,x,y);
// geografía esquemática (fronteras de 1939 simplificadas)
const OTH=PL([[0,43],[0,49.5],[1.6,50.9],[3.8,51.5],[4.6,52.9],[7.0,53.6],[21.0,54.0],[26.9,53.9],[26.6,48.3],[28.2,46.5],[29.8,45.4],[29,44],[20,40],[10,41]]);
const GERP=PL([[7.0,53.6],[8.6,55.05],[9.9,54.8],[10.9,54.0],[12.4,54.4],[13.7,54.6],[14.3,53.9],[15.5,54.2],[16.8,54.6],[17.3,53.9],[17.3,53.6],[16.9,53.0],[15.9,52.6],[15.8,52.0],[16.5,51.5],[17.5,51.3],[18.0,51.0],[18.6,50.8],[18.7,50.3],[18.0,49.95],[16.6,50.4],[15.0,50.9],[14.3,51.05],[12.9,50.4],[12.2,50.3],[12.2,49.9],[12.9,49.4],[13.8,48.8],[13.0,48.4],[13.0,47.6],[12.2,47.7],[10.5,47.55],[10.2,47.3],[9.6,47.5],[7.6,47.6],[8.2,49.0],[6.4,49.5],[6.1,50.2],[6.0,50.9],[6.0,51.8],[6.8,52.2],[7.2,53.2]]);
const EPP=PL([[19.5,54.45],[20.5,54.9],[21.0,55.3],[22.7,55.05],[22.8,54.35],[22.3,53.9],[21.3,53.4],[20.3,53.1],[19.4,53.3],[19.3,54.0]]);
const AUTP=PL([[9.6,47.3],[10.2,47.3],[10.5,47.55],[12.2,47.7],[13.0,47.6],[13.0,48.4],[13.8,48.8],[14.7,48.6],[15.5,48.95],[16.9,48.6],[17.1,48.0],[16.1,46.9],[14.6,46.4],[13.7,46.5],[12.4,46.7],[11.0,46.8],[10.5,46.9]]);
const CZP=PL([[18.0,49.95],[16.6,50.4],[15.0,50.9],[14.3,51.05],[12.9,50.4],[12.2,50.3],[12.2,49.9],[12.9,49.4],[13.8,48.8],[14.7,48.6],[15.5,48.95],[16.9,48.6],[17.1,48.0],[18.8,47.8],[20.5,48.5],[22.2,48.4],[24.0,48.5],[22.6,49.1],[21.0,49.3],[19.9,49.2],[19.0,49.5],[18.6,49.75]]);
const SUDP=PL([[18.0,49.95],[16.6,50.4],[15.0,50.9],[14.3,51.05],[12.9,50.4],[12.2,50.3],[12.2,49.9],[12.9,49.4],[13.8,48.8],[14.5,49.1],[13.7,49.7],[13.5,50.3],[14.6,50.6],[15.9,50.3],[16.9,50.0],[17.8,49.85]]);
const POLP=PL([[18.2,54.7],[18.9,54.5],[19.3,54.0],[19.4,53.3],[20.3,53.1],[21.3,53.4],[22.3,53.9],[22.8,54.35],[23.5,54.2],[24.2,54.6],[25.4,54.9],[26.3,54.3],[26.9,53.9],[27.0,53.0],[26.4,52.0],[27.3,51.4],[27.1,50.4],[26.6,49.6],[26.6,48.3],[25.2,48.5],[24.0,48.5],[22.6,49.1],[21.0,49.3],[19.9,49.2],[19.0,49.5],[18.6,49.75],[18.0,49.95],[18.7,50.3],[18.6,50.8],[18.0,51.0],[17.5,51.3],[16.5,51.5],[15.8,52.0],[15.9,52.6],[16.9,53.0],[17.3,53.6],[17.3,54.2]]);
const BALTP=PL([[21.0,55.3],[22.7,55.05],[22.8,54.35],[23.5,54.2],[24.2,54.6],[25.4,54.9],[26.3,54.3],[26.9,53.9],[28.0,54.5],[28.0,56.0],[27.5,57.5],[28.0,59.3],[24.5,59.5],[23.5,58.5],[24.3,57.2],[21.5,57.5],[21.0,56.5]]);
const SOVP=PL([[26.9,53.9],[28.0,54.5],[28.0,56.0],[27.5,57.5],[28.0,59.3],[40,59.3],[40,45.3],[29.8,45.4],[28.2,46.5],[27.0,48.2],[26.6,48.3],[26.6,49.6],[27.1,50.4],[27.3,51.4],[26.4,52.0],[27.0,53.0]]);
const MUN=PJ(11.6,48.1),WAR=PJ(21.0,52.2),BER=PJ(13.4,52.5),PRA=PJ(14.4,50.1),VIE=PJ(16.4,48.2);
function land(pts,fill,edge,lw=1.4){ctx.save();ctx.lineJoin='round';poly(pts,fill,edge,lw);ctx.restore()}
function sea(t){bg(SEA1,SEA2);ctx.strokeStyle='rgba(217,200,160,.07)';ctx.lineWidth=1;
  for(let la=42;la<=60;la+=2){const y=PJ(0,la)[1];ctx.beginPath();ctx.moveTo(-300,y);ctx.lineTo(700,y);ctx.stroke()}
  for(let lo=-8;lo<=44;lo+=4){const x=PJ(lo,0)[0];ctx.beginPath();ctx.moveTo(x,-200);ctx.lineTo(x,700);ctx.stroke()}}
// mapa base: o = colores por región (null = neutro)
function europa(t,o={}){sea(t);glow(190,225,200,'rgba(217,200,160,.10)',1);
  land(OTH,NEU,NEUE);land(BALTP,NEU2,NEUE);land(SOVP,o.sov||'#d6a893',NEUE);land(POLP,o.pol||'#9cc7a4',NEUE);
  land(CZP,o.cze||NEU,NEUE);land(AUTP,o.aut||NEU,NEUE);land(GERP,o.ger||GER,GERE,1.6);land(EPP,o.ger||GER,GERE,1.6);
  if(o.sud)land(SUDP,o.sud,GERE,1.2);
  [['FRANCIA',1.5,47.3],['ITALIA',11.5,44.2],['HUNGRÍA',19.5,46.9],['RUMANIA',25,45.4],['URSS',33,55.5],['LITUANIA',24.5,55.9],['POLONIA',20,51.3]].forEach(l=>{if(l[0]==='POLONIA'&&!o.lblpol)return;const p=PJ(l[1],l[2]);txt(l[0],p[0],p[1],8.5,'rgba(60,45,25,.55)',{wt:'800',f:SANS})})}
function pathArrow(pts,p,col,lw=3.5,dash){p=cl(p);if(p<=0)return;const n=Math.max(1,Math.floor((pts.length-1)*p)),sub=pts.slice(0,n+1);
  const f=(pts.length-1)*p-n;if(n<pts.length-1&&f>0){const a=pts[n],b=pts[n+1];sub.push([lerp(a[0],b[0],f),lerp(a[1],b[1],f)])}
  ctx.save();ctx.strokeStyle=INK;ctx.lineWidth=lw+2.4;ctx.lineCap='round';ctx.lineJoin='round';if(dash)ctx.setLineDash(dash);ctx.beginPath();sub.forEach((q,i)=>i?ctx.lineTo(q[0],q[1]):ctx.moveTo(q[0],q[1]));ctx.stroke();
  ctx.strokeStyle=col;ctx.lineWidth=lw;ctx.stroke();ctx.setLineDash([]);
  const e=sub[sub.length-1],b=sub[Math.max(0,sub.length-3)],a=Math.atan2(e[1]-b[1],e[0]-b[0]);
  if(p>.02){ctx.translate(e[0],e[1]);ctx.rotate(a);poly([[8,0],[-6,-7],[-6,7]],col,INK,1.6)}ctx.restore()}
function badge(x,y,s,n,col,t,ts){if(t<ts)return;const q=eb(cl((t-ts)/.35));tr(x,y,q*s,0,()=>{circ(0,0,15,col,INK,3);txt(n,0,1,20,'#fff',{wt:'900',f:DISP})})}
function doc(x,y,s,col){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.fillStyle=CREAM;rr(-38,-26,76,52,6);ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=2;ctx.stroke();
  ctx.strokeStyle='rgba(18,12,7,.45)';ctx.lineWidth=1.6;for(let i=0;i<3;i++){ctx.beginPath();ctx.moveTo(-28,-14+i*9);ctx.lineTo(28-i*8,-14+i*9);ctx.stroke()}
  ctx.strokeStyle=col;ctx.lineWidth=2.4;ctx.beginPath();ctx.moveTo(-26,16);ctx.bezierCurveTo(-14,8,-8,22,2,13);ctx.stroke();ctx.restore()}
