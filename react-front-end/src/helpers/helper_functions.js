export function getTotalExpensesForUser (state, user) {
  const filteredExpenses = state.expenses.filter((expenses) => expenses.username === user);
  const totalExpense = filteredExpenses.reduce((previous, current) => previous + current.amount, 0);
  return '$' + totalExpense.toFixed(2)/100;
};

export function getTotalIncome (expenses) {
  const incomeList = expenses.map(expense => {
    return expense.amount;
  })
  return incomeList.reduce((first, next) => first + next)    
};