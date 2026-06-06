const useCases = [
  {
    id: "controlling",
    label: "01 Controlling",
    title: "KI-gestütztes Controlling-Cockpit",
    summary:
      "Bündelt Finanz-, Vertriebs- und Projektdaten zu einem gemeinsamen Steuerungsbild mit Kennzahlen, Trends und begründeten Empfehlungen.",
    why:
      "Das Cockpit macht Unternehmensdaten schneller auswertbar und zeigt, welche Entscheidungen fachlich geprüft werden müssen.",
    outputs: ["Kennzahlen", "Trendvergleich", "Ursachenanalyse", "Prüfbare Empfehlung"],
  },
  {
    id: "budget",
    label: "02 Kostensteuerung",
    title: "Budget- und Kostenabweichungsanalyse",
    summary:
      "Vergleicht Plan- und Ist-Werte, erkennt auffällige Kostenstellen und priorisiert Abweichungen nach finanzieller Wirkung.",
    why:
      "Kleine Unternehmen erhalten schneller Klarheit darüber, wo Budgets aus dem Rahmen laufen und welche Ursachen geprüft werden sollten.",
    outputs: ["Plan-Ist-Vergleich", "Kostenstellen-Ranking", "Abweichungsgründe", "Prüfschritte"],
  },
  {
    id: "forecast",
    label: "03 Frühwarnung",
    title: "Forecasting und Frühwarnsystem",
    summary:
      "Nutzt historische Daten, um Umsatz, Kosten und Liquidität zu prognostizieren und kritische Entwicklungen früh sichtbar zu machen.",
    why:
      "Das Frühwarnsystem unterstützt vorausschauende Steuerung, bevor Engpässe oder Kostenrisiken akut werden.",
    outputs: ["Szenarien", "Forecast", "Frühwarnsignale", "Steuerungsempfehlung"],
  },
];

const sources = [
  { name: "Finance DB", detail: "GuV, Cashflow, Buchungen", quality: "96%" },
  { name: "ERP", detail: "Einkauf, Bestand, Lieferanten", quality: "91%" },
  { name: "CRM", detail: "Umsatzpipeline, Kunden, Aufträge", quality: "89%" },
  { name: "HR", detail: "Personalkosten, Kapazitäten", quality: "94%" },
  { name: "Projekt DB", detail: "Budgets, Laufzeiten, Auslastung", quality: "87%" },
  { name: "Data Warehouse", detail: "Historische Kennzahlen", quality: "98%" },
];

// Drei Trendlinien des Diagramms (indexierte Entwicklung, Startmonat = Basis).
const chartSeries = [
  { key: "revenue", label: "Umsatz", color: "#5b8cff" },
  { key: "cost", label: "Kosten", color: "#f3b552" },
  { key: "liquidity", label: "Liquidität", color: "#2dd4bf" },
];
const chartMonths = ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun"];

