import Link from "next/link";
import { notFound } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import { ProgressBar } from "@/components/ProgressBar";
import { deleteWorkspace, updateWorkspaceContext } from "@/lib/actions";
import { prisma } from "@/lib/prisma";
import { getWorkspaceProgress } from "@/lib/progress";
import { PHASE_LABELS, PHASES, type Phase } from "@/lib/types";

export const dynamic = "force-dynamic";

export default async function WorkspacePage({
  params,
}: {
  params: { id: string };
}) {
  const ws = await prisma.workspace.findUnique({ where: { id: params.id } });
  if (!ws) notFound();

  const { moduleProgress, overallPercent, totalDone, totalItems } =
    await getWorkspaceProgress(ws.id);

  const updateAction = updateWorkspaceContext.bind(null, ws.id);
  const deleteAction = deleteWorkspace.bind(null, ws.id);

  return (
    <AppShell
      title={ws.name}
      actions={
        <Link
          href="/"
          className="rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm text-zinc-700 hover:bg-zinc-50"
        >
          All workspaces
        </Link>
      }
    >
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">{ws.name}</h1>
          <p className="mt-1 text-sm text-zinc-600">
            {ws.clientName || "No client"}
            {ws.niche ? ` · ${ws.niche}` : ""} ·{" "}
            <span className="font-medium text-zinc-800">
              {PHASE_LABELS[ws.phase as Phase] || ws.phase}
            </span>
          </p>
        </div>
        <div className="min-w-[200px] space-y-1.5">
          <div className="flex justify-between text-xs text-zinc-500">
            <span>Overall</span>
            <span className="font-medium text-zinc-800">
              {overallPercent}% · {totalDone}/{totalItems}
            </span>
          </div>
          <ProgressBar percent={overallPercent} />
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <section className="lg:col-span-2">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Protocol modules
          </h2>
          <ul className="space-y-2">
            {moduleProgress.map((m) => (
              <li key={m.moduleId}>
                <Link
                  href={`/workspaces/${ws.id}/modules/${m.moduleId}`}
                  className="flex items-center gap-4 rounded-lg border border-zinc-200 bg-white px-4 py-3 transition hover:border-zinc-300 hover:shadow-sm"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="truncate font-medium text-zinc-900">
                        {m.name}
                      </span>
                      <span className="shrink-0 text-xs text-zinc-500">
                        {m.done}/{m.total}
                        {m.inProgress > 0 ? ` · ${m.inProgress} active` : ""}
                      </span>
                    </div>
                    <div className="mt-2">
                      <ProgressBar percent={m.percent} size="sm" />
                    </div>
                  </div>
                  <span className="shrink-0 text-xs font-medium text-zinc-400">
                    {m.percent}%
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          {moduleProgress.length === 0 ? (
            <p className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
              Protocol library empty. Run{" "}
              <code className="rounded bg-white px-1 text-xs">
                npm run db:seed
              </code>
              .
            </p>
          ) : null}
        </section>

        <aside className="space-y-6">
          <div className="rounded-xl border border-zinc-200 bg-white p-5">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
              Context & notes
            </h2>
            <form action={updateAction} className="mt-4 space-y-3">
              <div>
                <label className="block text-xs font-medium text-zinc-600">
                  Name
                </label>
                <input
                  name="name"
                  defaultValue={ws.name}
                  required
                  className="mt-1 w-full rounded-md border border-zinc-300 px-2.5 py-1.5 text-sm outline-none focus:ring-2 focus:ring-zinc-400"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-600">
                  Client
                </label>
                <input
                  name="clientName"
                  defaultValue={ws.clientName || ""}
                  className="mt-1 w-full rounded-md border border-zinc-300 px-2.5 py-1.5 text-sm outline-none focus:ring-2 focus:ring-zinc-400"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-600">
                  Niche
                </label>
                <input
                  name="niche"
                  defaultValue={ws.niche || ""}
                  className="mt-1 w-full rounded-md border border-zinc-300 px-2.5 py-1.5 text-sm outline-none focus:ring-2 focus:ring-zinc-400"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-600">
                  Phase
                </label>
                <select
                  name="phase"
                  defaultValue={ws.phase}
                  className="mt-1 w-full rounded-md border border-zinc-300 px-2.5 py-1.5 text-sm outline-none focus:ring-2 focus:ring-zinc-400"
                >
                  {PHASES.map((p) => (
                    <option key={p} value={p}>
                      {PHASE_LABELS[p]}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-600">
                  Brief
                </label>
                <textarea
                  name="context"
                  rows={6}
                  defaultValue={ws.context}
                  placeholder="ICP, offer, pricing, links…"
                  className="mt-1 w-full rounded-md border border-zinc-300 px-2.5 py-1.5 text-sm outline-none focus:ring-2 focus:ring-zinc-400"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-zinc-900 px-3 py-2 text-sm font-medium text-white hover:bg-zinc-800"
              >
                Save context
              </button>
            </form>
          </div>

          <form action={deleteAction}>
            <button
              type="submit"
              className="w-full rounded-md border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-medium text-rose-800 hover:bg-rose-100"
            >
              Delete workspace
            </button>
          </form>
        </aside>
      </div>
    </AppShell>
  );
}
