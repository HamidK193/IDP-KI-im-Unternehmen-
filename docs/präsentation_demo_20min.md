# Präsentation und Live-Demo für den IDP-Demonstrator

Diese Datei beschreibt einen möglichen 20-Minuten-Ablauf für die Vorstellung
des Projekts. Ziel ist, zu zeigen, wie KI in einem kleinen Unternehmen konkret
zur datenbasierten Steuerung genutzt werden kann.

## 1. Einstieg: Was ist das Ziel? ca. 2 Minuten

- Thema: KI für kleine Unternehmen am Beispiel der datenbasierten Steuerung.
- Beispielunternehmen: `Kara`, ein fiktives kleines Unternehmen.
- Problem: Unternehmensdaten liegen verteilt in vielen Systemen; ein schneller
  Überblick über Kennzahlen, Trends und Abweichungen fehlt.
- Lösung: ein KI-gestütztes Controlling-Cockpit wertet die Daten aus und
  schlägt begründete Maßnahmen vor.
- Wichtig: Der Mensch prüft und entscheidet.

Kernsatz:

> Der Demonstrator zeigt nicht nur eine Website, sondern wie ein kleines
> Unternehmen KI kontrolliert zur Steuerung einsetzen kann.

## 2. Controlling-Cockpit zeigen ca. 6 Minuten

Dateien:

```text
website/index.html
website/script.js
website/styles.css
```

Live zeigen:

- Einstieg in das KI-Controlling-Cockpit
- gedachte Datenquellen mit Datenqualität (Finance DB, ERP, CRM, HR, Projekt DB, Data Warehouse)
- KPI-Karten für zentrale Kennzahlen
- Trenddiagramm für Umsatz, Kosten und Liquidität
- Szenario wechseln (stabil, kritisch, Wachstum)
- KI-Analyse erzeugen und Findings, Begründung, Risiko und Datenqualität erklären
- Handlungsempfehlung prüfen und freigeben oder ablehnen

Erklären:

- Die KI ist im MVP simuliert.
- Dadurch gibt es keine echten Unternehmensdaten und keinen API-Key.
- Die Demo zeigt bewusst Human-in-the-loop.

## 3. Drei Fallbeispiele einordnen ca. 4 Minuten

- Hauptfall: KI-gestütztes Controlling-Cockpit.
- Fallbeispiel 2: Budget- und Kostenabweichungsanalyse (Plan-Ist-Vergleich).
- Fallbeispiel 3: Forecasting und Frühwarnsystem (Umsatz, Kosten, Liquidität).

Warum das Controlling-Cockpit der beste Hauptfall ist:

- Es verbindet Datenintegration, betriebswirtschaftliche Kennzahlen,
  KI-Erklärbarkeit, Risiko- und Datenqualitätsbewertung und Human-in-the-loop.

Grenzen:

- KI trifft keine automatische Entscheidung.
- Produktiv braucht es Datenschutz, Rollenrechte, Logging und API-Key-Schutz.
- KI ersetzt keine fachliche Verantwortung.

## 4. Unternehmensnutzen erklären ca. 3 Minuten

Gezeigte Nutzenpunkte:

- schneller Überblick über verteilte Unternehmensdaten
- frühe Erkennung von Trends, Abweichungen und Risiken
- nachvollziehbare Begründungen mit Quelle und Datenqualität
- bessere Priorisierung von Steuerungsmaßnahmen
- geringeres Risiko durch menschliche Freigabe

## 5. Architektur zusammenfassen ca. 3 Minuten

Datei:

```text
docs/architecture.md
```

Aktueller MVP:

```text
Gedachte Unternehmensdatenbanken
-> lokale Demo-Daten im Browser
-> simulierte KI-Analyse
-> Kennzahlen, Trends, Begründung, Empfehlung
-> menschliche Prüfung
```

Spätere Ausbaustufe:

```text
Echte Datenbank-Views / CSV
-> gesicherter KI-Service über API-Proxy
-> Kennzahlen- und Trendanalyse
-> Fachfreigabe und Audit Trail
```

## 6. Nächste Schritte ca. 2 Minuten

- Responsive Demo und Browserverhalten prüfen.
- Präsentationsstory weiter schärfen.
- Optional echte Datenbank- oder CSV-Anbindung vorbereiten.
- Optional echte KI-Schnittstelle hinter Demo-Modus ergänzen.
- Tests für Szenario-Umschaltung und Chart-Darstellung ergänzen.

## Kurzer Präsentationstext für das Fazit

Der aktuelle Stand ist ein funktionierender Frontend-MVP für "KI im
Unternehmen". Kara zeigt, wie ein kleines Unternehmen KI zur datenbasierten
Steuerung nutzen kann: Kennzahlen berechnen, Trends und Abweichungen erkennen,
Risiken sichtbar machen und Entscheidungen beim Menschen lassen. Echte
Datenbank- und KI-Anbindungen sind sinnvolle nächste Ausbaustufen.
