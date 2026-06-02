# -*- coding: utf-8 -*-
from pathlib import Path

from docx import Document
from docx.enum.section import WD_SECTION
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_CELL_VERTICAL_ALIGNMENT
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_BREAK
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Cm, Pt, RGBColor


OUT = Path("outputs/IDP_KI_kleine_Unternehmen_Dokumentation.docx")


TITLE = "Künstliche Intelligenz für kleine Unternehmen"
SUBTITLE = "Potenziale, Herausforderungen und Umsetzung am Beispiel Kara"


def set_cell_shading(cell, color):
    tc_pr = cell._tc.get_or_add_tcPr()
    shading = tc_pr.find(qn("w:shd"))
    if shading is None:
        shading = OxmlElement("w:shd")
        tc_pr.append(shading)
    shading.set(qn("w:fill"), color)


def set_cell_text(cell, text, bold=False, color=None):
    cell.text = ""
    p = cell.paragraphs[0]
    p.paragraph_format.space_after = Pt(0)
    run = p.add_run(text)
    run.bold = bold
    run.font.name = "Times New Roman"
    run.font.size = Pt(10)
    if color:
        run.font.color.rgb = RGBColor.from_string(color)


def add_field(paragraph, instruction, placeholder):
    fld_simple = OxmlElement("w:fldSimple")
    fld_simple.set(qn("w:instr"), instruction)
    run = OxmlElement("w:r")
    text = OxmlElement("w:t")
    text.text = placeholder
    run.append(text)
    fld_simple.append(run)
    paragraph._p.append(fld_simple)


def add_page_number(paragraph):
    paragraph.alignment = WD_ALIGN_PARAGRAPH.CENTER
    paragraph.add_run("Seite ")
    add_field(paragraph, "PAGE", "1")


def set_update_fields(doc):
    settings = doc.settings._element
    update_fields = settings.find(qn("w:updateFields"))
    if update_fields is None:
        update_fields = OxmlElement("w:updateFields")
        settings.append(update_fields)
    update_fields.set(qn("w:val"), "true")


def setup_styles(doc):
    styles = doc.styles

    normal = styles["Normal"]
    normal.font.name = "Times New Roman"
    normal.font.size = Pt(12)
    normal.paragraph_format.line_spacing = 1.5
    normal.paragraph_format.space_after = Pt(6)
    normal.paragraph_format.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY

    title = styles["Title"]
    title.font.name = "Times New Roman"
    title.font.size = Pt(20)
    title.font.bold = True
    title.font.color.rgb = RGBColor(20, 35, 31)
    title.paragraph_format.alignment = WD_ALIGN_PARAGRAPH.CENTER
    title.paragraph_format.space_after = Pt(18)

    subtitle = styles["Subtitle"]
    subtitle.font.name = "Times New Roman"
    subtitle.font.size = Pt(14)
    subtitle.font.italic = True
    subtitle.font.color.rgb = RGBColor(80, 80, 80)
    subtitle.paragraph_format.alignment = WD_ALIGN_PARAGRAPH.CENTER

    for style_name, size, before, after in [
        ("Heading 1", 16, 18, 10),
        ("Heading 2", 14, 14, 8),
        ("Heading 3", 12, 10, 6),
    ]:
        style = styles[style_name]
        style.font.name = "Times New Roman"
        style.font.size = Pt(size)
        style.font.bold = True
        style.font.color.rgb = RGBColor(20, 35, 31)
        style.paragraph_format.line_spacing = 1.15
        style.paragraph_format.space_before = Pt(before)
        style.paragraph_format.space_after = Pt(after)
        style.paragraph_format.keep_with_next = True

    caption = styles["Caption"]
    caption.font.name = "Times New Roman"
    caption.font.size = Pt(10)
    caption.font.italic = True
    caption.font.color.rgb = RGBColor(70, 70, 70)
    caption.paragraph_format.alignment = WD_ALIGN_PARAGRAPH.CENTER
    caption.paragraph_format.space_after = Pt(10)

    references = styles.add_style("Literatur", 1)
    references.font.name = "Times New Roman"
    references.font.size = Pt(11)
    references.paragraph_format.line_spacing = 1.15
    references.paragraph_format.space_after = Pt(6)
    references.paragraph_format.first_line_indent = Cm(-0.75)
    references.paragraph_format.left_indent = Cm(0.75)


def setup_sections(doc):
    section = doc.sections[0]
    section.top_margin = Cm(2.5)
    section.bottom_margin = Cm(2.3)
    section.left_margin = Cm(3.0)
    section.right_margin = Cm(2.5)
    section.header_distance = Cm(1.2)
    section.footer_distance = Cm(1.2)


def add_footer(section):
    footer = section.footer
    paragraph = footer.paragraphs[0]
    paragraph.text = ""
    add_page_number(paragraph)
    for run in paragraph.runs:
        run.font.name = "Times New Roman"
        run.font.size = Pt(10)


def paragraph(doc, text):
    return doc.add_paragraph(text)


def bullet(doc, text):
    p = doc.add_paragraph(text, style="List Bullet")
    p.paragraph_format.line_spacing = 1.3
    return p


def numbered(doc, text):
    p = doc.add_paragraph(text, style="List Number")
    p.paragraph_format.line_spacing = 1.3
    return p


def caption(doc, text):
    return doc.add_paragraph(text, style="Caption")


def page_break(doc):
    doc.add_paragraph().add_run().add_break(WD_BREAK.PAGE)


def add_cover(doc):
    p = doc.add_paragraph()
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p.paragraph_format.space_before = Pt(72)
    run = p.add_run("Hochschule Pforzheim")
    run.bold = True
    run.font.name = "Times New Roman"
    run.font.size = Pt(16)

    p = doc.add_paragraph()
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run = p.add_run("Interdisziplinäres Projekt | Sommersemester 2025")
    run.font.name = "Times New Roman"
    run.font.size = Pt(12)

    title = doc.add_paragraph(TITLE, style="Title")
    title.paragraph_format.space_before = Pt(90)
    doc.add_paragraph(SUBTITLE, style="Subtitle")

    meta = doc.add_table(rows=5, cols=2)
    meta.alignment = WD_TABLE_ALIGNMENT.CENTER
    meta.autofit = True
    entries = [
        ("Projekt", "KI für kleine Unternehmen"),
        ("Fiktives Unternehmen", "Kara AI Operations"),
        ("Prüfungsleistung", "Dokumentation, Präsentation, Demo, LinkedIn-Beitrag und Techday-Material"),
        ("Ansprechpartnerin", "Prof. Dr. Bettina Binder"),
        ("Stand", "2. Juni 2026"),
    ]
    for row, (label, value) in zip(meta.rows, entries):
        set_cell_text(row.cells[0], label, bold=True)
        set_cell_text(row.cells[1], value)

    doc.add_paragraph()
    note = doc.add_paragraph()
    note.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run = note.add_run("Hinweis: Namen der Bearbeitenden bitte vor Abgabe ergänzen.")
    run.font.name = "Times New Roman"
    run.font.size = Pt(10)
    run.italic = True
    page_break(doc)


