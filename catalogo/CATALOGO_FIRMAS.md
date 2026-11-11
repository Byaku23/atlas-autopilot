# Catálogo con firmas (generado por catalogo/generar.py — no editar a mano)

Cómo leerlo: `nombre(argumentos) {opciones o.xxx}` · video y línea donde está · veces usada en sus escenas.
Para usar una pieza: copia SOLO esa función del `assets.js` indicado (lee desde la línea indicada, ~10-30 líneas). Convención común: `x,y` = posición, `s` = escala, `o` = opciones (flip, col, rim, ph, t, rot).


## Personajes y animales
- `babyFace(x,y,s,o={}) {cry,grow,rim,t}` · v02_gatos:65 · usos 2 — bebé (cara plana)
- `bastet(x,y,s,t=0,o={}) {eye}` · v02_gatos:114 · usos 1 — Bastet (perfil, mira a la derecha; centro de la cabeza en 0,0)
- `bear(x,y,s,o={}) {arms,fill,flip,glow,ph,rim,shell}` · 2026-11-10_animales_guerra:26 · usos 5 — oso de pie. o: ph (paso), shell (0/1), flip, fill, rim, hold (agacha el torso)
- `beast(x,y,s,m,o={}) {arm,col,eye,flip,head,ph,rim,rot,t,wag}` · v01_perros:12 · usos 11 — o: {ph, wag, t, col, rim, eye, flip, al, head(bajar cabeza)}
- `cartoonDog(x,y,s,o={}) {look,t,wag}` · v01_perros:80 · usos 1 — perro moderno sentado, cabeza que gira (o.look -1..1) y cola
- `catHead(x,y,s,o={}) {blink,col,eye,eyeS,halo,look,rim,rot,squint}` · v02_gatos:11 · usos 4 — cara de gato (frontal)
- `catSide(x,y,s,o={}) {ba,col,eye,fa,flip,head,open,ph,pose,rim,rot,rw,sq,stripes,t,tail}` · v02_gatos:27 · usos 7 — o: pose 'walk'|'sit', ph (fase de patas), fa/ba (ángulos fijos de patas delanteras/traseras), tail (ondeo), eye, rim, col, stripes, flip, head (cabeceo), sq (entrecerrar), open
- `chimp(x,y,s,o={}) {look}` · v01_perros:88 · usos 1
- `cub(x,y,s,o={}) {fill,flip,rim,sq,w}` · 2026-11-10_animales_guerra:44 · usos 1 — osezno (cría). o: sq (aplastar), flip
- `dog(x,y,s,o={}) {coat,fill,flip,head,jaw,ph,rim,sit,t,tail}` · 2026-11-10_animales_guerra:80 · usos 2 — perro robusto tipo Stubby. o: ph (carrera), head (rad, levantar hocico), jaw (0..1), sit, flip, coat, tail, bite
- `elephant(x,y,s,o={}) {fill,flip,ph,rim,tusk}` · 2026-11-10_animales_guerra:50 · usos 2 — elefante. o: ph (paso), fill, rim, flip, tusk
- `human(x,y,s,o={}) {arm,bend,col,flip,rim}` · v01_perros:20 · usos 5 — humano agachado (de perfil, mira a la derecha). o.arm: ángulo del brazo; o.col; o.rim
- `mouse(x,y,s,o={}) {col,flip,ph}` · v02_gatos:58 · usos 2
- `person(x,y,s,o={}) {arm,bend,bow,flip,hair,shirt,shrug,smile}` · v02_gatos:73 · usos 5 — o: arm (ángulo brazo), arm2, bow (inclinación), shrug (0..1), flip, shirt, hair, smile, ear, hold
- `pigeon(x,y,s,o={}) {cap,chest,fill,fl,flap,flip,hurt,legA,noLegs,rim,stand,t,tilt}` · 2026-11-10_animales_guerra:60 · usos 2 — paloma. o: fl (fase de aleteo), flap (amplitud), tilt, flip, fill, rim, stand
- `soldier(x,y,s,o={}) {arms,crate,fill,flip,lieY,mask,ph,rifle,rim,rot}` · 2026-11-10_animales_guerra:98 · usos 8 — soldado genérico (sin cara, casco redondo). o: ph, rot (tumbado), lieY, mask, arms ('down'|'up'|'carry'), crate, flip, fill, rim, rifle
- `spy(x,y,s,o={}) {flip,lean,ph,tail}` · 2026-11-10_animales_guerra:112 · usos 1 — espía de abrigo y sombrero (sin cara). o: ph, lean, tail (estiramiento del faldón), flip

