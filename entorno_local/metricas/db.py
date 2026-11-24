"""Base SQLite de métricas (un solo archivo: metricas.db). Funciona igual en Windows y Linux."""
import sqlite3
from datetime import date
from pathlib import Path
import perfil

RUTA = None  # se fija al conectar, según el perfil activo (demo.py y panel.py lo usan)

def ruta():
    return perfil.carpeta() / "metricas.db"

ESQUEMA = """
CREATE TABLE IF NOT EXISTS cuentas(
  id INTEGER PRIMARY KEY, plataforma TEXT NOT NULL, nombre TEXT NOT NULL,
  tipo TEXT, ext_id TEXT, UNIQUE(plataforma, nombre));
CREATE TABLE IF NOT EXISTS videos(
  id INTEGER PRIMARY KEY, cuenta_id INTEGER NOT NULL REFERENCES cuentas(id),
  ext_id TEXT NOT NULL, titulo TEXT, publicado TEXT, url TEXT,
  UNIQUE(cuenta_id, ext_id));
-- una fila por video y día: valores ACUMULADOS a esa fecha
CREATE TABLE IF NOT EXISTS metricas_video(
  video_id INTEGER NOT NULL REFERENCES videos(id), fecha TEXT NOT NULL,
  vistas INTEGER DEFAULT 0, likes INTEGER DEFAULT 0, comentarios INTEGER DEFAULT 0,
  compartidos INTEGER DEFAULT 0, guardados INTEGER DEFAULT 0,
  PRIMARY KEY(video_id, fecha));
CREATE TABLE IF NOT EXISTS seguidores(
  cuenta_id INTEGER NOT NULL REFERENCES cuentas(id), fecha TEXT NOT NULL,
  seguidores INTEGER NOT NULL, PRIMARY KEY(cuenta_id, fecha));
"""

def conectar():
    global RUTA
    RUTA = RUTA or ruta()
    RUTA.parent.mkdir(parents=True, exist_ok=True)
    con = sqlite3.connect(RUTA)
    con.executescript(ESQUEMA)
    return con

def cuenta(con, plataforma, nombre, tipo=None, ext_id=None):
    con.execute("INSERT OR IGNORE INTO cuentas(plataforma,nombre,tipo,ext_id) VALUES(?,?,?,?)",
                (plataforma, nombre, tipo, ext_id))
    return con.execute("SELECT id FROM cuentas WHERE plataforma=? AND nombre=?",
                       (plataforma, nombre)).fetchone()[0]

def video(con, cuenta_id, ext_id, titulo, publicado=None, url=None):
    con.execute("""INSERT INTO videos(cuenta_id,ext_id,titulo,publicado,url) VALUES(?,?,?,?,?)
                   ON CONFLICT(cuenta_id,ext_id) DO UPDATE SET titulo=excluded.titulo""",
                (cuenta_id, ext_id, titulo, publicado, url))
    return con.execute("SELECT id FROM videos WHERE cuenta_id=? AND ext_id=?",
                       (cuenta_id, ext_id)).fetchone()[0]

def metricas(con, video_id, fecha=None, vistas=0, likes=0, comentarios=0, compartidos=0, guardados=0):
    con.execute("INSERT OR REPLACE INTO metricas_video VALUES(?,?,?,?,?,?,?)",
                (video_id, fecha or date.today().isoformat(), vistas, likes, comentarios, compartidos, guardados))

def seguidores(con, cuenta_id, n, fecha=None):
    con.execute("INSERT OR REPLACE INTO seguidores VALUES(?,?,?)",
                (cuenta_id, fecha or date.today().isoformat(), n))
