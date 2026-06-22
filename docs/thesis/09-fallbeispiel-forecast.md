# 9 Fallbeispiel 3: Forecasting und Frühwarnsystem

## 9.1 Idee und Controlling-Bezug

Das dritte Fallbeispiel blickt nach vorn: Aus historischen Daten prognostiziert es Umsatz, Kosten und Liquidität und macht kritische Entwicklungen früh sichtbar. Es ergänzt die rückblickende Auswertung um eine vorausschauende Perspektive und stützt damit eine Steuerung, die nicht erst auf bereits eingetretene Abweichungen reagiert (Weber & Schäffer 2022).

## 9.2 Ablauf

Claude verbindet sich mit dem Data Warehouse, das historische Kennzahlen und aggregierte Monatswerte bereithält, und leitet daraus einen Forecast ab. Aus den Verläufen entstehen drei Szenarien (stabile Entwicklung, kritische Abweichung und Wachstum mit Engpass) samt Frühwarnsignalen. Ein solches Signal ist im Beispiel die Liquiditätsreserve, die im Forecast unter den Sicherheitswert rutscht, obwohl der Umsatz wächst und dabei Working Capital bindet. Die KI macht solche Engpässe sichtbar und schlägt Gegenmaßnahmen vor, etwa den Liquiditätsforecast früher zu priorisieren.

Abbildung 7 zeigt den Liquiditäts-Forecast: Die Reserve fällt unter die Frühwarnschwelle.

::abb assets/abb-forecast.png | Liquiditäts-Forecast mit Frühwarnschwelle

## 9.3 Verbindung durch Claude und Kontrolle

Wie in den anderen Fällen stellt Claude die Verbindung zur Datenquelle selbst her und setzt die Prognoselogik darin auf. Die erzeugten Szenarien und Frühwarnsignale sind Vorschläge, ausgewiesen mit Datenqualität und Risiko; die fachliche Einordnung und die Entscheidung über Gegenmaßnahmen trifft der Mensch. So bleibt auch die vorausschauende Steuerung nachvollziehbar und kontrolliert.

### Eingesetzte Skills und Beispiel-Prompt

Für das Forecasting und Frühwarnsystem helfen Skills und Code zur Datenanalyse und Visualisierung, etwa die Diagrammerstellung über Claude Code und mermaid-diagrams für den Ablauf. Ein möglicher Prompt an Claude lautet:

> Erstelle aus den historischen Monatswerten einen Forecast für Umsatz, Kosten und Liquidität, bilde die Szenarien stabil, kritisch und Wachstum und markiere, wenn die Liquidität unter die Frühwarnschwelle fällt; stelle den Verlauf als Liniendiagramm dar.
