# Big Pipeline — Landing Page

Long-form marketing / sales letter page for [bigpipeline.io](https://bigpipeline.io).

Primary CTA: **Book a free GrowthView Direction Session**  
Brand: Big Pipeline only (no third-party agency branding).

## Stack

- Next.js 14 (App Router) + TypeScript + Tailwind CSS
- Deploy-ready for Vercel

## Run locally

```bash
cd bigpipeline-landing
cp .env.example .env.local   # optional — set calendar + VSL
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build && npm start   # production build
```

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_CALENDAR_URL` | Recommended | Cal.com / Calendly (or similar) booking URL. Primary CTA links here. If unset, CTAs scroll to `#book` with placeholder instructions. |
| `NEXT_PUBLIC_VSL_URL` | Optional | YouTube, Loom, or Vimeo URL. Converted to an embed when possible. If unset, shows a 16:9 “VSL coming soon” placeholder. |

Example `.env.local`:

```bash
NEXT_PUBLIC_CALENDAR_URL=https://cal.com/imran/growthview
NEXT_PUBLIC_VSL_URL=https://www.youtube.com/watch?v=xxxxxxxxxxx
```

Rebuild / redeploy after changing env vars (they are inlined at build time via `NEXT_PUBLIC_*`).

## Page sections (sales letter A1–K1)

1. Hero + VSL slot (A1)
2. Proof strip (A2)
3. Who for / not for (A3)
4. Core concept (A4)
5. Credibility (A5)
6. Method (B1/B2)
7. Options (C1)
8. Benefits / outcomes (E1)
9. How it works (F1)
10. Offer + CTA / book (G1)
11. Warning (H1)
12. FAQ (K1)
13. Final CTA + footer

## Deploy to Vercel

1. Push this repo to GitHub (already: `imranium001/bigpipeline-landing`).
2. In [Vercel](https://vercel.com): **Add New Project** → import `bigpipeline-landing`.
3. Framework: Next.js (auto-detected). Root directory: repo root.
4. Set Environment Variables:
   - `NEXT_PUBLIC_CALENDAR_URL`
   - `NEXT_PUBLIC_VSL_URL` (when ready)
5. Deploy. You’ll get a `*.vercel.app` URL.

### Point bigpipeline.io DNS

In your domain registrar / DNS host for `bigpipeline.io`:

1. In Vercel project → **Settings → Domains** → add `bigpipeline.io` and `www.bigpipeline.io`.
2. Follow Vercel’s DNS instructions (typical):
   - **Apex (`bigpipeline.io`)**: A record → `76.76.21.21` (or the IPs Vercel shows), **or** ALIAS/ANAME if your DNS supports it.
   - **www**: CNAME → `cname.vercel-dns.com` (or the target Vercel shows).
3. Wait for DNS propagation; Vercel issues TLS automatically.

## Contact

- Site: https://bigpipeline.io  
- Email: contact@bigpipeline.io  

## License

Private. All rights reserved.
