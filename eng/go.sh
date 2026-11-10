# go.sh DIR NAME DUR : render a 30 fps en 2 procesos + mp4 con mezcla.wav
D=$(cd "$1" && pwd); NAME=$2; DUR=$3; N=$(python3 -c "print(int(round($DUR*30)))"); H=$((N/2))
rm -rf "$D/fr" && mkdir -p "$D/fr"
python3 "$(dirname $0)/render.py" 0 $H "$D/fr" "$D/index.html" > "$D/r1.log" 2>&1 &
python3 "$(dirname $0)/render.py" $H $N "$D/fr" "$D/index.html" > "$D/r2.log" 2>&1 &
wait
C=$(ls "$D/fr" | wc -l); if [ "$C" -lt "$N" ]; then echo "FALTAN CUADROS $C/$N"; exit 1; fi
cd "$D" && ffmpeg -y -hide_banner -loglevel error -framerate 30 -i fr/%04d.png -i mezcla.wav -c:v libx264 -preset medium -crf 19 -pix_fmt yuv420p -c:a aac -b:a 192k -movflags +faststart -shortest "$NAME.mp4" && rm -rf fr && echo "VIDEO OK $NAME" && ffprobe -v error -show_entries format=duration -of csv=p=0 "$NAME.mp4"
