import { getCalendarHref } from "@/lib/config";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-bp-border bg-bp-bg/95 p-3 backdrop-blur-md md:hidden">
      <a
        href={getCalendarHref()}
        className="btn-primary w-full text-sm"
      >
        Book free Direction Session
      </a>
    </div>
  );
}
