#!/usr/bin/env python3
"""registro.py — registro AUTOMÁTICO de piezas: lee los .js que usa un video (eng/core.js, sus recursos y biblioteca.js)
y deduce, sin IA, qué funciones de dibujo existen y cómo se llaman sus parámetros. Encima se aplica piezas.json
(nombres en español, anclas, gestos), comprobando que cada alias sigue coincidiendo con la función real.
Uso suelto (informe de cobertura):  python3 catalogo/declarativo/registro.py [archivo.js ...]"""
import re, os, sys, json, glob

AQUI = os.path.dirname(os.path.abspath(__file__)); RAIZ = os.path.dirname(os.path.dirname(AQUI))
# funciones del motor que no son piezas (infraestructura) y nombres de parámetro que no pueden venir de un JSON
NO_PIEZA = {'world', 'tr', 'withA', 'addLight', 'grab', 'drawB', 'composite', 'captions', 'boot', 'renderScene', 'setT', 'rr', 'nglow', 'fillRim', 'txt', 'tw'}
NO_ARG = {'fn', 'buf', 'b', 'pos', 'keys', 'P', 'A', 'B', 'C', 'tr', 'cam', 'pts'}
TIEMPOS = {'ts', 't0'}
DEF = re.compile(r'^function\s+([A-Za-z_$][\w$]*)\s*\(', re.M)


def _args(src, i):
    """lee la lista de parámetros desde el '(' en src[i]; respeta corchetes y comillas. -> ([(nombre, tiene_defecto)], fin)"""
    out, cur, d, q, j = [], '', 0, None, i + 1
    while j < len(src):
        ch = src[j]
        if q:
            cur += ch
            if ch == q and src[j - 1] != '\\': q = None
        elif ch in '\'"`': q = ch; cur += ch
        elif ch in '([{': d += 1; cur += ch
        elif ch in ')]}':
            if d == 0: break
            d -= 1; cur += ch
        elif ch == ',' and d == 0: out.append(cur); cur = ''
        else: cur += ch
        j += 1
    if cur.strip(): out.append(cur)
    res = []
    for a in out:
        n, _, dv = a.partition('='); res.append((n.strip(), bool(dv.strip())))
    return res, j


def analizar(ruta):
    """-> {nombre: {args, opts, cuerpo, archivo}} de las funciones de primer nivel de un .js"""
    src = open(ruta, encoding='utf-8', errors='ignore').read(); ms = list(DEF.finditer(src)); out = {}
    cortes = sorted([m.start() for m in ms] + [m.start() for m in re.finditer(r'^(const|let|var)\s', src, re.M)] + [len(src)])
    for m in ms:
        args, fin = _args(src, m.end() - 1); sig = next(c for c in cortes if c > m.start())
        cuerpo = src[fin:sig]
        out[m.group(1)] = {'args': args, 'opts': sorted(set(re.findall(r'\bo\.([A-Za-z_]\w*)', cuerpo))), 'cuerpo': cuerpo, 'pasa_o': bool(re.search(r'[,(]\s*o\s*[,)]', cuerpo)), 'archivo': os.path.relpath(ruta, RAIZ)}
    return out


