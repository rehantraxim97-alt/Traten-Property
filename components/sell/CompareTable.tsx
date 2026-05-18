import { Check, X } from "lucide-react";

const rows = [
  {
    label: "Agent commission",
    traditional: "1–3% of sale price charged to the seller",
    tartan: "Zero fees to you. The buyer covers our costs.",
    tartanGood: true,
  },
  {
    label: "Sales routes",
    traditional: "Single route — usually a public listing",
    tartan: "Three routes, picked to fit your situation",
    tartanGood: true,
  },
  {
    label: "Viewings",
    traditional: "Mostly limited to weekends",
    tartan: "Flexible seven-day viewing schedule",
    tartanGood: true,
  },
  {
    label: "Photography & marketing",
    traditional: "Extra charges on top of commission",
    tartan: "Photography, marketing, and listings all included",
    tartanGood: true,
  },
  {
    label: "Communication",
    traditional: "Patchy; sellers often chase for updates",
    tartan: "Direct line to your account manager throughout",
    tartanGood: true,
  },
  {
    label: "Contract terms",
    traditional: "Long tie-in agreements with notice periods",
    tartan: "Short-term agreement; we only get paid when you sell",
    tartanGood: true,
  },
];

export default function CompareTable() {
  return (
    <section
      id="why-tartan"
      className="py-20 md:py-28"
      style={{ background: "var(--tp-cream)" }}
    >
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--tp-gold)" }}
          >
            The difference
          </p>
          <h2
            className="text-4xl md:text-5xl font-semibold leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--tp-navy)",
              letterSpacing: "-0.02em",
            }}
          >
            We don&apos;t work like a{" "}
            <em style={{ fontStyle: "italic" }}>high-street agent.</em>
          </h2>
        </div>

        <div className="overflow-x-auto rounded-xl shadow-sm" style={{ border: "1px solid var(--tp-cream-dark)" }}>
          <table className="w-full" style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "var(--tp-navy)" }}>
                <th
                  className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "rgba(247,244,238,0.45)", width: "22%" }}
                >
                  Feature
                </th>
                <th
                  className="text-left px-6 py-4 text-sm font-semibold"
                  style={{ color: "rgba(247,244,238,0.6)" }}
                >
                  Traditional Estate Agent
                </th>
                <th
                  className="text-left px-6 py-4 text-sm font-semibold"
                  style={{ color: "var(--tp-gold)" }}
                >
                  Tartan Property
                </th>
              </tr>
            </thead>
            <tbody style={{ background: "#fff" }}>
              {rows.map((row, i) => (
                <tr
                  key={row.label}
                  style={{
                    borderBottom:
                      i < rows.length - 1
                        ? "1px solid var(--tp-cream-dark)"
                        : "none",
                  }}
                >
                  <td
                    className="px-6 py-4 text-xs font-semibold uppercase tracking-wide"
                    style={{ color: "var(--tp-stone)" }}
                  >
                    {row.label}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-start gap-2.5">
                      <X
                        size={15}
                        className="mt-0.5 shrink-0"
                        style={{ color: "#c0392b" }}
                      />
                      <span
                        className="text-sm leading-snug"
                        style={{ color: "var(--tp-charcoal)" }}
                      >
                        {row.traditional}
                      </span>
                    </div>
                  </td>
                  <td
                    className="px-6 py-4"
                    style={{ background: "rgba(201,168,76,0.04)" }}
                  >
                    <div className="flex items-start gap-2.5">
                      <Check
                        size={15}
                        className="mt-0.5 shrink-0"
                        style={{ color: "var(--tp-success)" }}
                      />
                      <span
                        className="text-sm leading-snug font-medium"
                        style={{ color: "var(--tp-navy)" }}
                      >
                        {row.tartan}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
