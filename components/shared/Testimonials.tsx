import { Star } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  location: string;
}

interface TestimonialsProps {
  items: Testimonial[];
}

export default function Testimonials({ items }: TestimonialsProps) {
  return (
    <section className="py-20 md:py-28" style={{ background: "var(--tp-cream)" }}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--tp-gold)" }}
          >
            Reviews
          </p>
          <h2
            className="text-4xl md:text-5xl font-semibold leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--tp-navy)",
              letterSpacing: "-0.02em",
            }}
          >
            What our sellers say.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <div
              key={i}
              className="rounded-xl p-7"
              style={{
                background: "#fff",
                border: "1px solid var(--tp-cream-dark)",
              }}
            >
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    size={15}
                    fill="var(--tp-gold)"
                    color="var(--tp-gold)"
                  />
                ))}
              </div>
              <p
                className="text-base leading-relaxed mb-6"
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  color: "var(--tp-navy)",
                  fontWeight: 300,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div
                className="pt-4 flex items-center gap-3"
                style={{ borderTop: "1px solid var(--tp-cream-dark)" }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold shrink-0"
                  style={{
                    background: "var(--tp-cream-dark)",
                    color: "var(--tp-navy)",
                  }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "var(--tp-navy)" }}
                  >
                    {t.name}
                  </p>
                  <p className="text-xs" style={{ color: "var(--tp-stone)" }}>
                    {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
