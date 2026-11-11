# Esquema declarativo de video — versión 1 (prototipo, etapa 1)

Un video se describe en `video.json`. `compilar.py` lo valida y genera lo que el motor Canvas ya usa; `interp.js` lo dibuja con `eng/core.js`.
No sustituye al flujo actual: las tareas programadas no lo usan todavía.

    python3 catalogo/declarativo/compilar.py CARPETA            # valida y genera index.html, data.js, ev.json, video.js
    python3 catalogo/declarativo/compilar.py CARPETA --validar  # solo valida

## Convención de nombres (sin excepciones)
- Todas las claves en español, minúsculas, sin tildes ni ñ, en `camelCase` si llevan dos palabras (`colorResalta`, `zDur`).
- Los nombres de pieza (`usa`) y sus parámetros están en `registro.json`; no hay sinónimos: cada cosa tiene un solo nombre.
- Unidades: segundos, píxeles del lienzo lógico 360×640, ángulos en radianes, colores `#rrggbb` o `rgba(...)`.
- `id` de capas y nombres de eventos: letras sin tilde, números y `_`. Reservados: `escena`, `trN`.

## Versionado
- `"esquema": 1` es obligatorio. Compilador e intérprete rechazan una versión que no conocen.
- Cambio compatible (añadir piezas, operadores o claves opcionales): se mantiene el número.
- Cambio incompatible (renombrar o cambiar el significado de algo): se sube el número y el intérprete conserva el código de las versiones anteriores, para que los videos viejos se rendericen igual.

## Raíz
| clave | obligatorio | significado |
|---|---|---|
| `esquema` | sí | versión del formato (1) |
| `duracion` | sí | segundos totales |
| `escenas` | sí | lista de escenas, en orden |
| `eventos` | no | momentos con nombre (ver abajo) |
| `tema` | no | colores con nombre; se usan como `"$nombre"`. `acento` es el color del subtítulo activo |
| `recursos` | no | archivos de dibujos (ruta desde la raíz del repo); se copian a la carpeta |
| `scripts` | no | archivos JavaScript a mano de la carpeta del video (escenas personalizadas) |
| `titulo` | no | texto libre |

## Tiempo y sincronización con la voz
- `eventos.nombre = {"palabra": "lobo"}`: el instante en que la narración dice esa palabra (usa `script.txt` y `st.txt`, con `eng/words.py`, igual que `ev.py`). Opcionales: `despues` (buscar a partir de ese segundo), `n` (n-ésima aparición), `fin` (final de la palabra), `mas` (desfase), `golpe` (temblor de cámara 0–1).
- `eventos.nombre = {"t": 4.2}`: instante fijo, para pruebas sin voz.
- En cualquier lugar donde va un tiempo: un número de segundos, `"@nombre"`, `"@nombre+0.3"`, `"@nombre-0.05"`. `"@escena"` es el inicio de la escena actual.

## Escena
`{"id", "inicio", "transicion", "fondo": [capas], "mundo": [capas], "pantalla": [capas], "camara"}`
- `inicio`: tiempo (la primera es 0). `transicion`: la de entrada, con el formato del motor (`{"type": "morph", ...}`).
- `fondo` y `pantalla` se dibujan fijos; `mundo` se dibuja a través de la cámara. Las capas se dibujan en el orden escrito.
- **Escena a mano:** `{"inicio": ..., "js": "s4"}` usa la función `s4(t,u,p,L)` definida en uno de los `scripts`. Se pueden mezclar libremente con escenas declarativas.

## Capa
`{"usa": "pieza", "id": "nombre", ...parámetros, "visible": {"desde", "hasta"}, "trayecto": {...}}`
- Los parámetros válidos de cada pieza están en `registro.json` (`args`, `o`); los obligatorios en `req`.
- `id` permite que otras capas o la cámara la referencien.
- `trayecto: {"arco": {"de": [x,y], "a": [x,y], "inicio", "dur", "altura", "curva"}}`: la posición recorre un arco (objeto lanzado).

## Valores (cualquier parámetro puede variar en el tiempo; todos a la vez)
| forma | significado |
|---|---|
| `12`, `"#fff"`, `"texto"`, `true`, `[1, 2]` | constante |
| `"$acento"` | color del tema |
| `{"claves": [{"t", "v", "curva"}, ...]}` | valores clave; antes del primero vale el primero, después del último el último. `v` número o color. `curva` (de llegada): `lin eo ei ez eio eb eel` |
| `{"rampa": {"desde", "hasta", "vel", "antes", "luego"}}` | crece `vel` por segundo dentro de la ventana (pasos, giros) |
| `{"de": "id.prop", "por": 1, "mas": 0}` | el valor de un parámetro de otra capa |
| `{"suma": [valor, valor, ...]}` | suma de varios movimientos a la vez |
| `{"onda": {"amp", "frec", "fase"}}` | oscilación continua |
| `{"rebote": {"en", "amp", "k", "d"}}` | sacudida que se apaga a partir de un momento |
| `{"color": "#rrggbb", "alfa": valor}` | color con transparencia variable (si alfa ≤ 0, no se dibuja ese rasgo) |

## Cámara
`{"claves": [{"t", "x", "y", "z", "rot", "curva"}], "capas": [...]}`. Cada capa de cámara se mezcla sobre lo anterior desde `desde`, durante `mezcla` segundos:
- `{"sigue": "id", "retraso": 0.22, ...}` persigue a una capa; `{"mira": [valorX, valorY], ...}` se acerca a un punto.
- Opcionales: `curva`, `z` (zoom final), `zDur`, `zCurva`.

## Determinismo
El intérprete no usa azar ni reloj: cada cuadro depende solo de `t` y de los datos. Comprobado renderizando dos veces y comparando los 225 cuadros.

## Qué valida `compilar.py` (sin IA)
Versión del esquema; claves desconocidas (con sugerencia); piezas, parámetros y opciones del registro; parámetros obligatorios; tipos y rangos; curvas; colores del tema; existencia de recursos, scripts y funciones `js`; eventos usados pero no declarados; palabras que no están en la narración; orden de escenas; eventos fuera de la duración; ids repetidos; referencias `de`/`sigue` a capas o propiedades inexistentes.
No valida todavía: textos que se salen del margen (hace falta medir fuentes), ni que una pieza quede fuera de cámara.
