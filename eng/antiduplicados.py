#!/usr/bin/env python3
"""Protección contra publicaciones duplicadas (parte local; la parte de Metricool la hace Claude con getScheduledPosts).

  python3 eng/antiduplicados.py revisar  CARPETA --titulo "..."   -> LIBRE (0) / DUPLICADO (11)
  python3 eng/antiduplicados.py reservar CARPETA --titulo "..."   -> revisa + escribe la reserva en datos/publicados.json
                                                                    y la sube a git (la otra sesión la verá). Hacerlo ANTES de createScheduledPost.
  python3 eng/antiduplicados.py confirmar CARPETA --planner URL --fecha ISO   -> estado "programado"
  python3 eng/antiduplicados.py liberar  CARPETA                  -> borra la reserva si createScheduledPost falló
Añade --sin-git para no tocar git (pruebas). Compara: carpeta/slug, título parecido (>=80%), huella del MP4 y tema de datos/temas.json.
"""
import sys, os, json, glob, hashlib, difflib, subprocess, unicodedata, time, re
REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LED = os.path.join(REPO, 'datos', 'publicados.json')

def norm(s):
    s = unicodedata.normalize('NFD', s.lower()); s = ''.join(c for c in s if unicodedata.category(c) != 'Mn')
    return ' '.join(re.sub(r'[^a-z0-9 ]', ' ', s).split())

def sha(p):
    m = hashlib.sha256()
    with open(p, 'rb') as f:
        for b in iter(lambda: f.read(1 << 20), b''): m.update(b)
    return m.hexdigest()

def cargar():
    try: return json.load(open(LED, encoding='utf-8'))
    except Exception: return {'entradas': []}

def guardar(d): json.dump(d, open(LED, 'w', encoding='utf-8'), indent=1, ensure_ascii=False)

def git(*a): return subprocess.run(['git', '-C', REPO, '-c', 'user.name=Atlas Autopilot', '-c', 'user.email=noreply@anthropic.com', *a],
                                   capture_output=True, text=True)

def revisar(carpeta, titulo):
    slug = os.path.basename(os.path.abspath(carpeta)); motivos = []
    mp4 = glob.glob(os.path.join(carpeta, '*.mp4')); h = sha(mp4[0]) if mp4 else None
    temas = []
    try: temas = [t['tema'] for t in json.load(open(os.path.join(REPO, 'datos', 'temas.json'), encoding='utf-8'))['publicados']]
    except Exception: pass
    for e in cargar()['entradas']:
        if e['slug'] == slug: motivos.append(f"misma carpeta ya {e['estado']} ({e.get('plannerUrl','sin enlace')})")
        elif h and e.get('mp4_sha256') == h: motivos.append(f"mismo MP4 ya {e['estado']} ({e['slug']})")
        elif titulo and difflib.SequenceMatcher(None, norm(titulo), norm(e['titulo'])).ratio() >= .8:
            motivos.append(f"título casi igual a '{e['titulo']}' ({e['estado']})")
    for t in temas:
        if titulo and difflib.SequenceMatcher(None, norm(titulo), norm(t)).ratio() >= .8:
            motivos.append(f"tema ya publicado: '{t}'"); break
    return slug, h, sorted(set(motivos))

def arg(n):
    return sys.argv[sys.argv.index(n) + 1] if n in sys.argv else None

def main():
    if len(sys.argv) < 3: print(__doc__); sys.exit(2)
    cmd, carpeta = sys.argv[1], sys.argv[2]; titulo = arg('--titulo') or ''; sg = '--sin-git' in sys.argv
    if cmd in ('revisar', 'reservar'):
        if cmd == 'reservar' and not sg: git('pull', '--rebase', '-q')
        slug, h, mot = revisar(carpeta, titulo)
        if mot: print('DUPLICADO: ' + ' | '.join(mot)); sys.exit(11)
        if cmd == 'revisar': print('LIBRE'); return
        d = cargar(); d['entradas'].append({'slug': slug, 'titulo': titulo, 'mp4_sha256': h, 'estado': 'reservado', 'ts': time.strftime('%F %T')}); guardar(d)
        if not sg:
            git('add', LED); git('commit', '-q', '-m', f'Reserva de publicación: {slug}')
            r = git('push', '-q', 'origin', 'HEAD')
            if r.returncode:  # otra sesión subió antes: volver a mirar
                git('reset', '--hard', 'HEAD~1'); git('pull', '--rebase', '-q')
                _, _, mot = revisar(carpeta, titulo)
                print('DUPLICADO (reserva ocupada por otra sesión): ' + ' | '.join(mot) if mot else 'ERROR_PUSH: reintenta'); sys.exit(11 if mot else 12)
        print('RESERVADO ' + slug); return
    d = cargar(); slug = os.path.basename(os.path.abspath(carpeta)); es = [e for e in d['entradas'] if e['slug'] == slug]
    if cmd == 'confirmar':
        if not es: print('no hay reserva'); sys.exit(2)
        es[-1].update({'estado': 'programado', 'plannerUrl': arg('--planner'), 'fecha_programada': arg('--fecha')})
    elif cmd == 'liberar':
        d['entradas'] = [e for e in d['entradas'] if not (e['slug'] == slug and e['estado'] == 'reservado')]
    else: print(__doc__); sys.exit(2)
    guardar(d)
    if not sg:
        git('add', LED); git('commit', '-q', '-m', f'{cmd}: {slug}'); git('push', '-q', 'origin', 'HEAD')
    print('ok ' + cmd)
main()
