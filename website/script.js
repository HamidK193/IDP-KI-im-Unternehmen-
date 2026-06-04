const useCases = [
  {
    id: "controlling",
    label: "01 Hauptfall",
    title: "KI-gestütztes Controlling-Cockpit",
    summary:
      "Analysiert alle relevanten Unternehmensdatenbanken, berechnet Kennzahlen, erkennt Trends und schlägt begründete Maßnahmen vor.",
    why:
      "Dieses Fallbeispiel ist am stärksten, weil es Datenintegration, betriebswirtschaftliche Steuerung, KI-Erklärung und menschliche Freigabe in einem Ablauf verbindet.",
    outputs: ["Kennzahlen", "Trenddiagramme", "Ursachenanalyse", "Handlungsempfehlung"],
  },
  {
    id: "budget",
    label: "02 Fallbeispiel",
    title: "Budget- und Kostenabweichungsanalyse",
    summary:
      "Vergleicht Plan- und Ist-Werte, markiert auffällige Kostenstellen und priorisiert Abweichungen nach finanzieller Wirkung.",
    why:
      "Der Use Case zeigt, wie KI operative Controlling-Arbeit beschleunigt, ohne die fachliche Bewertung zu automatisieren.",
    outputs: ["Plan-Ist-Vergleich", "Kostenstellen-Ranking", "Abweichungsgründe", "Prüfschritte"],
  },
  {
    id: "forecast",
    label: "03 Fallbeispiel",
    title: "Forecasting und Frühwarnsystem",
    summary:
      "Nutzt historische Daten, um Umsatz, Kosten oder Liquidität zu prognostizieren und kritische Szenarien früh sichtbar zu machen.",
    why:
      "Der Use Case macht deutlich, dass KI nicht nur rückblickend analysiert, sondern auch vorausschauende Steuerung unterstützt.",
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

const scenarios = {
  stabil: {
    label: "Stabile Entwicklung",
    metrics: [
      { label: "Umsatz", value: "4,82 Mio. €", trend: "+8,4%", tone: "good" },
      { label: "Kostenquote", value: "41,8%", trend: "-1,2 pp", tone: "good" },
      { label: "Deckungsbeitrag", value: "1,34 Mio. €", trend: "+5,1%", tone: "good" },
      { label: "Liquidität", value: "780 Tsd. €", trend: "+12 Tage", tone: "neutral" },
      { label: "Budgetabweichung", value: "3,6%", trend: "im Rahmen", tone: "neutral" },
      { label: "Risikoindex", value: "42", trend: "niedrig", tone: "good" },
    ],
    chart: {
      revenue: [62, 68, 71, 77, 82, 86],
      cost: [52, 50, 49, 48, 47, 46],
      liquidity: [44, 48, 52, 57, 61, 65],
    },
    findings: [
      "Umsatz wächst über drei Perioden stabil.",
      "Kostenquote sinkt leicht durch bessere Einkaufskonditionen.",
      "Liquidität bleibt ausreichend für laufende Verpflichtungen.",
    ],
    recommendation:
      "Budgetplanung beibehalten, aber Einkaufspreise weiter beobachten und monatlich prüfen, ob der positive Deckungsbeitrag stabil bleibt.",
    quality: "hoch, 95% der Datensätze plausibel",
    risk: "niedrig",
  },
  kritisch: {
    label: "Kritische Abweichung",
    metrics: [
      { label: "Umsatz", value: "4,31 Mio. €", trend: "-6,8%", tone: "bad" },
      { label: "Kostenquote", value: "49,6%", trend: "+7,4 pp", tone: "bad" },
      { label: "Deckungsbeitrag", value: "920 Tsd. €", trend: "-18,9%", tone: "bad" },
      { label: "Liquidität", value: "410 Tsd. €", trend: "-21 Tage", tone: "bad" },
      { label: "Budgetabweichung", value: "12,4%", trend: "kritisch", tone: "bad" },
      { label: "Risikoindex", value: "78", trend: "hoch", tone: "bad" },
    ],
    chart: {
      revenue: [72, 69, 65, 58, 54, 49],
      cost: [48, 51, 57, 63, 69, 74],
      liquidity: [66, 59, 51, 43, 35, 29],
    },
    findings: [
      "Kosten steigen stärker als Umsatz und drücken den Deckungsbeitrag.",
      "Zwei Kostenstellen überschreiten das Monatsbudget deutlich.",
      "Liquiditätsreserve fällt im Forecast unter den Sicherheitswert.",
    ],
    recommendation:
      "Kostenstellen 410 und 620 sofort prüfen, variable Ausgaben einfrieren und Liquiditätsforecast in der nächsten Steuerungsrunde priorisieren.",
    quality: "mittel, 8% verspätete Buchungen",
    risk: "hoch",
  },
  wachstum: {
    label: "Wachstum mit Engpass",
    metrics: [
      { label: "Umsatz", value: "5,26 Mio. €", trend: "+14,2%", tone: "good" },
      { label: "Kostenquote", value: "45,1%", trend: "+2,1 pp", tone: "warn" },
      { label: "Deckungsbeitrag", value: "1,46 Mio. €", trend: "+9,8%", tone: "good" },
      { label: "Liquidität", value: "560 Tsd. €", trend: "-8 Tage", tone: "warn" },
      { label: "Budgetabweichung", value: "7,2%", trend: "prüfen", tone: "warn" },
      { label: "Risikoindex", value: "61", trend: "mittel", tone: "warn" },
    ],
    chart: {
      revenue: [58, 64, 70, 79, 86, 92],
      cost: [46, 48, 51, 56, 61, 64],
      liquidity: [63, 61, 58, 54, 50, 47],
    },
    findings: [
      "Umsatzwachstum ist stark, aber Working Capital bindet Liquidität.",
      "Beschaffungskosten steigen schneller als geplant.",
      "Forecast zeigt Engpassrisiko bei weiterem Wachstum.",
    ],
    recommendation:
      "Wachstum beibehalten, Zahlungsziele prüfen und Einkaufskonditionen neu verhandeln, bevor zusätzliche Kampagnenbudget freigegeben werden.",
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
        <button class="case-tab ${item.id === selectedCase ? "active" : ""}" type="button" data-case="${item.id}">
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
      <span>Warum wichtig?</span>
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
        </article>`,
    )
    .join("");
}

function buildPolyline(values, color) {
  const width = 560;
  const height = 180;
  const points = values
    .map((value, index) => {
      const x = 36 + (index * width) / (values.length - 1);
      const y = 214 - (value / 100) * height;
      return `${x},${y}`;
    })
    .join(" ");
  return `<polyline points="${points}" fill="none" stroke="${color}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />`;
}

function renderChart() {
  const scenario = scenarios[selectedScenario];
  trendLabel.textContent = scenario.label;
  trendChart.innerHTML = `
    <defs>
      <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stop-color="rgba(53, 92, 255, 0.18)" />
        <stop offset="100%" stop-color="rgba(53, 92, 255, 0)" />
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="640" height="260" rx="18" fill="#f7f8fb" />
    <g stroke="rgba(15, 23, 42, 0.08)" stroke-width="1">
      <line x1="32" y1="52" x2="612" y2="52" />
      <line x1="32" y1="112" x2="612" y2="112" />
      <line x1="32" y1="172" x2="612" y2="172" />
      <line x1="32" y1="232" x2="612" y2="232" />
    </g>
    ${buildPolyline(scenario.chart.revenue, "#355cff")}
    ${buildPolyline(scenario.chart.cost, "#f59e0b")}
    ${buildPolyline(scenario.chart.liquidity, "#10a66a")}
    <g class="chart-legend">
      <text x="38" y="28">Umsatz</text>
      <text x="130" y="28">Kosten</text>
      <text x="220" y="28">Liquidität</text>
    </g>`;
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
    button.classList.toggle("active", button.dataset.scenario === selectedScenario);
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
    analysisState.textContent = "Empfehlung bereit";
    analysisState.classList.remove("is-running");
    runAnalysisButton.disabled = false;
  }, 700);
});

renderCaseTabs();
renderCaseDetail();
renderSources();
renderCockpit();
