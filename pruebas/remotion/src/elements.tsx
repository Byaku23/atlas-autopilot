// Dibujos de la escena portados de ejemplos/v01_perros/assets.js y eng/core.js a React + SVG
import React, { useId } from 'react';
import { R, cl, lerp, eo, ei, spring, TAU } from './engine';

export const N0 = '#050a14', N1 = '#15233b', AMB = '#ffb547', SIL = '#070a10';
const sid = () => useId().replace(/:/g, '_');
const hex = (h: string) => { h = h.replace('#', ''); return [0, 2, 4].map(i => parseInt(h.slice(i, i + 2), 16)); };
export const rgba = (h: string, a: number) => { const c = hex(h); return `rgba(${c[0]},${c[1]},${c[2]},${a})`; };
export const mixc = (a: string, b: string, t: number) => { const A = hex(a), B = hex(b); return '#' + A.map((v, i) => Math.round(lerp(v, B[i], cl(t))).toString(16).padStart(2, '0')).join(''); };
const ADD: React.CSSProperties = { mixBlendMode: 'plus-lighter' as any };

export const Glow: React.FC<{ x: number; y: number; r: number; color: string; a?: number; add?: boolean }> = ({ x, y, r, color, a = 1, add }) => {
  const id = sid(); if (r <= 0) return null;
  return <g style={add ? ADD : undefined}><defs><radialGradient id={id}><stop offset="0" stopColor={color} /><stop offset="1" stopColor="rgba(0,0,0,0)" /></radialGradient></defs><circle cx={x} cy={y} r={r} fill={`url(#${id})`} opacity={a} /></g>;
};

export const VGrad: React.FC<{ y0: number; y1: number; c0: string; c1: string; x0?: number; w?: number }> = ({ y0, y1, c0, c1, x0 = -200, w = 760 }) => {
  const id = sid();
  return <><defs><linearGradient id={id} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={c0} /><stop offset="1" stopColor={c1} /></linearGradient></defs><rect x={x0} y={y0} width={w} height={y1 - y0} fill={`url(#${id})`} /></>;
};

export const Sky: React.FC<{ t: number; k?: number; aurora?: boolean }> = ({ t, k = 1, aurora = true }) => {
  const stars = Array.from({ length: 90 }, (_, i) => {
    const x = R(i * 1.7 + 3) * 400 - 20, y = R(i * 2.3 + 3) * 700 - 30, s = R(i + 15);
    const a = .9 * k * (.3 + .7 * s) * (.6 + .4 * Math.sin(t * (1 + s * 3) + i));
    const z = s < .9 ? 1 : 1.8; return <rect key={i} x={x} y={y} width={z} height={z} fill="#fff" opacity={a} />;
  });
  const bands = aurora ? [0, 1, 2].map(j => {
    let d = ''; for (let x = -80; x <= 440; x += 10) { const y = 110 + j * 26 + Math.sin(x * .012 + t * .25 + j) * 28 + Math.sin(x * .031 - t * .4) * 10; d += (x === -80 ? 'M' : 'L') + x + ' ' + y; }
    return <path key={j} d={d} fill="none" stroke={j === 1 ? `rgba(90,255,190,${.09 * k})` : `rgba(120,180,255,${.07 * k})`} strokeWidth={26 - j * 6} style={ADD} />;
  }) : null;
  return <g><VGrad y0={-1400} y1={2040} c0={N0} c1={N1} x0={-3000} w={7000} />{stars}{bands}</g>;
};

export const Hills: React.FC<{ y: number; col: string; amp?: number; f?: number; ph?: number; x0?: number; x1?: number }> = ({ y, col, amp = 18, f = .012, ph = 0, x0 = -400, x1 = 1500 }) => {
  let d = `M${x0} 900`; for (let x = x0; x <= x1; x += 12) d += `L${x} ${y - amp * Math.sin(x * f + ph) - amp * .5 * Math.sin(x * f * 2.3 + ph * 2)}`;
  return <path d={d + `L${x1} 900Z`} fill={col} />;
};

