#!/usr/bin/env python3
"""compilar.py CARPETA — valida CARPETA/video.json (esquema v1 o v2) y genera, sin IA, lo que el motor Canvas necesita:
data.js + ev.json (con eng/words.py, igual que ev.py), video.js, index.html y copias de interp.js y de los recursos.
No modifica eng/ ni ningún otro video. Si hay errores, los lista todos y no genera nada.  Formato: ESQUEMA.md"""
import sys, os, json, re, shutil, difflib
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); import registro

AQUI = os.path.dirname(os.path.abspath(__file__)); RAIZ = os.path.dirname(os.path.dirname(AQUI)); ENG = os.path.join(RAIZ, 'eng')
VERSIONES = [1, 2]
CURVAS = ['lin', 'eo', 'ei', 'ez', 'eio', 'eb', 'eel']
RE_T = re.compile(r'^@([^\s+\-@]+)([+-]\d*\.?\d+)?$')
RE_COLOR = re.compile(r'^(#[0-9a-fA-F]{3}|#[0-9a-fA-F]{6}|rgba?\([\d\s.,%]+\))$')
RE_ID = re.compile(r'^[A-Za-z_][A-Za-z0-9_]*$')
RAIZ_CLAVES = {'esquema', 'titulo', 'duracion', 'tema', 'recursos', 'scripts', 'eventos', 'golpes', 'escenas'}
ESCENA_CLAVES = {'id', 'inicio', 'transicion', 'fondo', 'mundo', 'pantalla', 'camara', 'acciones', 'js'}
CAPA_FIJAS = {'usa', 'id', 'visible', 'trayecto', 't', 'sobre', 'estilo'}
OPS = {'claves': {'claves'}, 'cambia': {'cambia', 'en', 'dur', 'curva'}, 'rampa': {'rampa'}, 'de': {'de', 'por', 'mas'}, 'suma': {'suma'}, 'onda': {'onda'}, 'rebote': {'rebote'}, 'color': {'color', 'alfa'}}
DIRS = ['izquierda', 'derecha', 'arriba', 'abajo']
ACCIONES = {  # acción -> (claves permitidas, obligatorias)
    'lanzar': ({'lanzar', 'quien', 'en', 'desde', 'a', 'dur', 'altura', 'suelta', 'giro', 'curva'}, ('en', 'a')),
    'reaccionar': ({'reaccionar', 'en', 'gesto', 'intensidad'}, ('en',)),
    'entrar': ({'entrar', 'en', 'desde', 'dur', 'curva', 'pasos', 'sombra', 'luz', 'aparece'}, ('en',)),
    'salir': ({'salir', 'en', 'hacia', 'dur', 'curva', 'pasos', 'desvanece'}, ('en',)),
    'desplazar': ({'desplazar', 'en', 'a', 'por', 'dur', 'curva', 'altura', 'pasos'}, ('en',)),
}
TRANSICIONES = ['morph', 'dive', 'ink', 'push', 'spin', 'dip', 'fog', 'flash', 'whip', 'glitch', 'iris', 'slide', 'blinds', 'zoom', 'static', 'cut']


