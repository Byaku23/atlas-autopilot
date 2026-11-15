// Render de cuadros con Playwright (Node): node render_nodo.js index.html salida_dir desde hasta [fps] ; o con lista de tiempos: node render_nodo.js index.html dir t1,t2,...
const { chromium } = require('playwright'); const path = require('path'), fs = require('fs');
(async () => {
  const [html, out, a, b, fps = 30] = process.argv.slice(2); fs.mkdirSync(out, { recursive: true });
  const br = await chromium.launch(); const pg = await br.newPage({ viewport: { width: 720, height: 1280 } });
  pg.on('pageerror', e => console.log('ERR', e.message)); await pg.goto('file://' + path.resolve(html)); await pg.waitForTimeout(800);
  const t0 = Date.now(); let n = 0;
  if (b === undefined) { for (const t of a.split(',')) { await pg.evaluate(t => setT(t), +t); await pg.screenshot({ path: `${out}/t${t}.png` }); n++ } }
  else for (let f = +a; f < +b; f++) { await pg.evaluate(t => setT(t), f / +fps); await pg.screenshot({ path: `${out}/${String(f).padStart(4, '0')}.png` }); n++ }
  console.log('cuadros', n, 'ms', Date.now() - t0); await br.close();
})();
