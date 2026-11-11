# Ciclo automático: un video de "Atlas del saber" de principio a fin

Una ejecución = UN video. Cada tarea programada empieza en una sesión nueva y vacía: todo lo que necesitas está en
este repositorio. Trabaja en español. Usa una lista de tareas (TaskCreate) con estos pasos para que Johan vea el avance.

## Reglas que no se rompen
1. **Publicación automática (decisión de Johan, 2026-11-10):** cuando el video pasa TODAS las revisiones, se programa
   en Metricool sin preguntar y después se le avisa. Si alguna revisión falla o hay dudas sobre un dato, NO se programa:
   se le envía como propuesta y se espera su respuesta. La hora de publicación debe dejar ≥2 h desde el aviso, para que
   pueda cancelarla en el planificador de Metricool si quiere.
2. Datos verificados: cada cifra o fecha del guion se comprueba con WebSearch en al menos 2 fuentes fiables.
   Si un dato no se puede confirmar, se quita.
3. Nada de símbolos nazis, logos de marcas ni caras de personas reales reconocibles en las animaciones.
4. Modelos y consumo (ver CLAUDE.md): tú (Sonnet) haces el trabajo creativo y de código; prioriza SCRIPTS (`eng/producir.sh`,
   `eng/verificar.sh`, `eng/antiduplicados.py`) antes que subagentes. Si hace falta un subagente: `model: "haiku"` explícito,
   máx. 2, tarea mecánica; revisa lo que entrega y devuélvelo hasta que esté pulido. Opus/Fable: prohibidos sin permiso de Johan.
5. Si un paso falla y no se puede arreglar en 2 intentos, para, explica a Johan qué falló (SendUserMessage) y no sigas.

## Datos fijos
- Metricool: brandId/blogId `7523723`, zona horaria America/New_York. Redes: Instagram (cuenta Atlas del saber,
  antes @zoelara__), TikTok (antes @larazoe__), YouTube (canal UC_jviohrsCwGW1CXN9a7Q6A), Facebook (solo la PÁGINA de Atlas del saber, id 901061146421888; nunca el perfil personal).
- Voz: ElevenLabs "Hache Voz Comercial LATAM", voice_id `7wYVohVK7cr2fX4431vj`, modelo `eleven_multilingual_v2`.
- Formato: vertical 720×1280, 30 fps, 60–100 s de voz (150–240 palabras).

## Paso 0 — Preparar
```
bash eng/check_env.sh          # debe decir ENTORNO_OK
```
Lee `datos/temas.json`, `datos/ideas.md`, `datos/pendientes.json` (si existe) y `eng/GUIDE.md` completo.
Si en `pendientes.json` hay un video esperando aprobación de una ejecución anterior, menciónalo en tu propuesta final.

## Paso 1 — Investigar (máx. ~10 min)
- Metricool `getAnalyticsDataByMetrics` (reels de Instagram, últimos 14 días; campos IGRE02 fecha, IGRE03 texto,
  IGRE23 vistas, IGRE11 alcance, IGRE10 likes, IGRE07 comentarios, IGRE12 guardados, IGRE21 compartidos,
  IGRE24 tiempo medio, IGRE28 % que pasa de 3 s). Actualiza las vistas en `datos/temas.json`.
- vidIQ: busca qué está explotando en el nicho (historia/curiosidades en español): `vidiq_instagram_tiktok_outlier_search`,
  `vidiq_outliers`, `vidiq_trending_videos`. Anota 2–3 hallazgos útiles.
- Elige el tema: por defecto la primera idea libre de `datos/ideas.md`, salvo que los datos sugieran algo mejor.
  No repitas un tema de `temas.json` (sí continuaciones explícitas). Alterna la fórmula respecto al último video.
  Fórmulas ganadoras: ANIMALES+HISTORIA (compartidos), DEBATE/RANKING (comentarios), MAPA+CAUSAS (guardados).
- Reserva la idea en cuanto la elijas: márcala `[~] reservada AAAA-MM-DD` en `datos/ideas.md`, commit + push
  (así la otra ejecución del día no elige la misma). Antes de elegir, haz `git pull` para ver las reservas.

