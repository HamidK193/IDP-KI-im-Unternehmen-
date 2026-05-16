# Make-Szenario: End-to-End

## Ausloeser

Supabase Webhook bei neuer Bestellung mit `status = paid`.

## Module

1. Bestellung laden
2. Kunde laden
3. Rechnungsadresse laden
4. Bestellpositionen laden
5. Betraege pruefen und Vorlagen-Mapping erzeugen
6. Rechnungsvorlage befuellen
7. Rechnungseintrag in Supabase erzeugen
8. Kontrollzeile in Excel schreiben
9. Bestellung auf `invoice_draft_created` setzen

## Fehlerfaelle

- Kunde fehlt
- Rechnungsadresse unvollstaendig
- Produktpreis oder Steuersatz fehlt
- Bestellsumme passt nicht
- Rechnung bereits vorhanden

In allen Fehlerfaellen bleibt der Status auf manueller Pruefung.
