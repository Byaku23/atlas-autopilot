# Pruebas de la arquitectura declarativa
Etapa 1 (esquema v1):
- `original/`: escena 0 de los perros con el flujo actual (ev.py + scenes.js), 7,5 s, tiempos de la voz real.
- `escena0/video.json`: la misma escena como datos de bajo nivel. 225 de 225 cuadros idénticos (también con el intérprete v2).
- `mixta/`, `combinada/`: escena declarativa + escena JS; movimientos simultáneos.

Etapa 2 (esquema v2: acciones, anclas, biblioteca, registro automático):
- `escena0_v2/`: escena 0 fiel. 1.632 caracteres (escena) / 1.907 (archivo). Idéntica a `original/index_ojo.html` (original con la cámara al ojo real); 44 cuadros distintos del original por ese motivo.
- `escena0_v2_defecto/`: igual pero dejando los valores por defecto de la biblioteca. 1.400 / 1.675.
- `escena9/`: escena 9 de los perros (no usada para diseñar la biblioteca). 1.512 caracteres frente a 1.209 del JS.
- `reuso_gatos/`, `reuso_perros/`: las mismas acciones con otros personajes y objetos; `reuso_gatos` incluye una escena JS a mano.
- `original/s0_bib.js`: el JS original usando solo `biblioteca.js` (1.843 caracteres, 0 cuadros distintos).
- `malo/`, `malo2/` (no versionadas): errores a propósito para el validador.

Repetir: `python3 catalogo/declarativo/compilar.py pruebas/declarativo/CARPETA && node pruebas/declarativo/render.js pruebas/declarativo/CARPETA/index.html SALIDA 0 225`
