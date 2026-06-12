import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { GridBg, usePopIn, useReveal } from "../components";
import { C, EASE, FONT_DISPLAY, FONT_MONO } from "../theme";

type Bezier = [number, number, number, number, number, number, number, number];

/* Quellen (links) → Hub (Mitte). Kubische Bezier-Kurven. */
const LEFT_WIRES: Bezier[] = [
  [475, 330, 650, 330, 680, 600, 800, 620],
  [475, 455, 650, 455, 680, 620, 800, 640],
  [475, 580, 650, 580, 680, 645, 800, 660],
  [475, 705, 650, 705, 680, 680, 800, 680],
  [475, 830, 650, 830, 680, 710, 800, 700],
  [475, 955, 650, 955, 680, 740, 800, 720],
];

/* Hub → Kennzahlen (rechts). */
const RIGHT_WIRES: Bezier[] = [
  [1120, 620, 1200, 600, 1240, 360, 1320, 340],
  [1120, 650, 1210, 640, 1240, 540, 1320, 530],
  [1120, 690, 1210, 700, 1240, 720, 1320, 720],
  [1120, 720, 1200, 740, 1240, 900, 1320, 910],
];

const bezierPoint = (b: Bezier, t: number) => {
  const [x0, y0, x1, y1, x2, y2, x3, y3] = b;
  const u = 1 - t;
  return {
    x: u * u * u * x0 + 3 * u * u * t * x1 + 3 * u * t * t * x2 + t * t * t * x3,
    y: u * u * u * y0 + 3 * u * u * t * y1 + 3 * u * t * t * y2 + t * t * t * y3,
  };
};

const pathFrom = (b: Bezier) =>
  `M ${b[0]} ${b[1]} C ${b[2]} ${b[3]}, ${b[4]} ${b[5]}, ${b[6]} ${b[7]}`;

const SOURCES = [
  { name: "Finance DB", detail: "GuV, Cashflow, Buchungen", y: 280, delay: 36 },
  { name: "ERP", detail: "Einkauf, Bestand, Lieferanten", y: 405, delay: 50 },
  { name: "CRM", detail: "Pipeline, Kunden, Aufträge", y: 530, delay: 64 },
  { name: "HR", detail: "Personalkosten, Kapazitäten", y: 655, delay: 78 },
  { name: "Projekt DB", detail: "Budgets, Auslastung", y: 780, delay: 92 },
  { name: "Data Warehouse", detail: "Historische Kennzahlen", y: 905, delay: 106 },
];

const KPIS = [
  { label: "Umsatz", value: "4,82 Mio. €", trend: "+8,4 %", y: 270, delay: 330 },
  { label: "Kostenquote", value: "41,8 %", trend: "−1,2 %", y: 460, delay: 360 },
  { label: "Liquidität", value: "780 Tsd. €", trend: "+12 Tage", y: 650, delay: 390 },
  { label: "Risikoindex", value: "42", trend: "niedrig", y: 840, delay: 420 },
];

const Wire: React.FC<{ b: Bezier; start: number; withDot?: boolean; dotOffset?: number }> = ({
  b, start, withDot = true, dotOffset = 0,
}) => {
  const frame = useCurrentFrame();
  const LEN = 700;
  const drawn = interpolate(frame, [start, start + 80], [LEN, 0], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
    easing: Easing.bezier(0.33, 0, 0.2, 1),
  });
  const headOpacity = interpolate(frame, [start + 70, start + 95], [0, 0.9], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const end = bezierPoint(b, 1);
  const beforeEnd = bezierPoint(b, 0.96);
  const angle = Math.atan2(end.y - beforeEnd.y, end.x - beforeEnd.x) * (180 / Math.PI);

  /* Wandernder Puls-Punkt: macht die Flussrichtung sichtbar. */
  const dotT = ((frame - start - 80) / 110 + dotOffset) % 1;
  const dotVisible = withDot && frame > start + 80 && dotT >= 0;
  const dot = bezierPoint(b, Math.max(dotT, 0));

  return (
    <>
      <path
        d={pathFrom(b)}
        fill="none"
        stroke={C.accent}
        strokeWidth={4}
        opacity={0.7}
        strokeDasharray={LEN}
        strokeDashoffset={drawn}
      />
      {/* Pfeilspitze am Ende der Leitung */}
      <g transform={`translate(${end.x}, ${end.y}) rotate(${angle})`} opacity={headOpacity}>
        <path d="M 0 0 L -20 -11 L -20 11 Z" fill={C.accent} />
      </g>
      {dotVisible && (
        <circle cx={dot.x} cy={dot.y} r={7} fill="#aef0d6" opacity={0.95} />
      )}
    </>
  );
};

