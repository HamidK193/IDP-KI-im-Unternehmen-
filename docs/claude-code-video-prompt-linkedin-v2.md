# Neues Skript + Prompt für Claude Code – LinkedIn-Projektvideo (überarbeitet)

Behebt das Feedback: Untertitel exakt wie gesprochen, kein leerer unterer Bildbereich, gestaffeltes Aufpoppen, getrennte Systeme klar als „ohne Verbindung" zeigen, drei Fallbeispiele unten groß nacheinander, bessere männliche Stimme, **natürlich gesprochene ganze Sätze** und **korrekte Aussprache** (Cockpit englisch, Abkürzungen buchstabiert).

---

## Teil 1 – Neues Skript

Format: 1080 x 1350 (4:5, hochkant für LinkedIn). Stil: Slate-&-Emerald, dunkel.
**Logo:** Verwende durchgehend das weiße, transparente HS-PF-Logo unter `assets/brand/hspf-logo-white.png` (kein weißer Kasten dahinter), oben links, deutlich größer als bisher, in jeder Szene gleich platziert.
Der Text ist als **flüssig gesprochener Text** formuliert, nicht als Stichpunkte. Der Untertitel zeigt jeweils genau diesen Satz, synchron zum Ton, und wird **nie abgeschnitten** (lange Wörter wie „Personalverwaltung" umbrechen oder kleiner setzen, immer im sicheren Rand).

| Szene | Gesprochener Text = Untertitel (ganze Sätze, gesprochen) | Bild / Animation (Bild füllt die ganze Fläche) |
|---|---|---|
| 1 · Hook | „Wie behalten kleine Unternehmen ihre Zahlen eigentlich im Griff?" | Große Schlagzeile mittig, feines Raster im Hintergrund. Oben Kicker „IDP · Hochschule Pforzheim". Unten ein dezenter Cockpit-Streifen, damit nichts leer wirkt. |
| 2 · Wer/Was | „In unserem Interdisziplinären Projekt an der Hochschule Pforzheim haben wir darauf eine Antwort entwickelt: das Kara-Cockpit, ein KI-Controlling-Werkzeug für kleine Unternehmen." | Projekt-Titelkarte mit großem HS-PF-Logo, Projekttitel und den Namen Abdulhamid Karatas und Kadir Atar. Fläche gefüllt. |
| 3 · Problem | „Denn in den meisten Betrieben liegen die Zahlen verstreut: in der Buchhaltung, im ERP-System, im CRM und in der Personalverwaltung. Lauter einzelne Inseln, die nichts miteinander verbindet." | Vier Systemblöcke in die vier Ecken verteilt, jeder einzeln. **Keine Linien dazwischen**, stattdessen gestrichelte abgeschnittene Stummel und mittig ein Label „getrennte Systeme, kein gemeinsamer Nenner". Blöcke poppen nacheinander auf. |
| 4 · Lösung | „Genau hier setzt das Kara-Cockpit an und führt alle diese Zahlen an einem einzigen Ort zusammen." | Aus denselben vier Blöcken wachsen jetzt Verbindungslinien zur Mitte, das zentrale „Kara·Cockpit" leuchtet auf. Der Kontrast zu Szene 3 trägt die Aussage. |
| 5 · Nutzen | „Dort werden die wichtigsten Kennzahlen automatisch berechnet, Trends und Abweichungen erkannt und verständlich erklärt." | Drei große KPI-Karten zählen hoch (Umsatz, Kostenquote, Liquidität), darunter eine ansteigende Trendlinie. Fläche voll genutzt. |
| 6 · Fallbeispiele | „Wir zeigen das an drei Fallbeispielen: dem Kara-Cockpit selbst, der Kostenabweichung und dem Frühwarnsystem." | Unten groß die Überschrift „Drei Fallbeispiele". Dann poppen **drei große Karten nacheinander** auf (01 Controlling-Cockpit, 02 Kostenabweichung, 03 Frühwarnsystem), je passend zur Nennung im Text. |
| 7 · Vertrauen + CTA | „Und das Beste daran: jede Empfehlung bleibt nachvollziehbar, mit Quelle und Risiko. Schau es dir selbst an, auf kara-cockpit.de." | Empfehlungs-Karte mit Tags Quelle, Datenqualität, Risiko, daneben groß die Domain kara-cockpit.de, unten HS-PF-Logo und die beiden Namen. |

Gesamtlänge danach ca. 55 bis 62 Sekunden.

### Aussprache und Sprechweise (sehr wichtig)
- **Feste Regel: Im gesprochenen Text kommt „Cockpit" nie allein vor.** Es heißt im Ton **immer „Kara-Cockpit"** (genau diese Form wird nachweislich richtig ausgesprochen, sie klingt englisch wie „cockpit", IPA ˈkɒkpɪt). Auch Verbund-Wörter wie „Controlling-Cockpit" werden im Ton vermieden, stattdessen „Kara-Cockpit". Bild- und Kartentexte dürfen weiterhin „Controlling-Cockpit" zeigen, das wird ja nicht gesprochen.
- Hintergrund: In früheren Versionen war die Aussprache mal richtig (z. B. bei „kara-cockpit"), mal falsch („kakpitt", etwa in „KI-Controlling-Cockpit"). Mit der Regel „im Ton immer Kara-Cockpit" ist sie überall gleich korrekt. Erzeuge zur Sicherheit vorab ein kurzes Testaudio mit „Kara-Cockpit" und höre, dass es passt.
- **Abkürzungen werden buchstabiert, nicht als Wort gelesen:** „ERP" als E – R – P, „CRM" als C – R – M, „KPI" als K – P – I.
- Trick für die Vertonung: Im **Text für die Sprachausgabe** dürfen diese Wörter anders geschrieben werden, damit die Aussprache stimmt (z. B. „E-R-P", „C-R-M", englische Lautung für Cockpit). Der **angezeigte Untertitel** bleibt normal geschrieben („ERP-System", „CRM", „Cockpit").
- Ton: ruhig, natürlich, wie frei gesprochen, nicht abgelesen. Kleine Sprechpausen an den Satzzeichen, leichte Betonung. Es soll klingen, als würde ein Mensch das Projekt erzählen.

---

## Teil 2 – Prompt für Claude Code

Kopiere ab hier in Claude Code:

```
Erstelle mir ein überarbeitetes Projektvorstellungsvideo für LinkedIn, eigenständig
bis zur fertigen MP4. Nutze das Skript in docs/claude-code-video-prompt-linkedin-v2.md
(Teil 1) als verbindliche Vorlage. Behebe dabei gezielt folgende Punkte:

1. NATÜRLICH GESPROCHENE GANZE SÄTZE. Der Text muss wie frei gesprochen klingen, nicht
   wie abgelesene Stichpunkte. Verwende vollständige, flüssige Sätze (siehe Skript),
   ruhiges Sprechtempo, kleine Pausen an Satzzeichen, leichte Betonung.

2. AUSSPRACHE COCKPIT (feste Regel). Im gesprochenen Text kommt „Cockpit" NIE allein
   vor, es heisst im Ton IMMER „Kara-Cockpit" (diese Form wird korrekt englisch
   ausgesprochen, IPA ˈkɒkpɪt). Auch „Controlling-Cockpit" im Ton vermeiden und durch
   „Kara-Cockpit" ersetzen. Bild-/Kartentexte duerfen weiter „Controlling-Cockpit"
   zeigen. So ist die Aussprache an JEDER Stelle gleich richtig (frueher war sie z. B.
   bei Sekunde 11 und 40 falsch, bei Sekunde 26 richtig). Erzeuge vorab ein kurzes
   Testaudio mit „Kara-Cockpit" und pruefe per Anhoeren.
   Abkuerzungen werden BUCHSTABIERT, nicht als Wort gelesen: ERP als E-R-P, CRM als
   C-R-M, KPI als K-P-I (im Vertonungstext entsprechend „E-R-P", „C-R-M" schreiben).
   Der angezeigte UNTERTITEL bleibt normal geschrieben (ERP-System, CRM, Cockpit).

3. UNTERTITEL DECKUNGSGLEICH MIT DEM GESPROCHENEN. Der eingeblendete Untertitel zeigt
   in jeder Szene genau den gesprochenen Satz (normal geschrieben), nichts weglassen,
   nichts umformulieren, synchron zum Ton, gern Satz für Satz oder als sanftes
   Wort-für-Wort-Highlight.

4. KEINE LEEREN FLÄCHEN. Der untere Bildbereich darf nicht leer bleiben. Fülle die
   ganze Fläche: Untertitel im unteren Drittel, darüber die Hauptgrafik. In ruhigen
   Szenen ergänze unterstützende Elemente statt Leerraum.

4b. UNTERTITEL NIE ABSCHNEIDEN. Untertitel und Texte müssen immer komplett sichtbar
   sein, innerhalb sicherer Ränder. Lange Wörter wie „Personalverwaltung" (war bei
   Sekunde 20 abgeschnitten) müssen vollständig erscheinen, notfalls Zeilenumbruch
   oder etwas kleinere Schrift. Nichts wird am Rand abgeschnitten.

4c. LOGO. Verwende durchgehend das weiße, transparente HS-PF-Logo unter
   assets/brand/hspf-logo-white.png (KEIN weisser Kasten dahinter), oben links,
   deutlich groesser als bisher, in JEDER Szene identisch platziert. Falls noetig
   skaliere es, aber nutze ueberall dieselbe Datei.

5. GESTAFFELTES AUFPOPPEN, GRÖSSER. Elemente erscheinen nacheinander passend zum
   gesprochenen Text und etwas größer als bisher. Besonders die drei Fallbeispiele
   (Szene 6) unten als große Überschrift plus drei große Karten, die nacheinander
   aufpoppen, je zum Zeitpunkt ihrer Nennung.

6. VERSTREUTE SYSTEME KLAR ZEIGEN (Szene 3). Die vier Systeme (Buchhaltung, ERP, CRM,
   Personal) nicht einfach nebeneinanderstellen, sondern als getrennte Inseln OHNE
   Verbindung (keine verbindenden Linien, gestrichelte abgeschnittene Stummel, Label
   „getrennte Systeme, kein gemeinsamer Nenner"). In Szene 4 wachsen dann sichtbar
   Verbindungslinien zum zentralen Cockpit (Aha-Effekt).

7. BESSERE STIMME. Verwende eine natürliche, tiefe, ruhige MÄNNLICHE deutsche
   Erzählerstimme im Stil eines professionellen Synchron- bzw. Trailersprechers.
   Wähle eine deutschsprachige oder multilinguale Männerstimme und stelle sie
   natürlicher ein (niedrigere Stability für mehr Ausdruck, hohe Similarity, leichte
   Style-Anhebung). KEINE Imitation oder Klon einer real existierenden, bekannten
   Person (kein Schauspieler, kein bestimmter Sprecher) aus rechtlichen Gründen,
   nur eine generisch hochwertige, glaubwürdige Männerstimme.

Rahmen: Format 1080 x 1350 (4:5, hochkant), Look Slate & Emerald (dunkel), HS-PF-Logo
oben, klar als IDP der Hochschule Pforzheim erkennbar, Länge 55 bis 62 Sekunden,
MP4 (H.264, AAC).

Vorgehen: erst Voiceover je Satz erzeugen (mit den Aussprache-Schreibweisen) und Längen
messen, dann Szenen passend zur Audiolänge rendern, Untertitel exakt dazu timen, alles
synchron zu MP4 montieren. Nutze die Skills in .claude/skills, vor allem
ai-video-generation, remotion-best-practices und elevenlabs-tts; lies die jeweilige
SKILL.md vorher.

Speichere das Ergebnis als outputs/IDP_LinkedIn_Projektvideo.mp4 und beschreibe mir am
Ende kurz, was du geändert hast. Prüfe selbst: Aussprache korrekt (Cockpit englisch,
ERP/CRM buchstabiert), Text klingt gesprochen, Untertitel deckungsgleich mit dem Ton,
keine leeren Flächen, Fallbeispiele poppen groß nacheinander auf, Länge im Ziel.
```
