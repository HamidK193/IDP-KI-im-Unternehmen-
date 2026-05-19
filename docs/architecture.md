# Zielarchitektur und Prozessfluss

Die Website nimmt Bestellungen entgegen, Supabase speichert die operativen Daten, Make orchestriert den Folgeprozess, Word/PDF liefert die standardisierte Rechnung, danach wird die Bestell- und Rechnungs-E-Mail direkt versendet.

```mermaid
flowchart LR
    A["Website / Checkout"] --> B["Supabase: customers, orders, order_items"]
    B --> C["Supabase Webhook"]
    C --> D["Make-Szenario"]
    D --> E["Word- oder PDF-Vorlage"]
    D --> F["E-Mail Versand"]
    D --> G["Supabase: invoices"]
    F --> H["Versand an Kunden"]
```

## Statuskette

### Bestellung

- `created`
- `paid`
- `invoice_pending`
- `invoice_draft_created`
- `completed`

### Rechnung

- `draft`
- `sent`