// Aussagekräftige Controlling-Kennzahlen mit kurzer Erklärung (hint), warum die
// jeweilige Kennzahl steuerungsrelevant ist.
const scenarios = {
  stabil: {
    label: "Stabile Entwicklung",
    metrics: [
      {
        label: "Umsatzwachstum (YoY)",
        value: "+8,4 %",
        trend: "über Zielkorridor",
        tone: "good",
        hint: "Wachstum gegenüber Vorjahr. Zeigt, ob das Geschäft skaliert. Gesund ab etwa +5 %.",
      },
      {
        label: "EBIT-Marge",
        value: "12,6 %",
        trend: "+1,3 pp",
        tone: "good",
        hint: "Operativer Gewinn je Umsatz-Euro vor Zinsen und Steuern. Misst die Ertragskraft des Kerngeschäfts.",
      },
      {
        label: "Rohertragsmarge",
        value: "58,2 %",
        trend: "+0,9 pp",
        tone: "good",
        hint: "Umsatzanteil nach Wareneinsatz. Basis für alle weiteren Margen und für die Preisgestaltung.",
      },
      {
        label: "Free Cashflow",
        value: "612 Tsd. €",
        trend: "+7,8 %",
        tone: "good",
        hint: "Frei verfügbarer Mittelzufluss nach Investitionen. Schwer manipulierbar, zeigt die echte Finanzkraft.",
      },
      {
        label: "Cash Conversion Cycle",
        value: "38 Tage",
        trend: "-3 Tage",
        tone: "good",
        hint: "Tage, die Kapital gebunden ist (Lager + Forderungen − Verbindlichkeiten). Kürzer ist besser.",
      },
      {
        label: "Liquiditätsgrad 2. Grades",
        value: "128 %",
        trend: "stabil",
        tone: "good",
        hint: "Quick Ratio: kurzfristige Zahlungsfähigkeit ohne Vorräte. Gesund ab etwa 100 %.",
      },
    ],
    chart: {
      revenue: [62, 68, 71, 77, 82, 86],
      cost: [52, 50, 49, 48, 47, 46],
      liquidity: [44, 48, 52, 57, 61, 65],
    },
    chartDescription:
      "Der Umsatz wächst über sechs Monate stetig, die Kostenlinie sinkt leicht und die Liquidität steigt parallel mit – ein gesundes Steuerungsbild.",
    findings: [
      "Umsatz wächst über sechs Perioden stabil, die EBIT-Marge zieht leicht an.",
      "Die Rohertragsmarge bleibt durch bessere Einkaufskonditionen hoch.",
      "Free Cashflow und Liquiditätsgrad decken laufende Verpflichtungen sicher ab.",
    ],
    recommendation:
      "Kurs halten: Einkaufskonditionen weiter sichern und monatlich prüfen, ob EBIT-Marge und Free Cashflow stabil bleiben.",
    quality: "hoch, 95 % der Datensätze plausibel",
    risk: "niedrig",
  },
  kritisch: {
    label: "Kritische Abweichung",
    metrics: [
      {
        label: "Umsatzwachstum (YoY)",
        value: "-6,8 %",
        trend: "unter Plan",
        tone: "bad",
        hint: "Wachstum gegenüber Vorjahr. Ein negativer Wert bedeutet schrumpfenden Umsatz.",
      },
      {
        label: "EBIT-Marge",
        value: "4,1 %",
        trend: "-5,2 pp",
        tone: "bad",
        hint: "Operativer Gewinn je Umsatz-Euro. Halbiert sich hier und signalisiert sinkende Ertragskraft.",
      },
      {
        label: "Rohertragsmarge",
        value: "49,5 %",
        trend: "-4,1 pp",
        tone: "bad",
        hint: "Umsatzanteil nach Wareneinsatz. Sinkt durch höhere Beschaffungskosten.",
      },
      {
        label: "Free Cashflow",
        value: "-180 Tsd. €",
        trend: "negativ",
        tone: "bad",
        hint: "Frei verfügbarer Mittelzufluss. Negativ bedeutet: Das Unternehmen verbrennt Liquidität.",
      },
      {
        label: "Cash Conversion Cycle",
        value: "67 Tage",
        trend: "+12 Tage",
        tone: "bad",
        hint: "Kapital ist länger in Forderungen und Lager gebunden – Liquidität fließt langsamer zurück.",
      },
      {
        label: "Liquiditätsgrad 2. Grades",
        value: "82 %",
        trend: "unter 100 %",
        tone: "bad",
        hint: "Quick Ratio unter 100 % heißt: Kurzfristige Verbindlichkeiten sind nicht voll gedeckt.",
      },
    ],
    chart: {
      revenue: [72, 69, 65, 58, 54, 49],
      cost: [48, 51, 57, 63, 69, 74],
      liquidity: [66, 59, 51, 43, 35, 29],
    },
    chartDescription:
      "Umsatz- und Kostenlinie laufen auseinander: Die Kosten steigen, der Umsatz fällt und die Liquidität bricht ein – ein klares Warnmuster.",
    findings: [
      "Sinkender Umsatz trifft auf steigende Kosten – die EBIT-Marge halbiert sich.",
      "Der Cash Conversion Cycle steigt: Kapital ist länger in Forderungen und Lager gebunden.",
      "Der Free Cashflow wird negativ, der Liquiditätsgrad fällt unter die 100-%-Marke.",
    ],
    recommendation:
      "Kostenstellen 410 und 620 sofort prüfen, Zahlungsziele verkürzen und den Liquiditätsforecast in der nächsten Steuerungsrunde priorisieren.",
    quality: "mittel, 8 % verspätete Buchungen",
    risk: "hoch",
  },
  wachstum: {
    label: "Wachstum mit Engpass",
    metrics: [
      {
        label: "Umsatzwachstum (YoY)",
        value: "+14,2 %",
        trend: "stark",
        tone: "good",
        hint: "Wachstum gegenüber Vorjahr. Sehr starkes Wachstum bindet zugleich Kapital.",
      },
      {
        label: "EBIT-Marge",
        value: "9,8 %",
        trend: "-0,4 pp",
        tone: "warn",
        hint: "Operativer Gewinn je Umsatz-Euro. Noch solide, gerät durch Wachstumskosten aber unter Druck.",
      },
      {
        label: "Rohertragsmarge",
        value: "55,4 %",
        trend: "-1,2 pp",
        tone: "warn",
        hint: "Umsatzanteil nach Wareneinsatz. Sinkt leicht, weil Beschaffungskosten schneller steigen.",
      },
      {
        label: "Free Cashflow",
        value: "95 Tsd. €",
        trend: "knapp",
        tone: "warn",
        hint: "Frei verfügbarer Mittelzufluss. Positiv, aber dünn, weil Wachstum Working Capital bindet.",
      },
      {
        label: "Cash Conversion Cycle",
        value: "58 Tage",
        trend: "+9 Tage",
        tone: "warn",
        hint: "Kapitalbindung steigt mit dem Wachstum – ein Frühwarnsignal für einen Liquiditätsengpass.",
      },
      {
        label: "Liquiditätsgrad 2. Grades",
        value: "104 %",
        trend: "knapp über Ziel",
        tone: "warn",
        hint: "Quick Ratio nur knapp über 100 % – wenig Puffer bei weiter steigendem Wachstum.",
      },
    ],
    chart: {
      revenue: [58, 64, 70, 79, 86, 92],
      cost: [46, 48, 51, 56, 61, 64],
      liquidity: [63, 61, 58, 54, 50, 47],
    },
    chartDescription:
      "Der Umsatz wächst kräftig, doch Kosten und Kapitalbindung ziehen mit – die Liquiditätslinie sinkt trotz Wachstum.",
    findings: [
      "Starkes Umsatzwachstum bindet Working Capital und drückt den Free Cashflow.",
      "Beschaffungskosten steigen schneller als geplant und belasten die Rohertragsmarge.",
      "Der steigende Cash Conversion Cycle zeigt ein Engpassrisiko bei weiterem Wachstum.",
    ],
    recommendation:
      "Wachstum halten, aber Zahlungsziele und Einkaufskonditionen neu verhandeln, bevor zusätzliche Kampagnenbudgets freigegeben werden.",
    quality: "hoch, Forecast-Daten vollständig",
    risk: "mittel",
  },
};

