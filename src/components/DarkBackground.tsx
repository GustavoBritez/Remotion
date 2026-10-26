import React from "react";
import { useCurrentFrame } from "remotion";
import { darkTheme } from "../darkTheme";

export const DarkBackground: React.FC = () => {
  const frame = useCurrentFrame();

  // Gentle ambient lighting pulse
  const glowX = 50 + 15 * Math.sin(frame * 0.03);
  const glowY = 30 + 10 * Math.cos(frame * 0.025);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: darkTheme.colors.bgDark,
        overflow: "hidden",
      }}
    >
      {/* Metallic Tech Dot Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.08) 1.5px, transparent 1.5px)`,
          backgroundSize: "36px 36px",
          opacity: 0.6,
        }}
      />

      {/* Cybernetic Accent Glows */}
      <div
        style={{
          position: "absolute",
          top: `${glowY}%`,
          left: `${glowX}%`,
          transform: "translate(-50%, -50%)",
          width: 900,
          height: 900,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(0, 229, 255, 0.09) 0%, rgba(16, 185, 129, 0.03) 45%, transparent 70%)`,
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      {/* Bottom Subtle Violet/Obsidian Depth Glow */}
      <div
        style={{
          position: "absolute",
          bottom: "-15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 1100,
          height: 700,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(168, 85, 247, 0.06) 0%, transparent 65%)`,
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      {/* Titanium Vignette edges */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          boxShadow: "inset 0 0 160px rgba(0, 0, 0, 0.85)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};
