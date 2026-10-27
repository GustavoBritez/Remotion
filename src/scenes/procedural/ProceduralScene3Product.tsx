import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { darkTheme } from "../../darkTheme";
import { ProceduralStickman } from "../../components/stickman/ProceduralStickman";
import { ProceduralPath } from "../../components/stickman/ProceduralPath";
import { DarkKineticText } from "../../components/DarkKineticText";

export const ProceduralScene3Product: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: darkTheme.springs.smooth,
  });

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "#000000",
        opacity: interpolate(entrance, [0, 1], [0, 1]),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Top Procedural Sketch Badge */}
      <div
        style={{
          position: "absolute",
          top: 70,
          background: "rgba(15, 20, 31, 0.8)",
          border: `1.5px dashed ${darkTheme.colors.orange}`,
          borderRadius: 9999,
          padding: "8px 26px",
          display: "flex",
          alignItems: "center",
          gap: 10,
          zIndex: 30,
        }}
      >
        <span style={{ color: darkTheme.colors.orange, fontSize: 16 }}>●</span>
        <span
          style={{
            color: darkTheme.colors.white,
            fontWeight: 800,
            fontSize: 19,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          EXPERIENCIA · REELS + WHATSAPP
        </span>
      </div>

      {/* Main Procedural Canvas: Presenting Stickman + Drawn Smartphone & Burger */}
      <div
        style={{
          position: "absolute",
          top: 180,
          width: 900,
          height: 900,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          viewBox="0 0 800 800"
          width="100%"
          height="100%"
          style={{ position: "absolute", inset: 0, overflow: "visible" }}
        >
          {/* Floor Line */}
          <ProceduralPath
            d="M 60 620 L 740 620"
            totalLength={680}
            startFrame={0}
            drawDuration={20}
            strokeWidth={4}
            strokeColor="rgba(255,255,255,0.3)"
          />

          {/* Smartphone Outline Sketched on Right */}
          <ProceduralPath
            d="M 400 240 C 400 210, 420 190, 450 190 L 710 190 C 740 190, 760 210, 760 240 L 760 580 C 760 610, 740 630, 710 630 L 450 630 C 420 630, 400 610, 400 580 Z"
            totalLength={1400}
            startFrame={6}
            drawDuration={30}
            strokeWidth={5}
            strokeColor={darkTheme.colors.white}
          />

          {/* Burger Outline inside Phone */}
          {/* Top Bun */}
          <ProceduralPath
            d="M 470 360 C 470 290, 690 290, 690 360 Z"
            totalLength={380}
            startFrame={22}
            drawDuration={22}
            strokeWidth={4.5}
            strokeColor={darkTheme.colors.orange}
            hasGlow={true}
          />
          {/* Burger Patty & Melted Cheese */}
          <ProceduralPath
            d="M 460 370 L 700 370"
            totalLength={240}
            startFrame={30}
            drawDuration={14}
            strokeWidth={6}
            strokeColor="#F59E0B"
          />
          <ProceduralPath
            d="M 480 370 Q 510 400 540 370 Q 570 410 600 370 Q 630 400 660 370"
            totalLength={260}
            startFrame={34}
            drawDuration={18}
            strokeWidth={4.5}
            strokeColor="#FBBF24"
          />
          {/* Bottom Bun */}
          <ProceduralPath
            d="M 470 380 L 690 380 Q 690 410 660 410 L 500 410 Q 470 410 470 380 Z"
            totalLength={500}
            startFrame={38}
            drawDuration={20}
            strokeWidth={4.5}
            strokeColor={darkTheme.colors.orange}
          />

          {/* WhatsApp Direct Arrow */}
          <ProceduralPath
            d="M 580 470 Q 580 540 640 540"
            totalLength={160}
            startFrame={44}
            drawDuration={16}
            strokeWidth={4.5}
            strokeColor={darkTheme.colors.green}
            hasGlow={true}
          />
        </svg>

        {/* WhatsApp Realtime Order Bubble inside the phone */}
        <div
          style={{
            position: "absolute",
            bottom: 230,
            right: 40,
            background: "linear-gradient(135deg, #133D33 0%, #0B241E 100%)",
            border: "2px solid #25D366",
            boxShadow: darkTheme.shadows.glowGreen,
            borderRadius: 22,
            padding: "14px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 6,
            opacity: interpolate(frame, [46, 56], [0, 1], { extrapolateLeft: "clamp" }),
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 14 }}>
            <span style={{ color: "#86EFAC", fontWeight: 900, fontSize: 17 }}>
              ✓✓ Pedido recibido (Mesa 4)
            </span>
            <span style={{ color: "#34D399", fontWeight: 800, fontSize: 16 }}>$15.000</span>
          </div>
          <span style={{ color: darkTheme.colors.white, fontSize: 14, fontWeight: 700 }}>
            Comisión de terceros: $0.00
          </span>
        </div>

        {/* Presenting Stickman on the left */}
        <div style={{ position: "absolute", bottom: 155, left: 100 }}>
          <ProceduralStickman pose="presenting" startFrame={5} size={360} />
        </div>
      </div>

      {/* Kinetic Typography */}
      <DarkKineticText
        startFrame={10}
        bottomOffset={130}
        lines={[
          {
            segments: [
              { text: "Menú interactivo en video.", isPill: true, pillColor: "orange" },
            ],
          },
          {
            delayFrames: 25,
            segments: [
              { text: "La comida entra por los ojos y" },
              { text: "se pide al instante.", isPill: true, pillColor: "green" },
            ],
          },
        ]}
      />
    </div>
  );
};