def add_front_matter(doc):
    doc.add_heading("Abstract", level=1)
    paragraph(doc, (
        "Diese Arbeit untersucht, wie kleine Unternehmen künstliche Intelligenz ressourcenschonend "
        "und kontrolliert einsetzen können. Ausgangspunkt ist die Beobachtung, dass große Unternehmen "
        "KI bereits in Support, Analyse, Automatisierung und Wissensmanagement nutzen, während kleinere "
        "Betriebe häufig durch knappe Budgets, begrenztes IT-Know-how und Datenschutzfragen gebremst werden."
    ))
    paragraph(doc, (
        "Als praktischer Anwendungsfall wird das fiktive E-Commerce-KMU Kara entwickelt. Der Demonstrator "
        "zeigt ein KI-Operations-Cockpit, in dem Mitarbeitende Supportfälle, Bestellungen, Rechnungsprüfungen, "
        "Auswertungen und interne Wissensfragen bearbeiten. Die KI ist im MVP simuliert, damit die Demo ohne "
        "API-Key, ohne echte Kundendaten und ohne externe KI-Anfragen stabil präsentiert werden kann."
    ))
    paragraph(doc, (
        "Die Arbeit kommt zu dem Ergebnis, dass KI für kleine Unternehmen besonders dann sinnvoll ist, wenn sie "
        "als Assistenzsystem in klar begrenzte Prozesse eingebettet wird. Menschliche Freigabe, Transparenz, "
        "Datensparsamkeit und eine schrittweise Einführung sind dabei zentrale Erfolgsfaktoren."
    ))

    doc.add_heading("Management Summary", level=1)
    paragraph(doc, (
        "Das Projekt erfüllt die Aufgabenstellung durch die Verbindung von Analyse und Umsetzung. Neben der "
        "theoretischen Einordnung wurden ein interaktiver Demonstrator, ein How-To-Leitfaden, eine PowerPoint-"
        "Präsentation, ein LinkedIn-Beitrag und ein Techday-One-Pager erstellt."
    ))
    bullet(doc, "KI wird als Assistenzsystem verstanden, nicht als vollständig autonome Entscheidung.")
    bullet(doc, "Kara zeigt konkrete KI-Anwendungsfälle für Support, Rechnungen, Bestellungen, Analyse und internes Wissen.")
    bullet(doc, "Der MVP ist lokal, datenschutzschonend und präsentationssicher.")
    bullet(doc, "Supabase und Make bleiben als spätere Ausbaustufe dokumentiert.")
    page_break(doc)

    doc.add_heading("Inhaltsverzeichnis", level=1)
    add_field(doc.add_paragraph(), 'TOC \\o "1-3" \\h \\z \\u', "Inhaltsverzeichnis in Word aktualisieren")
    page_break(doc)

    doc.add_heading("Abbildungsverzeichnis", level=1)
    add_field(doc.add_paragraph(), 'TOC \\h \\z \\c "Abbildung"', "Abbildungsverzeichnis in Word aktualisieren")
    doc.add_heading("Tabellenverzeichnis", level=1)
    add_field(doc.add_paragraph(), 'TOC \\h \\z \\c "Tabelle"', "Tabellenverzeichnis in Word aktualisieren")
    doc.add_heading("Abkürzungsverzeichnis", level=1)
    table = doc.add_table(rows=1, cols=2)
    table.style = "Table Grid"
    set_cell_text(table.rows[0].cells[0], "Abkürzung", bold=True)
    set_cell_text(table.rows[0].cells[1], "Bedeutung", bold=True)
    for abbr, meaning in [
        ("AI", "Artificial Intelligence"),
        ("DSGVO", "Datenschutz-Grundverordnung"),
        ("EU AI Act", "KI-Verordnung der Europäischen Union"),
        ("IDP", "Interdisziplinäres Projekt"),
        ("KI", "Künstliche Intelligenz"),
        ("KMU", "Kleine und mittlere Unternehmen"),
        ("MVP", "Minimum Viable Product"),
    ]:
        row = table.add_row()
        set_cell_text(row.cells[0], abbr)
        set_cell_text(row.cells[1], meaning)
    page_break(doc)


def add_table(doc, title, headers, rows):
    table = doc.add_table(rows=1, cols=len(headers))
    table.style = "Table Grid"
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    for idx, header in enumerate(headers):
        set_cell_shading(table.rows[0].cells[idx], "E7F1EC")
        set_cell_text(table.rows[0].cells[idx], header, bold=True, color="14231F")
    for row_data in rows:
        row = table.add_row()
        for idx, value in enumerate(row_data):
            row.cells[idx].vertical_alignment = WD_CELL_VERTICAL_ALIGNMENT.TOP
            set_cell_text(row.cells[idx], value)
    caption(doc, title)
    return table


def add_process_figure(doc):
    table = doc.add_table(rows=1, cols=5)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    labels = ["Aufgabe", "Kontext", "KI-Vorschlag", "Prüfung", "Freigabe"]
    for idx, label in enumerate(labels):
        cell = table.rows[0].cells[idx]
        set_cell_shading(cell, "E7F1EC" if idx != 2 else "F2DFC2")
        set_cell_text(cell, label, bold=True)
    caption(doc, "Abbildung 1: Human-in-the-loop-Prozess im Kara KI-Cockpit")


def add_architecture_figure(doc):
    table = doc.add_table(rows=3, cols=3)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    data = [
        ["Website", "localStorage", "Demo-Daten"],
        ["KI-Simulation", "Quelle/Risiko", "Freigabestatus"],
        ["Ausbau: Supabase", "Ausbau: Make", "Ausbau: KI-API"],
    ]
    for r_idx, row in enumerate(table.rows):
        for c_idx, cell in enumerate(row.cells):
            set_cell_shading(cell, "F7F3EA" if r_idx < 2 else "E7F1EC")
            set_cell_text(cell, data[r_idx][c_idx], bold=r_idx == 0)
    caption(doc, "Abbildung 2: Technische Zielarchitektur des Demonstrators")


