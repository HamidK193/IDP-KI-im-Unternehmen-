const products = [
  {
    sku: "PP-BOX-01",
    name: "Lesestunde Klassik",
    description: "Roman, Lesezeichen und Tee fuer eine ruhige Stunde.",
    netPrice: 24.9,
    vatRate: 0.19,
    image: "./assets/lesestunde-klassik.png",
  },
  {
    sku: "PP-BOX-02",
    name: "Schreibatelier",
    description: "Notizbuch, Fueller und Tinte fuer neue Ideen.",
    netPrice: 39.9,
    vatRate: 0.19,
    image: "./assets/schreibatelier.png",
  },
  {
    sku: "PP-BOX-03",
    name: "Kleine Bibliothek",
    description: "Drei Buecher, Stoffbeutel und Karte als Geschenkset.",
    netPrice: 54.9,
    vatRate: 0.19,
    image: "./assets/kleine-bibliothek.png",
  },
];

const shippingNet = 4.9;
const state = {
  cart: JSON.parse(localStorage.getItem("papierpfad_cart") || "[]"),
};

const productGrid = document.querySelector("#productGrid");
const cartButton = document.querySelector("#cartButton");
const closeCartButton = document.querySelector("#closeCartButton");
const cartPanel = document.querySelector("#cartPanel");
const cartItems = document.querySelector("#cartItems");
const cartCount = document.querySelector("#cartCount");
const subtotalEl = document.querySelector("#subtotal");
const shippingEl = document.querySelector("#shipping");
const totalEl = document.querySelector("#total");
const checkoutButton = document.querySelector("#checkoutButton");
const checkoutDialog = document.querySelector("#checkoutDialog");
const closeCheckoutButton = document.querySelector("#closeCheckoutButton");
const checkoutForm = document.querySelector("#checkoutForm");
const checkoutSummary = document.querySelector("#checkoutSummary");
const successDialog = document.querySelector("#successDialog");
const successText = document.querySelector("#successText");
const closeSuccessButton = document.querySelector("#closeSuccessButton");

function money(value) {
  return `${value.toFixed(2).replace(".", ",")} EUR`;
}

function saveCart() {
  localStorage.setItem("papierpfad_cart", JSON.stringify(state.cart));
}

function cartLines() {
  return state.cart.map((item) => {
    const product = products.find((entry) => entry.sku === item.sku);
    return { ...product, quantity: item.quantity };
  });
}

function totals() {
  const subtotal = cartLines().reduce((sum, item) => sum + item.netPrice * item.quantity, 0);
  const vat = (subtotal + (subtotal > 0 ? shippingNet : 0)) * 0.19;
  const total = subtotal + (subtotal > 0 ? shippingNet : 0) + vat;
  return { subtotal, vat, total };
}

