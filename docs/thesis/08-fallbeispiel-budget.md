# 8 Fallbeispiel 2: Budget- und Kostenabweichungsanalyse

## 8.1 Idee und Controlling-Bezug

Die Budget- und Kostenabweichungsanalyse stellt Plan- und Ist-Werte gegenüber, hebt auffällige Kostenstellen hervor und ordnet die Abweichungen nach ihrer finanziellen Wirkung. Damit bildet sie eine Kernaufgabe des operativen Controllings ab und zeigt, wie KI diese Arbeit beschleunigt, ohne die fachliche Bewertung zu ersetzen.

## 8.2 Ablauf

Im Ablauf verbindet sich Claude mit den planungs- und buchungsrelevanten Quellen, allen voran Finance DB und ERP, und stellt Plan- und Ist-Werte je Kostenstelle gegenüber. Die Abweichungen werden berechnet, nach finanzieller Wirkung sortiert und mit Ursachenhypothesen versehen. Im Beispiel überschreiten die Kostenstellen 410 und 620 ihr Monatsbudget deutlich, während die übrigen im Rahmen bleiben. Heraus kommt ein Kostenstellen-Ranking mit Abweichungsgründen und priorisierten Prüfschritten, eine klare Reihenfolge, in der das Controlling weiterarbeiten kann.

Abbildung 6 veranschaulicht den Plan-Ist-Vergleich; die Kostenstellen 410 und 620 überschreiten ihr Budget deutlich.

::abb assets/abb-kostenstellen.png | Plan-Ist-Vergleich der Kostenstellen mit Budgetüberschreitungen

## 8.3 Verbindung durch Claude und Kontrolle

Auch hier baut Claude die Anbindung selbst auf: Es erschließt die Plan- und Ist-Daten, etwa über eine Datenbankverbindung oder einen Export aus Tabellen, und setzt die Vergleichslogik darin um. Die KI liefert damit eine vorbereitete, begründete Übersicht; die Bewertung der einzelnen Kostenstellen und die Entscheidung über Maßnahmen bleiben beim Menschen. So beschleunigt das Fallbeispiel die Abweichungsanalyse, ohne die Budgetverantwortung aus der Hand zu geben.

### Eingesetzte Skills und Beispiel-Prompt

Für die Budget- und Kostenabweichungsanalyse eignen sich Skills zur Tabellen- und Diagrammerstellung (etwa xlsx für Tabellen und mermaid-diagrams für den Ablauf) sowie die Umsetzung über Claude Code. Ein möglicher Prompt an Claude lautet:

> Vergleiche Plan- und Ist-Werte je Kostenstelle, berechne die Abweichungen, markiere Budgetüberschreitungen, sortiere nach finanzieller Wirkung und schlage priorisierte Prüfschritte vor; stelle das Ergebnis als Balkendiagramm dar.
