import React from "react";
import { useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { darkTheme } from "../../darkTheme";

export type ProceduralPose = "running" | "coding" | "presenting" | "celebrating";

interface ProceduralStickmanProps {
  pose: ProceduralPose;
  startFrame?: number;
  size?: number;
  color?: string;
}

export const ProceduralStickman: React.FC<ProceduralStickmanProps> = ({
  pose,
  startFrame = 0,
  size = 340,
  color = "#FFFFFF",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const relFrame = frame - startFrame;

  // Staggered procedural draw timings
  const headProgress = interpolate(relFrame, [0, 16], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const spineProgress = interpolate(relFrame, [8, 22], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const leftArmProgress = interpolate(relFrame, [14, 28], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const rightArmProgress = interpolate(relFrame, [18, 32], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const legsProgress = interpolate(relFrame, [24, 38], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const hatProgress = interpolate(relFrame, [28, 44], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const faceSpring = spring({
    frame: relFrame - 34,
    fps,
    config: darkTheme.springs.bouncy,
  });

  // Dynamic continuous motion after drawing finishes (frame > 45)
  const isDrawn = relFrame > 45;
  const idleY = isDrawn ? Math.sin((relFrame - 45) * 0.18) * 6 : 0;
  const runTilt = pose === "running" && isDrawn ? Math.sin((relFrame - 45) * 0.35) * 8 : 0;

  // Coordinates based on pose
  let leftHand = { x: 65, y: 140 };
  let rightHand = { x: 175, y: 140 };
  let leftElbow = { x: 80, y: 115 };
  let rightElbow = { x: 160, y: 115 };

  if (pose === "running") {
    // Frantic running arms
    const runCycle = Math.sin((relFrame - 45) * 0.4);
    leftHand = { x: 45 + runCycle * 30, y: 120 - runCycle * 25 };
    rightHand = { x: 195 - runCycle * 30, y: 120 + runCycle * 25 };
    leftElbow = { x: 75, y: 95 };
    rightElbow = { x: 165, y: 95 };
  } else if (pose === "coding") {
    // Both arms forward typing on keyboard
    const typeWiggle = Math.sin((relFrame - 45) * 0.6) * 5;
    leftHand = { x: 105, y: 145 + typeWiggle };
    rightHand = { x: 145, y: 145 - typeWiggle };
    leftElbow = { x: 78, y: 128 };
    rightElbow = { x: 162, y: 128 };
  } else if (pose === "presenting") {
    // Left hand on hip, right hand open presenting
    leftHand = { x: 92, y: 140 };
    leftElbow = { x: 70, y: 128 };
    rightHand = { x: 210, y: 95 };
    rightElbow = { x: 175, y: 105 };
  } else if (pose === "celebrating") {
    // Victorious V arms pumping up and down
    const pump = Math.sin((relFrame - 45) * 0.25) * 10;
    leftHand = { x: 30, y: 25 + pump };
    rightHand = { x: 210, y: 25 + pump };
    leftElbow = { x: 55, y: 65 };
    rightElbow = { x: 185, y: 65 };
  }

  return (
    <div
      style={{
        width: size,
        height: size * 1.35,
        transform: `translateY(${idleY}px) rotate(${runTilt}deg)`,
        position: "relative",
      }}
    >
      <svg
        viewBox="0 0 240 320"
        width={size}
        height={size * 1.35}
        style={{ overflow: "visible" }}
      >
        <defs>
          {/* Intense Bright White Bloom Filter */}
          <filter id="brightWhiteGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#FFFFFF" floodOpacity="0.75" />
          </filter>
        </defs>

        {/* CHEF HAT PROCEDURAL STROKE (Solid pure white with black outline) */}
        <path
          d="M 92 35 C 75 8, 105 -20, 120 -8 C 135 -20, 165 8, 148 35 Z"
          fill="#FFFFFF"
          fillOpacity={hatProgress}
          stroke="#FFFFFF"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={240}
          strokeDashoffset={240 * (1 - hatProgress)}
          filter="url(#brightWhiteGlow)"
        />
        {/* Hat band in crisp black line */}
        <path
          d="M 96 35 L 144 35"
          stroke="#000000"
          strokeWidth="4"
          strokeLinecap="round"
          opacity={hatProgress}
        />

        {/* HEAD: Solid Ultra-White circle with crisp black face details */}
        <circle
          cx="120"
          cy="60"
          r="32"
          fill="#FFFFFF"
          fillOpacity={headProgress}
          stroke="#FFFFFF"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={210}
          strokeDashoffset={210 * (1 - headProgress)}
          filter="url(#brightWhiteGlow)"
        />

        {/* FACE DETAILS (Black features on solid white head for maximum contrast) */}
        <g
          transform={`scale(${Math.max(0, faceSpring)})`}
          style={{ transformOrigin: "120px 60px" }}
          stroke="#000000"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        >
          {pose === "running" ? (
            // Stressed running face: (> <) and wavy mouth
            <>
              <path d="M 104 53 L 114 57 L 104 61" />
              <path d="M 136 53 L 126 57 L 136 61" />
              <path d="M 110 74 Q 120 66 130 74" />
              {/* Cyan sweat drop on side */}
              <path
                d="M 156 46 C 156 40, 166 46, 164 52 C 162 56, 156 56, 156 46 Z"
                fill="#00E5FF"
                stroke="none"
              />
            </>
          ) : pose === "coding" ? (
            // Focused coding face (glasses / focus eyes)
            <>
              <circle cx="108" cy="56" r="4" fill="#000000" />
              <circle cx="132" cy="56" r="4" fill="#000000" />
              <line x1="112" y1="72" x2="128" y2="72" strokeWidth="4.5" />
            </>
          ) : (
            // Big confident smile (^ ^)
            <>
              <circle cx="110" cy="54" r="4.5" fill="#000000" />
              <circle cx="130" cy="54" r="4.5" fill="#000000" />
              <path d="M 108 68 Q 120 82 132 68" strokeWidth="4.5" />
            </>
          )}
        </g>

        {/* SPINE / BODY: Bold 9px Pure White Line */}
        <line
          x1="120"
          y1="92"
          x2="120"
          y2="200"
          stroke={color}
          strokeWidth="9"
          strokeLinecap="round"
          strokeDasharray={110}
          strokeDashoffset={110 * (1 - spineProgress)}
          filter="url(#brightWhiteGlow)"
        />

        {/* LEFT ARM: Bold 8px Pure White Line */}
        <path
          d={`M 120 112 Q ${leftElbow.x} ${leftElbow.y} ${leftHand.x} ${leftHand.y}`}
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          strokeDasharray={140}
          strokeDashoffset={140 * (1 - leftArmProgress)}
          filter="url(#brightWhiteGlow)"
        />

        {/* RIGHT ARM: Bold 8px Pure White Line */}
        <path
          d={`M 120 112 Q ${rightElbow.x} ${rightElbow.y} ${rightHand.x} ${rightHand.y}`}
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          strokeDasharray={140}
          strokeDashoffset={140 * (1 - rightArmProgress)}
          filter="url(#brightWhiteGlow)"
        />

        {/* LEGS: Bold 9px Pure White Lines */}
        {/* Left Leg */}
        <path
          d={
            pose === "running"
              ? "M 120 200 L 80 245 L 65 290"
              : "M 120 200 L 86 295 L 72 300"
          }
          stroke={color}
          strokeWidth="9"
          strokeLinecap="round"
          fill="none"
          strokeDasharray={140}
          strokeDashoffset={140 * (1 - legsProgress)}
          filter="url(#brightWhiteGlow)"
        />
        {/* Right Leg */}
        <path
          d={
            pose === "running"
              ? "M 120 200 L 150 240 L 175 275"
              : "M 120 200 L 154 295 L 168 300"
          }
          stroke={color}
          strokeWidth="9"
          strokeLinecap="round"
          fill="none"
          strokeDasharray={140}
          strokeDashoffset={140 * (1 - legsProgress)}
          filter="url(#brightWhiteGlow)"
        />
      </svg>
    </div>
  );
};
