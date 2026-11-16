# Mapa real (videos de geografía) — USO POR DEFECTO
Carga en `index.html` (después de core.js): `mapa_datos.js` y `mapa.js` (rutas relativas a `catalogo/mapa/`). Ejemplo completo: `pruebas/mapa_real/demo/scenes.js` (EE. UU. → zoom a Puerto Rico → bandera con carita, 10 s).
- Textura: `blue_marble.jpg` (NASA, dominio público, 2576 px, recortada) → `mapaCargar(ruta, [-182.76, 172.6, 90, -62.97])`. Una imagen mundial 2:1 normal no necesita el segundo argumento. Para zoom muy cercano pide una de ≥8000 px.
- API: `mapaCam(u, claves)`, `mapaTextura`, `mapaEstados` (51 estados, colores por región), `mapaPaises(c, nombres)`, `mapaPunto`, `banderaPR` (modelo para otras banderas con carita).
- Datos: Natural Earth 50m (dominio público); incluye EE. UU., Puerto Rico, Cuba, Rep. Dominicana, Haití, Jamaica, Bahamas, México, Canadá. Para otros países añade nombres en `construir_datos.py` y regenera (`python3 -I construir_datos.py estados.geojson paises.geojson mapa_datos.js`).
- Render de prueba: `node render_nodo.js index.html carpeta_salida 0 300 30` (≈40 s por 10 s de video) o el flujo normal `eng/producir.sh`.