## Paso 2 — Guion
- Carpeta: `videos/AAAA-MM-DD_slug/` (fecha de hoy). Escribe `guion.md` con: tema, fórmula, guion y fuentes.
- Gancho en los primeros 3 s (dato sorprendente o pregunta que divide). Frases cortas, ritmo alto.
- Cierre: una pregunta que divida + "Sígueme para más." (para debates: pide que comenten su respuesta).
- Escribe los números con letras como se dicen ("quince mil años") para que la voz los lea bien.

## Paso 3 — Voz y tiempos por palabra
0. **Caché de voz (no gastar ElevenLabs de más):** guarda el texto limpio en `videos/<carpeta>/voz_texto.txt` y ejecuta
   `python3 eng/cache.py videos/<carpeta> voz`. Si dice REUSAR (voz.mp3 y palabras.json existen y el texto/voz/modelo no cambiaron),
   NO llames a ElevenLabs. Tras generar: `python3 eng/cache.py videos/<carpeta> voz --marcar`. Haz commit de voz.mp3 y palabras.json
   (así sobreviven si la sesión se corta).
1. `creative_create_flow` → `creative_generate_speech` (prompt = guion limpio, voice_id y modelo de arriba,
   generations_count 1, flow_id del paso anterior).
2. Espera con `creative_get_flow_run_status` hasta `all_completed`. Descarga el audio:
   `curl -sS -o videos/<carpeta>/voz.mp3 "<content_url>"` (requiere que el dominio elevenlabsusercontent.com esté permitido).
3. `creative_transcribe_audio` con `connect_from=[node_id de la voz]` y el mismo flow_id, modelo `eleven_scribe_v1`.
   Espera con `creative_get_flow_run_status`; descarga `transcripts[0].words_download_url` con curl a
   `videos/<carpeta>/palabras.json` (o guarda tú la lista `words`) y ejecuta
   `python3 eng/palabras.py videos/<carpeta>/palabras.json videos/<carpeta>` → `script.txt` + `st.txt`.
4. DUR = duración de voz.mp3 (ffprobe) + 1.2 s, redondeado a 1/30.

## Paso 4 — Dirección y escenas
- Escribe `STORYBOARD.md` (como `ejemplos/v02_gatos/STORYBOARD.md`): primer cuadro impactante, 6–9 escenas con QUÉ pasa
  y en QUÉ palabra, paleta propia (distinta del último video), transiciones (≥5 tipos, ≥2 morph, ≥1 dive), cámara que sigue,
  elementos que empujan/activan a otros, texto con máscara.
- Parte de un video terminado: `bash eng/nuevo_video.sh <slug> [base]` y mira `catalogo/CATALOGO_FIRMAS.md` (piezas con parámetros; copia solo la función que uses) y `catalogo/DUPLICADOS.md` (no mezcles piezas con el mismo nombre);
  para paleta y texto usa `tema()` de `catalogo/tema.js` (instrucciones en ese archivo; añade su `<script>` en `index.html` tras `core.js`);
  para llanura nocturna u hoguera usa `llanuraNoche(t,o)` / `hoguera(x,y,escala,t,o)` de `catalogo/biblioteca.js` (su `<script>` va tras `assets.js`);
  escribe tú `index.html`, `ev.py`, `assets.js`, `scenes.js` y `audio.py` (modifica, no reescribas desde cero). ≥2 rondas de revisión visual.
- Revísalo tú: `python3 eng/sheet_t.py $PWD/videos/<carpeta>/index.html $PWD/videos/<carpeta>/rev.png t1 … t12`
  (cuadro 0, cada escena, cada transición) y mira la imagen con Read. Devuelve correcciones concretas hasta que esté bien:
  nada cortado ni encimado, nada tapado por subtítulos (y 530–600), contraste, textos con tildes.

