export const newCurrentBeans = (currentBeans , beansSpent) => {
  return currentBeans - beansSpent;
}

export const newLifetimeBeans = (currentLifetimeBeans, total) => {
  const beansToAdd = Math.round(total / 100)
  return currentLifetimeBeans + beansToAdd;
}

