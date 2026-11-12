// Prueba de imagen real: foto de dominio público con Ken Burns, marco, énfasis y pie de fuente (datos en ../fotos/lincoln_1865.json).
const IMG = cargarFoto('../fotos/lincoln_1865.jpg'), FUENTE = 'Fuente: Library of Congress · A. Gardner, 1865 · Dominio público';
function fondo(t, c0, c1) { vgrad(-100, 740, c0, c1, -100, 560); dust(t, 30, 'rgba(255,230,180,.5)', 4, 8, 1.4, .5) }
function s1(t, u) {
  fondo(t, '#1a1030', '#4a2a55'); addLight(() => glow(180, 300, 260, '#c78a4a', .35));
  txt('1865', 180, 90, 54, '#f3e7cf', { al: cl(u * 3) });
  fotoReal(IMG, { x: 180, y: 320, w: 250, t, t0: .2, rot: -.04, kb: [1, 1.25, .5, .15], dur: 3.8, sepia: .5 });
  credito(FUENTE, t, 1.0);
}
function s2(t, u) {
  fondo(t, '#2a1a10', '#6a4a2a'); addLight(() => glow(180, 300, 280, '#e8b870', .3));
  const c0 = t - 4;
  fotoReal(IMG, { x: 180, y: 320, w: 290, t, t0: 4, rot: .03, kb: [1.5, 1.5, .5, .1], dur: 4, sepia: .6, draw: (w, h) => resaltar(-18, 12, 50, t, 5.0) });
  txt('El último retrato en vida', 180, 100, 24, '#f3e7cf', { al: cl((u - .3) * 3) });
  credito(FUENTE, t, 4.3);
}
boot([s1, s2], TRS, { cap: { acc: '#ffb547' } });
