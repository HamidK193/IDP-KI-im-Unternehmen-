# BUILD-NOTES – Techday-Website „Kara·Cockpit“ (V2: zweiseitiger Aufbau)

Erstellt mit KI in autonomen Durchläufen. Stand 12.06.2026:
Redesign nach dem Vorbild moderner AI-/SaaS-Templates (Alter, Flexfolio, Exact),
eigenständig im Kara·Cockpit-Petrol-Design umgesetzt. Statisch ohne Build,
GitHub Pages, Domain `kara-cockpit.de`.

## Aufbau: zwei Seiten

### `index.html` – Homepage (Übersicht aus Dashboard-Blöcken, Alter-Stil)

1. **Hero** – Tagline, CTAs „Cockpit ansehen“ (→ cockpit.html) und „Projekt
   entdecken“, KI-Badge, animierter Hintergrund, Eckdaten-Leiste.
2. **Das Projekt** – Problem/Lösung in zwei kompakten Panels.
3. **Kennzahlen-Blöcke** – sechs KPI-Karten (Szenario „stabil“ aus
   `script.js`) mit Zähl-Animation beim Scrollen + Insights-Block
   (SVG-Trenddiagramm + „Was die KI daraus liest“).
4. **Integrations-Hub** – zentraler Knoten „Kara·Cockpit · KI-Analyse“,
   acht Satelliten typischer Quellen (DATEV, lexoffice,
   SAP Business One, HubSpot, Bank/FinTS, Personio, Excel/Sheets, PDF/CSV)
   mit animierten, nach innen gerichteten Pfeil-Leitungen. Monochrome
   Generik-Icons, ausdrücklich als „Beispiele, keine Partnerschaften“
   gekennzeichnet. Mobil wird das Radial-Layout zum gestapelten Raster.
5. **Doppelblock** – links „Datenzusammensetzung“ (6 Quellen mit
   Qualitätsbalken), rechts „Datenanalyse & Empfehlung“ (Finding, Empfehlung,
   Risiko-Pille, Human-in-the-loop-Hinweis).
6. **Drei Fallbeispiele** – Karten mit Kurzbeschreibung + Controlling-Bezug.
7. **Cockpit-Vorschau** – Screenshot der Cockpit-Seite im Browser-Rahmen
   (`assets/cockpit-preview.png`) mit großem CTA „Zum interaktiven Cockpit“.
8. **Wie es funktioniert** – interaktiver 6-Schritte-Prozessfluss
   (auto-durchlaufend, klickbar, Schritt 6 = Mensch).
9. **Mit KI gebaut** – Skills-Erklärung + Projekt-Timeline (inkl. Video).
10. **Kontakt/Footer** – Hochschule Pforzheim, IDP, Team mit LinkedIn/E-Mail,
    QR-Code zu kara-cockpit.de, Datenschutz-Hinweis (nur Demo-Daten).

### `cockpit.html` – Interaktives Cockpit (Flexfolio-Stil, 3 Spalten)

- **Toolbar**: Szenario-Umschalter (stabil/kritisch/Wachstum, Tabs-Pattern
  mit Pfeiltasten) + Status.
- **Links**: sechs Datenquellen mit animierten Qualitätsbalken
  (Datenzusammensetzung).
- **Mitte**: sechs KPI-Karten (animierte Wertwechsel, Einheiten-bewusst:
  Mio./Tsd. wird nicht interpoliert) + animiertes SVG-Trenddiagramm.
- **Rechts**: KI-Findings, Empfehlung, Datenqualität/Risiko und
  „Freigeben/Ablehnen“ (Human-in-the-loop) mit Status-Feedback.
- Mobil stapeln die Spalten in der Reihenfolge Kennzahlen → Quellen → Analyse.

## Dateien

