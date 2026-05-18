"use client";
import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function BuyCTA() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="enquire" className="py-20 md:py-28" style={{ background: "var(--tp-navy)" }}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--tp-gold)" }}>
              Register now
            </p>
            <h2
              className="text-4xl md:text-5xl font-semibold leading-tight mb-5"
              style={{ fontFamily: "var(--font-display)", color: "var(--tp-cream)", letterSpacing: "-0.02em" }}
            >
              Ready to find your next property?
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(247,244,238,0.65)" }}>
              Register your buying criteria and we&apos;ll get in touch when we have something that fits. You&apos;ll also get early access to off-market listings before they go public.
            </p>
            <ul className="space-y-3">
              {["Early access to off-market properties", "Matched to your exact criteria", "No obligation, no pressure"].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: "rgba(247,244,238,0.7)" }}>
                  <CheckCircle size={16} style={{ color: "var(--tp-gold)" }} /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl p-8" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)" }}>
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle size={48} className="mx-auto mb-4" style={{ color: "var(--tp-gold)" }} />
                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--tp-cream)" }}>
                  You&apos;re registered.
                </h3>
                <p className="text-sm" style={{ color: "rgba(247,244,238,0.6)" }}>
                  We&apos;ll be in touch as soon as something matching your criteria comes up.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[["Full Name", "text", "Jane Smith"], ["Phone Number", "tel", "07700 000000"]].map(([label, type, placeholder]) => (
                    <div key={label as string}>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(247,244,238,0.55)" }}>{label}</label>
                      <input type={type as string} required placeholder={placeholder as string} className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                        style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", color: "var(--tp-cream)" }} />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(247,244,238,0.55)" }}>Email Address</label>
                  <input type="email" required placeholder="jane@example.com" className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                    style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", color: "var(--tp-cream)" }} />
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(247,244,238,0.55)" }}>Buyer Type</label>
                  <select className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                    style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", color: "var(--tp-cream)" }}>
                    <option value="">Select…</option>
                    {["First-Time Buyer", "Home Mover", "Investor / Landlord", "Cash Buyer", "Other"].map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(247,244,238,0.55)" }}>Preferred Location(s)</label>
                  <input type="text" placeholder="e.g. Glasgow West End, Edinburgh" className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                    style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", color: "var(--tp-cream)" }} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(247,244,238,0.55)" }}>Budget Range</label>
                    <select className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                      style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", color: "var(--tp-cream)" }}>
                      <option value="">Select…</option>
                      {["Up to £150k", "£150k–£250k", "£250k–£400k", "£400k–£600k", "£600k+"].map(b => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(247,244,238,0.55)" }}>Timescale</label>
                    <select className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                      style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", color: "var(--tp-cream)" }}>
                      <option value="">Select…</option>
                      {["Ready now", "Within 3 months", "3–6 months", "Just browsing"].map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <button type="submit"
                  className="w-full flex items-center justify-center gap-2.5 py-4 rounded-lg font-semibold text-base transition-all hover:-translate-y-0.5 hover:shadow-xl mt-2"
                  style={{ background: "var(--tp-gold)", color: "var(--tp-navy)", fontFamily: "var(--font-body)" }}>
                  Register My Interest <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