export const FireLight: React.FC<{ x: number; y: number; r: number; t: number }> = ({ x, y, r, t }) => (
  <><Glow x={x} y={y} r={r * (1 + .04 * Math.sin(t * 13) + .03 * Math.sin(t * 7.3))} color="rgba(255,140,50,.42)" /><Glow x={x} y={y} r={r * .45} color="rgba(255,190,90,.35)" /></>
);

export const Fire: React.FC<{ x: number; y: number; s: number; t: number; seed?: number; filter?: string; extra?: boolean }> = ({ x, y, s, t, seed = 1, filter, extra }) => {
  const layers: [number, string][] = [[22, 'rgba(255,60,10,.55)'], [16, 'rgba(255,130,20,.7)'], [9, 'rgba(255,215,100,.9)']];
  const nF = extra ? 5 : 3;
  const flames = layers.map(([w, c], k) => Array.from({ length: nF }, (_, i) => {
    const ph = t * (7 + i * 2) + seed * 3 + i * 2, h = (44 + 14 * Math.sin(ph)) * (1 - k * .22) * (.8 + .4 * R(i + seed)), sw = Math.sin(ph * .8) * 5, o = (i - (nF - 1) / 2) * (extra ? 5 : 7);
    const d = `M${-w * .5 + o} 0Q${-w * .6 + sw + o} ${-h * .5} ${sw + o * .7} ${-h}Q${w * .6 + sw + o} ${-h * .5} ${w * .5 + o} 0Z`;
    return <path key={k + '_' + i} d={d} fill={c} />;
  }));
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <g fill="#2a160c"><rect x={-22} y={-4} width={44} height={7} transform="rotate(17.2)" /><rect x={-22} y={-4} width={44} height={7} transform="rotate(-17.2)" /></g>
      <g style={ADD} filter={filter}>{flames}</g>
    </g>
  );
};

export const SparksUp: React.FC<{ x: number; y: number; t: number; n?: number; seed?: number; blur?: boolean }> = ({ x, y, t, n = 14, seed = 1, blur }) => (
  <g filter={blur ? 'url(#soft)' : undefined}>{Array.from({ length: n }, (_, i) => {
    const ph = (t * (.5 + R(i + seed) * .6) + R(i * 3 + seed)) % 1, px = x + (R(i * 5 + seed) - .5) * 30 + Math.sin(t * 3 + i) * 6 * ph, py = y - ph * 120;
    return <rect key={i} x={px} y={py} width={1.6} height={1.6} fill={i % 3 ? '#ffb04a' : '#fff1b0'} opacity={(1 - ph) * .9} />;
  })}</g>
);

export const Human: React.FC<{ x: number; y: number; arm: number; rim?: string; col?: string }> = ({ x, y, arm, rim, col = SIL }) => {
  const ex = 4 + Math.cos(arm) * 14, ey = -50 + Math.sin(arm) * 14, bend = -.3;
  const P = (pts: number[][]) => pts.map(p => p.join(',')).join(' ');
  return (
    <g transform={`translate(${x} ${y})`} fill={col}>
      <polygon points={P([[-16, 0], [6, 0], [10, -6], [4, -16], [-4, -20], [-14, -22], [-20, -12]])} />
      <polygon points={P([[-16, -20], [6, -22], [10, -48], [2, -58], [-10, -56], [-18, -44]])} />
      {Array.from({ length: 6 }, (_, k) => <polygon key={k} points={P([[-18 + k * 5, -22], [-15 + k * 5, -15], [-12 + k * 5, -22]])} />)}
      <circle cx={4} cy={-66} r={8.5} /><polygon points={P([[-4, -70], [0, -78], [8, -76], [12, -68], [6, -72]])} />
      <path d={`M4 -50L${ex} ${ey}L${ex + Math.cos(arm + bend) * 14} ${ey + Math.sin(arm + bend) * 14}`} fill="none" stroke={col} strokeWidth={5.5} strokeLinecap="round" strokeLinejoin="round" />
      {rim && <path d="M12.1 -69.5A8.5 8.5 0 0 1 12.1 -62.5" fill="none" stroke={rim} strokeWidth={1.2} opacity={.7} />}
    </g>
  );
};

