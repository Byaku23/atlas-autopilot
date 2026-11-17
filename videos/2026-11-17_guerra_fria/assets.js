// ===== Guerra Fría en mapa — recursos (mapa satélite real NASA + Natural Earth; Oeste azul, Este rojo) =====
const TM=tema({acc:'#ffd23f',ink:'rgba(4,8,20,.92)',sw:4,bg0:'#050a14',bg1:'#10182b'});
const TX=TM.TX,TG=TM.TAG;
const W_='#2f7bff',EA='#ff3d3d',GOLD='#ffd23f',INK='#07101f',NEU='#cfd6e6',BRK='#d2c9b6';
const TEX=mapaCargar('../../catalogo/mapa/blue_marble.jpg',[-182.76,172.6,90,-62.97]);
const nb=(a,b,t)=>cl((t-a)/(b-a));
const NATO=['United States of America','Canada','United Kingdom','France','Italy','Belgium','Netherlands','Luxembourg','Denmark','Norway','Iceland','Portugal'];
const USSR=['Russia','Ukraine','Belarus','Lithuania','Latvia','Estonia','Moldova','Georgia','Armenia','Azerbaijan','Kazakhstan','Uzbekistan','Turkmenistan','Kyrgyzstan','Tajikistan'];
const PACT=['Poland','Czechia','Slovakia','Hungary','Romania','Bulgaria','Albania'];
const COLS=['#ff9f1c','#2ec4b6','#c77dff','#ffd23f','#4cc9f0','#80ed99','#ff6b9d','#f4845f','#9d8df1','#72efdd','#e5989b','#b5e48c','#ffadad','#90e0ef','#f7b267'];
// países: relleno semitransparente + borde. names=null → todos
function PF(c,names,col,a,o={}){ctx.save();ctx.lineJoin='round';const step=c.s>40?1:2;
  for(const p of MAPA_PAISES){if(names&&!names.includes(p.n))continue;const cc=typeof col==='function'?col(p):col;_mapaPath(c,p.g,step);
    if(a>0&&cc){ctx.globalAlpha=a;ctx.fillStyle=cc;ctx.fill()}
    ctx.globalAlpha=o.ba===undefined?.8:o.ba;ctx.strokeStyle=o.b||'rgba(255,255,255,.8)';ctx.lineWidth=o.lw||1;ctx.stroke()}
  ctx.restore()}
function base(c,o={}){mapaTextura(TEX,c,{dim:o.dim===undefined?.38:o.dim,sat:.85});PF(c,null,null,0,{ba:.28,lw:.8});
  const ey=mapaPunto(c,0,90)[1];if(ey>-60&&ey<640){const g=ctx.createLinearGradient(0,ey,0,ey+70);g.addColorStop(0,'#0a1a33');g.addColorStop(1,'rgba(10,26,51,0)');ctx.fillStyle=g;ctx.fillRect(0,ey-2,360,72)}}
// Alemania partida (frontera interior aproximada): aw = alfa oeste azul, ae = alfa este rojo
const GEB=[[12.1,50.2],[11.4,50.4],[10.2,50.6],[10.0,50.9],[10.5,51.5],[10.6,51.9],[10.9,52.25],[10.7,52.7],[10.95,53.05],[10.7,53.5],[10.9,53.95],[11.2,55],[20,55],[20,50.2]];
function ger(c,aw,ae){const g=MAPA_PAISES.find(p=>p.n==='Germany');ctx.save();ctx.lineJoin='round';_mapaPath(c,g.g,c.s>40?1:2);
  ctx.globalAlpha=aw;ctx.fillStyle=W_;ctx.fill();ctx.clip();
  ctx.beginPath();GEB.forEach((q,i)=>{const p=mapaPunto(c,q[0],q[1]);i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1])});ctx.closePath();
  ctx.globalAlpha=ae;ctx.fillStyle=EA;ctx.fill();ctx.restore();
  ctx.save();ctx.beginPath();GEB.slice(0,11).forEach((q,i)=>{const p=mapaPunto(c,q[0],q[1]);i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1])});
  ctx.globalAlpha=Math.max(aw,ae)*1.1;ctx.strokeStyle='#fff';ctx.lineWidth=1.8;ctx.setLineDash([5,3]);ctx.stroke();ctx.restore()}
