# AGENTS.md

## Zweck

Diese Datei enthaelt allgemeine Arbeitsregeln und den verbindlichen Projektplan
fuer dieses Repository.

## Allgemeine Arbeitsregeln

- Halte den Code einfach, lesbar und gut erweiterbar.
- Pflege `README.md`, `memory.md` und `CHANGELOG.md` nach groesseren Schritten.
- Dokumentiere fachliche Entscheidungen in `docs/`, damit der Projektstand auch
  in einem neuen Chat schnell verstanden werden kann.
- Vermeide Overengineering. Das Projekt ist ein kleiner IDP-MVP.
- Veraendere vorhandene Demo-Daten nur bewusst und dokumentiere den Grund.
- Halte Website-Prototyp, Supabase-Schema, Make-Konzept und Rechnungsprozess
  fachlich synchron.
- Preise werden fachlich in Cent gedacht; der aktuelle Website-Prototyp nutzt
  fuer die Demo noch Dezimalwerte in JavaScript.
- Der lokale Website-Prototyp speichert Daten aktuell in `localStorage`.

## Verbindlicher Projektplan

### Aktueller MVP

- moderner Shop-Prototyp fuer das fiktive Unternehmen `Kara`
- Produktkatalog mit Kategorien und Filterung
- Warenkorb mit Mengensteuerung
- Checkout mit Kundendaten und Adresse
- lokale Speicherung von Kunden, Bestellungen und Rechnungsentwuerfen
- direkte Bestell- und Rechnungsbestaetigung nach dem Checkout
- geplantes Supabase-Datenmodell fuer Kunden, Adressen, Produkte,
  Bestellungen, Positionen und Rechnungen
- Make-Szenario als Zielprozess zwischen bezahlter Bestellung und
  Rechnungsentwurf dokumentiert
- Rechnungsfelder fuer eine Word- oder PDF-Vorlage dokumentiert

### Relevante Quelldateien

- `website/index.html`
- `website/script.js`
- `website/styles.css`
- `supabase/schema.sql`
- `make/payload-example.json`
- `docs/architecture.md`
- `docs/data-model.md`
- `docs/make-scenario.md`
- `docs/invoice-template-fields.md`
- `docs/repository-overview.md`
- `docs/use-case.md`

### Aktuelle Arbeitsschritte

1. Shop-Prototyp lokal stabil halten.
2. Dokumentation nach jedem groesseren Schritt aktualisieren.
3. Supabase-Projekt vorbereiten und Schema einspielen.
4. Produkte aus Supabase laden.
5. Checkout-Bestellungen in Supabase schreiben.
6. Make-Szenario an bezahlte Bestellungen anbinden.
7. Rechnung aus Vorlage erzeugen.
8. Rechnungsdatensatz in Supabase speichern.
9. Bestell- und Rechnungs-E-Mail automatisiert versenden.
10. Versandstatus nachvollziehbar speichern.

### Spaetere Erweiterungen

- PDF- oder Word-Rechnungsvorlage als Datei im Prozess anbinden
- echte E-Mail-Versandstrecke ueber Make oder Backend anbinden
- Supabase Row Level Security Policies konkretisieren
- Produkt- und Bestelldaten seedbar machen
- Tests fuer Summenberechnung, Checkout und Rechnungsstatus ergaenzen
- Deployment der statischen Website vorbereiten

## Handover Bei Grossem Kontext

Wenn der Kontext zu gross wird oder ein Agent die Arbeit an einen naechsten
Agenten uebergibt, muss ein kompaktes, aber vollstaendiges Handover erstellt
werden.

### Immer Einbeziehen

- `README.md`
- `AGENTS.md`
- `memory.md`
- `CHANGELOG.md`
- relevante Dateien in `website/`
- relevante Dateien in `supabase/`, `make/` und `docs/`
- offene To-dos, Fehler oder Blocker

### Handover-Regeln

- Das Handover soll kurz, klar und konkret sein.
- Bereits getroffene Entscheidungen deutlich nennen.
- Offene Aufgaben in sinnvoller Reihenfolge auffuehren.
- Wichtige Dateipfade immer explizit nennen.
- Wenn externe Dienste oder Zugangsdaten fehlen, das klar vermerken.
