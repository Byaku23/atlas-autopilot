// Escena 0 del video de los perros ("el error más inteligente") en Remotion.
// pro=false: equivalente fiel al motor Canvas.  pro=true: versión mejorada con capacidades de Remotion/SVG/CSS.
import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion';
import { CameraMotionBlur } from '@remotion/motion-blur';
import { R, cl, lerp, eo, ei, eio, win, spring, TAU, E, DUR, camera0, meatPos, W0X, shakeAmt, flashAmt, wEye } from './engine';
import { AMB, FireLight, Fire, SparksUp, Human, Beast, Meat, Snow, Sparks, Shock, MText, Sky, Hills, VGrad, Glow, rgba, mixc } from './elements';

const Defs: React.FC<{ frame: number }> = ({ frame }) => (
  <defs>
    <filter id="soft" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.1" /></filter>
    <filter id="soft2" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2.2" /></filter>
    <filter id="far" x="-5%" y="-5%" width="110%" height="110%"><feGaussianBlur stdDeviation="1.6" /></filter>
    <filter id="bloom" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
    <filter id="flame" x="-40%" y="-40%" width="180%" height="180%">
      <feTurbulence type="fractalNoise" baseFrequency="0.035 0.06" numOctaves="2" seed={frame % 40} result="n" />
      <feDisplacementMap in="SourceGraphic" in2="n" scale="9" />
      <feGaussianBlur stdDeviation="0.6" />
    </filter>
    <filter id="grain" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="2" seed={frame % 60} /><feColorMatrix type="saturate" values="0" /></filter>
    <radialGradient id="vig" gradientUnits="userSpaceOnUse" cx="180" cy="320" r="430"><stop offset=".465" stopColor="rgba(0,0,0,0)" /><stop offset="1" stopColor="rgba(0,0,0,.45)" /></radialGradient>
    <radialGradient id="vig2" gradientUnits="userSpaceOnUse" cx="180" cy="320" r="400"><stop offset=".35" stopColor="rgba(0,0,0,0)" /><stop offset="1" stopColor="rgba(0,0,0,.62)" /></radialGradient>
    <linearGradient id="grade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#2a5aa8" /><stop offset=".55" stopColor="#6a4a7a" /><stop offset="1" stopColor="#ff8a3a" /></linearGradient>
  </defs>
);

