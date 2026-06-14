/* ==========================================================================
   Kara·Cockpit – Interaktion (Vanilla JS, kein Build-Schritt)
   Eine Datei für beide Seiten: index.html (Übersicht) + cockpit.html (Demo).
   Jeder Block initialisiert sich nur, wenn seine Elemente vorhanden sind.
   Alle Werte sind realistisch gewählte Demo-Daten des fiktiven Unternehmens Kara.
   ========================================================================== */
(function () {
  "use strict";

  document.documentElement.classList.remove("no-js");

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  /* ------------------------------ Demo-Daten ------------------------------ */

  var useCases = [
    {
      label: "01 · Hauptfall",
      title: "KI-Controlling-Cockpit",
      summary:
        "Analysiert alle relevanten Unternehmensdatenbanken, berechnet Kennzahlen, erkennt Trends und schlägt begründete Maßnahmen vor.",
      why:
        "Verbindet Datenintegration, betriebswirtschaftliche Steuerung, KI-Erklärung und menschliche Freigabe in einem Ablauf.",
    },
    {
      label: "02 · Fallbeispiel",
      title: "Budget- und Kostenabweichungsanalyse",
      summary:
        "Vergleicht Plan- und Ist-Werte, markiert auffällige Kostenstellen und priorisiert Abweichungen nach finanzieller Wirkung.",
      why:
        "Beschleunigt operative Controlling-Arbeit, ohne die fachliche Bewertung zu automatisieren.",
    },
    {
      label: "03 · Fallbeispiel",
      title: "Forecasting und Frühwarnsystem",
      summary:
        "Nutzt historische Daten, um Umsatz, Kosten oder Liquidität zu prognostizieren und kritische Szenarien früh sichtbar zu machen.",
      why:
        "Ergänzt die rückblickende Auswertung um vorausschauende Steuerung, bevor Engpässe akut werden.",
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

  var scenarios = {
    stabil: {
      label: "Stabile Entwicklung",
      metrics: [
        { label: "Umsatz", value: 4.82, decimals: 2, unit: " Mio. €", trend: "+8,4 %", dir: "up", tone: "good" },
        { label: "Kostenquote", value: 41.8, decimals: 1, unit: " %", trend: "−1,2 %", dir: "down", tone: "good" },
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
        { label: "Kostenquote", value: 49.6, decimals: 1, unit: " %", trend: "+7,4 %", dir: "up", tone: "bad" },
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
        { label: "Kostenquote", value: 45.1, decimals: 1, unit: " %", trend: "+2,1 %", dir: "up", tone: "warn" },
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
      text: "Die KI verbindet sich über MCP-Konnektoren mit Finance DB, ERP, CRM, HR, Projekt DB und Data Warehouse – und erschließt die nötigen Felder selbst.",
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

  /* Integrations-Hub: typische Quellen kleiner Unternehmen (nur Beispiele). */
  var hubIcons = {
    buchhaltung: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 7.5h8M8 11.5h.01M12 11.5h.01M16 11.5h.01M8 15h.01M12 15h.01M16 15h.01M8 18.5h8"/>',
    erp: '<path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z"/><path d="M4 7l8 4 8-4M12 11v10"/>',
    crm: '<circle cx="9" cy="8" r="3.2"/><path d="M3.5 19c.6-3.2 2.9-5 5.5-5s4.9 1.8 5.5 5"/><circle cx="17" cy="9.5" r="2.4"/><path d="M16 14.6c2.3.3 4 1.8 4.5 4.4"/>',
    banking: '<path d="M3.5 9.5 12 4l8.5 5.5"/><path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3.5 20.5h17"/>',
    hr: '<circle cx="12" cy="7.5" r="3.6"/><path d="M4.5 20.5c.8-4 3.8-6.2 7.5-6.2s6.7 2.2 7.5 6.2"/>',
    tabellen: '<rect x="3.5" y="4" width="17" height="16" rx="2"/><path d="M3.5 9.5h17M9.5 9.5v10.5M15 9.5v10.5"/>',
    dateien: '<path d="M6.5 2.5h8L19 7v14.5h-12.5Z"/><path d="M14 2.5V7h5M9.5 12.5h5M9.5 16h5"/>',
  };

  var hubTools = [
    { name: "DATEV", group: "Buchhaltung", icon: "buchhaltung", x: 13, y: 17 },
    { name: "lexoffice", group: "Buchhaltung", icon: "buchhaltung", x: 9, y: 50 },
    { name: "SAP Business One", group: "ERP", icon: "erp", x: 13, y: 83 },
    { name: "HubSpot", group: "CRM", icon: "crm", x: 87, y: 17 },
    { name: "Bank (FinTS)", group: "Banking", icon: "banking", x: 91, y: 50 },
    { name: "Personio", group: "HR / Lohn", icon: "hr", x: 87, y: 83 },
    { name: "Excel / Sheets", group: "Tabellen", icon: "tabellen", x: 50, y: 8 },
    { name: "PDF / CSV", group: "Dateien", icon: "dateien", x: 50, y: 92 },
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
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var explicit = document.documentElement.dataset.theme;
      var current = explicit ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      var next = current === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      try {
        localStorage.setItem("kara-theme", next);
      } catch (e) { /* privater Modus o. Ä. – Umschalten klappt trotzdem */ }
      document.dispatchEvent(new CustomEvent("kara-theme-change"));
    });
  }

  /* ---------------------------- Mobile-Menü ------------------------------- */

  var burger = document.getElementById("navBurger");
  var nav = document.getElementById("mainNav");

  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
  }

  if (burger && nav) {
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
  }

  /* ------------------------- Scroll-Spy Navigation ------------------------ */

  if (nav && "IntersectionObserver" in window) {
    var navLinks = Array.prototype.slice.call(nav.querySelectorAll("a[href^='#']"));
    var sectionsById = {};
    navLinks.forEach(function (link) {
      var section = document.querySelector(link.getAttribute("href"));
      if (section) sectionsById[section.id] = link;
    });
    if (Object.keys(sectionsById).length) {
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
    }
  }

  /* ------------------------- SVG-Trenddiagramm ---------------------------- */
  /* Abhängigkeitsfrei: läuft auch ohne Netz am Infostand. */

  var CHART = { left: 46, right: 614, top: 30, bottom: 252, min: 0, max: 100 };

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
      var area = CHART.left + "," + CHART.bottom + " " + points + " " + CHART.right + "," + CHART.bottom;
      html += '<polygon class="area-revenue" points="' + area + '" />';
    }
    html += '<polyline class="series series-' + key + '" points="' + points + '" />';
    values.forEach(function (value, index) {
      html += '<circle class="series-dot dot-' + key + '" r="4.5" cx="' + xAt(index, count) + '" cy="' + yAt(value) + '" />';
    });
    return html;
  }

  function drawChart(svg, values, headMarkup) {
    svg.innerHTML =
      (headMarkup || "") +
      chartScaffold() +
      seriesMarkup("revenue", values.revenue) +
      seriesMarkup("cost", values.cost) +
      seriesMarkup("liquidity", values.liquidity);
  }

  /* =========================== HOMEPAGE-BLÖCKE ============================ */

  /* KPI-Reihe (Szenario „stabil") mit Zähl-Animation beim Sichtbarwerden */
  var kpiRow = document.getElementById("kpiRow");
  if (kpiRow) {
    kpiRow.innerHTML = scenarios.stabil.metrics
      .map(function (metric, index) {
        return (
          '<article class="kpi-card reveal" data-tone="' + metric.tone + '" style="--i:' + (index % 3) + '">' +
          '<span class="kpi-label">' + escapeHtml(metric.label) + "</span>" +
          '<strong class="kpi-value" data-index="' + index + '">' +
          formatNumber(prefersReducedMotion.matches ? metric.value : 0, metric.decimals) + escapeHtml(metric.unit) +
          "</strong>" +
          '<span class="kpi-trend">' + trendIcon(metric.dir) + escapeHtml(metric.trend) + "</span>" +
          "</article>"
        );
      })
      .join("");

    if (!prefersReducedMotion.matches && "IntersectionObserver" in window) {
      var counted = false;
      var kpiObserver = new IntersectionObserver(
        function (entries) {
          if (counted || !entries.some(function (e) { return e.isIntersecting; })) return;
          counted = true;
          kpiObserver.disconnect();
          kpiRow.querySelectorAll(".kpi-value").forEach(function (el) {
            var metric = scenarios.stabil.metrics[Number(el.dataset.index)];
            var start = null;
            var duration = 1100;
            function tick(now) {
              if (start === null) start = now;
              var t = Math.min((now - start) / duration, 1);
              var eased = 1 - Math.pow(1 - t, 3);
              el.textContent = formatNumber(metric.value * eased, metric.decimals) + metric.unit;
              if (t < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
          });
        },
        { threshold: 0.3 }
      );
      kpiObserver.observe(kpiRow);
    } else {
      kpiRow.querySelectorAll(".kpi-value").forEach(function (el) {
        var metric = scenarios.stabil.metrics[Number(el.dataset.index)];
        el.textContent = formatNumber(metric.value, metric.decimals) + metric.unit;
      });
    }
  }

  /* Insights-Diagramm (statisch, Szenario „stabil") */
  var homeChart = document.getElementById("homeChart");
  if (homeChart) {
    drawChart(homeChart, scenarios.stabil.chart);
  }

  /* Integrations-Hub: Satelliten + Leitungen mit Pfeilen nach innen */
  var hub = document.querySelector(".hub");
  if (hub) {
    var wires = hub.querySelector(".hub-wires");
    var W = 1000, H = 620, CX = 500, CY = 310;

    var wireHtml = hubTools
      .map(function (tool) {
        var sx = (tool.x / 100) * W;
        var sy = (tool.y / 100) * H;
        /* Endpunkt: kurz vor dem Zentrum (außerhalb der Karte) */
        var dx = CX - sx, dy = CY - sy;
        var len = Math.sqrt(dx * dx + dy * dy);
        var stop = 1 - 168 / len; /* 168px vor dem Mittelpunkt enden */
        var ex = sx + dx * stop;
        var ey = sy + dy * stop;
        /* leichte Kurve über versetzten Kontrollpunkt */
        var mx = (sx + ex) / 2 - dy * 0.08;
        var my = (sy + ey) / 2 + dx * 0.08;
        var angle = Math.atan2(ey - my, ex - mx) * (180 / Math.PI);
        return (
          '<path d="M ' + sx.toFixed(1) + " " + sy.toFixed(1) +
          " Q " + mx.toFixed(1) + " " + my.toFixed(1) + ", " + ex.toFixed(1) + " " + ey.toFixed(1) + '" />' +
          '<path class="wire-head" transform="translate(' + ex.toFixed(1) + "," + ey.toFixed(1) + ") rotate(" + angle.toFixed(1) + ')" d="M 0 0 L -13 -6.5 L -13 6.5 Z" />'
        );
      })
      .join("");
    wires.innerHTML = wireHtml;

    var satHtml = hubTools
      .map(function (tool, index) {
        return (
          '<div class="hub-sat" style="--x:' + tool.x + "%;--y:" + tool.y + "%;" + '">' +
          '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + hubIcons[tool.icon] + "</svg>" +
          "<strong>" + escapeHtml(tool.name) + "</strong>" +
          "<small>" + escapeHtml(tool.group) + "</small>" +
          "</div>"
        );
      })
      .join("");
    hub.insertAdjacentHTML("beforeend", satHtml);
  }

  /* Doppelblock: Quellen mit Qualitätsbalken */
  var duoSources = document.getElementById("duoSources");
  if (duoSources) {
    duoSources.innerHTML = sources
      .map(function (source) {
        return (
          '<div class="duo-source">' +
          "<b>" + escapeHtml(source.name) + "</b>" +
          '<span class="quality-bar"><span class="quality-fill" data-quality="' + source.quality + '"></span></span>' +
          "<span>" + source.quality + "&nbsp;%</span>" +
          "</div>"
        );
      })
      .join("");
  }

  /* Qualitätsbalken überall animiert füllen, sobald sichtbar */
  var fillHosts = Array.prototype.slice.call(document.querySelectorAll(".duo-sources, .source-stack"));
  if (fillHosts.length && "IntersectionObserver" in window) {
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
    fillHosts.forEach(function (host) { fillObserver.observe(host); });
  } else {
    document.querySelectorAll(".quality-fill").forEach(function (fill) {
      fill.style.width = fill.dataset.quality + "%";
    });
  }

  /* Fallbeispiel-Karten */
  var caseGrid = document.getElementById("caseGrid");
  if (caseGrid) {
    caseGrid.innerHTML = useCases
      .map(function (item, index) {
        return (
          '<article class="case-card reveal" style="--i:' + index + '">' +
          '<p class="case-label">' + escapeHtml(item.label) + "</p>" +
          "<h3>" + escapeHtml(item.title) + "</h3>" +
          '<p class="case-summary">' + escapeHtml(item.summary) + "</p>" +
          '<p class="case-why"><strong>Controlling-Bezug:</strong> ' + escapeHtml(item.why) + "</p>" +
          "</article>"
        );
      })
      .join("");
  }

  /* ----------------------------- Prozessfluss ----------------------------- */

  var processFlow = document.getElementById("processFlow");
  if (processFlow) {
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

    var setFlowStep = function (index, stopAuto) {
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
    };

    processFlow.addEventListener("click", function (event) {
      var btn = event.target.closest(".flow-btn");
      if (btn) setFlowStep(Number(btn.dataset.step), true);
    });

    setFlowStep(0, false);

    if (!prefersReducedMotion.matches && "IntersectionObserver" in window) {
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
  }

  /* ============================ COCKPIT-SEITE ============================= */

  var metricGrid = document.getElementById("metricGrid");
  if (metricGrid) {
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
    var chartHead =
      '<title id="trendChartTitle">Trenddiagramm</title>' +
      '<desc id="trendChartDesc">Verlauf von Umsatz, Kosten und Liquidität über sechs Perioden im gewählten Szenario.</desc>';

    var selectedScenario = "stabil";
    var chartState = null;
    var chartAnimation = null;
    var metricAnimations = [];

    /* Datenquellen (einmalig) */
    sourceStrip.innerHTML = sources
      .map(function (source) {
        return (
          '<article class="source-item">' +
          '<span class="source-name">' + escapeHtml(source.name) + "</span>" +
          '<span class="source-detail">' + escapeHtml(source.detail) + "</span>" +
          '<span class="source-quality">' +
          '<span class="quality-bar" role="img" aria-label="Datenqualität ' + source.quality + ' Prozent">' +
          '<span class="quality-fill" data-quality="' + source.quality + '"></span>' +
          "</span>" +
          source.quality + "&nbsp;%" +
          "</span>" +
          "</article>"
        );
      })
      .join("");
    /* Balken sofort füllen (Spalte ist beim Laden sichtbar) */
    window.setTimeout(function () {
      sourceStrip.querySelectorAll(".quality-fill").forEach(function (fill) {
        fill.style.width = fill.dataset.quality + "%";
      });
    }, 250);

    var buildMetricCards = function (scenario) {
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
    };

    var animateMetrics = function (fromScenario, toScenario) {
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
    };

    var animateChart = function (toValues) {
      if (chartAnimation) cancelAnimationFrame(chartAnimation);

      if (prefersReducedMotion.matches || !chartState) {
        chartState = JSON.parse(JSON.stringify(toValues));
        drawChart(chartSvg, chartState, chartHead);
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
        drawChart(chartSvg, current, chartHead);
        if (t < 1) {
          chartAnimation = requestAnimationFrame(tick);
        } else {
          chartState = JSON.parse(JSON.stringify(toValues));
        }
      }
      chartAnimation = requestAnimationFrame(tick);
    };

    var renderAnalysis = function (scenario) {
      findingList.innerHTML = scenario.findings
        .map(function (finding, index) {
          return '<li class="finding-enter" style="--i:' + index + '">' + escapeHtml(finding) + "</li>";
        })
        .join("");
      recommendationText.textContent = scenario.recommendation;
      qualityText.textContent = scenario.quality;
      riskPill.textContent = scenario.risk;
      riskPill.dataset.risk = scenario.risk;
    };

    var scenarioTabs = Array.prototype.slice.call(document.querySelectorAll(".scenario-tab"));

    var setScenario = function (id, animateFrom) {
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
      chartTextAlt.textContent =
        "Szenario " + scenario.label +
        ". Umsatz-Indexverlauf: " + scenario.chart.revenue.join(", ") +
        ". Kosten: " + scenario.chart.cost.join(", ") +
        ". Liquidität: " + scenario.chart.liquidity.join(", ") + ".";
      renderAnalysis(scenario);

      hitlFeedback.textContent = "";
      hitlFeedback.removeAttribute("data-state");
    };

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

    buildMetricCards(scenarios[selectedScenario]);
    setScenario(selectedScenario, null);
  }

  /* ------------------------- Scroll-Reveal-Effekte ------------------------ */
  /* Bewusst nach dem dynamischen DOM-Aufbau, damit auch erzeugte Elemente
     beobachtet werden. */

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
    revealEls.forEach(function (el, index) {
      if (!el.style.getPropertyValue("--i")) {
        el.style.setProperty("--i", String(index % 4));
      }
      revealObserver.observe(el);
    });
  }
})();
