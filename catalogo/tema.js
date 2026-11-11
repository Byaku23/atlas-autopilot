// tema.js — paleta y texto por parámetros (sin reescribir código). Cárgalo en index.html DESPUÉS de core.js y ANTES de assets.js:
//   <script src="../../catalogo/tema.js"></script>
// Uso en assets.js (reemplaza la línea "CAP.acc=...; const TX=..."):
//   const T=tema({acc:'#3ef2e6', ink:'rgba(10,3,24,.85)', sw:3.5});   // todo opcional
//   const TX=T.TX, TAG=T.TAG;       // TX(s,x,y,sz,col,t,t0,o) = mtext con contorno del tema ; TAG = tag con contorno del tema
//   T.bg()                          // fondo vertical con T.bg0 -> T.bg1 (dentro de world o de la escena)
// Equivale a las líneas TX que tenían v02_gatos (ink 'rgba(10,3,24,.85)', sw 3.5) y animales_guerra (ink '#...', sw 4).
function tema(o) {
  const T = Object.assign({ ink: 'rgba(0,0,0,.6)', acc: '#ffb547', sw: 4, k: .2, bg0: '#050a14', bg1: '#15233b' }, o);
  CAP.acc = T.acc;                                                    // color de la palabra activa del subtítulo
  T.TX = (s, x, y, sz, col, t, t0, oo = {}) => mtext(s, x, y, sz, col, t, t0, Object.assign({ stroke: T.ink, sw: Math.max(T.sw, sz * T.k) }, oo));
  T.TAG = (s, x, y, sz, bgc, fg, t, t0, oo = {}) => tag(s, x, y, sz, bgc, fg, t, t0, Object.assign({ stroke: T.ink }, oo));
  T.bg = () => bg(T.bg0, T.bg1);
  return T;
}
