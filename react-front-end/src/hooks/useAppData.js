import { useState, useEffect } from "react";
import axios from 'axios';

const listeners = [];
let initialLoad = false;


let state = {
  users: [],
  vegetables: [],
  plots: [],
  plotsVegs: [],
  basket: []
};

const setState = function (newState) {
  if (typeof newState === 'function') {
    newState = newState(state);
  }
  state = newState;
  listeners.forEach(l => l(newState))
};

export default function useAppData() {
  
  const [newListener, setNewListener] = useState(state);
  
  useEffect(() => {
    listeners.push(setNewListener)
    if (!initialLoad) {
      initialLoad = true;
      Promise.all([
        axios.get(`/api/users`),
        axios.get(`/api/vegetables`),
        axios.get(`/api/plots`),
        axios.get(`/api/plots_vegs`),
        axios.get(`/api/cart`),
      ]).then((all) => {
        const [users, allVeg, plotsList, plotsVegsList, baskets] = all
        setState(prev => ({
          ...prev,
          users: users.data,
          vegetables: allVeg.data,
          plots: plotsList.data,
          plotsVegs: plotsVegsList.data,
          basket: baskets.data
        }));
      });
    }
    return () => {
      const index = listeners.findIndex((l) => l === setNewListener)
      listeners.splice(index, 1)
    }
  }, [])


  const addVegToCart = function(props) {
    const axiosConfig = {  headers:{ 
      "Content-Type": "application/json",
       "Access-Control-Allow-Origin": "*"
      },
    }
    const data = JSON.stringify({
      vegetableID: props.id, 
      userID: 1
    })
    return axios.post('/api/cart', data, axiosConfig)
      .then((res) => {
        console.log('res', res.data)

      setState(state => {

      const veg = {
        vid: props.id,
        id: res.data,
        name: props.name,
        avatar_url: null
      }

        return {...state, basket:[...state.basket, veg]}
      })
    })
  }
  

  // console.log('basket', state.basket)

  // setState({...state, basket})

  return {
    state,
    addVegToCart
    };
  }


//grabAllVeg Function 
// renders data to aboutVEG
// selects all vegetables and enables us to render data as props to card 

//insertVegCart Function 





// deleteVegCart function 
// onclick will remove vegetable from state and re render vegdrawer component. 

//buildGarden function 
// onclick will make a put request to api and insert vegetable_id, user_id, plot id.. the planted_date should auto timestamp.  
