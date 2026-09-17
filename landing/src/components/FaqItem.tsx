type Props = {
  question: string;
  answer: string;
};

export function FaqItem({ question, answer }: Props) {
  return (
    <details className="group border-b border-bp-border py-5 last:border-0">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-base font-semibold text-bp-text sm:text-lg [&::-webkit-details-marker]:hidden">
        <span>{question}</span>
        <span className="mt-0.5 shrink-0 text-bp-muted transition group-open:rotate-45">
          +
        </span>
      </summary>
      <p className="mt-3 pr-8 text-base leading-relaxed text-bp-soft">{answer}</p>
    </details>
  );
}
