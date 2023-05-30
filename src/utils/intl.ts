export const dollarFormatter = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 2,
  minimumFractionDigits: 0,
  style: "currency",
  currency: "usd",
});
