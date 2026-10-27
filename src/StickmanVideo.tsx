import React from "react";
import { Sequence, Audio, staticFile } from "remotion";
import { darkTheme } from "./darkTheme";
import { DarkBackground } from "./components/DarkBackground";
import { DarkTopProgressBar } from "./components/DarkTopProgressBar";
import { StickmanScene1Stress } from "./scenes/stickman/StickmanScene1Stress";
import { StickmanScene2Eureka } from "./scenes/stickman/StickmanScene2Eureka";
import { StickmanScene3Relax } from "./scenes/stickman/StickmanScene3Relax";
import { StickmanScene4Celebrate } from "./scenes/stickman/StickmanScene4Celebrate";

export const STICKMAN_TOTAL_FRAMES = 600; // 20 seconds @ 30 FPS
export const STICKMAN_FPS = 30;
export const STICKMAN_WIDTH = 1080;
export const STICKMAN_HEIGHT = 1920;

export const StickmanVideo: React.FC = () => {
  return (
    <div
      style={{
        position: "relative",
        width: STICKMAN_WIDTH,
        height: STICKMAN_HEIGHT,
        backgroundColor: darkTheme.colors.bgDark,
        overflow: "hidden",
      }}
    >
      {/* Background System */}
      <DarkBackground />

      {/* Top Progress Bar */}
      <DarkTopProgressBar />

      {/* Lo-Fi Background Music */}
      <Audio src={staticFile("audio/lofi-track.wav")} volume={0.5} />

      {/* --- SCENE SEQUENCES (20 SECONDS TOTAL) --- */}

      {/* Escena 1: Juan en Crisis (00:00 - 00:04.66 | Frames 0 - 140) */}
      <Sequence from={0} durationInFrames={140} name="Escena 1 - Juan en Crisis">
        <StickmanScene1Stress />
        <Sequence from={5}>
          <Audio src={staticFile("audio/slide.wav")} volume={0.6} />
        </Sequence>
        <Sequence from={25}>
          <Audio src={staticFile("audio/pop.wav")} volume={0.7} />
        </Sequence>
      </Sequence>

      {/* Escena 2: El Momento Eureka (00:04.66 - 00:09.66 | Frames 140 - 290) */}
      <Sequence from={140} durationInFrames={150} name="Escena 2 - Momento Eureka">
        <StickmanScene2Eureka />
        <Sequence from={8}>
          <Audio src={staticFile("audio/ding.wav")} volume={0.7} />
        </Sequence>
        <Sequence from={35}>
          <Audio src={staticFile("audio/click.wav")} volume={0.6} />
        </Sequence>
      </Sequence>

      {/* Escena 3: Pedidos por WhatsApp y Cero Comisiones (00:09.66 - 00:15.00 | Frames 290 - 450) */}
      <Sequence from={290} durationInFrames={160} name="Escena 3 - Juan Relajado">
        <StickmanScene3Relax />
        <Sequence from={15}>
          <Audio src={staticFile("audio/click.wav")} volume={0.6} />
        </Sequence>
        <Sequence from={35}>
          <Audio src={staticFile("audio/ding.wav")} volume={0.7} />
        </Sequence>
      </Sequence>

      {/* Escena 4: Éxito y Llamado a la Acción (00:15.00 - 00:20.00 | Frames 450 - 600) */}
      <Sequence from={450} durationInFrames={150} name="Escena 4 - Éxito y CTA">
        <StickmanScene4Celebrate />
        <Sequence from={10}>
          <Audio src={staticFile("audio/pop.wav")} volume={0.7} />
        </Sequence>
        <Sequence from={40}>
          <Audio src={staticFile("audio/ding.wav")} volume={0.8} />
        </Sequence>
      </Sequence>
    </div>
  );
};
