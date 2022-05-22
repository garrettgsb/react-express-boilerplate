export function getTotalExpensesForUser(state, user) {
  const filteredExpenses = state.expenses.filter((expenses) => expenses.username === user);
  const totalExpense = filteredExpenses.reduce((previous, current) => previous + current.amount, 0);
  return '$' + (totalExpense / 100).toFixed(2);
};

export const getUserByID = (users, id) =>
  users.find(user =>
    user.id === id
  );

export const getSavingsByID = (expenses, id) =>
  expenses.filter(expense =>
    expense && 
    expense.user_id === id &&
    expense.category_id === 8
  );

export const getGoalByID = (goals, id) =>
  goals.find(goal =>
    goal.user_id === parseInt(id));

export const getDataByID = (data, id) =>
  data.filter(item =>
    item &&
    item.user_id === parseInt(id));

export function getExpenseById(expenses, id) {
  return expenses.filter(expense =>
    expense && expense.user_id === parseInt(id)
  );
};

export function getDaysTillGoal(state) {
  const today = Date.now();
  const endDate = new Date(state.end_date);
  const difference = endDate - today;
  const daysBetween = Math.ceil(difference / (1000 * 3600 * 24));
  return daysBetween;
};

export function getTotalAmount(state) {

  if (Array.isArray(state)) {

    const amountList = state.map(expense => expense.amount);

    return amountList.length > 1 ?
      amountList.reduce((first, next) => first + next) :
      amountList;
  } else {
    return state.amount;
  }
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

export const getVacationExpenses = (stateExpense, userId) => {
  return stateExpense.filter(expense =>
    expense.category_id !== 5 &&
    expense.category_id !== 8 &&
    expense.goals_id > 3 &&
    expense.goals_user_id === userId &&
    expense.created_at > expense.start_date
  )
};

export const filteredVacationExpenses = (expenses, id, date) =>
  expenses.filter(expense =>
    expense && 
    expense.category_id !== 5 &&
    expense.category_id !== 8 &&
    expense.user_id === id &&
    expense.created_at >= date);

export const getVacationData = (data, date) =>
  data.filter(item =>
    item.x >= date
  );
