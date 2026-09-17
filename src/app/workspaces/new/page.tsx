import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { createWorkspace } from "@/lib/actions";
import { PHASE_LABELS, PHASES } from "@/lib/types";

export default function NewWorkspacePage() {
  return (
    <AppShell
      title="New workspace"
      actions={
        <Link
          href="/"
          className="rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm text-zinc-700 hover:bg-zinc-50"
        >
          Cancel
        </Link>
      }
    >
      <div className="mx-auto max-w-xl">
        <h1 className="text-2xl font-semibold tracking-tight">
          New engagement
        </h1>
        <p className="mt-1 text-sm text-zinc-600">
          Create a workspace for a client (or internal Big Pipeline work). The
          full protocol library will be available immediately.
        </p>

        <form action={createWorkspace} className="mt-8 space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-zinc-800"
            >
              Workspace name *
            </label>
            <input
              id="name"
              name="name"
              required
              placeholder="Acme Corp — Validation Sprint"
              className="mt-1 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-400"
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="clientName"
                className="block text-sm font-medium text-zinc-800"
              >
                Client name
              </label>
              <input
                id="clientName"
                name="clientName"
                placeholder="Acme Corp"
                className="mt-1 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-400"
              />
            </div>
            <div>
              <label
                htmlFor="niche"
                className="block text-sm font-medium text-zinc-800"
              >
                Niche / ICP
              </label>
              <input
                id="niche"
                name="niche"
                placeholder="B2B SaaS, Series A"
                className="mt-1 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-400"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="phase"
              className="block text-sm font-medium text-zinc-800"
            >
              Phase
            </label>
            <select
              id="phase"
              name="phase"
              defaultValue="DIRECTION"
              className="mt-1 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-400"
            >
              {PHASES.map((p) => (
                <option key={p} value={p}>
                  {PHASE_LABELS[p]}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="context"
              className="block text-sm font-medium text-zinc-800"
            >
              Context & notes
            </label>
            <textarea
              id="context"
              name="context"
              rows={5}
              placeholder="ICP, offer, pricing, links, constraints…"
              className="mt-1 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-400"
            />
          </div>
          <button
            type="submit"
            className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
          >
            Create workspace
          </button>
        </form>
      </div>
    </AppShell>
  );
}
