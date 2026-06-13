import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { GridBg, useReveal } from "../components";
import { C, EASE, FONT_DISPLAY, FONT_MONO } from "../theme";

/* Werte exakt aus website/script.js – Kostenquote-Trend als "%" (nicht "pp"). */
type Tone = "good" | "warn" | "bad" | "neutral";
type Metric = {
  label: string;
  value: number; decimals: number; unit: string;
  trend: string; dir: "up" | "down" | "flat"; tone: Tone;
};
type Scenario = {
  id: string; name: string; dot: Tone;
  metrics: Metric[];
  finding: string; risk: string; riskTone: Tone;
};

const SCENARIOS: Scenario[] = [
  {
    id: "stabil", name: "Stabil", dot: "good",
    metrics: [
      { label: "Umsatz", value: 4.82, decimals: 2, unit: " Mio. €", trend: "+8,4 %", dir: "up", tone: "good" },
      { label: "Kostenquote", value: 41.8, decimals: 1, unit: " %", trend: "−1,2 %", dir: "down", tone: "good" },
      { label: "Deckungsbeitrag", value: 1.34, decimals: 2, unit: " Mio. €", trend: "+5,1 %", dir: "up", tone: "good" },
      { label: "Liquidität", value: 780, decimals: 0, unit: " Tsd. €", trend: "+12 Tage", dir: "up", tone: "neutral" },
      { label: "Budgetabweichung", value: 3.6, decimals: 1, unit: " %", trend: "im Rahmen", dir: "flat", tone: "neutral" },
      { label: "Risikoindex", value: 42, decimals: 0, unit: "", trend: "niedrig", dir: "flat", tone: "good" },
    ],
    finding: "Umsatz wächst über drei Perioden stabil.",
    risk: "niedrig", riskTone: "good",
  },
  {
    id: "kritisch", name: "Kritisch", dot: "bad",
    metrics: [
      { label: "Umsatz", value: 4.31, decimals: 2, unit: " Mio. €", trend: "−6,8 %", dir: "down", tone: "bad" },
      { label: "Kostenquote", value: 49.6, decimals: 1, unit: " %", trend: "+7,4 %", dir: "up", tone: "bad" },
      { label: "Deckungsbeitrag", value: 920, decimals: 0, unit: " Tsd. €", trend: "−18,9 %", dir: "down", tone: "bad" },
      { label: "Liquidität", value: 410, decimals: 0, unit: " Tsd. €", trend: "−21 Tage", dir: "down", tone: "bad" },
      { label: "Budgetabweichung", value: 12.4, decimals: 1, unit: " %", trend: "kritisch", dir: "up", tone: "bad" },
      { label: "Risikoindex", value: 78, decimals: 0, unit: "", trend: "hoch", dir: "up", tone: "bad" },
    ],
    finding: "Kosten steigen stärker als Umsatz und drücken den Deckungsbeitrag.",
    risk: "hoch", riskTone: "bad",
  },
  {
    id: "wachstum", name: "Wachstum", dot: "warn",
    metrics: [
      { label: "Umsatz", value: 5.26, decimals: 2, unit: " Mio. €", trend: "+14,2 %", dir: "up", tone: "good" },
      { label: "Kostenquote", value: 45.1, decimals: 1, unit: " %", trend: "+2,1 %", dir: "up", tone: "warn" },
      { label: "Deckungsbeitrag", value: 1.46, decimals: 2, unit: " Mio. €", trend: "+9,8 %", dir: "up", tone: "good" },
      { label: "Liquidität", value: 560, decimals: 0, unit: " Tsd. €", trend: "−8 Tage", dir: "down", tone: "warn" },
      { label: "Budgetabweichung", value: 7.2, decimals: 1, unit: " %", trend: "prüfen", dir: "up", tone: "warn" },
      { label: "Risikoindex", value: 61, decimals: 0, unit: "", trend: "mittel", dir: "flat", tone: "warn" },
    ],
    finding: "Umsatzwachstum ist stark, aber Working Capital bindet Liquidität.",
    risk: "mittel", riskTone: "warn",
  },
];

