const products = [
  {
    sku: "KA-COT-01",
    name: "Double Face Coat Onyx",
    category: "Outerwear",
    description: "Langer Wollmantel mit breiter Schulter, verdeckter Knopfleiste und schwerem Fall.",
    netPrice: 289.9,
    vatRate: 0.19,
    image:
      "https://images.pexels.com/photos/20406876/pexels-photo-20406876.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    sku: "KA-BMB-02",
    name: "Leather Bomber Noir",
    category: "Outerwear",
    description: "Kurzer Bomber mit glatter Oberfläche, kompaktem Bund und edlem Hardware-Finish.",
    netPrice: 349.9,
    vatRate: 0.19,
    image:
      "https://images.pexels.com/photos/6939119/pexels-photo-6939119.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    sku: "KA-KNT-03",
    name: "Merino Knit Stone",
    category: "Knitwear",
    description: "Weicher Merino-Strick mit entspannter Silhouette und cleanem Rundhalsausschnitt.",
    netPrice: 139.9,
    vatRate: 0.19,
    image:
      "https://images.pexels.com/photos/20520671/pexels-photo-20520671.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    sku: "KA-KNT-04",
    name: "Ribbed Cardigan Espresso",
    category: "Knitwear",
    description: "Gerippter Cardigan in dunklem Braun mit tiefem Ausschnitt und schweren Knöpfen.",
    netPrice: 159.9,
    vatRate: 0.19,
    image:
      "https://images.pexels.com/photos/18794485/pexels-photo-18794485.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    sku: "KA-TRS-05",
    name: "Wide Trouser Graphite",
    category: "Tailoring",
    description: "Weite Anzughose mit Bundfalte, fließendem Bein und modernem Cropped-Fit.",
    netPrice: 129.9,
    vatRate: 0.19,
    image:
      "https://images.pexels.com/photos/20818929/pexels-photo-20818929.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    sku: "KA-BLZ-06",
    name: "Relaxed Blazer Black",
    category: "Tailoring",
    description: "Unstrukturierter Blazer mit langen Revers und einer Silhouette wie aus dem Editorial.",
    netPrice: 219.9,
    vatRate: 0.19,
    image:
      "https://images.pexels.com/photos/13219629/pexels-photo-13219629.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    sku: "KA-HDY-07",
    name: "Heavy Hoodie Ash",
    category: "Essentials",
    description: "Luxuriöser Heavyweight-Hoodie ohne Print, innen weich und außen trocken im Griff.",
    netPrice: 119.9,
    vatRate: 0.19,
    image:
      "https://images.pexels.com/photos/3061826/pexels-photo-3061826.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    sku: "KA-TEE-08",
    name: "Mercerized Tee Ivory",
    category: "Essentials",
    description: "Cleanes Premium-Shirt mit leichtem Glanz, festerem Kragen und geradem Saum.",
    netPrice: 69.9,
    vatRate: 0.19,
    image:
      "https://images.pexels.com/photos/30561922/pexels-photo-30561922.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    sku: "KA-DNM-09",
    name: "Raw Denim Wide Black",
    category: "Denim",
    description: "Dunkler Raw Denim mit weitem Bein, tiefer Leibhöhe und minimalem Branding.",
    netPrice: 149.9,
    vatRate: 0.19,
    image:
      "https://images.pexels.com/photos/8505247/pexels-photo-8505247.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    sku: "KA-SHR-10",
    name: "Silk Shirt Bone",
    category: "Shirts",
    description: "Fließendes Hemd mit camp collar, matter Seidenoptik und entspannter Länge.",
    netPrice: 129.9,
    vatRate: 0.19,
    image:
      "https://images.pexels.com/photos/19179149/pexels-photo-19179149.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    sku: "KA-BAG-11",
    name: "Structured Tote Black",
    category: "Accessories",
    description: "Architektonische Tote Bag mit cleanem Volumen und genügend Platz für den Alltag.",
    netPrice: 119.9,
    vatRate: 0.19,
    image:
      "https://images.pexels.com/photos/20406852/pexels-photo-20406852.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    sku: "KA-CAP-12",
    name: "Wool Cap Charcoal",
    category: "Accessories",
    description: "Flache Wool Cap mit tonal gesticktem Kara-Zeichen und verstellbarem Lederriemen.",
    netPrice: 59.9,
    vatRate: 0.19,
    image:
      "https://images.pexels.com/photos/10050979/pexels-photo-10050979.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
];

const storagePrefix = "kara";
const shippingNet = 6.9;
const state = {
  cart: JSON.parse(localStorage.getItem(`${storagePrefix}_cart`) || "[]"),
  category: "Alle",
};

const productGrid = document.querySelector("#productGrid");
const categoryFilters = document.querySelector("#categoryFilters");
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
  return `€ ${value.toFixed(2).replace(".", ",")}`;
}

function saveCart() {
  localStorage.setItem(`${storagePrefix}_cart`, JSON.stringify(state.cart));
}

function cartLines() {
  return state.cart
    .map((item) => {
      const product = products.find((entry) => entry.sku === item.sku);
      return product ? { ...product, quantity: item.quantity } : null;
    })
    .filter(Boolean);
}

