# BUILD-NOTES – Techday-Website „Kara·Cockpit“

Erstellt am 12.06.2026 von Claude (Claude Code) in einem autonomen Durchlauf
auf Basis eines einzigen ausführlichen Prompts. Diese Notizen dokumentieren,
was gebaut wurde und welche Entscheidungen dabei getroffen wurden.

## Was gebaut wurde

Eine komplett neue, responsive Single-Page-Website für den Techday-Infostand
mit zwei Zielen: (1) Meta-Beweis, dass sich mit KI hochwertige Websites bauen
lassen, und (2) verständliche Beschreibung des IDP-Projekts
„KI für kleine Unternehmen – KI-Controlling-Cockpit am Beispiel des fiktiven
Unternehmens Kara“ (Hochschule Pforzheim).

### Abschnitte (Single-Page mit Sprungnavigation)

1. **Hero** – Tagline „KI macht die Zahlen kleiner Unternehmen lesbar“,
   zwei CTAs, KI-Badge, animierter Hintergrund (Grid + Glows + gezeichnete
   Sparklines), Eckdaten-Leiste.
2. **Das Projekt** – Problem/Lösung-Gegenüberstellung, Forschungsfrage als
   Zitat, Hinweiskarten zu Kara (fiktiv) und Human-in-the-loop.
3. **Die drei Fallbeispiele** – aufklappbare Karten (Cockpit, Budget-/
   Kostenabweichung, Forecasting) mit Outputs und Controlling-Bezug.
4. **Live-Demo: Controlling-Cockpit** – 3 Szenario-Tabs (stabil/kritisch/
   Wachstum), 6 Datenquellen mit animierten Qualitätsbalken, 6 KPI-Karten mit
   animierten Wertwechseln und Trendindikatoren, animiertes SVG-Trenddiagramm
   (Umsatz/Kosten/Liquidität), KI-Findings, Empfehlung, Datenqualität, Risiko
   sowie „Freigeben/Ablehnen“ als Human-in-the-loop-Element.
5. **Wie es funktioniert** – interaktiver 6-Schritte-Prozessfluss
   (auto-durchlaufend, klickbar, Schritt 6 = Mensch) plus die vier
   Verknüpfungen (MCP, Make/Zapier, Claude-API/Cowork, Excel/PDF).
6. **Mit KI gebaut** – Erklärung von Skills, genutzte Skills als Chips,
   Timeline Idee → Recherche → Doku → Website → Deployment, Eckdaten
   (1 Prompt, 3 Dateien, 0 Build-Schritte, 0 Frameworks).
7. **Über/Kontakt** – Hochschule Pforzheim, IDP, MVP-Hinweis, QR-Code zur
   Live-URL.
8. **Footer** – Repo- und Doku-Links, Datenschutz-Hinweis (nur Demo-Daten),
   Copyright.

### Dateien

```
website/
├── index.html        Semantisches HTML5, alle Inhalte
├── styles.css        Design-Tokens, Light/Dark, Responsive, Animationen
├── script.js         Demo-Daten + gesamte Interaktion (Vanilla JS)
├── assets/
│   ├── favicon.svg   Balken-Logo
│   └── qr-live.svg   QR-Code zur Live-URL (per npx qrcode generiert)
├── screenshots/      10 Screenshots (360/390/768/1024/1440 px, hell+dunkel) + og.png
├── BUILD-NOTES.md    Diese Datei
├── README.md         Kurzüberblick + lokaler Start
└── .nojekyll         GitHub Pages ohne Jekyll
```

## Genutzte Skills

- **frontend-design** – Design-Leitlinie: bewusste, eigenständige Ästhetik
  statt generischer „KI-Optik“; Typografie-, Farb- und Motion-Prinzipien.
- **ui-ux-pro-max** – UX-Checks: Kontraste ≥ 4,5:1, Touch-Ziele ≥ 44 px,
  `prefers-reduced-motion`, Fokuszustände, keine horizontalen Scrolls.
- **web-design-guidelines** – als Review-Checkliste für Barrierefreiheit und
  Interface-Qualität.
- **mermaid-diagrams** – nicht benötigt; der Prozessfluss wurde als
  interaktives HTML/CSS-Element umgesetzt (besser bedienbar als ein
  statisches Diagramm).
