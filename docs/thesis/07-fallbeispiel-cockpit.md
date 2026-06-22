# 7 Fallbeispiel 1: KI-Controlling-Cockpit

## 7.1 Idee und Controlling-Bezug

Das KI-Controlling-Cockpit ist der Hauptfall der Arbeit. Es bringt die verstreuten Unternehmensdatenbanken zusammen, berechnet die zentralen Kennzahlen, erkennt Trends und Abweichungen, begründet Auffälligkeiten und schlägt Maßnahmen vor. Der Bezug zum Controlling ist unmittelbar, denn gezeigt werden genau die Größen, mit denen ein Unternehmen gesteuert wird: Umsatz, Kostenquote, Deckungsbeitrag, Liquidität, Budgetabweichung und Risikoindex (Weber & Schäffer 2022). Der Ablauf gliedert sich in zwei Stufen, die Abbildung 4 zeigt: zuerst die Zusammensetzung der Daten, dann ihre Analyse und die daraus abgeleitete Empfehlung.

::abb assets/abb1-prozessfluss.png | Ablauf einer KI-gestützten Controlling-Auswertung mit menschlicher Freigabe

## 7.2 Teil 1: Datenzusammensetzung

Die erste Stufe führt die relevanten Quellen zusammen. Das Cockpit greift auf sechs gedachte Datenbanken zu, jede mit einer ausgewiesenen Datenqualität (Tabelle 1): Finance DB, ERP, CRM, HR, Projekt DB und Data Warehouse. Claude stellt die Verbindung zu diesen Quellen selbst her, erschließt die benötigten Felder und aggregiert die Werte zu einer gemeinsamen Datenbasis. Dass die Datenqualität dabei sichtbar bleibt, ist Teil des Konzepts, denn sie zeigt, wie belastbar die spätere Auswertung ist. Erst diese saubere Zusammensetzung macht eine verlässliche Analyse möglich.

## 7.3 Teil 2: Datenanalyse und Empfehlung

Auf der zusammengeführten Basis berechnet das Cockpit die Kennzahlen, erkennt Trends und erklärt Auffälligkeiten. Wie stark sich die Lage je nach Szenario verschiebt, macht Tabelle 2 deutlich.

::tab Kennzahlen des Cockpits in den drei Demo-Szenarien
| Kennzahl | Stabil | Kritisch | Wachstum |
| Umsatz | 4,82 Mio. € | 4,31 Mio. € | 5,26 Mio. € |
| Kostenquote | 41,8 % | 49,6 % | 45,1 % |
| Deckungsbeitrag | 1,34 Mio. € | 920 Tsd. € | 1,46 Mio. € |
| Liquidität | 780 Tsd. € | 410 Tsd. € | 560 Tsd. € |
| Budgetabweichung | 3,6 % | 12,4 % | 7,2 % |
| Risikoindex | 42 | 78 | 61 |

Im Szenario „kritische Abweichung" etwa fällt der Umsatz auf 4,31 Mio. Euro, die Kostenquote springt auf 49,6 Prozent, und der Risikoindex erreicht 78. Die KI benennt die Ursachen (die Kosten steigen stärker als der Umsatz, zwei Kostenstellen überschreiten ihr Monatsbudget, und die Liquiditätsreserve fällt im Forecast unter den Sicherheitswert) und leitet daraus eine klare Empfehlung ab: die Kostenstellen 410 und 620 sofort prüfen, variable Ausgaben einfrieren und den Liquiditätsforecast in der nächsten Steuerungsrunde vorziehen. Zu jeder Auswertung weist das Cockpit Datenqualität und Risiko aus. Eine automatische Entscheidung trifft es bewusst nicht: Jede Empfehlung wird von einem Menschen geprüft und freigegeben oder abgelehnt (Europäische Union 2016; Europäische Kommission 2019). Abbildung 5 zeigt den Aufbau des Cockpits mit Datenquellen, Kennzahlen, Findings, Empfehlung und Freigabe.

::abb assets/abb-cockpit.png | Aufbau des KI-Controlling-Cockpits (Szenario stabil)

## 7.4 Zusammenspiel und Umsetzung

Damit folgt das Cockpit demselben Zweischritt wie die übrigen Fallbeispiele: erst die Daten zusammensetzen, dann analysieren und eine begründete Empfehlung vorbereiten. Dieses Fallbeispiel ist als Website realisiert und bildet zugleich das Artefakt, das in der Präsentation live gezeigt wird. Auch die Erstellung dieser Website ist ein Beleg dafür, was sich mit dem Agenten aufbauen lässt: Aus den fachlichen Vorgaben entstand eine funktionierende Oberfläche aus HTML, CSS und JavaScript.

### Eingesetzte Skills und Beispiel-Prompt

Für die Umsetzung der Cockpit-Website kamen die Skills frontend-design, web-design-guidelines, ui-ux-pro-max und mermaid-diagrams zum Einsatz. Ein möglicher Prompt an Claude lautet:

> Baue ein responsives KI-Controlling-Cockpit als statische Website: sechs Datenquellen mit Datenqualität, sechs Kennzahlen, ein Trenddiagramm, ein Umschalter für die drei Szenarien sowie KI-Findings, Empfehlung, Risiko und die Buttons Freigeben und Ablehnen.
