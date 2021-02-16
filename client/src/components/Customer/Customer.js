import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NearbyStores from './NearbyStores'
import UserInfo from './UserInfo'
import UserNav from './UserNav'
import YourCartButton from './YourCartButton'
import StoreInfo from './StoreInfo'
import Menu from './Menu'
import HomeButton from './HomeButton';
import PreviousOrders from './PreviousOrders'

function Customer(props) {

  console.log('customer', props)
   
  return(
    <Router>
      <Switch>
        <Route path="/history">
          <UserInfo />
          <UserNav />
          <PreviousOrders />
          <HomeButton />
          <YourCartButton />
        </Route>

        <Route path="/stores/:storeId/menu">
          <StoreInfo />
          <Menu menuItems={props.state.menuItems}/>
          <HomeButton />
          <YourCartButton />
        </Route>


        <Route path="/">
          <UserInfo />
          <UserNav />
          <NearbyStores stores={props.state.stores} setStore={props.setStore}/>
          <YourCartButton />
        </Route>
      </Switch>
    </Router>
  )
}

export default Customer;