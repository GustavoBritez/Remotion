import React from "react";
import { Composition } from "remotion";
import { MainVideo, TOTAL_FRAMES, FPS, WIDTH, HEIGHT } from "./MainVideo";
import { CeoVideo, CEO_TOTAL_FRAMES, CEO_FPS, CEO_WIDTH, CEO_HEIGHT } from "./CeoVideo";

export const MyComposition: React.FC = () => {
  return (
    <>
      {/* 20-Second Dynamic Dark Metallic Founder Video (Idea 4) */}
      <Composition
        id="CeoDarkStory"
        component={CeoVideo}
        durationInFrames={CEO_TOTAL_FRAMES}
        fps={CEO_FPS}
        width={CEO_WIDTH}
        height={CEO_HEIGHT}
      />

      {/* Original 52-Second Flat Warm Video */}
      <Composition
        id="CartaAppStory"
        component={MainVideo}
        durationInFrames={TOTAL_FRAMES}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
    </>
  );
};
