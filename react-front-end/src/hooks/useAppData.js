/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useState, useEffect } from 'react';

//hook for getting runs
//hook for logged in user
//hook for runner only runs
//hook for planner runs
//axios route change based on user id



export default function useAppData() {

  const [runs, setRuns] = useState({});

  const [users, setUsers] = useState({});

  useEffect(() => {
    Promise.all([
      axios.get('/api/runs')
    ]).then((response) => {
      //console.log(response);
      const { runs } = response[0].data;
      console.log(runs);
       setRuns(runs);
    })
    .catch((error) => {
      console.log(error.response.status);
    })
  }, [])



return {
  runs
}

}



  