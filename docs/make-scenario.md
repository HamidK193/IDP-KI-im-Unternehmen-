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
8. Bestell- und Rechnungs-E-Mail versenden
9. Bestellung auf `completed` setzen

## Fehlerfaelle

- Kunde fehlt
- Rechnungsadresse unvollstaendig
- Produktpreis oder Steuersatz fehlt
- Bestellsumme passt nicht
- Rechnung oder E-Mail bereits vorhanden

In allen Fehlerfaellen wird kein Versand ausgeloest und der Fall muss intern geprueft werden.
