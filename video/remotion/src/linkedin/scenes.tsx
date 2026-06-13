import React from "react";
import { Img, staticFile, useCurrentFrame, useVideoConfig, interpolate, Easing } from "remotion";
import { C, EASE, FONT_DISPLAY, FONT_MONO } from "./theme";
import { Eyebrow, ease } from "./components";

/* Content-Bereich: zwischen Kopfzeile (~150) und Untertitel-Band (~1080).
   Alle Szenen positionieren absolut darin und bleiben in sicheren Rändern. */
const ContentBox: React.FC<{ children: React.ReactNode; justify?: string }> = ({ children, justify = "center" }) => (
  <div
    style={{
      position: "absolute",
      top: 168, left: 80, right: 80, bottom: 300,
      display: "flex", flexDirection: "column", justifyContent: justify, alignItems: "stretch",
    }}
  >
    {children}
  </div>
);

const fmt = (v: number, d: number) =>
  v.toLocaleString("de-DE", { minimumFractionDigits: d, maximumFractionDigits: d });

/* ------------------------------- HOOK ----------------------------------- */
export const Hook: React.FC = () => {
  const f = useCurrentFrame();
  const eye = ease(f, 8, 26);
  const l1 = ease(f, 18, 40);
  const l2 = ease(f, 30, 52);
  const ul = ease(f, 52, 78);
  const dot = 0.5 + 0.5 * Math.abs(Math.sin(f / 26));
  return (
    <ContentBox>
      <div style={{ opacity: eye, transform: `translateY(${(1 - eye) * 20}px)`, marginBottom: 26 }}>
        <Eyebrow>KI für kleine Unternehmen</Eyebrow>
      </div>
      <div
        style={{
          opacity: l1, transform: `translateY(${(1 - l1) * 34}px)`,
          fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 118, lineHeight: 1.04,
          letterSpacing: "-0.03em", color: C.ink,
        }}
      >
        Klüger
      </div>
      <div
        style={{
          opacity: l2, transform: `translateY(${(1 - l2) * 34}px)`,
          fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 118, lineHeight: 1.04,
          letterSpacing: "-0.03em", color: C.ink, position: "relative", display: "inline-block",
        }}
      >
        entscheiden <span style={{ color: C.accent }}>mit KI.</span>
        <div
          style={{
            position: "absolute", left: 0, bottom: 6, height: 10, width: `${ul * 100}%`,
            maxWidth: 540, background: C.accent, borderRadius: 6, opacity: 0.85,
          }}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 40, opacity: ease(f, 60, 80) }}>
        <span style={{ width: 16, height: 16, borderRadius: "50%", background: C.accent, boxShadow: `0 0 ${8 + dot * 14}px rgba(225,29,72,${0.4 + dot * 0.4})` }} />
        <span style={{ fontFamily: FONT_MONO, fontSize: 26, color: C.inkSoft }}>Projektvorstellung</span>
      </div>
    </ContentBox>
  );
};

/* ------------------------------- INTRO ---------------------------------- */
export const Intro: React.FC = () => {
  const f = useCurrentFrame();
  const eye = ease(f, 8, 28);
  const title = ease(f, 22, 48);
  const chips = ease(f, 48, 72);
  return (
    <ContentBox>
      <div style={{ opacity: eye, transform: `translateY(${(1 - eye) * 20}px)`, marginBottom: 22 }}>
        <Eyebrow color={C.inkSoft}>Interdisziplinäres Projekt · Hochschule Pforzheim</Eyebrow>
      </div>
      <h1
        style={{
          margin: 0, opacity: title, transform: `translateY(${(1 - title) * 30}px)`,
          fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 96, lineHeight: 1.05,
          letterSpacing: "-0.03em", color: C.ink,
        }}
      >
        Das KI-<span style={{ color: C.accent }}>Controlling-Cockpit</span>
      </h1>
      <div style={{ display: "flex", gap: 16, marginTop: 46, opacity: chips, transform: `translateY(${(1 - chips) * 20}px)`, flexWrap: "wrap" }}>
        {["Abdulhamid Karatas", "Kadir Atar"].map((n) => (
          <span
            key={n}
            style={{
              fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 34, color: C.ink,
              background: "rgba(241,245,249,0.06)", border: `1px solid ${C.line}`,
              borderRadius: 999, padding: "16px 30px",
            }}
          >
            {n}
          </span>
        ))}
      </div>
    </ContentBox>
  );
};

