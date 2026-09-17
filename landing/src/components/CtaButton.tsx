import { getCalendarHref } from "@/lib/config";

type Props = {
  label?: string;
  className?: string;
  size?: "default" | "lg";
};

export function CtaButton({
  label = "Book a free GrowthView Direction Session",
  className = "",
  size = "default",
}: Props) {
  const sizeClass = size === "lg" ? "px-8 py-4 text-lg" : "";
  return (
    <a
      href={getCalendarHref()}
      className={`btn-primary ${sizeClass} ${className}`}
    >
      {label}
      <svg
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
        />
      </svg>
    </a>
  );
}
