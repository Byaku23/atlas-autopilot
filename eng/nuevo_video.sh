#!/bin/bash
# nuevo_video.sh SLUG [BASE]  : crea videos/AAAA-MM-DD_SLUG a partir de un video terminado (por defecto ejemplos/v02_gatos)
# para MODIFICAR en vez de empezar de cero. Copia código (index.html, assets.js, scenes.js, audio.py, ev.py); no copia voz, tiempos ni audio.
R=$(cd "$(dirname "$0")/.." && pwd); B=${2:-ejemplos/v02_gatos}; D="$R/videos/$(date +%F)_$1"
mkdir -p "$D" && for f in index.html assets.js scenes.js data.js audio.py ev.py STORYBOARD.md; do [ -f "$R/$B/$f" ] && cp "$R/$B/$f" "$D/"; done
echo "Creado $D desde $B. Cambia guion/escenas; consulta eng/CATALOGO.md para piezas reutilizables."
