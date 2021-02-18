import { useContext } from 'react'
import { appContext } from '../../appContext'


export default function StoreSummary(props) {

  console.log(props.cart, props.total)

  const context = useContext(appContext)
  const orderInfo = context.state.orders
  
  const mockData = [
  {
    order_id: 1, 
    menu_item_id: 2,
    name: 'latte', 
    price: 2.5,
    total_price: 10
  },
  {
    order_id: 1, 
    menu_item_id: 3,
    name: 'XL latte', 
    price: 5,
    total_price: 10
  },
  {
    order_id: 1, 
    menu_item_id: 4,
    name: 'hot chocolate', 
    price: 2.5,
    total_price: 10
  },
  {
    order_id: 2, 
    name: 'latte',
    menu_item_id: 2, 
    price: 2.5,
    total_price: 5
  },
  {
    order_id: 2, 
    menu_item_id: 7,
    name: 'london fog', 
    price: 2.5,
    total_price: 5
  },
  {
    order_id: 3, 
    menu_item_id: 2,
    name: 'latte', 
    price: 2.5,
    total_price: 2.5
  },
  {
    order_id: 3, 
    menu_item_id: 2,
    name: 'latte', 
    price: 2.5,
    total_price: 2.5
  }
]

  const orderSummarySorter = (arr) => {
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

  const getMostRecent = (obj) => {
    let mostRecentOrder = 0;
    for(const key in obj) {
      if(key > mostRecentOrder) {
        mostRecentOrder = key;
      }
    }
    return obj[mostRecentOrder]
  }

  const customerOrderHistory = orderSummarySorter(orderInfo)
  const mostRecentOrder = getMostRecent(customerOrderHistory)
  const mostRecentTotal = mostRecentOrder[0].totalPrice
  
  console.log('most recent order', mostRecentOrder)
  


  return(
    <div>
      <h3>Order Summary</h3>
      <p>You have earned {(mostRecentTotal / 10)} beans</p>
      <div className='orders-container'>
      {mostRecentOrder.map((item) => {
        return(
        <div>
          <p>{item.name}</p>
          <p>${item.price}</p>
        </div>
        )
      })}
      </div>
      <p>total: ${mostRecentTotal}</p>
    </div>
  )
}