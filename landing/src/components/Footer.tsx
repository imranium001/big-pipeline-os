export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-bp-border bg-bp-elevated py-10">
      <div className="container-wide flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-sm text-bp-muted">
          © {year} Big Pipeline ·{" "}
          <a
            href="https://bigpipeline.io"
            className="hover:text-bp-text transition"
          >
            bigpipeline.io
          </a>
        </p>
        <a
          href="mailto:contact@bigpipeline.io"
          className="text-sm text-bp-muted hover:text-bp-accent transition"
        >
          contact@bigpipeline.io
        </a>
      </div>
    </footer>
  );
}
