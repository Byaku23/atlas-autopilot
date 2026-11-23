"""TikTok: sin API. Se importan los CSV exportados de TikTok Studio (Analytics > Contenido > Descargar).
Los nombres de columna varían por idioma, por eso se aceptan varias variantes."""
import csv
from datetime import date
import db

COL = {
    "titulo": ["video title", "título del video", "titulo del video", "title", "video"],
    "fecha": ["post time", "fecha de publicación", "fecha de publicacion", "date", "create time"],
    "url": ["video link", "enlace del video", "link"],
    "vistas": ["total views", "visualizaciones totales", "views", "video views", "visualizaciones"],
    "likes": ["total likes", "me gusta totales", "likes", "me gusta"],
    "comentarios": ["total comments", "comentarios totales", "comments", "comentarios"],
    "compartidos": ["total shares", "veces compartido", "shares", "compartidos"],
    "guardados": ["total saves", "guardados", "saves", "favorites"],
}

def _num(x):
    try: return int(float(str(x).replace(",", "").replace(".", "") if str(x).count(".") > 1 else str(x).replace(",", "")))
    except ValueError: return 0

def importar(con, cfg, ruta_csv, seguidores=None):
    cid = db.cuenta(con, "tiktok", cfg["nombre"], cfg.get("tipo"))
    if seguidores: db.seguidores(con, cid, int(seguidores))
    n = 0
    with open(ruta_csv, newline="", encoding="utf-8-sig") as f:
        for fila in csv.DictReader(f):
            f_ = {k.strip().lower(): v for k, v in fila.items()}
            g = lambda campo: next((f_[c] for c in COL[campo] if c in f_), None)
            titulo = g("titulo") or "(sin título)"
            vid = db.video(con, cid, g("url") or titulo, titulo[:80], (g("fecha") or "")[:10] or None, g("url"))
            db.metricas(con, vid, vistas=_num(g("vistas") or 0), likes=_num(g("likes") or 0), comentarios=_num(g("comentarios") or 0),
                        compartidos=_num(g("compartidos") or 0), guardados=_num(g("guardados") or 0))
            n += 1
    return n
