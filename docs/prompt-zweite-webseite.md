# Prompt: Zweite, interaktive Präsentations-Website (Techday-Stand)

Dieser Prompt ist dafür gedacht, eine **zweite, eigenständige Website** zu
erzeugen, die das IDP-Projekt **KI im Unternehmen / KI-Controlling** auf einem
Techday-Stand interaktiv, modern und sehr ansprechend vorstellt. Er ist
vollständig und enthält alle Inhalte, damit ein KI-Website-Generator (z. B.
Claude, v0, Lovable, Bolt) oder ein Entwicklungsteam direkt loslegen kann, ohne
Fakten erfinden zu müssen.

> **So benutzt man diesen Prompt:** Den gesamten Text ab „=== PROMPT START ==="
> bis „=== PROMPT ENDE ===" kopieren und in das gewünschte Werkzeug einfügen.
> Die erste Website unter `website/` bleibt unverändert; diese hier ist die
> zweite, eigenständige Variante.

---

=== PROMPT START ===

## Rolle und Ziel

Du bist eine erfahrene Senior-Frontend-Entwicklerin und UI/UX-Designerin für
moderne, datengetriebene Produkt- und Präsentationswebsites. Erstelle eine
**eigenständige, einseitige (Single-Page) interaktive Website**, die ein
studentisches IDP-Projekt zum Thema **„KI im Unternehmen – KI-gestütztes
Controlling und Unternehmenssteuerung"** auf einem **Techday-/WI-Tag-Stand**
vorstellt.

Die Website wird auf einem großen Bildschirm (Stand-Monitor oder Laptop) gezeigt
und von Besucherinnen und Besuchern selbst bedient. Sie muss:

- den Inhalt **sofort verständlich** machen, auch für fachfremde Personen,
- **sehr modern, hochwertig und „wow"** aussehen (Messe-Niveau),
- **interaktiv** sein (Klicken, Umschalten, Animationen, Scroll-Effekte),
- inhaltlich exakt zum unten beschriebenen Projekt passen.

## Zielgruppe und Kontext

- Standbesucher auf einem Techday: Studierende, Dozierende, Unternehmensgäste.
- Sehr unterschiedliches Vorwissen: Die Seite muss zugleich **einsteigerfreundlich
  erklären** und **fachliche Tiefe** auf Wunsch zeigen (Progressive Disclosure).
- Die Person am Stand soll die Seite auch als **roten Faden zum Erzählen** nutzen
  können (klare Reihenfolge der Abschnitte, große Sektionen).

## Technische Vorgaben

- **Eine einzige, in sich geschlossene Web-App**, vorzugsweise als statische
  Seite ohne Backend, damit sie offline am Stand läuft.
- Bevorzugt **HTML + CSS + Vanilla JavaScript** in sauberen, getrennten Dateien
  (`index.html`, `styles.css`, `script.js`). Alternativ ein modernes Stack
  (React/Vite + Tailwind + Framer Motion) ist erlaubt, **aber das Ergebnis muss
  ohne Server lauffähig** sein (Build-Output reicht).
- **Keine** echten Unternehmensdaten, **keine** externe KI-API, **keine**
  Tracking-Skripte. Alle Daten sind die unten gelieferten Demo-Daten.
- Responsiv (Desktop zuerst, aber Tablet/Smartphone müssen funktionieren).
- Performant: schnelle Ladezeit, keine schweren Bibliotheken nur für Deko.
  Charts bevorzugt als **leichtgewichtiges Inline-SVG** ohne große Chart-Lib.
- Barrierearm: gute Kontraste, Tastaturbedienbarkeit, `aria`-Label,
  `prefers-reduced-motion` respektieren.
- Deutsche Texte mit **echten Umlauten** (ä, ö, ü, ß).

## Design- und UX-Richtung (sehr modern)

Stil: **„Control Room / KI-Cockpit"** – dunkles, edles Dashboard-Design, das zum
Thema Daten & KI passt.

- **Dunkles Theme** als Standard (tiefes Marineblau/Anthrazit, ca. `#0b1020`),
  optional umschaltbarer Light-Mode.
