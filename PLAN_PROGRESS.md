# PLAN_PROGRESS.md — CFA Foothill Ranch

## Status
Maintenance mode. Live at [cfafoothill.com](https://cfafoothill.com). Public marketing site + `/tm-portal` internal utilities. All pages and all 11 form embeds (5 English Airtable + 1 JotForm + 5 Spanish Airtable) return HTTP 200 as of last check.

## Maintenance pass — 2026-07-31

- **Placeholders:** none found. Only `PASTE_`-string reference is a defensive fallback check in `portal-v2.html:705`, not a placeholder itself.
- **Health check:** 7/7 pages and 11/11 form embed URLs return 200 (`cfafoothill.com/`, `/tm-portal/`, `/tm-portal/portal-v2.html`, `/roadmap.html`, `/sitemap.xml`, `/robots.txt`, `/tm-portal/handbook.pdf`; all Airtable + JotForm embeds in both languages).
- **Uncommitted local edits** from a prior session (Spanish form URL updates in `portal-v2.html`, portfolio-link update to `mohammadzayed.com` across `index.html` + `tm-portal/index.html`, plus the new `BUGS.md`) are still sitting on `main` waiting for a commit — they are NOT on the deployed site yet. Ship when convenient.

## Real usage / impact — what you can cite

**What's verifiable from the code alone:**
- Live production site for a real business (Chick-fil-A Foothill Ranch, operated under Thornsberry Holdings LLC) — not a portfolio demo.
- Bilingual (English + Spanish) team member portal with 6 production form workflows: time punch, sick pay, change fund, call-out, TM survey, leader application.
- Zero-config CI/CD (GitHub `main` → Netlify auto-deploy). SEO indexed (Google Search Console verified via DNS TXT, sitemap + robots.txt served).
- Full i18n runtime language switch (Spanish form URLs graceful-fallback to English if a Spanish variant isn't defined).

**Numbers you need to pull yourself to make this quotable** — these aren't in the repo and I can't get them without your dashboard access:
1. **Airtable submission counts per form, last 90 days** — open each of the 5 Airtable base tables (Time Punch, Sick Pay, Change Fund, Call-Outs, TM Survey) → filter by created date → count. Gives you "X form submissions/month across the store."
2. **JotForm leader-application count** — JotForm dashboard → total submissions.
3. **Store TM count** — total roster, so you can say "serving ~N team members."
4. **Portal traffic (MAU/DAU)** — currently untracked. The portal has zero analytics. If you want a number, drop a Plausible or Netlify Analytics snippet into `portal-v2.html` for one month — cheap install, gives you real usage numbers to quote. (Out of scope for this pass; log as a bug if you want it.)

**Suggested resume line once you have the numbers** (fill in placeholders):
> *Ship and maintain the production website and internal team-member portal for a Chick-fil-A franchise (~N TMs, ~M form submissions/month). Bilingual (EN/ES) i18n, 6 form workflows integrating Airtable/JotForm/Netlify, zero-downtime CI/CD from GitHub.*

## Open items
See `BUGS.md` — 1 item (store events calendar).
