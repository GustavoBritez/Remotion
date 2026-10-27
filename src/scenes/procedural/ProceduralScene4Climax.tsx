import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { darkTheme } from "../../darkTheme";
import { ProceduralStickman } from "../../components/stickman/ProceduralStickman";
import { ProceduralPath } from "../../components/stickman/ProceduralPath";
import { DarkKineticText } from "../../components/DarkKineticText";

export const ProceduralScene4Climax: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: darkTheme.springs.smooth,
  });

  const cardSpring = spring({
    frame: frame - 20,
    fps,
    config: darkTheme.springs.bouncy,
  });

  const followPulse = 1 + 0.03 * Math.sin(frame * 0.28);

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
          EL COMIENZO · BUILD IN PUBLIC
        </span>
      </div>

      {/* Main Procedural Canvas: Celebrating Stickman & Sketched Founder Card */}
      <div
        style={{
          position: "absolute",
          top: 170,
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
          {/* Ground Line */}
          <ProceduralPath
            d="M 60 620 L 740 620"
            totalLength={680}
            startFrame={0}
            drawDuration={20}
            strokeWidth={4}
            strokeColor="rgba(255,255,255,0.3)"
          />

          {/* Procedural Radiating Star Bursts around celebrating stickman */}
          <ProceduralPath
            d="M 280 260 L 250 230 M 520 260 L 550 230 M 400 160 L 400 120 M 320 190 L 290 170 M 480 190 L 510 170"
            totalLength={260}
            startFrame={30}
            drawDuration={20}
            strokeWidth={4.5}
            strokeColor={darkTheme.colors.cyan}
            hasGlow={true}
          />

          {/* Sketched Founder Badge Box at bottom */}
          <ProceduralPath
            d="M 120 460 L 680 460 L 680 580 L 120 580 Z"
            totalLength={1400}
            startFrame={15}
            drawDuration={26}
            strokeWidth={4}
            strokeColor={darkTheme.colors.white}
          />
        </svg>

        {/* Celebrating Stickman in the center */}
        <div style={{ position: "absolute", top: 80 }}>
          <ProceduralStickman pose="celebrating" startFrame={5} size={360} />
        </div>

        {/* Sketched Founder Card Content */}
        <div
          style={{
            position: "absolute",
            bottom: 220,
            width: 540,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            transform: `scale(${cardSpring})`,
            gap: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 26 }}>👨‍💻</span>
            <span style={{ color: darkTheme.colors.white, fontWeight: 900, fontSize: 28 }}>
              Gustavo Britez · Founder
            </span>
          </div>
          <span style={{ color: darkTheme.colors.cyan, fontSize: 18, fontWeight: 800 }}>
            github.com/GustavoBritez/Food · Open Source
          </span>

          {/* Follow Call to Action Button (Pure community & followers, no 30-day trial) */}
          <div
            style={{
              marginTop: 10,
              width: "100%",
              background: "linear-gradient(135deg, #00E5FF 0%, #3B82F6 100%)",
              borderRadius: 20,
              padding: "16px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              boxShadow: "0 10px 35px rgba(0, 229, 255, 0.4)",
              transform: `scale(${followPulse})`,
            }}
          >
            <span style={{ fontSize: 28 }}>🚀</span>
            <span
              style={{
                color: "#031422",
                fontWeight: 900,
                fontSize: 22,
                textTransform: "uppercase",
                letterSpacing: "-0.01em",
              }}
            >
              Seguime para ver cómo escala
            </span>
          </div>
        </div>
      </div>

      {/* Kinetic Typography */}
      <DarkKineticText
        startFrame={10}
        bottomOffset={130}
        lines={[
          {
            segments: [
              { text: "Así nació Carta App:", isPill: true, pillColor: "metallic" },
            ],
          },
          {
            delayFrames: 25,
            segments: [
              { text: "Seguime para más" },
              { text: "dev logs y micro-SaaS 🚀", isPill: true, pillColor: "cyan" },
            ],
          },
        ]}
      />
    </div>
  );
};