function renderProducts() {
  productGrid.innerHTML = products
    .map(
      (product) => `
        <article class="product-card">
          <img src="${product.image}" alt="${product.name}" />
          <div class="product-body">
            <div>
              <h3>${product.name}</h3>
              <p>${product.description}</p>
            </div>
            <div class="product-footer">
              <strong>${money(product.netPrice)} netto</strong>
              <button class="primary-button" data-add="${product.sku}">Hinzufuegen</button>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderCart() {
  const lines = cartLines();
  cartCount.textContent = lines.reduce((sum, item) => sum + item.quantity, 0);
  cartItems.innerHTML =
    lines.length === 0
      ? "<p>Dein Warenkorb ist leer.</p>"
      : lines
          .map(
            (item) => `
              <div class="cart-row">
                <div>
                  <p><strong>${item.name}</strong></p>
                  <span>${money(item.netPrice)} netto</span>
                </div>
                <div class="quantity-controls">
                  <button data-dec="${item.sku}">-</button>
                  <span>${item.quantity}</span>
                  <button data-inc="${item.sku}">+</button>
                </div>
              </div>
            `,
          )
          .join("");

  const summary = totals();
  subtotalEl.textContent = money(summary.subtotal);
  shippingEl.textContent = money(summary.subtotal > 0 ? shippingNet : 0);
  totalEl.textContent = money(summary.total);
  checkoutButton.disabled = lines.length === 0;
}

function addToCart(sku) {
  const existing = state.cart.find((item) => item.sku === sku);
  if (existing) existing.quantity += 1;
  else state.cart.push({ sku, quantity: 1 });
  saveCart();
  renderCart();
}

function changeQuantity(sku, delta) {
  const item = state.cart.find((entry) => entry.sku === sku);
  if (!item) return;
  item.quantity += delta;
  state.cart = state.cart.filter((entry) => entry.quantity > 0);
  saveCart();
  renderCart();
}

function openCheckout() {
  const lines = cartLines();
  const summary = totals();
  checkoutSummary.innerHTML = `
    ${lines
      .map(
        (item) => `<div class="summary-line"><span>${item.quantity} x ${item.name}</span><strong>${money(item.netPrice * item.quantity)}</strong></div>`,
      )
      .join("")}
    <div class="summary-line"><span>Versand</span><strong>${money(shippingNet)}</strong></div>
    <div class="summary-line"><span>Gesamt brutto</span><strong>${money(summary.total)}</strong></div>
  `;
  checkoutDialog.showModal();
}

function nextSequence(key) {
  const current = Number(localStorage.getItem(key) || "0") + 1;
  localStorage.setItem(key, String(current));
  return String(current).padStart(4, "0");
}

function loadCollection(key) {
  return JSON.parse(localStorage.getItem(key) || "[]");
}

function saveCollection(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function completeOrder(formData) {
  const lines = cartLines();
  const summary = totals();
  const customerId = `CUST-${nextSequence("papierpfad_customer_seq")}`;
  const orderId = `ORD-2026-${nextSequence("papierpfad_order_seq")}`;
  const orderNumber = `PP-2026-${nextSequence("papierpfad_order_number_seq")}`;
  const invoiceNumber = `INV-2026-${nextSequence("papierpfad_invoice_seq")}`;

  const customers = loadCollection("papierpfad_customers");
  customers.push({
    id: customerId,
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    address: {
      street: formData.get("street"),
      postalCode: formData.get("postalCode"),
      city: formData.get("city"),
      countryCode: "DE",
    },
  });

  const orders = loadCollection("papierpfad_orders");
  orders.push({
    id: orderId,
    orderNumber,
    customerId,
    status: "paid",
    lines,
    subtotalNet: summary.subtotal,
    shippingNet,
    vat: summary.vat,
    totalGross: summary.total,
    createdAt: new Date().toISOString(),
  });

  const invoices = loadCollection("papierpfad_invoices");
  invoices.push({
    invoiceNumber,
    orderId,
    orderNumber,
    customerId,
    status: "needs_review",
    createdAt: new Date().toISOString(),
  });

  saveCollection("papierpfad_customers", customers);
  saveCollection("papierpfad_orders", orders);
  saveCollection("papierpfad_invoices", invoices);

  state.cart = [];
  saveCart();
  renderCart();

  successText.textContent = `Bestellung ${orderNumber} wurde angelegt. Der Rechnungsentwurf ${invoiceNumber} wartet jetzt auf Pruefung.`;
  successDialog.showModal();
}

document.addEventListener("click", (event) => {
  const addSku = event.target.dataset.add;
  const incSku = event.target.dataset.inc;
  const decSku = event.target.dataset.dec;
  if (addSku) addToCart(addSku);
  if (incSku) changeQuantity(incSku, 1);
  if (decSku) changeQuantity(decSku, -1);
});

cartButton.addEventListener("click", () => {
  cartPanel.classList.add("open");
  cartPanel.setAttribute("aria-hidden", "false");
});

closeCartButton.addEventListener("click", () => {
  cartPanel.classList.remove("open");
  cartPanel.setAttribute("aria-hidden", "true");
});

checkoutButton.addEventListener("click", openCheckout);
closeCheckoutButton.addEventListener("click", () => checkoutDialog.close());
closeSuccessButton.addEventListener("click", () => successDialog.close());

checkoutForm.addEventListener("submit", (event) => {
  event.preventDefault();
  completeOrder(new FormData(checkoutForm));
  checkoutDialog.close();
  checkoutForm.reset();
});

renderProducts();
renderCart();
