# Repository Overview

Dieses Repository enthält die technische Grundlage für den IDP-Demonstrator
„KI im Unternehmen“.

## Struktur

- `website/` - statischer Präsentations- und Dashboard-Prototyp
- `docs/` - fachliche Beschreibung von Use Case, Architektur und Demo-Aufbau
- `supabase/` - ältere SQL-Dateien für spätere Backend-Experimente
- `make/` - ältere Beispielpayloads für Automatisierungsideen
- `tools/` - Hilfsskripte für Projektartefakte

## Aktueller Fokus

Der Prototyp zeigt nicht mehr einen Shop, sondern drei KI-Fallbeispiele für
Controlling und Unternehmenssteuerung:

1. KI-gestütztes Controlling-Cockpit
2. Budget- und Kostenabweichungsanalyse
3. Forecasting und Frühwarnsystem

Das Controlling-Cockpit ist der Hauptfall. Es zeigt:

- Analyse aller relevanten Unternehmensdatenbanken
- Berechnung zentraler Kennzahlen
- Trend- und Abweichungserkennung
- Begründung der Analyse
- Datenqualität und Risiko
- konkrete Handlungsempfehlung
- menschliche Prüfung vor Umsetzung

## Wichtige Dateien

- `website/index.html` - Aufbau der interaktiven Präsentationsoberfläche
- `website/styles.css` - Slide- und Dashboard-Design
- `website/script.js` - Demo-Daten, Szenarien und UI-Interaktion
- `docs/use-case.md` - fachlicher End-to-End-Use-Case
- `docs/architecture.md` - Datenfluss und Zielarchitektur
- `docs/data-model.md` - Demo-Datenmodell
- `docs/ki-cockpit-dokumentation.md` - zentrale Cockpit-Dokumentation
- `README.md` - Projektüberblick
- `memory.md` - Projektgedächtnis

## Nächste Schritte

1. Demo im Browser und mobil prüfen.
2. Präsentationsablauf für den Hauptfall üben.
3. Optional echte Datenbank- oder CSV-Anbindung vorbereiten.
4. Optional echte KI-Schnittstelle hinter Demo-Modus ergänzen.
