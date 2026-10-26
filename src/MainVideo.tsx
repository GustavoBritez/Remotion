import React from "react";
import { Sequence, Audio, staticFile } from "remotion";
import { Background } from "./components/Background";
import { TopProgressBar } from "./components/TopProgressBar";
import { Scene1Mirror } from "./scenes/Scene1Mirror";
import { Scene2Friction } from "./scenes/Scene2Friction";
import { Scene3Breakdown } from "./scenes/Scene3Breakdown";
import { Scene4CartaApp } from "./scenes/Scene4CartaApp";
import { Scene5OwnerValue } from "./scenes/Scene5OwnerValue";
import { Scene6CallToAction } from "./scenes/Scene6CallToAction";

export const TOTAL_FRAMES = 1560; // 52 seconds @ 30 FPS
export const FPS = 30;
export const WIDTH = 1080;
export const HEIGHT = 1920;

export const MainVideo: React.FC = () => {
  return (
    <div
      style={{
        position: "relative",
        width: WIDTH,
        height: HEIGHT,
        backgroundColor: "#FAF6F0",
        overflow: "hidden",
      }}
    >
      {/* Background Graphic System */}
      <Background />

      {/* Sleek Top Progress Bar (No scene counters) */}
      <TopProgressBar />

      {/* Background Lo-Fi Chill Music Track */}
      <Audio src={staticFile("audio/lofi-track.wav")} volume={0.65} />

      {/* --- SCENE SEQUENCES --- */}

      {/* Escena 1: El Espejo (00:00 - 00:07 | Frames 0 - 210) */}
      <Sequence from={0} durationInFrames={210} name="Escena 1 - El Espejo">
        <Scene1Mirror />
        <Sequence from={25}>
          <Audio src={staticFile("audio/pop.wav")} volume={0.7} />
        </Sequence>
      </Sequence>

      {/* Escena 2: La Fricción del Día a Día (00:07 - 00:16 | Frames 210 - 480) */}
      <Sequence from={210} durationInFrames={270} name="Escena 2 - La Fricción">
        <Scene2Friction />
        <Sequence from={5}>
          <Audio src={staticFile("audio/slide.wav")} volume={0.5} />
        </Sequence>
        <Sequence from={30}>
          <Audio src={staticFile("audio/click.wav")} volume={0.6} />
        </Sequence>
      </Sequence>

      {/* Escena 3: El Quiebre (00:16 - 00:23 | Frames 480 - 690) */}
      <Sequence from={480} durationInFrames={210} name="Escena 3 - El Quiebre">
        <Scene3Breakdown />
        <Sequence from={25}>
          <Audio src={staticFile("audio/slide.wav")} volume={0.5} />
        </Sequence>
        <Sequence from={45}>
          <Audio src={staticFile("audio/pop.wav")} volume={0.6} />
        </Sequence>
      </Sequence>

      {/* Escena 4: El Salto a CartaApp (00:23 - 00:37 | Frames 690 - 1110) */}
      <Sequence from={690} durationInFrames={420} name="Escena 4 - Salto a CartaApp">
        <Scene4CartaApp />
        <Sequence from={10}>
          <Audio src={staticFile("audio/click.wav")} volume={0.6} />
        </Sequence>
        <Sequence from={40}>
          <Audio src={staticFile("audio/ding.wav")} volume={0.5} />
        </Sequence>
        <Sequence from={140}>
          <Audio src={staticFile("audio/pop.wav")} volume={0.7} />
        </Sequence>
        <Sequence from={250}>
          <Audio src={staticFile("audio/ding.wav")} volume={0.7} />
        </Sequence>
      </Sequence>

      {/* Escena 5: El Verdadero Valor para el Dueño (00:37 - 00:46 | Frames 1110 - 1380) */}
      <Sequence from={1110} durationInFrames={270} name="Escena 5 - Valor para el Dueño">
        <Scene5OwnerValue />
        <Sequence from={15}>
          <Audio src={staticFile("audio/pop.wav")} volume={0.6} />
        </Sequence>
        <Sequence from={80}>
          <Audio src={staticFile("audio/click.wav")} volume={0.7} />
        </Sequence>
      </Sequence>

      {/* Escena 6: Cierre / Llamado a la Acción (00:46 - 00:52 | Frames 1380 - 1560) */}
      <Sequence from={1380} durationInFrames={180} name="Escena 6 - Cierre y CTA">
        <Scene6CallToAction />
        <Sequence from={25}>
          <Audio src={staticFile("audio/pop.wav")} volume={0.7} />
        </Sequence>
        <Sequence from={45}>
          <Audio src={staticFile("audio/ding.wav")} volume={0.8} />
        </Sequence>
      </Sequence>
    </div>
  );
};