/* Szenen-Takt: stabil → kritisch → wachstum, weiche Morphs. */
const SWITCH_1 = 290; // Frame des Wechsels stabil→kritisch
const SWITCH_2 = 560; // kritisch→wachstum
const MORPH = 45;     // Länge des Übergangs

const toneColor = (t: Tone) =>
  t === "good" ? C.good : t === "warn" ? C.warn : t === "bad" ? C.bad : C.neutral;
const toneSoft = (t: Tone) =>
  t === "good" ? C.goodSoft : t === "warn" ? C.warnSoft : t === "bad" ? C.badSoft : C.neutralSoft;

const fmt = (v: number, decimals: number) =>
  v.toLocaleString("de-DE", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

const TrendIcon: React.FC<{ dir: Metric["dir"]; color: string }> = ({ dir, color }) => (
  <svg width={18} height={18} viewBox="0 0 12 12" style={{ flexShrink: 0 }}>
    {dir === "up" && <path d="M2 9.5 6 4l4 5.5" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />}
    {dir === "down" && <path d="M2 3.5 6 9l4-5.5" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />}
    {dir === "flat" && <path d="M2 6h8" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" />}
  </svg>
);

/** Aktives Szenario + Morph-Fortschritt (0..1) zum nächsten. */
const useScenarioState = () => {
  const frame = useCurrentFrame();
  const ease = Easing.bezier(...EASE);
  if (frame < SWITCH_1) return { from: 0, to: 0, t: 0 };
  if (frame < SWITCH_1 + MORPH) {
    return { from: 0, to: 1, t: ease(interpolate(frame, [SWITCH_1, SWITCH_1 + MORPH], [0, 1])) };
  }
  if (frame < SWITCH_2) return { from: 1, to: 1, t: 0 };
  if (frame < SWITCH_2 + MORPH) {
    return { from: 1, to: 2, t: ease(interpolate(frame, [SWITCH_2, SWITCH_2 + MORPH], [0, 1])) };
  }
  return { from: 2, to: 2, t: 0 };
};

const KpiCard: React.FC<{ index: number }> = ({ index }) => {
  const frame = useCurrentFrame();
  const { from, to, t } = useScenarioState();
  const a = SCENARIOS[from].metrics[index];
  const b = SCENARIOS[to].metrics[index];
  const active = t < 0.5 ? a : b;
  const sameUnit = a.unit === b.unit;

  // Wert: gleiche Einheit → zählen; sonst Crossfade
  let valueText: string;
  let valueOpacity = 1;
  if (sameUnit) {
    const v = a.value + (b.value - a.value) * t;
    valueText = fmt(v, active.decimals) + active.unit;
  } else {
    valueText = t < 0.5 ? fmt(a.value, a.decimals) + a.unit : fmt(b.value, b.decimals) + b.unit;
    valueOpacity = Math.abs(t - 0.5) * 2;
  }
  const chipOpacity = t === 0 ? 1 : Math.abs(t - 0.5) * 2;
  const color = toneColor(active.tone);

  const pop = interpolate(frame, [60 + index * 16, 100 + index * 16], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
    easing: Easing.bezier(...EASE),
  });

  return (
    <div
      style={{
        position: "relative",
        background: C.bgElev,
        border: `1px solid ${C.line}`,
        borderRadius: 20,
        padding: "30px 34px 28px 40px",
        overflow: "hidden",
        opacity: pop,
        transform: `translateY(${(1 - pop) * 40}px)`,
      }}
    >
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 7, background: color }} />
      <span style={{ fontFamily: FONT_MONO, fontSize: 21, letterSpacing: "0.08em", textTransform: "uppercase", color: C.inkFaint, display: "block" }}>
        {active.label}
      </span>
      <b
        style={{
          display: "block", fontFamily: FONT_MONO, fontSize: 52, fontWeight: 700,
          letterSpacing: "-0.02em", color: C.ink, margin: "10px 0 12px",
          fontVariantNumeric: "tabular-nums", opacity: valueOpacity, whiteSpace: "nowrap",
        }}
      >
        {valueText}
      </b>
      <span
        style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          fontFamily: FONT_MONO, fontSize: 22,
          padding: "5px 16px", borderRadius: 999,
          background: toneSoft(active.tone), color,
          opacity: chipOpacity,
        }}
      >
        <TrendIcon dir={active.dir} color={color} />
        {active.trend}
      </span>
    </div>
  );
};