DEPTH_SECTIONS = {
    1: (
        "1.5 Methodisches Vorgehen und Abgrenzung",
        [
            "Die Arbeit verfolgt ein anwendungsorientiertes Vorgehen. Ausgangspunkt ist keine eigene empirische Erhebung, sondern die projektbezogene Analyse typischer Einsatzfelder von KI in Unternehmen und deren Übertragung auf ein kleines, fiktives Unternehmen. Dadurch passt das Vorgehen zur IDP-Aufgabenstellung, die wissenschaftliche Orientierung und praktische Umsetzung miteinander verbindet.",
            "Die Abgrenzung ist wichtig, weil der Begriff KI sehr breit verwendet wird. Das Projekt betrachtet keine Entwicklung eigener KI-Modelle und kein Training großer Sprachmodelle. Im Mittelpunkt steht vielmehr die Frage, wie vorhandene KI-Funktionalität als Werkzeug in einen betrieblichen Ablauf eingebettet werden kann.",
            "Für den praktischen Teil wurde Kara als Fallbeispiel konstruiert. Diese Konstruktion erlaubt es, typische Aufgaben kleiner Unternehmen zu bündeln, ohne echte Kundendaten zu verwenden. Dadurch entsteht ein realistisches, aber datenschutzschonendes Szenario.",
            "Die Bewertung des Projekts erfolgt anhand von vier Kriterien: fachliche Passung zur Aufgabenstellung, Verständlichkeit für kleine Unternehmen, technische Demonstrierbarkeit und bewusste Berücksichtigung von Datenschutz und menschlicher Kontrolle.",
        ],
    ),
    2: (
        "2.4 Chancen und Grenzen generativer KI",
        [
            "Generative KI ist besonders geeignet, wenn Texte erstellt, zusammengefasst oder umformuliert werden sollen. Im Unternehmenskontext kann sie beispielsweise Kundenanfragen strukturieren, Antwortentwürfe vorbereiten oder interne Prozessinformationen verständlich aufbereiten.",
            "Gleichzeitig besitzt generative KI Grenzen. Sie kann plausibel klingende, aber falsche Aussagen erzeugen. Außerdem kann sie Kontext falsch gewichten, wenn Daten fehlen oder Regeln nicht eindeutig formuliert sind. Kleine Unternehmen dürfen KI-Ergebnisse deshalb nicht ungeprüft übernehmen.",
            "Der Kara-Demonstrator reagiert auf diese Grenze, indem jeder Vorschlag mit Quelle, Risiko und Freigabestatus dargestellt wird. Die Oberfläche macht sichtbar, dass ein KI-Vorschlag kein fertiger Entschluss ist.",
            "Für eine produktive Nutzung wäre zusätzlich ein Protokoll sinnvoll. Es sollte speichern, wer einen Vorschlag erzeugt, wer ihn freigegeben hat, welche Daten verwendet wurden und ob nachträglich Korrekturen nötig waren.",
        ],
    ),
    3: (
        "3.4 Kriterien für geeignete KI-Anwendungsfälle",
        [
            "Nicht jede Aufgabe eignet sich für den Einstieg in KI. Geeignet sind Prozesse, die häufig vorkommen, vergleichsweise klar beschrieben werden können und bei denen ein Vorschlag bereits nützlich ist. Ein Supportentwurf ist dafür besser geeignet als eine endgültige juristische Entscheidung.",
            "Ein weiteres Kriterium ist die Messbarkeit. Kleine Unternehmen sollten vor dem Pilot definieren, woran Erfolg erkannt wird. Mögliche Kennzahlen sind Bearbeitungszeit, Fehlerquote, Anzahl freigegebener Vorschläge, Zufriedenheit der Mitarbeitenden und Rückfragen von Kunden.",
            "Außerdem sollte die Datenbasis begrenzt und nachvollziehbar sein. Für den Start reicht häufig eine kleine Knowledge Base mit Prozessregeln, Standardantworten und Beispieldaten. Eine große Datenplattform ist nicht zwingend erforderlich.",
            "Kara erfüllt diese Kriterien, weil die gewählten Fälle realistische Routinetätigkeiten darstellen. Der Demonstrator zeigt bewusst Aufgaben mit begrenztem Risiko und klarer menschlicher Kontrolle.",
        ],
    ),
    4: (
        "4.4 Risikoanalyse für kleine Unternehmen",
        [
            "Die Einführung von KI erzeugt neue Risiken. Neben technischen Fehlern können organisatorische und rechtliche Probleme entstehen. Ein kleines Unternehmen muss deshalb vor dem Einsatz klären, welche Folgen ein falscher Vorschlag haben könnte.",
            "Bei Kara sind Supportantworten, Rechnungen und Bestellungen unterschiedlich riskant. Ein unglücklich formulierter Antwortentwurf kann zu Kundenunzufriedenheit führen. Eine fehlerhafte Rechnung kann finanzielle oder steuerliche Folgen haben. Eine falsche Versandfreigabe kann operative Kosten verursachen.",
            "Aus diesem Grund priorisiert das Projekt ein abgestuftes Freigabemodell. Niedrige Risiken können schneller bearbeitet werden, während Rechnungen und Bestellungen mit Kundenwirkung bewusst geprüft werden müssen.",
            "Eine produktive Umsetzung sollte zusätzlich Eskalationsregeln definieren. Fälle mit unvollständigen Daten, hoher Unsicherheit oder Beschwerden sollten nicht automatisch weiterverarbeitet werden.",
        ],
    ),
    5: (
        "5.4 Jobs-to-be-Done im Kara-Szenario",
        [
            "Die Perspektive der Mitarbeitenden lässt sich als Job-to-be-Done beschreiben: Wenn im Arbeitsalltag viele kleine Fälle parallel entstehen, wollen Mitarbeitende schnell erkennen, welcher Fall wichtig ist, welche Informationen relevant sind und welche Antwort fachlich vertretbar ist.",
            "Für die Teamleitung lautet der Job: offene Aufgaben priorisieren, Qualität sichern und sicherstellen, dass alle Mitarbeitenden nach denselben Regeln arbeiten. Das KI-Cockpit unterstützt diesen Job durch Status, Risiko und einheitliche Vorschläge.",
            "Für die Geschäftsführung lautet der Job: verstehen, ob KI messbaren Nutzen bringt und welche Risiken kontrolliert werden müssen. Das Tagesbriefing und die Kennzahlen im Cockpit liefern dafür eine verdichtete Sicht.",
            "Diese Perspektive zeigt, dass die Demo nicht nur technische Funktionen enthält. Sie bildet konkrete Arbeitsbedürfnisse im kleinen Unternehmen ab.",
        ],
    ),
    6: (
        "6.5 Begründung der technischen MVP-Entscheidungen",
        [
            "Die Entscheidung für eine lokale Demo ist fachlich begründet. Im Präsentationskontext muss die Anwendung stabil funktionieren, auch wenn kein API-Key, keine Cloudverbindung oder kein externer Dienst verfügbar ist.",
            "Die simulierte KI reduziert außerdem Datenschutzrisiken. Es werden keine echten Kundendaten an externe Dienste gesendet. Trotzdem kann der Ablauf realistisch gezeigt werden, weil die Antwortlogik auf typischen Aufgaben und vorbereiteten Demo-Daten basiert.",
            "Die Speicherung im localStorage ist für einen MVP ausreichend. Sie zeigt, wie Statuswechsel, Freigaben und Ablehnungen nachvollziehbar gespeichert werden können. Für eine produktive Version wäre localStorage nicht ausreichend, weil zentrale Datenhaltung, Rollenrechte und Backups fehlen.",
            "Die Dokumentation von Supabase und Make bleibt wichtig, weil sie den Weg von der Demo zur produktionsnäheren Architektur beschreibt. So wird klar, dass der MVP bewusst klein gehalten ist, aber erweiterbar bleibt.",
        ],
    ),
    7: (
        "7.4 Konkrete Datenschutzmaßnahmen für eine spätere Umsetzung",
        [
            "Für eine spätere produktive Umsetzung müsste Kara ein Datenschutzkonzept erstellen. Dieses Konzept sollte beschreiben, welche Daten verarbeitet werden, zu welchem Zweck die Verarbeitung erfolgt und wie lange Daten gespeichert werden.",
            "Eine sinnvolle Maßnahme ist Datensparsamkeit. Die KI sollte nur die Informationen erhalten, die für die konkrete Aufgabe erforderlich sind. Bei einem Supportentwurf können Bestellnummer, Anfrage und relevante Prozessregel ausreichen.",
            "Eine weitere Maßnahme ist Rollensteuerung. Nicht jede Person im Unternehmen sollte dieselben Daten sehen oder dieselben Vorschläge freigeben dürfen. Rechnungsfreigaben benötigen beispielsweise strengere Rechte als interne Wissensfragen.",
            "Zusätzlich sollte Kara eine Protokollierung einführen. Diese dokumentiert, wann ein KI-Vorschlag erzeugt wurde, welche Quelle genutzt wurde und wer die Freigabe vorgenommen hat. Dadurch entsteht Nachvollziehbarkeit für spätere Prüfungen.",
        ],
    ),
    8: (
        "8.6 Umsetzungscheckliste",
        [
            "Die praktische Umsetzung sollte in einer einfachen Checkliste festgehalten werden. Vor Projektstart wird ein Prozess ausgewählt, anschließend werden Datenquellen und Verantwortlichkeiten definiert. Erst danach wird ein Pilot gebaut.",
            "Während des Pilots sollten Mitarbeitende aktiv einbezogen werden. Sie können beurteilen, ob Vorschläge hilfreich sind, welche Formulierungen angepasst werden müssen und welche Fälle weiterhin vollständig manuell bearbeitet werden sollten.",
            "Nach dem Pilot sollte das Unternehmen nicht nur technische Funktion prüfen, sondern auch organisatorische Wirkung. Entscheidend ist, ob die KI tatsächlich Zeit spart, Qualität verbessert und Unsicherheit reduziert.",
            "Wenn diese Kriterien erfüllt sind, kann das Unternehmen weitere Prozesse anbinden. Wenn nicht, sollten Daten, Regeln oder Scope angepasst werden, bevor zusätzliche Automatisierung entsteht.",
        ],
    ),
    9: (
        "9.4 Bewertung der Präsentationsfähigkeit",
        [
            "Für den WI-Tag oder Techday muss das Projekt schnell verständlich sein. Die Demo beginnt deshalb nicht mit technischer Architektur, sondern mit einem sichtbaren Problem: kleine Unternehmen verlieren Zeit durch wiederkehrende Routinetätigkeiten.",
            "Anschließend zeigt das KI-Cockpit den Lösungsansatz. Die Besuchenden können sehen, dass KI nicht abstrakt bleibt, sondern direkt bei Support, Rechnung, Bestellung und Analyse unterstützt.",
            "Die Präsentation muss außerdem die Grenzen offen ansprechen. Dazu gehören Datenschutz, Qualitätssicherung, menschliche Kontrolle und die Tatsache, dass der aktuelle MVP keine echte KI-Anbindung nutzt.",
            "Gerade diese Begrenzung macht den Demonstrator glaubwürdig. Er verspricht keine vollautomatische Unternehmenssteuerung, sondern zeigt einen realistischen Einstieg für kleine Unternehmen.",
        ],
    ),
    10: (
        "10.1 Kritische Reflexion",
        [
            "Der aktuelle Stand ist ein überzeugender Demonstrator, aber noch kein produktives System. Die KI ist simuliert, die Daten liegen lokal im Browser und echte Rollenrechte fehlen. Diese Punkte sind bewusst als MVP-Grenzen dokumentiert.",
            "Für die Aufgabenstellung ist diese Begrenzung vertretbar, weil der Schwerpunkt auf Orientierung, Anwendungsfall und verständlicher Umsetzung liegt. Der Demonstrator zeigt, was KI im kleinen Unternehmen leisten kann, ohne Datenschutzrisiken durch echte Kundendaten einzugehen.",
            "Eine Stärke des Projekts ist die Verbindung von Website, Dokumentation, Leitfaden und Präsentationsmaterial. Dadurch entsteht nicht nur ein Prototyp, sondern ein vollständiges Abgabepaket.",
            "Eine mögliche Schwäche ist, dass die wissenschaftliche Tiefe durch weitere Literatur und empirische Beispiele noch ausgebaut werden könnte. Für eine spätere Bachelorarbeit wären Interviews mit kleinen Unternehmen oder ein Vergleich realer KI-Tools sinnvoll.",
        ],
    ),
}


