import React from "react";
import { AbsoluteFill, Img, staticFile, useCurrentFrame } from "remotion";
import { GridBg, Glow, usePopIn, useReveal } from "../components";
import { C, FONT_DISPLAY, FONT_MONO } from "../theme";

export const Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const brand = useReveal(14);
  const title = useReveal(40, 48);
  const facts = useReveal(80);
  const url = usePopIn(120, 40);
  const qr = usePopIn(100, 48);
  const urlPulse = 0.85 + 0.15 * Math.abs(Math.sin((frame - 120) / 50));

  return (
    <AbsoluteFill style={{ background: C.bg }}>
      <GridBg />
      <Glow x={-250} y={480} size={1000} />

      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <div
          style={{
            display: "grid", gridTemplateColumns: "1fr auto", gap: 110,
            alignItems: "center", maxWidth: 1560, padding: "0 80px",
          }}
        >
          <div>
            <div style={{ ...brand, display: "flex", alignItems: "center", gap: 22 }}>
              <svg width={64} height={64} viewBox="0 0 32 32">
                <rect x="2" y="18" width="6" height="12" rx="1.5" fill={C.ink} />
                <rect x="13" y="10" width="6" height="20" rx="1.5" fill={C.ink} />
                <rect x="24" y="2" width="6" height="28" rx="1.5" fill={C.accent} />
              </svg>
              <b style={{ fontFamily: FONT_DISPLAY, fontSize: 56, fontWeight: 800, letterSpacing: "-0.02em", color: C.ink }}>
                Kara<span style={{ color: C.accent, fontWeight: 600 }}>·Cockpit</span>
              </b>
            </div>

            <h1
              style={{
                ...title,
                fontFamily: FONT_DISPLAY, fontSize: 88, fontWeight: 800,
                lineHeight: 1.1, letterSpacing: "-0.02em", color: C.ink,
                margin: "36px 0 30px",
              }}
            >
              Jetzt <span style={{ color: C.accent }}>live</span> ausprobieren.
            </h1>

            <p style={{ ...facts, fontFamily: FONT_MONO, fontSize: 28, lineHeight: 2, color: C.inkSoft, margin: 0 }}>
              <b style={{ color: C.ink }}>Hochschule Pforzheim</b> · Interdisziplinäres Projekt (IDP)
              <br />
              Abdulhamid Karatas &amp; Kadir Atar
              <br />
              Website, Demo &amp; Video: <b style={{ color: C.ink }}>mit KI (Claude) gebaut</b>
            </p>

            <span
              style={{
                display: "inline-block", marginTop: 34,
                fontFamily: FONT_MONO, fontSize: 34, fontWeight: 700,
                color: C.accentInk, background: C.accent, borderRadius: 999,
                padding: "20px 44px",
                opacity: url.opacity * urlPulse,
                transform: url.transform,
              }}
            >
              kara-cockpit.de
            </span>
          </div>

          <div
            style={{
              background: "#ffffff", borderRadius: 28, padding: 34,
              boxShadow: "0 24px 70px rgba(0,0,0,0.5)", textAlign: "center",
              opacity: qr.opacity, transform: qr.transform,
            }}
          >
            <Img src={staticFile("qr.png")} style={{ width: 380, height: 380, display: "block" }} />
            <span
              style={{
                display: "block", marginTop: 18, fontFamily: FONT_MONO,
                fontSize: 24, color: "#1c2320", fontWeight: 700,
              }}
            >
              Scannen &amp; ausprobieren
            </span>
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
