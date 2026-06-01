# Präsentation und Live-Demo für den IDP-Demonstrator

Diese Datei beschreibt einen möglichen 20-Minuten-Ablauf für die Vorstellung
des Projekts. Ziel ist, zu zeigen, wie KI in einem kleinen Unternehmen konkret
genutzt werden kann.

## 1. Einstieg: Was ist das Ziel? ca. 2 Minuten

- Thema: KI im Unternehmen am Beispiel eines kleinen E-Commerce-KMU.
- Beispielunternehmen: `Kara`, ein fiktiver Luxury-Streetwear-Shop.
- Problem: Support, Rechnungen, Bestellungen und Auswertungen kosten im Alltag
  viel Zeit.
- Lösung: ein interner KI-Assistent erstellt Vorschläge und Prüfhinweise.
- Wichtig: Der Mensch prüft und entscheidet.

Kernsatz:

> Der Demonstrator zeigt nicht nur eine Website, sondern wie ein kleines
> Unternehmen KI kontrolliert und praktisch in den Arbeitsalltag integriert.

## 2. KI-Cockpit zeigen ca. 6 Minuten

Dateien:

```text
website/index.html
website/script.js
website/styles.css
```

Live zeigen:

- Einstieg `Kara AI Operations`
- KPI-Übersicht und Tagesbriefing
- Aufgabenliste mit Support, Rechnung, Bestellung, Analyse und Wissen
- eine Aufgabe auswählen
- KI-Vorschlag erzeugen
- Quelle und Risiko erklären
- Vorschlag freigeben oder ablehnen

Erklären:

- Die KI ist im MVP simuliert.
- Dadurch gibt es keine echten Kundendaten und keinen API-Key.
- Claude/Codex steht für den möglichen internen KI-Assistenten.
- Die Demo zeigt bewusst Human-in-the-loop.

## 3. Unternehmensnutzen erklären ca. 4 Minuten

Gezeigte Nutzenpunkte:

- schnellere Kundenantworten
- weniger manuelle Rechnungsprüfung
- bessere Priorisierung offener Aufgaben
- Wissen aus Prozessen einfacher auffindbar
- geringeres Risiko durch Quelle, Risikoanzeige und Freigabe

Grenzen:

- KI darf nicht ungeprüft Kundenantworten oder Rechnungen versenden.
- Produktiv braucht es Datenschutz, Rollenrechte, Logging und API-Key-Schutz.
- KI ersetzt keine fachliche Verantwortung.

## 4. Shop als Datenquelle zeigen ca. 3 Minuten

Live zeigen:

- bestehender Kara-Shop unterhalb des Cockpits
- Produktkategorien und Filter
- Warenkorb als operativer Prozess
- Checkout als Beispiel für Daten, die später in KI/Backoffice einfließen

Erklären:

- Der Shop ist nicht mehr die Hauptaussage des IDP.
- Er liefert Kontext und realistische Prozessdaten für das KI-Cockpit.

## 5. Architektur zusammenfassen ca. 3 Minuten

Datei:

```text
docs/architecture.md
```

Aktueller MVP:

```text
Shop-/Backoffice-Daten
-> lokale Demo-Daten
-> KI-Cockpit
-> simulierter Claude/Codex-Vorschlag
-> menschliche Prüfung
-> Freigabe oder Ablehnung
```

Spätere Ausbaustufe:

```text
Website / Shop
-> Supabase
-> gesicherter KI-Service
-> Mitarbeiterfreigabe
-> Make
-> Rechnung / E-Mail / Statusupdate
```

## 6. Nächste Schritte ca. 2 Minuten

- Responsive Demo und Browserverhalten prüfen.
- Präsentationsstory weiter schärfen.
- Optional echte KI-API hinter Demo-Modus vorbereiten.
- Später Supabase und Make produktionsnäher anbinden.
- Tests für KI-Statuswechsel und lokale Speicherung ergänzen.

## Kurzer Präsentationstext für das Fazit

Der aktuelle Stand ist ein funktionierender Frontend-MVP für "KI im
Unternehmen". Kara zeigt, wie ein kleines KMU KI als internen Assistenten nutzen
kann: Vorschläge erzeugen, Risiken sichtbar machen und Entscheidungen beim
Menschen lassen. Der Shop bleibt als Datenquelle erhalten; echte KI-, Supabase-
und Make-Anbindungen sind sinnvolle nächste Ausbaustufen.