def automatico(rutas):
    """-> (registro {nombre: entrada}, descartadas {nombre: motivo}, firmas {nombre: nº de parámetros})"""
    F = {}
    for r in rutas: F.update(analizar(r))
    dib = {n for n, f in F.items() if 'ctx.' in f['cuerpo']}          # dibuja directamente…
    while True:                                                        # …o llamando a otra que dibuja
        mas = {n for n, f in F.items() if n not in dib and any(re.search(r'\b%s\(' % re.escape(d), f['cuerpo']) for d in dib)}
        if not mas: break
        dib |= mas
    reg, fuera = {}, {}
    for n, f in F.items():
        nombres = [a for a, _ in f['args']]
        if n in NO_PIEZA: fuera[n] = 'infraestructura del motor'; continue
        if n not in dib: fuera[n] = 'no dibuja (cálculo)'; continue
        malos = [a for a in nombres if a in NO_ARG or not re.match(r'^[A-Za-z_]\w*$', a)]
        if malos: fuera[n] = 'parámetro no declarable: ' + ', '.join(malos); continue
        e = {'fn': n, 'args': nombres, 'req': [a for a, d in f['args'] if not d and a not in ('t', 'o')], 'auto': True, 'archivo': f['archivo']}
        if 'o' in nombres: e['o'] = {k: k for k in f['opts']}
        if f['pasa_o']: e['pasa_o'] = True
        ts = [a for a in nombres if a in TIEMPOS]
        if ts: e['tiempos'] = ts
        g = [a for a in nombres if a in ('r', 'rot')]
        if g: e['giro'] = g[0]
        reg[n] = e
    return reg, fuera, {n: len(f['args']) for n, f in F.items()}


def construir(rutas):
    """registro final para un video: automático + piezas.json (alias en español). -> (REG, avisos, faltan)
    faltan = alias cuyo dibujo no está en los recursos del video (se informa solo si el video los usa)."""
    reg, fuera, firmas = automatico(rutas)
    ali = {k: v for k, v in json.load(open(os.path.join(AQUI, 'piezas.json'), encoding='utf-8')).items() if not k.startswith('_')}
    avisos, faltan = [], {}
    bib = os.path.join(AQUI, 'biblioteca.js')
    if bib in rutas:                                   # un fondo predefinido solo vale si el video trae las piezas que usa
        todas = set()
        for r in glob.glob(RAIZ + '/ejemplos/*/assets.js') + glob.glob(RAIZ + '/videos/*/assets.js'): todas |= set(analizar(r))
        for n, f in analizar(bib).items():
            falta = sorted(x for x in set(re.findall(r'\b([A-Za-z_]\w*)\(', f['cuerpo'])) if x in todas and x not in firmas)
            if falta: reg.pop(n, None); faltan[n] = ', '.join(falta)
    for n, e in ali.items():
        fn = e['fn']
        if fn.startswith('_'): reg[n] = e; continue
        if fn not in firmas: faltan[n] = fn; continue
        if len(e['args']) != firmas[fn]:
            avisos.append(f'piezas.json: «{n}» declara {len(e["args"])} parámetros pero {fn}() tiene {firmas[fn]}: hay que actualizar piezas.json'); continue
        reales = set() if reg.get(fn, {}).get('pasa_o') else set(reg.get(fn, {}).get('o', {}).keys())
        for es, orig in (e.get('o') or {}).items():
            if reales and orig not in reales: avisos.append(f'piezas.json: «{n}.{es}» apunta a la opción «{orig}», que {fn}() ya no usa')
        reg[n] = e
    return reg, avisos, faltan


if __name__ == '__main__':
    base = [os.path.join(RAIZ, 'eng', 'core.js')]
    rutas = sys.argv[1:] or sorted(glob.glob(RAIZ + '/ejemplos/*/assets.js') + glob.glob(RAIZ + '/videos/*/assets.js'))
    tot = ok = 0
    for r in [None] + rutas:
        reg, fuera, firmas = automatico(base + ([r, os.path.join(AQUI, 'biblioteca.js')] if r else []))
        if r: reg = {n: e for n, e in reg.items() if e['archivo'] == os.path.relpath(r, RAIZ)}; fuera = {n: m for n, m in fuera.items() if n in analizar(r)}
        n = len(reg) + len(fuera); tot += n; ok += len(reg)
        print(f'{os.path.relpath(r or base[0], RAIZ)}: {n} funciones -> {len(reg)} piezas automáticas, {len(fuera)} descartadas')
        for k, m in sorted(fuera.items()): print(f'    - {k}: {m}')
    print(f'TOTAL: {ok} piezas registradas automáticamente de {tot} funciones')