/** Großer pulsierender Richtungspfeil zwischen den Spalten. */
const FlowArrow: React.FC<{ x: number; y: number; start: number }> = ({ x, y, start }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [start, start + 40], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const slide = Math.sin((frame - start) / 26) * 10;
  return (
    <div
      style={{
        position: "absolute", left: x + slide, top: y, opacity,
        display: "flex", alignItems: "center", gap: 4,
      }}
    >
      {[0.35, 0.65, 1].map((a, i) => (
        <svg key={i} width={34} height={44} viewBox="0 0 34 44">
          <path d="M 6 6 L 26 22 L 6 38" fill="none" stroke={C.accent} strokeWidth={7}
            strokeLinecap="round" strokeLinejoin="round" opacity={a} />
        </svg>
      ))}
    </div>
  );
};

export const Solution: React.FC = () => {
  const frame = useCurrentFrame();
  const title = useReveal(10);
  const hub = usePopIn(230, 44);
  const hubGlow = 0.35 + 0.25 * Math.abs(Math.sin((frame - 230) / 60));

  return (
    <AbsoluteFill style={{ background: C.bg }}>
      <GridBg masked={false} />

      <h1
        style={{
          ...title,
          position: "absolute", top: 90, width: "100%", textAlign: "center",
          fontFamily: FONT_DISPLAY, fontSize: 78, fontWeight: 800,
          letterSpacing: "-0.02em", color: C.ink, margin: 0,
        }}
      >
        Eine KI verbindet <span style={{ color: C.accent }}>alles</span>.
      </h1>

      {/* Datenquellen links */}
      {SOURCES.map((s) => {
        const pop = usePopIn(s.delay);
        return (
          <div
            key={s.name}
            style={{
              position: "absolute", left: 130, top: s.y, width: 340,
              border: `1px solid ${C.line}`, borderRadius: 18,
              background: C.bgElev, padding: "20px 26px",
              opacity: pop.opacity,
              transform: `translateX(${(pop.opacity - 1) * 70}px)`,
            }}
          >
            <b style={{ fontFamily: FONT_MONO, fontSize: 27, color: C.ink, display: "block" }}>{s.name}</b>
            <span style={{ fontFamily: FONT_DISPLAY, fontSize: 19, color: C.inkFaint, display: "block", marginTop: 4 }}>
              {s.detail}
            </span>
          </div>
        );
      })}

      {/* Leitungen mit Pfeilspitzen und Fluss-Punkten */}
      <svg viewBox="0 0 1920 1080" style={{ position: "absolute", inset: 0 }}>
        {LEFT_WIRES.map((b, i) => (
          <Wire key={`l${i}`} b={b} start={140 + i * 12} dotOffset={i * 0.17} />
        ))}
        {RIGHT_WIRES.map((b, i) => (
          <Wire key={`r${i}`} b={b} start={290 + i * 12} dotOffset={i * 0.25} />
        ))}
      </svg>

      {/* Große Richtungspfeile zwischen den Spalten */}
      <FlowArrow x={560} y={170} start={200} />
      <FlowArrow x={1180} y={170} start={340} />

      {/* Zentrum: Kara·Cockpit */}
      <div
        style={{
          position: "absolute", left: 810, top: 510, width: 300, height: 300,
          borderRadius: 40, display: "grid", placeItems: "center", textAlign: "center",
          background: "linear-gradient(160deg, #15201c, #0a2e22)",
          border: `2px solid ${C.accent}`,
          boxShadow: `0 0 ${90 + hubGlow * 60}px rgba(67,212,155,${hubGlow})`,
          opacity: hub.opacity,
          transform: hub.transform,
        }}
      >
        <div>
          <b style={{ fontFamily: FONT_DISPLAY, fontSize: 40, fontWeight: 800, lineHeight: 1.15, color: C.ink }}>
            Kara<span style={{ color: C.accent }}>·Cockpit</span>
          </b>
          <small style={{ fontFamily: FONT_MONO, fontSize: 21, color: C.inkFaint, marginTop: 10, display: "block" }}>
            KI-Analyse (Claude)
          </small>
        </div>
      </div>

      {/* Kennzahlen rechts */}
      {KPIS.map((k) => {
        const pop = usePopIn(k.delay);
        return (
          <div
            key={k.label}
            style={{
              position: "absolute", left: 1330, top: k.y, width: 460,
              borderLeft: `6px solid ${C.accent}`, borderRadius: 18,
              background: C.bgElev, padding: "24px 30px",
              opacity: pop.opacity,
              transform: `translateX(${(1 - pop.opacity) * 70}px)`,
            }}
          >
            <span style={{ fontFamily: FONT_MONO, fontSize: 21, letterSpacing: "0.1em", textTransform: "uppercase", color: C.inkFaint }}>
              {k.label}
            </span>
            <b style={{ display: "block", fontFamily: FONT_MONO, fontSize: 46, color: C.ink, marginTop: 6 }}>
              {k.value}
            </b>
            <i
              style={{
                fontStyle: "normal", fontFamily: FONT_MONO, fontSize: 21,
                color: C.accent, background: C.goodSoft, borderRadius: 999,
                padding: "4px 16px", marginTop: 10, display: "inline-block",
              }}
            >
              {k.trend}
            </i>
          </div>
        );
      })}
    </AbsoluteFill>
  );
};
