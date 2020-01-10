// calculate distance from point x to point y  - used for findNextDestination to compare distances
const getDistance = (x, y) => {
  let latDiff = x.latitude - y.latitude;
  let longDiff = x.longitude - y.longitude;
  return Math.sqrt(Math.pow(latDiff, 2) + Math.pow(longDiff, 2));
}

// find next closest destination - from "start" point, loop through all points available, and go to the nearest location point
const findNextDestination = (start, options) => {
  let distances = [];
  for (let i = 0; i < options.length; i++) {
    distances.push(getDistance(start, options[i]));
  }
  return options[distances.indexOf(Math.min(...distances))];
}

// get schedule for day (the order/sequence of destinations from morning to night) by picking one random "start point" and always going to closest attraction point
const getSchedule = (day) => {
  let schedule = [];
  schedule.push(day[0]);
  day.splice(0, 1);

  while (day.length > 0) {
    let nextDestination = findNextDestination(schedule[schedule.length - 1], day);
    schedule.push(nextDestination)
    day.splice(day.indexOf(nextDestination), 1)
  }

  return schedule;
}

module.exports = {
  // group clustered attractions in days
  getTimeForSchedule: (array) => {
    let dataset = []
    for (let i = 0; i < array.length; i++) {
      dataset.push(getSchedule(array[i]))
    }
    return dataset
  }
}