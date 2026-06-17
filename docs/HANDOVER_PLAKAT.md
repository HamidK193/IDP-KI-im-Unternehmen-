# Handover – TechDay-A0-Plakat (Kara·Cockpit) für neuen Chat

> Zweck: Ein neuer Chat soll das **A0-Plakat** für den TechDay SS2026 **neu und
> deutlich besser** gestalten. Die erste Version
> (`outputs/IDP_Plakat_A0_Uebersicht.pdf`, Quelle `poster/poster-uebersicht.html`)
> wurde vom Auftraggeber als **„grauenhaft"** bewertet → **komplett neu denken**,
> nicht nur nachbessern.

---

## 0) Sofort-Kontext (das Wichtigste)

- **Arbeitsverzeichnis:** `A:\Codex\IDP` · **Branch:** `main` · Remote:
  `https://github.com/HamidK193/IDP-KI-im-Unternehmen-`
- **Projekt:** „Kara·Cockpit" – ein **KI-Controlling-Cockpit für kleine
  Unternehmen**. Interdisziplinäres Projekt (IDP), **Hochschule Pforzheim**,
  Wirtschaftsinformatik.
- **Team:** Abdulhamid Karatas, Kadir Atar · **Betreuung:** Prof. Dr. Bettina C. K. Binder
- **Live-Website:** https://kara-cockpit.de (GitHub Pages, Custom Domain via CNAME)
- **Sprache aller Outputs:** Deutsch, echte Umlaute/ß.
- **Plattform/Umgebung:** Windows, Git-Bash + PowerShell. Kein Affinity,
  kein `pdftoppm`/`espeak`, ElevenLabs-Account ist **Free-Tier** (gesperrt:
  Library-Stimmen, STT). Vorhanden: `playwright-core` + Chrome (channel `chrome`),
  `ffmpeg-static`, `msedge-tts`, `pypdf` (im Temp-Projekt `%TEMP%\kara-shots`).

---

## 1) Die Plakat-Aufgabe

Auftraggeber will ein **A0-Plakat** für den TechDay. Vorlagen + Infos liegen unter:
`C:\Users\karat\Downloads\Vorlagen Plakat TechDay-20260617 (1)\`
- `Plakatvorlage_A0_Übersicht_SS2026.af` (Affinity, A0)
- `Plakatvorlage_A0_Umsetzung_SS2026.af` (Affinity, A0)
- `TechDay Plakat Infos SS2026.pdf` (Vorgaben)

**Wichtig:** Es gibt **zwei** Vorlagen – „**Übersicht**" und „**Umsetzung**".
Üblich ist ein 2-Plakat-Set. Der Auftraggeber sagte zuletzt „**ein Plakat**".
→ Im neuen Chat **kurz rückfragen**, ob 1 (nur Übersicht) oder beide gewünscht sind.

### Harte Vorgaben aus `TechDay Plakat Infos SS2026.pdf`
- **Format:** A0 hochkant = **841 × 1189 mm**.
- **Export:** **PDF**, **300 DPI** (bei >50 MB auf 150 reduzieren),
  Kompatibilität **PDF 1.7 (Acrobat 8)**, **max. 50 MB**.
- **Schriften:** Franklin Gothic Demi Cond **96 pt** (Plakattitel, Groß-/Klein),
  Franklin Gothic Demi Cond **64 pt** (Überschriften, **Großschrift in Grün**),
  Franklin Gothic Book **36 pt** (Fließtext). **Falls nicht verfügbar: ARIAL**
  in ähnlichen Größen (Franklin Gothic ist hier nicht installiert → Arial nutzen,
  ODER eine ähnliche kondensierte Grotesk via Datei einbetten/Google-Font lokal).
- **Bilder:** möglichst PNG (sonst JPG ~80 %), ca. 3000–5000 px, 96 dpi ok.
- **QR-Code:** soll auf das **YouTube-Promo-Video** verlinken. **Das Video ist
  (noch) nicht bei YouTube** → aktuell Ersatz-QR auf `kara-cockpit.de`. Hinweis
  an den Nutzer: QR später ggf. überkleben/neu erzeugen.
- **Datenschutz:** keine personenbezogenen Daten (Mail/Tel./Matrikelnr. usw.).
  Namen + Betreuung sind ok.
- **Dateiname-Konvention (NeoFab):**
  `SS2026_PlakatPMK_GruppenID_TitelKurz_Nachname.pdf` (GruppenID beim Nutzer erfragen).
- **Abgabe:** Upload in NeoFab (`http://141.47.91.111:8080/`) **bis Mi 17.06.2026 08:00**,
  zusätzlich im Moodle-Kurs. (Termin ggf. schon vorbei – beim Nutzer prüfen.)

