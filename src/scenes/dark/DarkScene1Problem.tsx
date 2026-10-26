import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { darkTheme } from "../../darkTheme";
import { DarkKineticText } from "../../components/DarkKineticText";

export const DarkScene1Problem: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Scene Entrance
  const sceneEntrance = spring({
    frame,
    fps,
    config: darkTheme.springs.smooth,
  });

  const sceneScale = interpolate(sceneEntrance, [0, 1], [0.93, 1]);
  const sceneOpacity = interpolate(frame, [0, 8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Top Founder Badge Entrance
  const badgeSpring = spring({
    frame: frame - 5,
    fps,
    config: darkTheme.springs.punchy,
  });

  // Central Card Spring (Smartphone & Friction Cards)
  const cardSpring = spring({
    frame: frame - 18,
    fps,
    config: darkTheme.springs.bouncy,
  });

  // Floating Warning Card Spring
  const warningSpring = spring({
    frame: frame - 35,
    fps,
    config: darkTheme.springs.punchy,
  });

  // Subtle floating wobble for the phone
  const phoneWobble = Math.sin(frame * 0.08) * 6;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        opacity: sceneOpacity,
        transform: `scale(${sceneScale})`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Top Founder Identity Pill */}
      <div
        style={{
          position: "absolute",
          top: 70,
          background: "linear-gradient(135deg, rgba(30, 37, 51, 0.9) 0%, rgba(15, 20, 31, 0.95) 100%)",
          border: `1.5px solid ${darkTheme.colors.borderMetallicBright}`,
          borderRadius: 9999,
          padding: "10px 28px",
          display: "flex",
          alignItems: "center",
          gap: 12,
          boxShadow: darkTheme.shadows.metallicDeep,
          transform: `scale(${badgeSpring})`,
          zIndex: 30,
        }}
      >
        <span
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: darkTheme.colors.red,
            boxShadow: `0 0 10px ${darkTheme.colors.red}`,
          }}
        />
        <span
          style={{
            color: darkTheme.colors.silverLight,
            fontWeight: 800,
            fontSize: 20,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          FOUNDER DEV LOG #01 · EL PROBLEMA
        </span>
      </div>

      {/* Main Visual Stage: Central Phone with Broken PDF & Delivery App */}
      <div
        style={{
          position: "absolute",
          top: 170,
          width: 580,
          height: 980,
          transform: `scale(${cardSpring}) translateY(${phoneWobble}px)`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 20,
        }}
      >
        {/* Smartphone Titanium Body */}
        <div
          style={{
            width: 480,
            height: 840,
            backgroundColor: "#0A0D14",
            borderRadius: 56,
            border: "8px solid #232B3B",
            boxShadow: "0 30px 80px rgba(0, 0, 0, 0.9), inset 0 0 20px rgba(255, 255, 255, 0.05)",
            padding: "24px 20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Dynamic Island / Notch */}
          <div
            style={{
              width: 130,
              height: 26,
              backgroundColor: "#000000",
              borderRadius: 20,
              marginBottom: 24,
            }}
          />

          {/* Simulated Slow/Broken PDF Viewer Screen */}
          <div
            style={{
              width: "100%",
              flex: 1,
              backgroundColor: "#131824",
              borderRadius: 36,
              border: `1.5px solid ${darkTheme.colors.borderMetallic}`,
              padding: 24,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {/* Red PDF Icon with Glitch */}
            <div
              style={{
                width: 90,
                height: 105,
                backgroundColor: "#2B1417",
                border: "2px solid #EF4444",
                borderRadius: 16,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: darkTheme.shadows.glowRed,
                gap: 6,
              }}
            >
              <span style={{ fontSize: 34 }}>📄</span>
              <span
                style={{
                  color: darkTheme.colors.red,
                  fontWeight: 900,
                  fontSize: 16,
                  letterSpacing: "0.06em",
                }}
              >
                PDF
              </span>
            </div>

            <span
              style={{
                color: darkTheme.colors.white,
                fontWeight: 900,
                fontSize: 26,
                marginTop: 20,
                textAlign: "center",
              }}
            >
              menu_final_v3_rev.pdf
            </span>

            {/* Slow loading bar */}
            <div
              style={{
                width: "80%",
                height: 10,
                backgroundColor: "#1E2536",
                borderRadius: 5,
                marginTop: 18,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${Math.min(95, (frame * 1.2) % 100)}%`,
                  height: "100%",
                  backgroundColor: darkTheme.colors.red,
                  boxShadow: `0 0 10px ${darkTheme.colors.red}`,
                }}
              />
            </div>
            <span
              style={{
                color: darkTheme.colors.steel,
                fontSize: 18,
                fontWeight: 700,
                marginTop: 10,
              }}
            >
              Descargando 25.4 MB... (Lento)
            </span>

            {/* Error Badge */}
            <div
              style={{
                marginTop: 24,
                backgroundColor: "rgba(239, 68, 68, 0.15)",
                border: "1.5px solid #EF4444",
                padding: "8px 20px",
                borderRadius: 20,
                color: "#FCA5A5",
                fontWeight: 800,
                fontSize: 16,
              }}
            >
              ❌ Precios desactualizados
            </div>
          </div>
        </div>

        {/* Floating Giant Loss Pill (-30% en Comisiones) */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: -20,
            background: "linear-gradient(135deg, #2D1418 0%, #15090B 100%)",
            border: "2px solid #EF4444",
            boxShadow: darkTheme.shadows.glowRed,
            borderRadius: 30,
            padding: "16px 32px",
            display: "flex",
            alignItems: "center",
            gap: 16,
            transform: `scale(${warningSpring}) rotate(-3deg)`,
            zIndex: 40,
          }}
        >
          <span style={{ fontSize: 44 }}>💸</span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                color: darkTheme.colors.white,
                fontWeight: 900,
                fontSize: 28,
                lineHeight: 1.1,
              }}
            >
              -30% DE COMISIÓN
            </span>
            <span
              style={{
                color: "#FCA5A5",
                fontWeight: 700,
                fontSize: 16,
                marginTop: 4,
              }}
            >
              en cada plato vendido por delivery
            </span>
          </div>
        </div>
      </div>

      {/* High-Impact White Kinetic Typography */}
      <DarkKineticText
        startFrame={10}
        bottomOffset={130}
        lines={[
          {
            segments: [
              { text: "Me cansé de ver restaurantes" },
            ],
          },
          {
            delayFrames: 25,
            segments: [
              { text: "perdiendo el" },
              { text: "30% en comisiones.", isPill: true, pillColor: "red" },
            ],
          },
        ]}
      />
    </div>
  );
};
