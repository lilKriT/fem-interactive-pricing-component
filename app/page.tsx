import Link from "next/link";
import Range from "./_components/Range";

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
          {/* Upper section */}
          <div className="flex flex-col justify-center items-center gap-12 p-12">
            {/* Top Row */}
            <div className="w-full flex justify-between items-center">
              <p className="uppercase font-extrabold tracking-[.15rem] text-lg">
                100k Pageviews
              </p>
              <p className="font-extrabold text-xl flex justify-center items-center gap-2">
                <span className="font-extrabold text-slate-800 text-5xl">
                  ${"16.00"}
                </span>{" "}
                / month
              </p>
            </div>

            {/* Range */}
            <Range />

            {/* Bottom Row */}
            <div className="grid grid-cols-[1fr_auto_1fr] gap-8 font-extrabold ">
              {/* Grid is probably the best way to center the button */}
              <div>
                <p>Monthly Billing</p>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
              </div>
              <div className="flex justify-center items-center gap-4">
                <p>Yearly Billing</p>{" "}
                <p className="bg-discount-background text-discount-text rounded-full px-2 py-1 text-xs">
                  25% discount
                </p>
              </div>
            </div>
          </div>

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
