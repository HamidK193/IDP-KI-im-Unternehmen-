# Website-Prototyp

## Aktueller Stand

Die Website zeigt jetzt zuerst **Kara AI Operations**, ein interaktives
KI-Cockpit für ein kleines E-Commerce-KMU.

- KI-Tagesbriefing
- KPI-Übersicht für den Demo-Tag
- Aufgabenliste für Support, Rechnung, Bestellung, Analyse und Wissen
- simulierter Claude/Codex-Assistent mit Prompt, Antwort, Quelle und Risiko
- Freigabe oder Ablehnung von KI-Vorschlägen
- lokaler Demo-Modus ohne API-Key
- bestehender Kara-Shop als Datenquelle unterhalb des Cockpits

## Seiten

- `index.html` - KI-Cockpit, Shop, Warenkorb, Account und Checkout

## Lokale Demo-Daten

- `kara_ai_tasks`
- `kara_support_cases`
- `kara_ai_runs`
- `kara_knowledge_base`
- bestehende Shopdaten wie `kara_cart`, `kara_orders`, `kara_invoices`

## Nächste technische Schritte

1. Browser- und Mobilansicht prüfen.
2. Statuswechsel der KI-Vorschläge testen.
3. Optional echte KI-API hinter Demo-Modus vorbereiten.
4. Supabase/Make später wieder als produktionsnähere Integrationsstufe
   anbinden.
