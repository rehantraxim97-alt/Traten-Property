"use client";
import { ArrowRight, Search } from "lucide-react";

export default function BuyHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0F1F2E 0%, #1A3347 55%, #1e3a52 100%)",
        minHeight: "85vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Gold accent glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(ellipse 60% 50% at 30% 60%, rgba(201,168,76,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: "linear-gradient(90deg, var(--tp-gold) 0%, transparent 60%)" }}
      />

      <div className="relative max-w-6xl mx-auto px-5 py-24 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-8 animate-fade-up"
            style={{
              background: "rgba(201,168,76,0.15)",
              color: "var(--tp-gold)",
              border: "1px solid rgba(201,168,76,0.3)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--tp-gold)" }} />
            Properties for sale across Scotland
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
            Find Your Next Property{" "}
            <em style={{ fontStyle: "italic", color: "var(--tp-gold)" }}>With Tartan.</em>
          </h1>

          {/* Supporting line */}
          <p
            className="text-lg leading-relaxed mb-10 max-w-2xl animate-fade-up delay-200"
            style={{ color: "rgba(247,244,238,0.72)", fontFamily: "var(--font-body)" }}
          >
            Hand-picked homes and investment opportunities, ready to view. From
            first-time buyer flats to tenanted portfolios, we make the buying
            process simple, fast, and transparent.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-up delay-300">
            <a
              href="#properties"
              className="group inline-flex items-center gap-2.5 px-7 py-4 rounded font-semibold text-base transition-all hover:-translate-y-0.5 hover:shadow-xl"
              style={{
                background: "var(--tp-gold)",
                color: "var(--tp-navy)",
                fontFamily: "var(--font-body)",
                boxShadow: "0 4px 16px rgba(201,168,76,0.3)",
              }}
            >
              <Search size={18} />
              See Available Properties
            </a>
            <a
              href="#enquire"
              className="group inline-flex items-center gap-2.5 px-7 py-4 rounded font-semibold text-base transition-all"
              style={{
                background: "transparent",
                color: "var(--tp-cream)",
                border: "1.5px solid rgba(247,244,238,0.25)",
                fontFamily: "var(--font-body)",
              }}
            >
              Register Your Criteria
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Trust strip */}
          <div
            className="mt-12 pt-8 flex flex-wrap items-center gap-6 text-sm animate-fade-up delay-400"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              color: "rgba(247,244,238,0.6)",
            }}
          >
            <span>🏠 Hundreds of properties sold</span>
            <div className="w-px h-4 hidden sm:block" style={{ background: "rgba(255,255,255,0.15)" }} />
            <span>⚡ Completions in weeks, not months</span>
            <div className="w-px h-4 hidden sm:block" style={{ background: "rgba(255,255,255,0.15)" }} />
            <span style={{ color: "var(--tp-gold)", fontWeight: 600 }}>Off-market access for registered buyers</span>
          </div>
        </div>
      </div>
    </section>
  );
}
