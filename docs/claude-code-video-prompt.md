# Claude-Code-Prompt: Techday-Video überarbeiten (autonom)

> So nutzt du das: Claude Code im Ordner `A:\Codex\IDP` öffnen, den Text unter
> „PROMPT" komplett einfügen, bestätigen. Läuft eigenständig bis zum Ende durch.

---

## PROMPT

Du arbeitest im Repository `A:\Codex\IDP`. Überarbeite das bestehende
Techday-Video zu einer deutlich besseren Version. Arbeite **vollständig autonom
bis zum Ende** durch, ohne Rückfragen. Ergebnis ist eine neue, saubere
`video/techday-video.mp4` (1920×1080, H.264). Schreibe am Ende eine kurze
Zusammenfassung in `video/BUILD-NOTES.md` und committe alles.

### Ausgangslage

- Aktuelles Video: animierte HTML-Stages in `video/stage/` (intro, problem,
  solution, flow, outro), Sprechertext/Aufbau in `video/skript.md`, Render
  bisher per Chrome-DevTools-Screencast (JPEG-Frames) + ffmpeg.
- Demo-Daten und Design-Referenz: `website/script.js` (6 Datenquellen mit
  Datenqualität, 6 Kennzahlen, 3 Szenarien stabil/kritisch/Wachstum mit Werten,
  Findings, Empfehlungen) und das Petrol-/Dark-Design der Website.
- Fakten/Inhalt: `docs/thesis/` (Projekt, Fallbeispiele, Verknüpfungen).

### Wichtigster technischer Fix (Ursache des „Hängers")

Beim aktuellen Screencast blitzt zu Szenenbeginn (z. B. Sekunde 8–9 und bei
Szenenwechseln) **einen Frame lang das fertige Bild auf**, bevor die Animation
startet, bei der die Elemente nacheinander erscheinen. Das wirkt wie ein Ruckler.

Bau das Video deshalb **deterministisch neu mit Remotion** (Skill
`remotion-best-practices` ist installiert; lies zuerst die SKILL.md). Remotion
rendert Frame für Frame, dadurch verschwindet das Aufblitzen vollständig und die
Animationen werden butterweich. **Übernimm das vorhandene Design 1:1** (Farben,
Typografie, Kara·Cockpit-Branding, Szenenfolge und Sprechertext aus
`video/skript.md` und `video/stage/*.html`), setze es aber als Remotion-
Kompositionen um. Falls eine Remotion-Migration wider Erwarten nicht möglich ist,
behebe ersatzweise im HTML/Screencast-Weg den Flash, indem jede Stage garantiert
im **Anfangszustand (Elemente unsichtbar)** startet und die Aufnahme erst nach
gesetztem Initialzustand beginnt.

### Gewünschte Verbesserungen (alle umsetzen)

1. **Voiceover komplett ersetzen.** Neue, hochwertige Stimme. **Deutsche Wörter
   deutsch aussprechen, englische Fachbegriffe englisch** (z. B. Cockpit,
   Forecast, ERP, CRM, Deep Learning, Large Language Model, Dashboard). Bevorzugt
   **ElevenLabs `eleven_multilingual_v2`** über den installierten Skill
   `elevenlabs-tts` direkt über die **ElevenLabs-API** mit `ELEVENLABS_API_KEY` aus `.env`, kein inference.sh nötig. Pflege eine
   kleine Aussprache-/Lexikon-Liste für die wiederkehrenden Fachbegriffe und
   nutze, wo möglich, Sprach-Tags/SSML, damit die Mischung DE/EN stimmt. Falls
   kein API-Key verfügbar ist: nutze eine gute mehrsprachige Neural-Stimme
   (msedge-tts) und korrigiere die kritischen Begriffe gezielt über
   Aussprache-Hinweise. Lege die Stimme passgenau auf die Szenenlängen, Lautheit
   ca. −16 LUFS.
2. **Animationen flüssiger** (weiche Easings, gestaffelte Reveals, 60 fps, keine
   harten Sprünge). Übergänge zwischen den Szenen weich (Cross-Fade/Slide), kein
   Aufblitzen des Endbildes.
3. **„Live-Demo"-Szene ersetzen:** Statt des rohen Website-Screencasts eine
   **klare, übersichtliche Grafik** mit demselben Inhalt, die **die drei
   Szenarien (stabil, kritisch, Wachstum)** zeigt und weich zwischen ihnen
   überblendet (KPIs zählen/animieren beim Wechsel). Tempo so, dass man die
   Werte lesen kann.
