import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { theme } from "../theme";
import { KineticText } from "../components/KineticText";

export const Scene6CallToAction: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: theme.springs.smooth,
  });

  // Brand card spring
  const brandSpring = spring({
    frame: frame - 20,
    fps,
    config: theme.springs.punchy,
  });

  // CTA button spring
  const ctaSpring = spring({
    frame: frame - 40,
    fps,
    config: theme.springs.bouncy,
  });

  const buttonPulse = 1 + 0.03 * Math.sin(frame * 0.18);

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
      {/* Visual Composition: Coffee Cup + Smartphone Mockup + Brand Card */}
      <div
        style={{
          position: "absolute",
          top: 140,
          left: 50,
          right: 50,
          height: 1000,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Visual Pair: Steaming Cup + Mini Phone */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 40,
            marginBottom: 30,
          }}
        >
          {/* Flat Art Coffee Cup */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: 90,
                height: 65,
                borderRadius: "8px 8px 30px 30px",
                backgroundColor: theme.colors.orange,
                border: `4px solid ${theme.colors.coffeeDark}`,
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
              }}
            >
              {/* Latte Art Foam */}
              <div
                style={{
                  width: 50,
                  height: 20,
                  borderRadius: "50%",
                  backgroundColor: theme.colors.creamLight,
                }}
              />
              {/* Handle */}
              <div
                style={{
                  position: "absolute",
                  right: -18,
                  top: 10,
                  width: 18,
                  height: 32,
                  borderRadius: "0 16px 16px 0",
                  border: `4px solid ${theme.colors.coffeeDark}`,
                  borderLeft: "none",
                }}
              />
            </div>
            {/* Saucer */}
            <div
              style={{
                width: 120,
                height: 14,
                borderRadius: 7,
                backgroundColor: theme.colors.coffeeMedium,
                marginTop: -4,
              }}
            />
          </div>

          {/* Mini Smartphone */}
          <div
            style={{
              width: 140,
              height: 220,
              backgroundColor: "#18181B",
              borderRadius: 28,
              border: "6px solid #27272A",
              padding: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: theme.shadows.medium,
            }}
          >
            <div
              style={{
                width: "100%",
                flex: 1,
                backgroundColor: theme.colors.creamLight,
                borderRadius: 18,
                padding: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{ width: 20, height: 20, borderRadius: 6, backgroundColor: theme.colors.orange, fontSize: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                ☕
              </div>
              <span style={{ fontSize: 9, fontWeight: 900, color: theme.colors.coffeeDark, marginTop: 4 }}>CartaApp</span>
              <div style={{ width: "100%", height: 6, borderRadius: 3, backgroundColor: theme.colors.green, marginTop: 8 }} />
              <div style={{ width: "80%", height: 4, borderRadius: 2, backgroundColor: theme.colors.creamDark, marginTop: 4 }} />
            </div>
          </div>
        </div>

        {/* Brand Container Box */}
        <div
          style={{
            width: "100%",
            backgroundColor: theme.colors.white,
            borderRadius: 44,
            padding: "50px 40px",
            boxShadow: theme.shadows.floating,
            border: `3.5px solid ${theme.colors.creamBorder}`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            transform: `scale(${interpolate(brandSpring, [0, 1], [0.88, 1])})`,
          }}
        >
          {/* Logo Mark */}
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: 26,
                backgroundColor: theme.colors.orange,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: theme.colors.white,
                fontSize: 44,
                boxShadow: theme.shadows.pillOrange,
              }}
            >
              ☕
            </div>
            <span
              style={{
                fontWeight: 900,
                fontSize: 64,
                color: theme.colors.coffeeDark,
                letterSpacing: "-0.04em",
              }}
            >
              CartaApp
            </span>
          </div>

          {/* Subtitle */}
          <div
            style={{
              marginTop: 22,
              fontSize: 26,
              fontWeight: 800,
              color: theme.colors.coffeeMedium,
              textAlign: "center",
              lineHeight: 1.35,
              maxWidth: 620,
            }}
          >
            Carta digital de autor + Fidelización directa a tu WhatsApp
          </div>

          {/* Features Pills */}
          <div style={{ display: "flex", gap: 14, marginTop: 28 }}>
            <div
              style={{
                padding: "10px 22px",
                borderRadius: 18,
                backgroundColor: theme.colors.creamLight,
                border: `1.5px solid ${theme.colors.creamBorder}`,
                fontWeight: 800,
                fontSize: 16,
                color: theme.colors.coffeeDark,
              }}
            >
              ⚡ Sin descargas
            </div>
            <div
              style={{
                padding: "10px 22px",
                borderRadius: 18,
                backgroundColor: theme.colors.creamLight,
                border: `1.5px solid ${theme.colors.creamBorder}`,
                fontWeight: 800,
                fontSize: 16,
                color: theme.colors.coffeeDark,
              }}
            >
              🎯 Sin intermediarios
            </div>
            <div
              style={{
                padding: "10px 22px",
                borderRadius: 18,
                backgroundColor: theme.colors.greenSoft,
                border: `1.5px solid ${theme.colors.green}`,
                fontWeight: 900,
                fontSize: 16,
                color: theme.colors.greenDark,
              }}
            >
              📲 Tu propia app
            </div>
          </div>

          {/* Call To Action Button */}
          <div
            style={{
              marginTop: 40,
              width: "100%",
              backgroundColor: theme.colors.orange,
              color: theme.colors.white,
              borderRadius: 30,
              padding: "26px 36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontSize: 28,
              letterSpacing: "-0.02em",
              boxShadow: theme.shadows.pillOrange,
              transform: `scale(${interpolate(ctaSpring, [0, 1], [0.8, 1]) * buttonPulse})`,
              cursor: "pointer",
            }}
          >
            Probá tu menú gratis en 2 minutos →
          </div>
        </div>
      </div>

      {/* Kinetic Typography at bottom */}
      <KineticText
        startFrame={10}
        bottomOffset={130}
        lines={[
          {
            segments: [
              { text: "No necesitás más mesas." },
            ],
          },
          {
            delayFrames: 25,
            segments: [
              { text: "Necesitás que los que vinieron," },
              { text: "quieran volver.", isPill: true, pillColor: "green" },
            ],
          },
        ]}
      />
    </div>
  );
};
