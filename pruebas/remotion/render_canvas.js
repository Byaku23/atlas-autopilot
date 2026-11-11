// Replica eng/render.py (Playwright: setT(t) + screenshot) en Node, porque aquí no hay playwright de Python.
// Uso: node render_canvas.js <index.html> <carpeta_frames> <desde> <hasta>
const {chromium}=require('playwright');const path=require('path');
(async()=>{const [,,html,out,a,b]=process.argv;const br=await chromium.launch();const pg=await br.newPage({viewport:{width:720,height:1280}});
pg.on('pageerror',e=>console.log('ERR',e.message));
await pg.goto('file://'+path.resolve(html));await pg.waitForTimeout(600);
for(let f=+a;f<+b;f++){await pg.evaluate(t=>setT(t),f/30);await pg.screenshot({path:`${out}/${String(f).padStart(4,'0')}.png`})}
await br.close();console.log('ok',a,b)})();
