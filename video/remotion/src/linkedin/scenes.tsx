import React from "react";
import { Img, staticFile, useCurrentFrame } from "remotion";
import { C, FONT_DISPLAY, FONT_MONO } from "./theme";
import { Eyebrow, ease } from "./components";

/* Szenen-Props: dur = Szenenlänge in Frames (für Staffelung relativ zur Audiolänge). */
type SP = { dur: number };

/* Content-Bereich: zwischen Kopfzeile (~150) und Untertitel-Band (~990).
   Untertitel sitzen im unteren Drittel, Hauptgrafik darüber – keine leere Fläche. */
const ContentBox: React.FC<{ children: React.ReactNode; justify?: string }> = ({ children, justify = "center" }) => (
  <div
    style={{
      position: "absolute",
      top: 150, left: 80, right: 80, bottom: 366,
      display: "flex", flexDirection: "column", justifyContent: justify, alignItems: "stretch",
    }}
  >
    {children}
  </div>
);

const fmt = (v: number, d: number) =>
  v.toLocaleString("de-DE", { minimumFractionDigits: d, maximumFractionDigits: d });

const LOGO_BARS = (
  <svg viewBox="0 0 32 32" width="34" height="34" aria-hidden="true" style={{ flex: "none" }}>
    <rect x="2" y="18" width="6" height="12" rx="1.5" fill={C.ink} />
    <rect x="13" y="10" width="6" height="20" rx="1.5" fill={C.ink} />
    <rect x="24" y="2" width="6" height="28" rx="1.5" fill={C.accent} />
  </svg>
);

/* ------------------------------- 1 · HOOK ------------------------------- */
export const Hook: React.FC<SP> = () => {
  const f = useCurrentFrame();
  const eye = ease(f, 6, 24);
  const l1 = ease(f, 16, 40);
  const ul = ease(f, 42, 70);
  const strip = ease(f, 50, 78);
  const KPIS = [["Umsatz", "4,82 Mio."], ["Kostenquote", "41,8 %"], ["Liquidität", "780 Tsd."]];
  return (
    <ContentBox>
      <div style={{ opacity: eye, transform: `translateY(${(1 - eye) * 18}px)`, marginBottom: 24 }}>
        <Eyebrow>IDP · Hochschule Pforzheim</Eyebrow>
      </div>
      <h1
        style={{
          opacity: l1, transform: `translateY(${(1 - l1) * 30}px)`,
          margin: 0, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 104,
          lineHeight: 1.05, letterSpacing: "-0.03em", color: C.ink,
        }}
      >
        Den Überblick{" "}
        <span style={{ position: "relative", color: C.accent, whiteSpace: "nowrap" }}>
          behalten.
          <span style={{ position: "absolute", left: 0, bottom: 4, height: 10, width: `${ul * 100}%`, maxWidth: 460, background: C.accent, borderRadius: 6, opacity: 0.85 }} />
        </span>
      </h1>

      {/* dezenter Cockpit-Streifen, damit nichts leer wirkt */}
      <div style={{ display: "flex", gap: 14, marginTop: 52, opacity: strip, transform: `translateY(${(1 - strip) * 20}px)` }}>
        {KPIS.map(([k, v]) => (
          <div key={k} style={{ flex: 1, background: "rgba(241,245,249,0.05)", border: `1px solid ${C.line}`, borderLeft: `4px solid ${C.accent}`, borderRadius: 14, padding: "16px 18px" }}>
            <div style={{ fontFamily: FONT_MONO, fontSize: 16, letterSpacing: "0.08em", textTransform: "uppercase", color: C.inkFaint }}>{k}</div>
            <div style={{ fontFamily: FONT_MONO, fontWeight: 700, fontSize: 28, color: C.ink, marginTop: 6 }}>{v}</div>
          </div>
        ))}
      </div>
    </ContentBox>
  );
};

