import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react'
import Stripe from './Stripe'

import NearbyStores from './NearbyStores'
import UserInfo from './UserInfo'
import UserNav from './UserNav'
import YourCartButton from './YourCartButton'
import StoreInfo from './StoreInfo'
import Menu from './Menu'
import HomeButton from './HomeButton';
import PreviousOrders from './PreviousOrders'
import Cart from './Cart'
import OrderConfirmation from './OrderConfirmation';

import { getTotal } from '../../helpers/getTotal'


export default function Customer() {

  const [showCart, setShowCart] = useState(false)
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(getTotal(cart))

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


  useEffect(() => {
    setTotal(getTotal(cart))
  }, [cart])


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
          {cart.length > 0 && 
            <YourCartButton 
              total={total} 
              cart={cart} 
              handleOpen={event => handleOpen()}
            />
          }
          <Cart 
            getTotal={getTotal} 
            cart={cart} 
            showCart={showCart} 
            handleClose={event => handleClose()}
            setCart={setCart}
          />
        </Route>

        <Route path="/checkout">
            <h3>I am STRIPE</h3>
            <Stripe order={order}/>
        </Route>


        <Route path="/stores/:storeId/menu">
          <StoreInfo />
          <Menu updateCart={updateCart}/>
          <HomeButton />
          {cart.length > 0 && 
            <YourCartButton 
              total={total} 
              cart={cart} 
              handleOpen={event => handleOpen()}
            />
          }
          <Cart 
            getTotal={getTotal} 
            cart={cart} 
            showCart={showCart} 
            handleClose={event => handleClose()}
            setCart={setCart}
          />
        </Route>

        <Route path="/orderconfirmed">
          <OrderConfirmation 
            cart={cart}
            total={total}
            setTotal={setTotal}
          />
          <HomeButton />
        </Route>


        <Route path="/">
          <UserInfo />
          <UserNav />
          <NearbyStores />
          {cart.length > 0 && 
            <YourCartButton 
              total={total} 
              cart={cart} 
              handleOpen={event => handleOpen()}
            />
          }
          <Cart 
            getTotal={getTotal} 
            cart={cart} 
            showCart={showCart} 
            handleClose={event => handleClose()}
            setCart={setCart}
          />
        </Route>
      </Switch>
    </Router>
  )
}