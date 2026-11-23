"""Convierte el token corto del Graph API Explorer en tokens de larga duración y los guarda en config.toml.
SOLO usa la página de Atlas del saber (id 901061146421888) y su Instagram; ignora cualquier otra página.
Los secretos se teclean aquí, no se muestran ni se envían a nadie más que a Meta."""
import getpass, re, sys
from pathlib import Path
import requests

APP_ID = "1862653855048435"
PAGE_ID = "901061146421888"
G = "https://graph.facebook.com/v21.0"
CFG = Path(__file__).with_name("config.toml")

def main():
    secreto = getpass.getpass("App Secret de la app (no se ve al pegar): ").strip()
    corto = getpass.getpass("Token del Explorer (no se ve al pegar): ").strip()
    r = requests.get(f"{G}/oauth/access_token", params={"grant_type": "fb_exchange_token", "client_id": APP_ID,
                     "client_secret": secreto, "fb_exchange_token": corto}, timeout=30)
    if not r.ok: sys.exit(f"Meta rechazó el token: {r.json().get('error', {}).get('message')}")
    largo = r.json()["access_token"]
    r = requests.get(f"{G}/{PAGE_ID}", params={"fields": "name,access_token,instagram_business_account", "access_token": largo}, timeout=30)
    if not r.ok: sys.exit(f"No pude leer la página de Atlas: {r.json().get('error', {}).get('message')}")
    p = r.json()
    ig = (p.get("instagram_business_account") or {}).get("id")
    print("Página:", p["name"], "| Instagram vinculado:", bool(ig))
    txt = CFG.read_text(encoding="utf-8") if CFG.exists() else ""
    txt = re.split(r"\n?\[\[(?:instagram|facebook)\]\]", txt)[0].rstrip() + "\n"
    if ig:
        txt += f'\n[[instagram]]\nnombre = "@atlasdelsaber"\ntipo = "Creator"\nig_user_id = "{ig}"\ntoken = "{p["access_token"]}"\n'
    txt += f'\n[[facebook]]\nnombre = "Atlas del saber (Zoe Lara)"\ntipo = "Page"\npage_id = "{PAGE_ID}"\ntoken = "{p["access_token"]}"\n'
    CFG.write_text(txt, encoding="utf-8")
    print("Listo: config.toml actualizado. Ahora abre panel.bat.")

if __name__ == "__main__":
    main()
