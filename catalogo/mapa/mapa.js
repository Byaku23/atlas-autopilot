// mapa.js — mapa satelital real con bordes proyectados, para Canvas 2D (motor Atlas). Cargar DESPUÉS de core.js y mapa_datos.js.
// Textura equirectangular (NASA Blue Marble, dominio público) + polígonos Natural Earth (dominio público). Sin dependencias.
//   const TEX = mapaCargar('tex/blue_marble.jpg');
//   const c = mapaCam(u, [[0, lon,lat,s], [3, lon,lat,s, ease?], ...]);   // cámara {lon,lat,s}; s = px lógicos por grado de latitud
//   mapaTextura(TEX, c, {dim:.25, sat:1.1});                              // fondo satelital (recorta solo lo visible)
//   mapaEstados(c, {alpha:.45, col:{West:'#..'}, solo:['PR'], fadeOtros:.3, borde:'#fff', lw:1});
//   mapaPaises(c, ['Puerto Rico','Cuba'], {fill:'rgba(..)', borde:'#fff', lw:1});
//   const [x,y] = mapaPunto(c, lon, lat);                                  // posición en pantalla (para etiquetas/banderas)
// Proyección: plate carrée escalada por cos(30°) en x (lo mismo que la textura): bordes y satélite coinciden exactos.
const MAPA_K = Math.cos(Math.PI / 6);
const MAPA_REG = { West: '#ff9f43', Midwest: '#feca57', South: '#ff6b6b', Northeast: '#54a0ff' };
// geo = [lonIzq, lonDer, latArriba, latAbajo] que cubre la imagen (por defecto el mundo entero 2:1).
function mapaCargar(src, geo) { const i = new Image(); i.src = src; i.geo = geo || [-180, 180, 90, -90]; return i }
function mapaPunto(c, lon, lat) { return [180 + (lon - c.lon) * MAPA_K * c.s, 320 - (lat - c.lat) * c.s] }
// Cámara por claves [[u, lon, lat, s, ease]]; interpola lon/lat y zoom en escala log, con ease del tramo de llegada (por defecto eio).
function mapaCam(u, K) {
  let i = 0; while (i < K.length - 1 && u >= K[i + 1][0]) i++;
  const a = K[i], b = K[Math.min(i + 1, K.length - 1)]; if (a === b) return { lon: a[1], lat: a[2], s: a[3] };
  const p = (b[4] || eio)(cl((u - a[0]) / (b[0] - a[0])));
  return { lon: lerp(a[1], b[1], p), lat: lerp(a[2], b[2], p), s: Math.exp(lerp(Math.log(a[3]), Math.log(b[3]), p)) };
}
function mapaTextura(img, c, o = {}) {
  ctx.fillStyle = o.fondo || '#0a1a33'; ctx.fillRect(0, 0, 360, 640);
  if (!img.complete || !img.naturalWidth) return;
  const W = img.naturalWidth, H = img.naturalHeight, G = img.geo, hl = 180 / (MAPA_K * c.s), ha = 320 / c.s;
  const cl_ = (v, a, b) => Math.max(a, Math.min(b, v));
  const L0 = cl_(c.lon - hl, G[0], G[1]), L1 = cl_(c.lon + hl, G[0], G[1]), A0 = cl_(c.lat + ha, G[3], G[2]), A1 = cl_(c.lat - ha, G[3], G[2]);
  if (L1 <= L0 || A0 <= A1) return;
  const dx = 180 + (L0 - c.lon) * MAPA_K * c.s, dw = (L1 - L0) * MAPA_K * c.s, dy = 320 - (A0 - c.lat) * c.s, dh = (A0 - A1) * c.s;
  ctx.save(); ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = 'high';
  if (o.sat || o.bri) ctx.filter = 'saturate(' + (o.sat || 1) + ') brightness(' + (o.bri || 1) + ')';
  const fx = W / (G[1] - G[0]), fy = H / (G[2] - G[3]);
  ctx.drawImage(img, (L0 - G[0]) * fx, (G[2] - A0) * fy, (L1 - L0) * fx, (A0 - A1) * fy, dx, dy, dw, dh);
  ctx.restore();
  if (o.dim) { ctx.fillStyle = 'rgba(2,10,28,' + o.dim + ')'; ctx.fillRect(0, 0, 360, 640) }
}
function _mapaPath(c, rings, step) {
  ctx.beginPath(); const k = MAPA_K * c.s;
  for (const r of rings) {
    // descarte rápido por caja
    let x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9;
    for (let i = 0; i < r.length; i += 3) { const x = 180 + (r[i][0] - c.lon) * k, y = 320 - (r[i][1] - c.lat) * c.s; if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y }
    if (x1 < -300 || x0 > 660 || y1 < -300 || y0 > 940) continue;
    for (let i = 0; i < r.length; i += step) { const x = 180 + (r[i][0] - c.lon) * k, y = 320 - (r[i][1] - c.lat) * c.s; i ? ctx.lineTo(x, y) : ctx.moveTo(x, y) }
    ctx.closePath();
  }
}
// Estados de EE. UU.: relleno semitransparente por región (o por postal en o.col), borde blanco. o.solo = lista de postales a dibujar con todo el alpha; el resto usa o.fadeOtros.
function mapaEstados(c, o = {}) {
  const step = c.s > 40 ? 1 : 2, cols = Object.assign({}, MAPA_REG, o.col || {}), al = o.alpha === undefined ? .45 : o.alpha;
  ctx.save(); ctx.lineJoin = 'round';
  for (const e of MAPA_ESTADOS) {
    const f = o.f ? o.f(e) : 1; if (f <= 0) continue;
    _mapaPath(c, e.g, step);
    ctx.globalAlpha = al * f; ctx.fillStyle = cols[e.p] || cols[e.r]; ctx.fill();
    ctx.globalAlpha = f * (o.bordeA === undefined ? .9 : o.bordeA); ctx.strokeStyle = o.borde || '#fff'; ctx.lineWidth = o.lw || 1; ctx.stroke();
  }
  ctx.restore();
}
// Países (por nombre Natural Earth): relleno y borde.
function mapaPaises(c, nombres, o = {}) {
  const step = c.s > 40 ? 1 : 2; ctx.save(); ctx.lineJoin = 'round';
  for (const p of MAPA_PAISES) {
    if (nombres && !nombres.includes(p.n)) continue; const f = o.f ? o.f(p) : 1; if (f <= 0) continue;
    _mapaPath(c, p.g, step);
    if (o.fill) { ctx.globalAlpha = f; ctx.fillStyle = (o.fillBy && o.fillBy[p.n]) || o.fill; ctx.fill() }
    ctx.globalAlpha = f; ctx.strokeStyle = o.borde || '#fff'; ctx.lineWidth = o.lw || 1; ctx.stroke();
  }
  ctx.restore();
}
// Bandera de Puerto Rico con carita (ojos que parpadean y miran, sonrisa). cx,cy = centro; w = ancho; o = {t (tiempo), t0 (aparición), hablar (0..1 boca), feliz (0..1)}.
let _bpr = null;
function banderaPR(cx, cy, w, t, t0, o = {}) {
  const u = t - t0; if (u < 0) return; const h = w * 2 / 3, e = spring(u, 11, 6.2);
  if (!_bpr) { _bpr = document.createElement('canvas'); _bpr.width = 300; _bpr.height = 200 }
  const g = _bpr.getContext('2d'); g.setTransform(1, 0, 0, 1, 0, 0); g.clearRect(0, 0, 300, 200);
  const sh = 40; for (let i = 0; i < 5; i++) { g.fillStyle = i % 2 ? '#fff' : '#ed0c2c'; g.fillRect(0, i * sh, 300, sh + 1) }
  g.fillStyle = '#0050f0'; g.beginPath(); g.moveTo(0, 0); g.lineTo(130, 100); g.lineTo(0, 200); g.fill();
  g.fillStyle = '#fff'; g.beginPath(); for (let k = 0; k < 10; k++) { const r = k % 2 ? 11 : 27, a = -Math.PI / 2 + k * Math.PI / 5; g.lineTo(38 + Math.cos(a) * r, 100 + Math.sin(a) * r) } g.fill();
  // cara sobre las franjas (a la derecha del triángulo)
  const fx = 205, fy = 100, bl = (u % 3.1) > 2.95 ? .1 : 1, mx = (Math.sin(u * 1.7) * 5), my = Math.cos(u * 1.3) * 3;
  for (const s of [-1, 1]) {
    const ex = fx + s * 40; g.fillStyle = '#fff'; g.strokeStyle = '#111'; g.lineWidth = 5;
    g.beginPath(); g.ellipse(ex, fy - 14, 21, 25 * bl, 0, 0, 7); g.fill(); g.stroke();
    if (bl > .5) { g.fillStyle = '#111'; g.beginPath(); g.arc(ex + mx, fy - 12 + my, 10, 0, 7); g.fill(); g.fillStyle = '#fff'; g.beginPath(); g.arc(ex + mx + 3, fy - 16 + my, 3.2, 0, 7); g.fill() }
  }
  const op = o.hablar ? .35 + .65 * Math.abs(Math.sin(u * 11)) * o.hablar : 0;
  g.strokeStyle = '#111'; g.fillStyle = '#5b0f1a'; g.lineWidth = 5; g.lineCap = 'round'; g.beginPath();
  g.moveTo(fx - 38, fy + 30); g.quadraticCurveTo(fx, fy + 62 + 22 * op, fx + 38, fy + 30); if (op > .05) { g.quadraticCurveTo(fx, fy + 38, fx - 38, fy + 30); g.fill() } g.stroke();
  g.fillStyle = 'rgba(255,90,110,.45)'; for (const s of [-1, 1]) { g.beginPath(); g.ellipse(fx + s * 62, fy + 24, 11, 7, 0, 0, 7); g.fill() }
  // dibujo con ondulación por tiras
  ctx.save(); ctx.translate(cx, cy + (1 - e) * 150); ctx.rotate(Math.sin(u * 2.2) * .05 + (1 - e) * .5); ctx.scale(.3 + .7 * e, .3 + .7 * e); ctx.globalAlpha *= cl(u * 8);
  ctx.fillStyle = 'rgba(0,0,0,.35)'; rr(-w / 2 + 5, -h / 2 + 8, w, h, 6); ctx.fill();
  const n = 30; for (let i = 0; i < n; i++) { const x0 = i / n, wv = Math.sin(u * 4 + x0 * 5) * 2.2 * x0; ctx.drawImage(_bpr, x0 * 300, 0, 300 / n + 1, 200, -w / 2 + x0 * w, -h / 2 + wv, w / n + .8, h) }
  ctx.strokeStyle = 'rgba(255,255,255,.9)'; ctx.lineWidth = 2; ctx.strokeRect(-w / 2, -h / 2, w, h);
  ctx.fillStyle = '#d9d2c0'; ctx.fillRect(-w / 2 - 5, -h / 2 - 8, 5, h + 90); // asta
  ctx.restore();
}
