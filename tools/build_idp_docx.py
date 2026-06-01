from pathlib import Path

from docx import Document
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.shared import Cm, Pt, RGBColor


OUT = Path("outputs/IDP_KI_kleine_Unternehmen_Dokumentation.docx")


PAGES = [
    {
        "title": "Deckblatt und Executive Summary",
        "paragraphs": [
            "Dieses Dokument beschreibt das IDP-Projekt „Künstliche Intelligenz für kleine Unternehmen – Potenziale, Herausforderungen und Umsetzung“. Ziel ist es, den Einsatz von KI nicht abstrakt zu erklären, sondern für ein kleines Unternehmen greifbar zu machen.",
            "Der praktische Demonstrator ist Kara, ein fiktives kleines E-Commerce-Unternehmen mit ungefähr 20 bis 80 Mitarbeitenden. Kara nutzt im MVP ein KI-Operations-Cockpit, das Support, Bestellungen, Rechnungen, Wissensfragen und Auswertungen in einer Oberfläche bündelt.",
            "Die Kernthese lautet: KI ist für kleine Unternehmen besonders sinnvoll, wenn sie wiederkehrende Arbeitsprozesse unterstützt, Vorschläge transparent macht und menschliche Freigaben fest einplant.",
        ],
        "bullets": [
            "Fokus: KI als Assistenzsystem, nicht als autonome Entscheidung.",
            "Ergebnis: Website-Demo, Dokumentation, Präsentation, LinkedIn-Beitrag und Techday-Material.",
            "MVP-Prinzip: simulierte KI ohne API-Key, ohne echte Kundendaten und mit lokaler Speicherung.",
        ],
    },
    {
        "title": "Inhaltslogik und Leitfrage",
        "paragraphs": [
            "Die Dokumentation folgt der Aufgabenstellung des Sommersemesters 2025. Sie verbindet eine fachliche Analyse mit einer praxisnahen Umsetzung und verwertbaren Materialien für kleine Unternehmen.",
            "Die zentrale Leitfrage lautet: Wie können kleine Unternehmen KI ressourcenschonend, rechtlich reflektiert und alltagstauglich in ihre Geschäftsprozesse integrieren?",
            "Der Aufbau führt von Grundlagen und Praxisbeispielen über KMU-spezifische Herausforderungen bis zum Kara-Anwendungsfall. Anschließend folgen ein How-To-Leitfaden, Umsetzungsrisiken, Präsentationsmaterial und Fazit.",
        ],
        "bullets": [
            "Analyse: Potenziale und Grenzen von KI in Unternehmen.",
            "Transfer: Erkenntnisse großer Unternehmen auf kleine Betriebe übertragen.",
            "Umsetzung: ein konkreter Demonstrator mit überprüfbarem Bedienfluss.",
            "Kommunikation: Materialien für Hochschule, LinkedIn und Techday/WI-Tag.",
        ],
    },
    {
        "title": "Aufgabenstellung und Projektvorgehen",
        "paragraphs": [
            "Die Aufgabenstellung verlangt Verständnis für den KI-Einsatz in Unternehmen, die Identifikation geeigneter Anwendungen für kleine Unternehmen, die Analyse rechtlicher und ethischer Aspekte sowie die Entwicklung eines fiktiven Anwendungsfalls.",
            "Das Projektvorgehen war deshalb zweigeteilt. Erstens wurde untersucht, welche KI-Anwendungsfelder für kleine Unternehmen realistisch sind. Zweitens wurde ein Demonstrator gebaut, der diese Anwendungsfelder in einem konkreten Unternehmensalltag sichtbar macht.",
            "Der ursprüngliche Shop-Prototyp wurde dafür nicht verworfen, sondern neu eingeordnet. Er bleibt als operative Datenquelle erhalten. Die eigentliche Hauptaussage ist nun das KI-Cockpit, das zeigt, wie Mitarbeitende mit KI-Vorschlägen arbeiten.",
        ],
        "bullets": [
            "Schritt 1: Aufgabenstellung in Anforderungen übersetzen.",
            "Schritt 2: Unternehmensgröße und Zielgruppe begrenzen.",
            "Schritt 3: Use Cases auswählen und im Frontend demonstrieren.",
            "Schritt 4: Dokumentation, Präsentation und Kommunikationsmaterial erstellen.",
        ],
    },
    {
        "title": "Grundlagen: KI im Unternehmenskontext",
        "paragraphs": [
            "Künstliche Intelligenz bezeichnet im Projektkontext Systeme, die Informationen verarbeiten, Muster erkennen, Texte erzeugen, Entscheidungen vorbereiten oder Prozesse unterstützen können. Für kleine Unternehmen ist dabei weniger die technische Modellarchitektur entscheidend, sondern die Frage, ob die KI in einem konkreten Arbeitsprozess nützlich ist.",
            "Typische KI-Funktionen im Unternehmen sind Zusammenfassung, Klassifikation, Wissenssuche, Textentwurf, Prognose und Prüfung von Auffälligkeiten. Diese Funktionen entfalten Nutzen, wenn sie mit vorhandenen Daten, klaren Rollen und einem kontrollierten Prozess verbunden werden.",
            "Das Projekt grenzt KI bewusst als Assistenz ab. Die KI liefert Vorschläge, Hinweise und Zusammenfassungen. Entscheidungen mit Kundenwirkung, rechtlicher Relevanz oder finanzieller Bedeutung bleiben beim Menschen.",
        ],
        "bullets": [
            "Assistenz: KI beschleunigt Arbeit, ersetzt aber keine Verantwortung.",
            "Kontext: Gute Ergebnisse benötigen passende Daten und Regeln.",
            "Kontrolle: Transparenz, Quelle und Risiko müssen sichtbar bleiben.",
        ],
    },
    {
        "title": "Praxisbeispiele aus größeren Unternehmen",
        "paragraphs": [
            "Große Unternehmen nutzen KI bereits in Kundenservice, Logistik, Finanzprozessen, Personalwesen, Marketing und Wissensmanagement. Die Beispiele zeigen, dass KI besonders dort wirkt, wo Prozesse wiederholbar und Datenquellen strukturiert sind.",
            "Im Kundenservice werden Chatbots und Antwortvorschläge eingesetzt, um Anfragen schneller zu bearbeiten. In Finanzbereichen unterstützt KI bei Belegprüfung, Betrugserkennung und Abweichungsanalyse. In Operations-Prozessen helfen Prognosen bei Beständen, Lieferketten und Priorisierung.",
            "Für kleine Unternehmen ist nicht die Größe dieser Lösungen übertragbar, sondern das Muster: ein klarer Prozess, eine begrenzte Datenbasis, ein messbarer Nutzen und ein definierter Freigabepunkt.",
        ],
        "bullets": [
            "Kundenservice: Antwortentwürfe und Wissenssuche.",
            "Finanzen: Rechnungsprüfung und Auffälligkeiten.",
            "Operations: Priorisierung, Prognosen und Engpasshinweise.",
            "Wissensarbeit: Recherche, Zusammenfassung und interne Prozesshilfe.",
        ],
    },
    {
        "title": "Transfer auf kleine Unternehmen",
        "paragraphs": [
            "Kleine Unternehmen haben oft weniger Budget, weniger IT-Personal und weniger Zeit für komplexe Transformationsprojekte. Deshalb muss KI dort kleiner, direkter und prozessnäher eingeführt werden.",
            "Der Transfer gelingt, wenn zunächst ein einzelner Arbeitsablauf verbessert wird. Ein Beispiel ist die Bearbeitung von Kundenanfragen: Die KI liest den Kontext, schlägt eine Antwort vor und verweist auf die passende interne Regel. Der Mensch prüft und sendet.",
            "Dieser Ansatz vermeidet Überforderung. Er macht Nutzen sichtbar, begrenzt Risiken und schafft Akzeptanz, weil Mitarbeitende die KI nicht als Black Box erleben.",
        ],
        "bullets": [
            "Klein starten: ein Prozess statt komplette Plattform.",
            "Niedriges Risiko wählen: Entwürfe und Zusammenfassungen vor Automatisierung.",
            "Lernschleife einbauen: Ergebnisse messen und Regeln nachschärfen.",
        ],
    },
    {
        "title": "Fiktives Unternehmen Kara",
        "paragraphs": [
            "Kara ist ein fiktives kleines E-Commerce-Unternehmen für kuratierte Luxury-Streetwear. Das Unternehmen verkauft Produkte online und muss täglich Kundenanfragen, Retouren, Adressänderungen, Bestellungen, Rechnungen und interne Abstimmungen bearbeiten.",
            "Die angenommene Unternehmensgröße liegt bei 20 bis 80 Mitarbeitenden. Damit ist Kara groß genug für wiederkehrende Prozesse, aber klein genug, dass Ressourcen knapp bleiben und einfache Lösungen wichtig sind.",
            "Kara eignet sich als Szenario, weil viele Aufgaben nicht hochkomplex, aber zeitkritisch sind. Genau hier kann KI als Assistenz helfen: Informationen bündeln, Risiken markieren und Vorschläge vorbereiten.",
        ],
        "bullets": [
            "Geschäftsführung: braucht Überblick und Nutzenargumentation.",
            "Teamleitung: priorisiert Aufgaben und achtet auf Qualität.",
            "Mitarbeitende: benötigen schnelle, verständliche Unterstützung im Alltag.",
        ],
    },
    {
        "title": "Prozesslandkarte im Unternehmen",
        "paragraphs": [
            "Die wichtigsten Prozesse bei Kara liegen im Zusammenspiel von Shop, Support, Backoffice und Management. Eine Bestellung erzeugt Kundendaten, Positionen, Zahlungsstatus und später Rechnungsdaten. Gleichzeitig entstehen Rückfragen und operative Risiken.",
            "Ohne KI müssen Mitarbeitende Informationen in verschiedenen Systemen suchen, Fälle priorisieren und Texte selbst formulieren. Diese Arbeit ist fehleranfällig, wenn Daten unvollständig sind oder mehrere Personen parallel beteiligt sind.",
            "Das KI-Cockpit schafft eine gemeinsame Sicht: offene Aufgaben, relevante Daten, vorgeschlagene Antwort, Quelle, Risiko und Freigabestatus.",
        ],
        "bullets": [
            "Shop: operative Datenquelle für Produkte, Kunden und Bestellungen.",
            "Support: Kundenkontakt und Rückfragen.",
            "Backoffice: Rechnungen, Adressen, Versand und Kontrolle.",
            "Management: Überblick über Umsatz, Risiken und nächste Schritte.",
        ],
    },
    {
        "title": "Kara AI Operations Cockpit",
        "paragraphs": [
            "Der neue Hauptscreen der Website ist „Kara AI Operations“. Er ersetzt die frühere Shop-Startseite als primären Einstieg und macht das Projektthema sofort sichtbar.",
            "Links werden operative Aufgaben angezeigt. In der Mitte stehen Unternehmenslage, aktiver Fall und fachlicher Kontext. Rechts befindet sich ein KI-Assistentenpanel mit Prompt, Antwort, Quelle, Risiko und Freigabestatus.",
            "Die Interaktion folgt einem einfachen Muster: Aufgabe auswählen, KI-Vorschlag erzeugen, Quelle und Risiko prüfen, Vorschlag freigeben oder ablehnen. Dadurch wird Human-in-the-loop nicht nur beschrieben, sondern bedienbar demonstriert.",
        ],
        "bullets": [
            "Supportfall: Antwortvorschlag für Kundenanfrage.",
            "Rechnung: Hinweise zu fehlenden Daten und Steuerprüfung.",
            "Bestellung: Risiko bei Adresse oder Bestand.",
            "Analyse: Tagesbriefing mit Handlungsempfehlungen.",
            "Wissen: interne Prozessfrage anhand einer Knowledge Base.",
        ],
    },
    {
        "title": "Use Case 1: Support- und Wissensassistenz",
        "paragraphs": [
            "Im Support entstehen viele ähnliche Fragen: Retouren, Größenumtausch, Lieferadresse, Lieferzeit oder Rechnungswunsch. Eine KI kann solche Anfragen zusammenfassen und einen Antwortentwurf erstellen.",
            "Der Nutzen liegt nicht darin, Kundinnen und Kunden ungeprüft automatisiert zu beantworten. Der Nutzen liegt darin, dass Mitarbeitende schneller einen passenden, einheitlichen und nachvollziehbaren Entwurf erhalten.",
            "Der Wissensassistent ergänzt diesen Prozess. Er beantwortet interne Prozessfragen, zum Beispiel wann KI eingesetzt werden darf oder welche Fälle zwingend manuell freigegeben werden müssen.",
        ],
        "bullets": [
            "Vorteil: schnellere Reaktionszeit im Kundenservice.",
            "Vorteil: einheitliche Sprache und weniger Suchaufwand.",
            "Grenze: sensible oder konfliktträchtige Fälle bleiben manuell.",
        ],
    },
    {
        "title": "Use Case 2: Rechnungs- und Bestellprüfung",
        "paragraphs": [
            "Rechnungen und Bestellungen sind für kleine Unternehmen besonders relevant, weil Fehler direkt finanzielle oder kundenbezogene Folgen haben können. Eine KI kann hier prüfen, ob Pflichtfelder fehlen, Summen plausibel sind oder Statusangaben widersprüchlich wirken.",
            "Im Kara-MVP erzeugt die KI Hinweise, aber keine automatische Rechnung und keinen automatischen Versand. Das ist fachlich wichtig: Die KI unterstützt, während der Mensch den finalen Schritt kontrolliert.",
            "Bei Bestellungen kann die KI Risiken markieren, zum Beispiel eine gemeldete Adressänderung, knappen Bestand oder mögliche Teillieferung. Dadurch werden operative Probleme früher sichtbar.",
        ],
        "bullets": [
            "Rechnungsprüfung: Kundendaten, Umsatzsteuer, Summe und Status.",
            "Bestellprüfung: Adresse, Bestand, Versandfreigabe und Priorität.",
            "Kontrollpunkt: Freigabe bleibt dokumentiert und nachvollziehbar.",
        ],
    },
    {
        "title": "Use Case 3: Auswertung und Tagesbriefing",
        "paragraphs": [
            "Kleine Unternehmen brauchen oft schnelle Übersicht statt komplexer Business-Intelligence-Systeme. Das Tagesbriefing fasst offene Aufgaben, Umsatzlage, Risiken und nächste Schritte zusammen.",
            "Im Demonstrator werden Kennzahlen aus lokalen Demo-Daten abgeleitet. Die KI formuliert daraus eine kurze Lageeinschätzung und priorisiert Handlungsfelder wie Support, Rechnungsprüfung oder Bestellrisiken.",
            "Der Nutzen liegt in der Verdichtung: Führungskräfte und Teamleitungen müssen nicht alle Einzelfälle lesen, sondern erhalten eine verständliche Ausgangslage für Entscheidungen.",
        ],
        "bullets": [
            "Umsatz heute und offene KI-Aufgaben.",
            "Risiko-Hinweise für Rechnung und Lieferadresse.",
            "Geschätzter Zeitgewinn durch Support- und Backoffice-Entlastung.",
        ],
    },
    {
        "title": "Technische Umsetzung des MVP",
        "paragraphs": [
            "Der aktuelle MVP ist bewusst als statische Website umgesetzt. Die zentralen Dateien sind `website/index.html`, `website/styles.css` und `website/script.js`. Dadurch kann die Demo lokal gestartet und ohne externe Dienste präsentiert werden.",
            "Die KI ist simuliert. Das bedeutet, dass keine echten Anfragen an Claude, Codex oder einen anderen KI-Dienst gesendet werden. Stattdessen erzeugt die Website realistische Vorschläge aus vorbereiteten Demo-Daten.",
            "Diese Entscheidung ist für die Präsentation sinnvoll, weil sie Stabilität schafft, Kosten vermeidet und Datenschutzrisiken reduziert. Gleichzeitig bleibt die spätere Erweiterung auf echte KI-Schnittstellen dokumentiert.",
        ],
        "bullets": [
            "Frontend: HTML, CSS und JavaScript.",
            "Speicherung: Browser-localStorage mit Kara-Präfix.",
            "Demo-Daten: Aufgaben, Supportfälle, KI-Läufe und Knowledge Base.",
            "Bedienlogik: Vorschlag erzeugen, freigeben, ablehnen und lokal speichern.",
        ],
    },
    {
        "title": "Zielarchitektur mit Supabase und Make",
        "paragraphs": [
            "Supabase und Make bleiben als spätere Ausbaustufe erhalten. Supabase kann strukturierte Daten wie Kunden, Adressen, Produkte, Bestellungen, Positionen und Rechnungen speichern. Make kann Automatisierungen zwischen Zahlung, Rechnungserstellung und E-Mail-Versand übernehmen.",
            "Für das aktuelle IDP-Ziel ist diese Integration nicht zwingend nötig, weil der Schwerpunkt auf dem KI-Anwendungsfall liegt. Trotzdem ist die Zielarchitektur wichtig, um zu zeigen, wie aus dem MVP ein realer Prozess entstehen könnte.",
            "Eine produktive Version müsste Rollenrechte, API-Key-Schutz, Protokollierung, Datenschutzkonzept und Fehlerbehandlung ergänzen.",
        ],
        "bullets": [
            "Supabase: persistente Datenbank und spätere Authentifizierung.",
            "Make: Automatisierung zwischen Bestellung, Rechnung und E-Mail.",
            "KI-Dienst: Vorschläge mit Quellenbezug und Logging.",
            "Monitoring: Status, Fehlerfälle und manuelle Nachbearbeitung.",
        ],
    },
    {
        "title": "Rechtliche Aspekte: Datenschutz und DSGVO",
        "paragraphs": [
            "Beim Einsatz von KI in kleinen Unternehmen ist Datenschutz ein zentraler Erfolgsfaktor. Personenbezogene Daten dürfen nur verarbeitet werden, wenn ein klarer Zweck, eine passende Rechtsgrundlage und angemessene Schutzmaßnahmen vorhanden sind.",
            "Für Kara bedeutet das: Im MVP werden keine echten Kundendaten verwendet. In einer produktiven Version müssten Daten minimiert, Zugriffe geregelt, Löschfristen definiert und Betroffenenrechte berücksichtigt werden.",
            "Besonders wichtig ist, dass sensible Kundendaten nicht unnötig an externe KI-Dienste übertragen werden. Eine sichere Umsetzung kann mit Pseudonymisierung, Rollenrechten, Protokollierung und klarer Anbieterprüfung arbeiten.",
        ],
        "bullets": [
            "Datensparsamkeit: nur notwendige Daten verwenden.",
            "Zweckbindung: KI-Einsatz klar beschreiben.",
            "Transparenz: Mitarbeitende und Kundschaft informieren.",
            "Sicherheit: Zugriff, Speicherung und Übertragung schützen.",
        ],
    },
    {
        "title": "EU AI Act, Ethik und Verantwortung",
        "paragraphs": [
            "Die KI-Verordnung der EU ist seit dem 1. August 2024 in Kraft und verfolgt einen risikobasierten Ansatz. Für kleine Unternehmen ist vor allem wichtig, KI-Anwendungen nach Risiko, Transparenz und Verantwortung einzuordnen.",
            "Das Kara-Cockpit ist als Assistenzsystem konzipiert. Es trifft keine autonomen Entscheidungen über Kundinnen und Kunden, Finanzen oder Personal. Die KI zeigt Vorschläge, Quellen und Risiken, während die finale Entscheidung beim Menschen bleibt.",
            "Ethisch relevant sind außerdem Fairness, Nachvollziehbarkeit und Akzeptanz. Mitarbeitende müssen verstehen, wofür die KI genutzt wird, wann sie Grenzen hat und wie sie Ergebnisse prüfen sollen.",
        ],
        "bullets": [
            "Risikobasierter Ansatz: Einsatzgebiet und mögliche Folgen bewerten.",
            "Transparenz: KI-Vorschläge klar als solche kennzeichnen.",
            "Menschliche Aufsicht: Freigabeprinzip fest verankern.",
            "Dokumentation: Regeln, Annahmen und Grenzen festhalten.",
        ],
    },
    {
        "title": "How-To-Leitfaden für kleine Unternehmen",
        "paragraphs": [
            "Der Leitfaden übersetzt die Projektergebnisse in konkrete Schritte. Kleine Unternehmen sollten nicht mit einer technischen Plattform beginnen, sondern mit einem passenden Problem.",
            "Ein geeigneter Startprozess ist häufig, klar begrenzt, messbar und nicht zu riskant. Beispiele sind Supportzusammenfassungen, Antwortentwürfe, Rechnungsprüfung, interne Wissenssuche oder einfache Tagesbriefings.",
            "Danach werden Datenquellen geprüft, Rollen definiert, ein kleiner Pilot gebaut und der Nutzen gemessen. Erst wenn der Pilot funktioniert, sollte das Unternehmen weitere Prozesse anbinden.",
        ],
        "bullets": [
            "1. Prozess auswählen.",
            "2. Datenqualität und Datenschutz prüfen.",
            "3. KI-Aufgabe klar formulieren.",
            "4. Pilot mit menschlicher Freigabe bauen.",
            "5. Nutzen messen und schrittweise erweitern.",
        ],
    },
    {
        "title": "Einführung, Rollen und Veränderungsmanagement",
        "paragraphs": [
            "KI-Einführung ist nicht nur ein technisches Projekt. Kleine Unternehmen müssen erklären, warum KI eingesetzt wird, welche Aufgaben sie übernimmt und welche Entscheidungen weiterhin beim Menschen bleiben.",
            "Für Kara werden drei Rollen unterschieden: Geschäftsführung, Teamleitung und Mitarbeitende. Die Geschäftsführung entscheidet über Ziel, Budget und Risiko. Die Teamleitung definiert Prozesse und Qualitätsregeln. Mitarbeitende nutzen die KI im Alltag und geben Rückmeldung.",
            "Akzeptanz entsteht, wenn KI nicht als Kontrolle oder Ersatz kommuniziert wird, sondern als Werkzeug gegen Routineaufwand. Schulungen sollten deshalb mit echten Fällen aus dem Unternehmen arbeiten.",
        ],
        "bullets": [
            "Rollen klären: Wer darf was freigeben?",
            "Regeln dokumentieren: Wann wird KI genutzt, wann nicht?",
            "Schulung anbieten: Beispiele, Grenzen und Prüfpflichten.",
            "Feedback nutzen: Vorschläge verbessern und Fehler sichtbar machen.",
        ],
    },
    {
        "title": "Evaluation und Erfolgsmessung",
        "paragraphs": [
            "Ein KI-Pilot sollte anhand klarer Kriterien bewertet werden. Für kleine Unternehmen sind besonders Zeitersparnis, Bearbeitungsqualität, Fehlerquote, Akzeptanz und Transparenz relevant.",
            "Im Kara-Szenario könnte gemessen werden, wie schnell Supportantworten vorbereitet werden, wie viele Rechnungsentwürfe Korrekturhinweise erhalten und wie viele KI-Vorschläge freigegeben oder abgelehnt werden.",
            "Wichtig ist, nicht nur positive Kennzahlen zu erfassen. Auch abgelehnte Vorschläge, Unsicherheiten und Fehler sind wertvoll, weil sie zeigen, wo Regeln, Daten oder Prompting verbessert werden müssen.",
        ],
        "bullets": [
            "Zeit: durchschnittliche Bearbeitungsdauer vor und nach dem Pilot.",
            "Qualität: Anzahl nachträglicher Korrekturen.",
            "Akzeptanz: Nutzung durch Mitarbeitende und Feedback.",
            "Kontrolle: Anteil dokumentierter Freigaben und Ablehnungen.",
        ],
    },
    {
        "title": "Präsentation, Techday, LinkedIn und Fazit",
        "paragraphs": [
            "Die Projektergebnisse werden in mehreren Formaten aufbereitet. Die PowerPoint-Präsentation ist auf 20 Minuten ausgelegt und verbindet Problem, Analyse, Kara-Demo, Recht/Ethik, Leitfaden und Fazit.",
            "Für den Techday beziehungsweise WI-Tag eignet sich ein kurzer Demo-Ablauf: Problem erklären, KI-Cockpit öffnen, Fall auswählen, Vorschlag erzeugen, Quelle und Risiko prüfen, Freigabe zeigen und Nutzen zusammenfassen.",
            "Der LinkedIn-Beitrag kommuniziert die Kernbotschaft öffentlich: KI kann kleinen Unternehmen helfen, wenn sie als kontrollierbares Assistenzsystem in konkrete Prozesse eingebettet wird.",
            "Fazit: Das Projekt erfüllt die Aufgabenstellung, weil es wissenschaftliche Einordnung, konkrete KI-Anwendungen, rechtliche Reflexion, einen fiktiven Anwendungsfall und praxisnahe Materialien zusammenführt.",
        ],
        "bullets": [
            "Quellen: Europäische Kommission zur KI-Verordnung, EU-Informationen zur DSGVO, Projektdokumentation im Repository.",
            "Materialien: Word-Dokumentation, Präsentation, How-To-Leitfaden, LinkedIn-Post, Techday-One-Pager.",
            "Ausblick: echte KI-Schnittstelle, Supabase-Anbindung, Make-Automatisierung und zusätzliche Tests.",
        ],
    },
]


