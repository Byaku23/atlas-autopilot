# Registro de cambios — optimización de consumo (2026-11-10)

Punto de retorno seguro: commit `d92c7e2` (estado anterior, rama `main` antes de fusionar). 
Para revertir TODO: `git revert -m 1 <commit de fusión>` o `git reset --hard d92c7e2 && git push -f origin main` (con permiso de Johan).
Las tres tareas programadas no se tocaron: solo leen `main`, por eso el trabajo se hizo en la rama `optimizacion` y se fusionó tras probarlo.

## Archivos nuevos
- `eng/config.json` — voz/modelo/formato; forma parte de la huella de la caché.
- `eng/cache.py` — caché por contenido (SHA-256 de guion de voz, voz, audio.py, escenas, motor, config y salidas previas).
- `eng/producir.sh` — audio → mezcla → render → verificación en un comando; `--rapido` (hoja de 12 cuadros), `--forzar`.
- `eng/verificar.sh` — comprobación objetiva del MP4 (formato, fps, duración, audio, tamaño, volumen) sin IA.
- `eng/antiduplicados.py` + `datos/publicados.json` — reserva/confirmación/liberación de publicaciones (sincronizada por git).
- `eng/informe.py` + `datos/informes.md` — informe tras cada video.
- `eng/catalogo.py` → `eng/CATALOGO.md` — índice de piezas reutilizables; `eng/nuevo_video.sh` — parte de un video terminado.
## Archivos modificados
- `CLAUDE.md` (reglas de modelos/consumo), `PIPELINE.md` (pasos 3, 4, 5, 6.4, 8), `.gitignore` (voz.mp3 ya se versiona; así no se paga dos veces la voz).
## Sin cambios
- Motor (`eng/core.js`, render, sfx, voice.sh, mix.sh, go.sh), integraciones (Metricool, vidIQ, GitHub, ElevenLabs), tareas programadas.

## Verificaciones hechas (2026-11-10, con copia de animales_guerra y voz de relleno; sin ElevenLabs ni publicación)
- Subagente Haiku: su registro muestra `claude-haiku-5-5` en las 4 respuestas (no heredó Sonnet/Opus).
- Render completo de prueba: 5 min, VERIFICADO (h264 720x1280 30 fps, 76.6 s, audio, −15.5 dB).
- 2ª pasada: 0,8 s, las 3 etapas saltadas. Cambiar scenes.js → solo render; audio.py → rehace audio; texto de voz → bloquea y exige regenerar voz.
- `--rapido`: 4 s en vez de 5 min.
- Antiduplicados: detecta misma carpeta, título casi igual y video ya publicado (animales_guerra).

# Catálogo reutilizable para Canvas (2026-11-11)

Decisión de Johan: Canvas 2D es el motor definitivo; Remotion probado y descartado (`pruebas/remotion/`, solo referencia, no entra al pipeline).
Punto de retorno: commit `61d1893` (antes de este cambio). Revertir: `git revert 6132741 b801c66` (o los commits de esta sección) y push.
Solo se añadieron archivos nuevos y 3 líneas de documentación; no se tocó `eng/`, ni los videos, ni las tareas programadas.
- `catalogo/generar.py` → `catalogo/CATALOGO_FIRMAS.md` (piezas con parámetros) y `catalogo/DUPLICADOS.md`. Se regenera con `python3 catalogo/generar.py` (Paso 8).
- `catalogo/tema.js` — `tema({acc,ink,sw,bg0,bg1})`: paleta y texto con contorno por parámetros (opcional, se carga desde `index.html`).
- `CLAUDE.md` y `PIPELINE.md`: referencias al catálogo y a `tema.js`.

# Autorización temporal de Fable 5.2 (2026-11-11)

Johan autorizó usar Fable 5.2 solo para arquitectura y diseño del sistema (biblioteca reutilizable, sistema declarativo JSON, intérprete de escenas), mientras la promoción esté incluida en su plan, hasta **2026-11-16 23:59 PT (= 2026-11-17 07:59 UTC)**.
- **Cómo se aplica de verdad:** el modelo se elige por sesión (ajuste de la sesión o parámetro `model` de un subagente), no por lo que diga este archivo; una fecha escrita aquí no cambia ni caduca nada técnicamente. Por eso la prohibición de `CLAUDE.md` sigue PERMANENTE y la autorización se dio solo dentro de la sesión de diseño que Johan inició (cambio de modelo hecho a petición suya en esa sesión). Al cerrarse la sesión o pasar la fecha, no queda nada activo.
- Las 3 tareas programadas siguen con Sonnet/Haiku (su modelo es un ajuste propio de cada tarea; no se tocó). Producción de videos: Sonnet; tareas sencillas: Haiku. Fable no se usa en renders, scripts ni rutina.
- Sin Usage Credits de pago (Johan lo tiene apagado; captura 2026-11-11). Si Fable no está disponible dentro del plan, se detiene y se avisa.
- Pasada la fecha: cualquier sesión debe volver a Sonnet y no usar Fable sin una nueva autorización expresa.
