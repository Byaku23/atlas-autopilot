"""Instagram (Business/Creator) y Facebook Page vía Graph API. Necesita un token de acceso de larga duración."""
import requests
import db

G = "https://graph.facebook.com/v21.0"

def _get(path, token, **p):
    r = requests.get(f"{G}/{path}", params={**p, "access_token": token}, timeout=30)
    r.raise_for_status()
    return r.json()

def importar_instagram(con, cfg):
    tok, ig = cfg["token"], cfg["ig_user_id"]
    cid = db.cuenta(con, "instagram", cfg["nombre"], cfg.get("tipo"), ig)
    db.seguidores(con, cid, _get(ig, tok, fields="followers_count")["followers_count"])
    n = 0
    for m in _get(f"{ig}/media", tok, fields="id,caption,timestamp,permalink,like_count,comments_count", limit=50)["data"]:
        ins = {}
        try:  # vistas/compartidos/guardados salen de insights (puede fallar en posts viejos)
            for x in _get(f"{m['id']}/insights", tok, metric="views,shares,saved")["data"]:
                ins[x["name"]] = x["values"][0]["value"]
        except requests.HTTPError:
            pass
        vid = db.video(con, cid, m["id"], (m.get("caption") or "")[:80], m["timestamp"][:10], m.get("permalink"))
        db.metricas(con, vid, vistas=ins.get("views", 0), likes=m.get("like_count", 0), comentarios=m.get("comments_count", 0),
                    compartidos=ins.get("shares", 0), guardados=ins.get("saved", 0))
        n += 1
    return n

def importar_facebook(con, cfg):
    tok, pg = cfg["token"], cfg["page_id"]
    cid = db.cuenta(con, "facebook", cfg["nombre"], cfg.get("tipo"), pg)
    db.seguidores(con, cid, _get(pg, tok, fields="followers_count")["followers_count"])
    n = 0
    for v in _get(f"{pg}/videos", tok, fields="id,title,description,created_time,permalink_url,likes.summary(true).limit(0),comments.summary(true).limit(0),video_insights.metric(total_video_views)", limit=50)["data"]:
        vistas = 0
        for x in v.get("video_insights", {}).get("data", []):
            vistas = x["values"][0]["value"]
        vid = db.video(con, cid, v["id"], (v.get("title") or v.get("description") or "")[:80], v["created_time"][:10], "https://facebook.com" + v.get("permalink_url", ""))
        db.metricas(con, vid, vistas=vistas, likes=v["likes"]["summary"]["total_count"], comentarios=v["comments"]["summary"]["total_count"])
        n += 1
    return n
