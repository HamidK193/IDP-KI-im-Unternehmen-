# CHANGELOG.md

Alle wichtigen Aenderungen am Projekt werden hier kurz protokolliert.

## 2026-05-21

- `demo_password`-Spalte in `customers` ergaenzt (Klartext, nur fuer Demo).
- `supabase/migration_demo_password.sql` angelegt – einmalig im SQL Editor ausfuehren.
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
  - RLS-Policies fuer Website (anon): INSERT customers, addresses, orders,
    order_items; SELECT products, invoices
  - RLS-Policies fuer Make (anon): INSERT invoices, UPDATE orders status
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
  - `Zur Kasse` fuehrt angemeldete Kunden in einen eigenen Kassenbereich
  - gespeicherte Accountdaten werden sichtbar uebernommen
  - altes Checkout-Dateneingabeformular entfernt
  - Soll-Verhalten in `docs/checkout-account-flow.md` dokumentiert
- Account-Dropdown fuer angemeldete Kunden ergaenzt:
  - persoenliche Daten lassen sich nach Login anzeigen und bearbeiten
  - gespeicherte Daten werden fuer den Checkout wiederverwendet
  - Supabase-Auth-Migration um UPDATE-Rechte und eigene Adress-Policies
    erweitert
- Kaeuferfluss vereinfacht:
  - `website/review.html` und `website/review.js` entfernt
  - Checkout erzeugt jetzt direkt eine gesendete Demo-E-Mail in
    `kara_emails`
  - Rechnungen erhalten im Prototyp direkt den Status `sent`
  - Erfolgsdialog verweist nicht mehr auf eine Rechnungsfreigabe
- Hero-Bild erneut ersetzt und hoeher gesetzt, damit Gesichter und Kleidung
  sichtbar bleiben.
- Repository von `origin/main` aktualisiert:
  - letzter Stand nach Pull: `1b866fc`
  - geaendert wurden `website/README.md`, `website/index.html`,
    `website/review.html`, `website/script.js`, `website/review.js` und
    `website/styles.css`
- Website-Prototyp wurde fachlich und visuell von `Papierpfad Atelier` zu
  `Kara`, einem fiktiven Luxury-Streetwear-Shop, umgebaut.
- Produktkatalog wurde stark erweitert.
- Dokumentationsstruktur nach dem Vorbild von `HamidK193/Wifi2` angelegt.

## 2026-05-18

- Erstes Repository-Setup gelesen und eingeordnet.
