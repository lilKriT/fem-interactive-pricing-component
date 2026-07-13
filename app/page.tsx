import Link from "next/link";
import PricingCalculator from "./_components/PricingCalculator";

export default function Home() {
  return (
    <section className="min-h-dvh flex bg-[url('/bg-pattern.svg')] bg-size-[100%_50%] bg-no-repeat justify-center items-start">
      <div className="w-full flex flex-col gap-16 justify-start items-center px-0 py-20">
        {/* Heading */}
        <div className="flex flex-col gap-8 bg-[url(/pattern-circles.svg)] bg-no-repeat bg-size-[auto_90%] bg-center py-20">
          <h1 className="text-center text-5xl text-text-dark font-extrabold">
            Simple, traffic-based pricing
          </h1>
          <p className="text-center text-2xl font-extrabold">
            Sign-up for our 30-day trial. No credit card required.
          </p>
        </div>

        {/* Card */}
        <div className="w-full max-w-3xl bg-pricing-background rounded-lg shadow-xl">
          {/* Pricing section */}
          <PricingCalculator />

          {/* Sub-section */}
          <div className="border-t border-slate-400/30 p-12 grid grid-cols-2 gap-8">
            <div>
              <ul className="list-image-[url(/icon-check.svg)] ml-4 checkmarkList flex flex-col gap-2">
                <li>Unlimited websites</li>
                <li>100% data ownership</li>
                <li>Email reports</li>
              </ul>
            </div>
            <div className="flex justify-center items-center">
              <Link
                href={"#"}
                className="bg-cta-background text-cta-text rounded-full px-8 py-2 font-extrabold"
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
