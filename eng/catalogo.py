#!/usr/bin/env python3
"""Genera eng/CATALOGO.md: índice de funciones/escenas reutilizables de todos los videos terminados
(para hacer `grep`/leer solo lo necesario en lugar de reescribir o releer assets.js enteros)."""
import re, glob, os
R = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
out = ['# Catálogo de piezas reutilizables (generado por eng/catalogo.py — no editar a mano)\n',
       'Antes de dibujar algo nuevo, busca aquí. Copia la función del video indicado y adáptala.\n']
for f in sorted(glob.glob(R + '/ejemplos/*/assets.js') + glob.glob(R + '/videos/*/assets.js')):
    nom = os.path.relpath(os.path.dirname(f), R); fs = []
    for i, l in enumerate(open(f, encoding='utf-8', errors='ignore'), 1):
        m = re.match(r'\s*(?:function\s+(\w+)|(?:const|let|var)\s+(\w+)\s*=\s*(?:\(|function|async))', l)
        if m: fs.append(f'{m.group(1) or m.group(2)}:{i}')
    out.append(f'\n## {nom}/assets.js ({len(fs)} funciones)\n' + ', '.join(fs))
open(os.path.join(R, 'eng', 'CATALOGO.md'), 'w', encoding='utf-8').write('\n'.join(out) + '\n'); print('ok', len(out) - 2, 'archivos')
