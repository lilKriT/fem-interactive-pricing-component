import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-dvh flex bg-[url('/bg-pattern.svg')] bg-size-[100%_50%] bg-no-repeat justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center">
        {/* Heading */}
        <div className="flex flex-col gap-8 bg-[url(/pattern-circles.svg)] bg-no-repeat bg-size-[auto_90%] bg-center pt-16 pb-16">
          <h1 className="text-center text-5xl text-text-dark font-extrabold">
            Simple, traffic-based pricing
          </h1>
          <p className="text-center text-2xl font-extrabold">
            Sign-up for our 30-day trial. No credit card required.{" "}
          </p>
        </div>

        {/* Card */}
        <div className="w-full max-w-5xl bg-pricing-background rounded-lg shadow-xl">
          {/* Upper section */}
          <div>
            <p>Pageviews $ /month</p>
            <p>Monthly Billing</p>
            <p>Yearly Billing 25% discount</p>
          </div>

          {/* Sub-section */}
          <div className="border-t border-black p-12 grid grid-cols-2 gap-8">
            <div>
              <ul className="list-image-[url(/icon-check.svg)] checkmarkList">
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
