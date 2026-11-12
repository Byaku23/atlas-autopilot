// scenes.js — demo de calidad visual (9,6 s, sin audio). Usa lib/rig.js, lib/mundo.js y lib/camara.js; el motor eng/ no se toca.
// Escena A (0–5,5 s): desierto al atardecer. Escena B (5,5–9,6 s): interior de templo. Transición 'pan' entre ambas.

const GY = 500, SC = 1.45;                       // suelo (plano del personaje) y escala del personaje
const win_ = (t, a, b) => cl((t - a) / (b - a));

// ---------- ESCENA A ----------
const XA = trayecto(-70, 92, 2.3, .55);
const velA = t => (XA(t + .02) - XA(t - .02)) / .04;
const XAF = XA(3);
const PASOS = (() => { const r = []; let last = Math.floor(FASE(XA(-1), SC) / Math.PI); for (let t = -1; t < 3.2; t += .005) { const n = Math.floor(FASE(XA(t), SC) / Math.PI); if (n !== last) { r.push([t, XA(t)]); last = n } } return r })();

const accA = [   // acciones encadenadas: frenar → sacar el pergamino y leerlo → sobresalto (salto) → señalar
  [2.3, {}],
  [2.65, { sh1: -1.05, el1: .7, lean: .05 }, 'eio'],
  [3.05, { sh1: -1.0, el1: .8, lean: .05 }, 'lin'],
  [3.5, { sh1: 1.0, el1: 1.35, lean: .0, head: .12 }, 'eo'],
  [3.95, { sh1: 1.0, el1: 1.35, head: .12 }, 'lin'],
  [4.1, { bob: 9, lean: -.2, head: -.3, sh1: .9, el1: .4, sh2: .9, el2: .5, h1: .25, k1: .5, h2: -.2, k2: .5 }, 'eo'],
  [4.4, { bob: 0, agacha: 3, lean: -.1, head: -.1, sh1: .7, el1: .5, sh2: .2, el2: .3 }, 'ei'],
  [4.85, { bob: 0, agacha: 0, lean: .05, head: .05, sh1: 1.55, el1: .05, sh2: -.05, el2: .25 }, 'back'],
  [9, { sh1: 1.55, el1: .05, lean: .05 }, 'lin'],
];
const exA = [[0, 'curioso'], [2.4, 'curioso'], [2.9, 'concentrado'], [3.95, 'concentrado'], [4.05, 'sorpresa', 'eo'], [4.6, 'sorpresa'], [4.95, 'asombro', 'eio']];

function poseA(t) {
  const k = cl(velA(t) / 70), walk = mezcla(POSE0, caminar(FASE(XA(t), SC)), k);
  return mezcla(walk, animar(t, accA), eio(win_(t, 2.35, 2.75)));
}
const camA = t => camSeq(t, [
  { a: 0, mix: 0, f: t => camSeguir(t_ => [XA(t_), GY], t, { off: 55, lead: .35, dy: -105, z: 1.0 }) },
  { a: 2.3, mix: .9, f: t => ({ x: XAF + 40, y: GY - 120, z: zoomT(t, 2.3, 3.5, 1.0, 1.75), r: 0 }) },
  { a: 4.0, mix: .55, f: t => ({ x: lerp(XAF + 40, XAF + 160, eio(win_(t, 4.0, 5.5))), y: lerp(GY - 120, GY - 135, win_(t, 4.0, 5.5)), z: zoomT(t, 4.0, 5.5, 1.75, 1.0), r: -.02 * win_(t, 4.2, 5.5) }) },
], .8);

