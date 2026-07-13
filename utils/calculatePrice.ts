const calculatePrice = (value: number, discount: number) => {
  return (value * (100 - discount)) / 100;
};

export default calculatePrice;
