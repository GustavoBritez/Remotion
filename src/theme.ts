import { loadFont } from "@remotion/google-fonts/PlusJakartaSans";

export const { fontFamily } = loadFont("normal", {
  weights: ["600", "700", "800"],
  subsets: ["latin"],
  ignoreTooManyRequestsWarning: true,
});

export const theme = {
  colors: {
    // Warm 2D flat palette
    cream: "#FAF6F0",
    creamLight: "#FFFDF9",
    creamDark: "#EDE5D8",
    creamBorder: "#E2D7C5",
    
    // Coffee accents
    coffee: "#4B2E2A",
    coffeeDark: "#271512",
    coffeeMedium: "#6B433C",
    coffeeLight: "#956D65",
    
    // Vibrant highlights
    orange: "#FF7A30",
    orangeHover: "#F06518",
    orangeSoft: "#FFF0E6",
    orangeGlow: "rgba(255, 122, 48, 0.35)",

    // WhatsApp / Success green
    green: "#22C55E",
    greenDark: "#15803D",
    greenSoft: "#DCFCE7",
    greenGlow: "rgba(34, 197, 94, 0.3)",

    // Friction red
    red: "#EF4444",
    redSoft: "#FEE2E2",
    redDark: "#B91C1C",

    // Neutrals
    white: "#FFFFFF",
    charcoal: "#1F2937",
    cardBg: "#FFFFFF",
  },
  
  shadows: {
    soft: "0 10px 30px rgba(75, 46, 42, 0.08)",
    medium: "0 20px 45px rgba(75, 46, 42, 0.14)",
    floating: "0 30px 60px rgba(75, 46, 42, 0.20)",
    pillOrange: "0 8px 24px rgba(255, 122, 48, 0.3)",
    pillGreen: "0 8px 24px rgba(34, 197, 94, 0.28)",
  },

  springs: {
    bouncy: { damping: 10, mass: 0.6, stiffness: 140 },
    smooth: { damping: 18, mass: 0.8, stiffness: 90 },
    punchy: { damping: 12, mass: 0.5, stiffness: 180 },
    gentle: { damping: 22, mass: 1, stiffness: 80 },
  }
};
