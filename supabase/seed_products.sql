-- ============================================================
-- Seed: Kara Produktkatalog
-- Einmalig ausführen in: Supabase Dashboard -> SQL Editor
-- ============================================================

INSERT INTO public.products (sku, name, description, net_price_cents, vat_rate, active)
VALUES
  ('KA-COT-01', 'Double Face Coat Onyx', 'Langer Wollmantel mit breiter Schulter, verdeckter Knopfleiste und schwerem Fall.', 28990, 0.19, true),
  ('KA-BMB-02', 'Leather Bomber Noir', 'Kurzer Bomber mit glatter Oberfläche, kompaktem Bund und edlem Hardware-Finish.', 34990, 0.19, true),
  ('KA-PUF-13', 'Puffer Jacket Carbon', 'Voluminöse Puffer-Jacke in mattem Schwarz mit hoher Kapuze und cleaner Nahtführung.', 23990, 0.19, true),
  ('KA-CRG-14', 'Cargo Jacket Slate', 'Technische Cargo-Jacke mit großen Taschen, geradem Schnitt und zurückhaltendem Branding.', 18990, 0.19, true),
  ('KA-HDY-07', 'Kara Logo Hoodie', 'Schwerer Hoodie aus Premium-Jersey mit klarer Silhouette und tonal wirkendem Kara-Logo.', 12990, 0.19, true),
  ('KA-TEE-08', 'Mercerized Tee Ivory', 'Cleanes Premium-Shirt mit leichtem Glanz, festem Kragen und geradem Saum.', 6990, 0.19, true),
  ('KA-ZIP-15', 'Zip Hoodie Washed Black', 'Verwaschener Zip Hoodie mit schwerem Reißverschluss und entspannter Passform.', 13990, 0.19, true),
  ('KA-LST-16', 'Longsleeve Bone', 'Langes Jersey-Shirt in gebrochenem Weiß mit etwas breiterem Ärmel und trockenem Griff.', 7990, 0.19, true),
  ('KA-DNM-09', 'Wide Denim Black', 'Dunkler Denim mit weitem Bein, tiefer Leibhöhe und minimalem Branding.', 14990, 0.19, true),
  ('KA-TRS-05', 'Wide Trouser Graphite', 'Weite Anzughose mit Bundfalte, fließendem Bein und modernem Cropped-Fit.', 12990, 0.19, true),
  ('KA-CRG-17', 'Nylon Cargo Pant', 'Gerade Cargohose mit leichten Nylonflächen, verdeckten Taschen und verstellbarem Saum.', 15990, 0.19, true),
  ('KA-SWT-18', 'Heavy Sweatpant Ash', 'Dichte Sweatpants mit weitem Bein, sauberer Kordel und minimalistischer Verarbeitung.', 10990, 0.19, true),
  ('KA-SNK-19', 'Court Sneaker Black', 'Schwarz-weißer Court Sneaker mit glatter Oberfläche und ruhiger, klassischer Linie.', 15990, 0.19, true),
  ('KA-BOT-20', 'Leather Boot Noir', 'Schwerer Lederboot mit kantiger Sohle, cleanem Schaft und hochwertigem Finish.', 24990, 0.19, true),
  ('KA-LOF-21', 'Chunky Loafer Black', 'Moderner Loafer mit breiter Sohle, glänzendem Obermaterial und reduzierter Form.', 18990, 0.19, true),
  ('KA-KNT-03', 'Merino Knit Stone', 'Weicher Merino-Strick mit entspannter Silhouette und cleanem Rundhalsausschnitt.', 13990, 0.19, true),
  ('KA-KNT-04', 'Ribbed Cardigan Espresso', 'Gerippter Cardigan in dunklem Braun mit tiefem Ausschnitt und schweren Knöpfen.', 15990, 0.19, true),
  ('KA-BAG-11', 'Structured Tote Black', 'Architektonische Tote Bag mit cleanem Volumen und genug Platz für den Alltag.', 11990, 0.19, true),
  ('KA-CAP-12', 'Wool Cap Charcoal', 'Flache Wool Cap mit tonal gesticktem Kara-Zeichen und verstellbarem Lederriemen.', 5990, 0.19, true),
  ('KA-GLV-22', 'Leather Glove Black', 'Schmale Lederhandschuhe mit weichem Futter und eleganter Linienführung.', 8990, 0.19, true)
ON CONFLICT (sku) DO UPDATE SET
  name             = EXCLUDED.name,
  description      = EXCLUDED.description,
  net_price_cents  = EXCLUDED.net_price_cents,
  vat_rate         = EXCLUDED.vat_rate,
  active           = EXCLUDED.active;
