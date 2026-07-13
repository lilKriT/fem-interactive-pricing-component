"use client";
import { useState } from "react";
import Range from "./Range";
import Checkbox from "./Checkbox";
import { pricingTiers } from "@/data/PricingTiers";
import calculatePrice from "@/utils/calculatePrice";

const PricingCalculator = () => {
  const [yearly, setYearly] = useState(true);
  const [tier, setTier] = useState(2);

  return (
    <div className="flex flex-col justify-center items-center gap-12 p-12">
      {/* Top Row */}
      <div className="w-full flex justify-between items-center">
        <p className="uppercase font-extrabold tracking-[.15rem] text-lg">
          {pricingTiers[tier].views} Pageviews
        </p>
        <p className="font-extrabold text-xl flex justify-center items-center gap-2">
          <span className="font-extrabold text-slate-800 text-5xl">
            ${calculatePrice(pricingTiers[tier].price, yearly ? 25 : 0)}
          </span>{" "}
          / month
        </p>
      </div>

      {/* Range */}
      <Range tier={tier} setTier={setTier} />

      {/* Bottom Row */}
      <div className="grid grid-cols-[1fr_auto_1fr] gap-8 font-extrabold">
        {/* Grid is probably the best way to center the button */}
        <div className="flex justify-end items-center">
          <p>Monthly Billing</p>
        </div>
        <Checkbox />
        <div className="flex justify-center items-center gap-4">
          <p>Yearly Billing</p>{" "}
          <p className="bg-discount-background text-discount-text rounded-full px-2 py-1 text-xs">
            25% discount
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingCalculator;
