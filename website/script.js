// ─── Supabase ────────────────────────────────────────────────
const SUPABASE_URL = "https://eqysqzuoeceqdevzlozh.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxeXNxenVvZWNlcWRldnpsb3poIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg5NDMzNjUsImV4cCI6MjA5NDUxOTM2NX0.beXhi9xak--i914WPXlVpu3spujxjEyH5SrYFIxKqBM";

const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// aktuelles JWT-Token oder Anon-Key für REST-Aufrufe
async function getToken() {
  const { data } = await sb.auth.getSession();
  return data?.session?.access_token || SUPABASE_KEY;
}

async function sbFetch(method, path, body = null) {
  const token = await getToken();
  const opts = {
    method,
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
  };
  if (body) opts.body = JSON.stringify(body);
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, opts);
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Supabase ${method} ${path}: ${err}`);
  }
  const text = await res.text();
  return text ? JSON.parse(text) : null;
}

// ─── Produkte ────────────────────────────────────────────────
const products = [
  { sku: "KA-COT-01", name: "Double Face Coat Onyx",    category: "Outerwear",   description: "Langer Wollmantel mit breiter Schulter, verdeckter Knopfleiste und schwerem Fall.",          netPrice: 289.9, vatRate: 0.19, image: "https://images.pexels.com/photos/20406876/pexels-photo-20406876.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { sku: "KA-BMB-02", name: "Leather Bomber Noir",      category: "Outerwear",   description: "Kurzer Bomber mit glatter Oberfläche, kompaktem Bund und edlem Hardware-Finish.",             netPrice: 349.9, vatRate: 0.19, image: "https://images.pexels.com/photos/6939119/pexels-photo-6939119.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { sku: "KA-KNT-03", name: "Merino Knit Stone",        category: "Knitwear",    description: "Weicher Merino-Strick mit entspannter Silhouette und cleanem Rundhalsausschnitt.",             netPrice: 139.9, vatRate: 0.19, image: "https://images.pexels.com/photos/20520671/pexels-photo-20520671.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { sku: "KA-KNT-04", name: "Ribbed Cardigan Espresso", category: "Knitwear",    description: "Gerippter Cardigan in dunklem Braun mit tiefem Ausschnitt und schweren Knöpfen.",             netPrice: 159.9, vatRate: 0.19, image: "https://images.pexels.com/photos/18794485/pexels-photo-18794485.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { sku: "KA-TRS-05", name: "Wide Trouser Graphite",    category: "Tailoring",   description: "Weite Anzughose mit Bundfalte, fließendem Bein und modernem Cropped-Fit.",                    netPrice: 129.9, vatRate: 0.19, image: "https://images.pexels.com/photos/20818929/pexels-photo-20818929.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { sku: "KA-BLZ-06", name: "Relaxed Blazer Black",     category: "Tailoring",   description: "Unstrukturierter Blazer mit langen Revers und einer Silhouette wie aus dem Editorial.",       netPrice: 219.9, vatRate: 0.19, image: "https://images.pexels.com/photos/13219629/pexels-photo-13219629.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { sku: "KA-HDY-07", name: "Heavy Hoodie Ash",         category: "Essentials",  description: "Luxuriöser Heavyweight-Hoodie ohne Print, innen weich und außen trocken im Griff.",           netPrice: 119.9, vatRate: 0.19, image: "https://images.pexels.com/photos/3061826/pexels-photo-3061826.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { sku: "KA-TEE-08", name: "Mercerized Tee Ivory",     category: "Essentials",  description: "Cleanes Premium-Shirt mit leichtem Glanz, festerem Kragen und geradem Saum.",                 netPrice:  69.9, vatRate: 0.19, image: "https://images.pexels.com/photos/30561922/pexels-photo-30561922.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { sku: "KA-DNM-09", name: "Raw Denim Wide Black",     category: "Denim",       description: "Dunkler Raw Denim mit weitem Bein, tiefer Leibhöhe und minimalem Branding.",                  netPrice: 149.9, vatRate: 0.19, image: "https://images.pexels.com/photos/8505247/pexels-photo-8505247.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { sku: "KA-SHR-10", name: "Silk Shirt Bone",          category: "Shirts",      description: "Fließendes Hemd mit camp collar, matter Seidenoptik und entspannter Länge.",                  netPrice: 129.9, vatRate: 0.19, image: "https://images.pexels.com/photos/19179149/pexels-photo-19179149.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { sku: "KA-BAG-11", name: "Structured Tote Black",    category: "Accessories", description: "Architektonische Tote Bag mit cleanem Volumen und genügend Platz für den Alltag.",            netPrice: 119.9, vatRate: 0.19, image: "https://images.pexels.com/photos/20406852/pexels-photo-20406852.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { sku: "KA-CAP-12", name: "Wool Cap Charcoal",        category: "Accessories", description: "Flache Wool Cap mit tonal gesticktem Kara-Zeichen und verstellbarem Lederriemen.",            netPrice:  59.9, vatRate: 0.19, image: "https://images.pexels.com/photos/10050979/pexels-photo-10050979.jpeg?auto=compress&cs=tinysrgb&w=900" },
];

const storagePrefix = "kara";
const shippingNet   = 6.9;
const state = {
  cart:     JSON.parse(localStorage.getItem(`${storagePrefix}_cart`) || "[]"),
  category: "Alle",
};

// ─── DOM-Refs ────────────────────────────────────────────────
const productGrid        = document.querySelector("#productGrid");
const categoryFilters    = document.querySelector("#categoryFilters");
const cartButton         = document.querySelector("#cartButton");
const closeCartButton    = document.querySelector("#closeCartButton");
const cartPanel          = document.querySelector("#cartPanel");
const cartItems          = document.querySelector("#cartItems");
const cartCount          = document.querySelector("#cartCount");
const subtotalEl         = document.querySelector("#subtotal");
const shippingEl         = document.querySelector("#shipping");
const totalEl            = document.querySelector("#total");
const checkoutButton     = document.querySelector("#checkoutButton");
const homeView           = document.querySelector("#home");
const accountPage        = document.querySelector("#accountPage");
const accountPageStatus  = document.querySelector("#accountPageStatus");
const accountAuthPanel   = document.querySelector("#accountAuthPanel");
const accountProfilePanel= document.querySelector("#accountProfilePanel");
const accountBackHomeButton = document.querySelector("#accountBackHomeButton");
const accountPageLoginButton = document.querySelector("#accountPageLoginButton");
const accountPageRegisterButton = document.querySelector("#accountPageRegisterButton");
const checkoutPage       = document.querySelector("#checkoutPage");
const checkoutAccountHeadline = document.querySelector("#checkoutAccountHeadline");
const checkoutAccountStatus = document.querySelector("#checkoutAccountStatus");
const checkoutSummary    = document.querySelector("#checkoutSummary");
const confirmCheckoutButton = document.querySelector("#confirmCheckoutButton");
const backToCartButton   = document.querySelector("#backToCartButton");
const editAccountFromCheckout = document.querySelector("#editAccountFromCheckout");
const successDialog      = document.querySelector("#successDialog");
const successText        = document.querySelector("#successText");
const closeSuccessButton = document.querySelector("#closeSuccessButton");
const accountButton      = document.querySelector("#accountButton");
const accountMenu        = document.querySelector("#accountMenu");
const accountMenuButton  = document.querySelector("#accountMenuButton");
const logoutButton       = document.querySelector("#logoutButton");
const userLabel          = document.querySelector("#userLabel");
const authDialog         = document.querySelector("#authDialog");
const closeAuthButton    = document.querySelector("#closeAuthButton");
const loginForm          = document.querySelector("#loginForm");
const registerForm       = document.querySelector("#registerForm");
const loginError         = document.querySelector("#loginError");
const registerError      = document.querySelector("#registerError");
const profileForm        = document.querySelector("#profileForm");
const profileMessage     = document.querySelector("#profileMessage");

let currentProfile = {
  customer: null,
  address: null,
};
let pendingCheckoutAfterAuth = false;

// ─── Hilfsfunktionen ─────────────────────────────────────────
function money(value) {
  return `€ ${value.toFixed(2).replace(".", ",")}`;
}

function saveCart() {
  localStorage.setItem(`${storagePrefix}_cart`, JSON.stringify(state.cart));
}

function cartLines() {
  return state.cart
    .map((item) => {
      const product = products.find((p) => p.sku === item.sku);
      return product ? { ...product, quantity: item.quantity } : null;
    })
    .filter(Boolean);
}

function totals() {
  const lines    = cartLines();
  const subtotal = lines.reduce((s, i) => s + i.netPrice * i.quantity, 0);
  const shipping = subtotal > 0 ? shippingNet : 0;
  const vat      = (subtotal + shipping) * 0.19;
  return { subtotal, shipping, vat, total: subtotal + shipping + vat };
}

function productFallback(event) {
  event.target.classList.add("image-fallback");
  event.target.removeAttribute("src");
}

// ─── Auth ─────────────────────────────────────────────────────
function updateAuthUI(user) {
  if (user) {
    accountButton.hidden = true;
    accountMenu.hidden   = false;
    userLabel.textContent = "Account";
    loadAccountProfile(user);
  } else {
    accountButton.hidden = false;
    accountMenu.hidden   = true;
    currentProfile = { customer: null, address: null };
  }
  renderAccountPage(user);
}

function showView(view) {
  homeView.hidden = view !== "home";
  accountPage.hidden = view !== "account";
  checkoutPage.hidden = view !== "checkout";
  document.body.classList.toggle("standalone-mode", view !== "home");
  if (view === "home") window.scrollTo({ top: 0, behavior: "smooth" });
  if (view === "account") accountPage.scrollIntoView({ block: "start" });
  if (view === "checkout") checkoutPage.scrollIntoView({ block: "start" });
}

function renderAccountPage(user = null) {
  const isLoggedIn = Boolean(user || currentProfile.customer);
  accountAuthPanel.hidden = isLoggedIn;
  accountProfilePanel.hidden = !isLoggedIn;
  accountPageStatus.textContent = isLoggedIn
    ? "Du bist angemeldet. Hier kannst du deine gespeicherten Daten fuer kommende Bestellungen bearbeiten."
    : "Melde dich an oder erstelle ein Konto. Danach werden deine Daten fuer die Kasse automatisch verwendet.";
}

function openAuthDialog(tab = "login") {
  loginForm.hidden = tab !== "login";
  registerForm.hidden = tab !== "register";
  document.querySelectorAll(".auth-tab").forEach((b) => b.classList.toggle("active", b.dataset.tab === tab));
  document.querySelector("#authDialogTitle").textContent = tab === "login" ? "Anmelden" : "Registrieren";
  loginError.hidden = true;
  registerError.hidden = true;
  authDialog.showModal();
}

function fillProfileForm(user, customer = null, address = null) {
  profileForm.firstName.value  = customer?.first_name || "";
  profileForm.lastName.value   = customer?.last_name || "";
  profileForm.email.value      = customer?.email || user?.email || "";
  profileForm.street.value     = address?.line1 || "";
  profileForm.postalCode.value = address?.postal_code || "";
  profileForm.city.value       = address?.city || "";
}

function showProfileMessage(text, isError = false) {
  profileMessage.textContent = text;
  profileMessage.hidden = false;
  profileMessage.classList.toggle("error", isError);
}

async function loadAccountProfile(user) {
  if (!user) return;
  try {
    const rows = await sbFetch("GET", `customers?user_id=eq.${user.id}&select=*&limit=1`);
    const customer = rows?.[0] || null;
    let address = null;

    if (customer) {
      const addrs = await sbFetch("GET", `addresses?customer_id=eq.${customer.id}&is_billing=eq.true&order=created_at.desc&limit=1&select=*`);
      address = addrs?.[0] || null;
      userLabel.textContent = "Account";
    } else {
      userLabel.textContent = "Account";
    }

    currentProfile = { customer, address };
    fillProfileForm(user, customer, address);
    renderAccountPage(user);
  } catch (err) {
    console.warn("Profil konnte nicht geladen werden:", err);
    fillProfileForm(user);
    renderAccountPage(user);
  }
}

async function prefillCheckout() {
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return;
  if (!currentProfile.customer) await loadAccountProfile(user);
}

async function saveProfile(formData) {
  const { data: { user } } = await sb.auth.getUser();
  if (!user) throw new Error("Du bist nicht angemeldet.");

  const customerBody = {
    email: formData.get("email"),
    first_name: formData.get("firstName"),
    last_name: formData.get("lastName"),
    user_id: user.id,
  };

  let customer = currentProfile.customer;
  if (customer) {
    [customer] = await sbFetch("PATCH", `customers?id=eq.${customer.id}`, customerBody);
  } else {
    [customer] = await sbFetch("POST", "customers", customerBody);
  }

  const addressBody = {
    customer_id: customer.id,
    line1: formData.get("street"),
    postal_code: formData.get("postalCode"),
    city: formData.get("city"),
    country_code: "DE",
    is_billing: true,
    is_shipping: true,
  };

  let address = currentProfile.address;
  if (address) {
    [address] = await sbFetch("PATCH", `addresses?id=eq.${address.id}`, addressBody);
  } else {
    [address] = await sbFetch("POST", "addresses", addressBody);
  }

  currentProfile = { customer, address };
  userLabel.textContent = "Account";
  fillProfileForm(user, customer, address);
}

// Auth-Tabs
document.querySelectorAll(".auth-tab").forEach((btn) => {
  btn.addEventListener("click", () => {
    const tab = btn.dataset.tab;
    document.querySelectorAll(".auth-tab").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    loginForm.hidden    = tab !== "login";
    registerForm.hidden = tab !== "register";
    document.querySelector("#authDialogTitle").textContent =
      tab === "login" ? "Anmelden" : "Registrieren";
    loginError.hidden    = true;
    registerError.hidden = true;
  });
});

accountButton.addEventListener("click", () => {
  showView("account");
});
closeAuthButton.addEventListener("click", () => authDialog.close());
accountPageLoginButton.addEventListener("click", () => openAuthDialog("login"));
accountPageRegisterButton.addEventListener("click", () => openAuthDialog("register"));

accountMenuButton.addEventListener("click", async () => {
  const { data: { user } } = await sb.auth.getUser();
  if (user) await loadAccountProfile(user);
  showView("account");
});

logoutButton.addEventListener("click", async () => {
  await sb.auth.signOut();
  updateAuthUI(null);
  pendingCheckoutAfterAuth = false;
  checkoutPage.hidden = true;
});

// Login
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const fd       = new FormData(loginForm);
  const email    = fd.get("email");
  const password = fd.get("password");
  loginError.hidden = true;

  const { data, error } = await sb.auth.signInWithPassword({ email, password });
  if (error) {
    loginError.textContent = "Anmeldung fehlgeschlagen: " + error.message;
    loginError.hidden = false;
    return;
  }
  updateAuthUI(data.user);
  await loadAccountProfile(data.user);
  authDialog.close();
  loginForm.reset();
  if (pendingCheckoutAfterAuth) {
    pendingCheckoutAfterAuth = false;
    cartPanel.classList.remove("open");
    cartPanel.setAttribute("aria-hidden", "true");
    showView("checkout");
    renderCheckoutPage();
  }
});

// Registrieren
registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const fd       = new FormData(registerForm);
  const email    = fd.get("email");
  const password = fd.get("password");
  registerError.hidden = true;

  const { data, error } = await sb.auth.signUp({ email, password });
  if (error) {
    registerError.textContent = "Registrierung fehlgeschlagen: " + error.message;
    registerError.hidden = false;
    return;
  }

  // Kundendatensatz anlegen
  try {
    await sbFetch("POST", "customers", {
      email,
      first_name:    fd.get("firstName"),
      last_name:     fd.get("lastName"),
      user_id:       data.user.id,
      demo_password: password,
    });
    await sbFetch("POST", "addresses", {
      customer_id:  (await sbFetch("GET", `customers?user_id=eq.${data.user.id}&select=id`))[0].id,
      line1:        fd.get("street"),
      postal_code:  fd.get("postalCode"),
      city:         fd.get("city"),
      country_code: "DE",
      is_billing:   true,
      is_shipping:  true,
    });
  } catch (_) {}

  updateAuthUI(data.user);
  await loadAccountProfile(data.user);
  authDialog.close();
  registerForm.reset();
  if (pendingCheckoutAfterAuth) {
    pendingCheckoutAfterAuth = false;
    cartPanel.classList.remove("open");
    cartPanel.setAttribute("aria-hidden", "true");
    showView("checkout");
    renderCheckoutPage();
  }
});

profileForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const submitBtn = profileForm.querySelector("button[type='submit']");
  profileMessage.hidden = true;
  submitBtn.disabled = true;
  submitBtn.textContent = "Speichert...";

  try {
    await saveProfile(new FormData(profileForm));
    if (!checkoutPage.hidden) renderCheckoutPage();
    showProfileMessage("Deine Daten wurden gespeichert.");
  } catch (err) {
    showProfileMessage("Speichern fehlgeschlagen: " + err.message, true);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Daten speichern";
  }
});

// Auth-State beim Laden wiederherstellen
sb.auth.onAuthStateChange((_event, session) => {
  updateAuthUI(session?.user || null);
});

sb.auth.getUser().then(({ data }) => {
  updateAuthUI(data?.user || null);
});

// ─── Render ───────────────────────────────────────────────────
function renderFilters() {
  const cats = ["Alle", ...new Set(products.map((p) => p.category))];
  categoryFilters.innerHTML = cats
    .map(
      (c) =>
        `<button class="filter-button ${state.category === c ? "active" : ""}" data-category="${c}">${c}</button>`,
    )
    .join("");
}

function renderProducts() {
  const visible =
    state.category === "Alle"
      ? products
      : products.filter((p) => p.category === state.category);

  productGrid.innerHTML = visible
    .map(
      (p) => `
      <article class="product-card">
        <div class="product-media">
          <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="productFallback(event)" />
        </div>
        <div class="product-body">
          <div class="product-meta"><span>${p.category}</span><span>${p.sku}</span></div>
          <h3>${p.name}</h3>
          <p>${p.description}</p>
          <div class="product-footer">
            <strong>${money(p.netPrice)}</strong>
            <button class="primary-button compact-button" data-add="${p.sku}">Hinzufügen</button>
          </div>
        </div>
      </article>`,
    )
    .join("");
}

function renderCart() {
  const lines = cartLines();
  cartCount.textContent = lines.reduce((s, i) => s + i.quantity, 0);
  cartItems.innerHTML =
    lines.length === 0
      ? `<div class="empty-cart"><p>Dein Warenkorb ist leer.</p><span>Wähle ein Piece aus der aktuellen Kollektion.</span></div>`
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
            </div>`,
          )
          .join("");

  const summary = totals();
  subtotalEl.textContent = money(summary.subtotal);
  shippingEl.textContent = money(summary.shipping);
  totalEl.textContent    = money(summary.total);
  checkoutButton.disabled = lines.length === 0;
  if (checkoutPage && !checkoutPage.hidden) renderCheckoutPage();
}

