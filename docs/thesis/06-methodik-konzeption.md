# 6 Methodik und Konzeption des Demonstrators

## 6.1 Das fiktive Unternehmen Kara

Damit die Überlegungen greifbar bleiben, begleitet ein konkretes Beispiel die gesamte Umsetzung: Kara, ein erfundenes kleines Unternehmen mit schmalem Budget und ohne eigene IT-Abteilung. Kara steht für viele kleine Betriebe, die zwar über mehrere Datenbanken verfügen, daraus aber nur mühsam einen klaren Blick auf ihre Lage gewinnen. Echte Unternehmens- oder Kundendaten kommen bewusst nicht zum Einsatz; sämtliche Werte sind realistisch gewählte Beispieldaten, sodass die Demo ohne Datenschutzrisiko gezeigt werden kann.

## 6.2 Gedachte Datenquellen und Datenmodell

Der Demonstrator stützt sich auf sechs typische Datenquellen eines kleinen Unternehmens. Jede ist mit einer Datenqualität hinterlegt, denn eine Empfehlung ist immer nur so verlässlich wie die Daten, auf denen sie beruht. Tabelle 1 fasst die Quellen zusammen.

::tab Datenquellen des Demonstrators und ihre Datenqualität
| Datenquelle | Inhalt | Datenqualität |
| Finance DB | GuV, Cashflow, Buchungen | 96 % |
| ERP | Einkauf, Bestand, Lieferanten | 91 % |
| CRM | Umsatzpipeline, Kunden, Aufträge | 89 % |
| HR | Personalkosten, Kapazitäten | 94 % |
| Projekt DB | Budgets, Laufzeiten, Auslastung | 87 % |
| Data Warehouse | Historische Kennzahlen | 98 % |

Dass die Datenqualität sichtbar bleibt, ist kein Detail am Rande, sondern Teil des Konzepts: Sie zeigt, wie sicher eine Auswertung ist, und macht damit Vertrauen oder Vorsicht begründbar. Die vollständigen Demo-Daten für alle drei Szenarien (Quellen, Kennzahlen, Trendreihen sowie Findings und Empfehlungen) sind im begleitenden Datensatz Kara_Demo-Datensatz.xlsx dokumentiert; daraus stammen alle in dieser Arbeit gezeigten Zahlen.

## 6.3 Aufbau des Demonstrators

Umgesetzt ist der Demonstrator als interaktive Website, die zugleich Präsentationsfläche und Dashboard ist. Die KI-Analyse läuft im Prototyp simuliert und greift auf lokale Beispieldaten im Browser zu; echte Datenbanken oder eine externe KI-Schnittstelle sind bewusst nicht angebunden. Über drei Szenarien, stabile Entwicklung, kritische Abweichung und Wachstum mit Engpass, lassen sich unterschiedliche Steuerungssituationen durchspielen. Diese Begrenzung ist Absicht: Sie hält die Demo stabil und datenschutzarm und macht sie damit überhaupt erst präsentierbar.

## 6.4 Rolle von Claude und den Verknüpfungen

Der eigentliche Kerngedanke geht über das Auswerten hinaus. Die KI soll den Zugang zu den Daten möglichst selbst herstellen, nicht nur fertige Zahlen kommentieren. Über einen offenen Standard wie das Model Context Protocol kann eine Anwendung wie Claude sichere Verbindungen zu Dateien, Datenbanken und Werkzeugen aufbauen (Anthropic 2024). Für die drei Fallbeispiele heißt das konkret: Claude stellt die Verbindung zur jeweiligen Datenquelle her, erschließt die benötigten Felder und setzt die Auswertung darin auf. Für ein kleines Unternehmen bleibt der manuelle Aufwand dadurch gering. Im Prototyp ist dieser Schritt simuliert; produktiv liefe er über Konnektoren.

## 6.5 Grenzen der Konzeption

Der Demonstrator ist ausdrücklich ein MVP und kein fertiges Produkt. Echte Datenbankverbindungen, eine externe KI-Schnittstelle, produktive Rollenrechte und ein vollständiges Datenschutzkonzept fehlen. Für die Aufgabenstellung ist das vertretbar, weil es hier um Orientierung, einen nachvollziehbaren Anwendungsfall und eine zeigbare Umsetzung geht, nicht um ein auslieferbares System. Wie das in der Praxis aussieht, zeigen die folgenden drei Fallbeispiele.

Abbildung 3 ordnet die drei Fallbeispiele ein, die nun einzeln vorgestellt werden.

::abb assets/abb-fallbeispiele.png | Überblick über die drei Fallbeispiele
