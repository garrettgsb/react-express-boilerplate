export const getTotal = (curState) => {
  return curState.reduce((a, b) => {
    return a + (b.price * b.quantity)
  }, 0)
} 