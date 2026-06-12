import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { GridBg, Glow, useReveal } from "../components";
import { C, EASE, FONT_DISPLAY, FONT_MONO } from "../theme";

const SPARK_1 = "0,260 240,230 480,245 720,185 960,200 1200,130 1440,150 1680,80 1920,95";
const SPARK_2 = "0,300 240,290 480,260 720,272 960,235 1200,245 1440,205 1680,215 1920,180";
const SPARK_LEN = 2100;

const Sparkline: React.FC<{ points: string; color: string; start: number; opacity: number }> = ({
  points, color, start, opacity,
}) => {
  const frame = useCurrentFrame();
  const drawn = interpolate(frame, [start, start + 170], [SPARK_LEN, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.33, 0, 0.2, 1),
  });
  return (
    <polyline
      points={points}
      fill="none"
      stroke={color}
      strokeWidth={5}
      strokeLinejoin="round"
      strokeDasharray={SPARK_LEN}
      strokeDashoffset={drawn}
      opacity={opacity}
    />
  );
};

export const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const badge = useReveal(14);
  const title = useReveal(40, 48);
  const sub = useReveal(86);

  const underline = interpolate(frame, [110, 150], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(...EASE),
  });
  const pulse = 0.5 + 0.5 * Math.abs(Math.sin(frame / 40));

  return (
    <AbsoluteFill style={{ background: C.bg }}>
      <GridBg />
      <Glow x={1200} y={-320} />
      <Glow x={-280} y={620} color="rgba(232,179,90,0.09)" drift={-1} />

      <svg
        viewBox="0 0 1920 340"
        style={{ position: "absolute", bottom: 0, left: 0, width: 1920, height: 340, opacity: 0.55 }}
      >
        <Sparkline points={SPARK_1} color={C.accent} start={50} opacity={0.6} />
        <Sparkline points={SPARK_2} color="#6fa8e8" start={95} opacity={0.4} />
      </svg>

      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <div style={{ textAlign: "center", maxWidth: 1500, padding: "0 80px" }}>
          <div
            style={{
              ...badge,
              display: "inline-flex", alignItems: "center", gap: 14,
              fontFamily: FONT_MONO, fontSize: 26, color: C.inkSoft,
              border: `1px solid ${C.line}`, borderRadius: 999,
              padding: "16px 32px", background: "rgba(21,32,28,0.8)",
            }}
          >
            <span
              style={{
                width: 14, height: 14, borderRadius: "50%", background: C.accent,
                boxShadow: `0 0 0 ${pulse * 11}px rgba(67,212,155,0.14)`,
              }}
            />
            Diese Website &amp; dieses Video wurden mit KI gebaut
          </div>

          <h1
            style={{
              ...title,
              fontFamily: FONT_DISPLAY, fontSize: 110, fontWeight: 800,
              lineHeight: 1.08, letterSpacing: "-0.02em", color: C.ink,
              margin: "48px 0 36px",
            }}
          >
            KI macht die Zahlen kleiner Unternehmen{" "}
            <span style={{ position: "relative", color: C.accent, whiteSpace: "nowrap" }}>
              lesbar
              <span
                style={{
                  position: "absolute", left: 0, right: 0, bottom: 2, height: 8,
                  background: C.accent, opacity: 0.35, borderRadius: 4,
                  transform: `scaleX(${underline})`, transformOrigin: "left",
                }}
              />
            </span>
            .
          </h1>

          <p
            style={{
              ...sub,
              fontFamily: FONT_MONO, fontSize: 30, letterSpacing: "0.18em",
              textTransform: "uppercase", color: C.inkFaint, margin: 0,
            }}
          >
            IDP · Hochschule Pforzheim · KI-Controlling-Cockpit
          </p>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
