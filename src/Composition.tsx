import React from "react";
import { Composition } from "remotion";
import { MainVideo, TOTAL_FRAMES, FPS, WIDTH, HEIGHT } from "./MainVideo";

export const MyComposition: React.FC = () => {
  return (
    <Composition
      id="CartaAppStory"
      component={MainVideo}
      durationInFrames={TOTAL_FRAMES}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
    />
  );
};
