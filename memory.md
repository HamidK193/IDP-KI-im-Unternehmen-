# memory.md

## Projektgedächtnis

### Projekt

- Repository: `IDP-KI-im-Unternehmen-`
- Thema: IDP-Demonstrator für KI-Nutzung in Unternehmen
- Aktueller Fokus: datenbasiertes Controlling, Unternehmenssteuerung und
  Analyse aller relevanten Unternehmensdatenbanken
- Ziel: zeigen, wie KI Kennzahlen berechnet, Trends erkennt, Abweichungen
  begründet und Handlungsempfehlungen vorschlägt

### Aktueller Stand

- Die Website ist keine Kara-Shop- oder E-Commerce-Demo mehr.
- Der Prototyp ist eine interaktive Informations- und Präsentationsoberfläche.
- Die Oberfläche besteht aus großen, slide-artigen Sektionen und einer
  Dashboard-Demo.
- Es gibt drei KI-Fallbeispiele:
  1. KI-gestütztes Controlling-Cockpit
  2. Budget- und Kostenabweichungsanalyse
  3. Forecasting und Frühwarnsystem
- Das Controlling-Cockpit ist der Hauptfall und wird im Detail gezeigt.
- Die Demo nutzt nur realistische Beispieldaten im Browser.
- Es werden keine echten Unternehmensdaten, keine Kundendaten und keine externe
  KI-API verwendet.

### Wichtige fachliche Entscheidungen

- Der frühere Kara-Store wird fachlich ignoriert und nicht mehr als Zielbild
  verwendet.
- Der Demonstrator soll technischer wirken: Datenbanken, Kennzahlen, Trends,
  Datenqualität, Risiko, Quellen und Human-in-the-loop.
- KI liefert keine automatische Entscheidung, sondern eine begründete
  Empfehlung.
- Die Präsentation soll zeigen, wie alle relevanten Unternehmensdatenbanken in
  einem Controlling-Cockpit zusammengeführt werden können.
- UI-Referenzrichtung: moderne Produkt- und Dashboard-Muster aus Mobbin, Refero
  und Dribbble, ohne 1:1-Kopie.

### Demo-Datenquellen

- Finance DB: GuV, Cashflow, Buchungen
- ERP: Einkauf, Bestand, Lieferanten
- CRM: Umsatzpipeline, Kunden, Aufträge
- HR: Personalkosten, Kapazitäten
- Projekt DB: Budgets, Laufzeiten, Auslastung
- Data Warehouse: historische Kennzahlen

### Gezeigte Kennzahlen

- Umsatz
- Kostenquote
- Deckungsbeitrag
- Liquidität
- Budgetabweichung
- Forecast
- Risikoindex

### Relevante Dateien

- `website/index.html` - Präsentationsoberfläche und Cockpit-Struktur
- `website/script.js` - Fallbeispiele, Szenarien und Interaktion
- `website/styles.css` - Slide-/Dashboard-Design
- `README.md` - Projektüberblick
- `CHANGELOG.md` - Änderungsprotokoll
- `docs/use-case.md` - fachlicher Use Case
- `docs/architecture.md` - Datenfluss und technischer Aufbau
- `docs/data-model.md` - Demo-Datenmodell
- `docs/ki-cockpit-dokumentation.md` - zentrale Cockpit-Dokumentation
- `docs/repository-overview.md` - Repo-Überblick

### Offene Punkte

- Präsentationstext für den Hauptfall final üben.
- Optional echte Datenbank- oder CSV-Anbindung vorbereiten.
- Optional echte KI-Schnittstelle hinter einem Demo-Modus ergänzen.
- Optional Tests für Szenario-Umschaltung und UI-Zustände ergänzen.
- Bei künftigen Änderungen prüfen, ob lokaler Stand und GitHub synchron sind.
