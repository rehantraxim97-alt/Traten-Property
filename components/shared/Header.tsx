"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  variant: "sell" | "buy";
}

export default function Header({ variant }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const isSell = variant === "sell";

  const navLinks = isSell
    ? [
        { label: "How It Works", href: "#how-it-works" },
        { label: "Why Tartan", href: "#why-tartan" },
        { label: "FAQ", href: "#faq" },
      ]
    : [
        { label: "Properties", href: "#properties" },
        { label: "How It Works", href: "#how-it-works" },
        { label: "FAQ", href: "#faq" },
      ];

  const crossLink = isSell
    ? { label: "Looking to Buy?", href: "/buy" }
    : { label: "Looking to Sell?", href: "/" };

  return (
    <header
      style={{ backgroundColor: "var(--tp-navy)" }}
      className="sticky top-0 z-50 shadow-lg"
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <Link href={isSell ? "/" : "/buy"} className="flex items-center gap-2.5 group">
          <div
            className="w-8 h-8 rounded flex items-center justify-center font-bold text-sm tracking-tight transition-transform group-hover:scale-105"
            style={{
              background: "var(--tp-gold)",
              color: "var(--tp-navy)",
              fontFamily: "var(--font-display)",
            }}
          >
            TP
          </div>
          <span
            className="text-white font-semibold text-base tracking-tight"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Tartan Property
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium transition-colors"
              style={{ color: "rgba(247,244,238,0.75)" }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "white")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color =
                  "rgba(247,244,238,0.75)")
              }
            >
              {l.label}
            </a>
          ))}
          <Link
            href={crossLink.href}
            className="text-sm font-medium transition-colors"
            style={{ color: "var(--tp-gold)" }}
          >
            {crossLink.label}
          </Link>
          <a
            href="#enquire"
            className="ml-2 px-4 py-2 rounded text-sm font-semibold transition-all hover:-translate-y-px"
            style={{
              background: "var(--tp-gold)",
              color: "var(--tp-navy)",
              fontFamily: "var(--font-body)",
            }}
          >
            {isSell ? "Get Free Valuation" : "Register Interest"}
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-5 pb-5 flex flex-col gap-4 border-t"
          style={{
            borderColor: "rgba(255,255,255,0.08)",
            backgroundColor: "var(--tp-navy)",
          }}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium py-1"
              style={{ color: "rgba(247,244,238,0.8)" }}
            >
              {l.label}
            </a>
          ))}
          <Link
            href={crossLink.href}
            className="text-sm font-medium py-1"
            style={{ color: "var(--tp-gold)" }}
          >
            {crossLink.label}
          </Link>
          <a
            href="#enquire"
            onClick={() => setOpen(false)}
            className="inline-block mt-1 px-4 py-2.5 rounded text-sm font-semibold text-center"
            style={{ background: "var(--tp-gold)", color: "var(--tp-navy)" }}
          >
            {isSell ? "Get Free Valuation" : "Register Interest"}
          </a>
        </div>
      )}
    </header>
  );
}
