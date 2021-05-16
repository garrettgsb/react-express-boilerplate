import { useState, useEffect } from "react";
import axios from 'axios';
import  { Redirect } from 'react-router-dom';

const listeners = [];
let initialLoad = false;

let state = {
  users: [],
  vegetables: [],
  plots: [],
  plotsVegs: [],
  basket: [],
  maintenance: [],
  harvest: []
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
        axios.get(`/api/plots_vegs`),
        axios.get(`/api/plots_vegs`)
      ]).then((all) => {
        const [users, allVeg, plotsList, plotsVegsList, baskets, maintenanceList, harvestList] = all
        setState(prev => ({
          ...prev,
          users: users.data,
          vegetables: allVeg.data,
          plots: plotsList.data,
          plotsVegs: plotsVegsList.data,
          basket: baskets.data,
          maintenance: maintenanceList.data,
          harvest: harvestList.data
        }));
      });
    }
    return () => {
      const index = listeners.findIndex((l) => l === setNewListener)
      listeners.splice(index, 1)
    }
  }, [])

  const buildVegGarden = function (veg, plot){
      const data = {
      vegetableID: veg, 
      plotID: plot
    }
    // console.log('data', data)
    return axios.post('/api/plots_vegs', data)
      .then((res) =>  {
      }
    )
  }

  const addPlot = function (cart) {

    return axios.post('/api/plots')
      .then((res) =>  {
        cart.map((veg) => {
          buildVegGarden(veg.vid ,res.data.id)
        })
        window.location.replace(`http://localhost:3000/tasks/${res.data.id}`);
      }).then (() => {
        axios.delete(`/api/cart/delete/1`)
      })
      .catch(err => console.log("error!", err))
    }

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

      setState(state => {
      const veg = {
        vid: props.id,
        id: res.data,
        name: props.name,
        avatar_url: props.avatar_url
      }
      return {...state, basket:[...state.basket, veg]}
    })
  })
}

  //remove break when we prevent from adding multiple ids of the same veg. 
  const deleteVegFromCart = function(props) {
    
    return axios.delete(`api/cart/${props.id}`)
    .then((res) => {

      let tempBasket = state.basket
      for (let i = 0; i <tempBasket.length; i++) {
        if (tempBasket[i].id === props.id) {
          tempBasket.splice(i, 1)
          break;
        }
      }
      setState({...state, basket: tempBasket})
    }) 
  }

  const markComplete = function (index) {
    setState({...state, maintenance:[...state.maintenance, index], harvest:[...state.harvest, index]})
  }

  const plant = function (id) {
    console.log('plant called')
    return axios.post(`/api/plots_vegs/${id}`)
    .then((res) => {
      console.log('res from plant function', res.data)
      setState({...state, maintenance:[...state.harvest, ...res.data], harvest:[...state.harvest, ...res.data]})
    }) 
  }

  return {
    state,
    addVegToCart,
    deleteVegFromCart,
    buildVegGarden,
    addPlot,
    markComplete,
    setState,
    plant
  };
}


// deleteVegCart function 
// onclick will remove vegetable from state and re render vegdrawer component. 

//buildGarden function 
// onclick will make a put request to api and insert vegetable_id, user_id, plot id.. the planted_date should auto timestamp.  
