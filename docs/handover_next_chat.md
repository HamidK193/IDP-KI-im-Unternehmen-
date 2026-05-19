# Handover fuer den naechsten Chat

## Projekt

- Repository: `IDP-KI-im-Unternehmen-`
- Thema: IDP-Demonstrator fuer einen automatisierten Bestell- und
  Rechnungsprozess
- Aktueller Branch: `main`
- Letzter bekannter Commit nach Pull: `1b866fc`
- Aktueller Website-Kontext: `Kara`, fiktiver Luxury-Streetwear-Shop

## Wichtigste Projektidee

Ein Shop nimmt Bestellungen entgegen. Die operativen Daten sollen in Supabase
gespeichert werden. Danach soll Make automatisch eine Rechnung aus einer
Vorlage erzeugen und die Bestell- bzw. Rechnungs-E-Mail direkt versenden.

Zielprozess:

```text
Website-Kauf -> Supabase -> Make -> Word/PDF-Rechnung -> E-Mail-Versand -> Kunde
```

## Relevante Dateien zuerst lesen

1. `AGENTS.md`
2. `README.md`
3. `memory.md`
4. `CHANGELOG.md`
5. `docs/repository-overview.md`
6. `docs/architecture.md`
7. `docs/data-model.md`
8. `docs/make-scenario.md`
9. `docs/invoice-template-fields.md`

## Zentrale Code-Dateien

- `website/index.html`
  - Shop, Startseite, Warenkorb, Checkout-Dialog und Erfolgsdialog
- `website/script.js`
  - Produktdaten, Filter, Warenkorb, Checkout, lokale Speicherung
- `website/styles.css`
  - kompletter visueller Aufbau der Shop- und Review-Seiten
- `supabase/schema.sql`
  - geplantes Datenmodell fuer den spaeteren Backend-Stand
- `make/payload-example.json`
  - Beispielpayload fuer Automatisierungsdaten

## Aktueller App-Stand

### Shop

- Luxus-Streetwear-Shop fuer `Kara`
- Produktkatalog mit Kategorien und Produktbildern
- Filter nach Kategorie
- Warenkorb mit Mengensteuerung
- Checkout mit Kundendaten und Adresse
- Bestellung wird lokal im Browser gespeichert

### E-Mail-Demo

- Checkout speichert eine gesendete Demo-E-Mail in `kara_emails`
- Rechnungen werden im Prototyp direkt auf `sent` gesetzt
- der Kunde wird nach dem Kauf nicht auf eine Freigabeseite geschickt

### Datenhaltung

- aktuell nur `localStorage`
- geplantes Ziel: Supabase

## Wichtige technische Entscheidungen

- Der aktuelle Prototyp soll klein und kursgerecht bleiben.
- Die Website ist bewusst ohne Build-System gehalten.
- Supabase-Schema und Make-Dokumentation bilden den Zielprozess ab.
- Rechnungsdatensatz und Bestellung sind getrennte Konzepte.

## Bekannte offene Probleme / naechste sinnvolle Aufgaben

### 1. Supabase-Anbindung

- Produkte aus Supabase laden.
- Kunden und Adressen in Supabase schreiben.
- Bestellungen und Bestellpositionen in Supabase schreiben.
- Rechnungen aus Supabase lesen und aktualisieren.

### 2. Dokumente aktualisieren

- `make/payload-example.json` noch auf Kara anpassen.
- `docs/use-case.md` noch von Papierpfad auf Kara aktualisieren.
- `docs/invoice-template-fields.md` bei konkreter Vorlage erweitern.

### 3. Qualitaet und Tests

- Summenberechnung testbar auslagern.
- E-Mail-Status und Checkout-Erfolg absichern.
- Optional kleinen Smoke-Test fuer die statische Website ergaenzen.

## Handover-Prompt fuer den naechsten Agenten

```text
Arbeite im Repository `IDP-KI-im-Unternehmen-`.

Lies zuerst:
1. AGENTS.md
2. README.md
3. memory.md
4. CHANGELOG.md
5. docs/handover_next_chat.md
6. docs/architecture.md
7. docs/data-model.md
8. docs/make-scenario.md

Aktueller Stand:
- Branch main
- letzter bekannter Commit nach Pull: 1b866fc
- statischer Kara-Shop in website/
- lokale Speicherung per localStorage
- Supabase-Schema in supabase/schema.sql
- Make-Zielprozess dokumentiert

Wichtige offene Aufgabe:
- Supabase-Anbindung planen und implementieren oder zuerst die Dokumentation
  von Papierpfad auf Kara aktualisieren.

Wichtige Regeln:
- Bestehende Doku-Dateien aktuell halten.
- README.md, memory.md und CHANGELOG.md nach groesseren Schritten pflegen.
- Prototyp klein halten und keine unnoetige Architektur einfuehren.
```
