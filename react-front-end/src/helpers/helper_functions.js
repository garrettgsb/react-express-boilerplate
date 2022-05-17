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

export function getTotalIncome (state) {
  const incomeList = state.map(expense => {
    return expense.amount;
  })
  return incomeList.reduce((first, next) => first + next)    
};

const state = {
  user: 'Alvin',
    expenses: [
      {
      "id": 6,
      "user_id": 1,
      "created_at": "2021-12-29T08:00:00.000Z",
      "amount": 9928,
      "category_id": 6,
      "username": "Alvin",
      "email": "alvintest@hotmail.com",
      "password": "test123",
      "name": "insurance",
      "category_name": "insurance"
      },
      {
      "id": 10,
      "user_id": 3,
      "created_at": "2022-03-31T07:00:00.000Z",
      "amount": 190,
      "category_id": 10,
      "username": "Kevin",
      "email": "kevin3test@hotmail.com",
      "password": "test123",
      "name": "other",
      "category_name": "other"
      },
      {
      "id": 9,
      "user_id": 3,
      "created_at": "2021-06-29T07:00:00.000Z",
      "amount": 9048,
      "category_id": 9,
      "username": "Kevin",
      "email": "kevin3test@hotmail.com",
      "password": "test123",
      "name": "shopping",
      "category_name": "shopping"
      },
      {
      "id": 3,
      "user_id": 1,
      "created_at": "2021-03-22T07:00:00.000Z",
      "amount": 8329,
      "category_id": 3,
      "username": "Alvin",
      "email": "alvintest@hotmail.com",
      "password": "test123",
      "name": "fuel",
      "category_name": "fuel"
      }
    ]
  };

// getExpensesForUser(state, state.user);