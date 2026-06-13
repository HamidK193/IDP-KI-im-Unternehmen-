import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { GridBg, useReveal } from "../components";
import { C, EASE, FONT_DISPLAY, FONT_MONO } from "../theme";

const STEPS = [
  { n: 1, title: "Daten anbinden", sub: "MCP-Konnektoren zu allen Quellen", tag: "KI", lit: 80, icon: "db" },
  { n: 2, title: "Analysieren", sub: "Kennzahlen, Trends, Abweichungen", tag: "KI", lit: 170, icon: "chart" },
  { n: 3, title: "Begründen", sub: "Was ist warum auffällig?", tag: "KI", lit: 260, icon: "speech" },
  { n: 4, title: "Empfehlen", sub: "Priorisierte Maßnahmen mit Risiko", tag: "KI", lit: 350, icon: "target" },
  { n: 5, title: "Mensch prüft & entscheidet", sub: "Keine automatische Entscheidung", tag: "Mensch", lit: 440, icon: "person", human: true },
];

const Icon: React.FC<{ kind: string; color: string }> = ({ kind, color }) => {
  const common = { fill: "none", stroke: color, strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg width={64} height={64} viewBox="0 0 24 24">
      {kind === "db" && (<g {...common}><ellipse cx="12" cy="5.5" rx="7.5" ry="3" /><path d="M4.5 5.5v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6" /><path d="M4.5 11.5v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6" /></g>)}
      {kind === "chart" && (<g {...common}><path d="M3 20h18M5 16l4-6 4 3 6-9" /></g>)}
      {kind === "speech" && (<g {...common}><path d="M4 5h16v11H9l-5 4z" /><path d="M8 9h8M8 12h5" /></g>)}
      {kind === "target" && (<g {...common}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1" fill={color} /></g>)}
      {kind === "person" && (<g {...common}><circle cx="12" cy="7.5" r="4" /><path d="M4.5 21c.8-4 3.8-6.5 7.5-6.5s6.7 2.5 7.5 6.5" /></g>)}
    </svg>
  );
};

const StepCard: React.FC<{ step: (typeof STEPS)[number]; index: number }> = ({ step, index }) => {
  const frame = useCurrentFrame();
  const appear = interpolate(frame, [30 + index * 14, 70 + index * 14], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
    easing: Easing.bezier(...EASE),
  });
  const lit = interpolate(frame, [step.lit, step.lit + 40], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
    easing: Easing.bezier(...EASE),
  });
  const color = step.human ? C.warn : C.accent;
  const btns = interpolate(frame, [470, 510], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const clickT = interpolate(frame, [525, 545, 565], [0, 1, 0], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
    easing: Easing.bezier(0.3, 0, 0.4, 1),
  });

  return (
    <div
      style={{
        position: "relative",
        borderRadius: 24,
        border: `1px solid ${lit > 0.5 ? color : C.line}`,
        background: step.human ? "linear-gradient(160deg, #1E293B, #2E2A12)" : C.bgElev,
        padding: "104px 28px 32px",
        minHeight: 296,
        textAlign: "center",
        boxShadow: `0 0 ${lit * 60}px ${step.human ? "rgba(251,191,36," + lit * 0.3 + ")" : "rgba(52,211,153," + lit * 0.22 + ")"}`,
        opacity: appear,
        transform: `translateY(${(1 - appear) * 50}px)`,
      }}
    >
      <span
        style={{
          position: "absolute", top: -44, left: "50%", transform: "translateX(-50%)",
          width: 90, height: 90, borderRadius: 26, display: "grid", placeItems: "center",
          background: C.bg, border: `2px solid ${lit > 0.5 ? color : C.line}`,
          fontFamily: FONT_MONO, fontSize: 36, fontWeight: 700,
          color: lit > 0.5 ? color : C.inkFaint,
        }}
      >
        {step.n}
      </span>
      <div style={{ position: "absolute", top: 26, left: "50%", transform: "translateX(-50%)" }}>
        <Icon kind={step.icon} color={color} />
      </div>
      <b style={{ fontFamily: FONT_DISPLAY, fontSize: 30, fontWeight: 800, display: "block", color: C.ink, lineHeight: 1.2 }}>
        {step.title}
      </b>
      <small style={{ fontFamily: FONT_DISPLAY, display: "block", fontSize: 21, color: C.inkFaint, marginTop: 10, lineHeight: 1.4 }}>
        {step.sub}
      </small>
      <span
        style={{
          display: "inline-block", marginTop: 14, fontFamily: FONT_MONO, fontSize: 20,
          borderRadius: 999, padding: "6px 18px",
          background: step.human ? C.warnSoft : C.goodSoft,
          color,
        }}
      >
        {step.tag}
      </span>
      {step.human && (
        <div style={{ display: "flex", gap: 14, justifyContent: "center", marginTop: 18, opacity: btns }}>
          <span
            style={{
              fontFamily: FONT_MONO, fontSize: 21, fontWeight: 700, borderRadius: 14,
              padding: "11px 20px", background: C.accent, color: C.accentInk,
              transform: `scale(${1 - clickT * 0.08})`,
              boxShadow: `0 0 0 ${clickT * 14}px rgba(52,211,153,0.25)`,
            }}
          >
            ✓ Freigeben
          </span>
          <span
            style={{
              fontFamily: FONT_MONO, fontSize: 21, fontWeight: 700, borderRadius: 14,
              padding: "11px 20px", border: `1.5px solid rgba(248,113,113,0.6)`, color: C.bad,
            }}
          >
            ✕ Ablehnen
          </span>
        </div>
      )}
    </div>
  );
};

export const Flow: React.FC = () => {
  const frame = useCurrentFrame();
  const title = useReveal(10);
  const sub = useReveal(30);
  const progress = interpolate(frame, [70, 470], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
    easing: Easing.bezier(0.3, 0, 0.4, 1),
  });

  return (
    <AbsoluteFill style={{ background: C.bg }}>
      <GridBg masked={false} />
      <h1
        style={{
          ...title,
          position: "absolute", top: 110, width: "100%", textAlign: "center",
          fontFamily: FONT_DISPLAY, fontSize: 76, fontWeight: 800,
          letterSpacing: "-0.02em", color: C.ink, margin: 0,
        }}
      >
        KI bereitet vor. <span style={{ color: C.accent }}>Der Mensch entscheidet.</span>
      </h1>
      <p
        style={{
          ...sub,
          position: "absolute", top: 225, width: "100%", textAlign: "center",
          fontFamily: FONT_MONO, fontSize: 26, letterSpacing: "0.14em",
          textTransform: "uppercase", color: C.inkFaint, margin: 0,
        }}
      >
        Der Ablauf im Cockpit
      </p>

      {/* Fortschrittsbalken */}
      <div
        style={{
          position: "absolute", top: 505, left: 150, width: 1620, height: 6,
          background: "rgba(226,232,240,0.12)", borderRadius: 99,
        }}
      >
        <div style={{ height: "100%", width: `${progress * 100}%`, borderRadius: 99, background: C.accent }} />
      </div>

      <div
        style={{
          position: "absolute", top: 430, left: 120, right: 120,
          display: "grid", gridTemplateColumns: "repeat(4, 1fr) 1.25fr", gap: 34,
        }}
      >
        {STEPS.map((s, i) => (
          <StepCard key={s.n} step={s} index={i} />
        ))}
      </div>
    </AbsoluteFill>
  );
};
