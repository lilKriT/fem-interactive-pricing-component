import Link from "next/link";
import PricingCalculator from "./_components/PricingCalculator";

export default function Home() {
  return (
    <section className="min-h-dvh flex bg-[url('/bg-pattern.svg')] bg-size-[100%_50%] bg-no-repeat justify-center items-start">
      <div className="w-full flex flex-col gap-16 justify-start items-center py-20">
        {/* Heading */}
        <div className="flex flex-col gap-8 bg-[url(/pattern-circles.svg)] bg-no-repeat bg-size-[auto_90%] bg-center px-4 py-20">
          <h1 className="text-center text-[clamp(1rem,5vw,3rem)] text-text-dark font-extrabold">
            Simple, traffic-based pricing
          </h1>
          <p className="text-center text-[clamp(0.875rem,3vw,1.5rem)] font-extrabold">
            <span className="text-nowrap">Sign-up for our 30-day trial.</span>{" "}
            <span className="text-nowrap">No credit card required.</span>
          </p>
        </div>

        {/* Card */}
        <div className="max-w-3xl bg-pricing-background rounded-lg shadow-xl mx-12">
          {/* Pricing section */}
          <PricingCalculator />

          {/* Sub-section */}
          <div className="border-t border-slate-400/30 p-12 grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center md:justify-items-start">
            <div>
              <ul className="list-image-[url(/icon-check.svg)] ml-4 checkmarkList flex flex-col gap-2 items-center md:items-start">
                <li>Unlimited websites</li>
                <li>100% data ownership</li>
                <li>Email reports</li>
              </ul>
            </div>
            <div className="flex justify-center items-center md:justify-self-center">
              <Link
                href={"#"}
                className="bg-cta-background text-cta-text rounded-full px-8 py-2 font-extrabold hover:text-white motion-safe:duration-300"
              >
                Start my trial
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
