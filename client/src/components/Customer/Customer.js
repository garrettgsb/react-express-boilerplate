import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NearbyStores from './NearbyStores'
import UserInfo from './UserInfo'
import UserNav from './UserNav'
import YourCartButton from './YourCartButton'
import StoreInfo from './StoreInfo'

function Customer() {

  return(
    <Router>
      <Switch>
        <Route path="/stores/:storeId/menu">
          <StoreInfo />
          <YourCartButton />
        </Route>


        <Route path="/">
          <UserInfo />
          <UserNav />
          <NearbyStores />
          <YourCartButton />
        </Route>
      </Switch>
    </Router>
  )
}

export default Customer;