### Vorlagen-Struktur (aus den eingebetteten Vorschauen rekonstruiert)
Beispielprojekt in der Vorlage: „SubaRover". Aufbau **Übersicht**-Plakat:
1. **Titel** groß oben (dunkel) + kleines **INFO/TechDay-Badge** oben rechts.
2. Drei grüne Großschrift-Überschriften: **AUFGABE**, **UMSETZUNG**, **ERGEBNIS**
   mit Fließtext (linke ~⅔-Spalte).
3. **Bilder rechts** (in der Vorlage in einem farbigen/orangenen Band).
4. Unten **grünes Band „Das Projektteam" + „SS2026"**, Reihe Team-**Fotos** mit
   Namen, **QR-Code** unten rechts.
Das **Umsetzung**-Plakat = gleiche Kopf-/Fußstruktur, aber mehr technische
Detailtiefe (Architektur, Vorgehen, Tools) – zweites Poster.

> Die Vorschau-PNGs der Vorlagen wurden extrahiert nach
> `%TEMP%\kara-shots\afprev\` (`Übersicht_0_362x512.png`, `Umsetzung_0_362x512.png`).
> Affinity `.af` lässt sich hier **nicht** programmatisch bearbeiten – Plakat
> daher als **HTML/SVG → Chromium-Print-PDF** bei A0 bauen (Vektor-Text, klein,
> druckfähig). Alternativ kann der Nutzer die PDF in Affinity platzieren.

---

## 2) Warum die erste Version „grauenhaft" ist (Vermutungen / Ansatzpunkte)

Die erste Fassung war ein „braves" SaaS-Web-Layout (helle Karten, dünne Linien,
Mono-URL-Bars, Monogramm-Kreise). Wahrscheinliche Schwächen, die der Neu-Entwurf
beheben sollte:
- Wirkt eher wie ein **Web-Screenshot** als ein **Print-Plakat** (zu kleinteilig,
  zu viel Weißraum-Raster, zu „technisch-flach").
- **Typografie** zu generisch (Arial, wenig Hierarchie/Spannung). Plakate leben
  von **großer, kräftiger Typo** und klarer Fernwirkung (3-m-Test).
- **Bilder** sind dunkle UI-Screenshots auf hellem Grund → kontrastarm/„fade",
  keine echten Hingucker.
- **Kein starkes Leitbild/Key-Visual**; Aufbau zu symmetrisch/langweilig.
- Monogramm-Kreise statt echter Team-Fotos wirken provisorisch.

### Empfehlungen für den neuen Entwurf
- **Fernwirkung zuerst:** sehr großer Titel, klare 3-Block-Hierarchie, mutiger
  Akzent-Einsatz (Emerald `#059669`). Weniger, dafür größere Elemente.
