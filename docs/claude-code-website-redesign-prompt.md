# Claude-Code-Prompt: Website-Redesign (Alter-/Flexfolio-Stil), autonom

> Claude Code in `A:\Codex\IDP` öffnen, Abschnitt „PROMPT" einfügen, laufen lassen.

---

## PROMPT

Du arbeitest im Repository `A:\Codex\IDP`. Gestalte die bestehende statische
Website (`website/`) **neu**, inspiriert vom Aufbau moderner AI-/SaaS-Templates
(Alter, Flexfolio, Exact), aber **eigenständig umgesetzt** und im bestehenden
**dunklen Petrol-Design** (Kara·Cockpit-Branding). Arbeite **autonom bis zum
Ende**, ohne Rückfragen. Behalte zwingend bei: **statisch ohne Build**
(HTML/CSS/JS), **GitHub Pages**, die Datei **`website/CNAME` = `kara-cockpit.de`**,
das **interaktive Cockpit** und die **„mit KI gebaut"-Story**. Lies vorher die
Skills `frontend-design`, `web-design-guidelines`, `ui-ux-pro-max`. Am Ende
`website/BUILD-NOTES.md` aktualisieren, committen und pushen.

### Grundidee

Zweiteiliger Aufbau:
- **Homepage** = Übersicht aus **mehreren Grafik-/Dashboard-Blöcken** (wie Alter),
  die das Projekt erklären. Kein einzelner, überladener Cockpit-Block.
- **Eigene Cockpit-Seite** (`website/cockpit.html`, Flexfolio-Stil) = das
  **vollständige interaktive Beispiel-Cockpit** (die heutige Live-Demo aus
  `website/script.js` zieht hierher um).

### Homepage-Sektionen (in dieser Reihenfolge)

1. **Hero** – Titel, Tagline, zwei CTAs („Cockpit ansehen" → cockpit.html,
   „Projekt entdecken"), dezenter animierter Hintergrund, Badge „mit KI (Claude)
   gebaut".
2. **Das Projekt** – Problem (verteilte Daten) und Lösung (KI-Controlling-Cockpit)
   in zwei, drei Sätzen.
3. **Kennzahlen-Blöcke (Alter-Stil)** – eine Reihe **KPI-Karten** mit dem klaren
   Zahlen-Design und Trend-Chips: Umsatz, Kostenquote, Deckungsbeitrag,
   Liquidität, Budgetabweichung, Risikoindex (Werte aus `script.js`, Szenario
   „stabil"). Darunter ein **Trend-/Insights-Block** (Liniendiagramm Umsatz/
   Kosten/Liquidität). Mehrere Blöcke, luftig angeordnet.
4. **Integrations-Hub (Alter „Integrates with", umgebaut)** – zentraler Knoten
   „Kara·Cockpit · KI-Analyse (Claude)", animierte Leitungen mit **Pfeilen nach
   innen** zu **Controlling-Tools** (siehe Liste unten). Untertitel: „Verbindet
   alle relevanten Quellen kleiner Unternehmen". Icons monochrom/neutral halten,
   als „Beispiele typischer Quellen" kennzeichnen (keine Partnerschaft behaupten).
5. **Doppelblock (Alter „Comprehensive Insights")** – zwei Cards nebeneinander:
   - links **„Datenzusammensetzung"**: wie die Quellen zusammenfließen, mit
     Datenqualität.
   - rechts **„Datenanalyse & Empfehlung"**: Findings, Empfehlung, Risiko,
     Human-in-the-loop. Dieser Split spiegelt die Fallbeispiele.
6. **Die drei Fallbeispiele** – Karten (Cockpit, Budget-/Kostenabweichung,
   Forecasting/Frühwarnung), je mit Kurzbeschreibung und Controlling-Bezug.
7. **Cockpit-Vorschau** – ein, zwei Vorschaubilder/Grafiken (wie bei Alter) mit
   großem Button „Zum interaktiven Cockpit" → `cockpit.html`.
8. **Wie es funktioniert** – Prozessfluss Datenquellen → KI-Analyse → Kennzahlen
   → Begründung → Empfehlung → menschliche Prüfung (animiert).
9. **Mit KI gebaut** – kurz: was Skills sind, womit Website/Demo/Video entstanden.
10. **Kontakt/Footer** – Hochschule Pforzheim, IDP, Team, QR/Live-URL
    `kara-cockpit.de`, Datenschutz-Hinweis (nur Demo-Daten).

### Eigene Cockpit-Seite (`website/cockpit.html`)

Vollständiges, interaktives Cockpit im **Flexfolio-Stil**, thematisch angepasst:
- **Links**: Spalte der sechs Datenquellen mit Datenqualität (Datenzusammensetzung).
- **Mitte**: KPI-Karten + Trenddiagramm; oben der Szenario-Umschalter
  (stabil/kritisch/Wachstum), KPIs animieren beim Wechsel.
- **Rechts**: KI-Findings, Empfehlung, Datenqualität/Risiko und die
  Human-in-the-loop-Buttons „Freigeben / Ablehnen".
Die gesamte Interaktivität und die Daten aus `website/script.js` übernehmen,
sauber refaktoriert. Von der Homepage gut verlinkt; eigener Menüpunkt.

### Controlling-Tools für den Integrations-Hub (Beispiele)

Rund um den zentralen Cockpit-Knoten, gruppiert:
- **Buchhaltung/Finanzen:** DATEV, lexoffice, sevDesk
- **ERP/Warenwirtschaft:** SAP Business One, Microsoft Dynamics 365 Business
  Central, Odoo
- **Banking/Zahlungen:** Bank-Schnittstelle (FinTS/HBCI), Stripe, PayPal
- **CRM:** HubSpot, Pipedrive, Salesforce
- **HR/Lohn:** Personio, DATEV Lohn
- **Dateien/Tabellen:** Microsoft Excel, Google Sheets, CSV, PDF
Für den Hub eine ausgewogene Auswahl von etwa acht Icons zeigen (z. B. DATEV,
lexoffice, SAP, HubSpot, Bank/FinTS, Personio, Excel, PDF). Klar als
„typische Quellen, per MCP-Konnektor/API/CSV anbindbar" beschriften.

### Technik, Responsive, Qualität

- Dunkles Petrol-Design, distinktive Typografie, weiche Animationen
  (IntersectionObserver, 60 fps-Gefühl), `prefers-reduced-motion` beachten,
  Dark/Light-Umschalter.
- **Responsive**: Handy und Laptop top; Layouts dürfen sich unterscheiden (Handy
  einspaltig, Hamburger), Inhalt bleibt gleich. Breakpoints testen (360/768/1024/1440).
- Diagramme per Chart.js (CDN) oder sauberem SVG; sonst Vanilla JS.
- Barrierearm (Kontraste, Fokus, Alt-Texte, Tastatur), schnelle Ladezeit.
- **GitHub Pages**: `website/CNAME` (= kara-cockpit.de) und `.nojekyll`
  erhalten; Deploy-Workflow prüfen; alles committen/pushen.
- Screenshots (Handy + Desktop) unter `website/screenshots/` ablegen (für die Doku).

### Abschluss

`website/BUILD-NOTES.md` schreiben, committen, pushen. Erst beenden, wenn
Homepage + Cockpit-Seite fertig, responsiv und getestet sind.