let selectedCase = "controlling";
let selectedScenario = "stabil";

const caseTabs = document.querySelector("#caseTabs");
const caseDetail = document.querySelector("#caseDetail");
const sourceList = document.querySelector("#sourceList");
const metricGrid = document.querySelector("#metricGrid");
const trendChart = document.querySelector("#trendChart");
const trendLabel = document.querySelector("#trendLabel");
const trendLegend = document.querySelector("#trendLegend");
const trendDescription = document.querySelector("#trendDescription");
const findingList = document.querySelector("#findingList");
const recommendationText = document.querySelector("#recommendationText");
const qualityText = document.querySelector("#qualityText");
const riskText = document.querySelector("#riskText");
const analysisState = document.querySelector("#analysisState");
const runAnalysisButton = document.querySelector("#runAnalysisButton");

function renderCaseTabs() {
  caseTabs.innerHTML = useCases
    .map(
      (item) => `
        <button class="case-tab ${item.id === selectedCase ? "active" : ""}" type="button" data-case="${item.id}" aria-pressed="${item.id === selectedCase}">
          <span>${item.label}</span>
          <strong>${item.title}</strong>
          <small>${item.summary}</small>
        </button>`,
    )
    .join("");
}

function renderCaseDetail() {
  const item = useCases.find((entry) => entry.id === selectedCase);
  caseDetail.innerHTML = `
    <p class="eyebrow">${item.label}</p>
    <h3>${item.title}</h3>
    <p>${item.summary}</p>
    <div class="reason-box">
      <span>Mehrwert</span>
      <p>${item.why}</p>
    </div>
    <ul class="output-list">
      ${item.outputs.map((output) => `<li>${output}</li>`).join("")}
    </ul>`;
}

function renderSources() {
  sourceList.innerHTML = sources
    .map(
      (source) => `
        <article class="source-item">
          <div>
            <strong>${source.name}</strong>
            <span>${source.detail}</span>
          </div>
          <em>${source.quality}</em>
        </article>`,
    )
    .join("");
}

