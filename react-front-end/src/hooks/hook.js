import { useState, useEffect } from 'react';
import axios from 'axios';
// import { getVacationExpenses } from '../helpers/helper_functions';

export default function useApplicationData() {
  const [state, setState] = useState({
    tab: 'SAVINGS',
    user: '',
    users: [],
    goals: [],
    expenses: [],
    incomes: [],
    savings: [],
    categories: [],
    dataPoints: [],
    alvinVacationSpent: [],
    vacationMode: false,
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

  const changeTab = (tab) =>
    setState(prev => {
      return { ...prev, tab }
    })


  const updateGoals = (goalID, goals) => {

    const updatedGoal = state.goals.map(item =>
      item.id === goalID ?
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
    const newExpenseList = state.expenses.map((expense, i) => {
      return expense.id === expenseID ?
        state.expenses.splice(i, 1) :
        expense
    });

    const newDataPoints = state.dataPoints.map((datapoint, i) => {
      return datapoint.id === expenseID ?
        state.dataPoints.splice(i, 1) :
        datapoint
    })

    const newVacationList = state.alvinVacationSpent.map((expense, i) => {
      return expense.id === expenseID ?
        state.alvinVacationSpent.splice(i, 1) :
        expense
    })

    // const vacationExpense = getVacationExpenses(newExpenseList, state.user);

    return axios
      .delete(`http://localhost:8081/api/delete`, {
        data: { id: expenseID }
      })
      .then(() => {
        setState(prev => {
          return {
            ...prev,
            expenses: newExpenseList,
            savings: newExpenseList,
            dataPoints: newDataPoints,
            alvinVacationSpent: newVacationList
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

    const incomes = [
      {
        id: expense.id,
        user_id: expense.user_id,
        created_at: expense.created_at,
        amount: expense.amount,
        category_id: expense.category_id,
      },
      ...state.incomes,
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

    const alvinVacationSpent = [
      {
        id: expense.id,
        user_id: expense.user_id,
        created_at: expense.created_at,
        amount: expense.amount,
        category_id: expense.category_id,
        start_date: '2022-03-13',/******************************** */
        end_date: '2022-08-13', /******************************** */
        goal_name: expense.goal_name,
        goal_amount: expense.goal_amount
      },
      ...state.alvinVacationSpent,
    ];

    const dataPoints = [
      ...state.dataPoints,
      {
        id: expense.id,
        user_id: expense.user_id,
        x: expense.created_at,
        y: expense.amount,
      },
    ];

    return axios
      .put(`http://localhost:8081/api/expenses`, {
        expense
      })
      .then(res => {
        setState(prev => {
          return { ...prev, expenses, incomes, savings, alvinVacationSpent, dataPoints };
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
    updateGoals,
    removeExpense,
    removeGoal,
    changeTab
  };
}
