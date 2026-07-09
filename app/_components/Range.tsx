"use client";

import { useRef } from "react";

const Range = () => {
  const rangeRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const range = rangeRef.current;
    if (!range) return;

    const min = Number(range.min) || 0;
    const max = Number(range.max) || 100;
    const value = Number(e.target.value);

    const percent = ((value - min) / (max - min)) * 100;

    range.style.setProperty("--fill", `${percent}%`);
    console.log("change");
  };

  return (
    <input
      ref={rangeRef}
      type="range"
      min={0}
      max={4}
      step={1}
      className="w-full bg-empty-slider-bar rounded-lg appearance-none cursor-pointer h-3"
      onChange={handleChange}
    />
  );
};

export default Range;
