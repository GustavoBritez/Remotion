import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { theme } from "../theme";
import { KineticText } from "../components/KineticText";

export const Scene2Friction: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: theme.springs.smooth,
  });

  const cardLeftEnter = spring({
    frame: frame - 5,
    fps,
    config: theme.springs.bouncy,
  });

  const cardRightEnter = spring({
    frame: frame - 20,
    fps,
    config: theme.springs.bouncy,
  });

  // Agonizingly slow PDF progress bar
  const pdfProgress = interpolate(frame, [15, 200], [4, 18], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Spinner rotation
  const spinnerRot = (frame * 12) % 360;

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
      {/* Central Visual Split Screen */}
      <div
        style={{
          position: "absolute",
          top: 180,
          left: 50,
          right: 50,
          height: 980,
          display: "flex",
          gap: 36,
        }}
      >
        {/* LEFT PANEL: The Slow Heavy PDF */}
        <div
          style={{
            flex: 1,
            backgroundColor: theme.colors.white,
            borderRadius: 40,
            boxShadow: theme.shadows.medium,
            border: `3px solid ${theme.colors.redSoft}`,
            padding: "36px 28px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            transform: `translateY(${interpolate(cardLeftEnter, [0, 1], [60, 0])}px)`,
            opacity: interpolate(cardLeftEnter, [0, 1], [0, 1]),
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Top Tag */}
          <div
            style={{
              padding: "8px 22px",
              borderRadius: 20,
              backgroundColor: theme.colors.redSoft,
              color: theme.colors.redDark,
              fontWeight: 900,
              fontSize: 20,
              marginBottom: 28,
            }}
          >
            LOCAL 1 · CARTA QR
          </div>

          {/* Acrylic QR Stand (Larger, more realistic) */}
          <div
            style={{
              width: 190,
              height: 200,
              backgroundColor: "rgba(241, 245, 249, 0.95)",
              border: `3px solid #CBD5E1`,
              borderRadius: 18,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              marginBottom: 28,
              position: "relative",
            }}
          >
            {/* Acrylic stand base */}
            <div
              style={{
                position: "absolute",
                bottom: -10,
                width: 220,
                height: 12,
                borderRadius: 6,
                backgroundColor: "#94A3B8",
              }}
            />
            {/* QR pattern */}
            <div
              style={{
                width: 100,
                height: 100,
                backgroundColor: theme.colors.coffeeDark,
                borderRadius: 10,
                padding: 8,
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 5,
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((k) => (
                <div
                  key={k}
                  style={{
                    backgroundColor: (k * 7) % 3 === 0 ? theme.colors.coffeeDark : theme.colors.white,
                    borderRadius: 2,
                  }}
                />
              ))}
            </div>
            <span style={{ fontSize: 13, fontWeight: 900, marginTop: 10, color: theme.colors.coffeeLight }}>
              ESCANEE EL QR
            </span>
          </div>

          {/* Phone Screen: PDF Stuck */}
          <div
            style={{
              width: "100%",
              backgroundColor: "#FFF5F5",
              border: `2px dashed ${theme.colors.red}`,
              borderRadius: 28,
              padding: "28px 20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* PDF File Icon */}
            <div
              style={{
                width: 76,
                height: 94,
                backgroundColor: theme.colors.red,
                borderRadius: "8px 22px 8px 8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: theme.colors.white,
                fontWeight: 900,
                fontSize: 22,
                boxShadow: "0 8px 20px rgba(239, 68, 68, 0.35)",
                marginBottom: 16,
              }}
            >
              PDF
            </div>

            <span style={{ fontWeight: 900, fontSize: 22, color: theme.colors.coffeeDark, textAlign: "center" }}>
              menu_pesado_v2.pdf
            </span>
            <span style={{ fontWeight: 800, fontSize: 18, color: theme.colors.red, marginTop: 6 }}>
              Descargando: 18.4 MB (18%)
            </span>

            {/* Stuck Progress Bar */}
            <div
              style={{
                width: "100%",
                height: 16,
                backgroundColor: "#FED7D7",
                borderRadius: 8,
                marginTop: 20,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${pdfProgress}%`,
                  height: "100%",
                  backgroundColor: theme.colors.red,
                  borderRadius: 8,
                }}
              />
            </div>

            {/* Slow Spinner & Frustration */}
            <div
              style={{
                marginTop: 20,
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: "50%",
                  border: `4px solid ${theme.colors.redSoft}`,
                  borderTopColor: theme.colors.red,
                  transform: `rotate(${spinnerRot}deg)`,
                }}
              />
              <span style={{ fontSize: 16, fontWeight: 800, color: theme.colors.coffeeLight }}>
                Sin señal · El cliente se cansa 🤦‍♂️
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: The Paper Card in Washing Machine */}
        <div
          style={{
            flex: 1,
            backgroundColor: theme.colors.white,
            borderRadius: 40,
            boxShadow: theme.shadows.medium,
            border: `3px solid ${theme.colors.creamBorder}`,
            padding: "36px 28px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            transform: `translateY(${interpolate(cardRightEnter, [0, 1], [60, 0])}px)`,
            opacity: interpolate(cardRightEnter, [0, 1], [0, 1]),
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Top Tag */}
          <div
            style={{
              padding: "8px 22px",
              borderRadius: 20,
              backgroundColor: theme.colors.creamDark,
              color: theme.colors.coffeeDark,
              fontWeight: 900,
              fontSize: 20,
              marginBottom: 28,
            }}
          >
            LOCAL 2 · TARJETITAS
          </div>

          {/* The Paper Loyalty Card (Larger & Detailed) */}
          <div
            style={{
              width: "100%",
              backgroundColor: "#FFFDF9",
              border: `2px solid #D7CCC8`,
              borderRadius: 24,
              padding: 24,
              boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
              position: "relative",
              transform: "rotate(-2deg)",
            }}
          >
            {/* Bent corner */}
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: 0,
                height: 0,
                borderStyle: "solid",
                borderWidth: "0 28px 28px 0",
                borderColor: `transparent ${theme.colors.creamDark} transparent transparent`,
              }}
            />

            <div style={{ fontWeight: 900, fontSize: 20, color: theme.colors.coffeeDark, textAlign: "center" }}>
              TARJETA DE SELLOS
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: theme.colors.coffeeLight, textAlign: "center", marginTop: 2 }}>
              10 cafés = 1 gratis (Papel de cartón)
            </div>

            {/* 10 stamp circles (only 2 stamped) */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: 12,
                marginTop: 22,
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
                const isStamped = num <= 2;
                return (
                  <div
                    key={num}
                    style={{
                      height: 48,
                      borderRadius: "50%",
                      border: `2px dashed ${isStamped ? theme.colors.orange : "#D7CCC8"}`,
                      backgroundColor: isStamped ? theme.colors.orangeSoft : "transparent",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: isStamped ? theme.colors.orange : "#A1887F",
                      fontWeight: 900,
                      fontSize: 18,
                    }}
                  >
                    {isStamped ? "☕" : num}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Washing Machine & Waste Warning Box */}
          <div
            style={{
              marginTop: "auto",
              width: "100%",
              backgroundColor: "#F3F4F6",
              borderRadius: 28,
              padding: 24,
              display: "flex",
              alignItems: "center",
              gap: 20,
              border: "1px solid #E5E7EB",
            }}
          >
            <span style={{ fontSize: 60 }}>🧺</span>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontWeight: 900, fontSize: 20, color: theme.colors.coffeeDark }}>
                Se lava en la ropa
              </span>
              <span style={{ fontSize: 15, fontWeight: 700, color: theme.colors.coffeeLight, marginTop: 4 }}>
                Termina borrosa, manchada o en la basura
              </span>
            </div>
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
              { text: "PDFs de 20 megas", isPill: true, pillColor: "red" },
              { text: "que nadie abre." },
            ],
          },
          {
            delayFrames: 45,
            segments: [
              { text: "Tarjetitas de papel que van al" },
              { text: "lavarropas.", isPill: true, pillColor: "orange" },
            ],
          },
        ]}
      />
    </div>
  );
};