## Esqueletos
- `bone(x,y,s,r,col='#e9e2cf')` · v01_perros:40 · usos 3
- `catSkel(x,y,s,rv,t=0)` · v02_gatos:108 · usos 1
- `dogSkel(x,y,s,rv,c='#efe6cf')` · v01_perros:68 · usos 1 — esqueletos (excavación)
- `fishBone(x,y,s,c='#f6d38a')` · v01_perros:77 · usos 1
- `humSkel(x,y,s,rv,c='#efe6cf')` · v01_perros:75 · usos 1
- `humSkel(x,y,s,rv,t=0)` · v02_gatos:101 · usos 1 — esqueletos (tumba)

## Fondos y ambiente
- `barn(x,y,s)` · v02_gatos:148 · usos 1
- `frost(t,p)` · v01_perros:63 · usos 1 — escarcha que invade los bordes
- `halftone(a=.05,col=CR)` · 2026-11-10_animales_guerra:18 · usos 3
- `hills(y,col,amp=18,f=.012,ph=0,x0=-400,x1=1500)` · v01_perros:38 · usos 7
- `nightSky(t,c1=SL1)` · 2026-11-10_animales_guerra:19 · usos 4
- `peak(x,y,w,h,q,col,snow=true)` · 2026-11-10_animales_guerra:176 · usos 2 — cordillera (picos nevados) ; q = 0..1 por pico, devuelve nada
- `sky(t,k=1)` · v01_perros:35 · usos 5
- `snowfall(t,n=70,seed=2,a=.8,spd=24)` · v01_perros:39 · usos 6
- `sunburst(x,y,t,n,len,col,a,spin=.05)` · 2026-11-10_animales_guerra:20 · usos 5
- `wheatRow(y,t,col,h=26,x0=-120,x1=620,sp=11,ph=0)` · v02_gatos:147 · usos 3 — sacos, trigo, granero

## Efectos
- `boomShape(x,y,r,u,seed=1)` · 2026-11-10_animales_guerra:22 · usos 3 — explosión plana de cartel: estrella ocre con núcleo rojo y crema (u = progreso 0..1)
- `fillRim(col,rim,lw=2,blur=10)` · v02_gatos:7 · usos 16 — rellena y dibuja el borde de neón (el path ya está construido)
- `fire(x,y,s,t,seed=1,al=1)` · v01_perros:28 · usos 4
- `fireLight(x,y,r,t,a=1)` · v01_perros:33 · usos 4
- `floatHearts(x,y,t,ts,n=10,spd=90,life=1.2,col=PINK,sz=9,spread=1)` · v02_gatos:90 · usos 9
- `gasCloud(x,y,t,r,a=1)` · 2026-11-10_animales_guerra:174 · usos 1 — nubes de gas
- `nglow(col,lw,blur=12)` · v02_gatos:5 · usos 19
- `sparksUp(x,y,t,n=14,seed=1)` · v01_perros:34 · usos 3
- `waveArcs(x,y,t,ts,col,n=3,gap=.12,R0=60,dir=0,spread=.9,lw=3)` · v02_gatos:89 · usos 4
- `waves(x,y,t,ts,col,n=3,gap=.14,R0=70,dir=0,spread=.8,lw=3)` · 2026-11-10_animales_guerra:192 · usos 2 — aro de olor / sonido
- `waves(y0,t,col,amp=4,x0=-40,x1=400,fr=.05,ph=0)` · 2026-11-10_generales_olvidados:52 · usos 6
- `zzz(x,y,t,k=0)` · 2026-11-10_animales_guerra:193 · usos 1

## Mapas y marcadores
- `drawMap(ox,oy,s,a=1)` · v01_perros:60 · usos 1
- `mapLand(a=1)` · v02_gatos:142 · usos 1
- `pin(x,y,t,ts,col,lbl)` · v01_perros:61 · usos 4
- `pin(x,y,t,ts,col,sz=1)` · 2026-11-10_animales_guerra:179 · usos 2
- `pinDrop(x,y,t,ts,col,lbl,tg)` · v02_gatos:145 · usos 1

