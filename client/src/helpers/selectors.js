export const filterStoresByDistance = function(stores, distance) {
  return stores.filter( store => store.distance < distance)
  }

  