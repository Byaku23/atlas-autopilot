"""Cola de publicación: publica lo que ya toca. Lo ejecuta el Programador de tareas de Windows cada 5 min.
Cada pendiente es un archivo cola/pendientes/NOMBRE.json:
  {"video": "videos/x.mp4", "texto_archivo": "videos/x.txt", "redes": ["instagram","facebook"], "cuando": "2026-11-23T18:00:00-05:00"}
Al publicar bien se mueve a cola/publicados/ (con el resultado); si falla va a cola/fallidos/ (NO se reintenta solo: evita duplicados)."""
import json, shutil, subprocess, sys
from datetime import datetime, timezone
from pathlib import Path

AQUI = Path(__file__).parent
COLA = AQUI / "cola"
PY = AQUI / ".venv" / "Scripts" / "python.exe"
if not PY.exists(): PY = Path(sys.executable)

def main():
    for d in ("pendientes", "publicados", "fallidos"): (COLA / d).mkdir(parents=True, exist_ok=True)
    ahora = datetime.now(timezone.utc)
    for f in sorted((COLA / "pendientes").glob("*.json")):
        try:
            p = json.loads(f.read_text(encoding="utf-8"))
            if datetime.fromisoformat(p["cuando"]) > ahora: continue
            destino = "publicados"
            # se mueve ANTES de publicar: si algo se cuelga, nunca se publica dos veces
            en_curso = COLA / "publicados" / f.name; shutil.move(f, en_curso)
            cmd = [str(PY), str(AQUI / "publicar_meta.py"), str(AQUI / p["video"]), "@" + str(AQUI / p["texto_archivo"]), "--publicar"]
            if "instagram" in p["redes"] and "facebook" not in p["redes"]: cmd.append("--ig")
            if "facebook" in p["redes"] and "instagram" not in p["redes"]: cmd.append("--fb")
            r = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8", timeout=1800)
            p["resultado"] = (r.stdout + r.stderr)[-1500:]
            if r.returncode != 0: shutil.move(en_curso, COLA / "fallidos" / f.name); en_curso = COLA / "fallidos" / f.name
            en_curso.write_text(json.dumps(p, ensure_ascii=False, indent=1), encoding="utf-8")
            print(f.name, "OK" if r.returncode == 0 else "FALLÓ")
        except Exception as e:
            print(f.name, "ERROR", type(e).__name__, str(e)[:150])

if __name__ == "__main__":
    main()