class Val:
    def __init__(s, V, REG, carpeta, faltan=None, autos=()):
        s.V, s.REG, s.dir, s.err, s.ids, s.refs = V, REG, carpeta, [], {}, []
        s.faltan, s.v, s.puntos, s.pieza, s.auto, s.lanzados = faltan or {}, V.get('esquema'), [], {}, {}, set()
        s.ev = (set((V.get('eventos') or {}).keys()) if isinstance(V.get('eventos'), dict) else set()) | set(autos)

    def e(s, ruta, msg): s.err.append(f'{ruta}: {msg}')

    def claves(s, o, ok, ruta, req=()):
        if not isinstance(o, dict): s.e(ruta, 'debe ser un objeto {…}'); return False
        for k in o:
            if k not in ok:
                c = difflib.get_close_matches(k, list(ok), 1); s.e(ruta, f'clave desconocida «{k}»' + (f' (¿quisiste decir «{c[0]}»?)' if c else ''))
        for k in req:
            if k not in o: s.e(ruta, f'falta «{k}»')
        return True

    def num(s, v, ruta, mn=None):
        if isinstance(v, bool) or not isinstance(v, (int, float)): s.e(ruta, f'debe ser un número, no {json.dumps(v, ensure_ascii=False)}'); return False
        if mn is not None and v < mn: s.e(ruta, f'debe ser ≥ {mn}')
        return True

    def tiempo(s, v, ruta, k_esc=None):
        """número de segundos o "@evento±n". Devuelve True si es válido."""
        if isinstance(v, (int, float)) and not isinstance(v, bool): return True
        m = RE_T.match(v) if isinstance(v, str) else None
        if not m: s.e(ruta, f'tiempo no válido {json.dumps(v, ensure_ascii=False)}: usa segundos o "@evento", "@evento+0.3", "@escena-0.1"'); return False
        n = m.group(1)
        if n == 'escena':
            if k_esc is None: s.e(ruta, '"@escena" solo vale dentro de una escena')
        elif n not in s.ev and not re.match(r'^tr\d+$', n):
            c = difflib.get_close_matches(n, list(s.ev), 1); s.e(ruta, f'evento desconocido «@{n}»' + (f' (¿«@{c[0]}»?)' if c else '') + '; decláralo en "eventos"')
        return True

    def valor(s, v, ruta, k):
        if v is None or isinstance(v, (bool, int, float)): return
        if isinstance(v, str):
            if v.startswith('$') and v[1:] not in (s.V.get('tema') or {}): s.e(ruta, f'el tema no define «{v}»')
            return
        if isinstance(v, list):
            for i, x in enumerate(v): s.valor(x, f'{ruta}[{i}]', k)
            return
        ops = [o for o in OPS if o in v]
        if len(ops) != 1: s.e(ruta, f'valor no reconocido; debe ser número, texto, lista o un operador ({", ".join(OPS)})'); return
        op = ops[0]; s.claves(v, OPS[op], ruta)
        if op == 'cambia':
            if s.v == 1: s.e(ruta, '«cambia» es del esquema 2')
            L = v['cambia']
            if not (isinstance(L, list) and len(L) == 2): s.e(ruta + '.cambia', 'debe ser [valor inicial, valor final]')
            else:
                tp = set()
                for x in L:
                    if isinstance(x, str) and x.startswith('$'): x = (s.V.get('tema') or {}).get(x[1:], x)
                    tp.add('n' if isinstance(x, (int, float)) and not isinstance(x, bool) else 'c' if isinstance(x, str) and re.match(r'^#[0-9a-fA-F]{3,6}$', x) else '?')
                if tp not in ({'n'}, {'c'}): s.e(ruta + '.cambia', 'los dos valores deben ser números o los dos colores #rrggbb')
            if 'en' not in v: s.e(ruta, '«cambia» necesita «en» (cuándo empieza)')
            else: s.tiempo(v['en'], ruta + '.en', k)
            if 'dur' in v and s.num(v['dur'], ruta + '.dur') and v['dur'] <= 0: s.e(ruta + '.dur', 'debe ser > 0')
            if 'curva' in v and v['curva'] not in CURVAS: s.e(ruta + '.curva', f'curva desconocida «{v["curva"]}»')
        elif op == 'claves':
            L = v['claves']
            if not isinstance(L, list) or len(L) < 1: s.e(ruta, '«claves» necesita una lista con al menos un punto {t, v}'); return
            tipos = set()
            for i, q in enumerate(L):
                r = f'{ruta}.claves[{i}]'
                if not s.claves(q, {'t', 'v', 'curva'}, r, ('t', 'v')): continue
                if 't' in q: s.tiempo(q['t'], r + '.t', k)
                if 'curva' in q and q['curva'] not in CURVAS: s.e(r + '.curva', f'curva desconocida «{q["curva"]}» (válidas: {", ".join(CURVAS)})')
                x = q.get('v')
                if isinstance(x, str) and x.startswith('$'): x = (s.V.get('tema') or {}).get(x[1:], x)
                if isinstance(x, (int, float)) and not isinstance(x, bool): tipos.add('n')
                elif isinstance(x, str) and re.match(r'^#[0-9a-fA-F]{3,6}$', x): tipos.add('c')
                else: s.e(r + '.v', 'debe ser un número o un color #rrggbb')
            if len(tipos) > 1: s.e(ruta, 'no mezcles números y colores en las mismas «claves»')
        elif op == 'rampa':
            r = v['rampa']
            if s.claves(r, {'desde', 'hasta', 'vel', 'antes', 'luego'}, ruta + '.rampa', ('desde', 'vel')):
                for q in ('desde', 'hasta'):
                    if q in r: s.tiempo(r[q], f'{ruta}.rampa.{q}', k)
                for q in ('vel', 'antes', 'luego'):
                    if q in r: s.num(r[q], f'{ruta}.rampa.{q}')
        elif op == 'de':
            if not isinstance(v['de'], str) or v['de'].count('.') != 1: s.e(ruta + '.de', 'debe ser "idDeCapa.propiedad"')
            else: s.refs.append((k, v['de'], ruta + '.de'))
            for q in ('por', 'mas'):
                if q in v: s.num(v[q], f'{ruta}.{q}')
        elif op == 'suma':
            if not isinstance(v['suma'], list): s.e(ruta + '.suma', 'debe ser una lista')
            else:
                for i, x in enumerate(v['suma']): s.valor(x, f'{ruta}.suma[{i}]', k)
        elif op == 'onda':
            if s.claves(v['onda'], {'amp', 'frec', 'fase'}, ruta + '.onda', ('amp', 'frec')):
                for q, x in v['onda'].items(): s.num(x, f'{ruta}.onda.{q}')
        elif op == 'rebote':
            r = v['rebote']
            if s.claves(r, {'en', 'amp', 'k', 'd'}, ruta + '.rebote', ('en', 'amp')):
                if 'en' in r: s.tiempo(r['en'], ruta + '.rebote.en', k)
                for q in ('amp', 'k', 'd'):
                    if q in r: s.num(r[q], f'{ruta}.rebote.{q}')
        elif op == 'color':
            if 'alfa' not in v: s.e(ruta, 'un valor {color, alfa} necesita «alfa»')
            else: s.valor(v['alfa'], ruta + '.alfa', k)
            c = v['color']
            if not (isinstance(c, str) and (re.match(r'^#[0-9a-fA-F]{3,6}$', c) or c.startswith('$'))): s.e(ruta + '.color', 'debe ser un color #rrggbb o $tema')
            else: s.valor(c, ruta + '.color', k)

    def capa(s, L, ruta, k):
        if not isinstance(L, dict) or 'usa' not in L: s.e(ruta, 'cada capa necesita «usa» (nombre de una pieza del registro)'); return
        if 'estilo' in L:                              # v2: estilo = parámetros con nombre definidos en tema.estilos
            est = ((s.V.get('tema') or {}).get('estilos') or {}).get(L['estilo']) if isinstance(L['estilo'], str) else None
            if not isinstance(est, dict): s.e(ruta + '.estilo', f'el tema no define el estilo «{L["estilo"]}» (en tema.estilos)')
            else: L = {**est, **L}
        r = s.REG.get(L['usa'])
        if not r and L['usa'] in s.faltan: s.e(ruta + '.usa', f'la pieza «{L["usa"]}» necesita {s.faltan[L["usa"]]}(), que no está en los «recursos» de este video'); return
        if not r or L['usa'].startswith('_'):
            c = difflib.get_close_matches(str(L['usa']), [x for x in s.REG if not x.startswith('_')], 1)
            s.e(ruta + '.usa', f'pieza desconocida «{L["usa"]}»' + (f' (¿«{c[0]}»?)' if c else '')); return
        args = [a for a in r['args'] if a not in ('t', 'o')]; opts = list((r.get('o') or {}).keys()); ts = r.get('tiempos') or []
        s.claves(L, CAPA_FIJAS | set(args) | set(opts), ruta)
        idc = L.get('id') or s.auto.get((k, L['usa']))
        req = list(r.get('req', [])) + ([a for a, d in (r.get('def2') or {}).items() if not str(d).startswith('$')] if s.v == 1 else [])
        for a in req:
            if a not in L and not (a in ('x', 'y') and ('trayecto' in L or 'sobre' in L or (k, idc) in s.lanzados)) and not (a == r.get('giro') and (k, idc) in s.lanzados): s.e(ruta, f'a «{L["usa"]}» le falta «{a}»')
        if 'sobre' in L: s.punto(L['sobre'], ruta + '.sobre', k)
        if 'id' not in L and idc: s.ids[(k, idc)] = set(args) | set(opts); s.pieza[(k, idc)] = (L, r)
        for n in args + opts + ['t']:
            if n in L:
                if n in ts: s.tiempo(L[n], f'{ruta}.{n}', k)
                else: s.valor(L[n], f'{ruta}.{n}', k)
        if 'id' in L:
            if not isinstance(L['id'], str) or not RE_ID.match(L['id']): s.e(ruta + '.id', 'id no válido (letras, números y _)')
            elif (k, L['id']) in s.ids: s.e(ruta + '.id', f'id repetido «{L["id"]}» en la misma escena')
            else: s.ids[(k, L['id'])] = set(args) | set(opts) | ({'x', 'y'} if 'trayecto' in L else set()); s.pieza[(k, L['id'])] = (L, r)
        if 'visible' in L and s.claves(L['visible'], {'desde', 'hasta'}, ruta + '.visible'):
            for q, x in L['visible'].items(): s.tiempo(x, f'{ruta}.visible.{q}', k)
        if 'trayecto' in L:
            a = L['trayecto'].get('arco') if isinstance(L['trayecto'], dict) else None
            if a is None: s.e(ruta + '.trayecto', 'por ahora solo existe {"arco": {…}}')
            elif s.claves(a, {'de', 'a', 'inicio', 'dur', 'altura', 'curva'}, ruta + '.trayecto.arco', ('de', 'a', 'inicio', 'dur')):
                for q in ('de', 'a'):
                    if q in a and not (isinstance(a[q], list) and len(a[q]) == 2 and all(isinstance(x, (int, float)) for x in a[q])): s.e(f'{ruta}.trayecto.arco.{q}', 'debe ser [x, y]')
                if 'inicio' in a: s.tiempo(a['inicio'], ruta + '.trayecto.arco.inicio', k)
                if 'dur' in a and s.num(a['dur'], ruta + '.trayecto.arco.dur') and a['dur'] <= 0: s.e(ruta + '.trayecto.arco.dur', 'debe ser > 0')
                if 'curva' in a and a['curva'] not in CURVAS: s.e(ruta + '.trayecto.arco.curva', 'curva desconocida')
                if not ('x' in r['args'] and 'y' in r['args']): s.e(ruta + '.trayecto', f'«{L["usa"]}» no tiene posición x, y')

    def punto(s, p, ruta, k):
        """[x, y], "capa" o "capa.ancla" (v2). Las referencias se comprueban al final, cuando ya se conocen todas las capas."""
        if isinstance(p, list):
            if len(p) != 2: s.e(ruta, 'debe ser [x, y]')
            else:
                for j, x in enumerate(p): s.valor(x, f'{ruta}[{j}]', k)
        elif isinstance(p, str) and re.match(r'^[A-Za-z_]\w*(\.[A-Za-z_]\w*)?$', p):
            if s.v == 1: s.e(ruta, 'las anclas con nombre son del esquema 2; en el esquema 1 usa [x, y]')
            s.puntos.append((k, p, ruta))
        else: s.e(ruta, 'debe ser [x, y], el id de una capa o "capa.ancla" (p. ej. "lobo.ojo")')

    def accion(s, ac, ruta, k):
        tipos = [t for t in ACCIONES if isinstance(ac, dict) and t in ac]
        if len(tipos) != 1: s.e(ruta, f'cada acción lleva exactamente una de: {", ".join(ACCIONES)}'); return
        tp = tipos[0]; ok, req = ACCIONES[tp]; s.claves(ac, ok, ruta, req)
        if 'en' in ac: s.tiempo(ac['en'], ruta + '.en', k)
        for n in ('dur', 'luz'):
            if n in ac and s.num(ac[n], f'{ruta}.{n}') and ac[n] <= 0: s.e(f'{ruta}.{n}', 'debe ser > 0')
        for n in ('pasos', 'altura', 'suelta', 'intensidad'):
            if n in ac: s.num(ac[n], f'{ruta}.{n}')
        if 'curva' in ac and ac['curva'] not in CURVAS: s.e(ruta + '.curva', f'curva desconocida «{ac["curva"]}» (válidas: {", ".join(CURVAS)})')
        for n in ('desde', 'hacia'):
            if n in ac and tp in ('entrar', 'salir'):
                d = ac[n]
                if not (d in DIRS if isinstance(d, str) else isinstance(d, list) and len(d) == 2 and all(isinstance(x, (int, float)) for x in d)): s.e(f'{ruta}.{n}', f'debe ser [dx, dy] o una dirección: {", ".join(DIRS)}')
        if tp in ('lanzar', 'desplazar'):
            for n in ('desde', 'a'):
                if n in ac: s.punto(ac[n], f'{ruta}.{n}', k)
        if 'por' in ac and not (isinstance(ac['por'], list) and len(ac['por']) == 2 and all(isinstance(x, (int, float)) for x in ac['por'])): s.e(ruta + '.por', 'debe ser [dx, dy]')
        if tp == 'desplazar' and ('a' in ac) == ('por' in ac): s.e(ruta, '«desplazar» necesita «a» (un punto o ancla) o «por» ([dx, dy]), uno de los dos')
        if 'sombra' in ac: s.valor(ac['sombra'], ruta + '.sombra', k)
        if 'giro' in ac and ac['giro'] is not False:
            if s.claves(ac['giro'], {'vel', 'hasta', 'reposo'}, ruta + '.giro'):
                if 'hasta' in ac['giro']: s.tiempo(ac['giro']['hasta'], ruta + '.giro.hasta', k)
                for n in ('vel', 'reposo'):
                    if n in ac['giro']: s.num(ac['giro'][n], f'{ruta}.giro.{n}')
        s.acts.append((k, tp, ac, ruta))

    def acciones_fin(s):
        """comprobaciones que necesitan conocer las capas: actores, capacidades de cada pieza, gestos y anclas"""
        for k, tp, ac, ruta in s.acts:
            idn = ac[tp]; par = s.pieza.get((k, idn))
            if not par: s.e(f'{ruta}.{tp}', f'no hay ninguna capa llamada «{idn}» en esta escena (capas con nombre: {", ".join(sorted(i for kk, i in s.pieza if kk == k)) or "ninguna"})'); continue
            L, r = par; pz = L['usa']
            if tp != 'reaccionar' and not ('x' in r['args'] and 'y' in r['args']): s.e(ruta, f'«{pz}» no tiene posición x, y: no se puede {tp}')
            if tp == 'reaccionar':
                g = r.get('gestos') or {}
                if not g: s.e(ruta, f'«{pz}» no tiene gestos definidos en piezas.json')
                elif 'gesto' in ac and ac['gesto'] not in g: s.e(ruta + '.gesto', f'«{pz}» no tiene el gesto «{ac["gesto"]}» (tiene: {", ".join(g)})')
            if tp == 'lanzar':
                q = ac.get('quien')
                if q is not None:
                    pq = s.pieza.get((k, q))
                    if not pq: s.e(ruta + '.quien', f'no hay ninguna capa llamada «{q}» en esta escena')
                    else:
                        if 'lanzar' not in (pq[1].get('gestos') or {}): s.e(ruta + '.quien', f'«{pq[0]["usa"]}» no sabe lanzar (no tiene el gesto «lanzar» en piezas.json)')
                        if 'desde' not in ac: s.puntos.append((k, q + '.mano', ruta + '.quien'))
                elif 'desde' not in ac: s.e(ruta, '«lanzar» necesita «quien» (con ancla «mano») o «desde»')
            if tp == 'entrar' and 'sombra' in ac:
                if not r.get('tinte'): s.e(ruta + '.sombra', f'«{pz}» no puede salir de la sombra (no tiene color cambiable)')
                elif r['tinte'] not in L: s.e(ruta + '.sombra', f'para salir de la sombra, la capa «{idn}» debe indicar «{r["tinte"]}» (su color ya iluminada)')
            if tp in ('entrar', 'salir') and not any(n in ac for n in ('desde', 'hacia', 'sombra', 'aparece', 'desvanece')): s.e(ruta, f'«{tp}» necesita cómo: {"«desde», «sombra» o «aparece»" if tp == "entrar" else "«hacia» o «desvanece»"}')
            if tp != 'lanzar' and tp != 'reaccionar' and not ('x' in L and 'y' in L or 'sobre' in L or (k, idn) in s.lanzados): s.e(ruta, f'la capa «{idn}» necesita «x» e «y» para poder {tp}')
        for k, p, ruta in s.puntos:
            i, _, an = p.partition('.'); par = s.pieza.get((k, i))
            if not par: s.e(ruta, f'no hay ninguna capa llamada «{i}» en esta escena'); continue
            L, r = par
            if not ('x' in r['args'] and 'y' in r['args']): s.e(ruta, f'«{L["usa"]}» no tiene posición'); continue
            if an and an not in (r.get('anclas') or {}): s.e(ruta, f'«{L["usa"]}» no tiene el ancla «{an}»' + (f' (tiene: {", ".join(r["anclas"])})' if r.get('anclas') else ' (no tiene anclas definidas en piezas.json)'))

    def camara(s, C, ruta, k):
        if not s.claves(C, {'claves', 'capas'}, ruta): return
        for i, q in enumerate(C.get('claves') or []):
            r = f'{ruta}.claves[{i}]'
            if s.claves(q, {'t', 'x', 'y', 'z', 'rot', 'curva'}, r, ('t', 'x', 'y', 'z')):
                if 't' in q: s.tiempo(q['t'], r + '.t', k)
                for n in ('x', 'y', 'z', 'rot'):
                    if n in q: s.num(q[n], f'{r}.{n}')
                if 'z' in q and isinstance(q['z'], (int, float)) and q['z'] <= 0: s.e(r + '.z', 'el zoom debe ser > 0')
                if 'curva' in q and q['curva'] not in CURVAS: s.e(r + '.curva', 'curva desconocida')
        for i, q in enumerate(C.get('capas') or []):
            r = f'{ruta}.capas[{i}]'
            if not s.claves(q, {'sigue', 'mira', 'desde', 'mezcla', 'curva', 'retraso', 'z', 'zDur', 'zCurva'}, r, ('desde', 'mezcla')): continue
            if ('sigue' in q) == ('mira' in q): s.e(r, 'usa «sigue» (una capa o un ancla) o «mira» ([x, y] o un ancla), uno de los dos')
            if 'sigue' in q:
                if isinstance(q['sigue'], str) and s.v == 1: s.refs.append((k, f'{q["sigue"]}.x', r + '.sigue')); s.refs.append((k, f'{q["sigue"]}.y', r + '.sigue'))
                elif isinstance(q['sigue'], str): s.punto(q['sigue'], r + '.sigue', k)
                else: s.e(r + '.sigue', 'debe ser el id de una capa o "capa.ancla"')
            if 'mira' in q: s.punto(q['mira'], r + '.mira', k)
            if 'desde' in q: s.tiempo(q['desde'], r + '.desde', k)
            for n in ('mezcla', 'zDur'):
                if n in q and s.num(q[n], f'{r}.{n}') and q[n] <= 0: s.e(f'{r}.{n}', 'debe ser > 0')
            for n in ('retraso', 'z'):
                if n in q: s.num(q[n], f'{r}.{n}')
            for n in ('curva', 'zCurva'):
                if n in q and q[n] not in CURVAS: s.e(f'{r}.{n}', 'curva desconocida')

    def todo(s):
        V = s.V
        if not s.claves(V, RAIZ_CLAVES, 'video', ('esquema', 'duracion', 'escenas')): return
        s.acts = []
        if s.v == 1 and ('golpes' in V or any(isinstance(S, dict) and 'acciones' in S for S in V.get('escenas') or [])): s.e('esquema', '«golpes» y «acciones» son del esquema 2')
        for n, f in (V.get('golpes') or {}).items() if isinstance(V.get('golpes'), dict) else []:
            s.num(f, f'golpes.{n}', 0)
            if n not in s.ev: s.e(f'golpes.{n}', 'no es un evento ni una palabra de la narración')
        if V.get('esquema') not in VERSIONES: s.e('esquema', f'versión {V.get("esquema")!r} no soportada (este compilador entiende: {VERSIONES})')
        if 'duracion' in V and s.num(V['duracion'], 'duracion') and V['duracion'] <= 0: s.e('duracion', 'debe ser > 0')
        for k_, c in (V.get('tema') or {}).items():
            if k_ == 'estilos':
                if s.v == 1 or not isinstance(c, dict) or not all(isinstance(x, dict) for x in c.values()): s.e('tema.estilos', 'debe ser {nombre: {parámetros}} (esquema 2)')
                continue
            if not (isinstance(c, (int, float)) or (isinstance(c, str) and RE_COLOR.match(c))): s.e(f'tema.{k_}', 'debe ser un color (#rrggbb o rgba(...)) o un número')
        for lista in ('recursos', 'scripts'):
            for i, p in enumerate(V.get(lista) or []):
                base = RAIZ if lista == 'recursos' else s.dir
                if not isinstance(p, str) or not os.path.isfile(os.path.join(base, p)): s.e(f'{lista}[{i}]', f'no existe el archivo «{p}» (ruta desde {"la raíz del repositorio" if lista == "recursos" else "la carpeta del video"})')
        for n, ev in (V.get('eventos') or {}).items():
            r = f'eventos.{n}'
            if not RE_ID.match(n) or n == 'escena' or re.match(r'^tr\d+$', n): s.e(r, 'nombre de evento no válido (letras sin tilde, números, _; «escena» y «trN» están reservados)'); continue
            if not s.claves(ev, {'palabra', 'despues', 'n', 'fin', 'mas', 't', 'golpe'}, r): continue
            if ('palabra' in ev) == ('t' in ev): s.e(r, 'usa «palabra» (de la narración) o «t» (segundos fijos), uno de los dos')
            for q in ('despues', 'mas', 't', 'golpe'):
                if q in ev: s.num(ev[q], f'{r}.{q}', 0 if q in ('golpe', 'despues') else None)
        E = V.get('escenas')
        if not isinstance(E, list) or not E: s.e('escenas', 'debe ser una lista con al menos una escena'); return
        for k, S in enumerate(E):
            r = f'escenas[{k}]'
            if not s.claves(S, ESCENA_CLAVES, r): continue
            if k == 0 and S.get('inicio', 0) != 0: s.e(r + '.inicio', 'la primera escena empieza en 0')
            if k > 0:
                if 'inicio' not in S: s.e(r, 'falta «inicio»')
                else: s.tiempo(S['inicio'], r + '.inicio')
            tr = S.get('transicion')
            if tr is not None:
                if k == 0: s.e(r + '.transicion', 'la primera escena no tiene transición de entrada')
                elif not isinstance(tr, dict) or tr.get('type') not in TRANSICIONES: s.e(r + '.transicion', f'necesita "type" entre: {", ".join(TRANSICIONES)}')
            if 'js' in S:
                if not isinstance(S['js'], str) or not RE_ID.match(S['js']): s.e(r + '.js', 'debe ser el nombre de una función de escena, p. ej. "s4"')
                elif not any(re.search(r'\b(function\s+%s\b|(const|let|var)\s+%s\s*=)' % (S['js'], S['js']), open(os.path.join(s.dir, p), encoding='utf-8').read()) for p in (V.get('scripts') or []) if os.path.isfile(os.path.join(s.dir, p))):
                    s.e(r + '.js', f'ninguno de los «scripts» define la función «{S["js"]}»')
                for q in ('fondo', 'mundo', 'pantalla', 'camara'):
                    if q in S: s.e(r, f'una escena «js» no lleva «{q}»')
                continue
            todas = [L for q in ('fondo', 'mundo', 'pantalla') if isinstance(S.get(q), list) for L in S[q] if isinstance(L, dict) and 'usa' in L]
            if s.v != 1:                              # v2: una pieza única en la escena se llama como ella misma
                expl = {L.get('id') for L in todas}
                for L in todas:
                    if 'id' not in L and sum(1 for M in todas if M['usa'] == L['usa']) == 1 and L['usa'] not in expl: s.auto[(k, L['usa'])] = L['usa']
            for ac in S.get('acciones') or []:
                if isinstance(ac, dict) and 'lanzar' in ac: s.lanzados.add((k, ac['lanzar']))
            for q in ('fondo', 'mundo', 'pantalla'):
                if q in S and not isinstance(S[q], list): s.e(f'{r}.{q}', 'debe ser una lista de capas'); continue
                for i, L in enumerate(S.get(q) or []): s.capa(L, f'{r}.{q}[{i}]', k)
            if 'acciones' in S and not isinstance(S['acciones'], list): s.e(r + '.acciones', 'debe ser una lista')
            else:
                for i, ac in enumerate(S.get('acciones') or []): s.accion(ac, f'{r}.acciones[{i}]', k)
            if 'camara' in S: s.camara(S['camara'], r + '.camara', k)
        s.acciones_fin()
        for k, ref, ruta in s.refs:
            i, p = ref.split('.')
            if (k, i) not in s.ids: s.e(ruta, f'no hay ninguna capa con id «{i}» en esta escena')
            elif p not in s.ids[(k, i)]: s.e(ruta, f'la capa «{i}» no tiene la propiedad «{p}» (tiene: {", ".join(sorted(s.ids[(k, i)]))})')


