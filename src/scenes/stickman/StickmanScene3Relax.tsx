import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { darkTheme } from "../../darkTheme";
import { Stickman } from "../../components/stickman/Stickman";
import { DarkKineticText } from "../../components/DarkKineticText";

export const StickmanScene3Relax: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: darkTheme.springs.smooth,
  });

  // WhatsApp order cards entrance
  const card1Spring = spring({
    frame: frame - 15,
    fps,
    config: darkTheme.springs.punchy,
  });

  const card2Spring = spring({
    frame: frame - 35,
    fps,
    config: darkTheme.springs.punchy,
  });

  const feeBadgeSpring = spring({
    frame: frame - 55,
    fps,
    config: darkTheme.springs.bouncy,
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
          border: `1.5px solid ${darkTheme.colors.green}`,
          borderRadius: 9999,
          padding: "10px 28px",
          display: "flex",
          alignItems: "center",
          gap: 12,
          boxShadow: darkTheme.shadows.glowGreen,
          zIndex: 30,
        }}
      >
        <span style={{ fontSize: 22 }}>☕</span>
        <span
          style={{
            color: darkTheme.colors.white,
            fontWeight: 800,
            fontSize: 20,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          EL RESULTADO · TRANQUILIDAD Y VENTAS
        </span>
      </div>

      {/* Center Stage: Relaxed Stickman + WhatsApp Orders Incoming */}
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
        {/* Animated Relaxed Stickman */}
        <Stickman pose="relax" size={380} />

        {/* Incoming Orders Stack */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20, width: 440 }}>
          {/* Order 1: Table Order */}
          <div
            style={{
              background: "linear-gradient(135deg, #133D33 0%, #0B241E 100%)",
              border: "2px solid #25D366",
              boxShadow: darkTheme.shadows.glowGreen,
              borderRadius: 26,
              padding: "18px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              transform: `scale(${card1Spring})`,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ color: "#86EFAC", fontWeight: 900, fontSize: 18 }}>
                💬 WhatsApp · Mesa 5
              </span>
              <span style={{ color: "#A7F3D0", fontSize: 15, fontWeight: 700 }}>21:15 ✓✓</span>
            </div>
            <span style={{ color: darkTheme.colors.white, fontWeight: 800, fontSize: 22 }}>
              2x Hamburguesas + 2x Cervezas
            </span>
            <span style={{ color: "#34D399", fontWeight: 900, fontSize: 20 }}>
              Total: $18.000
            </span>
          </div>

          {/* Order 2: Delivery Takeaway Direct */}
          <div
            style={{
              background: "linear-gradient(135deg, #133D33 0%, #0B241E 100%)",
              border: "2px solid #25D366",
              boxShadow: darkTheme.shadows.glowGreen,
              borderRadius: 26,
              padding: "18px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              transform: `scale(${card2Spring})`,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ color: "#86EFAC", fontWeight: 900, fontSize: 18 }}>
                🛵 Takeaway Directo
              </span>
              <span style={{ color: "#A7F3D0", fontSize: 15, fontWeight: 700 }}>21:18 ✓✓</span>
            </div>
            <span style={{ color: darkTheme.colors.white, fontWeight: 800, fontSize: 22 }}>
              1x Pizza Familiar + Empanadas
            </span>
            <span style={{ color: "#34D399", fontWeight: 900, fontSize: 20 }}>
              Total: $24.500
            </span>
          </div>

          {/* $0 Commission Pill */}
          <div
            style={{
              background: "linear-gradient(135deg, #25D366 0%, #059669 100%)",
              borderRadius: 20,
              padding: "14px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              boxShadow: "0 10px 30px rgba(37, 211, 102, 0.4)",
              transform: `scale(${feeBadgeSpring})`,
            }}
          >
            <span style={{ fontSize: 28 }}>💰</span>
            <span style={{ color: "#062817", fontWeight: 900, fontSize: 22, textTransform: "uppercase" }}>
              Comisión de apps: $0.00 (100% de Juan)
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
              { text: "Pedidos directos a su" },
              { text: "WhatsApp.", isPill: true, pillColor: "green" },
            ],
          },
          {
            delayFrames: 25,
            segments: [
              { text: "Cero comisiones.", isPill: true, pillColor: "metallic" },
              { text: "Control total." },
            ],
          },
        ]}
      />
    </div>
  );
};
