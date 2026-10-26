import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { darkTheme } from "../../darkTheme";
import { DarkKineticText } from "../../components/DarkKineticText";

export const DarkScene3ProductMagic: React.FC = () => {
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

  // Phone Mockup Entrance
  const phoneSpring = spring({
    frame: frame - 12,
    fps,
    config: darkTheme.springs.bouncy,
  });

  // WhatsApp Bubble Popout Entrance
  const waSpring = spring({
    frame: frame - 38,
    fps,
    config: darkTheme.springs.punchy,
  });

  // 0% Commission Badge Entrance
  const feeSpring = spring({
    frame: frame - 55,
    fps,
    config: darkTheme.springs.bouncy,
  });

  // Button pulse
  const btnPulse = 1 + 0.03 * Math.sin(frame * 0.25);

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
            backgroundColor: darkTheme.colors.green,
            boxShadow: `0 0 10px ${darkTheme.colors.green}`,
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
          FOUNDER DEV LOG #03 · EL PRODUCTO
        </span>
      </div>

      {/* Main Visual Stage: Phone with Reels Food Menu & WhatsApp Popout */}
      <div
        style={{
          position: "absolute",
          top: 160,
          width: 580,
          height: 980,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 20,
        }}
      >
        {/* Smartphone Dark Titanium Frame */}
        <div
          style={{
            width: 500,
            height: 860,
            backgroundColor: "#080B11",
            borderRadius: 56,
            border: "8px solid #283348",
            boxShadow: "0 35px 90px rgba(0, 0, 0, 0.95), 0 0 40px rgba(16, 185, 129, 0.12)",
            padding: "20px 18px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            transform: `scale(${phoneSpring})`,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Dynamic Island */}
          <div
            style={{
              width: 140,
              height: 28,
              backgroundColor: "#000000",
              borderRadius: 20,
              marginBottom: 16,
              zIndex: 10,
            }}
          />

          {/* Full-Screen Reels Menu Item Inside Phone */}
          <div
            style={{
              width: "100%",
              flex: 1,
              borderRadius: 36,
              background: "linear-gradient(180deg, #182236 0%, #0B101D 100%)",
              border: "1.5px solid #2B3852",
              padding: 24,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Top Bar inside app: Restaurant branding + Mode Reels tag */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 28 }}>🍔</span>
                <span style={{ color: darkTheme.colors.white, fontWeight: 900, fontSize: 20 }}>
                  Burger House
                </span>
              </div>
              <div
                style={{
                  backgroundColor: "rgba(255, 107, 43, 0.2)",
                  border: "1px solid #FF6B2B",
                  color: "#FF8E53",
                  fontSize: 14,
                  fontWeight: 800,
                  padding: "6px 14px",
                  borderRadius: 20,
                }}
              >
                MODO REELS 🎥
              </div>
            </div>

            {/* Central Graphic: Delicious Steaming Dish Illustration */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                margin: "auto 0",
              }}
            >
              <div
                style={{
                  width: 220,
                  height: 220,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(255,107,43,0.3) 0%, transparent 70%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 120,
                  filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.6))",
                }}
              >
                🍔
              </div>
              <span
                style={{
                  color: darkTheme.colors.white,
                  fontWeight: 900,
                  fontSize: 34,
                  letterSpacing: "-0.02em",
                }}
              >
                Smash Trufada Doble
              </span>
              <span
                style={{
                  color: darkTheme.colors.silver,
                  fontSize: 18,
                  fontWeight: 600,
                  marginTop: 6,
                  textAlign: "center",
                }}
              >
                Doble medallón Angus, cheddar fundido y pan brioche
              </span>
              <span
                style={{
                  color: darkTheme.colors.cyan,
                  fontSize: 30,
                  fontWeight: 900,
                  marginTop: 10,
                }}
              >
                $7.500
              </span>
            </div>

            {/* Bottom Actions inside app: WhatsApp Order Button */}
            <div
              style={{
                width: "100%",
                background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                borderRadius: 22,
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                boxShadow: darkTheme.shadows.glowGreen,
                transform: `scale(${btnPulse})`,
              }}
            >
              <span style={{ fontSize: 26 }}>📲</span>
              <span style={{ color: darkTheme.colors.white, fontWeight: 900, fontSize: 22 }}>
                Pedir por WhatsApp (Sin Comisión)
              </span>
            </div>
          </div>
        </div>

        {/* Floating WhatsApp Realtime Comanda Card */}
        <div
          style={{
            position: "absolute",
            top: 140,
            right: -130,
            width: 440,
            backgroundColor: "#075E54",
            background: "linear-gradient(135deg, #123C32 0%, #0A221C 100%)",
            border: "2px solid #25D366",
            borderRadius: 28,
            padding: "20px 24px",
            boxShadow: "0 25px 60px rgba(0,0,0,0.85), 0 0 35px rgba(37, 211, 102, 0.4)",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            transform: `scale(${waSpring}) rotate(2deg)`,
            zIndex: 40,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 26 }}>💬</span>
              <span style={{ color: "#25D366", fontWeight: 900, fontSize: 20 }}>
                WhatsApp del Bar
              </span>
            </div>
            <span style={{ color: "#86EFAC", fontWeight: 800, fontSize: 16 }}>
              14:20 ✓✓
            </span>
          </div>

          <div style={{ color: darkTheme.colors.white, fontWeight: 800, fontSize: 22, lineHeight: 1.3 }}>
            "¡Hola! Mesa 4 confirmó su pedido:
            <br />
            2x Smash Trufada + 1x Papas"
          </div>

          <div
            style={{
              marginTop: 6,
              borderTop: "1px solid rgba(255,255,255,0.15)",
              paddingTop: 10,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ color: darkTheme.colors.silverLight, fontSize: 17, fontWeight: 700 }}>
              Total: $15.000
            </span>
            <span
              style={{
                backgroundColor: "#25D366",
                color: "#052e16",
                fontWeight: 900,
                fontSize: 15,
                padding: "4px 12px",
                borderRadius: 12,
              }}
            >
              0% COMISIÓN ✓
            </span>
          </div>
        </div>

        {/* Floating Switch Button Badge */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: -80,
            backgroundColor: "#161E2D",
            border: "2px solid #38BDF8",
            boxShadow: darkTheme.shadows.glowCyan,
            borderRadius: 24,
            padding: "16px 26px",
            display: "flex",
            alignItems: "center",
            gap: 16,
            transform: `scale(${feeSpring}) rotate(-3deg)`,
            zIndex: 40,
          }}
        >
          <span style={{ fontSize: 36 }}>⚡</span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: darkTheme.colors.white, fontWeight: 900, fontSize: 22 }}>
              Agotar plato en 1 clic
            </span>
            <span style={{ color: darkTheme.colors.cyan, fontSize: 16, fontWeight: 700, marginTop: 2 }}>
              Switch instantáneo desde el Admin
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
              { text: "Menú interactivo tipo Reels.", isPill: true, pillColor: "orange" },
            ],
          },
          {
            delayFrames: 25,
            segments: [
              { text: "Pedidos directos a" },
              { text: "WhatsApp.", isPill: true, pillColor: "green" },
            ],
          },
        ]}
      />
    </div>
  );
};
