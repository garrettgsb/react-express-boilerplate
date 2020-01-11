const axios = require('axios');

// axios callback function for google direction api with travel_mode=driving
const axiosCallbackForCar = (origin, destination) => {
  return axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=AIzaSyDy_PU1wEoC3fNNYzMkjL4jyhVDlRKwdcA`)
    .then(response => {
      return { duration: response.data.routes[0].legs[0].duration.value, travel_mode: 'CAR' }
    })
    .catch(err => console.log(err));
}

module.exports = {
  // axios callback function for google direction api with travel_mode=transit
  axiosCallback: (origin, destination) => {
    return axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&mode=transit&key=AIzaSyDy_PU1wEoC3fNNYzMkjL4jyhVDlRKwdcA`)
      .then(response => {
        // check if api mode=transit not work
        if (response.data.routes[0] === undefined) {
          // remove mode, switch to default mode=driving api call instead
          return axiosCallbackForCar(origin, destination)
        } else {
          // check if there is more than one travel method for direction (Eg: walking -> bus -> walking)
          if (response.data.routes[0].legs[0].steps.length > 1) {
            return { duration: response.data.routes[0].legs[0].duration.value, travel_mode: 'TRANSIT' }
          } else {
            return { duration: response.data.routes[0].legs[0].duration.value, travel_mode: 'WALKING' }
          }
        }
      })
      .catch(err => console.log('Error for google direction api', err));
  }
}