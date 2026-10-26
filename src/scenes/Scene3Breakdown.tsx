import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { theme } from "../theme";
import { KineticText } from "../components/KineticText";

export const Scene3Breakdown: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: theme.springs.smooth,
  });

  // Falling paper card physics
  const cardDrop = spring({
    frame: frame - 15,
    fps,
    config: { damping: 12, mass: 1, stiffness: 100 },
  });

  const cardY = interpolate(cardDrop, [0, 1], [-180, 240]);
  const cardRot = interpolate(cardDrop, [0, 1], [-20, 35]);

  // Trash bin reaction wobble
  const binWobble = spring({
    frame: frame - 35,
    fps,
    config: theme.springs.bouncy,
  });

  const binScale = interpolate(binWobble, [0, 1], [0.92, 1]);

  // Loss stat badge spring
  const statSpring = spring({
    frame: frame - 45,
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
      {/* Central Visual Stage */}
      <div
        style={{
          position: "absolute",
          top: 160,
          left: 50,
          right: 50,
          height: 980,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 0",
        }}
      >
        {/* Leather Wallet Container */}
        <div
          style={{
            width: 620,
            height: 280,
            backgroundColor: theme.colors.coffee,
            borderRadius: 44,
            border: `5px solid ${theme.colors.coffeeDark}`,
            boxShadow: theme.shadows.floating,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          {/* Wallet flap & gold clasp */}
          <div
            style={{
              position: "absolute",
              top: -30,
              left: 60,
              right: 60,
              height: 58,
              backgroundColor: theme.colors.coffeeDark,
              borderRadius: "26px 26px 0 0",
              border: `4px solid ${theme.colors.coffeeMedium}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 34,
                height: 18,
                borderRadius: 9,
                backgroundColor: "#F59E0B",
                boxShadow: "0 2px 6px rgba(0,0,0,0.4)",
              }}
            />
          </div>

          {/* Overstuffed crumpled receipts & cards sticking out */}
          <div
            style={{
              position: "absolute",
              top: -75,
              left: 70,
              width: 150,
              height: 95,
              backgroundColor: "#F3F4F6",
              borderRadius: 10,
              transform: "rotate(-14deg)",
              border: "2px solid #D1D5DB",
              boxShadow: "0 6px 14px rgba(0,0,0,0.12)",
              padding: 10,
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <span style={{ fontSize: 14, fontWeight: 900, color: "#4B5563" }}>TICKET $4.200</span>
            <span style={{ fontSize: 11, color: "#9CA3AF" }}>Papel arrugado</span>
          </div>

          <div
            style={{
              position: "absolute",
              top: -65,
              right: 80,
              width: 160,
              height: 90,
              backgroundColor: "#FFFBEB",
              borderRadius: 10,
              transform: "rotate(16deg)",
              border: "2px solid #FCD34D",
              boxShadow: "0 6px 14px rgba(0,0,0,0.12)",
              padding: 10,
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <span style={{ fontSize: 14, fontWeight: 900, color: "#B45309" }}>COMPROBANTE</span>
            <span style={{ fontSize: 11, color: "#D97706" }}>Sin espacio</span>
          </div>

          {/* Wallet Label */}
          <div style={{ color: theme.colors.creamLight, fontWeight: 900, fontSize: 34, letterSpacing: "0.08em" }}>
            BILLETERA SATURADA
          </div>
          <div style={{ color: "#E7DCD0", fontWeight: 700, fontSize: 18, marginTop: 8 }}>
            Papeles que nadie guarda más de 2 días
          </div>
        </div>

        {/* Center: The Loss Stat Card */}
        <div
          style={{
            backgroundColor: theme.colors.white,
            border: `3px solid ${theme.colors.redSoft}`,
            borderRadius: 30,
            padding: "20px 36px",
            boxShadow: theme.shadows.medium,
            display: "flex",
            alignItems: "center",
            gap: 20,
            transform: `scale(${statSpring})`,
            zIndex: 12,
          }}
        >
          <span style={{ fontSize: 44 }}>📉</span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontWeight: 900, fontSize: 24, color: theme.colors.red }}>
              8 de cada 10 clientes
            </span>
            <span style={{ fontSize: 16, fontWeight: 700, color: theme.colors.coffeeLight, marginTop: 2 }}>
              No vuelven a pisar el local
            </span>
          </div>
        </div>

        {/* Falling bent card slipping into the trash */}
        <div
          style={{
            position: "absolute",
            top: 380,
            width: 280,
            height: 140,
            backgroundColor: "#FFFDF9",
            border: `3px dashed ${theme.colors.orange}`,
            borderRadius: 20,
            padding: 18,
            boxShadow: theme.shadows.medium,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            transform: `translateY(${cardY}px) rotate(${cardRot}deg)`,
            zIndex: 15,
          }}
        >
          <span style={{ fontSize: 18, fontWeight: 900, color: theme.colors.coffeeDark }}>
            TARJETA DE PUNTOS
          </span>
          <span style={{ fontSize: 14, fontWeight: 800, color: theme.colors.red, marginTop: 6 }}>
            ❌ Al tacho de basura
          </span>
        </div>

        {/* Trash Can at the bottom */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            transform: `scale(${binScale})`,
            zIndex: 5,
          }}
        >
          {/* Trash Lid */}
          <div
            style={{
              width: 280,
              height: 28,
              backgroundColor: "#64748B",
              borderRadius: 14,
              border: "4px solid #334155",
            }}
          />
          {/* Trash Can Body */}
          <div
            style={{
              width: 240,
              height: 230,
              backgroundColor: "#E2E8F0",
              border: "4px solid #475569",
              borderRadius: "0 0 36px 36px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: theme.shadows.medium,
              gap: 12,
            }}
          >
            <span style={{ fontSize: 68 }}>🗑️</span>
            <span style={{ fontSize: 17, fontWeight: 900, color: "#475569" }}>
              TACHO DE BASURA
            </span>
          </div>
        </div>
      </div>

      {/* Kinetic Typography */}
      <KineticText
        startFrame={25}
        bottomOffset={140}
        lines={[
          {
            segments: [
              { text: "¿Por qué el" },
              { text: "80% de los clientes", isPill: true, pillColor: "red" },
            ],
          },
          {
            delayFrames: 30,
            segments: [
              { text: "no vuelve nunca más?", isPill: true, pillColor: "coffee" },
            ],
          },
        ]}
      />
    </div>
  );
};
