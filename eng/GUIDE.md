# Guía del motor "Atlas del saber" v2 (shorts de curiosidades)

Raíz: la carpeta del repositorio `atlas-autopilot/` (cada video vive en `videos/<carpeta>/`; los ejemplos en `ejemplos/`).
- `eng/` motor común (NO lo modifiques; si de verdad hace falta algo nuevo, ponlo en tu `assets.js`).
- `ejemplos/v01_perros/` y `ejemplos/v02_gatos/`: videos de REFERENCIA ya terminados. Léelos enteros antes de empezar: `ev.py`, `assets.js`, `scenes.js`, `audio.py`. Copia sus patrones (no su estilo visual).
- `videos/<carpeta>/` tu video: ya tiene `voz.mp3`, `script.txt` (guion) y `st.txt` (inicio de cada palabra en segundos) y `STORYBOARD.md` (dirección creativa: QUÉ debe pasar y CUÁNDO).

## Qué pidió el cliente (obligatorio)
1. **Texto con máscara**: todo texto en pantalla aparece saliendo de detrás de un borde (usa `mtext` y `tag`; nunca texto que solo "aparece").
2. **Animaciones encadenadas**: un elemento empuja/choca/activa a otro y eso provoca la siguiente acción (ej.: la onda del ladrido llega al ciervo y el ciervo huye; la ficha cae y empuja a la anterior). Usa `spring`, `wob` y tiempos encadenados.
3. **Cámara que sigue** a un elemento importante cuando haga falta (`follow`, `camAt`, `world`).
4. **Transformar un elemento en otro** para entrar a la siguiente escena (transición `morph` desde la tarjeta/elemento, `dive` dentro de un objeto, morph de formas con `SH` + `morph()` dentro de la escena).
5. Primer cuadro (t=0) ya impactante (imagen fuerte + título visible: usa `t0` negativo, ej. `mtext(...,t,-.6)`).
6. Mucho movimiento y efectos visuales; cada efecto de sonido EXACTO en el cuadro del evento.
7. Estilo visual distinto al de los otros videos (sigue la paleta del STORYBOARD).
8. Todo en español, con tildes correctas.

## Archivos que debes crear en tu carpeta vXX
- `index.html` → copia de `eng/shell.html` (carga data.js, ../eng/core.js, assets.js, scenes.js).
- `ev.py` → tiempos (ver v01/ev.py). Usa `wt('palabra', after=segundos, n=1)` para obtener el inicio EXACTO de una palabra (ignora tildes/mayúsculas/signos). `T` = inicios de escena (T[0]=0, último = DUR). Pon cada T[k] ≈ inicio de la primera palabra de la frase nueva − 0.05. `RAW = {'nombre': (tiempo, temblor)}` (temblor 0 = sin temblor; 0.3 suave; 1.0 fuerte). `TRS` = lista de transiciones (índice k = transición que ENTRA a la escena k; TRS[0]=None). Al final `build(T,RAW,TRS,DUR)`. Ejecuta `python3 ev.py` → genera `data.js` y `ev.json` (E con los tiempos ya ajustados a cuadro; E['trK'] = T[k]).
- `assets.js` → paleta + dibujos propios del video. Empieza con `CAP.acc='#color';` (color de la palabra activa del subtítulo).
- `scenes.js` → una función por escena `sK(t,u,p,L)` (t = tiempo global, u = tiempo dentro de la escena — puede ser NEGATIVO durante la transición de entrada, p = progreso 0..1). Termina con `boot([s0,s1,...],TRS,{cap:{acc:'#color'}})`.
- `audio.py` → música + efectos (ver v01/audio.py y `eng/sfx.py`).
- DUR = duración de la voz (`ffprobe`) + 1.2 s, redondeado a 1/30 (el STORYBOARD te lo da).

## Lienzo y zonas
- Coordenadas lógicas 360×640 (se dibuja a 2×). Subtítulos automáticos palabra por palabra en y≈566 (zona 530–600 ocupada): **lo importante va entre y=60 y y=515**. Barra de progreso arriba (0–3 px).
- Ningún texto debe salirse de x=12..348. Mide con `tw(texto,tamaño)` si dudas; usa `o.w` en mtext para partir en líneas.
- Las transiciones ocupan los ÚLTIMOS `dur` segundos de la escena anterior (ventana [T[k]-dur, T[k]]): no pongas revelaciones clave en ese tramo. En la ventana se dibujan ambas escenas (la nueva con u<0).

