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
import Stripe from './Stripe'

export default function Customer() {
  //
  const [showCart, setShowCart] = useState(false)

  const handleOpen = () => {
    setShowCart(true)
  }

  const handleClose = () => {
    setShowCart(false)
  }


  // mockdata
  const order = {
    time_created: "2021-01-01 19:10:25",
    total_price: 1000,
    completed: true,
    user_id: 7,
    order_items: [
      {menu_item_id: 1},
      {menu_item_id: 2},
      {menu_item_id: 3}
    ]
  }

  return(
    <Router>
      <Switch>
        <Route path="/history">
          <UserInfo />
          <UserNav />
          <PreviousOrders />
          <HomeButton />
          <YourCartButton handleOpen={event => handleOpen()}/>
          <Cart showCart={showCart} handleClose={event => handleClose()}/>
        </Route>

        <Route path="/checkout">
            <h3>I am STRIPE</h3>
            <Stripe order={order}/>
        </Route>


        <Route path="/stores/:storeId/menu">
          <StoreInfo />
          <Menu />
          <HomeButton />
          <YourCartButton handleOpen={event => handleOpen()}/>
          <Cart showCart={showCart} handleClose={event => handleClose()}/>
        </Route>


        <Route path="/">
          <UserInfo />
          <UserNav />
          <NearbyStores />
          <YourCartButton handleOpen={event => handleOpen()}/>
          <Cart showCart={showCart} handleClose={event => handleClose()}/>
        </Route>
      </Switch>
    </Router>
  )
}