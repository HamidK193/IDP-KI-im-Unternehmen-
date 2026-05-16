create table if not exists public.customers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  first_name text not null,
  last_name text not null,
  phone text,
  created_at timestamptz not null default now()
);

create table if not exists public.addresses (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid not null references public.customers(id) on delete cascade,
  line1 text not null,
  postal_code text not null,
  city text not null,
  country_code text not null default 'DE',
  is_billing boolean not null default true,
  is_shipping boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  sku text not null unique,
  name text not null,
  description text not null,
  net_price_cents integer not null check (net_price_cents >= 0),
  vat_rate numeric(5,4) not null check (vat_rate >= 0),
  active boolean not null default true
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  order_number text not null unique,
  customer_id uuid not null references public.customers(id),
  billing_address_id uuid not null references public.addresses(id),
  shipping_address_id uuid not null references public.addresses(id),
  status text not null check (status in ('created', 'paid', 'invoice_pending', 'invoice_draft_created', 'completed')),
  subtotal_cents integer not null check (subtotal_cents >= 0),
  shipping_cents integer not null check (shipping_cents >= 0),
  vat_cents integer not null check (vat_cents >= 0),
  total_cents integer not null check (total_cents >= 0),
  paid_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  product_id uuid not null references public.products(id),
  quantity integer not null check (quantity > 0),
  unit_net_price_cents integer not null check (unit_net_price_cents >= 0),
  line_total_cents integer not null check (line_total_cents >= 0)
);

create table if not exists public.invoices (
  id uuid primary key default gen_random_uuid(),
  invoice_number text not null unique,
  order_id uuid not null unique references public.orders(id),
  customer_id uuid not null references public.customers(id),
  status text not null check (status in ('draft', 'needs_review', 'approved', 'sent', 'rejected')),
  document_url text,
  issued_at timestamptz not null default now(),
  approved_at timestamptz,
  sent_at timestamptz
);

alter table public.customers enable row level security;
alter table public.addresses enable row level security;
alter table public.products enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;
alter table public.invoices enable row level security;
