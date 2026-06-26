export default function Home() {
  return (
    <section className="min-h-dvh flex bg-[url('/bg-pattern.svg')] bg-size-[100%_50%] bg-no-repeat justify-center items-center">
      <div className="">
        {/* Heading */}
        <p>Simple, traffic-based pricing</p>
        <p>Sign-up for our 30-day trial. No credit card required. </p>

        {/* Card */}
        <div className="bg-pricing-background rounded-lg shadow-xl">
          {/* Upper section */}
          <div>
            <p>Pageviews $ /month</p>
            <p>Monthly Billing</p>
            <p>Yearly Billing 25% discount</p>
          </div>

          {/* Sub-section */}
          <div className="border-t border-black p-12">
            <p>Unlimited websites</p>
            <p>100% data ownership</p>
            <p>Email reports</p>
            <p>Start my trial</p>
          </div>
        </div>
      </div>
    </section>
  );
}
