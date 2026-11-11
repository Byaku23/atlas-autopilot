#!/usr/bin/env python3
"""Caché por contenido para las etapas de un video. Nunca reutiliza resultados desactualizados.

Uso:  python3 eng/cache.py CARPETA ETAPA [--marcar] [--param clave=valor ...]
      python3 eng/cache.py CARPETA estado          (resumen de todas las etapas)
Etapas: voz | audio | mezcla | render
Salida: "REUSAR <etapa>" (código 0) o "HACER <etapa>: <motivo>" (código 10).
--marcar guarda la huella DESPUÉS de que la etapa terminó bien.

Una etapa se reutiliza solo si: (1) existen todas sus salidas, (2) la huella de sus entradas
(contenido de archivos + configuración + parámetros + huella de las SALIDAS de las etapas anteriores)
es idéntica a la guardada, y (3) las salidas no han cambiado desde que se marcaron.
"""
import sys, os, json, hashlib, glob, time
ENG = os.path.dirname(os.path.abspath(__file__))
CFG = os.path.join(ENG, 'config.json')

def h_file(p):
    m = hashlib.sha256()
    with open(p, 'rb') as f:
        for b in iter(lambda: f.read(1 << 20), b''):
            m.update(b)
    return m.hexdigest()

def expand(base, pats):
    out = []
    for p in pats:
        out += glob.glob(os.path.join(base, p))
    return sorted(set(x for x in out if os.path.isfile(x)))

# etapa -> (entradas en la carpeta, entradas en eng/, salidas, secciones de config, etapas previas)
ETAPAS = {
 'voz':    (['voz_texto.txt'], [], ['voz.mp3', 'palabras.json'], ['voz'], []),
 'audio':  (['audio.py', 'ev.json', 'ev.py', 'st.txt', 'script.txt', 'palabras.json', 'data.js'],
            ['sfx.py', 'words.py'], ['musica.wav', 'sfx.wav'], [], ['voz']),
 'mezcla': (['ev.json'], ['voice.sh', 'mix.sh'], ['voz_final.wav', 'mezcla.wav'], [], ['voz', 'audio']),
 'render': (['index.html', '*.js', 'ev.json'],
            ['core.js', 'shell.html', 'render.py', 'go.sh'], ['*.mp4'], ['video'], ['mezcla']),
}

def cargar(d):
    p = os.path.join(d, '.cache.json')
    try: return json.load(open(p))
    except Exception: return {}

def guardar(d, c):
    json.dump(c, open(os.path.join(d, '.cache.json'), 'w'), indent=1, sort_keys=True)

def salidas(d, etapa):
    return expand(d, ETAPAS[etapa][2])

def huella(d, etapa, params):
    ent_d, ent_e, _, secs, prev = ETAPAS[etapa]
    cfg = json.load(open(CFG))
    items = {}
    for f in expand(d, ent_d):
        if etapa == 'render' and f.endswith('.mp4'): continue
        items['d:' + os.path.relpath(f, d)] = h_file(f)
    for f in ent_e:
        items['e:' + f] = h_file(os.path.join(ENG, f))
    for s in secs:
        items['cfg:' + s] = hashlib.sha256(json.dumps(cfg[s], sort_keys=True).encode()).hexdigest()
    for pe in prev:  # las salidas de etapas anteriores forman parte de la entrada
        for f in salidas(d, pe):
            items['prev:' + pe + ':' + os.path.basename(f)] = h_file(f)
    items['params'] = json.dumps(params, sort_keys=True)
    return hashlib.sha256(json.dumps(items, sort_keys=True).encode()).hexdigest(), items

def decidir(d, etapa, params):
    c = cargar(d).get(etapa)
    outs = salidas(d, etapa)
    nec = [o for o in ETAPAS[etapa][2] if not glob.glob(os.path.join(d, o))]
    if nec: return False, 'faltan salidas: ' + ','.join(nec)
    if not c: return False, 'sin huella previa'
    hh, items = huella(d, etapa, params)
    if c['huella'] != hh:
        cambios = [k for k in sorted(set(items) | set(c['items'])) if items.get(k) != c['items'].get(k)]
        return False, 'cambió: ' + ', '.join(cambios[:6])
    for o in outs:
        if c['salidas'].get(os.path.basename(o)) != h_file(o):
            return False, 'salida modificada: ' + os.path.basename(o)
    return True, 'sin cambios'

def main():
    a = sys.argv[1:]
    if len(a) < 2: print(__doc__); sys.exit(2)
    d, etapa = os.path.abspath(a[0]), a[1]
    params = dict(x.split('=', 1) for x in a[2:] if '=' in x and not x.startswith('--'))
    if etapa == 'estado':
        for e in ETAPAS:
            ok, m = decidir(d, e, params); print(('REUSAR ' if ok else 'HACER   ') + e + ': ' + m)
        return
    if etapa not in ETAPAS: print('etapa desconocida'); sys.exit(2)
    if '--marcar' in a:
        hh, items = huella(d, etapa, params)
        c = cargar(d)
        c[etapa] = {'huella': hh, 'items': items, 'params': params, 'hora': time.strftime('%F %T'),
                    'salidas': {os.path.basename(o): h_file(o) for o in salidas(d, etapa)}}
        guardar(d, c); print('marcada', etapa); return
    ok, m = decidir(d, etapa, params)
    print(('REUSAR ' if ok else 'HACER ') + etapa + ': ' + m)
    sys.exit(0 if ok else 10)
main()
