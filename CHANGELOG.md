# CHANGELOG.md

Alle wichtigen Änderungen am Projekt werden hier kurz protokolliert.

## 2026-06-12

- `website/`: komplett neue Techday-Website „Kara·Cockpit“ (Single-Page,
  responsive, Light/Dark-Theme, interaktives Controlling-Cockpit mit drei
  Szenarien, Prozessfluss, „Mit KI gebaut“-Abschnitt, QR-Code, Screenshots
  unter `website/screenshots/`). Ersetzt die bisherige „KI-Control“-Seite
  inklusive der zuvor gemergten Stände aus PR #1 und #2. Details in
  `website/BUILD-NOTES.md`.
- Repository aufgeräumt: tote Shop-/E-Commerce-Implementierung entfernt, die von
  der aktuellen Controlling-Website nicht mehr referenziert wird. Gelöscht:
  `supabase/` (Auth, Produkte, Checkout, Make-Integration), `make/`,
  `docs/make-scenario.md`, `docs/checkout-account-flow.md`,
  `docs/invoice-template-fields.md`, `tools/create_kara_invoice_template.py`,
  `docs/templates/` (Rechnungsvorlagen) und das stale `docs/handover_next_chat.md`.
- `docs/repository-overview.md`: Struktur an den neuen Stand angepasst.
- Projektlokale Agent-Skills unter `.claude/skills/` ergänzt (bezogen über
  skills.sh): `find-skills` (vercel-labs/skills), `frontend-design`
  (anthropics/skills), `web-design-guidelines` (vercel-labs/agent-skills),
  `ui-ux-pro-max` (nextlevelbuilder), `copywriting` (coreyhaines31/marketingskills),
  `agent-browser` (vercel-labs/agent-browser) und `ai-video-generation`
  (agentspace-so/runcomfy-agent-skills).
- Offen / zu entscheiden: Die Abgabeartefakte in `outputs/` sowie
  `docs/abgabeplan-*`, `docs/präsentation_demo_20min.md`,
  `docs/techday-one-pager.md` und `docs/linkedin-post.md` erzählen weiterhin die
  ältere „Kara AI Operations"-Geschichte (Shop, Support, Rechnungen), während die
  Website ein Controlling-Cockpit zeigt. Narrativ noch nicht angeglichen.

## 2026-06-06

- `website/styles.css`: kompaktere Mobile-Ansicht. Karten-Raster (Problem,
  Funktionen, Governance, Datenfluss, KPI-Karten, Datenbank-Liste,
  Praesentationsschritte) erscheinen auf dem Handy jetzt zweispaltig statt in einer
  langen Einzelspalte, mit kleineren Abstaenden, Mindesthoehen und Ueberschriften,
  damit deutlich weniger gescrollt werden muss. Sehr schmale Geraete (< 380px)
  fallen bei den KPI-Karten auf eine Spalte zurueck. Desktop bleibt unveraendert.

- `website/styles.css`, `website/script.js`: einheitliches, professionelles dunkles
  Farbschema (Slate-Navy mit Indigo/Teal/Amber). Die hellen/weißen Flächen im
  Cockpit (Analyse-Panel, KPI-Karten, Trendkarte, Diagrammbeschreibung) wurden auf
  dunkle, harmonische Flächen umgestellt, sodass keine störende weiße Insel mehr
  entsteht. Die Diagrammlinien sind jetzt eindeutig zuordenbar: Legende als
  Pillen mit farbigen Linien-Swatches (Umsatz/Kosten/Liquidität) plus beschriftete
  Achsen und Beschreibung. Kopfzeile auf dem Handy korrigiert (kein Verrutschen des
  Demo-Buttons mehr durch eine leere Navigationsspalte) und `overflow-x: clip`
  gegen horizontales Verschieben ergänzt.
- `website/script.js`, `website/index.html`, `website/styles.css`: Controlling-Cockpit
  auf aussagekräftige Kennzahlen umgestellt (Umsatzwachstum YoY, EBIT-Marge,
  Rohertragsmarge, Free Cashflow, Cash Conversion Cycle, Liquiditätsgrad 2. Grades),
  jeweils mit kurzer Erklärung pro Kennzahl. Das Trenddiagramm hat jetzt eine
  Einführung, eine farbige Legende, beschriftete Achsen (Index-Skala und Monate),
  Datenpunkte und eine Szenario-Beschreibung. Mobile Ansicht optimiert: einklappbares
  Navigationsmenü (Hamburger), größere Touch-Flächen, vollbreite Buttons und
  responsives, lesbares Diagramm. Szenario- und Analyse-Buttons funktionieren auf
  Handy und Laptop (per Tap und Klick geprüft).
