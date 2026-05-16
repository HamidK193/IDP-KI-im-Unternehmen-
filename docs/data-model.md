# Supabase-Datenmodell

## Tabellen

- `customers`
- `addresses`
- `products`
- `orders`
- `order_items`
- `invoices`

## Wichtige Designentscheidungen

1. Kunden und Adressen getrennt halten.
2. Preise in Cent speichern.
3. Bestellpositionen mit Preis-Snapshot speichern.
4. Rechnung als eigene Tabelle fuehren.
5. RLS aktivieren.

## Beziehungen

- Ein Kunde hat viele Adressen.
- Ein Kunde hat viele Bestellungen.
- Eine Bestellung hat viele Positionen.
- Eine Bestellung hat genau eine Rechnung.
- Eine Rechnung gehoert genau zu einer Bestellung und einem Kunden.