- Neu installiert wurde keine zusätzliche Skill: Für Icons (Inline-SVG),
  Animationen (CSS + IntersectionObserver) und Accessibility reichten die
  vorhandenen Skills und Bordmittel. Der QR-Code entstand mit
  `npx qrcode`, die Screenshots mit `playwright-core` + installiertem Chrome.

## Designentscheidungen

- **Ästhetik „Präzisionsinstrument“**: warmes Papier-Beige im Light-Mode,
  tiefes Petrol-Grün im Dark-Mode, Smaragd als einziger Akzent, semantische
  Ampelfarben (good/warn/bad) für Controlling-Inhalte.
- **Typografie**: Bricolage Grotesque (Display), Atkinson Hyperlegible
  (Fließtext, sehr gut lesbar), JetBrains Mono (Zahlen, Labels, Daten) –
  via Google Fonts mit `display=swap`.
- **Eigenes SVG-Trenddiagramm statt Chart.js**: keine CDN-Abhängigkeit
  (Messe-WLAN!), volle Theme-Kontrolle über CSS-Variablen, animierte
  Übergänge zwischen Szenarien per requestAnimationFrame.
- **Kein localStorage für Inhalte** – nur optional für die Theme-Wahl
  (mit try/catch-Fallback auf die Systemeinstellung).
- **Dark/Light**: `prefers-color-scheme` wird respektiert; der Umschalter
  setzt `data-theme` und überstimmt die Systemeinstellung.
- **Barrierearm**: Skip-Link, Landmarken mit Namen, Tabs-Pattern mit
  Pfeiltasten, `aria-expanded`/`aria-controls` an den Karten,
  Text-Alternative für das Diagramm (`aria-live`), `prefers-reduced-motion`
  deaktiviert alle Animationen, Fokusringe via `:focus-visible`,
  Touch-Ziele ≥ 44 px.
- **Responsive Breakpoints**: 1100 px (Raster reduzieren), 880 px
  (Hamburger-Menü), 760 px (einspaltig, kompakte Abstände), 480/400 px
  (Feinanpassungen). Inhalt bleibt auf allen Breiten identisch.
- **Ohne JavaScript** bleibt die Seite lesbar (`no-js`-Fallback zeigt alle
  Inhalte; nur die Demo-Interaktion braucht JS).

## Qualitätssicherung (durchgeführt)

- Interaktiv getestet bei 360/390/768/1024/1440 px, hell und dunkel:
  Szenario-Wechsel, animierte KPI-Werte, Diagramm-Übergänge, Freigeben/
  Ablehnen, Theme-Umschalter, Hamburger-Menü, Scroll-Spy, Karten-Toggle.
- `html-validate`: 0 Fehler (abgesehen von der reinen Stilregel
  „void-style“; selbstschließende Void-Tags sind valides HTML5).
- Alle internen Anker-Links programmatisch geprüft: keine toten Ziele.
- Touch-Ziele programmatisch geprüft: alle ≥ 44 px.
- Kein horizontaler Overflow bei 360 px.
- Konsole ohne Fehler/Warnungen.
- Behobene Befunde aus dem Test: Szenario-Umschalter lief bei 360 px über
  (Schrift/Padding verkleinert), Topbar brach bei 768 px um (Hamburger-
  Breakpoint auf 880 px), Fallbeispiel-Karten waren initial aufgeklappt
  (Markup von `<button>`+`<span>` auf `<article>`+Toggle-Button umgebaut –
  zugleich HTML-Validitätsfix).

## Lokal starten

```powershell
cd A:\Codex\IDP\website
py -m http.server 8080
# dann http://localhost:8080/ öffnen
```

## Deployment (GitHub Pages)

- Workflow `.github/workflows/deploy.yml` lädt bei jedem Push auf `main`
  den Ordner `website/` als Pages-Artefakt hoch (actions/upload-pages-artifact
  → actions/deploy-pages). Am Workflow war keine Änderung nötig.
- Alle Pfade in der Website sind relativ, damit sie unter dem
  Pages-Unterpfad funktionieren.
- Live-URL: <https://kara-cockpit.de/>
- Status: Deploy-Lauf zu diesem Stand erfolgreich (siehe Actions-Tab).
