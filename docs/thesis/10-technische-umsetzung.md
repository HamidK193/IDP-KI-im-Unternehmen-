# 10 Technische Umsetzung und Verknüpfungen

## 10.1 Architektur des MVP

Technisch ist der Demonstrator bewusst schlank gehalten. Er besteht aus den drei Dateien index.html, script.js und styles.css; die Beispieldaten und die simulierte KI-Logik liegen direkt im Browser, das Trenddiagramm wird ohne externe Bibliothek gezeichnet, und ein Backend gibt es nicht. Das macht die Seite robust und als statische Website veröffentlichbar. Dass eine solche Oberfläche überhaupt mit KI-Unterstützung entsteht, ist zugleich Teil der Aussage: Die Erstellung dieser Website ist das Beispiel, das in der Präsentation gezeigt wird.

## 10.2 Verknüpfung der KI mit den Datenquellen

Die zentrale Frage der Umsetzung lautet, wie die KI an die Daten kommt. Vier Wege sind vorgesehen, und das Ziel ist, dass Claude sie weitgehend selbst aufbaut (Abbildung 8). Der erste sind Konnektoren über das Model Context Protocol, mit denen Claude eine sichere Verbindung zu Datenbanken wie Finance DB, ERP oder einer SQL-Datenbank herstellt (Anthropic 2024; Model Context Protocol 2026). Der zweite sind Automatisierungswerkzeuge wie Make oder Zapier, die wiederkehrende Abläufe wie Berichte oder Benachrichtigungen anstoßen. Der dritte ist die Claude-Programmierschnittstelle zusammen mit der Arbeitsumgebung Cowork, in der Claude Auswertungen und Dateien erzeugt. Der vierte sind Datei-Quellen wie Excel oder PDF, die als Eingabe und Ausgabe dienen.

::abb assets/abb-hub.png | Integrations-Hub: Claude verbindet die Controlling-Quellen

Der eigentliche Mehrwert liegt darin, dass nicht nur die Verbindung, sondern auch der Aufbau dahinter, das Erschließen der Felder und die Auswertungslogik, weitgehend von Claude übernommen werden kann. Genau das senkt die Einstiegshürde für ein kleines Unternehmen, dem sonst die Zeit und das Know-how für eine solche Integration fehlen.

## 10.3 Vom MVP zur produktionsnahen Lösung

Für den produktiven Einsatz würde die simulierte Analyse durch eine echte, über Konnektoren angebundene Auswertung ersetzt. Nötig wären reale Datenbank-Views oder CSV-Daten, ein abgesicherter KI-Zugang, Rollenrechte, ein Audit Trail und eine verbindliche menschliche Freigabe. Dieser Übergang ist bewusst gestaltbar: Weil Inhalt, Daten und Auswertung getrennt sind, lässt sich der Demonstrator Schritt für Schritt ausbauen, ohne die Grundidee, kontrollierte, menschlich geprüfte KI, aufzugeben.
