import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { darkTheme } from "../../darkTheme";
import { Stickman } from "../../components/stickman/Stickman";
import { DarkKineticText } from "../../components/DarkKineticText";

export const StickmanScene4Celebrate: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: darkTheme.springs.smooth,
  });

  const cardSpring = spring({
    frame: frame - 15,
    fps,
    config: darkTheme.springs.bouncy,
  });

  const buttonPulse = 1 + 0.035 * Math.sin(frame * 0.25);

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
          border: `1.5px solid ${darkTheme.colors.cyan}`,
          borderRadius: 9999,
          padding: "10px 28px",
          display: "flex",
          alignItems: "center",
          gap: 12,
          boxShadow: darkTheme.shadows.glowCyan,
          zIndex: 30,
        }}
      >
        <span style={{ fontSize: 22 }}>🎉</span>
        <span
          style={{
            color: darkTheme.colors.white,
            fontWeight: 800,
            fontSize: 20,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          MODERNIZÁ TU BAR · SUMATE AL CAMBIO
        </span>
      </div>

      {/* Center Stage: Celebrating Stickman + CTA Card */}
      <div
        style={{
          position: "absolute",
          top: 200,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
          zIndex: 20,
        }}
      >
        {/* Celebrating Stickman jumping */}
        <Stickman pose="celebrate" size={340} />

        {/* CTA Titanium Card */}
        <div
          style={{
            width: 760,
            backgroundColor: "#0F1626",
            border: "2px solid #2B3D5E",
            borderRadius: 36,
            padding: "36px 40px",
            boxShadow: "0 30px 80px rgba(0,0,0,0.9), 0 0 45px rgba(0, 229, 255, 0.15)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            transform: `scale(${cardSpring})`,
          }}
        >
          <span style={{ color: darkTheme.colors.white, fontWeight: 900, fontSize: 38, textAlign: "center" }}>
            Transformá el menú de tu restaurante
          </span>
          <span style={{ color: darkTheme.colors.silver, fontSize: 20, fontWeight: 600, marginTop: 8, textAlign: "center" }}>
            Sin tarjetas de crédito requeridas · Activación en 1 minuto
          </span>

          {/* Glowing CTA Button */}
          <div
            style={{
              marginTop: 28,
              width: "100%",
              background: "linear-gradient(135deg, #00E5FF 0%, #10B981 100%)",
              borderRadius: 24,
              padding: "20px 30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              boxShadow: "0 15px 40px rgba(0, 229, 255, 0.35)",
              transform: `scale(${buttonPulse})`,
              cursor: "pointer",
            }}
          >
            <span style={{ fontSize: 32 }}>📲</span>
            <span
              style={{
                color: "#041B22",
                fontWeight: 900,
                fontSize: 26,
                letterSpacing: "-0.01em",
                textTransform: "uppercase",
              }}
            >
              Probá 30 días gratis · Link en bio
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
              { text: "Hacé como Juan:", isPill: true, pillColor: "metallic" },
            ],
          },
          {
            delayFrames: 25,
            segments: [
              { text: "Probá Carta App gratis en el" },
              { text: "link de la bio 🚀", isPill: true, pillColor: "green" },
            ],
          },
        ]}
      />
    </div>
  );
};
