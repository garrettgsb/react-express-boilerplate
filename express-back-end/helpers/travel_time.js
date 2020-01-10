module.exports = {
  // nest loop to conditional making google api direction axios request call
  getTravelTime: async (array, axiosCallback) => {
    // loop day through trip array
    for (let i = 0; i < array.length; i++) {

      let counter = 0;

      // loop attraction obj in each day
      while (counter < array[i].length) {

        if (array[i][counter + 1]) {
          // check if current and next obj's travel_mode is null
          if (array[i][counter].travel_mode === null && array[i][counter + 1].travel_mode === null) {
            const origin = `${array[i][counter].latitude},${array[i][counter].longitude}`
            const destination = `${array[i][counter + 1].latitude},${array[i][counter + 1].longitude}`

            // api call to get the travel obj data between giving two locations
            const travelTime = await axiosCallback(origin, destination)

            // push in data with the travel obj data
            array[i].splice(counter + 1, 0, travelTime)

            counter += 2;
          } else {
            counter++;
          }
        } else {
          break;
        }
      }
    }
  }
}