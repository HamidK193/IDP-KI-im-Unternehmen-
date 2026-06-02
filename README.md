# IDP-KI-im-Unternehmen-

IDP-Demonstrator für den Einsatz von KI in einem kleinen Unternehmen.

Der aktuelle Prototyp zeigt das fiktive E-Commerce-KMU **Kara**. Im Mittelpunkt
steht nicht mehr nur der Shop, sondern ein interaktives **KI-Operations-Cockpit**:
Mitarbeitende sehen offene Support-, Bestell-, Rechnungs- und Analyseaufgaben,
lassen sich realistische KI-Vorschläge erzeugen und geben diese bewusst frei
oder lehnen sie ab.

Die KI ist im MVP simuliert. Dadurch läuft die Demo stabil ohne API-Key,
Kosten oder echte Kundendaten. Claude/Codex wird als möglicher interner
Assistent erklärt, der Vorschläge, Zusammenfassungen und Prüfhinweise liefert,
aber keine fachlichen Entscheidungen automatisch trifft.

## Website öffnen

Die veröffentlichte GitHub-Pages-Version ist hier erreichbar:

https://hamidk193.github.io/IDP-KI-im-Unternehmen-/

Nach einem neuen Commit kann es kurz dauern, bis GitHub Pages die aktuelle
Version bereitstellt.

## Wichtige Dateien

- `website/` - statischer Prototyp mit KI-Cockpit und Shop-Datenquelle
- `website/index.html` - Einstieg in Kara AI Operations
- `website/script.js` - lokale Demo-Daten, KI-Simulation, Shop- und Checkout-Logik
- `website/styles.css` - responsive Cockpit- und Shop-Gestaltung
- `supabase/schema.sql` - geplantes Datenmodell für spätere Backend-Anbindung
- `make/payload-example.json` - Beispielpayload für die spätere Automatisierung
- `docs/` - fachliche und technische Dokumentation
- `docs/ki-cockpit-dokumentation.md` - zentrale Dokumentation des neuen KI-Cockpits
- `docs/abgabeplan-idp-ki-kleine-unternehmen.md` - Abgabeplan für Word-Dokument,
  Präsentation, LinkedIn und Techday/WI-Tag
- `docs/how-to-leitfaden-ki-kmu.md` - praxisnaher KI-Einstiegsleitfaden
- `docs/linkedin-post.md` - formulierter LinkedIn-Beitrag
- `docs/techday-one-pager.md` - Kurzmaterial für Techday/WI-Tag
- `outputs/IDP_KI_kleine_Unternehmen_Dokumentation.docx` - Word-Dokumentation
- `outputs/IDP_KI_kleine_Unternehmen_Präsentation.pptx` - PowerPoint-Präsentation
- `PLAN.md` - abgearbeiteter Schritt-für-Schritt-Plan zur IDP-Abgabe
- `AGENTS.md` - Arbeitsregeln und Projektplan
- `memory.md` - Projektgedächtnis für spätere Chats
- `CHANGELOG.md` - Änderungsprotokoll

## Demo-Ablauf

1. KI-Cockpit öffnen.
2. Tagesbriefing und offene Aufgaben zeigen.
3. Eine Aufgabe aus Support, Rechnung, Bestellung, Analyse oder Wissen wählen.
4. Einen simulierten Claude/Codex-Vorschlag erzeugen.
5. Quelle, Risiko und Antwort prüfen.
6. Vorschlag freigeben oder ablehnen.
7. Shop darunter als operative Datenquelle zeigen.

## Nächste Schritte

1. Word-Dokumentation in Word öffnen und bei Bedarf ein automatisches Inhaltsverzeichnis aktualisieren.
2. PowerPoint einmal im Präsentationsmodus durchgehen und Sprechanteile festlegen.
3. Demo im Browser vor der Abgabe kurz zurücksetzen und den Kernflow prüfen.
4. Optional echte KI-Schnittstelle vorbereiten, aber Demo-Modus behalten.
5. Supabase- und Make-Prozess als spätere Ausbaustufe wieder anbinden.