- `docs/prompt-zweite-webseite.md`: Kennzahlen und Szenario-Daten an die neuen,
  aussagekräftigen Controlling-KPIs angeglichen.

- `docs/prompt-zweite-webseite.md`: neuer, vollständiger Prompt zur Erzeugung
  einer zweiten, interaktiven Präsentations-Website für den Techday-Stand. Der
  Prompt gibt eine moderne Control-Room-UI/UX vor, fordert zuerst die Übersicht
  aller drei Fallstudien und danach jede Fallstudie einzeln im Detail (Worum geht
  es, Wie man es macht, Was man braucht, Probleme, Risiken, Aufwand, Fazit) und
  enthält alle verbindlichen Demo-Inhalte (Datenquellen, Szenario-Daten,
  Datenfluss, Governance, Aufwandsübersicht).
## 2026-06-04

- `website/index.html` und `website/script.js`: sichtbare Copy professioneller
  formuliert. Interne Planhinweise wurden entfernt. Die Sektion heißt jetzt
  "KI-Einsatzfelder" und beschreibt fachliche Mehrwerte statt Arbeitsnotizen.
- `memory.md`: Projektregel ergänzt, dass sichtbare Seitentexte keine internen
  Planhinweise oder Meta-Überschriften enthalten dürfen.
- `website/index.html` und `website/styles.css`: Startbereich und
  Präsentationsoberfläche auf einen modernen dunklen Control-Room-Look
  umgestellt. Der Hero zeigt jetzt direkt die IDP-Logik aus Datenquellen,
  KPI-Zusammenfassung, Analysephase, KI-Begründung und menschlicher Freigabe.
- Designentscheidung aktualisiert: Fokus auf moderne Dashboard-UX,
  progressive Offenlegung, schnelle KPI-Erfassung, sichtbare Datenpipeline und
  klare Handlungslogik statt dekorativer Standardkarten.
- `rohitg00/agentmemory`: acht AgentMemory-Skills lokal installiert
  (`remember`, `recall`, `recap`, `handoff`, `forget`, `commit-context`,
  `commit-history`, `session-history`) und AgentMemory als MCP-Server in
  `~/.codex/config.toml` vorbereitet.
- Fachliche Neuausrichtung: Der Kara-Shop und die E-Commerce-Ausrichtung werden
  nicht mehr verwendet. Der MVP ist jetzt ein technischer IDP-Demonstrator für
  KI im Controlling und in der Unternehmenssteuerung.
- `website/index.html`: komplett als interaktive Präsentationsoberfläche neu
  aufgebaut. Enthält jetzt Problemstellung, drei KI-Fallbeispiele,
  detailliertes Controlling-Cockpit, Datenfluss, Funktionen, Governance und
  Präsentationsfazit.
- `website/script.js`: alte Supabase-, Shop-, Account-, Checkout- und
  Warenkorb-Logik entfernt. Neue Demo-Daten für Fallbeispiele, Datenquellen,
  Controlling-Szenarien, Kennzahlen, Trenddiagramm, KI-Findings und Empfehlungen
  ergänzt.
- `website/styles.css`: Design vollständig auf moderne slide-artige
  Dashboard-/Produkt-UI umgestellt, inspiriert von Mobbin, Refero und Dribbble.
- `README.md`, `memory.md`, `website/README.md`, `AGENTS.md` und relevante
  Dateien in `docs/`: neuen Fokus, drei Fallbeispiele, zentrales Cockpit,
  Datenquellen, Funktionen, Ablauf, Datenschutzgrenzen und Präsentationslogik
  dokumentiert.
- `website/index.html`: Navigation und Seitentitel wieder auf `Kara AI Operations`
  fokussiert. Das KI-Cockpit ist visuell der erste Einstieg, der Shop bleibt als
  Datenquelle darunter erhalten.
- `website/styles.css`: Cockpit an produktnahe SaaS-/Dashboard-Referenzen aus
  Mobbin, Refero und Dribbble angelehnt. Neue App-Fläche mit KPI-Zeile,
  dunkler Aufgaben-Rail, Statusfarben, Assistentenpanel und responsivem
  Mobile-Layout ergänzt.
