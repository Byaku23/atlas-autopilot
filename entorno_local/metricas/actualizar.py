"""Actualiza la base con todas las cuentas de config.toml:  python actualizar.py"""
import tomllib, requests
from pathlib import Path
import db
from importadores import youtube, meta, tiktok_csv

AQUI = Path(__file__).parent

def _motivo(e):
    """Mensaje corto SIN la URL (que lleva el token)."""
    if isinstance(e, requests.HTTPError) and e.response is not None:
        try: return e.response.json()["error"]["message"]
        except Exception: return f"HTTP {e.response.status_code}"
    return type(e).__name__ + ": " + str(e)[:150]

def main():
    ruta = AQUI / "config.toml"
    if not ruta.exists():
        print("No hay config.toml. Copia config.example.toml o usa: python demo.py"); return
    cfg = tomllib.loads(ruta.read_text(encoding="utf-8"))
    con = db.conectar()
    tareas = [("youtube", youtube.importar), ("instagram", meta.importar_instagram), ("facebook", meta.importar_facebook)]
    for clave, fn in tareas:
        for c in cfg.get(clave, []):
            try: print(f"{clave} {c['nombre']}: {fn(con, c)} videos")
            except Exception as e: print(f"{clave} {c['nombre']}: ERROR -> {_motivo(e)}")
    for c in cfg.get("tiktok", []):
        try: print(f"tiktok {c['nombre']}: {tiktok_csv.importar(con, c, AQUI / c['csv'], c.get('seguidores'))} videos")
        except Exception as e: print(f"tiktok {c['nombre']}: ERROR -> {_motivo(e)}")
    # TikTok sin config: todos los CSV de tiktok/ + tiktok/seguidores.txt opcional
    if not cfg.get("tiktok"):
        csvs = sorted((AQUI / "tiktok").glob("*.csv"), key=lambda p: p.stat().st_mtime)
        if csvs:
            seg = AQUI / "tiktok" / "seguidores.txt"
            for c in csvs:  # del más viejo al más nuevo: el último gana si un video se repite
                try:
                    print("tiktok", c.name, ":", tiktok_csv.importar(con, {"nombre": "Atlas del saber (TikTok)", "tipo": "Creator"}, c,
                          seg.read_text().strip() if seg.exists() else None), "videos")
                except Exception as e: print("tiktok", c.name, ": ERROR ->", _motivo(e))
    con.commit()

if __name__ == "__main__":
    main()