/* ----------------------------- 2 · WER/WAS ------------------------------ */
export const Intro: React.FC<SP> = () => {
  const f = useCurrentFrame();
  const logo = ease(f, 6, 28);
  const eye = ease(f, 16, 36);
  const title = ease(f, 26, 52);
  const chips = ease(f, 50, 74);
  return (
    <ContentBox>
      <div style={{ opacity: logo, transform: `scale(${0.94 + logo * 0.06})`, alignSelf: "flex-start", background: C.white, borderRadius: 20, padding: "18px 26px", marginBottom: 30, boxShadow: "0 12px 34px rgba(0,0,0,0.4)" }}>
        <Img src={staticFile("hspf-logo.png")} style={{ height: 56, width: "auto", display: "block" }} />
      </div>
      <div style={{ opacity: eye, transform: `translateY(${(1 - eye) * 16}px)`, marginBottom: 18 }}>
        <Eyebrow color={C.inkSoft}>Interdisziplinäres Projekt · Hochschule Pforzheim</Eyebrow>
      </div>
      <h1 style={{ margin: 0, opacity: title, transform: `translateY(${(1 - title) * 28}px)`, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 88, lineHeight: 1.05, letterSpacing: "-0.03em", color: C.ink }}>
        Das KI-<span style={{ color: C.accent }}>Controlling-Cockpit</span>
      </h1>
      <div style={{ display: "flex", gap: 14, marginTop: 40, opacity: chips, transform: `translateY(${(1 - chips) * 18}px)`, flexWrap: "wrap" }}>
        {["Abdulhamid Karatas", "Kadir Atar"].map((n) => (
          <span key={n} style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, color: C.ink, background: "rgba(241,245,249,0.06)", border: `1px solid ${C.line}`, borderRadius: 999, padding: "14px 28px" }}>
            {n}
          </span>
        ))}
      </div>
    </ContentBox>
  );
};

/* --- gemeinsame Vier-Inseln-Geometrie für Problem (3) und Lösung (4) --- */
const W = 920, H = 836;
const NODE = { x: 460, y: 418 };
const BLOCKS = [
  { name: "Buchhaltung", x: 170, y: 132 },
  { name: "ERP", x: 750, y: 132 },
  { name: "CRM", x: 170, y: 704 },
  { name: "Personal", x: 750, y: 704 },
];

/* ------------------------------ 3 · PROBLEM ----------------------------- */
export const Problem: React.FC<SP> = () => {
  const f = useCurrentFrame();
  const label = ease(f, 178, 202);
  return (
    <ContentBox justify="center">
      <div style={{ position: "relative", width: "100%", aspectRatio: `${W} / ${H}` }}>
        <svg viewBox={`0 0 ${W} ${H}`} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          {/* gestrichelte, abgeschnittene Stummel – KEINE Verbindung */}
          {BLOCKS.map((b, i) => {
            const dx = NODE.x - b.x, dy = NODE.y - b.y;
            const len = Math.hypot(dx, dy);
            const ux = dx / len, uy = dy / len;
            const x1 = b.x + ux * 96, y1 = b.y + uy * 70;
            const x2 = b.x + ux * 200, y2 = b.y + uy * 150;
            const a = ease(f, 44 + i * 22, 68 + i * 22);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={C.inkFaint} strokeWidth={4} strokeDasharray="10 12" strokeLinecap="round" opacity={a * 0.7} />;
          })}
        </svg>

        {BLOCKS.map((b, i) => {
          const a = ease(f, 12 + i * 32, 40 + i * 32);
          return (
            <div key={b.name} style={{
              position: "absolute", left: `${(b.x / W) * 100}%`, top: `${(b.y / H) * 100}%`,
              transform: `translate(-50%,-50%) translateY(${(1 - a) * 30}px)`, opacity: a,
              background: "rgba(241,245,249,0.05)", border: `1px solid ${C.line}`, borderRadius: 18,
              padding: "26px 30px", display: "flex", alignItems: "center", gap: 14, minWidth: 250,
            }}>
              <span style={{ width: 12, height: 12, borderRadius: 3, background: C.inkFaint, transform: "rotate(45deg)", flex: "none" }} />
              <span style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 38, color: C.ink }}>{b.name}</span>
            </div>
          );
        })}

        {/* Mittiges Label statt Verbindung */}
        <div style={{
          position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)",
          opacity: label, textAlign: "center", width: 320,
          background: "rgba(248,113,113,0.10)", border: `1px dashed rgba(248,113,113,0.5)`,
          borderRadius: 16, padding: "18px 20px",
        }}>
          <div style={{ fontFamily: FONT_MONO, fontSize: 22, fontWeight: 700, color: C.bad, lineHeight: 1.35 }}>
            getrennte Systeme
          </div>
          <div style={{ fontFamily: FONT_MONO, fontSize: 17, color: C.inkSoft, marginTop: 4 }}>
            kein gemeinsamer Nenner
          </div>
        </div>
      </div>
    </ContentBox>
  );
};

