export default function getTotalExpensesForUser (state, userId) {
  const filteredExpenses = state.expenses.filter((expenses) => expenses.user_id === userId);
  const totalExpense = filteredExpenses.reduce((previous, current) => previous + current.amount, 0);
  return totalExpense;
};