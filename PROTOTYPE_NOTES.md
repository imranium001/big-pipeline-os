# Big Pipeline OS — Prototype notes

## What works

- Next.js App Router + TypeScript + Tailwind UI (zinc B2B, Big Pipeline branding only)
- Prisma + SQLite local database
- Seed from `prisma/data/protocol-seed.json` (~18 modules, ~1,492 checklist items)
- Create / list / delete workspaces (engagements) with phase: Direction | Validation | Scaling
- Workspace context/notes (ICP, offer, pricing, links) editable on the engagement page
- Module progress board with % roll-up from Done items
- Module checklist: mark items todo / in_progress / done / blocked; per-item notes
- Dashboard overall progress across all modules

## Explicitly deferred

- **Draft with agent** / LLM integration (OpenAI / Anthropic / mock) — left out until Cloud Agents / API plan upgrade
- Auth (single-operator local MVP; no login)
- Client portal, billing, CRM/ads integrations
- Versioned artifacts attached to deliverables
- Import/export workspace progress JSON
- “Run module pack” batch actions

## Suggested next steps

1. Add email auth (or magic link) when multi-device / client access is needed
2. Agent drafts for Problem & Solution, Case Study, Sales Letter, Sales Script items
3. Artifacts table (versioned markdown) on deliverables + human review before Done
4. Soft-delete / archive workspaces; export progress JSON
5. Deploy (Vercel + Postgres) when moving off local SQLite

## Manual smoke check

```bash
npm install && npm run db:push && npm run db:seed && npm run dev
```

1. Create workspace “Demo — Acme”
2. Open **Sales Letter** (or any module)
3. Mark 2–3 items Done / In progress
4. Confirm % updates on module page and home dashboard
5. Save context notes and reload

## Build verified

`npm run build` should succeed after `db:push` + `db:seed`.
