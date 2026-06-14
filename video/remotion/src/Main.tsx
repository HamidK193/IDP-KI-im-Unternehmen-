import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { AiSticker, Subtitles } from "./components";
import { C } from "./theme";
import { Intro } from "./scenes/Intro";
import { Problem } from "./scenes/Problem";
import { Solution } from "./scenes/Solution";
import { Scenarios } from "./scenes/Scenarios";
import { Flow } from "./scenes/Flow";
import { Outro } from "./scenes/Outro";
import tdSubs from "./td_subs.json";

/* Szenenlängen (Frames @60fps). Crossfade 30 Frames zwischen den Szenen.
   End-Szene auf 450 verkürzt (nur QR steht ruhig). Szenenstarts (Frames):
   0, 390, 1068, 1800, 2580, 3168. Gesamt = 3618 = 60,3 s.
   VO-Platzierung + Untertitel-Cues (td_subs.json) sind darauf abgestimmt. */
export const SCENES = [420, 708, 762, 810, 618, 450];
const OVERLAP = 30;
export const TOTAL_FRAMES = SCENES.reduce((a, b) => a + b, 0) - OVERLAP * (SCENES.length - 1);

const fadeTransition = () => (
  <TransitionSeries.Transition
    presentation={fade()}
    timing={linearTiming({ durationInFrames: OVERLAP })}
  />
);

export const Main: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: C.bg }}>
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={SCENES[0]}>
          <Intro />
        </TransitionSeries.Sequence>
        {fadeTransition()}
        <TransitionSeries.Sequence durationInFrames={SCENES[1]}>
          <Problem />
        </TransitionSeries.Sequence>
        {fadeTransition()}
        <TransitionSeries.Sequence durationInFrames={SCENES[2]}>
          <Solution />
        </TransitionSeries.Sequence>
        {fadeTransition()}
        <TransitionSeries.Sequence durationInFrames={SCENES[3]}>
          <Scenarios />
        </TransitionSeries.Sequence>
        {fadeTransition()}
        <TransitionSeries.Sequence durationInFrames={SCENES[4]}>
          <Flow />
        </TransitionSeries.Sequence>
        {fadeTransition()}
        <TransitionSeries.Sequence durationInFrames={SCENES[5]}>
          <Outro />
        </TransitionSeries.Sequence>
      </TransitionSeries>

      {/* KI-Sticker ab Szene 2 bis vor die End-/QR-Karte (dort nur der QR) */}
      <Sequence from={SCENES[0] - OVERLAP} durationInFrames={3168 - (SCENES[0] - OVERLAP)}>
        <AiSticker />
      </Sequence>

      {/* Untertitel über allen Szenen, synchron zum Ton */}
      <Sequence from={0}>
        <Subtitles subs={tdSubs} />
      </Sequence>
    </AbsoluteFill>
  );
};
