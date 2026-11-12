// mundo.js — escenarios con profundidad: capas con paralaje, suelo en perspectiva, sombras proyectadas y luz/oscuridad coherentes.
// Cargar DESPUÉS de eng/core.js y rig.js. Todo recibe la cámara `c` = {x,y,z,r} (la misma de camAt/follow de core.js).

// Capas con paralaje. k = profundidad: 0 = infinito (no se mueve), 1 = plano del personaje, >1 = primer plano (se mueve más rápido).
// lista = [{k, fn}] de la más lejana a la más cercana. Las coordenadas dentro de fn son las del mundo (como en world()).
function capas(c, lista) {
  for (const L of lista) {
    const cx = lerp(180, c.x, L.k), cy = lerp(320, c.y, L.k), z = 1 + (c.z - 1) * L.k;
    ctx.save(); ctx.translate(180, 320); if (c.r) ctx.rotate(c.r); ctx.scale(z, z); ctx.translate(-cx, -cy); L.fn(); ctx.restore();
  }
}

// Colinas / dunas: relleno con borde ondulado. y = línea media, amp, f = frecuencia, ph = fase.
function colinas(y, col, amp = 20, f = .012, ph = 0, x0 = -500, x1 = 1500, col2) {
  ctx.beginPath(); ctx.moveTo(x0, y + 700);
  for (let x = x0; x <= x1; x += 8) ctx.lineTo(x, y - Math.sin(x * f + ph) * amp - Math.sin(x * f * 2.3 + ph * 1.7) * amp * .35);
  ctx.lineTo(x1, y + 700); ctx.closePath();
  if (col2) { const g = ctx.createLinearGradient(0, y - amp, 0, y + amp * 3); g.addColorStop(0, col); g.addColorStop(1, col2); ctx.fillStyle = g } else ctx.fillStyle = col;
  ctx.fill();
}

// Suelo en perspectiva: n franjas desde el horizonte hy hasta yb; las cercanas se mueven más rápido que las lejanas (paralaje interno).
// Cada franja se pinta hasta abajo, así nunca quedan huecos. o: {n, rizos (color de la cresta), k0, k1 (paralaje lejos/cerca), x0, x1}
function pisoPersp(c, hy, yb, col0, col1, o = {}) {
  const n = o.n || 9, k0 = o.k0 === undefined ? .78 : o.k0, k1 = o.k1 === undefined ? 1.25 : o.k1, x0 = o.x0 === undefined ? -600 : o.x0, x1 = o.x1 || 1800;
  for (let i = 0; i < n; i++) {
    const q = i / (n - 1), yy = hy + (yb - hy) * Math.pow(i / n, 1.7), kk = lerp(k0, k1, q);
    const cx = lerp(180, c.x, kk), cy = lerp(320, c.y, kk), z = 1 + (c.z - 1) * kk;
    ctx.save(); ctx.translate(180, 320); if (c.r) ctx.rotate(c.r); ctx.scale(z, z); ctx.translate(-cx, -cy);
    ctx.fillStyle = mixc(col0, col1, q); ctx.fillRect(x0, yy, x1 - x0, 2400);
    if (o.rizos) { ctx.strokeStyle = o.rizos; ctx.lineWidth = .8 + q * 2.2; ctx.globalAlpha = .35 + q * .3; ctx.beginPath();
      const wl = 26 + q * 90, am = 1.2 + q * 5;
      for (let x = x0; x <= x1; x += 10) { const yv = yy + 5 + q * 8 + Math.sin(x / wl * 2 + i * 1.7) * am; x === x0 ? ctx.moveTo(x, yv) : ctx.lineTo(x, yv) }
      ctx.stroke(); ctx.globalAlpha = 1 }
    ctx.restore();
  }
}

