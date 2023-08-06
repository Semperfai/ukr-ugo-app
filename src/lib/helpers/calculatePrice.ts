export const calculatePrice = (multiplier: number, price: number) => {
  const res = (price / 2000) * multiplier;
  return res.toFixed(2);
};
