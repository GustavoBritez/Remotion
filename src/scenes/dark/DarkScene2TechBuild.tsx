import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { darkTheme } from "../../darkTheme";
import { DarkKineticText } from "../../components/DarkKineticText";

export const DarkScene2TechBuild: React.FC = () => {
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

  // Terminal Window Entrance
  const terminalSpring = spring({
    frame: frame - 15,
    fps,
    config: darkTheme.springs.bouncy,
  });

  // Tech Pills springs with cascading delays
  const p1 = spring({ frame: frame - 28, fps, config: darkTheme.springs.punchy });
  const p2 = spring({ frame: frame - 40, fps, config: darkTheme.springs.punchy });
  const p3 = spring({ frame: frame - 52, fps, config: darkTheme.springs.punchy });

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
          FOUNDER DEV LOG #02 · EL DESARROLLO
        </span>
      </div>

      {/* Main Visual Stage: Dark Titanium Terminal & Code Window */}
      <div
        style={{
          position: "absolute",
          top: 160,
          width: 960,
          height: 940,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 20,
        }}
      >
        {/* Terminal Window */}
        <div
          style={{
            width: "100%",
            backgroundColor: "#0D111A",
            borderRadius: 36,
            border: "2px solid #283347",
            boxShadow: "0 30px 80px rgba(0, 0, 0, 0.9), 0 0 40px rgba(0, 229, 255, 0.08)",
            padding: "26px 32px",
            display: "flex",
            flexDirection: "column",
            transform: `scale(${terminalSpring})`,
            position: "relative",
          }}
        >
          {/* Mac Header Buttons */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1.5px solid #1E2738",
              paddingBottom: 20,
              marginBottom: 24,
            }}
          >
            <div style={{ display: "flex", gap: 12 }}>
              <div style={{ width: 16, height: 16, borderRadius: "50%", backgroundColor: "#EF4444" }} />
              <div style={{ width: 16, height: 16, borderRadius: "50%", backgroundColor: "#F59E0B" }} />
              <div style={{ width: 16, height: 16, borderRadius: "50%", backgroundColor: "#10B981" }} />
            </div>
            <div
              style={{
                color: darkTheme.colors.steel,
                fontFamily: "monospace",
                fontSize: 18,
                fontWeight: 700,
              }}
            >
              ~/gustavobritez/Food — bash — 80x24
            </div>
            <div style={{ width: 60 }} />
          </div>

          {/* Terminal Code Content */}
          <div
            style={{
              fontFamily: "Consolas, Menlo, Monaco, monospace",
              fontSize: 26,
              lineHeight: 1.6,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div style={{ display: "flex", gap: 14 }}>
              <span style={{ color: darkTheme.colors.cyan }}>$</span>
              <span style={{ color: darkTheme.colors.white, fontWeight: 700 }}>
                npx create-next-app@latest food-saas
              </span>
            </div>

            <div style={{ color: darkTheme.colors.steel, fontSize: 22 }}>
              ✔ Next.js 14 (App Router) + Supabase + TailwindCSS initialized.
            </div>

            {/* Simulated Code Block */}
            <div
              style={{
                marginTop: 14,
                backgroundColor: "#070A10",
                borderRadius: 20,
                padding: "20px 24px",
                border: "1px solid #1C2436",
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <div>
                <span style={{ color: "#F472B6" }}>export const </span>
                <span style={{ color: darkTheme.colors.cyan }}>cartaAppConfig </span>
                <span style={{ color: "#94A3B8" }}>= &#123;</span>
              </div>
              <div style={{ paddingLeft: 28 }}>
                <span style={{ color: "#93C5FD" }}>architecture: </span>
                <span style={{ color: "#86EFAC" }}>"Multi-tenant PostgreSQL RLS"</span>,
              </div>
              <div style={{ paddingLeft: 28 }}>
                <span style={{ color: "#93C5FD" }}>latency: </span>
                <span style={{ color: darkTheme.colors.cyan }}>"&lt; 10ms Edge ISR"</span>,
              </div>
              <div style={{ paddingLeft: 28 }}>
                <span style={{ color: "#93C5FD" }}>orders: </span>
                <span style={{ color: "#86EFAC" }}>"Direct WhatsApp (0% Fee)"</span>,
              </div>
              <div>
                <span style={{ color: "#94A3B8" }}>&#125;;</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Floating Tech Feature Cards */}
        <div
          style={{
            marginTop: 30,
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
        >
          {/* Card 1: Next.js + ISR */}
          <div
            style={{
              backgroundColor: "rgba(15, 20, 31, 0.9)",
              border: `2px solid ${darkTheme.colors.cyan}`,
              boxShadow: darkTheme.shadows.glowCyan,
              borderRadius: 24,
              padding: "20px 18px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              transform: `scale(${p1})`,
            }}
          >
            <span style={{ fontSize: 38 }}>⚡</span>
            <span style={{ color: darkTheme.colors.white, fontWeight: 900, fontSize: 22, marginTop: 8 }}>
              &lt; 10ms ISR
            </span>
            <span style={{ color: darkTheme.colors.silver, fontSize: 16, fontWeight: 700, marginTop: 4 }}>
              Carga instantánea
            </span>
          </div>

          {/* Card 2: Supabase Security */}
          <div
            style={{
              backgroundColor: "rgba(15, 20, 31, 0.9)",
              border: `2px solid ${darkTheme.colors.green}`,
              boxShadow: darkTheme.shadows.glowGreen,
              borderRadius: 24,
              padding: "20px 18px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              transform: `scale(${p2})`,
            }}
          >
            <span style={{ fontSize: 38 }}>🔒</span>
            <span style={{ color: darkTheme.colors.white, fontWeight: 900, fontSize: 22, marginTop: 8 }}>
              Supabase RLS
            </span>
            <span style={{ color: darkTheme.colors.silver, fontSize: 16, fontWeight: 700, marginTop: 4 }}>
              Aislamiento total
            </span>
          </div>

          {/* Card 3: PWA / No App Store */}
          <div
            style={{
              backgroundColor: "rgba(15, 20, 31, 0.9)",
              border: `2px solid ${darkTheme.colors.purple}`,
              boxShadow: "0 0 30px rgba(168, 85, 247, 0.35)",
              borderRadius: 24,
              padding: "20px 18px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              transform: `scale(${p3})`,
            }}
          >
            <span style={{ fontSize: 38 }}>📱</span>
            <span style={{ color: darkTheme.colors.white, fontWeight: 900, fontSize: 22, marginTop: 8 }}>
              PWA Instalable
            </span>
            <span style={{ color: darkTheme.colors.silver, fontSize: 16, fontWeight: 700, marginTop: 4 }}>
              Sin pasar por Store
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
              { text: "Construí Carta App:", isPill: true, pillColor: "metallic" },
            ],
          },
          {
            delayFrames: 25,
            segments: [
              { text: "Stack moderno." },
              { text: "Cero intermediarios.", isPill: true, pillColor: "cyan" },
            ],
          },
        ]}
      />
    </div>
  );
};
