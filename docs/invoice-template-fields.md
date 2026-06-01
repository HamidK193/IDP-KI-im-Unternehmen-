# Rechnungsvorlage: benötigte Felder

## Kopfbereich

- `{{invoice_number}}`
- `{{invoice_date}}`
- `{{order_number}}`

## Kundendaten

- `{{customer_name}}`
- `{{billing_street}}`
- `{{billing_postal_code}}`
- `{{billing_city}}`
- `{{billing_country}}`
- `{{customer_email}}`

## Summen

- `{{subtotal_net}}`
- `{{shipping_net}}`
- `{{vat_amount}}`
- `{{total_groß}}`

## Positionen

Die Word-Vorlage enthält zwei Beispielzeilen. Make kann diese Zeilen entweder
direkt befüllen oder für weitere Produkte duplizieren.

- `{{item_name_1}}`
- `{{item_desc_1}}`
- `{{qty_1}}`
- `{{unit_net_1}}`
- `{{line_net_1}}`
- `{{item_name_2}}`
- `{{item_desc_2}}`
- `{{qty_2}}`
- `{{unit_net_2}}`
- `{{line_net_2}}`
- `{{items_note}}`

## Dateien

- Word: `docs/templates/kara-rechnungsvorlage.docx`
- PDF: `docs/templates/kara-rechnungsvorlage.pdf`

Die Vorlage enthält Layout, Tabellenstruktur und Pflichttexte; Make füllt nur
definierte Felder.