export const Scene0: React.FC<{ pro?: boolean; mb?: number }> = ({ pro = false, mb = 4 }) => {
  const MB = mb;
  const frame = useCurrentFrame(); const { fps } = useVideoConfig(); const t = frame / fps;
  const tD = E.h_dar, tL = E.h_lobo;

  // ---- cámara ----
  let c = camera0(t);
  let roll = 0;
  if (pro) {
    // resorte con rebote al acercarse al lobo + mirada de cámara en mano + "dive" final al ojo (la entrada a la siguiente escena)
    const ey = wEye(t); const dive = ei((t - (DUR - 1.0)) / .8);
    c = { x: c.x + Math.sin(t * 1.7) * .9 + Math.sin(t * 3.1) * .35, y: c.y + Math.sin(t * 1.3 + 1) * .7, z: c.z * (1 + .05 * Math.sin(Math.max(0, t - tL) * 9) * Math.exp(-(t - tL) * 3) * (t > tL ? 1 : 0)) };
    if (dive > 0) c = { x: lerp(c.x, ey[0], dive), y: lerp(c.y, ey[1], dive), z: Math.exp(lerp(Math.log(c.z), Math.log(14), dive)) };
    roll = Math.sin(t * .9) * .35 + (t > tL ? wobbleRoll(t - tL) : 0);
  }
  const sh = shakeAmt(t), n30 = Math.floor(t * 30);
  const dx = (R(n30) - .5) * 8 * sh, dy = (R(n30 + 99) - .5) * 8 * sh, zz = 1 + .012 * sh;
  const lit = t < tL ? 0 : eo((t - tL) / .45), wx = W0X(t);
  const arm = t < tD - .25 ? .35 : t < tD ? lerp(.35, -2.4, eo((t - tD + .25) / .25)) : lerp(-2.4, -.2, eo((t - tD) / .22));
  const bloom = pro ? 'url(#bloom)' : undefined;
  const px = pro ? (c.x - 190) : 0; // parallax: las capas lejanas se mueven menos que el primer plano

  const world = (
    <g transform={`translate(180 320) scale(${c.z}) translate(${-c.x} ${-c.y})`}>
      <Sky t={t} />
      {pro && <g transform={`translate(${px * .5} 0)`} filter="url(#far)"><Hills y={430} col="#0a1120" amp={34} f={.006} ph={5} x0={-900} x1={1900} /></g>}
      <g transform={`translate(${px * (pro ? .3 : 0)} 0)`} filter={pro ? 'url(#far)' : undefined}><Hills y={455} col="#0b1322" amp={22} f={.009} ph={1} /></g>
      <g transform={`translate(${px * (pro ? .15 : 0)} 0)`}><Hills y={470} col="#0f1a2c" amp={12} f={.021} ph={3} /></g>
      <rect x={-500} y={440} width={1600} height={500} fill="#15223a" /><VGrad y0={440} y1={520} c0="#1c2c48" c1="#0d1626" x0={-500} w={1600} />
      <FireLight x={142} y={430} r={190} t={t} />
      {lit > 0 && <Glow x={260} y={420} r={90} color={`rgba(255,140,50,${.3 * lit})`} />}
      {pro && <>
        <g transform="translate(142 468) scale(1 .13)"><Glow x={0} y={0} r={120 + 8 * Math.sin(t * 11)} color="rgba(255,150,60,.5)" add /></g>
        <GodRays x={142} y={420} t={t} />
      </>}
      <Fire x={142} y={438} s={.8} t={t} filter={pro ? 'url(#flame)' : undefined} extra={pro} />
      {pro && <g filter="url(#bloom)"><Fire x={142} y={438} s={.8} t={t + .03} extra /></g>}
      <SparksUp x={142} y={400} t={t} blur={false} />
      {pro && <><SparksUp x={142} y={405} t={t * 1.1} n={30} seed={7} blur /><SparksUp x={150} y={410} t={t * .8} n={16} seed={11} blur /></>}
      <Human x={100} y={440} arm={arm} rim="#ff9a4a" />
      <Beast x={wx} y={442} s={1.05} flip col={mixc('#04060a', '#140d08', lit)} rim={lit > 0 ? rgba('#ff9a4a', .9 * lit) : null} eye="rgba(255,215,110,.95)"
        ph={t > tL && t < tL + .7 ? (t - tL) * 15 : 0} head={t > tL + .55 ? .35 * eo((t - tL - .55) / .35) : 0} eyeFilter={bloom} />
      {t > tD + .05 && (() => { const q = meatPos(t); return <Meat x={q[0]} y={q[1]} rot={t < tL - .05 ? (t - tD) * 10 : 7.5} />; })()}
      {t > tL - .02 && <Sparks x={226} y={432} t={t} ts={tL} n={pro ? 36 : 14} col="#ffd27a" spd={110} life={.6} g={200} />}
      <Snow t={t} n={50} seed={4} a={.5} spd={18} />
      {pro && <Snow t={t} n={14} seed={9} a={.35} spd={30} big />}
    </g>
  );

  const texts = (
    <g>
      <Shock x={180} y={330} t={t} ts={tL} col="rgba(255,200,120,.8)" R0={150} w={3} dur={.6} />
      {pro && <Shock x={180} y={330} t={t} ts={tL + .08} col="rgba(255,235,190,.5)" R0={240} w={2} dur={.8} />}
      <MText s="HACE 15.000 AÑOS" x={180} y={96} sz={31} col="#fff" t={t} t0={-.6} stroke="rgba(0,0,0,.55)" sw={6} out={2.05} hl={[1]} hc={AMB} pro={pro} sh={pro ? 'rgba(255,255,255,.25)' : undefined} />
      <MText s="EL ERROR MÁS" x={180} y={82} sz={25} col="#fff" t={t} t0={E.h_err - .06} stroke="rgba(0,0,0,.55)" sw={5} out={tD + .15} pro={pro} />
      <MText s="INTELIGENTE" x={180} y={118} sz={40} col={AMB} t={t} t0={E.h_int - .04} stroke="rgba(40,15,0,.7)" sw={6} out={tD + .2} sh="rgba(255,160,50,.7)" pro={pro} />
      {pro && t > E.h_int + .25 && t < tD + .2 && <rect x={180 - 92} y={141} width={184 * eo((t - E.h_int - .25) / .35)} height={3} rx={1.5} fill={AMB} opacity={1 - win(t, tD, tD + .2)} filter="url(#bloom)" />}
    </g>
  );

  // el desenfoque de movimiento solo se aplica cuando la cámara se mueve rápido (es lo que más cuesta renderizar)
  const fastCam = (t > tD - .1 && t < tD + 1.2) || (t > tL - .2 && t < tL + .9) || t > DUR - 1.1;
  const fl = flashAmt(t);
  const diveFlash = pro ? win(t, DUR - .55, DUR - .12) : 0;
  const content = (
    <svg width={720} height={1280} viewBox="0 0 360 640" style={{ display: 'block' }}>
      <Defs frame={frame} />
      <rect width={360} height={640} fill="#000" />
      <g transform={`translate(${180 + dx} ${320 + dy}) scale(${zz}) rotate(${roll}) translate(-180 -320)`}>{world}{texts}</g>
      {pro && <>
        <rect width={360} height={640} fill="url(#grade)" opacity={.22} style={{ mixBlendMode: 'soft-light' }} />
        {t > tL && <LensFlare t={t} />}
      </>}
      {fl > .01 && <rect width={360} height={640} fill={`rgba(255,250,240,${fl})`} />}
      <rect width={360} height={640} fill={pro ? 'url(#vig2)' : 'url(#vig)'} />
      {pro
        ? <rect width={360} height={640} filter="url(#grain)" opacity={.08} style={{ mixBlendMode: 'overlay' }} />
        : <g fill="rgba(255,255,255,.04)">{Array.from({ length: 50 }, (_, g) => <rect key={g} x={R(g + Math.floor(t * 24) * 7) * 360} y={R(g * 3 + Math.floor(t * 24)) * 640} width={1} height={1} />)}</g>}
      <rect width={360} height={2.5} fill="rgba(255,255,255,.12)" /><rect width={360 * cl(t / DUR)} height={2.5} fill={AMB} />
      {diveFlash > 0 && <rect width={360} height={640} fill={`rgba(255,255,255,${.85 * diveFlash})`} />}
      {t > DUR - .5 && <rect width={360} height={640} fill={`rgba(0,0,0,${cl((t - (DUR - .5)) / .5)})`} />}
    </svg>
  );

  return (
    <AbsoluteFill style={{ background: '#000' }}>
      {pro && MB > 1 && fastCam ? <CameraMotionBlur samples={MB} shutterAngle={200}>{content}</CameraMotionBlur> : content}
    </AbsoluteFill>
  );
};

