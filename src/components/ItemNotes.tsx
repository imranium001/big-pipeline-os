"use client";

import { useState, useTransition } from "react";
import { updateItemNotes } from "@/lib/actions";

export function ItemNotes({
  workspaceId,
  itemId,
  initialNotes,
}: {
  workspaceId: string;
  itemId: string;
  initialNotes: string;
}) {
  const [open, setOpen] = useState(false);
  const [notes, setNotes] = useState(initialNotes);
  const [pending, start] = useTransition();

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-xs text-zinc-500 underline-offset-2 hover:text-zinc-800 hover:underline"
      >
        {initialNotes ? "Edit notes" : "Add notes"}
      </button>
    );
  }

  return (
    <div className="mt-2 space-y-2">
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        rows={3}
        className="w-full rounded-md border border-zinc-300 bg-white px-2 py-1.5 text-sm text-zinc-800 outline-none focus:ring-2 focus:ring-zinc-400"
        placeholder="Notes for this deliverable…"
      />
      <div className="flex gap-2">
        <button
          type="button"
          disabled={pending}
          onClick={() =>
            start(async () => {
              await updateItemNotes(workspaceId, itemId, notes);
              setOpen(false);
            })
          }
          className="rounded-md bg-zinc-900 px-2.5 py-1 text-xs font-medium text-white hover:bg-zinc-800 disabled:opacity-60"
        >
          {pending ? "Saving…" : "Save"}
        </button>
        <button
          type="button"
          onClick={() => {
            setNotes(initialNotes);
            setOpen(false);
          }}
          className="rounded-md px-2.5 py-1 text-xs text-zinc-600 hover:bg-zinc-100"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
