// camara.js — dirección de cámara reutilizable sobre camAt/follow/world de core.js + transición 'pan' (barrido con desenfoque de movimiento).
// Cargar DESPUÉS de core.js. No modifica el motor: añade funciones y envuelve composite() para registrar el tipo 'pan'.

// Seguimiento con "espacio para mirar": persigue a pos(t)->[x,y] con retraso, se adelanta en la dirección del movimiento (lead) y
// compone el sujeto fuera del centro (off = px de mundo; regla de tercios). z = zoom.
function camSeguir(pos, t, o = {}) {
  const f = follow(pos, t, o.lag === undefined ? .28 : o.lag), p0 = pos(t - .12), p1 = pos(t), vx = (p1[0] - p0[0]) / .12, vy = (p1[1] - p0[1]) / .12;
  return { x: f[0] + (o.off || 0) + vx * (o.lead || 0), y: f[1] + (o.dy || 0) + vy * (o.lead || 0), z: o.z || 1, r: o.r || 0 };
}
// Cámara en mano: vibración suave de baja frecuencia para que no se vea "robótica". amp 1 = sutil.
function camMano(t, amp = 1, seed = 0) { return { x: (Math.sin(t * 1.7 + seed) + Math.sin(t * 2.9 + seed * 2)) * .9 * amp, y: (Math.sin(t * 2.3 + seed * 3) + Math.sin(t * 3.7)) * .7 * amp, r: Math.sin(t * 1.3 + seed) * .0035 * amp } }
// Secuencia de planos: tramos = [{a: tiempoInicio, mix: segundos de fundido desde el plano anterior, f: t => ({x,y,z,r})}, ...].
// Entre tramos la cámara se mezcla con ease (cambio de encuadre suave); con mix 0 es un corte.
function camSeq(t, tramos, mano = 0) {
  let i = 0; for (let k = 0; k < tramos.length; k++) if (t >= tramos[k].a) i = k;
  let c = tramos[i].f(t);
  if (i > 0 && tramos[i].mix > 0) {
    const k = eio(cl((t - tramos[i].a) / tramos[i].mix)), p = tramos[i - 1].f(t);
    c = { x: lerp(p.x, c.x, k), y: lerp(p.y, c.y, k), z: Math.exp(lerp(Math.log(p.z), Math.log(c.z), k)), r: lerp(p.r || 0, c.r || 0, k) };
  }
  if (mano) { const m = camMano(t, mano); c = { x: c.x + m.x, y: c.y + m.y, z: c.z, r: (c.r || 0) + m.r } }
  return c;
}
// Zoom/empuje suave con ease: devuelve factor de zoom entre t0 y t1 (para usar dentro de f()).
const zoomT = (t, t0, t1, z0, z1, ease = eio) => Math.exp(lerp(Math.log(z0), Math.log(z1), ease(cl((t - t0) / (t1 - t0)))));

// ---- Transición 'pan': el plano A sale barrido y el B entra desde el otro lado, con desenfoque direccional, giro y zoom leves.
// En TRS:  {type:'pan', dir:1 (1 = la cámara gira a la derecha, -1 izquierda), dur:.55, blur:46, tilt:.04}
const _composite = composite;
composite = function (tr, p, t) {
  if (tr.type !== 'pan') return _composite(tr, p, t);
  const d = tr.dir || 1, q = eio(p), bell = Math.sin(Math.PI * p), v = (tr.blur || 46) * bell, n = 9, W = 360 * 1.0;
  ctx.fillStyle = '#000'; ctx.fillRect(0, 0, 360, 640);
  ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = 1 / n;
  for (let k = 0; k < n; k++) {
    const o = (k / (n - 1) - .5) * v * d;
    ctx.save(); ctx.translate(180, 320); ctx.rotate((tr.tilt === undefined ? .04 : tr.tilt) * bell * d); const z = 1 + .1 * bell; ctx.scale(z, z); ctx.translate(-180, -320);
    drawB(bufA, -d * q * W + o, 0); drawB(bufB, d * (1 - q) * W + o, 0); ctx.restore();
  }
  ctx.restore();
  // líneas de velocidad y brillo en el punto medio
  if (bell > .25) { ctx.save(); ctx.globalAlpha = bell * .5; streaks(t, 14, 'rgba(255,244,220,.9)', d > 0 ? Math.PI : 0, 1400, 90, .6, 4); ctx.restore() }
  const f = Math.max(0, 1 - Math.abs(p - .5) / .1); if (f > 0) { ctx.fillStyle = 'rgba(255,240,210,' + .22 * f + ')'; ctx.fillRect(0, 0, 360, 640) }
};