const WOLF = [[55, -38], [50, -33], [40, -31], [34, -26], [33, -14], [30, -10], [31, 0], [25, 0], [24, -12], [14, -14], [0, -15], [-16, -14], [-20, -11], [-18, 0], [-25, 0], [-28, -10], [-33, -18], [-36, -24], [-50, -10], [-46, -22], [-36, -30], [-30, -32], [-5, -33], [18, -36], [26, -42], [29, -48], [31, -58], [36, -50], [42, -46], [52, -41]];
export const Beast: React.FC<{ x: number; y: number; s: number; ph?: number; head?: number; col: string; rim?: string | null; eye?: string; flip?: boolean; eyeFilter?: string }> = ({ x, y, s, ph = 0, head = 0, col, rim, eye, flip, eyeFilter }) => {
  const id = sid(); const P = WOLF.map(p => [...p]); const a = Math.sin(ph) * 5, b = Math.sin(ph + Math.PI) * 5;
  P[6][0] += a; P[7][0] += a; P[13][0] += b; P[14][0] += b;
  const Q = head ? P.map((p, i) => (i <= 4 || i >= 24 ? [p[0] + head * 2, p[1] + head * 10] : p)) : P;
  const pts = Q.map(p => p.join(',')).join(' '), ex = 41 + head * 2, ey = -42 + head * 10;
  return (
    <g transform={`translate(${x} ${y}) scale(${s * (flip ? -1 : 1)} ${s})`}>
      <defs><clipPath id={id}><polygon points={pts} /></clipPath></defs>
      <polygon points={pts} fill={col} />
      {rim && <polygon points={pts} fill="none" stroke={rim} strokeWidth={3 / s + 1} opacity={.85} clipPath={`url(#${id})`} />}
      {eye && <g filter={eyeFilter}><Glow x={ex} y={ey} r={7} color={eye} a={.9} /><circle cx={ex} cy={ey} r={1.6} fill="#fff" /></g>}
    </g>
  );
};

export const Meat: React.FC<{ x: number; y: number; rot: number }> = ({ x, y, rot }) => (
  <g transform={`translate(${x} ${y}) rotate(${rot * 180 / Math.PI})`}>
    <ellipse cx={0} cy={0} rx={10} ry={7} fill="#b2402e" /><ellipse cx={-2} cy={-1} rx={6} ry={4} fill="#e07a5f" />
    <g transform="translate(10 0) scale(.6)" fill="#e9e2cf"><rect x={-10} y={-2} width={20} height={4} />{[[-10, -2.5], [-10, 2.5], [10, -2.5], [10, 2.5]].map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r={3} />)}</g>
  </g>
);

export const Snow: React.FC<{ t: number; n: number; seed: number; a: number; spd: number; big?: boolean }> = ({ t, n, seed, a, spd, big }) => (
  <g fill="#fff" filter={big ? 'url(#soft2)' : undefined}>{Array.from({ length: n }, (_, i) => {
    const x = (R(i + seed) * 420 + Math.sin(t * .6 + i) * 16) % 420 - 30, y = (R(i * 3 + seed) * 700 + t * spd * (.5 + R(i * 5))) % 700 - 30;
    return <circle key={i} cx={x} cy={y} r={big ? 2.5 + R(i) * 3 : .6 + R(i) * 1.4} opacity={a * (.3 + .6 * R(i * 7))} />;
  })}</g>
);

export const Sparks: React.FC<{ x: number; y: number; t: number; ts: number; n?: number; col?: string; spd?: number; life?: number; g?: number }> = ({ x, y, t, ts, n = 16, col = '#ffd070', spd = 130, life = .7, g = 260 }) => {
  const u = t - ts; if (u < 0 || u > life) return null;
  return <g fill={col}>{Array.from({ length: n }, (_, i) => { const a = R(i * 3.1 + ts * 7) * TAU, v = spd * (.35 + R(i + ts * 3)); return <rect key={i} x={x + Math.cos(a) * v * u - 1} y={y + Math.sin(a) * v * u + g * u * u - 1} width={2.4} height={2.4} opacity={1 - u / life} />; })}</g>;
};

