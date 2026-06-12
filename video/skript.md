# Techday-Video: „KI macht die Zahlen kleiner Unternehmen lesbar“

**Länge:** ca. 60 Sekunden · **Format:** 1920×1080 (16:9), geeignet für Stand-Monitor und LinkedIn
**Sprache:** Deutsch, gesprochen (TTS-Stimme „Conrad“, de-DE) · **Stil:** dunkles Petrol-Design der Website

## Aufbau und Sprechertext

| # | Zeit | Bild | Sprechertext (Voiceover) |
|---|------|------|--------------------------|
| 1 | 0:00–0:08 | **Intro-Karte** (animierter Titel, KI-Badge) | „Kleine Unternehmen sammeln jeden Tag Daten. Aber der schnelle Überblick? Der fehlt fast immer.“ |
| 2 | 0:08–0:20 | **Problem-Animation**: sechs Datenquellen-Chips (Finance, ERP, CRM, HR, Projekte, DWH) treiben unverbunden umher | „Buchhaltung, ERP, CRM, Personal, Projekte – die Zahlen liegen verstreut in getrennten Systemen. Abweichungen fallen oft erst auf, wenn es teuer wird.“ |
| 3 | 0:20–0:38 | **Live-Demo (echter Screencast)**: Cockpit der Website, Wechsel ins Szenario „Kritisch“, KPI-Karten springen um, KI-Findings und Empfehlung erscheinen | „Unser IDP-Projekt zeigt die Lösung: ein KI-Controlling-Cockpit, am Beispiel des fiktiven Unternehmens Kara. Die KI verbindet die Datenquellen, berechnet Kennzahlen wie Umsatz, Kostenquote und Liquidität – und erkennt Risiken auf einen Blick. Wird es kritisch, erklärt sie, was warum auffällig ist, und schlägt konkrete Maßnahmen vor.“ |
| 4 | 0:38–0:50 | **Screencast Prozessfluss**: die sechs Schritte laufen automatisch durch, „Freigeben“-Klick als Abschluss | „Der Ablauf ist immer gleich: Daten anbinden, analysieren, begründen, empfehlen. Und die letzte Entscheidung trifft ein Mensch – freigeben oder ablehnen, per Klick.“ |
| 5 | 0:50–1:00 | **Outro-Karte**: Logo, Hochschule Pforzheim · IDP, Team, QR-Code, Live-URL | „Ein Projekt der Hochschule Pforzheim. Übrigens: Auch diese Website und dieses Video sind mit KI entstanden. Jetzt live ausprobieren!“ |

## Produktionsweg

1. Intro-, Problem- und Outro-Karte als animierte HTML-Seiten (`video/stage/`),
   im Design der Website.
2. Segmente 3–4 als echter Screencast der Live-Website (Playwright, Dark-Mode,
   1080p) – die Demo erklärt sich selbst, mit korrekter deutscher Beschriftung.
3. Voiceover je Segment mit Microsoft-Neural-Stimme `de-DE-ConradNeural`
   (edge-tts), passgenau auf die Segmentlängen gelegt.
4. Schnitt und Tonmischung mit ffmpeg → `video/techday-video.mp4`.

Hinweis: Eine Variante mit KI-generierter Film-B-Roll (RunComfy) war geplant,
die RunComfy-CLI ließ sich auf dieser Maschine jedoch nicht installieren.
Der Screencast-Ansatz zeigt dafür das echte Produkt – für ein Erklärvideo am
Stand der größere Mehrwert.
