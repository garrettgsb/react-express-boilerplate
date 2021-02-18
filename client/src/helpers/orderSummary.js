export const orderSummarySorter = (arr) => {
  let output = {};
  // sort orders
  arr.forEach((item) => {
    if(output[item.order_id]) {
      output[item.order_id].push({
        name: item.name, 
        price: item.price,
        totalPrice: item.total_price
      })
    } else {
      output[item.order_id] = [{
        name: item.name, 
        price: item.price,
        totalPrice: item.total_price
      }]
    }
  })
  return output;
}

export const getMostRecent = (obj) => {
  let mostRecentOrder = 0;
  for(const key in obj) {
    if(key > mostRecentOrder) {
      mostRecentOrder = key;
    }
  }
  return obj[mostRecentOrder]
}