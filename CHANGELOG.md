# CHANGELOG.md

Alle wichtigen Änderungen am Projekt werden hier kurz protokolliert.

## 2026-06-06

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
