import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { darkTheme } from "../../darkTheme";
import { Stickman } from "../../components/stickman/Stickman";
import { DarkKineticText } from "../../components/DarkKineticText";

export const StickmanScene2Eureka: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: darkTheme.springs.smooth,
  });

  // Phone modal entrance
  const phoneSpring = spring({
    frame: frame - 20,
    fps,
    config: darkTheme.springs.bouncy,
  });

  // QR badge entrance
  const qrSpring = spring({
    frame: frame - 35,
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
        <span style={{ fontSize: 22 }}>💡</span>
        <span
          style={{
            color: darkTheme.colors.white,
            fontWeight: 800,
            fontSize: 20,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          EL MOMENTO EUREKA · LA SOLUCIÓN
        </span>
      </div>

      {/* Center Stage: Eureka Stickman + Floating App Mockup */}
      <div
        style={{
          position: "absolute",
          top: 220,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 40,
          zIndex: 20,
        }}
      >
        {/* Animated Eureka Stickman */}
        <Stickman pose="eureka" size={360} />

        {/* Floating App Phone Preview */}
        <div
          style={{
            width: 380,
            backgroundColor: "#0F1626",
            border: `2.5px solid ${darkTheme.colors.cyan}`,
            borderRadius: 36,
            padding: "24px 22px",
            boxShadow: darkTheme.shadows.glowCyan,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            transform: `scale(${phoneSpring})`,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <span style={{ fontSize: 28 }}>🍽️</span>
            <span style={{ color: darkTheme.colors.white, fontWeight: 900, fontSize: 24 }}>
              Carta App
            </span>
            <span
              style={{
                backgroundColor: "rgba(0, 229, 255, 0.2)",
                color: darkTheme.colors.cyan,
                fontSize: 12,
                fontWeight: 900,
                padding: "4px 10px",
                borderRadius: 12,
              }}
            >
              MODO REELS
            </span>
          </div>

          <div
            style={{
              width: "100%",
              height: 220,
              backgroundColor: "#162035",
              borderRadius: 24,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #233352",
              gap: 8,
            }}
          >
            <span style={{ fontSize: 80, filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.5))" }}>
              🍕
            </span>
            <span style={{ color: darkTheme.colors.white, fontWeight: 900, fontSize: 22 }}>
              Pizza Napolitana Especial
            </span>
            <span style={{ color: darkTheme.colors.cyan, fontWeight: 800, fontSize: 20 }}>
              $8.500
            </span>
          </div>

          {/* Floating High-Res QR code badge */}
          <div
            style={{
              marginTop: 18,
              width: "100%",
              background: "linear-gradient(135deg, #1A263D 0%, #10192A 100%)",
              border: "1.5px solid #33476D",
              borderRadius: 20,
              padding: "12px 18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              transform: `scale(${qrSpring})`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 32 }}>📲</span>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ color: darkTheme.colors.white, fontWeight: 800, fontSize: 17 }}>
                  Código QR 1024px
                </span>
                <span style={{ color: darkTheme.colors.steel, fontSize: 13, fontWeight: 600 }}>
                  Listo para imprimir en mesas
                </span>
              </div>
            </div>
            <span style={{ color: darkTheme.colors.green, fontSize: 20, fontWeight: 900 }}>✓</span>
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
              { text: "Hasta que descubrió Carta App:" },
            ],
          },
          {
            delayFrames: 25,
            segments: [
              { text: "Menús en formato" },
              { text: "Reels.", isPill: true, pillColor: "orange" },
              { text: "Cero PDFs.", isPill: true, pillColor: "cyan" },
            ],
          },
        ]}
      />
    </div>
  );
};
