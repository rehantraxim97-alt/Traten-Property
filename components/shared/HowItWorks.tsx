interface Step {
  number: string;
  title: string;
  desc: string;
}

interface HowItWorksProps {
  steps: Step[];
  variant?: "light" | "dark";
}

export default function HowItWorks({ steps, variant = "light" }: HowItWorksProps) {
  const isDark = variant === "dark";

  return (
    <section
      id="how-it-works"
      className="py-20 md:py-28"
      style={{ background: isDark ? "var(--tp-navy)" : "#fff" }}
    >
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-14 max-w-xl">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--tp-gold)" }}
          >
            The process
          </p>
          <h2
            className="text-4xl md:text-5xl font-semibold leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              color: isDark ? "var(--tp-cream)" : "var(--tp-navy)",
              letterSpacing: "-0.02em",
            }}
          >
            Selling, simplified.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px"
            style={{ background: isDark ? "rgba(255,255,255,0.08)" : "var(--tp-cream-dark)" }}
          />

          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Step number bubble */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mb-6 relative"
                style={{
                  background: i === 0 ? "var(--tp-gold)" : isDark ? "rgba(255,255,255,0.06)" : "var(--tp-cream)",
                  color: i === 0 ? "var(--tp-navy)" : isDark ? "var(--tp-cream)" : "var(--tp-navy)",
                  fontFamily: "var(--font-display)",
                  border: i === 0 ? "none" : isDark ? "1px solid rgba(255,255,255,0.1)" : "1px solid var(--tp-cream-dark)",
                }}
              >
                {step.number}
              </div>

              <h3
                className="text-lg font-semibold mb-2"
                style={{
                  fontFamily: "var(--font-display)",
                  color: isDark ? "var(--tp-cream)" : "var(--tp-navy)",
                }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: isDark ? "rgba(247,244,238,0.6)" : "var(--tp-stone)" }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