def add_depth_section(doc, chapter_number):
    heading, paragraphs = DEPTH_SECTIONS[chapter_number]
    doc.add_heading(heading, level=2)
    for text in paragraphs:
        paragraph(doc, text)


def chapter_1(doc):
    doc.add_heading("1 Einleitung", level=1)
    doc.add_heading("1.1 Ausgangslage", level=2)
    paragraph(doc, (
        "Künstliche Intelligenz wird in Unternehmen zunehmend als Instrument zur Prozessoptimierung, "
        "Automatisierung und datenbasierten Entscheidungsunterstützung eingesetzt. Große Unternehmen "
        "verfügen häufig über eigene Datenabteilungen, Budgets und technische Infrastruktur. Kleine "
        "Unternehmen stehen dagegen vor der Herausforderung, KI-Anwendungen sinnvoll, sicher und mit "
        "begrenzten Ressourcen einzuführen."
    ))
    paragraph(doc, (
        "Gerade kleine Unternehmen haben jedoch viele wiederkehrende Aufgaben, bei denen KI einen "
        "praktischen Nutzen liefern kann. Dazu gehören Kundenanfragen, Rechnungsprüfung, interne "
        "Wissenssuche, Zusammenfassungen und einfache Auswertungen. Die Frage ist deshalb nicht, ob KI "
        "grundsätzlich relevant ist, sondern wie der Einstieg niedrigschwellig und kontrollierbar gelingt."
    ))

    doc.add_heading("1.2 Zielsetzung", level=2)
    paragraph(doc, (
        "Ziel dieser Arbeit ist die Entwicklung einer verständlichen Orientierung für kleine Unternehmen. "
        "Die Arbeit analysiert relevante KI-Anwendungsfelder, rechtliche und ethische Aspekte sowie typische "
        "Hürden. Darauf aufbauend wird ein fiktiver Anwendungsfall für das kleine Unternehmen Kara entwickelt."
    ))
    paragraph(doc, (
        "Der praktische Beitrag besteht aus einem interaktiven KI-Cockpit. Es zeigt, wie Mitarbeitende "
        "KI-Vorschläge für Support, Bestellungen, Rechnungen, Analysen und Wissensfragen nutzen können. "
        "Der Mensch bleibt dabei bewusst in der Kontrolle."
    ))

    doc.add_heading("1.3 Forschungsleitende Frage", level=2)
    paragraph(doc, (
        "Die leitende Frage lautet: Wie können kleine Unternehmen KI-Anwendungen so in ihre Geschäftsprozesse "
        "integrieren, dass Nutzen entsteht, ohne Datenschutz, Qualität und menschliche Verantwortung zu vernachlässigen?"
    ))

    doc.add_heading("1.4 Aufbau der Arbeit", level=2)
    paragraph(doc, (
        "Kapitel 2 erläutert Grundlagen zu KI im Unternehmenskontext. Kapitel 3 betrachtet Potenziale und "
        "Praxisbeispiele. Kapitel 4 analysiert Hürden kleiner Unternehmen. Kapitel 5 beschreibt das fiktive "
        "Unternehmen Kara. Kapitel 6 dokumentiert den Demonstrator. Kapitel 7 behandelt Recht und Ethik. "
        "Kapitel 8 formuliert einen How-To-Leitfaden. Kapitel 9 beschreibt Evaluation und Kommunikation. "
        "Kapitel 10 diskutiert die Ergebnisse kritisch. Kapitel 11 fasst die Arbeit zusammen und gibt einen Ausblick."
    ))
    add_depth_section(doc, 1)


def chapter_2(doc):
    doc.add_heading("2 Grundlagen: KI im Unternehmen", level=1)
    doc.add_heading("2.1 Begriffliche Einordnung", level=2)
    paragraph(doc, (
        "Unter künstlicher Intelligenz werden in dieser Arbeit Systeme verstanden, die Informationen "
        "verarbeiten, Muster erkennen, Texte erzeugen, Inhalte klassifizieren oder Entscheidungen vorbereiten. "
        "Für kleine Unternehmen ist weniger die konkrete Modellarchitektur entscheidend, sondern die Frage, "
        "welche Aufgabe im Arbeitsalltag unterstützt wird."
    ))
    paragraph(doc, (
        "KI kann beispielsweise Kundenanfragen zusammenfassen, Antwortentwürfe formulieren, Belege prüfen, "
        "Risiken markieren oder interne Wissensfragen beantworten. Der Nutzen entsteht erst dann, wenn diese "
        "Funktionen in einen klaren Prozess eingebettet werden."
    ))

    doc.add_heading("2.2 KI als Assistenzsystem", level=2)
    paragraph(doc, (
        "Im Projekt wird KI nicht als vollständig autonomes System verstanden. Sie bereitet Arbeit vor, "
        "liefert Vorschläge und verweist auf mögliche Risiken. Die fachliche Entscheidung bleibt beim Menschen. "
        "Dieses Human-in-the-loop-Prinzip ist besonders für kleine Unternehmen sinnvoll, weil es Vertrauen "
        "aufbaut und Fehlentscheidungen reduziert."
    ))
    add_process_figure(doc)

    doc.add_heading("2.3 Typische Unternehmensbereiche", level=2)
    add_table(
        doc,
        "Tabelle 1: Typische KI-Anwendungsfelder im Unternehmenskontext",
        ["Bereich", "Mögliche KI-Aufgabe", "Nutzen"],
        [
            ["Kundenservice", "Anfragen zusammenfassen und Antwortentwürfe erzeugen", "schnellere Reaktion und einheitliche Kommunikation"],
            ["Finanzen", "Rechnungsdaten, Steuern und Summen plausibilisieren", "weniger Fehler in administrativen Prozessen"],
            ["Operations", "Bestellungen priorisieren und Engpässe markieren", "bessere Übersicht über operative Risiken"],
            ["Management", "Tagesbriefings und Kennzahlen zusammenfassen", "schnellere Lageeinschätzung"],
            ["Wissen", "interne Prozessfragen beantworten", "weniger Suchaufwand und schnelleres Onboarding"],
        ],
    )
    add_depth_section(doc, 2)


