export type TimelineItem = {
  title: string;
  subtitle: string;
  period: string;
  meta?: string; // info singkat tambahan, contoh: "IPK: 3.75 / 4.00"
  description?: string;
};

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative border-l border-line pl-8">
      {items.map((item, index) => (
        <li key={index} className="pb-10 last:pb-0">
          <span
            className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full bg-paper ring-2 ring-accent"
            aria-hidden="true"
          />
          <p className="font-sans text-xs text-muted mb-1">{item.period}</p>
          <h3 className="font-sans text-lg font-medium text-ink">
            {item.title}
          </h3>
          <p className="font-sans text-sm text-accent mb-2">
            {item.subtitle}
          </p>
          {item.meta && (
            <p className="font-sans text-xs text-muted mb-2">{item.meta}</p>
          )}
          {item.description && (
            <p className="font-sans text-sm text-muted leading-relaxed max-w-xl">
              {item.description}
            </p>
          )}
        </li>
      ))}
    </ol>
  );
}
