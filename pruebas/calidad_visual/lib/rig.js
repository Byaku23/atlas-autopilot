// rig.js — personaje articulado 2D de perfil (cabeza, torso, brazos, piernas, cara con expresiones independientes).
// Cargar DESPUÉS de eng/core.js. Reutilizable: no depende de ninguna escena. Cada video elige colores y accesorios con `o`.
//
//   const j = figura(x, ySuelo, escala, POSE, EXPR, {flip, col:{piel,camisa,pantalon,zapato,pelo,sombrero}, mochila:true, sombrero:true,
//                    sil:'#000' (silueta de un solo color: sirve para sombras), t, delante:(j)=>{...} (dibuja encima de la mano cercana)})
//   j = {mano1:[x,y], mano2, cabeza:[x,y], pies...}  (coordenadas de pantalla/mundo) para poner objetos en la mano, partículas, cámara.
//
// POSE (ángulos en radianes, 0 = hacia abajo, + = hacia delante):
//   bob, agacha, lean (torso), head (cabeza), sh1/el1 (brazo cercano: hombro, codo), sh2/el2 (lejano), h1/k1 (pierna cercana: cadera, rodilla), h2/k2
// EXPR: brow (-1..1 ceja baja..sube), tilt (-1..1 triste..enfadada), eye (0..1 apertura), lx/ly (mirada -1..1), mouth (0..1 boca abierta), smile (-1..1), blush (0..1)
//
// animar(t, [[tiempo, pose, 'ease'], ...]) -> pose interpolada. Cada clave es el estado al llegar a `tiempo`; 'ease' ∈ lin|eio|eo|ei|back|spring.

const POSE0 = { bob: 0, agacha: 0, lean: 0, head: 0, sh1: .05, el1: .25, sh2: -.05, el2: .25, h1: .04, k1: .04, h2: -.04, k2: .04 };
const EXPR0 = { brow: 0, tilt: 0, eye: 1, lx: .4, ly: 0, mouth: 0, smile: .25, blush: 0 };
const EXPRS = {
  neutro: EXPR0,
  curioso: { brow: .6, tilt: -.15, eye: 1, lx: .5, ly: .1, mouth: 0, smile: .1, blush: 0 },
  sorpresa: { brow: 1, tilt: -.3, eye: 1.45, lx: .3, ly: -.2, mouth: .85, smile: 0, blush: 0 },
  asombro: { brow: .8, tilt: -.45, eye: 1.3, lx: .2, ly: -.5, mouth: .45, smile: .55, blush: .5 },
  alegre: { brow: .2, tilt: -.1, eye: .7, lx: .4, ly: 0, mouth: .35, smile: 1, blush: .6 },
  concentrado: { brow: -.4, tilt: .55, eye: .8, lx: .4, ly: .5, mouth: 0, smile: -.1, blush: 0 },
};
const EASE = { lin: x => x, eio: x => x < .5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2, eo: x => 1 - Math.pow(1 - x, 3), ei: x => x * x * x,
  back: x => { const c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2) },
  spring: x => x >= 1 ? 1 : 1 - Math.exp(-6.5 * x) * Math.cos(11 * x) };

function mezcla(a, b, k) { const o = {}; for (const key in a) o[key] = a[key] + ((b[key] === undefined ? a[key] : b[key]) - a[key]) * k; return o }
function animar(t, keys, base = POSE0) {
  if (t <= keys[0][0]) return Object.assign({}, base, keys[0][1]);
  for (let i = 1; i < keys.length; i++) {
    if (t <= keys[i][0]) {
      const A = Object.assign({}, base, keys[i - 1][1]), B = Object.assign({}, base, keys[i][1]);
      const f = EASE[keys[i][2] || 'eio'](Math.min(1, Math.max(0, (t - keys[i - 1][0]) / (keys[i][0] - keys[i - 1][0]))));
      return mezcla(A, B, f);
    }
  }
  return Object.assign({}, base, keys[keys.length - 1][1]);
}
const expr = (t, keys) => animar(t, keys.map(k => [k[0], typeof k[1] === 'string' ? EXPRS[k[1]] : k[1], k[2]]), EXPR0);

// Ciclo de paso sin deslizamiento: la fase sale de la distancia recorrida (x en px de pantalla/mundo, s = escala).
const FASE = (x, s) => x / (101 * s) * Math.PI * 2;
function caminar(ph, o = {}) {
  const A = (o.amp === undefined ? .55 : o.amp), c = Math.cos(ph), s = Math.sin(ph);
  return { bob: 2.4 * (.5 + .5 * Math.cos(2 * ph)) * (A / .55), agacha: 0, lean: (o.lean === undefined ? .07 : o.lean), head: -.03,
    h1: s * A, k1: Math.max(0, c) * .9 * (A / .55) + .06, h2: -s * A, k2: Math.max(0, -c) * .9 * (A / .55) + .06,
    sh1: -s * A * .75, el1: .3 + Math.max(0, s) * .25, sh2: s * A * .75, el2: .3 + Math.max(0, -s) * .25 };
}

