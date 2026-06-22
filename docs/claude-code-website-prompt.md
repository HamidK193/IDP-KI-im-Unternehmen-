# Claude-Code-Prompt: Neue Techday-Website (autonom bauen)

> So nutzt du das: Öffne Claude Code im Projektordner `A:\Codex\IDP`, füge den
> gesamten Text unter „PROMPT" ein und bestätige. Claude Code arbeitet dann
> eigenständig bis zum Ende. Du kannst schlafen gehen.

---

## PROMPT

Du arbeitest im Repository `A:\Codex\IDP`. Baue eine **komplett neue, moderne,
interaktive und responsive Website** für unseren Techday-Infostand. Arbeite
**vollständig autonom bis zum Ende durch**: Stelle keine Rückfragen, triff
sinnvolle Entscheidungen selbst, teste dein Ergebnis und committe es. Gib erst
auf, wenn alles fertig, getestet und deployt ist. Hinterlasse am Ende eine kurze
Zusammenfassung in `website/BUILD-NOTES.md`.

### Zweck der Website (zwei Ziele)

1. **Beispiel für KI-gestützte Website-Erstellung**: Die Seite selbst ist der
   Beweis, was sich mit KI (Claude) bauen lässt. Mach diese Meta-Geschichte
   sichtbar (eigener Abschnitt „Mit KI gebaut").
2. **Projektbeschreibung**: Sie erklärt unser IDP-Projekt „KI für kleine
   Unternehmen – KI-Controlling-Cockpit am Beispiel des fiktiven Unternehmens
   Kara" verständlich für Standbesucher.

### Harte Vorgaben

- **Responsive**: Muss auf **Handy und Laptop top aussehen**. Layouts dürfen
  sich unterscheiden (Handy kompakter, einspaltig, Hamburger-Menü; Desktop
  mehrspaltig), **der Inhalt bleibt aber weitgehend gleich**. Teste die
  Breakpoints (z. B. 360, 768, 1024, 1440 px).
- **Modern & interaktiv**: hochwertiges UI/UX, durchdachte Typografie, ein
  klares Farbkonzept über CSS-Variablen, Mikrointeraktionen, Scroll-Animationen,
  Hover-/Touch-Zustände, sanfte Übergänge. Keine generische „KI-Optik".
- **Sprache**: Deutsch. Echte Umlaute und `ß`.
- **Korrekte Formatierung**: valides, semantisches HTML5, sauberes CSS,
  barrierearm (Kontraste, Alt-Texte, Fokuszustände, `prefers-reduced-motion`,
  Tastaturbedienung), schnelle Ladezeit.
- **Dark/Light**: respektiere `prefers-color-scheme` und biete einen Umschalter.

### Technischer Ansatz (wichtig für GitHub Pages)

- **Statische Seite ohne Build-Schritt**, damit GitHub Pages zuverlässig
  funktioniert: reines **HTML/CSS/JavaScript** im Ordner `website/`. Kein
  Framework-Build nötig.
- Moderne CSS-Features sind erwünscht (Custom Properties, Grid/Flex, Container
  Queries wo sinnvoll, `clamp()` für fluide Typografie, scroll-driven oder
  IntersectionObserver-Animationen).
- Interaktivität in **Vanilla JS**. Für Diagramme darf **Chart.js per CDN**
  genutzt werden; sonst keine schweren Abhängigkeiten. Eine distinktive
  Schriftart darf über Google Fonts eingebunden werden.
- Kein `localStorage` für Kerninhalte (nur optional für die Theme-Wahl).
- Bilder optimiert (SVG für Grafiken/Icons, komprimierte Rastergrafiken).

### Skills nutzen

Nutze die im Repo unter `.claude/skills/` installierten Skills aktiv:
`frontend-design` und `web-design-guidelines` (UI-Qualität und Review),
`ui-ux-pro-max` (Stile, Farbsysteme, Komponenten, Mobile-Patterns),
`mermaid-diagrams` (Diagramme). **Installiere bei Bedarf weitere Skills**
(z. B. für Animationen, Icons oder Accessibility) per `npx skills add <repo> --skill <name>`.
Lies zuerst die jeweilige `SKILL.md`, bevor du die Skill anwendest.

### Inhaltsquellen (übernimm die Fakten daraus)

- `docs/thesis/` – die wissenschaftliche Doku (Projektbeschreibung, drei
  Fallbeispiele, Datenquellen, Kennzahlen, Verknüpfungen). Nutze das als
  Faktenbasis.
- `website/script.js` (aktueller Stand) – enthält die Demo-Daten: 6 Datenquellen
  mit Datenqualität, 6 Kennzahlen und 3 Szenarien (stabil, kritisch, Wachstum)
  mit konkreten Werten, Findings und Empfehlungen. Übernimm diese Demo-Daten für
  das interaktive Cockpit.
- `docs/thesis/assets/` – vorhandene Grafiken (Prozessfluss, Verknüpfungen) als
  Referenz/Wiederverwendung möglich.

### Ausführliche Website-Struktur (Single-Page mit Sprungnavigation)

Eine durchscrollbare Seite mit fixierter Navigation (Desktop: Topbar mit
Anker-Links; Handy: Hamburger-Menü). Abschnitte:

1. **Hero**
   - Projekttitel, prägnante Tagline („KI macht die Zahlen kleiner Unternehmen
     lesbar"), zwei CTAs: „Live-Demo ansehen" und „Projekt entdecken".
   - Badge/Hinweis „Diese Website wurde mit KI (Claude) gebaut".
   - Dezenter animierter Hintergrund (Gradient-Mesh, Grid oder Partikel),
     respektiere `prefers-reduced-motion`.

2. **Das Projekt**
   - Problem: kleine Unternehmen haben viele verteilte Datenquellen, aber keinen
     schnellen Überblick.
   - Lösung: ein KI-Controlling-Cockpit, das Daten zusammenführt, Kennzahlen
     berechnet, Trends erkennt und begründete Empfehlungen vorbereitet.
   - Kurzer Hinweis auf Kara als fiktives Beispielunternehmen und auf
     Human-in-the-loop (der Mensch entscheidet).

3. **Die drei Fallbeispiele** (interaktive Karten)
   - Karte 1: KI-Controlling-Cockpit (Hauptfall).
   - Karte 2: Budget- und Kostenabweichungsanalyse.
   - Karte 3: Forecasting und Frühwarnsystem.
   - Hover/Tap blättert Kurzbeschreibung, Outputs und Controlling-Bezug auf.

4. **Live-Demo: Controlling-Cockpit** (interaktives Herzstück)
   - Umschalter für die drei Szenarien (stabil / kritisch / Wachstum).
   - 6 KPI-Karten (Umsatz, Kostenquote, Deckungsbeitrag, Liquidität,
     Budgetabweichung, Risikoindex) mit animierten Wertwechseln und
     Trendindikatoren (Werte je Szenario aus `script.js`).
   - Leiste der 6 Datenquellen mit Datenqualität.
   - Trenddiagramm (Chart.js oder sauberes SVG) für Umsatz/Kosten/Liquidität.
   - KI-Findings, Empfehlung sowie Anzeige von Datenqualität und Risiko.
   - „Freigeben / Ablehnen"-Buttons als sichtbares Human-in-the-loop-Element.

5. **Wie es funktioniert**
   - Prozessfluss: Datenquellen → KI-Analyse (Claude) → Kennzahlen → Begründung
     → Empfehlung → menschliche Prüfung (als interaktive/animierte Grafik).
   - Verknüpfungen: MCP-Konnektoren (Datenbanken), Make/Zapier (Automatisierung),
     Claude-API/Cowork, Excel/PDF. Betone: Claude baut die Anbindung selbst auf.

6. **Mit KI gebaut** (Techday-Meta-Geschichte)
   - Was sind Skills? Kurz und verständlich (Skills = wiederverwendbare
     Fähigkeiten/Anleitungen für KI-Agenten).
   - Welche Skills/Prompts diese Website und das Projekt ermöglicht haben.
   - Mini-Timeline: Idee → Recherche → Doku → Website → Deployment.

7. **Über / Kontakt**
   - Hochschule Pforzheim, IDP, Team, Hinweis aufs Cockpit als Demo.
   - Platz für QR-Code zur Live-URL.

8. **Footer**: Links (Repo, Doku), Datenschutz-Hinweis (nur Demo-Daten, keine
   echten Daten), Copyright.

### Responsives Verhalten

- Desktop: mehrspaltige Raster, Topbar-Navigation, größere Hero-Typografie.
- Tablet: reduzierte Spalten.
- Handy: einspaltig, kompakte Abstände, Hamburger-Menü, große Touch-Ziele
  (mind. 44 px), Sticky-CTA optional. Gleiche Inhalte wie Desktop, nur kompakter
  angeordnet. Diagramme und Karten müssen auf kleinen Breiten lesbar bleiben.

### GitHub Pages

- Lege alle Dateien in `website/` ab; die alte Seite **darf ersetzt werden**.
- Behalte `website/.nojekyll`.
- Prüfe und passe `.github/workflows/deploy.yml` so an, dass der Ordner
  `website/` korrekt als Pages-Artefakt veröffentlicht wird (der bestehende
  Workflow lädt bereits `website/` hoch – stelle sicher, dass das nach dem Umbau
  weiterhin stimmt; relative Pfade verwenden, damit es unter dem Pages-Unterpfad
  funktioniert).
- Committe alles auf `main` und sorge dafür, dass der Deploy-Workflow durchläuft.

### Qualitätssicherung (selbst durchführen)

- Teste die Seite in mehreren Viewport-Breiten (Handy + Laptop) und behebe
  Layout-Fehler.
- Validiere HTML, prüfe alle internen Anker-Links und interaktiven Elemente.
- Prüfe Kontraste, Fokuszustände und Tastaturbedienung.
- Achte auf schnelle Ladezeit (Bilder/Fonts optimiert).
- Erstelle einige **Screenshots** (Handy + Desktop) und lege sie unter
  `website/screenshots/` ab, damit sie später in die Doku übernommen werden
  können.

### Abschluss

- Schreibe `website/BUILD-NOTES.md`: was gebaut wurde, Struktur, genutzte/neu
  installierte Skills, getroffene Designentscheidungen, wie man die Seite lokal
  startet, und der Stand des Pages-Deployments.
- Committe und pushe alles. Beende erst, wenn die Seite fertig, responsiv,
  getestet und deployt ist.

---

## Hinweis für mich (Abdul), nicht Teil des Prompts

- Vor dem Lauf: in Word geöffnete Projektdateien schließen.
- Nach dem Lauf: Screenshots aus `website/screenshots/` können als Abbildungen
  in die Doku übernommen werden.
