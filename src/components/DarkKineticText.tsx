import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { darkTheme, fontFamily } from "../darkTheme";

export interface DarkKineticSegment {
  text: string;
  isPill?: boolean;
  pillColor?: "cyan" | "green" | "orange" | "red" | "metallic" | "purple";
  delayFrames?: number;
}

export interface DarkKineticLine {
  segments: DarkKineticSegment[];
  delayFrames?: number;
}

interface DarkKineticTextProps {
  lines: DarkKineticLine[];
  startFrame?: number;
  align?: "center" | "left" | "right";
  fontSize?: number;
  bottomOffset?: number;
}

export const DarkKineticText: React.FC<DarkKineticTextProps> = ({
  lines,
  startFrame = 0,
  align = "center",
  fontSize = 58,
  bottomOffset = 160,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const relativeFrame = frame - startFrame;

  return (
    <div
      style={{
        position: "absolute",
        left: 50,
        right: 50,
        bottom: bottomOffset,
        display: "flex",
        flexDirection: "column",
        alignItems: align === "center" ? "center" : align === "left" ? "flex-start" : "flex-end",
        gap: 16,
        fontFamily,
        zIndex: 60,
        textAlign: align,
      }}
    >
      {lines.map((line, lineIdx) => {
        const lineDelay = line.delayFrames ?? lineIdx * 10;
        const lineFrame = relativeFrame - lineDelay;

        const lineEnter = spring({
          frame: lineFrame,
          fps,
          config: darkTheme.springs.punchy,
        });

        const lineOpacity = interpolate(lineFrame, [0, 8], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });

        const lineY = interpolate(lineEnter, [0, 1], [35, 0]);

        return (
          <div
            key={lineIdx}
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: align === "center" ? "center" : "flex-start",
              gap: 14,
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
                  config: darkTheme.springs.bouncy,
                });

                const pillScale = interpolate(pillSpring, [0, 1], [0.75, 1]);
                const pillOpacity = interpolate(segFrame, [0, 6], [0, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                });

                let borderColor = darkTheme.colors.borderMetallicBright;
                let bgGradient = darkTheme.gradients.chromePill;
                let textColor = darkTheme.colors.white;
                let boxShadow = darkTheme.shadows.metallicDeep;

                if (seg.pillColor === "cyan") {
                  borderColor = darkTheme.colors.cyan;
                  bgGradient = "linear-gradient(135deg, rgba(0,229,255,0.2) 0%, rgba(15,20,31,0.95) 100%)";
                  boxShadow = darkTheme.shadows.glowCyan;
                  textColor = "#E0F7FA";
                } else if (seg.pillColor === "green") {
                  borderColor = darkTheme.colors.green;
                  bgGradient = "linear-gradient(135deg, rgba(16,185,129,0.25) 0%, rgba(15,20,31,0.95) 100%)";
                  boxShadow = darkTheme.shadows.glowGreen;
                  textColor = "#D1FAE5";
                } else if (seg.pillColor === "orange") {
                  borderColor = darkTheme.colors.orange;
                  bgGradient = "linear-gradient(135deg, rgba(255,107,43,0.25) 0%, rgba(15,20,31,0.95) 100%)";
                  boxShadow = darkTheme.shadows.glowOrange;
                  textColor = "#FFEDD5";
                } else if (seg.pillColor === "red") {
                  borderColor = darkTheme.colors.red;
                  bgGradient = "linear-gradient(135deg, rgba(239,68,68,0.28) 0%, rgba(15,20,31,0.95) 100%)";
                  boxShadow = darkTheme.shadows.glowRed;
                  textColor = "#FEE2E2";
                } else if (seg.pillColor === "purple") {
                  borderColor = darkTheme.colors.purple;
                  bgGradient = "linear-gradient(135deg, rgba(168,85,247,0.25) 0%, rgba(15,20,31,0.95) 100%)";
                  boxShadow = "0 0 30px rgba(168,85,247,0.35)";
                  textColor = "#F3E8FF";
                }

                return (
                  <span
                    key={segIdx}
                    style={{
                      background: bgGradient,
                      color: textColor,
                      border: `1.5px solid ${borderColor}`,
                      padding: "8px 24px",
                      borderRadius: 9999,
                      fontWeight: 800,
                      fontSize,
                      boxShadow,
                      transform: `scale(${pillScale})`,
                      opacity: pillOpacity,
                      display: "inline-flex",
                      alignItems: "center",
                      letterSpacing: "-0.02em",
                      textShadow: "0 2px 8px rgba(0,0,0,0.6)",
                    }}
                  >
                    {seg.text}
                  </span>
                );
              }

              // Standard Plain Text Segment (Pure crisp white with deep drop shadow)
              const wordSpring = spring({
                frame: segFrame,
                fps,
                config: darkTheme.springs.punchy,
              });

              return (
                <span
                  key={segIdx}
                  style={{
                    color: darkTheme.colors.white,
                    fontWeight: 800,
                    fontSize,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.15,
                    textShadow: "0 4px 20px rgba(0, 0, 0, 0.9), 0 1px 3px rgba(0,0,0,0.8)",
                    opacity: interpolate(wordSpring, [0, 1], [0, 1]),
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
