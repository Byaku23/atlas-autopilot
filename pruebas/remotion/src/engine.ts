// Utilidades matemáticas portadas de eng/core.js (mismas fórmulas, mismos nombres)
export const TAU = Math.PI * 2;
export const R = (n: number) => { const x = Math.sin(n * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
export const cl = (x: number, a = 0, b = 1) => Math.max(a, Math.min(b, x));
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
export const eo = (x: number) => 1 - Math.pow(1 - cl(x), 3);
export const ei = (x: number) => Math.pow(cl(x), 3);
export const eio = (x: number) => { x = cl(x); return x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; };
export const win = (t: number, a: number, b: number) => cl((t - a) / (b - a));
export const spring = (u: number, k = 14, d = 6) => (u <= 0 ? 0 : 1 - Math.exp(-d * u) * Math.cos(k * u));
export const wob = (u: number, k = 18, d = 7) => (u <= 0 ? 0 : Math.exp(-d * u) * Math.sin(k * u));

// Eventos de la escena (sin voz: escritos a mano para 8 s)
export const E = { h_err: 2.2, h_int: 2.9, h_dar: 4.0, h_lobo: 5.4 };
export const HITS: [number, number][] = [[0, .5], [2.2, .3], [5.4, 1.0]];
export const DUR = 8;

export type Cam = { x: number; y: number; z: number };
export function camAt(u: number, keys: number[][]): Cam {
  if (u <= keys[0][0]) return { x: keys[0][1], y: keys[0][2], z: keys[0][3] };
  for (let i = 0; i < keys.length - 1; i++) {
    const a = keys[i], b = keys[i + 1];
    if (u < b[0]) { const f = eio((u - a[0]) / (b[0] - a[0])); return { x: lerp(a[1], b[1], f), y: lerp(a[2], b[2], f), z: Math.exp(lerp(Math.log(a[3]), Math.log(b[3]), f)) }; }
  }
  const k = keys[keys.length - 1]; return { x: k[1], y: k[2], z: k[3] };
}
export function follow(pos: (t: number) => number[], t: number, lag = .35, n = 8) {
  let x = 0, y = 0, w = 0;
  for (let i = 0; i < n; i++) { const q = pos(t - lag * i / n), k = 1 - i / n * .7; x += q[0] * k; y += q[1] * k; w += k; }
  return [x / w, y / w];
}
export function shakeAmt(t: number) { let s = 0; for (const h of HITS) if (t >= h[0] && t - h[0] < .6) s += h[1] * Math.exp(-(t - h[0]) * 9); return Math.min(s, 1.8); }
export function flashAmt(t: number) { let s = 0; for (const h of HITS) if (t >= h[0] && h[1] >= .6) s += Math.exp(-(t - h[0]) * 16) * Math.min(.35, .1 + h[1] * .12); return Math.min(s, .45); }

// movimiento de los personajes (igual que s0 del ejemplo)
export const meatPos = (t: number) => { const q = cl((t - E.h_dar - .05) / .8); return [lerp(118, 226, q), lerp(374, 433, q) - Math.sin(q * Math.PI) * 110]; };
export const W0X = (t: number) => (t < E.h_lobo ? 302 : lerp(302, 284, eo((t - E.h_lobo) / .35)));
export const wEye = (t: number) => [W0X(t) - 41 * 1.05, 442 - 42 * 1.05 + (t > E.h_lobo + .3 ? .35 * eo((t - E.h_lobo - .3) / .3) * 10 * 1.05 : 0)];
export function camera0(t: number): Cam {
  const tD = E.h_dar, tL = E.h_lobo; let c: Cam;
  if (t < tD) c = camAt(t, [[0, 198, 382, 1.5], [tD, 190, 375, 1.25]]);
  else {
    const f = follow(meatPos, t, .22), k = eo((t - tD) / .35);
    c = { x: lerp(190, f[0], k), y: lerp(375, f[1], k), z: lerp(1.25, 1.5, eo((t - tD) / .9)) };
    if (t > tL - .1) { const q = eio((t - tL + .1) / .5), ey = wEye(t); c = { x: lerp(c.x, ey[0], q), y: lerp(c.y, ey[1], q), z: lerp(c.z, 2.3, q) }; }
  }
  return c;
}
