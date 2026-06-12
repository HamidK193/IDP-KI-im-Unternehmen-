import { loadFont as loadBricolage } from "@remotion/google-fonts/BricolageGrotesque";
import { loadFont as loadMono } from "@remotion/google-fonts/JetBrainsMono";

const bricolage = loadBricolage();
const mono = loadMono();

export const FONT_DISPLAY = bricolage.fontFamily;
export const FONT_MONO = mono.fontFamily;

export const C = {
  bg: "#0e1513",
  bgElev: "#15201c",
  ink: "#e9eeea",
  inkSoft: "#b3bfb8",
  inkFaint: "#93a09a",
  line: "rgba(233,238,234,0.18)",
  lineSoft: "rgba(233,238,234,0.08)",
  accent: "#43d49b",
  accentInk: "#06241a",
  good: "#43d49b",
  goodSoft: "rgba(67,212,155,0.13)",
  warn: "#e8b35a",
  warnSoft: "rgba(232,179,90,0.15)",
  bad: "#f08577",
  badSoft: "rgba(240,133,119,0.12)",
  neutral: "#9fb2bd",
  neutralSoft: "rgba(159,178,189,0.12)",
};

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