export const Shock: React.FC<{ x: number; y: number; t: number; ts: number; col: string; R0?: number; w?: number; dur?: number }> = ({ x, y, t, ts, col, R0 = 120, w = 4, dur = .7 }) => {
  const u = (t - ts) / dur; if (u < 0 || u > 1) return null;
  return <circle cx={x} cy={y} r={R0 * eo(u)} fill="none" stroke={col} strokeWidth={w * (1 - u) + .5} opacity={1 - u} />;
};

// ---- texto con máscara: cada palabra sale de detrás de un borde ----
let _mc: CanvasRenderingContext2D | null = null;
const measure = (s: string, font: string) => { _mc = _mc || document.createElement('canvas').getContext('2d')!; _mc.font = font; return _mc.measureText(s).width; };
const DISP = '"Inter Display","Inter",sans-serif';
export const MText: React.FC<{ s: string; x: number; y: number; sz: number; col: string; t: number; t0: number; w?: number; out?: number; od?: number; stg?: number; d?: number; stroke?: string; sw?: number; sh?: string; hl?: number[]; hc?: string; pro?: boolean }> =
  ({ s, x, y, sz, col, t, t0, w, out, od = .35, stg = .06, d = .42, stroke, sw, sh, hl, hc = '#ffd84a', pro }) => {
    const uid = sid(); const words = s.split(' ');
    if (t < t0 - .001) return null; if (out !== undefined && t > out + od + words.length * stg) return null;
    const font = `900 ${sz}px ${DISP}`, sp = Math.max(measure(' ', font), sz * .28), W = words.map(q => measure(q, font)), maxW = w || 1e9;
    const lines: [number[], number][] = []; let cur: number[] = [], cw = 0;
    words.forEach((_, i) => { const add = (cur.length ? sp : 0) + W[i]; if (cur.length && cw + add > maxW) { lines.push([cur, cw]); cur = [i]; cw = W[i]; } else { cur.push(i); cw += add; } });
    if (cur.length) lines.push([cur, cw]);
    const lh = sz * 1.12; let k = 0;
    return (
      <g>{lines.map((L, li) => {
        const ly = y + (li - (lines.length - 1) / 2) * lh, lx = x - L[1] / 2; let cx = lx;
        const items = L[0].map(i => {
          const ts = t0 + k * stg, qq = (t - ts) / d; const q = pro ? Math.min(1.25, spring(qq, 11, 6.5)) : eo(qq);
          let dy = (1 - q) * sz * 1.25; if (out !== undefined && t > out) dy -= ei((t - out - k * stg * .6) / od) * sz * 1.3;
          const px = cx; cx += W[i] + sp; k++;
          if (qq <= 0) return null;
          const c = hl && hl.includes(i) ? hc : col;
          const filt = [sh ? `drop-shadow(0 0 ${(pro ? 7 : 6)}px ${sh})` : '', pro ? `blur(${Math.max(0, (1 - cl(qq * 1.6)) * 3).toFixed(2)}px)` : ''].filter(Boolean).join(' ');
          return <text key={i} x={px} y={ly + dy} fontFamily={DISP} fontWeight={900} fontSize={sz} dominantBaseline="central" fill={c} stroke={stroke} strokeWidth={stroke ? (sw || Math.max(3, sz * .16)) : 0} strokeLinejoin="round" paintOrder="stroke" style={{ filter: filt || undefined }}>{words[i]}</text>;
        });
        return <g key={li} clipPath={`url(#${uid}${li})`}><defs><clipPath id={`${uid}${li}`}><rect x={lx - sz} y={ly - sz * .68} width={L[1] + sz * 2} height={sz * 1.36} /></clipPath></defs>{items}</g>;
      })}</g>
    );
  };
