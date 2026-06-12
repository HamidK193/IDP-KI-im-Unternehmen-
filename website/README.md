# Techday-Website: KI-Controlling-Cockpit „Kara“

Moderne, responsive Single-Page-Website für den Techday-Infostand des
IDP-Projekts **„KI für kleine Unternehmen“** (Hochschule Pforzheim).

Live: <https://hamidk193.github.io/IDP-KI-im-Unternehmen-/>

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
Seite direkt auf GitHub Pages (`.github/workflows/deploy.yml` lädt `website/`
als Pages-Artefakt hoch).

## Lokal starten

```powershell
cd A:\Codex\IDP\website
py -m http.server 8080
```

Danach im Browser öffnen: `http://localhost:8080/`

## Hinweis

Alle Zahlen sind realistisch gewählte **Demo-Daten** eines fiktiven
Unternehmens. Keine echten Unternehmens- oder Kundendaten, keine Tracker.
Details zur Entstehung: siehe [BUILD-NOTES.md](BUILD-NOTES.md).
