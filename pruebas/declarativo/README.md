# Prueba de la etapa 1 (arquitectura declarativa)
- `original/`: escena 0 de los perros con el flujo actual (ev.py + scenes.js), 7,5 s, tiempos de la voz real.
- `escena0/video.json`: la misma escena escrita como datos. Resultado: 225 de 225 cuadros idénticos al original.
- `mixta/`: escena declarativa + escena JavaScript a mano en el mismo video. `combinada/`: varios movimientos simultáneos sobre el lobo.
Repetir: `python3 catalogo/declarativo/compilar.py pruebas/declarativo/escena0 && node pruebas/declarativo/render.js pruebas/declarativo/escena0/index.html SALIDA 0 225`
