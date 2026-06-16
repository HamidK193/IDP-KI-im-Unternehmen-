const pptxgen = require("pptxgenjs");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const sharp = require("sharp");
const { FaBalanceScale, FaCompressArrowsAlt, FaChessKnight } = require("react-icons/fa");

async function iconToBase64Png(IconComponent, color, size = 256) {
  const svg = ReactDOMServer.renderToStaticMarkup(
    React.createElement(IconComponent, { color, size: String(size) })
  );
  const pngBuffer = await sharp(Buffer.from(svg)).png().toBuffer();
  return "image/png;base64," + pngBuffer.toString("base64");
}

(async () => {
  // Palette — Midnight Executive
  const NAVY = "1E2761";
  const NAVY_DK = "151B45";
  const ICE = "CADCFC";
  const WHITE = "FFFFFF";
  const GREEN = "2EA86A";   // accent
  const GREY = "5A6173";
  const CARDBG = "F4F7FD";

  let pres = new pptxgen();
  pres.layout = "LAYOUT_WIDE"; // 13.3 x 7.5
  pres.author = "Wirtschaftsingenieurwesen";
  pres.title = "Make-or-Buy-Entscheidung im Produktionscontrolling";

  const PW = 13.3;
  let slide = pres.addSlide();
  slide.background = { color: WHITE };

  const mkShadow = () => ({ type: "outer", color: "000000", blur: 7, offset: 3, angle: 135, opacity: 0.12 });

  // ---- Title band ----
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: PW, h: 1.25, fill: { color: NAVY } });
  slide.addText("Make-or-Buy-Entscheidung im Produktionscontrolling", {
    x: 0.55, y: 0.12, w: 9.6, h: 0.72, fontSize: 27, bold: true, color: WHITE,
    fontFace: "Georgia", align: "left", valign: "middle", margin: 0
  });
  // Leitfrage pill (right)
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 10.35, y: 0.34, w: 2.55, h: 0.58, fill: { color: GREEN }, rectRadius: 0.29
  });
  slide.addText("Eigenfertigung oder Fremdbezug?", {
    x: 10.35, y: 0.34, w: 2.55, h: 0.58, fontSize: 11.5, italic: true, bold: true,
    color: WHITE, align: "center", valign: "middle", margin: 0
  });
  // Leitfrage label below title
  slide.addText("Leitfrage des Produktionscontrollings", {
    x: 0.57, y: 0.83, w: 9, h: 0.3, fontSize: 12, color: ICE, fontFace: "Calibri",
    align: "left", valign: "middle", margin: 0
  });

  // ---- Three case cards ----
  const icons = [
    await iconToBase64Png(FaBalanceScale, "#FFFFFF", 256),
    await iconToBase64Png(FaCompressArrowsAlt, "#FFFFFF", 256),
    await iconToBase64Png(FaChessKnight, "#FFFFFF", 256),
  ];

  const cardY = 1.7;
  const cardH = 4.55;
  const cardW = 4.0;
  const gap = 0.35;
  const startX = (PW - (cardW * 3 + gap * 2)) / 2;

  const cases = [
    {
      tag: "KURZFRISTIG · OHNE ENGPASS",
      head: "Kostenvergleich",
      bullets: [
        "Fixkosten kurzfristig nicht entscheidungsrelevant",
        "Vergleich: variable Stückkosten kᵥ vs. Fremdbezugspreis p_FB",
      ],
      formulas: ["kᵥ < p_FB  →  Eigenfertigung", "p_FB < kᵥ  →  Fremdbezug"],
    },
    {
      tag: "KURZFRISTIG · MIT ENGPASS",
      head: "+ Opportunitätskosten",
      bullets: [
        "Kapazität ist begrenzt",
        "Opportunitätskosten = entgangener Deckungsbeitrag der verdrängten Alternative",
      ],
      formulas: ["kᵥ + OK < p_FB", "→  nur dann Eigenfertigung"],
    },
    {
      tag: "LANGFRISTIG",
      head: "Strategische Sicht",
      bullets: [
        "Fixkosten & Produktionsapparat veränderbar",
        "Investitionsrechnung · Qualität · Know-how · Lieferfähigkeit · Abhängigkeit · strateg. Bedeutung",
      ],
      formulas: null,
    },
  ];

  cases.forEach((c, i) => {
    const x = startX + i * (cardW + gap);
    // card
    slide.addShape(pres.shapes.RECTANGLE, {
      x, y: cardY, w: cardW, h: cardH, fill: { color: CARDBG },
      line: { color: "DCE4F5", width: 1 }, shadow: mkShadow()
    });
    // top accent strip + number badge
    slide.addShape(pres.shapes.RECTANGLE, { x, y: cardY, w: cardW, h: 0.12, fill: { color: GREEN } });

    // icon circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.3, y: cardY + 0.35, w: 0.72, h: 0.72, fill: { color: NAVY }
    });
    slide.addImage({ data: icons[i], x: x + 0.47, y: cardY + 0.52, w: 0.38, h: 0.38 });
    // number
    slide.addText(String(i + 1), {
      x: x + cardW - 0.85, y: cardY + 0.3, w: 0.6, h: 0.6, fontSize: 40, bold: true,
      color: "DCE4F5", fontFace: "Georgia", align: "right", valign: "top", margin: 0
    });

    // tag
    slide.addText(c.tag, {
      x: x + 0.3, y: cardY + 1.2, w: cardW - 0.6, h: 0.28, fontSize: 9.5, bold: true,
      color: GREEN, charSpacing: 1, align: "left", valign: "middle", margin: 0
    });
    // head
    slide.addText(c.head, {
      x: x + 0.3, y: cardY + 1.46, w: cardW - 0.6, h: 0.42, fontSize: 18, bold: true,
      color: NAVY, fontFace: "Georgia", align: "left", valign: "middle", margin: 0
    });

    // bullets
    slide.addText(
      c.bullets.map((b, j) => ({ text: b, options: { bullet: { indent: 12 }, breakLine: true, paraSpaceAfter: 6 } })),
      { x: x + 0.3, y: cardY + 1.95, w: cardW - 0.55, h: 1.35, fontSize: 10.5, color: GREY,
        fontFace: "Calibri", align: "left", valign: "top", margin: 0 }
    );

    // formula box
    if (c.formulas) {
      const fY = cardY + cardH - 1.08;
      slide.addShape(pres.shapes.RECTANGLE, {
        x: x + 0.3, y: fY, w: cardW - 0.6, h: 0.92, fill: { color: NAVY }
      });
      slide.addText(
        c.formulas.map((f, j) => ({ text: f, options: { breakLine: true, bold: true } })),
        { x: x + 0.3, y: fY, w: cardW - 0.6, h: 0.92, fontSize: 13, color: WHITE,
          fontFace: "Consolas", align: "center", valign: "middle", margin: 4 }
      );
    } else {
      const fY = cardY + cardH - 1.08;
      slide.addShape(pres.shapes.RECTANGLE, {
        x: x + 0.3, y: fY, w: cardW - 0.6, h: 0.92, fill: { color: ICE }
      });
      slide.addText("Keine reine Preisformel –\nmehrdimensionale Bewertung", {
        x: x + 0.3, y: fY, w: cardW - 0.6, h: 0.92, fontSize: 12, italic: true, bold: true,
        color: NAVY, fontFace: "Calibri", align: "center", valign: "middle", margin: 4
      });
    }
  });

  // ---- Fazit bar ----
  const fzY = 6.5;
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: fzY, w: PW, h: 1.0, fill: { color: NAVY_DK } });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: fzY, w: 0.16, h: 1.0, fill: { color: GREEN } });
  slide.addText([
    { text: "FAZIT   ", options: { bold: true, color: GREEN, fontSize: 14, charSpacing: 1 } },
    { text: "Make-or-Buy verbindet Kostenrechnung, Kapazitätssteuerung und strategisches Controlling.",
      options: { color: WHITE, fontSize: 15, bold: true } },
  ], { x: 0.55, y: fzY, w: PW - 1.0, h: 1.0, align: "left", valign: "middle",
       fontFace: "Calibri", margin: 0 });

  // ---- Speaker notes ----
  slide.addNotes(
`Ich habe mich für das Thema Make-or-Buy-Entscheidung im Produktionscontrolling entschieden. Dabei geht es um die Frage, ob ein Unternehmen ein Teil selbst herstellen oder von einem Lieferanten beziehen soll.

Kurzfristig ist zuerst wichtig, ob ein Kapazitätsengpass vorliegt. Wenn kein Engpass besteht, vergleicht man den Fremdbezugspreis mit den variablen Stückkosten der Eigenfertigung. Fixkosten sind kurzfristig nicht entscheidungsrelevant, weil sie ohnehin anfallen. Ist die Eigenfertigung variabel günstiger, spricht das für Make. Ist der Fremdbezugspreis niedriger, spricht das für Buy.

Bei einem Engpass reicht dieser einfache Vergleich nicht aus. Dann müssen Opportunitätskosten berücksichtigt werden. Das sind entgangene Deckungsbeiträge, weil Kapazität für ein Produkt genutzt wird und dadurch ein anderes Produkt verdrängt werden kann.

Langfristig wird die Entscheidung strategischer. Dann können sich auch Fixkosten, Investitionen und Produktionsstrukturen verändern. Deshalb betrachtet das Controlling zusätzlich Investitionsrechnung, Qualität, Know-how, Lieferfähigkeit und mögliche Abhängigkeiten von Lieferanten.

Zusammenfassend ist Make-or-Buy eine typische Controlling-Entscheidung, weil sie Kostenrechnung, Kapazitätssteuerung und strategische Bewertung miteinander verbindet.`
  );

  await pres.writeFile({ fileName: "Make-or-Buy-Produktionscontrolling.pptx" });
  console.log("written");
})();
