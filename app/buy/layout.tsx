import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buy a Property in Scotland",
  description: "Hand-picked homes and investment opportunities across Scotland. First-time buyers, home movers, investors. Simple, fast, transparent buying process.",
};

export default function BuyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
