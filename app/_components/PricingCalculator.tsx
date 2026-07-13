"use client";
import { useState } from "react";
import ViewsPriceRange from "./ViewsPriceRange";
import BillingCycleCheckbox from "./BillingCycleCheckbox";
import { pricingTiers } from "@/data/PricingTiers";
import calculatePrice from "@/utils/calculatePrice";
import formatViews from "@/utils/formatViews";

const PricingCalculator = () => {
  const [yearly, setYearly] = useState(true);
  const [tier, setTier] = useState(2);

  return (
    <div className="flex flex-col justify-center items-center gap-12 p-12">
      {/* Top Row */}
      <div className="w-full flex justify-between items-center">
        <p className="uppercase font-extrabold tracking-[.15rem] text-lg">
          {formatViews(pricingTiers[tier].views)} Pageviews
        </p>
        <p className="font-extrabold text-xl flex justify-center items-center gap-2">
          <span className="font-extrabold text-slate-800 text-5xl">
            ${calculatePrice(pricingTiers[tier].price, yearly ? 25 : 0)}
          </span>{" "}
          / {yearly ? "year" : "month"}
        </p>
      </div>

      {/* Views / Price Range */}
      <ViewsPriceRange tier={tier} setTier={setTier} />

      {/* Bottom Row */}
      <BillingCycleCheckbox yearly={yearly} setYearly={setYearly} />
    </div>
  );
};

export default PricingCalculator;
