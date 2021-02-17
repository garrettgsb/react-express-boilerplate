// data for specific user
// menu for specific store
// cart = useContext hook
// order = specific order

export const filterStoresByDistance = function (stores, distance = 10) {
  return stores.filter((store) => store.distance <= distance);
};

export const filterMenuItems = function (menuItems) {
  const menu = {};
  menuItems.forEach((item) => (menu[item.category] = []));
  menuItems.forEach((item) => {
    menu[item.category].push(item);
  });
  return menu;
};

//Organizes data from database to usable format in dnd component
export const orderOrganizer = (array) => {
  const organizedData = [];
  const customerNames = [];
  for (const order of array) {
    const orderObj = {};
    orderObj["id"] = order.id;
    orderObj["username"] = order.username;
    orderObj["orders"] = [];
    if (!customerNames.includes(order["username"])) {
      organizedData.push(orderObj);
    }
    customerNames.push(order["username"]);
  }

  for (const value of organizedData) {
    for (const data of array) {
      if (value["username"] === data["username"]) {
        const orderObj = {};
        orderObj[data["item_name"]] = data["item_qty"];
        value["orders"].push(orderObj);
      }
    }
  }
  return organizedData;
};
