"""Panel de métricas:  streamlit run panel.py"""
import sqlite3
import pandas as pd
import streamlit as st
import db, perfil

TITULO = perfil.datos()["titulo"]
st.set_page_config(page_title=f"{TITULO} · Métricas", layout="wide")
real = db.ruta().exists()
ruta = db.ruta() if real else db.ruta().with_name("metricas_demo.db")
if not ruta.exists():
    st.error("No hay datos. Ejecuta `python actualizar.py` (con config.toml) o `python demo.py` para ver ejemplos.")
    st.stop()
if not real:
    st.warning("Mostrando datos de EJEMPLO inventados (metricas_demo.db). Configura config.toml y ejecuta actualizar.py.")

con = sqlite3.connect(ruta)
ult = """SELECT m.* FROM metricas_video m JOIN (SELECT video_id, MAX(fecha) f FROM metricas_video GROUP BY video_id) u
         ON u.video_id=m.video_id AND u.f=m.fecha"""
videos = pd.read_sql(f"""SELECT c.plataforma, c.nombre cuenta, v.titulo, v.publicado, v.url,
    m.vistas, m.likes, m.comentarios, m.compartidos, m.guardados
    FROM videos v JOIN cuentas c ON c.id=v.cuenta_id JOIN ({ult}) m ON m.video_id=v.id""", con)
seg = pd.read_sql("SELECT c.plataforma, c.nombre cuenta, s.fecha, s.seguidores FROM seguidores s JOIN cuentas c ON c.id=s.cuenta_id", con)
hist = pd.read_sql("""SELECT c.plataforma, v.titulo, m.fecha, m.vistas FROM metricas_video m
    JOIN videos v ON v.id=m.video_id JOIN cuentas c ON c.id=v.cuenta_id""", con)

st.title(f"{TITULO} · Métricas")
plats = sorted(videos.plataforma.unique())
sel = st.sidebar.multiselect("Plataformas", plats, default=plats)
videos, seg, hist = (d[d.plataforma.isin(sel)] for d in (videos, seg, hist))

# Resumen por cuenta
res = videos.groupby("cuenta").agg(videos=("titulo", "count"), vistas=("vistas", "sum"), likes=("likes", "sum"),
                                   comentarios=("comentarios", "sum"), compartidos=("compartidos", "sum")).reset_index()
if not seg.empty:
    actual = seg.sort_values("fecha").groupby("cuenta").seguidores.last().rename("seguidores")
    primero = seg.sort_values("fecha").groupby("cuenta").seguidores.first()
    res = res.merge(actual, on="cuenta", how="left")
    res["seguidores_nuevos"] = res.cuenta.map(actual - primero)
c = st.columns(4)
c[0].metric("Vistas totales", f"{videos.vistas.sum():,}")
c[1].metric("Likes totales", f"{videos.likes.sum():,}")
c[2].metric("Seguidores (suma)", f"{int(res.get('seguidores', pd.Series([0])).sum()):,}")
c[3].metric("Videos", len(videos))

t1, t2, t3 = st.tabs(["Por cuenta", "Por video", "Evolución"])
with t1:
    st.dataframe(res, hide_index=True, width="stretch")
    if not seg.empty:
        st.subheader("Seguidores en el tiempo")
        st.line_chart(seg.pivot_table(index="fecha", columns="cuenta", values="seguidores"))
with t2:
    orden = st.selectbox("Ordenar por", ["vistas", "likes", "comentarios", "compartidos", "guardados"])
    v = videos.sort_values(orden, ascending=False).copy()
    v["likes_%"] = (v.likes / v.vistas.where(v.vistas > 0) * 100).round(2)
    st.dataframe(v, hide_index=True, width="stretch",
                 column_config={"url": st.column_config.LinkColumn("enlace")})
    st.subheader("Comparar el mismo tema entre plataformas")
    st.bar_chart(v.pivot_table(index="titulo", columns="plataforma", values="vistas", aggfunc="sum"))
with t3:
    t = st.selectbox("Video", sorted(hist.titulo.unique()))
    st.line_chart(hist[hist.titulo == t].pivot_table(index="fecha", columns="plataforma", values="vistas"))
