// =====================================================================
//  core.js — motor de animación "Atlas del saber" v2 (curiosidades)
//  Lienzo lógico 360x640 (se dibuja a 2x => 720x1280). Render determinista con setT(t).
//  Novedades: texto con máscara (mtext / subtítulos palabra por palabra), cámara con
//  keyframes y seguimiento, morph de formas, transiciones morph/dive/push/ink/spin,
//  resortes e impactos para encadenar acciones.
// =====================================================================
const cv=document.getElementById('c'),ctx=cv.getContext('2d');
const TAU=Math.PI*2;
{const _a=ctx.arc.bind(ctx),_e=ctx.ellipse.bind(ctx);ctx.arc=(x,y,r,a,b,c)=>_a(x,y,Math.max(0,r||0),a,b,c);const _g=ctx.createRadialGradient.bind(ctx);ctx.createRadialGradient=(a,b,r0,c,d,r1)=>_g(a,b,Math.max(0,r0||0),c,d,Math.max(0,r1||0));ctx.ellipse=(x,y,rx,ry,ro,a,b,c)=>_e(x,y,Math.max(0,rx||0),Math.max(0,ry||0),ro,a,b,c);}
const R=n=>{const x=Math.sin(n*127.1+311.7)*43758.5453;return x-Math.floor(x)};
const cl=(x,a=0,b=1)=>Math.max(a,Math.min(b,x));
const lerp=(a,b,t)=>a+(b-a)*t;
const eo=x=>1-Math.pow(1-cl(x),3);               // ease-out
const ei=x=>Math.pow(cl(x),3);                    // ease-in
const ez=x=>{x=cl(x);return x*x*(3-2*x)};         // smooth
const eio=x=>{x=cl(x);return x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2};
const eb=x=>{x=cl(x);const c1=1.70158,c3=c1+1;return 1+c3*Math.pow(x-1,3)+c1*Math.pow(x-1,2)}; // back-out
const eel=x=>{x=cl(x);if(x===0||x===1)return x;return Math.pow(2,-10*x)*Math.sin((x*10-.75)*TAU/3)+1}; // elastic-out
const win=(t,a,b)=>cl((t-a)/(b-a));               // 0..1 entre a y b
const fade2=(t,a,b,c,d)=>cl((t-a)/(b-a))*cl((d-t)/(d-c));
// resortes: spring 0->1 con rebote; wob = oscilación que se apaga (reacción a un golpe)
const spring=(u,k=14,d=6)=>u<=0?0:1-Math.exp(-d*u)*Math.cos(k*u);
const wob=(u,k=18,d=7)=>u<=0?0:Math.exp(-d*u)*Math.sin(k*u);
const at=(t,k)=>t>=E[k];
const un=(t,k)=>t-E[k];
// ---------- fuentes ----------
const DISP='"Inter Display","Inter",sans-serif', SANS='"Inter","DejaVu Sans",sans-serif', SERIF='"Lora","DejaVu Serif",serif', MONO='"DejaVu Sans Mono",monospace', COND='"TeX Gyre Heros Cn","DejaVu Sans Condensed",sans-serif';
// ---------- color ----------
function hx(h){h=h.replace('#','');if(h.length===3)h=h.split('').map(c=>c+c).join('');return [parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]}
function rgba(h,a){const c=hx(h);return `rgba(${c[0]},${c[1]},${c[2]},${a})`}
function mixc(a,b,t){const A=hx(a),B=hx(b);return '#'+A.map((v,i)=>Math.round(lerp(v,B[i],cl(t))).toString(16).padStart(2,'0')).join('')}
// ---------- primitivas ----------
function rr(x,y,w,h,r){r=Math.max(0,Math.min(r,Math.abs(w)/2,Math.abs(h)/2));ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath()}
function circ(x,y,r,fill,stroke,lw=1){ctx.beginPath();ctx.arc(x,y,Math.max(0,r),0,TAU);if(fill){ctx.fillStyle=fill;ctx.fill()}if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=lw;ctx.stroke()}}
function poly(pts,fill,stroke,lw=1){ctx.beginPath();pts.forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));ctx.closePath();if(fill){ctx.fillStyle=fill;ctx.fill()}if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=lw;ctx.stroke()}}
function line(x0,y0,x1,y1,col,lw=1,cap='round'){ctx.strokeStyle=col;ctx.lineWidth=lw;ctx.lineCap=cap;ctx.beginPath();ctx.moveTo(x0,y0);ctx.lineTo(x1,y1);ctx.stroke()}
function glow(x,y,r,col,a=1){if(r<=0)return;const g=ctx.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,col);g.addColorStop(1,'rgba(0,0,0,0)');ctx.save();ctx.globalAlpha*=a;ctx.fillStyle=g;ctx.beginPath();ctx.arc(x,y,r,0,TAU);ctx.fill();ctx.restore()}
function vgrad(y0,y1,c0,c1,x0=-200,w=760){const g=ctx.createLinearGradient(0,y0,0,y1);g.addColorStop(0,c0);g.addColorStop(1,c1);ctx.fillStyle=g;ctx.fillRect(x0,y0,w,y1-y0)}
function bg(c0,c1){vgrad(-1400,2040,c0,c1,-3000,7000)}  // fondo que cubre aunque la cámara se aleje
function addLight(fn){ctx.save();ctx.globalCompositeOperation='lighter';fn();ctx.restore()}
function withA(a,fn){if(a<=0)return;ctx.save();ctx.globalAlpha*=cl(a);fn();ctx.restore()}
function tr(x,y,s,r,fn){ctx.save();ctx.translate(x,y);if(r)ctx.rotate(r);if(s!==1)ctx.scale(s,s);fn();ctx.restore()}
function txt(s,x,y,sz,col,o={}){ctx.save();ctx.translate(x,y);if(o.rot)ctx.rotate(o.rot);if(o.sc)ctx.scale(o.sc,o.sc);ctx.globalAlpha*=(o.al===undefined?1:o.al);
  ctx.font=(o.wt||'900')+' '+sz+'px '+(o.f||DISP);ctx.textAlign=o.a||'center';ctx.textBaseline='middle';
  if(o.sh){ctx.shadowColor=o.sh;ctx.shadowBlur=o.shb||10}
  if(o.st){ctx.lineWidth=o.sw||4;ctx.strokeStyle=o.st;ctx.lineJoin='round';ctx.strokeText(s,0,0)}
  ctx.fillStyle=col;ctx.fillText(s,0,0);ctx.restore()}