- **Akzent-Verlauf** (Blau → Violett/Cyan) für Highlights, Buttons, aktive
  Zustände. Eine klare semantische Farbskala: Grün = gut, Gelb/Orange = Warnung,
  Rot = kritisch.
- Moderne Stilmittel mit Maß: **Glassmorphism-Karten** (leichte Transparenz +
  Blur), weiche Schatten, feine 1px-Grenzen, dezentes Hintergrund-Rauschen oder
  ein animierter Verlaufs-/Grid-Hintergrund. Kein Kitsch, kein Overload.
- **Typografie:** moderne, gut lesbare Sans-Serif (z. B. Inter, Geist, Satoshi).
  Große, selbstbewusste Headlines; ruhiger Fließtext.
- **Microinteractions & Motion:**
  - Scroll-Reveal-Animationen (Elemente faden/sliden sanft ein).
  - Animierte Zahlen (KPI-Werte zählen hoch beim Sichtbarwerden).
  - Hover-Zustände mit weichem Glow/Lift auf Karten und Buttons.
  - Sanfte Übergänge beim Umschalten von Tabs/Szenarien (kein hartes Springen).
  - Ein dezenter „lebendiger" Hintergrund (animiertes Gradient-Mesh oder
    pulsierende Datenpunkte), aber dezent und performant.
- **Sticky-Navigation** oben mit Ankerlinks zu allen Sektionen und einem
  Fortschritts-/Scroll-Indikator.
- **Großformatige, slide-artige Sektionen** (jede Sektion fühlt sich wie eine
  Präsentationsfolie an), damit man sie am Stand wie eine Story durchblättern
  kann. Optional ein „Präsentationsmodus"/Vollbild.

## Seitenstruktur (Reihenfolge ist wichtig)

Baue die Seite genau in dieser Reihenfolge auf:

1. **Hero / Intro** – Titel, ein-Satz-Erklärung, 2–3 Kennzahlen-Chips
   (3 Fallstudien, 6 Datenquellen, 1 KI-Cockpit), Buttons „Fallstudien ansehen"
   und „Live-Cockpit öffnen". Optional ein „Human-in-the-loop"-Badge.
2. **Problem** – Warum das Thema relevant ist (siehe Inhalte unten). Visualisiere
   das Problem „viele Datenbanken, kein Überblick".
3. **Überblick: Die 3 Fallstudien** – **Zuerst werden alle drei kurz
   angesprochen** (drei nebeneinanderliegende, klickbare Karten mit Nummer,
   Titel, Ein-Satz-Nutzen und einem Icon). Markiere Fallstudie 1 sichtbar als
   „Hauptfall / Live-Demo".