def chapter_3(doc):
    doc.add_heading("3 Potenziale und Praxisbeispiele", level=1)
    doc.add_heading("3.1 Erkenntnisse aus größeren Unternehmen", level=2)
    paragraph(doc, (
        "Große Unternehmen setzen KI bereits in unterschiedlichen Bereichen ein. Im Kundenservice werden "
        "Chatbots, Antwortvorschläge und Wissensdatenbanken genutzt. In Finanzbereichen unterstützt KI bei "
        "Belegprüfung, Betrugserkennung und Abweichungsanalyse. In operativen Bereichen helfen Prognosen "
        "bei Beständen, Lieferketten und Priorisierung."
    ))
    paragraph(doc, (
        "Für kleine Unternehmen ist nicht die technische Komplexität dieser Lösungen übertragbar. Übertragbar "
        "ist vor allem das Muster: Ein Prozess muss wiederholbar sein, Daten müssen verfügbar sein, der Nutzen "
        "muss messbar sein und die Entscheidungspunkte müssen klar bleiben."
    ))

    doc.add_heading("3.2 Übertragbare Muster für KMU", level=2)
    paragraph(doc, (
        "Kleine Unternehmen sollten nicht mit einer umfassenden KI-Plattform beginnen. Sinnvoller ist ein "
        "begrenzter Pilot, der eine konkrete Aufgabe unterstützt. Beispiele sind Antwortentwürfe im Support, "
        "Rechnungsprüfung, interne Wissenssuche oder Tagesbriefings."
    ))
    bullet(doc, "Wiederholbare Aufgaben eignen sich besser als seltene Sonderfälle.")
    bullet(doc, "Niedrige Risiken eignen sich besser für den Start als Entscheidungen mit hoher rechtlicher Wirkung.")
    bullet(doc, "Ein sichtbarer Freigabeschritt erhöht Vertrauen und Nachvollziehbarkeit.")

    doc.add_heading("3.3 Nutzenlogik", level=2)
    paragraph(doc, (
        "Der Nutzen von KI entsteht im KMU vor allem durch Zeitersparnis, bessere Übersicht, weniger Fehler "
        "und einheitlichere Kommunikation. Diese Nutzenlogik ist im Kara-Demonstrator abgebildet: Die KI "
        "zeigt nicht nur eine Antwort, sondern auch Quelle, Risiko und Status."
    ))
    add_depth_section(doc, 3)


def chapter_4(doc):
    doc.add_heading("4 Herausforderungen kleiner Unternehmen", level=1)
    doc.add_heading("4.1 Ressourcen und Know-how", level=2)
    paragraph(doc, (
        "Kleine Unternehmen verfügen häufig nicht über spezialisierte Daten- oder KI-Teams. Die Einführung "
        "muss deshalb mit vorhandenen Rollen funktionieren. Komplexe Integrationen, lange Schulungen oder "
        "hohe Lizenzkosten können den Einstieg erschweren."
    ))

    doc.add_heading("4.2 Datenqualität und Prozessklarheit", level=2)
    paragraph(doc, (
        "KI kann nur dann sinnvoll unterstützen, wenn Daten verständlich, auffindbar und aktuell sind. "
        "Unvollständige Kundendaten, uneinheitliche Rechnungsinformationen oder widersprüchliche Prozessregeln "
        "führen zu unsicheren Ergebnissen. Deshalb muss vor der technischen Umsetzung geklärt werden, welche "
        "Datenquellen verwendet werden und wer für ihre Qualität verantwortlich ist."
    ))

    doc.add_heading("4.3 Akzeptanz und Veränderung", level=2)
    paragraph(doc, (
        "Ein weiterer kritischer Punkt ist die Akzeptanz der Mitarbeitenden. KI sollte nicht als Ersatz für "
        "Menschen kommuniziert werden, sondern als Unterstützung bei Routineaufgaben. Mitarbeitende müssen "
        "wissen, wann sie KI nutzen dürfen, wie sie Ergebnisse prüfen und wann sie Vorschläge ablehnen sollen."
    ))

    add_table(
        doc,
        "Tabelle 2: Hürden und Gegenmaßnahmen bei der KI-Einführung",
        ["Hürde", "Risiko", "Gegenmaßnahme"],
        [
            ["Begrenztes Budget", "zu große Lösung wird nicht tragfähig", "kleinen Pilot mit klarem Nutzen starten"],
            ["Wenig KI-Erfahrung", "falsche Erwartungen und Fehlbedienung", "kurze Schulungen und klare Regeln"],
            ["Unklare Datenlage", "unzuverlässige Vorschläge", "Datenquellen begrenzen und dokumentieren"],
            ["Datenschutzunsicherheit", "rechtliche Risiken", "Datensparsamkeit und Rollenrechte einplanen"],
            ["Akzeptanzprobleme", "geringe Nutzung im Alltag", "Mitarbeitende früh einbinden"],
        ],
    )
    add_depth_section(doc, 4)


def chapter_5(doc):
    doc.add_heading("5 Fiktives Unternehmen Kara", level=1)
    doc.add_heading("5.1 Unternehmensprofil", level=2)
    paragraph(doc, (
        "Kara ist ein fiktives kleines E-Commerce-Unternehmen für kuratierte Luxury-Streetwear. Das Sortiment "
        "umfasst Outerwear, Knitwear, Tailoring, Essentials, Denim, Shirts und Accessoires. Das Unternehmen "
        "ist bewusst als kleines KMU mit ungefähr 20 bis 80 Mitarbeitenden angelegt."
    ))
    paragraph(doc, (
        "Diese Größe ist für den Anwendungsfall passend, weil bereits wiederkehrende Prozesse entstehen, "
        "gleichzeitig aber keine großen IT-Ressourcen angenommen werden. Kara muss Kundenanfragen, Retouren, "
        "Adressänderungen, Bestellungen, Rechnungen und Auswertungen effizient bearbeiten."
    ))

    doc.add_heading("5.2 Zielgruppen im Unternehmen", level=2)
    add_table(
        doc,
        "Tabelle 3: Interne Zielgruppen des Kara KI-Cockpits",
        ["Rolle", "Bedarf", "Nutzen durch KI"],
        [
            ["Geschäftsführung", "Überblick über Aufwand, Risiken und Nutzen", "Tagesbriefing und Handlungsempfehlungen"],
            ["Teamleitung", "Priorisierung offener Fälle", "Status, Risiko und Freigabe in einer Ansicht"],
            ["Support", "schnelle und konsistente Antworten", "Antwortentwürfe mit Quellenbezug"],
            ["Backoffice", "weniger Fehler bei Rechnung und Bestellung", "Prüfhinweise und Eskalationslogik"],
        ],
    )

    doc.add_heading("5.3 Auswahl der KI-Anwendungsfälle", level=2)
    paragraph(doc, (
        "Die ausgewählten Anwendungsfälle orientieren sich an der Aufgabenstellung und am Alltag eines kleinen "
        "Unternehmens. Sie sind bewusst nicht zu groß gewählt. Der Fokus liegt auf Vorschlägen, Prüfhinweisen "
        "und Zusammenfassungen."
    ))
    numbered(doc, "Support-Assistent für Kundenanfragen.")
    numbered(doc, "Rechnungs- und Bestellprüfung mit Risikoanzeige.")
    numbered(doc, "Tagesbriefing für Management und Teamleitung.")
    numbered(doc, "Wissensassistent für interne Prozessfragen.")
    add_depth_section(doc, 5)


def chapter_6(doc):
    doc.add_heading("6 Praktische Umsetzung: Kara AI Operations", level=1)
    doc.add_heading("6.1 Ziel des Demonstrators", level=2)
    paragraph(doc, (
        "Der Demonstrator soll zeigen, wie KI im Unternehmen genutzt werden kann. Deshalb steht nicht mehr "
        "der Shop als Verkaufsoberfläche im Mittelpunkt, sondern ein KI-Operations-Cockpit für Mitarbeitende. "
        "Der Shop bleibt als Datenquelle und operativer Kontext erhalten."
    ))

    doc.add_heading("6.2 Aufbau der Oberfläche", level=2)
    paragraph(doc, (
        "Die Oberfläche ist in drei funktionale Bereiche gegliedert. Links befindet sich die Aufgabenliste. "
        "In der Mitte werden Unternehmenslage und aktiver Fall angezeigt. Rechts befindet sich das KI-Panel "
        "mit Prompt, Antwortvorschlag, Quelle, Risiko und Freigabestatus."
    ))
    add_architecture_figure(doc)

    doc.add_heading("6.3 Bedienfluss", level=2)
    numbered(doc, "Mitarbeitende öffnen das KI-Cockpit.")
    numbered(doc, "Eine Aufgabe aus Support, Rechnung, Bestellung, Analyse oder Wissen wird ausgewählt.")
    numbered(doc, "Die KI erzeugt einen Vorschlag auf Basis der Demo-Daten.")
    numbered(doc, "Quelle und Risiko werden geprüft.")
    numbered(doc, "Der Vorschlag wird freigegeben oder abgelehnt.")
    paragraph(doc, (
        "Dieser Ablauf macht das Prinzip der menschlichen Kontrolle sichtbar. Die KI erzeugt keine endgültige "
        "Kundenantwort und versendet keine Rechnung automatisch. Jede Entscheidung bleibt prüfbar."
    ))

    doc.add_heading("6.4 Lokale Datenstruktur", level=2)
    add_table(
        doc,
        "Tabelle 4: Lokale Demo-Collections im Browser",
        ["Collection", "Zweck"],
        [
            ["kara_ai_tasks", "Aufgaben für Support, Rechnung, Bestellung, Analyse und Wissen"],
            ["kara_support_cases", "Beispielhafte Kundenanfragen"],
            ["kara_ai_runs", "Erzeugte KI-Vorschläge und Freigabestatus"],
            ["kara_knowledge_base", "Interne Regeln und Wissensbausteine"],
            ["kara_orders", "Bestellungen aus dem Shop-Prototyp"],
            ["kara_invoices", "Rechnungsentwürfe und Statusdaten"],
        ],
    )
    add_depth_section(doc, 6)


