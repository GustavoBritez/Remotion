import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { darkTheme } from "../../darkTheme";
import { DarkKineticText } from "../../components/DarkKineticText";

export const DarkScene4CeoGrowth: React.FC = () => {
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

  // Main Founder Card Spring
  const founderCardSpring = spring({
    frame: frame - 15,
    fps,
    config: darkTheme.springs.bouncy,
  });

  // GitHub Repo Card Spring
  const repoSpring = spring({
    frame: frame - 30,
    fps,
    config: darkTheme.springs.punchy,
  });

  // Follow Button Spring
  const followSpring = spring({
    frame: frame - 45,
    fps,
    config: darkTheme.springs.bouncy,
  });

  // Follow Button Continuous Pulse
  const buttonPulse = 1 + 0.035 * Math.sin(frame * 0.22);

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
            backgroundColor: darkTheme.colors.cyan,
            boxShadow: `0 0 10px ${darkTheme.colors.cyan}`,
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
          FOUNDER DEV LOG #04 · CÓDIGO ABIERTO
        </span>
      </div>

      {/* Main Visual Stage: Luxury Titanium Founder Card & Follow CTA */}
      <div
        style={{
          position: "absolute",
          top: 170,
          width: 940,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 20,
        }}
      >
        {/* VIP Founder Titanium Card */}
        <div
          style={{
            width: "100%",
            backgroundColor: "#0D121D",
            borderRadius: 44,
            border: "2.5px solid #334155",
            boxShadow: "0 35px 90px rgba(0, 0, 0, 0.9), 0 0 50px rgba(0, 229, 255, 0.15)",
            padding: "44px 48px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            transform: `scale(${founderCardSpring})`,
            position: "relative",
          }}
        >
          {/* Avatar / Founder Emblem with Glowing Neon Halo */}
          <div
            style={{
              width: 140,
              height: 140,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #00E5FF 0%, #10B981 100%)",
              padding: 4,
              boxShadow: "0 0 35px rgba(0, 229, 255, 0.4)",
              marginBottom: 20,
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                backgroundColor: "#0A0E17",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 68,
              }}
            >
              👨‍💻
            </div>
          </div>

          {/* Name & Title */}
          <span
            style={{
              color: darkTheme.colors.white,
              fontWeight: 900,
              fontSize: 48,
              letterSpacing: "-0.03em",
              textAlign: "center",
            }}
          >
            Gustavo Britez
          </span>
          <span
            style={{
              color: darkTheme.colors.cyan,
              fontWeight: 800,
              fontSize: 24,
              marginTop: 6,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            Fullstack Dev & SaaS Founder
          </span>
          <span
            style={{
              color: darkTheme.colors.silver,
              fontSize: 22,
              fontWeight: 600,
              marginTop: 10,
              textAlign: "center",
            }}
          >
            Documentando la creación y el escalado de micro-SaaS reales
          </span>

          {/* GitHub Repository Card */}
          <div
            style={{
              marginTop: 32,
              width: "100%",
              backgroundColor: "#131A29",
              border: "1.5px solid #28354B",
              borderRadius: 24,
              padding: "20px 28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              transform: `scale(${repoSpring})`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <span style={{ fontSize: 40 }}>🐙</span>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ color: darkTheme.colors.white, fontWeight: 900, fontSize: 24 }}>
                  github.com/GustavoBritez/Food
                </span>
                <span style={{ color: darkTheme.colors.steel, fontSize: 18, fontWeight: 600, marginTop: 2 }}>
                  Repo Público · Next.js 14 · Supabase RLS · Mercado Pago
                </span>
              </div>
            </div>

            <div
              style={{
                backgroundColor: "rgba(0, 229, 255, 0.15)",
                border: "1px solid #00E5FF",
                color: "#E0F7FA",
                fontWeight: 800,
                fontSize: 18,
                padding: "8px 20px",
                borderRadius: 16,
              }}
            >
              ⭐ Open Source
            </div>
          </div>

          {/* Magnetic Glowing Follow Button */}
          <div
            style={{
              marginTop: 36,
              width: "100%",
              background: "linear-gradient(135deg, #00E5FF 0%, #3B82F6 50%, #10B981 100%)",
              borderRadius: 28,
              padding: "24px 32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 18,
              boxShadow: "0 15px 45px rgba(0, 229, 255, 0.4)",
              transform: `scale(${followSpring * buttonPulse})`,
              cursor: "pointer",
            }}
          >
            <span style={{ fontSize: 36 }}>🚀</span>
            <span
              style={{
                color: "#031525",
                fontWeight: 900,
                fontSize: 32,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
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
              { text: "El repo es público:", isPill: true, pillColor: "metallic" },
            ],
          },
          {
            delayFrames: 25,
            segments: [
              { text: "Demo y código en el link de mi" },
              { text: "bio 🚀", isPill: true, pillColor: "cyan" },
            ],
          },
        ]}
      />
    </div>
  );
};
