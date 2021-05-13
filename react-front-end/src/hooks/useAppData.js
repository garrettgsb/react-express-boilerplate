import { useState, useEffect } from "react";
import axios from 'axios';

export default function useAppData() {
  const [state, setState] = useState({
    users: [],
    vegetables: [],
    plots: [],
    plotsVegs: [],
  });

  // Get all the data
  // set the data in state
  // pass the data through to children (useContent?)
  // get veggies to render on page
  // function required:
  //   add to vegBasket
  //   remove from vegBasket
  //   add to plot
  //  

  // const vegBasket = function () {
  //   const basket = []


  // }

  // make vegBasket array
  // onClick - push the veg into vegBasket array
  // Need to push obj {id, name, img}
  // set those based on a query
  // map over array and render each veg component
  // on buildClick would insert into plots_vegs by mapping over each and using ID


  // const buildGarden = (id, vegetable) => {
  //   return axios.put(`/api/plots_vegs/${id}`, { interview }).then(() => {
  //     const appointment = {
  //       ...state.appointments[id],
  //       interview: {
  //         ...interview,
  //       },
  //     };
  //     const appointments = {
  //       ...state.appointments,
  //       [id]: appointment,
  //     };

  //     const days = newDaysArr(
  //       newSpotDay(state.day, state.days, null),
  //       state.days
  //     );

  //     setState({ ...state, appointments, days });
  //   });
  // };


  // const updateSpots = function (dayName, days, appointments) {

  //   // Find the day Object
  //   const dayObj = days.find(x => x.name === dayName);

  //   // calculate spots for this day
  //   const spots = getSpotsForDay(dayObj, appointments);

  //   const newDay = {
  //     ...dayObj,
  //     spots
  //   };

  //   const newDays = days.map(day => day.name === dayName ? newDay : day);

  //   return newDays;
  // };

  // function bookInterview(id, interview) {

  //   return axios.put(`/api/appointments/${id}`, { interview: interview })
  //     .then(() => {
  //       const appointment = {
  //         ...state.appointments[id],
  //         interview: {
  //           ...interview
  //         }
  //       };
  //       const appointments = {
  //         ...state.appointments,
  //         [id]: appointment
  //       };

  //       const days = updateSpots(state.day, state.days, appointments);

  //       setState({ ...state, appointments, days });
  //     })
  // }

  // function cancelInterview(id) {

  //   return axios.delete(`/api/appointments/${id}`)
  //     .then(() => {
  //       const appointment = {
  //         ...state.appointments[id],
  //         interview: null
  //       };
  //       const appointments = {
  //         ...state.appointments,
  //         [id]: appointment
  //       };

  //       const days = updateSpots(state.day, state.days, appointments);

  //       setState({ ...state, appointments, days })
  //     });
  // }

  useEffect(() => {
    Promise.all([
      axios.get(`/api/users`),
      axios.get(`/api/vegetables`),
      axios.get(`/api/plots`),
      axios.get(`/api/plots_vegs`),
    ]).then((all) => {
      const [users, allVeg, plotsList, plotsVegsList] = all
      setState(prev => ({
        ...prev,
        users: users.data,
        vegetables: allVeg.data,
        plots: plotsList.data,
        plotsVegs: plotsVegsList.data
      }));
    });
  },
    [])
  // console.log('state:', state);

  // console.log(state);

  return {
    state
    // setDay,
    // bookInterview,
    // cancelInterview
  };
};


//grabAllVeg Function 
// renders data to aboutVEG
// selects all vegetables and enables us to render data as props to card 

//insertVegCart Function 
// onclick will grab vegetable.name vegtable url_image and insert into list array

// deleteVegCart function 
// onclick will remove vegetable from state and re render vegdrawer component. 

//buildGarden function 
// onclick will make a put request to api and insert vegetable_id, user_id, plot id.. the planted_date should auto timestamp.  
