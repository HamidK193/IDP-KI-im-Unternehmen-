# BUILD-NOTES – Techday-Video V3 (Remotion)

Erstellt am 12.06.2026 von Claude (Claude Code) in einem autonomen Durchlauf.
Ergebnis: `video/techday-video.mp4` – 65,0 s, 1920×1080, 60 fps, H.264 (CRF 18),
Stereo-Ton (ElevenLabs-Voiceover + dezentes Musikbett).

## Warum Remotion?

Der bisherige Weg (animierte HTML-Stages per Chrome-DevTools-Screencast
aufnehmen) hatte einen systematischen Fehler: Zu Szenenbeginn blitzte für
einen Frame der **Endzustand** der Seite auf, bevor die CSS-Animationen neu
starteten – sichtbar als Ruckler bei den Szenenwechseln. Remotion rendert
jedes Bild **deterministisch als Funktion der Framenummer** (React +
`useCurrentFrame()`/`interpolate()`). Es gibt keinen Lade- oder
Animations-Neustart-Moment mehr, also auch kein Aufblitzen; zusätzlich sind
jetzt echte 60 fps und 0,5-s-Crossfades zwischen allen Szenen drin
(`@remotion/transitions`).

## Struktur

```
video/
├── techday-video.mp4      Finales Video (Bild + Ton)
├── techday-video-raw.mp4  Remotion-Render ohne Ton (Zwischenprodukt, nicht eingecheckt)
├── skript.md              Drehbuch V3 (Szenen + Sprechertext)
├── BUILD-NOTES.md         Diese Datei
├── preview/               Vorschau-Frames aller Szenen
├── stage/                 Alte HTML-Stages (V2, nur noch Referenz)
└── remotion/              Remotion-Projekt
    ├── package.json       remotion, @remotion/transitions, @remotion/google-fonts
    ├── public/qr.png      QR-Code → https://kara-cockpit.de
    └── src/
        ├── Main.tsx       Szenenfolge, Crossfades, KI-Sticker, Timing-Konstanten
        ├── theme.ts       Farben (Petrol/Smaragd) + Fonts (Bricolage, JetBrains Mono)
        ├── components.tsx GridBg, Glow, Reveal-/Pop-Helfer, AiSticker
        └── scenes/        Intro, Problem, Solution, Scenarios, Flow, Outro
```

## Stimme (ElevenLabs)

- **Modell `eleven_multilingual_v2`**, Stimme **„Daniel“** (Steady Broadcaster),
  direkt über die ElevenLabs-API (`ELEVENLABS_API_KEY` aus `.env`, nicht im Repo).
- **Aussprache-Lexikon** im Generator-Skript: `ERP → „Ie-Ar-Pi“`,
  `CRM → „Ssi-Ar-Emm“`, damit die Abkürzungen englisch buchstabiert werden;
  Lehnwörter wie „Cockpit“ und „Forecast“ spricht das Modell von sich aus
  englisch. (SSML-`phoneme`-Tags unterstützt multilingual_v2 nicht, daher
  Alias-Ersetzung im Text.)
- Nachbearbeitung: Stille an den Rändern getrimmt, Tempo ×1,07 (pitch-neutral,
  `atempo`), passgenau auf die Szenen gelegt, Summe auf **−16 LUFS**
  normalisiert (`loudnorm`).
- **Musikbett**: ElevenLabs Sound-Generation (22-s-Ambient-Loop, 3× mit
  2-s-Crossfades verlängert), auf **−32 LUFS** abgesenkt – deutlich unter der
  Stimme.

## Umgesetzte Verbesserungen

1. Voiceover komplett neu (ElevenLabs statt msedge-tts), DE/EN-Mischung korrekt.
2. 60 fps, weiche Easings (`Easing.bezier(0.22,1,0.36,1)`), gestaffelte
   Reveals, Crossfades – **kein Aufblitzen des Endbilds** (deterministischer
   Frame-Render).
3. Live-Demo-Screencast ersetzt durch die Szene **„Ein Cockpit. Drei
   Szenarien.“**: KPI-Dashboard morpht stabil → kritisch → Wachstum, Werte
   **zählen** beim Wechsel (bei Einheitswechsel Mio./Tsd. Crossfade),
   KI-Finding und Risiko-Pille je Szenario, ~4,5 s Lesezeit pro Szenario.
4. Szene „Eine KI verbindet alles“: **Pfeilspitzen** an allen Leitungen,
   wandernde Fluss-Punkte und große pulsierende **Richtungspfeile** zwischen
   den Spalten (Quellen → Cockpit → Kennzahlen).
5. Kostenquote-Trend als **„%“** statt „pp“ (alle drei Szenarien).
6. Alle Zahlen exakt aus `website/script.js` übernommen (6 KPIs × 3 Szenarien
   inkl. Trends, Findings, Risiko).
7. Outro zeigt **kara-cockpit.de**; QR-Code neu generiert auf
   `https://kara-cockpit.de` (`video/remotion/public/qr.png`, ebenso
   `website/assets/qr-live.svg` für die Website aktualisiert).
8. Sticker **„Mit KI (Claude) erstellt“** oben rechts ab Szene 2 durchgehend
   (im Intro trägt das große Badge dieselbe Botschaft).
9. Tempo: 65,0 s gesamt; größte Sprechpause < 1 s; Szenario-Szene bewusst
   die längste (13,5 s) zum Mitlesen.

## Neu rendern

```powershell
cd A:\Codex\IDP\video\remotion
npm install
npx remotion render src/index.ts Main ../techday-video-raw.mp4 --codec h264 --crf 18
# Ton (VO-Erzeugung + Mix) siehe Skripte make_vo3.js / Mix-Befehl unten –
# Voiceover-Offsets (Sekunden): 0.4, 7.1, 18.4, 30.6, 43.6, 53.4
```

Der Audio-Mix (ffmpeg): sechs VO-WAVs per `adelay` an die Szenenstarts legen,
`amix` + `loudnorm I=-16`, Musikbett dazu, dann mit dem Remotion-Render muxen.
Die Szenen-/VO-Offsets sind in `video/remotion/src/Main.tsx` (SCENES) und hier
dokumentiert; wer Szenenlängen ändert, muss beide Stellen anfassen.

## Entscheidungen

- **Audio außerhalb von Remotion gemischt** (ffmpeg statt `<Audio>`-
  Komponenten): erlaubt `loudnorm`-Messung über die fertige Summe und hält den
  Remotion-Render schnell und rein visuell.
- **Stimme „Daniel“** statt einer deutschen Community-Stimme: auf dem Account
  verfügbar, sehr ruhige Erzähllage, sauberes Deutsch in multilingual_v2.
- Die alten HTML-Stages in `video/stage/` bleiben als Referenz liegen, werden
  aber nicht mehr für den Render benutzt.
