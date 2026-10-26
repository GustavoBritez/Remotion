import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { theme } from "../theme";
import { KineticText } from "../components/KineticText";

export const Scene1Mirror: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring for the entire scene
  const sceneEntrance = spring({
    frame,
    fps,
    config: theme.springs.smooth,
  });

  const sceneScale = interpolate(sceneEntrance, [0, 1], [0.92, 1]);
  const sceneOpacity = interpolate(frame, [0, 10], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Coffee steam animation
  const steamOffset = (frame * 1.5) % 40;

  // Price tag entrance
  const priceSpring = spring({
    frame: frame - 25,
    fps,
    config: theme.springs.bouncy,
  });

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
      {/* Upper Stage: Two Cafés Side-by-Side */}
      <div
        style={{
          position: "absolute",
          top: 240,
          left: 60,
          right: 60,
          height: 820,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 40,
        }}
      >
        {/* CAFÉ 1 */}
        <div
          style={{
            flex: 1,
            height: "100%",
            backgroundColor: theme.colors.white,
            borderRadius: 36,
            boxShadow: theme.shadows.medium,
            border: `2px solid ${theme.colors.creamBorder}`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "30px 20px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Awning (Toldo rayado) */}
          <div
            style={{
              width: "100%",
              height: 70,
              borderRadius: "18px 18px 8px 8px",
              background: `repeating-linear-gradient(90deg, ${theme.colors.orange} 0px, ${theme.colors.orange} 24px, ${theme.colors.creamLight} 24px, ${theme.colors.creamLight} 48px)`,
              boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
              position: "relative",
            }}
          >
            {/* Awning scalloped hem */}
            <div
              style={{
                position: "absolute",
                bottom: -8,
                left: 0,
                right: 0,
                height: 12,
                backgroundImage: `radial-gradient(circle at 12px 0px, ${theme.colors.orange} 12px, transparent 13px)`,
                backgroundSize: "24px 12px",
              }}
            />
          </div>

          {/* Name Sign */}
          <div
            style={{
              marginTop: 24,
              padding: "8px 24px",
              borderRadius: 20,
              backgroundColor: theme.colors.creamDark,
              color: theme.colors.coffeeDark,
              fontWeight: 900,
              fontSize: 22,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            Café Norte
          </div>

          {/* Front Window & Door */}
          <div
            style={{
              marginTop: 28,
              width: "100%",
              display: "flex",
              gap: 16,
              justifyContent: "center",
            }}
          >
            {/* Window */}
            <div
              style={{
                width: 140,
                height: 150,
                borderRadius: 20,
                backgroundColor: "#E8F0FE",
                border: `3px solid ${theme.colors.coffee}`,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Window glass sheen reflection */}
              <div
                style={{
                  position: "absolute",
                  top: -20,
                  left: 20,
                  width: 30,
                  height: 200,
                  backgroundColor: "rgba(255,255,255,0.6)",
                  transform: "rotate(30deg)",
                }}
              />
            </div>

            {/* Door */}
            <div
              style={{
                width: 110,
                height: 180,
                borderRadius: "16px 16px 0 0",
                backgroundColor: theme.colors.coffeeMedium,
                border: `3px solid ${theme.colors.coffeeDark}`,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "center",
                paddingRight: 12,
              }}
            >
              {/* Doorknob */}
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  backgroundColor: theme.colors.orange,
                  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                }}
              />
            </div>
          </div>

          {/* Sidewalk Table + Steaming Coffee + Customers */}
          <div
            style={{
              marginTop: "auto",
              marginBottom: 20,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            {/* Steam animation */}
            <div
              style={{
                position: "absolute",
                top: -38 - (steamOffset * 0.4),
                opacity: 1 - (steamOffset / 40),
                display: "flex",
                gap: 6,
              }}
            >
              <div style={{ width: 4, height: 16, borderRadius: 2, backgroundColor: theme.colors.coffeeLight }} />
              <div style={{ width: 4, height: 22, borderRadius: 2, backgroundColor: theme.colors.coffeeLight }} />
            </div>

            {/* Coffee Cup */}
            <div
              style={{
                width: 44,
                height: 32,
                borderRadius: "4px 4px 14px 14px",
                backgroundColor: theme.colors.orange,
                border: `2px solid ${theme.colors.coffeeDark}`,
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
              }}
            >
              {/* Handle */}
              <div
                style={{
                  position: "absolute",
                  right: -10,
                  top: 4,
                  width: 10,
                  height: 16,
                  borderRadius: "0 8px 8px 0",
                  border: `2px solid ${theme.colors.coffeeDark}`,
                  borderLeft: "none",
                }}
              />
            </div>

            {/* Table Surface */}
            <div
              style={{
                width: 160,
                height: 16,
                borderRadius: 8,
                backgroundColor: "#D7CCC8",
                border: `2px solid ${theme.colors.coffee}`,
                marginTop: -4,
                zIndex: 1,
              }}
            />
            {/* Table Leg */}
            <div
              style={{
                width: 10,
                height: 60,
                backgroundColor: theme.colors.coffee,
              }}
            />
            <div
              style={{
                width: 60,
                height: 8,
                borderRadius: 4,
                backgroundColor: theme.colors.coffee,
              }}
            />

            {/* Customers sitting (2D minimalist avatars) */}
            <div
              style={{
                position: "absolute",
                bottom: 12,
                left: 10,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{ width: 34, height: 34, borderRadius: "50%", backgroundColor: "#FFCC80", border: `2px solid ${theme.colors.coffee}` }} />
              <div style={{ width: 44, height: 48, borderRadius: "12px 12px 0 0", backgroundColor: theme.colors.coffee, marginTop: -2 }} />
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 12,
                right: 10,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{ width: 34, height: 34, borderRadius: "50%", backgroundColor: "#FFE082", border: `2px solid ${theme.colors.coffee}` }} />
              <div style={{ width: 44, height: 48, borderRadius: "12px 12px 0 0", backgroundColor: theme.colors.orange, marginTop: -2 }} />
            </div>
          </div>

          {/* Floating Price Pill */}
          <div
            style={{
              position: "absolute",
              top: 15,
              right: 15,
              backgroundColor: theme.colors.coffeeDark,
              color: theme.colors.white,
              padding: "6px 16px",
              borderRadius: 16,
              fontWeight: 800,
              fontSize: 18,
              boxShadow: theme.shadows.soft,
              transform: `scale(${priceSpring})`,
              transformOrigin: "top right",
            }}
          >
            $2.500
          </div>
        </div>

        {/* CAFÉ 2 */}
        <div
          style={{
            flex: 1,
            height: "100%",
            backgroundColor: theme.colors.white,
            borderRadius: 36,
            boxShadow: theme.shadows.medium,
            border: `2px solid ${theme.colors.creamBorder}`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "30px 20px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Awning */}
          <div
            style={{
              width: "100%",
              height: 70,
              borderRadius: "18px 18px 8px 8px",
              background: `repeating-linear-gradient(90deg, ${theme.colors.coffee} 0px, ${theme.colors.coffee} 24px, ${theme.colors.creamLight} 24px, ${theme.colors.creamLight} 48px)`,
              boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: -8,
                left: 0,
                right: 0,
                height: 12,
                backgroundImage: `radial-gradient(circle at 12px 0px, ${theme.colors.coffee} 12px, transparent 13px)`,
                backgroundSize: "24px 12px",
              }}
            />
          </div>

          {/* Name Sign */}
          <div
            style={{
              marginTop: 24,
              padding: "8px 24px",
              borderRadius: 20,
              backgroundColor: theme.colors.creamDark,
              color: theme.colors.coffeeDark,
              fontWeight: 900,
              fontSize: 22,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            Café Sur
          </div>

          {/* Front Window & Door */}
          <div
            style={{
              marginTop: 28,
              width: "100%",
              display: "flex",
              gap: 16,
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 140,
                height: 150,
                borderRadius: 20,
                backgroundColor: "#E8F0FE",
                border: `3px solid ${theme.colors.coffee}`,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -20,
                  left: 20,
                  width: 30,
                  height: 200,
                  backgroundColor: "rgba(255,255,255,0.6)",
                  transform: "rotate(30deg)",
                }}
              />
            </div>

            <div
              style={{
                width: 110,
                height: 180,
                borderRadius: "16px 16px 0 0",
                backgroundColor: theme.colors.coffeeDark,
                border: `3px solid ${theme.colors.coffee}`,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "center",
                paddingRight: 12,
              }}
            >
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  backgroundColor: theme.colors.green,
                  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                }}
              />
            </div>
          </div>

          {/* Sidewalk Table + Steaming Coffee + Customers */}
          <div
            style={{
              marginTop: "auto",
              marginBottom: 20,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -38 - (steamOffset * 0.4),
                opacity: 1 - (steamOffset / 40),
                display: "flex",
                gap: 6,
              }}
            >
              <div style={{ width: 4, height: 16, borderRadius: 2, backgroundColor: theme.colors.coffeeLight }} />
              <div style={{ width: 4, height: 22, borderRadius: 2, backgroundColor: theme.colors.coffeeLight }} />
            </div>

            <div
              style={{
                width: 44,
                height: 32,
                borderRadius: "4px 4px 14px 14px",
                backgroundColor: theme.colors.green,
                border: `2px solid ${theme.colors.coffeeDark}`,
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  right: -10,
                  top: 4,
                  width: 10,
                  height: 16,
                  borderRadius: "0 8px 8px 0",
                  border: `2px solid ${theme.colors.coffeeDark}`,
                  borderLeft: "none",
                }}
              />
            </div>

            <div
              style={{
                width: 160,
                height: 16,
                borderRadius: 8,
                backgroundColor: "#D7CCC8",
                border: `2px solid ${theme.colors.coffee}`,
                marginTop: -4,
                zIndex: 1,
              }}
            />
            <div
              style={{
                width: 10,
                height: 60,
                backgroundColor: theme.colors.coffee,
              }}
            />
            <div
              style={{
                width: 60,
                height: 8,
                borderRadius: 4,
                backgroundColor: theme.colors.coffee,
              }}
            />

            {/* Customers sitting */}
            <div
              style={{
                position: "absolute",
                bottom: 12,
                left: 10,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{ width: 34, height: 34, borderRadius: "50%", backgroundColor: "#FFCC80", border: `2px solid ${theme.colors.coffee}` }} />
              <div style={{ width: 44, height: 48, borderRadius: "12px 12px 0 0", backgroundColor: theme.colors.green, marginTop: -2 }} />
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 12,
                right: 10,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{ width: 34, height: 34, borderRadius: "50%", backgroundColor: "#FFE082", border: `2px solid ${theme.colors.coffee}` }} />
              <div style={{ width: 44, height: 48, borderRadius: "12px 12px 0 0", backgroundColor: theme.colors.coffeeDark, marginTop: -2 }} />
            </div>
          </div>

          {/* Floating Price Pill */}
          <div
            style={{
              position: "absolute",
              top: 15,
              right: 15,
              backgroundColor: theme.colors.coffeeDark,
              color: theme.colors.white,
              padding: "6px 16px",
              borderRadius: 16,
              fontWeight: 800,
              fontSize: 18,
              boxShadow: theme.shadows.soft,
              transform: `scale(${priceSpring})`,
              transformOrigin: "top right",
            }}
          >
            $2.500
          </div>
        </div>
      </div>

      {/* Kinetic Typography */}
      <KineticText
        startFrame={10}
        lines={[
          {
            segments: [
              { text: "Misma cuadra." },
              { text: "Mismo café.", isPill: true, pillColor: "orange" },
            ],
          },
          {
            delayFrames: 25,
            segments: [
              { text: "Mismo precio:" },
              { text: "$2.500", isPill: true, pillColor: "green" },
            ],
          },
        ]}
      />
    </div>
  );
};
