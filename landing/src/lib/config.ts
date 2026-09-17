export const siteConfig = {
  name: "Big Pipeline",
  domain: "bigpipeline.io",
  email: "contact@bigpipeline.io",
  growthViewUrl: "https://growthview.lovable.app/app",
  calendarUrl:
    process.env.NEXT_PUBLIC_CALENDAR_URL?.trim() || "",
  vslUrl: process.env.NEXT_PUBLIC_VSL_URL?.trim() || "",
} as const;

export function getCalendarHref(): string {
  return siteConfig.calendarUrl || "#book";
}

export function hasLiveCalendar(): boolean {
  return Boolean(siteConfig.calendarUrl);
}

export function hasLiveVsl(): boolean {
  return Boolean(siteConfig.vslUrl);
}

/** Turn a YouTube/Loom/Vimeo watch URL into an embeddable iframe src when possible. */
export function toEmbedUrl(url: string): string | null {
  if (!url) return null;
  try {
    const u = new URL(url);
    // YouTube
    if (
      u.hostname.includes("youtube.com") ||
      u.hostname.includes("youtu.be")
    ) {
      let id = u.searchParams.get("v");
      if (!id && u.hostname.includes("youtu.be")) {
        id = u.pathname.slice(1);
      }
      if (!id && u.pathname.startsWith("/embed/")) {
        return url;
      }
      if (id) return `https://www.youtube.com/embed/${id}`;
    }
    // Loom
    if (u.hostname.includes("loom.com")) {
      if (u.pathname.includes("/embed/")) return url;
      const match = u.pathname.match(/\/share\/([a-zA-Z0-9]+)/);
      if (match) return `https://www.loom.com/embed/${match[1]}`;
    }
    // Vimeo
    if (u.hostname.includes("vimeo.com")) {
      if (u.hostname.includes("player.vimeo.com")) return url;
      const match = u.pathname.match(/\/(\d+)/);
      if (match) return `https://player.vimeo.com/video/${match[1]}`;
    }
    // Already an embed or unknown — use as-is in iframe
    return url;
  } catch {
    return null;
  }
}