4. **Fallstudie 1, 2, 3 – je im Detail** – **danach jede Fallstudie einzeln und
   ausführlich** in einem eigenen, gut gegliederten Block. Jede Detail-Sektion
   enthält **immer dieselben Unterpunkte** (siehe „Pflicht-Struktur je
   Fallstudie"). Erreichbar per Tab/Akkordeon **oder** als drei
   untereinanderliegende Sektionen – wichtig ist klare Trennung und gleiche
   Gliederung.
5. **Live-Cockpit (interaktive Demo)** – das spielbare Herzstück: Szenario-Schalter
   (stabil / kritisch / Wachstum), KPI-Karten, animiertes Trenddiagramm,
   KI-Findings, Empfehlung, Datenqualität und Risiko, dazu ein „Analyse
   ausführen"-Button mit kurzer Lade-/Denk-Animation. (Daten unten.)
6. **Datenfluss / Architektur** – animierte Pipeline von den Datenquellen über
   KI-Analyse bis zur menschlichen Freigabe.
7. **Governance / Grenzen** – Human-in-the-loop, Datenschutz, was die Demo
   bewusst NICHT tut.
8. **Projekt-Fazit & Aufwand** – Gesamtfazit, Aufwandsübersicht der drei
   Fallstudien (z. B. als Vergleichstabelle/„Effort vs. Nutzen"-Matrix), Ausblick.
9. **Footer / Stand-Info** – Projektname, Team, Platzhalter für QR-Code zur Demo
   bzw. zum Repository.

## Pflicht-Struktur je Fallstudie (sehr wichtig)

Beschreibe **jede der drei Fallstudien einzeln** mit genau diesen Blöcken, klar
beschriftet und gut lesbar (Icons/kleine Überschriften je Block):

- **Worum geht es** (Kurzbeschreibung, 1–2 Sätze)
- **Wie man es macht** (die konkreten Schritte/Vorgehensweise)
- **Was man braucht** (Daten, Systeme, Werkzeuge, Kompetenzen)
- **Probleme / Herausforderungen** (was in der Praxis schwierig ist)
- **Risiken** (fachlich, technisch, Datenschutz) + Gegenmaßnahmen
- **Aufwand** (Größenordnung Zeit/Komplexität für MVP und für Demo)
- **Fazit** (Kernaussage: Nutzen und Empfehlung)

Visualisiere „Aufwand" je Fallstudie zusätzlich grafisch (z. B. kleine
Balken/Ampel für Komplexität, Zeit, Nutzen), damit man es am Stand schnell
erfasst.

---

## INHALTE (verbindlich verwenden – nicht erfinden)

### Projekt-Kurzbeschreibung

Der IDP-Demonstrator zeigt, wie KI im Unternehmen zur **datenbasierten Steuerung**
eingesetzt werden kann. Unternehmen besitzen viele Datenbanken, aber oft keinen
schnellen Überblick über Kennzahlen, Trends, Abweichungen und Ursachen. Die KI
wertet alle relevanten Unternehmensdatenbanken aus, berechnet Kennzahlen,
visualisiert Entwicklungen, begründet Auffälligkeiten und schlägt konkrete
Handlungsempfehlungen vor. **Die KI entscheidet nicht automatisch** –
Empfehlungen werden mit Quelle, Datenqualität, Risiko und einer
Human-in-the-loop-Prüfung dargestellt.

### Problem-Sektion (Inhalt)

- Kleine und mittlere Unternehmen haben viele verteilte Datenquellen (Finance,
  ERP, CRM, HR, Projekte, Data Warehouse), aber wenig Zeit, wenig IT-Personal und
  begrenztes Budget.
- Kennzahlen, Trends, Budgetabweichungen und Ursachen sind dadurch nur langsam und
  mühsam sichtbar.
- Frage des Projekts: *Wie kann KI alle relevanten Unternehmensdatenbanken
  analysieren, Kennzahlen berechnen, Trends erklären und Handlungsempfehlungen für
  das Management vorbereiten – nachvollziehbar und prüfbar?*

### Die drei Fallstudien – Kurzfassung (für die Übersicht)

1. **KI-gestütztes Controlling-Cockpit** *(Hauptfall / Live-Demo)* — Bündelt
   Finanz-, Vertriebs- und Projektdaten zu einem gemeinsamen Steuerungsbild mit
   Kennzahlen, Trends und begründeten Empfehlungen.
2. **Budget- und Kostenabweichungsanalyse** — Vergleicht Plan- und Ist-Werte,
   erkennt auffällige Kostenstellen und priorisiert Abweichungen nach finanzieller
   Wirkung.
3. **Forecasting und Frühwarnsystem** — Nutzt historische Daten, um Umsatz, Kosten
   und Liquidität zu prognostizieren und kritische Entwicklungen früh sichtbar zu
   machen.

### Fallstudie 1 – KI-gestütztes Controlling-Cockpit (Detail)

- **Worum geht es:** Die KI analysiert alle relevanten Unternehmensdatenbanken
  (Finance DB, ERP, CRM, HR, Projekt DB, Data Warehouse) und verdichtet sie zu
  einem prüfbaren Steuerungsbild. Hauptfall der Präsentation und Live-Demo.
- **Wie man es macht:**
  1. Relevante Datenquellen anbinden bzw. als Views bereitstellen.
  2. Daten in einem Data Warehouse zusammenführen (ETL/Aggregation).
  3. Kennzahlen-Service berechnet aussagekräftige KPIs: Umsatzwachstum (YoY),
     EBIT-Marge, Rohertragsmarge, Free Cashflow, Cash Conversion Cycle und
     Liquiditätsgrad 2. Grades (Quick Ratio).
  4. KI-Service (über gesicherten API-Proxy) erkennt Trends/Abweichungen,
     formuliert Ursachenhypothesen und Empfehlungen.
  5. Cockpit-Frontend zeigt KPIs, Trends, Findings, Risiko und Datenqualität.
  6. Mensch prüft die Empfehlung vor der Umsetzung (Human-in-the-loop).
- **Was man braucht:** Zugriff auf Unternehmensdatenbanken bzw. saubere Views,
  ETL/Data-Warehouse-Schicht, definierte Kennzahlen-Logik, eine KI-Schnittstelle
  über einen gesicherten Proxy (kein API-Key im Frontend), ein Dashboard-Frontend,
  ein Rollen- und Rechtekonzept.
- **Probleme / Herausforderungen:** heterogene Datenquellen und Formate,
  schwankende Datenqualität, verspätete Buchungen, einheitliche KPI-Definitionen,
  Zusammenführung über Systemgrenzen.
- **Risiken + Gegenmaßnahmen:** Fehlinterpretation/Halluzination der KI →
  Begründung mit Quelle und Datenqualität sichtbar machen; falsche Empfehlung →
  verpflichtende menschliche Freigabe; Datenschutz → keine sensiblen Daten ohne
  Rechtsgrundlage, Rollenrechte, Logging/Audit Trail; Über-Vertrauen → KI klar als
  Assistenz, nicht als Entscheider darstellen.
- **Aufwand:** mittel bis hoch. Grobe Größenordnung: belastbarer MVP ca. 4–6
  Wochen; die Demo-Oberfläche selbst ca. 1–2 Tage (statische Demo-Daten).
- **Fazit:** Bester Hauptfall, weil er technische Datenintegration,
  betriebswirtschaftliche Kennzahlen, KI-Erklärbarkeit, Risiko-/Qualitätsbewertung
  und Human-in-the-loop sichtbar **in einem** Use Case verbindet.

### Fallstudie 2 – Budget- und Kostenabweichungsanalyse (Detail)

- **Worum geht es:** Plan-Ist-Vergleich, der auffällige Kostenstellen erkennt und
  Abweichungen nach finanzieller Wirkung priorisiert. Ersetzt keine fachliche
  Budgetentscheidung.
- **Wie man es macht:**
  1. Plan-/Budgetwerte und Ist-Werte aus Finance DB und Projekt DB beziehen.
  2. Soll-Ist-Vergleich je Kostenstelle berechnen.
  3. Kostenstellen nach Höhe und finanzieller Wirkung der Abweichung ranken.
  4. KI bildet Ursachenhypothesen und schlägt priorisierte Prüfschritte vor.
- **Was man braucht:** vollständige Plan-/Budgetdaten, sauber gepflegte
  Kostenstellen, Ist-Buchungen, definierte Schwellwerte, KI für
  Ursachenhypothesen.
- **Probleme / Herausforderungen:** unvollständige oder veraltete Plandaten,
  falsche Kostenstellen-Zuordnung, verspätete Buchungen verzerren das Bild.
- **Risiken + Gegenmaßnahmen:** falsche Priorisierung/Fehlalarme → Schwellwerte und
  menschliche Prüfung; Ursachenhypothesen als *Hypothese* kennzeichnen, nicht als
  Fakt.
- **Aufwand:** niedrig bis mittel; gute Ergänzung mit schnellem Mehrwert, wenn die
  Budgetdaten bereits strukturiert vorliegen.
- **Fazit:** Liefert schnell Klarheit, wo Budgets aus dem Rahmen laufen, und
  fokussiert die knappe Prüfzeit auf die wirkungsvollsten Abweichungen.

### Fallstudie 3 – Forecasting und Frühwarnsystem (Detail)

- **Worum geht es:** Prognose von Umsatz, Kosten und Liquidität aus historischen
  Daten, mit Szenarien (stabil, kritisch, Wachstum) und frühen Warnsignalen.
- **Wie man es macht:**
  1. Historische Zeitreihen aus dem Data Warehouse bereitstellen.
  2. Prognosemodell auf Umsatz, Kosten und Liquidität anwenden.
  3. Szenarien (stabil / kritisch / Wachstum) ableiten.
  4. Schwellwerte definieren, ab denen Frühwarnsignale ausgelöst werden.
  5. Steuerungsempfehlungen je Szenario formulieren.
- **Was man braucht:** ausreichend lange, saubere Datenhistorie, ein
  Prognose-/Zeitreihenmodell, Szenario- und Schwellwertlogik, eine verständliche
  Visualisierung.
- **Probleme / Herausforderungen:** es braucht genug Historie, Saisonalität und
  Sondereffekte verzerren Prognosen, Prognosegüte ist nie sicher.
- **Risiken + Gegenmaßnahmen:** Fehlprognose und Scheingenauigkeit → Unsicherheit
  bzw. Spannbreiten ausweisen, mehrere Szenarien statt einer „Punktzahl",
  menschliche Einordnung.
- **Aufwand:** mittel; abhängig von Datenqualität und Prognosetiefe.
- **Fazit:** Ermöglicht vorausschauende Steuerung, indem Engpässe und Kostenrisiken
  sichtbar werden, **bevor** sie akut sind.

### Datenquellen (für Architektur- und Cockpit-Sektion)

Sechs gedachte Unternehmensdatenbanken mit Demo-Datenqualität:

| Quelle | Inhalt | Datenqualität |
| --- | --- | --- |
| Finance DB | GuV, Cashflow, Buchungen, Zahlungsziele | 96% |
| ERP | Einkauf, Bestand, Lieferanten, Beschaffungskosten | 91% |
| CRM | Umsatzpipeline, Kunden, Aufträge, Abschlusswahrscheinlichkeiten | 89% |
| HR | Personalkosten, Kapazitäten, Auslastung | 94% |
| Projekt DB | Budgets, Laufzeiten, Kostenstellen, Projektfortschritt | 87% |
| Data Warehouse | historische Kennzahlen, aggregierte Monatswerte, Vergleichsperioden | 98% |

### Live-Cockpit – Szenario-Daten (genau diese Werte verwenden)

Drei umschaltbare Szenarien. Jede KPI hat einen Trend, eine kurze Erklärung
(warum sie steuerungsrelevant ist) und eine Tonalität (`good`/`warn`/`bad`) für
die Farbgebung. Verwende bewusst **aussagekräftige Controlling-Kennzahlen** mit
Entscheidungsrelevanz (Wachstum, Profitabilität, Cash, Liquidität) statt
beliebiger Werte. Die Chart-Werte sind normalisierte Indexpunkte (0–100, Basis =
Startmonat) für die Linien Umsatz, Kosten, Liquidität über 6 Monate.

Erkläre jede Kennzahl mit einem kurzen Hinweis, z. B.:
- **Umsatzwachstum (YoY):** Wachstum gegenüber Vorjahr, gesund ab ca. +5 %.
- **EBIT-Marge:** operativer Gewinn je Umsatz-Euro – Ertragskraft des Kerngeschäfts.
- **Rohertragsmarge:** Umsatzanteil nach Wareneinsatz – Basis aller Margen.
- **Free Cashflow:** frei verfügbarer Mittelzufluss – echte, schwer manipulierbare Finanzkraft.
- **Cash Conversion Cycle:** Tage der Kapitalbindung (Lager + Forderungen − Verbindlichkeiten), kürzer ist besser.
- **Liquiditätsgrad 2. Grades (Quick Ratio):** kurzfristige Zahlungsfähigkeit ohne Vorräte, gesund ab ca. 100 %.

**Szenario A – „Stabile Entwicklung"** (Risiko: niedrig, Datenqualität: hoch,
95 % der Datensätze plausibel)
- Umsatzwachstum (YoY): +8,4 % (über Zielkorridor, good)
- EBIT-Marge: 12,6 % (+1,3 pp, good)
- Rohertragsmarge: 58,2 % (+0,9 pp, good)
- Free Cashflow: 612 Tsd. € (+7,8 %, good)
- Cash Conversion Cycle: 38 Tage (-3 Tage, good)
- Liquiditätsgrad 2. Grades: 128 % (stabil, good)
- Chart Umsatz: [62, 68, 71, 77, 82, 86]; Kosten: [52, 50, 49, 48, 47, 46];
  Liquidität: [44, 48, 52, 57, 61, 65]
