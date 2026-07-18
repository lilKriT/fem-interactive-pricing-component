"use client";

type BillingCycleCheckboxProps = {
  yearly: boolean;
  setYearly: (value: boolean) => void;
};

const BillingCycleCheckbox = ({
  yearly,
  setYearly,
}: BillingCycleCheckboxProps) => {
  return (
    <label className="grid grid-cols-[1fr_auto_1fr] gap-8 font-extrabold cursor-pointer">
      {/* Grid is probably the best way to center the button */}
      <div className="flex justify-end items-center">
        <p>Monthly Billing</p>
      </div>

      <div className="relative w-12 h-6 bg-toggle-background motion-safe:duration-150 rounded-full peer-checked:w-20 hover:bg-green-100">
        <form>
          <input
            autoComplete="off"
            type="checkbox"
            className="sr-only peer"
            checked={yearly}
            onChange={(e) => {
              setYearly(e.target.checked);
            }}
          />
          <div className="absolute top-1 left-1 w-4 aspect-square rounded-full bg-white peer-checked:translate-x-6 motion-safe:duration-300 ease-in-out"></div>
        </form>
      </div>

      <div className="flex justify-center items-center gap-4">
        <p>Yearly Billing</p>{" "}
        <p className="bg-discount-background text-discount-text rounded-full px-2 py-1 text-xs">
          25% discount
        </p>
      </div>
    </label>
  );
};

export default BillingCycleCheckbox;
