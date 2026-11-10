# Ciclo diario de comentarios (YouTube de Atlas del saber)

Canal: **Atlas del saber**, channelId `UC_jviohrsCwGW1CXN9a7Q6A` (@atlasdelsaber23). NUNCA uses otro canal
(en vidIQ también está conectado "Byaku", UCSQPA2wVd4hy7ZP-kIV84CQ: no lo toques).

## Pasos
1. `vidiq_comment_reply_permission` con el channelId. Si `canReply` es false: `vidiq_authorize_with_youtube`
   con `commentReplyChannelId`, mándale el enlace a Johan y espera.
2. `vidiq_video_comments` con channelId, order "time", maxResult 50. Quédate con los hilos de las últimas 48 h que
   NO tengan ya una respuesta del canal (`byChannelOwner`) y que no estén en `datos/comentarios_respondidos.json`.
3. Clasifica cada uno: RESPONDER, OCULTAR (odio, insultos, spam, símbolos o memes nazis, desinformación) o IGNORAR
   (emojis sueltos, "primero", etc.; como mucho un "❤️" o "¡Gracias!" si es positivo).
4. Escribe la respuesta tú mismo (no uses vidiq_generate_comment_replies) con estas reglas:
   - Tiene que sonar a Johan, escrita por una persona, NO por una IA: natural, de tú, cercana, frases cortas,
     sin estructuras de manual ("¡Excelente pregunta!", "Sin duda alguna…", listas, frases perfectas). Puede haber
     alguna expresión coloquial. 1–3 frases. Máximo 1 emoji, y no en todas.
   - Da la razón en lo que la tenga y añade un dato concreto y verificable. Si el seguidor se equivoca, corrígelo con
     amabilidad. Si es sarcasmo o señala un fallo, responde con el dato correcto sin disculparte de más.
   - Cuando encaje, termina con una pregunta abierta. Datos dudosos: verifícalos con WebSearch; nunca inventes cifras.
   - Nada de política actual ni temas polémicos.
5. Mándale a Johan UNA lista con SendUserMessage: por cada comentario, el video, el comentario y tu respuesta propuesta,
   numerados; y aparte los que recomiendas OCULTAR (los oculta él desde YouTube Studio). Pregunta:
   "¿Publico todas? (sí / sí menos la 3 / cambia la 2 por…)". Envía también un PushNotification corto.
6. vidIQ exige aprobación explícita: publica con `vidiq_reply_to_comment` SOLO las respuestas que Johan apruebe, con el
   texto exacto aprobado. Nunca repitas una llamada con resultado dudoso (podría duplicar la respuesta).
7. Añade los ids respondidos a `datos/comentarios_respondidos.json`. Si varios piden un mismo tema, añádelo como idea
   en `datos/ideas.md` (con "pedido por los seguidores"). Commit + push.
