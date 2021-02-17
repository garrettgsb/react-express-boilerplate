import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react'

import NearbyStores from './NearbyStores'
import UserInfo from './UserInfo'
import UserNav from './UserNav'
import YourCartButton from './YourCartButton'
import StoreInfo from './StoreInfo'
import Menu from './Menu'
import HomeButton from './HomeButton';
import PreviousOrders from './PreviousOrders'
import Cart from './Cart'

export default function Customer() {

  const [showCart, setShowCart] = useState(false)
  const [cart, setCart] = useState([{itemName: "Caramel Frappe",
  menuItemId: 14,
  price: 3.25,
  quantity: 1}])

  const updateCart = (id, name, price) => {
    for(let i = 0; i < cart.length; i++) {
      if(cart[i].menuItemId === id) {
        return setCart((prev) => {
          const cartCopy = [...prev];
          cartCopy[i].quantity++;
          return cartCopy
        })
      } 
    }
    setCart((prev) => {
      return [...prev, {
        menuItemId: id,
        itemName: name,
        price: price,
        quantity: 1
      }]
    })
  }

  console.log('customer cart state: ', cart)

  const handleOpen = () => {
    setShowCart(true)
  }

  const handleClose = () => {
    setShowCart(false)
  }

  return(
    <Router>
      <Switch>
        <Route path="/history">
          <UserInfo />
          <UserNav />
          <PreviousOrders />
          <HomeButton />
          <YourCartButton cart={cart} handleOpen={event => handleOpen()}/>
          <Cart cart={cart} showCart={showCart} handleClose={event => handleClose()}/>
        </Route>

        <Route path="/stores/:storeId/menu">
          <StoreInfo />
          <Menu updateCart={updateCart}/>
          <HomeButton />
          <YourCartButton cart={cart} handleOpen={event => handleOpen()}/>
          <Cart cart={cart} showCart={showCart} handleClose={event => handleClose()}/>
        </Route>


        <Route path="/">
          <UserInfo />
          <UserNav />
          <NearbyStores />
          <YourCartButton cart={cart} handleOpen={event => handleOpen()}/>
          <Cart cart={cart} showCart={showCart} handleClose={event => handleClose()}/>
        </Route>
      </Switch>
    </Router>
  )
}