- `website/script.js`: Aufgabenstatus in der Aufgabenliste mit `data-status`
  ausgabefähig gemacht und Fallüberschrift semantisch an das Panel angepasst.
- `README.md`, `memory.md`, `website/README.md` und
  `docs/ki-cockpit-dokumentation.md`: UI-Entscheidung und Annahme zur
  referenzbasierten, nicht 1:1 kopierten Umsetzung dokumentiert.

## 2026-06-03

- `website/index.html`: Startseite auf einen modernen Kara Premium-Streetwear-Shop
  umgebaut. Shop-Hero, Peso-orientierte Topbar, New-In-Bereich, Kategorien,
  Produktgrid, Lookbook und Atelier-Bereich stehen jetzt vor dem KI-Cockpit.
- `website/styles.css`: Visuelles System auf Schwarz/Weiß, dünne Linien,
  große Fashion-Bilder und eckige Shop-Controls umgestellt. Beige/Grün-Optik
  entfernt und Mobile-Layout neu geprüft.
- `website/script.js`: Sortiment auf 20 Fashion-Produkte erweitert,
  Produktkarten mit Badge/Wishlist-Anmutung ergänzt und Filter-Reihenfolge
  an Shop-Kategorien angepasst.
- `supabase/seed_products.sql`: Produkt-Seed an das erweiterte Sortiment
  angepasst, damit Supabase/Checkout-Daten konsistent bleiben können.

## 2026-06-02

- GitHub-Pages-Link im `README.md` ergänzt und `website/.nojekyll` vorbereitet,
  damit die Website aus dem Ordner `website/` über GitHub Pages geöffnet werden
  kann.
- Arbeitsregel ergänzt: Änderungen sollen künftig direkt mit GitHub
  synchronisiert werden. Da lokales `git push` in der Codex-Umgebung nicht
  zuverlässig funktioniert, wird für Textdateien der GitHub-Connector als
  direkter Commit-Weg genutzt.
- Word-Dokumentation vollständig überarbeitet:
  - Aufbau jetzt im Stil einer wissenschaftlichen Hochschularbeit mit Deckblatt,
    Abstract, Management Summary, Inhaltsverzeichnis, Abbildungs-,
    Tabellen- und Abkürzungsverzeichnis.
  - Formatierung auf Word-Formatvorlagen, Times New Roman, 1,5 Zeilenabstand
    und wissenschaftliche Kapitelstruktur umgestellt.
  - Diskussion, Limitationen, Handlungsempfehlungen und Ausblick ergänzt.
  - Inhaltsverzeichnis und Felder über Microsoft Word aktualisiert.
  - Umfang über Word geprüft: 26 Seiten und 4.885 Wörter.
  - Umlaute direkt aus der DOCX geprüft: keine typischen Encoding-Fehler oder Ersatzzeichen.
- `tools/build_idp_docx.py` als reproduzierbarer Generator für die
  wissenschaftliche Word-Dokumentation neu aufgebaut.

## 2026-06-01

- IDP fachlich von reinem Shop-/Rechnungsprozess auf "KI im Unternehmen"
  neu ausgerichtet.
- `website/index.html`: Neues `Kara AI Operations` Cockpit als primären
  Einstieg ergänzt.
- `website/script.js`: Lokale KI-Demo-Daten, Aufgaben, Supportfälle,
  Knowledge Base, simulierte Claude/Codex-Vorschläge und Freigabe-/Ablehnlogik
  ergänzt.
- `website/styles.css`: Responsives Operations-Cockpit mit KPI-Bereich,
  Aufgabenliste, Fallansicht und KI-Assistentenpanel gestaltet.
- `README.md`, `docs/use-case.md`, `docs/architecture.md` und `memory.md`
  auf den neuen KI-Demonstrator aktualisiert.
- `docs/ki-cockpit-dokumentation.md` als zentrale Projektdokumentation
  ergänzt.
- Deutsche Texte auf echte Umlaute umgestellt und die Regel in `AGENTS.md`
  festgehalten.
- Lokale KI-Demo-Daten versioniert, damit alte Browserdaten mit
  Ersatzschreibweisen automatisch ersetzt werden.
- Abgabeplan für die ursprüngliche IDP-Aufgabenstellung ergänzt:
  20-Seiten-Word-Dokument, 20-Minuten-Präsentation, LinkedIn-Beitrag und
  Techday-/WI-Tag-Material.
- `PLAN.md` als strukturierter Schritt-für-Schritt-Plan angelegt und
  abgearbeitet.