function renderMetrics() {
  const scenario = scenarios[selectedScenario];
  metricGrid.innerHTML = scenario.metrics
    .map(
      (metric) => `
        <article class="metric-card" data-tone="${metric.tone}">
          <span>${metric.label}</span>
          <strong>${metric.value}</strong>
          <em>${metric.trend}</em>
          <small class="metric-hint">${metric.hint}</small>
        </article>`,
    )
    .join("");
}

function renderLegend() {
  trendLegend.innerHTML = chartSeries
    .map(
      (series) =>
        `<span class="legend-item"><i style="background:${series.color}"></i>${series.label}</span>`,
    )
    .join("");
}

function renderChart() {
  const scenario = scenarios[selectedScenario];
  trendLabel.textContent = scenario.label;

  const left = 46;
  const right = 540;
  const top = 26;
  const bottom = 250;
  const plotW = right - left;
  const plotH = bottom - top;
  const xAt = (index, count) => left + (index * plotW) / (count - 1);
  const yAt = (value) => bottom - (value / 100) * plotH;

  const yTicks = [0, 25, 50, 75, 100];
  const grid = yTicks
    .map((tick) => {
      const y = yAt(tick);
      return `<line x1="${left}" y1="${y}" x2="${right}" y2="${y}" />
        <text class="axis-label" x="${left - 8}" y="${y + 5}" text-anchor="end">${tick}</text>`;
    })
    .join("");

  const xAxis = chartMonths
    .map(
      (month, index) =>
        `<text class="axis-label" x="${xAt(index, chartMonths.length)}" y="${bottom + 26}" text-anchor="middle">${month}</text>`,
    )
    .join("");

  const lines = chartSeries
    .map((series) => {
      const values = scenario.chart[series.key];
      const points = values
        .map((value, index) => `${xAt(index, values.length)},${yAt(value)}`)
        .join(" ");
      const dots = values
        .map(
          (value, index) =>
            `<circle cx="${xAt(index, values.length)}" cy="${yAt(value)}" r="4.5" fill="#fff" stroke="${series.color}" stroke-width="3" />`,
        )
        .join("");
      return `<polyline points="${points}" fill="none" stroke="${series.color}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />${dots}`;
    })
    .join("");

  trendChart.innerHTML = `
    <text class="axis-title" x="${left - 8}" y="14">Index (Startmonat = Basis)</text>
    <g class="chart-grid" stroke="rgba(255, 255, 255, 0.1)" stroke-width="1">${grid}</g>
    <g class="chart-axis">${xAxis}</g>
    ${lines}`;

  renderLegend();
  trendDescription.textContent = scenario.chartDescription;
}

function renderFindings() {
  const scenario = scenarios[selectedScenario];
  findingList.innerHTML = scenario.findings
    .map((finding) => `<article><span></span><p>${finding}</p></article>`)
    .join("");
  recommendationText.textContent = scenario.recommendation;
  qualityText.textContent = scenario.quality;
  riskText.textContent = scenario.risk;
  riskText.dataset.risk = scenario.risk;
}

function renderCockpit() {
  renderMetrics();
  renderChart();
  renderFindings();
}

function setScenario(scenarioId) {
  selectedScenario = scenarioId;
  document.querySelectorAll("[data-scenario]").forEach((button) => {
    const isActive = button.dataset.scenario === selectedScenario;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  analysisState.textContent = "bereit";
  renderCockpit();
}

document.addEventListener("click", (event) => {
  const caseButton = event.target.closest("[data-case]");
  if (caseButton) {
    selectedCase = caseButton.dataset.case;
    renderCaseTabs();
    renderCaseDetail();
  }

  const scenarioButton = event.target.closest("[data-scenario]");
  if (scenarioButton) {
    setScenario(scenarioButton.dataset.scenario);
  }
});

runAnalysisButton.addEventListener("click", () => {
  analysisState.textContent = "analysiert";
  analysisState.classList.add("is-running");
  runAnalysisButton.disabled = true;

  window.setTimeout(() => {
    analysisState.textContent = "prüfbereit";
    analysisState.classList.remove("is-running");
    runAnalysisButton.disabled = false;
  }, 700);
});

// Mobile-Navigation: Menü ein- und ausklappen, damit alle Links auch auf dem
// Handy erreichbar sind.
const navToggle = document.querySelector("#navToggle");
const appHeader = document.querySelector(".app-header");
if (navToggle && appHeader) {
  navToggle.addEventListener("click", () => {
    const isOpen = appHeader.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
  appHeader.querySelectorAll(".main-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      appHeader.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

renderCaseTabs();
renderCaseDetail();
renderSources();
renderCockpit();
