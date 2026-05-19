# IDP-KI-im-Unternehmen-

IDP-Demonstrator fuer einen automatisierten Bestell- und Rechnungsprozess.

Der aktuelle Prototyp zeigt einen fiktiven Luxury-Streetwear-Shop namens
`Kara`. Die Website simuliert Produktkatalog, Warenkorb, Checkout und eine
direkt versendete Bestell-/Rechnungs-E-Mail. Die Zielarchitektur verbindet den
Shop spaeter mit Supabase, Make und einer Word- oder PDF-Rechnungsvorlage.

## Wichtige Dateien

- `website/` - statischer Shop-Prototyp mit Checkout und Bestellmail-Demo
- `supabase/schema.sql` - geplantes Supabase-Datenmodell
- `make/payload-example.json` - Beispielpayload fuer die Automatisierung
- `docs/` - fachliche und technische Dokumentation
- `AGENTS.md` - Arbeitsregeln und Projektplan
- `memory.md` - Projektgedaechtnis fuer spaetere Chats
- `CHANGELOG.md` - Aenderungsprotokoll

## Naechste Schritte

1. bestehende Doku von Papierpfad auf Kara angleichen
2. Produkte aus Supabase statt aus JavaScript laden
3. Checkout-Daten in Supabase speichern
4. Make-Szenario an bezahlte Bestellungen anbinden
5. echte Rechnungsvorlage und E-Mail-Versandstrecke anschliessen