- `outputs/IDP_KI_kleine_Unternehmen_Dokumentation.docx` als Word-Entwurf für
  die IDP-Dokumentation erzeugt.
- `outputs/IDP_KI_kleine_Unternehmen_Präsentation.pptx` als editierbare
  12-Folien-Präsentation für den 20-Minuten-Vortrag erzeugt.
- LinkedIn-Beitrag, Techday-One-Pager und How-To-Leitfaden final im
  `docs/`-Ordner ergänzt.

## 2026-05-21

- `demo_password`-Spalte in `customers` ergänzt (Klartext, nur für Demo).
- `supabase/migration_demo_password.sql` angelegt – einmalig im SQL Editor ausführen.
- `website/script.js`: Beim Registrieren wird `demo_password` mitgespeichert.

## 2026-05-19 (Session 2)

- Make-Szenario von "IDP 1" zu "Kara – Bestellbestätigung & Rechnungserstellung"
  umbenannt und vollständig auf Kara-Branding aktualisiert.
- E-Mail-Template im Make-Szenario: "Papierpfad Atelier" → "KARA Studio",
  minimalistisches schwarzes Design passend zum Shop.
- Rechnungsnummer-Prefix im Szenario von INV- auf RE- korrigiert
  (passend zu kara_invoices RE-2026-... Format).
- `make/payload-example.json` auf Kara-Daten aktualisiert
  (order_number KA-2026-..., Kara-Produkte, neue Preise).
- `docs/use-case.md` von Papierpfad auf Kara umgeschrieben.
- `supabase/migration_make_integration.sql` neu angelegt:
  - pg_net Extension aktivieren
  - RLS-Policies für Website (anon): INSERT customers, addresses, orders,
    order_items; SELECT products, invoices
  - RLS-Policies für Make (anon): INSERT invoices, UPDATE orders status
  - Trigger-Funktion `notify_make_order_paid` + Trigger auf orders-Tabelle
    (feuert bei status = 'paid', sendet JSON-Payload an Make-Webhook)

## 2026-05-19 (Session 1)

- Make-Webhook "Papierpfad - Neue Bestellung (paid)" erstellt:
  URL: https://hook.eu1.make.com/vm3pwrsejd6kr5guweytn17da2h237v7
- Make-Szenario "IDP 1" angelegt mit 4 Modulen:
  1. Custom Webhook (Trigger)
  2. HTTP POST → Supabase invoices
  3. HTTP PATCH → Supabase orders status
  4. Gmail → Bestellbestätigungs-E-Mail

## 2026-05-19

- Checkout auf Accountdaten-Flow umgebaut:
  - `Zur Kasse` führt angemeldete Kunden in einen eigenen Kassenbereich
  - gespeicherte Accountdaten werden sichtbar übernommen
  - altes Checkout-Dateneingabeformular entfernt
  - Soll-Verhalten in `docs/checkout-account-flow.md` dokumentiert
- Account-Dropdown für angemeldete Kunden ergänzt:
  - persönliche Daten lassen sich nach Login anzeigen und bearbeiten
  - gespeicherte Daten werden für den Checkout wiederverwendet
  - Supabase-Auth-Migration um UPDATE-Rechte und eigene Adress-Policies
    erweitert
- Käuferfluss vereinfacht:
  - `website/review.html` und `website/review.js` entfernt
  - Checkout erzeugt jetzt direkt eine gesendete Demo-E-Mail in
    `kara_emails`
  - Rechnungen erhalten im Prototyp direkt den Status `sent`
  - Erfolgsdialog verweist nicht mehr auf eine Rechnungsfreigabe
- Hero-Bild erneut ersetzt und höher gesetzt, damit Gesichter und Kleidung
  sichtbar bleiben.
- Repository von `origin/main` aktualisiert:
  - letzter Stand nach Pull: `1b866fc`
  - geändert wurden `website/README.md`, `website/index.html`,
    `website/review.html`, `website/script.js`, `website/review.js` und
    `website/styles.css`
- Website-Prototyp wurde fachlich und visuell von `Papierpfad Atelier` zu
  `Kara`, einem fiktiven Luxury-Streetwear-Shop, umgebaut.
- Produktkatalog wurde stark erweitert.
- Dokumentationsstruktur nach dem Vorbild von `HamidK193/Wifi2` angelegt.

## 2026-05-18

- Erstes Repository-Setup gelesen und eingeordnet.
