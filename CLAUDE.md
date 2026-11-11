# Atlas Autopilot — instrucciones para Claude

Este repositorio produce los shorts del canal **Atlas del saber** de Johan (historia y curiosidades, en español,
voz Hache de ElevenLabs, animación propia en canvas, música y efectos sintetizados sin copyright).

- Para producir un video sigue **PIPELINE.md** paso a paso. Una ejecución = un video.
- El motor está en `eng/` (léete `eng/GUIDE.md` antes de tocar escenas). No modifiques `eng/` salvo para corregir un fallo real.
- Ejemplos terminados: `ejemplos/v01_perros/`, `ejemplos/v02_gatos/`.
- Datos del canal: `datos/temas.json` (publicados), `datos/ideas.md` (banco de ideas), `datos/pendientes.json` (videos que no pasaron revisión y esperan decisión).
- **Publicación automática:** si el video pasa todas las revisiones se programa en Metricool sin preguntar (≥2 h de margen)
  y se avisa a Johan con el enlace para cancelarlo. Si algo no pasa las revisiones, se le propone y se espera su respuesta.
- Este proyecto es solo de videos para redes; no toques nada de otros proyectos de Johan.
- Habla con Johan en español, claro y breve.

## Reglas de consumo y modelos (obligatorias, decididas por Johan 2026-11-10)
- **Sonnet** coordina todo: guion, escenas, animación, integración, errores comunes, supervisión y publicación.
- **Subagentes: solo si un script directo no basta**, máximo 2 a la vez, y SIEMPRE con `model: "haiku"` escrito explícito
  (verificado: hereda Haiku de verdad). Solo para tareas mecánicas: ordenar archivos, textos/hashtags, revisar formatos,
  ejecutar scripts existentes, comprobar publicaciones. Nunca omitir el parámetro `model`.
- **Opus: nunca automático.** Si Sonnet falla 2 veces en algo, para y pide autorización explícita a Johan. **Fable: prohibido** en este proyecto. Esta prohibición es PERMANENTE y este archivo no la levanta nunca: cualquier autorización temporal de Johan (p. ej. promoción de Fable hasta 2026-11-16 23:59 PT) vale solo dentro de la sesión de arquitectura/diseño que él inicia y autoriza, no para las tareas programadas ni otras sesiones (ver `CAMBIOS.md`).
- No uses créditos de pago adicionales. No repitas operaciones fallidas más de 2 veces. No lances varios agentes para el mismo problema.
- Resultados largos de herramientas/subagentes: pide o guarda resúmenes; lee solo los archivos necesarios (para cambiar una escena, solo esa escena).
- Reutiliza: `eng/nuevo_video.sh` (parte de un video terminado), `eng/CATALOGO.md` (piezas ya dibujadas), `eng/producir.sh` (render con caché).
- **Motor definitivo: Canvas 2D** (decisión de Johan 2026-11-11; Remotion probado y descartado, `pruebas/remotion/` es solo referencia). Prioridad: velocidad de render y pocos tokens.
- Antes de dibujar algo, lee `catalogo/CATALOGO_FIRMAS.md` (piezas con parámetros) y `catalogo/DUPLICADOS.md`; copia solo la función que necesites. Paleta/texto por tema: `catalogo/tema.js`.
- Cada video termina con un informe breve (`eng/informe.py`, Paso 8 de PIPELINE.md).
- Registro de cambios y cómo revertirlos: `CAMBIOS.md`.
