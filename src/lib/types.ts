export const PHASES = ["DIRECTION", "VALIDATION", "SCALING"] as const;
export type Phase = (typeof PHASES)[number];

export const STATUSES = ["TODO", "IN_PROGRESS", "DONE", "BLOCKED"] as const;
export type ItemStatus = (typeof STATUSES)[number];

export const PHASE_LABELS: Record<Phase, string> = {
  DIRECTION: "Direction",
  VALIDATION: "Validation",
  SCALING: "Scaling",
};

export const STATUS_LABELS: Record<ItemStatus, string> = {
  TODO: "To do",
  IN_PROGRESS: "In progress",
  DONE: "Done",
  BLOCKED: "Blocked",
};

export function isPhase(v: string): v is Phase {
  return (PHASES as readonly string[]).includes(v);
}

export function isStatus(v: string): v is ItemStatus {
  return (STATUSES as readonly string[]).includes(v);
}
