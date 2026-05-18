const storagePrefix = "kara";

function money(value) {
  return `€ ${value.toFixed(2).replace(".", ",")}`;
}

function loadCollection(key) {
  return JSON.parse(localStorage.getItem(key) || "[]");
}

function saveCollection(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

const reviewList = document.querySelector("#reviewList");
const invoicePanel = document.querySelector("#invoicePanel");

function statusLabel(status) {
  const labels = {
    needs_review: "wartet auf Prüfung",
    approved: "freigegeben",
    rejected: "zurückgewiesen",
  };
  return labels[status] || status;
}

function getJoinedInvoices() {
  const invoices = loadCollection(`${storagePrefix}_invoices`);
  const orders = loadCollection(`${storagePrefix}_orders`);
  const customers = loadCollection(`${storagePrefix}_customers`);

  return invoices
    .map((invoice) => {
      const order = orders.find((entry) => entry.id === invoice.orderId);
      const customer = customers.find((entry) => entry.id === invoice.customerId);
      return order && customer ? { invoice, order, customer } : null;
    })
    .filter(Boolean);
}

function renderList(selectedInvoiceNumber) {
  const rows = getJoinedInvoices();
  reviewList.innerHTML =
    rows.length === 0
      ? `<div class="empty-cart">
          <p>Noch keine Rechnungen vorhanden.</p>
          <span>Lege im Shop zuerst eine Bestellung an.</span>
        </div>`
      : rows
          .map(
            ({ invoice, order, customer }) => `
              <button class="review-card ${invoice.invoiceNumber === selectedInvoiceNumber ? "active" : ""}" data-invoice="${invoice.invoiceNumber}">
                <strong>${invoice.invoiceNumber}</strong>
                <p>${customer.firstName} ${customer.lastName}</p>
                <p>${money(order.totalGross)} · ${statusLabel(invoice.status)}</p>
              </button>
            `,
          )
          .join("");
}

function renderInvoice(invoiceNumber) {
  const row = getJoinedInvoices().find(({ invoice }) => invoice.invoiceNumber === invoiceNumber);
  if (!row) return;
  const { invoice, order, customer } = row;

  invoicePanel.classList.remove("empty");
  invoicePanel.innerHTML = `
    <div class="invoice-grid">
      <div class="invoice-header">
        <div>
          <p class="section-label">Kara</p>
          <h2>Rechnung ${invoice.invoiceNumber}</h2>
          <p>${order.orderNumber}</p>
        </div>
        <span class="status-pill">${statusLabel(invoice.status)}</span>
      </div>

      <div class="customer-block">
        <strong>${customer.firstName} ${customer.lastName}</strong>
        <p>${customer.address.street}<br />${customer.address.postalCode} ${customer.address.city}<br />${customer.email}</p>
      </div>

      <table class="invoice-table">
        <thead>
          <tr>
            <th>Produkt</th>
            <th>Menge</th>
            <th>Einzelpreis</th>
            <th>Summe</th>
          </tr>
        </thead>
        <tbody>
          ${order.lines
            .map(
              (line) => `
                <tr>
                  <td>${line.name}</td>
                  <td>${line.quantity}</td>
                  <td>${money(line.netPrice)}</td>
                  <td>${money(line.netPrice * line.quantity)}</td>
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>

      <div class="invoice-total">
        <div><span>Zwischensumme</span><strong>${money(order.subtotalNet)}</strong></div>
        <div><span>Versand</span><strong>${money(order.shippingNet)}</strong></div>
        <div><span>Umsatzsteuer</span><strong>${money(order.vat)}</strong></div>
        <div><span>Gesamt</span><strong>${money(order.totalGross)}</strong></div>
      </div>

      <div class="approval-actions">
        <button class="primary-button" data-approve="${invoice.invoiceNumber}">Freigeben</button>
        <button class="secondary-button ghost" data-reject="${invoice.invoiceNumber}">Zurückweisen</button>
      </div>
    </div>
  `;
}

document.addEventListener("click", (event) => {
  const invoiceNumber = event.target.dataset.invoice;
  const approveNumber = event.target.dataset.approve;
  const rejectNumber = event.target.dataset.reject;

  if (invoiceNumber) {
    renderList(invoiceNumber);
    renderInvoice(invoiceNumber);
  }

  if (approveNumber || rejectNumber) {
    const invoices = loadCollection(`${storagePrefix}_invoices`);
    const target = invoices.find((entry) => entry.invoiceNumber === (approveNumber || rejectNumber));
    if (!target) return;
    target.status = approveNumber ? "approved" : "rejected";
    saveCollection(`${storagePrefix}_invoices`, invoices);
    renderList(target.invoiceNumber);
    renderInvoice(target.invoiceNumber);
  }
});

const firstInvoice = getJoinedInvoices()[0]?.invoice.invoiceNumber;
renderList(firstInvoice);
if (firstInvoice) renderInvoice(firstInvoice);
