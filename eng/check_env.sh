#!/bin/bash
# Comprueba que el entorno tiene lo necesario para producir un video.
ok=1
for c in ffmpeg ffprobe python3 git; do command -v $c >/dev/null || { echo "FALTA $c"; ok=0; }; done
python3 -c "import numpy,scipy,cv2,playwright" 2>/dev/null || { echo "Instalando paquetes de Python"; pip install --break-system-packages -q numpy scipy opencv-python-headless playwright || ok=0; }
fc-list | grep -q "Inter Display" || echo "AVISO: no está la fuente Inter Display (los títulos usarán otra)"
[ -d /opt/pw-browsers ] || echo "AVISO: no está Chromium en /opt/pw-browsers"
[ $ok = 1 ] && echo ENTORNO_OK
