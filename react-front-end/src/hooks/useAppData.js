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

  const buildVegGarden = function (veg, plot){
      const data = {
      vegetableID: veg, 
      plotID: plot
    }
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
        avatar_url: null
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

    // repeats each of the watering tasks 10 times
    const watering = function(tasks) {
    const waterdays = []
    tasks.map(x => {
      let name = x.name
      let time = x.water_time
      let i = 1
      while (i < 10) {
        let obj = {name: [name], time: time*i}
        waterdays.push(obj)
        i++
      }
    })
    return waterdays.sort((a, b) => (a.time > b.time) ? 1 : -1);
  }
    

  return {
    state,
    addVegToCart,
    deleteVegFromCart,
    buildVegGarden,
    addPlot,
    watering
  };
}





// deleteVegCart function 
// onclick will remove vegetable from state and re render vegdrawer component. 

//buildGarden function 
// onclick will make a put request to api and insert vegetable_id, user_id, plot id.. the planted_date should auto timestamp.  
