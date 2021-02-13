import NearbyStores from './NearbyStores'
import UserInfo from './UserInfo'
import UserNav from './UserNav'
import YourCartButton from './YourCartButton'

function Customer() {

  return(
    <>
    <UserInfo />
    <UserNav />
    <NearbyStores />
    <YourCartButton />
    </>

  )
}

export default Customer;