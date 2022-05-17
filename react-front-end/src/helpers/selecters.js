export function getTotalExpensesForUser (state, userId) {
  const filteredExpenses = state.expenses.filter((expenses) => expenses.user_id === userId);
  const totalExpense = filteredExpenses.reduce((previous, current) => previous + current.amount, 0);
  return totalExpense;
};

export function getTotalIncome (state) {
  const incomeList = state.expenses.map(expense => {
    return expense.amount
  })
  return incomeList.reduce((first, next) => first + next)    
};