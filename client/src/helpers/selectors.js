
// data for specific user
// menu for specific store
// cart = useContext hook
// order = specific order


export const filterStoresByDistance = function(stores, distance=10) {
  return stores.filter( store => store.distance <= distance)
  }

export const filterMenuItems = function (menuItems) {
  const menu = {}
  menuItems.forEach((item) => menu[item.category]=[])
  menuItems.forEach((item)=> {
     menu[item.category].push(item)
  })
  return menu;
}



