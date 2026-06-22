# Prompt für Claude Code – einheitliches Farbschema (Website + beide Videos)

Kopiere den folgenden Text als Auftrag in Claude Code.

---

## Auftrag

Vereinheitliche das gesamte Projekt auf ein neues Farbschema namens **„Slate & Emerald"**. Betroffen sind die **Website** und **beide Videos** (das bestehende, das du bereits erstellt hast, sowie das neue LinkedIn-Projektvideo). Ändere ausschließlich Farben und Design-Tokens, nicht Inhalt, Layout, Skript oder Vertonung. Arbeite eigenständig bis zum fertigen Ergebnis und kontrolliere am Ende selbst.

### Farb-Tokens (verbindliche Quelle der Wahrheit)

**Hell (Website-Standard, helle Szenen):**
- Hintergrund `#F8FAFC` · Fläche `#FFFFFF` · Karte/tief `#F1F5F9` · Linien `#E2E8F0`
- Text primär `#0F172A` · sekundär `#475569` · gedämpft `#94A3B8`
- Marken-Akzent `#059669` (Hover `#047857`)
- Positiv `#10B981` · Warnung `#F59E0B` (als Text dunkler: `#B45309`) · Negativ `#DC2626`
- Diagramme: Umsatz `#059669` · Kosten `#D97706` · Liquidität `#2563EB`

**Dunkel (Dark-Mode der Website, dunkle Video-Hintergründe):**
- Hintergrund `#0F172A` · Fläche `#1E293B` · tief `#0B1220` · Linien `rgba(226,232,240,0.14)`
- Text primär `#E2E8F0` · sekundär `#94A3B8`
- Marken-Akzent `#34D399` · Positiv `#4ADE80` · Warnung `#FBBF24` · Negativ `#F87171`
- Diagramme: Umsatz `#34D399` · Kosten `#FB923C` · Liquidität `#60A5FA`

### 1. Website
- In `website/styles.css` sind die Design-Tokens bereits auf dieses Schema umgestellt. Prüfe, dass alle drei Token-Blöcke (heller `:root`, `[data-theme="dark"]` und der System-Dark-Block in der `prefers-color-scheme`-Media-Query) genau die obigen Werte verwenden.
- Suche im gesamten `website/`-Ordner nach fest verdrahteten Altfarben (z. B. `#0c7a5a`, `#43d49b`, `#f5f3ec`, `#1c2320`) außerhalb der Token-Blöcke und ersetze sie durch die passenden Variablen oder neuen Werte.
- Prüfe `index.html` und `cockpit.html` in hell und dunkel auf Kontrast und Lesbarkeit. Korrigiere nur, wenn etwas schlecht lesbar ist.

### 2. Beide Videos
- Rendere **beide Videos neu in genau diesem Farbschema**: Hintergründe, Flächen, Texte, Akzent, Kennzahlen, Diagrammfarben und Signalfarben gemäß den Tokens oben. Helle Szenen nutzen die helle Spalte, dunkle Szenen die dunkle Spalte.
- Skript, Sprechertext, Vertonung, Szenenfolge, Länge und Format bleiben unverändert. Es geht ausschließlich um die Farben.
- Achte auf ausreichenden Kontrast (Text auf Akzentflächen gut lesbar) und darauf, dass beide Videos und die Website nun denselben Look haben.

### Skills nutzen
Nutze die Skills im Ordner `.claude/skills`, wo sinnvoll, insbesondere `ai-video-generation` und `remotion-best-practices` für die Videos sowie `web-design-guidelines` und `frontend-design` für die Website. Lies die jeweilige SKILL.md, bevor du sie anwendest.

### Ergebnis
- Aktualisierte Website im Ordner `website/`.
- Beide neu eingefärbten Videos als MP4 im Ordner `outputs/` (vorhandene Dateinamen behalten oder die alten ersetzen).
- Beschreibe mir am Ende kurz, was du geändert hast, und bestätige, dass Website und beide Videos jetzt im einheitlichen Slate-&-Emerald-Schema sind.