def chapter_7(doc):
    doc.add_heading("7 Rechtliche und ethische Aspekte", level=1)
    doc.add_heading("7.1 Datenschutz und DSGVO", level=2)
    paragraph(doc, (
        "Beim Einsatz von KI in kleinen Unternehmen ist Datenschutz zentral. Personenbezogene Daten dürfen "
        "nur verarbeitet werden, wenn Zweck, Rechtsgrundlage und Schutzmaßnahmen geklärt sind. Für den MVP "
        "werden deshalb keine echten Kundendaten genutzt."
    ))
    paragraph(doc, (
        "Eine produktive Umsetzung müsste Datensparsamkeit, Zugriffsrechte, Löschfristen, Protokollierung und "
        "Anbieterprüfung berücksichtigen. Besonders wichtig ist, sensible Kundendaten nicht ohne Notwendigkeit "
        "an externe KI-Dienste zu übertragen."
    ))

    doc.add_heading("7.2 EU AI Act", level=2)
    paragraph(doc, (
        "Die KI-Verordnung der Europäischen Union ist seit dem 1. August 2024 in Kraft und verfolgt einen "
        "risikobasierten Ansatz. Für Kara bedeutet dies, dass der konkrete Einsatzzweck bewertet werden muss. "
        "Der Demonstrator ist als Assistenzsystem konzipiert und trifft keine autonomen Entscheidungen mit "
        "Kundenwirkung."
    ))

    doc.add_heading("7.3 Ethische Leitlinien", level=2)
    bullet(doc, "KI-Vorschläge müssen als Vorschläge gekennzeichnet werden.")
    bullet(doc, "Quellen und Risiken sollen sichtbar sein.")
    bullet(doc, "Mitarbeitende müssen Ergebnisse prüfen können.")
    bullet(doc, "Fehlerhafte oder unsichere Vorschläge müssen ablehnbar sein.")
    bullet(doc, "Die Einführung darf Verantwortung nicht verschieben, sondern muss Verantwortung sichtbar machen.")
    add_depth_section(doc, 7)


def chapter_8(doc):
    doc.add_heading("8 How-To-Leitfaden für kleine Unternehmen", level=1)
    paragraph(doc, (
        "Der Leitfaden übersetzt die Projektergebnisse in konkrete Schritte. Kleine Unternehmen sollten nicht "
        "mit einem Modell oder Tool beginnen, sondern mit einem geeigneten Prozess."
    ))
    doc.add_heading("8.1 Schritt 1: Prozess auswählen", level=2)
    paragraph(doc, (
        "Ein guter Startprozess ist häufig, klar begrenzt und messbar. Geeignet sind beispielsweise "
        "Supportzusammenfassungen, Antwortentwürfe, Rechnungsprüfung oder interne Wissenssuche."
    ))
    doc.add_heading("8.2 Schritt 2: Daten und Datenschutz prüfen", level=2)
    paragraph(doc, (
        "Vor dem Pilot müssen Datenquellen, Verantwortlichkeiten und Datenschutzanforderungen geklärt werden. "
        "Für den Start sollten nur notwendige Daten genutzt werden."
    ))
    doc.add_heading("8.3 Schritt 3: Pilot bauen", level=2)
    paragraph(doc, (
        "Der Pilot sollte klein bleiben. Eine KI kann beispielsweise eine Kundenanfrage zusammenfassen und "
        "einen Antwortentwurf erzeugen. Der Mensch prüft den Vorschlag und gibt ihn frei."
    ))
    doc.add_heading("8.4 Schritt 4: Erfolg messen", level=2)
    paragraph(doc, (
        "Der Erfolg sollte anhand einfacher Kennzahlen geprüft werden: Bearbeitungszeit, Fehlerquote, "
        "Akzeptanz, Anzahl freigegebener Vorschläge und Qualität der Ergebnisse."
    ))
    doc.add_heading("8.5 Schritt 5: Schrittweise erweitern", level=2)
    paragraph(doc, (
        "Erst wenn der Pilot stabil funktioniert, sollten weitere Prozesse angebunden werden. Für Kara wären "
        "dies Rechnungsprüfung, Bestellrisiken, Tagesbriefing und spätere Automatisierung mit Supabase und Make."
    ))
    add_depth_section(doc, 8)


def chapter_9(doc):
    doc.add_heading("9 Evaluation und Präsentation der Ergebnisse", level=1)
    doc.add_heading("9.1 Bewertung des Demonstrators", level=2)
    paragraph(doc, (
        "Der Demonstrator erfüllt die Kernanforderung, weil er KI im Unternehmen nicht nur theoretisch beschreibt, "
        "sondern interaktiv zeigt. Die wichtigsten Elemente sind Aufgabenliste, Kontext, KI-Vorschlag, Quelle, "
        "Risiko und Freigabestatus."
    ))
    add_table(
        doc,
        "Tabelle 5: Abnahmekriterien des MVP",
        ["Kriterium", "Bewertung"],
        [
            ["KI-Anwendungsfälle sichtbar", "erfüllt durch fünf Aufgabenarten im Cockpit"],
            ["Menschliche Kontrolle", "erfüllt durch Freigabe- und Ablehnfunktion"],
            ["Datenschutzschonung", "erfüllt durch lokale Demo ohne echte Kundendaten"],
            ["Praxisnähe", "erfüllt durch Support-, Rechnungs- und Bestellfälle"],
            ["Präsentationsfähigkeit", "erfüllt durch stabilen lokalen Demo-Modus"],
        ],
    )

    doc.add_heading("9.2 Präsentationskonzept", level=2)
    paragraph(doc, (
        "Die PowerPoint-Präsentation ist auf 20 Minuten ausgelegt. Sie beginnt mit Problem und Aufgabenstellung, "
        "führt über Grundlagen und Herausforderungen zum Kara-Anwendungsfall und endet mit Demo, Leitfaden und Fazit."
    ))
    paragraph(doc, (
        "Für zwei Personen bietet sich eine Aufteilung von je zehn Minuten an. Person 1 übernimmt Problem, "
        "Grundlagen, Potenziale und Herausforderungen. Person 2 übernimmt Kara, Demo, Recht/Ethik, Leitfaden und Fazit."
    ))

    doc.add_heading("9.3 Techday und LinkedIn", level=2)
    paragraph(doc, (
        "Für den Techday beziehungsweise WI-Tag eignet sich ein kurzer Demo-Ablauf: Problem erklären, Cockpit öffnen, "
        "Fall auswählen, KI-Vorschlag erzeugen, Quelle und Risiko prüfen, Freigabe zeigen und Nutzen zusammenfassen. "
        "Der LinkedIn-Beitrag kommuniziert die Kernbotschaft öffentlich und verständlich."
    ))
    add_depth_section(doc, 9)


