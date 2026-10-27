import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { darkTheme } from "../../darkTheme";
import { Stickman } from "../../components/stickman/Stickman";
import { DarkKineticText } from "../../components/DarkKineticText";

export const StickmanScene1Stress: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: darkTheme.springs.smooth,
  });

  // Falling bills and stress elements
  const bill1Y = interpolate(frame, [0, 80], [-80, 280]);
  const bill2Y = interpolate(frame, [15, 95], [-80, 340]);

  const pillSpring = spring({
    frame: frame - 25,
    fps,
    config: darkTheme.springs.punchy,
  });

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        opacity: interpolate(entrance, [0, 1], [0, 1]),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Top Identity Badge */}
      <div
        style={{
          position: "absolute",
          top: 80,
          background: "linear-gradient(135deg, rgba(30, 37, 51, 0.9) 0%, rgba(15, 20, 31, 0.95) 100%)",
          border: `1.5px solid ${darkTheme.colors.borderMetallicBright}`,
          borderRadius: 9999,
          padding: "10px 28px",
          display: "flex",
          alignItems: "center",
          gap: 12,
          boxShadow: darkTheme.shadows.metallicDeep,
          zIndex: 30,
        }}
      >
        <span style={{ fontSize: 22 }}>👨‍🍳</span>
        <span
          style={{
            color: darkTheme.colors.white,
            fontWeight: 800,
            fontSize: 20,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          JUAN · DUEÑO DE BAR & RESTAURANTE
        </span>
      </div>

      {/* Center Stage: Stressed Stickman + Rain of Comisiones */}
      <div
        style={{
          position: "absolute",
          top: 220,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 20,
        }}
      >
        {/* Animated Stressed Stickman */}
        <Stickman pose="stressed" size={380} />

        {/* Falling Bill 1: -30% Comisión */}
        <div
          style={{
            position: "absolute",
            top: bill1Y,
            right: -240,
            background: "linear-gradient(135deg, #2D1418 0%, #15090B 100%)",
            border: "2px solid #EF4444",
            boxShadow: darkTheme.shadows.glowRed,
            borderRadius: 24,
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            gap: 12,
            transform: "rotate(10deg)",
          }}
        >
          <span style={{ fontSize: 32 }}>💸</span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: darkTheme.colors.white, fontWeight: 900, fontSize: 22 }}>
              -30% COMISIÓN
            </span>
            <span style={{ color: "#FCA5A5", fontSize: 14, fontWeight: 700 }}>
              Por cada pedido de delivery
            </span>
          </div>
        </div>

        {/* Falling Bill 2: Quejas en salón */}
        <div
          style={{
            position: "absolute",
            top: bill2Y,
            left: -220,
            background: "linear-gradient(135deg, #241C15 0%, #17110C 100%)",
            border: "2px solid #F59E0B",
            borderRadius: 24,
            padding: "16px 22px",
            display: "flex",
            alignItems: "center",
            gap: 12,
            transform: "rotate(-8deg)",
          }}
        >
          <span style={{ fontSize: 30 }}>⏳</span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: darkTheme.colors.white, fontWeight: 900, fontSize: 20 }}>
              "El PDF no carga..."
            </span>
            <span style={{ color: "#FCD34D", fontSize: 14, fontWeight: 700 }}>
              Mesas esperando al mozo
            </span>
          </div>
        </div>

        {/* Large Stress Pill Overhead */}
        <div
          style={{
            marginTop: 40,
            backgroundColor: "rgba(239, 68, 68, 0.2)",
            border: "2px solid #EF4444",
            padding: "12px 32px",
            borderRadius: 9999,
            color: "#FCA5A5",
            fontWeight: 800,
            fontSize: 22,
            boxShadow: darkTheme.shadows.glowRed,
            transform: `scale(${pillSpring})`,
          }}
        >
          ⚠️ Caos operativo en pleno horario pico
        </div>
      </div>

      {/* Kinetic Typography */}
      <DarkKineticText
        startFrame={10}
        bottomOffset={130}
        lines={[
          {
            segments: [
              { text: "Este es Juan. Su bar explota de gente..." },
            ],
          },
          {
            delayFrames: 25,
            segments: [
              { text: "...pero las apps se llevan el" },
              { text: "30% de su margen.", isPill: true, pillColor: "red" },
            ],
          },
        ]}
      />
    </div>
  );
};