- Findings: „Umsatz wächst über sechs Perioden stabil, die EBIT-Marge zieht leicht
  an." / „Die Rohertragsmarge bleibt durch bessere Einkaufskonditionen hoch." /
  „Free Cashflow und Liquiditätsgrad decken laufende Verpflichtungen sicher ab."
- Empfehlung: „Kurs halten: Einkaufskonditionen weiter sichern und monatlich prüfen,
  ob EBIT-Marge und Free Cashflow stabil bleiben."

**Szenario B – „Kritische Abweichung"** (Risiko: hoch, Datenqualität: mittel,
8 % verspätete Buchungen)
- Umsatzwachstum (YoY): -6,8 % (unter Plan, bad)
- EBIT-Marge: 4,1 % (-5,2 pp, bad)
- Rohertragsmarge: 49,5 % (-4,1 pp, bad)
- Free Cashflow: -180 Tsd. € (negativ, bad)
- Cash Conversion Cycle: 67 Tage (+12 Tage, bad)
- Liquiditätsgrad 2. Grades: 82 % (unter 100 %, bad)
- Chart Umsatz: [72, 69, 65, 58, 54, 49]; Kosten: [48, 51, 57, 63, 69, 74];
  Liquidität: [66, 59, 51, 43, 35, 29]
- Findings: „Sinkender Umsatz trifft auf steigende Kosten – die EBIT-Marge halbiert
  sich." / „Der Cash Conversion Cycle steigt: Kapital ist länger gebunden." /
  „Der Free Cashflow wird negativ, der Liquiditätsgrad fällt unter die 100-%-Marke."
