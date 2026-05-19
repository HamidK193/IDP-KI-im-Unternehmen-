# Praesentation und Live-Demo fuer den IDP-Demonstrator

Diese Datei beschreibt einen moeglichen 20-Minuten-Ablauf fuer die Vorstellung
des Projekts. Ziel ist, den kompletten Prozess vom Shop bis zur
Rechnungsfreigabe nachvollziehbar zu erklaeren.

## 1. Einstieg: Was ist das Ziel? ca. 2 Minuten

- Thema: Automatisierter Bestell- und Rechnungsprozess mit KI-/Automation-
  Bezug im Unternehmen.
- Beispielunternehmen: `Kara`, ein fiktiver Luxury-Streetwear-Shop.
- Ein Kunde kauft im Shop.
- Die Bestellung soll sauber gespeichert werden.
- Danach soll automatisch ein Rechnungsentwurf entstehen.
- Eine Person prueft die Rechnung und gibt sie frei.

Wichtiger Satz:

> Der Demonstrator zeigt nicht nur eine Website, sondern den geplanten
> End-to-End-Prozess von Bestellung bis Rechnungsfreigabe.

## 2. Website zeigen ca. 4 Minuten

Dateien:

```text
website/index.html
website/script.js
website/styles.css
```

Live zeigen:

- Startseite mit Kara-Branding
- Produktkategorien und Filter
- Produkt in den Warenkorb legen
- Menge im Warenkorb aendern
- Checkout ausfuellen
- Bestellung abschliessen

Erklaeren:

- Produktdaten sind aktuell noch im JavaScript hinterlegt.
- Der Warenkorb wird im Browser gespeichert.
- Beim Checkout entstehen Demo-Datensaetze fuer Kunde, Bestellung und
  Rechnung.

## 3. Bestellmail zeigen ca. 4 Minuten

Dateien:

```text
website/index.html
website/script.js
```

Live zeigen:

- Checkout abschliessen.
- Erfolgsdialog mit versendeter Bestell- und Rechnungs-E-Mail zeigen.
- Im Browser-Speicher die Demo-Collections `kara_orders`, `kara_invoices`
  und `kara_emails` erklaeren.

Erklaeren:

- Der Kaeufer gibt keine Rechnung frei.
- In der echten Zielarchitektur erzeugt Make die Rechnung und versendet die
  E-Mail.
- Der lokale Prototyp simuliert den Versand mit einem `sent`-Eintrag.

## 4. Datenmodell erklaeren ca. 4 Minuten

Dateien:

```text
supabase/schema.sql
docs/data-model.md
```

Wichtige Tabellen:

- `customers`
- `addresses`
- `products`
- `orders`
- `order_items`
- `invoices`

Erklaeren:

- Kunden und Adressen werden getrennt gespeichert.
- Bestellungen enthalten Summen und Status.
- Bestellpositionen speichern den Preis-Snapshot.
- Rechnungen sind eigene Datensaetze mit eigenem Status.
- RLS ist aktiviert, Policies muessen noch konkret definiert werden.

## 5. Make-Zielprozess erklaeren ca. 3 Minuten

Dateien:

```text
docs/make-scenario.md
make/payload-example.json
docs/invoice-template-fields.md
```

Erklaeren:

- Ausloeser ist eine bezahlte Bestellung.
- Make laedt Bestellung, Kunde, Adresse und Positionen.
- Make prueft Betraege und Pflichtdaten.
- Make befuellt eine Word- oder PDF-Vorlage.
- Make erzeugt einen Rechnungsdatensatz.
- Make schreibt eine Kontrollzeile fuer Excel oder eine Pruefliste.
- Danach ist die Rechnung versendet.

## 6. Architektur zusammenfassen ca. 2 Minuten

Datei:

```text
docs/architecture.md
```

Zielprozess:

```text
Website / Checkout
-> Supabase
-> Supabase Webhook
-> Make-Szenario
-> Rechnungsvorlage
-> E-Mail-Versand
-> Kunde
```

## 7. Naechste Schritte ca. 1 Minute

- lokale Speicherung durch Supabase ersetzen
- Produkte aus Supabase laden
- Checkout in Supabase schreiben
- Make-Szenario an bezahlte Bestellungen anbinden
- echte Rechnungsvorlage anbinden
- Review-Seite mit echten Rechnungsdaten verbinden

## Kurzer Praesentationstext fuer das Fazit

Der aktuelle Stand ist ein funktionierender Frontend-MVP. Er zeigt den
Kaufprozess und den direkten Versand einer Bestell- und Rechnungs-E-Mail. Die
Dokumentation beschreibt bereits die Zielarchitektur mit Supabase, Make und
Rechnungsvorlage. Der naechste technische Schritt ist die echte
Backend-Anbindung.
