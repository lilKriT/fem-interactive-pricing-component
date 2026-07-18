/*
Formula:
Here are the different page view ranges and the corresponding monthly price totals:

- 10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month

If the visitor switches the toggle to yearly billing, a 25% discount should be applied to all prices.
*/

const calculatePrice = (value: number, discount: number) => {
  return (value * (100 - discount)) / 100;
};

export default calculatePrice;
