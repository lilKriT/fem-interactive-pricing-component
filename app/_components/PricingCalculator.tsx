"use client";
import { useState } from "react";
import ViewsPriceRange from "./ViewsPriceRange";
import BillingCycleCheckbox from "./BillingCycleCheckbox";
import { pricingTiers } from "@/data/pricingTiers";
import calculatePrice from "@/utils/calculatePrice";
import formatViews from "@/utils/formatViews";

const PricingCalculator = () => {
  const [yearly, setYearly] = useState(true);
  const [tier, setTier] = useState(2);

  return (
    <div className="flex flex-col justify-center items-center gap-12 p-12">
      {/* Top Row */}
      <div className="w-full grid grid-cols-1 justify-items-center gap-12 md:grid-cols-2 md:justify-items-stretch">
        <p className="uppercase font-extrabold tracking-[.15rem] text-lg">
          {formatViews(pricingTiers[tier].views)} Pageviews
        </p>

        {/* Views / Price Range */}
        <ViewsPriceRange
          tier={tier}
          setTier={setTier}
          className="md:col-span-2"
        />

        <p className="font-extrabold text-xl flex justify-center items-center gap-2 md:row-start-1 md:col-start-2">
          <span className="font-extrabold text-slate-800 text-5xl">
            $
            {calculatePrice(pricingTiers[tier].price, yearly ? 25 : 0).toFixed(
              2,
            )}
          </span>{" "}
          / {yearly ? "year" : "month"}
        </p>
      </div>

      {/* Bottom Row */}
      <BillingCycleCheckbox yearly={yearly} setYearly={setYearly} />
    </div>
  );
};

export default PricingCalculator;
