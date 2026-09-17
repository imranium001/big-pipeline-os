"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "./prisma";
import { isPhase, isStatus, type Phase, type ItemStatus } from "./types";

export async function createWorkspace(formData: FormData) {
  const name = String(formData.get("name") || "").trim();
  const clientName = String(formData.get("clientName") || "").trim() || null;
  const niche = String(formData.get("niche") || "").trim() || null;
  const phaseRaw = String(formData.get("phase") || "DIRECTION");
  const context = String(formData.get("context") || "").trim();
  const phase: Phase = isPhase(phaseRaw) ? phaseRaw : "DIRECTION";

  if (!name) {
    throw new Error("Workspace name is required");
  }

  const ws = await prisma.workspace.create({
    data: { name, clientName, niche, phase, context },
  });

  redirect(`/workspaces/${ws.id}`);
}

export async function updateWorkspaceContext(
  workspaceId: string,
  formData: FormData
) {
  const name = String(formData.get("name") || "").trim();
  const clientName = String(formData.get("clientName") || "").trim() || null;
  const niche = String(formData.get("niche") || "").trim() || null;
  const phaseRaw = String(formData.get("phase") || "DIRECTION");
  const context = String(formData.get("context") || "");
  const phase: Phase = isPhase(phaseRaw) ? phaseRaw : "DIRECTION";

  if (!name) throw new Error("Workspace name is required");

  await prisma.workspace.update({
    where: { id: workspaceId },
    data: { name, clientName, niche, phase, context },
  });

  revalidatePath(`/workspaces/${workspaceId}`);
  revalidatePath("/");
}

export async function updateItemStatus(
  workspaceId: string,
  protocolItemId: string,
  status: string
) {
  if (!isStatus(status)) throw new Error("Invalid status");
  const s = status as ItemStatus;

  await prisma.workspaceItemState.upsert({
    where: {
      workspaceId_protocolItemId: { workspaceId, protocolItemId },
    },
    create: { workspaceId, protocolItemId, status: s },
    update: { status: s },
  });

  revalidatePath(`/workspaces/${workspaceId}`);
}

export async function updateItemNotes(
  workspaceId: string,
  protocolItemId: string,
  notes: string
) {
  await prisma.workspaceItemState.upsert({
    where: {
      workspaceId_protocolItemId: { workspaceId, protocolItemId },
    },
    create: { workspaceId, protocolItemId, notes, status: "TODO" },
    update: { notes },
  });

  revalidatePath(`/workspaces/${workspaceId}`);
}

export async function deleteWorkspace(workspaceId: string) {
  await prisma.workspace.delete({ where: { id: workspaceId } });
  redirect("/");
}
