import React from 'react';
import { Composition } from 'remotion';
import { Scene0 } from './Scene0';
import { CanvasEngine } from './CanvasEngine';

export const Root: React.FC = () => (
  <>
    <Composition id="V2" component={Scene0} durationInFrames={240} fps={30} width={720} height={1280} defaultProps={{ pro: false }} />
    <Composition id="V3" component={Scene0} durationInFrames={240} fps={30} width={720} height={1280} defaultProps={{ pro: true }} />
    <Composition id="V2B" component={CanvasEngine} durationInFrames={240} fps={30} width={720} height={1280} />
  </>
);
