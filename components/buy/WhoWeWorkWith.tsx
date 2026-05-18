import { Home, ArrowLeftRight, TrendingUp, Zap, ArrowRight } from "lucide-react";

const types = [
  {
    Icon: Home,
    title: "First-Time Buyers",
    desc: "Stepping onto the ladder for the first time can feel overwhelming. We'll talk you through each stage in plain English and help you avoid the usual pitfalls.",
  },
  {
    Icon: ArrowLeftRight,
    title: "Home Movers",
    desc: "Upsizing, downsizing, or relocating. We move quickly so you're not stuck in a chain longer than you have to be.",
  },
  {
    Icon: TrendingUp,
    title: "Investors & Landlords",
    desc: "Buy-to-let opportunities, tenanted stock, and portfolio additions. We share the numbers upfront so you can run your own analysis without chasing for figures.",
  },
  {
    Icon: Zap,
    title: "Cash Buyers",
    desc: "If you're moving fast and can complete without a chain, we'll prioritise getting you in front of the right properties before they hit the open market.",
  },
];

export default function WhoWeWorkWith() {
  return (
    <section className="py-20 md:py-28" style={{ background: "#fff" }}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--tp-gold)" }}>
            Who we help
          </p>
          <h2
            className="text-4xl md:text-5xl font-semibold leading-tight max-w-2xl"
            style={{ fontFamily: "var(--font-display)", color: "var(--tp-navy)", letterSpacing: "-0.02em" }}
          >
            Whether you&apos;re buying your first home or your fiftieth.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {types.map((type) => (
            <div
              key={type.title}
              className="group p-8 rounded-xl transition-all hover:-translate-y-1 hover:shadow-lg"
              style={{ background: "var(--tp-cream)", border: "1px solid var(--tp-cream-dark)" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "var(--tp-navy)" }}
              >
                <type.Icon size={22} style={{ color: "var(--tp-gold)" }} />
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ fontFamily: "var(--font-display)", color: "var(--tp-navy)" }}
              >
                {type.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--tp-stone)" }}>
                {type.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="#enquire"
            className="group inline-flex items-center gap-2 text-sm font-semibold transition-colors"
            style={{ color: "var(--tp-navy)" }}
          >
            Register your buying criteria <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