function tw(s,sz,f=DISP,wt='900'){ctx.save();ctx.font=wt+' '+sz+'px '+f;const w=ctx.measureText(s).width;ctx.restore();return w}
// ---------- partículas y efectos ----------
function embers(t,n,col,seed=1,spd=22,sz=1.6,area=[0,0,360,640]){ctx.save();ctx.fillStyle=col;for(let i=0;i<n;i++){const a=R(i+seed*91),b=R(i*3+seed),x=area[0]+(a*area[2]+Math.sin(t*.8+i)*14)%area[2],y=area[1]+area[3]-((t*spd*(.4+b)+a*area[3])%(area[3]+20));ctx.globalAlpha=.25+.6*R(i+7);ctx.beginPath();ctx.arc(x,y,sz*(.5+b),0,TAU);ctx.fill()}ctx.restore()}
function dust(t,n,col,seed=1,spd=10,sz=1.5,a=.5){ctx.save();ctx.fillStyle=col;for(let i=0;i<n;i++){const ax=R(i+seed*13),ay=R(i*3+seed);const x=(ax*360+t*spd*(.3+ay)+Math.sin(t*.7+i)*8)%360,y=(ay*640+t*spd*.4*(.2+ax))%640;ctx.globalAlpha=a*(.3+.7*R(i+9));ctx.beginPath();ctx.arc(x,y,sz*(.5+R(i)),0,TAU);ctx.fill()}ctx.restore()}
function stars(t,n,seed=3,a=1,tw_=1){ctx.save();for(let i=0;i<n;i++){const x=R(i*1.7+seed)*400-20,y=R(i*2.3+seed)*700-30,s=R(i+seed*5);ctx.globalAlpha=a*(.3+.7*s)*(.6+.4*Math.sin(t*(1+s*3)*tw_+i));ctx.fillStyle='#fff';ctx.fillRect(x,y,s<.9?1:1.8,s<.9?1:1.8)}ctx.restore()}
function shock(x,y,t,ts,col,R0=120,w=4,dur=.7){const u=(t-ts)/dur;if(u<0||u>1)return;ctx.save();ctx.strokeStyle=col;ctx.globalAlpha=1-u;ctx.lineWidth=w*(1-u)+.5;ctx.beginPath();ctx.arc(x,y,R0*eo(u),0,TAU);ctx.stroke();ctx.restore()}
function sparks(x,y,t,ts,n=16,col='#ffd070',spd=130,life=.7,g=260,seed=0){const u=t-ts;if(u<0||u>life)return;ctx.save();ctx.fillStyle=col;for(let i=0;i<n;i++){const a=R(i*3.1+ts*7+seed)*TAU,v=spd*(.35+R(i+ts*3+seed));const px=x+Math.cos(a)*v*u,py=y+Math.sin(a)*v*u+g*u*u;ctx.globalAlpha=1-u/life;ctx.fillRect(px-1,py-1,2.4,2.4)}ctx.restore()}
function burst(x,y,t,ts,cols=['#fff'],n=24,spd=160,life=.8,sz=3,seed=0){const u=t-ts;if(u<0||u>life)return;ctx.save();for(let i=0;i<n;i++){const a=i/n*TAU+R(i+seed)*.4,v=spd*(.5+R(i*7+seed)*.7),d=v*eo(u/life)*life*.9;ctx.globalAlpha=1-u/life;ctx.fillStyle=cols[i%cols.length];ctx.beginPath();ctx.arc(x+Math.cos(a)*d,y+Math.sin(a)*d,sz*(1-u/life*.6),0,TAU);ctx.fill()}ctx.restore()}
function rays(x,y,t,n,len,col,a=.25,spin=.15,w=.12){ctx.save();ctx.globalAlpha*=a;ctx.fillStyle=col;for(let i=0;i<n;i++){const an=i/n*TAU+t*spin;ctx.beginPath();ctx.moveTo(x,y);ctx.arc(x,y,len,an-w/2,an+w/2);ctx.closePath();ctx.fill()}ctx.restore()}
function smoke(x,y,t,ts,r=30,col='60,60,70',dur=2.5){if(t<ts)return;const u=(t-ts)/dur;if(u>1)return;for(let k=0;k<6;k++){const a=1-u;glow(x+Math.sin(k*2+t)*r*.5*u,y-u*r*1.8-k*3,r*(.5+u*1.2),'rgba('+col+','+(.5*a)+')',.8)}}
function bolt(x0,y0,x1,y1,seed,col,jag=40){ctx.save();ctx.lineJoin='round';const pts=[[x0,y0]];const n=14;for(let i=1;i<n;i++){const f=i/n;pts.push([lerp(x0,x1,f)+(R(i*3+seed)-.5)*jag*(1-f*.3),lerp(y0,y1,f)+(R(i*5+seed)-.5)*jag*.3])}pts.push([x1,y1]);[[9,.22],[4,.5],[1.6,1]].forEach(([w,a])=>{ctx.globalAlpha=a;ctx.strokeStyle=col;ctx.lineWidth=w;ctx.beginPath();pts.forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));ctx.stroke()});ctx.restore()}
function streaks(t,n,col,dir=0,spd=900,len=60,a=.5,seed=1){ctx.save();ctx.strokeStyle=col;ctx.lineCap='round';for(let i=0;i<n;i++){const o=R(i+seed)*1400,p=((t*spd*(.6+R(i*3+seed)*.8)+o)%1400)-400;const q=R(i*7+seed)*700-30;ctx.globalAlpha=a*(.3+.7*R(i+2));ctx.lineWidth=.6+R(i*5)*1.6;ctx.beginPath();if(dir===0){ctx.moveTo(p,q);ctx.lineTo(p-len,q)}else{ctx.moveTo(q*.5,p);ctx.lineTo(q*.5,p-len)}ctx.stroke()}ctx.restore()}
// ---------- formas y MORPH ----------
// Todas las formas: n puntos, empiezan arriba (ángulo -90°) y van en sentido horario => se pueden mezclar con morph().
const SH={
  circle:(cx,cy,r,n=72)=>Array.from({length:n},(_,i)=>{const a=i/n*TAU-Math.PI/2;return [cx+Math.cos(a)*r,cy+Math.sin(a)*r]}),
  ellipse:(cx,cy,rx,ry,n=72)=>Array.from({length:n},(_,i)=>{const a=i/n*TAU-Math.PI/2;return [cx+Math.cos(a)*rx,cy+Math.sin(a)*ry]}),
  star:(cx,cy,r1,r2,k=5,n=72)=>Array.from({length:n},(_,i)=>{const a=i/n*TAU-Math.PI/2;const f=(i/n*k*2)%2;const rr_=f<1?lerp(r1,r2,f):lerp(r2,r1,f-1);return [cx+Math.cos(a)*rr_,cy+Math.sin(a)*rr_]}),
  heart:(cx,cy,s,n=72)=>Array.from({length:n},(_,i)=>{const a=i/n*TAU;const x=16*Math.pow(Math.sin(a),3),y=-(13*Math.cos(a)-5*Math.cos(2*a)-2*Math.cos(3*a)-Math.cos(4*a));return [cx+x*s/16,cy+y*s/16]}),
  rrect:(x,y,w,h,r,n=72)=>{const pts=[];const per=[];r=Math.min(r,w/2,h/2);
    // contorno empezando arriba al centro, sentido horario
    const seg=[];const add=(fn,len)=>seg.push([fn,len]);
    add(f=>[x+w/2+f*(w/2-r),y],w/2-r);
    add(f=>{const a=-Math.PI/2+f*Math.PI/2;return [x+w-r+Math.cos(a)*r,y+r+Math.sin(a)*r]},Math.PI*r/2);
    add(f=>[x+w,y+r+f*(h-2*r)],h-2*r);
    add(f=>{const a=f*Math.PI/2;return [x+w-r+Math.cos(a)*r,y+h-r+Math.sin(a)*r]},Math.PI*r/2);
    add(f=>[x+w-r-f*(w-2*r),y+h],w-2*r);
    add(f=>{const a=Math.PI/2+f*Math.PI/2;return [x+r+Math.cos(a)*r,y+h-r+Math.sin(a)*r]},Math.PI*r/2);
    add(f=>[x,y+h-r-f*(h-2*r)],h-2*r);
    add(f=>{const a=Math.PI+f*Math.PI/2;return [x+r+Math.cos(a)*r,y+r+Math.sin(a)*r]},Math.PI*r/2);
    add(f=>[x+r+f*(w/2-r),y],w/2-r);
    const tot=seg.reduce((s,q)=>s+Math.max(q[1],1e-6),0);
    for(let i=0;i<n;i++){let d=i/n*tot;for(const [fn,len] of seg){const L=Math.max(len,1e-6);if(d<=L){pts.push(fn(d/L));break}d-=L}}return pts},
  poly:(P,n=72)=>{ // re-muestrea un polígono cerrado (empieza en el punto más alto)
    let k=0;P.forEach((p,i)=>{if(p[1]<P[k][1])k=i});P=P.slice(k).concat(P.slice(0,k));
    const L=[];let tot=0;for(let i=0;i<P.length;i++){const a=P[i],b=P[(i+1)%P.length];const d=Math.hypot(b[0]-a[0],b[1]-a[1]);L.push(d);tot+=d}
    const out=[];for(let i=0;i<n;i++){let d=i/n*tot,j=0;while(d>L[j]&&j<L.length-1){d-=L[j];j++}const a=P[j],b=P[(j+1)%P.length],f=L[j]?d/L[j]:0;out.push([lerp(a[0],b[0],f),lerp(a[1],b[1],f)])}return out}
};
function morph(A,B,p){return A.map((a,i)=>[lerp(a[0],B[i][0],p),lerp(a[1],B[i][1],p)])}
function shape(pts,fill,stroke,lw=1){poly(pts,fill,stroke,lw)}
function wobble(pts,t,amp=3,freq=3,seed=1){const n=pts.length;let cx=0,cy=0;pts.forEach(p=>{cx+=p[0];cy+=p[1]});cx/=n;cy/=n;return pts.map((p,i)=>{const a=Math.atan2(p[1]-cy,p[0]-cx);const d=amp*Math.sin(a*freq+t*3+seed)+amp*.5*Math.sin(a*(freq+2)-t*2.3+seed*2);return [p[0]+Math.cos(a)*d,p[1]+Math.sin(a)*d]})}
// ---------- CÁMARA ----------
// keys: [[u,x,y,z,(rot),(ease)],...]  (u = segundos dentro de la escena; x,y = punto del mundo al centro; z = zoom)
function camAt(u,keys){if(u<=keys[0][0])return {x:keys[0][1],y:keys[0][2],z:keys[0][3],r:keys[0][4]||0};
  for(let i=0;i<keys.length-1;i++){const a=keys[i],b=keys[i+1];if(u<b[0]){const f=(u-a[0])/(b[0]-a[0]);const e=(b[5]==='eo'?eo:b[5]==='ei'?ei:b[5]==='lin'?(x=>x):b[5]==='eb'?eb:eio)(f);
      return {x:lerp(a[1],b[1],e),y:lerp(a[2],b[2],e),z:Math.exp(lerp(Math.log(a[3]),Math.log(b[3]),e)),r:lerp(a[4]||0,b[4]||0,e)}}}
  const k=keys[keys.length-1];return {x:k[1],y:k[2],z:k[3],r:k[4]||0}}