/* ------------------------------ PROBLEM --------------------------------- */
const SOURCES = ["Buchhaltung", "ERP", "CRM", "Personal"];
export const Problem: React.FC = () => {
  const f = useCurrentFrame();
  const title = ease(f, 8, 30);
  return (
    <ContentBox justify="flex-start">
      <h2
        style={{
          margin: "0 0 56px", opacity: title, transform: `translateY(${(1 - title) * 24}px)`,
          fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 84, lineHeight: 1.06,
          letterSpacing: "-0.03em", color: C.ink,
        }}
      >
        Daten überall.<br /><span style={{ color: C.accent }}>Kein Überblick.</span>
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
        {SOURCES.map((s, i) => {
          const a = ease(f, 30 + i * 10, 56 + i * 10);
          const drift = Math.sin((f - 30 - i * 10) / 60 + i) * 8;
          const rot = [-3, 2.5, -2, 3][i];
          return (
            <div
              key={s}
              style={{
                opacity: a,
                transform: `translateY(${(1 - a) * 40 + drift}px) rotate(${rot}deg)`,
                background: "rgba(241,245,249,0.05)", border: `1px solid ${C.line}`,
                borderRadius: 22, padding: "34px 30px",
                display: "flex", alignItems: "center", gap: 18,
              }}
            >
              <span style={{ width: 14, height: 14, borderRadius: 4, background: C.inkFaint, transform: "rotate(45deg)", flex: "none" }} />
              <span style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 42, color: C.ink }}>{s}</span>
            </div>
          );
        })}
      </div>
    </ContentBox>
  );
};