def main():
    if len(sys.argv) < 2: print(__doc__); sys.exit(2)
    D = os.path.abspath(sys.argv[1]); solo = '--validar' in sys.argv
    try: V = json.load(open(os.path.join(D, 'video.json'), encoding='utf-8'))
    except Exception as x: print('ERROR al leer video.json:', x); sys.exit(1)
    # ---- registro de piezas: automático (lee los .js del video) + piezas.json ----
    BIB = os.path.join(AQUI, 'biblioteca.js'); v2 = isinstance(V, dict) and V.get('esquema') != 1
    rec = [os.path.join(RAIZ, p) for p in (V.get('recursos') or []) if isinstance(p, str) and os.path.isfile(os.path.join(RAIZ, p))] if isinstance(V, dict) else []
    REG, avisos, faltan = registro.construir([os.path.join(ENG, 'core.js')] + rec + ([BIB] if v2 else []))
    for a in avisos: print('  aviso:', a)
    # ---- tiempos: palabras de la narración -> segundos (eng/words.py, el mismo que usa ev.py) ----
    os.chdir(D); sys.path.insert(0, ENG); import words
    crudo, RAW = {}, {}
    # v2: "@palabra" sin declarar = primera vez que la narración dice esa palabra; «golpes» = fuerza del golpe en ese momento
    decl = V.get('eventos') if isinstance(V.get('eventos'), dict) else {}
    autos, gol = {}, (V.get('golpes') if v2 and isinstance(V.get('golpes'), dict) else {})
    def andar(o):
        if isinstance(o, dict): [andar(x) for x in o.values()]
        elif isinstance(o, list): [andar(x) for x in o]
        elif isinstance(o, str):
            m = RE_T.match(o)
            if m and v2 and words.W and m.group(1) not in decl and m.group(1) != 'escena' and not re.match(r'^tr\d+$', m.group(1)):
                try: autos.setdefault(m.group(1), words.wt(m.group(1)))
                except ValueError: pass
    andar(V.get('escenas')); andar(['@' + n for n in gol])
    val = Val(V, REG, D, faltan, autos); val.todo()
    for n, ev in (V.get('eventos') or {}).items() if isinstance(V.get('eventos'), dict) else []:
        if not isinstance(ev, dict): continue
        try:
            if 'palabra' in ev:
                if not words.W: val.e(f'eventos.{n}', 'usa «palabra» pero la carpeta no tiene script.txt y st.txt (tiempos de la voz)'); continue
                t = words.wt(ev['palabra'], after=ev.get('despues', 0.0), n=ev.get('n', 1), end=bool(ev.get('fin'))) + ev.get('mas', 0)
            elif 't' in ev: t = ev['t']
            else: continue
            crudo[n] = t; RAW[n] = (t, ev.get('golpe', 0))
        except ValueError as x: val.e(f'eventos.{n}', str(x))
    for n, f in gol.items():                      # golpes primero (mismo orden que se escriben), luego el resto de palabras
        if n in autos and isinstance(f, (int, float)): crudo[n] = autos[n]; RAW[n] = (autos[n], f)
        elif n in RAW and isinstance(f, (int, float)): RAW[n] = (RAW[n][0], f)
    for n, t in autos.items():
        if n not in crudo: crudo[n] = t; RAW[n] = (t, 0)
    dur = V.get('duracion') if isinstance(V.get('duracion'), (int, float)) else 0
    def seg(v):
        if isinstance(v, (int, float)): return v
        m = RE_T.match(v) if isinstance(v, str) else None
        return crudo[m.group(1)] + float(m.group(2) or 0) if m and m.group(1) in crudo else None
    T = [0]
    for k, S in enumerate(V.get('escenas') or []):
        if k == 0 or not isinstance(S, dict): continue
        t = seg(S.get('inicio'))
        if t is None: continue
        if t <= T[-1]: val.e(f'escenas[{k}].inicio', f'({t:.2f} s) debe ser posterior al inicio de la escena anterior ({T[-1]:.2f} s)')
        if t >= dur: val.e(f'escenas[{k}].inicio', f'({t:.2f} s) queda fuera de la duración ({dur} s)')
        T.append(t)
    for n, t in crudo.items():
        if not (0 <= t <= dur): val.e(f'eventos.{n}', f'ocurre en {t:.2f} s, fuera del video (0–{dur} s)')
    val.err = list(dict.fromkeys(val.err))
    if val.err:
        print(f'video.json NO válido: {len(val.err)} error(es)'); [print('  ✗', x) for x in val.err]; sys.exit(1)
    if solo: print('video.json válido'); return
    # ---- generar ----
    TRS = [None] + [S.get('transicion') for S in V['escenas'][1:]]
    words.build(T + [dur], RAW, TRS, dur)                                   # data.js + ev.json (cuadra tiempos a 1/30 s)
    js = ['data.js', os.path.relpath(os.path.join(ENG, 'core.js'), D)]
    for i, p in enumerate(V.get('recursos') or []):
        nom = ('assets.js' if i == 0 else f'recurso{i}_' + os.path.basename(p)); shutil.copyfile(os.path.join(RAIZ, p), nom); js.append(nom)
    if v2: shutil.copyfile(BIB, 'biblioteca.js'); js.append('biblioteca.js')
    js += list(V.get('scripts') or [])
    REG = {n: {k: v for k, v in e.items() if k not in ('archivo', 'auto', 'req', 'pasa_o')} for n, e in REG.items()}
    shutil.copyfile(os.path.join(AQUI, 'interp.js'), 'interp.js'); js += ['interp.js', 'video.js']
    open('video.js', 'w', encoding='utf-8').write('// GENERADO por catalogo/declarativo/compilar.py — no editar; edita video.json\nvar VIDEO=%s,REGISTRO=%s;\n' % (
        json.dumps(V, ensure_ascii=False, separators=(',', ':')), json.dumps(REG, ensure_ascii=False, separators=(',', ':'))))
    open('index.html', 'w', encoding='utf-8').write(
        '<!doctype html><html><head><meta charset="utf-8"><style>html,body{margin:0;background:#000;width:720px;height:1280px;overflow:hidden}canvas{display:block;width:720px;height:1280px}</style></head><body>\n'
        '<canvas id="c" width="720" height="1280"></canvas>\n' + ''.join(f'<script src="{p}"></script>' for p in js) + '\n<script>arrancar(VIDEO,REGISTRO);</script>\n</body></html>\n')
    print(f'compilado: {len(V["escenas"])} escena(s), {len(RAW)} evento(s) -> index.html, data.js, ev.json, video.js')


if __name__ == '__main__': main()
