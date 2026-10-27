import React from "react";
import { Sequence, Audio, staticFile } from "remotion";
import { DarkTopProgressBar } from "./components/DarkTopProgressBar";
import { ProceduralScene1Chaos } from "./scenes/procedural/ProceduralScene1Chaos";
import { ProceduralScene2Blueprint } from "./scenes/procedural/ProceduralScene2Blueprint";
import { ProceduralScene3Product } from "./scenes/procedural/ProceduralScene3Product";
import { ProceduralScene4Climax } from "./scenes/procedural/ProceduralScene4Climax";

export const PROCEDURAL_TOTAL_FRAMES = 600; // 20 seconds @ 30 FPS
export const PROCEDURAL_FPS = 30;
export const PROCEDURAL_WIDTH = 1080;
export const PROCEDURAL_HEIGHT = 1920;

export const ProceduralVideo: React.FC = () => {
  return (
    <div
      style={{
        position: "relative",
        width: PROCEDURAL_WIDTH,
        height: PROCEDURAL_HEIGHT,
        backgroundColor: "#000000",
        overflow: "hidden",
      }}
    >
      {/* Top Progress Bar */}
      <DarkTopProgressBar />

      {/* Lo-Fi Background Music */}
      <Audio src={staticFile("audio/lofi-track.wav")} volume={0.5} />

      {/* --- SCENE SEQUENCES (20 SECONDS TOTAL) --- */}

      {/* Escena 1: El Boceto del Caos (00:00 - 00:04.66 | Frames 0 - 140) */}
      <Sequence from={0} durationInFrames={140} name="Escena 1 - El Caos Dibujado">
        <ProceduralScene1Chaos />
        <Sequence from={5}>
          <Audio src={staticFile("audio/slide.wav")} volume={0.6} />
        </Sequence>
        <Sequence from={25}>
          <Audio src={staticFile("audio/pop.wav")} volume={0.7} />
        </Sequence>
      </Sequence>

      {/* Escena 2: La Pizarra del Desarrollador (00:04.66 - 00:09.66 | Frames 140 - 290) */}
      <Sequence from={140} durationInFrames={150} name="Escena 2 - Pizarra de Arquitectura">
        <ProceduralScene2Blueprint />
        <Sequence from={8}>
          <Audio src={staticFile("audio/click.wav")} volume={0.6} />
        </Sequence>
        <Sequence from={35}>
          <Audio src={staticFile("audio/ding.wav")} volume={0.6} />
        </Sequence>
      </Sequence>

      {/* Escena 3: El Menú en Vivo y WhatsApp (00:09.66 - 00:15.00 | Frames 290 - 450) */}
      <Sequence from={290} durationInFrames={160} name="Escena 3 - El Producto en Acción">
        <ProceduralScene3Product />
        <Sequence from={10}>
          <Audio src={staticFile("audio/pop.wav")} volume={0.6} />
        </Sequence>
        <Sequence from={45}>
          <Audio src={staticFile("audio/ding.wav")} volume={0.7} />
        </Sequence>
      </Sequence>

      {/* Escena 4: Clímax & Seguidores CEO (00:15.00 - 00:20.00 | Frames 450 - 600) */}
      <Sequence from={450} durationInFrames={150} name="Escena 4 - Comunidad y Seguidores">
        <ProceduralScene4Climax />
        <Sequence from={15}>
          <Audio src={staticFile("audio/pop.wav")} volume={0.7} />
        </Sequence>
        <Sequence from={40}>
          <Audio src={staticFile("audio/ding.wav")} volume={0.8} />
        </Sequence>
      </Sequence>
    </div>
  );
};
