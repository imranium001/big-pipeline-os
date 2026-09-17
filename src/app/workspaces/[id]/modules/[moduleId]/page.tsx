import Link from "next/link";
import { notFound } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import { ItemNotes } from "@/components/ItemNotes";
import { ProgressBar } from "@/components/ProgressBar";
import { StatusSelect } from "@/components/StatusSelect";
import { prisma } from "@/lib/prisma";
import { type ItemStatus } from "@/lib/types";

export const dynamic = "force-dynamic";

export default async function ModuleChecklistPage({
  params,
}: {
  params: { id: string; moduleId: string };
}) {
  const ws = await prisma.workspace.findUnique({ where: { id: params.id } });
  if (!ws) notFound();

  const mod = await prisma.protocolModule.findUnique({
    where: { id: params.moduleId },
    include: {
      sections: {
        orderBy: { sortOrder: "asc" },
        include: {
          items: { orderBy: { sortOrder: "asc" } },
        },
      },
    },
  });
  if (!mod) notFound();

  const itemIds = mod.sections.flatMap((s) => s.items.map((i) => i.id));
  const states = await prisma.workspaceItemState.findMany({
    where: { workspaceId: ws.id, protocolItemId: { in: itemIds } },
  });
  const stateMap = new Map(states.map((s) => [s.protocolItemId, s]));

  const total = itemIds.length;
  const done = states.filter((s) => s.status === "DONE").length;
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);

  return (
    <AppShell
      title={`${ws.name} / ${mod.name}`}
      actions={
        <Link
          href={`/workspaces/${ws.id}`}
          className="rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm text-zinc-700 hover:bg-zinc-50"
        >
          Back to modules
        </Link>
      }
    >
      <div className="mb-8">
        <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
          {ws.name}
        </p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight">
          {mod.name}
        </h1>
        <div className="mt-4 max-w-md space-y-1.5">
          <div className="flex justify-between text-xs text-zinc-500">
            <span>Module progress</span>
            <span className="font-medium text-zinc-800">
              {percent}% · {done}/{total}
            </span>
          </div>
          <ProgressBar percent={percent} />
        </div>
      </div>

      <div className="space-y-8">
        {mod.sections.map((section) => (
          <section key={section.id}>
            <h2 className="mb-3 border-b border-zinc-200 pb-2 text-sm font-semibold text-zinc-800">
              {section.name}
              <span className="ml-2 font-normal text-zinc-400">
                {section.items.length} items
              </span>
            </h2>
            <ul className="space-y-2">
              {section.items.map((item) => {
                const st = stateMap.get(item.id);
                const status = (st?.status || "TODO") as ItemStatus;
                const notes = st?.notes || "";
                return (
                  <li
                    key={item.id}
                    className="rounded-lg border border-zinc-200 bg-white px-4 py-3"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-zinc-900">
                          {item.title}
                        </p>
                        {item.action ? (
                          <p className="mt-1 text-xs text-zinc-500">
                            {item.action}
                          </p>
                        ) : null}
                        <div className="mt-2">
                          <ItemNotes
                            workspaceId={ws.id}
                            itemId={item.id}
                            initialNotes={notes}
                          />
                        </div>
                      </div>
                      <StatusSelect
                        workspaceId={ws.id}
                        itemId={item.id}
                        status={status}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </AppShell>
  );
}
