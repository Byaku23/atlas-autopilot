"""Publica UN video (Reel) en Instagram y/o Facebook de Atlas del saber.
Uso:  python publicar_meta.py video.mp4 "Texto del post #historia"   (o @archivo.txt para leer el texto de un archivo) [--ig] [--fb] [--publicar]
Sin --publicar solo valida (dry-run). Usa SOLO las cuentas de config.toml (Atlas del saber).
SIN PROBAR con cuentas reales todavía: la primera prueba la hace Johan con un video suyo."""
import argparse, sys, time, tomllib
from pathlib import Path
import requests

G = "https://graph.facebook.com/v21.0"
AQUI = Path(__file__).parent

def _ok(r, que):
    if not r.ok:
        try: m = r.json()["error"]["message"]
        except Exception: m = f"HTTP {r.status_code}"
        sys.exit(f"{que}: {m}")
    return r.json()

def instagram(cfg, video, texto):
    tok, ig = cfg["token"], cfg["ig_user_id"]; n = video.stat().st_size
    c = _ok(requests.post(f"{G}/{ig}/media", data={"media_type": "REELS", "upload_type": "resumable", "caption": texto, "access_token": tok}, timeout=60), "IG crear")
    with open(video, "rb") as f:
        _ok(requests.post(c["uri"], headers={"Authorization": f"OAuth {tok}", "offset": "0", "file_size": str(n)}, data=f, timeout=600), "IG subir")
    for _ in range(60):
        s = _ok(requests.get(f"{G}/{c['id']}", params={"fields": "status_code", "access_token": tok}, timeout=30), "IG estado")["status_code"]
        if s == "FINISHED": break
        if s == "ERROR": sys.exit("IG: Instagram rechazó el video al procesarlo")
        time.sleep(5)
    else: sys.exit("IG: tardó demasiado procesando")
    r = _ok(requests.post(f"{G}/{ig}/media_publish", data={"creation_id": c["id"], "access_token": tok}, timeout=60), "IG publicar")
    print("Instagram publicado, id", r["id"])

def facebook(cfg, video, texto):
    tok, pg = cfg["token"], cfg["page_id"]; n = video.stat().st_size
    s = _ok(requests.post(f"{G}/{pg}/video_reels", data={"upload_phase": "start", "access_token": tok}, timeout=60), "FB iniciar")
    with open(video, "rb") as f:
        _ok(requests.post(s["upload_url"], headers={"Authorization": f"OAuth {tok}", "offset": "0", "file_size": str(n)}, data=f, timeout=600), "FB subir")
    _ok(requests.post(f"{G}/{pg}/video_reels", data={"upload_phase": "finish", "video_id": s["video_id"], "video_state": "PUBLISHED",
                      "description": texto, "access_token": tok}, timeout=60), "FB publicar")
    print("Facebook publicado, video", s["video_id"])

def main():
    p = argparse.ArgumentParser()
    p.add_argument("video"); p.add_argument("texto")
    p.add_argument("--ig", action="store_true"); p.add_argument("--fb", action="store_true"); p.add_argument("--publicar", action="store_true")
    a = p.parse_args()
    v = Path(a.video)
    if a.texto.startswith("@"): a.texto = Path(a.texto[1:]).read_text(encoding="utf-8").strip()
    if not v.exists() or v.suffix.lower() != ".mp4": sys.exit("El video debe existir y ser .mp4")
    cfg = tomllib.loads((AQUI / "config.toml").read_text(encoding="utf-8"))
    ig, fb = (cfg.get("instagram") or [None])[0], (cfg.get("facebook") or [None])[0]
    if not (a.ig or a.fb): a.ig, a.fb = bool(ig), bool(fb)
    print(f"Video {v.name} ({v.stat().st_size/1e6:.1f} MB) -> " + ", ".join(x for x, on in (("Instagram @atlasdelsaber", a.ig), ("Facebook Zoe Lara", a.fb)) if on))
    if not a.publicar: print("DRY-RUN: no se publicó nada. Añade --publicar para publicar de verdad."); return
    if a.ig: instagram(ig, v, a.texto)
    if a.fb: facebook(fb, v, a.texto)

if __name__ == "__main__":
    main()