## API de core.js (lo esencial)
Matemática: `cl, lerp, eo (ease-out), ei (ease-in), ez, eio, eb (back/rebote), eel (elástico), win(t,a,b) (0..1), fade2, spring(u,k,d) (0→1 con rebote), wob(u,k,d) (oscilación que se apaga: reacción a un golpe), R(n) (aleatorio determinista)`.
Eventos: `E.nombre` (tiempo), `at(t,'nombre')`, `un(t,'nombre')`.
Colores: `rgba('#hex',a)`, `mixc(a,b,t)`.
Dibujo: `rr(x,y,w,h,r)` (path), `circ(x,y,r,fill,stroke,lw)`, `poly(pts,fill,stroke,lw)`, `line(x0,y0,x1,y1,col,lw)`, `glow(x,y,r,col,a)`, `vgrad(y0,y1,c0,c1)`, `bg(c0,c1)` (fondo que cubre todo aunque mueva la cámara), `tr(x,y,s,rot,fn)`, `withA(a,fn)`, `addLight(fn)`, `txt(s,x,y,tam,col,{wt,f,a,st,sw,sh,al,sc,rot})` (texto simple, para números/etiquetas dentro de objetos).
Fuentes: `DISP` (Inter Display, títulos, peso '900'), `SANS` (Inter), `SERIF` (Lora), `MONO`, `COND`.
Partículas/efectos: `stars(t,n,seed,a)`, `dust(t,n,col,seed,spd,sz,a)`, `embers(...)`, `sparks(x,y,t,ts,n,col,spd,life,g)`, `burst(x,y,t,ts,cols,n,spd,life,sz)`, `shock(x,y,t,ts,col,R0,w,dur)` (anillo), `rays(x,y,t,n,len,col,a,spin,w)`, `streaks(t,n,col,dir,spd,len,a)` (líneas de velocidad), `bolt(x0,y0,x1,y1,seed,col)` (rayo), `smoke(x,y,t,ts,r,'r,g,b',dur)`.
**Texto con máscara**:
- `mtext(s,x,y,tam,col,t,t0,{w, a:'center'|'left'|'right', d:.42 (duración por palabra), stg:.06 (escalonado), out:tiempoSalida, od:.35, dir:1|-1, stroke:'color', sw, sh:'colorSombra', hl:[índices de palabras a resaltar], hc:'color', wt, f})`.
- `tag(s,x,y,tam,colFondo,colTexto,t,t0,{a,out,stroke,r,wt})` → barra que se dibuja y deja ver el texto por máscara.
- `slam(s,x,y,tam,col,t,ts,{st,sw,sh})` → golpe de texto (entra grande y cae). Úsalo solo para impactos.
- Contadores: `countV(v0,v1,t,t0,dur)` + `fmtN(v,dec)` (separador de miles con punto).
**Cámara**:
- `camAt(u,[[u,x,y,zoom,(rot),(ease)],...])` → {x,y,z,r}; `world(c,()=>{...})` dibuja en coordenadas del mundo; `toScreen(c,x,y)` → posición en pantalla (para poner etiquetas sobre objetos que se mueven).
- `follow(tt=>[x,y],t,lag)` → posición suavizada de un objeto (la cámara lo persigue con retraso). Patrón: `const f=follow(pos,t,.3); c={x:f[0],y:f[1],z:1.4,r:0}`.
**Formas y morph**: `SH.circle(cx,cy,r,n)`, `SH.ellipse`, `SH.star(cx,cy,r1,r2,k,n)`, `SH.heart(cx,cy,s,n)`, `SH.rrect(x,y,w,h,r,n)`, `SH.poly(puntos,n)` (re-muestrea cualquier polígono). `morph(A,B,p)` mezcla dos formas con el mismo n. `wobble(pts,t,amp)` borde orgánico. Truco: si el morph directo se ve feo, pasa por un círculo intermedio (v01 escena 3).
**Transiciones** (en TRS, ver `composite` en core.js): `{'type':'morph','a':[x,y,w,h,r],'col':'#hex','dur':.6}` (una tarjeta del plano A crece y se convierte en el plano B; `a` = rectángulo EN PANTALLA del elemento al inicio de la transición), `{'type':'dive','x':..,'y':..,'z':8}` (la cámara entra en un punto de A; pon el elemento en ese punto de pantalla), `{'type':'push','dir':'left'|'up'|'right'|'down'}` (B empuja a A), `{'type':'ink','x','y','col'}`, `{'type':'iris','x','y','col'}`, `spin`, `whip`, `flash`, `glitch`, `slide`, `blinds`, `zoom`, `static`, `dip`, `fog`. Varía: en un video usa al menos 5 tipos distintos y al menos 2 `morph` y 1 `dive`.
**Golpes**: el temblor y el destello salen solos de los eventos con temblor>0 en RAW.

