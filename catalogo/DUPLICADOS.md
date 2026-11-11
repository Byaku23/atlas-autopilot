# Duplicados y piezas casi iguales (generado por catalogo/generar.py)

## Mismo nombre en varios videos (chocan si se mezclan en un mismo assets.js)
- `TX`: v02_gatos:4 (s,x,y,sz,col,t,t0,o={}); 2026-11-10_animales_guerra:4 (s,x,y,sz,col,t,t0,o={}); 2026-11-11_hachiko:4 (s,x,y,sz,col,t,t0,o={}) — misma firma
- `heart`: v02_gatos:8 (x,y,s,col,o={}); 2026-11-11_hachiko:61 (x,y,s,col,a=1) — FIRMAS DISTINTAS
- `humSkel`: v01_perros:75 (x,y,s,rv,c='#efe6cf'); v02_gatos:101 (x,y,s,rv,t=0) — FIRMAS DISTINTAS
- `medal`: 2026-11-10_animales_guerra:180 (x,y,s,rot=0); 2026-11-10_generales_olvidados:54 (x,y,r,n,t0,t,o={}) — FIRMAS DISTINTAS
- `pin`: v01_perros:61 (x,y,t,ts,col,lbl); 2026-11-10_animales_guerra:179 (x,y,t,ts,col,sz=1) — FIRMAS DISTINTAS
- `waves`: 2026-11-10_animales_guerra:192 (x,y,t,ts,col,n=3,gap=.14,R0=70,dir=0,spread=.8,lw=3); 2026-11-10_generales_olvidados:52 (y0,t,col,amp=4,x0=-40,x1=400,fr=.05,ph=0) — FIRMAS DISTINTAS

## Piezas distintas que hacen casi lo mismo (candidatas a unificar)
- `pin(x,y,t,ts,col,lbl)` v01_perros:61 / `pinDrop(x,y,t,ts,col,lbl,tg)` v02_gatos:145
- `waves(x,y,t,ts,col,n=3,gap=.14,R0=70,dir=0,spread=.8,lw=3)` 2026-11-10_animales_guerra:192 / `waveArcs(x,y,t,ts,col,n=3,gap=.12,R0=60,dir=0,spread=.9,lw=3)` v02_gatos:89
- `wheat(x,y,s,c)` v01_perros:49 / `wheatRow(y,t,col,h=26,x0=-120,x1=620,sp=11,ph=0)` v02_gatos:147
- `sky(t,k=1)` v01_perros:35 / `nightSky(t,c1=SL1)` 2026-11-10_animales_guerra:19
- `drawMap(ox,oy,s,a=1)` v01_perros:60 / `mapLand(a=1)` v02_gatos:142
- `humSkel(x,y,s,rv,c='#efe6cf')` v01_perros:75 / `dogSkel(x,y,s,rv,c='#efe6cf')` v01_perros:68 / `catSkel(x,y,s,rv,t=0)` v02_gatos:108
- `dog(x,y,s,o={})` 2026-11-10_animales_guerra:80 / `cartoonDog(x,y,s,o={})` v01_perros:80 / `beast(x,y,s,m,o={})` v01_perros:12
- `TX(s,x,y,sz,col,t,t0,o={})` v02_gatos:4 / `STAMP(s,x,y,sz,t,t0,o={})` 2026-11-10_animales_guerra:5

## Piezas sin ningún uso en su propio video (escenas ni otras piezas): revisar si sobran
ninguna
