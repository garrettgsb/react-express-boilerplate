import { useState, useEffect } from "react";
import axios from 'axios';

export default function useAppData() {
  
  
  const [state, setState] = useState({
    users: [],
    vegetables: [],
    plots: [],
    plotsVegs: [],
    basket: []
  });
  
  
  
  useEffect(() => {
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
      .then(() => {
        console.log('test', props)
        console.log('state.basket', state.basket)

    setState(state => {

    //   const vegetable = {
    //     ...state.basket[data.vegetableID],
    //     vegetable: {
    //     ...vegetable,
    //   }
    // }

    //   const basket = {
    //     ...state.basket,
    //     [data.vegetableID] : vegetable,
    //     }


        return {...state, basket:[...state.basket, props]}
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
