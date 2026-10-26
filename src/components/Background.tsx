import React from "react";
import { theme } from "../theme";

export const Background: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: theme.colors.cream,
        backgroundImage: `radial-gradient(${theme.colors.creamBorder} 2px, transparent 2px)`,
        backgroundSize: "32px 32px",
        overflow: "hidden",
      }}
    >
      {/* Subtle warm center glow */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 900,
          height: 900,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255, 240, 225, 0.7) 0%, rgba(250, 246, 240, 0) 70%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};
