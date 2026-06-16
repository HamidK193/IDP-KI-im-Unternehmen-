const pptxgen = require("pptxgenjs");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const sharp = require("sharp");
const { FaIndustry, FaTruck } = require("react-icons/fa");

async function iconPng(IconComponent, color, size = 256) {
  const svg = ReactDOMServer.renderToStaticMarkup(
    React.createElement(IconComponent, { color, size: String(size) })
  );
  const buf = await sharp(Buffer.from(svg)).png().toBuffer();
  return "image/png;base64," + buf.toString("base64");
}

(async () => {
  // --- Palette (schlicht, seriös) ---
  const NAVY = "1E2761";
  const NAVY_DK = "171D49";
  const GREEN = "2EA86A";
  const GREY = "454B5C";      // body
  const GREYL = "6B7180";     // muted
  const CARD = "F4F6FB";
  const LINE = "D9E0EF";
  const WHITE = "FFFFFF";

  const pres = new pptxgen();
  pres.layout = "LAYOUT_WIDE"; // 13.33 x 7.5
  pres.author = "Wirtschaftsingenieurwesen";
  pres.title = "Make-or-Buy-Entscheidung im Produktionscontrolling";

  const PW = 13.33;
  const slide = pres.addSlide();
  slide.background = { color: WHITE };

  const mkShadow = () => ({ type: "outer", color: "000000", blur: 5, offset: 2, angle: 135, opacity: 0.10 });

  // ============ TITLE BAND ============
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: PW, h: 0.85, fill: { color: NAVY } });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.14, h: 0.85, fill: { color: GREEN } });
  slide.addText("Make-or-Buy-Entscheidung im Produktionscontrolling", {
    x: 0.45, y: 0, w: 9.6, h: 0.85, fontSize: 23, bold: true, color: WHITE,
    fontFace: "Georgia", align: "left", valign: "middle", margin: 0
  });
  slide.addText("Produktionscontrolling · Abschlussgespräch", {
    x: 10.1, y: 0, w: 3.0, h: 0.85, fontSize: 10.5, italic: true, color: "B9C5E6",
    align: "right", valign: "middle", margin: 0
  });

  // ============ ROW A: EINFÜHRUNG + ZIEL/NUTZEN ============
  const aY = 1.02, aH = 0.78;
  // Einführung
  slide.addText("EINFÜHRUNG", {
    x: 0.45, y: aY, w: 6.0, h: 0.22, fontSize: 9.5, bold: true, color: GREEN,
    charSpacing: 1.5, align: "left", valign: "top", margin: 0
  });
  slide.addText([
    { text: "Eigenfertigung oder Fremdbezug? ", options: { bold: true, color: NAVY } },
    { text: "Soll ein Teil, eine Baugruppe oder eine Dienstleistung selbst hergestellt oder extern beschafft werden?", options: { color: GREY } },
  ], { x: 0.45, y: aY + 0.24, w: 6.05, h: 0.54, fontSize: 11, fontFace: "Calibri",
       align: "left", valign: "top", margin: 0 });
  // divider
  slide.addShape(pres.shapes.LINE, { x: 6.72, y: aY + 0.02, w: 0, h: 0.72, line: { color: LINE, width: 1 } });
  // Ziel & Nutzen
  slide.addText("ZIEL & NUTZEN", {
    x: 6.95, y: aY, w: 6.0, h: 0.22, fontSize: 9.5, bold: true, color: GREEN,
    charSpacing: 1.5, align: "left", valign: "top", margin: 0
  });
  slide.addText("Kosten senken, knappe Kapazitäten optimal nutzen und Kernkompetenzen sichern — eine fundierte Controlling-Entscheidung statt Bauchgefühl.", {
    x: 6.95, y: aY + 0.24, w: 5.95, h: 0.54, fontSize: 11, color: GREY, fontFace: "Calibri",
    align: "left", valign: "top", margin: 0
  });

  // ============ ROW B: WIE WIRD ENTSCHIEDEN (3 Fälle) ============
  const sh1Y = 1.98;
  slide.addText([
    { text: "WIE WIRD ENTSCHIEDEN?", options: { bold: true, color: NAVY } },
    { text: "   quantitative Entscheidungsregeln", options: { color: GREYL, italic: true } },
  ], { x: 0.45, y: sh1Y, w: 12.4, h: 0.3, fontSize: 13, fontFace: "Georgia", align: "left", valign: "middle", margin: 0 });

  const cards = [
    { n: "1", title: "Kurzfristig · kein Engpass",
      desc: "Fixkosten fallen ohnehin an → nicht entscheidungsrelevant. Reiner Vergleich der variablen Stückkosten.",
      formula: "kᵥ < p_FB  →  Make" },
    { n: "2", title: "Kurzfristig · mit Engpass",
      desc: "Kapazität begrenzt → zusätzlich Opportunitätskosten (OK = entgangener Deckungsbeitrag der verdrängten Alternative).",
      formula: "kᵥ + OK < p_FB  →  Make" },
    { n: "3", title: "Langfristig",
      desc: "Fixkosten & Anlagen veränderbar → Vollkosten plus Investitionsrechnung (Kapitalwert-Vergleich).",
      formula: "KW(Make) ≷ KW(Buy)" },
  ];
  const cTop = 2.36, cH = 1.66, cW = 3.94, cGap = 0.255, cX0 = 0.45;
  cards.forEach((c, i) => {
    const x = cX0 + i * (cW + cGap);
    slide.addShape(pres.shapes.RECTANGLE, { x, y: cTop, w: cW, h: cH, fill: { color: CARD }, line: { color: LINE, width: 1 }, shadow: mkShadow() });
    slide.addShape(pres.shapes.RECTANGLE, { x, y: cTop, w: cW, h: 0.07, fill: { color: GREEN } });
    // badge
    slide.addShape(pres.shapes.OVAL, { x: x + 0.22, y: cTop + 0.22, w: 0.42, h: 0.42, fill: { color: NAVY } });
    slide.addText(c.n, { x: x + 0.22, y: cTop + 0.22, w: 0.42, h: 0.42, fontSize: 16, bold: true, color: WHITE, fontFace: "Georgia", align: "center", valign: "middle", margin: 0 });
    // title
    slide.addText(c.title, { x: x + 0.78, y: cTop + 0.2, w: cW - 0.95, h: 0.46, fontSize: 12.5, bold: true, color: NAVY, fontFace: "Georgia", align: "left", valign: "middle", margin: 0 });
    // desc
    slide.addText(c.desc, { x: x + 0.24, y: cTop + 0.74, w: cW - 0.46, h: 0.5, fontSize: 9.5, color: GREY, fontFace: "Calibri", align: "left", valign: "top", margin: 0 });
    // formula chip
    const fY = cTop + cH - 0.5;
    slide.addShape(pres.shapes.RECTANGLE, { x: x + 0.24, y: fY, w: cW - 0.48, h: 0.38, fill: { color: NAVY } });
    slide.addText(c.formula, { x: x + 0.24, y: fY, w: cW - 0.48, h: 0.38, fontSize: 12, bold: true, color: WHITE, fontFace: "Consolas", align: "center", valign: "middle", margin: 0 });
  });

  // ============ VORGEHEN strip ============
  const vY = 4.18;
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.45, y: vY, w: 12.43, h: 0.38, fill: { color: "EDF1FA" }, rectRadius: 0.06 });
  slide.addText([
    { text: "VORGEHEN   ", options: { bold: true, color: GREEN, charSpacing: 1 } },
    { text: "Bedarf  →  Kostenanalyse  →  Nutzwertanalyse  →  Strategie-Check  →  Entscheidung  →  Monitoring", options: { color: NAVY, bold: true } },
  ], { x: 0.7, y: vY, w: 12.0, h: 0.38, fontSize: 10.5, fontFace: "Calibri", align: "left", valign: "middle", margin: 0 });

  // ============ ROW C: NACH WELCHEN KRITERIEN (Make vs Buy) ============
  const sh2Y = 4.74;
  slide.addText([
    { text: "NACH WELCHEN KRITERIEN?", options: { bold: true, color: NAVY } },
    { text: "   qualitative Bewertung (Nutzwertanalyse)", options: { color: GREYL, italic: true } },
  ], { x: 0.45, y: sh2Y, w: 12.4, h: 0.3, fontSize: 13, fontFace: "Georgia", align: "left", valign: "middle", margin: 0 });

  const krTop = 5.12, krH = 1.28, krW = 6.1;
  const iconMake = await iconPng(FaIndustry, "#FFFFFF", 256);
  const iconBuy = await iconPng(FaTruck, "#FFFFFF", 256);

  const krBoxes = [
    { x: 0.45, head: "PRO EIGENFERTIGUNG (MAKE)", accent: GREEN, icon: iconMake,
      items: ["Qualität & Fertigungs-Know-how sichern", "Patente / Geheimhaltung schützen", "Versorgungssicherheit, keine Abhängigkeit", "strategische Kernkompetenz"] },
    { x: 6.78, head: "PRO FREMDBEZUG (BUY)", accent: NAVY, icon: iconBuy,
      items: ["Kostenvorteile durch Skaleneffekte", "kürzere Lieferzeiten & Spezialwissen", "Flexibilität ohne Kapitalbindung", "Risikotransfer, Fokus aufs Kerngeschäft"] },
  ];
  krBoxes.forEach((b) => {
    slide.addShape(pres.shapes.RECTANGLE, { x: b.x, y: krTop, w: krW, h: krH, fill: { color: CARD }, line: { color: LINE, width: 1 } });
    // header bar
    slide.addShape(pres.shapes.RECTANGLE, { x: b.x, y: krTop, w: krW, h: 0.34, fill: { color: b.accent } });
    slide.addImage({ data: b.icon, x: b.x + 0.14, y: krTop + 0.07, w: 0.2, h: 0.2 });
    slide.addText(b.head, { x: b.x + 0.42, y: krTop, w: krW - 0.5, h: 0.34, fontSize: 10.5, bold: true, color: WHITE, fontFace: "Calibri", charSpacing: 0.5, align: "left", valign: "middle", margin: 0 });
    // items in two sub-columns of 2
    const col1 = b.items.slice(0, 2), col2 = b.items.slice(2, 4);
    const subW = (krW - 0.4) / 2;
    [col1, col2].forEach((col, ci) => {
      slide.addText(
        col.map((t) => ({ text: t, options: { bullet: { indent: 10 }, breakLine: true, paraSpaceAfter: 7 } })),
        { x: b.x + 0.2 + ci * subW, y: krTop + 0.44, w: subW - 0.05, h: 0.78, fontSize: 9.5, color: GREY, fontFace: "Calibri", align: "left", valign: "top", margin: 0 }
      );
    });
  });

  // ============ FAZIT BAND ============
  const fY = 6.62;
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: fY, w: PW, h: 0.88, fill: { color: NAVY_DK } });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: fY, w: 0.14, h: 0.88, fill: { color: GREEN } });
  slide.addText([
    { text: "FAZIT   ", options: { bold: true, color: GREEN, fontSize: 13, charSpacing: 1 } },
    { text: "Quantitative Regeln liefern die Preis-Untergrenze, qualitative Kriterien entscheiden langfristig — Make-or-Buy verbindet Kostenrechnung, Kapazitätssteuerung und Strategie.",
      options: { color: WHITE, fontSize: 12.5, bold: true } },
  ], { x: 0.45, y: fY, w: PW - 0.9, h: 0.88, align: "left", valign: "middle", fontFace: "Calibri", margin: 0 });

  // ============ SPEAKER NOTES (~2 Min) ============
  slide.addNotes(
`Ich präsentiere die Make-or-Buy-Entscheidung im Produktionscontrolling. Dabei geht es um die Frage, ob ein Unternehmen ein Teil, eine Baugruppe oder eine Dienstleistung selbst herstellt oder von einem Lieferanten bezieht. Ziel ist es, Kosten zu senken, knappe Kapazitäten optimal zu nutzen und Kernkompetenzen zu sichern – also eine fundierte Entscheidung statt Bauchgefühl.

Quantitativ unterscheidet man drei Fälle. Kurzfristig ohne Engpass sind Fixkosten nicht entscheidungsrelevant, weil sie ohnehin anfallen; man vergleicht nur die variablen Stückkosten mit dem Fremdbezugspreis. Ist die Eigenfertigung variabel günstiger, spricht das für Make. Bei einem Engpass reicht das nicht: Dann kommen Opportunitätskosten hinzu, also der entgangene Deckungsbeitrag der verdrängten Alternative. Eigenfertigung lohnt nur, wenn variable Kosten plus Opportunitätskosten unter dem Fremdbezugspreis liegen. Langfristig sind Fixkosten und Anlagen veränderbar; deshalb rechnet man mit Vollkosten und einer Investitionsrechnung, typischerweise über einen Kapitalwertvergleich.

Eine reine Kostenrechnung genügt aber nicht. Über die Nutzwertanalyse fließen qualitative Kriterien ein: Für die Eigenfertigung sprechen Qualität und Know-how, der Schutz von Patenten, Versorgungssicherheit und die strategische Kernkompetenz. Für den Fremdbezug sprechen Kostenvorteile durch Skaleneffekte, kürzere Lieferzeiten, Spezialwissen des Lieferanten, Flexibilität ohne Kapitalbindung sowie Risikotransfer und Fokus aufs Kerngeschäft.

Das typische Vorgehen läuft von der Bedarfsanalyse über die Kostenanalyse und die Nutzwertanalyse zum Strategie-Check, zur Entscheidung und schließlich zum laufenden Monitoring.

Zusammenfassend: Die quantitativen Regeln liefern die Preis-Untergrenze, die qualitativen Kriterien entscheiden langfristig. Make-or-Buy ist damit eine typische Controlling-Entscheidung, weil sie Kostenrechnung, Kapazitätssteuerung und strategische Bewertung verbindet.`
  );

  await pres.writeFile({ fileName: "Make-or-Buy-Produktionscontrolling.pptx" });
  console.log("written");
})();
