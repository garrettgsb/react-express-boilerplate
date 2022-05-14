import { useState, useEffect } from "react";
import axios from "axios"

export default function useApplicationData() {
  const [state, setState] = useState({
    message: "Click the button to load data!",
  });
  
  useEffect(() => {
    const apiUsers = 'http://localhost:8081/api/users';
    const apiSavings = 'http://localhost:8081/api/savings';
    const apiExpenses = 'http://localhost:8081/api/expenses';
    const apiAddSavings = 'http://localhost:8081/api/addsavings';
    const apiCategories = 'http://localhost:8081/api/categories';
    Promise.all([
      axios.get(apiUsers),
      axios.get(apiSavings),
      axios.get(apiExpenses),
      axios.get(apiAddSavings),
      axios.get(apiCategories)
    ])
    .then(all => {
      setState((prev) => ({
        ...prev,
        something: all[0],
        something: all[0],
        something: all[0],
        something: all[0],
        something: all[0]
      }));
    })
    .catch(error => {
      console.log('hook error?!: ', error);
    })
  }, []);


  return {
    state
  };
}