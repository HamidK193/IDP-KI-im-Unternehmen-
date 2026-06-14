import React from "react";
import { AbsoluteFill, Img, staticFile, useCurrentFrame } from "remotion";
import { GridBg, Glow, usePopIn, useReveal } from "../components";
import { C, FONT_DISPLAY, FONT_MONO } from "../theme";

/* End-Karte: nur der QR-Code (mit Domain), bleibt ruhig zum Scannen stehen.
   Kein KI-Hinweis, keine Namen, kein "live ausprobieren". */
export const Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const brand = useReveal(10);
  const qr = usePopIn(24, 46);
  const url = useReveal(60);

  return (
    <AbsoluteFill style={{ background: C.bg }}>
      <GridBg />
      <Glow x={-250} y={480} size={1000} />

      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 34 }}>
          <div style={{ ...brand, display: "flex", alignItems: "center", gap: 20 }}>
            <svg width={52} height={52} viewBox="0 0 32 32">
              <rect x="2" y="18" width="6" height="12" rx="1.5" fill={C.ink} />
              <rect x="13" y="10" width="6" height="20" rx="1.5" fill={C.ink} />
              <rect x="24" y="2" width="6" height="28" rx="1.5" fill={C.accent} />
            </svg>
            <b style={{ fontFamily: FONT_DISPLAY, fontSize: 48, fontWeight: 800, letterSpacing: "-0.02em", color: C.ink }}>
              Kara<span style={{ color: C.accent, fontWeight: 600 }}>·Cockpit</span>
            </b>
          </div>

          <div
            style={{
              background: "#ffffff", borderRadius: 28, padding: 30,
              boxShadow: "0 24px 70px rgba(0,0,0,0.5)", textAlign: "center",
              opacity: qr.opacity, transform: qr.transform,
            }}
          >
            <Img src={staticFile("qr.png")} style={{ width: 360, height: 360, display: "block" }} />
          </div>

          <div style={{ ...url, textAlign: "center" }}>
            <span
              style={{
                display: "inline-block",
                fontFamily: FONT_MONO, fontSize: 36, fontWeight: 700,
                color: C.accentInk, background: C.accent, borderRadius: 999,
                padding: "16px 40px",
              }}
            >
              kara-cockpit.de
            </span>
            <p style={{ margin: "18px 0 0", fontFamily: FONT_MONO, fontSize: 24, color: C.inkFaint }}>
              QR-Code scannen &amp; ausprobieren
            </p>
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
