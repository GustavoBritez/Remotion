import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { theme, fontFamily } from "../theme";

export interface KineticSegment {
  text: string;
  isPill?: boolean;
  pillColor?: "orange" | "green" | "coffee" | "red";
  delayFrames?: number;
}

export interface KineticLine {
  segments: KineticSegment[];
  delayFrames?: number;
}

interface KineticTextProps {
  lines: KineticLine[];
  startFrame?: number;
  align?: "center" | "left" | "right";
  fontSize?: number;
  bottomOffset?: number;
}

export const KineticText: React.FC<KineticTextProps> = ({
  lines,
  startFrame = 0,
  align = "center",
  fontSize = 62,
  bottomOffset = 180,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const relativeFrame = frame - startFrame;

  return (
    <div
      style={{
        position: "absolute",
        left: 60,
        right: 60,
        bottom: bottomOffset,
        display: "flex",
        flexDirection: "column",
        alignItems: align === "center" ? "center" : align === "left" ? "flex-start" : "flex-end",
        gap: 20,
        fontFamily,
        zIndex: 50,
      }}
    >
      {lines.map((line, lineIdx) => {
        const lineDelay = line.delayFrames ?? lineIdx * 10;
        const lineFrame = relativeFrame - lineDelay;

        // Spring entrance for line
        const lineEnter = spring({
          frame: lineFrame,
          fps,
          config: theme.springs.punchy,
        });

        const lineOpacity = interpolate(lineFrame, [0, 8], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });

        const lineY = interpolate(lineEnter, [0, 1], [30, 0]);

        return (
          <div
            key={lineIdx}
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: align === "center" ? "center" : "flex-start",
              gap: 16,
              opacity: lineOpacity,
              transform: `translateY(${lineY}px)`,
            }}
          >
            {line.segments.map((seg, segIdx) => {
              const segDelay = seg.delayFrames ?? segIdx * 6;
              const segFrame = lineFrame - segDelay;

              if (seg.isPill) {
                const pillSpring = spring({
                  frame: segFrame,
                  fps,
                  config: theme.springs.bouncy,
                });

                const pillScale = interpolate(pillSpring, [0, 1], [0.75, 1]);
                const pillOpacity = interpolate(segFrame, [0, 6], [0, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                });

                let bgColor = theme.colors.orange;
                let textColor = theme.colors.white;
                let shadow = theme.shadows.pillOrange;

                if (seg.pillColor === "green") {
                  bgColor = theme.colors.green;
                  shadow = theme.shadows.pillGreen;
                } else if (seg.pillColor === "coffee") {
                  bgColor = theme.colors.coffeeDark;
                  shadow = theme.shadows.medium;
                } else if (seg.pillColor === "red") {
                  bgColor = theme.colors.red;
                  shadow = "0 8px 24px rgba(239, 68, 68, 0.3)";
                }

                return (
                  <span
                    key={segIdx}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: bgColor,
                      color: textColor,
                      padding: "8px 26px",
                      borderRadius: 20,
                      fontWeight: 900,
                      fontSize,
                      letterSpacing: "-0.03em",
                      lineHeight: 1.25,
                      boxShadow: shadow,
                      transform: `scale(${pillScale})`,
                      opacity: pillOpacity,
                      transformOrigin: "center center",
                      verticalAlign: "middle",
                    }}
                  >
                    {seg.text}
                  </span>
                );
              }

              return (
                <span
                  key={segIdx}
                  style={{
                    color: theme.colors.coffeeDark,
                    fontWeight: 800,
                    fontSize,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.25,
                  }}
                >
                  {seg.text}
                </span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
