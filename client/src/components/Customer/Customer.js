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

function Customer() {

  //
  const [showCart, setShowCart] = useState(false)

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
          <YourCartButton handleOpen={event => handleOpen()}/>
          <Cart showCart={showCart} handleClose={event => handleClose()}/>
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

export default Customer;