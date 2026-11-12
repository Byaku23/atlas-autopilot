// fotos.js — imágenes reales con cita de fuente. Cargar DESPUÉS de core.js.
//   const img = cargarFoto('../fotos/lincoln_1865.jpg');
//   fotoReal(img, {x,y,w,t,t0,rot, kb:[z0,z1,fx,fy], dur, sepia}, cred)  // tarjeta con marco que entra con spring + Ken Burns
//   credito('Fuente: ...', t, t0)  // pie de fuente (abajo)
//   resaltar(x,y,r,t,t0)  // círculo de énfasis dibujado sobre la foto
function cargarFoto(src) { const i = new Image(); i.src = src; return i }
function fotoReal(img, o) {
  if (!img.complete || !img.naturalWidth) return;
  const u = o.t - o.t0; if (u < 0) return;
  const w = o.w || 250, h = w * img.naturalHeight / img.naturalWidth, e = spring(u, 12, 6.5), kb = o.kb || [1, 1.15, .5, .4], p = cl(u / (o.dur || 4));
  const z = lerp(kb[0], kb[1], eio(p));
  ctx.save(); ctx.translate(o.x, o.y + (1 - e) * 180); ctx.rotate((o.rot || 0) + (1 - e) * .25); ctx.scale(.6 + .4 * e, .6 + .4 * e); ctx.globalAlpha *= cl(u * 6);
  ctx.fillStyle = 'rgba(0,0,0,.35)'; rr(-w / 2 - 6 + 8, -h / 2 - 6 + 12, w + 12, h + 12, 4); ctx.fill();   // sombra
  ctx.fillStyle = '#efe6d2'; rr(-w / 2 - 8, -h / 2 - 8, w + 16, h + 16, 3); ctx.fill();               // marco de papel
  ctx.beginPath(); ctx.rect(-w / 2, -h / 2, w, h); ctx.clip();
  const sw = img.naturalWidth / z, sh = img.naturalHeight / z, sx = (img.naturalWidth - sw) * kb[2], sy = (img.naturalHeight - sh) * kb[3];
  if (o.sepia) ctx.filter = 'sepia(' + o.sepia + ')';
  ctx.drawImage(img, sx, sy, sw, sh, -w / 2, -h / 2, w, h); ctx.filter = 'none';
  if (o.draw) o.draw(w, h, z);
  const g = ctx.createRadialGradient(0, 0, w * .3, 0, 0, w * .85); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, 'rgba(30,15,0,.45)'); ctx.fillStyle = g; ctx.fillRect(-w / 2, -h / 2, w, h);
  ctx.restore();
}
function credito(s, t, t0, y = 596) {
  const u = t - t0; if (u < 0) return; ctx.save(); ctx.font = '600 11px ' + DISP; const w = ctx.measureText(s).width + 22, e = eo(cl(u / .4));
  ctx.globalAlpha = e; ctx.fillStyle = 'rgba(10,8,20,.72)'; rr(180 - w / 2, y - 13 + (1 - e) * 10, w, 22, 11); ctx.fill();
  ctx.fillStyle = '#f3e7cf'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(s, 180, y - 2 + (1 - e) * 10); ctx.restore();
}
function resaltar(x, y, r, t, t0) {
  const u = t - t0; if (u < 0) return; const p = eo(cl(u / .6));
  ctx.save(); ctx.strokeStyle = '#ff4d3d'; ctx.lineWidth = 3; ctx.lineCap = 'round'; ctx.beginPath(); ctx.arc(x, y, r, -Math.PI / 2, -Math.PI / 2 + TAU * p); ctx.stroke(); ctx.restore();
}
