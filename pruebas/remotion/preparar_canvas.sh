#!/bin/bash
# Copia (sin modificar) el motor Canvas y la escena original a public/canvas para usarlos dentro de Remotion
cd "$(dirname "$0")"
cp ../../eng/core.js public/canvas/core.js
cp ../../ejemplos/v01_perros/assets.js public/canvas/assets.js
cp v1_canvas/s0.js v1_canvas/data.js public/canvas/
echo "boot([s0],TRS,{cap:{acc:AMB}});" > public/canvas/boot.js
