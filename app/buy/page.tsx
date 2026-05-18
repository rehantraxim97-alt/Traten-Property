import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import BuyHero from "@/components/buy/BuyHero";
import TrustStats from "@/components/shared/TrustStats";
import WhoWeWorkWith from "@/components/buy/WhoWeWorkWith";
import FeaturedProperties from "@/components/buy/FeaturedProperties";
import Testimonials from "@/components/shared/Testimonials";
import HowItWorks from "@/components/shared/HowItWorks";
import WhyTartan from "@/components/shared/WhyTartan";
import FAQ from "@/components/shared/FAQ";
import BuyCTA from "@/components/buy/BuyCTA";
import { Home, Clock, Shield, Eye, TrendingUp, PhoneCall } from "lucide-react";

const trustStats = [
  { icon: "🏠", value: "Hundreds Sold", caption: "Properties moved every year, across every price point." },
  { icon: "⚡", value: "Fast Completions", caption: "Most sales complete in weeks, not months." },
  { icon: "✅", value: "Buyer-First", caption: "Clear pricing, no hidden conditions, no time-wasting." },
];

const testimonials = [
  { quote: "Found a flat, viewed it the same week, and had the keys within a month. Couldn't have been smoother.", name: "Mark T.", location: "Glasgow, G11" },
  { quote: "As an investor I deal with a lot of agents. Tartan actually gave me the numbers I needed, first time, no chasing.", name: "Priya N.", location: "Edinburgh, EH6" },
  { quote: "Honest, responsive, and the listing was exactly what they said it was. Easiest property purchase I've made.", name: "James K.", location: "Aberdeen, AB10" },
];

const steps = [
  { number: "1", title: "Register Your Interest", desc: "Tell us what you're looking for: location, budget, property type. We'll match you to current and upcoming listings." },
  { number: "2", title: "Book a Viewing", desc: "Pick a time that works for you. Evenings and weekends included. We'll meet you at the property and answer every question on the spot." },
  { number: "3", title: "Make an Offer", desc: "We'll guide you through making a competitive offer and pass it straight to the seller. No games, no inflated counter-bidding." },
  { number: "4", title: "Complete the Purchase", desc: "Once your offer's accepted, we coordinate with solicitors on both sides to keep things moving and get you to completion as fast as possible." },
];

const buyTiles = [
  { Icon: Home, title: "Move-ready properties", desc: "Every listing is genuinely available, properly priced, and ready to view." },
  { Icon: Clock, title: "Flexible viewings", desc: "Seven-day availability, including evenings, so you fit us around your life." },
  { Icon: PhoneCall, title: "Direct communication", desc: "One point of contact who actually picks up the phone." },
  { Icon: Eye, title: "Full transparency", desc: "Pricing, condition, tenancy status. You get the real picture upfront." },
  { Icon: TrendingUp, title: "Investor-friendly", desc: "Yields, rental figures, and tenancy details shared without you having to ask twice." },
  { Icon: Shield, title: "Fast completions", desc: "We push the process forward so you're not stuck waiting on chains and silence." },
];

const faqs = [
  { q: "Do I pay a fee to buy through Tartan Property?", a: "There may be a buyer fee on certain properties, which is made clear before you make an offer. It's how we're able to offer the seller a zero-fee service. You'll always see the full picture upfront so there are no surprises later." },
  { q: "How quickly can I view a property?", a: "Usually within 48 hours of getting in touch. We run viewings seven days a week, including evenings, so we can almost always find a slot that suits you." },
  { q: "Are the properties on this site listed anywhere else?", a: "Some are marketed openly on Rightmove and Zoopla. Others are off-market opportunities you'll only see by registering with us. If you want first access to off-market stock, sign up to our buyer list." },
  { q: "Can I buy a tenanted property as an investor?", a: "Yes. We sell a number of tenanted properties each year, complete with rental figures, tenancy agreements, and yield calculations supplied upfront. Ideal for landlords looking to expand without the void period." },
  { q: "What if I'm not sure what I'm looking for yet?", a: "That's fine. Register your rough criteria and we'll start sending suitable properties as they come up. No commitment, no pressure, and you can refine the search any time." },
];

export default function BuyPage() {
  return (
    <>
      <Header variant="buy" />
      <main>
        <BuyHero />
        <TrustStats items={trustStats} />
        <WhoWeWorkWith />
        <FeaturedProperties />
        <Testimonials items={testimonials} />
        <HowItWorks steps={steps} />
        <WhyTartan tiles={buyTiles} heading="What makes us different." />
        <FAQ items={faqs} />
        <BuyCTA />
      </main>
      <Footer variant="buy" />
    </>
  );
}
