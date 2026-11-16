// geo.js — Europa 1938-39 sobre el mapa real. Países = Natural Earth (mapa_europa.js); zonas históricas = polígonos a mano (lon,lat).
const ccw = r => { let a = 0; for (let i = 0; i < r.length; i++) { const p = r[i], q = r[(i + 1) % r.length]; a += p[0] * q[1] - q[0] * p[1] } return a > 0 ? r : r.slice().reverse() };
const ptsR = names => MAPA_PAISES.filter(p => names.includes(p.n)).flatMap(p => p.g);
// recorta un anillo a lon >= x0 (Sutherland-Hodgman)
function clipLon(r, x0) {
  const o = []; for (let i = 0; i < r.length; i++) {
    const a = r[i], b = r[(i + 1) % r.length], ia = a[0] >= x0, ib = b[0] >= x0;
    if (ia) o.push(a); if (ia !== ib) { const f = (x0 - a[0]) / (b[0] - a[0]); o.push([x0, a[1] + f * (b[1] - a[1])]) }
  } return o;
}
const GERP = [[7.0, 53.6], [8.6, 55.05], [9.9, 54.8], [10.9, 54.0], [12.4, 54.4], [13.7, 54.6], [14.3, 53.9], [15.5, 54.2], [16.8, 54.6], [17.3, 53.9], [17.3, 53.6], [16.9, 53.0], [15.9, 52.6], [15.8, 52.0], [16.5, 51.5], [17.5, 51.3], [18.0, 51.0], [18.6, 50.8], [18.7, 50.3], [18.0, 49.95], [16.6, 50.4], [15.0, 50.9], [14.3, 51.05], [12.9, 50.4], [12.2, 50.3], [12.2, 49.9], [12.9, 49.4], [13.8, 48.8], [13.0, 48.4], [13.0, 47.6], [12.2, 47.7], [10.5, 47.55], [10.2, 47.3], [9.6, 47.5], [7.6, 47.6], [8.2, 49.0], [6.4, 49.5], [6.1, 50.2], [6.0, 50.9], [6.0, 51.8], [6.8, 52.2], [7.2, 53.2]];
const EPP = [[19.5, 54.45], [20.5, 54.9], [21.0, 55.3], [22.7, 55.05], [22.8, 54.35], [22.3, 53.9], [21.3, 53.4], [20.3, 53.1], [19.4, 53.3], [19.3, 54.0]];
const SUDP = [[18.0, 49.95], [16.6, 50.4], [15.0, 50.9], [14.3, 51.05], [12.9, 50.4], [12.2, 50.3], [12.2, 49.9], [12.9, 49.4], [13.8, 48.8], [14.5, 49.1], [13.7, 49.7], [13.5, 50.3], [14.6, 50.6], [15.9, 50.3], [16.9, 50.0], [17.8, 49.85]];
const POLP = [[18.2, 54.7], [18.9, 54.5], [19.3, 54.0], [19.4, 53.3], [20.3, 53.1], [21.3, 53.4], [22.3, 53.9], [22.8, 54.35], [23.5, 54.2], [24.2, 54.6], [25.4, 54.9], [26.3, 54.3], [26.9, 53.9], [27.0, 53.0], [26.4, 52.0], [27.3, 51.4], [27.1, 50.4], [26.6, 49.6], [26.6, 48.3], [25.2, 48.5], [24.0, 48.5], [22.6, 49.1], [21.0, 49.3], [19.9, 49.2], [19.0, 49.5], [18.6, 49.75], [18.0, 49.95], [18.7, 50.3], [18.6, 50.8], [18.0, 51.0], [17.5, 51.3], [16.5, 51.5], [15.8, 52.0], [15.9, 52.6], [16.9, 53.0], [17.3, 53.6], [17.3, 54.2]];
const LINEA = [[22.7, 54.3], [22.0, 52.8], [21.4, 51.4], [22.8, 50.2], [23.0, 49.2]];   // reparto Alemania | URSS
const R_GER = [].concat(ptsR(['Germany']), [ccw(clipLon(GERP, 12.5)), ccw(EPP)]);
const R_AUT = ptsR(['Austria']), R_CZE = ptsR(['Czechia', 'Slovakia']), R_SOV = ptsR(['Russia', 'Belarus', 'Ukraine']);
const R_POL = [ccw(POLP)], R_SUD = [ccw(SUDP)];
const R_OTROS = ptsR(['France', 'United Kingdom', 'Belgium', 'Netherlands', 'Switzerland', 'Italy', 'Hungary', 'Romania', 'Lithuania', 'Latvia', 'Estonia', 'Denmark', 'Sweden', 'Norway', 'Finland', 'Yugoslavia', 'Slovenia', 'Croatia', 'Serbia', 'Bosnia and Herz.', 'Bulgaria', 'Moldova', 'Luxembourg', 'Spain', 'Ireland', 'Turkey', 'Greece']);
const CIU = { MUN: [11.6, 48.1], WAR: [21.0, 52.2], BER: [13.4, 52.5], PRA: [14.4, 50.1], VIE: [16.4, 48.2] };
const stp = c => c.s > 40 ? 1 : 2;
function pintar(c, rings, col, a, bord, lw, ba) {
  _mapaPath(c, rings, stp(c));
  if (col && a > 0) { ctx.globalAlpha = a; ctx.fillStyle = col; ctx.fill() }
  if (lw) { ctx.globalAlpha = ba === undefined ? .9 : ba; ctx.strokeStyle = bord || '#fff'; ctx.lineWidth = lw; ctx.stroke() }
  ctx.globalAlpha = 1;
}
// repinta la textura dentro de un recinto (para "borrar" lo de debajo) y luego rellena
function repintar(c, rings, col, a, bord, lw, ba) {
  ctx.save(); _mapaPath(c, rings, stp(c)); ctx.clip(); mapaTextura(TEX, c, { dim: .30, sat: 1.15 }); ctx.restore();
  pintar(c, rings, col, a, bord, lw, ba);
}
function recinto(c, rings, fn) { ctx.save(); _mapaPath(c, rings, stp(c)); ctx.clip(); fn(); ctx.restore() }
// semiplano a un lado de la línea de reparto (lado 'O' = oeste, 'E' = este)
function semiplano(c, lado) {
  const P = LINEA.map(q => mapaPunto(c, q[0], q[1])), a = P[0], b = P[P.length - 1], dx = lado === 'E' ? 900 : -900;
  ctx.beginPath(); ctx.moveTo(a[0], a[1] - 600); P.forEach(q => ctx.lineTo(q[0], q[1])); ctx.lineTo(b[0], b[1] + 600); ctx.lineTo(b[0] + dx, b[1] + 600); ctx.lineTo(a[0] + dx, a[1] - 600); ctx.closePath();
}
// Mapa base. o = {aut, cze, sud, pol, sov, ger} colores (null = sin color) y alfa o.a
function europa(c, o = {}) {
  mapaTextura(TEX, c, { dim: .30, sat: 1.15 }); ctx.save(); ctx.lineJoin = 'round';
  pintar(c, R_OTROS, '#fff', .05, 'rgba(255,255,255,.55)', 1, 1);
  pintar(c, R_SOV, o.sov || SOV, o.sov === null ? 0 : .42, 'rgba(255,255,255,.7)', 1, .8);
  pintar(c, R_GER, o.ger || GER, .55, null, 0); pintar(c, ptsR(['Germany']).concat([ccw(EPP)]), null, 0, GERE, 1.6);
  pintar(c, R_CZE, o.cze || CZE, o.cze === null ? 0 : .55, 'rgba(255,255,255,.9)', 1.3);
  pintar(c, R_AUT, o.aut || AUT, .6, 'rgba(255,255,255,.9)', 1.3);
  repintar(c, R_POL, o.pol || POL, o.pol === null ? 0 : .5, '#fff', 1.5);
  if (o.sud) { repintar(c, R_SUD, o.sud, .7, GERE, 1.4) }
  ctx.restore();
}
// flecha en lon/lat
const A = (c, pts, p, col, lw) => pathArrow(pts.map(q => mapaPunto(c, q[0], q[1])), p, col, lw);
const PT = (c, ll) => mapaPunto(c, ll[0], ll[1]);
// foto real (si existe el archivo): tarjeta con marco, Ken Burns
function foto(k, t, t0, t1, x, y, w, rot) {
  const im = FOTO[k]; if (!im || !im.complete || !im.naturalWidth || t < t0 || t > t1) return;
  const o = nb(t1 - .35, t1, t); withA(1 - o, () => fotoReal(im, { x, y, w, t, t0, rot: rot || -.04, kb: [1, 1.18, .5, .4], dur: t1 - t0, sepia: .35 }));
}
