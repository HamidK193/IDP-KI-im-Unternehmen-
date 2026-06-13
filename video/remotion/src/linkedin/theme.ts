import { loadFont as loadDisplay } from "@remotion/google-fonts/SchibstedGrotesk";
import { loadFont as loadMono } from "@remotion/google-fonts/IBMPlexMono";

const display = loadDisplay();
const mono = loadMono();

export const FONT_DISPLAY = display.fontFamily;
export const FONT_MONO = mono.fontFamily;

/* Slate & Emerald – dunkle Spalte (Video auf dunklem Slate-Grund). */
export const C = {
  bg: "#0F172A",       // slate-900
  bgDeep: "#0B1220",
  surface: "#F1F5F9",  // slate-100 (helle Chips: Logo, QR)
  white: "#FFFFFF",
  ink: "#E2E8F0",      // Text auf dunkel
  inkSoft: "#94A3B8",  // slate-400
  inkFaint: "#64748B", // slate-500
  muted: "#475569",    // slate-600
  line: "rgba(226,232,240,0.16)",
  lineSoft: "rgba(226,232,240,0.08)",
  accent: "#34D399",   // emerald
  accentInk: "#052E23",
  accentSoft: "rgba(52,211,153,0.16)",
  good: "#4ADE80",
  goodSoft: "rgba(74,222,128,0.16)",
  warn: "#FBBF24",
  warnSoft: "rgba(251,191,36,0.16)",
};

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
