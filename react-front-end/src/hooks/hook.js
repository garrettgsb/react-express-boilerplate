import { useState } from "react";
import axios from "axios"

export default function useApplicationData() {
  const [state, setState] = useState({
    message: "Click the button to load data!",
  });

  const fetchData = () => {
    const mockData = '/api/data';
    // const apiUsers = '/api/user';
    // const apiSavingJars = '/api/savingjars';
    // const apiExpenses = '/api/expenses';
    // const apiAddAmounts = '/api/addamounts';
    // const apiCategories = '/api/categories';
    Promise.all([
      axios.get(mockData),
      // axios.get(apiUsers),
      // axios.get(apiSavingJars),
      // axios.get(apiExpenses),
      // axios.get(apiAddAmounts),
      // axios.get(apiCategories)
    ]).then((response) => {
      console.log('response', response)
      setState({
        message: response[0].data.message
      });
    })
  };

  return {
    state,
    fetchData
  };
}