#!/bin/bash
# render con Node (sin python playwright): bash render.sh NOMBRE
cd "$(dirname "$0")"; N=1960; rm -rf fr; mkdir fr
node ../../catalogo/mapa/render_nodo.js index.html fr 0 653 30 > r1.log 2>&1 &
node ../../catalogo/mapa/render_nodo.js index.html fr 653 1307 30 > r2.log 2>&1 &
node ../../catalogo/mapa/render_nodo.js index.html fr 1307 $N 30 > r3.log 2>&1 &
wait; ls fr | wc -l
ffmpeg -y -hide_banner -loglevel error -framerate 30 -i fr/%04d.png -i mezcla.wav -c:v libx264 -preset medium -crf 19 -pix_fmt yuv420p -c:a aac -b:a 192k -movflags +faststart -shortest "$1.mp4" && rm -rf fr && ffprobe -v error -show_entries format=duration -of csv=p=0 "$1.mp4"
