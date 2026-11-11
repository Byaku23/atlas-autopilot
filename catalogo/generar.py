#!/usr/bin/env python3
"""Genera catalogo/CATALOGO_FIRMAS.md y catalogo/DUPLICADOS.md a partir de los assets.js de todos los videos.
Solo LEE; no modifica ningún video ni nada de eng/.  Uso: python3 catalogo/generar.py"""
import re, glob, os, collections
R = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DEF = re.compile(r'^(?:function\s+(\w+)\s*\(([^)]*)\)|(?:const|let|var)\s+(\w+)\s*=\s*(?:\(([^)]*)\)|(\w+))\s*=>)')
CATS = [  # (categoría, patrón del nombre) — la primera que coincide gana
 ('Personajes y animales', r'^(beast|human|person|catHead|catSide|cartoonDog|chimp|mouse|babyFace|bastet|bear|cub|elephant|pigeon|dog|soldier|spy)$'),
 ('Esqueletos', r'Skel$|^fishBone$|^bone$'),
 ('Fondos y ambiente', r'^(sky|nightSky|hills|sunburst|halftone|wheatRow|peak|snowfall|frost|barn)$'),
 ('Efectos', r'^(fire|fireLight|sparksUp|waves|waveArcs|floatHearts|gasCloud|zzz|artFlash|boomShape|nglow|fillRim)$'),
 ('Mapas y marcadores', r'^(drawMap|mapLand|pin|pinDrop)$'),
 ('Iconos y objetos', r'.'),
]
def cat(n):
    for c, p in CATS:
        if re.search(p, n): return c
rows = []
for f in sorted(glob.glob(R + '/ejemplos/*/assets.js') + glob.glob(R + '/videos/*/assets.js')):
    vid = os.path.relpath(os.path.dirname(f), R).split('/')[-1]
    L = open(f, encoding='utf-8', errors='ignore').read().split('\n')
    scenes = ''; atext = '\n'.join(L)
    sp = os.path.join(os.path.dirname(f), 'scenes.js')
    if os.path.exists(sp): scenes = open(sp, encoding='utf-8', errors='ignore').read()
    idx = [(i, DEF.match(l)) for i, l in enumerate(L)]
    idx = [(i, m) for i, m in idx if m and '(' not in ((m.group(2) if m.group(1) else m.group(4)) or '')]
    for k, (i, m) in enumerate(idx):
        name = m.group(1) or m.group(3); args = (m.group(2) if m.group(1) else (m.group(4) if m.group(4) is not None else m.group(5))) or ''
        end = idx[k + 1][0] if k + 1 < len(idx) else len(L)
        body = '\n'.join(L[i:end])
        opts = sorted(set(re.findall(r'\bo\.(\w+)', body)))
        com = ''
        if i > 0 and L[i - 1].strip().startswith('//'): com = L[i - 1].strip()[2:].strip()
        mm = re.search(r'//\s*(.+)$', L[i]);  com = com or (mm.group(1).strip() if mm else '')
        com = re.sub(r'^[-=\s]+|[-=\s]+$', '', com)
        uses = len(re.findall(r'\b' + re.escape(name) + r'\b', scenes)) + max(0, len(re.findall(r'\b' + re.escape(name) + r'\(', atext)) - (1 if m.group(1) else 0))
        rows.append(dict(name=name, args=re.sub(r'\s+', '', args), opts=opts, com=com, vid=vid, line=i + 1, uses=uses, size=len(body)))
# ---------- CATALOGO_FIRMAS.md ----------
out = ['# Catálogo con firmas (generado por catalogo/generar.py — no editar a mano)\n',
       'Cómo leerlo: `nombre(argumentos) {opciones o.xxx}` · video y línea donde está · veces usada en sus escenas.',
       'Para usar una pieza: copia SOLO esa función del `assets.js` indicado (lee desde la línea indicada, ~10-30 líneas). Convención común: `x,y` = posición, `s` = escala, `o` = opciones (flip, col, rim, ph, t, rot).\n']
by = collections.defaultdict(list)
for r in rows: by[cat(r['name'])].append(r)
for c, _ in CATS:
    if c not in by: continue
    out.append(f'\n## {c}')
    for r in sorted(by[c], key=lambda r: r['name'].lower()):
        o = ' {' + ','.join(r['opts']) + '}' if r['opts'] else ''
        extra = f" — {r['com']}" if r['com'] else ''
        out.append(f"- `{r['name']}({r['args']}){o}` · {r['vid']}:{r['line']} · usos {r['uses']}{extra}")
open(os.path.join(R, 'catalogo', 'CATALOGO_FIRMAS.md'), 'w', encoding='utf-8').write('\n'.join(out) + '\n')
# ---------- DUPLICADOS.md ----------
names = collections.defaultdict(list)
for r in rows: names[r['name']].append(r)
same = {n: v for n, v in names.items() if len(v) > 1}
NEAR = [('pin', 'pinDrop'), ('waves', 'waveArcs'), ('wheat', 'wheatRow'), ('sky', 'nightSky'), ('drawMap', 'mapLand'), ('humSkel', 'dogSkel', 'catSkel'), ('dog', 'cartoonDog', 'beast'), ('TX', 'STAMP')]
d = ['# Duplicados y piezas casi iguales (generado por catalogo/generar.py)\n',
     '## Mismo nombre en varios videos (chocan si se mezclan en un mismo assets.js)']
for n, v in sorted(same.items()):
    sig = {r['args'] for r in v}
    d.append(f"- `{n}`: " + '; '.join(f"{r['vid']}:{r['line']} ({r['args']})" for r in v) + (' — FIRMAS DISTINTAS' if len(sig) > 1 else ' — misma firma'))
d.append('\n## Piezas distintas que hacen casi lo mismo (candidatas a unificar)')
for grp in NEAR:
    have = [(n, names[n]) for n in grp if n in names]
    if len(have) > 1: d.append('- ' + ' / '.join(f"`{n}({names[n][0]['args']})` {names[n][0]['vid']}:{names[n][0]['line']}" for n, _ in have))
d.append('\n## Piezas sin ningún uso en su propio video (escenas ni otras piezas): revisar si sobran')
d.append(', '.join(f"`{r['name']}`({r['vid']})" for r in rows if r['uses'] == 0 and not r['name'].isupper() and r['size'] > 120) or 'ninguna')
open(os.path.join(R, 'catalogo', 'DUPLICADOS.md'), 'w', encoding='utf-8').write('\n'.join(d) + '\n')
print('ok', len(rows), 'piezas;', len(same), 'nombres repetidos')