// Sombra de contacto suave bajo los pies / un objeto. w = ancho, a = opacidad.
function sombraSuelo(x, y, w, a = .4, col = '0,0,0') {
  ctx.save(); ctx.translate(x, y); ctx.scale(1, .2); const g = ctx.createRadialGradient(0, 0, 0, 0, 0, w / 2);
  g.addColorStop(0, 'rgba(' + col + ',' + a + ')'); g.addColorStop(1, 'rgba(' + col + ',0)'); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(0, 0, w / 2, 0, TAU); ctx.fill(); ctx.restore();
}
// Sombra proyectada con la silueta REAL de la figura en su pose actual (sigue la animación). luz = dirección de la luz en x (-1 izq … 1 der).
// col debe ser un color opaco (se mezcla con el suelo) para que los solapes no oscurezcan de más.
function sombraFigura(x, y, s, P, X, o, luz = -1, col = '#2a1530', largo = .26) {
  ctx.save(); ctx.translate(x, y); ctx.transform(1, 0, -luz * .8, -largo, 0, 0);
  figura(0, 0, s, P, X, Object.assign({}, o, { sil: col, delante: null })); ctx.restore();
}

// Luz cálida por adición en un punto (sol, antorcha, lámpara) con parpadeo opcional.
function luzPunto(x, y, r, col, a, t = 0, flick = 0) { const f = 1 + flick * (Math.sin(t * 23) * .06 + Math.sin(t * 37 + 2) * .05); addLight(() => glow(x, y, r * f, col, a)) }
// Oscuridad con un "agujero" de luz (en coordenadas de pantalla). Úsala DESPUÉS de world()/capas() con toScreen(c, x, y).
function oscuridad(sx, sy, r, a = .75, col = '8,4,18') {
  const g = ctx.createRadialGradient(sx, sy, r * .12, sx, sy, r); g.addColorStop(0, 'rgba(' + col + ',0)'); g.addColorStop(.55, 'rgba(' + col + ',' + a * .55 + ')'); g.addColorStop(1, 'rgba(' + col + ',' + a + ')');
  ctx.fillStyle = g; ctx.fillRect(0, 0, 360, 640);
}
// Etalonaje: tinte de toda la imagen (multiply para atardecer, lighter/screen para brillo).
function tinte(col, a, modo = 'multiply') { ctx.save(); ctx.globalCompositeOperation = modo; ctx.globalAlpha = a; ctx.fillStyle = col; ctx.fillRect(0, 0, 360, 640); ctx.restore() }
// Bruma de distancia: degradado vertical entre dos alturas (pinta sobre lo que ya hay).
function bruma(y0, y1, col, a) { const g = ctx.createLinearGradient(0, y0, 0, y1); g.addColorStop(0, 'rgba(' + col + ',0)'); g.addColorStop(1, 'rgba(' + col + ',' + a + ')'); ctx.fillStyle = g; ctx.fillRect(-2000, y0, 5000, y1 - y0) }
// Nubecitas de polvo en cada pisada: llama con la fase del paso. Devuelve nada; dibuja partículas que suben y se disipan.
function polvo(x, y, t, ts, col = '#d9b588', n = 7, s = 1) {
  const u = t - ts; if (u < 0 || u > .9) return;
  for (let i = 0; i < n; i++) { const a = R(i + ts * 13), dir = (a - .3) * 2, r = (2.5 + R(i * 3 + ts) * 4) * s * (1 + u * 1.8); const px = x + dir * 16 * u * s * 1.4, py = y - 4 * s - u * 14 * s * (.4 + R(i)); ctx.globalAlpha = (1 - u / .9) * .55; circ(px, py, r, col) }
  ctx.globalAlpha = 1;
}

// Trayecto con frenada suave: velocidad v (px/s) hasta tF, luego decelera a cero en `dur` s. Devuelve x(t). (para encadenar "llega y se detiene")
function trayecto(x0, v, tF, dur = .4) {
  const xF = x0 + v * tF;
  return t => t <= tF ? x0 + v * t : xF + v * (Math.min(t - tF, dur) - Math.pow(Math.min(t - tF, dur), 2) / (2 * dur));
}
// Huellas en la arena: una por cada paso (cada medio ciclo) hasta la posición actual x. paso = 50.5*escala px. y = suelo.
function huellas(x0, xAhora, s, y, col = 'rgba(80,35,30,.35)') {
  const paso = 50.5 * s; for (let k = 0; x0 + k * paso < xAhora - 6; k++) { const px = x0 + k * paso, py = y + (k % 2 ? 6 : 2); ctx.fillStyle = col; ctx.beginPath(); ctx.ellipse(px, py, 7 * s * .8, 2.2 * s, 0, 0, TAU); ctx.fill() }
}
