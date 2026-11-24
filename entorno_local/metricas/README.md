# Métricas de Atlas del saber (local, reemplaza a Metricool)

SQLite + panel Streamlit. Corre en la PC de Johan (Windows o Linux, Python 3.11+).

## Probar ya (sin credenciales)
```
pip install -r requirements.txt
python demo.py            # datos inventados
streamlit run panel.py
```
En Windows: doble clic a `panel.bat` (crea el entorno, actualiza y abre el panel).

## Datos reales
1. Copia `config.example.toml` a `config.toml` y rellénalo (no se sube a GitHub).
2. `python actualizar.py` descarga todo a `metricas.db`; se puede programar a diario con el Programador de tareas de Windows.
3. `streamlit run panel.py`. Cada día queda una foto de vistas/likes/seguidores, así se ve la evolución.

## Cómo conseguir cada credencial
- **YouTube (API key):** console.cloud.google.com → proyecto nuevo → habilitar «YouTube Data API v3» → Credenciales → Crear clave de API. El channel_id es `UC_jviohrsCwGW1CXN9a7Q6A`. (Retención/ingresos exigen OAuth + YouTube Analytics API: fase 2.)
- **Instagram y Facebook (Graph API):** la cuenta de IG debe ser **Creator o Business** y estar vinculada a la página de Facebook. En developers.facebook.com crea una app «Business», agrega Instagram Graph API, y en el Explorador de la Graph API genera un token con permisos `instagram_basic, instagram_manage_insights, pages_show_list, pages_read_engagement, read_insights`; cámbialo por uno de larga duración (60 días, renovable). `ig_user_id` sale de `GET /me/accounts?fields=instagram_business_account`.
- **TikTok:** sin API. En TikTok Studio → Analytics → Contenido → Descargar CSV, guárdalo en `tiktok/` y pon la ruta en config.toml. Los nombres de columna cambian según idioma; si alguna no se lee, avisar con una muestra de las cabeceras.

## Estado
Importadores de YouTube, Instagram y Facebook escritos pero **sin probar con credenciales reales**. TikTok probado con CSV de ejemplo.

## Varias páginas (perfiles) — nunca se mezclan
Cada página/marca tiene su carpeta `perfiles/<nombre>/` con su propio `config.toml` (acceso), `perfil.toml`, `metricas.db`, `cola/`, `tiktok/` y `videos/`.
No hay perfil por defecto: todos los `.bat` piden el nombre (`panel.bat atlas`, `conectar_meta.bat casa_moments`, `programar_cola.bat casa_moments`...).
Cada pendiente de la cola lleva `"perfil"` obligatorio; si no coincide con la carpeta, no se publica. Los perfiles con `publicar_sin_pedir = false` (Casa moments) solo publican pendientes con `"autorizado": true` (la orden de Johan).
Si ya usabas la app antes: ejecuta una vez `migrar_a_perfiles.bat` (mueve lo de Atlas a `perfiles\atlas`).
