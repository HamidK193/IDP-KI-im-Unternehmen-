import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { GridBg, usePopIn, useReveal } from "../components";
import { C, FONT_DISPLAY, FONT_MONO } from "../theme";

const SOURCES = [
  { name: "Finance DB", detail: "GuV, Cashflow, Buchungen", x: 140, y: 420, rot: -4, delay: 50 },
  { name: "ERP", detail: "Einkauf, Bestand, Lieferanten", x: 700, y: 380, rot: 3, delay: 68 },
  { name: "CRM", detail: "Pipeline, Kunden, Aufträge", x: 1290, y: 430, rot: -2, delay: 86 },
  { name: "HR", detail: "Personalkosten, Kapazitäten", x: 320, y: 720, rot: 2.5, delay: 104 },
  { name: "Projekt DB", detail: "Budgets, Auslastung", x: 880, y: 740, rot: -3, delay: 122 },
  { name: "Data Warehouse", detail: "Historische Kennzahlen", x: 1430, y: 730, rot: 4, delay: 140 },
];

const QUESTIONS = [
  { x: 620, y: 560, size: 90, delay: 220 },
  { x: 1240, y: 660, size: 70, delay: 250 },
  { x: 250, y: 640, size: 60, delay: 280 },
];

const SiloChip: React.FC<(typeof SOURCES)[number]> = ({ name, detail, x, y, rot, delay }) => {
  const frame = useCurrentFrame();
  const pop = usePopIn(delay);
  const sway = Math.sin((frame - delay) / 70 + x) * 12;
  return (
    <div
      style={{
        position: "absolute", left: x, top: y,
        border: `1px solid ${C.line}`, borderRadius: 22,
        background: C.bgElev, padding: "34px 44px",
        boxShadow: "0 18px 50px rgba(0,0,0,0.45)",
        opacity: pop.opacity,
        transform: `${pop.transform} rotate(${rot}deg) translateY(${sway}px)`,
      }}
    >
      <b style={{ fontFamily: FONT_MONO, fontSize: 34, color: C.ink, display: "block" }}>{name}</b>
      <span style={{ fontFamily: FONT_DISPLAY, fontSize: 24, color: C.inkFaint, display: "block", marginTop: 8 }}>
        {detail}
      </span>
      <i
        style={{
          display: "inline-block", marginTop: 16, fontStyle: "normal",
          fontFamily: FONT_MONO, fontSize: 22, color: C.bad,
          background: C.badSoft, borderRadius: 999, padding: "6px 18px",
        }}
      >
        Silo
      </i>
    </div>
  );
};

export const Problem: React.FC = () => {
  const frame = useCurrentFrame();
  const title = useReveal(12);
  const hint = useReveal(36);

  return (
    <AbsoluteFill style={{ background: C.bg }}>
      <GridBg masked={false} />

      <h1
        style={{
          ...title,
          position: "absolute", top: 110, width: "100%", textAlign: "center",
          fontFamily: FONT_DISPLAY, fontSize: 84, fontWeight: 800,
          letterSpacing: "-0.02em", color: C.ink, margin: 0,
        }}
      >
        Viele Systeme. <span style={{ color: C.bad }}>Kein Überblick.</span>
      </h1>
      <p
        style={{
          ...hint,
          position: "absolute", top: 240, width: "100%", textAlign: "center",
          fontFamily: FONT_MONO, fontSize: 28, letterSpacing: "0.14em",
          textTransform: "uppercase", color: C.inkFaint, margin: 0,
        }}
      >
        Jede Zahl lebt woanders
      </p>

      {SOURCES.map((s) => (
        <SiloChip key={s.name} {...s} />
      ))}

      {QUESTIONS.map((q, i) => {
        const opacity = interpolate(frame, [q.delay, q.delay + 50], [0, 0.55], {
          extrapolateLeft: "clamp", extrapolateRight: "clamp",
          easing: Easing.bezier(0.22, 1, 0.36, 1),
        });
        const bob = Math.sin((frame - q.delay) / 50 + i * 2) * 8;
        return (
          <span
            key={i}
            style={{
              position: "absolute", left: q.x, top: q.y + bob,
              fontFamily: FONT_MONO, fontWeight: 700,
              color: C.bad, fontSize: q.size, opacity,
            }}
          >
            ?
          </span>
        );
      })}
    </AbsoluteFill>
  );
};
