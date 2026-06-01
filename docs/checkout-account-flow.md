# Checkout mit Accountdaten

## Zielverhalten

Der Checkout soll für angemeldete Kunden keine erneute Dateneingabe zeigen.
Wenn ein Kunde eingeloggt ist, muss klar sichtbar sein, dass ein Account
erkannt wurde und dass die gespeicherten persönlichen Daten automatisch für
die Bestellung verwendet werden.

## Gewünschter Ablauf

1. Kunde meldet sich an oder registriert sich.
2. Persönliche Daten werden im Account gespeichert:
   - Vorname
   - Nachname
   - E-Mail
   - Straße und Hausnummer
   - PLZ
   - Ort
3. Beim Klick auf `Zur Kasse` wird kein Formular-Modal geöffnet.
4. Der Kunde wird auf eine eigene Kassenansicht geführt. Die Homepage ist
   dabei nicht sichtbar und die Kasse hängt nicht als Abschnitt unten an der
   Startseite.
5. Dort werden angezeigt:
   - Hinweis, dass der Kunde angemeldet ist
   - der Inhalt des Warenkorbs
   - Summen für Versand, Umsatzsteuer und Gesamtbetrag
   - ein einzelner Button `Kauf abschließen`
6. Der Kunde muss nur noch `Kauf abschließen` klicken.
7. Danach startet der bestehende Prozess:
   - Bestellung wird in Supabase gespeichert
   - Bestellpositionen werden gespeichert
   - Status `paid` löst den Make-Prozess aus
   - Bestellbestätigung/Rechnung wird per E-Mail versendet

## Bearbeitung der Daten

Die Daten sollen nicht im Checkout neu eingegeben und dort auch nicht komplett
angezeigt werden. Der Checkout zeigt nur, dass ein Account erkannt wurde und
dass gespeicherte Daten automatisch verwendet werden. Wenn Daten fehlen oder
falsch sind, wechselt der Kunde in die eigene Account-Ansicht, bearbeitet die
Daten dort und kehrt danach zur Kasse zurück.

## Seitenlogik

- `Home`: Shop, Produkte, Warenkorb und Markeninhalt.
- `Account`: eigener Tab/eigene Ansicht für Login, Registrierung und
  persönliche Daten.
- `Checkout`: eigene Kassenansicht im Stil eines reduzierten Fashion-Checkouts
  mit Warenkorb rechts und Abschlussbutton links.

## Nicht gewünscht

- Kein Checkout-Formular mit Vorname, Nachname, E-Mail und Adresse für bereits
  eingeloggte Kunden.
- Keine doppelte Dateneingabe nach Login.
- Keine Anzeige aller persönlichen Accountdaten direkt im Checkout.
- Kein Accountformular als sichtbarer Abschnitt auf der Homepage.
- Kein Rechnungsfreigabeprozess für den Käufer.
