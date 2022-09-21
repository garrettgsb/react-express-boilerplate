import axios from 'axios';
import React, { useState, useEffect } from 'react';

//hook for getting runs
//hook for logged in user
//hook for runner only runs
//hook for planner runs
//axios route change based on user id



export default function AppData() {

  const useRunData = () => {
    axios.get('/api/runs')
    .then((res) => {
      
      const runs = res.data
      console.log(runs)

      this.setState({
        runs: runs
      });
    }) 
  }
}



  