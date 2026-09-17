import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CtaButton } from "@/components/CtaButton";
import { VslSlot } from "@/components/VslSlot";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { FaqItem } from "@/components/FaqItem";
import { hasLiveCalendar, siteConfig } from "@/lib/config";

const faqs = [
  {
    q: "Is this an AI automation agency?",
    a: "No. Agents support a growth protocol; we own return. We don’t sell cheap cold-email bots — we install and pressure-test the system that makes channels pay.",
  },
  {
    q: "Do I need a big brand case study?",
    a: "No — we start with modelling and Validation. Aggregate proof today: $10M+ pipeline created and $3M+ closed for myself and clients. Named case studies unlock as rights clear.",
  },
  {
    q: "How fast to Validation?",
    a: "Typically scoped after the Direction Session. Validation runs about 1–3 months with a clear success metric (e.g. qualified appointment under a CAC cap).",
  },
  {
    q: "Remote or Toronto?",
    a: "Built for capital-rich B2B. Toronto-accessible preferred; remote is fine.",
  },
];

export default function HomePage() {
  return (
    <>
      <div id="top" />
      <Header />
      <main>
        {/* A1 — Hero + VSL */}
        <section className="border-b border-bp-border bg-gradient-to-b from-bp-elevated to-bp-bg pb-16 pt-12 sm:pb-20 sm:pt-16">
          <div className="container-bp">
            <p className="section-label">For funded B2B founders & revenue leaders</p>
            <h1 className="font-serif text-3xl font-semibold leading-[1.15] tracking-tight text-bp-text sm:text-4xl lg:text-[2.75rem]">
              How to go from unpredictable pipeline to a{" "}
              <span className="text-bp-accent">growth system you can run</span> — in
              90 days or less — using agentic growth consulting.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-bp-soft sm:text-xl">
              In this page, I’m going to walk through how funded B2B companies
              install a <strong className="text-bp-text">pipeline system</strong>{" "}
              (not another agency scramble) using an agentic growth protocol.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CtaButton />
              <a href="#vsl" className="btn-secondary">
                Watch the VSL
              </a>
            </div>

            <div id="vsl" className="mt-10 scroll-mt-24 sm:mt-12">
              <VslSlot />
            </div>

            {/* A2 — Proof strip */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { stat: "$10M+", label: "Pipeline created" },
                { stat: "$3M+", label: "Closed for self & clients" },
                { stat: "90 days", label: "Target system install" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-bp-border bg-bp-surface/60 px-5 py-4 text-center"
                >
                  <p className="font-serif text-2xl font-semibold text-bp-accent sm:text-3xl">
                    {item.stat}
                  </p>
                  <p className="mt-1 text-sm text-bp-muted">{item.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-sm text-bp-muted">
              Method: performance growth consulting (Validation → Scaling) — not
              spray-and-pray outbound. Built GrowthView for Marketing → Enterprise
              Value modelling.
            </p>
          </div>
        </section>

        {/* A3 — Who for / not */}
        <section className="py-16 sm:py-20" id="who">
          <div className="container-bp">
            <p className="section-label">Fit check</p>
            <h2 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
              Who this is for — and who it isn’t
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="card-bp border-l-4 !border-l-[var(--bp-success)]">
                <h3 className="text-lg font-semibold text-bp-text">This is for you if</h3>
                <ul className="mt-4 space-y-3 text-bp-soft">
                  <li className="flex gap-3">
                    <span className="shrink-0 text-[var(--bp-success)]" aria-hidden>
                      ✓
                    </span>
                    <span>
                      You’re a founder, CEO, or CRO at a{" "}
                      <strong className="text-bp-text">capital-rich / funded B2B</strong>{" "}
                      company
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="shrink-0 text-[var(--bp-success)]" aria-hidden>
                      ✓
                    </span>
                    <span>
                      You have a real offer and some customers — distribution isn’t
                      repeatable yet
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="shrink-0 text-[var(--bp-success)]" aria-hidden>
                      ✓
                    </span>
                    <span>
                      You want pipeline economics you can see (CAC, payback, cash
                      trough, EV impact)
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="shrink-0 text-[var(--bp-success)]" aria-hidden>
                      ✓
                    </span>
                    <span>
                      You’re done paying for “activity” that doesn’t show return
                    </span>
                  </li>
                </ul>
              </div>
              <div className="card-bp border-l-4 !border-l-[var(--bp-danger)]">
                <h3 className="text-lg font-semibold text-bp-text">Not for you if</h3>
                <ul className="mt-4 space-y-3 text-bp-soft">
                  <li className="flex gap-3">
                    <span className="shrink-0 text-[var(--bp-danger)]" aria-hidden>
                      ✕
                    </span>
                    <span>You only want cheap AI cold-email automation</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="shrink-0 text-[var(--bp-danger)]" aria-hidden>
                      ✕
                    </span>
                    <span>You have nothing worth selling yet (no product signal)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="shrink-0 text-[var(--bp-danger)]" aria-hidden>
                      ✕
                    </span>
                    <span>
                      You’re looking for a generic marketing retainer with no
                      accountability to return
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <hr className="divider-bp container-bp !my-0 border-0 border-t" />

        {/* A4 — Core concept */}
        <section className="py-16 sm:py-20" id="concept">
          <div className="container-bp prose-bp">
            <p className="section-label">Core concept</p>
            <h2 className="mb-6 font-serif text-2xl font-semibold tracking-tight text-bp-text sm:text-3xl">
              You don’t have a channel problem. You have a system problem.
            </h2>
            <p>
              Most B2B teams don’t have a channel problem. They have a{" "}
              <strong>system</strong> problem: message, offer, funnel, sales, and
              spend aren’t tuned together — so ads and outbound feel expensive and
              random.
            </p>
            <p>
              <strong>Big Pipeline</strong> installs an{" "}
              <strong>agentic growth system</strong>: a proven delivery protocol as
              the operating system; agents run the repeatable work; a human owns
              judgment, live selling, product/price direction, and return.
            </p>
          </div>
        </section>

        {/* A5 — Credibility */}
        <section className="border-y border-bp-border bg-bp-elevated py-16 sm:py-20" id="about">
          <div className="container-bp">
            <p className="section-label">Credibility</p>
            <h2 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
              Built by someone who’s run the numbers — and closed the deals
            </h2>
            <div className="mt-6 prose-bp">
              <p>
                I’m <strong>Imran</strong> — founder of Big Pipeline. I’ve created{" "}
                <strong>$10M+ in pipeline</strong> and closed <strong>$3M+</strong>{" "}
                for myself and clients. I built{" "}
                <a
                  href={siteConfig.growthViewUrl}
                  className="text-bp-accent underline-offset-2 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GrowthView
                </a>{" "}
                so we can model marketing → customers → cash → enterprise value
                before we spend your time or money guessing.
              </p>
            </div>
          </div>
        </section>

        {/* B1 / B2 — Method */}
        <section className="py-16 sm:py-20" id="method">
          <div className="container-bp">
            <p className="section-label">The method</p>
            <h2 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
              What we actually install
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-bp-soft">
              We don’t sell “more emails.” We install and pressure-test the system
              that makes channels pay — then we scale it.
            </p>
            <ol className="mt-10 space-y-5">
              {[
                {
                  title: "Direction",
                  body: "GrowthView session: model your economics, run scenarios, leave with a clear next move.",
                },
                {
                  title: "Validation",
                  body: "Install message + funnel + channel tests with a measurable success metric (e.g. qualified appointment under a CAC cap).",
                },
                {
                  title: "Scaling",
                  body: "Scale what worked (fee + revenue share) with sales process and team install as needed.",
                },
                {
                  title: "Protocol OS",
                  body: "Delivery runs on a full checklist system — problem/solution → case studies → sales letter → VSL → funnel → outbound → sales → ads.",
                },
                {
                  title: "Agentic layer",
                  body: "Agents draft, research, and run ops under the protocol; you still get a human responsible for return.",
                },
              ].map((step, i) => (
                <li
                  key={step.title}
                  className="flex gap-4 rounded-lg border border-bp-border bg-bp-surface/40 p-5 sm:gap-5 sm:p-6"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-bp-accent/15 font-serif text-sm font-semibold text-bp-accent">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-bp-text">{step.title}</h3>
                    <p className="mt-1.5 text-bp-soft leading-relaxed">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* C1 — Options */}
        <section className="border-y border-bp-border bg-bp-elevated py-16 sm:py-20" id="options">
          <div className="container-bp">
            <p className="section-label">Your options</p>
            <h2 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
              Keep guessing — or install the system
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="card-bp opacity-80">
                <p className="text-xs font-semibold uppercase tracking-wider text-bp-muted">
                  Option 1
                </p>
                <h3 className="mt-2 text-xl font-semibold text-bp-text">Keep guessing</h3>
                <p className="mt-3 text-bp-soft leading-relaxed">
                  More freelancers, more tools, more AI automation demos. Pipeline
                  stays weather.
                </p>
              </div>
              <div className="card-bp ring-1 ring-bp-accent/40">
                <p className="text-xs font-semibold uppercase tracking-wider text-bp-accent">
                  Option 2
                </p>
                <h3 className="mt-2 text-xl font-semibold text-bp-text">
                  Install the system
                </h3>
                <p className="mt-3 text-bp-soft leading-relaxed">
                  Free Direction Session → Validation Sprint if fit → Scaling
                  partnership when unit economics work.
                </p>
                <div className="mt-6">
                  <CtaButton label="Start with Direction" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* E1 — Benefits */}
        <section className="py-16 sm:py-20" id="outcomes">
          <div className="container-bp">
            <p className="section-label">Outcomes</p>
            <h2 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
              What you walk away with
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Clarity on where yield dies in your funnel",
                "A niche-specific sales narrative that books meetings",
                "Known CPL / CAC before you scale spend",
                "A path from scramble → machine",
                "Case-study-grade process you can reuse",
                "Direction Memo within 48 hours of the session",
              ].map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 rounded-lg border border-bp-border bg-bp-surface/30 px-4 py-3.5"
                >
                  <span className="mt-0.5 text-bp-accent" aria-hidden>
                    →
                  </span>
                  <span className="text-bp-soft">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* F1 — How it works */}
        <section
          className="border-y border-bp-border bg-bp-elevated py-16 sm:py-20"
          id="how-it-works"
        >
          <div className="container-bp">
            <p className="section-label">How it works</p>
            <h2 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
              From first call to scaled pipeline
            </h2>
            <ol className="mt-10 space-y-0">
              {[
                "Book a free GrowthView Direction Session",
                "We model Marketing → EV and run simulations",
                "You get a short Direction Memo",
                "If fit: Validation Sprint (flat fee, clear metric)",
                "If validated: Growth Partnership to scale",
              ].map((step, i, arr) => (
                <li key={step} className="relative flex gap-5 pb-10 last:pb-0">
                  {i < arr.length - 1 && (
                    <span
                      className="absolute left-[15px] top-9 h-[calc(100%-1.5rem)] w-px bg-bp-border"
                      aria-hidden
                    />
                  )}
                  <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-bp-accent bg-bp-bg font-serif text-sm font-semibold text-bp-accent">
                    {i + 1}
                  </span>
                  <p className="pt-1 text-lg text-bp-text">{step}</p>
                </li>
              ))}
            </ol>
            <div className="mt-10">
              <CtaButton />
            </div>
          </div>
        </section>

        {/* G1 — Offer + CTA / Book */}
        <section className="py-16 sm:py-20" id="book">
          <div className="container-bp">
            <div className="card-bp bg-gradient-to-br from-bp-surface to-bp-elevated text-center sm:!p-12">
              <p className="section-label !mb-4">The offer</p>
              <h2 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
                Free GrowthView Direction Session
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-bp-soft">
                45–60 minutes: model your business, run scenarios, leave with a next
                move — even if that’s “do nothing with us.”
              </p>
              <p className="mx-auto mt-3 max-w-lg text-sm text-bp-muted">
                Risk reversal: the session is free. If it’s not useful, you’ve lost an
                hour — not a retainer.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3">
                <CtaButton size="lg" />
                {!hasLiveCalendar() && (
                  <div className="mt-4 max-w-md rounded-md border border-dashed border-bp-border bg-bp-bg/50 px-4 py-3 text-left text-sm text-bp-muted">
                    <p className="font-medium text-bp-soft">Calendar link not set yet</p>
                    <p className="mt-1">
                      Set{" "}
                      <code className="rounded bg-bp-surface px-1.5 py-0.5 text-bp-accent">
                        NEXT_PUBLIC_CALENDAR_URL
                      </code>{" "}
                      to your Cal.com / Calendly URL, or email{" "}
                      <a
                        href="mailto:contact@bigpipeline.io"
                        className="text-bp-accent hover:underline"
                      >
                        contact@bigpipeline.io
                      </a>{" "}
                      to book.
                    </p>
                  </div>
                )}
                <a
                  href="#vsl"
                  className="mt-2 text-sm font-medium text-bp-muted hover:text-bp-accent transition"
                >
                  Prefer video first? Watch the VSL ↑
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* H1 — Warning */}
        <section className="border-y border-bp-border bg-[#16120f] py-14 sm:py-16" id="warning">
          <div className="container-bp">
            <p className="section-label !text-[var(--bp-danger)]">Warning</p>
            <h2 className="font-serif text-xl font-semibold tracking-tight text-bp-text sm:text-2xl">
              Disconnected tactics compound learning for your vendors — not you
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-bp-soft">
              If you keep buying disconnected tactics (ads without a letter, outbound
              without a sales system, AI without a protocol), CAC rises and learning
              compounds for your vendors — not you.
            </p>
          </div>
        </section>

        {/* J1 — Summary strip */}
        <section className="py-12 sm:py-14">
          <div className="container-bp">
            <p className="text-center font-serif text-xl italic leading-relaxed text-bp-soft sm:text-2xl">
              Funded B2B. Agentic growth system. Free model-first session. Validate
              with a metric. Scale what works.
            </p>
          </div>
        </section>

        {/* K1 — FAQ */}
        <section className="border-t border-bp-border bg-bp-elevated py-16 sm:py-20" id="faq">
          <div className="container-bp">
            <p className="section-label">FAQ</p>
            <h2 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
              Common questions
            </h2>
            <div className="mt-6">
              {faqs.map((f) => (
                <FaqItem key={f.q} question={f.q} answer={f.a} />
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 sm:py-24">
          <div className="container-bp text-center">
            <h2 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
              Ready to stop guessing?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-bp-soft">
              Book a free GrowthView Direction Session. Model first. Decide after.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <CtaButton size="lg" />
              <a href="#how-it-works" className="btn-secondary">
                See how it works
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
