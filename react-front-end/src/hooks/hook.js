import { useState, useEffect } from "react";
import axios from "axios"

export default function useApplicationData() {
  const [state, setState] = useState({
    tab: 'EXPENSES',
    user: 'Alvin',
    users: [],
    goals: [],
    expenses: [],
    incomes: [],
    categories: []
  });
  
  // const setTab = tab => setState({...state, tab});
  const setUser = user => setState({...state, user});

  
  useEffect(() => {
    const apiUsers = 'http://localhost:8081/api/users';
    const apiGoals = 'http://localhost:8081/api/goals';
    const apiExpenses = 'http://localhost:8081/api/expenses';
    const apiIncomes = 'http://localhost:8081/api/incomes';
    const apiCategories = 'http://localhost:8081/api/categories';
    Promise.all([
      axios.get(apiUsers),
      axios.get(apiGoals),
      axios.get(apiExpenses),
      axios.get(apiIncomes),
      axios.get(apiCategories)
    ])
    .then(all => {
      setState((prev) => ({
        ...prev,
        users: all[0].data,
        goals: all[1].data,
        expenses: all[2].data,
        incomes: all[3].data,
        categories: all[4].data
      }));
    })
    .catch(error => {
      console.log('hook error?!: ', error);
    })
  }, []);


  return {
    state,
    // setTab,
    setUser
  };
}