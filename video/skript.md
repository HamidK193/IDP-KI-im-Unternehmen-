# Techday-Video: „KI macht die Zahlen kleiner Unternehmen lesbar“

**Länge:** 63,5 Sekunden · **Format:** 1920×1080 (16:9), für Stand-Monitor und LinkedIn
**Sprache:** Deutsch, gesprochen · **Stimme:** `de-DE-FlorianMultilingualNeural` (natürliche Neural-Stimme, Tempo −4 %)
**Stil:** dunkles Petrol-Design der Website, durchgehende Narration (kaum stumme Szenen)

## Aufbau und Sprechertext (V2)

| # | Zeit | Bild | Sprechertext (Voiceover) |
|---|------|------|--------------------------|
| 1 | 0:00–0:07,5 | **Intro-Karte** (animierter Titel, KI-Badge, Sparklines) | „Kleine Unternehmen sammeln jeden Tag Daten. Aber der schnelle Überblick? Der fehlt fast immer.“ |
| 2 | 0:07,5–0:19 | **Problem-Grafik**: sechs Datenquellen-Silos treiben unverbunden umher | „Buchhaltung, ERP, CRM, Personal, Projekte. Jede Zahl lebt in einem anderen System. Und Abweichungen fallen oft erst auf, wenn es teuer wird.“ |
| 3 | 0:19–0:32,5 | **Lösungs-Diagramm (neu)**: animierte Leitungen verbinden die sechs Quellen mit dem Kara·Cockpit-Hub, rechts poppen Kennzahlen auf | „Unser IDP-Projekt löst das mit einem KI-Controlling-Cockpit. Die KI verbindet alle Datenquellen, berechnet die wichtigsten Kennzahlen, und erkennt Trends und Risiken. Automatisch.“ |
| 4 | 0:32,5–0:42,5 | **Live-Demo (echter Screencast)**: Cockpit, Wechsel ins Szenario „Kritisch“, KPIs springen um, Findings + Empfehlung | „Wird es kritisch, zeigt das Cockpit sofort, wo es brennt. Die KI erklärt, was warum auffällig ist, und schlägt konkrete Maßnahmen vor.“ |
| 5 | 0:42,5–0:53 | **Prozessfluss-Grafik (neu)**: 5 Schritte mit Icons und Fortschrittsbalken, Schritt 5 „Mensch prüft & entscheidet“ in Amber, „Freigeben“-Puls | „Der Ablauf ist immer gleich: Daten anbinden, analysieren, begründen, empfehlen. Und die letzte Entscheidung? Die trifft immer ein Mensch.“ |
| 6 | 0:53–1:03,5 | **Outro-Karte**: Logo, Hochschule Pforzheim, Team, QR-Code, Live-URL | „Ein Projekt der Hochschule Pforzheim. Übrigens: Website, Demo und dieses Video sind komplett mit KI entstanden. Jetzt live ausprobieren!“ |

## Produktionsweg (V2)

1. Vier animierte HTML-Stages (`video/stage/`): Intro, Problem-Silos,
   **Lösungs-Diagramm** und **Prozessfluss** – plus Outro. Nur eine Szene zeigt
   die rohe Website (die Live-Demo selbst).
2. Aufnahme als **CDP-Screencast in JPEG-Einzelframes (Qualität 95)** statt
   VP8-Video → konstant scharfes Bild, kein Qualitäts-Flackern mehr.
3. Voiceover je Segment mit `de-DE-FlorianMultilingualNeural` (msedge-tts),
   Tempo −4 %, passgenau auf die Segmentlängen gelegt; Lautheit −16 LUFS.
4. Schnitt/Mischung mit ffmpeg (H.264, CRF 18) → `video/techday-video.mp4`.

## Hinweise

- Eine RunComfy-/KI-B-Roll-Variante war geplant; die CLI ließ sich auf dieser
  Maschine nicht installieren. Erklärgrafiken + echte Demo sind für den
  Stand ohnehin die klarere Wahl.
- Noch bessere Stimmen (z. B. ElevenLabs) gibt es als Agent-Skills, sie
  benötigen aber einen eigenen Account/API-Key. Mit Key wäre der Tausch der
  Tonspur in wenigen Minuten gemacht.
