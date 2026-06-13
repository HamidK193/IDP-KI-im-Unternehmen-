# Video-Skript – LinkedIn-Projektvideo „Kara·Cockpit“

**Projekt:** Interdisziplinäres Projekt (IDP), Hochschule Pforzheim –
KI für kleine Unternehmen am Beispiel eines KI-Controlling-Cockpits
**Team:** Abdulhamid Karatas & Kadir Atar · **Betreuung:** Prof. Dr. Bettina C. K. Binder
**Website:** kara-cockpit.de

## Eckdaten

- **Plattform:** LinkedIn-Feed
- **Format:** 4:5 hochkant, **1080 × 1350** (nimmt im Feed mehr vertikale
  Fläche ein als quadratisch → stoppt das Scrollen besser; im Code begründet)
- **Länge:** ~57 s (Vorgabe 40–60 s)
- **Untertitel:** deutsche, fest eingebrannte Untertitel, frame-genau synchron
  zum Voiceover (LinkedIn startet stummgeschaltet → ohne Ton verständlich)
- **Stimme:** ElevenLabs `eleven_multilingual_v2`, Stimme „Daniel“ (ruhig,
  sachlich), Tempo ×1,06, Lautheit −16 LUFS; dezentes Musikbett darunter
- **Look:** akademisch, Slate/Dunkelblau (#0F172A) + Rosé-Akzent (#E11D48),
  HS-PF-Logo durchgehend in der Kopfzeile

## Szenen & Sprechertext

| Szene | Zeit | Bild | Voiceover / Untertitel |
|---|---|---|---|
| **Hook** | 0:00–0:05 | Großes „Klüger entscheiden mit KI.“, rosé Unterstreichung, Puls-Punkt „Projektvorstellung“ | „Wie können kleine Unternehmen mit Künstlicher Intelligenz bessere Entscheidungen treffen?“ |
| **Wer & Was** | 0:05–0:15 | Eyebrow „Interdisziplinäres Projekt · Hochschule Pforzheim“, Titel „Das KI-Controlling-Cockpit“, Namens-Chips | „Das zeigt ein Interdisziplinäres Projekt der Hochschule Pforzheim. Das KI-Controlling-Cockpit, von Abdulhamid Karatas und Kadir Atar.“ |
| **Problem** | 0:15–0:27 | „Daten überall. Kein Überblick.“ + vier driftende Quellen-Karten (Buchhaltung, ERP, CRM, Personal) | „Kleine Unternehmen haben ihre Zahlen überall verstreut: Buchhaltung, ERP, CRM und Personal. Für große IT-Projekte fehlt die Zeit – der Überblick fehlt sowieso.“ |
| **Lösung** | 0:27–0:40 | Quellen fließen in den Kara·Cockpit-Knoten, zählende KPIs (Umsatz 4,82 Mio. €, Kostenquote 41,8 %, Liquidität 780 Tsd. €), drei Fallbeispiel-Chips | „Das Cockpit führt alle Daten an einer Stelle zusammen. Es berechnet Kennzahlen und erkennt Trends und Abweichungen. Drei Fallbeispiele: das Controlling-Cockpit, die Kostenabweichungs-Analyse und ein Frühwarnsystem.“ |
| **Das Besondere** | 0:40–0:49 | Empfehlungs-Karte mit Quelle / Datenqualität / Risiko + „Freigeben / Ablehnen“ | „Das Besondere: jede Empfehlung ist nachvollziehbar. Mit Quelle, Datenqualität und Risiko. Und die Entscheidung trifft am Ende immer der Mensch.“ |
| **Abschluss / CTA** | 0:49–0:57 | Kara·Cockpit-Logo, „kara-cockpit.de“, QR-Code, Namen, Betreuung Prof. Dr. Binder, „mit KI erstellt“ | „Mehr dazu auf kara-cockpit.de. Ein Projekt der Hochschule Pforzheim, betreut von Professorin Doktor Bettina Binder.“ |

## Aussprache-Hinweise (für TTS)

- „ERP“ → als „Ie-Ar-Pi“, „CRM“ → als „Ssi-Ar-Emm“ (englische Buchstabierung)
- „kara-cockpit.de“ → „kara-cockpit punkt de“
- Im Bild stehen die Begriffe normal geschrieben.

## Produktion (reproduzierbar)

1. Voiceover pro Untertitel-Chunk per ElevenLabs erzeugen, Stille trimmen,
   Dauer messen → Timeline (`video/remotion/src/linkedin/timeline.json`).
2. Szenen deterministisch mit **Remotion** rendern (Komposition `LinkedIn`,
   1080×1350, 30 fps) – Untertitel als eigene, zeitgesteuerte Ebene eingebrannt.
3. VO-Spur (−16 LUFS) + leises Musikbett (≈ −32 LUFS) mit ffmpeg mischen und
   mit dem Render muxen → `outputs/IDP_LinkedIn_Projektvideo.mp4`.
