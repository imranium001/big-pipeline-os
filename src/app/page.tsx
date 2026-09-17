import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { ProgressBar } from "@/components/ProgressBar";
import { prisma } from "@/lib/prisma";
import { getWorkspaceProgress } from "@/lib/progress";
import { PHASE_LABELS, type Phase } from "@/lib/types";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const moduleCount = await prisma.protocolModule.count();
  const itemCount = await prisma.protocolItem.count();
  const workspaces = await prisma.workspace.findMany({
    orderBy: { updatedAt: "desc" },
  });

  const withProgress = await Promise.all(
    workspaces.map(async (ws) => {
      const progress = await getWorkspaceProgress(ws.id);
      return { ws, progress };
    })
  );

  return (
    <AppShell
      actions={
        <Link
          href="/workspaces/new"
          className="rounded-md bg-zinc-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-zinc-800"
        >
          New workspace
        </Link>
      }
    >
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">Engagements</h1>
        <p className="mt-1 text-sm text-zinc-600">
          Operator dashboard for Big Pipeline delivery protocols.
          {moduleCount > 0 ? (
            <>
              {" "}
              Protocol library:{" "}
              <span className="font-medium text-zinc-800">
                {moduleCount} modules
              </span>
              ,{" "}
              <span className="font-medium text-zinc-800">
                {itemCount.toLocaleString()} items
              </span>
              .
            </>
          ) : (
            <>
              {" "}
              <span className="text-amber-700">
                Protocol not seeded yet — run{" "}
                <code className="rounded bg-amber-50 px-1 text-xs">
                  npm run db:seed
                </code>
                .
              </span>
            </>
          )}
        </p>
      </div>

      {withProgress.length === 0 ? (
        <div className="rounded-xl border border-dashed border-zinc-300 bg-white p-10 text-center">
          <p className="text-sm font-medium text-zinc-800">No workspaces yet</p>
          <p className="mt-1 text-sm text-zinc-500">
            Create a client engagement to start tracking protocol progress.
          </p>
          <Link
            href="/workspaces/new"
            className="mt-4 inline-flex rounded-md bg-zinc-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-zinc-800"
          >
            Create workspace
          </Link>
        </div>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2">
          {withProgress.map(({ ws, progress }) => (
            <li key={ws.id}>
              <Link
                href={`/workspaces/${ws.id}`}
                className="block rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:border-zinc-300 hover:shadow"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="font-semibold tracking-tight">{ws.name}</h2>
                    <p className="mt-0.5 text-sm text-zinc-500">
                      {ws.clientName || "No client name"}
                      {ws.niche ? ` · ${ws.niche}` : ""}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-zinc-600">
                    {PHASE_LABELS[ws.phase as Phase] || ws.phase}
                  </span>
                </div>
                <div className="mt-4 space-y-1.5">
                  <div className="flex justify-between text-xs text-zinc-500">
                    <span>Overall progress</span>
                    <span className="font-medium text-zinc-800">
                      {progress.overallPercent}% · {progress.totalDone}/
                      {progress.totalItems}
                    </span>
                  </div>
                  <ProgressBar percent={progress.overallPercent} />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </AppShell>
  );
}