def chapter_10_discussion(doc):
    doc.add_heading("10 Diskussion", level=1)
    doc.add_heading("10.1 Einordnung der Projektergebnisse", level=2)
    paragraph(doc, (
        "Die Projektergebnisse zeigen, dass ein sinnvoller KI-Einstieg für kleine Unternehmen nicht zwingend "
        "mit einer komplexen technischen Plattform beginnen muss. Der entscheidende Beitrag des Projekts liegt "
        "darin, KI in einen konkreten Arbeitskontext zu übersetzen. Kara AI Operations macht sichtbar, wie "
        "Mitarbeitende mit KI-Vorschlägen arbeiten, ohne Entscheidungsverantwortung an ein System abzugeben."
    ))
    paragraph(doc, (
        "Damit unterscheidet sich der Ansatz von rein marketingorientierten KI-Demos. Die Oberfläche zeigt nicht "
        "nur ein Eingabefeld und eine Antwort, sondern auch Aufgabe, Quelle, Risiko und Freigabe. Dadurch wird "
        "ein wichtiger professioneller Anspruch sichtbar: KI muss im Unternehmen in kontrollierte Abläufe eingebettet werden."
    ))

    doc.add_heading("10.2 Beitrag für kleine Unternehmen", level=2)
    paragraph(doc, (
        "Für kleine Unternehmen besteht der praktische Beitrag vor allem in der Orientierung. Viele Betriebe wissen, "
        "dass KI relevant ist, können aber schwer einschätzen, wo sie beginnen sollen. Der Kara-Use-Case zeigt einen "
        "Einstieg über Routinetätigkeiten, die häufig auftreten und bei denen Vorschläge bereits einen deutlichen "
        "Zeitgewinn bringen können."
    ))
    paragraph(doc, (
        "Besonders wichtig ist die Begrenzung auf Assistenz. Ein kleines Unternehmen muss nicht sofort versuchen, "
        "komplette Prozesse vollautomatisch zu steuern. Ein erster Nutzen kann bereits entstehen, wenn die KI "
        "Kundenanfragen zusammenfasst, Antwortentwürfe formuliert, Rechnungen prüft oder Tagesbriefings vorbereitet."
    ))
    paragraph(doc, (
        "Diese Form der Einführung ist ressourcenschonend, weil sie vorhandene Arbeitsabläufe ergänzt. Sie verlangt "
        "keine sofortige Umstellung aller Systeme, sondern schafft einen Lernraum. Mitarbeitende können Erfahrungen "
        "sammeln, Regeln anpassen und Vertrauen in sinnvolle Anwendungsfälle entwickeln."
    ))

    doc.add_heading("10.3 Grenzen des Demonstrators", level=2)
    paragraph(doc, (
        "Der Demonstrator ist bewusst kein produktives KI-System. Die KI wird simuliert, die Daten werden lokal im "
        "Browser gespeichert und es gibt keine echten Rollenrechte. Diese Grenzen müssen transparent benannt werden, "
        "damit die Demo nicht mehr verspricht, als sie leisten kann."
    ))
    paragraph(doc, (
        "Gerade die Simulation ist jedoch fachlich begründbar. Für eine Hochschulpräsentation ist Stabilität wichtig. "
        "Eine echte KI-Schnittstelle könnte durch API-Keys, Kosten, Netzprobleme oder Datenschutzfragen zusätzliche "
        "Risiken erzeugen. Der MVP konzentriert sich deshalb auf den Prozessnachweis: Wie würde KI-Arbeit im Unternehmen aussehen?"
    ))
    paragraph(doc, (
        "Eine weitere Grenze ist die fehlende empirische Validierung. Das Projekt nutzt ein fiktives Unternehmen und "
        "keine Interviews mit realen kleinen Unternehmen. Dadurch kann die Arbeit typische Herausforderungen plausibel "
        "darstellen, aber keine repräsentativen Aussagen über alle KMU treffen."
    ))

    doc.add_heading("10.4 Bewertung der technischen Entscheidungen", level=2)
    paragraph(doc, (
        "Die technische Entscheidung für HTML, CSS und JavaScript ist passend, weil sie den Demonstrator leicht "
        "startbar und nachvollziehbar macht. Der Prototyp kann lokal ausgeführt werden und benötigt keine Installation "
        "komplexer Backend-Systeme."
    ))
    paragraph(doc, (
        "Die Speicherung im localStorage ist für eine Demo ausreichend, aber nicht für den produktiven Betrieb. "
        "Produktiv wären zentrale Datenhaltung, Authentifizierung, Rechtekonzept, Backups und Protokollierung notwendig. "
        "Daher bleibt Supabase als Zielarchitektur dokumentiert."
    ))
    paragraph(doc, (
        "Auch Make ist als spätere Ausbaustufe sinnvoll. Automatisierungen wie Rechnungserstellung oder E-Mail-Versand "
        "sollten erst dann angebunden werden, wenn der Freigabeprozess stabil ist. Sonst würde Automatisierung Fehler "
        "nur schneller weitertragen."
    ))

    doc.add_heading("10.5 Bewertung aus Datenschutz- und Ethikperspektive", level=2)
    paragraph(doc, (
        "Aus Datenschutzperspektive ist der MVP zurückhaltend gestaltet. Er nutzt keine echten Kundendaten und sendet "
        "keine Informationen an externe KI-Dienste. Für die Präsentation ist das ein Vorteil, weil Datenschutz nicht "
        "nur erwähnt, sondern praktisch berücksichtigt wird."
    ))
    paragraph(doc, (
        "Aus ethischer Sicht ist das Human-in-the-loop-Prinzip zentral. Die KI erhält keine alleinige Entscheidungsmacht. "
        "Dies ist besonders für kleine Unternehmen wichtig, weil dort Verantwortung oft direkt bei wenigen Personen liegt "
        "und Fehler unmittelbare Auswirkungen auf Kundschaft oder Finanzen haben können."
    ))
    paragraph(doc, (
        "Gleichzeitig darf menschliche Kontrolle nicht nur formal bestehen. In einer echten Umsetzung müssten Mitarbeitende "
        "genügend Zeit und Kompetenz haben, KI-Vorschläge wirklich zu prüfen. Sonst entsteht die Gefahr, dass Vorschläge "
        "aus Bequemlichkeit ungeprüft übernommen werden."
    ))

    doc.add_heading("10.6 Übertragbarkeit und weiterer Forschungsbedarf", level=2)
    paragraph(doc, (
        "Der Kara-Anwendungsfall ist auf andere kleine Unternehmen übertragbar, wenn diese ähnliche Routinetätigkeiten "
        "haben. Besonders geeignet sind Betriebe mit wiederkehrenden Kundenanfragen, administrativen Prüfprozessen oder "
        "internem Wissensbedarf."
    ))
    paragraph(doc, (
        "Weniger direkt übertragbar ist der Prototyp auf Unternehmen mit stark regulierten Prozessen, sensiblen Gesundheitsdaten "
        "oder sicherheitskritischen Entscheidungen. Dort müssten Risikoanalyse, Datenschutz und Qualitätssicherung deutlich "
        "umfangreicher ausfallen."
    ))
    paragraph(doc, (
        "Für eine spätere wissenschaftliche Vertiefung wären Interviews mit kleinen Unternehmen sinnvoll. Dadurch könnte "
        "geprüft werden, welche Aufgaben tatsächlich den größten Aufwand verursachen, welche Vorbehalte Mitarbeitende haben "
        "und welche Kennzahlen für den Nutzen eines KI-Pilots am besten geeignet sind."
    ))
    doc.add_heading("10.7 Limitationen der Arbeit", level=2)
    paragraph(doc, (
        "Die Arbeit basiert auf einem fiktiven Unternehmen und einem prototypischen Demonstrator. Dadurch kann sie "
        "einen plausiblen und gut erklärbaren Einstieg zeigen, ersetzt aber keine umfassende Marktstudie. Die "
        "getroffenen Annahmen zu Unternehmensgröße, Prozessen und Datenlage sind bewusst realistisch gewählt, bleiben "
        "aber modellhaft."
    ))
    paragraph(doc, (
        "Eine weitere Limitation betrifft die Quellenlage. Die Arbeit nutzt offizielle Informationen zum EU AI Act und "
        "zur DSGVO sowie die eigene Projektdokumentation. Für eine noch stärkere wissenschaftliche Ausarbeitung wären "
        "zusätzliche Fachliteratur, empirische Studien und Experteninterviews sinnvoll."
    ))
    paragraph(doc, (
        "Auch die technische Evaluation ist begrenzt. Es wurde geprüft, ob die Demo lokal funktioniert, ob Statuswechsel "
        "gespeichert werden und ob die Oberfläche mobil keinen horizontalen Überlauf erzeugt. Nicht geprüft wurden "
        "Lastverhalten, Sicherheit eines echten Backends oder Qualität echter KI-Antworten."
    ))
    paragraph(doc, (
        "Diese Limitationen mindern den Wert des Projekts nicht, sondern grenzen seinen Anspruch klar ein. Das Ziel ist "
        "ein überzeugender IDP-Demonstrator mit praxisnaher Orientierung, nicht die Auslieferung eines produktiven "
        "KI-Systems."
    ))