export const Scenarios: React.FC = () => {
  const frame = useCurrentFrame();
  const title = useReveal(10);
  const switcher = useReveal(34);
  const footer = useReveal(110);
  const { from, to, t } = useScenarioState();
  const activeIdx = t < 0.5 ? from : to;
  const active = SCENARIOS[activeIdx];
  const footerSwap = t === 0 ? 1 : Math.abs(t - 0.5) * 2;

  return (
    <AbsoluteFill style={{ background: C.bg }}>
      <GridBg masked={false} />

      <h1
        style={{
          ...title,
          position: "absolute", top: 64, width: "100%", textAlign: "center",
          fontFamily: FONT_DISPLAY, fontSize: 70, fontWeight: 800,
          letterSpacing: "-0.02em", color: C.ink, margin: 0,
        }}
      >
        Ein Cockpit. <span style={{ color: C.accent }}>Drei Szenarien.</span>
      </h1>

      {/* Szenario-Umschalter */}
      <div
        style={{
          ...switcher,
          position: "absolute", top: 175, width: "100%",
          display: "flex", justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "inline-flex", gap: 10, padding: 8,
            border: `1px solid ${C.line}`, borderRadius: 999, background: C.bgElev,
          }}
        >
          {SCENARIOS.map((s, i) => {
            const isActive = i === activeIdx;
            const morphIn = i === to && t > 0 ? t : i === from && t > 0 ? 1 - t : isActive ? 1 : 0;
            return (
              <div
                key={s.id}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 12,
                  fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28,
                  padding: "14px 34px", borderRadius: 999,
                  color: isActive ? C.bg : C.inkSoft,
                  background: isActive ? `rgba(226,232,240,${0.85 + morphIn * 0.15})` : "transparent",
                }}
              >
                <span style={{ width: 13, height: 13, borderRadius: "50%", background: toneColor(s.dot) }} />
                {s.name}
              </div>
            );
          })}
        </div>
      </div>

      {/* KPI-Raster 3×2 */}
      <div
        style={{
          position: "absolute", top: 290, left: 120, right: 120,
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 26,
        }}
      >
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <KpiCard key={i} index={i} />
        ))}
      </div>

      {/* KI-Finding + Risiko */}
      <div
        style={{
          ...footer,
          position: "absolute", left: 120, right: 120, bottom: 78,
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: 30,
          border: `1px solid ${C.line}`, borderRadius: 20,
          background: C.bgElev, padding: "26px 36px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, opacity: footerSwap }}>
          <svg width={26} height={26} viewBox="0 0 20 20" style={{ flexShrink: 0 }}>
            <path d="M10 2.2 12 7l4.8 2-4.8 2-2 4.8L8 11 3.2 9 8 7l2-4.8Z" fill={C.accent} />
          </svg>
          <span style={{ fontFamily: FONT_DISPLAY, fontSize: 30, color: C.inkSoft }}>
            <b style={{ color: C.ink }}>KI-Finding:</b> {active.finding}
          </span>
        </div>
        <span
          style={{
            fontFamily: FONT_MONO, fontSize: 24, fontWeight: 700, whiteSpace: "nowrap",
            padding: "9px 24px", borderRadius: 999,
            background: toneSoft(active.riskTone), color: toneColor(active.riskTone),
            opacity: footerSwap,
          }}
        >
          Risiko: {active.risk}
        </span>
      </div>
    </AbsoluteFill>
  );
};
