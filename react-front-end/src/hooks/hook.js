import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useApplicationData() {
  const [state, setState] = useState({
    tab: 'EXPENSES',
    user: '',
    users: [],
    goals: [],
    expenses: [],
    incomes: [],
    savings: [],
    categories: [],
    dataPoints: [],
    alvinVacationSpent: [],
    vacations: []
  });
  
  const loginUser = (user) => {
    return axios
      .get(`http://localhost:8081/api/dataPoints`)
      .then(() => {
        setState(prev => {
          return { ...prev, user: user.id }
        })
      })
    };

  const updateGoals = (id, goals) => {
    const newGoal = state.goals.map(item =>
      item.user_id === id
        ? (item = {
          ...item,
          goal_name: goals.goal_name,
          totalGoal: goals.totalGoals,
          date: goals.date
        })
        : item
    );

    return axios
      .put(`http://localhost:8081/api/goals`, {
        goals
      })
      .then(res => {
        setState(prev => {
          return { ...prev, goal: newGoal };
        });
      });
  };

  const addExpense = expense => {
    const expenses = [
      {
        user_id: expense.user_id,
        created_at: expense.created_at,
        amount: expense.amount,
        category_id: expense.category_id,
        category_name: expense.category_name,
      },
      ...state.expenses,
    ];

    const incomes = [
      {
        user_id: expense.user_id,
        created_at: expense.created_at,
        amount: expense.amount,
        category_id: expense.category_id,
      },
      ...state.incomes,
    ];

    const savings = [
      {
        user_id: expense.user_id,
        created_at: expense.created_at,
        amount: expense.amount,
        category_id: expense.category_id,
      },
      ...state.savings,
    ];

    const alvinVacationSpent = [
      {
        user_id: expense.user_id,
        created_at: expense.created_at,
        amount: expense.amount,
        category_id: expense.category_id,
        start_date: '2022-03-13',/******************************** */
        end_date: '2022-08-13', /******************************** */
        goal_name: expense.goal_name
      },
      ...state.alvinVacationSpent,
    ];

    return axios
      .put(`http://localhost:8081/api/expenses`, {
        expense,
      })
      .then(res => {
        setState(prev => {
          return { ...prev, expenses, incomes, savings, alvinVacationSpent };
        });
      });
  };

  const setUser = user => setState({ ...state, user });

  useEffect(() => {
    const apiGoals = 'http://localhost:8081/api/goals';
    const apiExpenses = 'http://localhost:8081/api/expenses';
    const apiIncomes = 'http://localhost:8081/api/incomes';
    const apiSavings = 'http://localhost:8081/api/savings';
    const apiCategories = 'http://localhost:8081/api/categories';
    const apiDataPoints = `http://localhost:8081/api/dataPoints`;
    const apiUsers = 'http://localhost:8081/api/users';
    const apiAlvinVacationSpent = 'http://localhost:8081/api/alvin/vacation/spent';
    const apiVacations = 'http://localhost:8081/api/vacations';

    Promise.all([
      axios.get(apiGoals),
      axios.get(apiExpenses),
      axios.get(apiIncomes),
      axios.get(apiSavings),
      axios.get(apiCategories),
      axios.get(apiDataPoints),
      axios.get(apiUsers),
      axios.get(apiAlvinVacationSpent),
      axios.get(apiVacations)
    ])
      .then(all => {
        setState((prev) => ({
          ...prev,
          goals: all[0].data,
          expenses: all[1].data,
          incomes: all[2].data,
          savings: all[3].data,
          categories: all[4].data,
          dataPoints: all[5].data,
          users: all[6].data,
          alvinVacationSpent: all[7].data,
          vacations: all[8].data,
        }));
      })
      .catch(error => {
        console.log('We got a hook err! -->', error);
      })
  }, []);


  return {
    state,
    setUser,
    addExpense,
    loginUser,
    updateGoals
  };
}
