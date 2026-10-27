import React from "react";
import { useCurrentFrame } from "remotion";
import { darkTheme } from "../../darkTheme";

export type StickmanPose = "stressed" | "eureka" | "relax" | "celebrate";

interface StickmanProps {
  pose: StickmanPose;
  color?: string;
  size?: number;
  hasChefHat?: boolean;
}

export const Stickman: React.FC<StickmanProps> = ({
  pose,
  color = darkTheme.colors.white,
  size = 320,
  hasChefHat = true,
}) => {
  const frame = useCurrentFrame();

  // Gentle breathing / idle float
  const idle = Math.sin(frame * 0.12) * 4;

  // Stressed shaking
  const shake = pose === "stressed" ? Math.sin(frame * 0.5) * 5 : 0;

  // Jump animation for celebrate
  const jumpY = pose === "celebrate" ? -Math.abs(Math.sin(frame * 0.18)) * 30 : 0;

  // Arms coordinates depending on pose
  let leftHand = { x: 60, y: 160 };
  let rightHand = { x: 180, y: 160 };
  let leftElbow = { x: 80, y: 130 };
  let rightElbow = { x: 160, y: 130 };

  if (pose === "stressed") {
    // Hands on head pulling hair
    leftElbow = { x: 60, y: 70 };
    rightElbow = { x: 180, y: 70 };
    leftHand = { x: 95, y: 55 };
    rightHand = { x: 145, y: 55 };
  } else if (pose === "eureka") {
    // Left hand on hip, right hand pointing straight up
    leftElbow = { x: 75, y: 135 };
    leftHand = { x: 95, y: 145 };
    rightElbow = { x: 165, y: 75 };
    rightHand = { x: 175, y: 25 };
  } else if (pose === "relax") {
    // Left hand holding coffee, right hand casually down/holding phone
    leftElbow = { x: 70, y: 130 };
    leftHand = { x: 85, y: 105 };
    rightElbow = { x: 165, y: 135 };
    rightHand = { x: 175, y: 155 };
  } else if (pose === "celebrate") {
    // Both hands up in V victoriously
    leftElbow = { x: 55, y: 65 };
    leftHand = { x: 35, y: 20 };
    rightElbow = { x: 185, y: 65 };
    rightHand = { x: 205, y: 20 };
  }

  // Eye blinking
  const isBlinking = frame % 60 > 56;

  return (
    <div
      style={{
        width: size,
        height: size * 1.35,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: `translate(${shake}px, ${jumpY + idle}px)`,
        position: "relative",
      }}
    >
      <svg
        viewBox="0 0 240 320"
        width={size}
        height={size * 1.35}
        style={{ overflow: "visible" }}
      >
        {/* Glow filter */}
        <defs>
          <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor={color} floodOpacity="0.4" />
          </filter>
        </defs>

        {/* CHEF HAT */}
        {hasChefHat && (
          <g transform="translate(120, 28)">
            {/* White Puffy Top */}
            <path
              d="M -30 -15 C -45 -45, -15 -65, 0 -55 C 15 -65, 45 -45, 30 -15 Z"
              fill={darkTheme.colors.white}
              stroke="#0A0D14"
              strokeWidth="3"
            />
            {/* Hat Band */}
            <rect
              x="-24"
              y="-15"
              width="48"
              height="14"
              rx="4"
              fill={darkTheme.colors.chrome}
              stroke="#0A0D14"
              strokeWidth="2.5"
            />
          </g>
        )}

        {/* HEAD */}
        <circle
          cx="120"
          cy="60"
          r="32"
          fill="#FFFFFF"
          stroke={color}
          strokeWidth="8"
          filter="url(#neonGlow)"
        />

        {/* FACE EXPRESSION */}
        {pose === "stressed" ? (
          // Stressed eyes (> <) and wavy mouth
          <g stroke="#000000" strokeWidth="4" strokeLinecap="round" fill="none">
            {/* Left Eye: > */}
            <path d="M 104 53 L 112 57 L 104 61" />
            {/* Right Eye: < */}
            <path d="M 136 53 L 128 57 L 136 61" />
            {/* Wavy mouth */}
            <path d="M 108 76 Q 114 70 120 76 Q 126 82 132 76" />
            {/* Sweat drop on side */}
            <path
              d="M 152 46 C 152 40, 162 46, 160 52 C 158 56, 152 56, 152 46 Z"
              fill={darkTheme.colors.cyan}
              stroke="none"
            />
          </g>
        ) : pose === "eureka" ? (
          // Wide open eyes & confident grin
          <g fill="#000000">
            <circle cx="112" cy="56" r="4.5" />
            <circle cx="128" cy="56" r="4.5" />
            {/* Smile */}
            <path
              d="M 112 70 Q 120 78 128 70"
              stroke="#000000"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            {/* Lightbulb overhead */}
            <g transform="translate(120, -18)">
              <text x="0" y="0" fontSize="42" textAnchor="middle" filter="drop-shadow(0 0 14px #FBBF24)">
                💡
              </text>
            </g>
          </g>
        ) : (
          // Happy / Relaxed eyes (^ ^) and big smile
          <g stroke="#000000" strokeWidth="4" strokeLinecap="round" fill="none">
            {isBlinking ? (
              <>
                <line x1="107" y1="56" x2="117" y2="56" />
                <line x1="123" y1="56" x2="133" y2="56" />
              </>
            ) : (
              <>
                {/* Happy curved eyes */}
                <path d="M 106 58 Q 112 50 118 58" />
                <path d="M 122 58 Q 128 50 134 58" />
              </>
            )}
            {/* Big Open Smile */}
            <path d="M 110 68 Q 120 80 130 68" />
          </g>
        )}

        {/* SPINE / BODY */}
        <line
          x1="120"
          y1="92"
          x2="120"
          y2="195"
          stroke={color}
          strokeWidth="7"
          strokeLinecap="round"
          filter="url(#neonGlow)"
        />

        {/* APRON TIE ON BODY */}
        <path
          d="M 105 130 L 135 130"
          stroke={darkTheme.colors.cyan}
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* LEFT ARM */}
        <path
          d={`M 120 110 Q ${leftElbow.x} ${leftElbow.y} ${leftHand.x} ${leftHand.y}`}
          stroke={color}
          strokeWidth="6.5"
          strokeLinecap="round"
          fill="none"
          filter="url(#neonGlow)"
        />

        {/* RIGHT ARM */}
        <path
          d={`M 120 110 Q ${rightElbow.x} ${rightElbow.y} ${rightHand.x} ${rightHand.y}`}
          stroke={color}
          strokeWidth="6.5"
          strokeLinecap="round"
          fill="none"
          filter="url(#neonGlow)"
        />

        {/* PROPS ATTACHED TO HANDS */}
        {pose === "relax" && (
          // Coffee cup in left hand
          <g transform={`translate(${leftHand.x - 14}, ${leftHand.y - 18})`}>
            <text fontSize="26">☕</text>
          </g>
        )}

        {/* LEGS */}
        {/* Left Leg */}
        <path
          d="M 120 195 L 90 290"
          stroke={color}
          strokeWidth="7"
          strokeLinecap="round"
          filter="url(#neonGlow)"
        />
        {/* Left Foot */}
        <path
          d="M 90 290 L 76 295"
          stroke={color}
          strokeWidth="7"
          strokeLinecap="round"
        />

        {/* Right Leg */}
        <path
          d="M 120 195 L 150 290"
          stroke={color}
          strokeWidth="7"
          strokeLinecap="round"
          filter="url(#neonGlow)"
        />
        {/* Right Foot */}
        <path
          d="M 150 290 L 164 295"
          stroke={color}
          strokeWidth="7"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