/* ------------------------------ 4 · LÖSUNG ------------------------------ */
export const Loesung: React.FC<SP> = () => {
  const f = useCurrentFrame();
  const node = ease(f, 44, 70);
  const glow = 0.4 + 0.3 * Math.abs(Math.sin((f - 44) / 36));
  return (
    <ContentBox justify="center">
      <div style={{ position: "relative", width: "100%", aspectRatio: `${W} / ${H}` }}>
        <svg viewBox={`0 0 ${W} ${H}`} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          {BLOCKS.map((b, i) => {
            const dx = NODE.x - b.x, dy = NODE.y - b.y;
            const len = Math.hypot(dx, dy);
            const ux = dx / len, uy = dy / len;
            const x1 = b.x + ux * 96, y1 = b.y + uy * 70;
            const x2 = NODE.x - ux * 96, y2 = NODE.y - uy * 96;
            const seg = Math.hypot(x2 - x1, y2 - y1);
            const grow = ease(f, 8 + i * 6, 40 + i * 6);
            return (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                stroke={C.accent} strokeWidth={4} strokeLinecap="round" opacity={0.85}
                strokeDasharray={seg} strokeDashoffset={seg * (1 - grow)} />
            );
          })}
        </svg>

        {BLOCKS.map((b) => (
          <div key={b.name} style={{
            position: "absolute", left: `${(b.x / W) * 100}%`, top: `${(b.y / H) * 100}%`,
            transform: "translate(-50%,-50%)",
            background: "rgba(241,245,249,0.05)", border: `1px solid ${C.line}`, borderRadius: 18,
            padding: "26px 30px", display: "flex", alignItems: "center", gap: 14, minWidth: 250,
          }}>
            <span style={{ width: 12, height: 12, borderRadius: 3, background: C.accent, transform: "rotate(45deg)", flex: "none" }} />
            <span style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 38, color: C.ink }}>{b.name}</span>
          </div>
        ))}

        {/* Zentrales Cockpit leuchtet auf */}
        <div style={{
          position: "absolute", left: "50%", top: "50%",
          transform: `translate(-50%,-50%) scale(${0.85 + node * 0.15})`, opacity: node,
          background: "linear-gradient(160deg, rgba(52,211,153,0.18), rgba(241,245,249,0.04))",
          border: `2px solid ${C.accent}`, borderRadius: 22, padding: "22px 28px",
          display: "flex", alignItems: "center", gap: 14,
          boxShadow: `0 0 ${node * 70}px rgba(52,211,153,${glow * 0.55})`,
        }}>
          {LOGO_BARS}
          <span style={{ fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, color: C.ink, whiteSpace: "nowrap" }}>
            Kara<span style={{ color: C.accent }}>·Cockpit</span>
          </span>
        </div>
      </div>
    </ContentBox>
  );
};

