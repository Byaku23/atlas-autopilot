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

## ⚠ Publicación hasta el 2026-12-01 (decidido por Johan 2026-11-19; este bloque ANULA el Paso 6 de PIPELINE.md y el paso 3 del prompt de la tarea)
- **NO uses Metricool** (plan gratis: 20/20 publicaciones del mes; vuelve a haber cupo el 1-dic-2026). No programes ahí.
- **YouTube:** publica por vidIQ solo en el canal **Atlas del saber** (`platformAccountId` UC_jviohrsCwGW1CXN9a7Q6A, @atlasdelsaber23). Flujo: `vidiq_video_upload` (url del MP4 en la rama media) → `vidiq_social_post_draft_create` (privacyStatus public, publishAt 12:00 o 18:00 NY) → `vidiq_social_post_publish`. NUNCA publiques en cuentas "Byaku" (@byaku23, @byakuplayer, TikTok/Facebook "Byaku"): son su canal de GTA 6.
- **Instagram, TikTok y Facebook de Atlas del saber (decidido por Johan 2026-11-23):** ya están conectadas en vidIQ y desde el 2026-11-24 las publica la tarea, igual que YouTube, en las mismas horas. Cuentas (`vidiq_social_account_list`): Instagram `40210589825254256` (@atlasdelsaber), TikTok `_000Puwgy4IWzY2UZ1qmVOi0oEHMn5Ie0ILG` (Atlas del saber), Facebook Pages `901061146421888` (aparece como "Zoe Lara"; es la página de Atlas). Verifica siempre con la lista que el id coincide antes de publicar; las cuentas de Byaku ya no están conectadas y NUNCA se usan. Johan programó él mismo las del 2026-11-23; no dupliques videos ya publicados. Si vidIQ no tiene créditos o falla, avisa a Johan con SendUserFile (MP4 + texto) como antes.
- Horario fijo: 12:00 (mañana) y 18:00 (tarde) NY.

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
- Antes de dibujar algo, lee `catalogo/CATALOGO_FIRMAS.md` (piezas con parámetros) y `catalogo/DUPLICADOS.md`; copia solo la función que necesites. Paleta/texto por tema: `catalogo/tema.js`. Fondos y conjuntos ya montados (`llanuraNoche`, `hoguera`): `catalogo/biblioteca.js`.
- **Escenas siempre en JavaScript** (`scenes.js`). El formato declarativo JSON se probó y se descartó (decisión de Johan 2026-11-11, ver `CAMBIOS.md`); no lo propongas de nuevo salvo petición.
- Cada video termina con un informe breve (`eng/informe.py`, Paso 8 de PIPELINE.md).
- Registro de cambios y cómo revertirlos: `CAMBIOS.md`.

## Imágenes reales (decidido por Johan 2026-11-12)
- Usa fotos reales cuando expliquen algo visualmente o apoyen a un personaje histórico o tema específico; si la imagen no aporta nada, no la pongas.
- Solo dominio público verificado. Fuente fiable: `www.loc.gov` / `tile.loc.gov` (Library of Congress). Commons puede dar «demasiadas peticiones»; reintenta una vez y, si falla, NO sigas sin imagen ni publiques: avisa a Johan qué imagen necesitas (personaje/tema y para qué escena), deja el video en `datos/pendientes.json` y espera a que él la envíe. Guarda autor, año y URL en un .json junto a la imagen.
- NO pongas pie de fuente en pantalla (Johan no lo quiere); `credito()` existe pero solo se usa si él lo pide.
- Componente: `pruebas/calidad_visual/lib/fotos.js` (`cargarFoto`, `fotoReal` con marco y Ken Burns, `resaltar`). Ejemplo: `pruebas/calidad_visual/demo_fotos/`.
- Opcionales aprobados para escenas con personaje: `lib/rig.js`, `lib/mundo.js`, `lib/camara.js` (transición `pan`). No migres escenas existentes.
- **Video atascado por una imagen (decidido por Johan 2026-11-12):** no esperes dentro de la sesión. Deja el video terminado salvo la imagen en `datos/pendientes.json` con la hora del aviso. Si pasó más de 1 hora y Johan no respondió, haz otro video de un tema SIN imágenes y publícalo en su lugar; el video atascado se programa después, en la hora que tenía asignada el segundo video del día. Si Johan envía la imagen antes, termina el atascado y sigue el orden normal.

## Mapas reales en videos de geografía (decidido por Johan 2026-11-15)
- En todo video de geografía usa por defecto el módulo `catalogo/mapa/` (lee `catalogo/mapa/MAPA.md`): satélite NASA real, bordes Natural Earth, colores semitransparentes por región, cámara con zoom y bandera con carita (`banderaPR` como modelo). Ejemplo: `pruebas/mapa_real/demo/`.
- Si el mapa no sirve para ese tema, dilo en el informe; no migres videos ya hechos. Para zoom muy cercano la textura (2576 px) se ve suave: pide a Johan una de ≥8000 px.
