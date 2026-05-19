# memory.md

## Projektgedaechtnis

### Projekt

- Repository: `IDP-KI-im-Unternehmen-`
- Thema: IDP-Demonstrator fuer einen automatisierten Bestell- und
  Rechnungsprozess
- Aktueller Shop-Kontext: `Kara`, fiktiver Luxury-Streetwear-Shop
- Sprache/Technik aktuell:
  - statische Website mit HTML, CSS und JavaScript
  - Supabase-Schema als SQL-Datei
  - Make-Szenario als dokumentierter Zielprozess

### Aktueller Stand

- Der lokale Branch `main` ist nach dem Pull vom 2026-05-19 auf
  `origin/main`.
- Letzter bekannter Commit nach Pull: `1b866fc`.
- Die Website liegt in `website/`.
- Einstieg Shop: `website/index.html`.
- Die Website speichert Demo-Daten aktuell im Browser-`localStorage`.
- Der Storage-Prefix ist `kara`.
- Relevante Storage-Collections:
  - `kara_cart`
  - `kara_customers`
  - `kara_orders`
  - `kara_invoices`
  - `kara_emails`
- Der Produktkatalog ist in `website/script.js` als JavaScript-Array
  hinterlegt.
- Produkte haben `sku`, `name`, `category`, `description`, `netPrice`,
  `vatRate` und `image`.
- Der Warenkorb berechnet:
  - Zwischensumme netto
  - Versand netto
  - Umsatzsteuer
  - Gesamtbetrag brutto
- Nach dem Checkout wird eine Demo-E-Mail mit Status `sent` in
  `kara_emails` gespeichert.
- Rechnungen erhalten im Shop-Prototyp direkt den Status `sent`.
- Angemeldete Kunden haben ein Account-Dropdown mit bearbeitbaren
  persoenlichen Daten. Diese Daten werden im Checkout automatisch
  vorausgefuellt.
- Das Supabase-Schema liegt in `supabase/schema.sql`.
- Geplante Tabellen:
  - `customers`
  - `addresses`
  - `products`
  - `orders`
  - `order_items`
  - `invoices`
- RLS wird im Schema fuer alle Tabellen aktiviert, konkrete Policies fehlen
  noch.
- Das Make-Konzept liegt in `docs/make-scenario.md`.
- Ein Beispielpayload liegt in `make/payload-example.json`.

### Wichtige fachliche Entscheidungen

- Der aktuelle Website-Prototyp ist ein Demo-Frontend, noch keine echte
  Backend-Integration.
- Supabase ist als operative Datenbasis geplant.
- Make soll den Prozess nach einer bezahlten Bestellung orchestrieren.
- Eine Rechnung wird als eigener Datensatz modelliert.
- Bestellpositionen sollen Preis-Snapshots speichern.
- Kunden und Adressen werden getrennt modelliert.
- Rechnungen sollen nach dem Kauf direkt per E-Mail versendet werden.

### Aktuelle Ziele

- Dokumentation auf dem Stand der Website halten.
- Supabase-Anbindung als naechsten technischen Schwerpunkt vorbereiten.
- Produktdaten aus dem Hardcode in eine Datenquelle ueberfuehren.
- Checkout so umbauen, dass Kunden, Adressen, Bestellungen und Positionen in
  Supabase geschrieben werden.
- Make-Szenario an bezahlte Bestellungen anbinden.
- Rechnung real erzeugen und per E-Mail versenden.
- echten E-Mail-Versand ueber Make oder Backend anbinden.

### Bekannte offene Punkte

- Supabase ist noch nicht in die Website integriert.
- Es gibt noch keine konkreten RLS-Policies.
- Es gibt noch keine Seed-Daten fuer Produkte.
- Es gibt noch keine automatisierten Tests.
- Es gibt noch keine echte Word- oder PDF-Rechnungsvorlage im Repository.
- Das Beispielpayload passt fachlich noch zum alten Papierpfad-Use-Case und
  sollte fuer Kara aktualisiert werden.
- Einige Texte in den frisch gepullten Website-Dateien koennen je nach
  Editor/Terminal als Zeichenkodierungs-Mojibake erscheinen; vor groesseren
  Textkorrekturen sollte die Datei mit UTF-8 geprueft werden.

### Spaetere Erweiterungen

- E-Mail-Templates fuer Bestellbestaetigung und Rechnung.
- Produktpflege oder Produkt-Seeds ueber Supabase.
- Statushistorie fuer Bestellungen und Rechnungen.
- Export fuer Excel-Pruefliste.
- Deployment der Website.
- Kleine Test-Suite fuer Berechnungen und Statuswechsel.
