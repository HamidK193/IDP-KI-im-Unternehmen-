# Prompt für Claude Code – LinkedIn-Projektvorstellungsvideo

Kopiere den folgenden Text als Auftrag in Claude Code. Er ist so geschrieben, dass Claude Code das Video eigenständig bis zur fertigen Datei erstellt.

---

## Auftrag

Erstelle mir ein fertiges, hochwertiges **Projektvorstellungsvideo für LinkedIn**. Arbeite eigenständig bis zur fertigen MP4-Datei, ohne mich bei jedem Schritt zu fragen. Triff sinnvolle Designentscheidungen selbst und kontrolliere am Ende dein Ergebnis (Bild, Ton, Länge, Untertitel, Format).

### Ziel und Plattform
- **Zielplattform: LinkedIn.** Optimiere alles konsequent für den LinkedIn-Feed.
- **Länge: 40 bis 60 Sekunden.**
- **Format: quadratisch 1080 x 1080** (alternativ 4:5 hochkant 1080 x 1350, falls das im Feed mehr Fläche einnimmt). Wähle eines und begründe kurz im Code-Kommentar.
- **Untertitel sind Pflicht:** LinkedIn-Videos starten stummgeschaltet. Brenne deutsche Untertitel fest ins Bild (synchron zum Voiceover), damit das Video auch ohne Ton verständlich ist.
- **Starker Hook in den ersten 3 Sekunden**, damit der Zuschauer beim Scrollen hängen bleibt.
- Sichere Ränder einhalten (wichtige Inhalte nicht zu nah am Rand), gut lesbare, große Schrift.
- Technisch: MP4, H.264 Video, AAC Audio, unter 200 MB.

### Worum es geht (Projektkontext)
Es ist ein **Interdisziplinäres Projekt (IDP) an der Hochschule Pforzheim**. Thema: **Künstliche Intelligenz für kleine Unternehmen, umgesetzt am Beispiel eines KI-Controlling-Cockpits**. Vorgestellt von **Abdulhamid Karatas und Kadir Atar**, betreut von **Prof. Dr. Bettina C. K. Binder**. Die zugehörige Website ist **kara-cockpit.de**.

Das Cockpit führt verstreute Unternehmensdaten (Finanzbuchhaltung, ERP, CRM, Personal) an einer Stelle zusammen, berechnet zentrale Kennzahlen, erkennt Trends und Abweichungen und gibt eine nachvollziehbare Handlungsempfehlung mit Quelle, Datenqualität und Risiko. Die Entscheidung trifft am Ende immer der Mensch. Drei Fallbeispiele: Controlling-Cockpit, Budget- und Kostenabweichungsanalyse, Forecasting und Frühwarnsystem.

### Inhaltlicher Aufbau (Schritt für Schritt, als Projektvorstellung)
Erkläre das Projekt nachvollziehbar in dieser Reihenfolge und mache früh klar, dass es ein IDP der Hochschule Pforzheim ist:

1. **Hook / Einstieg (0-5 s):** Aufmerksamkeitsstarke Frage oder Aussage, z. B. wie kleine Unternehmen mit KI besser steuern können. Sofort als Projektvorstellung erkennbar.
2. **Wer und Was (5-12 s):** „Interdisziplinäres Projekt an der Hochschule Pforzheim", Projekttitel, die beiden Namen. Hier den Hochschulbezug klar setzen.
3. **Problem (12-22 s):** Kleine Unternehmen, verstreute Daten, kein Überblick, keine Zeit für große IT-Projekte.
4. **Lösung (22-35 s):** Das KI-Controlling-Cockpit, das die Daten zusammenführt und Kennzahlen, Trends und Empfehlungen liefert. Gern die drei Fallbeispiele kurz andeuten.
5. **Das Besondere (35-48 s):** Nachvollziehbarkeit (Quelle, Datenqualität, Risiko) und „der Mensch entscheidet".
6. **Abschluss / CTA (48-58 s):** Einladung, die Website kara-cockpit.de zu besuchen, plus Hochschule Pforzheim, Namen und Betreuung Prof. Dr. Binder.

### Look and Feel
- Akademischer, klarer Stil passend zur Hochschule Pforzheim. Farbwelt: Slate/Dunkelblau (#0F172A), Rosé-Akzent (#E11D48), helle Flächen (#F1F5F9, #FFFFFF), gedämpftes Grau (#475569, #94A3B8).
- Wenn vorhanden, das **HS-PF-Logo** dezent einbinden (liegt unter `outputs/deck-assets/hspf-logo.png`) und zur **Website** kara-cockpit.de passende Optik wählen (Repo unter `website/`).
- Saubere, moderne Motion-Grafik: sanfte Ein- und Ausblendungen, animierte Kennzahlen, ein zusammenfließender Datenfluss ins Cockpit, eine Empfehlungs-Karte. Echte Screenshots der Website oder des Cockpits dürfen gern verwendet werden, wenn das authentischer wirkt.

### Ton / Voiceover
- **Deutscher Voiceover**, ruhig, sachlich, professionell. Untertitel exakt synchron dazu.
- Optional dezente, unaufdringliche Hintergrundmusik (leise, lizenzfrei). Sprache muss klar im Vordergrund bleiben.

### Skills nutzen
Im Projektordner `.claude/skills` liegen passende Skills. Nutze sie, wo sinnvoll, insbesondere:
- `ai-video-generation` und `remotion-best-practices` für Konzept und Umsetzung des Videos,
- `elevenlabs-tts` für den deutschen Voiceover,
- `web-design-guidelines`, `frontend-design` und `agent-slides` für sauberes, modernes visuelles Design.
Falls dir eine passende Fähigkeit fehlt, schau mit `find-skills` nach. Lies die jeweilige SKILL.md, bevor du sie anwendest.

### Vorgehen und technische Hinweise
- Schreibe zuerst ein kurzes Skript (Szenen plus Sprechertext), dann erzeuge den Voiceover, dann rendere die animierten Szenen, dann montiere alles synchron zusammen.
- Nutze die im Projekt vorhandenen Mittel (z. B. ffmpeg, Python mit PIL/Matplotlib zum Frame-Rendering). Falls eine TTS-Stimme nötig ist, verwende den vorhandenen Zugang (API-Key liegt in der gitignorierten `.env`, niemals committen).
- Halte das Rendering effizient (z. B. 25-30 fps, Szenen einzeln rendern und am Ende zusammenfügen), damit es zuverlässig durchläuft.

### Ergebnis
- Speichere das fertige Video als `outputs/IDP_LinkedIn_Projektvideo.mp4`.
- Lege zusätzlich das verwendete Skript als `outputs/Video-Skript-LinkedIn.md` ab.
- Prüfe am Ende selbst: Länge zwischen 40 und 60 s, Untertitel vorhanden und synchron, Auflösung korrekt, Audio sauber, und beschreibe mir kurz das Ergebnis.
