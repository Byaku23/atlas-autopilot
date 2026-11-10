# voice.sh DIR DUR : voz.mp3 -> voz_final.wav (limpieza, sin cortes)
cd "$1" && ffmpeg -y -hide_banner -loglevel error -i voz.mp3 -af "highpass=f=80,acompressor=threshold=-23dB:ratio=2.5:attack=5:release=80,loudnorm=I=-15:TP=-1.5:LRA=7,aresample=44100,apad=whole_dur=$2" -t $2 -ac 1 voz_final.wav && echo voz ok
