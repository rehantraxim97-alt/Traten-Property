import { ArrowRight, Zap, Users, Globe } from "lucide-react";

const routes = [
  {
    Icon: Zap,
    number: "01",
    title: "Direct Purchase",
    desc: "We buy your property from you directly. No chain, no viewings, no waiting. The fastest, most certain route — ideal if speed matters more than squeezing out the last few thousand pounds.",
    tag: "Fastest",
  },
  {
    Icon: Users,
    number: "02",
    title: "Off-Market Sale",
    desc: "We match your property to our network of active investors and cash buyers. Strong offers, quick decisions, none of the disruption of being publicly listed.",
    tag: "Private",
  },
  {
    Icon: Globe,
    number: "03",
    title: "Open Market Listing",
    desc: "Full exposure on Rightmove, Zoopla, and the major portals. We handle photography, marketing, viewings and negotiations. The right call when you want to push for top market value.",
    tag: "Max Value",
  },
];

export default function SellRoutes() {
  return (
    <section id="routes" className="py-20 md:py-28" style={{ background: "#fff" }}>
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="mb-14 max-w-xl">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--tp-gold)" }}
          >
            Your options
          </p>
          <h2
            className="text-4xl md:text-5xl font-semibold leading-tight mb-4"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--tp-navy)",
              letterSpacing: "-0.02em",
            }}
          >
            Choose the route that suits you.
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "var(--tp-stone)" }}>
            Not every sale is the same. We offer three clear options, and
            we&apos;ll guide you to the one that fits your situation best. You
            stay in control the whole way.
          </p>
        </div>

        {/* Route cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {routes.map((route) => (
            <div
              key={route.title}
              className="group relative rounded-xl p-8 transition-all hover:-translate-y-1 hover:shadow-xl"
              style={{
                background: "var(--tp-cream)",
                border: "1px solid var(--tp-cream-dark)",
              }}
            >
              {/* Tag */}
              <span
                className="inline-block px-2.5 py-1 rounded text-xs font-semibold mb-6"
                style={{
                  background: "rgba(201,168,76,0.15)",
                  color: "var(--tp-gold)",
                }}
              >
                {route.tag}
              </span>

              {/* Number */}
              <p
                className="text-xs font-bold mb-3"
                style={{ color: "rgba(15,31,46,0.2)", letterSpacing: "0.1em" }}
              >
                {route.number}
              </p>

              {/* Icon */}
              <route.Icon
                size={28}
                className="mb-4"
                style={{ color: "var(--tp-navy)" }}
              />

              <h3
                className="text-xl font-semibold mb-3"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--tp-navy)",
                }}
              >
                {route.title}
              </h3>

              <p
                className="text-sm leading-relaxed mb-8"
                style={{ color: "var(--tp-stone)" }}
              >
                {route.desc}
              </p>

              {/* Bottom divider line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-xl transition-all"
                style={{
                  background: "var(--tp-gold)",
                  opacity: 0,
                  transform: "scaleX(0)",
                  transition: "opacity 0.2s, transform 0.2s",
                }}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-start">
          <a
            href="#enquire"
            className="group inline-flex items-center gap-2 text-sm font-semibold transition-colors"
            style={{ color: "var(--tp-navy)" }}
          >
            Find out which route suits you
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
