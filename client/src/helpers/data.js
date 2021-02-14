const distance = function (origin, array) {
  
  const originLat = origin.latitude;
  const originLong = origin.longitude;

  console.log('origin', originLat, originLong)

  array.forEach((store) => {
    const storeLat = store.latitude;
    const storeLong = store.longitude;

    // haversine formula

    const radoriginLat = (Math.PI * originLat) / 180;
    const radstoreLat = (Math.PI * storeLat) / 180;
    const theta = originLong - storeLong;
    const radtheta = (Math.PI * theta) / 180;
    let dist =
      Math.sin(radoriginLat) * Math.sin(radstoreLat) +
      Math.cos(radoriginLat) * Math.cos(radstoreLat) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515 * 1.609344;

    console.log('distance', dist)
    store.distance = Math.round(dist);
  });
  return array;
};

module.exports = { distance };
