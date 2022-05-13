import { useState } from "react";
import axios from "axios"

export default function useApplicationData() {
  const [state, setState] = useState({
    message: "Click the button to load data!",
  });

  const fetchData = () => {
    const mockData = '/api/data';
    Promise.all([
      axios.get(mockData)
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