// seguimiento suave: la cámara persigue a un objeto con retraso (determinista)
function follow(pos,t,lag=.35,n=8){let x=0,y=0,w=0;for(let i=0;i<n;i++){const tt_=t-lag*i/n,q=pos(tt_),k=1-i/n*.7;x+=q[0]*k;y+=q[1]*k;w+=k}return [x/w,y/w]}
function world(c,fn){ctx.save();ctx.translate(180,320);if(c.r)ctx.rotate(c.r);ctx.scale(c.z,c.z);ctx.translate(-c.x,-c.y);fn();ctx.restore()}
function toScreen(c,x,y){const dx=(x-c.x)*c.z,dy=(y-c.y)*c.z,cs=Math.cos(c.r||0),sn=Math.sin(c.r||0);return [180+dx*cs-dy*sn,320+dx*sn+dy*cs]}
// ---------- TEXTO CON MÁSCARA ----------
// mtext: cada palabra sale de detrás de un borde (máscara por línea). o: {w,a,d,st,out,od,dir,wt,f,st:stroke...}
function mtext(s,x,y,sz,col,t,t0,o={}){
  if(t<t0-.001)return; if(o.out!==undefined&&t>o.out+(o.od||.35)+s.split(' ').length*(o.stg===undefined?.06:o.stg))return;
  ctx.save();const font=(o.wt||'900')+' '+sz+'px '+(o.f||DISP);ctx.font=font;
  const words=s.split(' '),sp=Math.max(ctx.measureText(' ').width,sz*.28),W=words.map(w=>ctx.measureText(w).width);
  const maxW=o.w||1e9,lines=[];let cur=[],cw=0;
  words.forEach((w,i)=>{const add=(cur.length?sp:0)+W[i];if(cur.length&&cw+add>maxW){lines.push([cur,cw]);cur=[i];cw=W[i]}else{cur.push(i);cw+=add}});if(cur.length)lines.push([cur,cw]);
  const lh=o.lh||sz*1.12,a=o.a||'center',dur=o.d||.42,stg=o.stg===undefined?.06:o.stg,dir=o.dir||1;let k=0;
  lines.forEach((L,li)=>{const ly=y+(li-(lines.length-1)/2)*lh;const lx=a==='center'?x-L[1]/2:a==='left'?x:x-L[1];
    ctx.save();ctx.beginPath();ctx.rect(lx-sz,ly-sz*.68,L[1]+sz*2,sz*1.36);ctx.clip();
    let cx=lx;L[0].forEach(i=>{const ts=t0+k*stg;const q=(o.ease||eo)((t-ts)/dur);let dy=(1-q)*sz*1.25*dir;
      if(o.out!==undefined&&t>o.out){dy-=ei((t-o.out-k*stg*.6)/(o.od||.35))*sz*1.3*dir}
      if(q>0){const c=(o.hl&&o.hl.includes(i))?(o.hc||'#ffd84a'):col;ctx.font=font;ctx.textAlign='left';ctx.textBaseline='middle';
        if(o.sh){ctx.shadowColor=o.sh;ctx.shadowBlur=o.shb||12}
        if(o.stroke){ctx.lineJoin='round';ctx.lineWidth=o.sw||Math.max(3,sz*.16);ctx.strokeStyle=o.stroke;ctx.strokeText(words[i],cx,ly+dy)}
        ctx.fillStyle=c;ctx.fillText(words[i],cx,ly+dy);ctx.shadowBlur=0}
      cx+=W[i]+sp;k++});
    ctx.restore()});
  ctx.restore()}
