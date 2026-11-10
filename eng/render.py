import sys
from playwright.sync_api import sync_playwright
FPS=30; a,b=int(sys.argv[1]),int(sys.argv[2]); out=sys.argv[3]
with sync_playwright() as p:
    br=p.chromium.launch(); pg=br.new_page(viewport={'width':720,'height':1280})
    pg.on('pageerror',lambda e:print('ERR',e,flush=True)); pg.on('console',lambda m:print('LOG',m.text,flush=True) if m.type=='error' else None)
    pg.goto('file://'+sys.argv[4]); pg.wait_for_timeout(600)
    for f in range(a,b):
        try: pg.evaluate(f"setT({f/FPS})")
        except Exception as e: print('FRAME_ERR',f,str(e)[:200],flush=True)
        pg.screenshot(path=f"{out}/{f:04d}.png")
    br.close()
print('ok',a,b,flush=True)
