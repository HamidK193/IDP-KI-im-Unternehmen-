# Website-Prototyp

## Aktueller Stand

Die Website ist ein technischer IDP-Demonstrator zu **KI im Unternehmen** mit
Fokus auf Controlling, Datenanalyse und Unternehmenssteuerung.

Sie ist keine Shop- oder E-Commerce-Seite mehr. Der Prototyp dient als
interaktive Informations- und Präsentationsoberfläche mit großen
Slide-Sektionen und einer beispielhaften Dashboard-UI.

## Inhalte

- technisches Hero-Intro
- Problemstellung: viele Unternehmensdatenbanken, wenig Überblick
- drei KI-Fallbeispiele
- detaillierter Hauptfall: KI-gestütztes Controlling-Cockpit
- Datenfluss von Datenbanken über KI-Analyse bis zur menschlichen Prüfung
- Funktionen, Grenzen, Datenschutz und Human-in-the-loop
- Fazit und Präsentationsablauf

## Interaktion

- Fallbeispiele können per Karten ausgewählt werden.
- Das Controlling-Cockpit besitzt drei Szenarien:
  - stabil
  - kritisch
  - Wachstum
- Kennzahlen, Trenddiagramm, KI-Findings, Datenqualität, Risiko und Empfehlung
  ändern sich je nach Szenario.
- Der Button `Analyse ausführen` simuliert eine KI-Auswertung.

## Lokal starten

```powershell
cd A:\Codex\IDP\website
py -m http.server 8080
```

Danach im Browser öffnen:

```text
http://localhost:8080/
```
