import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { AiSticker } from "./components";
import { C } from "./theme";
import { Intro } from "./scenes/Intro";
import { Problem } from "./scenes/Problem";
import { Solution } from "./scenes/Solution";
import { Scenarios } from "./scenes/Scenarios";
import { Flow } from "./scenes/Flow";
import { Outro } from "./scenes/Outro";

/* Szenenlängen (Frames @60fps). Crossfade 30 Frames zwischen den Szenen.
   Gesamtdauer = Summe − 5×30 = 3900 Frames = 65,0 s.
   Diese Werte sind mit den Voiceover-Offsets in tools (mix) abgestimmt:
   Szenenstarts: 0, 390, 1068, 1800, 2580, 3168. */
export const SCENES = [420, 708, 762, 810, 618, 732];
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

      {/* Durchgehender KI-Sticker (ab Szene 2; im Intro steht das große Badge) */}
      <Sequence from={SCENES[0] - OVERLAP}>
        <AiSticker />
      </Sequence>
    </AbsoluteFill>
  );
};
