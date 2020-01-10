// calculate distance from point x to point y  - used for findNextDestination to compare distances
const getDistance = (x, y) => {
  let latDiff = x.latitude - y.latitude;
  let longDiff = x.longitude - y.longitude;
  return Math.sqrt(Math.pow(latDiff, 2) + Math.pow(longDiff, 2));
}

module.exports = {

  // calculate number of days for the trip
  getDays: (start, end) => {
    return Math.round((end - start) / 86400)
  },

  // find next closest destination - from "start" point, loop through all points available, and go to the nearest location point
  findNextDestination: (start, options) => {
    let distances = [];
    for (let i = 0; i < options.length; i++) {
      distances.push(getDistance(start, options[i]));
    }
    return options[distances.indexOf(Math.min(...distances))];
  }

}