/* ------------------------------ 5 · NUTZEN ------------------------------ */
const NUTZEN_KPIS = [
  { label: "Umsatz", value: 4.82, dec: 2, unit: " Mio. €", tone: C.good },
  { label: "Kostenquote", value: 41.8, dec: 1, unit: " %", tone: C.good },
  { label: "Liquidität", value: 780, dec: 0, unit: " Tsd. €", tone: C.accent },
];
const TREND = [40, 46, 52, 60, 71, 86];
export const Nutzen: React.FC<SP> = () => {
  const f = useCurrentFrame();
  const draw = ease(f, 60, 120);
  const pts = TREND.map((v, i) => {
    const x = 30 + (i * (900 - 30)) / (TREND.length - 1);
    const y = 150 - ((v - 35) / 55) * 120;
    return [x, y];
  });
  const path = pts.map((p, i) => (i === 0 ? "M" : "L") + p[0].toFixed(0) + " " + p[1].toFixed(0)).join(" ");
  const headIdx = Math.min(Math.floor(draw * (pts.length - 1) + 0.0001), pts.length - 1);
  return (
    <ContentBox justify="center">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 18, marginBottom: 30 }}>
        {NUTZEN_KPIS.map((k, i) => {
          const a = ease(f, 8 + i * 10, 34 + i * 10);
          const cnt = ease(f, 8 + i * 10, 66 + i * 10);
          return (
            <div key={k.label} style={{
              opacity: a, transform: `translateY(${(1 - a) * 26}px)`,
              background: "rgba(241,245,249,0.05)", border: `1px solid ${C.line}`,
              borderLeft: `6px solid ${k.tone}`, borderRadius: 18, padding: "26px 22px",
            }}>
              <div style={{ fontFamily: FONT_MONO, fontSize: 19, letterSpacing: "0.08em", textTransform: "uppercase", color: C.inkFaint }}>{k.label}</div>
              <div style={{ fontFamily: FONT_MONO, fontWeight: 700, fontSize: 46, color: C.ink, marginTop: 10, whiteSpace: "nowrap" }}>
                {fmt(k.value * cnt, k.dec)}{k.unit}
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ background: "rgba(241,245,249,0.05)", border: `1px solid ${C.line}`, borderRadius: 18, padding: "22px 26px" }}>
        <div style={{ fontFamily: FONT_MONO, fontSize: 19, letterSpacing: "0.08em", textTransform: "uppercase", color: C.inkFaint, marginBottom: 12 }}>
          Trend
        </div>
        <svg viewBox="0 0 930 170" style={{ width: "100%", height: "auto" }}>
          {[35, 75, 115].map((y) => <line key={y} x1={30} y1={y} x2={900} y2={y} stroke={C.lineSoft} strokeWidth={1} />)}
          <path d={path} fill="none" stroke={C.accent} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round"
            strokeDasharray={2000} strokeDashoffset={2000 * (1 - draw)} />
          {draw > 0.02 && <circle cx={pts[headIdx][0]} cy={pts[headIdx][1]} r={8} fill={C.accent} />}
        </svg>
      </div>
    </ContentBox>
  );
};