## Paso 5 — Sonido y render (UN comando, con caché)
```
python3 videos/<carpeta>/ev.py                              # genera ev.json si cambió el guion/escenas
bash eng/producir.sh videos/<carpeta> NOMBRE --rapido       # audio + hoja de 12 cuadros rev.png: revísala con Read
python3 eng/onset.py videos/<carpeta> ev1 ev2 …             # 8–10 eventos clave: todos OK
bash eng/producir.sh videos/<carpeta> NOMBRE                # render final SOLO de lo que cambió; termina en PRODUCIDO
```
La caché (`eng/cache.py`) compara el contenido de guion, voz, escenas, audio, motor y configuración: si algo cambió, rehace esa
etapa y las siguientes; si no, la salta. No uses `--forzar` salvo sospecha fundada. Nunca repitas un render completo sin mirar
antes `python3 eng/cache.py videos/<carpeta> estado`. `eng/verificar.sh` (incluido) comprueba formato, duración, audio y volumen.
Saca una hoja de fotogramas del MP4 final y revísala. Portada: un JPG 1080×1920 del cuadro más fuerte.

## Paso 6 — Alojar y programar
1. `bash eng/publicar_media.sh videos/<carpeta>/NOMBRE.mp4 videos/<carpeta>/portada.jpg` → URLs públicas.
   Comprueba con `curl -r 0-1000 -o /dev/null -w "%{http_code}"` que la URL del MP4 responde 200/206.
2. Hora: `getBestTimeToPostByNetwork` (Instagram) para hoy/mañana; nunca en el pasado; ≥2 h desde ahora; ≥5 h de otro video
   ya programado (míralo con `getScheduledPosts`).
3. Texto: 1–2 frases con gancho + pregunta + 3–5 hashtags; título de YouTube y Facebook ≤ 70 caracteres.
4. **ANTIDUPLICADOS (obligatorio, en este orden):**
   a) `getScheduledPosts` (ayer–pasado mañana, extendedRange true): si ya hay una publicación (programada o publicada) con el mismo video o tema, NO programes.
   b) `python3 eng/antiduplicados.py reservar videos/<carpeta> --titulo "<título>"` → debe decir RESERVADO (si dice DUPLICADO, para).
   c) `createScheduledPost`; si funciona: `python3 eng/antiduplicados.py confirmar videos/<carpeta> --planner <plannerUrl> --fecha <ISO>`;
      si falla del todo: `... liberar videos/<carpeta>`. Luego `createScheduledPost` (blogId 7523723) con providers instagram + tiktok + youtube + facebook, media [URL del MP4],
   `videoThumbnailUrl` = URL de la portada solo si aplica, `instagramData` {type: "REEL", isAiGenerated: true},
   `tiktokData` {isAigc: true, title}, `facebookData` {type: "REEL", title}, `youtubeData` {title, type: "short",
   privacy: "public", madeForKids: false, isAiGeneratedContent: true}, `publicationDate` con zona America/New_York.
   Si una red da error, reinténtalo una vez solo para esa red; si sigue fallando, avisa a Johan cuál falló.
5. Actualiza `datos/temas.json` (tema, fecha, plannerUrl), marca la idea en `datos/ideas.md` con [x] y la fecha,
   commit + push de la carpeta del video (sin MP4 ni .wav) y de `datos/` a `main`.

## Paso 7 — Avisar a Johan
`SendUserFile` con el MP4 y `SendUserMessage` con: tema y por qué se eligió, texto publicado, título, **fecha y hora
programadas**, redes (Instagram Reel, TikTok, YouTube Short, Facebook Reel de la página) y el enlace `plannerUrl` de
Metricool, diciendo que puede cancelarlo ahí antes de esa hora. Envía también un `PushNotification` corto.
Si Johan responde pidiendo cambios o cancelar, hazlo (updateScheduledPost o vuelve a renderizar) y confírmalo.

## Paso 8 — Informe (breve)
`python3 eng/informe.py videos/<carpeta> --modelo "..." --subagentes "..." --regen "..." --consumo "..." --publicado "..."`
(modelo principal; subagentes y modelos; regeneraciones innecesarias; consumo si se conoce; publicaciones). Se guarda en `datos/informes.md`
y se resume en el mensaje final a Johan. Antes del commit: `python3 catalogo/generar.py` (actualiza el catálogo de piezas). Commit + push.

## Si el video NO pasó las revisiones
No programes. Guarda `datos/pendientes.json`, envía el MP4 y explica qué falló y qué propones; espera su respuesta.
