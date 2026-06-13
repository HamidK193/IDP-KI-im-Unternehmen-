import React from "react";
import { AbsoluteFill, Easing, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { C, EASE, FONT_DISPLAY, FONT_MONO } from "./theme";

export const ease = (frame: number, a: number, b: number, from = 0, to = 1) =>
  interpolate(frame, [a, b], [from, to], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(...EASE),
  });

/* Persistenter Hintergrund: Slate, feines Raster, rosé Glow. */
export const Background: React.FC = () => {
  const frame = useCurrentFrame();
  const dx = Math.sin(frame / 240) * 40;
  const dy = Math.cos(frame / 280) * 30;
  return (
    <AbsoluteFill style={{ background: C.bg }}>
      <AbsoluteFill
        style={{
          backgroundImage:
            `linear-gradient(${C.lineSoft} 1px, transparent 1px),` +
            `linear-gradient(90deg, ${C.lineSoft} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          opacity: 0.6,
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 38%, black 35%, transparent 80%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 1100, height: 1100, borderRadius: "50%",
          top: -360, right: -320,
          background: "radial-gradient(circle, rgba(52,211,153,0.18), transparent 62%)",
          filter: "blur(30px)",
          transform: `translate(${dx}px, ${dy}px)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 900, height: 900, borderRadius: "50%",
          bottom: -380, left: -300,
          background: "radial-gradient(circle, rgba(37,99,235,0.16), transparent 62%)",
          filter: "blur(30px)",
        }}
      />
    </AbsoluteFill>
  );
};

/* Kopfzeile mit HS-PF-Logo-Chip + Projektlabel (durchgehend, akademischer Kontext). */
export const TopBar: React.FC = () => (
  <div
    style={{
      position: "absolute",
      top: 64, left: 80, right: 80,
      display: "flex", alignItems: "center", justifyContent: "space-between",
    }}
  >
    <div
      style={{
        background: C.white, borderRadius: 16, padding: "12px 20px",
        display: "flex", alignItems: "center", boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
      }}
    >
      <Img src={staticFile("hspf-logo.png")} style={{ height: 38, width: "auto" }} />
    </div>
    <span
      style={{
        fontFamily: FONT_MONO, fontSize: 22, letterSpacing: "0.12em",
        textTransform: "uppercase", color: C.inkSoft, fontWeight: 500,
      }}
    >
      IDP · KI-Controlling
    </span>
  </div>
);

/* Fortschrittsbalken unten – signalisiert Länge, ohne aufzufallen. */
export const Progress: React.FC<{ total: number }> = ({ total }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = Math.min(frame / (total * fps), 1);
  return (
    <div style={{ position: "absolute", left: 80, right: 80, bottom: 52, height: 5, background: C.lineSoft, borderRadius: 99 }}>
      <div style={{ height: "100%", width: `${p * 100}%`, background: C.accent, borderRadius: 99 }} />
    </div>
  );
};

/* Untertitel-Band: groß, lesbar, mit halbtransparenter Slate-Backplate.
   Wird absolut aus der Timeline gesteuert → frame-genaue Synchronität. */
export const Subtitles: React.FC<{ subs: { start: number; end: number; text: string }[] }> = ({ subs }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = frame / fps;
  const active = subs.find((s) => t >= s.start && t < s.end);
  if (!active) return null;
  const sf = active.start * fps;
  const op = ease(frame, sf, sf + 6);
  return (
    <div style={{ position: "absolute", left: 60, right: 60, bottom: 84, display: "flex", justifyContent: "center" }}>
      <div
        style={{
          opacity: op,
          background: "rgba(11,17,32,0.86)",
          border: `1px solid ${C.line}`,
          borderRadius: 18,
          padding: "20px 30px",
          maxWidth: 960,
          textAlign: "center",
          backdropFilter: "blur(2px)",
          fontFamily: FONT_DISPLAY, fontWeight: 600,
          fontSize: 37, lineHeight: 1.32, color: C.white,
          letterSpacing: "-0.01em",
          textWrap: "balance",
        }}
      >
        {/* Untertitel = wörtlich der gesprochene Satz, automatischer Umbruch */}
        {active.text}
      </div>
    </div>
  );
};

/* "Mit KI erstellt"-Marker dezent oben rechts auf der CTA-Szene nicht nötig –
   der Hinweis steht im Video selbst. Hier ein wiederverwendbarer Eyebrow. */
export const Eyebrow: React.FC<{ children: React.ReactNode; color?: string }> = ({ children, color }) => (
  <p
    style={{
      fontFamily: FONT_MONO, fontSize: 24, letterSpacing: "0.16em",
      textTransform: "uppercase", color: color || C.accent, fontWeight: 500, margin: 0,
    }}
  >
    {children}
  </p>
);
