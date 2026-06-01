# memory.md

## Projektgedächtnis

### Projekt

- Repository: `IDP-KI-im-Unternehmen-`
- Thema: IDP-Demonstrator für KI-Nutzung in einem kleinen Unternehmen
- Aktueller Unternehmenskontext: `Kara`, fiktives E-Commerce-KMU für
  Luxury-Streetwear
- Ziel: zeigen, wie KI Mitarbeitende bei Support, Bestellungen, Rechnungen,
  Wissensfragen und Auswertungen unterstützt

### Aktueller Stand

- Primärer Einstieg ist jetzt das `Kara AI Operations` Cockpit in
  `website/index.html`.
- Der bestehende Shop bleibt darunter als Datenquelle und Demo-Prozess erhalten.
- Die KI ist im MVP simuliert und benötigt keinen API-Key.
- Claude/Codex wird als möglicher interner Assistent erklärt.
- Die Demo zeigt Human-in-the-loop: KI-Vorschläge können freigegeben oder
  abgelehnt werden.
- Lokale Speicherung erfolgt im Browser-`localStorage`.
- Storage-Prefix ist `kara`.

### Relevante lokale Collections

- `kara_ai_tasks`
- `kara_support_cases`
- `kara_ai_runs`
- `kara_knowledge_base`
- `kara_cart`
- `kara_customers`
- `kara_orders`
- `kara_invoices`
- `kara_emails`

### Wichtige fachliche Entscheidungen

- Fokus liegt nicht mehr auf einem reinen Shop-/Rechnungsprozess, sondern auf
  dem Nachweis "KI im Unternehmen".
- Zielunternehmen ist ein kleines KMU mit ca. 20 bis 80 Mitarbeitenden.
- KI erstellt Vorschläge, Zusammenfassungen und Prüfhinweise.
- Menschliche Freigabe bleibt für Kundenantworten, Rechnungen und operative
  Entscheidungen sichtbar.
- Keine echten Kundendaten und keine externen KI-Requests im MVP.
- Supabase und Make bleiben als spätere Ausbaustufe dokumentiert.
- Die IDP-Abgabe wird über `PLAN.md` gesteuert; der Plan ist aktuell
  abgearbeitet.
- Word-Dokumentation und PowerPoint-Präsentation liegen unter `outputs/`.
- LinkedIn-Beitrag, Techday-One-Pager und How-To-Leitfaden liegen unter `docs/`.

### Relevante Dateien

- `website/index.html` - KI-Cockpit, Shop, Checkout
- `website/script.js` - KI-Demo-Daten, KI-Simulation, Shop-Logik
- `website/styles.css` - Cockpit- und Shop-Design
- `docs/use-case.md` - fachlicher KI-Use-Case
- `docs/architecture.md` - Prozessfluss und Zielarchitektur
- `docs/repository-overview.md` - Repo-Überblick
- `docs/how-to-leitfaden-ki-kmu.md` - praktischer KI-Einstiegsleitfaden
- `docs/linkedin-post.md` - LinkedIn-Beitrag
- `docs/techday-one-pager.md` - Techday-/WI-Tag-Material
- `outputs/IDP_KI_kleine_Unternehmen_Dokumentation.docx` - Word-Dokumentation
- `outputs/IDP_KI_kleine_Unternehmen_Präsentation.pptx` - PowerPoint-Präsentation
- `PLAN.md` - abgearbeiteter Schritt-für-Schritt-Plan
- `supabase/schema.sql` - späteres Backend-Datenmodell
- `make/payload-example.json` - späterer Automationspayload

### Offene Punkte

- Word-Dokumentation in Word öffnen und Inhaltsverzeichnis bei Bedarf
  aktualisieren.
- PowerPoint im Präsentationsmodus durchgehen und Sprechanteile final festlegen.
- Browser- und Mobilansicht vor der Abgabe kurz prüfen.
- Optional echte KI-Schnittstelle vorbereiten, aber Demo-Modus behalten.
- Optional Supabase/Make wieder an den Prozess anbinden.
- Tests für KI-Statuswechsel und lokale Speicherung ergänzen.