def set_margins(section):
    section.top_margin = Cm(2.0)
    section.bottom_margin = Cm(1.8)
    section.left_margin = Cm(2.1)
    section.right_margin = Cm(2.1)


def add_page_number_footer(doc):
    for section in doc.sections:
        footer = section.footer.paragraphs[0]
        footer.text = "IDP Sommersemester 2025 | KI für kleine Unternehmen | Kara AI Operations"
        footer.alignment = WD_ALIGN_PARAGRAPH.CENTER
        for run in footer.runs:
            run.font.size = Pt(8)
            run.font.color.rgb = RGBColor(95, 111, 104)


def style_document(doc):
    styles = doc.styles
    normal = styles["Normal"]
    normal.font.name = "Aptos"
    normal.font.size = Pt(10.5)
    normal.paragraph_format.space_after = Pt(7)
    normal.paragraph_format.line_spacing = 1.08

    for name, size, color in [
        ("Title", 24, RGBColor(20, 35, 31)),
        ("Heading 1", 17, RGBColor(15, 107, 87)),
        ("Heading 2", 13, RGBColor(51, 92, 129)),
    ]:
        style = styles[name]
        style.font.name = "Aptos Display"
        style.font.size = Pt(size)
        style.font.color.rgb = color
        style.font.bold = True
        style.paragraph_format.space_before = Pt(4)
        style.paragraph_format.space_after = Pt(8)


