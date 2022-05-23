import { useState, useEffect } from 'react';
import axios from 'axios';
import { getNewList } from '../helpers/helper_functions';

export default function useApplicationData() {
  const [state, setState] = useState({
    tab: 'SAVINGS',
    user: '',
    users: [],
    goals: [],
    savings: [],
    expenses: [],
    dataPoints: [],
    vacationMode: false,
    currencySymbols: {},
    exchangeRates: {}
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

  const changeTab = (tab) =>
    setState(prev => {
      return { ...prev, tab }
    })


  const updateGoals = (goalID, goals) => {

    const updatedGoal = state.goals.map(item =>
      !Array.isArray(item) && item.id === goalID ?
        item = {
          ...item,
          goal_name: goals.goal_name,
          amount: parseInt(goals.totalGoals) * 100,
          start_date: goals.start_date,
          end_date: goals.end_date
        }
        : item
    );

    goals.vacation === 'ON' ?
      setState(prev => {
        return { ...prev, tab: 'VACATION', goals: updatedGoal, vacationMode: true }
      }) :
      setState(prev => {
        return { ...prev, goals: updatedGoal }
      })

    return axios
      .put(`http://localhost:8081/api/goals`, {
        goals
      })
      .then(res => {
        console.log('Function updateGoals not reached. res--> ', res);
      })
  };


  const removeExpense = expenseID => {

    const newExpenseList = getNewList(state.expenses, expenseID);

    const newSavingList = getNewList(state.savings, expenseID);

    const newDataPoints = getNewList(state.dataPoints, expenseID)

    return axios
      .delete(`http://localhost:8081/api/delete`, {
        data: { id: expenseID }
      })
      .then(() => {
        setState(prev => {
          return {
            ...prev,
            expenses: newExpenseList,
            savings: newSavingList,
            dataPoints: newDataPoints
          }
        })
      })
  };

  const removeGoal = goalID => {
    console.log(goalID)
    const newGoalList = state.goals.map((goal, i) => {
      return goal.id === goalID ?
        state.goals.splice(i, 1) :
        goal
    });

    return axios
      .delete(`http://localhost:8081/api/delete`, {
        data: { id: goalID }
      })
      .then(() => {
        setState(prev => {
          return {
            ...prev,
            goals: newGoalList
          }
        })
      })
  };

  const addExpense = expense => {

    const expenses = [
      {
        id: expense.id,
        user_id: expense.user_id,
        created_at: expense.created_at,
        amount: expense.amount,
        category_id: expense.category_id,
        category_name: expense.category_name,
      },
      ...state.expenses,
    ];

    const savings = [
      {
        id: expense.id,
        user_id: expense.user_id,
        created_at: expense.created_at,
        amount: expense.amount,
        category_id: expense.category_id,
      },
      ...state.savings,
    ];

    const dataPoints = [
      ...state.dataPoints,
      {
        id: expense.id,
        user_id: expense.user_id,
        category_id: expense.category_id,
        x: expense.created_at,
        y: parseInt(expense.amount),
      }
    ];

    setState(prev => {
      return { ...prev, expenses, savings, dataPoints };
    });


    return axios
      .put(`http://localhost:8081/api/expenses`, {
        expense
      })
      .then(res => {
        console.log('Function updateGoals not reached. res--> ', res);
      });
  };

  const setUser = user => setState({ ...state, user });

  useEffect(() => {
    const apiGoals = 'http://localhost:8081/api/goals';
    const apiUsers = 'http://localhost:8081/api/users';
    const apiSavings = 'http://localhost:8081/api/savings';
    const apiExpenses = 'http://localhost:8081/api/expenses';
    const apiDataPoints = 'http://localhost:8081/api/dataPoints';
    const apiCurrencySymbols = 'https://api.currencyfreaks.com/historical-data-limits';
    // const apiExchangeRates = 'https://api.currencyfreaks.com/latest?apikey=';

    Promise.all([
      axios.get(apiGoals),
      axios.get(apiUsers),
      axios.get(apiSavings),
      axios.get(apiExpenses),
      axios.get(apiDataPoints),
      axios.get(apiCurrencySymbols)
    ])
      .then(all => {
        setState((prev) => ({
          ...prev,
          goals: all[0].data,
          users: all[1].data,
          savings: all[2].data,
          expenses: all[3].data,
          dataPoints: all[4].data,
          apiCurrencySymbols: all[5].data,
          // apiExchangeRates: all[6].data
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
    updateGoals,
    removeExpense,
    removeGoal,
    changeTab
  };
}
