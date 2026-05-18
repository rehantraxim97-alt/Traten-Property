"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-28" style={{ background: "var(--tp-cream)" }}>
      <div className="max-w-3xl mx-auto px-5">
        <div className="mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--tp-gold)" }}
          >
            FAQ
          </p>
          <h2
            className="text-4xl md:text-5xl font-semibold leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--tp-navy)",
              letterSpacing: "-0.02em",
            }}
          >
            Frequently asked questions.
          </h2>
        </div>

        <div className="space-y-2">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden transition-all"
              style={{
                background: open === i ? "#fff" : "rgba(255,255,255,0.6)",
                border: open === i ? "1px solid var(--tp-cream-dark)" : "1px solid transparent",
              }}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span
                  className="font-semibold text-base leading-snug"
                  style={{ color: "var(--tp-navy)", fontFamily: "var(--font-body)" }}
                >
                  {item.q}
                </span>
                <span
                  className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                  style={{
                    background: open === i ? "var(--tp-gold)" : "rgba(201,168,76,0.15)",
                  }}
                >
                  {open === i ? (
                    <Minus size={14} style={{ color: "var(--tp-navy)" }} />
                  ) : (
                    <Plus size={14} style={{ color: "var(--tp-gold)" }} />
                  )}
                </span>
              </button>

              <div
                style={{
                  maxHeight: open === i ? "500px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.35s ease",
                }}
              >
                <p
                  className="px-6 pb-5 text-sm leading-relaxed"
                  style={{ color: "var(--tp-stone)" }}
                >
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