/* ------------------------------ SOLUTION -------------------------------- */
const KPIS = [
  { label: "Umsatz", value: 4.82, dec: 2, unit: " Mio. €", tone: C.good },
  { label: "Kostenquote", value: 41.8, dec: 1, unit: " %", tone: C.good },
  { label: "Liquidität", value: 780, dec: 0, unit: " Tsd. €", tone: C.inkSoft },
];
const CASES = ["Controlling-Cockpit", "Kostenabweichung", "Frühwarnsystem"];
export const Solution: React.FC = () => {
  const f = useCurrentFrame();
  const title = ease(f, 6, 26);
  const node = ease(f, 40, 66);
  const nodeGlow = 0.4 + 0.3 * Math.abs(Math.sin((f - 40) / 40));
  return (
    <ContentBox justify="flex-start">
      <h2
        style={{
          margin: "0 0 30px", opacity: title, transform: `translateY(${(1 - title) * 22}px)`,
          fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 70, lineHeight: 1.05,
          letterSpacing: "-0.03em", color: C.ink,
        }}
      >
        Ein Cockpit. <span style={{ color: C.accent }}>Alle Zahlen.</span>
      </h2>

      {/* Quellen → Cockpit */}
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, marginBottom: 18 }}>
        {SOURCES.map((s, i) => {
          const a = ease(f, 14 + i * 7, 36 + i * 7);
          return (
            <span
              key={s}
              style={{
                opacity: a, transform: `translateY(${(1 - a) * 18}px)`,
                fontFamily: FONT_MONO, fontSize: 22, color: C.inkSoft,
                background: "rgba(241,245,249,0.05)", border: `1px solid ${C.line}`,
                borderRadius: 12, padding: "12px 16px", flex: 1, textAlign: "center", whiteSpace: "nowrap",
              }}
            >
              {s}
            </span>
          );
        })}
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
        <svg width="60" height="40" viewBox="0 0 60 40" style={{ opacity: ease(f, 34, 50) }}>
          <path d="M30 4 L30 28 M18 18 L30 30 L42 18" fill="none" stroke={C.accent} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div
        style={{
          opacity: node, transform: `scale(${0.9 + node * 0.1})`,
          background: "linear-gradient(160deg, rgba(225,29,72,0.18), rgba(241,245,249,0.04))",
          border: `2px solid ${C.accent}`, borderRadius: 20, padding: "22px 30px",
          display: "flex", alignItems: "center", justifyContent: "center", gap: 16,
          boxShadow: `0 0 ${node * 60}px rgba(225,29,72,${nodeGlow * 0.5})`, marginBottom: 26,
        }}
      >
        <svg viewBox="0 0 32 32" width="36" height="36" aria-hidden="true">
          <rect x="2" y="18" width="6" height="12" rx="1.5" fill={C.ink} />
          <rect x="13" y="10" width="6" height="20" rx="1.5" fill={C.ink} />
          <rect x="24" y="2" width="6" height="28" rx="1.5" fill={C.accent} />
        </svg>
        <span style={{ fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: C.ink }}>
          Kara<span style={{ color: C.accent }}>·Cockpit</span>
        </span>
      </div>

      {/* KPI-Kacheln, zählend */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 26 }}>
        {KPIS.map((k, i) => {
          const a = ease(f, 56 + i * 8, 80 + i * 8);
          const cnt = ease(f, 56 + i * 8, 110 + i * 8);
          return (
            <div
              key={k.label}
              style={{
                opacity: a, transform: `translateY(${(1 - a) * 24}px)`,
                background: "rgba(241,245,249,0.05)", border: `1px solid ${C.line}`,
                borderLeft: `5px solid ${k.tone}`, borderRadius: 16, padding: "20px 18px",
              }}
            >
              <div style={{ fontFamily: FONT_MONO, fontSize: 18, letterSpacing: "0.08em", textTransform: "uppercase", color: C.inkFaint }}>{k.label}</div>
              <div style={{ fontFamily: FONT_MONO, fontWeight: 700, fontSize: 38, color: C.ink, marginTop: 8, whiteSpace: "nowrap" }}>
                {fmt(k.value * cnt, k.dec)}{k.unit}
              </div>
            </div>
          );
        })}
      </div>

      {/* Fallbeispiele */}
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {CASES.map((c, i) => {
          const a = ease(f, 92 + i * 8, 116 + i * 8);
          return (
            <span
              key={c}
              style={{
                opacity: a, transform: `translateY(${(1 - a) * 16}px)`,
                fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 26, color: C.ink,
                background: C.accentSoft, border: `1px solid rgba(225,29,72,0.4)`,
                borderRadius: 999, padding: "12px 22px",
              }}
            >
              {String(i + 1).padStart(2, "0")} · {c}
            </span>
          );
        })}
      </div>
    </ContentBox>
  );
};

/* ------------------------------ SPECIAL --------------------------------- */
export const Special: React.FC = () => {
  const f = useCurrentFrame();
  const title = ease(f, 6, 26);
  const card = ease(f, 28, 54);
  const rows = [
    { k: "Quelle", v: "Finance DB · ERP", tone: C.inkSoft },
    { k: "Datenqualität", v: "hoch · 96 %", tone: C.good },
    { k: "Risiko", v: "mittel", tone: C.warn },
  ];
  const human = ease(f, 70, 92);
  return (
    <ContentBox justify="flex-start">
      <h2
        style={{
          margin: "0 0 36px", opacity: title, transform: `translateY(${(1 - title) * 22}px)`,
          fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 76, lineHeight: 1.05,
          letterSpacing: "-0.03em", color: C.ink,
        }}
      >
        <span style={{ color: C.accent }}>Nachvollziehbar.</span><br />Der Mensch entscheidet.
      </h2>

      <div
        style={{
          opacity: card, transform: `translateY(${(1 - card) * 28}px)`,
          background: "rgba(241,245,249,0.05)", border: `1px solid ${C.line}`,
          borderRadius: 22, padding: "30px 32px",
        }}
      >
        <div style={{ fontFamily: FONT_MONO, fontSize: 20, letterSpacing: "0.12em", textTransform: "uppercase", color: C.accent, marginBottom: 14 }}>
          Empfehlung der KI
        </div>
        <div style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 38, color: C.ink, lineHeight: 1.25, marginBottom: 26 }}>
          Kostenstellen 410 &amp; 620 prüfen, variable Ausgaben einfrieren.
        </div>
        {rows.map((r, i) => {
          const a = ease(f, 48 + i * 8, 70 + i * 8);
          return (
            <div
              key={r.k}
              style={{
                opacity: a, display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "16px 0", borderTop: i === 0 ? "none" : `1px solid ${C.lineSoft}`,
              }}
            >
              <span style={{ fontFamily: FONT_MONO, fontSize: 24, color: C.inkFaint }}>{r.k}</span>
              <span style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: r.tone }}>{r.v}</span>
            </div>
          );
        })}
      </div>

      <div style={{ display: "flex", gap: 14, marginTop: 26, opacity: human, transform: `translateY(${(1 - human) * 18}px)` }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 12, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: C.bg, background: C.good, borderRadius: 14, padding: "16px 28px" }}>
          <svg width="22" height="22" viewBox="0 0 16 16"><path d="m2.5 8.5 3.5 3.5 7.5-8" fill="none" stroke={C.bg} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
          Freigeben
        </span>
        <span style={{ display: "inline-flex", alignItems: "center", fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: C.inkSoft, border: `1.5px solid ${C.line}`, borderRadius: 14, padding: "16px 28px" }}>
          Ablehnen
        </span>
      </div>
    </ContentBox>
  );
};

