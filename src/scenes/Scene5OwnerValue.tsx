import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { theme } from "../theme";
import { KineticText } from "../components/KineticText";

export const Scene5OwnerValue: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: theme.springs.smooth,
  });

  // Customer card spring
  const cardSpring = spring({
    frame: frame - 15,
    fps,
    config: theme.springs.bouncy,
  });

  // WhatsApp button click pulse
  const isClicked = frame > 80;
  const clickSpring = spring({
    frame: frame - 80,
    fps,
    config: theme.springs.punchy,
  });

  // Chat preview slide in
  const chatSpring = spring({
    frame: frame - 95,
    fps,
    config: theme.springs.bouncy,
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
      {/* Central Stage: The Owner Dashboard */}
      <div
        style={{
          position: "absolute",
          top: 180,
          left: 50,
          right: 50,
          height: 960,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Dashboard Container (Larger, more detailed) */}
        <div
          style={{
            width: "100%",
            backgroundColor: theme.colors.white,
            borderRadius: 44,
            boxShadow: theme.shadows.floating,
            border: `3px solid ${theme.colors.creamBorder}`,
            padding: "44px 38px",
            display: "flex",
            flexDirection: "column",
            transform: `scale(${interpolate(cardSpring, [0, 1], [0.92, 1])})`,
          }}
        >
          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  backgroundColor: theme.colors.green,
                  boxShadow: "0 0 12px rgba(34, 197, 94, 0.9)",
                }}
              />
              <span style={{ fontWeight: 900, fontSize: 24, color: theme.colors.coffeeDark, letterSpacing: "0.04em" }}>
                PANEL DEL DUEÑO · TIEMPO REAL
              </span>
            </div>
            <div
              style={{
                padding: "6px 16px",
                borderRadius: 14,
                backgroundColor: theme.colors.creamDark,
                color: theme.colors.coffeeDark,
                fontSize: 15,
                fontWeight: 800,
              }}
            >
              Hoy · 14:32 hs
            </div>
          </div>

          {/* Customer Profile: Mili */}
          <div
            style={{
              marginTop: 32,
              backgroundColor: theme.colors.creamLight,
              border: `2.5px solid ${theme.colors.creamBorder}`,
              borderRadius: 30,
              padding: "26px 28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <div
                style={{
                  width: 76,
                  height: 76,
                  borderRadius: 24,
                  backgroundColor: theme.colors.orangeSoft,
                  border: `3px solid ${theme.colors.orange}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 38,
                }}
              >
                👩‍🦰
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontWeight: 900, fontSize: 28, color: theme.colors.coffeeDark }}>
                  Mili Gómez
                </span>
                <span style={{ fontSize: 16, fontWeight: 700, color: theme.colors.coffeeLight, marginTop: 4 }}>
                  Habitual: Flat White Doble · $2.500
                </span>
              </div>
            </div>

            {/* Loyalty frequency pill */}
            <div
              style={{
                backgroundColor: theme.colors.greenSoft,
                color: theme.colors.greenDark,
                padding: "12px 24px",
                borderRadius: 20,
                fontWeight: 900,
                fontSize: 16,
                boxShadow: "0 4px 14px rgba(34, 197, 94, 0.2)",
              }}
            >
              ⭐ 3 visitas esta semana
            </div>
          </div>

          {/* Visit Log Icons */}
          <div
            style={{
              marginTop: 18,
              padding: "14px 22px",
              backgroundColor: "#F8FAFC",
              borderRadius: 20,
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              border: "1px solid #E2E8F0",
            }}
          >
            <span style={{ fontSize: 15, fontWeight: 800, color: theme.colors.coffeeDark }}>
              📅 Lun: Flat White ☕
            </span>
            <span style={{ color: "#CBD5E1" }}>|</span>
            <span style={{ fontSize: 15, fontWeight: 800, color: theme.colors.coffeeDark }}>
              Mié: Flat White + Medialuna 🥐
            </span>
            <span style={{ color: "#CBD5E1" }}>|</span>
            <span style={{ fontSize: 15, fontWeight: 800, color: theme.colors.greenDark }}>
              Hoy: Visitando ahora ⚡
            </span>
          </div>

          {/* Direct WhatsApp Action Button */}
          <div
            style={{
              marginTop: 30,
              width: "100%",
              backgroundColor: theme.colors.green,
              color: theme.colors.white,
              borderRadius: 26,
              padding: "24px 28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              fontWeight: 900,
              fontSize: 24,
              boxShadow: theme.shadows.pillGreen,
              transform: isClicked ? `scale(${interpolate(clickSpring, [0, 1], [0.96, 1])})` : "scale(1)",
              cursor: "pointer",
            }}
          >
            <span style={{ fontSize: 34 }}>💬</span>
            <span>Avisarle: ¡Hoy tu café favorito tiene 20% off!</span>
          </div>

          {/* Simulated WhatsApp Preview Bubble */}
          <div
            style={{
              marginTop: 26,
              backgroundColor: "#DCF8C6",
              border: "1.5px solid #B7E4A8",
              borderRadius: "22px 22px 22px 6px",
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 6,
              boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
              transform: `scale(${chatSpring}) translateY(${interpolate(chatSpring, [0, 1], [30, 0])}px)`,
              opacity: interpolate(chatSpring, [0, 1], [0, 1]),
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontWeight: 900, fontSize: 15, color: "#075E54" }}>
                Mensaje enviado al WhatsApp de Mili:
              </span>
              <span style={{ fontSize: 13, color: "#557D58", fontWeight: 700 }}>14:33 ✓✓</span>
            </div>
            <span style={{ fontSize: 18, fontWeight: 700, color: "#1F2937", lineHeight: 1.45 }}>
              "¡Hola Mili! ☕ Vimos que te encanta el Flat White. ¡Hoy pasá por el local y tenés 20% de regalo en tu mesa!"
            </span>
          </div>
        </div>
      </div>

      {/* Kinetic Typography */}
      <KineticText
        startFrame={20}
        bottomOffset={140}
        lines={[
          {
            segments: [
              { text: "El cliente no se registra en una app rara." },
            ],
          },
          {
            delayFrames: 40,
            segments: [
              { text: "El cliente te queda a vos, en tu" },
              { text: "WhatsApp.", isPill: true, pillColor: "green" },
            ],
          },
        ]}
      />
    </div>
  );
};
