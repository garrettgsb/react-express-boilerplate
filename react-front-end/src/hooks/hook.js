import { useState, useEffect } from "react";
import axios from "axios"

export default function useApplicationData() {
  const [state, setState] = useState({
    tab: 'EXPENSES',
    user: 1,
    users: [],
    goals: [],
    expenses: [],
    incomes: [],
    savings: [],
    categories: []
  });

  const addExpense = (expense) => {

    const expenses = [
      {
        user_id: expense.user_id,
        created_at: expense.created_at,
        amount: expense.amount,
        category_id: expense.category_id,
        category_name: expense.category_name
      },
      ...state.expenses
    ];

    const incomes = [
      {
        user_id: expense.user_id,
        created_at: expense.created_at,
        amount: expense.amount,
        category_id: expense.category_id,
      },
      ...state.incomes
    ];

    const savings = [
      {
        user_id: expense.user_id,
        created_at: expense.created_at,
        amount: expense.amount,
        category_id: expense.category_id,
      },
      ...state.savings
    ];

    return axios
      .put(`http://localhost:8081/api/expenses`, {
        expense
      })
      .then((res) => {
        setState(prev => {
          return { ...prev, expenses, incomes, savings }
        })
      })
  };

  const setUser = user => setState({ ...state, user });


  useEffect(() => {
    const apiUsers = 'http://localhost:8081/api/users';
    const apiGoals = 'http://localhost:8081/api/goals';
    const apiExpenses = 'http://localhost:8081/api/expenses';
    const apiIncomes = 'http://localhost:8081/api/incomes';
    const apiSavings = 'http://localhost:8081/api/savings';
    const apiCategories = 'http://localhost:8081/api/categories';

    Promise.all([
      axios.get(apiUsers),
      axios.get(apiGoals),
      axios.get(apiExpenses),
      axios.get(apiIncomes),
      axios.get(apiSavings),
      axios.get(apiCategories)
    ])
      .then(all => {
        setState((prev) => ({
          ...prev,
          users: all[0].data,
          goals: all[1].data,
          expenses: all[2].data,
          incomes: all[3].data,
          savings: all[4].data,
          categories: all[5].data
        }));
      })
      .catch(error => {
        console.log('We got a hook err! -->', error);
      })
  }, []);

  return {
    state,
    setUser,
    addExpense
  };
}