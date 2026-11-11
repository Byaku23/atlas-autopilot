#!/usr/bin/env python3
"""Informe breve tras cada video -> se añade a datos/informes.md y se imprime.
python3 eng/informe.py CARPETA --modelo "sonnet-5-5" --subagentes "haiku x1 (revisión formato)" --regen "ninguna" --consumo "no disponible" --publicado "IG,TT,YT,FB 10-11 10:00"
Las etapas reutilizadas/ejecutadas se leen de CARPETA/producir.log."""
import sys, os, time
R = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
def a(n, d='—'): return sys.argv[sys.argv.index(n) + 1] if n in sys.argv else d
c = os.path.abspath(sys.argv[1]); lg = os.path.join(c, 'producir.log')
et = open(lg).read().split('\n') if os.path.exists(lg) else []
reus = [l.split()[0] for l in et if 'saltada' in l]; hechas = [l.split()[0] for l in et if 'hecha' in l]
t = f"""
## {os.path.basename(c)} — {time.strftime('%F %H:%M')}
1. Modelo principal: {a('--modelo')}
2. Subagentes y modelos: {a('--subagentes','ninguno')}
3. Regeneraciones innecesarias: {a('--regen','ninguna')} (etapas ejecutadas: {', '.join(hechas) or '—'}; reutilizadas por caché: {', '.join(reus) or '—'})
4. Consumo de tokens/créditos: {a('--consumo','no disponible (Claude no puede leer el contador del plan; ver claude.ai > Configuración > Uso)')}
5. Publicaciones: {a('--publicado','—')}
"""
open(os.path.join(R, 'datos', 'informes.md'), 'a', encoding='utf-8').write(t); print(t)
