
import { Modal } from '@material-ui/core'
import './styles.scss'

function Cart(props) {

  const cartData = (
    <div className='cart-data'>
      <h2>I am the cart data</h2>
    </div>
  )



  return(
    <Modal
    open={props.showCart}
    onClose={props.handleClose}
    >
      {cartData}
    </Modal>
  )
}

export default Cart