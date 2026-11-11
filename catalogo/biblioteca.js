// biblioteca.js — fondos y conjuntos ya montados, hechos SOLO con piezas que existen en los assets.js (no dibuja nada nuevo).
// Uso: añade en index.html, después de assets.js:   <script src="../../catalogo/biblioteca.js"></script>
// y copia a tu assets.js las piezas que cada función indica en «requiere» (de ejemplos/v01_perros/assets.js).
// Medido en la escena 0 de v01_perros: 10 % menos de código de escena y 0 cuadros de diferencia.

// Llanura nocturna con cielo estrellado, colinas y suelo (fondo de 4 escenas de v01_perros).  requiere: sky, hills
// o: suelo (y del horizonte), brillo (estrellas 0..1), colinas (0, 1 o 2 filas), x0 y ancho (extensión del suelo),
//    tierra / tierra2 / lejos / cerca (colores)
function llanuraNoche(t, o = {}) {
  const s = o.suelo === undefined ? 440 : o.suelo, x0 = o.x0 === undefined ? -500 : o.x0, w = o.ancho || 1600, n = o.colinas === undefined ? 2 : o.colinas;
  sky(t, o.brillo === undefined ? 1 : o.brillo);
  if (n > 0) hills(s + 15, o.lejos || '#0b1322', 22, .009, 1);
  if (n > 1) hills(s + 30, o.cerca || '#0f1a2c', 12, .021, 3);
  ctx.fillStyle = o.tierra || '#15223a'; ctx.fillRect(x0, s, w, 500);
  vgrad(s, s + 80, o.tierra2 || '#1c2c48', '#0d1626', x0, w);
}

// Hoguera completa: luz + llamas + chispas que suben (aparece 4 veces en v01_perros).  requiere: fire, fireLight, sparksUp
// x, y = base de las llamas. o: radio (de la luz), chispas (cuántas; 0 = ninguna), semilla, desfase (del parpadeo)
function hoguera(x, y, escala, t, o = {}) {
  fireLight(x, y - 8, o.radio || 190, t);
  fire(x, y, escala, t + (o.desfase || 0));
  if (o.chispas !== 0) sparksUp(x, y - 38, t, o.chispas, o.semilla);
}
