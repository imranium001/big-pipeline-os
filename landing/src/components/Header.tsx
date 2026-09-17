import { getCalendarHref } from "@/lib/config";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-bp-border/80 bg-bp-bg/90 backdrop-blur-md">
      <div className="container-wide flex h-14 items-center justify-between sm:h-16">
        <a href="#top" className="group flex items-center gap-2.5">
          <span
            className="flex h-7 w-7 items-center justify-center rounded bg-bp-accent text-xs font-bold text-bp-bg"
            aria-hidden
          >
            BP
          </span>
          <span className="text-sm font-semibold tracking-tight text-bp-text sm:text-base">
            Big Pipeline
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-bp-muted md:flex">
          <a href="#method" className="hover:text-bp-text transition">
            Method
          </a>
          <a href="#how-it-works" className="hover:text-bp-text transition">
            How it works
          </a>
          <a href="#faq" className="hover:text-bp-text transition">
            FAQ
          </a>
        </nav>
        <a href={getCalendarHref()} className="btn-primary !px-4 !py-2 text-sm">
          Book session
        </a>
      </div>
    </header>
  );
}