// flecha en pantalla por puntos [x,y], progreso p
function flecha(pts,p,col,lw=4){p=cl(p);if(p<=0)return;const n=Math.max(1,Math.floor((pts.length-1)*p)),sub=pts.slice(0,n+1),f=(pts.length-1)*p-n;
  if(n<pts.length-1&&f>0){const a=pts[n],b=pts[n+1];sub.push([lerp(a[0],b[0],f),lerp(a[1],b[1],f)])}
  ctx.save();ctx.lineCap='round';ctx.lineJoin='round';ctx.beginPath();sub.forEach((q,i)=>i?ctx.lineTo(q[0],q[1]):ctx.moveTo(q[0],q[1]));
  ctx.strokeStyle=INK;ctx.lineWidth=lw+3;ctx.stroke();ctx.strokeStyle=col;ctx.lineWidth=lw;ctx.stroke();
  const e=sub[sub.length-1],b=sub[Math.max(0,sub.length-2)],a=Math.atan2(e[1]-b[1],e[0]-b[0]);ctx.translate(e[0],e[1]);ctx.rotate(a);poly([[9,0],[-7,-8],[-7,8]],col,INK,2);ctx.restore()}
// ciudad esquemática partida: sp 0..1 = se separa en azul/rojo, gap = separación, wall 0..1 = muro que sube, fall 0..1 = muro que cae, push = presión de gente
function ciudad(cx,cy,RR,t,o={}){const sp=o.sp===undefined?1:o.sp,g=(o.gap||0)*RR/60,N=14,bh=2*RR/N;
  ctx.save();ctx.translate(cx,cy);
  ctx.save();ctx.globalAlpha=.5;ctx.fillStyle='rgba(0,0,0,.5)';ctx.beginPath();ctx.arc(0,3,RR+4,0,7);ctx.fill();ctx.restore();
  for(const s of [-1,1]){ctx.save();ctx.translate(s*g,0);ctx.beginPath();ctx.arc(0,0,RR,s<0?Math.PI/2:-Math.PI/2,s<0?Math.PI*1.5:Math.PI/2);ctx.closePath();
    ctx.fillStyle=mixc('#b9a8ff',s<0?W_:EA,sp);ctx.globalAlpha=.95;ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=2;ctx.stroke();
    // edificios (cuadritos)
    ctx.fillStyle='rgba(255,255,255,.28)';for(let i=0;i<9;i++){const a=R(i*3+(s>0?1:2))*6.28,d=R(i+9)*RR*.7;if(Math.cos(a)*d*s<4)continue;ctx.fillRect(Math.cos(a)*d-3,Math.sin(a)*d-3,6,6)}
    ctx.restore()}
  if(o.people){for(let i=0;i<14;i++){const s=i%2?1:-1,y=(R(i*5)-.5)*RR*1.5,k=o.people*(1-.5*R(i+2)),x=s*(g+8+(1-k)*(RR*.9)+Math.sin(t*8+i)*1.2);circ(x,y,2.6,s<0?'#cfe0ff':'#ffd0d0',INK,1)}}
  const wp=o.wall===undefined?0:o.wall,fl=o.fall||0;
  for(let i=0;i<N;i++){const k=cl(wp*N-i*.5-0*1);if(k<=0&&!fl)continue;const d=cl((fl*1.6-(i%5)*.12)),y0=-RR+i*bh;
    ctx.save();ctx.translate(0,y0+bh/2+d*d*260);ctx.rotate(d*(i%2?1:-1)*1.4);const w=7;ctx.globalAlpha=1-cl((d-.7)*3);
    ctx.fillStyle=BRK;ctx.fillRect(-w/2,-bh/2+.4,w,bh-.8);ctx.strokeStyle='#6b6253';ctx.lineWidth=1;ctx.strokeRect(-w/2,-bh/2+.4,w,bh-.8);ctx.restore()}
  ctx.restore()}
// zona de peligro con anillos
function anillos(x,y,t,t0,col,n=3,r0=10,r1=120,per=1.6){for(let i=0;i<n;i++){const k=((t-t0)/per+i/n);if(t<t0)return;const f=k%1;ctx.save();ctx.globalAlpha=(1-f)*.85;ctx.strokeStyle=col;ctx.lineWidth=3*(1-f)+1;ctx.beginPath();ctx.arc(x,y,lerp(r0,r1,eo(f)),0,7);ctx.stroke();ctx.restore()}}
