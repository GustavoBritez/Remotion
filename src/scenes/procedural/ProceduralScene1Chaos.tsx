import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { darkTheme } from "../../darkTheme";
import { ProceduralStickman } from "../../components/stickman/ProceduralStickman";
import { ProceduralPath } from "../../components/stickman/ProceduralPath";
import { DarkKineticText } from "../../components/DarkKineticText";

export const ProceduralScene1Chaos: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: darkTheme.springs.smooth,
  });

  const stressShake = frame > 45 ? Math.sin(frame * 0.4) * 4 : 0;

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
          border: "1.5px dashed rgba(255, 255, 255, 0.3)",
          borderRadius: 9999,
          padding: "8px 26px",
          display: "flex",
          alignItems: "center",
          gap: 10,
          zIndex: 30,
        }}
      >
        <span style={{ color: darkTheme.colors.red, fontSize: 16 }}>●</span>
        <span
          style={{
            color: darkTheme.colors.white,
            fontWeight: 800,
            fontSize: 19,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          CASO REAL #01 · LA FRICCIÓN
        </span>
      </div>

      {/* Main Procedural Canvas: Restaurant Sketch + Running Stickman */}
      <div
        style={{
          position: "absolute",
          top: 180,
          width: 900,
          height: 900,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: `translateX(${stressShake}px)`,
        }}
      >
        <svg
          viewBox="0 0 800 800"
          width="100%"
          height="100%"
          style={{ position: "absolute", inset: 0, overflow: "visible" }}
        >
          {/* Restaurant Floor / Ground line drawing */}
          <ProceduralPath
            d="M 50 620 L 750 620"
            totalLength={700}
            startFrame={0}
            drawDuration={20}
            strokeWidth={4}
            strokeColor="rgba(255,255,255,0.4)"
          />

          {/* Restaurant Table Sketch */}
          <ProceduralPath
            d="M 120 620 L 120 490 L 320 490 L 320 620"
            totalLength={450}
            startFrame={8}
            drawDuration={25}
            strokeWidth={4.5}
            strokeColor={darkTheme.colors.white}
          />
          {/* Table Top Surface */}
          <ProceduralPath
            d="M 90 490 L 350 490"
            totalLength={260}
            startFrame={14}
            drawDuration={18}
            strokeWidth={5}
            strokeColor={darkTheme.colors.white}
          />

          {/* Broken Smartphone on table */}
          <ProceduralPath
            d="M 170 480 L 170 380 L 230 380 L 230 480 Z"
            totalLength={340}
            startFrame={25}
            drawDuration={22}
            strokeWidth={4}
            strokeColor={darkTheme.colors.red}
            hasGlow={true}
          />
          {/* PDF Crack symbol */}
          <ProceduralPath
            d="M 190 395 L 210 430 L 195 440 L 215 470"
            totalLength={140}
            startFrame={40}
            drawDuration={16}
            strokeWidth={4}
            strokeColor={darkTheme.colors.red}
            hasGlow={true}
          />

          {/* Floating Warning Sign: -30% COMISIÓN drawing */}
          <ProceduralPath
            d="M 480 320 L 740 320 L 740 440 L 480 440 Z"
            totalLength={780}
            startFrame={20}
            drawDuration={28}
            strokeWidth={4}
            strokeColor="#EF4444"
          />
        </svg>

        {/* -30% Tag inside the sketched box */}
        <div
          style={{
            position: "absolute",
            top: 335,
            right: 80,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: interpolate(frame, [35, 45], [0, 1], { extrapolateLeft: "clamp" }),
          }}
        >
          <span style={{ color: "#EF4444", fontWeight: 900, fontSize: 36, letterSpacing: "-0.02em" }}>
            -30% COMISIÓN
          </span>
          <span style={{ color: "#FCA5A5", fontSize: 18, fontWeight: 700, marginTop: 4 }}>
            de intermediarios
          </span>
        </div>

        {/* Procedural Stickman running frantically in the center */}
        <div style={{ position: "absolute", bottom: 155, left: "45%", transform: "translateX(-50%)" }}>
          <ProceduralStickman pose="running" startFrame={5} size={360} />
        </div>
      </div>

      {/* Kinetic Typography */}
      <DarkKineticText
        startFrame={10}
        bottomOffset={130}
        lines={[
          {
            segments: [
              { text: "9 de cada 10 restaurantes sufren esto:" },
            ],
          },
          {
            delayFrames: 25,
            segments: [
              { text: "PDFs ilegibles y" },
              { text: "30% en comisiones.", isPill: true, pillColor: "red" },
            ],
          },
        ]}
      />
    </div>
  );
};
