# Big Pipeline OS

Operator MVP for delivering Big Pipeline growth consulting protocols — workspaces, seeded checklists (~18 modules / ~1,492 items), progress tracking, and workspace context.

**Brand:** Big Pipeline only. No third-party mentor branding in the UI.

## Requirements

- Node.js 18+ (20 recommended)
- npm

## Setup

```bash
cd bigpipeline-os
cp .env.example .env
npm install
npm run db:push
npm run db:seed
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Dev server |
| `npm run build` / `npm start` | Production |
| `npm run db:push` | Apply Prisma schema to SQLite |
| `npm run db:seed` | Import `prisma/data/protocol-seed.json` |
| `npm run db:reset` | Wipe DB + re-seed protocol library |

## Environment

Copy `.env.example` → `.env`:

```
DATABASE_URL="file:./dev.db"
```

SQLite file is created under `prisma/dev.db` (gitignored).

## Usage

1. **New workspace** — name, client, niche, phase (Direction / Validation / Scaling), context notes.
2. Open a workspace → see **module progress** on the engagement board.
3. Click a module → checklist; set items to To do / In progress / Done / Blocked; add per-item notes.
4. Edit workspace context anytime from the sidebar.

## Re-seed protocol data

```bash
npm run db:seed
```

This replaces the protocol library (modules / sections / items) and clears item status rows. Workspace records remain; progress is reset because statuses are wiped.

To fully reset the DB:

```bash
npm run db:reset
```

## Stack

- Next.js 14 (App Router) + TypeScript + Tailwind
- Prisma + SQLite
- Server Actions for mutations

## Out of scope (this prototype)

- Auth / multi-user
- Agent draft generation (deferred until plan upgrade)
- CRM / ads / LinkedIn integrations
- Client portal

## License

Private — Big Pipeline.
