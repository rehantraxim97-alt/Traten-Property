"use client";
import Link from "next/link";

interface FooterProps {
  variant: "sell" | "buy";
}

export default function Footer({ variant }: FooterProps) {
  const isSell = variant === "sell";

  return (
    <footer style={{ backgroundColor: "var(--tp-navy)" }} className="text-white">
      <div className="max-w-6xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded flex items-center justify-center font-bold text-sm"
                style={{
                  background: "var(--tp-gold)",
                  color: "var(--tp-navy)",
                  fontFamily: "var(--font-display)",
                }}
              >
                TP
              </div>
              <span className="font-semibold text-base">Tartan Property</span>
            </div>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "rgba(247,244,238,0.55)" }}
            >
              Selling and buying property across Scotland. Zero seller fees.
              Real buyers. Plain English throughout.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--tp-gold)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {(isSell
                ? ["How It Works", "Why Tartan", "FAQ", "Get a Valuation"]
                : ["Browse Properties", "How It Works", "FAQ", "Register Interest"]
              ).map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm transition-colors"
                    style={{ color: "rgba(247,244,238,0.65)" }}
                    // @ts-ignore
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "white")
                    }
                    // @ts-ignore
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color =
                        "rgba(247,244,238,0.65)")
                    }
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + cross-link */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--tp-gold)" }}
            >
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm" style={{ color: "rgba(247,244,238,0.65)" }}>
              <li>hello@tartanproperty.co.uk</li>
              <li>0141 000 0000</li>
              <li>Glasgow, Scotland</li>
            </ul>
            <div className="mt-6 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <p className="text-xs mb-2" style={{ color: "rgba(247,244,238,0.4)" }}>
                {isSell ? "Buying instead?" : "Selling a property?"}
              </p>
              <Link
                href={isSell ? "/buy" : "/"}
                className="text-sm font-medium transition-colors"
                style={{ color: "var(--tp-gold)" }}
              >
                {isSell ? "Visit our buyer site →" : "Visit our seller site →"}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            color: "rgba(247,244,238,0.35)",
          }}
        >
          <span>© {new Date().getFullYear()} Tartan Property. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
