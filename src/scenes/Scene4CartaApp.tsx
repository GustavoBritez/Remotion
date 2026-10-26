import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { theme } from "../theme";
import { KineticText } from "../components/KineticText";

export const Scene4CartaApp: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Phone scale entrance
  const phoneSpring = spring({
    frame,
    fps,
    config: theme.springs.punchy,
  });

  const phoneScale = interpolate(phoneSpring, [0, 1], [0.85, 1]);
  const phoneOpacity = interpolate(frame, [0, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Floating badge entrance (Cero descargas)
  const badgeSpring = spring({
    frame: frame - 25,
    fps,
    config: theme.springs.bouncy,
  });

  // Loyalty Stamp Toast entrance (frames 90+) and fade out before modal (185-200)
  const toastSpring = spring({
    frame: frame - 90,
    fps,
    config: theme.springs.bouncy,
  });

  const toastOpacity = interpolate(frame, [90, 105, 185, 198], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Reward Modal entrance (frames 200+)
  const rewardSpring = spring({
    frame: frame - 200,
    fps,
    config: theme.springs.bouncy,
  });

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        opacity: phoneOpacity,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Smartphone Hero Mockup */}
      <div
        style={{
          position: "absolute",
          top: 150,
          width: 500,
          height: 940,
          backgroundColor: "#18181B",
          borderRadius: 60,
          border: "12px solid #27272A",
          boxShadow: theme.shadows.floating,
          transform: `scale(${phoneScale})`,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          zIndex: 10,
        }}
      >
        {/* Dynamic Island / Speaker Notch */}
        <div
          style={{
            position: "absolute",
            top: 16,
            left: "50%",
            transform: "translateX(-50%)",
            width: 140,
            height: 32,
            backgroundColor: "#09090B",
            borderRadius: 20,
            zIndex: 50,
          }}
        />

        {/* Screen Content: CartaApp Custom Interface */}
        <div
          style={{
            flex: 1,
            backgroundColor: theme.colors.creamLight,
            display: "flex",
            flexDirection: "column",
            padding: "64px 26px 24px 26px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* App Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: 18,
              borderBottom: `2px solid ${theme.colors.creamBorder}`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 14,
                  backgroundColor: theme.colors.orange,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: theme.colors.white,
                  fontWeight: 900,
                  fontSize: 22,
                  boxShadow: theme.shadows.pillOrange,
                }}
              >
                ☕
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontWeight: 900, fontSize: 18, color: theme.colors.coffeeDark }}>
                  Café de Autor
                </span>
                <span style={{ fontSize: 12, color: theme.colors.green, fontWeight: 800 }}>
                  ● Abierto · Pedidos en mesa
                </span>
              </div>
            </div>
            <div
              style={{
                padding: "6px 14px",
                borderRadius: 14,
                backgroundColor: theme.colors.greenSoft,
                color: theme.colors.greenDark,
                fontSize: 13,
                fontWeight: 900,
              }}
            >
              Mesa 04
            </div>
          </div>

          {/* Category Tabs */}
          <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
            <div
              style={{
                backgroundColor: theme.colors.coffeeDark,
                color: theme.colors.white,
                padding: "8px 18px",
                borderRadius: 16,
                fontSize: 14,
                fontWeight: 800,
              }}
            >
              Cafetería
            </div>
            <div
              style={{
                backgroundColor: theme.colors.creamDark,
                color: theme.colors.coffeeMedium,
                padding: "8px 18px",
                borderRadius: 16,
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              Pastelería
            </div>
            <div
              style={{
                backgroundColor: theme.colors.creamDark,
                color: theme.colors.coffeeMedium,
                padding: "8px 18px",
                borderRadius: 16,
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              Brunch
            </div>
          </div>

          {/* Menu Items */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 22 }}>
            {/* Item 1 */}
            <div
              style={{
                backgroundColor: theme.colors.white,
                borderRadius: 24,
                padding: 18,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0 4px 14px rgba(0,0,0,0.04)",
                border: `1.5px solid ${theme.colors.creamBorder}`,
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontWeight: 900, fontSize: 18, color: theme.colors.coffeeDark }}>
                  Flat White Doble
                </span>
                <span style={{ fontSize: 13, color: theme.colors.coffeeLight, marginTop: 2 }}>
                  Café de especialidad 85 pts
                </span>
                <span style={{ fontWeight: 900, fontSize: 16, color: theme.colors.orange, marginTop: 6 }}>
                  $2.500
                </span>
              </div>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  backgroundColor: theme.colors.orangeSoft,
                  color: theme.colors.orange,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: 22,
                }}
              >
                +
              </div>
            </div>

            {/* Item 2 */}
            <div
              style={{
                backgroundColor: theme.colors.white,
                borderRadius: 24,
                padding: 18,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0 4px 14px rgba(0,0,0,0.04)",
                border: `1.5px solid ${theme.colors.creamBorder}`,
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontWeight: 900, fontSize: 18, color: theme.colors.coffeeDark }}>
                  Medialuna con Almíbar
                </span>
                <span style={{ fontSize: 13, color: theme.colors.coffeeLight, marginTop: 2 }}>
                  100% manteca recién horneada
                </span>
                <span style={{ fontWeight: 900, fontSize: 16, color: theme.colors.orange, marginTop: 6 }}>
                  $1.200
                </span>
              </div>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  backgroundColor: theme.colors.orangeSoft,
                  color: theme.colors.orange,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: 22,
                }}
              >
                +
              </div>
            </div>
          </div>

          {/* Interactive Stamp Toast (Appears at frame 90+, placed cleanly over menu) */}
          <div
            style={{
              position: "absolute",
              top: 155,
              left: 20,
              right: 20,
              backgroundColor: theme.colors.coffeeDark,
              color: theme.colors.white,
              borderRadius: 24,
              padding: "18px 22px",
              boxShadow: theme.shadows.floating,
              display: "flex",
              flexDirection: "column",
              gap: 10,
              transform: `scale(${toastSpring}) translateY(${interpolate(toastSpring, [0, 1], [-40, 0])}px)`,
              opacity: toastOpacity,
              zIndex: 35,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontWeight: 900, fontSize: 16, color: theme.colors.orange }}>
                ✨ ¡Sellaste tu visita!
              </span>
              <span style={{ fontWeight: 800, fontSize: 14, color: theme.colors.green }}>
                1 / 5 visitas
              </span>
            </div>
            {/* 5 dots progress */}
            <div style={{ display: "flex", gap: 12, marginTop: 4 }}>
              {[1, 2, 3, 4, 5].map((idx) => {
                const isEarned = idx === 1;
                return (
                  <div
                    key={idx}
                    style={{
                      flex: 1,
                      height: 12,
                      borderRadius: 6,
                      backgroundColor: isEarned ? theme.colors.green : "rgba(255,255,255,0.2)",
                      boxShadow: isEarned ? "0 0 12px rgba(34, 197, 94, 0.7)" : "none",
                    }}
                  />
                );
              })}
            </div>
          </div>

          {/* Reward Wheel / Modal (Appears at frame 200+) */}
          <div
            style={{
              position: "absolute",
              bottom: 30,
              left: 20,
              right: 20,
              backgroundColor: theme.colors.white,
              borderRadius: 30,
              padding: "24px 20px",
              boxShadow: theme.shadows.floating,
              border: `3px solid ${theme.colors.orange}`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transform: `scale(${rewardSpring})`,
              opacity: interpolate(rewardSpring, [0, 1], [0, 1]),
              zIndex: 40,
            }}
          >
            <span style={{ fontSize: 50 }}>🥐</span>
            <span style={{ fontWeight: 900, fontSize: 20, color: theme.colors.orange, marginTop: 8 }}>
              ¡Te ganaste una medialuna!
            </span>
            <span style={{ fontSize: 14, fontWeight: 700, color: theme.colors.coffeeLight, textAlign: "center", marginTop: 4 }}>
              Válida para tu próxima merienda
            </span>
            <div
              style={{
                marginTop: 16,
                backgroundColor: theme.colors.green,
                color: theme.colors.white,
                padding: "10px 28px",
                borderRadius: 16,
                fontWeight: 900,
                fontSize: 15,
                boxShadow: theme.shadows.pillGreen,
              }}
            >
              Guardar en mi WhatsApp ✓
            </div>
          </div>
        </div>
      </div>

      {/* Floating Badge: Cero descargas */}
      <div
        style={{
          position: "absolute",
          top: 90,
          backgroundColor: theme.colors.coffeeDark,
          color: theme.colors.white,
          padding: "12px 32px",
          borderRadius: 26,
          fontWeight: 900,
          fontSize: 24,
          boxShadow: theme.shadows.medium,
          transform: `scale(${badgeSpring})`,
          zIndex: 60,
        }}
      >
        ⚡ Cero descargas · Cero registros
      </div>

      {/* Kinetic Typography */}
      <KineticText
        startFrame={20}
        bottomOffset={140}
        lines={[
          {
            segments: [
              { text: "Tu carta en", isPill: false },
              { text: "1 segundo.", isPill: true, pillColor: "orange" },
            ],
          },
          {
            delayFrames: 45,
            segments: [
              { text: "Con tu marca y tu propio club.", isPill: true, pillColor: "green" },
            ],
          },
        ]}
      />
    </div>
  );
};
