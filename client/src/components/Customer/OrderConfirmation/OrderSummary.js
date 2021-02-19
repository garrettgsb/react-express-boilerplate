import { useContext } from 'react'
import { appContext } from '../../appContext'

import {orderSummarySorter, getMostRecent} from '../../../helpers/orderSummary'
import { beansEarned, convertCentsToDollars } from '../../../helpers/math'

export default function StoreSummary(props) {

  
  
  const context = useContext(appContext)
  const orderInfo = context.state.orders

  const customerOrderHistory = orderSummarySorter(orderInfo)
  const mostRecentOrder = getMostRecent(customerOrderHistory)
  const mostRecentTotal = mostRecentOrder[0].totalPrice
  const userAccelerator = context.state.user[0].accelerator
  
  

  return(
    <div>
      <h3>Order Summary</h3>
      <p>You have earned {beansEarned(userAccelerator, mostRecentTotal)} beans!</p>
      <div className='orders-container'>
      {mostRecentOrder.map((item) => {
        return(
        <div className='item-container'>
          <p>{item.name}</p>
          <p>${convertCentsToDollars(item.price)}</p>
        </div>
        )
      })}
      </div>
      <p>total: ${convertCentsToDollars(mostRecentTotal)}</p>
    </div>
  )
}