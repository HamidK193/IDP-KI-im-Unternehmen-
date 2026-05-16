# Zielarchitektur und Prozessfluss

Die Website nimmt Bestellungen entgegen, Supabase speichert die operativen Daten, Make orchestriert den Folgeprozess, Word/PDF liefert die standardisierte Rechnung, Excel dient der menschlichen Kontrolle.

```mermaid
flowchart LR
    A["Website / Checkout"] --> B["Supabase: customers, orders, order_items"]
    B --> C["Supabase Webhook"]
    C --> D["Make-Szenario"]
    D --> E["Word- oder PDF-Vorlage"]
    D --> F["Excel-Pruefliste"]
    D --> G["Supabase: invoices"]
    F --> H["Menschliche Freigabe"]
    H --> I["Versand an Kunden"]
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
- `needs_review`
- `approved`
- `sent`
- `rejected`
