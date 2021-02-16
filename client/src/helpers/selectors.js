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