function addToCart(sku) {
  const existing = state.cart.find((i) => i.sku === sku);
  if (existing) existing.quantity += 1;
  else state.cart.push({ sku, quantity: 1 });
  saveCart();
  renderCart();
  cartPanel.classList.add("open");
  cartPanel.setAttribute("aria-hidden", "false");
}

function changeQuantity(sku, delta) {
  const item = state.cart.find((i) => i.sku === sku);
  if (!item) return;
  item.quantity += delta;
  state.cart = state.cart.filter((i) => i.quantity > 0);
  saveCart();
  renderCart();
}

function renderCheckoutSummary() {
  const lines   = cartLines();
  const summary = totals();
  checkoutSummary.innerHTML = `
    ${lines.map((i) => `<div class="summary-line"><span>${i.quantity} × ${i.name}</span><strong>${money(i.netPrice * i.quantity)}</strong></div>`).join("")}
    <div class="summary-line"><span>Versand</span><strong>${money(summary.shipping)}</strong></div>
    <div class="summary-line"><span>Umsatzsteuer</span><strong>${money(summary.vat)}</strong></div>
    <div class="summary-line total-line"><span>Gesamt</span><strong>${money(summary.total)}</strong></div>
  `;
  return { lines, summary };
}

// ─── Checkout → Supabase ──────────────────────────────────────
function renderCheckoutAccount() {
  const { customer, address } = currentProfile;
  if (!customer) {
    checkoutAccountHeadline.textContent = "Account aktiv";
    checkoutAccountStatus.textContent = "Bitte speichere einmal deine Daten im Account. Danach wird die Bestellung ohne erneute Eingabe erstellt.";
    confirmCheckoutButton.disabled = true;
    return;
  }

  const missing = !customer.first_name || !customer.last_name || !customer.email || !address?.line1 || !address?.postal_code || !address?.city;
  checkoutAccountHeadline.textContent = "Angemeldet";
  checkoutAccountStatus.textContent = missing
    ? "Account erkannt. Vervollstaendige deine Daten im Account, dann uebernimmt die Kasse alles automatisch."
    : "Account erkannt. Liefer- und Rechnungsdaten werden automatisch verwendet, ohne sie hier erneut anzuzeigen.";
  confirmCheckoutButton.disabled = missing || cartLines().length === 0;
}

