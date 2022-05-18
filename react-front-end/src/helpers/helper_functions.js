export function getTotalExpensesForUser (state, user) {
  const filteredExpenses = state.expenses.filter((expenses) => expenses.username === user);
  const totalExpense = filteredExpenses.reduce((previous, current) => previous + current.amount, 0);
  return '$' + (totalExpense/100).toFixed(2);
};

// export function getExpensesForUser (incomes, user) {
//   const filteredExpenses = incomes.filter((expenses) => expenses.user_id === user);
//   // const totalExpense = filteredExpenses.reduce((previous, current) => previous + current.amount, 0);
//   let newArr = [];
//   filteredExpenses.forEach((x) =>{
//     // console.log('what?!', x);
//     // newArr = {expenses: x}
//     newArr.push(x)
//   });
//   return newArr;
// };

export function getTotalAmount (state) {
  const amountList = state.map(expense => {
    return expense.amount;
  })
  return amountList.reduce((first, next) => first + next)    
};

export function getCategoryName (prop) {
  let categoryID = '';
  switch (prop) {
    case 1: return categoryID = 'Eating';
    case 2: return categoryID = 'Entertainment';
    case 3: return categoryID = 'Fuel';
    case 4: return categoryID = 'Groceries';
    case 5: return categoryID = 'Income';
    case 6: return categoryID = 'Insurance';
    case 7: return categoryID = 'Rent';
    case 8: return categoryID = 'Savings';
    case 9: return categoryID = 'Shopping';
    case 10: return categoryID = 'Other';
    default: categoryID = prop;
      break;
  }
  return categoryID
}