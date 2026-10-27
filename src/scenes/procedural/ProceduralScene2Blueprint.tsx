import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { darkTheme } from "../../darkTheme";
import { ProceduralStickman } from "../../components/stickman/ProceduralStickman";
import { ProceduralPath } from "../../components/stickman/ProceduralPath";
import { DarkKineticText } from "../../components/DarkKineticText";

export const ProceduralScene2Blueprint: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: darkTheme.springs.smooth,
  });

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "#000000",
        opacity: interpolate(entrance, [0, 1], [0, 1]),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Top Procedural Sketch Badge */}
      <div
        style={{
          position: "absolute",
          top: 70,
          background: "rgba(15, 20, 31, 0.8)",
          border: `1.5px dashed ${darkTheme.colors.cyan}`,
          borderRadius: 9999,
          padding: "8px 26px",
          display: "flex",
          alignItems: "center",
          gap: 10,
          zIndex: 30,
        }}
      >
        <span style={{ color: darkTheme.colors.cyan, fontSize: 16 }}>●</span>
        <span
          style={{
            color: darkTheme.colors.white,
            fontWeight: 800,
            fontSize: 19,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          DESARROLLO · ARQUITECTURA PROCEDURAL
        </span>
      </div>

      {/* Main Procedural Canvas: Developer Desk + Architecture Blueprint */}
      <div
        style={{
          position: "absolute",
          top: 180,
          width: 900,
          height: 900,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          viewBox="0 0 800 800"
          width="100%"
          height="100%"
          style={{ position: "absolute", inset: 0, overflow: "visible" }}
        >
          {/* Ground / Desk Line */}
          <ProceduralPath
            d="M 60 620 L 740 620"
            totalLength={680}
            startFrame={0}
            drawDuration={20}
            strokeWidth={4}
            strokeColor="rgba(255,255,255,0.3)"
          />

          {/* Desk Surface & Legs */}
          <ProceduralPath
            d="M 120 620 L 120 480 L 460 480 L 460 620"
            totalLength={680}
            startFrame={6}
            drawDuration={24}
            strokeWidth={4.5}
            strokeColor={darkTheme.colors.white}
          />

          {/* Laptop Base & Screen */}
          <ProceduralPath
            d="M 220 480 L 360 480"
            totalLength={140}
            startFrame={18}
            drawDuration={14}
            strokeWidth={6}
            strokeColor={darkTheme.colors.cyan}
          />
          <ProceduralPath
            d="M 240 480 L 260 400 L 380 400 L 360 480"
            totalLength={340}
            startFrame={24}
            drawDuration={20}
            strokeWidth={4}
            strokeColor={darkTheme.colors.cyan}
          />

          {/* Architecture Connection Nodes (Drawing into the sky) */}
          {/* Node 1: QR & ISR */}
          <ProceduralPath
            d="M 500 280 L 740 280 L 740 360 L 500 360 Z"
            totalLength={640}
            startFrame={22}
            drawDuration={24}
            strokeWidth={3.5}
            strokeColor={darkTheme.colors.cyan}
          />
          {/* Connection Pipe */}
          <ProceduralPath
            d="M 360 400 Q 430 320 500 320"
            totalLength={200}
            startFrame={34}
            drawDuration={18}
            strokeWidth={4}
            strokeColor={darkTheme.colors.cyan}
          />

          {/* Node 2: Supabase Security */}
          <ProceduralPath
            d="M 500 400 L 740 400 L 740 480 L 500 480 Z"
            totalLength={640}
            startFrame={36}
            drawDuration={24}
            strokeWidth={3.5}
            strokeColor={darkTheme.colors.green}
          />
          {/* Connection Pipe */}
          <ProceduralPath
            d="M 360 420 Q 430 440 500 440"
            totalLength={200}
            startFrame={44}
            drawDuration={18}
            strokeWidth={4}
            strokeColor={darkTheme.colors.green}
          />
        </svg>

        {/* Labels inside the sketched nodes */}
        <div
          style={{
            position: "absolute",
            top: 295,
            right: 70,
            display: "flex",
            alignItems: "center",
            gap: 12,
            opacity: interpolate(frame, [38, 48], [0, 1], { extrapolateLeft: "clamp" }),
          }}
        >
          <span style={{ fontSize: 26 }}>⚡</span>
          <span style={{ color: darkTheme.colors.white, fontWeight: 900, fontSize: 22 }}>
            Next.js 14 · Edge ISR
          </span>
        </div>

        <div
          style={{
            position: "absolute",
            top: 415,
            right: 70,
            display: "flex",
            alignItems: "center",
            gap: 12,
            opacity: interpolate(frame, [50, 60], [0, 1], { extrapolateLeft: "clamp" }),
          }}
        >
          <span style={{ fontSize: 26 }}>🔒</span>
          <span style={{ color: darkTheme.colors.white, fontWeight: 900, fontSize: 22 }}>
            PostgreSQL RLS
          </span>
        </div>

        {/* Procedural Stickman Coding at the desk */}
        <div style={{ position: "absolute", bottom: 155, left: 160 }}>
          <ProceduralStickman pose="coding" startFrame={5} size={360} />
        </div>
      </div>

      {/* Kinetic Typography */}
      <DarkKineticText
        startFrame={10}
        bottomOffset={130}
        lines={[
          {
            segments: [
              { text: "Lo resolví con código puro:", isPill: true, pillColor: "cyan" },
            ],
          },
          {
            delayFrames: 25,
            segments: [
              { text: "Diseñé una arquitectura" },
              { text: "sin intermediarios.", isPill: true, pillColor: "metallic" },
            ],
          },
        ]}
      />
    </div>
  );
};
