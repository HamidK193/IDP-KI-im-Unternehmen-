# Checkout mit Accountdaten

## Zielverhalten

Der Checkout soll fuer angemeldete Kunden keine erneute Dateneingabe zeigen.
Wenn ein Kunde eingeloggt ist, muss klar sichtbar sein, dass ein Account
erkannt wurde und dass die gespeicherten persoenlichen Daten automatisch fuer
die Bestellung verwendet werden.

## Gewuenschter Ablauf

1. Kunde meldet sich an oder registriert sich.
2. Persoenliche Daten werden im Account gespeichert:
   - Vorname
   - Nachname
   - E-Mail
   - Strasse und Hausnummer
   - PLZ
   - Ort
3. Beim Klick auf `Zur Kasse` wird kein Formular-Modal geoeffnet.
4. Der Kunde wird auf einen eigenen Kassenbereich der Seite gefuehrt.
5. Dort werden angezeigt:
   - Hinweis, dass der Kunde angemeldet ist
   - die automatisch uebernommenen Accountdaten
   - der Inhalt des Warenkorbs
   - Summen fuer Versand, Umsatzsteuer und Gesamtbetrag
6. Der Kunde muss nur noch `Kauf abschliessen` klicken.
7. Danach startet der bestehende Prozess:
   - Bestellung wird in Supabase gespeichert
   - Bestellpositionen werden gespeichert
   - Status `paid` loest den Make-Prozess aus
   - Bestellbestaetigung/Rechnung wird per E-Mail versendet

## Bearbeitung der Daten

Die Daten sollen nicht im Checkout neu eingegeben werden. Wenn Daten fehlen
oder falsch sind, kann der Kunde ueber das Account-Dropdown `Persoenliche
Daten` oeffnen, bearbeiten und speichern. Danach aktualisiert sich die Kasse.

## Nicht gewuenscht

- Kein Checkout-Formular mit Vorname, Nachname, E-Mail und Adresse fuer bereits
  eingeloggte Kunden.
- Keine doppelte Dateneingabe nach Login.
- Kein Rechnungsfreigabeprozess fuer den Kaeufer.