def add_source_table(doc):
    table = doc.add_table(rows=1, cols=2)
    table.style = "Table Grid"
    table.rows[0].cells[0].text = "Quelle"
    table.rows[0].cells[1].text = "Verwendung im Projekt"
    rows = [
        ("Europäische Kommission: KI-Verordnung tritt in Kraft, 1. August 2024", "Einordnung des EU AI Act und des risikobasierten Ansatzes."),
        ("European Commission: AI Act | Shaping Europe’s digital future", "Grundlage für Anforderungen, Transparenz und vertrauenswürdige KI."),
        ("European Commission: Principles of the GDPR", "Datenschutzprinzipien wie Rechtmäßigkeit, Transparenz, Zweckbindung und Datensparsamkeit."),
        ("Your Europe: Data protection under GDPR", "Praxisorientierte Einordnung für Unternehmen."),
        ("Repository-Dokumentation Kara", "Use Case, Architektur, Demo-Ablauf und technische Umsetzung."),
    ]
    for source, use in rows:
        cells = table.add_row().cells
        cells[0].text = source
        cells[1].text = use


def add_deepening(doc, page, index):
    bullets = page.get("bullets") or []
    focus = bullets[0] if bullets else page["title"]
    second = bullets[1] if len(bullets) > 1 else "Die Umsetzung muss verständlich, überprüfbar und realistisch bleiben."
    third = bullets[2] if len(bullets) > 2 else "Die Ergebnisse werden im Demonstrator und in der Dokumentation nachvollziehbar gemacht."

    doc.add_heading("Einordnung für die Abgabe", level=2)
    doc.add_paragraph(
        f"Für die wissenschaftliche Einordnung ist Seite {index} wichtig, weil sie den Punkt "
        f"„{page['title']}“ mit dem übergeordneten Projektthema verbindet. Der Abschnitt zeigt, "
        "dass KI in kleinen Unternehmen nicht isoliert als neue Software betrachtet werden darf. "
        "Entscheidend ist, ob ein klarer Arbeitsprozess verbessert wird, ob die Datenlage ausreicht "
        "und ob Mitarbeitende die Ergebnisse prüfen können."
    )
    doc.add_paragraph(
        f"Der praktische Bezug entsteht durch Kara. Aus dem Kernpunkt „{focus}“ wird im Projekt "
        "eine konkrete Gestaltungsentscheidung abgeleitet: Die Demo zeigt Aufgaben, Kontext, "
        "Vorschlag, Quelle, Risiko und Freigabe in einer gemeinsamen Oberfläche. Dadurch kann im "
        "Vortrag nicht nur behauptet, sondern direkt gezeigt werden, wie KI-Arbeit im Unternehmen "
        "ablaufen kann."
    )
    doc.add_paragraph(
        f"Gleichzeitig bleibt die Grenze sichtbar. {second} {third} Diese Begrenzung ist kein "
        "Mangel, sondern Teil des Konzepts: Ein kleiner Betrieb soll mit einem sicheren Pilot starten, "
        "Erfahrungen sammeln und erst danach weitere Automatisierungsschritte einführen."
    )


