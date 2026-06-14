import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { C, EASE, FONT_DISPLAY, FONT_MONO } from "./theme";

/** Dezentes Linienraster wie auf der Website. */
export const GridBg: React.FC<{ masked?: boolean }> = ({ masked = true }) => (
  <AbsoluteFill
    style={{
      backgroundImage:
        `linear-gradient(${C.lineSoft} 1px, transparent 1px),` +
        `linear-gradient(90deg, ${C.lineSoft} 1px, transparent 1px)`,
      backgroundSize: "72px 72px",
      WebkitMaskImage: masked
        ? "radial-gradient(ellipse 80% 70% at 50% 45%, black 30%, transparent 78%)"
        : undefined,
    }}
  />
);

/** Weicher Akzent-Glow, driftet langsam. */
export const Glow: React.FC<{
  x: number; y: number; size?: number; color?: string; drift?: number;
}> = ({ x, y, size = 900, color = "rgba(52,211,153,0.16)", drift = 1 }) => {
  const frame = useCurrentFrame();
  const dx = Math.sin(frame / 220) * 50 * drift;
  const dy = Math.cos(frame / 260) * 35 * drift;
  return (
    <div
      style={{
        position: "absolute",
        left: x, top: y, width: size, height: size,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${color}, transparent 65%)`,
        filter: "blur(40px)",
        transform: `translate(${dx}px, ${dy}px)`,
      }}
    />
  );
};

/** Standard-Einblendung: Fade + sanftes Hochschieben. */
export const useReveal = (startFrame: number, durationFrames = 40) => {
  const frame = useCurrentFrame();
  const t = interpolate(frame, [startFrame, startFrame + durationFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(...EASE),
  });
  return {
    opacity: t,
    transform: `translateY(${(1 - t) * 44}px)`,
  };
};

export const usePopIn = (startFrame: number, durationFrames = 36) => {
  const frame = useCurrentFrame();
  const t = interpolate(frame, [startFrame, startFrame + durationFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.34, 1.4, 0.44, 1),
  });
  return {
    opacity: Math.min(t * 1.6, 1),
    transform: `scale(${0.72 + t * 0.28}) translateY(${(1 - t) * 50}px)`,
  };
};

/** Dezenter "Mit KI erstellt"-Sticker oben rechts. */
export const AiSticker: React.FC<{ emphasis?: number }> = ({ emphasis = 0 }) => {
  const frame = useCurrentFrame();
  const pulse = 0.55 + 0.45 * Math.abs(Math.sin(frame / 55));
  return (
    <div
      style={{
        position: "absolute",
        top: 36, right: 44,
        display: "flex", alignItems: "center", gap: 12,
        fontFamily: FONT_MONO,
        fontSize: 23,
        fontWeight: 500,
        color: emphasis > 0 ? C.ink : C.inkSoft,
        background: "rgba(15,23,42,0.82)",
        border: `1px solid ${emphasis > 0 ? "rgba(52,211,153,0.55)" : C.line}`,
        borderRadius: 999,
        padding: "11px 22px",
        opacity: 0.92,
      }}
    >
      <span
        style={{
          width: 11, height: 11, borderRadius: "50%",
          background: C.accent,
          boxShadow: `0 0 ${8 + pulse * 10}px rgba(52,211,153,${0.4 + pulse * 0.4})`,
        }}
      />
      Mit KI erstellt
    </div>
  );
};

/* Untertitel-Band (16:9): unten, halbtransparent, max. zwei Zeilen, damit
   die Grafik darüber frei bleibt. Wird absolut aus der Timeline gesteuert. */
export const Subtitles: React.FC<{ subs: { start: number; end: number; text: string }[] }> = ({ subs }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = frame / fps;
  const active = subs.find((s) => t >= s.start && t < s.end);
  if (!active) return null;
  const sf = active.start * fps;
  const op = interpolate(frame, [sf, sf + 6], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <div style={{ position: "absolute", left: 0, right: 0, bottom: 64, display: "flex", justifyContent: "center" }}>
      <div
        style={{
          opacity: op,
          maxWidth: 1640,
          margin: "0 80px",
          background: "rgba(11,18,32,0.78)",
          border: `1px solid ${C.line}`,
          borderRadius: 16,
          padding: "16px 34px",
          textAlign: "center",
          fontFamily: FONT_DISPLAY,
          fontWeight: 600,
          fontSize: 40,
          lineHeight: 1.28,
          color: "#F1F5F9",
          letterSpacing: "-0.01em",
          textWrap: "balance",
          overflowWrap: "break-word",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
        lang="de"
      >
        {active.text}
      </div>
    </div>
  );
};
