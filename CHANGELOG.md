# CHANGELOG.md

Alle wichtigen Änderungen am Projekt werden hier kurz protokolliert.

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
