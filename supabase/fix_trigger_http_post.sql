-- ============================================================
-- Fix: notify_make_order_paid – body als jsonb statt text
-- Ausfuehren in: Supabase Dashboard → SQL Editor
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

    BEGIN
      PERFORM net.http_post(
        url     := 'https://hook.eu1.make.com/vm3pwrsejd6kr5guweytn17da2h237v7',
        body    := v_payload,
        params  := '{}'::jsonb,
        headers := '{"Content-Type": "application/json", "x-make-apikey": "kara-webhook-2026-secure"}'::jsonb
      );
    EXCEPTION WHEN OTHERS THEN
      -- Webhook-Fehler blockiert die Bestellung nicht
      RAISE WARNING 'notify_make_order_paid: Webhook fehlgeschlagen: %', SQLERRM;
    END;

  END IF;
  RETURN NEW;
END;
$$;