def build():
    OUT.parent.mkdir(parents=True, exist_ok=True)
    doc = Document()
    set_margins(doc.sections[0])
    style_document(doc)

    cover = doc.add_paragraph()
    cover.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run = cover.add_run("Künstliche Intelligenz für kleine Unternehmen")
    run.bold = True
    run.font.size = Pt(26)
    run.font.color.rgb = RGBColor(20, 35, 31)

    subtitle = doc.add_paragraph()
    subtitle.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run = subtitle.add_run("Potenziale, Herausforderungen und Umsetzung am Beispiel Kara")
    run.font.size = Pt(14)
    run.font.color.rgb = RGBColor(95, 111, 104)

    meta = doc.add_paragraph()
    meta.alignment = WD_ALIGN_PARAGRAPH.CENTER
    meta.add_run("IDP Sommersemester 2025\nHochschule Pforzheim\nAnsprechpartnerin: Prof. Dr. Bettina Binder")
    doc.add_page_break()

    for index, page in enumerate(PAGES, start=1):
        doc.add_heading(f"{index}. {page['title']}", level=1)
        for paragraph in page["paragraphs"]:
            doc.add_paragraph(paragraph)
        if page.get("bullets"):
            doc.add_heading("Kernpunkte", level=2)
            for bullet in page["bullets"]:
                doc.add_paragraph(bullet, style="List Bullet")
        add_deepening(doc, page, index)
        if index == 20:
            doc.add_heading("Quellenübersicht", level=2)
            add_source_table(doc)
        if index != len(PAGES):
            doc.add_page_break()

    add_page_number_footer(doc)
    doc.save(OUT)


if __name__ == "__main__":
    build()
