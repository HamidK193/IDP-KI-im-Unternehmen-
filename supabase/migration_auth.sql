-- ============================================================
-- Migration: Supabase Auth Integration
-- Einmalig ausfuehren in: Supabase Dashboard → SQL Editor
-- ============================================================

-- 1. user_id Spalte zu customers hinzufuegen
ALTER TABLE public.customers
  ADD COLUMN IF NOT EXISTS user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL;

CREATE UNIQUE INDEX IF NOT EXISTS customers_user_id_idx
  ON public.customers(user_id) WHERE user_id IS NOT NULL;

-- 2. GRANTs fuer authenticated-Rolle
GRANT SELECT, INSERT, UPDATE ON public.customers   TO authenticated;
GRANT SELECT, INSERT         ON public.addresses   TO authenticated;
GRANT SELECT, INSERT, UPDATE ON public.orders      TO authenticated;
GRANT SELECT, INSERT         ON public.order_items TO authenticated;
GRANT SELECT                 ON public.products    TO authenticated;
GRANT SELECT, INSERT         ON public.invoices    TO authenticated;

-- 3. RLS-Policies fuer authenticated
DROP POLICY IF EXISTS "auth_read_own_customer"   ON public.customers;
DROP POLICY IF EXISTS "auth_insert_customer"     ON public.customers;
DROP POLICY IF EXISTS "auth_insert_addresses"    ON public.addresses;
DROP POLICY IF EXISTS "auth_read_own_addresses"  ON public.addresses;
DROP POLICY IF EXISTS "auth_insert_orders"       ON public.orders;
DROP POLICY IF EXISTS "auth_read_own_orders"     ON public.orders;
DROP POLICY IF EXISTS "auth_insert_order_items"  ON public.order_items;
DROP POLICY IF EXISTS "auth_read_products"       ON public.products;
DROP POLICY IF EXISTS "auth_read_invoices"       ON public.invoices;

-- Kunden: eigenen Datensatz lesen und anlegen
CREATE POLICY "auth_read_own_customer"
  ON public.customers FOR SELECT TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "auth_insert_customer"
  ON public.customers FOR INSERT TO authenticated
  WITH CHECK (user_id = auth.uid());

-- Adressen
CREATE POLICY "auth_insert_addresses"
  ON public.addresses FOR INSERT TO authenticated
  WITH CHECK (true);

CREATE POLICY "auth_read_own_addresses"
  ON public.addresses FOR SELECT TO authenticated
  USING (true);

-- Bestellungen
CREATE POLICY "auth_insert_orders"
  ON public.orders FOR INSERT TO authenticated
  WITH CHECK (true);

CREATE POLICY "auth_read_own_orders"
  ON public.orders FOR SELECT TO authenticated
  USING (true);

-- Bestellpositionen
CREATE POLICY "auth_insert_order_items"
  ON public.order_items FOR INSERT TO authenticated
  WITH CHECK (true);

-- Produkte lesen
CREATE POLICY "auth_read_products"
  ON public.products FOR SELECT TO authenticated
  USING (active = true);

-- Rechnungen lesen
CREATE POLICY "auth_read_invoices"
  ON public.invoices FOR SELECT TO authenticated
  USING (true);