const PX = 330, PY = 374;
function piramide(t) {
  const g = eo(win_(t, 3.95, 4.7)), w = 112, h = 150;
  ctx.fillStyle = '#3d2147'; ctx.beginPath(); ctx.moveTo(PX - w, PY); ctx.lineTo(PX, PY - h); ctx.lineTo(PX + 6, PY); ctx.closePath(); ctx.fill();      // cara en sombra
  ctx.fillStyle = '#a8584f'; ctx.beginPath(); ctx.moveTo(PX + 6, PY); ctx.lineTo(PX, PY - h); ctx.lineTo(PX + w + 12, PY); ctx.closePath(); ctx.fill();   // cara iluminada por el sol
  ctx.strokeStyle = 'rgba(255,200,140,.5)'; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.moveTo(PX, PY - h); ctx.lineTo(PX + w + 12, PY); ctx.stroke();
  for (let i = 1; i < 7; i++) { const yy = PY - i * 21, ww = w * (1 - i / 7.2); ctx.strokeStyle = 'rgba(40,16,40,' + (.22) + ')'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(PX - ww, yy); ctx.lineTo(PX + ww + 8, yy); ctx.stroke() }
  if (g > 0) {
    addLight(() => { glow(PX, PY - h + 6, 130 * g, '#ffc766', .9 * g); glow(PX + 40, PY - 30, 70 * g, '#ffb040', .35 * g) });
    ctx.save(); ctx.globalCompositeOperation = 'lighter'; rays(PX, PY - h + 6, t, 11, 220, '#ffd78a', .22 * g, .12, .06); ctx.restore();
    ctx.strokeStyle = 'rgba(255,225,150,' + .95 * g + ')'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(PX - w, PY); ctx.lineTo(PX, PY - h); ctx.lineTo(PX + w + 12, PY); ctx.stroke();
  }
  colinas(PY + 2, '#8a4a60', 6, .02, 2, -900, 1900, '#6e3860');   // falda de duna: tapa la base
}
function cielo(t) {
  vgrad(-320, 420, '#120d33', '#f39a55', -500, 1360);
  stars(t, 34, 3, .55);
  addLight(() => { glow(268, 348, 230, '#ff8a3c', .75); glow(268, 348, 80, '#ffd9a0', .8) }); circ(268, 348, 21, '#fff0cc');
}
function nubes() {
  ctx.fillStyle = 'rgba(255,150,110,.30)'; for (let i = 0; i < 6; i++) { ctx.beginPath(); ctx.ellipse(-60 + i * 140 + R(i) * 40, 150 + R(i * 3) * 110, 70 + R(i + 5) * 40, 6 + R(i + 9) * 5, -.04, 0, TAU); ctx.fill() }
  ctx.fillStyle = 'rgba(60,20,90,.35)'; for (let i = 0; i < 5; i++) { ctx.beginPath(); ctx.ellipse(10 + i * 150, 90 + R(i * 7) * 120, 90, 7, .03, 0, TAU); ctx.fill() }
}
function rocaFg() {
  ctx.fillStyle = '#1d0f24';
  for (const [x, s] of [[-120, 1.2], [160, .8], [420, 1.4], [700, 1]]) {
    ctx.beginPath(); ctx.moveTo(x - 50 * s, 680); ctx.lineTo(x - 38 * s, 590 - 20 * s); ctx.lineTo(x - 8 * s, 560 - 25 * s); ctx.lineTo(x + 30 * s, 585 - 18 * s); ctx.lineTo(x + 55 * s, 680); ctx.closePath(); ctx.fill();
    for (let i = 0; i < 6; i++) { const gx = x + 60 * s + i * 7; ctx.strokeStyle = '#1d0f24'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(gx, 680); ctx.quadraticCurveTo(gx + 3, 640 - R(i + x) * 22, gx + (i - 3) * 4, 610 - R(i + x) * 30); ctx.stroke() }
  }
}
function pergamino(J, t) {
  const m = J.mano1, a = t < 3.5 || t > 3.95;
  ctx.save(); ctx.translate(m[0], m[1]);
  if (a) { ctx.rotate(t > 3.95 ? -.15 : -.5); ctx.fillStyle = '#f1e3bf'; rr(-3.5, -20, 7, 26, 3.5); ctx.fill(); ctx.fillStyle = '#b8873c'; rr(-4, -20, 8, 3, 1.5); ctx.fill(); rr(-4, 3, 8, 3, 1.5); ctx.fill() }
  else {
    const hh = 46 * eo(win_(t, 3.5, 3.72)); ctx.fillStyle = '#f1e3bf'; rr(-15, -hh - 2, 30, hh, 3); ctx.fill();
    ctx.strokeStyle = '#8a5a2a'; ctx.lineWidth = 1.2; for (let i = 0; i < 5; i++) { const y = -hh + 6 + i * 8; if (y < -4) { ctx.beginPath(); ctx.moveTo(-10, y); ctx.lineTo(-3 + R(i) * 12, y); ctx.stroke() } }
    ctx.fillStyle = '#d6451f'; ctx.beginPath(); ctx.moveTo(4, -hh + 4); ctx.lineTo(10, -hh + 12); ctx.lineTo(4, -hh + 20); ctx.lineTo(-2, -hh + 12); ctx.closePath(); ctx.fill();
  }
  ctx.restore();
  const g = (t >= 3.5 ? 1 : .4) * (t > 3.5 ? 1 : win_(t, 3.05, 3.5));
  addLight(() => glow(m[0], m[1] - 8, 40 + 30 * eo(win_(t, 3.9, 4.2)), '#ffc060', .5 * g));
}

