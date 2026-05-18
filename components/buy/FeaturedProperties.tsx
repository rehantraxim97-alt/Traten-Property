import { Bed, Bath, MapPin, ArrowRight } from "lucide-react";

const listings = [
  {
    type: "Flat",
    price: "£185,000",
    address: "Hyndland Road, Glasgow",
    beds: 2,
    baths: 1,
    status: "Available",
    tag: "Off-Market",
    bg: "#2C4A62",
  },
  {
    type: "Terraced House",
    price: "£275,000",
    address: "Shawlands, Glasgow",
    beds: 3,
    baths: 2,
    status: "Available",
    tag: "Open Market",
    bg: "#1A3347",
  },
  {
    type: "Tenanted Flat",
    price: "£155,000",
    address: "Partick, Glasgow",
    beds: 2,
    baths: 1,
    status: "Investor Ready",
    tag: "Investment",
    bg: "#0F3040",
  },
];

export default function FeaturedProperties() {
  return (
    <section id="properties" className="py-20 md:py-28" style={{ background: "var(--tp-cream)" }}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--tp-gold)" }}>
              Current listings
            </p>
            <h2
              className="text-4xl md:text-5xl font-semibold leading-tight"
              style={{ fontFamily: "var(--font-display)", color: "var(--tp-navy)", letterSpacing: "-0.02em" }}
            >
              Properties available now.
            </h2>
          </div>
          <a
            href="#enquire"
            className="group inline-flex items-center gap-2 text-sm font-semibold shrink-0"
            style={{ color: "var(--tp-navy)" }}
          >
            View all properties <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <div
              key={listing.address}
              className="group rounded-xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl cursor-pointer"
              style={{ background: "#fff", border: "1px solid var(--tp-cream-dark)" }}
            >
              {/* Image placeholder */}
              <div
                className="relative h-48 flex items-end p-4"
                style={{ background: listing.bg }}
              >
                {/* Status tag */}
                <div className="absolute top-4 left-4">
                  <span
                    className="px-2.5 py-1 rounded text-xs font-semibold"
                    style={{ background: "rgba(201,168,76,0.9)", color: "var(--tp-navy)" }}
                  >
                    {listing.tag}
                  </span>
                </div>

                {/* Property type */}
                <p className="text-xs font-medium" style={{ color: "rgba(247,244,238,0.7)" }}>
                  {listing.type}
                </p>
              </div>

              {/* Card content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <p
                    className="text-2xl font-bold"
                    style={{ fontFamily: "var(--font-display)", color: "var(--tp-navy)" }}
                  >
                    {listing.price}
                  </p>
                  <span
                    className="text-xs px-2 py-1 rounded"
                    style={{ background: "rgba(58,125,91,0.1)", color: "var(--tp-success)" }}
                  >
                    {listing.status}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 mb-4">
                  <MapPin size={13} style={{ color: "var(--tp-stone)" }} />
                  <p className="text-sm" style={{ color: "var(--tp-stone)" }}>
                    {listing.address}
                  </p>
                </div>
                <div
                  className="flex items-center gap-4 pt-4"
                  style={{ borderTop: "1px solid var(--tp-cream-dark)" }}
                >
                  <div className="flex items-center gap-1.5 text-sm" style={{ color: "var(--tp-charcoal)" }}>
                    <Bed size={15} /> <span>{listing.beds} bed</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm" style={{ color: "var(--tp-charcoal)" }}>
                    <Bath size={15} /> <span>{listing.baths} bath</span>
                  </div>
                  <a
                    href="#"
                    className="ml-auto text-sm font-semibold flex items-center gap-1 transition-colors group-hover:underline"
                    style={{ color: "var(--tp-navy)" }}
                  >
                    View <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-8 p-5 rounded-xl text-center"
          style={{ background: "rgba(15,31,46,0.04)", border: "1px dashed var(--tp-cream-dark)" }}
        >
          <p className="text-sm mb-2" style={{ color: "var(--tp-stone)" }}>
            More properties coming soon. Register to get first access to off-market listings.
          </p>
          <a
            href="#enquire"
            className="text-sm font-semibold"
            style={{ color: "var(--tp-navy)" }}
          >
            Register your interest →
          </a>
        </div>
      </div>
    </section>
  );
}