```
website/
├── index.html              Homepage (Dashboard-Blöcke)
├── cockpit.html            Interaktive Cockpit-Seite
├── styles.css              Design-Tokens, Light/Dark, beide Seiten, Responsive
├── script.js               Demo-Daten + gesamte Interaktion (eine Datei,
│                           Blöcke initialisieren sich nur bei vorhandenen Elementen)
├── CNAME                   kara-cockpit.de (GitHub Pages Custom Domain)
├── .nojekyll               GitHub Pages ohne Jekyll
├── assets/
│   ├── favicon.svg         Balken-Logo
│   ├── qr-live.svg         QR-Code → https://kara-cockpit.de
│   └── cockpit-preview.png Vorschaubild der Cockpit-Seite (Homepage-Block 7)
├── screenshots/            12 aktuelle Screenshots (360/390/768/1024/1440,
│                           hell+dunkel, Homepage + Cockpit) + og.png
├── BUILD-NOTES.md          Diese Datei
└── README.md               Kurzüberblick + lokaler Start
```

## Designentscheidungen

- **Petrol-Design beibehalten**: Tokens, Typografie (Bricolage Grotesque /
  Atkinson Hyperlegible / JetBrains Mono) und Komponenten-Sprache sind mit
  der Vorversion identisch – nur die Informationsarchitektur ist neu.
- **Integrations-Hub statt Logo-Wand**: generische, monochrome Icons +
  Klartext-Namen, damit keine Markenrechte/Partnerschaften suggeriert werden;
  Leitungen als gestrichelte SVG-Pfade mit CSS-Dash-Animation Richtung
  Zentrum und Pfeilspitzen (bei `prefers-reduced-motion` statisch).
- **Eigenes SVG-Diagramm statt Chart.js**: keine CDN-Abhängigkeit
  (Messe-WLAN), volle Theme-Kontrolle, animierte Szenario-Übergänge per
  requestAnimationFrame.
- **Eine `script.js` für beide Seiten**: jeder Block prüft, ob seine Elemente
  existieren – kein Build, keine Module, kein doppelter Code.
- **Barrierearm**: Skip-Link, Landmarken, Tabs mit Pfeiltasten,
  `aria-live`-Statusmeldungen, Text-Alternativen (Hub als `role="img"` mit
  beschreibendem Label, Diagramm mit verstecktem Text), Fokusringe,
  Touch-Ziele ≥ 44 px, `prefers-reduced-motion` deaktiviert alle Animationen.
- **Responsive Breakpoints**: 1180 (Cockpit 2-spaltig), 1100, 920 (Cockpit
  1-spaltig, Doppelblöcke stapeln), 880 (Hamburger + CTA ins Menü), 760
  (Hub als Raster, kompakte Abstände), 430 (Feinanpassungen).

## Qualitätssicherung (durchgeführt)

- Beide Seiten interaktiv getestet (360/768/1024/1440, hell+dunkel):
  Szenario-Wechsel mit animierten KPIs und Diagramm, Freigeben/Ablehnen,
  Theme-Umschalter, Hamburger, Scroll-Spy, KPI-Zählanimation, Hub-Aufbau.
- `html-validate` für beide Seiten: 0 Fehler (Stilregel „void-style“
  deaktiviert; selbstschließende Void-Tags sind valides HTML5).
- Alle internen Anker programmatisch geprüft, kein horizontaler Overflow
  bei 360 px, Konsole ohne Fehler/Warnungen.
- Behobene Befunde: Header-CTA brach bei 1024 px um (nowrap); auf dem Handy
  kamen die Datenquellen vor den Kennzahlen (Spaltenreihenfolge per
  CSS-`order` gedreht).

## Lokal starten

```powershell
cd A:\Codex\IDP\website
py -m http.server 8080
# dann http://localhost:8080/ öffnen (Cockpit: /cockpit.html)
```

## Deployment (GitHub Pages)

- Workflow `.github/workflows/deploy.yml` lädt bei jedem Push auf `main` den
  Ordner `website/` als Pages-Artefakt hoch; `CNAME` und `.nojekyll` bleiben
  erhalten. Relative Pfade überall.
- Live-URL: <https://kara-cockpit.de/> (Cockpit: <https://kara-cockpit.de/cockpit.html>)