function sA(t, u) {
  const c = camA(t), P = poseA(t), X = expr(t, exA);
  capas(c, [{ k: 0, fn: () => cielo(t) }, { k: .1, fn: nubes }, { k: .2, fn: () => colinas(352, '#85456e', 9, .016, 1.2, -900, 1900, '#6a3566') }, { k: .35, fn: () => piramide(t) },
    { k: .55, fn: () => colinas(402, '#9a5068', 14, .011, 3, -900, 1900, '#7a3e5e') }]);
  bruma(300, 440, '255,170,110', .30);
  pisoPersp(c, 428, 720, '#c26b52', '#6f3342', { n: 10, rizos: '#8a3f48' });
  world(c, () => {
    huellas(-70, XA(t), SC, GY + 4);
    for (const [ts, px] of PASOS) polvo(px, GY + 2, t, ts, '#d49a78', 5, SC * .9);
    sombraSuelo(XA(t) + 4, GY + 2, 70 * SC, .25);
    ctx.save(); ctx.globalAlpha = .8; sombraFigura(XA(t), GY, SC, P, X, { mochila: true, sombrero: true }, -1, '#55283e', .3); ctx.restore();
    figura(XA(t), GY, SC, P, X, { mochila: true, sombrero: true, rollo: t < 3.05, t, delante: J => { if (t >= 3.05) pergamino(J, t) } });
  });
  capas(c, [{ k: 1.7, fn: rocaFg }]);
  bruma(560, 660, '30,10,40', .35);
  tinte('#ffb070', .10, 'screen');
}

// ---------- ESCENA B ----------
const XB = trayecto(-120, 84, 1.6, .5);
const XBF = XB(3), IGN = 2.05;
const accB = [
  [-1, { sh1: .3, el1: .55 }],
  [1.7, { sh1: .3, el1: .55 }, 'lin'],
  [2.05, { sh1: 2.2, el1: -.4, lean: -.06, head: -.15 }, 'eo'],
  [2.6, { sh1: 2.05, el1: -.3, lean: -.04, head: -.28 }, 'eio'],
  [9, { sh1: 1.95, el1: -.3, lean: -.03, head: -.3 }, 'lin'],
];
const exB = [[0, 'curioso'], [1.7, 'concentrado'], [2.05, 'sorpresa', 'eo'], [2.5, 'asombro'], [3.3, 'alegre']];
function poseB(u) {
  const velB = (XB(u + .02) - XB(u - .02)) / .04, k = cl(velB / 60), walk = mezcla(POSE0, caminar(FASE(XB(u), SC), { lean: .09 }), k), a = animar(u, accB);
  const P = mezcla(walk, a, eio(win_(u, 1.6, 2.05))); P.sh1 = a.sh1 + (u < 1.7 ? Math.sin(FASE(XB(u), SC)) * .08 : 0); P.el1 = a.el1; return P;
}
const posB = t => [XB(t - 5.5), GY];
const camB = t => camSeq(t, [
  { a: 0, mix: 0, f: t => camSeguir(posB, t, { off: 50, lead: .3, dy: -100, z: 1.0, lag: .2 }) },
  { a: 7.2, mix: .8, f: t => ({ x: XBF + 28, y: GY - 130, z: zoomT(t, 7.2, 8.2, 1.0, 1.45), r: 0 }) },
  { a: 8.4, mix: 1.0, f: t => ({ x: XBF + 42, y: GY - 185, z: zoomT(t, 8.4, 9.6, 1.45, 1.15), r: .02 * eo(win_(t, 8.4, 9.2)) }) },
], .6);

