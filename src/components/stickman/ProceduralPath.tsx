import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { darkTheme } from "../../darkTheme";

interface ProceduralPathProps {
  d: string;
  totalLength?: number;
  startFrame?: number;
  drawDuration?: number;
  strokeColor?: string;
  strokeWidth?: number;
  fillColor?: string;
  fillDelay?: number;
  hasGlow?: boolean;
}

export const ProceduralPath: React.FC<ProceduralPathProps> = ({
  d,
  totalLength = 500,
  startFrame = 0,
  drawDuration = 25,
  strokeColor = darkTheme.colors.white,
  strokeWidth = 5,
  fillColor = "none",
  fillDelay = 0,
  hasGlow = true,
}) => {
  const frame = useCurrentFrame();

  const progress = interpolate(
    frame - startFrame,
    [0, drawDuration],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const dashOffset = totalLength * (1 - progress);

  // Fill fade in after stroke finishes
  const fillProgress = interpolate(
    frame - (startFrame + fillDelay),
    [0, 12],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <path
      d={d}
      fill={fillColor === "none" ? "none" : fillColor}
      fillOpacity={fillColor === "none" ? 0 : fillProgress}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray={totalLength}
      strokeDashoffset={dashOffset}
      filter={hasGlow ? "drop-shadow(0 0 8px rgba(255, 255, 255, 0.45))" : undefined}
    />
  );
};
