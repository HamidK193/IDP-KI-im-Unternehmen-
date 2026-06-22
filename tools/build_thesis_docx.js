// Renderer: baut die Thesis-.docx aus den Markdown-Kapiteln in docs/thesis/.
// Klein gehalten (Inhalt liegt extern in *.md). Lauf:
//   NODE_PATH=<outputs>/node_modules node tools/build_thesis_docx.js [zielpfad]
const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, AlignmentType, HeadingLevel,
  Footer, PageNumber, NumberFormat, TableOfContents, PageBreak,
  Table, TableRow, TableCell, WidthType, BorderStyle,
} = require("docx");

const BASE = "/sessions/charming-funny-dijkstra/mnt/IDP";
const DIR = BASE + "/docs/thesis";
const OUT = process.argv[2] || BASE + "/outputs/IDP_Thesis_KI_kleine_Unternehmen.docx";
const FONT = "Times New Roman", LINE = 360;

const body = (t) => new Paragraph({ alignment: AlignmentType.JUSTIFIED, spacing: { line: LINE, after: 160 }, children: [new TextRun(t)] });
const quote = (t) => new Paragraph({ alignment: AlignmentType.JUSTIFIED, spacing: { line: LINE, before: 80, after: 160 }, indent: { left: 567, right: 567 }, children: [new TextRun({ text: t, italics: true })] });
const h1 = (t) => new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun(t)] });
const h2 = (t) => new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun(t)] });
const h3 = (t) => new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun(t)] });
const refP = (t) => new Paragraph({ spacing: { line: LINE, after: 80 }, indent: { left: 567, hanging: 567 }, children: [new TextRun(t)] });
const center = (t, o = {}) => new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: o.after ?? 120 }, children: [new TextRun({ text: t, bold: o.bold, size: o.size, italics: o.italics })] });

