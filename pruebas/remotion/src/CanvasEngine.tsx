// Prueba de reutilización: el motor Canvas 2D ORIGINAL (core.js + assets.js + escena) dentro de Remotion, sin reescribir nada.
// Remotion decide el cuadro (useCurrentFrame) y el motor lo dibuja con setT(t), igual que hace render.py con Playwright.
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { AbsoluteFill, continueRender, delayRender, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';

const load = (src: string) => new Promise<void>((res, rej) => { const s = document.createElement('script'); s.src = src; s.onload = () => res(); s.onerror = () => rej(new Error('no carga ' + src)); document.body.appendChild(s); });

export const CanvasEngine: React.FC = () => {
  const frame = useCurrentFrame(); const { fps } = useVideoConfig();
  const [handle] = useState(() => delayRender('cargando motor canvas'));
  const [ready, setReady] = useState(false);
  useEffect(() => { (async () => { for (const f of ['data.js', 'core.js', 'assets.js', 's0.js', 'boot.js']) await load(staticFile('canvas/' + f)); setReady(true); continueRender(handle); })(); }, [handle]);
  useLayoutEffect(() => { if (ready) (window as any).setT(frame / fps); }, [ready, frame, fps]);
  return <AbsoluteFill style={{ background: '#000' }}><canvas id="c" width={720} height={1280} style={{ width: 720, height: 1280, display: 'block' }} /></AbsoluteFill>;
};
