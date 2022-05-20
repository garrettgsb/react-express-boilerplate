export function getTotalExpensesForUser(state, user) {
  const filteredExpenses = state.expenses.filter((expenses) => expenses.username === user);
  const totalExpense = filteredExpenses.reduce((previous, current) => previous + current.amount, 0);
  return '$' + (totalExpense / 100).toFixed(2);
};

export const getUserByID = (users, id) =>
  users.filter(user =>
    user.id === parseInt(id)
  );
export const getSavingsByID = (expenses, id) =>
  expenses.filter(expense =>
    expense.user_id === id && expense.category_id === 8
  );

export const getGoalByID = (goals, id) =>
  goals.filter(goal =>
    goal.user_id === parseInt(id));

export const getDataByID = (data, id) =>
  data.filter(item =>
    item.user_id === parseInt(id));

export function getDaysTillGoal(state) {
  const startDate = new Date(state[0].start_date);
  const endDate = new Date(state[0].end_date);
  const difference = endDate - startDate;
  const daysBetween = Math.ceil(difference / (1000 * 3600 * 24));
  return daysBetween;
};

export function getTotalAmount(state) {
  const amountList = state.map(expense => expense.amount);
  
  return amountList.length > 1 ?
  amountList.reduce((first, next) => first + next) :
  amountList;

};

export function getCategoryName(prop) {
  let categoryID = '';
  switch (prop) {
    case '1': return categoryID = 'eating out';
    case '2': return categoryID = 'entertainment';
    case '3': return categoryID = 'fuel';
    case '4': return categoryID = 'groceries';
    case '5': return categoryID = 'income';
    case '6': return categoryID = 'insurance';
    case '7': return categoryID = 'rent';
    case '8': return categoryID = 'savings';
    case '9': return categoryID = 'shopping';
    case '10': return categoryID = 'other';
    default: categoryID = prop;
      break;
  }
  return categoryID;
};

export function getExpenseById(expenses, id) {
  return expenses.filter(expense =>
    expense.user_id === parseInt(id)
  );
};


  
// export const totalSaved = getTotalAmount(savingsByCatId);
  
// export const totalGoal = getTotalAmount(goalByID);
  
// export const totalDaysTillGoal = getDaysTillGoal(goalByID);