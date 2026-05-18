"use client";
import { ArrowRight, Star } from "lucide-react";

export default function SellHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, var(--tp-navy) 0%, var(--tp-navy-mid) 60%, #1e3a52 100%)",
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Decorative vertical line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{ background: "var(--tp-gold)", opacity: 0.5 }}
      />

      {/* Large background text */}
      <div
        className="absolute right-0 bottom-0 select-none pointer-events-none hidden lg:block"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "22rem",
          lineHeight: 0.85,
          color: "rgba(255,255,255,0.025)",
          fontWeight: 700,
          letterSpacing: "-0.04em",
          userSelect: "none",
        }}
      >
        £0
      </div>

      <div className="relative max-w-6xl mx-auto px-5 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left: copy */}
        <div>
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-8 animate-fade-up"
            style={{
              background: "rgba(201,168,76,0.15)",
              color: "var(--tp-gold)",
              border: "1px solid rgba(201,168,76,0.3)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--tp-gold)" }}
            />
            Sell your home with zero fees
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-up delay-100"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)",
              fontWeight: 600,
              lineHeight: 1.05,
              color: "var(--tp-cream)",
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
            }}
          >
            Sell Your Home,{" "}
            <em
              style={{
                fontStyle: "italic",
                color: "var(--tp-gold)",
                display: "block",
              }}
            >
              Keep Every Penny.
            </em>
          </h1>

          {/* Supporting line */}
          <p
            className="text-lg leading-relaxed mb-10 max-w-lg animate-fade-up delay-200"
            style={{
              color: "rgba(247,244,238,0.72)",
              fontFamily: "var(--font-body)",
            }}
          >
            We sell your property quickly and at the right price — without
            charging you a single pound in agent fees. Our buyers cover our
            costs, so you walk away with the full sale price.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-up delay-300">
            <a
              href="#enquire"
              className="group inline-flex items-center gap-2.5 px-7 py-4 rounded font-semibold text-base transition-all hover:-translate-y-0.5 hover:shadow-xl"
              style={{
                background: "var(--tp-gold)",
                color: "var(--tp-navy)",
                fontFamily: "var(--font-body)",
                boxShadow: "0 4px 16px rgba(201,168,76,0.3)",
              }}
            >
              Get My Free Valuation
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium transition-colors flex items-center gap-1.5"
              style={{ color: "rgba(247,244,238,0.65)" }}
            >
              How it works
              <span style={{ color: "var(--tp-gold)" }}>↓</span>
            </a>
          </div>

          {/* Trust badges */}
          <div
            className="mt-12 pt-8 flex flex-wrap items-center gap-6 animate-fade-up delay-400"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill="var(--tp-gold)"
                    color="var(--tp-gold)"
                  />
                ))}
              </div>
              <span
                className="text-sm"
                style={{ color: "rgba(247,244,238,0.65)" }}
              >
                Five-star rated on Google
              </span>
            </div>
            <div
              className="w-px h-4 hidden sm:block"
              style={{ background: "rgba(255,255,255,0.15)" }}
            />
            <span
              className="text-sm"
              style={{ color: "rgba(247,244,238,0.65)" }}
            >
              Hundreds of homes sold across Scotland
            </span>
            <div
              className="w-px h-4 hidden sm:block"
              style={{ background: "rgba(255,255,255,0.15)" }}
            />
            <span
              className="text-sm font-semibold"
              style={{ color: "var(--tp-gold)" }}
            >
              £0 in seller fees. Ever.
            </span>
          </div>
        </div>

        {/* Right: feature card */}
        <div className="hidden lg:block animate-fade-up delay-200">
          <div
            className="rounded-xl p-8 space-y-5"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.09)",
              backdropFilter: "blur(8px)",
            }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "var(--tp-gold)" }}
            >
              Three routes to sale
            </p>

            {[
              {
                icon: "⚡",
                title: "Direct Purchase",
                desc: "We buy directly from you. No chain, no viewings.",
              },
              {
                icon: "🏷️",
                title: "Off-Market Sale",
                desc: "Matched to our network of cash buyers and investors.",
              },
              {
                icon: "🏠",
                title: "Open Market Listing",
                desc: "Full exposure on Rightmove, Zoopla, and beyond.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-4 rounded-lg transition-colors"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <span className="text-2xl leading-none mt-0.5">{item.icon}</span>
                <div>
                  <p
                    className="font-semibold text-sm mb-1"
                    style={{ color: "var(--tp-cream)" }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="text-sm leading-snug"
                    style={{ color: "rgba(247,244,238,0.55)" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

            <div
              className="pt-4 mt-2"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
            >
              <a
                href="#routes"
                className="text-sm font-medium flex items-center gap-1.5"
                style={{ color: "var(--tp-gold)" }}
              >
                Find the right route for you <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
