import React from "react";
import { Composition } from "remotion";
import { MainVideo, TOTAL_FRAMES, FPS, WIDTH, HEIGHT } from "./MainVideo";
import { CeoVideo, CEO_TOTAL_FRAMES, CEO_FPS, CEO_WIDTH, CEO_HEIGHT } from "./CeoVideo";
import {
  StickmanVideo,
  STICKMAN_TOTAL_FRAMES,
  STICKMAN_FPS,
  STICKMAN_WIDTH,
  STICKMAN_HEIGHT,
} from "./StickmanVideo";
import {
  ProceduralVideo,
  PROCEDURAL_TOTAL_FRAMES,
  PROCEDURAL_FPS,
  PROCEDURAL_WIDTH,
  PROCEDURAL_HEIGHT,
} from "./ProceduralVideo";

export const MyComposition: React.FC = () => {
  return (
    <>
      {/* 20-Second Procedural Drawing Stickman Video on Pure Black */}
      <Composition
        id="ProceduralStory"
        component={ProceduralVideo}
        durationInFrames={PROCEDURAL_TOTAL_FRAMES}
        fps={PROCEDURAL_FPS}
        width={PROCEDURAL_WIDTH}
        height={PROCEDURAL_HEIGHT}
      />

      {/* 20-Second Animated Stickman Owner Story (Juan's Story) */}
      <Composition
        id="StickmanOwnerStory"
        component={StickmanVideo}
        durationInFrames={STICKMAN_TOTAL_FRAMES}
        fps={STICKMAN_FPS}
        width={STICKMAN_WIDTH}
        height={STICKMAN_HEIGHT}
      />

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
