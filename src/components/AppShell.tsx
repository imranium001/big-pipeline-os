import Link from "next/link";

export function AppShell({
  children,
  title,
  actions,
}: {
  children: React.ReactNode;
  title?: string;
  actions?: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-zinc-900 text-xs font-bold tracking-tight text-white">
                BP
              </span>
              <div className="leading-tight">
                <div className="text-sm font-semibold tracking-tight">
                  Big Pipeline OS
                </div>
                <div className="text-[11px] text-zinc-500">
                  Growth consulting delivery
                </div>
              </div>
            </Link>
            {title ? (
              <span className="hidden text-sm text-zinc-500 sm:inline">
                / {title}
              </span>
            ) : null}
          </div>
          <div className="flex items-center gap-2">{actions}</div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">{children}</main>
    </div>
  );
}
