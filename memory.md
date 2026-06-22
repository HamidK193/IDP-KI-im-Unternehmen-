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
- Der Prototyp ist eine interaktive Informations- und Cockpitoberfläche.
- Die Oberfläche ist jetzt stärker als dunkler Control-Room-Demonstrator
  gestaltet: Hero, Datenpipeline, KPI-Zellen und Cockpit wirken wie eine
  echte Produktoberfläche statt wie eine einfache Folienseite.
- Es gibt drei KI-Einsatzfelder:
  1. KI-gestütztes Controlling-Cockpit
  2. Budget- und Kostenabweichungsanalyse
  3. Forecasting und Frühwarnsystem
- Das Controlling-Cockpit ist das zentrale interaktive Element der Website.
- Die Demo nutzt nur realistische Beispieldaten im Browser.
- Es werden keine echten Unternehmensdaten, keine Kundendaten und keine externe
  KI-API verwendet.

### Letzter umgesetzter Schritt

- Die Website wurde visuell und textlich überarbeitet.
- Der Hero nutzt jetzt einen dunklen Control-Room-Look mit Datenpipeline,
  KPI-Zellen, KI-Begründung und sichtbarer Freigabelogik.
- Die frühere sichtbare Meta-Sprache wurde entfernt. Die Sektion zu den drei
  Bereichen heißt jetzt `KI-Einsatzfelder` und formuliert fachliche Mehrwerte
  statt interner Arbeitsnotizen.
- Dynamische Texte in `website/script.js` wurden professioneller formuliert:
  `Controlling`, `Kostensteuerung` und `Frühwarnung`.
- Die Browserprüfung zeigte keine horizontalen Überläufe und keine kaputten
  Umlaute.

### Wichtige fachliche Entscheidungen

- Der frühere Kara-Store wird fachlich ignoriert und nicht mehr als Zielbild
  verwendet.
- Der Demonstrator soll technischer wirken: Datenbanken, Kennzahlen, Trends,
  Datenqualität, Risiko, Quellen und Human-in-the-loop.
- KI liefert keine automatische Entscheidung, sondern eine begründete
  Empfehlung.
- Die Website soll zeigen, wie relevante Unternehmensdatenbanken in einem
  Controlling-Cockpit zusammengeführt werden können.
- Sichtbare Seitentexte dürfen keine internen Planhinweise, Arbeitsnotizen oder
  Meta-Kommentare zum Aufbau der Präsentation enthalten.
- UI-Referenzrichtung: moderne Dashboard-UX mit klarer Entscheidungsfläche,
  progressiver Offenlegung, sichtbarer Datenpipeline, semantischen
  Statusfarben und menschlicher Freigabe statt rein dekorativer Charts.
- AgentMemory wurde vorbereitet: Die acht Skills aus
  `rohitg00/agentmemory` sind lokal installiert und der MCP-Block
  `mcp_servers.agentmemory` wurde in `~/.codex/config.toml` ergänzt.

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

- `website/index.html` - Seitenstruktur und Cockpit-Oberfläche
- `website/script.js` - Einsatzfelder, Szenarien und Interaktion
- `website/styles.css` - Slide-/Dashboard-Design
- `README.md` - Projektüberblick
- `CHANGELOG.md` - Änderungsprotokoll
- `docs/use-case.md` - fachlicher Use Case
- `docs/architecture.md` - Datenfluss und technischer Aufbau
- `docs/data-model.md` - Demo-Datenmodell
- `docs/ki-cockpit-dokumentation.md` - zentrale Cockpit-Dokumentation
- `docs/repository-overview.md` - Repo-Überblick

### Offene Punkte

- Vortragstext für das zentrale KI-Cockpit final üben.
- Optional echte Datenbank- oder CSV-Anbindung vorbereiten.
- Optional echte KI-Schnittstelle hinter einem Demo-Modus ergänzen.
- Optional Tests für Szenario-Umschaltung und UI-Zustände ergänzen.
- Bei künftigen Änderungen prüfen, ob lokaler Stand und GitHub synchron sind.
