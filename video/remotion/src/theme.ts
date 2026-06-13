import { loadFont as loadBricolage } from "@remotion/google-fonts/BricolageGrotesque";
import { loadFont as loadMono } from "@remotion/google-fonts/JetBrainsMono";

const bricolage = loadBricolage();
const mono = loadMono();

export const FONT_DISPLAY = bricolage.fontFamily;
export const FONT_MONO = mono.fontFamily;

/* Slate & Emerald – dunkle Spalte (Video läuft auf dunklem Slate-Grund). */
export const C = {
  bg: "#0F172A",
  bgElev: "#1E293B",
  ink: "#E2E8F0",
  inkSoft: "#94A3B8",
  inkFaint: "#64748B",
  line: "rgba(226,232,240,0.16)",
  lineSoft: "rgba(226,232,240,0.08)",
  accent: "#34D399",
  accentInk: "#052E23",
  good: "#4ADE80",
  goodSoft: "rgba(74,222,128,0.16)",
  warn: "#FBBF24",
  warnSoft: "rgba(251,191,36,0.16)",
  bad: "#F87171",
  badSoft: "rgba(248,113,113,0.14)",
  neutral: "#94A3B8",
  neutralSoft: "rgba(148,163,184,0.13)",
};

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
