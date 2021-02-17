import { useContext } from 'react'
import { appContext } from '../../appContext'

import StoreMap from './StoreMap'
 
export default function OrderConfirmation(props) {
  const collectionTime = Math.floor(Math.random() * 20) + 1
  const context = useContext(appContext)
  const store = context.state.stores[context.state.currentStore - 1]
  console.log(store)
 
  return(
    <div>
      <h3>Cool Beans, Thank you for your order!</h3>
      <p>Your order will be ready for collection in {collectionTime} minutes at {store.address}</p>
      <StoreMap lat={store.latitude} lon={store.longitude} address={store.address} name={store.name}/>
    </div>
  )
}