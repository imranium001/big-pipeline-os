export function ProgressBar({
  percent,
  size = "md",
}: {
  percent: number;
  size?: "sm" | "md";
}) {
  const h = size === "sm" ? "h-1.5" : "h-2.5";
  const clamped = Math.max(0, Math.min(100, percent));
  return (
    <div className={`w-full overflow-hidden rounded-full bg-zinc-200 ${h}`}>
      <div
        className={`${h} rounded-full bg-zinc-900 transition-all`}
        style={{ width: `${clamped}%` }}
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
}
