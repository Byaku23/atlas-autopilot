# Estado del proyecto de shorts (actualizado 2026-11-10 noche) — léelo al empezar un chat nuevo

## Sistema
- Producción automática: 3 tareas programadas (Sonnet) — "Atlas video mañana" 8:43, "Atlas video tarde" 13:44, "Atlas comentarios" 18:43 (hora de Nueva York). Todas siguen CLAUDE.md/PIPELINE.md/COMENTARIOS.md de este repositorio.
- Reglas de modelos/consumo en CLAUDE.md; registro de cambios y cómo revertir en CAMBIOS.md (punto seguro: commit d92c7e2).
- Las 3 últimas ejecuciones fallaron por límite de uso (antes de pasar a Sonnet). Pendiente: comprobar el 2026-11-11 si la de las 8:43 ya produce. Si vuelve a fallar: bajar a 1 video/día o revisar el plan (no usar créditos de pago).

## Pendientes de los shorts
1. Video "Los generales que olvidamos" (videos/2026-11-10_generales_olvidados): guion verificado con fuentes, idea reservada; falta voz, escenas, render y publicación. Lo retoma la ejecución de la mañana.
2. Ideas nuevas (animales+historia, debate, mapa) en datos/ideas.md; los "generales" tienen prioridad.
3. Comentarios: YouTube se responde con la tarea de las 18:43 (Johan aprueba antes de publicar). Instagram/TikTok/Facebook: manuales, Johan manda capturas. Las respuestas deben sonar naturales, no a IA.
4. Johan ya borró la copia duplicada del video de los animales (2026-11-10). Hay un registro anti-duplicados en datos/publicados.json.
5. Opcional: borrar en GitHub la rama sobrante `setup-test`.
6. Primera ejecución con la nueva arquitectura: revisar que el informe (datos/informes.md) salga y que la caché/antiduplicados funcionen en la nube; confirmar que el permiso de internet (elevenlabsusercontent.com, raw.githubusercontent.com) sigue activo.

## Datos fijos
Metricool brandId 7523723; canal YouTube UC_jviohrsCwGW1CXN9a7Q6A (nunca el canal Byaku); Facebook solo la página (901061146421888); voz Hache 7wYVohVK7cr2fX4431vj. Otros proyectos de Johan (juego, Karpio, Alofoke) NO se tocan aquí.

## Opinión de Johan sobre el video del Emú (2026-11-12, estilo 2.5D)
Le gustó publicarlo, pero lo ve "muy plano y con poco movimiento/animaciones". En los próximos 2.5D: más acción en cada escena (personajes animados, cadenas de acciones, cámara más activa, más profundidad entre capas), no solo siluetas quietas con paralaje.
