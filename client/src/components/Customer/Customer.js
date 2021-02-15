import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NearbyStores from './NearbyStores'
import UserInfo from './UserInfo'
import UserNav from './UserNav'
import YourCartButton from './YourCartButton'
import StoreInfo from './StoreInfo'
import Menu from './Menu'
import HomeButton from './HomeButton';

function Customer() {

  return(
    <Router>
      <Switch>
        <Route path="/stores/:storeId/menu">
          <StoreInfo />
          <Menu />
          <HomeButton />
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