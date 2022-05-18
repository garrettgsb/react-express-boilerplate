import { useState, useEffect, useRef } from "react";
// import { io } from 'socket.io-client';
import axios from "axios"

export default function useApplicationData() {
  const [state, setState] = useState({
    test: 'test',
    tab: 'EXPENSES',
    user: 1,
    users: [],
    goals: [],
    expenses: [],
    incomes: [],
    categories: []
  });
  // const client = useRef();

  const addExpense = (expense) => {
    const expenses = [
      ...state.expenses,
      {
        user_id: expense.user_id,
        created_at: expense.created_at,
        amount: expense.amount,
        category_id: expense.category_id
      }
    ];
    console.log('EXPENSES:', expenses);

    return axios
      .put(`http://localhost:8081/api/expenses`, {
        expense
      })
      .then((res) => {
        setState(prev => { 
          return {...prev, expenses} })
      })
  };

  // const setTab = tab => setState({...state, tab});
  const setUser = user => setState({ ...state, user });


  useEffect(() => {
    const apiUsers = 'http://localhost:8081/api/users';
    const apiGoals = 'http://localhost:8081/api/goals';
    const apiExpenses = 'http://localhost:8081/api/expenses';
    const apiIncomes = 'http://localhost:8081/api/incomes';
    const apiCategories = 'http://localhost:8081/api/categories';
    // const socket = io('http://localhost:8000');

    // socket.on('connect', () => console.log(`Client connected:`, socket.io, socket.emit('ping') 
    // ))
    // socket.on('message', msg => console.log('MESSAGE:', msg))

    // socket.on('disconnect', disconnect => {
    //   console.log(`Client disconnected: ${disconnect}`)
    // })
    // client.current = socket;

    // socket.on('stateChange', event => socket.emit(event))
    // socket.connect()

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
    setUser,
    addExpense
  };
}