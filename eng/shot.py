# python3 shot.py /abs/index.html prefijo t1 t2 ...   -> prefijo_0.png ...
import sys
from playwright.sync_api import sync_playwright
with sync_playwright() as p:
    b=p.chromium.launch();pg=b.new_page(viewport={'width':720,'height':1280})
    pg.on('pageerror',lambda e:print('ERR',e,flush=True))
    pg.goto('file://'+sys.argv[1]);pg.wait_for_timeout(600)
    for i,t in enumerate(sys.argv[3:]):
        pg.evaluate(f"setT({t})");pg.screenshot(path=sys.argv[2]+f"_{i}.png")
    b.close()
