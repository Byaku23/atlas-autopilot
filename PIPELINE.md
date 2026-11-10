# Ciclo automático: un video de "Atlas del saber" de principio a fin

Una ejecución = UN video. Cada tarea programada empieza en una sesión nueva y vacía: todo lo que necesitas está en
este repositorio. Trabaja en español. Usa una lista de tareas (TaskCreate) con estos pasos para que Johan vea el avance.

## Reglas que no se rompen
1. **Nunca programes ni publiques nada sin un "sí" explícito de Johan en esta sesión**, después de enseñarle el video,
   el texto, la fecha/hora y las redes. Una aprobación vale solo para ese video.
2. Datos verificados: cada cifra o fecha del guion se comprueba con WebSearch en al menos 2 fuentes fiables.
   Si un dato no se puede confirmar, se quita.
3. Nada de símbolos nazis, logos de marcas ni caras de personas reales reconocibles en las animaciones.
4. Delegar lo simple: el código de escenas y tareas mecánicas pueden ir a un subagente (model "sonnet");
   tú revisas lo que entrega y lo devuelves con correcciones concretas hasta que esté pulido.
5. Si un paso falla y no se puede arreglar en 2 intentos, para, explica a Johan qué falló (SendUserMessage) y no sigas.

## Datos fijos
- Metricool: brandId/blogId `7523723`, zona horaria America/New_York. Redes: Instagram (cuenta Atlas del saber,
  antes @zoelara__), TikTok (antes @larazoe__), YouTube (canal UC_jviohrsCwGW1CXN9a7Q6A).
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
- Encarga `index.html`, `ev.py`, `assets.js`, `scenes.js` y `audio.py` a un subagente (Agent, model "sonnet") con:
  ruta de la carpeta, STORYBOARD.md, eng/GUIDE.md y los ejemplos como referencia. Debe hacer ≥2 rondas de revisión visual.
- Revísalo tú: `python3 eng/sheet_t.py $PWD/videos/<carpeta>/index.html $PWD/videos/<carpeta>/rev.png t1 … t12`
  (cuadro 0, cada escena, cada transición) y mira la imagen con Read. Devuelve correcciones concretas hasta que esté bien:
  nada cortado ni encimado, nada tapado por subtítulos (y 530–600), contraste, textos con tildes.

## Paso 5 — Sonido y render (desde videos/<carpeta>)
```
python3 audio.py
bash ../../eng/voice.sh $PWD DUR
bash ../../eng/mix.sh $PWD DUR NOMBRE
python3 ../../eng/onset.py . ev1 ev2 …     # 8–10 eventos clave: todos OK
bash ../../eng/go.sh $PWD NOMBRE DUR       # debe terminar en "VIDEO OK"
```
Saca una hoja de fotogramas del MP4 final (ffmpeg tile) y revísala. Portada: un JPG 1080×1920 del cuadro más fuerte.

## Paso 6 — Alojar y proponer
1. `bash eng/publicar_media.sh videos/<carpeta>/NOMBRE.mp4 videos/<carpeta>/portada.jpg` → URLs públicas.
2. Hora propuesta: `getBestTimeToPostByNetwork` (Instagram) para hoy/mañana; nunca en el pasado; separa ≥5 h de otro video.
3. Prepara el texto: 1–2 frases con gancho + pregunta + 3–5 hashtags; título de YouTube ≤ 70 caracteres.
4. Guarda `datos/pendientes.json` (carpeta, URLs, texto, título, fecha, redes) y haz commit + push de la carpeta del video
   (sin el MP4 ni los .wav: ya están ignorados) a `main`.
5. `SendUserFile` con el MP4 y `SendUserMessage` con: tema y por qué, **texto**, **título de YouTube**, **fecha y hora**,
   **redes** (Instagram Reel, TikTok, YouTube Short) y la pregunta: "¿Lo programo así? Responde sí, o dime qué cambio".
   Envía también un `PushNotification` corto.

## Paso 7 — Tras la respuesta de Johan
- "Sí" → `createScheduledPost` (blogId 7523723) con providers instagram + tiktok + youtube, media [URL del MP4],
  `videoThumbnailUrl` = URL de la portada solo si aplica, `instagramData` {type: "REEL", isAiGenerated: true},
  `tiktokData` {isAigc: true, title}, `youtubeData` {title, type: "short", privacy: "public", madeForKids: false,
  isAiGeneratedContent: true}, `publicationDate` con zona America/New_York. Confirma con el plannerUrl.
  Luego añade el tema a `datos/temas.json`, marca la idea en `datos/ideas.md`, vacía `pendientes.json`, commit + push.
- Cambios → aplícalos, vuelve a renderizar y vuelve al Paso 6.
- "No" → no programes nada; deja nota en `pendientes.json`.
