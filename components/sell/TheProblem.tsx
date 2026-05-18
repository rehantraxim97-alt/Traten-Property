export default function TheProblem() {
  return (
    <section className="py-20 md:py-28" style={{ background: "#fff" }}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: visual accent */}
          <div className="hidden lg:block">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: "var(--tp-cream)",
                border: "1px solid var(--tp-cream-dark)",
                padding: "3rem",
              }}
            >
              {/* Pain points as styled items */}
              {[
                { emoji: "📅", text: "Wait weeks for a single viewing" },
                { emoji: "📞", text: "Chase the agent for updates" },
                { emoji: "📉", text: "Accept a lower offer to keep things moving" },
                { emoji: "💸", text: "Hand over thousands in fees at the end" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 mb-4 last:mb-0 p-4 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.8)",
                    border: "1px solid var(--tp-cream-dark)",
                    opacity: 1 - i * 0.15,
                  }}
                >
                  <span className="text-xl">{item.emoji}</span>
                  <p className="text-sm" style={{ color: "var(--tp-charcoal)" }}>
                    {item.text}
                  </p>
                </div>
              ))}

              <div
                className="mt-6 p-4 rounded-xl flex items-center gap-3"
                style={{ background: "var(--tp-navy)", border: "none" }}
              >
                <span className="text-xl">✅</span>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "var(--tp-gold)" }}
                >
                  Tartan Property does the opposite.
                </p>
              </div>
            </div>
          </div>

          {/* Right: copy */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--tp-gold)" }}
            >
              The problem
            </p>
            <h2
              className="text-4xl md:text-5xl font-semibold leading-tight mb-6"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--tp-navy)",
                letterSpacing: "-0.02em",
              }}
            >
              Selling a home shouldn&apos;t cost you thousands.
            </h2>
            <p
              className="text-base leading-relaxed mb-5"
              style={{ color: "var(--tp-stone)" }}
            >
              Most sellers go through the same painful loop. List the property,
              wait weeks for a viewing, chase the agent for updates, accept a
              lower offer to keep things moving, then hand over thousands in
              fees at the end of it all.
            </p>
            <p
              className="text-base leading-relaxed font-medium"
              style={{ color: "var(--tp-navy)" }}
            >
              It&apos;s slow, it&apos;s expensive, and it puts all the risk on
              you. We built Tartan Property to do the opposite.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