- Empfehlung: „Kostenstellen 410 und 620 sofort prüfen, Zahlungsziele verkürzen und
  den Liquiditätsforecast in der nächsten Steuerungsrunde priorisieren."

**Szenario C – „Wachstum mit Engpass"** (Risiko: mittel, Datenqualität: hoch,
Forecast-Daten vollständig)
- Umsatzwachstum (YoY): +14,2 % (stark, good)
- EBIT-Marge: 9,8 % (-0,4 pp, warn)
- Rohertragsmarge: 55,4 % (-1,2 pp, warn)
- Free Cashflow: 95 Tsd. € (knapp, warn)
- Cash Conversion Cycle: 58 Tage (+9 Tage, warn)
- Liquiditätsgrad 2. Grades: 104 % (knapp über Ziel, warn)
- Chart Umsatz: [58, 64, 70, 79, 86, 92]; Kosten: [46, 48, 51, 56, 61, 64];
  Liquidität: [63, 61, 58, 54, 50, 47]
- Findings: „Starkes Umsatzwachstum bindet Working Capital und drückt den Free
  Cashflow." / „Beschaffungskosten steigen schneller als geplant und belasten die
  Rohertragsmarge." / „Der steigende Cash Conversion Cycle zeigt ein Engpassrisiko
  bei weiterem Wachstum."