/* -------------------------------- CTA ----------------------------------- */
export const CTA: React.FC = () => {
  const f = useCurrentFrame();
  const logo = ease(f, 6, 28);
  const url = ease(f, 22, 48);
  const qr = ease(f, 36, 60);
  const meta = ease(f, 54, 78);
  const urlPulse = 0.9 + 0.1 * Math.abs(Math.sin((f - 22) / 40));
  return (
    <ContentBox>
      <div style={{ opacity: logo, transform: `translateY(${(1 - logo) * 20}px)`, display: "flex", alignItems: "center", gap: 18, marginBottom: 30 }}>
        <svg viewBox="0 0 32 32" width="46" height="46" aria-hidden="true">
          <rect x="2" y="18" width="6" height="12" rx="1.5" fill={C.ink} />
          <rect x="13" y="10" width="6" height="20" rx="1.5" fill={C.ink} />
          <rect x="24" y="2" width="6" height="28" rx="1.5" fill={C.accent} />
        </svg>
        <span style={{ fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 48, color: C.ink }}>
          Kara<span style={{ color: C.accent }}>·Cockpit</span>
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
        <div style={{ flex: 1 }}>
          <h2
            style={{
              margin: "0 0 22px", opacity: url, transform: `translateY(${(1 - url) * 24}px)`,
              fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 60, lineHeight: 1.05, letterSpacing: "-0.02em", color: C.ink,
            }}
          >
            Jetzt ansehen:
          </h2>
          <div
            style={{
              opacity: url, transform: `scale(${0.96 + url * 0.04})`,
              display: "inline-block", fontFamily: FONT_MONO, fontWeight: 700, fontSize: 40,
              color: C.white, background: C.accent, borderRadius: 16, padding: "20px 30px",
              boxShadow: `0 0 ${urlPulse * 30}px rgba(225,29,72,0.4)`,
            }}
          >
            kara-cockpit.de
          </div>
        </div>
        <div style={{ opacity: qr, transform: `scale(${0.9 + qr * 0.1})`, background: C.white, borderRadius: 20, padding: 18 }}>
          <Img src={staticFile("qr.png")} style={{ width: 200, height: 200, display: "block" }} />
        </div>
      </div>

      <div style={{ opacity: meta, transform: `translateY(${(1 - meta) * 18}px)`, marginTop: 46 }}>
        <p style={{ margin: 0, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, color: C.ink }}>
          Abdulhamid Karatas &amp; Kadir Atar
        </p>
        <p style={{ margin: "8px 0 0", fontFamily: FONT_MONO, fontSize: 24, color: C.inkSoft, lineHeight: 1.4 }}>
          Hochschule Pforzheim · IDP<br />
          Betreuung: Prof. Dr. Bettina C. K. Binder
        </p>
        <p style={{ margin: "18px 0 0", fontFamily: FONT_MONO, fontSize: 20, color: C.inkFaint, display: "inline-flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 9, height: 9, borderRadius: "50%", background: C.accent, display: "inline-block" }} />
          Video mit KI (Claude) erstellt
        </p>
      </div>
    </ContentBox>
  );
};
