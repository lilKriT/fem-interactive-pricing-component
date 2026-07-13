const Checkbox = () => {
  return (
    <div className="relative w-12 h-6 bg-slate-300 motion-safe:duration-150 rounded-full peer-checked:w-20 cursor-pointer">
      <form>
        <input
          autoComplete="off"
          type="checkbox"
          className="sr-only peer"
          // checked={monthly}
          // onChange={(e) => {
          //   setMonthly(e.target.checked);
          // }}
        />
        <div className="absolute top-1 left-1 w-4 sm:w-4 aspect-square rounded-full bg-white peer-checked:translate-x-8 motion-safe:duration-300 ease-in-out"></div>
      </form>
    </div>
  );
};

export default Checkbox;
