// ===== 01 · Perros — escenas =====
// S0 GANCHO: fogata, humano lanza carne, la cámara sigue la carne hasta el lobo
const meatPos=tt_=>{const q=cl((tt_-E.h_dar-.05)/.8);return [lerp(118,226,q),lerp(374,433,q)-Math.sin(q*Math.PI)*110]};
const W0X=tt_=>tt_<E.h_lobo?302:lerp(302,284,eo((tt_-E.h_lobo)/.35));
const wEye=tt_=>[W0X(tt_)-41*1.05,442-42*1.05+(tt_>E.h_lobo+.3?.35*eo((tt_-E.h_lobo-.3)/.3)*10*1.05:0)];
function s0(t,u){const tD=E.h_dar,tL=E.h_lobo;let c;
  if(t<tD)c=camAt(u,[[0,198,382,1.5],[tD,190,375,1.25]]);
  else{const f=follow(meatPos,t,.22),k=eo((t-tD)/.35);c={x:lerp(190,f[0],k),y:lerp(375,f[1],k),z:lerp(1.25,1.5,eo((t-tD)/.9)),r:0};
    if(t>tL-.1){const q=eio((t-tL+.1)/.5),ey=wEye(t);c={x:lerp(c.x,ey[0],q),y:lerp(c.y,ey[1],q),z:lerp(c.z,2.3,q),r:0}}}
  const lit=t<tL?0:eo((t-tL)/.45),wx=W0X(t);
  world(c,()=>{llanuraNoche(t);hoguera(142,438,.8,t);if(lit>0)glow(260,420,90,'rgba(255,140,50,'+(.3*lit)+')');
    const arm=t<tD-.25?.35:t<tD?lerp(.35,-2.4,eo((t-tD+.25)/.25)):lerp(-2.4,-.2,eo((t-tD)/.22));
    human(100,440,1,{arm,rim:'#ff9a4a'});
    beast(wx,442,1.05,0,{flip:true,col:mixc('#04060a','#140d08',lit),rim:lit>0?rgba('#ff9a4a',.9*lit):null,eye:'rgba(255,215,110,.95)',ph:(t>tL&&t<tL+.7)?(t-tL)*15:0,head:t>tL+.55?.35*eo((t-tL-.55)/.35):0});
    if(t>tD+.05){const q=meatPos(t);meat(q[0],q[1],1,t<tL-.05?(t-tD)*10:7.5)}
    if(t>tL-.02)sparks(226,432,t,tL,14,'#ffd27a',110,.6,200);
    snowfall(t,50,4,.5,18)});
  shock(180,330,t,tL,'rgba(255,200,120,.8)',150,3,.6);
  mtext('HACE 15.000 AÑOS',180,96,31,'#fff',t,-.6,{stroke:'rgba(0,0,0,.55)',sw:6,out:2.05,hl:[1],hc:AMB});
  mtext('EL ERROR MÁS',180,82,25,'#fff',t,E.h_err-.06,{stroke:'rgba(0,0,0,.55)',sw:5,out:E.h_dar+.15});
  mtext('INTELIGENTE',180,118,40,AMB,t,E.h_int-.04,{stroke:'rgba(40,15,0,.7)',sw:6,out:E.h_dar+.2,sh:'rgba(255,160,50,.7)'})}
