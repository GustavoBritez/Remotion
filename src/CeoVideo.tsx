import React from "react";
import { Sequence, Audio, staticFile } from "remotion";
import { darkTheme } from "./darkTheme";
import { DarkBackground } from "./components/DarkBackground";
import { DarkTopProgressBar } from "./components/DarkTopProgressBar";
import { DarkScene1Problem } from "./scenes/dark/DarkScene1Problem";
import { DarkScene2TechBuild } from "./scenes/dark/DarkScene2TechBuild";
import { DarkScene3ProductMagic } from "./scenes/dark/DarkScene3ProductMagic";
import { DarkScene4CeoGrowth } from "./scenes/dark/DarkScene4CeoGrowth";

export const CEO_TOTAL_FRAMES = 600; // Exact 20 seconds @ 30 FPS
export const CEO_FPS = 30;
export const CEO_WIDTH = 1080;
export const CEO_HEIGHT = 1920;

export const CeoVideo: React.FC = () => {
  return (
    <div
      style={{
        position: "relative",
        width: CEO_WIDTH,
        height: CEO_HEIGHT,
        backgroundColor: darkTheme.colors.bgDark,
        overflow: "hidden",
      }}
    >
      {/* Dynamic Cyber / Metallic Dark Background */}
      <DarkBackground />

      {/* Titanium Top Progress Bar */}
      <DarkTopProgressBar />

      {/* Background Track */}
      <Audio src={staticFile("audio/lofi-track.wav")} volume={0.5} />

      {/* --- SCENE SEQUENCES (20 SECONDS TOTAL) --- */}

      {/* Escena 1: El Gancho del CEO & El Problema (00:00 - 00:04.66 | Frames 0 - 140) */}
      <Sequence from={0} durationInFrames={140} name="Escena 1 - El Problema de las Comisiones">
        <DarkScene1Problem />
        <Sequence from={5}>
          <Audio src={staticFile("audio/slide.wav")} volume={0.6} />
        </Sequence>
        <Sequence from={25}>
          <Audio src={staticFile("audio/pop.wav")} volume={0.7} />
        </Sequence>
      </Sequence>

      {/* Escena 2: El Quiebre & El Tech Stack (00:04.66 - 00:09.66 | Frames 140 - 290) */}
      <Sequence from={140} durationInFrames={150} name="Escena 2 - Programando Carta App">
        <DarkScene2TechBuild />
        <Sequence from={5}>
          <Audio src={staticFile("audio/click.wav")} volume={0.6} />
        </Sequence>
        <Sequence from={28}>
          <Audio src={staticFile("audio/ding.wav")} volume={0.5} />
        </Sequence>
        <Sequence from={45}>
          <Audio src={staticFile("audio/pop.wav")} volume={0.6} />
        </Sequence>
      </Sequence>

      {/* Escena 3: La Magia del Producto en Acción (00:09.66 - 00:15.00 | Frames 290 - 450) */}
      <Sequence from={290} durationInFrames={160} name="Escena 3 - Reels y Pedidos por WhatsApp">
        <DarkScene3ProductMagic />
        <Sequence from={5}>
          <Audio src={staticFile("audio/click.wav")} volume={0.6} />
        </Sequence>
        <Sequence from={35}>
          <Audio src={staticFile("audio/ding.wav")} volume={0.7} />
        </Sequence>
        <Sequence from={60}>
          <Audio src={staticFile("audio/pop.wav")} volume={0.6} />
        </Sequence>
      </Sequence>

      {/* Escena 4: Clímax & Llamado a Seguir al CEO (00:15.00 - 00:20.00 | Frames 450 - 600) */}
      <Sequence from={450} durationInFrames={150} name="Escena 4 - Comunidad y Seguidores CEO">
        <DarkScene4CeoGrowth />
        <Sequence from={5}>
          <Audio src={staticFile("audio/pop.wav")} volume={0.7} />
        </Sequence>
        <Sequence from={35}>
          <Audio src={staticFile("audio/ding.wav")} volume={0.8} />
        </Sequence>
      </Sequence>
    </div>
  );
};
