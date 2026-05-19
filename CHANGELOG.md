# CHANGELOG.md

Alle wichtigen Aenderungen am Projekt werden hier kurz protokolliert.

## 2026-05-19

- Kaeuferfluss vereinfacht:
  - `website/review.html` und `website/review.js` entfernt
  - Checkout erzeugt jetzt direkt eine gesendete Demo-E-Mail in
    `kara_emails`
  - Rechnungen erhalten im Prototyp direkt den Status `sent`
  - Erfolgsdialog verweist nicht mehr auf eine Rechnungsfreigabe
- Hero-Bild erneut ersetzt und hoeher gesetzt, damit Gesichter und Kleidung
  sichtbar bleiben.
- Repository von `origin/main` aktualisiert:
  - letzter Stand nach Pull: `1b866fc`
  - geaendert wurden `website/README.md`, `website/index.html`,
    `website/review.html`, `website/script.js`, `website/review.js` und
    `website/styles.css`
- Website-Prototyp wurde fachlich und visuell von `Papierpfad Atelier` zu
  `Kara`, einem fiktiven Luxury-Streetwear-Shop, umgebaut.
- Produktkatalog wurde stark erweitert:
  - Kategorien wie Outerwear, Knitwear, Tailoring, Essentials, Denim, Shirts
    und Accessories
  - Kategorie-Filter in der Shop-Oberflaeche
  - externe Produktbilder mit Fallback-Logik
- Checkout und Warenkorb wurden ueberarbeitet:
  - Storage-Prefix von `papierpfad` auf `kara`
  - Versandkosten von `4,90 EUR` auf `6,90 EUR`
  - neue Bestellnummern im Format `KA-2026-...`
  - Rechnungsnummern im Format `RE-2026-...`
- Rechnungspruefung wurde an den neuen Kara-Kontext angepasst:
  - Statuslabels fuer `needs_review`, `approved` und `rejected`
  - robustere Verknuepfung von Rechnung, Bestellung und Kunde
- Dokumentationsstruktur nach dem Vorbild von `HamidK193/Wifi2` angelegt:
  - `AGENTS.md`
  - `memory.md`
  - `CHANGELOG.md`
  - `docs/handover_next_chat.md`
  - `docs/praesentation_demo_20min.md`

## 2026-05-18

- Erstes Repository-Setup gelesen und eingeordnet.
- Dokumentation fuer Architektur, Datenmodell, Make-Szenario,
  Rechnungsfelder, Repository-Uebersicht und Use-Case war bereits vorhanden.
- Urspruenglicher Prototyp war ein kleiner Shop fuer `Papierpfad Atelier` mit
  Warenkorb, Checkout, lokaler Speicherung und Rechnungspruefung.
