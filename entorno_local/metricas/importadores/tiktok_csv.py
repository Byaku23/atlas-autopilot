"""TikTok: sin API. Se importan los CSV exportados de TikTok Studio (Analytics > Contenido > Descargar).
Los nombres de columna varían por idioma, por eso se aceptan varias variantes."""
import csv, re
from datetime import date
import db

MESES = {m: i + 1 for i, m in enumerate("enero febrero marzo abril mayo junio julio agosto septiembre octubre noviembre diciembre".split())}

def _fecha(txt):
    """'20 de noviembre' -> '2026-11-20' (sin año en el CSV: se toma el más reciente que no sea futuro). Si ya es ISO, se deja."""
    txt = (txt or "").strip()
    if re.match(r"\d{4}-\d{2}-\d{2}", txt): return txt[:10]
    m = re.match(r"(\d{1,2}) de (\w+)", txt.lower())
    if not m or m.group(2) not in MESES: return None
    hoy = date.today()
    d = date(hoy.year, MESES[m.group(2)], int(m.group(1)))
    return (d if d <= hoy else d.replace(year=hoy.year - 1)).isoformat()

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
            vid = db.video(con, cid, g("url") or titulo, titulo[:80], _fecha(g("fecha")), g("url"))
            db.metricas(con, vid, vistas=_num(g("vistas") or 0), likes=_num(g("likes") or 0), comentarios=_num(g("comentarios") or 0),
                        compartidos=_num(g("compartidos") or 0), guardados=_num(g("guardados") or 0))
            n += 1
    return n
