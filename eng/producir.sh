#!/bin/bash
# producir.sh CARPETA NOMBRE [--rapido] [--forzar]
# Ejecuta las etapas audio -> mezcla -> render -> verificación SIN IA, saltando las que la caché (eng/cache.py)
# dice que siguen vigentes. Necesita voz.mp3 ya hecha (la voz se pide a ElevenLabs solo si `cache.py CARPETA voz` dice HACER).
#   --rapido : solo audio + hoja de 12 cuadros (rev.png) para revisar; no renderiza el video completo.
#   --forzar : ignora la caché (úsalo solo si sospechas de ella).
D=$(cd "$1" && pwd); NAME=$2; ENG=$(cd "$(dirname "$0")" && pwd); RAP=0; FOR=0
for a in "$@"; do [ "$a" = "--rapido" ] && RAP=1; [ "$a" = "--forzar" ] && FOR=1; done
LOG="$D/producir.log"; : > "$LOG"
[ -f "$D/voz.mp3" ] || { echo "FALTA voz.mp3 (haz la etapa de voz)"; exit 3; }
mv=$(python3 "$ENG/cache.py" "$D" voz); case "$mv" in *"cambió"*) echo "VOZ DESACTUALIZADA ($mv): el texto/voz/modelo cambió; regenera la voz (ElevenLabs) o revierte el cambio"; exit 4;; esac
[ -f "$D/ev.json" ] || { echo "FALTA ev.json (ejecuta ev.py)"; exit 3; }
DUR=$(python3 -c "
import subprocess,math
d=float(subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0','$D/voz.mp3']))
print(round((d+1.2)*30)/30)")
echo "DUR=$DUR"
etapa(){ n=$1; shift
  if [ $FOR = 0 ] && m=$(python3 "$ENG/cache.py" "$D" $n dur=$DUR nombre=$NAME); then echo "[saltada] $n ($m)"; echo "$n saltada" >> "$LOG"; return 0; fi
  echo "[hacer] $n  ${m:-}"; ( "$@" ) || { echo "FALLÓ $n"; echo "$n FALLÓ" >> "$LOG"; exit 1; }
  python3 "$ENG/cache.py" "$D" $n dur=$DUR nombre=$NAME --marcar >/dev/null; echo "$n hecha" >> "$LOG"; }
etapa audio  bash -c "cd '$D' && python3 audio.py"
if [ $RAP = 1 ]; then
  TS=$(python3 -c "d=$DUR; print(' '.join('%.2f'%(d*(i+.5)/12) for i in range(12)))")
  python3 "$ENG/sheet_t.py" "$D/index.html" "$D/rev.png" $TS && echo "RAPIDO ok: revisa $D/rev.png"; exit 0
fi
etapa mezcla bash -c "bash '$ENG/voice.sh' '$D' $DUR && bash '$ENG/mix.sh' '$D' $DUR '$NAME'"
etapa render bash "$ENG/go.sh" "$D" "$NAME" $DUR
bash "$ENG/verificar.sh" "$D/$NAME.mp4" $DUR && echo "PRODUCIDO $NAME ($(grep -c saltada "$LOG") etapas reutilizadas)"
