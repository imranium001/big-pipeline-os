"use client";

import { useTransition } from "react";
import { updateItemStatus } from "@/lib/actions";
import { STATUS_LABELS, type ItemStatus } from "@/lib/types";

const OPTIONS: ItemStatus[] = ["TODO", "IN_PROGRESS", "DONE", "BLOCKED"];

const COLORS: Record<ItemStatus, string> = {
  TODO: "border-zinc-300 bg-white text-zinc-700",
  IN_PROGRESS: "border-amber-300 bg-amber-50 text-amber-900",
  DONE: "border-emerald-300 bg-emerald-50 text-emerald-900",
  BLOCKED: "border-rose-300 bg-rose-50 text-rose-900",
};

export function StatusSelect({
  workspaceId,
  itemId,
  status,
}: {
  workspaceId: string;
  itemId: string;
  status: ItemStatus;
}) {
  const [pending, start] = useTransition();

  return (
    <select
      value={status}
      disabled={pending}
      onChange={(e) => {
        const next = e.target.value as ItemStatus;
        start(() => updateItemStatus(workspaceId, itemId, next));
      }}
      className={`rounded-md border px-2 py-1 text-xs font-medium outline-none focus:ring-2 focus:ring-zinc-400 disabled:opacity-60 ${COLORS[status]}`}
      aria-label="Item status"
    >
      {OPTIONS.map((o) => (
        <option key={o} value={o}>
          {STATUS_LABELS[o]}
        </option>
      ))}
    </select>
  );
}
