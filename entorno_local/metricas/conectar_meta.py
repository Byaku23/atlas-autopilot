"""Convierte el token corto del Graph API Explorer en tokens de larga duración y los guarda en config.toml.
SOLO usa la página del perfil activo (ATLAS_PERFIL) y su Instagram; ignora cualquier otra página (y nunca la cuenta personal).
Guarda el acceso en perfiles/<perfil>/config.toml: cada página tiene el suyo.
Los secretos se teclean aquí, no se muestran ni se envían a nadie más que a Meta."""
import getpass, re, sys
from pathlib import Path
import requests
import perfil

APP_ID = "1862653855048435"
G = "https://graph.facebook.com/v21.0"


def main():
    pf = perfil.datos(); CFG = perfil.carpeta() / "config.toml"; PAGE_ID = pf.get("page_id", "").strip()
    print("Perfil:", pf["titulo"])
    if not PAGE_ID:
        PAGE_ID = input("Escribe el ID numérico de la página de Facebook de este perfil: ").strip()
        t = (perfil.carpeta() / "perfil.toml"); t.write_text(t.read_text(encoding="utf-8").replace('page_id = ""', f'page_id = "{PAGE_ID}"'), encoding="utf-8")
    secreto = getpass.getpass("App Secret de la app (no se ve al pegar): ").strip()
    corto = getpass.getpass("Token del Explorer (no se ve al pegar): ").strip()
    r = requests.get(f"{G}/oauth/access_token", params={"grant_type": "fb_exchange_token", "client_id": APP_ID,
                     "client_secret": secreto, "fb_exchange_token": corto}, timeout=30)
    if not r.ok: sys.exit(f"Meta rechazó el token: {r.json().get('error', {}).get('message')}")
    largo = r.json()["access_token"]
    r = requests.get(f"{G}/me/accounts", params={"fields": "id,name,access_token", "limit": 100, "access_token": largo}, timeout=30)
    if not r.ok: sys.exit(f"No pude listar las páginas: {r.json().get('error', {}).get('message')}")
    # nos quedamos SOLO con la página de Atlas; las demás se descartan sin mirarlas
    mia = next((x for x in r.json().get("data", []) if x["id"] == PAGE_ID), None)
    if not mia: sys.exit("La página de este perfil no aparece: en el Explorer hay que marcarla al generar el token.")
    r = requests.get(f"{G}/{PAGE_ID}", params={"fields": "name,instagram_business_account", "access_token": mia["access_token"]}, timeout=30)
    if not r.ok: sys.exit(f"No pude leer la página del perfil: {r.json().get('error', {}).get('message')}")
    p = {**r.json(), "access_token": mia["access_token"]}
    ig = (p.get("instagram_business_account") or {}).get("id")
    print("Página:", p["name"], "| Instagram vinculado:", bool(ig))
    txt = CFG.read_text(encoding="utf-8") if CFG.exists() else ""
    txt = re.split(r"\n?\[\[(?:instagram|facebook)\]\]", txt)[0].rstrip() + "\n"
    if ig:
        txt += f'\n[[instagram]]\nnombre = "{pf.get('instagram') or p['name']}"\ntipo = "Creator"\nig_user_id = "{ig}"\ntoken = "{p["access_token"]}"\n'
    txt += f'\n[[facebook]]\nnombre = "{p['name']}"\ntipo = "Page"\npage_id = "{PAGE_ID}"\ntoken = "{p["access_token"]}"\n'
    CFG.write_text(txt, encoding="utf-8")
    print("Listo: config.toml actualizado. Ahora abre panel.bat.")

if __name__ == "__main__":
    main()