// --- Markdown-Kapitel parsen ---
function parseMd(text) {
  const out = []; let buf = [];
  const flush = () => { if (buf.length) { out.push(body(buf.join(" "))); buf = []; } };
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.replace(/\s+$/, "");
    if (/^###\s+/.test(line)) { flush(); out.push(h3(line.replace(/^###\s+/, ""))); }
    else if (/^##\s+/.test(line)) { flush(); out.push(h2(line.replace(/^##\s+/, ""))); }
    else if (/^#\s+/.test(line)) { flush(); out.push(h1(line.replace(/^#\s+/, ""))); }
    else if (/^>\s+/.test(line)) { flush(); out.push(quote(line.replace(/^>\s+/, ""))); }
    else if (line.trim() === "") { flush(); }
    else { buf.push(line.trim()); }
  }
  flush(); return out;
}
const chapterFiles = fs.readdirSync(DIR).filter((f) => /^\d\d-.*\.md$/.test(f) && !f.startsWith("00")).sort();
const chapters = []; for (const f of chapterFiles) chapters.push(...parseMd(fs.readFileSync(DIR + "/" + f, "utf8")));

// --- Deckblatt ---
const titlePage = [
  center("Hochschule Pforzheim", { bold: true, size: 28, after: 80 }),
  center("Interdisziplinäres Projekt (IDP)", { size: 24, after: 1200 }),
  center("Künstliche Intelligenz für kleine Unternehmen", { bold: true, size: 40, after: 120 }),
  center("Potenziale, Herausforderungen und Umsetzung am Beispiel eines KI-Controlling-Cockpits", { size: 28, after: 1600 }),
  center("Wissenschaftliche Dokumentation", { italics: true, size: 26, after: 1600 }),
  center("Vorgelegt von: Abdul Karatas", { size: 24, after: 80 }),
  center("Betreuung: [Name der Betreuung]", { size: 24, after: 80 }),
  center("Abgabedatum: Juni 2026", { size: 24, after: 80 }),
];

// --- Abkürzungsverzeichnis ---
const abbrev = [["CRM", "Customer-Relationship-Management"], ["DSGVO", "Datenschutz-Grundverordnung"], ["ERP", "Enterprise-Resource-Planning"], ["EU", "Europäische Union"], ["KI", "Künstliche Intelligenz"], ["KMU", "Kleine und mittlere Unternehmen"], ["KPI", "Key Performance Indicator (Kennzahl)"], ["LLM", "Large Language Model (großes Sprachmodell)"], ["MCP", "Model Context Protocol"], ["MVP", "Minimum Viable Product"]];
const bd = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const cell = (t, w, b) => new TableCell({ width: { size: w, type: WidthType.DXA }, margins: { top: 60, bottom: 60, left: 120, right: 120 }, borders: { top: bd, bottom: bd, left: bd, right: bd }, children: [new Paragraph({ spacing: { after: 0 }, children: [new TextRun({ text: t, bold: b })] })] });
const abbrevTable = new Table({ width: { size: 9026, type: WidthType.DXA }, columnWidths: [1800, 7226], rows: abbrev.map(([a, b]) => new TableRow({ children: [cell(a, 1800, true), cell(b, 7226, false)] })) });

const abstractDE = "Kleine Unternehmen verfügen über zahlreiche verteilte Datenquellen, gewinnen daraus jedoch selten einen schnellen Überblick über ihre wirtschaftliche Lage. Diese Arbeit untersucht, wie Künstliche Intelligenz kleine Unternehmen bei der datenbasierten Steuerung unterstützen kann. Auf Basis von Fachliteratur, Studien und rechtlichen Primärquellen werden Grundlagen, Potenziale, Herausforderungen sowie rechtliche und ethische Aspekte aufgearbeitet. Im praktischen Teil wird am fiktiven Kleinunternehmen Kara ein Demonstrator entwickelt, der anhand dreier Fallbeispiele zeigt, wie KI Kennzahlen berechnet, Trends erkennt und begründete Handlungsempfehlungen vorbereitet. Ein Schwerpunkt liegt darauf, wie die KI selbst die Verbindung zu den Datenquellen herstellt. Die Arbeit zeigt, dass ein kontrollierter, menschlich überwachter KI-Einsatz auch mit begrenzten Ressourcen realistisch ist.";

// --- Literaturverzeichnis ---
const references = [
  "Anthropic (2024): Introducing the Model Context Protocol. Verfügbar unter: https://www.anthropic.com/news/model-context-protocol (Zugriff: 12.06.2026).",
  "Bitkom e. V. (2025): Künstliche Intelligenz in Deutschland. Studienbericht. Berlin: Bitkom.",
  "Brown, T. B. et al. (2020): Language Models Are Few-Shot Learners. In: Advances in Neural Information Processing Systems 33 (NeurIPS 2020).",
  "Europäische Kommission, Hochrangige Expertengruppe für KI (2019): Ethik-Leitlinien für eine vertrauenswürdige KI. Brüssel: Europäische Kommission.",
  "Europäische Union (2016): Verordnung (EU) 2016/679 (Datenschutz-Grundverordnung). Amtsblatt der Europäischen Union, L 119.",
  "Europäische Union (2024): Verordnung (EU) 2024/1689 (KI-Verordnung). Amtsblatt der Europäischen Union, L 1689.",
  "Goodfellow, I., Bengio, Y. & Courville, A. (2016): Deep Learning. Cambridge, MA: MIT Press.",
  "Institut der deutschen Wirtschaft (IW) (2025): KI als Wettbewerbsfaktor. IW-Report. Köln: IW Medien.",
  "Model Context Protocol (2026): Documentation – What is the Model Context Protocol (MCP)? Verfügbar unter: https://modelcontextprotocol.io/docs/getting-started/intro (Zugriff: 12.06.2026).",
  "Russell, S. J. & Norvig, P. (2021): Artificial Intelligence: A Modern Approach. 4. Aufl. Harlow: Pearson.",
  "Vaswani, A. et al. (2017): Attention Is All You Need. In: Advances in Neural Information Processing Systems 30 (NeurIPS 2017).",
  "Weber, J. & Schäffer, U. (2022): Einführung in das Controlling. 17. Aufl. Stuttgart: Schäffer-Poeschel.",
];

const A4 = { width: 11906, height: 16838 };
const margin = { top: 1417, right: 1134, bottom: 1134, left: 1701 };
const styles = { default: { document: { run: { font: FONT, size: 24 } } }, paragraphStyles: [
  { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 32, bold: true, font: FONT }, paragraph: { spacing: { before: 300, after: 160 }, outlineLevel: 0, keepNext: true } },
  { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 26, bold: true, font: FONT }, paragraph: { spacing: { before: 200, after: 120 }, outlineLevel: 1, keepNext: true } },
  { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 24, bold: true, font: FONT }, paragraph: { spacing: { before: 160, after: 100 }, outlineLevel: 2, keepNext: true } },
] };
const footer = new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ children: [PageNumber.CURRENT] })] })] });

const doc = new Document({ styles, features: { updateFields: true }, sections: [
  { properties: { page: { size: A4, margin } }, children: titlePage },
  { properties: { page: { size: A4, margin, pageNumbers: { start: 1, formatType: NumberFormat.LOWER_ROMAN } } }, footers: { default: footer }, children: [
    h1("Abstract"), body(abstractDE),
    h1("Inhaltsverzeichnis"), new TableOfContents("Inhaltsverzeichnis", { hyperlink: true, headingStyleRange: "1-3" }),
    new Paragraph({ children: [new PageBreak()] }),
    h1("Abkürzungsverzeichnis"), abbrevTable,
    new Paragraph({ children: [new TextRun("")] }),
    h1("Abbildungs- und Tabellenverzeichnis"),
    body("Abbildungen und Tabellen werden mit dem Ausbau der Kapitel ergänzt und hier automatisch verzeichnet."),
  ] },
  { properties: { page: { size: A4, margin, pageNumbers: { start: 1, formatType: NumberFormat.DECIMAL } } }, footers: { default: footer }, children: [
    ...chapters,
    h1("Literaturverzeichnis"), ...references.map(refP),
  ] },
] });

Packer.toBuffer(doc).then((buf) => { fs.writeFileSync(OUT, buf); console.log("OK ->", OUT, buf.length, "bytes;", chapters.length, "Kapitelblöcke aus", chapterFiles.join(", ")); });
