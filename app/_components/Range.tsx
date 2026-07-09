"use client";

const Range = () => {
  const handleChange = () => {
    console.log("change");
  };

  return (
    <input
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
