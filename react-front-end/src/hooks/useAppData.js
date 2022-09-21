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
      axios.get('/api/runs'),
      axios.get('/api/users')
    ]).then((response) => {
      const runs = response[0].data;
      const users = response[1].data;

      console.log(runs);
      console.log(users);

      setRuns({runs});
      setUsers({users});
    })
    .catch((error) => {
      console.log(error.response.status);
    })
  }, [])



return {
  runs,
  users
}

}



  