## Lecciones del video 01 (evita estos errores)
- Siluetas con color de luminancia parecida al fondo se ven "transparentes". Usa contraste fuerte (silueta casi negra sobre fondo medio, o color vivo sobre fondo oscuro) y un borde de luz (rim).
- Si la cámara se aleja o se mueve lejos, el fondo debe cubrirlo: usa `bg()` (no `vgrad` con anchos cortos dentro de world).
- Calcula bien la posición en pantalla de los elementos para `dive` y `morph` (usa `toScreen`).
- No pongas dos títulos en el mismo sitio a la vez: usa `out` para sacar el anterior antes de que entre el siguiente.
- Los tiempos salen de las palabras (`wt`), nunca a ojo.

## Revisión visual (obligatoria, al menos 2 rondas)
`python3 ../eng/sheet_t.py $PWD/index.html $PWD/shN.png t1 t2 ... t12` (máx. 12 tiempos por hoja) y luego mira la imagen con la herramienta Read. Si la salida muestra `ERR ...` hay un error de JavaScript: corrígelo. Revisa: primer cuadro impactante, cada evento clave (+0.25 s), mitad de cada transición, textos cortados o encimados, cosas tapadas por subtítulos, contraste, que la cámara siga lo que importa.

## Audio
```
import sys,json; sys.path.insert(0,'../eng')
from sfx import *
J=json.load(open('ev.json')); E=J['E']; T=J['T']; DUR=J['DUR']; TRS=J['TRS']
init(DUR,E); setMusic(bpm, PROG)   # PROG = [('Am',45,[57,60,64,69]), ...]
trSfx(TRS,E)                       # sonidos automáticos de transiciones
Pn(efecto,'evento',ganancia)        # suena EXACTO en el cuadro del evento
Pe(efecto,'evento',dur,ganancia)    # termina en el evento (risers, suck)
P(efecto,tiempo,ganancia)
... capas de música: layer_pad, layer_drone, layer_arp, layer_ost, layer_bass, bells, melody, layer_drums(t0,t1,g,'pop'|'trap'|'light'|'march'|'tribal'|'hats'), swell, duck(a,b,profundidad)
save()   # escribe musica.wav y sfx.wav
```
Efectos disponibles en `eng/sfx.py` (léelo): boom, stamp, impact, whoosh, swish, riser, suck, downsweep, ping, pop, click, tick, cntTick, ding, notif, chime, bell, gong, sparkle, boing, shatter, scratch, hiss, steam, wind, rain, waves, crackle, heart, thunder, coin, cashreg, clang, knock, clunk, step, paper, shutter, typew, drip, bubble, glitch, zap, arc, hum, buzz, modem, radioTune, beep, howl, bark, growl, meow, purr, babycry, whistle, crowd, cheer, kickball, batcrack, glovepop, flameOn, rumble, creak, engine, sub, tada, fanfare, brassSting, stinger, counter(t0,t1).
Luego:
```
python3 audio.py
bash ../eng/voice.sh $PWD DUR
bash ../eng/mix.sh $PWD DUR NOMBRE      # NOMBRE lo da el STORYBOARD
python3 ../eng/onset.py . ev1 ev2 ...   # 8-10 eventos clave: todos deben decir OK
```
Música: cambia de capa/ritmo en cada escena según el tono, sube en los clímax y usa `duck()` para silencios dramáticos. Varios efectos por evento (capas) suenan más ricos.

## NO hagas
- No ejecutes `eng/go.sh` (el render final lo lanzo yo, uno por uno, porque solo hay 2 CPU).
- No modifiques `eng/` ni otras carpetas vXX.
- No dibujes logos, marcas, escudos oficiales ni caras reconocibles de personas reales (usa siluetas genéricas, números de camiseta, iconos).

## Entrega (tu respuesta final)
Breve: escenas y transiciones usadas, eventos verificados con onset.py, rutas de tus 2–3 últimas hojas de contacto, y cualquier duda o dato que no pudiste representar.
