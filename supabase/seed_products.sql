-- ============================================================
-- Seed: Kara Produktkatalog
-- Einmalig ausfuehren in: Supabase Dashboard → SQL Editor
-- ============================================================

INSERT INTO public.products (sku, name, description, net_price_cents, vat_rate, active)
VALUES
  ('KA-COT-01', 'Double Face Coat Onyx',    'Langer Wollmantel mit breiter Schulter, verdeckter Knopfleiste und schwerem Fall.',          28990, 0.19, true),
  ('KA-BMB-02', 'Leather Bomber Noir',      'Kurzer Bomber mit glatter Oberflaeche, kompaktem Bund und edlem Hardware-Finish.',            34990, 0.19, true),
  ('KA-KNT-03', 'Merino Knit Stone',        'Weicher Merino-Strick mit entspannter Silhouette und cleanem Rundhalsausschnitt.',            13990, 0.19, true),
  ('KA-KNT-04', 'Ribbed Cardigan Espresso', 'Gerippter Cardigan in dunklem Braun mit tiefem Ausschnitt und schweren Knoepfen.',            15990, 0.19, true),
  ('KA-TRS-05', 'Wide Trouser Graphite',    'Weite Anzughose mit Bundfalte, fliessendem Bein und modernem Cropped-Fit.',                   12990, 0.19, true),
  ('KA-BLZ-06', 'Relaxed Blazer Black',     'Unstrukturierter Blazer mit langen Revers und einer Silhouette wie aus dem Editorial.',       21990, 0.19, true),
  ('KA-HDY-07', 'Heavy Hoodie Ash',         'Luxurioser Heavyweight-Hoodie ohne Print, innen weich und aussen trocken im Griff.',          11990, 0.19, true),
  ('KA-TEE-08', 'Mercerized Tee Ivory',     'Cleanes Premium-Shirt mit leichtem Glanz, festerem Kragen und geradem Saum.',                  6990, 0.19, true),
  ('KA-DNM-09', 'Raw Denim Wide Black',     'Dunkler Raw Denim mit weitem Bein, tiefer Leibhoehe und minimalem Branding.',                 14990, 0.19, true),
  ('KA-SHR-10', 'Silk Shirt Bone',          'Fliessendes Hemd mit camp collar, matter Seidenoptik und entspannter Laenge.',                12990, 0.19, true),
  ('KA-BAG-11', 'Structured Tote Black',    'Architektonische Tote Bag mit cleanem Volumen und genuegend Platz fuer den Alltag.',          11990, 0.19, true),
  ('KA-CAP-12', 'Wool Cap Charcoal',        'Flache Wool Cap mit tonal gesticktem Kara-Zeichen und verstellbarem Lederriemen.',             5990, 0.19, true)
ON CONFLICT (sku) DO UPDATE SET
  name             = EXCLUDED.name,
  description      = EXCLUDED.description,
  net_price_cents  = EXCLUDED.net_price_cents,
  vat_rate         = EXCLUDED.vat_rate,
  active           = EXCLUDED.active;
