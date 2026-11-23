"""Actualiza la base con todas las cuentas de config.toml:  python actualizar.py"""
import tomllib, traceback
from pathlib import Path
import db
from importadores import youtube, meta, tiktok_csv

AQUI = Path(__file__).parent

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
            except Exception: print(f"{clave} {c['nombre']}: ERROR"); traceback.print_exc(limit=1)
    for c in cfg.get("tiktok", []):
        try: print(f"tiktok {c['nombre']}: {tiktok_csv.importar(con, c, AQUI / c['csv'], c.get('seguidores'))} videos")
        except Exception: print(f"tiktok {c['nombre']}: ERROR"); traceback.print_exc(limit=1)
    con.commit()

if __name__ == "__main__":
    main()
