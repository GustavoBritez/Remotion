import { fontFamily } from "./theme";

export { fontFamily };

export const darkTheme = {
  colors: {
    // Deep obsidian & blacks
    bgDark: "#080B11",
    bgDarker: "#040609",
    bgCard: "#0F141F",
    bgCardLighter: "#161D2C",
    bgCardGlass: "rgba(18, 24, 38, 0.75)",

    // Metallic Grays & Titanium
    titaniumDark: "#1E2533",
    titaniumMedium: "#2B3548",
    titaniumLight: "#3E4B63",
    steel: "#64748B",
    silver: "#94A3B8",
    silverLight: "#CBD5E1",
    chrome: "#E2E8F0",
    white: "#FFFFFF",

    // Border highlights (Metallic specular highlights)
    borderMetallic: "rgba(255, 255, 255, 0.12)",
    borderMetallicBright: "rgba(255, 255, 255, 0.28)",
    borderTitanium: "rgba(100, 116, 139, 0.35)",

    // Tech Accents (Neon & Functional)
    cyan: "#00E5FF",
    cyanGlow: "rgba(0, 229, 255, 0.35)",
    cyanSoft: "rgba(0, 229, 255, 0.12)",

    green: "#10B981",
    greenGlow: "rgba(16, 185, 129, 0.35)",
    greenSoft: "rgba(16, 185, 129, 0.15)",

    orange: "#FF6B2B",
    orangeGlow: "rgba(255, 107, 43, 0.35)",
    orangeSoft: "rgba(255, 107, 43, 0.15)",

    red: "#EF4444",
    redGlow: "rgba(239, 68, 68, 0.4)",
    redSoft: "rgba(239, 68, 68, 0.15)",

    purple: "#A855F7",
    purpleGlow: "rgba(168, 85, 247, 0.35)",
  },

  gradients: {
    metallicCard:
      "linear-gradient(145deg, rgba(28, 36, 52, 0.85) 0%, rgba(13, 18, 27, 0.95) 100%)",
    titaniumBorder:
      "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.2) 100%)",
    chromePill:
      "linear-gradient(180deg, #2D3748 0%, #171923 100%)",
    cyanGlowGradient:
      "linear-gradient(90deg, #00E5FF 0%, #3B82F6 100%)",
    emeraldGlowGradient:
      "linear-gradient(90deg, #10B981 0%, #059669 100%)",
    ceoGlowGradient:
      "linear-gradient(90deg, #00E5FF 0%, #10B981 50%, #FF6B2B 100%)",
  },

  shadows: {
    metallicDeep: "0 25px 60px -15px rgba(0, 0, 0, 0.85)",
    metallicFloating: "0 35px 80px -20px rgba(0, 0, 0, 0.9), 0 0 25px rgba(255, 255, 255, 0.05)",
    glowCyan: "0 0 35px rgba(0, 229, 255, 0.35)",
    glowGreen: "0 0 35px rgba(16, 185, 129, 0.35)",
    glowRed: "0 0 35px rgba(239, 68, 68, 0.4)",
    glowOrange: "0 0 35px rgba(255, 107, 43, 0.35)",
    innerLight: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.2)",
  },

  springs: {
    punchy: { damping: 11, mass: 0.5, stiffness: 180 },
    bouncy: { damping: 9, mass: 0.6, stiffness: 150 },
    smooth: { damping: 18, mass: 0.8, stiffness: 95 },
    heavy: { damping: 14, mass: 1.1, stiffness: 120 },
  },
};
