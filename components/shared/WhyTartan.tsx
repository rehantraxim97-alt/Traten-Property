import { PoundSterling, FileCheck, ArrowLeftRight, UserCheck, Megaphone, MessageSquare } from "lucide-react";

interface BenefitTile {
  Icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  title: string;
  desc: string;
}

interface WhyTartanProps {
  tiles: BenefitTile[];
  heading?: string;
}

const defaultSellTiles: BenefitTile[] = [
  { Icon: PoundSterling, title: "Zero seller fees", desc: "The buyer pays our commission, not you." },
  { Icon: FileCheck, title: "Short-term agreement", desc: "No long tie-ins, no exit fees." },
  { Icon: ArrowLeftRight, title: "Multiple sale routes", desc: "Speed, value, or both — your call." },
  { Icon: UserCheck, title: "Genuine buyers only", desc: "Buyers commit upfront, filtering out time-wasters." },
  { Icon: Megaphone, title: "Active marketing", desc: "We don't just list and hope. We push every property." },
  { Icon: MessageSquare, title: "Honest communication", desc: "Regular updates, plain English, no jargon." },
];

export default function WhyTartan({ tiles, heading = "Built around the seller." }: Partial<WhyTartanProps>) {
  const resolvedTiles = tiles ?? defaultSellTiles;
  return (
    <section className="py-20 md:py-28" style={{ background: "#fff" }}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-14">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--tp-gold)" }}
          >
            Why us
          </p>
          <h2
            className="text-4xl md:text-5xl font-semibold leading-tight max-w-lg"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--tp-navy)",
              letterSpacing: "-0.02em",
            }}
          >
            {heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {resolvedTiles.map((tile) => (
            <div
              key={tile.title}
              className="group p-6 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-md"
              style={{
                background: "var(--tp-cream)",
                border: "1px solid var(--tp-cream-dark)",
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{ background: "rgba(201,168,76,0.12)" }}
              >
                <tile.Icon size={20} style={{ color: "var(--tp-gold)" }} />
              </div>
              <h3
                className="font-semibold mb-1.5"
                style={{ color: "var(--tp-navy)", fontFamily: "var(--font-body)" }}
              >
                {tile.title}
              </h3>
              <p className="text-sm leading-snug" style={{ color: "var(--tp-stone)" }}>
                {tile.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
