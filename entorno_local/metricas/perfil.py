"""Perfiles: cada página/marca vive en su propia carpeta perfiles/<nombre>/ y NUNCA se mezcla con otra.
Cada carpeta tiene su config.toml (acceso), perfil.toml (nombre y página), metricas.db, cola/, tiktok/ y videos/.
No existe perfil por defecto: hay que decir cuál (variable ATLAS_PERFIL, que ponen los .bat con el nombre)."""
import os, sys, tomllib
from pathlib import Path

AQUI = Path(__file__).parent
PERFILES = AQUI / "perfiles"

def nombre():
    n = os.environ.get("ATLAS_PERFIL", "").strip()
    validos = sorted(p.name for p in PERFILES.iterdir() if (p / "perfil.toml").exists()) if PERFILES.exists() else []
    if n not in validos:
        sys.exit(f"Falta indicar el perfil (o no existe). Perfiles disponibles: {', '.join(validos) or 'ninguno'}. "
                 "Usa los .bat con el nombre, por ejemplo: panel.bat atlas")
    return n

def carpeta():
    return PERFILES / nombre()

def datos():
    """perfil.toml del perfil activo: titulo, page_id, etc."""
    return tomllib.loads((carpeta() / "perfil.toml").read_text(encoding="utf-8"))
