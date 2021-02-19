import { useContext, useEffect } from 'react'
import { appContext } from '../../appContext'

import StoreMap from './StoreMap'
import OrderSummary from './OrderSummary'
 
export default function OrderConfirmation(props) {
  const collectionTime = Math.floor(Math.random() * 20) + 2
  const context = useContext(appContext)
  const store = context.state.stores[context.state.currentStore - 1]

  // reset cart state after an order is successful
  useEffect(() => {
    props.setCart([])
    props.setTotal(0)
    props.setBeansSpent(0)
  },[])


 
  return(
    <div>
      <h3>Cool Beans, Thank you for your order!</h3>
      <p>Your order will be ready for collection in {collectionTime} minutes at {store.address}</p>
      <StoreMap 
        lat={store.latitude} 
        lon={store.longitude} 
        address={store.address} 
        name={store.name}
      />
      <OrderSummary cart={props.cart} total={props.total}/>
    </div>
  )
}