/* --------------------------- 6 · FALLBEISPIELE -------------------------- */
const CASES = [
  { n: "01", title: "Controlling-Cockpit", desc: "Alle Kennzahlen auf einer Oberfläche" },
  { n: "02", title: "Kostenabweichung", desc: "Plan-Ist-Vergleich, Kostenstellen-Ranking" },
  { n: "03", title: "Frühwarnsystem", desc: "Forecast und frühe Risiko-Signale" },
];
export const Faelle: React.FC<SP> = ({ dur }) => {
  const f = useCurrentFrame();
  const head = ease(f, 6, 28);
  /* Drei große Karten poppen nacheinander – getaktet auf die Nennung im Satz. */
  const pops = [0.4, 0.62, 0.82].map((frac) => Math.round(frac * dur));
  return (
    <ContentBox justify="flex-start">
      <h2 style={{ margin: "0 0 26px", opacity: head, transform: `translateY(${(1 - head) * 22}px)`, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 72, letterSpacing: "-0.03em", color: C.ink }}>
        Drei <span style={{ color: C.accent }}>Fallbeispiele</span>
      </h2>
      <div style={{ display: "grid", gap: 18 }}>
        {CASES.map((c, i) => {
          const a = ease(f, pops[i], pops[i] + 16);
          return (
            <div key={c.n} style={{
              opacity: a, transform: `translateX(${(1 - a) * 40}px) scale(${0.96 + a * 0.04})`,
              background: "rgba(241,245,249,0.05)", border: `1px solid ${C.line}`,
              borderLeft: `6px solid ${C.accent}`, borderRadius: 20, padding: "28px 30px",
              display: "flex", alignItems: "center", gap: 26,
            }}>
              <span style={{ fontFamily: FONT_MONO, fontWeight: 700, fontSize: 52, color: C.accent, flex: "none" }}>{c.n}</span>
              <div>
                <div style={{ fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: C.ink, lineHeight: 1.1 }}>{c.title}</div>
                <div style={{ fontFamily: FONT_DISPLAY, fontSize: 26, color: C.inkSoft, marginTop: 6 }}>{c.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </ContentBox>
  );
};

/* -------------------------- 7 · VERTRAUEN + CTA ------------------------- */
export const CTA: React.FC<SP> = ({ dur }) => {
  const f = useCurrentFrame();
  const card = ease(f, 8, 34);
  const tags = [
    { k: "Quelle", v: "Finance DB · ERP", tone: C.inkSoft },
    { k: "Datenqualität", v: "hoch · 96 %", tone: C.good },
    { k: "Risiko", v: "mittel", tone: C.warn },
  ];
  /* zweiter Satz (Domain) etwa ab Mitte der Szene */
  const domainStart = Math.round(dur * 0.5);
  const dom = ease(f, domainStart, domainStart + 24);
  const names = ease(f, domainStart + 20, domainStart + 46);
  const domPulse = 0.9 + 0.1 * Math.abs(Math.sin((f - domainStart) / 36));
  return (
    <ContentBox justify="center">
      {/* Empfehlungs-Karte */}
      <div style={{ opacity: card, transform: `translateY(${(1 - card) * 24}px)`, background: "rgba(241,245,249,0.05)", border: `1px solid ${C.line}`, borderRadius: 22, padding: "26px 30px", marginBottom: 26 }}>
        <div style={{ fontFamily: FONT_MONO, fontSize: 19, letterSpacing: "0.12em", textTransform: "uppercase", color: C.accent, marginBottom: 12 }}>Empfehlung der KI</div>
        <div style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 34, color: C.ink, lineHeight: 1.25, marginBottom: 22 }}>
          Kostenstellen 410 &amp; 620 prüfen, variable Ausgaben einfrieren.
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {tags.map((t, i) => {
            const a = ease(f, 26 + i * 8, 48 + i * 8);
            return (
              <span key={t.k} style={{ opacity: a, fontFamily: FONT_MONO, fontSize: 22, borderRadius: 999, padding: "10px 18px", border: `1px solid ${C.line}`, background: "rgba(241,245,249,0.04)" }}>
                <span style={{ color: C.inkFaint }}>{t.k}: </span>
                <span style={{ color: t.tone, fontWeight: 700 }}>{t.v}</span>
              </span>
            );
          })}
        </div>
      </div>

      {/* Domain groß */}
      <div style={{ opacity: dom, transform: `translateY(${(1 - dom) * 20}px)`, display: "flex", alignItems: "center", gap: 18, marginBottom: 26 }}>
        <span style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 34, color: C.inkSoft }}>Mehr dazu:</span>
        <span style={{ fontFamily: FONT_MONO, fontWeight: 700, fontSize: 42, color: C.bg, background: C.accent, borderRadius: 16, padding: "16px 26px", boxShadow: `0 0 ${domPulse * 28}px rgba(52,211,153,0.4)` }}>
          kara-cockpit.de
        </span>
      </div>

      {/* Logo + Namen */}
      <div style={{ opacity: names, transform: `translateY(${(1 - names) * 18}px)`, display: "flex", alignItems: "center", gap: 20 }}>
        <div style={{ background: C.white, borderRadius: 14, padding: "10px 16px", boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}>
          <Img src={staticFile("hspf-logo.png")} style={{ height: 34, width: "auto", display: "block" }} />
        </div>
        <span style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, color: C.ink }}>
          Abdulhamid Karatas &amp; Kadir Atar
        </span>
      </div>
    </ContentBox>
  );
};
