-- ============================================================
-- Migration: Make-Integration & RLS-Policies
-- Projekt: Kara – IDP-Demonstrator
-- Idempotent: kann mehrfach ausgefuehrt werden
-- ============================================================

-- 1. pg_net aktivieren
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

-- ============================================================
-- 2. RLS-Policies: Website (anon) darf schreiben
-- ============================================================

DROP POLICY IF EXISTS "anon_insert_customers"   ON public.customers;
DROP POLICY IF EXISTS "anon_insert_addresses"   ON public.addresses;
DROP POLICY IF EXISTS "anon_insert_orders"      ON public.orders;
DROP POLICY IF EXISTS "anon_insert_order_items" ON public.order_items;
DROP POLICY IF EXISTS "anon_read_products"      ON public.products;
DROP POLICY IF EXISTS "anon_read_invoices"      ON public.invoices;
DROP POLICY IF EXISTS "anon_read_orders"        ON public.orders;

CREATE POLICY "anon_insert_customers"   ON public.customers   FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "anon_insert_addresses"   ON public.addresses   FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "anon_insert_orders"      ON public.orders      FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "anon_insert_order_items" ON public.order_items FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "anon_read_products"      ON public.products    FOR SELECT TO anon USING (active = true);
CREATE POLICY "anon_read_invoices"      ON public.invoices    FOR SELECT TO anon USING (true);
-- Bestellzaehler fuer Bestellnummer-Generierung
CREATE POLICY "anon_read_orders"        ON public.orders      FOR SELECT TO anon USING (true);

-- ============================================================
-- 3. RLS-Policies: Make (anon-Key) darf schreiben
-- ============================================================

DROP POLICY IF EXISTS "make_insert_invoices"     ON public.invoices;
DROP POLICY IF EXISTS "make_update_order_status" ON public.orders;

CREATE POLICY "make_insert_invoices"
  ON public.invoices FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "make_update_order_status"
  ON public.orders FOR UPDATE TO anon
  USING (true)
  WITH CHECK (status IN ('invoice_pending', 'invoice_draft_created', 'completed'));

-- ============================================================
-- 4. Trigger-Funktion: Supabase → Make-Webhook
-- Webhook-URL: https://hook.eu1.make.com/vm3pwrsejd6kr5guweytn17da2h237v7
-- API-Key Header: x-make-apikey: kara-webhook-2026-secure
-- (Key muss auch im Make-Webhook unter API Key Authentication eingetragen sein)
-- ============================================================

CREATE OR REPLACE FUNCTION public.notify_make_order_paid()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_customer  jsonb;
  v_address   jsonb;
  v_items     jsonb;
  v_payload   jsonb;
BEGIN
  IF NEW.status = 'paid' AND (OLD IS NULL OR OLD.status IS DISTINCT FROM 'paid') THEN

    SELECT to_jsonb(c) INTO v_customer
    FROM public.customers c WHERE c.id = NEW.customer_id;

    SELECT to_jsonb(a) INTO v_address
    FROM public.addresses a WHERE a.id = NEW.billing_address_id;

    SELECT jsonb_agg(jsonb_build_object(
      'product_name',         p.name,
      'sku',                  p.sku,
      'quantity',             oi.quantity,
      'unit_net_price_cents', oi.unit_net_price_cents,
      'line_total_cents',     oi.line_total_cents
    )) INTO v_items
    FROM public.order_items oi
    JOIN public.products p ON p.id = oi.product_id
    WHERE oi.order_id = NEW.id;

    v_payload := jsonb_build_object(
      'order',           to_jsonb(NEW),
      'customer',        v_customer,
      'billing_address', v_address,
      'items',           COALESCE(v_items, '[]'::jsonb)
    );

    PERFORM net.http_post(
      url     := 'https://hook.eu1.make.com/vm3pwrsejd6kr5guweytn17da2h237v7',
      body    := v_payload::text,
      headers := '{"Content-Type": "application/json", "x-make-apikey": "kara-webhook-2026-secure"}'::jsonb
    );

  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_order_paid_notify_make ON public.orders;
CREATE TRIGGER trg_order_paid_notify_make
  AFTER INSERT OR UPDATE OF status
  ON public.orders
  FOR EACH ROW
  EXECUTE FUNCTION public.notify_make_order_paid();

-- ============================================================
-- Nachtraegliche Ergaenzung: SELECT-Policies fuer anon
-- (benoetigt fuer Kunden-Duplikatpruefung im Checkout)
-- ============================================================
DROP POLICY IF EXISTS "anon_read_customers" ON public.customers;
DROP POLICY IF EXISTS "anon_read_addresses" ON public.addresses;

CREATE POLICY "anon_read_customers"
  ON public.customers FOR SELECT TO anon USING (true);

CREATE POLICY "anon_read_addresses"
  ON public.addresses FOR SELECT TO anon USING (true);