function totals() {
  const lines = cartLines();
  const subtotal = lines.reduce((sum, item) => sum + item.netPrice * item.quantity, 0);
  const shipping = subtotal > 0 ? shippingNet : 0;
  const vat = (subtotal + shipping) * 0.19;
  const total = subtotal + shipping + vat;
  return { subtotal, shipping, vat, total };
}

function productFallback(event) {
  event.target.classList.add("image-fallback");
  event.target.removeAttribute("src");
}

function renderFilters() {
  const categories = ["Alle", ...new Set(products.map((product) => product.category))];
  categoryFilters.innerHTML = categories
    .map(
      (category) => `
        <button class="filter-button ${state.category === category ? "active" : ""}" data-category="${category}">
          ${category}
        </button>
      `,
    )
    .join("");
}

function renderProducts() {
  const visibleProducts =
    state.category === "Alle"
      ? products
      : products.filter((product) => product.category === state.category);

  productGrid.innerHTML = visibleProducts
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-media">
            <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="productFallback(event)" />
          </div>
          <div class="product-body">
            <div class="product-meta">
              <span>${product.category}</span>
              <span>${product.sku}</span>
            </div>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="product-footer">
              <strong>${money(product.netPrice)}</strong>
              <button class="primary-button compact-button" data-add="${product.sku}">Hinzufügen</button>
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
      ? `<div class="empty-cart">
          <p>Dein Warenkorb ist leer.</p>
          <span>Wähle ein Piece aus der aktuellen Kollektion.</span>
        </div>`
      : lines
          .map(
            (item) => `
              <div class="cart-row">
                <img src="${item.image}" alt="" onerror="productFallback(event)" />
                <div>
                  <p><strong>${item.name}</strong></p>
                  <span>${money(item.netPrice)}</span>
                </div>
                <div class="quantity-controls" aria-label="Menge für ${item.name}">
                  <button data-dec="${item.sku}" aria-label="${item.name} entfernen">−</button>
                  <span>${item.quantity}</span>
                  <button data-inc="${item.sku}" aria-label="${item.name} hinzufügen">+</button>
                </div>
              </div>
            `,
          )
          .join("");

  const summary = totals();
  subtotalEl.textContent = money(summary.subtotal);
  shippingEl.textContent = money(summary.shipping);
  totalEl.textContent = money(summary.total);
  checkoutButton.disabled = lines.length === 0;
}

function addToCart(sku) {
  const existing = state.cart.find((item) => item.sku === sku);
  if (existing) existing.quantity += 1;
  else state.cart.push({ sku, quantity: 1 });
  saveCart();
  renderCart();
  cartPanel.classList.add("open");
  cartPanel.setAttribute("aria-hidden", "false");
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
        (item) => `<div class="summary-line"><span>${item.quantity} × ${item.name}</span><strong>${money(item.netPrice * item.quantity)}</strong></div>`,
      )
      .join("")}
    <div class="summary-line"><span>Versand</span><strong>${money(summary.shipping)}</strong></div>
    <div class="summary-line"><span>Umsatzsteuer</span><strong>${money(summary.vat)}</strong></div>
    <div class="summary-line total-line"><span>Gesamt</span><strong>${money(summary.total)}</strong></div>
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
  const customerId = `CUST-${nextSequence(`${storagePrefix}_customer_seq`)}`;
  const orderId = `ORD-2026-${nextSequence(`${storagePrefix}_order_seq`)}`;
  const orderNumber = `KA-2026-${nextSequence(`${storagePrefix}_order_number_seq`)}`;
  const invoiceNumber = `RE-2026-${nextSequence(`${storagePrefix}_invoice_seq`)}`;

  const customers = loadCollection(`${storagePrefix}_customers`);
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

  const orders = loadCollection(`${storagePrefix}_orders`);
  orders.push({
    id: orderId,
    orderNumber,
    customerId,
    status: "paid",
    lines,
    subtotalNet: summary.subtotal,
    shippingNet: summary.shipping,
    vat: summary.vat,
    totalGross: summary.total,
    createdAt: new Date().toISOString(),
  });

  const invoices = loadCollection(`${storagePrefix}_invoices`);
  invoices.push({
    invoiceNumber,
    orderId,
    orderNumber,
    customerId,
    status: "needs_review",
    createdAt: new Date().toISOString(),
  });

  saveCollection(`${storagePrefix}_customers`, customers);
  saveCollection(`${storagePrefix}_orders`, orders);
  saveCollection(`${storagePrefix}_invoices`, invoices);

  state.cart = [];
  saveCart();
  renderCart();
  cartPanel.classList.remove("open");
  cartPanel.setAttribute("aria-hidden", "true");

  successText.textContent = `Bestellung ${orderNumber} wurde angelegt. Der Rechnungsentwurf ${invoiceNumber} wartet jetzt auf Prüfung.`;
  successDialog.showModal();
}

document.addEventListener("click", (event) => {
  const addSku = event.target.dataset.add;
  const incSku = event.target.dataset.inc;
  const decSku = event.target.dataset.dec;
  const category = event.target.dataset.category;

  if (addSku) addToCart(addSku);
  if (incSku) changeQuantity(incSku, 1);
  if (decSku) changeQuantity(decSku, -1);
  if (category) {
    state.category = category;
    renderFilters();
    renderProducts();
  }
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

renderFilters();
renderProducts();
renderCart();
