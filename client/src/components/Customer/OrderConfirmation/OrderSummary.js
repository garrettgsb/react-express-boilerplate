import { useContext } from 'react'
import { appContext } from '../../appContext'

import {orderSummarySorter, getMostRecent} from '../../../helpers/orderSummary'

export default function StoreSummary(props) {
  
  const context = useContext(appContext)
  const orderInfo = context.state.orders

  const customerOrderHistory = orderSummarySorter(orderInfo)
  const mostRecentOrder = getMostRecent(customerOrderHistory)
  const mostRecentTotal = mostRecentOrder[0].totalPrice
  

  return(
    <div>
      <h3>Order Summary</h3>
      <p>You have earned {(mostRecentTotal / 10)} beans!</p>
      <div className='orders-container'>
      {mostRecentOrder.map((item) => {
        return(
        <div className='item-container'>
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