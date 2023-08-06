export const calculatePrice = (multiplier: number, price: number) => {
  const res = (price / 900) * multiplier;
  return res.toFixed(2);
};
