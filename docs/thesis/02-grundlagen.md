# 2 Grundlagen

## 2.1 Künstliche Intelligenz, maschinelles Lernen und Deep Learning

In der Fachliteratur gilt Künstliche Intelligenz als das Teilgebiet der Informatik, das intelligente Agenten entwirft, also Systeme, die ihre Umgebung wahrnehmen und so handeln, dass sie ihre Ziele möglichst gut erreichen (Russell & Norvig 2021). Das ist ein weiter Begriff, der ganz verschiedene Verfahren umfasst. Eine tragende Rolle spielt darin das maschinelle Lernen: Statt festen Regeln zu folgen, lernen die Algorithmen aus Daten, erkennen Muster und leiten daraus Vorhersagen oder Entscheidungen ab, ohne für jeden Einzelfall programmiert zu sein (Russell & Norvig 2021).

Noch einen Schritt weiter geht das Deep Learning, eine besonders leistungsfähige Form des maschinellen Lernens. Es arbeitet mit künstlichen neuronalen Netzen aus vielen Schichten und kann dadurch sehr komplexe Zusammenhänge in großen Datenmengen abbilden (Goodfellow et al. 2016). Die drei Begriffe verschachteln sich also ineinander: KI als Oberbegriff, maschinelles Lernen als datengetriebener Ansatz darin und Deep Learning als dessen ausdrucksstärkste Variante. Für kleine Unternehmen ist das mehr als eine Begriffsklärung, es zeigt, dass KI keine einheitliche Technologie ist, sondern je nach Aufgabe ganz unterschiedliche Verfahren und Voraussetzungen bedeutet.

## 2.2 Generative KI, große Sprachmodelle und Claude

Generative KI geht über das Analysieren hinaus: Sie erzeugt eigenständig neue Inhalte, etwa Texte, Bilder oder Code, und stützt sich technisch auf das Deep Learning. Für Sprache sind dabei große Sprachmodelle entscheidend. Sie werden mit riesigen Textmengen trainiert, umfassen Milliarden von Parametern und können Sprache dadurch verarbeiten und fortsetzen. Den entscheidenden Sprung brachte die Transformer-Architektur, deren Aufmerksamkeitsmechanismus auch lange Textzusammenhänge effizient verarbeitet (Vaswani et al. 2017). Bald zeigte sich, dass hinreichend große Modelle neue Aufgaben schon anhand weniger Beispiele im Eingabetext lösen, ohne erneut trainiert zu werden (Brown et al. 2020).

Claude ist ein solches, auf großen Sprachmodellen beruhendes Assistenzsystem des Unternehmens Anthropic. Für den praktischen Teil zählt weniger die innere Funktionsweise als die Fähigkeit, ein Sprachmodell mit den Daten und Werkzeugen eines Unternehmens zu verbinden. Genau dafür hat Anthropic das Model Context Protocol veröffentlicht, einen offenen Standard, über den KI-Anwendungen sichere, zweiseitige Verbindungen zu Dateien, Datenbanken und Werkzeugen aufbauen (Anthropic 2024). Aus einem reinen Textwerkzeug wird so ein Assistent, der auf konkrete Unternehmensdaten zugreift. Dieser Gedanke trägt die spätere Umsetzung.

## 2.3 Controlling und Unternehmenssteuerung

Controlling versteht sich als Funktion der Unternehmensführung, die deren Rationalität sichert und die Steuerung mit Informationen versorgt (Weber & Schäffer 2022). Zu seinen Kernaufgaben zählen Planung, Kontrolle, Informationsversorgung und die Koordination betriebswirtschaftlicher Entscheidungen. Im Zentrum stehen Kennzahlen wie Umsatz, Kosten, Deckungsbeitrag und Liquidität, die dem Management ein verdichtetes Bild der Lage geben.

Lange war Controlling vor allem rückwärtsgewandt: Es wertete abgeschlossene Perioden aus und meldete Abweichungen. Mit der Digitalisierung verschiebt sich der Anspruch hin zu einer vorausschauenden, datengestützten Steuerung (Weber & Schäffer 2022). Hier setzt die Künstliche Intelligenz an. Liegen Daten in großer Menge vor, kann sie helfen, sie schneller auszuwerten, Muster und Abweichungen aufzuspüren und Entscheidungen vorzubereiten. Für kleine Unternehmen wiegt das besonders schwer, weil ihnen die Zeit und das Personal für eine durchgehende manuelle Auswertung oft fehlen. Wie sich KI dafür konkret steuern und einsetzen lässt, behandelt der folgende Abschnitt.

## 2.4 Agenten, Skills und Prompts

Damit ein Sprachmodell im Unternehmen praktisch nutzbar wird, kommt es als KI-Agent zum Einsatz, also als System, das Aufgaben eigenständig in mehreren Schritten bearbeitet und dabei Werkzeuge nutzt. Erweitern lässt sich ein solcher Agent durch sogenannte Skills: wiederverwendbare Anleitungen und Fähigkeiten, die der Agent bei Bedarf lädt, etwa zum Erstellen von Diagrammen, Tabellen, Dokumenten oder Webseiten. Abbildung 1 zeigt das Zusammenspiel dieser Bausteine.

::abb assets/abb-claude-einsatz.png | Claude als KI-Agent mit Skills, Cowork, Code, Konnektoren und Prompt

Für die Zusammenarbeit mit Claude gibt es zwei Arbeitsweisen. In Cowork arbeitet der Mensch geführt an Dateien und Dokumenten, während Claude Code Aufgaben weitgehend autonom und codenah umsetzt. Beide greifen über das in Abschnitt 2.2 beschriebene Model Context Protocol auf Daten und Werkzeuge zu und verbinden die KI so mit der konkreten Arbeitsumgebung (Anthropic 2024).

Gesteuert wird der Agent über Prompts, also klar formulierte Anweisungen. Je genauer Aufgabe, Rahmen und gewünschtes Ergebnis beschrieben sind, desto verlässlicher fällt das Ergebnis aus. Abbildung 2 zeigt beispielhaft, wie aus einem Prompt eine fertige Umsetzung entsteht. Diese Bausteine, also Skills, Cowork und Code, Konnektoren und Prompts, tragen den praktischen Teil dieser Arbeit. Welche Potenziale KI für die Steuerung kleiner Unternehmen entfaltet und wie weit Forschung und Praxis sind, betrachtet das folgende Kapitel.

::abb assets/abb-prompt-ergebnis.png | Vom Prompt zum Ergebnis: eine klare Anweisung führt zu einer fertigen Umsetzung