function ladrillos(x0, x1, y0, y1, w, h, c1, c2) {
  for (let r = 0, y = y0; y < y1; y += h, r++) for (let x = x0 - (r % 2) * w / 2; x < x1; x += w) { ctx.fillStyle = mixc(c1, c2, R(r * 57 + Math.floor(x / w) * 3.1)); ctx.fillRect(x, y, w - 2, h - 2) }
}
const GL = [];   // glifos del mural: [x, y, tipo]
for (let i = 0; i < 6; i++) { GL.push([70 + i * 38, 175, i % 5]); GL.push([70 + i * 38, 300, (i + 2) % 5]) }
GL.push([160, 238, 5]);
function glifo(x, y, k, s) {
  ctx.beginPath();
  if (k === 0) { ctx.arc(x, y, 9 * s, 0, TAU); ctx.moveTo(x + 2 * s, y); ctx.arc(x, y, 2 * s, 0, TAU) }
  else if (k === 1) { ctx.moveTo(x - 10 * s, y + 6 * s); ctx.lineTo(x - 4 * s, y - 7 * s); ctx.lineTo(x + 3 * s, y + 6 * s); ctx.lineTo(x + 10 * s, y - 7 * s) }
  else if (k === 2) { ctx.ellipse(x, y, 11 * s, 6 * s, 0, 0, TAU); ctx.moveTo(x + 3.5 * s, y); ctx.arc(x, y, 3.5 * s, 0, TAU) }
  else if (k === 3) { ctx.moveTo(x - 10 * s, y + 9 * s); ctx.lineTo(x, y - 9 * s); ctx.lineTo(x + 10 * s, y + 9 * s); ctx.closePath() }
  else if (k === 4) { for (let a = 0; a < 6.5; a += .2) { const r = 1.5 * s + a * 1.3 * s; ctx.lineTo(x + Math.cos(a) * r, y + Math.sin(a) * r) } }
  else { ctx.arc(x, y, 22 * s, 0, TAU); for (let a = 0; a < 12; a++) { ctx.moveTo(x + Math.cos(a * TAU / 12) * 26 * s, y + Math.sin(a * TAU / 12) * 26 * s); ctx.lineTo(x + Math.cos(a * TAU / 12) * 36 * s, y + Math.sin(a * TAU / 12) * 36 * s) } ctx.moveTo(x + 9 * s, y); ctx.arc(x, y, 9 * s, 0, TAU) }
}
function muralYMuro(u) {
  ladrillos(-260, 700, -120, 470, 46, 26, '#3a2a4a', '#4e3a5e');
  ctx.fillStyle = '#24173a'; rr(36, 138, 248, 190, 6); ctx.fill(); ctx.fillStyle = '#2f2046'; rr(40, 142, 240, 182, 4); ctx.fill();
  ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  for (let i = 0; i < GL.length; i++) {
    const [gx, gy, k] = GL[i], s = k === 5 ? 1 : 1, b = cl((u - (2.35 + i * .08)) * 5);
    ctx.strokeStyle = 'rgba(15,6,25,.8)'; ctx.lineWidth = 3; glifo(gx + 1.2, gy + 1.5, k, s); ctx.stroke();
    ctx.strokeStyle = mixc('#a9803a', '#ffd98a', b); ctx.lineWidth = 2.2; glifo(gx, gy, k, s); ctx.stroke();
    if (b > 0) addLight(() => glow(gx, gy, 26 + (k === 5 ? 40 : 0), '#ffb84a', .35 * b));
  }
}
function pilares() {
  for (let i = -3; i < 6; i++) {
    const x = i * 250; ctx.fillStyle = '#2a1d3d'; ctx.fillRect(x - 28, -200, 56, 760); ctx.fillStyle = '#4a3560'; ctx.fillRect(x - 28, -200, 7, 760); ctx.fillStyle = '#1a1128'; ctx.fillRect(x + 18, -200, 10, 760);
    ctx.fillStyle = '#3a2850'; ctx.fillRect(x - 36, 300, 72, 14); ctx.fillRect(x - 34, -200, 68, 34);
  }
}
function pilarFg() { for (const x of [-200, 900]) { ctx.fillStyle = '#0e0716'; ctx.fillRect(x - 40, -300, 80, 1100); ctx.fillStyle = '#241838'; ctx.fillRect(x - 40, -300, 6, 1100) } }