- Empfehlung: „Wachstum halten, aber Zahlungsziele und Einkaufskonditionen neu
  verhandeln, bevor zusätzliche Kampagnenbudgets freigegeben werden."

**Cockpit-Interaktion:**
- Drei Szenario-Buttons schalten alle KPIs, das Diagramm, die Findings, die
  Empfehlung sowie Risiko- und Datenqualitätsanzeige gleichzeitig um – mit weichem
  Übergang.
- KPI-Werte zählen beim Wechsel animiert hoch/runter.
- Diagramm zeigt drei Linien (Umsatz blau, Kosten orange, Liquidität grün) mit
  Legende und animiertem Zeichnen der Linien.
- „Analyse ausführen"-Button: kurze Denk-/Lade-Animation (ca. 0,7 s), Statuschip
  wechselt von „bereit" → „analysiert" → „prüfbereit".

### Datenfluss / Architektur (für die Pipeline-Sektion)

Fachlicher Ablauf, gut animiert von links nach rechts darstellen:

```
Unternehmensdatenbanken
  → KI-Analyse
  → Kennzahlenberechnung
  → Trend- und Abweichungserkennung
  → Begründung mit Quellen und Datenqualität
  → Handlungsempfehlung
  → menschliche Prüfung (Human-in-the-loop)
```

