import { prisma } from "./prisma";

export type ModuleProgress = {
  moduleId: string;
  name: string;
  total: number;
  done: number;
  inProgress: number;
  blocked: number;
  percent: number;
};

export async function getWorkspaceProgress(workspaceId: string) {
  const modules = await prisma.protocolModule.findMany({
    orderBy: { sortOrder: "asc" },
    include: {
      sections: {
        include: {
          _count: { select: { items: true } },
        },
      },
    },
  });

  const states = await prisma.workspaceItemState.findMany({
    where: { workspaceId },
    select: {
      status: true,
      protocolItemId: true,
      item: { select: { section: { select: { moduleId: true } } } },
    },
  });

  const byModule = new Map<
    string,
    { done: number; inProgress: number; blocked: number }
  >();

  for (const s of states) {
    const mid = s.item.section.moduleId;
    const cur = byModule.get(mid) || { done: 0, inProgress: 0, blocked: 0 };
    if (s.status === "DONE") cur.done++;
    else if (s.status === "IN_PROGRESS") cur.inProgress++;
    else if (s.status === "BLOCKED") cur.blocked++;
    byModule.set(mid, cur);
  }

  const moduleProgress: ModuleProgress[] = modules.map((m) => {
    const total = m.sections.reduce((acc, s) => acc + s._count.items, 0);
    const counts = byModule.get(m.id) || { done: 0, inProgress: 0, blocked: 0 };
    const percent = total === 0 ? 0 : Math.round((counts.done / total) * 100);
    return {
      moduleId: m.id,
      name: m.name,
      total,
      done: counts.done,
      inProgress: counts.inProgress,
      blocked: counts.blocked,
      percent,
    };
  });

  const totalItems = moduleProgress.reduce((a, m) => a + m.total, 0);
  const totalDone = moduleProgress.reduce((a, m) => a + m.done, 0);
  const overallPercent =
    totalItems === 0 ? 0 : Math.round((totalDone / totalItems) * 100);

  return { moduleProgress, totalItems, totalDone, overallPercent };
}
