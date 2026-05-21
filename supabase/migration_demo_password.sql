-- ============================================================
-- Migration: Demo-Passwort im Klartext speichern
-- NUR fuer den IDP-Demonstrator – niemals in Produktion!
-- Einmalig ausfuehren in: Supabase Dashboard → SQL Editor
-- ============================================================

ALTER TABLE public.customers
  ADD COLUMN IF NOT EXISTS demo_password text;

-- UPDATE-Recht fuer authenticated (damit JS das Feld befuellen darf)
-- Grant bereits in migration_auth.sql enthalten (UPDATE ON customers)