const _osc = (col, k) => mixc(col, '#000000', k);
function figura(x, y, s, P, X, o = {}) {
  P = Object.assign({}, POSE0, P); X = Object.assign({}, EXPR0, X || {});
  const C = Object.assign({ piel: '#e0a878', camisa: '#2a9d8f', pantalon: '#6b4a32', zapato: '#2a1d16', pelo: '#2b1b12', sombrero: '#d9b26a', mochila: '#7a5230' }, o.col || {});
  const sil = o.sil, F = o.flip ? -1 : 1, t = o.t || 0;
  const col = c => sil || c, far = c => sil || _osc(c, .28);
  const L = { muslo: 25, tibia: 24, torso: 40, brazo: 20, ante: 19 };
  const pel = [0, -(L.muslo + L.tibia) - P.bob + P.agacha];   // pelvis: sube con bob, baja con agacha
  const pt = (p, a, l) => [p[0] + Math.sin(a) * l, p[1] + Math.cos(a) * l];
  // piernas
  const leg = (h, k) => { const kn = pt(pel, h, L.muslo), an = pt(kn, h - k, L.tibia); return [pel, kn, an] };
  const l1 = leg(P.h1, P.k1), l2 = leg(P.h2, P.k2);
  // torso
  const neck = [pel[0] + Math.sin(P.lean) * L.torso, pel[1] - Math.cos(P.lean) * L.torso];
  const sho = [pel[0] + Math.sin(P.lean) * (L.torso - 6), pel[1] - Math.cos(P.lean) * (L.torso - 6)];
  const hc = [neck[0] + Math.sin(P.lean + P.head) * 17, neck[1] - Math.cos(P.lean + P.head) * 17];
  const arm = (sh, el) => { const e = pt(sho, sh, L.brazo), h = pt(e, sh + el, L.ante); return [sho, e, h] };
  const a1 = arm(P.sh1, P.el1), a2 = arm(P.sh2, P.el2);
  const W = p => [x + p[0] * s * F, y + p[1] * s];  // a pantalla
  const J = { mano1: W(a1[2]), mano2: W(a2[2]), cabeza: W(hc), hombro: W(sho), pelvis: W(pel), pie1: W(l1[2]), pie2: W(l2[2]), codo1: W(a1[1]), dir: F, s };
  ctx.save(); ctx.translate(x, y); ctx.scale(F * s, s); ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  const seg = (A, w, c, ex) => { ctx.strokeStyle = c; ctx.lineWidth = w; ctx.beginPath(); ctx.moveTo(A[0][0], A[0][1]); for (let i = 1; i < A.length; i++) ctx.lineTo(A[i][0], A[i][1]); ctx.stroke() };
  const pie = (an, sh, c) => { ctx.save(); ctx.translate(an[0], an[1]); ctx.rotate(sh * .35); ctx.fillStyle = c; rr(-4, -4, 15, 8, 4); ctx.fill(); ctx.restore() };
  // lejanos
  seg(a2, 7, far(C.camisa)); circ(a2[2][0], a2[2][1], 4.3, far(C.piel));
  seg(l2, 9.5, far(C.pantalon)); pie(l2[2], P.h2 - P.k2, far(C.zapato));
  // mochila (detrás del torso)
  if (o.mochila) { ctx.save(); ctx.translate(sho[0], sho[1]); ctx.rotate(P.lean); ctx.fillStyle = col(C.mochila); rr(-19, 4, 15, 24, 5); ctx.fill();
    if (!sil) { ctx.fillStyle = _osc(C.mochila, .25); rr(-19, 4, 15, 6, 3); ctx.fill() }
    if (o.rollo && !sil) { ctx.fillStyle = '#f1e3bf'; ctx.save(); ctx.rotate(-.55); rr(-16, -9, 6, 22, 3); ctx.fill(); ctx.restore() }
    ctx.restore() }
  // torso
  seg([pel, [(pel[0] + sho[0]) / 2, (pel[1] + sho[1]) / 2], sho], 23, col(C.camisa));
  if (!sil) { ctx.globalAlpha = .18; seg([[pel[0] - 6, pel[1]], [sho[0] - 6, sho[1]]], 8, '#000'); ctx.globalAlpha = 1; seg([pel, [pel[0] + Math.sin(P.lean) * 5, pel[1] - 4]], 20, col(C.pantalon)) }
  else seg([pel, [pel[0], pel[1] - 4]], 20, sil);
  // pierna cercana
  seg(l1, 10.5, col(C.pantalon)); pie(l1[2], P.h1 - P.k1, col(C.zapato));
  // cuello y cabeza
  seg([neck, hc], 8, col(C.piel));
  ctx.save(); ctx.translate(hc[0], hc[1]); ctx.rotate(P.lean + P.head);
  circ(0, 0, 15, col(C.piel));
  if (!sil) {
    const b = t * 1.0, blinkK = (() => { const q = (t % 3.1); return q > 2.95 ? Math.max(.08, Math.abs(q - 3.025) / .075) : 1 })();
    const eye = Math.min(1.5, X.eye) * blinkK;
    // pelo / sombrero
    ctx.fillStyle = C.pelo; ctx.beginPath(); ctx.arc(-1, -1, 15.6, Math.PI * .62, Math.PI * 1.55); ctx.lineTo(-3, -3); ctx.fill();
    // cara
    const ex = 6.5, ey = -1.5;
    ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.ellipse(ex, ey, 4.4, 5.4 * eye + .4, 0, 0, TAU); ctx.fill();
    ctx.beginPath(); ctx.ellipse(ex + 7.6, ey, 3.1, 4 * eye + .35, 0, 0, TAU); ctx.fill();
    ctx.fillStyle = '#1b1b24'; const pr = 2.4 + (X.eye > 1.2 ? -.5 : 0);
    ctx.beginPath(); ctx.arc(ex + X.lx * 1.8, ey + X.ly * 2.2, pr, 0, TAU); ctx.fill();
    ctx.beginPath(); ctx.arc(ex + 7.6 + X.lx * 1.4, ey + X.ly * 1.8, pr * .78, 0, TAU); ctx.fill();
    ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(ex + X.lx * 1.8 + .9, ey + X.ly * 2.2 - 1, .8, 0, TAU); ctx.fill();
    // cejas
    ctx.strokeStyle = C.pelo; ctx.lineWidth = 1.9; ctx.lineCap = 'round';
    const by = -9 - X.brow * 3.2 - (eye - 1) * 3;
    ctx.beginPath(); ctx.moveTo(ex - 4.2, by - X.tilt * 2.4); ctx.lineTo(ex + 4.2, by + X.tilt * 3.2 - X.brow * .6); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(ex + 4.8, by + X.tilt * 3.2 - X.brow * .6); ctx.lineTo(ex + 10.8, by - X.tilt * 1.4); ctx.stroke();
    // nariz y boca
    ctx.fillStyle = _osc(C.piel, .12); ctx.beginPath(); ctx.arc(15.2, 3.2, 2.3, 0, TAU); ctx.fill();
    const my = 9.2, mx = 9.5;
    if (X.mouth > .08) { ctx.fillStyle = '#5a1f2a'; ctx.beginPath(); ctx.ellipse(mx + 1, my + X.mouth * 1.5, 2.2 + X.mouth * 1.8 + Math.max(0, X.smile) * 1.5, .9 + X.mouth * 4.2, 0, 0, TAU); ctx.fill() }
    else { ctx.strokeStyle = '#6a2f2f'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(mx - 4.5, my - X.smile * 1.2); ctx.quadraticCurveTo(mx + 1, my + X.smile * 4.2, mx + 6.5, my - X.smile * 1.2); ctx.stroke() }
    if (X.blush > .02) { ctx.fillStyle = 'rgba(255,110,110,' + X.blush * .4 + ')'; ctx.beginPath(); ctx.ellipse(8.5, 5, 3.6, 2.2, 0, 0, TAU); ctx.fill() }
    ctx.fillStyle = _osc(C.piel, .18); ctx.beginPath(); ctx.ellipse(-8, 1, 2.6, 4, 0, 0, TAU); ctx.fill();   // oreja
  }
  if (o.sombrero) { ctx.fillStyle = col(C.sombrero); ctx.beginPath(); ctx.ellipse(1, -9, 22, 5, -.05, 0, TAU); ctx.fill(); ctx.beginPath(); ctx.ellipse(0, -12.5, 12.5, 9.5, 0, Math.PI, TAU); ctx.fill();
    if (!sil) { ctx.fillStyle = _osc(C.sombrero, .35); ctx.fillRect(-12.4, -13, 24.8, 3.6) } }
  ctx.restore();
  // brazo cercano
  seg(a1, 7.6, col(C.camisa)); circ(a1[2][0], a1[2][1], 4.7, col(C.piel));
  ctx.restore();
  if (o.delante) o.delante(J);
  return J;
}
