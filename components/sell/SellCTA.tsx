"use client";
import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function SellCTA() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="enquire"
      className="py-20 md:py-28"
      style={{ background: "var(--tp-navy)" }}
    >
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--tp-gold)" }}
            >
              Get started
            </p>
            <h2
              className="text-4xl md:text-5xl font-semibold leading-tight mb-5"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--tp-cream)",
                letterSpacing: "-0.02em",
              }}
            >
              Ready to sell without the fees?
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "rgba(247,244,238,0.65)" }}
            >
              Tell us a little about your property. We&apos;ll come back within
              24 hours with a free valuation and your options. No pressure, no
              obligation.
            </p>
            <ul className="space-y-3">
              {[
                "Free valuation within 24 hours",
                "No commitment required",
                "Zero fees — ever",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: "rgba(247,244,238,0.7)" }}>
                  <CheckCircle size={16} style={{ color: "var(--tp-gold)" }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form */}
          <div
            className="rounded-xl p-8"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.09)",
            }}
          >
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle
                  size={48}
                  className="mx-auto mb-4"
                  style={{ color: "var(--tp-gold)" }}
                />
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--tp-cream)",
                  }}
                >
                  Thanks — we&apos;ll be in touch.
                </h3>
                <p className="text-sm" style={{ color: "rgba(247,244,238,0.6)" }}>
                  Expect a call or email from us within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Row: name + phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(247,244,238,0.55)" }}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                      style={{
                        background: "rgba(255,255,255,0.07)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "var(--tp-cream)",
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(247,244,238,0.55)" }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="07700 000000"
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                      style={{
                        background: "rgba(255,255,255,0.07)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "var(--tp-cream)",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(247,244,238,0.55)" }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "var(--tp-cream)",
                    }}
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(247,244,238,0.55)" }}>
                    Property Address or Postcode
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="G12 8QQ"
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "var(--tp-cream)",
                    }}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(247,244,238,0.55)" }}>
                      Property Type
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                      style={{
                        background: "rgba(255,255,255,0.07)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "var(--tp-cream)",
                      }}
                    >
                      <option value="">Select…</option>
                      {["Flat", "Terraced", "Semi-detached", "Detached", "Other"].map((t) => (
                        <option key={t} value={t.toLowerCase()}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(247,244,238,0.55)" }}>
                      Bedrooms
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                      style={{
                        background: "rgba(255,255,255,0.07)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "var(--tp-cream)",
                      }}
                    >
                      <option value="">Select…</option>
                      {["1", "2", "3", "4", "5+"].map((n) => (
                        <option key={n} value={n}>{n}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(247,244,238,0.55)" }}>
                    How soon are you looking to sell?
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "var(--tp-cream)",
                    }}
                  >
                    <option value="">Select…</option>
                    {["ASAP", "Within 3 months", "3–6 months", "Just exploring"].map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 py-4 rounded-lg font-semibold text-base transition-all hover:-translate-y-0.5 hover:shadow-xl mt-2"
                  style={{
                    background: "var(--tp-gold)",
                    color: "var(--tp-navy)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Get My Free Valuation
                  <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
