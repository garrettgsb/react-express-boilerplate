import React from 'react';

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

export const filterSavingsDataPoints = (data, categoryID) =>
  data.filter(item =>
    item &&
    item.category_id === categoryID);

export const filterVacationDataPoints = (data, categoryID1, categoryID2) =>
  data.filter(item =>
    item &&
    (item.category_id !== categoryID1 &&
      item.category_id !== categoryID2));

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
    case '1': return categoryID = 'Eating Out';
    case '2': return categoryID = 'Entertainment';
    case '3': return categoryID = 'Fuel';
    case '4': return categoryID = 'Groceries';
    case '5': return categoryID = 'Income';
    case '6': return categoryID = 'Insurance';
    case '7': return categoryID = 'Rent';
    case '8': return categoryID = 'Savings';
    case '9': return categoryID = 'Shopping';
    case '10': return categoryID = 'Other';
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
    item &&
    item.category_id !== 8 &&
    item.category_id !== 5 &&
    item.x >= date
  );

export const getNewList = (list, itemID) => {
  return list.filter(item =>
    !Array.isArray(item)
  )
    .map((item, i) => {
      return item.id === itemID ?
        list.splice(i, 1) :
        item
    });
}

export const getUserByEmail = (email, state) => state.find(user => user.email === email);

export const getCurrenciesOptions = currencyList => {
  const symbols = Object.keys(currencyList)
  return symbols.map((currency, ii) => {
    return <option key={ii} value={symbols[ii]}>{currencyList[currency]}</option>
  }
  )
};

export const getAvatarByID = (id) => {
  switch (id) {
    case 1: return 'https://i.ibb.co/nc44FGT/facetache1-removebg-preview.png';
    case 2: return "https://i.ibb.co/T2KhqWV/facetache2-removebg-preview.png";
    case 3: return "https://i.ibb.co/vddQFFh/facetachehat-removebg-preview.png";
    default: return "../../person-icon.jpeg";
  }
}