function antorcha(J, t, u) {
  const m = J.mano1, f = eo(win_(u, IGN, IGN + .3));
  ctx.save(); ctx.translate(m[0], m[1]); ctx.rotate(.18); ctx.fillStyle = '#5a3a22'; rr(-2.8, -34, 5.6, 40, 2.5); ctx.fill(); ctx.fillStyle = '#2a1a10'; rr(-4, -38, 8, 7, 3); ctx.fill(); ctx.restore();
  const tip = [m[0] - Math.sin(.18) * 36, m[1] - Math.cos(.18) * 36];
  if (f > 0) {
    const fl = 1 + Math.sin(t * 23) * .08 + Math.sin(t * 37 + 2) * .06;
    ctx.save(); ctx.translate(tip[0], tip[1]); ctx.scale(f * fl, f * fl * (1.05 + Math.sin(t * 31) * .06));
    ctx.fillStyle = '#ff7a1a'; ctx.beginPath(); ctx.moveTo(0, -30); ctx.bezierCurveTo(12, -12, 11, 2, 0, 5); ctx.bezierCurveTo(-11, 2, -12, -12, 0, -30); ctx.fill();
    ctx.fillStyle = '#ffc94d'; ctx.beginPath(); ctx.moveTo(0, -20); ctx.bezierCurveTo(7, -8, 6, 2, 0, 4); ctx.bezierCurveTo(-6, 2, -7, -8, 0, -20); ctx.fill();
    ctx.fillStyle = '#fff2c0'; ctx.beginPath(); ctx.ellipse(0, -2, 2.6, 5, 0, 0, TAU); ctx.fill(); ctx.restore();
    luzPunto(tip[0], tip[1] - 12, 190 * f, '#ff9a3a', .85, t, 1);
    embers(t, 10, '#ffb04a', 4, 22, 1.4, [tip[0] - 14, tip[1] - 56, 28, 50]);
  }
  burst(tip[0], tip[1] - 6, t, 5.5 + IGN, ['#fff2c0', '#ffb04a', '#ff7a1a'], 22, 150, .7, 2.4, 3); sparks(tip[0], tip[1] - 6, t, 5.5 + IGN, 14, '#ffd070', 120, .6, 260, 2);
}

function sB(t) {
  const u = t - 5.5, c = camB(t), P = poseB(u), X = expr(u, exB), ig = eo(win_(u, IGN, IGN + .5));
  vgrad(-300, 700, '#0d0820', '#1e1230', -500, 1360);
  capas(c, [{ k: .5, fn: () => muralYMuro(u) }, { k: .82, fn: pilares }]);
  pisoPersp(c, 432, 720, '#2c2038', '#5a3d4e', { n: 10, rizos: '#201530' });
  let J;
  world(c, () => {
    const xx = XB(u);
    for (const [ts, px] of [[-.2, 0]]) { }
    sombraSuelo(xx + 2, GY + 2, 62 * SC, .35);
    if (ig > 0) { ctx.save(); ctx.globalAlpha = .75 * ig; sombraFigura(xx, GY, SC, P, X, { mochila: true, sombrero: true }, -.55, '#0a0512', .24); ctx.restore() }
    J = figura(xx, GY, SC, P, X, { mochila: true, sombrero: true, t, delante: j => antorcha(j, t, u) });
    polvo(xx - 10, GY + 2, t, 5.5 + 1.62, '#7d6a8c', 4, SC * .8);
  });
  capas(c, [{ k: 1.7, fn: pilarFg }]);
  const hs = toScreen(c, J.hombro[0], J.hombro[1]), mt = toScreen(c, J.mano1[0], J.mano1[1] - 36);
  const cx = lerp(hs[0], mt[0], ig), cy = lerp(hs[1], mt[1], ig);
  oscuridad(cx, cy, lerp(270, 450, spring(u - IGN, 9, 5) * ig + 0), lerp(.84, .72, ig), '8,4,22');
  dust(t, 26, 'rgba(255,200,140,.6)', 6, 6, 1.3, .5 * ig);
  tinte('#6a4aa8', .08 * (1 - ig), 'screen');
}

boot([sA, sB], TRS, { cap: { acc: '#ffb547' } });
