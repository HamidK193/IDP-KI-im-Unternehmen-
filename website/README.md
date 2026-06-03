# Website-Prototyp

## Aktueller Stand

Die Website zeigt jetzt zuerst **Kara AI Operations** als produktnahes
KI-Operations-Cockpit für das IDP-Schulprojekt. Der Premium-Streetwear-Shop
bleibt darunter als operative Datenquelle, Kontext und Checkout-Demo erhalten.

- App-orientierte Topbar mit Cockpit-, Aufgaben-, Prozess- und Shopdaten-Navigation
- erster Viewport als SaaS-/Dashboard-Oberfläche mit KPI-Zeile und Statussignalen
- dunkle Aufgaben-Rail, Fallansicht und Assistentenpanel im Human-in-the-loop-Flow
- New-In-Bereich, Kategorie-Kacheln und erweiterter Produktkatalog
- Produktkarten mit Badge, Wishlist-Anmutung, Preis im Shop-Format und Add-to-cart
- Warenkorb, Account und Checkout-Demo bleiben angebunden
- KI-Cockpit für Support, Bestellungen, Rechnungen, Analyse und Wissen
- simulierter Claude/Codex-Assistent mit Prompt, Antwort, Quelle und Risiko
- Freigabe oder Ablehnung von KI-Vorschlägen im Human-in-the-loop-Prinzip

## Seiten

- `index.html` - Kara-Shop, Warenkorb, Account, Checkout und KI-Cockpit

## Lokale Demo-Daten

- `kara_ai_tasks`
- `kara_support_cases`
- `kara_ai_runs`
- `kara_knowledge_base`
- bestehende Shopdaten wie `kara_cart`, `kara_orders`, `kara_invoices`

## Lokal starten

```powershell
cd A:\Codex\IDP\website
py -m http.server 8080
```

Danach im Browser öffnen:

```text
http://localhost:8080/
```

## Nächste technische Schritte

1. Supabase-Seed bei Bedarf erneut ausführen, damit alle 20 Produkte in der Datenbank stehen.
2. Optional echte KI-API hinter Demo-Modus vorbereiten.
3. Optional Produktbilder später durch eigene Kara-Assets ersetzen.
