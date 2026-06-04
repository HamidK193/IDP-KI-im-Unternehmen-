# Demo-Datenmodell

Der aktuelle MVP nutzt keine echte Datenbankverbindung. Die Daten werden als
realistische Demo-Objekte in `website/script.js` gepflegt.

## Gedachte Unternehmensdatenbanken

- **Finance DB**
  - GuV
  - Cashflow
  - Buchungen
  - Zahlungsziele

- **ERP**
  - Einkauf
  - Bestand
  - Lieferanten
  - Beschaffungskosten

- **CRM**
  - Umsatzpipeline
  - Kunden
  - Aufträge
  - Abschlusswahrscheinlichkeiten

- **HR**
  - Personalkosten
  - Kapazitäten
  - Auslastung

- **Projekt DB**
  - Budgets
  - Laufzeiten
  - Kostenstellen
  - Projektfortschritt

- **Data Warehouse**
  - historische Kennzahlen
  - aggregierte Monatswerte
  - Vergleichsperioden

## Demo-Objekte in der Website

- `useCases`: drei KI-Fallbeispiele
- `sources`: gedachte Datenbanken mit Qualitätswert
- `scenarios`: stabile, kritische und wachstumsorientierte Controlling-Szenarien
- `metrics`: Kennzahlen je Szenario
- `chart`: Trenddaten für Umsatz, Kosten und Liquidität
- `findings`: KI-Analyseergebnisse
- `recommendation`: Handlungsempfehlung
- `quality`: Datenqualität
- `risk`: Risiko der Analyse

## Kennzahlen

- Umsatz
- Kostenquote
- Deckungsbeitrag
- Liquidität
- Budgetabweichung
- Forecast
- Risikoindex

## Spätere echte Tabellen oder Views

Für eine produktionsnähere Version könnten folgende Views bereitgestellt werden:

- `vw_financial_kpis`
- `vw_budget_variance`
- `vw_cost_centers`
- `vw_liquidity_forecast`
- `vw_sales_pipeline`
- `vw_project_budget_status`
- `vw_data_quality_checks`

Preise oder Shop-Positionen sind für den aktuellen MVP nicht mehr fachlich
relevant.
