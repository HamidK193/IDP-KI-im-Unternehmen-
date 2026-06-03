# Kara KI-Cockpit Dokumentation

## Ziel des Projekts

Der IDP-Demonstrator zeigt, wie ein kleines Unternehmen KI im Arbeitsalltag
nutzen kann. Kara ist ein fiktives E-Commerce-KMU mit ungefähr 20 bis 80
Mitarbeitenden. Die Demo soll nicht nur einen Shop zeigen, sondern den
praktischen Nutzen eines internen KI-Assistenten sichtbar machen.

Kernidee: KI unterstützt Mitarbeitende bei wiederkehrenden Aufgaben, erstellt
Vorschläge und weist auf Risiken hin. Die finale Entscheidung bleibt beim
Menschen.

## Zielgruppe und Unternehmenskontext

Kara verkauft kuratierte Luxury-Streetwear. Typische Arbeitsbereiche sind:

- Customer Care für Kundenanfragen und Retouren
- Backoffice für Rechnungen, Kundendaten und Bestellprüfung
- Operations für Versand, Bestand und Adressprüfung
- Management für Tagesüberblick und einfache Auswertungen

Das Unternehmen ist bewusst klein gedacht. Dadurch ist der KI-Nutzen gut
erklärbar: Wenige Mitarbeitende müssen viele operative Aufgaben zuverlässig
bearbeiten.

## Funktionsumfang des aktuellen MVP

Das KI-Cockpit ist der primäre Einstieg der Website.

- **Tagesbriefing**: fasst offene Aufgaben, Risiken und nächste Schritte
  zusammen.
- **KPI-Bereich**: zeigt Umsatz, offene KI-Aufgaben, Risiko-Hinweise und
  geschätzten Zeitgewinn.
- **Aufgabenliste**: enthält Fälle aus Support, Rechnung, Bestellung, Analyse
  und interner Wissensfrage.
- **Fallansicht**: zeigt Kontext, Quelle und Ziel der ausgewählten Aufgabe.
- **KI-Assistentenpanel**: zeigt Prompt, Antwortvorschlag, Quelle, Risiko und
  Status.
- **Freigabeprinzip**: Vorschläge können erzeugt, freigegeben oder abgelehnt
  werden.
- **Shop-Demo**: bleibt unterhalb des Cockpits als operative Datenquelle
  erhalten.

## UI-Entscheidung vom 2026-06-04

Die Oberfläche wurde stärker als produktnahe SaaS-/Dashboard-App aufgebaut.
Referenzrichtung sind aktuelle UI-Sammlungen wie Mobbin, Refero und Dribbble:
klare Navigationsleiste, großer Cockpit-Einstieg, kompakte KPI-Karten,
dunkle Aufgaben-Rail, zentrale Fallansicht und ein rechts geführtes
Assistentenpanel. Die Umsetzung bleibt bewusst einfach im bestehenden
statischen Prototyp und nutzt die vorhandenen HTML-, CSS- und JavaScript-Muster.

Annahme: Da keine konkreten Screenshots vorlagen, wurden die genannten
Referenzseiten als Stil- und Strukturrahmen genutzt, nicht als 1:1-Vorlage.

## KI-Nutzung im Demonstrator

Die KI ist im MVP simuliert. Es werden keine externen KI-Anfragen gesendet und
es wird kein API-Key benötigt. Dadurch ist die Demo stabil, datenschutzarm und
gut präsentierbar.

Claude/Codex wird als möglicher interner KI-Assistent erklärt. Die Demo zeigt
realistische Aufgaben, ohne produktive KI-Entscheidungen vorzutäuschen.

Beispielhafte KI-Fälle:

- Antwortentwurf für eine Retourenanfrage
- Prüfung eines Rechnungsentwurfs
- Warnung vor einer riskanten Bestellung
- Tagesanalyse mit Handlungsempfehlungen
- Antwort auf eine interne Prozessfrage

## Prozessfluss

```text
Shop- und Backoffice-Daten
-> KI-Cockpit
-> Aufgabe auswählen
-> KI-Vorschlag erzeugen
-> Quelle und Risiko prüfen
-> Mensch gibt frei oder lehnt ab
```

Dieser Ablauf ist bewusst Human-in-the-loop. Die KI beschleunigt die Arbeit,
aber sie ersetzt keine fachliche Verantwortung.

## Lokale Datenhaltung

Der aktuelle Prototyp nutzt `localStorage`.

Neue KI-Collections:

- `kara_ai_tasks`
- `kara_support_cases`
- `kara_ai_runs`
- `kara_knowledge_base`

Bestehende Shop-Collections bleiben erhalten:

- `kara_cart`
- `kara_customers`
- `kara_orders`
- `kara_invoices`
- `kara_emails`

Statuswerte für KI-Vorschläge:

- `draft`
- `reviewed`
- `approved`
- `rejected`

## Wichtige Dateien

- `website/index.html`: Struktur des KI-Cockpits und bestehender Shop
- `website/script.js`: Demo-Daten, KI-Simulation, Statuslogik und Shop-Logik
- `website/styles.css`: responsives Design für Cockpit und Shop
- `docs/use-case.md`: fachlicher Use-Case
- `docs/architecture.md`: Prozessfluss und spätere Zielarchitektur
- `docs/präsentation_demo_20min.md`: Ablauf für die Vorstellung

## Bewertung des aktuellen Stands

Der aktuelle Stand erfüllt die Kernaufgabe deutlich besser als der frühere reine
Shop-Fokus. Die Seite zeigt jetzt konkret, wie KI im Unternehmen genutzt werden
kann:

- Der Nutzen ist sofort sichtbar.
- Die Unternehmensgröße ist klar eingegrenzt.
- Die KI bleibt kontrolliert und nachvollziehbar.
- Die Demo funktioniert ohne externe Dienste.
- Der vorhandene Shop wird sinnvoll als Datenquelle weiterverwendet.

Verbesserungspotenzial:

- Später könnte eine echte KI-API hinter einem Demo-Modus ergänzt werden.
- Die lokalen Demo-Daten könnten seedbar und zurücksetzbar dokumentiert werden.
- Für eine produktionsnahe Version fehlen Rollenrechte, Datenschutzkonzept und
  serverseitiger API-Key-Schutz.
- Supabase und Make können später wieder als technische Integrationsstufe
  angebunden werden.

## Präsentationsablauf

1. Kurz erklären: Kara ist ein kleines E-Commerce-KMU.
2. Problem zeigen: Viele manuelle Aufgaben in Support und Backoffice.
3. KI-Cockpit öffnen und Tagesbriefing zeigen.
4. Eine Aufgabe auswählen, zum Beispiel Rechnungsprüfung.
5. KI-Vorschlag erzeugen.
6. Quelle und Risiko erklären.
7. Vorschlag freigeben oder ablehnen.
8. Shop als Datenquelle zeigen.
9. Grenzen erklären: Datenschutz, menschliche Freigabe, keine automatische
   Entscheidung.

## Abnahmekriterien

- Die Seite startet lokal ohne Build-System.
- Das KI-Cockpit ist die erste sichtbare Hauptansicht.
- Es gibt mindestens fünf Aufgabenarten.
- Ein KI-Vorschlag kann erzeugt und freigegeben werden.
- Der Status wird lokal gespeichert.
- Die mobile Ansicht hat keinen horizontalen Überlauf.
- Deutsche Texte verwenden echte Umlaute.
