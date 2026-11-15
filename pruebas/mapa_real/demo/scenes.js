// Prueba: mapa satelital real de EE. UU. -> zoom a Puerto Rico -> bandera con carita. 10 s, 9:16.
const TEX = mapaCargar('../tex/blue_marble.jpg', [-182.76, 172.6, 90, -62.97])   // imagen subida por Johan (equirectangular recortada; calibrada con Natural Earth);
const PR = [-66.45, 18.22];
const VIAJE = [[0, -96, 38.5, 7.4], [2.2, -96, 38.5, 7.8, eio], [6.4, PR[0], PR[1] + 1.1, 78, (p) => eio(eio(p))]];   // lon, lat, px/grado
function s1(t, u) {
  const c = mapaCam(t, VIAJE), z = cl((t - 3) / 3.2);                      // z: 0 = vista de EE. UU., 1 = ya en Puerto Rico
  mapaTextura(TEX, c, { dim: .18, sat: 1.15 });
  mapaPaises(c, ['Mexico', 'Canada', 'Cuba', 'Dominican Rep.', 'Haiti', 'Jamaica', 'Bahamas'], { fill: 'rgba(255,255,255,.04)', borde: 'rgba(255,255,255,.55)', lw: 1 });
  mapaEstados(c, { alpha: .5 * (1 - eio(z)) + .0, lw: lerp(1, 1.6, z), f: () => 1 - eio(cl(z * 1.4)) });
  // Puerto Rico resaltado (pulso)
  const pul = .45 + .15 * Math.sin(t * 4), a = eio(cl((t - 3.4) / 1.6));
  mapaPaises(c, ['Puerto Rico'], { fill: 'rgba(255,214,10,' + (pul * .6 * a) + ')', borde: '#ffd60a', lw: lerp(1.2, 2.6, a) });
  // etiqueta superior
  tag('ESTADOS UNIDOS', 180, 86, 22, 'rgba(10,20,40,.78)', '#fff', t, .25, { out: 3.2 });
  const [px, py] = mapaPunto(c, PR[0], PR[1]);
  if (t > 6.3) { const k = spring(t - 6.3, 12, 6); ctx.save(); ctx.globalAlpha = cl((t - 6.3) * 6); line(px, py - 4, px, 258 + (1 - k) * 60, 'rgba(255,255,255,.85)', 2); circ(px, py, 5 + 2 * Math.sin(t * 6), '#ffd60a', '#fff', 2); ctx.restore() }
  banderaPR(180, 160, 190, t, 6.4, { hablar: t > 7.6 && t < 9.2 ? 1 : 0 });
  if (t > 7.0) mtext('PUERTO RICO', 180, 476, 34, '#fff', t, 7.0, { a: 'center', sh: 'rgba(0,0,0,.7)' });
}
boot([s1], [null], { cap: { acc: '#ffd60a' } });
