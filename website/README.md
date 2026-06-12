# Techday-Website: KI-Controlling-Cockpit „Kara“

Moderne, responsive Single-Page-Website für den Techday-Infostand des
IDP-Projekts **„KI für kleine Unternehmen“** (Hochschule Pforzheim).

Live: <https://kara-cockpit.de/>

## Zwei Ziele

1. **Meta-Beweis**: Die Seite selbst wurde mit KI (Claude) gebaut – eigener
   Abschnitt „Mit KI gebaut“ erzählt diese Geschichte.
2. **Projektbeschreibung**: Sie erklärt das KI-Controlling-Cockpit am Beispiel
   des fiktiven Unternehmens Kara, verständlich für Standbesucher.

## Aufbau

| Datei | Inhalt |
|---|---|
| `index.html` | Semantisches HTML5, alle Abschnitte (Hero, Projekt, Fallbeispiele, Live-Demo, Funktionsweise, Mit KI gebaut, Kontakt, Footer) |
| `styles.css` | Design-Tokens (CSS-Variablen), Light/Dark, responsive Layouts, Animationen |
| `script.js` | Demo-Daten (6 Quellen, 6 KPIs, 3 Szenarien), Cockpit-Logik, SVG-Chart, Theme, Menü, Scroll-Effekte |
| `assets/` | Favicon, QR-Code zur Live-URL |
| `screenshots/` | Screenshots (Handy + Desktop) für die Doku |

Kein Build-Schritt, keine Frameworks – reines HTML/CSS/JS, deshalb läuft die
Seite direkt auf GitHub Pages (`.github