export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 2,
    style: "currency",
    currency: "INR",
  }).format(number);
};
