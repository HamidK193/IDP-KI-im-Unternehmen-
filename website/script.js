/* ==========================================================================
   Kara·Cockpit – Interaktion (Vanilla JS, kein Build-Schritt)
   Demo-Daten des fiktiven Unternehmens Kara: 6 Datenquellen, 6 Kennzahlen,
   3 Szenarien. Alle Werte sind realistisch gewählte Beispieldaten.
   ========================================================================== */
(function () {
  "use strict";

  document.documentElement.classList.remove("no-js");

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  /* ------------------------------ Demo-Daten ------------------------------ */

  var useCases = [
    {
      id: "controlling",
      label: "01 · Hauptfall",
      title: "KI-Controlling-Cockpit",
      summary:
        "Analysiert alle relevanten Unternehmensdatenbanken, berechnet Kennzahlen, erkennt Trends und schlägt begründete Maßnahmen vor.",
      why:
        "Verbindet Datenintegration, betriebswirtschaftliche Steuerung, KI-Erklärung und menschliche Freigabe in einem Ablauf – deshalb ist es der Hauptfall.",
      outputs: ["Kennzahlen", "Trenddiagramme", "Ursachenanalyse", "Handlungsempfehlung"],
    },
    {
      id: "budget",
      label: "02 · Fallbeispiel",
      title: "Budget- und Kostenabweichungsanalyse",
      summary:
        "Vergleicht Plan- und Ist-Werte, markiert auffällige Kostenstellen und priorisiert Abweichungen nach finanzieller Wirkung.",
      why:
        "Zeigt, wie KI operative Controlling-Arbeit beschleunigt, ohne die fachliche Bewertung zu automatisieren.",
      outputs: ["Plan-Ist-Vergleich", "Kostenstellen-Ranking", "Abweichungsgründe", "Prüfschritte"],
    },
    {
      id: "forecast",
      label: "03 · Fallbeispiel",
      title: "Forecasting und Frühwarnsystem",
      summary:
        "Nutzt historische Daten, um Umsatz, Kosten oder Liquidität zu prognostizieren und kritische Szenarien früh sichtbar zu machen.",
      why:
        "Macht deutlich, dass KI nicht nur rückblickend analysiert, sondern auch vorausschauende Steuerung unterstützt.",
      outputs: ["Szenarien", "Forecast", "Frühwarnsignale", "Steuerungsempfehlung"],
    },
  ];

  var sources = [
    { name: "Finance DB", detail: "GuV, Cashflow, Buchungen", quality: 96 },
    { name: "ERP", detail: "Einkauf, Bestand, Lieferanten", quality: 91 },
    { name: "CRM", detail: "Umsatzpipeline, Kunden, Aufträge", quality: 89 },
    { name: "HR", detail: "Personalkosten, Kapazitäten", quality: 94 },
    { name: "Projekt DB", detail: "Budgets, Laufzeiten, Auslastung", quality: 87 },
    { name: "Data Warehouse", detail: "Historische Kennzahlen", quality: 98 },
  ];

  /* Kennzahlen: value numerisch für animierte Wertwechsel,
     decimals + unit ergeben die exakte deutsche Anzeige. */
  var scenarios = {
    stabil: {
      label: "Stabile Entwicklung",
      metrics: [
        { label: "Umsatz", value: 4.82, decimals: 2, unit: " Mio. €", trend: "+8,4 %", dir: "up", tone: "good" },
        { label: "Kostenquote", value: 41.8, decimals: 1, unit: " %", trend: "−1,2 pp", dir: "down", tone: "good" },
        { label: "Deckungsbeitrag", value: 1.34, decimals: 2, unit: " Mio. €", trend: "+5,1 %", dir: "up", tone: "good" },
        { label: "Liquidität", value: 780, decimals: 0, unit: " Tsd. €", trend: "+12 Tage", dir: "up", tone: "neutral" },
        { label: "Budgetabweichung", value: 3.6, decimals: 1, unit: " %", trend: "im Rahmen", dir: "flat", tone: "neutral" },
        { label: "Risikoindex", value: 42, decimals: 0, unit: "", trend: "niedrig", dir: "flat", tone: "good" },
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
      quality: "hoch, 95 % der Datensätze plausibel",
      risk: "niedrig",
    },
    kritisch: {
      label: "Kritische Abweichung",
      metrics: [
        { label: "Umsatz", value: 4.31, decimals: 2, unit: " Mio. €", trend: "−6,8 %", dir: "down", tone: "bad" },
        { label: "Kostenquote", value: 49.6, decimals: 1, unit: " %", trend: "+7,4 pp", dir: "up", tone: "bad" },
        { label: "Deckungsbeitrag", value: 920, decimals: 0, unit: " Tsd. €", trend: "−18,9 %", dir: "down", tone: "bad" },
        { label: "Liquidität", value: 410, decimals: 0, unit: " Tsd. €", trend: "−21 Tage", dir: "down", tone: "bad" },
        { label: "Budgetabweichung", value: 12.4, decimals: 1, unit: " %", trend: "kritisch", dir: "up", tone: "bad" },
        { label: "Risikoindex", value: 78, decimals: 0, unit: "", trend: "hoch", dir: "up", tone: "bad" },
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
      quality: "mittel, 8 % verspätete Buchungen",
      risk: "hoch",
    },
    wachstum: {
      label: "Wachstum mit Engpass",
      metrics: [
        { label: "Umsatz", value: 5.26, decimals: 2, unit: " Mio. €", trend: "+14,2 %", dir: "up", tone: "good" },
        { label: "Kostenquote", value: 45.1, decimals: 1, unit: " %", trend: "+2,1 pp", dir: "up", tone: "warn" },
        { label: "Deckungsbeitrag", value: 1.46, decimals: 2, unit: " Mio. €", trend: "+9,8 %", dir: "up", tone: "good" },
        { label: "Liquidität", value: 560, decimals: 0, unit: " Tsd. €", trend: "−8 Tage", dir: "down", tone: "warn" },
        { label: "Budgetabweichung", value: 7.2, decimals: 1, unit: " %", trend: "prüfen", dir: "up", tone: "warn" },
        { label: "Risikoindex", value: 61, decimals: 0, unit: "", trend: "mittel", dir: "flat", tone: "warn" },
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
        "Wachstum beibehalten, Zahlungsziele prüfen und Einkaufskonditionen neu verhandeln, bevor zusätzliches Kampagnenbudget freigegeben wird.",
      quality: "hoch, Forecast-Daten vollständig",
      risk: "mittel",
    },
  };

  var flowSteps = [
    {
      title: "Datenquellen anbinden",
      actor: "KI",
      text: "Claude verbindet sich über MCP-Konnektoren mit Finance DB, ERP, CRM, HR, Projekt DB und Data Warehouse – und erschließt die nötigen Felder selbst.",
    },
    {
      title: "Daten beschaffen",
      actor: "KI",
      text: "Die relevanten Datensätze werden zusammengeführt und auf Plausibilität geprüft; die Datenqualität jeder Quelle bleibt sichtbar.",
    },
    {
      title: "KI-Analyse",
      actor: "KI",
      text: "Kennzahlen wie Umsatz, Kostenquote und Liquidität werden berechnet, Trends und Abweichungen automatisch erkannt.",
    },
    {
      title: "Begründung",
      actor: "KI",
      text: "Die KI formuliert Findings, die erklären, was warum auffällig ist – keine Blackbox, sondern nachvollziehbare Aussagen.",
    },
    {
      title: "Empfehlung",
      actor: "KI",
      text: "Aus den Findings entstehen priorisierte Maßnahmenvorschläge, jeweils mit Quelle, Datenqualität und Risiko.",
    },
    {
      title: "Menschliche Prüfung",
      actor: "Mensch",
      text: "Ein Mensch prüft jede Empfehlung und gibt sie frei oder verwirft sie. Automatische Entscheidungen trifft das Cockpit bewusst nicht.",
      human: true,
    },
  ];

  /* --------------------------- Hilfsfunktionen ---------------------------- */

  function formatNumber(value, decimals) {
    return value.toLocaleString("de-DE", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  }

  function trendIcon(dir) {
    if (dir === "up") {
      return '<svg viewBox="0 0 12 12" aria-hidden="true" focusable="false"><path d="M2 9.5 6 4l4 5.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    }
    if (dir === "down") {
      return '<svg viewBox="0 0 12 12" aria-hidden="true" focusable="false"><path d="M2 3.5 6 9l4-5.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    }
    return '<svg viewBox="0 0 12 12" aria-hidden="true" focusable="false"><path d="M2 6h8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
  }

  function escapeHtml(text) {
    return text.replace(/[&<>"]/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch];
    });
  }

  /* ------------------------------- Theme ---------------------------------- */

  var themeToggle = document.getElementById("themeToggle");

  function currentTheme() {
    var explicit = document.documentElement.dataset.theme;
    if (explicit) return explicit;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  themeToggle.addEventListener("click", function () {
    var next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("kara-theme", next);
    } catch (e) { /* privater Modus o. Ä. – Umschalten klappt trotzdem */ }
  });

  /* ---------------------------- Mobile-Menü ------------------------------- */

  var burger = document.getElementById("navBurger");
  var nav = document.getElementById("mainNav");

  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
  }

  burger.addEventListener("click", function () {
    setMenu(!nav.classList.contains("is-open"));
  });

  nav.addEventListener("click", function (event) {
    if (event.target.closest("a")) setMenu(false);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      setMenu(false);
      burger.focus();
    }
  });

  /* ------------------------- Scroll-Spy Navigation ------------------------ */

  var navLinks = Array.prototype.slice.call(nav.querySelectorAll("a[href^='#']"));
  var sectionsById = {};
  navLinks.forEach(function (link) {
    var section = document.querySelector(link.getAttribute("href"));
    if (section) sectionsById[section.id] = link;
  });

  var spy = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (link) {
          var active = link === sectionsById[entry.target.id];
          link.classList.toggle("active", active);
          if (active) link.setAttribute("aria-current", "true");
          else link.removeAttribute("aria-current");
        });
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  Object.keys(sectionsById).forEach(function (id) {
    spy.observe(document.getElementById(id));
  });

  /* ---------------------------- Fallbeispiele ----------------------------- */

  var caseGrid = document.getElementById("caseGrid");

  caseGrid.innerHTML = useCases
    .map(function (item, index) {
      return (
        '<article class="case-card reveal" data-case="' + item.id + '" style="--i:' + index + '">' +
        '<p class="case-label">' + escapeHtml(item.label) + "</p>" +
        "<h3>" + escapeHtml(item.title) + "</h3>" +
        '<p class="case-summary">' + escapeHtml(item.summary) + "</p>" +
        '<div class="case-more" id="case-more-' + item.id + '"><div><div class="case-more-inner">' +
        '<p class="case-why"><strong>Controlling-Bezug:</strong> ' + escapeHtml(item.why) + "</p>" +
        '<ul class="output-tags">' +
        item.outputs.map(function (output) { return "<li>" + escapeHtml(output) + "</li>"; }).join("") +
        "</ul>" +
        "</div></div></div>" +
        '<button class="case-toggle" type="button" aria-expanded="false" aria-controls="case-more-' + item.id + '">Details ' +
        '<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="m3 6 5 5 5-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
        "</button>" +
        "</article>"
      );
    })
    .join("");

  caseGrid.addEventListener("click", function (event) {
    var card = event.target.closest(".case-card");
    if (!card) return;
    var toggle = card.querySelector(".case-toggle");
    var expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    card.classList.toggle("is-open", !expanded);
  });

  /* ------------------------------- Cockpit -------------------------------- */

  var metricGrid = document.getElementById("metricGrid");
  var sourceStrip = document.getElementById("sourceStrip");
  var findingList = document.getElementById("findingList");
  var recommendationText = document.getElementById("recommendationText");
  var qualityText = document.getElementById("qualityText");
  var riskPill = document.getElementById("riskPill");
  var cockpitState = document.getElementById("cockpitState");
  var cockpitBody = document.getElementById("cockpitBody");
  var hitlFeedback = document.getElementById("hitlFeedback");
  var chartTextAlt = document.getElementById("chartTextAlt");
  var chartSvg = document.getElementById("trendChart");

  var selectedScenario = "stabil";

  /* Datenquellen (einmalig, szenario-unabhängig) */
  sourceStrip.innerHTML = sources
    .map(function (source) {
      return (
        '<article class="source-item">' +
        '<span class="source-name">' + escapeHtml(source.name) + "</span>" +
        '<span class="source-detail">' + escapeHtml(source.detail) + "</span>" +
        '<span class="source-quality">' +
        '<span class="quality-bar" role="img" aria-label="Datenqualität ' + source.quality + ' Prozent">' +
        '<span class="quality-fill" style="width:0%" data-quality="' + source.quality + '"></span>' +
        "</span>" +
        source.quality + "&nbsp;%" +
        "</span>" +
        "</article>"
      );
    })
    .join("");

  /* Qualitätsbalken animiert füllen, sobald sichtbar */
  var fillObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll(".quality-fill").forEach(function (fill) {
          fill.style.width = fill.dataset.quality + "%";
        });
        fillObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.3 }
  );
  fillObserver.observe(sourceStrip);

  /* KPI-Karten: einmal aufbauen, danach nur Werte animieren */
  function buildMetricCards(scenario) {
    metricGrid.innerHTML = scenario.metrics
      .map(function (metric) {
        return (
          '<article class="metric-card" data-tone="' + metric.tone + '">' +
          '<span class="metric-label">' + escapeHtml(metric.label) + "</span>" +
          '<strong class="metric-value">' + formatNumber(metric.value, metric.decimals) + escapeHtml(metric.unit) + "</strong>" +
          '<span class="metric-trend">' + trendIcon(metric.dir) + escapeHtml(metric.trend) + "</span>" +
          "</article>"
        );
      })
      .join("");
  }

  var metricAnimations = [];

  function animateMetrics(fromScenario, toScenario) {
    metricAnimations.forEach(function (id) { cancelAnimationFrame(id); });
    metricAnimations = [];

    var cards = metricGrid.querySelectorAll(".metric-card");
    toScenario.metrics.forEach(function (metric, index) {
      var card = cards[index];
      if (!card) return;
      card.dataset.tone = metric.tone;
      card.querySelector(".metric-trend").innerHTML = trendIcon(metric.dir) + escapeHtml(metric.trend);

      var valueEl = card.querySelector(".metric-value");
      var from = fromScenario ? fromScenario.metrics[index].value : metric.value;
      /* Einheitenwechsel (Mio. € ↔ Tsd. €) nicht interpolieren – direkt setzen */
      var sameUnit = fromScenario && fromScenario.metrics[index].unit === metric.unit;

      if (prefersReducedMotion.matches || !sameUnit || from === metric.value) {
        valueEl.textContent = formatNumber(metric.value, metric.decimals) + metric.unit;
        return;
      }

      var start = null;
      var duration = 600;
      function tick(now) {
        if (start === null) start = now;
        var t = Math.min((now - start) / duration, 1);
        var eased = 1 - Math.pow(1 - t, 3);
        var value = from + (metric.value - from) * eased;
        valueEl.textContent = formatNumber(value, metric.decimals) + metric.unit;
        if (t < 1) metricAnimations.push(requestAnimationFrame(tick));
      }
      metricAnimations.push(requestAnimationFrame(tick));
    });
  }

  /* ------------------------- SVG-Trenddiagramm ---------------------------- */
  /* Eigenes, abhängigkeitsfreies Diagramm: läuft auch ohne Netz am Infostand. */

  var CHART = { left: 46, right: 614, top: 30, bottom: 252, min: 0, max: 100 };
  var chartState = null; // aktuell gezeichnete Werte (für Übergänge)
  var chartAnimation = null;

  function xAt(index, count) {
    return CHART.left + (index * (CHART.right - CHART.left)) / (count - 1);
  }
  function yAt(value) {
    return CHART.bottom - ((value - CHART.min) / (CHART.max - CHART.min)) * (CHART.bottom - CHART.top);
  }

  function chartScaffold() {
    var html = "";
    [0, 25, 50, 75, 100].forEach(function (value) {
      var y = yAt(value);
      html += '<line class="grid-line" x1="' + CHART.left + '" y1="' + y + '" x2="' + CHART.right + '" y2="' + y + '" />';
      html += '<text class="axis-label" x="' + (CHART.left - 10) + '" y="' + (y + 4) + '" text-anchor="end">' + value + "</text>";
    });
    for (var i = 0; i < 6; i++) {
      html += '<text class="axis-label" x="' + xAt(i, 6) + '" y="' + (CHART.bottom + 24) + '" text-anchor="middle">P' + (i + 1) + "</text>";
    }
    return html;
  }

  function seriesMarkup(key, values) {
    var count = values.length;
    var points = values
      .map(function (value, index) { return xAt(index, count) + "," + yAt(value); })
      .join(" ");
    var html = "";
    if (key === "revenue") {
      var area =
        CHART.left + "," + CHART.bottom + " " + points + " " + CHART.right + "," + CHART.bottom;
      html += '<polygon class="area-revenue" points="' + area + '" />';
    }
    html += '<polyline class="series series-' + key + '" points="' + points + '" />';
    values.forEach(function (value, index) {
      html +=
        '<circle class="series-dot dot-' + key + '" r="4.5" cx="' + xAt(index, count) + '" cy="' + yAt(value) + '" />';
    });
    return html;
  }

  function drawChart(values) {
    chartSvg.innerHTML =
      "<title id=\"trendChartTitle\">Trenddiagramm</title>" +
      "<desc id=\"trendChartDesc\">Verlauf von Umsatz, Kosten und Liquidität über sechs Perioden im gewählten Szenario.</desc>" +
      chartScaffold() +
      seriesMarkup("revenue", values.revenue) +
      seriesMarkup("cost", values.cost) +
      seriesMarkup("liquidity", values.liquidity);
  }

  function animateChart(toValues) {
    if (chartAnimation) cancelAnimationFrame(chartAnimation);

    if (prefersReducedMotion.matches || !chartState) {
      chartState = JSON.parse(JSON.stringify(toValues));
      drawChart(chartState);
      return;
    }

    var fromValues = JSON.parse(JSON.stringify(chartState));
    var start = null;
    var duration = 550;

    function tick(now) {
      if (start === null) start = now;
      var t = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - t, 3);
      var current = {};
      ["revenue", "cost", "liquidity"].forEach(function (key) {
        current[key] = fromValues[key].map(function (from, index) {
          return from + (toValues[key][index] - from) * eased;
        });
      });
      drawChart(current);
      if (t < 1) {
        chartAnimation = requestAnimationFrame(tick);
      } else {
        chartState = JSON.parse(JSON.stringify(toValues));
      }
    }
    chartAnimation = requestAnimationFrame(tick);
  }

  function updateChartTextAlt(scenario) {
    chartTextAlt.textContent =
      "Szenario " + scenario.label +
      ". Umsatz-Indexverlauf: " + scenario.chart.revenue.join(", ") +
      ". Kosten: " + scenario.chart.cost.join(", ") +
      ". Liquidität: " + scenario.chart.liquidity.join(", ") + ".";
  }

  /* ----------------------- Findings und Empfehlung ------------------------ */

  function renderAnalysis(scenario) {
    findingList.innerHTML = scenario.findings
      .map(function (finding, index) {
        return '<li class="finding-enter" style="--i:' + index + '">' + escapeHtml(finding) + "</li>";
      })
      .join("");
    recommendationText.textContent = scenario.recommendation;
    qualityText.textContent = scenario.quality;
    riskPill.textContent = scenario.risk;
    riskPill.dataset.risk = scenario.risk;
  }

  /* --------------------------- Szenario-Wechsel --------------------------- */

  var scenarioTabs = Array.prototype.slice.call(document.querySelectorAll(".scenario-tab"));

  function setScenario(id, animateFrom) {
    var scenario = scenarios[id];
    var previous = animateFrom ? scenarios[animateFrom] : null;
    selectedScenario = id;

    scenarioTabs.forEach(function (tab) {
      var active = tab.dataset.scenario === id;
      tab.setAttribute("aria-selected", String(active));
      if (active) cockpitBody.setAttribute("aria-labelledby", tab.id);
    });

    cockpitState.textContent = "Szenario: " + scenario.label;
    animateMetrics(previous, scenario);
    animateChart(scenario.chart);
    updateChartTextAlt(scenario);
    renderAnalysis(scenario);

    hitlFeedback.textContent = "";
    hitlFeedback.removeAttribute("data-state");
  }

  scenarioTabs.forEach(function (tab, index) {
    tab.addEventListener("click", function () {
      if (tab.dataset.scenario !== selectedScenario) {
        setScenario(tab.dataset.scenario, selectedScenario);
      }
    });
    /* Pfeiltasten-Navigation gemäß Tabs-Pattern */
    tab.addEventListener("keydown", function (event) {
      var delta = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
      if (!delta) return;
      event.preventDefault();
      var next = scenarioTabs[(index + delta + scenarioTabs.length) % scenarioTabs.length];
      next.focus();
      next.click();
    });
  });

  /* -------------------------- Human-in-the-loop --------------------------- */

  document.getElementById("approveBtn").addEventListener("click", function () {
    hitlFeedback.dataset.state = "approved";
    hitlFeedback.textContent =
      "Empfehlung freigegeben – die Maßnahme würde jetzt dokumentiert und umgesetzt. Entscheidung: Mensch.";
  });

  document.getElementById("rejectBtn").addEventListener("click", function () {
    hitlFeedback.dataset.state = "rejected";
    hitlFeedback.textContent =
      "Empfehlung verworfen – die KI erhält das Feedback, entschieden hat der Mensch.";
  });

  /* ----------------------------- Prozessfluss ----------------------------- */

  var processFlow = document.getElementById("processFlow");
  var flowDetail = document.getElementById("flowDetail");
  var activeFlowStep = 0;
  var flowTimer = null;

  processFlow.innerHTML = flowSteps
    .map(function (step, index) {
      return (
        '<li class="flow-step reveal' + (step.human ? " is-human" : "") + '" style="--i:' + index + '">' +
        '<button class="flow-btn" type="button" data-step="' + index + '">' +
        '<span class="flow-num">' + (index + 1) + "</span>" +
        '<span class="flow-title">' + escapeHtml(step.title) + "</span>" +
        "</button>" +
        "</li>"
      );
    })
    .join("");

  var flowStepEls = Array.prototype.slice.call(processFlow.querySelectorAll(".flow-step"));

  function setFlowStep(index, stopAuto) {
    activeFlowStep = index;
    flowStepEls.forEach(function (el, i) {
      el.classList.toggle("is-active", i === index);
    });
    var step = flowSteps[index];
    flowDetail.innerHTML =
      "<h4>" + escapeHtml(step.title) +
      ' <span class="flow-actor" data-actor="' + (step.human ? "mensch" : "ki") + '">' +
      (step.human ? "Mensch" : "KI") + "</span></h4>" +
      "<p>" + escapeHtml(step.text) + "</p>";
    if (stopAuto && flowTimer) {
      clearInterval(flowTimer);
      flowTimer = null;
    }
  }

  processFlow.addEventListener("click", function (event) {
    var btn = event.target.closest(".flow-btn");
    if (btn) setFlowStep(Number(btn.dataset.step), true);
  });

  setFlowStep(0, false);

  /* Automatisches Durchlaufen, sobald der Abschnitt sichtbar wird –
     stoppt bei Interaktion und bei reduzierter Bewegung. */
  if (!prefersReducedMotion.matches) {
    var flowObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !flowTimer) {
            flowTimer = setInterval(function () {
              setFlowStep((activeFlowStep + 1) % flowSteps.length, false);
            }, 3200);
          } else if (!entry.isIntersecting && flowTimer) {
            clearInterval(flowTimer);
            flowTimer = null;
          }
        });
      },
      { threshold: 0.35 }
    );
    flowObserver.observe(processFlow);
  }

  /* ------------------------- Scroll-Reveal-Effekte ------------------------ */
  /* Bewusst nach dem dynamischen DOM-Aufbau, damit auch erzeugte Karten
     und Prozessschritte beobachtet werden. */

  var revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if (prefersReducedMotion.matches || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -36px 0px" }
    );
    revealEls.forEach(function (el) {
      if (!el.style.getPropertyValue("--i")) {
        el.style.setProperty("--i", String(revealEls.indexOf(el) % 4));
      }
      revealObserver.observe(el);
    });
  }

  /* -------------------------------- Start --------------------------------- */

  buildMetricCards(scenarios[selectedScenario]);
  setScenario(selectedScenario, null);
})();
