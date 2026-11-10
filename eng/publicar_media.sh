#!/bin/bash
# publicar_media.sh ARCHIVO [ARCHIVO2 ...]
# Sube MP4/JPG a la rama "media" del repositorio y devuelve su URL pública (para Metricool).
# La rama "media" se reescribe con solo los 16 archivos más recientes para que el repo no crezca sin límite.
set -e
REPO=$(cd "$(dirname "$0")/.." && pwd)
URL=$(git -C "$REPO" remote get-url origin)
OWNER_REPO=$(echo "$URL" | sed -E 's#.*github.com[:/]##; s#\.git$##')
W=$(mktemp -d)
cd "$W"
git init -q && git remote add origin "$URL"
if git fetch -q --depth 1 origin media 2>/dev/null; then git checkout -q -b media FETCH_HEAD; else git checkout -q --orphan media; fi
for f in "$@"; do cp "$f" .; done
# conserva solo los 16 más recientes (por fecha de commit en el nombre: AAAA-MM-DD_...)
ls -1 | grep -v '^\.' | sort -r | tail -n +17 | xargs -r rm -f
git checkout -q --orphan nueva
git add -A
git -c user.name="Atlas Autopilot" -c user.email="noreply@anthropic.com" commit -qm "media: $(date -u +%F)"
git push -q -f origin nueva:media
for f in "$@"; do echo "https://raw.githubusercontent.com/$OWNER_REPO/media/$(basename "$f")"; done
rm -rf "$W"
