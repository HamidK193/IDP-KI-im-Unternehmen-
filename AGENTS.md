# AGENTS.md

## Zweck

Diese Datei enthält allgemeine Arbeitsregeln und den verbindlichen Projektplan
für dieses Repository.

## Allgemeine Arbeitsregeln

- Halte den Code einfach, lesbar und gut erweiterbar.
- Verwende in deutschen Texten immer echte Umlaute und `ß`.
- Pflege `README.md`, `memory.md` und `CHANGELOG.md` nach größeren Schritten.
- Dokumentiere fachliche Entscheidungen in `docs/`, damit der Projektstand auch
  in einem neuen Chat schnell verstanden werden kann.
- Vermeide Overengineering. Das Projekt ist ein kleiner IDP-MVP.
- Verändere vorhandene Demo-Daten nur bewusst und dokumentiere den Grund.
- Halte Website-Prototyp, Supabase-Schema, Make-Konzept und Rechnungsprozess
  fachlich synchron.
- Preise werden fachlich in Cent gedacht; der aktuelle Website-Prototyp nutzt
  für die Demo noch Dezimalwerte in JavaScript.
- Der lokale Website-Prototyp speichert Daten aktuell in `localStorage`.
- Änderungen sollen nicht nur lokal gespeichert werden. Jede relevante Änderung
  wird zusätzlich direkt in GitHub committed. Wenn lokales `git push` in der
  Codex-Umgebung blockiert ist, wird der GitHub-Connector für Textdateien
  genutzt und der lokale Stand parallel angepasst.
- Binärdateien wie `.docx`, `.pptx`, `.pdf` oder Bilder werden nur dann direkt
  auf GitHub aktualisiert, wenn ein geeigneter Upload-/Git-Weg verfügbar ist;
  andernfalls wird der Nutzer klar darauf hingewiesen.

## Verbindlicher Projektplan

### Aktueller MVP

- KI-Operations-Cockpit für das fiktive Unternehmen `Kara`
- Kara als kleines E-Commerce-KMU mit ca. 20 bis 80 Mitarbeitenden
- interaktive Demo, wie KI im Unternehmen genutzt werden kann
- simulierte Claude/Codex-Vorschläge ohne API-Key und ohne echte Kundendaten
- Tagesbriefing mit Kennzahlen, offenen Aufgaben, Risiken und Empfehlungen
- Aufgaben für Support, Bestellung, Rechnung, Analyse und interne Wissensfrage
- KI-Panel mit Prompt, Antwortvorschlag, Quelle, Risiko und Status
- Human-in-the-loop: Vorschläge können freigegeben oder abgelehnt werden
- bestehender Shop-Prototyp bleibt als sekundäre Datenquelle erhalten
- Supabase- und Make-Konzept bleiben als spätere Ausbaustufe dokumentiert

### Relevante Quelldateien

- `website/index.html`
- `website/script.js`
- `website/styles.css`
- `supabase/schema.sql`
- `make/payload-example.json`
- `docs/architecture.md`
- `docs/data-model.md`
- `docs/make-scenario.md`
- `docs/invoice-template-fields.md`
- `docs/repository-overview.md`
- `docs/use-case.md`

### Aktuelle Arbeitsschritte

1. KI-Cockpit lokal stabil halten.
2. Shop-Prototyp als Datenquelle und Kontext erhalten.
3. Dokumentation nach jedem größeren Schritt aktualisieren.
4. Demo-Ablauf für die IDP-Präsentation finalisieren.
5. Responsive Darstellung und Statuswechsel testen.
6. Optional echte KI-Schnittstelle vorbereiten, aber Demo-Modus behalten.
7. Supabase-Projekt später vorbereiten und Schema einspielen.
8. Checkout-Bestellungen später in Supabase schreiben.
9. Make-Szenario später an bezahlte Bestellungen anbinden.
10. Rechnungs- und E-Mail-Prozess später produktionsnäher ausbauen.

### Spätere Erweiterungen

- PDF- oder Word-Rechnungsvorlage als Datei im Prozess anbinden
- echte E-Mail-Versandstrecke über Make oder Backend anbinden
- Supabase Row Level Security Policies konkretisieren
- Produkt- und Bestelldaten seedbar machen
- Tests für Summenberechnung, Checkout und Rechnungsstatus ergänzen
- Deployment der statischen Website vorbereiten

## Handover Bei Großem Kontext

Wenn der Kontext zu groß wird oder ein Agent die Arbeit an einen nächsten
Agenten übergibt, muss ein kompaktes, aber vollständiges Handover erstellt
werden.

### Immer Einbeziehen

- `README.md`
- `AGENTS.md`
- `memory.md`
- `CHANGELOG.md`
- relevante Dateien in `website/`
- relevante Dateien in `supabase/`, `make/` und `docs/`
- offene To-dos, Fehler oder Blocker

### Handover-Regeln

- Das Handover soll kurz, klar und konkret sein.
- Bereits getroffene Entscheidungen deutlich nennen.
- Offene Aufgaben in sinnvoller Reihenfolge aufführen.
- Wichtige Dateipfade immer explizit nennen.
- Wenn externe Dienste oder Zugangsdaten fehlen, das klar vermerken.
