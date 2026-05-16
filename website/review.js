function money(value) {
  return `${value.toFixed(2).replace(".", ",")} EUR`;
}

function loadCollection(key) {
  return JSON.parse(localStorage.getItem(key) || "[]");
}

function saveCollection(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

const reviewList = document.querySelector("#reviewList");
const invoicePanel = document.querySelector("#invoicePanel");

function getJoinedInvoices() {
  const invoices = loadCollection("papierpfad_invoices");
  const orders = loadCollection("papierpfad_orders");
  const customers = loadCollection("papierpfad_customers");

  return invoices.map((invoice) => {
    const order = orders.find((entry) => entry.id === invoice.orderId);
    const customer = customers.find((entry) => entry.id === invoice.customerId);
    return { invoice, order, customer };
  });
}

function renderList(selectedInvoiceNumber) {
  const rows = getJoinedInvoices();
  reviewList.innerHTML =
    rows.length === 0
      ? "<p>Noch keine Rechnungen vorhanden.</p>"
      : rows
          .map(
            ({ invoice, order, customer }) => `
              <button class="review-card ${invoice.invoiceNumber === selectedInvoiceNumber ? "active" : ""}" data-invoice="${invoice.invoiceNumber}">
                <strong>${invoice.invoiceNumber}</strong>
                <p>${customer.firstName} ${customer.lastName}</p>
                <p>${money(order.totalGross)} | ${invoice.status}</p>
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
          <h2>Rechnung ${invoice.invoiceNumber}</h2>
          <p>${order.orderNumber}</p>
        </div>
        <span class="status-pill">${invoice.status}</span>
      </div>

      <div>
        <strong>${customer.firstName} ${customer.lastName}</strong>
        <p>${customer.address.street}<br />${customer.address.postalCode} ${customer.address.city}<br />${customer.email}</p>
      </div>

      <table class="invoice-table">
        <thead>
          <tr>
            <th>Produkt</th>
            <th>Menge</th>
            <th>Einzelpreis netto</th>
            <th>Summe netto</th>
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
        <div><span>Zwischensumme netto</span><strong>${money(order.subtotalNet)}</strong></div>
        <div><span>Versand netto</span><strong>${money(order.shippingNet)}</strong></div>
        <div><span>Umsatzsteuer</span><strong>${money(order.vat)}</strong></div>
        <div><span>Gesamt brutto</span><strong>${money(order.totalGross)}</strong></div>
      </div>

      <div class="approval-actions">
        <button class="primary-button" data-approve="${invoice.invoiceNumber}">Freigeben</button>
        <button class="secondary-button" data-reject="${invoice.invoiceNumber}">Zurueckweisen</button>
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
    const invoices = loadCollection("papierpfad_invoices");
    const target = invoices.find((entry) => entry.invoiceNumber === (approveNumber || rejectNumber));
    target.status = approveNumber ? "approved" : "rejected";
    saveCollection("papierpfad_invoices", invoices);
    renderList(target.invoiceNumber);
    renderInvoice(target.invoiceNumber);
  }
});

const firstInvoice = getJoinedInvoices()[0]?.invoice.invoiceNumber;
renderList(firstInvoice);
if (firstInvoice) renderInvoice(firstInvoice);
