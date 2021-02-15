
// data for specific user
// menu for specific store
// cart = useContext hook
// order = specific order


export const filterStoresByDistance = function(stores, distance) {
  return stores.filter( store => store.distance <= distance)
  }

