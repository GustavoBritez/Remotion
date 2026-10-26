import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { theme } from "../theme";

export const TopProgressBar: React.FC = () => {
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
        backgroundColor: "rgba(75, 46, 42, 0.06)",
        zIndex: 100,
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          background: `linear-gradient(90deg, ${theme.colors.orange} 0%, ${theme.colors.green} 100%)`,
          boxShadow: `0 0 12px ${theme.colors.orangeGlow}`,
          borderTopRightRadius: 3,
          borderBottomRightRadius: 3,
        }}
      />
    </div>
  );
};