// tag: barra de color que se dibuja y deja ver el texto por máscara (etiquetas, cifras, títulos chicos)
function tag(s,x,y,sz,bgc,fg,t,t0,o={}){if(t<t0)return;const u=t-t0;ctx.save();ctx.font=(o.wt||'800')+' '+sz+'px '+(o.f||DISP);
  const w=ctx.measureText(s).width+sz*1.1,h=sz*1.55,a=o.a||'center',x0=a==='center'?x-w/2:a==='left'?x:x-w;
  let wb=w*eo(u/.28);if(o.out!==undefined&&t>o.out){const q=ei((t-o.out)/.3);ctx.restore();ctx.save();ctx.font=(o.wt||'800')+' '+sz+'px '+(o.f||DISP);ctx.globalAlpha*=1-q;}
  ctx.fillStyle=bgc;rr(x0,y-h/2,wb,h,o.r===undefined?h*.22:o.r);ctx.fill();if(o.stroke){ctx.strokeStyle=o.stroke;ctx.lineWidth=1.2;ctx.stroke()}
  ctx.save();rr(x0,y-h/2,wb,h,0);ctx.clip();const q=eo((u-.12)/.3);ctx.fillStyle=fg;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(s,x0+w/2,y+1+(1-q)*h);ctx.restore();ctx.restore()}