- Eine **distinktive kondensierte Display-Schrift** lokal einbinden (z. B. via
  `@font-face` aus einer Datei), nicht nur Arial – das hebt die Qualität enorm.
  (Franklin Gothic Demi Cond ist die Soll-Schrift; eine ähnliche Condensed-Grotesk
  wie „Archivo Narrow/Expanded", „Saira Condensed", „Oswald" o. ä. wäre legitim.)
- **Ein Key-Visual** statt mehrerer kleiner Screenshots: z. B. die Cockpit-Demo
  groß und plakativ inszeniert, oder eine eigens gebaute große Info-Grafik
  (Datenquellen → Cockpit → Empfehlung), nicht bloß ein Browser-Screenshot.
- Den **Vorlagen-Look ernst nehmen** (farbiges Bildband rechts, grüne Headings,
  Team-Band unten) – der Auftraggeber erwartet etwas, das zur HS-Vorlage passt.
- **Vorher Entwurf zeigen** (PNG-Vorschau) und Feedback einholen, BEVOR die
  finale PDF erzeugt wird.

---

## 3) Inhalt (verbindlich, aus Doku/Website)

**Titel-Idee:** „KI macht die Zahlen kleiner Unternehmen lesbar." (Tagline der Website)
**Eyebrow:** „IDP · Hochschule Pforzheim · Wirtschaftsinformatik"

**AUFGABE / Problem + Forschungsfrage:**
Kleine Unternehmen sammeln Daten in vielen Systemen (Finanzbuchhaltung, ERP, CRM,
Personal), gewinnen aber selten einen schnellen, verlässlichen Überblick; Zeit,
Personal und Budget für eigene KI-Projekte fehlen.
Forschungsfrage: „Wie kann ein kleines Unternehmen Künstliche Intelligenz
kontrolliert einsetzen, um verteilte Unternehmensdaten auszuwerten, Kennzahlen und
Trends zu erkennen und begründete Handlungsempfehlungen vorzubereiten?"

**UMSETZUNG / Lösung:**
KI-Controlling-Cockpit führt Datenquellen über **MCP-Konnektoren** zusammen,
berechnet zentrale Kennzahlen, erkennt Trends/Abweichungen, begründet jede
Auffälligkeit. Jede Empfehlung mit **Quelle, Datenqualität, Risiko** –
**„KI bereitet vor, der Mensch entscheidet" (Human-in-the-loop)**. Umgesetzt als
statischer Web-Demonstrator (HTML/CSS/JS, kein Backend) am **fiktiven Unternehmen
Kara**. Website, Doku und Erklärvideo selbst mit KI erstellt.

**ERGEBNIS:**
Zeigbares Demo-Cockpit: **6 Datenquellen, 6 Kennzahlen, 3 Szenarien**
(stabil/kritisch/Wachstum). Drei **Fallbeispiele**:
1. Controlling-Cockpit (alle Kennzahlen auf einer Oberfläche)
2. Budget- & Kostenabweichungsanalyse (Plan-Ist, Kostenstellen-Ranking)
3. Forecasting & Frühwarnsystem (frühe Liquiditäts-/Risikosignale)
Live unter **kara-cockpit.de**.

**Demo-Daten (Szenario „stabil", aus `website/script.js`):** Umsatz 4,82 Mio. €
(+8,4 %), Kostenquote 41,8 % (−1,2 %), Deckungsbeitrag 1,34 Mio. € (+5,1 %),
Liquidität 780 Tsd. €, Budgetabweichung 3,6 %, Risikoindex 42 (niedrig).
**6 Datenquellen:** Finance DB, ERP, CRM, HR, Projekt DB, Data Warehouse.
**Integrationen (Beispiele):** DATEV, lexoffice, SAP Business One, HubSpot,
Bank/FinTS, Personio, Excel/Sheets, PDF/CSV.

---

## 4) Verfügbare Assets

- `website/screenshots/` – u. a. `cockpit-1440-dark.png`, `home-1440-hub-light.png`,
  `home-1440-kpi-dark.png`, `home-1440-hero-dark.png`, `og.png`.
- `website/assets/qr-live.svg` – QR zu **kara-cockpit.de** (Vektor, druckfähig).
- `assets/brand/hspf-logo-white.png` – HS-PF-Logo weiß/transparent.
- `outputs/deck-assets/hspf-logo.png` (taupe), `hspf-shape.png`.
- **Design-Tokens (Slate & Emerald), helle Variante für Print:**
  bg `#F8FAFC`, surface `#FFFFFF`, Linien `#E2E8F0`, Text `#0F172A`/`#475569`/`#94A3B8`,
  Akzent `#059669` (Hover/Dark `#047857`), Diagramme Umsatz `#059669` / Kosten `#D97706` / Liquidität `#2563EB`.
  (Dunkle Variante: bg `#0F172A`, Fläche `#1E293B`, Akzent `#34D399`.)
- **Kara-Logo (Balken):** 3 Balken (`#0F172A`,`#0F172A`,`#059669`) + Wortmarke „Kara·Cockpit".

---

## 5) Wie man die Druck-PDF erzeugt (bewährter Weg)

HTML-Plakat (A0, `@page { size: 841mm 1189mm; margin:0 }`, Maße in mm/pt) →
mit Chromium per Playwright rendern:

```js
// in %TEMP%\kara-shots (hat playwright-core + chrome)
const { chromium } = require("playwright-core");
const b = await chromium.launch({ channel: "chrome" });
const p = await b.newPage();
await p.goto("file:///A:/Codex/IDP/poster/<datei>.html", { waitUntil: "networkidle" });
await p.pdf({ path: "A:/Codex/IDP/outputs/<name>.pdf",
  width: "841mm", height: "1189mm", printBackground: true, preferCSSPageSize: true });
// Vorschau zum Sichten: await p.screenshot({ path:"prev.png", fullPage:true })
```
- Bilder per **relativem file://-Pfad** referenzieren (`../website/screenshots/...`).
- PDF-Maße/Seiten prüfen mit `pypdf` (mediabox → mm).
- Ergebnis war ~0,75 MB (Vektor-Text + eingebettete PNGs) → weit unter 50 MB.
- Lokale Schrift via `@font-face` (Datei in `poster/fonts/`) für Nicht-Arial-Typo.

---

## 6) Stand des restlichen Projekts (Kontext, nicht Teil der Plakat-Aufgabe)

- **Website** (`website/`, 2 Seiten `index.html` + `cockpit.html`), live auf
  kara-cockpit.de, Slate-&-Emerald, „Claude" wurde überall durch „KI" ersetzt.
- **Zwei Videos** (Remotion-Projekt `video/remotion/`, render via
  `npx remotion render src/index.ts <Main|LinkedIn> ...`):
  - `outputs/IDP_Techday_Video.mp4` (16:9, ~60 s)
  - `outputs/IDP_LinkedIn_Projektvideo.mp4` (4:5, ~57 s)
  - Stimme: **msedge-tts `de-DE-FlorianMultilingualNeural`**, Rate −4 %, Pitch −3 Hz.
    Aussprache-Lernpunkte: „Cockpit" → im Vertonungstext **„Kockpit"** schreiben
    (rundes deutsches o), Abkürzungen **deutsch-phonetisch** („Eh-Err-Peh",
    „Zeh-Err-Emm", „Ih-Deh-Peh") – sonst code-switcht die Stimme ins Englische.
    Edge-TTS unterstützt **kein** SSML/Phoneme.
  - Musik leise + Sidechain-Ducking; Untertitel eingebrannt.
- Diese Video-/Website-Punkte sind **fertig**; fürs Plakat nur als Quelle für
  Inhalt/Assets relevant.

---

## 7) Konkreter nächster Schritt für den neuen Chat

1. Kurz klären: **1 oder 2 Plakate** (Übersicht / + Umsetzung)? Gibt es **Team-Fotos**?
   Ist der **Abgabetermin** noch offen? Liegt das **YouTube-Video** inzwischen vor (für QR)?
2. **Neues, plakativeres A0-Design** entwerfen (siehe §2-Empfehlungen), mit
   distinktiver Display-Schrift und einem starken Key-Visual.
3. **PNG-Vorschau zeigen, Feedback einholen**, dann erst finale **A0-PDF** (PDF 1.7,
   300 dpi, ≤50 MB) nach Namenskonvention exportieren.
4. Quelle unter `poster/` ablegen, PDF unter `outputs/`, committen/pushen.

> Alte Dateien zum Ersetzen/Verwerfen: `poster/poster-uebersicht.html`,
> `poster/preview-uebersicht.png`, `outputs/IDP_Plakat_A0_Uebersicht.pdf`.
