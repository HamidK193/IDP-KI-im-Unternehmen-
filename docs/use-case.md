# End-to-End-Use-Case

## Grundidee

Ein kleiner spezialisierter Online-Shop verkauft kuratierte Luxury-Streetwear.
Nach einem Kauf auf der Website soll der Prozess so weit automatisiert ablaufen,
dass:

1. der Kunde mit seinen relevanten Daten einmal sauber in Supabase gespeichert
   wird,
2. die Bestellung mit Positionen, Preisen und Status nachvollziehbar vorliegt,
3. automatisch ein Rechnungsentwurf erzeugt wird,
4. eine Bestellbestätigungs-E-Mail direkt an den Kunden versendet wird,
5. eine verantwortliche Person Rechnung freigeben und versenden kann.

## Fiktives Unternehmen

### Name

**Kara**

### Geschaeftsidee

Kara ist ein moderner Online-Shop fuer hochwertige, kuratierte
Luxury-Streetwear-Kollektionen. Das Sortiment umfasst Outerwear, Knitwear,
Tailoring, Essentials, Denim, Shirts und Accessories.

## Zielprozess

```
Website-Kauf -> Supabase -> Make -> Rechnung (needs_review) -> E-Mail an Kunden
```
