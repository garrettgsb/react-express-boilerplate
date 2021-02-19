const accelerator = {
  "One-Cup-A-Day": { min: 0, max: 1000 },
  "Regular-Joe": { min: 1001, max: 2000 },
  "Purist": { min: 2001 },
};

export const convertCentsToDollars = function (price) {
  return (price / 100).toFixed(2);
};

export const beansEarned = function (accelerator, centsCharged, prev=0) {
  console.log('centsCharged', centsCharged)
  // user can only earn beans on price charged and not total price
  return Math.ceil((centsCharged / 100 * 0.5) * accelerator) + prev;
};

export const totalFromCart = function (cart) {
  return cart.reduce((sum, cur) => sum + cur.price * cur.quantity, 0);
};

export const maxForSlider = function (
  currentBeans,
  cartTotal,
  beanDollarRatio
) {
  if (cartTotal - currentBeans * beanDollarRatio === 0) {
    console.log("correct amount of beans");
    return currentBeans;
  } else if (cartTotal - currentBeans * beanDollarRatio < 0) {
    console.log("more beans than cart");
    return cartTotal * 2;
  }
  console.log("more cart than beans");
  return currentBeans;
};