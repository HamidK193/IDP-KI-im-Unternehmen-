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
- Halte Website-Prototyp, Dokumentation und später mögliche Datenbankkonzepte
  fachlich synchron.
- Der lokale Website-Prototyp nutzt aktuell statische Demo-Daten in
  `website/script.js`.
- Änderungen sollen nicht nur lokal gespeichert werden. Jede relevante Änderung
  wird zusätzlich direkt in GitHub committed. Wenn lokales `git push` in der
  Codex-Umgebung blockiert ist, wird der GitHub-Connector für Textdateien
  genutzt und der lokale Stand parallel angepasst.
- Binärdateien wie `.docx`, `.pptx`, `.pdf` oder Bilder werden nur dann direkt
  auf GitHub aktualisiert, wenn ein geeigneter Upload-/Git-Weg verfügbar ist;
  andernfalls wird der Nutzer klar darauf hingewiesen.

## Verbindlicher Projektplan

### Aktueller MVP

- Technischer IDP-Demonstrator zum Thema `KI im Unternehmen`
- Fokus auf datenbasiertes Controlling, Unternehmenssteuerung und Analyse
  relevanter Unternehmensdatenbanken
- interaktive Präsentationsoberfläche mit großen, slide-artigen Sektionen
- keine Shop-, Produkt-, Warenkorb- oder E-Commerce-Ausrichtung mehr
- drei KI-Fallbeispiele:
  1. KI-gestütztes Controlling-Cockpit
  2. Budget- und Kostenabweichungsanalyse
  3. Forecasting und Frühwarnsystem
- Hauptfall: KI-gestütztes Controlling-Cockpit
- KI analysiert gedachte Datenquellen wie Finance DB, ERP, CRM, HR, Projekt DB
  und Data Warehouse
- Demo zeigt Kennzahlen, Trends, Abweichungen, Datenqualität, Risiko,
  Begründungen und Handlungsempfehlungen
- Human-in-the-loop: Empfehlungen werden vor Umsetzung menschlich geprüft
- keine echten Unternehmensdaten und keine externe KI-API im MVP

### Relevante Quelldateien

- `website/index.html`
- `website/script.js`
- `website/styles.css`
- `docs/use-case.md`
- `docs/architecture.md`
- `docs/data-model.md`
- `docs/ki-cockpit-dokumentation.md`
- `docs/repository-overview.md`
- `README.md`
- `memory.md`
- `CHANGELOG.md`

### Aktuelle Arbeitsschritte

1. Controlling-Demonstrator lokal stabil halten.
2. Drei Fallbeispiele klar und verständlich darstellen.
3. Hauptfall `KI-gestütztes Controlling-Cockpit` im Detail ausbauen.
4. Präsentationsablauf für die IDP-Vorstellung finalisieren.
5. Responsive Darstellung und Interaktionen testen.
6. Optional echte Datenbank- oder CSV-Anbindung vorbereiten.
7. Optional echte KI-Schnittstelle vorbereiten, aber Demo-Modus behalten.
8. Datenschutz, Rollenrechte und Human-in-the-loop fachlich dokumentieren.

### Spätere Erweiterungen

- echte Datenbank-Views oder CSV-Daten anbinden
- echte KI-Schnittstelle über gesicherten API-Proxy vorbereiten
- Audit Trail und Rollenrechte skizzieren
- Tests für Szenario-Umschaltung und Chart-Darstellung ergänzen
- Deployment der statischen Website prüfen

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
- relevante Dateien in `docs/`
- offene To-dos, Fehler oder Blocker

### Handover-Regeln

- Das Handover soll kurz, klar und konkret sein.
- Bereits getroffene Entscheidungen deutlich nennen.
- Offene Aufgaben in sinnvoller Reihenfolge aufführen.
- Wichtige Dateipfade immer explizit nennen.
- Wenn externe Dienste oder Zugangsdaten fehlen, das klar vermerken.
