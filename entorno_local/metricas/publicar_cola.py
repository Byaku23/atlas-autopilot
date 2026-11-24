"""Cola de publicación: publica lo que ya toca. Lo ejecuta el Programador de tareas de Windows cada 5 min.
Cada perfil (página) tiene SU cola: perfiles/<perfil>/cola/. Se ejecuta con ATLAS_PERFIL (los .bat lo ponen).
Cada pendiente es un archivo cola/pendientes/NOMBRE.json y DEBE llevar "perfil" (sin valor por defecto; si no coincide con la carpeta, NO se publica):
  {"perfil": "atlas", "video": "videos/x.mp4", "texto_archivo": "videos/x.txt", "redes": ["instagram","facebook"], "cuando": "2026-11-23T18:00:00-05:00"}
Al publicar bien se mueve a cola/publicados/ (con el resultado); si falla va a cola/fallidos/ (NO se reintenta solo: evita duplicados)."""
import json, os, shutil, subprocess, sys
import perfil
from datetime import datetime, timezone
from pathlib import Path

AQUI = Path(__file__).parent
PERFIL = perfil.nombre()
CARPETA = perfil.carpeta()
COLA = CARPETA / "cola"
OK_SIN_PEDIR = perfil.datos().get("publicar_sin_pedir", False)
PY = AQUI / ".venv" / "Scripts" / "python.exe"
if not PY.exists(): PY = Path(sys.executable)

def main():
    for d in ("pendientes", "publicados", "fallidos"): (COLA / d).mkdir(parents=True, exist_ok=True)
    ahora = datetime.now(timezone.utc)
    for f in sorted((COLA / "pendientes").glob("*.json")):
        try:
            p = json.loads(f.read_text(encoding="utf-8"))
            if p.get("perfil") != PERFIL:
                print(f.name, "SALTADO: su campo 'perfil' no es", PERFIL, "(no se toca)"); continue
            if p.get("autorizado") is not True and not OK_SIN_PEDIR:
                print(f.name, "ESPERA: este perfil necesita \"autorizado\": true (la orden de Johan)"); continue
            if datetime.fromisoformat(p["cuando"]) > ahora: continue
            destino = "publicados"
            # se mueve ANTES de publicar: si algo se cuelga, nunca se publica dos veces
            en_curso = COLA / "publicados" / f.name; shutil.move(f, en_curso)
            cmd = [str(PY), str(AQUI / "publicar_meta.py"), str(CARPETA / p["video"]), "@" + str(CARPETA / p["texto_archivo"]), "--publicar"]
            if "instagram" in p["redes"] and "facebook" not in p["redes"]: cmd.append("--ig")
            if "facebook" in p["redes"] and "instagram" not in p["redes"]: cmd.append("--fb")
            r = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8", timeout=1800, env={**os.environ, "ATLAS_PERFIL": PERFIL})
            p["resultado"] = (r.stdout + r.stderr)[-1500:]
            if r.returncode != 0: shutil.move(en_curso, COLA / "fallidos" / f.name); en_curso = COLA / "fallidos" / f.name
            en_curso.write_text(json.dumps(p, ensure_ascii=False, indent=1), encoding="utf-8")
            print(f.name, "OK" if r.returncode == 0 else "FALLÓ")
        except Exception as e:
            print(f.name, "ERROR", type(e).__name__, str(e)[:150])

if __name__ == "__main__":
    main()