## Iconos y objetos
- `akita(x,y,s,o={}) {al,col,eye,flip,head,rim,shade,tail}` · 2026-11-11_hachiko:7 · usos 11 — akita sentado mirando a la derecha. (0,0)=suelo. o: col, rim, tail(ángulo cola), head(inclinación), flip, al, eye
- `akitaLie(x,y,s,o={}) {col}` · 2026-11-11_hachiko:25 · usos 1 — akita echado (cabeza sobre las patas)
- `bar(x,y,w,h,col,r=6)` · 2026-11-10_generales_olvidados:55 · usos 1
- `beastPts(m,ph=0,wag=0,t=0)` · v01_perros:7 · usos 1
- `bez(p0,p1,p2,p3,n=10)` · 2026-11-10_animales_guerra:17 · usos 1
- `bigHat(x,y,s,col,rim,kind)` · 2026-11-10_generales_olvidados:28 · usos 3 — sombrero grande de silueta (bicornio) para el gancho
- `bowl(x,y,s,fill,t=0)` · v02_gatos:85 · usos 2
- `brain(x,y,s,t,lit,o={}) {rim}` · v02_gatos:94 · usos 1
- `brainPath()` · v02_gatos:93 · usos 2
- `cage(x,y,door)` · 2026-11-10_animales_guerra:158 · usos 1 — jaula: o.door ángulo de la puerta (0 cerrada)
- `calCard(x,y,w,h,top,big,sub,t,col=VERM)` · 2026-11-11_hachiko:62 · usos 3
- `cannon(x,y,s,o={}) {rec,rot}` · 2026-11-10_animales_guerra:125 · usos 1 — cañón. o: rec (retroceso 0..1)
- `capsule(x,y,s,rot=0)` · 2026-11-10_animales_guerra:78 · usos 1 — cápsula del mensaje (colgando de la pata): (x,y) = extremo superior
- `chevrons(x,y,s,rot=0)` · 2026-11-10_animales_guerra:187 · usos 1
- `city(x,y,s,c)` · v01_perros:50 · usos 1
- `clockIcon(x,y,s,q)` · 2026-11-10_animales_guerra:189 · usos 1 — reloj: ang (0..1 vueltas)
- `crate(x,y,s,rot=0)` · 2026-11-10_animales_guerra:122 · usos 10
- `crowd(x,y,s,col,ph)` · 2026-11-11_hachiko:39 · usos 2
- `crown(x,y,s,rot=0)` · v02_gatos:9 · usos 2
- `dogTag(x,y,s,r,t,o={})` · v01_perros:90 · usos 1
- `dovecote(x,y,s,sh)` · 2026-11-10_animales_guerra:167 · usos 1 — palomar
- `dusk(k)` · 2026-11-11_hachiko:55 · usos 3 — k 0 = mañana, .5 = tarde, 1 = noche
- `el(cx,cy,rx,ry,rot=0)` · 2026-11-10_animales_guerra:11 · usos 40
- `emblem(x,y,r,rot=0)` · 2026-11-10_animales_guerra:135 · usos 1 — emblema circular: oso con proyectil (crema sobre rojo) — r en unidades de mundo
- `fig(x,y,s,o={}) {arm,col,fall,flip,hat,patch,peg,ph,rifle,rim,stiff}` · 2026-11-10_generales_olvidados:6 · usos 7 — figura genérica sin cara. o: col, rim, hat('bic'|'helm'|'tri'|'crest'|'cap'|'none'), ph (paso), flip, arm (ángulo brazo), rifle, fall (0..1), peg, patch, stiff
- `glyph(k,x,y,s,col)` · v02_gatos:130 · usos 1 — glifos
- `ground(gy,c0='#1b1030',c1='#0d0820')` · 2026-11-11_hachiko:54 · usos 7
- `handPoint(x,y,s,c='#f2b48a')` · v01_perros:79 · usos 2 — mano señalando (estilo plano)
- `heart(x,y,s,col,o={}) {glow,lw,st}` · v02_gatos:8 · usos 12
- `heart(x,y,s,col,a=1)` · 2026-11-11_hachiko:61 · usos 5
- `helix(cx,y0,y1,t,amp=46,col1='#ffb547',col2='#7fd4ff')` · v01_perros:53 · usos 1 — doble hélice de ADN
- `horse(x,y,s,o={}) {col,fall,flip,ph,rider,rim}` · 2026-11-10_generales_olvidados:31 · usos 1
- `inkParts(paths,fill,rim,lw=2.4)` · 2026-11-10_animales_guerra:8 · usos 13 — paths: funciones que construyen un path. Se dibuja primero el borde (rim) de todas y luego el relleno => silueta unida con contorno de luz
- `lamp(x,y,s,t,col='#ffcf7a',a=1)` · 2026-11-11_hachiko:53 · usos 8
- `limb(x0,y0,x1,y1,w0,w1)` · 2026-11-10_animales_guerra:13 · usos 29
- `meat(x,y,s,r)` · v01_perros:41 · usos 2
- `medal(x,y,s,rot=0)` · 2026-11-10_animales_guerra:180 · usos 1
- `medal(x,y,r,n,t0,t,o={}) {fill}` · 2026-11-10_generales_olvidados:54 · usos 1
- `mount(x,y,w,h,col,snow,t=0)` · 2026-11-10_generales_olvidados:53 · usos 3
- `news(x,y,s,r,t,o={})` · 2026-11-11_hachiko:68 · usos 1
- `pawPrint(x,y,s,col,rot=0)` · v02_gatos:84 · usos 1 — varios
- `petals(t,n,col,seed=1,spd=26,a=.9)` · 2026-11-11_hachiko:59 · usos 3
- `pf(pts)` · 2026-11-10_animales_guerra:12 · usos 12
- `posterCard(kind,cx,cy,w,h,lit,t,o={}) {door,rot,sc}` · 2026-11-10_animales_guerra:139 · usos 2 — carta/tarjeta-cartel: (cx,cy) centro en el mundo, w x h. kind: elefante|paloma|perro|oso. lit 0..1
- `prof(x,y,s,o={}) {arm,col,flip,ph,rim}` · 2026-11-11_hachiko:32 · usos 4 — profesor de perfil caminando a la derecha (siluetas oscuras con sombrero)
- `qmark(x,y,s,t,k)` · 2026-11-10_generales_olvidados:56 · usos 1
- `rib(pts,w0,w1)` · 2026-11-10_animales_guerra:16 · usos 1 — cinta con grosor variable a lo largo de una polilínea (trompa, cola...)
- `sack(x,y,s,rot,fill=1)` · v02_gatos:151 · usos 2
- `shell(x,y,s,gl=0)` · 2026-11-10_animales_guerra:38 · usos 4 — proyectil de artillería (centrado, apunta a +x)
- `ship(x,y,s,o={}) {col,flag,flip,k,rim,sail,t}` · 2026-11-10_generales_olvidados:43 · usos 3
- `skyline(gy,col,seed=1,x0=-200,x1=800)` · 2026-11-11_hachiko:58 · usos 8
- `snowf(t,n=80,seed=2,a=.85,spd=26)` · 2026-11-11_hachiko:60 · usos 2
- `STAMP(s,x,y,sz,t,t0,o={})` · 2026-11-10_animales_guerra:5 · usos 12
- `station(cx,gy,t,o={}) {hand,light,roof,wall}` · 2026-11-11_hachiko:41 · usos 3 — estación (fachada con reloj). (cx,0)=centro, suelo en y=gy
- `statueDog(x,y,s,o={}) {col,nodog,pl,sh}` · 2026-11-11_hachiko:67 · usos 3
- `sun(x,y,r,col='#ffe9b0')` · 2026-11-11_hachiko:57 · usos 4
- `tablet(x,y,s,c)` · v01_perros:51 · usos 1
- `TG(s,x,y,sz,b,f,t,t0,o={})` · 2026-11-11_hachiko:5 · usos 14
- `thick(C,w)` · v01_perros:43 · usos 1 — signo de interrogación (contorno grueso) y cabeza de lobo -> morph
- `train(x,gy,col='#d8d2e6')` · 2026-11-11_hachiko:64 · usos 1
- `truck(x,y,s,o={})` · 2026-11-10_animales_guerra:130 · usos 1
- `TX(s,x,y,sz,col,t,t0,o={})` · v02_gatos:4 · usos 77
- `TX(s,x,y,sz,col,t,t0,o={})` · 2026-11-10_animales_guerra:4 · usos 11
- `TX(s,x,y,sz,col,t,t0,o={})` · 2026-11-11_hachiko:4 · usos 18
- `wheat(x,y,s,c)` · v01_perros:49 · usos 1 — iconos de la línea de tiempo
