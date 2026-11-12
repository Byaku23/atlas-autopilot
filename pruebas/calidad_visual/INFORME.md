# Prueba de calidad visual (Canvas 2D) — 2026-11-12
Video: demo_calidad_visual.mp4 (9,6 s, mudo). Código aislado en `pruebas/calidad_visual/` (eng/ intacto).

## Capacidades: existe / se amplía / nuevo
- Existe en eng/: cámara (camAt/follow/world), partículas, luces aditivas, HITS (sacudida/flash), transiciones, easing.
- Ampliado (sin tocar eng/): transición `pan` con desenfoque direccional (camara.js, envuelve composite()).
- Nuevo: personaje articulado de perfil con expresiones independientes y siluetas (rig.js); capas con paralaje, suelo en perspectiva, sombras proyectadas con la pose real, polvo, huellas, luz/oscuridad (mundo.js); director de cámara: seguimiento con adelanto, zoom suave, secuencia de planos, cámara en mano (camara.js).

## Componentes reutilizables
figura, animar, expr, caminar, FASE (sin deslizamiento de pies), capas, colinas, pisoPersp, sombraFigura, sombraSuelo, polvo, huellas, trayecto, luzPunto, oscuridad, tinte, bruma, camSeguir, camMano, camSeq, zoomT, transición pan.

## Coste aproximado
- Implementación de esta prueba: ~1 sesión (≈ 1.000 líneas de JS entre librería y escenas). Las librerías se pagan una sola vez.
- Escena nueva con el rig: ~60–90 líneas (pose por claves + expresión + cámara), similar a una escena actual.
- Render: 288 cuadros en 64 s (incluye capturas PNG), ≈ 2× más lento que un video actual por los degradados y capas. Aceptable.
- Limitaciones: personaje solo de perfil (sin giros 3/4), manos sin dedos, sin fondo borroso real.
