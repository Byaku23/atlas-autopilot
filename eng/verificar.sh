#!/bin/bash
# verificar.sh VIDEO.mp4 DUR  : comprobaciones objetivas sin IA (resolución, fps, duración, audio, tamaño, volumen).
f=$1; dur=$2; ok=1
r=$(ffprobe -v error -select_streams v:0 -show_entries stream=width,height,r_frame_rate,codec_name -of csv=p=0 "$f")
[ "$r" = "h264,720,1280,30/1" ] || { echo "FALLA formato: $r (esperado h264,720,1280,30/1)"; ok=0; }
a=$(ffprobe -v error -select_streams a:0 -show_entries stream=codec_name -of csv=p=0 "$f"); [ -n "$a" ] || { echo "FALLA: sin audio"; ok=0; }
d=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$f")
python3 -c "import sys; sys.exit(0 if abs($d-$dur)<0.15 else 1)" || { echo "FALLA duración $d (esperada $dur)"; ok=0; }
s=$(stat -c %s "$f"); [ "$s" -gt 500000 ] && [ "$s" -lt 100000000 ] || { echo "FALLA tamaño $s"; ok=0; }
v=$(ffmpeg -hide_banner -nostats -i "$f" -af volumedetect -vn -f null - 2>&1 | grep -o "mean_volume: [-0-9.]*" | cut -d' ' -f2)
python3 -c "import sys; sys.exit(0 if -30<float('${v:--99}')<-8 else 1)" || { echo "FALLA volumen medio $v dB"; ok=0; }
[ $ok = 1 ] && echo "VERIFICADO ok ($r, ${d}s, ${s}B, ${v}dB)" || exit 1