function renderCheckoutPage() {
  renderCheckoutSummary();
  renderCheckoutAccount();
}

async function openCheckout() {
  if (cartLines().length === 0) return;
  const { data: { user } } = await sb.auth.getUser();
  if (!user) {
    pendingCheckoutAfterAuth = true;
    cartPanel.classList.remove("open");
    cartPanel.setAttribute("aria-hidden", "true");
    showView("account");
    openAuthDialog("login");
    return;
  }

  await prefillCheckout();
  cartPanel.classList.remove("open");
  cartPanel.setAttribute("aria-hidden", "true");
  showView("checkout");
  renderCheckoutPage();
}

async function completeOrder() {
  const lines   = cartLines();
  const summary = totals();
  const { customer, address } = currentProfile;
  if (!customer || !address) {
    alert("Bitte speichere zuerst deine persoenlichen Daten im Account.");
    showView("account");
    return;
  }
  const email = customer.email;

  const submitBtn = confirmCheckoutButton;
  submitBtn.textContent = "Wird verarbeitet…";
  submitBtn.disabled    = true;

  try {
    // 1. Bestellnummer
    const allOrders  = await sbFetch("GET", "orders?select=id");
    const seq        = String((allOrders?.length ?? 0) + 1).padStart(4, "0");
    const orderNumber   = `KA-2026-${seq}`;
    const invoiceNumber = `RE-2026-${seq}`;

    // 4. Bestellung (status=paid → Trigger → Make)
    const [order] = await sbFetch("POST", "orders", {
      order_number:       orderNumber,
      customer_id:        customer.id,
      billing_address_id: address.id,
      shipping_address_id:address.id,
      status:             "paid",
      subtotal_cents:     Math.round(summary.subtotal * 100),
      shipping_cents:     Math.round(summary.shipping * 100),
      vat_cents:          Math.round(summary.vat     * 100),
      total_cents:        Math.round(summary.total   * 100),
      paid_at:            new Date().toISOString(),
    });

    // 5. Bestellpositionen
    const skus      = lines.map((l) => l.sku);
    const dbProds   = await sbFetch("GET", `products?sku=in.(${skus.join(",")})&select=id,sku`);
    const skuToId   = Object.fromEntries((dbProds || []).map((p) => [p.sku, p.id]));

    for (const line of lines) {
      const productId = skuToId[line.sku];
      if (!productId) continue;
      await sbFetch("POST", "order_items", {
        order_id:             order.id,
        product_id:           productId,
        quantity:             line.quantity,
        unit_net_price_cents: Math.round(line.netPrice * 100),
        line_total_cents:     Math.round(line.netPrice * line.quantity * 100),
      });
    }

    // 6. Fertig
    state.cart = [];
    saveCart();
    renderCart();
    cartPanel.classList.remove("open");
    cartPanel.setAttribute("aria-hidden", "true");
    showView("home");

    successText.textContent = `Bestellung ${orderNumber} angelegt. Bestellbestätigung mit Rechnung ${invoiceNumber} wurde an ${email} versendet.`;
    successDialog.showModal();
  } catch (err) {
    console.error("Checkout-Fehler:", err);
    alert("Fehler beim Speichern der Bestellung:\n\n" + err.message);
  } finally {
    submitBtn.textContent = "Kauf abschließen";
    submitBtn.disabled    = false;
  }
}

// ─── Event-Listener ───────────────────────────────────────────
document.addEventListener("click", (e) => {
  if (e.target.dataset.add)      addToCart(e.target.dataset.add);
  if (e.target.dataset.inc)      changeQuantity(e.target.dataset.inc,  1);
  if (e.target.dataset.dec)      changeQuantity(e.target.dataset.dec, -1);
  if (e.target.dataset.category) {
    state.category = e.target.dataset.category;
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
closeSuccessButton.addEventListener("click", () => successDialog.close());
accountBackHomeButton.addEventListener("click", () => showView("home"));
confirmCheckoutButton.addEventListener("click", completeOrder);
backToCartButton.addEventListener("click", () => {
  showView("home");
  cartPanel.classList.add("open");
  cartPanel.setAttribute("aria-hidden", "false");
});
editAccountFromCheckout.addEventListener("click", async () => {
  const { data: { user } } = await sb.auth.getUser();
  if (user) await loadAccountProfile(user);
  showView("account");
});

// ─── Init ─────────────────────────────────────────────────────
renderFilters();
renderProducts();
renderCart();
showView("home");
