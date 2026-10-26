import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { darkTheme } from "../darkTheme";

export const DarkTopProgressBar: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const progress = interpolate(frame, [0, durationInFrames], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 6,
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        zIndex: 100,
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          background: darkTheme.gradients.ceoGlowGradient,
          boxShadow: `0 0 16px ${darkTheme.colors.cyanGlow}`,
          borderTopRightRadius: 4,
          borderBottomRightRadius: 4,
        }}
      />
    </div>
  );
};
