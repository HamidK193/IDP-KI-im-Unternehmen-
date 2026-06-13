import { loadFont as loadDisplay } from "@remotion/google-fonts/SchibstedGrotesk";
import { loadFont as loadMono } from "@remotion/google-fonts/IBMPlexMono";

const display = loadDisplay();
const mono = loadMono();

export const FONT_DISPLAY = display.fontFamily;
export const FONT_MONO = mono.fontFamily;

/* Akademische Slate/Rosé-Welt – wie im Auftrag vorgegeben. */
export const C = {
  bg: "#0F172A",       // slate-900
  bgDeep: "#0B1120",
  surface: "#F1F5F9",  // slate-100
  white: "#FFFFFF",
  ink: "#F1F5F9",      // Text auf dunkel
  inkSoft: "#94A3B8",  // slate-400
  inkFaint: "#64748B", // slate-500
  muted: "#475569",    // slate-600
  line: "rgba(148,163,184,0.20)",
  lineSoft: "rgba(148,163,184,0.10)",
  accent: "#E11D48",   // rosé / rose-600
  accentSoft: "rgba(225,29,72,0.16)",
  good: "#10B981",
  goodSoft: "rgba(16,185,129,0.16)",
  warn: "#F59E0B",
  warnSoft: "rgba(245,158,11,0.16)",
};

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
