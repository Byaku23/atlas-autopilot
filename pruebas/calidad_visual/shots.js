// Captura cuadros de un index.html del motor (usa setT(t)). Node + Playwright (el python de eng/ no tiene playwright en este entorno).
// Uso: node shots.js /abs/index.html salida_prefijo t1 t2 ...      -> prefijo_0.png ...
//      node shots.js /abs/index.html carpeta_salida --video 0 270     -> cuadros 0000.png.. (fps 30) para ffmpeg
const { chromium } = require('playwright');
(async () => {
  const [html, out, ...rest] = process.argv.slice(2);
  const br = await chromium.launch(); const pg = await br.newPage({ viewport: { width: 720, height: 1280 } });
  pg.on('pageerror', e => console.log('ERR', e.message));
  await pg.goto('file://' + html); await pg.waitForTimeout(600);
  if (rest[0] === '--video') {
    const [a, b] = [+rest[1], +rest[2]]; const t0 = Date.now();
    for (let f = a; f < b; f++) { await pg.evaluate(`setT(${f / 30})`); await pg.screenshot({ path: `${out}/${String(f).padStart(4, '0')}.png` }); }
    console.log(`cuadros=${b - a} tiempo=${((Date.now() - t0) / 1000).toFixed(1)}s`);
  } else {
    for (let i = 0; i < rest.length; i++) { await pg.evaluate(`setT(${rest[i]})`); await pg.screenshot({ path: `${out}_${i}.png` }); }
  }
  await br.close();
})();
