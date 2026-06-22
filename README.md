# IDP-KI-im-Unternehmen

IDP-Demonstrator für den Einsatz von KI in Unternehmen.

Der aktuelle Prototyp ist keine Shop- oder Unternehmenswebsite mehr, sondern
eine interaktive Informations- und Präsentationsoberfläche zum Thema
**KI im Controlling und in der Unternehmenssteuerung**.

Im Mittelpunkt stehen drei datengetriebene KI-Fallbeispiele. Alle werden
vorgestellt, aber das **KI-gestützte Controlling-Cockpit** ist der zentrale
Demo-Use-Case und wird im Detail gezeigt.

## Hauptidee

Unternehmen besitzen viele Datenbanken, aber oft keinen schnellen Überblick über
Kennzahlen, Trends, Abweichungen und Ursachen. Die Demo zeigt, wie KI alle
relevanten Unternehmensdatenbanken auswerten kann, Kennzahlen berechnet,
Entwicklungen visuell darstellt, Auffälligkeiten begründet und konkrete
Handlungsempfehlungen vorschlägt.

Die KI trifft keine automatische Entscheidung. Empfehlungen werden mit Quelle,
Datenqualität, Risiko und Human-in-the-loop-Prüfung dargestellt.

## Drei Fallbeispiele

1. **KI-gestütztes Controlling-Cockpit**
   - Analyse aller relevanten Unternehmensdatenbanken
   - Kennzahlen wie Umsatz, Kostenquote, Deckungsbeitrag, Liquidität,
     Budgetabweichung, Forecast und Risikoindex
   - Trendanalyse, Begründung und Handlungsempfehlung
   - Hauptfall für die Präsentation

2. **Budget- und Kostenabweichungsanalyse**
   - Plan-Ist-Vergleich
   - auffällige Kostenstellen
   - Ursachenhypothesen
   - priorisierte Prüfschritte

3. **Forecasting und Frühwarnsystem**
   - Prognose von Umsatz, Kosten und Liquidität
   - Szenarien wie stabil, kritisch und Wachstum
   - frühe Warnsignale und Steuerungsempfehlungen

## Website öffnen

Die veröffentlichte GitHub-Pages-Version ist hier erreichbar:

https://kara-cockpit.de/

Nach einem neuen Commit kann es kurz dauern, bis GitHub Pages die aktuelle
Version bereitstellt.

Lokal kann die statische Website mit einem einfachen HTTP-Server geöffnet werden:

```powershell
cd A:\Codex\IDP\website
py -m http.server 8080
```

Danach:

```text
http://localhost:8080/
```

## Wichtige Dateien

- `website/index.html` - interaktive Präsentationsoberfläche
- `website/script.js` - Fallbeispiele, Demo-Kennzahlen, Szenarien und Interaktion
- `website/styles.css` - modernes Slide-/Dashboard-Design
- `docs/use-case.md` - fachlicher Use Case
- `docs/architecture.md` - technischer Aufbau und Datenfluss
- `docs/data-model.md` - Demo-Datenmodell für den Controlling-MVP
- `docs/ki-cockpit-dokumentation.md` - zentrale Dokumentation des Cockpits
- `docs/repository-overview.md` - Überblick über das Repository
- `memory.md` - Projektgedächtnis für spätere Chats
- `CHANGELOG.md` - Änderungsprotokoll

## Präsentationsablauf

1. Problem verteilter Unternehmensdatenbanken erklären.
2. Die drei KI-Fallbeispiele kurz vorstellen.
3. Das Controlling-Cockpit als besten Hauptfall begründen.
4. Szenarien, Kennzahlen, Trends und Datenquellen demonstrieren.
5. KI-Begründung, Empfehlung, Risiko und Datenqualität zeigen.
6. Human-in-the-loop, Datenschutz und Grenzen einordnen.
