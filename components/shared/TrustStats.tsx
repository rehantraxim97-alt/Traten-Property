interface StatItem {
  value: string;
  caption: string;
  icon: string;
}

interface TrustStatsProps {
  items: StatItem[];
}

export default function TrustStats({ items }: TrustStatsProps) {
  return (
    <section
      style={{ background: "var(--tp-cream-dark)", borderBottom: "1px solid rgba(0,0,0,0.07)" }}
    >
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-black/10">
          {items.map((item) => (
            <div
              key={item.value}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 py-8 px-6"
            >
              <span className="text-3xl">{item.icon}</span>
              <div>
                <p
                  className="text-2xl font-bold leading-none mb-1"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--tp-navy)",
                  }}
                >
                  {item.value}
                </p>
                <p className="text-sm leading-snug" style={{ color: "var(--tp-stone)" }}>
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
