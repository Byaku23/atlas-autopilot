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

def _msg(e):
    try: return e.response.json()["error"]["message"]
    except Exception: return str(e.response.status_code)

def importar_facebook(con, cfg):
    tok, pg = cfg["token"], cfg["page_id"]
    cid = db.cuenta(con, "facebook", cfg["nombre"], cfg.get("tipo"), pg)
    try:
        db.seguidores(con, cid, _get(pg, tok, fields="followers_count")["followers_count"])
    except requests.HTTPError as e:
        print("  facebook seguidores:", _msg(e))
    n, vistos = 0, set()
    for edge in ("videos", "video_reels"):  # los reels salen en video_reels
        try:
            lista = _get(f"{pg}/{edge}", tok, fields="id,title,description,created_time,permalink_url", limit=50)["data"]
        except requests.HTTPError as e:
            print(f"  facebook {edge}:", _msg(e)); continue
        for v in lista:
            if v["id"] in vistos: continue
            vistos.add(v["id"])
            likes = coms = vistas = 0
            try:
                x = _get(v["id"], tok, fields="likes.summary(true).limit(0),comments.summary(true).limit(0)")
                likes, coms = x["likes"]["summary"]["total_count"], x["comments"]["summary"]["total_count"]
            except requests.HTTPError: pass
            try:
                for m in _get(f"{v['id']}/video_insights", tok, metric="total_video_views")["data"]:
                    vistas = m["values"][0]["value"]
            except requests.HTTPError: pass
            url = v.get("permalink_url") or ""
            db.metricas(con, db.video(con, cid, v["id"], (v.get("title") or v.get("description") or "")[:80],
                                      v["created_time"][:10], "https://facebook.com" + url if url.startswith("/") else url),
                        vistas=vistas, likes=likes, comentarios=coms)
            n += 1
    return n
