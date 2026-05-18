import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import SellHero from "@/components/sell/SellHero";
import TrustStats from "@/components/shared/TrustStats";
import TheProblem from "@/components/sell/TheProblem";
import SellRoutes from "@/components/sell/SellRoutes";
import Testimonials from "@/components/shared/Testimonials";
import CompareTable from "@/components/sell/CompareTable";
import HowItWorks from "@/components/shared/HowItWorks";
import WhyTartan from "@/components/shared/WhyTartan";
import FAQ from "@/components/shared/FAQ";
import SellCTA from "@/components/sell/SellCTA";

const trustStats = [
  { icon: "£", value: "£0", caption: "In fees, ever. The buyer covers our costs." },
  { icon: "⚡", value: "Sold Fast", caption: "Most homes go under offer in weeks, not months." },
  { icon: "⭐", value: "5-Star Rated", caption: "Trusted by sellers across Scotland." },
];

const testimonials = [
  { quote: "Sold within a fortnight and I didn't pay a penny. Honestly didn't think it was possible.", name: "Sarah M.", location: "Glasgow, G12" },
  { quote: "From the first valuation to completion, the team kept me in the loop. No chasing, no surprises.", name: "David R.", location: "Edinburgh, EH4" },
  { quote: "I'd been on the market for months with another agent. Tartan had me under offer in three weeks.", name: "Claire T.", location: "Aberdeen, AB11" },
];

const steps = [
  { number: "1", title: "Tell Us About Your Property", desc: "Fill in a short form. We'll come back to you within 24 hours with a free, no-obligation valuation." },
  { number: "2", title: "Pick Your Route", desc: "We'll talk you through your options — direct purchase, off-market, or open market — and recommend the best fit." },
  { number: "3", title: "We Handle Everything", desc: "Photography, marketing, viewings, offers, negotiation. You stay informed; we do the work." },
  { number: "4", title: "Get Paid", desc: "You agree the price, the sale completes, and the full amount lands with you. No deductions, no surprise fees." },
];

const faqs = [
  { q: "How can you sell my home for free? Where's the catch?", a: "There isn't one. We charge the buyer instead of the seller. That fee covers our work and means you keep the full agreed sale price. You're not paying a penny in commission." },
  { q: "Will I get less for my property because the buyer is paying you?", a: "No. We market the property properly and create competition between buyers, which is what drives the price up. Buyers factor everything in when they make an offer — the same way they do with any other purchase cost." },
  { q: "What if you don't sell my property?", a: "Then you walk away with nothing to pay. We carry the cost of marketing and our time. If we don't deliver, you're not tied in and you owe us nothing." },
  { q: "Is this a quick-sale or auction service?", a: "No. Quick-sale companies typically push you into a heavily discounted offer. We don't. We market your property properly across whichever route suits, and aim for the strongest price the market will give." },
  { q: "Who handles the viewings, marketing, and paperwork?", a: "We do — all of it. Photography, listings, enquiries, viewings, negotiation, and progression to completion. You're kept updated throughout, but you're not the one doing the legwork." },
];

export default function SellPage() {
  return (
    <>
      <Header variant="sell" />
      <main>
        <SellHero />
        <TrustStats items={trustStats} />
        <TheProblem />
        <SellRoutes />
        <Testimonials items={testimonials} />
        <CompareTable />
        <HowItWorks steps={steps} />
        <WhyTartan />
        <FAQ items={faqs} />
        <SellCTA />
      </main>
      <Footer variant="sell" />
    </>
  );
}