const wobbleRoll = (u: number) => Math.exp(-u * 4) * Math.sin(u * 14) * 1.1;

const GodRays: React.FC<{ x: number; y: number; t: number }> = ({ x, y, t }) => (
  <g style={{ mixBlendMode: 'plus-lighter' }} opacity={.5} filter="url(#soft2)">
    <defs><radialGradient id="rayg" gradientUnits="userSpaceOnUse" cx={x} cy={y} r={300}><stop offset="0" stopColor="rgba(255,170,80,.30)" /><stop offset="1" stopColor="rgba(255,170,80,0)" /></radialGradient></defs>
    {Array.from({ length: 7 }, (_, i) => { const a = -Math.PI / 2 + (i - 3) * .3 + Math.sin(t * .5 + i * 1.7) * .06, L = 320, w = .035 + .02 * R(i); return <polygon key={i} points={`${x},${y} ${x + Math.cos(a - w) * L},${y + Math.sin(a - w) * L} ${x + Math.cos(a + w) * L},${y + Math.sin(a + w) * L}`} fill="url(#rayg)" />; })}
  </g>
);

// destello de lente (anamórfico) sobre el ojo del lobo
const LensFlare: React.FC<{ t: number }> = ({ t }) => {
  const tL = E.h_lobo, u = t - tL, a = eo(u / .2) * (1 - win(t, tL + 1.4, tL + 2.2)) * .85; if (a <= 0) return null;
  // el ojo está en el mundo; con la cámara en el ojo queda cerca del centro durante la fase final
  const c = camera0(t); const ey = wEye(t); const z = c.z; const sx = 180 + (ey[0] - c.x) * z, sy = 320 + (ey[1] - c.y) * z;
  return (
    <g style={{ mixBlendMode: 'plus-lighter' }} opacity={a}>
      <ellipse cx={sx} cy={sy} rx={90} ry={1.6} fill="rgba(255,230,160,.9)" /><ellipse cx={sx} cy={sy} rx={26} ry={26} fill="rgba(255,200,110,.25)" />
      <ellipse cx={sx} cy={sy} rx={3} ry={3} fill="#fff" />
    </g>
  );
};