Optional zusätzlich die spätere Zielarchitektur andeuten: Unternehmensdatenbanken
→ ETL/Data Warehouse → Kennzahlen-Service → KI-Service über gesicherten
API-Proxy → Erklärung/Risiko/Empfehlung → Cockpit → Human-in-the-loop-Freigabe.

### Governance / Grenzen (Inhalt)

Bewusste Grenzen der Demo klar benennen:
- keine echten Unternehmensdaten
- keine echte Datenbankanbindung
- keine externe KI-API
- keine automatische Entscheidung durch die KI
- keine produktive Datenschutz- oder Rollenfreigabe
- Szenarien und Kennzahlen sind realistische Demo-Daten

Produktive Anforderungen (als Ausblick zeigen): Rollen- und Rechtekonzept,
Datenschutzprüfung, gesicherter API-Key-Schutz, Logging und Audit Trail,
Datenqualitätsprüfungen, klare Verantwortlichkeiten, keine automatischen
Managemententscheidungen.

### Projekt-Fazit & Aufwand (Inhalt)

- Kernbotschaft: KI macht verteilte Unternehmensdaten schnell auswertbar und
  bereitet **prüfbare** Entscheidungen vor – als Assistenz, nicht als Entscheider.
- Aufwandsübersicht als kompakte Vergleichsmatrix der drei Fallstudien:
  - Controlling-Cockpit: Aufwand mittel–hoch, Nutzen hoch, Komplexität hoch
    (Hauptfall).
  - Budget-/Kostenabweichung: Aufwand niedrig–mittel, Nutzen hoch, Komplexität
    mittel.
  - Forecasting/Frühwarnung: Aufwand mittel, Nutzen hoch, Komplexität mittel.
- Ausblick: echte Datenbank-Views/CSV anbinden, echte KI-Schnittstelle über
  gesicherten Proxy, Audit Trail und Rollenrechte, Tests für Szenario- und
  Chart-Darstellung.

### Footer / Stand-Info

- Projekt: „IDP – KI im Unternehmen / KI-Controlling".
- Hinweis „Human-in-the-loop – die KI entscheidet nicht allein."
- Platzhalter für einen QR-Code, der später auf die Live-Demo bzw. das Repository
  zeigt.

## Qualitätskriterien (Definition of Done)

- Alle drei Fallstudien werden **zuerst gemeinsam in der Übersicht angesprochen**
  und **danach jeweils einzeln im Detail** mit allen Pflicht-Blöcken (Worum geht
  es, Wie man es macht, Was man braucht, Probleme, Risiken, Aufwand, Fazit)
  beschrieben.
- Das Live-Cockpit funktioniert interaktiv mit den drei gelieferten Szenarien.
- Die Seite sieht auf einem großen Bildschirm beeindruckend und professionell aus
  und ist am Stand selbsterklärend bedienbar.
- Inhalte stimmen exakt mit den oben gelieferten Daten überein.
- Deutsche Texte verwenden echte Umlaute. Keine internen Arbeitsnotizen im
  sichtbaren Text.
- Code ist sauber, kommentiert an den wichtigen Stellen und ohne externe
  Abhängigkeiten, die einen Server erfordern.

Liefere am Ende die vollständigen Dateien und eine kurze Erklärung, wie man die
Seite startet (z. B. `index.html` öffnen oder per einfachem HTTP-Server).

=== PROMPT ENDE ===