// número que cuenta (con separador de miles)
function fmtN(v,dec=0){const s=v.toFixed(dec);const [a,b]=s.split('.');return a.replace(/\B(?=(\d{3})+(?!\d))/g,'.')+(b?','+b:'')}
function countV(v0,v1,t,t0,dur){return lerp(v0,v1,eo((t-t0)/dur))}
// slam: entra grande y cae a su sitio con rebote (para impactos)
function slam(s,x,y,sz,col,t,ts,o={}){if(t<ts)return;const u=t-ts;txt(s,x,y,sz,col,Object.assign({},o,{al:cl(u*14)*(o.al===undefined?1:o.al),sc:(o.sc||1)*(1+1.4*Math.exp(-u*12))}))}
// ---------- TRANSICIONES ----------
const bufA=document.createElement('canvas'),bufB=document.createElement('canvas');bufA.width=bufB.width=720;bufA.height=bufB.height=1280;
function grab(b){const g=b.getContext('2d');g.setTransform(1,0,0,1,0,0);g.clearRect(0,0,720,1280);g.drawImage(cv,0,0)}
function drawB(buf,x=0,y=0,w=360,h=640){ctx.drawImage(buf,x,y,w,h)}
function trDur(tr){if(!tr)return 0;if(tr.dur)return tr.dur;return {morph:.7,dive:.6,ink:.6,push:.45,spin:.5,dip:.5,fog:.6,flash:.34,whip:.34,glitch:.34,iris:.4,slide:.4,blinds:.4,zoom:.4,static:.34,cut:0}[tr.type]||.4}
function composite(tr,p,t){
  const e=ez(p),ty=tr.type;
  if(ty==='morph'){ // una tarjeta/forma del plano A crece y se convierte en el plano B
    const a=tr.a||[150,290,60,60,30],b=tr.b||[0,0,360,640,0],e2=eio(p);
    const cx_=lerp(a[0]+a[2]/2,b[0]+b[2]/2,e2),cy_=lerp(a[1]+a[3]/2,b[1]+b[3]/2,e2),w=lerp(a[2],b[2],e2),h=lerp(a[3],b[3],e2),r=lerp(a[4],b[4],e2);
    // A: se aleja un poco y se oscurece
    ctx.save();const za=1+.08*e2;ctx.translate(cx_,cy_);ctx.scale(za,za);ctx.translate(-cx_,-cy_);drawB(bufA);ctx.restore();ctx.fillStyle='rgba(0,0,0,'+(.45*e2)+')';ctx.fillRect(0,0,360,640);
    ctx.save();ctx.shadowColor='rgba(0,0,0,.6)';ctx.shadowBlur=24*(1-e2);rr(cx_-w/2,cy_-h/2,w,h,r);ctx.fillStyle=tr.col||'#fff';ctx.fill();ctx.restore();
    ctx.save();rr(cx_-w/2,cy_-h/2,w,h,r);ctx.clip();const s=Math.max(w/b[2],h/b[3]);ctx.translate(cx_,cy_);ctx.scale(s,s);ctx.translate(-(b[0]+b[2]/2),-(b[1]+b[3]/2));ctx.globalAlpha=cl((p-.18)/.4);drawB(bufB);ctx.restore();
    if(tr.col){ctx.save();rr(cx_-w/2,cy_-h/2,w,h,r);ctx.fillStyle=rgba(tr.col,cl(1-(p-.1)/.35)*.9);ctx.fill();ctx.restore()}
    ctx.save();rr(cx_-w/2,cy_-h/2,w,h,r);ctx.strokeStyle='rgba(255,255,255,'+(.8*(1-e2))+')';ctx.lineWidth=2;ctx.stroke();ctx.restore()}
  else if(ty==='dive'){ // la cámara se mete en un elemento de A y sale en B
    const x=tr.x===undefined?180:tr.x,y=tr.y===undefined?320:tr.y,z=tr.z||7;
    const sA=Math.exp(Math.log(z)*ei(Math.min(1,p/.62)));
    ctx.save();ctx.globalAlpha=1-cl((p-.45)/.2);ctx.translate(x,y);ctx.scale(sA,sA);ctx.translate(-x,-y);drawB(bufA);ctx.restore();
    const q=eo(cl((p-.4)/.6));if(q>0){ctx.save();ctx.globalAlpha=cl((p-.4)/.18);const sB=lerp(.35,1,q);ctx.translate(lerp(x,180,q),lerp(y,320,q));ctx.scale(sB,sB);ctx.translate(-180,-320);drawB(bufB);ctx.restore()}
    const f=1-Math.abs(p-.48)/.12;if(f>0){ctx.fillStyle='rgba(255,255,255,'+(.55*f)+')';ctx.fillRect(0,0,360,640)}}
  else if(ty==='push'){ // B empuja a A fuera del cuadro (con rebote al final)
    const d=tr.dir||'left',q=spring(p*1.05,9,7),ax=d==='left'?-360*q:d==='right'?360*q:0,ay=d==='up'?-640*q:d==='down'?640*q:0;
    const bx=d==='left'?360:d==='right'?-360:0,by=d==='up'?640:d==='down'?-640:0;
    for(let k=3;k>=1;k--){ctx.globalAlpha=.12;drawB(bufA,ax+ (d==='left'?k*8:d==='right'?-k*8:0),ay+(d==='up'?k*8:d==='down'?-k*8:0))}ctx.globalAlpha=1;
    drawB(bufA,ax,ay);ctx.save();ctx.shadowColor='rgba(0,0,0,.7)';ctx.shadowBlur=25;drawB(bufB,bx+ax,by+ay);ctx.restore()}
  else if(ty==='ink'){ // mancha orgánica que crece desde un punto
    drawB(bufA);const x=tr.x===undefined?180:tr.x,y=tr.y===undefined?320:tr.y,r=eio(p)*820;
    const pts=wobble(SH.circle(x,y,r,90),t,r*.07,5,3);ctx.save();poly(pts);ctx.clip();drawB(bufB);ctx.restore();
    ctx.save();poly(pts,null,tr.col||'#fff',6*(1-p)+1);ctx.restore()}
  else if(ty==='spin'){const a=e*Math.PI/2*(tr.dir||1);ctx.save();ctx.translate(180,320);ctx.rotate(-a);ctx.scale(1-.35*Math.sin(e*Math.PI),1-.35*Math.sin(e*Math.PI));ctx.globalAlpha=1-e;ctx.translate(-180,-320);drawB(bufA);ctx.restore();
    ctx.save();ctx.translate(180,320);ctx.rotate((Math.PI/2)*(1-e)*(tr.dir||1));ctx.scale(1-.35*Math.sin(e*Math.PI),1-.35*Math.sin(e*Math.PI));ctx.globalAlpha=e;ctx.translate(-180,-320);drawB(bufB);ctx.restore()}
  else if(ty==='whip'){const off=e*420;for(let k=0;k<6;k++){const a=1/(k+1.4);ctx.globalAlpha=a*.55;drawB(bufA,-off-k*10*e);drawB(bufB,420-off+k*10*e-60)}ctx.globalAlpha=1;drawB(bufA,-off);drawB(bufB,360-off+60*(1-e))}
  else if(ty==='flash'){drawB(p<.5?bufA:bufB);const f=1-Math.abs(p-.5)*2;ctx.fillStyle='rgba(255,255,255,'+Math.min(1,f*1.6)+')';ctx.fillRect(0,0,360,640)}
  else if(ty==='glitch'){drawB(p<.55?bufA:bufB);for(let i=0;i<12;i++){const y=R(i+Math.floor(t*30))*640,h=6+R(i*3)*30,o=(R(i*7+Math.floor(t*30))-.5)*80;ctx.drawImage(p<.55?bufB:bufA,0,y*2,720,h*2,o,y,360,h)}ctx.fillStyle='rgba(255,0,60,.12)';ctx.fillRect(0,0,360,640);ctx.fillStyle='rgba(0,255,255,.1)';ctx.fillRect(4,0,356,640)}
  else if(ty==='iris'){drawB(bufA);const x=tr.x===undefined?180:tr.x,y=tr.y===undefined?320:tr.y,r=e*760;ctx.save();ctx.beginPath();ctx.arc(x,y,r,0,TAU);ctx.clip();drawB(bufB);ctx.restore();ctx.strokeStyle=rgba(tr.col||'#ffd27a',1-p);ctx.lineWidth=8*(1-p)+1;ctx.beginPath();ctx.arc(x,y,r,0,TAU);ctx.stroke()}
  else if(ty==='slide'){const off=e*360;drawB(bufA,-off*.4);ctx.fillStyle='rgba(0,0,0,'+(.5*e)+')';ctx.fillRect(0,0,360,640);ctx.save();ctx.shadowColor='rgba(0,0,0,.8)';ctx.shadowBlur=20;drawB(bufB,360-off);ctx.restore()}
  else if(ty==='blinds'){drawB(bufA);const n=8,h=640/n;for(let i=0;i<n;i++){const q=cl(e*1.6-i*.08);ctx.save();ctx.beginPath();ctx.rect(0,i*h,360,h*q);ctx.clip();drawB(bufB);ctx.restore()}}
  else if(ty==='static'){drawB(p<.5?bufA:bufB);const a=1-Math.abs(p-.5)*2,f=Math.floor(t*30);for(let i=0;i<700;i++){const x=R(i*1.3+f)*360,y=R(i*2.7+f*.7)*640;ctx.fillStyle='rgba(255,255,255,'+(a*.9)+')';ctx.fillRect(x,y,2+R(i)*3,1.5)}}
  else if(ty==='dip'){const a=p<.5?p*2:(1-p)*2;drawB(p<.5?bufA:bufB);ctx.fillStyle=rgba(tr.col||'#000000',a);ctx.fillRect(0,0,360,640)}
  else if(ty==='fog'){drawB(bufA);ctx.globalAlpha=ez(p);drawB(bufB);ctx.globalAlpha=1;const a=1-Math.abs(p-.5)*2;for(let i=0;i<14;i++){glow(R(i)*360+Math.sin(t+i)*30,R(i*3)*640,160,'rgba(220,220,230,'+(.3*a)+')')}}
  else if(ty==='zoom'){ctx.save();ctx.translate(180,320);for(let k=5;k>=0;k--){const ss=1+e*1.2*(1+k*.04);ctx.save();ctx.scale(ss,ss);ctx.globalAlpha=k?.12:1-e;drawB(bufA,-180,-320);ctx.restore()}ctx.restore();ctx.save();ctx.translate(180,320);const s2=1.35-.35*e;ctx.scale(s2,s2);ctx.globalAlpha=e;drawB(bufB,-180,-320);ctx.restore();ctx.globalAlpha=1}
  else drawB(p<.5?bufA:bufB);
}
// ---------- SUBTÍTULOS palabra por palabra con máscara ----------
const CAP={y:566,sz:23,acc:'#ffd84a',col:'#ffffff',stroke:'rgba(6,6,10,.95)',band:true,maxW:330};
function captions(t){let cur=-1;for(let i=0;i<PAGES.length;i++){if(t>=PAGES[i][0]-.06)cur=i;else break}if(cur<0)return;const pg=PAGES[cur];
  const out=pg[1];if(t>out+.22)return;
  ctx.save();if(CAP.band){const g=ctx.createLinearGradient(0,CAP.y-60,0,640);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(0,0,0,.55)');ctx.fillStyle=g;ctx.fillRect(0,CAP.y-60,360,700-CAP.y)}
  ctx.font='900 '+CAP.sz+'px '+DISP;const words=pg[2],sp=Math.max(ctx.measureText(' ').width,CAP.sz*.3),W=words.map(w=>ctx.measureText(w[0]).width);
  // líneas (máx 2)
  const lines=[];let curL=[],cw=0;words.forEach((w,i)=>{const add=(curL.length?sp:0)+W[i];if(curL.length&&cw+add>CAP.maxW){lines.push([curL,cw]);curL=[i];cw=W[i]}else{curL.push(i);cw+=add}});if(curL.length)lines.push([curL,cw]);
  const lh=CAP.sz*1.18;
  lines.forEach((L,li)=>{const ly=CAP.y+(li-(lines.length-1)/2)*lh;let x=180-L[1]/2;ctx.save();ctx.beginPath();ctx.rect(0,ly-CAP.sz*.72,360,CAP.sz*1.44);ctx.clip();
    L[0].forEach(i=>{const s=words[i][1],nx=i+1<words.length?words[i+1][1]:out;const q=eo((t-(s-.04))/.16);if(q<=0){x+=W[i]+sp;return}
      let dy=(1-q)*CAP.sz*1.1;if(t>out)dy-=ei((t-out)/.2)*CAP.sz*1.2;const act=t>=s-.04&&t<nx;const sc=act?1+.06*Math.exp(-(t-s)*6):1;
      ctx.save();ctx.translate(x+W[i]/2,ly+dy);ctx.scale(sc,sc);ctx.textAlign='center';ctx.textBaseline='middle';ctx.lineJoin='round';ctx.lineWidth=6;ctx.strokeStyle=CAP.stroke;ctx.strokeText(words[i][0],0,0);ctx.fillStyle=act?CAP.acc:CAP.col;ctx.fillText(words[i][0],0,0);ctx.restore();x+=W[i]+sp});
    ctx.restore()});
  ctx.restore()}
// ---------- golpes de cámara (temblor + destello) ----------
function shakeAmt(t){let s=0;for(const h of HITS){if(t>=h[0]&&t-h[0]<.6)s+=h[1]*Math.exp(-(t-h[0])*9)}return Math.min(s,1.8)}
function flashAmt(t){let s=0;for(const h of HITS){if(t>=h[0]&&h[1]>=.6)s+=Math.exp(-(t-h[0])*16)*Math.min(.35,.1+h[1]*.12)}return Math.min(s,.45)}
// ---------- arranque ----------
let SCN=[],TRN=[],POST=null,PRE=null;
function boot(scenes,trs,opt={}){SCN=scenes;TRN=trs||[];Object.assign(CAP,opt.cap||{});POST=opt.post||null;PRE=opt.pre||null;
  window.setT=function(t){
    let i=0;for(let k=0;k<T.length-1;k++)if(t>=T[k])i=k;
    let trk=0,W0=0;for(let k=1;k<T.length-1;k++){const W=trDur(TRN[k]);if(W>0&&t>=T[k]-W&&t<T[k]){trk=k;W0=W}}
    if(trk){renderScene(trk-1,t);grab(bufA);renderScene(trk,t);grab(bufB);ctx.setTransform(2,0,0,2,0,0);ctx.fillStyle='#000';ctx.fillRect(0,0,360,640);composite(TRN[trk],(t-(T[trk]-W0))/W0,t)}
    else renderScene(i,t);
    ctx.setTransform(2,0,0,2,0,0);
    const fl=flashAmt(t);if(fl>.01){ctx.fillStyle='rgba(255,250,240,'+fl+')';ctx.fillRect(0,0,360,640)}
    if(POST)POST(t);
    const vg=ctx.createRadialGradient(180,320,200,180,320,430);vg.addColorStop(0,'rgba(0,0,0,0)');vg.addColorStop(1,'rgba(0,0,0,'+(opt.vig===undefined?.45:opt.vig)+')');ctx.fillStyle=vg;ctx.fillRect(0,0,360,640);
    ctx.fillStyle='rgba(255,255,255,.04)';for(let g=0;g<50;g++)ctx.fillRect(R(g+Math.floor(t*24)*7)*360,R(g*3+Math.floor(t*24))*640,1,1);
    // barra de progreso
    ctx.fillStyle='rgba(255,255,255,.12)';ctx.fillRect(0,0,360,2.5);ctx.fillStyle=CAP.acc;ctx.fillRect(0,0,360*cl(t/DUR),2.5);
    if(t>DUR-.5){ctx.fillStyle='rgba(0,0,0,'+cl((t-(DUR-.5))/.5)+')';ctx.fillRect(0,0,360,640)}
    captions(t);
  };
  setT(0);
}
function renderScene(i,t){ctx.setTransform(2,0,0,2,0,0);ctx.fillStyle='#000';ctx.fillRect(0,0,360,640);
  const sh=shakeAmt(t),dx=(R(Math.floor(t*30))-.5)*8*sh,dy=(R(Math.floor(t*30)+99)-.5)*8*sh;
  const u=t-T[i],L=T[i+1]-T[i],p=cl(u/L);
  ctx.save();ctx.translate(180+dx,320+dy);const z=1+.012*sh;ctx.scale(z,z);ctx.translate(-180,-320);
  if(PRE)PRE(t,i);SCN[i](t,u,p,L);ctx.restore()}
