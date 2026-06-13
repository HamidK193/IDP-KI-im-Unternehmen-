import React from "react";
import { AbsoluteFill, Sequence, interpolate, useCurrentFrame } from "remotion";
import { Background, TopBar, Subtitles, Progress } from "./components";
import { Hook, Intro, Problem, Solution, Special, CTA } from "./scenes";
import timeline from "./timeline.json";

const FPS = timeline.fps;
const OVERLAP = 12; // Frames Crossfade-Überlappung
export const LN_TOTAL_FRAMES = Math.ceil(timeline.totalSec * FPS);

const SCENE_COMPONENTS: Record<string, React.FC> = {
  hook: Hook, intro: Intro, problem: Problem, solution: Solution, special: Special, cta: CTA,
};

/* Blendet eine Szene weich ein/aus; interne Animationen bleiben an der
   echten Szenenstartzeit verankert (kein Aufblitzen, frame-genau). */
const SceneLayer: React.FC<{ baseDur: number; children: React.ReactNode }> = ({ baseDur, children }) => {
  const f = useCurrentFrame();
  const opIn = interpolate(f, [0, OVERLAP], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const opOut = interpolate(f, [baseDur, baseDur + OVERLAP], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return <AbsoluteFill style={{ opacity: Math.min(opIn, opOut) }}>{children}</AbsoluteFill>;
};

export const LinkedInMain: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0F172A" }}>
      <Background />

      {timeline.scenes.map((s, i) => {
        const Comp = SCENE_COMPONENTS[s.id];
        const startF = Math.round(s.start * FPS);
        const baseDur = Math.round((s.end - s.start) * FPS);
        const isLast = i === timeline.scenes.length - 1;
        const durationInFrames = baseDur + (isLast ? 0 : OVERLAP);
        return (
          <Sequence key={s.id} from={startF} durationInFrames={durationInFrames}>
            <SceneLayer baseDur={baseDur}>
              <Comp />
            </SceneLayer>
          </Sequence>
        );
      })}

      {/* Persistente Ebenen über allen Szenen */}
      <TopBar />
      <Subtitles subs={timeline.subs} />
      <Progress total={timeline.totalSec} />
    </AbsoluteFill>
  );
};