def chapter_11(doc):
    doc.add_heading("11 Fazit und Ausblick", level=1)
    paragraph(doc, (
        "Die Arbeit zeigt, dass KI für kleine Unternehmen realistisch nutzbar ist, wenn der Einstieg begrenzt, "
        "verständlich und kontrollierbar gestaltet wird. Der größte Nutzen liegt nicht in spektakulärer Vollautomatisierung, "
        "sondern in der Unterstützung wiederkehrender Aufgaben."
    ))
    paragraph(doc, (
        "Kara AI Operations demonstriert diesen Ansatz. Die KI erstellt Vorschläge, fasst Informationen zusammen, "
        "markiert Risiken und dokumentiert Freigaben. Dadurch wird sichtbar, wie kleine Unternehmen KI einsetzen "
        "können, ohne sofort eine komplexe technische Infrastruktur aufzubauen."
    ))
    paragraph(doc, (
        "Für eine spätere Erweiterung wären eine echte KI-Schnittstelle, Supabase-Anbindung, Make-Automatisierung, "
        "Rollenrechte, Logging und zusätzliche Tests sinnvoll. Der aktuelle MVP bleibt bewusst präsentationssicher "
        "und datenschutzschonend."
    ))
    doc.add_heading("11.1 Handlungsempfehlungen", level=2)
    paragraph(doc, (
        "Aus der Arbeit lassen sich konkrete Empfehlungen ableiten. Kleine Unternehmen sollten KI nicht als isoliertes "
        "Technologieprojekt starten, sondern als Prozessverbesserung. Der erste Schritt besteht darin, eine wiederkehrende "
        "Aufgabe zu identifizieren, die Mitarbeitende regelmäßig Zeit kostet und bei der ein Vorschlag bereits hilfreich ist."
    ))
    paragraph(doc, (
        "Zweitens sollte der Pilot bewusst begrenzt werden. Ein Unternehmen muss nicht sofort alle Kundendaten, "
        "Bestellungen und Dokumente anbinden. Für den Start kann eine kleine, geprüfte Wissensbasis ausreichen. Je "
        "kleiner der Kontext ist, desto leichter lassen sich Datenschutz und Qualität kontrollieren."
    ))
    paragraph(doc, (
        "Drittens müssen Freigaben definiert werden. KI sollte in kleinen Unternehmen besonders dort eingesetzt werden, "
        "wo sie vorbereitet, sortiert oder formuliert. Sobald Kundenwirkung, finanzielle Folgen oder rechtliche Risiken "
        "entstehen, sollte ein Mensch den Vorschlag aktiv bestätigen."
    ))
    paragraph(doc, (
        "Viertens sollte Erfolg messbar gemacht werden. Geeignete Kennzahlen sind Bearbeitungszeit, Anzahl korrigierter "
        "Vorschläge, Fehlerquote, Mitarbeitendenfeedback und wahrgenommene Entlastung. Ohne solche Kriterien bleibt KI "
        "leicht ein unscharfes Innovationsversprechen."
    ))
    paragraph(doc, (
        "Fünftens sollte jedes Unternehmen transparent kommunizieren, wofür KI genutzt wird. Mitarbeitende müssen wissen, "
        "welche Aufgaben KI unterstützt, welche Daten verwendet werden und wann ein Vorschlag abgelehnt werden soll. "
        "Akzeptanz entsteht nicht durch Zwang, sondern durch nachvollziehbaren Nutzen."
    ))
    doc.add_heading("11.2 Ausblick auf eine produktive Weiterentwicklung", level=2)
    paragraph(doc, (
        "Eine produktive Weiterentwicklung von Kara AI Operations würde zunächst eine echte Datenhaltung benötigen. "
        "Supabase könnte Kunden, Bestellungen, Rechnungen, Aufgaben und KI-Läufe zentral speichern. Darauf aufbauend "
        "ließen sich Rollenrechte und Protokollierung umsetzen."
    ))
    paragraph(doc, (
        "Im zweiten Schritt könnte ein echter KI-Dienst angebunden werden. Wichtig wäre dabei ein sicherer Umgang mit "
        "API-Keys und personenbezogenen Daten. Prompts sollten so gestaltet werden, dass sie nur notwendige Informationen "
        "enthalten und keine sensiblen Daten unnötig übertragen."
    ))
    paragraph(doc, (
        "Im dritten Schritt könnten Automatisierungen mit Make ergänzt werden. Beispielsweise könnte nach einer geprüften "
        "Bestellung ein Rechnungsentwurf erzeugt oder eine E-Mail vorbereitet werden. Auch hier sollte die finale Freigabe "
        "weiterhin dokumentiert bleiben."
    ))
    paragraph(doc, (
        "Langfristig könnte Kara aus den freigegebenen und abgelehnten Vorschlägen lernen. Nicht im Sinne eines unkontrollierten "
        "Modelltrainings, sondern durch bessere Regeln, bessere Textbausteine und klarere Eskalationskriterien. So würde "
        "das System schrittweise näher an die reale Arbeit des Unternehmens rücken."
    ))
    add_depth_section(doc, 10)


def add_references(doc):
    doc.add_heading("Literatur- und Quellenverzeichnis", level=1)
    refs = [
        "Europäische Kommission. (2024). KI-Verordnung tritt in Kraft. https://commission.europa.eu/news-and-media/news/ai-act-enters-force-2024-08-01_de",
        "European Commission. (o. J.). AI Act. Shaping Europe’s digital future. https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai",
        "European Commission. (o. J.). Principles of the GDPR. https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/principles-gdpr_en",
        "Your Europe. (o. J.). Data protection under GDPR. https://europa.eu/youreurope/business/dealing-with-customers/data-protection/data-protection-gdpr/index_en.htm",
        "Projekt-Repository IDP-KI-im-Unternehmen-. (2026). Kara AI Operations, Website-Prototyp, Dokumentation und technische Unterlagen.",
    ]
    for ref in refs:
        doc.add_paragraph(ref, style="Literatur")


def add_appendix(doc):
    doc.add_heading("Anhang", level=1)
    doc.add_heading("Anhang A: Relevante Projektdateien", level=2)
    for path in [
        "website/index.html",
        "website/script.js",
        "website/styles.css",
        "docs/how-to-leitfaden-ki-kmu.md",
        "docs/linkedin-post.md",
        "docs/techday-one-pager.md",
        "outputs/IDP_KI_kleine_Unternehmen_Präsentation.pptx",
    ]:
        bullet(doc, path)

    doc.add_heading("Anhang B: Demo-Ablauf", level=2)
    numbered(doc, "Website lokal starten und Kara AI Operations öffnen.")
    numbered(doc, "Tagesbriefing und offene Aufgaben zeigen.")
    numbered(doc, "Support- oder Rechnungsfall auswählen.")
    numbered(doc, "KI-Vorschlag erzeugen.")
    numbered(doc, "Quelle, Risiko und Freigabestatus erklären.")
    numbered(doc, "Vorschlag freigeben oder ablehnen.")


def build():
    OUT.parent.mkdir(parents=True, exist_ok=True)
    doc = Document()
    setup_sections(doc)
    setup_styles(doc)
    set_update_fields(doc)

    add_cover(doc)
    add_front_matter(doc)

    content_section = doc.add_section(WD_SECTION.NEW_PAGE)
    setup_sections(doc)
    add_footer(content_section)

    chapter_1(doc)
    chapter_2(doc)
    chapter_3(doc)
    chapter_4(doc)
    chapter_5(doc)
    chapter_6(doc)
    chapter_7(doc)
    chapter_8(doc)
    chapter_9(doc)
    chapter_10_discussion(doc)
    chapter_11(doc)
    add_references(doc)
    add_appendix(doc)

    doc.save(OUT)


if __name__ == "__main__":
    build()
