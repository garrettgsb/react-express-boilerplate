import './styles.scss'
import Logout from "./Logout"
import OrderHistory from "./OrderHistory"

function UserNav() {
  return(
    <div className='user-nav-container'>
      <OrderHistory route="/"/>
      <Logout route="/" />
    </div>
  )
}

export default UserNav