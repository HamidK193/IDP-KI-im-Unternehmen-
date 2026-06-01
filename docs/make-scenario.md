# Make-Szenario: End-to-End

## Auslöser

Supabase Webhook bei neuer Bestellung mit `status = paid`.

## Module

1. Bestellung laden
2. Kunde laden
3. Rechnungsadresse laden
4. Bestellpositionen laden
5. Beträge prüfen und Vorlagen-Mapping erzeugen
6. Rechnungsvorlage befüllen
7. Rechnungseintrag in Supabase erzeugen
8. Bestell- und Rechnungs-E-Mail versenden
9. Bestellung auf `completed` setzen

## Fehlerfälle

- Kunde fehlt
- Rechnungsadresse unvollständig
- Produktpreis oder Steuersatz fehlt
- Bestellsumme passt nicht
- Rechnung oder E-Mail bereits vorhanden

In allen Fehlerfällen wird kein Versand ausgelöst und der Fall muss intern geprüft werden.
