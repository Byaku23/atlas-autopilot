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

---

# Esquema v2 (etapa 2) — añade al v1; un archivo v1 sigue funcionando igual

`"esquema": 2`. Todo lo del v1 sigue valiendo. Novedades:

**Tiempos.** `"@palabra"` sin declarar = la primera vez que la narración dice esa palabra (`"@lobo"`, `"@años+0.3"`). Solo hay que declarar en `eventos` lo que necesite `despues`, `n`, `fin` o un tiempo fijo. `"golpes": {"lobo": 1}` = fuerza del golpe en esa palabra o evento.

**Nombres de capa.** Una pieza que aparece una sola vez en la escena se llama como ella (`"carne"`, `"humano"`); `id` solo hace falta si hay varias o para darle otro nombre (`"id": "lobo"`).

**Registro automático.** Las piezas disponibles se leen de los `.js` del video (`registro.py`): cualquier función de dibujo se puede usar por su nombre y parámetros originales (`{"usa": "sack", "s": 0.7}`). `piezas.json` añade nombres en español, anclas y gestos, y el compilador avisa si deja de coincidir con el código.

**Biblioteca** (`biblioteca.js`): `llanuraNoche` (suelo, brillo, colinas, x0, ancho, tierra, tierra2, lejos, cerca) y `hoguera` (x, y, escala, radio, chispas, semilla, desfase). Solo valen si el video trae las piezas que usan.

**Estilos.** `tema.estilos = {"destacado": {"color": "$acento", …}}` y en la capa `"estilo": "destacado"`: parámetros con nombre, para cualquier pieza. `texto` toma por defecto `x` 180, color blanco, contorno `$tinta` y resalte `$acento`.

**Valor `cambia`.** `{"cambia": [a, b], "en": "@lobo", "dur": 0.45, "curva": "eo"}` (números o colores).

**Anclas.** Un punto puede ser `[x, y]`, `"capa"` o `"capa.ancla"` (`"lobo.ojo"`, `"humano.mano"`); se calcula con la escala, el volteo y los gestos de la capa. Vale en `camara.capas[].mira` / `sigue`, en `desde` / `a` de las acciones y en `"sobre"` (capa pegada a un ancla). No tiene en cuenta `rot`.

**Acciones** (`"acciones": [...]` en la escena; todas llevan `en`):

| acción | parámetros | qué hace |
|---|---|---|
| `{"lanzar": objeto}` | `quien`, `desde`, `a`, `dur` 0.8, `altura` 80, `suelta` 0.05, `giro` {vel 10, hasta, reposo} | gesto «lanzar» de `quien`; el objeto vuela en arco desde su mano (o `desde`) hasta `a`, girando |
| `{"reaccionar": actor}` | `gesto` (por defecto el primero de la pieza), `intensidad` | aplica un gesto de `piezas.json`; arranca desde el valor que tuviera |
| `{"entrar": actor}` | `desde` (dirección o [dx, dy]), `dur` 0.35, `pasos`, `sombra` (color) + `luz`, `aparece` | llega a su posición; si sabe andar, da pasos; puede salir de la sombra o aparecer |
| `{"salir": actor}` | `hacia`, `dur` 0.5, `pasos`, `desvanece` | se va y deja de dibujarse |
| `{"desplazar": actor}` | `a` (punto) o `por` [dx, dy], `dur` 0.6, `altura`, `pasos` | se mueve; los desplazamientos se encadenan |

Qué puede hacer cada pieza lo dice `piezas.json` (`gestos`, `andar`, `tinte`, `giro`, `anclas`); el compilador rechaza lo que una pieza no sabe hacer.

**Límites conocidos (v2):** no valida que un texto quepa en pantalla; las anclas ignoran `rot` y la pose sentada del gato; los valores por defecto de los gestos salen de v01_perros; el audio sigue aparte.