4. **Pfeile/Flussrichtung:** In der Szene „Eine KI verbindet alles" deutlich
   sichtbare **Pfeile nach rechts** ergänzen (Datenquellen → Kara·Cockpit →
   Kennzahlen), damit die Flussrichtung klar ist.
5. **Einheit korrigieren:** Bei der Kostenquote nicht „pp" sondern **„%"**
   anzeigen (Auftraggeber-Wunsch; gemeint ist die Veränderung der Quote).
6. **Daten aktualisieren:** Alle Zahlen exakt aus `website/script.js`
   übernehmen (alle drei Szenarien). Konsistenz mit der Doku sicherstellen.
7. **Schluss-URL aktualisieren:** Am Ende **`kara-cockpit.de`** anzeigen (nicht
   mehr die alte github.io-Adresse) und den **QR-Code auf `https://kara-cockpit.de`**
   neu generieren.
8. **„Mit KI erstellt"-Sticker:** Am Ende (gern dezent auch durchgehend oben
   rechts) ein sichtbares **Badge/Sticker oben rechts**, das zeigt, dass auch
   dieses Video per KI (Claude) erstellt wurde.
9. **Tempo prüfen:** Gesamtlänge ca. 60–65 s, nicht zu schnell und nicht zu
   langsam; jede Szene lang genug zum Mitlesen, aber ohne Hänger.

### Daten (aus website/script.js, zur Sicherheit)

Szenario „stabil": Umsatz 4,82 Mio. € (+8,4 %), Kostenquote 41,8 % (−1,2 %),
Deckungsbeitrag 1,34 Mio. € (+5,1 %), Liquidität 780 Tsd. € (+12 Tage),
Budgetabweichung 3,6 % (im Rahmen), Risikoindex 42 (niedrig). Die Szenarien
„kritisch" und „Wachstum" ebenfalls aus `script.js` übernehmen.

### Skills nutzen

`remotion-best-practices` (Video, Captions, Audio-Sync), `elevenlabs-tts` +
`belt-cli` (Stimme). Lies die jeweilige SKILL.md vor Gebrauch. Installiere bei
Bedarf weitere Skills per `npx skills add <repo> --skill <name>`. Für QR-Code
und ffmpeg-Schnitt reichen normale Bibliotheken/CLI.

### Qualitätssicherung (selbst durchführen)

- Rendere Testframes und prüfe: **kein Aufblitzen** des Endbildes zu
  Szenenbeginn, weiche Übergänge, lesbares Tempo.
- Audio synchron zu den Szenen, Fachbegriffe korrekt ausgesprochen (DE/EN).
- Pfeile, „%" statt „pp", aktuelle Zahlen, `kara-cockpit.de`, QR und
  KI-Sticker sind vorhanden.
- Exportiere final 1920×1080, H.264 (CRF ~18), und lege ein paar
  Vorschau-Frames unter `video/preview/` ab.

### Abschluss

`video/BUILD-NOTES.md` schreiben (Vorgehen, Stimme/Modell, getroffene
Entscheidungen, wie man neu rendert), dann committen und pushen. Erst beenden,
wenn die neue `video/techday-video.mp4` fertig, flüssig und geprüft ist.

### Audio-Zugang (verbindlich)

- Stimme über die **ElevenLabs-API direkt**, Schlüssel `ELEVENLABS_API_KEY` aus `.env` (in der Umgebung verfügbar; nicht ins Repo schreiben, nicht committen). Modell **`eleven_multilingual_v2`**, eine natürliche deutsche Stimme; deutsche Wörter deutsch, englische Fachbegriffe englisch (Aussprache-/Pronunciation-Dictionary nutzen).
- Freigeschaltet sind auch **Sound Effects** und **Music** der ElevenLabs-API – nutze sie optional für **dezente Hintergrundmusik und kleine SFX** (leise, ca. −24 LUFS unter der Stimme), falls es das Video aufwertet. Stimme bleibt klar im Vordergrund.

---

## Hinweis für mich (Abdul)

- Der ElevenLabs-Key liegt einsatzbereit in `.env` (`ELEVENLABS_API_KEY`) und ist per .gitignore vom Repo ausgeschlossen.
- „pp" bedeutet eigentlich Prozentpunkte; auf deinen Wunsch wird „%" angezeigt.
