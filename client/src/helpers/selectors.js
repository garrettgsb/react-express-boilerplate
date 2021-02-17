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

export const getOrdersInfo = function (orders) {
  const userOrders = [];
  orders.forEach((item) => {
    //creates orderItems obj
    const orderItems = {
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1,
    };
    //creates order obj
    const order = {
      id: item.order_id,
      totalPrice: item.total_price,
      orderItems: [orderItems],
    };
    //check if order_id already exists in userOrders array, if not then add under new order otherwise add orderItems to existing order
    if (!userOrders.some((e) => e.id === item.order_id)) {
      userOrders.push(order);
    } else {
      // find index where order exists
      const index = userOrders.findIndex((e) => e.id === item.order_id);
      // check to see if an item already exists in the orderItems, if so then add to quantity otherwise push as a new item
      if (
        userOrders[index].orderItems.some((e) => e.name === orderItems.name)
      ) {
        const indexItem = userOrders[index].orderItems.findIndex(
          (e) => e.name === orderItems.name
        );
        userOrders[index].orderItems[indexItem].quantity += 1;
      } else {
        userOrders[index].orderItems.push(orderItems);
      }
    }
  });
  return userOrders;
};
