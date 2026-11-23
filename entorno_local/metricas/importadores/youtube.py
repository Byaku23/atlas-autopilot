"""YouTube: Data API v3 (estadísticas públicas de tu canal) con una clave de API.
Para analíticas privadas (retención, ingresos) haría falta OAuth + YouTube Analytics API (fase 2)."""
import requests
import db

API = "https://www.googleapis.com/youtube/v3"

def importar(con, cfg):
    key, canal = cfg["api_key"], cfg["channel_id"]
    cid = db.cuenta(con, "youtube", cfg["nombre"], cfg.get("tipo"), canal)
    ch = requests.get(f"{API}/channels", params={"part": "statistics,contentDetails", "id": canal, "key": key}, timeout=30).json()["items"][0]
    db.seguidores(con, cid, int(ch["statistics"].get("subscriberCount", 0)))
    lista = ch["contentDetails"]["relatedPlaylists"]["uploads"]
    ids, tok = [], None
    while True:
        r = requests.get(f"{API}/playlistItems", params={"part": "contentDetails", "playlistId": lista, "maxResults": 50, "pageToken": tok, "key": key}, timeout=30).json()
        ids += [i["contentDetails"]["videoId"] for i in r["items"]]
        tok = r.get("nextPageToken")
        if not tok: break
    for i in range(0, len(ids), 50):
        r = requests.get(f"{API}/videos", params={"part": "snippet,statistics", "id": ",".join(ids[i:i+50]), "key": key}, timeout=30).json()
        for v in r["items"]:
            s = v["statistics"]
            vid = db.video(con, cid, v["id"], v["snippet"]["title"], v["snippet"]["publishedAt"][:10], f"https://youtube.com/shorts/{v['id']}")
            db.metricas(con, vid, vistas=int(s.get("viewCount", 0)), likes=int(s.get("likeCount", 0)), comentarios=int(s.get("commentCount", 0)))
    return len(ids)
