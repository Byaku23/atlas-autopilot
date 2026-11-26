"""Datos de ejemplo (INVENTADOS) para ver el panel sin credenciales:  python demo.py
Crea metricas_demo.db; el panel la usa si no existe metricas.db real."""
import random, db
from datetime import date, timedelta
from pathlib import Path

db.RUTA = Path(__file__).with_name("metricas_demo.db")
db.RUTA.unlink(missing_ok=True)
random.seed(7)
con = db.conectar()
hoy = date.today()
temas = ["Perros: por qué mueven la cola", "Gatos y su ronroneo", "Segunda Guerra Mundial en un mapa",
         "Los romanos y el concreto", "El Titanic", "Cleopatra", "La Gran Muralla", "Los vikingos"]
escala = {"youtube": 1.0, "instagram": 2.5, "tiktok": 1.8, "facebook": 0.4}
for plat, esc in escala.items():
    cid = db.cuenta(con, plat, f"Atlas del saber ({plat})", "Creator")
    base = {"youtube": 800, "instagram": 1500, "tiktok": 600, "facebook": 200}[plat]
    for d in range(30, -1, -1):
        base += random.randint(0, 25)
        db.seguidores(con, cid, base, (hoy - timedelta(d)).isoformat())
    for i, t in enumerate(temas):
        pub = hoy - timedelta(days=28 - i * 3)
        vid = db.video(con, cid, f"{plat}-{i}", t, pub.isoformat(), None)
        total = int(random.lognormvariate(8, 1) * esc)
        for d in range((hoy - pub).days + 1):
            f = (pub + timedelta(d)).isoformat()
            p = min(1, (d + 1) / 6) ** 0.5
            v = int(total * p)
            db.metricas(con, vid, f, v, int(v * .06), int(v * .004), int(v * .01), int(v * .008))
con.commit()
print("Listo:", db.RUTA)
