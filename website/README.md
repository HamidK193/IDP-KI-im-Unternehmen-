# Techday-Website: KI-Controlling-Cockpit „Kara“

Moderne, responsive Website für den Techday-Infostand des IDP-Projekts
**„KI für kleine Unternehmen“** (Hochschule Pforzheim) – zwei Seiten:
Übersichts-Homepage aus Dashboard-Blöcken plus eigene interaktive
Cockpit-Seite.

Live: <https://kara-cockpit.de/> · Cockpit: <https://kara-cockpit.de/cockpit.html>

## Zwei Ziele

1. **Meta-Beweis**: Die Seite selbst wurde mit KI gebaut – eigener
   Abschnitt „Mit KI gebaut“ erzählt diese Geschichte.
2. **Projektbeschreibung**: Sie erklärt das KI-Controlling-Cockpit am Beispiel
   des fiktiven Unternehmens Kara, verständlich für Standbesucher.

## Aufbau

| Datei | Inhalt |
|---|---|
| `index.html` | Homepage: Hero, Projekt, KPI-Blöcke, Integrations-Hub, Doppelblock, Fallbeispiele, Cockpit-Vorschau, Funktionsweise, Mit KI gebaut, Kontakt |
| `cockpit.html` | Interaktives Cockpit (3 Spalten: Quellen · KPIs+Trend · KI-Analyse mit Freigeben/Ablehnen) |
| `styles.css` | Design-Tokens (CSS-Variablen), Light/Dark, beide Seiten, Responsive, Animationen |
| `script.js` | Demo-Daten (6 Quellen, 6 KPIs, 3 Szenarien) + gesamte Interaktion für beide Seiten |
| `assets/` | Favicon, QR-Code (kara-cockpit.de), Cockpit-Vorschaubild |
| `screenshots/` | Screenshots (Handy + Desktop, beide Seiten) für die Doku |
| `CNAME` | Custom Domain kara-cockpit.de für GitHub Pages |

Kein Build-Schritt, keine Frameworks – reines HTML/CSS/JS, deshalb läuft die
Seite direkt auf GitHub Pages (Workflow `.github/workflows/deploy.yml`).

## Lokal starten

```powershell
cd A:\Codex\IDP\website
py -m http.server 8080
```

Danach im Browser öffnen: `http://localhost:8080/` (Cockpit: `/cockpit.html`)

## Hinweis

Alle Zahlen sind realistisch gewählte **Demo-Daten** eines fiktiven
Unternehmens. Keine echten Unternehmens- oder Kundendaten, keine Tracker.
Markennamen im Integrations-Hub sind Beispiele typischer Quellen, keine
Partnerschaften. Details zur Entstehung: siehe [BUILD-NOTES.md](BUILD-NOTES.md).
