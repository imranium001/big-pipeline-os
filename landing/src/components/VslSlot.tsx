import { hasLiveVsl, siteConfig, toEmbedUrl } from "@/lib/config";

export function VslSlot() {
  const live = hasLiveVsl();
  const embed = live ? toEmbedUrl(siteConfig.vslUrl) : null;

  return (
    <div className="relative w-full overflow-hidden rounded-lg border border-bp-border bg-bp-elevated shadow-2xl shadow-black/40">
      <div className="relative aspect-video w-full">
        {embed ? (
          <iframe
            src={embed}
            title="Big Pipeline VSL"
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-[#161618] to-[#0e0e10]">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-bp-border bg-bp-surface/80">
              <svg
                className="ml-1 h-7 w-7 text-bp-accent"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <div className="text-center px-4">
              <p className="text-lg font-semibold text-bp-text sm:text-xl">
                VSL coming soon
              </p>
              <p className="mt-1.5 max-w-sm text-sm text-bp-muted">
                Watch how funded B2B teams install a pipeline system — not another
                agency scramble.
              </p>
            </div>
            <a
              href="#how-it-works"
              className="mt-1 text-sm font-medium text-bp-accent hover:underline"
            >
              Or scroll to how it works ↓
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
