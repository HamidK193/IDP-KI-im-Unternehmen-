# Handover für den nächsten Chat

## Projekt

- Repository: `IDP-KI-im-Unternehmen-`
- Thema: IDP-Demonstrator für KI-Nutzung in einem kleinen Unternehmen
- Aktueller Branch: `main`
- Aktueller Website-Kontext: `Kara`, fiktives E-Commerce-KMU für
  Luxury-Streetwear

## Wichtigste Projektidee

Kara nutzt ein internes KI-Operations-Cockpit, um zu zeigen, wie KI im
Unternehmen praktisch eingesetzt werden kann. Die KI erstellt Vorschläge für
Support, Rechnungsprüfung, Bestellrisiken, Auswertungen und interne
Wissensfragen. Mitarbeitende prüfen die Vorschläge und geben sie frei oder
lehnen sie ab.

Aktueller Zielprozess:

```text
Shop-/Backoffice-Daten -> KI-Cockpit -> KI-Vorschlag -> menschliche Prüfung -> Freigabe oder Ablehnung
```

## Relevante Dateien zuerst lesen

1. `AGENTS.md`
2. `README.md`
3. `memory.md`
4. `CHANGELOG.md`
5. `docs/repository-overview.md`
6. `docs/use-case.md`
7. `docs/architecture.md`
8. `website/README.md`

## Zentrale Code-Dateien

- `website/index.html`
  - KI-Cockpit, Shop, Warenkorb, Account und Checkout
- `website/script.js`
  - KI-Demo-Daten, KI-Simulation, Statuswechsel, Shop- und Checkout-Logik
- `website/styles.css`
  - responsives Operations-Cockpit und bestehendes Shop-Design
- `supabase/schema.sql`
  - geplantes Datenmodell für einen späteren Backend-Stand
- `make/payload-example.json`
  - Beispielpayload für eine spätere Automatisierung

## Aktueller App-Stand

### KI-Cockpit

- primärer Einstieg der Website
- KPI-Übersicht und Tagesbriefing
- Aufgabenliste für Support, Rechnung, Bestellung, Analyse und Wissen
- simuliertes Claude/Codex-Panel mit Prompt, Antwort, Quelle, Risiko und Status
- Freigabe/Ablehnung speichert Status lokal
- keine echten KI-Requests und kein API-Key nötig

### Shop

- Kara-Shop bleibt als sekundäre Datenquelle erhalten
- Produktkatalog mit Kategorien und Produktbildern
- Warenkorb mit Mengensteuerung
- Account-/Checkout-Fluss bleibt vorhanden

### Datenhaltung

- aktuell lokal per `localStorage`
- neue Collections: `kara_ai_tasks`, `kara_support_cases`, `kara_ai_runs`,
  `kara_knowledge_base`
- geplantes Ziel: Supabase/Make als spätere Ausbaustufe

## Wichtige Entscheidungen

- IDP-Fokus ist jetzt "KI im Unternehmen", nicht nur Rechnungsautomatisierung.
- Zielunternehmen ist ein kleines KMU mit 20 bis 80 Mitarbeitenden.
- KI ist im MVP simuliert, damit die Demo stabil und datenschutzarm bleibt.
- Human-in-the-loop ist sichtbar: keine automatische Kunden- oder
  Rechnungsentscheidung.
- Supabase und Make bleiben dokumentiert, aber sind nicht Kern der aktuellen
  Demo.

## Bekannte offene Aufgaben

1. KI-Cockpit im Browser und mobil prüfen.
2. Präsentationsablauf für die neue KI-Story finalisieren.
3. Optional kleine Tests für KI-Statuswechsel und lokale Speicherung bauen.
4. Optional echte KI-API vorbereiten, aber Demo-Modus behalten.
5. Später Supabase/Make wieder anbinden.

## Handover-Prompt für den nächsten Agenten

```text
Arbeite im Repository `IDP-KI-im-Unternehmen-`.

Lies zuerst:
1. AGENTS.md
2. README.md
3. memory.md
4. CHANGELOG.md
5. docs/handover_next_chat.md
6. docs/use-case.md
7. docs/architecture.md
8. website/README.md

Aktueller Stand:
- statische Website in website/
- primärer Einstieg: Kara AI Operations Cockpit
- KI-Vorschläge werden lokal simuliert
- Human-in-the-loop mit Freigabe/Ablehnung
- Shop bleibt als Datenquelle darunter erhalten

Wichtige offene Aufgabe:
- Browser-/Mobiltest und Präsentationsstory für "KI im Unternehmen" finalisieren.

Wichtige Regeln:
- Bestehende Doku-Dateien aktuell halten.
- README.md, memory.md und CHANGELOG.md nach größeren Schritten pflegen.
- Prototyp klein halten und keine unnötige Architektur einfuehren.
```
