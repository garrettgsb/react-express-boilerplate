const accelerator = {
  "One-Cup-A-Day": { min: 0, max: 1000 },
  "Regular-Joe": { min: 1001, max: 2000 },
  Purist: { min: 2001 },
};

export const convertCentsToDollars = function (price) {
  return (price / 100).toFixed(2);
};

export const beansEarned = function (accelerator, centsCharged) {
  // user can only earn beans on price charged and not total price
  return Math.floor((centsCharged / 100) * accelerator);
};

export const totalFromCart = function (cart) {
  return cart.reduce((sum, cur) => sum + cur.price * cur.quantity, 0);
};
